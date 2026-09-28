"""Mosasaure — Mosasaurus hoffmannii (~14 m).

Silhouette: lézard marin géant, corps long et hydrodynamique; crâne long à
dents coniques + 2e rangée sur le palais (ptérygoïdes); 4 nageoires en
palette; queue qui plonge vers le bas (nageoire en croissant).
Pose: swimming mount, gentle lateral S-curve, jaws slightly open.
Units: metres, X forward, Y left, Z up.
"""
import numpy as np
from scipy.interpolate import CubicSpline
from sdf import (V, norm, frame, rot, sphere, ellipsoid, box, tube, ribbon, plate,
                 union, bezier, mirror_y, custom, round_cone)
from anat import vertebra, rib, long_bone, digit, carpal_block, local

P = 'MOSA'
SPEC = dict(
    key='Mosasaurus', budget=110000,
    base='#D8C6A2', dark='#8E7556',
    pieces={
        'Crane': [f'{P}_skull'],
        'Machoire': [f'{P}_mandible_L', f'{P}_mandible_R'],
        'Dent': [f'{P}_tooth_upper_L_06'],
        'Carre': [f'{P}_quadrate_L'],
        'Pterygoide': [f'{P}_pterygoid_L'],
        'Vertebre': [f'{P}_dorsal_10'],
        'Cote': [f'{P}_rib_L_10'],
        'Omoplate': [f'{P}_scapula_L'],
        'Nageoire': [f'{P}_flipper_front_L'],
        'Bassin': [f'{P}_pelvis'],
        'NageoireArriere': [f'{P}_flipper_hind_L'],
        'Queue': [f'{P}_caudal_{i:02d}' for i in range(30, 38)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible_L', f'{P}_mandible_R', f'{P}_quadrate_L', f'{P}_quadrate_R',
                        f'{P}_pterygoid_L', f'{P}_pterygoid_R']},
    closeup_dir=(0.9, -1.0, 0.3),
    views={'34': (0.5, -1.0, 0.35), 'side': (0.0, -1.0, 0.05)},
)


class Curve3:
    def __init__(self, pts):
        pts = np.array(pts, float)
        s = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(pts, axis=0), axis=1))])
        self.len = s[-1]
        self.c = [CubicSpline(s, pts[:, k]) for k in range(3)]

    def at(self, s):
        return V([c(s) for c in self.c]), norm(V([c(s, 1) for c in self.c]))


# spine from the occiput to the tail tip (lateral S-curve, tail bends down)
SPINE = Curve3([(0.0, 0.0, 2.0), (-0.9, -0.08, 1.98), (-2.5, 0.12, 1.95), (-4.2, 0.3, 1.95), (-5.8, 0.12, 1.96),
                (-7.2, -0.25, 1.9), (-8.6, -0.35, 1.8), (-9.9, -0.1, 1.65), (-10.9, 0.15, 1.45),
                (-11.6, 0.25, 1.1), (-12.1, 0.3, 0.72)])


def up_of(fwd):
    side = norm(np.cross(V([0, 0, 1]), fwd))
    return norm(np.cross(fwd, side))


