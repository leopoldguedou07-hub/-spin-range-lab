"""Tricératops — Triceratops horridus (9 m).

Silhouette: crâne géant (~2,2 m) à collerette pleine bordée d'épioccipitaux
triangulaires, 2 grandes cornes sus-orbitaires (~1 m), courte corne nasale,
bec de perroquet (os rostral); corps massif quadrupède; queue courte et
épaisse. Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, frame, sphere, ellipsoid, tube, ribbon, plate, union, bezier, round_cone
import anat
import ornitho
from plans import skull_shell, lerp

anat.DETAIL = 1.0
P = 'TRIC'
SPEC = dict(
    key='Triceratops', budget=110000, base='#D3BF99', dark='#8A7253',
    pieces={
        'Crane': [f'{P}_skull'], 'Corne': [f'{P}_horn_brow_L'], 'Bec': [f'{P}_rostral'],
        'Machoire': [f'{P}_mandible'], 'Vertebre': [f'{P}_dorsal_06'], 'Cote': [f'{P}_rib_L_06'],
        'Omoplate': [f'{P}_scapula_L'], 'Bassin': [f'{P}_pelvis'], 'Femur': [f'{P}_femur_L'],
        'Pied': [f'{P}_pes_L'], 'Queue': [f'{P}_caudal_{i:02d}' for i in range(6, 13)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible', f'{P}_rostral', f'{P}_horn_brow_L', f'{P}_horn_brow_R']},
    closeup_dir=(0.8, -1.0, 0.3),
    views={'34': (0.6, -1.0, 0.25), 'side': (0.0, -1.0, 0.02)},
)


def skull(add, R, L, rng):
    """u along the face (occipital condyle -> beak), v up. The frill rises
    back-up from behind the orbits; horns and rostral are separate bones."""
    prof = [(-0.05, -0.12), (0.0, 0.2), (0.35, 0.42), (0.6, 0.45), (0.85, 0.35), (1.1, 0.3), (1.25, 0.26),
            (1.38, 0.08), (1.35, -0.12), (1.1, -0.2), (0.7, -0.25), (0.35, -0.28), (0.1, -0.22)]
    face = skull_shell(L, R, prof, 0.36, 0.14, 1.35, [(1.12, 0.13, 0.08, 0.06, 0.08),      # naris
                                                     (0.55, 0.28, 0.07, 0.07, 0.1),       # orbit
                                                     (0.3, 0.02, 0.1, 0.12, 0.1)])        # lateral temporal
    # frill: large solid shield sweeping up and back, scalloped edge
    fr_o = L(0.45, 0, 0.3)
    fu = norm(-R[:, 0] * 0.8 + R[:, 2] * 0.6)
    fv = R[:, 1]
    fw = np.cross(fu, fv)
    Rf = np.stack([fu, fv, fw], 1)
    outline = [(0.0, -0.4), (0.45, -0.62), (0.9, -0.7), (1.15, -0.5), (1.25, 0.0), (1.15, 0.5), (0.9, 0.7),
               (0.45, 0.62), (0.0, 0.4)]
    frill = plate(fr_o, Rf, outline, 0.05, 0.02, falloff=0.25, rnd=0.02)
    # squamosal/parietal thickening ridges
    ridges = [ribbon([fr_o + fu * 0.1 + fv * s * 0.3, fr_o + fu * 0.7 + fv * s * 0.55, fr_o + fu * 1.1 + fv * s * 0.45],
                     [0.06, 0.05, 0.04], [0.035, 0.03, 0.025], fw) for s in (-1, 1)]
    ridges.append(ribbon([fr_o + fu * 0.05, fr_o + fu * 0.7, fr_o + fu * 1.2], [0.05, 0.04, 0.035],
                         [0.035, 0.03, 0.025], fw))
    # epoccipitals: triangular bony points around the frill margin
    epo = []
    for k in range(15):
        a = np.interp(k, [0, 14], [-1.0, 1.0])
        th = a * np.pi * 0.46
        pos = fr_o + fu * (0.62 + 0.6 * np.cos(th)) + fv * 0.72 * np.sin(th)
        outv = norm(fu * np.cos(th) + fv * np.sin(th))
        epo.append(round_cone(pos, pos + outv * 0.09, 0.05, 0.008))
    nasal_horn = round_cone(L(1.08, 0, 0.28), L(1.12, 0, 0.45), 0.07, 0.02)
    sk = union(0.04, face, frill, *ridges, *epo, nasal_horn,
               ellipsoid(L(-0.04, 0, -0.04), (0.06, 0.06, 0.06), R))
    for sg in (-1, 1):   # brow horn bases (cores) on the skull roof
        sk = union(0.03, sk, ellipsoid(L(0.6, sg * 0.2, 0.45), (0.13, 0.11, 0.08), R))
    add('skull', ['SKULL'], sk.displace(0.008, 7, seed=5, octaves=4).detail(0.009, 18, seed=6), 0.0075,
        weight=2.4, min_tris=10000)
    # brow horns: long, slightly forward-curved cones with vascular grooves
    for side, sg in (('L', 1), ('R', -1)):
        b = L(0.6, sg * 0.22, 0.48)
        pts = bezier(b, b + R[:, 2] * 0.45 + R[:, 0] * 0.2 + R[:, 1] * sg * 0.12,
                     b + R[:, 2] * 0.7 + R[:, 0] * 0.65 + R[:, 1] * sg * 0.16, n=10)
        h = tube(pts, list(np.linspace(0.11, 0.015, 10)))
        grooves = lambda P, h=h: h(P) + 0.004 * np.sin(np.arctan2(P[:, 1] - b[1], P[:, 0] - b[0]) * 14)
        from sdf import custom
        add(f'horn_brow_{side}', ['SKULL', 'SKULL_special'], custom(grooves, h.lo, h.hi).displace(0.003, 20, seed=30 + sg),
            0.0045, min_tris=1200)
    # rostral bone: hooked upper beak, V-shaped in front view
    rb = L(1.38, 0, 0.0)
    ros = union(0.01, ribbon([rb + R[:, 2] * 0.12, rb + R[:, 0] * 0.12, rb + R[:, 0] * 0.1 - R[:, 2] * 0.14],
                             [0.08, 0.06, 0.02], [0.05, 0.04, 0.012], R[:, 1]))
    add('rostral', ['SKULL'], ros.displace(0.003, 25, seed=40).detail(0.003, 50, seed=41), 0.003, min_tris=800)
    # mandible with predentary (lower beak), tall coronoid process
    parts = []
    for sg in (-1, 1):
        parts.append(ribbon([L(0.15, sg * 0.28, -0.3), L(0.6, sg * 0.24, -0.34), L(1.05, sg * 0.14, -0.3),
                             L(1.3, sg * 0.05, -0.24)], [0.12, 0.14, 0.1, 0.07], [0.035, 0.035, 0.03, 0.025], R[:, 2]))
        parts.append(ribbon([L(0.5, sg * 0.24, -0.25), L(0.45, sg * 0.24, -0.05)], [0.08, 0.05], [0.025, 0.02],
                            R[:, 0]))                                   # coronoid
    parts.append(ribbon([L(1.25, 0, -0.26), L(1.42, 0, -0.18), L(1.48, 0, -0.08)], [0.08, 0.05, 0.02],
                        [0.04, 0.03, 0.012], R[:, 1]))                  # predentary
    add('mandible', ['SKULL'], union(0.025, *parts).displace(0.005, 10, seed=20).detail(0.006, 24, seed=21), 0.0055,
        weight=1.4, min_tris=3000)
    return []


def cerv(t, i):
    cr = 0.11
    return 0.1, dict(cr=cr, ends='amphi', canal=cr * 0.35, sl=0.12 + 0.1 * t, tilt=0.3, sw=0.08, st=0.025,
                     tl=0.15, tr=0.03, tu=-0.02, zyg=cr * 0.4, knob=0.6)


def dors(t, i):
    cr = 0.13
    return 0.14, dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=0.38 + 0.08 * np.sin(np.pi * t), tilt=0.15,
                      sw=0.07, st=0.025, tl=0.26, tr=0.04, tu=0.16, zyg=cr * 0.35, knob=0.8)


def sacr(t, i):
    return 0.14, dict(cr=0.12, ends='flat', canal=0.035, sl=0.35, tilt=0.0, sw=0.1, st=0.025, tl=0.24, tr=0.05, tu=0.08)


def caud(t, i):
    cr = 0.11 * (1 - 0.82 * t)
    return 0.12 * (1 - 0.45 * t), dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=max(0.4 * (1 - 0.9 * t), 0.04),
                                       tilt=0.35, sw=0.06 * (1 - t) + 0.012, st=cr * 0.18,
                                       tl=max(0.22 * (1 - 2.5 * t), 0), tr=cr * 0.25, tu=0.0,
                                       chevron=0.36 * (1 - t) if i > 1 else 0)


def joints(side, sg, a):
    sh, A = a['sh'], a['A'] * V([1, sg, 1])
    return dict(G=sh + V([0.2, 0.58 * sg, -0.75]), E=sh + V([0.05, 0.72 * sg, -1.35]), W=sh + V([0.28, 0.6 * sg, -2.0]),
                A=A, K=A + V([0.28 + 0.06 * sg, 0.04 * sg, -0.95]), Ank=A + V([0.02 + 0.1 * sg, 0.0, -1.78]))


CFG = dict(
    seed=41,
    spine=[(2.8, 1.92), (2.55, 2.0), (2.2, 2.1), (1.4, 2.25), (0.3, 2.28), (-0.7, 2.2), (-1.7, 2.05), (-3.2, 1.65),
           (-4.6, 1.15)],
    series=[('cervical', 9, cerv), ('dorsal', 12, dors), ('sacral', 9, sacr), ('caudal', 38, caud)],
    shoulder_dorsal=2,
    ribs=dict(depth=[(0, 0.9), (0.25, 1.25), (0.5, 1.3), (0.8, 1.0), (1, 0.55)],
              ymax=[(0, 0.6), (0.35, 0.95), (0.7, 0.98), (1, 0.75)], yend=[(0, 0.35), (0.5, 0.6), (1, 0.75)],
              back=[(0, 0.22), (1, 0.4)], wid=[(0, 0.055), (0.5, 0.065), (1, 0.05)], thick=[(0, 0.03), (1, 0.025)]),
    tendons=dict(kinds=['dorsal', 'sacral', 'caudal'], r=0.009, h=0.75),
    pelvis=dict(A_rel=(0.05, 0.42, -0.3), il_len=1.8, il_h=0.45, prepub=0.6, pub=0.5, isch=1.0, flare=0.35),
    joints=joints,
    front=dict(scap_len=1.05, scap_w=0.38, scap_t=0.035, r=0.075, toes=5, mt=0.2, toe=0.14, toe_r=0.04, spread=55),
    hind=dict(r=0.09, toes=4, mt=0.26, toe=0.2, toe_r=0.05, spread=30),
    skull=skull, skull_dir=(1, 0, -0.35), skull_off=0.03,
)


def bones():
    return ornitho.build(P, CFG)
