"""Parametric bone generators. Every species calls these with its own
proportions and adds its own features — nothing here is a finished bone of a
particular animal. All units are metres; frames use X forward, Y left, Z up."""
import numpy as np
from sdf import (V, norm, frame, rot, sphere, ellipsoid, box, round_cone, tube,
                 ribbon, plate, union, smin, smax, Shape, bezier, mirror_y)


def local(c, fwd, up):
    """Return (R, L) where L(u, v, w) maps local coords to world."""
    fwd = norm(fwd)
    up = V(up, float)
    up = norm(up - (up @ fwd) * fwd)
    side = np.cross(up, fwd)
    R = np.stack([fwd, side, up], 1)
    c = V(c, float)
    return R, (lambda u, v=0.0, w=0.0: c + u * fwd + v * side + w * up)


# --------------------------------------------------------------- vertebra ---
def vertebra(c, fwd, up, p, rng):
    """p keys (all metres / radians):
    cr centrum radius, cl centrum length, ends 'flat'|'amphi'|'pro',
    canal canal radius, sl spine length, sw spine width (cranio-caudal),
    st spine thickness, tilt spine backward tilt, tl transverse length,
    tr transverse radius, tu transverse rise, tb transverse back offset,
    zyg zygapophysis size, hypo hypapophysis length, chevron chevron length,
    pleuro pleurocoel depth factor, wings lateral wing (snakes), knob spine tip knob."""
    j = lambda x, a=0.06: x * (1 + rng.uniform(-a, a))
    cr, cl = j(p['cr'], 0.04), j(p['cl'], 0.04)
    canal = p.get('canal', cr * 0.45)
    R, L = local(c, fwd, up)
    fwd = R[:, 0]
    upv = R[:, 2]
    parts = []
    # centrum: waisted spool
    parts.append(tube([L(-cl / 2), L(0), L(cl / 2)], [cr, cr * 0.84, cr]))
    ends = p.get('ends', 'flat')
    if ends == 'pro':  # ball at the back (reptiles, snakes)
        parts.append(sphere(L(-cl / 2 - cr * 0.25, 0, cr * 0.05), cr * 0.72))
    body = union(cr * 0.2, *parts)
    if ends == 'amphi':
        body = body.sub(sphere(L(cl / 2 + cr * 2.2), cr * 2.3), cr * 0.1)
        body = body.sub(sphere(L(-cl / 2 - cr * 2.2), cr * 2.3), cr * 0.1)
    elif ends == 'pro':
        body = body.sub(sphere(L(cl / 2 + cr * 0.55, 0, cr * 0.05), cr * 0.78), cr * 0.05)
    elif ends == 'flat':
        body = body.sub(sphere(L(cl / 2 + cr * 5.5), cr * 5.55), cr * 0.05)
        body = body.sub(sphere(L(-cl / 2 - cr * 5.5), cr * 5.55), cr * 0.05)
    if p.get('pleuro'):
        for s in (-1, 1):
            body = body.sub(ellipsoid(L(0, s * cr * 1.05, cr * 0.1),
                                      (cl * 0.3, cr * p['pleuro'], cr * 0.45), R), cr * 0.1)

    # neural arch
    ah = cr + canal * 1.9
    arch = box(L(0, 0, cr * 0.55 + canal), (cl * 0.36, cr * 0.62, canal * 1.45), R, rnd=canal * 0.5)
    zc = cr * 0.7 + canal * 0.9
    canal_tube = tube([L(-cl, 0, zc), L(cl, 0, zc)], [canal, canal])
    extras = [arch]

    # neural spine (ribbon tilted backward)
    sl = j(p.get('sl', 0))
    if sl > 0:
        tilt = p.get('tilt', 0.3) + rng.uniform(-0.04, 0.04)
        d = norm(-np.sin(tilt) * fwd + np.cos(tilt) * upv)
        base = L(0, 0, ah - canal * 0.3)
        mid = base + d * sl * 0.5 - fwd * sl * p.get('curl', 0.0)
        tip = base + d * sl
        sw, st = p.get('sw', cl * 0.35), p.get('st', cr * 0.22)
        extras.append(ribbon([base, mid, tip], [sw * 1.1, sw * 0.8, sw * 0.7],
                             [st * 1.2, st, st * 0.9], fwd, k=0))
        if p.get('knob', 1.0):
            extras.append(ellipsoid(tip, (sw * 0.75, st * 1.6 * p.get('knob', 1.0), sw * 0.5), R))

    # transverse processes
    tl = p.get('tl', 0)
    if tl > 0:
        tr, tu, tb = p.get('tr', cr * 0.25), p.get('tu', cr * 0.4), p.get('tb', 0.0)
        for s in (-1, 1):
            a = L(0, s * cr * 0.5, cr * 0.7 + canal * 0.5)
            b = L(-tb, s * j(tl, 0.05), cr * 0.7 + canal * 0.5 + tu)
            extras.append(ribbon([a, (a + b) / 2, b], [tr * 1.3, tr, tr * 0.9],
                                 [tr * 0.7, tr * 0.55, tr * 0.6], fwd))
            extras.append(sphere(b, tr * 0.85))

    # zygapophyses (articular facets fore/aft)
    z = p.get('zyg', cr * 0.3)
    for s in (-1, 1):
        extras.append(ellipsoid(L(cl * 0.55, s * cr * 0.42, ah - canal * 0.2), (z * 1.2, z * 0.8, z * 0.45),
                                R @ rot((0, 1, 0), -0.3)))
        extras.append(ellipsoid(L(-cl * 0.55, s * cr * 0.42, ah - canal * 0.1), (z * 1.2, z * 0.8, z * 0.45),
                                R @ rot((0, 1, 0), 0.3)))

    if p.get('wings'):  # snake: broad lateral wings + zygosphene
        wv = p['wings']
        for s in (-1, 1):
            extras.append(ellipsoid(L(0, s * cr * 1.1, cr * 0.8), (cl * 0.55, wv, cr * 0.28), R))
        extras.append(box(L(cl * 0.5, 0, ah - canal * 0.3), (cl * 0.18, cr * 0.4, canal * 0.5), R, rnd=canal * 0.3))

    if p.get('hypo'):
        h = p['hypo']
        extras.append(ribbon([L(0, 0, -cr * 0.6), L(-h * 0.2, 0, -cr - h)], [cl * 0.18, cl * 0.08],
                             [cr * 0.15, cr * 0.1], fwd))

    if p.get('chevron'):
        ch = p['chevron']
        for s in (-1, 1):
            extras.append(tube([L(-cl * 0.45, s * cr * 0.35, -cr * 0.8), L(-cl * 0.55, s * cr * 0.15, -cr - ch * 0.4)],
                               [cr * 0.14, cr * 0.12]))
        extras.append(ribbon([L(-cl * 0.55, 0, -cr - ch * 0.4), L(-cl * 0.55 - ch * 0.35, 0, -cr - ch)],
                             [cr * 0.28, cr * 0.12], [cr * 0.1, cr * 0.06], fwd))

    v = union(cr * 0.18, body, *extras).sub(canal_tube, canal * 0.25)
    return v.displace(cr * 0.035, 3.0 / cr, seed=rng.integers(1000))


