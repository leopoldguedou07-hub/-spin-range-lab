"""Ptéranodon — Pteranodon longiceps (6–7 m d'envergure).

Silhouette: ptérosaure (pas un dinosaure); longue crête osseuse vers l'arrière
qui équilibre un long bec sans dents; ailes géantes portées par un 4e doigt
immense. Pose: terrestrial quadrupedal stance, wing fingers folded upward.
Units: metres, X forward, Y left, Z up, ground at z=0.
"""
import numpy as np
from scipy.interpolate import CubicSpline
from sdf import (V, norm, frame, rot, sphere, ellipsoid, box, tube, ribbon, plate,
                 union, bezier, mirror_y, custom, round_cone)
from anat import vertebra, rib, long_bone, digit, carpal_block, local

P = 'PTER'
SPEC = dict(
    key='Pteranodon', budget=60000,
    base='#DDCBA9', dark='#98805E',
    pieces={
        'Crane': [f'{P}_skull'],
        'Crete': [f'{P}_crest'],
        'Bec': [f'{P}_beak'],
        'Machoire': [f'{P}_mandible'],
        'Vertebre': [f'{P}_cervical_05'],
        'Cote': [f'{P}_rib_L_04'],
        'Omoplate': [f'{P}_scapulocoracoid_L'],
        'Bras': [f'{P}_humerus_L'],
        'Aile': [f'{P}_wing_phalanx_1_L'],
        'Bassin': [f'{P}_pelvis'],
        'Femur': [f'{P}_femur_L'],
        'Pied': [f'{P}_pes_L'],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_crest', f'{P}_beak', f'{P}_mandible']},
    closeup_dir=(0.2, -1.0, 0.15),
    views={'34': (0.7, -1.0, 0.25), 'side': (0.0, -1.0, 0.03)},
)


class Curve:
    def __init__(self, pts):
        pts = np.array(pts, float)
        s = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(pts, axis=0), axis=1))])
        self.len = s[-1]
        self.c = [CubicSpline(s, pts[:, k]) for k in range(pts.shape[1])]

    def at(self, s):
        p = [c(s) for c in self.c]
        t = [c(s, 1) for c in self.c]
        return V([p[0], 0.0, p[1]]), norm(V([t[0], 0.0, t[1]]))


# head -> tail
SPINE = Curve([(0.4, 1.86), (0.32, 1.74), (0.22, 1.56), (0.13, 1.36), (0.07, 1.28), (-0.08, 1.1),
               (-0.22, 0.88), (-0.3, 0.74), (-0.36, 0.64), (-0.42, 0.58), (-0.48, 0.55)])


def up_of(fwd):
    up = np.cross(fwd, V([0, 1, 0]))
    return up if up[2] > 0 else -up


