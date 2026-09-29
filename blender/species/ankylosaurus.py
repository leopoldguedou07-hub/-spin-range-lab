"""Ankylosaure — Ankylosaurus magniventris (7 m).

Silhouette: char d'assaut bas et très large, pattes courtes; crâne plus large
que long (~65 x 75 cm) avec 4 cornes pyramidales aux coins; dos couvert de
plaques osseuses (ostéodermes ovales à quille); ilion évasé en bouclier;
queue raide terminée par une massue (~60 cm). Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, frame, sphere, ellipsoid, tube, ribbon, plate, union, bezier, round_cone, custom
import anat
import ornitho
from plans import skull_shell, lerp

anat.DETAIL = 1.0
P = 'ANKY'
SPEC = dict(
    key='Ankylosaurus', budget=115000, base='#D0BC96', dark='#877052',
    pieces={
        'Crane': [f'{P}_skull'], 'Machoire': [f'{P}_mandible'], 'Vertebre': [f'{P}_dorsal_06'],
        'Cote': [f'{P}_rib_L_06'], 'Plaque': [f'{P}_osteoderm_012'],
        'Bras': [f'{P}_humerus_L', f'{P}_radius_L', f'{P}_ulna_L'], 'Bassin': [f'{P}_pelvis'],
        'Femur': [f'{P}_femur_L'], 'Pied': [f'{P}_pes_L'],
        'Queue': [f'{P}_caudal_{i:02d}' for i in range(18, 25)], 'Massue': [f'{P}_tail_club'],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible']}, closeup_dir=(0.8, -1.0, 0.6),
    views={'34': (0.6, -1.0, 0.45), 'side': (0.0, -1.0, 0.02)},
)


def skull(add, R, L, rng):
    prof = [(-0.02, -0.08), (0.0, 0.2), (0.2, 0.26), (0.45, 0.22), (0.62, 0.12), (0.66, 0.0), (0.6, -0.1),
            (0.3, -0.14), (0.05, -0.14)]
    sk = skull_shell(L, R, prof, 0.38, 0.22, 0.66, [(0.3, 0.1, 0.06, 0.05, 0.1), (0.6, 0.05, 0.05, 0.04, 0.06)],
                     rnd=0.03)
    horns = []
    for sg in (-1, 1):
        horns.append(round_cone(L(0.02, sg * 0.34, 0.2), L(-0.15, sg * 0.45, 0.24), 0.08, 0.012))   # squamosal horns
        horns.append(round_cone(L(0.3, sg * 0.36, -0.02), L(0.25, sg * 0.46, -0.2), 0.07, 0.01))   # quadratojugal horns
    # bossed surface of small bony scales (caputegulae)
    bumps = [sphere(L(u, v, 0.24 - 0.2 * (u / 0.66) ** 2), 0.03) for u in np.linspace(0.05, 0.55, 6)
             for v in np.linspace(-0.26, 0.26, 5)]
    sk = union(0.02, sk, *horns, *bumps, ellipsoid(L(-0.03, 0, -0.04), (0.045, 0.045, 0.045), R))
    add('skull', ['SKULL'], sk.displace(0.005, 12, seed=5, octaves=4).detail(0.006, 26, seed=6), 0.0045,
        weight=2.0, min_tris=7000)
    parts = []
    for sg in (-1, 1):
        parts.append(ribbon([L(0.08, sg * 0.3, -0.15), L(0.35, sg * 0.26, -0.18), L(0.58, sg * 0.14, -0.14)],
                            [0.06, 0.07, 0.05], [0.02, 0.022, 0.02], R[:, 2]))
    parts.append(ribbon([L(0.55, 0, -0.14), L(0.66, 0, -0.1)], [0.07, 0.03], [0.02, 0.012], R[:, 1]))
    add('mandible', ['SKULL'], union(0.012, *parts).displace(0.003, 20, seed=20), 0.0035, min_tris=1800)
    return []


def features(add, frames, anc, rng):
    """Osteoderms: oval keeled plates in transverse bands over the back and
    flanks (instanced from a few variants), plus the tail club."""
    B = []
    body = [k for k in sorted(frames, key=lambda k: (['cervical', 'dorsal', 'sacral', 'caudal'].index(k[0]), k[1]))
            if k[0] in ('dorsal', 'sacral') or (k[0] == 'caudal' and k[1] <= 12)]
    n = 0
    src = {}
    for bi, key in enumerate(body[::2]):
        c, fwd, up, p = frames[key]
        side = np.cross(up, fwd)
        half_w = 1.12 if key[0] != 'caudal' else 0.5 * (1 - key[1] / 16)
        top = 0.34 if key[0] != 'caudal' else 0.2
        for a in np.linspace(-1, 1, 7 if key[0] != 'caudal' else 3):
            ang = a * 1.35
            pos = c + up * (top * np.cos(ang) - 0.25 * np.sin(ang) ** 2) + side * half_w * np.sin(ang)
            nrm = norm(up * np.cos(ang) * half_w + side * np.sin(ang) * top)
            size = 0.085 + 0.045 * (1 - abs(a))
            n += 1
            R = np.stack([fwd, np.cross(nrm, fwd), nrm], 1)
            M = np.eye(4)
            M[:3, :3] = R * size
            M[:3, 3] = pos
            var = int(abs(a) * 3)
            name = f'{P}_osteoderm_{n:03d}'
            if var not in src:
                o = union(0.01 * size / 0.15, ellipsoid(pos, (size, size * 0.8, size * 0.28), R),
                          ribbon([pos - fwd * size * 0.7 + nrm * size * 0.2, pos + nrm * size * 0.4,
                                  pos + fwd * size * 0.6 + nrm * size * 0.15], [size * 0.12, size * 0.1, size * 0.08],
                                 [size * 0.1, size * 0.12, size * 0.08], nrm))
                pits = custom(lambda P, o=o: o(P) + 0.002 * np.sin(P[:, 0] * 180) * np.sin(P[:, 1] * 170), o.lo, o.hi)
                B.append(dict(name=name, coll=['SPECIAL_FEATURES', 'OSTEODERMS'], shape=pits.displace(0.003, 25, seed=n),
                              voxel=size * 0.03, min_tris=160, max_tris=400))
                src[var] = (name, M)
            else:
                B.append(dict(name=name, coll=['SPECIAL_FEATURES', 'OSTEODERMS'], instance_of=src[var][0],
                              M_src=src[var][1], M=M))
    # tail club: 2 large lateral knobs + 2 small ones behind, on the tail tip
    last = sorted(i for (k, i) in frames if k == 'caudal')[-3]
    c, fwd, up, p = frames[('caudal', last)]
    side = np.cross(up, fwd)
    club = union(0.03, ellipsoid(c + side * 0.17, (0.26, 0.17, 0.13)), ellipsoid(c - side * 0.17, (0.26, 0.17, 0.13)),
                 ellipsoid(c - fwd * 0.24 + side * 0.07, (0.1, 0.08, 0.08)),
                 ellipsoid(c - fwd * 0.24 - side * 0.07, (0.1, 0.08, 0.08)))
    add('tail_club', ['SPECIAL_FEATURES'], club.displace(0.006, 12, seed=90).detail(0.006, 30, seed=91), 0.005,
        min_tris=2500)
    return B


def cerv(t, i):
    cr = 0.09
    return 0.1, dict(cr=cr, ends='amphi', canal=cr * 0.35, sl=0.08, tilt=0.3, sw=0.05, st=0.02, tl=0.14, tr=0.03,
                     tu=0.0, zyg=cr * 0.4, knob=0.6)


def dors(t, i):
    cr = 0.11
    return 0.13, dict(cr=cr, ends='amphi', canal=0.04, sl=0.2, tilt=0.1, sw=0.06, st=0.022, tl=0.3, tr=0.04,
                      tu=0.2, zyg=0.04, knob=0.9)


def sacr(t, i):
    return 0.12, dict(cr=0.11, ends='flat', canal=0.03, sl=0.18, tilt=0.0, sw=0.1, st=0.025, tl=0.3, tr=0.06, tu=0.1)


def caud(t, i):
    cr = 0.09 * (1 - 0.6 * t)
    return 0.12 * (1 - 0.3 * t), dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=max(0.2 * (1 - 1.5 * t), 0.03),
                                      tilt=0.4, sw=0.04, st=cr * 0.18, tl=max(0.2 * (1 - 2 * t), 0), tr=cr * 0.25,
                                      tu=0.0, chevron=0.18 * (1 - 0.7 * t) if i > 1 else 0)


def sacral_extra(c0, c1, cr):
    # synsacrum fused with a broad horizontal plate joining the ilia
    mid = (c0 + c1) / 2
    return [ellipsoid(mid + V([0, 0, 0.12]), ((np.linalg.norm(c1 - c0)) * 0.55, 0.55, 0.05))]


def joints(side, sg, a):
    sh, A = a['sh'], a['A'] * V([1, sg, 1])
    return dict(G=sh + V([0.15, 0.62 * sg, -0.55]), E=sh + V([0.0, 0.78 * sg, -0.9]), W=sh + V([0.2, 0.72 * sg, -1.28]),
                A=A, K=A + V([0.22 + 0.05 * sg, 0.06 * sg, -0.62]), Ank=A + V([0.02 + 0.08 * sg, 0.05 * sg, -1.12]))


CFG = dict(
    seed=63,
    spine=[(2.85, 1.25), (2.6, 1.33), (2.2, 1.43), (1.2, 1.55), (0.0, 1.58), (-0.8, 1.52), (-2.2, 1.35), (-3.6, 1.2),
           (-4.3, 1.12)],
    series=[('cervical', 8, cerv), ('dorsal', 12, dors), ('sacral', 8, sacr), ('caudal', 26, caud)],
    shoulder_dorsal=2,
    ribs=dict(depth=[(0, 0.6), (0.3, 0.85), (0.6, 0.85), (1, 0.45)], ymax=[(0, 0.75), (0.4, 1.1), (1, 0.95)],
              yend=[(0, 0.55), (0.5, 0.85), (1, 0.9)], back=[(0, 0.15), (1, 0.3)],
              wid=[(0, 0.05), (0.5, 0.06), (1, 0.05)], thick=[(0, 0.03), (1, 0.025)], wdir=V([1, 0, 0.3])),
    tendons=dict(kinds=['caudal'], r=0.01, h=0.3),
    sacral_extra=sacral_extra,
    pelvis=dict(A_rel=(0.05, 0.55, -0.2), il_len=1.3, il_h=0.4, prepub=0.25, pub=0.25, isch=0.4, shield=0.85),
    joints=joints,
    front=dict(scap_len=0.65, scap_w=0.32, scap_t=0.035, r=0.07, toes=5, mt=0.12, toe=0.08, toe_r=0.035, spread=60),
    hind=dict(r=0.08, toes=3, mt=0.15, toe=0.12, toe_r=0.045, spread=25),
    skull=skull, skull_dir=(1, 0, -0.25), features=features,
)


def bones():
    return ornitho.build(P, CFG)
