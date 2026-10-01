import numpy as np, glob, os
from PIL import Image, ImageFilter
R='/home/user/-spin-range-lab/blender/renders'
IMG='../images'  # captures d'écran du jeu
def cut(src, dst, lo=0.06, hi=0.14):
    im=np.asarray(Image.open(src).convert('RGB')).astype(np.float32)/255
    r,g,b=im[...,0],im[...,1],im[...,2]
    sat=(r-b)            # bone = warm ivory, bg = neutral grey
    lum=(r+g+b)/3
    a=np.clip((sat-lo)/(hi-lo),0,1)
    a=a*np.clip((lum-0.10)/0.15,0,1)
    A=Image.fromarray((a*255).astype(np.uint8)).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(0.8))
    out=Image.fromarray((im*255).astype(np.uint8)).convert('RGBA'); out.putalpha(A)
    bb=A.point(lambda v:255 if v>20 else 0).getbbox()
    if bb:
        pad=12; bb=(max(0,bb[0]-pad),max(0,bb[1]-pad),min(out.width,bb[2]+pad),min(out.height,bb[3]+pad)); out=out.crop(bb)
    out.save(dst); return out.size
os.makedirs('assets/cut',exist_ok=True)
for p in sorted(glob.glob(R+'/*/*_34.png'))+sorted(glob.glob(R+'/*/*_skull.png'))+sorted(glob.glob(R+'/*/*_pieces.png'))+sorted(glob.glob(R+'/*/*_pieces_assemblees.png')):
    n=os.path.basename(p)[:-4]; print(n, cut(p,'assets/cut/'+n+'.png'))
print('user', cut(IMG+'/5.webp','assets/cut/user_mammoth.png',0.05,0.12))
