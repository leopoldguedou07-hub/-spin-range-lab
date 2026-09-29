"""Carnotaure — Carnotaurus sastrei (8 m).

Silhouette: abélisauridé; crâne court et très haut (~60 cm, museau en
bouledogue), surface rugueuse, 2 cornes coniques épaisses (~15 cm) au-dessus
des yeux pointant vers les côtés; mandibule longue et fine; bras vestigiaux
(avant-bras = 1/4 de l'humérus, main en boule à 4 doigts sans griffe);
jambes longues; queue aux apophyses transverses relevées en ailes.
Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, sphere, ellipsoid, ribbon, tube, union
import anat
import theropod
import thero_scale as ts
from plans import skull_shell, blade_tooth, tooth_row, lerp

anat.DETAIL = 1.0
P = 'CARN'
S = 8.0 / 12.5
SPEC = dict(
    key='Carnotaurus', budget=90000, base='#D5C09A', dark='#8A7151',
    pieces={
        'Crane': [f'{P}_skull'], 'Corne': [f'{P}_horn_L'], 'Machoire': [f'{P}_mandible_L'],
        'Dent': [f'{P}_tooth_upper_L_01'], 'Vertebre': [f'{P}_dorsal_06'], 'Cote': [f'{P}_rib_L_05'],
        'Bras': [f'{P}_humerus_L', f'{P}_radius_L', f'{P}_ulna_L', f'{P}_manus_L'],
        'Bassin': [f'{P}_pelvis'], 'Femur': [f'{P}_femur_L'],
        'Queue': [f'{P}_caudal_{i:02d}' for i in range(8, 15)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_horn_L', f'{P}_horn_R', f'{P}_mandible_L', f'{P}_mandible_R']},
    closeup_dir=(0.45, -1.0, 0.2),
    views={'34': (0.55, -1.0, 0.2), 'side': (0.0, -1.0, 0.02)},
)

SK = 0.6


def skull(add, R, L, rng):
    k = SK
    # short and very deep, blunt vertical snout
    prof = [(u * k, v * k) for u, v in
            [(-0.03, -0.12), (0.0, 0.2), (0.1, 0.32), (0.3, 0.36), (0.55, 0.33), (0.78, 0.26), (0.95, 0.16),
             (1.0, 0.05), (0.99, -0.12), (0.8, -0.17), (0.5, -0.18), (0.2, -0.22), (0.02, -0.2)]]
    holes = [(0.3 * k, 0.17 * k, 0.07 * k, 0.09 * k, 0.1 * k),     # orbit (tall, keyhole)
             (0.6 * k, 0.03 * k, 0.12 * k, 0.07 * k, 0.1 * k),     # antorbital fenestra (small)
             (0.93 * k, 0.07 * k, 0.04 * k, 0.04 * k, 0.05 * k),   # naris (terminal)
             (0.1 * k, 0.02 * k, 0.05 * k, 0.14 * k, 0.1 * k)]     # lateral temporal
    sk = skull_shell(L, R, prof, 0.22 * k, 0.11 * k, SK, holes)
    # rugose, pitted snout surface (bumps) + deep jugal
    bumps = [sphere(L(u * k, sg * (0.13 - 0.04 * u) * k, v * k), (0.018 + 0.006 * np.sin(u * 50 + v * 30)) * k)
             for u in np.linspace(0.55, 0.95, 5) for v in np.linspace(-0.05, 0.22, 4) for sg in (-1, 1)]
    sk = union(0.012 * k, sk, *bumps, ellipsoid(L(-0.02 * k, 0, -0.05 * k), (0.04 * k, 0.04 * k, 0.04 * k), R))
    sk = sk.sub(ellipsoid(L(0.52 * k, 0, -0.17 * k), (0.42 * k, 0.1 * k, 0.05 * k), R), 0.02 * k)
    add('skull', ['SKULL'], sk.displace(0.003, 20, seed=45, octaves=4).detail(0.0045, 45, seed=46), 0.0026,
        weight=2.0, min_tris=7000)
    # supra-orbital horns: thick short cones, broad rugose base, pointing out and up
    for side, sg in (('L', 1), ('R', -1)):
        base = L(0.3 * k, sg * 0.14 * k, 0.33 * k)
        d = norm(R @ V([-0.15, sg * 1.0, 0.45]))
        h = 0.15
        hn = union(0.01, tube([base - d * 0.02, base + d * h * 0.55, base + d * h], [0.075, 0.05, 0.018]),
                   ellipsoid(base, (0.08, 0.06, 0.05), R))
        add(f'horn_{side}', ['SKULL', 'SKULL_special'], hn.displace(0.002, 40, seed=47 + sg).detail(0.003, 70, seed=48),
            0.0018, weight=1.2, min_tris=1500)
    out = []
    for side, sg in (('L', 1), ('R', -1)):
        # long, slender, shallow mandible (contrasts with the tall skull)
        pts = [L(-0.02 * k, sg * 0.2 * k, -0.18 * k), L(0.3 * k, sg * 0.18 * k, -0.22 * k),
               L(0.7 * k, sg * 0.13 * k, -0.22 * k), L(0.98 * k, sg * 0.07 * k, -0.2 * k)]
        m = ribbon(pts, [0.06 * k, 0.07 * k, 0.05 * k, 0.05 * k], [0.02 * k, 0.022 * k, 0.019 * k, 0.019 * k], R[:, 2])
        m = m.sub(ellipsoid(L(0.3 * k, sg * 0.18 * k, -0.21 * k), (0.07 * k, 0.03 * k, 0.018 * k), R), 0.004)
        add(f'mandible_{side}', ['SKULL'], m.displace(0.0018, 35, seed=60 + sg).detail(0.0025, 60, seed=61 + sg),
            0.002, weight=1.3, min_tris=2000)
        down, back = -R[:, 2], -R[:, 0]
        up_pos = [(L(u * k, sg * (0.07 + 0.12 * (1 - u)) * k, -0.14 * k), down, back, 0.045 + 0.01 * np.sin(np.pi * u))
                  for u in np.linspace(0.96, 0.35, 13)]
        lo_pos = [(L(u * k, sg * (0.07 + 0.11 * (1 - u)) * k, -0.17 * k), -down, back, 0.038) for u in
                  np.linspace(0.93, 0.35, 13)]
        mk = lambda b, d, bk, h, sd: blade_tooth(b, d, bk, h, sd, curve=0.15, flat=0.42)   # short, low, barely curved
        out += tooth_row(f'{P}_tooth_upper_{side}', ['SKULL', 'SKULL_teeth'], mk, up_pos, rng)
        out += tooth_row(f'{P}_tooth_lower_{side}', ['SKULL', 'SKULL_teeth'], mk, lo_pos, rng)
    return out


CFG = dict(seed=74, series=ts.series(S, dsl=0.6, csl=0.7, ctl=1.9, ctu=0.55, neck_cl=0.95, n_caud=44, robust=0.95),
           **ts.body(S, hz=1.12, arm=0.5, neck_up=1.1, tail_drop=0.3, fem=0.9))
# vestigial arm: humerus straight, forearm a quarter of its length, stubby 4-fingered ball of a hand
CFG['arm'] = lambda side, sg, a: dict(G=a['sh'] + V([0.1, 0.27 * sg, -0.38]) * 1.0,
                                      E=a['sh'] + V([0.14, 0.3 * sg, -0.66]),
                                      W=a['sh'] + V([0.19, 0.3 * sg, -0.72]))
CFG['arm_sz'] = dict(hum_r=0.025, scap_vec=V([-0.38, 0.0, 0.42]), finger_len=0.035, claw=0.006,
                     finger_dir=V([0.7, 0, -0.7]))
CFG.update(skull=skull, skull_dir=(1, 0, -0.08), fingers=4)


def bones():
    return theropod.build(P, CFG)