def bones():
    rng = np.random.default_rng(23)
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    series = ([('cervical', l, r) for l, r in zip([0.05, 0.075, 0.1, 0.11, 0.11, 0.1, 0.075],
                                                  [0.018, 0.02, 0.022, 0.024, 0.025, 0.026, 0.027])] +
              [('dorsal', 0.042, 0.02) for _ in range(9)] +
              [('sacral', 0.035, 0.017) for _ in range(5)] +
              [('caudal', 0.028 * (1 - 0.1 * k), 0.012 * (1 - 0.13 * k)) for k in range(6)])
    total = sum(l for _, l, _ in series) + 0.006 * (len(series) - 1)
    k_len = (SPINE.len - 0.02) / total
    s = 0.02
    counts = {}
    vp = {}
    sacral = []
    for idx, (kind, cl, cr) in enumerate(series):
        cl *= k_len
        if idx:
            s += (series[idx - 1][1] * k_len + cl) / 2 + 0.006 * k_len
        c, t = SPINE.at(s)
        fwd = -t
        up = up_of(fwd)
        counts[kind] = counts.get(kind, 0) + 1
        i = counts[kind]
        if kind == 'cervical':
            p = dict(cr=cr, cl=cl, ends='pro', canal=cr * 0.4, sl=0.012 if i > 1 else 0, tilt=0.1, sw=cl * 0.3,
                     st=cr * 0.2, tl=cr * 0.9, tr=cr * 0.25, tu=0.0, zyg=cr * 0.5, pleuro=0.4, knob=0.4)
        elif kind == 'dorsal':
            p = dict(cr=cr, cl=cl, ends='pro', canal=cr * 0.4, sl=0.06, tilt=0.15, sw=cl * 0.7, st=cr * 0.2,
                     tl=0.05, tr=cr * 0.3, tu=0.01)
            if i <= 5:  # notarium: fused spines form a plate
                p.update(sw=cl * 1.05, knob=1.4)
        elif kind == 'sacral':
            p = dict(cr=cr, cl=cl, ends='flat', canal=cr * 0.4, sl=0.04, tilt=0.1, sw=cl * 1.0, st=cr * 0.2,
                     tl=0.04, tr=cr * 0.35, tu=0.0)
        else:
            p = dict(cr=cr, cl=cl, ends='flat', canal=cr * 0.35, sl=0.0, tl=0.0)
        vp[(kind, i)] = (c, fwd, up, p)
        sh = vertebra(c, fwd, up, p, rng)
        if kind == 'sacral':
            sacral.append(sh)
            continue
        coll = {'cervical': 'SPINE_cervical', 'dorsal': 'SPINE_dorsal', 'caudal': 'SPINE_tail'}[kind]
        add(f'{kind}_{i:02d}', ['SPINE', coll], sh, max(0.0012, cr * 0.075), min_tris=150 if kind != 'caudal' else 60)
    # pelvis fused to the sacrum (catalogue: petit bassin étroit fusionné au sacrum)
    c1, f1, u1, _ = vp[('sacral', 1)]
    c5, f5, u5, _ = vp[('sacral', 5)]
    A = (c1 + c5) / 2 - u1 * 0.06
    parts = list(sacral)
    for sg in (-1, 1):
        s_ = V([0, sg, 0])
        Ai = A + s_ * 0.075
        parts += [ribbon([c1 + f1 * 0.06 + s_ * 0.02, Ai + f1 * 0.03, Ai - f1 * 0.14 + s_ * -0.02],
                         [0.018, 0.022, 0.016], [0.006, 0.007, 0.005], u1),            # ilium, long pre-acetabular
                  plate(Ai - u1 * 0.02, np.stack([-f1, -u1, s_], 1), [(-0.03, -0.01), (0.07, 0.0), (0.08, 0.06),
                                                                      (0.0, 0.07)], 0.006, 0.003),  # ischium
                  ribbon([Ai, Ai - u1 * 0.05 + f1 * 0.04 - s_ * 0.03], [0.014, 0.01], [0.005, 0.004], f1),  # pubis
                  ellipsoid(Ai, (0.018, 0.012, 0.018))]
    pel = union(0.004, *parts)
    for sg in (-1, 1):
        pel = pel.sub(sphere(A + V([0, sg * 0.09, 0]), 0.015), 0.002)
    add('pelvis', ['PELVIS'], pel.displace(0.0012, 60, seed=4), 0.0016, weight=1.2, min_tris=1200)

    # ribs (short, very fine, slightly arched)
    for i in range(1, 9):
        c, fwd, up, p = vp[('dorsal', i)]
        side_v = np.cross(up, fwd)
        L_ = np.interp(i, [1, 3, 6, 8], [0.12, 0.2, 0.18, 0.1])
        for side, sg in (('L', 1), ('R', -1)):
            p0 = c + side_v * sg * 0.045 + up * 0.012
            pts = bezier(p0, p0 + side_v * sg * L_ * 0.55 + up * 0.0, p0 + side_v * sg * L_ * 0.55 - up * L_ * 0.75
                         - fwd * L_ * 0.25, n=8)
            add(f'rib_{side}_{i:02d}', ['RIBCAGE', f'RIBCAGE_{side}'],
                rib(c + side_v * sg * 0.022, p0 + up * 0.006, pts, list(np.linspace(0.006, 0.003, 8)),
                    list(np.linspace(0.004, 0.002, 8)), wdir=fwd, seed=int(rng.integers(1e4))), 0.0011, min_tris=80)
    # sternum with cristospine (keel) — flight muscles anchor
    cS, fS, uS, _ = vp[('dorsal', 3)]
    st_c = cS - uS * 0.2 + fS * 0.06
    stern = union(0.006, plate(st_c, np.stack([fS, V([0, 1, 0]), uS], 1), [(-0.08, -0.07), (0.05, -0.08), (0.1, 0.0),
                                                                            (0.05, 0.08), (-0.08, 0.07)], 0.006, 0.003),
                  ribbon([st_c + fS * 0.05, st_c + fS * 0.14 - uS * 0.04], [0.02, 0.008], [0.006, 0.004], uS))
    add('sternum', ['RIBCAGE'], stern.displace(0.001, 80, seed=5), 0.0015, min_tris=400)

    # ------------------------------------------------------------ skull ---
    O = SPINE.at(0.0)[0] + V([0.012, 0, 0.012])
    d = norm(V([1, 0, -0.3]))
    R, L = local(O, d, (0, 0, 1))
    add('skull', ['SKULL'], skull(R, L), 0.0022, weight=1.5, min_tris=3000)
    add('crest', ['SKULL', 'SKULL_special'], crest(R, L), 0.0022, min_tris=900)
    add('beak', ['SKULL'], beak(R, L), 0.0018, min_tris=900)
    add('mandible', ['SKULL'], mandible(R, L), 0.0018, weight=1.2, min_tris=1500)

    # ------------------------------------------------------------ limbs ---
    for side, sg, df in (('L', 1, 0.03), ('R', -1, -0.03)):
        wing(add, side, sg, df, vp, rng)
        leg(add, side, sg, df, A, rng)
    return B


