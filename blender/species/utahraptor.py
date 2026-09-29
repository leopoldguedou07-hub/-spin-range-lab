"""Utahraptor — Utahraptor ostrommaysi (6,5 m).

Silhouette: le plus grand dromaeosauridé; corps massif, crâne robuste
(~60 cm) plus haut que celui du vélociraptor, museau droit; griffe en
faucille de ~24 cm sur l'orteil II relevé; bras longs à 3 doigts griffus;
pubis rabattu vers l'arrière; queue raidie par des tiges osseuses.
Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, sphere, ellipsoid, ribbon, tube, union
import anat
import theropod
import thero_scale as ts
from plans import skull_shell, blade_tooth, tooth_row, lerp, side_of

anat.DETAIL = 1.0
P = 'UTAH'
S = 6.5 / 12.5
SPEC = dict(
    key='Utahraptor', budget=85000, base='#D7C39D', dark='#8B7353',
    pieces={
        'Crane': [f'{P}_skull'], 'Machoire': [f'{P}_mandible_L'], 'Dent': [f'{P}_tooth_upper_L_01'],
        'Vertebre': [f'{P}_dorsal_06'], 'Cote': [f'{P}_rib_L_05'],
        'Bras': [f'{P}_humerus_L', f'{P}_radius_L', f'{P}_ulna_L'], 'Griffe': [f'{P}_sickle_claw_L'],
        'Bassin': [f'{P}_pelvis'], 'Femur': [f'{P}_femur_L'],
        'Queue': [f'{P}_caudal_{i:02d}' for i in range(8, 15)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible_L', f'{P}_mandible_R'],
              'foot': [f'{P}_pes_L', f'{P}_sickle_claw_L']},
    closeup_dir=(0.3, -1.0, 0.15),
    views={'34': (0.5, -1.0, 0.2), 'side': (0.0, -1.0, 0.02)},
)

SK = 0.6


def skull(add, R, L, rng):
    k = SK
    prof = [(u * k, v * k) for u, v in
            [(-0.02, -0.08), (0.0, 0.15), (0.1, 0.23), (0.3, 0.23), (0.55, 0.18), (0.8, 0.13), (0.95, 0.09),
             (1.0, 0.03), (1.0, -0.06), (0.8, -0.1), (0.5, -0.12), (0.2, -0.15), (0.02, -0.14)]]
    holes = [(0.25 * k, 0.1 * k, 0.065 * k, 0.075 * k, 0.07 * k),   # big orbit
             (0.55 * k, 0.03 * k, 0.12 * k, 0.05 * k, 0.07 * k),    # antorbital fenestra
             (0.92 * k, 0.04 * k, 0.04 * k, 0.03 * k, 0.04 * k),    # naris
             (0.08 * k, -0.01 * k, 0.04 * k, 0.08 * k, 0.07 * k),   # lateral temporal
             (0.73 * k, 0.05 * k, 0.03 * k, 0.025 * k, 0.05 * k)]   # maxillary fenestra
    sk = skull_shell(L, R, prof, 0.16 * k, 0.06 * k, SK, holes)
    sk = union(0.01 * k, sk, ellipsoid(L(-0.02 * k, 0, -0.03 * k), (0.03 * k, 0.03 * k, 0.03 * k), R),
               *[sphere(L(u * k, sg * 0.05 * k, lerp([(0.4, 0.2), (0.95, 0.09)], u) * k), 0.012 * k)
                 for u in np.linspace(0.4, 0.9, 7) for sg in (-1, 1)])
    sk = sk.sub(ellipsoid(L(0.08 * k, 0, 0.22 * k), (0.06 * k, 0.03 * k, 0.03 * k), R), 0.01 * k)
    sk = sk.sub(ellipsoid(L(0.5 * k, 0, -0.13 * k), (0.42 * k, 0.07 * k, 0.045 * k), R), 0.02 * k)
    add('skull', ['SKULL'], sk.displace(0.0025, 22, seed=55, octaves=4).detail(0.0035, 50, seed=56), 0.0024,
        weight=2.0, min_tris=6500)
    out = []
    for side, sg in (('L', 1), ('R', -1)):
        pts = [L(-0.01 * k, sg * 0.15 * k, -0.12 * k), L(0.25 * k, sg * 0.13 * k, -0.15 * k),
               L(0.6 * k, sg * 0.09 * k, -0.14 * k), L(0.95 * k, sg * 0.035 * k, -0.11 * k)]
        m = ribbon(pts, [0.06 * k, 0.085 * k, 0.065 * k, 0.05 * k], [0.018 * k, 0.021 * k, 0.018 * k, 0.017 * k],
                   R[:, 2])
        m = m.sub(ellipsoid(L(0.28 * k, sg * 0.13 * k, -0.14 * k), (0.07 * k, 0.03 * k, 0.022 * k), R), 0.004)
        add(f'mandible_{side}', ['SKULL'], m.displace(0.0018, 35, seed=70 + sg).detail(0.0025, 60, seed=71 + sg),
            0.002, weight=1.3, min_tris=2000)
        down, back = -R[:, 2], -R[:, 0]
        up_pos = [(L(u * k, sg * (0.035 + 0.1 * (1 - u)) * k, -0.055 * k), down, back, 0.05 + 0.012 * np.sin(np.pi * u))
                  for u in np.linspace(0.97, 0.2, 15)]
        lo_pos = [(L(u * k, sg * (0.035 + 0.09 * (1 - u)) * k, -0.1 * k), -down, back, 0.04 + 0.01 * np.sin(np.pi * u))
                  for u in np.linspace(0.93, 0.22, 14)]
        mk = lambda b, d, bk, h, sd: blade_tooth(b, d, bk, h, sd, curve=0.35, flat=0.36)
        out += tooth_row(f'{P}_tooth_upper_{side}', ['SKULL', 'SKULL_teeth'], mk, up_pos, rng)
        out += tooth_row(f'{P}_tooth_lower_{side}', ['SKULL', 'SKULL_teeth'], mk, lo_pos, rng)
    return out


def features(add, frames, rng):
    # ossified chevron / prezygapophysis rods along the mid tail (looser than in Velociraptor)
    tail = sorted(i for (k, i) in frames if k == 'caudal')
    parts = []
    for i in tail[10:-6:2]:
        c, fwd, up, p = frames[('caudal', i)]
        for off in (up * p['cr'] * 1.3, -up * p['cr'] * 1.7):
            for sg in (-1, 1):
                a = c + off + side_of(fwd, up) * sg * p['cr'] * 0.3
                parts.append(tube([a + fwd * p['cl'] * 0.5, a + fwd * p['cl'] * 3.5], [p['cr'] * 0.1, p['cr'] * 0.06]))
    add('tail_rods', ['SPINE', 'SPINE_tail'], union(0, *parts), 0.0035, min_tris=1500)
    return []


CFG = dict(seed=85, series=ts.series(S, dsl=0.75, csl=0.6, neck_cl=1.05, n_caud=40, robust=1.1),
           **ts.body(S, hz=0.92, arm=1.35, neck_up=1.25, tail_drop=0.2, fem=1.15))
CFG['pelvis'].update(pub_ang=-0.35, isch_ang=0.95)       # opisthopubic dromaeosaur pelvis
CFG['leg_sz']['sickle'] = 0.24
CFG['arm_sz'].update(claw=0.09, finger_dir=V([0.8, 0, -0.55]))
CFG.update(skull=skull, skull_dir=(1, 0, -0.1), sickle=True, features=features)


def bones():
    return theropod.build(P, CFG)
