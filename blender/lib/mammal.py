"""Quadrupedal mammal body (canids, felids, ground sloths, glyptodonts)
driven by a per-species config: spine curve and vertebral series, ribs and
sternum, os coxae, scapula, fore/hind limb joints, feet and skull.
Units: metres, X forward, Z up."""
import numpy as np
from sdf import V, norm, rot, sphere, ellipsoid, ribbon, union, mirror_y
from anat import local, carpal_block, digit
from plans import Curve3, column, ribcage, quad_limb, claw_shape
import ornitho


def os_coxae(A, k, wing=1.0, flare=0.0):
    """Mammal pelvis: ilium wing forward-up, ischium back, pubis down-in,
    obturator foramen; k scales a 1.8 m felid pelvis, wing widens the ilium."""
    il_dir = V([0.13, -0.02 - flare, 0.07]) * k
    half = union(0.006 * k,
                 ribbon([A + il_dir, A + il_dir * 0.5, A], [0.02 * k * wing, 0.018 * k * wing, 0.016 * k],
                        [0.005 * k, 0.005 * k, 0.006 * k], V([0, 1, 0.3])),
                 ribbon([A, A + V([-0.07, -0.01, -0.02]) * k, A + V([-0.1, -0.03, -0.035]) * k],
                        [0.014 * k, 0.012 * k, 0.016 * k], [0.005 * k, 0.005 * k, 0.006 * k], V([0, 0, 1])),
                 ribbon([A, A + V([-0.02, -0.03, -0.04]) * k, A + V([-0.07, -0.055, -0.04]) * k],
                        [0.01 * k, 0.01 * k, 0.012 * k], [0.004 * k, 0.004 * k, 0.005 * k], V([1, 0, 0])),
                 ellipsoid(A, (0.017 * k, 0.012 * k, 0.017 * k))).sub(sphere(A + V([0, 0.01, 0]) * k, 0.012 * k),
                                                                       0.002 * k)
    half = half.sub(ellipsoid(A + V([-0.05, -0.03, -0.025]) * k, (0.018 * k, 0.02 * k, 0.01 * k)), 0.002 * k)
    return mirror_y(half).displace(0.0008 * k, 60 / k, seed=4)


def paw(W, sg, rng, n, k, claw_len=0.028, claw_r=0.0045, splay=22, curl=0.35, sep_claw=None, add=None, side='L',
        coll='FRONT_LIMBS', blunt=False):
    """Digitigrade paw scaled by k (1 = 1.8 m felid). sep_claw: index of a
    digit whose claw is emitted as its own bone (catalogue piece)."""
    parts = [carpal_block(W + V([0, 0, -0.01 * k]), (0.02 * k, 0.025 * k, 0.012 * k), np.eye(3), n=4, rng=rng)]
    for i in range(n):
        a = np.radians(np.interp(i, [0, max(n - 1, 1)], [-splay, splay])) * sg
        dd = V([np.cos(a), np.sin(a), 0])
        b0 = W + V([0.005, 0, -0.02]) * k + dd * 0.008 * k
        b1 = b0 + norm(dd * curl + V([0, 0, -1])) * 0.075 * k
        b2 = b1 + norm(dd + V([0, 0, -0.5])) * 0.025 * k
        b3 = b2 + dd * 0.018 * k
        b3[2] = max(b3[2], 0.006 * k)
        parts.append(digit([b0, b1, b2, b3], [0.0055 * k, 0.005 * k, 0.0045 * k, 0.004 * k], knuckle=1.3,
                           seed=int(rng.integers(1e4))))
        down = V([0, 0, -1]) if not blunt else V([0, 0, -0.35])
        cl = claw_shape(b3 + dd * 0.004 * k + V([0, 0, 0.004 * k]), dd, claw_len * k, claw_r * k, rng, down=down)
        if sep_claw is not None and i == sep_claw and add:
            add(f'claw_{side}', [coll, f'{coll}_{side}'], cl, max(0.0005, claw_r * k * 0.1), min_tris=500)
        else:
            parts.append(cl)
    return union(0.002 * k, *parts)