def bones():
    rng = np.random.default_rng(11)
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    # ---------------------------------------------------- vertebral column ---
    series = ([('cervical', 0.1 * (0.8 + 0.2 * k / 6), 0.1 + 0.02 * k / 6) for k in range(7)] +
              [('dorsal', 0.145, 0.125 + 0.015 * np.sin(np.pi * k / 27)) for k in range(28)] +
              [('pygal', 0.14, 0.13 - 0.004 * k) for k in range(6)] +
              [('caudal', 0.13 * (1 - 0.72 * (k / 53) ** 0.9), 0.12 * (1 - 0.8 * (k / 53) ** 1.1)) for k in range(54)])
    total = sum(l for _, l, _ in series) + 0.012 * (len(series) - 1)
    k_len = (SPINE.len - 0.08) / total
    s = 0.06
    counts = {}
    dors = {}
    for idx, (kind, cl, cr) in enumerate(series):
        cl *= k_len
        if idx:
            s += (series[idx - 1][1] * k_len + cl) / 2 + 0.012 * k_len
        c, t = SPINE.at(s)
        fwd = -t
        up = up_of(fwd)
        counts[kind] = counts.get(kind, 0) + 1
        i = counts[kind]
        if kind == 'cervical':
            p = dict(cr=cr, cl=cl, ends='amphi', canal=cr * 0.35, sl=0.12 + 0.02 * i, tilt=0.45, sw=cl * 0.5,
                     st=cr * 0.18, tl=cr * 0.9, tr=cr * 0.25, tu=-cr * 0.3, hypo=cr * 0.5 if i > 1 else 0)
        elif kind == 'dorsal':
            p = dict(cr=cr, cl=cl, ends='amphi', canal=cr * 0.3, sl=0.24, tilt=0.35, sw=cl * 0.55, st=cr * 0.16,
                     tl=cr * 1.25, tr=cr * 0.28, tu=cr * 0.1, zyg=cr * 0.3)
        elif kind == 'pygal':
            p = dict(cr=cr, cl=cl, ends='amphi', canal=cr * 0.3, sl=0.22, tilt=0.4, sw=cl * 0.55, st=cr * 0.16,
                     tl=cr * 1.7, tr=cr * 0.3, tu=-cr * 0.1)
        else:
            t_ = (i - 1) / 53
            bend = np.exp(-((t_ - 0.55) / 0.13) ** 2)   # taller spines + chevrons at the tail bend (fluke)
            p = dict(cr=cr, cl=cl, ends='amphi', canal=cr * 0.28, sl=(0.2 * (1 - t_) + 0.18 * bend) * 1.0,
                     tilt=0.5 - 0.35 * bend, sw=cl * 0.55, st=cr * 0.16, tl=max(cr * 1.5 * (1 - 3 * t_), 0),
                     tr=cr * 0.25, tu=0.0, chevron=(0.28 * (1 - t_) + 0.16 * bend) if i > 1 else 0)
        sh = vertebra(c, fwd, up, p, rng)
        name = f'{kind}_{i:02d}'
        coll = {'cervical': 'SPINE_cervical', 'dorsal': 'SPINE_dorsal', 'pygal': 'SPINE_dorsal',
                'caudal': 'SPINE_tail'}[kind]
        add(name, ['SPINE', coll], sh, max(0.0035, cr * 0.07), min_tris=90 if kind == 'caudal' and i > 30 else 220)
        if kind == 'dorsal':
            dors[i] = (c, fwd, up, p)

    # ------------------------------------------------------------- ribs ---
    for i in range(1, 29):
        t = (i - 1) / 27
        c, fwd, up, p = dors[i]
        side_v = np.cross(up, fwd)
        depth = np.interp(t, [0, 0.15, 0.5, 0.85, 1], [0.45, 0.8, 0.95, 0.72, 0.4])
        ymax = np.interp(t, [0, 0.2, 0.55, 1], [0.35, 0.55, 0.6, 0.42])
        back = 0.08 + 0.18 * t
        for side, sg in (('L', 1), ('R', -1)):
            j = 1 + rng.uniform(-0.025, 0.025)
            tip = c + side_v * sg * p['tl'] * 0.95 + up * p['tu']
            p0 = tip + side_v * sg * 0.03
            p1 = c + side_v * sg * ymax * j - fwd * back * 0.2 + up * 0.0
            p2 = c + side_v * sg * ymax * 1.02 * j - fwd * back * 0.7 - up * depth * 0.6
            p3 = c + side_v * sg * ymax * 0.55 - fwd * back * j - up * depth * j
            pts = bezier(p0, p1, p2, n=10, p3=p3)
            W = list(np.interp(np.linspace(0, 1, 10), [0, 0.3, 1], [0.03, 0.028, 0.016]))
            T = list(np.interp(np.linspace(0, 1, 10), [0, 0.3, 1], [0.024, 0.022, 0.013]))
            # single-headed, dense (pachyostotic) rib
            sh = union(0.01, ribbon(pts, W, T, fwd), sphere(tip, 0.03)).displace(0.004, 18, seed=int(rng.integers(1e4)))
            add(f'rib_{side}_{i:02d}', ['RIBCAGE', f'RIBCAGE_{side}'], sh, 0.004, min_tris=200)

    # ------------------------------------------------------------ skull ---
    O, t0 = SPINE.at(0.0)
    skull_fwd = norm(V([1, 0.1, -0.08]))
    R, L = local(O + V([0.02, 0, 0.02]), skull_fwd, (0, 0, 1))
    add('skull', ['SKULL'], skull(R, L), 0.0065, weight=1.8, min_tris=6000)
    gape = 0.2
    for side, sg in (('L', 1), ('R', -1)):
        add(f'mandible_{side}', ['SKULL'], mandible(R, L, sg, gape), 0.005, weight=1.3, min_tris=1800)
        add(f'quadrate_{side}', ['SKULL'], quadrate(R, L, sg), 0.004, min_tris=900)
        add(f'pterygoid_{side}', ['SKULL'], pterygoid(R, L, sg, rng), 0.0035, min_tris=900)
        for nm, sh in teeth(R, L, sg, side, gape, rng):
            add(nm, ['SKULL', 'SKULL_teeth'], sh, 0.0028, min_tris=80)

    # ------------------------------------------------------ girdles/limbs ---
    cF, fF, uF, _ = dors[3]
    cH, fH, uH, _ = dors[28]
    for side, sg in (('L', 1), ('R', -1)):
        sideF = np.cross(uF, fF) * sg
        sideH = np.cross(uH, fH) * sg
        G = cF - uF * 0.42 + sideF * 0.36
        scap = union(0.03,
                     plate(G + uF * 0.2, np.stack([fF, uF, sideF], 1), [(-0.1, -0.1), (0.14, -0.08), (0.2, 0.2),
                                                                      (0.05, 0.34), (-0.15, 0.2)], 0.035, 0.012),
                     plate(G - uF * 0.06 - sideF * 0.12, np.stack([fF, sideF, uF], 1),
                           [(-0.14, 0.12), (0.25, 0.1), (0.42, -0.15), (0.3, -0.35), (0.0, -0.32), (-0.12, -0.1)],
                           0.03, 0.01),
                     ellipsoid(G, (0.08, 0.07, 0.07))).sub(sphere(G + sideF * 0.07 - uF * 0.03, 0.06), 0.01)
        add(f'scapula_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], scap.displace(0.004, 12, seed=40 + sg), 0.005,
            min_tris=1200)
        add(f'flipper_front_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'],
            flipper(G + sideF * 0.05 - uF * 0.03, fF, uF, sideF, 1.35, rng), 0.0045, weight=1.3, min_tris=3000)
        A = cH - uH * 0.35 + sideH * 0.25
        add(f'flipper_hind_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'],
            flipper(A + sideH * 0.04, fH, uH, sideH, 1.1, rng, hind=True), 0.0042, weight=1.2, min_tris=2500)
    # pelvis: small, free-floating in muscle: rod-like ilium + plate pubis/ischium per side
    parts = []
    for sg in (-1, 1):
        sideH = np.cross(uH, fH) * sg
        A = cH - uH * 0.35 + sideH * 0.25
        parts += [tube([A, A + uH * 0.3 - fH * 0.12 - sideH * 0.08], [0.04, 0.025]),
                  plate(A - uH * 0.05, np.stack([fH, -uH, sideH], 1), [(0.0, -0.02), (0.22, 0.02), (0.3, 0.18),
                                                                       (0.12, 0.24), (0.02, 0.1)], 0.025, 0.01),
                  plate(A - uH * 0.05, np.stack([-fH, -uH, sideH], 1), [(0.0, -0.02), (0.2, 0.05), (0.26, 0.2),
                                                                        (0.08, 0.22), (0.0, 0.1)], 0.025, 0.01),
                  ellipsoid(A, (0.06, 0.05, 0.05))]
    add('pelvis', ['PELVIS'], union(0.02, *parts).displace(0.004, 14, seed=100), 0.0045, min_tris=1200)
    return B


