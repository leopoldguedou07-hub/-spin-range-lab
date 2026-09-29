"""Blender helpers: mesh creation, decimation, bone material, studio lights,
preview renders, LODs and export."""
import math
import bpy
import bmesh
import numpy as np
from mathutils import Vector, Matrix

# Scale used by the reference Espece_Triceratops.blend (~9 m animal -> ~42.5 units).
UNITS_PER_METRE = 4.72


# ------------------------------------------------------------------ scene ---
def reset_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    s = bpy.context.scene
    s.unit_settings.system = 'METRIC'
    s.render.engine = 'CYCLES'
    s.cycles.device = 'CPU'
    return s


def collection(name, parent=None):
    c = bpy.data.collections.get(name) or bpy.data.collections.new(name)
    parent = parent or bpy.context.scene.collection
    if c.name not in parent.children:
        parent.children.link(c)
    return c


def mesh_object(name, verts, faces, coll, mat=None):
    me = bpy.data.meshes.new(name)
    me.from_pydata([tuple(v) for v in verts], [], [tuple(f) for f in faces])
    me.validate(clean_customdata=False)
    ob = bpy.data.objects.new(name, me)
    coll.objects.link(ob)
    bm = bmesh.new()
    bm.from_mesh(me)
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-6)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bm.to_mesh(me)
    bm.free()
    if mat:
        me.materials.append(mat)
    return ob


def tri_count(ob):
    return sum(len(p.vertices) - 2 for p in ob.data.polygons)


def area(ob):
    return sum(p.area for p in ob.data.polygons)


def decimate(ob, target_tris):
    """Collapse-decimate in place to about target_tris triangles."""
    cur = tri_count(ob)
    if cur <= target_tris:
        return
    m = ob.modifiers.new('dec', 'DECIMATE')
    m.decimate_type = 'COLLAPSE'
    m.ratio = max(target_tris / cur, 0.001)
    m.use_collapse_triangulate = True
    dg = bpy.context.evaluated_depsgraph_get()
    new = bpy.data.meshes.new_from_object(ob.evaluated_get(dg))
    old = ob.data
    ob.modifiers.remove(m)
    ob.data = new
    new.name = old.name
    bpy.data.meshes.remove(old)


def finish_mesh(ob):
    me = ob.data
    bm = bmesh.new()
    bm.from_mesh(me)
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-5)
    bmesh.ops.dissolve_degenerate(bm, edges=bm.edges, dist=1e-6)
    loose = [v for v in bm.verts if not v.link_faces]
    bmesh.ops.delete(bm, geom=loose, context='VERTS')
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bm.to_mesh(me)
    bm.free()
    me.shade_smooth()


def scale_to_units(objs, k=UNITS_PER_METRE):
    """Bake the metre->stud scale into mesh data (so object scale stays 1)."""
    done = set()
    for ob in objs:
        if ob.data.name in done:
            ob.location = ob.location * k
            continue
        ob.data.transform(Matrix.Scale(k, 4))
        ob.location = ob.location * k
        done.add(ob.data.name)


def set_origin_to_center(ob):
    me = ob.data
    co = np.empty(len(me.vertices) * 3)
    me.vertices.foreach_get('co', co)
    co = co.reshape(-1, 3)
    c = (co.min(0) + co.max(0)) / 2
    me.transform(Matrix.Translation(Vector(-c)))
    ob.location = Vector(c)


# --------------------------------------------------------------- material ---
def srgb(h):
    h = h.lstrip('#')
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple(((x + 0.055) / 1.055) ** 2.4 if x > 0.04045 else x / 12.92 for x in c) + (1.0,)


