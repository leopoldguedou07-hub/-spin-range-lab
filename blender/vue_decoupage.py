"""Re-apply the coloured piece view to an already cut file: python vue_decoupage.py <Key>"""
import os
import sys
import bpy

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path[:0] = [os.path.join(HERE, 'lib'), HERE]
import bl  # noqa: E402
from partition import PARTS  # noqa: E402

KEY = sys.argv[-1]
path = os.path.join(HERE, 'out', KEY, f'Espece_{KEY}.blend')
bpy.ops.wm.open_mainfile(filepath=path)
order = [p for p, _ in PARTS[KEY]]
pieces = sorted(bpy.data.collections[f'Pieces_{KEY}'].objects, key=lambda o: order.index(o.name.split('_')[1]))
bl.show_pieces(pieces, KEY)
bpy.ops.wm.save_as_mainfile(filepath=path, compress=True)
print('ok', KEY, len(pieces))
