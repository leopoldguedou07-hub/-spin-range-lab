"""Mammouth laineux — Mammuthus primigenius (3.4 m au garrot).

Silhouette: crâne haut en dôme, défenses spiralées, dos en pente (garrot haut),
pattes en colonnes. Units: metres, X forward, Y left, Z up, ground at z=0.
"""
import numpy as np
from scipy.interpolate import CubicSpline
from sdf import (V, norm, frame, rot, sphere, ellipsoid, box, tube, ribbon, plate,
                 union, bezier, mirror_y, custom, round_cone)
from anat import vertebra, rib, long_bone, digit, carpal_block, local

P = 'MAMM'
SPEC = dict(
    key='Mammouth', budget=100000,
    base='#DDCBA8', dark='#9C8460',
    pieces={
        'Crane': [f'{P}_skull'],
        'Defense': [f'{P}_tusk_L'],
        'Machoire': [f'{P}_mandible'],
        'Dent': [f'{P}_molar_lower_L'],
        'Vertebre': [f'{P}_thoracic_03'],
        'Cote': [f'{P}_rib_L_08'],
        'Omoplate': [f'{P}_scapula_L'],
        'Bras': [f'{P}_humerus_L', f'{P}_radius_L', f'{P}_ulna_L'],
        'Bassin': [f'{P}_pelvis'],
        'Femur': [f'{P}_femur_L'],
        'Tibia': [f'{P}_tibia_L', f'{P}_fibula_L'],
        'Pied': [f'{P}_pes_L'],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible', f'{P}_tusk_L', f'{P}_tusk_R',
                        f'{P}_molar_lower_L', f'{P}_molar_upper_L']},
)

# ------------------------------------------------------------------ spine ---
_ctrl = np.array([
    (1.60, 2.58), (1.38, 2.63), (1.15, 2.68), (0.60, 2.64), (0.00, 2.54),
    (-0.75, 2.40), (-1.10, 2.31), (-1.45, 2.22), (-1.70, 2.1), (-1.86, 1.9),
    (-1.95, 1.62), (-1.99, 1.35)])
_s = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(_ctrl, axis=0), axis=1))])
_spx = CubicSpline(_s, _ctrl[:, 0])
_spz = CubicSpline(_s, _ctrl[:, 1])


def spine_at(s):
    p = V([_spx(s), 0.0, _spz(s)])
    t = V([_spx(s, 1), 0.0, _spz(s, 1)])
    fwd = -norm(t)  # spline runs head->tail, animal faces +X
    return p, fwd


def lerp_tab(tab, t):
    tab = np.array(tab)
    return float(np.interp(t, tab[:, 0], tab[:, 1]))


