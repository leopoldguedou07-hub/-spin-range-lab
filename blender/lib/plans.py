"""Shared building blocks for whole skeletons: spine curves, vertebral series
fitted to a curve, rib cages, gastralia, ossified tendons, pelvis types,
limb chains, skull shells and tooth rows. Each species passes its own
proportions and adds its own features; nothing here is a finished animal.
Units: metres, X forward, Y left, Z up."""
import numpy as np
from scipy.interpolate import CubicSpline
from sdf import (V, norm, frame, rot, sphere, ellipsoid, box, tube, ribbon, plate,
                 union, bezier, mirror_y, custom, round_cone)
from anat import vertebra, rib, long_bone, digit, carpal_block, local


def lerp(tab, t):
    tab = np.array(tab, float)
    return float(np.interp(t, tab[:, 0], tab[:, 1]))


class Curve3:
    """Arc-length spline through (x, z) or (x, y, z) control points."""

    def __init__(self, pts):
        pts = np.array(pts, float)
        if pts.shape[1] == 2:
            pts = np.stack([pts[:, 0], np.zeros(len(pts)), pts[:, 1]], 1)
        s = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(pts, axis=0), axis=1))])
        self.len = s[-1]
        self.c = [CubicSpline(s, pts[:, k]) for k in range(3)]

    def at(self, s):
        s = float(np.clip(s, 0, self.len))
        return V([c(s) for c in self.c]), norm(V([c(s, 1) for c in self.c]))


def up_of(fwd):
    side = np.cross(V([0, 0, 1]), fwd)
    if np.linalg.norm(side) < 1e-6:
        side = V([0, 1, 0])
    return norm(np.cross(fwd, norm(side)))


def side_of(fwd, up):
    return np.cross(up, fwd)


COLL = {'cervical': 'SPINE_cervical', 'dorsal': 'SPINE_dorsal', 'lumbar': 'SPINE_dorsal',
        'thoracic': 'SPINE_dorsal', 'sacral': 'SPINE_sacral', 'caudal': 'SPINE_tail'}


def column(add, curve, series, rng, gap=0.012, s0=0.02, fused=('sacral',), extra=None, vox=0.07,
           min_tris=None):
    """Place a vertebral series head->tail along `curve`, rescaling centrum
    lengths so the series fills it. series: [(kind, cl, params)].
    extra(kind, i, c, fwd, up, p, shape) may return a modified shape.
    Returns (frames {(kind,i): (c,fwd,up,p)}, fused_shapes)."""
    n = len(series)
    total = sum(s[1] for s in series) + gap * (n - 1)
    k = (curve.len - s0 - 0.01) / total
    s = s0
    frames, fused_sh, counts = {}, [], {}
    for idx, (kind, cl, p) in enumerate(series):
        cl *= k
        if idx:
            s += (series[idx - 1][1] * k + cl) / 2 + gap * k
        c, t = curve.at(s)
        fwd = -t
        up = up_of(fwd)
        counts[kind] = counts.get(kind, 0) + 1
        i = counts[kind]
        p = dict(p, cl=cl)
        sh = vertebra(c, fwd, up, p, rng)
        if extra:
            sh = extra(kind, i, c, fwd, up, p, sh) or sh
        frames[(kind, i)] = (c, fwd, up, p)
        if kind in fused:
            fused_sh.append(sh)
            continue
        mt = (min_tris or {}).get(kind, 90 if kind == 'caudal' and p['cr'] < 0.03 else 220)
        add(f'{kind}_{i:02d}', ['SPINE', COLL.get(kind, 'SPINE_dorsal')], sh, max(0.0012, p['cr'] * vox),
            min_tris=mt)
    return frames, fused_sh


