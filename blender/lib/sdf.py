"""Signed-distance modelling kit for organic bones.

Each Shape carries a vectorised distance function f(P) -> d (P is (N,3), metres)
plus a conservative bounding box, so every bone can be meshed on its own
tight grid with marching cubes.
"""
import numpy as np
from skimage.measure import marching_cubes

V = np.asarray


def norm(v):
    v = V(v, float)
    return v / np.linalg.norm(v)


def frame(x_axis, up=(0, 0, 1)):
    """Orthonormal 3x3 whose columns are local X (along x_axis), Y, Z."""
    x = norm(x_axis)
    up = V(up, float)
    if abs(np.dot(x, norm(up))) > 0.98:
        up = V((0, 1, 0), float) if abs(x[1]) < 0.9 else V((1, 0, 0), float)
    y = norm(np.cross(up, x))
    z = np.cross(x, y)
    return np.stack([x, y, z], axis=1)


def rot(axis, ang):
    axis = norm(axis)
    a, b, c = axis
    s, co = np.sin(ang), np.cos(ang)
    t = 1 - co
    return V([[t*a*a+co, t*a*b-s*c, t*a*c+s*b],
              [t*a*b+s*c, t*b*b+co, t*b*c-s*a],
              [t*a*c-s*b, t*b*c+s*a, t*c*c+co]])


# ----------------------------------------------------------------- noise ---
class Noise:
    """Seeded 3D value noise with smooth interpolation (vectorised)."""

    def __init__(self, seed=0):
        rng = np.random.default_rng(seed)
        self.perm = np.concatenate([rng.permutation(256)] * 2)
        self.vals = rng.uniform(-1, 1, 256)

    def _h(self, i, j, k):
        p = self.perm
        return self.vals[p[p[p[i & 255] + (j & 255)] + (k & 255)]]

    def __call__(self, P):
        Pi = np.floor(P).astype(np.int64)
        f = P - Pi
        u = f * f * f * (f * (f * 6 - 15) + 10)
        i, j, k = Pi[:, 0], Pi[:, 1], Pi[:, 2]
        out = 0.0
        for di in (0, 1):
            wx = u[:, 0] if di else 1 - u[:, 0]
            for dj in (0, 1):
                wy = u[:, 1] if dj else 1 - u[:, 1]
                for dk in (0, 1):
                    wz = u[:, 2] if dk else 1 - u[:, 2]
                    out = out + wx * wy * wz * self._h(i + di, j + dj, k + dk)
        return out

    def fbm(self, P, octaves=3):
        amp, tot, s = 1.0, 0.0, 0.0
        for o in range(octaves):
            tot = tot + amp * self(P * (2 ** o) + o * 17.13)
            s += amp
            amp *= 0.5
        return tot / s


NOISE = Noise(7)


# ------------------------------------------------------------ smooth ops ---
def smin(a, b, k):
    if k <= 0:
        return np.minimum(a, b)
    h = np.clip(0.5 + 0.5 * (b - a) / k, 0, 1)
    return b + (a - b) * h - k * h * (1 - h)


def smax(a, b, k):
    return -smin(-a, -b, k)


class Shape:
    def __init__(self, f, lo, hi):
        self.f, self.lo, self.hi = f, V(lo, float), V(hi, float)

    def __call__(self, P):
        return self.f(P)

    # hard union
    def __or__(self, o):
        return union(0, self, o)

    def sub(self, o, k=0.0):
        a = self
        return Shape(lambda P: smax(a(P), -o(P), k), a.lo, a.hi)

    def inter(self, o, k=0.0):
        a = self
        return Shape(lambda P: smax(a(P), o(P), k),
                     np.maximum(a.lo, o.lo), np.minimum(a.hi, o.hi))

    def displace(self, amp, freq, seed=0, octaves=3):
        """Organic irregularity: low-frequency bumps + asymmetry."""
        a = self
        off = V([seed * 13.7, seed * 7.3, seed * 3.1])
        return Shape(lambda P: a(P) + amp * NOISE.fbm(P * freq + off, octaves),
                     a.lo - amp, a.hi + amp)

    def detail(self, amp, freq, seed=0):
        """Scan-like bony micro-relief: ridged noise (sharp crests, pits)."""
        if amp <= 0:
            return self
        a = self
        off = V([seed * 5.1, seed * 11.9, seed * 2.7])

        def f(P):
            n = NOISE.fbm(P * freq + off, 2)
            return a(P) + amp * (np.abs(n) * 2.0 - 0.5)
        return Shape(f, a.lo - amp, a.hi + amp)

    def grow(self, r):
        a = self
        return Shape(lambda P: a(P) - r, a.lo - r, a.hi + r)


def union(k, *shapes):
    shapes = [s for s in shapes if s is not None]

    def f(P):
        d = shapes[0](P)
        for s in shapes[1:]:
            d = smin(d, s(P), k)
        return d
    lo = np.min([s.lo for s in shapes], axis=0) - k
    hi = np.max([s.hi for s in shapes], axis=0) + k
    return Shape(f, lo, hi)


