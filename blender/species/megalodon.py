"""Mégalodon — Otodus megalodon (~16 m).

Silhouette: le plus grand requin ayant existé; squelette en cartilage (on
trouve surtout les dents et les vertèbres); mâchoire géante (~2,2 m de large)
à plusieurs rangées de dents triangulaires (jusqu'à 18 cm, bords dentelés,
racine en V); disques vertébraux à anneaux concentriques (jusqu'à 23 cm);
queue hétérocerque. Pose: swimming mount. Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, frame, sphere, ellipsoid, box, tube, ribbon, plate, union, bezier, mirror_y, custom
import anat
from anat import local, digit
from plans import Curve3, tooth_row

anat.DETAIL = 0.8
P = 'MEGA'
SPEC = dict(
    key='Megalodon', budget=100000, base='#D3C3A2', dark='#857058',
    pieces={
        'Crane': [f'{P}_chondrocranium'], 'Rostre': [f'{P}_rostrum'], 'Machoire': [f'{P}_jaw_upper', f'{P}_jaw_lower'],
        'Dent': [f'{P}_tooth_upper_01'], 'Branchies': [f'{P}_gill_arches'], 'Vertebre': [f'{P}_vertebra_020'],
        'Ecailles': [f'{P}_denticles'], 'Ceinture': [f'{P}_pectoral_girdle'], 'Nageoire': [f'{P}_pectoral_fin_L'],
        'NageoireDorsale': [f'{P}_dorsal_fin'], 'Queue': [f'{P}_caudal_fin'] + [f'{P}_vertebra_{i:03d}' for i in range(140, 147)],
    },
    closeups={'skull': [f'{P}_chondrocranium', f'{P}_rostrum', f'{P}_jaw_upper', f'{P}_jaw_lower']},
    closeup_dir=(1.0, -0.9, 0.25),
    views={'34': (0.55, -1.0, 0.3), 'side': (0.0, -1.0, 0.02)},
)
N_V = 150


def centrum(c, fwd, r, L, seed):
    """Calcified disc: short spool, concave faces with concentric growth rings."""
    d = tube([c - fwd * L / 2, c, c + fwd * L / 2], [r, r * 0.92, r])
    d = d.sub(sphere(c + fwd * (L / 2 + r * 1.6), r * 1.75), r * 0.05)
    d = d.sub(sphere(c - fwd * (L / 2 + r * 1.6), r * 1.75), r * 0.05)

    def rings(P, d=d):
        q = P - c
        rad = np.linalg.norm(q - np.outer(q @ fwd, fwd), axis=1)
        return d(P) + r * 0.012 * np.sin(rad / r * 40)
    return custom(rings, d.lo, d.hi).displace(r * 0.02, 3 / r, seed=seed)


def shark_tooth(base, down, back, h, seed):
    """Broad triangular crown, finely serrated edges, V-shaped root with a
    darker bourlette band (colour comes from the bone shader cavities)."""
    side = norm(np.cross(down, back))
    Rt = np.stack([side, -back, down], 1)          # u: width, v: thickness, w: height
    tri = [(-h * 0.42, 0.0), (h * 0.42, 0.0), (h * 0.05, h), (-h * 0.05, h)]
    from sdf import plate as _plate
    crown = _plate(base, np.stack([side, down, back], 1), tri, h * 0.1, h * 0.02, falloff=h * 0.25, rnd=h * 0.01)
    root = _plate(base - down * h * 0.05, np.stack([side, -down, back], 1),
                  [(-h * 0.45, 0.0), (h * 0.45, 0.0), (h * 0.3, h * 0.22), (0.0, h * 0.1), (-h * 0.3, h * 0.22)],
                  h * 0.12, h * 0.05, rnd=h * 0.02)
    t = union(h * 0.03, crown, root)

    def serr(P, t=t):
        q = P - base
        return t(P) + h * 0.004 * np.sin((q @ down) * 260 / h * 0.3)
    return custom(serr, t.lo, t.hi).displace(h * 0.008, 15 / h, seed=seed)


def bones():
    rng = np.random.default_rng(101)
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    # vertebral axis: head at +X, gentle swimming curve, heterocercal tail up
    axis = Curve3([(6.3, 0.0, 2.35), (4.0, 0.1, 2.4), (1.0, 0.25, 2.45), (-2.0, 0.1, 2.45), (-4.5, -0.25, 2.5),
                   (-6.5, -0.3, 2.8), (-7.8, -0.2, 3.6), (-8.6, -0.1, 4.6)])
    radii = [0.11 * float(np.interp(i / (N_V - 1), [0, 0.1, 0.55, 0.85, 1], [0.8, 1.0, 1.0, 0.55, 0.15]))
             for i in range(N_V)]
    lens = [r * 0.55 for r in radii]
    k = (axis.len - 0.05) / (sum(lens) + 0.02 * (N_V - 1))
    s = 0.03
    src = None
    frames = []
    for i in range(N_V):
        if i:
            s += (lens[i - 1] + lens[i]) * k / 2 + 0.02 * k
        c, t = axis.at(s)
        fwd = -t
        r = radii[i]
        frames.append((c, fwd, r))
        side = norm(np.cross(V([0, 0, 1]), fwd))
        up = np.cross(fwd, side)
        M = np.eye(4)
        M[:3, :3] = np.stack([fwd, side, up], 1) * r
        M[:3, 3] = c
        n = i + 1
        name = f'{P}_vertebra_{n:03d}'
        coll = ['SPINE', 'SPINE_tail' if n > 110 else 'SPINE_trunk']
        if src is None or n in (20, 140) or n % 15 == 1:
            B.append(dict(name=name, coll=coll, shape=centrum(c, fwd, r, lens[i] * k, int(rng.integers(1e4))),
                          voxel=max(0.002, r * 0.05), min_tris=300))
            src = (name, M)
        else:
            B.append(dict(name=name, coll=coll, instance_of=src[0], M_src=src[1], M=M))

    head = V([6.3, 0.0, 2.35])
    # chondrocranium: short broad box, orbits, nasal capsules, rounded snout
    R, L = local(head, V([1, 0, -0.05]), (0, 0, 1))
    cr = union(0.12, ellipsoid(L(0.45, 0, 0.1), (0.7, 0.6, 0.4), R), ellipsoid(L(1.05, 0, 0.05), (0.35, 0.45, 0.25), R),
               ellipsoid(L(1.2, 0.3, -0.05), (0.18, 0.18, 0.14), R), ellipsoid(L(1.2, -0.3, -0.05), (0.18, 0.18, 0.14), R))
    for sg in (-1, 1):
        cr = cr.sub(ellipsoid(L(0.75, sg * 0.6, 0.15), (0.16, 0.14, 0.13), R), 0.04)     # orbits
    cr = cr.sub(ellipsoid(L(0.4, 0, -0.35), (0.6, 0.35, 0.2), R), 0.08)
    add('chondrocranium', ['SKULL'], cr.displace(0.012, 3.5, seed=5).detail(0.008, 10, seed=6), 0.02, weight=1.4,
        min_tris=5000)
    # rostrum: three rods converging to a point
    tip = L(1.9, 0, 0.1)
    rods = [tube([L(1.25, 0, 0.25), tip], [0.06, 0.025]), tube([L(1.2, 0.2, -0.05), tip], [0.05, 0.025]),
            tube([L(1.2, -0.2, -0.05), tip], [0.05, 0.025])]
    add('rostrum', ['SKULL'], union(0.03, *rods).displace(0.006, 8, seed=7), 0.012, min_tris=1500)
    # jaws: palatoquadrate (upper) and Meckel's cartilage (lower), opened wide
    J = L(0.35, 0, -0.35)
    parts_u, parts_l = [], []
    upper_pts, lower_pts = [], []
    for sg in (-1, 1):
        u = [J + V([0.0, sg * 1.05, 0.0]), J + V([0.6, sg * 0.95, 0.12]), J + V([1.05, sg * 0.55, 0.18]),
             J + V([1.25, 0.0, 0.18])]
        l = [J + V([0.0, sg * 1.05, 0.0]), J + V([0.45, sg * 0.95, -0.55]), J + V([0.8, sg * 0.55, -0.85]),
             J + V([0.9, 0.0, -0.95])]
        parts_u.append(ribbon(u, [0.22, 0.2, 0.16, 0.14], [0.08, 0.07, 0.06, 0.06], V([0, 0, 1])))
        parts_l.append(ribbon(l, [0.2, 0.22, 0.18, 0.16], [0.08, 0.075, 0.065, 0.06], V([1, 0, 0.3])))
        upper_pts.append(u)
        lower_pts.append(l)
    add('jaw_upper', ['SKULL'], union(0.05, *parts_u).displace(0.01, 5, seed=8).detail(0.008, 12, seed=9), 0.016,
        weight=1.2, min_tris=3000)
    add('jaw_lower', ['SKULL'], union(0.05, *parts_l).displace(0.01, 5, seed=10).detail(0.008, 12, seed=11), 0.016,
        weight=1.2, min_tris=3000)
    # teeth: functional row + two replacement rows, along both jaws (instanced)
    def row(pts_pair, inward, rows_down, prefix, n_per_side):
        out = []
        for rrow in range(3):
            pos = []
            for sg_i, pts in enumerate(pts_pair):
                P_ = np.array(pts)
                seg = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(P_, axis=0), axis=1))])
                for j in range(n_per_side):
                    tt = (j + 0.5) / n_per_side * seg[-1]
                    p = V([np.interp(tt, seg, P_[:, a]) for a in range(3)])
                    q = V([np.interp(min(tt + 0.05, seg[-1]), seg, P_[:, a]) for a in range(3)])
                    along = norm(q - p) if np.linalg.norm(q - p) > 1e-6 else V([0, 1, 0])
                    inn = norm((J + V([0.6, 0, 0.0 if rows_down > 0 else -0.4]) - p) * V([1, 1, 0.2]))
                    d = norm(rows_down * V([0, 0, -1]) * (1 - 0.8 * rrow / 2) + inn * 0.9 * rrow / 2)
                    h = (0.18 if rows_down > 0 else 0.14) * (1 - 0.45 * abs(j - n_per_side * 0.35) / n_per_side) \
                        * (1 - 0.15 * rrow)
                    base = p + inn * (0.07 + 0.1 * rrow) + V([0, 0, -0.05 if rows_down > 0 else 0.05])
                    pos.append((base, d, along * (1 if sg_i else -1), h))
            out += tooth_row(f'{P}_tooth_{prefix}' + ('' if rrow == 0 else f'_row{rrow + 1}'), ['SKULL', 'SKULL_teeth'],
                             shark_tooth, pos, rng)
        return out
    B.extend(row(upper_pts, 1, 1, 'upper', 12))
    B.extend(row(lower_pts, -1, -1, 'lower', 11))
    # gill arches: 5 hooped cartilage arcs with fine rakers
    parts = []
    for g in range(5):
        x = 5.8 - 0.28 * g
        for sg in (-1, 1):
            pts = [V([x, 0, 1.55]), V([x - 0.05, sg * 0.55, 1.75]), V([x - 0.1, sg * 0.75, 2.3]), V([x - 0.05, sg * 0.5, 2.8]),
                   V([x, sg * 0.12, 2.95])]
            parts.append(ribbon(pts, [0.04, 0.035, 0.03, 0.03, 0.035], [0.02, 0.018, 0.016, 0.016, 0.018], V([1, 0, 0])))
            for q in range(6):
                a = pts[1] + (pts[3] - pts[1]) * (q / 5)
                parts.append(tube([a, a + V([0.12, -sg * 0.1, 0])], [0.008, 0.003]))
    add('gill_arches', ['SKULL', 'GILLS'], union(0.01, *parts).displace(0.004, 12, seed=12), 0.008, weight=1.1,
        min_tris=4000)
    # pectoral girdle (U-shaped arc under the body) + pectoral fins
    gx = 4.3
    girdle = ribbon([V([gx, 0.55, 2.55]), V([gx + 0.1, 0.65, 1.85]), V([gx + 0.15, 0.0, 1.45]),
                     V([gx + 0.1, -0.65, 1.85]), V([gx, -0.55, 2.55])], [0.1, 0.12, 0.13, 0.12, 0.1],
                    [0.05, 0.05, 0.05, 0.05, 0.05], V([1, 0, 0]))
    add('pectoral_girdle', ['FINS'], girdle.displace(0.008, 6, seed=13), 0.012, min_tris=2000)

    def fin(base, dirv, spread_dir, length, width, n_rays, seed):
        plate_d = ribbon([base, base + dirv * length * 0.25], [width * 0.35, width * 0.4], [0.035, 0.03], spread_dir)
        parts = [plate_d]
        for q in range(n_rays):
            a = (q / (n_rays - 1) - 0.5)
            rd = norm(dirv + spread_dir * a * 0.9)
            st = base + dirv * length * 0.22 + spread_dir * a * width * 0.6
            Lq = length * (1 - 0.55 * abs(a + 0.25))
            pts = [st, st + rd * Lq * 0.5, st + rd * Lq + spread_dir * (-0.15 * Lq)]
            parts.append(digit(pts, [0.022, 0.016, 0.006], knuckle=1.05, seed=seed + q))
        return union(0.01, *parts).displace(0.004, 10, seed=seed)
    for side, sg in (('L', 1), ('R', -1)):
        b = V([gx + 0.05, sg * 0.7, 1.8])
        add(f'pectoral_fin_{side}', ['FINS'], fin(b, norm(V([-0.7, sg * 0.6, -0.55])), norm(V([1, 0, -0.2])), 2.3,
                                                  0.8, 11, 200 + sg), 0.01, weight=1.3, min_tris=3500)
    # dorsal fin: triangular cartilage on a basal plate, supported by rays
    db = V([0.8, 0.2, 2.75])
    add('dorsal_fin', ['FINS'], fin(db, norm(V([-0.35, 0, 1])), V([1, 0, 0]), 1.7, 1.1, 12, 300), 0.01, weight=1.2,
        min_tris=3000)
    # caudal fin: the column bends into the upper lobe; the lower lobe is a fan of radials
    cb = V([-6.9, -0.28, 2.95])
    add('caudal_fin', ['FINS', 'TAIL'], fin(cb, norm(V([-0.55, 0.0, -1])), norm(V([1, 0, 0.4])), 2.5, 0.9, 12, 400),
        0.01, weight=1.2, min_tris=3000)
    # denticles: enlarged patch of placoid scales (tooth-shaped) on a skin plate
    c = V([2.2, 0.62, 2.9])
    base = plate(c, np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, 1, 0])], 1),
                 [(-0.25, -0.15), (0.25, -0.15), (0.25, 0.15), (-0.25, 0.15)], 0.01, 0.006, rnd=0.01)
    dents = []
    for a in np.linspace(-0.21, 0.21, 9):
        for b in np.linspace(-0.11, 0.11, 6):
            p0 = c + V([a + 0.02 * (b > 0), 0.012, b])
            dents.append(ribbon([p0, p0 + V([-0.035, 0.02, 0])], [0.018, 0.004], [0.006, 0.002], V([0, 0, 1])))
    add('denticles', ['SPECIAL_FEATURES'], union(0.004, base, *dents), 0.0035, min_tris=2500)
    return B
