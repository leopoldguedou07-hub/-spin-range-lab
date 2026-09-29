"""Vélociraptor — Velociraptor mongoliensis (2 m).

Silhouette: petit dromaeosauridé à plumes; crâne long (~25 cm), bas et
concave (museau relevé); griffe en faucille relevée (~6,5 cm) sur l'orteil II;
fourchette (furcula); bras longs à 3 doigts avec bosses d'attache des plumes;
queue rigide raidie par des tiges osseuses. Units: metres, X forward, Z up.
"""
import numpy as np
from sdf import V, norm, rot, sphere, ellipsoid, tube, ribbon, union
import anat
import theropod
from plans import skull_shell, blade_tooth, tooth_row, lerp

anat.DETAIL = 0.8
P = 'VELO'
SPEC = dict(
    key='Velociraptor', budget=45000, base='#D6C29C', dark='#8E7757',
    pieces={
        'Crane': [f'{P}_skull'], 'Machoire': [f'{P}_mandible_L'], 'Dent': [f'{P}_tooth_upper_L_01'],
        'Vertebre': [f'{P}_dorsal_06'], 'Cote': [f'{P}_rib_L_05'], 'Fourchette': [f'{P}_furcula'],
        'Bras': [f'{P}_humerus_L', f'{P}_radius_L', f'{P}_ulna_L'], 'Griffe': [f'{P}_sickle_claw_L'],
        'Bassin': [f'{P}_pelvis'], 'Femur': [f'{P}_femur_L'],
        'Queue': [f'{P}_caudal_{i:02d}' for i in range(8, 15)],
    },
    closeups={'skull': [f'{P}_skull', f'{P}_mandible_L', f'{P}_mandible_R']}, closeup_dir=(0.25, -1.0, 0.15),
    views={'34': (0.5, -1.0, 0.2), 'side': (0.0, -1.0, 0.02)},
)

SK = 0.25


def skull(add, R, L, rng):
    # low, long, concave upper profile (upturned snout)
    prof = [(-0.005, -0.02), (0.0, 0.045), (0.03, 0.058), (0.08, 0.05), (0.13, 0.036), (0.18, 0.03), (0.22, 0.028),
            (0.25, 0.018), (0.252, -0.01), (0.22, -0.025), (0.14, -0.03), (0.06, -0.04), (0.015, -0.045)]
    holes = [(0.065, 0.02, 0.018, 0.02, 0.02),   # orbit
             (0.14, 0.008, 0.035, 0.014, 0.02),  # antorbital fenestra
             (0.215, 0.012, 0.012, 0.008, 0.012), # naris
             (0.02, -0.005, 0.012, 0.022, 0.02)]  # lateral temporal
    sk = skull_shell(L, R, prof, 0.045, 0.014, SK, holes, rnd=0.002)
    sk = union(0.003, sk, ellipsoid(L(-0.004, 0, -0.01), (0.008, 0.008, 0.008), R))
    add('skull', ['SKULL'], sk.displace(0.0007, 70, seed=5, octaves=4).detail(0.0008, 160, seed=6), 0.0008,
        weight=2.0, min_tris=4000)
    out = []
    for side, sg in (('L', 1), ('R', -1)):
        pts = [L(0.0, sg * 0.042, -0.035), L(0.08, sg * 0.035, -0.045), L(0.17, sg * 0.022, -0.035),
               L(0.24, sg * 0.012, -0.028)]
        m = ribbon(pts, [0.012, 0.014, 0.01, 0.008], [0.003, 0.0035, 0.003, 0.003], R[:, 2])
        m = m.sub(ellipsoid(L(0.07, sg * 0.036, -0.042), (0.018, 0.008, 0.005), R), 0.001)
        add(f'mandible_{side}', ['SKULL'], m.displace(0.0005, 100, seed=20 + sg), 0.0006, weight=1.2, min_tris=1200)
        down, back = -R[:, 2], -R[:, 0]
        up_pos = [(L(0.24 - 0.0125 * k, sg * (0.012 + 0.025 * k / 13), -0.022 - 0.004 * np.sin(k / 3)), down, back,
                   0.012 + 0.005 * np.sin(np.pi * (k + 2) / 16)) for k in range(14)]
        lo_pos = [(L(0.235 - 0.012 * k, sg * (0.012 + 0.024 * k / 13), -0.03), -down, back,
                   0.01 + 0.004 * np.sin(np.pi * (k + 2) / 16)) for k in range(13)]
        out += tooth_row(f'{P}_tooth_upper_{side}', ['SKULL', 'SKULL_teeth'], blade_tooth, up_pos, rng)
        out += tooth_row(f'{P}_tooth_lower_{side}', ['SKULL', 'SKULL_teeth'], blade_tooth, lo_pos, rng)
    return out


