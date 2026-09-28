"""Titanoboa — Titanoboa cerrejonensis (13 m, ~1 tonne).

Silhouette: le plus grand serpent connu; colonne de ~200 vertèbres massives
avec une côte chacune; petit crâne très mobile aux dents recourbées.
Repetitive vertebrae/ribs are linked duplicates of a few variants (instancing)
scaled to follow the body taper, so the file and the game stay light.
Units: metres, X forward (head), Y left, Z up.
"""
import numpy as np
from scipy.interpolate import CubicSpline
from sdf import (V, norm, frame, rot, sphere, ellipsoid, box, tube, ribbon, plate,
                 union, bezier, mirror_y, custom, round_cone)
from anat import vertebra, local

P = 'TBOA'
N_VERT = 200          # vertebrae (catalogue: ~250 — 200 keeps the silhouette at 13 m)
N_TRUNK_END = 172     # last rib-bearing vertebra (cloaca); caudals follow
SPEC = dict(
    key='Titanoboa', budget=120000,
    base='#D6C4A0', dark='#8C7352',
    pieces={
        'Crane': [f'{P}_skull'],
        'Maxillaire': [f'{P}_maxilla_L'],
        'Machoire': [f'{P}_mandible_L', f'{P}_mandible_R'],
        'Dent': [f'{P}_tooth_maxilla_L_04'],
        'Carre': [f'{P}_quadrate_L'],
        'Pterygoide': [f'{P}_pterygoid_L'],
        'Atlas': [f'{P}_vertebra_001'],
        'Cervicale': [f'{P}_vertebra_006'],
        'Vertebre': [f'{P}_vertebra_090'],
        'Cote': [f'{P}_rib_L_090'],
        'Caudale': [f'{P}_vertebra_180'],
        'Queue': [f'{P}_vertebra_{i:03d}' for i in range(186, 193)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible_L', f'{P}_mandible_R', f'{P}_maxilla_L', f'{P}_quadrate_L',
                        f'{P}_vertebra_001', f'{P}_vertebra_002', f'{P}_vertebra_003']},
    closeup_dir=(0.6, -1.0, 0.4),
    views={'34': (0.45, -1.0, 0.55), 'side': (0.0, -1.0, 0.05), 'top': (0.05, -0.25, 1.0)},
)


def body_curve():
    """13 m S-curve lying on the ground with a raised neck, gentle vertical
    arches (as in the catalogue profile) and lateral undulation."""
    u = np.linspace(0, 1, 400)
    x = -u * 11.0
    y = 0.95 * np.sin(2 * np.pi * (1.55 * u + 0.1)) * np.clip(u * 6, 0, 1) * (1 - 0.4 * u)
    z = (0.42 + 0.28 * np.sin(2 * np.pi * 2.2 * u + 0.6) * (1 - u) ** 0.5
         + 0.5 * np.exp(-(u / 0.07) ** 2) - 0.25 * u ** 3)
    pts = np.stack([x, y, z], 1)
    # rescale x so the arc length is 13 m
    for _ in range(6):
        L = np.sum(np.linalg.norm(np.diff(pts, axis=0), axis=1))
        pts[:, 0] *= (13.0 / L) ** 1.2
    s = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(pts, axis=0), axis=1))])
    return s[-1], [CubicSpline(s, pts[:, k]) for k in range(3)]


LEN, CURVE = body_curve()


def at(s):
    return V([c(s) for c in CURVE]), norm(V([c(s, 1) for c in CURVE]))


def up_of(fwd):
    side = norm(np.cross(V([0, 0, 1]), fwd))
    return norm(np.cross(fwd, side))


def size_at(t):
    """Centrum radius along the body (t: 0 head -> 1 tail tip)."""
    return float(np.interp(t, [0, 0.03, 0.12, 0.3, 0.7, 0.86, 0.9, 1.0],
                           [0.022, 0.03, 0.043, 0.05, 0.05, 0.036, 0.028, 0.006]))


def M_of(c, fwd, up, s=1.0):
    R = np.stack([fwd, np.cross(up, fwd), up], 1) * s
    M = np.eye(4)
    M[:3, :3] = R
    M[:3, 3] = c
    return M


def snake_vert(c, fwd, up, cr, kind, rng):
    cl = cr * 1.35
    p = dict(cr=cr, cl=cl, ends='pro', canal=cr * 0.32, sl=cr * 0.55, tilt=0.35, sw=cl * 0.45, st=cr * 0.16,
             tl=cr * 0.95, tr=cr * 0.26, tu=-cr * 0.35, zyg=cr * 0.42, wings=cr * 0.75, knob=0.5)
    if kind == 'atlas':
        p.update(sl=0, wings=0, tl=cr * 0.8, cl=cr * 0.7, ends='flat')
    elif kind == 'cervical':
        p.update(hypo=cr * 0.9)
    elif kind == 'caudal':
        p.update(tl=cr * 1.25, tu=-cr * 0.1, wings=cr * 0.4, chevron=cr * 1.1)  # forked ventral processes
    return vertebra(c, fwd, up, p, rng), cl