def ribcage(add, frames, kind, prof, rng, first=1, last=None, vox=0.2, min_tris=200, name='rib'):
    """Two-headed ribs hung from the transverse processes. prof holds tables
    over t in [0,1] (front->back): depth, ymax, yend, back, wid, thick,
    optional 'drop' (extra downward start) and 'wdir'."""
    idx = sorted(i for (k, i) in frames if k == kind)
    last = last or idx[-1]
    sel = [i for i in idx if first <= i <= last]
    out = {}
    for n_, i in enumerate(sel):
        t = n_ / max(len(sel) - 1, 1)
        c, fwd, up, p = frames[(kind, i)]
        sv = side_of(fwd, up)
        depth, ymax, yend = lerp(prof['depth'], t), lerp(prof['ymax'], t), lerp(prof['yend'], t)
        back, wid, th = lerp(prof['back'], t), lerp(prof['wid'], t), lerp(prof['thick'], t)
        tl = p.get('tl', p['cr'] * 1.2)
        for side, sg in (('L', 1), ('R', -1)):
            j = 1 + rng.uniform(-0.03, 0.03)
            s_ = sv * sg
            head = c + s_ * p['cr'] * 0.85 + up * p['cr'] * 0.4 - fwd * p['cl'] * 0.35
            tuber = c + s_ * tl * 0.85 + up * (p['cr'] * 0.8 + p.get('tu', 0))
            p0 = c + s_ * tl * 1.0 + up * (p['cr'] * 0.5 + p.get('tu', 0) * 0.6)
            c1 = c + s_ * ymax * 0.95 * j - fwd * back * 0.12 + up * p['cr'] * 0.3
            c2 = c + s_ * ymax * 1.04 * j - fwd * back * 0.72 - up * depth * 0.55
            p3 = c + s_ * yend * j - fwd * back * j - up * depth * j
            pts = bezier(p0, c1, c2, n=11, p3=p3)
            W = list(np.interp(np.linspace(0, 1, 11), [0, 0.3, 0.7, 1], [wid * 0.75, wid, wid * 0.9, wid * 0.55]))
            T = list(np.interp(np.linspace(0, 1, 11), [0, 0.4, 1], [th * 1.15, th, th * 0.65]))
            sh = rib(head, tuber, pts, W, T, wdir=prof.get('wdir', fwd + up * 0.2), seed=int(rng.integers(1e4)))
            nm = f'{name}_{side}_{i:02d}'
            add(nm, ['RIBCAGE', f'RIBCAGE_{side}'], sh, max(0.0012, th * vox), min_tris=min_tris)
            out[(side, i)] = nm
    return out


def gastralia(add, a, b, width, n, r, rng, name='gastralia'):
    """Belly ribs: chevron-shaped thin rods between chest (a) and pubis (b)."""
    parts = []
    for k in range(n):
        t = k / (n - 1)
        c = a + (b - a) * t
        w = width * (0.75 + 0.35 * np.sin(np.pi * t))
        for sg in (-1, 1):
            parts.append(ribbon([c + V([0.0, 0, 0.02]), c + V([-w * 0.12, sg * w * 0.55, w * 0.08]),
                                 c + V([-w * 0.1, sg * w, w * 0.35])], [r, r * 0.9, r * 0.5], [r * 0.7, r * 0.6, r * 0.4],
                                V([1, 0, 0])))
    add(name, ['RIBCAGE'], union(r * 0.6, *parts).displace(r * 0.15, 1.5 / r, seed=int(rng.integers(1e4))),
        max(0.001, r * 0.35), min_tris=600)


def tendons(add, frames, kinds, r, rng, name='ossified_tendons', height=0.7):
    """Ossified tendons: long thin rods in a lattice along the neural spines."""
    items = sorted([(k, i) for (k, i) in frames if k in kinds], key=lambda x: (kinds.index(x[0]), x[1]))
    tops = [frames[key] for key in items]
    parts = []
    for layer in range(3):
        h = height * (0.35 + 0.25 * layer)
        for sg in (-1, 1):
            for start in range(layer % 2, len(tops) - 3, 3):
                seg = tops[start:start + 5]
                pts = [c + up * (p['cr'] * 1.3 + p.get('sl', 0.2) * h) + side_of(fwd, up) * sg * p['cr'] * 0.4
                       for c, fwd, up, p in seg]
                if len(pts) >= 2:
                    parts.append(tube(pts, [r] * len(pts)))
    if parts:
        add(name, ['SPINE', 'SPINE_tendons'], union(0, *parts).displace(r * 0.2, 1.0 / r, seed=int(rng.integers(1e4))),
            max(0.001, r * 0.45), min_tris=800)


