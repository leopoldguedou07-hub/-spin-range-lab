# Bande-son synthétisée, calée sur la timeline de film.js.
#   python3 audio.py  ->  audio/bande_son.wav + audio/bande_son.mp3 (via ffmpeg)
import numpy as np, subprocess, wave, os

SR = 44100
DUR = 53.0
N = int(SR * DUR)
t = np.arange(N) / SR
L = np.zeros(N); R = np.zeros(N)
rng = np.random.default_rng(3)


def at(t0, sig, gain=1.0, pan=0.0):
    i = int(t0 * SR)
    if i >= N: return
    s = sig[: N - i] * gain
    L[i:i + len(s)] += s * np.sqrt((1 - pan) / 2) * 1.41
    R[i:i + len(s)] += s * np.sqrt((1 + pan) / 2) * 1.41




def lp_fft(x, fc, hp=0):
    X = np.fft.rfft(x); f = np.fft.rfftfreq(len(x), 1 / SR)
    X *= 1 / (1 + (f / fc) ** 4)
    if hp: X *= 1 - 1 / (1 + (f / hp) ** 4)
    return np.fft.irfft(X, len(x))


def env(n, a, d):
    e = np.ones(n); ia = int(a * SR)
    if ia: e[:ia] = np.linspace(0, 1, ia)
    e *= np.exp(-np.maximum(np.arange(n) / SR - a, 0) / d)
    return e


def boom(d=3.0, f0=110, f1=32):
    n = int(d * SR); tt = np.arange(n) / SR
    f = f1 + (f0 - f1) * np.exp(-tt * 6)
    s = np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, .005, .9)
    nz = lp_fft(rng.standard_normal(n), 900) * env(n, .002, .25) * .8
    cr = lp_fft(rng.standard_normal(n), 6000, 1500) * env(n, .001, .06) * .5
    return np.tanh((s + nz + cr) * 1.6)


def riser(d=2.0):
    n = int(d * SR); tt = np.arange(n) / SR; k = tt / d
    nz = rng.standard_normal(n)
    out = np.zeros(n)
    for j in range(8):  # bande qui monte
        a, b = j * n // 8, (j + 1) * n // 8
        fc = 300 + 5000 * ((a + b) / 2 / n) ** 2
        seg = lp_fft(nz[a:b], fc * 1.5, fc * .5)
        out[a:b] = seg
    tone = np.sin(2 * np.pi * np.cumsum(120 + 700 * k ** 2) / SR) * .35
    return (out * .7 + tone) * k ** 2.2


def whoosh(d=.9):
    n = int(d * SR); k = np.arange(n) / n
    nz = lp_fft(rng.standard_normal(n), 2500, 250)
    return nz * np.sin(np.pi * k) ** 2 * 1.2


def heartbeat():
    n = int(.35 * SR); tt = np.arange(n) / SR
    return np.sin(2 * np.pi * np.cumsum(70 * np.exp(-tt * 8) + 40) / SR) * env(n, .004, .09)


def bell(f, d=2.5):
    n = int(d * SR); tt = np.arange(n) / SR
    s = sum(a * np.sin(2 * np.pi * f * r * tt) * np.exp(-tt * (1.5 + r)) for r, a in [(1, 1), (2.76, .5), (5.4, .25), (8.9, .1)])
    return s * env(n, .002, 1.2)


def blip(f, d=.12):
    n = int(d * SR); tt = np.arange(n) / SR
    return np.sin(2 * np.pi * f * tt) * np.exp(-tt * 40) * .8 + np.sin(2 * np.pi * f * 2 * tt) * np.exp(-tt * 60) * .3


def pad(t0, t1, freqs, gain=.08, bright=1.0):
    n = int((t1 - t0) * SR); tt = np.arange(n) / SR
    s = np.zeros(n)
    for f in freqs:
        for det in (-.25, .25):
            ff = f + det + .3 * np.sin(2 * np.pi * .2 * tt)
            ph = 2 * np.pi * np.cumsum(ff) / SR
            for h in range(1, 7):
                s += np.sin(h * ph) / h ** (1.6 / bright)
    e = np.minimum(1, tt / 1.2) * np.minimum(1, (t1 - t0 - tt) / 1.2)
    s = s / (len(freqs) * 4) * e
    at(t0, s, gain * .55, -.3); at(t0 + .013, s, gain * .55, .3)


# ---------------------------------------------------------------- nappe de fond
drone = np.zeros(N)
for f, a in [(41.2, 1), (55, .7), (82.4, .35)]:
    drone += a * np.sin(2 * np.pi * f * t + .5 * np.sin(2 * np.pi * .07 * t))
drone *= (.5 + .5 * np.clip(t / 4, 0, 1)) * np.clip((DUR - t) / 2, 0, 1)
at(0, drone, .07)
air = lp_fft(rng.standard_normal(N), 700, 80) * np.clip(t / 3, 0, 1) * np.clip((DUR - t) / 2, 0, 1)
at(0, air, .035)

