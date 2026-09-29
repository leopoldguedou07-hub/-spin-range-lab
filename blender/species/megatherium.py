"""Mégathérium — Megatherium americanum (6 m).

Silhouette: paresseux géant terrestre (taille d'un éléphant); crâne ~70 cm
long, arcade zygomatique avec une grande apophyse descendante, mâchoire très
profonde; molaires prismatiques à crêtes transversales (pas d'incisives ni de
canines); énormes griffes (~30 cm, 3 par main) repliées, marche sur le bord
des pieds; bassin très large et queue massive (trépied).
Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, sphere, ellipsoid, box, tube, ribbon, union, bezier
import anat
from anat import carpal_block, digit
import mammal
from plans import skull_shell, tooth_row, claw_shape

anat.DETAIL = 1.0
P = 'MEGT'
K = 3.2
SPEC = dict(
    key='Megatherium', budget=120000, base='#D4C09C', dark='#8A7354',
    pieces={
        'Crane': [f'{P}_skull'], 'Machoire': [f'{P}_mandible'], 'Dent': [f'{P}_molar_upper_L_01'],
        'Vertebre': [f'{P}_thoracic_06'], 'Cote': [f'{P}_rib_L_06'],
        'Bras': [f'{P}_humerus_L', f'{P}_radius_L', f'{P}_ulna_L'], 'Griffe': [f'{P}_claw_L'],
        'Bassin': [f'{P}_pelvis'], 'Femur': [f'{P}_femur_L'], 'Queue': [f'{P}_caudal_{i:02d}' for i in range(3, 9)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible'], 'hand': [f'{P}_manus_L', f'{P}_claw_L']},
    closeup_dir=(0.5, -1.0, 0.15),
    views={'34': (0.6, -1.0, 0.25), 'side': (0.0, -1.0, 0.02)},
)


def prism_molar(base, down, back, h, seed):
    """Hypselodont molar: square prism with two transverse crests on the crown."""
    side = norm(np.cross(down, back))
    Rm = np.stack([norm(back), side, norm(down)], 1)
    col = box(base + down * h * 0.45, (h * 0.28, h * 0.3, h * 0.5), Rm, rnd=h * 0.05)
    crests = [ellipsoid(base + down * h * 0.97 + back * s * h * 0.12, (h * 0.07, h * 0.3, h * 0.06), Rm)
              for s in (-1, 1)]
    return union(h * 0.03, col, *crests).displace(h * 0.01, 10 / h, seed=seed)


def skull(R, L, rng, add):
    prof = [(-0.03, -0.02), (0.0, 0.12), (0.1, 0.19), (0.3, 0.2), (0.5, 0.17), (0.62, 0.13), (0.7, 0.08),
            (0.71, -0.02), (0.6, -0.08), (0.4, -0.1), (0.2, -0.1), (0.05, -0.06)]
    holes = [(0.3, 0.1, 0.045, 0.045, 0.05),              # orbit (small)
             (0.7, 0.04, 0.04, 0.05, 0.05, False)]        # nasal opening
    sk = skull_shell(L, R, prof, 0.13, 0.07, 0.7, holes, rnd=0.012)
    parts = [sk, ellipsoid(L(-0.02, 0, 0.0), (0.04, 0.07, 0.04), R)]
    for sg in (-1, 1):
        # zygomatic arch with its big descending process under the orbit
        parts.append(tube([L(0.38, sg * 0.1, 0.02), L(0.3, sg * 0.15, 0.02), L(0.18, sg * 0.14, 0.03)],
                          [0.025, 0.028, 0.022]))
        parts.append(ribbon([L(0.3, sg * 0.15, 0.02), L(0.29, sg * 0.155, -0.1), L(0.27, sg * 0.15, -0.2)],
                            [0.05, 0.045, 0.03], [0.018, 0.016, 0.014], R[:, 0]))
    sk = union(0.012, *parts)
    sk = sk.sub(ellipsoid(L(0.35, 0, -0.1), (0.3, 0.07, 0.04), R), 0.01)
    add('skull', ['SKULL'], sk.displace(0.004, 13, seed=5, octaves=4).detail(0.005, 30, seed=6), 0.0036,
        weight=2.0, min_tris=6500)
    out = []
    dn, bk = -R[:, 2], -R[:, 0]
    for side, sg in (('L', 1), ('R', -1)):
        up = [(L(0.52 - 0.055 * q, sg * 0.06, -0.08), dn, bk, 0.09) for q in range(5)]
        lo = [(L(0.5 - 0.055 * q, sg * 0.06, -0.12), -dn, bk, 0.1) for q in range(4)]
        out += tooth_row(f'{P}_molar_upper_{side}', ['SKULL', 'SKULL_teeth'], prism_molar, up, rng, voxel_k=0.03)
        out += tooth_row(f'{P}_molar_lower_{side}', ['SKULL', 'SKULL_teeth'], prism_molar, lo, rng, voxel_k=0.03)
    # very deep mandible with a ventral bulge under the tooth row, tall ramus
    parts = []
    for sg in (-1, 1):
        parts.append(ribbon([L(0.08, sg * 0.1, -0.14), L(0.35, sg * 0.08, -0.2), L(0.62, sg * 0.04, -0.13)],
                            [0.1, 0.16, 0.06], [0.03, 0.035, 0.025], R[:, 2]))
        parts.append(ribbon([L(0.1, sg * 0.1, -0.12), L(0.06, sg * 0.1, 0.02)], [0.12, 0.06], [0.025, 0.02], R[:, 0]))
        parts.append(ellipsoid(L(0.03, sg * 0.1, 0.0), (0.03, 0.04, 0.025), R))
    parts.append(ribbon([L(0.6, 0, -0.13), L(0.72, 0, -0.1)], [0.08, 0.05], [0.03, 0.02], R[:, 2]))   # spout
    add('mandible', ['SKULL'], union(0.02, *parts).displace(0.003, 16, seed=20).detail(0.004, 36, seed=21), 0.0034,
        weight=1.4, min_tris=3000)
    return out


def cerv(t, i):
    cr = 0.06
    return 0.075, dict(cr=cr, ends='flat', canal=cr * 0.45, sl=0.03 + 0.12 * t ** 2, tilt=0.3, sw=0.05, st=0.012,
                       tl=0.1, tr=0.018, tu=-0.01, zyg=0.024, knob=0.5)


def thor(t, i):
    cr = 0.065 + 0.012 * t
    return 0.085, dict(cr=cr, ends='flat', canal=0.024, sl=0.32 * (1 - 0.4 * t), tilt=0.5 - 0.3 * t, sw=0.05,
                       st=0.012, tl=0.1, tr=0.018, tu=0.03, zyg=0.02, knob=0.7)


def lumb(t, i):
    cr = 0.085
    return 0.1, dict(cr=cr, ends='flat', canal=0.025, sl=0.18, tilt=-0.1, sw=0.08, st=0.015, tl=0.16, tr=0.025,
                     tu=0.0, zyg=0.03, knob=0.6)


def sacr(t, i):
    return 0.1, dict(cr=0.085, ends='flat', canal=0.024, sl=0.15, tilt=0.0, sw=0.08, st=0.016, tl=0.2, tr=0.035)


def caud(t, i):
    cr = 0.095 * (1 - 0.72 * t)
    return 0.1 * (1 - 0.4 * t), dict(cr=cr, ends='flat', canal=cr * 0.3, sl=max(0.14 * (1 - 1.4 * t), 0.02), tilt=0.4,
                                     sw=0.06 * (1 - t) + 0.015, st=cr * 0.2, tl=max(0.2 * (1 - 1.5 * t), 0.02),
                                     tr=cr * 0.3, tu=0.0, chevron=0.16 * (1 - t) if i > 1 else 0)


def manus(W, sg, side, rng, add):
    """Hand: carpals, 2 small lateral digits, 3 huge curved claws (II–IV)
    folded inward — the animal walked on its knuckles / outer edge."""
    parts = [carpal_block(W + V([0, 0, -0.06]), (0.12, 0.13, 0.06), np.eye(3), n=4, rng=rng)]
    for q, (a, ln, cl) in enumerate([(-30, 0.14, 0.24), (-8, 0.18, 0.3), (14, 0.16, 0.28), (34, 0.1, 0.0)]):
        aa = np.radians(a) * sg
        dd = V([np.cos(aa), np.sin(aa), 0])
        b0 = W + V([0.05, 0, -0.1]) + dd * 0.05
        b1 = b0 + norm(dd + V([0, 0, -1.2])) * ln
        b2 = b1 + norm(dd * 0.6 + V([0, 0, -0.5])) * 0.06
        b2[2] = max(b2[2], 0.05)
        parts.append(digit([b0, b1, b2], [0.04, 0.036, 0.032], knuckle=1.3, seed=int(rng.integers(1e4))))
        if cl:
            c = claw_shape(b2, norm(dd * 0.3 + V([0, -sg * 0.5, 0])), cl, 0.035, rng, down=V([0, 0, -1]))
            if q == 1:
                add(f'claw_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], c, 0.0035, min_tris=1200)
            else:
                parts.append(c)
    return union(0.012, *parts)


def pes(Ank, sg, side, rng, add):
    """Foot turned onto its outer edge: huge calcaneus heel, short metatarsals,
    one big clawed digit III, small outer digits resting on the ground."""
    tilt = rot((1, 0, 0), -0.55 * sg)
    parts = [carpal_block(Ank + V([0, 0, -0.08]), (0.13, 0.12, 0.07), tilt, n=4, rng=rng),
             ellipsoid(Ank + V([-0.2, sg * 0.03, -0.18]), (0.16, 0.08, 0.1), rot((0, 1, 0), 0.5))]   # calcaneus
    for q, (a, ln) in enumerate([(-15, 0.22), (5, 0.26), (22, 0.2)]):
        aa = np.radians(a) * sg
        dd = V([np.cos(aa), np.sin(aa), 0])
        b0 = Ank + V([0.05, sg * 0.05, -0.2]) + dd * 0.04
        b1 = b0 + dd * ln + V([0, sg * 0.03, -0.1])
        b1[2] = max(b1[2], 0.05)
        parts.append(digit([b0, b1, b1 + dd * 0.06], [0.045, 0.04, 0.035], knuckle=1.2, seed=int(rng.integers(1e4)),
                           **({'claw': {'length': 0.2, 'r': 0.035}} if q == 1 else {})))
    return union(0.015, *parts)


def joints(side, sg, a):
    sh, A = a['sh'], a['A'] * V([1, sg, 1])
    G = sh + V([0.12, 0.34 * sg, -0.45])
    E = G + V([-0.2, 0.04 * sg, -0.66])
    W = E + V([0.14, 0.0, -0.58])
    Kn = A + V([0.18 + 0.04 * sg, 0.04 * sg, -0.8])
    return dict(G=G, E=E, W=W, A=A, K=Kn, Ank=Kn + V([-0.1, 0.02 * sg, -0.62]))


CFG = dict(
    seed=111, k=K,
    spine=[(2.5, 1.9), (2.25, 2.02), (1.95, 2.02), (1.6, 2.02), (0.9, 2.12), (0.1, 2.2), (-0.45, 2.15),
           (-0.8, 1.95), (-1.3, 1.45), (-1.75, 0.95), (-2.1, 0.6)],
    series=[('cervical', 7, cerv), ('thoracic', 16, thor), ('lumbar', 3, lumb), ('sacral', 5, sacr),
            ('caudal', 18, caud)],
    ribs=dict(depth=[(0, 0.7), (0.3, 1.05), (0.6, 1.1), (1, 0.7)], ymax=[(0, 0.4), (0.4, 0.62), (1, 0.58)],
              yend=[(0, 0.15), (0.5, 0.35), (1, 0.45)], back=[(0, 0.12), (1, 0.28)], wid=[(0, 0.045), (1, 0.04)],
              thick=[(0, 0.022), (1, 0.018)]),
    sternum_rel=(0.04, 0, -0.33), A_rel=(-0.02, 0.12, -0.08), pelvis_k=3.8, ilium_wing=2.4, ilium_flare=0.06,
    joints=joints, r_front=0.022, r_hind=0.033, scap=(0.19, 0.11, 0.006, 0.5), acromion=True, delto=2.0, olec=1.4,
    manus=manus, pes=pes, skull=skull, skull_dir=(1, 0, -0.3),
)


def bones():
    return mammal.build(P, CFG)