# ------------------------------------------------------------------ pelvis ---
def pelvis_saurischian(A, il_len, il_h, pub_len, pub_boot, isch_len, hw, flare=0.0, pub_ang=0.35, isch_ang=0.8,
                       seed=0):
    """Theropod/sauropod pelvis: long ilium blade, pubis down-forward ending
    in a 'boot', ischium back-down, perforate acetabulum. A = left acetabulum."""
    y = A[1]
    R = np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1) @ rot((1, 0, 0), flare)
    il = [(-il_len * 0.55, 0.02), (-il_len * 0.5, il_h * 0.7), (-il_len * 0.2, il_h), (il_len * 0.25, il_h),
          (il_len * 0.45, il_h * 0.75), (il_len * 0.45, il_h * 0.1), (il_len * 0.15, -0.02), (-il_len * 0.2, -0.02)]
    ilium = plate(V([A[0], y * 0.85, A[2] + il_h * 0.05]), R, il, il_h * 0.07, il_h * 0.025, rnd=il_h * 0.03)
    pd = V([np.sin(pub_ang), 0, -np.cos(pub_ang)])
    pe = A + pd * pub_len
    pub = ribbon([A + V([0.03, 0, -0.03]) * il_h * 3, A + pd * pub_len * 0.5 - V([0, y * 0.45, 0]),
                  pe - V([0, y * 0.9, 0])], [il_h * 0.14, il_h * 0.08, il_h * 0.1],
                 [il_h * 0.05, il_h * 0.04, il_h * 0.05], V([1, 0, 0]))
    boot = ellipsoid(pe - V([0, y * 0.9, 0]) + V([0, 0, 0.0]), (pub_boot, il_h * 0.1, il_h * 0.07))
    idr = V([-np.sin(isch_ang), 0, -np.cos(isch_ang)])
    ie = A + idr * isch_len
    isch = ribbon([A + V([-0.05, 0, -0.05]) * il_h * 3, A + idr * isch_len * 0.5 - V([0, y * 0.4, 0]),
                   ie - V([0, y * 0.8, 0])], [il_h * 0.12, il_h * 0.06, il_h * 0.08],
                  [il_h * 0.045, il_h * 0.035, il_h * 0.04], V([0, 0, 1]))
    acet = ellipsoid(A, (il_h * 0.22, il_h * 0.1, il_h * 0.2))
    half = union(il_h * 0.05, ilium, pub, boot, isch, acet).sub(sphere(A + V([0, y * 0.05, -il_h * 0.03]), il_h * 0.16),
                                                                 il_h * 0.02)
    return mirror_y(half).displace(il_h * 0.015, 6 / il_h, seed=seed)