def snake_rib(c, fwd, up, cr, sg, seed):
    side = np.cross(up, fwd) * sg
    L = cr * 12.0          # ~60 cm for the largest vertebrae
    head = c + side * cr * 0.95 - up * cr * 0.35
    pts = bezier(head, head + side * L * 0.45 + up * L * 0.05 - fwd * L * 0.05,
                 head + side * L * 0.55 - up * L * 0.55 - fwd * L * 0.15, n=9,
                 p3=head + side * L * 0.2 - up * L * 0.85 - fwd * L * 0.2)
    W = list(np.linspace(cr * 0.24, cr * 0.1, 9))
    T = list(np.linspace(cr * 0.18, cr * 0.07, 9))
    r = union(cr * 0.1, ribbon(pts, W, T, fwd), ellipsoid(head, (cr * 0.2, cr * 0.25, cr * 0.22)))
    return r.displace(cr * 0.02, 5 / cr, seed=seed)


def bones():
    rng = np.random.default_rng(31)
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    # vertebra positions
    radii = [size_at(i / (N_VERT - 1)) for i in range(N_VERT)]
    lens = [r * 1.35 for r in radii]
    k = (LEN - 0.05) / (sum(lens) + 0.004 * (N_VERT - 1))
    s = 0.03
    frames = []
    for i in range(N_VERT):
        if i:
            s += (lens[i - 1] + lens[i]) * k / 2 + 0.004 * k
        c, t = at(s)
        fwd = -t
        frames.append((c, fwd, up_of(fwd), radii[i] * k))

    # variants: every VAR-th vertebra is modelled; the others are scaled instances
    VAR = 12
    src_of = {}
    for i, (c, fwd, up, cr) in enumerate(frames):
        n = i + 1
        kind = 'atlas' if n == 1 else 'cervical' if n <= 14 else 'trunk' if n <= N_TRUNK_END else 'caudal'
        coll = {'atlas': 'SPINE_cervical', 'cervical': 'SPINE_cervical', 'trunk': 'SPINE_dorsal',
                'caudal': 'SPINE_tail'}[kind]
        unique = n <= 3 or n in (6, 90, 180) or (n - 1) % VAR == 0 or kind != src_of.get('kind')
        if unique:
            sh, _ = snake_vert(c, fwd, up, cr, kind, rng)
            add(f'vertebra_{n:03d}', ['SPINE', coll], sh, max(0.0025, cr * 0.09), min_tris=170)
            src_of.update(name=f'{P}_vertebra_{n:03d}', M=M_of(c, fwd, up, cr), kind=kind)
        else:
            B.append(dict(name=f'{P}_vertebra_{n:03d}', coll=['SPINE', coll], instance_of=src_of['name'],
                          M_src=src_of['M'], M=M_of(c, fwd, up, cr)))
    # ribs (one pair per trunk vertebra), also instanced per variant
    rib_src = {}
    for i in range(3, N_TRUNK_END):
        c, fwd, up, cr = frames[i]
        n = i + 1
        for side, sg in (('L', 1), ('R', -1)):
            unique = n in (90,) or (n - 3) % VAR == 0 or side not in rib_src
            name = f'{P}_rib_{side}_{n:03d}'
            coll = ['RIBCAGE', f'RIBCAGE_{side}']
            if unique:
                add(f'rib_{side}_{n:03d}', coll, snake_rib(c, fwd, up, cr, sg, int(rng.integers(1e4))),
                    max(0.0022, cr * 0.07), min_tris=110)
                rib_src[side] = (name, M_of(c, fwd, up, cr))
            else:
                B.append(dict(name=name, coll=coll, instance_of=rib_src[side][0], M_src=rib_src[side][1],
                              M=M_of(c, fwd, up, cr)))

    # ------------------------------------------------------------ skull ---
    c0, f0, u0, _ = frames[0]
    O = c0 + f0 * 0.035
    d = norm(f0 + V([0, 0, -0.15]))
    R, L = local(O, d, (0, 0, 1))
    add('skull', ['SKULL'], skull(R, L), 0.0022, weight=1.6, min_tris=3500)
    for side, sg in (('L', 1), ('R', -1)):
        add(f'maxilla_{side}', ['SKULL'], maxilla(R, L, sg), 0.0016, min_tris=500)
        add(f'pterygoid_{side}', ['SKULL'], pterygoid(R, L, sg), 0.0016, min_tris=500)
        add(f'quadrate_{side}', ['SKULL'], quadrate(R, L, sg), 0.0016, min_tris=300)
        add(f'mandible_{side}', ['SKULL'], mandible(R, L, sg), 0.0018, weight=1.2, min_tris=900)
        B.extend(teeth(R, L, sg, side, rng))
    return B