# ----------------------------------------------------------------- skull ---
SK = 1.6


def skull(R, L):
    # side profile (u along skull, v up), mosasaur: long, low, conical snout
    prof = [(-0.05, -0.02), (-0.04, 0.2), (0.12, 0.3), (0.35, 0.3), (0.62, 0.25), (0.95, 0.19), (1.25, 0.13),
            (1.5, 0.08), (1.6, 0.02), (1.58, -0.07), (1.35, -0.1), (0.9, -0.12), (0.5, -0.12), (0.2, -0.1)]
    Rp = R @ np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1)
    core = plate(L(0), Rp, prof, t_center=0.21, t_edge=0.06, falloff=0.16, rnd=0.02)
    env = custom(lambda P: np.abs(((P - L(0)) @ R)[:, 1]) - (0.22 - 0.13 * np.clip(((P - L(0)) @ R)[:, 0] / SK, 0, 1)),
                 core.lo, core.hi)
    core = core.inter(env, 0.03)
    parts = [core]
    for sg in (-1, 1):
        parts.append(tube([L(1.52, sg * 0.05, -0.05), L(0.9, sg * 0.1, -0.08), L(0.42, sg * 0.15, -0.08)],
                          [0.04, 0.05, 0.04]))                                  # maxilla tooth row
        parts.append(tube([L(0.55, sg * 0.17, 0.05), L(0.25, sg * 0.21, 0.02), L(0.0, sg * 0.2, 0.0)],
                          [0.03, 0.026, 0.035]))                               # jugal / temporal bar
        parts.append(tube([L(0.3, sg * 0.1, 0.27), L(-0.02, sg * 0.17, 0.15)], [0.03, 0.035]))  # supratemporal bar
    parts.append(ellipsoid(L(-0.04, 0, 0.03), (0.06, 0.07, 0.07), R))        # occipital condyle
    sk = union(0.025, *parts)
    for sg in (-1, 1):
        for c, r_, k in [((0.5, sg * 0.18, 0.11), (0.13, 0.1, 0.1), 0.02),     # orbit
                         ((0.17, sg * 0.21, 0.07), (0.12, 0.08, 0.1), 0.02),   # lateral temporal opening
                         ((0.17, sg * 0.1, 0.26), (0.1, 0.06, 0.08), 0.015),   # upper temporal fenestra
                         ((1.0, sg * 0.06, 0.14), (0.3, 0.03, 0.06), 0.01)]:   # narial slit
            sk = sk.sub(ellipsoid(L(*c), r_, R), k)
    sk = sk.sub(ellipsoid(L(0.7, 0, -0.14), (0.6, 0.1, 0.07), R), 0.02)       # palate groove (pterygoids sit here)
    return sk.displace(0.004, 16, seed=5, octaves=4)