def pelvis_ornithischian(A, il_len, il_h, prepub_len, pub_len, isch_len, flare=0.0, shield=0.0, seed=0):
    """Ornithischian pelvis: long low ilium, forward prepubic blade, pubis rod
    swept back parallel to the ischium. flare tilts the ilium outward;
    shield (ankylosaurs) makes it a broad horizontal plate."""
    y = A[1]
    Rv = np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1)
    R = Rv @ rot((1, 0, 0), flare) if not shield else np.stack([V([1, 0, 0]), V([0, 1, 0]), V([0, 0, 1])], 1)
    il = [(-il_len * 0.45, -0.01), (-il_len * 0.42, il_h * 0.5), (-il_len * 0.1, il_h), (il_len * 0.3, il_h * 0.9),
          (il_len * 0.62, il_h * 0.55), (il_len * 0.6, il_h * 0.1), (il_len * 0.2, -0.02)]
    if shield:
        il = [(-il_len * 0.45, -shield * 0.2), (-il_len * 0.3, shield * 0.85), (il_len * 0.3, shield),
              (il_len * 0.6, shield * 0.7), (il_len * 0.55, -shield * 0.1), (0, -shield * 0.3)]
        ilium = plate(V([A[0], y * 0.3, A[2] + il_h * 0.35]), R, il, il_h * 0.08, il_h * 0.03, rnd=il_h * 0.04)
    else:
        ilium = plate(V([A[0], y * 0.92, A[2] + il_h * 0.1]), R, il, il_h * 0.07, il_h * 0.025, rnd=il_h * 0.03)
    prepub = ribbon([A + V([0.02, 0, -0.02]), A + V([prepub_len * 0.5, -y * 0.05, -il_h * 0.15]),
                     A + V([prepub_len, -y * 0.1, -il_h * 0.1])], [il_h * 0.1, il_h * 0.12, il_h * 0.16],
                    [il_h * 0.035, il_h * 0.03, il_h * 0.03], V([0, 0, 1]))
    pub = ribbon([A + V([-0.02, 0, -0.04]), A + V([-pub_len * 0.5, -y * 0.3, -il_h * 0.45]),
                  A + V([-pub_len, -y * 0.55, -il_h * 0.7])], [il_h * 0.05, il_h * 0.035, il_h * 0.03],
                 [il_h * 0.04, il_h * 0.03, il_h * 0.025], V([0, 0, 1]))
    isch = ribbon([A + V([-0.04, 0, -0.02]), A + V([-isch_len * 0.5, -y * 0.3, -il_h * 0.35]),
                   A + V([-isch_len, -y * 0.6, -il_h * 0.55])], [il_h * 0.09, il_h * 0.06, il_h * 0.08],
                  [il_h * 0.04, il_h * 0.03, il_h * 0.035], V([0, 0, 1]))
    acet = ellipsoid(A, (il_h * 0.25, il_h * 0.1, il_h * 0.22))
    half = union(il_h * 0.05, ilium, prepub, pub, isch, acet).sub(sphere(A + V([0, y * 0.05, 0]), il_h * 0.17),
                                                                  il_h * 0.02)
    return mirror_y(half).displace(il_h * 0.015, 6 / il_h, seed=seed)


# ------------------------------------------------------------------ skulls ---
def skull_shell(L, R, prof, w_back, w_front, u_len, holes=(), rnd=None, t_edge=None, falloff=None):
    """Sagittal-profile skull: `prof` (u along skull, v up) extruded to a
    width tapering from w_back to w_front (half widths), with fenestrae cut
    through the sides. holes: [(u, v, ru, rv, ry, both_sides=True)]."""
    Rp = R @ np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1)
    o = L(0)
    core = plate(o, Rp, prof, t_center=w_back, t_edge=t_edge or w_back * 0.35, falloff=falloff or w_back * 0.8,
                 rnd=rnd if rnd is not None else w_back * 0.08)

    def env(P):
        q = (P - o) @ R
        w = w_back + (w_front - w_back) * np.clip(q[:, 0] / u_len, 0, 1)
        return np.abs(q[:, 1]) - w
    sk = core.inter(custom(env, core.lo, core.hi), w_back * 0.12)
    for h in holes:
        u, v, ru, rv, ry = h[:5]
        w = w_back + (w_front - w_back) * np.clip(u / u_len, 0, 1)
        for sg in ((-1, 1) if (len(h) < 6 or h[5]) else (0,)):
            sk = sk.sub(ellipsoid(L(u, sg * w, v), (ru, ry, rv), R), min(ru, rv) * 0.25)
    return sk


def blade_tooth(base, down, back, h, seed, curve=0.25, flat=0.45):
    """Theropod ziphodont tooth: laterally compressed, recurved blade with
    serrated carinae (serrations as a fine ridged displacement)."""
    Rt = np.stack([norm(down), norm(np.cross(down, back)), norm(back)], 1)
    mid = base + down * h * 0.55 + back * h * curve * 0.4
    tip = base + down * h + back * h * curve
    t = ribbon([base, mid, tip], [h * 0.22, h * 0.17, h * 0.02], [h * 0.22 * flat, h * 0.17 * flat, h * 0.015],
               Rt[:, 2])
    return t.displace(h * 0.01, 14 / h, seed=seed)


