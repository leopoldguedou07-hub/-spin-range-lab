"""Parasaurolophus — Parasaurolophus walkeri (9,5 m).

Silhouette: hadrosaure; crâne (~1 m) prolongé par une longue crête tubulaire
creuse (~1 m) courbée vers l'arrière; bec de canard large et arrondi au bord
crénelé (prémaxillaire), mandibule à prédentaire et batterie dentaire,
apophyse coronoïde haute; cou en S; dos cambré; queue haute et plate aux
épines hautes et chevrons longs, tendons ossifiés en treillis; pattes avant
fines, pieds à 3 orteils en sabots. Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, sphere, ellipsoid, tube, ribbon, plate, union, bezier, round_cone
import anat
import ornitho
from plans import skull_shell, lerp

anat.DETAIL = 1.0
P = 'PARA'
SPEC = dict(
    key='Parasaurolophus', budget=110000, base='#D7C39D', dark='#8C7454',
    pieces={
        'Crane': [f'{P}_skull'], 'Crete': [f'{P}_crest'], 'Bec': [f'{P}_beak'], 'Machoire': [f'{P}_mandible'],
        'Vertebre': [f'{P}_dorsal_08'], 'Cote': [f'{P}_rib_L_06'], 'Bassin': [f'{P}_pelvis'],
        'Femur': [f'{P}_femur_L'], 'Pied': [f'{P}_pes_L'], 'Queue': [f'{P}_caudal_{i:02d}' for i in range(8, 15)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_crest', f'{P}_beak', f'{P}_mandible']}, closeup_dir=(0.35, -1.0, 0.2),
    views={'34': (0.55, -1.0, 0.22), 'side': (0.0, -1.0, 0.02)},
)


def skull(add, R, L, rng):
    # u along the skull (occiput -> bill), v up
    prof = [(-0.03, -0.1), (0.0, 0.14), (0.12, 0.22), (0.3, 0.24), (0.45, 0.2), (0.62, 0.13), (0.8, 0.08),
            (0.92, 0.04), (0.95, -0.02), (0.85, -0.06), (0.55, -0.1), (0.3, -0.16), (0.08, -0.17)]
    holes = [(0.27, 0.1, 0.055, 0.06, 0.07),        # orbit
             (0.1, 0.0, 0.035, 0.08, 0.07),         # lateral temporal
             (0.62, 0.05, 0.12, 0.03, 0.04)]        # narial fossa (shallow)
    sk = skull_shell(L, R, prof, 0.16, 0.11, 0.95, holes)
    # dental battery bulge (maxilla), jugal flange, quadrate
    sk = union(0.015, sk, ellipsoid(L(0.4, 0, -0.08), (0.28, 0.16, 0.06), R),
               ellipsoid(L(-0.02, 0, -0.03), (0.035, 0.035, 0.035), R),
               *[ellipsoid(L(0.02, sg * 0.14, -0.12), (0.03, 0.02, 0.09), R) for sg in (-1, 1)])
    sk = sk.sub(ellipsoid(L(0.1, 0, 0.24), (0.07, 0.035, 0.03), R), 0.01)
    add('skull', ['SKULL'], sk.displace(0.0035, 16, seed=5, octaves=4).detail(0.0045, 36, seed=6), 0.0032,
        weight=2.0, min_tris=6500)
    # crest: premaxilla/nasal tube from above the snout base, sweeping back past the head
    b = L(0.5, 0, 0.16)
    pts = bezier(b, L(0.3, 0, 0.42), L(-0.35, 0, 0.62), n=14, p3=L(-0.72, 0, 0.62))
    rad = list(np.interp(np.linspace(0, 1, 14), [0, 0.2, 0.85, 1], [0.07, 0.065, 0.058, 0.048]))
    outer = ribbon(pts, [r * 1.25 for r in rad], [r * 0.85 for r in rad], R[:, 1])
    tip = ellipsoid(pts[-1], (0.06, 0.045, 0.05), R)
    crest = union(0.01, outer, tip, ellipsoid(b, (0.1, 0.07, 0.06), R))
    # internal nasal tubes open at the tip; shallow grooves along the sides
    crest = crest.sub(tube(pts[3:], [r * 0.45 for r in rad[3:]]), 0.005)
    crest = crest.sub(tube([p + R[:, 1] * 0.052 for p in pts[2:-2]], [0.01] * (len(pts) - 4)), 0.004)
    crest = crest.sub(tube([p - R[:, 1] * 0.052 for p in pts[2:-2]], [0.01] * (len(pts) - 4)), 0.004)
    add('crest', ['SKULL', 'SKULL_special'], crest.displace(0.003, 18, seed=7).detail(0.0035, 40, seed=8), 0.003,
        weight=1.6, min_tris=4000)
    # duck bill: broad rounded premaxillary spoon, crenulated rim, toothless
    bo = L(0.9, 0, -0.03)
    Rb = np.stack([R[:, 0], R[:, 1], R[:, 2]], 1)
    Rp = R @ np.stack([V([1, 0, 0]), V([0, 1, 0]), V([0, 0, 1])], 1)
    poly = [(-0.08, -0.1), (0.05, -0.15), (0.14, -0.13), (0.19, -0.06), (0.2, 0.0), (0.19, 0.06), (0.14, 0.13),
            (0.05, 0.15), (-0.08, 0.1)]
    bill = plate(bo, Rp, poly, 0.03, 0.012, falloff=0.05, rnd=0.008)
    rim = [sphere(bo + Rb @ V([0.07 + 0.12 * np.cos(a), 0.14 * np.sin(a), -0.012]), 0.013)
           for a in np.linspace(-1.35, 1.35, 15)]
    bill = union(0.006, bill, *rim, ribbon([bo - R[:, 0] * 0.1 + R[:, 2] * 0.05, bo + R[:, 0] * 0.05 + R[:, 2] * 0.01],
                                            [0.05, 0.08], [0.02, 0.015], R[:, 2]))
    add('beak', ['SKULL'], bill.displace(0.002, 30, seed=9).detail(0.0025, 60, seed=10), 0.0022, min_tris=1800)
    # mandible: dentary with battery, tall coronoid, predentary scoop
    parts = []
    for sg in (-1, 1):
        parts.append(ribbon([L(0.0, sg * 0.13, -0.17), L(0.35, sg * 0.12, -0.2), L(0.7, sg * 0.1, -0.16),
                             L(0.88, sg * 0.08, -0.1)], [0.08, 0.1, 0.075, 0.05], [0.025, 0.03, 0.022, 0.018], R[:, 2]))
        parts.append(ribbon([L(0.28, sg * 0.12, -0.14), L(0.33, sg * 0.12, 0.02)], [0.06, 0.035], [0.02, 0.016], R[:, 0]))
        parts += [sphere(L(u, sg * 0.1, -0.12), 0.012) for u in np.linspace(0.3, 0.7, 9)]     # tooth battery
    parts.append(ribbon([L(0.86, 0, -0.1), L(0.97, 0, -0.08), L(1.02, 0, -0.04)], [0.12, 0.13, 0.12],
                        [0.02, 0.018, 0.012], R[:, 2]))               # predentary
    add('mandible', ['SKULL'], union(0.012, *parts).displace(0.0025, 24, seed=11).detail(0.003, 50, seed=12), 0.0028,
        weight=1.4, min_tris=3000)
    return []


def cerv(t, i):
    cr = 0.06 + 0.035 * t
    return 0.13, dict(cr=cr, ends='pro', canal=cr * 0.35, sl=0.03 + 0.08 * t, tilt=0.4, sw=0.05, st=cr * 0.2,
                      tl=cr * 1.2, tr=cr * 0.25, tu=-cr * 0.3, zyg=cr * 0.55, knob=0.4)


def dors(t, i):
    cr = 0.1
    return 0.12, dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=0.42 + 0.12 * t, tilt=0.05, sw=0.07, st=0.022,
                      tl=0.2, tr=0.03, tu=0.12, zyg=cr * 0.35, knob=0.6)


def sacr(t, i):
    return 0.11, dict(cr=0.1, ends='flat', canal=0.03, sl=0.5, tilt=0.0, sw=0.08, st=0.022, tl=0.2, tr=0.04, tu=0.06)


def caud(t, i):
    cr = 0.1 * (1 - 0.8 * t)
    return 0.11 * (1 - 0.35 * t), dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=max(0.55 * (1 - 0.85 * t), 0.04),
                                       tilt=0.25, sw=0.07 * (1 - t) + 0.012, st=cr * 0.2,
                                       tl=max(0.18 * (1 - 3 * t), 0), tr=cr * 0.25, tu=0.0,
                                       chevron=0.6 * (1 - 0.9 * t) if i > 1 else 0)


def joints(side, sg, a):
    sh, A = a['sh'], a['A'] * V([1, sg, 1])
    return dict(G=sh + V([0.15, 0.42 * sg, -0.75]), E=sh + V([0.02, 0.48 * sg, -1.38]),
                W=sh + V([0.22, 0.42 * sg, -1.95]),
                A=A, K=A + V([0.26 + 0.06 * sg, 0.04 * sg, -1.1]), Ank=A + V([0.0 + 0.1 * sg, 0.0, -1.95]))


CFG = dict(
    seed=91,
    spine=[(3.75, 3.2), (3.5, 3.32), (3.15, 3.22), (2.75, 2.78), (2.25, 2.35), (1.3, 2.4), (0.0, 2.55),
           (-1.0, 2.55), (-2.5, 2.42), (-4.0, 2.2), (-5.8, 1.85)],
    series=[('cervical', 14, cerv), ('dorsal', 17, dors), ('sacral', 8, sacr), ('caudal', 50, caud)],
    shoulder_dorsal=3,
    ribs=dict(depth=[(0, 0.75), (0.25, 1.05), (0.55, 1.1), (0.85, 0.85), (1, 0.5)],
              ymax=[(0, 0.45), (0.35, 0.66), (0.7, 0.68), (1, 0.52)], yend=[(0, 0.25), (0.5, 0.42), (1, 0.5)],
              back=[(0, 0.2), (1, 0.35)], wid=[(0, 0.045), (0.5, 0.055), (1, 0.04)], thick=[(0, 0.025), (1, 0.02)]),
    tendons=dict(kinds=['dorsal', 'sacral', 'caudal'], r=0.008, h=0.8),
    pelvis=dict(A_rel=(0.05, 0.36, -0.28), il_len=1.6, il_h=0.42, prepub=0.62, pub=0.4, isch=1.15, flare=0.2),
    joints=joints,
    front=dict(scap_len=0.9, scap_w=0.26, scap_t=0.028, r=0.05, toes=4, mt=0.26, toe=0.12, toe_r=0.028, spread=25),
    hind=dict(r=0.095, toes=3, mt=0.36, toe=0.26, toe_r=0.055, spread=28),
    skull=skull, skull_dir=(1, 0, -0.5), skull_off=0.03,
)


def bones():
    return ornitho.build(P, CFG)
