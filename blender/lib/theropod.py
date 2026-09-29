"""Bipedal theropod body driven by a per-species config (proportions, counts,
spine curve, pose, skull, special features). Units: metres, X forward."""
import numpy as np
from sdf import V, norm, frame, rot, sphere, ellipsoid, box, tube, ribbon, plate, union, bezier, mirror_y, custom
from anat import vertebra, local
import plans
from plans import Curve3, column, ribcage, gastralia, pelvis_saurischian, theropod_leg, theropod_arm, lerp


def build(P, cfg):
    rng = np.random.default_rng(cfg.get('seed', 5))
    B = []

    def add(name, coll, shape, voxel, **kw):
        B.append(dict(name=f'{P}_{name}', coll=coll, shape=shape, voxel=voxel, **kw))

    curve = Curve3(cfg['spine'])
    series = []
    for kind, n, fn in cfg['series']:
        for i in range(n):
            t = i / max(n - 1, 1)
            cl, p = fn(t, i + 1)
            series.append((kind, cl, p))
    frames, fused = column(add, curve, series, rng, gap=cfg.get('gap', 0.012), s0=cfg.get('s0', 0.03),
                           extra=cfg.get('vert_extra'), vox=cfg.get('vox', 0.07))
    # sacrum (fused) + its spine plate
    sac = [frames[k] for k in sorted(k for k in frames if k[0] == 'sacral')]
    c0, c1 = sac[0][0], sac[-1][0]
    cr = sac[0][3]['cr']
    plate_top = ribbon([c0 + V([0, 0, cr * 1.5]), (c0 + c1) / 2 + V([0, 0, cr * 1.5 + cfg['sacral_spine']]),
                        c1 + V([0, 0, cr * 1.5])], [cr * 0.6, cr * 1.2, cr * 0.6], [cr * 0.2, cr * 0.22, cr * 0.2],
                       V([0, 0, 1]))
    add('sacrum', ['SPINE', 'SPINE_sacral'], union(cr * 0.2, *fused, plate_top), max(0.001, cr * 0.07),
        weight=1.1, min_tris=1200)
    # anchors: hip under the sacrum middle, shoulder under a chosen dorsal
    hip = (c0 + c1) / 2
    sh_c = frames[('dorsal', cfg.get('shoulder_dorsal', 2))][0]
    anc = dict(hip=hip, sh=sh_c)
    # ribs + gastralia
    ribcage(add, frames, 'dorsal', cfg['ribs'], rng, first=1, last=cfg.get('rib_last'), vox=cfg.get('rib_vox', 0.2))
    if cfg.get('gastralia'):
        a, b, w, n, r = cfg['gastralia'](anc)
        gastralia(add, V(a), V(b), w, n, r, rng)
    # pelvis
    pv = cfg['pelvis']
    A = hip + V(pv['A_rel'])
    add('pelvis', ['PELVIS'], pelvis_saurischian(A, pv['il_len'], pv['il_h'], pv['pub_len'], pv['boot'],
                                                 pv['isch_len'], A[1], pub_ang=pv.get('pub_ang', 0.35),
                                                 isch_ang=pv.get('isch_ang', 0.8), seed=3),
        max(0.001, pv['il_h'] * 0.012), weight=1.3, min_tris=2500)
    anc['A'] = A
    # limbs (joint positions relative to anchors)
    for side, sg in (('L', 1), ('R', -1)):
        lg = cfg['leg'](side, sg, anc)
        theropod_leg(add, P, side, sg, V(lg['A']), V(lg['K']), V(lg['Ank']), cfg['leg_sz'], rng,
                     sickle=cfg.get('sickle', False))
        ar = cfg['arm'](side, sg, anc)
        theropod_arm(add, side, sg, V(ar['G']), V(ar['E']), V(ar['W']), cfg['arm_sz'], rng,
                     fingers=cfg.get('fingers', 3), claw_piece=cfg.get('claw_piece'))
    # skull, jaws, teeth, features
    O, t0 = curve.at(0.0)
    d = norm(V(cfg.get('skull_dir', (1, 0, -0.1))))
    R, L = local(O + d * cfg.get('skull_off', 0.02), d, (0, 0, 1))
    B.extend(cfg['skull'](add, R, L, rng) or [])
    if cfg.get('features'):
        B.extend(cfg['features'](add, frames, rng) or [])
    return B