def cone_tooth(base, down, back, h, seed, curve=0.12, r=0.2):
    mid = base + down * h * 0.55 + back * h * curve * 0.5
    tip = base + down * h + back * h * curve
    return tube([base, mid, tip], [h * r, h * r * 0.72, h * 0.02]).displace(h * 0.01, 12 / h, seed=seed)


def tooth_row(prefix, coll, maker, positions, rng, voxel_k=0.035, first_unique=True):
    """Build a tooth row with instancing: the first tooth is modelled, the
    rest are scaled/rotated linked copies. positions: [(base, down, back, h)].
    Returns bone dicts ready to extend B (names prefix_01, ...)."""
    out = []
    src = None
    for k, (base, down, back, h) in enumerate(positions):
        down, back = norm(down), norm(back)
        side = norm(np.cross(down, back))
        Rm = np.stack([back, side, down], 1) * h
        M = np.eye(4)
        M[:3, :3] = Rm
        M[:3, 3] = base
        name = f'{prefix}_{k + 1:02d}'
        if src is None or (k == 2 and not first_unique):
            out.append(dict(name=name, coll=coll, shape=maker(base, down, back, h, int(rng.integers(1e4))),
                            voxel=max(0.0005, h * voxel_k), min_tris=90, max_tris=260))
            src = (name, M)
        else:
            out.append(dict(name=name, coll=coll, instance_of=src[0], M_src=src[1], M=M))
    return out


