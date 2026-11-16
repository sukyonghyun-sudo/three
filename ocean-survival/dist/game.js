(()=>{var pc="160";var vf=0,Tl=1,xf=2;var pd=1,yf=2,ln=3,Ye=0,Se=1,De=2;var Rn=0,Cn=1,Ki=2,Sl=3,Al=4,mc=5,un=100,_f=101,wf=102,Rl=103,Cl=104,Qr=200,Mf=201,gc=202,Ef=203,wa=204,Ah=205,Tf=206,Sf=207,Af=208,Rf=209,Cf=210,Pf=211,Lf=212,Ff=213,If=214,Df=0,kf=1,zf=2,wr=3,Uf=4,Nf=5,Of=6,Bf=7,md=0,Hf=1,Vf=2,Yi=0,Gf=1,Wf=2,qf=3,Xf=4,jf=5,Yf=6,Pl="attached",Kf="detached",gd=300,zs=301,Us=302,Rh=303,Ch=304,Zr=306,ii=1e3,Ke=1001,Ma=1002,Pe=1003,Mr=1004;var ma=1005;var Zt=1006,bc=1007;var Qe=1008;var Ne=1009,Qf=1010,Zf=1011,vc=1012,bd=1013,Sn=1014,dn=1015,pn=1016,vd=1017,xd=1018,Yn=1020,Jf=1021,de=1023,$f=1024,tp=1025,Kn=1026,Ns=1027,xc=1028,yd=1029,ep=1030,_d=1031,wd=1033,Wo=33776,qo=33777,Xo=33778,jo=33779,Ll=35840,Fl=35841,Il=35842,Dl=35843,Md=36196,kl=37492,zl=37496,Ul=37808,Nl=37809,Ol=37810,Bl=37811,Hl=37812,Vl=37813,Gl=37814,Wl=37815,ql=37816,Xl=37817,jl=37818,Yl=37819,Kl=37820,Ql=37821,Yo=36492,Zl=36494,Jl=36495,ip=36283,$l=36284,tu=36285,eu=36286;var Os=2300,Zn=2301,Ko=2302,iu=2400,nu=2401,su=2402,np=2500;var Ed=0,Jr=1,Da=2,Td=3e3,Qn=3001,sp=3200,ap=3201,Sd=0,rp=1,je="",fe="srgb",ke="srgb-linear",yc="display-p3",$r="display-p3-linear",Er="linear",xe="srgb",Tr="rec709",Sr="p3";var us=7680;var au=519,op=512,hp=513,cp=514,Ad=515,lp=516,up=517,dp=518,fp=519,Ph=35044,Hi=35048;var ru="300 es",Lh=1035,fn=2e3,Ar=2001,Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,t);t.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ou=1234567,ga=Math.PI/180,Bs=180/Math.PI;function Oi(){let a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ti[a&255]+ti[a>>8&255]+ti[a>>16&255]+ti[a>>24&255]+"-"+ti[t&255]+ti[t>>8&255]+"-"+ti[t>>16&15|64]+ti[t>>24&255]+"-"+ti[e&63|128]+ti[e>>8&255]+"-"+ti[e>>16&255]+ti[e>>24&255]+ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]).toLowerCase()}function Oe(a,t,e){return Math.max(t,Math.min(e,a))}function _c(a,t){return(a%t+t)%t}function pp(a,t,e,i,n){return i+(a-t)*(n-i)/(e-t)}function mp(a,t,e){return a!==t?(e-a)/(t-a):0}function ba(a,t,e){return(1-e)*a+e*t}function gp(a,t,e,i){return ba(a,t,1-Math.exp(-e*i))}function bp(a,t=1){return t-Math.abs(_c(a,t*2)-t)}function vp(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*(3-2*a))}function xp(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*a*(a*(a*6-15)+10))}function yp(a,t){return a+Math.floor(Math.random()*(t-a+1))}function _p(a,t){return a+Math.random()*(t-a)}function wp(a){return a*(.5-Math.random())}function Mp(a){a!==void 0&&(ou=a);let t=ou+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ep(a){return a*ga}function Tp(a){return a*Bs}function Fh(a){return(a&a-1)===0&&a!==0}function Sp(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Rr(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Ap(a,t,e,i,n){let s=Math.cos,r=Math.sin,o=s(e/2),h=r(e/2),c=s((t+i)/2),l=r((t+i)/2),u=s((t-i)/2),d=r((t-i)/2),f=s((i-t)/2),m=r((i-t)/2);switch(n){case"XYX":a.set(o*l,h*u,h*d,o*c);break;case"YZY":a.set(h*d,o*l,h*u,o*c);break;case"ZXZ":a.set(h*u,h*d,o*l,o*c);break;case"XZX":a.set(o*l,h*m,h*f,o*c);break;case"YXY":a.set(h*f,o*l,h*m,o*c);break;case"ZYZ":a.set(h*m,h*f,o*l,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ji(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ue(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var $i={DEG2RAD:ga,RAD2DEG:Bs,generateUUID:Oi,clamp:Oe,euclideanModulo:_c,mapLinear:pp,inverseLerp:mp,lerp:ba,damp:gp,pingpong:bp,smoothstep:vp,smootherstep:xp,randInt:yp,randFloat:_p,randFloatSpread:wp,seededRandom:Mp,degToRad:Ep,radToDeg:Tp,isPowerOfTwo:Fh,ceilPowerOfTwo:Sp,floorPowerOfTwo:Rr,setQuaternionFromProperEuler:Ap,normalize:ue,denormalize:ji},mt=class a{constructor(t=0,e=0){a.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*n+t.x,this.y=s*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class a{constructor(t,e,i,n,s,r,o,h,c){a.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,h,c)}set(t,e,i,n,s,r,o,h,c){let l=this.elements;return l[0]=t,l[1]=n,l[2]=o,l[3]=e,l[4]=s,l[5]=h,l[6]=i,l[7]=r,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[3],h=i[6],c=i[1],l=i[4],u=i[7],d=i[2],f=i[5],m=i[8],b=n[0],g=n[3],p=n[6],x=n[1],v=n[4],w=n[7],R=n[2],y=n[5],T=n[8];return s[0]=r*b+o*x+h*R,s[3]=r*g+o*v+h*y,s[6]=r*p+o*w+h*T,s[1]=c*b+l*x+u*R,s[4]=c*g+l*v+u*y,s[7]=c*p+l*w+u*T,s[2]=d*b+f*x+m*R,s[5]=d*g+f*v+m*y,s[8]=d*p+f*w+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],h=t[6],c=t[7],l=t[8];return e*r*l-e*o*c-i*s*l+i*o*h+n*s*c-n*r*h}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],h=t[6],c=t[7],l=t[8],u=l*r-o*c,d=o*h-l*s,f=c*s-r*h,m=e*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return t[0]=u*b,t[1]=(n*c-l*i)*b,t[2]=(o*i-n*r)*b,t[3]=d*b,t[4]=(l*e-n*h)*b,t[5]=(n*s-o*e)*b,t[6]=f*b,t[7]=(i*h-c*e)*b,t[8]=(r*e-i*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,r,o){let h=Math.cos(s),c=Math.sin(s);return this.set(i*h,i*c,-i*(h*r+c*o)+r+t,-n*c,n*h,-n*(-c*r+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qo.makeScale(t,e)),this}rotate(t){return this.premultiply(Qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qo=new ee;function Rd(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Ea(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Rp(){let a=Ea("canvas");return a.style.display="block",a}var hu={};function va(a){a in hu||(hu[a]=!0,console.warn(a))}var cu=new ee().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lu=new ee().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wa={[ke]:{transfer:Er,primaries:Tr,toReference:a=>a,fromReference:a=>a},[fe]:{transfer:xe,primaries:Tr,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[$r]:{transfer:Er,primaries:Sr,toReference:a=>a.applyMatrix3(lu),fromReference:a=>a.applyMatrix3(cu)},[yc]:{transfer:xe,primaries:Sr,toReference:a=>a.convertSRGBToLinear().applyMatrix3(lu),fromReference:a=>a.applyMatrix3(cu).convertLinearToSRGB()}},Cp=new Set([ke,$r]),le={enabled:!0,_workingColorSpace:ke,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Cp.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;let i=Wa[t].toReference,n=Wa[e].fromReference;return n(i(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this._workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this._workingColorSpace)},getPrimaries:function(a){return Wa[a].primaries},getTransfer:function(a){return a===je?Er:Wa[a].transfer}};function Ds(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Zo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var ds,Cr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=Ea("canvas")),ds.width=t.width,ds.height=t.height;let i=ds.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ea("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=Ds(s[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ds(e[i]/255)*255):e[i]=Ds(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pp=0,Pr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Oi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?s.push(Jo(n[r].image)):s.push(Jo(n[r]))}else s=Jo(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function Jo(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Cr.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lp=0,Ze=class a extends Pn{constructor(t=a.DEFAULT_IMAGE,e=a.DEFAULT_MAPPING,i=Ke,n=Ke,s=Zt,r=Qe,o=de,h=Ne,c=a.DEFAULT_ANISOTROPY,l=je){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Oi(),this.name="",this.source=new Pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===Qn?fe:je),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ii:t.x=t.x-Math.floor(t.x);break;case Ke:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ii:t.y=t.y-Math.floor(t.y);break;case Ke:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?Qn:Td}set encoding(t){va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Qn?fe:je}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=gd;Ze.DEFAULT_ANISOTROPY=1;var ie=class a{constructor(t=0,e=0,i=0,n=1){a.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,h=t.elements,c=h[0],l=h[4],u=h[8],d=h[1],f=h[5],m=h[9],b=h[2],g=h[6],p=h[10];if(Math.abs(l-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,w=(f+1)/2,R=(p+1)/2,y=(l+d)/4,T=(u+b)/4,S=(m+g)/4;return v>w&&v>R?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=y/i,s=T/i):w>R?w<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(w),i=y/n,s=S/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=T/s,n=S/s),this.set(i,n,s,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-l)*(d-l));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(d-l)/x,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ih=class extends Pn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Qn?fe:je),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ze(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Pr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_e=class extends Ih{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Lr=class extends Ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dh=class extends Ze{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yt=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,r,o){let h=i[n+0],c=i[n+1],l=i[n+2],u=i[n+3],d=s[r+0],f=s[r+1],m=s[r+2],b=s[r+3];if(o===0){t[e+0]=h,t[e+1]=c,t[e+2]=l,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=b;return}if(u!==b||h!==d||c!==f||l!==m){let g=1-o,p=h*d+c*f+l*m+u*b,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let R=Math.sqrt(v),y=Math.atan2(R,p*x);g=Math.sin(g*y)/R,o=Math.sin(o*y)/R}let w=o*x;if(h=h*g+d*w,c=c*g+f*w,l=l*g+m*w,u=u*g+b*w,g===1-o){let R=1/Math.sqrt(h*h+c*c+l*l+u*u);h*=R,c*=R,l*=R,u*=R}}t[e]=h,t[e+1]=c,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,r){let o=i[n],h=i[n+1],c=i[n+2],l=i[n+3],u=s[r],d=s[r+1],f=s[r+2],m=s[r+3];return t[e]=o*m+l*u+h*f-c*d,t[e+1]=h*m+l*d+c*u-o*f,t[e+2]=c*m+l*f+o*d-h*u,t[e+3]=l*m-o*u-h*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,r=t._order,o=Math.cos,h=Math.sin,c=o(i/2),l=o(n/2),u=o(s/2),d=h(i/2),f=h(n/2),m=h(s/2);switch(r){case"XYZ":this._x=d*l*u+c*f*m,this._y=c*f*u-d*l*m,this._z=c*l*m+d*f*u,this._w=c*l*u-d*f*m;break;case"YXZ":this._x=d*l*u+c*f*m,this._y=c*f*u-d*l*m,this._z=c*l*m-d*f*u,this._w=c*l*u+d*f*m;break;case"ZXY":this._x=d*l*u-c*f*m,this._y=c*f*u+d*l*m,this._z=c*l*m+d*f*u,this._w=c*l*u-d*f*m;break;case"ZYX":this._x=d*l*u-c*f*m,this._y=c*f*u+d*l*m,this._z=c*l*m-d*f*u,this._w=c*l*u+d*f*m;break;case"YZX":this._x=d*l*u+c*f*m,this._y=c*f*u+d*l*m,this._z=c*l*m-d*f*u,this._w=c*l*u-d*f*m;break;case"XZY":this._x=d*l*u-c*f*m,this._y=c*f*u-d*l*m,this._z=c*l*m+d*f*u,this._w=c*l*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],r=e[1],o=e[5],h=e[9],c=e[2],l=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-h)*f,this._y=(s-c)*f,this._z=(r-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(l-h)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(h+l)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(r-n)/f,this._x=(s+c)/f,this._y=(h+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,r=t._w,o=e._x,h=e._y,c=e._z,l=e._w;return this._x=i*l+r*o+n*c-s*h,this._y=n*l+r*h+s*o-i*c,this._z=s*l+r*c+i*h-n*o,this._w=r*l-i*o-n*h-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,r=this._w,o=r*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=n,this._z=s,this;let h=1-o*o;if(h<=Number.EPSILON){let f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(h),l=Math.atan2(c,o),u=Math.sin((1-e)*l)/c,d=Math.sin(e*l)/c;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class a{constructor(t=0,e=0,i=0){a.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,o=t.z,h=t.w,c=2*(r*n-o*i),l=2*(o*e-s*n),u=2*(s*i-r*e);return this.x=e+h*c+r*u-o*l,this.y=i+h*l+o*c-s*u,this.z=n+h*u+s*l-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,r=e.x,o=e.y,h=e.z;return this.x=n*h-s*o,this.y=s*r-i*h,this.z=i*o-n*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $o.copy(this).projectOnVector(t),this.sub($o)}reflect(t){return this.sub($o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$o=new M,uu=new yt,Pi=class{constructor(t=new M(1/0,1/0,1/0),e=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(zi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(zi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=zi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,zi):zi.fromBufferAttribute(s,r),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qa.copy(i.boundingBox)),qa.applyMatrix4(t.matrixWorld),this.union(qa)}let n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(aa),Xa.subVectors(this.max,aa),fs.subVectors(t.a,aa),ps.subVectors(t.b,aa),ms.subVectors(t.c,aa),_n.subVectors(ps,fs),wn.subVectors(ms,ps),Hn.subVectors(fs,ms);let e=[0,-_n.z,_n.y,0,-wn.z,wn.y,0,-Hn.z,Hn.y,_n.z,0,-_n.x,wn.z,0,-wn.x,Hn.z,0,-Hn.x,-_n.y,_n.x,0,-wn.y,wn.x,0,-Hn.y,Hn.x,0];return!th(e,fs,ps,ms,Xa)||(e=[1,0,0,0,1,0,0,0,1],!th(e,fs,ps,ms,Xa))?!1:(ja.crossVectors(_n,wn),e=[ja.x,ja.y,ja.z],th(e,fs,ps,ms,Xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},sn=[new M,new M,new M,new M,new M,new M,new M,new M],zi=new M,qa=new Pi,fs=new M,ps=new M,ms=new M,_n=new M,wn=new M,Hn=new M,aa=new M,Xa=new M,ja=new M,Vn=new M;function th(a,t,e,i,n){for(let s=0,r=a.length-3;s<=r;s+=3){Vn.fromArray(a,s);let o=n.x*Math.abs(Vn.x)+n.y*Math.abs(Vn.y)+n.z*Math.abs(Vn.z),h=t.dot(Vn),c=e.dot(Vn),l=i.dot(Vn);if(Math.max(-Math.max(h,c,l),Math.min(h,c,l))>o)return!1}return!0}var Fp=new Pi,ra=new M,eh=new M,Mi=class{constructor(t=new M,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Fp.setFromPoints(t).getCenter(i);let n=0;for(let s=0,r=t.length;s<r;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ra.subVectors(t,this.center);let e=ra.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ra,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ra.copy(t.center).add(eh)),this.expandByPoint(ra.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},an=new M,ih=new M,Ya=new M,Mn=new M,nh=new M,Ka=new M,sh=new M,Hs=class{constructor(t=new M,e=new M(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){ih.copy(t).add(e).multiplyScalar(.5),Ya.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(ih);let s=t.distanceTo(e)*.5,r=-this.direction.dot(Ya),o=Mn.dot(this.direction),h=-Mn.dot(Ya),c=Mn.lengthSq(),l=Math.abs(1-r*r),u,d,f,m;if(l>0)if(u=r*h-o,d=r*o-h,m=s*l,u>=0)if(d>=-m)if(d<=m){let b=1/l;u*=b,d*=b,f=u*(u+r*d+2*o)+d*(r*u+d+2*h)+c}else d=s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*h)+c;else d=-s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*h)+c;else d<=-m?(u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-h),s),f=-u*u+d*(d+2*h)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-h),s),f=d*(d+2*h)+c):(u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-h),s),f=-u*u+d*(d+2*h)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*h)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ih).addScaledVector(Ya,d),f}intersectSphere(t,e){an.subVectors(t.center,this.origin);let i=an.dot(this.direction),n=an.dot(an)-i*i,s=t.radius*t.radius;if(n>s)return null;let r=Math.sqrt(s-n),o=i-r,h=i+r;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,r,o,h,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),l>=0?(s=(t.min.y-d.y)*l,r=(t.max.y-d.y)*l):(s=(t.max.y-d.y)*l,r=(t.min.y-d.y)*l),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),u>=0?(o=(t.min.z-d.z)*u,h=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,h=(t.min.z-d.z)*u),i>h||o>n)||((o>i||i!==i)&&(i=o),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,i,n,s){nh.subVectors(e,t),Ka.subVectors(i,t),sh.crossVectors(nh,Ka);let r=this.direction.dot(sh),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Mn.subVectors(this.origin,t);let h=o*this.direction.dot(Ka.crossVectors(Mn,Ka));if(h<0)return null;let c=o*this.direction.dot(nh.cross(Mn));if(c<0||h+c>r)return null;let l=-o*Mn.dot(sh);return l<0?null:this.at(l/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class a{constructor(t,e,i,n,s,r,o,h,c,l,u,d,f,m,b,g){a.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,h,c,l,u,d,f,m,b,g)}set(t,e,i,n,s,r,o,h,c,l,u,d,f,m,b,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=r,p[9]=o,p[13]=h,p[2]=c,p[6]=l,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/gs.setFromMatrixColumn(t,0).length(),s=1/gs.setFromMatrixColumn(t,1).length(),r=1/gs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),h=Math.cos(n),c=Math.sin(n),l=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=r*l,f=r*u,m=o*l,b=o*u;e[0]=h*l,e[4]=-h*u,e[8]=c,e[1]=f+m*c,e[5]=d-b*c,e[9]=-o*h,e[2]=b-d*c,e[6]=m+f*c,e[10]=r*h}else if(t.order==="YXZ"){let d=h*l,f=h*u,m=c*l,b=c*u;e[0]=d+b*o,e[4]=m*o-f,e[8]=r*c,e[1]=r*u,e[5]=r*l,e[9]=-o,e[2]=f*o-m,e[6]=b+d*o,e[10]=r*h}else if(t.order==="ZXY"){let d=h*l,f=h*u,m=c*l,b=c*u;e[0]=d-b*o,e[4]=-r*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=r*l,e[9]=b-d*o,e[2]=-r*c,e[6]=o,e[10]=r*h}else if(t.order==="ZYX"){let d=r*l,f=r*u,m=o*l,b=o*u;e[0]=h*l,e[4]=m*c-f,e[8]=d*c+b,e[1]=h*u,e[5]=b*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*h,e[10]=r*h}else if(t.order==="YZX"){let d=r*h,f=r*c,m=o*h,b=o*c;e[0]=h*l,e[4]=b-d*u,e[8]=m*u+f,e[1]=u,e[5]=r*l,e[9]=-o*l,e[2]=-c*l,e[6]=f*u+m,e[10]=d-b*u}else if(t.order==="XZY"){let d=r*h,f=r*c,m=o*h,b=o*c;e[0]=h*l,e[4]=-u,e[8]=c*l,e[1]=d*u+b,e[5]=r*l,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*l,e[10]=b*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ip,t,Dp)}lookAt(t,e,i){let n=this.elements;return yi.subVectors(t,e),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),En.crossVectors(i,yi),En.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),En.crossVectors(i,yi)),En.normalize(),Qa.crossVectors(yi,En),n[0]=En.x,n[4]=Qa.x,n[8]=yi.x,n[1]=En.y,n[5]=Qa.y,n[9]=yi.y,n[2]=En.z,n[6]=Qa.z,n[10]=yi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[4],h=i[8],c=i[12],l=i[1],u=i[5],d=i[9],f=i[13],m=i[2],b=i[6],g=i[10],p=i[14],x=i[3],v=i[7],w=i[11],R=i[15],y=n[0],T=n[4],S=n[8],_=n[12],E=n[1],I=n[5],W=n[9],Y=n[13],k=n[2],z=n[6],O=n[10],U=n[14],N=n[3],D=n[7],P=n[11],G=n[15];return s[0]=r*y+o*E+h*k+c*N,s[4]=r*T+o*I+h*z+c*D,s[8]=r*S+o*W+h*O+c*P,s[12]=r*_+o*Y+h*U+c*G,s[1]=l*y+u*E+d*k+f*N,s[5]=l*T+u*I+d*z+f*D,s[9]=l*S+u*W+d*O+f*P,s[13]=l*_+u*Y+d*U+f*G,s[2]=m*y+b*E+g*k+p*N,s[6]=m*T+b*I+g*z+p*D,s[10]=m*S+b*W+g*O+p*P,s[14]=m*_+b*Y+g*U+p*G,s[3]=x*y+v*E+w*k+R*N,s[7]=x*T+v*I+w*z+R*D,s[11]=x*S+v*W+w*O+R*P,s[15]=x*_+v*Y+w*U+R*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],r=t[1],o=t[5],h=t[9],c=t[13],l=t[2],u=t[6],d=t[10],f=t[14],m=t[3],b=t[7],g=t[11],p=t[15];return m*(+s*h*u-n*c*u-s*o*d+i*c*d+n*o*f-i*h*f)+b*(+e*h*f-e*c*d+s*r*d-n*r*f+n*c*l-s*h*l)+g*(+e*c*u-e*o*f-s*r*u+i*r*f+s*o*l-i*c*l)+p*(-n*o*l-e*h*u+e*o*d+n*r*u-i*r*d+i*h*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],h=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11],m=t[12],b=t[13],g=t[14],p=t[15],x=u*g*c-b*d*c+b*h*f-o*g*f-u*h*p+o*d*p,v=m*d*c-l*g*c-m*h*f+r*g*f+l*h*p-r*d*p,w=l*b*c-m*u*c+m*o*f-r*b*f-l*o*p+r*u*p,R=m*u*h-l*b*h-m*o*d+r*b*d+l*o*g-r*u*g,y=e*x+i*v+n*w+s*R;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/y;return t[0]=x*T,t[1]=(b*d*s-u*g*s-b*n*f+i*g*f+u*n*p-i*d*p)*T,t[2]=(o*g*s-b*h*s+b*n*c-i*g*c-o*n*p+i*h*p)*T,t[3]=(u*h*s-o*d*s-u*n*c+i*d*c+o*n*f-i*h*f)*T,t[4]=v*T,t[5]=(l*g*s-m*d*s+m*n*f-e*g*f-l*n*p+e*d*p)*T,t[6]=(m*h*s-r*g*s-m*n*c+e*g*c+r*n*p-e*h*p)*T,t[7]=(r*d*s-l*h*s+l*n*c-e*d*c-r*n*f+e*h*f)*T,t[8]=w*T,t[9]=(m*u*s-l*b*s-m*i*f+e*b*f+l*i*p-e*u*p)*T,t[10]=(r*b*s-m*o*s+m*i*c-e*b*c-r*i*p+e*o*p)*T,t[11]=(l*o*s-r*u*s-l*i*c+e*u*c+r*i*f-e*o*f)*T,t[12]=R*T,t[13]=(l*b*n-m*u*n+m*i*d-e*b*d-l*i*g+e*u*g)*T,t[14]=(m*o*n-r*b*n-m*i*h+e*b*h+r*i*g-e*o*g)*T,t[15]=(r*u*n-l*o*n+l*i*h-e*u*h-r*i*d+e*o*d)*T,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,r=t.x,o=t.y,h=t.z,c=s*r,l=s*o;return this.set(c*r+i,c*o-n*h,c*h+n*o,0,c*o+n*h,l*o+i,l*h-n*r,0,c*h-n*o,l*h+n*r,s*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,r){return this.set(1,i,s,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,r=e._y,o=e._z,h=e._w,c=s+s,l=r+r,u=o+o,d=s*c,f=s*l,m=s*u,b=r*l,g=r*u,p=o*u,x=h*c,v=h*l,w=h*u,R=i.x,y=i.y,T=i.z;return n[0]=(1-(b+p))*R,n[1]=(f+w)*R,n[2]=(m-v)*R,n[3]=0,n[4]=(f-w)*y,n[5]=(1-(d+p))*y,n[6]=(g+x)*y,n[7]=0,n[8]=(m+v)*T,n[9]=(g-x)*T,n[10]=(1-(d+b))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=gs.set(n[0],n[1],n[2]).length(),r=gs.set(n[4],n[5],n[6]).length(),o=gs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ui.copy(this);let c=1/s,l=1/r,u=1/o;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=l,Ui.elements[5]*=l,Ui.elements[6]*=l,Ui.elements[8]*=u,Ui.elements[9]*=u,Ui.elements[10]*=u,e.setFromRotationMatrix(Ui),i.x=s,i.y=r,i.z=o,this}makePerspective(t,e,i,n,s,r,o=fn){let h=this.elements,c=2*s/(e-t),l=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,m;if(o===fn)f=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(o===Ar)f=-r/(r-s),m=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=l,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=f,h[14]=m,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,n,s,r,o=fn){let h=this.elements,c=1/(e-t),l=1/(i-n),u=1/(r-s),d=(e+t)*c,f=(i+n)*l,m,b;if(o===fn)m=(r+s)*u,b=-2*u;else if(o===Ar)m=s*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*c,h[4]=0,h[8]=0,h[12]=-d,h[1]=0,h[5]=2*l,h[9]=0,h[13]=-f,h[2]=0,h[6]=0,h[10]=b,h[14]=-m,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},gs=new M,Ui=new Rt,Ip=new M(0,0,0),Dp=new M(1,1,1),En=new M,Qa=new M,yi=new M,du=new Rt,fu=new yt,pi=class a{constructor(t=0,e=0,i=0,n=a.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],r=n[4],o=n[8],h=n[1],c=n[5],l=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Oe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(du,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fu.setFromEuler(this),this.setFromQuaternion(fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pi.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kp=0,pu=new M,bs=new yt,rn=new Rt,Za=new M,oa=new M,zp=new M,Up=new yt,mu=new M(1,0,0),gu=new M(0,1,0),bu=new M(0,0,1),Np={type:"added"},Op={type:"removed"},Ae=class a extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let t=new M,e=new pi,i=new yt,n=new M(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Rt},normalMatrix:{value:new ee}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(mu,t)}rotateY(t){return this.rotateOnAxis(gu,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,e){return pu.copy(t).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mu,t)}translateY(t){return this.translateOnAxis(gu,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Za.copy(t):Za.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(oa,Za,this.up):rn.lookAt(Za,oa,this.up),this.quaternion.setFromRotationMatrix(rn),n&&(rn.extractRotation(n.matrixWorld),bs.setFromRotationMatrix(rn),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Np)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Op)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,t,zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,Up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,r=n.length;s<r;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let c=0,l=h.length;c<l;c++){let u=h[c];s(t.shapes,u)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(s(t.materials,this.material[h]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];n.animations.push(s(t.animations,h))}}if(e){let o=r(t.geometries),h=r(t.materials),c=r(t.textures),l=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),m=r(t.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),c.length>0&&(i.textures=c),l.length>0&&(i.images=l),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function r(o){let h=[];for(let c in o){let l=o[c];delete l.metadata,h.push(l)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Ae.DEFAULT_UP=new M(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ni=new M,on=new M,ah=new M,hn=new M,vs=new M,xs=new M,vu=new M,rh=new M,oh=new M,hh=new M,Ja=!1,jn=class a{constructor(t=new M,e=new M,i=new M){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ni.subVectors(t,e),n.cross(Ni);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ni.subVectors(n,e),on.subVectors(i,e),ah.subVectors(t,e);let r=Ni.dot(Ni),o=Ni.dot(on),h=Ni.dot(ah),c=on.dot(on),l=on.dot(ah),u=r*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*h-o*l)*d,m=(r*l-o*h)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(t,e,i,n,s,r,o,h){return Ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ja=!0),this.getInterpolation(t,e,i,n,s,r,o,h)}static getInterpolation(t,e,i,n,s,r,o,h){return this.getBarycoord(t,e,i,n,hn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,hn.x),h.addScaledVector(r,hn.y),h.addScaledVector(o,hn.z),h)}static isFrontFacing(t,e,i,n){return Ni.subVectors(i,e),on.subVectors(t,e),Ni.cross(on).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Ni.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return a.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return a.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return Ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ja=!0),a.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return a.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return a.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return a.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,r,o;vs.subVectors(n,i),xs.subVectors(s,i),rh.subVectors(t,i);let h=vs.dot(rh),c=xs.dot(rh);if(h<=0&&c<=0)return e.copy(i);oh.subVectors(t,n);let l=vs.dot(oh),u=xs.dot(oh);if(l>=0&&u<=l)return e.copy(n);let d=h*u-l*c;if(d<=0&&h>=0&&l<=0)return r=h/(h-l),e.copy(i).addScaledVector(vs,r);hh.subVectors(t,s);let f=vs.dot(hh),m=xs.dot(hh);if(m>=0&&f<=m)return e.copy(s);let b=f*c-h*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(xs,o);let g=l*m-f*u;if(g<=0&&u-l>=0&&f-m>=0)return vu.subVectors(s,n),o=(u-l)/(u-l+(f-m)),e.copy(n).addScaledVector(vu,o);let p=1/(g+b+d);return r=b*p,o=d*p,e.copy(i).addScaledVector(vs,r).addScaledVector(xs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},$a={h:0,s:0,l:0};function ch(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}var Dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=le.workingColorSpace){if(t=_c(t,1),e=Oe(e,0,1),i=Oe(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=ch(r,s,t+1/3),this.g=ch(r,s,t),this.b=ch(r,s,t-1/3)}return le.toWorkingColorSpace(this,n),this}setStyle(t,e=fe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){let i=Cd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}copyLinearToSRGB(t){return this.r=Zo(t.r),this.g=Zo(t.g),this.b=Zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return le.fromWorkingColorSpace(ei.copy(this),t),Math.round(Oe(ei.r*255,0,255))*65536+Math.round(Oe(ei.g*255,0,255))*256+Math.round(Oe(ei.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(ei.copy(this),e);let i=ei.r,n=ei.g,s=ei.b,r=Math.max(i,n,s),o=Math.min(i,n,s),h,c,l=(o+r)/2;if(o===r)h=0,c=0;else{let u=r-o;switch(c=l<=.5?u/(r+o):u/(2-r-o),r){case i:h=(n-s)/u+(n<s?6:0);break;case n:h=(s-i)/u+2;break;case s:h=(i-n)/u+4;break}h/=6}return t.h=h,t.s=c,t.l=l,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(ei.copy(this),e),t.r=ei.r,t.g=ei.g,t.b=ei.b,t}getStyle(t=fe){le.fromWorkingColorSpace(ei.copy(this),t);let e=ei.r,i=ei.g,n=ei.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL($a);let i=ba(Tn.h,$a.h,e),n=ba(Tn.s,$a.s,e),s=ba(Tn.l,$a.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ei=new Dt;Dt.NAMES=Cd;var Bp=0,mi=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Cn,this.side=Ye,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ah,this.blendEquation=un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cn&&(i.blending=this.blending),this.side!==Ye&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ah&&(i.blendDst=this.blendDst),this.blendEquation!==un&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let r=[];for(let o in s){let h=s[o];delete h.metadata,r.push(h)}return r}if(e){let s=n(t.textures),r=n(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},He=class extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=new M,tr=new mt,Bt=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ji(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ph&&(t.usage=this.usage),t}};var Vs=class extends Bt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ir=class extends Bt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var re=class extends Bt{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Hp=0,Ci=new Rt,lh=new Ae,ys=new M,_i=new Pi,ha=new Pi,Xe=new M,he=class a extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rd(t)?Ir:Vs)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ee().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,e,i){return Ci.makeTranslation(t,e,i),this.applyMatrix4(Ci),this}scale(t,e,i){return Ci.makeScale(t,e,i),this.applyMatrix4(Ci),this}lookAt(t){return lh.lookAt(t),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(t){let i=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let o=e[s];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(_i.min,ha.min),_i.expandByPoint(Xe),Xe.addVectors(_i.max,ha.max),_i.expandByPoint(Xe)):(_i.expandByPoint(ha.min),_i.expandByPoint(ha.max))}_i.getCenter(i);let n=0;for(let s=0,r=t.count;s<r;s++)Xe.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Xe));if(e)for(let s=0,r=e.length;s<r;s++){let o=e[s],h=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Xe.fromBufferAttribute(o,c),h&&(ys.fromBufferAttribute(t,c),Xe.add(ys)),n=Math.max(n,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,s=e.normal.array,r=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*o),4));let h=this.getAttribute("tangent").array,c=[],l=[];for(let E=0;E<o;E++)c[E]=new M,l[E]=new M;let u=new M,d=new M,f=new M,m=new mt,b=new mt,g=new mt,p=new M,x=new M;function v(E,I,W){u.fromArray(n,E*3),d.fromArray(n,I*3),f.fromArray(n,W*3),m.fromArray(r,E*2),b.fromArray(r,I*2),g.fromArray(r,W*2),d.sub(u),f.sub(u),b.sub(m),g.sub(m);let Y=1/(b.x*g.y-g.x*b.y);isFinite(Y)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-b.y).multiplyScalar(Y),x.copy(f).multiplyScalar(b.x).addScaledVector(d,-g.x).multiplyScalar(Y),c[E].add(p),c[I].add(p),c[W].add(p),l[E].add(x),l[I].add(x),l[W].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let E=0,I=w.length;E<I;++E){let W=w[E],Y=W.start,k=W.count;for(let z=Y,O=Y+k;z<O;z+=3)v(i[z+0],i[z+1],i[z+2])}let R=new M,y=new M,T=new M,S=new M;function _(E){T.fromArray(s,E*3),S.copy(T);let I=c[E];R.copy(I),R.sub(T.multiplyScalar(T.dot(I))).normalize(),y.crossVectors(S,I);let Y=y.dot(l[E])<0?-1:1;h[E*4]=R.x,h[E*4+1]=R.y,h[E*4+2]=R.z,h[E*4+3]=Y}for(let E=0,I=w.length;E<I;++E){let W=w[E],Y=W.start,k=W.count;for(let z=Y,O=Y+k;z<O;z+=3)_(i[z+0]),_(i[z+1]),_(i[z+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new M,s=new M,r=new M,o=new M,h=new M,c=new M,l=new M,u=new M;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),b=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,m),s.fromBufferAttribute(e,b),r.fromBufferAttribute(e,g),l.subVectors(r,s),u.subVectors(n,s),l.cross(u),o.fromBufferAttribute(i,m),h.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(l),h.add(l),c.add(l),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(b,h.x,h.y,h.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),l.subVectors(r,s),u.subVectors(n,s),l.cross(u),i.setXYZ(d+0,l.x,l.y,l.z),i.setXYZ(d+1,l.x,l.y,l.z),i.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,h){let c=o.array,l=o.itemSize,u=o.normalized,d=new c.constructor(h.length*l),f=0,m=0;for(let b=0,g=h.length;b<g;b++){o.isInterleavedBufferAttribute?f=h[b]*o.data.stride+o.offset:f=h[b]*l;for(let p=0;p<l;p++)d[m++]=c[f++]}return new Bt(d,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new a,i=this.index.array,n=this.attributes;for(let o in n){let h=n[o],c=t(h,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let h=[],c=s[o];for(let l=0,u=c.length;l<u;l++){let d=c[l],f=t(d,i);h.push(f)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,h=r.length;o<h;o++){let c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let h in i){let c=i[h];t.data.attributes[h]=c.toJSON(t.data)}let n={},s=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],l=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];l.push(f.toJSON(t.data))}l.length>0&&(n[h]=l,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let l=n[c];this.setAttribute(c,l.clone(e))}let s=t.morphAttributes;for(let c in s){let l=[],u=s[c];for(let d=0,f=u.length;d<f;d++)l.push(u[d].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,l=r.length;c<l;c++){let u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},xu=new Rt,Gn=new Hs,er=new Mi,yu=new M,_s=new M,ws=new M,Ms=new M,uh=new M,ir=new M,nr=new mt,sr=new mt,ar=new mt,_u=new M,wu=new M,Mu=new M,rr=new M,or=new M,ut=class extends Ae{constructor(t=new he,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){ir.set(0,0,0);for(let h=0,c=s.length;h<c;h++){let l=o[h],u=s[h];l!==0&&(uh.fromBufferAttribute(u,t),r?ir.addScaledVector(uh,l):ir.addScaledVector(uh.sub(e),l))}e.add(ir)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),er.copy(i.boundingSphere),er.applyMatrix4(s),Gn.copy(t.ray).recast(t.near),!(er.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(er,yu)===null||Gn.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(xu.copy(s).invert(),Gn.copy(t.ray).applyMatrix4(xu),!(i.boundingBox!==null&&Gn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,i){let n,s=this.geometry,r=this.material,o=s.index,h=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=r[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let w=x,R=v;w<R;w+=3){let y=o.getX(w),T=o.getX(w+1),S=o.getX(w+2);n=hr(this,p,t,i,c,l,u,y,T,S),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=o.getX(g),v=o.getX(g+1),w=o.getX(g+2);n=hr(this,r,t,i,c,l,u,x,v,w),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(h!==void 0)if(Array.isArray(r))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=r[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(h.count,Math.min(g.start+g.count,f.start+f.count));for(let w=x,R=v;w<R;w+=3){let y=w,T=w+1,S=w+2;n=hr(this,p,t,i,c,l,u,y,T,S),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,f.start),b=Math.min(h.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=g,v=g+1,w=g+2;n=hr(this,r,t,i,c,l,u,x,v,w),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function Vp(a,t,e,i,n,s,r,o){let h;if(t.side===Se?h=i.intersectTriangle(r,s,n,!0,o):h=i.intersectTriangle(n,s,r,t.side===Ye,o),h===null)return null;or.copy(o),or.applyMatrix4(a.matrixWorld);let c=e.ray.origin.distanceTo(or);return c<e.near||c>e.far?null:{distance:c,point:or.clone(),object:a}}function hr(a,t,e,i,n,s,r,o,h,c){a.getVertexPosition(o,_s),a.getVertexPosition(h,ws),a.getVertexPosition(c,Ms);let l=Vp(a,t,e,i,_s,ws,Ms,rr);if(l){n&&(nr.fromBufferAttribute(n,o),sr.fromBufferAttribute(n,h),ar.fromBufferAttribute(n,c),l.uv=jn.getInterpolation(rr,_s,ws,Ms,nr,sr,ar,new mt)),s&&(nr.fromBufferAttribute(s,o),sr.fromBufferAttribute(s,h),ar.fromBufferAttribute(s,c),l.uv1=jn.getInterpolation(rr,_s,ws,Ms,nr,sr,ar,new mt),l.uv2=l.uv1),r&&(_u.fromBufferAttribute(r,o),wu.fromBufferAttribute(r,h),Mu.fromBufferAttribute(r,c),l.normal=jn.getInterpolation(rr,_s,ws,Ms,_u,wu,Mu,new M),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));let u={a:o,b:h,c,normal:new M,materialIndex:0};jn.getNormal(_s,ws,Ms,u.normal),l.face=u}return l}var Le=class a extends he{constructor(t=1,e=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};let o=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);let h=[],c=[],l=[],u=[],d=0,f=0;m("z","y","x",-1,-1,i,e,t,r,s,0),m("z","y","x",1,-1,i,e,-t,r,s,1),m("x","z","y",1,1,t,i,e,n,r,2),m("x","z","y",1,-1,t,i,-e,n,r,3),m("x","y","z",1,-1,t,e,i,n,s,4),m("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(h),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(u,2));function m(b,g,p,x,v,w,R,y,T,S,_){let E=w/T,I=R/S,W=w/2,Y=R/2,k=y/2,z=T+1,O=S+1,U=0,N=0,D=new M;for(let P=0;P<O;P++){let G=P*I-Y;for(let V=0;V<z;V++){let H=V*E-W;D[b]=H*x,D[g]=G*v,D[p]=k,c.push(D.x,D.y,D.z),D[b]=0,D[g]=0,D[p]=y>0?1:-1,l.push(D.x,D.y,D.z),u.push(V/T),u.push(1-P/S),U+=1}}for(let P=0;P<S;P++)for(let G=0;G<T;G++){let V=d+G+z*P,H=d+G+z*(P+1),B=d+(G+1)+z*(P+1),j=d+(G+1)+z*P;h.push(V,H,j),h.push(H,B,j),N+=6}o.addGroup(f,N,_),f+=N,d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Gs(a){let t={};for(let e in a){t[e]={};for(let i in a[e]){let n=a[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function hi(a){let t={};for(let e=0;e<a.length;e++){let i=Gs(a[e]);for(let n in i)t[n]=i[n]}return t}function Gp(a){let t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function Pd(a){return a.getRenderTarget()===null?a.outputColorSpace:le.workingColorSpace}var Wp={clone:Gs,merge:hi},qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ne=class extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gs(t.uniforms),this.uniformsGroups=Gp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Dr=class extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Be=class extends Dr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ga*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,r=this.view;if(this.view!==null&&this.view.enabled){let h=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/h,e-=r.offsetY*i/c,n*=r.width/h,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Es=-90,Ts=1,kh=class extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Be(Es,Ts,t,e);n.layers=this.layers,this.add(n);let s=new Be(Es,Ts,t,e);s.layers=this.layers,this.add(s);let r=new Be(Es,Ts,t,e);r.layers=this.layers,this.add(r);let o=new Be(Es,Ts,t,e);o.layers=this.layers,this.add(o);let h=new Be(Es,Ts,t,e);h.layers=this.layers,this.add(h);let c=new Be(Es,Ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,r,o,h]=e;for(let c of e)this.remove(c);if(t===fn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,h,c,l]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,h),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,n),t.render(e,l),t.setRenderTarget(u,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},kr=class extends Ze{constructor(t,e,i,n,s,r,o,h,c,l){t=t!==void 0?t:[],e=e!==void 0?e:zs,super(t,e,i,n,s,r,o,h,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zh=class extends _e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Qn?fe:je),this.texture=new kr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Zt}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Le(5,5,5),s=new ne({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Se,blending:Rn});s.uniforms.tEquirect.value=e;let r=new ut(n,s),o=e.minFilter;return e.minFilter===Qe&&(e.minFilter=Zt),new kh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(s)}},dh=new M,jp=new M,Yp=new ee,wi=class{constructor(t=new M(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=dh.subVectors(i,e).cross(jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(dh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Yp.getNormalMatrix(t),n=this.coplanarPoint(dh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new Mi,cr=new M,Ta=class{constructor(t=new wi,e=new wi,i=new wi,n=new wi,s=new wi,r=new wi){this.planes=[t,e,i,n,s,r]}set(t,e,i,n,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fn){let i=this.planes,n=t.elements,s=n[0],r=n[1],o=n[2],h=n[3],c=n[4],l=n[5],u=n[6],d=n[7],f=n[8],m=n[9],b=n[10],g=n[11],p=n[12],x=n[13],v=n[14],w=n[15];if(i[0].setComponents(h-s,d-c,g-f,w-p).normalize(),i[1].setComponents(h+s,d+c,g+f,w+p).normalize(),i[2].setComponents(h+r,d+l,g+m,w+x).normalize(),i[3].setComponents(h-r,d-l,g-m,w-x).normalize(),i[4].setComponents(h-o,d-u,g-b,w-v).normalize(),e===fn)i[5].setComponents(h+o,d+u,g+b,w+v).normalize();else if(e===Ar)i[5].setComponents(o,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(cr.x=n.normal.x>0?t.max.x:t.min.x,cr.y=n.normal.y>0?t.max.y:t.min.y,cr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ld(){let a=null,t=!1,e=null,i=null;function n(s,r){e(s,r),i=a.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=a.requestAnimationFrame(n),t=!0)},stop:function(){a.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function Kp(a,t){let e=t.isWebGL2,i=new WeakMap;function n(c,l){let u=c.array,d=c.usage,f=u.byteLength,m=a.createBuffer();a.bindBuffer(l,m),a.bufferData(l,u,d),c.onUploadCallback();let b;if(u instanceof Float32Array)b=a.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)b=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=a.UNSIGNED_SHORT;else if(u instanceof Int16Array)b=a.SHORT;else if(u instanceof Uint32Array)b=a.UNSIGNED_INT;else if(u instanceof Int32Array)b=a.INT;else if(u instanceof Int8Array)b=a.BYTE;else if(u instanceof Uint8Array)b=a.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)b=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:b,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,l,u){let d=l.array,f=l._updateRange,m=l.updateRanges;if(a.bindBuffer(u,c),f.count===-1&&m.length===0&&a.bufferSubData(u,0,d),m.length!==0){for(let b=0,g=m.length;b<g;b++){let p=m[b];e?a.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):a.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}l.clearUpdateRanges()}f.count!==-1&&(e?a.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):a.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),l.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let l=i.get(c);l&&(a.deleteBuffer(l.buffer),i.delete(c))}function h(c,l){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,n(c,l));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,l),u.version=c.version}}return{get:r,remove:o,update:h}}var Ei=class a extends he{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,r=e/2,o=Math.floor(i),h=Math.floor(n),c=o+1,l=h+1,u=t/o,d=e/h,f=[],m=[],b=[],g=[];for(let p=0;p<l;p++){let x=p*d-r;for(let v=0;v<c;v++){let w=v*u-s;m.push(w,-x,0),b.push(0,0,1),g.push(v/o),g.push(1-p/h)}}for(let p=0;p<h;p++)for(let x=0;x<o;x++){let v=x+c*p,w=x+c*(p+1),R=x+1+c*(p+1),y=x+1+c*p;f.push(v,w,y),f.push(w,R,y)}this.setIndex(f),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(b,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.width,t.height,t.widthSegments,t.heightSegments)}},Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,e0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
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
#endif`,n0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,a0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,r0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c0=`#ifdef USE_IRIDESCENCE
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
#endif`,l0=`#ifdef USE_BUMPMAP
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,x0=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_0=`vec3 transformedNormal = objectNormal;
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
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",A0=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,R0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
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
}`,N0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,O0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V0=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,G0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y0=`PhysicalMaterial material;
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
#endif`,K0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Q0=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,um=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,ng=`#define DISTANCE
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
}`,sg=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cg=`#include <common>
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
}`,lg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ug=`#define LAMBERT
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
}`,dg=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fg=`#define MATCAP
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
}`,pg=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mg=`#define NORMAL
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
}`,gg=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bg=`#define PHONG
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
}`,vg=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xg=`#define STANDARD
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
}`,yg=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_g=`#define TOON
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
}`,wg=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Mg=`uniform float size;
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
}`,Eg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Tg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Sg=`uniform vec3 color;
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
}`,Ag=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Rg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qt={alphahash_fragment:Qp,alphahash_pars_fragment:Zp,alphamap_fragment:Jp,alphamap_pars_fragment:$p,alphatest_fragment:t0,alphatest_pars_fragment:e0,aomap_fragment:i0,aomap_pars_fragment:n0,batching_pars_vertex:s0,batching_vertex:a0,begin_vertex:r0,beginnormal_vertex:o0,bsdfs:h0,iridescence_fragment:c0,bumpmap_pars_fragment:l0,clipping_planes_fragment:u0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:f0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:g0,color_pars_vertex:b0,color_vertex:v0,common:x0,cube_uv_reflection_fragment:y0,defaultnormal_vertex:_0,displacementmap_pars_vertex:w0,displacementmap_vertex:M0,emissivemap_fragment:E0,emissivemap_pars_fragment:T0,colorspace_fragment:S0,colorspace_pars_fragment:A0,envmap_fragment:R0,envmap_common_pars_fragment:C0,envmap_pars_fragment:P0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:G0,envmap_vertex:F0,fog_vertex:I0,fog_pars_vertex:D0,fog_fragment:k0,fog_pars_fragment:z0,gradientmap_pars_fragment:U0,lightmap_fragment:N0,lightmap_pars_fragment:O0,lights_lambert_fragment:B0,lights_lambert_pars_fragment:H0,lights_pars_begin:V0,lights_toon_fragment:W0,lights_toon_pars_fragment:q0,lights_phong_fragment:X0,lights_phong_pars_fragment:j0,lights_physical_fragment:Y0,lights_physical_pars_fragment:K0,lights_fragment_begin:Q0,lights_fragment_maps:Z0,lights_fragment_end:J0,logdepthbuf_fragment:$0,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:im,map_fragment:nm,map_pars_fragment:sm,map_particle_fragment:am,map_particle_pars_fragment:rm,metalnessmap_fragment:om,metalnessmap_pars_fragment:hm,morphcolor_vertex:cm,morphnormal_vertex:lm,morphtarget_pars_vertex:um,morphtarget_vertex:dm,normal_fragment_begin:fm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:bm,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:_m,iridescence_pars_fragment:wm,opaque_fragment:Mm,packing:Em,premultiplied_alpha_fragment:Tm,project_vertex:Sm,dithering_fragment:Am,dithering_pars_fragment:Rm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Fm,shadowmap_vertex:Im,shadowmask_pars_fragment:Dm,skinbase_vertex:km,skinning_pars_vertex:zm,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:Om,specularmap_pars_fragment:Bm,tonemapping_fragment:Hm,tonemapping_pars_fragment:Vm,transmission_fragment:Gm,transmission_pars_fragment:Wm,uv_pars_fragment:qm,uv_pars_vertex:Xm,uv_vertex:jm,worldpos_vertex:Ym,background_vert:Km,background_frag:Qm,backgroundCube_vert:Zm,backgroundCube_frag:Jm,cube_vert:$m,cube_frag:tg,depth_vert:eg,depth_frag:ig,distanceRGBA_vert:ng,distanceRGBA_frag:sg,equirect_vert:ag,equirect_frag:rg,linedashed_vert:og,linedashed_frag:hg,meshbasic_vert:cg,meshbasic_frag:lg,meshlambert_vert:ug,meshlambert_frag:dg,meshmatcap_vert:fg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:bg,meshphong_frag:vg,meshphysical_vert:xg,meshphysical_frag:yg,meshtoon_vert:_g,meshtoon_frag:wg,points_vert:Mg,points_frag:Eg,shadow_vert:Tg,shadow_frag:Sg,sprite_vert:Ag,sprite_frag:Rg},wt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Xi={basic:{uniforms:hi([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:hi([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:hi([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:hi([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:hi([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:hi([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:hi([wt.points,wt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:hi([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:hi([wt.common,wt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:hi([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:hi([wt.sprite,wt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:hi([wt.common,wt.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:hi([wt.lights,wt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Xi.physical={uniforms:hi([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var lr={r:0,b:0,g:0};function Cg(a,t,e,i,n,s,r){let o=new Dt(0),h=s===!0?0:1,c,l,u=null,d=0,f=null;function m(g,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?b(o,h):v&&v.isColor&&(b(v,1),x=!0);let w=a.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(a.autoClear||x)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Zr)?(l===void 0&&(l=new ut(new Le(1,1,1),new ne({name:"BackgroundCubeMaterial",uniforms:Gs(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=le.getTransfer(v.colorSpace)!==xe,(u!==v||d!==v.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=a.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ut(new Ei(2,2),new ne({name:"BackgroundMaterial",uniforms:Gs(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=a.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function b(g,p){g.getRGB(lr,Pd(a)),i.buffers.color.setClear(lr.r,lr.g,lr.b,p,r)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),h=p,b(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,b(o,h)},render:m}}function Pg(a,t,e,i){let n=a.getParameter(a.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,o={},h=g(null),c=h,l=!1;function u(k,z,O,U,N){let D=!1;if(r){let P=b(U,O,z);c!==P&&(c=P,f(c.object)),D=p(k,U,O,N),D&&x(k,U,O,N)}else{let P=z.wireframe===!0;(c.geometry!==U.id||c.program!==O.id||c.wireframe!==P)&&(c.geometry=U.id,c.program=O.id,c.wireframe=P,D=!0)}N!==null&&e.update(N,a.ELEMENT_ARRAY_BUFFER),(D||l)&&(l=!1,S(k,z,O,U),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function d(){return i.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function f(k){return i.isWebGL2?a.bindVertexArray(k):s.bindVertexArrayOES(k)}function m(k){return i.isWebGL2?a.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function b(k,z,O){let U=O.wireframe===!0,N=o[k.id];N===void 0&&(N={},o[k.id]=N);let D=N[z.id];D===void 0&&(D={},N[z.id]=D);let P=D[U];return P===void 0&&(P=g(d()),D[U]=P),P}function g(k){let z=[],O=[],U=[];for(let N=0;N<n;N++)z[N]=0,O[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:O,attributeDivisors:U,object:k,attributes:{},index:null}}function p(k,z,O,U){let N=c.attributes,D=z.attributes,P=0,G=O.getAttributes();for(let V in G)if(G[V].location>=0){let B=N[V],j=D[V];if(j===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(j=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(j=k.instanceColor)),B===void 0||B.attribute!==j||j&&B.data!==j.data)return!0;P++}return c.attributesNum!==P||c.index!==U}function x(k,z,O,U){let N={},D=z.attributes,P=0,G=O.getAttributes();for(let V in G)if(G[V].location>=0){let B=D[V];B===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(B=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(B=k.instanceColor));let j={};j.attribute=B,B&&B.data&&(j.data=B.data),N[V]=j,P++}c.attributes=N,c.attributesNum=P,c.index=U}function v(){let k=c.newAttributes;for(let z=0,O=k.length;z<O;z++)k[z]=0}function w(k){R(k,0)}function R(k,z){let O=c.newAttributes,U=c.enabledAttributes,N=c.attributeDivisors;O[k]=1,U[k]===0&&(a.enableVertexAttribArray(k),U[k]=1),N[k]!==z&&((i.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,z),N[k]=z)}function y(){let k=c.newAttributes,z=c.enabledAttributes;for(let O=0,U=z.length;O<U;O++)z[O]!==k[O]&&(a.disableVertexAttribArray(O),z[O]=0)}function T(k,z,O,U,N,D,P){P===!0?a.vertexAttribIPointer(k,z,O,N,D):a.vertexAttribPointer(k,z,O,U,N,D)}function S(k,z,O,U){if(i.isWebGL2===!1&&(k.isInstancedMesh||U.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let N=U.attributes,D=O.getAttributes(),P=z.defaultAttributeValues;for(let G in D){let V=D[G];if(V.location>=0){let H=N[G];if(H===void 0&&(G==="instanceMatrix"&&k.instanceMatrix&&(H=k.instanceMatrix),G==="instanceColor"&&k.instanceColor&&(H=k.instanceColor)),H!==void 0){let B=H.normalized,j=H.itemSize,tt=e.get(H);if(tt===void 0)continue;let K=tt.buffer,J=tt.type,ot=tt.bytesPerElement,it=i.isWebGL2===!0&&(J===a.INT||J===a.UNSIGNED_INT||H.gpuType===bd);if(H.isInterleavedBufferAttribute){let Mt=H.data,Q=Mt.stride,Nt=H.offset;if(Mt.isInstancedInterleavedBuffer){for(let xt=0;xt<V.locationSize;xt++)R(V.location+xt,Mt.meshPerAttribute);k.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let xt=0;xt<V.locationSize;xt++)w(V.location+xt);a.bindBuffer(a.ARRAY_BUFFER,K);for(let xt=0;xt<V.locationSize;xt++)T(V.location+xt,j/V.locationSize,J,B,Q*ot,(Nt+j/V.locationSize*xt)*ot,it)}else{if(H.isInstancedBufferAttribute){for(let Mt=0;Mt<V.locationSize;Mt++)R(V.location+Mt,H.meshPerAttribute);k.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Mt=0;Mt<V.locationSize;Mt++)w(V.location+Mt);a.bindBuffer(a.ARRAY_BUFFER,K);for(let Mt=0;Mt<V.locationSize;Mt++)T(V.location+Mt,j/V.locationSize,J,B,j*ot,j/V.locationSize*Mt*ot,it)}}else if(P!==void 0){let B=P[G];if(B!==void 0)switch(B.length){case 2:a.vertexAttrib2fv(V.location,B);break;case 3:a.vertexAttrib3fv(V.location,B);break;case 4:a.vertexAttrib4fv(V.location,B);break;default:a.vertexAttrib1fv(V.location,B)}}}}y()}function _(){W();for(let k in o){let z=o[k];for(let O in z){let U=z[O];for(let N in U)m(U[N].object),delete U[N];delete z[O]}delete o[k]}}function E(k){if(o[k.id]===void 0)return;let z=o[k.id];for(let O in z){let U=z[O];for(let N in U)m(U[N].object),delete U[N];delete z[O]}delete o[k.id]}function I(k){for(let z in o){let O=o[z];if(O[k.id]===void 0)continue;let U=O[k.id];for(let N in U)m(U[N].object),delete U[N];delete O[k.id]}}function W(){Y(),l=!0,c!==h&&(c=h,f(c.object))}function Y(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:u,reset:W,resetDefaultState:Y,dispose:_,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:w,disableUnusedAttributes:y}}function Lg(a,t,e,i){let n=i.isWebGL2,s;function r(l){s=l}function o(l,u){a.drawArrays(s,l,u),e.update(u,s,1)}function h(l,u,d){if(d===0)return;let f,m;if(n)f=a,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,u,d),e.update(u,s,d)}function c(l,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(l[m],u[m]);else{f.multiDrawArraysWEBGL(s,l,0,u,0,d);let m=0;for(let b=0;b<d;b++)m+=u[b];e.update(m,s,1)}}this.setMode=r,this.render=o,this.renderInstances=h,this.renderMultiDraw=c}function Fg(a,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",h=s(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);let c=r||t.has("WEBGL_draw_buffers"),l=e.logarithmicDepthBuffer===!0,u=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),d=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),b=a.getParameter(a.MAX_VERTEX_ATTRIBS),g=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),p=a.getParameter(a.MAX_VARYING_VECTORS),x=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,w=r||t.has("OES_texture_float"),R=v&&w,y=r?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:b,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:R,maxSamples:y}}function Ig(a){let t=this,e=null,i=0,n=!1,s=!1,r=new wi,o=new ee,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=l(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=a.get(u);if(!n||m===null||m.length===0||s&&!g)s?l(null):c();else{let x=s?0:i,v=x*4,w=p.clippingState||null;h.value=w,w=l(m,d,v,f);for(let R=0;R!==v;++R)w[R]=e[R];p.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function l(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=h.value,m!==!0||g===null){let p=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,w=f;v!==b;++v,w+=4)r.copy(u[v]).applyMatrix4(x,o),r.normal.toArray(g,w),g[w+3]=r.constant}h.value=g,h.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}function Dg(a){let t=new WeakMap;function e(r,o){return o===Rh?r.mapping=zs:o===Ch&&(r.mapping=Us),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===Rh||o===Ch)if(t.has(r)){let h=t.get(r).texture;return e(h,r.mapping)}else{let h=r.image;if(h&&h.height>0){let c=new zh(h.height/2);return c.fromEquirectangularTexture(a,r),t.set(r,c),r.addEventListener("dispose",n),e(c.texture,r.mapping)}else return null}}return r}function n(r){let o=r.target;o.removeEventListener("dispose",n);let h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var gi=class extends Dr{constructor(t=-1,e=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,r=i+t,o=n+e,h=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=l*this.view.offsetY,h=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fs=4,Eu=[.125,.215,.35,.446,.526,.582],Xn=20,fh=new gi,Tu=new Dt,ph=null,mh=0,gh=0,qn=(1+Math.sqrt(5))/2,Ss=1/qn,Su=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,qn,Ss),new M(0,qn,-Ss),new M(Ss,0,qn),new M(-Ss,0,qn),new M(qn,Ss,0),new M(-qn,Ss,0)],Ws=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ph,mh,gh),t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zs||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:pn,format:de,colorSpace:ke,depthBuffer:!1},n=Au(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kg(s)),this._blurMaterial=zg(s,t,e)}return n}_compileMaterial(t){let e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,fh)}_sceneToCubeUV(t,e,i,n){let o=new Be(90,1,e,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(Tu),l.toneMapping=Yi,l.autoClear=!1;let f=new He({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),m=new ut(new Le,f),b=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,b=!0):(f.color.copy(Tu),b=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,h[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,h[p]),o.lookAt(0,c[p],0)):(o.up.set(0,h[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;ur(n,x*v,p>2?v:0,v,v),l.setRenderTarget(n),b&&l.render(m,o),l.render(t,o)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=d,l.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===zs||t.mapping===Us;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());let s=n?this._cubemapMaterial:this._equirectMaterial,r=new ut(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let h=this._cubeSize;ur(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(r,fh)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),r=Su[(n-1)%Su.length];this._blur(t,n-1,n,s,r)}e.autoClear=i}_blur(t,e,i,n,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",s),this._halfBlur(r,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,r,o){let h=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new ut(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xn-1),b=s/m,g=isFinite(s)?1+Math.floor(l*b):Xn;g>Xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xn}`);let p=[],x=0;for(let T=0;T<Xn;++T){let S=T/b,_=Math.exp(-S*S/2);p.push(_),T===0?x+=_:T<g&&(x+=2*_)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-i;let w=this._sizeLods[n],R=3*w*(n>v-Fs?n-v+Fs:0),y=4*(this._cubeSize-w);ur(e,R,y,3*w,2*w),h.setRenderTarget(e),h.render(u,fh)}};function kg(a){let t=[],e=[],i=[],n=a,s=a-Fs+1+Eu.length;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let h=1/o;r>a-Fs?h=Eu[r-a+Fs-1]:r===0&&(h=0),i.push(h);let c=1/(o-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,m=6,b=3,g=2,p=1,x=new Float32Array(b*m*f),v=new Float32Array(g*m*f),w=new Float32Array(p*m*f);for(let y=0;y<f;y++){let T=y%3*2/3-1,S=y>2?0:-1,_=[T,S,0,T+2/3,S,0,T+2/3,S+1,0,T,S,0,T+2/3,S+1,0,T,S+1,0];x.set(_,b*m*y),v.set(d,g*m*y);let E=[y,y,y,y,y,y];w.set(E,p*m*y)}let R=new he;R.setAttribute("position",new Bt(x,b)),R.setAttribute("uv",new Bt(v,g)),R.setAttribute("faceIndex",new Bt(w,p)),t.push(R),n>Fs&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Au(a,t,e){let i=new _e(a,t,e);return i.texture.mapping=Zr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ur(a,t,e,i,n){a.viewport.set(t,e,i,n),a.scissor.set(t,e,i,n)}function zg(a,t,e){let i=new Float32Array(Xn),n=new M(0,1,0);return new ne({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ru(){return new ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Cu(){return new ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}function Ug(a){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let h=o.mapping,c=h===Rh||h===Ch,l=h===zs||h===Us;if(c||l)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Ws(a)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||l&&u&&n(u)){e===null&&(e=new Ws(a));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function n(o){let h=0,c=6;for(let l=0;l<c;l++)o[l]!==void 0&&h++;return h===c}function s(o){let h=o.target;h.removeEventListener("dispose",s);let c=t.get(h);c!==void 0&&(t.delete(h),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Ng(a){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Og(a,t,e,i){let n={},s=new WeakMap;function r(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let b=d.morphAttributes[m];for(let g=0,p=b.length;g<p;g++)t.remove(b[g])}d.removeEventListener("dispose",r),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,e.memory.geometries++),d}function h(u){let d=u.attributes;for(let m in d)t.update(d[m],a.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let b=f[m];for(let g=0,p=b.length;g<p;g++)t.update(b[g],a.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(f!==null){let x=f.array;b=f.version;for(let v=0,w=x.length;v<w;v+=3){let R=x[v+0],y=x[v+1],T=x[v+2];d.push(R,y,y,T,T,R)}}else if(m!==void 0){let x=m.array;b=m.version;for(let v=0,w=x.length/3-1;v<w;v+=3){let R=v+0,y=v+1,T=v+2;d.push(R,y,y,T,T,R)}}else return;let g=new(Rd(d)?Ir:Vs)(d,1);g.version=b;let p=s.get(u);p&&t.remove(p),s.set(u,g)}function l(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:h,getWireframeAttribute:l}}function Bg(a,t,e,i){let n=i.isWebGL2,s;function r(f){s=f}let o,h;function c(f){o=f.type,h=f.bytesPerElement}function l(f,m){a.drawElements(s,m,o,f*h),e.update(m,s,1)}function u(f,m,b){if(b===0)return;let g,p;if(n)g=a,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,m,o,f*h,b),e.update(m,s,b)}function d(f,m,b){if(b===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<b;p++)this.render(f[p]/h,m[p]);else{g.multiDrawElementsWEBGL(s,m,0,o,f,0,b);let p=0;for(let x=0;x<b;x++)p+=m[x];e.update(p,s,1)}}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function Hg(a){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(e.calls++,r){case a.TRIANGLES:e.triangles+=o*(s/3);break;case a.LINES:e.lines+=o*(s/2);break;case a.LINE_STRIP:e.lines+=o*(s-1);break;case a.LINE_LOOP:e.lines+=o*s;break;case a.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Vg(a,t){return a[0]-t[0]}function Gg(a,t){return Math.abs(t[1])-Math.abs(a[1])}function Wg(a,t,e){let i={},n=new Float32Array(8),s=new WeakMap,r=new ie,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function h(c,l,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=f!==void 0?f.length:0,b=s.get(l);if(b===void 0||b.count!==m){let k=function(){W.dispose(),s.delete(l),l.removeEventListener("dispose",k)};b!==void 0&&b.texture.dispose();let x=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,w=l.morphAttributes.color!==void 0,R=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],T=l.morphAttributes.color||[],S=0;x===!0&&(S=1),v===!0&&(S=2),w===!0&&(S=3);let _=l.attributes.position.count*S,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let I=new Float32Array(_*E*4*m),W=new Lr(I,_,E,m);W.type=dn,W.needsUpdate=!0;let Y=S*4;for(let z=0;z<m;z++){let O=R[z],U=y[z],N=T[z],D=_*E*4*z;for(let P=0;P<O.count;P++){let G=P*Y;x===!0&&(r.fromBufferAttribute(O,P),I[D+G+0]=r.x,I[D+G+1]=r.y,I[D+G+2]=r.z,I[D+G+3]=0),v===!0&&(r.fromBufferAttribute(U,P),I[D+G+4]=r.x,I[D+G+5]=r.y,I[D+G+6]=r.z,I[D+G+7]=0),w===!0&&(r.fromBufferAttribute(N,P),I[D+G+8]=r.x,I[D+G+9]=r.y,I[D+G+10]=r.z,I[D+G+11]=N.itemSize===4?r.w:1)}}b={count:m,texture:W,size:new mt(_,E)},s.set(l,b),l.addEventListener("dispose",k)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];let p=l.morphTargetsRelative?1:1-g;u.getUniforms().setValue(a,"morphTargetBaseInfluence",p),u.getUniforms().setValue(a,"morphTargetInfluences",d),u.getUniforms().setValue(a,"morphTargetsTexture",b.texture,e),u.getUniforms().setValue(a,"morphTargetsTextureSize",b.size)}else{let f=d===void 0?0:d.length,m=i[l.id];if(m===void 0||m.length!==f){m=[];for(let v=0;v<f;v++)m[v]=[v,0];i[l.id]=m}for(let v=0;v<f;v++){let w=m[v];w[0]=v,w[1]=d[v]}m.sort(Gg);for(let v=0;v<8;v++)v<f&&m[v][1]?(o[v][0]=m[v][0],o[v][1]=m[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Vg);let b=l.morphAttributes.position,g=l.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let w=o[v],R=w[0],y=w[1];R!==Number.MAX_SAFE_INTEGER&&y?(b&&l.getAttribute("morphTarget"+v)!==b[R]&&l.setAttribute("morphTarget"+v,b[R]),g&&l.getAttribute("morphNormal"+v)!==g[R]&&l.setAttribute("morphNormal"+v,g[R]),n[v]=y,p+=y):(b&&l.hasAttribute("morphTarget"+v)===!0&&l.deleteAttribute("morphTarget"+v),g&&l.hasAttribute("morphNormal"+v)===!0&&l.deleteAttribute("morphNormal"+v),n[v]=0)}let x=l.morphTargetsRelative?1:1-p;u.getUniforms().setValue(a,"morphTargetBaseInfluence",x),u.getUniforms().setValue(a,"morphTargetInfluences",n)}}return{update:h}}function qg(a,t,e,i){let n=new WeakMap;function s(h){let c=i.render.frame,l=h.geometry,u=t.get(h,l);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),n.get(h)!==c&&(e.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,a.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){let d=h.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function r(){n=new WeakMap}function o(h){let c=h.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}var Jn=class extends Ze{constructor(t,e,i,n,s,r,o,h,c,l){if(l=l!==void 0?l:Kn,l!==Kn&&l!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===Kn&&(i=Sn),i===void 0&&l===Ns&&(i=Yn),super(null,n,s,r,o,h,l,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=h!==void 0?h:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fd=new Ze,Id=new Jn(1,1);Id.compareFunction=Ad;var Dd=new Lr,kd=new Dh,zd=new kr,Pu=[],Lu=[],Fu=new Float32Array(16),Iu=new Float32Array(9),Du=new Float32Array(4);function Zs(a,t,e){let i=a[0];if(i<=0||i>0)return a;let n=t*e,s=Pu[n];if(s===void 0&&(s=new Float32Array(n),Pu[n]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function Ve(a,t){if(a.length!==t.length)return!1;for(let e=0,i=a.length;e<i;e++)if(a[e]!==t[e])return!1;return!0}function Ge(a,t){for(let e=0,i=t.length;e<i;e++)a[e]=t[e]}function to(a,t){let e=Lu[t];e===void 0&&(e=new Int32Array(t),Lu[t]=e);for(let i=0;i!==t;++i)e[i]=a.allocateTextureUnit();return e}function Xg(a,t){let e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function jg(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;a.uniform2fv(this.addr,t),Ge(e,t)}}function Yg(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;a.uniform3fv(this.addr,t),Ge(e,t)}}function Kg(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;a.uniform4fv(this.addr,t),Ge(e,t)}}function Qg(a,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,i))return;Du.set(i),a.uniformMatrix2fv(this.addr,!1,Du),Ge(e,i)}}function Zg(a,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,i))return;Iu.set(i),a.uniformMatrix3fv(this.addr,!1,Iu),Ge(e,i)}}function Jg(a,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,i))return;Fu.set(i),a.uniformMatrix4fv(this.addr,!1,Fu),Ge(e,i)}}function $g(a,t){let e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function tb(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;a.uniform2iv(this.addr,t),Ge(e,t)}}function eb(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;a.uniform3iv(this.addr,t),Ge(e,t)}}function ib(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;a.uniform4iv(this.addr,t),Ge(e,t)}}function nb(a,t){let e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function sb(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;a.uniform2uiv(this.addr,t),Ge(e,t)}}function ab(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;a.uniform3uiv(this.addr,t),Ge(e,t)}}function rb(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;a.uniform4uiv(this.addr,t),Ge(e,t)}}function ob(a,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let s=this.type===a.SAMPLER_2D_SHADOW?Id:Fd;e.setTexture2D(t||s,n)}function hb(a,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||kd,n)}function cb(a,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||zd,n)}function lb(a,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Dd,n)}function ub(a){switch(a){case 5126:return Xg;case 35664:return jg;case 35665:return Yg;case 35666:return Kg;case 35674:return Qg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return $g;case 35667:case 35671:return tb;case 35668:case 35672:return eb;case 35669:case 35673:return ib;case 5125:return nb;case 36294:return sb;case 36295:return ab;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return lb}}function db(a,t){a.uniform1fv(this.addr,t)}function fb(a,t){let e=Zs(t,this.size,2);a.uniform2fv(this.addr,e)}function pb(a,t){let e=Zs(t,this.size,3);a.uniform3fv(this.addr,e)}function mb(a,t){let e=Zs(t,this.size,4);a.uniform4fv(this.addr,e)}function gb(a,t){let e=Zs(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function bb(a,t){let e=Zs(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function vb(a,t){let e=Zs(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function xb(a,t){a.uniform1iv(this.addr,t)}function yb(a,t){a.uniform2iv(this.addr,t)}function _b(a,t){a.uniform3iv(this.addr,t)}function wb(a,t){a.uniform4iv(this.addr,t)}function Mb(a,t){a.uniform1uiv(this.addr,t)}function Eb(a,t){a.uniform2uiv(this.addr,t)}function Tb(a,t){a.uniform3uiv(this.addr,t)}function Sb(a,t){a.uniform4uiv(this.addr,t)}function Ab(a,t,e){let i=this.cache,n=t.length,s=to(e,n);Ve(i,s)||(a.uniform1iv(this.addr,s),Ge(i,s));for(let r=0;r!==n;++r)e.setTexture2D(t[r]||Fd,s[r])}function Rb(a,t,e){let i=this.cache,n=t.length,s=to(e,n);Ve(i,s)||(a.uniform1iv(this.addr,s),Ge(i,s));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||kd,s[r])}function Cb(a,t,e){let i=this.cache,n=t.length,s=to(e,n);Ve(i,s)||(a.uniform1iv(this.addr,s),Ge(i,s));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||zd,s[r])}function Pb(a,t,e){let i=this.cache,n=t.length,s=to(e,n);Ve(i,s)||(a.uniform1iv(this.addr,s),Ge(i,s));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Dd,s[r])}function Lb(a){switch(a){case 5126:return db;case 35664:return fb;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return bb;case 35676:return vb;case 5124:case 35670:return xb;case 35667:case 35671:return yb;case 35668:case 35672:return _b;case 35669:case 35673:return wb;case 5125:return Mb;case 36294:return Eb;case 36295:return Tb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Pb}}var Uh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ub(e.type)}},Nh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lb(e.type)}},Oh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,r=n.length;s!==r;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},bh=/(\w+)(\])?(\[|\.)?/g;function ku(a,t){a.seq.push(t),a.map[t.id]=t}function Fb(a,t,e){let i=a.name,n=i.length;for(bh.lastIndex=0;;){let s=bh.exec(i),r=bh.lastIndex,o=s[1],h=s[2]==="]",c=s[3];if(h&&(o=o|0),c===void 0||c==="["&&r+2===n){ku(e,c===void 0?new Uh(o,a,t):new Nh(o,a,t));break}else{let u=e.map[o];u===void 0&&(u=new Oh(o),ku(e,u)),e=u}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),r=t.getUniformLocation(e,s.name);Fb(s,r,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,r=e.length;s!==r;++s){let o=e[s],h=i[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.id in e&&i.push(r)}return i}};function zu(a,t,e){let i=a.createShader(t);return a.shaderSource(i,e),a.compileShader(i),i}var Ib=37297,Db=0;function kb(a,t){let e=a.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=n;r<s;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}function zb(a){let t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(a),i;switch(t===e?i="":t===Sr&&e===Tr?i="LinearDisplayP3ToLinearSRGB":t===Tr&&e===Sr&&(i="LinearSRGBToLinearDisplayP3"),a){case ke:case $r:return[i,"LinearTransferOETF"];case fe:case yc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[i,"LinearTransferOETF"]}}function Uu(a,t,e){let i=a.getShaderParameter(t,a.COMPILE_STATUS),n=a.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let r=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+kb(a.getShaderSource(t),r)}else return n}function Ub(a,t){let e=zb(t);return`vec4 ${a}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Nb(a,t){let e;switch(t){case Gf:e="Linear";break;case Wf:e="Reinhard";break;case qf:e="OptimizedCineon";break;case Xf:e="ACESFilmic";break;case Yf:e="AgX";break;case jf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ob(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function Bb(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Is).join(`
`)}function Hb(a){let t=[];for(let e in a){let i=a[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Vb(a,t){let e={},i=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=a.getActiveAttrib(t,n),r=s.name,o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function Is(a){return a!==""}function Nu(a,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ou(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(a){return a.replace(Gb,qb)}var Wb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qb(a,t){let e=Qt[t];if(e===void 0){let i=Wb.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Bh(e)}var Xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(a){return a.replace(Xb,jb)}function jb(a,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Hu(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yb(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===pd?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===yf?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Kb(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case zs:case Us:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qb(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function Zb(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case md:t="ENVMAP_BLENDING_MULTIPLY";break;case Hf:t="ENVMAP_BLENDING_MIX";break;case Vf:t="ENVMAP_BLENDING_ADD";break}return t}function Jb(a){let t=a.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function $b(a,t,e,i){let n=a.getContext(),s=e.defines,r=e.vertexShader,o=e.fragmentShader,h=Yb(e),c=Kb(e),l=Qb(e),u=Zb(e),d=Jb(e),f=e.isWebGL2?"":Ob(e),m=Bb(e),b=Hb(s),g=n.createProgram(),p,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Is).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Is).join(`
`),x.length>0&&(x+=`
`)):(p=[Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),x=[f,Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yi?"#define TONE_MAPPING":"",e.toneMapping!==Yi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Yi?Nb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Ub("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),r=Bh(r),r=Nu(r,e),r=Ou(r,e),o=Bh(o),o=Nu(o,e),o=Ou(o,e),r=Bu(r),o=Bu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let w=v+p+r,R=v+x+o,y=zu(n,n.VERTEX_SHADER,w),T=zu(n,n.FRAGMENT_SHADER,R);n.attachShader(g,y),n.attachShader(g,T),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function S(W){if(a.debug.checkShaderErrors){let Y=n.getProgramInfoLog(g).trim(),k=n.getShaderInfoLog(y).trim(),z=n.getShaderInfoLog(T).trim(),O=!0,U=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(O=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,g,y,T);else{let N=Uu(n,y,"vertex"),D=Uu(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+N+`
`+D)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(k===""||z==="")&&(U=!1);U&&(W.diagnostics={runnable:O,programLog:Y,vertexShader:{log:k,prefix:p},fragmentShader:{log:z,prefix:x}})}n.deleteShader(y),n.deleteShader(T),_=new ks(n,g),E=Vb(n,g)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let E;this.getAttributes=function(){return E===void 0&&S(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=n.getProgramParameter(g,Ib)),I},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Db++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=T,this}var tv=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Vh(t),e.set(t,i)),i}},Vh=class{constructor(t){this.id=tv++,this.code=t,this.usedTimes=0}};function ev(a,t,e,i,n,s,r){let o=new Fr,h=new Hh,c=[],l=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(_){return _===0?"uv":`uv${_}`}function g(_,E,I,W,Y){let k=W.fog,z=Y.geometry,O=_.isMeshStandardMaterial?W.environment:null,U=(_.isMeshStandardMaterial?e:t).get(_.envMap||O),N=U&&U.mapping===Zr?U.image.height:null,D=m[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let P=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,G=P!==void 0?P.length:0,V=0;z.morphAttributes.position!==void 0&&(V=1),z.morphAttributes.normal!==void 0&&(V=2),z.morphAttributes.color!==void 0&&(V=3);let H,B,j,tt;if(D){let ai=Xi[D];H=ai.vertexShader,B=ai.fragmentShader}else H=_.vertexShader,B=_.fragmentShader,h.update(_),j=h.getVertexShaderID(_),tt=h.getFragmentShaderID(_);let K=a.getRenderTarget(),J=Y.isInstancedMesh===!0,ot=Y.isBatchedMesh===!0,it=!!_.map,Mt=!!_.matcap,Q=!!U,Nt=!!_.aoMap,xt=!!_.lightMap,At=!!_.bumpMap,bt=!!_.normalMap,Vt=!!_.displacementMap,Ct=!!_.emissiveMap,L=!!_.metalnessMap,C=!!_.roughnessMap,et=_.anisotropy>0,ht=_.clearcoat>0,pt=_.iridescence>0,gt=_.sheen>0,Lt=_.transmission>0,q=et&&!!_.anisotropyMap,ct=ht&&!!_.clearcoatMap,vt=ht&&!!_.clearcoatNormalMap,kt=ht&&!!_.clearcoatRoughnessMap,dt=pt&&!!_.iridescenceMap,ce=pt&&!!_.iridescenceThicknessMap,Yt=gt&&!!_.sheenColorMap,Ht=gt&&!!_.sheenRoughnessMap,Ft=!!_.specularMap,Pt=!!_.specularColorMap,qt=!!_.specularIntensityMap,oe=Lt&&!!_.transmissionMap,Re=Lt&&!!_.thicknessMap,$t=!!_.gradientMap,_t=!!_.alphaMap,X=_.alphaTest>0,Et=!!_.alphaHash,Tt=!!_.extensions,Gt=!!z.attributes.uv1,zt=!!z.attributes.uv2,me=!!z.attributes.uv3,ge=Yi;return _.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ge=a.toneMapping),{isWebGL2:l,shaderID:D,shaderType:_.type,shaderName:_.name,vertexShader:H,fragmentShader:B,defines:_.defines,customVertexShaderID:j,customFragmentShaderID:tt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:ot,instancing:J,instancingColor:J&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:K===null?a.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ke,map:it,matcap:Mt,envMap:Q,envMapMode:Q&&U.mapping,envMapCubeUVHeight:N,aoMap:Nt,lightMap:xt,bumpMap:At,normalMap:bt,displacementMap:d&&Vt,emissiveMap:Ct,normalMapObjectSpace:bt&&_.normalMapType===rp,normalMapTangentSpace:bt&&_.normalMapType===Sd,metalnessMap:L,roughnessMap:C,anisotropy:et,anisotropyMap:q,clearcoat:ht,clearcoatMap:ct,clearcoatNormalMap:vt,clearcoatRoughnessMap:kt,iridescence:pt,iridescenceMap:dt,iridescenceThicknessMap:ce,sheen:gt,sheenColorMap:Yt,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:Pt,specularIntensityMap:qt,transmission:Lt,transmissionMap:oe,thicknessMap:Re,gradientMap:$t,opaque:_.transparent===!1&&_.blending===Cn,alphaMap:_t,alphaTest:X,alphaHash:Et,combine:_.combine,mapUv:it&&b(_.map.channel),aoMapUv:Nt&&b(_.aoMap.channel),lightMapUv:xt&&b(_.lightMap.channel),bumpMapUv:At&&b(_.bumpMap.channel),normalMapUv:bt&&b(_.normalMap.channel),displacementMapUv:Vt&&b(_.displacementMap.channel),emissiveMapUv:Ct&&b(_.emissiveMap.channel),metalnessMapUv:L&&b(_.metalnessMap.channel),roughnessMapUv:C&&b(_.roughnessMap.channel),anisotropyMapUv:q&&b(_.anisotropyMap.channel),clearcoatMapUv:ct&&b(_.clearcoatMap.channel),clearcoatNormalMapUv:vt&&b(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&b(_.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&b(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&b(_.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&b(_.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(_.sheenRoughnessMap.channel),specularMapUv:Ft&&b(_.specularMap.channel),specularColorMapUv:Pt&&b(_.specularColorMap.channel),specularIntensityMapUv:qt&&b(_.specularIntensityMap.channel),transmissionMapUv:oe&&b(_.transmissionMap.channel),thicknessMapUv:Re&&b(_.thicknessMap.channel),alphaMapUv:_t&&b(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(bt||et),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Gt,vertexUv2s:zt,vertexUv3s:me,pointsUvs:Y.isPoints===!0&&!!z.attributes.uv&&(it||_t),fog:!!k,useFog:_.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:V,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:ge,useLegacyLights:a._useLegacyLights,decodeVideoTexture:it&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===xe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===De,flipSided:_.side===Se,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:Tt&&_.extensions.derivatives===!0,extensionFragDepth:Tt&&_.extensions.fragDepth===!0,extensionDrawBuffers:Tt&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:Tt&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Tt&&_.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)E.push(I),E.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(x(E,_),v(E,_),E.push(a.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function x(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function v(_,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function w(_){let E=m[_.type],I;if(E){let W=Xi[E];I=Wp.clone(W.uniforms)}else I=_.uniforms;return I}function R(_,E){let I;for(let W=0,Y=c.length;W<Y;W++){let k=c[W];if(k.cacheKey===E){I=k,++I.usedTimes;break}}return I===void 0&&(I=new $b(a,E,_,s),c.push(I)),I}function y(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),_.destroy()}}function T(_){h.remove(_)}function S(){h.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:R,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:S}}function iv(){let a=new WeakMap;function t(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function e(s){a.delete(s)}function i(s,r,o){a.get(s)[r]=o}function n(){a=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function nv(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function Vu(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function Gu(){let a=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function r(u,d,f,m,b,g){let p=a[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:b,group:g},a[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=b,p.group=g),t++,p}function o(u,d,f,m,b,g){let p=r(u,d,f,m,b,g);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function h(u,d,f,m,b,g){let p=r(u,d,f,m,b,g);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||nv),i.length>1&&i.sort(d||Vu),n.length>1&&n.sort(d||Vu)}function l(){for(let u=t,d=a.length;u<d;u++){let f=a[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:h,finish:l,sort:c}}function sv(){let a=new WeakMap;function t(i,n){let s=a.get(i),r;return s===void 0?(r=new Gu,a.set(i,[r])):n>=s.length?(r=new Gu,s.push(r)):r=s[n],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function av(){let a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new M,color:new Dt};break;case"SpotLight":e={position:new M,direction:new M,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new M,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new M,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new M,halfWidth:new M,halfHeight:new M};break}return a[t.id]=e,e}}}function rv(){let a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}var ov=0;function hv(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function cv(a,t){let e=new av,i=rv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new M);let s=new M,r=new Rt,o=new Rt;function h(l,u){let d=0,f=0,m=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let b=0,g=0,p=0,x=0,v=0,w=0,R=0,y=0,T=0,S=0,_=0;l.sort(hv);let E=u===!0?Math.PI:1;for(let W=0,Y=l.length;W<Y;W++){let k=l[W],z=k.color,O=k.intensity,U=k.distance,N=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=z.r*O*E,f+=z.g*O*E,m+=z.b*O*E;else if(k.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(k.sh.coefficients[D],O);_++}else if(k.isDirectionalLight){let D=e.get(k);if(D.color.copy(k.color).multiplyScalar(k.intensity*E),k.castShadow){let P=k.shadow,G=i.get(k);G.shadowBias=P.bias,G.shadowNormalBias=P.normalBias,G.shadowRadius=P.radius,G.shadowMapSize=P.mapSize,n.directionalShadow[b]=G,n.directionalShadowMap[b]=N,n.directionalShadowMatrix[b]=k.shadow.matrix,w++}n.directional[b]=D,b++}else if(k.isSpotLight){let D=e.get(k);D.position.setFromMatrixPosition(k.matrixWorld),D.color.copy(z).multiplyScalar(O*E),D.distance=U,D.coneCos=Math.cos(k.angle),D.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),D.decay=k.decay,n.spot[p]=D;let P=k.shadow;if(k.map&&(n.spotLightMap[T]=k.map,T++,P.updateMatrices(k),k.castShadow&&S++),n.spotLightMatrix[p]=P.matrix,k.castShadow){let G=i.get(k);G.shadowBias=P.bias,G.shadowNormalBias=P.normalBias,G.shadowRadius=P.radius,G.shadowMapSize=P.mapSize,n.spotShadow[p]=G,n.spotShadowMap[p]=N,y++}p++}else if(k.isRectAreaLight){let D=e.get(k);D.color.copy(z).multiplyScalar(O),D.halfWidth.set(k.width*.5,0,0),D.halfHeight.set(0,k.height*.5,0),n.rectArea[x]=D,x++}else if(k.isPointLight){let D=e.get(k);if(D.color.copy(k.color).multiplyScalar(k.intensity*E),D.distance=k.distance,D.decay=k.decay,k.castShadow){let P=k.shadow,G=i.get(k);G.shadowBias=P.bias,G.shadowNormalBias=P.normalBias,G.shadowRadius=P.radius,G.shadowMapSize=P.mapSize,G.shadowCameraNear=P.camera.near,G.shadowCameraFar=P.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=k.shadow.matrix,R++}n.point[g]=D,g++}else if(k.isHemisphereLight){let D=e.get(k);D.skyColor.copy(k.color).multiplyScalar(O*E),D.groundColor.copy(k.groundColor).multiplyScalar(O*E),n.hemi[v]=D,v++}}x>0&&(t.isWebGL2?a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;let I=n.hash;(I.directionalLength!==b||I.pointLength!==g||I.spotLength!==p||I.rectAreaLength!==x||I.hemiLength!==v||I.numDirectionalShadows!==w||I.numPointShadows!==R||I.numSpotShadows!==y||I.numSpotMaps!==T||I.numLightProbes!==_)&&(n.directional.length=b,n.spot.length=p,n.rectArea.length=x,n.point.length=g,n.hemi.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=y+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=_,I.directionalLength=b,I.pointLength=g,I.spotLength=p,I.rectAreaLength=x,I.hemiLength=v,I.numDirectionalShadows=w,I.numPointShadows=R,I.numSpotShadows=y,I.numSpotMaps=T,I.numLightProbes=_,n.version=ov++)}function c(l,u){let d=0,f=0,m=0,b=0,g=0,p=u.matrixWorldInverse;for(let x=0,v=l.length;x<v;x++){let w=l[x];if(w.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(w.isSpotLight){let R=n.spot[m];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),m++}else if(w.isRectAreaLight){let R=n.rectArea[b];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),b++}else if(w.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){let R=n.hemi[g];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(p),g++}}}return{setup:h,setupView:c,state:n}}function Wu(a,t){let e=new cv(a,t),i=[],n=[];function s(){i.length=0,n.length=0}function r(u){i.push(u)}function o(u){n.push(u)}function h(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:h,setupLightsView:c,pushLight:r,pushShadow:o}}function lv(a,t){let e=new WeakMap;function i(s,r=0){let o=e.get(s),h;return o===void 0?(h=new Wu(a,t),e.set(s,[h])):r>=o.length?(h=new Wu(a,t),o.push(h)):h=o[r],h}function n(){e=new WeakMap}return{get:i,dispose:n}}var Gh=class extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wh=class extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
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
}`;function fv(a,t,e){let i=new Ta,n=new mt,s=new mt,r=new ie,o=new Gh({depthPacking:ap}),h=new Wh,c={},l=e.maxTextureSize,u={[Ye]:Se,[Se]:Ye,[De]:De},d=new ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:uv,fragmentShader:dv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new he;m.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ut(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let p=this.type;this.render=function(y,T,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;let _=a.getRenderTarget(),E=a.getActiveCubeFace(),I=a.getActiveMipmapLevel(),W=a.state;W.setBlending(Rn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Y=p!==ln&&this.type===ln,k=p===ln&&this.type!==ln;for(let z=0,O=y.length;z<O;z++){let U=y[z],N=U.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;n.copy(N.mapSize);let D=N.getFrameExtents();if(n.multiply(D),s.copy(N.mapSize),(n.x>l||n.y>l)&&(n.x>l&&(s.x=Math.floor(l/D.x),n.x=s.x*D.x,N.mapSize.x=s.x),n.y>l&&(s.y=Math.floor(l/D.y),n.y=s.y*D.y,N.mapSize.y=s.y)),N.map===null||Y===!0||k===!0){let G=this.type!==ln?{minFilter:Pe,magFilter:Pe}:{};N.map!==null&&N.map.dispose(),N.map=new _e(n.x,n.y,G),N.map.texture.name=U.name+".shadowMap",N.camera.updateProjectionMatrix()}a.setRenderTarget(N.map),a.clear();let P=N.getViewportCount();for(let G=0;G<P;G++){let V=N.getViewport(G);r.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),W.viewport(r),N.updateMatrices(U,G),i=N.getFrustum(),w(T,S,N.camera,U,this.type)}N.isPointLightShadow!==!0&&this.type===ln&&x(N,S),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,a.setRenderTarget(_,E,I)};function x(y,T){let S=t.update(b);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new _e(n.x,n.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,a.setRenderTarget(y.mapPass),a.clear(),a.renderBufferDirect(T,null,S,d,b,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,a.setRenderTarget(y.map),a.clear(),a.renderBufferDirect(T,null,S,f,b,null)}function v(y,T,S,_){let E=null,I=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)E=I;else if(E=S.isPointLight===!0?h:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let W=E.uuid,Y=T.uuid,k=c[W];k===void 0&&(k={},c[W]=k);let z=k[Y];z===void 0&&(z=E.clone(),k[Y]=z,T.addEventListener("dispose",R)),E=z}if(E.visible=T.visible,E.wireframe=T.wireframe,_===ln?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:u[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,S.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let W=a.properties.get(E);W.light=S}return E}function w(y,T,S,_,E){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&E===ln)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);let Y=t.update(y),k=y.material;if(Array.isArray(k)){let z=Y.groups;for(let O=0,U=z.length;O<U;O++){let N=z[O],D=k[N.materialIndex];if(D&&D.visible){let P=v(y,D,_,E);y.onBeforeShadow(a,y,T,S,Y,P,N),a.renderBufferDirect(S,null,Y,P,y,N),y.onAfterShadow(a,y,T,S,Y,P,N)}}}else if(k.visible){let z=v(y,k,_,E);y.onBeforeShadow(a,y,T,S,Y,z,null),a.renderBufferDirect(S,null,Y,z,y,null),y.onAfterShadow(a,y,T,S,Y,z,null)}}let W=y.children;for(let Y=0,k=W.length;Y<k;Y++)w(W[Y],T,S,_,E)}function R(y){y.target.removeEventListener("dispose",R);for(let S in c){let _=c[S],E=y.target.uuid;E in _&&(_[E].dispose(),delete _[E])}}}function pv(a,t,e){let i=e.isWebGL2;function n(){let X=!1,Et=new ie,Tt=null,Gt=new ie(0,0,0,0);return{setMask:function(zt){Tt!==zt&&!X&&(a.colorMask(zt,zt,zt,zt),Tt=zt)},setLocked:function(zt){X=zt},setClear:function(zt,me,ge,We,ai){ai===!0&&(zt*=We,me*=We,ge*=We),Et.set(zt,me,ge,We),Gt.equals(Et)===!1&&(a.clearColor(zt,me,ge,We),Gt.copy(Et))},reset:function(){X=!1,Tt=null,Gt.set(-1,0,0,0)}}}function s(){let X=!1,Et=null,Tt=null,Gt=null;return{setTest:function(zt){zt?ot(a.DEPTH_TEST):it(a.DEPTH_TEST)},setMask:function(zt){Et!==zt&&!X&&(a.depthMask(zt),Et=zt)},setFunc:function(zt){if(Tt!==zt){switch(zt){case Df:a.depthFunc(a.NEVER);break;case kf:a.depthFunc(a.ALWAYS);break;case zf:a.depthFunc(a.LESS);break;case wr:a.depthFunc(a.LEQUAL);break;case Uf:a.depthFunc(a.EQUAL);break;case Nf:a.depthFunc(a.GEQUAL);break;case Of:a.depthFunc(a.GREATER);break;case Bf:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Tt=zt}},setLocked:function(zt){X=zt},setClear:function(zt){Gt!==zt&&(a.clearDepth(zt),Gt=zt)},reset:function(){X=!1,Et=null,Tt=null,Gt=null}}}function r(){let X=!1,Et=null,Tt=null,Gt=null,zt=null,me=null,ge=null,We=null,ai=null;return{setTest:function(be){X||(be?ot(a.STENCIL_TEST):it(a.STENCIL_TEST))},setMask:function(be){Et!==be&&!X&&(a.stencilMask(be),Et=be)},setFunc:function(be,ri,qi){(Tt!==be||Gt!==ri||zt!==qi)&&(a.stencilFunc(be,ri,qi),Tt=be,Gt=ri,zt=qi)},setOp:function(be,ri,qi){(me!==be||ge!==ri||We!==qi)&&(a.stencilOp(be,ri,qi),me=be,ge=ri,We=qi)},setLocked:function(be){X=be},setClear:function(be){ai!==be&&(a.clearStencil(be),ai=be)},reset:function(){X=!1,Et=null,Tt=null,Gt=null,zt=null,me=null,ge=null,We=null,ai=null}}}let o=new n,h=new s,c=new r,l=new WeakMap,u=new WeakMap,d={},f={},m=new WeakMap,b=[],g=null,p=!1,x=null,v=null,w=null,R=null,y=null,T=null,S=null,_=new Dt(0,0,0),E=0,I=!1,W=null,Y=null,k=null,z=null,O=null,U=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,D=0,P=a.getParameter(a.VERSION);P.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=D>=1):P.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=D>=2);let G=null,V={},H=a.getParameter(a.SCISSOR_BOX),B=a.getParameter(a.VIEWPORT),j=new ie().fromArray(H),tt=new ie().fromArray(B);function K(X,Et,Tt,Gt){let zt=new Uint8Array(4),me=a.createTexture();a.bindTexture(X,me),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ge=0;ge<Tt;ge++)i&&(X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY)?a.texImage3D(Et,0,a.RGBA,1,1,Gt,0,a.RGBA,a.UNSIGNED_BYTE,zt):a.texImage2D(Et+ge,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,zt);return me}let J={};J[a.TEXTURE_2D]=K(a.TEXTURE_2D,a.TEXTURE_2D,1),J[a.TEXTURE_CUBE_MAP]=K(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(J[a.TEXTURE_2D_ARRAY]=K(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),J[a.TEXTURE_3D]=K(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),h.setClear(1),c.setClear(0),ot(a.DEPTH_TEST),h.setFunc(wr),Ct(!1),L(Tl),ot(a.CULL_FACE),bt(Rn);function ot(X){d[X]!==!0&&(a.enable(X),d[X]=!0)}function it(X){d[X]!==!1&&(a.disable(X),d[X]=!1)}function Mt(X,Et){return f[X]!==Et?(a.bindFramebuffer(X,Et),f[X]=Et,i&&(X===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=Et),X===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=Et)),!0):!1}function Q(X,Et){let Tt=b,Gt=!1;if(X)if(Tt=m.get(Et),Tt===void 0&&(Tt=[],m.set(Et,Tt)),X.isWebGLMultipleRenderTargets){let zt=X.texture;if(Tt.length!==zt.length||Tt[0]!==a.COLOR_ATTACHMENT0){for(let me=0,ge=zt.length;me<ge;me++)Tt[me]=a.COLOR_ATTACHMENT0+me;Tt.length=zt.length,Gt=!0}}else Tt[0]!==a.COLOR_ATTACHMENT0&&(Tt[0]=a.COLOR_ATTACHMENT0,Gt=!0);else Tt[0]!==a.BACK&&(Tt[0]=a.BACK,Gt=!0);Gt&&(e.isWebGL2?a.drawBuffers(Tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Tt))}function Nt(X){return g!==X?(a.useProgram(X),g=X,!0):!1}let xt={[un]:a.FUNC_ADD,[_f]:a.FUNC_SUBTRACT,[wf]:a.FUNC_REVERSE_SUBTRACT};if(i)xt[Rl]=a.MIN,xt[Cl]=a.MAX;else{let X=t.get("EXT_blend_minmax");X!==null&&(xt[Rl]=X.MIN_EXT,xt[Cl]=X.MAX_EXT)}let At={[Qr]:a.ZERO,[Mf]:a.ONE,[gc]:a.SRC_COLOR,[wa]:a.SRC_ALPHA,[Cf]:a.SRC_ALPHA_SATURATE,[Af]:a.DST_COLOR,[Tf]:a.DST_ALPHA,[Ef]:a.ONE_MINUS_SRC_COLOR,[Ah]:a.ONE_MINUS_SRC_ALPHA,[Rf]:a.ONE_MINUS_DST_COLOR,[Sf]:a.ONE_MINUS_DST_ALPHA,[Pf]:a.CONSTANT_COLOR,[Lf]:a.ONE_MINUS_CONSTANT_COLOR,[Ff]:a.CONSTANT_ALPHA,[If]:a.ONE_MINUS_CONSTANT_ALPHA};function bt(X,Et,Tt,Gt,zt,me,ge,We,ai,be){if(X===Rn){p===!0&&(it(a.BLEND),p=!1);return}if(p===!1&&(ot(a.BLEND),p=!0),X!==mc){if(X!==x||be!==I){if((v!==un||y!==un)&&(a.blendEquation(a.FUNC_ADD),v=un,y=un),be)switch(X){case Cn:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ki:a.blendFunc(a.ONE,a.ONE);break;case Sl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Al:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Cn:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ki:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Sl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Al:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}w=null,R=null,T=null,S=null,_.set(0,0,0),E=0,x=X,I=be}return}zt=zt||Et,me=me||Tt,ge=ge||Gt,(Et!==v||zt!==y)&&(a.blendEquationSeparate(xt[Et],xt[zt]),v=Et,y=zt),(Tt!==w||Gt!==R||me!==T||ge!==S)&&(a.blendFuncSeparate(At[Tt],At[Gt],At[me],At[ge]),w=Tt,R=Gt,T=me,S=ge),(We.equals(_)===!1||ai!==E)&&(a.blendColor(We.r,We.g,We.b,ai),_.copy(We),E=ai),x=X,I=!1}function Vt(X,Et){X.side===De?it(a.CULL_FACE):ot(a.CULL_FACE);let Tt=X.side===Se;Et&&(Tt=!Tt),Ct(Tt),X.blending===Cn&&X.transparent===!1?bt(Rn):bt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),o.setMask(X.colorWrite);let Gt=X.stencilWrite;c.setTest(Gt),Gt&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),et(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ot(a.SAMPLE_ALPHA_TO_COVERAGE):it(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(X){W!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),W=X)}function L(X){X!==vf?(ot(a.CULL_FACE),X!==Y&&(X===Tl?a.cullFace(a.BACK):X===xf?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):it(a.CULL_FACE),Y=X}function C(X){X!==k&&(N&&a.lineWidth(X),k=X)}function et(X,Et,Tt){X?(ot(a.POLYGON_OFFSET_FILL),(z!==Et||O!==Tt)&&(a.polygonOffset(Et,Tt),z=Et,O=Tt)):it(a.POLYGON_OFFSET_FILL)}function ht(X){X?ot(a.SCISSOR_TEST):it(a.SCISSOR_TEST)}function pt(X){X===void 0&&(X=a.TEXTURE0+U-1),G!==X&&(a.activeTexture(X),G=X)}function gt(X,Et,Tt){Tt===void 0&&(G===null?Tt=a.TEXTURE0+U-1:Tt=G);let Gt=V[Tt];Gt===void 0&&(Gt={type:void 0,texture:void 0},V[Tt]=Gt),(Gt.type!==X||Gt.texture!==Et)&&(G!==Tt&&(a.activeTexture(Tt),G=Tt),a.bindTexture(X,Et||J[X]),Gt.type=X,Gt.texture=Et)}function Lt(){let X=V[G];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function q(){try{a.compressedTexImage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{a.compressedTexImage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{a.texSubImage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(){try{a.texSubImage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{a.texStorage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ht(){try{a.texStorage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ft(){try{a.texImage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{a.texImage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(X){j.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),j.copy(X))}function oe(X){tt.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),tt.copy(X))}function Re(X,Et){let Tt=u.get(Et);Tt===void 0&&(Tt=new WeakMap,u.set(Et,Tt));let Gt=Tt.get(X);Gt===void 0&&(Gt=a.getUniformBlockIndex(Et,X.name),Tt.set(X,Gt))}function $t(X,Et){let Gt=u.get(Et).get(X);l.get(Et)!==Gt&&(a.uniformBlockBinding(Et,Gt,X.__bindingPointIndex),l.set(Et,Gt))}function _t(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),i===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},G=null,V={},f={},m=new WeakMap,b=[],g=null,p=!1,x=null,v=null,w=null,R=null,y=null,T=null,S=null,_=new Dt(0,0,0),E=0,I=!1,W=null,Y=null,k=null,z=null,O=null,j.set(0,0,a.canvas.width,a.canvas.height),tt.set(0,0,a.canvas.width,a.canvas.height),o.reset(),h.reset(),c.reset()}return{buffers:{color:o,depth:h,stencil:c},enable:ot,disable:it,bindFramebuffer:Mt,drawBuffers:Q,useProgram:Nt,setBlending:bt,setMaterial:Vt,setFlipSided:Ct,setCullFace:L,setLineWidth:C,setPolygonOffset:et,setScissorTest:ht,activeTexture:pt,bindTexture:gt,unbindTexture:Lt,compressedTexImage2D:q,compressedTexImage3D:ct,texImage2D:Ft,texImage3D:Pt,updateUBOMapping:Re,uniformBlockBinding:$t,texStorage2D:Yt,texStorage3D:Ht,texSubImage2D:vt,texSubImage3D:kt,compressedTexSubImage2D:dt,compressedTexSubImage3D:ce,scissor:qt,viewport:oe,reset:_t}}function mv(a,t,e,i,n,s,r){let o=n.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,C){return f?new OffscreenCanvas(L,C):Ea("canvas")}function b(L,C,et,ht){let pt=1;if((L.width>ht||L.height>ht)&&(pt=ht/Math.max(L.width,L.height)),pt<1||C===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let gt=C?Rr:Math.floor,Lt=gt(pt*L.width),q=gt(pt*L.height);u===void 0&&(u=m(Lt,q));let ct=et?m(Lt,q):u;return ct.width=Lt,ct.height=q,ct.getContext("2d").drawImage(L,0,0,Lt,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Lt+"x"+q+")."),ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function g(L){return Fh(L.width)&&Fh(L.height)}function p(L){return o?!1:L.wrapS!==Ke||L.wrapT!==Ke||L.minFilter!==Pe&&L.minFilter!==Zt}function x(L,C){return L.generateMipmaps&&C&&L.minFilter!==Pe&&L.minFilter!==Zt}function v(L){a.generateMipmap(L)}function w(L,C,et,ht,pt=!1){if(o===!1)return C;if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let gt=C;if(C===a.RED&&(et===a.FLOAT&&(gt=a.R32F),et===a.HALF_FLOAT&&(gt=a.R16F),et===a.UNSIGNED_BYTE&&(gt=a.R8)),C===a.RED_INTEGER&&(et===a.UNSIGNED_BYTE&&(gt=a.R8UI),et===a.UNSIGNED_SHORT&&(gt=a.R16UI),et===a.UNSIGNED_INT&&(gt=a.R32UI),et===a.BYTE&&(gt=a.R8I),et===a.SHORT&&(gt=a.R16I),et===a.INT&&(gt=a.R32I)),C===a.RG&&(et===a.FLOAT&&(gt=a.RG32F),et===a.HALF_FLOAT&&(gt=a.RG16F),et===a.UNSIGNED_BYTE&&(gt=a.RG8)),C===a.RGBA){let Lt=pt?Er:le.getTransfer(ht);et===a.FLOAT&&(gt=a.RGBA32F),et===a.HALF_FLOAT&&(gt=a.RGBA16F),et===a.UNSIGNED_BYTE&&(gt=Lt===xe?a.SRGB8_ALPHA8:a.RGBA8),et===a.UNSIGNED_SHORT_4_4_4_4&&(gt=a.RGBA4),et===a.UNSIGNED_SHORT_5_5_5_1&&(gt=a.RGB5_A1)}return(gt===a.R16F||gt===a.R32F||gt===a.RG16F||gt===a.RG32F||gt===a.RGBA16F||gt===a.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function R(L,C,et){return x(L,et)===!0||L.isFramebufferTexture&&L.minFilter!==Pe&&L.minFilter!==Zt?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function y(L){return L===Pe||L===Mr||L===ma?a.NEAREST:a.LINEAR}function T(L){let C=L.target;C.removeEventListener("dispose",T),_(C),C.isVideoTexture&&l.delete(C)}function S(L){let C=L.target;C.removeEventListener("dispose",S),I(C)}function _(L){let C=i.get(L);if(C.__webglInit===void 0)return;let et=L.source,ht=d.get(et);if(ht){let pt=ht[C.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&E(L),Object.keys(ht).length===0&&d.delete(et)}i.remove(L)}function E(L){let C=i.get(L);a.deleteTexture(C.__webglTexture);let et=L.source,ht=d.get(et);delete ht[C.__cacheKey],r.memory.textures--}function I(L){let C=L.texture,et=i.get(L),ht=i.get(C);if(ht.__webglTexture!==void 0&&(a.deleteTexture(ht.__webglTexture),r.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(et.__webglFramebuffer[pt]))for(let gt=0;gt<et.__webglFramebuffer[pt].length;gt++)a.deleteFramebuffer(et.__webglFramebuffer[pt][gt]);else a.deleteFramebuffer(et.__webglFramebuffer[pt]);et.__webglDepthbuffer&&a.deleteRenderbuffer(et.__webglDepthbuffer[pt])}else{if(Array.isArray(et.__webglFramebuffer))for(let pt=0;pt<et.__webglFramebuffer.length;pt++)a.deleteFramebuffer(et.__webglFramebuffer[pt]);else a.deleteFramebuffer(et.__webglFramebuffer);if(et.__webglDepthbuffer&&a.deleteRenderbuffer(et.__webglDepthbuffer),et.__webglMultisampledFramebuffer&&a.deleteFramebuffer(et.__webglMultisampledFramebuffer),et.__webglColorRenderbuffer)for(let pt=0;pt<et.__webglColorRenderbuffer.length;pt++)et.__webglColorRenderbuffer[pt]&&a.deleteRenderbuffer(et.__webglColorRenderbuffer[pt]);et.__webglDepthRenderbuffer&&a.deleteRenderbuffer(et.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let pt=0,gt=C.length;pt<gt;pt++){let Lt=i.get(C[pt]);Lt.__webglTexture&&(a.deleteTexture(Lt.__webglTexture),r.memory.textures--),i.remove(C[pt])}i.remove(C),i.remove(L)}let W=0;function Y(){W=0}function k(){let L=W;return L>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+n.maxTextures),W+=1,L}function z(L){let C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function O(L,C){let et=i.get(L);if(L.isVideoTexture&&Vt(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){let ht=L.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(et,L,C);return}}e.bindTexture(a.TEXTURE_2D,et.__webglTexture,a.TEXTURE0+C)}function U(L,C){let et=i.get(L);if(L.version>0&&et.__version!==L.version){j(et,L,C);return}e.bindTexture(a.TEXTURE_2D_ARRAY,et.__webglTexture,a.TEXTURE0+C)}function N(L,C){let et=i.get(L);if(L.version>0&&et.__version!==L.version){j(et,L,C);return}e.bindTexture(a.TEXTURE_3D,et.__webglTexture,a.TEXTURE0+C)}function D(L,C){let et=i.get(L);if(L.version>0&&et.__version!==L.version){tt(et,L,C);return}e.bindTexture(a.TEXTURE_CUBE_MAP,et.__webglTexture,a.TEXTURE0+C)}let P={[ii]:a.REPEAT,[Ke]:a.CLAMP_TO_EDGE,[Ma]:a.MIRRORED_REPEAT},G={[Pe]:a.NEAREST,[Mr]:a.NEAREST_MIPMAP_NEAREST,[ma]:a.NEAREST_MIPMAP_LINEAR,[Zt]:a.LINEAR,[bc]:a.LINEAR_MIPMAP_NEAREST,[Qe]:a.LINEAR_MIPMAP_LINEAR},V={[op]:a.NEVER,[fp]:a.ALWAYS,[hp]:a.LESS,[Ad]:a.LEQUAL,[cp]:a.EQUAL,[dp]:a.GEQUAL,[lp]:a.GREATER,[up]:a.NOTEQUAL};function H(L,C,et){if(et?(a.texParameteri(L,a.TEXTURE_WRAP_S,P[C.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,P[C.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,P[C.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,G[C.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,G[C.minFilter])):(a.texParameteri(L,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(L,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(C.wrapS!==Ke||C.wrapT!==Ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(L,a.TEXTURE_MAG_FILTER,y(C.magFilter)),a.texParameteri(L,a.TEXTURE_MIN_FILTER,y(C.minFilter)),C.minFilter!==Pe&&C.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,V[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ht=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===Pe||C.minFilter!==ma&&C.minFilter!==Qe||C.type===dn&&t.has("OES_texture_float_linear")===!1||o===!1&&C.type===pn&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(a.texParameterf(L,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,n.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function B(L,C){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",T));let ht=C.source,pt=d.get(ht);pt===void 0&&(pt={},d.set(ht,pt));let gt=z(C);if(gt!==L.__cacheKey){pt[gt]===void 0&&(pt[gt]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,et=!0),pt[gt].usedTimes++;let Lt=pt[L.__cacheKey];Lt!==void 0&&(pt[L.__cacheKey].usedTimes--,Lt.usedTimes===0&&E(C)),L.__cacheKey=gt,L.__webglTexture=pt[gt].texture}return et}function j(L,C,et){let ht=a.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ht=a.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ht=a.TEXTURE_3D);let pt=B(L,C),gt=C.source;e.bindTexture(ht,L.__webglTexture,a.TEXTURE0+et);let Lt=i.get(gt);if(gt.version!==Lt.__version||pt===!0){e.activeTexture(a.TEXTURE0+et);let q=le.getPrimaries(le.workingColorSpace),ct=C.colorSpace===je?null:le.getPrimaries(C.colorSpace),vt=C.colorSpace===je||q===ct?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,C.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,C.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let kt=p(C)&&g(C.image)===!1,dt=b(C.image,kt,!1,n.maxTextureSize);dt=Ct(C,dt);let ce=g(dt)||o,Yt=s.convert(C.format,C.colorSpace),Ht=s.convert(C.type),Ft=w(C.internalFormat,Yt,Ht,C.colorSpace,C.isVideoTexture);H(ht,C,ce);let Pt,qt=C.mipmaps,oe=o&&C.isVideoTexture!==!0&&Ft!==Md,Re=Lt.__version===void 0||pt===!0,$t=R(C,dt,ce);if(C.isDepthTexture)Ft=a.DEPTH_COMPONENT,o?C.type===dn?Ft=a.DEPTH_COMPONENT32F:C.type===Sn?Ft=a.DEPTH_COMPONENT24:C.type===Yn?Ft=a.DEPTH24_STENCIL8:Ft=a.DEPTH_COMPONENT16:C.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Kn&&Ft===a.DEPTH_COMPONENT&&C.type!==vc&&C.type!==Sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Sn,Ht=s.convert(C.type)),C.format===Ns&&Ft===a.DEPTH_COMPONENT&&(Ft=a.DEPTH_STENCIL,C.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Yn,Ht=s.convert(C.type))),Re&&(oe?e.texStorage2D(a.TEXTURE_2D,1,Ft,dt.width,dt.height):e.texImage2D(a.TEXTURE_2D,0,Ft,dt.width,dt.height,0,Yt,Ht,null));else if(C.isDataTexture)if(qt.length>0&&ce){oe&&Re&&e.texStorage2D(a.TEXTURE_2D,$t,Ft,qt[0].width,qt[0].height);for(let _t=0,X=qt.length;_t<X;_t++)Pt=qt[_t],oe?e.texSubImage2D(a.TEXTURE_2D,_t,0,0,Pt.width,Pt.height,Yt,Ht,Pt.data):e.texImage2D(a.TEXTURE_2D,_t,Ft,Pt.width,Pt.height,0,Yt,Ht,Pt.data);C.generateMipmaps=!1}else oe?(Re&&e.texStorage2D(a.TEXTURE_2D,$t,Ft,dt.width,dt.height),e.texSubImage2D(a.TEXTURE_2D,0,0,0,dt.width,dt.height,Yt,Ht,dt.data)):e.texImage2D(a.TEXTURE_2D,0,Ft,dt.width,dt.height,0,Yt,Ht,dt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){oe&&Re&&e.texStorage3D(a.TEXTURE_2D_ARRAY,$t,Ft,qt[0].width,qt[0].height,dt.depth);for(let _t=0,X=qt.length;_t<X;_t++)Pt=qt[_t],C.format!==de?Yt!==null?oe?e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_t,0,0,0,Pt.width,Pt.height,dt.depth,Yt,Pt.data,0,0):e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,_t,Ft,Pt.width,Pt.height,dt.depth,0,Pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage3D(a.TEXTURE_2D_ARRAY,_t,0,0,0,Pt.width,Pt.height,dt.depth,Yt,Ht,Pt.data):e.texImage3D(a.TEXTURE_2D_ARRAY,_t,Ft,Pt.width,Pt.height,dt.depth,0,Yt,Ht,Pt.data)}else{oe&&Re&&e.texStorage2D(a.TEXTURE_2D,$t,Ft,qt[0].width,qt[0].height);for(let _t=0,X=qt.length;_t<X;_t++)Pt=qt[_t],C.format!==de?Yt!==null?oe?e.compressedTexSubImage2D(a.TEXTURE_2D,_t,0,0,Pt.width,Pt.height,Yt,Pt.data):e.compressedTexImage2D(a.TEXTURE_2D,_t,Ft,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage2D(a.TEXTURE_2D,_t,0,0,Pt.width,Pt.height,Yt,Ht,Pt.data):e.texImage2D(a.TEXTURE_2D,_t,Ft,Pt.width,Pt.height,0,Yt,Ht,Pt.data)}else if(C.isDataArrayTexture)oe?(Re&&e.texStorage3D(a.TEXTURE_2D_ARRAY,$t,Ft,dt.width,dt.height,dt.depth),e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Yt,Ht,dt.data)):e.texImage3D(a.TEXTURE_2D_ARRAY,0,Ft,dt.width,dt.height,dt.depth,0,Yt,Ht,dt.data);else if(C.isData3DTexture)oe?(Re&&e.texStorage3D(a.TEXTURE_3D,$t,Ft,dt.width,dt.height,dt.depth),e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Yt,Ht,dt.data)):e.texImage3D(a.TEXTURE_3D,0,Ft,dt.width,dt.height,dt.depth,0,Yt,Ht,dt.data);else if(C.isFramebufferTexture){if(Re)if(oe)e.texStorage2D(a.TEXTURE_2D,$t,Ft,dt.width,dt.height);else{let _t=dt.width,X=dt.height;for(let Et=0;Et<$t;Et++)e.texImage2D(a.TEXTURE_2D,Et,Ft,_t,X,0,Yt,Ht,null),_t>>=1,X>>=1}}else if(qt.length>0&&ce){oe&&Re&&e.texStorage2D(a.TEXTURE_2D,$t,Ft,qt[0].width,qt[0].height);for(let _t=0,X=qt.length;_t<X;_t++)Pt=qt[_t],oe?e.texSubImage2D(a.TEXTURE_2D,_t,0,0,Yt,Ht,Pt):e.texImage2D(a.TEXTURE_2D,_t,Ft,Yt,Ht,Pt);C.generateMipmaps=!1}else oe?(Re&&e.texStorage2D(a.TEXTURE_2D,$t,Ft,dt.width,dt.height),e.texSubImage2D(a.TEXTURE_2D,0,0,0,Yt,Ht,dt)):e.texImage2D(a.TEXTURE_2D,0,Ft,Yt,Ht,dt);x(C,ce)&&v(ht),Lt.__version=gt.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function tt(L,C,et){if(C.image.length!==6)return;let ht=B(L,C),pt=C.source;e.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+et);let gt=i.get(pt);if(pt.version!==gt.__version||ht===!0){e.activeTexture(a.TEXTURE0+et);let Lt=le.getPrimaries(le.workingColorSpace),q=C.colorSpace===je?null:le.getPrimaries(C.colorSpace),ct=C.colorSpace===je||Lt===q?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,C.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,C.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let vt=C.isCompressedTexture||C.image[0].isCompressedTexture,kt=C.image[0]&&C.image[0].isDataTexture,dt=[];for(let _t=0;_t<6;_t++)!vt&&!kt?dt[_t]=b(C.image[_t],!1,!0,n.maxCubemapSize):dt[_t]=kt?C.image[_t].image:C.image[_t],dt[_t]=Ct(C,dt[_t]);let ce=dt[0],Yt=g(ce)||o,Ht=s.convert(C.format,C.colorSpace),Ft=s.convert(C.type),Pt=w(C.internalFormat,Ht,Ft,C.colorSpace),qt=o&&C.isVideoTexture!==!0,oe=gt.__version===void 0||ht===!0,Re=R(C,ce,Yt);H(a.TEXTURE_CUBE_MAP,C,Yt);let $t;if(vt){qt&&oe&&e.texStorage2D(a.TEXTURE_CUBE_MAP,Re,Pt,ce.width,ce.height);for(let _t=0;_t<6;_t++){$t=dt[_t].mipmaps;for(let X=0;X<$t.length;X++){let Et=$t[X];C.format!==de?Ht!==null?qt?e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X,0,0,Et.width,Et.height,Ht,Et.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X,Pt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X,0,0,Et.width,Et.height,Ht,Ft,Et.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X,Pt,Et.width,Et.height,0,Ht,Ft,Et.data)}}}else{$t=C.mipmaps,qt&&oe&&($t.length>0&&Re++,e.texStorage2D(a.TEXTURE_CUBE_MAP,Re,Pt,dt[0].width,dt[0].height));for(let _t=0;_t<6;_t++)if(kt){qt?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,dt[_t].width,dt[_t].height,Ht,Ft,dt[_t].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Pt,dt[_t].width,dt[_t].height,0,Ht,Ft,dt[_t].data);for(let X=0;X<$t.length;X++){let Tt=$t[X].image[_t].image;qt?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X+1,0,0,Tt.width,Tt.height,Ht,Ft,Tt.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X+1,Pt,Tt.width,Tt.height,0,Ht,Ft,Tt.data)}}else{qt?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ht,Ft,dt[_t]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Pt,Ht,Ft,dt[_t]);for(let X=0;X<$t.length;X++){let Et=$t[X];qt?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X+1,0,0,Ht,Ft,Et.image[_t]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X+1,Pt,Ht,Ft,Et.image[_t])}}}x(C,Yt)&&v(a.TEXTURE_CUBE_MAP),gt.__version=pt.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function K(L,C,et,ht,pt,gt){let Lt=s.convert(et.format,et.colorSpace),q=s.convert(et.type),ct=w(et.internalFormat,Lt,q,et.colorSpace);if(!i.get(C).__hasExternalTextures){let kt=Math.max(1,C.width>>gt),dt=Math.max(1,C.height>>gt);pt===a.TEXTURE_3D||pt===a.TEXTURE_2D_ARRAY?e.texImage3D(pt,gt,ct,kt,dt,C.depth,0,Lt,q,null):e.texImage2D(pt,gt,ct,kt,dt,0,Lt,q,null)}e.bindFramebuffer(a.FRAMEBUFFER,L),bt(C)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ht,pt,i.get(et).__webglTexture,0,At(C)):(pt===a.TEXTURE_2D||pt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ht,pt,i.get(et).__webglTexture,gt),e.bindFramebuffer(a.FRAMEBUFFER,null)}function J(L,C,et){if(a.bindRenderbuffer(a.RENDERBUFFER,L),C.depthBuffer&&!C.stencilBuffer){let ht=o===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(et||bt(C)){let pt=C.depthTexture;pt&&pt.isDepthTexture&&(pt.type===dn?ht=a.DEPTH_COMPONENT32F:pt.type===Sn&&(ht=a.DEPTH_COMPONENT24));let gt=At(C);bt(C)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,gt,ht,C.width,C.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,gt,ht,C.width,C.height)}else a.renderbufferStorage(a.RENDERBUFFER,ht,C.width,C.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,L)}else if(C.depthBuffer&&C.stencilBuffer){let ht=At(C);et&&bt(C)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ht,a.DEPTH24_STENCIL8,C.width,C.height):bt(C)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ht,a.DEPTH24_STENCIL8,C.width,C.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,L)}else{let ht=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let pt=0;pt<ht.length;pt++){let gt=ht[pt],Lt=s.convert(gt.format,gt.colorSpace),q=s.convert(gt.type),ct=w(gt.internalFormat,Lt,q,gt.colorSpace),vt=At(C);et&&bt(C)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,vt,ct,C.width,C.height):bt(C)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,vt,ct,C.width,C.height):a.renderbufferStorage(a.RENDERBUFFER,ct,C.width,C.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ot(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(a.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),O(C.depthTexture,0);let ht=i.get(C.depthTexture).__webglTexture,pt=At(C);if(C.depthTexture.format===Kn)bt(C)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ht,0,pt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ht,0);else if(C.depthTexture.format===Ns)bt(C)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ht,0,pt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function it(L){let C=i.get(L),et=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");ot(C.__webglFramebuffer,L)}else if(et){C.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(a.FRAMEBUFFER,C.__webglFramebuffer[ht]),C.__webglDepthbuffer[ht]=a.createRenderbuffer(),J(C.__webglDepthbuffer[ht],L,!1)}else e.bindFramebuffer(a.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=a.createRenderbuffer(),J(C.__webglDepthbuffer,L,!1);e.bindFramebuffer(a.FRAMEBUFFER,null)}function Mt(L,C,et){let ht=i.get(L);C!==void 0&&K(ht.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),et!==void 0&&it(L)}function Q(L){let C=L.texture,et=i.get(L),ht=i.get(C);L.addEventListener("dispose",S),L.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=a.createTexture()),ht.__version=C.version,r.memory.textures++);let pt=L.isWebGLCubeRenderTarget===!0,gt=L.isWebGLMultipleRenderTargets===!0,Lt=g(L)||o;if(pt){et.__webglFramebuffer=[];for(let q=0;q<6;q++)if(o&&C.mipmaps&&C.mipmaps.length>0){et.__webglFramebuffer[q]=[];for(let ct=0;ct<C.mipmaps.length;ct++)et.__webglFramebuffer[q][ct]=a.createFramebuffer()}else et.__webglFramebuffer[q]=a.createFramebuffer()}else{if(o&&C.mipmaps&&C.mipmaps.length>0){et.__webglFramebuffer=[];for(let q=0;q<C.mipmaps.length;q++)et.__webglFramebuffer[q]=a.createFramebuffer()}else et.__webglFramebuffer=a.createFramebuffer();if(gt)if(n.drawBuffers){let q=L.texture;for(let ct=0,vt=q.length;ct<vt;ct++){let kt=i.get(q[ct]);kt.__webglTexture===void 0&&(kt.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&bt(L)===!1){let q=gt?C:[C];et.__webglMultisampledFramebuffer=a.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let ct=0;ct<q.length;ct++){let vt=q[ct];et.__webglColorRenderbuffer[ct]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,et.__webglColorRenderbuffer[ct]);let kt=s.convert(vt.format,vt.colorSpace),dt=s.convert(vt.type),ce=w(vt.internalFormat,kt,dt,vt.colorSpace,L.isXRRenderTarget===!0),Yt=At(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,Yt,ce,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ct,a.RENDERBUFFER,et.__webglColorRenderbuffer[ct])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=a.createRenderbuffer(),J(et.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(pt){e.bindTexture(a.TEXTURE_CUBE_MAP,ht.__webglTexture),H(a.TEXTURE_CUBE_MAP,C,Lt);for(let q=0;q<6;q++)if(o&&C.mipmaps&&C.mipmaps.length>0)for(let ct=0;ct<C.mipmaps.length;ct++)K(et.__webglFramebuffer[q][ct],L,C,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct);else K(et.__webglFramebuffer[q],L,C,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);x(C,Lt)&&v(a.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){let q=L.texture;for(let ct=0,vt=q.length;ct<vt;ct++){let kt=q[ct],dt=i.get(kt);e.bindTexture(a.TEXTURE_2D,dt.__webglTexture),H(a.TEXTURE_2D,kt,Lt),K(et.__webglFramebuffer,L,kt,a.COLOR_ATTACHMENT0+ct,a.TEXTURE_2D,0),x(kt,Lt)&&v(a.TEXTURE_2D)}e.unbindTexture()}else{let q=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?q=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(q,ht.__webglTexture),H(q,C,Lt),o&&C.mipmaps&&C.mipmaps.length>0)for(let ct=0;ct<C.mipmaps.length;ct++)K(et.__webglFramebuffer[ct],L,C,a.COLOR_ATTACHMENT0,q,ct);else K(et.__webglFramebuffer,L,C,a.COLOR_ATTACHMENT0,q,0);x(C,Lt)&&v(q),e.unbindTexture()}L.depthBuffer&&it(L)}function Nt(L){let C=g(L)||o,et=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ht=0,pt=et.length;ht<pt;ht++){let gt=et[ht];if(x(gt,C)){let Lt=L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,q=i.get(gt).__webglTexture;e.bindTexture(Lt,q),v(Lt),e.unbindTexture()}}}function xt(L){if(o&&L.samples>0&&bt(L)===!1){let C=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],et=L.width,ht=L.height,pt=a.COLOR_BUFFER_BIT,gt=[],Lt=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,q=i.get(L),ct=L.isWebGLMultipleRenderTargets===!0;if(ct)for(let vt=0;vt<C.length;vt++)e.bindFramebuffer(a.FRAMEBUFFER,q.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+vt,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,q.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+vt,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let vt=0;vt<C.length;vt++){gt.push(a.COLOR_ATTACHMENT0+vt),L.depthBuffer&&gt.push(Lt);let kt=q.__ignoreDepthValues!==void 0?q.__ignoreDepthValues:!1;if(kt===!1&&(L.depthBuffer&&(pt|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&(pt|=a.STENCIL_BUFFER_BIT)),ct&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,q.__webglColorRenderbuffer[vt]),kt===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[Lt]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[Lt])),ct){let dt=i.get(C[vt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,dt,0)}a.blitFramebuffer(0,0,et,ht,0,0,et,ht,pt,a.NEAREST),c&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,gt)}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ct)for(let vt=0;vt<C.length;vt++){e.bindFramebuffer(a.FRAMEBUFFER,q.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+vt,a.RENDERBUFFER,q.__webglColorRenderbuffer[vt]);let kt=i.get(C[vt]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,q.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+vt,a.TEXTURE_2D,kt,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}}function At(L){return Math.min(n.maxSamples,L.samples)}function bt(L){let C=i.get(L);return o&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Vt(L){let C=r.render.frame;l.get(L)!==C&&(l.set(L,C),L.update())}function Ct(L,C){let et=L.colorSpace,ht=L.format,pt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Lh||et!==ke&&et!==je&&(le.getTransfer(et)===xe?o===!1?t.has("EXT_sRGB")===!0&&ht===de?(L.format=Lh,L.minFilter=Zt,L.generateMipmaps=!1):C=Cr.sRGBToLinear(C):(ht!==de||pt!==Ne)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),C}this.allocateTextureUnit=k,this.resetTextureUnits=Y,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=N,this.setTextureCube=D,this.rebindTextures=Mt,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=K,this.useMultisampledRTT=bt}function gv(a,t,e){let i=e.isWebGL2;function n(s,r=je){let o,h=le.getTransfer(r);if(s===Ne)return a.UNSIGNED_BYTE;if(s===vd)return a.UNSIGNED_SHORT_4_4_4_4;if(s===xd)return a.UNSIGNED_SHORT_5_5_5_1;if(s===Qf)return a.BYTE;if(s===Zf)return a.SHORT;if(s===vc)return a.UNSIGNED_SHORT;if(s===bd)return a.INT;if(s===Sn)return a.UNSIGNED_INT;if(s===dn)return a.FLOAT;if(s===pn)return i?a.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Jf)return a.ALPHA;if(s===de)return a.RGBA;if(s===$f)return a.LUMINANCE;if(s===tp)return a.LUMINANCE_ALPHA;if(s===Kn)return a.DEPTH_COMPONENT;if(s===Ns)return a.DEPTH_STENCIL;if(s===Lh)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===xc)return a.RED;if(s===yd)return a.RED_INTEGER;if(s===ep)return a.RG;if(s===_d)return a.RG_INTEGER;if(s===wd)return a.RGBA_INTEGER;if(s===Wo||s===qo||s===Xo||s===jo)if(h===xe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Wo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Wo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ll||s===Fl||s===Il||s===Dl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ll)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Il)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Md)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kl||s===zl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===kl)return h===xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===zl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ul||s===Nl||s===Ol||s===Bl||s===Hl||s===Vl||s===Gl||s===Wl||s===ql||s===Xl||s===jl||s===Yl||s===Kl||s===Ql)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ul)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ol)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Wl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ql)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Xl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Kl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ql)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yo||s===Zl||s===Jl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Yo)return h===xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ip||s===$l||s===tu||s===eu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Yo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===$l)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===eu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yn?i?a.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:n}}var qh=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ae=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},bv={type:"move"},xa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,r=null,o=this._targetRay,h=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,i),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=l.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return o!==null&&(o.visible=n!==null),h!==null&&(h.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Xh=class extends Pn{constructor(t,e){super();let i=this,n=null,s=1,r=null,o="local-floor",h=1,c=null,l=null,u=null,d=null,f=null,m=null,b=e.getContextAttributes(),g=null,p=null,x=[],v=[],w=new mt,R=null,y=new Be;y.layers.enable(1),y.viewport=new ie;let T=new Be;T.layers.enable(2),T.viewport=new ie;let S=[y,T],_=new qh;_.layers.enable(1),_.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let B=x[H];return B===void 0&&(B=new xa,x[H]=B),B.getTargetRaySpace()},this.getControllerGrip=function(H){let B=x[H];return B===void 0&&(B=new xa,x[H]=B),B.getGripSpace()},this.getHand=function(H){let B=x[H];return B===void 0&&(B=new xa,x[H]=B),B.getHandSpace()};function W(H){let B=v.indexOf(H.inputSource);if(B===-1)return;let j=x[B];j!==void 0&&(j.update(H.inputSource,H.frame,c||r),j.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){n.removeEventListener("select",W),n.removeEventListener("selectstart",W),n.removeEventListener("selectend",W),n.removeEventListener("squeeze",W),n.removeEventListener("squeezestart",W),n.removeEventListener("squeezeend",W),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",k);for(let H=0;H<x.length;H++){let B=v[H];B!==null&&(v[H]=null,x[H].disconnect(B))}E=null,I=null,t.setRenderTarget(g),f=null,d=null,u=null,n=null,p=null,V.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(g=t.getRenderTarget(),n.addEventListener("select",W),n.addEventListener("selectstart",W),n.addEventListener("selectend",W),n.addEventListener("squeeze",W),n.addEventListener("squeezestart",W),n.addEventListener("squeezeend",W),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let B={antialias:n.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,B),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new _e(f.framebufferWidth,f.framebufferHeight,{format:de,type:Ne,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil})}else{let B=null,j=null,tt=null;b.depth&&(tt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,B=b.stencil?Ns:Kn,j=b.stencil?Yn:Sn);let K={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(K),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new _e(d.textureWidth,d.textureHeight,{format:de,type:Ne,depthTexture:new Jn(d.textureWidth,d.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0});let J=t.properties.get(p);J.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(h),c=null,r=await n.requestReferenceSpace(o),V.setContext(n),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function k(H){for(let B=0;B<H.removed.length;B++){let j=H.removed[B],tt=v.indexOf(j);tt>=0&&(v[tt]=null,x[tt].disconnect(j))}for(let B=0;B<H.added.length;B++){let j=H.added[B],tt=v.indexOf(j);if(tt===-1){for(let J=0;J<x.length;J++)if(J>=v.length){v.push(j),tt=J;break}else if(v[J]===null){v[J]=j,tt=J;break}if(tt===-1)break}let K=x[tt];K&&K.connect(j)}}let z=new M,O=new M;function U(H,B,j){z.setFromMatrixPosition(B.matrixWorld),O.setFromMatrixPosition(j.matrixWorld);let tt=z.distanceTo(O),K=B.projectionMatrix.elements,J=j.projectionMatrix.elements,ot=K[14]/(K[10]-1),it=K[14]/(K[10]+1),Mt=(K[9]+1)/K[5],Q=(K[9]-1)/K[5],Nt=(K[8]-1)/K[0],xt=(J[8]+1)/J[0],At=ot*Nt,bt=ot*xt,Vt=tt/(-Nt+xt),Ct=Vt*-Nt;B.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ct),H.translateZ(Vt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let L=ot+Vt,C=it+Vt,et=At-Ct,ht=bt+(tt-Ct),pt=Mt*it/C*L,gt=Q*it/C*L;H.projectionMatrix.makePerspective(et,ht,pt,gt,L,C),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function N(H,B){B===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(B.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;_.near=T.near=y.near=H.near,_.far=T.far=y.far=H.far,(E!==_.near||I!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,I=_.far);let B=H.parent,j=_.cameras;N(_,B);for(let tt=0;tt<j.length;tt++)N(j[tt],B);j.length===2?U(_,y,T):_.projectionMatrix.copy(y.projectionMatrix),D(H,_,B)};function D(H,B,j){j===null?H.matrix.copy(B.matrixWorld):(H.matrix.copy(j.matrixWorld),H.matrix.invert(),H.matrix.multiply(B.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(B.projectionMatrix),H.projectionMatrixInverse.copy(B.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Bs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return h},this.setFoveation=function(H){h=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)};let P=null;function G(H,B){if(l=B.getViewerPose(c||r),m=B,l!==null){let j=l.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let tt=!1;j.length!==_.cameras.length&&(_.cameras.length=0,tt=!0);for(let K=0;K<j.length;K++){let J=j[K],ot=null;if(f!==null)ot=f.getViewport(J);else{let Mt=u.getViewSubImage(d,J);ot=Mt.viewport,K===0&&(t.setRenderTargetTextures(p,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(p))}let it=S[K];it===void 0&&(it=new Be,it.layers.enable(K),it.viewport=new ie,S[K]=it),it.matrix.fromArray(J.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(J.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ot.x,ot.y,ot.width,ot.height),K===0&&(_.matrix.copy(it.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),tt===!0&&_.cameras.push(it)}}for(let j=0;j<x.length;j++){let tt=v[j],K=x[j];tt!==null&&K!==void 0&&K.update(tt,B,c||r)}P&&P(H,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),m=null}let V=new Ld;V.setAnimationLoop(G),this.setAnimationLoop=function(H){P=H},this.dispose=function(){}}};function vv(a,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Pd(a)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,x,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),l(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,w)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?h(g,p,x,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Se&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Se&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=t.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let v=a._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function h(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Se&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function xv(a,t,e,i){let n={},s={},r=[],o=e.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(x,v){let w=v.program;i.uniformBlockBinding(x,w)}function c(x,v){let w=n[x.id];w===void 0&&(m(x),w=l(x),n[x.id]=w,x.addEventListener("dispose",g));let R=v.program;i.updateUBOMapping(x,R);let y=t.render.frame;s[x.id]!==y&&(d(x),s[x.id]=y)}function l(x){let v=u();x.__bindingPointIndex=v;let w=a.createBuffer(),R=x.__size,y=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,w),a.bufferData(a.UNIFORM_BUFFER,R,y),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,v,w),w}function u(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let v=n[x.id],w=x.uniforms,R=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,v);for(let y=0,T=w.length;y<T;y++){let S=Array.isArray(w[y])?w[y]:[w[y]];for(let _=0,E=S.length;_<E;_++){let I=S[_];if(f(I,y,_,R)===!0){let W=I.__offset,Y=Array.isArray(I.value)?I.value:[I.value],k=0;for(let z=0;z<Y.length;z++){let O=Y[z],U=b(O);typeof O=="number"||typeof O=="boolean"?(I.__data[0]=O,a.bufferSubData(a.UNIFORM_BUFFER,W+k,I.__data)):O.isMatrix3?(I.__data[0]=O.elements[0],I.__data[1]=O.elements[1],I.__data[2]=O.elements[2],I.__data[3]=0,I.__data[4]=O.elements[3],I.__data[5]=O.elements[4],I.__data[6]=O.elements[5],I.__data[7]=0,I.__data[8]=O.elements[6],I.__data[9]=O.elements[7],I.__data[10]=O.elements[8],I.__data[11]=0):(O.toArray(I.__data,k),k+=U.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,W,I.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(x,v,w,R){let y=x.value,T=v+"_"+w;if(R[T]===void 0)return typeof y=="number"||typeof y=="boolean"?R[T]=y:R[T]=y.clone(),!0;{let S=R[T];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return R[T]=y,!0}else if(S.equals(y)===!1)return S.copy(y),!0}return!1}function m(x){let v=x.uniforms,w=0,R=16;for(let T=0,S=v.length;T<S;T++){let _=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,I=_.length;E<I;E++){let W=_[E],Y=Array.isArray(W.value)?W.value:[W.value];for(let k=0,z=Y.length;k<z;k++){let O=Y[k],U=b(O),N=w%R;N!==0&&R-N<U.boundary&&(w+=R-N),W.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=U.storage}}}let y=w%R;return y>0&&(w+=R-y),x.__size=w,x.__cache={},this}function b(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){let v=x.target;v.removeEventListener("dispose",g);let w=r.indexOf(v.__bindingPointIndex);r.splice(w,1),a.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function p(){for(let x in n)a.deleteBuffer(n[x]);r=[],n={},s={}}return{bind:h,update:c,dispose:p}}var Sa=class{constructor(t={}){let{canvas:e=Rp(),context:i=null,depth:n=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=r;let f=new Uint32Array(4),m=new Int32Array(4),b=null,g=null,p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;let v=this,w=!1,R=0,y=0,T=null,S=-1,_=null,E=new ie,I=new ie,W=null,Y=new Dt(0),k=0,z=e.width,O=e.height,U=1,N=null,D=null,P=new ie(0,0,z,O),G=new ie(0,0,z,O),V=!1,H=new Ta,B=!1,j=!1,tt=null,K=new Rt,J=new mt,ot=new M,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return T===null?U:1}let Q=i;function Nt(F,$){for(let at=0;at<F.length;at++){let rt=F[at],nt=e.getContext(rt,$);if(nt!==null)return nt}return null}try{let F={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pc}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",Et,!1),Q===null){let $=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&$.shift(),Q=Nt($,F),Q===null)throw Nt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let xt,At,bt,Vt,Ct,L,C,et,ht,pt,gt,Lt,q,ct,vt,kt,dt,ce,Yt,Ht,Ft,Pt,qt,oe;function Re(){xt=new Ng(Q),At=new Fg(Q,xt,t),xt.init(At),Pt=new gv(Q,xt,At),bt=new pv(Q,xt,At),Vt=new Hg(Q),Ct=new iv,L=new mv(Q,xt,bt,Ct,At,Pt,Vt),C=new Dg(v),et=new Ug(v),ht=new Kp(Q,At),qt=new Pg(Q,xt,ht,At),pt=new Og(Q,ht,Vt,qt),gt=new qg(Q,pt,ht,Vt),Yt=new Wg(Q,At,L),kt=new Ig(Ct),Lt=new ev(v,C,et,xt,At,qt,kt),q=new vv(v,Ct),ct=new sv,vt=new lv(xt,At),ce=new Cg(v,C,et,bt,gt,d,h),dt=new fv(v,gt,At),oe=new xv(Q,Vt,At,bt),Ht=new Lg(Q,xt,Vt,At),Ft=new Bg(Q,xt,Vt,At),Vt.programs=Lt.programs,v.capabilities=At,v.extensions=xt,v.properties=Ct,v.renderLists=ct,v.shadowMap=dt,v.state=bt,v.info=Vt}Re();let $t=new Xh(v,Q);this.xr=$t,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){let F=xt.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=xt.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(F){F!==void 0&&(U=F,this.setSize(z,O,!1))},this.getSize=function(F){return F.set(z,O)},this.setSize=function(F,$,at=!0){if($t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=F,O=$,e.width=Math.floor(F*U),e.height=Math.floor($*U),at===!0&&(e.style.width=F+"px",e.style.height=$+"px"),this.setViewport(0,0,F,$)},this.getDrawingBufferSize=function(F){return F.set(z*U,O*U).floor()},this.setDrawingBufferSize=function(F,$,at){z=F,O=$,U=at,e.width=Math.floor(F*at),e.height=Math.floor($*at),this.setViewport(0,0,F,$)},this.getCurrentViewport=function(F){return F.copy(E)},this.getViewport=function(F){return F.copy(P)},this.setViewport=function(F,$,at,rt){F.isVector4?P.set(F.x,F.y,F.z,F.w):P.set(F,$,at,rt),bt.viewport(E.copy(P).multiplyScalar(U).floor())},this.getScissor=function(F){return F.copy(G)},this.setScissor=function(F,$,at,rt){F.isVector4?G.set(F.x,F.y,F.z,F.w):G.set(F,$,at,rt),bt.scissor(I.copy(G).multiplyScalar(U).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(F){bt.setScissorTest(V=F)},this.setOpaqueSort=function(F){N=F},this.setTransparentSort=function(F){D=F},this.getClearColor=function(F){return F.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(F=!0,$=!0,at=!0){let rt=0;if(F){let nt=!1;if(T!==null){let St=T.texture.format;nt=St===wd||St===_d||St===yd}if(nt){let St=T.texture.type,It=St===Ne||St===Sn||St===vc||St===Yn||St===vd||St===xd,Ot=ce.getClearColor(),Wt=ce.getClearAlpha(),Jt=Ot.r,Xt=Ot.g,Kt=Ot.b;It?(f[0]=Jt,f[1]=Xt,f[2]=Kt,f[3]=Wt,Q.clearBufferuiv(Q.COLOR,0,f)):(m[0]=Jt,m[1]=Xt,m[2]=Kt,m[3]=Wt,Q.clearBufferiv(Q.COLOR,0,m))}else rt|=Q.COLOR_BUFFER_BIT}$&&(rt|=Q.DEPTH_BUFFER_BIT),at&&(rt|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),ct.dispose(),vt.dispose(),Ct.dispose(),C.dispose(),et.dispose(),gt.dispose(),qt.dispose(),oe.dispose(),Lt.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",ai),$t.removeEventListener("sessionend",be),tt&&(tt.dispose(),tt=null),ri.stop()};function _t(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let F=Vt.autoReset,$=dt.enabled,at=dt.autoUpdate,rt=dt.needsUpdate,nt=dt.type;Re(),Vt.autoReset=F,dt.enabled=$,dt.autoUpdate=at,dt.needsUpdate=rt,dt.type=nt}function Et(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Tt(F){let $=F.target;$.removeEventListener("dispose",Tt),Gt($)}function Gt(F){zt(F),Ct.remove(F)}function zt(F){let $=Ct.get(F).programs;$!==void 0&&($.forEach(function(at){Lt.releaseProgram(at)}),F.isShaderMaterial&&Lt.releaseShaderCache(F))}this.renderBufferDirect=function(F,$,at,rt,nt,St){$===null&&($=it);let It=nt.isMesh&&nt.matrixWorld.determinant()<0,Ot=pf(F,$,at,rt,nt);bt.setMaterial(rt,It);let Wt=at.index,Jt=1;if(rt.wireframe===!0){if(Wt=pt.getWireframeAttribute(at),Wt===void 0)return;Jt=2}let Xt=at.drawRange,Kt=at.attributes.position,Ie=Xt.start*Jt,xi=(Xt.start+Xt.count)*Jt;St!==null&&(Ie=Math.max(Ie,St.start*Jt),xi=Math.min(xi,(St.start+St.count)*Jt)),Wt!==null?(Ie=Math.max(Ie,0),xi=Math.min(xi,Wt.count)):Kt!=null&&(Ie=Math.max(Ie,0),xi=Math.min(xi,Kt.count));let qe=xi-Ie;if(qe<0||qe===1/0)return;qt.setup(nt,rt,Ot,at,Wt);let nn,Te=Ht;if(Wt!==null&&(nn=ht.get(Wt),Te=Ft,Te.setIndex(nn)),nt.isMesh)rt.wireframe===!0?(bt.setLineWidth(rt.wireframeLinewidth*Mt()),Te.setMode(Q.LINES)):Te.setMode(Q.TRIANGLES);else if(nt.isLine){let te=rt.linewidth;te===void 0&&(te=1),bt.setLineWidth(te*Mt()),nt.isLineSegments?Te.setMode(Q.LINES):nt.isLineLoop?Te.setMode(Q.LINE_LOOP):Te.setMode(Q.LINE_STRIP)}else nt.isPoints?Te.setMode(Q.POINTS):nt.isSprite&&Te.setMode(Q.TRIANGLES);if(nt.isBatchedMesh)Te.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else if(nt.isInstancedMesh)Te.renderInstances(Ie,qe,nt.count);else if(at.isInstancedBufferGeometry){let te=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Bo=Math.min(at.instanceCount,te);Te.renderInstances(Ie,qe,Bo)}else Te.render(Ie,qe)};function me(F,$,at){F.transparent===!0&&F.side===De&&F.forceSinglePass===!1?(F.side=Se,F.needsUpdate=!0,Ga(F,$,at),F.side=Ye,F.needsUpdate=!0,Ga(F,$,at),F.side=De):Ga(F,$,at)}this.compile=function(F,$,at=null){at===null&&(at=F),g=vt.get(at),g.init(),x.push(g),at.traverseVisible(function(nt){nt.isLight&&nt.layers.test($.layers)&&(g.pushLight(nt),nt.castShadow&&g.pushShadow(nt))}),F!==at&&F.traverseVisible(function(nt){nt.isLight&&nt.layers.test($.layers)&&(g.pushLight(nt),nt.castShadow&&g.pushShadow(nt))}),g.setupLights(v._useLegacyLights);let rt=new Set;return F.traverse(function(nt){let St=nt.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){let Ot=St[It];me(Ot,at,nt),rt.add(Ot)}else me(St,at,nt),rt.add(St)}),x.pop(),g=null,rt},this.compileAsync=function(F,$,at=null){let rt=this.compile(F,$,at);return new Promise(nt=>{function St(){if(rt.forEach(function(It){Ct.get(It).currentProgram.isReady()&&rt.delete(It)}),rt.size===0){nt(F);return}setTimeout(St,10)}xt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let ge=null;function We(F){ge&&ge(F)}function ai(){ri.stop()}function be(){ri.start()}let ri=new Ld;ri.setAnimationLoop(We),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(F){ge=F,$t.setAnimationLoop(F),F===null?ri.stop():ri.start()},$t.addEventListener("sessionstart",ai),$t.addEventListener("sessionend",be),this.render=function(F,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&($t.cameraAutoUpdate===!0&&$t.updateCamera($),$=$t.getCamera()),F.isScene===!0&&F.onBeforeRender(v,F,$,T),g=vt.get(F,x.length),g.init(),x.push(g),K.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),H.setFromProjectionMatrix(K),j=this.localClippingEnabled,B=kt.init(this.clippingPlanes,j),b=ct.get(F,p.length),b.init(),p.push(b),qi(F,$,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(N,D),this.info.render.frame++,B===!0&&kt.beginShadows();let at=g.state.shadowsArray;if(dt.render(at,F,$),B===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(b,F),g.setupLights(v._useLegacyLights),$.isArrayCamera){let rt=$.cameras;for(let nt=0,St=rt.length;nt<St;nt++){let It=rt[nt];xl(b,F,It,It.viewport)}}else xl(b,F,$);T!==null&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),F.isScene===!0&&F.onAfterRender(v,F,$),qt.resetDefaultState(),S=-1,_=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function qi(F,$,at,rt){if(F.visible===!1)return;if(F.layers.test($.layers)){if(F.isGroup)at=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update($);else if(F.isLight)g.pushLight(F),F.castShadow&&g.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||H.intersectsSprite(F)){rt&&ot.setFromMatrixPosition(F.matrixWorld).applyMatrix4(K);let It=gt.update(F),Ot=F.material;Ot.visible&&b.push(F,It,Ot,at,ot.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||H.intersectsObject(F))){let It=gt.update(F),Ot=F.material;if(rt&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),ot.copy(F.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),ot.copy(It.boundingSphere.center)),ot.applyMatrix4(F.matrixWorld).applyMatrix4(K)),Array.isArray(Ot)){let Wt=It.groups;for(let Jt=0,Xt=Wt.length;Jt<Xt;Jt++){let Kt=Wt[Jt],Ie=Ot[Kt.materialIndex];Ie&&Ie.visible&&b.push(F,It,Ie,at,ot.z,Kt)}}else Ot.visible&&b.push(F,It,Ot,at,ot.z,null)}}let St=F.children;for(let It=0,Ot=St.length;It<Ot;It++)qi(St[It],$,at,rt)}function xl(F,$,at,rt){let nt=F.opaque,St=F.transmissive,It=F.transparent;g.setupLightsView(at),B===!0&&kt.setGlobalState(v.clippingPlanes,at),St.length>0&&ff(nt,St,$,at),rt&&bt.viewport(E.copy(rt)),nt.length>0&&Va(nt,$,at),St.length>0&&Va(St,$,at),It.length>0&&Va(It,$,at),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ff(F,$,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;let St=At.isWebGL2;tt===null&&(tt=new _e(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?pn:Ne,minFilter:Qe,samples:St?4:0})),v.getDrawingBufferSize(J),St?tt.setSize(J.x,J.y):tt.setSize(Rr(J.x),Rr(J.y));let It=v.getRenderTarget();v.setRenderTarget(tt),v.getClearColor(Y),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear();let Ot=v.toneMapping;v.toneMapping=Yi,Va(F,at,rt),L.updateMultisampleRenderTarget(tt),L.updateRenderTargetMipmap(tt);let Wt=!1;for(let Jt=0,Xt=$.length;Jt<Xt;Jt++){let Kt=$[Jt],Ie=Kt.object,xi=Kt.geometry,qe=Kt.material,nn=Kt.group;if(qe.side===De&&Ie.layers.test(rt.layers)){let Te=qe.side;qe.side=Se,qe.needsUpdate=!0,yl(Ie,at,rt,xi,qe,nn),qe.side=Te,qe.needsUpdate=!0,Wt=!0}}Wt===!0&&(L.updateMultisampleRenderTarget(tt),L.updateRenderTargetMipmap(tt)),v.setRenderTarget(It),v.setClearColor(Y,k),v.toneMapping=Ot}function Va(F,$,at){let rt=$.isScene===!0?$.overrideMaterial:null;for(let nt=0,St=F.length;nt<St;nt++){let It=F[nt],Ot=It.object,Wt=It.geometry,Jt=rt===null?It.material:rt,Xt=It.group;Ot.layers.test(at.layers)&&yl(Ot,$,at,Wt,Jt,Xt)}}function yl(F,$,at,rt,nt,St){F.onBeforeRender(v,$,at,rt,nt,St),F.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),nt.onBeforeRender(v,$,at,rt,F,St),nt.transparent===!0&&nt.side===De&&nt.forceSinglePass===!1?(nt.side=Se,nt.needsUpdate=!0,v.renderBufferDirect(at,$,rt,nt,F,St),nt.side=Ye,nt.needsUpdate=!0,v.renderBufferDirect(at,$,rt,nt,F,St),nt.side=De):v.renderBufferDirect(at,$,rt,nt,F,St),F.onAfterRender(v,$,at,rt,nt,St)}function Ga(F,$,at){$.isScene!==!0&&($=it);let rt=Ct.get(F),nt=g.state.lights,St=g.state.shadowsArray,It=nt.state.version,Ot=Lt.getParameters(F,nt.state,St,$,at),Wt=Lt.getProgramCacheKey(Ot),Jt=rt.programs;rt.environment=F.isMeshStandardMaterial?$.environment:null,rt.fog=$.fog,rt.envMap=(F.isMeshStandardMaterial?et:C).get(F.envMap||rt.environment),Jt===void 0&&(F.addEventListener("dispose",Tt),Jt=new Map,rt.programs=Jt);let Xt=Jt.get(Wt);if(Xt!==void 0){if(rt.currentProgram===Xt&&rt.lightsStateVersion===It)return wl(F,Ot),Xt}else Ot.uniforms=Lt.getUniforms(F),F.onBuild(at,Ot,v),F.onBeforeCompile(Ot,v),Xt=Lt.acquireProgram(Ot,Wt),Jt.set(Wt,Xt),rt.uniforms=Ot.uniforms;let Kt=rt.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Kt.clippingPlanes=kt.uniform),wl(F,Ot),rt.needsLights=gf(F),rt.lightsStateVersion=It,rt.needsLights&&(Kt.ambientLightColor.value=nt.state.ambient,Kt.lightProbe.value=nt.state.probe,Kt.directionalLights.value=nt.state.directional,Kt.directionalLightShadows.value=nt.state.directionalShadow,Kt.spotLights.value=nt.state.spot,Kt.spotLightShadows.value=nt.state.spotShadow,Kt.rectAreaLights.value=nt.state.rectArea,Kt.ltc_1.value=nt.state.rectAreaLTC1,Kt.ltc_2.value=nt.state.rectAreaLTC2,Kt.pointLights.value=nt.state.point,Kt.pointLightShadows.value=nt.state.pointShadow,Kt.hemisphereLights.value=nt.state.hemi,Kt.directionalShadowMap.value=nt.state.directionalShadowMap,Kt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Kt.spotShadowMap.value=nt.state.spotShadowMap,Kt.spotLightMatrix.value=nt.state.spotLightMatrix,Kt.spotLightMap.value=nt.state.spotLightMap,Kt.pointShadowMap.value=nt.state.pointShadowMap,Kt.pointShadowMatrix.value=nt.state.pointShadowMatrix),rt.currentProgram=Xt,rt.uniformsList=null,Xt}function _l(F){if(F.uniformsList===null){let $=F.currentProgram.getUniforms();F.uniformsList=ks.seqWithValue($.seq,F.uniforms)}return F.uniformsList}function wl(F,$){let at=Ct.get(F);at.outputColorSpace=$.outputColorSpace,at.batching=$.batching,at.instancing=$.instancing,at.instancingColor=$.instancingColor,at.skinning=$.skinning,at.morphTargets=$.morphTargets,at.morphNormals=$.morphNormals,at.morphColors=$.morphColors,at.morphTargetsCount=$.morphTargetsCount,at.numClippingPlanes=$.numClippingPlanes,at.numIntersection=$.numClipIntersection,at.vertexAlphas=$.vertexAlphas,at.vertexTangents=$.vertexTangents,at.toneMapping=$.toneMapping}function pf(F,$,at,rt,nt){$.isScene!==!0&&($=it),L.resetTextureUnits();let St=$.fog,It=rt.isMeshStandardMaterial?$.environment:null,Ot=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ke,Wt=(rt.isMeshStandardMaterial?et:C).get(rt.envMap||It),Jt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Xt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Kt=!!at.morphAttributes.position,Ie=!!at.morphAttributes.normal,xi=!!at.morphAttributes.color,qe=Yi;rt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(qe=v.toneMapping);let nn=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Te=nn!==void 0?nn.length:0,te=Ct.get(rt),Bo=g.state.lights;if(B===!0&&(j===!0||F!==_)){let Ri=F===_&&rt.id===S;kt.setState(rt,F,Ri)}let Ce=!1;rt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Bo.state.version||te.outputColorSpace!==Ot||nt.isBatchedMesh&&te.batching===!1||!nt.isBatchedMesh&&te.batching===!0||nt.isInstancedMesh&&te.instancing===!1||!nt.isInstancedMesh&&te.instancing===!0||nt.isSkinnedMesh&&te.skinning===!1||!nt.isSkinnedMesh&&te.skinning===!0||nt.isInstancedMesh&&te.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&te.instancingColor===!1&&nt.instanceColor!==null||te.envMap!==Wt||rt.fog===!0&&te.fog!==St||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==kt.numPlanes||te.numIntersection!==kt.numIntersection)||te.vertexAlphas!==Jt||te.vertexTangents!==Xt||te.morphTargets!==Kt||te.morphNormals!==Ie||te.morphColors!==xi||te.toneMapping!==qe||At.isWebGL2===!0&&te.morphTargetsCount!==Te)&&(Ce=!0):(Ce=!0,te.__version=rt.version);let On=te.currentProgram;Ce===!0&&(On=Ga(rt,$,nt));let Ml=!1,sa=!1,Ho=!1,$e=On.getUniforms(),Bn=te.uniforms;if(bt.useProgram(On.program)&&(Ml=!0,sa=!0,Ho=!0),rt.id!==S&&(S=rt.id,sa=!0),Ml||_!==F){$e.setValue(Q,"projectionMatrix",F.projectionMatrix),$e.setValue(Q,"viewMatrix",F.matrixWorldInverse);let Ri=$e.map.cameraPosition;Ri!==void 0&&Ri.setValue(Q,ot.setFromMatrixPosition(F.matrixWorld)),At.logarithmicDepthBuffer&&$e.setValue(Q,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&$e.setValue(Q,"isOrthographic",F.isOrthographicCamera===!0),_!==F&&(_=F,sa=!0,Ho=!0)}if(nt.isSkinnedMesh){$e.setOptional(Q,nt,"bindMatrix"),$e.setOptional(Q,nt,"bindMatrixInverse");let Ri=nt.skeleton;Ri&&(At.floatVertexTextures?(Ri.boneTexture===null&&Ri.computeBoneTexture(),$e.setValue(Q,"boneTexture",Ri.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}nt.isBatchedMesh&&($e.setOptional(Q,nt,"batchingTexture"),$e.setValue(Q,"batchingTexture",nt._matricesTexture,L));let Vo=at.morphAttributes;if((Vo.position!==void 0||Vo.normal!==void 0||Vo.color!==void 0&&At.isWebGL2===!0)&&Yt.update(nt,at,On),(sa||te.receiveShadow!==nt.receiveShadow)&&(te.receiveShadow=nt.receiveShadow,$e.setValue(Q,"receiveShadow",nt.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Bn.envMap.value=Wt,Bn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),sa&&($e.setValue(Q,"toneMappingExposure",v.toneMappingExposure),te.needsLights&&mf(Bn,Ho),St&&rt.fog===!0&&q.refreshFogUniforms(Bn,St),q.refreshMaterialUniforms(Bn,rt,U,O,tt),ks.upload(Q,_l(te),Bn,L)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(ks.upload(Q,_l(te),Bn,L),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&$e.setValue(Q,"center",nt.center),$e.setValue(Q,"modelViewMatrix",nt.modelViewMatrix),$e.setValue(Q,"normalMatrix",nt.normalMatrix),$e.setValue(Q,"modelMatrix",nt.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){let Ri=rt.uniformsGroups;for(let Go=0,bf=Ri.length;Go<bf;Go++)if(At.isWebGL2){let El=Ri[Go];oe.update(El,On),oe.bind(El,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function mf(F,$){F.ambientLightColor.needsUpdate=$,F.lightProbe.needsUpdate=$,F.directionalLights.needsUpdate=$,F.directionalLightShadows.needsUpdate=$,F.pointLights.needsUpdate=$,F.pointLightShadows.needsUpdate=$,F.spotLights.needsUpdate=$,F.spotLightShadows.needsUpdate=$,F.rectAreaLights.needsUpdate=$,F.hemisphereLights.needsUpdate=$}function gf(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(F,$,at){Ct.get(F.texture).__webglTexture=$,Ct.get(F.depthTexture).__webglTexture=at;let rt=Ct.get(F);rt.__hasExternalTextures=!0,rt.__hasExternalTextures&&(rt.__autoAllocateDepthBuffer=at===void 0,rt.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,$){let at=Ct.get(F);at.__webglFramebuffer=$,at.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(F,$=0,at=0){T=F,R=$,y=at;let rt=!0,nt=null,St=!1,It=!1;if(F){let Wt=Ct.get(F);Wt.__useDefaultFramebuffer!==void 0?(bt.bindFramebuffer(Q.FRAMEBUFFER,null),rt=!1):Wt.__webglFramebuffer===void 0?L.setupRenderTarget(F):Wt.__hasExternalTextures&&L.rebindTextures(F,Ct.get(F.texture).__webglTexture,Ct.get(F.depthTexture).__webglTexture);let Jt=F.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(It=!0);let Xt=Ct.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Xt[$])?nt=Xt[$][at]:nt=Xt[$],St=!0):At.isWebGL2&&F.samples>0&&L.useMultisampledRTT(F)===!1?nt=Ct.get(F).__webglMultisampledFramebuffer:Array.isArray(Xt)?nt=Xt[at]:nt=Xt,E.copy(F.viewport),I.copy(F.scissor),W=F.scissorTest}else E.copy(P).multiplyScalar(U).floor(),I.copy(G).multiplyScalar(U).floor(),W=V;if(bt.bindFramebuffer(Q.FRAMEBUFFER,nt)&&At.drawBuffers&&rt&&bt.drawBuffers(F,nt),bt.viewport(E),bt.scissor(I),bt.setScissorTest(W),St){let Wt=Ct.get(F.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+$,Wt.__webglTexture,at)}else if(It){let Wt=Ct.get(F.texture),Jt=$||0;Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Wt.__webglTexture,at||0,Jt)}S=-1},this.readRenderTargetPixels=function(F,$,at,rt,nt,St,It){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Ct.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&It!==void 0&&(Ot=Ot[It]),Ot){bt.bindFramebuffer(Q.FRAMEBUFFER,Ot);try{let Wt=F.texture,Jt=Wt.format,Xt=Wt.type;if(Jt!==de&&Pt.convert(Jt)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Kt=Xt===pn&&(xt.has("EXT_color_buffer_half_float")||At.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Xt!==Ne&&Pt.convert(Xt)!==Q.getParameter(Q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xt===dn&&(At.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=F.width-rt&&at>=0&&at<=F.height-nt&&Q.readPixels($,at,rt,nt,Pt.convert(Jt),Pt.convert(Xt),St)}finally{let Wt=T!==null?Ct.get(T).__webglFramebuffer:null;bt.bindFramebuffer(Q.FRAMEBUFFER,Wt)}}},this.copyFramebufferToTexture=function(F,$,at=0){let rt=Math.pow(2,-at),nt=Math.floor($.image.width*rt),St=Math.floor($.image.height*rt);L.setTexture2D($,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,at,0,0,F.x,F.y,nt,St),bt.unbindTexture()},this.copyTextureToTexture=function(F,$,at,rt=0){let nt=$.image.width,St=$.image.height,It=Pt.convert(at.format),Ot=Pt.convert(at.type);L.setTexture2D(at,0),Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,at.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,at.unpackAlignment),$.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,rt,F.x,F.y,nt,St,It,Ot,$.image.data):$.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,rt,F.x,F.y,$.mipmaps[0].width,$.mipmaps[0].height,It,$.mipmaps[0].data):Q.texSubImage2D(Q.TEXTURE_2D,rt,F.x,F.y,It,Ot,$.image),rt===0&&at.generateMipmaps&&Q.generateMipmap(Q.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(F,$,at,rt,nt=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let St=F.max.x-F.min.x+1,It=F.max.y-F.min.y+1,Ot=F.max.z-F.min.z+1,Wt=Pt.convert(rt.format),Jt=Pt.convert(rt.type),Xt;if(rt.isData3DTexture)L.setTexture3D(rt,0),Xt=Q.TEXTURE_3D;else if(rt.isDataArrayTexture||rt.isCompressedArrayTexture)L.setTexture2DArray(rt,0),Xt=Q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,rt.flipY),Q.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),Q.pixelStorei(Q.UNPACK_ALIGNMENT,rt.unpackAlignment);let Kt=Q.getParameter(Q.UNPACK_ROW_LENGTH),Ie=Q.getParameter(Q.UNPACK_IMAGE_HEIGHT),xi=Q.getParameter(Q.UNPACK_SKIP_PIXELS),qe=Q.getParameter(Q.UNPACK_SKIP_ROWS),nn=Q.getParameter(Q.UNPACK_SKIP_IMAGES),Te=at.isCompressedTexture?at.mipmaps[nt]:at.image;Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Te.width),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Te.height),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,F.min.x),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,F.min.y),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,F.min.z),at.isDataTexture||at.isData3DTexture?Q.texSubImage3D(Xt,nt,$.x,$.y,$.z,St,It,Ot,Wt,Jt,Te.data):at.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(Xt,nt,$.x,$.y,$.z,St,It,Ot,Wt,Te.data)):Q.texSubImage3D(Xt,nt,$.x,$.y,$.z,St,It,Ot,Wt,Jt,Te),Q.pixelStorei(Q.UNPACK_ROW_LENGTH,Kt),Q.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ie),Q.pixelStorei(Q.UNPACK_SKIP_PIXELS,xi),Q.pixelStorei(Q.UNPACK_SKIP_ROWS,qe),Q.pixelStorei(Q.UNPACK_SKIP_IMAGES,nn),nt===0&&rt.generateMipmaps&&Q.generateMipmap(Xt),bt.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?L.setTextureCube(F,0):F.isData3DTexture?L.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?L.setTexture2DArray(F,0):L.setTexture2D(F,0),bt.unbindTexture()},this.resetState=function(){R=0,y=0,T=null,bt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===yc?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===$r?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?Qn:Td}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Qn?fe:ke}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},jh=class extends Sa{};jh.prototype.isWebGL1Renderer=!0;var Li=class extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},qs=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},oi=new M,$n=class a{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)oi.fromBufferAttribute(this,e),oi.applyMatrix4(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)oi.fromBufferAttribute(this,e),oi.applyNormalMatrix(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)oi.fromBufferAttribute(this,e),oi.transformDirection(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ji(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ji(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ji(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ji(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Bt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new a(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Aa=class extends mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},As,ca=new M,Rs=new M,Cs=new M,Ps=new mt,la=new mt,Ud=new Rt,dr=new M,ua=new M,fr=new M,qu=new mt,vh=new mt,Xu=new mt,zr=class extends Ae{constructor(t=new Aa){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new he;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qs(e,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new $n(i,3,0,!1)),As.setAttribute("uv",new $n(i,2,3,!1))}this.geometry=As,this.material=t,this.center=new mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),Ud.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let r=this.center;pr(dr.set(-.5,-.5,0),Cs,r,Rs,n,s),pr(ua.set(.5,-.5,0),Cs,r,Rs,n,s),pr(fr.set(.5,.5,0),Cs,r,Rs,n,s),qu.set(0,0),vh.set(1,0),Xu.set(1,1);let o=t.ray.intersectTriangle(dr,ua,fr,!1,ca);if(o===null&&(pr(ua.set(-.5,.5,0),Cs,r,Rs,n,s),vh.set(0,1),o=t.ray.intersectTriangle(dr,fr,ua,!1,ca),o===null))return;let h=t.ray.origin.distanceTo(ca);h<t.near||h>t.far||e.push({distance:h,point:ca.clone(),uv:jn.getInterpolation(ca,dr,ua,fr,qu,vh,Xu,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pr(a,t,e,i,n,s){Ps.subVectors(a,e).addScalar(.5).multiply(i),n!==void 0?(la.x=s*Ps.x-n*Ps.y,la.y=n*Ps.x+s*Ps.y):la.copy(Ps),a.copy(t),a.x+=la.x,a.y+=la.y,a.applyMatrix4(Ud)}var ju=new M,Yu=new ie,Ku=new ie,yv=new M,Qu=new Rt,mr=new M,xh=new Mi,Zu=new Rt,yh=new Hs,ts=class extends ut{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pl,this.bindMatrix=new Rt,this.bindMatrixInverse=new Rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pi),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,mr),this.boundingBox.expandByPoint(mr)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,mr),this.boundingSphere.expandByPoint(mr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xh.copy(this.boundingSphere),xh.applyMatrix4(n),t.ray.intersectsSphere(xh)!==!1&&(Zu.copy(n).invert(),yh.copy(t.ray).applyMatrix4(Zu),!(this.boundingBox!==null&&yh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,yh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ie,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Pl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;Yu.fromBufferAttribute(n.attributes.skinIndex,t),Ku.fromBufferAttribute(n.attributes.skinWeight,t),ju.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let r=Ku.getComponent(s);if(r!==0){let o=Yu.getComponent(s);Qu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(yv.copy(ju).applyMatrix4(Qu),r)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},es=class extends Ae{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ti=class extends Ze{constructor(t=null,e=1,i=1,n,s,r,o,h,c=Pe,l=Pe,u,d){super(null,r,o,h,c,l,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ju=new Rt,_v=new Rt,Xs=class a{constructor(t=[],e=[]){this.uuid=Oi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Rt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Rt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,r=t.length;s<r;s++){let o=t[s]?t[s].matrixWorld:_v;Ju.multiplyMatrices(o,e[s]),Ju.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new a(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Ti(e,t,t,de,dn);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let s=t.bones[i],r=e[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new es),this.bones.push(r),this.boneInverses.push(new Rt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){let r=e[n];t.bones.push(r.uuid);let o=i[n];t.boneInverses.push(o.toArray())}return t}},Je=class extends Bt{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ls=new Rt,$u=new Rt,gr=[],td=new Pi,wv=new Rt,da=new ut,fa=new Mi,Ur=class extends ut{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Je(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,wv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ls),td.copy(t.boundingBox).applyMatrix4(Ls),this.boundingBox.union(td)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ls),fa.copy(t.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(fa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(da.geometry=this.geometry,da.material=this.material,da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(i),t.ray.intersectsSphere(fa)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Ls),$u.multiplyMatrices(i,Ls),da.matrixWorld=$u,da.raycast(t,gr);for(let r=0,o=gr.length;r<o;r++){let h=gr[r];h.instanceId=s,h.object=this,e.push(h)}gr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Je(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ra=class extends mi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ed=new M,id=new M,nd=new Rt,_h=new Hs,br=new Mi,js=class extends Ae{constructor(t=new he,e=new Ra){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)ed.fromBufferAttribute(e,n-1),id.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ed.distanceTo(id);t.setAttribute("lineDistance",new re(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(n),br.radius+=s,t.ray.intersectsSphere(br)===!1)return;nd.copy(n).invert(),_h.copy(t.ray).applyMatrix4(nd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=new M,l=new M,u=new M,d=new M,f=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){let p=Math.max(0,r.start),x=Math.min(m.count,r.start+r.count);for(let v=p,w=x-1;v<w;v+=f){let R=m.getX(v),y=m.getX(v+1);if(c.fromBufferAttribute(g,R),l.fromBufferAttribute(g,y),_h.distanceSqToSegment(c,l,d,u)>h)continue;d.applyMatrix4(this.matrixWorld);let S=t.ray.origin.distanceTo(d);S<t.near||S>t.far||e.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,r.start),x=Math.min(g.count,r.start+r.count);for(let v=p,w=x-1;v<w;v+=f){if(c.fromBufferAttribute(g,v),l.fromBufferAttribute(g,v+1),_h.distanceSqToSegment(c,l,d,u)>h)continue;d.applyMatrix4(this.matrixWorld);let y=t.ray.origin.distanceTo(d);y<t.near||y>t.far||e.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},sd=new M,ad=new M,Nr=class extends js{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)sd.fromBufferAttribute(e,n),ad.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+sd.distanceTo(ad);t.setAttribute("lineDistance",new re(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Or=class extends js{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ca=class extends mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rd=new Rt,Yh=new Hs,vr=new Mi,xr=new M,Ys=class extends Ae{constructor(t=new he,e=new Ca){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(n),vr.radius+=s,t.ray.intersectsSphere(vr)===!1)return;rd.copy(n).invert(),Yh.copy(t.ray).applyMatrix4(rd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=d,b=f;m<b;m++){let g=c.getX(m);xr.fromBufferAttribute(u,g),od(xr,g,h,n,t,e,this)}}else{let d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,b=f;m<b;m++)xr.fromBufferAttribute(u,m),od(xr,m,h,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function od(a,t,e,i,n,s,r){let o=Yh.distanceSqToPoint(a);if(o<e){let h=new M;Yh.closestPointToPoint(a,h),h.applyMatrix4(i);let c=n.ray.origin.distanceTo(h);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,object:r})}}var Bi=class extends Ze{constructor(t,e,i,n,s,r,o,h,c){super(t,e,i,n,s,r,o,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,r;e?r=e:r=t*i[s-1];let o=0,h=s-1,c;for(;o<=h;)if(n=Math.floor(o+(h-o)/2),c=i[n]-r,c<0)o=n+1;else if(c>0)h=n-1;else{h=n;break}if(n=h,i[n]===r)return n/(s-1);let l=i[n],d=i[n+1]-l,f=(r-l)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let r=this.getPoint(n),o=this.getPoint(s),h=e||(r.isVector2?new mt:new M);return h.copy(o).sub(r).normalize(),h}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new M,n=[],s=[],r=[],o=new M,h=new Rt;for(let f=0;f<=t;f++){let m=f/t;n[f]=this.getTangentAt(m,new M)}s[0]=new M,r[0]=new M;let c=Number.MAX_VALUE,l=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);l<=c&&(c=l,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),r[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Oe(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(h.makeRotationAxis(o,m))}r[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Oe(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(h.makeRotationAxis(n[m],f*m)),r[m].crossVectors(n[m],s[m])}return{tangents:n,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Pa=class extends Fi{constructor(t=0,e=0,i=1,n=1,s=0,r=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=h}getPoint(t,e){let i=e||new mt,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(r?s=0:s=n),this.aClockwise===!0&&!r&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,h=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=h-this.aX,f=c-this.aY;h=d*l-f*u+this.aX,c=d*u+f*l+this.aY}return i.set(h,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Kh=class extends Pa{constructor(t,e,i,n,s,r){super(t,e,i,i,n,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Mc(){let a=0,t=0,e=0,i=0;function n(s,r,o,h){a=s,t=o,e=-3*s+3*r-2*o-h,i=2*s-2*r+o+h}return{initCatmullRom:function(s,r,o,h,c){n(r,o,c*(o-s),c*(h-r))},initNonuniformCatmullRom:function(s,r,o,h,c,l,u){let d=(r-s)/c-(o-s)/(c+l)+(o-r)/l,f=(o-r)/l-(h-r)/(l+u)+(h-o)/u;d*=l,f*=l,n(r,o,d,f)},calc:function(s){let r=s*s,o=r*s;return a+t*s+e*r+i*o}}}var yr=new M,wh=new Mc,Mh=new Mc,Eh=new Mc,Qh=class extends Fi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new M){let i=e,n=this.points,s=n.length,r=(s-(this.closed?0:1))*t,o=Math.floor(r),h=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:h===0&&o===s-1&&(o=s-2,h=1);let c,l;this.closed||o>0?c=n[(o-1)%s]:(yr.subVectors(n[0],n[1]).add(n[0]),c=yr);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?l=n[(o+2)%s]:(yr.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=yr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(l),f);b<1e-4&&(b=1),m<1e-4&&(m=b),g<1e-4&&(g=b),wh.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,m,b,g),Mh.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,m,b,g),Eh.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,m,b,g)}else this.curveType==="catmullrom"&&(wh.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Mh.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Eh.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return i.set(wh.calc(h),Mh.calc(h),Eh.calc(h)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new M().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function hd(a,t,e,i,n){let s=(i-t)*.5,r=(n-e)*.5,o=a*a,h=a*o;return(2*e-2*i+s+r)*h+(-3*e+3*i-2*s-r)*o+s*a+e}function Mv(a,t){let e=1-a;return e*e*t}function Ev(a,t){return 2*(1-a)*a*t}function Tv(a,t){return a*a*t}function ya(a,t,e,i){return Mv(a,t)+Ev(a,e)+Tv(a,i)}function Sv(a,t){let e=1-a;return e*e*e*t}function Av(a,t){let e=1-a;return 3*e*e*a*t}function Rv(a,t){return 3*(1-a)*a*a*t}function Cv(a,t){return a*a*a*t}function _a(a,t,e,i,n){return Sv(a,t)+Av(a,e)+Rv(a,i)+Cv(a,n)}var Br=class extends Fi{constructor(t=new mt,e=new mt,i=new mt,n=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new mt){let i=e,n=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(_a(t,n.x,s.x,r.x,o.x),_a(t,n.y,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zh=class extends Fi{constructor(t=new M,e=new M,i=new M,n=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new M){let i=e,n=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(_a(t,n.x,s.x,r.x,o.x),_a(t,n.y,s.y,r.y,o.y),_a(t,n.z,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hr=class extends Fi{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jh=class extends Fi{constructor(t=new M,e=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new M){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new M){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vr=class extends Fi{constructor(t=new mt,e=new mt,i=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new mt){let i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(ya(t,n.x,s.x,r.x),ya(t,n.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$h=class extends Fi{constructor(t=new M,e=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new M){let i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(ya(t,n.x,s.x,r.x),ya(t,n.y,s.y,r.y),ya(t,n.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends Fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let i=e,n=this.points,s=(n.length-1)*t,r=Math.floor(s),o=s-r,h=n[r===0?r:r-1],c=n[r],l=n[r>n.length-2?n.length-1:r+1],u=n[r>n.length-3?n.length-1:r+2];return i.set(hd(o,h.x,c.x,l.x,u.x),hd(o,h.y,c.y,l.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new mt().fromArray(n))}return this}},cd=Object.freeze({__proto__:null,ArcCurve:Kh,CatmullRomCurve3:Qh,CubicBezierCurve:Br,CubicBezierCurve3:Zh,EllipseCurve:Pa,LineCurve:Hr,LineCurve3:Jh,QuadraticBezierCurve:Vr,QuadraticBezierCurve3:$h,SplineCurve:Gr}),tc=class extends Fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cd[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let r=n[s]-i,o=this.curves[s],h=o.getLength(),c=h===0?0:1-r/h;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let r=s[n],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,h=r.getPoints(o);for(let c=0;c<h.length;c++){let l=h[c];i&&i.equals(l)||(e.push(l),i=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new cd[n.type]().fromJSON(n))}return this}},ec=class extends tc{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Hr(this.currentPoint.clone(),new mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Vr(this.currentPoint.clone(),new mt(t,e),new mt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,r){let o=new Br(this.currentPoint.clone(),new mt(t,e),new mt(i,n),new mt(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Gr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,r){let o=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+o,e+h,i,n,s,r),this}absarc(t,e,i,n,s,r){return this.absellipse(t,e,i,i,n,s,r),this}ellipse(t,e,i,n,s,r,o,h){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,i,n,s,r,o,h),this}absellipse(t,e,i,n,s,r,o,h){let c=new Pa(t,e,i,n,s,r,o,h);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ks=class a extends he{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Oe(n,0,Math.PI*2);let s=[],r=[],o=[],h=[],c=[],l=1/e,u=new M,d=new mt,f=new M,m=new M,b=new M,g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,b.copy(f),f.normalize(),h.push(f.x,f.y,f.z);break;case t.length-1:h.push(b.x,b.y,b.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),h.push(f.x,f.y,f.z),b.copy(m)}for(let x=0;x<=e;x++){let v=i+x*l*n,w=Math.sin(v),R=Math.cos(v);for(let y=0;y<=t.length-1;y++){u.x=t[y].x*w,u.y=t[y].y,u.z=t[y].x*R,r.push(u.x,u.y,u.z),d.x=x/e,d.y=y/(t.length-1),o.push(d.x,d.y);let T=h[3*y+0]*w,S=h[3*y+1],_=h[3*y+0]*R;c.push(T,S,_)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){let w=v+x*t.length,R=w,y=w+t.length,T=w+t.length+1,S=w+1;s.push(R,y,S),s.push(T,S,y)}this.setIndex(s),this.setAttribute("position",new re(r,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.points,t.segments,t.phiStart,t.phiLength)}},mn=class a extends Ks{constructor(t=1,e=1,i=4,n=8){let s=new ec;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new a(t.radius,t.length,t.capSegments,t.radialSegments)}},Qs=class a extends he{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],r=[],o=[],h=[],c=new M,l=new mt;r.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(r[d]/t+1)/2,l.y=(r[d+1]/t+1)/2,h.push(l.x,l.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pe=class a extends he{constructor(t=1,e=1,i=1,n=32,s=1,r=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:h};let c=this;n=Math.floor(n),s=Math.floor(s);let l=[],u=[],d=[],f=[],m=0,b=[],g=i/2,p=0;x(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(l),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function x(){let w=new M,R=new M,y=0,T=(e-t)/i;for(let S=0;S<=s;S++){let _=[],E=S/s,I=E*(e-t)+t;for(let W=0;W<=n;W++){let Y=W/n,k=Y*h+o,z=Math.sin(k),O=Math.cos(k);R.x=I*z,R.y=-E*i+g,R.z=I*O,u.push(R.x,R.y,R.z),w.set(z,T,O).normalize(),d.push(w.x,w.y,w.z),f.push(Y,1-E),_.push(m++)}b.push(_)}for(let S=0;S<n;S++)for(let _=0;_<s;_++){let E=b[_][S],I=b[_+1][S],W=b[_+1][S+1],Y=b[_][S+1];l.push(E,I,Y),l.push(I,W,Y),y+=6}c.addGroup(p,y,0),p+=y}function v(w){let R=m,y=new mt,T=new M,S=0,_=w===!0?t:e,E=w===!0?1:-1;for(let W=1;W<=n;W++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),m++;let I=m;for(let W=0;W<=n;W++){let k=W/n*h+o,z=Math.cos(k),O=Math.sin(k);T.x=_*O,T.y=g*E,T.z=_*z,u.push(T.x,T.y,T.z),d.push(0,E,0),y.x=z*.5+.5,y.y=O*.5*E+.5,f.push(y.x,y.y),m++}for(let W=0;W<n;W++){let Y=R+W,k=I+W;w===!0?l.push(k,k+1,Y):l.push(k+1,k,Y),S+=3}c.addGroup(p,S,w===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ic=class a extends he{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],r=[];o(n),c(i),l(),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(s.slice(),3)),this.setAttribute("uv",new re(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let v=new M,w=new M,R=new M;for(let y=0;y<e.length;y+=3)f(e[y+0],v),f(e[y+1],w),f(e[y+2],R),h(v,w,R,x)}function h(x,v,w,R){let y=R+1,T=[];for(let S=0;S<=y;S++){T[S]=[];let _=x.clone().lerp(w,S/y),E=v.clone().lerp(w,S/y),I=y-S;for(let W=0;W<=I;W++)W===0&&S===y?T[S][W]=_:T[S][W]=_.clone().lerp(E,W/I)}for(let S=0;S<y;S++)for(let _=0;_<2*(y-S)-1;_++){let E=Math.floor(_/2);_%2===0?(d(T[S][E+1]),d(T[S+1][E]),d(T[S][E])):(d(T[S][E+1]),d(T[S+1][E+1]),d(T[S+1][E]))}}function c(x){let v=new M;for(let w=0;w<s.length;w+=3)v.x=s[w+0],v.y=s[w+1],v.z=s[w+2],v.normalize().multiplyScalar(x),s[w+0]=v.x,s[w+1]=v.y,s[w+2]=v.z}function l(){let x=new M;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];let w=g(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;r.push(w,1-R)}m(),u()}function u(){for(let x=0;x<r.length;x+=6){let v=r[x+0],w=r[x+2],R=r[x+4],y=Math.max(v,w,R),T=Math.min(v,w,R);y>.9&&T<.1&&(v<.2&&(r[x+0]+=1),w<.2&&(r[x+2]+=1),R<.2&&(r[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,v){let w=x*3;v.x=t[w+0],v.y=t[w+1],v.z=t[w+2]}function m(){let x=new M,v=new M,w=new M,R=new M,y=new mt,T=new mt,S=new mt;for(let _=0,E=0;_<s.length;_+=9,E+=6){x.set(s[_+0],s[_+1],s[_+2]),v.set(s[_+3],s[_+4],s[_+5]),w.set(s[_+6],s[_+7],s[_+8]),y.set(r[E+0],r[E+1]),T.set(r[E+2],r[E+3]),S.set(r[E+4],r[E+5]),R.copy(x).add(v).add(w).divideScalar(3);let I=g(R);b(y,E+0,x,I),b(T,E+2,v,I),b(S,E+4,w,I)}}function b(x,v,w,R){R<0&&x.x===1&&(r[v]=x.x-1),w.x===0&&w.z===0&&(r[v]=R/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.vertices,t.indices,t.radius,t.details)}};var Wr=class a extends ic{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new a(t.radius,t.detail)}};var Qi=class a extends he{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let h=Math.min(r+o,Math.PI),c=0,l=[],u=new M,d=new M,f=[],m=[],b=[],g=[];for(let p=0;p<=i;p++){let x=[],v=p/i,w=0;p===0&&r===0?w=.5/e:p===i&&h===Math.PI&&(w=-.5/e);for(let R=0;R<=e;R++){let y=R/e;u.x=-t*Math.cos(n+y*s)*Math.sin(r+v*o),u.y=t*Math.cos(r+v*o),u.z=t*Math.sin(n+y*s)*Math.sin(r+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(y+w,1-v),x.push(c++)}l.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){let v=l[p][x+1],w=l[p][x],R=l[p+1][x],y=l[p+1][x+1];(p!==0||r>0)&&f.push(v,w,y),(p!==i-1||h<Math.PI)&&f.push(w,R,y)}this.setIndex(f),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(b,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gn=class a extends he{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let r=[],o=[],h=[],c=[],l=new M,u=new M,d=new M;for(let f=0;f<=i;f++)for(let m=0;m<=n;m++){let b=m/n*s,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(b),u.y=(t+e*Math.cos(g))*Math.sin(b),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),l.x=t*Math.cos(b),l.y=t*Math.sin(b),d.subVectors(u,l).normalize(),h.push(d.x,d.y,d.z),c.push(m/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=n;m++){let b=(n+1)*f+m-1,g=(n+1)*(f-1)+m-1,p=(n+1)*(f-1)+m,x=(n+1)*f+m;r.push(b,g,x),r.push(g,p,x)}this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var we=class extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sd,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},bi=class extends we{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function _r(a,t,e){return!a||!e&&a.constructor===t?a:typeof t.BYTES_PER_ELEMENT=="number"?new t(a):Array.prototype.slice.call(a)}function Pv(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Lv(a){function t(n,s){return a[n]-a[s]}let e=a.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function ld(a,t,e){let i=a.length,n=new a.constructor(i);for(let s=0,r=0;r!==i;++s){let o=e[s]*t;for(let h=0;h!==t;++h)n[r++]=a[o+h]}return n}function Nd(a,t,e,i){let n=1,s=a[0];for(;s!==void 0&&s[i]===void 0;)s=a[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(t.push(s.time),e.push.apply(e,r)),s=a[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=a[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(t.push(s.time),e.push(r)),s=a[n++];while(s!==void 0)}var Ln=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let r;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}r=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let h=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(n=s,s=e[--i-1],t>=s)break t}r=i,i=0;break e}break i}for(;i<r;){let o=i+r>>>1;t<e[o]?r=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let r=0;r!==n;++r)e[r]=i[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nc=class extends Ln{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:iu,endingEnd:iu}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,r=t+1,o=n[s],h=n[r];if(o===void 0)switch(this.getSettings_().endingStart){case nu:s=t,o=2*e-i;break;case su:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(h===void 0)switch(this.getSettings_().endingEnd){case nu:r=t,h=2*i-e;break;case su:r=1,h=i+n[1]-n[0];break;default:r=t-1,h=e}let c=(i-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(h-i),this._offsetPrev=s*l,this._offsetNext=r*l}interpolate_(t,e,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-e)/(n-e),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,x=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*b+.5*m,w=f*g-f*b;for(let R=0;R!==o;++R)s[R]=p*r[l+R]+x*r[c+R]+v*r[h+R]+w*r[u+R];return s}},sc=class extends Ln{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,l=(i-e)/(n-e),u=1-l;for(let d=0;d!==o;++d)s[d]=r[c+d]*u+r[h+d]*l;return s}},ac=class extends Ln{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ii=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_r(e,this.TimeBufferType),this.values=_r(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:_r(t.times,Array),values:_r(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new nc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case Zn:e=this.InterpolantFactoryMethodLinear;break;case Ko:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Zn;case this.InterpolantFactoryMethodSmooth:return Ko}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,r=n-1;for(;s!==n&&i[s]<t;)++s;for(;r!==-1&&i[r]>e;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){let h=i[o];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(r!==null&&r>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,h,r),t=!1;break}r=h}if(n!==void 0&&Pv(n))for(let o=0,h=n.length;o!==h;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ko,s=t.length-1,r=1;for(let o=1;o<s;++o){let h=!1,c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==t[0]))if(n)h=!0;else{let u=o*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){let b=e[u+m];if(b!==e[d+m]||b!==e[f+m]){h=!0;break}}}if(h){if(o!==r){t[r]=t[o];let u=o*i,d=r*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++r}}if(s>0){t[r]=t[s];for(let o=s*i,h=r*i,c=0;c!==i;++c)e[h+c]=e[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Zn;var Fn=class extends Ii{};Fn.prototype.ValueTypeName="bool";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=Os;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends Ii{};qr.prototype.ValueTypeName="color";var bn=class extends Ii{};bn.prototype.ValueTypeName="number";var rc=class extends Ln{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,h=(i-e)/(n-e),c=t*o;for(let l=c+o;c!==l;c+=4)yt.slerpFlat(s,0,r,c-o,r,c,h);return s}},Zi=class extends Ii{InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}};Zi.prototype.ValueTypeName="quaternion";Zi.prototype.DefaultInterpolation=Zn;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var In=class extends Ii{};In.prototype.ValueTypeName="string";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=Os;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var vn=class extends Ii{};vn.prototype.ValueTypeName="vector";var Xr=class{constructor(t,e=-1,i,n=np){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=Oi(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],i=t.tracks,n=1/(t.fps||1);for(let r=0,o=i.length;r!==o;++r)e.push(Iv(i[r]).scale(n));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){let e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,r=i.length;s!==r;++s)e.push(Ii.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){let s=e.length,r=[];for(let o=0;o<s;o++){let h=[],c=[];h.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let l=Lv(h);h=ld(h,1,l),c=ld(c,1,l),!n&&h[0]===0&&(h.push(s),c.push(c[0])),r.push(new bn(".morphTargetInfluences["+e[o].name+"]",h,c).scale(1/i))}return new this(t,-1,r)}static findByName(t,e){let i=t;if(!Array.isArray(t)){let n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,h=t.length;o<h;o++){let c=t[o],l=c.name.match(s);if(l&&l.length>1){let u=l[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let r=[];for(let o in n)r.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,m,b){if(f.length!==0){let g=[],p=[];Nd(f,g,p,m),g.length!==0&&b.push(new u(d,g,p))}},n=[],s=t.name||"default",r=t.fps||30,o=t.blendMode,h=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)f[d[m].morphTargets[b]]=-1;for(let b in f){let g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){let v=d[m];g.push(v.time),p.push(v.morphTarget===b?1:0)}n.push(new bn(".morphTargetInfluence["+b+"]",g,p))}h=f.length*r}else{let f=".bones["+e[u].name+"]";i(vn,f+".position",d,"pos",n),i(Zi,f+".quaternion",d,"rot",n),i(vn,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,h,n,o)}resetDuration(){let t=this.tracks,e=0;for(let i=0,n=t.length;i!==n;++i){let s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Fv(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bn;case"vector":case"vector2":case"vector3":case"vector4":return vn;case"color":return qr;case"quaternion":return Zi;case"bool":case"boolean":return Fn;case"string":return In}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Iv(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Fv(a.type);if(a.times===void 0){let e=[],i=[];Nd(a.keys,e,i,"value"),a.times=e,a.values=i}return t.parse!==void 0?t.parse(a):new t(a.name,a.times,a.values,a.interpolation)}var An={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},oc=class{constructor(t,e,i){let n=this,s=!1,r=0,o=0,h,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(l){o++,s===!1&&n.onStart!==void 0&&n.onStart(l,r,o),s=!0},this.itemEnd=function(l){r++,n.onProgress!==void 0&&n.onProgress(l,r,o),r===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(l){n.onError!==void 0&&n.onError(l)},this.resolveURL=function(l){return h?h(l):l},this.setURLModifier=function(l){return h=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){let u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return m}return null}}},Dv=new oc,xn=class{constructor(t){this.manager=t!==void 0?t:Dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xn.DEFAULT_MATERIAL_NAME="__DEFAULT";var cn={},hc=class extends Error{constructor(t,e){super(t),this.response=e}},La=class extends xn{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=An.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(cn[t]!==void 0){cn[t].push({onLoad:e,onProgress:i,onError:n});return}cn[t]=[],cn[t].push({onLoad:e,onProgress:i,onError:n});let r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,h=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let l=cn[t],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:v,value:w})=>{if(v)p.close();else{b+=w.byteLength;let R=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let y=0,T=l.length;y<T;y++){let S=l[y];S.onProgress&&S.onProgress(R)}p.enqueue(w),x()}})}}});return new Response(g)}else throw new hc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(h){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{An.add(t,c);let l=cn[t];delete cn[t];for(let u=0,d=l.length;u<d;u++){let f=l[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let l=cn[t];if(l===void 0)throw this.manager.itemError(t),c;delete cn[t];for(let u=0,d=l.length;u<d;u++){let f=l[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var cc=class extends xn{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,r=An.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;let o=Ea("img");function h(){l(),An.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){l(),n&&n(u),s.manager.itemError(t),s.manager.itemEnd(t)}function l(){o.removeEventListener("load",h,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}};var jr=class extends xn{constructor(t){super(t)}load(t,e,i,n){let s=new Ze,r=new cc(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}},Fa=class extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Th=new Rt,ud=new M,dd=new M,Ia=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;ud.setFromMatrixPosition(t.matrixWorld),e.position.copy(ud),dd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dd),e.updateMatrixWorld(),Th.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Th)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},lc=class extends Ia{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Bs*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Dn=class extends Fa{constructor(t,e,i=0,n=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=i,this.angle=n,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new lc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},fd=new Rt,pa=new M,Sh=new M,uc=class extends Ia{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),pa.setFromMatrixPosition(t.matrixWorld),i.position.copy(pa),Sh.copy(i.position),Sh.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Sh),i.updateMatrixWorld(),n.makeTranslation(-pa.x,-pa.y,-pa.z),fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd)}},Yr=class extends Fa{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new uc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},dc=class extends Ia{constructor(){super(new gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},is=class extends Fa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new dc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var kn=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,n=t.length;i<n;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Ji=class extends he{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Kr=class extends xn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,r=An.get(t);if(r!==void 0){if(s.manager.itemStart(t),r.then){r.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let h=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return An.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){n&&n(c),An.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});An.add(t,h),s.manager.itemStart(t)}};var Ec="\\[\\]\\.:\\/",kv=new RegExp("["+Ec+"]","g"),Tc="[^"+Ec+"]",zv="[^"+Ec.replace("\\.","")+"]",Uv=/((?:WC+[\/:])*)/.source.replace("WC",Tc),Nv=/(WCOD+)?/.source.replace("WCOD",zv),Ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),Bv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),Hv=new RegExp("^"+Uv+Nv+Ov+Bv+"$"),Vv=["material","materials","bones","map"],fc=class{constructor(t,e,i){let n=i||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ve=class a{constructor(t,e,i){this.path=e,this.parsedPath=i||a.parseTrackName(e),this.node=a.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new a.Composite(t,e,i):new a(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kv,"")}static parseTrackName(t){let e=Hv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Vv.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===e||o.uuid===e)return o;let h=i(o.children);if(h)return h}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=a.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[n];if(r===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}h=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(h=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=fc;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pc);function ci(a){let t=a>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Si=(a,t,e)=>a<t?t:a>e?e:a,ft=a=>a<0?0:a>1?1:a,lt=(a,t,e)=>a+(t-a)*e;function ze(a,t,e){let i=ft((e-a)/(t-a));return i*i*(3-2*i)}function ni(a,t=0){let e=Math.floor(a),i=a-e,n=r=>{let o=Math.sin((r+t*57.13)*127.1)*43758.5453;return o-Math.floor(o)},s=i*i*(3-2*i);return n(e)*(1-s)+n(e+1)*s}var ye=24,vi=2,Gv=9.81,Sc=Math.PI*2,Wv=[[300,3,.8,.3,0],[236,3.2,.8,.3,0],[187,3,.8,.34,0],[151,2.6,.8,.34,0],[122,2.1,.78,.38,0],[99,1.6,.78,.38,0],[78,1.05,.64,.7,1],[63,.9,.64,.7,1],[50,.75,.64,.75,1],[40,.6,.62,.75,1],[31,.48,.62,.8,1],[24.5,.38,.6,.8,1],[19,.3,.6,.85,1],[15,.235,.58,.85,1],[12.1,.17,.5,1.15,2],[9.3,.13,.5,1.15,2],[7.1,.1,.48,1.2,2],[5.4,.077,.48,1.2,2],[4.1,.058,.46,1.25,2],[3.2,.045,.46,1.25,2],[2.5,.035,.44,1.3,2],[1.9,.027,.44,1.3,2],[1.5,.021,.42,1.35,2],[1.15,.016,.42,1.35,2]],Ac=class{constructor(){this.active=!1,this.ox=0,this.oz=0,this.dx=1,this.dz=0,this.speed=14,this.width=150,this.hMax=12,this.t0=0,this.tBreak=14,this.age=0,this.s=0,this.height=0,this.front=14,this.frontMin=8.5,this.seed=0,this.mega=!1,this.back=55,this.curl=0,this.brk=0,this.turb=0,this.roll=0}},eo=class{constructor(t=20261112){this.time=0,this.storm=1,this.windAngle=0;let e=ci(t);this.dirX=new Float64Array(ye),this.dirZ=new Float64Array(ye),this.k=new Float64Array(ye),this.omega=new Float64Array(ye),this.phase0=new Float64Array(ye),this.amp0=new Float64Array(ye),this.amp=new Float64Array(ye),this.steep=new Float64Array(ye),this.len=new Float64Array(ye),this.band=new Uint8Array(ye),this.phT=new Float64Array(ye),this.bodyW=new Float64Array(ye);for(let i=0;i<ye;i++){let[n,s,r,o,h]=Wv[i],c=1+(e()-.5)*.06,l=n*c,u=i%2===0?1:-1,d=this.windAngle+u*o*(.25+.75*e());this.dirX[i]=Math.cos(d),this.dirZ[i]=Math.sin(d),this.len[i]=l,this.k[i]=Sc/l,this.omega[i]=Math.sqrt(Gv*this.k[i]),this.phase0[i]=e()*Sc,this.amp0[i]=s*(.9+e()*.2),this.steep[i]=r,this.band[i]=h,this.bodyW[i]=1/(1+Math.pow(this.k[i]*.95,2))}this.uA=new Float32Array(ye*4),this.uB=new Float32Array(ye*4),this.breakers=[];for(let i=0;i<vi;i++)this.breakers.push(new Ac);this.uBrkA=new Float32Array(vi*4),this.uBrkB=new Float32Array(vi*4),this.uBrkC=new Float32Array(vi*4),this.sigHeight=0,this.setStorm(1),this.update(0)}setStorm(t){this.storm=ft(t);let e=0,i=1+.2*Math.sin(this.time*.105)*Math.sin(this.time*.041+1.3);for(let n=0;n<ye;n++){let s=this.band[n],r=s===0?lt(.3,1,this.storm):s===1?lt(.22,1,this.storm):lt(.4,1,this.storm);this.amp[n]=this.amp0[n]*r*(s<2?i:1),e+=this.amp[n]*this.amp[n]*.5}this.sigHeight=4*Math.sqrt(e)}update(t){this.time+=t;let e=this.time;for(let i=0;i<ye;i++){this.phT[i]=(this.omega[i]*e+this.phase0[i])%Sc;let n=i*4;this.uA[n]=this.dirX[i],this.uA[n+1]=this.dirZ[i],this.uA[n+2]=this.k[i],this.uA[n+3]=this.amp[i],this.uB[n]=this.phT[i],this.uB[n+1]=this.steep[i],this.uB[n+2]=this.len[i],this.uB[n+3]=0}for(let i=0;i<vi;i++){let n=this.breakers[i],s=i*4;if(n.active){n.age=e-n.t0,n.s=n.speed*n.age;let o=ze(0,n.tBreak*.85,n.age),h=n.age-n.tBreak;n.brk=ft(h/1.6);let c=h>0?Math.exp(-h/(n.mega?5:3)):1;n.height=n.hMax*o*(.16+.84*c),n.front=lt(26,n.frontMin,ze(.3,1,o)),n.curl=ze(-2.2,.3,h)*(h>0?Math.exp(-h/2.2):1),n.turb=h>0?Math.min(1,h/1)*Math.exp(-Math.max(0,h-2.5)/(n.mega?8:5)):0,n.roll=h>0?n.brk*Math.exp(-h/(n.mega?5.5:3.2)):0,h>(n.mega?30:20)&&(n.active=!1)}let r=n.active?1:0;this.uBrkA[s]=n.ox,this.uBrkA[s+1]=n.oz,this.uBrkA[s+2]=n.dx,this.uBrkA[s+3]=n.dz,this.uBrkB[s]=n.s,this.uBrkB[s+1]=n.height*r,this.uBrkB[s+2]=n.front,this.uBrkB[s+3]=n.back,this.uBrkC[s]=n.width,this.uBrkC[s+1]=n.curl*r,this.uBrkC[s+2]=n.brk*r,this.uBrkC[s+3]=n.turb*r}}spawnBreaker(t,e,i={}){let n=this.breakers.find(o=>!o.active);if(!n)return null;let s=this.windAngle+(i.angleOffset||0);n.dx=Math.cos(s),n.dz=Math.sin(s),n.speed=i.speed||14;let r=i.lead||15;return n.ox=t-n.dx*n.speed*r,n.oz=e-n.dz*n.speed*r,n.seed=n.ox*.013+n.oz*.017,n.width=i.width||150,n.hMax=i.height||12,n.back=i.back||55,n.frontMin=i.frontMin||8.5,n.mega=!!i.mega,n.t0=this.time,n.tBreak=r+(i.breakOffset!==void 0?i.breakOffset:-1.2),n.age=0,n.active=!0,n.s=0,n.height=0,n.curl=0,n.brk=0,n.turb=0,n.roll=0,n}_breakerHeight(t,e,i){let n=e-t.ox,s=i-t.oz,r=n*t.dx+s*t.dz,o=-n*t.dz+s*t.dx,h=.16*Math.sin(o*.071+t.seed)+.09*Math.sin(o*.193+t.seed*1.7),c=2.6*Math.sin(o*.047+t.seed*.6)+1.2*Math.sin(o*.13+t.seed*2.1),l=r-t.s-c,u=Math.exp(-(o*o)/(t.width*t.width))*(1+h),d=l>0?t.front:t.back,f=Math.exp(-(l*l)/(d*d)),m=(l-2.4*t.front)/(1.7*t.front),b=-.22*Math.exp(-m*m);return this._bu=l,this._benv=u,this._bp=f,this._bsc=d,this._btr=b,this._btu=m,this._bpeel=Math.max(.15,Math.min(1.3,.55+2.5*h)),t.height*u*(f+b)}sample(t,e,i){let n=ye,s=this.dirX,r=this.dirZ,o=this.k,h=this.amp,c=this.steep,l=this.phT,u=this.omega,d=t,f=e;for(let B=0;B<3;B++){let j=0,tt=0;for(let K=0;K<n;K++){let J=o[K]*(s[K]*d+r[K]*f)-l[K],ot=c[K]*h[K]*Math.sin(J);j-=s[K]*ot,tt-=r[K]*ot}d=t-j,f=e-tt}let m=0,b=0,g=0,p=0,x=0,v=0,w=0,R=0,y=0,T=0,S=0,_=0;for(let B=0;B<n;B++){let j=o[B]*(s[B]*d+r[B]*f)-l[B],tt=Math.sin(j),K=Math.cos(j),J=h[B],ot=o[B]*J,it=c[B]*ot,Mt=u[B];m+=J*K,b+=it*s[B]*s[B]*K,g+=it*r[B]*r[B]*K,p+=it*s[B]*r[B]*K,x-=ot*s[B]*tt,v-=ot*r[B]*tt;let Q=c[B]*J*Mt;w+=Q*s[B]*K,y+=Q*r[B]*K,R+=J*Mt*tt;let Nt=Q*Mt;T+=Nt*s[B]*tt,_+=Nt*r[B]*tt,S-=J*Mt*Mt*K}let E=-x*(1-g)-v*p,I=(1-b)*(1-g)-p*p,W=-v*(1-b)-x*p,Y=I,k=0,z=0,O=0,U=0,N=0,D=0,P=0,G=0,V=0;for(let B=0;B<vi;B++){let j=this.breakers[B];if(!j.active||j.height<.01)continue;let tt=this._breakerHeight(j,t,e),K=this._bu,J=this._benv,ot=this._bp,it=this._bsc;if(J<.002)continue;let Mt=-2*K/(it*it)*ot-.22*Math.exp(-this._btu*this._btu)*(-2*this._btu/(1.7*j.front)),Q=j.height*J*Mt;m+=tt,O+=tt,I<.05&&(I=.05);let Nt=1/I;E*=Nt,W*=Nt,I=1,E-=Q*j.dx,W-=Q*j.dz,N+=Math.max(-12,Math.min(14,-j.speed*Q)),G+=j.speed*j.speed*j.height*J*(-2/(it*it)+4*K*K/(it*it*it*it))*ot;let xt=j.speed*(.3*(1-j.brk)+.65*j.curl+.22*j.roll)*J*ot*Math.min(1,j.height/6),At=J*j.curl*Math.exp(-Math.pow((K-.25*j.front)/(1.3*j.front),2))*Math.min(1,j.height/5);if(P=Math.max(P,At),V=Math.max(V,Math.min(j.mega?15:12,3.5+.6*j.hMax)*At*ze(-.7,.5,j.age-j.tBreak)),j.mega){let Ct=Math.min(1,At*1.3)*ze(-.7,.5,j.age-j.tBreak),L=Math.max(-12,Math.min(14,-j.speed*Q));L>0&&(N-=L*.25*Ct);let C=j.speed*j.speed*j.height*J*(-2/(it*it)+4*K*K/(it*it*it*it))*ot;C>0&&(G-=C*.2*Ct)}if(U+=j.dx*xt,D+=j.dz*xt,j.mega){let Ct=j.speed*J*j.curl*Math.exp(-Math.pow((K-.1*j.front)/(.9*j.front),2));U+=j.dx*.45*Ct,D+=j.dz*.45*Ct}let bt=j.speed*.26*J*Math.exp(-this._btu*this._btu)*Math.min(1,j.height/6)*(1-j.brk);U-=j.dx*bt,D-=j.dz*bt;let Vt=J*Math.exp(-Math.pow((K-.3*j.front)/(1.6*j.front+26*j.turb),2));k=Math.max(k,j.brk*Vt*Math.min(1,j.height/3+j.turb)),z=Math.max(z,j.turb*J*Math.exp(-Math.pow((K+14*j.turb)/(22+30*j.turb),2)))}let H=1/Math.sqrt(E*E+I*I+W*W);return i.h=m,i.nx=E*H,i.ny=I*H,i.nz=W*H,i.vx=w+U,i.vy=R+N,i.vz=y+D,i.ax=T,i.ay=S,i.az=_,i.bvx=U,i.bvy=N,i.bvz=D,i.lip=P,i.plunge=V,i.bay=G<-8.8?-8.8:G>19.6?19.6:G,i.jac=Y,i.x0=d,i.z0=f,i.aer=k,i.turb=z,i.brkH=O,i}heightFast(t,e){let i=this.dirX,n=this.dirZ,s=this.k,r=this.amp,o=this.phT,h=this.steep,c=t,l=e;for(let d=0;d<2;d++){let f=0,m=0;for(let b=0;b<14;b++){let g=h[b]*r[b]*Math.sin(s[b]*(i[b]*c+n[b]*l)-o[b]);f-=i[b]*g,m-=n[b]*g}c=t-f,l=e-m}let u=0;for(let d=0;d<14;d++)u+=r[d]*Math.cos(s[d]*(i[d]*c+n[d]*l)-o[d]);for(let d=0;d<vi;d++){let f=this.breakers[d];f.active&&f.height>.01&&(u+=this._breakerHeight(f,t,e))}return u}bodyFlow(t,e,i,n){let s=this.dirX,r=this.dirZ,o=this.k,h=this.amp,c=this.steep,l=this.phT,u=this.omega,d=this.bodyW,f=0,m=0,b=0,g=0,p=0,x=0;for(let v=0;v<ye;v++){let w=Math.exp(-o[v]*i)*d[v];if(w<.01)continue;let R=o[v]*(s[v]*t+r[v]*e)-l[v],y=Math.sin(R),T=Math.cos(R),S=h[v]*u[v]*w,_=S*u[v];f+=c[v]*S*s[v]*T,b+=c[v]*S*r[v]*T,m+=S*y,g+=c[v]*_*s[v]*y,x+=c[v]*_*r[v]*y,p-=_*T}return n.vx=f,n.vy=m,n.vz=b,n.ax=g,n.ay=p,n.az=x,n}velocityAtDepth(t,e,i,n){let s=this.dirX,r=this.dirZ,o=this.k,h=this.amp,c=this.steep,l=this.phT,u=this.omega,d=0,f=0,m=0;for(let b=0;b<ye;b++){let g=Math.exp(-o[b]*i);if(g<.01)continue;let p=o[b]*(s[b]*t+r[b]*e)-l[b],x=h[b]*u[b]*g,v=Math.cos(p);d+=c[b]*x*s[b]*v,m+=c[b]*x*r[b]*v,f+=x*Math.sin(p)}return n.vx=d,n.vy=f,n.vz=m,n}breakerFlow(t,e,i,n,s){let r=0,o=0,h=0,c=this.time;for(let l=0;l<vi;l++){let u=this.breakers[l];if(!u.active||u.roll<.003&&u.turb<.003)continue;this._breakerHeight(u,t,i);let d=this._benv,f=this._bu;if(!(d<.01)){if(u.roll>.003){let m=Math.max(1.8,Math.min(7.5,.36*u.hMax)),b=f-.35*u.front,g=e-(n-.55*m),p=Math.hypot(b,g);if(p<3.2*m){let x=p<m?1:m*m/(p*p),v=.85*u.speed/m*u.roll*d*x,w=v*g;r+=u.dx*w,h+=u.dz*w,o+=-v*b}}if(u.turb>.003){let m=u.turb*d*Math.exp(-Math.pow((f+14*u.turb)/(22+30*u.turb),2))*Math.exp(-Math.max(0,n-e)/6.5);if(m>.01){let b=m*3.4;r+=b*(Math.sin(.9*i+1.7*e+2.3*c)+.6*Math.sin(1.7*t-1.1*e-3.1*c+1.3)),o+=b*(Math.sin(1.1*t+.8*i+2.9*c+.7)+.6*Math.sin(-1.5*i+1.9*e+2*c)),h+=b*(Math.sin(1.3*e-.9*t+2.6*c+2.1)+.6*Math.sin(1.6*t+1.2*i-2.2*c)),o-=m*2.6*Math.exp(-Math.max(0,n-e)/3)}}}}return s.vx+=r,s.vy+=o,s.vz+=h,s}};function si(){return{bay:0,lip:0,plunge:0,bvx:0,bvy:0,bvz:0,h:0,nx:0,ny:1,nz:0,vx:0,vy:0,vz:0,ax:0,ay:0,az:0,jac:1,x0:0,z0:0,aer:0,turb:0,brkH:0}}var st={hdrType:pn,uWaveA:{value:new Float32Array(ye*4)},uWaveB:{value:new Float32Array(ye*4)},uBrkA:{value:new Float32Array(vi*4)},uBrkB:{value:new Float32Array(vi*4)},uBrkC:{value:new Float32Array(vi*4)},uTime:{value:0},uStorm:{value:1},uRain:{value:1},uWindDir:{value:new mt(1,0)},uWindSpeed:{value:28},uGlowDir:{value:new M(-.55,.35,.25).normalize()},uAmbient:{value:new M(.05,.06,.072)},uFlash:{value:0},uFlashDir:{value:new M(1,.35,0).normalize()},uFlashColor:{value:new M(.78,.86,1)},uFlashSheet:{value:0},uFogDensity:{value:1/2600},uNoise:{value:null},uSkyEnv:{value:null},uDetailN:{value:null},uFoamTex:{value:null},uResolution:{value:new mt(1,1)},uSpotPos:{value:new M(0,100,0)},uSpotDir:{value:new M(0,-1,0)},uSpotP:{value:new ie(.99,0,30,0)},uWash:{value:new ie(0,0,1,0)}},Js=`
uniform vec3 uSpotPos; uniform vec3 uSpotDir; uniform vec4 uSpotP;
float spotAt(vec3 p, out vec3 L) {
  vec3 d = uSpotPos - p; float ds = length(d); L = d / max(ds, 1e-3);
  if (uSpotP.y < 0.001) return 0.0;
  float x = max(0.0, (1.0 - dot(-L, uSpotDir)) / (1.0 - uSpotP.x));   // 1 at the nominal edge of the beam (never below 0: exp(-0.09 x) must not run away)
  return uSpotP.y * (exp(-1.5 * x * x) + 0.045 * exp(-0.09 * x)) / (1.0 + ds * ds / (uSpotP.z * uSpotP.z));
}
`,yn="vec3(0.78, 0.88, 1.0)";function Od(a=7){let e=ci(a),i=new Uint8Array(256*256*4);for(let s=0;s<i.length;s++)i[s]=e()*256|0;let n=new Ti(i,256,256,de,Ne);return n.wrapS=n.wrapT=ii,n.minFilter=Zt,n.magFilter=Zt,n.generateMipmaps=!1,n.needsUpdate=!0,n}function Bd(a=11,t=256){let e=ci(a),i=[];for(let d=0;d<56;d++){let f=2+Math.pow(e(),1.6)*38,m=(e()-.5)*2.4+(e()<.2?Math.PI*e():0),b=Math.round(Math.cos(m)*f),g=Math.round(Math.sin(m)*f);if(b===0&&g===0)continue;let p=Math.hypot(b,g);i.push({m:b,n:g,a:Math.pow(p,-1.35),ph:e()*Math.PI*2})}let n=new Float32Array(t*t),s=new Float32Array(t*t),r=new Float32Array(t*t),o=0;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let m=f/t,b=d/t,g=0,p=0,x=0;for(let w=0;w<i.length;w++){let R=i[w],y=6.283185307*(R.m*m+R.n*b)+R.ph,T=Math.sin(y);g-=R.a*R.m*T,p-=R.a*R.n*T,x+=R.a*Math.cos(y)}let v=d*t+f;n[v]=g,s[v]=p,r[v]=x,o+=g*g+p*p}o=Math.sqrt(o/(t*t*2));let h=0;for(let d=0;d<r.length;d++)h=Math.max(h,Math.abs(r[d]));let c=new Uint8Array(t*t*4),l=.3/o;for(let d=0;d<t*t;d++)c[d*4]=Math.max(0,Math.min(255,Math.round((n[d]*l*.5+.5)*255))),c[d*4+1]=Math.max(0,Math.min(255,Math.round((s[d]*l*.5+.5)*255))),c[d*4+2]=Math.round((r[d]/h*.5+.5)*255),c[d*4+3]=255;let u=new Ti(c,t,t,de,Ne);return u.wrapS=u.wrapT=ii,u.minFilter=Qe,u.magFilter=Zt,u.generateMipmaps=!0,u.anisotropy=8,u.needsUpdate=!0,u}function Hd(a=23,t=256){let e=ci(a),i=c=>{let l=new Float32Array(c*c*2);for(let d=0;d<l.length;d++)l[d]=e();let u=new Float32Array(t*t*2);for(let d=0;d<t;d++)for(let f=0;f<t;f++){let m=(f+.5)/t*c,b=(d+.5)/t*c,g=Math.floor(m),p=Math.floor(b),x=9,v=9;for(let w=-1;w<=1;w++)for(let R=-1;R<=1;R++){let y=g+R,T=p+w,S=(y%c+c)%c,_=(T%c+c)%c,E=y+l[(_*c+S)*2],I=T+l[(_*c+S)*2+1],W=Math.hypot(E-m,I-b);W<x?(v=x,x=W):W<v&&(v=W)}u[(d*t+f)*2]=x,u[(d*t+f)*2+1]=v-x}return u},n=i(9),s=i(23),r=i(51),o=new Uint8Array(t*t*4);for(let c=0;c<t*t;c++){let l=1-Math.min(1,n[c*2+1]*3.2),u=1-Math.min(1,s[c*2+1]*3),d=Math.min(1,l*.62+u*.5),f=Math.min(1,(1-n[c*2]*1.25)*.7+(1-s[c*2]*1.3)*.3),m=1-Math.min(1,r[c*2]*1.6);o[c*4]=Math.round(Math.max(0,d)*255),o[c*4+1]=Math.round(Math.max(0,f)*255),o[c*4+2]=Math.round(Math.max(0,m)*255),o[c*4+3]=255}let h=new Ti(o,t,t,de,Ne);return h.wrapS=h.wrapT=ii,h.minFilter=Qe,h.magFilter=Zt,h.generateMipmaps=!0,h.anisotropy=8,h.needsUpdate=!0,h}var ns=`
#define NW ${ye}
#define NB ${vi}
uniform vec4 uWaveA[NW];   // dir.x, dir.z, k, amplitude
uniform vec4 uWaveB[NW];   // phase(t), steepness, wavelength, -
uniform vec4 uBrkA[NB];    // origin.xz, dir.xz
uniform vec4 uBrkB[NB];    // crest s, height, front scale, back scale
uniform vec4 uBrkC[NB];    // lateral width, curl, breaking, turbulence
`,ss=`
float gPeel = 1.0;     // set by breakerProfile: how early this stretch of the crest breaks
vec4 breakerProfile(int i, vec2 x, out float env) {
  vec4 A = uBrkA[i]; vec4 B = uBrkB[i]; vec4 C = uBrkC[i];
  vec2 r = x - A.xy;
  float along = dot(r, A.zw);
  float lat = -r.x * A.w + r.y * A.z;
  float seed = A.x * 0.013 + A.y * 0.017;
  float wob = 0.16 * sin(lat * 0.071 + seed) + 0.09 * sin(lat * 0.193 + seed * 1.7);
  float shift = 2.6 * sin(lat * 0.047 + seed * 0.6) + 1.2 * sin(lat * 0.13 + seed * 2.1);
  float u = along - B.x - shift;
  env = exp(-(lat * lat) / (C.x * C.x)) * (1.0 + wob);
  gPeel = clamp(0.55 + 2.5 * wob, 0.15, 1.3);
  float sc = u > 0.0 ? B.z : B.w;
  float p = exp(-(u * u) / (sc * sc));
  float tu = (u - 2.4 * B.z) / (1.7 * B.z);
  float tr = -0.22 * exp(-tu * tu);
  float h = B.y * env * (p + tr);
  float slope = B.y * env * (-2.0 * u / (sc * sc) * p + 0.22 * exp(-tu * tu) * (2.0 * tu / (1.7 * B.z)));
  return vec4(h, slope, p, u);
}
// Foam produced by breaker i at world xz (crest cap, collapsing face, whitewater left behind).
float breakerFoam(int i, vec2 x) {
  float env;
  vec4 pr = breakerProfile(i, x, env);
  vec4 B = uBrkB[i]; vec4 C = uBrkC[i];
  float u = pr.w;
  float big = clamp(B.y / 5.0, 0.0, 1.0);
  float peel = min(gPeel, 1.0);
  // feathering along the top while it is still coming, a white cap as the lip throws, then the whole face
  float cap = smoothstep(0.62, 0.97, pr.z) * (0.35 * smoothstep(0.55, 1.0, C.y * gPeel) + C.z * peel)
            + 0.28 * smoothstep(0.90, 1.0, pr.z) * smoothstep(0.35, 0.9, big) * peel;
  float face = u > 0.0 ? C.z * peel * (1.0 - smoothstep(0.0, B.z * (0.5 + 2.6 * C.z), u)) : 0.0;
  float wake = C.w * exp(-pow((u + 14.0 * C.w) / (22.0 + 30.0 * C.w), 2.0));
  return env * max(max(cap, face) * big, wake);
}
`,io=`
// Trochoidal displacement of the undisplaced point x0. spacing = local grid spacing (LOD fade).
vec3 waveDisplace(vec2 x0, float spacing) {
  vec3 d = vec3(0.0);
  for (int i = 0; i < NW; i++) {
    vec4 A = uWaveA[i]; vec4 B = uWaveB[i];
    float fade = 1.0 - smoothstep(B.z * 0.16, B.z * 0.34, spacing);
    float th = A.z * dot(A.xy, x0) - B.x;
    float amp = A.w * fade;
    d.xz -= A.xy * (B.y * amp * sin(th));
    d.y += amp * cos(th);
  }
  return d;
}
`,Vd=`
// Analytic surface normal, convergence (jacobian), height, and the slope variance of waves too small
// to resolve at this pixel footprint (fp, metres per pixel) which is returned as extra roughness.
void waveShade(vec2 x0, float fp, out vec3 N, out float J, out float h, out float lost) {
  float a = 0.0, b = 0.0, d = 0.0, hx = 0.0, hz = 0.0;
  h = 0.0; lost = 0.0;
  for (int i = 0; i < NW; i++) {
    vec4 A = uWaveA[i]; vec4 B = uWaveB[i];
    float th = A.z * dot(A.xy, x0) - B.x;
    float s = sin(th), c = cos(th);
    float kA = A.z * A.w;
    float f = 1.0 - smoothstep(B.z * 0.22, B.z * 0.6, fp);
    lost += (1.0 - f) * kA * kA * 0.5;
    kA *= f;
    float skA = B.y * kA;
    a += skA * A.x * A.x * c; b += skA * A.y * A.y * c; d += skA * A.x * A.y * c;
    hx -= kA * A.x * s; hz -= kA * A.y * s;
    h += A.w * c;
  }
  J = (1.0 - a) * (1.0 - b) - d * d;
  N = vec3(-hx * (1.0 - b) - hz * d, max(J, 0.05), -hz * (1.0 - a) - hx * d);
}
`;var Gd=`
uniform sampler2D uNoise;
uniform float uTime;
uniform float uStorm;
uniform vec2 uWindDir;
uniform vec3 uGlowDir;
uniform float uFlash;
uniform vec3 uFlashDir;
uniform vec3 uFlashColor;
uniform float uFlashSheet;

float vnoise(vec2 x) {
  vec2 p = floor(x); vec2 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return textureLod(uNoise, (p + f + 0.5) / 256.0, 0.0).r;
}
float fbm(vec2 p, int oct) {
  float a = 0.5, s = 0.0;
  for (int i = 0; i < 6; i++) {
    if (i >= oct) break;
    s += a * vnoise(p);
    p = mat2(1.6, 1.2, -1.2, 1.6) * p + 3.7;
    a *= 0.5;
  }
  return s;
}
// d must be normalised. Returns linear HDR radiance.
vec3 stormSky(vec3 d, int quality) {
  float y = d.y;
  float yy = max(y, 0.0);
  float glow = max(dot(d, uGlowDir), 0.0);
  vec2 w = uWindDir * uTime;
  int oct = quality > 0 ? 6 : 4;

  // main overcast deck (high, slow)
  vec2 p = d.xz / (yy + 0.14);
  float n = fbm(p * 0.95 + w * 0.012, oct);
  float n2 = fbm(p * 2.9 + vec2(7.3, 1.9) + w * 0.026, oct - 1);
  float base = n * 0.62 + n2 * 0.38;
  float dens = smoothstep(0.26, 0.66, base + 0.12 * uStorm);
  // density sampled a step toward the bright part of the sky: thinner there = lit edge
  vec2 lo = normalize(uGlowDir.xz + vec2(1e-4)) * 0.22;
  float nL = fbm((p + lo) * 0.95 + w * 0.012, oct - 1) * 0.62 + n2 * 0.38;
  float edge = clamp((base - nL) * 4.5, -1.0, 1.0);

  vec3 thin = vec3(0.060, 0.070, 0.084) * (0.55 + 1.0 * pow(glow, 2.5));
  vec3 thick = vec3(0.0105, 0.0130, 0.0170);
  vec3 col = mix(thin, thick, dens);
  col *= 1.0 + edge * 0.75;
  // billow structure inside the thick cloud so it never reads as a flat grey
  col *= 0.66 + 0.68 * fbm(p * 6.5 + w * 0.06 + 21.0, oct - 2);

  // ragged low scud racing under the deck (fast, dark)
  vec2 q = d.xz / (yy + 0.07);
  float sc = fbm(q * 1.7 + w * 0.075 + 13.0, oct);
  float scd = smoothstep(0.50, 0.78, sc + 0.08 * uStorm) * smoothstep(0.02, 0.30, yy);
  vec3 scudCol = vec3(0.0062, 0.0075, 0.010) * (1.0 + 2.2 * pow(glow, 3.0));
  col = mix(col, scudCol, scd * 0.9);

  // distant rain curtains: vertical streaks hanging under the cloud base near the horizon
  float az = atan(d.z, d.x);
  float curtain = fbm(vec2(az * 5.0 + uTime * 0.01, 2.0), 4);
  float streak = vnoise(vec2(az * 60.0, yy * 6.0 - uTime * 0.05));
  float cz = smoothstep(0.42, 0.75, curtain) * (1.0 - smoothstep(0.03, 0.34, yy)) * (0.6 + 0.4 * streak);
  col = mix(col, col * 0.42, cz * 0.75 * uStorm);

  // horizon haze / rain veil
  vec3 haze = vec3(0.033, 0.039, 0.047) * (0.75 + 0.9 * pow(glow, 2.0));
  float hz = exp(-yy * 7.5);
  col = mix(col, haze, hz * 0.88);

  // lightning: light scattered inside the cloud around the strike direction
  if (uFlash > 0.001) {
    float fd = max(dot(d, normalize(uFlashDir)), 0.0);
    float cone = mix(pow(fd, 14.0) * 2.4 + pow(fd, 3.0) * 0.5, pow(fd, 1.5) * 0.9 + 0.25, uFlashSheet);
    float tex = 0.35 + 0.65 * (1.0 - dens * 0.55) + 0.5 * max(edge, 0.0) + 0.6 * n2;
    col += uFlashColor * uFlash * cone * tex * (0.55 + 0.45 * hz) * 0.34;
    col += uFlashColor * uFlash * 0.03;
  }

  // below the horizon: haze fading to dark water (only seen in rough reflections and fog lookups)
  if (y < 0.0) col = mix(col, haze * 0.55, (1.0 - smoothstep(-0.25, 0.0, y)));
  return col;
}
`,qv=`
const float PI = 3.14159265359;
vec3 equirectToDir(vec2 uv) {
  float phi = (uv.x - 0.5) * 2.0 * PI;
  float lat = (uv.y - 0.5) * PI;
  return vec3(cos(lat) * cos(phi), sin(lat), cos(lat) * sin(phi));
}
`,so=`
vec2 dirToEquirect(vec3 d) {
  return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5);
}
`,no=class{constructor(t,e=512){this.renderer=t;let i={uNoise:st.uNoise,uTime:st.uTime,uStorm:st.uStorm,uWindDir:st.uWindDir,uGlowDir:st.uGlowDir,uFlash:st.uFlash,uFlashDir:st.uFlashDir,uFlashColor:st.uFlashColor,uFlashSheet:st.uFlashSheet};this.domeMat=new ne({uniforms:i,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = position;
          vec4 p = projectionMatrix * viewMatrix * vec4(position * 9000.0 + cameraPosition, 1.0);
          gl_Position = p.xyww;   // always at the far plane
        }`,fragmentShader:`
        varying vec3 vDir;
        ${Gd}
        void main() { gl_FragColor = vec4(stormSky(normalize(vDir), 1), 1.0); }`,side:Se,depthWrite:!1,depthTest:!0,fog:!1}),this.dome=new ut(new Wr(1,5),this.domeMat),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,this.envRT=new _e(e,e/2,{type:st.hdrType,format:de,depthBuffer:!1,minFilter:Qe,magFilter:Zt,generateMipmaps:!0}),this.envRT.texture.wrapS=ii,this.envRT.texture.wrapT=Ke,this.envMat=new ne({uniforms:i,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        varying vec2 vUv;
        ${Gd}
        ${qv}
        void main() { gl_FragColor = vec4(stormSky(equirectToDir(vUv), 0), 1.0); }`,depthTest:!1,depthWrite:!1}),this.envScene=new Li,this.envQuad=new ut(new Ei(2,2),this.envMat),this.envQuad.frustumCulled=!1,this.envScene.add(this.envQuad),this.envCam=new gi(-1,1,1,-1,0,1),st.uSkyEnv.value=this.envRT.texture}updateEnv(){let t=this.renderer,e=t.getRenderTarget();t.setRenderTarget(this.envRT),t.render(this.envScene,this.envCam),t.setRenderTarget(e)}dispose(){this.envRT.dispose(),this.domeMat.dispose(),this.envMat.dispose(),this.dome.geometry.dispose()}};var ao=19,Wd=37,as=new Float32Array([0,0,0,0,0,0,0,0,0,0,.6,2.6,5.2,6.1,7.5,8.8,10,11,11,0,0,0,0,0,0,0,0,0,.6,3,4.9,6.7,7.6,9.1,9.7,10.7,11.6,11.6,0,.7,1.1,1.1,1.1,1,.8,1.1,2.5,3.8,5.5,7.1,8.4,9,9.9,10.8,11.6,12.3,12.3,.7,1.8,2.2,2.5,2.8,2.9,3.2,4,4.7,5.9,7.1,8.6,9.7,10.3,11.2,11.8,12.6,13.1,13.1,1,2.7,3.1,3.6,4.2,4.7,5.3,6.2,6.7,7.5,8.5,9.6,10.9,11.4,11.9,12.5,13.1,13.6,13.6,1.6,3.3,4.6,5.1,5.8,6.7,7.1,7.9,8.5,9.3,10.3,10.9,11.7,12.1,12.6,13.4,13.6,13.8,13.8,2.2,4.4,5.8,6.7,7.4,8.3,8.7,9.5,10,10.7,11.1,11.6,12.4,12.8,13.3,13.5,13.8,14,14,2.8,5.6,7.3,8.5,8.9,9.8,10.2,10.9,11.4,11.8,12.3,12.6,13.2,13.5,13.7,13.9,14,14.2,14.2,3.5,7.4,8.6,9.5,10.4,11.1,11.5,12,12.2,12.6,13,13.5,13.7,13.7,13.9,14.1,14.2,14.2,14.2,4.4,8,10.1,10.8,11.5,12.3,12.4,12.8,13,13.4,13.6,13.8,14,14.1,14.1,14.2,14.2,14.2,14.2,4.8,9.9,11,11.7,12.6,12.9,13,13.3,13.7,13.7,13.8,13.9,14.1,14.2,14.2,14.2,14.2,14.2,14.2,5.4,10.1,12,12.7,13.1,13.5,13.6,13.8,13.8,14,14,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,5.8,10.7,12.6,13.1,13.5,13.8,13.9,14,14,14,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.2,11.3,13.2,13.4,13.7,14,14,14.1,14.2,14.2,14.2,14.2,14.2,14.3,14.3,14.3,14.2,14.2,14.2,6.4,11.9,13.4,13.6,13.9,14,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.6,12.2,13.5,13.8,13.9,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.6,12,13.7,13.8,13.9,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.7,12,13.6,13.8,13.9,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.7,12,13.6,13.8,13.9,14,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.7,12.8,13.6,13.8,13.9,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.6,12,13.6,13.8,13.9,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.5,12.1,13.4,13.7,13.8,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.3,11.6,13.1,13.4,13.7,13.9,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,5.9,10.8,12.7,13.1,13.5,13.8,13.9,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,5.4,10.1,12,12.6,13,13.5,13.7,13.8,13.9,14,14.1,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,4.9,9.3,11.2,12.4,12.6,13.1,13.3,13.6,13.7,13.8,13.9,14,14.1,14.1,14.1,14.1,14.2,14.2,14.2,4.3,8.3,10.5,11,11.7,12.4,12.6,13,13.1,13.4,13.5,13.6,13.8,13.8,13.9,13.9,14,14,14,3.7,8.1,9.1,10,10.9,11.4,11.8,12.1,12.4,12.6,12.9,13.1,13.3,13.4,13.5,13.8,13.8,13.8,13.8,3.1,6.4,7.9,8.9,9.5,10.2,10.5,11,11.3,11.7,12,12.3,12.5,12.7,12.9,13.1,13.3,13.5,13.5,0,5,6.8,7.4,8.2,8.9,9.2,9.7,10,10.4,10.7,11,11.4,11.6,12,12.2,12.4,12.6,12.6,0,4.1,5.4,6.4,6.7,7.4,7.7,8.2,8.4,8.8,9.1,9.5,10,10.2,10.6,10.9,11.3,11.8,12.3,0,2.9,4.2,4.8,5.4,5.9,6.1,6.4,6.7,7,7.4,7.6,8,8.4,8.8,9.4,9.7,10.1,10.9,0,2.2,3.3,3.9,4.5,4.8,5,5.1,5.2,5.3,5.6,5.9,6.1,6.5,6.9,7.3,7.9,8.7,9.5,0,2.2,2.7,3.2,3.7,4,4,4.1,4.2,4.1,4.1,4.1,4.2,4.7,5,5.4,6,6.8,7.3,0,1.5,2.4,2.7,3,3.3,3.3,3.3,3.1,3,2.9,2.9,2.9,3.1,3.6,3.8,4.3,6.5,6.5,0,.7,1.9,2.1,2.3,2.3,2.3,2.1,2,1.7,1.4,1.1,.7,.9,1,1.4,2,2.7,3.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);function ro(a,t=0){if(!(a>-90&&a<90))return 0;let e=Math.max(0,Math.min(18,t+9)),i=(a+90)/5,n=Math.min(35,Math.floor(i)),s=Math.min(17,Math.floor(e)),r=i-n,o=e-s,h=n*ao+s,c=h+ao,l=as[h]+(as[h+1]-as[h])*o,u=as[c]+(as[c+1]-as[c])*o;return l+(u-l)*r}var tn=null;function qd(){if(tn)return tn;let a=new Uint8Array(ao*Wd);for(let t=0;t<a.length;t++)a[t]=Math.round(Math.min(1,as[t]/16)*255);return tn=new Ti(a,ao,Wd,xc,Ne),tn.minFilter=tn.magFilter=Zt,tn.wrapS=tn.wrapT=Ke,tn.generateMipmaps=!1,tn.needsUpdate=!0,tn}var Xd=`
float hullHalf(sampler2D T, float z, float y) {
  if (z <= -90.0 || z >= 90.0) return 0.0;
  vec2 uv = vec2((clamp(y, -9.0, 9.0) + 9.5) / 19.0, ((z + 90.0) / 5.0 + 0.5) / 37.0);
  return texture(T, uv).r * 16.0;
}
`;var Xv=`
attribute float aSpacing;
uniform vec2 uCenter;
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${ns}
${io}
${ss}
void main() {
  vec2 x0 = position.xz + uCenter;
  vec3 d = waveDisplace(x0, aSpacing);
  vec3 wp = vec3(x0.x + d.x, d.y, x0.y + d.z);
  vec2 pre = wp.xz;
  for (int i = 0; i < NB; i++) {
    if (uBrkB[i].y > 0.01) {
      float env;
      vec4 pr = breakerProfile(i, pre, env);
      wp.y += pr.x;
      // plunging lip: the top of the crest is thrown forward and starts to fall
      float lip = pow(pr.z, 3.0) * env * min(uBrkB[i].y, 17.0) * uBrkC[i].y * gPeel;
      wp.xz += uBrkA[i].zw * lip * 0.95;
      wp.y -= lip * uBrkC[i].y * 0.30;
    }
  }
  vWorld = wp; vX0 = x0; vPre = pre;
  vec4 mv = viewMatrix * vec4(wp, 1.0);
  vViewZ = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,jv=`
precision highp float;
uniform sampler2D uSkyEnv;
uniform sampler2D uDetailN;
uniform sampler2D uFoamTex;
uniform sampler2D uNoise;
uniform float uTime;
uniform float uStorm;
uniform float uRain;
uniform vec2 uWindDir;
uniform vec3 uAmbient;
uniform float uFlash;
uniform vec3 uFlashDir;
uniform vec3 uFlashColor;
uniform float uFogDensity;
uniform vec3 uDeepColor;
uniform vec3 uScatterColor;
uniform vec4 uDetailScroll;
uniform vec2 uDetailScroll3;
uniform float uDetailStrength;
uniform float uSigH;
uniform sampler2D uSceneColor;
uniform sampler2D uSceneDepth;
uniform vec2 uResolution;
uniform vec2 uNearFar;
uniform sampler2D uFoamAcc;
uniform vec4 uFoamAccRect;   // centre.xz, world size, enabled
uniform vec3 uPlayerPos;     // for the body's own disturbance foam
uniform float uPlayerFoam;
uniform vec4 uBody[11];        // the swimmer's parts where they break the surface: x, z, radius (m), how hard the water is worked there (0..1.3)
uniform float uBodyOn;
uniform vec4 uWash;           // rotor wash: x, z, radius, strength
uniform mat4 uBoatInv;        // world -> boat model space
uniform float uBoatOn;
uniform mat4 uShipInv;        // world -> cargo ship space (metres, bow +Z, waterline amidships at 0)
uniform float uShipOn;
uniform float uShipFoam;      // how hard the cargo ship is driving through the sea (its speed, 0..1)
uniform sampler2D uShipHull;  // its hull's half breadth by length and height (hullTable.js)
${Xd}
uniform float uBoatFoam;      // how hard the hull is working the water (0 at rest in still water)
${Js}
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${ns}
${Vd}
${ss}
${so}
const float PI = 3.14159265359;

float linDepth(float d) { return uNearFar.x * uNearFar.y / (uNearFar.y - d * (uNearFar.y - uNearFar.x)); }

// expanding ring ripples from rain drops (one hashed drop per cell per cycle)
vec2 rainRipples(vec2 p, float t) {
  vec2 acc = vec2(0.0);
  for (int l = 0; l < 2; l++) {
    vec2 q = p * (l == 0 ? 4.7 : 8.9) + float(l) * 17.3;
    vec2 c = floor(q); vec2 f = fract(q);
    vec4 r = textureLod(uNoise, (c + 0.5) / 256.0, 0.0);
    float ph = fract(t * (0.9 + r.z * 0.6) + r.w);
    vec2 dv = f - (0.25 + 0.5 * r.xy);
    float dd = length(dv);
    float ring = sin((dd - ph * 0.42) * 62.0) * exp(-pow((dd - ph * 0.42) * 16.0, 2.0)) * (1.0 - ph) * (1.0 - ph);
    acc += normalize(dv + 1e-5) * ring;
  }
  return acc;
}

void main() {
  // no sea inside the boat: the surface that would cut through its floor (it floats lower at one end than the wave
  // is there) is not drawn within the ring of its tubes
  if (uBoatOn > 0.5) {
    vec3 bl = (uBoatInv * vec4(vWorld, 1.0)).xyz;
    float t = clamp((bl.z - 1.0) / 0.95, 0.0, 1.0);
    float hw = 0.70 * sqrt(max(0.0, 1.0 - t * t));
    // (only the water that would be above the hull's own bottom: a V keel that rises to the bow)
    float keel = 0.02 + 0.36 * smoothstep(0.7, 1.95, bl.z);
    float bottom = mix(keel, 0.30, clamp(abs(bl.x) / max(hw, 0.05), 0.0, 1.0));
    if (abs(bl.x) < hw && bl.z > -1.30 && bl.z < 1.93 && bl.y > bottom - 0.03 && bl.y < 0.50) discard;
  }
  // no sea inside the cargo ship either: a 20 m crest passing along a 180 m hull stands higher than its 9 m sides
  // amidships, and the surface drawn through the hull showed as the ship broken in two. The water meets the side and
  // goes no further in (the outline is the hull's own at the height the water stands there, a little inside it).
  if (uShipOn > 0.5) {
    vec3 sl = (uShipInv * vec4(vWorld, 1.0)).xyz;
    float hw = hullHalf(uShipHull, sl.z, sl.y);
    if (abs(sl.x) < hw - 0.35 && sl.y > -9.0) discard;
  }
  vec3 toCam = cameraPosition - vWorld;
  float dist = length(toCam);
  vec3 V = toCam / dist;
  float fp = max(length(dFdx(vX0)), length(dFdy(vX0)));

  vec3 N; float J; float h; float lost;
  waveShade(vX0, fp, N, J, h, lost);

  float bFoam = 0.0;
  for (int i = 0; i < NB; i++) {
    if (uBrkB[i].y > 0.01) {
      float env;
      vec4 pr = breakerProfile(i, vPre, env);
      N.xz -= pr.y * uBrkA[i].zw * N.y;
      h += pr.x;
      bFoam = max(bFoam, breakerFoam(i, vPre));
    }
  }

  // unresolved small waves: three scrolling slope layers (mips fade them with distance)
  vec2 s1 = texture(uDetailN, vX0 * 0.047 + uDetailScroll.xy).xy * 2.0 - 1.0;
  vec2 s2r = texture(uDetailN, vec2(vX0.y, -vX0.x) * 0.19 + uDetailScroll.zw).xy * 2.0 - 1.0;
  vec2 s2 = vec2(-s2r.y, s2r.x);
  vec2 s3 = texture(uDetailN, vX0 * 0.83 + uDetailScroll3).xy * 2.0 - 1.0;
  vec2 dn = (s1 * 0.95 + s2 * 0.75 + s3 * 0.5) * uDetailStrength;
  #ifdef USE_RIPPLES
  float nearK = 1.0 - smoothstep(6.0, 28.0, dist);
  if (nearK > 0.0 && uRain > 0.01) dn += rainRipples(vX0, uTime) * 0.32 * nearK * uRain;
  // wind-ruffled micro chop right in front of the lens
  vec2 s4 = texture(uDetailN, vec2(vX0.y, vX0.x) * 3.3 - uDetailScroll3 * 2.7).xy * 2.0 - 1.0;
  dn += vec2(s4.y, s4.x) * 0.42 * uDetailStrength * (1.0 - smoothstep(1.5, 9.0, dist));
  #endif
  // The swimmer IN the water: round every part of him that breaks the surface a ragged collar of white water, and
  // rings running out from it that die within a metre or so - most where a hand has just come down or a leg kicks.
  // (without it he read as a dark figure laid on top of the sea)
  float bodyF = 0.0;
  if (uBodyOn > 0.5) {
    vec2 pdv = vWorld.xz - uPlayerPos.xz;
    if (dot(pdv, pdv) < 30.0) {
      float lace0 = texture(uFoamTex, vX0 * 1.9 + vec2(uTime * 0.05, -uTime * 0.035)).r;
      for (int i = 0; i < 11; i++) {
        vec4 P = uBody[i];
        if (P.w < 0.02) continue;
        vec2 dv = vWorld.xz - P.xy; float dl = length(dv), d = dl - P.z;      // metres outside the part
        float collar = 1.0 - smoothstep(0.0, 0.16 + 0.34 * P.w, d);
        float env = exp(-max(d, 0.0) * (2.4 - 0.9 * min(P.w, 1.0))) * step(-0.03, d);
        float ph = d * 11.0 - uTime * 8.5 - float(i) * 1.7 + lace0 * 2.2;
        float ring = sin(ph) * env * P.w;
        dn += dv / max(dl, 1e-3) * ring * 0.85;
        bodyF = max(bodyF, min(P.w, 0.86) * max(collar * (0.66 + 0.34 * lace0), 0.62 * env * smoothstep(0.35, 0.95, sin(ph + 1.2))));
      }
    }
  }
  // rotor wash under the hovering helicopter: fine ripples racing outward, combed into radial streaks of white
  float washFoam = 0.0;
  if (uWash.w > 0.001) {
    vec2 wv = vWorld.xz - uWash.xy; float wd = length(wv);
    float wk = uWash.w * (1.0 - smoothstep(uWash.z * 0.3, uWash.z, wd)) * smoothstep(0.0, 2.5, wd);
    if (wk > 0.001) {
      vec2 wdir = wv / max(wd, 0.01); float wa = atan(wv.y, wv.x);
      float rp = sin(wd * 6.5 - uTime * 24.0 + 2.5 * sin(wa * 7.0)) + 0.6 * sin(wd * 14.0 - uTime * 39.0 + wa * 5.0);
      dn += wdir * rp * 0.22 * wk;
      float sk = texture(uFoamTex, vec2(wa * 2.9, wd * 0.06 - uTime * 0.5)).g * 0.6 + texture(uFoamTex, vec2(wa * 7.0 + 0.3, wd * 0.11 - uTime * 0.8)).r * 0.4;
      washFoam = wk * smoothstep(0.50, 0.95, sk) * 0.42;
    }
  }
  N = normalize(vec3(N.x - dn.x * N.y, N.y, N.z - dn.y * N.y));

  float rough = 0.05 + 0.085 * uStorm;
  float r2 = rough * rough + lost * 0.55 + uDetailStrength * uDetailStrength * 0.06 * smoothstep(0.02, 0.7, fp);
  rough = clamp(sqrt(r2), 0.03, 0.85);

  vec3 amb = uAmbient;
  vec3 Lf = normalize(uFlashDir);
  float flashWrap = max(dot(N, Lf) * 0.65 + 0.35, 0.0);
  vec3 flashL = uFlashColor * uFlash;

  // ---------- foam (shared by both sides) ----------
  vec2 fu = vX0 * 0.085 + uWindDir * uTime * 0.012;
  vec3 ft0 = texture(uFoamTex, vX0 * 0.021).rgb;
  float fJ = (1.0 - smoothstep(0.10, 0.68, J)) * (0.30 + 0.70 * uStorm);
  vec2 wd = uWindDir;
  vec2 sp = vec2(dot(vX0, wd), dot(vX0, vec2(-wd.y, wd.x)));
  float warp = (ft0.g - 0.5) * 0.9;
  float st = texture(uFoamTex, (sp + vec2(0.0, warp)) * vec2(0.0042, 0.050) + vec2(uTime * 0.004, 0.0)).g;
  float st2 = texture(uFoamTex, (sp + vec2(0.0, warp * 0.5)) * vec2(0.0125, 0.16) + vec2(uTime * 0.007, 0.37)).r;
  float streak = smoothstep(0.50, 0.95, st * 0.66 + st2 * 0.34) * uStorm * uStorm;
  streak *= 1.0 - smoothstep(0.08, 0.45, fp);
  float acc = 0.0;
  #ifdef USE_FOAM_ACC
  if (uFoamAccRect.w > 0.5) {
    vec2 fuv = (vX0 - uFoamAccRect.xy) / uFoamAccRect.z + 0.5;
    vec2 e = smoothstep(vec2(0.0), vec2(0.06), fuv) * (1.0 - smoothstep(vec2(0.94), vec2(1.0), fuv));
    acc = texture(uFoamAcc, fuv).r * e.x * e.y;
  }
  #endif
  // the swimmer churns the water around the body
  float pd = length(vWorld.xz - uPlayerPos.xz);
  float self = uPlayerFoam * exp(-pd * pd / 0.7);
  // the boat: white water torn along its waterline - a thin broken edge when it merely rides, a wide churned band
  // when it is driven through the sea or comes down on it
  float boatF = 0.0;
  if (uBoatOn > 0.5 && uBoatFoam > 0.004) {
    vec3 bl = (uBoatInv * vec4(vWorld, 1.0)).xyz;
    float tb = clamp((bl.z - 1.0) / 0.95, 0.0, 1.0);
    float hwb = 0.72 * sqrt(max(0.0, 1.0 - tb * tb)) + 0.21;
    vec2 qb = vec2(abs(bl.x) - hwb, max(bl.z - 2.12, -1.72 - bl.z));
    float dOut = length(max(qb, 0.0)) + min(max(qb.x, qb.y), 0.0);          // metres outside the hull's outline
    float reachB = 0.22 + 0.70 * uBoatFoam;
    // torn, not painted: the edge is broken up by the same lace as the rest of the sea's foam and comes and goes
    float laceB = texture(uFoamTex, vX0 * 0.33 + vec2(uTime * 0.021, -uTime * 0.013)).r * 0.6 + texture(uFoamTex, vX0 * 1.1 + 0.4).g * 0.4;
    // (a hull lying in the water always has broken white water along it and small waves running off it: riding quietly
    // it had next to none and looked set down on the sea)
    float inW = 1.0 - smoothstep(0.6, 1.4, abs(bl.y - 0.3));
    float kB = min(1.0, 0.50 + 1.1 * uBoatFoam);
    float phB = dOut * 9.0 - uTime * 6.5 + laceB * 2.5;
    float envB = exp(-max(dOut, 0.0) * 1.6) * step(-0.05, dOut);
    boatF = inW * kB * max((1.0 - smoothstep(0.0, reachB, dOut)) * step(-0.3, dOut) * smoothstep(0.16, 0.85, laceB), 0.55 * envB * smoothstep(0.45, 0.95, sin(phB)));
  }
  // the cargo ship: a broken white edge along its waterline, piled up and wide at the bow, and the churned wake that
  // trails from its stern and spreads (torn by the same lace as the rest of the foam, never a painted band)
  float shipF = 0.0;
  if (uShipOn > 0.5 && uShipFoam > 0.01) {
    vec3 sl = (uShipInv * vec4(vWorld, 1.0)).xyz;
    float zc = clamp(sl.z, -89.0, 89.0);
    float hw = hullHalf(uShipHull, zc, sl.y);
    float gap = abs(sl.x) - hw;
    float laceS = texture(uFoamTex, vX0 * 0.21 + vec2(uTime * 0.017, -uTime * 0.011)).r * 0.6 + texture(uFoamTex, vX0 * 0.7 + 0.3).g * 0.4;
    float bowK = smoothstep(40.0, 88.0, sl.z);
    float edge = (1.0 - smoothstep(0.0, 1.5 + 5.5 * bowK, gap)) * step(-0.5, gap) * step(sl.z, 92.0) * step(-90.0, sl.z);
    // the wake: from the stern aft, widening as it goes, fading out over a few hundred metres
    float aft = -90.0 - sl.z;
    float wake = aft > 0.0 ? (1.0 - smoothstep(4.0 + aft * 0.12, 9.0 + aft * 0.16, abs(sl.x))) * (1.0 - smoothstep(30.0, 320.0, aft)) : 0.0;
    shipF = uShipFoam * max(edge * (0.55 + 0.45 * bowK), wake * 0.75) * smoothstep(0.24, 0.92, laceS);
  }
  float foam = max(max(max(max(max(fJ, bFoam), acc), max(max(streak * 0.30, self), washFoam)), max(boatF, shipF)), bodyF);
  vec3 ft1 = texture(uFoamTex, fu).rgb;
  vec3 ft2 = texture(uFoamTex, fu * 3.3 + 0.37).rgb;
  float pat = ft1.r * 0.50 + ft2.r * 0.28 + ft1.g * 0.34 + ft2.b * 0.20;
  // (right under the eye the lace's cells are a hand across and read as a net laid on the water: there it is broken
  // down with two finer layers into small bubbly foam, and its edge is soft)
  float nearF = 1.0 - smoothstep(0.8, 5.5, dist);
  if (nearF > 0.01) {
    float fine = texture(uFoamTex, vX0 * 0.71 + vec2(0.23, uTime * 0.02)).r * 0.52 + texture(uFoamTex, vX0 * 1.93 + 0.61).g * 0.42 + texture(uFoamTex, vX0 * 4.7 + 0.17).b * 0.30;
    pat = mix(pat, pat * 0.42 + fine * 0.62, nearF);
  }
  float fa = smoothstep(1.02 - foam * 1.12 - 0.14 * nearF, 1.34 - foam * 1.12 + 0.16 * nearF, pat + foam * 0.22);
  fa = mix(fa, foam * foam * 0.85, smoothstep(0.12, 1.1, fp));
  fa = clamp(fa, 0.0, 1.0) * mix(0.30, 1.0, smoothstep(0.22, 0.85, foam));
  float foamShade = 0.62 + 0.38 * pat;

  vec3 col;
  if (gl_FrontFacing) {
    // ---------- seen from the air ----------
    float NdV = max(dot(N, V), 0.0);
    float fres = (0.02 + 0.98 * pow(1.0 - NdV, 5.0)) / (1.0 + 2.0 * rough);
    vec3 R = reflect(-V, N);
    R.y = abs(R.y);
    R = normalize(R + vec3(0.0, 0.035, 0.0));
    vec3 refl = textureLod(uSkyEnv, dirToEquirect(R), clamp(rough * 9.0, 0.0, 6.5)).rgb;

    vec3 light = amb + flashL * flashWrap * 0.55;
    vec3 Ls; float spot = spotAt(vWorld, Ls);
    float snl = max(dot(N, Ls), 0.0);
    float crest = smoothstep(-0.15, 1.0, h / (uSigH * 0.5 + 0.5));
    float thin = pow(1.0 - NdV, 2.0);
    vec3 body = (uDeepColor + uScatterColor * (0.10 + 0.62 * crest * (0.30 + 0.70 * thin))) * light;
    // searchlight: the beam goes into the water and comes back out as a glow from inside the lit patch
    // (and the rain-beaten skin of the water scatters some of it straight back: inside the beam the sea is plainly lit)
    // (as the light falls on it: a beam coming in low over the sea - the ship's, from a couple of hundred metres - lights
    // the faces turned to it, not the whole surface, which had gone white as far as its stripe reached)
    body += (uDeepColor * 0.95 + uScatterColor * 0.26 + vec3(0.018, 0.021, 0.024)) * ${yn} * spot * (0.06 + 0.94 * snl * snl)
          + ${yn} * spot * 0.020 * (0.15 + 0.85 * snl);

    #ifdef USE_REFRACTION
    vec2 suv = gl_FragCoord.xy / uResolution;
    vec2 off = N.xz * (0.045 / (1.0 + vViewZ * 0.12));
    // Refraction bends the picture of what is under the water in proportion to how much water it is seen through.
    // A limb lying at the surface has almost none over it, so it must not be shifted at all: shifted, the swimmer's
    // own legs showed twice, once where they were and once a hand's breadth away.
    vec4 sc0 = texture(uSceneColor, suv); float sd0 = linDepth(texture(uSceneDepth, suv).r);
    if (sc0.a > 0.5 && sd0 > vViewZ) off *= smoothstep(0.06, 0.9, sd0 - vViewZ);
    vec4 sc = texture(uSceneColor, suv + off);
    float sd = linDepth(texture(uSceneDepth, suv + off).r);
    if (sc.a < 0.5 || sd < vViewZ) { sc = sc0; sd = sd0; }
    else if (sc0.a < 0.5 && sd - vViewZ < 0.5) { sc = sc0; sd = sd0; }      // (nor may a shallow limb throw its picture out past its own edge)
    if (sc.a > 0.5 && sd > vViewZ) {
      float thick = sd - vViewZ;
      vec3 tr = exp(-thick * vec3(3.4, 1.9, 1.6));      // storm water is not clear: what is under it fades within an arm's length
      body = mix(body, sc.rgb * vec3(0.50, 0.78, 0.84), tr * 0.92);
    }
    #endif

    col = mix(body, refl, fres);

    // lightning glints
    if (uFlash > 0.001) {
      vec3 H = normalize(V + Lf);
      float NdH = max(dot(N, H), 0.0);
      float a = max(rough * rough, 0.004); float a2 = a * a;
      float D = a2 / (PI * pow(NdH * NdH * (a2 - 1.0) + 1.0, 2.0));
      float fs = 0.02 + 0.98 * pow(1.0 - max(dot(V, H), 0.0), 5.0);
      col += flashL * min(D, 14.0) * fs * 0.30;
    }

    // ...and every wavelet that mirrors the lamp toward the eye flashes: the glitter that makes a searchlight on water
    if (spot > 0.0005) {
      vec3 Hs = normalize(V + Ls);
      float nhs = max(dot(N, Hs), 0.0);
      float as = max(rough * rough * 0.8, 0.006); float as2 = as * as;
      float Ds = as2 / (PI * pow(nhs * nhs * (as2 - 1.0) + 1.0, 2.0));
      float fss = 0.02 + 0.98 * pow(1.0 - max(dot(V, Hs), 0.0), 5.0);
      col += ${yn} * spot * min(Ds, 60.0) * fss * 0.55;
    }
    vec3 foamCol = vec3(0.80, 0.85, 0.87) * foamShade * (amb * (2.4 + 0.8 * N.y) + flashL * flashWrap * 0.8 + ${yn} * spot * (0.14 + 1.46 * snl));
    col = mix(col, foamCol, fa);

    float fog = 1.0 - exp(-dist * uFogDensity);
    vec3 fd = normalize(vec3(-V.x, 0.05, -V.z));
    vec3 fogCol = textureLod(uSkyEnv, dirToEquirect(fd), 4.5).rgb;
    col = mix(col, fogCol, fog);
  } else {
    // ---------- seen from under water ----------
    vec3 Nd = -N;
    float c = max(dot(Nd, V), 0.0);
    vec3 T = refract(-V, Nd, 1.333);
    float open = step(0.001, dot(T, T));
    vec3 sky = textureLod(uSkyEnv, dirToEquirect(normalize(T + vec3(0.0, 0.002, 0.0))), 1.5).rgb;
    float fr = 0.02 + 0.98 * pow(1.0 - clamp((c - 0.661) / 0.339, 0.0, 1.0), 5.0);
    vec3 tir = (uDeepColor * 1.3 + uScatterColor * 0.22) * (amb + flashL * 0.35);
    col = mix(tir, sky * vec3(0.55, 0.82, 0.92) * 1.15, open * (1.0 - fr));
    vec3 foamUnder = vec3(0.40, 0.56, 0.60) * (amb * 3.0 + flashL * 0.9);
    col = mix(col, foamUnder, fa * 0.85);
  }
  // (a crest seen edge-on from under the water gave a few pixels that were not numbers at all; the bloom spread each
  // into a black square ringed with white. Such a pixel is the dark of the water it is in.)
  if (!(col.r < 1e4 && col.g < 1e4 && col.b < 1e4 && col.r >= 0.0 && col.g >= 0.0 && col.b >= 0.0)) col = uDeepColor * (amb + 0.2);
  gl_FragColor = vec4(col, 1.0);
}
`;function Yv(a,t,e,i){let n=a*t,s=new Float32Array(n*3),r=new Float32Array(n);for(let l=0;l<a;l++){let u=e*(Math.exp(i*l)-1)/i,d=e*Math.exp(i*l),f=Math.PI*2*u/t,m=Math.max(d,f);for(let b=0;b<t;b++){let g=b/t*Math.PI*2,p=(l*t+b)*3;s[p]=Math.cos(g)*u,s[p+1]=0,s[p+2]=Math.sin(g)*u,r[l*t+b]=m}}let o=new Uint32Array((a-1)*t*6),h=0;for(let l=0;l<a-1;l++)for(let u=0;u<t;u++){let d=l*t+u,f=l*t+(u+1)%t,m=(l+1)*t+u,b=(l+1)*t+(u+1)%t;o[h++]=d,o[h++]=f,o[h++]=m,o[h++]=f,o[h++]=b,o[h++]=m}let c=new he;return c.setAttribute("position",new Bt(s,3)),c.setAttribute("aSpacing",new Bt(r,1)),c.setIndex(new Bt(o,1)),c}var oo=class{constructor(t,e){this.waves=t,this.uniforms={uWaveA:st.uWaveA,uWaveB:st.uWaveB,uBrkA:st.uBrkA,uBrkB:st.uBrkB,uBrkC:st.uBrkC,uSkyEnv:st.uSkyEnv,uDetailN:st.uDetailN,uFoamTex:st.uFoamTex,uNoise:st.uNoise,uTime:st.uTime,uStorm:st.uStorm,uRain:st.uRain,uWindDir:st.uWindDir,uAmbient:st.uAmbient,uFlash:st.uFlash,uFlashDir:st.uFlashDir,uFlashColor:st.uFlashColor,uFogDensity:st.uFogDensity,uResolution:st.uResolution,uCenter:{value:new mt},uDeepColor:{value:new M(.02,.062,.105)},uScatterColor:{value:new M(.13,.27,.305)},uDetailScroll:{value:new ie},uDetailScroll3:{value:new mt},uDetailStrength:{value:.5},uSigH:{value:10},uSceneColor:{value:null},uSceneDepth:{value:null},uNearFar:{value:new mt(.08,3e4)},uFoamAcc:{value:null},uFoamAccRect:{value:new ie(0,0,1,0)},uPlayerPos:{value:new M(0,-1e3,0)},uPlayerFoam:{value:0},uBody:{value:Array.from({length:11},()=>new ie)},uBodyOn:{value:0},uBoatInv:{value:new Rt},uBoatOn:{value:0},uShipInv:{value:new Rt},uShipOn:{value:0},uShipFoam:{value:0},uShipHull:{value:qd()},uBoatFoam:{value:0},uSpotPos:st.uSpotPos,uSpotDir:st.uSpotDir,uSpotP:st.uSpotP,uWash:st.uWash},this.material=new ne({uniforms:this.uniforms,vertexShader:Xv,fragmentShader:jv,side:De,defines:{}}),this.mesh=new ut(new he,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,this.applyProfile(e)}applyProfile(t){this.mesh.geometry.dispose();let e=Math.log(14e3*.0128/t.oceanStep+1)/t.oceanRings*1;this.mesh.geometry=Yv(t.oceanRings,t.oceanSegs,t.oceanStep,this._solveG(t.oceanRings,t.oceanStep,14e3,e));let i={};t.refraction&&(i.USE_REFRACTION=1),t.foamAcc&&(i.USE_FOAM_ACC=1),t.ripples&&(i.USE_RIPPLES=1),this.material.defines=i,this.material.needsUpdate=!0}_solveG(t,e,i,n){let s=Math.max(n,.004);for(let r=0;r<40;r++){let o=Math.exp(s*t),h=e*(o-1)/s-i,c=e*(t*o*s-(o-1))/(s*s);s-=h/c,s<.001&&(s=.001)}return s}update(t,e,i){let n=this.uniforms;n.uCenter.value.set(t.position.x,t.position.z),n.uSigH.value=this.waves.sigHeight;let s=st.uWindDir.value.x,r=st.uWindDir.value.y,o=.6+.4*st.uStorm.value;n.uDetailScroll.value.x+=s*1.9*.047*o*e,n.uDetailScroll.value.y+=r*1.9*.047*o*e,n.uDetailScroll.value.z+=r*1.1*.19*o*e+.011*e,n.uDetailScroll.value.w+=-s*1.1*.19*o*e,n.uDetailScroll3.value.x+=(s*.75-r*.2)*.83*o*e,n.uDetailScroll3.value.y+=(r*.75+s*.2)*.83*o*e,n.uDetailStrength.value=.3+.34*st.uStorm.value,n.uNearFar.value.set(t.near,t.far)}};var Kv=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tPrev;
uniform vec2 uCenter; uniform vec2 uPrevCenter; uniform float uSize; uniform float uDt; uniform float uStorm; uniform float uTexel;
uniform vec3 uPlayer; uniform float uPlayerFoam;
uniform vec4 uBoat; uniform float uBoatFoam;      // boat centre x,z and the direction of its length; how much it is churning
uniform vec4 uSplash[4];      // x, z, ring radius, strength
${ns}
${ss}
void main() {
  vec2 x0 = uCenter + (vUv - 0.5) * uSize;
  float a = 0.0, b = 0.0, d = 0.0; vec2 disp = vec2(0.0);
  for (int i = 0; i < NW; i++) {
    vec4 A = uWaveA[i]; vec4 B = uWaveB[i];
    float f = 1.0 - smoothstep(B.z * 0.25, B.z * 0.6, uTexel);
    float th = A.z * dot(A.xy, x0) - B.x;
    float s = sin(th), c = cos(th);
    float skA = B.y * A.z * A.w * f;
    a += skA * A.x * A.x * c; b += skA * A.y * A.y * c; d += skA * A.x * A.y * c;
    disp -= A.xy * (B.y * A.w * s);
  }
  float J = (1.0 - a) * (1.0 - b) - d * d;
  float src = (1.0 - smoothstep(0.04, 0.56, J)) * (0.30 + 0.70 * uStorm);
  vec2 wp = x0 + disp;
  for (int i = 0; i < NB; i++) if (uBrkB[i].y > 0.01) src = max(src, breakerFoam(i, wp));
  float pd = length(wp - uPlayer.xz);
  src = max(src, uPlayerFoam * exp(-pd * pd / 0.48));
  if (uBoatFoam > 0.004) {
    // the water the hull has just worked: a band round it, left behind as it moves on
    vec2 rb = wp - uBoat.xy; float al = dot(rb, uBoat.zw), la = dot(rb, vec2(-uBoat.w, uBoat.z));
    float outer = exp(-(al * al) / 7.0 - (la * la) / 1.9), inner = exp(-(al * al) / 2.6 - (la * la) / 0.5);
    src = max(src, uBoatFoam * clamp(outer - 0.75 * inner, 0.0, 1.0) * 1.6);
  }
  for (int i = 0; i < 4; i++) {
    vec4 sp = uSplash[i];
    if (sp.w > 0.01) {
      float d = length(wp - sp.xy);
      src = max(src, sp.w * (0.62 * exp(-pow((d - sp.z) / 0.24, 2.0)) + 0.50 * exp(-d * d / (0.5 * sp.z * sp.z + 0.05))));
    }
  }
  vec2 puv = vUv + (uCenter - uPrevCenter) / uSize;
  float prev = 0.0;
  if (puv.x > 0.0 && puv.x < 1.0 && puv.y > 0.0 && puv.y < 1.0) prev = texture(tPrev, puv).r;
  // slow exponential decay plus a constant erosion so thin foam breaks up into lace and disappears
  prev = max(0.0, prev * exp(-uDt / 9.0) - uDt * 0.018);
  gl_FragColor = vec4(max(src, prev), 0.0, 0.0, 1.0);
}`,ho=class{constructor(t,e=1024,i=340){if(this.renderer=t,this.size=e,this.world=i,this.enabled=e>0,!this.enabled)return;let n={type:st.hdrType,format:de,depthBuffer:!1,minFilter:Zt,magFilter:Zt};this.rt=[new _e(e,e,n),new _e(e,e,n)],this.idx=0,this.center=new mt,this.prevCenter=new mt,this.u={tPrev:{value:null},uCenter:{value:this.center},uPrevCenter:{value:this.prevCenter},uSize:{value:i},uDt:{value:.016},uStorm:st.uStorm,uTexel:{value:i/e},uPlayer:{value:new M},uPlayerFoam:{value:0},uSplash:{value:new Float32Array(16)},uBoat:{value:new ie(0,0,0,1)},uBoatFoam:{value:0},uWaveA:st.uWaveA,uWaveB:st.uWaveB,uBrkA:st.uBrkA,uBrkB:st.uBrkB,uBrkC:st.uBrkC},this.mat=new ne({uniforms:this.u,fragmentShader:Kv,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"}),this.scene=new Li,this.quad=new ut(new Ei(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.cam=new gi(-1,1,1,-1,0,1),this.first=!0,this.splashes=[0,1,2,3].map(()=>({x:0,z:0,s:0,age:9})),this.nextSplash=0}addSplash(t,e,i){if(!this.enabled)return;let n=this.splashes[this.nextSplash];this.nextSplash=(this.nextSplash+1)%4,n.x=t,n.z=e,n.s=Math.min(1,i),n.age=0}update(t,e,i,n,s,r){if(!this.enabled){r.uFoamAccRect.value.w=0;return}let o=this.world/this.size,h=Math.round(e/o)*o,c=Math.round(i/o)*o;this.prevCenter.copy(this.first?new mt(h,c):this.center),this.center.set(h,c);let l=this.rt[this.idx],u=this.rt[1-this.idx];this.u.tPrev.value=l.texture,this.u.uDt.value=t,this.u.uPlayer.value.copy(n),this.u.uPlayerFoam.value=s;let d=this.u.uSplash.value;for(let b=0;b<4;b++){let g=this.splashes[b];g.age+=t;let p=g.age<1.3;d[b*4]=g.x,d[b*4+1]=g.z,d[b*4+2]=.25+1.5*g.age*(.6+.6*g.s),d[b*4+3]=p?g.s*Math.exp(-g.age*2):0}let f=this.renderer,m=f.getRenderTarget();f.setRenderTarget(u),f.render(this.scene,this.cam),f.setRenderTarget(m),this.idx=1-this.idx,this.first=!1,r.uFoamAcc.value=u.texture,r.uFoamAccRect.value.set(h,c,this.world,1)}};var co=class{constructor(t,e,i,n,s=4242){this.waves=t,this.body=e,this.player=i,this.spray=n,this.rnd=ci(s),this.auto=!0,this.next=24,this.megaNext=85+this.rnd()*40,this.threat=0,this.crestDist=1e9,this.crestHeight=0,this.crestDx=0,this.crestDz=0,this.whiteout=0,this.onImpact=null,this.onSplash=null,this._splashCool=0}launch(t={}){let e=this.rnd,i=this.body,n=this.waves.storm;return this.waves.spawnBreaker(i.pos.x+i.vel.x*2,i.pos.z+i.vel.z*2,{lead:t.lead!==void 0?t.lead:13+e()*5,height:t.height!==void 0?t.height:lt(6.5,14.5,n)*(.8+.45*e()),width:t.width!==void 0?t.width:110+e()*90,speed:t.speed!==void 0?t.speed:12.5+e()*3.5,breakOffset:t.breakOffset!==void 0?t.breakOffset:-2+e()*2.3,angleOffset:t.angleOffset!==void 0?t.angleOffset:(e()-.5)*.5,frontMin:t.frontMin,back:t.back})}launchMega(t={}){let e=this.rnd,i=this.body;return this.waves.spawnBreaker(i.pos.x,i.pos.z,{mega:!0,lead:t.lead!==void 0?t.lead:19,height:t.height!==void 0?t.height:30+8*e(),width:520,speed:t.speed||24,breakOffset:t.breakOffset!==void 0?t.breakOffset:-.5,angleOffset:(e()-.5)*.2,frontMin:26,back:120})}update(t,e,i,n){let s=this.waves,r=this.body;if(this.auto){this.megaNext-=t;let f=s.breakers.some(m=>m.active&&m.mega);this.megaNext<=0&&s.storm>.6&&!s.breakers.some(m=>m.active)&&(this.launchMega(),this.megaNext=150+this.rnd()*100),this.next-=t,this.next<=0&&(s.storm>.3&&!f&&this.megaNext>14&&this.launch(),this.next=lt(75,24,s.storm)*(.65+.8*this.rnd()))}let o=0,h=1e9,c=0;for(let f of s.breakers){if(!f.active)continue;let m=r.pos.x-f.ox,b=r.pos.z-f.oz,g=m*f.dx+b*f.dz-f.s,p=-m*f.dz+b*f.dx,x=Math.exp(-(p*p)/(f.width*f.width));g>-10&&g<h&&(h=g,c=f.height*x,this.crestDx=f.dx,this.crestDz=f.dz);let v=ft(1-Math.abs(g)/(f.mega?320:120));o=Math.max(o,v*ft(f.height*x/9))}this.threat+=(o-this.threat)*(1-Math.exp(-t*2.5)),this.crestDist=h,this.crestHeight=c;let l=s.sample(e.x,e.z,this._s||(this._s={h:0})),u=Math.max(l.aer,(l.lip||0)*1.1)*ft(1-(e.y-l.h)/7)*(1-i);this.whiteout+=(Math.min(.93,u*1.6)-this.whiteout)*(1-Math.exp(-t*(u>this.whiteout?14:2.5)));let d=this.player.events;for(let f=0;f<d.length;f++){let m=d[f];m.type==="impact"&&(this.spray.burst(r.pos.x,r.surfaceH+.2,r.pos.z,m.strength*2.2,n,m.dir.x,m.dir.z),this.onImpact&&this.onImpact(m))}d.length=0,this._splashCool-=t,r.splash>3&&this._splashCool<=0&&(this._splashCool=.6,this.spray.burst(r.splashPos.x,r.splashPos.y,r.splashPos.z,Math.min(3.5,(r.splash-2.4)*.9),n),this.onSplash&&this.onSplash(r.splash,r.splashPos))}};var Rc={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new mt(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`};var Qv="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Zv=`
varying vec2 vUv; uniform sampler2D tScene; uniform float uThreshold; uniform float uKnee;
void main(){
  vec3 c = textureLod(tScene, vUv, 1.0).rgb;
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-5);
  float w = max(soft, br - uThreshold) / max(br, 1e-5);
  gl_FragColor = vec4(min(c * w, vec3(40.0)), 1.0);
}`,Jv=`
varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 a = texture(tSrc, vUv + t * vec2(-1.0, -1.0)).rgb, b = texture(tSrc, vUv + t * vec2(1.0, -1.0)).rgb;
  vec3 c = texture(tSrc, vUv + t * vec2(-1.0, 1.0)).rgb, d = texture(tSrc, vUv + t * vec2(1.0, 1.0)).rgb;
  vec3 e = texture(tSrc, vUv).rgb;
  gl_FragColor = vec4((a + b + c + d) * 0.2 + e * 0.2, 1.0);
}`,$v=`
varying vec2 vUv; uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 s = texture(tSrc, vUv + t * vec2(-1.0, 0.0)).rgb + texture(tSrc, vUv + t * vec2(1.0, 0.0)).rgb
         + texture(tSrc, vUv + t * vec2(0.0, -1.0)).rgb + texture(tSrc, vUv + t * vec2(0.0, 1.0)).rgb;
  s = s * 0.125 + texture(tSrc, vUv).rgb * 0.5;
  gl_FragColor = vec4(s + texture(tAdd, vUv).rgb, 1.0);
}`,tx=`
varying vec2 vUv; uniform sampler2D tScene; uniform sampler2D tPrev; uniform float uDt; uniform float uReset;
void main(){
  vec3 c = textureLod(tScene, vec2(0.5), 20.0).rgb;
  float lum = max(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
  float prev = texture(tPrev, vec2(0.5)).r;
  // (one pixel anywhere that is not a number, or infinite, makes the whole average so; carried into the next frame it
  // stayed there for good and the picture went to black and white. Such a frame leaves the eye where it was.)
  bool prevOk = prev > 0.0 && prev < 1e4;
  if (!(lum < 1e4)) lum = prevOk ? prev : 0.05;
  // eyes close fast when it gets bright, open slowly in the dark
  float k = lum > prev ? 1.0 - exp(-uDt * 7.0) : 1.0 - exp(-uDt * 1.1);
  float v = mix(prev, lum, k);
  if (uReset > 0.5 || !prevOk) v = lum;
  gl_FragColor = vec4(v, v, v, 1.0);
}`,ex=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tScene; uniform sampler2D tDepth; uniform sampler2D tBloom; uniform sampler2D tAdapt;
uniform sampler2D tLens; uniform sampler2D uNoise;
uniform vec2 uResolution; uniform vec2 uNearFar; uniform float uTime;
uniform vec3 uCamPos; uniform vec3 uCamRight; uniform vec3 uCamUp; uniform vec3 uCamFwd; uniform vec2 uTanFov; // tan(fov/2)*aspect, tan(fov/2)
uniform mat4 uPrevViewProj; uniform float uMotionBlur;
uniform float uBloom; uniform float uExposureKey; uniform vec2 uExposureRange; uniform float uExposureBias;
// water volume
uniform vec4 uWaterPlane;      // local surface plane at the lens: xyz normal, w = -dot(n, p)
uniform float uUnderAmount;    // 0 when the whole lens is clearly in air (skips the work)
uniform vec3 uUnderColor; uniform vec3 uUnderExt; uniform float uAeration; uniform float uUnderDistort;
uniform vec3 uShaftDir; uniform float uShaft;
// lens / eyes
uniform float uLensStrength; uniform float uSheet; uniform float uBlur;
uniform float uDofFocus; uniform float uDofAmount;
uniform float uVignette; uniform float uGrain; uniform float uTunnel; uniform float uDesat; uniform float uFade; uniform float uWhiteout;
uniform float uGradeMix;

float linDepth(float d) { return uNearFar.x * uNearFar.y / (uNearFar.y - d * (uNearFar.y - uNearFar.x)); }
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
// smooth value noise (hermite) and a 3 octave fbm on top of the shared noise texture
float sn(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f); return textureLod(uNoise, (i + f + 0.5) / 256.0, 0.0).r; }
float fbm3(vec2 p) { return sn(p) * 0.5 + sn(p * 2.03 + 7.1) * 0.3 + sn(p * 4.1 + 3.3) * 0.2; }
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }

void main() {
  vec2 uv = vUv;
  vec2 ndc = uv * 2.0 - 1.0;
  vec3 ray = normalize(uCamFwd + uCamRight * (ndc.x * uTanFov.x) + uCamUp * (ndc.y * uTanFov.y));
  float cosF = dot(ray, uCamFwd);

  // which side of the water surface is this pixel of the lens on?
  float under = 0.0; float line = 0.0;
  if (uUnderAmount > 0.0) {
    vec3 np = uCamPos + ray * (0.035 / cosF);          // the glass of the lens itself (a few centimetres), whatever the near plane is
    float wob = (sn(vec2(uv.x * 9.0 + uTime * 1.3, uTime * 0.9)) - 0.5) * 0.004;
    // (the plane is a flat stand-in for a surface that is not flat: taken a centimetre high, so that glass which is really
    // under a lapping wave is never counted as dry - counted dry, it showed a band of plain grey under the waterline)
    float side = dot(np, uWaterPlane.xyz) + uWaterPlane.w + wob - 0.012;
    under = 1.0 - smoothstep(-0.004, 0.004, side);          // a soft lip of water across the glass, not a ruled line
    line = exp(-pow(side / 0.006, 2.0));
  }

  // water on the lens: droplet refraction + a sheet of water draining after surfacing
  vec4 lens = texture(tLens, uv);
  vec2 off = lens.rg * uLensStrength * (1.0 - under);
  float blur = lens.b * 3.2 * (1.0 - under) + uBlur;
  if (uSheet > 0.002) {
    vec2 q = vec2(uv.x * 22.0, uv.y * 5.0 + uTime * 2.4);
    float n1 = sn(q), n2 = sn(q + 37.3);
    float n3 = fbm3(vec2(uv.x * 7.0, uv.y * 1.6 + uTime * 0.9));
    float cov = smoothstep(1.0 - uSheet, 1.05 - uSheet * 0.6, n3 * 0.6 + 0.4 * (1.0 - uv.y) + uSheet * 0.35);
    off += (vec2(n1, n2) - 0.5) * 0.085 * cov * (1.0 - under);
    blur += cov * 3.5 * (1.0 - under);
  }
  // refraction wobble inside the water
  if (under > 0.0) {
    vec2 w = vec2(sn(uv * vec2(7.0, 5.0) + vec2(uTime * 0.7, uTime * 0.5)),
                  sn(uv * vec2(7.0, 5.0) + vec2(-uTime * 0.6, uTime * 0.8) + 31.7)) - 0.5;
    off += w * uUnderDistort * under;
    blur += under * (0.5 + 2.2 * uAeration);
  }
  vec2 suv = clamp(uv + off, vec2(0.001), vec2(0.999));
  float depth = texture(tDepth, suv).r;
  float lin = linDepth(depth);
  float distRay = lin / cosF;
  // With the lens lying in the surface, the water right under it is closer than the camera can draw (it is cut away
  // by the near plane), so a strip of bare background showed at the bottom of the picture. Where a ray that should
  // meet the water within arm's reach sees far past it instead, that glass is in the water.
  if (uUnderAmount > 0.0 && under < 1.0) {
    float dnr = dot(ray, uWaterPlane.xyz);
    if (dnr < -0.02) {
      float tp = -(dot(uCamPos, uWaterPlane.xyz) + uWaterPlane.w) / dnr;
      if (tp > 0.0 && tp < 1.6 && distRay > tp * 3.0 + 1.5) under = max(under, smoothstep(1.6, 0.9, tp));
    }
  }

  // depth of field (title / pause / exhaustion)
  if (uDofAmount > 0.001) blur += clamp(abs(lin - uDofFocus) / max(uDofFocus, 0.5), 0.0, 1.0) * uDofAmount;
  blur += line * 3.0;

  vec3 col;
  if (uMotionBlur > 0.001) {
    vec3 wp = uCamPos + ray * min(distRay, 4000.0);
    vec4 pc = uPrevViewProj * vec4(wp, 1.0);
    vec2 puv = pc.xy / pc.w * 0.5 + 0.5;
    // only the far sea streaks: anything close (the swimmer, his own arms) moves with the camera and would ghost
    vec2 vel = (uv - puv) * uMotionBlur * smoothstep(7.0, 22.0, distRay);
    float vl = length(vel);
    if (vl > 0.05) vel *= 0.05 / vl;
    float j = hash12(gl_FragCoord.xy + uTime * 60.0) - 0.5;
    col = vec3(0.0);
    for (int i = 0; i < 7; i++) {
      float t = (float(i) + j) / 6.0 - 0.5;
      col += textureLod(tScene, clamp(suv + vel * t, vec2(0.001), vec2(0.999)), blur).rgb;
    }
    col /= 7.0;
  } else {
    col = textureLod(tScene, suv, blur).rgb;
  }

  vec3 bloom = texture(tBloom, uv).rgb;

  // inside the water: wavelength dependent extinction + in-scattered ambient light
  if (under > 0.0) {
    vec3 ext = exp(-min(distRay, 400.0) * uUnderExt);
    vec3 scat = uUnderColor;
    // faint moving light shafts from the surface
    float sh = 0.0;
    if (uShaft > 0.001) {
      vec2 sp = (ray.xz / max(ray.y + 0.6, 0.15)) * 1.7;
      sh = sn(sp * 2.2 + vec2(uTime * 0.35, 0.0)) * sn(sp * 5.1 - vec2(0.0, uTime * 0.5));
      sh = smoothstep(0.22, 0.6, sh) * max(ray.y + 0.25, 0.0);
    }
    scat *= 1.0 + sh * uShaft;
    // The water is not a flat sheet of one colour (which is what the lower half of a lens lying in the surface used to
    // show): it is lighter toward the surface and darker looking down, with slow soft clouding in it.
    float dn = clamp(0.45 - ray.y * 1.5, 0.0, 1.0);
    scat *= mix(1.25, 0.58, dn) * (0.88 + 0.24 * fbm3(uv * vec2(2.6, 3.4) + vec2(uTime * 0.05, -uTime * 0.08)));
    // aerated whitewater: the entrained air scatters light, so the volume itself turns milky
    if (uAeration > 0.002) {
      float an = fbm3(uv * vec2(3.5, 4.5) + uTime * vec2(0.5, 1.7)) * fbm3(uv * vec2(8.0, 9.0) - uTime * vec2(1.1, 0.6)) * 2.2;
      vec3 white = uUnderColor * 6.5 + vec3(0.010, 0.014, 0.016);
      scat = mix(scat, white * (0.32 + 1.45 * an), clamp(uAeration * 1.1, 0.0, 1.0));      // churned water: clots of bubbles, not an even grey
    }
    vec3 uc = col * ext + scat * (1.0 - ext);
    col = mix(col, uc, under);
    bloom *= 1.0 - 0.6 * under;
  }
  // the waterline itself: a dark refracting band with a thin bright meniscus
  col *= 1.0 - 0.28 * line;

  col += bloom * uBloom;

  // exposure from measured average luminance, clamped so a storm at dusk stays dark
  float avg = texture(tAdapt, vec2(0.5)).r;
  float ev = clamp(uExposureKey / 0.045 * pow((avg + 0.004) / 0.049, -0.55), uExposureRange.x, uExposureRange.y) * uExposureBias;
  col *= ev;
  col = aces(col);
  // white water slamming the lens (display space, so exposure cannot grey it out)
  if (uWhiteout > 0.001) {
    float n1 = fbm3(uv * vec2(3.0, 5.0) + uTime * vec2(1.3, 4.1));
    float n2 = fbm3(uv * vec2(9.0, 14.0) + uTime * vec2(-2.1, 6.3));
    vec3 wcol = vec3(0.78, 0.83, 0.86) * (0.58 + 0.75 * n1 * (0.6 + 0.8 * n2));
    col = mix(col, wcol, clamp(uWhiteout * (0.65 + 0.75 * n2), 0.0, 1.0));
  }

  // grade: cold shadows, slightly warm-neutral highlights, lifted blacks, restrained saturation
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  vec3 graded = mix(vec3(l), col, 0.86 - uDesat);
  graded = mix(graded * vec3(0.90, 0.99, 1.08), graded * vec3(1.03, 1.0, 0.97), smoothstep(0.0, 0.7, l));
  graded = graded * 0.975 + vec3(0.012, 0.014, 0.018);
  graded = mix(graded, smoothstep(0.0, 1.0, graded), 0.22);
  col = mix(col, graded, uGradeMix);

  // vignette, tunnel vision when oxygen runs out
  float r = length(ndc * vec2(1.0, 0.82));
  col *= 1.0 - uVignette * smoothstep(0.45, 1.45, r);
  if (uTunnel > 0.001) {
    float tv = smoothstep(1.25 - uTunnel * 1.2, 1.45 - uTunnel * 0.75, r + (hash12(uv * 7.0 + uTime) - 0.5) * 0.03);
    col *= 1.0 - tv * min(1.0, uTunnel * 1.6);
  }
  col *= 1.0 - uFade;

  // film grain (luminance weighted) + dither against banding in the dark gradients
  float g = hash12(gl_FragCoord.xy + fract(uTime) * 931.0) - 0.5;
  col = pow(max(col, 0.0), vec3(1.0 / 2.2));
  col += g * uGrain * (0.6 + 0.4 * (1.0 - l));
  col += (hash12(gl_FragCoord.xy * 1.37 + 11.0) - 0.5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}`,lo=class{constructor(t){this.renderer=t,this.fsScene=new Li,this.fsCam=new gi(-1,1,1,-1,0,1),this.fsQuad=new ut(new Ei(2,2),null),this.fsQuad.frustumCulled=!1,this.fsScene.add(this.fsQuad),this.w=2,this.h=2,this.levels=5,this.useOpaque=!0;let e=(s,r)=>new ne({uniforms:r,vertexShader:Qv,fragmentShader:s,depthTest:!1,depthWrite:!1});this.matPre=e(Zv,{tScene:{value:null},uThreshold:{value:.16},uKnee:{value:.12}}),this.matDown=e(Jv,{tSrc:{value:null},uTexel:{value:new mt}}),this.matUp=e($v,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new mt}}),this.matAdapt=e(tx,{tScene:{value:null},tPrev:{value:null},uDt:{value:.016},uReset:{value:1}}),this.u={tScene:{value:null},tDepth:{value:null},tBloom:{value:null},tAdapt:{value:null},tLens:{value:null},uNoise:st.uNoise,uResolution:{value:new mt},uNearFar:{value:new mt(.08,3e4)},uTime:{value:0},uCamPos:{value:new M},uCamRight:{value:new M},uCamUp:{value:new M},uCamFwd:{value:new M},uTanFov:{value:new mt},uPrevViewProj:{value:new Rt},uMotionBlur:{value:0},uBloom:{value:.55},uExposureKey:{value:.125},uExposureRange:{value:new mt(.5,7)},uExposureBias:{value:1},uWaterPlane:{value:new ie(0,1,0,0)},uUnderAmount:{value:0},uUnderColor:{value:new M(.004,.012,.018)},uUnderExt:{value:new M(.42,.2,.16)},uAeration:{value:0},uUnderDistort:{value:.012},uShaftDir:{value:new M(0,1,0)},uShaft:{value:0},uLensStrength:{value:.05},uSheet:{value:0},uBlur:{value:0},uDofFocus:{value:10},uDofAmount:{value:0},uVignette:{value:.42},uGrain:{value:.028},uTunnel:{value:0},uDesat:{value:0},uFade:{value:0},uWhiteout:{value:0},uGradeMix:{value:1}},this.matComposite=e(ex,this.u),this.matFXAA=new ne({uniforms:{tDiffuse:{value:null},resolution:{value:new mt}},vertexShader:Rc.vertexShader,fragmentShader:Rc.fragmentShader,depthTest:!1,depthWrite:!1}),this.matCopy=e("varying vec2 vUv; uniform sampler2D tSrc; void main(){ gl_FragColor = texture(tSrc, vUv); }",{tSrc:{value:null}});let i=new Ti(new Uint8Array([0,0,0,0]),1,1);i.needsUpdate=!0,this.blankLens=i,this.u.tLens.value=i,this.rtScene=null,this.rtOpaque=null,this.rtLDR=null,this.down=[],this.up=[];let n={type:st.hdrType,format:de,depthBuffer:!1,minFilter:Pe,magFilter:Pe};this.adapt=[new _e(1,1,n),new _e(1,1,n)],this.adaptIdx=0,this.adaptReset=!0,this.fxaa=!0,this.prevViewProj=new Rt,this._vp=new Rt}setSize(t,e,i){if(t=Math.max(2,Math.floor(t)),e=Math.max(2,Math.floor(e)),!i&&t===this.w&&e===this.h&&this.rtScene)return;this.w=t,this.h=e,(h=>h.forEach(c=>c&&c.dispose()))([this.rtScene,this.rtOpaque,this.rtLDR,...this.down,...this.up]);let s={type:st.hdrType,format:de,magFilter:Zt};this.rtScene=new _e(t,e,{...s,minFilter:Qe,generateMipmaps:!0,depthBuffer:!0}),this.rtScene.depthTexture=new Jn(t,e),this.rtOpaque=new _e(t,e,{...s,minFilter:Zt,depthBuffer:!0}),this.rtOpaque.depthTexture=new Jn(t,e),this.rtLDR=new _e(t,e,{type:Ne,format:de,minFilter:Zt,magFilter:Zt,depthBuffer:!1}),this.down=[],this.up=[];let r=t>>1,o=e>>1;for(let h=0;h<this.levels;h++){r=Math.max(2,r),o=Math.max(2,o);let c={...s,minFilter:Zt,depthBuffer:!1};this.down.push(new _e(r,o,c)),h<this.levels-1&&this.up.push(new _e(r,o,c)),r>>=1,o>>=1}st.uResolution.value.set(t,e),this.adaptReset=!0}_pass(t,e){this.fsQuad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.fsScene,this.fsCam)}render(t,e,i,n){let s=this.renderer,r=this.u;this.useOpaque&&t(this.rtOpaque,!0),t(this.rtScene,!1),this.matPre.uniforms.tScene.value=this.rtScene.texture,this._pass(this.matPre,this.down[0]);for(let d=1;d<this.levels;d++)this.matDown.uniforms.tSrc.value=this.down[d-1].texture,this.matDown.uniforms.uTexel.value.set(1/this.down[d-1].width,1/this.down[d-1].height),this._pass(this.matDown,this.down[d]);let o=this.down[this.levels-1];for(let d=this.levels-2;d>=0;d--)this.matUp.uniforms.tSrc.value=o.texture,this.matUp.uniforms.tAdd.value=this.down[d].texture,this.matUp.uniforms.uTexel.value.set(1/o.width,1/o.height),this._pass(this.matUp,this.up[d]),o=this.up[d];let h=this.adapt[this.adaptIdx],c=this.adapt[1-this.adaptIdx];this.matAdapt.uniforms.tScene.value=this.rtScene.texture,this.matAdapt.uniforms.tPrev.value=h.texture,this.matAdapt.uniforms.uDt.value=i,this.matAdapt.uniforms.uReset.value=this.adaptReset?1:0,this._pass(this.matAdapt,c),this.adaptIdx=1-this.adaptIdx,this.adaptReset=!1,r.tScene.value=this.rtScene.texture,r.tDepth.value=this.rtScene.depthTexture,r.tBloom.value=o.texture,r.tAdapt.value=c.texture,r.uResolution.value.set(this.w,this.h),r.uNearFar.value.set(e.near,e.far),r.uTime.value=n;let l=e.matrixWorld.elements;r.uCamRight.value.set(l[0],l[1],l[2]),r.uCamUp.value.set(l[4],l[5],l[6]),r.uCamFwd.value.set(-l[8],-l[9],-l[10]),r.uCamPos.value.copy(e.position);let u=Math.tan($i.degToRad(e.fov)*.5);r.uTanFov.value.set(u*e.aspect,u),r.uPrevViewProj.value.copy(this.prevViewProj),this._vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.prevViewProj.copy(this._vp),this.fxaa?(this._pass(this.matComposite,this.rtLDR),this.matFXAA.uniforms.tDiffuse.value=this.rtLDR.texture,this.matFXAA.uniforms.resolution.value.set(1/this.w,1/this.h),this._pass(this.matFXAA,null)):this._pass(this.matComposite,null)}};var ix=`
attribute vec4 aDrop;       // x, y (0..1), radius (in screen heights), strength
uniform float uAspect;
varying vec2 vP; varying float vS;
void main() {
  vP = position.xy; vS = aDrop.w;
  vec2 c = aDrop.xy * 2.0 - 1.0;
  gl_Position = vec4(c + position.xy * vec2(aDrop.z / uAspect, aDrop.z) * 2.0 * vec2(1.0, 1.18), 0.0, 1.0);
}`,nx=`
precision highp float;
varying vec2 vP; varying float vS;
void main() {
  // teardrop: narrower at the top
  vec2 p = vP; p.x *= 1.0 + 0.35 * max(0.0, p.y);
  float r = length(p);
  if (r > 1.0) discard;
  float mask = 1.0 - smoothstep(0.82, 1.0, r);
  float thick = sqrt(max(0.0, 1.0 - r * r));
  vec2 n = -p * (0.35 + 0.65 * r * r);          // a drop is a little lens: it flips what is behind it
  gl_FragColor = vec4(n * vS, thick * vS, mask);
}`,uo=class{constructor(t,e=120){this.renderer=t,this.max=e,this.rt=new _e(640,360,{type:st.hdrType,format:de,depthBuffer:!1,minFilter:Zt,magFilter:Zt}),this.x=new Float32Array(e),this.y=new Float32Array(e),this.r=new Float32Array(e),this.vy=new Float32Array(e),this.vx=new Float32Array(e),this.life=new Float32Array(e),this.wait=new Float32Array(e),this.head=0,this.rainAcc=0,this.count=0,this.trail=new Float32Array(e);let i=new Ji;i.setAttribute("position",new Bt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),this.aDrop=new Je(new Float32Array(e*4),4),this.aDrop.setUsage(Hi),i.setAttribute("aDrop",this.aDrop),i.instanceCount=0,this.dropMat=new ne({uniforms:{uAspect:{value:16/9}},vertexShader:ix,fragmentShader:nx,transparent:!0,depthTest:!1,depthWrite:!1,blending:Cn}),this.drops=new ut(i,this.dropMat),this.drops.frustumCulled=!1,this.fadeMat=new ne({uniforms:{uK:{value:.95}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform float uK; void main(){ gl_FragColor = vec4(uK); }",transparent:!0,depthTest:!1,depthWrite:!1,blending:mc,blendEquation:un,blendSrc:Qr,blendDst:gc,blendSrcAlpha:Qr,blendDstAlpha:wa}),this.fade=new ut(new Ei(2,2),this.fadeMat),this.fade.frustumCulled=!1,this.scene=new Li,this.scene.add(this.fade,this.drops),this.fade.renderOrder=0,this.drops.renderOrder=1,this.cam=new gi(-1,1,1,-1,0,1),this.needClear=!0,this.sheet=0}get texture(){return this.rt.texture}spawn(t,e=0){for(let i=0;i<t;i++){let n=this.head;this.head=(this.head+1)%this.max,this.x[n]=Math.random(),this.y[n]=Math.pow(Math.random(),.8);let s=Math.random()<.14+.26*e;this.r[n]=s?.011+Math.random()*.015:.003+Math.random()*.008,this.vy[n]=0,this.vx[n]=0,this.wait[n]=s?Math.random()*1.6:1e9,this.life[n]=s?5.5:1.8+Math.random()*3.2}}wipe(){this.life.fill(0),this.needClear=!0,this.sheet=0}update(t,e,i,n){if(i)(this.count>0||!this.needClear)&&this.wipe();else{this.rainAcc+=t*e;let l=Math.floor(this.rainAcc);this.rainAcc-=l,l>0&&this.spawn(Math.min(l,6))}this.sheet=Math.max(0,this.sheet-t*1);let s=this.aDrop.array,r=0;for(let l=0;l<this.max;l++){if(this.life[l]<=0)continue;if(this.life[l]-=t,this.wait[l]<1e8&&(this.wait[l]-=t,this.wait[l]<=0)){if(this.vy[l]=Math.min(.2,this.vy[l]+t*(.12+4*this.r[l])),Math.random()<t*.8&&(this.vy[l]*=.2,this.wait[l]=Math.random()*.5),this.vx[l]+=(Math.random()-.5)*t*.5,this.vx[l]*=Math.exp(-t*4),this.y[l]-=this.vy[l]*t,this.x[l]+=this.vx[l]*t,this.trail[l]+=this.vy[l]*t,this.trail[l]>.035+this.r[l]){this.trail[l]=0;let f=this.head;this.head=(this.head+1)%this.max,f!==l&&this.life[f]<=0&&(this.x[f]=this.x[l]+(Math.random()-.5)*.004,this.y[f]=this.y[l]+this.r[l]*1.2,this.r[f]=.0035+Math.random()*.003,this.vy[f]=0,this.vx[f]=0,this.wait[f]=1e9,this.life[f]=.9+Math.random()*1.2,this.trail[f]=0)}if(this.r[l]-=t*.0012,this.y[l]<-.06||this.r[l]<.004){this.life[l]=0;continue}}let u=Math.min(1,this.life[l]/.8),d=r*4;s[d]=this.x[l],s[d+1]=this.y[l],s[d+2]=this.r[l]*(.6+.4*u),s[d+3]=u,r++}this.count=r,this.drops.geometry.instanceCount=r,this.aDrop.needsUpdate=!0,this.dropMat.uniforms.uAspect.value=n,this.fadeMat.uniforms.uK.value=Math.exp(-t*22);let o=this.renderer,h=o.getRenderTarget(),c=o.autoClear;o.setRenderTarget(this.rt),this.needClear&&(o.setClearColor(0,0),o.clear(),this.needClear=!1),o.autoClear=!1,o.render(this.scene,this.cam),o.autoClear=c,o.setRenderTarget(h)}};var $s={cinematic:{key:"cinematic",label:"CINEMATIC",oceanRings:512,oceanSegs:512,oceanStep:.28,envSize:512,maxPixels:3686400,minScale:.6,refraction:!0,foamAcc:1024,ripples:!0,motionBlur:!0,fxaa:!0,bloomLevels:5,rain:26e3,splashes:2600,spray:9e3,bubbles:1400,motes:2600,lensRes:.5,lensDrops:150},high:{key:"high",label:"HIGH",oceanRings:384,oceanSegs:384,oceanStep:.36,envSize:256,maxPixels:2073600,minScale:.55,refraction:!0,foamAcc:512,ripples:!0,motionBlur:!1,fxaa:!0,bloomLevels:5,rain:15e3,splashes:1500,spray:5e3,bubbles:900,motes:1500,lensRes:.5,lensDrops:100},performance:{key:"performance",label:"PERFORMANCE",oceanRings:256,oceanSegs:256,oceanStep:.5,envSize:128,maxPixels:921600,minScale:.5,refraction:!1,foamAcc:0,ripples:!1,motionBlur:!1,fxaa:!1,bloomLevels:4,rain:6e3,splashes:500,spray:2e3,bubbles:400,motes:600,lensRes:.35,lensDrops:60}},fo=class{constructor(t){this.renderer=t,this.profile=$s.cinematic,this.scale=1,this.frameMs=16.7,this.fps=60,this._acc=0,this._slow=0,this._fast=0,this.adaptive=!0,this.info=this.detect()}detect(){let t=this.renderer.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),i=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown",n=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),s=/SwiftShader|llvmpipe|Software|Basic Render/i.test(i),r=/Intel\(R\) (U?HD|Iris)(?! Xe)|Mali|Adreno|PowerVR/i.test(i);return{webgl2:this.renderer.capabilities.isWebGL2,webgpu:typeof navigator<"u"&&!!navigator.gpu,halfFloat:!!t.getExtension("EXT_color_buffer_float")||!!t.getExtension("EXT_color_buffer_half_float"),gpu:i,mobile:n,software:s,weak:r}}pickDefault(){let t=this.info;return t.software||t.mobile?"performance":t.weak?"high":"cinematic"}setProfile(t){this.profile=$s[t]||$s.cinematic,this.scale=1,this._slow=this._fast=0}renderSize(t,e){let i=this.profile.maxPixels,n=Math.min(1,Math.sqrt(i/Math.max(1,t*e)));return n*=this.scale,[Math.max(320,Math.round(t*n)),Math.max(180,Math.round(e*n))]}update(t){let e=t*1e3;return this.frameMs+=(e-this.frameMs)*.06,this.fps=1e3/this.frameMs,this.adaptive?(this.frameMs>21.5?(this._slow+=t,this._fast=0):this.frameMs<13.5?(this._fast+=t,this._slow=0):(this._slow*=.9,this._fast*=.9),this._slow>1.5&&this.scale>this.profile.minScale?(this.scale=Math.max(this.profile.minScale,this.scale-.08),this._slow=0,!0):this._fast>6&&this.scale<1?(this.scale=Math.min(1,this.scale+.05),this._fast=0,!0):!1):!1}};var li=[["hips",-1,0,0,0],["spine",0,0,.12,0],["chest",1,0,.3,0],["neck",2,0,.525,0],["head",3,0,.625,.012],["upperArmL",2,.178,.455,0],["foreArmL",5,.236,.172,.006],["handL",6,.286,-.078,.032],["upperArmR",2,-.178,.455,0],["foreArmR",8,-.236,.172,.006],["handR",9,-.286,-.078,.032],["thighL",0,.096,-.07,0],["shinL",11,.106,-.505,.006],["footL",12,.106,-.925,-.016],["thighR",0,-.096,-.07,0],["shinR",14,-.106,-.505,.006],["footR",15,-.106,-.925,-.016]],A={};li.forEach((a,t)=>{A[a[0]]=t});var sx=new M(0,.082,.088),jt={jacket:[.72,.15,.04],jacketDark:[.42,.085,.028],tape:[.85,.87,.84],pants:[.045,.055,.08],shoe:[.022,.022,.024],skin:[.62,.43,.34],skinDark:[.46,.29,.22],hair:[.03,.024,.02],lip:[.36,.16,.14],eye:[.05,.035,.03]},po=class{constructor(){this.pos=[],this.col=[],this.si=[],this.sw=[],this.idx=[],this.n=0}vert(t,e,i){this.pos.push(t.x,t.y,t.z),this.col.push(e[0],e[1],e[2]);let n=[0,0,0,0],s=[0,0,0,0],r=0;for(let o=0;o<i.length&&o<4;o++)n[o]=i[o][0],s[o]=i[o][1],r+=i[o][1];for(let o=0;o<4;o++)s[o]/=r||1;return this.si.push(...n),this.sw.push(...s),this.n++}tube(t,e,i=!0,n=!0){let s=new M,r=new M,o=new M,h=new M,c=new M(0,0,1),l=new M(0,1,0),u=[];for(let f=0;f<t.length;f++){let m=t[Math.max(0,f-1)].c,b=t[Math.min(t.length-1,f+1)].c;s.subVectors(b,m).normalize(),t[f].ax?r.copy(t[f].ax):(r.crossVectors(s,c),r.lengthSq()<.04&&r.crossVectors(s,l),r.normalize()),o.crossVectors(r,s).normalize();let g=this.n;for(let p=0;p<e;p++){let x=p/e*Math.PI*2,v=Math.cos(x),w=Math.sin(x),R=t[f].rx,y=t[f].rz;if(t[f].shape){let S=t[f].shape(x,v,w);R*=S,y*=S}h.copy(t[f].c).addScaledVector(r,v*R).addScaledVector(o,w*y);let T=typeof t[f].col=="function"?t[f].col(x,h):t[f].col;this.vert(h,T,t[f].w)}u.push(g)}for(let f=0;f<u.length-1;f++)for(let m=0;m<e;m++){let b=u[f]+m,g=u[f]+(m+1)%e,p=u[f+1]+m,x=u[f+1]+(m+1)%e;this.idx.push(b,p,g,g,p,x)}let d=(f,m,b)=>{let g=typeof m.col=="function"?m.col(0,m.c):m.col,p=this.vert(m.c,g,m.w);for(let x=0;x<e;x++){let v=f+x,w=f+(x+1)%e;b?this.idx.push(p,w,v):this.idx.push(p,v,w)}};i&&d(u[0],t[0],!0),n&&d(u[u.length-1],t[t.length-1],!1)}build(){let t=new he;return t.setAttribute("position",new re(this.pos,3)),t.setAttribute("color",new re(this.col,3)),t.setAttribute("skinIndex",new Vs(this.si,4)),t.setAttribute("skinWeight",new re(this.sw,4)),t.setIndex(this.idx),t.computeVertexNormals(),t}},Fe=(a,t,e)=>new M(a,t,e),Vi=(a,t,e)=>new M().lerpVectors(a,t,e),jd=(a,t,e)=>{let i=Math.max(0,Math.min(1,(e-a)/(t-a)));return i*i*(3-2*i)};function ax(){let a=new po,t=18,e=s=>{let r=li[A[s]];return Fe(r[2],r[3],r[4])},i=[[-.135,.12,.095],[-.085,.165,.116],[-.02,.176,.12],[.05,.166,.114],[.11,.156,.108],[.17,.152,.106],[.24,.164,.114],[.31,.18,.124],[.385,.184,.128],[.445,.186,.118],[.488,.152,.1],[.52,.1,.086],[.552,.08,.08],[.58,.074,.076]],n=s=>{if(s<.02)return[[A.hips,1]];if(s<.14){let r=jd(.02,.14,s);return[[A.hips,1-r],[A.spine,r]]}if(s<.2)return[[A.spine,1]];if(s<.32){let r=jd(.2,.32,s);return[[A.spine,1-r],[A.chest,r]]}return[[A.chest,1]]};a.tube(i.map(([s,r,o])=>{let h=s>-.06,c=h?1.07:1;return{c:Fe(0,s,h?.004:0),rx:r*c,rz:o*c,w:n(s),col:(l,u)=>h?s>.28&&s<.325?jt.tape:Math.abs(u.x)<.012&&u.z>0||s>.5?jt.jacketDark:jt.jacket:jt.pants}}),t),a.tube([{c:Fe(0,.53,.002),rx:.063,rz:.066,col:jt.skin,w:[[A.chest,.6],[A.neck,.4]]},{c:Fe(0,.575,.006),rx:.061,rz:.064,col:jt.skin,w:[[A.neck,1]]},{c:Fe(0,.63,.012),rx:.06,rz:.063,col:jt.skin,w:[[A.neck,.5],[A.head,.5]]},{c:Fe(0,.665,.016),rx:.057,rz:.06,col:jt.skin,w:[[A.head,1]]}],14);for(let s of[1,-1]){let r=s>0?A.upperArmL:A.upperArmR,o=s>0?A.foreArmL:A.foreArmR,h=s>0?A.handL:A.handR,c=e(s>0?"upperArmL":"upperArmR"),l=e(s>0?"foreArmL":"foreArmR"),u=e(s>0?"handL":"handR"),d=Fe(u.x+s*.03,u.y-.182,u.z+.012),f=[];f.push({c:Fe(c.x-s*.012,c.y+.052,0),rx:.036,rz:.04,col:jt.jacket,w:[[A.chest,.65],[r,.35]]}),f.push({c:Fe(c.x+s*.004,c.y+.02,0),rx:.064,rz:.066,col:jt.jacket,w:[[A.chest,.4],[r,.6]]});let m=[[.12,.066],[.3,.062],[.52,.058],[.74,.054],[.9,.052]];for(let[x,v]of m){let w=x>.28&&x<.4;f.push({c:Vi(c,l,x),rx:v,rz:v*1.04,col:w?jt.tape:jt.jacket,w:x>.8?[[r,.75],[o,.25]]:[[r,1]]})}f.push({c:l.clone(),rx:.051,rz:.053,col:jt.jacket,w:[[r,.5],[o,.5]]});let b=[[.12,.052],[.32,.051],[.55,.046],[.78,.041],[.9,.04]];for(let[x,v]of b)f.push({c:Vi(l,u,x),rx:v,rz:v,col:x>.86?jt.jacketDark:jt.jacket,w:x<.2?[[r,.25],[o,.75]]:[[o,1]]});f.push({c:Vi(l,u,.955),rx:.027,rz:.031,col:jt.skin,w:[[o,1]]}),f.push({c:u.clone(),rx:.021,rz:.031,col:jt.skin,w:[[o,.5],[h,.5]]}),f.push({c:Vi(u,d,.3),rx:.017,rz:.044,col:jt.skin,w:[[h,1]]}),f.push({c:Vi(u,d,.55),rx:.015,rz:.046,col:jt.skin,w:[[h,1]]}),f.push({c:Vi(u,d,.8),rx:.012,rz:.04,col:jt.skinDark,w:[[h,1]]}),f.push({c:d.clone(),rx:.007,rz:.022,col:jt.skinDark,w:[[h,1]]}),a.tube(f,12);let g=Vi(u,d,.22).add(Fe(0,0,.034)),p=Vi(u,d,.52).add(Fe(s*.008,0,.066));a.tube([{c:g,rx:.012,rz:.013,col:jt.skin,w:[[h,1]]},{c:Vi(g,p,.6),rx:.011,rz:.011,col:jt.skin,w:[[h,1]]},{c:p,rx:.007,rz:.007,col:jt.skinDark,w:[[h,1]]}],7)}for(let s of[1,-1]){let r=s>0?A.thighL:A.thighR,o=s>0?A.shinL:A.shinR,h=s>0?A.footL:A.footR,c=e(s>0?"thighL":"thighR"),l=e(s>0?"shinL":"shinR"),u=e(s>0?"footL":"footR"),d=[];d.push({c:Fe(c.x,c.y+.045,0),rx:.08,rz:.09,col:jt.pants,w:[[A.hips,.7],[r,.3]]});let f=[[.05,.094,.1],[.25,.09,.096],[.5,.079,.084],[.75,.067,.07],[.92,.06,.062]];for(let[g,p,x]of f)d.push({c:Vi(c,l,g),rx:p,rz:x,col:jt.pants,w:g<.15?[[A.hips,.4],[r,.6]]:g>.85?[[r,.75],[o,.25]]:[[r,1]]});d.push({c:l.clone(),rx:.058,rz:.061,col:jt.pants,w:[[r,.5],[o,.5]]});let m=[[.1,.056,.06],[.28,.057,.066],[.5,.05,.056],[.75,.042,.045],[.93,.038,.04]];for(let[g,p,x]of m)d.push({c:Vi(l,u,g).add(Fe(0,0,g>.15&&g<.6?-.008:0)),rx:p,rz:x,col:jt.pants,w:g<.2?[[r,.25],[o,.75]]:[[o,1]]});d.push({c:u.clone(),rx:.036,rz:.04,col:jt.shoe,w:[[o,.5],[h,.5]]}),a.tube(d,14,!0,!1);let b=u.y-.045;a.tube([{c:Fe(u.x,b+.012,u.z-.068),rx:.03,rz:.03,col:jt.shoe,w:[[h,1]]},{c:Fe(u.x,b+.006,u.z-.035),rx:.042,rz:.046,col:jt.shoe,w:[[h,.8],[o,.2]]},{c:Fe(u.x,b,u.z+.03),rx:.046,rz:.048,col:jt.shoe,w:[[h,1]]},{c:Fe(u.x+s*.004,b-.008,u.z+.1),rx:.049,rz:.036,col:jt.shoe,w:[[h,1]]},{c:Fe(u.x+s*.006,b-.014,u.z+.165),rx:.044,rz:.026,col:jt.shoe,w:[[h,1]]},{c:Fe(u.x+s*.006,b-.018,u.z+.205),rx:.028,rz:.016,col:jt.shoe,w:[[h,1]]}],12)}return a.build()}function rx(){let a=new po,t=Fe(0,.722,.022),e=20,i=26,n=[];for(let c=0;c<=e;c++){let l=c/e*Math.PI,u=Math.cos(l),d=Math.sin(l),f=Math.max(0,-u),m=t.y+u*(u>0?.108:.118),b=.078*(1-.3*f*f),g=.097*(1-.2*f*f),p=t.z+.012*f-.006*Math.max(0,u);n.push({c:Fe(0,m,p),ax:Fe(1,0,0),rx:Math.max(.004,b*d),rz:Math.max(.004,g*d),w:f>.75?[[A.head,.7],[A.neck,.3]]:[[A.head,1]],shape:(x,v,w)=>{let R=Math.max(0,-w),y=1,T=m-t.y;return y+=.2*Math.exp(-Math.pow((T+.022)/.02,2))*Math.pow(R,26)*Math.pow(Math.max(0,1-Math.abs(v)*5),1),y+=.035*Math.exp(-Math.pow((T-.03)/.016,2))*Math.pow(R,3),y-=.03*Math.exp(-Math.pow((T-.008)/.012,2))*Math.pow(R,2)*Math.exp(-Math.pow((Math.abs(v)-.36)/.16,2)),y+=.05*Math.exp(-Math.pow((T+.088)/.022,2))*Math.pow(R,4),y},col:(x,v)=>{let w=v.y-t.y,R=v.x,y=v.z-t.z,T=y>0,S=T?.058+Math.abs(R)*-.25:-.045-Math.max(0,-y)*.2;if(w>S)return jt.hair;if(T){if(Math.abs(w-.01)<.01&&Math.abs(Math.abs(R)-.031)<.014)return jt.eye;if(Math.abs(w-.03)<.006&&Math.abs(Math.abs(R)-.031)<.022)return jt.hair;if(Math.abs(w+.058)<.007&&Math.abs(R)<.024)return jt.lip;if(w<-.02&&w>-.1&&Math.abs(R)>.02)return jt.skinDark}return jt.skin}})}a.tube(n,i,!1,!1);let s=a.build(),r=s.attributes.position,o=s.attributes.color,h=s.attributes.normal;for(let c=0;c<r.count;c++)o.getX(c)<.04&&o.getY(c)<.03&&r.setXYZ(c,r.getX(c)+h.getX(c)*.008,r.getY(c)+h.getY(c)*.008,r.getZ(c)+h.getZ(c)*.008);return s.computeVertexNormals(),s}var mo=class{constructor(){this.group=new ae,this.group.name="survivor",this.bones=li.map(t=>{let e=new es;return e.name=t[0],e}),li.forEach((t,e)=>{let i=this.bones[e];if(t[1]>=0){let n=li[t[1]];i.position.set(t[2]-n[2],t[3]-n[3],t[4]-n[4]),this.bones[t[1]].add(i)}else i.position.set(t[2],t[3],t[4])}),this.root=this.bones[0],this.group.add(this.root),this.group.updateMatrixWorld(!0),this.skeleton=new Xs(this.bones),this.material=new bi({vertexColors:!0,roughness:.62,metalness:0,clearcoat:.28,clearcoatRoughness:.32,envMapIntensity:1}),this.body=new ts(ax(),this.material),this.head=new ts(rx(),this.material);for(let t of[this.body,this.head])t.frustumCulled=!1,t.layers.enable(1),this.group.add(t),t.bind(this.skeleton,new Rt);this.body.visible=!1,this.head.visible=!1,this._v=new M,this.eyeLocal=sx.clone(),this.glb=null}useGlb(t){this.glb=t,this.body.visible=!1,this.head.visible=!1,this.procHead=this.head,this.head={_v:!0,get visible(){return this._v},set visible(e){this._v=e,t.setHeadVisible(e)}},this.material=t.material,this.eyeLocal.set(0,t.eye.y-li[A.head][3],t.eye.z-li[A.head][4]+.06)}retarget(){this.glb&&this.glb.update(this.bones)}bone(t){return this.bones[A[t]]}eyeWorld(t){return t.copy(this.eyeLocal).applyMatrix4(this.bones[A.head].matrixWorld)}};var Yd=1025,ox=1.22,ka=9.81,go=.55;function Gi(a,t,e,i,n,s,r,o,h=-1,c=-1){return{name:a,offset:new M(t,e,i),rest:new M(t,e,i),vol:n/1e3,half:s,cdaP:r,cdaA:o,bone:h,boneB:c,sub:0,depth:-10,world:new M,wasSub:0}}var bo=class a{constructor(t){this.waves=t,this.mass=80.6,this.inertia=new M(11.5,1.7,12.5),this.pos=new M,this.vel=new M,this.quat=new yt,this.angVel=new M,this.prevPos=new M,this.prevQuat=new yt,this.points=[Gi("head",0,.7,.02,5.2,.11,.035,.012),Gi("chest",0,.38,.01,29.7,.15,.13,.03),Gi("pelvis",0,0,0,15.5,.13,.11,.02),Gi("shoulderL",.21,.4,0,3.2,.07,.035,.006),Gi("shoulderR",-.21,.4,0,3.2,.07,.035,.006),Gi("armL",.28,.05,.02,1.8,.05,.04,.005,A.handL),Gi("armR",-.28,.05,.02,1.8,.05,.04,.005,A.handR),Gi("legL",.1,-.33,0,6.5,.09,.07,.008,A.shinL),Gi("legR",-.1,-.33,0,6.5,.09,.07,.008,A.shinR),Gi("footL",.105,-.82,0,3.4,.06,.055,.006,A.footL),Gi("footR",-.105,-.82,0,3.4,.06,.055,.006,A.footR)],this.totalVol=this.points.reduce((e,i)=>e+i.vol,0),this.breathVol=0,this.extForce=new M,this.extTorque=new M,this.wind=new M,this.waterTorque=new M,this.hydroTorque=new M,this.subFrac=0,this.mouthDepth=-1,this.eyeDepth=-1,this.relFlow=new M,this.relSpeed=0,this.dragG=0,this.aer=0,this.turb=0,this.plunge=0,this.surface=si(),this.surfaceH=0,this.splash=0,this.splashPos=new M,this._s=si(),this._w={vx:0,vy:0,vz:0,ax:0,ay:0,az:0},this._r=new M,this._p=new M,this._vp=new M,this._u=new M,this._f=new M,this._F=new M,this._T=new M,this._axis=new M,this._tmp=new M,this._tmp2=new M,this._qi=new yt,this._dq=new yt,this._up=new M,this._mouth=new M(0,.655,.105),this._eye=new M(0,.705,.1)}reset(t,e){let i=this.waves.sample(t,e,this._s);this.pos.set(t,i.h-.62,e),this.vel.set(i.vx,i.vy,i.vz),this.quat.identity(),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat)}setAirway(t,e){this._mouth.copy(t),this._eye.copy(e),this._mouthH=new M(t.x,t.y-.625,t.z-.012),this._eyeH=new M(e.x,e.y-.625,e.z-.012)}pin(t,e,i,n){this.pos.copy(t),this.prevPos.copy(t),this.quat.copy(e),this.prevQuat.copy(e),this.vel.copy(i),this.angVel.copy(n);let s=this._r.copy(this._mouth).applyQuaternion(e).add(t),r=this.waves.sample(s.x,s.z,this.surface);this.surfaceH=r.h,this.mouthDepth=r.h-s.y;let o=this._p.copy(this._eye).applyQuaternion(e).add(t);this.eyeDepth=r.h-o.y,this.subFrac=Math.max(0,Math.min(1,(r.h-t.y+.2)/.7)),this.relFlow.set(0,0,0),this.relSpeed=0,this.dragG=0,this.aer=r.aer,this.turb=r.turb,this.plunge=0,this.splash=0,this.extForce.set(0,0,0),this.extTorque.set(0,0,0)}syncLimbs(t){let e=this._tmp,i=t.group.matrixWorld,n=a._im||(a._im=new Rt);n.copy(i).invert(),this._mouthH||this.setAirway(this._mouth.clone(),this._eye.clone());let s=t.bones[A.head].matrixWorld;e.copy(this._mouthH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._mouth.lerp(e,.5),e.copy(this._eyeH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._eye.lerp(e,.5);for(let r of this.points)r.bone<0||(e.setFromMatrixPosition(t.bones[r.bone].matrixWorld).applyMatrix4(n),e.lengthSq()<1.6&&r.offset.lerp(e,.5))}step(t){let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._F.set(0,0,0),n=this._T.set(0,0,0),s=this._axis.set(0,1,0).applyQuaternion(this.quat),r=0,o=0,h=0,c=0,l=0,u=0;this.relFlow.set(0,0,0),this.splash=0;let d=this._tmp2.set(0,0,0),f=0,m=0;for(let U=0;U<this.points.length;U++){let N=this.points[U],D=this._r.copy(N.offset).applyQuaternion(this.quat),P=this._p.copy(this.pos).add(D);N.world.copy(P);let G=this._vp.copy(this.angVel).cross(D).add(this.vel),V=e.sample(P.x,P.z,this._s),H=V.h-P.y;N.depth=H;let B=Math.max(0,Math.min(1,(H+N.half)/(2*N.half)));if(N.bone<0&&B>.5!=N.wasSub>.5){let K=Math.abs(G.y-V.vy)+.4*Math.hypot(G.x-V.vx,G.z-V.vz);K>this.splash&&(this.splash=K,this.splashPos.set(P.x,V.h,P.z))}N.wasSub=B,N.sub=B;let j=this._f.set(0,0,0),tt=N.vol+(U===1?this.breathVol/1e3:0);if(B>0){let K=Math.max(0,H),J=V.aer*Math.exp(-K/3.5),ot=Yd*(1-.72*J);J>h&&(h=J),V.turb>c&&(c=V.turb),V.plunge>u&&(u=V.plunge);let it=e.bodyFlow(V.x0,V.z0,K,this._w),Mt=Math.exp(-K/80),Q=Math.exp(-K/(2.5+.35*Math.max(0,V.brkH)));it.vx+=V.bvx*(.25*Mt+.75*Q),it.vy+=V.bvy*Mt,it.vz+=V.bvz*(.25*Mt+.75*Q),V.plunge>.01&&(it.vy-=V.plunge*Math.exp(-K/Math.min(8.5,2+.45*Math.max(0,V.brkH)))),e.breakerFlow(P.x,P.y,P.z,V.h,it);let Nt=ot*tt*B;f+=-D.z*Nt*ka,m+=D.x*Nt*ka,j.set(Nt*(1+go)*it.ax,Nt*(ka+(1+go)*(it.ay+V.bay*Mt)),Nt*(1+go)*it.az);let xt=this._u.set(it.vx-G.x,it.vy-G.y,it.vz-G.z),At=xt.dot(s),bt=this._tmp.copy(s).multiplyScalar(At),Vt=this._up.copy(xt).sub(bt),Ct=.5*ot*N.cdaP*B*Vt.length()+24*N.cdaP*B/.1,L=.5*ot*N.cdaA*B*Math.abs(At)+8*B*N.cdaA/.01,C=Vt.x*Ct+bt.x*L,et=Vt.y*Ct+bt.y*L,ht=Vt.z*Ct+bt.z*L;j.x+=C,j.y+=et,j.z+=ht,d.x+=C,d.y+=et,d.z+=ht,r+=tt*B,this.relFlow.addScaledVector(xt,tt*B),l+=tt*B}if(B<1){let K=this._u.set(this.wind.x-G.x,this.wind.y-G.y,this.wind.z-G.z),J=.5*ox*N.cdaP*1.1*(1-B)*K.length();j.addScaledVector(K,J)}i.add(j),n.add(this._tmp.copy(D).cross(j))}o=d.length(),this.hydroTorque.set(f,0,m),this.subFrac=r/this.totalVol,this.aer=h,this.turb=c,this.plunge=u,l>0&&this.relFlow.multiplyScalar(1/l),this.relSpeed=this.relFlow.length(),this.dragG=o/(this.mass*ka);let b=this.mass+go*Yd*r;i.add(this.extForce),i.y-=this.mass*ka,this.vel.addScaledVector(i,t/b);let g=this.vel.length();g>45&&this.vel.multiplyScalar(45/g),this.pos.addScaledVector(this.vel,t),this.waterTorque.copy(n),n.add(this.extTorque);let p=this._qi.copy(this.quat).invert(),x=this._tmp.copy(this.angVel).applyQuaternion(p),v=this._tmp2.copy(n).applyQuaternion(p),w=1+.6*this.subFrac,R=this.inertia.x*w,y=this.inertia.y*w,T=this.inertia.z*w,S=(v.x-(T-y)*x.y*x.z)/R,_=(v.y-(R-T)*x.z*x.x)/y,E=(v.z-(y-R)*x.x*x.y)/T;x.x+=S*t,x.y+=_*t,x.z+=E*t;let I=Math.exp(-(.25+1.1*this.subFrac)*t);x.multiplyScalar(I);let W=x.length();W>14&&x.multiplyScalar(14/W),this.angVel.copy(x).applyQuaternion(this.quat);let Y=this.angVel.length()*t;Y>1e-7&&(this._dq.setFromAxisAngle(this._r.copy(this.angVel).normalize(),Y),this.quat.premultiply(this._dq).normalize());let k=this._r.copy(this._mouth).applyQuaternion(this.quat).add(this.pos),z=e.sample(k.x,k.z,this.surface);this.surfaceH=z.h,this.mouthDepth=z.h-k.y;let O=this._p.copy(this._eye).applyQuaternion(this.quat).add(this.pos);this.eyeDepth=z.h-O.y}};var vo=class{constructor(){this.reset(),this.events=[]}reset(){this.oxygen=100,this.stamina=100,this.temp=37,this.fatigue=0,this.blackout=0,this.alive=!0,this.cause="",this.timeAlive=0,this.breathPhase=0,this.lung=.6,this.breathRate=.3,this.exertion=0,this.gaspTimer=0,this.submergedTime=0,this.wasUnder=!1,this.swallow=0,this.eff=1,this.condition=1,this.shiver=0,this.inhaling=!1,this.lungAtDive=.6}update(t,e){if(!this.alive)return;this.timeAlive+=t;let i=e.mouthUnder,n=e.effort;if(this.exertion+=(ft(n*.6+(100-this.stamina)/160+(100-this.oxygen)/120)-this.exertion)*(1-Math.exp(-t*.8)),i)this.submergedTime+=t,this.oxygen-=t*(2.3+2.4*n+1.5*e.turb)*(1+.5*this.swallow)*(1.3-.45*this.lungAtDive),this.wasUnder||(this.inhaling&&e.sudden&&(this.swallow=Math.min(1,this.swallow+.45),this.oxygen-=6),this.lungAtDive=this.lung,this.events.push({type:"submerge",lung:this.lung})),this.lung=Math.max(.12,this.lung-t*(.025+.03*n));else{if(this.wasUnder){let x=ft((100-this.oxygen)/60+this.submergedTime/12);this.gaspTimer=1.5+5.5*x,this.events.push({type:"surface",need:x,time:this.submergedTime}),this.breathPhase=0,this.submergedTime=0}let u=this.gaspTimer>0?1:0;this.gaspTimer=Math.max(0,this.gaspTimer-t),this.oxygen+=t*(15+13*u)*(1-.6*this.swallow),this.swallow=Math.max(0,this.swallow-t*.12);let d=lt(.26,.95,ft(this.exertion*.9+u*.55));this.breathRate+=(d-this.breathRate)*(1-Math.exp(-t*1.4));let f=this.stamina<25?1+.35*Math.sin(this.timeAlive*2.7)*Math.sin(this.timeAlive*1.3):1,m=this.breathPhase;this.breathPhase+=t*this.breathRate*f,this.breathPhase>=1&&(this.breathPhase-=1);let b=this.breathPhase<.4;b&&!this.inhaling&&this.events.push({type:"inhale",strength:ft(.25+this.exertion*.8+u*.6),gasp:u>0&&m>this.breathPhase?1:u}),!b&&this.inhaling&&this.events.push({type:"exhale",strength:ft(.2+this.exertion*.7+u*.4),cough:this.swallow>.25?1:0}),this.inhaling=b;let g=lt(.45,.95,ft(this.exertion+u)),p=b?.45+.5*g*(this.breathPhase/.4):.95*g-(.95*g-.4)*((this.breathPhase-.4)/.6)+0;this.lung+=(Si(p,.3,1)-this.lung)*(1-Math.exp(-t*9)),e.brace>.5&&(this.lung+=(1-this.lung)*(1-Math.exp(-t*5)))}this.wasUnder=i,this.oxygen=Si(this.oxygen,0,100);let s=ze(36,32.5,this.temp),r=1-ft((36-this.temp)/3.5),o=100-this.fatigue*.62,h=n>.42?(n-.42)*7:0,c=i?0:n<.42?(3.4-n*4)*(.45+.55*r)*(1-this.fatigue/170):0;this.stamina=Si(this.stamina+(c-h)*t,0,o),this.fatigue=Si(this.fatigue+t*(.035+.16*n),0,100);let l=.0042*(1+.45*n)*(.6+.4*e.subFrac)*(1+.3*e.storm);this.temp-=l*t,this.shiver=ft((36.2-this.temp)/1.6)*(1-ft((33-this.temp)/1.5)),this.oxygen<=.01?this.blackout+=t/11:this.blackout-=t/3.5,this.temp<31.5&&(this.blackout+=t/40),this.blackout=ft(this.blackout),this.blackout>=1&&(this.alive=!1,this.cause=this.temp<31.5&&this.oxygen>5?"cold":"drown",this.events.push({type:"dead",cause:this.cause})),this.eff=lt(.32,1,ze(0,38,this.stamina))*(.45+.55*r)*(1-.6*this.blackout),this.condition=ft(Math.min(this.oxygen/100+.25,1)*(.4+.6*this.stamina/100)*(.35+.65*r)*(1-this.blackout))}};var rs=new M(0,1,0),xo=class{constructor(t,e,i){this.body=t,this.survival=e,this.input=i,this.yaw=Math.PI,this.pitch=0,this.control=1,this.impact=0,this.impactPeak=0,this.moveAmt=0,this.effort=0,this.swimBlend=0,this.underSwim=0,this.crawlBlend=0,this.diveBlend=0,this.riseBlend=0,this.swimHeld=!1,this.diveHeld=!1,this.upHeld=!1,this.sprintHeld=!1,this.diveTime=0,this.moveDir=new M(0,0,1),this.heading=new M(0,0,1),this.facing=new M(0,0,1),this.recover=0,this.strokePhase=0,this.brace=0,this.air=0,this.grab=null,this.fear=0,this.waveMode=!1,this.waving=!1,this.waveBlend=0,this.cling=!1,this.faceDir=null,this.struggleW=0,this.tumble=0,this.events=[],this._lastImpact=-10,this._time=0,this._fwd=new M,this._right=new M,this._dir=new M,this._x=new M,this._y=new M,this._z=new M,this._m=new Rt,this._qt=new yt,this._qe=new yt,this._ax=new M,this._h=new M}fixedUpdate(t){let e=this.body,i=this.survival,n=this.input;this._time+=t;let s=e.dragG,r=s>this.impact+.25;this.impact=s>this.impact?lt(this.impact,s,1-Math.exp(-t*30)):this.impact*Math.exp(-t*2.2),this.impactPeak=Math.max(this.impactPeak*Math.exp(-t*1.2),s),s>1.4&&r&&this._time-this._lastImpact>.8&&(this._lastImpact=this._time,this.events.push({type:"impact",strength:s,dir:e.relFlow.clone().normalize(),aer:e.aer}));let o=ft(1-ze(.9,3.2,this.impact)-.75*e.aer-.55*e.turb-.9*this.air),h=o<this.control?14:.55+.9*i.eff;this.control+=(Math.max(.04,o)-this.control)*(1-Math.exp(-t*h));let c=this.control*(i.alive?1:0)*(1-.8*i.blackout);this.tumble+=(ft(e.angVel.length()/3.5)*(1-c*.6)-this.tumble)*(1-Math.exp(-t*3)),this.recover=Math.max(0,this.recover-t);let l=n.enabled?n.axisX():0,u=n.enabled?n.axisZ():0,d=n.enabled&&n.swim(),f=n.enabled&&n.dive();this.waving=!!this.waveMode&&f&&e.mouthDepth<.45;let m=f&&!this.waveMode,b=d&&!this.waving;this.waveBlend+=((this.waving?1:0)-this.waveBlend)*(1-Math.exp(-t*6));let g=b&&!this.cling;this.swimHeld=b,this.diveHeld=m,this.sprintHeld=g,this.upHeld=g&&e.mouthDepth>.45&&!m,this.diveTime=m?this.diveTime+t:0;let p=this._fwd.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),x=this._right.set(-p.z,0,p.x);this.facing.copy(p);let v=this._h.copy(p).multiplyScalar(u).addScaledVector(x,l),w=Math.min(1,v.length());w>.05?v.multiplyScalar(1/v.length()):(v.copy(p),w=0),this.cling&&this.faceDir&&(v.copy(this.faceDir),w=0),this.heading.lerp(v,1-Math.exp(-t*(w>0||g||m||this.fp||this.cling?7:1.5))).normalize();let R=e.mouthDepth>.45,y=Math.max(0,e.mouthDepth);this.underSwim+=((R||m&&e.mouthDepth>.1?1:0)-this.underSwim)*(1-Math.exp(-t*5)),this.diveBlend+=((m?1:0)-this.diveBlend)*(1-Math.exp(-t*(m?7:3.5)));let T=R&&!m;this.riseBlend+=((T?1:0)-this.riseBlend)*(1-Math.exp(-t*4));let S=this._dir.set(0,0,0),_=0,E=0;if(m){let tt=.95*ft((6.5-y)/2.5);S.copy(this.heading).multiplyScalar(.55+.45*(1-tt)).addScaledVector(rs,-tt).normalize(),_=1,E=g?360:270}else R?g?(S.copy(this.heading).multiplyScalar(w>0?.75:.35).addScaledVector(rs,.9).normalize(),_=1,E=360):w>0&&(S.copy(this.heading).multiplyScalar(w).addScaledVector(rs,.45*Math.min(1,y/.8)).normalize(),_=w,E=170):g?(S.copy(this.heading),_=1,E=325):w>0&&(S.copy(this.heading),_=w,E=150);_>.01&&this.moveDir.lerp(S,1-Math.exp(-t*6)).normalize(),this.moveAmt+=(_-this.moveAmt)*(1-Math.exp(-t*5));let I=i.eff*c,W=Math.min(1,e.subFrac*1.25),Y=e.extForce.set(0,0,0),k=0;if(_>.01){let tt=1+.42*this.swimBlend*Math.sin(2*this.strokePhase)+.38*this.underSwim*Math.sin(this.strokePhase-1),K=R||m?1:ft(1+(e.mouthDepth+.3+.06*this.crawlBlend)*3.5);Y.addScaledVector(S,E*I*W*_*tt*K*(this.grab?.2:1)),k+=(E>200?.8:.45)*_,m&&this.diveTime<1.1&&y<1.2&&(Y.y-=260*I*Math.sin(Math.min(1,this.diveTime/1.1)*Math.PI))}let z=.2+.04*this.crawlBlend;if(!R&&e.mouthDepth<-z&&this.air<.3&&e.pos.y-e.surfaceH<1&&(Y.y-=Math.min(520,(-e.mouthDepth-z)*1500)),!R&&this.air<.3&&this.swimBlend>.05&&e.points[2].sub!==void 0){let tt=e.points[2].depth,K=.26+.06*this.crawlBlend;tt<K&&(Y.y-=Math.min(850,(K-tt)*2300)*Math.min(1,this.swimBlend*1.5))}if(R&&!m&&!g&&(Y.y+=165*I*W,k+=.5),!R&&!m){let tt=e.vel.y-e.surface.vy,K=.06+.07*ft(i.stamina/60)+.06*this.crawlBlend+.04*this.swimBlend*(1-this.crawlBlend)+(this.fp?.05*this.crawlBlend:0)+.03*Math.max(0,1-2.2*this.swimBlend),J=Math.max(0,Math.min(210+110*this.crawlBlend+55*this.fear,(e.mouthDepth+K+.035*this.fear)*1e3-tt*140))*I*W*(1+.45*Math.sin(2*this.strokePhase))*(this.waving?.5:1);this.struggleW>.05&&(J=J*(1-.65*this.struggleW)+175*this.struggleW*I*W*Math.max(0,Math.sin(this.strokePhase))),Y.y+=J,k+=.34*Math.min(1,J/100)*(1-this.crawlBlend)+.08+.09*this.fear*(1-this.crawlBlend)}if(this.grab){let tt=this.grab.x-e.pos.x,K=this.grab.z-e.pos.z,J=Math.hypot(tt,K);if(J<4.5){let ot=Math.min(280,J*230)*c;Y.x+=tt/(J+.001)*ot,Y.z+=K/(J+.001)*ot,Y.y+=70*W}}this.cling&&(k=this.squeeze?.5:Math.min(k,.14)),this.waving&&(k=Math.max(k,.75)),this.effort+=(k-this.effort)*(1-Math.exp(-t*6));let O=!R&&!m&&_>.15?g?1:.5*_:0;this.crawlBlend+=((g&&!R&&!m?1:0)-this.crawlBlend)*(1-Math.exp(-t*4)),this.swimBlend+=(O-this.swimBlend)*(1-Math.exp(-t*(O>this.swimBlend?3.2:2.2)));let U=this._y,N=this._z,D=this._x,P=this._ax.set(this.heading.x,0,this.heading.z);P.lengthSq()<.01?P.copy(p):P.normalize();let G=this._time;if(m||R&&_>.1)U.copy(S),N.copy(rs).multiplyScalar(-(1-Math.abs(U.y))).addScaledVector(P,U.y),N.addScaledVector(U,-N.dot(U));else if(R)U.copy(rs).addScaledVector(P,.12),U.normalize(),N.copy(P),N.addScaledVector(U,-N.dot(U));else{let tt=this.swimBlend;U.copy(rs).multiplyScalar(1-tt*.5).addScaledVector(P,tt);let K=1-tt,J=Math.max(0,1-2.2*tt);U.addScaledVector(P,K*(.13+.12*J+.07*Math.sin(G*.83)*Math.sin(G*.31))),U.addScaledVector(x,K*.08*Math.sin(G*.57+1.3)*Math.sin(G*.23+.4)),U.normalize(),N.copy(P).multiplyScalar(1-tt*.9).addScaledVector(rs,-tt*.9),N.addScaledVector(U,-N.dot(U))}N.lengthSq()<1e-4&&N.copy(P).addScaledVector(U,-P.dot(U)),N.lengthSq()<1e-4&&N.copy(x),N.normalize(),D.crossVectors(U,N).normalize(),this._m.makeBasis(D,U,N),this._qt.setFromRotationMatrix(this._m);let V=this._qe.copy(e.quat).invert().premultiply(this._qt);V.w<0&&(V.x=-V.x,V.y=-V.y,V.z=-V.z,V.w=-V.w);let H=2*Math.acos(Math.min(1,V.w)),B=e.extTorque.set(0,0,0);if(H>1e-4){let tt=Math.sqrt(Math.max(1e-9,1-V.w*V.w));this._ax.set(V.x/tt,V.y/tt,V.z/tt);let K=Math.max(this.swimBlend,this.underSwim,this.diveBlend),J=m||R?1+2.2*ft((H-.5)/.9):1,ot=this.cling?.6:1,it=this.cling?1:1-.16*this.fear*(1-K),Mt=this.cling||m||R?0:Math.max(0,1-2.2*K),Q=(72+70*K+120*Mt)*I*J*ot*it,Nt=(21+13*K+16*Mt)*I*(this.cling?.55:1);B.copy(this._ax).multiplyScalar(Q*Math.min(H,1.4)).addScaledVector(e.angVel,-Nt);let xt=B.length(),At=(130+110*K+130*Mt)*I*J;xt>At&&B.multiplyScalar(At/xt)}let j=Math.max(this.swimBlend,m?1:0,R&&_>.1?this.underSwim:0,!this.cling&&!R&&!m?.85*Math.max(0,1-2.2*this.swimBlend):0);j>.02&&B.addScaledVector(e.hydroTorque,-j*Math.min(1,I*1.5)),this.swimBlend>.2&&(this._ax.set(0,1,0).applyQuaternion(e.quat),B.addScaledVector(this._ax,(20+22*this.crawlBlend)*this.swimBlend*I*Math.sin(this.strokePhase)))}};var os=li.length,ea=Math.PI*2,Kd=new M(0,-1,0),zn=["hang","float","tread","paddle","swim","dive","under","rise","struggle","tumble","recover","exhaust","brace","flail","aboard","cling","wave"],hx={hang:.45,float:1.2,tread:1.5,paddle:1.35,swim:1.8,dive:1.5,under:1.5,rise:2.3,struggle:2.4,tumble:.45,recover:1.5,exhaust:.7,brace:.85,flail:2.8,aboard:.5,cling:.9,wave:1.6};function Z(a,t,e,i,n){let s=t*3;a[s]=e,a[s+1]=i,a[s+2]=n}var Pc=(a,t,e)=>Math.exp(-Math.pow((a-t)/e,2)),ui=a=>(a=ft(a),a*a*(3-2*a)),_o=a=>(a%ea+ea)%ea/ea;function cx(a,t,e,i){let n=e;Z(a,A.spine,.05+.04*Math.sin(t*2)*n,.05*Math.sin(t)*n,.04*Math.sin(t+.6)*n),Z(a,A.chest,-.05,-.06*Math.sin(t)*n,0),Z(a,A.neck,-.14,0,0),Z(a,A.head,-.22-.04*Math.sin(t*2)*n,0,0);for(let s of[1,-1]){let r=s>0,o=r?0:.55,h=Math.sin(t+o),c=Math.cos(t+o);Z(a,r?A.upperArmL:A.upperArmR,-.34+.1*c*n,-s*.34*h*n,s*lt(1.4,.95,i)),Z(a,r?A.foreArmL:A.foreArmR,lt(-.42,-.8,i)-.24*c*n,0,0),Z(a,r?A.handL:A.handR,.32*h*n,0,s*.2*c*n);let l=t+(r?0:Math.PI);Z(a,r?A.thighL:A.thighR,lt(-.92,-.38,i)+.22*Math.sin(l)*n,s*.28*Math.cos(l)*n,s*(lt(.5,.24,i)+.12*Math.cos(l)*n)),Z(a,r?A.shinL:A.shinR,lt(1.42,.62,i)+.46*Math.sin(l-1.2)*n,0,0),Z(a,r?A.footL:A.footR,.22+.3*Math.sin(l-1.8)*n,0,0)}}function lx(a,t){let e=_o(t),i,n,s;if(e<.22)i=-2.25,n=.1,s=-.1;else if(e<.55){let u=ui((e-.22)/.33);i=lt(-2.25,-1.25,u),n=lt(.1,.95,u),s=lt(-.1,-1.35,u)}else if(e<.72){let u=ui((e-.55)/.17);i=lt(-1.25,-.8,u),n=lt(.95,.28,u),s=lt(-1.35,-2.1,u)}else{let u=ui((e-.72)/.28);i=lt(-.8,-2.25,u),n=lt(.28,.1,u),s=lt(-2.1,-.1,u)}let r,o,h,c;if(e<.5)r=.06,o=.07,h=.1,c=.75;else if(e<.74){let u=ui((e-.5)/.24);r=lt(.06,-.78,u),o=lt(.07,.46,u),h=lt(.1,1.9,u),c=lt(.75,-.15,u)}else if(e<.88){let u=ui((e-.74)/.14);r=lt(-.78,-.18,u),o=lt(.46,.5,u),h=lt(1.9,.3,u),c=lt(-.15,.3,u)}else{let u=ui((e-.88)/.12);r=lt(-.18,.06,u),o=lt(.5,.07,u),h=lt(.3,.1,u),c=lt(.3,.75,u)}let l=Pc(e,.5,.14);Z(a,A.spine,-.08-.06*l,0,0),Z(a,A.chest,-.1-.06*l,0,0),Z(a,A.neck,-.28,0,0),Z(a,A.head,-.36-.05*l,0,0);for(let u of[1,-1]){let d=u>0;Z(a,d?A.upperArmL:A.upperArmR,i,0,u*n),Z(a,d?A.foreArmL:A.foreArmR,s,0,0),Z(a,d?A.handL:A.handR,.12,0,0),Z(a,d?A.thighL:A.thighR,r,0,u*o),Z(a,d?A.shinL:A.shinR,h,0,0),Z(a,d?A.footL:A.footR,c,0,0)}}function ux(a,t){let e=Math.sin(t),i=Math.sin(t*2);Z(a,A.spine,-.1+.06*i,.2*e,.08*e),Z(a,A.chest,-.12,.36*e,.1*e),Z(a,A.neck,-.36,-.24*e,-.03*e),Z(a,A.head,-.4+.04*i,-.24*e,-.04*e);for(let n of[1,-1]){let s=n>0,r=_o(t+(s?0:Math.PI)),o,h,c,l;if(r<.1){let f=ui(r/.1);o=lt(-2.16,-2.4,f),h=lt(-.34,-.1,f),c=.16,l=.14}else if(r<.24){let f=ui((r-.1)/.14);o=lt(-2.4,-2.12,f),h=lt(-.1,-.95,f),c=lt(.16,.24,f),l=lt(.14,.34,f)}else if(r<.44){let f=ui((r-.24)/.2);o=lt(-2.12,-.95,f),h=lt(-.95,-1.45,Math.sin(f*Math.PI*.5))+.25*f*f,c=lt(.24,.1,f),l=.34}else if(r<.58){let f=ui((r-.44)/.14);o=lt(-.95,.3,f),h=lt(-1.2,-.22,f),c=lt(.1,.22,f),l=lt(.34,-.1,f)}else{let f=(r-.58)/.42,m=f*f*(1.6-.6*f),b=Math.sin(Math.pow(f,.85)*Math.PI);o=lt(.3,Math.PI*2-2.16,m),h=-.22-.62*Math.pow(b,.9),c=.22+.36*b,l=-.2*b}Z(a,s?A.upperArmL:A.upperArmR,o,0,n*c),Z(a,s?A.foreArmL:A.foreArmR,h,0,0),Z(a,s?A.handL:A.handR,l,0,0);let u=t*3+(s?0:Math.PI),d=Math.sin(u);Z(a,s?A.thighL:A.thighR,.05+.21*d,0,n*.05),Z(a,s?A.shinL:A.shinR,.1+.5*Math.max(0,Math.sin(u+1.1)),0,0),Z(a,s?A.footL:A.footR,.8+.12*Math.sin(u+2),0,0)}}function Qd(a,t,e){let i=_o(t),n=Math.sin(i*ea-1.2);Z(a,A.spine,-.05+.09*n+.42*e,0,0),Z(a,A.chest,-.06-.07*n+.3*e,0,0),Z(a,A.neck,-.2+.42*e,0,0),Z(a,A.head,-.3+.05*n+.45*e,0,0);let s,r,o;if(i<.36){let l=i/.36,u=ui(l);s=lt(-(Math.PI*.94),-.2,u),r=.14+.92*Math.sin(l*Math.PI),o=-.4*Math.sin(l*Math.PI)}else if(i<.52)s=-.2,r=.14,o=-.05;else{let l=(i-.52)/.48,u=ui(l);s=lt(-.2,-(Math.PI*.94),u),r=.14+.1*Math.sin(l*Math.PI),o=-1.85*Math.sin(l*Math.PI)}s=lt(s,-2.75,e),r=lt(r,.12,e),o=lt(o,-.1,e);let h=Pc(i,.62,.1),c=Pc(i,.78,.07);for(let l of[1,-1]){let u=l>0;Z(a,u?A.upperArmL:A.upperArmR,s,0,l*r),Z(a,u?A.foreArmL:A.foreArmR,o,0,0),Z(a,u?A.handL:A.handR,0,0,0),Z(a,u?A.thighL:A.thighR,lt(-.08-.62*h+.14*c,-1,e),0,l*(.07+.42*h*(1-e))),Z(a,u?A.shinL:A.shinR,lt(.12+1.35*h,.1,e),0,0),Z(a,u?A.footL:A.footR,.75-.5*h*(1-e),0,0)}}function dx(a,t,e,i){let n=(s,r)=>(ni(e*r,s)-.5)*i;Z(a,A.spine,-.08,.06*Math.sin(t),.05*Math.sin(t*.7)*i),Z(a,A.chest,-.12,.1*Math.sin(t),0),Z(a,A.neck,-.34,.1*Math.sin(t*.37)*i,0),Z(a,A.head,-.42+n(1,1.3)*.12,.16*Math.sin(t*.37+.6)*i,0);for(let s of[1,-1]){let r=s>0,o=t+(r?0:Math.PI),h=.5+.5*Math.sin(o),c=Math.max(0,-Math.cos(o)),l=Math.max(0,Math.cos(o));Z(a,r?A.upperArmL:A.upperArmR,lt(-.55,-2.8,h)+n(r?5:7,1.1)*.3,s*.1*Math.cos(o)*i,s*(.22+.24*(1-h)+.1*i)),Z(a,r?A.foreArmL:A.foreArmR,-.25-.45*c-1.05*l,0,0),Z(a,r?A.handL:A.handR,.35*c,0,s*.1);let u=t*2+(r?0:Math.PI)+n(r?11:13,.8)*1.2;Z(a,r?A.thighL:A.thighR,-.14+.44*Math.sin(u),0,s*(.1+.08*i)),Z(a,r?A.shinL:A.shinR,.26+.58*Math.max(0,Math.sin(u+.9)),0,0),Z(a,r?A.footL:A.footR,.72,0,0)}}function fx(a,t){let e=Math.sin(t),i=Math.cos(t);Z(a,A.spine,-.06,.06*e,.05*e),Z(a,A.chest,-.1,.08*e,0),Z(a,A.neck,-.2,0,0),Z(a,A.head,-.3,.1*e,0);for(let n of[1,-1]){let s=n>0;Z(a,s?A.upperArmL:A.upperArmR,-2.72+.1*i,0,n*.3+.42*e),Z(a,s?A.foreArmL:A.foreArmR,-.22-.18*Math.max(0,e*n),0,0),Z(a,s?A.handL:A.handR,.1,0,n*.2);let r=t*1.5+(s?0:Math.PI),o=Math.sin(r);Z(a,s?A.thighL:A.thighR,-.25+.4*o,0,n*.1),Z(a,s?A.shinL:A.shinR,.4+.45*Math.max(0,Math.sin(r-1)),0,0),Z(a,s?A.footL:A.footR,.6+.1*o,0,0)}}function px(a,t,e,i=0){let n=Math.sin(t),s=Math.sin(t*2);Z(a,A.spine,.06+.07*s*e,.15*n*e,.09*n*e),Z(a,A.chest,-.02,.17*n*e,.05*n*e),Z(a,A.neck,-.1,-.2*n*e,0),Z(a,A.head,-.14-.06*s*e,-.16*n*e,.04*n*e);for(let r of[1,-1]){let o=r>0,h=_o(t+(o?0:Math.PI)),c,l,u,d,f=lt(-1.5,-2.45,e)-.12*i,m=lt(.4,-.1,i),b=lt(-.5,-.3,i);if(h<.3){let x=ui(h/.3);c=lt(-.4,f,x),l=lt(-1.8,b,x),u=lt(.26,m,x),d=lt(.1,-.25,x)}else if(h<.42){let x=(h-.3)/.12,v=x*x;c=lt(f,-1.42,v),l=lt(b,-.2,v),u=m,d=lt(-.25,.2,v)}else if(h<.8){let x=ui((h-.42)/.38);c=lt(-1.42,-.08,x),l=-.2-.8*Math.sin(x*Math.PI)-.1*x,u=lt(m,.2,x),d=.3}else{let x=ui((h-.8)/.2);c=lt(-.08,-.4,x),l=lt(-.3,-1.8,x),u=lt(.2,.26,x),d=lt(.3,.1,x)}Z(a,o?A.upperArmL:A.upperArmR,c,0,r*u),Z(a,o?A.foreArmL:A.foreArmR,l,0,0),Z(a,o?A.handL:A.handR,d,0,0);let g=t*1.5+(o?0:Math.PI),p=Math.sin(g);Z(a,o?A.thighL:A.thighR,-.2+.44*p*e,0,r*.1),Z(a,o?A.shinL:A.shinR,.38+.5*Math.max(0,Math.sin(g-1))*e,0,0),Z(a,o?A.footL:A.footR,.6+.12*p,0,0)}}function mx(a,t,e){let i=(o,h)=>ni(e*h,o)-.5,n=Math.sin(t),s=Math.max(0,n),r=Math.max(0,-n);Z(a,A.spine,-.1-.06*s,.07*Math.sin(t*.5),.05*Math.sin(t*.7)),Z(a,A.chest,-.12-.04*s,.05*Math.sin(t*.5+.8),0),Z(a,A.neck,-.3,.1*Math.sin(t*.37),0),Z(a,A.head,-.4+.08*r+i(1,1.3)*.1,.16*Math.sin(t*.37+.6),.05*Math.sin(t*.53));for(let o of[1,-1]){let h=o>0,c=h?0:.45,l=Math.sin(t+c),u=Math.max(0,l),d=Math.max(0,-l);Z(a,h?A.upperArmL:A.upperArmR,-.24+.18*l+i(h?3:4,1.7)*.2,o*.14*Math.cos(t+c),o*(1.24-.56*(.5+.5*l))),Z(a,h?A.foreArmL:A.foreArmR,-.26-.42*d,0,0),Z(a,h?A.handL:A.handR,.42*u,0,o*.1);let f=t*.6+(h?0:2.1);Z(a,h?A.thighL:A.thighR,-.24+.18*Math.sin(f),0,o*.16),Z(a,h?A.shinL:A.shinR,.46+.26*Math.sin(f+1),0,0),Z(a,h?A.footL:A.footR,.55,0,0)}}function gx(a,t){let e=Math.sin(t),i=Math.sin(t*.5+1),n=Math.max(0,Math.sin(t*.31-.4));Z(a,A.spine,.14,.05*e,.04*i),Z(a,A.chest,.16,.04*e,0),Z(a,A.neck,.2+.1*i-.5*n,.06*e,0),Z(a,A.head,.16+.16*i-.46*n,.08*e,.05*i);for(let s of[1,-1]){let r=s>0;Z(a,r?A.upperArmL:A.upperArmR,-.25,-s*.2,s*1.15),Z(a,r?A.foreArmL:A.foreArmR,-1.45,0,0),Z(a,r?A.handL:A.handR,.45,0,-s*.2),Z(a,r?A.thighL:A.thighR,(r?-.3:-.14)+.1*Math.sin(t+(r?0:1.3)),0,s*.05),Z(a,r?A.shinL:A.shinR,(r?.52:.3)+.14*Math.sin(t+(r?.8:2.2)),0,0),Z(a,r?A.footL:A.footR,.8,0,0)}}function bx(a,t,e,i){let n=Math.sin(t),s=1-i,r=(ni(e*.33,31)-.5)*s,o=.5+.5*Math.sin(e*.47+1.3*Math.sin(e*.21));Z(a,A.spine,-.06*s+.14*i+.02*n,.04,.05),Z(a,A.chest,-.08*s+.12*i+.02*n,.1,.04),Z(a,A.neck,(-.24-.14*o)*s+.26*i,-.16+.22*r,0),Z(a,A.head,(-.28-.16*o)*s+.3*i,-.24+.34*r,-.1),Z(a,A.upperArmL,.28,0,2.03),Z(a,A.foreArmL,-1.12-.2*i,0,0),Z(a,A.handL,.35,0,0),Z(a,A.upperArmR,-2.62,.75,0),Z(a,A.foreArmR,-.26-.5*i,0,0),Z(a,A.handR,.3,0,0),Z(a,A.thighL,-.75-.25*i,0,.55),Z(a,A.shinL,1.3+.25*i,0,0),Z(a,A.footL,.55,0,0),Z(a,A.thighR,.1-.25*i,0,-.42),Z(a,A.shinR,.32+.45*i,0,0),Z(a,A.footR,.8,0,0)}function vx(a,t,e){let i=Math.sin(t),n=Math.sin(t*.5+.7);Z(a,A.spine,.1+.03*i,0,.03*n),Z(a,A.chest,.04,0,0),Z(a,A.neck,-.2+.06*n,0,0),Z(a,A.head,-.3+.08*n,0,0);for(let s of[1,-1]){let r=s>0,o=t+(r?0:Math.PI);Z(a,r?A.upperArmL:A.upperArmR,-2.05,0,s*.32),Z(a,r?A.foreArmL:A.foreArmR,-.75,0,0),Z(a,r?A.handL:A.handR,.3,0,0),Z(a,r?A.thighL:A.thighR,-.22+.2*Math.sin(o),0,s*.12),Z(a,r?A.shinL:A.shinR,.5+.26*Math.sin(o-1.1),0,0),Z(a,r?A.footL:A.footR,.55,0,0)}}function xx(a,t){let e=(i,n)=>ni(t*n,i)-.5;Z(a,A.spine,.2+e(1,.7)*.34,e(2,.6)*.3,e(3,.5)*.22),Z(a,A.chest,.14+e(4,.8)*.26,e(5,.6)*.26,0),Z(a,A.neck,.16+e(6,.9)*.3,e(7,.7)*.36,0),Z(a,A.head,.1+e(8,1)*.3,e(9,.8)*.4,e(10,.6)*.18);for(let i of[1,-1]){let n=i>0,s=n?20:40;Z(a,n?A.upperArmL:A.upperArmR,-.7+e(s,.9)*1.3,i*e(s+1,.7)*.6,i*(.8+e(s+2,.8)*.7)),Z(a,n?A.foreArmL:A.foreArmR,-.85+e(s+3,1.1)*1,0,0),Z(a,n?A.handL:A.handR,e(s+4,1.3)*.6,0,e(s+5,1.2)*.4),Z(a,n?A.thighL:A.thighR,-.6+e(s+6,.8)*1,0,i*(.24+e(s+7,.7)*.36)),Z(a,n?A.shinL:A.shinR,.95+e(s+8,1)*.9,0,0),Z(a,n?A.footL:A.footR,.5+e(s+9,1.1)*.4,0,0)}}function yx(a,t,e){Z(a,A.spine,-.08-.08*e,0,0),Z(a,A.chest,-.1-.1*e,0,0),Z(a,A.neck,-.26,0,0),Z(a,A.head,-.4-.05*e,0,0);for(let i of[1,-1]){let n=i>0,s=Math.sin(t+(n?0:.5));Z(a,n?A.upperArmL:A.upperArmR,-.3+.12*s,-i*.3*s,i*(1.05+.1*e)),Z(a,n?A.foreArmL:A.foreArmR,-.6-.25*s,0,0),Z(a,n?A.handL:A.handR,.25*s,0,0);let r=t+(n?0:Math.PI);Z(a,n?A.thighL:A.thighR,-.7+.26*Math.sin(r),i*.2*Math.cos(r),i*.4),Z(a,n?A.shinL:A.shinR,1.15+.4*Math.sin(r-1.1),0,0),Z(a,n?A.footL:A.footR,.35,0,0)}}function _x(a,t){let e=Math.sin(t*.5);Z(a,A.spine,-.06,0,.04*e),Z(a,A.chest,-.1,0,0),Z(a,A.neck,-.28,.12*e,0),Z(a,A.head,-.42,.1*e,.08*e);for(let i of[1,-1]){let n=i>0;Z(a,n?A.upperArmL:A.upperArmR,-.18+.08*e,i*.12*e,i*1.02),Z(a,n?A.foreArmL:A.foreArmR,-.55-.12*e,0,0),Z(a,n?A.handL:A.handR,.15,0,0),Z(a,n?A.thighL:A.thighR,-.14+.09*Math.sin(t*.5+(n?0:2)),0,i*.14),Z(a,n?A.shinL:A.shinR,.28+.12*Math.sin(t*.5+(n?1:3)),0,0),Z(a,n?A.footL:A.footR,.6,0,0)}}function wx(a,t){let e=Math.sin(t*1.4);Z(a,A.spine,.3,.22,0),Z(a,A.chest,.22,.2,0),Z(a,A.neck,.28,.22,0),Z(a,A.head,.3,.28,.1),Z(a,A.upperArmL,-1.35,-.55,.3),Z(a,A.foreArmL,-1.55,0,0),Z(a,A.handL,.2,0,0),Z(a,A.upperArmR,-1.6,.35,-.45),Z(a,A.foreArmR,-1.75,0,0),Z(a,A.handR,.2,0,0),Z(a,A.thighL,-.85+.12*e,0,.18),Z(a,A.shinL,1.25-.15*e,0,0),Z(a,A.footL,.4,0,0),Z(a,A.thighR,-.7-.12*e,0,-.18),Z(a,A.shinR,1.15+.15*e,0,0),Z(a,A.footR,.4,0,0)}function Mx(a,t,e){let i=(n,s)=>ni(e*s,n)-.5;Z(a,A.spine,.05+.18*Math.sin(t*.9),.22*Math.sin(t*.5+1),.12*Math.sin(t*.7)),Z(a,A.chest,-.04+.13*Math.sin(t*.9+.6),.22*Math.sin(t*.5+1.4),0),Z(a,A.neck,-.12+i(1,1.5)*.26,i(2,1.3)*.36,0),Z(a,A.head,-.2+i(3,1.7)*.3,i(4,1.4)*.4,i(5,1.1)*.16);for(let n of[1,-1]){let s=n>0,r=t*(s?1:1.17)+(s?0:2.1),o=s?60:80;Z(a,s?A.upperArmL:A.upperArmR,-1.5+1.05*Math.sin(r)+i(o,1.9)*.4,n*(.15+.35*Math.cos(r*.9)),n*(.65+.4*Math.sin(r*1.3+1))),Z(a,s?A.foreArmL:A.foreArmR,-.7-.6*Math.sin(r+1.2),0,0),Z(a,s?A.handL:A.handR,.5*Math.sin(r*2),0,n*.2*Math.sin(r*1.7));let h=t*1.25+(s?0:Math.PI)+i(o+5,.9)*1.2;Z(a,s?A.thighL:A.thighR,-.55+.7*Math.sin(h),0,n*(.22+.16*Math.sin(h*.7))),Z(a,s?A.shinL:A.shinR,Math.max(.05,.95+.75*Math.sin(h-1.3)),0,0),Z(a,s?A.footL:A.footR,.4+.3*Math.sin(h),0,0)}}var Ex=[[A.spine,-.18,.52,.25,-.2,.2],[A.chest,-.16,.38,.25,-.18,.18],[A.neck,-.4,.42,.36,-.22,.22],[A.head,-.45,.42,.5,-.22,.22],[A.foreArmL,-2.2,.02,.12,-.04,.04],[A.foreArmR,-2.2,.02,.12,-.04,.04],[A.handL,-.6,.6,.2,-.3,.3],[A.handR,-.6,.6,.2,-.3,.3],[A.shinL,0,2.2,.04,-.04,.04],[A.shinR,0,2.2,.04,-.04,.04],[A.footL,-.35,.95,.25,-.25,.25],[A.footR,-.35,.95,.25,-.25,.25]],Lc=new Array(os).fill(null);for(let a of Ex)Lc[a[0]]=a;var Zd=new pi(0,0,0,"YXZ");function Tx(a,t){let e=Zd.setFromQuaternion(a,"YXZ"),i=e.x,n=e.y,s=e.z,r=!1;i<t[1]?(i=t[1],r=!0):i>t[2]&&(i=t[2],r=!0),n<-t[3]?(n=-t[3],r=!0):n>t[3]&&(n=t[3],r=!0),s<t[4]?(s=t[4],r=!0):s>t[5]&&(s=t[5],r=!0),r&&a.setFromEuler(Zd.set(i,n,s,"YXZ"))}var Sx=new M,Ax=new yt,Rx=new M;function Cx(a,t,e){let i=Sx.set(0,-1,0).applyQuaternion(a),n=Rx.copy(i),s=i.x*t,r=s,o=i.y,h=i.z;if(e)h<-.42&&(h=-.42),r<-.22?r=-.22:r>.8&&(r=.8),o>.45&&(o=.45),h<0&&o>-.35&&(o=-.35);else{let c=-.5-.34*Math.max(0,Math.min(1,r*1.6));h<c&&(h=c),h<.15&&r<-.05&&(r=-.05),r<-.62&&(r=-.62),h<-.2&&o>.55&&(o=.55)}r===s&&o===i.y&&h===i.z||(i.set(r*t,o,h),!(i.lengthSq()<1e-6)&&(i.normalize(),a.premultiply(Ax.setFromUnitVectors(n,i))))}var ta=new yt,Jd=new yt;function Px(a,t){let e=Math.hypot(a.y,a.w);if(e<.22)return;ta.set(0,a.y/e,0,a.w/e);let i=2*Math.atan2(ta.y,ta.w);if(i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),Math.abs(i)<=t)return;Jd.copy(a).multiply(ta.invert());let n=Math.sign(i)*t*.5;ta.set(0,Math.sin(n),0,Math.cos(n)),a.copy(Jd).multiply(ta)}var Lx=new yt().setFromAxisAngle(new M(0,0,1),Math.PI/2),Fx=new yt().setFromAxisAngle(new M(0,0,1),-Math.PI/2),Ix=new M,Cc=new M,Fc=new yt,za=new yt;function Ic(a,t){let e=Ix.set(0,-1,0).applyQuaternion(a);if(Cc.set(t,0,0),e.dot(Cc)<-.9)return null;Fc.setFromUnitVectors(Cc,e).multiply(t>0?Lx:Fx),za.copy(Fc).invert().multiply(a);let i=2*Math.atan2(za.y,za.w);return i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),i}var Dc={1:1,"-1":1};{let a=new pi(-2.5,0,.15,"YXZ"),t=new yt().setFromEuler(a);Dc[1]=Math.sign(Ic(t,1))||1,t.setFromEuler(a.set(-2.5,0,-.15,"YXZ")),Dc[-1]=Math.sign(Ic(t,-1))||1}function Dx(a,t,e){let i=Ic(a,t);if(i===null||Math.abs(i)<=e)return;let n=Math.sign(i)*e,s=Dc[t]*e,r=ze(1.75,2.8,Math.abs(i)),o=(n+(s-n)*r)*.5;za.set(0,Math.sin(o),0,Math.cos(o)),a.copy(Fc).multiply(za)}var yo=class{constructor(t,e,i,n){this.ch=t,this.body=e,this.player=i,this.sv=n,this.tmp=new Float32Array(os*3),this.add=new Float32Array(os*3),this.acc=new Float32Array(os*4),this.ref=new Float32Array(os*4),this.w={},this.wt={};for(let s of zn)this.w[s]=0,this.wt[s]=0;this.w.tread=1,this.phase=0,this.time=0,this.tumbleT=0,this.state="tread",this.splashiness=0,this.gaspKick=0,this.coughKick=0,this.force=null,this.forcePhase=void 0,this.hold=null,this.flinch=0,this.flinchSide=1,this.ride={lift:0,side:0,fore:0,slam:0},this.reach=[{pos:new M,on:0,w:0},{pos:new M,on:0,w:0}],this._ik={fix2:new M,qs:new yt,S:new M,qp:new yt,qu:new yt,qf:new yt,a:new M,n:new M,w:new M,fix:new yt,x:new M(1,0,0)},this._e=new pi(0,0,0,"YXZ"),this._q=new yt,this._q2=new yt,this._q3=new yt,this._qa=new yt,this._u=new M,this._wb=new M,this._d=new M,this._qi=new yt,this._flow=new M,this._wLag=new M,this._pv=new M,this._acc=new M,this._a=new M,this._hasPv=!1}_reach(t,e,i,n,s,r){let o=this.ch.bones,h=this._ik,c=o[t],l=o[e],u=o[i],d=l.position,f=u.position;h.S.setFromMatrixPosition(c.matrixWorld),c.parent.getWorldQuaternion(h.qp);let m=d.length()+f.length()-.004,b=Math.max(.16,Math.min(m,h.n.copy(n).sub(h.S).length())),g=.02,p=2.3;for(let x=0;x<14;x++){let v=(g+p)*.5;h.qf.setFromAxisAngle(h.x,-v),h.w.copy(f).applyQuaternion(h.qf).add(d).length()>b?g=v:p=v}if(h.qf.setFromAxisAngle(h.x,-(g+p)*.5),h.w.copy(f).applyQuaternion(h.qf).add(d),h.qu.copy(h.qp).multiply(c.quaternion),h.a.copy(h.w).applyQuaternion(h.qu).normalize(),h.n.normalize(),h.fix.setFromUnitVectors(h.a,h.n),h.qu.premultiply(h.fix),r){let x=h.w.copy(d).applyQuaternion(h.qu);x.addScaledVector(h.n,-x.dot(h.n));let v=h.a.copy(r).sub(h.S);if(v.addScaledVector(h.n,-v.dot(h.n)),x.lengthSq()>1e-8&&v.lengthSq()>1e-8){x.normalize(),v.normalize();let w=Math.atan2(h.fix2.crossVectors(x,v).dot(h.n),x.dot(v));h.qs.setFromAxisAngle(h.n,w),h.qu.premultiply(h.qs)}}h.qu.premultiply(h.qp.invert()),c.quaternion.slerp(h.qu,s),l.quaternion.slerp(h.qf,s)}_mix(t){let e=this.tmp,i=this.acc,n=this.ref,s=this._e,r=this._q,o=this._first;for(let h=0;h<os;h++){s.set(e[h*3],e[h*3+1],e[h*3+2],"YXZ"),r.setFromEuler(s);let c=h*4;o&&(n[c]=r.x,n[c+1]=r.y,n[c+2]=r.z,n[c+3]=r.w);let l=n[c]*r.x+n[c+1]*r.y+n[c+2]*r.z+n[c+3]*r.w<0?-t:t;i[c]+=r.x*l,i[c+1]+=r.y*l,i[c+2]+=r.z*l,i[c+3]+=r.w*l}this._first=!1}update(t){let e=this.player,i=this.body,n=this.sv,s=this.wt;this.time+=t;let r=n.alive?e.control*(1-.7*n.blackout):0,o=1-ze(.22,.78,r),h=Math.max(o,e.air||0),c=n.alive?ft(1-n.blackout*1.5):0,l=1-h,u=e.underSwim,d=e.diveBlend||0;s.flail=h*c*.8,s.tumble=h-s.flail,s.dive=l*d;let f=l*(1-d);s.under=f*u*e.moveAmt,s.rise=f*u*(1-e.moveAmt);let m=f*(1-u);s.swim=m*(e.crawlBlend||0),s.paddle=m*(1-(e.crawlBlend||0))*ft(e.swimBlend*2.2);let b=ft((s.swim+s.paddle)/Math.max(.001,m));s.brace=m*e.brace*(1-.7*b);let g=1-e.brace*(1-.7*b),p=Math.max(ft((38-n.oxygen)/26),ft((34-n.stamina)/28),ft(n.swallow*1.3),ft(e.impact-.7)*.8),x=m*(1-b);s.struggle=x*p*g,s.recover=x*ft(n.gaspTimer/3)*(1-p)*g;let v=1-ze(6,24,n.stamina);s.exhaust=x*v*(1-p)*g;let w=0;s.hang=0;for(let q of zn)q!=="tread"&&q!=="float"&&(w+=s[q]);let R=Math.max(0,1-w),y=ft(e.effort*1.6),T=e.fear||0;s.float=R*.22*(1-y)*(1-T),s.tread=R-s.float,s.aboard=0,s.cling=0,s.wave=0;{let q=e.waveBlend||0;if(q>.01&&!this.hold){let ct=q*(1-u)*l;for(let vt of zn)s[vt]*=1-ct;s.wave=ct}}if(this.hold){let q=this.hold==="cling"?Math.min(1,s.tumble+s.flail)*.5:0;for(let ct of zn)s[ct]=ct===this.hold?1-q:ct==="tumble"||ct==="flail"?s[ct]*(q>0?.5:0):0}if(this.force)for(let q of zn)s[q]=q===this.force?1:0,this.w[q]=s[q];w=0;let S=0;for(let q of zn)this.w[q]+=(s[q]-this.w[q])*(1-Math.exp(-t*((q==="tumble"||q==="flail")&&s[q]>this.w[q]?14:q==="brace"||q==="dive"||q==="cling"?7:q==="aboard"?30:5))),w+=this.w[q],this.w[q]>S&&(S=this.w[q],this.state=q);let _=this.w,E=1/Math.max(1e-4,w),I=0;for(let q of zn)I+=_[q]*hx[q];I+=_.tread*.3*y+_.struggle*.2*p+_.flail*(i.subFrac<.3?.8:0)+_.rise*.3*ft((60-n.oxygen)/50),I*=1+.42*T*(_.float+_.recover+_.exhaust+_.struggle)*E+.34*T*_.tread*E,I*=1+(.08+.22*T)*(ni(this.time*.6,77)-.5);let W=ea*I*E*(.72+.28*n.eff);this.phase+=W*t,this.forcePhase!==void 0&&(this.phase=this.forcePhase);let Y=this.phase;e.strokePhase=Y,e.struggleW=_.struggle*E;let k=Math.min(2.5,i.relSpeed*.25+i.angVel.length()*.22+i.turb);this.tumbleT+=t*(.8+1.6*k);let z=this.tmp,O=this.acc;O.fill(0),this._first=!0;let U=(q,ct)=>{q<=5e-4||(z.fill(0),ct(),this._mix(q*E))},N=zn.slice().sort((q,ct)=>_[ct]-_[q]),D=this.force==="dive"?this.forcePike||0:ft(1-Math.abs((e.diveTime||9)-.32)/.42)*ft(1.4-Math.max(0,i.mouthDepth));for(let q of N)switch(q){case"hang":U(_.hang,()=>gx(z,Y));break;case"float":U(_.float,()=>cx(z,Y,.55,1));break;case"wave":U(_.wave,()=>fx(z,Y));break;case"tread":U(_.tread,()=>px(z,Y,ft(.42+.25*y+.62*T),e.fp?1:0));break;case"paddle":U(_.paddle,()=>lx(z,Y));break;case"swim":U(_.swim,()=>ux(z,Y));break;case"dive":U(_.dive,()=>Qd(z,Y,D));break;case"under":U(_.under,()=>Qd(z,Y,0));break;case"rise":U(_.rise,()=>dx(z,Y,this.time,1));break;case"struggle":U(_.struggle,()=>mx(z,Y,this.time));break;case"tumble":U(_.tumble,()=>xx(z,this.tumbleT));break;case"recover":U(_.recover,()=>yx(z,Y,n.lung));break;case"exhaust":U(_.exhaust,()=>_x(z,Y));break;case"brace":U(_.brace,()=>wx(z,Y));break;case"aboard":U(_.aboard,()=>bx(z,Y,this.time,ft((e.brace||0)*1.6-.5)));break;case"cling":U(_.cling,()=>vx(z,Y,this.time));break;default:U(_.flail,()=>Mx(z,Y,this.time));break}let P=this.add;P.fill(0);let G=l*(1-_.swim*E);P[A.chest*3]-=.18*(n.lung-.5)*G,P[A.spine*3]-=.08*(n.lung-.5)*G;{let q=ft(.4+.5*p+.4*(e.brace||0)+.3*y+.6*T)*l*(1-u)*(1-.8*_.swim*E),ct=this.time*(.45+.5*q+.9*T),vt=e.fp?0:1;P[A.head*3]-=.14*T*l*(1-u)*vt,P[A.neck*3]-=.06*T*l*(1-u)*vt,P[A.chest*3]-=.05*T*Math.sin(this.time*9.5)*l,P[A.spine*3+2]+=.07*T*(ni(this.time*1.7,55)-.5)*2*l;let kt=(ni(ct,91)-.5)*2;P[A.neck*3+1]+=.16*kt*q,P[A.head*3+1]+=.22*kt*q}if(this.gaspKick=Math.max(0,this.gaspKick-t*2.6),this.coughKick=Math.max(0,this.coughKick-t*4.5),this.gaspKick>.001){let q=this.gaspKick*this.gaspKick*G;P[A.head*3]-=.3*q,P[A.neck*3]-=.14*q,P[A.chest*3]-=.18*q,P[A.upperArmL*3+2]+=.16*q,P[A.upperArmR*3+2]-=.16*q}if(this.coughKick>.001){let q=Math.sin(this.coughKick*Math.PI)*G,ct=i.subFrac>.3&&_.aboard<.5?1:0;P[A.spine*3]+=(.3-.16*ct)*q,P[A.chest*3]+=(.22-.12*ct)*q,P[A.head*3]+=(.34-.42*ct)*q,P[A.neck*3]+=(.2-.24*ct)*q}if(_.aboard>.01){let q=this.ride,ct=_.aboard*E,vt=ft(q.lift),kt=this.time;P[A.thighR*3]+=(.16*vt+.12*vt*Math.sin(kt*11))*ct,P[A.shinR*3]+=(.5*vt+.2*vt*Math.sin(kt*13+1))*ct,P[A.thighL*3]+=(.16*vt*Math.sin(kt*9+2)+.1*vt)*ct,P[A.shinL*3]-=.25*vt*ct,P[A.thighR*3+2]-=.25*Math.max(0,-q.side)*ct,P[A.spine*3+2]+=.24*q.side*ct,P[A.chest*3+2]+=.12*q.side*ct,P[A.spine*3+1]+=.1*q.fore*ct,P[A.spine*3]+=(.26*q.slam-.1*vt)*ct,P[A.chest*3]+=.16*q.slam*ct,P[A.neck*3]+=(.3*q.slam+.12*vt)*ct,P[A.head*3]+=(.32*q.slam+.1*vt)*ct}if(this.flinch>.002){let q=this.flinch*this.flinch*l,ct=this.flinchSide;P[A.head*3+1]+=.55*q*ct,P[A.neck*3+1]+=.25*q*ct,P[A.head*3]+=.05*q,P[A.head*3+2]+=.18*q*ct,P[A.neck*3+2]+=.08*q*ct,P[A.upperArmL*3+2]+=.22*q,P[A.upperArmR*3+2]-=.22*q,P[(ct>0?A.upperArmR:A.upperArmL)*3]-=.55*q,P[(ct>0?A.foreArmR:A.foreArmL)*3]-=.6*q,this.flinch=Math.max(0,this.flinch-t*1.9)}if(n.shiver>.01){let q=n.shiver*.035;P[A.chest*3+1]+=Math.sin(this.time*61)*q,P[A.upperArmL*3]+=Math.sin(this.time*57+1)*q*1.5,P[A.upperArmR*3]+=Math.sin(this.time*59+2)*q*1.5,P[A.head*3+1]+=Math.sin(this.time*53)*q*.8}let V=this._qi.copy(i.quat).invert(),H=this.force?0:Math.max(.25+.75*(_.tumble+.45*_.flail)*E,.7*_.cling*E);i.subFrac<.15?this._u.copy(i.vel).multiplyScalar(-.3):this._u.copy(i.relFlow);let B=this._flow.lerp(this._u.applyQuaternion(V),1-Math.exp(-t*8)),j=B.length(),tt=this.force?0:ft(j/4.5)*H*.7;this._hasPv||(this._pv.copy(i.vel),this._hasPv=!0);let K=this._a.copy(i.vel).sub(this._pv).multiplyScalar(1/Math.max(t,.001));this._pv.copy(i.vel),K.lengthSq()>3600&&K.setLength(60);let J=this._acc.lerp(K.applyQuaternion(V),1-Math.exp(-t*9)),ot=J.length(),it=this.force?0:ft(ot/38)*(.3+.5*H),Mt=this._wLag.lerp(this._wb.copy(i.angVel).applyQuaternion(V),1-Math.exp(-t*10)),Q=Mt.length(),Nt=this.force?0:Math.min(.6,Q*.07)*(.35+.65*_.tumble*E),xt=null,At=Math.min(.72,tt+it);if(At>.01){let q=this._d.copy(Kd).multiplyScalar(1-At);j>.05&&q.addScaledVector(B,At*tt/((tt+it)*j)),ot>.05&&q.addScaledVector(J,-At*it/((tt+it)*ot)),q.lengthSq()>1e-4&&(q.normalize(),xt=this._q2.setFromUnitVectors(Kd,q))}let bt=null;Nt>.01&&(bt=this._q3.setFromAxisAngle(this._u.copy(Mt).normalize(),-Nt));let Vt=this.force?0:.4+.6*H,Ct=(q,ct)=>Math.max(-ct,Math.min(ct,q));P[A.spine*3]+=Ct(J.z*.01*Vt,.3),P[A.chest*3]+=Ct(J.z*.008*Vt,.24),P[A.spine*3+2]+=Ct(J.x*.008*Vt,.18),P[A.neck*3]+=Ct(J.z*.012*Vt,.3),P[A.neck*3+2]+=Ct(J.x*.008*Vt,.16);let L=Math.min(1,Q/5)*H;P[A.foreArmL*3]-=.45*L,P[A.foreArmR*3]-=.45*L,P[A.shinL*3]+=.4*L,P[A.shinR*3]+=.4*L;let C=this.ch.bones,et=this._e,ht=this._q,pt=this._qa,gt=1-Math.exp(-t*26);for(let q=0;q<os;q++){let ct=q*4;ht.set(O[ct],O[ct+1],O[ct+2],O[ct+3]),ht.lengthSq()<1e-8?ht.identity():ht.normalize();let vt=P[q*3],kt=P[q*3+1],dt=P[q*3+2];(vt!==0||kt!==0||dt!==0)&&ht.multiply(pt.setFromEuler(et.set(vt,kt,dt,"YXZ"))),q===A.upperArmL||q===A.upperArmR||q===A.thighL||q===A.thighR?(xt&&ht.premultiply(xt),bt&&ht.premultiply(bt),Cx(ht,q===A.upperArmL||q===A.thighL?1:-1,q===A.thighL||q===A.thighR),q===A.thighL||q===A.thighR?Px(ht,.55):Dx(ht,q===A.upperArmL?1:-1,1.15)):(q===A.head&&bt&&ht.premultiply(kx.copy(zx).slerp(bt,.4)),Lc[q]&&Tx(ht,Lc[q])),C[q].quaternion.slerp(ht,gt)}{let q=this.reach,ct=!1;for(let vt=0;vt<2;vt++)q[vt].w+=(q[vt].on-q[vt].w)*(1-Math.exp(-t*(q[vt].on>q[vt].w?9:6))),q[vt].w>.005&&(ct=!0);if(ct){this.ch.group.updateMatrixWorld(!0);for(let vt=0;vt<2;vt++)q[vt].w>.005&&this._reach(vt===0?A.upperArmL:A.upperArmR,vt===0?A.foreArmL:A.foreArmR,vt===0?A.handL:A.handR,q[vt].pos,q[vt].w,q[vt].pole&&q[vt].usePole?q[vt].pole:null)}}let Lt=(_.tread*(.25+.4*y)+_.paddle*.5+_.swim*1+_.struggle*1+_.recover*.5+_.dive*.8)*E;this.splashiness+=(Lt*Math.min(1,i.subFrac*1.3)*(1-u)-this.splashiness)*(1-Math.exp(-t*3))}},kx=new yt,zx=new yt;var ia=new M(0,1,0),kc=new yt,wo=class{constructor(t,e,i,n,s,r){this.camera=t,this.ch=e,this.body=i,this.player=n,this.waves=s,this.input=r,this.target=1,this.blend=1,this.yaw=Math.PI,this.pitch=-.08,this.sens=.0021,this.intensity=1,this.qd=new yt,this.pivot=new M,this.tpPos=new M,this.inited=!1,this.arm=4.6,this.under=0,this.fovKick=0,this.threat=0,this.crestDist=1e9,this.crestHeight=0,this.crestDx=0,this.crestDz=1,this.waveK=0,this.landK=0,this.jolt=0,this.joltV=0,this._impWas=0,this.orbit=0,this.eye=new M,this.chest=new M,this.surfaceAtCam=si(),this.script=null,this.auto=!0,this.interest={x:0,z:0,w:0},this.portrait=0,this.autoT=0,this.drift=0,this.roll=0,this.push=0,this.time=0,this.shiver=0,this.cine=null,this._m=new mt,this._f=new M,this._v=new M,this._v2=new M,this._q=new yt,this._q2=new yt,this._mat=new Rt,this._s=si(),this._fp=new M,this._qfp=new yt,this._qtp=new yt,this._qh=new yt,this._qhS=new yt,this._hasH=!1}toggle(){this.target=this.target>.5?0:1}setMode(t){this.target=t==="first"?0:1}get mode(){return this.target>.5?"third":"first"}lookQuat(t,e,i){let n=Math.cos(e);return this._f.set(Math.sin(t)*n,Math.sin(e),Math.cos(t)*n),this._mat.lookAt(this._v.set(0,0,0),this._f,ia),i.setFromRotationMatrix(this._mat)}update(t){let e=this.camera,i=this.body,n=this.player,s=this.input.consumeMouse(this._m);this.time+=t,this.input.enabled&&(this.yaw-=s.x*this.sens,this.pitch-=s.y*this.sens);let r=performance.now()/1e3,o=Math.abs(s.x)+Math.abs(s.y)>.5||r-this.input.lastLook<2.5,h=this.input.enabled&&this.input.busy();if(this.auto&&this.input.enabled&&!this.script&&!o){let O=this.input.axisX();if(h)Math.abs(O)>.15&&(this.yaw-=O*.85*t),this.autoT=0;else{this.autoT+=t;let N=Math.min(1,this.autoT/1.5);if(this.interest.w>.05){let P=Math.atan2(this.interest.x-i.pos.x,this.interest.z-i.pos.z)-this.yaw;P=((P+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,this.yaw+=Math.sign(P)*Math.min(Math.abs(P),(.25+.9*this.interest.w)*t)*N}else this.drift+=t*.13,this.yaw+=(.045*Math.sin(this.drift)+.03*Math.sin(this.drift*2.3+1))*t*N}let U=-.07+.24*this.threat+.2*this.waveK+.16*this.landK-.1*this.under;(!h||n.underSwim<.5)&&(this.pitch+=(U-this.pitch)*(1-Math.exp(-t*(h?.5:1.1))))}else this.autoT=0;this.script&&(this.yaw=this.script.yaw,this.pitch=this.script.pitch),this.pitch=Si(this.pitch,-1.45,1.45),n.yaw=this.yaw,n.pitch=this.pitch;let c=1/.85;this.blend=Si(this.blend+Math.sign(this.target-this.blend)*t*c,0,1),Math.abs(this.target-this.blend)<t*c&&(this.blend=this.target);let l=this.blend*this.blend*(3-2*this.blend),u=ft(1-n.control)*.85+n.tumble*.4,d=ft(u),f=this.intensity*lt(.2,1,d)*lt(1,.42,l),m=i.angVel,b=m.length();b>1e-5&&f>0&&(this._q.setFromAxisAngle(this._v.copy(m).multiplyScalar(1/b),b*f*t),this.qd.premultiply(this._q));let g=lt(.32,2.6,d);this.qd.slerp(kc,1-Math.exp(-t/g)).normalize(),this.ch.eyeWorld(this.eye),this.fpLift&&(this.eye.y+=this.fpLift),this.chest.setFromMatrixPosition(this.ch.bones[2].matrixWorld),this.inited||(this.pivot.copy(this.chest),this.inited=!0,this.tpPos.copy(this.chest).add(this._v.set(0,1.2,4)));{this.ch.bones[4].getWorldQuaternion(this._qh);{let J=this._v.set(1,0,0).applyQuaternion(this.ch.bones[2].getWorldQuaternion(this._q2)),ot=this._v2.set(0,0,1).applyQuaternion(this._qh);if(ot.addScaledVector(J,-ot.dot(J)),ot.lengthSq()>1e-4){ot.normalize(),J.addScaledVector(ot,-J.dot(ot)).normalize();let it=this._f.crossVectors(ot,J);this._qh.setFromRotationMatrix(this._mat.makeBasis(J,it,ot))}}this._hasH||(this._qhS.copy(this._qh),this._hasH=!0),this._qhS.slerp(this._qh,1-Math.exp(-t*12));let U=Math.cos(this.pitch),N=this.pitch-.16*(n.crawlBlend||0),D=Math.cos(N),P=this._v2.set(Math.sin(this.yaw)*D,Math.sin(N),Math.cos(this.yaw)*D).applyQuaternion(this._q2.copy(this._qhS).invert()),G=Math.atan2(P.x,P.z),V=Math.asin(Si(P.y,-1,1)),H=Si(G,-.75,.75),B=Si(V,-.45-.42*(1-(n.crawlBlend||0))*(1-(n.underSwim||0)),.9),j=Math.max(Math.abs(G-H),Math.abs(V-B));P.set(Math.sin(H)*Math.cos(B),Math.sin(B),Math.cos(H)*Math.cos(B)).applyQuaternion(this._qhS);let tt=ft(d),K=this._f.set(0,1,0).applyQuaternion(this._qhS).multiplyScalar(tt);K.y+=1-tt,K.lengthSq()<1e-4&&K.set(0,1,0),K.normalize(),Math.abs(K.dot(P))>.995&&K.set(0,0,1).applyQuaternion(this._qhS),this._mat.lookAt(this._v.set(0,0,0),P,K),this._qfp.setFromRotationMatrix(this._mat).premultiply(this._q.copy(kc).slerp(this.qd,.5)),n.fp=this.blend<.5}this._fp.copy(this.eye);let p=1-Math.exp(-t*10),x=1-Math.exp(-t*5.5);this.pivot.x+=(this.chest.x-this.pivot.x)*p,this.pivot.z+=(this.chest.z-this.pivot.z)*p,this.pivot.y+=(this.chest.y+.22-this.pivot.y)*x;let v=ft(this.waves.sigHeight/16);this.push+=((this.auto?ft((45-(this.oxygen===void 0?100:this.oxygen))/40):0)-this.push)*(1-Math.exp(-t*.8));{let O=ft(((this.crestHeight||0)-6)/7),U=this.crestDist===void 0?1e9:this.crestDist,N=this.threat*O*(U>1?1:0),D=O*(U>1&&U<26?ft(1-U/26):0);this.waveK+=(N-this.waveK)*(1-Math.exp(-t*(N>this.waveK?2.2:2.6))),this.landK+=(D-this.landK)*(1-Math.exp(-t*(D>this.landK?5:3.2)));let P=n.impact||0;P>1&&this._impWas<=1&&(this.joltV+=7*Math.min(2.2,P)*this.intensity),this._impWas=P;let G=31,V=.16;this.joltV+=(-G*G*this.jolt-2*V*G*this.joltV)*t,this.jolt+=this.joltV*t}let w=(3.5+.7*v+1.8*ft(n.impactPeak-.6)+1.3*this.threat+3*this.waveK-2.6*this.landK+2.8*(n.air||0)-.5*(n.crawlBlend||0)-1.2*this.push)*(1+.22*this.portrait)+(this.armAdd||0);this.arm+=(w-this.arm)*(1-Math.exp(-t*1.6));let R=Math.cos(this.pitch),y=this.yaw+this.orbit,T=this._f.set(Math.sin(y)*R,Math.sin(this.pitch),Math.cos(y)*R),S=this._v,_=this.holdAbove?0:ze(.7,1.8,i.eyeDepth);this.under+=(_-this.under)*(1-Math.exp(-t*(_>this.under?3.5:2.2)));let E=this.armOverride||this.arm,I=.5;for(let O=0;O<5&&(S.copy(this.pivot).addScaledVector(T,-E),S.y+=(.62+.16*E)*Math.max(.2,1-.45*this.threat*(this.auto?1:0)-.38*this.waveK)+.25*this.portrait,!(this.under>.98));O++){let U=this.waves.sample(S.x,S.z,this._s).h,N=(S.x+this.pivot.x)*.5,D=(S.z+this.pivot.z)*.5,P=this.waves.sample(N,D,this._s).h,G=(S.y+this.pivot.y+.3)*.5,V=Math.max(U+I-S.y,P+.2-G);if(V<=0||E<=1.7){V>0&&(S.y+=V*(1-this.under));break}E=Math.max(1.7,E*.78)}if(this.armNow=E,this.tpPos.lerp(S,1-Math.exp(-t*7.5)),this.holdAbove){let O=this.waves.sample(this.tpPos.x,this.tpPos.z,this._s).h+1;this.tpPos.y<O&&(this.tpPos.y=O)}else if(this.under<.5){let O=this.waves.sample(this.tpPos.x,this.tpPos.z,this._s).h+.3;this.tpPos.y<O&&(this.tpPos.y=O)}let W=this._v2.copy(this.pivot).addScaledVector(i.vel,.04);if(W.y+=.34+1.1*this.threat+1.5*this.waveK+1.6*this.landK+.25*this.portrait,W.addScaledVector(T,2.2),this._mat.lookAt(this.tpPos,W,ia),this._qtp.setFromRotationMatrix(this._mat),this._q.copy(kc).slerp(this.qd,.45),this._qtp.premultiply(this._q),e.position.copy(this._fp).lerp(this.tpPos,l),e.quaternion.copy(this._qfp).slerp(this._qtp,l),l>0&&l<1){let O=this._fp.distanceTo(this.tpPos)*l,U=.32*(O/.28)*Math.exp(1-O/.28),N=.2*(O/.12)*Math.exp(1-O/.12),D=this._v2.set(0,0,-1).applyQuaternion(this._qfp);e.position.addScaledVector(D,N),e.position.y+=U}{let O=this.surfaceAtCam,U=e.matrixWorld.elements,N=O.nx*U[0]+O.nz*U[2],D=-(this.crestDx*U[0]+this.crestDz*U[2])*.11*this.waveK,P=(Math.max(-.16,Math.min(.16,-N*.38))*l+D)*(1-this.under)*this.intensity;this.roll+=(P-this.roll)*(1-Math.exp(-t*1.6));let G=this.roll+this.jolt*.9,V=-this.jolt*.55;Math.abs(G)>1e-4&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.set(0,0,1),G)),Math.abs(V)>1e-4&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.set(1,0,0),V)),e.position.y-=Math.abs(this.jolt)*1.6*l}this.fovKick+=(ft(n.impact-.6)*7-this.fovKick)*(1-Math.exp(-t*4));let Y=lt(76,66,l)+this.fovKick*this.intensity+4*this.threat*l+(9*this.waveK+8*this.landK)*lt(.75,1,l)+9*(n.air||0)*l+7*(n.crawlBlend||0)*l-5*this.push*l+this.portrait*lt(13,19,l);this.debugView&&(e.position.copy(this.debugView.pos),this._mat.lookAt(e.position,this.debugView.target,ia),e.quaternion.setFromRotationMatrix(this._mat));let k=0;if(this.cine){let O=this.cine;O.t+=t;let U=this.pivot,N=D=>(D=ft(D),D*D*(3-2*D));if(O.mode==="intro"){let D=1-N(O.t/O.dur);e.position.addScaledVector(T,-24*D),e.position.y+=17*D,this._v2.copy(U),this._v2.y+=.3,this._mat.lookAt(e.position,this._v2,ia),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,ft(D*3)),k=-8*D,O.t>=O.dur&&(this.cine=null)}else if(O.mode==="lift"){let D=O.yaw0+2.4+O.t*.13,P=4.2+O.t*.55,G=U.x-Math.sin(D)*P,V=U.z-Math.cos(D)*P;this._v.set(G,Math.max(this.waves.heightFast(G,V)+1.5,U.y-.9+O.t*.12),V),O.pos||(O.pos=e.position.clone()),O.pos.lerp(this._v,1-Math.exp(-t*(O.t<7?1.4:Math.max(.05,1.4-(O.t-7)*.5))));{let H=this.waves.heightFast(O.pos.x,O.pos.z)+1.1;O.pos.y<H&&(O.pos.y=H)}e.position.copy(O.pos),this._v2.copy(U),this._v2.y+=.9+Math.min(1.6,O.t*.2),this._mat.lookAt(e.position,this._v2,ia),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,ft(O.t*1.5)),k=-Math.min(22,8+O.t*1.5)}else O.mode==="death"&&(O.pos||(O.pos=e.position.clone()),O.pos.y+=.22*t,e.position.copy(O.pos),this._mat.lookAt(e.position,U,ia),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,1-Math.exp(-t*2)),k=-Math.min(10,O.t*2))}let z=.07;(Math.abs(Y+k-e.fov)>.01||Math.abs(z-e.near)>.002)&&(e.fov=Y+k,e.near=z,e.updateProjectionMatrix());{if(this.shiver>.02){let U=this.shiver*.0035*this.intensity*lt(1.6,.6,l),N=this.time;this._v.set(Math.sin(N*57)*U,Math.sin(N*61+1)*U,Math.sin(N*53+2)*U*.6);let D=this._v.length();D>1e-6&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.multiplyScalar(1/D),D))}let O=ft(n.effort*1.1)*this.intensity*(1-.6*this.under);if(O>.02){let U=n.strokePhase||0,N=this.time,D=lt(3.4,.6,l);e.position.y+=Math.sin(U*2)*.018*O*D;let P=(Math.sin(N*11.3)+Math.sin(N*17.9+1.3))*.0012*O,G=(Math.sin(N*9.7+2.1)+Math.sin(N*15.1))*.0012*O;this._v.set(P+Math.sin(U*2+.6)*.006*O*D,G+Math.sin(U)*.007*O*D,Math.sin(U)*.014*O*D);let V=this._v.length();V>1e-5&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.multiplyScalar(1/V),V))}}e.updateMatrixWorld(!0),this.ch.head.visible=e.position.distanceTo(this.eye)>.19,this.waves.sample(e.position.x,e.position.z,this.surfaceAtCam)}};var Mo=class{constructor(t){this.canvas=t,this.keys=new Set,this.dx=0,this.dy=0,this.locked=!1,this.enabled=!1,this.pressed=new Set,this.onLockChange=null,this.mouseL=!1,this.mouseR=!1,this.lastLook=-100,window.addEventListener("keydown",e=>{e.repeat||(this.keys.add(e.code),this.pressed.add(e.code),this.enabled&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseL=this.mouseR=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.locked||(this.mouseL=this.mouseR=!1),this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("mousemove",e=>{this.locked&&(this.dx+=e.movementX,this.dy+=e.movementY,Math.abs(e.movementX)+Math.abs(e.movementY)>1&&(this.lastLook=performance.now()/1e3))}),document.addEventListener("mousedown",e=>{this.locked&&(e.button===0&&(this.mouseL=!0),e.button===2&&(this.mouseR=!0))}),document.addEventListener("mouseup",e=>{e.button===0&&(this.mouseL=!1),e.button===2&&(this.mouseR=!1)}),document.addEventListener("contextmenu",e=>{(this.locked||this.enabled)&&e.preventDefault()}),this.virtual=null,this.touch=null}lock(){if(this.canvas.requestPointerLock){let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}}unlock(){document.exitPointerLock&&document.exitPointerLock()}down(t){return this.keys.has(t)}axisX(){if(this.virtual)return this.virtual.x||0;let t=(this.down("KeyD")||this.down("ArrowRight")?1:0)-(this.down("KeyA")||this.down("ArrowLeft")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.x:0)))}axisZ(){if(this.virtual)return this.virtual.z||0;let t=(this.down("KeyW")||this.down("ArrowUp")?1:0)-(this.down("KeyS")||this.down("ArrowDown")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.z:0)))}swim(){return this.virtual?!!(this.virtual.swim||this.virtual.sprint||this.virtual.up):this.down("Space")||this.down("ShiftLeft")||this.down("ShiftRight")||this.mouseL||!!(this.touch&&this.touch.swim)}dive(){return this.virtual?!!this.virtual.dive:this.down("KeyF")||this.down("KeyQ")||this.mouseR||!!(this.touch&&this.touch.dive)}busy(){return Math.abs(this.axisX())+Math.abs(this.axisZ())>.05||this.swim()||this.dive()}consumeMouse(t){return t.x=this.dx,t.y=this.dy,this.dx=0,this.dy=0,t}endFrame(){this.pressed.clear()}};var Eo=class{constructor(t){this.waves=t,this.base=1,this.storm=1,this.locked=!1,this.wind=new M(26,0,0),this.windSpeed=26,this.gust=1,this.windAngle=0,this.rain=1,this.time=0}update(t){this.time+=t;let e=this.time,i=this.locked?0:(ni(e*.021,3)-.5)*.22+(ni(e*.09,5)-.5)*.08,n=ft(this.base+i*(.4+.6*this.base));this.storm+=(n-this.storm)*(1-Math.exp(-t*.25));let s=this.locked?0:(ni(e*.035,11)-.5)*.9;this.windAngle=this.waves.windAngle+s,this.gust=.78+.34*ni(e*.31,17)+.22*ni(e*1.3,23)*this.storm,this.windSpeed=lt(9,31,this.storm)*this.gust,this.wind.set(Math.cos(this.windAngle)*this.windSpeed,0,Math.sin(this.windAngle)*this.windSpeed);let r=this.locked?.9:.62+.38*ni(e*.05,29);this.rain=ft(lt(.25,1,this.storm)*r+.1*this.storm),st.uStorm.value=this.storm,st.uRain.value=this.rain,st.uWindDir.value.set(Math.cos(this.windAngle),Math.sin(this.windAngle)),st.uWindSpeed.value=this.windSpeed,st.uFogDensity.value=lt(1/5200,1/1500,this.rain)*(.8+.4*this.storm);let o=lt(1.25,.86,this.storm);st.uAmbient.value.set(.05*o,.06*o,.072*o),this.waves.setStorm(this.storm)}};var Ux=`
attribute vec4 aSeed;
uniform vec3 uBox;
uniform vec3 uOffset;      // integral of rain velocity
uniform vec3 uVel;         // current rain velocity (world)
uniform vec3 uCamVel;
uniform float uStreak;     // exposure time (s)
uniform float uWidth;
uniform float uPx;         // world size of one pixel at 1 m
varying vec2 vQ;
varying float vA;
varying float vSpot;
${Js}
void main() {
  float sf = 0.82 + 0.36 * aSeed.w;
  vec3 p = mod(aSeed.xyz * uBox + uOffset * sf - cameraPosition, uBox) - uBox * 0.5;
  vec3 wp = cameraPosition + p;
  vec3 rel = uVel * sf - uCamVel;
  float sp = length(rel);
  vec3 dir = rel / max(sp, 1e-3);
  float dist = length(p);
  vec3 toCam = normalize(-p);
  vec3 side = normalize(cross(dir, toCam));
  float len = sp * uStreak * (0.8 + 0.5 * fract(aSeed.w * 7.3));
  float w = max(uWidth * (0.7 + 0.8 * fract(aSeed.w * 13.7)), dist * uPx * 0.75);
  vec2 q = position.xy;                     // x: -1..1 across, y: 0..1 along
  wp += side * q.x * w - dir * q.y * len;
  vQ = q;
  float nearFade = smoothstep(0.5, 2.2, dist);
  float farFade = 1.0 - smoothstep(0.38, 0.5, max(abs(p.x) / uBox.x, max(abs(p.y) / uBox.y, abs(p.z) / uBox.z)));
  // thin far streaks keep their energy when clamped to pixel width
  float thin = clamp(uWidth / max(dist * uPx * 0.75, 1e-5), 0.12, 1.0);
  vA = nearFade * farFade * thin;
  vec3 sl; vSpot = spotAt(wp, sl);
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,Nx=`
precision highp float;
uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor; uniform float uIntensity;
varying vec2 vQ; varying float vA; varying float vSpot;
void main() {
  float across = 1.0 - vQ.x * vQ.x;
  float along = smoothstep(0.0, 0.25, vQ.y) * (1.0 - smoothstep(0.55, 1.0, vQ.y));
  float a = across * along * vA * uIntensity;
  // rain falling through the searchlight is what makes the beam visible: each streak lights up
  vec3 col = vec3(0.62, 0.68, 0.74) * (uAmbient * 3.4 + uFlashColor * uFlash * 2.2 + ${yn} * vSpot * 1.1);
  gl_FragColor = vec4(col, a * 0.26 * (1.0 + 2.2 * min(vSpot, 1.5)));
}`,Ox=`
attribute vec4 aSeed;
uniform float uTime; uniform float uTile; uniform float uIntensity;
${ns}
${io}
${ss}
varying vec2 vUv; varying float vA; varying float vLife;
float h1(float n) { return fract(sin(n * 127.1) * 43758.5453); }
void main() {
  float period = 0.34 + 0.3 * aSeed.z;
  float tt = uTime / period + aSeed.w * 17.0;
  float cyc = floor(tt), life = fract(tt);
  vec2 r = vec2(h1(aSeed.x * 91.7 + cyc * 1.37), h1(aSeed.y * 57.3 + cyc * 2.11));
  vec2 x0 = cameraPosition.xz + mod(r * uTile - cameraPosition.xz, uTile) - uTile * 0.5;
  vec3 d = waveDisplace(x0, 0.3);
  vec3 wp = vec3(x0.x + d.x, d.y, x0.y + d.z);
  for (int i = 0; i < NB; i++) { if (uBrkB[i].y > 0.01) { float env; wp.y += breakerProfile(i, wp.xz, env).x; } }
  float dist = length(wp - cameraPosition);
  float size = (0.014 + 0.030 * aSeed.z) * (0.45 + 1.2 * life);
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  wp += right * position.x * size + vec3(0.0, 1.0, 0.0) * (position.y + 0.9) * size * (0.7 + 1.3 * (1.0 - life));
  vUv = position.xy * 0.5 + 0.5; vLife = life;
  vA = (1.0 - life) * (1.0 - life) * (1.0 - smoothstep(uTile * 0.2, uTile * 0.46, dist)) * uIntensity;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,Bx=`
precision highp float;
uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor;
varying vec2 vUv; varying float vA; varying float vLife;
void main() {
  vec2 q = vUv * 2.0 - 1.0;
  // a little crown: central jet + two side lobes that open with age
  float jet = exp(-q.x * q.x * 26.0) * smoothstep(-1.0, -0.2, q.y) * (1.0 - smoothstep(0.1, 1.0, q.y));
  float open = 0.25 + 0.6 * vLife;
  float lobes = (exp(-pow((q.x - open) * 5.0, 2.0)) + exp(-pow((q.x + open) * 5.0, 2.0))) * smoothstep(-1.0, -0.5, q.y) * (1.0 - smoothstep(-0.2, 0.55, q.y));
  float a = clamp(jet + lobes * 0.8, 0.0, 1.0) * vA;
  vec3 col = vec3(0.70, 0.76, 0.80) * (uAmbient * 4.2 + uFlashColor * uFlash * 2.0);
  gl_FragColor = vec4(col, a * 0.3);
}`;function $d(a,t){let e=new Ji,i=t==="streak"?new Float32Array([-1,0,0,1,0,0,1,1,0,-1,1,0]):new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);e.setAttribute("position",new Bt(i,3)),e.setIndex([0,1,2,0,2,3]);let n=new Float32Array(a*4);for(let s=0;s<n.length;s++)n[s]=Math.random();return e.setAttribute("aSeed",new Je(n,4)),e.instanceCount=a,e}var To=class{constructor(t){this.group=new ae,this.offset=new M,this.vel=new M(8,-9,0),this.camVel=new M,this._lastCam=new M,this._has=!1;let e=(i,n,s,r)=>{let o={uBox:{value:new M(...n)},uOffset:{value:this.offset},uVel:{value:this.vel},uCamVel:{value:this.camVel},uStreak:{value:r},uWidth:{value:s},uPx:{value:.001},uIntensity:{value:1},uSpotPos:st.uSpotPos,uSpotDir:st.uSpotDir,uSpotP:st.uSpotP,uAmbient:st.uAmbient,uFlash:st.uFlash,uFlashColor:st.uFlashColor},h=new ut($d(i,"streak"),new ne({uniforms:o,vertexShader:Ux,fragmentShader:Nx,transparent:!0,depthWrite:!1,side:De}));return h.frustumCulled=!1,h.renderOrder=20,h};this.near=e(Math.round(t.rain*.62),[22,16,22],.0024,.02),this.far=e(Math.round(t.rain*.38),[80,46,80],.007,.03),this.group.add(this.near,this.far),this.splashU={uWaveA:st.uWaveA,uWaveB:st.uWaveB,uBrkA:st.uBrkA,uBrkB:st.uBrkB,uBrkC:st.uBrkC,uTime:st.uTime,uTile:{value:34},uIntensity:{value:1},uAmbient:st.uAmbient,uFlash:st.uFlash,uFlashColor:st.uFlashColor},this.splash=new ut($d(t.splashes,"quad"),new ne({uniforms:this.splashU,vertexShader:Ox,fragmentShader:Bx,transparent:!0,depthWrite:!1})),this.splash.frustumCulled=!1,this.splash.renderOrder=12,this.group.add(this.splash)}update(t,e,i,n,s,r){this.vel.set(i.x*.5,-8.6-1.4*n,i.z*.5),this.offset.addScaledVector(this.vel,t);for(let c of["x","y","z"])Math.abs(this.offset[c])>4e3&&(this.offset[c]%=4e3);this._has&&t>0&&this.camVel.copy(e.position).sub(this._lastCam).multiplyScalar(1/t),this.camVel.length()>40&&this.camVel.setLength(40),this._lastCam.copy(e.position),this._has=!0;let o=2*Math.tan($i.degToRad(e.fov)*.5)/Math.max(1,r),h=n*(1-s);for(let c of[this.near,this.far])c.material.uniforms.uPx.value=o,c.material.uniforms.uIntensity.value=h*(c===this.far?.8:1),c.visible=h>.01;this.splashU.uIntensity.value=h,this.splash.visible=h>.01}};var Hx=`
attribute float aSide; attribute float aBright; attribute float aBranch;
uniform float uWidth;
varying float vSide; varying float vBright; varying float vH; varying float vBranch;
void main() {
  vec3 p = position;
  vec3 toCam = normalize(cameraPosition - p);
  vec3 tangent = normalize(normal);
  vec3 side = normalize(cross(tangent, toCam));
  p += side * aSide * uWidth * (0.30 + 0.70 * aBright);
  vSide = aSide; vBright = aBright; vH = p.y; vBranch = aBranch;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,Vx=`
precision highp float;
uniform float uPower; uniform float uBranchK; uniform vec3 uColor; uniform float uFog;
varying float vSide; varying float vBright; varying float vH; varying float vBranch;
void main() {
  float sd = abs(vSide);
  float core = exp(-sd * sd * 46.0);                         // the channel: a thread, burnt out to white
  float halo = exp(-sd * 3.4) * 0.06 + exp(-sd * sd * 9.0) * 0.12;      // its light in the rain around it
  float veil = mix(0.30, 1.0, smoothstep(0.0, 520.0, vH));   // the foot of the bolt is behind rain and spray
  vec3 col = uColor * core * 3.2 + vec3(0.56, 0.62, 1.0) * halo;
  gl_FragColor = vec4(col * uPower * vBright * mix(1.0, uBranchK, vBranch) * uFog * veil, 1.0);
}`,So=class{constructor(t=99){this.rnd=ci(t),this.group=new ae,this.strokes=[],this.age=1e9,this.active=!1,this.dir=new M(1,.3,0),this.pos=new M,this.dist=3e3,this.sheet=0,this.power=1,this.intensity=0,this.pendingThunder=[],this.onThunder=null,this.time=0,this.next=6,this.rate=1,this.mat=new ne({uniforms:{uWidth:{value:6},uPower:{value:0},uBranchK:{value:1},uColor:{value:new M(.82,.88,1)},uFog:{value:1}},vertexShader:Hx,fragmentShader:Vx,transparent:!0,blending:Ki,depthWrite:!1,depthTest:!0,side:De}),this.bolt=new ut(new he,this.mat),this.bolt.frustumCulled=!1,this.bolt.visible=!1,this.bolt.renderOrder=2,this.group.add(this.bolt);let e=document.createElement("canvas");e.width=e.height=128;let i=e.getContext("2d"),n=i.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(255,255,255,0.55)"),n.addColorStop(.45,"rgba(255,255,255,0.16)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,128,128);let s=new Bi(e);s.colorSpace=je,this.glows=[0,1,2].map(()=>{let r=new zr(new Aa({map:s,color:0,blending:Ki,depthWrite:!1,transparent:!0,fog:!1}));return r.visible=!1,r.renderOrder=1,this.group.add(r),r})}_buildBolt(t,e){let i=this.rnd,n=[],s=(m,b,g,p,x,v)=>{let w=[m,b],R=m.distanceTo(b),y=R*(x===0?.17:.24);for(let S=0;S<v;S++){let _=[w[0]];for(let E=0;E<w.length-1;E++){let I=w[E].clone().lerp(w[E+1],.5);I.x+=(i()-.5)*y,I.z+=(i()-.5)*y,I.y+=(i()-.5)*y*.4,_.push(I,w[E+1])}w=_,y*=.6}let T=w.length-1;for(let S=0;S<T;S++){let _=S/T,E=(S+1)/T;n.push([w[S],w[S+1],lt(g,p,Math.pow(_,.8)),lt(g,p,Math.pow(E,.8)),x>0?1:0]);let I=x===0?.085*(_<.72?1:.35):x===1?.045:.02;if(x<3&&S>2&&S<T-3&&i()<I){let W=w[S+1].clone().sub(w[S]).normalize(),Y=R*(x===0?.1+i()*.3:.18+i()*.3)*(1-.45*_),k=i()*6.283,z=.35+i()*.55,O=new M(W.x+Math.cos(k)*z,W.y-.15-i()*.3,W.z+Math.sin(k)*z).normalize(),U=lt(g,p,_)*(.5+i()*.25);s(w[S].clone(),w[S].clone().addScaledVector(O,Y),U,.02,x+1,x===0?5:4)}}};s(t,e,1,.82,0,7);let r=n.length,o=new Float32Array(r*4*3),h=new Float32Array(r*4*3),c=new Float32Array(r*4),l=new Float32Array(r*4),u=new Float32Array(r*4),d=new Uint32Array(r*6);for(let m=0;m<r;m++){let[b,g,p,x,v]=n[m],w=g.clone().sub(b).normalize(),R=(y,T,S,_)=>{let E=(m*4+y)*3;o[E]=T.x,o[E+1]=T.y,o[E+2]=T.z,h[E]=w.x,h[E+1]=w.y,h[E+2]=w.z,c[m*4+y]=S,l[m*4+y]=_,u[m*4+y]=v};R(0,b,-1,p),R(1,b,1,p),R(2,g,1,x),R(3,g,-1,x),d.set([m*4,m*4+1,m*4+2,m*4,m*4+2,m*4+3],m*6)}let f=new he;f.setAttribute("position",new Bt(o,3)),f.setAttribute("normal",new Bt(h,3)),f.setAttribute("aSide",new Bt(c,1)),f.setAttribute("aBright",new Bt(l,1)),f.setAttribute("aBranch",new Bt(u,1)),f.setIndex(new Bt(d,1)),this.bolt.geometry.dispose(),this.bolt.geometry=f}strike(t,e={}){let i=this.rnd,n=e.azimuth!==void 0?e.azimuth:i()*Math.PI*2;this.dist=e.dist!==void 0?e.dist:500+Math.pow(i(),1.6)*5e3,this.sheet=e.sheet!==void 0?e.sheet:i()<.38?1:0,this.power=e.power!==void 0?e.power:lt(1.45,.55,ft(this.dist/7e3))*(.8+i()*.4),this.pos.set(t.x+Math.cos(n)*this.dist,0,t.z+Math.sin(n)*this.dist);let s=1300+i()*700;this.dir.set(Math.cos(n)*this.dist,this.sheet?s:s*.55,Math.sin(n)*this.dist).normalize(),this.strokes.length=0;let r=2+Math.floor(i()*4),o=0;for(let h=0;h<r;h++)this.strokes.push({t:o,peak:(h===0?1:.35+i()*.65)*this.power,tau:.045+i()*.09}),o+=.045+i()*.13;if(this.age=0,this.active=!0,!this.sheet){let h=new M(this.pos.x+(i()-.5)*500,s,this.pos.z+(i()-.5)*500);this._buildBolt(h,new M(this.pos.x,-5,this.pos.z)),this.mat.uniforms.uWidth.value=Math.max(5,this.dist*.0075),this.boltTop=h.clone()}{let h=this.sheet?this.pos.x:(this.boltTop.x+this.pos.x)*.5,c=this.sheet?this.pos.z:(this.boltTop.z+this.pos.z)*.5,l=this.glows;this.sheet?(l[0].position.set(this.pos.x,s*.9,this.pos.z),l[0].scale.setScalar(this.dist*.75),l[1].position.set(this.pos.x+(i()-.5)*this.dist*.4,s*.8,this.pos.z+(i()-.5)*this.dist*.4),l[1].scale.setScalar(this.dist*.45),l[2].scale.setScalar(.001)):(l[0].position.set(this.boltTop.x,s*.93,this.boltTop.z),l[0].scale.setScalar(this.dist*.34),l[1].position.set(h,s*.48,c),l[1].scale.setScalar(this.dist*.22),l[2].position.set(this.pos.x,40,this.pos.z),l[2].scale.setScalar(this.dist*.12))}return this.pendingThunder.push({at:this.time+Math.min(2.2,this.dist/343*.3),dist:this.dist,power:this.power,pos:this.pos.clone().setY(600)}),this}update(t,e,i,n=!0){this.time+=t,n&&(this.next-=t*i,this.next<=0&&(this.strike(e),this.next=this.rnd()<.22?1.2+this.rnd()*2.5:7+this.rnd()*22));let s=0;if(this.active){this.age+=t;let r=!1;for(let o of this.strokes){let h=this.age-o.t;if(h<0){r=!0;continue}let c=o.peak*Math.min(1,h/.008)*Math.exp(-h/o.tau);c>.004&&(r=!0),s+=c}s*=.85+.3*Math.sin(this.age*190)*Math.sin(this.age*67),r||(this.active=!1,s=0)}this.intensity=Math.max(0,s),st.uFlash.value=this.intensity*.62,this.active&&(st.uFlashDir.value.copy(this.dir),st.uFlashSheet.value=this.sheet),this.bolt.visible=this.active&&!this.sheet&&this.intensity>.01,this.mat.uniforms.uPower.value=this.intensity*30,this.mat.uniforms.uBranchK.value=Math.exp(-this.age/.17);{let r=Math.exp(-this.dist*st.uFogDensity.value*.55),o=this.active?this.intensity*r:0,h=this.sheet?[.14,.09,0]:[.075,.03,.05];for(let c=0;c<3;c++){let l=this.glows[c];l.visible=o*h[c]>.002,l.material.color.setRGB(.62*o*h[c],.7*o*h[c],1*o*h[c])}}this.mat.uniforms.uFog.value=Math.exp(-this.dist*st.uFogDensity.value*.55);for(let r=this.pendingThunder.length-1;r>=0;r--)if(this.time>=this.pendingThunder[r].at){let o=this.pendingThunder.splice(r,1)[0];this.onThunder&&this.onThunder(o)}}};var Gx=`
attribute vec4 aPos;      // xyz, size
attribute vec4 aData;     // alpha, rotation, stretch, kind
attribute vec3 aVel;
attribute vec2 aMisc;     // age 0..1, seed
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist; varying float vAge; varying float vSeed; varying float vSpot;
${Js}
void main() {
  vec3 sl; vSpot = spotAt(aPos.xyz, sl);
  vec4 mv = viewMatrix * vec4(aPos.xyz, 1.0);
  vec3 vv = (viewMatrix * vec4(aVel, 0.0)).xyz;
  float sp = length(aVel);
  vec2 dir = normalize(vv.xy + vec2(1e-5, 0.0));
  vec2 perp = vec2(-dir.y, dir.x);
  vec2 off;
  if (aData.w < 0.5) {
    // droplet: a thin streak, head at the front
    float own = step(1.5, aMisc.y);
    // (drawn larger than life: a 1 cm drop two metres away is under a pixel, and a splash is thousands of them)
    float w = aPos.w * mix(0.5, 2.2, own);
    float len = aPos.w * mix(0.9, 2.5, own) + min(sp, 30.0) * mix(0.011, 0.014, own) * aData.z;
    off = perp * position.x * w + dir * position.y * len;
  } else if (aData.w > 2.5) {
    // a splash: an upright moving picture of water thrown up, standing on the surface where it was made. aPos.w = how
    // high the water goes (m); it leans the way the thing that made it was going (aData.y).
    float lean = aData.y, H = aPos.w;
    off = vec2(position.x * 0.8 * H + (position.y + 1.0) * 0.51 * H * lean, (position.y + 1.0) * 0.51 * H);
  } else {
    float c = cos(aData.y), s = sin(aData.y);
    vec2 q = vec2(position.x * c - position.y * s, position.x * s + position.y * c) * aPos.w;
    // smear along the motion
    off = q + dir * dot(q, dir) * min(sp, 30.0) * 0.035 * aData.z;
  }
  mv.xy += off;
  vUv = position.xy; vA = aData.x; vKind = aData.w; vAge = aMisc.x; vSeed = aMisc.y;
  vDist = -mv.z;
  gl_Position = projectionMatrix * mv;
}`,Wx=`
precision highp float;
uniform sampler2D uTex; uniform sampler2D uSplashTex; uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor;
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist; varying float vAge; varying float vSeed; varying float vSpot;
void main() {
  vec3 light = uAmbient * 2.6 + uFlashColor * uFlash * 1.9 + ${yn} * min(vSpot, 1.0) * 0.14;
  float a; vec3 col;
  if (vKind < 0.5) {
    // tapered streak: round bright head, thin fading tail
    float along = smoothstep(-1.0, 0.55, vUv.y);
    float wid = mix(0.25, 1.0, along);
    a = (1.0 - smoothstep(wid * 0.55, wid, abs(vUv.x))) * along * (1.0 - smoothstep(0.75, 1.0, vUv.y)) * vA;
    float head = smoothstep(0.2, 0.8, vUv.y) * (1.0 - smoothstep(0.0, 0.5, abs(vUv.x)));
    col = vec3(0.80, 0.86, 0.90) * light * (1.5 + 1.3 * head);
    if (vSeed >= 1.5) {
      // water thrown by a body or a hull, seen from a couple of metres: a solid bead with a short tail, lit from the
      // sky on its upper side (not the hair-thin streak that reads as rain)
      float rr = length(vec2(vUv.x, (vUv.y - 0.25) * 1.25));
      float bead = 1.0 - smoothstep(0.42, 0.78, rr);
      float tail = (1.0 - smoothstep(0.15, 0.5, abs(vUv.x))) * smoothstep(-1.0, 0.0, vUv.y) * (1.0 - step(0.25, vUv.y)) * 0.5;
      a = max(bead, tail) * vA * 0.9;
      col = mix(vec3(0.24, 0.29, 0.34), vec3(0.44, 0.485, 0.52), smoothstep(0.75, 0.1, rr) * (0.55 + 0.45 * vUv.x)) * light;
    }
  } else if (vKind > 2.5) {
    // the burst itself, sixteen pictures of it from the instant it leaves the sea until the last drops are back in:
    // fingers of water going up, stretching, breaking into drops, falling where they rose. It is water in storm
    // light - grey-blue, darker where it is thick, a little paler where it has broken fine - and never white.
    float var = floor(fract(vSeed * 7.31) * 3.999);
    float f = clamp(vAge, 0.0, 0.999) * 15.0, f0 = floor(f), f1 = min(f0 + 1.0, 15.0);
    vec2 uv = clamp(vec2(vUv.x * 0.5 + 0.5, vUv.y * 0.5 + 0.5), 0.035, 0.965);
    if (fract(vSeed * 3.7) > 0.5) uv.x = 1.0 - uv.x;
    vec4 ta = texture(uSplashTex, vec2((uv.x + mod(f0, 8.0)) * 0.125, (uv.y + var * 2.0 + floor(f0 * 0.125)) * 0.125));
    vec4 tb = texture(uSplashTex, vec2((uv.x + mod(f1, 8.0)) * 0.125, (uv.y + var * 2.0 + floor(f1 * 0.125)) * 0.125));
    vec4 t = mix(ta, tb, f - f0);
    float br = clamp(t.g / max(t.r, 0.004), 0.0, 1.0);
    a = min(t.r * 5.3125 * 1.15, 0.74) * vA * (1.0 - smoothstep(0.88, 1.0, vAge));
    col = mix(vec3(0.20, 0.245, 0.29), vec3(0.37, 0.41, 0.445), br) * light;
  } else {
    float idx = floor(fract(vSeed) * 3.999);
    vec2 cell = vec2(mod(idx, 2.0), floor(idx * 0.5));
    vec4 t = texture(uTex, (vUv * 0.5 + 0.5 + cell) * 0.5);
    // the puff tears apart from its thin parts inward as it ages
    float thr = mix(0.06, 0.70, vAge);
    a = smoothstep(thr - 0.06, thr + 0.52, t.r * (0.72 + 0.56 * t.g)) * vA * (1.0 - 0.45 * vAge) * 0.8;
    a *= 1.0 - smoothstep(0.62, 0.96, max(abs(vUv.x), abs(vUv.y)));          // never the square of the sprite
    // thick parts are greyer, the frayed rim catches more light
    float thick = smoothstep(0.35, 0.95, t.r);
    col = mix(vec3(0.70, 0.76, 0.80), vec3(0.52, 0.58, 0.63), thick * 0.7) * light * (0.9 + 0.25 * vUv.y);
    if (vSeed >= 1.5) { col *= 0.62; a *= 0.7; }      // thrown by a body or a hull: seen close, so thinner and greyer
  }
  // nothing large and bright right on the lens; spray clouds thin out around the camera so the swimmer stays in view
  // (water the swimmer's own body throws is the exception: it has to be seen at arm's length, first person included)
  float nf = step(1.5, vSeed);
  a *= vKind < 0.5 ? smoothstep(mix(0.3, 0.09, nf), mix(2.0, 0.34, nf), vDist) : smoothstep(mix(1.5, 0.14, nf), mix(9.0, 0.42, nf), vDist);
  if (a < 0.004) discard;
  gl_FragColor = vec4(col, a);
}`;function qx(a=31,t=256){let e=ci(a),i=new Float32Array(4096);for(let c=0;c<i.length;c++)i[c]=e();let n=(c,l,u)=>i[((c*73+l*151+u*37)%4096+4096)%4096],s=(c,l,u)=>{let d=Math.floor(c),f=Math.floor(l),m=c-d,b=l-f,g=m*m*(3-2*m),p=b*b*(3-2*b);return(n(d,f,u)*(1-g)+n(d+1,f,u)*g)*(1-p)+(n(d,f+1,u)*(1-g)+n(d+1,f+1,u)*g)*p},r=(c,l,u,d)=>{let f=.5,m=0;for(let b=0;b<d;b++)m+=f*s(c,l,u+b*7),c=c*2.03+11.3,l=l*2.03+5.7,f*=.5;return m},o=new Uint8Array(t*2*t*2*4);for(let c=0;c<2;c++)for(let l=0;l<2;l++){let u=l+c*2+1;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let m=(f+.5)/t*2-1,b=(d+.5)/t*2-1,g=m+(r(m*2.2+3,b*2.2,u+20,3)-.5)*.7,p=b+(r(m*2.2,b*2.2+9,u+40,3)-.5)*.7,x=Math.hypot(g,p)*(.92+.5*(r(Math.atan2(p,g)*1.6+5,1.5,u+60,2)-.5)),v=Math.max(0,1-x*1.08),w=Math.max(0,Math.min(1,(r(g*3.1+7,p*3.1+2,u,4)*1.5-.22)*Math.pow(v,.7)*1.9)),R=r(m*15+1,b*15+4,u+80,3),y=((c*t+d)*t*2+l*t+f)*4;o[y]=Math.round(w*255),o[y+1]=Math.round(R*255),o[y+2]=0,o[y+3]=255}}let h=new Ti(o,t*2,t*2,de,Ne);return h.minFilter=Zt,h.magFilter=Zt,h.generateMipmaps=!1,h.needsUpdate=!0,h}function Xx(a=77,t=160){let e=ci(a),i=8,n=16,s=4,r=5,o=document.createElement("canvas");o.width=o.height=t*i;let h=o.getContext("2d");h.fillStyle="#000",h.fillRect(0,0,o.width,o.height),h.globalCompositeOperation="lighter",h.lineCap="round";let c=.5435,l=(t-2*r)/1.6,u=(t-2*r-3)/1.02,d=t/160,f=(b,g,p)=>{let x=Math.min(1,Math.max(0,(p-b)/(g-b)));return x*x*(3-2*x)};for(let b=0;b<s;b++){let g=(e()-.5)*.14,p=[],x=7+Math.floor(e()*4);for(let w=0;w<x;w++){let R=g+(e()<.3?(e()-.5)*.26:(e()<.5?-1:1)*(.22+.55*e())),y=(.58+.42*e())*(1-.3*Math.min(1,Math.abs(R-g)/.8)),T=10+Math.floor(e()*8),S=.9+1.2*e(),_=.02+.05*e();for(let E=0;E<T;E++){let I=.28+.72*(E+e()*.7)/T;p.push({a:R+(e()-.5)*_*(1+2*(1-I)),v:y*I,r:S*(E===T-1?2.5:.9+1.5*e()*e())*(.7+.5*I),fine:.25+.3*I,kd:.45,die:.8+.2*e(),al:.5+.3*e()})}}for(let w=0;w<230;w++)p.push({a:g+(e()+e()+e()-1.5)*.85,v:.2+.74*Math.pow(e(),1.1),r:.6+1*e()*e(),fine:.75+.25*e(),kd:.5+.4*e(),die:.45+.55*e(),al:.3+.35*e()});let v=[];for(let w=0;w<14;w++)v.push({x:e()-.5,y:e(),r:.5+.5*e()});for(let w=0;w<n;w++){let R=w/(n-1),y=.14+R*3.56,T=w%i*t,S=(i-1-(b*2+Math.floor(w/i)))*t;h.save(),h.beginPath(),h.rect(T+r,S+r,t-2*r,t-2*r),h.clip();let _=T+t/2,E=S+t-r-1,I=Math.sin(Math.min(1,R*3.2)*Math.PI)*.9+.1*(1-R),W=.1+.22*Math.min(1,R*2.2);for(let Y of v){let k=_+Y.x*W*2*l,z=E-Y.y*.1*I*u,O=(.035+.045*Y.r)*l*(.6+.6*I),U=h.createRadialGradient(k,z,0,k,z,O);U.addColorStop(0,`rgba(48,${Math.round(48*.22)},0,${.3*(1-R)*(.4+.6*I)})`),U.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=U,h.beginPath(),h.arc(k,z,O,0,6.283),h.fill()}for(let Y of p){let k=Math.sin(Y.a)*Y.v,z=Math.cos(Y.a)*Y.v,O=Math.exp(-Y.kd*y),U=k*(1-O)/Y.kd,N=z*y-.5*c*y*y;if(N<0)continue;let D=k*O*l,P=-(z-c*y)*u,G=_+U*l,V=E-N*u,H=Math.max(0,1-y/1.5),B=Y.fine*(1-.7*H),j=Y.al*(1-f(Y.die-.22,Y.die,R))*(.6+.4*H);if(j<.02)continue;let tt=.105+.02*H;h.strokeStyle=`rgba(48,${Math.round(48*B)},0,${j})`,h.lineWidth=Math.max(1,Y.r*d*(.9+2.95*H)),h.beginPath(),h.moveTo(G-D*tt,V-P*tt),h.lineTo(G,V),h.stroke()}h.restore()}}let m=new Bi(o);return m.colorSpace=je,m.minFilter=Qe,m.magFilter=Zt,m.generateMipmaps=!0,m}var Ao=class{constructor(t,e=6e3){this.waves=t,this.max=e,this._rx=1,this._rz=0,this.px=new Float32Array(e),this.py=new Float32Array(e),this.pz=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vz=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.grow=new Float32Array(e),this.kind=new Float32Array(e),this.stretch=new Float32Array(e),this.rot=new Float32Array(e),this.alpha=new Float32Array(e),this.seed=new Float32Array(e),this.head=0,this.alive=0;let i=new Ji;i.setAttribute("position",new Bt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]);let n=s=>{let r=new Je(new Float32Array(e*s),s);return r.setUsage(Hi),r};this.aPos=n(4),this.aData=n(4),this.aVel=n(3),this.aMisc=n(2),i.setAttribute("aPos",this.aPos),i.setAttribute("aData",this.aData),i.setAttribute("aVel",this.aVel),i.setAttribute("aMisc",this.aMisc),i.instanceCount=0,this.mesh=new ut(i,new ne({uniforms:{uTex:{value:qx()},uSplashTex:{value:Xx()},uAmbient:st.uAmbient,uFlash:st.uFlash,uFlashColor:st.uFlashColor,uSpotPos:st.uSpotPos,uSpotDir:st.uSpotDir,uSpotP:st.uSpotP},vertexShader:Gx,fragmentShader:Wx,transparent:!0,depthWrite:!1})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=15,this._s=si(),this._tick=0,this.emitAcc=0,this.near=!1,this.hot=[]}emit(t,e,i,n,s,r,o,h,c,l=0,u=1,d=-1){let f=this.head;this.head=(this.head+1)%this.max,this.px[f]=t,this.py[f]=e,this.pz[f]=i,this.vx[f]=n,this.vy[f]=s,this.vz[f]=r,this.life[f]=o,this.maxLife[f]=o,this.size[f]=h,this.kind[f]=c,this.grow[f]=l,this.rot[f]=c>2.5?this.lean||0:c>1.5?0:Math.random()*6.283,this.alpha[f]=u,this.seed[f]=Math.random()*.999+(this.near?2:0),this.stretch[f]=d>=0?d:c<.5?1:c>1.5?2.6:.35}burst(t,e,i,n,s,r=0,o=0){let h=this.near;this.near=!0;let c=Math.min(1.9,.42+n*.27),l=s.x*.1,u=s.z*.1,d=Math.min(230,Math.round(8+n*38));for(let g=0;g<d;g++){let p=Math.random()*6.283,x=.12+Math.random()*.34*c,v=(1+2.4*Math.random())*c,w=(1.8+3.6*Math.pow(Math.random(),1.4))*c;this.emit(t+Math.cos(p)*x,e+.03+Math.random()*.1,i+Math.sin(p)*x,Math.cos(p)*v+r*v*1.5+l,w,Math.sin(p)*v+o*v*1.5+u,.55+Math.random()*.75,.01+Math.pow(Math.random(),2)*.026,0,0,.95)}let f=Math.min(60,Math.round(n*10));for(let g=0;g<f;g++){let p=Math.random()*6.283,x=Math.random()*.7*c;this.emit(t+Math.cos(p)*.08,e+.05,i+Math.sin(p)*.08,Math.cos(p)*x+r*c+l,(3.2+4.2*Math.random())*c,Math.sin(p)*x+o*c+u,.6+Math.random()*.7,.012+Math.random()*.022,0,0,.95)}let m=Math.max(1,Math.min(5,Math.round(n*1.1)));for(let g=0;g<m;g++){let p=Math.random()*6.283,x=.24*c*Math.random(),v=(.55+.45*Math.random())*c*(g?.8:1.15);this.lean=(Math.random()-.5)*.3+(r*this._rx+o*this._rz)*.4,this.emit(t+Math.cos(p)*x,e-.03,i+Math.sin(p)*x,r*.5*c,0,o*.5*c,.62*Math.sqrt(v/.45)*(.92+.16*Math.random()),v,3,0,.8,0)}this.lean=0;let b=Math.max(0,Math.min(14,Math.round(n*2.8-2.6)));for(let g=0;g<b;g++){let p=Math.random()*6.283,x=Math.random()*.9*c;this.emit(t+Math.cos(p)*.3,e+.15+Math.random()*.3,i+Math.sin(p)*.3,Math.cos(p)*x+l*2,.5+Math.random()*1.1,Math.sin(p)*x+u*2,.9+Math.random()*1.1,(.24+Math.random()*.3)*c,1,.5,.2,.3)}this.near=h}slap(t,e,i,n,s,r,o=0,h=0,c=0,l=1){let u=.62+.38*Math.min(2.4,n),d=this.near;this.near=!0;let f=n>1.15?2:1,m=s*this._rx+r*this._rz;for(let g=0;g<f;g++){let p=(.5+.16*Math.random())*u*(.62+.38*l)*(g?.7:1);this.lean=m*.42+(Math.random()-.5)*.16,this.emit(t+(Math.random()-.5)*.08+s*.05,e-.02,i+(Math.random()-.5)*.08+r*.05,o+s*.4*u,h,c+r*.4*u,.62*Math.sqrt(p/.45)*(.92+.16*Math.random()),p,3,0,.8,0)}this.lean=0;let b=Math.round(8+n*16);for(let g=0;g<b;g++){let p=Math.random()*6.283,x=Math.random(),v=(.3+1.6*x*x)*u,w=(1.4+2.8*Math.pow(Math.random(),1.2))*u,R=Math.random(),y=R<.55?.01+Math.random()*.012:R<.9?.02+Math.random()*.016:.036+Math.random()*.022;this.emit(t+Math.cos(p)*.08*u,e+.02+Math.random()*.08,i+Math.sin(p)*.08*u,o+Math.cos(p)*v+s*(.3+1.2*Math.random())*u,h+w,c+Math.sin(p)*v+r*(.3+1.2*Math.random())*u,.36+Math.random()*.44,y,0,0,1)}this.near=d}fling(t,e,i,n,s,r,o){let h=this.near;if(this.near=!0,o>.45){let l=(.26+.14*Math.random())*(.6+.5*o),u=Math.hypot(n,r)+1e-4;this.lean=(n*this._rx+r*this._rz)/u*Math.min(1,u/3)*.5,this.emit(t,e-.04,i,n*.25,0,r*.25,.62*Math.sqrt(l/.45),l,3,0,.7,0),this.lean=0}let c=Math.round(10+o*22);for(let l=0;l<c;l++){let u=.2+.8*Math.random(),d=Math.random();this.emit(t+(Math.random()-.5)*.12,e+Math.random()*.08,i+(Math.random()-.5)*.12,n*u+(Math.random()-.5)*1.3,s*u+.5+Math.random()*1.6,r*u+(Math.random()-.5)*1.3,.38+Math.random()*.5,d<.6?.01+Math.random()*.012:d<.93?.022+Math.random()*.018:.04+Math.random()*.025,0,0,1)}this.near=h}seedCrests(t,e,i,n,s){let r=this.waves,o=this._s;this.hot.length=0;let h=Math.round(s*(.5+.5*n)),c=Math.hypot(i.x,i.z)+.001;for(let u=0;u<h;u++){let d=Math.random()*6.283,f=3+Math.pow(Math.random(),1.6)*95,m=e.x+Math.cos(d)*f,b=e.z+Math.sin(d)*f;r.sample(m,b,o);let g=Math.max(0,.42-o.jac)*2.4,p=Math.max(g,o.aer*1.6,o.turb*.5);if(p<.05)continue;(this.hot.length<6||p>this.hot[this.hot.length-1].amount)&&(this.hot.push({x:m,y:o.h,z:b,amount:p}),this.hot.sort((v,w)=>w.amount-v.amount),this.hot.length>6&&(this.hot.length=6));let x=Math.min(12,Math.round(2+p*6));for(let v=0;v<x;v++){let w=Math.random()<.36,R=(Math.random()-.5)*2.4,y=(Math.random()-.5)*2.4,T=(.8+2.8*Math.random())*(.6+p);this.emit(m+R,o.h+.05+Math.random()*.25,b+y,o.vx+i.x*(.22+.3*Math.random()),o.vy*.5+T,o.vz+i.z*(.22+.3*Math.random()),w?1.4+Math.random()*1.8:.6+Math.random()*.9,w?.4+Math.random()*.7:.014+Math.pow(Math.random(),2)*.04,w?1:0,w?1.2:0,w?.2:.9)}}let l=Math.round(s*.34*n*n);for(let u=0;u<l;u++){let d=Math.random()*6.283,f=2+Math.pow(Math.random(),1.3)*48,m=e.x+Math.cos(d)*f,b=e.z+Math.sin(d)*f;r.sample(m,b,o);let g=Math.max(0,-(o.nx*i.x+o.nz*i.z)/c);if(!(Math.random()>.35+1.6*g))for(let p=0;p<2;p++)this.emit(m+(Math.random()-.5)*3,o.h+.1+Math.random()*.5,b+(Math.random()-.5)*3,o.vx+i.x*(.45+.4*Math.random()),.4+Math.random()*1.6,o.vz+i.z*(.45+.4*Math.random()),.6+Math.random()*.9,.2+Math.random()*.3,2,.25,.07,1.1)}}seedBreakers(t,e,i){let n=this.waves;for(let s of n.breakers){if(!s.active||s.height<2)continue;let r=s.brk<.01?Math.min(.34,Math.max(0,(s.height-3.5)/18)):0,o=Math.max(s.curl,s.brk*.8,s.turb*.35,r),h=o===r;if(o<.05)continue;let c=e.x-s.ox,l=e.z-s.oz,u=-c*s.dz+l*s.dx,d=c*s.dx+l*s.dz-s.s;if(Math.abs(d)>160+s.height*3)continue;let f=Math.min(2.2,.7+s.height/16);this.emitAcc+=t*620*o*Math.min(1.6,s.height/8)*(this.thin===void 0?1:this.thin);let m=Math.min(130,Math.floor(this.emitAcc));this.emitAcc-=m;for(let b=0;b<m;b++){let g=u+(Math.random()-.5)*110*f;if(Math.exp(-(g*g)/(s.width*s.width))<.15)continue;let v=2.6*Math.sin(g*.047+s.seed*.6)+1.2*Math.sin(g*.13+s.seed*2.1)+(h?(Math.random()-.5)*s.front*.45:(Math.random()-.35)*s.front*1.3),w=s.ox+s.dx*(s.s+v)-s.dz*g,R=s.oz+s.dz*(s.s+v)+s.dx*g,y=n.heightFast(w,R)+Math.random()*.6,T=Math.random()<(s.mega?.14:.26)*(this.thin===void 0?1:this.thin),S=s.speed*(.55+.6*Math.random());this.emit(w,y,R,s.dx*S+i.x*.2,(1.5+5.5*Math.random())*(.5+o)*f,s.dz*S+i.z*.2,T?2+Math.random()*2.4:.8+Math.random()*1.1,T?Math.min(3,(.7+Math.random()*1.2)*f):.02+Math.pow(Math.random(),2)*.07,T?1:0,T?1.4:0,T?.17:.9,T?.5:1)}}}update(t,e,i){let n=this.max,s=this.waves,r=0,o=this.aPos.array,h=this.aData.array,c=this.aVel.array,l=this.aMisc.array;this._tick=(this._tick+1)%3;for(let u=0;u<n;u++){let d=this.life[u];if(d<=0||(d-=t,this.life[u]=d,d<=0))continue;let f=this.kind[u],m=this.seed[u]>=2;if(f>2.5)this.px[u]+=this.vx[u]*t,this.py[u]+=this.vy[u]*t,this.pz[u]+=this.vz[u]*t;else{let x=m?f>.5?.35:.06:f>.5?2.4:.5,v=Math.exp(-x*t);this.vx[u]=i.x+(this.vx[u]-i.x)*v,this.vz[u]=i.z+(this.vz[u]-i.z)*v,this.vy[u]=(this.vy[u]-(f>.5?m?8.2:2.6:9.81)*t)*(f>.5&&!m?v:1),this.px[u]+=this.vx[u]*t,this.py[u]+=this.vy[u]*t,this.pz[u]+=this.vz[u]*t}if(this.size[u]+=this.grow[u]*t,f<2.5&&u%3===this._tick&&this.vy[u]<0&&this.py[u]<s.heightFast(this.px[u],this.pz[u])-.12){this.life[u]=0;continue}let b=1-d/this.maxLife[u],g=f<.5?Math.min(1,(1-b)*6):f>2.5?Math.min(1,b*14):Math.min(1,b*9)*Math.min(1,(1-b)*3),p=r*4;o[p]=this.px[u],o[p+1]=this.py[u],o[p+2]=this.pz[u],o[p+3]=this.size[u],h[p]=this.alpha[u]*g,h[p+1]=this.rot[u],h[p+2]=this.stretch[u],h[p+3]=f,c[r*3]=this.vx[u],c[r*3+1]=this.vy[u],c[r*3+2]=this.vz[u],l[r*2]=b,l[r*2+1]=this.seed[u],r++}this.alive=r,this.mesh.geometry.instanceCount=r,this.aPos.needsUpdate=!0,this.aData.needsUpdate=!0,this.aVel.needsUpdate=!0,this.aMisc.needsUpdate=!0}};var jx=`
attribute vec4 aPos;        // xyz, radius
attribute float aSeed;
uniform float uPx;
varying vec2 vUv; varying float vSeed; varying float vSmall;
void main() {
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  float dist = length(aPos.xyz - cameraPosition);
  float r = max(min(aPos.w, dist * 0.022), dist * uPx * 1.1);
  vSmall = clamp(aPos.w / r, 0.0, 1.0);
  if (dist < 0.22) r = 0.0;
  vec3 wp = aPos.xyz + (right * position.x + up * position.y) * r;
  vUv = position.xy; vSeed = aSeed;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,Yx=`
precision highp float;
uniform vec3 uLight;
varying vec2 vUv; varying float vSeed; varying float vSmall;
void main() {
  float r = length(vUv);
  if (r > 1.0) discard;
  // a bubble is a mirror ball under water: dark body, bright rim (total internal reflection), sky glint on top
  float rim = smoothstep(0.55, 1.0, r);
  float glint = exp(-dot(vUv - vec2(-0.25, 0.42), vUv - vec2(-0.25, 0.42)) * 14.0);
  float body = 0.10 + 0.25 * (vUv.y * 0.5 + 0.5);
  float v = mix(body + rim * 0.9 + glint * 1.3, 0.65, 1.0 - vSmall);
  if (v < 0.16 && r < 0.5 && vSmall > 0.6) discard;       // see through the middle of big bubbles
  gl_FragColor = vec4(uLight * v * 0.6, 1.0);
}`,Kx=`
attribute vec4 aSeed;
uniform vec3 uBox; uniform vec3 uOffset; uniform float uPx; uniform float uTime;
varying vec2 vUv; varying float vA;
void main() {
  vec3 p = mod(aSeed.xyz * uBox + uOffset - cameraPosition, uBox) - uBox * 0.5;
  p += 0.05 * vec3(sin(uTime * 0.7 + aSeed.w * 40.0), sin(uTime * 0.9 + aSeed.x * 31.0), cos(uTime * 0.6 + aSeed.y * 27.0));
  float dist = length(p);
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  float r = max(0.0012 + 0.0035 * aSeed.w * aSeed.w, dist * uPx * 0.8);
  vec3 wp = cameraPosition + p + (right * position.x + up * position.y) * r;
  vUv = position.xy;
  vA = smoothstep(0.12, 0.5, dist) * (1.0 - smoothstep(uBox.x * 0.36, uBox.x * 0.5, dist));
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,Qx=`
precision highp float;
uniform vec3 uLight;
varying vec2 vUv; varying float vA;
void main() {
  if (dot(vUv, vUv) > 1.0 || vA < 0.35) discard;
  gl_FragColor = vec4(uLight * 0.55, 1.0);
}`;function tf(a,t){let e=new Ji;if(e.setAttribute("position",new Bt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),e.setIndex([0,1,2,0,2,3]),t){let i=new Float32Array(a*t);for(let n=0;n<i.length;n++)i[n]=Math.random();e.setAttribute("aSeed",new Je(i,t))}return e.instanceCount=a,e}var Ro=class{constructor(t,e){this.waves=t,this.group=new ae,this.under=0,this.isUnder=!1,this.depth=0,this.aeration=0,this.burst=0,this.onEnter=null,this.onExit=null,this.light=new M;let i=this.max=e.bubbles;this.bx=new Float32Array(i),this.by=new Float32Array(i),this.bz=new Float32Array(i),this.bvx=new Float32Array(i),this.bvz=new Float32Array(i),this.br=new Float32Array(i),this.bl=new Float32Array(i),this.bp=new Float32Array(i),this.head=0;let n=tf(i,0);this.aPos=new Je(new Float32Array(i*4),4),this.aPos.setUsage(Hi),this.aSeed=new Je(new Float32Array(i),1),this.aSeed.setUsage(Hi),n.setAttribute("aPos",this.aPos),n.setAttribute("aSeed",this.aSeed),n.instanceCount=0,this.bubbles=new ut(n,new ne({uniforms:{uPx:{value:.001},uLight:{value:this.light}},vertexShader:jx,fragmentShader:Yx})),this.bubbles.frustumCulled=!1,this.bubbles.renderOrder=8,this.moteOffset=new M,this.motes=new ut(tf(e.motes,4),new ne({uniforms:{uBox:{value:new M(7,7,7)},uOffset:{value:this.moteOffset},uPx:{value:.001},uTime:st.uTime,uLight:{value:this.light}},vertexShader:Kx,fragmentShader:Qx})),this.motes.frustumCulled=!1,this.motes.renderOrder=8,this.motes.visible=!1,this.group.add(this.bubbles,this.motes),this._w={vx:0,vy:0,vz:0},this._tick=0,this._exhale=0,this._aerAcc=0,this._kick=0,this._n=new M}bubble(t,e,i,n,s=6,r=0,o=0){let h=this.head;this.head=(this.head+1)%this.max,this.bx[h]=t,this.by[h]=e,this.bz[h]=i,this.br[h]=n,this.bl[h]=s,this.bp[h]=Math.random()*6.283,this.bvx[h]=r,this.bvz[h]=o}burstAt(t,e,i,n=1){for(let s=0;s<e;s++){let r=Math.random()*6.283,o=Math.acos(2*Math.random()-1),h=i*Math.cbrt(Math.random());this.bubble(t.x+Math.sin(o)*Math.cos(r)*h,t.y+Math.cos(o)*h,t.z+Math.sin(o)*Math.sin(r)*h,(.002+Math.pow(Math.random(),3)*.02)*n,2.5+Math.random()*5,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2)}}update(t,e,i,n,s,r,o,h,c,l){let u=i,d=e.position,f=this._n.set(u.nx,u.ny,u.nz),m=f.x*0+f.y*(d.y-u.h)+f.z*0;this.depth=-m,o.u.uWaterPlane.value.set(f.x,f.y,f.z,-(f.x*d.x+f.y*u.h+f.z*d.z)),o.u.uUnderAmount.value=m<.4?1:0;let b=this.isUnder;this.isUnder=b?m<.03:m<-.03;let g=1-ze(-.12,.05,m);this.under+=(g-this.under)*(1-Math.exp(-t*18)),this.isUnder&&!b&&this.onEnter&&this.onEnter(),!this.isUnder&&b&&this.onExit&&this.onExit();let p=Math.max(0,this.depth),x=st.uAmbient.value,v=st.uFlash.value,w=st.uFlashColor.value,R=Math.exp(-p*.085);o.u.uUnderColor.value.set((x.x*.9+w.x*v*.5)*.1*R,(x.y*.9+w.y*v*.5)*.3*R,(x.z*.9+w.z*v*.5)*.38*R),this.burst=Math.max(0,this.burst-t*.7);let y=Math.min(1,(u.aer*1.15+this.burst*.8)*Math.exp(-p/3.2)+u.turb*.22*Math.exp(-p/4.5));this.aeration+=(y-this.aeration)*(1-Math.exp(-t*(y>this.aeration?12:1.6))),o.u.uAeration.value=this.aeration*this.under;let T=1+2.8*this.aeration;o.u.uUnderExt.value.set(.3*T,.13*T,.1*T),o.u.uUnderDistort.value=.004+.01*Math.min(1,u.turb+this.aeration),o.u.uShaft.value=(.9-.5*h.storm+v*3)*Math.exp(-p*.12),o.u.uExposureBias.value=1+(.62*Math.exp(-p*.045)-1)*this.under;let S=2.6*R*(1+5*this.aeration);this.light.set((x.x*S+w.x*v*.8)*1,(x.y*S+w.y*v*.8)*1.25,(x.z*S+w.z*v*.8)*1.35);let _=2*Math.tan($i.degToRad(e.fov)*.5)/Math.max(1,l);if(this.bubbles.material.uniforms.uPx.value=_,this.motes.material.uniforms.uPx.value=_,r.wasUnder&&r.alive)for(this._exhale+=t*(5+16*s.effort+22*ft((40-r.oxygen)/40));this._exhale>=1;)this._exhale-=1,this.bubble(c.x+(Math.random()-.5)*.06,c.y,c.z+(Math.random()-.5)*.06,.003+Math.random()*.012,5,n.vel.x*.5,n.vel.z*.5);if(n.subFrac>.5)for(this._kick+=t*Math.min(140,n.relSpeed*n.relSpeed*3.2);this._kick>=1;){this._kick-=1;let z=n.points[2+(Math.random()*9|0)].world;this.bubble(z.x+(Math.random()-.5)*.3,z.y+(Math.random()-.5)*.3,z.z+(Math.random()-.5)*.3,.002+Math.random()*.007,3+Math.random()*3)}if(this.under>.3&&this.aeration>.04){this._aerAcc+=t*900*this.aeration;let z=Math.min(60,Math.floor(this._aerAcc));for(this._aerAcc-=z;z-- >0;){let O=Math.random()*6.283,U=.4+Math.random()*3.6,N=(Math.random()-.4)*3.2;this.bubble(d.x+Math.cos(O)*U,d.y+N,d.z+Math.sin(O)*U,.002+Math.pow(Math.random(),2.5)*.03,2+Math.random()*4,(Math.random()-.5)*2,(Math.random()-.5)*2)}}let E=this.waves,I=this.aPos.array,W=this.aSeed.array,Y=0;this._tick=(this._tick+1)%4;let k=E.breakers.some(z=>z.active&&(z.roll>.01||z.turb>.01));for(let z=0;z<this.max;z++){let O=this.bl[z];if(O<=0)continue;O-=t,this.bl[z]=O;let U=this.br[z],N=.18+2.6*Math.sqrt(U);this.bp[z]+=t*(5+30*U/.02);let D=this.bvx[z]+Math.sin(this.bp[z])*.12,P=N,G=this.bvz[z]+Math.cos(this.bp[z]*.8)*.12;if(k){let B=this._w;B.vx=0,B.vy=0,B.vz=0,E.breakerFlow(this.bx[z],this.by[z],this.bz[z],u.h,B),D+=B.vx,P+=B.vy,G+=B.vz}let V=Math.exp(-t*1.5);if(this.bvx[z]*=V,this.bvz[z]*=V,this.bx[z]+=D*t,this.by[z]+=P*t,this.bz[z]+=G*t,z%4===this._tick&&this.by[z]>E.heightFast(this.bx[z],this.bz[z])-.02){this.bl[z]=0;continue}if(O<=0)continue;let H=Y*4;I[H]=this.bx[z],I[H+1]=this.by[z],I[H+2]=this.bz[z],I[H+3]=U*Math.min(1,O*2),W[Y]=this.bp[z],Y++}this.bubbles.geometry.instanceCount=Y,this.aPos.needsUpdate=!0,this.aSeed.needsUpdate=!0,this.bubbles.visible=Y>0,this.motes.visible=this.under>.02,this.moteOffset.addScaledVector(n.relFlow,t*.6),this.moteOffset.y-=t*.01}};function zc(a,t,e){let i=Math.floor(a.sampleRate*t),n=a.createBuffer(1,i,a.sampleRate),s=n.getChannelData(0),r=0,o=0,h=0,c=0;for(let u=0;u<i;u++){let d=Math.random()*2-1;e==="white"?s[u]=d*.6:e==="pink"?(r=.99765*r+d*.099046,o=.963*o+d*.2965164,h=.57*h+d*1.0526913,s[u]=(r+o+h+d*.1848)*.16):(c=(c+.02*d)/1.02,s[u]=c*3.2)}let l=Math.floor(a.sampleRate*.05);for(let u=0;u<l;u++){let d=u/l;s[i-l+u]=s[i-l+u]*(1-d)+s[u]*d}return n}var Co=class{constructor(){this.ctx=null,this.ready=!1,this.volume=.85,this.sfxOn=!0,this.under=0,this.heartPhase=0,this.gurgleTimer=1,this.time=0,this.patter=0,this.lastCrash=-10}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.white=zc(e,4,"white"),this.pink=zc(e,6,"pink"),this.brown=zc(e,8,"brown");let i=S=>{let _=e.createGain();return _.gain.value=S,_},n=(S,_,E=.7)=>{let I=e.createBiquadFilter();return I.type=S,I.frequency.value=_,I.Q.value=E,I};this.G=i,this.F=n,this.master=i(this.volume);let s=e.createDynamicsCompressor();s.threshold.value=-22,s.ratio.value=7,s.attack.value=.004,s.release.value=.35,this.finalLP=n("lowpass",2e4,.7);let r=i(1.5);this.master.connect(this.finalLP),this.finalLP.connect(s),s.connect(r),r.connect(e.destination),this.air=i(1),this.airLP=n("lowpass",2e4,.7),this.airBoom=n("peaking",170,1.6),this.airBoom.gain.value=0,this.air.connect(this.airLP),this.airLP.connect(this.airBoom),this.airBoom.connect(this.master),this.water=i(0),this.water.connect(this.master);let o=e.createBuffer(2,Math.floor(e.sampleRate*2.6),e.sampleRate);for(let S=0;S<2;S++){let _=o.getChannelData(S),E=0;for(let I=0;I<_.length;I++){let W=I/e.sampleRate;E+=(Math.random()*2-1-E)*.12,_[I]=E*Math.exp(-W*2.4)*2.2}}this.verb=e.createConvolver(),this.verb.buffer=o,this.verbOut=i(.5),this.verb.connect(this.verbOut),this.verbOut.connect(this.master),this.waterSend=i(.9),this.water.connect(this.waterSend),this.waterSend.connect(this.verb);let h=(S,_=1)=>{let E=e.createBufferSource();return E.buffer=S,E.loop=!0,E.playbackRate.value=_,E.start(0,Math.random()*S.duration),E},c=(S,_,E)=>{let I=S;for(let W of _)I.connect(W),I=W;return I.connect(E),_[_.length-1]};this.rumble=c(h(this.brown,.8),[n("lowpass",130),i(.3)],this.air),this.wash=c(h(this.pink),[n("bandpass",620,.5),i(0)],this.air),this.roar=c(h(this.brown,1.3),[n("bandpass",210,.6),i(0)],this.air),this.roarF=this.roar,this.spots=[];for(let S=0;S<3;S++){let _=e.createPanner();_.panningModel="HRTF",_.distanceModel="inverse",_.refDistance=6,_.rolloffFactor=1.1,_.maxDistance=200;let E=i(0),I=n("bandpass",900+S*450,.7);h(this.pink,.9+S*.13).connect(I),I.connect(E),E.connect(_),_.connect(this.air),this.spots.push({p:_,g:E,x:0,y:0,z:0,a:0})}this.rainG=c(h(this.white),[n("highpass",1900),n("lowpass",9500),i(0)],this.air),this.patterG=c(h(this.white,1.3),[n("bandpass",3400,1.4),i(0)],this.air),this.windF=n("bandpass",420,1.8),this.windG=i(0),this.windPan=e.createStereoPanner?e.createStereoPanner():i(1),h(this.pink,.7).connect(this.windF),this.windF.connect(this.windG),this.windG.connect(this.windPan),this.windPan.connect(this.air),this.whistleF=n("bandpass",1300,7),this.whistleG=i(0),h(this.pink,1.1).connect(this.whistleF),this.whistleF.connect(this.whistleG),this.whistleG.connect(this.windPan),this.droneG=c(h(this.brown,.55),[n("lowpass",95),i(.9)],this.water),this.streamF=n("bandpass",520,.9),this.streamG=i(0),this.streamAM=i(0);let l=h(this.brown,.35),u=i(14);l.connect(n("lowpass",14)).connect(u),u.connect(this.streamAM.gain),h(this.pink,1.25).connect(this.streamF),this.streamF.connect(this.streamAM),this.streamAM.connect(this.streamG),this.streamG.connect(this.water),this.bodyG=i(1),this.bodyG.connect(this.master),this.vDry=i(1);let d=n("highpass",115,.7),f=n("peaking",1150,1),m=n("lowpass",6200,.7);f.gain.value=2.5,this.vDry.connect(d),d.connect(f),f.connect(m),m.connect(this.master),this.vWet=i(0),this.vLP=n("lowpass",430,3.5),this.vRes=n("peaking",260,2),this.vRes.gain.value=8,this.vTrem=i(.55),this.vWet.connect(this.vLP),this.vLP.connect(this.vRes),this.vRes.connect(this.vTrem),this.vTrem.connect(this.water),this.vTrem.connect(this.verb),this.breathG=i(1),this.breathG.connect(this.vDry),this.breathG.connect(this.vWet),this.beds=null,this.swimLevel=0;let b=e.createOscillator();b.type="sawtooth",b.frequency.value=17;let g=i(.5);b.connect(g),g.connect(this.vTrem.gain);let p=h(this.brown,.3),x=i(55);p.connect(n("lowpass",6)).connect(x),x.connect(b.frequency),b.start(),this.tinG=i(0),this.tinG.connect(s);for(let S of[3150,3212]){let _=e.createOscillator();_.type="sine",_.frequency.value=S,_.connect(this.tinG),_.start()}this.heliPan=e.createPanner(),this.heliPan.panningModel="HRTF",this.heliPan.distanceModel="inverse",this.heliPan.refDistance=45,this.heliPan.rolloffFactor=.7,this.heliPan.maxDistance=1200,this.heliG=i(0),this.heliChop=i(.5);let v=e.createOscillator();v.type="sawtooth",v.frequency.value=21;let w=i(.45);v.connect(w),w.connect(this.heliChop.gain),v.start(),h(this.brown,1.4).connect(n("lowpass",180)).connect(this.heliChop);let R=n("bandpass",1900,6),y=i(.05);h(this.white,1).connect(R),R.connect(y),y.connect(this.heliG),this.heliChop.connect(this.heliG),this.heliG.connect(this.heliPan),this.heliPan.connect(this.air);let T=(S,_)=>{let E=e.createPanner();return E.panningModel="HRTF",E.distanceModel="inverse",E.refDistance=S,E.rolloffFactor=_,E.maxDistance=5e3,E};this.PN=T,this.shipPan=T(55,.9),this.shipG=i(0),this.shipG.connect(this.shipPan),this.shipPan.connect(this.air),this.shipBeat=i(.6);{let S=e.createOscillator();S.type="sine",S.frequency.value=1.55;let _=i(.55);S.connect(_),_.connect(this.shipBeat.gain),S.start()}h(this.brown,1).connect(n("lowpass",70)).connect(this.shipBeat),this.shipBeat.connect(this.shipG),this.bowPan=T(16,1.1),this.bowG=i(0),this.bowG.connect(this.bowPan),this.bowPan.connect(this.air),this.propPan=T(10,1.3),this.propG=i(0),this.propG.connect(this.propPan),this.propPan.connect(this.air),this.shipWater=i(0),this.shipWater.connect(this.water),this.voice={},this.curVoice=null,this.ready=!0,this._decodeVoices()}setVoices(t){this.voiceSrc=t,this.ready&&this._decodeVoices()}_decodeVoices(){if(!(!this.voiceSrc||this._decoding)){this._decoding=!0;for(let[t,e]of Object.entries(this.voiceSrc)){let i=atob(e),n=new Uint8Array(i.length);for(let s=0;s<i.length;s++)n[s]=i.charCodeAt(s);this.ctx.decodeAudioData(n.buffer).then(s=>{this.voice[t]=s,this._startBeds()}).catch(()=>{})}}}_startBeds(){let t=this.voice;if(this.beds||!t.b_pant||!t.b_tired||!t.w_swim||this.voiceSrc.a_storm&&!t.a_storm||this.voiceSrc.a_heli&&!t.a_heli||this.voiceSrc.bt_creak&&!t.bt_creak||this.voiceSrc.s_engine&&!t.s_engine||this.voiceSrc.s_bow&&!t.s_bow||this.voiceSrc.s_prop&&!t.s_prop)return;let e=(i,n)=>{let s=this.ctx.createBufferSource();s.buffer=i,s.loop=!0,s.loopStart=.03,s.loopEnd=i.duration-.03;let r=this.G(0);return s.connect(r),r.connect(n),s.start(0,.03+Math.random()*(i.duration-.1)),{s,g:r}};if(this.beds={pant:e(t.b_pant,this.breathG),tired:e(t.b_tired,this.breathG),swim:e(t.w_swim,this.air)},t.a_storm&&(this.beds.storm=e(t.a_storm,this.air)),t.bt_creak&&(this.beds.boat=e(t.bt_creak,this.air)),t.a_heli&&(this.beds.heli=e(t.a_heli,this.heliG),this.beds.heli.g.gain.value=1),t.s_engine){this.beds.shipEng=e(t.s_engine,this.shipG),this.beds.shipEng.g.gain.value=1;let i=this.G(.9);this.beds.shipEng.g.connect(i),i.connect(this.shipWater)}if(t.s_bow&&(this.beds.shipBow=e(t.s_bow,this.bowG),this.beds.shipBow.g.gain.value=1),t.s_prop){this.beds.shipProp=e(t.s_prop,this.propG),this.beds.shipProp.g.gain.value=1;let i=this.G(1.2);this.beds.shipProp.g.connect(i),i.connect(this.shipWater)}}setBreath(t,e,i,n){if(!this.beds||!this.ready||this.ctx.state!=="running")return;let s=this.ctx.currentTime,r=n?.09:.012;this.beds.pant.g.gain.setTargetAtTime(t,s,r),this.beds.tired.g.gain.setTargetAtTime(e,s,r),this.beds.pant.s.playbackRate.setTargetAtTime(i,s,.4)}playVoice(t,e=1,i=1,n=null){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;this.stopVoice(.05);let r=this.ctx,o=r.currentTime,h=i*(this.under>.5?.84:1),c=n?Math.min(n[0],s.duration):0,l=n?Math.min(n[1],s.duration):s.duration,u=(l-c)/h,d=r.createBufferSource();d.buffer=s,d.playbackRate.value=h;let f=this.G(1e-4);return f.gain.setValueAtTime(1e-4,o),f.gain.exponentialRampToValueAtTime(Math.max(.001,e),o+(n&&n[0]>0?.09:.012)),n&&l<s.duration-.01&&(f.gain.setValueAtTime(Math.max(.001,e),o+Math.max(.02,u-.12)),f.gain.exponentialRampToValueAtTime(1e-4,o+u)),d.connect(f),f.connect(this.vDry),f.connect(this.vWet),d.start(o,c,l-c),this.curVoice={s:d,g:f,end:o+u},u}stopVoice(t=.08){let e=this.curVoice;if(!e)return;this.curVoice=null;let i=this.ctx.currentTime;if(!(i>=e.end))try{e.g.gain.setTargetAtTime(0,i,t/3),e.s.stop(i+t+.05)}catch{}}playClip(t,e=1,i=1,n=0){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;let r=this.ctx,o=r.createBufferSource();o.buffer=s,o.playbackRate.value=i;let h=this.G(e);if(o.connect(h),r.createStereoPanner){let c=r.createStereoPanner();c.pan.value=n,h.connect(c),c.connect(this.air)}else h.connect(this.air);return o.start(),s.duration/i}setVolume(t){this.volume=t,this.master&&this.master.gain.setTargetAtTime(this.sfxOn===!1?0:t,this.ctx.currentTime,.05)}setSfx(t){this.sfxOn=t,this.master&&this.master.gain.setTargetAtTime(t?this.volume:0,this.ctx.currentTime,.05),this.tinG&&!t&&this.tinG.gain.setTargetAtTime(0,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_burst(t){let e=this.ctx,i=e.currentTime+(t.delay||0),n=e.createBufferSource();n.buffer=t.buf,n.playbackRate.value=t.rate||1;let s=this.F(t.type||"bandpass",t.f0,t.q||1);t.f1&&s.frequency.exponentialRampToValueAtTime(Math.max(20,t.f1),i+t.dur);let r=this.G(0);r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(Math.max(2e-4,t.gain),i+(t.attack||.02)),r.gain.exponentialRampToValueAtTime(1e-4,i+t.dur),n.connect(s),s.connect(r);let o=r;if(t.pan!==void 0&&e.createStereoPanner){let h=e.createStereoPanner();h.pan.value=t.pan,r.connect(h),o=h}o.connect(t.out||this.air),t.verb&&o.connect(this.verb),n.start(i,Math.random()*(t.buf.duration-t.dur-.1)),n.stop(i+t.dur+.05)}_blip(t,e,i,n,s,r){let o=this.ctx,h=o.currentTime+s,c=o.createOscillator();c.type="sine",c.frequency.setValueAtTime(t,h),c.frequency.exponentialRampToValueAtTime(e,h+i);let l=this.G(0);l.gain.setValueAtTime(1e-4,h),l.gain.exponentialRampToValueAtTime(n,h+i*.3),l.gain.exponentialRampToValueAtTime(1e-4,h+i),c.connect(l),l.connect(r||this.water),c.start(h),c.stop(h+i+.02)}gurgle(t=.6){if(!this.ready)return;let e=6+Math.floor(Math.random()*10*t+4),i=0;for(let n=0;n<e;n++){let s=170+Math.random()*420;this._blip(s,s*(1.5+Math.random()*.9),.035+Math.random()*.05,.1*t*(.4+Math.random()),i),i+=.022+Math.random()*.06}this._burst({buf:this.pink,f0:380,f1:900,q:1.2,dur:Math.min(1.2,i+.2),gain:.16*t,attack:.05,out:this.water})}onEvent(t,e){if(!this.ready)return;let i=this.under>.5;switch(t){case"thunder":{let n=ft(e.dist/7e3),s=e.power;{let b="a_thunder"+(1+(Math.random()*3|0)),g=this.voice&&this.voice[b];if(g){let p=this.ctx,x=p.currentTime,v=p.createBufferSource();v.buffer=g,v.playbackRate.value=lt(1,.82,n)*(.94+Math.random()*.12);let w=this.F("lowpass",lt(16e3,420,Math.sqrt(n)),.6),R=this.G(lt(2.2,.45,n)*s);v.connect(w),w.connect(R),R.connect(this.air),R.connect(this.verb),v.start(x),e.dist<2600&&(this._blip(64,26,1.4,1.1*s*(1-e.dist/2600),0,this.master),this._burst({buf:this.white,type:"highpass",f0:1800,dur:.22,gain:1.2*s*(1-e.dist/2600),attack:.002}))}}let r=lt(5,10,Math.random())*(.8+.4*n),o=this.ctx,h=o.currentTime,c=o.createBufferSource();c.buffer=this.brown,c.loop=!0,c.playbackRate.value=.7+Math.random()*.5;let l=this.F("lowpass",lt(1100,170,n),.5),u=this.G(0),d=lt(.6,.2,n)*s;u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(d,h+lt(.04,.6,n));let f=h+.5,m=2+Math.floor(Math.random()*4);for(let b=0;b<m;b++)f+=.4+Math.random()*1.1,u.gain.exponentialRampToValueAtTime(d*(.25+Math.random()*.5)*Math.exp(-b*.35),f);u.gain.exponentialRampToValueAtTime(1e-4,h+r),c.connect(l),l.connect(u),u.connect(this.air),u.connect(this.verb),c.start(h,Math.random()*6),c.stop(h+r+.1),e.dist<2200&&this._burst({buf:this.white,type:"highpass",f0:700,dur:.35,gain:.8*s*(1-e.dist/2200),attack:.004,verb:!0});break}case"impact":{let n=Math.min(1,e.strength/3.2);if(this.time-this.lastCrash<.5)break;this.lastCrash=this.time,this._burst({buf:this.white,type:"lowpass",f0:5200,f1:260,q:.6,dur:1.5+n,gain:.55+.5*n,attack:.015,verb:!0}),this._burst({buf:this.brown,type:"lowpass",f0:240,f1:60,q:.8,dur:1.9,gain:1*n+.3,attack:.02,out:this.master}),this._blip(74,34,.7,.5*n,0,this.master),this.playClip("a_crash"+(1+(Math.random()*3|0)),.7+.6*n,.9+Math.random()*.2,0);break}case"shipHorn":{let n=this.voice&&this.voice[e.long?"s_horn":"s_hornS"];if(!n||!e.pos)break;let s=this.ctx.createBufferSource();s.buffer=n;let r=this.G(e.long?5.5:4.5),o=this.PN(120,.55);o.positionX?(o.positionX.value=e.pos.x,o.positionY.value=e.pos.y,o.positionZ.value=e.pos.z):o.setPosition(e.pos.x,e.pos.y,e.pos.z),s.connect(r),r.connect(o),o.connect(this.air),s.start();break}case"boatSlam":{let n=Math.min(1,e.v/6);if(this.time-(this.lastSlam||-9)<.35)break;this.lastSlam=this.time,this.playClip("bt_slam"+(1+(Math.random()*3|0)),.35+.65*n,.88+Math.random()*.22,e.pan||0),this._blip(64,30,.5,.35*n,0,this.master);break}case"splash":{let n=Math.min(1,e.v/5);this._burst({buf:this.pink,f0:1400+Math.random()*1200,f1:600,q:.8,dur:.16+.22*n,gain:.1+.22*n,attack:.006,pan:Math.random()*1.2-.6});break}case"submerge":this._burst({buf:this.brown,type:"lowpass",f0:900,f1:120,dur:.7,gain:.7,attack:.01,out:this.master}),this.gurgle(.9),this.gurgleTimer=.8;break;case"surface":this._burst({buf:this.white,type:"highpass",f0:1500,f1:3500,dur:.5,gain:.3,attack:.02});break;case"camEnter":this._blip(120,52,.45,.35,0,this.master);break;case"camExit":this._burst({buf:this.pink,f0:2200,f1:900,q:.6,dur:.6,gain:.22,attack:.02});break;default:break}}update(t,e){if(!this.ready||this.ctx.state!=="running")return;this.time+=t;let i=this.ctx,n=i.currentTime,s=(f,m,b=.12)=>f.setTargetAtTime(m,n,b),r=this.under=e.under,o=i.listener,h=e.cam;o.positionX?(o.positionX.value=h.pos.x,o.positionY.value=h.pos.y,o.positionZ.value=h.pos.z,o.forwardX.value=h.fwd.x,o.forwardY.value=h.fwd.y,o.forwardZ.value=h.fwd.z,o.upX.value=h.up.x,o.upY.value=h.up.y,o.upZ.value=h.up.z):(o.setPosition(h.pos.x,h.pos.y,h.pos.z),o.setOrientation(h.fwd.x,h.fwd.y,h.fwd.z,h.up.x,h.up.y,h.up.z)),s(this.airLP.frequency,lt(2e4,330*Math.exp(-e.depth*.06)+120,r*r),.06),s(this.airBoom.gain,9*r,.1),s(this.air.gain,lt(1,.55,r),.1),s(this.water.gain,r*(1-.7*e.blackout),.08),s(this.bodyG.gain,(1-r)*(1-e.blackout),.05),s(this.verbOut.gain,.35+.5*r,.2);let c=.7+.6*(e.gust||0);s(this.rumble.gain,.32+.45*e.storm+.22*Math.min(1,Math.abs(e.swellV)/6),.3),this.beds&&this.beds.storm&&(s(this.beds.storm.g.gain,(.25+.95*e.storm)*c,.5),this.beds.storm.s.playbackRate.setTargetAtTime(.94+.1*(e.gust||0),n,1.2)),this.crashT=(this.crashT===void 0?3:this.crashT)-t*(.4+e.storm),this.crashT<=0&&r<.5&&(this.crashT=2.2+Math.random()*4.5,this.playClip("a_crash"+(1+(Math.random()*3|0)),(.16+.34*Math.random())*e.storm,.8+Math.random()*.4,Math.random()*1.6-.8));let l=0;for(let f of e.hot){let m=Math.hypot(f.x-h.pos.x,f.z-h.pos.z);l+=f.amount/(1+m/12)}s(this.wash.gain,Math.min(.8,.12*e.storm+.16*l),.25),s(this.roar.gain,Math.min(1.1,e.threat*e.threat*1.1),.2);for(let f=0;f<this.spots.length;f++){let m=this.spots[f],b=e.hot[f];b?(m.a<.02?(m.x=b.x,m.y=b.y,m.z=b.z):(m.x+=(b.x-m.x)*.1,m.y+=(b.y-m.y)*.1,m.z+=(b.z-m.z)*.1),m.a+=(Math.min(1,b.amount)-m.a)*.08):m.a*=.94,m.p.positionX?(m.p.positionX.value=m.x,m.p.positionY.value=m.y,m.p.positionZ.value=m.z):m.p.setPosition(m.x,m.y,m.z),s(m.g.gain,m.a*.9,.1)}s(this.rainG.gain,.2*e.rain*c,.4),this.patter+=Math.random()<t*9?1:0,this.patter*=Math.exp(-t*9),s(this.patterG.gain,.06*e.rain*(.4+Math.min(1.5,this.patter)),.03);let u=ft(e.windSpeed/34);s(this.windF.frequency,260+520*e.gust*u,.5),s(this.windG.gain,.55*Math.pow(u,1.5)*c+.6*(e.air||0),.15),s(this.whistleF.frequency,900+900*e.gust*e.gust,.6),s(this.whistleG.gain,.1*Math.pow(u,2.2)*e.gust,.5),this.windPan.pan&&s(this.windPan.pan,Si(e.windPan*.55,-.8,.8),.6),s(this.streamG.gain,Math.min(1,e.aeration*1.4+Math.min(.5,e.relSpeed*.08))*.5,.1),s(this.streamF.frequency,420+500*e.aeration,.2),e.mouthUnder&&e.alive&&(this.gurgleTimer-=t*(1+1.6*ft((45-e.oxygen)/45)+e.effort*.6),this.gurgleTimer<=0&&(this.gurgle(.45+.5*Math.random()),this.gurgleTimer=1.1+Math.random()*2));let d=Math.max(ft((62-e.oxygen)/55),ft(((e.fear||0)-.62)*2.4)*.8)*(e.alive?1:0)+(e.mouthUnder?.18:0);if(d>.05&&(this.heartPhase+=t*lt(1.2,2.5,ft(d)),this.heartPhase>=1)){this.heartPhase-=1;let f=.5*Math.min(1,d*1.3);this._blip(62,40,.11,f,0,this.master),this._blip(52,36,.13,f*.7,.16,this.master)}if(s(this.master.gain,(this.sfxOn===!1?0:this.volume)*(1-.85*e.blackout),.3),e.heli&&e.heli.on){let f=e.heli.pos;this.heliPan.positionX?(this.heliPan.positionX.value=f.x,this.heliPan.positionY.value=f.y,this.heliPan.positionZ.value=f.z):this.heliPan.setPosition(f.x,f.y,f.z),s(this.heliG.gain,6,.6)}else s(this.heliG.gain,0,.8);{let f=e.ship,m=(b,g)=>{b.positionX?(b.positionX.value=g.x,b.positionY.value=g.y,b.positionZ.value=g.z):b.setPosition(g.x,g.y,g.z)};f&&f.on?(m(this.shipPan,f.engine),m(this.bowPan,f.bow),m(this.propPan,f.prop),s(this.shipG.gain,2.4,.6),s(this.bowG.gain,2.6*f.speedK,.6),s(this.propG.gain,1.8*f.speedK,.6),s(this.shipWater.gain,2.8*Math.min(1,70/(f.propDist+15)),.3)):(s(this.shipG.gain,0,1.5),s(this.bowG.gain,0,1.5),s(this.propG.gain,0,1.5),s(this.shipWater.gain,0,1.5))}this.beds&&s(this.beds.swim.g.gain,Math.min(.6,(e.swimSplash||0)*.55)*(1-r),.25),this.beds&&this.beds.boat&&(s(this.beds.boat.g.gain,Math.min(.5,(e.boatCreak||0)*.5)*(1-r),.3),this.beds.boat.s.playbackRate.setTargetAtTime(.9+.25*Math.min(1,e.boatCreak||0),n,.5)),s(this.vDry.gain,1-r,.04),s(this.vWet.gain,r*2.2,.04),s(this.tinG.gain,(this.sfxOn===!1?0:this.volume)*(.014*ft((30-e.oxygen)/30)+.03*e.blackout),.3),s(this.finalLP.frequency,2e4*Math.pow(.022,e.blackout)*Math.pow(.03,e.slow||0),.08)}};var Zx=`
#ui { font-weight: 300; letter-spacing: .02em; -webkit-tap-highlight-color: transparent; }
#ui .layer { position: absolute; inset: 0; display: none; pointer-events: none; }
#ui .layer.on { display: block; }
#ui .act { pointer-events: auto; cursor: pointer; }
#ui .shade { background: linear-gradient(90deg, rgba(3,6,9,.72) 0%, rgba(3,6,9,.38) 42%, rgba(3,6,9,0) 78%); }
#ui .col { position: absolute; left: 7vw; bottom: 11vh; max-width: 86vw; }
#ui h1 { margin: 0 0 3.4vh; font-size: clamp(22px, 4.2vw, 62px); font-weight: 200; letter-spacing: .34em; line-height: 1.25; color: #e9eef1; text-shadow: 0 2px 30px rgba(0,0,0,.6); }
#ui h2 { margin: 0 0 3vh; font-size: clamp(18px, 2.4vw, 34px); font-weight: 200; letter-spacing: .2em; color: #e9eef1; }
#ui .go { display: inline-block; font-size: clamp(16px, 1.6vw, 22px); letter-spacing: .5em; padding: .9em 0; margin-bottom: 3vh; color: #fff; border-bottom: 1px solid rgba(255,255,255,.55); }
#ui .go:hover { border-bottom-color: #fff; }
#ui .row { font-size: clamp(13px, 1.05vw, 16px); padding: .5em 0; color: rgba(225,233,238,.62); white-space: nowrap; }
#ui .row b { font-weight: 400; color: #eef3f6; margin-left: 1.2em; letter-spacing: .12em; }
#ui .row.act:hover { color: #fff; }
#ui .row span.t { display: inline-block; margin-left: .9em; padding: .1em .55em; color: #eef3f6; border: 1px solid rgba(255,255,255,.28); }
#ui .hint { position: absolute; left: 7vw; bottom: 4.2vh; font-size: clamp(11px, .9vw, 13px); color: rgba(215,225,232,.45); letter-spacing: .08em; }
#ui .time { font-size: clamp(13px, 1.1vw, 17px); color: rgba(225,233,238,.7); margin-bottom: 3vh; letter-spacing: .14em; }
#hud .bars { position: absolute; left: 3.2vw; bottom: 4.5vh; }
#hud .bar { width: 132px; margin-top: 11px; opacity: 0; transition: opacity .9s; }
#hud .bar.show { opacity: .86; }
#hud .bar i { display: block; font-style: normal; font-size: 10px; letter-spacing: .28em; color: rgba(230,238,243,.7); margin-bottom: 4px; }
#hud .bar u { display: block; height: 1px; background: rgba(255,255,255,.2); }
#hud .bar u s { display: block; height: 1px; width: 100%; background: #f1f5f7; transform-origin: 0 50%; }
#hud .bar.low u s { background: #e2674c; height: 2px; }
#hud .keys { position: absolute; right: 3.2vw; bottom: 4.5vh; display: flex; align-items: center; font-size: clamp(12px, 1vw, 15px); letter-spacing: .1em; color: rgba(232,240,245,.72); text-shadow: 0 1px 8px rgba(0,0,0,.75); }
#hud .keys span { display: inline-flex; align-items: center; gap: .6em; white-space: nowrap; }
#hud .keys span + span { margin-left: 1.5em; padding-left: 1.5em; border-left: 1px solid rgba(255,255,255,.2); }
#hud .keys b { display: inline-block; min-width: 1.5em; text-align: center; font-weight: 500; color: #f4f7f9; border: 1px solid rgba(255,255,255,.45); background: rgba(8,12,16,.42); padding: .2em .6em; border-radius: 5px; font-size: .9em; letter-spacing: .04em; }
#hud .keys i { font-style: normal; opacity: .5; margin: 0 -.2em; }
#bars-t, #bars-b { position: absolute; left: 0; right: 0; height: 0; background: #000; transition: height 1.1s ease; pointer-events: none; z-index: 5; } #bars-t { top: 0; } #bars-b { bottom: 0; }
#ui.cine #bars-t, #ui.cine #bars-b { height: 11.5vh; }
#ui.cine #hud, #ui.cine #touch { opacity: 0; transition: opacity .6s; }
#touch { touch-action: none; }
#touch .zone { position: absolute; pointer-events: auto; touch-action: none; } #touch .zr { z-index: 0; } #touch .zl { z-index: 1; } #touch .stick { z-index: 2; } #touch .btn { z-index: 3; }
#touch .zl { left: 0; top: 0; bottom: 0; width: 46%; } #touch .zr { left: 46%; right: 0; top: 0; bottom: 0; }
#touch .stick { position: absolute; width: 120px; height: 120px; margin: -60px 0 0 -60px; border: 1px solid rgba(255,255,255,.28); border-radius: 50%; display: none; pointer-events: none; }
#touch .stick b { position: absolute; left: 50%; top: 50%; width: 44px; height: 44px; margin: -22px 0 0 -22px; border-radius: 50%; background: rgba(255,255,255,.28); }
#touch .btn { position: absolute; width: 86px; height: 86px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,.46); color: #f1f5f7; font-size: 14px; font-weight: 500; letter-spacing: .18em; text-indent: .18em;
  display: flex; align-items: center; justify-content: center; pointer-events: auto; touch-action: none; background: rgba(8,12,16,.34); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
  box-shadow: 0 2px 16px rgba(0,0,0,.35), inset 0 0 0 5px rgba(255,255,255,.04); user-select: none; -webkit-user-select: none; transition: transform .08s ease, background .12s ease; }
#touch .btn.on { background: rgba(255,255,255,.30); border-color: #fff; color: #fff; transform: scale(.94); }
#touch .sw { right: max(22px, env(safe-area-inset-right)); bottom: max(30px, env(safe-area-inset-bottom)); }
#touch .dv { right: calc(max(22px, env(safe-area-inset-right)) + 100px); bottom: max(18px, env(safe-area-inset-bottom)); }
#touch .sm { width: 46px; height: 46px; font-size: 0; text-indent: 0; top: max(14px, env(safe-area-inset-top)); border-width: 1px; box-shadow: 0 2px 10px rgba(0,0,0,.3); }
#touch .sm svg { width: 21px; height: 21px; fill: none; stroke: #f1f5f7; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; } #touch .vw { right: 76px; } #touch .ps { right: 18px; }
@media (orientation: portrait) {
  /* held upright: the thumbs sit low, the upper screen is for looking around */
  #touch .zl { top: 52%; width: 52%; } #touch .zr { left: 0; }
  #touch .sw { right: 18px; bottom: max(64px, calc(env(safe-area-inset-bottom) + 40px)); }
  #touch .dv { right: 26px; bottom: calc(max(64px, calc(env(safe-area-inset-bottom) + 40px)) + 104px); width: 72px; height: 72px; }
  #ui .col { left: 8vw; bottom: 13vh; }
  #ui h1 { font-size: clamp(22px, 7.4vw, 40px); letter-spacing: .26em; }
  #ui .row { white-space: normal; line-height: 2.1; }
  #ui .row span.t { margin-left: .5em; }
  #ui .hint { right: 8vw; bottom: 3vh; line-height: 1.6; }
  #hud .bars { left: 5vw; bottom: auto; top: max(18px, env(safe-area-inset-top)); }
  #ui .note { top: 14vh; letter-spacing: .2em; padding: 0 8vw; line-height: 1.7; }
}
/* Phones. A finger is 9 mm wide and lands a little below where the eye aims: everything that is tapped is at least
   44 px high with a hairline between it and its neighbour (rows 28 px high and touching were handing a tap on one
   setting to the one under it). */
#ui.touch .go { min-width: 132px; padding: 13px 0; }
#ui.touch .row.act { display: flex; align-items: center; min-height: 44px; padding: 0; border-bottom: 1px solid rgba(255,255,255,.07); line-height: 1.2; }
#ui.touch .row.tests { display: flex; flex-wrap: wrap; align-items: center; min-height: 44px; padding: 0; }
#ui.touch .row span.t { min-width: 40px; height: 40px; line-height: 38px; text-align: center; margin: 2px 0 2px 6px; padding: 0; box-sizing: border-box; }
#ui.touch .credit { padding: 17px 12px 15px; margin: -11px -12px -9px; bottom: max(2.2vh, 12px); }
/* On its side a phone is 375-430 px high: the same arrangement as on a PC (title, start, the settings, the line of
   help at the foot, all in the left column with air above) only fits if the settings stand in two columns. */
@media (orientation: landscape) and (max-height: 540px) {
  #ui .col { bottom: 9.5vh; }
  #ui h1 { font-size: min(6.8vh, 4.2vw); margin-bottom: 2.6vh; line-height: 1.22; }
  #ui h2 { display: inline-block; font-size: 17px; margin: 0 1.4em 1.4vh 0; }
  #ui .time { display: inline-block; font-size: 12px; margin-bottom: 1.4vh; }
  #ui .go { display: block; width: max-content; font-size: 15px; margin-bottom: 1.6vh; }
  #ui .rows { display: grid; grid-template-columns: repeat(2, minmax(190px, 248px)); column-gap: 34px; }
  #ui .rows .wide { grid-column: 1 / -1; }
  #ui .hint { bottom: 2.6vh; }
}
#ui .note { position: absolute; left: 0; right: 0; top: 9vh; text-align: center; font-size: clamp(13px, 1.2vw, 18px); letter-spacing: .32em; color: rgba(236,242,246,.9); text-shadow: 0 1px 14px rgba(0,0,0,.8); opacity: 0; transition: opacity 1.2s; pointer-events: none; }
#ui .note.on { opacity: 1; }
#ui .credit { position: absolute; right: 3.2vw; bottom: 2.2vh; display: none; padding: 6px 2px; font-size: 10px; letter-spacing: .14em; color: rgba(215,225,232,.34); z-index: 6; }
#ui .credit.on { display: block; }
#ui .credit:hover { color: rgba(240,245,248,.9); }
#credits { position: absolute; inset: 0; display: none; z-index: 20; background: #04070a; pointer-events: auto; overflow-y: auto; touch-action: pan-y; }
#credits.on { display: block; }
#credits .box { margin: 0 0 0 7vw; padding: 9vh 7vw 7vh 0; max-width: 460px; }
#credits h2 { margin: 0 0 2.6vh; font-size: 13px; font-weight: 300; letter-spacing: .3em; color: rgba(233,238,241,.86); }
#credits .go { font-size: 12px; letter-spacing: .4em; padding: .7em 0; margin-bottom: 0; }
#credits h3 { margin: 0 0 1.6vh; font-size: 9px; font-weight: 400; letter-spacing: .32em; color: rgba(225,233,238,.42); }
#credits .it { margin: 0 0 2.2vh; }
#credits .it b { display: block; font-weight: 400; font-size: 12px; letter-spacing: .06em; color: rgba(238,243,246,.92); }
#credits .it p { margin: .45em 0 0; font-size: 10.5px; line-height: 1.75; letter-spacing: .03em; color: rgba(225,233,238,.58); }
#credits a { color: rgba(238,243,246,.92); text-decoration: none; border-bottom: 1px solid rgba(255,255,255,.3); cursor: pointer; }
#credits a:hover { border-bottom-color: #fff; }
#credits .lic { margin: 2.6vh 0 3vh; padding-top: 1.8vh; border-top: 1px solid rgba(255,255,255,.12); font-size: 9.5px; line-height: 1.8; letter-spacing: .04em; color: rgba(225,233,238,.44); }
@media (orientation: portrait) {
  #ui .hint { bottom: 7vh; }
  #ui .credit { right: auto; left: 8vw; bottom: 1.6vh; }
  #credits .box { margin-left: 8vw; padding-right: 8vw; }
}
`,Ut=(a,t,e)=>{let i=document.createElement(a);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i},Uc=a=>`${String(Math.floor(a/60)).padStart(2,"0")}:${String(Math.floor(a%60)).padStart(2,"0")}`,Po=class a{constructor(t,e,i){this.root=t,this.api=e,this.isTouch=i,t.classList.toggle("touch",!!i);let n=Ut("style");n.textContent=Zx,document.head.appendChild(n),this.title=Ut("div","layer shade"),this.title.id="title";let s=Ut("div","col");s.appendChild(Ut("h1","","EXTREME<br>OCEAN SURVIVAL")),this.goBtn=Ut("div","go act","\uC2DC\uC791"),s.appendChild(this.goBtn),this.titleRows=Ut("div","rows"),s.appendChild(this.titleRows),this.title.appendChild(s),this.title.appendChild(Ut("div","hint",i?"\uC67C\uCABD \uB04C\uAE30 \uBC29\uD5A5 \xB7 \uD5E4\uC5C4 / \uC785\uC218 \uBC84\uD2BC \xB7 \uD654\uBA74 \uB04C\uAE30 \uC2DC\uC810":"WASD \uBC29\uD5A5 \xB7 Space(\uC88C\uD074\uB9AD) \uD5E4\uC5C4 \xB7 F(\uC6B0\uD074\uB9AD) \uC785\uC218 \xB7 \uB9C8\uC6B0\uC2A4 \uC2DC\uC810 \xB7 V \uC2DC\uC810 \uC804\uD658 \xB7 Esc \uBA48\uCDA4")),this.pause=Ut("div","layer shade"),this.pause.id="pause";let r=Ut("div","col");r.appendChild(Ut("h2","","\uBA48\uCDA4")),this.pauseTime=Ut("div","time"),r.appendChild(this.pauseTime),this.resumeBtn=Ut("div","go act","\uACC4\uC18D"),r.appendChild(this.resumeBtn),this.pauseRows=Ut("div","rows"),r.appendChild(this.pauseRows),this.pause.appendChild(r),this.dead=Ut("div","layer shade"),this.dead.id="dead";let o=Ut("div","col");this.deadTitle=Ut("h2","",""),o.appendChild(this.deadTitle),this.deadTime=Ut("div","time"),o.appendChild(this.deadTime),this.againBtn=Ut("div","go act","\uB2E4\uC2DC"),o.appendChild(this.againBtn),this.dead.appendChild(o),this.won=Ut("div","layer shade"),this.won.id="won";let h=Ut("div","col");h.appendChild(Ut("h2","","\uAD6C\uC870\uB418\uC5C8\uB2E4")),this.wonTime=Ut("div","time"),h.appendChild(this.wonTime),this.wonBtn=Ut("div","go act","\uB2E4\uC2DC"),h.appendChild(this.wonBtn),this.won.appendChild(h),this.noteEl=Ut("div","note"),this.creditLink=Ut("div","credit act on","Credits / Licenses"),this.credits=Ut("div"),this.credits.id="credits";{let f="http://creativecommons.org/licenses/by/4.0/",m=(g,p)=>`<a class="act" href="${g}" target="_blank" rel="noopener noreferrer">${p}</a>`,b=Ut("div","box");b.appendChild(Ut("h2","","CREDITS / LICENSES")),b.appendChild(Ut("h3","","3D MODELS")),b.appendChild(Ut("div","it",`<b>Emergency Heli - Flight Care 2</b><p>by Mixmamo.studio: An effortless 3D collections. \xB7 ${m("https://skfb.ly/pBOGV","skfb.ly/pBOGV")}<br>Licensed under ${m(f,"Creative Commons Attribution 4.0")}<br>Changes: reduced for the web (cabin parts not visible from outside removed, parts merged) \xB7 front doors closed \xB7 rotor blades straightened to their in-flight shape and drawn as a motion-blurred disc</p>`)),b.appendChild(Ut("div","it",`<b>Assault Boat</b><p>by tnnv \xB7 Sketchfab<br>Licensed under ${m(f,"Creative Commons Attribution 4.0")}<br>Changes: reduced for the web (parts merged, textures re-compressed) \xB7 brightness adjusted</p>`)),b.appendChild(Ut("div","it",`<b>Octopus Cargo Ship</b><p>by KurumA \xB7 ${m("https://skfb.ly/psXDo","skfb.ly/psXDo")}<br>Licensed under ${m(f,"Creative Commons Attribution 4.0")}<br>Changes: reduced for the web (materials and parts merged, unused texture sets removed, vertices stored as integers, textures resized and re-compressed) \xB7 scaled to a 180 m ship \xB7 navigation, deck and search lights added</p>`)),b.appendChild(Ut("div","lic",`CC BY 4.0 \u2014 ${f}`)),this.creditClose=Ut("div","go act","Close"),b.appendChild(this.creditClose),this.credits.appendChild(b)}this.hud=Ut("div","layer"),this.hud.id="hud";let c=Ut("div","bars");this.bars={};for(let[f,m]of[["o2","\uC0B0\uC18C"],["st","\uCCB4\uB825"],["tp","\uCCB4\uC628"],["rs","\uAD6C\uC870"]]){let b=Ut("div","bar",`<i>${m}</i><u><s></s></u>`);c.appendChild(b),this.bars[f]={el:b,fill:b.querySelector("s")}}this.hud.appendChild(c),i||(this.keysEl=Ut("div","keys",""),this.hud.appendChild(this.keysEl)),this.act="",this.setMode("swim"),t.append(Object.assign(Ut("div"),{id:"bars-t"}),Object.assign(Ut("div"),{id:"bars-b"})),this.touch=Ut("div","layer"),this.touch.id="touch",t.append(this.hud,this.noteEl,this.touch,this.title,this.pause,this.dead,this.won,this.creditLink,this.credits),i&&this.buildTouch();let l=(f,m)=>a.tap(f,m);l(this.goBtn,()=>e.start()),l(this.resumeBtn,()=>e.resume()),l(this.againBtn,()=>e.restart()),l(this.wonBtn,()=>e.restart());let u=-1e9,d=f=>{this.credits.classList.toggle("on",f),f&&(this.credits.scrollTop=0,u=performance.now())};l(this.creditLink,()=>d(!0)),l(this.creditClose,()=>d(!1)),this.credits.addEventListener("click",f=>{f.stopPropagation(),f.target===this.credits&&performance.now()-u>600&&d(!1)}),this.credits.addEventListener("pointerdown",f=>f.stopPropagation()),document.addEventListener("keydown",f=>{f.code==="Escape"&&this.credits.classList.contains("on")&&(d(!1),f.stopImmediatePropagation(),f.preventDefault())},!0),this.buildRows(),this.mode=""}static tap(t,e){let i=null,n=0,s=0,r=-1e9,o=!1;t.addEventListener("pointerdown",h=>{i=h.pointerId,n=h.clientX,s=h.clientY,o=!1,h.stopPropagation()}),t.addEventListener("pointerup",h=>{h.pointerId===i&&(i=null,h.stopPropagation(),Math.hypot(h.clientX-n,h.clientY-s)<30&&(o=!0,e(h),r=performance.now()))}),t.addEventListener("pointercancel",()=>{i=null}),t.addEventListener("click",h=>{if(h.stopPropagation(),o&&performance.now()-r<1500){o=!1;return}o=!1,e(h)})}buildRows(){let t=this.api,e=(i,n)=>{i.innerHTML="";let s=(r,o,h)=>{let c=Ut("div","row act",`${r}<b></b>`),l=c.querySelector("b"),u=()=>{l.textContent=o()};a.tap(c,()=>{h(),this.refresh()}),this._upd.push(u),u(),i.appendChild(c)};if(s("\uD654\uC9C8",()=>t.get("quality"),()=>t.cycle("quality")),s("\uC2DC\uC810",()=>t.get("view"),()=>t.cycle("view")),s("\uC790\uB3D9 \uCE74\uBA54\uB77C",()=>t.get("autocam"),()=>t.cycle("autocam")),s("\uCE74\uBA54\uB77C \uD754\uB4E4\uB9BC",()=>t.get("shake"),()=>t.cycle("shake")),s("\uC18C\uB9AC \uD06C\uAE30",()=>t.get("volume"),()=>t.cycle("volume")),s("\uD6A8\uACFC\uC74C",()=>t.get("sfx"),()=>t.cycle("sfx")),n){let r=Ut("div","row tests wide","\uC2DC\uD5D8 \uC7A5\uBA74");for(let h of"ABCDEFGHR"){let c=Ut("span","t act",h);a.tap(c,()=>t.scenario(h)),r.appendChild(c)}i.appendChild(r);let o=Ut("div","row act wide","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC");a.tap(o,()=>t.restart()),i.appendChild(o)}};this._upd=[],e(this.titleRows,!1),e(this.pauseRows,!0)}refresh(){for(let t of this._upd)t()}show(t,e){this.mode=t,this.title.classList.toggle("on",t==="title"),this.pause.classList.toggle("on",t==="paused"),this.dead.classList.toggle("on",t==="dead"),this.won.classList.toggle("on",t==="won"),t==="won"&&(this.wonTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+Uc(e.time)),t!=="playing"&&this.noteEl.classList.remove("on"),this.hud.classList.toggle("on",t==="playing"),this.touch.classList.toggle("on",t==="playing"&&this.isTouch),this.creditLink.classList.toggle("on",t!=="playing"),t==="playing"&&this.credits.classList.remove("on"),t==="paused"&&(this.pauseTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+Uc(e.time)),t==="dead"&&(this.deadTitle.textContent=e.cause==="cold"?"\uCCB4\uC628\uC744 \uC783\uACE0 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4":e.cause==="ship"?"\uBC30 \uBC11\uC73C\uB85C \uBE68\uB824 \uB4E4\uC5B4\uAC14\uB2E4":"\uC228\uC774 \uB2E4\uD574 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4",this.deadTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+Uc(e.time)),this.refresh(),t!=="playing"&&this.releaseTouch()}cine(t){this.root.classList.toggle("cine",!!t),t&&(this.noteEl.classList.remove("on"),clearTimeout(this._nt))}note(t,e=6){this.noteEl.textContent=t,this.noteEl.classList.add("on"),clearTimeout(this._nt),this._nt=setTimeout(()=>this.noteEl.classList.remove("on"),e*1e3)}setMode(t){if(t===this.act)return;this.act=t;let e="<span><b>V</b><i>\xB7</i><b>\uD720</b>\uC2DC\uC810</span><span><b>Esc</b>\uBA48\uCDA4</span>",i=t==="boat"?"<span><b>Space</b>\uAF49 \uBD99\uC7A1\uAE30</span>"+e:t==="cling"?"<span><b>Space</b>\uAF49 \uC950\uAE30</span><span><b>F</b>\uB193\uAE30</span>"+e:t==="ship"?"<span><b>Space</b>\uD5E4\uC5C4</span><span><b>F</b>\uC190 \uD754\uB4E4\uAE30</span>"+e:"<span><b>Space</b>\uD5E4\uC5C4</span><span><b>F</b>\uC785\uC218</span>"+e;this.keysEl&&(this.keysEl.innerHTML=i),this.swBtn&&(this.swBtn.textContent=t==="boat"?"\uBD99\uC7A1\uAE30":t==="cling"?"\uAF49 \uC950\uAE30":"\uD5E4\uC5C4",this.dvBtn.textContent=t==="cling"?"\uB193\uAE30":t==="ship"?"\uD754\uB4E4\uAE30":"\uC785\uC218",this.dvBtn.style.opacity=t==="boat"?"0.3":"")}setBars(t,e,i,n=0){let s=(r,o,h,c)=>{r.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,o)).toFixed(3)})`,r.el.classList.toggle("show",o<h),r.el.classList.toggle("low",o<c)};s(this.bars.o2,t,.97,.3),s(this.bars.st,e,.9,.22),s(this.bars.tp,i,.8,.35),this.bars.rs.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,n)).toFixed(3)})`,this.bars.rs.el.classList.toggle("show",n>.01)}buildTouch(){let t=this.api,e=t.input;e.touch={x:0,z:0,swim:!1,dive:!1};let i=Ut("div","zone zl"),n=Ut("div","zone zr"),s=Ut("div","stick","<b></b>"),r=s.firstChild;this.touch.append(i,n,s);let o=null,h=0,c=0,l=null,u=0,d=0,f=56;i.addEventListener("pointerdown",S=>{if(o===null){o=S.pointerId,h=S.clientX,c=S.clientY;try{i.setPointerCapture(S.pointerId)}catch{}s.style.display="block",s.style.left=h+"px",s.style.top=c+"px",r.style.transform="translate(0,0)",S.preventDefault()}}),i.addEventListener("pointermove",S=>{if(S.pointerId!==o)return;let _=S.clientX-h,E=S.clientY-c,I=Math.hypot(_,E);I>f&&(_*=f/I,E*=f/I),r.style.transform=`translate(${_}px,${E}px)`;let W=.12,Y=_/f,k=-E/f;Math.hypot(Y,k)<W&&(Y=0,k=0),e.touch.x=Y,e.touch.z=k,S.preventDefault()});let m=S=>{S.pointerId===o&&(o=null,e.touch.x=0,e.touch.z=0,s.style.display="none")};i.addEventListener("pointerup",m),i.addEventListener("pointercancel",m),n.addEventListener("pointerdown",S=>{if(l===null){l=S.pointerId,u=S.clientX,d=S.clientY;try{n.setPointerCapture(S.pointerId)}catch{}S.preventDefault()}}),n.addEventListener("pointermove",S=>{S.pointerId===l&&(e.dx+=(S.clientX-u)*2.2,e.dy+=(S.clientY-d)*2.2,u=S.clientX,d=S.clientY,e.lastLook=performance.now()/1e3,S.preventDefault())});let b=S=>{S.pointerId===l&&(l=null)};n.addEventListener("pointerup",b),n.addEventListener("pointercancel",b);let g=(S,_)=>{let E=Ut("div","btn "+S,_);return this.touch.appendChild(E),E},p=this.swBtn=g("sw","\uD5E4\uC5C4"),x=this.dvBtn=g("dv","\uC785\uC218"),v=g("sm vw",'<svg viewBox="0 0 24 24"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/></svg>\uC2DC\uC810'),w=g("sm ps",'<svg viewBox="0 0 24 24"><path d="M8.5 5v14M15.5 5v14"/></svg>\uBA48\uCDA4'),R=(S,_)=>{let E=null;S.addEventListener("pointerdown",W=>{W.preventDefault(),W.stopPropagation(),E=W.pointerId;try{S.setPointerCapture(W.pointerId)}catch{}S.classList.add("on"),e.touch[_]=!0});let I=W=>{E!==null&&W.pointerId!==E||(W.stopPropagation(),E=null,S.classList.remove("on"),e.touch[_]=!1)};S.addEventListener("pointerup",I),S.addEventListener("pointercancel",I),S.addEventListener("lostpointercapture",I)};R(p,"swim"),R(x,"dive"),v.addEventListener("pointerdown",S=>{S.preventDefault(),S.stopPropagation(),t.toggleView()}),w.addEventListener("pointerdown",S=>{S.preventDefault(),S.stopPropagation(),t.pause()}),this.releaseTouch=()=>{o=null,l=null,e.touch.x=0,e.touch.z=0,e.touch.swim=!1,e.touch.dive=!1,s.style.display="none",p.classList.remove("on"),x.classList.remove("on")};let y=()=>this.releaseTouch(),T=S=>{(!S.touches||S.touches.length===0)&&y()};document.addEventListener("touchend",T,{capture:!0,passive:!0}),document.addEventListener("touchcancel",T,{capture:!0,passive:!0}),window.addEventListener("blur",y),window.addEventListener("pagehide",y),document.addEventListener("visibilitychange",()=>{document.hidden&&y()})}releaseTouch(){}};var hs={A:{label:"\uBCF4\uD1B5 \uD30C\uB3C4\uC5D0 \uB5A0 \uC788\uAE30",storm:.42,t0:40,view:"third",keys:{},script:[]},B:{label:"\uD070 \uB108\uC6B8 \uC811\uADFC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:a=>a.interaction.launch({lead:15,height:16,breakOffset:9,angleOffset:0,width:240,speed:13,frontMin:27,back:70})}]},C:{label:"\uD30C\uB3C4 \uBD95\uAD34 \xB7 \uCDA9\uB3CC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:a=>a.interaction.launch({lead:9,height:13.5,breakOffset:-1,angleOffset:0,width:170,speed:14})}]},D:{label:"\uBB3C\uC18D \uD718\uB9D0\uB9BC",storm:1,t0:12,view:"first",keys:{},script:[{t:.1,do:a=>a.interaction.launch({lead:6,height:14.5,breakOffset:-1.3,angleOffset:0,width:170,speed:14})}]},E:{label:"\uC218\uBA74 \uBCF5\uADC0",storm:.85,t0:30,view:"first",keys:{up:!0,sprint:!0},setup:a=>{a.body.pos.y-=5.5,a.body.prevPos.copy(a.body.pos),a.survival.oxygen=42,a.survival.wasUnder=!0,a.survival.submergedTime=14,a.cam.pitch=.7},script:[{t:9,do:a=>{a.input.virtual={}}}]},F:{label:"\uBC88\uAC1C",storm:.9,t0:55,view:"third",keys:{},script:[{t:2,do:a=>a.lightning.strike(a.camera.position,{azimuth:Math.PI,dist:1700,sheet:0,power:1.4})},{t:9,do:a=>a.lightning.strike(a.camera.position,{azimuth:Math.PI*.8,dist:5200,sheet:1,power:1})}]},G:{label:"\uCDA9\uB3CC \uC911 \uC2DC\uC810 \uC804\uD658",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:a=>a.interaction.launch({lead:7,height:12.5,breakOffset:-1,angleOffset:0,width:170,speed:14})},...[2,3.6,5.2,6.4,7.4,8.4,9.6,11,12.6,14.2].map(a=>({t:a,do:t=>t.cam.toggle()}))]}};hs.H={label:"\uD574\uC77C \xB7 \uBB3C\uC18D \uAE4A\uC774 \uD718\uB9D0\uB9BC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:a=>a.interaction.launchMega({lead:14,height:34})}]};hs.R={label:"\uAD6C\uC870 \uD5EC\uAE30",storm:.8,t0:30,view:"third",keys:{},script:[{t:.5,do:a=>a.rescue.dispatch(a.body.pos,Math.PI,16)},...Array.from({length:70},(a,t)=>({t:11+t*.5,do:e=>{if(e.rescue.state==="lift"){e.input.virtual=null;return}let i=e.rescue.ring,n=e.body.pos;e.cam.yaw=Math.atan2(i.x-n.x,i.z-n.z),e.input.virtual={z:1,sprint:!0},e.input.enabled=!0}}))]};hs.S={label:"\uBCF4\uD2B8\uC5D0\uC11C \uC2DC\uC791 \xB7 \uC804\uBCF5",storm:1,t0:12,view:"third",keys:{},setup:a=>{a.board()},script:[{t:1,do:a=>a.launchIntroWave(9)}]};hs.T={label:"\uBCF4\uD2B8\uC5D0 \uB5A0 \uC788\uAE30",storm:.7,t0:30,view:"third",keys:{},setup:a=>a.board(),script:[]};var Lo=class{constructor(t){this.game=t,this.active=null,this.t=0,this.next=0,this.name=""}run(t){let e=hs[t];if(!e)return!1;let i=this.game;i.waves.time=e.t0;for(let n of i.waves.breakers)n.active=!1;return i.weather.locked=!0,i.weather.base=i.weather.storm=e.storm,i.weather.time=0,i.interaction.auto=!1,i.autoLightning=!1,i.lightning.active=!1,i.lightning.pendingThunder.length=0,i.rescue.reset(1e9),i.weather.update(0),i.waves.update(0),i.resetPlayer(),i.cam.setMode(e.view),i.cam.blend=i.cam.target,i.cam.yaw=-Math.PI/2,i.cam.pitch=e.view==="first"?-.02:-.08,i.input.virtual=e.keys&&Object.keys(e.keys).length?{...e.keys}:null,i.input.virtual&&(i.input.enabled=!0),e.setup&&e.setup(i),this.active=e,this.name=t,this.t=0,this.next=0,!0}stop(){this.active=null,this.game.input.virtual=null}update(t){if(!this.active)return;this.t+=t;let e=this.active.script;for(;this.next<e.length&&this.t>=e[this.next].t;)e[this.next].do(this.game),this.next++}};function Nc(a,t){if(t===Ed)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(t===Da||t===Jr){let e=a.getIndex();if(e===null){let r=[],o=a.getAttribute("position");if(o!==void 0){for(let h=0;h<o.count;h++)r.push(h);a.setIndex(r),e=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}let i=e.count-2,n=[];if(t===Da)for(let r=1;r<=i;r++)n.push(e.getX(0)),n.push(e.getX(r)),n.push(e.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(e.getX(r)),n.push(e.getX(r+1)),n.push(e.getX(r+2))):(n.push(e.getX(r+2)),n.push(e.getX(r+1)),n.push(e.getX(r)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=a.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),a}var Fo=class extends xn{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new qc(e)}),this.register(function(e){return new tl(e)}),this.register(function(e){return new el(e)}),this.register(function(e){return new il(e)}),this.register(function(e){return new jc(e)}),this.register(function(e){return new Yc(e)}),this.register(function(e){return new Kc(e)}),this.register(function(e){return new Qc(e)}),this.register(function(e){return new Wc(e)}),this.register(function(e){return new Zc(e)}),this.register(function(e){return new Xc(e)}),this.register(function(e){return new $c(e)}),this.register(function(e){return new Jc(e)}),this.register(function(e){return new Vc(e)}),this.register(function(e){return new nl(e)}),this.register(function(e){return new sl(e)})}load(t,e,i,n){let s=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let c=kn.extractUrlBase(t);r=kn.resolveURL(c,this.path)}else r=kn.extractUrlBase(t);this.manager.itemStart(t);let o=function(c){n?n(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},h=new La(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(c){try{s.parse(c,r,function(l){e(l),s.manager.itemEnd(t)},o)}catch(l){o(l)}},i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s,r={},o={},h=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(h.decode(new Uint8Array(t,0,4))===rf){try{r[se.KHR_BINARY_GLTF]=new al(t)}catch(u){n&&n(u);return}s=JSON.parse(r[se.KHR_BINARY_GLTF].content)}else s=JSON.parse(h.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new dl(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let u=this.pluginCallbacks[l](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){let u=s.extensionsUsed[l],d=s.extensionsRequired||[];switch(u){case se.KHR_MATERIALS_UNLIT:r[u]=new Gc;break;case se.KHR_DRACO_MESH_COMPRESSION:r[u]=new rl(s,this.dracoLoader);break;case se.KHR_TEXTURE_TRANSFORM:r[u]=new ol;break;case se.KHR_MESH_QUANTIZATION:r[u]=new hl;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(i,n)}parseAsync(t,e){let i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}};function Jx(){let a={};return{get:function(t){return a[t]},add:function(t,e){a[t]=e},remove:function(t){delete a[t]},removeAll:function(){a={}}}}var se={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Vc=class{constructor(t){this.parser=t,this.name=se.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){let s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,i="light:"+t,n=e.cache.get(i);if(n)return n;let s=e.json,h=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],c,l=new Dt(16777215);h.color!==void 0&&l.setRGB(h.color[0],h.color[1],h.color[2],ke);let u=h.range!==void 0?h.range:0;switch(h.type){case"directional":c=new is(l),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Yr(l),c.distance=u;break;case"spot":c=new Dn(l),c.distance=u,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,c.angle=h.spot.outerConeAngle,c.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return c.position.set(0,0,0),c.decay=2,Nn(c,h),h.intensity!==void 0&&(c.intensity=h.intensity),c.name=e.createUniqueName(h.name||"light_"+t),n=Promise.resolve(c),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,i=this.parser,s=i.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(h){return i._getNodeRef(e.cache,o,h)})}},Gc=class{constructor(){this.name=se.KHR_MATERIALS_UNLIT}getMaterialType(){return He}extendParams(t,e,i){let n=[];t.color=new Dt(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;t.color.setRGB(r[0],r[1],r[2],ke),t.opacity=r[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,fe))}return Promise.all(n)}},Wc=class{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},qc=class{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];if(r.clearcoatFactor!==void 0&&(e.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){let o=r.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new mt(o,o)}return Promise.all(s)}},Xc=class{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return r.iridescenceFactor!==void 0&&(e.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(e.iridescenceIOR=r.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}},jc=class{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_SHEEN}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new Dt(0,0,0),e.sheenRoughness=0,e.sheen=1;let r=n.extensions[this.name];if(r.sheenColorFactor!==void 0){let o=r.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],ke)}return r.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",r.sheenColorTexture,fe)),r.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}},Yc=class{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return r.transmissionFactor!==void 0&&(e.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",r.transmissionTexture)),Promise.all(s)}},Kc=class{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_VOLUME}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];e.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",r.thicknessTexture)),e.attenuationDistance=r.attenuationDistance||1/0;let o=r.attenuationColor||[1,1,1];return e.attenuationColor=new Dt().setRGB(o[0],o[1],o[2],ke),Promise.all(s)}},Qc=class{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_IOR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Zc=class{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_SPECULAR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];e.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",r.specularTexture));let o=r.specularColorFactor||[1,1,1];return e.specularColor=new Dt().setRGB(o[0],o[1],o[2],ke),r.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",r.specularColorTexture,fe)),Promise.all(s)}},Jc=class{constructor(t){this.parser=t,this.name=se.EXT_MATERIALS_BUMP}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return e.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(i.assignTexture(e,"bumpMap",r.bumpTexture)),Promise.all(s)}},$c=class{constructor(t){this.parser=t,this.name=se.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return r.anisotropyStrength!==void 0&&(e.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(e.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(i.assignTexture(e,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}},tl=class{constructor(t){this.parser=t,this.name=se.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],r=e.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,r)}},el=class{constructor(t){this.parser=t,this.name=se.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let r=s.extensions[e],o=n.images[r.source],h=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(h=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(t,r.source,h);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},il=class{constructor(t){this.parser=t,this.name=se.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let r=s.extensions[e],o=n.images[r.source],h=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(h=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(t,r.source,h);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},nl=class{constructor(t){this.name=se.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let h=n.byteOffset||0,c=n.byteLength||0,l=n.count,u=n.byteStride,d=new Uint8Array(o,h,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(l,u,d,n.mode,n.filter).then(function(f){return f.buffer}):r.ready.then(function(){let f=new ArrayBuffer(l*u);return r.decodeGltfBuffer(new Uint8Array(f),l,u,d,n.mode,n.filter),f})})}else return null}},sl=class{constructor(t){this.name=se.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=e.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==Di.TRIANGLES&&c.mode!==Di.TRIANGLE_STRIP&&c.mode!==Di.TRIANGLE_FAN&&c.mode!==void 0)return null;let r=i.extensions[this.name].attributes,o=[],h={};for(let c in r)o.push(this.parser.getDependency("accessor",r[c]).then(l=>(h[c]=l,h[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{let l=c.pop(),u=l.isGroup?l.children:[l],d=c[0].count,f=[];for(let m of u){let b=new Rt,g=new M,p=new yt,x=new M(1,1,1),v=new Ur(m.geometry,m.material,d);for(let w=0;w<d;w++)h.TRANSLATION&&g.fromBufferAttribute(h.TRANSLATION,w),h.ROTATION&&p.fromBufferAttribute(h.ROTATION,w),h.SCALE&&x.fromBufferAttribute(h.SCALE,w),v.setMatrixAt(w,b.compose(g,p,x));for(let w in h)if(w==="_COLOR_0"){let R=h[w];v.instanceColor=new Je(R.array,R.itemSize,R.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&m.geometry.setAttribute(w,h[w]);Ae.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return l.isGroup?(l.clear(),l.add(...f),l):f[0]}))}},rf="glTF",Ua=12,ef={JSON:1313821514,BIN:5130562},al=class{constructor(t){this.name=se.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Ua),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==rf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Ua,s=new DataView(t,Ua),r=0;for(;r<n;){let o=s.getUint32(r,!0);r+=4;let h=s.getUint32(r,!0);if(r+=4,h===ef.JSON){let c=new Uint8Array(t,Ua+r,o);this.content=i.decode(c)}else if(h===ef.BIN){let c=Ua+r;this.body=t.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},rl=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=se.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,r=t.extensions[this.name].attributes,o={},h={},c={};for(let l in r){let u=ll[l]||l.toLowerCase();o[u]=r[l]}for(let l in t.attributes){let u=ll[l]||l.toLowerCase();if(r[l]!==void 0){let d=i.accessors[t.attributes[l]],f=na[d.componentType];c[u]=f.name,h[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(l){return new Promise(function(u,d){n.decodeDracoFile(l,function(f){for(let m in f.attributes){let b=f.attributes[m],g=h[m];g!==void 0&&(b.normalized=g)}u(f)},o,c,ke,d)})})}},ol=class{constructor(){this.name=se.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},hl=class{constructor(){this.name=se.KHR_MESH_QUANTIZATION}},Io=class extends Ln{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let r=0;r!==n;r++)e[r]=i[s+r];return e}interpolate_(t,e,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,h=o*2,c=o*3,l=n-e,u=(i-e)/l,d=u*u,f=d*u,m=t*c,b=m-c,g=-2*f+3*d,p=f-d,x=1-g,v=p-d+u;for(let w=0;w!==o;w++){let R=r[b+w+o],y=r[b+w+h]*l,T=r[m+w+o],S=r[m+w]*l;s[w]=x*R+v*y+g*T+p*S}return s}},$x=new yt,cl=class extends Io{interpolate_(t,e,i,n){let s=super.interpolate_(t,e,i,n);return $x.fromArray(s).normalize().toArray(s),s}},Di={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},na={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nf={9728:Pe,9729:Zt,9984:Mr,9985:bc,9986:ma,9987:Qe},sf={33071:Ke,33648:Ma,10497:ii},Oc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ll={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Un={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},t1={CUBICSPLINE:void 0,LINEAR:Zn,STEP:Os},Bc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function e1(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new we({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ye})),a.DefaultMaterial}function cs(a,t,e){for(let i in e.extensions)a[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function Nn(a,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(a.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function i1(a,t,e){let i=!1,n=!1,s=!1;for(let c=0,l=t.length;c<l;c++){let u=t[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(a);let r=[],o=[],h=[];for(let c=0,l=t.length;c<l;c++){let u=t[c];if(i){let d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):a.attributes.position;r.push(d)}if(n){let d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):a.attributes.color;h.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(h)]).then(function(c){let l=c[0],u=c[1],d=c[2];return i&&(a.morphAttributes.position=l),n&&(a.morphAttributes.normal=u),s&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function n1(a,t){if(a.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)a.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(a.morphTargetInfluences.length===e.length){a.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)a.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function s1(a){let t,e=a.extensions&&a.extensions[se.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Hc(e.attributes):t=a.indices+":"+Hc(a.attributes)+":"+a.mode,a.targets!==void 0)for(let i=0,n=a.targets.length;i<n;i++)t+=":"+Hc(a.targets[i]);return t}function Hc(a){let t="",e=Object.keys(a).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+a[e[i]]+";";return t}function ul(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function a1(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var r1=new Rt,dl=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Jx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new jr(this.options.manager):this.textureLoader=new Kr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new La(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){let o={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:i,userData:{}};return cs(s,o,n),Nn(o,n),Promise.all(i._invokeAll(function(h){return h.afterRoot&&h.afterRoot(o)})).then(function(){t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n].joints;for(let o=0,h=r.length;o<h;o++)t[r[o]].isBone=!0}for(let n=0,s=t.length;n<s;n++){let r=t[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;let n=i.clone(),s=(r,o)=>{let h=this.associations.get(r);h!=null&&this.associations.set(o,h);for(let[c,l]of r.children.entries())s(l,o.children[c])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){let n=t(e[i]);if(n)return n}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let i=[];for(let n=0;n<e.length;n++){let s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){let i=t+":"+e,n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){let i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,r){return i.getDependency(t,r)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[se.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,r){i.load(kn.resolveURL(e.uri,n.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){let n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){let e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){let r=Oc[n.type],o=na[n.componentType],h=n.normalized===!0,c=new o(n.count*r);return Promise.resolve(new Bt(c,r,h))}let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(r){let o=r[0],h=Oc[n.type],c=na[n.componentType],l=c.BYTES_PER_ELEMENT,u=l*h,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,v=e.cache.get(x);v||(b=new c(o,p*f,n.count*f/l),v=new qs(b,f/l),e.cache.add(x,v)),g=new $n(v,h,d%f/l,m)}else o===null?b=new c(n.count*h):b=new c(o,d,n.count*h),g=new Bt(b,h,m);if(n.sparse!==void 0){let p=Oc.SCALAR,x=na[n.sparse.indices.componentType],v=n.sparse.indices.byteOffset||0,w=n.sparse.values.byteOffset||0,R=new x(r[1],v,n.sparse.count*p),y=new c(r[2],w,n.sparse.count*h);o!==null&&(g=new Bt(g.array.slice(),g.itemSize,g.normalized));for(let T=0,S=R.length;T<S;T++){let _=R[T];if(g.setX(_,y[T*h]),h>=2&&g.setY(_,y[T*h+1]),h>=3&&g.setZ(_,y[T*h+2]),h>=4&&g.setW(_,y[T*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(t){let e=this.json,i=this.options,s=e.textures[t].source,r=e.images[s],o=this.textureLoader;if(r.uri){let h=i.manager.getHandler(r.uri);h!==null&&(o=h)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,i){let n=this,s=this.json,r=s.textures[t],o=s.images[e],h=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[h])return this.textureCache[h];let c=this.loadImageSource(e,i).then(function(l){l.flipY=!1,l.name=r.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let d=(s.samplers||{})[r.sampler]||{};return l.magFilter=nf[d.magFilter]||Zt,l.minFilter=nf[d.minFilter]||Qe,l.wrapS=sf[d.wrapS]||ii,l.wrapT=sf[d.wrapT]||ii,n.associations.set(l,{textures:t}),l}).catch(function(){return null});return this.textureCache[h]=c,c}loadImageSource(t,e){let i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let r=n.images[t],o=self.URL||self.webkitURL,h=r.uri||"",c=!1;if(r.bufferView!==void 0)h=i.getDependency("bufferView",r.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:r.mimeType});return h=o.createObjectURL(d),h});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let l=Promise.resolve(h).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(b){let g=new Ze(b);g.needsUpdate=!0,d(g)}),e.load(kn.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(h),u.userData.mimeType=r.mimeType||a1(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),u});return this.sourceCache[t]=l,l}assignTexture(t,e,i,n){let s=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),s.extensions[se.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[se.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let h=s.associations.get(r);r=s.extensions[se.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,h)}}return n!==void 0&&(r.colorSpace=n),t[e]=r,r})}assignFinalMaterial(t){let e=t.geometry,i=t.material,n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,r=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+i.uuid,h=this.cache.get(o);h||(h=new Ca,mi.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,h.sizeAttenuation=!1,this.cache.add(o,h)),i=h}else if(t.isLine){let o="LineBasicMaterial:"+i.uuid,h=this.cache.get(o);h||(h=new Ra,mi.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,this.cache.add(o,h)),i=h}if(n||s||r){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let h=this.cache.get(o);h||(h=i.clone(),s&&(h.vertexColors=!0),r&&(h.flatShading=!0),n&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(o,h),this.associations.set(h,this.associations.get(i))),i=h}t.material=i}getMaterialType(){return we}loadMaterial(t){let e=this,i=this.json,n=this.extensions,s=i.materials[t],r,o={},h=s.extensions||{},c=[];if(h[se.KHR_MATERIALS_UNLIT]){let u=n[se.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(o,s,e))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Dt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],ke),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",u.baseColorTexture,fe)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=De);let l=s.alphaMode||Bc.OPAQUE;if(l===Bc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Bc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==He&&(c.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new mt(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==He&&(c.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==He){let u=s.emissiveFactor;o.emissive=new Dt().setRGB(u[0],u[1],u[2],ke)}return s.emissiveTexture!==void 0&&r!==He&&c.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,fe)),Promise.all(c).then(function(){let u=new r(o);return s.name&&(u.name=s.name),Nn(u,s),e.associations.set(u,{materials:t}),s.extensions&&cs(n,u,s),u})}createUniqueName(t){let e=ve.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[se.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(h){return af(h,o,e)})}let r=[];for(let o=0,h=t.length;o<h;o++){let c=t[o],l=s1(c),u=n[l];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[se.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=af(new he,c,e),n[l]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(t){let e=this,i=this.json,n=this.extensions,s=i.meshes[t],r=s.primitives,o=[];for(let h=0,c=r.length;h<c;h++){let l=r[h].material===void 0?e1(this.cache):this.getDependency("material",r[h].material);o.push(l)}return o.push(e.loadGeometries(r)),Promise.all(o).then(function(h){let c=h.slice(0,h.length-1),l=h[h.length-1],u=[];for(let f=0,m=l.length;f<m;f++){let b=l[f],g=r[f],p,x=c[f];if(g.mode===Di.TRIANGLES||g.mode===Di.TRIANGLE_STRIP||g.mode===Di.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new ts(b,x):new ut(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Di.TRIANGLE_STRIP?p.geometry=Nc(p.geometry,Jr):g.mode===Di.TRIANGLE_FAN&&(p.geometry=Nc(p.geometry,Da));else if(g.mode===Di.LINES)p=new Nr(b,x);else if(g.mode===Di.LINE_STRIP)p=new js(b,x);else if(g.mode===Di.LINE_LOOP)p=new Or(b,x);else if(g.mode===Di.POINTS)p=new Ys(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&n1(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),Nn(p,s),g.extensions&&cs(n,p,g),e.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&cs(n,u[0],s),u[0];let d=new ae;s.extensions&&cs(n,d,s),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e,i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Be($i.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new gi(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),Nn(e,i),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let s=n.pop(),r=n,o=[],h=[];for(let c=0,l=r.length;c<l;c++){let u=r[c];if(u){o.push(u);let d=new Rt;s!==null&&d.fromArray(s.array,c*16),h.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Xs(o,h)})}loadAnimation(t){let e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,r=[],o=[],h=[],c=[],l=[];for(let u=0,d=n.channels.length;u<d;u++){let f=n.channels[u],m=n.samplers[f.sampler],b=f.target,g=b.node,p=n.parameters!==void 0?n.parameters[m.input]:m.input,x=n.parameters!==void 0?n.parameters[m.output]:m.output;b.node!==void 0&&(r.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),h.push(this.getDependency("accessor",x)),c.push(m),l.push(b))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(h),Promise.all(c),Promise.all(l)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let x=0,v=d.length;x<v;x++){let w=d[x],R=f[x],y=m[x],T=b[x],S=g[x];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let _=i._createAnimationTracks(w,R,y,T,S);if(_)for(let E=0;E<_.length;E++)p.push(_[E])}return new Xr(s,void 0,p)})}createNodeMesh(t){let e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let r=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let h=0,c=n.weights.length;h<c;h++)o.morphTargetInfluences[h]=n.weights[h]}),r})}loadNode(t){let e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),r=[],o=n.children||[];for(let c=0,l=o.length;c<l;c++)r.push(i.getDependency("node",o[c]));let h=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(r),h]).then(function(c){let l=c[0],u=c[1],d=c[2];d!==null&&l.traverse(function(f){f.isSkinnedMesh&&f.bind(d,r1)});for(let f=0,m=u.length;f<m;f++)l.add(u[f]);return l})}_loadNodeShallow(t){let e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],r=s.name?n.createUniqueName(s.name):"",o=[],h=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return h&&o.push(h),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let l;if(s.isBone===!0?l=new es:c.length>1?l=new ae:c.length===1?l=c[0]:l=new Ae,l!==c[0])for(let u=0,d=c.length;u<d;u++)l.add(c[u]);if(s.name&&(l.userData.name=s.name,l.name=r),Nn(l,s),s.extensions&&cs(i,l,s),s.matrix!==void 0){let u=new Rt;u.fromArray(s.matrix),l.applyMatrix4(u)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return n.associations.has(l)||n.associations.set(l,{}),n.associations.get(l).nodes=t,l}),this.nodeCache[t]}loadScene(t){let e=this.extensions,i=this.json.scenes[t],n=this,s=new ae;i.name&&(s.name=n.createUniqueName(i.name)),Nn(s,i),i.extensions&&cs(e,s,i);let r=i.nodes||[],o=[];for(let h=0,c=r.length;h<c;h++)o.push(n.getDependency("node",r[h]));return Promise.all(o).then(function(h){for(let l=0,u=h.length;l<u;l++)s.add(h[l]);let c=l=>{let u=new Map;for(let[d,f]of n.associations)(d instanceof mi||d instanceof Ze)&&u.set(d,f);return l.traverse(d=>{let f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}_createAnimationTracks(t,e,i,n,s){let r=[],o=t.name?t.name:t.uuid,h=[];Un[s.path]===Un.weights?t.traverse(function(d){d.morphTargetInfluences&&h.push(d.name?d.name:d.uuid)}):h.push(o);let c;switch(Un[s.path]){case Un.weights:c=bn;break;case Un.rotation:c=Zi;break;case Un.position:case Un.scale:c=vn;break;default:switch(i.itemSize){case 1:c=bn;break;case 2:case 3:default:c=vn;break}break}let l=n.interpolation!==void 0?t1[n.interpolation]:Zn,u=this._getArrayFromAccessor(i);for(let d=0,f=h.length;d<f;d++){let m=new c(h[d]+"."+Un[s.path],e.array,u,l);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),r.push(m)}return r}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let i=ul(e.constructor),n=new Float32Array(e.length);for(let s=0,r=e.length;s<r;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){let n=this instanceof Zi?cl:Io;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function o1(a,t,e){let i=t.attributes,n=new Pi;if(i.POSITION!==void 0){let o=e.json.accessors[i.POSITION],h=o.min,c=o.max;if(h!==void 0&&c!==void 0){if(n.set(new M(h[0],h[1],h[2]),new M(c[0],c[1],c[2])),o.normalized){let l=ul(na[o.componentType]);n.min.multiplyScalar(l),n.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new M,h=new M;for(let c=0,l=s.length;c<l;c++){let u=s[c];if(u.POSITION!==void 0){let d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(h.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),h.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),h.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=ul(na[d.componentType]);h.multiplyScalar(b)}o.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}a.boundingBox=n;let r=new Mi;n.getCenter(r.center),r.radius=n.min.distanceTo(n.max)/2,a.boundingSphere=r}function af(a,t,e){let i=t.attributes,n=[];function s(r,o){return e.getDependency("accessor",r).then(function(h){a.setAttribute(o,h)})}for(let r in i){let o=ll[r]||r.toLowerCase();o in a.attributes||n.push(s(i[r],o))}if(t.indices!==void 0&&!a.index){let r=e.getDependency("accessor",t.indices).then(function(o){a.setIndex(o)});n.push(r)}return le.workingColorSpace!==ke&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${le.workingColorSpace}" not supported.`),Nn(a,t),o1(a,t,e),Promise.all(n).then(function(){return t.targets!==void 0?i1(a,t.targets,e):a})}var of=function(){"use strict";var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(e)?t:a,s,r=WebAssembly.instantiate(o(n),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var w=p.charCodeAt(v);x[v]=w>96?w-97:w>64?w-39:w+4}for(var R=0,v=0;v<p.length;++v)x[R++]=x[v]<60?i[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,R)}function h(p,x,v,w,R,y){var T=s.exports.sbrk,S=v+3&-4,_=T(S*w),E=T(R.length),I=new Uint8Array(s.exports.memory.buffer);I.set(R,E);var W=p(_,v,w,E,R.length);if(W==0&&y&&y(_,S,w),x.set(I.subarray(_,_+v*w)),T(_-T(0)),W!=0)throw new Error("Malformed buffer data: "+W)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},l={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var w=v.data;x.pending-=w.count,x.requests[w.id][w.action](w.value),delete x.requests[w.id]},x}function m(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(n))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+h.toString()+g.toString(),v=new Blob([x],{type:"text/javascript"}),w=URL.createObjectURL(v),R=0;R<p;++R)u[R]=f(w);URL.revokeObjectURL(w)}function b(p,x,v,w,R){for(var y=u[0],T=1;T<u.length;++T)u[T].pending<y.pending&&(y=u[T]);return new Promise(function(S,_){var E=new Uint8Array(v),I=d++;y.pending+=p,y.requests[I]={resolve:S,reject:_},y.object.postMessage({id:I,count:p,size:x,source:E,mode:w,filter:R},[E.buffer])})}function g(p){r.then(function(){var x=p.data;try{var v=new Uint8Array(x.count*x.size);h(s.exports[x.mode],v,x.count,x.size,x.source,s.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(w){self.postMessage({id:x.id,count:x.count,action:"reject",value:w})}})}return{ready:r,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,v,w,R){h(s.exports.meshopt_decodeVertexBuffer,p,x,v,w,s.exports[c[R]])},decodeIndexBuffer:function(p,x,v,w){h(s.exports.meshopt_decodeIndexBuffer,p,x,v,w)},decodeIndexSequence:function(p,x,v,w){h(s.exports.meshopt_decodeIndexSequence,p,x,v,w)},decodeGltfBuffer:function(p,x,v,w,R,y){h(s.exports[l[R]],p,x,v,w,s.exports[c[y]])},decodeGltfBufferAsync:function(p,x,v,w,R){return u.length>0?b(p,x,v,l[w],c[R]):r.then(function(){var y=new Uint8Array(p*x);return h(s.exports[l[w]],y,p,x,v,s.exports[c[R]]),y})}}}();var hf=[["hips","Hips",null,null],["spine","Spine","Spine1","chest"],["chest","Spine2","Neck","neck"],["neck","Neck","Head","head"],["head","Head",null,null],["upperArmL","LeftArm","LeftForeArm","foreArmL"],["foreArmL","LeftForeArm","LeftHand","handL"],["handL","LeftHand","LeftHandMiddle1",[.03,-.182,.012]],["upperArmR","RightArm","RightForeArm","foreArmR"],["foreArmR","RightForeArm","RightHand","handR"],["handR","RightHand","RightHandMiddle1",[-.03,-.182,.012]],["thighL","LeftUpLeg","LeftLeg","shinL"],["shinL","LeftLeg","LeftFoot","footL"],["footL","LeftFoot","LeftToeBase",[.006,-.063,.205]],["thighR","RightUpLeg","RightLeg","shinR"],["shinR","RightLeg","RightFoot","footR"],["footR","RightFoot","RightToeBase",[-.006,-.063,.205]]],h1=["Index","Middle","Ring","Pinky"];function Na(a){return new Promise((t,e)=>{let i=atob(a),n=new Uint8Array(i.length);for(let r=0;r<i.length;r++)n[r]=i.charCodeAt(r);let s=new Fo;s.setMeshoptDecoder(of),s.parse(n.buffer,"",t,e)})}var Do=class{constructor(t,e,i=1.78){let n=t.group,s=n.position.clone(),r=n.quaternion.clone();n.position.set(0,0,0),n.quaternion.identity(),this.root=new ae,this.root.name="glbBody",this.root.add(e.scene),n.add(this.root);let o=null;if(e.scene.traverse(y=>{y.isSkinnedMesh&&!o&&(o=y)}),!o)throw new Error("GLB has no skinned mesh");this.mesh=o,o.frustumCulled=!1,o.layers.enable(1),o.skeleton.pose(),n.updateMatrixWorld(!0);let h=new Map;o.skeleton.bones.forEach(y=>h.set(y.name.replace(/^mixamorig:?/i,""),y)),this.by=h;for(let y of hf)if(!h.get(y[1]))throw new Error("GLB skeleton is missing "+y[1]);let c=new M,l=new M;{let y=h.get("Head").getWorldPosition(new M).sub(h.get("Hips").getWorldPosition(c)).normalize(),T=h.get("LeftUpLeg").getWorldPosition(new M).sub(h.get("RightUpLeg").getWorldPosition(l)).normalize(),S=new M().crossVectors(T,y).normalize();T.crossVectors(y,S).normalize(),this.root.quaternion.setFromRotationMatrix(new Rt().makeBasis(T,y,S)).invert()}n.updateMatrixWorld(!0);let u=()=>(n.updateMatrixWorld(!0),o.skeleton.update(),o.computeBoundingBox(),o.boundingBox.clone().applyMatrix4(o.matrixWorld)),d=u();this.sourceHeight=d.max.y-d.min.y,this.root.scale.setScalar(i/this.sourceHeight),n.updateMatrixWorld(!0),h.get("Hips").getWorldPosition(c),this.root.position.set(-c.x,-c.y,-c.z),n.updateMatrixWorld(!0),d=u();let f=h.get("Head").getWorldPosition(new M);this.eye=new M(0,d.max.y-.118,f.z+.082),this.mouth=new M(0,d.max.y-.185,f.z+.09),this.top=d.max.y,this.feet=d.min.y;let m=h.get("Hips");this.order=[],m.traverse(y=>{y.isBone&&this.order.push(y)}),this.order.forEach((y,T)=>{y.userData.k=T}),this.parent=this.order.map(y=>y===m?-1:y.parent.userData.k),this.restL=this.order.map(y=>y.quaternion.clone()),this.W=this.order.map(()=>new yt),this.rootParentW=m.parent.getWorldQuaternion(new yt),this.driver=this.order.map(()=>-1),this.aligned=this.order.map(()=>null);let b=y=>new M(li[A[y]][2],li[A[y]][3],li[A[y]][4]),g=new yt;for(let[y,T,S,_]of hf){let E=h.get(T),I=E.userData.k,W=E.getWorldQuaternion(new yt),Y=new yt;if(S&&_&&h.get(S)){let k=h.get(S).getWorldPosition(new M).sub(E.getWorldPosition(c)).normalize(),z=(Array.isArray(_)?new M(..._):b(_).sub(b(y))).normalize();Y.setFromUnitVectors(k,z)}this.driver[I]=A[y],this.aligned[I]=Y.multiply(W)}this.special=this.order.map(()=>null);let p=h.get("Spine1");if(p){let y=h.get("Spine2").getWorldPosition(new M).sub(p.getWorldPosition(c)).normalize(),T=new yt().setFromUnitVectors(y,new M(0,1,0)).multiply(p.getWorldQuaternion(new yt));this.special[p.userData.k]={type:"mid",aligned:T}}for(let[y,T,S]of[["LeftShoulder",1,A.upperArmL],["RightShoulder",-1,A.upperArmR]]){let _=h.get(y);_&&(this.special[_.userData.k]={type:"clav",side:T,arm:S,restW:_.getWorldQuaternion(new yt)})}this._d=new M,this._e=new pi,this._q2=new yt,this.fingers={Left:[],Right:[]},this.grip={Left:0,Right:0};for(let y of["Left","Right"]){let T=h.get(y+"Hand"),S=new M(0,-1,0);for(let _ of h1)for(let E=1;E<=3;E++){let I=h.get(`${y}Hand${_}${E}`);if(!I)continue;let W=I.children.find(D=>D.isBone),Y=W?W.getWorldPosition(new M).sub(I.getWorldPosition(c)).normalize():new M(y==="Left"?1:-1,0,0),k=new M().crossVectors(Y,S).normalize(),z=I.parent.getWorldQuaternion(new yt),O=I.getWorldQuaternion(new yt);g.setFromAxisAngle(k,(E===1?.32:.42)*(_==="Pinky"?1.25:_==="Index"?.8:1));let U=g.clone().multiply(O),N=z.invert();this.restL[I.userData.k]=N.clone().multiply(U),I.quaternion.copy(this.restL[I.userData.k]),g.setFromAxisAngle(k,E===1?1.05:E===2?1.35:.9),this.fingers[y].push({bone:I,open:this.restL[I.userData.k].clone(),shut:N.clone().multiply(g.clone().multiply(O))})}}this.D=li.map(()=>new yt),this.headBone=h.get("Head"),this._q=new yt;let x=Array.isArray(o.material)?o.material:[o.material];for(let y of x)y.roughness=.44,y.metalness=0,y.envMapIntensity=1.3,y.color&&y.color.setRGB(.7,.78,.9),y.needsUpdate=!0;this.cutOn={value:0},this.headRigid=[];let v=`
  if (uCutOn > 0.5 && cutV > 0.0) {
    vec3 rel = position - uCutPos; rel -= uCutDir * dot(rel, uCutDir);
    transformed = uCutPos + rel * min(1.0, uCutR / max(length(rel), 1.0e-5)) - uCutDir * (0.4 * uCutR);
  }`,w=h.get("Head"),R=y=>{for(let T=y.parent;T;T=T.parent)if(T===w)return!0;return!1};e.scene.traverse(y=>{if(!y.isMesh)return;if(!y.isSkinnedMesh){R(y)&&this.headRigid.push(y);return}let T=y.skeleton.bones,S=J=>T.findIndex(ot=>ot.name.replace(/^mixamorig:?/i,"")===J),_=S("Neck"),E=S("Head"),I=S("Spine2");if(_<0||E<0||I<0)return;let W=new Set([_]);w.traverse(J=>{let ot=T.indexOf(J);ot>=0&&W.add(ot)});let Y=y.geometry.attributes.position,k=y.geometry.attributes.skinIndex,z=y.geometry.attributes.skinWeight,O=k.count,U=new Float32Array(O),N=new Float32Array(O),D=new M,P=new M,G=new M,V=0,H=0;for(let J=0;J<O;J++){let ot=0,it=0,Mt=0;for(let Q=0;Q<4;Q++){let Nt=z.getComponent(J,Q),xt=k.getComponent(J,Q);it+=Nt,W.has(xt)&&(ot+=Nt),xt===_&&(Mt+=Nt)}U[J]=it>0?ot/it:0,N[J]=it>0?Mt/it:0,G.fromBufferAttribute(Y,J),N[J]=Math.max(N[J],U[J]>.25&&U[J]<.85?.6:0),N[J]>.5?(D.add(G),V++):U[J]>.95&&(P.add(G),H++)}if(!V||!H)return;y.geometry.setAttribute("aHead",new Bt(U,1)),D.multiplyScalar(1/V),P.multiplyScalar(1/H);let B=P.clone().sub(D).normalize(),j=0,tt=0;for(let J=0;J<O;J++){if(N[J]<=.5)continue;G.fromBufferAttribute(Y,J).sub(D);let ot=G.dot(B),it=G.addScaledVector(B,-ot).length();ot<j&&(j=ot),it>tt&&(tt=it)}let K={uCutOn:this.cutOn,uCutPos:{value:D.clone().addScaledVector(B,j*.55)},uCutDir:{value:B},uCutR:{value:tt*.8},uCutBone:{value:I}};y.frustumCulled=!1,this.cutInfo=K;for(let J of Array.isArray(y.material)?y.material:[y.material])J.onBeforeCompile=ot=>{Object.assign(ot.uniforms,K),ot.vertexShader=`attribute float aHead; uniform float uCutOn; uniform vec3 uCutPos; uniform vec3 uCutDir; uniform float uCutR; uniform float uCutBone; varying float vCut;
`+ot.vertexShader.replace("#include <skinbase_vertex>",`float cutV = aHead - 0.6;
  vCut = cutV;
  #include <skinbase_vertex>
  #ifdef USE_SKINNING
  if (uCutOn > 0.5 && cutV > 0.0) { boneMatX = getBoneMatrix(uCutBone); boneMatY = boneMatX; boneMatZ = boneMatX; boneMatW = boneMatX; }
  #endif`).replace("#include <morphtarget_vertex>","#include <morphtarget_vertex>"+v),ot.fragmentShader=`uniform float uCutOn; varying float vCut;
`+ot.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) diffuseColor.a = 1.0;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) gl_FragColor.rgb = vec3(0.010, 0.012, 0.014);`)},J.customProgramCacheKey=()=>"eos-neck-lid-"+y.uuid,J.needsUpdate=!0}),this.material=x[0],n.position.copy(s),n.quaternion.copy(r),n.updateMatrixWorld(!0)}setHeadVisible(t){this.cutOn.value=t?0:1}setGrip(t,e){for(let[i,n]of[["Left",t],["Right",e]])if(!(Math.abs(this.grip[i]-n)<.01)){this.grip[i]=n;for(let s of this.fingers[i])s.bone.quaternion.copy(s.open).slerp(s.shut,n),this.restL[s.bone.userData.k].copy(s.bone.quaternion)}}update(t){let e=this.D;for(let r=0;r<t.length;r++){let o=li[r][1];o<0?e[r].copy(t[r].quaternion):e[r].copy(e[o]).multiply(t[r].quaternion)}let i=this.W,n=this.order,s=this._q;for(let r=0;r<n.length;r++){let o=this.parent[r]<0?this.rootParentW:i[this.parent[r]],h=this.driver[r];if(h>=0)i[r].copy(e[h]).multiply(this.aligned[r]),n[r].quaternion.copy(s.copy(o).invert().multiply(i[r]));else if(this.special[r]){let c=this.special[r];if(c.type==="mid")i[r].copy(e[A.spine]).slerp(e[A.chest],.5).multiply(c.aligned);else{let l=this._d.set(0,-1,0).applyQuaternion(t[c.arm].quaternion),u=Math.max(0,Math.min(1,(l.y+.35)/1.35)),d=Math.max(0,Math.min(1,l.z));this._q2.setFromEuler(this._e.set(0,-c.side*.3*d,c.side*.62*u*u*(3-2*u),"YXZ")),i[r].copy(e[A.chest]).multiply(this._q2).multiply(c.restW)}n[r].quaternion.copy(s.copy(o).invert().multiply(i[r]))}else i[r].copy(o).multiply(this.restL[r])}}};var cf={scream:[["scream_eyes",1,"snap"],["scream_mouth",1,"open"]],fear:[["fear_brows",1,"snap"],["scream_mouth",.85,"open"]],agony:[["agony",1,"slow"]],sob:[["sob",1,"slow"]],terror:[["fear_brows",1,"snap"],["scream_eyes",.25,"snap"],["shout_mouth",1,"open"]],hit:[["eyes_wide",1,"snap"],["clench",1,"snap"],["fear_brows",.3,"snap"]],strain:[["clench",.85,"slow"],["strain_eyes",1,"slow"]],dying:[["exhaust",1,"slow"],["sob",.35,"slow"]],shock:[["jaw_drop",1,"open"],["eyes_wide",.8,"snap"],["fear_brows",.6,"snap"]],gasp:[["gasp",1,"snap"],["eyes_wide",.5,"snap"]],silent:[["jaw_drop",.9,"slow"],["strain_eyes",.8,"slow"]],wince:[["strain_eyes",.7,"snap"],["clench",.6,"snap"]],hold:[["clench",.4,"slow"],["eyes_wide",.55,"slow"],["fear_brows",.35,"slow"]],choke:[["eyes_wide",1,"snap"],["gasp",.55,"open"],["exhaust",.2,"slow"]],howl:[["sob",.7,"slow"],["shout_mouth",1,"open"]],pant:[["exhaust",.6,"slow"],["gasp",.45,"breath"]],blank:[["exhaust",.5,"slow"],["eyes_wide",.4,"slow"],["jaw_drop",.25,"slow"]],groan:[["strain_eyes",.9,"slow"],["agony",.5,"slow"],["clench",.5,"slow"],["fear_brows",.25,"slow"]],moan:[["agony",.75,"slow"],["sob",.4,"slow"],["exhaust",.35,"breath"],["strain_eyes",.35,"slow"]]},c1={snap:16,open:8,slow:3.2,breath:6},ko=class{constructor(){this.mesh=null,this.dict=null,this.inf=null,this.cur={},this.tgt={},this.shape={},this.forced=null,this.forcedT=0,this.forcedGain=1,this.label="none",this.time=0,this.blinkT=2,this.blink=0}attach(t){if(!t||!t.morphTargetDictionary||!t.morphTargetInfluences)return!1;this.mesh=t,this.dict=t.morphTargetDictionary,this.inf=t.morphTargetInfluences;for(let e of Object.keys(this.dict))this.cur[e]=0,this.tgt[e]=0,this.shape[e]="slow";return!0}play(t,e,i=1){cf[t]&&(this.forced=t,this.forcedT=e,this.forcedGain=i)}update(t,e){if(!this.mesh)return;this.time+=t;let i=this.tgt,n=this.shape;for(let u in i)i[u]=0;let s=0;this.label="none";let r=(u,d)=>{if(!(d<=.01)){d>s&&(s=d,this.label=u);for(let[f,m,b]of cf[u]){if(i[f]===void 0)continue;let g=m*Math.min(1,d)*(b==="breath"?.5+.5*Math.sin(e.breathPhase*6.283):1);g>i[f]&&(i[f]=g,n[f]=b)}}};if(this.forcedT-=t,this.forced&&this.forcedT>0?r(this.forced,this.forcedGain):this.forced=null,!e.alive||e.blackout>.75)r("blank",1);else if(e.mouthUnder){let u=e.oxygen;e.impact>1&&r("hit",Math.min(1,e.impact/1.8)),u<14?(r("silent",1),r("agony",.7)):u<34?(r("choke",1),r("agony",.5*(34-u)/20)):u<62?(r("strain",.5+.5*(62-u)/28),r("hold",.6)):r("hold",1),e.blackout>.15&&r("dying",e.blackout*1.2)}else e.impact>1&&r("hit",Math.min(1,e.impact/1.8)),e.air>.3&&r("shock",e.air),e.brace>.3&&(r(e.crestDist<12?"terror":"fear",e.brace),e.brace>.85&&e.crestDist<5&&r("hold",.8)),e.gaspTimer>0&&(e.inhaling?r("gasp",.45+.55*Math.min(1,e.gaspTimer/2.5)):r("pant",1),e.swallow>.25&&r("wince",.7)),r("choke",ft((40-e.oxygen)/30)),e.stamina<24&&r("dying",1-e.stamina/24),e.effort>.7&&r("strain",Math.min(1,(e.effort-.7)*1.5)),e.temp<35.2&&r("groan",ft((35.2-e.temp)/2)*.7),s<.35&&r("pant",.25+.5*e.exertion);this.blinkT-=t,this.blinkT<=0&&(this.blink=.16,this.blinkT=1.8+Math.random()*3.5),this.blink=Math.max(0,this.blink-t),this.blink>0&&!e.mouthUnder&&i.strain_eyes!==void 0&&(i.strain_eyes=Math.max(i.strain_eyes,.9));let o=this.inf,h=this.dict,c=this.cur,l=0;for(let u in c){let f=i[u]>c[u]?c1[n[u]]||4:3.4;c[u]+=(i[u]-c[u])*(1-Math.exp(-t*f));let m=1+.12*Math.sin(this.time*(2.3+l*.37)+l*1.9)*(c[u]>.05?1:0);o[h[u]]=Math.max(0,Math.min(1.15,c[u]*m)),l++}}};var l1={gasp:[["b_gasp3",0,3,.72],["b_gasp4",0,3,.7],["b_gasp2",0,3,.8],["b_gasp1",0,3,.9]],inhale:[["b_gasp3",0,.85,.62],["b_gasp4",0,.62,.6]],cough:[["b_choke",.25,1.7,1],["b_choke",1.95,3,1.1],["b_choke",3.9,5,1.2],["b_choke",7.15,8.95,1.1],["b_choke",9.4,10.8,.9]],sputter:[["b_choke",5.45,6.1,1.1],["b_choke",14.25,14.7,.9],["b_choke",15.4,16.5,1],["b_choke",19.45,20.05,.6]],retch:[["b_choke",11.65,14.15,1.2],["b_choke",17.65,18.8,.8]],groan:[["b_under",0,1.25,1.2],["b_under",2.05,3.45,1.2]],bubbles:[["b_under",4.1,8.15,.9]]},u1={gasp:1.2,inhale:3,cough:1.2,sputter:1.4,retch:4,groan:3,bubbles:1.5},d1={gasp:"gasp",inhale:"gasp",cough:"wince",sputter:"wince",retch:"choke",groan:"silent",bubbles:"choke"},f1={cough:1,sputter:1,retch:1},zo=class{constructor(t,e,i={}){this.audio=t,this.face=e,this.hooks=i,this.t=0,this.cool={},this.cur={prio:0,until:0},this.jobs=[],this.marks={},this.prevBrace=0,this.prevAir=0,this.prevDive=!1,this.splashCool=0,this.slapCool=0,this.gurgleUntil=0,this.gT=0,this.bubT=2,this.bed=0,this.last="",this.lastPick={},this.count=0}say(t,e,i,n){let s=this.t;if(s<(this.cool[t]||0)||s<this.cur.until&&e<=this.cur.prio)return 0;let r=l1[t],o=Math.random()*r.length|0;r.length>1&&o===this.lastPick[t]&&(o=(o+1)%r.length),this.lastPick[t]=o;let[h,c,l,u]=r[o],d=!!(n&&n.under),f=this.audio.playVoice(h,i*u*(d?1.3:1),.97+Math.random()*.06,[c,l]);this.last=t,this.count++;let m=f||l-c;return this.cur={prio:e,until:s+m*.85},this.cool[t]=s+m+u1[t],this.face&&this.face.play(d?t==="groan"?"silent":"choke":d1[t],m+.25),f1[t]&&this.hooks.cough&&this.hooks.cough(m),d&&(this.audio.gurgle(.95),this.hooks.bubbles&&this.hooks.bubbles(Math.min(44,Math.round(12+m*14))),this.gurgleUntil=s+m,this.gT=.3),m}later(t,e){this.jobs.push({at:this.t+t,fn:e})}onEvent(t,e,i){if(!(!i||!i.alive))if(t==="surface")if(e.time>1.2||e.need>.2){let n=this.say("gasp",6,1,i);e.time>7||i.swallow>.45?this.later(Math.max(1.1,n*.6),s=>{s.under||this.say("retch",6,1,s)}):(e.time>3.2||i.swallow>.2)&&this.later(Math.max(1,n*.55),s=>{s.under||this.say("cough",5,.95,s)})}else e.time>.25&&(i.swallow>.1||Math.random()<.5)&&this.say("sputter",3,.8,i);else t==="impact"?e.strength>1.15&&!i.under&&this.say("sputter",4,1,i):t==="exhale"&&e.cough?i.under||this.say("cough",4,.85,i):t==="splash"?this.t>this.splashCool&&e.v>1.8&&!i.camUnder&&(this.splashCool=this.t+.45,this.audio.playClip(e.v>4?Math.random()<.5?"w_splash2":"w_splash1":"w_splash3",Math.min(.9,.15+e.v*.09),.9+Math.random()*.25,Math.random()*1.2-.6)):t==="limb"&&this.t>this.slapCool&&e.v>1.3&&!i.camUnder&&(this.slapCool=this.t+.07,this.audio.playClip("w_slap"+(1+(Math.random()*6|0)),Math.min(.75,.06+e.v*.085)*(e.kind==="arm"?.6:1),.85+Math.random()*.4,e.pan||0))}update(t,e){this.t+=t;for(let c=this.jobs.length-1;c>=0;c--)this.t>=this.jobs[c].at&&this.jobs.splice(c,1)[0].fn(e);let i=e.alive&&!e.under,n=c=>Math.max(0,Math.min(1,c)),s=n(.3+.55*(e.exertion||0)+(e.gaspTimer>0?.35:0)+.3*(e.struggle||0)+.25*n(e.brace||0)+.2*(e.air||0)+.38*(e.fear||0)),r=n((30-e.stamina)/25),o=this.t<this.cur.until?.28:1,h=i?(1-(e.blackout||0))*o:0;if(this.bed=h*(.2+.8*s)*(1-.7*r),this.audio.setBreath(this.bed*.95,h*(.12+.88*r)*.9,.92+.42*s,i),!!e.alive)if(e.under&&this.t<this.gurgleUntil&&(this.gT-=t,this.gT<=0&&(this.audio.gurgle(.6),this.gT=.32+Math.random()*.3,this.hooks.bubbles&&this.hooks.bubbles(7))),!e.under&&e.mouthDepth!==void 0&&e.mouthDepth>-.07&&(this.lipT=(this.lipT||0)-t,this.lipT<=0&&(this.lipT=.35+Math.random()*.35,this.audio.gurgle(.35+.3*Math.random()),this.hooks.bubbles&&e.mouthDepth>-.02&&this.hooks.bubbles(3))),!e.under&&(e.fear||0)>.68&&(this.fearT=(this.fearT===void 0?3:this.fearT)-t,this.fearT<=0&&(this.fearT=3.5+Math.random()*4.5,this.say("gasp",2,.55+.4*e.fear,e))),e.brace>.7&&this.prevBrace<=.7&&e.crestHeight>6&&!e.under&&this.say("inhale",5,1,e),this.prevBrace=e.brace,e.dive&&!this.prevDive&&!e.under&&this.say("inhale",5,.9,e),this.prevDive=e.dive,e.air>.5&&this.prevAir<=.5&&!e.under&&this.say("inhale",5,1,e),this.prevAir=e.air,e.under){let c=n(((e.tumble||0)-.25)*2.2+((e.turb||0)-.3)*1.2);c>.05?(this.thrG=(this.thrG||0)-t,this.thrG<=0&&(this.thrG=.16+(1-c)*.3+Math.random()*.14,this.audio.gurgle(.45+.5*c),this.hooks.bubbles&&this.hooks.bubbles(Math.round(5+9*c))),this.thrV=(this.thrV||0)-t,this.thrV<=0&&(this.thrV=1.7+Math.random()*1.4,this.say("bubbles",3,.6+.4*c,e))):this.thrV=Math.min(this.thrV||0,.4);let l=e.oxygen;l<48&&!this.marks.a&&(this.marks.a=!0,this.say("groan",5,.8,e)),l<30&&!this.marks.b&&(this.marks.b=!0,this.say("groan",6,1,e)),l<14&&!this.marks.c&&(this.marks.c=!0,this.say("groan",7,1,e)),l<72&&(this.bubT-=t*(1+n((50-l)/40)),this.bubT<=0&&(this.bubT=2.6+Math.random()*2.4,this.say("bubbles",2,.55+.4*n((60-l)/50),e)))}else e.oxygen>60&&(this.marks.a=this.marks.b=this.marks.c=!1)}};var fl=`
varying vec3 vP;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vP = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,pl=`
precision highp float;
uniform sampler2D uNoise; uniform float uTime; uniform float uI;
uniform vec3 uApex; uniform vec3 uAxis; uniform float uLen; uniform float uTan; uniform float uWaterY;
varying vec3 vP;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec3 O = cameraPosition; vec3 V = normalize(vP - O);
  float tn = uTan * 1.25; float c2 = 1.0 / (1.0 + tn * tn);
  vec3 co = O - uApex; float vd = dot(V, uAxis), cd = dot(co, uAxis);
  float a = vd * vd - c2, b = 2.0 * (vd * cd - dot(V, co) * c2), c = cd * cd - dot(co, co) * c2;
  float lo = 0.0, hi = 1.0e5;
  if (abs(vd) > 1.0e-5) { float ta = (0.25 - cd) / vd, tb = (uLen - cd) / vd; lo = max(lo, min(ta, tb)); hi = min(hi, max(ta, tb)); }
  else if (cd < 0.25 || cd > uLen) discard;
  // the shaft runs all the way down to the sea and stops there: the view ray is cut where it meets the water
  if (abs(V.y) > 1.0e-5) { float tw = (uWaterY - O.y) / V.y; if (tw > 0.0) { if (O.y > uWaterY) hi = min(hi, tw); else lo = max(lo, tw); } }
  float A0 = lo, A1 = hi;
  float disc = b * b - 4.0 * a * c;
  if (disc > 0.0 && abs(a) > 1.0e-7) {
    float sq = sqrt(disc); float r1 = (-b - sq) / (2.0 * a), r2 = (-b + sq) / (2.0 * a);
    if (r1 > r2) { float tt = r1; r1 = r2; r2 = tt; }
    if (a < 0.0) { A0 = max(lo, r1); A1 = min(hi, r2); }
    else { float l1 = min(hi, r1) - lo, l2 = hi - max(lo, r2); if (l1 > l2) { A1 = min(hi, r1); } else { A0 = max(lo, r2); } }
  } else if (a < 0.0) discard;
  if (A1 <= A0) discard;
  const int N = 22;
  float dtm = (A1 - A0) / float(N), j = hash(gl_FragCoord.xy + fract(uTime) * 17.0);
  float acc = 0.0;
  for (int i = 0; i < N; i++) {
    float t = A0 + (float(i) + j) * dtm;
    vec3 q = O + V * t - uApex;
    float s = dot(q, uAxis); float rr = length(q - uAxis * s); float r = s * uTan + 0.14;
    float prof = exp(-2.6 * rr * rr / (r * r));
    float I = 1.0 / (1.0 + s * s / 120.0) + 0.022;
    float nz = texture(uNoise, vec2(q.x * 0.55 + q.z * 0.45, q.y * 0.05 + uTime * 0.85)).r;
    acc += prof * I * (0.5 + 1.0 * nz) * dtm;
  }
  // (soft shoulder: looking up the shaft it glares, but it never burns the whole picture out)
  acc = 9.0 * (1.0 - exp(-acc / 9.0));
  gl_FragColor = vec4(vec3(0.74, 0.86, 1.0) * acc * uI, 1.0);
}`,p1=`
varying vec2 vP;
void main() { vP = (uv - 0.5) * 2.0 * 5.2; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,m1=`
precision highp float;
uniform float uAngle; uniform float uSmear; uniform vec3 uLit;
varying vec2 vP;
void main() {
  float r = length(vP);
  if (r > 5.17 || r < 0.30) discard;
  float th = atan(vP.y, vP.x);
  float chord = mix(0.15, 0.27, smoothstep(0.75, 1.05, r)) * mix(1.0, 0.75, smoothstep(4.7, 5.16, r));
  float w = chord / r;                                   // the angle a blade covers at this radius
  float soft = uSmear * 0.45 + w;                        // both edges of a swept wedge are soft
  float cover = 0.0;
  for (int i = 0; i < 5; i++) {
    float a = mod(th - uAngle - float(i) * 1.2566371, 6.2831853);
    cover += smoothstep(0.0, soft, a) * (1.0 - smoothstep(uSmear, uSmear + soft, a));
  }
  float frac = min(1.0, w / uSmear);                     // share of the exposure a blade is over this spot
  float mean = min(1.0, 5.0 * w / 6.2831853);            // and what the eye adds up over the frames
  // (a dark blur on a dark sky has to be laid on thicker than the arithmetic says, or nothing is seen at all)
  float alpha = clamp(cover * (0.30 + frac * 1.4) + 0.09 + mean * 0.5, 0.0, 0.92);
  vec3 col = mix(vec3(0.16, 0.16, 0.17), vec3(0.05, 0.054, 0.06), smoothstep(0.8, 1.1, r));
  float tip = smoothstep(4.80, 4.88, r);
  col = mix(col, vec3(0.30, 0.27, 0.11), tip * 0.4);     // the yellow tips: a hint of colour at the edge of the disc, no more
  alpha *= 1.0 - smoothstep(5.10, 5.17, r);
  gl_FragColor = vec4(col * uLit, alpha);
}`,ls=25,Uo=class{constructor(t){this.waves=t,this.group=new ae,this.group.visible=!1,this.state="none",this.arriveAt=240,this.hoverTime=0,this.hold=0,this.rescued=!1,this.pos=new M,this.vel=new M,this.ring=new M,this.ringVel=new M,this.tan=.125,this.time=0,this.aim=new M,this._s=si(),this._v=new M,this._d=new M,this._down=new M(0,-1,0),this._from=new M;let e=this.heli=new ae,i=new we({color:13620438,roughness:.45,metalness:.2}),n=new we({color:13127708,roughness:.5,metalness:.1}),s=new we({color:1316892,roughness:.5,metalness:.4}),r=new we({color:395532,roughness:.08,metalness:.8});{let D=document.createElement("canvas");D.width=D.height=512;let P=D.getContext("2d");P.fillStyle="#e9ecee",P.fillRect(0,0,512,512);let G=7,V=()=>(G=G*16807%2147483647,G/2147483647);for(let B=0;B<2600;B++){let j=205+V()*45;P.fillStyle=`rgba(${j},${j},${j+3},0.25)`,P.fillRect(V()*512,V()*512,2+V()*5,2+V()*5)}for(let B=0;B<46;B++){let j=V()*512,tt=3+V()*14,K=P.createLinearGradient(0,0,0,512);K.addColorStop(0,"rgba(60,62,66,0)"),K.addColorStop(.3+V()*.3,`rgba(60,62,66,${.05+V()*.12})`),K.addColorStop(1,"rgba(60,62,66,0)"),P.fillStyle=K,P.fillRect(j,0,tt,512)}P.strokeStyle="rgba(40,44,50,0.62)",P.lineWidth=1.6;for(let B of[64,150,256,330,420,500])P.beginPath(),P.moveTo(0,B),P.lineTo(512,B),P.stroke();for(let B of[0,86,128,214,256,342,384,470])P.beginPath(),P.moveTo(B,0),P.lineTo(B,512),P.stroke();P.fillStyle="rgba(50,54,60,0.55)";for(let B of[58,70,144,156,250,262,324,336,414,426])for(let j=4;j<512;j+=9)P.fillRect(j,B,1.6,1.6);for(let B of[80,92,208,220,336,348,464,476])for(let j=4;j<512;j+=9)P.fillRect(B,j,1.6,1.6);let H=new Bi(D);H.colorSpace=fe,H.wrapS=H.wrapT=ii,H.repeat.set(4,3),H.anisotropy=4,i.map=H,i.color.set(14672869)}let o=(D,P,G,V,H=512)=>{let B=document.createElement("canvas");B.width=H,B.height=Math.round(H*G/P);let j=B.getContext("2d");j.textAlign="center",j.textBaseline="middle",j.fillStyle=V;let tt=B.height/D.length;D.forEach(([J,ot],it)=>{j.font=`900 ${Math.round(tt*ot)}px "Arial Black", "Malgun Gothic", "Noto Sans KR", Arial, sans-serif`,j.fillText(J,H/2,tt*(it+.5),H*.96)});let K=new Bi(B);return K.colorSpace=fe,K.anisotropy=4,new ut(new Ei(P,G),new we({map:K,transparent:!0,alphaTest:.35,roughness:.6,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}))},h=[[.02,3.35],[.55,3.2],[.95,2.8],[1.22,2.1],[1.32,1.2],[1.32,0],[1.25,-1],[1,-1.9],[.62,-2.6],[.4,-3.6],[.3,-5.4],[.22,-7.3],[.12,-8.2],[.02,-8.35]],c=new ut(new Ks(h.map(([D,P])=>new mt(D,P)),28),i);c.rotation.x=Math.PI/2,c.scale.set(1,1,1.12),e.add(c);let l=new ut(new pe(1.345,1.3,.9,28,1,!0),n);l.rotation.x=Math.PI/2,l.scale.set(1,1,1.12),l.position.z=-.75,e.add(l);let u=new ut(new pe(.33,.3,.7,14,1,!0),n);u.rotation.x=Math.PI/2,u.position.set(0,0,-5.6),e.add(u);let d=[[1.335,.9],[1.335,1.25],[1.235,2.1],[.965,2.8],[.565,3.2],[.03,3.36]].map(([D,P])=>new mt(D*1.012,P)),f=new ut(new Ks(d,20,Math.PI/2+.38,Math.PI-.76),r);f.rotation.x=Math.PI/2,f.scale.set(1,1,1.12),e.add(f);for(let D of[-1,1]){let P=new ut(new Le(.05,.62,1.05),r);P.position.set(D*1.335,.42,-1.25),e.add(P);let G=new ut(new Le(.06,1.5,.09),i);G.position.set(D*1.31,.2,.92),e.add(G)}let m=new ut(new Le(1.5,.12,3.6),s);m.position.set(0,-1.44,.2),e.add(m);let b=new ut(new Qi(1,18,12),i);b.scale.set(.85,.55,1.9),b.position.set(0,1.35,-.5),e.add(b);for(let D of[-1,1]){let P=new ut(new pe(.16,.2,.9,10),s);P.rotation.x=Math.PI/2,P.position.set(D*.55,1.35,-1.9),e.add(P)}let g=new ut(new Le(.1,2,1),i);g.position.set(0,.95,-7.9),g.rotation.x=-.42,e.add(g);let p=new ut(new Le(.11,.5,.75),n);p.position.set(0,1.78,-8.28),p.rotation.x=-.42,e.add(p);let x=new ut(new Le(2.6,.07,.6),i);x.position.set(0,.1,-6.9),e.add(x);let v=new ut(new pe(.13,.2,.75,10),s);v.position.set(0,2.05,-.2),e.add(v);let w=new ut(new pe(.34,.34,.16,12),s);w.position.set(0,2.42,-.2),e.add(w);for(let D of[-1,1]){let P=new ut(new pe(.06,.06,4.6,8),s);P.rotation.x=Math.PI/2,P.position.set(D*1.35,-1.75,.3),e.add(P);let G=new ut(new pe(.06,.06,.6,8),s);G.rotation.x=Math.PI/2-.6,G.position.set(D*1.35,-1.6,2.8),e.add(G);for(let V of[-1,1]){let H=new ut(new pe(.05,.05,1.05,6),s);H.position.set(D*1.12,-1.28,.3+V*1.15),H.rotation.z=-D*.45,e.add(H)}}let R=new ut(new Le(.06,1.35,1.5),new He({color:new Dt(.06,.04,.018)}));R.position.set(1.325,.05,.1),e.add(R);let y=new ut(new Qi(.2,10,8),new He({color:329223}));y.position.set(1.36,.35,.45),y.scale.set(.5,1,1),e.add(y);let T=new ut(new Le(.1,.55,.42),new He({color:329223}));T.position.set(1.36,-.08,.45),e.add(T);let S=new ut(new pe(.06,.06,1.3,8),s);S.rotation.z=Math.PI/2-.25,S.position.set(1.75,1,.1),e.add(S);let _=new ut(new pe(.16,.16,.34,10),s);_.rotation.x=Math.PI/2,_.position.set(2.32,.86,.1),e.add(_);{let D=o([["RESCUE",.92]],1.45,.38,"#b8431a");D.position.set(-1.345,-.3,.52),D.rotation.y=-Math.PI/2,e.add(D);let P=o([["\uAD6C\uC870",.9]],.62,.36,"#b8431a");P.position.set(-1.33,-.75,.52),P.rotation.y=-Math.PI/2,e.add(P);for(let H of[-1,1]){let B=o([["119",.95]],.62,.36,"#f1f3f4");B.position.set(H*1.37,-.28,H>0?-1:-.75),B.rotation.y=H*Math.PI/2,e.add(B)}let G=o([["119",.95],["RESCUE",.62]],1.35,2.3,"#d4572a");G.position.set(0,-1.512,.25),G.rotation.x=Math.PI/2,e.add(G),G.material.emissiveMap=G.material.map,G.material.emissive.set(16777215),G.material.emissiveIntensity=.55;let V=o([["119",.9]],.5,.3,"#b8431a");V.position.set(.062,.85,-7.86),V.rotation.set(-.42,Math.PI/2,0,"YXZ"),e.add(V)}{let D=new ut(new pe(.26,.2,.34,14),s);D.rotation.x=-.5,D.position.set(0,-1.16,2.1),e.add(D);let P=new ut(new gn(.235,.035,8,18),s);P.rotation.x=Math.PI/2-.5,P.position.set(0,-1.29,2.2),e.add(P);let G=new ut(new Le(.62,.07,.07),s);G.position.set(0,-1.05,2.05),e.add(G);for(let K of[-1,1]){for(let Mt of[1.25,-.75]){let Q=new ut(new mn(.17,1.15,4,10),new we({color:2303787,roughness:.8}));Q.rotation.x=Math.PI/2,Q.position.set(K*1.35,-1.62,Mt),e.add(Q)}let J=new ut(new pe(.012,.012,.75,4),s);J.position.set(K*.3,1.55,2.25),J.rotation.x=.5,e.add(J);let ot=new ut(new pe(.014,.014,.5,5),s);ot.rotation.x=Math.PI/2,ot.position.set(K*.42,-.62,3.2),e.add(ot);let it=new ut(new Le(.05,.55,.5),i);it.position.set(K*1.3,.1,-6.9),e.add(it)}let V=new ut(new Le(.34,.05,1.3),s);V.position.set(1.5,-.95,.1),e.add(V);for(let K of[.3,.62]){let J=new ut(new mn(.075,.42,3,8),new we({color:11553308,roughness:.7}));J.position.set(1.47,-.72,K),J.rotation.z=.12,e.add(J);let ot=new ut(new Le(.12,.1,.24),s);ot.position.set(1.5,-1,K+.04),e.add(ot)}for(let[K,J,ot,it]of[[0,.52,-4.4,.7],[0,.46,-5.9,.5],[0,-1.62,-1.4,.4],[.5,1.88,.9,.45]]){let Mt=new ut(new pe(.012,.02,it,5),s);Mt.position.set(K,J+(J>0?it/2:-it/2),ot),Mt.rotation.x=J>0?-.35:.35,e.add(Mt)}let H=new ut(new pe(.03,.03,.9,6),s);H.position.set(0,-.42,-7.6),H.rotation.x=.9,e.add(H);let B=new ut(new Le(.16,.22,.2),n);B.position.set(2.32,.62,.1),e.add(B);let j=new ut(new pe(.035,.035,.9,6),s);j.rotation.z=Math.PI/2+.75,j.position.set(1.72,.62,.1),e.add(j),this.bladeRoots=new ae,this.bladeRoots.position.set(0,2.47,-.2);for(let K=0;K<4;K++){let J=new ut(new Le(2.3,.035,.26),s);J.position.set(Math.cos(K*Math.PI/2)*1.25,0,Math.sin(K*Math.PI/2)*1.25),J.rotation.y=-K*Math.PI/2,this.bladeRoots.add(J)}e.add(this.bladeRoots);let tt=new ut(new Qi(.2,10,6),s);tt.scale.y=.5,tt.position.set(0,2.55,-.2),e.add(tt)}let E=(D,P,G)=>{let V=document.createElement("canvas");V.width=V.height=256;let H=V.getContext("2d");H.translate(128,128);let B=H.createRadialGradient(0,0,8,0,0,126);B.addColorStop(0,`rgba(30,35,40,${P*.5})`),B.addColorStop(.8,`rgba(30,35,40,${P})`),B.addColorStop(.97,`rgba(52,58,66,${P*1.5})`),B.addColorStop(1,"rgba(30,35,40,0)"),H.fillStyle=B,H.beginPath(),H.arc(0,0,126,0,6.283),H.fill();for(let tt=0;tt<D;tt++){H.save(),H.rotate(tt*6.283/D);let K=H.createLinearGradient(0,-16,0,16);K.addColorStop(0,"rgba(20,24,28,0)"),K.addColorStop(.5,`rgba(20,24,28,${G})`),K.addColorStop(1,"rgba(20,24,28,0)"),H.fillStyle=K,H.beginPath(),H.moveTo(6,0),H.lineTo(124,-15),H.lineTo(124,15),H.closePath(),H.fill(),H.restore()}let j=new Bi(V);return j.colorSpace=je,j};this.rotor=new ut(new Qs(6.3,48),new He({map:E(4,.22,.5),transparent:!0,side:De,depthWrite:!1})),this.rotor.rotation.x=-Math.PI/2,this.rotor.position.set(0,2.5,-.2),e.add(this.rotor),this.tail=new ut(new Qs(1.05,24),new He({map:E(2,.2,.4),transparent:!0,side:De,depthWrite:!1})),this.tail.position.set(.22,1.25,-8.15),this.tail.rotation.y=Math.PI/2,e.add(this.tail);let I=(D,P,G,V,H,B,j=.13)=>{let tt=new ut(new Qi(j,8,6),new He({color:new Dt(D,P,G)}));return tt.position.set(V,H,B),e.add(tt),tt};I(2.6,.12,.1,1.35,.1,.6),I(.1,2.4,.4,-1.35,.1,.6),this.strobe=I(5,5,5.6,0,1.75,-7.6,.16),this.beacon=I(6,.25,.2,0,-.55,-3.4,.14),this.lampHead=I(5,5.8,7,0,-1.25,2.2,.22),this.group.add(e),this.spotLight=new Dn(13952255,0,0,.16,.7,0),this.spotLight.layers.enableAll(),this.lights=[this.spotLight,this.spotLight.target],this.beamMat=new ne({uniforms:{uNoise:st.uNoise,uTime:st.uTime,uI:{value:0},uApex:{value:new M},uAxis:{value:new M(0,-1,0)},uLen:{value:1},uTan:{value:this.tan},uWaterY:{value:0}},vertexShader:fl,fragmentShader:pl,transparent:!0,blending:Ki,depthWrite:!1,side:Ye});let W=new pe(.02,1,1,32,1,!1);W.translate(0,-.5,0),this.beam=new ut(W,this.beamMat),this.beam.frustumCulled=!1,this.beam.renderOrder=18,this.group.add(this.beam);let Y=new we({color:9279131,roughness:.55,metalness:.4,emissive:1843236});this.ringMesh=new ae;let k=.335,z=.092;this.ringR=k,this.ringT=z,this.bridleTop=.44;let O=new we({color:7614479,roughness:.7,metalness:.03}),U=new we({color:7106675,roughness:.7,metalness:.03}),N=new ut(new gn(k,z,14,36),O);this.ringMesh.add(N);for(let D=0;D<4;D++){let P=new ut(new gn(k,z+.004,12,5,.4),U);P.rotation.z=D*Math.PI/2+.6,this.ringMesh.add(P)}for(let D=0;D<3;D++){let P=D*2.094+.52,G=new ut(new pe(.007,.007,1,4),Y),V=new M(Math.cos(P)*k,Math.sin(P)*k,-z*.8),H=new M(0,0,-this.bridleTop);G.position.copy(V).add(H).multiplyScalar(.5),G.scale.y=V.distanceTo(H),G.quaternion.setFromUnitVectors(new M(0,1,0),H.clone().sub(V).normalize()),this.ringMesh.add(G)}{let D=new ut(new mn(.03,.08,3,8),new we({color:10258998,roughness:.5,metalness:.5}));D.rotation.x=Math.PI/2,D.position.set(0,0,-this.bridleTop-.05),this.ringMesh.add(D);let P=new ut(new gn(.03,.008,6,12),Y);P.position.set(0,0,-this.bridleTop+.01),P.rotation.y=Math.PI/2,this.ringMesh.add(P);let G=new ut(new gn(k,z+.012,6,40),new we({color:1777185,roughness:.9}));G.scale.set(1,1,.16),G.position.z=-z*.8,this.ringMesh.add(G)}this.strobeR=new ut(new Qi(.035,8,6),new He({color:new Dt(6,6,6.5)})),this.strobeR.position.set(k,0,-z-.025),this.ringMesh.add(this.strobeR),this.ringMesh.traverse(D=>{D.isMesh&&D.layers.enable(1)}),this.group.add(this.ringMesh),this.rope=[],this.ropeGroup=new ae,this.group.add(this.ropeGroup);for(let D=0;D<ls;D++)this.rope.push({p:new M,q:new M});{let D=(ls-1)*4+1,P=7,G=P+1;this.ropeRings=D,this.ropeRad=P;let V=new Float32Array(D*G*3),H=new Float32Array(D*G*3),B=new Float32Array(D*G*2),j=[];for(let it=0;it<D;it++)for(let Mt=0;Mt<G;Mt++)B[(it*G+Mt)*2]=Mt/P,B[(it*G+Mt)*2+1]=it*.55;for(let it=0;it<D-1;it++)for(let Mt=0;Mt<P;Mt++){let Q=it*G+Mt,Nt=Q+1,xt=Q+G,At=xt+1;j.push(Q,xt,Nt,Nt,xt,At)}let tt=new he;tt.setAttribute("position",new Bt(V,3).setUsage(Hi)),tt.setAttribute("normal",new Bt(H,3).setUsage(Hi)),tt.setAttribute("uv",new Bt(B,2).setUsage(Hi)),tt.setIndex(j);let K=document.createElement("canvas");K.width=32,K.height=32;let J=K.getContext("2d");J.fillStyle="#b9b29a",J.fillRect(0,0,32,32),J.strokeStyle="#5f5a4c",J.lineWidth=3;for(let it=-32;it<64;it+=8)J.beginPath(),J.moveTo(it,0),J.lineTo(it+32,32),J.stroke();let ot=new Bi(K);ot.wrapS=ot.wrapT=ii,ot.colorSpace=fe,this.ropeMesh=new ut(tt,new we({map:ot,roughness:.85,metalness:0,emissive:1381391})),this.ropeMesh.frustumCulled=!1,this.ropeGroup.add(this.ropeMesh),this.ropePts=this.rope.map(()=>new M),this._rp=new M,this._rt=new M,this._rn=new M(1,0,0),this._rb=new M,this._rq=new M}this.ropeLen=20,this._top=new M,this.station=new M,this.holdNeed=2.1,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.liftBase=0,this.ringSpin=0,this._qr=new yt,this._er=new pi,this.lineDir=new M(0,1,0),this.hangDir=new M(0,1,0),this.hoistAt=new M(0,-1.2,0),this.lampAt=new M(0,-1.3,0)}_local(t,e){let i=this.heli.rotation.y,n=Math.cos(i),s=Math.sin(i);return e.set(this.pos.x+t.x*n+t.z*s,this.pos.y+t.y,this.pos.z-t.x*s+t.z*n)}setModel(t){let e=this.heli;for(let d of e.children)d.visible=!1;let i=t.scene;i.name="md902";let n=d=>i.getObjectByName(d),s=n("body"),r=n("glass"),o=n("hub"),h=n("blades");if(!s||!o||!h)throw new Error("helicopter model: parts missing");s.material.envMapIntensity=.6,s.material.color.setScalar(1.25),r&&(r.material.envMapIntensity=1,r.material.vertexColors=!1,r.material.color.setRGB(.012,.016,.02)),this.spinHub=new ae,this.spinBlades=new ae,this.spinHub.add(o),this.spinBlades.add(h),this.spinBlades.visible=!1,e.add(i,this.spinHub,this.spinBlades);let c=new we({color:1316892,roughness:.5,metalness:.4}),l=d=>(e.add(d),d);this.rotorMat=new ne({uniforms:{uAngle:{value:0},uSmear:{value:.6},uLit:{value:new M(.1,.1,.1)}},vertexShader:p1,fragmentShader:m1,transparent:!0,side:De,depthWrite:!1}),this.rotor=l(new ut(new Qs(5.2,72),this.rotorMat)),this.rotor.rotation.x=-Math.PI/2,this.rotor.position.set(0,1.72,0),this.rotor.renderOrder=3;let u=(d,f,m,b,g,p,x=.13)=>{let v=new ut(new Qi(x,8,6),new He({color:new Dt(d,f,m)}));return v.position.set(b,g,p),l(v)};u(1.9,.09,.07,1.45,.42,-4.75,.08),u(.08,1.8,.3,-1.44,.42,-4.82,.08),this.strobe=u(5,5,5.6,.03,.5,-6.2,.12),this.beacon=u(6,.25,.2,0,-1.09,-.55,.1),this.lampAt.set(0,-1.16,1.28),this.lampHead=u(5,5.8,7,0,-1.16,1.28,.15);{l(new ut(new pe(.19,.15,.2,14),c)).position.set(0,-1.07,1.28);let f=l(new ut(new gn(.165,.028,8,18),c));f.rotation.x=Math.PI/2,f.position.set(0,-1.17,1.28)}{let d=new M(.74,.86,.22),f=new M(1.47,.97,.22),m=l(new ut(new pe(.045,.055,d.distanceTo(f),8),c));m.position.copy(d).add(f).multiplyScalar(.5),m.quaternion.setFromUnitVectors(new M(0,1,0),f.clone().sub(d).normalize());let b=l(new ut(new pe(.028,.028,.62,6),c)),g=new M(.8,.52,.22),p=new M(1.22,.92,.22);b.scale.y=g.distanceTo(p)/.62,b.position.copy(g).add(p).multiplyScalar(.5),b.quaternion.setFromUnitVectors(new M(0,1,0),p.clone().sub(g).normalize());let x=l(new ut(new pe(.12,.12,.26,10),c));x.rotation.x=Math.PI/2,x.position.set(1.47,.93,.22),l(new ut(new Le(.12,.16,.14),new we({color:13127708,roughness:.5,metalness:.1}))).position.set(1.47,.74,.22),this.hoistAt.set(1.47,.66,.22);let w=new we({color:8008723,roughness:.8}),R=new we({color:13225166,roughness:.4}),y=l(new ut(new mn(.15,.34,3,8),w));y.position.set(.7,-.22,.42),y.rotation.z=-.22,l(new ut(new Qi(.125,10,8),R)).position.set(.78,.13,.42);for(let _ of[.33,.51]){let E=l(new ut(new mn(.065,.36,3,8),w));E.position.set(.88,-.8,_),E.rotation.z=.1,l(new ut(new Le(.11,.09,.22),c)).position.set(.9,-1.03,_+.04)}let S=l(new ut(new mn(.05,.42,3,6),w));S.position.set(.95,.1,.34),S.rotation.z=-1.05}this.model=i}reset(t=240){this.state="none",this.group.visible=!1,this.rescued=!1,this.hold=0,this.arriveAt=t,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.liftTaut=!1,this.haulT=0,this.lineDir.set(0,1,0),this.hangDir.set(0,1,0),st.uSpotP.value.y=0,st.uWash.value.w=0,this.spotLight.intensity=0}_dropRope(){let t=this._local(this.hoistAt,this._top);this.ropeLen=Math.max(8,t.y-this.waves.heightFast(t.x,t.z))+2.5;for(let e=0;e<ls;e++){let i=this.rope[e];i.p.set(t.x,t.y-this.ropeLen*.92*e/(ls-1),t.z),i.q.copy(i.p)}this.ring.copy(this.rope[ls-1].p)}_rope(t,e,i,n){let s=this.waves,r=this._s,o=this.rope,h=ls,c=this._local(this.hoistAt,this._top);if(n){let d=c.distanceTo(o[h-1].p);this.liftTaut?(this.haulT+=t,this.ropeLen=Math.max(2.6,this.ropeLen-1.7*Math.min(1,this.haulT/1.5)*t)):(this.ropeLen=Math.max(d+.05,this.ropeLen-5*t),this.liftT>.8&&this.ropeLen<=d+.12&&(this.liftTaut=!0,this.haulT=0))}else{let d=Math.max(6,c.y-s.heightFast(o[h-1].p.x,o[h-1].p.z))+2.8;this.ropeLen+=(d-this.ropeLen)*Math.min(1,t*3.5)}let l=this.ropeLen/(h-1),u=Math.min(t,1/30)*.5;for(let d=0;d<2;d++){o[0].p.copy(c),o[0].q.copy(c);for(let f=1;f<h;f++){let m=o[f],b=f===h-1,g=m.p.x-m.q.x,p=m.p.y-m.q.y,x=m.p.z-m.q.z;m.q.copy(m.p);let v=Math.sin(Math.PI*f/(h-1)),w=.1+.16*v*(.6+.4*Math.sin(this.time*.9+f*.35)),R=e.x*w,y=-9.81,T=e.z*w,S=.994,_=m.p.x-this.pos.x,E=m.p.z-this.pos.z,I=Math.hypot(_,E)+.001,W=Math.max(0,1-I/16)*(b?2.2:2);if(b&&s.sample(m.p.x,m.p.z,r),n&&(W*=b?Math.max(0,1-(m.p.y-r.h)/2.5):.2),R+=_/I*W,T+=E/I*W,b){let Y=r.h+.06-m.p.y;if(Y>0){y+=Math.min(n?160:70,Y*(n?260:95));let k=Math.min(1,u*(n?16:6));g+=(r.vx*u-g)*k,p+=(r.vy*u-p)*k,x+=(r.vz*u-x)*k,S=.975}this.gripping&&!n&&(R+=(i.x-m.p.x)*7,T+=(i.z-m.p.z)*7)}m.p.x+=g*S+R*u*u,m.p.y+=p*S+y*u*u,m.p.z+=x*S+T*u*u}for(let f=0;f<14;f++)for(let m=0;m<h-1;m++){let b=o[m].p,g=o[m+1].p,p=g.x-b.x,x=g.y-b.y,v=g.z-b.z,w=Math.hypot(p,x,v);if(w<=l)continue;let R=(w-l)/w,y=m===0?0:m+1===h-1?n?.88:.62:.5,T=1-y;b.x+=p*R*y,b.y+=x*R*y,b.z+=v*R*y,g.x-=p*R*T,g.y-=x*R*T,g.z-=v*R*T}{let f=(n?this.vel.length()+4.5:9)*u,m=28*u;for(let b=1;b<h;b++){let g=o[b],p=g.p.x-g.q.x,x=g.p.y-g.q.y,v=g.p.z-g.q.z,w=Math.hypot(p,x,v),R=b===h-1?f:m;if(w>R){let y=R/w;g.p.set(g.q.x+p*y,g.q.y+x*y,g.q.z+v*y)}}}}n?this.ring.lerp(o[h-1].p,1-Math.exp(-t/.035)):this.ring.copy(o[h-1].p),this._d.copy(o[h-7].p).sub(o[h-1].p),this._d.lengthSq()>1e-4&&this._d.y>0&&(this._d.normalize(),this.lineDir.lerp(this._d,Math.min(1,t*3)).normalize());{let d=this.hangDir.copy(this.lineDir).multiplyScalar(.75);d.y+=.25;let f=Math.hypot(d.x,d.z),m=d.y*.49;f>m&&(d.x*=m/f,d.z*=m/f),d.normalize()}}dispatch(t,e=Math.random()*6.283,i=60){this.state="inbound",this.rescued=!1,this.hold=0,this.hoverTime=0,this.group.visible=!0,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.liftTaut=!1,this.haulT=0,this.lineDir.set(0,1,0),this.hangDir.set(0,1,0),this.ring.set(t.x+Math.cos(e)*i,0,t.z+Math.sin(e)*i),this.pos.set(this.ring.x+Math.cos(e)*520,70,this.ring.z+Math.sin(e)*520),this.vel.set(0,0,0)}update(t,e,i,n,s,r,o,h,c){if(this.time+=t,this.state==="none")if(o&&s&&n>=this.arriveAt)this.dispatch(e,Math.atan2(i.z,i.x)+(Math.random()-.5)*2.4,9+Math.random()*6);else{st.uSpotP.value.y=0,st.uWash.value.w=0,this.spotLight.intensity=0;return}let l=this.waves,u=this._s,d=this.state==="lift";if(this.state==="inbound")this.station.set(this.ring.x,0,this.ring.z);else if(this.state==="hover"){let N=e.x-this.station.x,D=e.z-this.station.z,P=Math.hypot(N,D);if(P>1.5){let G=Math.min(3,P*.6)*t/P;this.station.x+=N*G,this.station.z+=D*G}}let f=l.heightFast(this.station.x,this.station.z)+20+Math.sin(this.time*.7)*.8,m=this._v.set(this.station.x+Math.sin(this.time*.43)*1.7+Math.sin(this.time*1.1)*.6,f,this.station.z+Math.cos(this.time*.37)*1.7);if(this.state==="leaving"&&m.set(this.pos.x+i.x*40,this.pos.y+30,this.pos.z+i.z*40),d){this.liftT+=t;let N=Math.max(this.liftBase,l.heightFast(this.pos.x,this.pos.z),l.heightFast(this.ring.x,this.ring.z));this.liftT>6.5?m.set(this.pos.x-i.x*3,N+26+(this.liftT-6.5)*5,this.pos.z-i.z*3):m.set(this.pos.x,N+20+Math.max(0,this.liftT-3)*1.5,this.pos.z)}let b=m.sub(this.pos),g=b.length(),p=this.state==="inbound"?46:this.state==="leaving"?40:d?this.liftT>6.5?7.5:3:6,x=b.multiplyScalar(Math.min(p,g*.9)/Math.max(g,.001));if(this.vel.lerp(x,1-Math.exp(-t*(d?.35:1.4))),this.pos.addScaledVector(this.vel,t),this.state==="inbound"&&g<6&&(this.state="hover",this.hoverTime=0,this._dropRope()),this.state==="hover"||d?this._rope(t,i,e,d):(l.sample(this.ring.x,this.ring.z,u),this.ring.y=u.h),this.reach=!1,this.state==="hover"){this.hoverTime+=t;let N=Math.hypot(e.x-this.ring.x,e.y+.35-this.ring.y,e.z-this.ring.z);this.reach=N<1.9&&s,this.gripping&&(N>2.7||!c||!s)&&(this.gripping=!1,this.hold>.5&&(this.slipped=!0)),this.reach&&c&&(this.gripping=!0),this.hold=this.gripping?this.hold+t:Math.max(0,this.hold-t*2.5),this.hold>=this.holdNeed&&(this.rescued=!0,this.state="lift",this.liftT=0,this.liftTaut=!1,this.haulT=0,this.liftBase=this.ring.y);let D=this.reach||this.gripping;if(this.hoverTime>150&&!D&&!this.rescued&&(this.state="leaving",this.leaveT=0),r)for(this.washAcc=(this.washAcc||0)+t*150;this.washAcc>=1;){this.washAcc-=1;let P=Math.random()*6.283,G=4+Math.random()*13,V=7+Math.random()*6,H=this.pos.x+Math.cos(P)*G,B=this.pos.z+Math.sin(P)*G,j=l.heightFast(H,B),tt=Math.random()<.28;r.emit(H,j+.08+Math.random()*.2,B,Math.cos(P)*V,.5+Math.random()*1.4,Math.sin(P)*V,tt?.7+Math.random()*.7:.5+Math.random()*.5,tt?.16+Math.random()*.22:.012+Math.random()*.03,tt?2:0,tt?.7:0,tt?.16:.9,tt?1.4:1)}}if(this.state==="leaving"&&(this.leaveT+=t,this.leaveT>14)){this.state="none",this.group.visible=!1,this.arriveAt=n+180,st.uSpotP.value.y=0,st.uWash.value.w=0,this.spotLight.intensity=0;return}let v=this.heli;v.position.copy(this.pos);let w=Math.atan2(this.ring.x-this.pos.x+this.vel.x*3,this.ring.z-this.pos.z+this.vel.z*3),R=Math.hypot(this.vel.x,this.vel.z);if(v.rotation.set(Math.min(.3,R*.008),this.state==="hover"?v.rotation.y+Math.sin(this.time*.25)*.004:w,Math.sin(this.time*1.3)*.03,"YXZ"),this.rotorMat){let N=this.rotorMat.uniforms,D=41;N.uAngle.value=(N.uAngle.value-D*t)%6.2831853,N.uSmear.value=D/105;let P=st.uAmbient.value,G=st.uFlash.value,V=st.uFlashColor.value;N.uLit.value.set(P.x*2.4+G*V.x*.5,P.y*2.4+G*V.y*.5,P.z*2.4+G*V.z*.5)}else this.rotor.rotation.z+=t*(2.6+1.4*Math.sin(this.time*2.3));this.tail.rotation.z+=t*5.2,this.bladeRoots&&(this.bladeRoots.rotation.y-=t*39),this.spinHub&&(this.spinHub.rotation.y-=t*41),this.rotorMat||(this.rotor.material.opacity=.85+.15*Math.sin(this.time*31)),this.strobe.visible=this.time%1.1<.07,this.beacon.visible=(this.time+.5)%1.3<.16;let y=this.state==="hover"?Math.min(1,this.hoverTime/3):this.state==="lift"?1:0;this.aim.set(this.ring.x+(1-y)*Math.sin(this.time*.8)*26,this.ring.y,this.ring.z+(1-y)*Math.cos(this.time*.6)*26),this.state==="lift"&&(this.aim.y=Math.min(this.aim.y,l.heightFast(this.aim.x,this.aim.z)));let T=this.state==="leaving"?Math.max(0,1-this.leaveT/3):1,S=this._local(this.lampAt,this._from);{let N=Math.hypot(this.aim.x-S.x,this.aim.z-S.z);S.y-this.aim.y<N*.5&&(this.aim.y=S.y-N*.5)}let _=S.distanceTo(this.aim),E=this._d.copy(this.aim).sub(S).normalize(),I=_,W=this.aim.y;if(E.y<-.04)for(let N=0;N<4;N++)W=this.waves.heightFast(S.x+E.x*I,S.z+E.z*I),I=Math.max(2,(W-S.y)/E.y);else I=320;let Y=Math.min(I*1.15+4,340),k=this.tan*1.3*Y;this.beamMat.uniforms.uWaterY.value=W-.6,this.beam.position.copy(S),this.beam.quaternion.setFromUnitVectors(this._down,E),this.beam.scale.set(k,Y,k);let z=this.beamMat.uniforms;if(z.uApex.value.copy(S),z.uAxis.value.copy(E),z.uLen.value=Y,z.uI.value=.17*T,h){let N=this._v.copy(h).sub(S),D=N.dot(E),P=Math.sqrt(Math.max(0,N.lengthSq()-D*D)),V=D>-.5&&D<Y+.5&&P<D*this.tan*1.3+.6?Se:Ye;this.beamMat.side!==V&&(this.beamMat.side=V,this.beamMat.needsUpdate=!0)}this.spotLight.position.copy(S),this.spotLight.target.position.copy(this.aim),this.spotLight.angle=Math.atan(this.tan)*1.35,this.spotLight.penumbra=.85,this.spotLight.intensity=5*T,st.uSpotPos.value.copy(S),st.uSpotDir.value.copy(E),st.uSpotP.value.set(Math.cos(Math.atan(this.tan)),1.7*T,55,0);let O=this.pos.y-l.heightFast(this.pos.x,this.pos.z);st.uWash.value.set(this.pos.x,this.pos.z,24,T*Math.max(0,Math.min(1,(60-O)/30)));let U=this.state==="hover"||this.state==="lift";if(this.ringMesh.visible=U,this.ropeGroup.visible=U,U){this.ringMesh.position.copy(this.ring),this.state==="lift"?(this.ringSpin+=t*.35,this.ringMesh.quaternion.setFromUnitVectors(this._down.clone().negate(),this.hangDir).multiply(this._qr.setFromEuler(this._er.set(Math.PI/2,0,this.ringSpin,"YXZ")))):(l.sample(this.ring.x,this.ring.z,u),this.ringMesh.rotation.set(Math.PI/2+u.nz*.6,0,-u.nx*.6)),this.strobeR.visible=this.time%.9<.08;let N=this.rope,D=this.ropePts,P=ls;for(let bt=0;bt<P;bt++)D[bt].copy(N[bt].p);this.ringMesh.updateMatrixWorld(!0),D[P-1].set(0,0,-this.bridleTop-.06).applyMatrix4(this.ringMesh.matrixWorld),D[P-2].lerp(D[P-1],.35);let G=this.ropeRings,V=this.ropeRad,H=V+1,B=.017,j=this.ropeMesh.geometry.attributes.position,tt=this.ropeMesh.geometry.attributes.normal,K=this.ropeMesh.geometry.attributes.uv,J=this._rp,ot=this._rt,it=this._rn,Mt=this._rb,Q=this._rq,Nt=(bt,Vt)=>bt<0?Vt.copy(D[0]).multiplyScalar(2).sub(D[1]):bt>P-1?Vt.copy(D[P-1]).multiplyScalar(2).sub(D[P-2]):Vt.copy(D[bt]),xt=this._ra||(this._ra=[new M,new M,new M,new M]),At=0;for(let bt=0;bt<G;bt++){let Vt=bt/(G-1)*(P-1),Ct=Math.min(P-2,Math.floor(Vt)),L=Vt-Ct,C=L*L,et=C*L;Nt(Ct-1,xt[0]),Nt(Ct,xt[1]),Nt(Ct+1,xt[2]),Nt(Ct+2,xt[3]);let ht=(1-3*L+3*C-et)/6,pt=(4-6*C+3*et)/6,gt=(1+3*L+3*C-3*et)/6,Lt=et/6;Q.copy(J),J.set(0,0,0).addScaledVector(xt[0],ht).addScaledVector(xt[1],pt).addScaledVector(xt[2],gt).addScaledVector(xt[3],Lt);let q=-(1-L)*(1-L)/2,ct=(3*C-4*L)/2,vt=(1+2*L-3*C)/2,kt=C/2;ot.set(0,0,0).addScaledVector(xt[0],q).addScaledVector(xt[1],ct).addScaledVector(xt[2],vt).addScaledVector(xt[3],kt),ot.lengthSq()<1e-10?ot.set(0,-1,0):ot.normalize(),bt>0&&(At+=J.distanceTo(Q)),it.addScaledVector(ot,-it.dot(ot)),it.lengthSq()<1e-6&&it.set(1,0,0).addScaledVector(ot,-ot.x),it.normalize(),Mt.crossVectors(ot,it);for(let dt=0;dt<H;dt++){let ce=dt/V*6.2832,Yt=Math.cos(ce),Ht=Math.sin(ce),Ft=(bt*H+dt)*3,Pt=it.x*Yt+Mt.x*Ht,qt=it.y*Yt+Mt.y*Ht,oe=it.z*Yt+Mt.z*Ht;j.array[Ft]=J.x+Pt*B,j.array[Ft+1]=J.y+qt*B,j.array[Ft+2]=J.z+oe*B,tt.array[Ft]=Pt,tt.array[Ft+1]=qt,tt.array[Ft+2]=oe,K.array[(bt*H+dt)*2+1]=At/.11}}K.needsUpdate=!0,j.needsUpdate=!0,tt.needsUpdate=!0}}};var g1=`
attribute vec3 color; attribute float size;
uniform float uPx; uniform float uFogDensity; uniform float uOn;
varying vec3 vC; varying float vA;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float d = max(-mv.z, 1.0);
  gl_Position = projectionMatrix * mv;
  float px = size * uPx / d;
  gl_PointSize = max(px, 3.0);
  vC = color;
  vA = uOn * exp(-d * uFogDensity * 0.45) * min(1.0, 0.45 + px / 4.0);
}`,b1=`
precision highp float;
varying vec3 vC; varying float vA;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0; float r = dot(q, q);
  if (r > 1.0) discard;
  float k = exp(-r * 4.5) + 0.35 * exp(-r * 30.0);
  gl_FragColor = vec4(vC * k * vA, 1.0);
}`,lf=[[-.2,29.6,84.1,9,9,8.5,1.2],[.4,38.4,-57.3,9,9,8.5,1.2],[14,17,-32.4,9,.6,.4,1.1],[-14,17,-32.4,.4,7,1.6,1.1],[0,10.2,-89.6,8,8,7.5,1],[0,21.5,-21,7,4.2,1.6,1.6],[0,21.5,33,7,4.2,1.6,1.6],[0,21.5,52,7,4.2,1.6,1.6],[8.5,24.8,-50.2,6,3.6,1.4,1.4],[-8.5,24.8,-50.2,6,3.6,1.4,1.4],...[-5,-2.5,0,2.5,5].map(a=>[a,27,-50.6,2.4,1.9,1.2,.9])],di=class a{constructor(t){this.waves=t,this.group=new ae,this.group.visible=!1,this.holder=new ae,this.group.add(this.holder),this.loaded=!1,this.active=!1,this.pos=new M,this.yaw=0,this.speed=0,this.heave=0,this.heaveV=0,this.pitch=0,this.pitchV=0,this.roll=0,this.rollV=0,this._s=si(),this.length=180,this.breadth=28.7,this.time=0,this.phase="none",this.t=0,this.track={ox:0,oz:0,dx:0,dz:1,off:0},this.headOn=!1,this.spotted=!1,this.spotT=0,this.spottedAt=-1,this.closest=1e9,this.sweep=0,this.local=new M,this._inv=new Rt,this._v=new M,this._w=new M,this.events=[],this.hornAt=[],this.prolongedAt=0}static halfBeam(t,e=0){return ro(t,e)}static deckY(t){return t>55?9+5.5*Math.min(1,(t-55)/25):9}static keelY(t){return t<-78?-9+8.5*Math.min(1,(-78-t)/9):t>75?-8.4:-9.05}toLocal(t,e){return e.copy(t).applyMatrix4(this._inv)}toWorld(t,e){return e.copy(t).applyMatrix4(this.group.matrixWorld)}insideLocal(t,e=0){if(t.y<a.keelY(t.z)-e||t.y>a.deckY(t.z)+e+1.5)return!1;let i=ro(t.z,t.y);return i>.05&&Math.abs(t.x)<i+e}keepOutside(t,e){if(!this.active||!this.loaded||(this.toLocal(t,this._v),!this.insideLocal(this._v,.6)))return!1;if(this.toLocal(e,this._w),this.insideLocal(this._w,.6)){this.toLocal(t,this._v);let s=this._w.x>=0?1:-1;return this._v.x=s*(ro(this._v.z,this._v.y)+.9),this.toWorld(this._v,t),!0}let i=0,n=1;for(let s=0;s<18;s++){let r=(i+n)/2;this._w.copy(e).lerp(t,r),this.toLocal(this._w,this._v),this.insideLocal(this._v,.6)?n=r:i=r}return t.copy(e).lerp(t,i),!0}start(t,e={}){let i=e.bearing!==void 0?e.bearing:Math.random()*6.283,n=-Math.sin(i),s=-Math.cos(i);this.headOn=e.offset!==void 0?Math.abs(e.offset)<16:!0;let r=e.offset!==void 0?e.offset:(Math.random()-.5)*16,o=e.dist||440,h=t.x+s*r,c=t.z-n*r;this.track={ox:h,oz:c,dx:n,dz:s,off:r},this.aim={x:t.x,z:t.z,lx:t.x,lz:t.z},this.avoidOff=0,this.speed=e.speed||5.5,this.place(h-n*o,c-s*o,Math.atan2(n,s),this.speed),this.phase="coming",this.t=0,this.spotted=!1,this.spotT=0,this.spottedAt=-1,this.closest=1e9,this.sweep=0,this.sweepT=0,this.glimpse=0,this._beamS=!1,this.hornAt=[],this.prolongedAt=this.time+4+Math.random()*6,this.events.push({type:"appear"})}soundPoints(t){return t.engine=this.toWorld(this._w.set(0,6,-70),t.engine||new M),t.bow=this.toWorld(this._w.set(0,.5,88),t.bow||new M),t.prop=this.toWorld(this._w.set(0,-5.5,-87.5),t.prop||new M),t.horn=this.toWorld(this._w.set(0,33,-62),t.horn||new M),t}horn(t,e=1.4){for(let i=0;i<t;i++)this.hornAt.push(this.time+i*e)}_searchlight(t,e,i){let n=this._beamT||(this._beamT=new M);if(this.glimpse=Math.max(0,(this.glimpse||0)-t),this.spotted||this.glimpse>0)n.set(e.x,e.y,e.z);else{this.sweepT=(this.sweepT||0)+t,this.sweep=Math.sin(this.sweepT*.52)*.36+Math.sin(this.sweepT*.13+1)*.06;let s=this.yaw+this.sweep,r=185+75*Math.sin(this.sweepT*.23+.6);n.set(this.pos.x+Math.sin(s)*r,0,this.pos.z+Math.cos(s)*r),n.y=this.waves.heightFast(n.x,n.z)}return this._beamS?i.lerp(n,1-Math.exp(-t*(this.spotted||this.glimpse>0?3.5:6))):i.copy(n),this._beamS=!0,i}setModel(t){let e=t.scene;e.name="cargoShip";let i={uFogDensity:st.uFogDensity,uSkyEnv:st.uSkyEnv};e.traverse(l=>{if(!l.isMesh)return;l.layers.enable(1);let u=l.material;u.envMapIntensity=.45,u.vertexColors&&u.color.multiplyScalar(1.35),u.onBeforeCompile=d=>{Object.assign(d.uniforms,i),d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vShipW;`).replace("#include <project_vertex>",`#include <project_vertex>
vShipW = (modelMatrix * vec4(transformed, 1.0)).xyz - cameraPosition;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vShipW;
uniform float uFogDensity;
uniform sampler2D uSkyEnv;
`+so).replace("#include <dithering_fragment>",`
  {
    float fogD = length(vShipW);
    float fogK = 1.0 - exp(-fogD * uFogDensity);
    vec3 fd = normalize(vec3(vShipW.x, 0.05 * length(vShipW.xz), vShipW.z));
    gl_FragColor.rgb = mix(gl_FragColor.rgb, textureLod(uSkyEnv, dirToEquirect(fd), 4.5).rgb, fogK);
  }
  #include <dithering_fragment>`)},u.needsUpdate=!0}),this.holder.add(e);let n=lf.length,s=new Float32Array(n*3),r=new Float32Array(n*3),o=new Float32Array(n);lf.forEach((l,u)=>{s.set(l.slice(0,3),u*3),r.set(l.slice(3,6),u*3),o[u]=l[6]});let h=new he;h.setAttribute("position",new Bt(s,3)),h.setAttribute("color",new Bt(r,3)),h.setAttribute("size",new Bt(o,1)),this.lightMat=new ne({uniforms:{uPx:{value:500},uFogDensity:st.uFogDensity,uOn:{value:1}},vertexShader:g1,fragmentShader:b1,transparent:!0,depthWrite:!1,blending:Ki}),this.lights=new Ys(h,this.lightMat),this.lights.frustumCulled=!1,this.lights.renderOrder=4,this.holder.add(this.lights),this.beamMat=new ne({uniforms:{uNoise:st.uNoise,uTime:st.uTime,uI:{value:0},uApex:{value:new M},uAxis:{value:new M(0,-1,0)},uLen:{value:1},uTan:{value:.07},uWaterY:{value:0}},vertexShader:fl,fragmentShader:pl,transparent:!0,blending:Ki,depthWrite:!1,side:Ye});let c=new pe(.02,1,1,24,1,!1);c.translate(0,-.5,0),this.beam=new ut(c,this.beamMat),this.beam.frustumCulled=!1,this.beam.renderOrder=18,this.spotLight=new Dn(13952255,0,0,.1,.75,0),this.spotLight.layers.enableAll(),this.beam.visible=!1,this.group.parent&&this.group.parent.add(this.beam,this.spotLight,this.spotLight.target),this.loaded=!0}warm(t,e,i){if(!this.loaded)return;let n=this.group.visible;this.group.visible=!0;let s=t.clippingPlanes;t.compile(this.group,e,i),t.clippingPlanes=[new wi(new M(0,-1,0),0)],t.compile(this.group,e,i),t.clippingPlanes=s,this.group.traverse(r=>{if(r.isMesh)for(let o of["map","normalMap","emissiveMap"])r.material[o]&&t.initTexture(r.material[o])}),this.group.visible=n}place(t,e,i,n=0){this.pos.set(t,0,e),this.yaw=i,this.speed=n,this.heave=this._seaUnder().h,this.heaveV=0,this.pitch=this._seaUnder().p,this.pitchV=0,this.roll=0,this.rollV=0,this.active=!0,this.group.visible=this.loaded}hide(){this.active=!1,this.group.visible=!1,this.phase="none",this.hornAt=[],this.prolongedAt=0,this.beam&&(this.beam.visible=!1,this.spotLight.intensity=0),this.beamFrom=null}_seaUnder(){let t=this.waves,e=this._s,i=Math.cos(this.yaw),n=Math.sin(this.yaw),s=(f,m)=>(t.sample(this.pos.x+n*f+i*m,this.pos.z+i*f-n*m,e),e.h),r=this._fitH||(this._fitH=new Float32Array(9)),o=0,h=0,c=0,l=0;for(let f=0;f<9;f++){let m=-80+f*20,b=f%2?0:1,g=s(m,0),p=b?s(m,11):g,x=b?s(m,-11):g,v=(2*g+p+x)/4;r[f]=v,o+=v,h+=m*v,c+=m*m,l+=p-x}let u=o/9,d=h/c;for(let f=0;f<3;f++){let m=0,b=0,g=0,p=0,x=0;for(let w=0;w<9;w++){let R=-80+w*20,y=r[w]<u+d*R?9:1;m+=y,b+=y*R,g+=y*R*R,p+=y*r[w],x+=y*R*r[w]}let v=m*g-b*b;d=(m*x-b*p)/v,u=(p-d*b)/m}return{h:u,p:-Math.atan(d),r:Math.atan2(l/5,22)}}update(t,e,i,n,s=0){if(!this.active||!this.loaded||t<=0)return;if(this.time+=t,this.t+=t,n&&this.aim&&(this.phase==="coming"||this.phase==="passing"&&this.spotted)){let l=this.aim,u=Math.sin(this.yaw),d=Math.cos(this.yaw);((n.x-this.pos.x)*u+(n.z-this.pos.z)*d>238&&!this.spotted||!(s>.15))&&(l.x+=n.x-l.lx,l.z+=n.z-l.lz),l.lx=n.x,l.lz=n.z,this.spotted&&!this.avoidOff&&(this.avoidOff=((l.x-this.pos.x)*d-(l.z-this.pos.z)*u<=0?1:-1)*45);let m=(l.x-this.pos.x)*u+(l.z-this.pos.z)*d,b=this.spotted?this.avoidOff:this.track.off;if(m>(this.spotted?70:this.headOn?113:150)){let g=l.x+d*b,p=l.z-u*b,v=Math.atan2(g-this.pos.x,p-this.pos.z)-this.yaw;v=Math.atan2(Math.sin(v),Math.cos(v));let w=this.spotted?.02:this.headOn?.012:.008;this.yaw+=Math.max(-w,Math.min(w,v*.5))*t}}let r=Math.cos(this.yaw),o=Math.sin(this.yaw);this.pos.x+=o*this.speed*t,this.pos.z+=r*this.speed*t;let h=this._seaUnder(),c=(l,u,d,f,m)=>{let b=f*f*(d-l)-2*m*f*u;return u+=b*t,[l+u*t,u]};if([this.heave,this.heaveV]=c(this.heave,this.heaveV,h.h,1.5,.75),[this.pitch,this.pitchV]=c(this.pitch,this.pitchV,h.p,1.6,.75),[this.roll,this.rollV]=c(this.roll,this.rollV,h.r*.9+.035*Math.sin(this.time*.48),.9,.3),this.group.position.set(this.pos.x,this.heave,this.pos.z),this.group.rotation.set(this.pitch,this.yaw,this.roll,"YXZ"),this.group.updateMatrixWorld(!0),this._inv.copy(this.group.matrixWorld).invert(),n){this.toLocal(n,this.local);let l=Math.hypot(n.x-this.pos.x,n.z-this.pos.z);this.closest=Math.min(this.closest,l),this.phase==="coming"&&this.local.z<110&&(this.phase="passing"),this.phase==="passing"&&this.local.z<-110&&(this.phase="going"),this.phase==="going"&&l>900&&(this.hide(),this.phase="none")}for(this.prolongedAt&&this.time>=this.prolongedAt&&!this.spotted&&this.phase!=="going"&&(this.horn(1),this.prolongedAt=this.time+38+Math.random()*20);this.hornAt.length&&this.time>=this.hornAt[0];)this.hornAt.shift(),this.events.push({type:"horn",long:!this.spotted});if(this.beam&&n){let l=this.toWorld(this._w.set(0,30.5,-48.5),this._beamFrom||(this._beamFrom=new M)),u=this._searchlight(t,n,this._beamAim||(this._beamAim=new M)),d=this._v.copy(u).sub(l).normalize(),f=Math.min(340,l.distanceTo(u)*1.15+4),m=.07;this.beam.position.copy(l),this.beam.quaternion.setFromUnitVectors(this._down||(this._down=new M(0,-1,0)),d),this.beam.scale.set(m*1.3*f,f,m*1.3*f);let b=this.beamMat.uniforms;b.uApex.value.copy(l),b.uAxis.value.copy(d),b.uLen.value=f,b.uTan.value=m,b.uWaterY.value=u.y-.6,b.uI.value=.1,this.beamAim=u,this.beamFrom=l,this.beamTan=m,this.beamAxis=(this._beamAxis||(this._beamAxis=new M)).copy(d),this.beam.visible=!0,this.spotLight.position.copy(l),this.spotLight.target.position.copy(u),this.spotLight.angle=Math.atan(m)*1.35;let g=l.distanceTo(u);if(this.spotLight.intensity=2.6/(1+g*g/(55*55)),e){let p=this._w.copy(e.position).sub(l),x=p.dot(d),v=Math.sqrt(Math.max(0,p.lengthSq()-x*x)),w=x>-.5&&x<f+.5&&v<x*m*1.3+.6?Se:Ye;this.beamMat.side!==w&&(this.beamMat.side=w,this.beamMat.needsUpdate=!0)}}if(e&&this.lightMat){let l=Math.tan($i.degToRad(e.fov*.5));this.lightMat.uniforms.uPx.value=(i||720)*.5/l}}};var v1=[[A.handL,0,-.09,.012,"hand"],[A.handR,0,-.09,.012,"hand"],[A.foreArmL,0,-.13,0,"arm"],[A.foreArmR,0,-.13,0,"arm"],[A.footL,0,-.04,.12,"foot"],[A.footR,0,-.04,.12,"foot"]],No=class{constructor(t,e,i){this.waves=t,this.ch=e,this.body=i,this.tips=v1.map(([n,s,r,o,h])=>({bone:n,off:new M(s,r,o),kind:h,p:new M,prev:new M,has:!1,was:!0,wet:0,cool:0})),this._s=si(),this._v=new M,this._hd=new M,this.activity=0,this.onSlap=null,this.bowAcc=0,this.churnAcc=0}reset(){for(let t of this.tips)t.has=!1,t.wet=0;this.activity=0}update(t,e,i,n=!0){if(t<=0)return;let s=this.waves,r=this._s,o=this._v,h=0;e.near=!0;for(let l of this.tips){if(l.p.copy(l.off).applyMatrix4(this.ch.bones[l.bone].matrixWorld),!l.has){l.prev.copy(l.p),l.has=!0,s.sample(l.p.x,l.p.z,r),l.was=l.p.y<r.h;continue}if(o.copy(l.p).sub(l.prev).multiplyScalar(1/t),l.prev.copy(l.p),l.cool-=t,!n||o.lengthSq()>900){l.wet=0;continue}s.sample(l.p.x,l.p.z,r);let u=l.p.y<r.h,d=o.x-r.vx,f=o.y-r.vy,m=o.z-r.vz,b=Math.hypot(d,f,m),g=Math.hypot(d,m)+1e-4,p=l.kind==="hand"?1:l.kind==="foot"?.6:.45;if(u!==l.was){if(u&&b>(l.kind==="foot"?2.4:2)&&l.cool<=0&&l.kind!=="arm"){let x=Math.min(1.9,(.28+b*.26)*p)*(.75+.25*Math.random());if((l.kind==="hand"||Math.random()<.85)&&e.slap(l.p.x,r.h,l.p.z,x,d/g*Math.min(1,g/2.5),m/g*Math.min(1,g/2.5),r.vx+d*.55,r.vy,r.vz+m*.55,l.kind==="hand"?1:0),l.kind==="hand"){let v=Math.min(16,Math.round(3+b*1.5));for(let w=0;w<v;w++){let R=(Math.random()-.5)*2.2,y=Math.cos(R),T=Math.sin(R),S=.9+Math.random()*(1.2+b*.35),_=d/g*y-m/g*T,E=m/g*y+d/g*T;e.emit(l.p.x+_*.06,r.h+.03,l.p.z+E*.06,r.vx+_*S,r.vy+.8+Math.random()*(1.2+b*.22),r.vz+E*S,.28+Math.random()*.32,.009+Math.pow(Math.random(),2)*.02,0,0,1)}}l.cool=(l.kind==="hand",.3),h+=x,this.onSlap&&this.onSlap(b,l.p,l.kind)}else if(!u&&b>2.2&&l.kind==="hand"){let x=Math.min(1.5,(.1+b*.2)*p);e.fling(l.p.x,Math.max(l.p.y,r.h+.02),l.p.z,o.x,o.y,o.z,x),l.wet=.6,h+=x*.6}}if(!u&&l.wet>0){l.wet-=t;let x=b>2.5&&Math.random()<t*35*l.wet?1:0;for(let v=0;v<x;v++)e.emit(l.p.x+(Math.random()-.5)*.06,l.p.y+(Math.random()-.5)*.06,l.p.z+(Math.random()-.5)*.06,o.x*(.35+.5*Math.random()),o.y*.6+.5*Math.random(),o.z*(.35+.5*Math.random()),.35+Math.random()*.5,.01+Math.random()*.022,0,0,1)}if(l.kind==="foot"&&Math.abs(l.p.y-r.h)<.12&&b>2){for(this.churnAcc+=t*Math.min(42,b*8);this.churnAcc>=1;){this.churnAcc-=1;let x=Math.random()*6.283,v=Math.random()*.9;if(e.emit(l.p.x+Math.cos(x)*.05,r.h+.02,l.p.z+Math.sin(x)*.05,r.vx+Math.cos(x)*v+d*.25,r.vy+.9+2.1*Math.random()*Math.min(1.4,b/3),r.vz+Math.sin(x)*v+m*.25,.3+Math.random()*.4,.009+Math.pow(Math.random(),2)*.022,0,0,1),Math.random()<.08){e.lean=(Math.random()-.5)*.3;let w=.22+Math.random()*.16;e.emit(l.p.x,r.h-.02,l.p.z,r.vx,r.vy,r.vz,.62*Math.sqrt(w/.45),w,3,0,.75,0),e.lean=0}}h+=.25*t*10}l.was=u}let c=this.body;if(n&&c.subFrac>.2&&c.subFrac<.98&&c.relSpeed>1.5&&c.mouthDepth<.4){let l=Math.min(6,c.relSpeed),u=Math.hypot(c.relFlow.x,c.relFlow.z)+1e-4,d=-c.relFlow.x/u,f=-c.relFlow.z/u,m=this._hd.setFromMatrixPosition(this.ch.bones[A.head].matrixWorld);for(this.bowAcc+=t*Math.min(40,(l-1.3)*16);this.bowAcc>=1;){this.bowAcc-=1;let b=Math.random()<.5?-1:1,g=Math.random(),p,x,v,w,R;if(g<.5){let T=(Math.random()-.5)*.5,S=.12+Math.random()*.45;p=m.x+d*S-f*T,x=m.z+f*S+d*T,v=l*.7+.4+Math.random()*1.4,w=(Math.random()-.5)*1.2,R=.6+Math.random()*1.6}else{let T=(.22+Math.random()*.2)*b,S=-.5+Math.random()*.9;p=c.pos.x+d*S-f*T,x=c.pos.z+f*S+d*T,v=l*.3,w=b*(.4+Math.random()*1),R=.5+Math.random()*1.3}let y=!1;e.emit(p,c.surfaceH+.03,x,c.surface.vx+d*v-f*w,c.surface.vy+R*Math.min(1.4,.6+l*.3),c.surface.vz+f*v+d*w,y?.25+Math.random()*.3:.4+Math.random()*.55,y?.04+Math.random()*.05:Math.random()<.3?.028+Math.random()*.03:.011+Math.pow(Math.random(),2)*.026,y?1:0,y?.4:0,y?.32:1)}h+=.12+.1*l}e.near=!1,this.activity+=(Math.min(1,h)-this.activity)*(1-Math.exp(-t*(h>this.activity?12:2.5)))}};var uf=1025,x1=1.22,ml=9.81,df=.35,Ee={tubeY:.37,tubeR:.21,halfW:.72,floorY:.325,bowZ:1.95,sternZ:-1.9,transomZ:-1.28,bowStart:1};function en(a){if(a<=Ee.bowStart)return Ee.halfW;let t=Math.min(1,(a-Ee.bowStart)/(Ee.bowZ-Ee.bowStart));return Ee.halfW*Math.sqrt(Math.max(0,1-t*t))}function Oa(a){return Ee.tubeY+.2*ze(.9,2,a)}function ki(a,t,e,i,n,s,r,o,h){return{o:new M(a,t,e),r:new M,vol:i/1e3,half:n,cx:s,cy:r,cz:o,air:h,sub:0,was:0,h:0,hOk:!1}}var Oo=class{constructor(t){this.waves=t,this.group=new ae,this.group.name="boat",this.group.visible=!1,this.holder=new ae,this.group.add(this.holder),this.active=!1,this.loaded=!1,this.com=new M(0,.3,-.28),this.baseMass=168,this.mass=this.baseMass,this.inertia=new M(250,300,78),this.pos=new M,this.vel=new M,this.quat=new yt,this.angVel=new M,this.prevPos=new M,this.prevQuat=new yt,this.wind=new M,this.rider=0,this.swamp=0,this.upY=1,this.sitUp=1,this.capsized=!1,this.flipArmed=!1,this.flipping=0,this.settle=0,this.flipAxis=new M,this.flipDir=new M,this.keepYaw=null,this.slam=0,this.slamPos=new M,this.aer=0,this.brkH=0,this.subFrac=0,this.relFlow=new M,this.relSpeed=0,this.extF=new M,this.extT=new M,this.tow=new M;let e=Ee.halfW,i=Ee.tubeY;this.points=[ki(e,i,-1.65,105,.21,.13,.3,.075,.05),ki(-e,i,-1.65,105,.21,.13,.3,.075,.05),ki(e,i,-.7,118,.21,.13,.34,.06,.055),ki(-e,i,-.7,118,.21,.13,.34,.06,.055),ki(e,i,.3,118,.21,.13,.34,.06,.055),ki(-e,i,.3,118,.21,.13,.34,.06,.055),ki(.69,i+.03,1.2,105,.21,.12,.3,.075,.055),ki(-.69,i+.03,1.2,105,.21,.12,.3,.075,.055),ki(0,.52,1.8,95,.22,.1,.26,.11,.07),ki(0,.2,-.7,85,.13,.1,.55,.07,0),ki(0,.21,.62,85,.13,.1,.55,.07,0),ki(0,.12,-1.5,9,.16,.1,.03,.05,.03)];for(let n of this.points)n.o.sub(this.com);this.totalVol=this.points.reduce((n,s)=>n+s.vol,0),this._s=si(),this._w={vx:0,vy:0,vz:0,ax:0,ay:0,az:0},this._p=new M,this._vp=new M,this._f=new M,this._F=new M,this._T=new M,this._X=new M,this._Y=new M,this._Z=new M,this._t=new M,this._t2=new M,this._qi=new yt,this._dq=new yt,this._m=new Rt,this.inv=new Rt,this.matrix=new Rt}setModel(t){let e=null;if(t.scene.traverse(n=>{n.isMesh&&!e&&(e=n)}),!e)throw new Error("boat model has no mesh");this.mesh=e;let i=e.material;i.envMapIntensity=.6,i.roughness=.95,i.color.setRGB(1.12,1.18,1.28),i.aoMapIntensity=.8,i.normalScale.set(1,1),i.needsUpdate=!0,this.material=i,t.scene.traverse(n=>{n.layers.enable(1),n.frustumCulled=!1}),t.scene.position.copy(this.com).multiplyScalar(-1),this.holder.add(t.scene),this.loaded=!0}reset(t,e,i){let n=this.waves.sample(t,e,this._s);this.quat.setFromAxisAngle(this._t.set(0,1,0),i),this.pos.set(t,n.h+.14+this.com.y-.13,e),this.vel.set(n.vx,n.vy,n.vz),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat),this.swamp=0,this.flipping=0,this.settle=0,this.capsized=!1,this.upY=1,this.sitUp=1,this.slam=0,this.extF.set(0,0,0),this.extT.set(0,0,0),this.tow.set(0,0,0),this.hcOk=!1,this.depth=0;for(let s of this.points)s.was=0,s.hOk=!1;this.active=!0,this.group.visible=this.loaded,this._updateMatrices(this.pos,this.quat)}hide(){this.active=!1,this.group.visible=!1}_updateMatrices(t,e){this._t.copy(this.com).multiplyScalar(-1).applyQuaternion(e).add(t),this.matrix.compose(this._t,e,this._t2.set(1,1,1)),this.inv.copy(this.matrix).invert()}pushAt(t,e,i,n){this.extF.x+=e,this.extF.y+=i,this.extF.z+=n;let s=this._t.copy(t).sub(this.pos);this.extT.x+=s.y*n-s.z*i,this.extT.y+=s.z*e-s.x*n,this.extT.z+=s.x*i-s.y*e}velocityAt(t,e){return e.copy(t).sub(this.pos).cross(this.angVel).multiplyScalar(-1).add(this.vel)}step(t){if(!this.active)return;let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._X.set(1,0,0).applyQuaternion(this.quat),n=this._Y.set(0,1,0).applyQuaternion(this.quat),s=this._Z.set(0,0,1).applyQuaternion(this.quat);this.upY=n.y;let r=this._F.set(0,0,0),o=this._T.set(0,0,0);this.mass=this.baseMass+this.rider+260*this.swamp;let h=0,c=0,l=0,u=0,d=0,f=0,m=0,b=0,g=0,p=0,x=0,v=this.dbg||(this.dbg={});v.buoy=0,v.dragY=0,v.bay=0,v.bvy=0,v.plunge=0,v.wvy=0,v.h=0,v.ay=0;let w=1-.32*this.swamp;for(let U=0;U<this.points.length;U++){let N=this.points[U],D=N.r.copy(N.o).applyQuaternion(this.quat),P=this._p.copy(this.pos).add(D),G=this._vp.copy(this.angVel).cross(D).add(this.vel),V=e.sample(P.x,P.z,this._s),H=V.h-P.y,B=Math.max(0,Math.min(1,(H+N.half)/(2*N.half))),j=N.hOk?Math.max(-9,Math.min(4.6,(V.h-N.h)/t)):V.vy;if(N.h=V.h,N.hOk=!0,B>.5!=N.was>.5){let K=Math.abs(G.y-V.vy);K>d&&(d=K,this.slamPos.set(P.x,V.h,P.z))}N.was=B,N.sub=B;let tt=this._f.set(0,0,0);if(f+=V.nx,m+=V.ny,b+=V.nz,V.brkH>l&&(l=V.brkH),V.lip>u&&(u=V.lip),B>0){let K=Math.max(0,H),J=V.aer*Math.exp(-K/3.5);J>c&&(c=J);let ot=uf*(1-.6*J),it=e.bodyFlow(V.x0,V.z0,K,this._w),Q=.25+.75*Math.exp(-K/(2.5+.35*Math.max(0,V.brkH)));it.vx+=V.bvx*Q,it.vy+=V.bvy,it.vz+=V.bvz*Q,V.plunge>.01&&(it.vy-=.25*V.plunge*Math.exp(-K/3)),e.breakerFlow(P.x,P.y,P.z,V.h,it),B>.55&&j>it.vy&&(it.vy+=(j-it.vy)*ft((B-.55)/.3)*Math.exp(-K/1.5));let Nt=ot*N.vol*B*w;tt.set(Nt*(1+df)*it.ax,Nt*Math.max(.3*ml,ml+it.ay+V.bay),Nt*(1+df)*it.az),v.buoy+=tt.y,v.bay=Math.max(v.bay,Math.abs(V.bay))*Math.sign(V.bay||1),v.bvy=V.bvy,v.plunge=Math.max(v.plunge,V.plunge),v.wvy=it.vy,v.h=V.h,v.ay=it.ay;let xt=it.vx-G.x,At=it.vy-G.y,bt=it.vz-G.z;g+=xt*B,p+=bt*B,x+=B;let Vt=xt*i.x+At*i.y+bt*i.z,Ct=xt*n.x+At*n.y+bt*n.z,L=xt*s.x+At*s.y+bt*s.z,C=.5*ot*B,et=(C*N.cx*Math.abs(Vt)+60*N.cx*B)*Vt,ht=(C*N.cy*Math.abs(Ct)+150*N.cy*B)*Ct,pt=(C*N.cz*Math.abs(L)+60*N.cz*B)*L;tt.x+=i.x*et+n.x*ht+s.x*pt,tt.y+=i.y*et+n.y*ht+s.y*pt,tt.z+=i.z*et+n.z*ht+s.z*pt,v.dragY+=i.y*et+n.y*ht+s.y*pt,h+=N.vol*B}if(B<1&&N.air>0){let K=this.wind.x-G.x,J=-G.y,ot=this.wind.z-G.z,it=.5*x1*N.air*(1-B)*(1-.55*this.swamp)*Math.hypot(K,J,ot);tt.x+=K*it,tt.y+=J*it,tt.z+=ot*it}r.add(tt),o.x+=D.y*tt.z-D.z*tt.y,o.y+=D.z*tt.x-D.x*tt.z,o.z+=D.x*tt.y-D.y*tt.x}this.subFrac=h/this.totalVol,this.aer=c,this.brkH=l,this.slam=d,x>0?this.relFlow.set(g/x,0,p/x):this.relFlow.set(0,0,0),this.relSpeed+=(this.relFlow.length()-this.relSpeed)*(1-Math.exp(-t*6));{let U=Math.hypot(f,m,b)||1;this.sitUp=(n.x*f+n.y*m+n.z*b)/U}let R=Math.max(ft((c-.35)*2)*ft(l/4),ft((.35-Math.abs(n.y))*3),ft((this.subFrac-.86)*6));R>0?this.swamp+=(1-this.swamp)*(1-Math.exp(-t*1.6*R)):this.swamp>.5&&(this.swamp+=(.5-this.swamp)*(1-Math.exp(-t*.04)));let y=1+.9*Math.min(1,this.subFrac*2.5)+(this.rider+260*this.swamp)/this.baseMass*.5;if(this.flipArmed&&this.flipping<=0&&n.y>.3)for(let U of e.breakers){if(!U.active||U.height<4.5)continue;let N=this.pos.x-U.ox,D=this.pos.z-U.oz,P=N*U.dx+D*U.dz-U.s,G=-N*U.dz+D*U.dx,V=Math.exp(-(G*G)/(U.width*U.width));if(P<8&&P>-8&&U.height*V>4.5){this.flipAxis.set(U.dz,0,-U.dx),this.flipDir.set(U.dx,0,U.dz),this.flipping=2.6,this.flipArmed=!1;break}}if(this.flipping>0){this.flipping-=t;let U=this.angVel.dot(this.flipAxis);n.y>-.8?o.addScaledVector(this.flipAxis,(3-U)*2100*y):(this.flipping=0,this.settle=1.4),r.addScaledVector(this.flipDir,this.mass*5*ft((this.flipping-2)/.6))}if(this.settle>0&&(this.settle-=t,o.addScaledVector(this.angVel,-1500*y)),this.flipArmed&&this.rider>0&&this.flipping<=0){let U=Math.hypot(f,m,b)||1,N=(n.y*b-n.z*m)/U,D=(n.z*f-n.x*b)/U,P=(n.x*m-n.y*f)/U,G=this.angVel.dot(n);o.x+=N*5200*y-(this.angVel.x-n.x*G)*1500*y,o.y+=D*5200*y-(this.angVel.y-n.y*G)*1500*y,o.z+=P*5200*y-(this.angVel.z-n.z*G)*1500*y}if(this.keepYaw!==null&&n.y>.5){let U=Math.atan2(s.x,s.z),N=this.keepYaw-U;N=Math.atan2(Math.sin(N),Math.cos(N)),o.y+=Math.max(-260,Math.min(260,N*420-this.angVel.y*300))}this.capsized=n.y<0,r.add(this.extF),o.add(this.extT),this.extF.set(0,0,0),this.extT.set(0,0,0),r.add(this.tow);let T=this.mass+.08*uf*h;r.y-=this.mass*ml,this.vel.addScaledVector(r,t/T);let S=this.vel.length();S>40&&this.vel.multiplyScalar(40/S),this.pos.addScaledVector(this.vel,t);{let U=e.sample(this.pos.x,this.pos.z,this._s),N=this.hcOk?Math.max(-30,Math.min(30,(U.h-this.hc)/t)):U.vy;this.hc=U.h,this.hcOk=!0;let D=this.pos.y-U.h;this.depth=-D,D<-.42?(this.pos.y=U.h-.42,this.vel.y<N&&(this.vel.y=N)):D>.45&&this.vel.y>N&&(this.vel.y+=(N-this.vel.y)*Math.min(1,t*7),D>1.5&&(this.pos.y=U.h+1.5,this.vel.y>N&&(this.vel.y=N)))}let _=this._qi.copy(this.quat).invert(),E=this._t.copy(this.angVel).applyQuaternion(_),I=this._t2.copy(o).applyQuaternion(_),W=this.inertia.x*y,Y=this.inertia.y*y,k=this.inertia.z*y;E.x+=(I.x-(k-Y)*E.y*E.z)/W*t,E.y+=(I.y-(W-k)*E.z*E.x)/Y*t,E.z+=(I.z-(Y-W)*E.x*E.y)/k*t,E.multiplyScalar(Math.exp(-(.35+2.2*Math.min(1,this.subFrac*2.5))*t));let z=E.length();z>9&&E.multiplyScalar(9/z),this.angVel.copy(E).applyQuaternion(this.quat);let O=this.angVel.length()*t;O>1e-7&&(this._dq.setFromAxisAngle(this._t.copy(this.angVel).normalize(),O),this.quat.premultiply(this._dq).normalize()),this._updateMatrices(this.pos,this.quat)}sync(t){this.active&&(this.group.position.lerpVectors(this.prevPos,this.pos,t),this.group.quaternion.slerpQuaternions(this.prevQuat,this.quat,t),this.group.updateMatrixWorld(!0))}toWorld(t,e){return e.copy(t).applyMatrix4(this.matrix)}dirToWorld(t,e){return e.copy(t).applyQuaternion(this.quat)}nearestGrip(t,e){let i=this._t.copy(t).applyMatrix4(this.inv),n=0,s=1,r=1e9;for(let d=0;d<=24;d++){let f=-1.75+(Ee.bowZ-.15+1.75)*d/24,m=en(f),b=Oa(f);for(let g of[1,-1]){let p=Math.hypot(i.x-g*m,i.y-b,i.z-f);p<r&&(r=p,n=f,s=g)}}let o=en(n),h=en(n+.05);e.dist=r,e.z=n,e.side=s,e.local=(e.local||new M).set(s*o,Oa(n),n),e.point=this.toWorld(e.local,e.point||new M);let c=s*(h-o),l=.05,u=Math.hypot(c,l);return e.tangent=this.dirToWorld(this._t2.set(c/u,0,l/u),e.tangent||new M),e.normal=this.dirToWorld(this._t2.set(s*l/u,0,-s*c/u),e.normal||new M),e}};var Ha=a=>{window.__load&&window.__load(a)},Ba=a=>new Promise((t,e)=>{let i=document.createElement("script");i.src=a,i.onload=t,i.onerror=()=>e(new Error("load failed: "+a)),document.head.appendChild(i)}),fi=new URLSearchParams(location.search),Wi=1/120,Ai={get(a,t){try{let e=localStorage.getItem("eos."+a);return e===null?t:e}catch{return t}},set(a,t){try{localStorage.setItem("eos."+a,String(t))}catch{}}},gl=[.5,1,1.5],bl=[0,.4,.85,1],vl=class{constructor(){if(this.canvas=document.getElementById("view"),this.manual=fi.get("manual")==="1",this.renderer=new Sa({canvas:this.canvas,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),!this.renderer.capabilities.isWebGL2)throw new Error("WebGL2 is required");this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=ke,this.renderer.toneMapping=Yi,this.renderer.autoClear=!0,this.perf=new fo(this.renderer);let t=fi.get("q")||Ai.get("quality",this.perf.pickDefault());this.perf.setProfile($s[t]?t:this.perf.pickDefault()),this.manual&&(this.perf.adaptive=!1),st.hdrType=this.perf.info.halfFloat?pn:Ne,this.isTouch=fi.get("touch")==="1"||fi.get("touch")!=="0"&&navigator.maxTouchPoints>0&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,st.uNoise.value=Od(),st.uDetailN.value=Bd(),st.uFoamTex.value=Hd(),this.time=0,this.acc=0,this.state="title",this.deadTimer=0,this.shipAt=55+Math.random()*30,this.scene=new Li,this.camera=new Be(62,16/9,.07,3e4),this.camera.layers.enableAll(),this.waves=new eo,this.sky=new no(this.renderer,this.perf.profile.envSize),this.ocean=new oo(this.waves,this.perf.profile),this.post=new lo(this.renderer),this.post.levels=this.perf.profile.bloomLevels,this.scene.add(this.sky.dome,this.ocean.mesh),this.flashLight=new is(13163775,0),this.keyLight=new is(10465476,.42),this.flashLight.layers.enableAll(),this.keyLight.layers.enableAll(),this.scene.add(this.flashLight,this.flashLight.target,this.keyLight,this.keyLight.target),this.pmrem=new Ws(this.renderer),this.envTimer=0,this.envRT=null,this.input=new Mo(this.canvas),this.character=new mo,this.scene.add(this.character.group),this.body=new bo(this.waves),this.survival=new vo,this.player=new xo(this.body,this.survival,this.input),this.anim=new yo(this.character,this.body,this.player,this.survival),this.cam=new wo(this.camera,this.character,this.body,this.player,this.waves,this.input),this.cam.yaw=-Math.PI/2;let e=fi.get("view")||Ai.get("view","third");this.cam.setMode(e),this.cam.blend=this.cam.target,this.cam.intensity=+Ai.get("shake",1)||1,this.cam.auto=Ai.get("autocam","1")!=="0",fi.has("yaw")&&(this.cam.yaw=+fi.get("yaw")),fi.has("pitch")&&(this.cam.pitch=+fi.get("pitch")),this.limbs=new No(this.waves,this.character,this.body),this.limbs.onSlap=(n,s,r)=>{this.foam&&this.foam.enabled&&n>1.6&&this.foam.addSplash(s.x,s.z,Math.min(.8,.3+n*.11)*(r==="hand"?1:.65));let o=this.camera.matrixWorld.elements,h=s.x-this.camera.position.x,c=s.z-this.camera.position.z;r!=="foot"&&n>1.6&&this.cam.blend<.5&&!this.underwater.isUnder&&this.lens.spawn(r==="hand"?3:1),this.emit("limb",{v:n,pos:s,kind:r,pan:Math.max(-.8,Math.min(.8,(h*o[0]+c*o[2])/(Math.hypot(h,c)+.5)))})},this.mouthUnder=!1,this.camUnder=0,this.mouthWorld=new M,this.impactBlur=0,this.listeners=[],this.weather=new Eo(this.waves),this.weather.base=this.weather.storm=fi.has("storm")?+fi.get("storm"):1,this.manual&&(this.weather.locked=!0),this.lightning=new So,this.scene.add(this.lightning.group),this.autoLightning=!(this.manual||fi.get("auto")==="0"),this.buildEffects(),this.interaction.auto=this.autoLightning,this.audio=new Co,this.audio.volume=+Ai.get("volume",.85),this.audio.sfxOn=Ai.get("sfx","1")!=="0",this.listeners.push((n,s)=>this.audio.onEvent(n,s)),this.face=new ko,this.onCharacter=n=>this.face.attach(n.mesh),this.vst={alive:!0},this.coughSeq=0,this.coughT=0,this.voiceDir=new zo(this.audio,this.face,{bubbles:n=>this.underwater.burstAt(this.mouthWorld,n,.22),cough:n=>{this.coughSeq=n,this.coughT=0}}),this.listeners.push((n,s)=>this.voiceDir.onEvent(n,s,this.vst)),Ba("dist/voice.js").then(()=>{this.audio.setVoices(window.__EOS_VOICE)}).catch(()=>console.warn("[voice] \uBAA9\uC18C\uB9AC \uB179\uC74C\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4")),this.listeners.push((n,s)=>{if(n==="inhale"&&(this.anim.gaspKick=Math.max(this.anim.gaspKick,s.gasp?1:.4*s.strength)),n==="exhale"&&!this.mouthUnder&&this.spray&&this.state!=="title"){let r=this.player.heading,o=this.weather.wind,h=this.mouthWorld,c=3+Math.round(4*s.strength);for(let l=0;l<c;l++)this.spray.emit(h.x+r.x*.05,h.y+.01,h.z+r.z*.05,r.x*(.5+Math.random()*.7)+o.x*.04,.15+Math.random()*.3,r.z*(.5+Math.random()*.7)+o.z*.04,.5+Math.random()*.5,.05+Math.random()*.06,1,.45,.11+.08*s.strength,.6)}}),this.lightning.onThunder=n=>this.audio.onEvent("thunder",n),this.audioState={cam:{pos:this.camera.position,fwd:new M,up:new M},hot:[]},this.rescue=new Uo(this.waves),this.scene.add(this.rescue.group,...this.rescue.lights),this.cargo=new di(this.waves),this.scene.add(this.cargo.group),this.boat=new Oo(this.waves),this.scene.add(this.boat.group),this.aboard=!1,this.bacc=0,this.washT=0,this.boatOff=fi.get("boat")==="0",this.seatPos=new M(.2,Ee.floorY+.15,-.3);{let r=new M(Math.sin(.26),0,Math.cos(.26)),o=new M(Math.cos(.26)*Math.sin(.45),-Math.cos(.45),-Math.sin(.26)*Math.sin(.45));this.seatQuat=new yt().setFromRotationMatrix(new Rt().makeBasis(new M().crossVectors(r,o),r,o))}this.rid={p:new M,v:new M,pv:new M,d:new M,has:!1,slam:0},this.wonTimer=0,this.scenarios=new Lo(this),this.pendingScenario=fi.get("test"),this.weather.update(0),this.waves.update(0),this.body.reset(0,0),this.syncCharacter(1),this.anim.update(1/60),this.character.group.updateMatrixWorld(!0),this.drawScene=(n,s)=>{let r=this.renderer;if(r.setRenderTarget(n),s){let o=(this.camUnder||0)<.5;o&&((this._clipUnder||(this._clipUnder=[new wi(new M(0,-1,0),0)]))[0].constant=this.body.surfaceH+.04,r.clippingPlanes=this._clipUnder),this.camera.layers.set(1),r.setClearColor(0,0),r.clear(),r.render(this.scene,this.camera),this.camera.layers.enableAll(),o&&(r.clippingPlanes=this._noClip||(this._noClip=[]))}else r.render(this.scene,this.camera)};let i={input:this.input,start:()=>this.start(),resume:()=>this.resume(),restart:()=>this.restart(),pause:()=>this.pause(),toggleView:()=>{this.cam.toggle(),Ai.set("view",this.cam.mode),this.impactBlur=Math.max(this.impactBlur,.3)},scenario:n=>{this.scenarios.run(n),this.resume()},get:n=>n==="quality"?this.perf.profile.label:n==="view"?this.cam.mode==="first"?"1\uC778\uCE6D":"3\uC778\uCE6D":n==="shake"?Math.round(this.cam.intensity*100)+"%":n==="autocam"?this.cam.auto?"\uCF2C":"\uB054":n==="sfx"?this.audio.sfxOn?"\uCF2C":"\uB054":Math.round(this.audio.volume*100)+"%",cycle:n=>{if(n==="quality"){let s=Object.keys($s);this.setQuality(s[(s.indexOf(this.perf.profile.key)+1)%s.length])}else if(n==="view")i.toggleView();else if(n==="sfx")this.audio.setSfx(!this.audio.sfxOn),Ai.set("sfx",this.audio.sfxOn?"1":"0");else if(n==="autocam")this.cam.auto=!this.cam.auto,Ai.set("autocam",this.cam.auto?"1":"0");else if(n==="shake")this.cam.intensity=gl[(gl.indexOf(this.cam.intensity)+1)%gl.length]||1,Ai.set("shake",this.cam.intensity);else{let s=bl[(bl.indexOf(this.audio.volume)+1)%bl.length];this.audio.setVolume(s===void 0?.85:s),Ai.set("volume",this.audio.volume)}this.state!=="playing"&&this.state!=="title"&&this.renderStill()}};this.api=i,this.ui=!this.manual||fi.get("ui")==="1"?new Po(document.getElementById("ui"),i,this.isTouch):null,this.hadLock=!1,this.input.onLockChange=n=>{n?this.hadLock=!0:this.hadLock&&this.state==="playing"&&(this.hadLock=!1,this.pause())},this.canvas.addEventListener("click",()=>{this.state==="playing"&&!this.isTouch&&!this.input.locked&&this.input.lock()}),window.addEventListener("keydown",n=>{n.repeat||((n.code==="KeyV"||n.code==="KeyC")&&this.state==="playing"&&i.toggleView(),n.code==="KeyP"&&(this.state==="playing"?this.pause():this.state==="paused"&&this.resume()),n.code==="Enter"&&this.state==="title"&&this.start())}),window.addEventListener("wheel",n=>{if(this.state!=="playing"||this.cam.cine)return;let s=n.deltaY<0?"first":"third";s!==this.cam.mode&&(this.cam.setMode(s),Ai.set("view",s),this.impactBlur=Math.max(this.impactBlur,.3),this.ui&&this.ui.refresh())},{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()}),this.manual?(this.state="playing",this.ui&&this.ui.show("playing",{time:0,cause:""}),this.pendingScenario&&(this.scenarios.run(this.pendingScenario),this.pendingScenario=null)):this.setState("title");{let n=["pointerdown","keydown","touchend","mousedown"],s=()=>{if(!(this.state==="paused"||this.state==="dead"||this.manual)){try{this.audio.start(),this.audio.resume()}catch{}if(this.audio.ctx&&this.audio.ctx.state==="running")for(let r of n)window.removeEventListener(r,s,!0)}};for(let r of n)window.addEventListener(r,s,!0);this.onAssets=s}window.addEventListener("resize",()=>{this.resize(),(this.state==="paused"||this.state==="dead")&&this.renderStill()}),this.resize(),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}async loadCharacter(){try{Ha(.3),window.__EOS_SON||await Ba("dist/son.js"),Ha(.7);let t=await Na(window.__EOS_SON);Ha(.9),window.__EOS_SON=null;let e=new Do(this.character,t);this.character.useGlb(e),this.body.setAirway(new M(0,e.mouth.y,e.mouth.z),new M(0,e.eye.y,e.eye.z)),this.glbInfo={verts:e.mesh.geometry.attributes.position.count,bones:e.order.length,morphs:Object.keys(e.mesh.morphTargetDictionary||{}),sourceHeight:+e.sourceHeight.toFixed(3)},this.onCharacter&&this.onCharacter(e),Ha(.92)}catch(t){console.warn("[character] GLB \uCE90\uB9AD\uD130\uB97C \uC4F0\uC9C0 \uBABB\uD574 \uAE30\uBCF8 \uBAB8\uC73C\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4: "+t.message),this.glbInfo={error:t.message},this.character.body.visible=!0,this.character.head.visible=!0}}async loadCargo(){try{window.__EOS_SHIP||await Ba("dist/ship.js");let t=await Na(window.__EOS_SHIP);window.__EOS_SHIP=null,this.cargo.setModel(t),this.cargo.warm(this.renderer,this.camera,this.scene);{let s=this.camera,r=new M(0,0,-1).applyQuaternion(s.quaternion);r.y=0,r.normalize(),this.cargo.place(s.position.x+r.x*70,s.position.z+r.z*70,Math.atan2(r.x,r.z)+Math.PI/2),this.cargo.update(1/60,this.camera,st.uResolution.value.y),this.render(1/60),this.render(1/60),this.cargo.hide()}let e=0,i=0,n=0;t.scene.traverse(s=>{s.isMesh&&(n++,e+=s.geometry.attributes.position.count,i+=s.geometry.index?s.geometry.index.count/3:0)}),this.cargoInfo={verts:e,tris:i,meshes:n}}catch(t){console.warn("[cargo] \uD654\uBB3C\uC120 \uBAA8\uB378\uC744 \uC4F0\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+t.message),this.cargoInfo={error:t.message}}}warmRescue(){let t=this.rescue,e=this.cargo,i=this.camera,n=this.weather.wind,s=new M(0,0,-1).applyQuaternion(i.quaternion);s.y=0,s.lengthSq()<1e-4&&s.set(0,0,1),s.normalize();let r=t.arriveAt,o=new M(i.position.x+s.x*24,0,i.position.z+s.z*24);o.y=this.waves.heightFast(o.x,o.z);let h=[],c=l=>l.traverse(u=>{(u.isMesh||u.isPoints)&&(h.push([u,u.frustumCulled]),u.frustumCulled=!1)});try{t.dispatch(o,0,0),t.pos.set(o.x,o.y+20,o.z);for(let l=0;l<4;l++)t.update(1/60,o,n,0,!0,null,!0,i.position,!1);e.loaded&&(e.place(i.position.x+s.x*70,i.position.z+s.z*70,Math.atan2(s.x,s.z)+Math.PI/2),e.update(1/60,i,st.uResolution.value.y,o),c(e.group)),c(t.group),this.render(1/60),this.render(1/60);for(let l of[t.beamMat,e.loaded?e.beamMat:null])l&&(l.side=l.side===Se?Ye:Se,l.needsUpdate=!0);this.render(1/60)}catch(l){console.warn("[warm] "+l.message)}for(let[l,u]of h)l.frustumCulled=u;t.reset(r),e.loaded&&e.hide(),this.post.adaptReset=!0}async loadHeli(){try{window.__EOS_HELI||await Ba("dist/heli.js");let t=await Na(window.__EOS_HELI);window.__EOS_HELI=null;let e=0;t.scene.traverse(i=>{i.isMesh&&(e+=i.geometry.attributes.position.count)}),this.rescue.setModel(t),this.heliInfo={verts:e}}catch(t){console.warn("[heli] \uD5EC\uAE30 \uBAA8\uB378\uC744 \uC4F0\uC9C0 \uBABB\uD574 \uAE30\uBCF8 \uD5EC\uAE30\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4: "+t.message),this.heliInfo={error:t.message}}}async loadBoat(){if(!this.boatOff)try{window.__EOS_BOAT||await Ba("dist/boat.js");let t=await Na(window.__EOS_BOAT);window.__EOS_BOAT=null,this.boat.setModel(t),this.boatInfo={verts:this.boat.mesh.geometry.attributes.position.count},(this.wantBoard||this.state==="title"&&!this.scenarios.active)&&this.board()}catch(t){console.warn("[boat] \uBCF4\uD2B8 \uBAA8\uB378\uC744 \uC4F0\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+t.message),this.boatInfo={error:t.message}}}slamOut(){let t=this.boat,e=this._bt||(this._bt={p:new M,n:new M,q:new yt});e.q.copy(t.quat).invert(),e.p.copy(t.slamPos).sub(t.pos).applyQuaternion(e.q);let i=Math.max(Ee.sternZ,Math.min(Ee.bowZ,e.p.z)),n=en(i)+.28,s,r,o,h;if(e.p.z<Ee.transomZ&&Math.abs(e.p.x)<Ee.halfW-.3)s=e.p.x,r=Ee.sternZ-.25,o=0,h=-1;else{let c=e.p.x>=0?1:-1;s=c*n,r=i,o=c,h=0}return e.n.set(o,0,h).applyQuaternion(t.quat),e.n.y=0,e.n.normalize(),e.p.set(s,0,r).applyQuaternion(t.quat).add(t.pos),e.p}board(){if(!this.boat.loaded){this.wantBoard=!this.boatOff;return}this.wantBoard=!1;let t=this.body,e=-Math.PI/2+.32;this.boat.reset(t.pos.x,t.pos.z,e),this.boat.rider=this.body.mass,this.boat.flipArmed=!0,this.boat.keepYaw=e,this.aboard=!0,this.washT=0,this.bacc=0,this.boardedAt=this.time,this.pinToBoat(!0),this.anim.hold="aboard",this.syncCharacter(1)}pinToBoat(t,e=1/60){let i=this.boat,n=this.body,s=this.rid;t&&i.sync(1);let r=this._pt||(this._pt={base:new M,v:new M,a:new M,q:new yt,qi:new yt,e:new pi,x:new M(1,0,0),z:new M(0,0,1)}),o=this._seatW||(this._seatW=new M),h=this._seatQ||(this._seatQ=new yt);r.base.copy(this.seatPos).sub(i.com).applyQuaternion(i.group.quaternion).add(i.group.position),i.velocityAt(r.base,r.v),(t||!s.has)&&(s.pv.copy(r.v),s.p.set(0,0,0),s.v.set(0,0,0),s.d.set(0,0,0),s.slam=0,s.has=!0),r.a.copy(r.v).sub(s.pv).multiplyScalar(1/Math.max(e,.001)),s.pv.copy(r.v),r.a.lengthSq()>2025&&r.a.setLength(45),r.a.multiplyScalar(-1),r.a.y-=9.81,r.a.applyQuaternion(r.qi.copy(i.group.quaternion).invert()),r.a.y+=9.81,s.d.lerp(r.a,1-Math.exp(-e*16));let c=Math.max(1,Math.ceil(e/.012)),l=e/c;for(let d=0;d<c;d++)s.v.x+=(s.d.x*3.2-30*s.p.x-3.2*s.v.x)*l,s.v.z+=(s.d.z*2.4-34*s.p.z-3.4*s.v.z)*l,s.v.y+=((s.d.y-4)*1.5-15*s.p.y-2*s.v.y)*l,s.p.addScaledVector(s.v,l),s.p.y<=0&&(s.v.y<-.5&&(s.slam=Math.max(s.slam,Math.min(1,-s.v.y/2.2))),s.p.y=0,s.v.y<0&&(s.v.y=0)),s.p.y>.22&&(s.p.y=.22,s.v.y>0&&(s.v.y=0)),s.p.x>.07?(s.p.x=.07,s.v.x>0&&(s.v.x=-.3*s.v.x)):s.p.x<-.26&&(s.p.x=-.26,s.v.x<0&&(s.v.x=0)),s.p.z>.16?(s.p.z=.16,s.v.z>0&&(s.v.z=0)):s.p.z<-.24&&(s.p.z=-.24,s.v.z<0&&(s.v.z=0));s.slam=Math.max(0,s.slam-e*3.2),this.state==="title"&&s.p.multiplyScalar(.5),o.copy(this.seatPos).add(s.p).sub(i.com).applyQuaternion(i.group.quaternion).add(i.group.position),h.copy(i.group.quaternion).multiply(this.seatQuat).multiply(r.q.setFromAxisAngle(r.z,s.p.x/.5)).multiply(r.q.setFromAxisAngle(r.x,s.p.y/.8)),n.pin(o,h,i.velocityAt(o,this._seatV||(this._seatV=new M)),i.angVel);let u=this.anim.ride;u.lift=s.p.y/.22,u.side=s.p.x/.2,u.fore=s.p.z/.2,u.slam=s.slam,s.slam>.55&&this.state==="playing"&&(this.impactBlur=Math.max(this.impactBlur,.12*s.slam))}launchIntroWave(t=10){return this.introWave=this.interaction.launch({lead:t,height:12.5,breakOffset:.2,angleOffset:0,width:190,speed:14}),this.introWave}boatPoint(t,e,i,n){return n.set(t,e,i).applyMatrix4(this.boat.holder.children[0].matrixWorld)}contactBoat(t){let e=this.boat,i=this.body,n=this.player,s=this.survival;this.clingCool=Math.max(0,(this.clingCool||0)-t);let r=n.swimHeld,o=r&&!this._swimWas;if(this._swimWas=r,!e.active||!e.loaded){this.clinging=!1,n.cling=!1,n.faceDir=null,this.nearBoat=99;return}let h=this._cb||(this._cb={c:new M,g:{},g2:{},out:new M,a:new M,f:new M,v:new M,l:new M,n:new M,Y:new M});if(h.c.set(0,.4,0).applyQuaternion(i.quat).add(i.pos),h.c.distanceToSquared(e.pos)>36){this.nearBoat=99,this.clinging&&this.letGo(!1);return}let c=e.nearestGrip(h.c,h.g);this.nearBoat=c.dist,h.Y.set(0,1,0).applyQuaternion(e.quat);for(let x=0;x<3;x++){let v=i.points[x],w=x===1?.15:.11,R=e.nearestGrip(v.world,h.g2),y=0;if(R.dist<Ee.tubeR+w)y=Ee.tubeR+w-R.dist,h.n.copy(v.world).sub(R.point),h.n.lengthSq()<1e-6&&h.n.copy(R.normal),this.clinging&&(h.n.y=Math.max(0,h.n.y),h.n.lengthSq()<1e-6&&h.n.copy(R.normal)),h.n.normalize();else{let T=h.l.copy(v.world).applyMatrix4(e.inv);if(Math.abs(T.x)<en(T.z)&&T.z>Ee.transomZ&&T.z<Ee.bowZ&&T.y>0&&T.y<Ee.floorY+w){let S=T.y>.17;y=S?Ee.floorY+w-T.y:T.y+w*.5,h.n.copy(h.Y).multiplyScalar(S?1:-1)}}if(y>0){e.velocityAt(v.world,h.v);let T=(i.vel.x-h.v.x)*h.n.x+(i.vel.y-h.v.y)*h.n.y+(i.vel.z-h.v.z)*h.n.z,S=Math.max(0,Math.min(2600,y*9e3-T*500));i.extForce.addScaledVector(h.n,S),e.pushAt(v.world,-h.n.x*S*.6,-h.n.y*S*.6,-h.n.z*S*.6)}}if(!this.clinging){let x=s.alive&&this.clingCool<=0&&c.dist<1.25&&!n.diveHeld&&!this.rescue.reach&&this.rescue.state!=="lift"&&n.air<.5;if(this.canCling=x,x&&o)this.clinging=!0,this.clingZ=c.z,this.clingSide=c.side,this.strain=0,this.clingNote=0,this.grip=Math.max(this.grip===void 0?1:this.grip,.35),this.runaway=0,this.grabT=3;else{n.cling=!1,n.faceDir=null,this.grip=Math.min(1,(this.grip===void 0?1:this.grip)+.03*t);return}}if(!s.alive||n.diveHeld){this.letGo(!1);return}let l=en(this.clingZ),u=en(this.clingZ+.05),d=(this._cg||(this._cg=new M)).set(this.clingSide*l,Oa(this.clingZ),this.clingZ).applyMatrix4(e.matrix),f=this.clingSide*(u-l),m=Math.hypot(f,.05);h.out.set(this.clingSide*.05/m,0,-this.clingSide*f/m).applyQuaternion(e.quat),h.out.y=0,h.out.lengthSq()<.04&&h.out.set(i.pos.x-d.x,0,i.pos.z-d.z),h.out.normalize(),h.c.set(0,.42,0).applyQuaternion(i.quat),this.squeezeK=(this.squeezeK||0)+((r?1:0)-(this.squeezeK||0))*(1-Math.exp(-t*6)),h.a.copy(d).addScaledVector(h.out,Ee.tubeR+.2-.07*this.squeezeK),h.a.y=i.surfaceH+.065+.05*this.squeezeK,h.l.copy(i.pos).add(h.c),e.velocityAt(d,h.v),h.n.copy(i.angVel).cross(h.c).add(i.vel),h.f.copy(h.a).sub(h.l).multiplyScalar(900),h.f.x-=(h.n.x-h.v.x)*230,h.f.y-=(h.n.y-h.v.y)*280,h.f.z-=(h.n.z-h.v.z)*230;let b=h.f.length(),g=r;this.needNow=b,this.squeeze=g,n.squeeze=g,this.grip=Math.max(0,Math.min(1,this.grip+(g?-(.17+.1*Math.min(1,b/600)):.06)*t)),this.grabT=Math.max(0,(this.grabT||0)-t);let p=(g?200+730*this.grip:200+130*this.grip)*(.5+.5*s.eff)*(.4+.6*n.control);this.grabT>0&&(p=Math.max(p,1e3),b<190&&(this.grabT=Math.min(this.grabT,.2))),this.strain=Math.max(0,this.strain+(b>p?t:-t*.8)),b>p&&h.f.multiplyScalar(p/b),i.extForce.add(h.f),i.extTorque.x+=h.c.y*h.f.z-h.c.z*h.f.y,i.extTorque.y+=h.c.z*h.f.x-h.c.x*h.f.z,i.extTorque.z+=h.c.x*h.f.y-h.c.y*h.f.x,e.pushAt(d,-h.f.x,-h.f.y,-h.f.z),h.c.add(i.pos),n.cling=!0,n.faceDir=(this._fd||(this._fd=new M)).copy(h.out).multiplyScalar(-1),(this.strain>.6||h.c.distanceTo(d)>1.9)&&this.letGo(!0)}letGo(t){this.clinging&&(this.clinging=!1,this.player.cling=!1,this.player.squeeze=!1,this.player.faceDir=null,this.clingCool=t?1.1:.7,t&&(this.tornAt=this.time,this.player.control=Math.min(this.player.control,.3),this.brnd()<.5&&this.startRunaway()),this.gustT=5+6*this.brnd())}startRunaway(){if(!this.boat.active||this.aboard)return;let t=this.weather.wind,e=Math.hypot(t.x,t.z)||1,i=(this.brnd()-.5)*.7;(this.runDir||(this.runDir=new M)).set((t.x*Math.cos(i)-t.z*Math.sin(i))/e,0,(t.x*Math.sin(i)+t.z*Math.cos(i))/e),this.runaway=5+4*this.brnd(),this.runNote=1.6}boatFrame(t){let e=this.boat;if(!e.active||!e.loaded)return;this.slamCool=Math.max(0,(this.slamCool||0)-t),this.state;{let s=this.spray,r=e.relSpeed;if(r>1.1&&e.subFrac>.03&&e.subFrac<.9){this.hullAcc=(this.hullAcc||0)+t*Math.min(46,(r-.9)*16);let o=e.group.quaternion,h=this._hs||(this._hs={l:new M,p:new M,n:new M,qi:new yt});h.l.copy(e.relFlow).applyQuaternion(h.qi.copy(o).invert());let c=Math.hypot(h.l.x,h.l.z)||1;h.l.x/=c,h.l.z/=c;let l=s.near;s.near=!0;let u=0;for(;this.hullAcc>=1&&u++<12;){this.hullAcc-=1;let d=-1.9+Math.random()*3.85,f=Math.random()<.5?-1:1,m=d>1.5,b=m?f*.5:f,g=m?.87:0;if(b*-h.l.x+g*-h.l.z<.2)continue;this.boatPoint(f*(en(d)+.2),.28,d,h.p);let p=this.waves.heightFast(h.p.x,h.p.z);if(Math.abs(h.p.y-p)>.45)continue;h.n.set(b,0,g).applyQuaternion(o);let x=.9+Math.random()*2.2*Math.min(1.6,r/2.2),v=.5+Math.random()*1.4;if(s.emit(h.p.x,p+.04,h.p.z,e.vel.x+h.n.x*v+e.relFlow.x*.25,e.vel.y*.3+x,e.vel.z+h.n.z*v+e.relFlow.z*.25,.4+Math.random()*.5,Math.random()<.25?.024+Math.random()*.02:.01+Math.pow(Math.random(),2)*.02,0,0,.95),Math.random()<.1){let w=(.26+.24*Math.random())*Math.min(1.6,r/2.2);s.lean=(h.n.x*s._rx+h.n.z*s._rz)*.5,s.emit(h.p.x,p-.02,h.p.z,e.vel.x+h.n.x*.5,0,e.vel.z+h.n.z*.5,.62*Math.sqrt(w/.45),w,3,0,.75,0),s.lean=0}}s.near=l}if(this.lightSlapCool=Math.max(0,(this.lightSlapCool||0)-t),e.slam>1.2&&e.slam<=2.4&&this.lightSlapCool<=0){this.lightSlapCool=.4;{let o=this.slamOut(),h=this._bt.n;s.slap(o.x,e.slamPos.y,o.z,Math.min(1.9,.5+e.slam*.5),h.x*.8,h.z*.8,e.vel.x,0,e.vel.z,2.2)}this.boatSlamK=Math.max(this.boatSlamK||0,.25+e.slam*.12),this.state!=="title"&&this.emit("boatSlam",{v:e.slam*.8,pan:0})}}if(e.slam>2.4&&this.slamCool<=0&&this.state!=="title"){this.slamCool=.5,this.boatSlamK=1;let s=Math.min(2.2,(e.slam-1.6)*.6);this.spray.burst(e.slamPos.x,e.slamPos.y,e.slamPos.z,s*.6,this.weather.wind);{let r=this.slamOut(),o=this._bt.n.x,h=this._bt.n.z;for(let c=0;c<3;c++){let l=(c-1)*.7,u=Math.cos(l),d=Math.sin(l),f=o*u-h*d,m=o*d+h*u;this.spray.slap(r.x+f*.3-o*.1,e.slamPos.y,r.z+m*.3-h*.1,Math.min(3,1.2+e.slam*.4),f,m,e.vel.x,0,e.vel.z,3)}}this.foam.addSplash(e.slamPos.x,e.slamPos.z,Math.min(1,.3+e.slam/8));{let r=this.camera.matrixWorld.elements,o=e.slamPos.x-this.camera.position.x,h=e.slamPos.z-this.camera.position.z,c=Math.hypot(o,h);this.emit("boatSlam",{v:e.slam*Math.min(1,9/(c+3)),pan:Math.max(-.8,Math.min(.8,(o*r[0]+h*r[2])/(c+.5)))})}}if(this.wasCapsized!==e.capsized&&(this.wasCapsized=e.capsized,this.state!=="title"&&(this.spray.burst(e.pos.x,this.waves.heightFast(e.pos.x,e.pos.z),e.pos.z,1.8,this.weather.wind),this.foam.addSplash(e.pos.x,e.pos.z,1),this.emit("boatSlam",{v:7,pan:0}))),!this.ui||this.state!=="playing")return;let i=this.isTouch?"\uD5E4\uC5C4":"Space",n=this.isTouch?"\uC785\uC218":"F";this.boatNote=Math.max(0,(this.boatNote||0)-t),this.clinging&&!this._clingWas?(this.ui.note(`\uB3CC\uD48D\xB7\uD070 \uD30C\uB3C4\uAC00 \uC62C \uB54C ${i} \uAFB9 \u2014 \uAF49 \uC954\uB2E4 \xB7 ${n} \uB193\uAE30`,4.5),this.boatNote=6):!this.clinging&&this._clingWas&&this.time-(this.tornAt||-9)<.3?(this.ui.note("\uB193\uCCE4\uB2E4",2.5),this.boatNote=4):!this.clinging&&!this.aboard&&this.canCling&&this.boatNote<=0&&(this.ui.note(`${i} \u2014 \uBCF4\uD2B8\uB97C \uBD99\uC7A1\uACE0 \uBC84\uD2F4\uB2E4`,3),this.boatNote=7),this._clingWas=this.clinging}contactShip(t){let e=this.cargo,i=this.body,n=this.player,s=this.survival;if(!e.active||!e.loaded||!s.alive){this.shipTouch=0;return}if(Math.hypot(i.pos.x-e.pos.x,i.pos.z-e.pos.z)>140){this.shipTouch=0,this.shipPrevZ=void 0;return}let r=this._sc||(this._sc={l:new M,n:new M,v:new M}),o=Math.sin(e.yaw),h=Math.cos(e.yaw),c=e.speed/5.5;r.v.set(o*e.speed,0,h*e.speed);let l=(g,p,x,v)=>v.set(g*h+x*o,p,-g*o+x*h);if(this.shipCaught){this.shipCaught+=t,e.toLocal(i.pos,r.l);let g=Math.max(-89,Math.min(89,r.l.z)),p=di.keelY(g),x=r.l.x>=0?1:-1,v=r.l.y<p-.8,w=v?r.l.x*.4:x*(di.halfBeam(g,r.l.y)+.55),R=i.vel.x*h-i.vel.z*o;l(Math.max(-900,Math.min(900,(w-r.l.x)*320-R*70)),0,0,r.n),i.extForce.add(r.n),i.extForce.y+=Math.max(-1100,Math.min(400,(p-2.6-r.l.y)*450))-i.vel.y*90,n.control=Math.min(n.control,.03),n.impact=Math.max(n.impact,1.3),this.impactBlur=Math.max(this.impactBlur,.25),(this.shipCaught>6.5||r.l.z<-80)&&this.killBy("ship");return}e.toLocal(i.pos,r.l);let u=this.shipPrevZ===void 0?r.l.z:this.shipPrevZ;if(this.shipPrevZ=r.l.z,u>87&&r.l.z<=87&&Math.abs(r.l.x)<7.5&&r.l.y>di.keelY(87)-3&&r.l.y<di.deckY(87)+4){this.shipCaught=.001,this.impactBlur=.9,n.impact=2.2,n.impactPeak=Math.max(n.impactPeak,2.2),this.emit("impact",{strength:3,dir:l(0,-.5,1,new M).normalize(),aer:0});return}let d=0;for(let g=0;g<3;g++){let p=i.points[g],x=g===1?.18:.13;if(e.toLocal(p.world,r.l),r.l.y<di.keelY(r.l.z)-x||r.l.y>di.deckY(r.l.z)+2.5)continue;let v=di.halfBeam(r.l.z,r.l.y);if(v<=.05)continue;let w=(di.halfBeam(r.l.z-1,r.l.y)-di.halfBeam(r.l.z+1,r.l.y))/2,R=Math.hypot(1,w),y=(v-Math.abs(r.l.x))/R+x;if(y<=0)continue;let T=r.l.x>=0?1:-1;if(r.l.z>-45&&c>.3){this.shipCaught=.001,this.impactBlur=.9,n.impact=2.2,n.impactPeak=Math.max(n.impactPeak,2.2),this.emit("impact",{strength:3,dir:l(T,-.4,0,new M).normalize(),aer:0});return}l(T/R,0,w/R,r.n);let S=(i.vel.x-r.v.x)*r.n.x+(i.vel.z-r.v.z)*r.n.z;i.extForce.addScaledVector(r.n,Math.max(0,Math.min(4500,y*9e3-S*700))),i.extForce.x+=(r.v.x-i.vel.x)*90,i.extForce.z+=(r.v.z-i.vel.z)*90,d=Math.max(d,-S)}d>1.2&&!(this.shipTouch>0)&&(n.impact=Math.max(n.impact,Math.min(2,.6+d*.3)),n.impactPeak=Math.max(n.impactPeak,n.impact),this.impactBlur=Math.max(this.impactBlur,.35),this.emit("impact",{strength:Math.min(2.5,.8+d*.4),dir:r.n.clone(),aer:0})),this.shipTouch=d>0?.4:Math.max(0,(this.shipTouch||0)-t),e.toLocal(i.pos,r.l);let f=di.halfBeam(Math.max(-89,Math.min(89,r.l.z))),m=Math.abs(r.l.x)-f,b=r.l.x>=0?1:-1;if(r.l.z>-95&&r.l.z<100&&m<20&&r.l.y>-12)if(r.l.z>55){let g=Math.max(0,1-Math.max(0,m)/12)*Math.min(1,(r.l.z-55)/30)*c*Math.min(1,Math.max(0,(Math.abs(r.l.x)-6)/3));l(b,0,.6,r.n).normalize(),i.extForce.addScaledVector(r.n,220*g),i.extForce.y+=110*g}else{let g=Math.max(0,1-Math.max(0,m)/20)*c;l(-b,0,0,r.n),i.extForce.addScaledVector(r.n,380*g*g+70*g),m<5&&(i.extForce.y-=240*(1-Math.max(0,m)/5)*c)}r.l.z>89&&r.l.z<115&&Math.abs(r.l.x)<8&&(l(0,0,1,r.n),i.extForce.addScaledVector(r.n,220*c*(1-(r.l.z-89)/26)));{let g=r.l.x,p=r.l.y+5.5,x=r.l.z+87.5,v=Math.hypot(g,p,x);if(v<26&&r.l.z<-70){let w=(1-v/26)*c;l(-g/v,0,-x/v,r.n),r.n.y=-p/v,i.extForce.addScaledVector(r.n,520*w),v<3.4&&this.killBy("ship")}}}killBy(t){let e=this.survival;e.alive&&(e.alive=!1,e.cause=t,e.blackout=1,e.events.push({type:"dead",cause:t}),this.impactBlur=1,this.player.impact=2.5,this.player.impactPeak=Math.max(this.player.impactPeak,2.5),this.emit("impact",{strength:3,dir:new M(0,-1,0),aer:0}))}shipFrame(t){let e=this.cargo;if(!e.active||!e.loaded||this.state==="title")return;let i=this.camera.position;if(Math.hypot(i.x-e.pos.x,i.z-e.pos.z)>320)return;let n=this._sf||(this._sf={p:new M,q:new M}),s=e.speed/5.5,r=Math.sin(e.yaw),o=Math.cos(e.yaw),h=this.spray,c=h.near;h.near=i.distanceTo(e.pos)<70,this.bowAcc=(this.bowAcc||0)+t*24*s*(1+Math.max(0,-e.heaveV)*.5+Math.max(0,e.pitchV)*8);let l=0;for(;this.bowAcc>=1&&l++<24;){this.bowAcc-=1;let u=80+Math.random()*8.5,d=Math.random()<.5?-1:1,f=di.halfBeam(u);e.toWorld(n.q.set(d*(f+.2),0,u),n.p);let m=this.waves.heightFast(n.p.x,n.p.z),b=d*o,g=-d*r,p=1.4+Math.random()*3.2,x=1+Math.random()*3;h.emit(n.p.x,m+.05,n.p.z,e.speed*r*.75+b*p,x,e.speed*o*.75+g*p,.6+Math.random()*.7,Math.random()<.3?.03+Math.random()*.04:.012+Math.random()*.02,0,0,.9)}h.near=c}throwOff(){if(!this.aboard)return;let t=this.body,e=this.boat;this.aboard=!1,e.rider=0,e.flipArmed=!1,e.keepYaw=null;let i=(this._tv||(this._tv=new M)).set(0,1,0).applyQuaternion(e.quat);t.vel.addScaledVector(i,2),t.vel.y+=1,t.vel.y>6.5&&(t.vel.y=6.5),t.angVel.copy(e.angVel).multiplyScalar(.9),this.player.control=.04,this.player.impact=Math.max(this.player.impact,1.8),this.player.impactPeak=Math.max(this.player.impactPeak,1.8),this.anim.hold=null,this.acc=0,this.impactBlur=Math.max(this.impactBlur,.6),this.emit("impact",{strength:2.6,dir:i.clone(),aer:e.aer}),this.thrownAt=this.time,this.clingCool=2.5,this.ui&&this.state==="playing"&&this.ui.note(this.isTouch?"\uD5E4\uC5C4 \xB7 \uC785\uC218":"Space \uD5E4\uC5C4 \xB7 F \uC785\uC218",6)}buildEffects(){let t=this.perf.profile;if(this.rain){this.scene.remove(this.rain.group,this.spray.mesh,this.underwater.group);for(let e of[this.rain.group,this.spray.mesh,this.underwater.group])e.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()});this.foam.enabled&&this.foam.rt.forEach(e=>e.dispose()),this.lens.rt.dispose()}this.rain=new To(t),this.spray=new Ao(this.waves,t.spray),this.foam=new ho(this.renderer,t.foamAcc),this.underwater=new Ro(this.waves,t),this.lens=new uo(this.renderer,t.lensDrops),this.scene.add(this.rain.group,this.spray.mesh,this.underwater.group),this.post.u.tLens.value=this.lens.texture,this.interaction?this.interaction.spray=this.spray:this.interaction=new co(this.waves,this.body,this.player,this.spray),this.underwater.onEnter=()=>{this.underwater.burstAt(this.camera.position,46,.8),this.impactBlur=Math.max(this.impactBlur,.5),this.emit("camEnter")},this.underwater.onExit=()=>{this.lens.spawn(Math.round(14+20*(1-this.cam.blend)),1),this.lens.sheet=1,this.emit("camExit")},this.interaction.onImpact=e=>{let i=Math.min(1,e.strength/3);this.impactBlur=Math.max(this.impactBlur,i),this.underwater.burst=Math.max(this.underwater.burst,i),this.underwater.isUnder||this.lens.spawn(Math.round((6+16*i)*(1.6-this.cam.blend)),1),this.foam.addSplash(this.body.pos.x,this.body.pos.z,1),this.emit("impact",e)},this.interaction.onSplash=(e,i)=>{!this.underwater.isUnder&&this.cam.blend<.5&&this.lens.spawn(2),this.foam.addSplash(i.x,i.z,Math.min(1,e/4)),this.emit("splash",{v:e,pos:i})}}setQuality(t){this.perf.setProfile(t),Ai.set("quality",t);let e=this.perf.profile;this.ocean.applyProfile(e),this.sky.envRT.setSize(e.envSize,e.envSize/2),this.post.levels=e.bloomLevels,this.buildEffects(),this.resize(!0)}setState(t){this.state=t,this.ui&&this.ui.show(t,{time:this.survival.timeAlive,cause:this.survival.cause})}start(){this.audio.start(),this.resetPlayer(),!this.pendingScenario&&!this.scenarios.active&&this.board(),this.cam.script=null,this.input.enabled=!0,this.pendingScenario?(this.scenarios.run(this.pendingScenario),this.pendingScenario=null):this.scenarios.active||(this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=this.aboard?58:22,this.interaction.megaNext=105+Math.random()*40,this.introWaveAt=this.aboard?this.time+9.5:0),this.isTouch?this.goFullscreen():this.input.lock(),this.setState("playing"),this.scenarios.active||(this.cam.setMode(this.cam.mode),this.cam.cine={mode:"intro",t:0,dur:4.5},this.introStrike=1.3),this.ui&&this.ui.note(this.aboard?`\uBCF4\uD2B8\uAC00 \uD288 \uB54C ${this.isTouch?"\uBD99\uC7A1\uAE30":"Space"} \uAFB9 \u2014 \uAF49 \uBD99\uC7A1\uC544\uB77C`:this.isTouch?"\uD5E4\uC5C4 \xB7 \uC785\uC218":"Space \uD5E4\uC5C4 \xB7 F \uC785\uC218",6),this.last=performance.now()}pause(){this.state==="playing"&&(this.input.enabled=!1,this.audio.suspend(),this.isTouch||this.input.unlock(),this.setState("paused"))}resume(){this.state!=="playing"&&(this.audio.start(),this.audio.resume(),this.input.enabled=!0,this.cam.script=null,this.isTouch||this.input.lock(),this.setState("playing"),this.last=performance.now())}restart(){this.scenarios.stop(),this.weather.locked=!1,this.weather.base=1;for(let t of this.waves.breakers)t.active=!1;this.rescue.reset(240),this.shipAt=55+Math.random()*30,this.shipTold=!1,this.shipPassed=!1,this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=22,this.interaction.megaNext=80+Math.random()*40,this.resetPlayer(),this.board(),this.aboard&&(this.interaction.next=58,this.introWaveAt=this.time+9.5),this.resume(),this.ui&&this.aboard&&this.ui.note(`\uBCF4\uD2B8\uAC00 \uD288 \uB54C ${this.isTouch?"\uBD99\uC7A1\uAE30":"Space"} \uAFB9 \u2014 \uAF49 \uBD99\uC7A1\uC544\uB77C`,6)}resetPlayer(){this.body.reset(this.body.pos.x,this.body.pos.z),this.survival.reset(),this.survival.events.length=0,this.player.brace=0,this.player.air=0,this.player.control=1,this.player.diveBlend=0,this.player.riseBlend=0,this.player.crawlBlend=0,this.player.swimBlend=0,this.player.underSwim=0,this.player.impact=0,this.player.impactPeak=0,this.player.tumble=0,this.player.events.length=0,this.cam.qd.identity(),this.cam.inited=!1,this.deadTimer=0,this.impactBlur=0,this.mouthUnder=!1,this.wonTimer=0,this.cargo.hide(),this.shipCaught=0,this.shipTouch=0,this.shipPrevZ=void 0,this.waveMode=!1,this.player.waveMode=!1,this.waveTold=!1,this.lifting=!1,this.liftIn=0,this.anim.force=null,this.cam.cine=null,this.timeScale=1,this.slowLeft=1.4,this.slowWant=1,this.grabNote=0,this.post.u.uFade.value=0,this.post.u.uTunnel.value=0,this.post.u.uDesat.value=0,this.lens.wipe(),this.limbs.reset(),this.aboard=!1,this.anim.hold=null,this.boat.hide(),this.clinging=!1,this.player.cling=!1,this.player.faceDir=null,this.introWave=null,this.introWaveAt=0,this.grip=1,this.slip=0,this.aboardLoose=0,this._slipTold=!1,this.fear=.45,this.gustTold=!1,this.squeeze=!1,this.squeezeK=0,this.runaway=0,this.gustT=6,this.brnd=ci(977),this.player.squeeze=!1,this.thrownAt=-99,this.wasCapsized=!1,this.clingCool=0,this.syncCharacter(1),this.character.group.updateMatrixWorld(!0)}goFullscreen(){try{let t=document.documentElement,e=t.requestFullscreen?t.requestFullscreen():null;e&&e.catch&&e.catch(()=>{})}catch{}}resize(t){let e=window.innerWidth,i=window.innerHeight,n=Math.min(window.devicePixelRatio||1,2);this.renderer.setSize(Math.round(e*n),Math.round(i*n),!1),this.canvas.style.width=e+"px",this.canvas.style.height=i+"px",this.camera.aspect=e/i,this.cam.portrait=ft((1-e/i)/.5),this.camera.updateProjectionMatrix();let[s,r]=this.perf.renderSize(Math.round(e*n),Math.round(i*n));this.post.useOpaque=this.perf.profile.refraction,this.post.fxaa=this.perf.profile.fxaa,this.post.setSize(s,r,t===!0),this.ocean.uniforms.uSceneColor.value=this.post.rtOpaque.texture,this.ocean.uniforms.uSceneDepth.value=this.post.rtOpaque.depthTexture}emit(t,e){for(let i=0;i<this.listeners.length;i++)this.listeners[i](t,e)}syncCharacter(t){let e=this.character.group,i=this.body;e.position.lerpVectors(i.prevPos,i.pos,t),e.quaternion.slerpQuaternions(i.prevQuat,i.quat,t)}step(t){this.time+=t,st.uTime.value=this.time,this.scenarios.update(t),this.weather.update(t),this.waves.update(t),st.uWaveA.value=this.waves.uA,st.uWaveB.value=this.waves.uB,st.uBrkA.value=this.waves.uBrkA,st.uBrkB.value=this.waves.uBrkB,st.uBrkC.value=this.waves.uBrkC,this.body.wind.copy(this.weather.wind),this.body.breathVol=(this.survival.lung-.55)*3.2,this.acc+=t;let e=0;if(this.studio){let y=this.studio,T=this.body;T.pos.set(y.x,y.y,y.z),T.prevPos.copy(T.pos),T.vel.set(0,0,0),T.angVel.set(0,0,0),T.quat.copy(y.quat),T.prevQuat.copy(y.quat),T.relFlow.set(0,0,0),T.relSpeed=0,this.anim.force=y.state,this.anim.forcePhase=y.phase,this.acc=0}if(this.lifting){let y=this.body,T=this.rescue;y.prevPos.copy(y.pos),y.prevQuat.copy(y.quat);let S=T.hangDir,_=this._liftQ||(this._liftQ=new yt),E=this._liftQ2||(this._liftQ2=new yt);_.setFromUnitVectors(this._up||(this._up=new M(0,1,0)),S),E.setFromAxisAngle(this._up,T.ringSpin),_.multiply(E);let I=(this._liftP||(this._liftP=new M)).copy(T.ring).addScaledVector(S,-.2);this.liftIn||((this.liftOff||(this.liftOff=new M)).copy(y.pos).sub(I),(this.liftQ0||(this.liftQ0=new yt)).copy(y.quat),this.liftOff.length()>2&&this.liftOff.setLength(2)),this.liftIn=Math.min(1,(this.liftIn||0)+t/1.1);let W=this.liftIn*this.liftIn*(3-2*this.liftIn);y.pos.copy(I).addScaledVector(this.liftOff,1-W),y.quat.copy(this.liftQ0).slerp(_,W),y.vel.copy(T.vel),y.angVel.set(0,0,0),y.subFrac=Math.max(0,Math.min(1,(this.waves.heightFast(y.pos.x,y.pos.z)-y.pos.y+.6)/1.5)),y.mouthDepth=-2,y.eyeDepth=-2,y.relSpeed=0,y.dragG=0,this.anim.force="hang",this.acc=0}{let y=this.boat;y.tow.set(0,0,0);let T=this.time-(this.thrownAt||-99);if(y.active&&!this.aboard&&T<16){let _=this.body.pos.x-y.pos.x,E=this.body.pos.z-y.pos.z,I=Math.hypot(_,E)+.001;if(I>5.5){let W=((y.vel.x-this.body.vel.x)*_+(y.vel.z-this.body.vel.z)*E)/I,Y=Math.max(0,Math.min(3200,(I-5.5)*420-W*700))*Math.min(1,(16-T)/4);y.tow.set(_/I*Y,0,E/I*Y)}}if(this.gustPull=0,y.active&&this.clinging){let _=ft((this.weather.gust-1.12)/.18);if(_>0){let E=this.weather.wind,I=Math.hypot(E.x,E.z)||1,W=1900*_*_;y.tow.x+=E.x/I*W,y.tow.z+=E.z/I*W}this.gustPull=_,_>.45&&!this.gustTold&&this.ui&&this.state==="playing"&&(this.gustTold=!0,this.ui.note(`\uB3CC\uD48D\uC774 \uBCF4\uD2B8\uB97C \uC7A1\uC544\uCC48\uB2E4 \u2014 ${this.isTouch?"\uD5E4\uC5C4":"Space"} \uAFB9`,3.5))}if(y.active&&!this.aboard&&!this.clinging&&T>=16&&this.state==="playing"&&(this.gustT=(this.gustT===void 0?6:this.gustT)-t,this.gustT<=0&&(this.gustT=6+9*this.brnd(),this.runaway<=0&&this.brnd()<.5&&this.startRunaway())),this.runaway>0&&y.active)if(this.runaway-=t,this.clinging||this.aboard)this.runaway=0;else{let _=Math.min(1,this.runaway/1.5)*1100;y.tow.x+=this.runDir.x*_,y.tow.z+=this.runDir.z*_,this.runNote-=t,this.runNote<=0&&this.runNote>-1&&this.ui&&y.pos.distanceTo(this.body.pos)>7&&(this.runNote=-2,this.ui.note("\uBCF4\uD2B8\uAC00 \uB5A0\uBC00\uB824 \uAC04\uB2E4",3),this.boatNote=6)}y.active&&!this.aboard&&y.pos.distanceToSquared(this.body.pos)>150*150&&y.hide(),y.wind.copy(this.weather.wind),this.bacc+=t;let S=0;for(;y.active&&this.bacc>=Wi&&S<8;)y.step(Wi),this.bacc-=Wi,S++;if((S===8||!y.active)&&(this.bacc=0),y.sync(this.bacc/Wi),this.aboard){if(this.washT=this.body.mouthDepth>.05?this.washT+t:0,y.flipping>0&&(y.upY<.4||y.sitUp<.5)||y.upY<.1||y.angVel.length()>3.4||this.washT>1.3||!y.active||this.lifting)this.throwOff();else if(this.pinToBoat(!1,t),this.anim.hold="aboard",this.acc=0,this.state==="playing"&&this.survival.timeAlive>5.5){let _=this.input.enabled&&this.input.swim(),E=this.rid;this.squeeze=_,this.grip=Math.max(0,Math.min(1,this.grip+(_?-.15:.075)*t));let I=ft((E.d.length()-3.2)/5)+.8*ft(E.p.y/.1),W=_&&this.grip>.03;this.slip=Math.max(0,(this.slip||0)+(W?-1.4:I*.8+.085)*t),this.aboardLoose=(this.aboardLoose||0)+((W?0:Math.min(1,this.slip*1.6))-(this.aboardLoose||0))*(1-Math.exp(-t*8)),this.slip>.45&&!this._slipTold&&this.ui&&(this._slipTold=!0,this.ui.note(`\uC190\uC774 \uD480\uB9B0\uB2E4 \u2014 ${this.isTouch?"\uBD99\uC7A1\uAE30":"Space"} \uAFB9`,3)),this.slip>1&&(this.throwOff(),y.flipArmed=y.upY>.3,this.ui&&this.ui.note("\uBCF4\uD2B8\uC5D0\uC11C \uB5A8\uC5B4\uC84C\uB2E4",3))}}}this.introWaveAt&&this.time>=this.introWaveAt&&(this.introWaveAt=0,this.boat.active&&this.state==="playing"&&this.launchIntroWave(10.5));{let y=this.introWave,T=this.boat;if(y&&y.active&&(this.aboard||T.flipArmed)&&y.age<y.tBreak){let S=(T.pos.x-y.ox)*y.dx+(T.pos.z-y.oz)*y.dz-y.s;if(S>3){let _=Math.max(5,y.speed-(T.vel.x*y.dx+T.vel.z*y.dz));y.tBreak+=(y.age+S/_+.15-y.tBreak)*(1-Math.exp(-t*2.5))}}else y&&!y.active&&(this.introWave=null)}for(;!this.studio&&!this.lifting&&!this.aboard&&this.acc>=Wi&&e<8;)this.player.fixedUpdate(Wi),this.contactBoat(Wi),this.contactShip(Wi),this.body.step(Wi),this.acc-=Wi,e++;e===8&&(this.acc=0),this.mouthUnder=this.mouthUnder?this.body.mouthDepth>-.015:this.body.mouthDepth>.03;let i=this.survival;this.state!=="title"&&this.state!=="won"&&!this.lifting&&i.update(t,{mouthUnder:this.mouthUnder,effort:this.player.effort,turb:this.body.turb,subFrac:this.body.subFrac,storm:this.weather.storm,sudden:this.player.impact>.8,brace:Math.max(this.player.brace,this.player.diveHeld?1:0)}),this.syncCharacter(this.acc/Wi);{let y=this.anim.reach,T=this.boat,S=0;if(this.aboard&&T.loaded)S=1,this.boatPoint(.875,.4,.22,y[0].pos),this.boatPoint(.47,.55,.58,y[1].pos),this._looseHand=this.aboardLoose>.35;else if(this.clinging&&T.loaded){S=1,this.anim.hold="cling";let _=this.clingZ,E=this.clingSide,I=en(_),W=this.boatPoint(E*I,Oa(_),_,this._rg||(this._rg=new M)),Y=(this._ro||(this._ro=new M)).set(this.character.group.position.x-W.x,0,this.character.group.position.z-W.z);Y.lengthSq()<1e-4&&Y.set(E,0,0).applyQuaternion(T.group.quaternion),Y.y=0,Y.normalize();let k=Y.z,z=-Y.x;for(let O=0;O<2;O++){let U=O===0?.21:-.21;y[O].pos.set(W.x+k*U+Y.x*.115,W.y+.165,W.z+z*U+Y.z*.115)}}else if(this.lifting){S=Math.min(1,(this.liftIn||0)*1.6);let _=this.character.group,E=this.rescue.ringR,I=this.rescue.ringT,W=.01*Math.sin(this.time*2.3),Y=.2;for(let z=0;z<2;z++){let O=z===0?1:-1,U=z===0?.8:.92,N=E+I*.72;y[z].pos.set(O*Math.cos(U)*N,Y+I*.55+(z===0?W:-W),Math.sin(U)*N).applyQuaternion(_.quaternion).add(_.position),y[z].pole||(y[z].pole=new M),y[z].pole.set(O*(E+I+.1),Y+I+.07,-.02).applyQuaternion(_.quaternion).add(_.position),y[z].usePole=!0}let k=Math.max(0,1-this.rescue.liftT/7);for(this.dripAcc=(this.dripAcc||0)+t*46*k*k;this.dripAcc>=1;){this.dripAcc-=1;let z=Math.random()<.6,O=(Math.random()-.5)*.3,U=z?-.86-Math.random()*.08:-.1-Math.random()*.5,N=(Math.random()-.5)*.2,D=(this._dp||(this._dp=new M)).set(O,U,N).applyQuaternion(_.quaternion).add(_.position),P=this.rescue.vel;this.spray.emit(D.x,D.y,D.z,P.x+(Math.random()-.5)*.5,P.y-.4-Math.random()*.8,P.z+(Math.random()-.5)*.5,.9+Math.random()*.5,.01+Math.random()*.014,0,0,.9)}}else this.anim.hold==="cling"&&(this.anim.hold=null);if(this.lifting||(y[0].usePole=!1,y[1].usePole=!1),y[0].on=S,y[1].on=S&&this.aboard&&this._looseHand?.15:S,this.character.glb&&this.character.glb.setGrip){let _=y[0].w>.5?1:0;this.character.glb.setGrip(_,_)}}if(this.anim.update(t),this.character.retarget(),this.character.group.updateMatrixWorld(!0),this.body.syncLimbs(this.character),this.boatFrame(t),this.shipFrame(t),this.state==="title")this.interaction.next=Math.max(this.interaction.next,8),this.interaction.megaNext=Math.max(this.interaction.megaNext,40),this.cam.script||(this.cam.script={yaw:-Math.PI/2,pitch:-.07}),this.cam.blend=1,this.cam.orbit=this.time*.11;else if(this.cam.orbit!==0&&!this.keepOrbit){let y=((this.cam.orbit+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;this.cam.orbit=Math.abs(y)<.01?0:y*Math.exp(-t*3)}{let y=this.cam.interest,T=this.interaction,S=this.body;if(T.crestDist<130&&T.crestDist>6&&T.crestHeight>4)y.x=S.pos.x-T.crestDx*60,y.z=S.pos.z-T.crestDz*60,y.w=ft(T.crestHeight/10)*ft(1.2-T.crestDist/130);else if(this.cargo.active&&(this.cargo.phase==="coming"||this.cargo.phase==="passing")&&Math.hypot(this.cargo.pos.x-S.pos.x,this.cargo.pos.z-S.pos.z)<480){let _=this.cargo.soundPoints(this._shipSnd||(this._shipSnd={}));y.x=_.bow.x,y.z=_.bow.z,y.w=.5}else if(this.boat.active&&!this.aboard&&this.time-(this.thrownAt||-99)<9)y.x=this.boat.pos.x,y.z=this.boat.pos.z,y.w=.75;else if(this.rescue.state==="hover"||this.rescue.state==="inbound"){let _=this.rescue.state==="hover"?this.rescue.ring:this.rescue.pos;y.x=_.x,y.z=_.z,y.w=.6}else y.w=0;this.cam.oxygen=this.survival.alive?this.survival.oxygen:100,this.cam.shiver=this.survival.shiver}this.cam.armAdd=(this.cam.armAdd||0)+((this.aboard||this.time-(this.thrownAt||-99)<4?1.5:0)-(this.cam.armAdd||0))*(1-Math.exp(-t*1.2)),this.cam.holdAbove=!this.aboard&&this.time-(this.thrownAt||-99)<6.5,this.cam.fpLift=(this.cam.fpLift||0)+((this.aboard?.27:0)-(this.cam.fpLift||0))*(1-Math.exp(-t*(this.aboard?3:9))),this.cam.update(t);let n=this.camera.position,s=this.weather.wind,r=this.weather.storm;this.mouthWorld.copy(this.body._mouth).applyQuaternion(this.character.group.quaternion).add(this.character.group.position),this.underwater.update(t,this.camera,this.cam.surfaceAtCam,this.body,this.player,i,this.post,this.weather,this.mouthWorld,this.post.h),this.camUnder=this.underwater.under;let o=i.events;for(let y=0;y<o.length;y++){let T=o[y];T.type==="submerge"&&this.underwater.burstAt(this.mouthWorld,34,.45),T.type==="surface"&&(this.player.recover=2+4*T.need),this.emit(T.type,T)}o.length=0,this.introStrike>0&&(this.introStrike-=t,this.introStrike<=0&&this.lightning.strike(n,{azimuth:this.cam.yaw+.5,dist:1500,sheet:0,power:1.4})),this.lightning.update(t,n,r>.3?.3+.9*r:0,this.autoLightning),this.interaction.update(t,n,this.camUnder,s);let h=this.interaction.crestDist,c=this.interaction.crestHeight,l=c>18?60:30,u=i.alive&&h>-2&&h<l&&c>5?ft(1-h/l)*ft(c/9):0;this.player.brace+=(u-this.player.brace)*(1-Math.exp(-t*5)),this.cam.threat=this.interaction.threat,this.cam.crestDist=h,this.cam.crestHeight=c,this.cam.crestDx=this.interaction.crestDx||0,this.cam.crestDz=this.interaction.crestDz||0;let d=this.rescue,f=d.state==="hover",m=this.input.enabled&&this.player.swimHeld;d.update(t,this.body.pos,s,i.timeAlive,i.alive,this.spray,this.state==="playing",this.camera.position,m);{let y=this.cargo,T=this.body;if(!y.active&&y.loaded&&this.state==="playing"&&!this.scenarios.active&&i.alive&&!this.aboard&&!this.lifting&&d.state==="none"&&this.shipAt&&i.timeAlive>=this.shipAt&&(this.shipAt=0,y.start(T.pos)),y.update(t,this.camera,st.uResolution.value.y,T.pos,this.player.moveAmt),y.keepOutside(this.camera.position,this.cam.pivot),y.active){let S=y.soundPoints(this._shipSnd||(this._shipSnd={}));for(let E of y.events)E.type==="horn"&&this.emit("shipHorn",{long:E.long,pos:S.horn});let _=Math.hypot(T.pos.x-y.pos.x,T.pos.z-y.pos.z);!this.shipTold&&_<340&&y.phase==="coming"&&this.ui&&this.state==="playing"&&i.alive&&(this.shipTold=!0,this.ui.note("\uD654\uBB3C\uC120\uC774 \uC774\uCABD\uC73C\uB85C \uC628\uB2E4 \u2014 \uC606\uC73C\uB85C \uD5E4\uC5C4\uCCD0 \uBC43\uAE38\uC5D0\uC11C \uBC97\uC5B4\uB098\uB77C",7)),y.phase==="going"&&!this.shipPassed&&i.alive&&(this.shipPassed=!0,d.arriveAt=Math.min(d.arriveAt,i.timeAlive+30)),d.state==="none"&&y.beamFrom&&(st.uSpotPos.value.copy(y.beamFrom),st.uSpotDir.value.copy(y.beamAxis),st.uSpotP.value.set(Math.cos(Math.atan(y.beamTan)),.8,55,0)),this.shipSnd={on:!0,engine:S.engine,bow:S.bow,prop:S.prop,speedK:y.speed/5.5,propDist:S.prop.distanceTo(this.camera.position)}}else this.shipSnd=null;y.events.length=0,this.waveMode=!1,this.player.waveMode=!1}this.player.grab=d.state==="hover"&&d.gripping?d.ring:null;let b=this.isTouch?"\uD5E4\uC5C4":"Space";this.ui&&this.state==="playing"&&(!f&&d.state==="hover"&&this.ui.note(`\uAD6C\uC870 \uD5EC\uAE30 \u2014 \uD29C\uBE0C\uAE4C\uC9C0 \uAC00\uC11C ${b}\uB97C \uAFB9 \uB20C\uB7EC \uBD99\uC7A1\uC544\uB77C`,8),this.grabNote-=t,d.slipped?(d.slipped=!1,this.ui.note("\uB193\uCCE4\uB2E4",2.5),this.grabNote=3):d.reach&&!d.gripping&&this.grabNote<=0&&(this.ui.note(`${b}\uB97C \uAFB9 \uB20C\uB7EC \uBD99\uC7A1\uC544\uB77C`,2.5),this.grabNote=4)),d.state==="lift"&&!this.lifting&&(this.lifting=!0,this.input.enabled=!1,this.interaction.auto=!1,this.autoLightning=!0,this.cam.setMode("third"),this.cam.cine={mode:"lift",t:0,yaw0:this.cam.yaw},this.emit("surface",{need:1,time:6})),d.rescued&&this.state==="playing"&&(this.wonTimer+=t,this.post.u.uFade.value=Math.max(0,Math.min(.9,(this.wonTimer-9.5)/2.2)),this.wonTimer>11.5&&!this.manual&&(this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("won")));{let y=!!this.cam.cine||this.lifting;y!==!!this.cineOn&&(this.cineOn=y,this.ui&&this.ui.cine(y))}{let y=this.interaction,T=i.alive&&!this.lifting&&(this.player.brace>.7&&y.crestDist<7&&y.crestDist>-2&&y.crestHeight>7||this.player.air>.6),S=this.realDt||t;T&&this.slowLeft>0?(this.slowWant=.42,this.slowLeft-=S):(this.slowWant=1,T||(this.slowLeft=Math.min(1.4,this.slowLeft+S*.2)))}let g=this.body.subFrac<.05&&this.body.pos.y-this.body.surfaceH>1?1:0;this.player.air+=(g-this.player.air)*(1-Math.exp(-t*(g?10:4)));{let y=this.mouthUnder&&i.alive&&!this.aboard;if(y&&!this._washWas&&(this._washPend=(this.clearFor||0)>.45&&!this.player.diveHeld&&this.body.mouthDepth<.7&&this.state==="playing",this._washLive=!1,this._washT=0),y&&(this._washT=(this._washT||0)+t,this._washPend&&this._washT>=(this.player.crawlBlend>.5?.32:0)&&(this._washPend=!1,this._washLive=!0,this.washAt=this.time,this.anim.flinch=this.player.crawlBlend>.5?.6:1,this.anim.flinchSide=Math.random()<.5?-1:1,this.time-(this.gulpAt||-9)>2.5&&Math.random()<(i.inhaling?.8:.3)&&(this.gulpAt=this.time,i.swallow=Math.min(1,i.swallow+.25),i.oxygen=Math.max(0,i.oxygen-3),this._gulped=!0),this.audio.gurgle(.9),this.cam.blend<.5&&(this.body.eyeDepth>-.02&&(this.lens.sheet=Math.max(this.lens.sheet,.5)),this.impactBlur=Math.max(this.impactBlur,.22)))),!y&&this._washWas&&this._washLive&&this.time-(this.washAt||-9)<3&&i.alive&&this.state==="playing"){let T=this.mouthWorld,S=this.player.heading;for(let _=0;_<9;_++)this.spray.emit(T.x+S.x*.06,T.y,T.z+S.z*.06,S.x*(1.2+Math.random()*1.6)+(Math.random()-.5)*.8,.4+Math.random()*1.1,S.z*(1.2+Math.random()*1.6)+(Math.random()-.5)*.8,.3+Math.random()*.3,.008+Math.random()*.012,0,0,.95);this.voiceDir.say(this._gulped?"cough":"sputter",5,.95,this.vst),this._gulped&&(this.coughSeq=Math.max(this.coughSeq,2.2),this.coughT=.25),this._gulped=!1,this.cam.blend<.5&&this.lens.spawn(12,1)}this.clearFor=y?0:(this.clearFor||0)+t,this._washWas=y}{let y=this.time-(this.thrownAt||-99),T=i.alive?Math.min(1,.4+.4*this.interaction.threat+.25*ft((72-i.oxygen)/50)+.22*i.swallow+.2*ft(this.player.impact)+(this.mouthUnder?.18:0)+.3*ft(1-y/14)+.18*ft((40-i.stamina)/40)+(this.aboard?.3*ft(this.rid.d.length()/9):0)):0;this.fear=(this.fear||0)+(T-(this.fear||0))*(1-Math.exp(-t*(T>(this.fear||0)?4:.4))),this.player.fear=this.state==="title"?.3:this.fear,this.cam.shiver=Math.max(this.cam.shiver||0,1.5*Math.max(0,this.fear-.5))}let p=this.vst;p.alive=i.alive,p.blackout=i.blackout,p.mouthUnder=this.mouthUnder,p.under=this.mouthUnder,p.camUnder=this.underwater.isUnder,p.oxygen=i.oxygen,p.impact=this.player.impact,p.brace=this.player.brace,p.crestDist=h,p.crestHeight=c,p.gaspTimer=i.gaspTimer,p.inhaling=i.inhaling,p.breathPhase=i.breathPhase,p.stamina=i.stamina,p.effort=this.player.effort,p.temp=i.temp,p.swallow=i.swallow,p.air=this.player.air,p.exertion=i.exertion,p.struggle=this.anim.w.struggle,p.dive=this.player.diveHeld,p.tumble=this.player.tumble,p.turb=this.body.turb,p.fear=this.player.fear||0,p.mouthDepth=this.body.mouthDepth,this.coughSeq>0&&(this.coughSeq-=t,this.coughT-=t,this.coughT<=0&&(this.anim.coughKick=1,this.coughT=.42+Math.random()*.2,this.cam.blend<.5&&i.alive&&(this.impactBlur=Math.max(this.impactBlur,.14)))),this.face.update(t,p),this.state!=="title"&&this.voiceDir.update(t,p),this.limbs.update(t,this.spray,s,!this.aboard),this.spray.seedCrests(t,n,s,r,Math.min(40,1500*t)*(this.perf.profile.spray/9e3));{let y=this.time-(this.thrownAt||-99);this.spray.thin=y<6?.3:y<10?.3+.7*(y-6)/4:1}this.spray.seedBreakers(t,n,s);{let y=this.camera.matrixWorld.elements;this.spray._rx=y[0],this.spray._rz=y[2]}this.spray.update(t,n,s),this.rain.update(t,this.camera,s,this.weather.rain,this.camUnder,this.post.h);let x=this.post.u;this.impactBlur=Math.max(0,this.impactBlur-t*.9),x.uBlur.value=this.impactBlur*2.6,x.uSheet.value=this.lens.sheet,x.uWhiteout.value=this.interaction.whiteout*(this.time-(this.thrownAt||-99)<10?.3:1),x.uMotionBlur.value=this.perf.profile.motionBlur?Math.min(.6,this.player.impact*.3+this.player.tumble*.5):0;{let y=Math.max(ft((40-i.oxygen)/40),ft((34.2-i.temp)/2.2),i.blackout)*(i.alive?1:0);this.pulseT=(this.pulseT||0)+t*(1.5+1.2*y);let T=Math.pow(Math.max(0,Math.sin(this.pulseT*Math.PI*2)),8);x.uTunnel.value=i.blackout,this.lidK=0}x.uDesat.value=.35*i.blackout+.18*ft((35.5-i.temp)/3),this.state==="title"?(x.uDofAmount.value=1.6,x.uDofFocus.value=this.cam.arm):x.uDofAmount.value=0,i.alive&&!this.lifting&&!this.rescue.rescued&&(x.uFade.value=this.lidK||0),i.alive||(this.deadTimer===0&&!this.manual&&(this.cam.cine={mode:"death",t:0}),this.deadTimer+=t,x.uFade.value=Math.min(.82,this.deadTimer/4),this.deadTimer>4&&this.state==="playing"&&!this.manual&&(this.input.enabled=!1,this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("dead"))),this.ui&&this.state==="playing"&&(this.ui.setBars(i.oxygen/100,i.stamina/100,(i.temp-31.5)/5.5,this.clinging||this.aboard?Math.max(.02,this.grip):this.rescue.hold/this.rescue.holdNeed),this.ui.setMode(this.aboard?"boat":this.clinging?"cling":this.waveMode?"ship":"swim"));let v=st.uFlash.value;this.flashLight.intensity=v*3.2,this.flashLight.position.copy(this.character.group.position).addScaledVector(st.uFlashDir.value,50),this.flashLight.target.position.copy(this.character.group.position),this.keyLight.position.copy(this.character.group.position).addScaledVector(st.uGlowDir.value,50),this.keyLight.target.position.copy(this.character.group.position),this.character.material.envMapIntensity=(this.studioLight?4.5:this.character.glb?1.25:1.7)+v*2,this.boat.material&&(this.boat.material.envMapIntensity=(this.studioLight?4:.6)+v*1.4),this.keyLight.intensity=this.studioLight?2.2:.42,this.ocean.update(this.camera,t),this.ocean.uniforms.uPlayerPos.value.copy(this.character.group.position),this.ocean.uniforms.uBoatOn.value=this.boat.active&&this.boat.loaded?1:0;{let y=this.boat,S=y.active&&y.loaded?Math.min(1,.12+.15*Math.max(0,y.relSpeed-.3)+.4*(this.boatSlamK||0)+(y.flipping>0?.5:0))*Math.min(1,y.subFrac*6):0;this.boatFoamK=(this.boatFoamK||0)+(S-(this.boatFoamK||0))*(1-Math.exp(-t*(S>(this.boatFoamK||0)?9:2.2))),this.boatSlamK=Math.max(0,(this.boatSlamK||0)-t*1.6),this.ocean.uniforms.uBoatFoam.value=this.boatFoamK}this.boat.active&&this.boat.loaded&&this.ocean.uniforms.uBoatInv.value.copy(this.boat.holder.children[0].matrixWorld).invert(),this.ocean.uniforms.uShipOn.value=this.cargo.active&&this.cargo.loaded?1:0,this.ocean.uniforms.uShipFoam.value=this.cargo.active?this.cargo.speed/5.5:0,this.cargo.active&&this.cargo.loaded&&(this.cargo.group.updateMatrixWorld(!0),this.ocean.uniforms.uShipInv.value.copy(this.cargo.group.matrixWorld).invert()),this.ocean.uniforms.uPlayerFoam.value=(.06+this.anim.splashiness*.12+this.limbs.activity*.18)*Math.min(1,this.body.subFrac*3)*(this.body.eyeDepth<.25?1:0);{let y=this.ocean.uniforms,T=y.uBody.value,S=this.body.points,_=this._bodyK||(this._bodyK=new Float32Array(11)),E=!this.aboard&&this.state!=="title"&&this.state!=="loading",I=Math.min(1,Math.hypot(this.body.relFlow.x,this.body.relFlow.z)*.35),W=Math.min(1.3,.46+this.anim.splashiness*.35+this.limbs.activity*.7+I*.4),Y=[.11,.19,.17,.09,.09,.055,.055,.08,.08,.06,.06];for(let k=0;k<11;k++){let z=S[k],U=(E?Math.max(0,1-Math.max(0,Math.abs(z.depth||0)-z.half)/.2):0)*W*(k>=5?1:.85);_[k]+=(U-_[k])*(1-Math.exp(-t*(U>_[k]?14:3.2))),T[k].set(z.world.x,z.world.z,Y[k],_[k])}y.uBodyOn.value=E?1:0,this.bodyFoamK=E?Math.min(.54,.22+this.anim.splashiness*.16+this.limbs.activity*.3+I*.12)*Math.min(1,this.body.subFrac*3)*(this.body.eyeDepth<.6?1:0):0}let w=this.audioState,R=this.camera.matrixWorld.elements;w.cam.fwd.set(-R[8],-R[9],-R[10]),w.cam.up.set(R[4],R[5],R[6]),w.storm=r,w.rain=this.weather.rain,w.windSpeed=this.weather.windSpeed,w.gust=this.weather.gust,w.windPan=-(s.x*R[0]+s.z*R[2])/Math.max(1,this.weather.windSpeed),w.under=this.underwater.under,w.depth=Math.max(0,this.underwater.depth),w.aeration=this.underwater.aeration,w.threat=this.interaction.threat,w.hot=this.spray.hot,w.oxygen=i.oxygen,w.effort=this.player.effort,this.clinging&&this.strain>.12&&(this.impactBlur=Math.max(this.impactBlur,.1)),w.gustPull=this.gustPull||0,w.fear=this.player.fear||0,w.boatCreak=this.aboard?.35+.5*Math.min(1,this.boat.angVel.length()*.8)+.4*this.rid.slam:this.clinging?.4+.5*Math.min(1,(this.strain||0)*2.5):0,w.ship=this.shipSnd,w.heli=this.rescue.state!=="none"?{on:!0,pos:this.rescue.pos}:null,w.air=this.player.air,w.relSpeed=this.body.relSpeed,w.swellV=this.body.surface.vy,w.alive=i.alive,w.blackout=i.blackout,w.mouthUnder=this.mouthUnder,w.slow=1-(this.timeScale||1),w.swimSplash=Math.max(this.limbs.activity,this.anim.w.swim*.8)*(this.mouthUnder?.3:1),this.audio.update(t,w),this.input.endFrame()}render(t){if(this.sky.updateEnv(),this.envTimer-=t,this.envTimer<=0&&st.uFlash.value<.01){let i=this.pmrem.fromEquirectangular(this.sky.envRT.texture);this.envRT&&this.envRT.dispose(),this.envRT=i,this.scene.environment=i.texture,this.envTimer=9}let e=this.weather.rain*(.9+5*(1-this.cam.blend))*(.6+.4*this.weather.gust);if(this.lens.update(t,e,this.underwater.isUnder,this.camera.aspect),this.foam.enabled){let i=this.boat,n=this.foam.u,s=i.active&&i.loaded;if(s){let r=i.group.quaternion,o=2*(r.x*r.z+r.w*r.y),h=1-2*(r.x*r.x+r.y*r.y),c=Math.hypot(o,h)||1;n.uBoat.value.set(i.group.position.x,i.group.position.z,o/c,h/c)}n.uBoatFoam.value=s?Math.max(0,(this.boatFoamK||0)-.22)*1:0}this.foam.update(t,this.camera.position.x,this.camera.position.z,this.character.group.position,this.bodyFoamK||0,this.ocean.uniforms),this.post.render(this.drawScene,this.camera,t,this.time)}renderStill(){this.render(0)}loop(t){requestAnimationFrame(this.loop);let e=Math.max(0,Math.min((t-this.last)/1e3,.1));this.last=t,!this.manual&&(this.state==="paused"||this.state==="dead"||(this.realDt=e,this.timeScale=(this.timeScale||1)+((this.slowWant||1)-(this.timeScale||1))*(1-Math.exp(-e*9)),this.step(e*this.timeScale),this.render(e),this.perf.update(e)&&this.resize()))}};function y1(){let a;try{a=new vl}catch(e){let i=document.getElementById("fatal");i.style.display="flex",i.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uC2E4\uD589\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 (WebGL2 \uD544\uC694). "+e.message,console.error(e);return}let t=new URLSearchParams(location.search);(t.get("glb")==="0"?Promise.resolve():a.loadCharacter()).then(()=>a.loadBoat()).then(()=>t.get("heli")==="0"?null:a.loadHeli()).then(()=>t.get("cargo")==="0"?null:a.loadCargo()).then(()=>{a.warmRescue(),a.onAssets&&a.onAssets(),window.__ocean.ready=!0,Ha(1)}),window.__ocean={game:a,ready:!1,scenarios:Object.keys(hs),advance(e,i=1/60){let n=Math.max(1,Math.round(e/i));for(let s=0;s<n;s++)a.step(i),a.render(i)},scenario(e){return a.scenarios.run(e)},shipPass(e={}){return a.cargo.start(a.body.pos,e),a.cargo.track},cargo(e=60,i=0,n=Math.PI/2,s=0){let r=a.body.pos;return a.cargo.place(r.x+Math.sin(i)*e,r.z+Math.cos(i)*e,n,s),a.cargoInfo},studio(e){let i=new yt;e.prone?i.setFromRotationMatrix(new Rt().makeBasis(new M(0,0,1),new M(-1,0,0),new M(0,-1,0))):i.setFromAxisAngle(new M(0,1,0),-Math.PI/2);let n=a.waves.sample(0,0,{}).h;a.studio={state:e.state,phase:e.phase||0,quat:i,x:0,y:n+14,z:0},a.player.underSwim=e.under?1:0,a.anim.forcePike=e.pike||0,a.weather.base=a.weather.storm=.15,a.weather.locked=!0,a.cam.setMode("third"),a.cam.blend=1,a.cam.yaw=-Math.PI/2,a.cam.pitch=e.pitch!==void 0?e.pitch:-.05,a.cam.orbit=e.orbit||0,a.keepOrbit=!0,a.cam.armOverride=e.arm||2.7,a.cam.inited=!1,a.post.u.uExposureBias.value=1,a.studioLight=!0;for(let s=0;s<4;s++)a.step(.5);return a.render(1/60),a.render(1/60),a.anim.state},set(e){return e.view&&(a.cam.setMode(e.view),e.snap&&(a.cam.blend=a.cam.target)),e.yaw!==void 0&&(a.cam.yaw=e.yaw),e.pitch!==void 0&&(a.cam.pitch=e.pitch),e.orbit!==void 0&&(a.cam.orbit=e.orbit,a.keepOrbit=!0),e.arm!==void 0&&(a.cam.armOverride=e.arm),e.keys!==void 0&&(a.input.virtual=e.keys,a.input.enabled=!0),e.storm!==void 0&&(a.weather.base=e.storm,e.snap&&(a.weather.storm=e.storm)),e.breaker&&a.interaction.launch(e.breaker),e.strike&&a.lightning.strike(a.camera.position,e.strike),!0},info(){let e=a.body,i=a.survival;return{t:+a.time.toFixed(2),state:a.state,size:[a.post.w,a.post.h],profile:a.perf.profile.key,sigH:+a.waves.sigHeight.toFixed(1),pos:[+e.pos.x.toFixed(1),+e.pos.y.toFixed(2),+e.pos.z.toFixed(1)],surf:+e.surfaceH.toFixed(2),mouth:+e.mouthDepth.toFixed(2),sub:+e.subFrac.toFixed(2),ctl:+a.player.control.toFixed(2),imp:+a.player.impact.toFixed(2),anim:a.anim.state,view:a.cam.mode,blend:+a.cam.blend.toFixed(2),camUnder:+a.camUnder.toFixed(2),yaw:+a.cam.yaw.toFixed(2),o2:+i.oxygen.toFixed(0),st:+i.stamina.toFixed(0),temp:+i.temp.toFixed(2),alive:i.alive,flash:+st.uFlash.value.toFixed(2),spray:a.spray.alive,drops:a.lens.count,fps:+a.perf.fps.toFixed(0),rescue:a.rescue.state,hold:+a.rescue.hold.toFixed(1),won:a.rescue.rescued,aboard:a.aboard,cling:!!a.clinging,grip:+(a.grip===void 0?1:a.grip).toFixed(2),runaway:+(a.runaway||0).toFixed(1),near:+(a.nearBoat||99).toFixed(1),boat:a.boat.active?{up:+a.boat.upY.toFixed(2),swamp:+a.boat.swamp.toFixed(2),dist:+a.boat.pos.distanceTo(e.pos).toFixed(1),sub:+a.boat.subFrac.toFixed(2)}:null,face:a.face.label,air:+a.player.air.toFixed(2),swim:a.player.swimHeld,dive:a.player.diveHeld,depth:+Math.max(0,e.mouthDepth).toFixed(2),voice:a.voiceDir.last,voices:a.voiceDir.count,glb:!!a.character.glb}},measure(e){return new Promise(i=>{let n=performance.now(),s=0,r=0,o=n,h=c=>{s++,r=Math.max(r,c-o),o=c,c-n>=e*1e3?i({fps:+(s/((c-n)/1e3)).toFixed(1),worstMs:+r.toFixed(1),scale:a.perf.scale,size:[a.post.w,a.post.h],profile:a.perf.profile.key}):requestAnimationFrame(h)};requestAnimationFrame(h)})}}}y1();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
