"""Diplodocus — Diplodocus carnegii (26 m).

Silhouette: sauropode très long et fin; cou presque horizontal à épines
fendues en V (bifides); crâne long et bas en cheval (~60 cm), narines tout en
haut, dents en crayon seulement à l'avant; pattes avant plus courtes que les
arrière; queue en fouet de ~80 vertèbres à chevrons doubles (en patin).
Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, frame, sphere, ellipsoid, tube, ribbon, plate, union, bezier, round_cone
import anat
from anat import local, long_bone, digit, carpal_block
from plans import (Curve3, column, ribcage, pelvis_saurischian, quad_limb, skull_shell, cone_tooth, tooth_row, lerp)
import ornitho

anat.DETAIL = 1.0
P = 'DIPL'
SPEC = dict(
    key='Diplodocus', budget=140000, base='#D5C19B', dark='#8D7555',
    pieces={
        'Crane': [f'{P}_skull'], 'Machoire': [f'{P}_mandible'], 'Vertebre': [f'{P}_cervical_09'],
        'Cote': [f'{P}_rib_L_04'], 'Omoplate': [f'{P}_scapula_L'], 'Bras': [f'{P}_humerus_L'],
        'Bassin': [f'{P}_pelvis'], 'Femur': [f'{P}_femur_L'], 'Tibia': [f'{P}_tibia_L', f'{P}_fibula_L'],
        'Pied': [f'{P}_pes_L'], 'Queue': [f'{P}_caudal_{i:02d}' for i in range(14, 21)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible', f'{P}_cervical_01', f'{P}_cervical_02']},
    closeup_dir=(0.2, -1.0, 0.2),
    views={'34': (0.5, -1.0, 0.25), 'side': (0.0, -1.0, 0.02)},
)


def skull(R, L, rng, add):
    prof = [(-0.02, -0.05), (0.0, 0.12), (0.08, 0.2), (0.16, 0.22), (0.25, 0.16), (0.42, 0.11), (0.56, 0.08),
            (0.6, 0.02), (0.6, -0.06), (0.45, -0.07), (0.25, -0.08), (0.08, -0.1)]
    holes = [(0.14, 0.12, 0.04, 0.05, 0.06),       # orbit
             (0.2, 0.2, 0.05, 0.03, 0.03, False),  # nares on top of the head (single opening)
             (0.3, 0.05, 0.08, 0.03, 0.06),        # antorbital fenestra
             (0.05, 0.03, 0.03, 0.06, 0.06)]       # lateral temporal
    sk = skull_shell(L, R, prof, 0.12, 0.08, 0.6, holes, rnd=0.008)
    sk = union(0.01, sk, ellipsoid(L(-0.015, 0, -0.03), (0.025, 0.025, 0.025), R))
    add('skull', ['SKULL'], sk.displace(0.002, 30, seed=5, octaves=4).detail(0.0025, 60, seed=6), 0.0025,
        weight=1.8, min_tris=5000)
    parts = []
    for sg in (-1, 1):
        parts.append(ribbon([L(0.04, sg * 0.1, -0.1), L(0.3, sg * 0.09, -0.1), L(0.58, sg * 0.06, -0.07)],
                            [0.03, 0.022, 0.03], [0.009, 0.008, 0.01], R[:, 2]))
    parts.append(ellipsoid(L(0.58, 0, -0.07), (0.02, 0.07, 0.025), R))
    add('mandible', ['SKULL'], union(0.006, *parts).displace(0.0015, 40, seed=20), 0.0018, min_tris=1500)
    out = []
    for jaw, z0, dz in (('upper', -0.05, -1), ('lower', -0.07, 1)):
        for side, sg in (('L', 1), ('R', -1)):
            pos = [(L(0.595 - 0.004 * k, sg * (0.012 + 0.012 * k), z0), R[:, 2] * dz, R[:, 0] * 0.15, 0.055)
                   for k in range(5)]                                     # pencil teeth only at the front
            out += tooth_row(f'{P}_tooth_{jaw}_{side}', ['SKULL', 'SKULL_teeth'],
                             lambda b, d, bk, h, s: cone_tooth(b, d, bk, h, s, curve=0.1, r=0.1), pos, rng)
    return out


def neck_extra(kind, i, c, fwd, up, p, sh):
    """Bifid (V-split) neural spines on cervicals and anterior dorsals."""
    if (kind == 'cervical' and i >= 3) or (kind == 'dorsal' and i <= 5):
        cr = p['cr']
        side = np.cross(up, fwd)
        h = p['cr'] * (1.6 if kind == 'cervical' else 2.4)
        prongs = [ribbon([c + up * cr * 1.4, c + up * (cr * 1.4 + h) + side * s * cr * 0.55], [cr * 0.3, cr * 0.18],
                         [cr * 0.12, cr * 0.1], fwd) for s in (-1, 1)]
        return union(cr * 0.15, sh, *prongs)
    return None


def cerv(t, i):
    cr = 0.07 + 0.15 * t ** 1.2
    return 0.5 + 0.35 * np.sin(np.pi * min(t * 1.2, 1)), dict(
        cr=cr, ends='pro', canal=cr * 0.35, sl=0.0, tl=cr * 1.1, tr=cr * 0.22, tu=-cr * 0.4, zyg=cr * 0.45,
        pleuro=0.6, knob=0)


def dors(t, i):
    cr = 0.2
    return 0.3, dict(cr=cr, ends='pro' if i < 6 else 'amphi', canal=0.05, sl=0.0 if i <= 5 else 0.7, tilt=0.0,
                     sw=0.14, st=0.05, tl=0.42, tr=0.06, tu=0.28, zyg=0.07, pleuro=0.55, knob=0.6)


def sacr(t, i):
    return 0.28, dict(cr=0.18, ends='flat', canal=0.05, sl=0.75, tilt=0.0, sw=0.12, st=0.05, tl=0.4, tr=0.08, tu=0.1)


def caud(t, i):
    cr = 0.18 * (1 - 0.95 * t ** 0.7)
    cl = 0.24 * (1 - 0.3 * t) if t < 0.45 else 0.2 * (1 - 0.4 * t)
    return cl, dict(cr=max(cr, 0.012), ends='amphi' if t < 0.45 else 'flat', canal=max(cr, 0.012) * 0.3,
                    sl=max(0.55 * (1 - 1.8 * t), 0.0), tilt=0.35, sw=0.08 * (1 - t) + 0.01, st=max(cr, 0.012) * 0.18,
                    tl=max(0.35 * (1 - 3.5 * t), 0), tr=max(cr, 0.012) * 0.25, tu=0.0,
                    chevron=0.4 * (1 - 1.4 * t) if 1 < i and t < 0.7 else 0)


def caud_extra(kind, i, c, fwd, up, p, sh):
    """Double-beam (skid-shaped) chevrons in the middle of the tail."""
    if kind == 'caudal' and 12 <= i <= 30:
        cr = p['cr']
        skid = ribbon([c - up * cr * 1.3 + fwd * p['cl'] * 0.5, c - up * cr * 1.6, c - up * cr * 1.3 - fwd * p['cl'] * 0.5],
                      [cr * 0.25, cr * 0.3, cr * 0.25], [cr * 0.1, cr * 0.12, cr * 0.1], np.cross(up, fwd))
        return union(cr * 0.1, sh, skid)
    return neck_extra(kind, i, c, fwd, up, p, sh)


def bones():
    rng = np.random.default_rng(71)
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    spine = Curve3([(9.9, 4.9), (9.4, 5.0), (8.0, 4.85), (6.0, 4.4), (4.2, 3.9), (2.6, 3.5), (1.3, 3.45),
                    (0.0, 3.5), (-1.75, 3.6), (-3.0, 3.5), (-5.0, 3.1), (-8.5, 2.3), (-12.0, 1.4), (-15.5, 0.8)])
    series = []
    for kind, n, fn in (('cervical', 15, cerv), ('dorsal', 10, dors), ('sacral', 5, sacr), ('caudal', 80, caud)):
        for i in range(n):
            series.append((kind,) + fn(i / (n - 1), i + 1))
    frames, fused = column(add, spine, series, rng, gap=0.02, s0=0.03, extra=caud_extra, vox=0.075)
    sac = [frames[k] for k in sorted(k for k in frames if k[0] == 'sacral')]
    c0, c1 = sac[0][0], sac[-1][0]
    add('sacrum', ['SPINE', 'SPINE_sacral'], union(0.04, *fused), 0.013, weight=1.1, min_tris=2000)
    hip = (c0 + c1) / 2
    sh = frames[('dorsal', 2)][0]
    ribcage(add, frames, 'dorsal', dict(depth=[(0, 1.5), (0.25, 2.1), (0.55, 2.1), (1, 1.1)],
                                        ymax=[(0, 0.9), (0.4, 1.15), (1, 0.95)], yend=[(0, 0.35), (0.5, 0.6), (1, 0.8)],
                                        back=[(0, 0.2), (1, 0.45)], wid=[(0, 0.08), (0.5, 0.1), (1, 0.08)],
                                        thick=[(0, 0.045), (1, 0.035)]), rng, last=10, vox=0.28)
    A = hip + V([0.0, 0.62, -0.45])
    add('pelvis', ['PELVIS'], pelvis_saurischian(A, 1.9, 0.9, 1.1, 0.25, 1.0, A[1], pub_ang=0.55, isch_ang=0.95, seed=3),
        0.013, weight=1.3, min_tris=3000)
    for side, sg in (('L', 1), ('R', -1)):
        lat = V([0, sg, 0])
        # forelimb (shorter than hind)
        G = sh + V([0.25, 0.75 * sg, -1.15])
        E = G + V([-0.05, 0.03 * sg, -1.0])
        W = E + V([0.1 + 0.08 * sg, -0.02 * sg, -0.8])
        sc = ornitho.scapula(G, sg, 1.3, 0.35, back=0.9, thick=0.05, cor=0.55)
        add(f'scapula_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], sc.displace(0.008, 6, seed=40 + sg), 0.01,
            weight=1.1, min_tris=1800)
        quad_limb(add, side, sg, G + V([0, 0, -0.08]), E, W, 0.11, rng, f'humerus_{side}', f'ulna_{side}',
                  'FRONT_LIMBS', prox='plateau', flat=1.3, crest=[(0.05, 0.35, V([1, 0.3 * sg, 0]), 0.05, 0.05)],
                  olecranon=E + V([-0.15, 0, 0.08]), lo_name2=f'radius_{side}')
        parts = [carpal_block(W + V([0, 0, -0.06]), (0.13, 0.15, 0.05), np.eye(3), n=3, rng=rng)]
        for k in range(5):
            a = np.radians(np.interp(k, [0, 4], [-80, 80])) * sg
            top = W + V([0.06 + 0.08 * np.cos(a), 0.12 * np.sin(a), -0.1])
            bot = top + V([0.03 * np.cos(a), 0.03 * np.sin(a), -0.45 + 0.04 * abs(k - 2)])
            r = 0.05 - 0.004 * abs(k - 2)
            kw = {'claw': {'length': 0.14, 'r': 0.035}} if k == (0 if sg > 0 else 4) else {}
            parts.append(digit([top, (top + bot) / 2, bot, bot + V([0.03 * np.cos(a), 0, -0.04])],
                               [r * 1.2, r * 0.85, r * 1.1, r * 0.8], knuckle=1.0, seed=int(rng.integers(1e4)), **kw))
        add(f'manus_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], union(0.015, *parts), 0.006, weight=1.2,
            min_tris=1800)
        # hindlimb: femur ~1.5 m straight columnar, tibia + fibula, elephant-like pes with sickle claw on toe I
        Ah = A * V([1, sg, 1])
        K = Ah + V([0.12 + 0.1 * sg, 0.02 * sg, -1.55])
        Ank = K + V([-0.1 + 0.08 * sg, -0.02 * sg, -1.02])
        quad_limb(add, side, sg, Ah + lat * 0.18, K, Ank, 0.14, rng, f'femur_{side}', f'tibia_{side}', 'HIND_LIMBS',
                  prox='ball', flat=1.45, crest=[(0.38, 0.5, V([-1, 0.2 * sg, 0]), 0.06, 0.05)],
                  lo_name2=f'fibula_{side}')
        parts = [carpal_block(Ank + V([0, 0, -0.06]), (0.16, 0.14, 0.06), np.eye(3), n=3, rng=rng),
                 ellipsoid(Ank + V([-0.1, 0, -0.06]), (0.12, 0.1, 0.08))]
        for k in range(5):
            a = np.radians(np.interp(k, [0, 4], [22, -38])) * sg
            dd = V([np.cos(a), np.sin(a), 0])
            b0 = Ank + V([0.06, 0, -0.12]) + dd * 0.05
            b1 = b0 + dd * [0.2, 0.24, 0.26, 0.24, 0.2][k] + V([0, 0, -0.14])
            r = [0.05, 0.048, 0.046, 0.042, 0.035][k]
            kw = ({'claw': {'length': [0.26, 0.2, 0.15][k], 'r': r, 'down': V([0, 0.4 * sg, -1])}} if k < 3 else
                  {'hoof': {'radii': (r * 0.6, r * 0.6, r * 0.4)}})
            parts.append(digit([b0, b1, b1 + dd * 0.06 + V([0, 0, -0.04])], [r, r * 0.85, r * 0.7],
                               seed=int(rng.integers(1e4)), **kw))
        add(f'pes_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], union(0.015, *parts), 0.006, weight=1.2,
            min_tris=1800)
    O, _ = spine.at(0.0)
    R, L = local(O + V([0.02, 0, 0]), norm(V([1, 0, -0.45])), (0, 0, 1))
    B.extend(skull(R, L, rng, add))
    return B