# ------------------------------------------------------------------- limbs ---
def theropod_leg(add, P_, side, sg, A, K, Ank, sz, rng, toes=None, sickle=False, coll='HIND_LIMBS'):
    """Bipedal leg: femur (medial head, lesser & 4th trochanters), tibia with
    cnemial crest + slender fibula, long bundled metatarsus, 3 weight-bearing
    clawed toes + small hallux. sz: fem_r, tib_r, mt_len, toe_len, claw.
    sickle: digit II raised with a big sickle claw (dromaeosaurs)."""
    lat = V([0, sg, 0])
    C = [coll, f'{coll}_{side}']
    fr = sz['fem_r']
    fem = long_bone(A + lat * fr * 1.1, K, fr * 1.9, fr, fr * 1.8, lat, prox='ball', dist='condyles',
                    head_off=fr * 1.2, head_r=fr * 1.25, bow=0.04, bow_dir=V([1, 0, 0]), seed=int(rng.integers(1e4)),
                    extra=[ellipsoid(A + lat * fr * 1.3 + V([fr * 1.2, 0, -fr * 0.6]), (fr * 0.6, fr * 0.35, fr * 0.9)),
                           ellipsoid(A + (K - A) * 0.42 + lat * fr * 0.9 + V([-fr * 0.9, 0, 0]),
                                     (fr * 0.35, fr * 0.3, fr * 1.0))])
    add(f'femur_{side}', C, fem, max(0.001, fr * 0.09), weight=1.1, min_tris=1200)
    tr = sz['tib_r']
    tib = long_bone(K + V([0, 0, -tr * 0.8]), Ank, tr * 2.0, tr, tr * 1.8, lat, prox='plateau', dist='pulley',
                    crests=[(0.02, 0.28, V([1, 0, 0]), tr * 0.9, tr * 0.8)], seed=int(rng.integers(1e4)))
    fib = long_bone(K + lat * tr * 1.3 + V([-tr * 0.5, 0, -tr * 1.2]), Ank + lat * tr * 1.0 + V([0, 0, tr * 2]),
                    tr * 0.8, tr * 0.35, tr * 0.5, lat, prox='none', dist='flat', seed=int(rng.integers(1e4)))
    add(f'tibia_{side}', C, tib, max(0.001, tr * 0.09), min_tris=1000)
    add(f'fibula_{side}', C, fib, max(0.0008, tr * 0.06), min_tris=400)
    # pes: metatarsus + toes
    mt = sz['mt_len']
    toe = sz['toe_len']
    cl = sz['claw']
    rr = tr * 0.55
    parts = [carpal_block(Ank, (tr * 1.2, tr * 1.3, tr * 0.6), np.eye(3), n=3, rng=rng)]
    mt_dir = norm(V([0.18, 0, -1]))
    bot = Ank + mt_dir * mt
    spreads = [(-1, 0.28), (0, 0.0), (1, -0.28)]  # digits II, III, IV
    for d, (k_, a) in enumerate(spreads):
        base = Ank + V([0, sg * k_ * rr * 0.9, -tr * 0.4])
        end = bot + V([0, sg * k_ * rr * 1.1, 0])
        parts.append(digit([base, (base + end) / 2, end], [rr, rr * 0.8, rr * 0.95], knuckle=1.1,
                           seed=int(rng.integers(1e4))))
        dd = V([np.cos(a * sg), np.sin(a * sg), 0])
        L_ = toe * (1.0 if k_ == 0 else 0.8)
        if sickle and k_ == -1:  # digit II held up with the sickle claw
            p1 = end + dd * L_ * 0.25 + V([0, 0, L_ * 0.45])
            p2 = p1 + dd * L_ * 0.2 + V([0, 0, L_ * 0.35])
            parts.append(digit([end, p1, p2], [rr * 0.8, rr * 0.7, rr * 0.6], knuckle=1.3, seed=int(rng.integers(1e4))))
            add(f'sickle_claw_{side}', C, sickle_claw(p2, dd, sz['sickle'], rng), max(0.0006, sz['sickle'] * 0.02),
                min_tris=500)
            continue
        n_ph = [3, 4, 5][d]
        pts = [end]
        for q in range(n_ph - 1):
            pts.append(pts[-1] + dd * L_ / (n_ph - 1) + V([0, 0, -0.25 * L_ / n_ph if q == 0 else 0]))
        for p in pts:
            p[2] = max(p[2], rr * 0.5)
        parts.append(digit(pts, list(np.linspace(rr * 0.75, rr * 0.5, len(pts))), knuckle=1.3,
                           claw={'length': cl, 'r': rr * 0.55, 'down': (0, 0, -1)}, seed=int(rng.integers(1e4))))
    # hallux (dew claw) high on the back
    hb = Ank + mt_dir * mt * 0.65 + V([0, -sg * rr * 0.8, 0])
    parts.append(digit([hb, hb + V([-toe * 0.2, 0, -toe * 0.1]), hb + V([-toe * 0.28, 0, -toe * 0.22])],
                       [rr * 0.45, rr * 0.4, rr * 0.35], claw={'length': cl * 0.5, 'r': rr * 0.3}, seed=int(rng.integers(1e4))))
    add(f'pes_{side}', C, union(rr * 0.2, *parts), max(0.0007, rr * 0.18), weight=1.3, min_tris=1800)


def sickle_claw(base, dd, length, rng):
    up = V([0, 0, 1])
    pts = bezier(base, base + dd * length * 0.55 + up * length * 0.35, base + dd * length * 0.8 - up * length * 0.25,
                 n=9, p3=base + dd * length * 0.6 - up * length * 0.75)
    r = length * 0.16
    c = ribbon(pts, list(np.linspace(r, r * 0.05, 9)), list(np.linspace(r * 0.55, r * 0.03, 9)), up)
    return union(r * 0.2, c, ellipsoid(base, (r * 0.9, r * 0.6, r))).displace(r * 0.03, 3 / r, seed=int(rng.integers(1e4)))


