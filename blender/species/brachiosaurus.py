"""Brachiosaure — Brachiosaurus altithorax (22 m).

Silhouette: pattes avant plus longues que les arrière (dos en pente), cou dressé
vers le haut comme une girafe, crâne avec dôme nasal en arche.
Units: metres, X forward, Y left, Z up, ground at z=0.
"""
import numpy as np
from scipy.interpolate import CubicSpline
from sdf import (V, norm, frame, rot, sphere, ellipsoid, box, tube, ribbon, plate,
                 union, bezier, mirror_y, custom, round_cone)
from anat import vertebra, rib, long_bone, digit, carpal_block, local

P = 'BRAC'
SPEC = dict(
    key='Brachiosaurus', budget=130000,
    base='#DCCAA6', dark='#94795A',
    pieces={
        'Crane': [f'{P}_skull'],
        'Machoire': [f'{P}_mandible'],
        'Dent': [f'{P}_tooth_upper_L_02'],
        'Vertebre': [f'{P}_cervical_08'],
        'Cote': [f'{P}_rib_L_04'],
        'Omoplate': [f'{P}_scapula_L'],
        'Bras': [f'{P}_humerus_L'],
        'Bassin': [f'{P}_pelvis'],
        'Femur': [f'{P}_femur_L'],
        'Tibia': [f'{P}_tibia_L', f'{P}_fibula_L'],
        'Pied': [f'{P}_pes_L'],
        'Queue': [f'{P}_caudal_{i:02d}' for i in range(3, 10)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible', f'{P}_cervical_01', f'{P}_cervical_02']},
    closeup_dir=(0.8, -1.0, 0.1),
    views={'34': (0.6, -1.0, 0.15), 'side': (0.0, -1.0, 0.02)},
)


def lerp_tab(tab, t):
    tab = np.array(tab)
    return float(np.interp(t, tab[:, 0], tab[:, 1]))


class Curve:
    """Arc-length parametrised spline through control points (x, z)."""

    def __init__(self, pts):
        pts = np.array(pts, float)
        s = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(pts, axis=0), axis=1))])
        self.len = s[-1]
        self.x = CubicSpline(s, pts[:, 0])
        self.z = CubicSpline(s, pts[:, 1])

    def at(self, s):
        p = V([self.x(s), 0.0, self.z(s)])
        t = norm(V([self.x(s, 1), 0.0, self.z(s, 1)]))
        return p, t


# spine from the head backward to the tail tip
NECK = Curve([(7.0, 13.2), (6.62, 12.6), (5.85, 10.6), (4.85, 8.3), (3.75, 6.4), (2.95, 5.45)])
TRUNK = Curve([(2.95, 5.45), (2.3, 5.2), (1.2, 4.8), (0.1, 4.45), (-0.8, 4.25)])
TAIL = Curve([(-2.35, 4.02), (-3.4, 3.95), (-4.8, 3.6), (-6.4, 2.9), (-8.0, 2.15), (-9.4, 1.7)])


def place(curve, lengths, gap, s0=0.0):
    """Distribute vertebrae along the curve; lengths are rescaled so the
    series exactly fills the curve. Returns [(centre, forward, length)]."""
    lengths = list(np.array(lengths) * (curve.len - s0 - gap * (len(lengths) - 1)) / sum(lengths))
    out = []
    s = s0
    for i, l in enumerate(lengths):
        s += l / 2 if i == 0 else (lengths[i - 1] + l) / 2 + gap
        p, t = curve.at(min(s, curve.len))
        out.append((p, -t, l))  # facing toward the head
    return out


