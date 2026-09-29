"""Glyptodon — Glyptodon clavipes (3,3 m).

Silhouette: tatou géant de la taille d'une voiture; carapace en dôme (~1,5 m
de haut) faite d'environ 1000 plaques osseuses hexagonales soudées, chacune
ornée d'une rosette en relief; bouclier sur le crâne; queue en tube
d'anneaux osseux emboîtés; crâne court et haut avec une apophyse descendant
sous l'œil; molaires à 3 lobes; pattes courtes et massives.
Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, sphere, ellipsoid, box, tube, ribbon, plate, union, custom
import anat
from anat import carpal_block, digit
import mammal
from plans import skull_shell, tooth_row, Curve3

anat.DETAIL = 0.9
P = 'GLYP'
K = 2.0
SPEC = dict(
    key='Glyptodon', budget=110000, base='#D3BF9A', dark='#877053',
    pieces={
        'Crane': [f'{P}_skull'], 'Machoire': [f'{P}_mandible'], 'Dent': [f'{P}_molar_upper_L_01'],
        'Vertebre': [f'{P}_thoracic_06'], 'Carapace': [f'{P}_carapace'],
        'Bras': [f'{P}_humerus_L', f'{P}_radius_L', f'{P}_ulna_L'], 'Bassin': [f'{P}_pelvis'],
        'Femur': [f'{P}_femur_L'], 'Pied': [f'{P}_pes_L'], 'Queue': [f'{P}_tail_rings'],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible']}, closeup_dir=(0.6, -1.0, 0.2),
    views={'34': (0.6, -1.0, 0.3), 'side': (0.0, -1.0, 0.02)},
)

C0 = V([-0.05, 0, 0.62])          # carapace centre (rim level)
RAD = V([1.0, 0.68, 0.88])         # dome semi-axes


def hex_rosette(u, v, cell):
    """Hexagonal tiling in (u, v): returns (r, ring) where r is the normalised
    distance to the nearest cell centre (0 centre .. ~1 at the suture)."""
    a = cell
    q = (u * np.sqrt(3) / 3 - v / 3) / a
    r_ = (2 * v / 3) / a
    x, z = q, r_
    y = -x - z
    rx, ry, rz = np.round(x), np.round(y), np.round(z)
    dx, dy, dz = np.abs(rx - x), np.abs(ry - y), np.abs(rz - z)
    m1 = (dx > dy) & (dx > dz)
    m2 = ~m1 & (dy > dz)
    rx = np.where(m1, -ry - rz, rx)
    rz = np.where(~m1 & ~m2, -rx - ry, rz)
    cu = a * np.sqrt(3) * (rx + rz / 2)
    cv = a * 1.5 * rz
    return np.hypot(u - cu, v - cv) / (a * 0.95)


def carapace_shape():
    E = ellipsoid(C0, RAD)
    t = 0.035

    def f(Pp):
        d = np.abs(E(Pp)) - t
        q = (Pp - C0) / RAD
        lon = np.arctan2(q[:, 1], q[:, 0])
        lat = np.arcsin(np.clip(q[:, 2] / np.maximum(np.linalg.norm(q, axis=1), 1e-9), -1, 1))
        u, v = lon * 0.84, lat * 0.84
        r = hex_rosette(u, v, 0.075)
        boss = np.exp(-(r / 0.28) ** 2)
        ring = np.exp(-((r - 0.62) / 0.08) ** 2)
        suture = np.clip((r - 0.86) / 0.14, 0, 1) ** 2
        return d - 0.022 * boss - 0.01 * ring + 0.016 * suture
    shell = custom(f, E.lo - 0.05, E.hi + 0.05)
    cut = box(C0 + V([0, 0, 0.5]), (1.2, 0.9, 0.5))          # keep the upper dome only
    rim = tube([C0 + V([RAD[0] * np.cos(a), RAD[1] * np.sin(a), 0.0]) for a in np.linspace(0, 2 * np.pi, 33)],
               [0.035] * 33)
    # notches over the head and tail
    sh = shell.inter(cut, 0.01)
    sh = union(0.01, sh, rim.inter(cut, 0.0))
    sh = sh.sub(ellipsoid(C0 + V([RAD[0], 0, 0.02]), (0.12, 0.3, 0.22)), 0.03)
    sh = sh.sub(ellipsoid(C0 + V([-RAD[0], 0, 0.02]), (0.12, 0.2, 0.18)), 0.03)
    return sh


def trilobed_molar(base, down, back, h, seed):
    side = norm(np.cross(down, back))
    Rm = np.stack([norm(back), side, norm(down)], 1)
    lobes = [ellipsoid(base + down * h * 0.5 + back * s * h * 0.2, (h * 0.12, h * 0.16, h * 0.55), Rm)
             for s in (-1, 0, 1)]
    roots = [tube([base + down * h * 0.05 + back * s * h * 0.2, base - down * h * 0.25 + back * s * h * 0.22],
                  [h * 0.08, h * 0.04]) for s in (-1, 1)]
    return union(h * 0.04, *lobes, *roots).displace(h * 0.01, 10 / h, seed=seed)


def skull(R, L, rng, add):
    prof = [(-0.02, -0.03), (0.0, 0.1), (0.1, 0.16), (0.24, 0.16), (0.34, 0.12), (0.4, 0.06), (0.42, -0.02),
            (0.36, -0.06), (0.2, -0.08), (0.05, -0.06)]
    holes = [(0.26, 0.07, 0.035, 0.035, 0.04), (0.42, 0.02, 0.03, 0.04, 0.04, False)]
    sk = skull_shell(L, R, prof, 0.13, 0.08, 0.42, holes, rnd=0.01)
    parts = [sk, ellipsoid(L(-0.02, 0, 0.0), (0.03, 0.06, 0.035), R)]
    for sg in (-1, 1):
        parts.append(tube([L(0.32, sg * 0.1, 0.0), L(0.24, sg * 0.14, 0.0), L(0.12, sg * 0.12, 0.02)],
                          [0.018, 0.02, 0.016]))
        parts.append(ribbon([L(0.25, sg * 0.14, 0.0), L(0.25, sg * 0.14, -0.1), L(0.23, sg * 0.13, -0.17)],
                            [0.05, 0.04, 0.025], [0.015, 0.013, 0.011], R[:, 0]))       # descending process
    # cephalic shield: small rosetted cap on the skull roof
    cap = plate(L(0.18, 0, 0.16), R, [(-0.1, -0.08), (0.12, -0.07), (0.16, 0.0), (0.12, 0.07), (-0.1, 0.08)],
                0.012, 0.008, rnd=0.004)
    parts += [cap] + [sphere(L(0.18 + 0.06 * a, 0.05 * b, 0.172), 0.012) for a in (-1, 0, 1) for b in (-1, 0, 1)]
    sk = union(0.01, *parts)
    sk = sk.sub(ellipsoid(L(0.2, 0, -0.08), (0.17, 0.07, 0.03), R), 0.008)
    add('skull', ['SKULL'], sk.displace(0.003, 18, seed=5, octaves=4).detail(0.0035, 40, seed=6), 0.0026,
        weight=2.0, min_tris=5500)
    out = []
    dn, bk = -R[:, 2], -R[:, 0]
    for side, sg in (('L', 1), ('R', -1)):
        up = [(L(0.38 - 0.035 * q, sg * 0.045, -0.06), dn, bk, 0.07) for q in range(8)]
        lo = [(L(0.37 - 0.035 * q, sg * 0.045, -0.09), -dn, bk, 0.07) for q in range(8)]
        out += tooth_row(f'{P}_molar_upper_{side}', ['SKULL', 'SKULL_teeth'], trilobed_molar, up, rng, voxel_k=0.03)
        out += tooth_row(f'{P}_molar_lower_{side}', ['SKULL', 'SKULL_teeth'], trilobed_molar, lo, rng, voxel_k=0.03)
    parts = []
    for sg in (-1, 1):
        parts.append(ribbon([L(0.06, sg * 0.1, -0.1), L(0.25, sg * 0.07, -0.14), L(0.42, sg * 0.03, -0.09)],
                            [0.08, 0.1, 0.05], [0.022, 0.025, 0.02], R[:, 2]))
        parts.append(ribbon([L(0.07, sg * 0.1, -0.08), L(0.04, sg * 0.1, 0.06)], [0.1, 0.05], [0.02, 0.016], R[:, 0]))
        parts.append(ellipsoid(L(0.03, sg * 0.1, 0.06), (0.025, 0.03, 0.018), R))
    add('mandible', ['SKULL'], union(0.012, *parts).displace(0.0025, 22, seed=20).detail(0.003, 46, seed=21), 0.0026,
        weight=1.3, min_tris=2500)
    return out


def cerv(t, i):
    cr = 0.04
    return 0.045, dict(cr=cr, ends='flat', canal=cr * 0.45, sl=0.02 + 0.03 * t, tilt=0.3, sw=0.03, st=0.008,
                       tl=0.06, tr=0.012, tu=-0.005, zyg=0.015, knob=0.4)


def thor(t, i):
    cr = 0.04
    return 0.055, dict(cr=cr, ends='flat', canal=0.014, sl=0.1, tilt=0.1, sw=0.045, st=0.01, tl=0.07, tr=0.012,
                       tu=0.02, zyg=0.014, knob=0.8)


def lumb(t, i):
    return 0.055, dict(cr=0.045, ends='flat', canal=0.014, sl=0.1, tilt=0.0, sw=0.05, st=0.01, tl=0.08, tr=0.014,
                       tu=0.0, zyg=0.015, knob=0.8)


def sacr(t, i):
    return 0.06, dict(cr=0.045, ends='flat', canal=0.014, sl=0.1, tilt=0.0, sw=0.05, st=0.01, tl=0.12, tr=0.02)


def caud(t, i):
    cr = 0.05 * (1 - 0.6 * t)
    return 0.07 * (1 - 0.3 * t), dict(cr=cr, ends='flat', canal=cr * 0.3, sl=max(0.05 * (1 - t), 0.01), tilt=0.3,
                                      sw=0.03, st=cr * 0.2, tl=max(0.08 * (1 - t), 0.02), tr=cr * 0.3, tu=0.0,
                                      chevron=0.05 * (1 - t) if i > 1 else 0)


def stubby_foot(W, sg, rng, n, r, ln, claw):
    parts = [carpal_block(W + V([0, 0, -r]), (r * 2.2, r * 2.4, r), np.eye(3), n=4, rng=rng)]
    for q in range(n):
        a = np.radians(np.interp(q, [0, n - 1], [-30, 30])) * sg
        dd = V([np.cos(a), np.sin(a), 0])
        b0 = W + V([r * 0.8, 0, -r * 1.6]) + dd * r
        b1 = b0 + norm(dd + V([0, 0, -1.1])) * ln
        b1[2] = max(b1[2], r * 0.6)
        parts.append(digit([b0, b1, b1 + dd * ln * 0.4], [r * 0.9, r * 0.8, r * 0.7], knuckle=1.2,
                           claw={'length': claw, 'r': r * 0.6} if claw else None,
                           hoof=None if claw else {'radii': (r * 0.9, r * 1.0, r * 0.4)}, seed=int(rng.integers(1e4))))
    return union(r * 0.25, *parts)


def features(add, frames, anc, rng):
    add('carapace', ['SPECIAL_FEATURES'], carapace_shape(), 0.005, weight=3.0, min_tris=14000)
    # tail armour: nested conical bony rings around the caudal vertebrae
    tail = sorted(i for (kk, i) in frames if kk == 'caudal')
    rings = []
    for n_, i in enumerate(tail[:-1]):
        c, fwd, up, p = frames[('caudal', i)]
        c2 = frames[('caudal', tail[n_ + 1])][0]
        r0 = 0.15 * (1 - 0.6 * n_ / len(tail))
        ring = tube([c + fwd * p['cl'] * 0.3, c2], [r0, r0 * 0.93]).sub(tube([c + fwd * p['cl'] * 0.6, c2 - fwd * 0.01],
                                                                          [r0 * 0.8, r0 * 0.74]), 0.004)
        bumps = [sphere(c + (up * np.cos(a) + np.cross(up, fwd) * np.sin(a)) * r0 * 1.02 - fwd * p['cl'] * 0.2,
                        r0 * 0.12) for a in np.linspace(0, 2 * np.pi, 11)[:-1]]
        rings.append(union(0.005, ring, *bumps))
    add('tail_rings', ['SPINE', 'SPINE_tail'], union(0.0, *rings).displace(0.002, 30, seed=7), 0.0035, weight=1.5,
        min_tris=5000)
    return []


def joints(side, sg, a):
    sh, A = a['sh'], a['A'] * V([1, sg, 1])
    G = sh + V([0.05, 0.3 * sg, -0.36])
    E = G + V([-0.08, 0.03 * sg, -0.3])
    W = E + V([0.05, 0.0, -0.24])
    Kn = A + V([0.1, 0.03 * sg, -0.36])
    return dict(G=G, E=E, W=W, A=A, K=Kn, Ank=Kn + V([-0.06, 0.0, -0.37]))


CFG = dict(
    seed=121, k=K,
    spine=[(1.2, 0.72), (1.05, 0.8), (0.9, 0.9), (0.6, 1.08), (0.2, 1.2), (-0.2, 1.2), (-0.55, 1.1), (-0.85, 0.85),
           (-1.25, 0.62), (-1.7, 0.5)],
    series=[('cervical', 7, cerv), ('thoracic', 12, thor), ('lumbar', 3, lumb), ('sacral', 8, sacr),
            ('caudal', 12, caud)],
    ribs=dict(depth=[(0, 0.35), (0.3, 0.5), (0.6, 0.5), (1, 0.35)], ymax=[(0, 0.3), (0.4, 0.45), (1, 0.4)],
              yend=[(0, 0.15), (0.5, 0.3), (1, 0.32)], back=[(0, 0.06), (1, 0.12)], wid=[(0, 0.028), (1, 0.025)],
              thick=[(0, 0.014), (1, 0.012)]),
    sternum_rel=(0.03, 0, -0.28), A_rel=(-0.02, 0.11, -0.1), pelvis_k=2.6, ilium_wing=2.0, ilium_flare=0.08,
    joints=joints, r_front=0.022, r_hind=0.028, scap=(0.18, 0.11, 0.006, 0.45), delto=1.8, olec=1.5,
    manus=lambda W, sg, side, rng, add: stubby_foot(W, sg, rng, 4, 0.03, 0.08, 0.06),
    pes=lambda Ank, sg, side, rng, add: stubby_foot(Ank, sg, rng, 5, 0.035, 0.07, None),
    skull=skull, skull_dir=(1, 0, -0.35), features=features,
)


def bones():
    return mammal.build(P, CFG)
