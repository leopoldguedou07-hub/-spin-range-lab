import numpy as np, json, colorsys
from PIL import Image, ImageFilter
from scipy import ndimage
src='/home/user/-spin-range-lab/blender/GUIDE/images/03b_decoupage_couleurs_Mammouth.png'
im=np.asarray(Image.open(src).convert('RGB')).astype(np.float32)/255
H,W,_=im.shape
mx=im.max(-1); mn=im.min(-1); sat=(mx-mn)/(mx+1e-5); lum=im.mean(-1)
fg=(sat>0.22)&(mx>0.35) | (lum>0.62)
fg=ndimage.binary_opening(fg,iterations=1)

# features: hue on circle + sat + value
import math
r,g,b=im[...,0],im[...,1],im[...,2]
hue=np.arctan2(np.sqrt(3)*(g-b),2*r-g-b)
X=np.stack([np.cos(hue)*sat*2,np.sin(hue)*sat*2,mx*0.6],-1)[fg]
rng=np.random.default_rng(1); K=9
C=X[rng.choice(len(X),K,replace=False)]
for it in range(40):
    d=((X[:,None]-C[None])**2).sum(-1); l=d.argmin(1)
    C=np.array([X[l==k].mean(0) if (l==k).any() else C[k] for k in range(K)])
lab=np.full((H,W),-1); lab[fg]=l
# smooth labels: majority filter via per-label blur
stack=np.stack([ndimage.uniform_filter((lab==k).astype(np.float32),5) for k in range(K)],-1)
lab2=stack.argmax(-1); lab2[~fg]=-1
base=np.array([0xE6,0xD5,0xB0])/255; dark=np.array([0x6E,0x5A,0x40])/255
out=[]
alpha_all=Image.fromarray((fg*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.7))
A=np.asarray(alpha_all).astype(np.float32)/255
for k in range(K):
    m=(lab2==k)
    if m.sum()<300: continue
    ys,xs=np.where(m); x0,x1,y0,y1=xs.min(),xs.max()+1,ys.min(),ys.max()+1
    pad=3; x0=max(0,x0-pad);y0=max(0,y0-pad);x1=min(W,x1+pad);y1=min(H,y1+pad)
    mm=ndimage.binary_dilation(m,iterations=1)
    a=(A*mm)[y0:y1,x0:x1]
    col=im[y0:y1,x0:x1]
    L=(col*[0.3,0.55,0.15]).sum(-1); p=np.percentile(L[m[y0:y1,x0:x1]],92); Ln=np.clip(L/p,0,1.15)**1.3
    ivory=dark+(base-dark)*Ln[...,None]
    for name,c in [('c',col),('i',np.clip(ivory,0,1))]:
        rgba=np.dstack([c*255,a*255]).astype(np.uint8)
        Image.fromarray(rgba,'RGBA').save(f'assets/piece_{len(out)}_{name}.png')
    out.append(dict(x=int(x0),y=int(y0),w=int(x1-x0),h=int(y1-y0),n=int(m.sum())))
json.dump(dict(W=W,H=H,pieces=out),open('assets/pieces.json','w'))
print(len(out),out)
# preview ivory assembled
pv=Image.new('RGBA',(W,H),(20,90,70,255))
for i,p in enumerate(out): pv.alpha_composite(Image.open(f'assets/piece_{i}_i.png'),(p['x'],p['y']))
pv.save('pv_ivory.png')
pv=Image.new('RGBA',(W,H),(0,0,0,255))
for i,p in enumerate(out):
    t=Image.open(f'assets/piece_{i}_c.png'); pv.alpha_composite(t,(p['x']+ (i%3-1)*40,p['y']+(i//3-1)*30))
pv.save('pv_c.png')