def jaw_frame(R, L, sg, gape):
    """Mandible hinge at the quadrate, rotated down by `gape` radians."""
    hinge = L(-0.02, sg * 0.2, -0.2)
    Rj = R @ rot((0, 1, 0), gape)
    return hinge, (lambda u, v=0.0, w=0.0: hinge + Rj @ V([u, v, w])), Rj


def mandible(R, L, sg, gape):
    hinge, J, Rj = jaw_frame(R, L, sg, gape)
    # ramus runs from hinge to the chin, converging to the midline
    pts = [J(0.0, 0, 0), J(0.35, -sg * 0.02, 0.02), J(0.8, -sg * 0.07, 0.04), J(1.25, -sg * 0.12, 0.05),
           J(1.6, -sg * 0.16, 0.05)]
    ramus = ribbon(pts, [0.09, 0.1, 0.075, 0.06, 0.045], [0.035, 0.04, 0.032, 0.028, 0.025], Rj[:, 2])
    cor = ribbon([J(0.35, -sg * 0.02, 0.05), J(0.42, -sg * 0.02, 0.18)], [0.07, 0.04], [0.02, 0.015], Rj[:, 0])
    art = ellipsoid(J(-0.04, 0, 0.0), (0.07, 0.05, 0.05), Rj)
    m = union(0.02, ramus, cor, art)
    m = m.sub(ellipsoid(J(0.55, -sg * 0.03, 0.02), (0.08, 0.05, 0.025), Rj), 0.006)   # intramandibular joint notch
    return m.displace(0.003, 20, seed=20 + sg)