def column():
    """Return list of (name, coll, kind, index, params, s_pos)."""
    out = []
    s = 0.035
    specs = []
    # cervicals: very short discs (elephant neck), atlas & axis special
    specs.append(('cervical', 1, dict(cr=0.075, cl=0.055, canal=0.05, sl=0.0, tl=0.2, tr=0.045, tu=0.02, tb=0.02,
                                      zyg=0.035, knob=0)))
    specs.append(('cervical', 2, dict(cr=0.078, cl=0.085, canal=0.042, sl=0.22, tilt=0.55, sw=0.13, st=0.03,
                                      tl=0.09, tr=0.03, tu=0.0)))
    for i in range(3, 8):
        t = (i - 3) / 4
        specs.append(('cervical', i, dict(cr=0.082 + 0.006 * t, cl=0.05, canal=0.038, sl=0.12 + 0.3 * t ** 1.6,
                                          tilt=0.45 + 0.1 * t, sw=0.05, st=0.018, tl=0.13, tr=0.03, tu=-0.02,
                                          tb=0.0)))
    for i in range(1, 21):
        t = (i - 1) / 19
        sl = lerp_tab([(0, 0.52), (0.08, 0.74), (0.2, 0.72), (0.45, 0.5), (0.7, 0.36), (1, 0.28)], t)
        specs.append(('thoracic', i, dict(cr=0.082 + 0.014 * t, cl=0.074 + 0.012 * t, canal=0.034, sl=sl,
                                          tilt=0.72 - 0.4 * t, sw=0.05 - 0.008 * t, st=0.016, tl=0.13 - 0.01 * t,
                                          tr=0.03, tu=0.07, tb=0.01, curl=0.03)))
    for i in range(1, 4):
        specs.append(('lumbar', i, dict(cr=0.098, cl=0.085, canal=0.032, sl=0.25, tilt=0.25, sw=0.08, st=0.02,
                                        tl=0.2, tr=0.035, tu=0.0, tb=-0.01)))
    for i in range(1, 5):
        specs.append(('sacral', i, dict(cr=0.09 - 0.008 * i, cl=0.085, canal=0.03, sl=0.2 - 0.02 * i, tilt=0.15,
                                        sw=0.09, st=0.022, tl=0.0)))
    n_caud = 18
    for i in range(1, n_caud + 1):
        t = (i - 1) / (n_caud - 1)
        specs.append(('caudal', i, dict(cr=0.068 * (1 - 0.72 * t), cl=0.062 * (1 - 0.5 * t), canal=0.025 * (1 - t) + 0.004,
                                        sl=max(0.15 * (1 - 1.6 * t), 0), tilt=0.5, sw=0.05 * (1 - t) + 0.01, st=0.014 * (1 - 0.6 * t),
                                        tl=max(0.11 * (1 - 1.8 * t), 0), tr=0.022 * (1 - 0.6 * t), tu=0.0,
                                        chevron=0.08 * (1 - t) if 2 <= i <= 12 else 0, ends='flat')))
    prev_cl = None
    for kind, i, p in specs:
        cl = p['cl']
        if prev_cl is not None:
            s += (prev_cl + cl) / 2 + 0.012 + (0.0 if kind != 'caudal' else 0.006)
        prev_cl = cl
        out.append((kind, i, p, s))
    return out


