"""Build one species: python build.py <species_module> [--quick] [--no-export]

Produces out/<Key>/Espece_<Key>.blend, per-piece FBX (Os_<Piece>_<Key>.fbx),
whole-skeleton FBX/GLB/OBJ and preview renders in renders/<Key>/.
"""
import os
import sys
import time
import importlib
import multiprocessing as mp
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path[:0] = [os.path.join(HERE, 'lib'), HERE]

import bpy  # noqa: E402
import sdf  # noqa: E402
import bl  # noqa: E402

args = [a for a in sys.argv[1:] if not a.startswith('--')]
QUICK = '--quick' in sys.argv
EXPORT = '--no-export' not in sys.argv and not QUICK
RENDER = '--no-render' not in sys.argv
mod = importlib.import_module('species.' + args[0])
SPEC = mod.SPEC
KEY = SPEC['key']
BONES = mod.bones()
OUT = os.path.join(HERE, 'out', KEY)
REN = os.path.join(HERE, 'renders', KEY)
os.makedirs(OUT, exist_ok=True)
os.makedirs(REN, exist_ok=True)


def _mesh(i):
    b = BONES[i]
    if 'instance_of' in b:
        return i, None, None, 0.0
    vox = b['voxel'] * (1.8 if QUICK else 1.0)
    t = time.time()
    v, f = sdf.mesh(b['shape'], vox)
    if v is None:
        return i, None, None, time.time() - t
    return i, v.astype(np.float32), f.astype(np.int32), time.time() - t