def cone_tooth(base, tip, back, r, seed):
    """Conical, slightly recurved tooth with two carinae and facets."""
    mid = (base + tip) / 2 + back * np.linalg.norm(tip - base) * 0.12
    t = tube([base, mid, tip], [r, r * 0.7, r * 0.08])
    ax = norm(tip - base)
    Rt = frame(ax, back)
    for sgn in (-1, 1):
        t = union(r * 0.1, t, ribbon([base + Rt[:, 1] * sgn * r * 0.75, mid + Rt[:, 1] * sgn * r * 0.5, tip],
                                     [r * 0.2, r * 0.15, r * 0.03], [r * 0.08, r * 0.06, r * 0.02], Rt[:, 2]))
    return t.displace(r * 0.03, 3 / r, seed=seed)


def teeth(R, L, sg, side, gape, rng):
    out = []
    # upper: premaxilla + maxilla, 13 per side
    for k in range(13):
        u = 1.52 - 0.085 * k
        yy = sg * (0.05 + 0.1 * (1 - u / 1.55))
        h = 0.07 + 0.035 * np.sin(np.pi * (k + 1) / 14)
        base = L(u, yy, -0.08)
        out.append((f'tooth_upper_{side}_{k + 1:02d}',
                    cone_tooth(base, base + R @ V([-0.012, 0, -h]), -R[:, 0], h * 0.23, int(rng.integers(1e4)))))
    hinge, J, Rj = jaw_frame(R, L, sg, gape)
    for k in range(14):
        u = 1.52 - 0.08 * k
        vv = -sg * (0.16 * u / 1.6)
        h = 0.065 + 0.035 * np.sin(np.pi * (k + 1) / 15)
        base = J(u, vv, 0.06)
        out.append((f'tooth_lower_{side}_{k + 1:02d}',
                    cone_tooth(base, base + Rj @ V([-0.012, 0, h]), -Rj[:, 0], h * 0.23, int(rng.integers(1e4)))))
    return out


def quadrate(R, L, sg):
    """Mosasaur quadrate: big ear-shaped bone with a round tympanic cavity
    and a hooked suprastapedial process."""
    c = L(-0.02, sg * 0.2, -0.08)
    Rq = R @ np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, 1, 0])], 1)
    ear = plate(c, Rq, [(-0.06, -0.12), (0.05, -0.12), (0.09, 0.0), (0.06, 0.1), (-0.02, 0.13), (-0.09, 0.08),
                        (-0.1, -0.02)], 0.03, 0.012, rnd=0.01)
    hook = ribbon([L(-0.08, sg * 0.2, 0.02), L(-0.12, sg * 0.2, -0.02), L(-0.1, sg * 0.2, -0.07)], [0.025, 0.02, 0.012],
                  [0.015, 0.012, 0.008], R[:, 0])
    cond = ellipsoid(L(-0.02, sg * 0.2, -0.19), (0.05, 0.045, 0.035), R)
    q = union(0.015, ear, hook, cond).sub(sphere(L(-0.02, sg * 0.235, -0.07), 0.055), 0.01)
    return q.displace(0.002, 40, seed=60 + sg)