def bones():
    rng = np.random.default_rng(42)
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    col = column()
    vpos = {}
    sacral = []
    for kind, i, p, s in col:
        c, fwd = spine_at(s)
        up = np.cross(fwd, V([0, 1, 0]))
        up = up if up[2] > 0 else -up
        vpos[(kind, i)] = (c, fwd, up, p)
        sh = vertebra(c, fwd, up, p, rng)
        if kind == 'cervical' and i == 1:  # atlas: ring with broad wings
            R, L = local(c, fwd, up)
            sh = union(0.02, sh, ellipsoid(L(0, 0, 0.02), (0.035, 0.16, 0.06), R))
        if kind == 'cervical' and i == 2:  # axis: dens pointing forward
            R, L = local(c, fwd, up)
            sh = union(0.015, sh, round_cone(L(0.03), L(0.1), 0.045, 0.03))
        if kind == 'sacral':
            sacral.append(sh)
            continue
        vox = 0.0045 if kind != 'caudal' else max(0.0025, p['cr'] * 0.06)
        coll = {'cervical': ['SPINE', 'SPINE_cervical'], 'thoracic': ['SPINE', 'SPINE_dorsal'],
                'lumbar': ['SPINE', 'SPINE_dorsal'], 'caudal': ['SPINE', 'SPINE_tail']}[kind]
        add(f'{kind}_{i:02d}', coll, sh, vox, min_tris=90 if kind == 'caudal' else 250)

    # sacrum: 4 fused vertebrae + wings to the ilia + fused spinal crest
    c1, f1, u1, _ = vpos[('sacral', 1)]
    c4, f4, u4, _ = vpos[('sacral', 4)]
    wings = []
    for sgn in (-1, 1):
        wings.append(ribbon([c1 + V([0, sgn * 0.05, 0.04]), c1 + V([-0.02, sgn * 0.2, 0.06]),
                             c1 + V([-0.06, sgn * 0.27, 0.02])], [0.07, 0.06, 0.07], [0.03, 0.03, 0.035], (1, 0, 0)))
    crest = ribbon([c1 + u1 * 0.2 + V([0.02, 0, 0.12]), (c1 + c4) / 2 + V([0, 0, 0.3]), c4 + u4 * 0.15 + V([0, 0, 0.12])],
                   [0.035, 0.04, 0.03], [0.02, 0.02, 0.018], (0, 0, 1))
    add('sacrum', ['SPINE', 'SPINE_sacral'], union(0.03, *sacral, *wings, crest), 0.005, min_tris=600)

    # ---------------------------------------------------------- ribcage ---
    for i in range(1, 21):
        t = (i - 1) / 19
        c, fwd, up, p = vpos[('thoracic', i)]
        depth = lerp_tab([(0, 0.78), (0.15, 1.12), (0.35, 1.28), (0.6, 1.2), (0.85, 0.95), (1, 0.72)], t)
        ymax = lerp_tab([(0, 0.34), (0.15, 0.55), (0.4, 0.74), (0.7, 0.77), (1, 0.66)], t)
        yend = lerp_tab([(0, 0.11), (0.25, 0.2), (0.55, 0.42), (1, 0.6)], t)
        back = 0.2 + 0.42 * t
        wid = 0.036 + 0.01 * np.sin(np.pi * t)
        for side, sg in (('L', 1), ('R', -1)):
            j = 1 + rng.uniform(-0.03, 0.03)
            head = c + V([-0.035, sg * 0.075, 0.05])
            tuber = c + V([-0.02, sg * 0.125, 0.12])
            p0 = c + V([-0.03, sg * 0.16, 0.09])
            p3 = c + V([-back * j, sg * yend * j, -depth * j])
            c1 = c + V([-0.02 - back * 0.1, sg * ymax * 0.95 * j, 0.05])
            c2 = c + V([-back * 0.75, sg * ymax * 1.05 * j, -depth * 0.55])
            pts = bezier(p0, c1, c2, n=11, p3=p3)
            W = list(np.interp(np.linspace(0, 1, 11), [0, 0.3, 0.7, 1], [wid * 0.7, wid, wid * 0.95, wid * 0.6]))
            T = list(np.interp(np.linspace(0, 1, 11), [0, 0.4, 1], [0.026, 0.021, 0.014]))
            sh = rib(head, tuber, pts, W, T, wdir=(1, 0, 0.2), seed=int(rng.integers(1e4)))
            add(f'rib_{side}_{i:02d}', ['RIBCAGE', f'RIBCAGE_{side}'], sh, 0.0055, min_tris=220)
    # sternum: chain of sternebrae
    st_pts = bezier((1.12, 0, 1.9), (0.85, 0, 1.55), (0.35, 0, 1.40), n=6)
    parts = []
    for k in range(5):
        a, b = st_pts[k], st_pts[k + 1]
        m = (a + b) / 2
        parts.append(ellipsoid(m, (np.linalg.norm(b - a) * 0.46, 0.06 - 0.005 * k, 0.035), frame(b - a)))
    add('sternum', ['RIBCAGE'], union(0.012, *parts).displace(0.004, 25, seed=5), 0.005, min_tris=300)

    # ------------------------------------------------------------- skull ---
    add('skull', ['SKULL'], skull(), 0.009, weight=1.6, min_tris=6000)
    add('mandible', ['SKULL'], mandible(), 0.007, weight=1.3, min_tris=2500)
    for side, sg in (('L', 1), ('R', -1)):
        add(f'tusk_{side}', ['SKULL'], tusk(sg), 0.009, min_tris=1500)
        add(f'molar_lower_{side}', ['SKULL', 'SKULL_teeth'], molar(V([2.0, sg * 0.215, 2.085]), up=True, seed=3 + sg),
            0.0035, min_tris=500)
        add(f'molar_upper_{side}', ['SKULL', 'SKULL_teeth'], molar(V([1.97, sg * 0.225, 2.225]), up=False, seed=9 + sg),
            0.0035, min_tris=400)

    # ------------------------------------------------------------ limbs ---
    for side, sg, dxf, dxh in (('L', 1, 0.07, -0.05), ('R', -1, -0.05, 0.06)):
        front(add, side, sg, dxf, rng)
        hind(add, side, sg, dxh, rng)
    add('pelvis', ['PELVIS'], pelvis(), 0.007, weight=1.2, min_tris=3000)
    return B


