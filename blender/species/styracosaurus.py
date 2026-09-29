"""Styracosaure — Styracosaurus albertensis (5,5 m).

Silhouette: cératopsien à une grande corne nasale droite (~55 cm); petites
cornes aux yeux; collerette (pariétal + squamosal) percée de 2 grandes
fenêtres et couronnée de 6 longues pointes (~50 cm) rayonnant vers l'arrière,
plus de petites pointes (épioccipitaux); bec (rostral); corps massif
quadrupède. Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, sphere, ellipsoid, tube, ribbon, plate, union, bezier, round_cone, custom
import anat
import ornitho
from plans import skull_shell, lerp

anat.DETAIL = 1.0
P = 'STYR'
S = 0.63                    # body scale relative to the 9 m ceratopsian plan
SPEC = dict(
    key='Styracosaurus', budget=100000, base='#D6C29C', dark='#8C7454',
    pieces={
        'Crane': [f'{P}_skull'], 'Corne': [f'{P}_horn_nasal'], 'Collerette': [f'{P}_frill'],
        'Bec': [f'{P}_rostral'], 'Vertebre': [f'{P}_dorsal_06'], 'Cote': [f'{P}_rib_L_06'],
        'Bassin': [f'{P}_pelvis'], 'Femur': [f'{P}_femur_L'], 'Pied': [f'{P}_pes_L'],
        'Queue': [f'{P}_caudal_{i:02d}' for i in range(6, 13)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_frill', f'{P}_horn_nasal', f'{P}_rostral', f'{P}_mandible']},
    closeup_dir=(0.8, -1.0, 0.35),
    views={'34': (0.6, -1.0, 0.25), 'side': (0.0, -1.0, 0.02)},
)


def skull(add, R, L, rng):
    k = 0.66
    prof = [(u * k, v * k) for u, v in
            [(-0.05, -0.12), (0.0, 0.2), (0.35, 0.4), (0.6, 0.42), (0.85, 0.36), (1.1, 0.32), (1.25, 0.27),
             (1.38, 0.08), (1.35, -0.12), (1.1, -0.2), (0.7, -0.25), (0.35, -0.28), (0.1, -0.22)]]
    face = skull_shell(L, R, prof, 0.36 * k, 0.14 * k, 1.35 * k,
                       [(1.15 * k, 0.12 * k, 0.1 * k, 0.07 * k, 0.08 * k),     # large naris
                        (0.55 * k, 0.28 * k, 0.07 * k, 0.07 * k, 0.1 * k),     # orbit
                        (0.3 * k, 0.02 * k, 0.1 * k, 0.12 * k, 0.1 * k)])      # lateral temporal
    parts = [face, ellipsoid(L(-0.04 * k, 0, -0.04 * k), (0.06 * k, 0.06 * k, 0.06 * k), R)]
    for sg in (-1, 1):   # small brow horns / bosses
        b = L(0.58 * k, sg * 0.2 * k, 0.42 * k)
        parts.append(round_cone(b, b + (R[:, 2] * 0.8 + R[:, 1] * sg * 0.4) * 0.1, 0.05, 0.015))
    # frill root on the skull roof (squamosal/parietal base the frill bone sits on)
    parts.append(ellipsoid(L(0.3 * k, 0, 0.36 * k), (0.2 * k, 0.28 * k, 0.07 * k), R))
    sk = union(0.03 * k, *parts)
    add('skull', ['SKULL'], sk.displace(0.005, 11, seed=15, octaves=4).detail(0.006, 26, seed=16), 0.005,
        weight=2.2, min_tris=7000)
    # frill: parietal + squamosals, two big fenestrae, 6 long spikes + small epoccipitals
    fr_o = L(0.32 * k, 0, 0.3 * k)
    fu = norm(-R[:, 0] * 0.75 + R[:, 2] * 0.66)
    fv = R[:, 1]
    fw = np.cross(fu, fv)
    Rf = np.stack([fu, fv, fw], 1)
    outline = [(0.0, -0.3), (0.3, -0.45), (0.55, -0.5), (0.7, -0.35), (0.75, 0.0), (0.7, 0.35), (0.55, 0.5),
               (0.3, 0.45), (0.0, 0.3)]
    frill = plate(fr_o, Rf, outline, 0.035, 0.018, falloff=0.15, rnd=0.015)
    for sg in (-1, 1):
        frill = frill.sub(ellipsoid(fr_o + fu * 0.42 + fv * sg * 0.2, (0.17, 0.11, 0.2), Rf), 0.02)
    bars = [ribbon([fr_o + fu * 0.05, fr_o + fu * 0.45, fr_o + fu * 0.74], [0.05, 0.04, 0.05], [0.03, 0.025, 0.028], fw)]
    bars += [ribbon([fr_o + fu * 0.05 + fv * s * 0.28, fr_o + fu * 0.45 + fv * s * 0.47, fr_o + fu * 0.7 + fv * s * 0.36],
                    [0.04, 0.035, 0.04], [0.03, 0.025, 0.028], fw) for s in (-1, 1)]
    spikes = []
    # three long parietal spikes each side, radiating back and out
    for sg in (-1, 1):
        for n_, (ang, ln, r0) in enumerate([(0.18, 0.5, 0.05), (0.42, 0.55, 0.05), (0.7, 0.45, 0.045)]):
            th = ang * sg
            base = fr_o + fu * (0.72 - 0.12 * n_ * n_ * 0.5) + fv * 0.3 * np.sin(th * 1.6)
            d = norm(fu * np.cos(th) + fv * np.sin(th) + fw * 0.12)
            pts = bezier(base, base + d * ln * 0.5, base + d * ln + fw * 0.05 * (n_ + 1), n=8)
            spikes.append(tube(pts, list(np.linspace(r0, 0.01, 8))))
        # small epoccipital points along the lower frill margin
        for q in range(3):
            th = (1.05 + 0.18 * q) * sg
            pos = fr_o + fu * (0.35 + 0.35 * np.cos(th)) + fv * 0.5 * np.sin(th)
            spikes.append(round_cone(pos, pos + norm(fu * np.cos(th) + fv * np.sin(th)) * 0.06, 0.03, 0.006))
    fr = union(0.02, frill, *bars, *spikes)
    add('frill', ['SKULL', 'SKULL_special'], fr.displace(0.004, 14, seed=17).detail(0.005, 30, seed=18), 0.004,
        weight=2.0, min_tris=6000)
    # nasal horn: long straight thick cone with vascular grooves
    b = L(1.0 * k, 0, 0.3 * k)
    tip = b + norm(R[:, 2] * 1.0 + R[:, 0] * 0.12) * 0.55
    h = tube([b, (b + tip) / 2, tip], [0.075, 0.05, 0.012])
    grooves = lambda Pp, h=h: h(Pp) + 0.003 * np.sin(np.arctan2(Pp[:, 1] - b[1], Pp[:, 0] - b[0]) * 12)
    add('horn_nasal', ['SKULL', 'SKULL_special'],
        union(0.02, custom(grooves, h.lo, h.hi), ellipsoid(b, (0.09, 0.07, 0.05), R)).displace(0.002, 30, seed=19),
        0.003, weight=1.2, min_tris=1500)
    # rostral (upper beak)
    rb = L(1.38 * k, 0, 0.0)
    ros = ribbon([rb + R[:, 2] * 0.08, rb + R[:, 0] * 0.08, rb + R[:, 0] * 0.065 - R[:, 2] * 0.1],
                 [0.055, 0.04, 0.014], [0.035, 0.028, 0.009], R[:, 1])
    add('rostral', ['SKULL'], ros.displace(0.002, 35, seed=20).detail(0.002, 70, seed=21), 0.002, min_tris=800)
    # mandible + predentary
    mp = []
    for sg in (-1, 1):
        mp.append(ribbon([L(0.15 * k, sg * 0.27 * k, -0.3 * k), L(0.6 * k, sg * 0.23 * k, -0.34 * k),
                          L(1.05 * k, sg * 0.13 * k, -0.3 * k), L(1.3 * k, sg * 0.05 * k, -0.24 * k)],
                         [0.08, 0.09, 0.065, 0.045], [0.024, 0.024, 0.02, 0.017], R[:, 2]))
        mp.append(ribbon([L(0.5 * k, sg * 0.23 * k, -0.25 * k), L(0.45 * k, sg * 0.23 * k, -0.05 * k)], [0.05, 0.03],
                         [0.017, 0.014], R[:, 0]))
    mp.append(ribbon([L(1.25 * k, 0, -0.26 * k), L(1.42 * k, 0, -0.18 * k), L(1.48 * k, 0, -0.08 * k)],
                     [0.05, 0.035, 0.014], [0.028, 0.02, 0.008], R[:, 1]))
    add('mandible', ['SKULL'], union(0.015, *mp).displace(0.0035, 15, seed=22).detail(0.004, 34, seed=23), 0.0036,
        weight=1.3, min_tris=2500)
    return []


LEN = {'cr', 'canal', 'sl', 'sw', 'st', 'tl', 'tr', 'tu', 'zyg', 'chevron'}


def _s(cl, p):
    return cl * S, {kk: (v * S if kk in LEN else v) for kk, v in p.items()}


def cerv(t, i):
    cr = 0.11
    return _s(0.1, dict(cr=cr, ends='amphi', canal=cr * 0.35, sl=0.12 + 0.1 * t, tilt=0.3, sw=0.08, st=0.025,
                        tl=0.15, tr=0.03, tu=-0.02, zyg=cr * 0.4, knob=0.6))


def dors(t, i):
    cr = 0.13
    return _s(0.14, dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=0.34 + 0.08 * np.sin(np.pi * t), tilt=0.15,
                         sw=0.07, st=0.025, tl=0.26, tr=0.04, tu=0.16, zyg=cr * 0.35, knob=0.8))


def sacr(t, i):
    return _s(0.14, dict(cr=0.12, ends='flat', canal=0.035, sl=0.32, tilt=0.0, sw=0.1, st=0.025, tl=0.24, tr=0.05,
                         tu=0.08))


def caud(t, i):
    cr = 0.11 * (1 - 0.82 * t)
    return _s(0.12 * (1 - 0.45 * t), dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=max(0.42 * (1 - 0.9 * t), 0.04),
                                          tilt=0.35, sw=0.06 * (1 - t) + 0.012, st=cr * 0.18,
                                          tl=max(0.22 * (1 - 2.5 * t), 0), tr=cr * 0.25, tu=0.0,
                                          chevron=0.4 * (1 - t) if i > 1 else 0))


def joints(side, sg, a):
    sh, A = a['sh'], a['A'] * V([1, sg, 1])
    return dict(G=sh + V([0.2, 0.58 * sg, -0.75]) * S, E=sh + V([0.05, 0.72 * sg, -1.35]) * S,
                W=sh + V([0.28, 0.6 * sg, -2.0]) * S,
                A=A, K=A + V([0.28 + 0.06 * sg, 0.04 * sg, -0.95]) * S, Ank=A + V([0.02 + 0.1 * sg, 0.0, -1.78]) * S)


def sc(tab):
    return [(t, v * S) for t, v in tab]


CFG = dict(
    seed=43,
    spine=[(x * S, z * S) for x, z in [(2.8, 1.92), (2.55, 2.0), (2.2, 2.1), (1.4, 2.25), (0.3, 2.28), (-0.7, 2.2),
                                       (-1.7, 2.05), (-3.2, 1.7), (-4.8, 1.25)]],
    series=[('cervical', 9, cerv), ('dorsal', 12, dors), ('sacral', 9, sacr), ('caudal', 40, caud)],
    shoulder_dorsal=2, gap=0.012 * S, s0=0.03 * S,
    ribs=dict(depth=sc([(0, 0.9), (0.25, 1.25), (0.5, 1.3), (0.8, 1.0), (1, 0.55)]),
              ymax=sc([(0, 0.6), (0.35, 0.95), (0.7, 0.98), (1, 0.75)]), yend=sc([(0, 0.35), (0.5, 0.6), (1, 0.75)]),
              back=sc([(0, 0.22), (1, 0.4)]), wid=sc([(0, 0.055), (0.5, 0.065), (1, 0.05)]),
              thick=sc([(0, 0.03), (1, 0.025)])),
    tendons=dict(kinds=['dorsal', 'sacral', 'caudal'], r=0.009 * S, h=0.75),
    pelvis=dict(A_rel=(0.05 * S, 0.42 * S, -0.3 * S), il_len=1.8 * S, il_h=0.45 * S, prepub=0.6 * S, pub=0.5 * S,
                isch=1.0 * S, flare=0.35),
    joints=joints,
    front=dict(scap_len=1.05 * S, scap_w=0.38 * S, scap_t=0.035 * S, r=0.075 * S, toes=5, mt=0.2 * S, toe=0.14 * S,
               toe_r=0.04 * S, spread=55),
    hind=dict(r=0.09 * S, toes=4, mt=0.26 * S, toe=0.2 * S, toe_r=0.05 * S, spread=30),
    skull=skull, skull_dir=(1, 0, -0.3), skull_off=0.02,
)


def bones():
    return ornitho.build(P, CFG)