def bones():
    rng = np.random.default_rng(7)
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    def up_of(fwd):
        up = np.cross(fwd, V([0, 1, 0]))
        return up if up[2] > 0 else -up

    # ------------------------------------------------------------ neck ---
    nlen = [0.16, 0.42, 0.62, 0.74, 0.84, 0.92, 0.98, 1.02, 1.02, 0.98, 0.9, 0.78, 0.62]
    for i, (c, fwd, cl) in enumerate(place(NECK, nlen, 0.035, s0=0.04), start=1):
        t = (i - 1) / 12
        cr = 0.075 + 0.14 * t ** 1.3
        p = dict(cr=cr, cl=cl, ends='pro', canal=cr * 0.35, sl=0.05 + 0.25 * t ** 2, tilt=0.1, sw=cl * 0.25,
                 st=cr * 0.2, tl=cr * 1.1, tr=cr * 0.22, tu=-cr * 0.4, tb=cl * 0.05, zyg=cr * 0.35,
                 pleuro=0.55, knob=0.6)
        if i == 1:
            p.update(cl=0.12, sl=0, tl=0.1, pleuro=0, ends='flat')
        up = up_of(fwd)
        sh = vertebra(c, fwd, up, p, rng)
        R, L = local(c, fwd, up)
        if i >= 3:  # long cervical ribs running back under the next vertebrae
            for sg in (-1, 1):
                a = L(cl * 0.3, sg * cr * 0.9, -cr * 0.8)
                b = L(-cl * 0.5, sg * cr * 1.05, -cr * 1.1)
                e = L(-cl * 1.55, sg * cr * 0.8, -cr * 1.05)
                sh = union(cr * 0.1, sh, ribbon([a, b, e], [cr * 0.25, cr * 0.13, cr * 0.04],
                                                [cr * 0.12, cr * 0.08, cr * 0.03], up))
        # lamina ridges on the arch (sauropod laminae)
        for sg in (-1, 1):
            sh = union(cr * 0.08, sh, ribbon([L(cl * 0.45, sg * cr * 0.45, cr * 1.1), L(0, sg * cr * 0.7, cr * 0.95),
                                              L(-cl * 0.45, sg * cr * 0.45, cr * 1.15)],
                                             [cr * 0.12, cr * 0.1, cr * 0.12], [cr * 0.06] * 3, up))
        add(f'cervical_{i:02d}', ['SPINE', 'SPINE_cervical'], sh, max(0.006, cr * 0.075),
            weight=1.2, min_tris=400)

    # ---------------------------------------------------------- dorsals ---
    dlen = list(np.linspace(0.36, 0.3, 12))
    dors = {}
    for i, (c, fwd, cl) in enumerate(place(TRUNK, dlen, 0.03, s0=0.0), start=1):
        t = (i - 1) / 11
        cr = 0.22 + 0.04 * t
        p = dict(cr=cr, cl=cl, ends='pro' if i < 7 else 'amphi', canal=0.06, sl=0.55 + 0.35 * t, tilt=0.05 + 0.1 * t,
                 sw=0.16, st=0.07, tl=0.55 - 0.1 * t, tr=0.07, tu=0.25, tb=0.02, pleuro=0.5, zyg=0.08)
        up = up_of(fwd)
        dors[i] = (c, fwd, up, p)
        add(f'dorsal_{i:02d}', ['SPINE', 'SPINE_dorsal'], vertebra(c, fwd, up, p, rng), 0.012, min_tris=500)

    # ----------------------------------------------------------- sacrum ---
    sac = []
    for k in range(5):
        c = V([-0.98 - 0.3 * k, 0, 4.22 - 0.04 * k])
        sac.append(vertebra(c, (1, 0, 0), (0, 0, 1), dict(cr=0.2, cl=0.28, canal=0.05, sl=0.75, tilt=0.0, sw=0.28,
                                                            st=0.08, tl=0.0), rng))
        for sg in (-1, 1):
            sac.append(ribbon([c + V([0, sg * 0.15, 0.1]), c + V([0, sg * 0.45, 0.2]), c + V([0.02, sg * 0.62, 0.15])],
                              [0.1, 0.08, 0.1], [0.05, 0.04, 0.05], (1, 0, 0)))
    add('sacrum', ['SPINE', 'SPINE_sacral'], union(0.05, *sac).displace(0.01, 5, seed=3), 0.014, weight=1.1,
        min_tris=2000)

    # ------------------------------------------------------------- tail ---
    n_caud = 38
    clen = [0.27 * (1 - 0.55 * ((i) / (n_caud - 1)) ** 0.8) for i in range(n_caud)]
    for i, (c, fwd, cl) in enumerate(place(TAIL, clen, 0.02, s0=0.02), start=1):
        t = (i - 1) / (n_caud - 1)
        cr = 0.21 * (1 - 0.86 * t ** 0.85)
        p = dict(cr=cr, cl=cl, ends='amphi' if i < 20 else 'flat', canal=cr * 0.3,
                 sl=max(0.5 * (1 - 1.5 * t), 0.0), tilt=0.35, sw=cl * 0.35, st=cr * 0.2,
                 tl=max(0.35 * (1 - 2.4 * t), 0.0), tr=cr * 0.25, tu=0.0,
                 chevron=0.45 * (1 - t) ** 1.2 if 2 <= i <= 30 else 0.0)
        up = up_of(fwd)
        add(f'caudal_{i:02d}', ['SPINE', 'SPINE_tail'], vertebra(c, fwd, up, p, rng),
            max(0.004, cr * 0.08), min_tris=80 if i > 20 else 200)

    # ----------------------------------------------------------- ribcage ---
    for i in range(1, 13):
        t = (i - 1) / 11
        c, fwd, up, p = dors[i]
        depth = lerp_tab([(0, 1.9), (0.2, 2.6), (0.45, 2.75), (0.75, 2.2), (1, 1.2)], t)
        ymax = lerp_tab([(0, 0.95), (0.25, 1.35), (0.55, 1.45), (1, 1.1)], t)
        yend = lerp_tab([(0, 0.35), (0.5, 0.75), (1, 0.95)], t)
        back = 0.15 + 0.45 * t
        wid = 0.1 + 0.03 * np.sin(np.pi * t)
        for side, sg in (('L', 1), ('R', -1)):
            j = 1 + rng.uniform(-0.025, 0.025)
            tip = c + V([-0.02, sg * p['tl'] * 0.95, 0.12 + p['tu']])
            head = c + V([0.02, sg * 0.22, 0.05])
            p0 = c + V([-0.02, sg * p['tl'] * 0.85, p['tu'] * 0.6])
            c1 = c + V([-back * 0.1, sg * ymax * 0.95 * j, -0.1])
            c2 = c + V([-back * 0.7, sg * ymax * 1.05 * j, -depth * 0.55])
            p3 = c + V([-back * j, sg * yend * j, -depth * j])
            pts = bezier(p0, c1, c2, n=12, p3=p3)
            W = list(np.interp(np.linspace(0, 1, 12), [0, 0.25, 0.7, 1], [wid * 0.8, wid * 1.1, wid, wid * 0.55]))
            T = list(np.interp(np.linspace(0, 1, 12), [0, 0.4, 1], [0.055, 0.045, 0.025]))
            add(f'rib_{side}_{i:02d}', ['RIBCAGE', f'RIBCAGE_{side}'],
                rib(head, tip, pts, W, T, wdir=(1, 0, 0.3), seed=int(rng.integers(1e4))), 0.013, min_tris=300)

    # ------------------------------------------------------------- skull ---
    O = NECK.at(0.0)[0] + V([0.03, 0, 0.02])
    add('skull', ['SKULL'], skull(O), 0.006, weight=1.8, min_tris=5000)
    add('mandible', ['SKULL'], mandible(O), 0.005, weight=1.3, min_tris=1500)
    for (nm, sh) in teeth(O, rng):
        add(nm, ['SKULL', 'SKULL_teeth'], sh, 0.0022, min_tris=70)

    # ------------------------------------------------------------- limbs ---
    for side, sg, dxf, dxh in (('L', 1, 0.25, -0.2), ('R', -1, -0.18, 0.22)):
        front(add, side, sg, dxf, rng)
        hind(add, side, sg, dxh, rng)
    add('pelvis', ['PELVIS'], pelvis(), 0.014, weight=1.3, min_tris=3000)
    return B