# ------------------------------------------------------------------ skull ---
def skull():
    prof = [(1.58, 2.52), (1.60, 2.80), (1.66, 3.08), (1.76, 3.33), (1.88, 3.45), (1.99, 3.44),
            (2.09, 3.33), (2.17, 3.12), (2.24, 2.88), (2.30, 2.58), (2.37, 2.24), (2.44, 1.98),
            (2.30, 1.93), (2.17, 2.08), (2.03, 2.16), (1.86, 2.2), (1.74, 2.3), (1.64, 2.42)]
    R = np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1)  # u=x, v=z, w=y
    core = plate((0, 0, 0), R, prof, t_center=0.37, t_edge=0.17, falloff=0.3, rnd=0.05)
    # narrow the front (tusk sheaths) and the occiput with a shaping envelope
    env = ellipsoid((1.98, 0, 2.72), (0.62, 0.42, 0.95))
    core = core.inter(env, 0.08)
    parts = [core]
    for sg in (-1, 1):
        # tusk sheaths (premaxillae)
        parts.append(tube([(2.12, sg * 0.12, 2.72), (2.28, sg * 0.16, 2.3), (2.41, sg * 0.18, 1.98)], [0.13, 0.13, 0.115]))
        # zygomatic arch
        parts.append(tube([(2.14, sg * 0.31, 2.43), (1.97, sg * 0.36, 2.36), (1.8, sg * 0.35, 2.4), (1.72, sg * 0.31, 2.48)],
                          [0.04, 0.032, 0.03, 0.038]))
        # maxillary molar housings
        parts.append(ellipsoid((1.96, sg * 0.23, 2.28), (0.2, 0.1, 0.13)))
        # occipital condyles
        parts.append(ellipsoid((1.575, sg * 0.075, 2.56), (0.05, 0.045, 0.065)))
        # parietal bosses of the dome
        parts.append(ellipsoid((1.86, sg * 0.14, 3.3), (0.2, 0.16, 0.16)))
    sk = union(0.05, *parts)
    cuts = []
    for sg in (-1, 1):
        cuts.append((ellipsoid((2.13, sg * 0.4, 2.57), (0.1, 0.16, 0.11)), 0.025))              # orbit
        cuts.append((ellipsoid((1.86, sg * 0.4, 2.62), (0.17, 0.12, 0.17)), 0.05))               # temporal fossa
        cuts.append((round_cone((2.22, sg * 0.145, 2.5), (2.48, sg * 0.19, 1.9), 0.075, 0.088), 0.01))  # alveolus
        cuts.append((ellipsoid((1.62, sg * 0.2, 2.9), (0.08, 0.12, 0.25)), 0.06))               # nuchal fossae
    cuts.append((ellipsoid((2.29, 0, 2.93), (0.12, 0.13, 0.1)), 0.03))                           # nasal aperture
    cuts.append((ellipsoid((2.33, 0, 2.65), (0.06, 0.05, 0.28)), 0.04))                          # incisive fossa
    cuts.append((sphere((1.56, 0, 2.625), 0.06), 0.01))                                           # foramen magnum
    cuts.append((ellipsoid((1.95, 0, 3.48), (0.26, 0.035, 0.05)), 0.03))                         # sagittal groove
    cuts.append((ellipsoid((2.02, 0, 2.08), (0.2, 0.09, 0.08)), 0.03))                           # palate
    for c, k in cuts:
        sk = sk.sub(c, k)
    return sk.displace(0.008, 7.0, seed=11, octaves=4)


def mandible():
    parts = []
    for sg in (-1, 1):
        parts.append(ellipsoid((1.98, sg * 0.215, 2.02), (0.24, 0.085, 0.125), rot((0, 0, 1), sg * 0.18)))
        ram = [(1.8, 2.02), (1.73, 2.28), (1.68, 2.43), (1.74, 2.47), (1.8, 2.4), (1.86, 2.36), (1.93, 2.38),
               (1.97, 2.25), (1.99, 2.1)]
        R = np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1)
        parts.append(plate((0, sg * 0.275, 0), R, ram, 0.035, 0.014, rnd=0.012))
        parts.append(ellipsoid((1.71, sg * 0.28, 2.455), (0.045, 0.07, 0.035)))            # condyle
    parts.append(ellipsoid((2.2, 0, 1.94), (0.11, 0.1, 0.06), rot((0, 1, 0), 0.5)))       # spout
    parts.append(ellipsoid((2.1, 0, 1.97), (0.1, 0.19, 0.07)))                            # symphysis
    m = union(0.04, *parts)
    for sg in (-1, 1):
        m = m.sub(box((2.0, sg * 0.215, 2.14), (0.15, 0.052, 0.045), rnd=0.02), 0.01)     # molar trough
        m = m.sub(sphere((1.93, sg * 0.33, 2.02), 0.012), 0.004)                          # mental foramen
    m = m.sub(ellipsoid((1.95, 0, 2.12), (0.18, 0.12, 0.09)), 0.03)                       # inner channel
    return m.displace(0.005, 9.0, seed=21)


