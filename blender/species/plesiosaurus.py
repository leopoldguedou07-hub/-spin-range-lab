"""Plésiosaure — Plesiosaurus dolichodeirus (3,5 m).

Silhouette: reptile marin à très long cou (~38 cervicales courtes en disque)
et petite tête (~20 cm, museau court, longues dents fines qui
s'entrecroisent); corps large et plat, côtes épaisses + panier de gastralia;
ceintures en grandes plaques ventrales (coracoïdes, pubis, ischions);
4 grandes nageoires en ailes (humérus/fémur courts et larges, puis
nombreuses phalanges en galets alignés); queue courte, la colonne plie vers
le bas au bout. Pose: nage, cou en légère courbe. Units: metres, X forward.
"""
import numpy as np
from sdf import V, norm, frame, rot, sphere, ellipsoid, tube, ribbon, plate, union, bezier, mirror_y
import anat
from anat import local, long_bone
from plans import Curve3, column, ribcage, gastralia, skull_shell, cone_tooth, tooth_row, lerp, side_of

anat.DETAIL = 0.9
P = 'PLES'
SPEC = dict(
    key='Plesiosaurus', budget=80000, base='#D9C7A4', dark='#8D7757',
    pieces={
        'Crane': [f'{P}_skull'], 'Machoire': [f'{P}_mandible'], 'Dent': [f'{P}_tooth_upper_L_01'],
        'Vertebre': [f'{P}_cervical_20'], 'Cote': [f'{P}_rib_L_08'], 'Omoplate': [f'{P}_scapula_L'],
        'Nageoire': [f'{P}_flipper_front_L'], 'Bassin': [f'{P}_pelvis'],
        'NageoireArriere': [f'{P}_flipper_hind_L'], 'Queue': [f'{P}_caudal_{i:02d}' for i in range(10, 17)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible', f'{P}_cervical_01', f'{P}_cervical_02']},
    closeup_dir=(0.4, -1.0, 0.2),
    views={'34': (0.45, -1.0, 0.4), 'side': (0.0, -1.0, 0.05)},
)


def skull(add, R, L, rng):
    prof = [(-0.01, -0.015), (0.0, 0.03), (0.04, 0.05), (0.09, 0.052), (0.13, 0.04), (0.17, 0.025), (0.2, 0.012),
            (0.205, -0.008), (0.17, -0.015), (0.1, -0.018), (0.03, -0.022)]
    holes = [(0.09, 0.025, 0.02, 0.016, 0.02),          # big orbit
             (0.035, 0.03, 0.02, 0.013, 0.015),         # upper temporal fenestra
             (0.13, 0.03, 0.006, 0.004, 0.012)]         # small external naris just before the orbit
    sk = skull_shell(L, R, prof, 0.035, 0.012, 0.2, holes, rnd=0.002)
    sk = union(0.002, sk, ribbon([L(0.0, 0, 0.045), L(0.06, 0, 0.055)], [0.004, 0.003], [0.002, 0.002], R[:, 1]),
               ellipsoid(L(-0.006, 0, -0.005), (0.007, 0.008, 0.007), R))
    add('skull', ['SKULL'], sk.displace(0.0005, 160, seed=5, octaves=4).detail(0.0005, 330, seed=6), 0.0005,
        weight=2.0, min_tris=4000)
    # mandible: long and narrow, robust hinge, symphysis at the front
    parts = [ribbon([L(-0.005, sg * 0.033, -0.022), L(0.08, sg * 0.028, -0.028), L(0.2, sg * 0.006, -0.022)],
                    [0.012, 0.012, 0.008], [0.0035, 0.0035, 0.003], R[:, 2]) for sg in (-1, 1)]
    parts += [ellipsoid(L(-0.004, sg * 0.034, -0.018), (0.006, 0.006, 0.006), R) for sg in (-1, 1)]
    add('mandible', ['SKULL'], union(0.0025, *parts).displace(0.0004, 200, seed=7), 0.0005, weight=1.3,
        min_tris=1500)
    out = []
    dn, bk = -R[:, 2], -R[:, 0]
    for side, sg in (('L', 1), ('R', -1)):
        # long, slender, slightly procumbent fangs that interlock
        up = [(L(0.195 - 0.012 * q, sg * (0.008 + 0.022 * q / 11), -0.012), norm(dn + R[:, 0] * 0.35 * (q < 4)
                                                                                    + R[:, 1] * sg * 0.15), bk,
               0.02 - 0.0007 * q) for q in range(12)]
        lo = [(L(0.19 - 0.012 * q, sg * (0.006 + 0.02 * q / 11), -0.02), norm(-dn + R[:, 0] * 0.35 * (q < 4)
                                                                                + R[:, 1] * sg * 0.2), bk,
               0.019 - 0.0007 * q) for q in range(12)]
        mk = lambda b, d, bk_, h, s: cone_tooth(b, d, bk_, h, s, curve=0.2, r=0.1)
        out += tooth_row(f'{P}_tooth_upper_{side}', ['SKULL', 'SKULL_teeth'], mk, up, rng, voxel_k=0.04)
        out += tooth_row(f'{P}_tooth_lower_{side}', ['SKULL', 'SKULL_teeth'], mk, lo, rng, voxel_k=0.04)
    return out


def cerv(t, i):
    cr = 0.016 + 0.02 * t ** 1.2
    return 0.034 + 0.012 * t, dict(cr=cr, ends='amphi', canal=cr * 0.35, sl=cr * 0.9, tilt=0.35, sw=cr * 0.9,
                                   st=cr * 0.2, tl=cr * 0.9, tr=cr * 0.3, tu=-cr * 0.5, zyg=cr * 0.4, knob=0.4)


def dors(t, i):
    cr = 0.038
    return 0.05, dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=0.05, tilt=0.1, sw=0.035, st=0.008, tl=0.07,
                      tr=0.012, tu=0.03, zyg=cr * 0.35, knob=0.6)


def sacr(t, i):
    return 0.045, dict(cr=0.036, ends='amphi', canal=0.01, sl=0.045, tilt=0.0, sw=0.03, st=0.008, tl=0.06,
                       tr=0.014, tu=0.0)


def caud(t, i):
    cr = 0.032 * (1 - 0.8 * t)
    return 0.042 * (1 - 0.4 * t), dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=max(0.035 * (1 - 1.3 * t), 0.003),
                                       tilt=0.3, sw=0.02 * (1 - t) + 0.004, st=cr * 0.2,
                                       tl=max(0.05 * (1 - 1.5 * t), 0.0), tr=cr * 0.3, tu=0.0,
                                       chevron=0.03 * (1 - t) if i > 1 else 0)