def bone_material(name='Museum Bone — Warm Ivory', base='#E6D5B0', dark='#8A6E48',
                  crack_col='#5A4630', scale=1.0):
    """Procedural museum-fossil bone: ivory base, subtle colour drift, darker
    cavities, pores + hairline cracks through bump, variable roughness.
    `scale` = scene units per metre so patterns keep a real-world size."""
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    N, L = nt.nodes, nt.links
    N.clear()

    def sock(n, name, out=False):
        for so in (n.outputs if out else n.inputs):
            if so.name == name and so.enabled:
                return so
        raise KeyError(name)

    def node(t, x, y, **kw):
        n = N.new(t)
        n.location = (x, y)
        for k, v in kw.items():
            if k in n.inputs:
                n.inputs[k].default_value = v
            else:
                setattr(n, k, v)
        return n

    out = node('ShaderNodeOutputMaterial', 1400, 0)
    bsdf = node('ShaderNodeBsdfPrincipled', 1100, 0)
    bsdf.inputs['Subsurface Weight'].default_value = 0.04
    bsdf.inputs['Subsurface Radius'].default_value = (0.02 * scale, 0.012 * scale, 0.006 * scale)
    bsdf.inputs['Specular IOR Level'].default_value = 0.35
    L.new(bsdf.outputs[0], out.inputs[0])

    tc = node('ShaderNodeTexCoord', -1400, 0)
    mp = node('ShaderNodeMapping', -1200, 0)
    mp.inputs['Scale'].default_value = (1 / scale,) * 3
    L.new(tc.outputs['Object'], mp.inputs[0])
    co = mp.outputs[0]

    # broad colour drift (metres-scale patches) + finer mottling
    n1 = node('ShaderNodeTexNoise', -900, 300, **{'Scale': 2.2, 'Detail': 6.0, 'Roughness': 0.55})
    n2 = node('ShaderNodeTexNoise', -900, 60, **{'Scale': 18.0, 'Detail': 4.0, 'Roughness': 0.6})
    L.new(co, n1.inputs['Vector'])
    L.new(co, n2.inputs['Vector'])
    mix_n = node('ShaderNodeMix', -650, 250, data_type='FLOAT')
    sock(mix_n,'Factor').default_value = 0.35
    L.new(n1.outputs['Fac'], sock(mix_n,'A'))
    L.new(n2.outputs['Fac'], sock(mix_n,'B'))
    ramp = node('ShaderNodeValToRGB', -450, 300)
    r = ramp.color_ramp
    r.elements[0].position, r.elements[0].color = 0.18, srgb(dark)
    r.elements[1].position, r.elements[1].color = 0.62, srgb(base)
    e = r.elements.new(0.45)
    bc = srgb(base)
    e.color = tuple(c * 0.9 for c in bc[:3]) + (1,)
    L.new(sock(mix_n,'Result',True), ramp.inputs[0])

    # cavity darkening (AO) — bakes into the game texture too
    ao = node('ShaderNodeAmbientOcclusion', -450, 560, samples=12)
    ao.inputs['Distance'].default_value = 0.08 * scale
    ao_r = node('ShaderNodeMapRange', -250, 560)
    ao_r.inputs['From Min'].default_value = 0.15
    ao_r.inputs['From Max'].default_value = 0.95
    L.new(ao.outputs['AO'], ao_r.inputs['Value'])
    mix_ao = node('ShaderNodeMix', -50, 380, data_type='RGBA', blend_type='MULTIPLY')
    L.new(ramp.outputs['Color'], sock(mix_ao,'A'))
    dk = srgb(dark)
    sock(mix_ao,'B').default_value = tuple(c * 0.9 for c in dk[:3]) + (1,)
    inv = node('ShaderNodeMath', -80, 600, operation='SUBTRACT')
    inv.inputs[0].default_value = 1.0
    L.new(ao_r.outputs[0], inv.inputs[1])
    L.new(inv.outputs[0], sock(mix_ao,'Factor'))

    # hairline cracks: voronoi edge distance -> thin lines
    vc = node('ShaderNodeTexVoronoi', -900, -250, feature='DISTANCE_TO_EDGE')
    vc.inputs['Scale'].default_value = 7.0
    wn = node('ShaderNodeTexNoise', -1100, -300, **{'Scale': 5.0, 'Detail': 3.0})
    warp = node('ShaderNodeMix', -1000, -150, data_type='VECTOR')
    sock(warp,'Factor').default_value = 0.18
    L.new(co, sock(warp,'A'))
    L.new(wn.outputs['Color'], sock(warp,'B'))
    L.new(co, wn.inputs['Vector'])
    L.new(sock(warp,'Result',True), vc.inputs['Vector'])
    cr = node('ShaderNodeMapRange', -700, -250)
    cr.inputs['From Min'].default_value = 0.0
    cr.inputs['From Max'].default_value = 0.035
    cr.inputs['To Min'].default_value = 1.0
    cr.inputs['To Max'].default_value = 0.0
    L.new(vc.outputs['Distance'], cr.inputs['Value'])
    # only some cells crack: mask with low-freq noise
    cm = node('ShaderNodeTexNoise', -900, -480, **{'Scale': 3.0, 'Detail': 2.0})
    L.new(co, cm.inputs['Vector'])
    cmr = node('ShaderNodeMapRange', -700, -480)
    cmr.inputs['From Min'].default_value = 0.56
    cmr.inputs['From Max'].default_value = 0.66
    L.new(cm.outputs['Fac'], cmr.inputs['Value'])
    crack = node('ShaderNodeMath', -500, -300, operation='MULTIPLY')
    L.new(cr.outputs[0], crack.inputs[0])
    L.new(cmr.outputs[0], crack.inputs[1])

    mix_cr = node('ShaderNodeMix', 200, 300, data_type='RGBA')
    L.new(crack.outputs[0], sock(mix_cr,'Factor'))
    L.new(sock(mix_ao,'Result',True), sock(mix_cr,'A'))
    sock(mix_cr,'B').default_value = srgb(crack_col)
    fc = node('ShaderNodeMath', 50, 180, operation='MULTIPLY')
    fc.inputs[1].default_value = 0.45
    L.new(crack.outputs[0], fc.inputs[0])
    L.new(fc.outputs[0], sock(mix_cr,'Factor'))
    # pores read as tiny dark speckles in the colour as well
    pinv = node('ShaderNodeMapRange', 400, 520)
    pinv.inputs['From Min'].default_value = 0.0
    pinv.inputs['From Max'].default_value = 0.5
    pinv.inputs['To Min'].default_value = 0.35
    pinv.inputs['To Max'].default_value = 0.0
    pmix = node('ShaderNodeMix', 600, 300, data_type='RGBA', blend_type='MULTIPLY')
    L.new(sock(mix_cr, 'Result', True), sock(pmix, 'A'))
    sock(pmix, 'B').default_value = srgb(dark)
    L.new(pinv.outputs[0], sock(pmix, 'Factor'))
    L.new(sock(pmix, 'Result', True), bsdf.inputs['Base Color'])

    # pores: small voronoi pits
    vp = node('ShaderNodeTexVoronoi', -900, -700)
    vp.inputs['Scale'].default_value = 260.0
    vp.inputs['Randomness'].default_value = 1.0
    L.new(co, vp.inputs['Vector'])
    pr = node('ShaderNodeMapRange', -700, -700)
    pr.inputs['From Min'].default_value = 0.0
    pr.inputs['From Max'].default_value = 0.35
    pr.inputs['To Min'].default_value = 0.0
    pr.inputs['To Max'].default_value = 1.0
    L.new(vp.outputs['Distance'], pr.inputs['Value'])
    L.new(pr.outputs[0], pinv.inputs['Value'])
    # fine grain
    fg = node('ShaderNodeTexNoise', -900, -900, **{'Scale': 90.0, 'Detail': 8.0, 'Roughness': 0.7})
    L.new(co, fg.inputs['Vector'])

    # broad undulations (muscle scars / fibrous periosteum): metre-scale bumps
    ms = node('ShaderNodeTexNoise', -900, -1100, **{'Scale': 11.0, 'Detail': 5.0, 'Roughness': 0.55})
    ms.noise_dimensions = '3D'
    L.new(co, ms.inputs['Vector'])
    # directional fibres: stretched noise along local X
    fib_map = node('ShaderNodeMapping', -1100, -1300)
    fib_map.inputs['Scale'].default_value = (1.0, 7.0, 7.0)
    L.new(co, fib_map.inputs['Vector'])
    fib = node('ShaderNodeTexNoise', -900, -1300, **{'Scale': 30.0, 'Detail': 4.0, 'Roughness': 0.6})
    L.new(fib_map.outputs[0], fib.inputs['Vector'])
    h0 = node('ShaderNodeMath', -500, -1150, operation='MULTIPLY_ADD')
    L.new(ms.outputs['Fac'], h0.inputs[0])
    h0.inputs[1].default_value = 2.2
    L.new(fib.outputs['Fac'], h0.inputs[2])
    h = node('ShaderNodeMath', -300, -700, operation='MULTIPLY_ADD')
    L.new(pr.outputs[0], h.inputs[0])
    h.inputs[1].default_value = 0.9
    L.new(fg.outputs['Fac'], h.inputs[2])
    hsum = node('ShaderNodeMath', -250, -900, operation='ADD')
    L.new(h.outputs[0], hsum.inputs[0])
    L.new(h0.outputs[0], hsum.inputs[1])
    h2 = node('ShaderNodeMath', -150, -600, operation='SUBTRACT')
    L.new(hsum.outputs[0], h2.inputs[0])
    L.new(crack.outputs[0], h2.inputs[1])

    bump = node('ShaderNodeBump', 800, -400)
    bump.inputs['Strength'].default_value = 0.55
    bump.inputs['Distance'].default_value = 0.0022 * scale
    L.new(h2.outputs[0], bump.inputs['Height'])
    L.new(bump.outputs[0], bsdf.inputs['Normal'])

    # roughness 0.62..0.88, rougher in pores/cracks
    rg = node('ShaderNodeMapRange', 800, -150)
    rg.inputs['To Min'].default_value = 0.62
    rg.inputs['To Max'].default_value = 0.88
    rmix = node('ShaderNodeMath', 600, -150, operation='MULTIPLY_ADD')
    L.new(n2.outputs['Fac'], rmix.inputs[0])
    rmix.inputs[1].default_value = 0.7
    L.new(crack.outputs[0], rmix.inputs[2])
    L.new(rmix.outputs[0], rg.inputs['Value'])
    L.new(rg.outputs[0], bsdf.inputs['Roughness'])
    return m


