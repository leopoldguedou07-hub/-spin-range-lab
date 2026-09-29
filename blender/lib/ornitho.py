"""Quadrupedal ornithischian body (ceratopsians, stegosaurs, ankylosaurs) driven
by a per-species config. Units: metres, X forward, Z up."""
import numpy as np
from sdf import V, norm, frame, rot, sphere, ellipsoid, box, tube, ribbon, plate, union, bezier, mirror_y
from anat import local
from plans import (Curve3, column, ribcage, tendons, pelvis_ornithischian, quad_limb, hoofed_foot, lerp)


def scapula(G, sg, length, width, lean=0.35, back=0.55, thick=0.03, cor=0.5):
    """Broad scapula blade rising up-back from the glenoid, expanded at the
    top, plus a rounded coracoid plate in front of the glenoid."""
    v = norm(V([-back, -0.12 * sg, 1]))
    u = norm(np.cross(v, np.cross(V([1, 0, 0]), v)))
    w = np.cross(u, v)
    R = np.stack([u, v, w], 1)
    outline = [(width * 0.35, 0.0), (width * 0.3, length * 0.45), (width * 0.55, length * 0.85), (width * 0.3, length),
               (-width * 0.45, length * 0.98), (-width * 0.55, length * 0.75), (-width * 0.25, length * 0.35),
               (-width * 0.35, 0.0)]
    blade = plate(G + v * length * 0.05, R, outline, thick, thick * 0.35, falloff=width * 0.3, rnd=thick * 0.4)
    corac = ellipsoid(G + u * width * 0.55 - v * width * 0.2, (width * cor, width * cor * 0.85, thick * 0.9),
                      np.stack([u, v, w], 1))
    glen = ellipsoid(G, (width * 0.3, width * 0.28, width * 0.3), R)
    return union(thick * 0.6, blade, corac, glen).sub(sphere(G - v * width * 0.28, width * 0.22), thick * 0.2)


def build(P, cfg):
    rng = np.random.default_rng(cfg.get('seed', 5))
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    curve = Curve3(cfg['spine'])
    series = []
    for kind, n, fn in cfg['series']:
        for i in range(n):
            series.append((kind,) + fn(i / max(n - 1, 1), i + 1))
    frames, fused = column(add, curve, series, rng, gap=cfg.get('gap', 0.012), s0=cfg.get('s0', 0.03),
                           extra=cfg.get('vert_extra'), vox=cfg.get('vox', 0.07))
    sac = [frames[k] for k in sorted(k for k in frames if k[0] == 'sacral')]
    c0, c1 = sac[0][0], sac[-1][0]
    cr = sac[0][3]['cr']
    extra_sac = cfg['sacral_extra'](c0, c1, cr) if cfg.get('sacral_extra') else []
    add('sacrum', ['SPINE', 'SPINE_sacral'], union(cr * 0.2, *fused, *extra_sac), max(0.001, cr * 0.07), weight=1.1,
        min_tris=1500)
    hip = (c0 + c1) / 2
    anc = dict(hip=hip, sh=frames[('dorsal', cfg.get('shoulder_dorsal', 2))][0])
    ribcage(add, frames, 'dorsal', cfg['ribs'], rng, first=cfg.get('rib_first', 1), last=cfg.get('rib_last'),
            vox=cfg.get('rib_vox', 0.2))
    if cfg.get('tendons'):
        tendons(add, frames, cfg['tendons']['kinds'], cfg['tendons']['r'], rng, height=cfg['tendons'].get('h', 0.7))
    pv = cfg['pelvis']
    A = hip + V(pv['A_rel'])
    anc['A'] = A
    add('pelvis', ['PELVIS'], pelvis_ornithischian(A, pv['il_len'], pv['il_h'], pv['prepub'], pv['pub'], pv['isch'],
                                                   flare=pv.get('flare', 0.0), shield=pv.get('shield', 0.0), seed=3),
        max(0.001, pv['il_h'] * 0.012), weight=1.3, min_tris=3000)
    for side, sg in (('L', 1), ('R', -1)):
        j = cfg['joints'](side, sg, anc)
        fr = cfg['front']
        sc = scapula(j['G'], sg, fr['scap_len'], fr['scap_w'], back=fr.get('scap_back', 0.55), thick=fr['scap_t'])
        add(f'scapula_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'],
            sc.displace(fr['scap_t'] * 0.15, 0.6 / fr['scap_t'], seed=40 + sg), max(0.001, fr['scap_t'] * 0.2),
            weight=1.1, min_tris=1500)
        r = fr['r']
        quad_limb(add, side, sg, j['G'] - V([0, 0, r * 0.8]), j['E'], j['W'], r, rng, f'humerus_{side}',
                  f'ulna_{side}', 'FRONT_LIMBS', prox='ball', head_dir=V([-1, 0, 0.4]),
                  crest=[(0.06, 0.45, V([1, 0.4 * sg, 0]), r * 0.9, r * 0.7)],
                  olecranon=j['E'] + V([-r * 1.6, 0, r * 0.6]), lo_name2=f'radius_{side}')
        add(f'manus_{side}', ['FRONT_LIMBS', f'FRONT_LIMBS_{side}'],
            hoofed_foot(j['W'], sg, fr['toes'], fr['mt'], fr['toe'], fr['toe_r'], rng, spread=fr.get('spread', 45)),
            max(0.0008, fr['toe_r'] * 0.18), weight=1.2, min_tris=1800)
        hd = cfg['hind']
        r = hd['r']
        quad_limb(add, side, sg, j['A'] + V([0, sg * r * 0.8, 0]), j['K'], j['Ank'], r, rng, f'femur_{side}',
                  f'tibia_{side}', 'HIND_LIMBS', prox='ball',
                  crest=[(0.38, 0.52, V([-1, 0.2 * sg, 0]), r * 1.1, r * 0.5)],   # pendant 4th trochanter
                  lo_name2=f'fibula_{side}')
        add(f'pes_{side}', ['HIND_LIMBS', f'HIND_LIMBS_{side}'],
            hoofed_foot(j['Ank'], sg, hd['toes'], hd['mt'], hd['toe'], hd['toe_r'], rng, spread=hd.get('spread', 30),
                        heel=True), max(0.0008, hd['toe_r'] * 0.18), weight=1.2, min_tris=1800)
    O, _ = curve.at(0.0)
    d = norm(V(cfg.get('skull_dir', (1, 0, -0.3))))
    R, L = local(O + d * cfg.get('skull_off', 0.02), d, (0, 0, 1))
    B.extend(cfg['skull'](add, R, L, rng) or [])
    if cfg.get('features'):
        B.extend(cfg['features'](add, frames, anc, rng) or [])
    return B