def features(add, frames, rng):
    # furcula: wishbone in front of the chest
    c, fwd, up, p = frames[('dorsal', 1)]
    top = c + fwd * 0.03 - up * 0.07
    pts_l = [top + V([0.0, 0.045, 0.01]), top + V([0.012, 0.02, -0.025]), top + V([0.018, 0.0, -0.04])]
    pts_r = [q * V([1, -1, 1]) + V([0, 2 * top[1], 0]) for q in pts_l]
    fur = union(0.002, ribbon(pts_l, [0.004, 0.0035, 0.004], [0.0025, 0.002, 0.0025], fwd),
                ribbon(pts_r, [0.004, 0.0035, 0.004], [0.0025, 0.002, 0.0025], fwd))
    add('furcula', ['FRONT_LIMBS'], fur.displace(0.0003, 300, seed=3), 0.0004, min_tris=400)
    # ossified tail rods: long thin chevron/prezygapophysis extensions stiffening the tail
    tail = sorted(i for (k, i) in frames if k == 'caudal')
    parts = []
    for i in tail[4:-2]:
        c, fwd, up, p = frames[('caudal', i)]
        for off in (up * p['cr'] * 1.3, -up * p['cr'] * 1.6):
            for sg in (-1, 1):
                a = c + off + np.cross(up, fwd) * sg * p['cr'] * 0.3
                parts.append(tube([a + fwd * p['cl'] * 0.5, a + fwd * p['cl'] * 4.5], [p['cr'] * 0.1, p['cr'] * 0.06]))
    add('tail_rods', ['SPINE', 'SPINE_tail'], union(0, *parts), 0.0005, min_tris=1500)
    return []


def cerv(t, i):
    cr = 0.009 + 0.004 * t
    return 0.03, dict(cr=cr, ends='pro', canal=cr * 0.35, sl=0.004, tilt=0.2, sw=0.01, st=cr * 0.2, tl=cr * 1.2,
                      tr=cr * 0.25, tu=-cr * 0.4, zyg=cr * 0.5, pleuro=0.4, knob=0.4)


def dors(t, i):
    cr = 0.012
    return 0.022, dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=0.028, tilt=0.05, sw=0.018, st=cr * 0.2, tl=0.022,
                       tr=0.004, tu=0.008, zyg=cr * 0.35, pleuro=0.4, knob=0.7)


def sacr(t, i):
    return 0.02, dict(cr=0.011, ends='flat', canal=0.004, sl=0.02, tilt=0.0, sw=0.02, st=0.003, tl=0.016, tr=0.004,
                      tu=0.004)


def caud(t, i):
    cr = 0.01 * (1 - 0.7 * t)
    return 0.028 * (1 + 0.4 * np.sin(np.pi * min(t * 2, 1))), dict(
        cr=cr, ends='amphi', canal=cr * 0.3, sl=max(0.018 * (1 - 3 * t), 0.0), tilt=0.5, sw=0.01, st=cr * 0.2,
        tl=max(0.016 * (1 - 4 * t), 0), tr=cr * 0.25, tu=0.0, chevron=0.014 * (1 - t) if i > 1 else 0)


CFG = dict(
    seed=33,
    spine=[(0.56, 0.6), (0.52, 0.54), (0.47, 0.47), (0.4, 0.44), (0.3, 0.43), (0.1, 0.42), (-0.06, 0.42),
           (-0.3, 0.42), (-0.7, 0.43), (-1.1, 0.43), (-1.45, 0.42)],
    series=[('cervical', 10, cerv), ('dorsal', 13, dors), ('sacral', 5, sacr), ('caudal', 26, caud)],
    sacral_spine=0.02, shoulder_dorsal=2, gap=0.0015, s0=0.004, vox=0.09,
    ribs=dict(depth=[(0, 0.06), (0.25, 0.11), (0.55, 0.12), (0.85, 0.09), (1, 0.05)],
              ymax=[(0, 0.035), (0.4, 0.055), (0.75, 0.055), (1, 0.04)], yend=[(0, 0.02), (0.5, 0.03), (1, 0.035)],
              back=[(0, 0.02), (1, 0.045)], wid=[(0, 0.004), (0.5, 0.0045), (1, 0.0035)],
              thick=[(0, 0.0025), (1, 0.002)]),
    rib_vox=0.25, rib_last=12,
    gastralia=lambda a: (a['sh'] + V([0, 0, -0.12]), a['hip'] + V([0.04, 0, -0.1]), 0.05, 12, 0.0018),
    pelvis=dict(A_rel=(0.0, 0.028, -0.025), il_len=0.14, il_h=0.055, pub_len=0.12, boot=0.02, isch_len=0.08,
                pub_ang=-0.4, isch_ang=0.9),
    leg=lambda side, sg, a: dict(A=a['A'] * V([1, sg, 1]), K=a['A'] * V([1, 0, 1]) + V([0.08 + 0.02 * sg, 0.034 * sg, -0.16]),
                                 Ank=a['A'] * V([1, 0, 1]) + V([-0.02 + 0.03 * sg, 0.03 * sg, -0.3])),
    leg_sz=dict(fem_r=0.008, tib_r=0.0065, mt_len=0.1, toe_len=0.055, claw=0.014, sickle=0.065),
    sickle=True,
    arm=lambda side, sg, a: dict(G=a['sh'] + V([0.012, 0.032 * sg, -0.05]), E=a['sh'] + V([-0.02, 0.05 * sg, -0.12]),
                                 W=a['sh'] + V([0.07, 0.045 * sg, -0.15])),
    arm_sz=dict(hum_r=0.0045, scap_vec=V([-0.07, 0.0, 0.05]), finger_len=0.07, claw=0.02, finger_dir=V([0.8, 0, -0.55])),
    fingers=3,
    skull=skull, skull_dir=(1, 0, -0.1), features=features,
)


def bones():
    return theropod.build(P, CFG)
