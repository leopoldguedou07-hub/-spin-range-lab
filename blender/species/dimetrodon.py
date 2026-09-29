"""Dimétrodon — Dimetrodon grandis (3,5 m).

Silhouette: synapside (ancêtre lointain des mammifères), pas un dinosaure;
grande voile dorsale sur de longues épines (~1 m, section en 8); pattes
écartées de lézard (humérus torsadé à 90°); crâne haut (~45 cm) avec deux
sortes de dents (canines en crocs + petites dents), une seule fenêtre derrière
l'œil. Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, frame, sphere, ellipsoid, tube, ribbon, plate, union, bezier, mirror_y, custom
import anat
from anat import local, long_bone, digit, carpal_block
from plans import Curve3, column, ribcage, skull_shell, cone_tooth, blade_tooth, tooth_row, claw_shape
import ornitho

anat.DETAIL = 1.0
P = 'DIME'
SPEC = dict(
    key='Dimetrodon', budget=75000, base='#D6C39E', dark='#8B7456',
    pieces={
        'Crane': [f'{P}_skull'], 'Machoire': [f'{P}_mandible_L'], 'Dent': [f'{P}_tooth_upper_L_01'],
        'Vertebre': [f'{P}_dorsal_03'], 'Cote': [f'{P}_rib_L_06'], 'Voile': [f'{P}_dorsal_11'],
        'Omoplate': [f'{P}_scapula_L'], 'Bras': [f'{P}_humerus_L'], 'Bassin': [f'{P}_pelvis'],
        'Femur': [f'{P}_femur_L'], 'Queue': [f'{P}_caudal_{i:02d}' for i in range(8, 15)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible_L', f'{P}_mandible_R']}, closeup_dir=(0.3, -1.0, 0.1),
    views={'34': (0.55, -1.0, 0.3), 'side': (0.0, -1.0, 0.02)},
)


def skull(R, L, rng, add):
    prof = [(-0.02, -0.06), (0.0, 0.12), (0.1, 0.19), (0.25, 0.17), (0.38, 0.12), (0.45, 0.06), (0.46, -0.04),
            (0.38, -0.09), (0.2, -0.1), (0.05, -0.1)]
    holes = [(0.2, 0.08, 0.045, 0.045, 0.04),     # orbit
             (0.08, 0.0, 0.035, 0.06, 0.04),      # single temporal fenestra (synapsid)
             (0.44, 0.03, 0.018, 0.012, 0.02)]    # naris
    sk = skull_shell(L, R, prof, 0.07, 0.03, 0.46, holes, rnd=0.008, t_edge=0.018, falloff=0.06)
    sk = union(0.005, sk, ellipsoid(L(-0.015, 0, -0.02), (0.015, 0.015, 0.015), R))
    add('skull', ['SKULL'], sk.displace(0.0015, 40, seed=5, octaves=4).detail(0.0016, 90, seed=6), 0.0014,
        weight=2.0, min_tris=5000)
    out = []
    for side, sg in (('L', 1), ('R', -1)):
        m = ribbon([L(0.0, sg * 0.065, -0.09), L(0.2, sg * 0.055, -0.1), L(0.43, sg * 0.025, -0.075)],
                   [0.03, 0.028, 0.022], [0.007, 0.007, 0.006], R[:, 2])
        m = m.sub(ellipsoid(L(0.12, sg * 0.06, -0.09), (0.03, 0.01, 0.01), R), 0.002)
        add(f'mandible_{side}', ['SKULL'], m.displace(0.001, 60, seed=20 + sg), 0.0011, min_tris=1400)
        dn, bk = -R[:, 2], -R[:, 0]
        # two tooth types: big serrated "dagger" canines + small teeth
        can = [(L(0.38, sg * 0.035, -0.07), dn, bk, 0.07), (L(0.33, sg * 0.04, -0.075), dn, bk, 0.06)]
        small = [(L(0.3 - 0.022 * k, sg * (0.045 + 0.002 * k), -0.075), dn, bk, 0.022 - 0.0008 * k) for k in range(10)]
        lower = [(L(0.4 - 0.025 * k, sg * (0.03 + 0.003 * k), -0.085), -dn, bk, 0.035 if k < 2 else 0.02)
                 for k in range(12)]
        out += tooth_row(f'{P}_tooth_upper_{side}', ['SKULL', 'SKULL_teeth'], blade_tooth, can + small, rng,
                         first_unique=False)
        out += tooth_row(f'{P}_tooth_lower_{side}', ['SKULL', 'SKULL_teeth'], blade_tooth, lower, rng,
                         first_unique=False)
    return out


def sail(t):
    return 0.12 + 0.95 * np.sin(np.pi * np.clip(t * 1.05, 0, 1)) ** 0.9


def dors_extra(kind, i, c, fwd, up, p, sh):
    """Figure-8 section sail spine: two fused rods (ribbon + side ridges)."""
    if kind == 'dorsal' and p['sl'] > 0.25:
        side = np.cross(up, fwd)
        top = c + up * (p['cr'] * 1.5 + p['sl'])
        ridges = [tube([c + up * p['cr'] * 1.8 + side * s * 0.004, top + side * s * 0.003], [0.005, 0.003])
                  for s in (-1, 1)]
        return union(0.002, sh, *ridges)
    return None


def cerv(t, i):
    cr = 0.022
    return 0.04, dict(cr=cr, ends='amphi', canal=cr * 0.4, sl=0.05, tilt=0.3, sw=0.02, st=0.004, tl=0.03, tr=0.006,
                      tu=-0.005, zyg=0.008, knob=0.5)


def dors(t, i):
    cr = 0.024
    return 0.042, dict(cr=cr, ends='amphi', canal=0.008, sl=sail(t), tilt=-0.05 + 0.2 * t, sw=0.012, st=0.0045,
                       tl=0.035, tr=0.006, tu=0.005, zyg=0.009, knob=0.4)


def sacr(t, i):
    return 0.04, dict(cr=0.023, ends='flat', canal=0.007, sl=0.12, tilt=0.2, sw=0.012, st=0.005, tl=0.04, tr=0.01)


def caud(t, i):
    cr = 0.02 * (1 - 0.8 * t)
    return 0.036 * (1 - 0.3 * t), dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=max(0.08 * (1 - 1.5 * t), 0.005),
                                       tilt=0.45, sw=0.012, st=cr * 0.2, tl=max(0.03 * (1 - 3 * t), 0), tr=cr * 0.25,
                                       tu=0.0, chevron=0.035 * (1 - t) if i > 1 else 0)


def sprawl_limb(add, side, sg, top, rng, front, P_):
    """Sprawling limb: upper bone held out sideways (twisted humerus, broad
    ends), lower bone vertical, splayed 5-toed clawed foot."""
    lat = V([0, sg, 0])
    C = ['FRONT_LIMBS' if front else 'HIND_LIMBS']
    C = C + [f'{C[0]}_{side}']
    L_up = 0.2 if front else 0.23
    knee = top + V([0.03 if front else -0.03, sg * L_up * 0.9, -L_up * 0.35])
    ank = knee + V([0.04 if front else -0.04, sg * 0.02, -0.19])
    r = 0.014 if front else 0.013
    up = long_bone(top, knee, r * 2.6 if front else r * 1.9, r, r * 2.4 if front else r * 1.8, V([0, 0, 1]),
                   prox='plateau' if front else 'ball', dist='condyles', head_dir=-lat, head_off=r, head_r=r * 1.3,
                   flat=1.6 if front else 1.2, seed=int(rng.integers(1e4)))
    add(('humerus_' if front else 'femur_') + side, C, up, 0.0011, weight=1.1, min_tris=1000)
    lo = long_bone(knee + V([0, 0, -r]), ank, r * 1.5, r * 0.8, r * 1.3, lat, prox='plateau', dist='flat',
                   seed=int(rng.integers(1e4)))
    lo2 = long_bone(knee + V([-r * 1.2, 0, -r]), ank + V([-r * 1.2, 0, 0]), r * 1.1, r * 0.5, r, lat, prox='none',
                    dist='flat', seed=int(rng.integers(1e4)))
    add(('ulna_' if front else 'tibia_') + side, C, lo, 0.001, min_tris=700)
    add(('radius_' if front else 'fibula_') + side, C, lo2, 0.0009, min_tris=500)
    parts = [carpal_block(ank + V([0, 0, -0.01]), (0.02, 0.025, 0.01), np.eye(3), n=5, rng=rng)]
    for k in range(5):
        a = np.radians(np.interp(k, [0, 4], [-10, 70])) * sg + (0.3 * sg if not front else 0)
        dd = V([np.cos(a), np.sin(a), 0])
        n_ph = [2, 3, 4, 5, 4][k]
        pts = [ank + V([0, 0, -0.018])]
        for q in range(n_ph + 1):
            pts.append(pts[-1] + dd * 0.018 * (1.2 if q == 0 else 0.9) + V([0, 0, -0.004 if q == 0 else 0]))
        for pp in pts:
            pp[2] = max(pp[2], 0.004)
        parts.append(digit(pts, list(np.linspace(0.0045, 0.003, len(pts))), knuckle=1.3,
                           claw={'length': 0.012, 'r': 0.003}, seed=int(rng.integers(1e4))))
    add(('manus_' if front else 'pes_') + side, C, union(0.002, *parts), 0.0006, weight=1.2, min_tris=1500)


def bones():
    rng = np.random.default_rng(91)
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    spine = Curve3([(0.75, 0.5), (0.62, 0.48), (0.5, 0.46), (0.3, 0.46), (0.0, 0.47), (-0.3, 0.45), (-0.45, 0.42),
                    (-0.9, 0.34), (-1.6, 0.18), (-2.3, 0.1)])
    series = []
    for kind, n, fn in (('cervical', 7, cerv), ('dorsal', 20, dors), ('sacral', 3, sacr), ('caudal', 45, caud)):
        for i in range(n):
            series.append((kind,) + fn(i / (n - 1), i + 1))
    frames, fused = column(add, spine, series, rng, gap=0.004, s0=0.01, extra=dors_extra, vox=0.09)
    sac = [frames[k] for k in sorted(k for k in frames if k[0] == 'sacral')]
    add('sacrum', ['SPINE', 'SPINE_sacral'], union(0.004, *fused), 0.0015, min_tris=900)
    hip = (sac[0][0] + sac[-1][0]) / 2
    sh = frames[('dorsal', 2)][0]
    ribcage(add, frames, 'dorsal', dict(depth=[(0, 0.18), (0.3, 0.28), (0.6, 0.27), (1, 0.12)],
                                        ymax=[(0, 0.14), (0.4, 0.2), (1, 0.14)], yend=[(0, 0.07), (0.5, 0.12), (1, 0.1)],
                                        back=[(0, 0.04), (1, 0.08)], wid=[(0, 0.01), (1, 0.008)],
                                        thick=[(0, 0.005), (1, 0.004)]), rng, last=18, vox=0.22)
    # pelvis: broad low synapsid plate with a laterally open hip socket
    A = hip + V([0.0, 0.06, -0.06])
    Rv = np.stack([V([1, 0, 0]), V([0, 0, 1]), V([0, -1, 0])], 1) @ rot((1, 0, 0), 0.5)
    half = union(0.005, plate(A + V([0, -0.01, 0.03]), Rv, [(-0.08, -0.02), (-0.05, 0.07), (0.05, 0.08), (0.08, 0.0),
                                                            (0.02, -0.03)], 0.007, 0.003),
                 plate(A + V([0, -0.02, -0.02]), np.stack([V([1, 0, 0]), V([0, 1, -0.6]) / np.linalg.norm([1, 0.6]),
                                                           V([0, 0.6, 1]) / np.linalg.norm([1, 0.6])], 1),
                       [(-0.1, -0.06), (0.07, -0.06), (0.08, 0.02), (-0.02, 0.03), (-0.11, 0.0)], 0.008, 0.003),
                 ellipsoid(A, (0.022, 0.012, 0.02))).sub(sphere(A + V([0, 0.012, 0]), 0.016), 0.002)
    add('pelvis', ['PELVIS'], mirror_y(half).displace(0.0008, 70, seed=4), 0.0011, weight=1.2, min_tris=1800)
    for side, sg in (('L', 1), ('R', -1)):
        G = sh + V([0.03, 0.07 * sg, -0.1])
        sc = ornitho.scapula(G, sg, 0.2, 0.06, back=0.25, thick=0.006, cor=0.35)     # tall scapula, double coracoid
        sc = union(0.003, sc, ellipsoid(G + V([0.03, -0.01 * sg, -0.05]), (0.03, 0.006, 0.025)))
        add(f'scapula_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], sc.displace(0.0007, 90, seed=40 + sg), 0.0011,
            min_tris=1100)
        sprawl_limb(add, side, sg, G + V([0, 0.01 * sg, -0.01]), rng, True, P)
        sprawl_limb(add, side, sg, A * V([1, sg, 1]) + V([0, 0.01 * sg, 0]), rng, False, P)
    O, _ = spine.at(0.0)
    R, L = local(O + V([0.01, 0, 0]), norm(V([1, 0, -0.18])), (0, 0, 1))
    B.extend(skull(R, L, rng, add))
    return B
