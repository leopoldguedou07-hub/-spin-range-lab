"""Giganotosaure — Giganotosaurus carolinii (12,5 m).

Silhouette: un des plus grands carnivores terrestres; crâne très long et bas
(~1,6 m) aux grandes ouvertures et crête rugueuse sur le nez; bras courts à
3 doigts. Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, sphere, ellipsoid, tube, ribbon, union
import anat
import theropod
from plans import skull_shell, blade_tooth, tooth_row, lerp

anat.DETAIL = 1.0
P = 'GIGA'
SPEC = dict(
    key='Giganotosaurus', budget=120000, base='#D2BE98', dark='#8B7353',
    pieces={
        'Crane': [f'{P}_skull'], 'Machoire': [f'{P}_mandible_L'], 'Dent': [f'{P}_tooth_upper_L_01'],
        'Vertebre': [f'{P}_dorsal_06'], 'Cote': [f'{P}_rib_L_05'],
        'Bras': [f'{P}_humerus_L', f'{P}_radius_L', f'{P}_ulna_L'], 'Griffe': [f'{P}_hand_claw_L'],
        'Bassin': [f'{P}_pelvis'], 'Femur': [f'{P}_femur_L'], 'Pied': [f'{P}_pes_L'],
        'Queue': [f'{P}_caudal_{i:02d}' for i in range(8, 15)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible_L', f'{P}_mandible_R']}, closeup_dir=(0.25, -1.0, 0.12),
    views={'34': (0.55, -1.0, 0.2), 'side': (0.0, -1.0, 0.02)},
)

SK = 1.6


def skull(add, R, L, rng):
    prof = [(-0.04, -0.14), (0.0, 0.26), (0.15, 0.37), (0.45, 0.36), (0.8, 0.3), (1.15, 0.22), (1.45, 0.15),
            (1.6, 0.06), (1.6, -0.1), (1.3, -0.19), (0.9, -0.21), (0.5, -0.24), (0.2, -0.28), (0.02, -0.24)]
    holes = [(0.36, 0.13, 0.09, 0.13, 0.12),      # orbit (keyhole)
             (0.78, 0.03, 0.22, 0.1, 0.12),       # antorbital fenestra
             (1.35, 0.06, 0.08, 0.045, 0.06),     # external naris
             (0.13, -0.02, 0.07, 0.15, 0.12),     # lateral temporal fenestra
             (1.0, 0.08, 0.05, 0.04, 0.08)]       # maxillary fenestra
    sk = skull_shell(L, R, prof, 0.3, 0.1, SK, holes)
    ridge = [sphere(L(u, 0, lerp([(0.5, 0.36), (1.4, 0.16)], u) + 0.01), 0.035 + 0.01 * np.sin(u * 17))
             for u in np.linspace(0.55, 1.4, 12)]                     # rugose nasal crest
    sk = union(0.015, sk, *ridge, ellipsoid(L(-0.03, 0, -0.05), (0.05, 0.05, 0.05), R))
    sk = sk.sub(ellipsoid(L(0.12, 0, 0.36), (0.12, 0.05, 0.05), R), 0.02)            # supratemporal area
    sk = sk.sub(ellipsoid(L(0.8, 0, -0.26), (0.7, 0.13, 0.08), R), 0.03)             # palate
    add('skull', ['SKULL'], sk.displace(0.006, 9, seed=5, octaves=4).detail(0.007, 22, seed=6), 0.0055,
        weight=2.0, min_tris=8000)
    out = []
    for side, sg in (('L', 1), ('R', -1)):
        pts = [L(-0.02, sg * 0.28, -0.2), L(0.4, sg * 0.24, -0.26), L(0.9, sg * 0.18, -0.28), L(1.35, sg * 0.1, -0.25),
               L(1.55, sg * 0.05, -0.24)]
        m = ribbon(pts, [0.1, 0.15, 0.12, 0.1, 0.11], [0.03, 0.035, 0.03, 0.028, 0.03], R[:, 2])
        m = union(0.02, m, ellipsoid(L(1.53, sg * 0.05, -0.28), (0.05, 0.035, 0.1), R))  # squared chin
        m = m.sub(ellipsoid(L(0.45, sg * 0.24, -0.25), (0.14, 0.05, 0.05), R), 0.01)     # mandibular fenestra
        add(f'mandible_{side}', ['SKULL'], m.displace(0.004, 14, seed=20 + sg).detail(0.005, 25, seed=21 + sg),
            0.0045, weight=1.4, min_tris=2500)
        down, back = -R[:, 2], -R[:, 0]
        up_pos = [(L(1.52 - 0.075 * k, sg * (0.075 + 0.1 * k / 12), -0.1 - 0.012 * np.sin(k / 3)), down, back,
                   0.13 + 0.06 * np.sin(np.pi * (k + 2) / 16)) for k in range(13)]
        lo_pos = [(L(1.5 - 0.075 * k, sg * (0.06 + 0.1 * k / 12), -0.2), -down, back,
                   0.1 + 0.05 * np.sin(np.pi * (k + 2) / 16)) for k in range(12)]
        out += tooth_row(f'{P}_tooth_upper_{side}', ['SKULL', 'SKULL_teeth'], blade_tooth, up_pos, rng)
        out += tooth_row(f'{P}_tooth_lower_{side}', ['SKULL', 'SKULL_teeth'], blade_tooth, lo_pos, rng)
    return out


def cerv(t, i):
    cr = 0.1 + 0.04 * t
    return 0.2, dict(cr=cr, ends='pro', canal=cr * 0.35, sl=0.08 + 0.1 * t, tilt=0.2, sw=0.08, st=cr * 0.2,
                     tl=cr * 1.2, tr=cr * 0.25, tu=-cr * 0.4, zyg=cr * 0.45, pleuro=0.5, knob=0.6)


def dors(t, i):
    cr = 0.14 + 0.01 * t
    return 0.18, dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=0.42 + 0.06 * np.sin(np.pi * t), tilt=0.05, sw=0.075,
                      st=cr * 0.18, tl=0.3, tr=0.045, tu=0.12, zyg=cr * 0.35, pleuro=0.45, knob=0.7)


def sacr(t, i):
    return 0.19, dict(cr=0.14, ends='flat', canal=0.04, sl=0.3, tilt=0.0, sw=0.08, st=0.03, tl=0.22, tr=0.05, tu=0.05)


def caud(t, i):
    cr = 0.135 * (1 - 0.85 * t ** 0.9)
    return 0.17 * (1 - 0.35 * t), dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=max(0.38 * (1 - 1.3 * t), 0.0),
                                       tilt=0.45, sw=0.1 * (1 - t) + 0.02, st=cr * 0.18,
                                       tl=max(0.3 * (1 - 3 * t), 0), tr=cr * 0.25, tu=0.0,
                                       chevron=0.4 * (1 - t) ** 1.3 if i > 1 else 0)


CFG = dict(
    seed=12,
    spine=[(3.62, 4.05), (3.32, 3.72), (3.02, 3.46), (2.62, 3.32), (1.5, 3.3), (0.3, 3.25), (-0.9, 3.2), (-3.0, 3.1),
           (-5.5, 2.86), (-8.1, 2.52)],
    series=[('cervical', 10, cerv), ('dorsal', 13, dors), ('sacral', 5, sacr), ('caudal', 46, caud)],
    sacral_spine=0.35,
    ribs=dict(depth=[(0, 0.8), (0.2, 1.35), (0.45, 1.45), (0.75, 1.2), (1, 0.7)],
              ymax=[(0, 0.5), (0.35, 0.72), (0.7, 0.72), (1, 0.55)], yend=[(0, 0.25), (0.5, 0.45), (1, 0.55)],
              back=[(0, 0.25), (1, 0.5)], wid=[(0, 0.045), (0.5, 0.052), (1, 0.04)],
              thick=[(0, 0.03), (1, 0.024)]),
    rib_last=12,
    shoulder_dorsal=2,
    gastralia=lambda a: (a['sh'] + V([0, 0, -1.3]), a['hip'] + V([0.35, 0, -1.5]), 0.55, 16, 0.018),
    pelvis=dict(A_rel=(0.0, 0.33, -0.28), il_len=1.55, il_h=0.62, pub_len=1.25, boot=0.36, isch_len=1.05),
    leg=lambda side, sg, a: dict(A=a['A'] * V([1, sg, 1]), K=a['A'] * V([1, 0, 0]) + V([0.36 + 0.12 * sg, 0.37 * sg, 1.62]),
                                 Ank=a['A'] * V([1, 0, 0]) + V([-0.2 + 0.18 * sg, 0.34 * sg, 0.64])),
    leg_sz=dict(fem_r=0.1, tib_r=0.085, mt_len=0.58, toe_len=0.46, claw=0.15),
    arm=lambda side, sg, a: dict(G=a['sh'] + V([0.15, 0.42 * sg, -0.6]), E=a['sh'] + V([0.32, 0.48 * sg, -1.02]),
                                 W=a['sh'] + V([0.65, 0.43 * sg, -1.2])),
    arm_sz=dict(hum_r=0.045, scap_vec=V([-0.6, 0.0, 0.62]), finger_len=0.26, claw=0.13),
    fingers=3, claw_piece=1,
    skull=skull, skull_dir=(1, 0, -0.12),
)


def bones():
    return theropod.build(P, CFG)