def main():
    t0 = time.time()
    bl.reset_scene()
    mat = bl.bone_material(base=SPEC.get('base', '#E6D5B0'), dark=SPEC.get('dark', '#8A6E48'),
                           scale=bl.UNITS_PER_METRE)
    root = bl.collection('SKELETON_' + KEY.upper())
    colls = {}

    def coll_for(path):
        parent = root
        key = ()
        for p in path:
            key += (p,)
            if key not in colls:
                colls[key] = bl.collection(p, parent)
            parent = colls[key]
        return parent

    with mp.get_context('fork').Pool(os.cpu_count()) as pool:
        results = pool.map(_mesh, range(len(BONES)), chunksize=1)
    objs = {}
    for i, v, f, dt in results:
        b = BONES[i]
        if 'instance_of' in b:
            continue
        if v is None:
            print('!! empty bone', b['name'])
            continue
        ob = bl.mesh_object(b['name'], v, f, coll_for(b['coll']), mat)
        objs[b['name']] = ob
    print(f'meshed {len(objs)} bones in {time.time() - t0:.1f}s')

    # --- triangle budget by surface area --------------------------------
    budget = SPEC['budget'] * (0.5 if QUICK else 1.0)
    uses = {n: 1 for n in objs}
    for x in BONES:
        if 'instance_of' in x:
            uses[x['instance_of']] += 1
    areas = {n: bl.area(o) for n, o in objs.items()}
    tot = sum(areas[n] * uses[n] for n in objs)
    raw = sum(bl.tri_count(o) for o in objs.values())
    for n, o in objs.items():
        b = next(x for x in BONES if x['name'] == n)
        tgt = max(b.get('min_tris', 120), budget * areas[n] / tot * b.get('weight', 1.0))
        if b.get('max_tris'):
            tgt = min(tgt, b['max_tris'])
        bl.decimate(o, int(tgt))
        bl.finish_mesh(o)
        bl.set_origin_to_center(o)
        o.data.name = o.name
    # stand the skeleton on the ground (z = 0)
    bpy.context.view_layer.update()
    zmin = min(bl.bounds([o])[0].z for o in objs.values())
    for o in objs.values():
        o.location.z -= zmin
    bpy.context.view_layer.update()
    bl.scale_to_units(list(objs.values()))
    # linked duplicates: same mesh data, rigid transform relative to the source
    from mathutils import Matrix
    k = bl.UNITS_PER_METRE
    S = Matrix.Scale(k, 4)
    Sh = Matrix.Translation((0, 0, -zmin * k))
    bpy.context.view_layer.update()
    for x in BONES:
        if 'instance_of' not in x:
            continue
        src = objs[x['instance_of']]
        rel = Matrix([list(r) for r in (np.asarray(x['M']) @ np.linalg.inv(np.asarray(x['M_src'])))])
        ob = bpy.data.objects.new(x['name'], src.data)
        coll_for(x['coll']).objects.link(ob)
        ob.matrix_world = Sh @ S @ rel @ S.inverted() @ Sh.inverted() @ src.matrix_world
        objs[x['name']] = ob
    bpy.context.view_layer.update()
    lod0 = sum(bl.tri_count(o) for o in objs.values())
    print(f'triangles raw {raw} -> LOD0 {lod0}')

    # --- pieces (same geometry, laid out behind the skeleton) -----------
    pc = bl.collection('Pieces_' + KEY)
    mn, mx = bl.bounds(list(objs.values()))
    x = mn.x
    y = mx.y + (mx.y - mn.y) * 0.6
    pieces = []
    for piece, names in SPEC['pieces'].items():
        src = [objs[n] for n in names if n in objs]
        if not src:
            print('!! piece without bones', piece)
            continue
        ob = bl.joined_copy(src, f'Os_{piece}_{KEY}_01', pc)
        ob.data.name = ob.name
        bl.set_origin_to_center(ob)
        w = ob.dimensions.x
        ob.location = (x + w / 2, y, ob.dimensions.z / 2 + 0.0)
        x += w + 1.0
        pieces.append(ob)

    # --- LOD1 / LOD2 (joined per region, each < 20k tris for Roblox) -----
    lodc = bl.collection('LOD_' + KEY)
    lods = []
    for region in root.children:
        src = [o for o in region.all_objects if o.type == 'MESH']
        if not src:
            continue
        for lvl, ratio in (('LOD1', 0.5), ('LOD2', 0.22)):
            ob = bl.joined_copy(src, f'Squelette_{KEY}_{lvl}_{region.name}', lodc)
            bl.decimate(ob, int(sum(bl.tri_count(s) for s in src) * ratio))
            bl.finish_mesh(ob)
            lods.append(ob)
    for lvl in ('LOD1', 'LOD2'):
        print(lvl, sum(bl.tri_count(o) for o in lods if f'_{lvl}_' in o.name))

    # --- studio, previews ---------------------------------------------------
    sk = list(objs.values())
    mn, mx = bl.bounds(sk)
    size = (mx - mn).length
    lights = bl.studio(scale=size / 6)
    bl.aim_lights(lights, (mn + mx) / 2)
    cam = bl.camera()
    for o in pieces + lods:
        o.hide_render = True
    if RENDER:
        smp = 16 if QUICK else 64
        for tag, d in SPEC.get('views', {'34': (0.55, -1.0, 0.22), 'side': (0.0, -1.0, 0.02)}).items():
            bl.frame(sk, cam, d)
            bl.render(os.path.join(REN, f'{KEY}_{tag}.png'), samples=smp)
        for tag, names in SPEC.get('closeups', {}).items():
            sel = [objs[n] for n in names if n in objs]
            bl.frame(sel, cam, SPEC.get('closeup_dir', (0.7, -1.0, 0.25)), margin=1.15)
            bl.render(os.path.join(REN, f'{KEY}_{tag}.png'), samples=smp)
        # pieces sheet
        for o in sk:
            o.hide_render = True
        for o in pieces:
            o.hide_render = False
        bl.frame(pieces, cam, (0.0, -1.0, 0.35), margin=1.05, aspect=16 / 9)
        bl.render(os.path.join(REN, f'{KEY}_pieces.png'), samples=smp)
        for o in sk:
            o.hide_render = False
        for o in pieces:
            o.hide_render = True
    # restore a pleasant default camera
    bl.frame(sk, cam, (0.55, -1.0, 0.22))
    lodc.hide_render = True
    for lc in bpy.context.view_layer.layer_collection.children:
        if lc.name == lodc.name:
            lc.exclude = True

    # --- save & export --------------------------------------------------------
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT, f'Espece_{KEY}.blend'), compress=True)
    if EXPORT:
        ex = os.path.join(OUT, 'export')
        os.makedirs(ex, exist_ok=True)
        for lc in bpy.context.view_layer.layer_collection.children:
            lc.exclude = False
        for o in pieces:
            loc = o.location.copy()
            o.location = (0, 0, 0)
            bl.export([o], os.path.join(ex, o.name.rsplit('_', 1)[0]), 'fbx')
            o.location = loc
        for fmt in ('fbx', 'glb', 'obj'):
            bl.export(sk, os.path.join(ex, f'Squelette_{KEY}'), fmt)
    print(f'done in {time.time() - t0:.1f}s')


if __name__ == '__main__':
    main()