# ----------------------------------------------------------------- skull ---
def skull(R, L):
    """Braincase + face (u 0..0.6 m): large nasoantorbital opening, big orbit."""
    prof = [(-0.02, -0.03), (-0.01, 0.06), (0.06, 0.1), (0.2, 0.085), (0.4, 0.06), (0.6, 0.04), (0.6, -0.035),
            (0.4, -0.05), (0.2, -0.07), (0.06, -0.08)]
    Rp = R @ np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1)
    core = plate(L(0), Rp, prof, t_center=0.045, t_edge=0.012, falloff=0.03, rnd=0.006)
    parts = [core, ellipsoid(L(0.02, 0, 0.0), (0.045, 0.05, 0.055), R),   # braincase
             ellipsoid(L(-0.018, 0, -0.03), (0.012, 0.012, 0.012), R)]     # condyle
    for sg in (-1, 1):
        parts.append(tube([L(0.02, sg * 0.03, -0.08), L(0.06, sg * 0.035, -0.02)], [0.008, 0.01]))  # quadrate
        parts.append(tube([L(0.05, sg * 0.035, -0.075), L(0.3, sg * 0.03, -0.06), L(0.58, sg * 0.02, -0.035)],
                          [0.006, 0.007, 0.006]))                                                   # jugal bar
    sk = union(0.006, *parts)
    for sg in (-1, 1):
        sk = sk.sub(ellipsoid(L(0.1, sg * 0.05, 0.015), (0.035, 0.03, 0.04), R), 0.004)             # orbit
        sk = sk.sub(ellipsoid(L(0.32, sg * 0.05, 0.0), (0.16, 0.03, 0.035), R), 0.004)              # nasoantorbital
        sk = sk.sub(ellipsoid(L(0.03, sg * 0.05, -0.04), (0.015, 0.02, 0.025), R), 0.003)           # temporal
    return sk.displace(0.0012, 60, seed=5, octaves=4)


def crest(R, L):
    """Long bony blade pointing back and up (male)."""
    Rp = R @ np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1)
    prof = [(0.12, 0.06), (0.0, 0.1), (-0.3, 0.26), (-0.55, 0.42), (-0.62, 0.47), (-0.6, 0.41),
            (-0.35, 0.2), (-0.05, 0.04), (0.08, 0.03)]
    c = plate(L(0), Rp, prof, t_center=0.012, t_edge=0.004, falloff=0.025, rnd=0.003)
    return c.displace(0.001, 50, seed=9)