def pterygoid(R, L, sg, rng):
    """Palatal bone carrying a second row of small conical teeth."""
    pts = [L(0.25, sg * 0.05, -0.09), L(0.55, sg * 0.07, -0.1), L(0.85, sg * 0.06, -0.1)]
    b = ribbon(pts, [0.035, 0.03, 0.022], [0.018, 0.016, 0.012], R[:, 1])
    b = union(0.01, b, ribbon([L(0.3, sg * 0.05, -0.09), L(0.12, sg * 0.14, -0.14)], [0.03, 0.02], [0.012, 0.01],
                              R[:, 2]))
    parts = [b]
    for k in range(8):
        u = 0.35 + 0.06 * k
        base = L(u, sg * 0.065, -0.11)
        h = 0.035 + 0.008 * np.sin(np.pi * k / 7)
        parts.append(cone_tooth(base, base + R @ V([-0.008, 0, -h]), -R[:, 0], h * 0.25, int(rng.integers(1e4))))
    return union(0.004, *parts)


def flipper(G, fwd, up, side, length, rng, hind=False):
    """Paddle: short hourglass humerus/femur, blocky radius-ulna, pebble
    carpals, 5 digits of many flattened phalanges forming a long oar."""
    ax = norm(side * 0.55 - fwd * 0.6 - up * 0.55)          # points back, out and down
    wd = norm(np.cross(ax, up))                              # paddle width direction (in the paddle plane)
    wd = wd if wd @ fwd > 0 else -wd
    nrm = np.cross(ax, wd)
    parts = []
    hl = length * 0.2
    p1 = G + ax * hl
    parts.append(ribbon([G, G + ax * hl * 0.5, p1], [0.1 * length, 0.06 * length, 0.11 * length],
                        [0.06 * length, 0.045 * length, 0.05 * length], wd))
    parts.append(ellipsoid(G, (0.07 * length, 0.08 * length, 0.07 * length), frame(ax, wd)))
    # radius / ulna as two short blocks
    for s in (-1, 1):
        a = p1 + wd * s * 0.045 * length + ax * 0.02
        parts.append(ribbon([a, a + ax * length * 0.12], [0.045 * length, 0.05 * length],
                            [0.03 * length, 0.03 * length], wd))
    # carpals: pebbles
    cz = p1 + ax * length * 0.19
    for k in range(6):
        off = wd * (k % 3 - 1) * 0.05 * length + ax * (k // 3) * 0.045 * length
        parts.append(ellipsoid(cz + off, (0.025 * length, 0.028 * length, 0.016 * length),
                               frame(ax, wd) @ rot((0, 0, 1), rng.uniform(-0.3, 0.3))))
    # digits
    spread = [-0.3, -0.12, 0.02, 0.15, 0.3]
    nph = [6, 9, 10, 8, 5] if not hind else [5, 7, 8, 7, 4]
    for d in range(5):
        dd = norm(ax + wd * spread[d])
        start = cz + ax * 0.09 * length + wd * (d - 2) * 0.045 * length
        seg = 0.055 * length * (1.0 if d in (1, 2, 3) else 0.85)
        pts = [start]
        for k in range(nph[d]):
            bend = wd * 0.012 * k * (1 if d > 2 else -1) * length
            pts.append(pts[-1] + dd * seg * (1 - 0.05 * k) + bend * 0.2)
        rad = list(np.linspace(0.02 * length, 0.008 * length, len(pts)))
        ph = digit(pts, rad, knuckle=1.35, seed=int(rng.integers(1e4)))
        # flatten phalanges into the paddle plane
        c0 = np.mean(pts, axis=0)
        S = np.eye(3) + (1 / 0.6 - 1) * np.outer(nrm, nrm)
        parts.append(custom(lambda P, ph=ph, c0=c0, S=S: ph((P - c0) @ S.T + c0) * 0.6, ph.lo, ph.hi))
    return union(0.004 * length, *parts).displace(0.003, 20, seed=int(rng.integers(1e4)))
