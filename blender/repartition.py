"""Cut a built skeleton into its catalogue pieces: python repartition.py <Key>

Every bone of SKELETON_<KEY> goes into exactly one Os_<Piece>_<Key>_01 mesh
(rules in partition.py). Pieces stay in place, so together they rebuild the
whole skeleton; each stays under Roblox's 20k-triangle mesh limit.
Exports export/Os_<Piece>_<Key>.fbx (origin at the piece centre), the
assembled set export/Squelette_<Key>_Pieces.fbx, and pieces_layout.json
(piece centres in studs) for reassembly in game. Renders an exploded view.
"""
import os
import sys
import json
import glob
import bpy
from mathutils import Vector

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path[:0] = [os.path.join(HERE, 'lib'), HERE]
import bl  # noqa: E402
from partition import piece_of, PARTS  # noqa: E402

KEY = [a for a in sys.argv[1:] if not a.startswith('--')][0]
OUT = os.path.join(HERE, 'out', KEY)
EX = os.path.join(OUT, 'export')
REN = os.path.join(HERE, 'renders', KEY)
MAX_TRIS = 19500

bpy.ops.wm.open_mainfile(filepath=os.path.join(OUT, f'Espece_{KEY}.blend'))
for lc in bpy.context.view_layer.layer_collection.children:
    lc.exclude = False
root = next(c for c in bpy.data.collections if c.name.startswith('SKELETON_'))
bones = [o for o in root.all_objects if o.type == 'MESH']

# remove the previous single-bone pieces
old = bpy.data.collections.get(f'Pieces_{KEY}')
if old:
    for o in list(old.objects):
        bpy.data.objects.remove(o, do_unlink=True)
else:
    old = bl.collection(f'Pieces_{KEY}')
pc = old

groups, missing = {}, []
for o in bones:
    p = piece_of(KEY, o.name)
    (groups.setdefault(p, []) if p else missing).append(o)
if missing:
    print('!! bones without a piece:', [o.name for o in missing])
    sys.exit(1)
order = [p for p, _ in PARTS[KEY]]
pieces = []
for p in sorted(groups, key=order.index):
    ob = bl.joined_copy(groups[p], f'Os_{p}_{KEY}_01', pc)
    t = bl.tri_count(ob)
    if t > MAX_TRIS:
        bl.decimate(ob, MAX_TRIS)
    bl.finish_mesh(ob)
    bl.set_origin_to_center(ob)
    ob.data.name = ob.name
    pieces.append(ob)
    print(f'{ob.name}: {len(groups[p])} os, {t} -> {bl.tri_count(ob)} tris')

# the modular skeleton stays in the file (hidden) for editing; pieces are the visible assembly
for lc in bpy.context.view_layer.layer_collection.children:
    if lc.name == root.name:
        lc.hide_viewport = True
root.hide_render = True
bpy.context.view_layer.update()

# layout for in-game reassembly
layout = {o.name.rsplit('_', 1)[0]: dict(center_studs=[round(v, 4) for v in o.location], tris=bl.tri_count(o),
                                         bones=len(groups[o.name.split('_')[1]]))
          for o in pieces}
with open(os.path.join(OUT, 'pieces_layout.json'), 'w') as f:
    json.dump(layout, f, indent=1, ensure_ascii=False)

# exports
for f in glob.glob(os.path.join(EX, 'Os_*.fbx')):
    os.remove(f)
for o in pieces:
    loc = o.location.copy()
    o.location = (0, 0, 0)
    bl.export([o], os.path.join(EX, o.name.rsplit('_', 1)[0]), 'fbx')
    o.location = loc
bpy.context.view_layer.update()
bl.export(pieces, os.path.join(EX, f'Squelette_{KEY}_Pieces'), 'fbx')

# renders: assembled pieces + exploded view
cam = bpy.context.scene.camera
for o in bpy.context.scene.objects:
    if o.type == 'MESH' and o.name.startswith('Squelette_'):
        o.hide_render = True
mn, mx = bl.bounds(pieces)
c = (mn + mx) / 2
bl.frame(pieces, cam, (0.55, -1.0, 0.25))
bl.render(os.path.join(REN, f'{KEY}_pieces_assemblees.png'), res=(1280, 720), samples=16)
saved = {o.name: o.location.copy() for o in pieces}
for o in pieces:
    d = o.location - c
    o.location = o.location + Vector((d.x * 0.35, d.y * 1.2 + (0.8 if d.y >= 0 else -0.8), d.z * 0.35))
bpy.context.view_layer.update()
bl.frame(pieces, cam, (0.45, -1.0, 0.45))
bl.render(os.path.join(REN, f'{KEY}_pieces.png'), res=(1280, 720), samples=16)
for o in pieces:
    o.location = saved[o.name]
bl.frame(pieces, cam, (0.55, -1.0, 0.22))
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT, f'Espece_{KEY}.blend'), compress=True)
print('done', KEY)