def theropod_arm(add, side, sg, G, E, W, sz, rng, fingers=3, coll='FRONT_LIMBS', claw_piece=None, joined=False):
    """Scapula strap + coracoid, humerus with deltopectoral crest, radius and
    ulna, hand of 2–3 clawed fingers. If claw_piece names a finger index,
    its ungual claw is emitted as a separate object (catalogue piece)."""
    lat = V([0, sg, 0])
    C = [coll, f'{coll}_{side}']
    hr = sz['hum_r']
    sc_top = G + sz['scap_vec']
    scap = union(hr * 0.4,
                 ribbon([G, (G + sc_top) / 2 + lat * hr * 0.3, sc_top], [hr * 2.0, hr * 1.1, hr * 1.9],
                        [hr * 0.5, hr * 0.4, hr * 0.35], V([1, 0, 0.3])),
                 ellipsoid(G + V([hr * 2.2, -sg * hr * 0.5, -hr * 1.5]), (hr * 2.0, hr * 0.45, hr * 1.7),
                           frame(V([1, 0, 0]), V([0, 0, 1]))),
                 ellipsoid(G, (hr * 1.3, hr, hr * 1.2))).sub(sphere(G + lat * hr * 0.7 + V([0, 0, -hr * 0.5]), hr * 0.9),
                                                            hr * 0.1)
    add(f'scapula_{side}', C, scap.displace(hr * 0.06, 1.2 / hr, seed=int(rng.integers(1e4))), max(0.0008, hr * 0.12),
        min_tris=900)
    hum = long_bone(G + V([0, 0, -hr * 0.4]), E, hr * 1.5, hr, hr * 1.4, lat, prox='ball', dist='condyles',
                    head_dir=V([-1, 0, 0.5]), head_off=hr * 0.4, head_r=hr * 1.0,
                    crests=[(0.05, 0.4, V([1, sg * 0.3, 0]), hr * 0.8, hr * 0.6)], seed=int(rng.integers(1e4)))
    ul = long_bone(E + V([-hr * 0.4, 0, 0]), W, hr * 1.1, hr * 0.6, hr * 0.8, lat, prox='cup', dist='flat',
                   extra=[sphere(E + V([-hr * 1.2, 0, hr * 0.3]), hr * 0.6)], seed=int(rng.integers(1e4)))
    ra = long_bone(E + V([hr * 0.4, 0, 0]), W + V([hr * 0.4, 0, 0]), hr * 0.8, hr * 0.45, hr * 0.7, lat, prox='cup',
                   dist='flat', seed=int(rng.integers(1e4)))
    add(f'humerus_{side}', C, hum, max(0.0008, hr * 0.1), min_tris=700)
    add(f'ulna_{side}', C, ul, max(0.0008, hr * 0.08), min_tris=500)
    add(f'radius_{side}', C, ra, max(0.0007, hr * 0.07), min_tris=400)
    parts = [carpal_block(W, (hr * 0.9, hr * 1.0, hr * 0.6), np.eye(3), n=3, rng=rng)]
    fl = sz['finger_len']
    fdir = norm(sz.get('finger_dir', V([0.6, 0, -0.8])))
    for f in range(fingers):
        spread = (f - (fingers - 1) / 2) * 0.35
        dd = norm(fdir + V([0, sg * spread * 0.6, 0]))
        L_ = fl * [0.8, 1.0, 0.9][f]
        n_ph = [2, 3, 4][f]
        base = W + V([0, sg * (f - 1) * hr * 0.6, -hr * 0.4])
        pts = [base]
        for q in range(n_ph + 1):
            pts.append(pts[-1] + dd * L_ / (n_ph + 1))
        rr = hr * (0.42 - 0.05 * f)
        clen = sz['claw'] * (1.3 if f == 0 else 1.0)
        separate = claw_piece is not None and f == claw_piece
        parts.append(digit(pts, list(np.linspace(rr, rr * 0.7, len(pts))), knuckle=1.3,
                           claw=None if separate else {'length': clen, 'r': rr * 0.8, 'down': (0.2, 0, -1)},
                           seed=int(rng.integers(1e4))))
        if separate:
            add(f'hand_claw_{side}', C, claw_shape(pts[-1], dd, clen, rr * 0.9, rng), max(0.0006, rr * 0.08),
                min_tris=500)
    add(f'manus_{side}', C, union(hr * 0.15, *parts), max(0.0007, hr * 0.08), min_tris=1000)