# ------------------------------------------------------------ primitives ---
def sphere(c, r):
    c = V(c, float)
    return Shape(lambda P: np.linalg.norm(P - c, axis=1) - r, c - r, c + r)


def _obb_bounds(c, R, half):
    corners = np.array([[sx, sy, sz] for sx in (-1, 1) for sy in (-1, 1) for sz in (-1, 1)]) * half
    w = corners @ R.T + c
    return w.min(0), w.max(0)


def ellipsoid(c, radii, R=None):
    c, r = V(c, float), V(radii, float)
    R = np.eye(3) if R is None else V(R, float)

    def f(P):
        q = (P - c) @ R
        k0 = np.linalg.norm(q / r, axis=1)
        k1 = np.linalg.norm(q / (r * r), axis=1)
        return np.where(k1 > 1e-9, k0 * (k0 - 1) / np.maximum(k1, 1e-9), -r.min())
    lo, hi = _obb_bounds(c, R, r)
    return Shape(f, lo, hi)


def box(c, half, R=None, rnd=0.0):
    c, h = V(c, float), V(half, float)
    R = np.eye(3) if R is None else V(R, float)

    def f(P):
        q = np.abs((P - c) @ R) - (h - rnd)
        return np.linalg.norm(np.maximum(q, 0), axis=1) + np.minimum(q.max(1), 0) - rnd
    lo, hi = _obb_bounds(c, R, h)
    return Shape(f, lo, hi)


def round_cone(a, b, r1, r2):
    """Exact SDF of a capsule whose radius goes r1 (at a) -> r2 (at b)."""
    a, b = V(a, float), V(b, float)
    ba = b - a
    l2 = float(ba @ ba)
    rr = r1 - r2
    a2 = l2 - rr * rr
    il2 = 1.0 / l2

    def f(P):
        pa = P - a
        y = pa @ ba
        z = y - l2
        x2v = pa * l2 - np.outer(y, ba)
        x2 = np.einsum('ij,ij->i', x2v, x2v)
        y2 = y * y * l2
        z2 = z * z * l2
        k = np.sign(rr) * rr * rr * x2
        d_mid = (np.sqrt(np.maximum(x2 * a2 * il2, 0)) + y * rr) * il2 - r1
        d_b = np.sqrt(x2 + z2) * il2 - r2
        d_a = np.sqrt(x2 + y2) * il2 - r1
        return np.where(np.sign(z) * a2 * z2 > k, d_b,
                        np.where(np.sign(y) * a2 * y2 < k, d_a, d_mid))
    rm = max(r1, r2)
    return Shape(f, np.minimum(a, b) - rm, np.maximum(a, b) + rm)


def tube(pts, radii, k=0.0):
    """Swept round-cone chain through pts with per-point radii."""
    pts = [V(p, float) for p in pts]
    radii = list(radii) if np.ndim(radii) else [radii] * len(pts)
    segs = [round_cone(pts[i], pts[i + 1], radii[i], radii[i + 1]) for i in range(len(pts) - 1)]
    return union(k, *segs)


def flat_tube(pts, radii, flat, up, k=0.0):
    """Tube with elliptical section: squashed by `flat` (<1) along `up`-derived normal.
    Implemented by scaling space perpendicular to the path plane."""
    up = norm(up)
    base = tube(pts, radii, k)
    S = np.eye(3) + (1.0 / flat - 1.0) * np.outer(up, up)
    c = np.mean([V(p) for p in pts], axis=0)

    def f(P):
        return base((P - c) @ S.T + c) * flat
    return Shape(f, base.lo, base.hi)


def bezier(p0, p1, p2, n=12, p3=None):
    t = np.linspace(0, 1, n)[:, None]
    p0, p1, p2 = V(p0, float), V(p1, float), V(p2, float)
    if p3 is None:
        return list((1 - t) ** 2 * p0 + 2 * (1 - t) * t * p1 + t * t * p2)
    p3 = V(p3, float)
    return list((1 - t) ** 3 * p0 + 3 * (1 - t) ** 2 * t * p1 + 3 * (1 - t) * t * t * p2 + t ** 3 * p3)


def transformed(shape, R=None, t=(0, 0, 0), pivot=(0, 0, 0)):
    """Rigidly move a shape: P_world = R (P_local - pivot) + pivot + t."""
    R = np.eye(3) if R is None else V(R, float)
    t, pv = V(t, float), V(pivot, float)

    def f(P):
        return shape((P - pv - t) @ R + pv)
    lo, hi = _obb_bounds((shape.lo + shape.hi) / 2 - pv, R, (shape.hi - shape.lo) / 2)
    return Shape(f, lo + pv + t, hi + pv + t)


def mirror_y(shape):
    def f(P):
        Q = P.copy()
        Q[:, 1] = np.abs(Q[:, 1])
        return shape(Q)
    lo, hi = shape.lo.copy(), shape.hi.copy()
    m = max(abs(lo[1]), abs(hi[1]))
    lo[1], hi[1] = -m, m
    return Shape(f, lo, hi)


