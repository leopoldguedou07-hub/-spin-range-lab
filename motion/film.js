// LE DINOSAURE — bande-annonce « Édition Mythique »
// Tout est une fonction pure du temps t (secondes) : on peut lire en temps réel
// ou rendre image par image (render.mjs) avec exactement le même résultat.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export const DURATION = 53;
const TL = {
  title: 4.5,
  mam: 7.5, mamBurst: 9.6, mamStamp: 12.5,
  ser: 20, serDone: 24.6,
  mos: 32.5, mosDone: 37.5,
  fin: 45, finTitle: 48,
};

// ---------------------------------------------------------------- utilitaires
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, t) => a + (b - a) * t;
const inv = (a, b, x) => clamp((x - a) / (b - a));
const E = {
  io: t => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  out: t => 1 - Math.pow(1 - t, 3),
  in: t => t * t * t,
  outX: t => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  back: t => { const c1 = 1.9, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
  sine: t => .5 - .5 * Math.cos(Math.PI * t),
};
// impulsion : monte en `a` s, redescend exponentiellement en `d` s
const hit = (t, t0, a, d) => (t < t0 ? 0 : t < t0 + a ? (t - t0) / a : Math.exp(-(t - t0 - a) / d));
const win = (t, a, b, fi = .3, fo = .3) => inv(a, a + fi, t) * (1 - inv(b - fo, b, t));
const v3 = (x, y, z) => new THREE.Vector3(x, y, z);
const V = (a, b, t) => a.clone().lerp(b, t);

function rng(seed) {
  return () => {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------- GLSL commun
const NOISE = /* glsl */`
float h13(vec3 p){ p=fract(p*.1031); p+=dot(p,p.zyx+31.32); return fract((p.x+p.y)*p.z); }
float vn3(vec3 p){ vec3 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(mix(h13(i),h13(i+vec3(1,0,0)),f.x),mix(h13(i+vec3(0,1,0)),h13(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h13(i+vec3(0,0,1)),h13(i+vec3(1,0,1)),f.x),mix(h13(i+vec3(0,1,1)),h13(i+vec3(1,1,1)),f.x),f.y),f.z); }
float fb3(vec3 p){ float a=.5,s=0.; for(int i=0;i<4;i++){ s+=a*vn3(p); p=p*2.03+vec3(1.7,9.2,3.1); a*=.5; } return s/.9375; }
float h12(vec2 p){ vec3 p3=fract(vec3(p.xyx)*.1031); p3+=dot(p3,p3.yzx+33.33); return fract((p3.x+p3.y)*p3.z); }
vec2 h22(vec2 p){ vec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973)); p3+=dot(p3,p3.yzx+33.33); return fract((p3.xx+p3.yz)*p3.zy); }
float vn2(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(h12(i),h12(i+vec2(1,0)),f.x),mix(h12(i+vec2(0,1)),h12(i+vec2(1,1)),f.x),f.y); }
float fb2(vec2 p){ float a=.5,s=0.; for(int i=0;i<5;i++){ s+=a*vn2(p); p=p*2.07+vec2(5.3,1.9); a*=.5; } return s/.97; }
float vedge(vec2 x){
  vec2 n=floor(x), f=fract(x), mg=vec2(0.), mr=vec2(0.); float md=8.;
  for(int j=-1;j<=1;j++) for(int i=-1;i<=1;i++){ vec2 g=vec2(float(i),float(j)); vec2 r=g+h22(n+g)-f; float d=dot(r,r); if(d<md){ md=d; mr=r; mg=g; } }
  md=8.;
  for(int j=-1;j<=1;j++) for(int i=-1;i<=1;i++){ vec2 g=mg+vec2(float(i),float(j)); vec2 r=g+h22(n+g)-f; if(dot(mr-r,mr-r)>.00001) md=min(md,dot(.5*(mr+r),normalize(r-mr))); }
  return md;
}
`;

// ---------------------------------------------------------------- squelettes
function patchBone(mat, zr) {
  const u = {
    uGlowCol: { value: new THREE.Color(1, .12, .22) },
    uEdgeCol: { value: new THREE.Color(1, .55, .15) },
    uRim: { value: 0 }, uBand: { value: 0 }, uBandPos: { value: -2 }, uBandW: { value: .07 },
    uReveal: { value: 5 }, uRevealDir: { value: 1 }, uEdge: { value: 0 },
    uGroundY: { value: -99 }, uGroundGlow: { value: 0 }, uSelf: { value: 0 }, uVein: { value: 0 },
    uTime: { value: 0 }, uNS: { value: 9 }, uZ: { value: new THREE.Vector2(zr[0], zr[1]) },
  };
  mat.onBeforeCompile = s => {
    Object.assign(s.uniforms, u);
    s.vertexShader = s.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vLP; varying vec3 vWP;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvLP = position; vWP = (modelMatrix*vec4(position,1.)).xyz;');
    s.fragmentShader = s.fragmentShader
      .replace('#include <common>', `#include <common>
uniform vec3 uGlowCol, uEdgeCol; uniform vec2 uZ;
uniform float uRim,uBand,uBandPos,uBandW,uReveal,uRevealDir,uEdge,uGroundY,uGroundGlow,uSelf,uVein,uTime,uNS;
varying vec3 vLP; varying vec3 vWP;
${NOISE}`)
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
float axisT = clamp((vLP.z-uZ.x)/(uZ.y-uZ.x),0.,1.);
float sT = uRevealDir>0. ? 1.-axisT : axisT;
float sv = sT + (fb3(vLP*uNS)-.5)*.3;
float rdiff = uReveal - sv;
if(rdiff<0.) discard;
float redge = (1.-smoothstep(0.,.06,rdiff))*uEdge;`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
vec3 _vd = normalize(vViewPosition);
float fres = pow(1.-clamp(abs(dot(normal,_vd)),0.,1.),2.2);
float band = exp(-pow((axisT-uBandPos)/uBandW,2.));
float vein = 1.-smoothstep(0.,.03,abs(fb3(vLP*uNS*1.7+vec3(0.,uTime*.22,0.))-.5));
float gr = exp(-abs(vWP.y-uGroundY)*5.)*uGroundGlow;
totalEmissiveRadiance += uGlowCol*(fres*uRim*(1.+band*2.) + band*uBand*(.35+fres*1.6) + vein*uVein*(.35+fres))
  + uEdgeCol*(redge*4. + gr*3.) + diffuseColor.rgb*uSelf;`);
  };
  mat.needsUpdate = true;
  return u;
}

function makeHolo(geom, u) {
  const m = new THREE.ShaderMaterial({
    uniforms: {
      uReveal: u.uReveal, uRevealDir: u.uRevealDir, uNS: u.uNS, uZ: u.uZ, uTime: u.uTime,
      uI: { value: 0 }, uPx: { value: 1 }, uCol: { value: new THREE.Color(.3, .95, 1) },
    },
    vertexShader: `uniform float uReveal,uRevealDir,uNS,uTime,uI,uPx; uniform vec2 uZ; varying float vA;
${NOISE}
void main(){
  float axisT=clamp((position.z-uZ.x)/(uZ.y-uZ.x),0.,1.);
  float sT=uRevealDir>0.?1.-axisT:axisT;
  float d=sT+(fb3(position*uNS)-.5)*.3-uReveal;
  float near=exp(-max(d,0.)*7.);
  float fl=.5+.5*step(.35,h12(position.xy*91.+floor(uTime*24.)));
  vA=uI*smoothstep(-.03,.03,d)*(.3+.7*near)*fl;
  vec4 mv=modelViewMatrix*vec4(position,1.);
  gl_Position=projectionMatrix*mv;
  gl_PointSize=uPx*(1.2+near*2.6)*(9./-mv.z);
}`,
    fragmentShader: `uniform vec3 uCol; varying float vA;
void main(){ float d=length(gl_PointCoord-.5); if(vA<.002) discard; gl_FragColor=vec4(uCol*vA*smoothstep(.5,.1,d)*2.,1.); }`,
    transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const p = new THREE.Points(geom, m);
  p.frustumCulled = false;
  return p;
}

async function loadCreature(loader, url, len) {
  const g = await loader.loadAsync(url);
  let mesh = null;
  g.scene.traverse(o => { if (o.isMesh && !mesh) mesh = o; });
  mesh.updateMatrixWorld(true);
  mesh.geometry.applyMatrix4(mesh.matrixWorld);
  mesh.position.set(0, 0, 0); mesh.rotation.set(0, 0, 0); mesh.scale.set(1, 1, 1);
  mesh.geometry.computeBoundingBox();
  const bb = mesh.geometry.boundingBox;
  const s = len / (bb.max.z - bb.min.z);
  const center = bb.getCenter(new THREE.Vector3());
  const u = patchBone(mesh.material, [bb.min.z, bb.max.z]);
  mesh.material.envMapIntensity = 1;
  mesh.frustumCulled = false;
  const inner = new THREE.Group();
  inner.add(mesh);
  inner.scale.setScalar(s);
  inner.position.set(-center.x * s, -bb.min.y * s, -center.z * s);
  const group = new THREE.Group();
  group.add(inner);
  // point de la tête (moyenne des sommets à l'avant)
  const pos = mesh.geometry.attributes.position;
  const head = new THREE.Vector3(); let n = 0;
  const zc = bb.max.z - (bb.max.z - bb.min.z) * .07;
  for (let i = 0; i < pos.count; i++) if (pos.getZ(i) > zc) { head.x += pos.getX(i); head.y += pos.getY(i); head.z += pos.getZ(i); n++; }
  head.divideScalar(n);
  const headLocal = head.clone().multiplyScalar(s).add(inner.position);
  return { group, inner, mesh, u, s, bb, head: headLocal, height: (bb.max.y - bb.min.y) * s, len };
}

// ---------------------------------------------------------------- sol
function makeGround() {
  const u = {
    uMode: { value: 0 }, uTime: { value: 0 }, uC: { value: new THREE.Vector2() },
    uCrackR: { value: 0 }, uCrackGlow: { value: 0 }, uCrackCol: { value: new THREE.Color(1, .32, .06) },
    uHoleR: { value: 0 }, uCaustic: { value: 0 }, uGrid: { value: 0 }, uDune: { value: 0 },
    uShock: { value: -5 }, uShockI: { value: 0 }, uShockCol: { value: new THREE.Color(1, .4, .1) },
    uRough: { value: 1 }, uRings: { value: 0 },
  };
  const H = /* glsl */`
uniform float uMode,uTime,uCrackR,uCrackGlow,uHoleR,uCaustic,uGrid,uDune,uShock,uShockI,uRough,uRings;
uniform vec2 uC; uniform vec3 uCrackCol,uShockCol;
varying vec3 vWP2;
${NOISE}
float gH(vec2 p){
  float d=length(p-uC);
  float h=(vn2(p*.35)-.5)*.35*(1.-min(uGrid,1.));
  h+=uDune*(sin(p.x*.21+sin(p.y*.14)*1.7)*1.2+(vn2(p*.11)-.5)*2.4)*smoothstep(9.,24.,d);
  h*=smoothstep(2.5,9.,d)*.88+.12;
  h+=uShockI*.32*exp(-pow((d-uShock)/.7,2.));
  if(uHoleR>.01) h+=.4*exp(-pow((d-uHoleR*1.18)/.7,2.));
  return h;
}`;
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, metalness: 0 });
  mat.onBeforeCompile = s => {
    Object.assign(s.uniforms, u);
    s.vertexShader = s.vertexShader
      .replace('#include <common>', '#include <common>\n' + H)
      .replace('#include <beginnormal_vertex>', `vec4 _wq=modelMatrix*vec4(position,1.); float _e=.2;
float _hx=gH(_wq.xz+vec2(_e,0.))-gH(_wq.xz-vec2(_e,0.)); float _hz=gH(_wq.xz+vec2(0.,_e))-gH(_wq.xz-vec2(0.,_e));
vec3 objectNormal=normalize(vec3(-_hx/(2.*_e),_hz/(2.*_e),1.));
#ifdef USE_TANGENT
vec3 objectTangent=vec3(tangent.xyz);
#endif`)
      .replace('#include <begin_vertex>', `vec3 transformed=vec3(position); float _h=gH(_wq.xz); transformed.z+=_h; vWP2=_wq.xyz+vec3(0.,_h,0.);`);
    s.fragmentShader = s.fragmentShader
      .replace('#include <common>', '#include <common>\n' + H + `
float caus(vec2 p,float t){ vec2 q=p+vec2(sin(t*.7+p.y*.4),cos(t*.6+p.x*.4))*.45; float e=vedge(q*.9+t*.12); return pow(1.-smoothstep(0.,.09,e),3.)*(.4+.6*vn2(p*.4+t*.1)); }`)
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
vec2 gp=vWP2.xz; float gd=length(gp-uC);
float hr=0.;
if(uHoleR>.01){ hr=uHoleR*(.86+.3*vn2(normalize(gp-uC+.0001)*2.6+7.)); if(gd<hr) discard; }
float n1=fb2(gp*.5), n2=vn2(gp*4.);
float ce=vedge(gp*.85+vec2(fb2(gp*.7),fb2(gp*.7+3.))*.7);
float crackMask=smoothstep(uCrackR,uCrackR-1.8,gd);
float crack=(1.-smoothstep(0.,.05,ce))*crackMask;`)
      .replace('#include <color_fragment>', `vec3 alb;
if(uMode<.5) alb=mix(vec3(.05,.035,.026),vec3(.16,.11,.075),n1)*(.75+.45*n2);
else if(uMode<1.5) alb=mix(vec3(.15,.065,.045),vec3(.42,.2,.12),clamp(n1*.8+.25*sin(gp.x*3.1+gp.y*.8+n1*7.),0.,1.));
else if(uMode<2.5) alb=mix(vec3(.07,.11,.10),vec3(.28,.31,.25),n1)*(.85+.3*n2);
else alb=vec3(.016,.015,.02)*(.6+.8*n1);
alb*=1.-crack*.8*step(uMode,.5);
diffuseColor.rgb=alb;`)
      .replace('#include <roughnessmap_fragment>', 'float roughnessFactor=uRough;')
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
{ float hf;
  if(uMode<.5) hf=fb2(gp*2.5)*.12+vn2(gp*13.)*.03-crack*.06;
  else if(uMode<1.5) hf=sin(gp.x*5.5+gp.y*1.3+n1*9.)*.035+vn2(gp*9.)*.02;
  else if(uMode<2.5) hf=vn2(gp*5.)*.06+vn2(gp*17.)*.015;
  else hf=0.;
  vec3 sx=dFdx(-vViewPosition), sy=dFdy(-vViewPosition); vec3 r1=cross(sy,normal), r2=cross(normal,sx);
  float det=dot(sx,r1); vec3 grad=sign(det)*(dFdx(hf)*r1+dFdy(hf)*r2);
  normal=normalize(abs(det)*normal-grad); }`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
float pulse=1.15+.45*sin(uTime*7.-gd*2.2);
totalEmissiveRadiance+=uCrackCol*crack*uCrackGlow*pulse*(1.6-.9*clamp(gd/max(uCrackR,.1),0.,1.));
if(uHoleR>.01) totalEmissiveRadiance+=uCrackCol*exp(-(gd-hr)*3.2)*1.1;
totalEmissiveRadiance+=uShockCol*uShockI*exp(-pow((gd-uShock)/.35,2.))*2.5;
if(uMode>1.5&&uMode<2.5) totalEmissiveRadiance+=alb*vec3(.55,1.,1.1)*caus(gp*.7,uTime)*uCaustic;
if(uMode>2.5){
  vec2 g=abs(fract(gp*.75)-.5); float line=1.-smoothstep(.0,.025,.5-max(g.x,g.y));
  float wave=.5+.5*sin(gd*1.1-uTime*3.);
  totalEmissiveRadiance+=vec3(1.,.12,.2)*line*uGrid*(.15+.85*wave*wave)*exp(-gd*.07);
  float rr=min(min(length(gp-vec2(-7.,0.)),length(gp)),length(gp-vec2(6.8,0.)));
  totalEmissiveRadiance+=vec3(1.,.55,.18)*uRings*(exp(-abs(rr-2.4)*18.)*2.+exp(-abs(rr-2.75)*30.));
}`);
  };
  const geo = new THREE.PlaneGeometry(140, 140, 260, 260);
  const m = new THREE.Mesh(geo, mat);
  m.rotation.x = -Math.PI / 2;
  m.frustumCulled = false;
  return { mesh: m, u };
}

function makePit() {
  const g = new THREE.CylinderGeometry(1, .65, 1, 72, 1, true);
  g.translate(0, -.5, 0);
  const u = { uI: { value: 1 }, uTime: { value: 0 } };
  const m = new THREE.ShaderMaterial({
    uniforms: u, side: THREE.BackSide,
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
    fragmentShader: `uniform float uI,uTime; varying vec2 vUv;
${NOISE}
void main(){ float y=vUv.y; float n=fb2(vec2(vUv.x*24.,y*6.-uTime*.6));
  vec3 hot=vec3(1.,.42,.1)*(2.2+2.*n)*uI; vec3 dark=vec3(.035,.022,.016)*(.6+n);
  vec3 c=mix(hot,dark,smoothstep(0.,.75,y));
  gl_FragColor=vec4(c,1.); }`,
  });
  const mesh = new THREE.Mesh(g, m);
  mesh.frustumCulled = false;
  return { mesh, u };
}

function makeBeam() {
  const g = new THREE.CylinderGeometry(1, 1, 1, 64, 1, true);
  g.translate(0, .5, 0);
  const u = { uCol: { value: new THREE.Color(1, .6, .25) }, uI: { value: 0 }, uTime: { value: 0 } };
  const m = new THREE.ShaderMaterial({
    uniforms: u, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    vertexShader: `varying vec2 vUv; varying vec3 vN; varying vec3 vV;
void main(){ vUv=uv; vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*mv; }`,
    fragmentShader: `uniform vec3 uCol; uniform float uI,uTime; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
void main(){ float f=abs(dot(vN,vV)); float y=vUv.y; float a=vUv.x*6.2832;
  float fade=pow(1.-y,1.7)*smoothstep(0.,.02,y);
  float streak=.55+.45*sin(a*9.+sin(a*4.+uTime*.7)*2.)*sin(a*5.-uTime*1.3+y*4.);
  float rip=.75+.25*sin(y*36.-uTime*9.);
  gl_FragColor=vec4(uCol*uI*pow(f,2.2)*fade*streak*rip,1.); }`,
  });
  const mesh = new THREE.Mesh(g, m);
  mesh.frustumCulled = false;
  return { mesh, u };
}

function makeScanPlane() {
  const g = new THREE.PlaneGeometry(1, 1);
  const u = { uI: { value: 0 }, uTime: { value: 0 }, uCol: { value: new THREE.Color(.3, .95, 1) } };
  const m = new THREE.ShaderMaterial({
    uniforms: u, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
    fragmentShader: `uniform float uI,uTime; uniform vec3 uCol; varying vec2 vUv;
void main(){ vec2 c=abs(vUv-.5)*2.; float frame=smoothstep(.96,1.,max(c.x,c.y));
  vec2 g=abs(fract(vUv*18.)-.5); float grid=1.-smoothstep(0.,.06,.5-max(g.x,g.y));
  float sweep=exp(-pow((vUv.y-fract(uTime*.8))*12.,2.));
  float fall=1.-smoothstep(.6,1.,length(vUv-.5)*1.6);
  gl_FragColor=vec4(uCol*uI*(frame*1.5+grid*.35*fall+.12*fall+sweep*.5*fall),1.); }`,
  });
  const mesh = new THREE.Mesh(g, m);
  mesh.frustumCulled = false;
  return { mesh, u };
}

function makeRays(n, r) {
  // rayons de lumière sous-marins (billboards cylindriques)
  const group = new THREE.Group();
  const u = { uI: { value: 0 }, uTime: { value: 0 } };
  const R = rng(7);
  for (let i = 0; i < n; i++) {
    const w = 1.2 + R() * 2.4;
    const g = new THREE.PlaneGeometry(w, 30);
    g.translate(0, -15, 0);
    const m = new THREE.ShaderMaterial({
      uniforms: { ...u, uSeed: { value: R() * 10 } }, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
      fragmentShader: `uniform float uI,uTime,uSeed; varying vec2 vUv;
void main(){ float x=sin(vUv.x*3.1416); float a=x*x*smoothstep(0.,.5,vUv.y)*(.55+.45*sin(uTime*.9+uSeed*6.+vUv.y*3.));
  gl_FragColor=vec4(vec3(.45,.9,1.)*a*uI*.22,1.); }`,
    });
    m.uniforms.uI = u.uI; m.uniforms.uTime = u.uTime;
    const mesh = new THREE.Mesh(g, m);
    const a = R() * Math.PI * 2, d = 2 + R() * r;
    mesh.position.set(Math.cos(a) * d, 15, Math.sin(a) * d - 2);
    mesh.userData.tilt = (R() - .5) * .35;
    mesh.frustumCulled = false;
    group.add(mesh);
  }
  return { group, u };
}

// ---------------------------------------------------------------- particules
const PT_HEAD = /* glsl */`attribute vec4 aS; uniform float uT,uPx,uI,uSize; uniform vec3 uCol; varying float vA; varying vec3 vC;
float hh(float n){ return fract(sin(n*127.1)*43758.5453); }
void outPt(vec3 p,float size){ vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=size*uSize*uPx*300./max(-mv.z,.1); }
void hide(){ gl_Position=vec4(2.,2.,2.,1.); gl_PointSize=0.; vA=0.; }
`;
const FS_SOFT = `varying float vA; varying vec3 vC; void main(){ if(vA<.003) discard; float d=length(gl_PointCoord-.5); float a=smoothstep(.5,0.,d); gl_FragColor=vec4(vC*vA*a*a*1.6,1.); }`;
const FS_BUBBLE = `varying float vA; varying vec3 vC; void main(){ if(vA<.003) discard; float d=length(gl_PointCoord-.5); float ring=smoothstep(.5,.42,d)*(.18+.82*smoothstep(.28,.46,d)); float hl=smoothstep(.16,.0,length(gl_PointCoord-vec2(.36,.34))); gl_FragColor=vec4(vC*vA*(ring+hl*1.2),1.); }`;
const FS_SAND = `varying float vA; varying vec3 vC; void main(){ if(vA<.003) discard; float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.15,d); gl_FragColor=vec4(vC,vA*a); }`;

function makePts(n, seed, main, extra = {}, fs = FS_SOFT, blending = THREE.AdditiveBlending) {
  const g = new THREE.BufferGeometry();
  const R = rng(seed);
  const s = new Float32Array(n * 4);
  for (let i = 0; i < n * 4; i++) s[i] = R();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  g.setAttribute('aS', new THREE.BufferAttribute(s, 4));
  const uniforms = {
    uT: { value: 0 }, uPx: { value: 1 }, uI: { value: 0 }, uSize: { value: .05 }, uCol: { value: new THREE.Color(1, .5, .2) },
    ...Object.fromEntries(Object.entries(extra).map(([k, v]) => [k, { value: v }])),
  };
  const decl = Object.entries(extra).map(([k, v]) =>
    `uniform ${typeof v === 'number' ? 'float' : v.isVector3 || v.isColor ? 'vec3' : 'vec2'} ${k};`).join('\n');
  const m = new THREE.ShaderMaterial({
    uniforms, vertexShader: PT_HEAD + decl + '\nvoid main(){' + main + '}', fragmentShader: fs,
    transparent: true, blending, depthWrite: false,
  });
  const p = new THREE.Points(g, m);
  p.frustumCulled = false;
  return { pts: p, u: uniforms };
}

function makeParticles() {
  const P = {};
  // braises qui montent
  P.embers = makePts(700, 1, `
    float H=uH; float y=mod(aS.w*H+uT*uSpd*(.5+aS.z),H);
    float a=aS.x*6.2832; float r=sqrt(aS.y)*uR; float k=y/H;
    vec3 p=uO+vec3(cos(a)*r+sin(uT*1.3+aS.z*20.)*.6*k, y, sin(a)*r+cos(uT*1.1+aS.x*20.)*.6*k);
    float fl=.55+.45*sin(uT*(7.+aS.z*9.)+aS.x*50.);
    vA=uI*smoothstep(0.,.12,k)*(1.-smoothstep(.55,1.,k))*fl;
    vC=mix(uCol,vec3(1.,.85,.5),aS.z*.6);
    outPt(p,.5+aS.z);`, { uO: v3(0, 0, 0), uR: 12, uH: 9, uSpd: 1 });
  // gerbe d'étincelles
  P.sparks = makePts(1600, 2, `
    float age=uT-uT0-aS.w*.12; if(age<0.){ hide(); return; }
    float life=.7+aS.z*2.2; if(age>life){ hide(); return; }
    float a=aS.x*6.2832; float el=mix(.2,1.,pow(aS.y,.7));
    vec3 dir=normalize(vec3(cos(a)*(1.1-el*uUp), .25+el*uUp*2.2, sin(a)*(1.1-el*uUp)));
    float sp=uSpd*(.25+.95*hh(aS.x*7.+aS.y));
    float kk=(1.-exp(-1.4*age))/1.4;
    vec3 p=uO+dir*sp*kk; p.y-=3.2*age*age; p.y=max(p.y,.03);
    vA=uI*(1.-smoothstep(life*.45,life,age));
    vC=mix(vec3(1.,.95,.8),uCol,smoothstep(0.,life*.5,age));
    outPt(p,(.45+aS.z*.9)*(1.4-age/life));`, { uO: v3(0, 0, 0), uT0: -99, uSpd: 14, uUp: .7 });
  // poussière en suspension
  P.dust = makePts(1100, 3, `
    vec3 b=(aS.xyz-.5)*uBox; vec3 p=b+uWind*uT+vec3(sin(uT*.31+aS.w*30.),cos(uT*.27+aS.x*20.),sin(uT*.22+aS.y*25.))*.45;
    p=mod(p+uBox*.5,uBox)-uBox*.5+uO;
    vA=uI*(.25+.75*aS.w)*(.6+.4*sin(uT*2.+aS.z*40.)); vC=uCol;
    outPt(p,.25+aS.w*.5);`, { uO: v3(0, 3, 0), uBox: v3(30, 10, 30), uWind: v3(.1, .05, 0) });
  // particules dans le pilier de lumière
  P.beam = makePts(600, 4, `
    float y=mod(aS.w*uH+uT*uSpd*(.4+aS.z),uH); float a=aS.x*6.2832+uT*(.8+aS.y*1.5)+y*.25; float r=uR*(.15+.85*sqrt(aS.y));
    vec3 p=uO+vec3(cos(a)*r,y,sin(a)*r);
    vA=uI*(1.-y/uH)*smoothstep(0.,.5,y); vC=mix(uCol,vec3(1.),aS.z*.5);
    outPt(p,.35+aS.z*.6);`, { uO: v3(0, 0, 0), uR: 3, uH: 14, uSpd: 3 });
  // tourbillon de sable
  P.sand = makePts(3000, 5, `
    float r0=mix(2.,6.5,aS.x); float ang=aS.y*6.2832+uT*(3.2/r0)+uPh*2.;
    float yy=mod(aS.z*2.6+uT*(.25+aS.w*.5),2.6)*(r0/6.5+.15);
    float r=r0*(1.-.38*uPh);
    vec3 p=uO+vec3(cos(ang)*r,yy,sin(ang)*r);
    float b=max(uT-uB,0.); float kk=(1.-exp(-2.*b))/2.;
    vec3 od=normalize(vec3(cos(ang),.3+aS.w*.5,sin(ang)));
    p+=od*kk*(14.+10.*aS.w)*step(uB,uT);
    vA=uI*(.35+.65*aS.w)*(1.-smoothstep(.0,1.6,b)*step(uB,uT));
    vC=uCol*(.7+.5*aS.z);
    outPt(p,.35+aS.w*.8);`, { uO: v3(0, 0, 0), uPh: 0, uB: 99 });
  // bulles
  P.bubbles = makePts(800, 6, `
    float y=mod(aS.w*uH+uT*(.5+aS.z*1.3),uH);
    vec3 p=uO+vec3((aS.x-.5)*uBox.x+sin(uT*2.+aS.y*30.)*.25, y, (aS.y-.5)*uBox.z+cos(uT*1.7+aS.x*30.)*.25);
    vA=uI*smoothstep(0.,1.,y)*(1.-smoothstep(uH*.7,uH,y)); vC=vec3(.6,.95,1.);
    outPt(p,.25+aS.z*.7);`, { uO: v3(0, 0, 0), uBox: v3(26, 0, 26), uH: 12 }, FS_BUBBLE);
  // jaillissement de bulles depuis le squelette
  P.burst = makePts(900, 7, `
    float age=uT-uT0-aS.w*.25; if(age<0.){ hide(); return; }
    vec3 p=uO+vec3((aS.x-.5)*uW,(aS.z-.5)*.8,(aS.y-.5)*uL);
    p.y+=age*(1.5+aS.z*3.)+age*age*.6; p.x+=sin(age*5.+aS.y*20.)*.2;
    vA=uI*(1.-smoothstep(1.8,3.2,age)); vC=vec3(.6,.95,1.);
    outPt(p,.3+aS.z*.8);`, { uO: v3(0, 0, 0), uT0: -99, uW: 1.5, uL: 6 }, FS_BUBBLE);
  // neige marine
  P.snow = makePts(900, 8, `
    vec3 b=(aS.xyz-.5)*uBox; vec3 p=b+vec3(.08,-.25,.05)*uT+vec3(sin(uT*.4+aS.w*30.),0.,cos(uT*.35+aS.x*20.))*.3;
    p=mod(p+uBox*.5,uBox)-uBox*.5+uO;
    vA=uI*(.3+.7*aS.w); vC=vec3(.75,.95,1.);
    outPt(p,.2+aS.w*.4);`, { uO: v3(0, 4, 0), uBox: v3(28, 12, 28) });
  return P;
}

// ---------------------------------------------------------------- débris
function makeDebris(n) {
  const R = rng(11);
  const geo = new THREE.DodecahedronGeometry(1, 0);
  const rock = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0x3a2a1e, roughness: 1, flatShading: true }), n);
  const hot = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0x1a0d06, emissive: 0xff5a14, emissiveIntensity: 2.4, roughness: 1, flatShading: true }), Math.floor(n / 4));
  rock.frustumCulled = hot.frustumCulled = false;
  const items = [];
  for (let i = 0; i < n + Math.floor(n / 4); i++) {
    const a = R() * Math.PI * 2, r = Math.sqrt(R()) * 3;
    const el = .35 + R() * .9;
    const sp = 5 + R() * 13;
    items.push({
      p0: v3(Math.cos(a) * r, .1, Math.sin(a) * r),
      v: v3(Math.cos(a) * Math.cos(el) * sp * .6, Math.sin(el) * sp, Math.sin(a) * Math.cos(el) * sp * .6),
      size: .06 + Math.pow(R(), 2.5) * .38,
      ax: v3(R() - .5, R() - .5, R() - .5).normalize(), spin: 2 + R() * 9, delay: R() * .12,
    });
  }
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3(), sc = new THREE.Vector3();
  function update(t, t0, on) {
    rock.visible = hot.visible = on;
    if (!on) return;
    const g = 15;
    items.forEach((it, i) => {
      const age = t - t0 - it.delay;
      const mesh = i < n ? rock : hot, idx = i < n ? i : i - n;
      if (age < 0) { m4.makeScale(0, 0, 0); mesh.setMatrixAt(idx, m4); return; }
      const y0 = it.p0.y, vy = it.v.y;
      const tl = (vy + Math.sqrt(vy * vy + 2 * g * y0)) / g;
      const ae = Math.min(age, tl);
      p.set(it.p0.x + it.v.x * ae, age < tl ? y0 + vy * age - .5 * g * age * age : it.size * .4, it.p0.z + it.v.z * ae);
      q.setFromAxisAngle(it.ax, it.spin * ae);
      const s = i < n ? it.size : it.size * (age < tl ? 1 : Math.max(0, 1 - (age - tl) * .6));
      sc.setScalar(s);
      m4.compose(p, q, sc);
      mesh.setMatrixAt(idx, m4);
    });
    rock.instanceMatrix.needsUpdate = hot.instanceMatrix.needsUpdate = true;
  }
  return { rock, hot, update };
}

function makeShadowBlob() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d'); const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(0,0,0,.75)'); g.addColorStop(.6, 'rgba(0,0,0,.35)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2;
  return m;
}

// ---------------------------------------------------------------- post-traitement
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null }, uTime: { value: 0 }, uCA: { value: .002 }, uVig: { value: .9 }, uGrain: { value: .04 },
    uFlash: { value: 0 }, uFlashCol: { value: new THREE.Color(1, 1, 1) }, uLB: { value: 0 }, uFade: { value: 0 },
    uZoom: { value: 0 }, uSat: { value: 1.08 }, uTint: { value: new THREE.Color(1, 1, 1) }, uRes: { value: new THREE.Vector2(1920, 1080) },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uTime,uCA,uVig,uGrain,uFlash,uLB,uFade,uZoom,uSat; uniform vec3 uFlashCol,uTint; uniform vec2 uRes; varying vec2 vUv;
float hs(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
void main(){
  vec2 c=vUv-.5; vec3 col=vec3(0.); float tot=0.;
  float ca=uCA*(.4+length(c)*2.);
  for(int i=0;i<12;i++){
    float s=1.-uZoom*float(i)/12.;
    vec2 q=c*s;
    col+=vec3(texture2D(tDiffuse,.5+q*(1.+ca)).r,texture2D(tDiffuse,.5+q).g,texture2D(tDiffuse,.5+q*(1.-ca)).b);
    tot+=1.; if(uZoom<.001) break;
  }
  col/=tot; col=clamp(col,0.,1.);
  float l=dot(col,vec3(.2126,.7152,.0722)); col=mix(vec3(l),col,uSat)*uTint;
  col=col*col*(3.-2.*col)*.25+col*.75;
  float v=smoothstep(1.05,.25,length(c*vec2(1.,.82))); col*=mix(1.,v,uVig);
  col+=(hs(vUv*uRes+fract(uTime*7.)*91.)-.5)*uGrain;
  col+=uFlashCol*uFlash;
  col*=1.-uFade;
  if(abs(c.y)>.5-uLB) col=vec3(0.);
  gl_FragColor=vec4(col,1.);
}`,
};

// ---------------------------------------------------------------- textes (overlay 2D)
const RED = '#ff2a55', GOLD = '#f6c768', IVORY = '#f3e7cf';
const SPECIES = {
  mam: {
    name: 'MAMMOUTH LAINEUX', key: 'Mammouth', era: 'PLÉISTOCÈNE', map: 'TERRE', site: 'SITE 01 · TOUNDRA GELÉE', depth: '−18 M',
    bones: ['Crâne', 'Défense', 'Mâchoire', 'Dent', 'Vertèbre', 'Côte', 'Omoplate', 'Bras', 'Bassin', 'Fémur', 'Tibia', 'Pied'],
  },
  ser: {
    name: 'TITANOBOA', key: 'Titanoboa', era: 'PALÉOCÈNE · −60 MA', map: 'TERRE', site: 'SITE 02 · DUNES ROUGES', depth: '−24 M',
    bones: ['Crâne', 'Maxillaire', 'Mâchoire', 'Dent', 'Os carré', 'Ptérygoïde', 'Atlas', 'Cervicale', 'Vertèbre', 'Côte', 'Caudale', 'Queue'],
  },
  mos: {
    name: 'MOSASAURE', key: 'Mosasaurus', era: 'CRÉTACÉ · −70 MA', map: 'MER', site: 'SITE 03 · FOSSE OCÉANIQUE', depth: '−312 M',
    bones: ['Crâne', 'Mâchoire', 'Dent', 'Os carré', 'Ptérygoïde', 'Vertèbre', 'Côte', 'Omoplate', 'Nag. avant', 'Bassin', 'Nag. arrière', 'Queue'],
  },
};

function txt(c, s, x, y, o = {}) {
  const a = o.alpha ?? 1;
  if (a <= .002) return;
  c.save();
  c.globalAlpha = a;
  const size = o.size || 40;
  c.font = `${o.weight || 700} ${size}px ${o.family || 'Cinzel'}`;
  c.textAlign = o.align || 'center';
  c.textBaseline = 'middle';
  c.letterSpacing = (o.ls || 0) + 'px';
  c.translate(x, y);
  if (o.scale && o.scale !== 1) c.scale(o.scale, o.scale);
  if (o.blur > .3) c.filter = `blur(${o.blur}px)`;
  let fill = o.color || '#fff';
  if (o.grad) {
    const g = c.createLinearGradient(0, -size * .55, 0, size * .55);
    o.grad.forEach((col, i) => g.addColorStop(i / (o.grad.length - 1), col));
    fill = g;
  }
  if (o.glow) {
    c.shadowColor = o.glowColor || o.color || '#fff';
    c.shadowBlur = o.glow;
    c.fillStyle = fill;
    c.fillText(s, 0, 0);
    if (o.glow2) { c.shadowBlur = o.glow2; c.fillText(s, 0, 0); }
    c.shadowBlur = 0;
  }
  c.fillStyle = fill;
  c.fillText(s, 0, 0);
  if (o.stroke) { c.strokeStyle = o.stroke; c.lineWidth = o.lw || 1; c.strokeText(s, 0, 0); }
  c.restore();
}

function rays(c, x, y, R, n, rot, rgb, a, w = .07) {
  if (a <= .002) return;
  c.save();
  c.translate(x, y); c.rotate(rot);
  c.globalCompositeOperation = 'lighter';
  const g = c.createRadialGradient(0, 0, 0, 0, 0, R);
  g.addColorStop(0, `rgba(${rgb},${a})`); g.addColorStop(.35, `rgba(${rgb},${a * .45})`); g.addColorStop(1, `rgba(${rgb},0)`);
  c.fillStyle = g;
  for (let i = 0; i < n; i++) {
    const b = i * Math.PI * 2 / n, ww = w * (i % 2 ? .55 : 1);
    c.beginPath(); c.moveTo(0, 0); c.arc(0, 0, R, b - ww, b + ww); c.closePath(); c.fill();
  }
  c.restore();
}

function glowDisc(c, x, y, R, rgb, a) {
  if (a <= .002) return;
  c.save();
  c.globalCompositeOperation = 'lighter';
  const g = c.createRadialGradient(x, y, 0, x, y, R);
  g.addColorStop(0, `rgba(${rgb},${a})`); g.addColorStop(.25, `rgba(${rgb},${a * .35})`); g.addColorStop(1, `rgba(${rgb},0)`);
  c.fillStyle = g; c.fillRect(x - R, y - R, R * 2, R * 2);
  c.restore();
}

function flare(c, x, y, I, rgb = '255,170,90') {
  if (I <= .002) return;
  c.save();
  c.globalCompositeOperation = 'lighter';
  for (const [h, a] of [[2, 1], [7, .35], [22, .12]]) {
    const g = c.createLinearGradient(x - 1100, 0, x + 1100, 0);
    g.addColorStop(0, `rgba(${rgb},0)`); g.addColorStop(.5, `rgba(${rgb},${a * I})`); g.addColorStop(1, `rgba(${rgb},0)`);
    c.fillStyle = g; c.fillRect(x - 1100, y - h, 2200, h * 2);
  }
  c.restore();
  glowDisc(c, x, y, 260 * Math.min(I, 1.5), rgb, .55 * Math.min(I, 1));
  glowDisc(c, x, y, 60, '255,255,255', .8 * Math.min(I, 1));
  // reflets fantômes de l'objectif
  const cx = 960, cy = 540;
  [[-.6, 34, .12], [-1.1, 70, .07], [.45, 22, .1]].forEach(([k, r, a]) =>
    glowDisc(c, cx + (x - cx) * k, cy + (y - cy) * k, r, rgb, a * Math.min(I, 1)));
}

function brackets(c, a) {
  if (a <= .002) return;
  c.save();
  c.globalAlpha = a; c.strokeStyle = 'rgba(243,231,207,.55)'; c.lineWidth = 2;
  const m = 70, L = 46;
  [[m, m, 1, 1], [1920 - m, m, -1, 1], [m, 1080 - m, 1, -1], [1920 - m, 1080 - m, -1, -1]].forEach(([x, y, sx, sy]) => {
    c.beginPath(); c.moveTo(x, y + L * sy); c.lineTo(x, y); c.lineTo(x + L * sx, y); c.stroke();
  });
  c.restore();
}

function hudTop(c, t, a, left, right) {
  if (a <= .002) return;
  txt(c, left, 130, 112, { family: 'Rajdhani', weight: 600, size: 22, ls: 6, color: 'rgba(243,231,207,.75)', align: 'left', alpha: a });
  const blink = (Math.floor(t * 2) % 2) ? 1 : .25;
  txt(c, '●', 1640, 112, { family: 'Rajdhani', size: 22, color: RED, align: 'left', alpha: a * blink, glow: 12 });
  txt(c, right, 1790, 112, { family: 'Rajdhani', weight: 600, size: 22, ls: 6, color: 'rgba(243,231,207,.75)', align: 'right', alpha: a });
}

// reticule de détection autour d'un point écran
function reticle(c, x, y, t, a, label, sub, prog) {
  if (a <= .002) return;
  c.save();
  c.globalAlpha = a;
  c.translate(x, y);
  c.strokeStyle = 'rgba(255,80,100,.9)'; c.lineWidth = 2;
  c.shadowColor = RED; c.shadowBlur = 12;
  const R = 120 + 10 * Math.sin(t * 6);
  c.beginPath(); c.arc(0, 0, R, 0, Math.PI * 2 * prog); c.stroke();
  c.rotate(t * .8);
  for (let i = 0; i < 4; i++) { c.rotate(Math.PI / 2); c.beginPath(); c.arc(0, 0, R + 18, -.25, .25); c.stroke(); }
  c.restore();
  txt(c, label, x + 175, y - 18, { family: 'Rajdhani', weight: 700, size: 30, ls: 5, color: '#ffd6dd', align: 'left', alpha: a, glow: 14, glowColor: RED });
  txt(c, sub, x + 175, y + 18, { family: 'Rajdhani', weight: 600, size: 22, ls: 4, color: 'rgba(243,231,207,.8)', align: 'left', alpha: a });
}

function stamp(c, t, t0) {
  const lt = t - t0;
  if (lt < 0 || lt > 1.9) return;
  const a = inv(0, .06, lt) * (1 - inv(1.45, 1.9, lt));
  const sc = lt < .35 ? lerp(2.4, 1, E.back(lt / .35)) : 1 + (lt - .35) * .05 + inv(1.45, 1.9, lt) * .25;
  rays(c, 960, 540, 1100, 28, lt * .35, '255,60,90', .26 * a);
  rays(c, 960, 540, 800, 14, -lt * .5 + .1, '255,200,120', .16 * a, .03);
  glowDisc(c, 960, 540, 520, '255,40,80', .3 * a);
  txt(c, '★ ★ ★ ★ ★', 960, 540 - 115 * sc, { family: 'Rajdhani', size: 40 * sc, ls: 10, color: GOLD, alpha: a, glow: 18 });
  txt(c, 'MYTHIQUE', 960, 540, { size: 150, weight: 900, scale: sc, ls: 12, grad: ['#fff2f5', '#ff6b8a', '#ff1f4f', '#8d0024'], glow: 40, glow2: 90, glowColor: '#ff2a55', alpha: a, stroke: 'rgba(255,255,255,.5)', lw: 1.5 });
  txt(c, 'RARETÉ MAXIMALE', 960, 540 + 110 * sc, { family: 'Rajdhani', weight: 700, size: 30 * sc, ls: 16, color: IVORY, alpha: a * inv(.25, .5, lt) });
}

function card(c, t, t0, sp, found, out) {
  const lt = t - t0;
  if (lt < 0) return;
  const a = inv(0, .5, lt) * (1 - out);
  if (a <= .002) return;
  const x = 120 - (1 - E.out(inv(0, .6, lt))) * 80 - out * 60, y = 330;
  c.save();
  c.globalAlpha = a;
  // panneau verre
  const w = 640, h = 470;
  const g = c.createLinearGradient(x, y, x + w, y);
  g.addColorStop(0, 'rgba(12,6,8,.78)'); g.addColorStop(1, 'rgba(12,6,8,0)');
  c.fillStyle = g;
  c.beginPath(); c.moveTo(x, y); c.lineTo(x + w, y); c.lineTo(x + w, y + h); c.lineTo(x + 26, y + h); c.lineTo(x, y + h - 26); c.closePath(); c.fill();
  c.shadowColor = RED; c.shadowBlur = 18; c.fillStyle = RED;
  c.fillRect(x, y, 4, h * E.out(inv(0, .5, lt)));
  c.restore();
  // badge
  const ba = a * inv(.15, .45, lt);
  c.save(); c.globalAlpha = ba;
  c.fillStyle = 'rgba(255,42,85,.18)'; c.strokeStyle = RED; c.lineWidth = 2;
  c.beginPath(); c.roundRect(x + 30, y + 26, 220, 40, 20); c.fill(); c.stroke();
  c.restore();
  txt(c, '◆ MYTHIQUE', x + 140, y + 47, { family: 'Rajdhani', weight: 700, size: 24, ls: 5, color: '#ffd3dc', alpha: ba, glow: 12, glowColor: RED });
  txt(c, '★★★★★', x + 280, y + 47, { family: 'Rajdhani', size: 24, ls: 4, color: GOLD, align: 'left', alpha: ba, glow: 10 });
  // nom
  const na = a * inv(.2, .55, lt);
  const nl = Math.round(lerp(0, sp.name.length, E.out(inv(.2, .7, lt))));
  txt(c, sp.name.slice(0, nl), x + 30, y + 118, { size: sp.name.length > 12 ? 58 : 72, weight: 900, align: 'left', ls: 3, grad: ['#fffaf0', IVORY, '#cdb48a'], glow: 22, glowColor: 'rgba(255,120,90,.55)', alpha: na });
  txt(c, `${sp.era}  ·  CARTE ${sp.map}`, x + 32, y + 172, { family: 'Rajdhani', weight: 600, size: 24, ls: 4, color: '#d8c6a3', align: 'left', alpha: a * inv(.4, .8, lt) });
  // ligne
  c.save(); c.globalAlpha = a; c.fillStyle = 'rgba(243,231,207,.35)';
  c.fillRect(x + 32, y + 200, 520 * E.out(inv(.5, 1, lt)), 1.5); c.restore();
  // compteur
  const fa = a * inv(.6, .9, lt);
  txt(c, 'OS DÉCOUVERTS', x + 32, y + 236, { family: 'Rajdhani', weight: 700, size: 22, ls: 6, color: 'rgba(243,231,207,.7)', align: 'left', alpha: fa });
  const nf = Math.floor(found);
  txt(c, `${String(nf).padStart(2, '0')}`, x + 32, y + 284, { family: 'Rajdhani', weight: 700, size: 64, align: 'left', color: nf >= 12 ? GOLD : '#fff', glow: nf >= 12 ? 26 : 8, glowColor: nf >= 12 ? GOLD : '#fff', alpha: fa });
  txt(c, '/ 12', x + 112, y + 292, { family: 'Rajdhani', weight: 600, size: 34, align: 'left', color: 'rgba(243,231,207,.6)', alpha: fa });
  // barre segmentée
  for (let i = 0; i < 12; i++) {
    const on = clamp(found - i);
    c.save(); c.globalAlpha = fa;
    c.fillStyle = 'rgba(255,255,255,.1)'; c.fillRect(x + 210 + i * 29, y + 276, 24, 14);
    if (on > 0) { c.shadowColor = RED; c.shadowBlur = 14; c.fillStyle = nf >= 12 ? GOLD : RED; c.fillRect(x + 210 + i * 29, y + 276, 24 * on, 14); }
    c.restore();
  }
  // liste des os
  sp.bones.forEach((b, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const bx = x + 34 + col * 270, by = y + 334 + row * 22.5;
    const on = clamp(found - i);
    const ia = fa * (.28 + .72 * (on > 0 ? 1 : 0));
    const flash = hit(found, i, .05, .5);
    txt(c, on > 0 ? '✓' : '·', bx, by, { family: 'Rajdhani', weight: 700, size: 20, color: on > 0 ? GOLD : '#888', align: 'left', alpha: ia });
    txt(c, b.toUpperCase(), bx + 26, by, { family: 'Rajdhani', weight: 600, size: 20, ls: 3, color: on > 0 ? '#fff' : '#9a8f80', align: 'left', alpha: ia, glow: flash > .05 ? 16 * flash : 0, glowColor: GOLD });
  });
}

// ---------------------------------------------------------------- film
export async function createFilm({ canvas, base = '.', onProgress = () => {} }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', preserveDrawingBuffer: false });
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.setPixelRatio(1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 16 / 9, .05, 400);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture;
  scene.fog = new THREE.FogExp2(0x000000, .03);
  scene.background = new THREE.Color(0);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x222222, 1);
  const key = new THREE.DirectionalLight(0xffffff, 2); key.position.set(6, 10, 6);
  const rim = new THREE.DirectionalLight(0xffffff, 2); rim.position.set(-6, 5, -8);
  const glow = new THREE.PointLight(0xff6020, 0, 0, 1.6);
  const accent = new THREE.PointLight(0xff2050, 0, 0, 1.6);
  scene.add(hemi, key, rim, glow, accent);

  const ground = makeGround(); scene.add(ground.mesh);
  const pit = makePit(); scene.add(pit.mesh);
  const beam = makeBeam(); scene.add(beam.mesh);
  const beam2 = makeBeam(); scene.add(beam2.mesh);
  const finBeams = [makeBeam(), makeBeam(), makeBeam()]; finBeams.forEach(b => scene.add(b.mesh));
  const scan = makeScanPlane();
  const godrays = makeRays(9, 9); scene.add(godrays.group);
  const P = makeParticles(); Object.values(P).forEach(p => scene.add(p.pts));
  const debris = makeDebris(140); scene.add(debris.rock, debris.hot);
  const blob = makeShadowBlob(); scene.add(blob);

  const loader = new GLTFLoader();
  let done = 0;
  const load = (f, len) => loadCreature(loader, `${base}/models/${f}.json`, len).then(c => { onProgress(++done / 3); return c; });
  const [mam, ser, mos] = await Promise.all([load('mammouth', 4.6), load('serpent', 5.2), load('predateur', 6.4)]);
  [mam, ser, mos].forEach(c => scene.add(c.group));
  const holo = makeHolo(mos.mesh.geometry, mos.u); mos.mesh.add(holo);
  mos.mesh.add(scan.mesh);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(960, 540), .9, .55, .82);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const grade = new ShaderPass(GradeShader);
  composer.addPass(grade);

  const overlay = document.createElement('canvas');
  const oc = overlay.getContext('2d');
  let W = 1920, H = 1080;
  function setSize(w, h) {
    W = w; H = h;
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    bloom.resolution.set(w / 2, h / 2);
    overlay.width = w; overlay.height = h;
    grade.uniforms.uRes.value.set(w, h);
    const px = h / 1080;
    Object.values(P).forEach(p => (p.u.uPx.value = px));
    holo.material.uniforms.uPx.value = px;
  }
  setSize(1920, 1080);

  // compile tout d'avance (évite les saccades)
  [mam, ser, mos].forEach(c => (c.group.visible = true));
  renderer.compile(scene, camera);

  const tmpV = new THREE.Vector3();
  function toScreen(p) {
    tmpV.copy(p).project(camera);
    return [(tmpV.x * .5 + .5) * 1920, (-tmpV.y * .5 + .5) * 1080, tmpV.z < 1];
  }
  function worldOf(cr, local) { cr.group.updateMatrixWorld(true); return cr.group.localToWorld(local.clone()); }

  let viewOff = 0;   // décale l'image (px) pour laisser la place à la carte
  function setCam(pos, target, fov = 32, shakeAmp = 0, t = 0, roll = 0) {
    camera.position.copy(pos);
    camera.fov = fov;
    if (Math.abs(viewOff) > .5) camera.setViewOffset(1920, 1080, viewOff, 0, 1920, 1080);
    else camera.clearViewOffset();
    camera.updateProjectionMatrix();
    viewOff = 0;
    camera.lookAt(target);
    if (shakeAmp > 0) {
      const sx = (Math.sin(t * 37.1) + Math.sin(t * 61.7 + 1.3) * .6 + Math.sin(t * 13.3 + 2) * .4) * shakeAmp;
      const sy = (Math.sin(t * 43.7 + .7) + Math.sin(t * 71.3 + 2.1) * .5 + Math.sin(t * 17.9) * .4) * shakeAmp;
      camera.translateX(sx); camera.translateY(sy);
      roll += Math.sin(t * 29.3) * shakeAmp * .05;
    }
    if (roll) camera.rotateZ(roll);
    camera.updateMatrixWorld(true);
  }

  function resetCreature(c) {
    const u = c.u;
    c.group.visible = false;
    c.group.position.set(0, 0, 0); c.group.rotation.set(0, 0, 0);
    u.uRim.value = .25; u.uBand.value = 0; u.uBandPos.value = -2; u.uReveal.value = 5; u.uEdge.value = 0;
    u.uGroundY.value = -99; u.uGroundGlow.value = 0; u.uSelf.value = 0; u.uVein.value = 0;
    u.uGlowCol.value.setRGB(1, .12, .22); u.uEdgeCol.value.setRGB(1, .55, .15);
  }

  // ----------------------------------------------------------- une image
  function update(t) {
    const G = ground.u, gr = grade.uniforms;
    // valeurs par défaut
    [mam, ser, mos].forEach(resetCreature);
    [mam, ser, mos].forEach(c => (c.u.uTime.value = t));
    G.uTime.value = t; G.uMode.value = 0; G.uCrackR.value = 0; G.uCrackGlow.value = 0; G.uHoleR.value = 0;
    G.uCaustic.value = 0; G.uGrid.value = 0; G.uDune.value = 0; G.uShockI.value = 0; G.uRough.value = 1; G.uRings.value = 0;
    G.uCrackCol.value.setRGB(1, .32, .06); G.uShockCol.value.setRGB(1, .4, .1);
    pit.mesh.visible = false; pit.u.uTime.value = t;
    beam.mesh.visible = beam2.mesh.visible = false; beam.u.uTime.value = beam2.u.uTime.value = t;
    finBeams.forEach(b => { b.mesh.visible = false; b.u.uTime.value = t; });
    scan.mesh.visible = false; scan.u.uTime.value = t;
    godrays.group.visible = false; godrays.u.uTime.value = t;
    holo.visible = false;
    blob.visible = false;
    Object.values(P).forEach(p => { p.pts.visible = false; p.u.uT.value = t; });
    debris.update(t, 0, false);
    glow.intensity = 0; accent.intensity = 0;
    gr.uTime.value = t; gr.uCA.value = .0025; gr.uFlash.value = 0; gr.uLB.value = .1; gr.uFade.value = 0; gr.uZoom.value = 0;
    gr.uSat.value = 1.08; gr.uTint.value.setRGB(1, 1, 1); gr.uFlashCol.value.setRGB(1, .95, .9); gr.uVig.value = .9; gr.uGrain.value = .045;
    bloom.strength = .75; bloom.threshold = .88; bloom.radius = .55;
    scene.environmentIntensity = 1;
    renderer.toneMappingExposure = 1;

    const ov = { t };   // instructions pour l'overlay

    if (t < TL.mam) shotIntro(t, ov);
    else if (t < TL.ser) shotMammoth(t, ov);
    else if (t < TL.mos) shotSerpent(t, ov);
    else if (t < TL.fin) shotMosa(t, ov);
    else shotFinale(t, ov);

    // transitions « whip » entre les créatures
    for (const tc of [TL.mam, TL.ser, TL.mos]) {
      const k = Math.max(inv(tc - .45, tc, t) * (t < tc ? 1 : 0), (1 - inv(tc, tc + .35, t)) * (t >= tc ? 1 : 0));
      gr.uZoom.value = Math.max(gr.uZoom.value, E.in(k) * .55);
      gr.uFlash.value += Math.pow(k, 3) * .9;
      gr.uCA.value += k * .02;
    }
    return ov;
  }

  // -------- 0 → 7.5 : intro + titre
  function shotIntro(t, ov) {
    const G = ground.u, gr = grade.uniforms;
    scene.background.setRGB(.012, .008, .006);
    scene.fog.color.setRGB(.02, .012, .008); scene.fog.density = .045;
    hemi.color.setRGB(.6, .5, .45); hemi.groundColor.setRGB(.1, .06, .04); hemi.intensity = .35;
    key.color.setRGB(1, .75, .55); key.intensity = .5; key.position.set(-8, 6, -4);
    rim.color.setRGB(.5, .6, 1); rim.intensity = .6;
    scene.environmentIntensity = .25;
    const beats = [.9, 1.22, 2.4, 2.72, 3.85, 4.12];
    let hb = 0; beats.forEach(b => (hb += hit(t, b, .04, .22)));
    const tt = inv(TL.title, TL.mam, t);
    G.uCrackR.value = t < TL.title ? 1.2 + t * .25 : lerp(2.3, 6, E.outX(inv(TL.title, TL.title + 1.6, t)));
    G.uCrackGlow.value = t < TL.title ? .6 + hb * 1.8 : .55 + hit(t, TL.title, .02, .6) * 2.5;
    G.uShock.value = (t - TL.title) * 11; G.uShockI.value = t > TL.title ? Math.exp(-(t - TL.title) * 1.6) : 0;
    glow.position.set(0, .6, 0); glow.color.setRGB(1, .4, .1);
    glow.intensity = t < TL.title ? 3 + hb * 15 : 8 + hit(t, TL.title, .02, .5) * 50;
    P.dust.pts.visible = true; P.dust.u.uI.value = .25; P.dust.u.uCol.value.setRGB(1, .8, .6); P.dust.u.uSize.value = .04;
    P.embers.pts.visible = true; P.embers.u.uI.value = t < TL.title ? .4 : 1.2; P.embers.u.uCol.value.setRGB(1, .35, .08);
    P.embers.u.uR.value = 7; P.embers.u.uSpd.value = t < TL.title ? .8 : 1.6; P.embers.u.uSize.value = .06;
    P.sparks.pts.visible = t > TL.title; P.sparks.u.uT0.value = TL.title; P.sparks.u.uI.value = 1.6; P.sparks.u.uCol.value.setRGB(1, .35, .06);
    P.sparks.u.uO.value.set(0, .1, 0); P.sparks.u.uSpd.value = 16; P.sparks.u.uSize.value = .07;

    let pos, tgt, shake = hb * .015;
    if (t < TL.title) {
      const k = E.sine(inv(0, TL.title, t));
      pos = V(v3(0, 1.1, 24), v3(1.2, 2.1, 12.5), k); tgt = v3(0, .3, 0);
    } else {
      const k = E.out(tt);
      pos = V(v3(0, 7, 15), v3(0, 5.6, 11.5), k); tgt = v3(0, .5, 0);
      shake += hit(t, TL.title, .02, .5) * .25;
    }
    setCam(pos, tgt, 32, shake, t);
    gr.uFade.value = 1 - inv(0, 1.2, t);
    gr.uFlash.value = hit(t, TL.title, .02, .35) * 1.6;
    gr.uFlashCol.value.setRGB(1, .7, .45);
    gr.uCA.value += hit(t, TL.title, .02, .4) * .02 + hb * .004;
    gr.uLB.value = .12 - inv(TL.title, TL.title + 1, t) * .02;
    bloom.strength = .9 + hit(t, TL.title, .02, .5) * 1.2;

    ov.intro = t < TL.title;
    ov.titleT = t - TL.title;
    ov.flare = t > TL.title ? [...toScreen(v3(0, .4, 0)), hit(t, TL.title, .02, .9) * 1.6] : null;
    ov.hud = inv(1.5, 2.5, t) * (t < TL.title ? 1 : 1 - inv(TL.title, TL.title + .2, t));
    ov.hudL = 'LE DINOSAURE // ARCHIVES FOSSILES'; ov.hudR = 'SCAN EN COURS';
  }

  // -------- mammouth
  function shotMammoth(t, ov) {
    const G = ground.u, gr = grade.uniforms, u = mam.u;
    const lt = t - TL.mam, tb = TL.mamBurst - TL.mam, ts = TL.mamStamp - TL.mam;
    scene.background.setRGB(.012, .01, .012);
    scene.fog.color.setRGB(.02, .014, .014); scene.fog.density = .035;
    hemi.color.setRGB(.6, .55, .6); hemi.groundColor.setRGB(.12, .06, .04); hemi.intensity = .45;
    key.color.setRGB(1, .82, .65); key.intensity = 1.6; key.position.set(7, 9, 7);
    rim.color.setRGB(.45, .6, 1); rim.intensity = 2.2; rim.position.set(-7, 5, -8);
    scene.environmentIntensity = .6;
    const burst = hit(lt, tb, .02, .45);
    // sol
    G.uCrackR.value = lt < tb ? lerp(6, 8, lt / tb) : 9;
    G.uCrackGlow.value = lt < tb ? .6 + E.in(lt / tb) * 1.6 : .5 + burst * 1.5;
    G.uHoleR.value = lt < tb ? 0 : 3.3 * E.outX(inv(tb, tb + .25, lt));
    G.uShock.value = (lt - tb) * 13; G.uShockI.value = lt > tb ? Math.exp(-(lt - tb) * 1.4) : 0;
    if (lt > ts) { G.uShock.value = (lt - ts) * 15; G.uShockI.value = Math.exp(-(lt - ts) * 1.5); G.uShockCol.value.setRGB(1, .1, .25); }
    pit.mesh.visible = lt > tb; pit.mesh.scale.set(3.9, 7, 3.9); pit.u.uI.value = .45 + burst;
    glow.position.set(0, -.5, 0); glow.color.setRGB(1, .42, .12);
    glow.intensity = lt < tb ? 6 + E.in(lt / tb) * 30 : 12 + burst * 90;
    // squelette
    const rise = E.out(inv(tb + .15, tb + 2.9, lt));
    const bob = Math.sin(t * 1.4) * .08;
    mam.group.visible = lt > tb;
    mam.group.position.set(0, lerp(-mam.height - .6, .55, rise) + bob * rise, 0);
    mam.group.rotation.y = lerp(-.9, .25, E.io(inv(tb, ts + 6, lt)));
    u.uGroundY.value = 0; u.uGroundGlow.value = 1 - inv(tb + 2.4, tb + 3.2, lt);
    u.uRim.value = .3 + inv(tb, ts, lt) * .6 + hit(lt, ts, .03, .5) * 2.5;
    u.uVein.value = inv(ts - .2, ts + .6, lt) * (.9 + .5 * Math.sin(t * 3));
    u.uSelf.value = hit(lt, ts, .03, .4) * .6;
    u.uBand.value = 3; u.uBandW.value = .06;
    u.uBandPos.value = lt < ts + 3.4 ? lerp(1.2, -.2, inv(ts + 1.3, ts + 3.3, lt)) : lerp(1.2, -.2, inv(ts + 4.1, ts + 6.1, lt));
    accent.position.set(2.5, 3.5, 3); accent.intensity = inv(ts - .2, ts + .5, lt) * 12 + hit(lt, ts, .03, .4) * 50;
    // lumière, particules, débris
    beam.mesh.visible = beam2.mesh.visible = lt > tb - .05;
    beam.mesh.scale.set(2.6, 40, 2.6); beam.u.uCol.value.setRGB(1, .55, .22);
    beam.u.uI.value = (lt > tb ? .45 + burst * 2 : 0) * (1 - .6 * inv(ts + 1, ts + 3, lt));
    beam2.mesh.scale.set(4.5 + burst * 2, 40, 4.5 + burst * 2); beam2.u.uCol.value.setRGB(1, .2, .3);
    beam2.u.uI.value = (lt > tb ? .15 + burst * .8 : 0) + hit(lt, ts, .03, .6) * .8;
    debris.update(lt, tb, lt > tb);
    P.sparks.pts.visible = lt > tb; P.sparks.u.uT0.value = tb; P.sparks.u.uT.value = lt; P.sparks.u.uI.value = 1.2;
    P.sparks.u.uO.value.set(0, .2, 0); P.sparks.u.uSpd.value = 20; P.sparks.u.uCol.value.setRGB(1, .38, .08); P.sparks.u.uSize.value = .07;
    P.beam.pts.visible = lt > tb; P.beam.u.uI.value = .8; P.beam.u.uR.value = 2.8; P.beam.u.uCol.value.setRGB(1, .55, .25); P.beam.u.uSize.value = .05;
    P.embers.pts.visible = true; P.embers.u.uI.value = 1; P.embers.u.uR.value = 10; P.embers.u.uSpd.value = 1.4; P.embers.u.uCol.value.setRGB(1, .3, .08); P.embers.u.uSize.value = .06;
    P.dust.pts.visible = true; P.dust.u.uI.value = .3; P.dust.u.uCol.value.setRGB(1, .85, .7);
    // caméra
    let pos, tgt, fov = 32, shake = 0, roll = 0;
    if (lt < tb) {
      const k = lt / tb, a = lerp(.5, -.25, E.io(k));
      pos = v3(Math.sin(a) * 9.5, lerp(1.4, 1.9, k), Math.cos(a) * 9.5); tgt = v3(0, .6, 0);
      shake = E.in(k) * .06; fov = lerp(34, 30, k);
    } else if (lt < ts + .3) {
      const k = E.out(inv(tb, ts + .3, lt));
      pos = V(v3(4.5, 1.2, 8.5), v3(7, 3.6, 10), k); tgt = V(v3(0, .8, 0), v3(0, 2, 0), k);
      shake = burst * .35 + .02; fov = lerp(30, 34, k);
    } else {
      const k = inv(ts + .3, 12.5, lt), a = lerp(.95, -1.45, E.io(k));
      const r = lerp(9.5, 7.2, E.io(k));
      pos = v3(Math.sin(a) * r, lerp(3.4, 1.6, E.io(k)), Math.cos(a) * r); tgt = v3(0, lerp(2, 1.7, k), 0);
      shake = hit(lt, ts, .03, .4) * .2;
      roll = -.04 * Math.sin(k * 3);
    }
    viewOff = -340 * E.io(inv(ts + .7, ts + 1.6, lt)) * (1 - inv(12, 12.5, lt));
    setCam(pos, tgt, fov, shake, t, roll);
    gr.uFlash.value = burst * 1.0 + hit(lt, ts, .02, .3) * .8;
    gr.uFlashCol.value = lt > ts ? new THREE.Color(1, .35, .45) : new THREE.Color(1, .75, .5);
    gr.uCA.value += burst * .025 + hit(lt, ts, .02, .4) * .02;
    gr.uZoom.value = burst * .3 + hit(lt, ts, .02, .25) * .25;
    bloom.strength = .75 + burst * 1 + hit(lt, ts, .02, .5) * .6;
    // overlay
    const sp = SPECIES.mam;
    ov.hud = 1; ov.hudL = sp.site; ov.hudR = 'PROFONDEUR ' + sp.depth;
    ov.reticle = lt < tb ? { p: toScreen(v3(0, .2, 0)), a: inv(.2, .6, lt) * (1 - inv(tb - .15, tb, lt)), label: 'SIGNAL FOSSILE DÉTECTÉ', sub: 'INTENSITÉ ' + Math.round(lerp(32, 100, lt / tb)) + ' %', prog: lt / tb } : null;
    ov.flare = lt > tb ? [...toScreen(v3(0, .2, 0)), burst * 2 + .25 * (1 - inv(ts, ts + 2, lt))] : null;
    ov.stamp = TL.mamStamp;
    ov.card = { t0: TL.mamStamp + .9, sp, found: lerp(0, 12, inv(ts + 1.6, ts + 5.2, lt)), out: inv(12.0, 12.4, lt) };
  }

  // -------- titanoboa
  function shotSerpent(t, ov) {
    const G = ground.u, gr = grade.uniforms, u = ser.u;
    const lt = t - TL.ser, td = TL.serDone - TL.ser;
    scene.background.setRGB(.03, .018, .05);
    scene.fog.color.setRGB(.07, .04, .09); scene.fog.density = .028;
    hemi.color.setRGB(.55, .5, .9); hemi.groundColor.setRGB(.3, .15, .08); hemi.intensity = .4;
    key.color.setRGB(.6, .7, 1); key.intensity = .9; key.position.set(-8, 10, 4);
    rim.color.setRGB(1, .55, .25); rim.intensity = 3; rim.position.set(6, 3, -9);
    scene.environmentIntensity = .7;
    G.uMode.value = 1; G.uDune.value = .7;
    G.uShock.value = (lt - td) * 12; G.uShockI.value = lt > td ? Math.exp(-(lt - td) * 1.3) : 0; G.uShockCol.value.setRGB(1, .6, .2);
    const done = hit(lt, td, .02, .45);
    // squelette : matérialisation tête → queue
    ser.group.visible = lt > .9;
    ser.group.rotation.y = .35;
    u.uRevealDir.value = 1;
    u.uReveal.value = lerp(-.22, 1.22, E.io(inv(1.0, td, lt)));
    u.uEdge.value = 1 - inv(td, td + .4, lt); u.uEdgeCol.value.setRGB(1, .7, .25);
    u.uRim.value = .3 + inv(td - .5, td + .5, lt) * .6 + done * 2.5;
    u.uVein.value = inv(td, td + 1, lt) * (.9 + .5 * Math.sin(t * 3.3));
    u.uSelf.value = done * .5;
    u.uBand.value = 3; u.uBandPos.value = lerp(1.25, -.25, inv(td + 1.5, td + 3.7, lt));
    if (lt > td + 5) u.uBandPos.value = lerp(1.25, -.25, inv(td + 5, td + 7, lt));
    blob.visible = true; blob.position.set(0, .03, 0); blob.scale.set(6.5, 6.5, 1); blob.material.opacity = inv(1.5, 3, lt) * .8;
    accent.position.set(-2, 3, 3); accent.color.setRGB(1, .25, .35); accent.intensity = inv(td - .4, td + .4, lt) * 14 + done * 60;
    glow.position.set(0, 1.5, 0); glow.color.setRGB(1, .6, .25); glow.intensity = inv(1, 2, lt) * 10 * (1 - inv(td, td + 1, lt)) + done * 25;
    // tourbillon de sable
    P.sand.pts.visible = true; P.sand.u.uI.value = 1.3 * inv(0, 1, lt); P.sand.u.uPh.value = inv(1, td, lt); P.sand.u.uB.value = TL.serDone;
    P.sand.u.uCol.value.setRGB(1, .6, .3); P.sand.u.uSize.value = .1;
    P.dust.pts.visible = true; P.dust.u.uI.value = .35; P.dust.u.uCol.value.setRGB(1, .8, .6); P.dust.u.uWind.value.set(2.2, .1, .4);
    P.sparks.pts.visible = lt > td; P.sparks.u.uT0.value = TL.serDone; P.sparks.u.uI.value = 1.4; P.sparks.u.uO.value.set(0, 1, 0);
    P.sparks.u.uSpd.value = 13; P.sparks.u.uCol.value.setRGB(1, .55, .15); P.sparks.u.uSize.value = .06;
    P.embers.pts.visible = lt > td - 1; P.embers.u.uI.value = .8 * inv(td - 1, td, lt); P.embers.u.uR.value = 5; P.embers.u.uSpd.value = 1.2; P.embers.u.uCol.value.setRGB(1, .45, .15);
    beam.mesh.visible = lt > td - .1; beam.mesh.scale.set(3.2, 40, 3.2); beam.u.uCol.value.setRGB(1, .3, .35);
    beam.u.uI.value = done * 1.6 + .12 * inv(td, td + 1, lt);
    // caméra
    let pos, tgt, fov = 32, shake = 0, roll = 0;
    const head = worldOf(ser, ser.head);
    if (lt < 1.3) {
      const k = E.out(lt / 1.3);
      pos = V(v3(-16, 1.1, 9), v3(-7, 1.6, 7.5), k); tgt = V(v3(-2, .8, 0), v3(0, .9, 0), k); roll = lerp(.12, 0, k);
    } else if (lt < td + .4) {
      const k = E.io(inv(1.3, td + .4, lt));
      pos = V(v3(-7, 1.6, 7.5), v3(-2.6, 10.5, 4.2), k); tgt = V(v3(0, .9, 0), v3(0, .6, .3), k); fov = lerp(32, 36, k);
      shake = .02 + inv(1.3, td, lt) * .03;
    } else {
      const k = E.io(inv(td + .4, 12.5, lt));
      const a = lerp(-.5, .55, k);
      const r = lerp(5.5, 4.4, k);
      pos = v3(head.x + Math.sin(a) * r, lerp(.5, 1.1, k), head.z + Math.cos(a) * r);
      tgt = V(head.clone().add(v3(0, -.3, 0)), head.clone().add(v3(0, -.6, -1.4)), k);
      fov = lerp(34, 28, k);
      shake = done * .25;
    }
    viewOff = -340 * E.io(inv(td + .7, td + 1.6, lt)) * (1 - inv(12, 12.5, lt));
    setCam(pos, tgt, fov, shake, t, roll);
    gr.uFlash.value = done * 1; gr.uFlashCol.value.setRGB(1, .55, .3);
    gr.uCA.value += done * .025; gr.uZoom.value = Math.max(gr.uZoom.value, done * .3);
    gr.uTint.value.setRGB(1.04, .98, 1.02);
    bloom.strength = .75 + done;
    const sp = SPECIES.ser;
    ov.hud = 1; ov.hudL = sp.site; ov.hudR = 'PROFONDEUR ' + sp.depth;
    ov.reticle = lt < td ? { p: toScreen(v3(0, .5, 0)), a: inv(.6, 1, lt) * (1 - inv(td - .2, td, lt)), label: 'MATÉRIALISATION', sub: 'RECONSTRUCTION ' + Math.round(clamp(inv(1.4, td, lt)) * 100) + ' %', prog: inv(1.4, td, lt) } : null;
    ov.flare = lt > td ? [...toScreen(v3(0, 1, 0)), done * 2] : null;
    ov.stamp = TL.serDone;
    ov.card = { t0: TL.serDone + .9, sp, found: lerp(0, 12, inv(td + 1.6, td + 5.2, lt)), out: inv(12.0, 12.4, lt) };
  }

  // -------- mosasaure (sous l'eau)
  function shotMosa(t, ov) {
    const G = ground.u, gr = grade.uniforms, u = mos.u;
    const lt = t - TL.mos, td = TL.mosDone - TL.mos;
    scene.background.setRGB(.004, .045, .06);
    scene.fog.color.setRGB(.01, .075, .095); scene.fog.density = .06;
    hemi.color.setRGB(.5, .9, 1); hemi.groundColor.setRGB(.05, .15, .15); hemi.intensity = .5;
    key.color.setRGB(.6, .95, 1); key.intensity = 1.5; key.position.set(2, 14, 3);
    rim.color.setRGB(.3, .7, 1); rim.intensity = 2; rim.position.set(-6, 4, -8);
    scene.environmentIntensity = .6;
    G.uMode.value = 2; G.uCaustic.value = .55;
    G.uShock.value = ((lt + 10) % 1.6) * 9; G.uShockI.value = (lt < td ? .7 : 0) * (1 - ((lt + 10) % 1.6) / 1.6); G.uShockCol.value.setRGB(.2, .9, 1);
    if (lt > td) { G.uShock.value = (lt - td) * 12; G.uShockI.value = Math.exp(-(lt - td) * 1.3); G.uShockCol.value.setRGB(1, .15, .3); }
    const done = hit(lt, td, .02, .45);
    // squelette qui nage
    mos.group.visible = true;
    const swim = Math.sin(t * 1.1);
    mos.group.position.set(0, 1.25 + Math.sin(t * .9) * .12, 0);
    mos.group.rotation.set(Math.sin(t * .7) * .03, .15 + swim * .06, swim * .04);
    u.uRevealDir.value = 1;
    u.uReveal.value = lerp(-.22, 1.22, E.io(inv(1.5, td, lt)));
    u.uEdge.value = (1 - inv(td, td + .4, lt)) * .8; u.uEdgeCol.value.setRGB(.25, .9, 1);
    u.uGlowCol.value.setRGB(1, .12, .25);
    u.uRim.value = .3 + inv(td - .5, td + .5, lt) * .6 + done * 2.5;
    u.uVein.value = inv(td, td + 1, lt) * (.8 + .5 * Math.sin(t * 2.8));
    u.uSelf.value = done * .5;
    u.uBand.value = 3; u.uBandPos.value = lerp(1.25, -.25, inv(td + 1.4, td + 3.6, lt));
    if (lt > td + 4.6) u.uBandPos.value = lerp(1.25, -.25, inv(td + 4.6, td + 6.6, lt));
    holo.visible = lt < td + .3; holo.material.uniforms.uI.value = inv(0, .8, lt) * (1 - inv(td, td + .3, lt)) * .75;
    // plan de scan
    const zr = mos.u.uZ.value;
    const sr = clamp(u.uReveal.value - .05, 0, 1);
    scan.mesh.visible = lt > 1.4 && lt < td + .2;
    scan.mesh.position.set((mos.bb.min.x + mos.bb.max.x) / 2, (mos.bb.min.y + mos.bb.max.y) / 2, lerp(zr.y, zr.x, sr));
    scan.mesh.scale.set((mos.bb.max.x - mos.bb.min.x) * 1.3, (mos.bb.max.y - mos.bb.min.y) * 1.8, 1);
    scan.u.uI.value = inv(1.4, 1.8, lt) * (1 - inv(td - .2, td + .2, lt)) * 1.4;
    accent.position.set(0, 3, 4); accent.color.setRGB(1, .2, .35); accent.intensity = inv(td - .4, td + .4, lt) * 12 + done * 60;
    glow.position.set(0, 1.4, 0); glow.color.setRGB(.3, .9, 1); glow.intensity = 5 + done * 30;
    godrays.group.visible = true; godrays.u.uI.value = 1;
    godrays.group.children.forEach(m => { m.rotation.set(0, Math.atan2(camera.position.x - m.position.x, camera.position.z - m.position.z), m.userData.tilt); });
    P.bubbles.pts.visible = true; P.bubbles.u.uI.value = .55; P.bubbles.u.uSize.value = .05;
    P.snow.pts.visible = true; P.snow.u.uI.value = .35; P.snow.u.uSize.value = .035;
    P.burst.pts.visible = lt > td; P.burst.u.uT0.value = TL.mosDone; P.burst.u.uI.value = 1; P.burst.u.uO.value.set(0, 1.3, 0); P.burst.u.uL.value = 6; P.burst.u.uSize.value = .05;
    P.sparks.pts.visible = lt > td; P.sparks.u.uT0.value = TL.mosDone; P.sparks.u.uI.value = 1.1; P.sparks.u.uO.value.set(0, 1.3, 0);
    P.sparks.u.uSpd.value = 9; P.sparks.u.uUp.value = .2; P.sparks.u.uCol.value.setRGB(.3, .85, 1); P.sparks.u.uSize.value = .05;
    // caméra
    let pos, tgt, fov = 32, shake = 0, roll = 0;
    const head = worldOf(mos, mos.head);
    if (lt < 1.5) {
      const k = E.out(lt / 1.5);
      pos = V(v3(3, 13, 15), v3(6, 3.6, 12), k); tgt = V(v3(0, 1.2, 0), v3(0, 2, .5), k); fov = lerp(40, 34, k);
    } else if (lt < td + .4) {
      const k = E.io(inv(1.5, td + .4, lt));
      const zz = lerp(4.5, -3.5, k);
      pos = v3(lerp(9.5, 8.2, k), lerp(3, 2.5, k), zz + 2.2); tgt = v3(0, 2, zz - .3);
      fov = 32; roll = .03;
    } else {
      const k = E.io(inv(td + .4, 12.5, lt));
      const a = lerp(-.9, .75, k);
      const r = lerp(7.5, 5.6, k);
      pos = v3(head.x + Math.sin(a) * r, lerp(2.2, .9, k), head.z + Math.cos(a) * r);
      tgt = V(head.clone().add(v3(0, 0, -1.6)), head.clone().add(v3(0, .1, -.8)), k);
      fov = lerp(34, 30, k); shake = done * .2;
      roll = Math.sin(t * .6) * .02;
    }
    viewOff = -340 * E.io(inv(td + .7, td + 1.6, lt)) * (1 - inv(11.9, 12.4, lt));
    setCam(pos, tgt, fov, shake + .006, t, roll);
    gr.uFlash.value = done * 1; gr.uFlashCol.value.setRGB(.6, .9, 1);
    gr.uCA.value += .002 + done * .02; gr.uZoom.value = Math.max(gr.uZoom.value, done * .3);
    gr.uTint.value.setRGB(.92, 1.03, 1.06);
    bloom.strength = .75 + done;
    const sp = SPECIES.mos;
    ov.hud = 1; ov.hudL = sp.site; ov.hudR = 'PROFONDEUR ' + sp.depth;
    ov.reticle = lt < td ? { p: toScreen(v3(0, 1.3, 0)), a: inv(.5, .9, lt) * (1 - inv(td - .2, td, lt)), label: 'SONAR : FOSSILE GÉANT', sub: 'SCAN ' + Math.round(clamp(inv(1.5, td, lt)) * 100) + ' %', prog: inv(1.5, td, lt), cyan: true } : null;
    ov.flare = lt > td ? [...toScreen(v3(0, 1.3, 0)), done * 2, '140,230,255'] : null;
    ov.stamp = TL.mosDone;
    ov.card = { t0: TL.mosDone + .9, sp, found: lerp(0, 12, inv(td + 1.6, td + 5.2, lt)), out: inv(11.9, 12.3, lt) };
    ov.whiteOut = inv(11.6, 12.5, lt);
  }

  // -------- finale
  function shotFinale(t, ov) {
    const G = ground.u, gr = grade.uniforms;
    const lt = t - TL.fin, tt = TL.finTitle - TL.fin;
    scene.background.setRGB(.012, .006, .01);
    scene.fog.color.setRGB(.03, .01, .016); scene.fog.density = .03;
    hemi.color.setRGB(.7, .6, .7); hemi.groundColor.setRGB(.1, .03, .04); hemi.intensity = .5;
    key.color.setRGB(1, .85, .7); key.intensity = 1.8; key.position.set(4, 10, 9);
    rim.color.setRGB(1, .3, .4); rim.intensity = 3; rim.position.set(0, 6, -10);
    scene.environmentIntensity = .7;
    G.uMode.value = 3; G.uGrid.value = 1.2; G.uRough.value = .28; G.uRings.value = 1;
    const pops = [1.0, 1.55, 2.1];
    const titleHit = hit(lt, tt, .02, .5);
    G.uShock.value = (lt - tt) * 14; G.uShockI.value = lt > tt ? Math.exp(-(lt - tt) * 1.2) : 0; G.uShockCol.value.setRGB(1, .2, .3);
    const place = [[mos, -7, 1.3, .75], [mam, 0, .45, .35], [ser, 6.8, 0, -.55]];
    place.forEach(([c, x, y, ry], i) => {
      const p = hit(lt, pops[i], .03, .6);
      c.group.visible = true;
      c.group.position.set(x, y + (c === ser ? 0 : Math.sin(t * 1.2 + i) * .07), 0);
      c.group.rotation.y = ry + Math.sin(t * .3 + i) * .05;
      c.u.uRim.value = .35 + inv(pops[i], pops[i] + .3, lt) * .5 + p * 2 + titleHit;
      c.u.uVein.value = inv(pops[i], pops[i] + .5, lt) * (.8 + .4 * Math.sin(t * 3 + i));
      c.u.uSelf.value = p * .4;
      c.u.uBand.value = 2.5; c.u.uBandPos.value = lerp(1.25, -.25, inv(tt + .2, tt + 1.8, lt));
      const b = finBeams[i];
      b.mesh.visible = true; b.mesh.position.set(x, 0, 0); b.mesh.scale.set(2.3, 40, 2.3);
      b.u.uCol.value.setRGB(1, .25, .35); b.u.uI.value = inv(pops[i] - .05, pops[i], lt) * (.3 + p * 1.4) + titleHit * .4;
    });
    accent.position.set(0, 4, 5); accent.color.setRGB(1, .3, .4); accent.intensity = 12 + titleHit * 50;
    glow.position.set(0, 1, 2); glow.color.setRGB(1, .55, .25); glow.intensity = 6;
    P.embers.pts.visible = true; P.embers.u.uI.value = 1.1; P.embers.u.uR.value = 14; P.embers.u.uSpd.value = 1.2; P.embers.u.uCol.value.setRGB(1, .3, .15); P.embers.u.uSize.value = .06;
    P.dust.pts.visible = true; P.dust.u.uI.value = .25; P.dust.u.uCol.value.setRGB(1, .8, .75); P.dust.u.uWind.value.set(.1, .05, 0);
    P.sparks.pts.visible = lt > tt; P.sparks.u.uT0.value = TL.finTitle; P.sparks.u.uI.value = 1.4; P.sparks.u.uO.value.set(0, .2, 0); P.sparks.u.uSpd.value = 18; P.sparks.u.uUp.value = .7; P.sparks.u.uCol.value.setRGB(1, .3, .2);
    const k = E.io(inv(0, 8, lt));
    const pos = V(v3(1.5, 1.6, 7.5), v3(0, 4.4, 22), k), tgt = V(v3(0, 1.8, 0), v3(0, 3.3, 0), k);
    let shake = 0; pops.forEach(p => (shake += hit(lt, p, .03, .3) * .06)); shake += titleHit * .25;
    setCam(pos, tgt, lerp(34, 38, k), shake, t);
    gr.uFlash.value = (1 - inv(0, .6, lt)) * 1 + titleHit * .9; gr.uFlashCol.value.setRGB(1, .55, .55);
    gr.uCA.value += titleHit * .02; gr.uZoom.value = titleHit * .25;
    gr.uFade.value = inv(7.1, 8, lt);
    bloom.strength = .75 + titleHit * .8;
    ov.hud = 1 - inv(tt - .3, tt, lt); ov.hudL = 'COLLECTION MYTHIQUE'; ov.hudR = '3 / 3 DÉTERRÉS';
    ov.finale = lt;
    ov.flare = lt > tt ? [...toScreen(v3(0, 2, 0)), titleHit * 2] : null;
  }

  // ----------------------------------------------------------- overlay
  function drawOverlay(ov) {
    const c = oc, t = ov.t;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.clearRect(0, 0, W, H);
    c.setTransform(W / 1920, 0, 0, H / 1080, 0, 0);
    if (ov.whiteOut) { c.save(); c.globalAlpha = E.in(ov.whiteOut); c.fillStyle = '#e8fbff'; c.fillRect(0, 0, 1920, 1080); c.restore(); }
    if (ov.flare && ov.flare[2] && ov.flare[3] > 0) flare(c, ov.flare[0], ov.flare[1], ov.flare[3], ov.flare[4]);
    if (ov.hud) { brackets(c, ov.hud * .8); hudTop(c, t, ov.hud, ov.hudL, ov.hudR); }
    if (ov.reticle && ov.reticle.a > 0) {
      const r = ov.reticle;
      reticle(c, r.p[0], r.p[1], t, r.a, r.label, r.sub, clamp(r.prog));
    }
    // intro
    if (ov.intro) {
      const l1 = win(t, .6, 2.5, .6, .5), l2 = win(t, 2.4, 4.45, .5, .3);
      txt(c, 'IL Y A DES MILLIONS D\'ANNÉES…', 960, 540, { size: 46, weight: 700, ls: lerp(6, 14, inv(.6, 2.5, t)), color: IVORY, alpha: l1, blur: (1 - inv(.6, 1.2, t)) * 8, glow: 20, glowColor: 'rgba(255,120,60,.5)' });
      txt(c, 'DES GÉANTS ONT DISPARU SOUS TERRE.', 960, 540, { size: 46, weight: 700, ls: lerp(6, 12, inv(2.4, 4.4, t)), color: IVORY, alpha: l2, blur: (1 - inv(2.4, 2.9, t)) * 8, glow: 20, glowColor: 'rgba(255,120,60,.5)' });
    }
    // titre
    if (ov.titleT !== undefined && ov.titleT >= 0) {
      const lt = ov.titleT;
      const a = inv(0, .05, lt) * (1 - inv(2.6, 3, lt));
      const sc = lt < .45 ? lerp(1.9, 1, E.outX(lt / .45)) : 1 + (lt - .45) * .03 + inv(2.6, 3, lt) * .4;
      glowDisc(c, 960, 520, 900, '0,0,0', 0); c.save(); c.globalAlpha = a * .75; { const g = c.createRadialGradient(960, 540, 0, 960, 540, 820); g.addColorStop(0, 'rgba(0,0,0,.7)'); g.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = g; c.fillRect(0, 0, 1920, 1080); } c.restore();
      rays(c, 960, 500, 1000, 22, lt * .2, '255,140,60', .13 * a);
      txt(c, 'LE DINOSAURE', 960, 500, { size: 170, weight: 900, scale: sc, ls: 10, grad: ['#fff8e6', '#f6d38a', '#d9932f', '#7a4410'], glow: 30, glow2: 80, glowColor: 'rgba(255,130,40,.8)', alpha: a, blur: lt < .2 ? (1 - lt / .2) * 14 : 0, stroke: 'rgba(255,240,200,.45)', lw: 1.5 });
      const sa = a * inv(.6, 1, lt);
      c.save(); c.globalAlpha = sa; c.fillStyle = GOLD;
      const lw = 260 * E.out(inv(.6, 1.2, lt));
      c.fillRect(960 - 330 - lw, 618, lw, 2); c.fillRect(960 + 330, 618, lw, 2); c.restore();
      txt(c, 'ÉDITION MYTHIQUE', 960, 620, { family: 'Rajdhani', weight: 700, size: 40, ls: lerp(10, 20, inv(.6, 3, lt)), color: '#ffd1da', glow: 18, glowColor: RED, alpha: sa });
    }
    // estampille + carte
    if (ov.stamp) stamp(c, t, ov.stamp);
    if (ov.card) card(c, t, ov.card.t0, ov.card.sp, ov.card.found, ov.card.out);
    // finale
    if (ov.finale !== undefined) {
      const lt = ov.finale;
      const tt = TL.finTitle - TL.fin;
      const fo = 1 - inv(7.1, 7.9, lt);
      const names = [['MOSASAURE', -7, 3.4], ['MAMMOUTH', 0, 3.4], ['TITANOBOA', 6.8, 2.8]];
      names.forEach(([n, x, y], i) => {
        const p = toScreen(v3(x, y, 0));
        const a = win(lt, [1, 1.55, 2.1][i], tt - .1, .25, .3);
        txt(c, n, p[0], p[1] - 30, { size: 38, weight: 900, ls: 8, color: IVORY, alpha: a, glow: 18, glowColor: RED });
        txt(c, '◆ MYTHIQUE', p[0], p[1] + 10, { family: 'Rajdhani', weight: 700, size: 20, ls: 6, color: '#ff8aa2', alpha: a });
      });
      if (lt > tt) {
        const k = lt - tt;
        const sc = k < .4 ? lerp(1.8, 1, E.outX(k / .4)) : 1 + (k - .4) * .02;
        c.save(); c.globalAlpha = fo * inv(0, .3, k); { const g = c.createLinearGradient(0, 108, 0, 520); g.addColorStop(0, 'rgba(0,0,0,.75)'); g.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = g; c.fillRect(0, 108, 1920, 412); } c.restore();
        rays(c, 960, 260, 1100, 26, k * .25, '255,70,90', .14 * fo);
        txt(c, 'LE DINOSAURE', 960, 260, { size: 168, weight: 900, scale: sc, ls: 10, grad: ['#fff8e6', '#f6d38a', '#d9932f', '#7a4410'], glow: 30, glow2: 80, glowColor: 'rgba(255,90,60,.8)', alpha: inv(0, .05, k) * fo, blur: k < .2 ? (1 - k / .2) * 14 : 0, stroke: 'rgba(255,240,200,.45)', lw: 1.5 });
        txt(c, '3 ESPÈCES MYTHIQUES  ·  12 OS CHACUNE', 960, 385, { family: 'Rajdhani', weight: 700, size: 34, ls: 10, color: IVORY, alpha: inv(.6, 1, k) * fo });
        c.save(); c.globalAlpha = fo * inv(1.2, 1.6, k); { const g = c.createLinearGradient(0, 760, 0, 972); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.8)'); c.fillStyle = g; c.fillRect(0, 760, 1920, 212); } c.restore();
        txt(c, 'DÉTERRE-LES TOUS.', 960, 905, { size: 64, weight: 900, ls: 8, grad: ['#ffe9ee', '#ff5a7a', '#c4002f'], glow: 26, glowColor: RED, alpha: inv(1.3, 1.6, k) * fo, scale: lerp(1.25, 1, E.out(inv(1.3, 1.7, k))) });
        txt(c, 'SUR ROBLOX', 960, 1030, { family: 'Rajdhani', weight: 700, size: 30, ls: 18, color: GOLD, alpha: inv(2, 2.4, k) * fo, glow: 12 });
      }
    }
  }

  let lastOv = null;
  function render(t) {
    lastOv = update(t);
    composer.render();
    drawOverlay(lastOv);
  }

  // image composite (3D + textes) pour l'export vidéo
  const cap = document.createElement('canvas');
  function capture(t, q = .93) {
    render(t);
    cap.width = W; cap.height = H;
    const x = cap.getContext('2d');
    x.drawImage(renderer.domElement, 0, 0);
    x.drawImage(overlay, 0, 0);
    return cap.toDataURL('image/jpeg', q);
  }

  return { render, capture, setSize, overlay, renderer, duration: DURATION };
}
