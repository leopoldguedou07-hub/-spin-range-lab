"""Dilophosaure — Dilophosaurus wetherilli (7 m).

Silhouette: théropode élancé; crâne ~55 cm long et bas avec un cran marqué
entre prémaxillaire et maxillaire (mâchoire supérieure); 2 crêtes minces en
arc, parallèles, sur le dessus; bras à 3 griffes fortement courbées.
Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, sphere, ellipsoid, ribbon, plate, union
import anat
import theropod
import thero_scale as ts
from plans import skull_shell, blade_tooth, tooth_row, lerp

anat.DETAIL = 0.9
P = 'DILO'
S = 7.0 / 12.5
SPEC = dict(
    key='Dilophosaurus', budget=80000, base='#D9C6A1', dark='#8D7555',
    pieces={
        'Crane': [f'{P}_skull'], 'Crete': [f'{P}_crest'], 'Machoire': [f'{P}_mandible_L'],
        'Dent': [f'{P}_tooth_upper_L_01'], 'Vertebre': [f'{P}_dorsal_06'], 'Cote': [f'{P}_rib_L_05'],
        'Griffe': [f'{P}_hand_claw_L'], 'Bassin': [f'{P}_pelvis'], 'Femur': [f'{P}_femur_L'],
        'Queue': [f'{P}_caudal_{i:02d}' for i in range(8, 15)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_crest', f'{P}_mandible_L', f'{P}_mandible_R']},
    closeup_dir=(0.35, -1.0, 0.25),
    views={'34': (0.55, -1.0, 0.2), 'side': (0.0, -1.0, 0.02)},
)

SK = 0.55


def skull(add, R, L, rng):
    k = SK
    # low skull; the ventral edge steps up at the subnarial notch (u ~0.8)
    prof = [(u * k, v * k) for u, v in
            [(-0.02, -0.07), (0.0, 0.12), (0.12, 0.19), (0.3, 0.2), (0.55, 0.16), (0.8, 0.12), (0.93, 0.08),
             (1.0, 0.03), (1.0, -0.06), (0.9, -0.08), (0.84, -0.06), (0.8, -0.02), (0.76, -0.06), (0.7, -0.09),
             (0.4, -0.1), (0.15, -0.13), (0.02, -0.12)]]
    holes = [(0.24 * k, 0.09 * k, 0.05 * k, 0.065 * k, 0.07 * k),    # orbit
             (0.5 * k, 0.03 * k, 0.13 * k, 0.055 * k, 0.07 * k),    # antorbital fenestra
             (0.93 * k, 0.02 * k, 0.04 * k, 0.025 * k, 0.04 * k),   # naris
             (0.08 * k, 0.0, 0.04 * k, 0.08 * k, 0.07 * k)]         # lateral temporal
    sk = skull_shell(L, R, prof, 0.13 * k, 0.045 * k, SK, holes)
    sk = union(0.01 * k, sk, ellipsoid(L(-0.02 * k, 0, -0.03 * k), (0.03 * k, 0.03 * k, 0.03 * k), R))
    sk = sk.sub(ellipsoid(L(0.07 * k, 0, 0.19 * k), (0.06 * k, 0.03 * k, 0.03 * k), R), 0.01 * k)
    sk = sk.sub(ellipsoid(L(0.45 * k, 0, -0.12 * k), (0.4 * k, 0.06 * k, 0.04 * k), R), 0.02 * k)
    add('skull', ['SKULL'], sk.displace(0.0025, 22, seed=35, octaves=4).detail(0.003, 55, seed=36), 0.0022,
        weight=2.0, min_tris=6000)
    # twin crests: thin semicircular blades, parallel, from the snout to above the orbit
    Rp = R @ np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1)
    arc = [(0.54 - 0.36 * np.cos(a), 0.24 * np.sin(a) ** 0.85) for a in np.linspace(0, np.pi, 17)]   # thin semicircle
    crs = []
    for sg in (-1, 1):
        o = L(0, sg * 0.03 * k, lerp([(0.2, 0.2), (0.55, 0.16), (0.9, 0.09)], 0.5) * k - 0.02)
        poly = [(u * k, v * k + (0.0 if u < 0.25 else 0.0)) for u, v in arc]
        c = plate(o, Rp, poly, 0.005 * k, 0.0025 * k, falloff=0.02 * k, rnd=0.0015 * k)
        crs.append(c)
        # finger-like struts and a thick base along the nasal
        for u in np.linspace(0.25, 0.85, 5):
            crs.append(ribbon([L(u * k, sg * 0.03 * k, lerp([(0.2, 0.2), (0.55, 0.16), (0.9, 0.09)], u) * k),
                               L((u - 0.04) * k, sg * 0.03 * k, (lerp(arc, u) + 0.07) * k)],
                              [0.012 * k, 0.006 * k], [0.009 * k, 0.005 * k], R[:, 0]))
    crest = union(0.004 * k, *crs).displace(0.0012, 60, seed=37).detail(0.0012, 120, seed=38)
    add('crest', ['SKULL', 'SKULL_special'], crest, 0.0012, weight=1.3, min_tris=2500)
    out = []
    for side, sg in (('L', 1), ('R', -1)):
        pts = [L(-0.01 * k, sg * 0.12 * k, -0.11 * k), L(0.25 * k, sg * 0.11 * k, -0.15 * k),
               L(0.6 * k, sg * 0.07 * k, -0.15 * k), L(0.94 * k, sg * 0.03 * k, -0.13 * k)]
        m = ribbon(pts, [0.05 * k, 0.07 * k, 0.045 * k, 0.04 * k], [0.015 * k, 0.017 * k, 0.014 * k, 0.014 * k],
                   R[:, 2])
        m = m.sub(ellipsoid(L(0.26 * k, sg * 0.11 * k, -0.14 * k), (0.08 * k, 0.03 * k, 0.022 * k), R), 0.004)
        add(f'mandible_{side}', ['SKULL'], m.displace(0.0015, 40, seed=50 + sg).detail(0.002, 70, seed=51 + sg),
            0.0018, weight=1.3, min_tris=2000)
        down, back = -R[:, 2], -R[:, 0]
        # premaxillary teeth, then a gap at the notch, then the maxillary row
        up_u = [0.98, 0.94, 0.9, 0.86] + list(np.linspace(0.74, 0.14, 13))
        up_pos = [(L(u * k, sg * (0.035 + 0.09 * (1 - u)) * k, (-0.045 if u > 0.8 else -0.065) * k), down, back,
                   0.042 + 0.01 * np.sin(np.pi * u)) for u in up_u]
        lo_pos = [(L(u * k, sg * (0.022 + 0.085 * (1 - u)) * k, -0.115 * k), -down, back,
                   0.036 + 0.008 * np.sin(np.pi * u)) for u in np.linspace(0.93, 0.18, 15)]
        mk = lambda b, d, bk, h, sd: blade_tooth(b, d, bk, h, sd, curve=0.35, flat=0.35)
        out += tooth_row(f'{P}_tooth_upper_{side}', ['SKULL', 'SKULL_teeth'], mk, up_pos, rng)
        out += tooth_row(f'{P}_tooth_lower_{side}', ['SKULL', 'SKULL_teeth'], mk, lo_pos, rng)
    return out


CFG = dict(seed=63, series=ts.series(S, dsl=0.8, csl=0.85, neck_cl=0.95, n_caud=45, robust=0.8),
           **ts.body(S, hz=1.08, arm=1.1, neck_up=1.15, tail_drop=0.5, fem=0.85))
CFG['arm_sz']['claw'] = 0.12
CFG.update(skull=skull, skull_dir=(1, 0, -0.1), claw_piece=1)


def bones():
    return theropod.build(P, CFG)