# --------------------------------------------------------------- meshing ---
def mesh(shape, voxel, pad=2, chunk=1 << 20):
    lo = shape.lo - pad * voxel
    hi = shape.hi + pad * voxel
    n = np.ceil((hi - lo) / voxel).astype(int) + 1
    n = np.minimum(n, 400)
    xs = [np.linspace(lo[i], hi[i], n[i]) for i in range(3)]
    step = V([(hi[i] - lo[i]) / (n[i] - 1) for i in range(3)])
    G = np.stack(np.meshgrid(*xs, indexing='ij'), -1).reshape(-1, 3)
    d = np.empty(len(G))
    for s in range(0, len(G), chunk):
        d[s:s + chunk] = shape(G[s:s + chunk])
    d = d.reshape(n)
    # close the volume at the grid boundary
    d[0, :, :] = d[-1, :, :] = d[:, 0, :] = d[:, -1, :] = d[:, :, 0] = d[:, :, -1] = abs(voxel)
    if d.min() >= 0:
        return None, None
    verts, faces, _, _ = marching_cubes(d, 0.0, spacing=tuple(step))
    return verts + lo, faces[:, ::-1]


# ------------------------------------------------------------ 2D plates ---
def poly2d(p, v):
    """Signed distance from 2D points p (N,2) to polygon v (M,2)."""
    d = np.sum((p - v[0]) ** 2, axis=1)
    s = np.ones(len(p))
    n = len(v)
    for i in range(n):
        j = i - 1
        e = v[j] - v[i]
        w = p - v[i]
        t = np.clip((w @ e) / (e @ e), 0, 1)
        b = w - np.outer(t, e)
        d = np.minimum(d, np.sum(b * b, axis=1))
        c1 = p[:, 1] >= v[i][1]
        c2 = p[:, 1] < v[j][1]
        c3 = e[0] * w[:, 1] > e[1] * w[:, 0]
        allc = c1 & c2 & c3
        nonec = ~c1 & ~c2 & ~c3
        s = np.where(allc | nonec, -s, s)
    return s * np.sqrt(d)


def plate(origin, R, poly, t_center, t_edge=None, falloff=None, rnd=0.0):
    """Organic flat bone: polygon (local u,v) extruded along local w with a
    thickness that swells from t_edge at the rim to t_center inside."""
    o, R = V(origin, float), V(R, float)
    poly = V(poly, float)
    t_edge = t_center * 0.35 if t_edge is None else t_edge
    span = np.ptp(poly, axis=0).min()
    falloff = span * 0.35 if falloff is None else falloff

    def f(P):
        q = (P - o) @ R
        d2 = poly2d(q[:, :2], poly) + rnd
        s = np.clip(-d2 / falloff, 0, 1)
        s = s * s * (3 - 2 * s)
        th = t_edge + (t_center - t_edge) * s
        dz = np.abs(q[:, 2]) - th
        out = np.linalg.norm(np.stack([np.maximum(d2, 0), np.maximum(dz, 0)], 1), axis=1)
        return out + np.minimum(np.maximum(d2, dz), 0) - rnd
    mn, mx = poly.min(0), poly.max(0)
    c2 = (mn + mx) / 2
    half = V([(mx - mn)[0] / 2, (mx - mn)[1] / 2, t_center])
    lo, hi = _obb_bounds(o + R @ V([c2[0], c2[1], 0]), R, half)
    return Shape(f, lo, hi)


def ribbon(pts, width, thick, wdir, k=0.0):
    """Curved blade: elliptical section `width` along wdir (projected), `thick`
    across. width/thick may be scalars or per-point lists."""
    pts = [V(p, float) for p in pts]
    n = len(pts)
    W = list(width) if np.ndim(width) else [width] * n
    T = list(thick) if np.ndim(thick) else [thick] * n
    segs = []
    for i in range(n - 1):
        a, b = pts[i], pts[i + 1]
        x = norm(b - a)
        wd = V(wdir(i / max(n - 2, 1)) if callable(wdir) else wdir, float)
        wd = wd - (wd @ x) * x
        wd = norm(wd) if np.linalg.norm(wd) > 1e-6 else frame(x)[:, 1]
        z = np.cross(x, wd)
        R = np.stack([x, wd, z], 1)
        L = np.linalg.norm(b - a)
        w0, w1 = W[i], W[i + 1]
        ratio = ((w0 + w1) / 2) / ((T[i] + T[i + 1]) / 2)
        rc = round_cone((0, 0, 0), (L, 0, 0), w0, w1)

        def f(P, a=a, R=R, rc=rc, ratio=ratio):
            q = (P - a) @ R
            q[:, 2] *= ratio
            return rc(q) / ratio
        wm = max(w0, w1)
        segs.append(Shape(f, np.minimum(a, b) - wm, np.maximum(a, b) + wm))
    return union(k, *segs)


def custom(f, lo, hi):
    return Shape(f, lo, hi)