def molar(c, up=True, seed=0):
    """Elephant molar: block of ~18 parallel enamel lamellae (planche à laver)."""
    L_, W, H = 0.29, 0.085, 0.13
    b = box(c, (L_ / 2, W / 2, H / 2), rnd=0.025)
    lam = 0.0155
    zdir = 1 if up else -1

    def f(P, b=b):
        q = P - c
        d = b(P)
        top = np.clip((q[:, 2] * zdir) / (H / 2) + 0.2, 0, 1)
        ridge = 0.0045 * np.sin(2 * np.pi * q[:, 0] / lam) * (0.35 + 0.65 * top)
        return d + ridge
    return custom(f, b.lo - 0.006, b.hi + 0.006).displace(0.002, 30, seed=seed)


def tusk(sg):
    ctrl = [V([2.24, sg * 0.14, 2.42]), V([2.4, sg * 0.18, 1.98]), V([2.62, sg * 0.33, 1.5]),
            V([3.08, sg * 0.58, 1.22]), V([3.6, sg * 0.74, 1.46]), V([3.92, sg * 0.66, 2.02]),
            V([3.86, sg * 0.42, 2.52]), V([3.6, sg * 0.2, 2.72])]
    ctrl = np.array(ctrl)
    s = np.concatenate([[0], np.cumsum(np.linalg.norm(np.diff(ctrl, axis=0), axis=1))])
    cs = [CubicSpline(s, ctrl[:, k]) for k in range(3)]
    n = 26
    ss = np.linspace(0, s[-1], n)
    pts = [V([c(x) for c in cs]) for x in ss]
    t = ss / s[-1]
    radii = 0.092 * (1 - 0.35 * t) - 0.05 * t ** 3.2
    radii = np.maximum(radii, 0.012)
    sh = tube(pts, list(radii))
    return sh.displace(0.0035, 9.0, seed=31 + sg)


