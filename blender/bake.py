"""Bake game textures for the catalogue pieces of one species:
python bake.py <Key> [--res 1024]

For each Os_<Piece>_<Key>_01 object: Smart-UV unwrap, bake the procedural
bone shader into Color (with cavity AO), tangent-space Normal (pores, cracks,
fibres) and Roughness maps, swap in an image-based material, then export
export/roblox/Os_<Piece>_<Key>.fbx with its PNGs next to it (ready for a
Roblox MeshPart + SurfaceAppearance). The .blend is saved with the baked
materials on the pieces; the full skeleton keeps the procedural shader.
"""
import os
import sys
import bpy

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path[:0] = [os.path.join(HERE, 'lib')]
import bl  # noqa: E402

args = [a for a in sys.argv[1:] if not a.startswith('--')]
KEY = args[0]
RES = int(sys.argv[sys.argv.index('--res') + 1]) if '--res' in sys.argv else 1024
OUT = os.path.join(os.environ.get('OUTROOT', os.path.join(HERE, 'out')), KEY)
BLEND = os.path.join(OUT, f'Espece_{KEY}.blend')
RBX = os.path.join(OUT, 'export', 'roblox')
os.makedirs(RBX, exist_ok=True)

bpy.ops.wm.open_mainfile(filepath=BLEND)
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.samples = 16
scene.cycles.use_denoising = False
for lc in bpy.context.view_layer.layer_collection.children:
    lc.exclude = False

pieces = [o for o in bpy.data.collections[f'Pieces_{KEY}'].objects if o.type == 'MESH']


def unwrap(ob):
    bpy.ops.object.select_all(action='DESELECT')
    ob.select_set(True)
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='SELECT')
    bpy.ops.uv.smart_project(angle_limit=1.15, island_margin=0.004, area_weight=0.6, scale_to_bounds=True)
    bpy.ops.object.mode_set(mode='OBJECT')


def bake_map(ob, mat, kind, colorspace):
    img = bpy.data.images.new(f'{ob.name}_{kind}', RES, RES, alpha=False, float_buffer=False)
    img.colorspace_settings.name = colorspace
    nt = mat.node_tree
    tex = nt.nodes.new('ShaderNodeTexImage')
    tex.image = img
    for n in nt.nodes:
        n.select = False
    tex.select = True
    nt.nodes.active = tex
    if kind == 'Color':
        bpy.ops.object.bake(type='DIFFUSE', pass_filter={'COLOR'}, margin=6, use_clear=True)
    elif kind == 'Normal':
        bpy.ops.object.bake(type='NORMAL', normal_space='TANGENT', margin=6, use_clear=True)
    else:
        bpy.ops.object.bake(type='ROUGHNESS', margin=6, use_clear=True)
    nt.nodes.remove(tex)
    base = ob.name.rsplit('_', 1)[0]
    img.filepath_raw = os.path.join(RBX, f'{base}_{kind}.png')
    img.file_format = 'PNG'
    img.save()
    return img


def baked_material(name, col, nrm, rgh):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    b = nt.nodes['Principled BSDF']
    tc = nt.nodes.new('ShaderNodeTexImage'); tc.image = col
    tn = nt.nodes.new('ShaderNodeTexImage'); tn.image = nrm
    tr = nt.nodes.new('ShaderNodeTexImage'); tr.image = rgh
    nm = nt.nodes.new('ShaderNodeNormalMap')
    nt.links.new(tc.outputs['Color'], b.inputs['Base Color'])
    nt.links.new(tr.outputs['Color'], b.inputs['Roughness'])
    nt.links.new(tn.outputs['Color'], nm.inputs['Color'])
    nt.links.new(nm.outputs['Normal'], b.inputs['Normal'])
    for i, n in enumerate((tc, tn, tr)):
        n.location = (-500, 300 - 300 * i)
    nm.location = (-200, -100)
    return m


for ob in pieces:
    ob.hide_render = False
    unwrap(ob)
    proc = ob.data.materials[0].copy()          # bake from a private copy of the procedural shader
    ob.data.materials[0] = proc
    col = bake_map(ob, proc, 'Color', 'sRGB')
    nrm = bake_map(ob, proc, 'Normal', 'Non-Color')
    rgh = bake_map(ob, proc, 'Roughness', 'Non-Color')
    ob.data.materials[0] = baked_material(f'{ob.name}_Baked', col, nrm, rgh)
    bpy.data.materials.remove(proc)
    loc = ob.location.copy()
    ob.location = (0, 0, 0)
    bpy.ops.object.select_all(action='DESELECT')
    ob.select_set(True)
    bpy.context.view_layer.objects.active = ob
    bpy.ops.export_scene.fbx(filepath=os.path.join(RBX, ob.name.rsplit('_', 1)[0] + '.fbx'), use_selection=True,
                             apply_unit_scale=True, object_types={'MESH'}, mesh_smooth_type='FACE',
                             path_mode='COPY', embed_textures=False)
    ob.location = loc
    print('baked', ob.name, flush=True)

for lc in bpy.context.view_layer.layer_collection.children:
    if lc.name.startswith('LOD_'):
        lc.exclude = True
for img in bpy.data.images:
    if img.filepath_raw.startswith(RBX):
        img.pack()
bpy.ops.wm.save_as_mainfile(filepath=BLEND, compress=True)
print('done', KEY)
