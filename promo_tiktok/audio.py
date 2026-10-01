import numpy as np, wave
SR=44100; DUR=24.0; N=int(SR*DUR); out=np.zeros((N,2))
rng=np.random.default_rng(3)
def add(sig,t,gain=1.0,pan=0.0):
    i=int(t*SR); 
    if i>=N: return
    s=sig[:N-i]*gain; out[i:i+len(s),0]+=s*(1-pan)*.5*2**.5*.71*1.41; out[i:i+len(s),1]+=s*(1+pan)*.5*2**.5*.71*1.41
def env(n,a=.005,d=.2):
    t=np.arange(n)/SR; return np.minimum(t/a,1)*np.exp(-t/d)
def kick(d=.45):
    n=int(SR*d); t=np.arange(n)/SR; f=45+110*np.exp(-t*30); ph=2*np.pi*np.cumsum(f)/SR
    return np.tanh(2.2*np.sin(ph)*np.exp(-t*7))
def lp(x,a):  # one-pole lowpass
    y=np.zeros_like(x); acc=0
    for i in range(len(x)): acc+=a*(x[i]-acc); y[i]=acc
    return y
def noise(d): return rng.standard_normal(int(SR*d))
def clap():
    n=noise(.25); e=env(len(n),.001,.07); hp=n-lp(n,.25); return hp*e*.7
def hat(d=.06):
    n=noise(d); hp=n-lp(n,.6); return hp*env(len(n),.001,.018)*.35
def boom(d=1.6):
    n=int(SR*d); t=np.arange(n)/SR; f=38+70*np.exp(-t*8); ph=2*np.pi*np.cumsum(f)/SR
    nz=lp(noise(d),.08)*np.exp(-t*5)*1.5
    return np.tanh(1.6*(np.sin(ph)*np.exp(-t*2.2)+nz))
def whoosh(d=.45,rev=False):
    n=noise(d); t=np.arange(len(n))/SR; 
    y=np.zeros_like(n); acc=0
    a=.02+.3*np.sin(np.pi*t/d)**2
    for i in range(len(n)): acc+=a[i]*(n[i]-acc); y[i]=acc
    e=np.sin(np.pi*t/d)**2; return y*e*1.2
def riser(d):
    n=noise(d); t=np.arange(len(n))/SR; y=np.zeros_like(n); acc=0
    for i in range(len(n)): acc+=(.01+.5*(t[i]/d)**2)*(n[i]-acc); y[i]=acc
    tone=np.sin(2*np.pi*np.cumsum(200+1400*(t/d)**2)/SR)*.15
    return (y*1.3+tone)*(t/d)**1.5
def tone(f,d,kind='saw',dec=.3,a=.004):
    n=int(SR*d); t=np.arange(n)/SR
    if kind=='saw': s=2*((f*t)%1)-1
    elif kind=='sq': s=np.sign(np.sin(2*np.pi*f*t))
    elif kind=='tri': s=2*np.abs(2*((f*t)%1)-1)-1
    else: s=np.sin(2*np.pi*f*t)
    return s*env(n,a,dec)
def pluck(f,d=.35):  # marimba-ish
    n=int(SR*d); t=np.arange(n)/SR
    return (np.sin(2*np.pi*f*t)+.35*np.sin(2*np.pi*f*4*t)*np.exp(-t*30)+.2*np.sin(2*np.pi*f*2*t))*env(n,.002,.12)
def chime(f): 
    n=int(SR*.8); t=np.arange(n)/SR
    return (np.sin(2*np.pi*f*t)+.5*np.sin(2*np.pi*f*2.76*t)+.25*np.sin(2*np.pi*f*5.4*t))*env(n,.001,.25)
