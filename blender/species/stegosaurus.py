"""Stégosaure — Stegosaurus stenops (9 m).

Silhouette: 2 rangées de plaques alternées sur le dos (jusqu'à ~80 cm, très
fines, parcourues de sillons vasculaires); 4 pointes coniques au bout de la
queue (thagomizer, 60–90 cm); minuscule tête (~40 cm); pattes arrière bien
plus longues que les avant (dos en arche). Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, frame, sphere, ellipsoid, tube, ribbon, plate, union, bezier, round_cone, custom
import anat
import ornitho
from plans import skull_shell, cone_tooth, tooth_row, lerp

anat.DETAIL = 1.0
P = 'STEG'
SPEC = dict(
    key='Stegosaurus', budget=110000, base='#D2BE98', dark='#8A7253',
    pieces={
        'Crane': [f'{P}_skull'], 'Plaque': [f'{P}_plate_08'], 'Machoire': [f'{P}_mandible'],
        'Vertebre': [f'{P}_sacrum'], 'Cote': [f'{P}_rib_L_06'], 'Omoplate': [f'{P}_scapula_L'],
        'Bras': [f'{P}_humerus_L', f'{P}_radius_L', f'{P}_ulna_L'], 'Bassin': [f'{P}_pelvis'],
        'Femur': [f'{P}_femur_L'], 'Pied': [f'{P}_pes_L'],
        'Queue': [f'{P}_caudal_{i:02d}' for i in range(38, 45)] + [f'{P}_spike_{k}' for k in range(1, 5)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible']}, closeup_dir=(0.3, -1.0, 0.2),
    views={'34': (0.6, -1.0, 0.3), 'side': (0.0, -1.0, 0.02)},
)


def skull(add, R, L, rng):
    prof = [(-0.02, -0.04), (0.0, 0.08), (0.08, 0.12), (0.2, 0.11), (0.32, 0.08), (0.4, 0.04), (0.41, -0.03),
            (0.3, -0.06), (0.15, -0.07), (0.03, -0.07)]
    sk = skull_shell(L, R, prof, 0.08, 0.035, 0.4, [(0.12, 0.05, 0.03, 0.03, 0.03),      # orbit
                                                    (0.22, 0.02, 0.03, 0.015, 0.03),     # antorbital
                                                    (0.36, 0.02, 0.025, 0.015, 0.02)], rnd=0.004)
    sk = union(0.006, sk, ellipsoid(L(-0.01, 0, -0.01), (0.015, 0.015, 0.015), R))
    add('skull', ['SKULL'], sk.displace(0.0015, 40, seed=5, octaves=4).detail(0.0015, 90, seed=6), 0.0016,
        weight=1.6, min_tris=3500)
    parts = []
    for sg in (-1, 1):
        parts.append(ribbon([L(0.03, sg * 0.065, -0.07), L(0.2, sg * 0.055, -0.08), L(0.36, sg * 0.03, -0.065)],
                            [0.022, 0.025, 0.018], [0.006, 0.007, 0.006], R[:, 2]))
        parts.append(ribbon([L(0.12, sg * 0.06, -0.07), L(0.1, sg * 0.06, -0.035)], [0.015, 0.008], [0.005, 0.004],
                            R[:, 0]))
    parts.append(ribbon([L(0.35, 0, -0.07), L(0.42, 0, -0.05)], [0.02, 0.008], [0.01, 0.005], R[:, 1]))  # predentary
    add('mandible', ['SKULL'], union(0.005, *parts).displace(0.001, 60, seed=20), 0.0012, min_tris=1500)
    return []


def features(add, frames, anc, rng):
    """Alternating plates in two rows along neck, back and tail + thagomizer."""
    keys = [k for k in sorted(frames, key=lambda k: (['cervical', 'dorsal', 'sacral', 'caudal'].index(k[0]), k[1]))]
    n = 17
    pick = np.linspace(4, 44, n).astype(int)
    for k in range(n):
        key = keys[pick[k]]
        c, fwd, up, p = frames[key]
        t = k / (n - 1)
        h = 0.2 + 0.62 * np.sin(np.pi * np.clip((t - 0.02) / 0.9, 0, 1)) ** 1.3       # tallest over the hips
        sg = 1 if k % 2 == 0 else -1
        base = c + up * (p['cr'] + p.get('sl', 0.2) * 0.9) + np.cross(up, fwd) * sg * 0.07
        lean = norm(up + np.cross(up, fwd) * sg * 0.18)
        Rp = np.stack([fwd, lean, np.cross(fwd, lean)], 1)
        w = h * 0.85
        outline = [(-w * 0.45, 0.0), (-w * 0.55, h * 0.45), (-w * 0.25, h * 0.85), (w * 0.05, h), (w * 0.35, h * 0.75),
                   (w * 0.5, h * 0.35), (w * 0.35, 0.0)]
        pl = plate(base, Rp, outline, 0.025 * (0.6 + h), 0.004, falloff=h * 0.4, rnd=0.004)

        def grooves(P, pl=pl, base=base, lean=lean):
            q = P - base
            return pl(P) + 0.0015 * np.sin((q @ lean) * 70 + (q @ fwd) * 25)
        add(f'plate_{k + 1:02d}', ['SPECIAL_FEATURES', 'PLATES'],
            custom(grooves, pl.lo, pl.hi).displace(0.002, 18, seed=60 + k), 0.0045, min_tris=500)
    # thagomizer: 4 conical spikes on the last caudals, pointing out-back-up
    last = sorted(i for (kk, i) in frames if kk == 'caudal')[-6:]
    for j, (idx, sg) in enumerate([(last[1], 1), (last[1], -1), (last[3], 1), (last[3], -1)]):
        c, fwd, up, p = frames[('caudal', idx)]
        side = np.cross(up, fwd) * sg
        d = norm(side * 0.8 - fwd * 0.55 + up * 0.35)
        L_ = 0.8 if j < 2 else 0.65
        b = c + side * p['cr'] * 1.5 + up * p['cr']
        sp = union(0.01, round_cone(b, b + d * L_, 0.07, 0.008), ellipsoid(b, (0.1, 0.07, 0.06)))
        add(f'spike_{j + 1}', ['SPECIAL_FEATURES', 'THAGOMIZER'], sp.displace(0.003, 20, seed=80 + j), 0.004,
            min_tris=500)
    return []


def cerv(t, i):
    cr = 0.06 + 0.03 * t
    return 0.09, dict(cr=cr, ends='amphi', canal=cr * 0.35, sl=0.06 + 0.08 * t, tilt=0.3, sw=0.05, st=0.02,
                      tl=0.1, tr=0.025, tu=-0.02, zyg=cr * 0.4, knob=0.6)


def dors(t, i):
    cr = 0.1
    return 0.13, dict(cr=cr, ends='amphi', canal=0.05, sl=0.35 + 0.35 * t, tilt=-0.05, sw=0.06, st=0.022, tl=0.28,
                      tr=0.035, tu=0.4, zyg=0.04, knob=0.9)


def sacr(t, i):
    return 0.13, dict(cr=0.1, ends='flat', canal=0.03, sl=0.75, tilt=0.0, sw=0.08, st=0.025, tl=0.22, tr=0.05,
                      tu=0.1, knob=1.2)


def caud(t, i):
    cr = 0.095 * (1 - 0.8 * t)
    return 0.12 * (1 - 0.45 * t), dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=max(0.55 * (1 - 1.1 * t), 0.04),
                                       tilt=0.3, sw=0.05 * (1 - t) + 0.01, st=cr * 0.18,
                                       tl=max(0.18 * (1 - 2.5 * t), 0), tr=cr * 0.25, tu=0.0,
                                       chevron=0.4 * (1 - 0.9 * t) if i > 1 else 0)


def joints(side, sg, a):
    sh, A = a['sh'], a['A'] * V([1, sg, 1])
    return dict(G=sh + V([0.15, 0.45 * sg, -0.6]), E=sh + V([0.0, 0.52 * sg, -1.15]), W=sh + V([0.22, 0.46 * sg, -1.6]),
                A=A, K=A + V([0.25 + 0.06 * sg, 0.04 * sg, -1.12]), Ank=A + V([0.0 + 0.1 * sg, 0.0, -2.05]))


CFG = dict(
    seed=52,
    spine=[(3.2, 1.35), (2.8, 1.55), (2.2, 1.9), (1.2, 2.35), (0.1, 2.62), (-0.6, 2.62), (-1.6, 2.35),
           (-3.0, 1.85), (-4.4, 1.35), (-5.6, 1.05)],
    series=[('cervical', 13, cerv), ('dorsal', 17, dors), ('sacral', 5, sacr), ('caudal', 46, caud)],
    shoulder_dorsal=3,
    ribs=dict(depth=[(0, 0.75), (0.3, 1.05), (0.6, 1.0), (1, 0.45)], ymax=[(0, 0.45), (0.4, 0.72), (1, 0.55)],
              yend=[(0, 0.28), (0.5, 0.45), (1, 0.5)], back=[(0, 0.2), (1, 0.35)],
              wid=[(0, 0.045), (0.5, 0.05), (1, 0.04)], thick=[(0, 0.026), (1, 0.02)], wdir=V([1, 0, 0.4])),
    rib_last=14,
    tendons=dict(kinds=['sacral', 'caudal'], r=0.008, h=0.7),
    pelvis=dict(A_rel=(0.05, 0.36, -0.28), il_len=1.4, il_h=0.4, prepub=0.45, pub=0.45, isch=0.8, flare=0.9),
    joints=joints,
    front=dict(scap_len=0.8, scap_w=0.3, scap_t=0.03, r=0.06, toes=5, mt=0.14, toe=0.1, toe_r=0.032, spread=55),
    hind=dict(r=0.08, toes=3, mt=0.22, toe=0.16, toe_r=0.045, spread=22),
    skull=skull, skull_dir=(1, 0, -0.5), features=features,
)


def bones():
    return ornitho.build(P, CFG)