# ------------------------------------------------------------- lighting ---
def studio(scale=1.0, bg=(0.035, 0.032, 0.03)):
    s = bpy.context.scene
    w = bpy.data.worlds.new('Studio')
    w.use_nodes = True
    w.node_tree.nodes['Background'].inputs[0].default_value = bg + (1,)
    w.node_tree.nodes['Background'].inputs[1].default_value = 1.0
    s.world = w
    rig = collection('LIGHTS')

    def area_light(name, loc, energy, size, color=(1, 1, 1)):
        ld = bpy.data.lights.new(name, 'AREA')
        ld.energy = energy * scale * scale
        ld.size = size * scale
        ld.color = color
        ob = bpy.data.objects.new(name, ld)
        ob.location = Vector(loc) * scale
        rig.objects.link(ob)
        return ob
    fm = bpy.data.materials.new('Studio_Floor')
    fm.use_nodes = True
    fb = fm.node_tree.nodes['Principled BSDF']
    fb.inputs['Base Color'].default_value = (0.012, 0.011, 0.01, 1)
    fb.inputs['Roughness'].default_value = 0.8
    bpy.ops.mesh.primitive_plane_add(size=400 * scale)
    fl = bpy.context.active_object
    fl.name = 'Studio_Floor'
    fl.data.materials.append(fm)
    for c in fl.users_collection:
        c.objects.unlink(fl)
    rig.objects.link(fl)
    key = area_light('Key_Light', (4, -6, 6), 1100, 4.0, (1.0, 0.95, 0.88))
    fill = area_light('Fill_Light', (-6, -4, 2.5), 260, 6.0, (0.88, 0.93, 1.0))
    rim = area_light('Rim_Light', (-2, 7, 5), 900, 3.0, (1.0, 0.97, 0.92))
    return [key, fill, rim]