A, C, D, E, F, G = 110, 130.81, 146.83, 164.81, 174.61, 196
pad(0, 7.6, [A / 2, E / 2, A], .05, .7)
pad(4.5, 20.2, [A / 2, A, C, E], .07)
pad(20, 32.7, [F / 2, F, A, C], .07)
pad(32.5, 45.2, [D / 2, D, F, A], .06, .8)
pad(45, 53, [A / 2, A, C * 2 ** (1 / 12), E, A * 2], .08, 1.2)  # la majeur pour finir

# ---------------------------------------------------------------- intro
for b in [.9, 1.22, 2.4, 2.72, 3.85, 4.12]:
    at(b, heartbeat(), .9)
at(2.5, riser(2.0), .35)
at(TITLE := 4.5, boom(4), .95)
at(4.5, bell(A * 2, 3), .12, -.4); at(4.53, bell(E * 2, 3), .1, .4)

# ---------------------------------------------------------------- mammouth
at(7.1, whoosh(), .5, -.5)
rumble = lp_fft(rng.standard_normal(int(2.3 * SR)), 140) * np.linspace(.2, 1, int(2.3 * SR)) ** 2
at(7.4, rumble, 1.2)
at(7.6, riser(2.0), .35)
at(9.6, boom(4), 1.0)
crackle = (rng.random(int(1.8 * SR)) > .9985) * rng.standard_normal(int(1.8 * SR)) * np.linspace(1, 0, int(1.8 * SR))
at(9.65, lp_fft(crackle, 5000), 1.2, .3)
at(12.5, boom(3, 160, 45), .7)
for i, f in enumerate([A * 2, C * 2, E * 2, A * 4]):
    at(12.5 + i * .09, bell(f), .14, (i - 1.5) / 2)
for i in range(12):
    at(14.1 + i * .3, blip(900 * 2 ** (i / 12)), .1, .3)

# ---------------------------------------------------------------- titanoboa
at(19.6, whoosh(1.0), .55, .5)
sw = lp_fft(rng.standard_normal(int(4.6 * SR)), 1800, 300)
sw *= (.3 + .7 * np.sin(2 * np.pi * 1.3 * np.arange(len(sw)) / SR) ** 2) * np.linspace(.3, 1, len(sw))
at(20.0, sw, .35, 0)
at(22.6, riser(2.0), .35)
at(24.6, boom(4), 1.0)
for i, f in enumerate([F * 2, A * 2, C * 4, F * 4]):
    at(24.6 + i * .09, bell(f), .14, (i - 1.5) / 2)
for i in range(12):
    at(26.2 + i * .3, blip(800 * 2 ** (i / 12)), .1, .3)

# ---------------------------------------------------------------- mosasaure
at(32.1, whoosh(1.0), .5, -.5)
for p in [32.6, 34.2, 35.8]:
    at(p, bell(1318, 3) * .6, .18, .2)  # sonar
hum_n = int(3.6 * SR); ht = np.arange(hum_n) / SR
hum = np.sign(np.sin(2 * np.pi * 110 * ht)) * (.5 + .5 * np.sin(2 * np.pi * 7 * ht))
at(34.0, lp_fft(hum, 900) * np.minimum(1, ht / .3) * np.minimum(1, (3.6 - ht) / .3), .05)
for i in range(40):
    at(32.5 + rng.random() * 12, blip(500 + rng.random() * 900, .08) * .5, .08, rng.random() * 2 - 1)
at(35.5, riser(2.0), .3)
at(37.5, boom(4), .95)
for i, f in enumerate([D * 2, F * 2, A * 2, D * 4]):
    at(37.5 + i * .09, bell(f), .14, (i - 1.5) / 2)
for i in range(12):
    at(39.1 + i * .3, blip(1000 * 2 ** (i / 12)), .1, .3)
at(44.0, riser(1.0), .3)

# ---------------------------------------------------------------- finale
at(45.0, boom(3, 140, 40), .7)
for p in [46.0, 46.55, 47.1]:
    at(p, boom(2, 180, 55), .55)
at(46.2, riser(1.8), .35)
at(48.0, boom(5), 1.1)
for i, f in enumerate([A * 2, C * 2 ** (1 / 12) * 2, E * 2, A * 4, E * 4]):
    at(48.0 + i * .1, bell(f, 4), .14, (i - 2) / 2)

# ---------------------------------------------------------------- réverbe + master
ir_n = int(2.6 * SR); it = np.arange(ir_n) / SR
ir = rng.standard_normal((2, ir_n)) * np.exp(-it * 2.6)
ir[:, :int(.02 * SR)] = 0
size = 1 << int(np.ceil(np.log2(N + ir_n)))
outs = []
for ch, x in enumerate([L, R]):
    wet = np.fft.irfft(np.fft.rfft(x, size) * np.fft.rfft(ir[ch], size), size)[:N]
    wet = lp_fft(wet, 5000)
    outs.append(x + wet * .025)
mix = np.stack(outs, 1)
mix = np.tanh(mix * 1.2)
mix /= np.max(np.abs(mix)) / .89
fade = np.clip((DUR - t) / 1.5, 0, 1)[:, None]
mix *= fade

os.makedirs('audio', exist_ok=True)
with wave.open('audio/bande_son.wav', 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((mix * 32767).astype('<i2').tobytes())
subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', 'audio/bande_son.wav', '-b:a', '192k', 'audio/bande_son.mp3'], check=True)
print('ok')
