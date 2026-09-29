"""Spinosaure — Spinosaurus aegyptiacus (15 m).

Silhouette: voile dorsale haute de 1,65 m; museau de crocodile (crâne ~1,7 m,
narines reculées, petite crête, rosette au bout); pattes arrière courtes
(fémur ~60 cm), queue en pagaie (épines et chevrons très hauts).
Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, sphere, ellipsoid, tube, ribbon, union
import anat
import theropod
from anat import local
from plans import skull_shell, cone_tooth, tooth_row, lerp

anat.DETAIL = 1.0
P = 'SPIN'
SPEC = dict(
    key='Spinosaurus', budget=125000, base='#D4C09A', dark='#8D7555',
    pieces={
        'Crane': [f'{P}_skull'], 'Voile': [f'{P}_dorsal_09'], 'Machoire': [f'{P}_mandible_L'],
        'Dent': [f'{P}_tooth_upper_L_01'], 'Vertebre': [f'{P}_dorsal_03'], 'Cote': [f'{P}_rib_L_06'],
        'Griffe': [f'{P}_hand_claw_L'], 'Bassin': [f'{P}_pelvis'], 'Femur': [f'{P}_femur_L'],
        'Pied': [f'{P}_pes_L'], 'Queue': [f'{P}_caudal_{i:02d}' for i in range(10, 17)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible_L', f'{P}_mandible_R']}, closeup_dir=(0.2, -1.0, 0.15),
    views={'34': (0.5, -1.0, 0.2), 'side': (0.0, -1.0, 0.02)},
)

SK = 1.7


def skull(add, R, L, rng):
    prof = [(-0.03, -0.1), (0.0, 0.17), (0.12, 0.24), (0.35, 0.22), (0.5, 0.2), (0.62, 0.23), (0.72, 0.18),
            (1.0, 0.12), (1.35, 0.1), (1.55, 0.13), (1.7, 0.1), (1.72, -0.02), (1.6, -0.08), (1.35, -0.06),
            (1.1, -0.1), (0.7, -0.12), (0.35, -0.16), (0.1, -0.18)]
    holes = [(0.3, 0.1, 0.07, 0.08, 0.1),        # orbit
             (0.52, 0.02, 0.1, 0.05, 0.08),      # antorbital fenestra
             (0.72, 0.1, 0.08, 0.03, 0.05),      # retracted external naris
             (0.1, 0.0, 0.05, 0.1, 0.1)]         # lateral temporal fenestra
    sk = skull_shell(L, R, prof, 0.19, 0.055, 1.2, holes)
    sk = union(0.02, sk, ellipsoid(L(1.58, 0, 0.02), (0.13, 0.12, 0.09), R),       # terminal rosette
               ellipsoid(L(0.62, 0, 0.22), (0.12, 0.02, 0.04), R),                 # small nasal crest
               ellipsoid(L(-0.02, 0, -0.04), (0.04, 0.04, 0.04), R))
    sk = sk.sub(ellipsoid(L(1.0, 0, -0.12), (0.7, 0.05, 0.05), R), 0.02)
    add('skull', ['SKULL'], sk.displace(0.004, 12, seed=5, octaves=4).detail(0.005, 28, seed=6), 0.0045,
        weight=2.0, min_tris=7000)
    out = []
    for side, sg in (('L', 1), ('R', -1)):
        pts = [L(-0.02, sg * 0.18, -0.13), L(0.4, sg * 0.14, -0.17), L(0.9, sg * 0.07, -0.15), L(1.35, sg * 0.05, -0.1),
               L(1.62, sg * 0.08, -0.07)]
        m = ribbon(pts, [0.07, 0.08, 0.05, 0.045, 0.06], [0.02, 0.022, 0.018, 0.016, 0.02], R[:, 2])
        m = m.sub(ellipsoid(L(0.3, sg * 0.15, -0.16), (0.1, 0.04, 0.03), R), 0.008)
        add(f'mandible_{side}', ['SKULL'], m.displace(0.003, 18, seed=20 + sg).detail(0.004, 30, seed=21 + sg),
            0.0035, weight=1.3, min_tris=2000)
        down, back = -R[:, 2], -R[:, 0]
        up_pos = [(L(1.66 - 0.08 * k, sg * (0.06 + 0.045 * (k < 4) + 0.02 * k / 10), -0.06 - 0.01 * (k > 4)),
                   down, back * 0.3, 0.1 - 0.035 * abs(k - 2) / 12) for k in range(14)]
        lo_pos = [(L(1.6 - 0.08 * k, sg * (0.07 + 0.015 * k / 12), -0.09), -down, back * 0.3,
                   0.08 - 0.02 * k / 13) for k in range(13)]
        out += tooth_row(f'{P}_tooth_upper_{side}', ['SKULL', 'SKULL_teeth'],
                         lambda b, d, bk, h, s: cone_tooth(b, d, bk, h, s, curve=0.05, r=0.2), up_pos, rng)
        out += tooth_row(f'{P}_tooth_lower_{side}', ['SKULL', 'SKULL_teeth'],
                         lambda b, d, bk, h, s: cone_tooth(b, d, bk, h, s, curve=0.05, r=0.2), lo_pos, rng)
    return out


def sail_h(x):
    """Sail profile over dorsal+sacral (x in [0,1]): rounded, peak 1.65 m."""
    return 0.35 + 1.3 * np.sin(np.pi * np.clip(x * 1.05, 0, 1)) ** 0.8


def cerv(t, i):
    cr = 0.075 + 0.03 * t
    return 0.24, dict(cr=cr, ends='pro', canal=cr * 0.35, sl=0.05 + 0.1 * t, tilt=0.15, sw=0.06, st=cr * 0.2,
                      tl=cr * 1.1, tr=cr * 0.25, tu=-cr * 0.4, zyg=cr * 0.45, pleuro=0.5, knob=0.5)


def dors(t, i):
    cr = 0.1
    return 0.15, dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=sail_h(t * 13 / 18), tilt=-0.05 + 0.15 * t,
                      sw=0.1, st=0.024, tl=0.22, tr=0.035, tu=0.1, zyg=cr * 0.35, pleuro=0.5, knob=1.2, curl=-0.03)


def sacr(t, i):
    return 0.15, dict(cr=0.095, ends='flat', canal=0.03, sl=sail_h((13 + i) / 18), tilt=0.15, sw=0.1, st=0.024,
                      tl=0.18, tr=0.04, tu=0.04, knob=1.2)


def caud(t, i):
    cr = 0.09 * (1 - 0.8 * t)
    return 0.13, dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=max(0.55 * (1 - 0.8 * t), 0.05), tilt=0.3,
                      sw=0.05 * (1 - 0.6 * t), st=cr * 0.18, tl=max(0.2 * (1 - 4 * t), 0), tr=cr * 0.25, tu=0.0,
                      chevron=0.5 * (1 - 0.8 * t) if i > 1 else 0)


def arm(side, sg, a):
    sh = a['sh']
    return dict(G=sh + V([0.12, 0.3 * sg, -0.55]), E=sh + V([0.25, 0.36 * sg, -1.0]),
                W=sh + V([0.62, 0.33 * sg, -1.2]))


CFG = dict(
    seed=21,
    spine=[(4.35, 2.98), (4.0, 2.7), (3.55, 2.35), (3.05, 2.12), (2.6, 2.05), (1.2, 1.95), (0.1, 1.82),
           (-1.0, 1.78), (-3.0, 1.72), (-6.0, 1.55), (-9.8, 1.25)],
    series=[('cervical', 10, cerv), ('dorsal', 13, dors), ('sacral', 5, sacr), ('caudal', 64, caud)],
    sacral_spine=0.3, shoulder_dorsal=2,
    ribs=dict(depth=[(0, 0.65), (0.2, 1.0), (0.5, 1.05), (0.8, 0.8), (1, 0.45)],
              ymax=[(0, 0.4), (0.4, 0.52), (0.75, 0.5), (1, 0.38)], yend=[(0, 0.2), (0.5, 0.35), (1, 0.4)],
              back=[(0, 0.2), (1, 0.4)], wid=[(0, 0.032), (0.5, 0.036), (1, 0.028)], thick=[(0, 0.018), (1, 0.014)]),
    rib_last=12,
    gastralia=lambda a: (a['sh'] + V([0, 0, -1.0]), a['hip'] + V([0.3, 0, -0.95]), 0.42, 14, 0.012),
    pelvis=dict(A_rel=(0.0, 0.25, -0.22), il_len=1.1, il_h=0.42, pub_len=0.75, boot=0.18, isch_len=0.65),
    leg=lambda side, sg, a: dict(A=a['A'] * V([1, sg, 1]), K=a['A'] * V([1, 0, 1]) + V([0.3 + 0.08 * sg, 0.3 * sg, -0.55]),
                                 Ank=a['A'] * V([1, 0, 1]) + V([0.05 + 0.1 * sg, 0.28 * sg, -1.15])),
    leg_sz=dict(fem_r=0.055, tib_r=0.045, mt_len=0.38, toe_len=0.34, claw=0.08),
    arm=arm, arm_sz=dict(hum_r=0.04, scap_vec=V([-0.55, 0.0, 0.5]), finger_len=0.3, claw=0.14,
                         finger_dir=V([0.8, 0, -0.5])),
    fingers=3, claw_piece=0,
    skull=skull, skull_dir=(1, 0, -0.08),
)


def bones():
    return theropod.build(P, CFG)
