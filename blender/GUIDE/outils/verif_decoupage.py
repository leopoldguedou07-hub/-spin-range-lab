# Lancer depuis blender/ : python GUIDE/outils/verif_decoupage.py <module> [...]
import sys, importlib
sys.path[:0] = ['lib', '.']
from partition import piece_of, PARTS
for sp in sys.argv[1:]:
    m = importlib.import_module('species.' + sp)
    key = m.SPEC['key']
    B = m.bones()
    miss, cnt = [], {}
    for b in B:
        p = piece_of(key, b['name'])
        if p is None: miss.append(b['name'])
        else: cnt[p] = cnt.get(p, 0) + 1
    empty = [p for p, _ in PARTS[key] if p not in cnt]
    print(key, len(PARTS[key]), 'pieces', cnt, 'MISSING', miss[:8], 'EMPTY', empty)