# ------------------------------------------------------------------- rib ---
def rib(head, tuber, pts, width, thick, wdir=(1, 0, 0), rng=None, seed=0):
    """Rib with capitulum (head) + tuberculum forking at the top then a
    curved blade through pts. width/thick lists along pts."""
    w0, t0 = width[0], thick[0]
    neck = ribbon([head, pts[0]], [w0 * 0.45, w0 * 0.6], [t0 * 0.8, t0], wdir)
    tub = ribbon([tuber, pts[0]], [w0 * 0.4, w0 * 0.55], [t0 * 0.8, t0], wdir)
    blade = ribbon(pts, width, thick, wdir)
    caps = [sphere(head, w0 * 0.42), sphere(tuber, w0 * 0.35)]
    r = union(w0 * 0.25, blade, neck, tub, *caps)
    return r.displace(t0 * 0.12, 1.2 / w0, seed=seed)


# --------------------------------------------------------------- long bones ---
def long_bone(p0, p1, r0, rs, r1, lat, prox='ball', dist='condyles', bow=0.0, bow_dir=None,
              flat=1.0, crests=(), seed=0, head_r=None, head_off=None, cond_sep=None, head_dir=None,
              extra=()):
    """Generic appendicular bone from p0 (proximal) to p1 (distal).
    lat: lateral direction (away from body midline).
    prox: 'ball' (femur/humerus head offset medially), 'plateau' (tibia),
          'cup' (radius/ulna), 'none'.
    dist: 'condyles' (two rounded knuckles), 'pulley', 'flat', 'none'."""
    p0, p1 = V(p0, float), V(p1, float)
    ax = norm(p1 - p0)
    lat = V(lat, float)
    lat = norm(lat - (lat @ ax) * ax)
    fwd = np.cross(lat, ax)  # anterior-ish
    L = np.linalg.norm(p1 - p0)
    bd = norm(V(bow_dir, float)) if bow_dir is not None else fwd
    pts, rad = [], []
    prof = [(0.0, r0 * 0.9), (0.12, rs * 1.35), (0.3, rs * 1.02), (0.5, rs), (0.7, rs * 1.05), (0.88, rs * 1.35), (1.0, r1 * 0.9)]
    for t, r in prof:
        pts.append(p0 + (p1 - p0) * t + bd * bow * L * np.sin(np.pi * t))
        rad.append(r)
    wdir = fwd if flat >= 1 else lat
    shaft = ribbon(pts, rad, [r * min(flat, 1.0 / flat) if flat != 1 else r for r in rad], wdir)
    parts = [shaft]
    # proximal end
    if prox == 'ball':
        hr = head_r or r0 * 0.85
        ho = head_off if head_off is not None else r0 * 0.55
        hd = norm(V(head_dir, float)) if head_dir is not None else -lat
        hc = p0 + hd * ho + ax * hr * 0.15
        parts.append(sphere(hc, hr))
        parts.append(ellipsoid(p0 + ax * r0 * 0.4, (r0 * 1.05, r0 * 0.9, r0 * 0.8), frame(lat, ax)))
    elif prox == 'plateau':
        parts.append(ellipsoid(p0 + ax * r0 * 0.35, (r0 * 1.1, r0 * 0.75, r0 * 1.0), frame(lat, ax)))
    elif prox == 'cup':
        parts.append(ellipsoid(p0 + ax * r0 * 0.4, (r0, r0 * 0.6, r0 * 0.9), frame(lat, ax)))
    # distal end
    if dist in ('condyles', 'pulley'):
        sep = cond_sep or r1 * 0.55
        cr = r1 * (0.62 if dist == 'condyles' else 0.55)
        for s in (-1, 1):
            parts.append(sphere(p1 - ax * cr * 0.55 + lat * s * sep + fwd * (-cr * 0.1), cr))
        parts.append(ellipsoid(p1 - ax * r1 * 0.55, (r1 * 1.05, r1 * 0.7, r1 * 0.8), frame(lat, ax)))
    elif dist == 'flat':
        parts.append(ellipsoid(p1 - ax * r1 * 0.35, (r1 * 1.05, r1 * 0.8, r1 * 0.55), frame(lat, ax)))
    for (t0, t1, d, h, w) in crests:
        a = p0 + (p1 - p0) * t0
        b = p0 + (p1 - p0) * t1
        dd = norm(d)
        mid = (a + b) / 2 + dd * (rs + h)
        parts.append(ribbon([a + dd * rs * 0.6, mid, b + dd * rs * 0.5], [w, w * 1.1, w * 0.6],
                            [h * 0.5, h * 0.6, h * 0.35], ax))
    parts.extend(extra)
    bone = union(rs * 0.35, *parts)
    if prox == 'plateau':
        bone = bone.sub(ellipsoid(p0 - ax * r0 * 0.55, (r0 * 0.9, r0 * 0.45, r0 * 0.7), frame(lat, ax)), r0 * 0.1)
    if prox == 'cup':
        bone = bone.sub(sphere(p0 - ax * r0 * 0.9, r0 * 0.95), r0 * 0.1)
    if dist == 'pulley':
        bone = bone.sub(ellipsoid(p1 + ax * r1 * 0.05, (r1 * 0.3, r1 * 1.3, r1 * 0.3), frame(lat, ax)), r1 * 0.1)
    return bone.displace(rs * 0.05, 1.6 / rs, seed=seed)