def flipper(G, sg, length, rng, hind=False):
    """Hydrofoil paddle: short broad propodial (humerus/femur), block-like
    epipodials, then 5 digits of many pebble phalanges packed into a long
    wing swept backward, trailing edge longer."""
    out_ = norm(V([-0.35, sg * 1.0, -0.12]))                       # paddle axis: outward, back, a bit down
    back = norm(V([-1, 0, 0]) - out_ * (out_ @ V([-1, 0, 0])))
    n_ = np.cross(out_, back)
    Lp = length * 0.26
    prop_end = G + out_ * Lp
    lat = norm(np.cross(out_, V([0, 0, 1])))
    prop = long_bone(G, prop_end, length * 0.05, length * 0.035, length * 0.075, lat, prox='ball', dist='flat',
                     flat=1.8, head_r=length * 0.05, head_off=length * 0.01, seed=int(rng.integers(1e4)))
    parts = [prop]
    # epipodials: two broad flat blocks side by side
    for q in (-1, 1):
        c = prop_end + out_ * length * 0.05 + back * q * length * 0.035
        parts.append(ellipsoid(c, (length * 0.04, length * 0.032, length * 0.014), np.stack([out_, back, n_], 1)))
    base = prop_end + out_ * length * 0.1
    for d in range(5):
        off = (d - 2) * length * 0.028
        n_ph = [7, 10, 11, 10, 8][d]
        sweep = 0.15 + 0.1 * d                                       # posterior digits swept back more
        dl = length * (0.58 + 0.05 * (d in (1, 2, 3)))
        start = base + back * off
        end = start + norm(out_ + back * sweep) * dl
        for q in range(n_ph):
            t = q / (n_ph - 1)
            c = start + (end - start) * (t ** 0.95)
            r = length * 0.018 * (1 - 0.7 * t) * (1.1 if d in (1, 2) else 0.9)
            parts.append(ellipsoid(c, (r * 1.2, r * 1.05, r * 0.55), np.stack([out_, back, n_], 1)))
    return union(length * 0.006, *parts).displace(length * 0.002, 45 / length, seed=int(rng.integers(1e4)))


