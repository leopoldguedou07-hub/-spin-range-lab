"""Allosaure — Allosaurus fragilis (8,5 m).

Silhouette: grand théropode élancé; crâne long et étroit (~85 cm) à 3 grandes
ouvertures de chaque côté, petite corne triangulaire (lacrymal) devant chaque
œil, crêtes rugueuses le long du museau; cou en S; bras forts à 3 doigts,
griffe du pouce ~25 cm; queue longue et droite. Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, sphere, ellipsoid, ribbon, tube, union
import anat
import theropod
import thero_scale as ts
from plans import skull_shell, blade_tooth, tooth_row, lerp

anat.DETAIL = 1.0
P = 'ALLO'
S = 8.5 / 12.5
SPEC = dict(
    key='Allosaurus', budget=100000, base='#D8C49E', dark='#8C7352',
    pieces={
        'Crane': [f'{P}_skull'], 'Machoire': [f'{P}_mandible_L'], 'Dent': [f'{P}_tooth_upper_L_01'],
        'Vertebre': [f'{P}_dorsal_06'], 'Cote': [f'{P}_rib_L_05'],
        'Bras': [f'{P}_humerus_L', f'{P}_radius_L', f'{P}_ulna_L'], 'Griffe': [f'{P}_hand_claw_L'],
        'Bassin': [f'{P}_pelvis'], 'Femur': [f'{P}_femur_L'],
        'Queue': [f'{P}_caudal_{i:02d}' for i in range(8, 15)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible_L', f'{P}_mandible_R']}, closeup_dir=(0.3, -1.0, 0.15),
    views={'34': (0.55, -1.0, 0.2), 'side': (0.0, -1.0, 0.02)},
)

SK = 0.85


def skull(add, R, L, rng):
    k = SK
    prof = [(u * k, v * k) for u, v in
            [(-0.02, -0.08), (0.0, 0.14), (0.1, 0.22), (0.26, 0.24), (0.45, 0.205), (0.7, 0.16), (0.88, 0.11),
             (1.0, 0.05), (1.0, -0.06), (0.8, -0.1), (0.5, -0.12), (0.2, -0.15), (0.02, -0.14)]]
    holes = [(0.25 * k, 0.1 * k, 0.05 * k, 0.07 * k, 0.07 * k),     # orbit
             (0.53 * k, 0.03 * k, 0.15 * k, 0.065 * k, 0.07 * k),   # antorbital fenestra
             (0.9 * k, 0.03 * k, 0.045 * k, 0.03 * k, 0.04 * k),    # naris
             (0.09 * k, -0.01 * k, 0.045 * k, 0.09 * k, 0.07 * k),  # lateral temporal fenestra
             (0.72 * k, 0.05 * k, 0.03 * k, 0.025 * k, 0.05 * k)]   # maxillary fenestra
    sk = skull_shell(L, R, prof, 0.15 * k, 0.05 * k, SK, holes)
    parts = [sk, ellipsoid(L(-0.02 * k, 0, -0.03 * k), (0.03 * k, 0.03 * k, 0.03 * k), R)]
    for sg in (-1, 1):
        # lacrimal horn: triangular boss in front of and above each orbit
        base = L(0.34 * k, sg * 0.1 * k, 0.215 * k)
        parts.append(tube([base, base + V(R @ V([0.01, sg * 0.01, 0.06])) * k], [0.045 * k, 0.004 * k]))
        parts.append(ellipsoid(base, (0.06 * k, 0.025 * k, 0.03 * k), R))
        # paired rugose nasal ridges along the snout
        for u in np.linspace(0.42, 0.88, 10):
            parts.append(sphere(L(u * k, sg * 0.035 * k, lerp([(0.4, 0.21), (0.9, 0.105)], u) * k + 0.004),
                                (0.014 + 0.004 * np.sin(u * 40)) * k))
    sk = union(0.01 * k, *parts)
    sk = sk.sub(ellipsoid(L(0.08 * k, 0, 0.22 * k), (0.07 * k, 0.03 * k, 0.03 * k), R), 0.01 * k)
    sk = sk.sub(ellipsoid(L(0.5 * k, 0, -0.14 * k), (0.42 * k, 0.07 * k, 0.045 * k), R), 0.02 * k)
    add('skull', ['SKULL'], sk.displace(0.0035, 16, seed=25, octaves=4).detail(0.004, 40, seed=26), 0.003,
        weight=2.0, min_tris=7000)
    out = []
    for side, sg in (('L', 1), ('R', -1)):
        pts = [L(-0.01 * k, sg * 0.14 * k, -0.12 * k), L(0.25 * k, sg * 0.125 * k, -0.17 * k),
               L(0.6 * k, sg * 0.09 * k, -0.2 * k), L(0.94 * k, sg * 0.03 * k, -0.2 * k)]
        m = ribbon(pts, [0.055 * k, 0.08 * k, 0.06 * k, 0.05 * k], [0.017 * k, 0.02 * k, 0.017 * k, 0.017 * k], R[:, 2])
        m = m.sub(ellipsoid(L(0.28 * k, sg * 0.125 * k, -0.16 * k), (0.08 * k, 0.03 * k, 0.025 * k), R), 0.005)
        add(f'mandible_{side}', ['SKULL'], m.displace(0.002, 30, seed=40 + sg).detail(0.0025, 50, seed=41 + sg),
            0.0025, weight=1.4, min_tris=2200)
        down, back = -R[:, 2], -R[:, 0]
        up_pos = [(L((0.96 - 0.05 * j) * k, sg * (0.04 + 0.1 * j / 15) * k, -0.055 * k), down, back,
                   0.085 + 0.025 * np.sin(np.pi * (j + 2) / 18)) for j in range(16)]
        lo_pos = [(L((0.93 - 0.05 * j) * k, sg * (0.028 + 0.09 * j / 14) * k, (-0.17 + 0.05 * j / 14) * k), -down, back,
                   0.065 + 0.02 * np.sin(np.pi * (j + 2) / 17)) for j in range(15)]
        mk = lambda b, d, bk, h, sd: blade_tooth(b, d, bk, h, sd, curve=0.3, flat=0.38)   # thin, recurved
        out += tooth_row(f'{P}_tooth_upper_{side}', ['SKULL', 'SKULL_teeth'], mk, up_pos, rng)
        out += tooth_row(f'{P}_tooth_lower_{side}', ['SKULL', 'SKULL_teeth'], mk, lo_pos, rng)
    return out


CFG = dict(seed=52, series=ts.series(S, dsl=0.85, csl=0.9, neck_cl=1.0, n_caud=48, robust=0.92),
           **ts.body(S, hz=1.05, arm=1.08, neck_up=1.3, tail_drop=0.6))
CFG['arm_sz']['claw'] = 0.2          # thumb claw ~25 cm with the 1.3 thumb factor
CFG.update(skull=skull, skull_dir=(1, 0, -0.12), claw_piece=0)


def bones():
    return theropod.build(P, CFG)
