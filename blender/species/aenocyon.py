"""Loup terrible — Aenocyon dirus (1,7 m).

Silhouette: grand loup préhistorique, plus massif que le loup gris; crâne
~30 cm large, crête sagittale haute, museau large; carnassières massives
(broyeuses d'os) et canines robustes; pattes plus courtes et robustes, pieds
digitigrades à 4 doigts (+ ergot devant) aux griffes émoussées non
rétractiles; queue pendante. Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, sphere, ellipsoid, tube, ribbon, union, bezier
import anat
import mammal
from plans import skull_shell, cone_tooth, blade_tooth, tooth_row

anat.DETAIL = 0.9
P = 'AENO'
K = 1.0
SPEC = dict(
    key='Aenocyon', budget=65000, base='#D9C7A3', dark='#8F7A5B',
    pieces={
        'Crane': [f'{P}_skull'], 'Machoire': [f'{P}_mandible'], 'Dent': [f'{P}_canine_L'],
        'Vertebre': [f'{P}_lumbar_03'], 'Cote': [f'{P}_rib_L_06'], 'Omoplate': [f'{P}_scapula_L'],
        'Bras': [f'{P}_humerus_L', f'{P}_radius_L', f'{P}_ulna_L'], 'Bassin': [f'{P}_pelvis'],
        'Femur': [f'{P}_femur_L'], 'Pied': [f'{P}_pes_L'],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible', f'{P}_canine_L', f'{P}_canine_R']},
    closeup_dir=(0.6, -1.0, 0.2),
    views={'34': (0.6, -1.0, 0.25), 'side': (0.0, -1.0, 0.02)},
)


def skull(R, L, rng, add):
    # long skull: high crest at the back, forehead 'stop', long broad muzzle
    prof = [(-0.02, -0.02), (0.0, 0.05), (0.03, 0.09), (0.08, 0.1), (0.13, 0.085), (0.17, 0.065), (0.24, 0.05),
            (0.3, 0.035), (0.305, 0.0), (0.3, -0.03), (0.2, -0.035), (0.1, -0.03), (0.03, -0.04)]
    holes = [(0.13, 0.045, 0.02, 0.018, 0.02),        # orbit
             (0.303, 0.012, 0.012, 0.015, 0.015, False)]  # nasal opening
    sk = skull_shell(L, R, prof, 0.05, 0.025, 0.3, holes, rnd=0.004)
    zyg = [tube([L(0.16, sg * 0.04, 0.0), L(0.1, sg * 0.075, 0.005), L(0.04, sg * 0.06, 0.012)],
                [0.008, 0.01, 0.008]) for sg in (-1, 1)]
    crest = ribbon([L(-0.01, 0, 0.065), L(0.04, 0, 0.11), L(0.11, 0, 0.1)], [0.008, 0.012, 0.006],
                   [0.003, 0.004, 0.003], R[:, 2])          # high sagittal crest (thin blade, tall)
    sk = union(0.004, sk, *zyg, crest, ellipsoid(L(-0.012, 0, -0.005), (0.018, 0.03, 0.013), R),
               *[ellipsoid(L(0.12, sg * 0.03, -0.03), (0.035, 0.012, 0.012), R) for sg in (-1, 1)])  # carnassial roots
    sk = sk.sub(ellipsoid(L(0.12, 0, -0.035), (0.13, 0.022, 0.012), R), 0.003)
    add('skull', ['SKULL'], sk.displace(0.001, 60, seed=5, octaves=4).detail(0.0012, 130, seed=6), 0.001,
        weight=2.0, min_tris=6000)
    out = []
    dn, bk = -R[:, 2], -R[:, 0]
    for side, sg in (('L', 1), ('R', -1)):
        b = L(0.28, sg * 0.02, -0.03)
        can = tube(bezier(b, b + dn * 0.022, b + dn * 0.036 + bk * 0.008, n=6), list(np.linspace(0.0065, 0.0012, 6)))
        add(f'canine_{side}', ['SKULL', 'SKULL_teeth'], can.displace(0.0002, 400, seed=30 + sg), 0.00045,
            min_tris=600)
        inc = [(L(0.302, sg * (0.004 + 0.005 * q), -0.03), dn, bk, 0.012) for q in range(3)]
        pm = [(L(0.26 - 0.022 * q, sg * (0.022 + 0.004 * q), -0.032), dn, bk, 0.01 + 0.002 * q) for q in range(3)]
        carn = [(L(0.18, sg * 0.034, -0.034), dn, bk, 0.02)]                      # P4 carnassial blade
        mol = [(L(0.155 - 0.017 * q, sg * (0.036 - 0.002 * q), -0.034), dn, bk, 0.009) for q in range(2)]
        out += tooth_row(f'{P}_tooth_inc_upper_{side}', ['SKULL', 'SKULL_teeth'],
                         lambda b_, d, bk_, h, s: cone_tooth(b_, d, bk_, h, s, curve=0.1, r=0.22), inc, rng)
        out += tooth_row(f'{P}_tooth_upper_{side}', ['SKULL', 'SKULL_teeth'],
                         lambda b_, d, bk_, h, s: blade_tooth(b_, d, bk_, h, s, curve=0.05, flat=0.55), pm + carn, rng)
        out += tooth_row(f'{P}_tooth_molar_upper_{side}', ['SKULL', 'SKULL_teeth'],
                         lambda b_, d, bk_, h, s: cone_tooth(b_, d, bk_, h, s, curve=0.0, r=0.6), mol, rng)
    # mandible (closed): horizontal body with teeth, vertical ramus, coronoid, condyle
    parts = []
    for sg in (-1, 1):
        parts.append(ribbon([L(0.02, sg * 0.05, -0.04), L(0.12, sg * 0.035, -0.05), L(0.29, sg * 0.012, -0.045)],
                            [0.02, 0.022, 0.016], [0.006, 0.007, 0.006], R[:, 2]))
        parts.append(ribbon([L(0.04, sg * 0.05, -0.04), L(0.03, sg * 0.05, 0.015)], [0.03, 0.018], [0.005, 0.004],
                            R[:, 0]))                                      # coronoid process
        parts.append(ellipsoid(L(0.0, sg * 0.05, -0.03), (0.008, 0.014, 0.007), R))   # condyle
        lo = [(L(0.27 - 0.02 * q, sg * (0.014 + 0.004 * q), -0.037), -dn, bk, 0.009 + 0.001 * q) for q in range(5)]
        lo += [(L(0.165, sg * 0.03, -0.037), -dn, bk, 0.016), (L(0.14, sg * 0.032, -0.037), -dn, bk, 0.01)]
        out += tooth_row(f'{P}_tooth_lower_{f"L" if sg > 0 else "R"}', ['SKULL', 'SKULL_teeth'],
                         lambda b_, d, bk_, h, s: blade_tooth(b_, d, bk_, h, s, curve=0.08, flat=0.55), lo, rng)
    parts.append(ellipsoid(L(0.29, 0, -0.045), (0.012, 0.018, 0.01), R))         # symphysis
    add('mandible', ['SKULL'], union(0.003, *parts).displace(0.0007, 100, seed=20), 0.0008, weight=1.3, min_tris=2500)
    return out


def cerv(t, i):
    cr = 0.019
    return 0.05, dict(cr=cr, ends='flat', canal=cr * 0.5, sl=0.012 + 0.035 * t ** 2, tilt=0.3, sw=0.022, st=0.004,
                      tl=0.035 if i > 1 else 0.055, tr=0.006, tu=-0.005, zyg=0.008, knob=0.4)


def thor(t, i):
    cr = 0.018 + 0.004 * t
    return 0.03, dict(cr=cr, ends='flat', canal=0.008, sl=0.075 * (1 - 0.55 * t), tilt=0.6 - 0.35 * t, sw=0.011,
                      st=0.0032, tl=0.022, tr=0.005, tu=0.01, zyg=0.007, knob=0.7)


def lumb(t, i):
    cr = 0.023
    return 0.04, dict(cr=cr, ends='flat', canal=0.008, sl=0.038, tilt=-0.3, sw=0.026, st=0.005, tl=0.05, tr=0.008,
                      tu=-0.004, tb=-0.012, zyg=0.009, knob=0.6)


def sacr(t, i):
    return 0.032, dict(cr=0.021, ends='flat', canal=0.007, sl=0.03, tilt=0.0, sw=0.018, st=0.005, tl=0.035, tr=0.01)


def caud(t, i):
    cr = 0.013 * (1 - 0.55 * t)
    return 0.035 * (1 + 0.3 * np.sin(np.pi * t)), dict(cr=cr, ends='flat', canal=cr * 0.3,
                                                       sl=max(0.015 * (1 - 3 * t), 0), tilt=0.5, sw=0.008,
                                                       st=cr * 0.2, tl=max(0.016 * (1 - 3 * t), 0), tr=cr * 0.25,
                                                       tu=0.0)


def joints(side, sg, a):
    sh, A = a['sh'], a['A'] * V([1, sg, 1])
    G = sh + V([0.04, 0.07 * sg, -0.12])
    E = G + V([-0.06, 0.01 * sg, -0.22])
    W = E + V([0.02 + 0.02 * sg, -0.01 * sg, -0.26])
    Kn = A + V([0.1 + 0.02 * sg, 0.01 * sg, -0.25])
    return dict(G=G, E=E, W=W, A=A, K=Kn, Ank=Kn + V([-0.12 - 0.02 * sg, 0, -0.28]))


CFG = dict(
    seed=101, k=K,
    spine=[(0.66, 0.9), (0.56, 0.9), (0.44, 0.84), (0.3, 0.83), (0.05, 0.84), (-0.25, 0.84), (-0.5, 0.82),
           (-0.62, 0.79), (-0.8, 0.62), (-0.95, 0.42), (-1.05, 0.28)],
    series=[('cervical', 7, cerv), ('thoracic', 13, thor), ('lumbar', 7, lumb), ('sacral', 3, sacr),
            ('caudal', 20, caud)],
    ribs=dict(depth=[(0, 0.2), (0.3, 0.3), (0.6, 0.3), (1, 0.18)], ymax=[(0, 0.09), (0.4, 0.13), (1, 0.11)],
              yend=[(0, 0.035), (0.5, 0.07), (1, 0.09)], back=[(0, 0.04), (1, 0.08)], wid=[(0, 0.008), (1, 0.007)],
              thick=[(0, 0.0045), (1, 0.0035)]),
    sternum_rel=(0.05, 0, -0.31), A_rel=(-0.03, 0.05, -0.065), pelvis_k=0.95,
    joints=joints, r_front=0.014, r_hind=0.014, scap=(0.16, 0.075, 0.006, 0.55),
    manus=lambda W, sg, side, rng, add: mammal.paw(W, sg, rng, 5, K, claw_len=0.02, claw_r=0.004, splay=28,
                                                   blunt=True),
    pes=lambda Ank, sg, side, rng, add: union(0.003, mammal.paw(Ank, sg, rng, 4, K * 1.1, claw_len=0.018,
                                                                claw_r=0.0037, splay=18, curl=0.3, blunt=True),
                                              ellipsoid(Ank + V([-0.03, 0, 0.0]), (0.028, 0.011, 0.011),
                                                        rot((0, 1, 0), -0.4))),
    skull=skull, skull_dir=(1, 0, -0.2),
)


def bones():
    return mammal.build(P, CFG)