def mtof(m): return 440*2**((m-69)/12)
B=.5  # beat
# chord roots per bar (2s): Am F C G
prog=[(57,[57,60,64]),(53,[53,57,60]),(48,[48,52,55,60]),(55,[55,59,62])]
# ---------- HOOK 0-2 ----------
add(boom(),.15,1.0); add(whoosh(.3),.0,.4)
for tt in [.5,1.0]: add(kick(),tt,.7); add(tone(mtof(33),.5,'sine',.3),tt,.5)
add(clap(),1.5,.9); add(kick(),1.5,.8)
add(riser(1.0),1.0,.35)
# ---------- MAIN GROOVE 2-18 and 21-24 ----------
def groove(t0,t1,full=True):
    bt=t0
    while bt<t1-1e-6:
        beat=int(round((bt-2)/B)); bar=int((bt-2)//2)%4; root,ch=prog[bar]
        add(kick(),bt,.85)
        if beat%2==1: add(clap(),bt,.55,.05)
        add(hat(),bt+B/2,.6,.3); add(hat(.03),bt+B/4,.25,-.3); add(hat(.03),bt+3*B/4,.25,-.3)
        # bass offbeat 8ths
        for k,o in enumerate([0,B/2]):
            b=tone(mtof(root-12),B/2*.95,'saw',.12); b=lp(b,.08); add(b,bt+o,.55 if o else .35)
        if full:
            # arpeggio 16ths
            for k in range(4):
                n=ch[(beat*4+k)%len(ch)]+12+(12 if (beat//4)%2 and k==3 else 0)
                add(pluck(mtof(n)),bt+k*B/4,.16,(-.4 if k%2 else .4))
        bt+=B
groove(2.0,18.0,True)
# pad under everything 2-18
def pad(t0,t1,gain=.08):
    bt=t0
    while bt<t1-1e-6:
        bar=int((bt-2)//2)%4; _,ch=prog[bar]; d=min(2.0,t1-bt); n=int(SR*d); t=np.arange(n)/SR
        s=sum(np.sin(2*np.pi*mtof(m)*t+np.sin(2*np.pi*.3*t))+.3*np.sin(2*np.pi*mtof(m)*1.003*t) for m in ch)
        e=np.minimum(t/.08,1)*np.minimum((d-t)/.08,1); add(s*e,bt,gain); bt+=2
pad(2.0,18.0,.05)
# lead hook melody (sparse, adventure)
mel=[(2.0,69,.5),(2.5,72,.5),(3.0,76,1.0),(4.0,74,.5),(4.5,72,.5),(5.0,71,1.0),
     (6.0,69,.5),(6.5,72,.5),(7.0,76,.5),(7.5,79,.5),(8.0,81,.5),(8.5,79,.5),(9.0,84,1.0),
     (14.0,69,.5),(14.5,72,.5),(15.0,76,1.0),(16.0,74,.5),(16.5,76,.5),(17.0,79,1.0)]
for t0,m,d in mel:
    s=tone(mtof(m),d,'sq',.35)*.5+tone(mtof(m)*1.005,d,'saw',.35)*.5; add(lp(s,.25),t0,.10,.1)
# ---------- SFX ----------
for tt in [2.0,6.0,10.0,14.0,16.0,21.0]: add(whoosh(.35),tt-.2,.7)
for tt in [3.0,4.0,5.0]: add(whoosh(.25),tt-.12,.5,.3)
add(boom(1.0),5.35,.3)  # locked thud
for k in range(31):  # counter ticks
    tt=6.15+ (1-(1-k/30)**(1/3))*1.25; add(pluck(mtof(84+(k%5))),tt,.12)
add(chime(mtof(88)),7.4,.35)
for k,tt in enumerate([8.0,8.5,9.0]): add(boom(.8),tt,.55); add(chime(mtof(76+k*4)),tt+.05,.25)
for k in range(9):  # piece landings
    tt=10.4+k*.27; add(tone(mtof(40),.15,'sine',.06),tt,.8); add(pluck(mtof(72+[0,3,5,7,10,12,15,17,19][k])),tt,.3)
add(riser(1.2),11.6,.35); add(boom(),12.8,1.0); 
for k,m in enumerate([84,88,91,96]): add(chime(mtof(m)),12.85+k*.07,.3)
for k in range(24): add(chime(mtof(96+(k*7)%12)),16.25+k*.05+rng.random()*.03,.12,rng.uniform(-.6,.6))
for k in range(7): add(pluck(mtof(79)),14.6+k*.2,.18)
add(chime(mtof(91)),17.5,.4)
# ---------- MYSTERY 18-21 ----------
for tt in [18.0,18.5,19.0,19.5]: add(boom(.6),tt,.5); add(tone(mtof(45),.5,'sine',.25),tt,.4)
pad_t=np.arange(int(SR*2))/SR; dr=sum(np.sin(2*np.pi*mtof(m)*pad_t) for m in [45,48,52,56])*np.minimum(pad_t/.3,1); add(dr,18.0,.05)
add(riser(1.0),19.0,.5)
add(boom(2.0),20.0,1.2); 
for k,m in enumerate([81,84,88,93,96]): add(chime(mtof(m)),20.0+k*.05,.3)
# ---------- END 21-24 ----------
groove(21.0,23.5,True); pad(21.0,24.0,.05)
add(boom(),21.0,.9); add(clap(),23.5,.6); add(kick(),23.5,.8)
for k,m in enumerate([69,72,76,81]): add(chime(mtof(m+12)),23.5+k*.04,.25)
# ---------- master ----------
# sidechain-ish ducking on kicks for pad/music already summed: simple bus compression via tanh
out=np.tanh(out*1.4)/np.tanh(1.4)
out*= .89/np.abs(out).max()
fade=int(SR*.25); out[-fade:]*=np.linspace(1,0,fade)[:,None]
pcm=(out*32767).astype(np.int16)
w=wave.open('music.wav','wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes()); w.close()
print('ok')
