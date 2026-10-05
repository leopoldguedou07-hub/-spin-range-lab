var Mh=0,bc=1,Sh=2;var Bu=1,bh=2,Cn=3,xn=0,bt=1,Ft=2,vn=0,qi=1,yn=2,Tc=3,Ac=4,Th=5,gi=100,Ah=101,Eh=102,wh=103,Rh=104,Ch=200,Ih=201,Ph=202,Lh=203,sa=204,ra=205,Dh=206,Uh=207,Nh=208,Oh=209,Fh=210,Bh=211,zh=212,kh=213,Hh=214,oa=0,aa=1,la=2,$i=3,ca=4,ua=5,ha=6,fa=7,zu=0,Vh=1,Gh=2,Jn=0,_l=1,vl=2,xl=3,Vs=4,Wh=5,yl=6,Ml=7,Ec="attached",Xh="detached",ku=300,Ji=301,ji=302,da=303,pa=304,oo=306,xi=1e3,Pn=1001,Is=1002,Lt=1003,Sl=1004;var Wi=1005;var Ht=1006,Es=1007;var _n=1008;var Dn=1009,Hu=1010,Vu=1011,Ps=1012,bl=1013,yi=1014,dn=1015,mn=1016,Tl=1017,Al=1018,Qi=1020,Gu=35902,Wu=1021,Xu=1022,nn=1023,qu=1024,Yu=1025,Yi=1026,es=1027,El=1028,wl=1029,Zu=1030,Rl=1031;var Cl=1033,br=33776,Tr=33777,Ar=33778,Er=33779,ma=35840,ga=35841,_a=35842,va=35843,xa=36196,ya=37492,Ma=37496,Sa=37808,ba=37809,Ta=37810,Aa=37811,Ea=37812,wa=37813,Ra=37814,Ca=37815,Ia=37816,Pa=37817,La=37818,Da=37819,Ua=37820,Na=37821,wr=36492,Oa=36494,Fa=36495,Ku=36283,Ba=36284,za=36285,ka=36286;var ts=2300,ns=2301,Ao=2302,wc=2400,Rc=2401,Cc=2402,qh=2500;var $u=0,ao=1,Gs=2,Yh=3200,Zh=3201;var Ju=0,Kh=1,Kn="",It="srgb",Et="srgb-linear",Il="display-p3",lo="display-p3-linear",Cr="linear",ot="srgb",Ir="rec709",Pr="p3";var Ci=7680;var Ic=519,$h=512,Jh=513,jh=514,ju=515,Qh=516,ef=517,tf=518,nf=519,Ha=35044;var Pc="300 es",Ln=2e3,Lr=2001,jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=1234567,ws=Math.PI/180,is=180/Math.PI;function pn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Pl(i,e){return(i%e+e)%e}function sf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rf(i,e,t){return i!==e?(t-i)/(e-i):0}function Rs(i,e,t){return(1-t)*i+t*e}function of(i,e,t,n){return Rs(i,e,1-Math.exp(-t*n))}function af(i,e=1){return e-Math.abs(Pl(i,e*2)-e)}function lf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function uf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hf(i,e){return i+Math.random()*(e-i)}function ff(i){return i*(.5-Math.random())}function df(i){i!==void 0&&(Lc=i);let e=Lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pf(i){return i*ws}function mf(i){return i*is}function gf(i){return(i&i-1)===0&&i!==0}function _f(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xf(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qu={DEG2RAD:ws,RAD2DEG:is,generateUUID:pn,clamp:Pt,euclideanModulo:Pl,mapLinear:sf,inverseLerp:rf,lerp:Rs,damp:of,pingpong:af,smoothstep:lf,smootherstep:cf,randInt:uf,randFloat:hf,randFloatSpread:ff,seededRandom:df,degToRad:pf,radToDeg:mf,isPowerOfTwo:gf,ceilPowerOfTwo:_f,floorPowerOfTwo:vf,setQuaternionFromProperEuler:xf,normalize:rt,denormalize:fn},Ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],M=s[0],d=s[3],m=s[6],b=s[1],v=s[4],A=s[7],N=s[2],R=s[5],w=s[8];return r[0]=o*M+a*b+l*N,r[3]=o*d+a*v+l*R,r[6]=o*m+a*A+l*w,r[1]=c*M+u*b+h*N,r[4]=c*d+u*v+h*R,r[7]=c*m+u*A+h*w,r[2]=f*M+p*b+_*N,r[5]=f*d+p*v+_*R,r[8]=f*m+p*A+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,_=t*h+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=h*M,e[1]=(s*c-u*n)*M,e[2]=(a*n-s*o)*M,e[3]=f*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Eo.makeScale(e,t)),this}rotate(e){return this.premultiply(Eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Eo=new ke;function eh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yf(){let i=Ls("canvas");return i.style.display="block",i}var Dc={};function Rr(i){i in Dc||(Dc[i]=!0,console.warn(i))}function Mf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Sf(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bf(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Uc=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nc=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[Et]:{transfer:Cr,primaries:Ir,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[It]:{transfer:ot,primaries:Ir,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[lo]:{transfer:Cr,primaries:Pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Nc),fromReference:i=>i.applyMatrix3(Uc)},[Il]:{transfer:ot,primaries:Pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Nc),fromReference:i=>i.applyMatrix3(Uc).convertLinearToSRGB()}},Tf=new Set([Et,lo]),Ze={enabled:!0,_workingColorSpace:Et,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Tf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=gs[e].toReference,s=gs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return gs[i].primaries},getTransfer:function(i){return i===Kn?Cr:gs[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(gs[e].luminanceCoefficients)}};function Zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ii,Va=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=Ls("canvas")),Ii.width=e.width,Ii.height=e.height;let n=Ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ls("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Af=0,Dr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ro(s[o].image)):r.push(Ro(s[o]))}else r=Ro(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Va.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ef=0,Tt=class i extends jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Pn,s=Pn,r=Ht,o=_n,a=nn,l=Dn,c=i.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=pn(),this.name="",this.source=new Dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xi:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xi:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=ku;Tt.DEFAULT_ANISOTROPY=1;var Qe=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],M=l[2],d=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(_+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,A=(p+1)/2,N=(m+1)/2,R=(u+f)/4,w=(h+M)/4,U=(_+d)/4;return v>A&&v>N?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=w/n):A>N?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=R/s,r=U/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=w/r,s=U/r),this.set(n,s,r,t),this}let b=Math.sqrt((d-_)*(d-_)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(d-_)/b,this.y=(h-M)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ga=class extends jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Tt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Dr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bt=class extends Ga{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ur=class extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],p=r[o+1],_=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=M;return}if(h!==M||l!==f||c!==p||u!==_){let d=1-a,m=l*f+c*p+u*_+h*M,b=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let N=Math.sqrt(v),R=Math.atan2(N,m*b);d=Math.sin(d*R)/N,a=Math.sin(a*R)/N}let A=a*b;if(l=l*d+f*A,c=c*d+p*A,u=u*d+_*A,h=h*d+M*A,d===1-a){let N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*p-c*f,e[t+1]=l*_+u*f+c*h-a*p,e[t+2]=c*_+u*p+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Co.copy(this).projectOnVector(e),this.sub(Co)}reflect(e){return this.sub(Co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Co=new L,Oc=new Zt,sn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),Js.subVectors(this.max,_s),Pi.subVectors(e.a,_s),Li.subVectors(e.b,_s),Di.subVectors(e.c,_s),Gn.subVectors(Li,Pi),Wn.subVectors(Di,Li),ci.subVectors(Pi,Di);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-ci.z,ci.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,ci.z,0,-ci.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-ci.y,ci.x,0];return!Io(t,Pi,Li,Di,Js)||(t=[1,0,0,0,1,0,0,0,1],!Io(t,Pi,Li,Di,Js))?!1:(js.crossVectors(Gn,Wn),t=[js.x,js.y,js.z],Io(t,Pi,Li,Di,Js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},bn=[new L,new L,new L,new L,new L,new L,new L,new L],cn=new L,$s=new sn,Pi=new L,Li=new L,Di=new L,Gn=new L,Wn=new L,ci=new L,_s=new L,Js=new L,js=new L,ui=new L;function Io(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ui.fromArray(i,r);let a=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var wf=new sn,vs=new L,Po=new L,Kt=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vs.subVectors(e,this.center);let t=vs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vs.copy(e.center).add(Po)),this.expandByPoint(vs.copy(e.center).sub(Po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Tn=new L,Lo=new L,Qs=new L,Xn=new L,Do=new L,er=new L,Uo=new L,ss=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Lo.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(Lo);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Qs),a=Xn.dot(this.direction),l=-Xn.dot(Qs),c=Xn.lengthSq(),u=Math.abs(1-o*o),h,f,p,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){let M=1/u;h*=M,f*=M,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Lo).addScaledVector(Qs,f),p}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);let n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,s,r){Do.subVectors(t,e),er.subVectors(n,e),Uo.crossVectors(Do,er);let o=this.direction.dot(Uo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);let l=a*this.direction.dot(er.crossVectors(Xn,er));if(l<0)return null;let c=a*this.direction.dot(Do.cross(Xn));if(c<0||l+c>o)return null;let u=-a*Xn.dot(Uo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,f,p,_,M,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,p,_,M,d)}set(e,t,n,s,r,o,a,l,c,u,h,f,p,_,M,d){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=p,m[7]=_,m[11]=M,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ui.setFromMatrixColumn(e,0).length(),r=1/Ui.setFromMatrixColumn(e,1).length(),o=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,p=o*h,_=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,_=c*u,M=c*h;t[0]=f+M*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,_=c*u,M=c*h;t[0]=f-M*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,p=o*h,_=a*u,M=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+M,t[1]=l*h,t[5]=M*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=M-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=f-M*h}else if(e.order==="XZY"){let f=o*l,p=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+M,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=M*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rf,e,Cf)}lookAt(e,t,n){let s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),qn.crossVectors(n,qt),qn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),qn.crossVectors(n,qt)),qn.normalize(),tr.crossVectors(qt,qn),s[0]=qn.x,s[4]=tr.x,s[8]=qt.x,s[1]=qn.y,s[5]=tr.y,s[9]=qt.y,s[2]=qn.z,s[6]=tr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],M=n[6],d=n[10],m=n[14],b=n[3],v=n[7],A=n[11],N=n[15],R=s[0],w=s[4],U=s[8],Y=s[12],y=s[1],T=s[5],V=s[9],H=s[13],q=s[2],Q=s[6],W=s[10],ne=s[14],K=s[3],_e=s[7],he=s[11],ye=s[15];return r[0]=o*R+a*y+l*q+c*K,r[4]=o*w+a*T+l*Q+c*_e,r[8]=o*U+a*V+l*W+c*he,r[12]=o*Y+a*H+l*ne+c*ye,r[1]=u*R+h*y+f*q+p*K,r[5]=u*w+h*T+f*Q+p*_e,r[9]=u*U+h*V+f*W+p*he,r[13]=u*Y+h*H+f*ne+p*ye,r[2]=_*R+M*y+d*q+m*K,r[6]=_*w+M*T+d*Q+m*_e,r[10]=_*U+M*V+d*W+m*he,r[14]=_*Y+M*H+d*ne+m*ye,r[3]=b*R+v*y+A*q+N*K,r[7]=b*w+v*T+A*Q+N*_e,r[11]=b*U+v*V+A*W+N*he,r[15]=b*Y+v*H+A*ne+N*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],M=e[7],d=e[11],m=e[15];return _*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*p-n*l*p)+M*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+d*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+m*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],M=e[13],d=e[14],m=e[15],b=h*d*c-M*f*c+M*l*p-a*d*p-h*l*m+a*f*m,v=_*f*c-u*d*c-_*l*p+o*d*p+u*l*m-o*f*m,A=u*M*c-_*h*c+_*a*p-o*M*p-u*a*m+o*h*m,N=_*h*l-u*M*l-_*a*f+o*M*f+u*a*d-o*h*d,R=t*b+n*v+s*A+r*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return e[0]=b*w,e[1]=(M*f*r-h*d*r-M*s*p+n*d*p+h*s*m-n*f*m)*w,e[2]=(a*d*r-M*l*r+M*s*c-n*d*c-a*s*m+n*l*m)*w,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*p-n*l*p)*w,e[4]=v*w,e[5]=(u*d*r-_*f*r+_*s*p-t*d*p-u*s*m+t*f*m)*w,e[6]=(_*l*r-o*d*r-_*s*c+t*d*c+o*s*m-t*l*m)*w,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*w,e[8]=A*w,e[9]=(_*h*r-u*M*r-_*n*p+t*M*p+u*n*m-t*h*m)*w,e[10]=(o*M*r-_*a*r+_*n*c-t*M*c-o*n*m+t*a*m)*w,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*w,e[12]=N*w,e[13]=(u*M*s-_*h*s+_*n*f-t*M*f-u*n*d+t*h*d)*w,e[14]=(_*a*s-o*M*s-_*n*l+t*M*l+o*n*d-t*a*d)*w,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,_=r*h,M=o*u,d=o*h,m=a*h,b=l*c,v=l*u,A=l*h,N=n.x,R=n.y,w=n.z;return s[0]=(1-(M+m))*N,s[1]=(p+A)*N,s[2]=(_-v)*N,s[3]=0,s[4]=(p-A)*R,s[5]=(1-(f+m))*R,s[6]=(d+b)*R,s[7]=0,s[8]=(_+v)*w,s[9]=(d-b)*w,s[10]=(1-(f+M))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ui.set(s[0],s[1],s[2]).length(),o=Ui.set(s[4],s[5],s[6]).length(),a=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],un.copy(this);let c=1/r,u=1/o,h=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,t.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ln){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,_;if(a===Ln)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Lr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ln){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,p=(n+s)*u,_,M;if(a===Ln)_=(o+r)*h,M=-2*h;else if(a===Lr)_=r*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ui=new L,un=new Be,Rf=new L(0,0,0),Cf=new L(1,1,1),qn=new L,tr=new L,qt=new L,Fc=new Be,Bc=new Zt,Mn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},If=0,zc=new L,Ni=new Zt,An=new Be,nr=new L,xs=new L,Pf=new L,Lf=new Zt,kc=new L(1,0,0),Hc=new L(0,1,0),Vc=new L(0,0,1),Gc={type:"added"},Df={type:"removed"},Oi={type:"childadded",child:null},No={type:"childremoved",child:null},ft=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Mn,n=new Zt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new ke}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(kc,e)}rotateY(e){return this.rotateOnAxis(Hc,e)}rotateZ(e){return this.rotateOnAxis(Vc,e)}translateOnAxis(e,t){return zc.copy(e).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kc,e)}translateY(e){return this.translateOnAxis(Hc,e)}translateZ(e){return this.translateOnAxis(Vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(xs,nr,this.up):An.lookAt(nr,xs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(An),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Df),No.child=e,this.dispatchEvent(No),No.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,Pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ft.DEFAULT_UP=new L(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new L,En=new L,Oo=new L,wn=new L,Fi=new L,Bi=new L,Wc=new L,Fo=new L,Bo=new L,zo=new L,ko=new Qe,Ho=new Qe,Vo=new Qe,_i=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hn.subVectors(e,t),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hn.subVectors(s,t),En.subVectors(n,t),Oo.subVectors(e,t);let o=hn.dot(hn),a=hn.dot(En),l=hn.dot(Oo),c=En.dot(En),u=En.dot(Oo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ko.setScalar(0),Ho.setScalar(0),Vo.setScalar(0),ko.fromBufferAttribute(e,t),Ho.fromBufferAttribute(e,n),Vo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ko,r.x),o.addScaledVector(Ho,r.y),o.addScaledVector(Vo,r.z),o}static isFrontFacing(e,t,n,s){return hn.subVectors(n,t),En.subVectors(e,t),hn.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),hn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Fi.subVectors(s,n),Bi.subVectors(r,n),Fo.subVectors(e,n);let l=Fi.dot(Fo),c=Bi.dot(Fo);if(l<=0&&c<=0)return t.copy(n);Bo.subVectors(e,s);let u=Fi.dot(Bo),h=Bi.dot(Bo);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Fi,o);zo.subVectors(e,r);let p=Fi.dot(zo),_=Bi.dot(zo);if(_>=0&&p<=_)return t.copy(r);let M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Bi,a);let d=u*_-p*h;if(d<=0&&h-u>=0&&p-_>=0)return Wc.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Wc,a);let m=1/(d+M+f);return o=M*m,a=f*m,t.copy(n).addScaledVector(Fi,o).addScaledVector(Bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function Go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Pl(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Go(o,r,e+1/3),this.g=Go(o,r,e),this.b=Go(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Ze.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Pt(Ct.r*255,0,255))*65536+Math.round(Pt(Ct.g*255,0,255))*256+Math.round(Pt(Ct.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ct.copy(this),t);let n=Ct.r,s=Ct.g,r=Ct.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=It){Ze.fromWorkingColorSpace(Ct.copy(this),e);let t=Ct.r,n=Ct.g,s=Ct.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(ir);let n=Rs(Yn.h,ir.h,t),s=Rs(Yn.s,ir.s,t),r=Rs(Yn.l,ir.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new pe;pe.NAMES=th;var Uf=0,$t=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=qi,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=ra,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ra&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Dt=class extends $t{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vt=new L,sr=new Ce,pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}};var Or=class extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fr=class extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nf=0,tn=new Be,Wo=new ft,zi=new L,Yt=new sn,ys=new sn,St=new L,At=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eh(e)?Fr:Or)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Wo.lookAt(e),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Yt.min,ys.min),Yt.expandByPoint(St),St.addVectors(Yt.max,ys.max),Yt.expandByPoint(St)):(Yt.expandByPoint(ys.min),Yt.expandByPoint(ys.max))}Yt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(zi.fromBufferAttribute(e,c),St.add(zi)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new L,l[U]=new L;let c=new L,u=new L,h=new L,f=new Ce,p=new Ce,_=new Ce,M=new L,d=new L;function m(U,Y,y){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,Y),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,Y),_.fromBufferAttribute(r,y),u.sub(c),h.sub(c),p.sub(f),_.sub(f);let T=1/(p.x*_.y-_.x*p.y);isFinite(T)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(T),d.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(T),a[U].add(M),a[Y].add(M),a[y].add(M),l[U].add(d),l[Y].add(d),l[y].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,Y=b.length;U<Y;++U){let y=b[U],T=y.start,V=y.count;for(let H=T,q=T+V;H<q;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let v=new L,A=new L,N=new L,R=new L;function w(U){N.fromBufferAttribute(s,U),R.copy(N);let Y=a[U];v.copy(Y),v.sub(N.multiplyScalar(N.dot(Y))).normalize(),A.crossVectors(R,Y);let T=A.dot(l[U])<0?-1:1;o.setXYZW(U,v.x,v.y,v.z,T)}for(let U=0,Y=b.length;U<Y;++U){let y=b[U],T=y.start,V=y.count;for(let H=T,q=T+V;H<q;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let _=e.getX(f+0),M=e.getX(f+1),d=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,d),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),p=0,_=0;for(let M=0,d=l.length;M<d;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let m=0;m<u;m++)f[_++]=c[p++]}return new pt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xc=new Be,hi=new ss,rr=new Kt,qc=new L,or=new L,ar=new L,lr=new L,Xo=new L,cr=new L,Yc=new L,ur=new L,He=class extends ft{constructor(e=new At,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Xo.fromBufferAttribute(h,e),o?cr.addScaledVector(Xo,u):cr.addScaledVector(Xo.sub(t),u))}t.add(cr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),hi.copy(e.ray).recast(e.near),!(rr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(rr,qc)===null||hi.origin.distanceToSquared(qc)>(e.far-e.near)**2))&&(Xc.copy(r).invert(),hi.copy(e.ray).applyMatrix4(Xc),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){let d=f[_],m=o[d.materialIndex],b=Math.max(d.start,p.start),v=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let A=b,N=v;A<N;A+=3){let R=a.getX(A),w=a.getX(A+1),U=a.getX(A+2);s=hr(this,m,e,n,c,u,h,R,w,U),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let d=_,m=M;d<m;d+=3){let b=a.getX(d),v=a.getX(d+1),A=a.getX(d+2);s=hr(this,o,e,n,c,u,h,b,v,A),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){let d=f[_],m=o[d.materialIndex],b=Math.max(d.start,p.start),v=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let A=b,N=v;A<N;A+=3){let R=A,w=A+1,U=A+2;s=hr(this,m,e,n,c,u,h,R,w,U),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let d=_,m=M;d<m;d+=3){let b=d,v=d+1,A=d+2;s=hr(this,o,e,n,c,u,h,b,v,A),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}};function Of(i,e,t,n,s,r,o,a){let l;if(e.side===bt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===xn,a),l===null)return null;ur.copy(a),ur.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ur);return c<t.near||c>t.far?null:{distance:c,point:ur.clone(),object:i}}function hr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,or),i.getVertexPosition(l,ar),i.getVertexPosition(c,lr);let u=Of(i,e,t,n,or,ar,lr,Yc);if(u){let h=new L;_i.getBarycoord(Yc,or,ar,lr,h),s&&(u.uv=_i.getInterpolatedAttribute(s,a,l,c,h,new Ce)),r&&(u.uv1=_i.getInterpolatedAttribute(r,a,l,c,h,new Ce)),o&&(u.normal=_i.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};_i.getNormal(or,ar,lr,f.normal),u.face=f,u.barycoord=h}return u}var Mi=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(h,2));function _(M,d,m,b,v,A,N,R,w,U,Y){let y=A/w,T=N/U,V=A/2,H=N/2,q=R/2,Q=w+1,W=U+1,ne=0,K=0,_e=new L;for(let he=0;he<W;he++){let ye=he*T-H;for(let Ke=0;Ke<Q;Ke++){let $e=Ke*y-V;_e[M]=$e*b,_e[d]=ye*v,_e[m]=q,c.push(_e.x,_e.y,_e.z),_e[M]=0,_e[d]=0,_e[m]=R>0?1:-1,u.push(_e.x,_e.y,_e.z),h.push(Ke/w),h.push(1-he/U),ne+=1}}for(let he=0;he<U;he++)for(let ye=0;ye<w;ye++){let Ke=f+ye+Q*he,$e=f+ye+Q*(he+1),$=f+(ye+1)+Q*(he+1),ie=f+(ye+1)+Q*he;l.push(Ke,$e,ie),l.push($e,$,ie),K+=6}a.addGroup(p,K,Y),p+=K,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ot(i){let e={};for(let t=0;t<i.length;t++){let n=rs(i[t]);for(let s in n)e[s]=n[s]}return e}function Ff(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var si={clone:rs,merge:Ot},Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ct=class extends $t{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=Ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Br=class extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zn=new L,Zc=new Ce,Kc=new Ce,xt=class extends Br{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Zc,Kc),t.subVectors(Kc,Zc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ki=-90,Hi=1,Xa=class extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xt(ki,Hi,e,t);s.layers=this.layers,this.add(s);let r=new xt(ki,Hi,e,t);r.layers=this.layers,this.add(r);let o=new xt(ki,Hi,e,t);o.layers=this.layers,this.add(o);let a=new xt(ki,Hi,e,t);a.layers=this.layers,this.add(a);let l=new xt(ki,Hi,e,t);l.layers=this.layers,this.add(l);let c=new xt(ki,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},zr=class extends Tt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qa=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new zr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mi(5,5,5),r=new ct({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:vn});r.uniforms.tEquirect.value=t;let o=new He(s,r),a=t.minFilter;return t.minFilter===_n&&(t.minFilter=Ht),new Xa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},qo=new L,kf=new L,Hf=new ke,In=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=qo.subVectors(n,t).cross(kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hf.getNormalMatrix(e),s=this.coplanarPoint(qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new Kt,fr=new L,Ds=class{constructor(e=new In,t=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],_=s[9],M=s[10],d=s[11],m=s[12],b=s[13],v=s[14],A=s[15];if(n[0].setComponents(l-r,f-c,d-p,A-m).normalize(),n[1].setComponents(l+r,f+c,d+p,A+m).normalize(),n[2].setComponents(l+o,f+u,d+_,A+b).normalize(),n[3].setComponents(l-o,f-u,d-_,A-b).normalize(),n[4].setComponents(l-a,f-h,d-M,A-v).normalize(),t===Ln)n[5].setComponents(l+a,f+h,d+M,A+v).normalize();else if(t===Lr)n[5].setComponents(a,h,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(fr.x=s.normal.x>0?e.max.x:e.min.x,fr.y=s.normal.y>0?e.max.y:e.min.y,fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ih(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vf(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){let _=h[f],M=h[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,h[f]=M)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){let M=h[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Un=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],_=[],M=[],d=[];for(let m=0;m<u;m++){let b=m*f-o;for(let v=0;v<c;v++){let A=v*h-r;_.push(A,-b,0),M.push(0,0,1),d.push(v/a),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let v=b+c*m,A=b+c*(m+1),N=b+1+c*(m+1),R=b+1+c*m;p.push(v,A,R),p.push(A,N,R)}this.setIndex(p),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(M,3)),this.setAttribute("uv",new gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,td=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Id=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ud=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Np=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$p=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,um=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Gf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:Zf,aomap_fragment:Kf,aomap_pars_fragment:$f,batching_pars_vertex:Jf,batching_vertex:jf,begin_vertex:Qf,beginnormal_vertex:ed,bsdfs:td,iridescence_fragment:nd,bumpmap_pars_fragment:id,clipping_planes_fragment:sd,clipping_planes_pars_fragment:rd,clipping_planes_pars_vertex:od,clipping_planes_vertex:ad,color_fragment:ld,color_pars_fragment:cd,color_pars_vertex:ud,color_vertex:hd,common:fd,cube_uv_reflection_fragment:dd,defaultnormal_vertex:pd,displacementmap_pars_vertex:md,displacementmap_vertex:gd,emissivemap_fragment:_d,emissivemap_pars_fragment:vd,colorspace_fragment:xd,colorspace_pars_fragment:yd,envmap_fragment:Md,envmap_common_pars_fragment:Sd,envmap_pars_fragment:bd,envmap_pars_vertex:Td,envmap_physical_pars_fragment:Nd,envmap_vertex:Ad,fog_vertex:Ed,fog_pars_vertex:wd,fog_fragment:Rd,fog_pars_fragment:Cd,gradientmap_pars_fragment:Id,lightmap_pars_fragment:Pd,lights_lambert_fragment:Ld,lights_lambert_pars_fragment:Dd,lights_pars_begin:Ud,lights_toon_fragment:Od,lights_toon_pars_fragment:Fd,lights_phong_fragment:Bd,lights_phong_pars_fragment:zd,lights_physical_fragment:kd,lights_physical_pars_fragment:Hd,lights_fragment_begin:Vd,lights_fragment_maps:Gd,lights_fragment_end:Wd,logdepthbuf_fragment:Xd,logdepthbuf_pars_fragment:qd,logdepthbuf_pars_vertex:Yd,logdepthbuf_vertex:Zd,map_fragment:Kd,map_pars_fragment:$d,map_particle_fragment:Jd,map_particle_pars_fragment:jd,metalnessmap_fragment:Qd,metalnessmap_pars_fragment:ep,morphinstance_vertex:tp,morphcolor_vertex:np,morphnormal_vertex:ip,morphtarget_pars_vertex:sp,morphtarget_vertex:rp,normal_fragment_begin:op,normal_fragment_maps:ap,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:up,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:gp,packing:_p,premultiplied_alpha_fragment:vp,project_vertex:xp,dithering_fragment:yp,dithering_pars_fragment:Mp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Ep,shadowmask_pars_fragment:wp,skinbase_vertex:Rp,skinning_pars_vertex:Cp,skinning_vertex:Ip,skinnormal_vertex:Pp,specularmap_fragment:Lp,specularmap_pars_fragment:Dp,tonemapping_fragment:Up,tonemapping_pars_fragment:Np,transmission_fragment:Op,transmission_pars_fragment:Fp,uv_pars_fragment:Bp,uv_pars_vertex:zp,uv_vertex:kp,worldpos_vertex:Hp,background_vert:Vp,background_frag:Gp,backgroundCube_vert:Wp,backgroundCube_frag:Xp,cube_vert:qp,cube_frag:Yp,depth_vert:Zp,depth_frag:Kp,distanceRGBA_vert:$p,distanceRGBA_frag:Jp,equirect_vert:jp,equirect_frag:Qp,linedashed_vert:em,linedashed_frag:tm,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:sm,meshlambert_frag:rm,meshmatcap_vert:om,meshmatcap_frag:am,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:um,meshphong_frag:hm,meshphysical_vert:fm,meshphysical_frag:dm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:gm,points_frag:_m,shadow_vert:vm,shadow_frag:xm,sprite_vert:ym,sprite_frag:Mm},le={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},gn={basic:{uniforms:Ot([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ot([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new pe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ot([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ot([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ot([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ot([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ot([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ot([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ot([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ot([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ot([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ot([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ot([le.lights,le.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};gn.physical={uniforms:Ot([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var dr={r:0,b:0,g:0},di=new Mn,Sm=new Be;function bm(i,e,t,n,s,r,o){let a=new pe(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function _(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function M(b){let v=!1,A=_(b);A===null?m(a,l):A&&A.isColor&&(m(A,1),v=!0);let N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(b,v){let A=_(v);A&&(A.isCubeTexture||A.mapping===oo)?(u===void 0&&(u=new He(new Mi(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:rs(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),di.copy(v.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(di)),u.material.toneMapped=Ze.getTransfer(A.colorSpace)!==ot,(h!==A||f!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new He(new Un(2,2),new ct({name:"BackgroundMaterial",uniforms:rs(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(A.colorSpace)!==ot,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,v){b.getRGB(dr,nh(i)),n.buffers.color.setClear(dr.r,dr.g,dr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:M,addToRenderList:d}}function Tm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,T,V,H,q){let Q=!1,W=h(H,V,T);r!==W&&(r=W,c(r.object)),Q=p(y,H,V,q),Q&&_(y,H,V,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,A(y,T,V,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,T,V){let H=V.wireframe===!0,q=n[y.id];q===void 0&&(q={},n[y.id]=q);let Q=q[T.id];Q===void 0&&(Q={},q[T.id]=Q);let W=Q[H];return W===void 0&&(W=f(l()),Q[H]=W),W}function f(y){let T=[],V=[],H=[];for(let q=0;q<t;q++)T[q]=0,V[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:V,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,T,V,H){let q=r.attributes,Q=T.attributes,W=0,ne=V.getAttributes();for(let K in ne)if(ne[K].location>=0){let he=q[K],ye=Q[K];if(ye===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),he===void 0||he.attribute!==ye||ye&&he.data!==ye.data)return!0;W++}return r.attributesNum!==W||r.index!==H}function _(y,T,V,H){let q={},Q=T.attributes,W=0,ne=V.getAttributes();for(let K in ne)if(ne[K].location>=0){let he=Q[K];he===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(he=y.instanceColor));let ye={};ye.attribute=he,he&&he.data&&(ye.data=he.data),q[K]=ye,W++}r.attributes=q,r.attributesNum=W,r.index=H}function M(){let y=r.newAttributes;for(let T=0,V=y.length;T<V;T++)y[T]=0}function d(y){m(y,0)}function m(y,T){let V=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;V[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),q[y]!==T&&(i.vertexAttribDivisor(y,T),q[y]=T)}function b(){let y=r.newAttributes,T=r.enabledAttributes;for(let V=0,H=T.length;V<H;V++)T[V]!==y[V]&&(i.disableVertexAttribArray(V),T[V]=0)}function v(y,T,V,H,q,Q,W){W===!0?i.vertexAttribIPointer(y,T,V,q,Q):i.vertexAttribPointer(y,T,V,H,q,Q)}function A(y,T,V,H){M();let q=H.attributes,Q=V.getAttributes(),W=T.defaultAttributeValues;for(let ne in Q){let K=Q[ne];if(K.location>=0){let _e=q[ne];if(_e===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),_e!==void 0){let he=_e.normalized,ye=_e.itemSize,Ke=e.get(_e);if(Ke===void 0)continue;let $e=Ke.buffer,$=Ke.type,ie=Ke.bytesPerElement,me=$===i.INT||$===i.UNSIGNED_INT||_e.gpuType===bl;if(_e.isInterleavedBufferAttribute){let ue=_e.data,Fe=ue.stride,Le=_e.offset;if(ue.isInstancedInterleavedBuffer){for(let Xe=0;Xe<K.locationSize;Xe++)m(K.location+Xe,ue.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Xe=0;Xe<K.locationSize;Xe++)d(K.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Xe=0;Xe<K.locationSize;Xe++)v(K.location+Xe,ye/K.locationSize,$,he,Fe*ie,(Le+ye/K.locationSize*Xe)*ie,me)}else{if(_e.isInstancedBufferAttribute){for(let ue=0;ue<K.locationSize;ue++)m(K.location+ue,_e.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ue=0;ue<K.locationSize;ue++)d(K.location+ue);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let ue=0;ue<K.locationSize;ue++)v(K.location+ue,ye/K.locationSize,$,he,ye*ie,ye/K.locationSize*ue*ie,me)}}else if(W!==void 0){let he=W[ne];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(K.location,he);break;case 3:i.vertexAttrib3fv(K.location,he);break;case 4:i.vertexAttrib4fv(K.location,he);break;default:i.vertexAttrib1fv(K.location,he)}}}}b()}function N(){U();for(let y in n){let T=n[y];for(let V in T){let H=T[V];for(let q in H)u(H[q].object),delete H[q];delete T[V]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;let T=n[y.id];for(let V in T){let H=T[V];for(let q in H)u(H[q].object),delete H[q];delete T[V]}delete n[y.id]}function w(y){for(let T in n){let V=n[T];if(V[y.id]===void 0)continue;let H=V[y.id];for(let q in H)u(H[q].object),delete H[q];delete V[y.id]}}function U(){Y(),o=!0,r!==s&&(r=s,c(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:Y,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:d,disableUnusedAttributes:b}}function Am(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let M=0;M<h;M++)_+=u[M];for(let M=0;M<f.length;M++)t.update(_,n,f[M])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Em(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==nn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let U=w===mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Dn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==dn&&!U)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:A,vertexTextures:N,maxSamples:R}}function wm(i){let e=this,t=null,n=0,s=!1,r=!1,o=new In,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let _=h.clippingPlanes,M=h.clipIntersection,d=h.clipShadows,m=i.get(h);if(!s||_===null||_.length===0||r&&!d)r?u(null):c();else{let b=r?0:n,v=b*4,A=m.clippingState||null;l.value=A,A=u(_,f,v,p);for(let N=0;N!==v;++N)A[N]=t[N];m.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,_){let M=h!==null?h.length:0,d=null;if(M!==0){if(d=l.value,_!==!0||d===null){let m=p+M*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<m)&&(d=new Float32Array(m));for(let v=0,A=p;v!==M;++v,A+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(d,A),d[A+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,d}}function Rm(i){let e=new WeakMap;function t(o,a){return a===da?o.mapping=Ji:a===pa&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===da||a===pa)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new qa(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qn=class extends Br{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xi=4,$c=[.125,.215,.35,.446,.526,.582],vi=20,Yo=new Qn,Jc=new pe,Zo=null,Ko=0,$o=0,Jo=!1,mi=(1+Math.sqrt(5))/2,Vi=1/mi,jc=[new L(-mi,Vi,0),new L(mi,Vi,0),new L(-Vi,0,mi),new L(Vi,0,mi),new L(0,mi,-Vi),new L(0,mi,Vi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],os=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zo,Ko,$o),this._renderer.xr.enabled=Jo,e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:mn,format:nn,colorSpace:Et,depthBuffer:!1},s=Qc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cm(r)),this._blurMaterial=Im(r,e,t)}return s}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,Yo)}_sceneToCubeUV(e,t,n,s){let a=new xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Jc),u.toneMapping=Jn,u.autoClear=!1;let p=new Dt({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),_=new He(new Mi,p),M=!1,d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,M=!0):(p.color.copy(Jc),M=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;pr(s,b*v,m>2?v:0,v,v),u.setRenderTarget(s),M&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ji||e.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;pr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Yo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jc[(s-r-1)%jc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new He(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vi-1),M=r/_,d=isFinite(r)?1+Math.floor(u*M):vi;d>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${vi}`);let m=[],b=0;for(let w=0;w<vi;++w){let U=w/M,Y=Math.exp(-U*U/2);m.push(Y),w===0?b+=Y:w<d&&(b+=2*Y)}for(let w=0;w<m.length;w++)m[w]=m[w]/b;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;let A=this._sizeLods[s],N=3*A*(s>v-Xi?s-v+Xi:0),R=4*(this._cubeSize-A);pr(t,N,R,3*A,2*A),l.setRenderTarget(t),l.render(h,Yo)}};function Cm(i){let e=[],t=[],n=[],s=i,r=i-Xi+1+$c.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Xi?l=$c[o-i+Xi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,M=3,d=2,m=1,b=new Float32Array(M*_*p),v=new Float32Array(d*_*p),A=new Float32Array(m*_*p);for(let R=0;R<p;R++){let w=R%3*2/3-1,U=R>2?0:-1,Y=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];b.set(Y,M*_*R),v.set(f,d*_*R);let y=[R,R,R,R,R,R];A.set(y,m*_*R)}let N=new At;N.setAttribute("position",new pt(b,M)),N.setAttribute("uv",new pt(v,d)),N.setAttribute("faceIndex",new pt(A,m)),e.push(N),s>Xi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qc(i,e,t){let n=new Bt(i,e,t);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Im(i,e,t){let n=new Float32Array(vi),s=new L(0,1,0);return new ct({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function eu(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function tu(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===da||l===pa,u=l===Ji||l===ji;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new os(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new os(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Lm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dm(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);for(let _ in f.morphAttributes){let M=f.morphAttributes[_];for(let d=0,m=M.length;d<m;d++)e.remove(M[d])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let _ in f)e.update(f[_],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let _ in p){let M=p[_];for(let d=0,m=M.length;d<m;d++)e.update(M[d],i.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,_=h.attributes.position,M=0;if(p!==null){let b=p.array;M=p.version;for(let v=0,A=b.length;v<A;v+=3){let N=b[v+0],R=b[v+1],w=b[v+2];f.push(N,R,R,w,w,N)}}else if(_!==void 0){let b=_.array;M=_.version;for(let v=0,A=b.length/3-1;v<A;v+=3){let N=v+0,R=v+1,w=v+2;f.push(N,R,R,w,w,N)}}else return;let d=new(eh(f)?Fr:Or)(f,1);d.version=M;let m=r.get(h);m&&e.remove(m),r.set(h,d)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Um(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function c(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*o,_),t.update(p,n,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let d=0;for(let m=0;m<_;m++)d+=p[m];t.update(d,n,1)}function h(f,p,_,M){if(_===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],M[m]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,M,0,_);let m=0;for(let b=0;b<_;b++)m+=p[b];for(let b=0;b<M.length;b++)t.update(m,n,M[b])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Nm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Om(i,e,t){let n=new WeakMap,s=new Qe;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let Y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",Y)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;p===!0&&(v=1),_===!0&&(v=2),M===!0&&(v=3);let A=a.attributes.position.count*v,N=1;A>e.maxTextureSize&&(N=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let R=new Float32Array(A*N*4*h),w=new Ur(R,A,N,h);w.type=dn,w.needsUpdate=!0;let U=v*4;for(let y=0;y<h;y++){let T=d[y],V=m[y],H=b[y],q=A*N*4*y;for(let Q=0;Q<T.count;Q++){let W=Q*U;p===!0&&(s.fromBufferAttribute(T,Q),R[q+W+0]=s.x,R[q+W+1]=s.y,R[q+W+2]=s.z,R[q+W+3]=0),_===!0&&(s.fromBufferAttribute(V,Q),R[q+W+4]=s.x,R[q+W+5]=s.y,R[q+W+6]=s.z,R[q+W+7]=0),M===!0&&(s.fromBufferAttribute(H,Q),R[q+W+8]=s.x,R[q+W+9]=s.y,R[q+W+10]=s.z,R[q+W+11]=H.itemSize===4?s.w:1)}}f={count:h,texture:w,size:new Ce(A,N)},n.set(a,f),a.addEventListener("dispose",Y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Fm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var kr=class extends Tt{constructor(e,t,n,s,r,o,a,l,c,u=Yi){if(u!==Yi&&u!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Yi&&(n=yi),n===void 0&&u===es&&(n=Qi),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sh=new Tt,nu=new kr(1,1),rh=new Ur,oh=new Wa,ah=new zr,iu=[],su=[],ru=new Float32Array(16),ou=new Float32Array(9),au=new Float32Array(4);function us(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=iu[s];if(r===void 0&&(r=new Float32Array(s),iu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function co(i,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Vm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;au.set(n),i.uniformMatrix2fv(this.addr,!1,au),Mt(t,n)}}function Gm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;ou.set(n),i.uniformMatrix3fv(this.addr,!1,ou),Mt(t,n)}}function Wm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),Mt(t,n)}}function Xm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function Km(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function Qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nu.compareFunction=ju,r=nu):r=sh,t.setTexture2D(e||r,s)}function eg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||oh,s)}function tg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ah,s)}function ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rh,s)}function ig(i){switch(i){case 5126:return Bm;case 35664:return zm;case 35665:return km;case 35666:return Hm;case 35674:return Vm;case 35675:return Gm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return qm;case 35668:case 35672:return Ym;case 35669:case 35673:return Zm;case 5125:return Km;case 36294:return $m;case 36295:return Jm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}function sg(i,e){i.uniform1fv(this.addr,e)}function rg(i,e){let t=us(e,this.size,2);i.uniform2fv(this.addr,t)}function og(i,e){let t=us(e,this.size,3);i.uniform3fv(this.addr,t)}function ag(i,e){let t=us(e,this.size,4);i.uniform4fv(this.addr,t)}function lg(i,e){let t=us(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cg(i,e){let t=us(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ug(i,e){let t=us(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hg(i,e){i.uniform1iv(this.addr,e)}function fg(i,e){i.uniform2iv(this.addr,e)}function dg(i,e){i.uniform3iv(this.addr,e)}function pg(i,e){i.uniform4iv(this.addr,e)}function mg(i,e){i.uniform1uiv(this.addr,e)}function gg(i,e){i.uniform2uiv(this.addr,e)}function _g(i,e){i.uniform3uiv(this.addr,e)}function vg(i,e){i.uniform4uiv(this.addr,e)}function xg(i,e,t){let n=this.cache,s=e.length,r=co(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sh,r[o])}function yg(i,e,t){let n=this.cache,s=e.length,r=co(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||oh,r[o])}function Mg(i,e,t){let n=this.cache,s=e.length,r=co(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ah,r[o])}function Sg(i,e,t){let n=this.cache,s=e.length,r=co(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rh,r[o])}function bg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return lg;case 35675:return cg;case 35676:return ug;case 5124:case 35670:return hg;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}var Ya=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ig(t.type)}},Za=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bg(t.type)}},Ka=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},jo=/(\w+)(\])?(\[|\.)?/g;function lu(i,e){i.seq.push(e),i.map[e.id]=e}function Tg(i,e,t){let n=i.name,s=n.length;for(jo.lastIndex=0;;){let r=jo.exec(n),o=jo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){lu(t,c===void 0?new Ya(a,i,e):new Za(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ka(a),lu(t,h)),t=h}}}var Ki=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Tg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function cu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ag=37297,Eg=0;function wg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Rg(i){let e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i),n;switch(e===t?n="":e===Pr&&t===Ir?n="LinearDisplayP3ToLinearSRGB":e===Ir&&t===Pr&&(n="LinearSRGBToLinearDisplayP3"),i){case Et:case lo:return[n,"LinearTransferOETF"];case It:case Il:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function uu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+wg(i.getShaderSource(e),o)}else return s}function Cg(i,e){let t=Rg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ig(i,e){let t;switch(e){case _l:t="Linear";break;case vl:t="Reinhard";break;case xl:t="Cineon";break;case Vs:t="ACESFilmic";break;case yl:t="AgX";break;case Ml:t="Neutral";break;case Wh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mr=new L;function Pg(){Ze.getLuminanceCoefficients(mr);let i=mr.x.toFixed(4),e=mr.y.toFixed(4),t=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function Dg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ug(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function As(i){return i!==""}function hu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(i){return i.replace(Ng,Fg)}var Og=new Map;function Fg(i,e){let t=ze[e];if(t===void 0){let n=Og.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $a(t)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function du(i){return i.replace(Bg,zg)}function zg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case ji:e="ENVMAP_TYPE_CUBE";break;case oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ji&&(e="ENVMAP_MODE_REFRACTION"),e}function Gg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zu:e="ENVMAP_BLENDING_MULTIPLY";break;case Vh:e="ENVMAP_BLENDING_MIX";break;case Gh:e="ENVMAP_BLENDING_ADD";break}return e}function Wg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=kg(t),c=Hg(t),u=Vg(t),h=Gg(t),f=Wg(t),p=Lg(t),_=Dg(r),M=s.createProgram(),d,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(As).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(As).join(`
`),m.length>0&&(m+=`
`)):(d=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),m=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Jn?Ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Cg("linearToOutputTexel",t.outputColorSpace),Pg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=$a(o),o=hu(o,t),o=fu(o,t),a=$a(a),a=hu(a,t),a=fu(a,t),o=du(o),a=du(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",t.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=b+d+o,A=b+m+a,N=cu(s,s.VERTEX_SHADER,v),R=cu(s,s.FRAGMENT_SHADER,A);s.attachShader(M,N),s.attachShader(M,R),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(T){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(M).trim(),H=s.getShaderInfoLog(N).trim(),q=s.getShaderInfoLog(R).trim(),Q=!0,W=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,N,R);else{let ne=uu(s,N,"vertex"),K=uu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+V+`
`+ne+`
`+K)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||q==="")&&(W=!1);W&&(T.diagnostics={runnable:Q,programLog:V,vertexShader:{log:H,prefix:d},fragmentShader:{log:q,prefix:m}})}s.deleteShader(N),s.deleteShader(R),U=new Ki(s,M),Y=Ug(s,M)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let Y;this.getAttributes=function(){return Y===void 0&&w(this),Y};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,Ag)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eg++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=R,this}var qg=0,Ja=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ja(e),t.set(e,n)),n}},ja=class{constructor(e){this.id=qg++,this.code=e,this.usedTimes=0}};function Yg(i,e,t,n,s,r,o){let a=new Nr,l=new Ja,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,p=s.vertexTextures,_=s.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,T,V,H,q){let Q=H.fog,W=q.geometry,ne=y.isMeshStandardMaterial?H.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||ne),_e=K&&K.mapping===oo?K.image.height:null,he=M[y.type];y.precision!==null&&(_=s.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));let ye=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ke=ye!==void 0?ye.length:0,$e=0;W.morphAttributes.position!==void 0&&($e=1),W.morphAttributes.normal!==void 0&&($e=2),W.morphAttributes.color!==void 0&&($e=3);let $,ie,me,ue;if(he){let kt=gn[he];$=kt.vertexShader,ie=kt.fragmentShader}else $=y.vertexShader,ie=y.fragmentShader,l.update(y),me=l.getVertexShaderID(y),ue=l.getFragmentShaderID(y);let Fe=i.getRenderTarget(),Le=q.isInstancedMesh===!0,Xe=q.isBatchedMesh===!0,et=!!y.map,qe=!!y.matcap,D=!!K,Ut=!!y.aoMap,We=!!y.lightMap,Ye=!!y.bumpMap,De=!!y.normalMap,tt=!!y.displacementMap,Ne=!!y.emissiveMap,x=!!y.metalnessMap,g=!!y.roughnessMap,C=y.anisotropy>0,O=y.clearcoat>0,F=y.dispersion>0,E=y.iridescence>0,P=y.sheen>0,k=y.transmission>0,te=C&&!!y.anisotropyMap,be=O&&!!y.clearcoatMap,ee=O&&!!y.clearcoatNormalMap,se=O&&!!y.clearcoatRoughnessMap,ve=E&&!!y.iridescenceMap,ce=E&&!!y.iridescenceThicknessMap,ae=P&&!!y.sheenColorMap,Ee=P&&!!y.sheenRoughnessMap,we=!!y.specularMap,Te=!!y.specularColorMap,I=!!y.specularIntensityMap,oe=k&&!!y.transmissionMap,Z=k&&!!y.thicknessMap,j=!!y.gradientMap,fe=!!y.alphaMap,ge=y.alphaTest>0,Je=!!y.alphaHash,_t=!!y.extensions,zt=Jn;y.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(zt=i.toneMapping);let je={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:ie,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Xe,batchingColor:Xe&&q._colorsTexture!==null,instancing:Le,instancingColor:Le&&q.instanceColor!==null,instancingMorph:Le&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Et,alphaToCoverage:!!y.alphaToCoverage,map:et,matcap:qe,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:_e,aoMap:Ut,lightMap:We,bumpMap:Ye,normalMap:De,displacementMap:p&&tt,emissiveMap:Ne,normalMapObjectSpace:De&&y.normalMapType===Kh,normalMapTangentSpace:De&&y.normalMapType===Ju,metalnessMap:x,roughnessMap:g,anisotropy:C,anisotropyMap:te,clearcoat:O,clearcoatMap:be,clearcoatNormalMap:ee,clearcoatRoughnessMap:se,dispersion:F,iridescence:E,iridescenceMap:ve,iridescenceThicknessMap:ce,sheen:P,sheenColorMap:ae,sheenRoughnessMap:Ee,specularMap:we,specularColorMap:Te,specularIntensityMap:I,transmission:k,transmissionMap:oe,thicknessMap:Z,gradientMap:j,opaque:y.transparent===!1&&y.blending===qi&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:ge,alphaHash:Je,combine:y.combine,mapUv:et&&d(y.map.channel),aoMapUv:Ut&&d(y.aoMap.channel),lightMapUv:We&&d(y.lightMap.channel),bumpMapUv:Ye&&d(y.bumpMap.channel),normalMapUv:De&&d(y.normalMap.channel),displacementMapUv:tt&&d(y.displacementMap.channel),emissiveMapUv:Ne&&d(y.emissiveMap.channel),metalnessMapUv:x&&d(y.metalnessMap.channel),roughnessMapUv:g&&d(y.roughnessMap.channel),anisotropyMapUv:te&&d(y.anisotropyMap.channel),clearcoatMapUv:be&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:ee&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&d(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&d(y.sheenRoughnessMap.channel),specularMapUv:we&&d(y.specularMap.channel),specularColorMapUv:Te&&d(y.specularColorMap.channel),specularIntensityMapUv:I&&d(y.specularIntensityMap.channel),transmissionMapUv:oe&&d(y.transmissionMap.channel),thicknessMapUv:Z&&d(y.thicknessMap.channel),alphaMapUv:fe&&d(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(De||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!W.attributes.uv&&(et||fe),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ke,morphTextureStride:$e,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:et&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ft,flipSided:y.side===bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_t&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&y.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function b(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let V in y.defines)T.push(V),T.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(v(T,y),A(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function A(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function N(y){let T=M[y.type],V;if(T){let H=gn[T];V=si.clone(H.uniforms)}else V=y.uniforms;return V}function R(y,T){let V;for(let H=0,q=u.length;H<q;H++){let Q=u[H];if(Q.cacheKey===T){V=Q,++V.usedTimes;break}}return V===void 0&&(V=new Xg(i,T,y,r),u.push(V)),V}function w(y){if(--y.usedTimes===0){let T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function U(y){l.remove(y)}function Y(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:N,acquireProgram:R,releaseProgram:w,releaseShaderCache:U,programs:u,dispose:Y}}function Zg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Kg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,p,_,M,d){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:M,group:d},i[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=M,m.group=d),e++,m}function a(h,f,p,_,M,d){let m=o(h,f,p,_,M,d);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(h,f,p,_,M,d){let m=o(h,f,p,_,M,d);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||Kg),n.length>1&&n.sort(f||mu),s.length>1&&s.sort(f||mu)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function $g(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new gu,i.set(n,[o])):s>=r.length?(o=new gu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new pe};break;case"SpotLight":t={position:new L,direction:new L,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function jg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Qg=0;function e0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function t0(i){let e=new Jg,t=jg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Be,o=new Be;function a(c){let u=0,h=0,f=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let p=0,_=0,M=0,d=0,m=0,b=0,v=0,A=0,N=0,R=0,w=0;c.sort(e0);for(let Y=0,y=c.length;Y<y;Y++){let T=c[Y],V=T.color,H=T.intensity,q=T.distance,Q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=V.r*H,h+=V.g*H,f+=V.b*H;else if(T.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(T.sh.coefficients[W],H);w++}else if(T.isDirectionalLight){let W=e.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let ne=T.shadow,K=t.get(T);K.shadowIntensity=ne.intensity,K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=T.shadow.matrix,b++}n.directional[p]=W,p++}else if(T.isSpotLight){let W=e.get(T);W.position.setFromMatrixPosition(T.matrixWorld),W.color.copy(V).multiplyScalar(H),W.distance=q,W.coneCos=Math.cos(T.angle),W.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),W.decay=T.decay,n.spot[M]=W;let ne=T.shadow;if(T.map&&(n.spotLightMap[N]=T.map,N++,ne.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[M]=ne.matrix,T.castShadow){let K=t.get(T);K.shadowIntensity=ne.intensity,K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,n.spotShadow[M]=K,n.spotShadowMap[M]=Q,A++}M++}else if(T.isRectAreaLight){let W=e.get(T);W.color.copy(V).multiplyScalar(H),W.halfWidth.set(T.width*.5,0,0),W.halfHeight.set(0,T.height*.5,0),n.rectArea[d]=W,d++}else if(T.isPointLight){let W=e.get(T);if(W.color.copy(T.color).multiplyScalar(T.intensity),W.distance=T.distance,W.decay=T.decay,T.castShadow){let ne=T.shadow,K=t.get(T);K.shadowIntensity=ne.intensity,K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,K.shadowCameraNear=ne.camera.near,K.shadowCameraFar=ne.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=Q,n.pointShadowMatrix[_]=T.shadow.matrix,v++}n.point[_]=W,_++}else if(T.isHemisphereLight){let W=e.get(T);W.skyColor.copy(T.color).multiplyScalar(H),W.groundColor.copy(T.groundColor).multiplyScalar(H),n.hemi[m]=W,m++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==M||U.rectAreaLength!==d||U.hemiLength!==m||U.numDirectionalShadows!==b||U.numPointShadows!==v||U.numSpotShadows!==A||U.numSpotMaps!==N||U.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=M,n.rectArea.length=d,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=A+N-R,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,U.directionalLength=p,U.pointLength=_,U.spotLength=M,U.rectAreaLength=d,U.hemiLength=m,U.numDirectionalShadows=b,U.numPointShadows=v,U.numSpotShadows=A,U.numSpotMaps=N,U.numLightProbes=w,n.version=Qg++)}function l(c,u){let h=0,f=0,p=0,_=0,M=0,d=u.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let v=c[m];if(v.isDirectionalLight){let A=n.directional[h];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),h++}else if(v.isSpotLight){let A=n.spot[p];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),p++}else if(v.isRectAreaLight){let A=n.rectArea[_];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(d),o.identity(),r.copy(v.matrixWorld),r.premultiply(d),o.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(d),f++}else if(v.isHemisphereLight){let A=n.hemi[M];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(d),M++}}}return{setup:a,setupView:l,state:n}}function _u(i){let e=new t0(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function n0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new _u(i),e.set(s,[a])):r>=o.length?(a=new _u(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qa=class extends $t{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},el=class extends $t{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r0(i,e,t){let n=new Ds,s=new Ce,r=new Ce,o=new Qe,a=new Qa({depthPacking:Zh}),l=new el,c={},u=t.maxTextureSize,h={[xn]:bt,[bt]:xn,[Ft]:Ft},f=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:i0,fragmentShader:s0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new At;_.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new He(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bu;let m=this.type;this.render=function(R,w,U){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;let Y=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),V=i.state;V.setBlending(vn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let H=m!==Cn&&this.type===Cn,q=m===Cn&&this.type!==Cn;for(let Q=0,W=R.length;Q<W;Q++){let ne=R[Q],K=ne.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let _e=K.getFrameExtents();if(s.multiply(_e),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_e.x),s.x=r.x*_e.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_e.y),s.y=r.y*_e.y,K.mapSize.y=r.y)),K.map===null||H===!0||q===!0){let ye=this.type!==Cn?{minFilter:Lt,magFilter:Lt}:{};K.map!==null&&K.map.dispose(),K.map=new Bt(s.x,s.y,ye),K.map.texture.name=ne.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let he=K.getViewportCount();for(let ye=0;ye<he;ye++){let Ke=K.getViewport(ye);o.set(r.x*Ke.x,r.y*Ke.y,r.x*Ke.z,r.y*Ke.w),V.viewport(o),K.updateMatrices(ne,ye),n=K.getFrustum(),A(w,U,K.camera,ne,this.type)}K.isPointLightShadow!==!0&&this.type===Cn&&b(K,U),K.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(Y,y,T)};function b(R,w){let U=e.update(M);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Bt(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,U,f,M,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,U,p,M,null)}function v(R,w,U,Y){let y=null,T=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)y=T;else if(y=U.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let V=y.uuid,H=w.uuid,q=c[V];q===void 0&&(q={},c[V]=q);let Q=q[H];Q===void 0&&(Q=y.clone(),q[H]=Q,w.addEventListener("dispose",N)),y=Q}if(y.visible=w.visible,y.wireframe=w.wireframe,Y===Cn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let V=i.properties.get(y);V.light=U}return y}function A(R,w,U,Y,y){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Cn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);let H=e.update(R),q=R.material;if(Array.isArray(q)){let Q=H.groups;for(let W=0,ne=Q.length;W<ne;W++){let K=Q[W],_e=q[K.materialIndex];if(_e&&_e.visible){let he=v(R,_e,Y,y);R.onBeforeShadow(i,R,w,U,H,he,K),i.renderBufferDirect(U,null,H,he,R,K),R.onAfterShadow(i,R,w,U,H,he,K)}}}else if(q.visible){let Q=v(R,q,Y,y);R.onBeforeShadow(i,R,w,U,H,Q,null),i.renderBufferDirect(U,null,H,Q,R,null),R.onAfterShadow(i,R,w,U,H,Q,null)}}let V=R.children;for(let H=0,q=V.length;H<q;H++)A(V[H],w,U,Y,y)}function N(R){R.target.removeEventListener("dispose",N);for(let U in c){let Y=c[U],y=R.target.uuid;y in Y&&(Y[y].dispose(),delete Y[y])}}}var o0={[oa]:aa,[la]:ha,[ca]:fa,[$i]:ua,[aa]:oa,[ha]:la,[fa]:ca,[ua]:$i};function a0(i){function e(){let I=!1,oe=new Qe,Z=null,j=new Qe(0,0,0,0);return{setMask:function(fe){Z!==fe&&!I&&(i.colorMask(fe,fe,fe,fe),Z=fe)},setLocked:function(fe){I=fe},setClear:function(fe,ge,Je,_t,zt){zt===!0&&(fe*=_t,ge*=_t,Je*=_t),oe.set(fe,ge,Je,_t),j.equals(oe)===!1&&(i.clearColor(fe,ge,Je,_t),j.copy(oe))},reset:function(){I=!1,Z=null,j.set(-1,0,0,0)}}}function t(){let I=!1,oe=!1,Z=null,j=null,fe=null;return{setReversed:function(ge){oe=ge},setTest:function(ge){ge?me(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(ge){Z!==ge&&!I&&(i.depthMask(ge),Z=ge)},setFunc:function(ge){if(oe&&(ge=o0[ge]),j!==ge){switch(ge){case oa:i.depthFunc(i.NEVER);break;case aa:i.depthFunc(i.ALWAYS);break;case la:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case ca:i.depthFunc(i.EQUAL);break;case ua:i.depthFunc(i.GEQUAL);break;case ha:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ge}},setLocked:function(ge){I=ge},setClear:function(ge){fe!==ge&&(i.clearDepth(ge),fe=ge)},reset:function(){I=!1,Z=null,j=null,fe=null}}}function n(){let I=!1,oe=null,Z=null,j=null,fe=null,ge=null,Je=null,_t=null,zt=null;return{setTest:function(je){I||(je?me(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(je){oe!==je&&!I&&(i.stencilMask(je),oe=je)},setFunc:function(je,kt,Sn){(Z!==je||j!==kt||fe!==Sn)&&(i.stencilFunc(je,kt,Sn),Z=je,j=kt,fe=Sn)},setOp:function(je,kt,Sn){(ge!==je||Je!==kt||_t!==Sn)&&(i.stencilOp(je,kt,Sn),ge=je,Je=kt,_t=Sn)},setLocked:function(je){I=je},setClear:function(je){zt!==je&&(i.clearStencil(je),zt=je)},reset:function(){I=!1,oe=null,Z=null,j=null,fe=null,ge=null,Je=null,_t=null,zt=null}}}let s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},u={},h=new WeakMap,f=[],p=null,_=!1,M=null,d=null,m=null,b=null,v=null,A=null,N=null,R=new pe(0,0,0),w=0,U=!1,Y=null,y=null,T=null,V=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,W=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ne)[1]),Q=W>=1):ne.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),Q=W>=2);let K=null,_e={},he=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Ke=new Qe().fromArray(he),$e=new Qe().fromArray(ye);function $(I,oe,Z,j){let fe=new Uint8Array(4),ge=i.createTexture();i.bindTexture(I,ge),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<Z;Je++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(oe+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ge}let ie={};ie[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),me(i.DEPTH_TEST),r.setFunc($i),We(!1),Ye(bc),me(i.CULL_FACE),D(vn);function me(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function ue(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function Fe(I,oe){return u[I]!==oe?(i.bindFramebuffer(I,oe),u[I]=oe,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Le(I,oe){let Z=f,j=!1;if(I){Z=h.get(oe),Z===void 0&&(Z=[],h.set(oe,Z));let fe=I.textures;if(Z.length!==fe.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Je=fe.length;ge<Je;ge++)Z[ge]=i.COLOR_ATTACHMENT0+ge;Z.length=fe.length,j=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,j=!0);j&&i.drawBuffers(Z)}function Xe(I){return p!==I?(i.useProgram(I),p=I,!0):!1}let et={[gi]:i.FUNC_ADD,[Ah]:i.FUNC_SUBTRACT,[Eh]:i.FUNC_REVERSE_SUBTRACT};et[wh]=i.MIN,et[Rh]=i.MAX;let qe={[Ch]:i.ZERO,[Ih]:i.ONE,[Ph]:i.SRC_COLOR,[sa]:i.SRC_ALPHA,[Fh]:i.SRC_ALPHA_SATURATE,[Nh]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Lh]:i.ONE_MINUS_SRC_COLOR,[ra]:i.ONE_MINUS_SRC_ALPHA,[Oh]:i.ONE_MINUS_DST_COLOR,[Uh]:i.ONE_MINUS_DST_ALPHA,[Bh]:i.CONSTANT_COLOR,[zh]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[Hh]:i.ONE_MINUS_CONSTANT_ALPHA};function D(I,oe,Z,j,fe,ge,Je,_t,zt,je){if(I===vn){_===!0&&(ue(i.BLEND),_=!1);return}if(_===!1&&(me(i.BLEND),_=!0),I!==Th){if(I!==M||je!==U){if((d!==gi||v!==gi)&&(i.blendEquation(i.FUNC_ADD),d=gi,v=gi),je)switch(I){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFunc(i.ONE,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,b=null,A=null,N=null,R.set(0,0,0),w=0,M=I,U=je}return}fe=fe||oe,ge=ge||Z,Je=Je||j,(oe!==d||fe!==v)&&(i.blendEquationSeparate(et[oe],et[fe]),d=oe,v=fe),(Z!==m||j!==b||ge!==A||Je!==N)&&(i.blendFuncSeparate(qe[Z],qe[j],qe[ge],qe[Je]),m=Z,b=j,A=ge,N=Je),(_t.equals(R)===!1||zt!==w)&&(i.blendColor(_t.r,_t.g,_t.b,zt),R.copy(_t),w=zt),M=I,U=!1}function Ut(I,oe){I.side===Ft?ue(i.CULL_FACE):me(i.CULL_FACE);let Z=I.side===bt;oe&&(Z=!Z),We(Z),I.blending===qi&&I.transparent===!1?D(vn):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);let j=I.stencilWrite;o.setTest(j),j&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),tt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(I){Y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),Y=I)}function Ye(I){I!==Mh?(me(i.CULL_FACE),I!==y&&(I===bc?i.cullFace(i.BACK):I===Sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),y=I}function De(I){I!==T&&(Q&&i.lineWidth(I),T=I)}function tt(I,oe,Z){I?(me(i.POLYGON_OFFSET_FILL),(V!==oe||H!==Z)&&(i.polygonOffset(oe,Z),V=oe,H=Z)):ue(i.POLYGON_OFFSET_FILL)}function Ne(I){I?me(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function x(I){I===void 0&&(I=i.TEXTURE0+q-1),K!==I&&(i.activeTexture(I),K=I)}function g(I,oe,Z){Z===void 0&&(K===null?Z=i.TEXTURE0+q-1:Z=K);let j=_e[Z];j===void 0&&(j={type:void 0,texture:void 0},_e[Z]=j),(j.type!==I||j.texture!==oe)&&(K!==Z&&(i.activeTexture(Z),K=Z),i.bindTexture(I,oe||ie[I]),j.type=I,j.texture=oe)}function C(){let I=_e[K];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function O(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function E(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(I){Ke.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ke.copy(I))}function ae(I){$e.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),$e.copy(I))}function Ee(I,oe){let Z=l.get(oe);Z===void 0&&(Z=new WeakMap,l.set(oe,Z));let j=Z.get(I);j===void 0&&(j=i.getUniformBlockIndex(oe,I.name),Z.set(I,j))}function we(I,oe){let j=l.get(oe).get(I);a.get(oe)!==j&&(i.uniformBlockBinding(oe,j,I.__bindingPointIndex),a.set(oe,j))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},K=null,_e={},u={},h=new WeakMap,f=[],p=null,_=!1,M=null,d=null,m=null,b=null,v=null,A=null,N=null,R=new pe(0,0,0),w=0,U=!1,Y=null,y=null,T=null,V=null,H=null,Ke.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:me,disable:ue,bindFramebuffer:Fe,drawBuffers:Le,useProgram:Xe,setBlending:D,setMaterial:Ut,setFlipSided:We,setCullFace:Ye,setLineWidth:De,setPolygonOffset:tt,setScissorTest:Ne,activeTexture:x,bindTexture:g,unbindTexture:C,compressedTexImage2D:O,compressedTexImage3D:F,texImage2D:se,texImage3D:ve,updateUBOMapping:Ee,uniformBlockBinding:we,texStorage2D:be,texStorage3D:ee,texSubImage2D:E,texSubImage3D:P,compressedTexSubImage2D:k,compressedTexSubImage3D:te,scissor:ce,viewport:ae,reset:Te}}function vu(i,e,t,n){let s=l0(n);switch(t){case Wu:return i*e;case qu:return i*e;case Yu:return i*e*2;case El:return i*e/s.components*s.byteLength;case wl:return i*e/s.components*s.byteLength;case Zu:return i*e*2/s.components*s.byteLength;case Rl:return i*e*2/s.components*s.byteLength;case Xu:return i*e*3/s.components*s.byteLength;case nn:return i*e*4/s.components*s.byteLength;case Cl:return i*e*4/s.components*s.byteLength;case br:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ar:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:case va:return Math.max(i,16)*Math.max(e,8)/4;case ma:case _a:return Math.max(i,8)*Math.max(e,8)/2;case xa:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wr:case Oa:case Fa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ku:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case za:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function l0(i){switch(i){case Dn:case Hu:return{byteLength:1,components:1};case Ps:case Vu:case mn:return{byteLength:2,components:1};case Tl:case Al:return{byteLength:2,components:4};case yi:case bl:case dn:return{byteLength:4,components:1};case Gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function c0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,g){return p?new OffscreenCanvas(x,g):Ls("canvas")}function M(x,g,C){let O=1,F=Ne(x);if((F.width>C||F.height>C)&&(O=C/Math.max(F.width,F.height)),O<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let E=Math.floor(O*F.width),P=Math.floor(O*F.height);h===void 0&&(h=_(E,P));let k=g?_(E,P):h;return k.width=E,k.height=P,k.getContext("2d").drawImage(x,0,0,E,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+E+"x"+P+")."),k}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),x;return x}function d(x){return x.generateMipmaps&&x.minFilter!==Lt&&x.minFilter!==Ht}function m(x){i.generateMipmap(x)}function b(x,g,C,O,F=!1){if(x!==null){if(i[x]!==void 0)return i[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let E=g;if(g===i.RED&&(C===i.FLOAT&&(E=i.R32F),C===i.HALF_FLOAT&&(E=i.R16F),C===i.UNSIGNED_BYTE&&(E=i.R8)),g===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(E=i.R8UI),C===i.UNSIGNED_SHORT&&(E=i.R16UI),C===i.UNSIGNED_INT&&(E=i.R32UI),C===i.BYTE&&(E=i.R8I),C===i.SHORT&&(E=i.R16I),C===i.INT&&(E=i.R32I)),g===i.RG&&(C===i.FLOAT&&(E=i.RG32F),C===i.HALF_FLOAT&&(E=i.RG16F),C===i.UNSIGNED_BYTE&&(E=i.RG8)),g===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(E=i.RG8UI),C===i.UNSIGNED_SHORT&&(E=i.RG16UI),C===i.UNSIGNED_INT&&(E=i.RG32UI),C===i.BYTE&&(E=i.RG8I),C===i.SHORT&&(E=i.RG16I),C===i.INT&&(E=i.RG32I)),g===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(E=i.RGB8UI),C===i.UNSIGNED_SHORT&&(E=i.RGB16UI),C===i.UNSIGNED_INT&&(E=i.RGB32UI),C===i.BYTE&&(E=i.RGB8I),C===i.SHORT&&(E=i.RGB16I),C===i.INT&&(E=i.RGB32I)),g===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(E=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(E=i.RGBA16UI),C===i.UNSIGNED_INT&&(E=i.RGBA32UI),C===i.BYTE&&(E=i.RGBA8I),C===i.SHORT&&(E=i.RGBA16I),C===i.INT&&(E=i.RGBA32I)),g===i.RGB&&C===i.UNSIGNED_INT_5_9_9_9_REV&&(E=i.RGB9_E5),g===i.RGBA){let P=F?Cr:Ze.getTransfer(O);C===i.FLOAT&&(E=i.RGBA32F),C===i.HALF_FLOAT&&(E=i.RGBA16F),C===i.UNSIGNED_BYTE&&(E=P===ot?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(E=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(E=i.RGB5_A1)}return(E===i.R16F||E===i.R32F||E===i.RG16F||E===i.RG32F||E===i.RGBA16F||E===i.RGBA32F)&&e.get("EXT_color_buffer_float"),E}function v(x,g){let C;return x?g===null||g===yi||g===Qi?C=i.DEPTH24_STENCIL8:g===dn?C=i.DEPTH32F_STENCIL8:g===Ps&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===yi||g===Qi?C=i.DEPTH_COMPONENT24:g===dn?C=i.DEPTH_COMPONENT32F:g===Ps&&(C=i.DEPTH_COMPONENT16),C}function A(x,g){return d(x)===!0||x.isFramebufferTexture&&x.minFilter!==Lt&&x.minFilter!==Ht?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function N(x){let g=x.target;g.removeEventListener("dispose",N),w(g),g.isVideoTexture&&u.delete(g)}function R(x){let g=x.target;g.removeEventListener("dispose",R),Y(g)}function w(x){let g=n.get(x);if(g.__webglInit===void 0)return;let C=x.source,O=f.get(C);if(O){let F=O[g.__cacheKey];F.usedTimes--,F.usedTimes===0&&U(x),Object.keys(O).length===0&&f.delete(C)}n.remove(x)}function U(x){let g=n.get(x);i.deleteTexture(g.__webglTexture);let C=x.source,O=f.get(C);delete O[g.__cacheKey],o.memory.textures--}function Y(x){let g=n.get(x);if(x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(g.__webglFramebuffer[O]))for(let F=0;F<g.__webglFramebuffer[O].length;F++)i.deleteFramebuffer(g.__webglFramebuffer[O][F]);else i.deleteFramebuffer(g.__webglFramebuffer[O]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[O])}else{if(Array.isArray(g.__webglFramebuffer))for(let O=0;O<g.__webglFramebuffer.length;O++)i.deleteFramebuffer(g.__webglFramebuffer[O]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let O=0;O<g.__webglColorRenderbuffer.length;O++)g.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[O]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let C=x.textures;for(let O=0,F=C.length;O<F;O++){let E=n.get(C[O]);E.__webglTexture&&(i.deleteTexture(E.__webglTexture),o.memory.textures--),n.remove(C[O])}n.remove(x)}let y=0;function T(){y=0}function V(){let x=y;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),y+=1,x}function H(x){let g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function q(x,g){let C=n.get(x);if(x.isVideoTexture&&De(x),x.isRenderTargetTexture===!1&&x.version>0&&C.__version!==x.version){let O=x.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$e(C,x,g);return}}t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+g)}function Q(x,g){let C=n.get(x);if(x.version>0&&C.__version!==x.version){$e(C,x,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+g)}function W(x,g){let C=n.get(x);if(x.version>0&&C.__version!==x.version){$e(C,x,g);return}t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+g)}function ne(x,g){let C=n.get(x);if(x.version>0&&C.__version!==x.version){$(C,x,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+g)}let K={[xi]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Is]:i.MIRRORED_REPEAT},_e={[Lt]:i.NEAREST,[Sl]:i.NEAREST_MIPMAP_NEAREST,[Wi]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Es]:i.LINEAR_MIPMAP_NEAREST,[_n]:i.LINEAR_MIPMAP_LINEAR},he={[$h]:i.NEVER,[nf]:i.ALWAYS,[Jh]:i.LESS,[ju]:i.LEQUAL,[jh]:i.EQUAL,[tf]:i.GEQUAL,[Qh]:i.GREATER,[ef]:i.NOTEQUAL};function ye(x,g){if(g.type===dn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ht||g.magFilter===Es||g.magFilter===Wi||g.magFilter===_n||g.minFilter===Ht||g.minFilter===Es||g.minFilter===Wi||g.minFilter===_n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(x,i.TEXTURE_WRAP_S,K[g.wrapS]),i.texParameteri(x,i.TEXTURE_WRAP_T,K[g.wrapT]),(x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY)&&i.texParameteri(x,i.TEXTURE_WRAP_R,K[g.wrapR]),i.texParameteri(x,i.TEXTURE_MAG_FILTER,_e[g.magFilter]),i.texParameteri(x,i.TEXTURE_MIN_FILTER,_e[g.minFilter]),g.compareFunction&&(i.texParameteri(x,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(x,i.TEXTURE_COMPARE_FUNC,he[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Lt||g.minFilter!==Wi&&g.minFilter!==_n||g.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(x,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ke(x,g){let C=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",N));let O=g.source,F=f.get(O);F===void 0&&(F={},f.set(O,F));let E=H(g);if(E!==x.__cacheKey){F[E]===void 0&&(F[E]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,C=!0),F[E].usedTimes++;let P=F[x.__cacheKey];P!==void 0&&(F[x.__cacheKey].usedTimes--,P.usedTimes===0&&U(g)),x.__cacheKey=E,x.__webglTexture=F[E].texture}return C}function $e(x,g,C){let O=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(O=i.TEXTURE_3D);let F=Ke(x,g),E=g.source;t.bindTexture(O,x.__webglTexture,i.TEXTURE0+C);let P=n.get(E);if(E.version!==P.__version||F===!0){t.activeTexture(i.TEXTURE0+C);let k=Ze.getPrimaries(Ze.workingColorSpace),te=g.colorSpace===Kn?null:Ze.getPrimaries(g.colorSpace),be=g.colorSpace===Kn||k===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ee=M(g.image,!1,s.maxTextureSize);ee=tt(g,ee);let se=r.convert(g.format,g.colorSpace),ve=r.convert(g.type),ce=b(g.internalFormat,se,ve,g.colorSpace,g.isVideoTexture);ye(O,g);let ae,Ee=g.mipmaps,we=g.isVideoTexture!==!0,Te=P.__version===void 0||F===!0,I=E.dataReady,oe=A(g,ee);if(g.isDepthTexture)ce=v(g.format===es,g.type),Te&&(we?t.texStorage2D(i.TEXTURE_2D,1,ce,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ce,ee.width,ee.height,0,se,ve,null));else if(g.isDataTexture)if(Ee.length>0){we&&Te&&t.texStorage2D(i.TEXTURE_2D,oe,ce,Ee[0].width,Ee[0].height);for(let Z=0,j=Ee.length;Z<j;Z++)ae=Ee[Z],we?I&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,se,ve,ae.data):t.texImage2D(i.TEXTURE_2D,Z,ce,ae.width,ae.height,0,se,ve,ae.data);g.generateMipmaps=!1}else we?(Te&&t.texStorage2D(i.TEXTURE_2D,oe,ce,ee.width,ee.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,se,ve,ee.data)):t.texImage2D(i.TEXTURE_2D,0,ce,ee.width,ee.height,0,se,ve,ee.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){we&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,Ee[0].width,Ee[0].height,ee.depth);for(let Z=0,j=Ee.length;Z<j;Z++)if(ae=Ee[Z],g.format!==nn)if(se!==null)if(we){if(I)if(g.layerUpdates.size>0){let fe=vu(ae.width,ae.height,g.format,g.type);for(let ge of g.layerUpdates){let Je=ae.data.subarray(ge*fe/ae.data.BYTES_PER_ELEMENT,(ge+1)*fe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ge,ae.width,ae.height,1,se,Je,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,ee.depth,se,ae.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ce,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,ee.depth,se,ve,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,ce,ae.width,ae.height,ee.depth,0,se,ve,ae.data)}else{we&&Te&&t.texStorage2D(i.TEXTURE_2D,oe,ce,Ee[0].width,Ee[0].height);for(let Z=0,j=Ee.length;Z<j;Z++)ae=Ee[Z],g.format!==nn?se!==null?we?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,se,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,ce,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?I&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,se,ve,ae.data):t.texImage2D(i.TEXTURE_2D,Z,ce,ae.width,ae.height,0,se,ve,ae.data)}else if(g.isDataArrayTexture)if(we){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,ce,ee.width,ee.height,ee.depth),I)if(g.layerUpdates.size>0){let Z=vu(ee.width,ee.height,g.format,g.type);for(let j of g.layerUpdates){let fe=ee.data.subarray(j*Z/ee.data.BYTES_PER_ELEMENT,(j+1)*Z/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ee.width,ee.height,1,se,ve,fe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,se,ve,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,ee.width,ee.height,ee.depth,0,se,ve,ee.data);else if(g.isData3DTexture)we?(Te&&t.texStorage3D(i.TEXTURE_3D,oe,ce,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,se,ve,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ce,ee.width,ee.height,ee.depth,0,se,ve,ee.data);else if(g.isFramebufferTexture){if(Te)if(we)t.texStorage2D(i.TEXTURE_2D,oe,ce,ee.width,ee.height);else{let Z=ee.width,j=ee.height;for(let fe=0;fe<oe;fe++)t.texImage2D(i.TEXTURE_2D,fe,ce,Z,j,0,se,ve,null),Z>>=1,j>>=1}}else if(Ee.length>0){if(we&&Te){let Z=Ne(Ee[0]);t.texStorage2D(i.TEXTURE_2D,oe,ce,Z.width,Z.height)}for(let Z=0,j=Ee.length;Z<j;Z++)ae=Ee[Z],we?I&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,se,ve,ae):t.texImage2D(i.TEXTURE_2D,Z,ce,se,ve,ae);g.generateMipmaps=!1}else if(we){if(Te){let Z=Ne(ee);t.texStorage2D(i.TEXTURE_2D,oe,ce,Z.width,Z.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,ve,ee)}else t.texImage2D(i.TEXTURE_2D,0,ce,se,ve,ee);d(g)&&m(O),P.__version=E.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function $(x,g,C){if(g.image.length!==6)return;let O=Ke(x,g),F=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,x.__webglTexture,i.TEXTURE0+C);let E=n.get(F);if(F.version!==E.__version||O===!0){t.activeTexture(i.TEXTURE0+C);let P=Ze.getPrimaries(Ze.workingColorSpace),k=g.colorSpace===Kn?null:Ze.getPrimaries(g.colorSpace),te=g.colorSpace===Kn||P===k?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let be=g.isCompressedTexture||g.image[0].isCompressedTexture,ee=g.image[0]&&g.image[0].isDataTexture,se=[];for(let j=0;j<6;j++)!be&&!ee?se[j]=M(g.image[j],!0,s.maxCubemapSize):se[j]=ee?g.image[j].image:g.image[j],se[j]=tt(g,se[j]);let ve=se[0],ce=r.convert(g.format,g.colorSpace),ae=r.convert(g.type),Ee=b(g.internalFormat,ce,ae,g.colorSpace),we=g.isVideoTexture!==!0,Te=E.__version===void 0||O===!0,I=F.dataReady,oe=A(g,ve);ye(i.TEXTURE_CUBE_MAP,g);let Z;if(be){we&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ee,ve.width,ve.height);for(let j=0;j<6;j++){Z=se[j].mipmaps;for(let fe=0;fe<Z.length;fe++){let ge=Z[fe];g.format!==nn?ce!==null?we?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,ge.width,ge.height,ce,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Ee,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,ge.width,ge.height,ce,ae,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Ee,ge.width,ge.height,0,ce,ae,ge.data)}}}else{if(Z=g.mipmaps,we&&Te){Z.length>0&&oe++;let j=Ne(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ee,j.width,j.height)}for(let j=0;j<6;j++)if(ee){we?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,se[j].width,se[j].height,ce,ae,se[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ee,se[j].width,se[j].height,0,ce,ae,se[j].data);for(let fe=0;fe<Z.length;fe++){let Je=Z[fe].image[j].image;we?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,Je.width,Je.height,ce,ae,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Ee,Je.width,Je.height,0,ce,ae,Je.data)}}else{we?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ce,ae,se[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ee,ce,ae,se[j]);for(let fe=0;fe<Z.length;fe++){let ge=Z[fe];we?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,ce,ae,ge.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Ee,ce,ae,ge.image[j])}}}d(g)&&m(i.TEXTURE_CUBE_MAP),E.__version=F.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function ie(x,g,C,O,F,E){let P=r.convert(C.format,C.colorSpace),k=r.convert(C.type),te=b(C.internalFormat,P,k,C.colorSpace);if(!n.get(g).__hasExternalTextures){let ee=Math.max(1,g.width>>E),se=Math.max(1,g.height>>E);F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?t.texImage3D(F,E,te,ee,se,g.depth,0,P,k,null):t.texImage2D(F,E,te,ee,se,0,P,k,null)}t.bindFramebuffer(i.FRAMEBUFFER,x),Ye(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,F,n.get(C).__webglTexture,0,We(g)):(F===i.TEXTURE_2D||F>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,F,n.get(C).__webglTexture,E),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(x,g,C){if(i.bindRenderbuffer(i.RENDERBUFFER,x),g.depthBuffer){let O=g.depthTexture,F=O&&O.isDepthTexture?O.type:null,E=v(g.stencilBuffer,F),P=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=We(g);Ye(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k,E,g.width,g.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,k,E,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,E,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,x)}else{let O=g.textures;for(let F=0;F<O.length;F++){let E=O[F],P=r.convert(E.format,E.colorSpace),k=r.convert(E.type),te=b(E.internalFormat,P,k,E.colorSpace),be=We(g);C&&Ye(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,te,g.width,g.height):Ye(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,te,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,te,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q(g.depthTexture,0);let O=n.get(g.depthTexture).__webglTexture,F=We(g);if(g.depthTexture.format===Yi)Ye(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,O,0);else if(g.depthTexture.format===es)Ye(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Fe(x){let g=n.get(x),C=x.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==x.depthTexture){let O=x.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),O){let F=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,O.removeEventListener("dispose",F)};O.addEventListener("dispose",F),g.__depthDisposeCallback=F}g.__boundDepthTexture=O}if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");ue(g.__webglFramebuffer,x)}else if(C){g.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[O]),g.__webglDepthbuffer[O]===void 0)g.__webglDepthbuffer[O]=i.createRenderbuffer(),me(g.__webglDepthbuffer[O],x,!1);else{let F=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,E=g.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,E),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,E)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),me(g.__webglDepthbuffer,x,!1);else{let O=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,F)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(x,g,C){let O=n.get(x);g!==void 0&&ie(O.__webglFramebuffer,x,x.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&Fe(x)}function Xe(x){let g=x.texture,C=n.get(x),O=n.get(g);x.addEventListener("dispose",R);let F=x.textures,E=x.isWebGLCubeRenderTarget===!0,P=F.length>1;if(P||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=g.version,o.memory.textures++),E){C.__webglFramebuffer=[];for(let k=0;k<6;k++)if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer[k]=[];for(let te=0;te<g.mipmaps.length;te++)C.__webglFramebuffer[k][te]=i.createFramebuffer()}else C.__webglFramebuffer[k]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){C.__webglFramebuffer=[];for(let k=0;k<g.mipmaps.length;k++)C.__webglFramebuffer[k]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(P)for(let k=0,te=F.length;k<te;k++){let be=n.get(F[k]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(x.samples>0&&Ye(x)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let k=0;k<F.length;k++){let te=F[k];C.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[k]);let be=r.convert(te.format,te.colorSpace),ee=r.convert(te.type),se=b(te.internalFormat,be,ee,te.colorSpace,x.isXRRenderTarget===!0),ve=We(x);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,se,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,C.__webglColorRenderbuffer[k])}i.bindRenderbuffer(i.RENDERBUFFER,null),x.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),me(C.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(E){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),ye(i.TEXTURE_CUBE_MAP,g);for(let k=0;k<6;k++)if(g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)ie(C.__webglFramebuffer[k][te],x,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,te);else ie(C.__webglFramebuffer[k],x,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);d(g)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(P){for(let k=0,te=F.length;k<te;k++){let be=F[k],ee=n.get(be);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),ye(i.TEXTURE_2D,be),ie(C.__webglFramebuffer,x,be,i.COLOR_ATTACHMENT0+k,i.TEXTURE_2D,0),d(be)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let k=i.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(k=x.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(k,O.__webglTexture),ye(k,g),g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)ie(C.__webglFramebuffer[te],x,g,i.COLOR_ATTACHMENT0,k,te);else ie(C.__webglFramebuffer,x,g,i.COLOR_ATTACHMENT0,k,0);d(g)&&m(k),t.unbindTexture()}x.depthBuffer&&Fe(x)}function et(x){let g=x.textures;for(let C=0,O=g.length;C<O;C++){let F=g[C];if(d(F)){let E=x.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,P=n.get(F).__webglTexture;t.bindTexture(E,P),m(E),t.unbindTexture()}}}let qe=[],D=[];function Ut(x){if(x.samples>0){if(Ye(x)===!1){let g=x.textures,C=x.width,O=x.height,F=i.COLOR_BUFFER_BIT,E=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=n.get(x),k=g.length>1;if(k)for(let te=0;te<g.length;te++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,P.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,P.__webglFramebuffer);for(let te=0;te<g.length;te++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(F|=i.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(F|=i.STENCIL_BUFFER_BIT)),k){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,P.__webglColorRenderbuffer[te]);let be=n.get(g[te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,C,O,0,0,C,O,F,i.NEAREST),l===!0&&(qe.length=0,D.length=0,qe.push(i.COLOR_ATTACHMENT0+te),x.depthBuffer&&x.resolveDepthBuffer===!1&&(qe.push(E),D.push(E),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),k)for(let te=0;te<g.length;te++){t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,P.__webglColorRenderbuffer[te]);let be=n.get(g[te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,P.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let g=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function We(x){return Math.min(s.maxSamples,x.samples)}function Ye(x){let g=n.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function De(x){let g=o.render.frame;u.get(x)!==g&&(u.set(x,g),x.update())}function tt(x,g){let C=x.colorSpace,O=x.format,F=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||C!==Et&&C!==Kn&&(Ze.getTransfer(C)===ot?(O!==nn||F!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),g}function Ne(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=T,this.setTexture2D=q,this.setTexture2DArray=Q,this.setTexture3D=W,this.setTextureCube=ne,this.rebindTextures=Le,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ye}function u0(i,e){function t(n,s=Kn){let r,o=Ze.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hu)return i.BYTE;if(n===Vu)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===bl)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===mn)return i.HALF_FLOAT;if(n===Wu)return i.ALPHA;if(n===Xu)return i.RGB;if(n===nn)return i.RGBA;if(n===qu)return i.LUMINANCE;if(n===Yu)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===El)return i.RED;if(n===wl)return i.RED_INTEGER;if(n===Zu)return i.RG;if(n===Rl)return i.RG_INTEGER;if(n===Cl)return i.RGBA_INTEGER;if(n===br||n===Tr||n===Ar||n===Er)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===_a||n===va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===ya||n===Ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===ya)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sa||n===ba||n===Ta||n===Aa||n===Ea||n===wa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Da||n===Ua||n===Na)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wr||n===Oa||n===Fa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wr)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ku||n===Ba||n===za||n===ka)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var tl=class extends xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Vt=class extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},h0={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let M of e.hand.values()){let d=t.getJointPose(M,n),m=this._getHandJoint(c,M);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},f0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Tt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ct({vertexShader:f0,fragmentShader:d0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},il=class extends jn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null,M=new nl,d=t.getContextAttributes(),m=null,b=null,v=[],A=[],N=new Ce,R=null,w=new xt;w.layers.enable(1),w.viewport=new Qe;let U=new xt;U.layers.enable(2),U.viewport=new Qe;let Y=[w,U],y=new tl;y.layers.enable(1),y.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=v[$];return ie===void 0&&(ie=new Cs,v[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=v[$];return ie===void 0&&(ie=new Cs,v[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=v[$];return ie===void 0&&(ie=new Cs,v[$]=ie),ie.getHandSpace()};function H($){let ie=A.indexOf($.inputSource);if(ie===-1)return;let me=v[ie];me!==void 0&&(me.update($.inputSource,$.frame,c||o),me.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Q);for(let $=0;$<v.length;$++){let ie=A[$];ie!==null&&(A[$]=null,v[$].disconnect(ie))}T=null,V=null,M.reset(),e.setRenderTarget(m),p=null,f=null,h=null,s=null,b=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Q),d.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0){let ie={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Bt(p.framebufferWidth,p.framebufferHeight,{format:nn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let ie=null,me=null,ue=null;d.depth&&(ue=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=d.stencil?es:Yi,me=d.stencil?Qi:yi);let Fe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Bt(f.textureWidth,f.textureHeight,{format:nn,type:Dn,depthTexture:new kr(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q($){for(let ie=0;ie<$.removed.length;ie++){let me=$.removed[ie],ue=A.indexOf(me);ue>=0&&(A[ue]=null,v[ue].disconnect(me))}for(let ie=0;ie<$.added.length;ie++){let me=$.added[ie],ue=A.indexOf(me);if(ue===-1){for(let Le=0;Le<v.length;Le++)if(Le>=A.length){A.push(me),ue=Le;break}else if(A[Le]===null){A[Le]=me,ue=Le;break}if(ue===-1)break}let Fe=v[ue];Fe&&Fe.connect(me)}}let W=new L,ne=new L;function K($,ie,me){W.setFromMatrixPosition(ie.matrixWorld),ne.setFromMatrixPosition(me.matrixWorld);let ue=W.distanceTo(ne),Fe=ie.projectionMatrix.elements,Le=me.projectionMatrix.elements,Xe=Fe[14]/(Fe[10]-1),et=Fe[14]/(Fe[10]+1),qe=(Fe[9]+1)/Fe[5],D=(Fe[9]-1)/Fe[5],Ut=(Fe[8]-1)/Fe[0],We=(Le[8]+1)/Le[0],Ye=Xe*Ut,De=Xe*We,tt=ue/(-Ut+We),Ne=tt*-Ut;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ne),$.translateZ(tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Fe[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let x=Xe+tt,g=et+tt,C=Ye-Ne,O=De+(ue-Ne),F=qe*et/g*x,E=D*et/g*x;$.projectionMatrix.makePerspective(C,O,F,E,x,g),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function _e($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ie=$.near,me=$.far;M.texture!==null&&(M.depthNear>0&&(ie=M.depthNear),M.depthFar>0&&(me=M.depthFar)),y.near=U.near=w.near=ie,y.far=U.far=w.far=me,(T!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,V=y.far);let ue=$.parent,Fe=y.cameras;_e(y,ue);for(let Le=0;Le<Fe.length;Le++)_e(Fe[Le],ue);Fe.length===2?K(y,w,U):y.projectionMatrix.copy(w.projectionMatrix),he($,y,ue)};function he($,ie,me){me===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=is*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let ye=null;function Ke($,ie){if(u=ie.getViewerPose(c||o),_=ie,u!==null){let me=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let ue=!1;me.length!==y.cameras.length&&(y.cameras.length=0,ue=!0);for(let Le=0;Le<me.length;Le++){let Xe=me[Le],et=null;if(p!==null)et=p.getViewport(Xe);else{let D=h.getViewSubImage(f,Xe);et=D.viewport,Le===0&&(e.setRenderTargetTextures(b,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(b))}let qe=Y[Le];qe===void 0&&(qe=new xt,qe.layers.enable(Le),qe.viewport=new Qe,Y[Le]=qe),qe.matrix.fromArray(Xe.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Xe.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(et.x,et.y,et.width,et.height),Le===0&&(y.matrix.copy(qe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ue===!0&&y.cameras.push(qe)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){let Le=h.getDepthInformation(me[0]);Le&&Le.isValid&&Le.texture&&M.init(e,Le,s.renderState)}}for(let me=0;me<v.length;me++){let ue=A[me],Fe=v[me];ue!==null&&Fe!==void 0&&Fe.update(ue,ie,c||o)}ye&&ye($,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),_=null}let $e=new ih;$e.setAnimationLoop(Ke),this.setAnimationLoop=function($){ye=$},this.dispose=function(){}}},pi=new Mn,p0=new Be;function m0(i,e){function t(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,nh(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,b,v,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),h(d,m)):m.isMeshPhongMaterial?(r(d,m),u(d,m)):m.isMeshStandardMaterial?(r(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,A)):m.isMeshMatcapMaterial?(r(d,m),_(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),M(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(o(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?l(d,m,b,v):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,t(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===bt&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,t(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===bt&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,t(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,t(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let b=e.get(m),v=b.envMap,A=b.envMapRotation;v&&(d.envMap.value=v,pi.copy(A),pi.x*=-1,pi.y*=-1,pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),d.envMapRotation.value.setFromMatrix4(p0.makeRotationFromEuler(pi)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,d.aoMapTransform))}function o(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform))}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,b,v){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*b,d.scale.value=v*.5,m.map&&(d.map.value=m.map,t(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function h(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,b){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bt&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,m){m.matcap&&(d.matcap.value=m.matcap)}function M(d,m){let b=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function g0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let A=v.program;n.uniformBlockBinding(b,A)}function c(b,v){let A=s[b.id];A===void 0&&(_(b),A=u(b),s[b.id]=A,b.addEventListener("dispose",d));let N=v.program;n.updateUBOMapping(b,N);let R=e.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function u(b){let v=h();b.__bindingPointIndex=v;let A=i.createBuffer(),N=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,N,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=s[b.id],A=b.uniforms,N=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,w=A.length;R<w;R++){let U=Array.isArray(A[R])?A[R]:[A[R]];for(let Y=0,y=U.length;Y<y;Y++){let T=U[Y];if(p(T,R,Y,N)===!0){let V=T.__offset,H=Array.isArray(T.value)?T.value:[T.value],q=0;for(let Q=0;Q<H.length;Q++){let W=H[Q],ne=M(W);typeof W=="number"||typeof W=="boolean"?(T.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,V+q,T.__data)):W.isMatrix3?(T.__data[0]=W.elements[0],T.__data[1]=W.elements[1],T.__data[2]=W.elements[2],T.__data[3]=0,T.__data[4]=W.elements[3],T.__data[5]=W.elements[4],T.__data[6]=W.elements[5],T.__data[7]=0,T.__data[8]=W.elements[6],T.__data[9]=W.elements[7],T.__data[10]=W.elements[8],T.__data[11]=0):(W.toArray(T.__data,q),q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,v,A,N){let R=b.value,w=v+"_"+A;if(N[w]===void 0)return typeof R=="number"||typeof R=="boolean"?N[w]=R:N[w]=R.clone(),!0;{let U=N[w];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return N[w]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function _(b){let v=b.uniforms,A=0,N=16;for(let w=0,U=v.length;w<U;w++){let Y=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,T=Y.length;y<T;y++){let V=Y[y],H=Array.isArray(V.value)?V.value:[V.value];for(let q=0,Q=H.length;q<Q;q++){let W=H[q],ne=M(W),K=A%N,_e=K%ne.boundary,he=K+_e;A+=_e,he!==0&&N-he<ne.storage&&(A+=N-he),V.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=A,A+=ne.storage}}}let R=A%N;return R>0&&(A+=N-R),b.__size=A,b.__cache={},this}function M(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function d(b){let v=b.target;v.removeEventListener("dispose",d);let A=o.indexOf(v.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var Hr=class{constructor(e={}){let{canvas:t=yf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let p=new Uint32Array(4),_=new Int32Array(4),M=null,d=null,m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=Jn,this.toneMappingExposure=1;let v=this,A=!1,N=0,R=0,w=null,U=-1,Y=null,y=new Qe,T=new Qe,V=null,H=new pe(0),q=0,Q=t.width,W=t.height,ne=1,K=null,_e=null,he=new Qe(0,0,Q,W),ye=new Qe(0,0,Q,W),Ke=!1,$e=new Ds,$=!1,ie=!1,me=new Be,ue=new Be,Fe=new L,Le=new Qe,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function qe(){return w===null?ne:1}let D=n;function Ut(S,B){return t.getContext(S,B)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),D===null){let B="webgl2";if(D=Ut(B,S),D===null)throw Ut(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let We,Ye,De,tt,Ne,x,g,C,O,F,E,P,k,te,be,ee,se,ve,ce,ae,Ee,we,Te,I;function oe(){We=new Lm(D),We.init(),we=new u0(D,We),Ye=new Em(D,We,e,we),De=new a0(D),Ye.reverseDepthBuffer&&De.buffers.depth.setReversed(!0),tt=new Nm(D),Ne=new Zg,x=new c0(D,We,De,Ne,Ye,we,tt),g=new Rm(v),C=new Pm(v),O=new Vf(D),Te=new Tm(D,O),F=new Dm(D,O,tt,Te),E=new Fm(D,F,O,tt),ce=new Om(D,Ye,x),ee=new wm(Ne),P=new Yg(v,g,C,We,Ye,Te,ee),k=new m0(v,Ne),te=new $g,be=new n0(We),ve=new bm(v,g,C,De,E,f,l),se=new r0(v,E,Ye),I=new g0(D,tt,Ye,De),ae=new Am(D,We,tt),Ee=new Um(D,We,tt),tt.programs=P.programs,v.capabilities=Ye,v.extensions=We,v.properties=Ne,v.renderLists=te,v.shadowMap=se,v.state=De,v.info=tt}oe();let Z=new il(v,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let S=We.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=We.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(Q,W,!1))},this.getSize=function(S){return S.set(Q,W)},this.setSize=function(S,B,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=S,W=B,t.width=Math.floor(S*ne),t.height=Math.floor(B*ne),G===!0&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(Q*ne,W*ne).floor()},this.setDrawingBufferSize=function(S,B,G){Q=S,W=B,ne=G,t.width=Math.floor(S*G),t.height=Math.floor(B*G),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(he)},this.setViewport=function(S,B,G,X){S.isVector4?he.set(S.x,S.y,S.z,S.w):he.set(S,B,G,X),De.viewport(y.copy(he).multiplyScalar(ne).round())},this.getScissor=function(S){return S.copy(ye)},this.setScissor=function(S,B,G,X){S.isVector4?ye.set(S.x,S.y,S.z,S.w):ye.set(S,B,G,X),De.scissor(T.copy(ye).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){De.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){K=S},this.setTransparentSort=function(S){_e=S},this.getClearColor=function(S){return S.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(S=!0,B=!0,G=!0){let X=0;if(S){let z=!1;if(w!==null){let re=w.texture.format;z=re===Cl||re===Rl||re===wl}if(z){let re=w.texture.type,de=re===Dn||re===yi||re===Ps||re===Qi||re===Tl||re===Al,Se=ve.getClearColor(),Ae=ve.getClearAlpha(),Ue=Se.r,Oe=Se.g,Re=Se.b;de?(p[0]=Ue,p[1]=Oe,p[2]=Re,p[3]=Ae,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Ue,_[1]=Oe,_[2]=Re,_[3]=Ae,D.clearBufferiv(D.COLOR,0,_))}else X|=D.COLOR_BUFFER_BIT}B&&(X|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),te.dispose(),be.dispose(),Ne.dispose(),g.dispose(),C.dispose(),E.dispose(),Te.dispose(),I.dispose(),P.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",mc),Z.removeEventListener("sessionend",gc),li.stop()};function j(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=tt.autoReset,B=se.enabled,G=se.autoUpdate,X=se.needsUpdate,z=se.type;oe(),tt.autoReset=S,se.enabled=B,se.autoUpdate=G,se.needsUpdate=X,se.type=z}function ge(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Je(S){let B=S.target;B.removeEventListener("dispose",Je),_t(B)}function _t(S){zt(S),Ne.remove(S)}function zt(S){let B=Ne.get(S).programs;B!==void 0&&(B.forEach(function(G){P.releaseProgram(G)}),S.isShaderMaterial&&P.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,G,X,z,re){B===null&&(B=Xe);let de=z.isMesh&&z.matrixWorld.determinant()<0,Se=_h(S,B,G,X,z);De.setMaterial(X,de);let Ae=G.index,Ue=1;if(X.wireframe===!0){if(Ae=F.getWireframeAttribute(G),Ae===void 0)return;Ue=2}let Oe=G.drawRange,Re=G.attributes.position,st=Oe.start*Ue,ut=(Oe.start+Oe.count)*Ue;re!==null&&(st=Math.max(st,re.start*Ue),ut=Math.min(ut,(re.start+re.count)*Ue)),Ae!==null?(st=Math.max(st,0),ut=Math.min(ut,Ae.count)):Re!=null&&(st=Math.max(st,0),ut=Math.min(ut,Re.count));let dt=ut-st;if(dt<0||dt===1/0)return;Te.setup(z,X,Se,G,Ae);let Wt,nt=ae;if(Ae!==null&&(Wt=O.get(Ae),nt=Ee,nt.setIndex(Wt)),z.isMesh)X.wireframe===!0?(De.setLineWidth(X.wireframeLinewidth*qe()),nt.setMode(D.LINES)):nt.setMode(D.TRIANGLES);else if(z.isLine){let Ie=X.linewidth;Ie===void 0&&(Ie=1),De.setLineWidth(Ie*qe()),z.isLineSegments?nt.setMode(D.LINES):z.isLineLoop?nt.setMode(D.LINE_LOOP):nt.setMode(D.LINE_STRIP)}else z.isPoints?nt.setMode(D.POINTS):z.isSprite&&nt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)nt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ie=z._multiDrawStarts,wt=z._multiDrawCounts,it=z._multiDrawCount,ln=Ae?O.get(Ae).bytesPerElement:1,Ri=Ne.get(X).currentProgram.getUniforms();for(let Xt=0;Xt<it;Xt++)Ri.setValue(D,"_gl_DrawID",Xt),nt.render(Ie[Xt]/ln,wt[Xt])}else if(z.isInstancedMesh)nt.renderInstances(st,dt,z.count);else if(G.isInstancedBufferGeometry){let Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,wt=Math.min(G.instanceCount,Ie);nt.renderInstances(st,dt,wt)}else nt.render(st,dt)};function je(S,B,G){S.transparent===!0&&S.side===Ft&&S.forceSinglePass===!1?(S.side=bt,S.needsUpdate=!0,Ks(S,B,G),S.side=xn,S.needsUpdate=!0,Ks(S,B,G),S.side=Ft):Ks(S,B,G)}this.compile=function(S,B,G=null){G===null&&(G=S),d=be.get(G),d.init(B),b.push(d),G.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),S!==G&&S.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();let X=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let re=z.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){let Se=re[de];je(Se,G,z),X.add(Se)}else je(re,G,z),X.add(re)}),b.pop(),d=null,X},this.compileAsync=function(S,B,G=null){let X=this.compile(S,B,G);return new Promise(z=>{function re(){if(X.forEach(function(de){Ne.get(de).currentProgram.isReady()&&X.delete(de)}),X.size===0){z(S);return}setTimeout(re,10)}We.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let kt=null;function Sn(S){kt&&kt(S)}function mc(){li.stop()}function gc(){li.start()}let li=new ih;li.setAnimationLoop(Sn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(S){kt=S,Z.setAnimationLoop(S),S===null?li.stop():li.start()},Z.addEventListener("sessionstart",mc),Z.addEventListener("sessionend",gc),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,B,w),d=be.get(S,b.length),d.init(B),b.push(d),ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$e.setFromProjectionMatrix(ue),ie=this.localClippingEnabled,$=ee.init(this.clippingPlanes,ie),M=te.get(S,m.length),M.init(),m.push(M),Z.enabled===!0&&Z.isPresenting===!0){let re=v.xr.getDepthSensingMesh();re!==null&&Mo(re,B,-1/0,v.sortObjects)}Mo(S,B,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(K,_e),et=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,et&&ve.addToRenderList(M,S),this.info.render.frame++,$===!0&&ee.beginShadows();let G=d.state.shadowsArray;se.render(G,S,B),$===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=M.opaque,z=M.transmissive;if(d.setupLights(),B.isArrayCamera){let re=B.cameras;if(z.length>0)for(let de=0,Se=re.length;de<Se;de++){let Ae=re[de];vc(X,z,S,Ae)}et&&ve.render(S);for(let de=0,Se=re.length;de<Se;de++){let Ae=re[de];_c(M,S,Ae,Ae.viewport)}}else z.length>0&&vc(X,z,S,B),et&&ve.render(S),_c(M,S,B);w!==null&&(x.updateMultisampleRenderTarget(w),x.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(v,S,B),Te.resetDefaultState(),U=-1,Y=null,b.pop(),b.length>0?(d=b[b.length-1],$===!0&&ee.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,m.pop(),m.length>0?M=m[m.length-1]:M=null};function Mo(S,B,G,X){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$e.intersectsSprite(S)){X&&Le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ue);let de=E.update(S),Se=S.material;Se.visible&&M.push(S,de,Se,G,Le.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$e.intersectsObject(S))){let de=E.update(S),Se=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Le.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Le.copy(de.boundingSphere.center)),Le.applyMatrix4(S.matrixWorld).applyMatrix4(ue)),Array.isArray(Se)){let Ae=de.groups;for(let Ue=0,Oe=Ae.length;Ue<Oe;Ue++){let Re=Ae[Ue],st=Se[Re.materialIndex];st&&st.visible&&M.push(S,de,st,G,Le.z,Re)}}else Se.visible&&M.push(S,de,Se,G,Le.z,null)}}let re=S.children;for(let de=0,Se=re.length;de<Se;de++)Mo(re[de],B,G,X)}function _c(S,B,G,X){let z=S.opaque,re=S.transmissive,de=S.transparent;d.setupLightsView(G),$===!0&&ee.setGlobalState(v.clippingPlanes,G),X&&De.viewport(y.copy(X)),z.length>0&&Zs(z,B,G),re.length>0&&Zs(re,B,G),de.length>0&&Zs(de,B,G),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function vc(S,B,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new Bt(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?mn:Dn,minFilter:_n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let re=d.state.transmissionRenderTarget[X.id],de=X.viewport||y;re.setSize(de.z,de.w);let Se=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(H),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),et&&ve.render(G);let Ae=v.toneMapping;v.toneMapping=Jn;let Ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),$===!0&&ee.setGlobalState(v.clippingPlanes,X),Zs(S,G,X),x.updateMultisampleRenderTarget(re),x.updateRenderTargetMipmap(re),We.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Re=0,st=B.length;Re<st;Re++){let ut=B[Re],dt=ut.object,Wt=ut.geometry,nt=ut.material,Ie=ut.group;if(nt.side===Ft&&dt.layers.test(X.layers)){let wt=nt.side;nt.side=bt,nt.needsUpdate=!0,xc(dt,G,X,Wt,nt,Ie),nt.side=wt,nt.needsUpdate=!0,Oe=!0}}Oe===!0&&(x.updateMultisampleRenderTarget(re),x.updateRenderTargetMipmap(re))}v.setRenderTarget(Se),v.setClearColor(H,q),Ue!==void 0&&(X.viewport=Ue),v.toneMapping=Ae}function Zs(S,B,G){let X=B.isScene===!0?B.overrideMaterial:null;for(let z=0,re=S.length;z<re;z++){let de=S[z],Se=de.object,Ae=de.geometry,Ue=X===null?de.material:X,Oe=de.group;Se.layers.test(G.layers)&&xc(Se,B,G,Ae,Ue,Oe)}}function xc(S,B,G,X,z,re){S.onBeforeRender(v,B,G,X,z,re),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(v,B,G,X,S,re),z.transparent===!0&&z.side===Ft&&z.forceSinglePass===!1?(z.side=bt,z.needsUpdate=!0,v.renderBufferDirect(G,B,X,z,S,re),z.side=xn,z.needsUpdate=!0,v.renderBufferDirect(G,B,X,z,S,re),z.side=Ft):v.renderBufferDirect(G,B,X,z,S,re),S.onAfterRender(v,B,G,X,z,re)}function Ks(S,B,G){B.isScene!==!0&&(B=Xe);let X=Ne.get(S),z=d.state.lights,re=d.state.shadowsArray,de=z.state.version,Se=P.getParameters(S,z.state,re,B,G),Ae=P.getProgramCacheKey(Se),Ue=X.programs;X.environment=S.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(S.isMeshStandardMaterial?C:g).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Ue===void 0&&(S.addEventListener("dispose",Je),Ue=new Map,X.programs=Ue);let Oe=Ue.get(Ae);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===de)return Mc(S,Se),Oe}else Se.uniforms=P.getUniforms(S),S.onBeforeCompile(Se,v),Oe=P.acquireProgram(Se,Ae),Ue.set(Ae,Oe),X.uniforms=Se.uniforms;let Re=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Re.clippingPlanes=ee.uniform),Mc(S,Se),X.needsLights=xh(S),X.lightsStateVersion=de,X.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMap.value=z.state.directionalShadowMap,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotShadowMap.value=z.state.spotShadowMap,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMap.value=z.state.pointShadowMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function yc(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=Ki.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Mc(S,B){let G=Ne.get(S);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function _h(S,B,G,X,z){B.isScene!==!0&&(B=Xe),x.resetTextureUnits();let re=B.fog,de=X.isMeshStandardMaterial?B.environment:null,Se=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Et,Ae=(X.isMeshStandardMaterial?C:g).get(X.envMap||de),Ue=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!G.morphAttributes.position,st=!!G.morphAttributes.normal,ut=!!G.morphAttributes.color,dt=Jn;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(dt=v.toneMapping);let Wt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,nt=Wt!==void 0?Wt.length:0,Ie=Ne.get(X),wt=d.state.lights;if($===!0&&(ie===!0||S!==Y)){let en=S===Y&&X.id===U;ee.setState(X,S,en)}let it=!1;X.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==wt.state.version||Ie.outputColorSpace!==Se||z.isBatchedMesh&&Ie.batching===!1||!z.isBatchedMesh&&Ie.batching===!0||z.isBatchedMesh&&Ie.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ie.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ie.instancing===!1||!z.isInstancedMesh&&Ie.instancing===!0||z.isSkinnedMesh&&Ie.skinning===!1||!z.isSkinnedMesh&&Ie.skinning===!0||z.isInstancedMesh&&Ie.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ie.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ie.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ie.instancingMorph===!1&&z.morphTexture!==null||Ie.envMap!==Ae||X.fog===!0&&Ie.fog!==re||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ee.numPlanes||Ie.numIntersection!==ee.numIntersection)||Ie.vertexAlphas!==Ue||Ie.vertexTangents!==Oe||Ie.morphTargets!==Re||Ie.morphNormals!==st||Ie.morphColors!==ut||Ie.toneMapping!==dt||Ie.morphTargetsCount!==nt)&&(it=!0):(it=!0,Ie.__version=X.version);let ln=Ie.currentProgram;it===!0&&(ln=Ks(X,B,z));let Ri=!1,Xt=!1,So=!1,mt=ln.getUniforms(),Vn=Ie.uniforms;if(De.useProgram(ln.program)&&(Ri=!0,Xt=!0,So=!0),X.id!==U&&(U=X.id,Xt=!0),Ri||Y!==S){Ye.reverseDepthBuffer?(me.copy(S.projectionMatrix),Sf(me),bf(me),mt.setValue(D,"projectionMatrix",me)):mt.setValue(D,"projectionMatrix",S.projectionMatrix),mt.setValue(D,"viewMatrix",S.matrixWorldInverse);let en=mt.map.cameraPosition;en!==void 0&&en.setValue(D,Fe.setFromMatrixPosition(S.matrixWorld)),Ye.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&mt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,Xt=!0,So=!0)}if(z.isSkinnedMesh){mt.setOptional(D,z,"bindMatrix"),mt.setOptional(D,z,"bindMatrixInverse");let en=z.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),mt.setValue(D,"boneTexture",en.boneTexture,x))}z.isBatchedMesh&&(mt.setOptional(D,z,"batchingTexture"),mt.setValue(D,"batchingTexture",z._matricesTexture,x),mt.setOptional(D,z,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",z._indirectTexture,x),mt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",z._colorsTexture,x));let bo=G.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0)&&ce.update(z,G,ln),(Xt||Ie.receiveShadow!==z.receiveShadow)&&(Ie.receiveShadow=z.receiveShadow,mt.setValue(D,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Vn.envMap.value=Ae,Vn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(Vn.envMapIntensity.value=B.environmentIntensity),Xt&&(mt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&vh(Vn,So),re&&X.fog===!0&&k.refreshFogUniforms(Vn,re),k.refreshMaterialUniforms(Vn,X,ne,W,d.state.transmissionRenderTarget[S.id]),Ki.upload(D,yc(Ie),Vn,x)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ki.upload(D,yc(Ie),Vn,x),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&mt.setValue(D,"center",z.center),mt.setValue(D,"modelViewMatrix",z.modelViewMatrix),mt.setValue(D,"normalMatrix",z.normalMatrix),mt.setValue(D,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let en=X.uniformsGroups;for(let To=0,yh=en.length;To<yh;To++){let Sc=en[To];I.update(Sc,ln),I.bind(Sc,ln)}}return ln}function vh(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function xh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,B,G){Ne.get(S.texture).__webglTexture=B,Ne.get(S.depthTexture).__webglTexture=G;let X=Ne.get(S);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,B){let G=Ne.get(S);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,G=0){w=S,N=B,R=G;let X=!0,z=null,re=!1,de=!1;if(S){let Ae=Ne.get(S);if(Ae.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(Ae.__webglFramebuffer===void 0)x.setupRenderTarget(S);else if(Ae.__hasExternalTextures)x.rebindTextures(S,Ne.get(S.texture).__webglTexture,Ne.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Re=S.depthTexture;if(Ae.__boundDepthTexture!==Re){if(Re!==null&&Ne.has(Re)&&(S.width!==Re.image.width||S.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(S)}}let Ue=S.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(de=!0);let Oe=Ne.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?z=Oe[B][G]:z=Oe[B],re=!0):S.samples>0&&x.useMultisampledRTT(S)===!1?z=Ne.get(S).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[G]:z=Oe,y.copy(S.viewport),T.copy(S.scissor),V=S.scissorTest}else y.copy(he).multiplyScalar(ne).floor(),T.copy(ye).multiplyScalar(ne).floor(),V=Ke;if(De.bindFramebuffer(D.FRAMEBUFFER,z)&&X&&De.drawBuffers(S,z),De.viewport(y),De.scissor(T),De.setScissorTest(V),re){let Ae=Ne.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,G)}else if(de){let Ae=Ne.get(S.texture),Ue=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.__webglTexture,G||0,Ue)}U=-1},this.readRenderTargetPixels=function(S,B,G,X,z,re,de){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&de!==void 0&&(Se=Se[de]),Se){De.bindFramebuffer(D.FRAMEBUFFER,Se);try{let Ae=S.texture,Ue=Ae.format,Oe=Ae.type;if(!Ye.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-X&&G>=0&&G<=S.height-z&&D.readPixels(B,G,X,z,we.convert(Ue),we.convert(Oe),re)}finally{let Ae=w!==null?Ne.get(w).__webglFramebuffer:null;De.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(S,B,G,X,z,re,de){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ne.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&de!==void 0&&(Se=Se[de]),Se){let Ae=S.texture,Ue=Ae.format,Oe=Ae.type;if(!Ye.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=S.width-X&&G>=0&&G<=S.height-z){De.bindFramebuffer(D.FRAMEBUFFER,Se);let Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),D.readPixels(B,G,X,z,we.convert(Ue),we.convert(Oe),0);let st=w!==null?Ne.get(w).__webglFramebuffer:null;De.bindFramebuffer(D.FRAMEBUFFER,st);let ut=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Mf(D,ut,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.deleteBuffer(Re),D.deleteSync(ut),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,B=null,G=0){S.isTexture!==!0&&(Rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1]);let X=Math.pow(2,-G),z=Math.floor(S.image.width*X),re=Math.floor(S.image.height*X),de=B!==null?B.x:0,Se=B!==null?B.y:0;x.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,de,Se,z,re),De.unbindTexture()},this.copyTextureToTexture=function(S,B,G=null,X=null,z=0){S.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,S=arguments[1],B=arguments[2],z=arguments[3]||0,G=null);let re,de,Se,Ae,Ue,Oe;G!==null?(re=G.max.x-G.min.x,de=G.max.y-G.min.y,Se=G.min.x,Ae=G.min.y):(re=S.image.width,de=S.image.height,Se=0,Ae=0),X!==null?(Ue=X.x,Oe=X.y):(Ue=0,Oe=0);let Re=we.convert(B.format),st=we.convert(B.type);x.setTexture2D(B,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let ut=D.getParameter(D.UNPACK_ROW_LENGTH),dt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Wt=D.getParameter(D.UNPACK_SKIP_PIXELS),nt=D.getParameter(D.UNPACK_SKIP_ROWS),Ie=D.getParameter(D.UNPACK_SKIP_IMAGES),wt=S.isCompressedTexture?S.mipmaps[z]:S.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Ue,Oe,re,de,Re,st,wt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Ue,Oe,wt.width,wt.height,Re,wt.data):D.texSubImage2D(D.TEXTURE_2D,z,Ue,Oe,re,de,Re,st,wt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Wt),D.pixelStorei(D.UNPACK_SKIP_ROWS,nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie),z===0&&B.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(S,B,G=null,X=null,z=0){S.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,S=arguments[2],B=arguments[3],z=arguments[4]||0);let re,de,Se,Ae,Ue,Oe,Re,st,ut,dt=S.isCompressedTexture?S.mipmaps[z]:S.image;G!==null?(re=G.max.x-G.min.x,de=G.max.y-G.min.y,Se=G.max.z-G.min.z,Ae=G.min.x,Ue=G.min.y,Oe=G.min.z):(re=dt.width,de=dt.height,Se=dt.depth,Ae=0,Ue=0,Oe=0),X!==null?(Re=X.x,st=X.y,ut=X.z):(Re=0,st=0,ut=0);let Wt=we.convert(B.format),nt=we.convert(B.type),Ie;if(B.isData3DTexture)x.setTexture3D(B,0),Ie=D.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)x.setTexture2DArray(B,0),Ie=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let wt=D.getParameter(D.UNPACK_ROW_LENGTH),it=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ln=D.getParameter(D.UNPACK_SKIP_PIXELS),Ri=D.getParameter(D.UNPACK_SKIP_ROWS),Xt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Oe),S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Ie,z,Re,st,ut,re,de,Se,Wt,nt,dt.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ie,z,Re,st,ut,re,de,Se,Wt,dt.data):D.texSubImage3D(Ie,z,Re,st,ut,re,de,Se,Wt,nt,dt),D.pixelStorei(D.UNPACK_ROW_LENGTH,wt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ln),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ri),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xt),z===0&&B.generateMipmaps&&D.generateMipmap(Ie),De.unbindTexture()},this.initRenderTarget=function(S){Ne.get(S).__webglFramebuffer===void 0&&x.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),De.unbindTexture()},this.resetState=function(){N=0,R=0,w=null,De.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Il?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===lo?"display-p3":"srgb"}},Vr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var as=class extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Us=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ha,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nt=new L,Ns=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var xu=new L,yu=new Qe,Mu=new Qe,_0=new L,Su=new Be,gr=new L,Qo=new Kt,bu=new Be,ea=new ss,Gr=class extends He{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ec,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,gr),this.boundingBox.expandByPoint(gr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,gr),this.boundingSphere.expandByPoint(gr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qo.copy(this.boundingSphere),Qo.applyMatrix4(s),e.ray.intersectsSphere(Qo)!==!1&&(bu.copy(s).invert(),ea.copy(e.ray).applyMatrix4(bu),!(this.boundingBox!==null&&ea.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ea)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ec?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;yu.fromBufferAttribute(s.attributes.skinIndex,e),Mu.fromBufferAttribute(s.attributes.skinWeight,e),xu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Mu.getComponent(r);if(o!==0){let a=yu.getComponent(r);Su.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_0.copy(xu).applyMatrix4(Su),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Os=class extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wr=class extends Tt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Lt,u=Lt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Tu=new Be,v0=new Be,Xr=class i{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:v0;Tu.multiplyMatrices(a,t[r]),Tu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Wr(t,e,e,nn,dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Os),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Si=class extends pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gi=new Be,Au=new Be,_r=[],Eu=new sn,x0=new Be,Ms=new He,Ss=new Kt,bi=class extends He{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Si(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,x0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),Eu.copy(e.boundingBox).applyMatrix4(Gi),this.boundingBox.union(Eu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),Ss.copy(e.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(Ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),e.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gi),Au.multiplyMatrices(n,Gi),Ms.matrixWorld=Au,Ms.raycast(e,_r);for(let o=0,a=_r.length;o<a;o++){let l=_r[o];l.instanceId=r,l.object=this,t.push(l)}_r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Si(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(s*this.count),s,this.count,El,dn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Fs=class extends $t{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},qr=new L,Yr=new L,wu=new Be,bs=new ss,vr=new Kt,ta=new L,Ru=new L,ls=class extends ft{constructor(e=new At,t=new Fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)qr.fromBufferAttribute(t,s-1),Yr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qr.distanceTo(Yr);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),vr.radius+=r,e.ray.intersectsSphere(vr)===!1)return;wu.copy(s).invert(),bs.copy(e.ray).applyMatrix4(wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let M=p,d=_-1;M<d;M+=c){let m=u.getX(M),b=u.getX(M+1),v=xr(this,e,bs,l,m,b);v&&t.push(v)}if(this.isLineLoop){let M=u.getX(_-1),d=u.getX(p),m=xr(this,e,bs,l,M,d);m&&t.push(m)}}else{let p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let M=p,d=_-1;M<d;M+=c){let m=xr(this,e,bs,l,M,M+1);m&&t.push(m)}if(this.isLineLoop){let M=xr(this,e,bs,l,_-1,p);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xr(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(qr.fromBufferAttribute(o,s),Yr.fromBufferAttribute(o,r),t.distanceSqToSegment(qr,Yr,ta,Ru)>n)return;ta.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ta);if(!(l<e.near||l>e.far))return{distance:l,point:Ru.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Cu=new L,Iu=new L,Zr=class extends ls{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Cu.fromBufferAttribute(t,s),Iu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cu.distanceTo(Iu);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Kr=class extends ls{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Bs=class extends $t{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pu=new Be,sl=new ss,yr=new Kt,Mr=new L,Ti=class extends ft{constructor(e=new At,t=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,e.ray.intersectsSphere(yr)===!1)return;Pu.copy(s).invert(),sl.copy(e.ray).applyMatrix4(Pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,M=p;_<M;_++){let d=c.getX(_);Mr.fromBufferAttribute(h,d),Lu(Mr,d,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,M=p;_<M;_++)Mr.fromBufferAttribute(h,_),Lu(Mr,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lu(i,e,t,n,s,r,o){let a=sl.distanceSqToPoint(i);if(a<t){let l=new L;sl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var $r=class extends Tt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zs=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],_=0,M=[],d=n/2,m=0;b(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(p,2));function b(){let A=new L,N=new L,R=0,w=(t-e)/n;for(let U=0;U<=r;U++){let Y=[],y=U/r,T=y*(t-e)+e;for(let V=0;V<=s;V++){let H=V/s,q=H*l+a,Q=Math.sin(q),W=Math.cos(q);N.x=T*Q,N.y=-y*n+d,N.z=T*W,h.push(N.x,N.y,N.z),A.set(Q,w,W).normalize(),f.push(A.x,A.y,A.z),p.push(H,1-y),Y.push(_++)}M.push(Y)}for(let U=0;U<s;U++)for(let Y=0;Y<r;Y++){let y=M[Y][U],T=M[Y+1][U],V=M[Y+1][U+1],H=M[Y][U+1];e>0&&(u.push(y,T,H),R+=3),t>0&&(u.push(T,V,H),R+=3)}c.addGroup(m,R,0),m+=R}function v(A){let N=_,R=new Ce,w=new L,U=0,Y=A===!0?e:t,y=A===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,d*y,0),f.push(0,y,0),p.push(.5,.5),_++;let T=_;for(let V=0;V<=s;V++){let q=V/s*l+a,Q=Math.cos(q),W=Math.sin(q);w.x=Y*W,w.y=d*y,w.z=Y*Q,h.push(w.x,w.y,w.z),f.push(0,y,0),R.x=Q*.5+.5,R.y=W*.5*y+.5,p.push(R.x,R.y),_++}for(let V=0;V<s;V++){let H=N+V,q=T+V;A===!0?u.push(q,q+1,H):u.push(q+1,q,H),U+=3}c.addGroup(m,U,A===!0?1:2),m+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var rl=class i extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let v=new L,A=new L,N=new L;for(let R=0;R<t.length;R+=3)p(t[R+0],v),p(t[R+1],A),p(t[R+2],N),l(v,A,N,b)}function l(b,v,A,N){let R=N+1,w=[];for(let U=0;U<=R;U++){w[U]=[];let Y=b.clone().lerp(A,U/R),y=v.clone().lerp(A,U/R),T=R-U;for(let V=0;V<=T;V++)V===0&&U===R?w[U][V]=Y:w[U][V]=Y.clone().lerp(y,V/T)}for(let U=0;U<R;U++)for(let Y=0;Y<2*(R-U)-1;Y++){let y=Math.floor(Y/2);Y%2===0?(f(w[U][y+1]),f(w[U+1][y]),f(w[U][y])):(f(w[U][y+1]),f(w[U+1][y+1]),f(w[U+1][y]))}}function c(b){let v=new L;for(let A=0;A<r.length;A+=3)v.x=r[A+0],v.y=r[A+1],v.z=r[A+2],v.normalize().multiplyScalar(b),r[A+0]=v.x,r[A+1]=v.y,r[A+2]=v.z}function u(){let b=new L;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];let A=d(b)/2/Math.PI+.5,N=m(b)/Math.PI+.5;o.push(A,1-N)}_(),h()}function h(){for(let b=0;b<o.length;b+=6){let v=o[b+0],A=o[b+2],N=o[b+4],R=Math.max(v,A,N),w=Math.min(v,A,N);R>.9&&w<.1&&(v<.2&&(o[b+0]+=1),A<.2&&(o[b+2]+=1),N<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function p(b,v){let A=b*3;v.x=e[A+0],v.y=e[A+1],v.z=e[A+2]}function _(){let b=new L,v=new L,A=new L,N=new L,R=new Ce,w=new Ce,U=new Ce;for(let Y=0,y=0;Y<r.length;Y+=9,y+=6){b.set(r[Y+0],r[Y+1],r[Y+2]),v.set(r[Y+3],r[Y+4],r[Y+5]),A.set(r[Y+6],r[Y+7],r[Y+8]),R.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),U.set(o[y+4],o[y+5]),N.copy(b).add(v).add(A).divideScalar(3);let T=d(N);M(R,y+0,b,T),M(w,y+2,v,T),M(U,y+4,A,T)}}function M(b,v,A,N){N<0&&b.x===1&&(o[v]=b.x-1),A.x===0&&A.z===0&&(o[v]=N/2/Math.PI+.5)}function d(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Jr=class i extends rl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var jr=class extends ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Jt=class extends $t{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ju,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jt=class extends Jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Sr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function y0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function M0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Du(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function lh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ei=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ol=class extends ei{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wc,endingEnd:wc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rc:r=e,a=2*t-n;break;case Cc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rc:o=e,l=2*n-t;break;case Cc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),M=_*_,d=M*_,m=-f*d+2*f*M-f*_,b=(1+f)*d+(-1.5-2*f)*M+(-.5+f)*_+1,v=(-1-p)*d+(1.5+p)*M+.5*_,A=p*d-p*M;for(let N=0;N!==a;++N)r[N]=m*o[u+N]+b*o[c+N]+v*o[l+N]+A*o[h+N];return r}},al=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},ll=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},rn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sr(t,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sr(e.times,Array),values:Sr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ol(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ts:t=this.InterpolantFactoryMethodDiscrete;break;case ns:t=this.InterpolantFactoryMethodLinear;break;case Ao:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ts;case this.InterpolantFactoryMethodLinear:return ns;case this.InterpolantFactoryMethodSmooth:return Ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&y0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ao,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,f=h-n,p=h+n;for(let _=0;_!==n;++_){let M=t[h+_];if(M!==t[f+_]||M!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=ns;var ti=class extends rn{constructor(e,t,n){super(e,t,n)}};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=ts;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends rn{};Qr.prototype.ValueTypeName="color";var Nn=class extends rn{};Nn.prototype.ValueTypeName="number";var cl=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Zt.slerpFlat(r,0,o,c-a,o,c,l);return r}},On=class extends rn{InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}};On.prototype.ValueTypeName="quaternion";On.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends rn{constructor(e,t,n){super(e,t,n)}};ni.prototype.ValueTypeName="string";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=ts;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Fn=class extends rn{};Fn.prototype.ValueTypeName="vector";var eo=class{constructor(e="",t=-1,n=[],s=qh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(b0(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(rn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=M0(l);l=Du(l,1,u),c=Du(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Nn(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,_,M){if(p.length!==0){let d=[],m=[];lh(p,d,m,_),d.length!==0&&M.push(new h(f,d,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},_;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let M=0;M<f[_].morphTargets.length;M++)p[f[_].morphTargets[M]]=-1;for(let M in p){let d=[],m=[];for(let b=0;b!==f[_].morphTargets.length;++b){let v=f[_];d.push(v.time),m.push(v.morphTarget===M?1:0)}s.push(new Nn(".morphTargetInfluence["+M+"]",d,m))}l=p.length*o}else{let p=".bones["+t[h].name+"]";n(Fn,p+".position",f,"pos",s),n(On,p+".quaternion",f,"rot",s),n(Fn,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function S0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nn;case"vector":case"vector2":case"vector3":case"vector4":return Fn;case"color":return Qr;case"quaternion":return On;case"bool":case"boolean":return ti;case"string":return ni}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function b0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=S0(i.type);if(i.times===void 0){let t=[],n=[];lh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var $n={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ul=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}},T0=new ul,Bn=class{constructor(e){this.manager=e!==void 0?e:T0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Bn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rn={},hl=class extends Error{constructor(e,t){super(e),this.response=t}},ks=class extends Bn{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=$n.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Rn[e]!==void 0){Rn[e].push({onLoad:t,onProgress:n,onError:s});return}Rn[e]=[],Rn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Rn[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0,M=0,d=new ReadableStream({start(m){b();function b(){h.read().then(({done:v,value:A})=>{if(v)m.close();else{M+=A.byteLength;let N=new ProgressEvent("progress",{lengthComputable:_,loaded:M,total:p});for(let R=0,w=u.length;R<w;R++){let U=u[R];U.onProgress&&U.onProgress(N)}m.enqueue(A),b()}},v=>{m.error(v)})}}});return new Response(d)}else throw new hl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{$n.add(e,c);let u=Rn[e];delete Rn[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=Rn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Rn[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var fl=class extends Bn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=$n.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Ls("img");function l(){u(),$n.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var to=class extends Bn{constructor(e){super(e)}load(e,t,n,s){let r=new Tt,o=new fl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},cs=class extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},no=class extends cs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},na=new Be,Uu=new L,Nu=new L,Hs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uu),Nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nu),t.updateMatrixWorld(),na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},dl=class extends Hs{constructor(){super(new xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=is*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},io=class extends cs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new dl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ou=new Be,Ts=new L,ia=new L,pl=class extends Hs{constructor(){super(new xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ts),ia.copy(n.position),ia.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ia),n.updateMatrixWorld(),s.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}},zn=class extends cs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ml=class extends Hs{constructor(){super(new Qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ai=class extends cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new ml}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ii=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var so=class extends Bn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=$n.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return $n.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),$n.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});$n.add(e,l),r.manager.itemStart(e)}};var ro=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Fu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Fu(){return performance.now()}var Dl="\\[\\]\\.:\\/",A0=new RegExp("["+Dl+"]","g"),Ul="[^"+Dl+"]",E0="[^"+Dl.replace("\\.","")+"]",w0=/((?:WC+[\/:])*)/.source.replace("WC",Ul),R0=/(WCOD+)?/.source.replace("WCOD",E0),C0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ul),I0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ul),P0=new RegExp("^"+w0+R0+C0+I0+"$"),L0=["material","materials","bones","map"],gl=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(A0,"")}static parseTrackName(e){let t=P0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);L0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=gl;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var f_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function Nl(i,e){if(e===$u)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Gs||e===ao){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Gs)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var uo=class extends Bn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vl(t)}),this.register(function(t){return new Gl(t)}),this.register(function(t){return new jl(t)}),this.register(function(t){return new Ql(t)}),this.register(function(t){return new ec(t)}),this.register(function(t){return new Xl(t)}),this.register(function(t){return new ql(t)}),this.register(function(t){return new Yl(t)}),this.register(function(t){return new Zl(t)}),this.register(function(t){return new Hl(t)}),this.register(function(t){return new Kl(t)}),this.register(function(t){return new Wl(t)}),this.register(function(t){return new Jl(t)}),this.register(function(t){return new $l(t)}),this.register(function(t){return new zl(t)}),this.register(function(t){return new tc(t)}),this.register(function(t){return new nc(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ii.extractUrlBase(e);o=ii.resolveURL(c,this.path)}else o=ii.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ks(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===dh){try{o[Ve.KHR_BINARY_GLTF]=new ic(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ve.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new uc(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ve.KHR_MATERIALS_UNLIT:o[h]=new kl;break;case Ve.KHR_DRACO_MESH_COMPRESSION:o[h]=new sc(r,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:o[h]=new rc;break;case Ve.KHR_MESH_QUANTIZATION:o[h]=new oc;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function U0(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},zl=class{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new pe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Et);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ai(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zn(u),c.distance=h;break;case"spot":c=new io(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,kn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},kl=class{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Dt}extendParams(e,t,n){let s=[];e.color=new pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Et),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(s)}},Hl=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Vl=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(a,a)}return Promise.all(r)}},Gl=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Wl=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Xl=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Et)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,It)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},ql=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Yl=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(a[0],a[1],a[2],Et),Promise.all(r)}},Zl=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Kl=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(a[0],a[1],a[2],Et),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,It)),Promise.all(r)}},$l=class{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Jl=class{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},jl=class{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ql=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ec=class{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},tc=class{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},nc=class{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==on.TRIANGLES&&c.mode!==on.TRIANGLE_STRIP&&c.mode!==on.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let _ of h){let M=new Be,d=new L,m=new Zt,b=new L(1,1,1),v=new bi(_.geometry,_.material,f);for(let A=0;A<f;A++)l.TRANSLATION&&d.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,A),l.SCALE&&b.fromBufferAttribute(l.SCALE,A),v.setMatrixAt(A,M.compose(d,m,b));for(let A in l)if(A==="_COLOR_0"){let N=l[A];v.instanceColor=new Si(N.array,N.itemSize,N.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&_.geometry.setAttribute(A,l[A]);ft.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},dh="glTF",Ws=12,ch={JSON:1313821514,BIN:5130562},ic=class{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ws,r=new DataView(e,Ws),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===ch.JSON){let c=new Uint8Array(e,Ws+o,a);this.content=n.decode(c)}else if(l===ch.BIN){let c=Ws+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},sc=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=lc[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=lc[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],p=hs[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let _ in p.attributes){let M=p.attributes[_],d=l[_];d!==void 0&&(M.normalized=d)}h(p)},a,c,Et,f)})})}},rc=class{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},oc=class{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}},ho=class extends ei{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,_=e*c,M=_-c,d=-2*p+3*f,m=p-f,b=1-d,v=m-f+h;for(let A=0;A!==a;A++){let N=o[M+A+a],R=o[M+A+l]*u,w=o[_+A+a],U=o[_+A]*u;r[A]=b*N+v*R+d*w+m*U}return r}},N0=new Zt,ac=class extends ho{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return N0.fromArray(r).normalize().toArray(r),r}},on={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uh={9728:Lt,9729:Ht,9984:Sl,9985:Es,9986:Wi,9987:_n},hh={33071:Pn,33648:Is,10497:xi},Ol={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},O0={CUBICSPLINE:void 0,LINEAR:ns,STEP:ts},Fl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function F0(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Jt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn})),i.DefaultMaterial}function Ei(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function kn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function B0(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function z0(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function k0(i){let e,t=i.extensions&&i.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bl(t.attributes):e=i.indices+":"+Bl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Bl(i.targets[n]);return e}function Bl(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function cc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function H0(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var V0=new Be,uc=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new U0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new to(this.options.manager):this.textureLoader=new so(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ks(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ei(r,a,s),kn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ii.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Ol[s.type],a=hs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new pt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Ol[s.type],c=hs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0,M,d;if(p&&p!==h){let m=Math.floor(f/p),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,v=t.cache.get(b);v||(M=new c(a,m*p,s.count*p/u),v=new Us(M,p/u),t.cache.add(b,v)),d=new Ns(v,l,f%p/u,_)}else a===null?M=new c(s.count*l):M=new c(a,f,s.count*l),d=new pt(M,l,_);if(s.sparse!==void 0){let m=Ol.SCALAR,b=hs[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,A=s.sparse.values.byteOffset||0,N=new b(o[1],v,s.sparse.count*m),R=new c(o[2],A,s.sparse.count*l);a!==null&&(d=new pt(d.array.slice(),d.itemSize,d.normalized)),d.normalized=!1;for(let w=0,U=N.length;w<U;w++){let Y=N[w];if(d.setX(Y,R[w*l]),l>=2&&d.setY(Y,R[w*l+1]),l>=3&&d.setZ(Y,R[w*l+2]),l>=4&&d.setW(Y,R[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}d.normalized=_}return d})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=uh[f.magFilter]||Ht,u.minFilter=uh[f.minFilter]||_n,u.wrapS=hh[f.wrapS]||xi,u.wrapT=hh[f.wrapT]||xi,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(M){let d=new Tt(M);d.needsUpdate=!0,f(d)}),t.load(ii.resolveURL(h,r.path),_,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),kn(h,o),h.userData.mimeType=o.mimeType||H0(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ve.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Bs,$t.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Fs,$t.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Jt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){let h=s[Ve.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Et),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,It)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ft);let u=r.alphaMode||Fl.OPAQUE;if(u===Fl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Fl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Dt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Dt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Dt){let h=r.emissiveFactor;a.emissive=new pe().setRGB(h[0],h[1],h[2],Et)}return r.emissiveTexture!==void 0&&o!==Dt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,It)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),kn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ei(s,h,r),h})}createUniqueName(e){let t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fh(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=k0(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=fh(new At,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?F0(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,_=u.length;p<_;p++){let M=u[p],d=o[p],m,b=c[p];if(d.mode===on.TRIANGLES||d.mode===on.TRIANGLE_STRIP||d.mode===on.TRIANGLE_FAN||d.mode===void 0)m=r.isSkinnedMesh===!0?new Gr(M,b):new He(M,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),d.mode===on.TRIANGLE_STRIP?m.geometry=Nl(m.geometry,ao):d.mode===on.TRIANGLE_FAN&&(m.geometry=Nl(m.geometry,Gs));else if(d.mode===on.LINES)m=new Zr(M,b);else if(d.mode===on.LINE_STRIP)m=new ls(M,b);else if(d.mode===on.LINE_LOOP)m=new Kr(M,b);else if(d.mode===on.POINTS)m=new Ti(M,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(m.geometry.morphAttributes).length>0&&z0(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),kn(m,r),d.extensions&&Ei(s,m,d),t.assignFinalMaterial(m),h.push(m)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Ei(s,h[0],r),h[0];let f=new Vt;r.extensions&&Ei(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,_=h.length;p<_;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xt(Qu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Qn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),kn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new Be;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xr(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],_=s.samplers[p.sampler],M=p.target,d=M.node,m=s.parameters!==void 0?s.parameters[_.input]:_.input,b=s.parameters!==void 0?s.parameters[_.output]:_.output;M.node!==void 0&&(o.push(this.getDependency("node",d)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",b)),c.push(_),u.push(M))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],_=h[2],M=h[3],d=h[4],m=[];for(let b=0,v=f.length;b<v;b++){let A=f[b],N=p[b],R=_[b],w=M[b],U=d[b];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let Y=n._createAnimationTracks(A,N,R,w,U);if(Y)for(let y=0;y<Y.length;y++)m.push(Y[y])}return new eo(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,V0)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Os:c.length>1?u=new Vt:c.length===1?u=c[0]:u=new ft,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),kn(u,r),r.extensions&&Ei(n,u,r),r.matrix!==void 0){let h=new Be;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Vt;n.name&&(r.name=s.createUniqueName(n.name)),kn(r,n),n.extensions&&Ei(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof $t||f instanceof Tt)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];ri[r.path]===ri.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ri[r.path]){case ri.weights:c=Nn;break;case ri.rotation:c=On;break;case ri.position:case ri.scale:c=Fn;break;default:n.itemSize===1?c=Nn:c=Fn;break}let u=s.interpolation!==void 0?O0[s.interpolation]:ns,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let _=new c(l[f]+"."+ri[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=cc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof On?ac:ho;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function G0(i,e,t){let n=e.attributes,s=new sn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let u=cc(hs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,l=new L;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){let M=cc(hs[f.componentType]);l.multiplyScalar(M)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Kt;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function fh(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=lc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ze.workingColorSpace!==Et&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),kn(i,e),G0(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?B0(i,e.targets,t):i})}var fo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Qt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},W0=new Qn(-1,1,1,-1,0,1),hc=class extends At{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}},X0=new hc,oi=class{constructor(e){this._mesh=new He(X0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,W0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var fs=class extends Qt{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=si.clone(e.uniforms),this.material=new ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new oi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Xs=class extends Qt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},po=class extends Qt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var mo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ce);this._width=n.width,this._height=n.height,t=new Bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fs(fo),this.copyPass.material.blending=vn,this.clock=new ro}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xs!==void 0&&(o instanceof Xs?n=!0:o instanceof po&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var go=class extends Qt{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new pe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var ph={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ds=class i extends Qt{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Bt(r,o,{type:mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Bt(r,o,{type:mn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Bt(r,o,{type:mn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=ph;this.highPassUniforms=si.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ct({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=fo;this.copyUniforms=si.clone(u.uniforms),this.blendMaterial=new ct({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:yn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new pe,this.oldClearAlpha=1,this.basic=new Dt,this.fsQuad=new oi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ds.BlurDirectionX=new Ce(1,0);ds.BlurDirectionY=new Ce(0,1);var mh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var _o=class extends Qt{constructor(){super();let e=mh;this.uniforms=si.clone(e.uniforms),this.material=new jr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new oi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_l?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ml&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var vo=class extends as{constructor(){super();let e=new Mi;e.deleteAttribute("uv");let t=new Jt({side:bt}),n=new Jt,s=new zn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new He(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new He(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new He(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new He(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new He(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new He(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new He(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let f=new He(e,ps(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let p=new He(e,ps(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let _=new He(e,ps(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);let M=new He(e,ps(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);let d=new He(e,ps(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let m=new He(e,ps(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ps(i){let e=new Dt;return e.color.setScalar(i),e}var q0=53,xe={title:4.5,mam:7.5,mamBurst:9.6,mamStamp:12.5,ser:20,serDone:24.6,mos:32.5,mosDone:37.5,fin:45,finTitle:48},wi=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Pe=(i,e,t)=>i+(e-i)*t,J=(i,e,t)=>wi((t-i)/(e-i)),Ge={io:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,out:i=>1-Math.pow(1-i,3),in:i=>i*i*i,outX:i=>i>=1?1:1-Math.pow(2,-10*i),back:i=>1+2.9*Math.pow(i-1,3)+1.9*Math.pow(i-1,2),sine:i=>.5-.5*Math.cos(Math.PI*i)},ht=(i,e,t,n)=>i<e?0:i<e+t?(i-e)/t:Math.exp(-(i-e-t)/n),fc=(i,e,t,n=.3,s=.3)=>J(e,e+n,i)*(1-J(t-s,t,i)),Me=(i,e,t)=>new L(i,e,t),Gt=(i,e,t)=>i.clone().lerp(e,t);function pc(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var yo=`
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
`;function Y0(i,e){let t={uGlowCol:{value:new pe(1,.12,.22)},uEdgeCol:{value:new pe(1,.55,.15)},uRim:{value:0},uBand:{value:0},uBandPos:{value:-2},uBandW:{value:.07},uReveal:{value:5},uRevealDir:{value:1},uEdge:{value:0},uGroundY:{value:-99},uGroundGlow:{value:0},uSelf:{value:0},uVein:{value:0},uTime:{value:0},uNS:{value:9},uZ:{value:new Ce(e[0],e[1])}};return i.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP; varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLP = position; vWP = (modelMatrix*vec4(position,1.)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uGlowCol, uEdgeCol; uniform vec2 uZ;
uniform float uRim,uBand,uBandPos,uBandW,uReveal,uRevealDir,uEdge,uGroundY,uGroundGlow,uSelf,uVein,uTime,uNS;
varying vec3 vLP; varying vec3 vWP;
${yo}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
float axisT = clamp((vLP.z-uZ.x)/(uZ.y-uZ.x),0.,1.);
float sT = uRevealDir>0. ? 1.-axisT : axisT;
float sv = sT + (fb3(vLP*uNS)-.5)*.3;
float rdiff = uReveal - sv;
if(rdiff<0.) discard;
float redge = (1.-smoothstep(0.,.06,rdiff))*uEdge;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
vec3 _vd = normalize(vViewPosition);
float fres = pow(1.-clamp(abs(dot(normal,_vd)),0.,1.),2.2);
float band = exp(-pow((axisT-uBandPos)/uBandW,2.));
float vein = 1.-smoothstep(0.,.03,abs(fb3(vLP*uNS*1.7+vec3(0.,uTime*.22,0.))-.5));
float gr = exp(-abs(vWP.y-uGroundY)*5.)*uGroundGlow;
totalEmissiveRadiance += uGlowCol*(fres*uRim*(1.+band*2.) + band*uBand*(.35+fres*1.6) + vein*uVein*(.35+fres))
  + uEdgeCol*(redge*4. + gr*3.) + diffuseColor.rgb*uSelf;`)},i.needsUpdate=!0,t}function Z0(i,e){let t=new ct({uniforms:{uReveal:e.uReveal,uRevealDir:e.uRevealDir,uNS:e.uNS,uZ:e.uZ,uTime:e.uTime,uI:{value:0},uPx:{value:1},uCol:{value:new pe(.3,.95,1)}},vertexShader:`uniform float uReveal,uRevealDir,uNS,uTime,uI,uPx; uniform vec2 uZ; varying float vA;
${yo}
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
}`,fragmentShader:`uniform vec3 uCol; varying float vA;
void main(){ float d=length(gl_PointCoord-.5); if(vA<.002) discard; gl_FragColor=vec4(uCol*vA*smoothstep(.5,.1,d)*2.,1.); }`,transparent:!0,blending:yn,depthWrite:!1}),n=new Ti(i,t);return n.frustumCulled=!1,n}async function K0(i,e,t){let n=typeof e=="string"?await i.loadAsync(e):await i.parseAsync(e.buffer,e.path),s=null;n.scene.traverse(d=>{d.isMesh&&!s&&(s=d)}),s.updateMatrixWorld(!0),s.geometry.applyMatrix4(s.matrixWorld),s.position.set(0,0,0),s.rotation.set(0,0,0),s.scale.set(1,1,1),s.geometry.computeBoundingBox();let r=s.geometry.boundingBox,o=t/(r.max.z-r.min.z),a=r.getCenter(new L),l=Y0(s.material,[r.min.z,r.max.z]);s.material.envMapIntensity=1,s.frustumCulled=!1;let c=new Vt;c.add(s),c.scale.setScalar(o),c.position.set(-a.x*o,-r.min.y*o,-a.z*o);let u=new Vt;u.add(c);let h=s.geometry.attributes.position,f=new L,p=0,_=r.max.z-(r.max.z-r.min.z)*.07;for(let d=0;d<h.count;d++)h.getZ(d)>_&&(f.x+=h.getX(d),f.y+=h.getY(d),f.z+=h.getZ(d),p++);f.divideScalar(p);let M=f.clone().multiplyScalar(o).add(c.position);return{group:u,inner:c,mesh:s,u:l,s:o,bb:r,head:M,height:(r.max.y-r.min.y)*o,len:t}}function $0(){let i={uMode:{value:0},uTime:{value:0},uC:{value:new Ce},uCrackR:{value:0},uCrackGlow:{value:0},uCrackCol:{value:new pe(1,.32,.06)},uHoleR:{value:0},uCaustic:{value:0},uGrid:{value:0},uDune:{value:0},uShock:{value:-5},uShockI:{value:0},uShockCol:{value:new pe(1,.4,.1)},uRough:{value:1},uRings:{value:0}},e=`
uniform float uMode,uTime,uCrackR,uCrackGlow,uHoleR,uCaustic,uGrid,uDune,uShock,uShockI,uRough,uRings;
uniform vec2 uC; uniform vec3 uCrackCol,uShockCol;
varying vec3 vWP2;
${yo}
float gH(vec2 p){
  float d=length(p-uC);
  float h=(vn2(p*.35)-.5)*.35*(1.-min(uGrid,1.));
  h+=uDune*(sin(p.x*.21+sin(p.y*.14)*1.7)*1.2+(vn2(p*.11)-.5)*2.4)*smoothstep(9.,24.,d);
  h*=smoothstep(2.5,9.,d)*.88+.12;
  h+=uShockI*.32*exp(-pow((d-uShock)/.7,2.));
  if(uHoleR>.01) h+=.4*exp(-pow((d-uHoleR*1.18)/.7,2.));
  return h;
}`,t=new Jt({color:16777215,roughness:1,metalness:0});t.onBeforeCompile=r=>{Object.assign(r.uniforms,i),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
`+e).replace("#include <beginnormal_vertex>",`vec4 _wq=modelMatrix*vec4(position,1.); float _e=.2;
float _hx=gH(_wq.xz+vec2(_e,0.))-gH(_wq.xz-vec2(_e,0.)); float _hz=gH(_wq.xz+vec2(0.,_e))-gH(_wq.xz-vec2(0.,_e));
vec3 objectNormal=normalize(vec3(-_hx/(2.*_e),_hz/(2.*_e),1.));
#ifdef USE_TANGENT
vec3 objectTangent=vec3(tangent.xyz);
#endif`).replace("#include <begin_vertex>","vec3 transformed=vec3(position); float _h=gH(_wq.xz); transformed.z+=_h; vWP2=_wq.xyz+vec3(0.,_h,0.);"),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
`+e+`
float caus(vec2 p,float t){ vec2 q=p+vec2(sin(t*.7+p.y*.4),cos(t*.6+p.x*.4))*.45; float e=vedge(q*.9+t*.12); return pow(1.-smoothstep(0.,.09,e),3.)*(.4+.6*vn2(p*.4+t*.1)); }`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
vec2 gp=vWP2.xz; float gd=length(gp-uC);
float hr=0.;
if(uHoleR>.01){ hr=uHoleR*(.86+.3*vn2(normalize(gp-uC+.0001)*2.6+7.)); if(gd<hr) discard; }
float n1=fb2(gp*.5), n2=vn2(gp*4.);
float ce=vedge(gp*.85+vec2(fb2(gp*.7),fb2(gp*.7+3.))*.7);
float crackMask=smoothstep(uCrackR,uCrackR-1.8,gd);
float crack=(1.-smoothstep(0.,.05,ce))*crackMask;`).replace("#include <color_fragment>",`vec3 alb;
if(uMode<.5) alb=mix(vec3(.05,.035,.026),vec3(.16,.11,.075),n1)*(.75+.45*n2);
else if(uMode<1.5) alb=mix(vec3(.15,.065,.045),vec3(.42,.2,.12),clamp(n1*.8+.25*sin(gp.x*3.1+gp.y*.8+n1*7.),0.,1.));
else if(uMode<2.5) alb=mix(vec3(.07,.11,.10),vec3(.28,.31,.25),n1)*(.85+.3*n2);
else alb=vec3(.016,.015,.02)*(.6+.8*n1);
alb*=1.-crack*.8*step(uMode,.5);
diffuseColor.rgb=alb;`).replace("#include <roughnessmap_fragment>","float roughnessFactor=uRough;").replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
{ float hf;
  if(uMode<.5) hf=fb2(gp*2.5)*.12+vn2(gp*13.)*.03-crack*.06;
  else if(uMode<1.5) hf=sin(gp.x*5.5+gp.y*1.3+n1*9.)*.035+vn2(gp*9.)*.02;
  else if(uMode<2.5) hf=vn2(gp*5.)*.06+vn2(gp*17.)*.015;
  else hf=0.;
  vec3 sx=dFdx(-vViewPosition), sy=dFdy(-vViewPosition); vec3 r1=cross(sy,normal), r2=cross(normal,sx);
  float det=dot(sx,r1); vec3 grad=sign(det)*(dFdx(hf)*r1+dFdy(hf)*r2);
  normal=normalize(abs(det)*normal-grad); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
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
}`)};let n=new Un(140,140,260,260),s=new He(n,t);return s.rotation.x=-Math.PI/2,s.frustumCulled=!1,{mesh:s,u:i}}function J0(){let i=new zs(1,.65,1,72,1,!0);i.translate(0,-.5,0);let e={uI:{value:1},uTime:{value:0}},t=new ct({uniforms:e,side:bt,vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uI,uTime; varying vec2 vUv;
${yo}
void main(){ float y=vUv.y; float n=fb2(vec2(vUv.x*24.,y*6.-uTime*.6));
  vec3 hot=vec3(1.,.42,.1)*(2.2+2.*n)*uI; vec3 dark=vec3(.035,.022,.016)*(.6+n);
  vec3 c=mix(hot,dark,smoothstep(0.,.75,y));
  gl_FragColor=vec4(c,1.); }`}),n=new He(i,t);return n.frustumCulled=!1,{mesh:n,u:e}}function qs(){let i=new zs(1,1,1,64,1,!0);i.translate(0,.5,0);let e={uCol:{value:new pe(1,.6,.25)},uI:{value:0},uTime:{value:0}},t=new ct({uniforms:e,transparent:!0,blending:yn,depthWrite:!1,side:Ft,vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV;
void main(){ vUv=uv; vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*mv; }`,fragmentShader:`uniform vec3 uCol; uniform float uI,uTime; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
void main(){ float f=abs(dot(vN,vV)); float y=vUv.y; float a=vUv.x*6.2832;
  float fade=pow(1.-y,1.7)*smoothstep(0.,.02,y);
  float streak=.55+.45*sin(a*9.+sin(a*4.+uTime*.7)*2.)*sin(a*5.-uTime*1.3+y*4.);
  float rip=.75+.25*sin(y*36.-uTime*9.);
  gl_FragColor=vec4(uCol*uI*pow(f,2.2)*fade*streak*rip,1.); }`}),n=new He(i,t);return n.frustumCulled=!1,{mesh:n,u:e}}function j0(){let i=new Un(1,1),e={uI:{value:0},uTime:{value:0},uCol:{value:new pe(.3,.95,1)}},t=new ct({uniforms:e,transparent:!0,blending:yn,depthWrite:!1,side:Ft,vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uI,uTime; uniform vec3 uCol; varying vec2 vUv;
void main(){ vec2 c=abs(vUv-.5)*2.; float frame=smoothstep(.96,1.,max(c.x,c.y));
  vec2 g=abs(fract(vUv*18.)-.5); float grid=1.-smoothstep(0.,.06,.5-max(g.x,g.y));
  float sweep=exp(-pow((vUv.y-fract(uTime*.8))*12.,2.));
  float fall=1.-smoothstep(.6,1.,length(vUv-.5)*1.6);
  gl_FragColor=vec4(uCol*uI*(frame*1.5+grid*.35*fall+.12*fall+sweep*.5*fall),1.); }`}),n=new He(i,t);return n.frustumCulled=!1,{mesh:n,u:e}}function Q0(i,e){let t=new Vt,n={uI:{value:0},uTime:{value:0}},s=pc(7);for(let r=0;r<i;r++){let o=1.2+s()*2.4,a=new Un(o,30);a.translate(0,-15,0);let l=new ct({uniforms:{...n,uSeed:{value:s()*10}},transparent:!0,blending:yn,depthWrite:!1,side:Ft,vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uI,uTime,uSeed; varying vec2 vUv;
void main(){ float x=sin(vUv.x*3.1416); float a=x*x*smoothstep(0.,.5,vUv.y)*(.55+.45*sin(uTime*.9+uSeed*6.+vUv.y*3.));
  gl_FragColor=vec4(vec3(.45,.9,1.)*a*uI*.22,1.); }`});l.uniforms.uI=n.uI,l.uniforms.uTime=n.uTime;let c=new He(a,l),u=s()*Math.PI*2,h=2+s()*e;c.position.set(Math.cos(u)*h,15,Math.sin(u)*h-2),c.userData.tilt=(s()-.5)*.35,c.frustumCulled=!1,t.add(c)}return{group:t,u:n}}var e_=`attribute vec4 aS; uniform float uT,uPx,uI,uSize; uniform vec3 uCol; varying float vA; varying vec3 vC;
float hh(float n){ return fract(sin(n*127.1)*43758.5453); }
void outPt(vec3 p,float size){ vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=size*uSize*uPx*300./max(-mv.z,.1); }
void hide(){ gl_Position=vec4(2.,2.,2.,1.); gl_PointSize=0.; vA=0.; }
`,t_="varying float vA; varying vec3 vC; void main(){ if(vA<.003) discard; float d=length(gl_PointCoord-.5); float a=smoothstep(.5,0.,d); gl_FragColor=vec4(vC*vA*a*a*1.6,1.); }",gh="varying float vA; varying vec3 vC; void main(){ if(vA<.003) discard; float d=length(gl_PointCoord-.5); float ring=smoothstep(.5,.42,d)*(.18+.82*smoothstep(.28,.46,d)); float hl=smoothstep(.16,.0,length(gl_PointCoord-vec2(.36,.34))); gl_FragColor=vec4(vC*vA*(ring+hl*1.2),1.); }";function ai(i,e,t,n={},s=t_,r=yn){let o=new At,a=pc(e),l=new Float32Array(i*4);for(let p=0;p<i*4;p++)l[p]=a();o.setAttribute("position",new pt(new Float32Array(i*3),3)),o.setAttribute("aS",new pt(l,4));let c={uT:{value:0},uPx:{value:1},uI:{value:0},uSize:{value:.05},uCol:{value:new pe(1,.5,.2)},...Object.fromEntries(Object.entries(n).map(([p,_])=>[p,{value:_}]))},u=Object.entries(n).map(([p,_])=>`uniform ${typeof _=="number"?"float":_.isVector3||_.isColor?"vec3":"vec2"} ${p};`).join(`
`),h=new ct({uniforms:c,vertexShader:e_+u+`
void main(){`+t+"}",fragmentShader:s,transparent:!0,blending:r,depthWrite:!1}),f=new Ti(o,h);return f.frustumCulled=!1,{pts:f,u:c}}function n_(){let i={};return i.embers=ai(700,1,`
    float H=uH; float y=mod(aS.w*H+uT*uSpd*(.5+aS.z),H);
    float a=aS.x*6.2832; float r=sqrt(aS.y)*uR; float k=y/H;
    vec3 p=uO+vec3(cos(a)*r+sin(uT*1.3+aS.z*20.)*.6*k, y, sin(a)*r+cos(uT*1.1+aS.x*20.)*.6*k);
    float fl=.55+.45*sin(uT*(7.+aS.z*9.)+aS.x*50.);
    vA=uI*smoothstep(0.,.12,k)*(1.-smoothstep(.55,1.,k))*fl;
    vC=mix(uCol,vec3(1.,.85,.5),aS.z*.6);
    outPt(p,.5+aS.z);`,{uO:Me(0,0,0),uR:12,uH:9,uSpd:1}),i.sparks=ai(1600,2,`
    float age=uT-uT0-aS.w*.12; if(age<0.){ hide(); return; }
    float life=.7+aS.z*2.2; if(age>life){ hide(); return; }
    float a=aS.x*6.2832; float el=mix(.2,1.,pow(aS.y,.7));
    vec3 dir=normalize(vec3(cos(a)*(1.1-el*uUp), .25+el*uUp*2.2, sin(a)*(1.1-el*uUp)));
    float sp=uSpd*(.25+.95*hh(aS.x*7.+aS.y));
    float kk=(1.-exp(-1.4*age))/1.4;
    vec3 p=uO+dir*sp*kk; p.y-=3.2*age*age; p.y=max(p.y,.03);
    vA=uI*(1.-smoothstep(life*.45,life,age));
    vC=mix(vec3(1.,.95,.8),uCol,smoothstep(0.,life*.5,age));
    outPt(p,(.45+aS.z*.9)*(1.4-age/life));`,{uO:Me(0,0,0),uT0:-99,uSpd:14,uUp:.7}),i.dust=ai(1100,3,`
    vec3 b=(aS.xyz-.5)*uBox; vec3 p=b+uWind*uT+vec3(sin(uT*.31+aS.w*30.),cos(uT*.27+aS.x*20.),sin(uT*.22+aS.y*25.))*.45;
    p=mod(p+uBox*.5,uBox)-uBox*.5+uO;
    vA=uI*(.25+.75*aS.w)*(.6+.4*sin(uT*2.+aS.z*40.)); vC=uCol;
    outPt(p,.25+aS.w*.5);`,{uO:Me(0,3,0),uBox:Me(30,10,30),uWind:Me(.1,.05,0)}),i.beam=ai(600,4,`
    float y=mod(aS.w*uH+uT*uSpd*(.4+aS.z),uH); float a=aS.x*6.2832+uT*(.8+aS.y*1.5)+y*.25; float r=uR*(.15+.85*sqrt(aS.y));
    vec3 p=uO+vec3(cos(a)*r,y,sin(a)*r);
    vA=uI*(1.-y/uH)*smoothstep(0.,.5,y); vC=mix(uCol,vec3(1.),aS.z*.5);
    outPt(p,.35+aS.z*.6);`,{uO:Me(0,0,0),uR:3,uH:14,uSpd:3}),i.sand=ai(3e3,5,`
    float r0=mix(2.,6.5,aS.x); float ang=aS.y*6.2832+uT*(3.2/r0)+uPh*2.;
    float yy=mod(aS.z*2.6+uT*(.25+aS.w*.5),2.6)*(r0/6.5+.15);
    float r=r0*(1.-.38*uPh);
    vec3 p=uO+vec3(cos(ang)*r,yy,sin(ang)*r);
    float b=max(uT-uB,0.); float kk=(1.-exp(-2.*b))/2.;
    vec3 od=normalize(vec3(cos(ang),.3+aS.w*.5,sin(ang)));
    p+=od*kk*(14.+10.*aS.w)*step(uB,uT);
    vA=uI*(.35+.65*aS.w)*(1.-smoothstep(.0,1.6,b)*step(uB,uT));
    vC=uCol*(.7+.5*aS.z);
    outPt(p,.35+aS.w*.8);`,{uO:Me(0,0,0),uPh:0,uB:99}),i.bubbles=ai(800,6,`
    float y=mod(aS.w*uH+uT*(.5+aS.z*1.3),uH);
    vec3 p=uO+vec3((aS.x-.5)*uBox.x+sin(uT*2.+aS.y*30.)*.25, y, (aS.y-.5)*uBox.z+cos(uT*1.7+aS.x*30.)*.25);
    vA=uI*smoothstep(0.,1.,y)*(1.-smoothstep(uH*.7,uH,y)); vC=vec3(.6,.95,1.);
    outPt(p,.25+aS.z*.7);`,{uO:Me(0,0,0),uBox:Me(26,0,26),uH:12},gh),i.burst=ai(900,7,`
    float age=uT-uT0-aS.w*.25; if(age<0.){ hide(); return; }
    vec3 p=uO+vec3((aS.x-.5)*uW,(aS.z-.5)*.8,(aS.y-.5)*uL);
    p.y+=age*(1.5+aS.z*3.)+age*age*.6; p.x+=sin(age*5.+aS.y*20.)*.2;
    vA=uI*(1.-smoothstep(1.8,3.2,age)); vC=vec3(.6,.95,1.);
    outPt(p,.3+aS.z*.8);`,{uO:Me(0,0,0),uT0:-99,uW:1.5,uL:6},gh),i.snow=ai(900,8,`
    vec3 b=(aS.xyz-.5)*uBox; vec3 p=b+vec3(.08,-.25,.05)*uT+vec3(sin(uT*.4+aS.w*30.),0.,cos(uT*.35+aS.x*20.))*.3;
    p=mod(p+uBox*.5,uBox)-uBox*.5+uO;
    vA=uI*(.3+.7*aS.w); vC=vec3(.75,.95,1.);
    outPt(p,.2+aS.w*.4);`,{uO:Me(0,4,0),uBox:Me(28,12,28)}),i}function i_(i){let e=pc(11),t=new Jr(1,0),n=new bi(t,new Jt({color:3811870,roughness:1,flatShading:!0}),i),s=new bi(t,new Jt({color:1707270,emissive:16734740,emissiveIntensity:2.4,roughness:1,flatShading:!0}),Math.floor(i/4));n.frustumCulled=s.frustumCulled=!1;let r=[];for(let h=0;h<i+Math.floor(i/4);h++){let f=e()*Math.PI*2,p=Math.sqrt(e())*3,_=.35+e()*.9,M=5+e()*13;r.push({p0:Me(Math.cos(f)*p,.1,Math.sin(f)*p),v:Me(Math.cos(f)*Math.cos(_)*M*.6,Math.sin(_)*M,Math.sin(f)*Math.cos(_)*M*.6),size:.06+Math.pow(e(),2.5)*.38,ax:Me(e()-.5,e()-.5,e()-.5).normalize(),spin:2+e()*9,delay:e()*.12})}let o=new Be,a=new Zt,l=new L,c=new L;function u(h,f,p){if(n.visible=s.visible=p,!p)return;let _=15;r.forEach((M,d)=>{let m=h-f-M.delay,b=d<i?n:s,v=d<i?d:d-i;if(m<0){o.makeScale(0,0,0),b.setMatrixAt(v,o);return}let A=M.p0.y,N=M.v.y,R=(N+Math.sqrt(N*N+2*_*A))/_,w=Math.min(m,R);l.set(M.p0.x+M.v.x*w,m<R?A+N*m-.5*_*m*m:M.size*.4,M.p0.z+M.v.z*w),a.setFromAxisAngle(M.ax,M.spin*w);let U=d<i?M.size:M.size*(m<R?1:Math.max(0,1-(m-R)*.6));c.setScalar(U),o.compose(l,a,c),b.setMatrixAt(v,o)}),n.instanceMatrix.needsUpdate=s.instanceMatrix.needsUpdate=!0}return{rock:n,hot:s,update:u}}function s_(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(0,0,0,.75)"),t.addColorStop(.6,"rgba(0,0,0,.35)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new He(new Un(1,1),new Dt({map:new $r(i),transparent:!0,depthWrite:!1}));return n.rotation.x=-Math.PI/2,n}var r_={uniforms:{tDiffuse:{value:null},uTime:{value:0},uCA:{value:.002},uVig:{value:.9},uGrain:{value:.04},uFlash:{value:0},uFlashCol:{value:new pe(1,1,1)},uLB:{value:0},uFade:{value:0},uZoom:{value:0},uSat:{value:1.08},uTint:{value:new pe(1,1,1)},uRes:{value:new Ce(1920,1080)}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uTime,uCA,uVig,uGrain,uFlash,uLB,uFade,uZoom,uSat; uniform vec3 uFlashCol,uTint; uniform vec2 uRes; varying vec2 vUv;
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
}`},an="#ff2a55",Hn="#f6c768",ms="#f3e7cf",dc={mam:{name:"MAMMOUTH LAINEUX",key:"Mammouth",era:"PL\xC9ISTOC\xC8NE",map:"TERRE",site:"SITE 01 \xB7 TOUNDRA GEL\xC9E",depth:"\u221218 M",bones:["Cr\xE2ne","D\xE9fense","M\xE2choire","Dent","Vert\xE8bre","C\xF4te","Omoplate","Bras","Bassin","F\xE9mur","Tibia","Pied"]},ser:{name:"TITANOBOA",key:"Titanoboa",era:"PAL\xC9OC\xC8NE \xB7 \u221260 MA",map:"TERRE",site:"SITE 02 \xB7 DUNES ROUGES",depth:"\u221224 M",bones:["Cr\xE2ne","Maxillaire","M\xE2choire","Dent","Os carr\xE9","Pt\xE9rygo\xEFde","Atlas","Cervicale","Vert\xE8bre","C\xF4te","Caudale","Queue"]},mos:{name:"MOSASAURE",key:"Mosasaurus",era:"CR\xC9TAC\xC9 \xB7 \u221270 MA",map:"MER",site:"SITE 03 \xB7 FOSSE OC\xC9ANIQUE",depth:"\u2212312 M",bones:["Cr\xE2ne","M\xE2choire","Dent","Os carr\xE9","Pt\xE9rygo\xEFde","Vert\xE8bre","C\xF4te","Omoplate","Nag. avant","Bassin","Nag. arri\xE8re","Queue"]}};function at(i,e,t,n,s={}){let r=s.alpha??1;if(r<=.002)return;i.save(),i.globalAlpha=r;let o=s.size||40;i.font=`${s.weight||700} ${o}px ${s.family||"Cinzel"}`,i.textAlign=s.align||"center",i.textBaseline="middle",i.letterSpacing=(s.ls||0)+"px",i.translate(t,n),s.scale&&s.scale!==1&&i.scale(s.scale,s.scale),s.blur>.3&&(i.filter=`blur(${s.blur}px)`);let a=s.color||"#fff";if(s.grad){let l=i.createLinearGradient(0,-o*.55,0,o*.55);s.grad.forEach((c,u)=>l.addColorStop(u/(s.grad.length-1),c)),a=l}s.glow&&(i.shadowColor=s.glowColor||s.color||"#fff",i.shadowBlur=s.glow,i.fillStyle=a,i.fillText(e,0,0),s.glow2&&(i.shadowBlur=s.glow2,i.fillText(e,0,0)),i.shadowBlur=0),i.fillStyle=a,i.fillText(e,0,0),s.stroke&&(i.strokeStyle=s.stroke,i.lineWidth=s.lw||1,i.strokeText(e,0,0)),i.restore()}function xo(i,e,t,n,s,r,o,a,l=.07){if(a<=.002)return;i.save(),i.translate(e,t),i.rotate(r),i.globalCompositeOperation="lighter";let c=i.createRadialGradient(0,0,0,0,0,n);c.addColorStop(0,`rgba(${o},${a})`),c.addColorStop(.35,`rgba(${o},${a*.45})`),c.addColorStop(1,`rgba(${o},0)`),i.fillStyle=c;for(let u=0;u<s;u++){let h=u*Math.PI*2/s,f=l*(u%2?.55:1);i.beginPath(),i.moveTo(0,0),i.arc(0,0,n,h-f,h+f),i.closePath(),i.fill()}i.restore()}function Ys(i,e,t,n,s,r){if(r<=.002)return;i.save(),i.globalCompositeOperation="lighter";let o=i.createRadialGradient(e,t,0,e,t,n);o.addColorStop(0,`rgba(${s},${r})`),o.addColorStop(.25,`rgba(${s},${r*.35})`),o.addColorStop(1,`rgba(${s},0)`),i.fillStyle=o,i.fillRect(e-n,t-n,n*2,n*2),i.restore()}function o_(i,e,t,n,s="255,170,90"){if(n<=.002)return;i.save(),i.globalCompositeOperation="lighter";for(let[a,l]of[[2,1],[7,.35],[22,.12]]){let c=i.createLinearGradient(e-1100,0,e+1100,0);c.addColorStop(0,`rgba(${s},0)`),c.addColorStop(.5,`rgba(${s},${l*n})`),c.addColorStop(1,`rgba(${s},0)`),i.fillStyle=c,i.fillRect(e-1100,t-a,2200,a*2)}i.restore(),Ys(i,e,t,260*Math.min(n,1.5),s,.55*Math.min(n,1)),Ys(i,e,t,60,"255,255,255",.8*Math.min(n,1));let r=960,o=540;[[-.6,34,.12],[-1.1,70,.07],[.45,22,.1]].forEach(([a,l,c])=>Ys(i,r+(e-r)*a,o+(t-o)*a,l,s,c*Math.min(n,1)))}function a_(i,e){if(e<=.002)return;i.save(),i.globalAlpha=e,i.strokeStyle="rgba(243,231,207,.55)",i.lineWidth=2;let t=70,n=46;[[t,t,1,1],[1920-t,t,-1,1],[t,1080-t,1,-1],[1920-t,1080-t,-1,-1]].forEach(([s,r,o,a])=>{i.beginPath(),i.moveTo(s,r+n*a),i.lineTo(s,r),i.lineTo(s+n*o,r),i.stroke()}),i.restore()}function l_(i,e,t,n,s){if(t<=.002)return;at(i,n,130,112,{family:"Rajdhani",weight:600,size:22,ls:6,color:"rgba(243,231,207,.75)",align:"left",alpha:t});let r=Math.floor(e*2)%2?1:.25;at(i,"\u25CF",1640,112,{family:"Rajdhani",size:22,color:an,align:"left",alpha:t*r,glow:12}),at(i,s,1790,112,{family:"Rajdhani",weight:600,size:22,ls:6,color:"rgba(243,231,207,.75)",align:"right",alpha:t})}function c_(i,e,t,n,s,r,o,a){if(s<=.002)return;i.save(),i.globalAlpha=s,i.translate(e,t),i.strokeStyle="rgba(255,80,100,.9)",i.lineWidth=2,i.shadowColor=an,i.shadowBlur=12;let l=120+10*Math.sin(n*6);i.beginPath(),i.arc(0,0,l,0,Math.PI*2*a),i.stroke(),i.rotate(n*.8);for(let c=0;c<4;c++)i.rotate(Math.PI/2),i.beginPath(),i.arc(0,0,l+18,-.25,.25),i.stroke();i.restore(),at(i,r,e+175,t-18,{family:"Rajdhani",weight:700,size:30,ls:5,color:"#ffd6dd",align:"left",alpha:s,glow:14,glowColor:an}),at(i,o,e+175,t+18,{family:"Rajdhani",weight:600,size:22,ls:4,color:"rgba(243,231,207,.8)",align:"left",alpha:s})}function u_(i,e,t){let n=e-t;if(n<0||n>1.9)return;let s=J(0,.06,n)*(1-J(1.45,1.9,n)),r=n<.35?Pe(2.4,1,Ge.back(n/.35)):1+(n-.35)*.05+J(1.45,1.9,n)*.25;xo(i,960,540,1100,28,n*.35,"255,60,90",.26*s),xo(i,960,540,800,14,-n*.5+.1,"255,200,120",.16*s,.03),Ys(i,960,540,520,"255,40,80",.3*s),at(i,"\u2605 \u2605 \u2605 \u2605 \u2605",960,540-115*r,{family:"Rajdhani",size:40*r,ls:10,color:Hn,alpha:s,glow:18}),at(i,"MYTHIQUE",960,540,{size:150,weight:900,scale:r,ls:12,grad:["#fff2f5","#ff6b8a","#ff1f4f","#8d0024"],glow:40,glow2:90,glowColor:"#ff2a55",alpha:s,stroke:"rgba(255,255,255,.5)",lw:1.5}),at(i,"RARET\xC9 MAXIMALE",960,540+110*r,{family:"Rajdhani",weight:700,size:30*r,ls:16,color:ms,alpha:s*J(.25,.5,n)})}function h_(i,e,t,n,s,r){let o=e-t;if(o<0)return;let a=J(0,.5,o)*(1-r);if(a<=.002)return;let l=120-(1-Ge.out(J(0,.6,o)))*80-r*60,c=330;i.save(),i.globalAlpha=a;let u=640,h=470,f=i.createLinearGradient(l,c,l+u,c);f.addColorStop(0,"rgba(12,6,8,.78)"),f.addColorStop(1,"rgba(12,6,8,0)"),i.fillStyle=f,i.beginPath(),i.moveTo(l,c),i.lineTo(l+u,c),i.lineTo(l+u,c+h),i.lineTo(l+26,c+h),i.lineTo(l,c+h-26),i.closePath(),i.fill(),i.shadowColor=an,i.shadowBlur=18,i.fillStyle=an,i.fillRect(l,c,4,h*Ge.out(J(0,.5,o))),i.restore();let p=a*J(.15,.45,o);i.save(),i.globalAlpha=p,i.fillStyle="rgba(255,42,85,.18)",i.strokeStyle=an,i.lineWidth=2,i.beginPath(),i.roundRect(l+30,c+26,220,40,20),i.fill(),i.stroke(),i.restore(),at(i,"\u25C6 MYTHIQUE",l+140,c+47,{family:"Rajdhani",weight:700,size:24,ls:5,color:"#ffd3dc",alpha:p,glow:12,glowColor:an}),at(i,"\u2605\u2605\u2605\u2605\u2605",l+280,c+47,{family:"Rajdhani",size:24,ls:4,color:Hn,align:"left",alpha:p,glow:10});let _=a*J(.2,.55,o),M=Math.round(Pe(0,n.name.length,Ge.out(J(.2,.7,o))));at(i,n.name.slice(0,M),l+30,c+118,{size:n.name.length>12?58:72,weight:900,align:"left",ls:3,grad:["#fffaf0",ms,"#cdb48a"],glow:22,glowColor:"rgba(255,120,90,.55)",alpha:_}),at(i,`${n.era}  \xB7  CARTE ${n.map}`,l+32,c+172,{family:"Rajdhani",weight:600,size:24,ls:4,color:"#d8c6a3",align:"left",alpha:a*J(.4,.8,o)}),i.save(),i.globalAlpha=a,i.fillStyle="rgba(243,231,207,.35)",i.fillRect(l+32,c+200,520*Ge.out(J(.5,1,o)),1.5),i.restore();let d=a*J(.6,.9,o);at(i,"OS D\xC9COUVERTS",l+32,c+236,{family:"Rajdhani",weight:700,size:22,ls:6,color:"rgba(243,231,207,.7)",align:"left",alpha:d});let m=Math.floor(s);at(i,`${String(m).padStart(2,"0")}`,l+32,c+284,{family:"Rajdhani",weight:700,size:64,align:"left",color:m>=12?Hn:"#fff",glow:m>=12?26:8,glowColor:m>=12?Hn:"#fff",alpha:d}),at(i,"/ 12",l+112,c+292,{family:"Rajdhani",weight:600,size:34,align:"left",color:"rgba(243,231,207,.6)",alpha:d});for(let b=0;b<12;b++){let v=wi(s-b);i.save(),i.globalAlpha=d,i.fillStyle="rgba(255,255,255,.1)",i.fillRect(l+210+b*29,c+276,24,14),v>0&&(i.shadowColor=an,i.shadowBlur=14,i.fillStyle=m>=12?Hn:an,i.fillRect(l+210+b*29,c+276,24*v,14)),i.restore()}n.bones.forEach((b,v)=>{let A=v%2,N=Math.floor(v/2),R=l+34+A*270,w=c+334+N*22.5,U=wi(s-v),Y=d*(.28+.72*(U>0?1:0)),y=ht(s,v,.05,.5);at(i,U>0?"\u2713":"\xB7",R,w,{family:"Rajdhani",weight:700,size:20,color:U>0?Hn:"#888",align:"left",alpha:Y}),at(i,b.toUpperCase(),R+26,w,{family:"Rajdhani",weight:600,size:20,ls:3,color:U>0?"#fff":"#9a8f80",align:"left",alpha:Y,glow:y>.05?16*y:0,glowColor:Hn})})}async function nv({canvas:i,base:e=".",onProgress:t=()=>{}}){let n=new Hr({canvas:i,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});n.toneMapping=Vs,n.toneMappingExposure=1,n.setPixelRatio(1);let s=new as,r=new xt(32,16/9,.05,400),o=new os(n);s.environment=o.fromScene(new vo,.04).texture,s.fog=new Vr(0,.03),s.background=new pe(0);let a=new no(16777215,2236962,1),l=new Ai(16777215,2);l.position.set(6,10,6);let c=new Ai(16777215,2);c.position.set(-6,5,-8);let u=new zn(16736288,0,0,1.6),h=new zn(16719952,0,0,1.6);s.add(a,l,c,u,h);let f=$0();s.add(f.mesh);let p=J0();s.add(p.mesh);let _=qs();s.add(_.mesh);let M=qs();s.add(M.mesh);let d=[qs(),qs(),qs()];d.forEach(x=>s.add(x.mesh));let m=j0(),b=Q0(9,9);s.add(b.group);let v=n_();Object.values(v).forEach(x=>s.add(x.pts));let A=i_(140);s.add(A.rock,A.hot);let N=s_();s.add(N);let R=new uo,w=0,U=x=>new URL(`${e}/models/${x}.geo.js`,location.href).href,Y=async(x,g)=>{let C=(await import(U(x))).default,O=atob(C),F=new Uint8Array(O.length);for(let P=0;P<O.length;P++)F[P]=O.charCodeAt(P);let E=await K0(R,{buffer:F.buffer,path:new URL(`${e}/models/`,location.href).href},g);return t(++w/3),E},y=self.createImageBitmap;self.createImageBitmap=void 0;let T,V,H;try{[T,V,H]=await Promise.all([Y("mammouth",4.6),Y("serpent",5.2),Y("predateur",6.4)])}finally{self.createImageBitmap=y}[T,V,H].forEach(x=>s.add(x.group));let q=Z0(H.mesh.geometry,H.u);H.mesh.add(q),H.mesh.add(m.mesh);let Q=new mo(n);Q.addPass(new go(s,r));let W=new ds(new Ce(960,540),.9,.55,.82);Q.addPass(W),Q.addPass(new _o);let ne=new fs(r_);Q.addPass(ne);let K=document.createElement("canvas"),_e=K.getContext("2d"),he=1920,ye=1080;function Ke(x,g){he=x,ye=g,n.setSize(x,g,!1),Q.setSize(x,g),W.resolution.set(x/2,g/2),K.width=x,K.height=g,ne.uniforms.uRes.value.set(x,g);let C=g/1080;Object.values(v).forEach(O=>O.u.uPx.value=C),q.material.uniforms.uPx.value=C}Ke(1920,1080),[T,V,H].forEach(x=>x.group.visible=!0),n.compile(s,r);let $e=new L;function $(x){return $e.copy(x).project(r),[($e.x*.5+.5)*1920,(-$e.y*.5+.5)*1080,$e.z<1]}function ie(x,g){return x.group.updateMatrixWorld(!0),x.group.localToWorld(g.clone())}let me=0;function ue(x,g,C=32,O=0,F=0,E=0){if(r.position.copy(x),r.fov=C,Math.abs(me)>.5?r.setViewOffset(1920,1080,me,0,1920,1080):r.clearViewOffset(),r.updateProjectionMatrix(),me=0,r.lookAt(g),O>0){let P=(Math.sin(F*37.1)+Math.sin(F*61.7+1.3)*.6+Math.sin(F*13.3+2)*.4)*O,k=(Math.sin(F*43.7+.7)+Math.sin(F*71.3+2.1)*.5+Math.sin(F*17.9)*.4)*O;r.translateX(P),r.translateY(k),E+=Math.sin(F*29.3)*O*.05}E&&r.rotateZ(E),r.updateMatrixWorld(!0)}function Fe(x){let g=x.u;x.group.visible=!1,x.group.position.set(0,0,0),x.group.rotation.set(0,0,0),g.uRim.value=.25,g.uBand.value=0,g.uBandPos.value=-2,g.uReveal.value=5,g.uEdge.value=0,g.uGroundY.value=-99,g.uGroundGlow.value=0,g.uSelf.value=0,g.uVein.value=0,g.uGlowCol.value.setRGB(1,.12,.22),g.uEdgeCol.value.setRGB(1,.55,.15)}function Le(x){let g=f.u,C=ne.uniforms;[T,V,H].forEach(Fe),[T,V,H].forEach(F=>F.u.uTime.value=x),g.uTime.value=x,g.uMode.value=0,g.uCrackR.value=0,g.uCrackGlow.value=0,g.uHoleR.value=0,g.uCaustic.value=0,g.uGrid.value=0,g.uDune.value=0,g.uShockI.value=0,g.uRough.value=1,g.uRings.value=0,g.uCrackCol.value.setRGB(1,.32,.06),g.uShockCol.value.setRGB(1,.4,.1),p.mesh.visible=!1,p.u.uTime.value=x,_.mesh.visible=M.mesh.visible=!1,_.u.uTime.value=M.u.uTime.value=x,d.forEach(F=>{F.mesh.visible=!1,F.u.uTime.value=x}),m.mesh.visible=!1,m.u.uTime.value=x,b.group.visible=!1,b.u.uTime.value=x,q.visible=!1,N.visible=!1,Object.values(v).forEach(F=>{F.pts.visible=!1,F.u.uT.value=x}),A.update(x,0,!1),u.intensity=0,h.intensity=0,C.uTime.value=x,C.uCA.value=.0025,C.uFlash.value=0,C.uLB.value=.1,C.uFade.value=0,C.uZoom.value=0,C.uSat.value=1.08,C.uTint.value.setRGB(1,1,1),C.uFlashCol.value.setRGB(1,.95,.9),C.uVig.value=.9,C.uGrain.value=.045,W.strength=.75,W.threshold=.88,W.radius=.55,s.environmentIntensity=1,n.toneMappingExposure=1;let O={t:x};x<xe.mam?Xe(x,O):x<xe.ser?et(x,O):x<xe.mos?qe(x,O):x<xe.fin?D(x,O):Ut(x,O);for(let F of[xe.mam,xe.ser,xe.mos]){let E=Math.max(J(F-.45,F,x)*(x<F?1:0),(1-J(F,F+.35,x))*(x>=F?1:0));C.uZoom.value=Math.max(C.uZoom.value,Ge.in(E)*.55),C.uFlash.value+=Math.pow(E,3)*.9,C.uCA.value+=E*.02}return O}function Xe(x,g){let C=f.u,O=ne.uniforms;s.background.setRGB(.012,.008,.006),s.fog.color.setRGB(.02,.012,.008),s.fog.density=.045,a.color.setRGB(.6,.5,.45),a.groundColor.setRGB(.1,.06,.04),a.intensity=.35,l.color.setRGB(1,.75,.55),l.intensity=.5,l.position.set(-8,6,-4),c.color.setRGB(.5,.6,1),c.intensity=.6,s.environmentIntensity=.25;let F=[.9,1.22,2.4,2.72,3.85,4.12],E=0;F.forEach(ee=>E+=ht(x,ee,.04,.22));let P=J(xe.title,xe.mam,x);C.uCrackR.value=x<xe.title?1.2+x*.25:Pe(2.3,6,Ge.outX(J(xe.title,xe.title+1.6,x))),C.uCrackGlow.value=x<xe.title?.6+E*1.8:.55+ht(x,xe.title,.02,.6)*2.5,C.uShock.value=(x-xe.title)*11,C.uShockI.value=x>xe.title?Math.exp(-(x-xe.title)*1.6):0,u.position.set(0,.6,0),u.color.setRGB(1,.4,.1),u.intensity=x<xe.title?3+E*15:8+ht(x,xe.title,.02,.5)*50,v.dust.pts.visible=!0,v.dust.u.uI.value=.25,v.dust.u.uCol.value.setRGB(1,.8,.6),v.dust.u.uSize.value=.04,v.embers.pts.visible=!0,v.embers.u.uI.value=x<xe.title?.4:1.2,v.embers.u.uCol.value.setRGB(1,.35,.08),v.embers.u.uR.value=7,v.embers.u.uSpd.value=x<xe.title?.8:1.6,v.embers.u.uSize.value=.06,v.sparks.pts.visible=x>xe.title,v.sparks.u.uT0.value=xe.title,v.sparks.u.uI.value=1.6,v.sparks.u.uCol.value.setRGB(1,.35,.06),v.sparks.u.uO.value.set(0,.1,0),v.sparks.u.uSpd.value=16,v.sparks.u.uSize.value=.07;let k,te,be=E*.015;if(x<xe.title){let ee=Ge.sine(J(0,xe.title,x));k=Gt(Me(0,1.1,24),Me(1.2,2.1,12.5),ee),te=Me(0,.3,0)}else{let ee=Ge.out(P);k=Gt(Me(0,7,15),Me(0,5.6,11.5),ee),te=Me(0,.5,0),be+=ht(x,xe.title,.02,.5)*.25}ue(k,te,32,be,x),O.uFade.value=1-J(0,1.2,x),O.uFlash.value=ht(x,xe.title,.02,.35)*1.6,O.uFlashCol.value.setRGB(1,.7,.45),O.uCA.value+=ht(x,xe.title,.02,.4)*.02+E*.004,O.uLB.value=.12-J(xe.title,xe.title+1,x)*.02,W.strength=.9+ht(x,xe.title,.02,.5)*1.2,g.intro=x<xe.title,g.titleT=x-xe.title,g.flare=x>xe.title?[...$(Me(0,.4,0)),ht(x,xe.title,.02,.9)*1.6]:null,g.hud=J(1.5,2.5,x)*(x<xe.title?1:1-J(xe.title,xe.title+.2,x)),g.hudL="LE DINOSAURE // ARCHIVES FOSSILES",g.hudR="SCAN EN COURS"}function et(x,g){let C=f.u,O=ne.uniforms,F=T.u,E=x-xe.mam,P=xe.mamBurst-xe.mam,k=xe.mamStamp-xe.mam;s.background.setRGB(.012,.01,.012),s.fog.color.setRGB(.02,.014,.014),s.fog.density=.035,a.color.setRGB(.6,.55,.6),a.groundColor.setRGB(.12,.06,.04),a.intensity=.45,l.color.setRGB(1,.82,.65),l.intensity=1.6,l.position.set(7,9,7),c.color.setRGB(.45,.6,1),c.intensity=2.2,c.position.set(-7,5,-8),s.environmentIntensity=.6;let te=ht(E,P,.02,.45);C.uCrackR.value=E<P?Pe(6,8,E/P):9,C.uCrackGlow.value=E<P?.6+Ge.in(E/P)*1.6:.5+te*1.5,C.uHoleR.value=E<P?0:3.3*Ge.outX(J(P,P+.25,E)),C.uShock.value=(E-P)*13,C.uShockI.value=E>P?Math.exp(-(E-P)*1.4):0,E>k&&(C.uShock.value=(E-k)*15,C.uShockI.value=Math.exp(-(E-k)*1.5),C.uShockCol.value.setRGB(1,.1,.25)),p.mesh.visible=E>P,p.mesh.scale.set(3.9,7,3.9),p.u.uI.value=.45+te,u.position.set(0,-.5,0),u.color.setRGB(1,.42,.12),u.intensity=E<P?6+Ge.in(E/P)*30:12+te*90;let be=Ge.out(J(P+.15,P+2.9,E)),ee=Math.sin(x*1.4)*.08;T.group.visible=E>P,T.group.position.set(0,Pe(-T.height-.6,.55,be)+ee*be,0),T.group.rotation.y=Pe(-.9,.25,Ge.io(J(P,k+6,E))),F.uGroundY.value=0,F.uGroundGlow.value=1-J(P+2.4,P+3.2,E),F.uRim.value=.3+J(P,k,E)*.6+ht(E,k,.03,.5)*2.5,F.uVein.value=J(k-.2,k+.6,E)*(.9+.5*Math.sin(x*3)),F.uSelf.value=ht(E,k,.03,.4)*.6,F.uBand.value=3,F.uBandW.value=.06,F.uBandPos.value=E<k+3.4?Pe(1.2,-.2,J(k+1.3,k+3.3,E)):Pe(1.2,-.2,J(k+4.1,k+6.1,E)),h.position.set(2.5,3.5,3),h.intensity=J(k-.2,k+.5,E)*12+ht(E,k,.03,.4)*50,_.mesh.visible=M.mesh.visible=E>P-.05,_.mesh.scale.set(2.6,40,2.6),_.u.uCol.value.setRGB(1,.55,.22),_.u.uI.value=(E>P?.45+te*2:0)*(1-.6*J(k+1,k+3,E)),M.mesh.scale.set(4.5+te*2,40,4.5+te*2),M.u.uCol.value.setRGB(1,.2,.3),M.u.uI.value=(E>P?.15+te*.8:0)+ht(E,k,.03,.6)*.8,A.update(E,P,E>P),v.sparks.pts.visible=E>P,v.sparks.u.uT0.value=P,v.sparks.u.uT.value=E,v.sparks.u.uI.value=1.2,v.sparks.u.uO.value.set(0,.2,0),v.sparks.u.uSpd.value=20,v.sparks.u.uCol.value.setRGB(1,.38,.08),v.sparks.u.uSize.value=.07,v.beam.pts.visible=E>P,v.beam.u.uI.value=.8,v.beam.u.uR.value=2.8,v.beam.u.uCol.value.setRGB(1,.55,.25),v.beam.u.uSize.value=.05,v.embers.pts.visible=!0,v.embers.u.uI.value=1,v.embers.u.uR.value=10,v.embers.u.uSpd.value=1.4,v.embers.u.uCol.value.setRGB(1,.3,.08),v.embers.u.uSize.value=.06,v.dust.pts.visible=!0,v.dust.u.uI.value=.3,v.dust.u.uCol.value.setRGB(1,.85,.7);let se,ve,ce=32,ae=0,Ee=0;if(E<P){let Te=E/P,I=Pe(.5,-.25,Ge.io(Te));se=Me(Math.sin(I)*9.5,Pe(1.4,1.9,Te),Math.cos(I)*9.5),ve=Me(0,.6,0),ae=Ge.in(Te)*.06,ce=Pe(34,30,Te)}else if(E<k+.3){let Te=Ge.out(J(P,k+.3,E));se=Gt(Me(4.5,1.2,8.5),Me(7,3.6,10),Te),ve=Gt(Me(0,.8,0),Me(0,2,0),Te),ae=te*.35+.02,ce=Pe(30,34,Te)}else{let Te=J(k+.3,12.5,E),I=Pe(.95,-1.45,Ge.io(Te)),oe=Pe(9.5,7.2,Ge.io(Te));se=Me(Math.sin(I)*oe,Pe(3.4,1.6,Ge.io(Te)),Math.cos(I)*oe),ve=Me(0,Pe(2,1.7,Te),0),ae=ht(E,k,.03,.4)*.2,Ee=-.04*Math.sin(Te*3)}me=-340*Ge.io(J(k+.7,k+1.6,E))*(1-J(12,12.5,E)),ue(se,ve,ce,ae,x,Ee),O.uFlash.value=te*1+ht(E,k,.02,.3)*.8,O.uFlashCol.value=E>k?new pe(1,.35,.45):new pe(1,.75,.5),O.uCA.value+=te*.025+ht(E,k,.02,.4)*.02,O.uZoom.value=te*.3+ht(E,k,.02,.25)*.25,W.strength=.75+te*1+ht(E,k,.02,.5)*.6;let we=dc.mam;g.hud=1,g.hudL=we.site,g.hudR="PROFONDEUR "+we.depth,g.reticle=E<P?{p:$(Me(0,.2,0)),a:J(.2,.6,E)*(1-J(P-.15,P,E)),label:"SIGNAL FOSSILE D\xC9TECT\xC9",sub:"INTENSIT\xC9 "+Math.round(Pe(32,100,E/P))+" %",prog:E/P}:null,g.flare=E>P?[...$(Me(0,.2,0)),te*2+.25*(1-J(k,k+2,E))]:null,g.stamp=xe.mamStamp,g.card={t0:xe.mamStamp+.9,sp:we,found:Pe(0,12,J(k+1.6,k+5.2,E)),out:J(12,12.4,E)}}function qe(x,g){let C=f.u,O=ne.uniforms,F=V.u,E=x-xe.ser,P=xe.serDone-xe.ser;s.background.setRGB(.03,.018,.05),s.fog.color.setRGB(.07,.04,.09),s.fog.density=.028,a.color.setRGB(.55,.5,.9),a.groundColor.setRGB(.3,.15,.08),a.intensity=.4,l.color.setRGB(.6,.7,1),l.intensity=.9,l.position.set(-8,10,4),c.color.setRGB(1,.55,.25),c.intensity=3,c.position.set(6,3,-9),s.environmentIntensity=.7,C.uMode.value=1,C.uDune.value=.7,C.uShock.value=(E-P)*12,C.uShockI.value=E>P?Math.exp(-(E-P)*1.3):0,C.uShockCol.value.setRGB(1,.6,.2);let k=ht(E,P,.02,.45);V.group.visible=E>.9,V.group.rotation.y=.35,F.uRevealDir.value=1,F.uReveal.value=Pe(-.22,1.22,Ge.io(J(1,P,E))),F.uEdge.value=1-J(P,P+.4,E),F.uEdgeCol.value.setRGB(1,.7,.25),F.uRim.value=.3+J(P-.5,P+.5,E)*.6+k*2.5,F.uVein.value=J(P,P+1,E)*(.9+.5*Math.sin(x*3.3)),F.uSelf.value=k*.5,F.uBand.value=3,F.uBandPos.value=Pe(1.25,-.25,J(P+1.5,P+3.7,E)),E>P+5&&(F.uBandPos.value=Pe(1.25,-.25,J(P+5,P+7,E))),N.visible=!0,N.position.set(0,.03,0),N.scale.set(6.5,6.5,1),N.material.opacity=J(1.5,3,E)*.8,h.position.set(-2,3,3),h.color.setRGB(1,.25,.35),h.intensity=J(P-.4,P+.4,E)*14+k*60,u.position.set(0,1.5,0),u.color.setRGB(1,.6,.25),u.intensity=J(1,2,E)*10*(1-J(P,P+1,E))+k*25,v.sand.pts.visible=!0,v.sand.u.uI.value=1.3*J(0,1,E),v.sand.u.uPh.value=J(1,P,E),v.sand.u.uB.value=xe.serDone,v.sand.u.uCol.value.setRGB(1,.6,.3),v.sand.u.uSize.value=.1,v.dust.pts.visible=!0,v.dust.u.uI.value=.35,v.dust.u.uCol.value.setRGB(1,.8,.6),v.dust.u.uWind.value.set(2.2,.1,.4),v.sparks.pts.visible=E>P,v.sparks.u.uT0.value=xe.serDone,v.sparks.u.uI.value=1.4,v.sparks.u.uO.value.set(0,1,0),v.sparks.u.uSpd.value=13,v.sparks.u.uCol.value.setRGB(1,.55,.15),v.sparks.u.uSize.value=.06,v.embers.pts.visible=E>P-1,v.embers.u.uI.value=.8*J(P-1,P,E),v.embers.u.uR.value=5,v.embers.u.uSpd.value=1.2,v.embers.u.uCol.value.setRGB(1,.45,.15),_.mesh.visible=E>P-.1,_.mesh.scale.set(3.2,40,3.2),_.u.uCol.value.setRGB(1,.3,.35),_.u.uI.value=k*1.6+.12*J(P,P+1,E);let te,be,ee=32,se=0,ve=0,ce=ie(V,V.head);if(E<1.3){let Ee=Ge.out(E/1.3);te=Gt(Me(-16,1.1,9),Me(-7,1.6,7.5),Ee),be=Gt(Me(-2,.8,0),Me(0,.9,0),Ee),ve=Pe(.12,0,Ee)}else if(E<P+.4){let Ee=Ge.io(J(1.3,P+.4,E));te=Gt(Me(-7,1.6,7.5),Me(-2.6,10.5,4.2),Ee),be=Gt(Me(0,.9,0),Me(0,.6,.3),Ee),ee=Pe(32,36,Ee),se=.02+J(1.3,P,E)*.03}else{let Ee=Ge.io(J(P+.4,12.5,E)),we=Pe(-.5,.55,Ee),Te=Pe(5.5,4.4,Ee);te=Me(ce.x+Math.sin(we)*Te,Pe(.5,1.1,Ee),ce.z+Math.cos(we)*Te),be=Gt(ce.clone().add(Me(0,-.3,0)),ce.clone().add(Me(0,-.6,-1.4)),Ee),ee=Pe(34,28,Ee),se=k*.25}me=-340*Ge.io(J(P+.7,P+1.6,E))*(1-J(12,12.5,E)),ue(te,be,ee,se,x,ve),O.uFlash.value=k*1,O.uFlashCol.value.setRGB(1,.55,.3),O.uCA.value+=k*.025,O.uZoom.value=Math.max(O.uZoom.value,k*.3),O.uTint.value.setRGB(1.04,.98,1.02),W.strength=.75+k;let ae=dc.ser;g.hud=1,g.hudL=ae.site,g.hudR="PROFONDEUR "+ae.depth,g.reticle=E<P?{p:$(Me(0,.5,0)),a:J(.6,1,E)*(1-J(P-.2,P,E)),label:"MAT\xC9RIALISATION",sub:"RECONSTRUCTION "+Math.round(wi(J(1.4,P,E))*100)+" %",prog:J(1.4,P,E)}:null,g.flare=E>P?[...$(Me(0,1,0)),k*2]:null,g.stamp=xe.serDone,g.card={t0:xe.serDone+.9,sp:ae,found:Pe(0,12,J(P+1.6,P+5.2,E)),out:J(12,12.4,E)}}function D(x,g){let C=f.u,O=ne.uniforms,F=H.u,E=x-xe.mos,P=xe.mosDone-xe.mos;s.background.setRGB(.004,.045,.06),s.fog.color.setRGB(.01,.075,.095),s.fog.density=.06,a.color.setRGB(.5,.9,1),a.groundColor.setRGB(.05,.15,.15),a.intensity=.5,l.color.setRGB(.6,.95,1),l.intensity=1.5,l.position.set(2,14,3),c.color.setRGB(.3,.7,1),c.intensity=2,c.position.set(-6,4,-8),s.environmentIntensity=.6,C.uMode.value=2,C.uCaustic.value=.55,C.uShock.value=(E+10)%1.6*9,C.uShockI.value=(E<P?.7:0)*(1-(E+10)%1.6/1.6),C.uShockCol.value.setRGB(.2,.9,1),E>P&&(C.uShock.value=(E-P)*12,C.uShockI.value=Math.exp(-(E-P)*1.3),C.uShockCol.value.setRGB(1,.15,.3));let k=ht(E,P,.02,.45);H.group.visible=!0;let te=Math.sin(x*1.1);H.group.position.set(0,1.25+Math.sin(x*.9)*.12,0),H.group.rotation.set(Math.sin(x*.7)*.03,.15+te*.06,te*.04),F.uRevealDir.value=1,F.uReveal.value=Pe(-.22,1.22,Ge.io(J(1.5,P,E))),F.uEdge.value=(1-J(P,P+.4,E))*.8,F.uEdgeCol.value.setRGB(.25,.9,1),F.uGlowCol.value.setRGB(1,.12,.25),F.uRim.value=.3+J(P-.5,P+.5,E)*.6+k*2.5,F.uVein.value=J(P,P+1,E)*(.8+.5*Math.sin(x*2.8)),F.uSelf.value=k*.5,F.uBand.value=3,F.uBandPos.value=Pe(1.25,-.25,J(P+1.4,P+3.6,E)),E>P+4.6&&(F.uBandPos.value=Pe(1.25,-.25,J(P+4.6,P+6.6,E))),q.visible=E<P+.3,q.material.uniforms.uI.value=J(0,.8,E)*(1-J(P,P+.3,E))*.75;let be=H.u.uZ.value,ee=wi(F.uReveal.value-.05,0,1);m.mesh.visible=E>1.4&&E<P+.2,m.mesh.position.set((H.bb.min.x+H.bb.max.x)/2,(H.bb.min.y+H.bb.max.y)/2,Pe(be.y,be.x,ee)),m.mesh.scale.set((H.bb.max.x-H.bb.min.x)*1.3,(H.bb.max.y-H.bb.min.y)*1.8,1),m.u.uI.value=J(1.4,1.8,E)*(1-J(P-.2,P+.2,E))*1.4,h.position.set(0,3,4),h.color.setRGB(1,.2,.35),h.intensity=J(P-.4,P+.4,E)*12+k*60,u.position.set(0,1.4,0),u.color.setRGB(.3,.9,1),u.intensity=5+k*30,b.group.visible=!0,b.u.uI.value=1,b.group.children.forEach(I=>{I.rotation.set(0,Math.atan2(r.position.x-I.position.x,r.position.z-I.position.z),I.userData.tilt)}),v.bubbles.pts.visible=!0,v.bubbles.u.uI.value=.55,v.bubbles.u.uSize.value=.05,v.snow.pts.visible=!0,v.snow.u.uI.value=.35,v.snow.u.uSize.value=.035,v.burst.pts.visible=E>P,v.burst.u.uT0.value=xe.mosDone,v.burst.u.uI.value=1,v.burst.u.uO.value.set(0,1.3,0),v.burst.u.uL.value=6,v.burst.u.uSize.value=.05,v.sparks.pts.visible=E>P,v.sparks.u.uT0.value=xe.mosDone,v.sparks.u.uI.value=1.1,v.sparks.u.uO.value.set(0,1.3,0),v.sparks.u.uSpd.value=9,v.sparks.u.uUp.value=.2,v.sparks.u.uCol.value.setRGB(.3,.85,1),v.sparks.u.uSize.value=.05;let se,ve,ce=32,ae=0,Ee=0,we=ie(H,H.head);if(E<1.5){let I=Ge.out(E/1.5);se=Gt(Me(3,13,15),Me(6,3.6,12),I),ve=Gt(Me(0,1.2,0),Me(0,2,.5),I),ce=Pe(40,34,I)}else if(E<P+.4){let I=Ge.io(J(1.5,P+.4,E)),oe=Pe(4.5,-3.5,I);se=Me(Pe(9.5,8.2,I),Pe(3,2.5,I),oe+2.2),ve=Me(0,2,oe-.3),ce=32,Ee=.03}else{let I=Ge.io(J(P+.4,12.5,E)),oe=Pe(-.9,.75,I),Z=Pe(7.5,5.6,I);se=Me(we.x+Math.sin(oe)*Z,Pe(2.2,.9,I),we.z+Math.cos(oe)*Z),ve=Gt(we.clone().add(Me(0,0,-1.6)),we.clone().add(Me(0,.1,-.8)),I),ce=Pe(34,30,I),ae=k*.2,Ee=Math.sin(x*.6)*.02}me=-340*Ge.io(J(P+.7,P+1.6,E))*(1-J(11.9,12.4,E)),ue(se,ve,ce,ae+.006,x,Ee),O.uFlash.value=k*1,O.uFlashCol.value.setRGB(.6,.9,1),O.uCA.value+=.002+k*.02,O.uZoom.value=Math.max(O.uZoom.value,k*.3),O.uTint.value.setRGB(.92,1.03,1.06),W.strength=.75+k;let Te=dc.mos;g.hud=1,g.hudL=Te.site,g.hudR="PROFONDEUR "+Te.depth,g.reticle=E<P?{p:$(Me(0,1.3,0)),a:J(.5,.9,E)*(1-J(P-.2,P,E)),label:"SONAR : FOSSILE G\xC9ANT",sub:"SCAN "+Math.round(wi(J(1.5,P,E))*100)+" %",prog:J(1.5,P,E),cyan:!0}:null,g.flare=E>P?[...$(Me(0,1.3,0)),k*2,"140,230,255"]:null,g.stamp=xe.mosDone,g.card={t0:xe.mosDone+.9,sp:Te,found:Pe(0,12,J(P+1.6,P+5.2,E)),out:J(11.9,12.3,E)},g.whiteOut=J(11.6,12.5,E)}function Ut(x,g){let C=f.u,O=ne.uniforms,F=x-xe.fin,E=xe.finTitle-xe.fin;s.background.setRGB(.012,.006,.01),s.fog.color.setRGB(.03,.01,.016),s.fog.density=.03,a.color.setRGB(.7,.6,.7),a.groundColor.setRGB(.1,.03,.04),a.intensity=.5,l.color.setRGB(1,.85,.7),l.intensity=1.8,l.position.set(4,10,9),c.color.setRGB(1,.3,.4),c.intensity=3,c.position.set(0,6,-10),s.environmentIntensity=.7,C.uMode.value=3,C.uGrid.value=1.2,C.uRough.value=.28,C.uRings.value=1;let P=[1,1.55,2.1],k=ht(F,E,.02,.5);C.uShock.value=(F-E)*14,C.uShockI.value=F>E?Math.exp(-(F-E)*1.2):0,C.uShockCol.value.setRGB(1,.2,.3),[[H,-7,1.3,.75],[T,0,.45,.35],[V,6.8,0,-.55]].forEach(([ce,ae,Ee,we],Te)=>{let I=ht(F,P[Te],.03,.6);ce.group.visible=!0,ce.group.position.set(ae,Ee+(ce===V?0:Math.sin(x*1.2+Te)*.07),0),ce.group.rotation.y=we+Math.sin(x*.3+Te)*.05,ce.u.uRim.value=.35+J(P[Te],P[Te]+.3,F)*.5+I*2+k,ce.u.uVein.value=J(P[Te],P[Te]+.5,F)*(.8+.4*Math.sin(x*3+Te)),ce.u.uSelf.value=I*.4,ce.u.uBand.value=2.5,ce.u.uBandPos.value=Pe(1.25,-.25,J(E+.2,E+1.8,F));let oe=d[Te];oe.mesh.visible=!0,oe.mesh.position.set(ae,0,0),oe.mesh.scale.set(2.3,40,2.3),oe.u.uCol.value.setRGB(1,.25,.35),oe.u.uI.value=J(P[Te]-.05,P[Te],F)*(.3+I*1.4)+k*.4}),h.position.set(0,4,5),h.color.setRGB(1,.3,.4),h.intensity=12+k*50,u.position.set(0,1,2),u.color.setRGB(1,.55,.25),u.intensity=6,v.embers.pts.visible=!0,v.embers.u.uI.value=1.1,v.embers.u.uR.value=14,v.embers.u.uSpd.value=1.2,v.embers.u.uCol.value.setRGB(1,.3,.15),v.embers.u.uSize.value=.06,v.dust.pts.visible=!0,v.dust.u.uI.value=.25,v.dust.u.uCol.value.setRGB(1,.8,.75),v.dust.u.uWind.value.set(.1,.05,0),v.sparks.pts.visible=F>E,v.sparks.u.uT0.value=xe.finTitle,v.sparks.u.uI.value=1.4,v.sparks.u.uO.value.set(0,.2,0),v.sparks.u.uSpd.value=18,v.sparks.u.uUp.value=.7,v.sparks.u.uCol.value.setRGB(1,.3,.2);let be=Ge.io(J(0,8,F)),ee=Gt(Me(1.5,1.6,7.5),Me(0,4.4,22),be),se=Gt(Me(0,1.8,0),Me(0,3.3,0),be),ve=0;P.forEach(ce=>ve+=ht(F,ce,.03,.3)*.06),ve+=k*.25,ue(ee,se,Pe(34,38,be),ve,x),O.uFlash.value=(1-J(0,.6,F))*1+k*.9,O.uFlashCol.value.setRGB(1,.55,.55),O.uCA.value+=k*.02,O.uZoom.value=k*.25,O.uFade.value=J(7.1,8,F),W.strength=.75+k*.8,g.hud=1-J(E-.3,E,F),g.hudL="COLLECTION MYTHIQUE",g.hudR="3 / 3 D\xC9TERR\xC9S",g.finale=F,g.flare=F>E?[...$(Me(0,2,0)),k*2]:null}function We(x){let g=_e,C=x.t;if(g.setTransform(1,0,0,1,0,0),g.clearRect(0,0,he,ye),g.setTransform(he/1920,0,0,ye/1080,0,0),x.whiteOut&&(g.save(),g.globalAlpha=Ge.in(x.whiteOut),g.fillStyle="#e8fbff",g.fillRect(0,0,1920,1080),g.restore()),x.flare&&x.flare[2]&&x.flare[3]>0&&o_(g,x.flare[0],x.flare[1],x.flare[3],x.flare[4]),x.hud&&(a_(g,x.hud*.8),l_(g,C,x.hud,x.hudL,x.hudR)),x.reticle&&x.reticle.a>0){let O=x.reticle;c_(g,O.p[0],O.p[1],C,O.a,O.label,O.sub,wi(O.prog))}if(x.intro){let O=fc(C,.6,2.5,.6,.5),F=fc(C,2.4,4.45,.5,.3);at(g,"IL Y A DES MILLIONS D'ANN\xC9ES\u2026",960,540,{size:46,weight:700,ls:Pe(6,14,J(.6,2.5,C)),color:ms,alpha:O,blur:(1-J(.6,1.2,C))*8,glow:20,glowColor:"rgba(255,120,60,.5)"}),at(g,"DES G\xC9ANTS ONT DISPARU SOUS TERRE.",960,540,{size:46,weight:700,ls:Pe(6,12,J(2.4,4.4,C)),color:ms,alpha:F,blur:(1-J(2.4,2.9,C))*8,glow:20,glowColor:"rgba(255,120,60,.5)"})}if(x.titleT!==void 0&&x.titleT>=0){let O=x.titleT,F=J(0,.05,O)*(1-J(2.6,3,O)),E=O<.45?Pe(1.9,1,Ge.outX(O/.45)):1+(O-.45)*.03+J(2.6,3,O)*.4;Ys(g,960,520,900,"0,0,0",0),g.save(),g.globalAlpha=F*.75;{let te=g.createRadialGradient(960,540,0,960,540,820);te.addColorStop(0,"rgba(0,0,0,.7)"),te.addColorStop(1,"rgba(0,0,0,0)"),g.fillStyle=te,g.fillRect(0,0,1920,1080)}g.restore(),xo(g,960,500,1e3,22,O*.2,"255,140,60",.13*F),at(g,"LE DINOSAURE",960,500,{size:170,weight:900,scale:E,ls:10,grad:["#fff8e6","#f6d38a","#d9932f","#7a4410"],glow:30,glow2:80,glowColor:"rgba(255,130,40,.8)",alpha:F,blur:O<.2?(1-O/.2)*14:0,stroke:"rgba(255,240,200,.45)",lw:1.5});let P=F*J(.6,1,O);g.save(),g.globalAlpha=P,g.fillStyle=Hn;let k=260*Ge.out(J(.6,1.2,O));g.fillRect(630-k,618,k,2),g.fillRect(1290,618,k,2),g.restore(),at(g,"\xC9DITION MYTHIQUE",960,620,{family:"Rajdhani",weight:700,size:40,ls:Pe(10,20,J(.6,3,O)),color:"#ffd1da",glow:18,glowColor:an,alpha:P})}if(x.stamp&&u_(g,C,x.stamp),x.card&&h_(g,C,x.card.t0,x.card.sp,x.card.found,x.card.out),x.finale!==void 0){let O=x.finale,F=xe.finTitle-xe.fin,E=1-J(7.1,7.9,O);if([["MOSASAURE",-7,3.4],["MAMMOUTH",0,3.4],["TITANOBOA",6.8,2.8]].forEach(([k,te,be],ee)=>{let se=$(Me(te,be,0)),ve=fc(O,[1,1.55,2.1][ee],F-.1,.25,.3);at(g,k,se[0],se[1]-30,{size:38,weight:900,ls:8,color:ms,alpha:ve,glow:18,glowColor:an}),at(g,"\u25C6 MYTHIQUE",se[0],se[1]+10,{family:"Rajdhani",weight:700,size:20,ls:6,color:"#ff8aa2",alpha:ve})}),O>F){let k=O-F,te=k<.4?Pe(1.8,1,Ge.outX(k/.4)):1+(k-.4)*.02;g.save(),g.globalAlpha=E*J(0,.3,k);{let be=g.createLinearGradient(0,108,0,520);be.addColorStop(0,"rgba(0,0,0,.75)"),be.addColorStop(1,"rgba(0,0,0,0)"),g.fillStyle=be,g.fillRect(0,108,1920,412)}g.restore(),xo(g,960,260,1100,26,k*.25,"255,70,90",.14*E),at(g,"LE DINOSAURE",960,260,{size:168,weight:900,scale:te,ls:10,grad:["#fff8e6","#f6d38a","#d9932f","#7a4410"],glow:30,glow2:80,glowColor:"rgba(255,90,60,.8)",alpha:J(0,.05,k)*E,blur:k<.2?(1-k/.2)*14:0,stroke:"rgba(255,240,200,.45)",lw:1.5}),at(g,"3 ESP\xC8CES MYTHIQUES  \xB7  12 OS CHACUNE",960,385,{family:"Rajdhani",weight:700,size:34,ls:10,color:ms,alpha:J(.6,1,k)*E}),g.save(),g.globalAlpha=E*J(1.2,1.6,k);{let be=g.createLinearGradient(0,760,0,972);be.addColorStop(0,"rgba(0,0,0,0)"),be.addColorStop(1,"rgba(0,0,0,.8)"),g.fillStyle=be,g.fillRect(0,760,1920,212)}g.restore(),at(g,"D\xC9TERRE-LES TOUS.",960,905,{size:64,weight:900,ls:8,grad:["#ffe9ee","#ff5a7a","#c4002f"],glow:26,glowColor:an,alpha:J(1.3,1.6,k)*E,scale:Pe(1.25,1,Ge.out(J(1.3,1.7,k)))}),at(g,"SUR ROBLOX",960,1030,{family:"Rajdhani",weight:700,size:30,ls:18,color:Hn,alpha:J(2,2.4,k)*E,glow:12})}}}let Ye=null;function De(x){Ye=Le(x),Q.render(),We(Ye)}let tt=document.createElement("canvas");function Ne(x,g=.93){De(x),tt.width=he,tt.height=ye;let C=tt.getContext("2d");return C.drawImage(n.domElement,0,0),C.drawImage(K,0,0),tt.toDataURL("image/jpeg",g)}return{render:De,capture:Ne,setSize:Ke,overlay:K,renderer:n,duration:q0}}export{q0 as DURATION,nv as createFilm};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