def bones():
    rng = np.random.default_rng(131)
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    spine = Curve3([(1.55, 1.26), (1.3, 1.22), (0.98, 1.08), (0.6, 0.95), (0.2, 0.88), (-0.25, 0.87), (-0.85, 0.86),
                    (-1.25, 0.82), (-1.6, 0.74), (-1.85, 0.62)])
    series = []
    for kind, n, fn in (('cervical', 38, cerv), ('dorsal', 20, dors), ('sacral', 3, sacr), ('caudal', 28, caud)):
        for i in range(n):
            series.append((kind,) + fn(i / (n - 1), i + 1))
    frames, fused = column(add, spine, series, rng, gap=0.003, s0=0.006, vox=0.09)
    sac = [frames[k] for k in sorted(k for k in frames if k[0] == 'sacral')]
    add('sacrum', ['SPINE', 'SPINE_sacral'], union(0.006, *fused), 0.0022, min_tris=600)
    hip = (sac[0][0] + sac[-1][0]) / 2
    sh = frames[('dorsal', 2)][0]
    # thick single-headed ribs of a wide, flat trunk
    ribcage(add, frames, 'dorsal', dict(depth=[(0, 0.18), (0.3, 0.3), (0.7, 0.3), (1, 0.14)],
                                        ymax=[(0, 0.2), (0.4, 0.34), (0.8, 0.33), (1, 0.2)],
                                        yend=[(0, 0.15), (0.5, 0.28), (1, 0.18)], back=[(0, 0.05), (1, 0.08)],
                                        wid=[(0, 0.018), (0.5, 0.022), (1, 0.016)], thick=[(0, 0.012), (1, 0.01)],
                                        wdir=V([1, 0, 0.4])), rng, first=1, last=19, vox=0.25)
    # dense gastral basket
    gastralia(add, sh + V([-0.05, 0, -0.28]), hip + V([0.12, 0, -0.26]), 0.36, 14, 0.008, rng)
    # pectoral girdle: short scapula blade + huge ventral coracoid plate (each side)
    for side, sg in (('L', 1), ('R', -1)):
        G = sh + V([0.02, 0.2 * sg, -0.2])
        cor = plate(G + V([0.0, -0.1 * sg, -0.06]), np.eye(3),
                    [(0.12, -0.1), (0.2, 0.0), (0.12, 0.1), (-0.25, 0.1), (-0.32, 0.0), (-0.25, -0.1)],
                    0.014, 0.006, rnd=0.004)
        scp = ribbon([G + V([0.05, 0.02 * sg, 0.0]), G + V([0.13, 0.0, 0.06]), G + V([0.14, -0.06 * sg, 0.12])],
                     [0.05, 0.035, 0.025], [0.012, 0.01, 0.008], V([0, sg, 0]))
        scap = union(0.008, cor, scp, ellipsoid(G, (0.035, 0.03, 0.03)))
        add(f'scapula_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], scap.displace(0.0015, 60, seed=40 + sg),
            0.0022, min_tris=1500)
        add(f'flipper_front_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], flipper(G, sg, 0.95, rng), 0.0022,
            weight=1.4, min_tris=4000)
    # pelvic girdle: broad pubis + ischium plates, slender vertical ilium
    Ap = hip + V([0.0, 0.17, -0.22])
    half = union(0.008,
                 plate(Ap + V([0.1, -0.08, -0.04]), np.eye(3), [(-0.1, -0.08), (0.12, -0.1), (0.15, 0.05), (0.0, 0.08),
                                                                (-0.1, 0.06)], 0.012, 0.005, rnd=0.004),      # pubis
                 plate(Ap + V([-0.12, -0.08, -0.04]), np.eye(3), [(-0.12, -0.06), (0.06, -0.08), (0.08, 0.06),
                                                                  (-0.12, 0.05)], 0.012, 0.005, rnd=0.004),   # ischium
                 ribbon([Ap, Ap + V([-0.02, -0.06, 0.12]), Ap + V([-0.03, -0.11, 0.2])], [0.03, 0.02, 0.025],
                        [0.012, 0.01, 0.01], V([1, 0, 0])),                                                  # ilium
                 ellipsoid(Ap, (0.035, 0.03, 0.03)))
    add('pelvis', ['PELVIS'], mirror_y(half).displace(0.0015, 60, seed=4), 0.0022, weight=1.2, min_tris=2000)
    for side, sg in (('L', 1), ('R', -1)):
        add(f'flipper_hind_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'],
            flipper(Ap * V([1, sg, 1]), sg, 0.85, rng, hind=True), 0.0022, weight=1.3, min_tris=3500)
    O, _ = spine.at(0.0)
    R, L = local(O + V([0.012, 0, 0]), norm(V([1, 0, -0.25])), (0, 0, 1))
    B.extend(skull(add, R, L, rng))
    return B