def build(P, cfg):
    rng = np.random.default_rng(cfg.get('seed', 7))
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    k = cfg['k']
    spine = Curve3(cfg['spine'])
    series = []
    for kind, n, fn in cfg['series']:
        for i in range(n):
            series.append((kind,) + fn(i / max(n - 1, 1), i + 1))
    frames, fused = column(add, spine, series, rng, gap=0.003 * k, s0=0.01 * k, vox=cfg.get('vox', 0.09),
                           extra=cfg.get('vert_extra'))
    sac = [frames[q] for q in sorted(q for q in frames if q[0] == 'sacral')]
    add('sacrum', ['SPINE', 'SPINE_sacral'], union(0.004 * k, *fused), 0.0015 * k, min_tris=800)
    hip = (sac[0][0] + sac[-1][0]) / 2
    sh = frames[('thoracic', cfg.get('shoulder', 2))][0]
    anc = dict(hip=hip, sh=sh)
    ribcage(add, frames, 'thoracic', cfg['ribs'], rng, vox=0.22)
    n_st = cfg.get('sternebrae', 7)
    st0 = sh + V(cfg.get('sternum_rel', (0.05, 0, -0.33))) * k
    st = [ellipsoid(st0 + V([-0.035 * q, 0, 0.004 * q]) * k, (0.016 * k, 0.01 * k, 0.008 * k)) for q in range(n_st)]
    add('sternum', ['RIBCAGE'], union(0.003 * k, *st), 0.0012 * k, min_tris=400)
    A = hip + V(cfg.get('A_rel', (-0.03, 0.055, -0.07))) * k
    anc['A'] = A
    pk = cfg.get('pelvis_k', k)
    add('pelvis', ['PELVIS'], os_coxae(A, pk, wing=cfg.get('ilium_wing', 1.0), flare=cfg.get('ilium_flare', 0.0)),
        0.001 * pk, weight=1.2, min_tris=1800)
    for side, sg in (('L', 1), ('R', -1)):
        lat = V([0, sg, 0])
        j = cfg['joints'](side, sg, anc)
        G, E, W = j['G'], j['E'], j['W']
        sc = cfg.get('scap', (0.17, 0.08, 0.006, 0.6))
        scap = ornitho.scapula(G, sg, sc[0] * k, sc[1] * k, back=sc[3], thick=sc[2] * k, cor=0.15)
        if cfg.get('acromion'):       # long acromion/metacromion (sloths)
            scap = union(0.004 * k, scap, ribbon([G + V([0.0, 0.01 * sg, 0.05]) * k, G + V([0.04, 0.02 * sg, 0.0]) * k],
                                                 [0.012 * k, 0.008 * k], [0.004 * k, 0.004 * k], V([0, 1, 0])))
        add(f'scapula_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], scap.displace(0.0008 * k, 80 / k, seed=40 + sg),
            0.0011 * k, min_tris=1200)
        rf = cfg['r_front'] * k
        quad_limb(add, side, sg, G, E, W, rf, rng, f'humerus_{side}', f'ulna_{side}', 'FRONT_LIMBS', prox='ball',
                  head_dir=V([-1, 0, 0.3]), crest=[(0.1, 0.5, V([1, 0.3 * sg, 0]), rf * 0.5 * cfg.get('delto', 1.0),
                                                    rf * 0.5)],
                  olecranon=E + V([-0.03, 0, 0.015]) * k * cfg.get('olec', 1.0), lo_name2=f'radius_{side}')
        add(f'manus_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'], cfg['manus'](W, sg, side, rng, add), 0.0007 * k,
            weight=1.2, min_tris=2000)
        rh = cfg['r_hind'] * k
        quad_limb(add, side, sg, j['A'] + lat * 0.012 * k, j['K'], j['Ank'], rh, rng, f'femur_{side}', f'tibia_{side}',
                  'HIND_LIMBS', prox='ball', lo_name2=f'fibula_{side}',
                  crest=cfg.get('femur_crest', lambda sg_: [])(sg))
        add(f'pes_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'], cfg['pes'](j['Ank'], sg, side, rng, add), 0.0007 * k,
            weight=1.2, min_tris=1800)
    O, _ = spine.at(0.0)
    R, L = local(O + V([0.01, 0, 0]) * k, norm(V(cfg.get('skull_dir', (1, 0, -0.25)))), (0, 0, 1))
    B.extend(cfg['skull'](R, L, rng, add) or [])
    if cfg.get('features'):
        B.extend(cfg['features'](add, frames, anc, rng) or [])
    return B
