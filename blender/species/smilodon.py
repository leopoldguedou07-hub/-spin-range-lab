"""Smilodon — Smilodon fatalis (1,8 m).

Silhouette: félin « à dents de sabre »; canines supérieures de ~28 cm,
aplaties, courbées, finement dentelées; crâne ~30 cm à crête sagittale et
museau court, mâchoire ouverte très grand (rebord protégeant les sabres);
pattes avant très puissantes; queue courte; pieds digitigrades à griffes
rétractiles. Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, frame, sphere, ellipsoid, box, tube, ribbon, plate, union, bezier, round_cone, mirror_y
import anat
from anat import local, long_bone, digit, carpal_block
from plans import Curve3, column, ribcage, quad_limb, skull_shell, cone_tooth, blade_tooth, tooth_row, claw_shape
import ornitho

anat.DETAIL = 0.9
P = 'SMIL'
SPEC = dict(
    key='Smilodon', budget=70000, base='#D8C5A1', dark='#8E7859',
    pieces={
        'Crane': [f'{P}_skull'], 'Dent': [f'{P}_canine_L'], 'Machoire': [f'{P}_mandible'],
        'Vertebre': [f'{P}_lumbar_03'], 'Cote': [f'{P}_rib_L_06'], 'Omoplate': [f'{P}_scapula_L'],
        'Bras': [f'{P}_humerus_L', f'{P}_radius_L', f'{P}_ulna_L'], 'Griffe': [f'{P}_claw_L'],
        'Bassin': [f'{P}_pelvis'], 'Femur': [f'{P}_femur_L'], 'Pied': [f'{P}_pes_L'],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible', f'{P}_canine_L', f'{P}_canine_R']},
    closeup_dir=(0.6, -1.0, 0.15),
    views={'34': (0.6, -1.0, 0.25), 'side': (0.0, -1.0, 0.02)},
)
GAPE = np.radians(55)


def skull(R, L, rng, add):
    prof = [(-0.02, -0.02), (0.0, 0.07), (0.06, 0.13), (0.14, 0.15), (0.2, 0.13), (0.26, 0.08), (0.3, 0.03),
            (0.3, -0.03), (0.24, -0.05), (0.14, -0.04), (0.05, -0.05)]
    holes = [(0.19, 0.06, 0.035, 0.035, 0.03),     # orbit (large, forward-facing)
             (0.285, 0.02, 0.018, 0.02, 0.02, False)]  # nasal opening
    sk = skull_shell(L, R, prof, 0.085, 0.055, 0.3, holes, rnd=0.006)
    zyg = [tube([L(0.2, sg * 0.07, -0.01), L(0.12, sg * 0.1, 0.0), L(0.05, sg * 0.085, 0.01)], [0.012, 0.014, 0.012])
           for sg in (-1, 1)]
    crest = ribbon([L(0.0, 0, 0.1), L(0.08, 0, 0.15), L(0.17, 0, 0.14)], [0.01, 0.014, 0.008], [0.004, 0.005, 0.004],
                   R[:, 1])                                               # sagittal crest
    sk = union(0.006, sk, *zyg, crest, ellipsoid(L(-0.012, 0, -0.01), (0.02, 0.03, 0.015), R),
               ellipsoid(L(0.22, 0, -0.04), (0.05, 0.05, 0.02), R))      # canine roots
    sk = sk.sub(ellipsoid(L(0.1, 0, -0.05), (0.08, 0.04, 0.025), R), 0.005)
    add('skull', ['SKULL'], sk.displace(0.0012, 50, seed=5, octaves=4).detail(0.0013, 110, seed=6), 0.0011,
        weight=2.0, min_tris=6000)
    # sabre canines: long, laterally flattened, curved, finely serrated
    for side, sg in (('L', 1), ('R', -1)):
        b = L(0.235, sg * 0.035, -0.045)
        dn, bk = -R[:, 2], -R[:, 0]
        pts = bezier(b, b + dn * 0.12 + bk * 0.0, b + dn * 0.22 + bk * 0.06, n=10)
        can = ribbon(pts, list(np.linspace(0.016, 0.002, 10)), list(np.linspace(0.008, 0.0012, 10)), R[:, 0])
        add(f'canine_{side}', ['SKULL', 'SKULL_teeth'], can.displace(0.0003, 300, seed=30 + sg), 0.0006,
            min_tris=900)
    out = []
    for side, sg in (('L', 1), ('R', -1)):
        pos = [(L(0.21 - 0.02 * k, sg * (0.035 + 0.008 * k), -0.045), -R[:, 2], -R[:, 0], 0.012 + 0.004 * (k == 2))
               for k in range(4)]                                   # carnassials and premolars
        out += tooth_row(f'{P}_tooth_upper_{side}', ['SKULL', 'SKULL_teeth'], blade_tooth, pos, rng)
    # mandible opened wide, with the bony flange protecting the sabres
    hinge = L(0.06, 0, -0.05)
    Rj = R @ rot((0, 1, 0), GAPE)
    J = lambda u, v=0.0, w=0.0: hinge + Rj @ V([u, v, w])
    parts = []
    for sg in (-1, 1):
        parts.append(ribbon([J(0.0, sg * 0.06, 0), J(0.1, sg * 0.05, -0.005), J(0.2, sg * 0.03, -0.005)],
                            [0.016, 0.018, 0.02], [0.006, 0.006, 0.006], Rj[:, 2]))
        parts.append(ribbon([J(0.03, sg * 0.06, 0.0), J(0.02, sg * 0.06, 0.035)], [0.014, 0.008], [0.005, 0.004],
                            Rj[:, 0]))                                   # coronoid
    parts.append(ribbon([J(0.19, 0, -0.01), J(0.22, 0, -0.04)], [0.03, 0.025], [0.008, 0.006], Rj[:, 1]))  # flange
    add('mandible', ['SKULL'], union(0.004, *parts).displace(0.0008, 90, seed=20), 0.0009, weight=1.3, min_tris=2500)
    return out


def cerv(t, i):
    cr = 0.02
    return 0.045, dict(cr=cr, ends='flat', canal=cr * 0.5, sl=0.01 + 0.05 * t ** 2, tilt=0.3, sw=0.02, st=0.004,
                       tl=0.035 if i > 1 else 0.06, tr=0.006, tu=-0.005, zyg=0.008, knob=0.4)


def thor(t, i):
    cr = 0.02 + 0.004 * t
    return 0.034, dict(cr=cr, ends='flat', canal=0.008, sl=0.11 * (1 - 0.55 * t), tilt=0.55 - 0.3 * t, sw=0.012,
                       st=0.0035, tl=0.025, tr=0.005, tu=0.01, zyg=0.007, knob=0.7)


def lumb(t, i):
    cr = 0.026
    return 0.042, dict(cr=cr, ends='flat', canal=0.008, sl=0.05, tilt=-0.35, sw=0.03, st=0.005, tl=0.06, tr=0.008,
                       tu=-0.005, tb=-0.015, zyg=0.009, knob=0.6)


def sacr(t, i):
    return 0.035, dict(cr=0.024, ends='flat', canal=0.007, sl=0.035, tilt=0.0, sw=0.02, st=0.005, tl=0.04, tr=0.01)


def caud(t, i):
    cr = 0.018 * (1 - 0.6 * t)
    return 0.035, dict(cr=cr, ends='flat', canal=cr * 0.3, sl=max(0.02 * (1 - 2 * t), 0), tilt=0.5, sw=0.01,
                       st=cr * 0.2, tl=max(0.02 * (1 - 2 * t), 0), tr=cr * 0.25, tu=0.0)


def paw(W, sg, rng, n, add, name, claws):
    """Digitigrade cat paw: metapodials near vertical, toes flat, curled
    retractile claws; one claw emitted separately for the catalogue."""
    parts = [carpal_block(W + V([0, 0, -0.01]), (0.02, 0.025, 0.012), np.eye(3), n=4, rng=rng)]
    for k in range(n):
        a = np.radians(np.interp(k, [0, n - 1], [-22, 22])) * sg
        dd = V([np.cos(a), np.sin(a), 0])
        b0 = W + V([0.005, sg * 0.0, -0.02]) + dd * 0.008
        b1 = b0 + norm(dd * 0.35 + V([0, 0, -1])) * 0.075
        b2 = b1 + norm(dd + V([0, 0, -0.5])) * 0.025
        b3 = b2 + dd * 0.018
        b3[2] = max(b3[2], 0.006)
        parts.append(digit([b0, b1, b2, b3], [0.0055, 0.005, 0.0045, 0.004], knuckle=1.3, seed=int(rng.integers(1e4))))
        cl = claw_shape(b3 + dd * 0.004 + V([0, 0, 0.006]), dd, 0.028, 0.0045, rng)
        if claws and k == 1:
            add(f'claw_{"L" if sg > 0 else "R"}', ['FRONT_LIMBS', f'FRONT_LIMBS_{"L" if sg > 0 else "R"}'], cl, 0.0005,
                min_tris=400)
        else:
            parts.append(cl)
    return union(0.002, *parts)


def bones():
    rng = np.random.default_rng(81)
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    spine = Curve3([(0.62, 1.02), (0.52, 0.98), (0.42, 0.9), (0.3, 0.86), (0.05, 0.86), (-0.25, 0.84), (-0.5, 0.8),
                    (-0.65, 0.76), (-0.8, 0.6), (-0.86, 0.42)])
    series = []
    for kind, n, fn in (('cervical', 7, cerv), ('thoracic', 13, thor), ('lumbar', 7, lumb), ('sacral', 3, sacr),
                        ('caudal', 13, caud)):
        for i in range(n):
            series.append((kind,) + fn(i / (n - 1), i + 1))
    frames, fused = column(add, spine, series, rng, gap=0.003, s0=0.01, vox=0.09)
    sac = [frames[k] for k in sorted(k for k in frames if k[0] == 'sacral')]
    add('sacrum', ['SPINE', 'SPINE_sacral'], union(0.004, *fused), 0.0015, min_tris=800)
    hip = (sac[0][0] + sac[-1][0]) / 2
    sh = frames[('thoracic', 2)][0]
    ribcage(add, frames, 'thoracic', dict(depth=[(0, 0.2), (0.3, 0.32), (0.6, 0.33), (1, 0.2)],
                                          ymax=[(0, 0.1), (0.4, 0.15), (1, 0.13)], yend=[(0, 0.04), (0.5, 0.08), (1, 0.1)],
                                          back=[(0, 0.04), (1, 0.08)], wid=[(0, 0.009), (1, 0.008)],
                                          thick=[(0, 0.005), (1, 0.004)]), rng, vox=0.22)
    # sternum
    st = [ellipsoid(sh + V([0.05 - 0.035 * k, 0, -0.33 + 0.004 * k]), (0.016, 0.01, 0.008)) for k in range(7)]
    add('sternum', ['RIBCAGE'], union(0.003, *st), 0.0012, min_tris=400)
    # pelvis: cat os coxae (narrow ilium wing, ischium-pubis ring with obturator foramen)
    A = hip + V([-0.03, 0.055, -0.07])
    half = union(0.006,
                 ribbon([A + V([0.13, -0.02, 0.07]), A + V([0.06, -0.01, 0.04]), A], [0.02, 0.018, 0.016],
                        [0.005, 0.005, 0.006], V([0, 1, 0.3])),
                 ribbon([A, A + V([-0.07, -0.01, -0.02]), A + V([-0.1, -0.03, -0.035])], [0.014, 0.012, 0.016],
                        [0.005, 0.005, 0.006], V([0, 0, 1])),
                 ribbon([A, A + V([-0.02, -0.03, -0.04]), A + V([-0.07, -0.055, -0.04])], [0.01, 0.01, 0.012],
                        [0.004, 0.004, 0.005], V([1, 0, 0])),
                 ellipsoid(A, (0.017, 0.012, 0.017))).sub(sphere(A + V([0, 0.01, 0]), 0.012), 0.002)
    half = half.sub(ellipsoid(A + V([-0.05, -0.03, -0.025]), (0.018, 0.02, 0.01)), 0.002)
    add('pelvis', ['PELVIS'], mirror_y(half).displace(0.0008, 60, seed=4), 0.001, weight=1.2, min_tris=1800)
    for side, sg in (('L', 1), ('R', -1)):
        lat = V([0, sg, 0])
        G = sh + V([0.05, 0.075 * sg, -0.13])
        E = G + V([-0.06, 0.01 * sg, -0.24])
        W = E + V([0.03 + 0.03 * sg, -0.01 * sg, -0.24])
        sc = ornitho.scapula(G, sg, 0.17, 0.08, back=0.6, thick=0.006, cor=0.15)
        add(f'scapula_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], sc.displace(0.0008, 80, seed=40 + sg), 0.0011,
            min_tris=1200)
        quad_limb(add, side, sg, G, E, W, 0.016, rng, f'humerus_{side}', f'ulna_{side}', 'FRONT_LIMBS', prox='ball',
                  head_dir=V([-1, 0, 0.3]), crest=[(0.1, 0.5, V([1, 0.3 * sg, 0]), 0.008, 0.008)],
                  olecranon=E + V([-0.03, 0, 0.015]), lo_name2=f'radius_{side}')
        add(f'manus_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], paw(W, sg, rng, 5, add, 'manus', True), 0.0007,
            weight=1.2, min_tris=2000)
        Ah = A * V([1, sg, 1])
        K = Ah + V([0.1 + 0.02 * sg, 0.01 * sg, -0.28])
        Ank = K + V([-0.14 - 0.02 * sg, 0, -0.2])
        quad_limb(add, side, sg, Ah + lat * 0.012, K, Ank, 0.015, rng, f'femur_{side}', f'tibia_{side}', 'HIND_LIMBS',
                  prox='ball', lo_name2=f'fibula_{side}')
        pes = paw(Ank, sg, rng, 4, add, 'pes', False)
        heel = ellipsoid(Ank + V([-0.03, 0, 0.0]), (0.03, 0.012, 0.012), rot((0, 1, 0), -0.4))
        add(f'pes_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], union(0.003, pes, heel), 0.0007, weight=1.2,
            min_tris=1800)
    O, _ = spine.at(0.0)
    R, L = local(O + V([0.01, 0, 0]), norm(V([1, 0, -0.25])), (0, 0, 1))
    B.extend(skull(R, L, rng, add))
    return B
