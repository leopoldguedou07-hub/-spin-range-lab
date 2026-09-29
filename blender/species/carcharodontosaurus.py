"""Carcharodontosaure — Carcharodontosaurus saharicus (12,5 m).

Silhouette: géant d'Afrique aux « dents de requin »; crâne très long, bas et
étroit (~1,6 m) aux grandes fenêtres, crête rugueuse au-dessus des yeux;
épines dorsales assez hautes; bras courts à 3 doigts.
Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, sphere, ellipsoid, ribbon, union
import anat
import theropod
import thero_scale as ts
from plans import skull_shell, blade_tooth, tooth_row, lerp

anat.DETAIL = 1.0
P = 'CARC'
SPEC = dict(
    key='Carcharodontosaurus', budget=120000, base='#D4BF97', dark='#8A7050',
    pieces={
        'Crane': [f'{P}_skull'], 'Machoire': [f'{P}_mandible_L'], 'Dent': [f'{P}_tooth_upper_L_01'],
        'Vertebre': [f'{P}_dorsal_06'], 'Cote': [f'{P}_rib_L_05'],
        'Bras': [f'{P}_humerus_L', f'{P}_radius_L', f'{P}_ulna_L'],
        'Bassin': [f'{P}_pelvis'], 'Femur': [f'{P}_femur_L'], 'Pied': [f'{P}_pes_L'],
        'Queue': [f'{P}_caudal_{i:02d}' for i in range(8, 15)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible_L', f'{P}_mandible_R']}, closeup_dir=(0.25, -1.0, 0.12),
    views={'34': (0.55, -1.0, 0.2), 'side': (0.0, -1.0, 0.02)},
)

SK = 1.6


def shark_tooth(base, down, back, h, seed):
    # broad, flat, nearly straight triangular blade (like a great white's)
    return blade_tooth(base, down, back, h, seed, curve=0.1, flat=0.32)


def skull(add, R, L, rng):
    # long, low, narrow; slightly convex snout
    prof = [(-0.04, -0.12), (0.0, 0.22), (0.12, 0.33), (0.3, 0.35), (0.55, 0.31), (0.9, 0.26), (1.2, 0.2),
            (1.45, 0.13), (1.6, 0.05), (1.6, -0.09), (1.3, -0.16), (0.9, -0.18), (0.5, -0.2), (0.2, -0.24),
            (0.02, -0.21)]
    holes = [(0.33, 0.14, 0.075, 0.11, 0.1),      # orbit (keyhole)
             (0.75, 0.04, 0.27, 0.1, 0.1),        # very large antorbital fenestra
             (1.38, 0.05, 0.07, 0.04, 0.05),      # external naris
             (0.12, -0.02, 0.06, 0.14, 0.1),      # lateral temporal fenestra
             (1.08, 0.07, 0.045, 0.035, 0.07)]    # maxillary fenestra
    sk = skull_shell(L, R, prof, 0.26, 0.08, SK, holes)
    # rugose brow: thickened lacrimal/postorbital ridge right above the orbit
    brow = [sphere(L(u, sg * (0.2 - 0.05 * (u - 0.2)), 0.33 + 0.015 * np.sin(u * 30)), 0.05 + 0.012 * np.sin(u * 23))
            for u in np.linspace(0.2, 0.55, 8) for sg in (-1, 1)]
    nasal = [sphere(L(u, sg * 0.04, lerp([(0.55, 0.31), (1.4, 0.14)], u) + 0.005), 0.02) for u in
             np.linspace(0.6, 1.35, 9) for sg in (-1, 1)]
    sk = union(0.015, sk, *brow, *nasal, ellipsoid(L(-0.03, 0, -0.05), (0.05, 0.05, 0.05), R))
    sk = sk.sub(ellipsoid(L(0.1, 0, 0.34), (0.11, 0.045, 0.045), R), 0.02)            # supratemporal area
    sk = sk.sub(ellipsoid(L(0.8, 0, -0.22), (0.68, 0.11, 0.07), R), 0.03)             # palate
    add('skull', ['SKULL'], sk.displace(0.006, 9, seed=15, octaves=4).detail(0.008, 22, seed=16), 0.0055,
        weight=2.0, min_tris=8000)
    out = []
    for side, sg in (('L', 1), ('R', -1)):
        pts = [L(-0.02, sg * 0.25, -0.18), L(0.4, sg * 0.21, -0.23), L(0.9, sg * 0.15, -0.24), L(1.35, sg * 0.085, -0.21),
               L(1.56, sg * 0.045, -0.2)]
        m = ribbon(pts, [0.09, 0.13, 0.1, 0.085, 0.08], [0.028, 0.032, 0.028, 0.026, 0.027], R[:, 2])
        m = m.sub(ellipsoid(L(0.42, sg * 0.21, -0.22), (0.13, 0.05, 0.045), R), 0.01)     # mandibular fenestra
        add(f'mandible_{side}', ['SKULL'], m.displace(0.004, 14, seed=30 + sg).detail(0.005, 25, seed=31 + sg),
            0.0045, weight=1.4, min_tris=2500)
        down, back = -R[:, 2], -R[:, 0]
        up_pos = [(L(1.53 - 0.08 * k, sg * (0.06 + 0.09 * k / 13), -0.085), down, back,
                   0.15 + 0.06 * np.sin(np.pi * (k + 2) / 17)) for k in range(14)]
        lo_pos = [(L(1.5 - 0.08 * k, sg * (0.05 + 0.09 * k / 12), -0.17), -down, back,
                   0.11 + 0.04 * np.sin(np.pi * (k + 2) / 16)) for k in range(13)]
        out += tooth_row(f'{P}_tooth_upper_{side}', ['SKULL', 'SKULL_teeth'], shark_tooth, up_pos, rng)
        out += tooth_row(f'{P}_tooth_lower_{side}', ['SKULL', 'SKULL_teeth'], shark_tooth, lo_pos, rng)
    return out


CFG = dict(seed=41, series=ts.series(1.0, dsl=1.3, csl=1.1, n_caud=44), **ts.body(1.0, hz=0.98, arm=0.95))
CFG.update(skull=skull, skull_dir=(1, 0, -0.1))


def bones():
    return theropod.build(P, CFG)