def aim_lights(lights, target):
    for l in lights:
        d = Vector(target) - l.location
        l.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()


def camera(name='Camera'):
    cd = bpy.data.cameras.new(name)
    ob = bpy.data.objects.new(name, cd)
    bpy.context.scene.collection.objects.link(ob)
    bpy.context.scene.camera = ob
    return ob


def bounds(objs):
    pts = [o.matrix_world @ Vector(c) for o in objs for c in o.bound_box]
    mn = Vector([min(p[i] for p in pts) for i in range(3)])
    mx = Vector([max(p[i] for p in pts) for i in range(3)])
    return mn, mx


def frame(objs, cam, direction=(0.25, -1.0, 0.18), margin=1.08, lens=60, aspect=16 / 9):
    mn, mx = bounds(objs)
    c = (mn + mx) / 2
    d = Vector(direction).normalized()
    cam.data.lens = lens
    cam.data.sensor_fit = 'HORIZONTAL'
    # distance so the bounding sphere fits the vertical FOV (roughly)
    r = (mx - mn).length / 2
    fov_h = 2 * math.atan(cam.data.sensor_width / 2 / lens)
    fov_v = 2 * math.atan(math.tan(fov_h / 2) / aspect)
    # project box onto view plane for a tighter fit
    q = d.to_track_quat('Z', 'Y')
    right, up = q @ Vector((1, 0, 0)), q @ Vector((0, 1, 0))
    corners = [Vector((x, y, z)) for x in (mn.x, mx.x) for y in (mn.y, mx.y) for z in (mn.z, mx.z)]
    w = max(abs((p - c).dot(right)) for p in corners)
    h = max(abs((p - c).dot(up)) for p in corners)
    dist = max(w / math.tan(fov_h / 2), h / math.tan(fov_v / 2)) * margin + r * 0.2
    cam.location = c + d * dist
    cam.rotation_euler = (-d).to_track_quat('-Z', 'Y').to_euler()
    cam.data.clip_start = dist * 0.01
    cam.data.clip_end = dist * 4
    return c


