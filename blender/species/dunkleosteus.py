"""Dunkleosteus — Dunkleosteus terrelli (4–8 m, modelled at 6 m).

Silhouette: poisson cuirassé (placoderme); tête et thorax couverts d'une
armure osseuse: casque crânien fait de plaques soudées, grand œil rond
protégé par un anneau osseux; pas de vraies dents: lames osseuses
tranchantes auto-aiguisantes (gnathales) terminées en crochet; plaque
thoracique épaisse à surface grenue; 5 arcs branchiaux en crochet derrière
la tête; ceinture pectorale en U; corps et queue en cartilage (disques
vertébraux calcifiés, queue hétérocerque). Pose: nage.
Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, sphere, ellipsoid, box, tube, ribbon, plate, union, round_cone, custom, Noise
import anat
from anat import local
from plans import Curve3

anat.DETAIL = 0.8
P = 'DUNK'
SPEC = dict(
    key='Dunkleosteus', budget=90000, base='#D1BE9A', dark='#836C50',
    pieces={
        'Crane': [f'{P}_skull'], 'Machoire': [f'{P}_mandible_L', f'{P}_mandible_R'],
        'Dent': [f'{P}_tooth_upper_L'], 'Branchie': [f'{P}_gill_arches'], 'Vertebre': [f'{P}_vertebra_020'],
        'Plaque': [f'{P}_thoracic_plate'], 'Ceinture': [f'{P}_pectoral_girdle'], 'Nageoire': [f'{P}_pectoral_fin_L'],
        'NageoireDorsale': [f'{P}_dorsal_fin'], 'Queue': [f'{P}_caudal_fin'],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible_L', f'{P}_mandible_R', f'{P}_tooth_upper_L',
                        f'{P}_tooth_upper_R', f'{P}_thoracic_plate']},
    closeup_dir=(0.9, -1.0, 0.25),
    views={'34': (0.55, -1.0, 0.3), 'side': (0.0, -1.0, 0.02)},
)
N_V = 90
HEAD = V([1.75, 0.0, 1.7])


def tubercles(sh, amp, cell, seed):
    """Grainy dermal-bone surface: dense small rounded tubercles."""
    nz = Noise(seed)

    def f(Pp, sh=sh):
        q = Pp / cell
        g = np.sin(q[:, 0] * 2.1 + 1.3 * np.sin(q[:, 2])) * np.sin(q[:, 1] * 2.3 + 1.1 * np.sin(q[:, 0])) * \
            np.sin(q[:, 2] * 1.9 + 0.7 * np.sin(q[:, 1]))
        return sh(Pp) - amp * np.clip(g, 0, 1) ** 2 - amp * 0.3 * nz(Pp * 3 / cell)
    return custom(f, sh.lo - amp, sh.hi + amp)


def sutures(sh, R, o, lines, w, depth):
    """Cut shallow grooves where the armour plates meet. lines: [(p, n)] planes
    (point, normal) in the local frame R about o."""
    planes = [(o + R @ V(p), norm(R @ V(n))) for p, n in lines]

    def f(Pp, sh=sh):
        d = sh(Pp)
        slab = np.min([np.abs((Pp - pw) @ nw) - w for pw, nw in planes], axis=0)
        groove = np.maximum(slab, -(d + depth))          # only the outer `depth` of each surface
        return np.maximum(d, -groove)
    return custom(f, sh.lo, sh.hi)


def centrum(c, fwd, r, L, seed):
    d = tube([c - fwd * L / 2, c, c + fwd * L / 2], [r, r * 0.9, r])
    d = d.sub(sphere(c + fwd * (L / 2 + r * 1.6), r * 1.75), r * 0.05)
    d = d.sub(sphere(c - fwd * (L / 2 + r * 1.6), r * 1.75), r * 0.05)

    def rings(Pp, d=d):
        q = Pp - c
        rad = np.linalg.norm(q - np.outer(q @ fwd, fwd), axis=1)
        return d(Pp) + r * 0.015 * np.sin(rad / r * 32)
    return custom(rings, d.lo, d.hi).displace(r * 0.02, 3 / r, seed=seed)


def fin(o, u, v, outline, rays, seed, t=0.025):
    u = norm(u)
    v = norm(v - (v @ u) * u)
    w = np.cross(u, v)
    R = np.stack([u, v, w], 1)
    parts = [plate(o, R, outline, t, t * 0.25, falloff=0.25, rnd=0.008)]
    for (u0, v0, u1, v1) in rays:
        parts.append(round_cone(o + R @ V([u0, v0, 0]), o + R @ V([u1, v1, 0]), t * 0.9, t * 0.3))
    return union(0.008, *parts).displace(0.003, 10, seed=seed).detail(0.0025, 25, seed=seed + 1)


def fan(n, root, tips):
    out = []
    for q in range(n):
        s = q / (n - 1)
        r0 = np.array(root[0]) * (1 - s) + np.array(root[1]) * s
        idx = s * (len(tips) - 1)
        i0 = int(min(idx, len(tips) - 2))
        f = idx - i0
        r1 = np.array(tips[i0]) * (1 - f) + np.array(tips[i0 + 1]) * f
        out.append((r0[0], r0[1], r0[0] + (r1[0] - r0[0]) * 0.92, r0[1] + (r1[1] - r0[1]) * 0.92))
    return out


def bones():
    rng = np.random.default_rng(161)
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    R, L = local(HEAD, V([1, 0, 0]), (0, 0, 1))
    # ------------------------------------------------------ head shield ---
    # blocky helmet: tall rounded cranial box, steep blunt snout, flat cheeks
    # angular armoured box: flat cheeks, flat roof, steep blunt snout
    outer = union(0.06, box(L(-0.02, 0, 0.1), (0.55, 0.4, 0.4), R, rnd=0.12),
                  box(L(0.42, 0, -0.04), (0.2, 0.34, 0.34), R, rnd=0.1))
    snout_cut = box(L(0.75, 0, 0.5), (0.3, 0.6, 0.45), R @ rot((0, 1, 0), -0.75), rnd=0.02)
    outer = outer.sub(snout_cut, 0.05)
    helm = outer.sub(outer.grow(-0.07), 0.0)
    helm = helm.sub(box(L(0.3, 0, -0.52), (0.9, 0.7, 0.3), R), 0.04)           # open underneath (mouth, gills)
    helm = helm.sub(box(L(-0.62, 0, 0.0), (0.2, 0.7, 0.7), R), 0.04)           # open behind (joins the thorax)
    for sg in (-1, 1):
        helm = helm.sub(sphere(L(0.5, sg * 0.36, 0.14), 0.11), 0.02)            # orbits
    rings = [tube([L(0.5, sg * 0.36, 0.14) + R @ V([0.12 * np.cos(a), 0, 0.12 * np.sin(a)]) for a in
                   np.linspace(0, 2 * np.pi, 17)], [0.025] * 17) for sg in (-1, 1)]  # sclerotic/circumorbital ring
    helm = union(0.015, helm, *rings)
    helm = sutures(helm, R, HEAD, [((0.2, 0, 0), (1, 0, 0.25)), ((-0.25, 0, 0), (1, 0, -0.2)),
                                   ((0, 0.18, 0), (0, 1, 0.3)), ((0, -0.18, 0), (0, 1, -0.3)),
                                   ((0.7, 0, 0), (1, 0, 0.6))], 0.006, 0.03)
    add('skull', ['SKULL'], tubercles(helm, 0.006, 0.018, 5).displace(0.006, 5, seed=6), 0.008, weight=2.0,
        min_tris=9000)
    # ------------------------------------------------------ jaws / "teeth" ---
    J = L(-0.05, 0, -0.32)        # jaw joint
    for side, sg in (('L', 1), ('R', -1)):
        # inferognathal: long blade, shearing edge in front, hooked tip
        pts = [J + R @ V([0.0, sg * 0.3, 0.0]), J + R @ V([0.35, sg * 0.26, -0.06]), J + R @ V([0.62, sg * 0.14, -0.06]),
               J + R @ V([0.76, sg * 0.03, 0.0])]
        blade = ribbon(pts, [0.07, 0.09, 0.1, 0.06], [0.03, 0.028, 0.02, 0.015], R[:, 2])
        hook = round_cone(pts[-1] + R @ V([-0.02, 0, 0.02]), pts[-1] + R @ V([0.03, -sg * 0.01, 0.16]), 0.035, 0.006)
        edge = ribbon([pts[1] + R[:, 2] * 0.045, pts[2] + R[:, 2] * 0.05], [0.012, 0.012], [0.004, 0.003], R[:, 2])
        add(f'mandible_{side}', ['SKULL'], union(0.012, blade, hook, edge).displace(0.003, 14, seed=20 + sg)
            .detail(0.003, 30, seed=21 + sg), 0.004, weight=1.4, min_tris=2500)
        # upper gnathal plates: anterior supragnathal fang + posterior shearing plate
        a0 = L(0.72, sg * 0.05, -0.28)
        fang = union(0.01, round_cone(a0, a0 + R @ V([0.03, 0.0, -0.2]), 0.045, 0.006),
                     ellipsoid(a0 + R @ V([-0.03, 0, 0.03]), (0.06, 0.035, 0.04), R))
        add(f'tooth_upper_{side}', ['SKULL', 'SKULL_teeth'], fang.displace(0.002, 30, seed=30 + sg), 0.0025,
            min_tris=900)
        p0 = L(0.3, sg * 0.24, -0.3)
        post = ribbon([p0, p0 + R @ V([0.3, -sg * 0.1, -0.02])], [0.06, 0.05], [0.02, 0.015], R[:, 2])
        post = union(0.008, post, ribbon([p0 + R @ V([0.02, 0, -0.03]), p0 + R @ V([0.28, -sg * 0.1, -0.05])],
                                         [0.01, 0.008], [0.004, 0.003], R[:, 2]))
        add(f'tooth_upper_post_{side}', ['SKULL', 'SKULL_teeth'], post.displace(0.002, 30, seed=32 + sg), 0.0025,
            min_tris=700)
    # ------------------------------------------------------ thoracic armour ---
    To = HEAD + V([-0.95, 0, -0.06])
    Rt, Lt = local(To, V([1, 0, 0]), (0, 0, 1))
    ob = box(Lt(0, 0, 0.02), (0.45, 0.46, 0.44), Rt, rnd=0.2)
    shell = ob.sub(ob.grow(-0.07), 0.0)
    shell = shell.sub(box(Lt(0.62, 0, 0), (0.2, 0.8, 0.8), Rt), 0.03)            # open front (behind the head)
    shell = shell.sub(box(Lt(-0.55, 0, -0.2), (0.25, 0.8, 0.6), Rt @ rot((0, 1, 0), 0.5)), 0.05)  # sloping trailing edge
    shell = shell.sub(box(Lt(0.0, 0, -0.62), (0.3, 0.28, 0.2), Rt), 0.05)           # ventral gap
    for sg in (-1, 1):
        shell = shell.sub(ellipsoid(Lt(0.12, sg * 0.46, -0.22), (0.13, 0.12, 0.11), Rt), 0.03)   # pectoral fenestra
    spinal = [round_cone(Lt(0.0, sg * 0.46, -0.25), Lt(-0.45, sg * 0.55, -0.35), 0.045, 0.01) for sg in (-1, 1)]
    median = tube([Lt(0.35, 0, 0.44), Lt(0.0, 0, 0.5), Lt(-0.35, 0, 0.42)], [0.03, 0.045, 0.02])   # median dorsal keel
    thor = union(0.02, shell, median, *spinal)
    thor = sutures(thor, Rt, To, [((0, 0.25, 0), (0, 1, 0.5)), ((0, -0.25, 0), (0, 1, -0.5)),
                                  ((0.05, 0, 0), (1, 0, 0))], 0.006, 0.03)
    add('thoracic_plate', ['SPECIAL_FEATURES'], tubercles(thor, 0.007, 0.02, 7).displace(0.005, 5, seed=8), 0.008,
        weight=1.8, min_tris=7000)
    # ------------------------------------------------------ gill arches ---
    parts = []
    for g in range(5):
        x = HEAD[0] - 0.35 - 0.1 * g
        for sg in (-1, 1):
            pts = [V([x, 0, 1.18]), V([x - 0.02, sg * 0.28, 1.25]), V([x - 0.04, sg * 0.38, 1.55]),
                   V([x - 0.02, sg * 0.3, 1.85]), V([x + 0.04, sg * 0.18, 1.95])]
            parts.append(ribbon(pts, [0.025, 0.022, 0.02, 0.02, 0.018], [0.012, 0.011, 0.01, 0.01, 0.01], V([1, 0, 0])))
            for q in range(5):
                a = pts[1] + (pts[3] - pts[1]) * (q / 4)
                parts.append(tube([a, a + V([0.06, -sg * 0.05, 0])], [0.005, 0.002]))
    add('gill_arches', ['SKULL', 'GILLS'], union(0.006, *parts).displace(0.002, 20, seed=12), 0.004, weight=1.1,
        min_tris=3000)
    # ------------------------------------------------------ vertebral column ---
    axis = Curve3([(0.85, 0.0, 1.62), (-0.6, 0.06, 1.6), (-1.8, 0.1, 1.62), (-2.8, -0.05, 1.7), (-3.5, -0.12, 1.95),
                   (-4.1, -0.1, 2.45)])
    radii = [0.07 * float(np.interp(i / (N_V - 1), [0, 0.15, 0.55, 0.85, 1], [0.85, 1.0, 0.95, 0.5, 0.15]))
             for i in range(N_V)]
    lens = [r * 0.6 for r in radii]
    k = (axis.len - 0.05) / (sum(lens) + 0.012 * (N_V - 1))
    s = 0.03
    src = None
    for i in range(N_V):
        if i:
            s += (lens[i - 1] + lens[i]) * k / 2 + 0.012 * k
        c, t = axis.at(s)
        fwd = -t
        r = radii[i]
        side = norm(np.cross(V([0, 0, 1]), fwd))
        up = np.cross(fwd, side)
        M = np.eye(4)
        M[:3, :3] = np.stack([fwd, side, up], 1) * r
        M[:3, 3] = c
        n = i + 1
        name = f'{P}_vertebra_{n:03d}'
        coll = ['SPINE', 'SPINE_tail' if n > 65 else 'SPINE_trunk']
        if src is None or n in (20, 70) or n % 12 == 1:
            B.append(dict(name=name, coll=coll, shape=centrum(c, fwd, r, lens[i] * k, int(rng.integers(1e4))),
                          voxel=max(0.0015, r * 0.05), min_tris=250))
            src = (name, M)
        else:
            B.append(dict(name=name, coll=coll, instance_of=src[0], M_src=src[1], M=M))
    # ------------------------------------------------------ girdle and fins ---
    gx = HEAD[0] - 0.85
    girdle = ribbon([V([gx, 0.5, 1.75]), V([gx + 0.05, 0.56, 1.3]), V([gx + 0.08, 0.0, 1.05]),
                     V([gx + 0.05, -0.56, 1.3]), V([gx, -0.5, 1.75])], [0.07, 0.08, 0.09, 0.08, 0.07],
                    [0.03, 0.03, 0.03, 0.03, 0.03], V([1, 0, 0]))
    add('pectoral_girdle', ['FINS'], girdle.displace(0.005, 9, seed=13), 0.006, min_tris=1800)
    pect = [(0.0, -0.18), (0.0, 0.18), (0.6, 0.12), (1.1, -0.18), (0.6, -0.24)]
    for side, sg in (('L', 1), ('R', -1)):
        b = V([gx + 0.04, sg * 0.58, 1.28])
        add(f'pectoral_fin_{side}', ['FINS'],
            fin(b, V([-0.6, sg * 0.5, -0.6]), V([1, 0, -0.1]), pect,
                fan(9, [(0.03, -0.15), (0.03, 0.15)], [(0.6, -0.22), (1.05, -0.18), (0.6, 0.1)]), 200 + sg),
            0.006, weight=1.3, min_tris=2500)
    dors = [(0.0, 0.0), (0.9, 0.0), (0.3, 0.75), (0.12, 0.7)]
    add('dorsal_fin', ['FINS'], fin(V([-1.6, 0.1, 1.85]), V([1, 0, 0]), V([-0.3, 0, 1]), dors,
                                    fan(8, [(0.05, 0.03), (0.85, 0.03)], [(0.15, 0.68), (0.3, 0.72), (0.8, 0.1)]), 300),
        0.006, weight=1.2, min_tris=2000)
    cau = [(0.0, -0.15), (0.0, 0.25), (-1.0, 1.1), (-0.85, 1.15), (-0.7, 0.3), (-0.95, -0.7), (-0.8, -0.75),
           (-0.25, -0.35)]
    add('caudal_fin', ['FINS', 'TAIL'], fin(V([-3.35, -0.12, 1.9]), V([1, 0, 0]), V([0, 0, 1]), cau,
                                            fan(11, [(-0.03, -0.1), (-0.03, 0.2)], [(-0.9, -0.72), (-0.7, 0.25),
                                                                                    (-0.95, 1.12)]), 400),
        0.006, weight=1.2, min_tris=2500)
    return B