def claw_shape(base, dd, length, r, rng, down=V([0, 0, -1])):
    """Ungual claw: curved, laterally compressed, with a flexor tubercle."""
    pts = bezier(base, base + dd * length * 0.6, base + dd * length * 0.9 + down * length * 0.5, n=8)
    c = ribbon(pts, list(np.linspace(r, r * 0.06, 8)), list(np.linspace(r * 0.6, r * 0.04, 8)), down)
    tub = ellipsoid(base + dd * length * 0.12 + down * r * 0.6, (r * 0.5, r * 0.4, r * 0.4))
    return union(r * 0.2, c, tub, ellipsoid(base, (r * 0.8, r * 0.6, r * 0.9))).displace(
        r * 0.03, 3 / r, seed=int(rng.integers(1e4)))


def quad_limb(add, side, sg, top, mid, bot, r, rng, name_up, name_lo, coll, prox='ball', crest=None, olecranon=None,
              head_dir=None, flat=1.0, lo_pair=True, lo_name2=None):
    """Upper + lower (paired) segment for quadrupeds."""
    lat = V([0, sg, 0])
    C = [coll, f'{coll}_{side}']
    up = long_bone(top, mid, r * 1.8, r, r * 1.6, lat, prox=prox, dist='condyles', head_dir=head_dir,
                   head_off=r * 0.9 if prox == 'ball' else None, head_r=r * 1.2, flat=flat,
                   crests=crest or [], seed=int(rng.integers(1e4)))
    add(name_up, C, up, max(0.001, r * 0.1), weight=1.1, min_tris=1100)
    ex = [sphere(olecranon, r * 0.6)] if olecranon is not None else []
    lo = long_bone(mid + V([0, 0, -r * 0.6]), bot, r * 1.6, r * 0.85, r * 1.3, lat, prox='plateau', dist='flat',
                   extra=ex, crests=[] if olecranon is not None else [(0.02, 0.28, V([1, 0, 0]), r * 0.6, r * 0.6)],
                   seed=int(rng.integers(1e4)))
    add(name_lo, C, lo, max(0.001, r * 0.09), min_tris=900)
    if lo_pair:
        lo2 = long_bone(mid + lat * r * 1.0 + V([-r * 0.3, 0, -r * 1.0]), bot + lat * r * 0.8 + V([0, 0, r]),
                        r * 0.8, r * 0.45, r * 0.7, lat, prox='none', dist='flat', seed=int(rng.integers(1e4)))
        add(lo_name2, C, lo2, max(0.0008, r * 0.07), min_tris=500)


def hoofed_foot(W, sg, n_toes, mt_len, toe_len, r, rng, spread=40, heel=False, hoof=True, claw=None):
    """Short broad foot of a large quadruped: tarsal/carpal block, short stout
    metapodials in a fan, phalanges ending in flat hoof-like unguals."""
    parts = [carpal_block(W + V([0, 0, -r * 0.8]), (r * 2.2, r * 2.4, r), np.eye(3), n=4, rng=rng)]
    if heel:
        parts.append(ellipsoid(W + V([-r * 2.2, 0, -r * 0.8]), (r * 1.3, r * 0.9, r * 1.0), rot((0, 1, 0), 0.4)))
    for i in range(n_toes):
        a = np.radians(np.interp(i, [0, max(n_toes - 1, 1)], [-spread, spread]) if n_toes > 1 else 0) * sg
        dd = V([np.cos(a), np.sin(a), 0])
        b0 = W + V([r * 0.6, 0, -r * 1.6]) + dd * r * 0.8
        b1 = b0 + norm(dd * 0.8 + V([0, 0, -1])) * mt_len
        pts = [b0, b1]
        for q in range(2):
            pts.append(pts[-1] + norm(dd + V([0, 0, -0.3])) * toe_len / 2)
        for p in pts:
            p[2] = max(p[2], r * 0.45)
        rr = r * (1.0 if 0 < i < n_toes - 1 else 0.8)
        kw = {}
        if hoof:
            kw['hoof'] = {'radii': (rr * 1.1, rr * 1.2, rr * 0.45)}
        if claw:
            kw['claw'] = {'length': claw, 'r': rr * 0.7}
        parts.append(digit(pts, [rr * 1.1, rr, rr * 0.85, rr * 0.75], knuckle=1.2, seed=int(rng.integers(1e4)), **kw))
    return union(r * 0.25, *parts)