def render(path, res=(1600, 900), samples=48):
    s = bpy.context.scene
    s.render.engine = 'CYCLES'
    s.cycles.samples = samples
    s.cycles.use_denoising = True
    s.render.resolution_x, s.render.resolution_y = res
    s.render.resolution_percentage = 100
    s.view_settings.view_transform = 'Standard'
    s.view_settings.look = 'Medium High Contrast'
    s.render.filepath = path
    bpy.ops.render.render(write_still=True)


# ------------------------------------------------------------------ LOD ---
def joined_copy(objs, name, coll):
    """Join copies of objs into one new mesh object (sources untouched)."""
    bpy.context.view_layer.update()
    bm = bmesh.new()
    for o in objs:
        me = o.data.copy()
        me.transform(o.matrix_world)
        bm.from_mesh(me)
        bpy.data.meshes.remove(me)
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new(name, me)
    coll.objects.link(ob)
    if objs[0].data.materials:
        me.materials.append(objs[0].data.materials[0])
    me.shade_smooth()
    return ob


def export(objs, path_noext, fmt):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    if fmt == 'fbx':
        bpy.ops.export_scene.fbx(filepath=path_noext + '.fbx', use_selection=True,
                                 apply_unit_scale=True, object_types={'MESH'},
                                 mesh_smooth_type='FACE', path_mode='COPY', embed_textures=True)
    elif fmt == 'glb':
        bpy.ops.export_scene.gltf(filepath=path_noext + '.glb', use_selection=True,
                                  export_format='GLB', export_apply=True)
    elif fmt == 'obj':
        bpy.ops.wm.obj_export(filepath=path_noext + '.obj', export_selected_objects=True,
                              export_materials=True)


PIECE_COLORS = ['#E6194B', '#3CB44B', '#FFE119', '#4363D8', '#F58231', '#911EB4',
                '#42D4F4', '#F032E6', '#BFEF45', '#FABED4', '#469990', '#DCBEFF']


def show_pieces(pieces, key):
    """Open the file on the cut: only the pieces are visible in the viewport, each in
    its own colour (Solid shading, Object colour); renders keep the ivory material."""
    for i, o in enumerate(pieces):
        h = PIECE_COLORS[i % len(PIECE_COLORS)].lstrip('#')
        o.color = [int(h[j:j + 2], 16) / 255 for j in (0, 2, 4)] + [1.0]
    for lc in bpy.context.view_layer.layer_collection.children:
        if lc.name.startswith('LOD_'):
            lc.exclude = True
        elif lc.name.startswith('SKELETON_'):
            lc.hide_viewport = True
        elif lc.name == f'Pieces_{key}':
            lc.exclude = False
            lc.hide_viewport = False
    for s in bpy.data.screens:
        for a in s.areas:
            if a.type == 'VIEW_3D':
                sh = a.spaces[0].shading
                sh.type = 'SOLID'
                sh.color_type = 'OBJECT'