# ------------------------------------------------------------------ skull ---
def skull_frame(O):
    d = norm(V([1, 0, -0.62]))           # snout forward-down
    up = norm(np.cross(d, V([0, -1, 0])) * -1)
    up = up if up[2] > 0 else -up
    return local(O, d, up)


def skull(O):
    R, L = skull_frame(O)
    prof = [(0.0, -0.04), (0.0, 0.14), (0.1, 0.27), (0.2, 0.37), (0.29, 0.47), (0.36, 0.47), (0.43, 0.38),
            (0.52, 0.24), (0.66, 0.14), (0.77, 0.08), (0.8, -0.02), (0.78, -0.09), (0.6, -0.1),
            (0.38, -0.09), (0.2, -0.1), (0.08, -0.14)]
    Rp = R @ np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1)
    core = plate(O, Rp, prof, t_center=0.15, t_edge=0.06, falloff=0.1, rnd=0.02)
    parts = [core]
    for sg in (-1, 1):
        parts.append(tube([L(0.62, sg * 0.1, -0.05), L(0.4, sg * 0.13, -0.05), L(0.14, sg * 0.14, -0.08)],
                          [0.035, 0.03, 0.035]))                                     # maxilla / jugal bar
        parts.append(ellipsoid(L(0.7, sg * 0.08, 0.0), (0.12, 0.07, 0.07), R))       # broad snout
        parts.append(tube([L(0.06, sg * 0.1, 0.12), L(0.08, sg * 0.14, -0.12)], [0.03, 0.035]))  # quadrate
        parts.append(tube([L(0.24, sg * 0.1, 0.28), L(0.33, sg * 0.07, 0.43)], [0.035, 0.03]))   # nasal arch strut
    sk = union(0.03, *parts)
    for sg in (-1, 1):
        for c, r_, k in [((0.33, sg * 0.1, 0.36), (0.11, 0.09, 0.08), 0.02),    # giant nares on the arch
                         ((0.17, sg * 0.16, 0.19), (0.065, 0.1, 0.07), 0.015),  # orbit
                         ((0.47, sg * 0.15, 0.1), (0.08, 0.1, 0.045), 0.015),   # antorbital fenestra
                         ((0.08, sg * 0.16, 0.04), (0.035, 0.1, 0.075), 0.01),  # lateral temporal
                         ((0.09, sg * 0.05, 0.22), (0.04, 0.04, 0.06), 0.01),   # supratemporal
                         ((0.58, sg * 0.12, 0.16), (0.04, 0.05, 0.03), 0.01)]:  # subnarial foramen
            sk = sk.sub(ellipsoid(L(*c), r_, R), k)
    sk = sk.sub(ellipsoid(L(0.45, 0, -0.14), (0.3, 0.1, 0.06), R), 0.02)   # palate vault
    sk = sk.sub(sphere(L(-0.01, 0, 0.0), 0.03), 0.005)                    # foramen magnum
    sk = union(0.01, sk, sphere(L(-0.015, 0, -0.035), 0.035))              # occipital condyle
    return sk.displace(0.004, 18, seed=5, octaves=4)


