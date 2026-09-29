"""Proportion kit for large theropods: a body plan measured on a 12.5 m animal,
rescaled to a species length `s` (= length / 12.5) with per-species knobs
(hip height, neck, spine heights, arm length, tail processes). Each species
still supplies its own skull, teeth, special features and overrides."""
import numpy as np
from sdf import V

LEN = {'cr', 'canal', 'sl', 'sw', 'st', 'tl', 'tr', 'tu', 'tb', 'zyg', 'hypo', 'chevron'}


def _sc(p, s):
    return {k: (v * s if k in LEN else v) for k, v in p.items()}


def series(s, dsl=1.0, csl=1.0, ctl=1.0, ctu=0.0, neck_cl=1.0, n_cerv=10, n_dors=13, n_caud=46, robust=1.0):
    """Vertebral series. dsl/csl: dorsal/caudal spine height factors; ctl/ctu:
    caudal transverse length factor and upward rise (abelisaur 'wings')."""
    def cerv(t, i):
        cr = (0.1 + 0.04 * t) * robust
        return 0.2 * s * neck_cl, _sc(dict(cr=cr, ends='pro', canal=cr * 0.35, sl=0.08 + 0.1 * t, tilt=0.2, sw=0.08,
                                           st=cr * 0.2, tl=cr * 1.2, tr=cr * 0.25, tu=-cr * 0.4, zyg=cr * 0.45,
                                           pleuro=0.5, knob=0.6), s)

    def dors(t, i):
        cr = (0.14 + 0.01 * t) * robust
        return 0.18 * s, _sc(dict(cr=cr, ends='amphi', canal=cr * 0.3, sl=(0.42 + 0.06 * np.sin(np.pi * t)) * dsl,
                                  tilt=0.05, sw=0.075, st=cr * 0.18, tl=0.3, tr=0.045, tu=0.12, zyg=cr * 0.35,
                                  pleuro=0.45, knob=0.7), s)

    def sacr(t, i):
        return 0.19 * s, _sc(dict(cr=0.14 * robust, ends='flat', canal=0.04, sl=0.3 * dsl, tilt=0.0, sw=0.08,
                                  st=0.03, tl=0.22, tr=0.05, tu=0.05), s)

    def caud(t, i):
        cr = 0.135 * (1 - 0.85 * t ** 0.9) * robust
        tl = max(0.3 * ctl * (1 - (3 / max(ctl, 1)) * t), 0)
        return 0.17 * s * (1 - 0.35 * t), _sc(dict(cr=cr, ends='amphi', canal=cr * 0.3,
                                                    sl=max(0.38 * csl * (1 - 1.3 * t), 0.0), tilt=0.45,
                                                    sw=0.1 * (1 - t) + 0.02, st=cr * 0.18, tl=tl, tr=cr * 0.25,
                                                    tu=tl * ctu, chevron=0.4 * (1 - t) ** 1.3 if i > 1 else 0), s)
    return [('cervical', n_cerv, cerv), ('dorsal', n_dors, dors), ('sacral', 5, sacr), ('caudal', n_caud, caud)]


def body(s, hz=1.0, arm=1.0, neck_up=1.0, tail_drop=1.0, fem=1.0, sacral_spine=0.35):
    """Spine curve, ribs, gastralia, pelvis, legs and arms for length factor s.
    hz scales hip height (leg length), arm the arm length, neck_up the neck rise."""
    z = s * hz
    spine = [(3.62, 3.3 + 0.75 * neck_up), (3.32, 3.3 + 0.42 * neck_up), (3.02, 3.3 + 0.16 * neck_up),
             (2.62, 3.32), (1.5, 3.3), (0.3, 3.25), (-0.9, 3.2), (-3.0, 3.1),
             (-5.5, 3.2 - 0.34 * tail_drop), (-8.1, 3.2 - 0.68 * tail_drop)]
    spine = [(x * s, zz * z) for x, zz in spine]
    return dict(
        spine=spine, sacral_spine=sacral_spine * s, shoulder_dorsal=2, gap=0.012 * s, s0=0.03 * s,
        ribs=dict(depth=[(0, 0.8 * s), (0.2, 1.35 * s), (0.45, 1.45 * s), (0.75, 1.2 * s), (1, 0.7 * s)],
                  ymax=[(0, 0.5 * s), (0.35, 0.72 * s), (0.7, 0.72 * s), (1, 0.55 * s)],
                  yend=[(0, 0.25 * s), (0.5, 0.45 * s), (1, 0.55 * s)],
                  back=[(0, 0.25 * s), (1, 0.5 * s)], wid=[(0, 0.045 * s), (0.5, 0.052 * s), (1, 0.04 * s)],
                  thick=[(0, 0.03 * s), (1, 0.024 * s)]),
        rib_last=12,
        gastralia=lambda a: (a['sh'] + V([0, 0, -1.3 * s]), a['hip'] + V([0.35 * s, 0, -1.5 * s]), 0.55 * s, 16,
                             0.018 * s),
        pelvis=dict(A_rel=(0.0, 0.33 * s, -0.28 * s), il_len=1.55 * s, il_h=0.62 * s, pub_len=1.25 * s,
                    boot=0.36 * s, isch_len=1.05 * s),
        leg=lambda side, sg, a: dict(A=a['A'] * V([1, sg, 1]),
                                     K=a['A'] * V([1, 0, 0]) + V([(0.36 + 0.12 * sg) * s, 0.37 * sg * s, 1.62 * z]),
                                     Ank=a['A'] * V([1, 0, 0]) + V([(-0.2 + 0.18 * sg) * s, 0.34 * sg * s, 0.64 * z])),
        leg_sz=dict(fem_r=0.1 * s * fem, tib_r=0.085 * s * fem, mt_len=0.58 * z, toe_len=0.46 * s, claw=0.15 * s),
        arm=lambda side, sg, a: dict(G=a['sh'] + V([0.15 * s, 0.42 * sg * s, -0.6 * s]),
                                     E=a['sh'] + V([0.15 * s + 0.17 * s * arm, 0.48 * sg * s, -0.6 * s - 0.42 * s * arm]),
                                     W=a['sh'] + V([0.15 * s + 0.5 * s * arm, 0.43 * sg * s, -0.6 * s - 0.6 * s * arm])),
        arm_sz=dict(hum_r=0.045 * s * arm ** 0.5, scap_vec=V([-0.6, 0.0, 0.62]) * s, finger_len=0.26 * s * arm,
                    claw=0.13 * s * arm),
        fingers=3,
    )