def beak(R, L):
    """Toothless rostrum, straight and pointed, triangular section, sharp edge."""
    Rp = R @ np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1)
    prof = [(0.6, -0.034), (0.6, 0.04), (0.85, 0.025), (1.13, 0.0), (1.1, -0.012), (0.85, -0.022)]
    b = plate(L(0), Rp, prof, t_center=0.022, t_edge=0.004, falloff=0.03, rnd=0.002)
    # triangular section: narrower toward the top edge
    tri = custom(lambda P: np.abs(((P - L(0)) @ R)[:, 1]) - (0.028 - 0.4 * np.maximum(((P - L(0)) @ R)[:, 2], 0) -
                                                                 0.018 * np.clip((((P - L(0)) @ R)[:, 0] - 0.6) / 0.5, 0, 1)),
                 b.lo, b.hi)
    return b.inter(tri, 0.003).displace(0.0008, 70, seed=12)


def mandible(R, L):
    """Long toothless lower jaw, taller at the back, cup-shaped articulation."""
    parts = []
    for sg in (-1, 1):
        parts.append(ribbon([L(0.04, sg * 0.035, -0.085), L(0.25, sg * 0.028, -0.08), L(0.55, sg * 0.015, -0.06)],
                            [0.022, 0.016, 0.012], [0.005, 0.005, 0.004], R[:, 2]))
        parts.append(ellipsoid(L(0.035, sg * 0.035, -0.085), (0.012, 0.01, 0.012), R))
    parts.append(ribbon([L(0.55, 0, -0.058), L(0.85, 0, -0.04), L(1.1, 0, -0.016)], [0.012, 0.01, 0.003],
                        [0.012, 0.008, 0.002], R[:, 2]))
    m = union(0.004, *parts)
    for sg in (-1, 1):
        m = m.sub(ellipsoid(L(0.12, sg * 0.03, -0.083), (0.03, 0.01, 0.006), R), 0.002)   # mandibular fenestra
    return m.displace(0.0007, 80, seed=13)