# ----------------------------------------------------------------- skull ---
def skull(R, L):
    """Boa-like skull roof + braincase (~40 cm incl. jaws), rounded snout,
    big orbits, no temporal arches."""
    Rp = R @ np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1)
    prof = [(-0.01, -0.02), (0.0, 0.045), (0.08, 0.06), (0.17, 0.055), (0.26, 0.045), (0.31, 0.03), (0.33, 0.0),
            (0.31, -0.02), (0.2, -0.03), (0.08, -0.035)]
    core = plate(L(0), Rp, prof, t_center=0.05, t_edge=0.015, falloff=0.03, rnd=0.006)
    parts = [core, ellipsoid(L(0.05, 0, 0.0), (0.07, 0.045, 0.04), R),       # braincase
             ellipsoid(L(-0.012, 0, -0.015), (0.012, 0.016, 0.012), R)]      # condyle
    for sg in (-1, 1):
        parts.append(tube([L(0.02, sg * 0.03, 0.03), L(-0.04, sg * 0.05, 0.035)], [0.008, 0.006]))   # supratemporal
    sk = union(0.006, *parts)
    for sg in (-1, 1):
        sk = sk.sub(ellipsoid(L(0.19, sg * 0.05, 0.02), (0.035, 0.03, 0.026), R), 0.004)   # orbit
        sk = sk.sub(ellipsoid(L(0.3, sg * 0.02, 0.02), (0.02, 0.014, 0.012), R), 0.003)    # naris
    return sk.displace(0.001, 70, seed=5, octaves=4)


def maxilla(R, L, sg):
    return ribbon([L(0.31, sg * 0.03, -0.02), L(0.22, sg * 0.05, -0.028), L(0.1, sg * 0.055, -0.03)],
                  [0.012, 0.011, 0.008], [0.006, 0.006, 0.005], R[:, 2]).displace(0.0006, 120, seed=40 + sg)


def pterygoid(R, L, sg):
    return ribbon([L(0.24, sg * 0.018, -0.03), L(0.1, sg * 0.03, -0.035), L(-0.05, sg * 0.05, -0.04)],
                  [0.008, 0.009, 0.006], [0.005, 0.005, 0.004], R[:, 1]).displace(0.0005, 140, seed=50 + sg)


def quadrate(R, L, sg):
    """Mobile rod hanging from the supratemporal down to the jaw joint."""
    a, b = L(-0.035, sg * 0.05, 0.035), L(-0.06, sg * 0.06, -0.06)
    return union(0.003, tube([a, b], [0.007, 0.009]), ellipsoid(b, (0.01, 0.012, 0.008), R)).displace(
        0.0005, 140, seed=60 + sg)


def mandible(R, L, sg):
    """Two unfused halves (ligament at the chin), long compound bone reaching
    back to the quadrate."""
    pts = [L(-0.06, sg * 0.062, -0.065), L(0.05, sg * 0.06, -0.05), L(0.18, sg * 0.05, -0.045),
           L(0.3, sg * 0.02, -0.04)]
    m = ribbon(pts, [0.012, 0.016, 0.012, 0.008], [0.006, 0.007, 0.006, 0.005], R[:, 2])
    m = union(0.003, m, ribbon([L(0.08, sg * 0.058, -0.045), L(0.1, sg * 0.058, -0.025)], [0.01, 0.005],
                               [0.004, 0.003], R[:, 0]))                                    # coronoid
    return m.displace(0.0006, 120, seed=70 + sg)


def hook_tooth(base, down, back, h, seed):
    """Thin recurved fang (non-venomous), curving back toward the throat."""
    mid = base + down * h * 0.6 + back * h * 0.12
    tip = base + down * h * 0.9 + back * h * 0.45
    return tube([base, mid, tip], [h * 0.14, h * 0.09, h * 0.015]).displace(h * 0.01, 10 / h, seed=seed)


def teeth(R, L, sg, side, rng):
    out = []
    down, back = -R[:, 2], -R[:, 0]
    rows = [('maxilla', 18, 0.305, 0.1, sg * 0.032, sg * 0.055, -0.034, down),
            ('pterygoid', 12, 0.23, 0.05, sg * 0.02, sg * 0.04, -0.038, down),
            ('dentary', 18, 0.29, 0.06, sg * 0.022, sg * 0.056, -0.043, -down)]
    for jaw, n, u0, u1, y0, y1, zz, dd in rows:
        src = None
        for k in range(n):
            t = k / (n - 1)
            base = L(u0 + (u1 - u0) * t, y0 + (y1 - y0) * t, zz)
            h = 0.02 * (1 - 0.35 * t) * (0.8 if jaw == 'pterygoid' else 1.0)
            name = f'{P}_tooth_{jaw}_{side}_{k + 1:02d}'
            Rt = np.stack([back, np.cross(dd, back), dd], 1)
            M = np.eye(4)
            M[:3, :3] = Rt * h
            M[:3, 3] = base
            if src is None or k == 3:
                out.append(dict(name=name, coll=['SKULL', 'SKULL_teeth'], shape=hook_tooth(base, dd, back, h,
                                                                                         int(rng.integers(1e4))),
                                voxel=max(0.0005, h * 0.03), min_tris=60, max_tris=120))
                src = (name, M)
            else:
                out.append(dict(name=name, coll=['SKULL', 'SKULL_teeth'], instance_of=src[0], M_src=src[1], M=M))
    return out