# ------------------------------------------------------------------ limbs ---
def front(add, side, sg, dx, rng):
    y = 0.47 * sg
    G = V([1.1, y, 2.3])                      # glenoid
    E = V([1.0 + dx * 0.4, 0.445 * sg, 1.46])  # elbow
    W = V([1.12 + dx, 0.43 * sg, 0.47])       # wrist
    lat = V([0, sg, 0])
    # scapula
    v = norm(V([-0.28, -0.14 * sg, 1]))
    u = norm(np.cross(v, np.cross(V([1, 0, 0]), v)))
    w = np.cross(u, v)
    R = np.stack([u, v, w], 1)
    outline = [(0.08, 0.1), (0.15, 0.3), (0.19, 0.55), (0.12, 0.74), (-0.06, 0.8), (-0.32, 0.76),
               (-0.47, 0.64), (-0.36, 0.42), (-0.13, 0.19), (-0.07, 0.09)]
    sc = plate(G + v * 0.02, R, outline, 0.035, 0.012, falloff=0.12, rnd=0.015)
    ws = w if (w @ lat) > 0 else -w
    spine = ribbon([G + v * 0.14 + ws * 0.02, G + v * 0.4 - u * 0.03 + ws * 0.06, G + v * 0.74 - u * 0.05 + ws * 0.02],
                   [0.02, 0.03, 0.015], [0.01, 0.014, 0.01], ws)
    acr = ribbon([G + v * 0.3 - u * 0.02 + ws * 0.06, G + v * 0.2 - u * 0.2 + ws * 0.07], [0.03, 0.02], [0.012, 0.01], v)
    glen = ellipsoid(G, (0.1, 0.07, 0.11), R)
    scap = union(0.03, sc, spine, acr, glen).sub(sphere(G - v * 0.1, 0.085), 0.01)
    add(f'scapula_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], scap.displace(0.004, 12, seed=40 + sg), 0.006,
        weight=1.1, min_tris=1500)
    # humerus: head posterior, big deltoid crest, supracondylar crest
    hum = long_bone(G - V([0, 0, 0.06]), E, 0.14, 0.085, 0.125, lat, prox='ball', dist='pulley',
                    head_dir=V([-1, -0.3 * sg, 0.3]), head_off=0.06, head_r=0.1,
                    crests=[(0.06, 0.45, V([0.7, 0.7 * sg, 0]), 0.045, 0.03),
                            (0.6, 0.92, V([-0.5, 0.8 * sg, 0]), 0.035, 0.022)], seed=50 + sg,
                    extra=[ellipsoid(G + V([0.07, 0.07 * sg, -0.02]), (0.07, 0.06, 0.09))])
    add(f'humerus_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], hum, 0.0065, min_tris=1400)
    # ulna: massive, olecranon behind elbow; radius crosses in front
    olec = E + V([-0.14, 0, 0.08])
    ul = long_bone(E + V([-0.03, 0, -0.02]), W + V([-0.02, 0.01 * sg, 0]), 0.1, 0.07, 0.1, lat, prox='cup',
                   dist='flat', bow=0.03, bow_dir=V([-1, 0, 0]), seed=60 + sg,
                   extra=[ribbon([E + V([-0.02, 0, 0.0]), olec], [0.075, 0.055], [0.05, 0.04], lat),
                          sphere(olec, 0.055)])
    add(f'ulna_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], ul, 0.006, min_tris=1000)
    ra = long_bone(E + V([0.05, 0.03 * sg, -0.05]), W + V([0.05, -0.045 * sg, 0.0]), 0.055, 0.042, 0.075, lat,
                   prox='cup', dist='flat', bow=0.04, bow_dir=V([1, 0, 0]), seed=70 + sg)
    add(f'radius_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], ra, 0.005, min_tris=700)
    add(f'manus_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], foot(W, sg, front=True, rng=rng), 0.0045,
        weight=1.2, min_tris=2000)


def hind(add, side, sg, dx, rng):
    A = V([-1.12, 0.43 * sg, 2.02])            # acetabulum
    K = V([-0.97 + dx * 0.4, 0.445 * sg, 1.13])  # knee
    Ank = V([-1.08 + dx, 0.41 * sg, 0.45])     # ankle
    lat = V([0, sg, 0])
    fem = long_bone(A + V([0, 0.1 * sg, -0.03]), K, 0.13, 0.085, 0.13, lat, prox='ball', dist='condyles',
                    head_off=0.1, head_r=0.1, flat=1.35, cond_sep=0.06, seed=80 + sg,
                    extra=[ellipsoid(A + V([-0.02, 0.19 * sg, 0.0]), (0.07, 0.05, 0.09))],   # greater trochanter
                    crests=[(0.25, 0.55, V([-0.3, 1 * sg, 0]), 0.02, 0.02)])
    add(f'femur_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], fem, 0.0065, weight=1.1, min_tris=1400)
    add(f'patella_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'],
        ellipsoid(K + V([0.1, 0, 0.02]), (0.035, 0.05, 0.07)).displace(0.004, 25, seed=85 + sg), 0.004, min_tris=150)
    tib = long_bone(K + V([-0.01, 0, -0.05]), Ank, 0.12, 0.07, 0.09, lat, prox='plateau', dist='flat',
                    crests=[(0.03, 0.32, V([1, 0.2 * sg, 0]), 0.035, 0.025)], seed=90 + sg)
    add(f'tibia_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], tib, 0.006, min_tris=1100)
    fib = long_bone(K + V([-0.04, 0.085 * sg, -0.09]), Ank + V([-0.03, 0.085 * sg, 0.02]), 0.04, 0.02, 0.045, lat,
                    prox='none', dist='flat', bow=0.02, bow_dir=lat, seed=95 + sg)
    add(f'fibula_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], fib, 0.0045, min_tris=500)
    add(f'pes_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], foot(Ank, sg, front=False, rng=rng), 0.0045,
        weight=1.2, min_tris=2000)


def foot(W, sg, front, rng):
    """Elephant-type columnar foot: two stacked rows of carpals/tarsals under
    the wrist, 5 short near-vertical metapodials set in a front half-circle
    (on a fat pad in life), tiny phalanges ending in rounded nail bones."""
    parts = []
    k = 1.0 if front else 0.88
    c1 = W + V([0.0, 0, -0.08])
    c2 = W + V([0.02, 0, -0.18 * k])
    parts.append(carpal_block(c1, (0.1 * k, 0.12 * k, 0.07), np.eye(3), n=5, rng=rng))
    parts.append(carpal_block(c2, (0.11 * k, 0.13 * k, 0.055), np.eye(3), n=5, rng=rng))
    if not front:  # calcaneus projecting backward as the heel
        parts.append(ellipsoid(c1 + V([-0.13, 0.0, -0.02]), (0.08, 0.055, 0.065), rot((0, 1, 0), 0.4)))
    sizes = [0.7, 0.92, 1.0, 0.95, 0.75]
    for i in range(5):
        a = np.radians(np.interp(i, [0, 4], [-72, 72])) * sg
        size = sizes[i if sg > 0 else 4 - i] * k
        ca, sa = np.cos(a), np.sin(a)
        b0 = c2 + V([0.06 * ca, 0.085 * sa * k, -0.03])
        b1 = b0 + norm(V([0.35 * ca, 0.22 * sa, -1])) * 0.11 * size
        b2 = b1 + norm(V([0.9 * ca, 0.45 * sa, -0.7])) * 0.04 * size
        b3 = b2 + norm(V([1.0 * ca, 0.45 * sa, -0.4])) * 0.032 * size
        r = 0.036 * size
        pts = [b0, b1, b2, b3] if i not in (0, 4) else [b0, b1, b2]
        rad = [r, r * 0.92, r * 0.8, r * 0.7][:len(pts)]
        parts.append(digit(pts, rad, hoof={'radii': (r * 0.75, r * 0.9, r * 0.5)}, seed=int(rng.integers(1e4))))
    return union(0.01, *parts)


def pelvis():
    A = V([-1.12, 0.43, 2.02])
    v = norm(V([0.32, 0, 1]))
    u = V([0, 1, 0])
    w = np.cross(u, v)
    R = np.stack([u, v, w], 1)
    o = V([-1.1, 0, 2.05])
    il = [(0.26, 0.02), (0.39, -0.06), (0.49, -0.03), (0.6, 0.12), (0.8, 0.38), (0.88, 0.54), (0.82, 0.66),
          (0.62, 0.63), (0.38, 0.54), (0.2, 0.42), (0.17, 0.24)]
    ilium = plate(o, R, il, 0.05, 0.016, falloff=0.14, rnd=0.02)
    crest = ribbon([o + R @ V([0.2, 0.44, 0]), o + R @ V([0.62, 0.65, 0]), o + R @ V([0.87, 0.55, 0])],
                   [0.03, 0.035, 0.03], [0.03, 0.035, 0.03], w)
    acet = ellipsoid(A, (0.12, 0.1, 0.12))
    isch = ribbon([A + V([-0.06, -0.02, -0.05]), V([-1.4, 0.3, 1.82]), V([-1.47, 0.23, 1.72])],
                  [0.06, 0.045, 0.06], [0.035, 0.03, 0.04], (0, 0, 1))
    pub = ribbon([A + V([0.03, -0.06, -0.08]), V([-1.1, 0.16, 1.8]), V([-1.16, 0.02, 1.77])],
                 [0.05, 0.04, 0.05], [0.03, 0.025, 0.03], (1, 0, 0))
    bar = ribbon([V([-1.47, 0.23, 1.72]), V([-1.32, 0.1, 1.72]), V([-1.18, 0.02, 1.76])],
                 [0.05, 0.04, 0.045], [0.03, 0.025, 0.03], (0, 0, 1))
    half = union(0.04, ilium, crest, acet, isch, pub, bar).sub(sphere(A + V([0, 0.07, 0]), 0.1), 0.015)
    return mirror_y(half).displace(0.006, 8, seed=100)