def mandible(O):
    R, L = skull_frame(O)
    parts = []
    for sg in (-1, 1):
        parts.append(ribbon([L(0.08, sg * 0.14, -0.14), L(0.35, sg * 0.13, -0.17), L(0.62, sg * 0.1, -0.16),
                             L(0.77, sg * 0.05, -0.13)], [0.05, 0.045, 0.05, 0.055], [0.02, 0.018, 0.02, 0.022],
                            R[:, 2]))
        parts.append(ellipsoid(L(0.08, sg * 0.14, -0.13), (0.04, 0.03, 0.035), R))    # articular
        parts.append(ellipsoid(L(0.26, sg * 0.13, -0.12), (0.06, 0.018, 0.05), R))    # coronoid
    parts.append(ellipsoid(L(0.78, 0, -0.13), (0.04, 0.07, 0.04), R))                  # symphysis
    m = union(0.02, *parts)
    for sg in (-1, 1):
        m = m.sub(ellipsoid(L(0.28, sg * 0.14, -0.17), (0.06, 0.03, 0.02), R), 0.008)  # mandibular fenestra
    return m.displace(0.003, 25, seed=8)


def spatula_tooth(root, tip, lat_dir, w, seed):
    """Spoon-shaped (spatulate) sauropod tooth: cylindrical root, flattened
    crown with a concave lingual face."""
    ax = norm(tip - root)
    crown_c = root + (tip - root) * 0.62
    R = frame(ax, lat_dir)
    parts = [tube([root, root + (tip - root) * 0.45], [w * 0.38, w * 0.42]),
             ellipsoid(crown_c, (np.linalg.norm(tip - root) * 0.42, w * 0.55, w * 0.34), R)]
    t = union(w * 0.2, *parts)
    t = t.sub(ellipsoid(crown_c + R[:, 2] * w * 0.42, (np.linalg.norm(tip - root) * 0.3, w * 0.4, w * 0.2), R), w * 0.05)
    return t.displace(w * 0.02, 40, seed=seed)


