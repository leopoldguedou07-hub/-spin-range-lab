# Lancer depuis blender/ : python GUIDE/outils/verif_os.py <module>
import sys, importlib, numpy as np, traceback
sys.path[:0]=['lib','.']
sp=sys.argv[1]
b=importlib.import_module('species.'+sp)
B=b.bones(); bad=0
rng=np.random.default_rng(0)
for x in B:
    if 'shape' not in x: continue
    s=x['shape']
    P=rng.uniform(s.lo, s.hi, (64,3))
    try:
        d=s(P); assert d.shape==(64,) and np.isfinite(d).all()
        c=(s.lo+s.hi)/2
    except Exception as e:
        bad+=1; print('ERR', x['name'], repr(e)[:200])
print(sp, 'objects', len(B), 'errors', bad)