# ----------------------------------------------------------------- limbs ---
def wing(add, side, sg, df, vp, rng):
    lat = V([0, sg, 0])
    Kn = V([0.52 + df, 0.42 * sg, 0.07])                 # wing knuckle (mc IV distal end)
    W = Kn + V([-0.27, -0.05 * sg, 0.62])                # wrist
    E = W + V([-0.3, 0.0, 0.38])                         # elbow
    G = E + V([0.1, -0.22 * sg, 0.14])                   # glenoid
    # scapulocoracoid: sabre-like scapula + strut coracoid to the sternum
    cD, fD, uD, _ = vp[('dorsal', 2)]
    scap = union(0.005,
                 ribbon([G, G + V([-0.06, -0.06 * sg, 0.08]), cD + V([-0.07, 0.045 * sg, 0.03])],
                        [0.016, 0.012, 0.018], [0.006, 0.005, 0.005], V([1, 0, 0])),
                 ribbon([G, G + V([0.03, -0.06 * sg, -0.1]), cD - uD * 0.2 + V([0.06, 0.03 * sg, 0])],
                        [0.014, 0.01, 0.014], [0.007, 0.006, 0.006], V([1, 0, 0])),
                 ellipsoid(G, (0.02, 0.018, 0.022))).sub(sphere(G + lat * 0.02, 0.016), 0.002)
    add(f'scapulocoracoid_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], scap.displace(0.0008, 90, seed=40 + sg),
        0.0018, min_tris=700)
    # humerus: short, very robust, big hooked deltopectoral crest
    hum = long_bone(G + lat * 0.015, E, 0.028, 0.017, 0.03, lat, prox='ball', dist='condyles', head_off=0.012,
                    head_r=0.02, seed=50 + sg,
                    extra=[ribbon([G + lat * 0.03 + V([0.01, 0, -0.02]), G + lat * 0.06 + V([0.06, 0, -0.05]),
                                   G + lat * 0.07 + V([0.05, 0, -0.09])], [0.02, 0.022, 0.012],
                                  [0.006, 0.006, 0.004], V([0, 0, 1]))])
    add(f'humerus_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], hum, 0.0016, min_tris=800)
    ul = long_bone(E + V([-0.008, 0, 0]), W + V([-0.008, 0, 0.01]), 0.024, 0.013, 0.022, lat, prox='cup',
                   dist='flat', seed=60 + sg)
    ra = long_bone(E + V([0.012, 0, -0.006]), W + V([0.012, 0, 0.012]), 0.016, 0.008, 0.016, lat, prox='cup',
                   dist='flat', seed=61 + sg)
    add(f'ulna_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], ul, 0.0015, min_tris=500)
    add(f'radius_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], ra, 0.0013, min_tris=400)
    # carpus + pteroid + metacarpal IV + small fingers I-III with claws
    hand = [carpal_block(W, (0.03, 0.028, 0.02), np.eye(3), n=4, rng=rng),
            ribbon([W + V([0.02, -0.01 * sg, -0.01]), W + V([0.09, -0.04 * sg, -0.04])], [0.005, 0.002],
                   [0.003, 0.0015], V([0, 0, 1])),                                        # pteroid
            long_bone(W + V([0.01, 0, -0.02]), Kn, 0.02, 0.011, 0.022, lat, prox='none', dist='pulley', seed=70 + sg)]
    for k in range(3):
        base = Kn + V([0.015, -(0.012 + 0.012 * k) * sg, 0.015])
        pts = [base, base + V([0.035, -0.006 * sg * k, -0.02]), base + V([0.06, -0.01 * sg * k, -0.045])]
        hand.append(digit(pts, [0.004, 0.0035, 0.003], claw={'length': 0.025, 'r': 0.004, 'down': (0.3, 0, -1)},
                          seed=int(rng.integers(1e4))))
    add(f'manus_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], union(0.003, *hand), 0.0012, min_tris=1400)
    # wing finger: 4 phalanges folded upward and back
    dirs = [norm(V([-0.3, 0.06 * sg, 0.95])), norm(V([-0.75, 0.05 * sg, 0.65])), norm(V([-0.95, 0.03 * sg, 0.15])),
            norm(V([-0.8, 0.0, -0.5]))]
    lens = [0.78, 0.5, 0.3, 0.18]
    radii = [(0.018, 0.012, 0.013), (0.012, 0.009, 0.009), (0.009, 0.007, 0.006), (0.006, 0.004, 0.002)]
    p0 = Kn + V([0.0, 0.01 * sg, 0.02])
    for k in range(4):
        p1 = p0 + dirs[k] * lens[k]
        r0, rs, r1 = radii[k]
        ph = long_bone(p0, p1, r0, rs, r1, lat, prox='cup', dist='flat' if k < 3 else 'none', flat=1.4,
                       seed=80 + 10 * k + sg)
        add(f'wing_phalanx_{k + 1}_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}', f'WING_{side}'], ph,
            max(0.0011, rs * 0.14), min_tris=500 if k < 2 else 250)
        p0 = p1 + dirs[k] * 0.004


def leg(add, side, sg, df, A, rng):
    lat = V([0, sg, 0])
    H = A + V([0, 0.09 * sg, 0])
    K = V([-0.2 - df, 0.13 * sg, 0.38])
    Ank = V([-0.33 - df, 0.12 * sg, 0.04])
    fem = long_bone(H + lat * 0.02, K, 0.018, 0.011, 0.018, lat, prox='ball', dist='condyles', head_off=0.016,
                    head_r=0.014, bow=0.03, seed=90 + sg)
    add(f'femur_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], fem, 0.0013, min_tris=500)
    tib = long_bone(K, Ank, 0.018, 0.009, 0.015, lat, prox='plateau', dist='pulley', seed=91 + sg)
    add(f'tibia_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], tib, 0.0012, min_tris=450)
    # plantigrade foot, 4 slender clawed toes, 5th reduced
    parts = [carpal_block(Ank, (0.015, 0.02, 0.01), np.eye(3), n=3, rng=rng)]
    for k in range(4):
        a = np.radians(np.interp(k, [0, 3], [14, -14])) * sg
        dd = V([np.cos(a), np.sin(a), 0])
        b0 = Ank + V([0.005, 0, -0.012]) + dd * 0.01
        pts = [b0, b0 + dd * 0.07 + V([0, 0, -0.016]), b0 + dd * 0.095 + V([0, 0, -0.018]),
               b0 + dd * 0.115 + V([0, 0, -0.018])]
        parts.append(digit(pts, [0.0045, 0.004, 0.0035, 0.003], claw={'length': 0.018, 'r': 0.003},
                           seed=int(rng.integers(1e4))))
    parts.append(tube([Ank + V([-0.005, -0.015 * sg, -0.01]), Ank + V([0.02, -0.03 * sg, -0.02])], [0.003, 0.002]))
    add(f'pes_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], union(0.002, *parts), 0.0009, min_tris=900)