def teeth(O, rng):
    R, L = skull_frame(O)
    out = []
    for jaw, zb, zt in (('upper', -0.08, -0.16), ('lower', -0.12, -0.04)):
        for sg, side in ((1, 'L'), (-1, 'R')):
            for k in range(6):
                u = 0.76 - 0.045 * k
                yy = sg * (0.03 + 0.017 * k)
                root = L(u, yy, zb)
                tip = L(u + 0.012, yy * 1.02, zt) + (rng.normal(size=3) * 0.004)
                out.append((f'tooth_{jaw}_{side}_{k + 1:02d}',
                            spatula_tooth(root, tip, R[:, 1], 0.026 - 0.0015 * k, int(rng.integers(1e4)))))
    return out


# ------------------------------------------------------------------ limbs ---
def front(add, side, sg, dx, rng):
    G = V([2.35, 0.92 * sg, 4.35])               # glenoid
    E = V([2.3 + dx * 0.3, 0.86 * sg, 2.28])     # elbow (humerus ~2.1 m)
    W = V([2.4 + dx, 0.8 * sg, 1.0])             # wrist
    lat = V([0, sg, 0])
    # scapula: long curved blade up-back over the ribs + fused oval coracoid
    blade = [G + V([0.05, 0.02 * sg, 0.15]), G + V([-0.35, -0.02 * sg, 0.62]), G + V([-0.85, -0.12 * sg, 1.02]),
             G + V([-1.35, -0.28 * sg, 1.25])]
    sc = ribbon(blade, [0.2, 0.15, 0.2, 0.34], [0.07, 0.05, 0.045, 0.03], lambda t: V([1, 0, 1]))
    acr = ribbon([G + V([0.2, 0.05 * sg, 0.25]), G + V([0.05, 0.08 * sg, 0.55])], [0.12, 0.06], [0.04, 0.03],
                 V([1, 0, 0]))
    cor = ellipsoid(G + V([0.35, -0.05 * sg, -0.05]), (0.3, 0.06, 0.26), frame(V([1, 0, 0.4]), V([0, 0, 1])))
    glen = ellipsoid(G, (0.18, 0.14, 0.14))
    scap = union(0.06, sc, acr, cor, glen).sub(sphere(G + V([-0.02, 0, -0.2]), 0.15), 0.02)
    add(f'scapula_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], scap.displace(0.008, 6, seed=40 + sg), 0.012,
        weight=1.1, min_tris=1800)
    # humerus: very long straight column, flared ends, discreet deltopectoral crest
    hum = long_bone(G + V([0, 0, -0.08]), E, 0.3, 0.13, 0.28, lat, prox='plateau', dist='condyles', flat=1.35,
                    crests=[(0.08, 0.38, V([1, 0.3 * sg, 0]), 0.05, 0.05)], cond_sep=0.1, seed=50 + sg)
    add(f'humerus_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], hum, 0.011, weight=1.1, min_tris=1500)
    ul = long_bone(E + V([-0.08, 0.02 * sg, 0.02]), W + V([-0.05, 0, 0.04]), 0.2, 0.085, 0.13, lat, prox='cup',
                   dist='flat', seed=60 + sg, extra=[sphere(E + V([-0.18, 0, 0.1]), 0.1)])
    add(f'ulna_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], ul, 0.01, min_tris=900)
    ra = long_bone(E + V([0.1, 0.02 * sg, -0.06]), W + V([0.08, -0.04 * sg, 0.04]), 0.13, 0.07, 0.13, lat,
                   prox='cup', dist='flat', seed=70 + sg)
    add(f'radius_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], ra, 0.009, min_tris=800)
    add(f'manus_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], manus(W, sg, rng), 0.008, weight=1.2,
        min_tris=2000)


def manus(W, sg, rng):
    """Sauropod hand: 5 tall vertical metacarpals in a U-shaped colonnade,
    almost no phalanges, one thumb claw."""
    parts = [carpal_block(W + V([0.02, 0, -0.08]), (0.18, 0.2, 0.07), np.eye(3), n=4, rng=rng)]
    for i in range(5):
        a = np.radians(np.interp(i, [0, 4], [-80, 80])) * sg
        top = W + V([0.08 + 0.1 * np.cos(a), 0.15 * np.sin(a), -0.14])
        bot = top + V([0.05 * np.cos(a), 0.04 * np.sin(a), -0.82 + 0.06 * abs(i - 2)])
        r = 0.055 - 0.004 * abs(i - 2)
        parts.append(digit([top, (top + bot) / 2, bot], [r * 1.25, r * 0.85, r * 1.2], knuckle=1.0,
                           seed=int(rng.integers(1e4))))
        tip = bot + V([0.06 * np.cos(a), 0.04 * np.sin(a), -0.06])
        if i == (0 if sg > 0 else 4) or i == (4 if sg < 0 else 0):
            parts.append(digit([bot, tip], [r, r * 0.8], claw={'length': 0.2, 'r': 0.04, 'down': (0, 0, -1)},
                               seed=int(rng.integers(1e4))))
        else:
            parts.append(ellipsoid(bot + V([0.02 * np.cos(a), 0, -0.03]), (r * 0.9, r * 0.9, r * 0.5)))
    return union(0.02, *parts)


def hind(add, side, sg, dx, rng):
    A = V([-1.55, 0.72 * sg, 3.55])              # acetabulum
    K = V([-1.35 + dx * 0.3, 0.74 * sg, 1.62])   # knee (femur ~2 m)
    Ank = V([-1.5 + dx, 0.72 * sg, 0.42])        # ankle
    lat = V([0, sg, 0])
    fem = long_bone(A + V([0, 0.2 * sg, -0.05]), K, 0.26, 0.15, 0.26, lat, prox='ball', dist='condyles',
                    head_off=0.2, head_r=0.18, flat=1.5, cond_sep=0.11, seed=80 + sg,
                    extra=[ellipsoid(A + V([0.0, 0.35 * sg, -0.05]), (0.1, 0.07, 0.12)),             # gr. trochanter
                           ellipsoid(A + V([-0.1, 0.2 * sg, -0.7]), (0.05, 0.08, 0.18))])            # 4th trochanter
    add(f'femur_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], fem, 0.011, weight=1.1, min_tris=1500)
    tib = long_bone(K + V([0, -0.02 * sg, -0.1]), Ank, 0.22, 0.1, 0.16, lat, prox='plateau', dist='flat',
                    crests=[(0.03, 0.3, V([1, 0.3 * sg, 0]), 0.06, 0.05)], seed=90 + sg)
    add(f'tibia_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], tib, 0.01, min_tris=1100)
    fib = long_bone(K + V([-0.05, 0.16 * sg, -0.14]), Ank + V([-0.05, 0.13 * sg, 0.05]), 0.08, 0.045, 0.08, lat,
                    prox='none', dist='flat', bow=0.015, bow_dir=lat, seed=95 + sg)
    add(f'fibula_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], fib, 0.008, min_tris=500)
    add(f'pes_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], pes(Ank, sg, rng), 0.007, weight=1.2, min_tris=2000)


def pes(A, sg, rng):
    """Short broad sauropod foot: splayed metatarsals, big sickle claw on
    digit I, smaller claws II–III, reduced IV–V."""
    parts = [carpal_block(A + V([0, 0, -0.08]), (0.2, 0.17, 0.08), np.eye(3), n=3, rng=rng),
             ellipsoid(A + V([-0.12, 0, -0.06]), (0.14, 0.12, 0.1))]
    lens = [0.26, 0.3, 0.32, 0.3, 0.24]
    for i in range(5):
        a = np.radians(np.interp(i, [0, 4], [28, -40])) * sg
        d = V([np.cos(a), np.sin(a), 0])
        b0 = A + V([0.08, 0, -0.14]) + d * 0.06
        b1 = b0 + d * lens[i] + V([0, 0, -0.16])
        r = [0.06, 0.058, 0.055, 0.05, 0.042][i]
        if i < 3:
            claw = {'length': [0.3, 0.24, 0.18][i], 'r': [0.06, 0.05, 0.042][i],
                    'down': V([0, 0.5 * sg * (1 if i == 0 else 0.3), -1])}
            parts.append(digit([b0, b1, b1 + d * 0.08 + V([0, 0, -0.05])], [r, r * 0.85, r * 0.75], claw=claw,
                               seed=int(rng.integers(1e4))))
        else:
            parts.append(digit([b0, b1, b1 + d * 0.05 + V([0, 0, -0.06])], [r, r * 0.8, r * 0.6],
                               hoof={'radii': (r * 0.6, r * 0.6, r * 0.4)}, seed=int(rng.integers(1e4))))
    return union(0.02, *parts)


def pelvis():
    A = V([-1.55, 0.72, 3.55])
    R = np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1)
    # ilium: tall rounded semi-disc (in the sagittal plane, slightly flared)
    il = [(-2.35, 3.75), (-2.2, 4.05), (-1.9, 4.28), (-1.5, 4.36), (-1.05, 4.3), (-0.72, 4.08),
          (-0.66, 3.82), (-0.9, 3.66), (-1.3, 3.62), (-1.8, 3.62), (-2.2, 3.62)]
    ilium = plate(V([0, 0.66, 0]), R @ rot((1, 0, 0), 0.12), il, 0.06, 0.02, falloff=0.2, rnd=0.03)
    acet = ellipsoid(A + V([0, -0.02, 0.02]), (0.26, 0.12, 0.2))
    # pubis: broad paddle forward-down; ischium: slender rod backward-down
    pub = ribbon([A + V([0.12, -0.02, -0.12]), V([-0.95, 0.45, 2.95]), V([-0.65, 0.12, 2.55])],
                 [0.2, 0.22, 0.3], [0.05, 0.04, 0.05], V([1, 0, 0.3]))
    isch = ribbon([A + V([-0.15, -0.02, -0.12]), V([-2.25, 0.4, 3.0]), V([-2.6, 0.14, 2.72])],
                  [0.16, 0.1, 0.13], [0.045, 0.035, 0.04], V([0, 0, 1]))
    half = union(0.06, ilium, acet, pub, isch)
    half = half.sub(sphere(A + V([0, 0.02, -0.06]), 0.2), 0.02)          # perforate acetabulum
    half = half.sub(ellipsoid(V([-0.9, 0.55, 3.1]), (0.1, 0.2, 0.06)), 0.02)  # obturator foramen
    return mirror_y(half).displace(0.01, 5, seed=100)