# --------------------------------------------------------------- digits ---
def digit(pts, radii, knuckle=1.25, claw=None, hoof=None, seed=0):
    """Chain of phalanges: each segment a waisted bone with knuckle bulges
    at the joints; optional claw (curved cone) or hoof/nail tip."""
    parts = []
    for i in range(len(pts) - 1):
        a, b = V(pts[i], float), V(pts[i + 1], float)
        r0, r1 = radii[i], radii[i + 1]
        gap = norm(b - a) * min(r0, r1) * 0.12
        a2, b2 = a + gap, b - gap
        m = (a2 + b2) / 2
        parts.append(tube([a2, m, b2], [r0 * knuckle * 0.85, (r0 + r1) / 2 * 0.72, r1 * knuckle * 0.82]))
    if claw:
        a = V(pts[-1], float)
        d = norm(V(pts[-1]) - V(pts[-2]))
        down = V(claw.get('down', (0, 0, -1)), float)
        length, r = claw['length'], claw['r']
        cpts = bezier(a, a + d * length * 0.6, a + d * length * 0.9 + down * length * 0.45, n=7)
        parts.append(ribbon(cpts, list(np.linspace(r, r * 0.08, 7)), list(np.linspace(r * 0.7, r * 0.05, 7)), down))
    if hoof:
        a = V(pts[-1], float)
        parts.append(ellipsoid(a, hoof['radii'], hoof.get('R')))
    return union(min(radii) * 0.3, *parts).displace(min(radii) * 0.05, 1.0 / min(radii), seed=seed)


def carpal_block(c, radii, R, n=6, rng=None, seed=0):
    """Cluster of small irregular carpal/tarsal bones packed in an ellipsoid."""
    rng = rng or np.random.default_rng(seed)
    c = V(c, float)
    parts = []
    for i in range(n):
        u = rng.uniform(-0.7, 0.7, 3)
        u[2] *= 0.6
        rr = V(radii) * rng.uniform(0.3, 0.45, 3)
        parts.append(ellipsoid(c + R @ (u * V(radii)), rr, R @ rot(rng.normal(size=3), rng.uniform(0, 0.6))))
    return union(min(radii) * 0.08, *parts).displace(min(radii) * 0.04, 2.5 / min(radii), seed=seed)
