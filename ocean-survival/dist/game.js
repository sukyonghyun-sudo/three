(()=>{var hc="160";var af=0,gl=1,of=2;var rd=1,hf=2,an=3,yi=0,Xe=1,Fe=2;var En=0,Sn=1,Xn=2,bl=3,vl=4,cc=5,on=100,cf=101,lf=102,xl=103,yl=104,qa=200,uf=201,lc=202,df=203,vr=204,_h=205,ff=206,pf=207,mf=208,gf=209,bf=210,vf=211,xf=212,yf=213,_f=214,Mf=0,wf=1,Ef=2,ga=3,Sf=4,Tf=5,Af=6,Rf=7,ad=0,Cf=1,Pf=2,Xi=0,Lf=1,If=2,Ff=3,Df=4,kf=5,zf=6,_l="attached",Uf="detached",od=300,Is=301,Fs=302,Mh=303,wh=304,Xa=306,ti=1e3,ai=1001,xr=1002,Re=1003,ba=1004;var ur=1005;var ee=1006,uc=1007;var Ye=1008;var je=1009,Nf=1010,Of=1011,dc=1012,hd=1013,Mn=1014,hn=1015,ln=1016,cd=1017,ld=1018,Gn=1020,Bf=1021,de=1023,Hf=1024,Vf=1025,Wn=1026,Ds=1027,Gf=1028,ud=1029,Wf=1030,dd=1031,fd=1033,No=33776,Oo=33777,Bo=33778,Ho=33779,Ml=35840,wl=35841,El=35842,Sl=35843,pd=36196,Tl=37492,Al=37496,Rl=37808,Cl=37809,Pl=37810,Ll=37811,Il=37812,Fl=37813,Dl=37814,kl=37815,zl=37816,Ul=37817,Nl=37818,Ol=37819,Bl=37820,Hl=37821,Vo=36492,Vl=36494,Gl=36495,qf=36283,Wl=36284,ql=36285,Xl=36286;var ks=2300,jn=2301,Go=2302,jl=2400,Yl=2401,Kl=2402,Xf=2500;var md=0,ja=1,Pr=2,gd=3e3,qn=3001,jf=3200,Yf=3201,bd=0,Kf=1,qe="",fe="srgb",De="srgb-linear",fc="display-p3",Ya="display-p3-linear",va="linear",ve="srgb",xa="rec709",ya="p3";var os=7680;var Ql=519,Qf=512,Zf=513,Jf=514,vd=515,$f=516,tp=517,ep=518,ip=519,Eh=35044,Bi=35048;var Zl="300 es",Sh=1035,cn=2e3,_a=2001,Tn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jl=1234567,dr=Math.PI/180,zs=180/Math.PI;function Ui(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[r&255]+Je[r>>8&255]+Je[r>>16&255]+Je[r>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function Ue(r,t,e){return Math.max(t,Math.min(e,r))}function pc(r,t){return(r%t+t)%t}function np(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function sp(r,t,e){return r!==t?(e-r)/(t-r):0}function fr(r,t,e){return(1-e)*r+e*t}function rp(r,t,e,i){return fr(r,t,1-Math.exp(-e*i))}function ap(r,t=1){return t-Math.abs(pc(r,t*2)-t)}function op(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function hp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function cp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function lp(r,t){return r+Math.random()*(t-r)}function up(r){return r*(.5-Math.random())}function dp(r){r!==void 0&&(Jl=r);let t=Jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fp(r){return r*dr}function pp(r){return r*zs}function Th(r){return(r&r-1)===0&&r!==0}function mp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ma(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gp(r,t,e,i,n){let s=Math.cos,a=Math.sin,o=s(e/2),h=a(e/2),c=s((t+i)/2),l=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),m=a((i-t)/2);switch(n){case"XYX":r.set(o*l,h*u,h*d,o*c);break;case"YZY":r.set(h*d,o*l,h*u,o*c);break;case"ZXZ":r.set(h*u,h*d,o*l,o*c);break;case"XZX":r.set(o*l,h*m,h*f,o*c);break;case"YXY":r.set(h*f,o*l,h*m,o*c);break;case"ZYZ":r.set(h*m,h*f,o*l,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function qi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ue(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ln={DEG2RAD:dr,RAD2DEG:zs,generateUUID:Ui,clamp:Ue,euclideanModulo:pc,mapLinear:np,inverseLerp:sp,lerp:fr,damp:rp,pingpong:ap,smoothstep:op,smootherstep:hp,randInt:cp,randFloat:lp,randFloatSpread:up,seededRandom:dp,degToRad:fp,radToDeg:pp,isPowerOfTwo:Th,ceilPowerOfTwo:mp,floorPowerOfTwo:Ma,setQuaternionFromProperEuler:gp,normalize:ue,denormalize:qi},ft=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class r{constructor(t,e,i,n,s,a,o,h,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,h,c)}set(t,e,i,n,s,a,o,h,c){let l=this.elements;return l[0]=t,l[1]=n,l[2]=o,l[3]=e,l[4]=s,l[5]=h,l[6]=i,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],h=i[6],c=i[1],l=i[4],u=i[7],d=i[2],f=i[5],m=i[8],b=n[0],g=n[3],p=n[6],x=n[1],v=n[4],M=n[7],R=n[2],y=n[5],E=n[8];return s[0]=a*b+o*x+h*R,s[3]=a*g+o*v+h*y,s[6]=a*p+o*M+h*E,s[1]=c*b+l*x+u*R,s[4]=c*g+l*v+u*y,s[7]=c*p+l*M+u*E,s[2]=d*b+f*x+m*R,s[5]=d*g+f*v+m*y,s[8]=d*p+f*M+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],h=t[6],c=t[7],l=t[8];return e*a*l-e*o*c-i*s*l+i*o*h+n*s*c-n*a*h}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],h=t[6],c=t[7],l=t[8],u=l*a-o*c,d=o*h-l*s,f=c*s-a*h,m=e*u+i*d+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return t[0]=u*b,t[1]=(n*c-l*i)*b,t[2]=(o*i-n*a)*b,t[3]=d*b,t[4]=(l*e-n*h)*b,t[5]=(n*s-o*e)*b,t[6]=f*b,t[7]=(i*h-c*e)*b,t[8]=(a*e-i*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let h=Math.cos(s),c=Math.sin(s);return this.set(i*h,i*c,-i*(h*a+c*o)+a+t,-n*c,n*h,-n*(-c*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wo=new te;function xd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bp(){let r=yr("canvas");return r.style.display="block",r}var $l={};function pr(r){r in $l||($l[r]=!0,console.warn(r))}var tu=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eu=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Nr={[De]:{transfer:va,primaries:xa,toReference:r=>r,fromReference:r=>r},[fe]:{transfer:ve,primaries:xa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ya]:{transfer:va,primaries:ya,toReference:r=>r.applyMatrix3(eu),fromReference:r=>r.applyMatrix3(tu)},[fc]:{transfer:ve,primaries:ya,toReference:r=>r.convertSRGBToLinear().applyMatrix3(eu),fromReference:r=>r.applyMatrix3(tu).convertLinearToSRGB()}},vp=new Set([De,Ya]),he={enabled:!0,_workingColorSpace:De,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!vp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let i=Nr[t].toReference,n=Nr[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Nr[r].primaries},getTransfer:function(r){return r===qe?va:Nr[r].transfer}};function Ps(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var hs,wa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=yr("canvas")),hs.width=t.width,hs.height=t.height;let i=hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=yr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Ps(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ps(e[i]/255)*255):e[i]=Ps(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xp=0,Ea=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Ui(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Xo(n[a].image)):s.push(Xo(n[a]))}else s=Xo(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function Xo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yp=0,Ke=class r extends Tn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=ai,n=ai,s=ee,a=Ye,o=de,h=je,c=r.DEFAULT_ANISOTROPY,l=qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ui(),this.name="",this.source=new Ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===qn?fe:qe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==od)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ti:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ti:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?qn:gd}set encoding(t){pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===qn?fe:qe}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=od;Ke.DEFAULT_ANISOTROPY=1;var ie=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,h=t.elements,c=h[0],l=h[4],u=h[8],d=h[1],f=h[5],m=h[9],b=h[2],g=h[6],p=h[10];if(Math.abs(l-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,M=(f+1)/2,R=(p+1)/2,y=(l+d)/4,E=(u+b)/4,T=(m+g)/4;return v>M&&v>R?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=y/i,s=E/i):M>R?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=y/n,s=T/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=E/s,n=T/s),this.set(i,n,s,e),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-l)*(d-l));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(d-l)/x,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ah=class extends Tn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===qn?fe:qe),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ee,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ke(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ea(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_e=class extends Ah{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Sa=class extends Ke{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Re,this.minFilter=Re,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rh=class extends Ke{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Re,this.minFilter=Re,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yt=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let h=i[n+0],c=i[n+1],l=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],m=s[a+2],b=s[a+3];if(o===0){t[e+0]=h,t[e+1]=c,t[e+2]=l,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=b;return}if(u!==b||h!==d||c!==f||l!==m){let g=1-o,p=h*d+c*f+l*m+u*b,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let R=Math.sqrt(v),y=Math.atan2(R,p*x);g=Math.sin(g*y)/R,o=Math.sin(o*y)/R}let M=o*x;if(h=h*g+d*M,c=c*g+f*M,l=l*g+m*M,u=u*g+b*M,g===1-o){let R=1/Math.sqrt(h*h+c*c+l*l+u*u);h*=R,c*=R,l*=R,u*=R}}t[e]=h,t[e+1]=c,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],h=i[n+1],c=i[n+2],l=i[n+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return t[e]=o*m+l*u+h*f-c*d,t[e+1]=h*m+l*d+c*u-o*f,t[e+2]=c*m+l*f+o*d-h*u,t[e+3]=l*m-o*u-h*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,h=Math.sin,c=o(i/2),l=o(n/2),u=o(s/2),d=h(i/2),f=h(n/2),m=h(s/2);switch(a){case"XYZ":this._x=d*l*u+c*f*m,this._y=c*f*u-d*l*m,this._z=c*l*m+d*f*u,this._w=c*l*u-d*f*m;break;case"YXZ":this._x=d*l*u+c*f*m,this._y=c*f*u-d*l*m,this._z=c*l*m-d*f*u,this._w=c*l*u+d*f*m;break;case"ZXY":this._x=d*l*u-c*f*m,this._y=c*f*u+d*l*m,this._z=c*l*m+d*f*u,this._w=c*l*u-d*f*m;break;case"ZYX":this._x=d*l*u-c*f*m,this._y=c*f*u+d*l*m,this._z=c*l*m-d*f*u,this._w=c*l*u+d*f*m;break;case"YZX":this._x=d*l*u+c*f*m,this._y=c*f*u+d*l*m,this._z=c*l*m-d*f*u,this._w=c*l*u-d*f*m;break;case"XZY":this._x=d*l*u-c*f*m,this._y=c*f*u-d*l*m,this._z=c*l*m+d*f*u,this._w=c*l*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],h=e[9],c=e[2],l=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-h)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(l-h)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(h+l)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(h+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,h=e._y,c=e._z,l=e._w;return this._x=i*l+a*o+n*c-s*h,this._y=n*l+a*h+s*o-i*c,this._z=s*l+a*c+i*h-n*o,this._w=a*l-i*o-n*h-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let h=1-o*o;if(h<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(h),l=Math.atan2(c,o),u=Math.sin((1-e)*l)/c,d=Math.sin(e*l)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,h=t.w,c=2*(a*n-o*i),l=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+h*c+a*u-o*l,this.y=i+h*l+o*c-s*u,this.z=n+h*u+s*l-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,h=e.z;return this.x=n*h-s*o,this.y=s*a-i*h,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return jo.copy(this).projectOnVector(t),this.sub(jo)}reflect(t){return this.sub(jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jo=new w,iu=new yt,Ai=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fi):Fi.fromBufferAttribute(s,a),Fi.applyMatrix4(t.matrixWorld),this.expandByPoint(Fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Or.copy(i.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Fi),Fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Br.subVectors(this.max,er),cs.subVectors(t.a,er),ls.subVectors(t.b,er),us.subVectors(t.c,er),bn.subVectors(ls,cs),vn.subVectors(us,ls),zn.subVectors(cs,us);let e=[0,-bn.z,bn.y,0,-vn.z,vn.y,0,-zn.z,zn.y,bn.z,0,-bn.x,vn.z,0,-vn.x,zn.z,0,-zn.x,-bn.y,bn.x,0,-vn.y,vn.x,0,-zn.y,zn.x,0];return!Yo(e,cs,ls,us,Br)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,cs,ls,us,Br))?!1:(Hr.crossVectors(bn,vn),e=[Hr.x,Hr.y,Hr.z],Yo(e,cs,ls,us,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$i=[new w,new w,new w,new w,new w,new w,new w,new w],Fi=new w,Or=new Ai,cs=new w,ls=new w,us=new w,bn=new w,vn=new w,zn=new w,er=new w,Br=new w,Hr=new w,Un=new w;function Yo(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Un.fromArray(r,s);let o=n.x*Math.abs(Un.x)+n.y*Math.abs(Un.y)+n.z*Math.abs(Un.z),h=t.dot(Un),c=e.dot(Un),l=i.dot(Un);if(Math.max(-Math.max(h,c,l),Math.min(h,c,l))>o)return!1}return!0}var _p=new Ai,ir=new w,Ko=new w,_i=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):_p.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);let e=ir.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ir,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(Ko)),this.expandByPoint(ir.copy(t.center).sub(Ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},tn=new w,Qo=new w,Vr=new w,xn=new w,Zo=new w,Gr=new w,Jo=new w,Us=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Qo.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(Qo);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Vr),o=xn.dot(this.direction),h=-xn.dot(Vr),c=xn.lengthSq(),l=Math.abs(1-a*a),u,d,f,m;if(l>0)if(u=a*h-o,d=a*o-h,m=s*l,u>=0)if(d>=-m)if(d<=m){let b=1/l;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*h)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*h)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*h)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-h),s),f=-u*u+d*(d+2*h)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-h),s),f=d*(d+2*h)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-h),s),f=-u*u+d*(d+2*h)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*h)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Qo).addScaledVector(Vr,d),f}intersectSphere(t,e){tn.subVectors(t.center,this.origin);let i=tn.dot(this.direction),n=tn.dot(tn)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,h=i+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,h,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),l>=0?(s=(t.min.y-d.y)*l,a=(t.max.y-d.y)*l):(s=(t.max.y-d.y)*l,a=(t.min.y-d.y)*l),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,h=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,h=(t.min.z-d.z)*u),i>h||o>n)||((o>i||i!==i)&&(i=o),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,i,n,s){Zo.subVectors(e,t),Gr.subVectors(i,t),Jo.crossVectors(Zo,Gr);let a=this.direction.dot(Jo),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,t);let h=o*this.direction.dot(Gr.crossVectors(xn,Gr));if(h<0)return null;let c=o*this.direction.dot(Zo.cross(xn));if(c<0||h+c>a)return null;let l=-o*xn.dot(Jo);return l<0?null:this.at(l/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pt=class r{constructor(t,e,i,n,s,a,o,h,c,l,u,d,f,m,b,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,h,c,l,u,d,f,m,b,g)}set(t,e,i,n,s,a,o,h,c,l,u,d,f,m,b,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=h,p[2]=c,p[6]=l,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/ds.setFromMatrixColumn(t,0).length(),s=1/ds.setFromMatrixColumn(t,1).length(),a=1/ds.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),h=Math.cos(n),c=Math.sin(n),l=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*l,f=a*u,m=o*l,b=o*u;e[0]=h*l,e[4]=-h*u,e[8]=c,e[1]=f+m*c,e[5]=d-b*c,e[9]=-o*h,e[2]=b-d*c,e[6]=m+f*c,e[10]=a*h}else if(t.order==="YXZ"){let d=h*l,f=h*u,m=c*l,b=c*u;e[0]=d+b*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*l,e[9]=-o,e[2]=f*o-m,e[6]=b+d*o,e[10]=a*h}else if(t.order==="ZXY"){let d=h*l,f=h*u,m=c*l,b=c*u;e[0]=d-b*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*l,e[9]=b-d*o,e[2]=-a*c,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){let d=a*l,f=a*u,m=o*l,b=o*u;e[0]=h*l,e[4]=m*c-f,e[8]=d*c+b,e[1]=h*u,e[5]=b*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){let d=a*h,f=a*c,m=o*h,b=o*c;e[0]=h*l,e[4]=b-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*l,e[9]=-o*l,e[2]=-c*l,e[6]=f*u+m,e[10]=d-b*u}else if(t.order==="XZY"){let d=a*h,f=a*c,m=o*h,b=o*c;e[0]=h*l,e[4]=-u,e[8]=c*l,e[1]=d*u+b,e[5]=a*l,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*l,e[10]=b*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mp,t,wp)}lookAt(t,e,i){let n=this.elements;return vi.subVectors(t,e),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),yn.crossVectors(i,vi),yn.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),yn.crossVectors(i,vi)),yn.normalize(),Wr.crossVectors(vi,yn),n[0]=yn.x,n[4]=Wr.x,n[8]=vi.x,n[1]=yn.y,n[5]=Wr.y,n[9]=vi.y,n[2]=yn.z,n[6]=Wr.z,n[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],h=i[8],c=i[12],l=i[1],u=i[5],d=i[9],f=i[13],m=i[2],b=i[6],g=i[10],p=i[14],x=i[3],v=i[7],M=i[11],R=i[15],y=n[0],E=n[4],T=n[8],_=n[12],S=n[1],k=n[5],W=n[9],Y=n[13],N=n[2],D=n[6],O=n[10],B=n[14],U=n[3],F=n[7],P=n[11],V=n[15];return s[0]=a*y+o*S+h*N+c*U,s[4]=a*E+o*k+h*D+c*F,s[8]=a*T+o*W+h*O+c*P,s[12]=a*_+o*Y+h*B+c*V,s[1]=l*y+u*S+d*N+f*U,s[5]=l*E+u*k+d*D+f*F,s[9]=l*T+u*W+d*O+f*P,s[13]=l*_+u*Y+d*B+f*V,s[2]=m*y+b*S+g*N+p*U,s[6]=m*E+b*k+g*D+p*F,s[10]=m*T+b*W+g*O+p*P,s[14]=m*_+b*Y+g*B+p*V,s[3]=x*y+v*S+M*N+R*U,s[7]=x*E+v*k+M*D+R*F,s[11]=x*T+v*W+M*O+R*P,s[15]=x*_+v*Y+M*B+R*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],h=t[9],c=t[13],l=t[2],u=t[6],d=t[10],f=t[14],m=t[3],b=t[7],g=t[11],p=t[15];return m*(+s*h*u-n*c*u-s*o*d+i*c*d+n*o*f-i*h*f)+b*(+e*h*f-e*c*d+s*a*d-n*a*f+n*c*l-s*h*l)+g*(+e*c*u-e*o*f-s*a*u+i*a*f+s*o*l-i*c*l)+p*(-n*o*l-e*h*u+e*o*d+n*a*u-i*a*d+i*h*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],h=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11],m=t[12],b=t[13],g=t[14],p=t[15],x=u*g*c-b*d*c+b*h*f-o*g*f-u*h*p+o*d*p,v=m*d*c-l*g*c-m*h*f+a*g*f+l*h*p-a*d*p,M=l*b*c-m*u*c+m*o*f-a*b*f-l*o*p+a*u*p,R=m*u*h-l*b*h-m*o*d+a*b*d+l*o*g-a*u*g,y=e*x+i*v+n*M+s*R;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/y;return t[0]=x*E,t[1]=(b*d*s-u*g*s-b*n*f+i*g*f+u*n*p-i*d*p)*E,t[2]=(o*g*s-b*h*s+b*n*c-i*g*c-o*n*p+i*h*p)*E,t[3]=(u*h*s-o*d*s-u*n*c+i*d*c+o*n*f-i*h*f)*E,t[4]=v*E,t[5]=(l*g*s-m*d*s+m*n*f-e*g*f-l*n*p+e*d*p)*E,t[6]=(m*h*s-a*g*s-m*n*c+e*g*c+a*n*p-e*h*p)*E,t[7]=(a*d*s-l*h*s+l*n*c-e*d*c-a*n*f+e*h*f)*E,t[8]=M*E,t[9]=(m*u*s-l*b*s-m*i*f+e*b*f+l*i*p-e*u*p)*E,t[10]=(a*b*s-m*o*s+m*i*c-e*b*c-a*i*p+e*o*p)*E,t[11]=(l*o*s-a*u*s-l*i*c+e*u*c+a*i*f-e*o*f)*E,t[12]=R*E,t[13]=(l*b*n-m*u*n+m*i*d-e*b*d-l*i*g+e*u*g)*E,t[14]=(m*o*n-a*b*n-m*i*h+e*b*h+a*i*g-e*o*g)*E,t[15]=(a*u*n-l*o*n+l*i*h-e*u*h-a*i*d+e*o*d)*E,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,h=t.z,c=s*a,l=s*o;return this.set(c*a+i,c*o-n*h,c*h+n*o,0,c*o+n*h,l*o+i,l*h-n*a,0,c*h-n*o,l*h+n*a,s*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,h=e._w,c=s+s,l=a+a,u=o+o,d=s*c,f=s*l,m=s*u,b=a*l,g=a*u,p=o*u,x=h*c,v=h*l,M=h*u,R=i.x,y=i.y,E=i.z;return n[0]=(1-(b+p))*R,n[1]=(f+M)*R,n[2]=(m-v)*R,n[3]=0,n[4]=(f-M)*y,n[5]=(1-(d+p))*y,n[6]=(g+x)*y,n[7]=0,n[8]=(m+v)*E,n[9]=(g-x)*E,n[10]=(1-(d+b))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=ds.set(n[0],n[1],n[2]).length(),a=ds.set(n[4],n[5],n[6]).length(),o=ds.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Di.copy(this);let c=1/s,l=1/a,u=1/o;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=l,Di.elements[5]*=l,Di.elements[6]*=l,Di.elements[8]*=u,Di.elements[9]*=u,Di.elements[10]*=u,e.setFromRotationMatrix(Di),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=cn){let h=this.elements,c=2*s/(e-t),l=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,m;if(o===cn)f=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===_a)f=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=l,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=f,h[14]=m,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=cn){let h=this.elements,c=1/(e-t),l=1/(i-n),u=1/(a-s),d=(e+t)*c,f=(i+n)*l,m,b;if(o===cn)m=(a+s)*u,b=-2*u;else if(o===_a)m=s*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*c,h[4]=0,h[8]=0,h[12]=-d,h[1]=0,h[5]=2*l,h[9]=0,h[13]=-f,h[2]=0,h[6]=0,h[10]=b,h[14]=-m,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ds=new w,Di=new Pt,Mp=new w(0,0,0),wp=new w(1,1,1),yn=new w,Wr=new w,vi=new w,nu=new Pt,su=new yt,ui=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],h=n[1],c=n[5],l=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return su.setFromEuler(this),this.setFromQuaternion(su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var Ta=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ep=0,ru=new w,fs=new yt,en=new Pt,qr=new w,nr=new w,Sp=new w,Tp=new yt,au=new w(1,0,0),ou=new w(0,1,0),hu=new w(0,0,1),Ap={type:"added"},Rp={type:"removed"},Se=class r extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new w,e=new ui,i=new yt,n=new w(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Pt},normalMatrix:{value:new te}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return ru.copy(t).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qr.copy(t):qr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(nr,qr,this.up):en.lookAt(qr,nr,this.up),this.quaternion.setFromRotationMatrix(en),n&&(en.extractRotation(n.matrixWorld),fs.setFromRotationMatrix(en),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ap)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,Sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let c=0,l=h.length;c<l;c++){let u=h[c];s(t.shapes,u)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(s(t.materials,this.material[h]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];n.animations.push(s(t.animations,h))}}if(e){let o=a(t.geometries),h=a(t.materials),c=a(t.textures),l=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),c.length>0&&(i.textures=c),l.length>0&&(i.images=l),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let h=[];for(let c in o){let l=o[c];delete l.metadata,h.push(l)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Se.DEFAULT_UP=new w(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ki=new w,nn=new w,$o=new w,sn=new w,ps=new w,ms=new w,cu=new w,th=new w,eh=new w,ih=new w,Xr=!1,Vn=class r{constructor(t=new w,e=new w,i=new w){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ki.subVectors(t,e),n.cross(ki);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){ki.subVectors(n,e),nn.subVectors(i,e),$o.subVectors(t,e);let a=ki.dot(ki),o=ki.dot(nn),h=ki.dot($o),c=nn.dot(nn),l=nn.dot($o),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*h-o*l)*d,m=(a*l-o*h)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(t,e,i,n,s,a,o,h){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),this.getInterpolation(t,e,i,n,s,a,o,h)}static getInterpolation(t,e,i,n,s,a,o,h){return this.getBarycoord(t,e,i,n,sn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,sn.x),h.addScaledVector(a,sn.y),h.addScaledVector(o,sn.z),h)}static isFrontFacing(t,e,i,n){return ki.subVectors(i,e),nn.subVectors(t,e),ki.cross(nn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ki.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),ki.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return Xr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xr=!0),r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;ps.subVectors(n,i),ms.subVectors(s,i),th.subVectors(t,i);let h=ps.dot(th),c=ms.dot(th);if(h<=0&&c<=0)return e.copy(i);eh.subVectors(t,n);let l=ps.dot(eh),u=ms.dot(eh);if(l>=0&&u<=l)return e.copy(n);let d=h*u-l*c;if(d<=0&&h>=0&&l<=0)return a=h/(h-l),e.copy(i).addScaledVector(ps,a);ih.subVectors(t,s);let f=ps.dot(ih),m=ms.dot(ih);if(m>=0&&f<=m)return e.copy(s);let b=f*c-h*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(ms,o);let g=l*m-f*u;if(g<=0&&u-l>=0&&f-m>=0)return cu.subVectors(s,n),o=(u-l)/(u-l+(f-m)),e.copy(n).addScaledVector(cu,o);let p=1/(g+b+d);return a=b*p,o=d*p,e.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},jr={h:0,s:0,l:0};function nh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=he.workingColorSpace){if(t=pc(t,1),e=Ue(e,0,1),i=Ue(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=nh(a,s,t+1/3),this.g=nh(a,s,t),this.b=nh(a,s,t-1/3)}return he.toWorkingColorSpace(this,n),this}setStyle(t,e=fe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){let i=yd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}copyLinearToSRGB(t){return this.r=qo(t.r),this.g=qo(t.g),this.b=qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return he.fromWorkingColorSpace($e.copy(this),t),Math.round(Ue($e.r*255,0,255))*65536+Math.round(Ue($e.g*255,0,255))*256+Math.round(Ue($e.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace($e.copy(this),e);let i=$e.r,n=$e.g,s=$e.b,a=Math.max(i,n,s),o=Math.min(i,n,s),h,c,l=(o+a)/2;if(o===a)h=0,c=0;else{let u=a-o;switch(c=l<=.5?u/(a+o):u/(2-a-o),a){case i:h=(n-s)/u+(n<s?6:0);break;case n:h=(s-i)/u+2;break;case s:h=(i-n)/u+4;break}h/=6}return t.h=h,t.s=c,t.l=l,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=fe){he.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,i=$e.g,n=$e.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(jr);let i=fr(_n.h,jr.h,e),n=fr(_n.s,jr.s,e),s=fr(_n.l,jr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new Dt;Dt.NAMES=yd;var Cp=0,di=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Sn,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vr,this.blendDst=_h,this.blendEquation=on,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sn&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vr&&(i.blendSrc=this.blendSrc),this.blendDst!==_h&&(i.blendDst=this.blendDst),this.blendEquation!==on&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let h=s[o];delete h.metadata,a.push(h)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Oe=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new w,Yr=new ft,Wt=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Eh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eh&&(t.usage=this.usage),t}};var Ns=class extends Wt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Aa=class extends Wt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var re=class extends Wt{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Pp=0,Ti=new Pt,sh=new Se,gs=new w,xi=new Ai,sr=new Ai,We=new w,le=class r extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xd(t)?Aa:Ns)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new te().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,e,i){return Ti.makeTranslation(t,e,i),this.applyMatrix4(Ti),this}scale(t,e,i){return Ti.makeScale(t,e,i),this.applyMatrix4(Ti),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){let i=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(xi.min,sr.min),xi.expandByPoint(We),We.addVectors(xi.max,sr.max),xi.expandByPoint(We)):(xi.expandByPoint(sr.min),xi.expandByPoint(sr.max))}xi.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)We.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(We));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],h=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)We.fromBufferAttribute(o,c),h&&(gs.fromBufferAttribute(t,c),We.add(gs)),n=Math.max(n,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*o),4));let h=this.getAttribute("tangent").array,c=[],l=[];for(let S=0;S<o;S++)c[S]=new w,l[S]=new w;let u=new w,d=new w,f=new w,m=new ft,b=new ft,g=new ft,p=new w,x=new w;function v(S,k,W){u.fromArray(n,S*3),d.fromArray(n,k*3),f.fromArray(n,W*3),m.fromArray(a,S*2),b.fromArray(a,k*2),g.fromArray(a,W*2),d.sub(u),f.sub(u),b.sub(m),g.sub(m);let Y=1/(b.x*g.y-g.x*b.y);isFinite(Y)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-b.y).multiplyScalar(Y),x.copy(f).multiplyScalar(b.x).addScaledVector(d,-g.x).multiplyScalar(Y),c[S].add(p),c[k].add(p),c[W].add(p),l[S].add(x),l[k].add(x),l[W].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let S=0,k=M.length;S<k;++S){let W=M[S],Y=W.start,N=W.count;for(let D=Y,O=Y+N;D<O;D+=3)v(i[D+0],i[D+1],i[D+2])}let R=new w,y=new w,E=new w,T=new w;function _(S){E.fromArray(s,S*3),T.copy(E);let k=c[S];R.copy(k),R.sub(E.multiplyScalar(E.dot(k))).normalize(),y.crossVectors(T,k);let Y=y.dot(l[S])<0?-1:1;h[S*4]=R.x,h[S*4+1]=R.y,h[S*4+2]=R.z,h[S*4+3]=Y}for(let S=0,k=M.length;S<k;++S){let W=M[S],Y=W.start,N=W.count;for(let D=Y,O=Y+N;D<O;D+=3)_(i[D+0]),_(i[D+1]),_(i[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new w,s=new w,a=new w,o=new w,h=new w,c=new w,l=new w,u=new w;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),b=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,m),s.fromBufferAttribute(e,b),a.fromBufferAttribute(e,g),l.subVectors(a,s),u.subVectors(n,s),l.cross(u),o.fromBufferAttribute(i,m),h.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(l),h.add(l),c.add(l),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(b,h.x,h.y,h.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),l.subVectors(a,s),u.subVectors(n,s),l.cross(u),i.setXYZ(d+0,l.x,l.y,l.z),i.setXYZ(d+1,l.x,l.y,l.z),i.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,h){let c=o.array,l=o.itemSize,u=o.normalized,d=new c.constructor(h.length*l),f=0,m=0;for(let b=0,g=h.length;b<g;b++){o.isInterleavedBufferAttribute?f=h[b]*o.data.stride+o.offset:f=h[b]*l;for(let p=0;p<l;p++)d[m++]=c[f++]}return new Wt(d,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let h=n[o],c=t(h,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let h=[],c=s[o];for(let l=0,u=c.length;l<u;l++){let d=c[l],f=t(d,i);h.push(f)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,h=a.length;o<h;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let h in i){let c=i[h];t.data.attributes[h]=c.toJSON(t.data)}let n={},s=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],l=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];l.push(f.toJSON(t.data))}l.length>0&&(n[h]=l,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let l=n[c];this.setAttribute(c,l.clone(e))}let s=t.morphAttributes;for(let c in s){let l=[],u=s[c];for(let d=0,f=u.length;d<f;d++)l.push(u[d].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,l=a.length;c<l;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lu=new Pt,Nn=new Us,Kr=new _i,uu=new w,bs=new w,vs=new w,xs=new w,rh=new w,Qr=new w,Zr=new ft,Jr=new ft,$r=new ft,du=new w,fu=new w,pu=new w,ta=new w,ea=new w,pt=class extends Se{constructor(t=new le,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){Qr.set(0,0,0);for(let h=0,c=s.length;h<c;h++){let l=o[h],u=s[h];l!==0&&(rh.fromBufferAttribute(u,t),a?Qr.addScaledVector(rh,l):Qr.addScaledVector(rh.sub(e),l))}e.add(Qr)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(s),Nn.copy(t.ray).recast(t.near),!(Kr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Kr,uu)===null||Nn.origin.distanceToSquared(uu)>(t.far-t.near)**2))&&(lu.copy(s).invert(),Nn.copy(t.ray).applyMatrix4(lu),!(i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,h=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=x,R=v;M<R;M+=3){let y=o.getX(M),E=o.getX(M+1),T=o.getX(M+2);n=ia(this,p,t,i,c,l,u,y,E,T),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=o.getX(g),v=o.getX(g+1),M=o.getX(g+2);n=ia(this,a,t,i,c,l,u,x,v,M),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(h!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(h.count,Math.min(g.start+g.count,f.start+f.count));for(let M=x,R=v;M<R;M+=3){let y=M,E=M+1,T=M+2;n=ia(this,p,t,i,c,l,u,y,E,T),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,f.start),b=Math.min(h.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=g,v=g+1,M=g+2;n=ia(this,a,t,i,c,l,u,x,v,M),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function Lp(r,t,e,i,n,s,a,o){let h;if(t.side===Xe?h=i.intersectTriangle(a,s,n,!0,o):h=i.intersectTriangle(n,s,a,t.side===yi,o),h===null)return null;ea.copy(o),ea.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:r}}function ia(r,t,e,i,n,s,a,o,h,c){r.getVertexPosition(o,bs),r.getVertexPosition(h,vs),r.getVertexPosition(c,xs);let l=Lp(r,t,e,i,bs,vs,xs,ta);if(l){n&&(Zr.fromBufferAttribute(n,o),Jr.fromBufferAttribute(n,h),$r.fromBufferAttribute(n,c),l.uv=Vn.getInterpolation(ta,bs,vs,xs,Zr,Jr,$r,new ft)),s&&(Zr.fromBufferAttribute(s,o),Jr.fromBufferAttribute(s,h),$r.fromBufferAttribute(s,c),l.uv1=Vn.getInterpolation(ta,bs,vs,xs,Zr,Jr,$r,new ft),l.uv2=l.uv1),a&&(du.fromBufferAttribute(a,o),fu.fromBufferAttribute(a,h),pu.fromBufferAttribute(a,c),l.normal=Vn.getInterpolation(ta,bs,vs,xs,du,fu,pu,new w),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));let u={a:o,b:h,c,normal:new w,materialIndex:0};Vn.getNormal(bs,vs,xs,u.normal),l.face=u}return l}var Ce=class r extends le{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let h=[],c=[],l=[],u=[],d=0,f=0;m("z","y","x",-1,-1,i,e,t,a,s,0),m("z","y","x",1,-1,i,e,-t,a,s,1),m("x","z","y",1,1,t,i,e,n,a,2),m("x","z","y",1,-1,t,i,-e,n,a,3),m("x","y","z",1,-1,t,e,i,n,s,4),m("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(h),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(u,2));function m(b,g,p,x,v,M,R,y,E,T,_){let S=M/E,k=R/T,W=M/2,Y=R/2,N=y/2,D=E+1,O=T+1,B=0,U=0,F=new w;for(let P=0;P<O;P++){let V=P*k-Y;for(let q=0;q<D;q++){let H=q*S-W;F[b]=H*x,F[g]=V*v,F[p]=N,c.push(F.x,F.y,F.z),F[b]=0,F[g]=0,F[p]=y>0?1:-1,l.push(F.x,F.y,F.z),u.push(q/E),u.push(1-P/T),B+=1}}for(let P=0;P<T;P++)for(let V=0;V<E;V++){let q=d+V+D*P,H=d+V+D*(P+1),z=d+(V+1)+D*(P+1),G=d+(V+1)+D*P;h.push(q,H,G),h.push(H,z,G),U+=6}o.addGroup(f,U,_),f+=U,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Os(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ri(r){let t={};for(let e=0;e<r.length;e++){let i=Os(r[e]);for(let n in i)t[n]=i[n]}return t}function Ip(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function _d(r){return r.getRenderTarget()===null?r.outputColorSpace:he.workingColorSpace}var Fp={clone:Os,merge:ri},Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,se=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dp,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=Ip(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ra=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ne=class extends Ra{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/h,e-=a.offsetY*i/c,n*=a.width/h,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ys=-90,_s=1,Ch=class extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ne(ys,_s,t,e);n.layers=this.layers,this.add(n);let s=new Ne(ys,_s,t,e);s.layers=this.layers,this.add(s);let a=new Ne(ys,_s,t,e);a.layers=this.layers,this.add(a);let o=new Ne(ys,_s,t,e);o.layers=this.layers,this.add(o);let h=new Ne(ys,_s,t,e);h.layers=this.layers,this.add(h);let c=new Ne(ys,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,h]=e;for(let c of e)this.remove(c);if(t===cn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===_a)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,h,c,l]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,h),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,n),t.render(e,l),t.setRenderTarget(u,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Ca=class extends Ke{constructor(t,e,i,n,s,a,o,h,c,l){t=t!==void 0?t:[],e=e!==void 0?e:Is,super(t,e,i,n,s,a,o,h,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ph=class extends _e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===qn?fe:qe),this.texture=new Ca(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ce(5,5,5),s=new se({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xe,blending:En});s.uniforms.tEquirect.value=e;let a=new pt(n,s),o=e.minFilter;return e.minFilter===Ye&&(e.minFilter=ee),new Ch(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},ah=new w,zp=new w,Up=new te,zi=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=ah.subVectors(i,e).cross(zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(ah),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Up.getNormalMatrix(t),n=this.coplanarPoint(ah).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},On=new _i,na=new w,_r=class{constructor(t=new zi,e=new zi,i=new zi,n=new zi,s=new zi,a=new zi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=cn){let i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],h=n[3],c=n[4],l=n[5],u=n[6],d=n[7],f=n[8],m=n[9],b=n[10],g=n[11],p=n[12],x=n[13],v=n[14],M=n[15];if(i[0].setComponents(h-s,d-c,g-f,M-p).normalize(),i[1].setComponents(h+s,d+c,g+f,M+p).normalize(),i[2].setComponents(h+a,d+l,g+m,M+x).normalize(),i[3].setComponents(h-a,d-l,g-m,M-x).normalize(),i[4].setComponents(h-o,d-u,g-b,M-v).normalize(),e===cn)i[5].setComponents(h+o,d+u,g+b,M+v).normalize();else if(e===_a)i[5].setComponents(o,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(na.x=n.normal.x>0?t.max.x:t.min.x,na.y=n.normal.y>0?t.max.y:t.min.y,na.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Md(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Np(r,t){let e=t.isWebGL2,i=new WeakMap;function n(c,l){let u=c.array,d=c.usage,f=u.byteLength,m=r.createBuffer();r.bindBuffer(l,m),r.bufferData(l,u,d),c.onUploadCallback();let b;if(u instanceof Float32Array)b=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)b=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)b=r.SHORT;else if(u instanceof Uint32Array)b=r.UNSIGNED_INT;else if(u instanceof Int32Array)b=r.INT;else if(u instanceof Int8Array)b=r.BYTE;else if(u instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:b,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,l,u){let d=l.array,f=l._updateRange,m=l.updateRanges;if(r.bindBuffer(u,c),f.count===-1&&m.length===0&&r.bufferSubData(u,0,d),m.length!==0){for(let b=0,g=m.length;b<g;b++){let p=m[b];e?r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}l.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),l.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let l=i.get(c);l&&(r.deleteBuffer(l.buffer),i.delete(c))}function h(c,l){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,n(c,l));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,l),u.version=c.version}}return{get:a,remove:o,update:h}}var Mi=class r extends le{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),h=Math.floor(n),c=o+1,l=h+1,u=t/o,d=e/h,f=[],m=[],b=[],g=[];for(let p=0;p<l;p++){let x=p*d-a;for(let v=0;v<c;v++){let M=v*u-s;m.push(M,-x,0),b.push(0,0,1),g.push(v/o),g.push(1-p/h)}}for(let p=0;p<h;p++)for(let x=0;x<o;x++){let v=x+c*p,M=x+c*(p+1),R=x+1+c*(p+1),y=x+1+c*p;f.push(v,M,y),f.push(M,R,y)}this.setIndex(f),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(b,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
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
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
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
#endif`,Xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp=`#ifdef USE_BATCHING
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
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,$p=`#ifdef USE_BUMPMAP
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,h0=`#define PI 3.141592653589793
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
} // validated`,c0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l0=`vec3 transformedNormal = objectNormal;
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
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`
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
}`,b0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
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
}`,A0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,R0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L0=`uniform bool receiveShadow;
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
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,F0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
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
#endif`,N0=`struct PhysicalMaterial {
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
}`,O0=`
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,q0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,X0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K0=`#if defined( USE_POINTS_UV )
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
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$0=`#ifdef USE_MORPHNORMALS
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
#endif`,tm=`#ifdef USE_MORPHTARGETS
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
#endif`,em=`#ifdef USE_MORPHTARGETS
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
#endif`,im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wm=`float getShadowMask() {
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
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Om=`uniform sampler2D t2D;
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,qm=`#if DEPTH_PACKING == 3200
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
}`,Xm=`#define DISTANCE
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
}`,jm=`#define DISTANCE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,$m=`uniform vec3 diffuse;
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define LAMBERT
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
}`,ig=`#define MATCAP
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
}`,ng=`#define MATCAP
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
}`,sg=`#define NORMAL
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
}`,rg=`#define NORMAL
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
}`,ag=`#define PHONG
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
}`,og=`#define PHONG
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
}`,hg=`#define STANDARD
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
}`,cg=`#define STANDARD
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
}`,lg=`#define TOON
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
}`,ug=`#define TOON
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
}`,dg=`uniform float size;
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 color;
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
}`,gg=`uniform float rotation;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Op,alphahash_pars_fragment:Bp,alphamap_fragment:Hp,alphamap_pars_fragment:Vp,alphatest_fragment:Gp,alphatest_pars_fragment:Wp,aomap_fragment:qp,aomap_pars_fragment:Xp,batching_pars_vertex:jp,batching_vertex:Yp,begin_vertex:Kp,beginnormal_vertex:Qp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:$p,clipping_planes_fragment:t0,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:n0,color_fragment:s0,color_pars_fragment:r0,color_pars_vertex:a0,color_vertex:o0,common:h0,cube_uv_reflection_fragment:c0,defaultnormal_vertex:l0,displacementmap_pars_vertex:u0,displacementmap_vertex:d0,emissivemap_fragment:f0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:b0,envmap_common_pars_fragment:v0,envmap_pars_fragment:x0,envmap_pars_vertex:y0,envmap_physical_pars_fragment:I0,envmap_vertex:_0,fog_vertex:M0,fog_pars_vertex:w0,fog_fragment:E0,fog_pars_fragment:S0,gradientmap_pars_fragment:T0,lightmap_fragment:A0,lightmap_pars_fragment:R0,lights_lambert_fragment:C0,lights_lambert_pars_fragment:P0,lights_pars_begin:L0,lights_toon_fragment:F0,lights_toon_pars_fragment:D0,lights_phong_fragment:k0,lights_phong_pars_fragment:z0,lights_physical_fragment:U0,lights_physical_pars_fragment:N0,lights_fragment_begin:O0,lights_fragment_maps:B0,lights_fragment_end:H0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:G0,logdepthbuf_pars_vertex:W0,logdepthbuf_vertex:q0,map_fragment:X0,map_pars_fragment:j0,map_particle_fragment:Y0,map_particle_pars_fragment:K0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:Z0,morphcolor_vertex:J0,morphnormal_vertex:$0,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:im,normal_fragment_maps:nm,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:am,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:lm,iridescence_pars_fragment:um,opaque_fragment:dm,packing:fm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:bm,roughnessmap_fragment:vm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:_m,shadowmap_vertex:Mm,shadowmask_pars_fragment:wm,skinbase_vertex:Em,skinning_pars_vertex:Sm,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:Rm,specularmap_pars_fragment:Cm,tonemapping_fragment:Pm,tonemapping_pars_fragment:Lm,transmission_fragment:Im,transmission_pars_fragment:Fm,uv_pars_fragment:Dm,uv_pars_vertex:km,uv_vertex:zm,worldpos_vertex:Um,background_vert:Nm,background_frag:Om,backgroundCube_vert:Bm,backgroundCube_frag:Hm,cube_vert:Vm,cube_frag:Gm,depth_vert:Wm,depth_frag:qm,distanceRGBA_vert:Xm,distanceRGBA_frag:jm,equirect_vert:Ym,equirect_frag:Km,linedashed_vert:Qm,linedashed_frag:Zm,meshbasic_vert:Jm,meshbasic_frag:$m,meshlambert_vert:tg,meshlambert_frag:eg,meshmatcap_vert:ig,meshmatcap_frag:ng,meshnormal_vert:sg,meshnormal_frag:rg,meshphong_vert:ag,meshphong_frag:og,meshphysical_vert:hg,meshphysical_frag:cg,meshtoon_vert:lg,meshtoon_frag:ug,points_vert:dg,points_frag:fg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:bg},Mt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Wi={basic:{uniforms:ri([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:ri([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:ri([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:ri([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:ri([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:ri([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:ri([Mt.points,Mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:ri([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:ri([Mt.common,Mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:ri([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:ri([Mt.sprite,Mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:ri([Mt.common,Mt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:ri([Mt.lights,Mt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Wi.physical={uniforms:ri([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var sa={r:0,b:0,g:0};function vg(r,t,e,i,n,s,a){let o=new Dt(0),h=s===!0?0:1,c,l,u=null,d=0,f=null;function m(g,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?b(o,h):v&&v.isColor&&(b(v,1),x=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Xa)?(l===void 0&&(l=new pt(new Ce(1,1,1),new se({name:"BackgroundCubeMaterial",uniforms:Os(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==ve,(u!==v||d!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new pt(new Mi(2,2),new se({name:"BackgroundMaterial",uniforms:Os(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=he.getTransfer(v.colorSpace)!==ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function b(g,p){g.getRGB(sa,_d(r)),i.buffers.color.setClear(sa.r,sa.g,sa.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),h=p,b(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,b(o,h)},render:m}}function xg(r,t,e,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},h=g(null),c=h,l=!1;function u(N,D,O,B,U){let F=!1;if(a){let P=b(B,O,D);c!==P&&(c=P,f(c.object)),F=p(N,B,O,U),F&&x(N,B,O,U)}else{let P=D.wireframe===!0;(c.geometry!==B.id||c.program!==O.id||c.wireframe!==P)&&(c.geometry=B.id,c.program=O.id,c.wireframe=P,F=!0)}U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(F||l)&&(l=!1,T(N,D,O,B),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(N){return i.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function m(N){return i.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function b(N,D,O){let B=O.wireframe===!0,U=o[N.id];U===void 0&&(U={},o[N.id]=U);let F=U[D.id];F===void 0&&(F={},U[D.id]=F);let P=F[B];return P===void 0&&(P=g(d()),F[B]=P),P}function g(N){let D=[],O=[],B=[];for(let U=0;U<n;U++)D[U]=0,O[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:B,object:N,attributes:{},index:null}}function p(N,D,O,B){let U=c.attributes,F=D.attributes,P=0,V=O.getAttributes();for(let q in V)if(V[q].location>=0){let z=U[q],G=F[q];if(G===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),z===void 0||z.attribute!==G||G&&z.data!==G.data)return!0;P++}return c.attributesNum!==P||c.index!==B}function x(N,D,O,B){let U={},F=D.attributes,P=0,V=O.getAttributes();for(let q in V)if(V[q].location>=0){let z=F[q];z===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(z=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(z=N.instanceColor));let G={};G.attribute=z,z&&z.data&&(G.data=z.data),U[q]=G,P++}c.attributes=U,c.attributesNum=P,c.index=B}function v(){let N=c.newAttributes;for(let D=0,O=N.length;D<O;D++)N[D]=0}function M(N){R(N,0)}function R(N,D){let O=c.newAttributes,B=c.enabledAttributes,U=c.attributeDivisors;O[N]=1,B[N]===0&&(r.enableVertexAttribArray(N),B[N]=1),U[N]!==D&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,D),U[N]=D)}function y(){let N=c.newAttributes,D=c.enabledAttributes;for(let O=0,B=D.length;O<B;O++)D[O]!==N[O]&&(r.disableVertexAttribArray(O),D[O]=0)}function E(N,D,O,B,U,F,P){P===!0?r.vertexAttribIPointer(N,D,O,U,F):r.vertexAttribPointer(N,D,O,B,U,F)}function T(N,D,O,B){if(i.isWebGL2===!1&&(N.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let U=B.attributes,F=O.getAttributes(),P=D.defaultAttributeValues;for(let V in F){let q=F[V];if(q.location>=0){let H=U[V];if(H===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(H=N.instanceColor)),H!==void 0){let z=H.normalized,G=H.itemSize,tt=e.get(H);if(tt===void 0)continue;let Q=tt.buffer,et=tt.type,ot=tt.bytesPerElement,it=i.isWebGL2===!0&&(et===r.INT||et===r.UNSIGNED_INT||H.gpuType===hd);if(H.isInterleavedBufferAttribute){let wt=H.data,K=wt.stride,zt=H.offset;if(wt.isInstancedInterleavedBuffer){for(let xt=0;xt<q.locationSize;xt++)R(q.location+xt,wt.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let xt=0;xt<q.locationSize;xt++)M(q.location+xt);r.bindBuffer(r.ARRAY_BUFFER,Q);for(let xt=0;xt<q.locationSize;xt++)E(q.location+xt,G/q.locationSize,et,z,K*ot,(zt+G/q.locationSize*xt)*ot,it)}else{if(H.isInstancedBufferAttribute){for(let wt=0;wt<q.locationSize;wt++)R(q.location+wt,H.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let wt=0;wt<q.locationSize;wt++)M(q.location+wt);r.bindBuffer(r.ARRAY_BUFFER,Q);for(let wt=0;wt<q.locationSize;wt++)E(q.location+wt,G/q.locationSize,et,z,G*ot,G/q.locationSize*wt*ot,it)}}else if(P!==void 0){let z=P[V];if(z!==void 0)switch(z.length){case 2:r.vertexAttrib2fv(q.location,z);break;case 3:r.vertexAttrib3fv(q.location,z);break;case 4:r.vertexAttrib4fv(q.location,z);break;default:r.vertexAttrib1fv(q.location,z)}}}}y()}function _(){W();for(let N in o){let D=o[N];for(let O in D){let B=D[O];for(let U in B)m(B[U].object),delete B[U];delete D[O]}delete o[N]}}function S(N){if(o[N.id]===void 0)return;let D=o[N.id];for(let O in D){let B=D[O];for(let U in B)m(B[U].object),delete B[U];delete D[O]}delete o[N.id]}function k(N){for(let D in o){let O=o[D];if(O[N.id]===void 0)continue;let B=O[N.id];for(let U in B)m(B[U].object),delete B[U];delete O[N.id]}}function W(){Y(),l=!0,c!==h&&(c=h,f(c.object))}function Y(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:u,reset:W,resetDefaultState:Y,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:M,disableUnusedAttributes:y}}function yg(r,t,e,i){let n=i.isWebGL2,s;function a(l){s=l}function o(l,u){r.drawArrays(s,l,u),e.update(u,s,1)}function h(l,u,d){if(d===0)return;let f,m;if(n)f=r,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,u,d),e.update(u,s,d)}function c(l,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d;m++)this.render(l[m],u[m]);else{f.multiDrawArraysWEBGL(s,l,0,u,0,d);let m=0;for(let b=0;b<d;b++)m+=u[b];e.update(m,s,1)}}this.setMode=a,this.render=o,this.renderInstances=h,this.renderMultiDraw=c}function _g(r,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",h=s(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);let c=a||t.has("WEBGL_draw_buffers"),l=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,M=a||t.has("OES_texture_float"),R=v&&M,y=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:b,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:y}}function Mg(r){let t=this,e=null,i=0,n=!1,s=!1,a=new zi,o=new te,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=l(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!n||m===null||m.length===0||s&&!g)s?l(null):c();else{let x=s?0:i,v=x*4,M=p.clippingState||null;h.value=M,M=l(m,d,v,f);for(let R=0;R!==v;++R)M[R]=e[R];p.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function l(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=h.value,m!==!0||g===null){let p=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,M=f;v!==b;++v,M+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(g,M),g[M+3]=a.constant}h.value=g,h.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}function wg(r){let t=new WeakMap;function e(a,o){return o===Mh?a.mapping=Is:o===wh&&(a.mapping=Fs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Mh||o===wh)if(t.has(a)){let h=t.get(a).texture;return e(h,a.mapping)}else{let h=a.image;if(h&&h.height>0){let c=new Ph(h.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var fi=class extends Ra{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,h=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=l*this.view.offsetY,h=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rs=4,mu=[.125,.215,.35,.446,.526,.582],Hn=20,oh=new fi,gu=new Dt,hh=null,ch=0,lh=0,Bn=(1+Math.sqrt(5))/2,Ms=1/Bn,bu=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Bn,Ms),new w(0,Bn,-Ms),new w(Ms,0,Bn),new w(-Ms,0,Bn),new w(Bn,Ms,0),new w(-Bn,Ms,0)],Bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){hh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hh,ch,lh),t.scissorTest=!1,ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ee,minFilter:ee,generateMipmaps:!1,type:ln,format:de,colorSpace:De,depthBuffer:!1},n=vu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(s)),this._blurMaterial=Sg(s,t,e)}return n}_compileMaterial(t){let e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,oh)}_sceneToCubeUV(t,e,i,n){let o=new Ne(90,1,e,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(gu),l.toneMapping=Xi,l.autoClear=!1;let f=new Oe({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),m=new pt(new Ce,f),b=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,b=!0):(f.color.copy(gu),b=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,h[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,h[p]),o.lookAt(0,c[p],0)):(o.up.set(0,h[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;ra(n,x*v,p>2?v:0,v,v),l.setRenderTarget(n),b&&l.render(m,o),l.render(t,o)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=d,l.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Is||t.mapping===Fs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new pt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let h=this._cubeSize;ra(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(a,oh)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=bu[(n-1)%bu.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let h=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new pt(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Hn-1),b=s/m,g=isFinite(s)?1+Math.floor(l*b):Hn;g>Hn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hn}`);let p=[],x=0;for(let E=0;E<Hn;++E){let T=E/b,_=Math.exp(-T*T/2);p.push(_),E===0?x+=_:E<g&&(x+=2*_)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-i;let M=this._sizeLods[n],R=3*M*(n>v-Rs?n-v+Rs:0),y=4*(this._cubeSize-M);ra(e,R,y,3*M,2*M),h.setRenderTarget(e),h.render(u,oh)}};function Eg(r){let t=[],e=[],i=[],n=r,s=r-Rs+1+mu.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let h=1/o;a>r-Rs?h=mu[a-r+Rs-1]:a===0&&(h=0),i.push(h);let c=1/(o-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,m=6,b=3,g=2,p=1,x=new Float32Array(b*m*f),v=new Float32Array(g*m*f),M=new Float32Array(p*m*f);for(let y=0;y<f;y++){let E=y%3*2/3-1,T=y>2?0:-1,_=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];x.set(_,b*m*y),v.set(d,g*m*y);let S=[y,y,y,y,y,y];M.set(S,p*m*y)}let R=new le;R.setAttribute("position",new Wt(x,b)),R.setAttribute("uv",new Wt(v,g)),R.setAttribute("faceIndex",new Wt(M,p)),t.push(R),n>Rs&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function vu(r,t,e){let i=new _e(r,t,e);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ra(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Sg(r,t,e){let i=new Float32Array(Hn),n=new w(0,1,0);return new se({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:mc(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function xu(){return new se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function yu(){return new se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}function Tg(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let h=o.mapping,c=h===Mh||h===wh,l=h===Is||h===Fs;if(c||l)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Bs(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||l&&u&&n(u)){e===null&&(e=new Bs(r));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function n(o){let h=0,c=6;for(let l=0;l<c;l++)o[l]!==void 0&&h++;return h===c}function s(o){let h=o.target;h.removeEventListener("dispose",s);let c=t.get(h);c!==void 0&&(t.delete(h),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Ag(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Rg(r,t,e,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let b=d.morphAttributes[m];for(let g=0,p=b.length;g<p;g++)t.remove(b[g])}d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function h(u){let d=u.attributes;for(let m in d)t.update(d[m],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let b=f[m];for(let g=0,p=b.length;g<p;g++)t.update(b[g],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(f!==null){let x=f.array;b=f.version;for(let v=0,M=x.length;v<M;v+=3){let R=x[v+0],y=x[v+1],E=x[v+2];d.push(R,y,y,E,E,R)}}else if(m!==void 0){let x=m.array;b=m.version;for(let v=0,M=x.length/3-1;v<M;v+=3){let R=v+0,y=v+1,E=v+2;d.push(R,y,y,E,E,R)}}else return;let g=new(xd(d)?Aa:Ns)(d,1);g.version=b;let p=s.get(u);p&&t.remove(p),s.set(u,g)}function l(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:h,getWireframeAttribute:l}}function Cg(r,t,e,i){let n=i.isWebGL2,s;function a(f){s=f}let o,h;function c(f){o=f.type,h=f.bytesPerElement}function l(f,m){r.drawElements(s,m,o,f*h),e.update(m,s,1)}function u(f,m,b){if(b===0)return;let g,p;if(n)g=r,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,m,o,f*h,b),e.update(m,s,b)}function d(f,m,b){if(b===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<b;p++)this.render(f[p]/h,m[p]);else{g.multiDrawElementsWEBGL(s,m,0,o,f,0,b);let p=0;for(let x=0;x<b;x++)p+=m[x];e.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function Pg(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Lg(r,t){return r[0]-t[0]}function Ig(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Fg(r,t,e){let i={},n=new Float32Array(8),s=new WeakMap,a=new ie,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function h(c,l,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=f!==void 0?f.length:0,b=s.get(l);if(b===void 0||b.count!==m){let N=function(){W.dispose(),s.delete(l),l.removeEventListener("dispose",N)};b!==void 0&&b.texture.dispose();let x=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,R=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],E=l.morphAttributes.color||[],T=0;x===!0&&(T=1),v===!0&&(T=2),M===!0&&(T=3);let _=l.attributes.position.count*T,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let k=new Float32Array(_*S*4*m),W=new Sa(k,_,S,m);W.type=hn,W.needsUpdate=!0;let Y=T*4;for(let D=0;D<m;D++){let O=R[D],B=y[D],U=E[D],F=_*S*4*D;for(let P=0;P<O.count;P++){let V=P*Y;x===!0&&(a.fromBufferAttribute(O,P),k[F+V+0]=a.x,k[F+V+1]=a.y,k[F+V+2]=a.z,k[F+V+3]=0),v===!0&&(a.fromBufferAttribute(B,P),k[F+V+4]=a.x,k[F+V+5]=a.y,k[F+V+6]=a.z,k[F+V+7]=0),M===!0&&(a.fromBufferAttribute(U,P),k[F+V+8]=a.x,k[F+V+9]=a.y,k[F+V+10]=a.z,k[F+V+11]=U.itemSize===4?a.w:1)}}b={count:m,texture:W,size:new ft(_,S)},s.set(l,b),l.addEventListener("dispose",N)}let g=0;for(let x=0;x<d.length;x++)g+=d[x];let p=l.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",b.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",b.size)}else{let f=d===void 0?0:d.length,m=i[l.id];if(m===void 0||m.length!==f){m=[];for(let v=0;v<f;v++)m[v]=[v,0];i[l.id]=m}for(let v=0;v<f;v++){let M=m[v];M[0]=v,M[1]=d[v]}m.sort(Ig);for(let v=0;v<8;v++)v<f&&m[v][1]?(o[v][0]=m[v][0],o[v][1]=m[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Lg);let b=l.morphAttributes.position,g=l.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let M=o[v],R=M[0],y=M[1];R!==Number.MAX_SAFE_INTEGER&&y?(b&&l.getAttribute("morphTarget"+v)!==b[R]&&l.setAttribute("morphTarget"+v,b[R]),g&&l.getAttribute("morphNormal"+v)!==g[R]&&l.setAttribute("morphNormal"+v,g[R]),n[v]=y,p+=y):(b&&l.hasAttribute("morphTarget"+v)===!0&&l.deleteAttribute("morphTarget"+v),g&&l.hasAttribute("morphNormal"+v)===!0&&l.deleteAttribute("morphNormal"+v),n[v]=0)}let x=l.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:h}}function Dg(r,t,e,i){let n=new WeakMap;function s(h){let c=i.render.frame,l=h.geometry,u=t.get(h,l);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),n.get(h)!==c&&(e.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,r.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){let d=h.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(h){let c=h.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var Yn=class extends Ke{constructor(t,e,i,n,s,a,o,h,c,l){if(l=l!==void 0?l:Wn,l!==Wn&&l!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===Wn&&(i=Mn),i===void 0&&l===Ds&&(i=Gn),super(null,n,s,a,o,h,l,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Re,this.minFilter=h!==void 0?h:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wd=new Ke,Ed=new Yn(1,1);Ed.compareFunction=vd;var Sd=new Sa,Td=new Rh,Ad=new Ca,_u=[],Mu=[],wu=new Float32Array(16),Eu=new Float32Array(9),Su=new Float32Array(4);function js(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=_u[n];if(s===void 0&&(s=new Float32Array(n),_u[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Be(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function He(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Ka(r,t){let e=Mu[t];e===void 0&&(e=new Int32Array(t),Mu[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function kg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function zg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;r.uniform2fv(this.addr,t),He(e,t)}}function Ug(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;r.uniform3fv(this.addr,t),He(e,t)}}function Ng(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;r.uniform4fv(this.addr,t),He(e,t)}}function Og(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Be(e,i))return;Su.set(i),r.uniformMatrix2fv(this.addr,!1,Su),He(e,i)}}function Bg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Be(e,i))return;Eu.set(i),r.uniformMatrix3fv(this.addr,!1,Eu),He(e,i)}}function Hg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Be(e,i))return;wu.set(i),r.uniformMatrix4fv(this.addr,!1,wu),He(e,i)}}function Vg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Gg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;r.uniform2iv(this.addr,t),He(e,t)}}function Wg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;r.uniform3iv(this.addr,t),He(e,t)}}function qg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;r.uniform4iv(this.addr,t),He(e,t)}}function Xg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function jg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;r.uniform2uiv(this.addr,t),He(e,t)}}function Yg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;r.uniform3uiv(this.addr,t),He(e,t)}}function Kg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;r.uniform4uiv(this.addr,t),He(e,t)}}function Qg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?Ed:wd;e.setTexture2D(t||s,n)}function Zg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Td,n)}function Jg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Ad,n)}function $g(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Sd,n)}function tb(r){switch(r){case 5126:return kg;case 35664:return zg;case 35665:return Ug;case 35666:return Ng;case 35674:return Og;case 35675:return Bg;case 35676:return Hg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return Wg;case 35669:case 35673:return qg;case 5125:return Xg;case 36294:return jg;case 36295:return Yg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return $g}}function eb(r,t){r.uniform1fv(this.addr,t)}function ib(r,t){let e=js(t,this.size,2);r.uniform2fv(this.addr,e)}function nb(r,t){let e=js(t,this.size,3);r.uniform3fv(this.addr,e)}function sb(r,t){let e=js(t,this.size,4);r.uniform4fv(this.addr,e)}function rb(r,t){let e=js(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ab(r,t){let e=js(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ob(r,t){let e=js(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function hb(r,t){r.uniform1iv(this.addr,t)}function cb(r,t){r.uniform2iv(this.addr,t)}function lb(r,t){r.uniform3iv(this.addr,t)}function ub(r,t){r.uniform4iv(this.addr,t)}function db(r,t){r.uniform1uiv(this.addr,t)}function fb(r,t){r.uniform2uiv(this.addr,t)}function pb(r,t){r.uniform3uiv(this.addr,t)}function mb(r,t){r.uniform4uiv(this.addr,t)}function gb(r,t,e){let i=this.cache,n=t.length,s=Ka(e,n);Be(i,s)||(r.uniform1iv(this.addr,s),He(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||wd,s[a])}function bb(r,t,e){let i=this.cache,n=t.length,s=Ka(e,n);Be(i,s)||(r.uniform1iv(this.addr,s),He(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Td,s[a])}function vb(r,t,e){let i=this.cache,n=t.length,s=Ka(e,n);Be(i,s)||(r.uniform1iv(this.addr,s),He(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Ad,s[a])}function xb(r,t,e){let i=this.cache,n=t.length,s=Ka(e,n);Be(i,s)||(r.uniform1iv(this.addr,s),He(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Sd,s[a])}function yb(r){switch(r){case 5126:return eb;case 35664:return ib;case 35665:return nb;case 35666:return sb;case 35674:return rb;case 35675:return ab;case 35676:return ob;case 5124:case 35670:return hb;case 35667:case 35671:return cb;case 35668:case 35672:return lb;case 35669:case 35673:return ub;case 5125:return db;case 36294:return fb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return xb}}var Lh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=tb(e.type)}},Ih=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yb(e.type)}},Fh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},uh=/(\w+)(\])?(\[|\.)?/g;function Tu(r,t){r.seq.push(t),r.map[t.id]=t}function _b(r,t,e){let i=r.name,n=i.length;for(uh.lastIndex=0;;){let s=uh.exec(i),a=uh.lastIndex,o=s[1],h=s[2]==="]",c=s[3];if(h&&(o=o|0),c===void 0||c==="["&&a+2===n){Tu(e,c===void 0?new Lh(o,r,t):new Ih(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Fh(o),Tu(e,u)),e=u}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);_b(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],h=i[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Au(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var Mb=37297,wb=0;function Eb(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Sb(r){let t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(r),i;switch(t===e?i="":t===ya&&e===xa?i="LinearDisplayP3ToLinearSRGB":t===xa&&e===ya&&(i="LinearSRGBToLinearDisplayP3"),r){case De:case Ya:return[i,"LinearTransferOETF"];case fe:case fc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Ru(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Eb(r.getShaderSource(t),a)}else return n}function Tb(r,t){let e=Sb(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ab(r,t){let e;switch(t){case Lf:e="Linear";break;case If:e="Reinhard";break;case Ff:e="OptimizedCineon";break;case Df:e="ACESFilmic";break;case zf:e="AgX";break;case kf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Rb(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function Cb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Cs).join(`
`)}function Pb(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Lb(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Cs(r){return r!==""}function Cu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(r){return r.replace(Ib,Db)}var Fb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Db(r,t){let e=Qt[t];if(e===void 0){let i=Fb.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Dh(e)}var kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(r){return r.replace(kb,zb)}function zb(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Iu(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ub(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===hf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function Nb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Is:case Fs:t="ENVMAP_TYPE_CUBE";break;case Xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ob(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function Bb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ad:t="ENVMAP_BLENDING_MULTIPLY";break;case Cf:t="ENVMAP_BLENDING_MIX";break;case Pf:t="ENVMAP_BLENDING_ADD";break}return t}function Hb(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Vb(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,h=Ub(e),c=Nb(e),l=Ob(e),u=Bb(e),d=Hb(e),f=e.isWebGL2?"":Rb(e),m=Cb(e),b=Pb(s),g=n.createProgram(),p,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Cs).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Cs).join(`
`),x.length>0&&(x+=`
`)):(p=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),x=[f,Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Xi?Ab("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Tb("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Dh(a),a=Cu(a,e),a=Pu(a,e),o=Dh(o),o=Cu(o,e),o=Pu(o,e),a=Lu(a),o=Lu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let M=v+p+a,R=v+x+o,y=Au(n,n.VERTEX_SHADER,M),E=Au(n,n.FRAGMENT_SHADER,R);n.attachShader(g,y),n.attachShader(g,E),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function T(W){if(r.debug.checkShaderErrors){let Y=n.getProgramInfoLog(g).trim(),N=n.getShaderInfoLog(y).trim(),D=n.getShaderInfoLog(E).trim(),O=!0,B=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,y,E);else{let U=Ru(n,y,"vertex"),F=Ru(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+U+`
`+F)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(N===""||D==="")&&(B=!1);B&&(W.diagnostics={runnable:O,programLog:Y,vertexShader:{log:N,prefix:p},fragmentShader:{log:D,prefix:x}})}n.deleteShader(y),n.deleteShader(E),_=new Ls(n,g),S=Lb(n,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=n.getProgramParameter(g,Mb)),k},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wb++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=E,this}var Gb=0,kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new zh(t),e.set(t,i)),i}},zh=class{constructor(t){this.id=Gb++,this.code=t,this.usedTimes=0}};function Wb(r,t,e,i,n,s,a){let o=new Ta,h=new kh,c=[],l=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(_){return _===0?"uv":`uv${_}`}function g(_,S,k,W,Y){let N=W.fog,D=Y.geometry,O=_.isMeshStandardMaterial?W.environment:null,B=(_.isMeshStandardMaterial?e:t).get(_.envMap||O),U=B&&B.mapping===Xa?B.image.height:null,F=m[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let P=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,V=P!==void 0?P.length:0,q=0;D.morphAttributes.position!==void 0&&(q=1),D.morphAttributes.normal!==void 0&&(q=2),D.morphAttributes.color!==void 0&&(q=3);let H,z,G,tt;if(F){let ii=Wi[F];H=ii.vertexShader,z=ii.fragmentShader}else H=_.vertexShader,z=_.fragmentShader,h.update(_),G=h.getVertexShaderID(_),tt=h.getFragmentShaderID(_);let Q=r.getRenderTarget(),et=Y.isInstancedMesh===!0,ot=Y.isBatchedMesh===!0,it=!!_.map,wt=!!_.matcap,K=!!B,zt=!!_.aoMap,xt=!!_.lightMap,Ct=!!_.bumpMap,bt=!!_.normalMap,Ht=!!_.displacementMap,At=!!_.emissiveMap,L=!!_.metalnessMap,C=!!_.roughnessMap,$=_.anisotropy>0,ht=_.clearcoat>0,dt=_.iridescence>0,gt=_.sheen>0,Lt=_.transmission>0,j=$&&!!_.anisotropyMap,ct=ht&&!!_.clearcoatMap,vt=ht&&!!_.clearcoatNormalMap,kt=ht&&!!_.clearcoatRoughnessMap,ut=dt&&!!_.iridescenceMap,oe=dt&&!!_.iridescenceThicknessMap,Yt=gt&&!!_.sheenColorMap,Bt=gt&&!!_.sheenRoughnessMap,It=!!_.specularMap,Rt=!!_.specularColorMap,qt=!!_.specularIntensityMap,ae=Lt&&!!_.transmissionMap,Te=Lt&&!!_.thicknessMap,Jt=!!_.gradientMap,_t=!!_.alphaMap,X=_.alphaTest>0,Et=!!_.alphaHash,St=!!_.extensions,Vt=!!D.attributes.uv1,Ut=!!D.attributes.uv2,pe=!!D.attributes.uv3,me=Xi;return _.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(me=r.toneMapping),{isWebGL2:l,shaderID:F,shaderType:_.type,shaderName:_.name,vertexShader:H,fragmentShader:z,defines:_.defines,customVertexShaderID:G,customFragmentShaderID:tt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:ot,instancing:et,instancingColor:et&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:De,map:it,matcap:wt,envMap:K,envMapMode:K&&B.mapping,envMapCubeUVHeight:U,aoMap:zt,lightMap:xt,bumpMap:Ct,normalMap:bt,displacementMap:d&&Ht,emissiveMap:At,normalMapObjectSpace:bt&&_.normalMapType===Kf,normalMapTangentSpace:bt&&_.normalMapType===bd,metalnessMap:L,roughnessMap:C,anisotropy:$,anisotropyMap:j,clearcoat:ht,clearcoatMap:ct,clearcoatNormalMap:vt,clearcoatRoughnessMap:kt,iridescence:dt,iridescenceMap:ut,iridescenceThicknessMap:oe,sheen:gt,sheenColorMap:Yt,sheenRoughnessMap:Bt,specularMap:It,specularColorMap:Rt,specularIntensityMap:qt,transmission:Lt,transmissionMap:ae,thicknessMap:Te,gradientMap:Jt,opaque:_.transparent===!1&&_.blending===Sn,alphaMap:_t,alphaTest:X,alphaHash:Et,combine:_.combine,mapUv:it&&b(_.map.channel),aoMapUv:zt&&b(_.aoMap.channel),lightMapUv:xt&&b(_.lightMap.channel),bumpMapUv:Ct&&b(_.bumpMap.channel),normalMapUv:bt&&b(_.normalMap.channel),displacementMapUv:Ht&&b(_.displacementMap.channel),emissiveMapUv:At&&b(_.emissiveMap.channel),metalnessMapUv:L&&b(_.metalnessMap.channel),roughnessMapUv:C&&b(_.roughnessMap.channel),anisotropyMapUv:j&&b(_.anisotropyMap.channel),clearcoatMapUv:ct&&b(_.clearcoatMap.channel),clearcoatNormalMapUv:vt&&b(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&b(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&b(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&b(_.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&b(_.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&b(_.sheenRoughnessMap.channel),specularMapUv:It&&b(_.specularMap.channel),specularColorMapUv:Rt&&b(_.specularColorMap.channel),specularIntensityMapUv:qt&&b(_.specularIntensityMap.channel),transmissionMapUv:ae&&b(_.transmissionMap.channel),thicknessMapUv:Te&&b(_.thicknessMap.channel),alphaMapUv:_t&&b(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(bt||$),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Vt,vertexUv2s:Ut,vertexUv3s:pe,pointsUvs:Y.isPoints===!0&&!!D.attributes.uv&&(it||_t),fog:!!N,useFog:_.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:me,useLegacyLights:r._useLegacyLights,decodeVideoTexture:it&&_.map.isVideoTexture===!0&&he.getTransfer(_.map.colorSpace)===ve,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fe,flipSided:_.side===Xe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:St&&_.extensions.derivatives===!0,extensionFragDepth:St&&_.extensions.fragDepth===!0,extensionDrawBuffers:St&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:St&&_.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let k in _.defines)S.push(k),S.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(x(S,_),v(S,_),S.push(r.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function x(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function v(_,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function M(_){let S=m[_.type],k;if(S){let W=Wi[S];k=Fp.clone(W.uniforms)}else k=_.uniforms;return k}function R(_,S){let k;for(let W=0,Y=c.length;W<Y;W++){let N=c[W];if(N.cacheKey===S){k=N,++k.usedTimes;break}}return k===void 0&&(k=new Vb(r,S,_,s),c.push(k)),k}function y(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),_.destroy()}}function E(_){h.remove(_)}function T(){h.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:T}}function qb(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function Xb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Fu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Du(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,m,b,g){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:b,group:g},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=b,p.group=g),t++,p}function o(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function h(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Xb),i.length>1&&i.sort(d||Fu),n.length>1&&n.sort(d||Fu)}function l(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:h,finish:l,sort:c}}function jb(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new Du,r.set(i,[a])):n>=s.length?(a=new Du,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Yb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Dt};break;case"SpotLight":e={position:new w,direction:new w,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new w,halfWidth:new w,halfHeight:new w};break}return r[t.id]=e,e}}}function Kb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Qb=0;function Zb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Jb(r,t){let e=new Yb,i=Kb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let s=new w,a=new Pt,o=new Pt;function h(l,u){let d=0,f=0,m=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let b=0,g=0,p=0,x=0,v=0,M=0,R=0,y=0,E=0,T=0,_=0;l.sort(Zb);let S=u===!0?Math.PI:1;for(let W=0,Y=l.length;W<Y;W++){let N=l[W],D=N.color,O=N.intensity,B=N.distance,U=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=D.r*O*S,f+=D.g*O*S,m+=D.b*O*S;else if(N.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(N.sh.coefficients[F],O);_++}else if(N.isDirectionalLight){let F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){let P=N.shadow,V=i.get(N);V.shadowBias=P.bias,V.shadowNormalBias=P.normalBias,V.shadowRadius=P.radius,V.shadowMapSize=P.mapSize,n.directionalShadow[b]=V,n.directionalShadowMap[b]=U,n.directionalShadowMatrix[b]=N.shadow.matrix,M++}n.directional[b]=F,b++}else if(N.isSpotLight){let F=e.get(N);F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(D).multiplyScalar(O*S),F.distance=B,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,n.spot[p]=F;let P=N.shadow;if(N.map&&(n.spotLightMap[E]=N.map,E++,P.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[p]=P.matrix,N.castShadow){let V=i.get(N);V.shadowBias=P.bias,V.shadowNormalBias=P.normalBias,V.shadowRadius=P.radius,V.shadowMapSize=P.mapSize,n.spotShadow[p]=V,n.spotShadowMap[p]=U,y++}p++}else if(N.isRectAreaLight){let F=e.get(N);F.color.copy(D).multiplyScalar(O),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),n.rectArea[x]=F,x++}else if(N.isPointLight){let F=e.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*S),F.distance=N.distance,F.decay=N.decay,N.castShadow){let P=N.shadow,V=i.get(N);V.shadowBias=P.bias,V.shadowNormalBias=P.normalBias,V.shadowRadius=P.radius,V.shadowMapSize=P.mapSize,V.shadowCameraNear=P.camera.near,V.shadowCameraFar=P.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=N.shadow.matrix,R++}n.point[g]=F,g++}else if(N.isHemisphereLight){let F=e.get(N);F.skyColor.copy(N.color).multiplyScalar(O*S),F.groundColor.copy(N.groundColor).multiplyScalar(O*S),n.hemi[v]=F,v++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;let k=n.hash;(k.directionalLength!==b||k.pointLength!==g||k.spotLength!==p||k.rectAreaLength!==x||k.hemiLength!==v||k.numDirectionalShadows!==M||k.numPointShadows!==R||k.numSpotShadows!==y||k.numSpotMaps!==E||k.numLightProbes!==_)&&(n.directional.length=b,n.spot.length=p,n.rectArea.length=x,n.point.length=g,n.hemi.length=v,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=y+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=_,k.directionalLength=b,k.pointLength=g,k.spotLength=p,k.rectAreaLength=x,k.hemiLength=v,k.numDirectionalShadows=M,k.numPointShadows=R,k.numSpotShadows=y,k.numSpotMaps=E,k.numLightProbes=_,n.version=Qb++)}function c(l,u){let d=0,f=0,m=0,b=0,g=0,p=u.matrixWorldInverse;for(let x=0,v=l.length;x<v;x++){let M=l[x];if(M.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(M.isSpotLight){let R=n.spot[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let R=n.rectArea[b];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),b++}else if(M.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let R=n.hemi[g];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),g++}}}return{setup:h,setupView:c,state:n}}function ku(r,t){let e=new Jb(r,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function h(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:h,setupLightsView:c,pushLight:a,pushShadow:o}}function $b(r,t){let e=new WeakMap;function i(s,a=0){let o=e.get(s),h;return o===void 0?(h=new ku(r,t),e.set(s,[h])):a>=o.length?(h=new ku(r,t),o.push(h)):h=o[a],h}function n(){e=new WeakMap}return{get:i,dispose:n}}var Uh=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Nh=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ev=`uniform sampler2D shadow_pass;
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
}`;function iv(r,t,e){let i=new _r,n=new ft,s=new ft,a=new ie,o=new Uh({depthPacking:Yf}),h=new Nh,c={},l=e.maxTextureSize,u={[yi]:Xe,[Xe]:yi,[Fe]:Fe},d=new se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:tv,fragmentShader:ev}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new le;m.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new pt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rd;let p=this.type;this.render=function(y,E,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;let _=r.getRenderTarget(),S=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),W=r.state;W.setBlending(En),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Y=p!==an&&this.type===an,N=p===an&&this.type!==an;for(let D=0,O=y.length;D<O;D++){let B=y[D],U=B.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;n.copy(U.mapSize);let F=U.getFrameExtents();if(n.multiply(F),s.copy(U.mapSize),(n.x>l||n.y>l)&&(n.x>l&&(s.x=Math.floor(l/F.x),n.x=s.x*F.x,U.mapSize.x=s.x),n.y>l&&(s.y=Math.floor(l/F.y),n.y=s.y*F.y,U.mapSize.y=s.y)),U.map===null||Y===!0||N===!0){let V=this.type!==an?{minFilter:Re,magFilter:Re}:{};U.map!==null&&U.map.dispose(),U.map=new _e(n.x,n.y,V),U.map.texture.name=B.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();let P=U.getViewportCount();for(let V=0;V<P;V++){let q=U.getViewport(V);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),W.viewport(a),U.updateMatrices(B,V),i=U.getFrustum(),M(E,T,U.camera,B,this.type)}U.isPointLightShadow!==!0&&this.type===an&&x(U,T),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(_,S,k)};function x(y,E){let T=t.update(b);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new _e(n.x,n.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(E,null,T,d,b,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(E,null,T,f,b,null)}function v(y,E,T,_){let S=null,k=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(k!==void 0)S=k;else if(S=T.isPointLight===!0?h:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let W=S.uuid,Y=E.uuid,N=c[W];N===void 0&&(N={},c[W]=N);let D=N[Y];D===void 0&&(D=S.clone(),N[Y]=D,E.addEventListener("dispose",R)),S=D}if(S.visible=E.visible,S.wireframe=E.wireframe,_===an?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let W=r.properties.get(S);W.light=T}return S}function M(y,E,T,_,S){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===an)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);let Y=t.update(y),N=y.material;if(Array.isArray(N)){let D=Y.groups;for(let O=0,B=D.length;O<B;O++){let U=D[O],F=N[U.materialIndex];if(F&&F.visible){let P=v(y,F,_,S);y.onBeforeShadow(r,y,E,T,Y,P,U),r.renderBufferDirect(T,null,Y,P,y,U),y.onAfterShadow(r,y,E,T,Y,P,U)}}}else if(N.visible){let D=v(y,N,_,S);y.onBeforeShadow(r,y,E,T,Y,D,null),r.renderBufferDirect(T,null,Y,D,y,null),y.onAfterShadow(r,y,E,T,Y,D,null)}}let W=y.children;for(let Y=0,N=W.length;Y<N;Y++)M(W[Y],E,T,_,S)}function R(y){y.target.removeEventListener("dispose",R);for(let T in c){let _=c[T],S=y.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}function nv(r,t,e){let i=e.isWebGL2;function n(){let X=!1,Et=new ie,St=null,Vt=new ie(0,0,0,0);return{setMask:function(Ut){St!==Ut&&!X&&(r.colorMask(Ut,Ut,Ut,Ut),St=Ut)},setLocked:function(Ut){X=Ut},setClear:function(Ut,pe,me,Ve,ii){ii===!0&&(Ut*=Ve,pe*=Ve,me*=Ve),Et.set(Ut,pe,me,Ve),Vt.equals(Et)===!1&&(r.clearColor(Ut,pe,me,Ve),Vt.copy(Et))},reset:function(){X=!1,St=null,Vt.set(-1,0,0,0)}}}function s(){let X=!1,Et=null,St=null,Vt=null;return{setTest:function(Ut){Ut?ot(r.DEPTH_TEST):it(r.DEPTH_TEST)},setMask:function(Ut){Et!==Ut&&!X&&(r.depthMask(Ut),Et=Ut)},setFunc:function(Ut){if(St!==Ut){switch(Ut){case Mf:r.depthFunc(r.NEVER);break;case wf:r.depthFunc(r.ALWAYS);break;case Ef:r.depthFunc(r.LESS);break;case ga:r.depthFunc(r.LEQUAL);break;case Sf:r.depthFunc(r.EQUAL);break;case Tf:r.depthFunc(r.GEQUAL);break;case Af:r.depthFunc(r.GREATER);break;case Rf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}St=Ut}},setLocked:function(Ut){X=Ut},setClear:function(Ut){Vt!==Ut&&(r.clearDepth(Ut),Vt=Ut)},reset:function(){X=!1,Et=null,St=null,Vt=null}}}function a(){let X=!1,Et=null,St=null,Vt=null,Ut=null,pe=null,me=null,Ve=null,ii=null;return{setTest:function(ge){X||(ge?ot(r.STENCIL_TEST):it(r.STENCIL_TEST))},setMask:function(ge){Et!==ge&&!X&&(r.stencilMask(ge),Et=ge)},setFunc:function(ge,ni,Gi){(St!==ge||Vt!==ni||Ut!==Gi)&&(r.stencilFunc(ge,ni,Gi),St=ge,Vt=ni,Ut=Gi)},setOp:function(ge,ni,Gi){(pe!==ge||me!==ni||Ve!==Gi)&&(r.stencilOp(ge,ni,Gi),pe=ge,me=ni,Ve=Gi)},setLocked:function(ge){X=ge},setClear:function(ge){ii!==ge&&(r.clearStencil(ge),ii=ge)},reset:function(){X=!1,Et=null,St=null,Vt=null,Ut=null,pe=null,me=null,Ve=null,ii=null}}}let o=new n,h=new s,c=new a,l=new WeakMap,u=new WeakMap,d={},f={},m=new WeakMap,b=[],g=null,p=!1,x=null,v=null,M=null,R=null,y=null,E=null,T=null,_=new Dt(0,0,0),S=0,k=!1,W=null,Y=null,N=null,D=null,O=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,F=0,P=r.getParameter(r.VERSION);P.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(P)[1]),U=F>=1):P.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),U=F>=2);let V=null,q={},H=r.getParameter(r.SCISSOR_BOX),z=r.getParameter(r.VIEWPORT),G=new ie().fromArray(H),tt=new ie().fromArray(z);function Q(X,Et,St,Vt){let Ut=new Uint8Array(4),pe=r.createTexture();r.bindTexture(X,pe),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let me=0;me<St;me++)i&&(X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY)?r.texImage3D(Et,0,r.RGBA,1,1,Vt,0,r.RGBA,r.UNSIGNED_BYTE,Ut):r.texImage2D(Et+me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ut);return pe}let et={};et[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(et[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),h.setClear(1),c.setClear(0),ot(r.DEPTH_TEST),h.setFunc(ga),At(!1),L(gl),ot(r.CULL_FACE),bt(En);function ot(X){d[X]!==!0&&(r.enable(X),d[X]=!0)}function it(X){d[X]!==!1&&(r.disable(X),d[X]=!1)}function wt(X,Et){return f[X]!==Et?(r.bindFramebuffer(X,Et),f[X]=Et,i&&(X===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Et),X===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Et)),!0):!1}function K(X,Et){let St=b,Vt=!1;if(X)if(St=m.get(Et),St===void 0&&(St=[],m.set(Et,St)),X.isWebGLMultipleRenderTargets){let Ut=X.texture;if(St.length!==Ut.length||St[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,me=Ut.length;pe<me;pe++)St[pe]=r.COLOR_ATTACHMENT0+pe;St.length=Ut.length,Vt=!0}}else St[0]!==r.COLOR_ATTACHMENT0&&(St[0]=r.COLOR_ATTACHMENT0,Vt=!0);else St[0]!==r.BACK&&(St[0]=r.BACK,Vt=!0);Vt&&(e.isWebGL2?r.drawBuffers(St):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(St))}function zt(X){return g!==X?(r.useProgram(X),g=X,!0):!1}let xt={[on]:r.FUNC_ADD,[cf]:r.FUNC_SUBTRACT,[lf]:r.FUNC_REVERSE_SUBTRACT};if(i)xt[xl]=r.MIN,xt[yl]=r.MAX;else{let X=t.get("EXT_blend_minmax");X!==null&&(xt[xl]=X.MIN_EXT,xt[yl]=X.MAX_EXT)}let Ct={[qa]:r.ZERO,[uf]:r.ONE,[lc]:r.SRC_COLOR,[vr]:r.SRC_ALPHA,[bf]:r.SRC_ALPHA_SATURATE,[mf]:r.DST_COLOR,[ff]:r.DST_ALPHA,[df]:r.ONE_MINUS_SRC_COLOR,[_h]:r.ONE_MINUS_SRC_ALPHA,[gf]:r.ONE_MINUS_DST_COLOR,[pf]:r.ONE_MINUS_DST_ALPHA,[vf]:r.CONSTANT_COLOR,[xf]:r.ONE_MINUS_CONSTANT_COLOR,[yf]:r.CONSTANT_ALPHA,[_f]:r.ONE_MINUS_CONSTANT_ALPHA};function bt(X,Et,St,Vt,Ut,pe,me,Ve,ii,ge){if(X===En){p===!0&&(it(r.BLEND),p=!1);return}if(p===!1&&(ot(r.BLEND),p=!0),X!==cc){if(X!==x||ge!==k){if((v!==on||y!==on)&&(r.blendEquation(r.FUNC_ADD),v=on,y=on),ge)switch(X){case Sn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xn:r.blendFunc(r.ONE,r.ONE);break;case bl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Sn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case bl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}M=null,R=null,E=null,T=null,_.set(0,0,0),S=0,x=X,k=ge}return}Ut=Ut||Et,pe=pe||St,me=me||Vt,(Et!==v||Ut!==y)&&(r.blendEquationSeparate(xt[Et],xt[Ut]),v=Et,y=Ut),(St!==M||Vt!==R||pe!==E||me!==T)&&(r.blendFuncSeparate(Ct[St],Ct[Vt],Ct[pe],Ct[me]),M=St,R=Vt,E=pe,T=me),(Ve.equals(_)===!1||ii!==S)&&(r.blendColor(Ve.r,Ve.g,Ve.b,ii),_.copy(Ve),S=ii),x=X,k=!1}function Ht(X,Et){X.side===Fe?it(r.CULL_FACE):ot(r.CULL_FACE);let St=X.side===Xe;Et&&(St=!St),At(St),X.blending===Sn&&X.transparent===!1?bt(En):bt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),o.setMask(X.colorWrite);let Vt=X.stencilWrite;c.setTest(Vt),Vt&&(c.setMask(X.stencilWriteMask),c.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),c.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),$(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):it(r.SAMPLE_ALPHA_TO_COVERAGE)}function At(X){W!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),W=X)}function L(X){X!==af?(ot(r.CULL_FACE),X!==Y&&(X===gl?r.cullFace(r.BACK):X===of?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):it(r.CULL_FACE),Y=X}function C(X){X!==N&&(U&&r.lineWidth(X),N=X)}function $(X,Et,St){X?(ot(r.POLYGON_OFFSET_FILL),(D!==Et||O!==St)&&(r.polygonOffset(Et,St),D=Et,O=St)):it(r.POLYGON_OFFSET_FILL)}function ht(X){X?ot(r.SCISSOR_TEST):it(r.SCISSOR_TEST)}function dt(X){X===void 0&&(X=r.TEXTURE0+B-1),V!==X&&(r.activeTexture(X),V=X)}function gt(X,Et,St){St===void 0&&(V===null?St=r.TEXTURE0+B-1:St=V);let Vt=q[St];Vt===void 0&&(Vt={type:void 0,texture:void 0},q[St]=Vt),(Vt.type!==X||Vt.texture!==Et)&&(V!==St&&(r.activeTexture(St),V=St),r.bindTexture(X,Et||et[X]),Vt.type=X,Vt.texture=Et)}function Lt(){let X=q[V];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{r.compressedTexImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{r.texSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(){try{r.texSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function oe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{r.texStorage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{r.texStorage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{r.texImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{r.texImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(X){G.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),G.copy(X))}function ae(X){tt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),tt.copy(X))}function Te(X,Et){let St=u.get(Et);St===void 0&&(St=new WeakMap,u.set(Et,St));let Vt=St.get(X);Vt===void 0&&(Vt=r.getUniformBlockIndex(Et,X.name),St.set(X,Vt))}function Jt(X,Et){let Vt=u.get(Et).get(X);l.get(Et)!==Vt&&(r.uniformBlockBinding(Et,Vt,X.__bindingPointIndex),l.set(Et,Vt))}function _t(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},V=null,q={},f={},m=new WeakMap,b=[],g=null,p=!1,x=null,v=null,M=null,R=null,y=null,E=null,T=null,_=new Dt(0,0,0),S=0,k=!1,W=null,Y=null,N=null,D=null,O=null,G.set(0,0,r.canvas.width,r.canvas.height),tt.set(0,0,r.canvas.width,r.canvas.height),o.reset(),h.reset(),c.reset()}return{buffers:{color:o,depth:h,stencil:c},enable:ot,disable:it,bindFramebuffer:wt,drawBuffers:K,useProgram:zt,setBlending:bt,setMaterial:Ht,setFlipSided:At,setCullFace:L,setLineWidth:C,setPolygonOffset:$,setScissorTest:ht,activeTexture:dt,bindTexture:gt,unbindTexture:Lt,compressedTexImage2D:j,compressedTexImage3D:ct,texImage2D:It,texImage3D:Rt,updateUBOMapping:Te,uniformBlockBinding:Jt,texStorage2D:Yt,texStorage3D:Bt,texSubImage2D:vt,texSubImage3D:kt,compressedTexSubImage2D:ut,compressedTexSubImage3D:oe,scissor:qt,viewport:ae,reset:_t}}function sv(r,t,e,i,n,s,a){let o=n.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,C){return f?new OffscreenCanvas(L,C):yr("canvas")}function b(L,C,$,ht){let dt=1;if((L.width>ht||L.height>ht)&&(dt=ht/Math.max(L.width,L.height)),dt<1||C===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let gt=C?Ma:Math.floor,Lt=gt(dt*L.width),j=gt(dt*L.height);u===void 0&&(u=m(Lt,j));let ct=$?m(Lt,j):u;return ct.width=Lt,ct.height=j,ct.getContext("2d").drawImage(L,0,0,Lt,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Lt+"x"+j+")."),ct}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function g(L){return Th(L.width)&&Th(L.height)}function p(L){return o?!1:L.wrapS!==ai||L.wrapT!==ai||L.minFilter!==Re&&L.minFilter!==ee}function x(L,C){return L.generateMipmaps&&C&&L.minFilter!==Re&&L.minFilter!==ee}function v(L){r.generateMipmap(L)}function M(L,C,$,ht,dt=!1){if(o===!1)return C;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let gt=C;if(C===r.RED&&($===r.FLOAT&&(gt=r.R32F),$===r.HALF_FLOAT&&(gt=r.R16F),$===r.UNSIGNED_BYTE&&(gt=r.R8)),C===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(gt=r.R8UI),$===r.UNSIGNED_SHORT&&(gt=r.R16UI),$===r.UNSIGNED_INT&&(gt=r.R32UI),$===r.BYTE&&(gt=r.R8I),$===r.SHORT&&(gt=r.R16I),$===r.INT&&(gt=r.R32I)),C===r.RG&&($===r.FLOAT&&(gt=r.RG32F),$===r.HALF_FLOAT&&(gt=r.RG16F),$===r.UNSIGNED_BYTE&&(gt=r.RG8)),C===r.RGBA){let Lt=dt?va:he.getTransfer(ht);$===r.FLOAT&&(gt=r.RGBA32F),$===r.HALF_FLOAT&&(gt=r.RGBA16F),$===r.UNSIGNED_BYTE&&(gt=Lt===ve?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(gt=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(gt=r.RGB5_A1)}return(gt===r.R16F||gt===r.R32F||gt===r.RG16F||gt===r.RG32F||gt===r.RGBA16F||gt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function R(L,C,$){return x(L,$)===!0||L.isFramebufferTexture&&L.minFilter!==Re&&L.minFilter!==ee?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function y(L){return L===Re||L===ba||L===ur?r.NEAREST:r.LINEAR}function E(L){let C=L.target;C.removeEventListener("dispose",E),_(C),C.isVideoTexture&&l.delete(C)}function T(L){let C=L.target;C.removeEventListener("dispose",T),k(C)}function _(L){let C=i.get(L);if(C.__webglInit===void 0)return;let $=L.source,ht=d.get($);if(ht){let dt=ht[C.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&S(L),Object.keys(ht).length===0&&d.delete($)}i.remove(L)}function S(L){let C=i.get(L);r.deleteTexture(C.__webglTexture);let $=L.source,ht=d.get($);delete ht[C.__cacheKey],a.memory.textures--}function k(L){let C=L.texture,$=i.get(L),ht=i.get(C);if(ht.__webglTexture!==void 0&&(r.deleteTexture(ht.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray($.__webglFramebuffer[dt]))for(let gt=0;gt<$.__webglFramebuffer[dt].length;gt++)r.deleteFramebuffer($.__webglFramebuffer[dt][gt]);else r.deleteFramebuffer($.__webglFramebuffer[dt]);$.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer[dt])}else{if(Array.isArray($.__webglFramebuffer))for(let dt=0;dt<$.__webglFramebuffer.length;dt++)r.deleteFramebuffer($.__webglFramebuffer[dt]);else r.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&r.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&r.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let dt=0;dt<$.__webglColorRenderbuffer.length;dt++)$.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer($.__webglColorRenderbuffer[dt]);$.__webglDepthRenderbuffer&&r.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let dt=0,gt=C.length;dt<gt;dt++){let Lt=i.get(C[dt]);Lt.__webglTexture&&(r.deleteTexture(Lt.__webglTexture),a.memory.textures--),i.remove(C[dt])}i.remove(C),i.remove(L)}let W=0;function Y(){W=0}function N(){let L=W;return L>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+n.maxTextures),W+=1,L}function D(L){let C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function O(L,C){let $=i.get(L);if(L.isVideoTexture&&Ht(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){let ht=L.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G($,L,C);return}}e.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+C)}function B(L,C){let $=i.get(L);if(L.version>0&&$.__version!==L.version){G($,L,C);return}e.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+C)}function U(L,C){let $=i.get(L);if(L.version>0&&$.__version!==L.version){G($,L,C);return}e.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+C)}function F(L,C){let $=i.get(L);if(L.version>0&&$.__version!==L.version){tt($,L,C);return}e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+C)}let P={[ti]:r.REPEAT,[ai]:r.CLAMP_TO_EDGE,[xr]:r.MIRRORED_REPEAT},V={[Re]:r.NEAREST,[ba]:r.NEAREST_MIPMAP_NEAREST,[ur]:r.NEAREST_MIPMAP_LINEAR,[ee]:r.LINEAR,[uc]:r.LINEAR_MIPMAP_NEAREST,[Ye]:r.LINEAR_MIPMAP_LINEAR},q={[Qf]:r.NEVER,[ip]:r.ALWAYS,[Zf]:r.LESS,[vd]:r.LEQUAL,[Jf]:r.EQUAL,[ep]:r.GEQUAL,[$f]:r.GREATER,[tp]:r.NOTEQUAL};function H(L,C,$){if($?(r.texParameteri(L,r.TEXTURE_WRAP_S,P[C.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,P[C.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,P[C.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,V[C.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,V[C.minFilter])):(r.texParameteri(L,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(L,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(C.wrapS!==ai||C.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,r.TEXTURE_MAG_FILTER,y(C.magFilter)),r.texParameteri(L,r.TEXTURE_MIN_FILTER,y(C.minFilter)),C.minFilter!==Re&&C.minFilter!==ee&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,q[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ht=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===Re||C.minFilter!==ur&&C.minFilter!==Ye||C.type===hn&&t.has("OES_texture_float_linear")===!1||o===!1&&C.type===ln&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(r.texParameterf(L,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,n.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function z(L,C){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",E));let ht=C.source,dt=d.get(ht);dt===void 0&&(dt={},d.set(ht,dt));let gt=D(C);if(gt!==L.__cacheKey){dt[gt]===void 0&&(dt[gt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,$=!0),dt[gt].usedTimes++;let Lt=dt[L.__cacheKey];Lt!==void 0&&(dt[L.__cacheKey].usedTimes--,Lt.usedTimes===0&&S(C)),L.__cacheKey=gt,L.__webglTexture=dt[gt].texture}return $}function G(L,C,$){let ht=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ht=r.TEXTURE_3D);let dt=z(L,C),gt=C.source;e.bindTexture(ht,L.__webglTexture,r.TEXTURE0+$);let Lt=i.get(gt);if(gt.version!==Lt.__version||dt===!0){e.activeTexture(r.TEXTURE0+$);let j=he.getPrimaries(he.workingColorSpace),ct=C.colorSpace===qe?null:he.getPrimaries(C.colorSpace),vt=C.colorSpace===qe||j===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let kt=p(C)&&g(C.image)===!1,ut=b(C.image,kt,!1,n.maxTextureSize);ut=At(C,ut);let oe=g(ut)||o,Yt=s.convert(C.format,C.colorSpace),Bt=s.convert(C.type),It=M(C.internalFormat,Yt,Bt,C.colorSpace,C.isVideoTexture);H(ht,C,oe);let Rt,qt=C.mipmaps,ae=o&&C.isVideoTexture!==!0&&It!==pd,Te=Lt.__version===void 0||dt===!0,Jt=R(C,ut,oe);if(C.isDepthTexture)It=r.DEPTH_COMPONENT,o?C.type===hn?It=r.DEPTH_COMPONENT32F:C.type===Mn?It=r.DEPTH_COMPONENT24:C.type===Gn?It=r.DEPTH24_STENCIL8:It=r.DEPTH_COMPONENT16:C.type===hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Wn&&It===r.DEPTH_COMPONENT&&C.type!==dc&&C.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Mn,Bt=s.convert(C.type)),C.format===Ds&&It===r.DEPTH_COMPONENT&&(It=r.DEPTH_STENCIL,C.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Gn,Bt=s.convert(C.type))),Te&&(ae?e.texStorage2D(r.TEXTURE_2D,1,It,ut.width,ut.height):e.texImage2D(r.TEXTURE_2D,0,It,ut.width,ut.height,0,Yt,Bt,null));else if(C.isDataTexture)if(qt.length>0&&oe){ae&&Te&&e.texStorage2D(r.TEXTURE_2D,Jt,It,qt[0].width,qt[0].height);for(let _t=0,X=qt.length;_t<X;_t++)Rt=qt[_t],ae?e.texSubImage2D(r.TEXTURE_2D,_t,0,0,Rt.width,Rt.height,Yt,Bt,Rt.data):e.texImage2D(r.TEXTURE_2D,_t,It,Rt.width,Rt.height,0,Yt,Bt,Rt.data);C.generateMipmaps=!1}else ae?(Te&&e.texStorage2D(r.TEXTURE_2D,Jt,It,ut.width,ut.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut.width,ut.height,Yt,Bt,ut.data)):e.texImage2D(r.TEXTURE_2D,0,It,ut.width,ut.height,0,Yt,Bt,ut.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ae&&Te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Jt,It,qt[0].width,qt[0].height,ut.depth);for(let _t=0,X=qt.length;_t<X;_t++)Rt=qt[_t],C.format!==de?Yt!==null?ae?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_t,0,0,0,Rt.width,Rt.height,ut.depth,Yt,Rt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_t,It,Rt.width,Rt.height,ut.depth,0,Rt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?e.texSubImage3D(r.TEXTURE_2D_ARRAY,_t,0,0,0,Rt.width,Rt.height,ut.depth,Yt,Bt,Rt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,_t,It,Rt.width,Rt.height,ut.depth,0,Yt,Bt,Rt.data)}else{ae&&Te&&e.texStorage2D(r.TEXTURE_2D,Jt,It,qt[0].width,qt[0].height);for(let _t=0,X=qt.length;_t<X;_t++)Rt=qt[_t],C.format!==de?Yt!==null?ae?e.compressedTexSubImage2D(r.TEXTURE_2D,_t,0,0,Rt.width,Rt.height,Yt,Rt.data):e.compressedTexImage2D(r.TEXTURE_2D,_t,It,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?e.texSubImage2D(r.TEXTURE_2D,_t,0,0,Rt.width,Rt.height,Yt,Bt,Rt.data):e.texImage2D(r.TEXTURE_2D,_t,It,Rt.width,Rt.height,0,Yt,Bt,Rt.data)}else if(C.isDataArrayTexture)ae?(Te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Jt,It,ut.width,ut.height,ut.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Yt,Bt,ut.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,It,ut.width,ut.height,ut.depth,0,Yt,Bt,ut.data);else if(C.isData3DTexture)ae?(Te&&e.texStorage3D(r.TEXTURE_3D,Jt,It,ut.width,ut.height,ut.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Yt,Bt,ut.data)):e.texImage3D(r.TEXTURE_3D,0,It,ut.width,ut.height,ut.depth,0,Yt,Bt,ut.data);else if(C.isFramebufferTexture){if(Te)if(ae)e.texStorage2D(r.TEXTURE_2D,Jt,It,ut.width,ut.height);else{let _t=ut.width,X=ut.height;for(let Et=0;Et<Jt;Et++)e.texImage2D(r.TEXTURE_2D,Et,It,_t,X,0,Yt,Bt,null),_t>>=1,X>>=1}}else if(qt.length>0&&oe){ae&&Te&&e.texStorage2D(r.TEXTURE_2D,Jt,It,qt[0].width,qt[0].height);for(let _t=0,X=qt.length;_t<X;_t++)Rt=qt[_t],ae?e.texSubImage2D(r.TEXTURE_2D,_t,0,0,Yt,Bt,Rt):e.texImage2D(r.TEXTURE_2D,_t,It,Yt,Bt,Rt);C.generateMipmaps=!1}else ae?(Te&&e.texStorage2D(r.TEXTURE_2D,Jt,It,ut.width,ut.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Yt,Bt,ut)):e.texImage2D(r.TEXTURE_2D,0,It,Yt,Bt,ut);x(C,oe)&&v(ht),Lt.__version=gt.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function tt(L,C,$){if(C.image.length!==6)return;let ht=z(L,C),dt=C.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+$);let gt=i.get(dt);if(dt.version!==gt.__version||ht===!0){e.activeTexture(r.TEXTURE0+$);let Lt=he.getPrimaries(he.workingColorSpace),j=C.colorSpace===qe?null:he.getPrimaries(C.colorSpace),ct=C.colorSpace===qe||Lt===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let vt=C.isCompressedTexture||C.image[0].isCompressedTexture,kt=C.image[0]&&C.image[0].isDataTexture,ut=[];for(let _t=0;_t<6;_t++)!vt&&!kt?ut[_t]=b(C.image[_t],!1,!0,n.maxCubemapSize):ut[_t]=kt?C.image[_t].image:C.image[_t],ut[_t]=At(C,ut[_t]);let oe=ut[0],Yt=g(oe)||o,Bt=s.convert(C.format,C.colorSpace),It=s.convert(C.type),Rt=M(C.internalFormat,Bt,It,C.colorSpace),qt=o&&C.isVideoTexture!==!0,ae=gt.__version===void 0||ht===!0,Te=R(C,oe,Yt);H(r.TEXTURE_CUBE_MAP,C,Yt);let Jt;if(vt){qt&&ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Te,Rt,oe.width,oe.height);for(let _t=0;_t<6;_t++){Jt=ut[_t].mipmaps;for(let X=0;X<Jt.length;X++){let Et=Jt[X];C.format!==de?Bt!==null?qt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X,0,0,Et.width,Et.height,Bt,Et.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X,Rt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X,0,0,Et.width,Et.height,Bt,It,Et.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X,Rt,Et.width,Et.height,0,Bt,It,Et.data)}}}else{Jt=C.mipmaps,qt&&ae&&(Jt.length>0&&Te++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Te,Rt,ut[0].width,ut[0].height));for(let _t=0;_t<6;_t++)if(kt){qt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ut[_t].width,ut[_t].height,Bt,It,ut[_t].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Rt,ut[_t].width,ut[_t].height,0,Bt,It,ut[_t].data);for(let X=0;X<Jt.length;X++){let St=Jt[X].image[_t].image;qt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X+1,0,0,St.width,St.height,Bt,It,St.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X+1,Rt,St.width,St.height,0,Bt,It,St.data)}}else{qt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt,It,ut[_t]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Rt,Bt,It,ut[_t]);for(let X=0;X<Jt.length;X++){let Et=Jt[X];qt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X+1,0,0,Bt,It,Et.image[_t]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,X+1,Rt,Bt,It,Et.image[_t])}}}x(C,Yt)&&v(r.TEXTURE_CUBE_MAP),gt.__version=dt.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function Q(L,C,$,ht,dt,gt){let Lt=s.convert($.format,$.colorSpace),j=s.convert($.type),ct=M($.internalFormat,Lt,j,$.colorSpace);if(!i.get(C).__hasExternalTextures){let kt=Math.max(1,C.width>>gt),ut=Math.max(1,C.height>>gt);dt===r.TEXTURE_3D||dt===r.TEXTURE_2D_ARRAY?e.texImage3D(dt,gt,ct,kt,ut,C.depth,0,Lt,j,null):e.texImage2D(dt,gt,ct,kt,ut,0,Lt,j,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),bt(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,dt,i.get($).__webglTexture,0,Ct(C)):(dt===r.TEXTURE_2D||dt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,dt,i.get($).__webglTexture,gt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function et(L,C,$){if(r.bindRenderbuffer(r.RENDERBUFFER,L),C.depthBuffer&&!C.stencilBuffer){let ht=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if($||bt(C)){let dt=C.depthTexture;dt&&dt.isDepthTexture&&(dt.type===hn?ht=r.DEPTH_COMPONENT32F:dt.type===Mn&&(ht=r.DEPTH_COMPONENT24));let gt=Ct(C);bt(C)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt,ht,C.width,C.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,ht,C.width,C.height)}else r.renderbufferStorage(r.RENDERBUFFER,ht,C.width,C.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(C.depthBuffer&&C.stencilBuffer){let ht=Ct(C);$&&bt(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,r.DEPTH24_STENCIL8,C.width,C.height):bt(C)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,r.DEPTH24_STENCIL8,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{let ht=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let dt=0;dt<ht.length;dt++){let gt=ht[dt],Lt=s.convert(gt.format,gt.colorSpace),j=s.convert(gt.type),ct=M(gt.internalFormat,Lt,j,gt.colorSpace),vt=Ct(C);$&&bt(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,ct,C.width,C.height):bt(C)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt,ct,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,ct,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ot(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),O(C.depthTexture,0);let ht=i.get(C.depthTexture).__webglTexture,dt=Ct(C);if(C.depthTexture.format===Wn)bt(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0);else if(C.depthTexture.format===Ds)bt(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function it(L){let C=i.get(L),$=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ot(C.__webglFramebuffer,L)}else if($){C.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[ht]),C.__webglDepthbuffer[ht]=r.createRenderbuffer(),et(C.__webglDepthbuffer[ht],L,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),et(C.__webglDepthbuffer,L,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function wt(L,C,$){let ht=i.get(L);C!==void 0&&Q(ht.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&it(L)}function K(L){let C=L.texture,$=i.get(L),ht=i.get(C);L.addEventListener("dispose",T),L.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=C.version,a.memory.textures++);let dt=L.isWebGLCubeRenderTarget===!0,gt=L.isWebGLMultipleRenderTargets===!0,Lt=g(L)||o;if(dt){$.__webglFramebuffer=[];for(let j=0;j<6;j++)if(o&&C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer[j]=[];for(let ct=0;ct<C.mipmaps.length;ct++)$.__webglFramebuffer[j][ct]=r.createFramebuffer()}else $.__webglFramebuffer[j]=r.createFramebuffer()}else{if(o&&C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer=[];for(let j=0;j<C.mipmaps.length;j++)$.__webglFramebuffer[j]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(gt)if(n.drawBuffers){let j=L.texture;for(let ct=0,vt=j.length;ct<vt;ct++){let kt=i.get(j[ct]);kt.__webglTexture===void 0&&(kt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&bt(L)===!1){let j=gt?C:[C];$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ct=0;ct<j.length;ct++){let vt=j[ct];$.__webglColorRenderbuffer[ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[ct]);let kt=s.convert(vt.format,vt.colorSpace),ut=s.convert(vt.type),oe=M(vt.internalFormat,kt,ut,vt.colorSpace,L.isXRRenderTarget===!0),Yt=Ct(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,oe,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,$.__webglColorRenderbuffer[ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),et($.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){e.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),H(r.TEXTURE_CUBE_MAP,C,Lt);for(let j=0;j<6;j++)if(o&&C.mipmaps&&C.mipmaps.length>0)for(let ct=0;ct<C.mipmaps.length;ct++)Q($.__webglFramebuffer[j][ct],L,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct);else Q($.__webglFramebuffer[j],L,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);x(C,Lt)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){let j=L.texture;for(let ct=0,vt=j.length;ct<vt;ct++){let kt=j[ct],ut=i.get(kt);e.bindTexture(r.TEXTURE_2D,ut.__webglTexture),H(r.TEXTURE_2D,kt,Lt),Q($.__webglFramebuffer,L,kt,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,0),x(kt,Lt)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let j=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?j=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(j,ht.__webglTexture),H(j,C,Lt),o&&C.mipmaps&&C.mipmaps.length>0)for(let ct=0;ct<C.mipmaps.length;ct++)Q($.__webglFramebuffer[ct],L,C,r.COLOR_ATTACHMENT0,j,ct);else Q($.__webglFramebuffer,L,C,r.COLOR_ATTACHMENT0,j,0);x(C,Lt)&&v(j),e.unbindTexture()}L.depthBuffer&&it(L)}function zt(L){let C=g(L)||o,$=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ht=0,dt=$.length;ht<dt;ht++){let gt=$[ht];if(x(gt,C)){let Lt=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,j=i.get(gt).__webglTexture;e.bindTexture(Lt,j),v(Lt),e.unbindTexture()}}}function xt(L){if(o&&L.samples>0&&bt(L)===!1){let C=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],$=L.width,ht=L.height,dt=r.COLOR_BUFFER_BIT,gt=[],Lt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=i.get(L),ct=L.isWebGLMultipleRenderTargets===!0;if(ct)for(let vt=0;vt<C.length;vt++)e.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,j.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let vt=0;vt<C.length;vt++){gt.push(r.COLOR_ATTACHMENT0+vt),L.depthBuffer&&gt.push(Lt);let kt=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(kt===!1&&(L.depthBuffer&&(dt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&(dt|=r.STENCIL_BUFFER_BIT)),ct&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,j.__webglColorRenderbuffer[vt]),kt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Lt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Lt])),ct){let ut=i.get(C[vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ut,0)}r.blitFramebuffer(0,0,$,ht,0,0,$,ht,dt,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,gt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ct)for(let vt=0;vt<C.length;vt++){e.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,j.__webglColorRenderbuffer[vt]);let kt=i.get(C[vt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,j.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,kt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}}function Ct(L){return Math.min(n.maxSamples,L.samples)}function bt(L){let C=i.get(L);return o&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ht(L){let C=a.render.frame;l.get(L)!==C&&(l.set(L,C),L.update())}function At(L,C){let $=L.colorSpace,ht=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Sh||$!==De&&$!==qe&&(he.getTransfer($)===ve?o===!1?t.has("EXT_sRGB")===!0&&ht===de?(L.format=Sh,L.minFilter=ee,L.generateMipmaps=!1):C=wa.sRGBToLinear(C):(ht!==de||dt!==je)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),C}this.allocateTextureUnit=N,this.resetTextureUnits=Y,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=U,this.setTextureCube=F,this.rebindTextures=wt,this.setupRenderTarget=K,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=bt}function rv(r,t,e){let i=e.isWebGL2;function n(s,a=qe){let o,h=he.getTransfer(a);if(s===je)return r.UNSIGNED_BYTE;if(s===cd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ld)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Nf)return r.BYTE;if(s===Of)return r.SHORT;if(s===dc)return r.UNSIGNED_SHORT;if(s===hd)return r.INT;if(s===Mn)return r.UNSIGNED_INT;if(s===hn)return r.FLOAT;if(s===ln)return i?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Bf)return r.ALPHA;if(s===de)return r.RGBA;if(s===Hf)return r.LUMINANCE;if(s===Vf)return r.LUMINANCE_ALPHA;if(s===Wn)return r.DEPTH_COMPONENT;if(s===Ds)return r.DEPTH_STENCIL;if(s===Sh)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Gf)return r.RED;if(s===ud)return r.RED_INTEGER;if(s===Wf)return r.RG;if(s===dd)return r.RG_INTEGER;if(s===fd)return r.RGBA_INTEGER;if(s===No||s===Oo||s===Bo||s===Ho)if(h===ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===No)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===No)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ho)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ml||s===wl||s===El||s===Sl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ml)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===El)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pd)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Tl||s===Al)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Tl)return h===ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Al)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rl||s===Cl||s===Pl||s===Ll||s===Il||s===Fl||s===Dl||s===kl||s===zl||s===Ul||s===Nl||s===Ol||s===Bl||s===Hl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Rl)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cl)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pl)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ll)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Il)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fl)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Dl)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kl)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zl)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ul)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nl)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ol)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bl)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hl)return h===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vo||s===Vl||s===Gl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Vo)return h===ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qf||s===Wl||s===ql||s===Xl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Vo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Wl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ql)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Gn?i?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}var Oh=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ce=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},av={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,h=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,i),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=l.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(av)))}return o!==null&&(o.visible=n!==null),h!==null&&(h.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Bh=class extends Tn{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",h=1,c=null,l=null,u=null,d=null,f=null,m=null,b=e.getContextAttributes(),g=null,p=null,x=[],v=[],M=new ft,R=null,y=new Ne;y.layers.enable(1),y.viewport=new ie;let E=new Ne;E.layers.enable(2),E.viewport=new ie;let T=[y,E],_=new Oh;_.layers.enable(1),_.layers.enable(2);let S=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let z=x[H];return z===void 0&&(z=new mr,x[H]=z),z.getTargetRaySpace()},this.getControllerGrip=function(H){let z=x[H];return z===void 0&&(z=new mr,x[H]=z),z.getGripSpace()},this.getHand=function(H){let z=x[H];return z===void 0&&(z=new mr,x[H]=z),z.getHandSpace()};function W(H){let z=v.indexOf(H.inputSource);if(z===-1)return;let G=x[z];G!==void 0&&(G.update(H.inputSource,H.frame,c||a),G.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){n.removeEventListener("select",W),n.removeEventListener("selectstart",W),n.removeEventListener("selectend",W),n.removeEventListener("squeeze",W),n.removeEventListener("squeezestart",W),n.removeEventListener("squeezeend",W),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",N);for(let H=0;H<x.length;H++){let z=v[H];z!==null&&(v[H]=null,x[H].disconnect(z))}S=null,k=null,t.setRenderTarget(g),f=null,d=null,u=null,n=null,p=null,q.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(g=t.getRenderTarget(),n.addEventListener("select",W),n.addEventListener("selectstart",W),n.addEventListener("selectend",W),n.addEventListener("squeeze",W),n.addEventListener("squeezestart",W),n.addEventListener("squeezeend",W),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",N),b.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(M),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let z={antialias:n.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,z),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new _e(f.framebufferWidth,f.framebufferHeight,{format:de,type:je,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil})}else{let z=null,G=null,tt=null;b.depth&&(tt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,z=b.stencil?Ds:Wn,G=b.stencil?Gn:Mn);let Q={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(Q),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new _e(d.textureWidth,d.textureHeight,{format:de,type:je,depthTexture:new Yn(d.textureWidth,d.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0});let et=t.properties.get(p);et.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await n.requestReferenceSpace(o),q.setContext(n),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function N(H){for(let z=0;z<H.removed.length;z++){let G=H.removed[z],tt=v.indexOf(G);tt>=0&&(v[tt]=null,x[tt].disconnect(G))}for(let z=0;z<H.added.length;z++){let G=H.added[z],tt=v.indexOf(G);if(tt===-1){for(let et=0;et<x.length;et++)if(et>=v.length){v.push(G),tt=et;break}else if(v[et]===null){v[et]=G,tt=et;break}if(tt===-1)break}let Q=x[tt];Q&&Q.connect(G)}}let D=new w,O=new w;function B(H,z,G){D.setFromMatrixPosition(z.matrixWorld),O.setFromMatrixPosition(G.matrixWorld);let tt=D.distanceTo(O),Q=z.projectionMatrix.elements,et=G.projectionMatrix.elements,ot=Q[14]/(Q[10]-1),it=Q[14]/(Q[10]+1),wt=(Q[9]+1)/Q[5],K=(Q[9]-1)/Q[5],zt=(Q[8]-1)/Q[0],xt=(et[8]+1)/et[0],Ct=ot*zt,bt=ot*xt,Ht=tt/(-zt+xt),At=Ht*-zt;z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(At),H.translateZ(Ht),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let L=ot+Ht,C=it+Ht,$=Ct-At,ht=bt+(tt-At),dt=wt*it/C*L,gt=K*it/C*L;H.projectionMatrix.makePerspective($,ht,dt,gt,L,C),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function U(H,z){z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;_.near=E.near=y.near=H.near,_.far=E.far=y.far=H.far,(S!==_.near||k!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,k=_.far);let z=H.parent,G=_.cameras;U(_,z);for(let tt=0;tt<G.length;tt++)U(G[tt],z);G.length===2?B(_,y,E):_.projectionMatrix.copy(y.projectionMatrix),F(H,_,z)};function F(H,z,G){G===null?H.matrix.copy(z.matrixWorld):(H.matrix.copy(G.matrixWorld),H.matrix.invert(),H.matrix.multiply(z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(z.projectionMatrix),H.projectionMatrixInverse.copy(z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=zs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return h},this.setFoveation=function(H){h=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)};let P=null;function V(H,z){if(l=z.getViewerPose(c||a),m=z,l!==null){let G=l.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let tt=!1;G.length!==_.cameras.length&&(_.cameras.length=0,tt=!0);for(let Q=0;Q<G.length;Q++){let et=G[Q],ot=null;if(f!==null)ot=f.getViewport(et);else{let wt=u.getViewSubImage(d,et);ot=wt.viewport,Q===0&&(t.setRenderTargetTextures(p,wt.colorTexture,d.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(p))}let it=T[Q];it===void 0&&(it=new Ne,it.layers.enable(Q),it.viewport=new ie,T[Q]=it),it.matrix.fromArray(et.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(et.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ot.x,ot.y,ot.width,ot.height),Q===0&&(_.matrix.copy(it.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),tt===!0&&_.cameras.push(it)}}for(let G=0;G<x.length;G++){let tt=v[G],Q=x[G];tt!==null&&Q!==void 0&&Q.update(tt,z,c||a)}P&&P(H,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),m=null}let q=new Md;q.setAnimationLoop(V),this.setAnimationLoop=function(H){P=H},this.dispose=function(){}}};function ov(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,_d(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,x,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),l(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?h(g,p,x,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=t.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let v=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function h(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function hv(r,t,e,i){let n={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(x,v){let M=v.program;i.uniformBlockBinding(x,M)}function c(x,v){let M=n[x.id];M===void 0&&(m(x),M=l(x),n[x.id]=M,x.addEventListener("dispose",g));let R=v.program;i.updateUBOMapping(x,R);let y=t.render.frame;s[x.id]!==y&&(d(x),s[x.id]=y)}function l(x){let v=u();x.__bindingPointIndex=v;let M=r.createBuffer(),R=x.__size,y=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let v=n[x.id],M=x.uniforms,R=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let y=0,E=M.length;y<E;y++){let T=Array.isArray(M[y])?M[y]:[M[y]];for(let _=0,S=T.length;_<S;_++){let k=T[_];if(f(k,y,_,R)===!0){let W=k.__offset,Y=Array.isArray(k.value)?k.value:[k.value],N=0;for(let D=0;D<Y.length;D++){let O=Y[D],B=b(O);typeof O=="number"||typeof O=="boolean"?(k.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,W+N,k.__data)):O.isMatrix3?(k.__data[0]=O.elements[0],k.__data[1]=O.elements[1],k.__data[2]=O.elements[2],k.__data[3]=0,k.__data[4]=O.elements[3],k.__data[5]=O.elements[4],k.__data[6]=O.elements[5],k.__data[7]=0,k.__data[8]=O.elements[6],k.__data[9]=O.elements[7],k.__data[10]=O.elements[8],k.__data[11]=0):(O.toArray(k.__data,N),N+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,M,R){let y=x.value,E=v+"_"+M;if(R[E]===void 0)return typeof y=="number"||typeof y=="boolean"?R[E]=y:R[E]=y.clone(),!0;{let T=R[E];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return R[E]=y,!0}else if(T.equals(y)===!1)return T.copy(y),!0}return!1}function m(x){let v=x.uniforms,M=0,R=16;for(let E=0,T=v.length;E<T;E++){let _=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,k=_.length;S<k;S++){let W=_[S],Y=Array.isArray(W.value)?W.value:[W.value];for(let N=0,D=Y.length;N<D;N++){let O=Y[N],B=b(O),U=M%R;U!==0&&R-U<B.boundary&&(M+=R-U),W.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=B.storage}}}let y=M%R;return y>0&&(M+=R-y),x.__size=M,x.__cache={},this}function b(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){let v=x.target;v.removeEventListener("dispose",g);let M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function p(){for(let x in n)r.deleteBuffer(n[x]);a=[],n={},s={}}return{bind:h,update:c,dispose:p}}var Mr=class{constructor(t={}){let{canvas:e=bp(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),m=new Int32Array(4),b=null,g=null,p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=Xi,this.toneMappingExposure=1;let v=this,M=!1,R=0,y=0,E=null,T=-1,_=null,S=new ie,k=new ie,W=null,Y=new Dt(0),N=0,D=e.width,O=e.height,B=1,U=null,F=null,P=new ie(0,0,D,O),V=new ie(0,0,D,O),q=!1,H=new _r,z=!1,G=!1,tt=null,Q=new Pt,et=new ft,ot=new w,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function wt(){return E===null?B:1}let K=i;function zt(I,J){for(let st=0;st<I.length;st++){let rt=I[st],nt=e.getContext(rt,J);if(nt!==null)return nt}return null}try{let I={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hc}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",Et,!1),K===null){let J=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&J.shift(),K=zt(J,I),K===null)throw zt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&K instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let xt,Ct,bt,Ht,At,L,C,$,ht,dt,gt,Lt,j,ct,vt,kt,ut,oe,Yt,Bt,It,Rt,qt,ae;function Te(){xt=new Ag(K),Ct=new _g(K,xt,t),xt.init(Ct),Rt=new rv(K,xt,Ct),bt=new nv(K,xt,Ct),Ht=new Pg(K),At=new qb,L=new sv(K,xt,bt,At,Ct,Rt,Ht),C=new wg(v),$=new Tg(v),ht=new Np(K,Ct),qt=new xg(K,xt,ht,Ct),dt=new Rg(K,ht,Ht,qt),gt=new Dg(K,dt,ht,Ht),Yt=new Fg(K,Ct,L),kt=new Mg(At),Lt=new Wb(v,C,$,xt,Ct,qt,kt),j=new ov(v,At),ct=new jb,vt=new $b(xt,Ct),oe=new vg(v,C,$,bt,gt,d,h),ut=new iv(v,gt,Ct),ae=new hv(K,Ht,Ct,bt),Bt=new yg(K,xt,Ht,Ct),It=new Cg(K,xt,Ht,Ct),Ht.programs=Lt.programs,v.capabilities=Ct,v.extensions=xt,v.properties=At,v.renderLists=ct,v.shadowMap=ut,v.state=bt,v.info=Ht}Te();let Jt=new Bh(v,K);this.xr=Jt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let I=xt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=xt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(I){I!==void 0&&(B=I,this.setSize(D,O,!1))},this.getSize=function(I){return I.set(D,O)},this.setSize=function(I,J,st=!0){if(Jt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=I,O=J,e.width=Math.floor(I*B),e.height=Math.floor(J*B),st===!0&&(e.style.width=I+"px",e.style.height=J+"px"),this.setViewport(0,0,I,J)},this.getDrawingBufferSize=function(I){return I.set(D*B,O*B).floor()},this.setDrawingBufferSize=function(I,J,st){D=I,O=J,B=st,e.width=Math.floor(I*st),e.height=Math.floor(J*st),this.setViewport(0,0,I,J)},this.getCurrentViewport=function(I){return I.copy(S)},this.getViewport=function(I){return I.copy(P)},this.setViewport=function(I,J,st,rt){I.isVector4?P.set(I.x,I.y,I.z,I.w):P.set(I,J,st,rt),bt.viewport(S.copy(P).multiplyScalar(B).floor())},this.getScissor=function(I){return I.copy(V)},this.setScissor=function(I,J,st,rt){I.isVector4?V.set(I.x,I.y,I.z,I.w):V.set(I,J,st,rt),bt.scissor(k.copy(V).multiplyScalar(B).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(I){bt.setScissorTest(q=I)},this.setOpaqueSort=function(I){U=I},this.setTransparentSort=function(I){F=I},this.getClearColor=function(I){return I.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(I=!0,J=!0,st=!0){let rt=0;if(I){let nt=!1;if(E!==null){let Tt=E.texture.format;nt=Tt===fd||Tt===dd||Tt===ud}if(nt){let Tt=E.texture.type,Ft=Tt===je||Tt===Mn||Tt===dc||Tt===Gn||Tt===cd||Tt===ld,Nt=oe.getClearColor(),Gt=oe.getClearAlpha(),Zt=Nt.r,Xt=Nt.g,Kt=Nt.b;Ft?(f[0]=Zt,f[1]=Xt,f[2]=Kt,f[3]=Gt,K.clearBufferuiv(K.COLOR,0,f)):(m[0]=Zt,m[1]=Xt,m[2]=Kt,m[3]=Gt,K.clearBufferiv(K.COLOR,0,m))}else rt|=K.COLOR_BUFFER_BIT}J&&(rt|=K.DEPTH_BUFFER_BIT),st&&(rt|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),ct.dispose(),vt.dispose(),At.dispose(),C.dispose(),$.dispose(),gt.dispose(),qt.dispose(),ae.dispose(),Lt.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",ii),Jt.removeEventListener("sessionend",ge),tt&&(tt.dispose(),tt=null),ni.stop()};function _t(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let I=Ht.autoReset,J=ut.enabled,st=ut.autoUpdate,rt=ut.needsUpdate,nt=ut.type;Te(),Ht.autoReset=I,ut.enabled=J,ut.autoUpdate=st,ut.needsUpdate=rt,ut.type=nt}function Et(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function St(I){let J=I.target;J.removeEventListener("dispose",St),Vt(J)}function Vt(I){Ut(I),At.remove(I)}function Ut(I){let J=At.get(I).programs;J!==void 0&&(J.forEach(function(st){Lt.releaseProgram(st)}),I.isShaderMaterial&&Lt.releaseShaderCache(I))}this.renderBufferDirect=function(I,J,st,rt,nt,Tt){J===null&&(J=it);let Ft=nt.isMesh&&nt.matrixWorld.determinant()<0,Nt=ef(I,J,st,rt,nt);bt.setMaterial(rt,Ft);let Gt=st.index,Zt=1;if(rt.wireframe===!0){if(Gt=dt.getWireframeAttribute(st),Gt===void 0)return;Zt=2}let Xt=st.drawRange,Kt=st.attributes.position,Ie=Xt.start*Zt,bi=(Xt.start+Xt.count)*Zt;Tt!==null&&(Ie=Math.max(Ie,Tt.start*Zt),bi=Math.min(bi,(Tt.start+Tt.count)*Zt)),Gt!==null?(Ie=Math.max(Ie,0),bi=Math.min(bi,Gt.count)):Kt!=null&&(Ie=Math.max(Ie,0),bi=Math.min(bi,Kt.count));let Ge=bi-Ie;if(Ge<0||Ge===1/0)return;qt.setup(nt,rt,Nt,st,Gt);let Ji,Ee=Bt;if(Gt!==null&&(Ji=ht.get(Gt),Ee=It,Ee.setIndex(Ji)),nt.isMesh)rt.wireframe===!0?(bt.setLineWidth(rt.wireframeLinewidth*wt()),Ee.setMode(K.LINES)):Ee.setMode(K.TRIANGLES);else if(nt.isLine){let $t=rt.linewidth;$t===void 0&&($t=1),bt.setLineWidth($t*wt()),nt.isLineSegments?Ee.setMode(K.LINES):nt.isLineLoop?Ee.setMode(K.LINE_LOOP):Ee.setMode(K.LINE_STRIP)}else nt.isPoints?Ee.setMode(K.POINTS):nt.isSprite&&Ee.setMode(K.TRIANGLES);if(nt.isBatchedMesh)Ee.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else if(nt.isInstancedMesh)Ee.renderInstances(Ie,Ge,nt.count);else if(st.isInstancedBufferGeometry){let $t=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Do=Math.min(st.instanceCount,$t);Ee.renderInstances(Ie,Ge,Do)}else Ee.render(Ie,Ge)};function pe(I,J,st){I.transparent===!0&&I.side===Fe&&I.forceSinglePass===!1?(I.side=Xe,I.needsUpdate=!0,Ur(I,J,st),I.side=yi,I.needsUpdate=!0,Ur(I,J,st),I.side=Fe):Ur(I,J,st)}this.compile=function(I,J,st=null){st===null&&(st=I),g=vt.get(st),g.init(),x.push(g),st.traverseVisible(function(nt){nt.isLight&&nt.layers.test(J.layers)&&(g.pushLight(nt),nt.castShadow&&g.pushShadow(nt))}),I!==st&&I.traverseVisible(function(nt){nt.isLight&&nt.layers.test(J.layers)&&(g.pushLight(nt),nt.castShadow&&g.pushShadow(nt))}),g.setupLights(v._useLegacyLights);let rt=new Set;return I.traverse(function(nt){let Tt=nt.material;if(Tt)if(Array.isArray(Tt))for(let Ft=0;Ft<Tt.length;Ft++){let Nt=Tt[Ft];pe(Nt,st,nt),rt.add(Nt)}else pe(Tt,st,nt),rt.add(Tt)}),x.pop(),g=null,rt},this.compileAsync=function(I,J,st=null){let rt=this.compile(I,J,st);return new Promise(nt=>{function Tt(){if(rt.forEach(function(Ft){At.get(Ft).currentProgram.isReady()&&rt.delete(Ft)}),rt.size===0){nt(I);return}setTimeout(Tt,10)}xt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let me=null;function Ve(I){me&&me(I)}function ii(){ni.stop()}function ge(){ni.start()}let ni=new Md;ni.setAnimationLoop(Ve),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(I){me=I,Jt.setAnimationLoop(I),I===null?ni.stop():ni.start()},Jt.addEventListener("sessionstart",ii),Jt.addEventListener("sessionend",ge),this.render=function(I,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(J),J=Jt.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,J,E),g=vt.get(I,x.length),g.init(),x.push(g),Q.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H.setFromProjectionMatrix(Q),G=this.localClippingEnabled,z=kt.init(this.clippingPlanes,G),b=ct.get(I,p.length),b.init(),p.push(b),Gi(I,J,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(U,F),this.info.render.frame++,z===!0&&kt.beginShadows();let st=g.state.shadowsArray;if(ut.render(st,I,J),z===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(b,I),g.setupLights(v._useLegacyLights),J.isArrayCamera){let rt=J.cameras;for(let nt=0,Tt=rt.length;nt<Tt;nt++){let Ft=rt[nt];ll(b,I,Ft,Ft.viewport)}}else ll(b,I,J);E!==null&&(L.updateMultisampleRenderTarget(E),L.updateRenderTargetMipmap(E)),I.isScene===!0&&I.onAfterRender(v,I,J),qt.resetDefaultState(),T=-1,_=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function Gi(I,J,st,rt){if(I.visible===!1)return;if(I.layers.test(J.layers)){if(I.isGroup)st=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(J);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||H.intersectsSprite(I)){rt&&ot.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Q);let Ft=gt.update(I),Nt=I.material;Nt.visible&&b.push(I,Ft,Nt,st,ot.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||H.intersectsObject(I))){let Ft=gt.update(I),Nt=I.material;if(rt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ot.copy(I.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),ot.copy(Ft.boundingSphere.center)),ot.applyMatrix4(I.matrixWorld).applyMatrix4(Q)),Array.isArray(Nt)){let Gt=Ft.groups;for(let Zt=0,Xt=Gt.length;Zt<Xt;Zt++){let Kt=Gt[Zt],Ie=Nt[Kt.materialIndex];Ie&&Ie.visible&&b.push(I,Ft,Ie,st,ot.z,Kt)}}else Nt.visible&&b.push(I,Ft,Nt,st,ot.z,null)}}let Tt=I.children;for(let Ft=0,Nt=Tt.length;Ft<Nt;Ft++)Gi(Tt[Ft],J,st,rt)}function ll(I,J,st,rt){let nt=I.opaque,Tt=I.transmissive,Ft=I.transparent;g.setupLightsView(st),z===!0&&kt.setGlobalState(v.clippingPlanes,st),Tt.length>0&&tf(nt,Tt,J,st),rt&&bt.viewport(S.copy(rt)),nt.length>0&&zr(nt,J,st),Tt.length>0&&zr(Tt,J,st),Ft.length>0&&zr(Ft,J,st),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function tf(I,J,st,rt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;let Tt=Ct.isWebGL2;tt===null&&(tt=new _e(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?ln:je,minFilter:Ye,samples:Tt?4:0})),v.getDrawingBufferSize(et),Tt?tt.setSize(et.x,et.y):tt.setSize(Ma(et.x),Ma(et.y));let Ft=v.getRenderTarget();v.setRenderTarget(tt),v.getClearColor(Y),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();let Nt=v.toneMapping;v.toneMapping=Xi,zr(I,st,rt),L.updateMultisampleRenderTarget(tt),L.updateRenderTargetMipmap(tt);let Gt=!1;for(let Zt=0,Xt=J.length;Zt<Xt;Zt++){let Kt=J[Zt],Ie=Kt.object,bi=Kt.geometry,Ge=Kt.material,Ji=Kt.group;if(Ge.side===Fe&&Ie.layers.test(rt.layers)){let Ee=Ge.side;Ge.side=Xe,Ge.needsUpdate=!0,ul(Ie,st,rt,bi,Ge,Ji),Ge.side=Ee,Ge.needsUpdate=!0,Gt=!0}}Gt===!0&&(L.updateMultisampleRenderTarget(tt),L.updateRenderTargetMipmap(tt)),v.setRenderTarget(Ft),v.setClearColor(Y,N),v.toneMapping=Nt}function zr(I,J,st){let rt=J.isScene===!0?J.overrideMaterial:null;for(let nt=0,Tt=I.length;nt<Tt;nt++){let Ft=I[nt],Nt=Ft.object,Gt=Ft.geometry,Zt=rt===null?Ft.material:rt,Xt=Ft.group;Nt.layers.test(st.layers)&&ul(Nt,J,st,Gt,Zt,Xt)}}function ul(I,J,st,rt,nt,Tt){I.onBeforeRender(v,J,st,rt,nt,Tt),I.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),nt.onBeforeRender(v,J,st,rt,I,Tt),nt.transparent===!0&&nt.side===Fe&&nt.forceSinglePass===!1?(nt.side=Xe,nt.needsUpdate=!0,v.renderBufferDirect(st,J,rt,nt,I,Tt),nt.side=yi,nt.needsUpdate=!0,v.renderBufferDirect(st,J,rt,nt,I,Tt),nt.side=Fe):v.renderBufferDirect(st,J,rt,nt,I,Tt),I.onAfterRender(v,J,st,rt,nt,Tt)}function Ur(I,J,st){J.isScene!==!0&&(J=it);let rt=At.get(I),nt=g.state.lights,Tt=g.state.shadowsArray,Ft=nt.state.version,Nt=Lt.getParameters(I,nt.state,Tt,J,st),Gt=Lt.getProgramCacheKey(Nt),Zt=rt.programs;rt.environment=I.isMeshStandardMaterial?J.environment:null,rt.fog=J.fog,rt.envMap=(I.isMeshStandardMaterial?$:C).get(I.envMap||rt.environment),Zt===void 0&&(I.addEventListener("dispose",St),Zt=new Map,rt.programs=Zt);let Xt=Zt.get(Gt);if(Xt!==void 0){if(rt.currentProgram===Xt&&rt.lightsStateVersion===Ft)return fl(I,Nt),Xt}else Nt.uniforms=Lt.getUniforms(I),I.onBuild(st,Nt,v),I.onBeforeCompile(Nt,v),Xt=Lt.acquireProgram(Nt,Gt),Zt.set(Gt,Xt),rt.uniforms=Nt.uniforms;let Kt=rt.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Kt.clippingPlanes=kt.uniform),fl(I,Nt),rt.needsLights=sf(I),rt.lightsStateVersion=Ft,rt.needsLights&&(Kt.ambientLightColor.value=nt.state.ambient,Kt.lightProbe.value=nt.state.probe,Kt.directionalLights.value=nt.state.directional,Kt.directionalLightShadows.value=nt.state.directionalShadow,Kt.spotLights.value=nt.state.spot,Kt.spotLightShadows.value=nt.state.spotShadow,Kt.rectAreaLights.value=nt.state.rectArea,Kt.ltc_1.value=nt.state.rectAreaLTC1,Kt.ltc_2.value=nt.state.rectAreaLTC2,Kt.pointLights.value=nt.state.point,Kt.pointLightShadows.value=nt.state.pointShadow,Kt.hemisphereLights.value=nt.state.hemi,Kt.directionalShadowMap.value=nt.state.directionalShadowMap,Kt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Kt.spotShadowMap.value=nt.state.spotShadowMap,Kt.spotLightMatrix.value=nt.state.spotLightMatrix,Kt.spotLightMap.value=nt.state.spotLightMap,Kt.pointShadowMap.value=nt.state.pointShadowMap,Kt.pointShadowMatrix.value=nt.state.pointShadowMatrix),rt.currentProgram=Xt,rt.uniformsList=null,Xt}function dl(I){if(I.uniformsList===null){let J=I.currentProgram.getUniforms();I.uniformsList=Ls.seqWithValue(J.seq,I.uniforms)}return I.uniformsList}function fl(I,J){let st=At.get(I);st.outputColorSpace=J.outputColorSpace,st.batching=J.batching,st.instancing=J.instancing,st.instancingColor=J.instancingColor,st.skinning=J.skinning,st.morphTargets=J.morphTargets,st.morphNormals=J.morphNormals,st.morphColors=J.morphColors,st.morphTargetsCount=J.morphTargetsCount,st.numClippingPlanes=J.numClippingPlanes,st.numIntersection=J.numClipIntersection,st.vertexAlphas=J.vertexAlphas,st.vertexTangents=J.vertexTangents,st.toneMapping=J.toneMapping}function ef(I,J,st,rt,nt){J.isScene!==!0&&(J=it),L.resetTextureUnits();let Tt=J.fog,Ft=rt.isMeshStandardMaterial?J.environment:null,Nt=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:De,Gt=(rt.isMeshStandardMaterial?$:C).get(rt.envMap||Ft),Zt=rt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Xt=!!st.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Kt=!!st.morphAttributes.position,Ie=!!st.morphAttributes.normal,bi=!!st.morphAttributes.color,Ge=Xi;rt.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ge=v.toneMapping);let Ji=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ee=Ji!==void 0?Ji.length:0,$t=At.get(rt),Do=g.state.lights;if(z===!0&&(G===!0||I!==_)){let Si=I===_&&rt.id===T;kt.setState(rt,I,Si)}let Ae=!1;rt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Do.state.version||$t.outputColorSpace!==Nt||nt.isBatchedMesh&&$t.batching===!1||!nt.isBatchedMesh&&$t.batching===!0||nt.isInstancedMesh&&$t.instancing===!1||!nt.isInstancedMesh&&$t.instancing===!0||nt.isSkinnedMesh&&$t.skinning===!1||!nt.isSkinnedMesh&&$t.skinning===!0||nt.isInstancedMesh&&$t.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&$t.instancingColor===!1&&nt.instanceColor!==null||$t.envMap!==Gt||rt.fog===!0&&$t.fog!==Tt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==kt.numPlanes||$t.numIntersection!==kt.numIntersection)||$t.vertexAlphas!==Zt||$t.vertexTangents!==Xt||$t.morphTargets!==Kt||$t.morphNormals!==Ie||$t.morphColors!==bi||$t.toneMapping!==Ge||Ct.isWebGL2===!0&&$t.morphTargetsCount!==Ee)&&(Ae=!0):(Ae=!0,$t.__version=rt.version);let Dn=$t.currentProgram;Ae===!0&&(Dn=Ur(rt,J,nt));let pl=!1,tr=!1,ko=!1,Ze=Dn.getUniforms(),kn=$t.uniforms;if(bt.useProgram(Dn.program)&&(pl=!0,tr=!0,ko=!0),rt.id!==T&&(T=rt.id,tr=!0),pl||_!==I){Ze.setValue(K,"projectionMatrix",I.projectionMatrix),Ze.setValue(K,"viewMatrix",I.matrixWorldInverse);let Si=Ze.map.cameraPosition;Si!==void 0&&Si.setValue(K,ot.setFromMatrixPosition(I.matrixWorld)),Ct.logarithmicDepthBuffer&&Ze.setValue(K,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ze.setValue(K,"isOrthographic",I.isOrthographicCamera===!0),_!==I&&(_=I,tr=!0,ko=!0)}if(nt.isSkinnedMesh){Ze.setOptional(K,nt,"bindMatrix"),Ze.setOptional(K,nt,"bindMatrixInverse");let Si=nt.skeleton;Si&&(Ct.floatVertexTextures?(Si.boneTexture===null&&Si.computeBoneTexture(),Ze.setValue(K,"boneTexture",Si.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}nt.isBatchedMesh&&(Ze.setOptional(K,nt,"batchingTexture"),Ze.setValue(K,"batchingTexture",nt._matricesTexture,L));let zo=st.morphAttributes;if((zo.position!==void 0||zo.normal!==void 0||zo.color!==void 0&&Ct.isWebGL2===!0)&&Yt.update(nt,st,Dn),(tr||$t.receiveShadow!==nt.receiveShadow)&&($t.receiveShadow=nt.receiveShadow,Ze.setValue(K,"receiveShadow",nt.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(kn.envMap.value=Gt,kn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),tr&&(Ze.setValue(K,"toneMappingExposure",v.toneMappingExposure),$t.needsLights&&nf(kn,ko),Tt&&rt.fog===!0&&j.refreshFogUniforms(kn,Tt),j.refreshMaterialUniforms(kn,rt,B,O,tt),Ls.upload(K,dl($t),kn,L)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ls.upload(K,dl($t),kn,L),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ze.setValue(K,"center",nt.center),Ze.setValue(K,"modelViewMatrix",nt.modelViewMatrix),Ze.setValue(K,"normalMatrix",nt.normalMatrix),Ze.setValue(K,"modelMatrix",nt.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){let Si=rt.uniformsGroups;for(let Uo=0,rf=Si.length;Uo<rf;Uo++)if(Ct.isWebGL2){let ml=Si[Uo];ae.update(ml,Dn),ae.bind(ml,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}function nf(I,J){I.ambientLightColor.needsUpdate=J,I.lightProbe.needsUpdate=J,I.directionalLights.needsUpdate=J,I.directionalLightShadows.needsUpdate=J,I.pointLights.needsUpdate=J,I.pointLightShadows.needsUpdate=J,I.spotLights.needsUpdate=J,I.spotLightShadows.needsUpdate=J,I.rectAreaLights.needsUpdate=J,I.hemisphereLights.needsUpdate=J}function sf(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(I,J,st){At.get(I.texture).__webglTexture=J,At.get(I.depthTexture).__webglTexture=st;let rt=At.get(I);rt.__hasExternalTextures=!0,rt.__hasExternalTextures&&(rt.__autoAllocateDepthBuffer=st===void 0,rt.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,J){let st=At.get(I);st.__webglFramebuffer=J,st.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(I,J=0,st=0){E=I,R=J,y=st;let rt=!0,nt=null,Tt=!1,Ft=!1;if(I){let Gt=At.get(I);Gt.__useDefaultFramebuffer!==void 0?(bt.bindFramebuffer(K.FRAMEBUFFER,null),rt=!1):Gt.__webglFramebuffer===void 0?L.setupRenderTarget(I):Gt.__hasExternalTextures&&L.rebindTextures(I,At.get(I.texture).__webglTexture,At.get(I.depthTexture).__webglTexture);let Zt=I.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ft=!0);let Xt=At.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Xt[J])?nt=Xt[J][st]:nt=Xt[J],Tt=!0):Ct.isWebGL2&&I.samples>0&&L.useMultisampledRTT(I)===!1?nt=At.get(I).__webglMultisampledFramebuffer:Array.isArray(Xt)?nt=Xt[st]:nt=Xt,S.copy(I.viewport),k.copy(I.scissor),W=I.scissorTest}else S.copy(P).multiplyScalar(B).floor(),k.copy(V).multiplyScalar(B).floor(),W=q;if(bt.bindFramebuffer(K.FRAMEBUFFER,nt)&&Ct.drawBuffers&&rt&&bt.drawBuffers(I,nt),bt.viewport(S),bt.scissor(k),bt.setScissorTest(W),Tt){let Gt=At.get(I.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+J,Gt.__webglTexture,st)}else if(Ft){let Gt=At.get(I.texture),Zt=J||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Gt.__webglTexture,st||0,Zt)}T=-1},this.readRenderTargetPixels=function(I,J,st,rt,nt,Tt,Ft){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=At.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ft!==void 0&&(Nt=Nt[Ft]),Nt){bt.bindFramebuffer(K.FRAMEBUFFER,Nt);try{let Gt=I.texture,Zt=Gt.format,Xt=Gt.type;if(Zt!==de&&Rt.convert(Zt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Kt=Xt===ln&&(xt.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Xt!==je&&Rt.convert(Xt)!==K.getParameter(K.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xt===hn&&(Ct.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=I.width-rt&&st>=0&&st<=I.height-nt&&K.readPixels(J,st,rt,nt,Rt.convert(Zt),Rt.convert(Xt),Tt)}finally{let Gt=E!==null?At.get(E).__webglFramebuffer:null;bt.bindFramebuffer(K.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(I,J,st=0){let rt=Math.pow(2,-st),nt=Math.floor(J.image.width*rt),Tt=Math.floor(J.image.height*rt);L.setTexture2D(J,0),K.copyTexSubImage2D(K.TEXTURE_2D,st,0,0,I.x,I.y,nt,Tt),bt.unbindTexture()},this.copyTextureToTexture=function(I,J,st,rt=0){let nt=J.image.width,Tt=J.image.height,Ft=Rt.convert(st.format),Nt=Rt.convert(st.type);L.setTexture2D(st,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,st.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,st.unpackAlignment),J.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,rt,I.x,I.y,nt,Tt,Ft,Nt,J.image.data):J.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,rt,I.x,I.y,J.mipmaps[0].width,J.mipmaps[0].height,Ft,J.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,rt,I.x,I.y,Ft,Nt,J.image),rt===0&&st.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(I,J,st,rt,nt=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Tt=I.max.x-I.min.x+1,Ft=I.max.y-I.min.y+1,Nt=I.max.z-I.min.z+1,Gt=Rt.convert(rt.format),Zt=Rt.convert(rt.type),Xt;if(rt.isData3DTexture)L.setTexture3D(rt,0),Xt=K.TEXTURE_3D;else if(rt.isDataArrayTexture||rt.isCompressedArrayTexture)L.setTexture2DArray(rt,0),Xt=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,rt.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,rt.unpackAlignment);let Kt=K.getParameter(K.UNPACK_ROW_LENGTH),Ie=K.getParameter(K.UNPACK_IMAGE_HEIGHT),bi=K.getParameter(K.UNPACK_SKIP_PIXELS),Ge=K.getParameter(K.UNPACK_SKIP_ROWS),Ji=K.getParameter(K.UNPACK_SKIP_IMAGES),Ee=st.isCompressedTexture?st.mipmaps[nt]:st.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Ee.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ee.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,I.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,I.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,I.min.z),st.isDataTexture||st.isData3DTexture?K.texSubImage3D(Xt,nt,J.x,J.y,J.z,Tt,Ft,Nt,Gt,Zt,Ee.data):st.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Xt,nt,J.x,J.y,J.z,Tt,Ft,Nt,Gt,Ee.data)):K.texSubImage3D(Xt,nt,J.x,J.y,J.z,Tt,Ft,Nt,Gt,Zt,Ee),K.pixelStorei(K.UNPACK_ROW_LENGTH,Kt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ie),K.pixelStorei(K.UNPACK_SKIP_PIXELS,bi),K.pixelStorei(K.UNPACK_SKIP_ROWS,Ge),K.pixelStorei(K.UNPACK_SKIP_IMAGES,Ji),nt===0&&rt.generateMipmaps&&K.generateMipmap(Xt),bt.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?L.setTextureCube(I,0):I.isData3DTexture?L.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?L.setTexture2DArray(I,0):L.setTexture2D(I,0),bt.unbindTexture()},this.resetState=function(){R=0,y=0,E=null,bt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===fc?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===Ya?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?qn:gd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===qn?fe:De}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Hh=class extends Mr{};Hh.prototype.isWebGL1Renderer=!0;var Ri=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Hs=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Eh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},si=new w,Kn=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyMatrix4(t),this.setXYZ(e,si.x,si.y,si.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyNormalMatrix(t),this.setXYZ(e,si.x,si.y,si.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.transformDirection(t),this.setXYZ(e,si.x,si.y,si.z);return this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Wt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},wr=class extends di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ws,rr=new w,Es=new w,Ss=new w,Ts=new ft,ar=new ft,Rd=new Pt,aa=new w,or=new w,oa=new w,zu=new ft,dh=new ft,Uu=new ft,Pa=class extends Se{constructor(t=new wr){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hs(e,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Kn(i,3,0,!1)),ws.setAttribute("uv",new Kn(i,2,3,!1))}this.geometry=ws,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ss.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;ha(aa.set(-.5,-.5,0),Ss,a,Es,n,s),ha(or.set(.5,-.5,0),Ss,a,Es,n,s),ha(oa.set(.5,.5,0),Ss,a,Es,n,s),zu.set(0,0),dh.set(1,0),Uu.set(1,1);let o=t.ray.intersectTriangle(aa,or,oa,!1,rr);if(o===null&&(ha(or.set(-.5,.5,0),Ss,a,Es,n,s),dh.set(0,1),o=t.ray.intersectTriangle(aa,oa,or,!1,rr),o===null))return;let h=t.ray.origin.distanceTo(rr);h<t.near||h>t.far||e.push({distance:h,point:rr.clone(),uv:Vn.getInterpolation(rr,aa,or,oa,zu,dh,Uu,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ha(r,t,e,i,n,s){Ts.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(ar.x=s*Ts.x-n*Ts.y,ar.y=n*Ts.x+s*Ts.y):ar.copy(Ts),r.copy(t),r.x+=ar.x,r.y+=ar.y,r.applyMatrix4(Rd)}var Nu=new w,Ou=new ie,Bu=new ie,cv=new w,Hu=new Pt,ca=new w,fh=new _i,Vu=new Pt,ph=new Us,Qn=class extends pt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_l,this.bindMatrix=new Pt,this.bindMatrixInverse=new Pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ai),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,ca),this.boundingBox.expandByPoint(ca)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _i),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,ca),this.boundingSphere.expandByPoint(ca)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fh.copy(this.boundingSphere),fh.applyMatrix4(n),t.ray.intersectsSphere(fh)!==!1&&(Vu.copy(n).invert(),ph.copy(t.ray).applyMatrix4(Vu),!(this.boundingBox!==null&&ph.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ph)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ie,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===_l?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Uf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;Ou.fromBufferAttribute(n.attributes.skinIndex,t),Bu.fromBufferAttribute(n.attributes.skinWeight,t),Nu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let a=Bu.getComponent(s);if(a!==0){let o=Ou.getComponent(s);Hu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(cv.copy(Nu).applyMatrix4(Hu),a)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},Zn=class extends Se{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ni=class extends Ke{constructor(t=null,e=1,i=1,n,s,a,o,h,c=Re,l=Re,u,d){super(null,a,o,h,c,l,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gu=new Pt,lv=new Pt,Vs=class r{constructor(t=[],e=[]){this.uuid=Ui(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Pt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Pt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=t.length;s<a;s++){let o=t[s]?t[s].matrixWorld:lv;Gu.multiplyMatrices(o,e[s]),Gu.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Ni(e,t,t,de,hn);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let s=t.bones[i],a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Zn),this.bones.push(a),this.boneInverses.push(new Pt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){let a=e[n];t.bones.push(a.uuid);let o=i[n];t.boneInverses.push(o.toArray())}return t}},Qe=class extends Wt{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},As=new Pt,Wu=new Pt,la=[],qu=new Ai,uv=new Pt,hr=new pt,cr=new _i,La=class extends pt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qe(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,uv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,As),qu.copy(t.boundingBox).applyMatrix4(As),this.boundingBox.union(qu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,As),cr.copy(t.boundingSphere).applyMatrix4(As),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(i),t.ray.intersectsSphere(cr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,As),Wu.multiplyMatrices(i,As),hr.matrixWorld=Wu,hr.raycast(t,la);for(let a=0,o=la.length;a<o;a++){let h=la[a];h.instanceId=s,h.object=this,e.push(h)}la.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qe(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Er=class extends di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Xu=new w,ju=new w,Yu=new Pt,mh=new Us,ua=new _i,Gs=class extends Se{constructor(t=new le,e=new Er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Xu.fromBufferAttribute(e,n-1),ju.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Xu.distanceTo(ju);t.setAttribute("lineDistance",new re(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(n),ua.radius+=s,t.ray.intersectsSphere(ua)===!1)return;Yu.copy(n).invert(),mh.copy(t.ray).applyMatrix4(Yu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=new w,l=new w,u=new w,d=new w,f=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){let p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let v=p,M=x-1;v<M;v+=f){let R=m.getX(v),y=m.getX(v+1);if(c.fromBufferAttribute(g,R),l.fromBufferAttribute(g,y),mh.distanceSqToSegment(c,l,d,u)>h)continue;d.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=p,M=x-1;v<M;v+=f){if(c.fromBufferAttribute(g,v),l.fromBufferAttribute(g,v+1),mh.distanceSqToSegment(c,l,d,u)>h)continue;d.applyMatrix4(this.matrixWorld);let y=t.ray.origin.distanceTo(d);y<t.near||y>t.far||e.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},Ku=new w,Qu=new w,Ia=class extends Gs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Ku.fromBufferAttribute(e,n),Qu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Ku.distanceTo(Qu);t.setAttribute("lineDistance",new re(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fa=class extends Gs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Sr=class extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zu=new Pt,Vh=new Us,da=new _i,fa=new w,Da=class extends Se{constructor(t=new le,e=new Sr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(n),da.radius+=s,t.ray.intersectsSphere(da)===!1)return;Zu.copy(n).invert(),Vh.copy(t.ray).applyMatrix4(Zu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,b=f;m<b;m++){let g=c.getX(m);fa.fromBufferAttribute(u,g),Ju(fa,g,h,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)fa.fromBufferAttribute(u,m),Ju(fa,m,h,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ju(r,t,e,i,n,s,a){let o=Vh.distanceSqToPoint(r);if(o<e){let h=new w;Vh.closestPointToPoint(r,h),h.applyMatrix4(i);let c=n.ray.origin.distanceTo(h);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,object:a})}}var Oi=class extends Ke{constructor(t,e,i,n,s,a,o,h,c){super(t,e,i,n,s,a,o,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,h=s-1,c;for(;o<=h;)if(n=Math.floor(o+(h-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)h=n-1;else{h=n;break}if(n=h,i[n]===a)return n/(s-1);let l=i[n],d=i[n+1]-l,f=(a-l)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),h=e||(a.isVector2?new ft:new w);return h.copy(o).sub(a).normalize(),h}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new w,n=[],s=[],a=[],o=new w,h=new Pt;for(let f=0;f<=t;f++){let m=f/t;n[f]=this.getTangentAt(m,new w)}s[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,l=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);l<=c&&(c=l,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ue(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(h.makeRotationAxis(o,m))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Ue(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(h.makeRotationAxis(n[m],f*m)),a[m].crossVectors(n[m],s[m])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Tr=class extends Ci{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=h}getPoint(t,e){let i=e||new ft,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,h=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=h-this.aX,f=c-this.aY;h=d*l-f*u+this.aX,c=d*u+f*l+this.aY}return i.set(h,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Gh=class extends Tr{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function gc(){let r=0,t=0,e=0,i=0;function n(s,a,o,h){r=s,t=o,e=-3*s+3*a-2*o-h,i=2*s-2*a+o+h}return{initCatmullRom:function(s,a,o,h,c){n(a,o,c*(o-s),c*(h-a))},initNonuniformCatmullRom:function(s,a,o,h,c,l,u){let d=(a-s)/c-(o-s)/(c+l)+(o-a)/l,f=(o-a)/l-(h-a)/(l+u)+(h-o)/u;d*=l,f*=l,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var pa=new w,gh=new gc,bh=new gc,vh=new gc,Wh=class extends Ci{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new w){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:h===0&&o===s-1&&(o=s-2,h=1);let c,l;this.closed||o>0?c=n[(o-1)%s]:(pa.subVectors(n[0],n[1]).add(n[0]),c=pa);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?l=n[(o+2)%s]:(pa.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=pa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(l),f);b<1e-4&&(b=1),m<1e-4&&(m=b),g<1e-4&&(g=b),gh.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,m,b,g),bh.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,m,b,g),vh.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,m,b,g)}else this.curveType==="catmullrom"&&(gh.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),bh.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),vh.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return i.set(gh.calc(h),bh.calc(h),vh.calc(h)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new w().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $u(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,h=r*o;return(2*e-2*i+s+a)*h+(-3*e+3*i-2*s-a)*o+s*r+e}function dv(r,t){let e=1-r;return e*e*t}function fv(r,t){return 2*(1-r)*r*t}function pv(r,t){return r*r*t}function gr(r,t,e,i){return dv(r,t)+fv(r,e)+pv(r,i)}function mv(r,t){let e=1-r;return e*e*e*t}function gv(r,t){let e=1-r;return 3*e*e*r*t}function bv(r,t){return 3*(1-r)*r*r*t}function vv(r,t){return r*r*r*t}function br(r,t,e,i,n){return mv(r,t)+gv(r,e)+bv(r,i)+vv(r,n)}var ka=class extends Ci{constructor(t=new ft,e=new ft,i=new ft,n=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ft){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(br(t,n.x,s.x,a.x,o.x),br(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qh=class extends Ci{constructor(t=new w,e=new w,i=new w,n=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new w){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(br(t,n.x,s.x,a.x,o.x),br(t,n.y,s.y,a.y,o.y),br(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends Ci{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xh=class extends Ci{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends Ci{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(gr(t,n.x,s.x,a.x),gr(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jh=class extends Ci{constructor(t=new w,e=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new w){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(gr(t,n.x,s.x,a.x),gr(t,n.y,s.y,a.y),gr(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Na=class extends Ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,h=n[a===0?a:a-1],c=n[a],l=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set($u(o,h.x,c.x,l.x,u.x),$u(o,h.y,c.y,l.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new ft().fromArray(n))}return this}},td=Object.freeze({__proto__:null,ArcCurve:Gh,CatmullRomCurve3:Wh,CubicBezierCurve:ka,CubicBezierCurve3:qh,EllipseCurve:Tr,LineCurve:za,LineCurve3:Xh,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:jh,SplineCurve:Na}),Yh=class extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new td[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],h=o.getLength(),c=h===0?0:1-a/h;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(o);for(let c=0;c<h.length;c++){let l=h[c];i&&i.equals(l)||(e.push(l),i=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new td[n.type]().fromJSON(n))}return this}},Kh=class extends Yh{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new za(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Ua(this.currentPoint.clone(),new ft(t,e),new ft(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new ka(this.currentPoint.clone(),new ft(t,e),new ft(i,n),new ft(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Na(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+o,e+h,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,h){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,i,n,s,a,o,h),this}absellipse(t,e,i,n,s,a,o,h){let c=new Tr(t,e,i,n,s,a,o,h);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ws=class r extends le{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Ue(n,0,Math.PI*2);let s=[],a=[],o=[],h=[],c=[],l=1/e,u=new w,d=new ft,f=new w,m=new w,b=new w,g=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,b.copy(f),f.normalize(),h.push(f.x,f.y,f.z);break;case t.length-1:h.push(b.x,b.y,b.z);break;default:g=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),h.push(f.x,f.y,f.z),b.copy(m)}for(let x=0;x<=e;x++){let v=i+x*l*n,M=Math.sin(v),R=Math.cos(v);for(let y=0;y<=t.length-1;y++){u.x=t[y].x*M,u.y=t[y].y,u.z=t[y].x*R,a.push(u.x,u.y,u.z),d.x=x/e,d.y=y/(t.length-1),o.push(d.x,d.y);let E=h[3*y+0]*M,T=h[3*y+1],_=h[3*y+0]*R;c.push(E,T,_)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){let M=v+x*t.length,R=M,y=M+t.length,E=M+t.length+1,T=M+1;s.push(R,y,T),s.push(E,T,y)}this.setIndex(s),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},un=class r extends Ws{constructor(t=1,e=1,i=4,n=8){let s=new Kh;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}},qs=class r extends le{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],h=[],c=new w,l=new ft;a.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[d]/t+1)/2,l.y=(a[d+1]/t+1)/2,h.push(l.x,l.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},xe=class r extends le{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:h};let c=this;n=Math.floor(n),s=Math.floor(s);let l=[],u=[],d=[],f=[],m=0,b=[],g=i/2,p=0;x(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(l),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function x(){let M=new w,R=new w,y=0,E=(e-t)/i;for(let T=0;T<=s;T++){let _=[],S=T/s,k=S*(e-t)+t;for(let W=0;W<=n;W++){let Y=W/n,N=Y*h+o,D=Math.sin(N),O=Math.cos(N);R.x=k*D,R.y=-S*i+g,R.z=k*O,u.push(R.x,R.y,R.z),M.set(D,E,O).normalize(),d.push(M.x,M.y,M.z),f.push(Y,1-S),_.push(m++)}b.push(_)}for(let T=0;T<n;T++)for(let _=0;_<s;_++){let S=b[_][T],k=b[_+1][T],W=b[_+1][T+1],Y=b[_][T+1];l.push(S,k,Y),l.push(k,W,Y),y+=6}c.addGroup(p,y,0),p+=y}function v(M){let R=m,y=new ft,E=new w,T=0,_=M===!0?t:e,S=M===!0?1:-1;for(let W=1;W<=n;W++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;let k=m;for(let W=0;W<=n;W++){let N=W/n*h+o,D=Math.cos(N),O=Math.sin(N);E.x=_*O,E.y=g*S,E.z=_*D,u.push(E.x,E.y,E.z),d.push(0,S,0),y.x=D*.5+.5,y.y=O*.5*S+.5,f.push(y.x,y.y),m++}for(let W=0;W<n;W++){let Y=R+W,N=k+W;M===!0?l.push(N,N+1,Y):l.push(N+1,N,Y),T+=3}c.addGroup(p,T,M===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Qh=class r extends le{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),l(),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(s.slice(),3)),this.setAttribute("uv",new re(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let v=new w,M=new w,R=new w;for(let y=0;y<e.length;y+=3)f(e[y+0],v),f(e[y+1],M),f(e[y+2],R),h(v,M,R,x)}function h(x,v,M,R){let y=R+1,E=[];for(let T=0;T<=y;T++){E[T]=[];let _=x.clone().lerp(M,T/y),S=v.clone().lerp(M,T/y),k=y-T;for(let W=0;W<=k;W++)W===0&&T===y?E[T][W]=_:E[T][W]=_.clone().lerp(S,W/k)}for(let T=0;T<y;T++)for(let _=0;_<2*(y-T)-1;_++){let S=Math.floor(_/2);_%2===0?(d(E[T][S+1]),d(E[T+1][S]),d(E[T][S])):(d(E[T][S+1]),d(E[T+1][S+1]),d(E[T+1][S]))}}function c(x){let v=new w;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(x),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function l(){let x=new w;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];let M=g(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;a.push(M,1-R)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){let v=a[x+0],M=a[x+2],R=a[x+4],y=Math.max(v,M,R),E=Math.min(v,M,R);y>.9&&E<.1&&(v<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),R<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,v){let M=x*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function m(){let x=new w,v=new w,M=new w,R=new w,y=new ft,E=new ft,T=new ft;for(let _=0,S=0;_<s.length;_+=9,S+=6){x.set(s[_+0],s[_+1],s[_+2]),v.set(s[_+3],s[_+4],s[_+5]),M.set(s[_+6],s[_+7],s[_+8]),y.set(a[S+0],a[S+1]),E.set(a[S+2],a[S+3]),T.set(a[S+4],a[S+5]),R.copy(x).add(v).add(M).divideScalar(3);let k=g(R);b(y,S+0,x,k),b(E,S+2,v,k),b(T,S+4,M,k)}}function b(x,v,M,R){R<0&&x.x===1&&(a[v]=x.x-1),M.x===0&&M.z===0&&(a[v]=R/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var Oa=class r extends Qh{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var ji=class r extends le{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let h=Math.min(a+o,Math.PI),c=0,l=[],u=new w,d=new w,f=[],m=[],b=[],g=[];for(let p=0;p<=i;p++){let x=[],v=p/i,M=0;p===0&&a===0?M=.5/e:p===i&&h===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){let y=R/e;u.x=-t*Math.cos(n+y*s)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(n+y*s)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(y+M,1-v),x.push(c++)}l.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){let v=l[p][x+1],M=l[p][x],R=l[p+1][x],y=l[p+1][x+1];(p!==0||a>0)&&f.push(v,M,y),(p!==i-1||h<Math.PI)&&f.push(M,R,y)}this.setIndex(f),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(b,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var dn=class r extends le{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],h=[],c=[],l=new w,u=new w,d=new w;for(let f=0;f<=i;f++)for(let m=0;m<=n;m++){let b=m/n*s,g=f/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(b),u.y=(t+e*Math.cos(g))*Math.sin(b),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),l.x=t*Math.cos(b),l.y=t*Math.sin(b),d.subVectors(u,l).normalize(),h.push(d.x,d.y,d.z),c.push(m/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=n;m++){let b=(n+1)*f+m-1,g=(n+1)*(f-1)+m-1,p=(n+1)*(f-1)+m,x=(n+1)*f+m;a.push(b,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Me=class extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},pi=class extends Me{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ma(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function xv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function yv(r){function t(n,s){return r[n]-r[s]}let e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function ed(r,t,e){let i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){let o=e[s]*t;for(let h=0;h!==t;++h)n[a++]=r[o+h]}return n}function Cd(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=r[n++];while(s!==void 0)}var An=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let h=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zh=class extends An{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jl,endingEnd:jl}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],h=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yl:s=t,o=2*e-i;break;case Kl:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(h===void 0)switch(this.getSettings_().endingEnd){case Yl:a=t,h=2*i-e;break;case Kl:a=1,h=i+n[1]-n[0];break;default:a=t-1,h=e}let c=(i-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(h-i),this._offsetPrev=s*l,this._offsetNext=a*l}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(i-e)/(n-e),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,x=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*b+.5*m,M=f*g-f*b;for(let R=0;R!==o;++R)s[R]=p*a[l+R]+x*a[c+R]+v*a[h+R]+M*a[u+R];return s}},Jh=class extends An{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,l=(i-e)/(n-e),u=1-l;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[h+d]*l;return s}},$h=class extends An{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Pi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ma(e,this.TimeBufferType),this.values=ma(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ma(t.times,Array),values:ma(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new $h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ks:e=this.InterpolantFactoryMethodDiscrete;break;case jn:e=this.InterpolantFactoryMethodLinear;break;case Go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return jn;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let h=i[o];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(a!==null&&a>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,h,a),t=!1;break}a=h}if(n!==void 0&&xv(n))for(let o=0,h=n.length;o!==h;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Go,s=t.length-1,a=1;for(let o=1;o<s;++o){let h=!1,c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==t[0]))if(n)h=!0;else{let u=o*i,d=u-i,f=u+i;for(let m=0;m!==i;++m){let b=e[u+m];if(b!==e[d+m]||b!==e[f+m]){h=!0;break}}}if(h){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,h=a*i,c=0;c!==i;++c)e[h+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Pi.prototype.TimeBufferType=Float32Array;Pi.prototype.ValueBufferType=Float32Array;Pi.prototype.DefaultInterpolation=jn;var Rn=class extends Pi{};Rn.prototype.ValueTypeName="bool";Rn.prototype.ValueBufferType=Array;Rn.prototype.DefaultInterpolation=ks;Rn.prototype.InterpolantFactoryMethodLinear=void 0;Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Pi{};Ba.prototype.ValueTypeName="color";var fn=class extends Pi{};fn.prototype.ValueTypeName="number";var tc=class extends An{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(i-e)/(n-e),c=t*o;for(let l=c+o;c!==l;c+=4)yt.slerpFlat(s,0,a,c-o,a,c,h);return s}},Yi=class extends Pi{InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}};Yi.prototype.ValueTypeName="quaternion";Yi.prototype.DefaultInterpolation=jn;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Cn=class extends Pi{};Cn.prototype.ValueTypeName="string";Cn.prototype.ValueBufferType=Array;Cn.prototype.DefaultInterpolation=ks;Cn.prototype.InterpolantFactoryMethodLinear=void 0;Cn.prototype.InterpolantFactoryMethodSmooth=void 0;var pn=class extends Pi{};pn.prototype.ValueTypeName="vector";var Ha=class{constructor(t,e=-1,i,n=Xf){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=Ui(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(Mv(i[a]).scale(n));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){let e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=i.length;s!==a;++s)e.push(Pi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){let s=e.length,a=[];for(let o=0;o<s;o++){let h=[],c=[];h.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let l=yv(h);h=ed(h,1,l),c=ed(c,1,l),!n&&h[0]===0&&(h.push(s),c.push(c[0])),a.push(new fn(".morphTargetInfluences["+e[o].name+"]",h,c).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){let n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,h=t.length;o<h;o++){let c=t[o],l=c.name.match(s);if(l&&l.length>1){let u=l[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,m,b){if(f.length!==0){let g=[],p=[];Cd(f,g,p,m),g.length!==0&&b.push(new u(d,g,p))}},n=[],s=t.name||"default",a=t.fps||30,o=t.blendMode,h=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)f[d[m].morphTargets[b]]=-1;for(let b in f){let g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){let v=d[m];g.push(v.time),p.push(v.morphTarget===b?1:0)}n.push(new fn(".morphTargetInfluence["+b+"]",g,p))}h=f.length*a}else{let f=".bones["+e[u].name+"]";i(pn,f+".position",d,"pos",n),i(Yi,f+".quaternion",d,"rot",n),i(pn,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,h,n,o)}resetDuration(){let t=this.tracks,e=0;for(let i=0,n=t.length;i!==n;++i){let s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function _v(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fn;case"vector":case"vector2":case"vector3":case"vector4":return pn;case"color":return Ba;case"quaternion":return Yi;case"bool":case"boolean":return Rn;case"string":return Cn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Mv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=_v(r.type);if(r.times===void 0){let e=[],i=[];Cd(r.keys,e,i,"value"),r.times=e,r.values=i}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}var wn={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},ec=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,h,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(l){o++,s===!1&&n.onStart!==void 0&&n.onStart(l,a,o),s=!0},this.itemEnd=function(l){a++,n.onProgress!==void 0&&n.onProgress(l,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(l){n.onError!==void 0&&n.onError(l)},this.resolveURL=function(l){return h?h(l):l},this.setURLModifier=function(l){return h=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){let u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return m}return null}}},wv=new ec,mn=class{constructor(t){this.manager=t!==void 0?t:wv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};mn.DEFAULT_MATERIAL_NAME="__DEFAULT";var rn={},ic=class extends Error{constructor(t,e){super(t),this.response=e}},Ar=class extends mn{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=wn.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(rn[t]!==void 0){rn[t].push({onLoad:e,onProgress:i,onError:n});return}rn[t]=[],rn[t].push({onLoad:e,onProgress:i,onError:n});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,h=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let l=rn[t],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:v,value:M})=>{if(v)p.close();else{b+=M.byteLength;let R=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let y=0,E=l.length;y<E;y++){let T=l[y];T.onProgress&&T.onProgress(R)}p.enqueue(M),x()}})}}});return new Response(g)}else throw new ic(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(h){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{wn.add(t,c);let l=rn[t];delete rn[t];for(let u=0,d=l.length;u<d;u++){let f=l[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let l=rn[t];if(l===void 0)throw this.manager.itemError(t),c;delete rn[t];for(let u=0,d=l.length;u<d;u++){let f=l[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var nc=class extends mn{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=wn.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let o=yr("img");function h(){l(),wn.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){l(),n&&n(u),s.manager.itemError(t),s.manager.itemEnd(t)}function l(){o.removeEventListener("load",h,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}};var Va=class extends mn{constructor(t){super(t)}load(t,e,i,n){let s=new Ke,a=new nc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}},Rr=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var xh=new Pt,id=new w,nd=new w,Cr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;id.setFromMatrixPosition(t.matrixWorld),e.position.copy(id),nd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nd),e.updateMatrixWorld(),xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},sc=class extends Cr{constructor(){super(new Ne(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=zs*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Xs=class extends Rr{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new sc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},sd=new Pt,lr=new w,yh=new w,rc=class extends Cr{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),lr.setFromMatrixPosition(t.matrixWorld),i.position.copy(lr),yh.copy(i.position),yh.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(yh),i.updateMatrixWorld(),n.makeTranslation(-lr.x,-lr.y,-lr.z),sd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd)}},Ga=class extends Rr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new rc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ac=class extends Cr{constructor(){super(new fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jn=class extends Rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new ac}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Pn=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,n=t.length;i<n;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Ki=class extends le{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Wa=class extends mn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=wn.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let h=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return wn.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){n&&n(c),wn.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});wn.add(t,h),s.manager.itemStart(t)}};var bc="\\[\\]\\.:\\/",Ev=new RegExp("["+bc+"]","g"),vc="[^"+bc+"]",Sv="[^"+bc.replace("\\.","")+"]",Tv=/((?:WC+[\/:])*)/.source.replace("WC",vc),Av=/(WCOD+)?/.source.replace("WCOD",Sv),Rv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),Cv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),Pv=new RegExp("^"+Tv+Av+Rv+Cv+"$"),Lv=["material","materials","bones","map"],oc=class{constructor(t,e,i){let n=i||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},be=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ev,"")}static parseTrackName(t){let e=Pv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Lv.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let h=i(o.children);if(h)return h}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=oc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);function oi(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var wi=(r,t,e)=>r<t?t:r>e?e:r,mt=r=>r<0?0:r>1?1:r,lt=(r,t,e)=>r+(t-r)*e;function ke(r,t,e){let i=mt((e-r)/(t-r));return i*i*(3-2*i)}function ei(r,t=0){let e=Math.floor(r),i=r-e,n=a=>{let o=Math.sin((a+t*57.13)*127.1)*43758.5453;return o-Math.floor(o)},s=i*i*(3-2*i);return n(e)*(1-s)+n(e+1)*s}var ye=24,mi=2,Iv=9.81,xc=Math.PI*2,Fv=[[300,3,.8,.3,0],[236,3.2,.8,.3,0],[187,3,.8,.34,0],[151,2.6,.8,.34,0],[122,2.1,.78,.38,0],[99,1.6,.78,.38,0],[78,1.05,.64,.7,1],[63,.9,.64,.7,1],[50,.75,.64,.75,1],[40,.6,.62,.75,1],[31,.48,.62,.8,1],[24.5,.38,.6,.8,1],[19,.3,.6,.85,1],[15,.235,.58,.85,1],[12.1,.17,.5,1.15,2],[9.3,.13,.5,1.15,2],[7.1,.1,.48,1.2,2],[5.4,.077,.48,1.2,2],[4.1,.058,.46,1.25,2],[3.2,.045,.46,1.25,2],[2.5,.035,.44,1.3,2],[1.9,.027,.44,1.3,2],[1.5,.021,.42,1.35,2],[1.15,.016,.42,1.35,2]],yc=class{constructor(){this.active=!1,this.ox=0,this.oz=0,this.dx=1,this.dz=0,this.speed=14,this.width=150,this.hMax=12,this.t0=0,this.tBreak=14,this.age=0,this.s=0,this.height=0,this.front=14,this.frontMin=8.5,this.seed=0,this.mega=!1,this.back=55,this.curl=0,this.brk=0,this.turb=0,this.roll=0}},Qa=class{constructor(t=20261112){this.time=0,this.storm=1,this.windAngle=0;let e=oi(t);this.dirX=new Float64Array(ye),this.dirZ=new Float64Array(ye),this.k=new Float64Array(ye),this.omega=new Float64Array(ye),this.phase0=new Float64Array(ye),this.amp0=new Float64Array(ye),this.amp=new Float64Array(ye),this.steep=new Float64Array(ye),this.len=new Float64Array(ye),this.band=new Uint8Array(ye),this.phT=new Float64Array(ye),this.bodyW=new Float64Array(ye);for(let i=0;i<ye;i++){let[n,s,a,o,h]=Fv[i],c=1+(e()-.5)*.06,l=n*c,u=i%2===0?1:-1,d=this.windAngle+u*o*(.25+.75*e());this.dirX[i]=Math.cos(d),this.dirZ[i]=Math.sin(d),this.len[i]=l,this.k[i]=xc/l,this.omega[i]=Math.sqrt(Iv*this.k[i]),this.phase0[i]=e()*xc,this.amp0[i]=s*(.9+e()*.2),this.steep[i]=a,this.band[i]=h,this.bodyW[i]=1/(1+Math.pow(this.k[i]*.95,2))}this.uA=new Float32Array(ye*4),this.uB=new Float32Array(ye*4),this.breakers=[];for(let i=0;i<mi;i++)this.breakers.push(new yc);this.uBrkA=new Float32Array(mi*4),this.uBrkB=new Float32Array(mi*4),this.uBrkC=new Float32Array(mi*4),this.sigHeight=0,this.setStorm(1),this.update(0)}setStorm(t){this.storm=mt(t);let e=0,i=1+.2*Math.sin(this.time*.105)*Math.sin(this.time*.041+1.3);for(let n=0;n<ye;n++){let s=this.band[n],a=s===0?lt(.3,1,this.storm):s===1?lt(.22,1,this.storm):lt(.4,1,this.storm);this.amp[n]=this.amp0[n]*a*(s<2?i:1),e+=this.amp[n]*this.amp[n]*.5}this.sigHeight=4*Math.sqrt(e)}update(t){this.time+=t;let e=this.time;for(let i=0;i<ye;i++){this.phT[i]=(this.omega[i]*e+this.phase0[i])%xc;let n=i*4;this.uA[n]=this.dirX[i],this.uA[n+1]=this.dirZ[i],this.uA[n+2]=this.k[i],this.uA[n+3]=this.amp[i],this.uB[n]=this.phT[i],this.uB[n+1]=this.steep[i],this.uB[n+2]=this.len[i],this.uB[n+3]=0}for(let i=0;i<mi;i++){let n=this.breakers[i],s=i*4;if(n.active){n.age=e-n.t0,n.s=n.speed*n.age;let o=ke(0,n.tBreak*.85,n.age),h=n.age-n.tBreak;n.brk=mt(h/1.6);let c=h>0?Math.exp(-h/(n.mega?5:3)):1;n.height=n.hMax*o*(.16+.84*c),n.front=lt(26,n.frontMin,ke(.3,1,o)),n.curl=ke(-2.2,.3,h)*(h>0?Math.exp(-h/2.2):1),n.turb=h>0?Math.min(1,h/1)*Math.exp(-Math.max(0,h-2.5)/(n.mega?8:5)):0,n.roll=h>0?n.brk*Math.exp(-h/(n.mega?5.5:3.2)):0,h>(n.mega?30:20)&&(n.active=!1)}let a=n.active?1:0;this.uBrkA[s]=n.ox,this.uBrkA[s+1]=n.oz,this.uBrkA[s+2]=n.dx,this.uBrkA[s+3]=n.dz,this.uBrkB[s]=n.s,this.uBrkB[s+1]=n.height*a,this.uBrkB[s+2]=n.front,this.uBrkB[s+3]=n.back,this.uBrkC[s]=n.width,this.uBrkC[s+1]=n.curl*a,this.uBrkC[s+2]=n.brk*a,this.uBrkC[s+3]=n.turb*a}}spawnBreaker(t,e,i={}){let n=this.breakers.find(o=>!o.active);if(!n)return null;let s=this.windAngle+(i.angleOffset||0);n.dx=Math.cos(s),n.dz=Math.sin(s),n.speed=i.speed||14;let a=i.lead||15;return n.ox=t-n.dx*n.speed*a,n.oz=e-n.dz*n.speed*a,n.seed=n.ox*.013+n.oz*.017,n.width=i.width||150,n.hMax=i.height||12,n.back=i.back||55,n.frontMin=i.frontMin||8.5,n.mega=!!i.mega,n.t0=this.time,n.tBreak=a+(i.breakOffset!==void 0?i.breakOffset:-1.2),n.age=0,n.active=!0,n.s=0,n.height=0,n.curl=0,n.brk=0,n.turb=0,n.roll=0,n}_breakerHeight(t,e,i){let n=e-t.ox,s=i-t.oz,a=n*t.dx+s*t.dz,o=-n*t.dz+s*t.dx,h=.16*Math.sin(o*.071+t.seed)+.09*Math.sin(o*.193+t.seed*1.7),c=2.6*Math.sin(o*.047+t.seed*.6)+1.2*Math.sin(o*.13+t.seed*2.1),l=a-t.s-c,u=Math.exp(-(o*o)/(t.width*t.width))*(1+h),d=l>0?t.front:t.back,f=Math.exp(-(l*l)/(d*d)),m=(l-2.4*t.front)/(1.7*t.front),b=-.22*Math.exp(-m*m);return this._bu=l,this._benv=u,this._bp=f,this._bsc=d,this._btr=b,this._btu=m,this._bpeel=Math.max(.15,Math.min(1.3,.55+2.5*h)),t.height*u*(f+b)}sample(t,e,i){let n=ye,s=this.dirX,a=this.dirZ,o=this.k,h=this.amp,c=this.steep,l=this.phT,u=this.omega,d=t,f=e;for(let z=0;z<3;z++){let G=0,tt=0;for(let Q=0;Q<n;Q++){let et=o[Q]*(s[Q]*d+a[Q]*f)-l[Q],ot=c[Q]*h[Q]*Math.sin(et);G-=s[Q]*ot,tt-=a[Q]*ot}d=t-G,f=e-tt}let m=0,b=0,g=0,p=0,x=0,v=0,M=0,R=0,y=0,E=0,T=0,_=0;for(let z=0;z<n;z++){let G=o[z]*(s[z]*d+a[z]*f)-l[z],tt=Math.sin(G),Q=Math.cos(G),et=h[z],ot=o[z]*et,it=c[z]*ot,wt=u[z];m+=et*Q,b+=it*s[z]*s[z]*Q,g+=it*a[z]*a[z]*Q,p+=it*s[z]*a[z]*Q,x-=ot*s[z]*tt,v-=ot*a[z]*tt;let K=c[z]*et*wt;M+=K*s[z]*Q,y+=K*a[z]*Q,R+=et*wt*tt;let zt=K*wt;E+=zt*s[z]*tt,_+=zt*a[z]*tt,T-=et*wt*wt*Q}let S=-x*(1-g)-v*p,k=(1-b)*(1-g)-p*p,W=-v*(1-b)-x*p,Y=k,N=0,D=0,O=0,B=0,U=0,F=0,P=0,V=0,q=0;for(let z=0;z<mi;z++){let G=this.breakers[z];if(!G.active||G.height<.01)continue;let tt=this._breakerHeight(G,t,e),Q=this._bu,et=this._benv,ot=this._bp,it=this._bsc;if(et<.002)continue;let wt=-2*Q/(it*it)*ot-.22*Math.exp(-this._btu*this._btu)*(-2*this._btu/(1.7*G.front)),K=G.height*et*wt;m+=tt,O+=tt,k<.05&&(k=.05);let zt=1/k;S*=zt,W*=zt,k=1,S-=K*G.dx,W-=K*G.dz,U+=Math.max(-12,Math.min(14,-G.speed*K)),V+=G.speed*G.speed*G.height*et*(-2/(it*it)+4*Q*Q/(it*it*it*it))*ot;let xt=G.speed*(.3*(1-G.brk)+.65*G.curl+.22*G.roll)*et*ot*Math.min(1,G.height/6),Ct=et*G.curl*Math.exp(-Math.pow((Q-.25*G.front)/(1.3*G.front),2))*Math.min(1,G.height/5);if(P=Math.max(P,Ct),q=Math.max(q,Math.min(G.mega?15:12,3.5+.6*G.hMax)*Ct*ke(-.7,.5,G.age-G.tBreak)),G.mega){let At=Math.min(1,Ct*1.3)*ke(-.7,.5,G.age-G.tBreak),L=Math.max(-12,Math.min(14,-G.speed*K));L>0&&(U-=L*.25*At);let C=G.speed*G.speed*G.height*et*(-2/(it*it)+4*Q*Q/(it*it*it*it))*ot;C>0&&(V-=C*.2*At)}if(B+=G.dx*xt,F+=G.dz*xt,G.mega){let At=G.speed*et*G.curl*Math.exp(-Math.pow((Q-.1*G.front)/(.9*G.front),2));B+=G.dx*.45*At,F+=G.dz*.45*At}let bt=G.speed*.26*et*Math.exp(-this._btu*this._btu)*Math.min(1,G.height/6)*(1-G.brk);B-=G.dx*bt,F-=G.dz*bt;let Ht=et*Math.exp(-Math.pow((Q-.3*G.front)/(1.6*G.front+26*G.turb),2));N=Math.max(N,G.brk*Ht*Math.min(1,G.height/3+G.turb)),D=Math.max(D,G.turb*et*Math.exp(-Math.pow((Q+14*G.turb)/(22+30*G.turb),2)))}let H=1/Math.sqrt(S*S+k*k+W*W);return i.h=m,i.nx=S*H,i.ny=k*H,i.nz=W*H,i.vx=M+B,i.vy=R+U,i.vz=y+F,i.ax=E,i.ay=T,i.az=_,i.bvx=B,i.bvy=U,i.bvz=F,i.lip=P,i.plunge=q,i.bay=V<-8.8?-8.8:V>19.6?19.6:V,i.jac=Y,i.x0=d,i.z0=f,i.aer=N,i.turb=D,i.brkH=O,i}heightFast(t,e){let i=this.dirX,n=this.dirZ,s=this.k,a=this.amp,o=this.phT,h=this.steep,c=t,l=e;for(let d=0;d<2;d++){let f=0,m=0;for(let b=0;b<14;b++){let g=h[b]*a[b]*Math.sin(s[b]*(i[b]*c+n[b]*l)-o[b]);f-=i[b]*g,m-=n[b]*g}c=t-f,l=e-m}let u=0;for(let d=0;d<14;d++)u+=a[d]*Math.cos(s[d]*(i[d]*c+n[d]*l)-o[d]);for(let d=0;d<mi;d++){let f=this.breakers[d];f.active&&f.height>.01&&(u+=this._breakerHeight(f,t,e))}return u}bodyFlow(t,e,i,n){let s=this.dirX,a=this.dirZ,o=this.k,h=this.amp,c=this.steep,l=this.phT,u=this.omega,d=this.bodyW,f=0,m=0,b=0,g=0,p=0,x=0;for(let v=0;v<ye;v++){let M=Math.exp(-o[v]*i)*d[v];if(M<.01)continue;let R=o[v]*(s[v]*t+a[v]*e)-l[v],y=Math.sin(R),E=Math.cos(R),T=h[v]*u[v]*M,_=T*u[v];f+=c[v]*T*s[v]*E,b+=c[v]*T*a[v]*E,m+=T*y,g+=c[v]*_*s[v]*y,x+=c[v]*_*a[v]*y,p-=_*E}return n.vx=f,n.vy=m,n.vz=b,n.ax=g,n.ay=p,n.az=x,n}velocityAtDepth(t,e,i,n){let s=this.dirX,a=this.dirZ,o=this.k,h=this.amp,c=this.steep,l=this.phT,u=this.omega,d=0,f=0,m=0;for(let b=0;b<ye;b++){let g=Math.exp(-o[b]*i);if(g<.01)continue;let p=o[b]*(s[b]*t+a[b]*e)-l[b],x=h[b]*u[b]*g,v=Math.cos(p);d+=c[b]*x*s[b]*v,m+=c[b]*x*a[b]*v,f+=x*Math.sin(p)}return n.vx=d,n.vy=f,n.vz=m,n}breakerFlow(t,e,i,n,s){let a=0,o=0,h=0,c=this.time;for(let l=0;l<mi;l++){let u=this.breakers[l];if(!u.active||u.roll<.003&&u.turb<.003)continue;this._breakerHeight(u,t,i);let d=this._benv,f=this._bu;if(!(d<.01)){if(u.roll>.003){let m=Math.max(1.8,Math.min(7.5,.36*u.hMax)),b=f-.35*u.front,g=e-(n-.55*m),p=Math.hypot(b,g);if(p<3.2*m){let x=p<m?1:m*m/(p*p),v=.85*u.speed/m*u.roll*d*x,M=v*g;a+=u.dx*M,h+=u.dz*M,o+=-v*b}}if(u.turb>.003){let m=u.turb*d*Math.exp(-Math.pow((f+14*u.turb)/(22+30*u.turb),2))*Math.exp(-Math.max(0,n-e)/6.5);if(m>.01){let b=m*3.4;a+=b*(Math.sin(.9*i+1.7*e+2.3*c)+.6*Math.sin(1.7*t-1.1*e-3.1*c+1.3)),o+=b*(Math.sin(1.1*t+.8*i+2.9*c+.7)+.6*Math.sin(-1.5*i+1.9*e+2*c)),h+=b*(Math.sin(1.3*e-.9*t+2.6*c+2.1)+.6*Math.sin(1.6*t+1.2*i-2.2*c)),o-=m*2.6*Math.exp(-Math.max(0,n-e)/3)}}}}return s.vx+=a,s.vy+=o,s.vz+=h,s}};function gi(){return{bay:0,lip:0,plunge:0,bvx:0,bvy:0,bvz:0,h:0,nx:0,ny:1,nz:0,vx:0,vy:0,vz:0,ax:0,ay:0,az:0,jac:1,x0:0,z0:0,aer:0,turb:0,brkH:0}}var at={hdrType:ln,uWaveA:{value:new Float32Array(ye*4)},uWaveB:{value:new Float32Array(ye*4)},uBrkA:{value:new Float32Array(mi*4)},uBrkB:{value:new Float32Array(mi*4)},uBrkC:{value:new Float32Array(mi*4)},uTime:{value:0},uStorm:{value:1},uRain:{value:1},uWindDir:{value:new ft(1,0)},uWindSpeed:{value:28},uGlowDir:{value:new w(-.55,.35,.25).normalize()},uAmbient:{value:new w(.05,.06,.072)},uFlash:{value:0},uFlashDir:{value:new w(1,.35,0).normalize()},uFlashColor:{value:new w(.78,.86,1)},uFlashSheet:{value:0},uFogDensity:{value:1/2600},uNoise:{value:null},uSkyEnv:{value:null},uDetailN:{value:null},uFoamTex:{value:null},uResolution:{value:new ft(1,1)},uSpotPos:{value:new w(0,100,0)},uSpotDir:{value:new w(0,-1,0)},uSpotP:{value:new ie(.99,0,30,0)},uWash:{value:new ie(0,0,1,0)}},Ys=`
uniform vec3 uSpotPos; uniform vec3 uSpotDir; uniform vec4 uSpotP;
float spotAt(vec3 p, out vec3 L) {
  vec3 d = uSpotPos - p; float ds = length(d); L = d / max(ds, 1e-3);
  if (uSpotP.y < 0.001) return 0.0;
  float x = (1.0 - dot(-L, uSpotDir)) / (1.0 - uSpotP.x);          // 1 at the nominal edge of the beam
  return uSpotP.y * (exp(-1.5 * x * x) + 0.045 * exp(-0.09 * x)) / (1.0 + ds * ds / (uSpotP.z * uSpotP.z));
}
`,gn="vec3(0.78, 0.88, 1.0)";function Pd(r=7){let e=oi(r),i=new Uint8Array(256*256*4);for(let s=0;s<i.length;s++)i[s]=e()*256|0;let n=new Ni(i,256,256,de,je);return n.wrapS=n.wrapT=ti,n.minFilter=ee,n.magFilter=ee,n.generateMipmaps=!1,n.needsUpdate=!0,n}function Ld(r=11,t=256){let e=oi(r),i=[];for(let d=0;d<56;d++){let f=2+Math.pow(e(),1.6)*38,m=(e()-.5)*2.4+(e()<.2?Math.PI*e():0),b=Math.round(Math.cos(m)*f),g=Math.round(Math.sin(m)*f);if(b===0&&g===0)continue;let p=Math.hypot(b,g);i.push({m:b,n:g,a:Math.pow(p,-1.35),ph:e()*Math.PI*2})}let n=new Float32Array(t*t),s=new Float32Array(t*t),a=new Float32Array(t*t),o=0;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let m=f/t,b=d/t,g=0,p=0,x=0;for(let M=0;M<i.length;M++){let R=i[M],y=6.283185307*(R.m*m+R.n*b)+R.ph,E=Math.sin(y);g-=R.a*R.m*E,p-=R.a*R.n*E,x+=R.a*Math.cos(y)}let v=d*t+f;n[v]=g,s[v]=p,a[v]=x,o+=g*g+p*p}o=Math.sqrt(o/(t*t*2));let h=0;for(let d=0;d<a.length;d++)h=Math.max(h,Math.abs(a[d]));let c=new Uint8Array(t*t*4),l=.3/o;for(let d=0;d<t*t;d++)c[d*4]=Math.max(0,Math.min(255,Math.round((n[d]*l*.5+.5)*255))),c[d*4+1]=Math.max(0,Math.min(255,Math.round((s[d]*l*.5+.5)*255))),c[d*4+2]=Math.round((a[d]/h*.5+.5)*255),c[d*4+3]=255;let u=new Ni(c,t,t,de,je);return u.wrapS=u.wrapT=ti,u.minFilter=Ye,u.magFilter=ee,u.generateMipmaps=!0,u.anisotropy=8,u.needsUpdate=!0,u}function Id(r=23,t=256){let e=oi(r),i=c=>{let l=new Float32Array(c*c*2);for(let d=0;d<l.length;d++)l[d]=e();let u=new Float32Array(t*t*2);for(let d=0;d<t;d++)for(let f=0;f<t;f++){let m=(f+.5)/t*c,b=(d+.5)/t*c,g=Math.floor(m),p=Math.floor(b),x=9,v=9;for(let M=-1;M<=1;M++)for(let R=-1;R<=1;R++){let y=g+R,E=p+M,T=(y%c+c)%c,_=(E%c+c)%c,S=y+l[(_*c+T)*2],k=E+l[(_*c+T)*2+1],W=Math.hypot(S-m,k-b);W<x?(v=x,x=W):W<v&&(v=W)}u[(d*t+f)*2]=x,u[(d*t+f)*2+1]=v-x}return u},n=i(9),s=i(23),a=i(51),o=new Uint8Array(t*t*4);for(let c=0;c<t*t;c++){let l=1-Math.min(1,n[c*2+1]*3.2),u=1-Math.min(1,s[c*2+1]*3),d=Math.min(1,l*.62+u*.5),f=Math.min(1,(1-n[c*2]*1.25)*.7+(1-s[c*2]*1.3)*.3),m=1-Math.min(1,a[c*2]*1.6);o[c*4]=Math.round(Math.max(0,d)*255),o[c*4+1]=Math.round(Math.max(0,f)*255),o[c*4+2]=Math.round(Math.max(0,m)*255),o[c*4+3]=255}let h=new Ni(o,t,t,de,je);return h.wrapS=h.wrapT=ti,h.minFilter=Ye,h.magFilter=ee,h.generateMipmaps=!0,h.anisotropy=8,h.needsUpdate=!0,h}var $n=`
#define NW ${ye}
#define NB ${mi}
uniform vec4 uWaveA[NW];   // dir.x, dir.z, k, amplitude
uniform vec4 uWaveB[NW];   // phase(t), steepness, wavelength, -
uniform vec4 uBrkA[NB];    // origin.xz, dir.xz
uniform vec4 uBrkB[NB];    // crest s, height, front scale, back scale
uniform vec4 uBrkC[NB];    // lateral width, curl, breaking, turbulence
`,ts=`
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
`,Za=`
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
`,Fd=`
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
`;var Dd=`
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
`,Dv=`
const float PI = 3.14159265359;
vec3 equirectToDir(vec2 uv) {
  float phi = (uv.x - 0.5) * 2.0 * PI;
  float lat = (uv.y - 0.5) * PI;
  return vec3(cos(lat) * cos(phi), sin(lat), cos(lat) * sin(phi));
}
`,kd=`
vec2 dirToEquirect(vec3 d) {
  return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5);
}
`,Ja=class{constructor(t,e=512){this.renderer=t;let i={uNoise:at.uNoise,uTime:at.uTime,uStorm:at.uStorm,uWindDir:at.uWindDir,uGlowDir:at.uGlowDir,uFlash:at.uFlash,uFlashDir:at.uFlashDir,uFlashColor:at.uFlashColor,uFlashSheet:at.uFlashSheet};this.domeMat=new se({uniforms:i,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = position;
          vec4 p = projectionMatrix * viewMatrix * vec4(position * 9000.0 + cameraPosition, 1.0);
          gl_Position = p.xyww;   // always at the far plane
        }`,fragmentShader:`
        varying vec3 vDir;
        ${Dd}
        void main() { gl_FragColor = vec4(stormSky(normalize(vDir), 1), 1.0); }`,side:Xe,depthWrite:!1,depthTest:!0,fog:!1}),this.dome=new pt(new Oa(1,5),this.domeMat),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,this.envRT=new _e(e,e/2,{type:at.hdrType,format:de,depthBuffer:!1,minFilter:Ye,magFilter:ee,generateMipmaps:!0}),this.envRT.texture.wrapS=ti,this.envRT.texture.wrapT=ai,this.envMat=new se({uniforms:i,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        varying vec2 vUv;
        ${Dd}
        ${Dv}
        void main() { gl_FragColor = vec4(stormSky(equirectToDir(vUv), 0), 1.0); }`,depthTest:!1,depthWrite:!1}),this.envScene=new Ri,this.envQuad=new pt(new Mi(2,2),this.envMat),this.envQuad.frustumCulled=!1,this.envScene.add(this.envQuad),this.envCam=new fi(-1,1,1,-1,0,1),at.uSkyEnv.value=this.envRT.texture}updateEnv(){let t=this.renderer,e=t.getRenderTarget();t.setRenderTarget(this.envRT),t.render(this.envScene,this.envCam),t.setRenderTarget(e)}dispose(){this.envRT.dispose(),this.domeMat.dispose(),this.envMat.dispose(),this.dome.geometry.dispose()}};var kv=`
attribute float aSpacing;
uniform vec2 uCenter;
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${$n}
${Za}
${ts}
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
`,zv=`
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
uniform vec4 uWash;           // rotor wash: x, z, radius, strength
uniform mat4 uBoatInv;        // world -> boat model space
uniform float uBoatOn;
uniform float uBoatFoam;      // how hard the hull is working the water (0 at rest in still water)
${Ys}
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${$n}
${Fd}
${ts}
${kd}
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
    float reachB = 0.10 + 0.60 * uBoatFoam;
    // torn, not painted: the edge is broken up by the same lace as the rest of the sea's foam and comes and goes
    float laceB = texture(uFoamTex, vX0 * 0.33 + vec2(uTime * 0.021, -uTime * 0.013)).r * 0.6 + texture(uFoamTex, vX0 * 1.1 + 0.4).g * 0.4;
    boatF = uBoatFoam * 1.0 * (1.0 - smoothstep(0.0, reachB, dOut)) * step(-0.3, dOut) * smoothstep(0.26, 0.95, laceB) * (1.0 - smoothstep(0.6, 1.4, abs(bl.y - 0.3)));
  }
  float foam = max(max(max(max(fJ, bFoam), acc), max(max(streak * 0.30, self), washFoam)), boatF);
  vec3 ft1 = texture(uFoamTex, fu).rgb;
  vec3 ft2 = texture(uFoamTex, fu * 3.3 + 0.37).rgb;
  float pat = ft1.r * 0.50 + ft2.r * 0.28 + ft1.g * 0.34 + ft2.b * 0.20;
  float fa = smoothstep(1.02 - foam * 1.12, 1.34 - foam * 1.12, pat + foam * 0.22);
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
    body += (uDeepColor * 0.95 + uScatterColor * 0.26 + vec3(0.018, 0.021, 0.024)) * ${gn} * spot * (0.22 + 0.78 * snl * snl)
          + ${gn} * spot * 0.020 * (0.3 + 0.7 * snl);

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
      col += ${gn} * spot * min(Ds, 60.0) * fss * 0.55;
    }
    vec3 foamCol = vec3(0.80, 0.85, 0.87) * foamShade * (amb * (2.4 + 0.8 * N.y) + flashL * flashWrap * 0.8 + ${gn} * spot * (0.55 + 1.05 * snl));
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
  gl_FragColor = vec4(col, 1.0);
}
`;function Uv(r,t,e,i){let n=r*t,s=new Float32Array(n*3),a=new Float32Array(n);for(let l=0;l<r;l++){let u=e*(Math.exp(i*l)-1)/i,d=e*Math.exp(i*l),f=Math.PI*2*u/t,m=Math.max(d,f);for(let b=0;b<t;b++){let g=b/t*Math.PI*2,p=(l*t+b)*3;s[p]=Math.cos(g)*u,s[p+1]=0,s[p+2]=Math.sin(g)*u,a[l*t+b]=m}}let o=new Uint32Array((r-1)*t*6),h=0;for(let l=0;l<r-1;l++)for(let u=0;u<t;u++){let d=l*t+u,f=l*t+(u+1)%t,m=(l+1)*t+u,b=(l+1)*t+(u+1)%t;o[h++]=d,o[h++]=f,o[h++]=m,o[h++]=f,o[h++]=b,o[h++]=m}let c=new le;return c.setAttribute("position",new Wt(s,3)),c.setAttribute("aSpacing",new Wt(a,1)),c.setIndex(new Wt(o,1)),c}var $a=class{constructor(t,e){this.waves=t,this.uniforms={uWaveA:at.uWaveA,uWaveB:at.uWaveB,uBrkA:at.uBrkA,uBrkB:at.uBrkB,uBrkC:at.uBrkC,uSkyEnv:at.uSkyEnv,uDetailN:at.uDetailN,uFoamTex:at.uFoamTex,uNoise:at.uNoise,uTime:at.uTime,uStorm:at.uStorm,uRain:at.uRain,uWindDir:at.uWindDir,uAmbient:at.uAmbient,uFlash:at.uFlash,uFlashDir:at.uFlashDir,uFlashColor:at.uFlashColor,uFogDensity:at.uFogDensity,uResolution:at.uResolution,uCenter:{value:new ft},uDeepColor:{value:new w(.02,.062,.105)},uScatterColor:{value:new w(.13,.27,.305)},uDetailScroll:{value:new ie},uDetailScroll3:{value:new ft},uDetailStrength:{value:.5},uSigH:{value:10},uSceneColor:{value:null},uSceneDepth:{value:null},uNearFar:{value:new ft(.08,3e4)},uFoamAcc:{value:null},uFoamAccRect:{value:new ie(0,0,1,0)},uPlayerPos:{value:new w(0,-1e3,0)},uPlayerFoam:{value:0},uBoatInv:{value:new Pt},uBoatOn:{value:0},uBoatFoam:{value:0},uSpotPos:at.uSpotPos,uSpotDir:at.uSpotDir,uSpotP:at.uSpotP,uWash:at.uWash},this.material=new se({uniforms:this.uniforms,vertexShader:kv,fragmentShader:zv,side:Fe,defines:{}}),this.mesh=new pt(new le,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,this.applyProfile(e)}applyProfile(t){this.mesh.geometry.dispose();let e=Math.log(14e3*.0128/t.oceanStep+1)/t.oceanRings*1;this.mesh.geometry=Uv(t.oceanRings,t.oceanSegs,t.oceanStep,this._solveG(t.oceanRings,t.oceanStep,14e3,e));let i={};t.refraction&&(i.USE_REFRACTION=1),t.foamAcc&&(i.USE_FOAM_ACC=1),t.ripples&&(i.USE_RIPPLES=1),this.material.defines=i,this.material.needsUpdate=!0}_solveG(t,e,i,n){let s=Math.max(n,.004);for(let a=0;a<40;a++){let o=Math.exp(s*t),h=e*(o-1)/s-i,c=e*(t*o*s-(o-1))/(s*s);s-=h/c,s<.001&&(s=.001)}return s}update(t,e,i){let n=this.uniforms;n.uCenter.value.set(t.position.x,t.position.z),n.uSigH.value=this.waves.sigHeight;let s=at.uWindDir.value.x,a=at.uWindDir.value.y,o=.6+.4*at.uStorm.value;n.uDetailScroll.value.x+=s*1.9*.047*o*e,n.uDetailScroll.value.y+=a*1.9*.047*o*e,n.uDetailScroll.value.z+=a*1.1*.19*o*e+.011*e,n.uDetailScroll.value.w+=-s*1.1*.19*o*e,n.uDetailScroll3.value.x+=(s*.75-a*.2)*.83*o*e,n.uDetailScroll3.value.y+=(a*.75+s*.2)*.83*o*e,n.uDetailStrength.value=.3+.34*at.uStorm.value,n.uNearFar.value.set(t.near,t.far)}};var Nv=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tPrev;
uniform vec2 uCenter; uniform vec2 uPrevCenter; uniform float uSize; uniform float uDt; uniform float uStorm; uniform float uTexel;
uniform vec3 uPlayer; uniform float uPlayerFoam;
uniform vec4 uBoat; uniform float uBoatFoam;      // boat centre x,z and the direction of its length; how much it is churning
uniform vec4 uSplash[4];      // x, z, ring radius, strength
${$n}
${ts}
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
  src = max(src, uPlayerFoam * exp(-pd * pd / 0.45));
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
      src = max(src, sp.w * 0.5 * (exp(-pow((d - sp.z) / 0.24, 2.0)) + 0.2 * exp(-d * d / (0.5 * sp.z * sp.z + 0.05))));
    }
  }
  vec2 puv = vUv + (uCenter - uPrevCenter) / uSize;
  float prev = 0.0;
  if (puv.x > 0.0 && puv.x < 1.0 && puv.y > 0.0 && puv.y < 1.0) prev = texture(tPrev, puv).r;
  // slow exponential decay plus a constant erosion so thin foam breaks up into lace and disappears
  prev = max(0.0, prev * exp(-uDt / 9.0) - uDt * 0.018);
  gl_FragColor = vec4(max(src, prev), 0.0, 0.0, 1.0);
}`,to=class{constructor(t,e=1024,i=340){if(this.renderer=t,this.size=e,this.world=i,this.enabled=e>0,!this.enabled)return;let n={type:at.hdrType,format:de,depthBuffer:!1,minFilter:ee,magFilter:ee};this.rt=[new _e(e,e,n),new _e(e,e,n)],this.idx=0,this.center=new ft,this.prevCenter=new ft,this.u={tPrev:{value:null},uCenter:{value:this.center},uPrevCenter:{value:this.prevCenter},uSize:{value:i},uDt:{value:.016},uStorm:at.uStorm,uTexel:{value:i/e},uPlayer:{value:new w},uPlayerFoam:{value:0},uSplash:{value:new Float32Array(16)},uBoat:{value:new ie(0,0,0,1)},uBoatFoam:{value:0},uWaveA:at.uWaveA,uWaveB:at.uWaveB,uBrkA:at.uBrkA,uBrkB:at.uBrkB,uBrkC:at.uBrkC},this.mat=new se({uniforms:this.u,fragmentShader:Nv,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"}),this.scene=new Ri,this.quad=new pt(new Mi(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.cam=new fi(-1,1,1,-1,0,1),this.first=!0,this.splashes=[0,1,2,3].map(()=>({x:0,z:0,s:0,age:9})),this.nextSplash=0}addSplash(t,e,i){if(!this.enabled)return;let n=this.splashes[this.nextSplash];this.nextSplash=(this.nextSplash+1)%4,n.x=t,n.z=e,n.s=Math.min(1,i),n.age=0}update(t,e,i,n,s,a){if(!this.enabled){a.uFoamAccRect.value.w=0;return}let o=this.world/this.size,h=Math.round(e/o)*o,c=Math.round(i/o)*o;this.prevCenter.copy(this.first?new ft(h,c):this.center),this.center.set(h,c);let l=this.rt[this.idx],u=this.rt[1-this.idx];this.u.tPrev.value=l.texture,this.u.uDt.value=t,this.u.uPlayer.value.copy(n),this.u.uPlayerFoam.value=s;let d=this.u.uSplash.value;for(let b=0;b<4;b++){let g=this.splashes[b];g.age+=t;let p=g.age<1.3;d[b*4]=g.x,d[b*4+1]=g.z,d[b*4+2]=.25+1.5*g.age*(.6+.6*g.s),d[b*4+3]=p?g.s*Math.exp(-g.age*2):0}let f=this.renderer,m=f.getRenderTarget();f.setRenderTarget(u),f.render(this.scene,this.cam),f.setRenderTarget(m),this.idx=1-this.idx,this.first=!1,a.uFoamAcc.value=u.texture,a.uFoamAccRect.value.set(h,c,this.world,1)}};var eo=class{constructor(t,e,i,n,s=4242){this.waves=t,this.body=e,this.player=i,this.spray=n,this.rnd=oi(s),this.auto=!0,this.next=24,this.megaNext=85+this.rnd()*40,this.threat=0,this.crestDist=1e9,this.crestHeight=0,this.crestDx=0,this.crestDz=0,this.whiteout=0,this.onImpact=null,this.onSplash=null,this._splashCool=0}launch(t={}){let e=this.rnd,i=this.body,n=this.waves.storm;return this.waves.spawnBreaker(i.pos.x+i.vel.x*2,i.pos.z+i.vel.z*2,{lead:t.lead!==void 0?t.lead:13+e()*5,height:t.height!==void 0?t.height:lt(6.5,14.5,n)*(.8+.45*e()),width:t.width!==void 0?t.width:110+e()*90,speed:t.speed!==void 0?t.speed:12.5+e()*3.5,breakOffset:t.breakOffset!==void 0?t.breakOffset:-2+e()*2.3,angleOffset:t.angleOffset!==void 0?t.angleOffset:(e()-.5)*.5,frontMin:t.frontMin,back:t.back})}launchMega(t={}){let e=this.rnd,i=this.body;return this.waves.spawnBreaker(i.pos.x,i.pos.z,{mega:!0,lead:t.lead!==void 0?t.lead:19,height:t.height!==void 0?t.height:30+8*e(),width:520,speed:t.speed||24,breakOffset:t.breakOffset!==void 0?t.breakOffset:-.5,angleOffset:(e()-.5)*.2,frontMin:26,back:120})}update(t,e,i,n){let s=this.waves,a=this.body;if(this.auto){this.megaNext-=t;let f=s.breakers.some(m=>m.active&&m.mega);this.megaNext<=0&&s.storm>.6&&!s.breakers.some(m=>m.active)&&(this.launchMega(),this.megaNext=150+this.rnd()*100),this.next-=t,this.next<=0&&(s.storm>.3&&!f&&this.megaNext>14&&this.launch(),this.next=lt(75,24,s.storm)*(.65+.8*this.rnd()))}let o=0,h=1e9,c=0;for(let f of s.breakers){if(!f.active)continue;let m=a.pos.x-f.ox,b=a.pos.z-f.oz,g=m*f.dx+b*f.dz-f.s,p=-m*f.dz+b*f.dx,x=Math.exp(-(p*p)/(f.width*f.width));g>-10&&g<h&&(h=g,c=f.height*x,this.crestDx=f.dx,this.crestDz=f.dz);let v=mt(1-Math.abs(g)/(f.mega?320:120));o=Math.max(o,v*mt(f.height*x/9))}this.threat+=(o-this.threat)*(1-Math.exp(-t*2.5)),this.crestDist=h,this.crestHeight=c;let l=s.sample(e.x,e.z,this._s||(this._s={h:0})),u=Math.max(l.aer,(l.lip||0)*1.1)*mt(1-(e.y-l.h)/7)*(1-i);this.whiteout+=(Math.min(.93,u*1.6)-this.whiteout)*(1-Math.exp(-t*(u>this.whiteout?14:2.5)));let d=this.player.events;for(let f=0;f<d.length;f++){let m=d[f];m.type==="impact"&&(this.spray.burst(a.pos.x,a.surfaceH+.2,a.pos.z,m.strength*2.2,n,m.dir.x,m.dir.z),this.onImpact&&this.onImpact(m))}d.length=0,this._splashCool-=t,a.splash>3&&this._splashCool<=0&&(this._splashCool=.6,this.spray.burst(a.splashPos.x,a.splashPos.y,a.splashPos.z,Math.min(3.5,(a.splash-2.4)*.9),n),this.onSplash&&this.onSplash(a.splash,a.splashPos))}};var _c={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ft(1/1024,1/512)}},vertexShader:`

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
	`};var Ov="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Bv=`
varying vec2 vUv; uniform sampler2D tScene; uniform float uThreshold; uniform float uKnee;
void main(){
  vec3 c = textureLod(tScene, vUv, 1.0).rgb;
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-5);
  float w = max(soft, br - uThreshold) / max(br, 1e-5);
  gl_FragColor = vec4(min(c * w, vec3(40.0)), 1.0);
}`,Hv=`
varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 a = texture(tSrc, vUv + t * vec2(-1.0, -1.0)).rgb, b = texture(tSrc, vUv + t * vec2(1.0, -1.0)).rgb;
  vec3 c = texture(tSrc, vUv + t * vec2(-1.0, 1.0)).rgb, d = texture(tSrc, vUv + t * vec2(1.0, 1.0)).rgb;
  vec3 e = texture(tSrc, vUv).rgb;
  gl_FragColor = vec4((a + b + c + d) * 0.2 + e * 0.2, 1.0);
}`,Vv=`
varying vec2 vUv; uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 s = texture(tSrc, vUv + t * vec2(-1.0, 0.0)).rgb + texture(tSrc, vUv + t * vec2(1.0, 0.0)).rgb
         + texture(tSrc, vUv + t * vec2(0.0, -1.0)).rgb + texture(tSrc, vUv + t * vec2(0.0, 1.0)).rgb;
  s = s * 0.125 + texture(tSrc, vUv).rgb * 0.5;
  gl_FragColor = vec4(s + texture(tAdd, vUv).rgb, 1.0);
}`,Gv=`
varying vec2 vUv; uniform sampler2D tScene; uniform sampler2D tPrev; uniform float uDt; uniform float uReset;
void main(){
  vec3 c = textureLod(tScene, vec2(0.5), 20.0).rgb;
  float lum = max(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
  float prev = texture(tPrev, vec2(0.5)).r;
  // eyes close fast when it gets bright, open slowly in the dark
  float k = lum > prev ? 1.0 - exp(-uDt * 7.0) : 1.0 - exp(-uDt * 1.1);
  float v = mix(prev, lum, k);
  if (uReset > 0.5 || !(prev > 0.0)) v = lum;
  gl_FragColor = vec4(v, v, v, 1.0);
}`,Wv=`
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
}`,io=class{constructor(t){this.renderer=t,this.fsScene=new Ri,this.fsCam=new fi(-1,1,1,-1,0,1),this.fsQuad=new pt(new Mi(2,2),null),this.fsQuad.frustumCulled=!1,this.fsScene.add(this.fsQuad),this.w=2,this.h=2,this.levels=5,this.useOpaque=!0;let e=(s,a)=>new se({uniforms:a,vertexShader:Ov,fragmentShader:s,depthTest:!1,depthWrite:!1});this.matPre=e(Bv,{tScene:{value:null},uThreshold:{value:.16},uKnee:{value:.12}}),this.matDown=e(Hv,{tSrc:{value:null},uTexel:{value:new ft}}),this.matUp=e(Vv,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new ft}}),this.matAdapt=e(Gv,{tScene:{value:null},tPrev:{value:null},uDt:{value:.016},uReset:{value:1}}),this.u={tScene:{value:null},tDepth:{value:null},tBloom:{value:null},tAdapt:{value:null},tLens:{value:null},uNoise:at.uNoise,uResolution:{value:new ft},uNearFar:{value:new ft(.08,3e4)},uTime:{value:0},uCamPos:{value:new w},uCamRight:{value:new w},uCamUp:{value:new w},uCamFwd:{value:new w},uTanFov:{value:new ft},uPrevViewProj:{value:new Pt},uMotionBlur:{value:0},uBloom:{value:.55},uExposureKey:{value:.125},uExposureRange:{value:new ft(.5,7)},uExposureBias:{value:1},uWaterPlane:{value:new ie(0,1,0,0)},uUnderAmount:{value:0},uUnderColor:{value:new w(.004,.012,.018)},uUnderExt:{value:new w(.42,.2,.16)},uAeration:{value:0},uUnderDistort:{value:.012},uShaftDir:{value:new w(0,1,0)},uShaft:{value:0},uLensStrength:{value:.05},uSheet:{value:0},uBlur:{value:0},uDofFocus:{value:10},uDofAmount:{value:0},uVignette:{value:.42},uGrain:{value:.028},uTunnel:{value:0},uDesat:{value:0},uFade:{value:0},uWhiteout:{value:0},uGradeMix:{value:1}},this.matComposite=e(Wv,this.u),this.matFXAA=new se({uniforms:{tDiffuse:{value:null},resolution:{value:new ft}},vertexShader:_c.vertexShader,fragmentShader:_c.fragmentShader,depthTest:!1,depthWrite:!1}),this.matCopy=e("varying vec2 vUv; uniform sampler2D tSrc; void main(){ gl_FragColor = texture(tSrc, vUv); }",{tSrc:{value:null}});let i=new Ni(new Uint8Array([0,0,0,0]),1,1);i.needsUpdate=!0,this.blankLens=i,this.u.tLens.value=i,this.rtScene=null,this.rtOpaque=null,this.rtLDR=null,this.down=[],this.up=[];let n={type:at.hdrType,format:de,depthBuffer:!1,minFilter:Re,magFilter:Re};this.adapt=[new _e(1,1,n),new _e(1,1,n)],this.adaptIdx=0,this.adaptReset=!0,this.fxaa=!0,this.prevViewProj=new Pt,this._vp=new Pt}setSize(t,e,i){if(t=Math.max(2,Math.floor(t)),e=Math.max(2,Math.floor(e)),!i&&t===this.w&&e===this.h&&this.rtScene)return;this.w=t,this.h=e,(h=>h.forEach(c=>c&&c.dispose()))([this.rtScene,this.rtOpaque,this.rtLDR,...this.down,...this.up]);let s={type:at.hdrType,format:de,magFilter:ee};this.rtScene=new _e(t,e,{...s,minFilter:Ye,generateMipmaps:!0,depthBuffer:!0}),this.rtScene.depthTexture=new Yn(t,e),this.rtOpaque=new _e(t,e,{...s,minFilter:ee,depthBuffer:!0}),this.rtOpaque.depthTexture=new Yn(t,e),this.rtLDR=new _e(t,e,{type:je,format:de,minFilter:ee,magFilter:ee,depthBuffer:!1}),this.down=[],this.up=[];let a=t>>1,o=e>>1;for(let h=0;h<this.levels;h++){a=Math.max(2,a),o=Math.max(2,o);let c={...s,minFilter:ee,depthBuffer:!1};this.down.push(new _e(a,o,c)),h<this.levels-1&&this.up.push(new _e(a,o,c)),a>>=1,o>>=1}at.uResolution.value.set(t,e),this.adaptReset=!0}_pass(t,e){this.fsQuad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.fsScene,this.fsCam)}render(t,e,i,n){let s=this.renderer,a=this.u;this.useOpaque&&t(this.rtOpaque,!0),t(this.rtScene,!1),this.matPre.uniforms.tScene.value=this.rtScene.texture,this._pass(this.matPre,this.down[0]);for(let d=1;d<this.levels;d++)this.matDown.uniforms.tSrc.value=this.down[d-1].texture,this.matDown.uniforms.uTexel.value.set(1/this.down[d-1].width,1/this.down[d-1].height),this._pass(this.matDown,this.down[d]);let o=this.down[this.levels-1];for(let d=this.levels-2;d>=0;d--)this.matUp.uniforms.tSrc.value=o.texture,this.matUp.uniforms.tAdd.value=this.down[d].texture,this.matUp.uniforms.uTexel.value.set(1/o.width,1/o.height),this._pass(this.matUp,this.up[d]),o=this.up[d];let h=this.adapt[this.adaptIdx],c=this.adapt[1-this.adaptIdx];this.matAdapt.uniforms.tScene.value=this.rtScene.texture,this.matAdapt.uniforms.tPrev.value=h.texture,this.matAdapt.uniforms.uDt.value=i,this.matAdapt.uniforms.uReset.value=this.adaptReset?1:0,this._pass(this.matAdapt,c),this.adaptIdx=1-this.adaptIdx,this.adaptReset=!1,a.tScene.value=this.rtScene.texture,a.tDepth.value=this.rtScene.depthTexture,a.tBloom.value=o.texture,a.tAdapt.value=c.texture,a.uResolution.value.set(this.w,this.h),a.uNearFar.value.set(e.near,e.far),a.uTime.value=n;let l=e.matrixWorld.elements;a.uCamRight.value.set(l[0],l[1],l[2]),a.uCamUp.value.set(l[4],l[5],l[6]),a.uCamFwd.value.set(-l[8],-l[9],-l[10]),a.uCamPos.value.copy(e.position);let u=Math.tan(Ln.degToRad(e.fov)*.5);a.uTanFov.value.set(u*e.aspect,u),a.uPrevViewProj.value.copy(this.prevViewProj),this._vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.prevViewProj.copy(this._vp),this.fxaa?(this._pass(this.matComposite,this.rtLDR),this.matFXAA.uniforms.tDiffuse.value=this.rtLDR.texture,this.matFXAA.uniforms.resolution.value.set(1/this.w,1/this.h),this._pass(this.matFXAA,null)):this._pass(this.matComposite,null)}};var qv=`
attribute vec4 aDrop;       // x, y (0..1), radius (in screen heights), strength
uniform float uAspect;
varying vec2 vP; varying float vS;
void main() {
  vP = position.xy; vS = aDrop.w;
  vec2 c = aDrop.xy * 2.0 - 1.0;
  gl_Position = vec4(c + position.xy * vec2(aDrop.z / uAspect, aDrop.z) * 2.0 * vec2(1.0, 1.18), 0.0, 1.0);
}`,Xv=`
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
}`,no=class{constructor(t,e=120){this.renderer=t,this.max=e,this.rt=new _e(640,360,{type:at.hdrType,format:de,depthBuffer:!1,minFilter:ee,magFilter:ee}),this.x=new Float32Array(e),this.y=new Float32Array(e),this.r=new Float32Array(e),this.vy=new Float32Array(e),this.vx=new Float32Array(e),this.life=new Float32Array(e),this.wait=new Float32Array(e),this.head=0,this.rainAcc=0,this.count=0,this.trail=new Float32Array(e);let i=new Ki;i.setAttribute("position",new Wt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),this.aDrop=new Qe(new Float32Array(e*4),4),this.aDrop.setUsage(Bi),i.setAttribute("aDrop",this.aDrop),i.instanceCount=0,this.dropMat=new se({uniforms:{uAspect:{value:16/9}},vertexShader:qv,fragmentShader:Xv,transparent:!0,depthTest:!1,depthWrite:!1,blending:Sn}),this.drops=new pt(i,this.dropMat),this.drops.frustumCulled=!1,this.fadeMat=new se({uniforms:{uK:{value:.95}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform float uK; void main(){ gl_FragColor = vec4(uK); }",transparent:!0,depthTest:!1,depthWrite:!1,blending:cc,blendEquation:on,blendSrc:qa,blendDst:lc,blendSrcAlpha:qa,blendDstAlpha:vr}),this.fade=new pt(new Mi(2,2),this.fadeMat),this.fade.frustumCulled=!1,this.scene=new Ri,this.scene.add(this.fade,this.drops),this.fade.renderOrder=0,this.drops.renderOrder=1,this.cam=new fi(-1,1,1,-1,0,1),this.needClear=!0,this.sheet=0}get texture(){return this.rt.texture}spawn(t,e=0){for(let i=0;i<t;i++){let n=this.head;this.head=(this.head+1)%this.max,this.x[n]=Math.random(),this.y[n]=Math.pow(Math.random(),.8);let s=Math.random()<.14+.26*e;this.r[n]=s?.011+Math.random()*.015:.003+Math.random()*.008,this.vy[n]=0,this.vx[n]=0,this.wait[n]=s?Math.random()*1.6:1e9,this.life[n]=s?5.5:1.8+Math.random()*3.2}}wipe(){this.life.fill(0),this.needClear=!0,this.sheet=0}update(t,e,i,n){if(i)(this.count>0||!this.needClear)&&this.wipe();else{this.rainAcc+=t*e;let l=Math.floor(this.rainAcc);this.rainAcc-=l,l>0&&this.spawn(Math.min(l,6))}this.sheet=Math.max(0,this.sheet-t*1);let s=this.aDrop.array,a=0;for(let l=0;l<this.max;l++){if(this.life[l]<=0)continue;if(this.life[l]-=t,this.wait[l]<1e8&&(this.wait[l]-=t,this.wait[l]<=0)){if(this.vy[l]=Math.min(.2,this.vy[l]+t*(.12+4*this.r[l])),Math.random()<t*.8&&(this.vy[l]*=.2,this.wait[l]=Math.random()*.5),this.vx[l]+=(Math.random()-.5)*t*.5,this.vx[l]*=Math.exp(-t*4),this.y[l]-=this.vy[l]*t,this.x[l]+=this.vx[l]*t,this.trail[l]+=this.vy[l]*t,this.trail[l]>.035+this.r[l]){this.trail[l]=0;let f=this.head;this.head=(this.head+1)%this.max,f!==l&&this.life[f]<=0&&(this.x[f]=this.x[l]+(Math.random()-.5)*.004,this.y[f]=this.y[l]+this.r[l]*1.2,this.r[f]=.0035+Math.random()*.003,this.vy[f]=0,this.vx[f]=0,this.wait[f]=1e9,this.life[f]=.9+Math.random()*1.2,this.trail[f]=0)}if(this.r[l]-=t*.0012,this.y[l]<-.06||this.r[l]<.004){this.life[l]=0;continue}}let u=Math.min(1,this.life[l]/.8),d=a*4;s[d]=this.x[l],s[d+1]=this.y[l],s[d+2]=this.r[l]*(.6+.4*u),s[d+3]=u,a++}this.count=a,this.drops.geometry.instanceCount=a,this.aDrop.needsUpdate=!0,this.dropMat.uniforms.uAspect.value=n,this.fadeMat.uniforms.uK.value=Math.exp(-t*22);let o=this.renderer,h=o.getRenderTarget(),c=o.autoClear;o.setRenderTarget(this.rt),this.needClear&&(o.setClearColor(0,0),o.clear(),this.needClear=!1),o.autoClear=!1,o.render(this.scene,this.cam),o.autoClear=c,o.setRenderTarget(h)}};var Ks={cinematic:{key:"cinematic",label:"CINEMATIC",oceanRings:512,oceanSegs:512,oceanStep:.28,envSize:512,maxPixels:3686400,minScale:.6,refraction:!0,foamAcc:1024,ripples:!0,motionBlur:!0,fxaa:!0,bloomLevels:5,rain:26e3,splashes:2600,spray:9e3,bubbles:1400,motes:2600,lensRes:.5,lensDrops:150},high:{key:"high",label:"HIGH",oceanRings:384,oceanSegs:384,oceanStep:.36,envSize:256,maxPixels:2073600,minScale:.55,refraction:!0,foamAcc:512,ripples:!0,motionBlur:!1,fxaa:!0,bloomLevels:5,rain:15e3,splashes:1500,spray:5e3,bubbles:900,motes:1500,lensRes:.5,lensDrops:100},performance:{key:"performance",label:"PERFORMANCE",oceanRings:256,oceanSegs:256,oceanStep:.5,envSize:128,maxPixels:921600,minScale:.5,refraction:!1,foamAcc:0,ripples:!1,motionBlur:!1,fxaa:!1,bloomLevels:4,rain:6e3,splashes:500,spray:2e3,bubbles:400,motes:600,lensRes:.35,lensDrops:60}},so=class{constructor(t){this.renderer=t,this.profile=Ks.cinematic,this.scale=1,this.frameMs=16.7,this.fps=60,this._acc=0,this._slow=0,this._fast=0,this.adaptive=!0,this.info=this.detect()}detect(){let t=this.renderer.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),i=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown",n=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),s=/SwiftShader|llvmpipe|Software|Basic Render/i.test(i),a=/Intel\(R\) (U?HD|Iris)(?! Xe)|Mali|Adreno|PowerVR/i.test(i);return{webgl2:this.renderer.capabilities.isWebGL2,webgpu:typeof navigator<"u"&&!!navigator.gpu,halfFloat:!!t.getExtension("EXT_color_buffer_float")||!!t.getExtension("EXT_color_buffer_half_float"),gpu:i,mobile:n,software:s,weak:a}}pickDefault(){let t=this.info;return t.software||t.mobile?"performance":t.weak?"high":"cinematic"}setProfile(t){this.profile=Ks[t]||Ks.cinematic,this.scale=1,this._slow=this._fast=0}renderSize(t,e){let i=this.profile.maxPixels,n=Math.min(1,Math.sqrt(i/Math.max(1,t*e)));return n*=this.scale,[Math.max(320,Math.round(t*n)),Math.max(180,Math.round(e*n))]}update(t){let e=t*1e3;return this.frameMs+=(e-this.frameMs)*.06,this.fps=1e3/this.frameMs,this.adaptive?(this.frameMs>21.5?(this._slow+=t,this._fast=0):this.frameMs<13.5?(this._fast+=t,this._slow=0):(this._slow*=.9,this._fast*=.9),this._slow>1.5&&this.scale>this.profile.minScale?(this.scale=Math.max(this.profile.minScale,this.scale-.08),this._slow=0,!0):this._fast>6&&this.scale<1?(this.scale=Math.min(1,this.scale+.05),this._fast=0,!0):!1):!1}};var hi=[["hips",-1,0,0,0],["spine",0,0,.12,0],["chest",1,0,.3,0],["neck",2,0,.525,0],["head",3,0,.625,.012],["upperArmL",2,.178,.455,0],["foreArmL",5,.236,.172,.006],["handL",6,.286,-.078,.032],["upperArmR",2,-.178,.455,0],["foreArmR",8,-.236,.172,.006],["handR",9,-.286,-.078,.032],["thighL",0,.096,-.07,0],["shinL",11,.106,-.505,.006],["footL",12,.106,-.925,-.016],["thighR",0,-.096,-.07,0],["shinR",14,-.106,-.505,.006],["footR",15,-.106,-.925,-.016]],A={};hi.forEach((r,t)=>{A[r[0]]=t});var jv=new w(0,.082,.088),jt={jacket:[.72,.15,.04],jacketDark:[.42,.085,.028],tape:[.85,.87,.84],pants:[.045,.055,.08],shoe:[.022,.022,.024],skin:[.62,.43,.34],skinDark:[.46,.29,.22],hair:[.03,.024,.02],lip:[.36,.16,.14],eye:[.05,.035,.03]},ro=class{constructor(){this.pos=[],this.col=[],this.si=[],this.sw=[],this.idx=[],this.n=0}vert(t,e,i){this.pos.push(t.x,t.y,t.z),this.col.push(e[0],e[1],e[2]);let n=[0,0,0,0],s=[0,0,0,0],a=0;for(let o=0;o<i.length&&o<4;o++)n[o]=i[o][0],s[o]=i[o][1],a+=i[o][1];for(let o=0;o<4;o++)s[o]/=a||1;return this.si.push(...n),this.sw.push(...s),this.n++}tube(t,e,i=!0,n=!0){let s=new w,a=new w,o=new w,h=new w,c=new w(0,0,1),l=new w(0,1,0),u=[];for(let f=0;f<t.length;f++){let m=t[Math.max(0,f-1)].c,b=t[Math.min(t.length-1,f+1)].c;s.subVectors(b,m).normalize(),t[f].ax?a.copy(t[f].ax):(a.crossVectors(s,c),a.lengthSq()<.04&&a.crossVectors(s,l),a.normalize()),o.crossVectors(a,s).normalize();let g=this.n;for(let p=0;p<e;p++){let x=p/e*Math.PI*2,v=Math.cos(x),M=Math.sin(x),R=t[f].rx,y=t[f].rz;if(t[f].shape){let T=t[f].shape(x,v,M);R*=T,y*=T}h.copy(t[f].c).addScaledVector(a,v*R).addScaledVector(o,M*y);let E=typeof t[f].col=="function"?t[f].col(x,h):t[f].col;this.vert(h,E,t[f].w)}u.push(g)}for(let f=0;f<u.length-1;f++)for(let m=0;m<e;m++){let b=u[f]+m,g=u[f]+(m+1)%e,p=u[f+1]+m,x=u[f+1]+(m+1)%e;this.idx.push(b,p,g,g,p,x)}let d=(f,m,b)=>{let g=typeof m.col=="function"?m.col(0,m.c):m.col,p=this.vert(m.c,g,m.w);for(let x=0;x<e;x++){let v=f+x,M=f+(x+1)%e;b?this.idx.push(p,M,v):this.idx.push(p,v,M)}};i&&d(u[0],t[0],!0),n&&d(u[u.length-1],t[t.length-1],!1)}build(){let t=new le;return t.setAttribute("position",new re(this.pos,3)),t.setAttribute("color",new re(this.col,3)),t.setAttribute("skinIndex",new Ns(this.si,4)),t.setAttribute("skinWeight",new re(this.sw,4)),t.setIndex(this.idx),t.computeVertexNormals(),t}},Le=(r,t,e)=>new w(r,t,e),Hi=(r,t,e)=>new w().lerpVectors(r,t,e),zd=(r,t,e)=>{let i=Math.max(0,Math.min(1,(e-r)/(t-r)));return i*i*(3-2*i)};function Yv(){let r=new ro,t=18,e=s=>{let a=hi[A[s]];return Le(a[2],a[3],a[4])},i=[[-.135,.12,.095],[-.085,.165,.116],[-.02,.176,.12],[.05,.166,.114],[.11,.156,.108],[.17,.152,.106],[.24,.164,.114],[.31,.18,.124],[.385,.184,.128],[.445,.186,.118],[.488,.152,.1],[.52,.1,.086],[.552,.08,.08],[.58,.074,.076]],n=s=>{if(s<.02)return[[A.hips,1]];if(s<.14){let a=zd(.02,.14,s);return[[A.hips,1-a],[A.spine,a]]}if(s<.2)return[[A.spine,1]];if(s<.32){let a=zd(.2,.32,s);return[[A.spine,1-a],[A.chest,a]]}return[[A.chest,1]]};r.tube(i.map(([s,a,o])=>{let h=s>-.06,c=h?1.07:1;return{c:Le(0,s,h?.004:0),rx:a*c,rz:o*c,w:n(s),col:(l,u)=>h?s>.28&&s<.325?jt.tape:Math.abs(u.x)<.012&&u.z>0||s>.5?jt.jacketDark:jt.jacket:jt.pants}}),t),r.tube([{c:Le(0,.53,.002),rx:.063,rz:.066,col:jt.skin,w:[[A.chest,.6],[A.neck,.4]]},{c:Le(0,.575,.006),rx:.061,rz:.064,col:jt.skin,w:[[A.neck,1]]},{c:Le(0,.63,.012),rx:.06,rz:.063,col:jt.skin,w:[[A.neck,.5],[A.head,.5]]},{c:Le(0,.665,.016),rx:.057,rz:.06,col:jt.skin,w:[[A.head,1]]}],14);for(let s of[1,-1]){let a=s>0?A.upperArmL:A.upperArmR,o=s>0?A.foreArmL:A.foreArmR,h=s>0?A.handL:A.handR,c=e(s>0?"upperArmL":"upperArmR"),l=e(s>0?"foreArmL":"foreArmR"),u=e(s>0?"handL":"handR"),d=Le(u.x+s*.03,u.y-.182,u.z+.012),f=[];f.push({c:Le(c.x-s*.012,c.y+.052,0),rx:.036,rz:.04,col:jt.jacket,w:[[A.chest,.65],[a,.35]]}),f.push({c:Le(c.x+s*.004,c.y+.02,0),rx:.064,rz:.066,col:jt.jacket,w:[[A.chest,.4],[a,.6]]});let m=[[.12,.066],[.3,.062],[.52,.058],[.74,.054],[.9,.052]];for(let[x,v]of m){let M=x>.28&&x<.4;f.push({c:Hi(c,l,x),rx:v,rz:v*1.04,col:M?jt.tape:jt.jacket,w:x>.8?[[a,.75],[o,.25]]:[[a,1]]})}f.push({c:l.clone(),rx:.051,rz:.053,col:jt.jacket,w:[[a,.5],[o,.5]]});let b=[[.12,.052],[.32,.051],[.55,.046],[.78,.041],[.9,.04]];for(let[x,v]of b)f.push({c:Hi(l,u,x),rx:v,rz:v,col:x>.86?jt.jacketDark:jt.jacket,w:x<.2?[[a,.25],[o,.75]]:[[o,1]]});f.push({c:Hi(l,u,.955),rx:.027,rz:.031,col:jt.skin,w:[[o,1]]}),f.push({c:u.clone(),rx:.021,rz:.031,col:jt.skin,w:[[o,.5],[h,.5]]}),f.push({c:Hi(u,d,.3),rx:.017,rz:.044,col:jt.skin,w:[[h,1]]}),f.push({c:Hi(u,d,.55),rx:.015,rz:.046,col:jt.skin,w:[[h,1]]}),f.push({c:Hi(u,d,.8),rx:.012,rz:.04,col:jt.skinDark,w:[[h,1]]}),f.push({c:d.clone(),rx:.007,rz:.022,col:jt.skinDark,w:[[h,1]]}),r.tube(f,12);let g=Hi(u,d,.22).add(Le(0,0,.034)),p=Hi(u,d,.52).add(Le(s*.008,0,.066));r.tube([{c:g,rx:.012,rz:.013,col:jt.skin,w:[[h,1]]},{c:Hi(g,p,.6),rx:.011,rz:.011,col:jt.skin,w:[[h,1]]},{c:p,rx:.007,rz:.007,col:jt.skinDark,w:[[h,1]]}],7)}for(let s of[1,-1]){let a=s>0?A.thighL:A.thighR,o=s>0?A.shinL:A.shinR,h=s>0?A.footL:A.footR,c=e(s>0?"thighL":"thighR"),l=e(s>0?"shinL":"shinR"),u=e(s>0?"footL":"footR"),d=[];d.push({c:Le(c.x,c.y+.045,0),rx:.08,rz:.09,col:jt.pants,w:[[A.hips,.7],[a,.3]]});let f=[[.05,.094,.1],[.25,.09,.096],[.5,.079,.084],[.75,.067,.07],[.92,.06,.062]];for(let[g,p,x]of f)d.push({c:Hi(c,l,g),rx:p,rz:x,col:jt.pants,w:g<.15?[[A.hips,.4],[a,.6]]:g>.85?[[a,.75],[o,.25]]:[[a,1]]});d.push({c:l.clone(),rx:.058,rz:.061,col:jt.pants,w:[[a,.5],[o,.5]]});let m=[[.1,.056,.06],[.28,.057,.066],[.5,.05,.056],[.75,.042,.045],[.93,.038,.04]];for(let[g,p,x]of m)d.push({c:Hi(l,u,g).add(Le(0,0,g>.15&&g<.6?-.008:0)),rx:p,rz:x,col:jt.pants,w:g<.2?[[a,.25],[o,.75]]:[[o,1]]});d.push({c:u.clone(),rx:.036,rz:.04,col:jt.shoe,w:[[o,.5],[h,.5]]}),r.tube(d,14,!0,!1);let b=u.y-.045;r.tube([{c:Le(u.x,b+.012,u.z-.068),rx:.03,rz:.03,col:jt.shoe,w:[[h,1]]},{c:Le(u.x,b+.006,u.z-.035),rx:.042,rz:.046,col:jt.shoe,w:[[h,.8],[o,.2]]},{c:Le(u.x,b,u.z+.03),rx:.046,rz:.048,col:jt.shoe,w:[[h,1]]},{c:Le(u.x+s*.004,b-.008,u.z+.1),rx:.049,rz:.036,col:jt.shoe,w:[[h,1]]},{c:Le(u.x+s*.006,b-.014,u.z+.165),rx:.044,rz:.026,col:jt.shoe,w:[[h,1]]},{c:Le(u.x+s*.006,b-.018,u.z+.205),rx:.028,rz:.016,col:jt.shoe,w:[[h,1]]}],12)}return r.build()}function Kv(){let r=new ro,t=Le(0,.722,.022),e=20,i=26,n=[];for(let c=0;c<=e;c++){let l=c/e*Math.PI,u=Math.cos(l),d=Math.sin(l),f=Math.max(0,-u),m=t.y+u*(u>0?.108:.118),b=.078*(1-.3*f*f),g=.097*(1-.2*f*f),p=t.z+.012*f-.006*Math.max(0,u);n.push({c:Le(0,m,p),ax:Le(1,0,0),rx:Math.max(.004,b*d),rz:Math.max(.004,g*d),w:f>.75?[[A.head,.7],[A.neck,.3]]:[[A.head,1]],shape:(x,v,M)=>{let R=Math.max(0,-M),y=1,E=m-t.y;return y+=.2*Math.exp(-Math.pow((E+.022)/.02,2))*Math.pow(R,26)*Math.pow(Math.max(0,1-Math.abs(v)*5),1),y+=.035*Math.exp(-Math.pow((E-.03)/.016,2))*Math.pow(R,3),y-=.03*Math.exp(-Math.pow((E-.008)/.012,2))*Math.pow(R,2)*Math.exp(-Math.pow((Math.abs(v)-.36)/.16,2)),y+=.05*Math.exp(-Math.pow((E+.088)/.022,2))*Math.pow(R,4),y},col:(x,v)=>{let M=v.y-t.y,R=v.x,y=v.z-t.z,E=y>0,T=E?.058+Math.abs(R)*-.25:-.045-Math.max(0,-y)*.2;if(M>T)return jt.hair;if(E){if(Math.abs(M-.01)<.01&&Math.abs(Math.abs(R)-.031)<.014)return jt.eye;if(Math.abs(M-.03)<.006&&Math.abs(Math.abs(R)-.031)<.022)return jt.hair;if(Math.abs(M+.058)<.007&&Math.abs(R)<.024)return jt.lip;if(M<-.02&&M>-.1&&Math.abs(R)>.02)return jt.skinDark}return jt.skin}})}r.tube(n,i,!1,!1);let s=r.build(),a=s.attributes.position,o=s.attributes.color,h=s.attributes.normal;for(let c=0;c<a.count;c++)o.getX(c)<.04&&o.getY(c)<.03&&a.setXYZ(c,a.getX(c)+h.getX(c)*.008,a.getY(c)+h.getY(c)*.008,a.getZ(c)+h.getZ(c)*.008);return s.computeVertexNormals(),s}var ao=class{constructor(){this.group=new ce,this.group.name="survivor",this.bones=hi.map(t=>{let e=new Zn;return e.name=t[0],e}),hi.forEach((t,e)=>{let i=this.bones[e];if(t[1]>=0){let n=hi[t[1]];i.position.set(t[2]-n[2],t[3]-n[3],t[4]-n[4]),this.bones[t[1]].add(i)}else i.position.set(t[2],t[3],t[4])}),this.root=this.bones[0],this.group.add(this.root),this.group.updateMatrixWorld(!0),this.skeleton=new Vs(this.bones),this.material=new pi({vertexColors:!0,roughness:.62,metalness:0,clearcoat:.28,clearcoatRoughness:.32,envMapIntensity:1}),this.body=new Qn(Yv(),this.material),this.head=new Qn(Kv(),this.material);for(let t of[this.body,this.head])t.frustumCulled=!1,t.layers.enable(1),this.group.add(t),t.bind(this.skeleton,new Pt);this.body.visible=!1,this.head.visible=!1,this._v=new w,this.eyeLocal=jv.clone(),this.glb=null}useGlb(t){this.glb=t,this.body.visible=!1,this.head.visible=!1,this.procHead=this.head,this.head={_v:!0,get visible(){return this._v},set visible(e){this._v=e,t.setHeadVisible(e)}},this.material=t.material,this.eyeLocal.set(0,t.eye.y-hi[A.head][3],t.eye.z-hi[A.head][4]+.06)}retarget(){this.glb&&this.glb.update(this.bones)}bone(t){return this.bones[A[t]]}eyeWorld(t){return t.copy(this.eyeLocal).applyMatrix4(this.bones[A.head].matrixWorld)}};var Ud=1025,Qv=1.22,Lr=9.81,oo=.55;function Vi(r,t,e,i,n,s,a,o,h=-1,c=-1){return{name:r,offset:new w(t,e,i),rest:new w(t,e,i),vol:n/1e3,half:s,cdaP:a,cdaA:o,bone:h,boneB:c,sub:0,depth:-10,world:new w,wasSub:0}}var ho=class r{constructor(t){this.waves=t,this.mass=80.6,this.inertia=new w(11.5,1.7,12.5),this.pos=new w,this.vel=new w,this.quat=new yt,this.angVel=new w,this.prevPos=new w,this.prevQuat=new yt,this.points=[Vi("head",0,.7,.02,5.2,.11,.035,.012),Vi("chest",0,.38,.01,29.7,.15,.13,.03),Vi("pelvis",0,0,0,15.5,.13,.11,.02),Vi("shoulderL",.21,.4,0,3.2,.07,.035,.006),Vi("shoulderR",-.21,.4,0,3.2,.07,.035,.006),Vi("armL",.28,.05,.02,1.8,.05,.04,.005,A.handL),Vi("armR",-.28,.05,.02,1.8,.05,.04,.005,A.handR),Vi("legL",.1,-.33,0,6.5,.09,.07,.008,A.shinL),Vi("legR",-.1,-.33,0,6.5,.09,.07,.008,A.shinR),Vi("footL",.105,-.82,0,3.4,.06,.055,.006,A.footL),Vi("footR",-.105,-.82,0,3.4,.06,.055,.006,A.footR)],this.totalVol=this.points.reduce((e,i)=>e+i.vol,0),this.breathVol=0,this.extForce=new w,this.extTorque=new w,this.wind=new w,this.waterTorque=new w,this.hydroTorque=new w,this.subFrac=0,this.mouthDepth=-1,this.eyeDepth=-1,this.relFlow=new w,this.relSpeed=0,this.dragG=0,this.aer=0,this.turb=0,this.plunge=0,this.surface=gi(),this.surfaceH=0,this.splash=0,this.splashPos=new w,this._s=gi(),this._w={vx:0,vy:0,vz:0,ax:0,ay:0,az:0},this._r=new w,this._p=new w,this._vp=new w,this._u=new w,this._f=new w,this._F=new w,this._T=new w,this._axis=new w,this._tmp=new w,this._tmp2=new w,this._qi=new yt,this._dq=new yt,this._up=new w,this._mouth=new w(0,.655,.105),this._eye=new w(0,.705,.1)}reset(t,e){let i=this.waves.sample(t,e,this._s);this.pos.set(t,i.h-.62,e),this.vel.set(i.vx,i.vy,i.vz),this.quat.identity(),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat)}setAirway(t,e){this._mouth.copy(t),this._eye.copy(e),this._mouthH=new w(t.x,t.y-.625,t.z-.012),this._eyeH=new w(e.x,e.y-.625,e.z-.012)}pin(t,e,i,n){this.pos.copy(t),this.prevPos.copy(t),this.quat.copy(e),this.prevQuat.copy(e),this.vel.copy(i),this.angVel.copy(n);let s=this._r.copy(this._mouth).applyQuaternion(e).add(t),a=this.waves.sample(s.x,s.z,this.surface);this.surfaceH=a.h,this.mouthDepth=a.h-s.y;let o=this._p.copy(this._eye).applyQuaternion(e).add(t);this.eyeDepth=a.h-o.y,this.subFrac=Math.max(0,Math.min(1,(a.h-t.y+.2)/.7)),this.relFlow.set(0,0,0),this.relSpeed=0,this.dragG=0,this.aer=a.aer,this.turb=a.turb,this.plunge=0,this.splash=0,this.extForce.set(0,0,0),this.extTorque.set(0,0,0)}syncLimbs(t){let e=this._tmp,i=t.group.matrixWorld,n=r._im||(r._im=new Pt);n.copy(i).invert(),this._mouthH||this.setAirway(this._mouth.clone(),this._eye.clone());let s=t.bones[A.head].matrixWorld;e.copy(this._mouthH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._mouth.lerp(e,.5),e.copy(this._eyeH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._eye.lerp(e,.5);for(let a of this.points)a.bone<0||(e.setFromMatrixPosition(t.bones[a.bone].matrixWorld).applyMatrix4(n),e.lengthSq()<1.6&&a.offset.lerp(e,.5))}step(t){let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._F.set(0,0,0),n=this._T.set(0,0,0),s=this._axis.set(0,1,0).applyQuaternion(this.quat),a=0,o=0,h=0,c=0,l=0,u=0;this.relFlow.set(0,0,0),this.splash=0;let d=this._tmp2.set(0,0,0),f=0,m=0;for(let B=0;B<this.points.length;B++){let U=this.points[B],F=this._r.copy(U.offset).applyQuaternion(this.quat),P=this._p.copy(this.pos).add(F);U.world.copy(P);let V=this._vp.copy(this.angVel).cross(F).add(this.vel),q=e.sample(P.x,P.z,this._s),H=q.h-P.y;U.depth=H;let z=Math.max(0,Math.min(1,(H+U.half)/(2*U.half)));if(U.bone<0&&z>.5!=U.wasSub>.5){let Q=Math.abs(V.y-q.vy)+.4*Math.hypot(V.x-q.vx,V.z-q.vz);Q>this.splash&&(this.splash=Q,this.splashPos.set(P.x,q.h,P.z))}U.wasSub=z,U.sub=z;let G=this._f.set(0,0,0),tt=U.vol+(B===1?this.breathVol/1e3:0);if(z>0){let Q=Math.max(0,H),et=q.aer*Math.exp(-Q/3.5),ot=Ud*(1-.72*et);et>h&&(h=et),q.turb>c&&(c=q.turb),q.plunge>u&&(u=q.plunge);let it=e.bodyFlow(q.x0,q.z0,Q,this._w),wt=Math.exp(-Q/80),K=Math.exp(-Q/(2.5+.35*Math.max(0,q.brkH)));it.vx+=q.bvx*(.25*wt+.75*K),it.vy+=q.bvy*wt,it.vz+=q.bvz*(.25*wt+.75*K),q.plunge>.01&&(it.vy-=q.plunge*Math.exp(-Q/Math.min(8.5,2+.45*Math.max(0,q.brkH)))),e.breakerFlow(P.x,P.y,P.z,q.h,it);let zt=ot*tt*z;f+=-F.z*zt*Lr,m+=F.x*zt*Lr,G.set(zt*(1+oo)*it.ax,zt*(Lr+(1+oo)*(it.ay+q.bay*wt)),zt*(1+oo)*it.az);let xt=this._u.set(it.vx-V.x,it.vy-V.y,it.vz-V.z),Ct=xt.dot(s),bt=this._tmp.copy(s).multiplyScalar(Ct),Ht=this._up.copy(xt).sub(bt),At=.5*ot*U.cdaP*z*Ht.length()+24*U.cdaP*z/.1,L=.5*ot*U.cdaA*z*Math.abs(Ct)+8*z*U.cdaA/.01,C=Ht.x*At+bt.x*L,$=Ht.y*At+bt.y*L,ht=Ht.z*At+bt.z*L;G.x+=C,G.y+=$,G.z+=ht,d.x+=C,d.y+=$,d.z+=ht,a+=tt*z,this.relFlow.addScaledVector(xt,tt*z),l+=tt*z}if(z<1){let Q=this._u.set(this.wind.x-V.x,this.wind.y-V.y,this.wind.z-V.z),et=.5*Qv*U.cdaP*1.1*(1-z)*Q.length();G.addScaledVector(Q,et)}i.add(G),n.add(this._tmp.copy(F).cross(G))}o=d.length(),this.hydroTorque.set(f,0,m),this.subFrac=a/this.totalVol,this.aer=h,this.turb=c,this.plunge=u,l>0&&this.relFlow.multiplyScalar(1/l),this.relSpeed=this.relFlow.length(),this.dragG=o/(this.mass*Lr);let b=this.mass+oo*Ud*a;i.add(this.extForce),i.y-=this.mass*Lr,this.vel.addScaledVector(i,t/b);let g=this.vel.length();g>45&&this.vel.multiplyScalar(45/g),this.pos.addScaledVector(this.vel,t),this.waterTorque.copy(n),n.add(this.extTorque);let p=this._qi.copy(this.quat).invert(),x=this._tmp.copy(this.angVel).applyQuaternion(p),v=this._tmp2.copy(n).applyQuaternion(p),M=1+.6*this.subFrac,R=this.inertia.x*M,y=this.inertia.y*M,E=this.inertia.z*M,T=(v.x-(E-y)*x.y*x.z)/R,_=(v.y-(R-E)*x.z*x.x)/y,S=(v.z-(y-R)*x.x*x.y)/E;x.x+=T*t,x.y+=_*t,x.z+=S*t;let k=Math.exp(-(.25+1.1*this.subFrac)*t);x.multiplyScalar(k);let W=x.length();W>14&&x.multiplyScalar(14/W),this.angVel.copy(x).applyQuaternion(this.quat);let Y=this.angVel.length()*t;Y>1e-7&&(this._dq.setFromAxisAngle(this._r.copy(this.angVel).normalize(),Y),this.quat.premultiply(this._dq).normalize());let N=this._r.copy(this._mouth).applyQuaternion(this.quat).add(this.pos),D=e.sample(N.x,N.z,this.surface);this.surfaceH=D.h,this.mouthDepth=D.h-N.y;let O=this._p.copy(this._eye).applyQuaternion(this.quat).add(this.pos);this.eyeDepth=D.h-O.y}};var co=class{constructor(){this.reset(),this.events=[]}reset(){this.oxygen=100,this.stamina=100,this.temp=37,this.fatigue=0,this.blackout=0,this.alive=!0,this.cause="",this.timeAlive=0,this.breathPhase=0,this.lung=.6,this.breathRate=.3,this.exertion=0,this.gaspTimer=0,this.submergedTime=0,this.wasUnder=!1,this.swallow=0,this.eff=1,this.condition=1,this.shiver=0,this.inhaling=!1,this.lungAtDive=.6}update(t,e){if(!this.alive)return;this.timeAlive+=t;let i=e.mouthUnder,n=e.effort;if(this.exertion+=(mt(n*.6+(100-this.stamina)/160+(100-this.oxygen)/120)-this.exertion)*(1-Math.exp(-t*.8)),i)this.submergedTime+=t,this.oxygen-=t*(2.3+2.4*n+1.5*e.turb)*(1+.5*this.swallow)*(1.3-.45*this.lungAtDive),this.wasUnder||(this.inhaling&&e.sudden&&(this.swallow=Math.min(1,this.swallow+.45),this.oxygen-=6),this.lungAtDive=this.lung,this.events.push({type:"submerge",lung:this.lung})),this.lung=Math.max(.12,this.lung-t*(.025+.03*n));else{if(this.wasUnder){let x=mt((100-this.oxygen)/60+this.submergedTime/12);this.gaspTimer=1.5+5.5*x,this.events.push({type:"surface",need:x,time:this.submergedTime}),this.breathPhase=0,this.submergedTime=0}let u=this.gaspTimer>0?1:0;this.gaspTimer=Math.max(0,this.gaspTimer-t),this.oxygen+=t*(15+13*u)*(1-.6*this.swallow),this.swallow=Math.max(0,this.swallow-t*.12);let d=lt(.26,.95,mt(this.exertion*.9+u*.55));this.breathRate+=(d-this.breathRate)*(1-Math.exp(-t*1.4));let f=this.stamina<25?1+.35*Math.sin(this.timeAlive*2.7)*Math.sin(this.timeAlive*1.3):1,m=this.breathPhase;this.breathPhase+=t*this.breathRate*f,this.breathPhase>=1&&(this.breathPhase-=1);let b=this.breathPhase<.4;b&&!this.inhaling&&this.events.push({type:"inhale",strength:mt(.25+this.exertion*.8+u*.6),gasp:u>0&&m>this.breathPhase?1:u}),!b&&this.inhaling&&this.events.push({type:"exhale",strength:mt(.2+this.exertion*.7+u*.4),cough:this.swallow>.25?1:0}),this.inhaling=b;let g=lt(.45,.95,mt(this.exertion+u)),p=b?.45+.5*g*(this.breathPhase/.4):.95*g-(.95*g-.4)*((this.breathPhase-.4)/.6)+0;this.lung+=(wi(p,.3,1)-this.lung)*(1-Math.exp(-t*9)),e.brace>.5&&(this.lung+=(1-this.lung)*(1-Math.exp(-t*5)))}this.wasUnder=i,this.oxygen=wi(this.oxygen,0,100);let s=ke(36,32.5,this.temp),a=1-mt((36-this.temp)/3.5),o=100-this.fatigue*.62,h=n>.42?(n-.42)*7:0,c=i?0:n<.42?(3.4-n*4)*(.45+.55*a)*(1-this.fatigue/170):0;this.stamina=wi(this.stamina+(c-h)*t,0,o),this.fatigue=wi(this.fatigue+t*(.035+.16*n),0,100);let l=.0042*(1+.45*n)*(.6+.4*e.subFrac)*(1+.3*e.storm);this.temp-=l*t,this.shiver=mt((36.2-this.temp)/1.6)*(1-mt((33-this.temp)/1.5)),this.oxygen<=.01?this.blackout+=t/11:this.blackout-=t/3.5,this.temp<31.5&&(this.blackout+=t/40),this.blackout=mt(this.blackout),this.blackout>=1&&(this.alive=!1,this.cause=this.temp<31.5&&this.oxygen>5?"cold":"drown",this.events.push({type:"dead",cause:this.cause})),this.eff=lt(.32,1,ke(0,38,this.stamina))*(.45+.55*a)*(1-.6*this.blackout),this.condition=mt(Math.min(this.oxygen/100+.25,1)*(.4+.6*this.stamina/100)*(.35+.65*a)*(1-this.blackout))}};var es=new w(0,1,0),lo=class{constructor(t,e,i){this.body=t,this.survival=e,this.input=i,this.yaw=Math.PI,this.pitch=0,this.control=1,this.impact=0,this.impactPeak=0,this.moveAmt=0,this.effort=0,this.swimBlend=0,this.underSwim=0,this.crawlBlend=0,this.diveBlend=0,this.riseBlend=0,this.swimHeld=!1,this.diveHeld=!1,this.upHeld=!1,this.sprintHeld=!1,this.diveTime=0,this.moveDir=new w(0,0,1),this.heading=new w(0,0,1),this.facing=new w(0,0,1),this.recover=0,this.strokePhase=0,this.brace=0,this.air=0,this.grab=null,this.fear=0,this.cling=!1,this.faceDir=null,this.struggleW=0,this.tumble=0,this.events=[],this._lastImpact=-10,this._time=0,this._fwd=new w,this._right=new w,this._dir=new w,this._x=new w,this._y=new w,this._z=new w,this._m=new Pt,this._qt=new yt,this._qe=new yt,this._ax=new w,this._h=new w}fixedUpdate(t){let e=this.body,i=this.survival,n=this.input;this._time+=t;let s=e.dragG,a=s>this.impact+.25;this.impact=s>this.impact?lt(this.impact,s,1-Math.exp(-t*30)):this.impact*Math.exp(-t*2.2),this.impactPeak=Math.max(this.impactPeak*Math.exp(-t*1.2),s),s>1.4&&a&&this._time-this._lastImpact>.8&&(this._lastImpact=this._time,this.events.push({type:"impact",strength:s,dir:e.relFlow.clone().normalize(),aer:e.aer}));let o=mt(1-ke(.9,3.2,this.impact)-.75*e.aer-.55*e.turb-.9*this.air),h=o<this.control?14:.55+.9*i.eff;this.control+=(Math.max(.04,o)-this.control)*(1-Math.exp(-t*h));let c=this.control*(i.alive?1:0)*(1-.8*i.blackout);this.tumble+=(mt(e.angVel.length()/3.5)*(1-c*.6)-this.tumble)*(1-Math.exp(-t*3)),this.recover=Math.max(0,this.recover-t);let l=n.enabled?n.axisX():0,u=n.enabled?n.axisZ():0,d=n.enabled&&n.swim(),f=n.enabled&&n.dive(),m=d&&!this.cling;this.swimHeld=d,this.diveHeld=f,this.sprintHeld=m,this.upHeld=m&&e.mouthDepth>.45&&!f,this.diveTime=f?this.diveTime+t:0;let b=this._fwd.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),g=this._right.set(-b.z,0,b.x);this.facing.copy(b);let p=this._h.copy(b).multiplyScalar(u).addScaledVector(g,l),x=Math.min(1,p.length());x>.05?p.multiplyScalar(1/p.length()):(p.copy(b),x=0),this.cling&&this.faceDir&&(p.copy(this.faceDir),x=0),this.heading.lerp(p,1-Math.exp(-t*(x>0||m||f||this.fp||this.cling?7:1.5))).normalize();let v=e.mouthDepth>.45,M=Math.max(0,e.mouthDepth);this.underSwim+=((v||f&&e.mouthDepth>.1?1:0)-this.underSwim)*(1-Math.exp(-t*5)),this.diveBlend+=((f?1:0)-this.diveBlend)*(1-Math.exp(-t*(f?7:3.5)));let R=v&&!f;this.riseBlend+=((R?1:0)-this.riseBlend)*(1-Math.exp(-t*4));let y=this._dir.set(0,0,0),E=0,T=0;if(f){let z=.95*mt((6.5-M)/2.5);y.copy(this.heading).multiplyScalar(.55+.45*(1-z)).addScaledVector(es,-z).normalize(),E=1,T=m?360:270}else v?m?(y.copy(this.heading).multiplyScalar(x>0?.75:.35).addScaledVector(es,.9).normalize(),E=1,T=360):x>0&&(y.copy(this.heading).multiplyScalar(x).addScaledVector(es,.45*Math.min(1,M/.8)).normalize(),E=x,T=170):m?(y.copy(this.heading),E=1,T=325):x>0&&(y.copy(this.heading),E=x,T=150);E>.01&&this.moveDir.lerp(y,1-Math.exp(-t*6)).normalize(),this.moveAmt+=(E-this.moveAmt)*(1-Math.exp(-t*5));let _=i.eff*c,S=Math.min(1,e.subFrac*1.25),k=e.extForce.set(0,0,0),W=0;if(E>.01){let z=1+.42*this.swimBlend*Math.sin(2*this.strokePhase)+.38*this.underSwim*Math.sin(this.strokePhase-1),G=v||f?1:mt(1+(e.mouthDepth+.3+.06*this.crawlBlend)*3.5);k.addScaledVector(y,T*_*S*E*z*G*(this.grab?.2:1)),W+=(T>200?.8:.45)*E,f&&this.diveTime<1.1&&M<1.2&&(k.y-=260*_*Math.sin(Math.min(1,this.diveTime/1.1)*Math.PI))}let Y=.2+.04*this.crawlBlend;if(!v&&e.mouthDepth<-Y&&this.air<.3&&e.pos.y-e.surfaceH<1&&(k.y-=Math.min(520,(-e.mouthDepth-Y)*1500)),!v&&this.air<.3&&this.swimBlend>.05&&e.points[2].sub!==void 0){let z=e.points[2].depth,G=.26+.06*this.crawlBlend;z<G&&(k.y-=Math.min(850,(G-z)*2300)*Math.min(1,this.swimBlend*1.5))}if(v&&!f&&!m&&(k.y+=165*_*S,W+=.5),!v&&!f){let z=e.vel.y-e.surface.vy,G=.06+.07*mt(i.stamina/60)+.06*this.crawlBlend+.04*this.swimBlend*(1-this.crawlBlend)+(this.fp?.05*this.crawlBlend:0)+.03*Math.max(0,1-2.2*this.swimBlend),tt=Math.max(0,Math.min(210+110*this.crawlBlend+55*this.fear,(e.mouthDepth+G+.035*this.fear)*1e3-z*140))*_*S*(1+.45*Math.sin(2*this.strokePhase));this.struggleW>.05&&(tt=tt*(1-.65*this.struggleW)+175*this.struggleW*_*S*Math.max(0,Math.sin(this.strokePhase))),k.y+=tt,W+=.34*Math.min(1,tt/100)*(1-this.crawlBlend)+.08+.09*this.fear*(1-this.crawlBlend)}if(this.grab){let z=this.grab.x-e.pos.x,G=this.grab.z-e.pos.z,tt=Math.hypot(z,G);if(tt<4.5){let Q=Math.min(280,tt*230)*c;k.x+=z/(tt+.001)*Q,k.z+=G/(tt+.001)*Q,k.y+=70*S}}this.cling&&(W=this.squeeze?.5:Math.min(W,.14)),this.effort+=(W-this.effort)*(1-Math.exp(-t*6));let N=!v&&!f&&E>.15?m?1:.5*E:0;this.crawlBlend+=((m&&!v&&!f?1:0)-this.crawlBlend)*(1-Math.exp(-t*4)),this.swimBlend+=(N-this.swimBlend)*(1-Math.exp(-t*(N>this.swimBlend?3.2:2.2)));let D=this._y,O=this._z,B=this._x,U=this._ax.set(this.heading.x,0,this.heading.z);U.lengthSq()<.01?U.copy(b):U.normalize();let F=this._time;if(f||v&&E>.1)D.copy(y),O.copy(es).multiplyScalar(-(1-Math.abs(D.y))).addScaledVector(U,D.y),O.addScaledVector(D,-O.dot(D));else if(v)D.copy(es).addScaledVector(U,.12),D.normalize(),O.copy(U),O.addScaledVector(D,-O.dot(D));else{let z=this.swimBlend;D.copy(es).multiplyScalar(1-z*.5).addScaledVector(U,z);let G=1-z,tt=Math.max(0,1-2.2*z);D.addScaledVector(U,G*(.13+.12*tt+.07*Math.sin(F*.83)*Math.sin(F*.31))),D.addScaledVector(g,G*.08*Math.sin(F*.57+1.3)*Math.sin(F*.23+.4)),D.normalize(),O.copy(U).multiplyScalar(1-z*.9).addScaledVector(es,-z*.9),O.addScaledVector(D,-O.dot(D))}O.lengthSq()<1e-4&&O.copy(U).addScaledVector(D,-U.dot(D)),O.lengthSq()<1e-4&&O.copy(g),O.normalize(),B.crossVectors(D,O).normalize(),this._m.makeBasis(B,D,O),this._qt.setFromRotationMatrix(this._m);let P=this._qe.copy(e.quat).invert().premultiply(this._qt);P.w<0&&(P.x=-P.x,P.y=-P.y,P.z=-P.z,P.w=-P.w);let V=2*Math.acos(Math.min(1,P.w)),q=e.extTorque.set(0,0,0);if(V>1e-4){let z=Math.sqrt(Math.max(1e-9,1-P.w*P.w));this._ax.set(P.x/z,P.y/z,P.z/z);let G=Math.max(this.swimBlend,this.underSwim,this.diveBlend),tt=f||v?1+2.2*mt((V-.5)/.9):1,Q=this.cling?.6:1,et=this.cling?1:1-.16*this.fear*(1-G),ot=this.cling||f||v?0:Math.max(0,1-2.2*G),it=(72+70*G+120*ot)*_*tt*Q*et,wt=(21+13*G+16*ot)*_*(this.cling?.55:1);q.copy(this._ax).multiplyScalar(it*Math.min(V,1.4)).addScaledVector(e.angVel,-wt);let K=q.length(),zt=(130+110*G+130*ot)*_*tt;K>zt&&q.multiplyScalar(zt/K)}let H=Math.max(this.swimBlend,f?1:0,v&&E>.1?this.underSwim:0,!this.cling&&!v&&!f?.85*Math.max(0,1-2.2*this.swimBlend):0);H>.02&&q.addScaledVector(e.hydroTorque,-H*Math.min(1,_*1.5)),this.swimBlend>.2&&(this._ax.set(0,1,0).applyQuaternion(e.quat),q.addScaledVector(this._ax,(20+22*this.crawlBlend)*this.swimBlend*_*Math.sin(this.strokePhase)))}};var ns=hi.length,Zs=Math.PI*2,Nd=new w(0,-1,0),is=["hang","float","tread","paddle","swim","dive","under","rise","struggle","tumble","recover","exhaust","brace","flail","aboard","cling"],Zv={hang:.45,float:1.2,tread:1.5,paddle:1.35,swim:1.8,dive:1.5,under:1.5,rise:2.3,struggle:2.4,tumble:.45,recover:1.5,exhaust:.7,brace:.85,flail:2.8,aboard:.5,cling:.9};function Z(r,t,e,i,n){let s=t*3;r[s]=e,r[s+1]=i,r[s+2]=n}var wc=(r,t,e)=>Math.exp(-Math.pow((r-t)/e,2)),ci=r=>(r=mt(r),r*r*(3-2*r)),fo=r=>(r%Zs+Zs)%Zs/Zs;function Jv(r,t,e,i){let n=e;Z(r,A.spine,.05+.04*Math.sin(t*2)*n,.05*Math.sin(t)*n,.04*Math.sin(t+.6)*n),Z(r,A.chest,-.05,-.06*Math.sin(t)*n,0),Z(r,A.neck,-.14,0,0),Z(r,A.head,-.22-.04*Math.sin(t*2)*n,0,0);for(let s of[1,-1]){let a=s>0,o=a?0:.55,h=Math.sin(t+o),c=Math.cos(t+o);Z(r,a?A.upperArmL:A.upperArmR,-.34+.1*c*n,-s*.34*h*n,s*lt(1.4,.95,i)),Z(r,a?A.foreArmL:A.foreArmR,lt(-.42,-.8,i)-.24*c*n,0,0),Z(r,a?A.handL:A.handR,.32*h*n,0,s*.2*c*n);let l=t+(a?0:Math.PI);Z(r,a?A.thighL:A.thighR,lt(-.92,-.38,i)+.22*Math.sin(l)*n,s*.28*Math.cos(l)*n,s*(lt(.5,.24,i)+.12*Math.cos(l)*n)),Z(r,a?A.shinL:A.shinR,lt(1.42,.62,i)+.46*Math.sin(l-1.2)*n,0,0),Z(r,a?A.footL:A.footR,.22+.3*Math.sin(l-1.8)*n,0,0)}}function $v(r,t){let e=fo(t),i,n,s;if(e<.22)i=-2.25,n=.1,s=-.1;else if(e<.55){let u=ci((e-.22)/.33);i=lt(-2.25,-1.25,u),n=lt(.1,.95,u),s=lt(-.1,-1.35,u)}else if(e<.72){let u=ci((e-.55)/.17);i=lt(-1.25,-.8,u),n=lt(.95,.28,u),s=lt(-1.35,-2.1,u)}else{let u=ci((e-.72)/.28);i=lt(-.8,-2.25,u),n=lt(.28,.1,u),s=lt(-2.1,-.1,u)}let a,o,h,c;if(e<.5)a=.06,o=.07,h=.1,c=.75;else if(e<.74){let u=ci((e-.5)/.24);a=lt(.06,-.78,u),o=lt(.07,.46,u),h=lt(.1,1.9,u),c=lt(.75,-.15,u)}else if(e<.88){let u=ci((e-.74)/.14);a=lt(-.78,-.18,u),o=lt(.46,.5,u),h=lt(1.9,.3,u),c=lt(-.15,.3,u)}else{let u=ci((e-.88)/.12);a=lt(-.18,.06,u),o=lt(.5,.07,u),h=lt(.3,.1,u),c=lt(.3,.75,u)}let l=wc(e,.5,.14);Z(r,A.spine,-.08-.06*l,0,0),Z(r,A.chest,-.1-.06*l,0,0),Z(r,A.neck,-.28,0,0),Z(r,A.head,-.36-.05*l,0,0);for(let u of[1,-1]){let d=u>0;Z(r,d?A.upperArmL:A.upperArmR,i,0,u*n),Z(r,d?A.foreArmL:A.foreArmR,s,0,0),Z(r,d?A.handL:A.handR,.12,0,0),Z(r,d?A.thighL:A.thighR,a,0,u*o),Z(r,d?A.shinL:A.shinR,h,0,0),Z(r,d?A.footL:A.footR,c,0,0)}}function tx(r,t){let e=Math.sin(t),i=Math.sin(t*2);Z(r,A.spine,-.1+.06*i,.2*e,.08*e),Z(r,A.chest,-.12,.36*e,.1*e),Z(r,A.neck,-.36,-.24*e,-.03*e),Z(r,A.head,-.4+.04*i,-.24*e,-.04*e);for(let n of[1,-1]){let s=n>0,a=fo(t+(s?0:Math.PI)),o,h,c,l;if(a<.1){let f=ci(a/.1);o=lt(-2.16,-2.4,f),h=lt(-.34,-.1,f),c=.16,l=.14}else if(a<.24){let f=ci((a-.1)/.14);o=lt(-2.4,-2.12,f),h=lt(-.1,-.95,f),c=lt(.16,.24,f),l=lt(.14,.34,f)}else if(a<.44){let f=ci((a-.24)/.2);o=lt(-2.12,-.95,f),h=lt(-.95,-1.45,Math.sin(f*Math.PI*.5))+.25*f*f,c=lt(.24,.1,f),l=.34}else if(a<.58){let f=ci((a-.44)/.14);o=lt(-.95,.3,f),h=lt(-1.2,-.22,f),c=lt(.1,.22,f),l=lt(.34,-.1,f)}else{let f=(a-.58)/.42,m=f*f*(1.6-.6*f),b=Math.sin(Math.pow(f,.85)*Math.PI);o=lt(.3,Math.PI*2-2.16,m),h=-.22-.62*Math.pow(b,.9),c=.22+.36*b,l=-.2*b}Z(r,s?A.upperArmL:A.upperArmR,o,0,n*c),Z(r,s?A.foreArmL:A.foreArmR,h,0,0),Z(r,s?A.handL:A.handR,l,0,0);let u=t*3+(s?0:Math.PI),d=Math.sin(u);Z(r,s?A.thighL:A.thighR,.05+.21*d,0,n*.05),Z(r,s?A.shinL:A.shinR,.1+.5*Math.max(0,Math.sin(u+1.1)),0,0),Z(r,s?A.footL:A.footR,.8+.12*Math.sin(u+2),0,0)}}function Od(r,t,e){let i=fo(t),n=Math.sin(i*Zs-1.2);Z(r,A.spine,-.05+.09*n+.42*e,0,0),Z(r,A.chest,-.06-.07*n+.3*e,0,0),Z(r,A.neck,-.2+.42*e,0,0),Z(r,A.head,-.3+.05*n+.45*e,0,0);let s,a,o;if(i<.36){let l=i/.36,u=ci(l);s=lt(-(Math.PI*.94),-.2,u),a=.14+.92*Math.sin(l*Math.PI),o=-.4*Math.sin(l*Math.PI)}else if(i<.52)s=-.2,a=.14,o=-.05;else{let l=(i-.52)/.48,u=ci(l);s=lt(-.2,-(Math.PI*.94),u),a=.14+.1*Math.sin(l*Math.PI),o=-1.85*Math.sin(l*Math.PI)}s=lt(s,-2.75,e),a=lt(a,.12,e),o=lt(o,-.1,e);let h=wc(i,.62,.1),c=wc(i,.78,.07);for(let l of[1,-1]){let u=l>0;Z(r,u?A.upperArmL:A.upperArmR,s,0,l*a),Z(r,u?A.foreArmL:A.foreArmR,o,0,0),Z(r,u?A.handL:A.handR,0,0,0),Z(r,u?A.thighL:A.thighR,lt(-.08-.62*h+.14*c,-1,e),0,l*(.07+.42*h*(1-e))),Z(r,u?A.shinL:A.shinR,lt(.12+1.35*h,.1,e),0,0),Z(r,u?A.footL:A.footR,.75-.5*h*(1-e),0,0)}}function ex(r,t,e,i){let n=(s,a)=>(ei(e*a,s)-.5)*i;Z(r,A.spine,-.08,.06*Math.sin(t),.05*Math.sin(t*.7)*i),Z(r,A.chest,-.12,.1*Math.sin(t),0),Z(r,A.neck,-.34,.1*Math.sin(t*.37)*i,0),Z(r,A.head,-.42+n(1,1.3)*.12,.16*Math.sin(t*.37+.6)*i,0);for(let s of[1,-1]){let a=s>0,o=t+(a?0:Math.PI),h=.5+.5*Math.sin(o),c=Math.max(0,-Math.cos(o)),l=Math.max(0,Math.cos(o));Z(r,a?A.upperArmL:A.upperArmR,lt(-.55,-2.8,h)+n(a?5:7,1.1)*.3,s*.1*Math.cos(o)*i,s*(.22+.24*(1-h)+.1*i)),Z(r,a?A.foreArmL:A.foreArmR,-.25-.45*c-1.05*l,0,0),Z(r,a?A.handL:A.handR,.35*c,0,s*.1);let u=t*2+(a?0:Math.PI)+n(a?11:13,.8)*1.2;Z(r,a?A.thighL:A.thighR,-.14+.44*Math.sin(u),0,s*(.1+.08*i)),Z(r,a?A.shinL:A.shinR,.26+.58*Math.max(0,Math.sin(u+.9)),0,0),Z(r,a?A.footL:A.footR,.72,0,0)}}function ix(r,t,e,i=0){let n=Math.sin(t),s=Math.sin(t*2);Z(r,A.spine,.06+.07*s*e,.15*n*e,.09*n*e),Z(r,A.chest,-.02,.17*n*e,.05*n*e),Z(r,A.neck,-.1,-.2*n*e,0),Z(r,A.head,-.14-.06*s*e,-.16*n*e,.04*n*e);for(let a of[1,-1]){let o=a>0,h=fo(t+(o?0:Math.PI)),c,l,u,d,f=lt(-1.5,-2.45,e)-.12*i,m=lt(.4,-.1,i),b=lt(-.5,-.3,i);if(h<.3){let x=ci(h/.3);c=lt(-.4,f,x),l=lt(-1.8,b,x),u=lt(.26,m,x),d=lt(.1,-.25,x)}else if(h<.42){let x=(h-.3)/.12,v=x*x;c=lt(f,-1.42,v),l=lt(b,-.2,v),u=m,d=lt(-.25,.2,v)}else if(h<.8){let x=ci((h-.42)/.38);c=lt(-1.42,-.08,x),l=-.2-.8*Math.sin(x*Math.PI)-.1*x,u=lt(m,.2,x),d=.3}else{let x=ci((h-.8)/.2);c=lt(-.08,-.4,x),l=lt(-.3,-1.8,x),u=lt(.2,.26,x),d=lt(.3,.1,x)}Z(r,o?A.upperArmL:A.upperArmR,c,0,a*u),Z(r,o?A.foreArmL:A.foreArmR,l,0,0),Z(r,o?A.handL:A.handR,d,0,0);let g=t*1.5+(o?0:Math.PI),p=Math.sin(g);Z(r,o?A.thighL:A.thighR,-.2+.44*p*e,0,a*.1),Z(r,o?A.shinL:A.shinR,.38+.5*Math.max(0,Math.sin(g-1))*e,0,0),Z(r,o?A.footL:A.footR,.6+.12*p,0,0)}}function nx(r,t,e){let i=(o,h)=>ei(e*h,o)-.5,n=Math.sin(t),s=Math.max(0,n),a=Math.max(0,-n);Z(r,A.spine,-.1-.06*s,.07*Math.sin(t*.5),.05*Math.sin(t*.7)),Z(r,A.chest,-.12-.04*s,.05*Math.sin(t*.5+.8),0),Z(r,A.neck,-.3,.1*Math.sin(t*.37),0),Z(r,A.head,-.4+.08*a+i(1,1.3)*.1,.16*Math.sin(t*.37+.6),.05*Math.sin(t*.53));for(let o of[1,-1]){let h=o>0,c=h?0:.45,l=Math.sin(t+c),u=Math.max(0,l),d=Math.max(0,-l);Z(r,h?A.upperArmL:A.upperArmR,-.24+.18*l+i(h?3:4,1.7)*.2,o*.14*Math.cos(t+c),o*(1.24-.56*(.5+.5*l))),Z(r,h?A.foreArmL:A.foreArmR,-.26-.42*d,0,0),Z(r,h?A.handL:A.handR,.42*u,0,o*.1);let f=t*.6+(h?0:2.1);Z(r,h?A.thighL:A.thighR,-.24+.18*Math.sin(f),0,o*.16),Z(r,h?A.shinL:A.shinR,.46+.26*Math.sin(f+1),0,0),Z(r,h?A.footL:A.footR,.55,0,0)}}function sx(r,t){let e=Math.sin(t),i=Math.sin(t*.5+1),n=Math.max(0,Math.sin(t*.31-.4));Z(r,A.spine,.14,.05*e,.04*i),Z(r,A.chest,.16,.04*e,0),Z(r,A.neck,.2+.1*i-.5*n,.06*e,0),Z(r,A.head,.16+.16*i-.46*n,.08*e,.05*i);for(let s of[1,-1]){let a=s>0;Z(r,a?A.upperArmL:A.upperArmR,-.25,-s*.2,s*1.15),Z(r,a?A.foreArmL:A.foreArmR,-1.45,0,0),Z(r,a?A.handL:A.handR,.45,0,-s*.2),Z(r,a?A.thighL:A.thighR,(a?-.3:-.14)+.1*Math.sin(t+(a?0:1.3)),0,s*.05),Z(r,a?A.shinL:A.shinR,(a?.52:.3)+.14*Math.sin(t+(a?.8:2.2)),0,0),Z(r,a?A.footL:A.footR,.8,0,0)}}function rx(r,t,e,i){let n=Math.sin(t),s=1-i,a=(ei(e*.33,31)-.5)*s,o=.5+.5*Math.sin(e*.47+1.3*Math.sin(e*.21));Z(r,A.spine,-.06*s+.14*i+.02*n,.04,.05),Z(r,A.chest,-.08*s+.12*i+.02*n,.1,.04),Z(r,A.neck,(-.24-.14*o)*s+.26*i,-.16+.22*a,0),Z(r,A.head,(-.28-.16*o)*s+.3*i,-.24+.34*a,-.1),Z(r,A.upperArmL,.28,0,2.03),Z(r,A.foreArmL,-1.12-.2*i,0,0),Z(r,A.handL,.35,0,0),Z(r,A.upperArmR,-2.62,.75,0),Z(r,A.foreArmR,-.26-.5*i,0,0),Z(r,A.handR,.3,0,0),Z(r,A.thighL,-.75-.25*i,0,.55),Z(r,A.shinL,1.3+.25*i,0,0),Z(r,A.footL,.55,0,0),Z(r,A.thighR,.1-.25*i,0,-.42),Z(r,A.shinR,.32+.45*i,0,0),Z(r,A.footR,.8,0,0)}function ax(r,t,e){let i=Math.sin(t),n=Math.sin(t*.5+.7);Z(r,A.spine,.1+.03*i,0,.03*n),Z(r,A.chest,.04,0,0),Z(r,A.neck,-.2+.06*n,0,0),Z(r,A.head,-.3+.08*n,0,0);for(let s of[1,-1]){let a=s>0,o=t+(a?0:Math.PI);Z(r,a?A.upperArmL:A.upperArmR,-2.05,0,s*.32),Z(r,a?A.foreArmL:A.foreArmR,-.75,0,0),Z(r,a?A.handL:A.handR,.3,0,0),Z(r,a?A.thighL:A.thighR,-.22+.2*Math.sin(o),0,s*.12),Z(r,a?A.shinL:A.shinR,.5+.26*Math.sin(o-1.1),0,0),Z(r,a?A.footL:A.footR,.55,0,0)}}function ox(r,t){let e=(i,n)=>ei(t*n,i)-.5;Z(r,A.spine,.2+e(1,.7)*.34,e(2,.6)*.3,e(3,.5)*.22),Z(r,A.chest,.14+e(4,.8)*.26,e(5,.6)*.26,0),Z(r,A.neck,.16+e(6,.9)*.3,e(7,.7)*.36,0),Z(r,A.head,.1+e(8,1)*.3,e(9,.8)*.4,e(10,.6)*.18);for(let i of[1,-1]){let n=i>0,s=n?20:40;Z(r,n?A.upperArmL:A.upperArmR,-.7+e(s,.9)*1.3,i*e(s+1,.7)*.6,i*(.8+e(s+2,.8)*.7)),Z(r,n?A.foreArmL:A.foreArmR,-.85+e(s+3,1.1)*1,0,0),Z(r,n?A.handL:A.handR,e(s+4,1.3)*.6,0,e(s+5,1.2)*.4),Z(r,n?A.thighL:A.thighR,-.6+e(s+6,.8)*1,0,i*(.24+e(s+7,.7)*.36)),Z(r,n?A.shinL:A.shinR,.95+e(s+8,1)*.9,0,0),Z(r,n?A.footL:A.footR,.5+e(s+9,1.1)*.4,0,0)}}function hx(r,t,e){Z(r,A.spine,-.08-.08*e,0,0),Z(r,A.chest,-.1-.1*e,0,0),Z(r,A.neck,-.26,0,0),Z(r,A.head,-.4-.05*e,0,0);for(let i of[1,-1]){let n=i>0,s=Math.sin(t+(n?0:.5));Z(r,n?A.upperArmL:A.upperArmR,-.3+.12*s,-i*.3*s,i*(1.05+.1*e)),Z(r,n?A.foreArmL:A.foreArmR,-.6-.25*s,0,0),Z(r,n?A.handL:A.handR,.25*s,0,0);let a=t+(n?0:Math.PI);Z(r,n?A.thighL:A.thighR,-.7+.26*Math.sin(a),i*.2*Math.cos(a),i*.4),Z(r,n?A.shinL:A.shinR,1.15+.4*Math.sin(a-1.1),0,0),Z(r,n?A.footL:A.footR,.35,0,0)}}function cx(r,t){let e=Math.sin(t*.5);Z(r,A.spine,-.06,0,.04*e),Z(r,A.chest,-.1,0,0),Z(r,A.neck,-.28,.12*e,0),Z(r,A.head,-.42,.1*e,.08*e);for(let i of[1,-1]){let n=i>0;Z(r,n?A.upperArmL:A.upperArmR,-.18+.08*e,i*.12*e,i*1.02),Z(r,n?A.foreArmL:A.foreArmR,-.55-.12*e,0,0),Z(r,n?A.handL:A.handR,.15,0,0),Z(r,n?A.thighL:A.thighR,-.14+.09*Math.sin(t*.5+(n?0:2)),0,i*.14),Z(r,n?A.shinL:A.shinR,.28+.12*Math.sin(t*.5+(n?1:3)),0,0),Z(r,n?A.footL:A.footR,.6,0,0)}}function lx(r,t){let e=Math.sin(t*1.4);Z(r,A.spine,.3,.22,0),Z(r,A.chest,.22,.2,0),Z(r,A.neck,.28,.22,0),Z(r,A.head,.3,.28,.1),Z(r,A.upperArmL,-1.35,-.55,.3),Z(r,A.foreArmL,-1.55,0,0),Z(r,A.handL,.2,0,0),Z(r,A.upperArmR,-1.6,.35,-.45),Z(r,A.foreArmR,-1.75,0,0),Z(r,A.handR,.2,0,0),Z(r,A.thighL,-.85+.12*e,0,.18),Z(r,A.shinL,1.25-.15*e,0,0),Z(r,A.footL,.4,0,0),Z(r,A.thighR,-.7-.12*e,0,-.18),Z(r,A.shinR,1.15+.15*e,0,0),Z(r,A.footR,.4,0,0)}function ux(r,t,e){let i=(n,s)=>ei(e*s,n)-.5;Z(r,A.spine,.05+.18*Math.sin(t*.9),.22*Math.sin(t*.5+1),.12*Math.sin(t*.7)),Z(r,A.chest,-.04+.13*Math.sin(t*.9+.6),.22*Math.sin(t*.5+1.4),0),Z(r,A.neck,-.12+i(1,1.5)*.26,i(2,1.3)*.36,0),Z(r,A.head,-.2+i(3,1.7)*.3,i(4,1.4)*.4,i(5,1.1)*.16);for(let n of[1,-1]){let s=n>0,a=t*(s?1:1.17)+(s?0:2.1),o=s?60:80;Z(r,s?A.upperArmL:A.upperArmR,-1.5+1.05*Math.sin(a)+i(o,1.9)*.4,n*(.15+.35*Math.cos(a*.9)),n*(.65+.4*Math.sin(a*1.3+1))),Z(r,s?A.foreArmL:A.foreArmR,-.7-.6*Math.sin(a+1.2),0,0),Z(r,s?A.handL:A.handR,.5*Math.sin(a*2),0,n*.2*Math.sin(a*1.7));let h=t*1.25+(s?0:Math.PI)+i(o+5,.9)*1.2;Z(r,s?A.thighL:A.thighR,-.55+.7*Math.sin(h),0,n*(.22+.16*Math.sin(h*.7))),Z(r,s?A.shinL:A.shinR,Math.max(.05,.95+.75*Math.sin(h-1.3)),0,0),Z(r,s?A.footL:A.footR,.4+.3*Math.sin(h),0,0)}}var dx=[[A.spine,-.18,.52,.25,-.2,.2],[A.chest,-.16,.38,.25,-.18,.18],[A.neck,-.4,.42,.36,-.22,.22],[A.head,-.45,.42,.5,-.22,.22],[A.foreArmL,-2.2,.02,.12,-.04,.04],[A.foreArmR,-2.2,.02,.12,-.04,.04],[A.handL,-.6,.6,.2,-.3,.3],[A.handR,-.6,.6,.2,-.3,.3],[A.shinL,0,2.2,.04,-.04,.04],[A.shinR,0,2.2,.04,-.04,.04],[A.footL,-.35,.95,.25,-.25,.25],[A.footR,-.35,.95,.25,-.25,.25]],Ec=new Array(ns).fill(null);for(let r of dx)Ec[r[0]]=r;var Bd=new ui(0,0,0,"YXZ");function fx(r,t){let e=Bd.setFromQuaternion(r,"YXZ"),i=e.x,n=e.y,s=e.z,a=!1;i<t[1]?(i=t[1],a=!0):i>t[2]&&(i=t[2],a=!0),n<-t[3]?(n=-t[3],a=!0):n>t[3]&&(n=t[3],a=!0),s<t[4]?(s=t[4],a=!0):s>t[5]&&(s=t[5],a=!0),a&&r.setFromEuler(Bd.set(i,n,s,"YXZ"))}var px=new w,mx=new yt,gx=new w;function bx(r,t,e){let i=px.set(0,-1,0).applyQuaternion(r),n=gx.copy(i),s=i.x*t,a=s,o=i.y,h=i.z;if(e)h<-.42&&(h=-.42),a<-.22?a=-.22:a>.8&&(a=.8),o>.45&&(o=.45),h<0&&o>-.35&&(o=-.35);else{let c=-.5-.34*Math.max(0,Math.min(1,a*1.6));h<c&&(h=c),h<.15&&a<-.05&&(a=-.05),a<-.62&&(a=-.62),h<-.2&&o>.55&&(o=.55)}a===s&&o===i.y&&h===i.z||(i.set(a*t,o,h),!(i.lengthSq()<1e-6)&&(i.normalize(),r.premultiply(mx.setFromUnitVectors(n,i))))}var Qs=new yt,Hd=new yt;function vx(r,t){let e=Math.hypot(r.y,r.w);if(e<.22)return;Qs.set(0,r.y/e,0,r.w/e);let i=2*Math.atan2(Qs.y,Qs.w);if(i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),Math.abs(i)<=t)return;Hd.copy(r).multiply(Qs.invert());let n=Math.sign(i)*t*.5;Qs.set(0,Math.sin(n),0,Math.cos(n)),r.copy(Hd).multiply(Qs)}var xx=new yt().setFromAxisAngle(new w(0,0,1),Math.PI/2),yx=new yt().setFromAxisAngle(new w(0,0,1),-Math.PI/2),_x=new w,Mc=new w,Sc=new yt,Ir=new yt;function Tc(r,t){let e=_x.set(0,-1,0).applyQuaternion(r);if(Mc.set(t,0,0),e.dot(Mc)<-.9)return null;Sc.setFromUnitVectors(Mc,e).multiply(t>0?xx:yx),Ir.copy(Sc).invert().multiply(r);let i=2*Math.atan2(Ir.y,Ir.w);return i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),i}var Ac={1:1,"-1":1};{let r=new ui(-2.5,0,.15,"YXZ"),t=new yt().setFromEuler(r);Ac[1]=Math.sign(Tc(t,1))||1,t.setFromEuler(r.set(-2.5,0,-.15,"YXZ")),Ac[-1]=Math.sign(Tc(t,-1))||1}function Mx(r,t,e){let i=Tc(r,t);if(i===null||Math.abs(i)<=e)return;let n=Math.sign(i)*e,s=Ac[t]*e,a=ke(1.75,2.8,Math.abs(i)),o=(n+(s-n)*a)*.5;Ir.set(0,Math.sin(o),0,Math.cos(o)),r.copy(Sc).multiply(Ir)}var uo=class{constructor(t,e,i,n){this.ch=t,this.body=e,this.player=i,this.sv=n,this.tmp=new Float32Array(ns*3),this.add=new Float32Array(ns*3),this.acc=new Float32Array(ns*4),this.ref=new Float32Array(ns*4),this.w={},this.wt={};for(let s of is)this.w[s]=0,this.wt[s]=0;this.w.tread=1,this.phase=0,this.time=0,this.tumbleT=0,this.state="tread",this.splashiness=0,this.gaspKick=0,this.coughKick=0,this.force=null,this.forcePhase=void 0,this.hold=null,this.flinch=0,this.flinchSide=1,this.ride={lift:0,side:0,fore:0,slam:0},this.reach=[{pos:new w,on:0,w:0},{pos:new w,on:0,w:0}],this._ik={fix2:new w,qs:new yt,S:new w,qp:new yt,qu:new yt,qf:new yt,a:new w,n:new w,w:new w,fix:new yt,x:new w(1,0,0)},this._e=new ui(0,0,0,"YXZ"),this._q=new yt,this._q2=new yt,this._q3=new yt,this._qa=new yt,this._u=new w,this._wb=new w,this._d=new w,this._qi=new yt,this._flow=new w,this._wLag=new w,this._pv=new w,this._acc=new w,this._a=new w,this._hasPv=!1}_reach(t,e,i,n,s,a){let o=this.ch.bones,h=this._ik,c=o[t],l=o[e],u=o[i],d=l.position,f=u.position;h.S.setFromMatrixPosition(c.matrixWorld),c.parent.getWorldQuaternion(h.qp);let m=d.length()+f.length()-.004,b=Math.max(.16,Math.min(m,h.n.copy(n).sub(h.S).length())),g=.02,p=2.3;for(let x=0;x<14;x++){let v=(g+p)*.5;h.qf.setFromAxisAngle(h.x,-v),h.w.copy(f).applyQuaternion(h.qf).add(d).length()>b?g=v:p=v}if(h.qf.setFromAxisAngle(h.x,-(g+p)*.5),h.w.copy(f).applyQuaternion(h.qf).add(d),h.qu.copy(h.qp).multiply(c.quaternion),h.a.copy(h.w).applyQuaternion(h.qu).normalize(),h.n.normalize(),h.fix.setFromUnitVectors(h.a,h.n),h.qu.premultiply(h.fix),a){let x=h.w.copy(d).applyQuaternion(h.qu);x.addScaledVector(h.n,-x.dot(h.n));let v=h.a.copy(a).sub(h.S);if(v.addScaledVector(h.n,-v.dot(h.n)),x.lengthSq()>1e-8&&v.lengthSq()>1e-8){x.normalize(),v.normalize();let M=Math.atan2(h.fix2.crossVectors(x,v).dot(h.n),x.dot(v));h.qs.setFromAxisAngle(h.n,M),h.qu.premultiply(h.qs)}}h.qu.premultiply(h.qp.invert()),c.quaternion.slerp(h.qu,s),l.quaternion.slerp(h.qf,s)}_mix(t){let e=this.tmp,i=this.acc,n=this.ref,s=this._e,a=this._q,o=this._first;for(let h=0;h<ns;h++){s.set(e[h*3],e[h*3+1],e[h*3+2],"YXZ"),a.setFromEuler(s);let c=h*4;o&&(n[c]=a.x,n[c+1]=a.y,n[c+2]=a.z,n[c+3]=a.w);let l=n[c]*a.x+n[c+1]*a.y+n[c+2]*a.z+n[c+3]*a.w<0?-t:t;i[c]+=a.x*l,i[c+1]+=a.y*l,i[c+2]+=a.z*l,i[c+3]+=a.w*l}this._first=!1}update(t){let e=this.player,i=this.body,n=this.sv,s=this.wt;this.time+=t;let a=n.alive?e.control*(1-.7*n.blackout):0,o=1-ke(.22,.78,a),h=Math.max(o,e.air||0),c=n.alive?mt(1-n.blackout*1.5):0,l=1-h,u=e.underSwim,d=e.diveBlend||0;s.flail=h*c*.8,s.tumble=h-s.flail,s.dive=l*d;let f=l*(1-d);s.under=f*u*e.moveAmt,s.rise=f*u*(1-e.moveAmt);let m=f*(1-u);s.swim=m*(e.crawlBlend||0),s.paddle=m*(1-(e.crawlBlend||0))*mt(e.swimBlend*2.2);let b=mt((s.swim+s.paddle)/Math.max(.001,m));s.brace=m*e.brace*(1-.7*b);let g=1-e.brace*(1-.7*b),p=Math.max(mt((38-n.oxygen)/26),mt((34-n.stamina)/28),mt(n.swallow*1.3),mt(e.impact-.7)*.8),x=m*(1-b);s.struggle=x*p*g,s.recover=x*mt(n.gaspTimer/3)*(1-p)*g;let v=1-ke(6,24,n.stamina);s.exhaust=x*v*(1-p)*g;let M=0;s.hang=0;for(let j of is)j!=="tread"&&j!=="float"&&(M+=s[j]);let R=Math.max(0,1-M),y=mt(e.effort*1.6),E=e.fear||0;if(s.float=R*.22*(1-y)*(1-E),s.tread=R-s.float,s.aboard=0,s.cling=0,this.hold){let j=this.hold==="cling"?Math.min(1,s.tumble+s.flail)*.5:0;for(let ct of is)s[ct]=ct===this.hold?1-j:ct==="tumble"||ct==="flail"?s[ct]*(j>0?.5:0):0}if(this.force)for(let j of is)s[j]=j===this.force?1:0,this.w[j]=s[j];M=0;let T=0;for(let j of is)this.w[j]+=(s[j]-this.w[j])*(1-Math.exp(-t*((j==="tumble"||j==="flail")&&s[j]>this.w[j]?14:j==="brace"||j==="dive"||j==="cling"?7:j==="aboard"?30:5))),M+=this.w[j],this.w[j]>T&&(T=this.w[j],this.state=j);let _=this.w,S=1/Math.max(1e-4,M),k=0;for(let j of is)k+=_[j]*Zv[j];k+=_.tread*.3*y+_.struggle*.2*p+_.flail*(i.subFrac<.3?.8:0)+_.rise*.3*mt((60-n.oxygen)/50),k*=1+.42*E*(_.float+_.recover+_.exhaust+_.struggle)*S+.34*E*_.tread*S,k*=1+(.08+.22*E)*(ei(this.time*.6,77)-.5);let W=Zs*k*S*(.72+.28*n.eff);this.phase+=W*t,this.forcePhase!==void 0&&(this.phase=this.forcePhase);let Y=this.phase;e.strokePhase=Y,e.struggleW=_.struggle*S;let N=Math.min(2.5,i.relSpeed*.25+i.angVel.length()*.22+i.turb);this.tumbleT+=t*(.8+1.6*N);let D=this.tmp,O=this.acc;O.fill(0),this._first=!0;let B=(j,ct)=>{j<=5e-4||(D.fill(0),ct(),this._mix(j*S))},U=is.slice().sort((j,ct)=>_[ct]-_[j]),F=this.force==="dive"?this.forcePike||0:mt(1-Math.abs((e.diveTime||9)-.32)/.42)*mt(1.4-Math.max(0,i.mouthDepth));for(let j of U)switch(j){case"hang":B(_.hang,()=>sx(D,Y));break;case"float":B(_.float,()=>Jv(D,Y,.55,1));break;case"tread":B(_.tread,()=>ix(D,Y,mt(.42+.25*y+.62*E),e.fp?1:0));break;case"paddle":B(_.paddle,()=>$v(D,Y));break;case"swim":B(_.swim,()=>tx(D,Y));break;case"dive":B(_.dive,()=>Od(D,Y,F));break;case"under":B(_.under,()=>Od(D,Y,0));break;case"rise":B(_.rise,()=>ex(D,Y,this.time,1));break;case"struggle":B(_.struggle,()=>nx(D,Y,this.time));break;case"tumble":B(_.tumble,()=>ox(D,this.tumbleT));break;case"recover":B(_.recover,()=>hx(D,Y,n.lung));break;case"exhaust":B(_.exhaust,()=>cx(D,Y));break;case"brace":B(_.brace,()=>lx(D,Y));break;case"aboard":B(_.aboard,()=>rx(D,Y,this.time,mt((e.brace||0)*1.6-.5)));break;case"cling":B(_.cling,()=>ax(D,Y,this.time));break;default:B(_.flail,()=>ux(D,Y,this.time));break}let P=this.add;P.fill(0);let V=l*(1-_.swim*S);P[A.chest*3]-=.18*(n.lung-.5)*V,P[A.spine*3]-=.08*(n.lung-.5)*V;{let j=mt(.4+.5*p+.4*(e.brace||0)+.3*y+.6*E)*l*(1-u)*(1-.8*_.swim*S),ct=this.time*(.45+.5*j+.9*E),vt=e.fp?0:1;P[A.head*3]-=.14*E*l*(1-u)*vt,P[A.neck*3]-=.06*E*l*(1-u)*vt,P[A.chest*3]-=.05*E*Math.sin(this.time*9.5)*l,P[A.spine*3+2]+=.07*E*(ei(this.time*1.7,55)-.5)*2*l;let kt=(ei(ct,91)-.5)*2;P[A.neck*3+1]+=.16*kt*j,P[A.head*3+1]+=.22*kt*j}if(this.gaspKick=Math.max(0,this.gaspKick-t*2.6),this.coughKick=Math.max(0,this.coughKick-t*4.5),this.gaspKick>.001){let j=this.gaspKick*this.gaspKick*V;P[A.head*3]-=.3*j,P[A.neck*3]-=.14*j,P[A.chest*3]-=.18*j,P[A.upperArmL*3+2]+=.16*j,P[A.upperArmR*3+2]-=.16*j}if(this.coughKick>.001){let j=Math.sin(this.coughKick*Math.PI)*V,ct=i.subFrac>.3&&_.aboard<.5?1:0;P[A.spine*3]+=(.3-.16*ct)*j,P[A.chest*3]+=(.22-.12*ct)*j,P[A.head*3]+=(.34-.42*ct)*j,P[A.neck*3]+=(.2-.24*ct)*j}if(_.aboard>.01){let j=this.ride,ct=_.aboard*S,vt=mt(j.lift),kt=this.time;P[A.thighR*3]+=(.16*vt+.12*vt*Math.sin(kt*11))*ct,P[A.shinR*3]+=(.5*vt+.2*vt*Math.sin(kt*13+1))*ct,P[A.thighL*3]+=(.16*vt*Math.sin(kt*9+2)+.1*vt)*ct,P[A.shinL*3]-=.25*vt*ct,P[A.thighR*3+2]-=.25*Math.max(0,-j.side)*ct,P[A.spine*3+2]+=.24*j.side*ct,P[A.chest*3+2]+=.12*j.side*ct,P[A.spine*3+1]+=.1*j.fore*ct,P[A.spine*3]+=(.26*j.slam-.1*vt)*ct,P[A.chest*3]+=.16*j.slam*ct,P[A.neck*3]+=(.3*j.slam+.12*vt)*ct,P[A.head*3]+=(.32*j.slam+.1*vt)*ct}if(this.flinch>.002){let j=this.flinch*this.flinch*l,ct=this.flinchSide;P[A.head*3+1]+=.55*j*ct,P[A.neck*3+1]+=.25*j*ct,P[A.head*3]+=.05*j,P[A.head*3+2]+=.18*j*ct,P[A.neck*3+2]+=.08*j*ct,P[A.upperArmL*3+2]+=.22*j,P[A.upperArmR*3+2]-=.22*j,P[(ct>0?A.upperArmR:A.upperArmL)*3]-=.55*j,P[(ct>0?A.foreArmR:A.foreArmL)*3]-=.6*j,this.flinch=Math.max(0,this.flinch-t*1.9)}if(n.shiver>.01){let j=n.shiver*.035;P[A.chest*3+1]+=Math.sin(this.time*61)*j,P[A.upperArmL*3]+=Math.sin(this.time*57+1)*j*1.5,P[A.upperArmR*3]+=Math.sin(this.time*59+2)*j*1.5,P[A.head*3+1]+=Math.sin(this.time*53)*j*.8}let q=this._qi.copy(i.quat).invert(),H=this.force?0:Math.max(.25+.75*(_.tumble+.45*_.flail)*S,.7*_.cling*S);i.subFrac<.15?this._u.copy(i.vel).multiplyScalar(-.3):this._u.copy(i.relFlow);let z=this._flow.lerp(this._u.applyQuaternion(q),1-Math.exp(-t*8)),G=z.length(),tt=this.force?0:mt(G/4.5)*H*.7;this._hasPv||(this._pv.copy(i.vel),this._hasPv=!0);let Q=this._a.copy(i.vel).sub(this._pv).multiplyScalar(1/Math.max(t,.001));this._pv.copy(i.vel),Q.lengthSq()>3600&&Q.setLength(60);let et=this._acc.lerp(Q.applyQuaternion(q),1-Math.exp(-t*9)),ot=et.length(),it=this.force?0:mt(ot/38)*(.3+.5*H),wt=this._wLag.lerp(this._wb.copy(i.angVel).applyQuaternion(q),1-Math.exp(-t*10)),K=wt.length(),zt=this.force?0:Math.min(.6,K*.07)*(.35+.65*_.tumble*S),xt=null,Ct=Math.min(.72,tt+it);if(Ct>.01){let j=this._d.copy(Nd).multiplyScalar(1-Ct);G>.05&&j.addScaledVector(z,Ct*tt/((tt+it)*G)),ot>.05&&j.addScaledVector(et,-Ct*it/((tt+it)*ot)),j.lengthSq()>1e-4&&(j.normalize(),xt=this._q2.setFromUnitVectors(Nd,j))}let bt=null;zt>.01&&(bt=this._q3.setFromAxisAngle(this._u.copy(wt).normalize(),-zt));let Ht=this.force?0:.4+.6*H,At=(j,ct)=>Math.max(-ct,Math.min(ct,j));P[A.spine*3]+=At(et.z*.01*Ht,.3),P[A.chest*3]+=At(et.z*.008*Ht,.24),P[A.spine*3+2]+=At(et.x*.008*Ht,.18),P[A.neck*3]+=At(et.z*.012*Ht,.3),P[A.neck*3+2]+=At(et.x*.008*Ht,.16);let L=Math.min(1,K/5)*H;P[A.foreArmL*3]-=.45*L,P[A.foreArmR*3]-=.45*L,P[A.shinL*3]+=.4*L,P[A.shinR*3]+=.4*L;let C=this.ch.bones,$=this._e,ht=this._q,dt=this._qa,gt=1-Math.exp(-t*26);for(let j=0;j<ns;j++){let ct=j*4;ht.set(O[ct],O[ct+1],O[ct+2],O[ct+3]),ht.lengthSq()<1e-8?ht.identity():ht.normalize();let vt=P[j*3],kt=P[j*3+1],ut=P[j*3+2];(vt!==0||kt!==0||ut!==0)&&ht.multiply(dt.setFromEuler($.set(vt,kt,ut,"YXZ"))),j===A.upperArmL||j===A.upperArmR||j===A.thighL||j===A.thighR?(xt&&ht.premultiply(xt),bt&&ht.premultiply(bt),bx(ht,j===A.upperArmL||j===A.thighL?1:-1,j===A.thighL||j===A.thighR),j===A.thighL||j===A.thighR?vx(ht,.55):Mx(ht,j===A.upperArmL?1:-1,1.15)):(j===A.head&&bt&&ht.premultiply(wx.copy(Ex).slerp(bt,.4)),Ec[j]&&fx(ht,Ec[j])),C[j].quaternion.slerp(ht,gt)}{let j=this.reach,ct=!1;for(let vt=0;vt<2;vt++)j[vt].w+=(j[vt].on-j[vt].w)*(1-Math.exp(-t*(j[vt].on>j[vt].w?9:6))),j[vt].w>.005&&(ct=!0);if(ct){this.ch.group.updateMatrixWorld(!0);for(let vt=0;vt<2;vt++)j[vt].w>.005&&this._reach(vt===0?A.upperArmL:A.upperArmR,vt===0?A.foreArmL:A.foreArmR,vt===0?A.handL:A.handR,j[vt].pos,j[vt].w,j[vt].pole&&j[vt].usePole?j[vt].pole:null)}}let Lt=(_.tread*(.25+.4*y)+_.paddle*.5+_.swim*1+_.struggle*1+_.recover*.5+_.dive*.8)*S;this.splashiness+=(Lt*Math.min(1,i.subFrac*1.3)*(1-u)-this.splashiness)*(1-Math.exp(-t*3))}},wx=new yt,Ex=new yt;var Js=new w(0,1,0),Rc=new yt,po=class{constructor(t,e,i,n,s,a){this.camera=t,this.ch=e,this.body=i,this.player=n,this.waves=s,this.input=a,this.target=1,this.blend=1,this.yaw=Math.PI,this.pitch=-.08,this.sens=.0021,this.intensity=1,this.qd=new yt,this.pivot=new w,this.tpPos=new w,this.inited=!1,this.arm=4.6,this.under=0,this.fovKick=0,this.threat=0,this.orbit=0,this.eye=new w,this.chest=new w,this.surfaceAtCam=gi(),this.script=null,this.auto=!0,this.interest={x:0,z:0,w:0},this.portrait=0,this.autoT=0,this.drift=0,this.roll=0,this.push=0,this.time=0,this.shiver=0,this.cine=null,this._m=new ft,this._f=new w,this._v=new w,this._v2=new w,this._q=new yt,this._q2=new yt,this._mat=new Pt,this._s=gi(),this._fp=new w,this._qfp=new yt,this._qtp=new yt,this._qh=new yt,this._qhS=new yt,this._hasH=!1}toggle(){this.target=this.target>.5?0:1}setMode(t){this.target=t==="first"?0:1}get mode(){return this.target>.5?"third":"first"}lookQuat(t,e,i){let n=Math.cos(e);return this._f.set(Math.sin(t)*n,Math.sin(e),Math.cos(t)*n),this._mat.lookAt(this._v.set(0,0,0),this._f,Js),i.setFromRotationMatrix(this._mat)}update(t){let e=this.camera,i=this.body,n=this.player,s=this.input.consumeMouse(this._m);this.time+=t,this.input.enabled&&(this.yaw-=s.x*this.sens,this.pitch-=s.y*this.sens);let a=performance.now()/1e3,o=Math.abs(s.x)+Math.abs(s.y)>.5||a-this.input.lastLook<2.5,h=this.input.enabled&&this.input.busy();if(this.auto&&this.input.enabled&&!this.script&&!o){let O=this.input.axisX();if(h)Math.abs(O)>.15&&(this.yaw-=O*.85*t),this.autoT=0;else{this.autoT+=t;let U=Math.min(1,this.autoT/1.5);if(this.interest.w>.05){let P=Math.atan2(this.interest.x-i.pos.x,this.interest.z-i.pos.z)-this.yaw;P=((P+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,this.yaw+=Math.sign(P)*Math.min(Math.abs(P),(.25+.9*this.interest.w)*t)*U}else this.drift+=t*.13,this.yaw+=(.045*Math.sin(this.drift)+.03*Math.sin(this.drift*2.3+1))*t*U}let B=-.07+.24*this.threat-.1*this.under;(!h||n.underSwim<.5)&&(this.pitch+=(B-this.pitch)*(1-Math.exp(-t*(h?.5:1.1))))}else this.autoT=0;this.script&&(this.yaw=this.script.yaw,this.pitch=this.script.pitch),this.pitch=wi(this.pitch,-1.45,1.45),n.yaw=this.yaw,n.pitch=this.pitch;let c=1/.85;this.blend=wi(this.blend+Math.sign(this.target-this.blend)*t*c,0,1),Math.abs(this.target-this.blend)<t*c&&(this.blend=this.target);let l=this.blend*this.blend*(3-2*this.blend),u=mt(1-n.control)*.85+n.tumble*.4,d=mt(u),f=this.intensity*lt(.2,1,d)*lt(1,.42,l),m=i.angVel,b=m.length();b>1e-5&&f>0&&(this._q.setFromAxisAngle(this._v.copy(m).multiplyScalar(1/b),b*f*t),this.qd.premultiply(this._q));let g=lt(.32,2.6,d);this.qd.slerp(Rc,1-Math.exp(-t/g)).normalize(),this.ch.eyeWorld(this.eye),this.fpLift&&(this.eye.y+=this.fpLift),this.chest.setFromMatrixPosition(this.ch.bones[2].matrixWorld),this.inited||(this.pivot.copy(this.chest),this.inited=!0,this.tpPos.copy(this.chest).add(this._v.set(0,1.2,4)));{this.ch.bones[4].getWorldQuaternion(this._qh);{let et=this._v.set(1,0,0).applyQuaternion(this.ch.bones[2].getWorldQuaternion(this._q2)),ot=this._v2.set(0,0,1).applyQuaternion(this._qh);if(ot.addScaledVector(et,-ot.dot(et)),ot.lengthSq()>1e-4){ot.normalize(),et.addScaledVector(ot,-et.dot(ot)).normalize();let it=this._f.crossVectors(ot,et);this._qh.setFromRotationMatrix(this._mat.makeBasis(et,it,ot))}}this._hasH||(this._qhS.copy(this._qh),this._hasH=!0),this._qhS.slerp(this._qh,1-Math.exp(-t*12));let B=Math.cos(this.pitch),U=this.pitch-.16*(n.crawlBlend||0),F=Math.cos(U),P=this._v2.set(Math.sin(this.yaw)*F,Math.sin(U),Math.cos(this.yaw)*F).applyQuaternion(this._q2.copy(this._qhS).invert()),V=Math.atan2(P.x,P.z),q=Math.asin(wi(P.y,-1,1)),H=wi(V,-.75,.75),z=wi(q,-.45-.42*(1-(n.crawlBlend||0))*(1-(n.underSwim||0)),.9),G=Math.max(Math.abs(V-H),Math.abs(q-z));P.set(Math.sin(H)*Math.cos(z),Math.sin(z),Math.cos(H)*Math.cos(z)).applyQuaternion(this._qhS);let tt=mt(d),Q=this._f.set(0,1,0).applyQuaternion(this._qhS).multiplyScalar(tt);Q.y+=1-tt,Q.lengthSq()<1e-4&&Q.set(0,1,0),Q.normalize(),Math.abs(Q.dot(P))>.995&&Q.set(0,0,1).applyQuaternion(this._qhS),this._mat.lookAt(this._v.set(0,0,0),P,Q),this._qfp.setFromRotationMatrix(this._mat).premultiply(this._q.copy(Rc).slerp(this.qd,.5)),n.fp=this.blend<.5}this._fp.copy(this.eye);let p=1-Math.exp(-t*10),x=1-Math.exp(-t*5.5);this.pivot.x+=(this.chest.x-this.pivot.x)*p,this.pivot.z+=(this.chest.z-this.pivot.z)*p,this.pivot.y+=(this.chest.y+.22-this.pivot.y)*x;let v=mt(this.waves.sigHeight/16);this.push+=((this.auto?mt((45-(this.oxygen===void 0?100:this.oxygen))/40):0)-this.push)*(1-Math.exp(-t*.8));let M=(3.5+.7*v+1.8*mt(n.impactPeak-.6)+1.3*this.threat+2.8*(n.air||0)-.5*(n.crawlBlend||0)-1.2*this.push)*(1+.22*this.portrait)+(this.armAdd||0);this.arm+=(M-this.arm)*(1-Math.exp(-t*1.6));let R=Math.cos(this.pitch),y=this.yaw+this.orbit,E=this._f.set(Math.sin(y)*R,Math.sin(this.pitch),Math.cos(y)*R),T=this._v,_=this.holdAbove?0:ke(.7,1.8,i.eyeDepth);this.under+=(_-this.under)*(1-Math.exp(-t*(_>this.under?3.5:2.2)));let S=this.armOverride||this.arm,k=.5;for(let O=0;O<5&&(T.copy(this.pivot).addScaledVector(E,-S),T.y+=(.62+.16*S)*(1-.45*this.threat*(this.auto?1:0))+.25*this.portrait,!(this.under>.98));O++){let B=this.waves.sample(T.x,T.z,this._s).h,U=(T.x+this.pivot.x)*.5,F=(T.z+this.pivot.z)*.5,P=this.waves.sample(U,F,this._s).h,V=(T.y+this.pivot.y+.3)*.5,q=Math.max(B+k-T.y,P+.2-V);if(q<=0||S<=1.7){q>0&&(T.y+=q*(1-this.under));break}S=Math.max(1.7,S*.78)}if(this.armNow=S,this.tpPos.lerp(T,1-Math.exp(-t*7.5)),this.holdAbove){let O=this.waves.sample(this.tpPos.x,this.tpPos.z,this._s).h+1;this.tpPos.y<O&&(this.tpPos.y=O)}else if(this.under<.5){let O=this.waves.sample(this.tpPos.x,this.tpPos.z,this._s).h+.3;this.tpPos.y<O&&(this.tpPos.y=O)}let W=this._v2.copy(this.pivot).addScaledVector(i.vel,.04);if(W.y+=.34+1.1*this.threat+.25*this.portrait,W.addScaledVector(E,2.2),this._mat.lookAt(this.tpPos,W,Js),this._qtp.setFromRotationMatrix(this._mat),this._q.copy(Rc).slerp(this.qd,.45),this._qtp.premultiply(this._q),e.position.copy(this._fp).lerp(this.tpPos,l),e.quaternion.copy(this._qfp).slerp(this._qtp,l),l>0&&l<1){let O=this._fp.distanceTo(this.tpPos)*l,B=.32*(O/.28)*Math.exp(1-O/.28),U=.2*(O/.12)*Math.exp(1-O/.12),F=this._v2.set(0,0,-1).applyQuaternion(this._qfp);e.position.addScaledVector(F,U),e.position.y+=B}{let O=this.surfaceAtCam,B=e.matrixWorld.elements,U=O.nx*B[0]+O.nz*B[2],F=Math.max(-.16,Math.min(.16,-U*.38))*l*(1-this.under)*this.intensity;this.roll+=(F-this.roll)*(1-Math.exp(-t*1.6)),Math.abs(this.roll)>1e-4&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.set(0,0,1),this.roll))}this.fovKick+=(mt(n.impact-.6)*7-this.fovKick)*(1-Math.exp(-t*4));let Y=lt(76,66,l)+this.fovKick*this.intensity+4*this.threat*l+9*(n.air||0)*l+7*(n.crawlBlend||0)*l-5*this.push*l+this.portrait*lt(13,19,l);this.debugView&&(e.position.copy(this.debugView.pos),this._mat.lookAt(e.position,this.debugView.target,Js),e.quaternion.setFromRotationMatrix(this._mat));let N=0;if(this.cine){let O=this.cine;O.t+=t;let B=this.pivot,U=F=>(F=mt(F),F*F*(3-2*F));if(O.mode==="intro"){let F=1-U(O.t/O.dur);e.position.addScaledVector(E,-24*F),e.position.y+=17*F,this._v2.copy(B),this._v2.y+=.3,this._mat.lookAt(e.position,this._v2,Js),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,mt(F*3)),N=-8*F,O.t>=O.dur&&(this.cine=null)}else if(O.mode==="lift"){let F=O.yaw0+2.4+O.t*.13,P=4.2+O.t*.55,V=B.x-Math.sin(F)*P,q=B.z-Math.cos(F)*P;this._v.set(V,Math.max(this.waves.heightFast(V,q)+1.5,B.y-.9+O.t*.12),q),O.pos||(O.pos=e.position.clone()),O.pos.lerp(this._v,1-Math.exp(-t*(O.t<7?1.4:Math.max(.05,1.4-(O.t-7)*.5))));{let H=this.waves.heightFast(O.pos.x,O.pos.z)+1.1;O.pos.y<H&&(O.pos.y=H)}e.position.copy(O.pos),this._v2.copy(B),this._v2.y+=.9+Math.min(1.6,O.t*.2),this._mat.lookAt(e.position,this._v2,Js),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,mt(O.t*1.5)),N=-Math.min(22,8+O.t*1.5)}else O.mode==="death"&&(O.pos||(O.pos=e.position.clone()),O.pos.y+=.22*t,e.position.copy(O.pos),this._mat.lookAt(e.position,B,Js),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,1-Math.exp(-t*2)),N=-Math.min(10,O.t*2))}let D=.07;(Math.abs(Y+N-e.fov)>.01||Math.abs(D-e.near)>.002)&&(e.fov=Y+N,e.near=D,e.updateProjectionMatrix());{if(this.shiver>.02){let B=this.shiver*.0035*this.intensity*lt(1.6,.6,l),U=this.time;this._v.set(Math.sin(U*57)*B,Math.sin(U*61+1)*B,Math.sin(U*53+2)*B*.6);let F=this._v.length();F>1e-6&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.multiplyScalar(1/F),F))}let O=mt(n.effort*1.1)*this.intensity*(1-.6*this.under);if(O>.02){let B=n.strokePhase||0,U=this.time,F=lt(3.4,.6,l);e.position.y+=Math.sin(B*2)*.018*O*F;let P=(Math.sin(U*11.3)+Math.sin(U*17.9+1.3))*.0012*O,V=(Math.sin(U*9.7+2.1)+Math.sin(U*15.1))*.0012*O;this._v.set(P+Math.sin(B*2+.6)*.006*O*F,V+Math.sin(B)*.007*O*F,Math.sin(B)*.014*O*F);let q=this._v.length();q>1e-5&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.multiplyScalar(1/q),q))}}e.updateMatrixWorld(!0),this.ch.head.visible=e.position.distanceTo(this.eye)>.19,this.waves.sample(e.position.x,e.position.z,this.surfaceAtCam)}};var mo=class{constructor(t){this.canvas=t,this.keys=new Set,this.dx=0,this.dy=0,this.locked=!1,this.enabled=!1,this.pressed=new Set,this.onLockChange=null,this.mouseL=!1,this.mouseR=!1,this.lastLook=-100,window.addEventListener("keydown",e=>{e.repeat||(this.keys.add(e.code),this.pressed.add(e.code),this.enabled&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseL=this.mouseR=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.locked||(this.mouseL=this.mouseR=!1),this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("mousemove",e=>{this.locked&&(this.dx+=e.movementX,this.dy+=e.movementY,Math.abs(e.movementX)+Math.abs(e.movementY)>1&&(this.lastLook=performance.now()/1e3))}),document.addEventListener("mousedown",e=>{this.locked&&(e.button===0&&(this.mouseL=!0),e.button===2&&(this.mouseR=!0))}),document.addEventListener("mouseup",e=>{e.button===0&&(this.mouseL=!1),e.button===2&&(this.mouseR=!1)}),document.addEventListener("contextmenu",e=>{(this.locked||this.enabled)&&e.preventDefault()}),this.virtual=null,this.touch=null}lock(){if(this.canvas.requestPointerLock){let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}}unlock(){document.exitPointerLock&&document.exitPointerLock()}down(t){return this.keys.has(t)}axisX(){if(this.virtual)return this.virtual.x||0;let t=(this.down("KeyD")||this.down("ArrowRight")?1:0)-(this.down("KeyA")||this.down("ArrowLeft")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.x:0)))}axisZ(){if(this.virtual)return this.virtual.z||0;let t=(this.down("KeyW")||this.down("ArrowUp")?1:0)-(this.down("KeyS")||this.down("ArrowDown")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.z:0)))}swim(){return this.virtual?!!(this.virtual.swim||this.virtual.sprint||this.virtual.up):this.down("Space")||this.down("ShiftLeft")||this.down("ShiftRight")||this.mouseL||!!(this.touch&&this.touch.swim)}dive(){return this.virtual?!!this.virtual.dive:this.down("KeyF")||this.down("KeyQ")||this.mouseR||!!(this.touch&&this.touch.dive)}busy(){return Math.abs(this.axisX())+Math.abs(this.axisZ())>.05||this.swim()||this.dive()}consumeMouse(t){return t.x=this.dx,t.y=this.dy,this.dx=0,this.dy=0,t}endFrame(){this.pressed.clear()}};var go=class{constructor(t){this.waves=t,this.base=1,this.storm=1,this.locked=!1,this.wind=new w(26,0,0),this.windSpeed=26,this.gust=1,this.windAngle=0,this.rain=1,this.time=0}update(t){this.time+=t;let e=this.time,i=this.locked?0:(ei(e*.021,3)-.5)*.22+(ei(e*.09,5)-.5)*.08,n=mt(this.base+i*(.4+.6*this.base));this.storm+=(n-this.storm)*(1-Math.exp(-t*.25));let s=this.locked?0:(ei(e*.035,11)-.5)*.9;this.windAngle=this.waves.windAngle+s,this.gust=.78+.34*ei(e*.31,17)+.22*ei(e*1.3,23)*this.storm,this.windSpeed=lt(9,31,this.storm)*this.gust,this.wind.set(Math.cos(this.windAngle)*this.windSpeed,0,Math.sin(this.windAngle)*this.windSpeed);let a=this.locked?.9:.62+.38*ei(e*.05,29);this.rain=mt(lt(.25,1,this.storm)*a+.1*this.storm),at.uStorm.value=this.storm,at.uRain.value=this.rain,at.uWindDir.value.set(Math.cos(this.windAngle),Math.sin(this.windAngle)),at.uWindSpeed.value=this.windSpeed,at.uFogDensity.value=lt(1/5200,1/1500,this.rain)*(.8+.4*this.storm);let o=lt(1.25,.86,this.storm);at.uAmbient.value.set(.05*o,.06*o,.072*o),this.waves.setStorm(this.storm)}};var Sx=`
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
${Ys}
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
}`,Tx=`
precision highp float;
uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor; uniform float uIntensity;
varying vec2 vQ; varying float vA; varying float vSpot;
void main() {
  float across = 1.0 - vQ.x * vQ.x;
  float along = smoothstep(0.0, 0.25, vQ.y) * (1.0 - smoothstep(0.55, 1.0, vQ.y));
  float a = across * along * vA * uIntensity;
  // rain falling through the searchlight is what makes the beam visible: each streak lights up
  vec3 col = vec3(0.62, 0.68, 0.74) * (uAmbient * 3.4 + uFlashColor * uFlash * 2.2 + ${gn} * vSpot * 1.1);
  gl_FragColor = vec4(col, a * 0.26 * (1.0 + 2.2 * min(vSpot, 1.5)));
}`,Ax=`
attribute vec4 aSeed;
uniform float uTime; uniform float uTile; uniform float uIntensity;
${$n}
${Za}
${ts}
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
}`,Rx=`
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
}`;function Vd(r,t){let e=new Ki,i=t==="streak"?new Float32Array([-1,0,0,1,0,0,1,1,0,-1,1,0]):new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);e.setAttribute("position",new Wt(i,3)),e.setIndex([0,1,2,0,2,3]);let n=new Float32Array(r*4);for(let s=0;s<n.length;s++)n[s]=Math.random();return e.setAttribute("aSeed",new Qe(n,4)),e.instanceCount=r,e}var bo=class{constructor(t){this.group=new ce,this.offset=new w,this.vel=new w(8,-9,0),this.camVel=new w,this._lastCam=new w,this._has=!1;let e=(i,n,s,a)=>{let o={uBox:{value:new w(...n)},uOffset:{value:this.offset},uVel:{value:this.vel},uCamVel:{value:this.camVel},uStreak:{value:a},uWidth:{value:s},uPx:{value:.001},uIntensity:{value:1},uSpotPos:at.uSpotPos,uSpotDir:at.uSpotDir,uSpotP:at.uSpotP,uAmbient:at.uAmbient,uFlash:at.uFlash,uFlashColor:at.uFlashColor},h=new pt(Vd(i,"streak"),new se({uniforms:o,vertexShader:Sx,fragmentShader:Tx,transparent:!0,depthWrite:!1,side:Fe}));return h.frustumCulled=!1,h.renderOrder=20,h};this.near=e(Math.round(t.rain*.62),[22,16,22],.0024,.02),this.far=e(Math.round(t.rain*.38),[80,46,80],.007,.03),this.group.add(this.near,this.far),this.splashU={uWaveA:at.uWaveA,uWaveB:at.uWaveB,uBrkA:at.uBrkA,uBrkB:at.uBrkB,uBrkC:at.uBrkC,uTime:at.uTime,uTile:{value:34},uIntensity:{value:1},uAmbient:at.uAmbient,uFlash:at.uFlash,uFlashColor:at.uFlashColor},this.splash=new pt(Vd(t.splashes,"quad"),new se({uniforms:this.splashU,vertexShader:Ax,fragmentShader:Rx,transparent:!0,depthWrite:!1})),this.splash.frustumCulled=!1,this.splash.renderOrder=12,this.group.add(this.splash)}update(t,e,i,n,s,a){this.vel.set(i.x*.5,-8.6-1.4*n,i.z*.5),this.offset.addScaledVector(this.vel,t);for(let c of["x","y","z"])Math.abs(this.offset[c])>4e3&&(this.offset[c]%=4e3);this._has&&t>0&&this.camVel.copy(e.position).sub(this._lastCam).multiplyScalar(1/t),this.camVel.length()>40&&this.camVel.setLength(40),this._lastCam.copy(e.position),this._has=!0;let o=2*Math.tan(Ln.degToRad(e.fov)*.5)/Math.max(1,a),h=n*(1-s);for(let c of[this.near,this.far])c.material.uniforms.uPx.value=o,c.material.uniforms.uIntensity.value=h*(c===this.far?.8:1),c.visible=h>.01;this.splashU.uIntensity.value=h,this.splash.visible=h>.01}};var Cx=`
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
}`,Px=`
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
}`,vo=class{constructor(t=99){this.rnd=oi(t),this.group=new ce,this.strokes=[],this.age=1e9,this.active=!1,this.dir=new w(1,.3,0),this.pos=new w,this.dist=3e3,this.sheet=0,this.power=1,this.intensity=0,this.pendingThunder=[],this.onThunder=null,this.time=0,this.next=6,this.rate=1,this.mat=new se({uniforms:{uWidth:{value:6},uPower:{value:0},uBranchK:{value:1},uColor:{value:new w(.82,.88,1)},uFog:{value:1}},vertexShader:Cx,fragmentShader:Px,transparent:!0,blending:Xn,depthWrite:!1,depthTest:!0,side:Fe}),this.bolt=new pt(new le,this.mat),this.bolt.frustumCulled=!1,this.bolt.visible=!1,this.bolt.renderOrder=2,this.group.add(this.bolt);let e=document.createElement("canvas");e.width=e.height=128;let i=e.getContext("2d"),n=i.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(255,255,255,0.55)"),n.addColorStop(.45,"rgba(255,255,255,0.16)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,128,128);let s=new Oi(e);s.colorSpace=qe,this.glows=[0,1,2].map(()=>{let a=new Pa(new wr({map:s,color:0,blending:Xn,depthWrite:!1,transparent:!0,fog:!1}));return a.visible=!1,a.renderOrder=1,this.group.add(a),a})}_buildBolt(t,e){let i=this.rnd,n=[],s=(m,b,g,p,x,v)=>{let M=[m,b],R=m.distanceTo(b),y=R*(x===0?.17:.24);for(let T=0;T<v;T++){let _=[M[0]];for(let S=0;S<M.length-1;S++){let k=M[S].clone().lerp(M[S+1],.5);k.x+=(i()-.5)*y,k.z+=(i()-.5)*y,k.y+=(i()-.5)*y*.4,_.push(k,M[S+1])}M=_,y*=.6}let E=M.length-1;for(let T=0;T<E;T++){let _=T/E,S=(T+1)/E;n.push([M[T],M[T+1],lt(g,p,Math.pow(_,.8)),lt(g,p,Math.pow(S,.8)),x>0?1:0]);let k=x===0?.085*(_<.72?1:.35):x===1?.045:.02;if(x<3&&T>2&&T<E-3&&i()<k){let W=M[T+1].clone().sub(M[T]).normalize(),Y=R*(x===0?.1+i()*.3:.18+i()*.3)*(1-.45*_),N=i()*6.283,D=.35+i()*.55,O=new w(W.x+Math.cos(N)*D,W.y-.15-i()*.3,W.z+Math.sin(N)*D).normalize(),B=lt(g,p,_)*(.5+i()*.25);s(M[T].clone(),M[T].clone().addScaledVector(O,Y),B,.02,x+1,x===0?5:4)}}};s(t,e,1,.82,0,7);let a=n.length,o=new Float32Array(a*4*3),h=new Float32Array(a*4*3),c=new Float32Array(a*4),l=new Float32Array(a*4),u=new Float32Array(a*4),d=new Uint32Array(a*6);for(let m=0;m<a;m++){let[b,g,p,x,v]=n[m],M=g.clone().sub(b).normalize(),R=(y,E,T,_)=>{let S=(m*4+y)*3;o[S]=E.x,o[S+1]=E.y,o[S+2]=E.z,h[S]=M.x,h[S+1]=M.y,h[S+2]=M.z,c[m*4+y]=T,l[m*4+y]=_,u[m*4+y]=v};R(0,b,-1,p),R(1,b,1,p),R(2,g,1,x),R(3,g,-1,x),d.set([m*4,m*4+1,m*4+2,m*4,m*4+2,m*4+3],m*6)}let f=new le;f.setAttribute("position",new Wt(o,3)),f.setAttribute("normal",new Wt(h,3)),f.setAttribute("aSide",new Wt(c,1)),f.setAttribute("aBright",new Wt(l,1)),f.setAttribute("aBranch",new Wt(u,1)),f.setIndex(new Wt(d,1)),this.bolt.geometry.dispose(),this.bolt.geometry=f}strike(t,e={}){let i=this.rnd,n=e.azimuth!==void 0?e.azimuth:i()*Math.PI*2;this.dist=e.dist!==void 0?e.dist:500+Math.pow(i(),1.6)*5e3,this.sheet=e.sheet!==void 0?e.sheet:i()<.38?1:0,this.power=e.power!==void 0?e.power:lt(1.45,.55,mt(this.dist/7e3))*(.8+i()*.4),this.pos.set(t.x+Math.cos(n)*this.dist,0,t.z+Math.sin(n)*this.dist);let s=1300+i()*700;this.dir.set(Math.cos(n)*this.dist,this.sheet?s:s*.55,Math.sin(n)*this.dist).normalize(),this.strokes.length=0;let a=2+Math.floor(i()*4),o=0;for(let h=0;h<a;h++)this.strokes.push({t:o,peak:(h===0?1:.35+i()*.65)*this.power,tau:.045+i()*.09}),o+=.045+i()*.13;if(this.age=0,this.active=!0,!this.sheet){let h=new w(this.pos.x+(i()-.5)*500,s,this.pos.z+(i()-.5)*500);this._buildBolt(h,new w(this.pos.x,-5,this.pos.z)),this.mat.uniforms.uWidth.value=Math.max(5,this.dist*.0075),this.boltTop=h.clone()}{let h=this.sheet?this.pos.x:(this.boltTop.x+this.pos.x)*.5,c=this.sheet?this.pos.z:(this.boltTop.z+this.pos.z)*.5,l=this.glows;this.sheet?(l[0].position.set(this.pos.x,s*.9,this.pos.z),l[0].scale.setScalar(this.dist*.75),l[1].position.set(this.pos.x+(i()-.5)*this.dist*.4,s*.8,this.pos.z+(i()-.5)*this.dist*.4),l[1].scale.setScalar(this.dist*.45),l[2].scale.setScalar(.001)):(l[0].position.set(this.boltTop.x,s*.93,this.boltTop.z),l[0].scale.setScalar(this.dist*.34),l[1].position.set(h,s*.48,c),l[1].scale.setScalar(this.dist*.22),l[2].position.set(this.pos.x,40,this.pos.z),l[2].scale.setScalar(this.dist*.12))}return this.pendingThunder.push({at:this.time+Math.min(2.2,this.dist/343*.3),dist:this.dist,power:this.power,pos:this.pos.clone().setY(600)}),this}update(t,e,i,n=!0){this.time+=t,n&&(this.next-=t*i,this.next<=0&&(this.strike(e),this.next=this.rnd()<.22?1.2+this.rnd()*2.5:7+this.rnd()*22));let s=0;if(this.active){this.age+=t;let a=!1;for(let o of this.strokes){let h=this.age-o.t;if(h<0){a=!0;continue}let c=o.peak*Math.min(1,h/.008)*Math.exp(-h/o.tau);c>.004&&(a=!0),s+=c}s*=.85+.3*Math.sin(this.age*190)*Math.sin(this.age*67),a||(this.active=!1,s=0)}this.intensity=Math.max(0,s),at.uFlash.value=this.intensity*.62,this.active&&(at.uFlashDir.value.copy(this.dir),at.uFlashSheet.value=this.sheet),this.bolt.visible=this.active&&!this.sheet&&this.intensity>.01,this.mat.uniforms.uPower.value=this.intensity*30,this.mat.uniforms.uBranchK.value=Math.exp(-this.age/.17);{let a=Math.exp(-this.dist*at.uFogDensity.value*.55),o=this.active?this.intensity*a:0,h=this.sheet?[.14,.09,0]:[.075,.03,.05];for(let c=0;c<3;c++){let l=this.glows[c];l.visible=o*h[c]>.002,l.material.color.setRGB(.62*o*h[c],.7*o*h[c],1*o*h[c])}}this.mat.uniforms.uFog.value=Math.exp(-this.dist*at.uFogDensity.value*.55);for(let a=this.pendingThunder.length-1;a>=0;a--)if(this.time>=this.pendingThunder[a].at){let o=this.pendingThunder.splice(a,1)[0];this.onThunder&&this.onThunder(o)}}};var Lx=`
attribute vec4 aPos;      // xyz, size
attribute vec4 aData;     // alpha, rotation, stretch, kind
attribute vec3 aVel;
attribute vec2 aMisc;     // age 0..1, seed
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist; varying float vAge; varying float vSeed; varying float vSpot;
${Ys}
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
}`,Ix=`
precision highp float;
uniform sampler2D uTex; uniform sampler2D uSplashTex; uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor;
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist; varying float vAge; varying float vSeed; varying float vSpot;
void main() {
  vec3 light = uAmbient * 2.6 + uFlashColor * uFlash * 1.9 + ${gn} * min(vSpot, 1.0) * 0.14;
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
}`;function Fx(r=31,t=256){let e=oi(r),i=new Float32Array(4096);for(let c=0;c<i.length;c++)i[c]=e();let n=(c,l,u)=>i[((c*73+l*151+u*37)%4096+4096)%4096],s=(c,l,u)=>{let d=Math.floor(c),f=Math.floor(l),m=c-d,b=l-f,g=m*m*(3-2*m),p=b*b*(3-2*b);return(n(d,f,u)*(1-g)+n(d+1,f,u)*g)*(1-p)+(n(d,f+1,u)*(1-g)+n(d+1,f+1,u)*g)*p},a=(c,l,u,d)=>{let f=.5,m=0;for(let b=0;b<d;b++)m+=f*s(c,l,u+b*7),c=c*2.03+11.3,l=l*2.03+5.7,f*=.5;return m},o=new Uint8Array(t*2*t*2*4);for(let c=0;c<2;c++)for(let l=0;l<2;l++){let u=l+c*2+1;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let m=(f+.5)/t*2-1,b=(d+.5)/t*2-1,g=m+(a(m*2.2+3,b*2.2,u+20,3)-.5)*.7,p=b+(a(m*2.2,b*2.2+9,u+40,3)-.5)*.7,x=Math.hypot(g,p)*(.92+.5*(a(Math.atan2(p,g)*1.6+5,1.5,u+60,2)-.5)),v=Math.max(0,1-x*1.08),M=Math.max(0,Math.min(1,(a(g*3.1+7,p*3.1+2,u,4)*1.5-.22)*Math.pow(v,.7)*1.9)),R=a(m*15+1,b*15+4,u+80,3),y=((c*t+d)*t*2+l*t+f)*4;o[y]=Math.round(M*255),o[y+1]=Math.round(R*255),o[y+2]=0,o[y+3]=255}}let h=new Ni(o,t*2,t*2,de,je);return h.minFilter=ee,h.magFilter=ee,h.generateMipmaps=!1,h.needsUpdate=!0,h}function Dx(r=77,t=160){let e=oi(r),i=8,n=16,s=4,a=5,o=document.createElement("canvas");o.width=o.height=t*i;let h=o.getContext("2d");h.fillStyle="#000",h.fillRect(0,0,o.width,o.height),h.globalCompositeOperation="lighter",h.lineCap="round";let c=.5435,l=(t-2*a)/1.6,u=(t-2*a-3)/1.02,d=t/160,f=(b,g,p)=>{let x=Math.min(1,Math.max(0,(p-b)/(g-b)));return x*x*(3-2*x)};for(let b=0;b<s;b++){let g=(e()-.5)*.14,p=[],x=7+Math.floor(e()*4);for(let M=0;M<x;M++){let R=g+(e()<.3?(e()-.5)*.26:(e()<.5?-1:1)*(.22+.55*e())),y=(.58+.42*e())*(1-.3*Math.min(1,Math.abs(R-g)/.8)),E=10+Math.floor(e()*8),T=.9+1.2*e(),_=.02+.05*e();for(let S=0;S<E;S++){let k=.28+.72*(S+e()*.7)/E;p.push({a:R+(e()-.5)*_*(1+2*(1-k)),v:y*k,r:T*(S===E-1?2.5:.9+1.5*e()*e())*(.7+.5*k),fine:.25+.3*k,kd:.45,die:.8+.2*e(),al:.5+.3*e()})}}for(let M=0;M<230;M++)p.push({a:g+(e()+e()+e()-1.5)*.85,v:.2+.74*Math.pow(e(),1.1),r:.6+1*e()*e(),fine:.75+.25*e(),kd:.5+.4*e(),die:.45+.55*e(),al:.3+.35*e()});let v=[];for(let M=0;M<14;M++)v.push({x:e()-.5,y:e(),r:.5+.5*e()});for(let M=0;M<n;M++){let R=M/(n-1),y=.14+R*3.56,E=M%i*t,T=(i-1-(b*2+Math.floor(M/i)))*t;h.save(),h.beginPath(),h.rect(E+a,T+a,t-2*a,t-2*a),h.clip();let _=E+t/2,S=T+t-a-1,k=Math.sin(Math.min(1,R*3.2)*Math.PI)*.9+.1*(1-R),W=.1+.22*Math.min(1,R*2.2);for(let Y of v){let N=_+Y.x*W*2*l,D=S-Y.y*.1*k*u,O=(.035+.045*Y.r)*l*(.6+.6*k),B=h.createRadialGradient(N,D,0,N,D,O);B.addColorStop(0,`rgba(48,${Math.round(48*.22)},0,${.3*(1-R)*(.4+.6*k)})`),B.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=B,h.beginPath(),h.arc(N,D,O,0,6.283),h.fill()}for(let Y of p){let N=Math.sin(Y.a)*Y.v,D=Math.cos(Y.a)*Y.v,O=Math.exp(-Y.kd*y),B=N*(1-O)/Y.kd,U=D*y-.5*c*y*y;if(U<0)continue;let F=N*O*l,P=-(D-c*y)*u,V=_+B*l,q=S-U*u,H=Math.max(0,1-y/1.5),z=Y.fine*(1-.7*H),G=Y.al*(1-f(Y.die-.22,Y.die,R))*(.6+.4*H);if(G<.02)continue;let tt=.105+.02*H;h.strokeStyle=`rgba(48,${Math.round(48*z)},0,${G})`,h.lineWidth=Math.max(1,Y.r*d*(.9+2.95*H)),h.beginPath(),h.moveTo(V-F*tt,q-P*tt),h.lineTo(V,q),h.stroke()}h.restore()}}let m=new Oi(o);return m.colorSpace=qe,m.minFilter=Ye,m.magFilter=ee,m.generateMipmaps=!0,m}var xo=class{constructor(t,e=6e3){this.waves=t,this.max=e,this._rx=1,this._rz=0,this.px=new Float32Array(e),this.py=new Float32Array(e),this.pz=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vz=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.grow=new Float32Array(e),this.kind=new Float32Array(e),this.stretch=new Float32Array(e),this.rot=new Float32Array(e),this.alpha=new Float32Array(e),this.seed=new Float32Array(e),this.head=0,this.alive=0;let i=new Ki;i.setAttribute("position",new Wt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]);let n=s=>{let a=new Qe(new Float32Array(e*s),s);return a.setUsage(Bi),a};this.aPos=n(4),this.aData=n(4),this.aVel=n(3),this.aMisc=n(2),i.setAttribute("aPos",this.aPos),i.setAttribute("aData",this.aData),i.setAttribute("aVel",this.aVel),i.setAttribute("aMisc",this.aMisc),i.instanceCount=0,this.mesh=new pt(i,new se({uniforms:{uTex:{value:Fx()},uSplashTex:{value:Dx()},uAmbient:at.uAmbient,uFlash:at.uFlash,uFlashColor:at.uFlashColor,uSpotPos:at.uSpotPos,uSpotDir:at.uSpotDir,uSpotP:at.uSpotP},vertexShader:Lx,fragmentShader:Ix,transparent:!0,depthWrite:!1})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=15,this._s=gi(),this._tick=0,this.emitAcc=0,this.near=!1,this.hot=[]}emit(t,e,i,n,s,a,o,h,c,l=0,u=1,d=-1){let f=this.head;this.head=(this.head+1)%this.max,this.px[f]=t,this.py[f]=e,this.pz[f]=i,this.vx[f]=n,this.vy[f]=s,this.vz[f]=a,this.life[f]=o,this.maxLife[f]=o,this.size[f]=h,this.kind[f]=c,this.grow[f]=l,this.rot[f]=c>2.5?this.lean||0:c>1.5?0:Math.random()*6.283,this.alpha[f]=u,this.seed[f]=Math.random()*.999+(this.near?2:0),this.stretch[f]=d>=0?d:c<.5?1:c>1.5?2.6:.35}burst(t,e,i,n,s,a=0,o=0){let h=this.near;this.near=!0;let c=Math.min(1.9,.42+n*.27),l=s.x*.1,u=s.z*.1,d=Math.min(230,Math.round(8+n*38));for(let g=0;g<d;g++){let p=Math.random()*6.283,x=.12+Math.random()*.34*c,v=(1+2.4*Math.random())*c,M=(1.8+3.6*Math.pow(Math.random(),1.4))*c;this.emit(t+Math.cos(p)*x,e+.03+Math.random()*.1,i+Math.sin(p)*x,Math.cos(p)*v+a*v*1.5+l,M,Math.sin(p)*v+o*v*1.5+u,.55+Math.random()*.75,.01+Math.pow(Math.random(),2)*.026,0,0,.95)}let f=Math.min(60,Math.round(n*10));for(let g=0;g<f;g++){let p=Math.random()*6.283,x=Math.random()*.7*c;this.emit(t+Math.cos(p)*.08,e+.05,i+Math.sin(p)*.08,Math.cos(p)*x+a*c+l,(3.2+4.2*Math.random())*c,Math.sin(p)*x+o*c+u,.6+Math.random()*.7,.012+Math.random()*.022,0,0,.95)}let m=Math.max(1,Math.min(5,Math.round(n*1.1)));for(let g=0;g<m;g++){let p=Math.random()*6.283,x=.24*c*Math.random(),v=(.55+.45*Math.random())*c*(g?.8:1.15);this.lean=(Math.random()-.5)*.3+(a*this._rx+o*this._rz)*.4,this.emit(t+Math.cos(p)*x,e-.03,i+Math.sin(p)*x,a*.5*c,0,o*.5*c,.62*Math.sqrt(v/.45)*(.92+.16*Math.random()),v,3,0,.8,0)}this.lean=0;let b=Math.max(0,Math.min(14,Math.round(n*2.8-2.6)));for(let g=0;g<b;g++){let p=Math.random()*6.283,x=Math.random()*.9*c;this.emit(t+Math.cos(p)*.3,e+.15+Math.random()*.3,i+Math.sin(p)*.3,Math.cos(p)*x+l*2,.5+Math.random()*1.1,Math.sin(p)*x+u*2,.9+Math.random()*1.1,(.24+Math.random()*.3)*c,1,.5,.2,.3)}this.near=h}slap(t,e,i,n,s,a,o=0,h=0,c=0,l=1){let u=.62+.38*Math.min(2.4,n),d=this.near;this.near=!0;let f=n>1.15?2:1,m=s*this._rx+a*this._rz;for(let g=0;g<f;g++){let p=(.5+.16*Math.random())*u*(.62+.38*l)*(g?.7:1);this.lean=m*.42+(Math.random()-.5)*.16,this.emit(t+(Math.random()-.5)*.08+s*.05,e-.02,i+(Math.random()-.5)*.08+a*.05,o+s*.4*u,h,c+a*.4*u,.62*Math.sqrt(p/.45)*(.92+.16*Math.random()),p,3,0,.8,0)}this.lean=0;let b=Math.round(8+n*16);for(let g=0;g<b;g++){let p=Math.random()*6.283,x=Math.random(),v=(.3+1.6*x*x)*u,M=(1.4+2.8*Math.pow(Math.random(),1.2))*u,R=Math.random(),y=R<.55?.01+Math.random()*.012:R<.9?.02+Math.random()*.016:.036+Math.random()*.022;this.emit(t+Math.cos(p)*.08*u,e+.02+Math.random()*.08,i+Math.sin(p)*.08*u,o+Math.cos(p)*v+s*(.3+1.2*Math.random())*u,h+M,c+Math.sin(p)*v+a*(.3+1.2*Math.random())*u,.36+Math.random()*.44,y,0,0,1)}this.near=d}fling(t,e,i,n,s,a,o){let h=this.near;if(this.near=!0,o>.45){let l=(.26+.14*Math.random())*(.6+.5*o),u=Math.hypot(n,a)+1e-4;this.lean=(n*this._rx+a*this._rz)/u*Math.min(1,u/3)*.5,this.emit(t,e-.04,i,n*.25,0,a*.25,.62*Math.sqrt(l/.45),l,3,0,.7,0),this.lean=0}let c=Math.round(10+o*22);for(let l=0;l<c;l++){let u=.2+.8*Math.random(),d=Math.random();this.emit(t+(Math.random()-.5)*.12,e+Math.random()*.08,i+(Math.random()-.5)*.12,n*u+(Math.random()-.5)*1.3,s*u+.5+Math.random()*1.6,a*u+(Math.random()-.5)*1.3,.38+Math.random()*.5,d<.6?.01+Math.random()*.012:d<.93?.022+Math.random()*.018:.04+Math.random()*.025,0,0,1)}this.near=h}seedCrests(t,e,i,n,s){let a=this.waves,o=this._s;this.hot.length=0;let h=Math.round(s*(.5+.5*n)),c=Math.hypot(i.x,i.z)+.001;for(let u=0;u<h;u++){let d=Math.random()*6.283,f=3+Math.pow(Math.random(),1.6)*95,m=e.x+Math.cos(d)*f,b=e.z+Math.sin(d)*f;a.sample(m,b,o);let g=Math.max(0,.42-o.jac)*2.4,p=Math.max(g,o.aer*1.6,o.turb*.5);if(p<.05)continue;(this.hot.length<6||p>this.hot[this.hot.length-1].amount)&&(this.hot.push({x:m,y:o.h,z:b,amount:p}),this.hot.sort((v,M)=>M.amount-v.amount),this.hot.length>6&&(this.hot.length=6));let x=Math.min(12,Math.round(2+p*6));for(let v=0;v<x;v++){let M=Math.random()<.36,R=(Math.random()-.5)*2.4,y=(Math.random()-.5)*2.4,E=(.8+2.8*Math.random())*(.6+p);this.emit(m+R,o.h+.05+Math.random()*.25,b+y,o.vx+i.x*(.22+.3*Math.random()),o.vy*.5+E,o.vz+i.z*(.22+.3*Math.random()),M?1.4+Math.random()*1.8:.6+Math.random()*.9,M?.4+Math.random()*.7:.014+Math.pow(Math.random(),2)*.04,M?1:0,M?1.2:0,M?.2:.9)}}let l=Math.round(s*.34*n*n);for(let u=0;u<l;u++){let d=Math.random()*6.283,f=2+Math.pow(Math.random(),1.3)*48,m=e.x+Math.cos(d)*f,b=e.z+Math.sin(d)*f;a.sample(m,b,o);let g=Math.max(0,-(o.nx*i.x+o.nz*i.z)/c);if(!(Math.random()>.35+1.6*g))for(let p=0;p<2;p++)this.emit(m+(Math.random()-.5)*3,o.h+.1+Math.random()*.5,b+(Math.random()-.5)*3,o.vx+i.x*(.45+.4*Math.random()),.4+Math.random()*1.6,o.vz+i.z*(.45+.4*Math.random()),.6+Math.random()*.9,.2+Math.random()*.3,2,.25,.07,1.1)}}seedBreakers(t,e,i){let n=this.waves;for(let s of n.breakers){if(!s.active||s.height<2)continue;let a=s.brk<.01?Math.min(.34,Math.max(0,(s.height-3.5)/18)):0,o=Math.max(s.curl,s.brk*.8,s.turb*.35,a),h=o===a;if(o<.05)continue;let c=e.x-s.ox,l=e.z-s.oz,u=-c*s.dz+l*s.dx,d=c*s.dx+l*s.dz-s.s;if(Math.abs(d)>160+s.height*3)continue;let f=Math.min(2.2,.7+s.height/16);this.emitAcc+=t*620*o*Math.min(1.6,s.height/8)*(this.thin===void 0?1:this.thin);let m=Math.min(130,Math.floor(this.emitAcc));this.emitAcc-=m;for(let b=0;b<m;b++){let g=u+(Math.random()-.5)*110*f;if(Math.exp(-(g*g)/(s.width*s.width))<.15)continue;let v=2.6*Math.sin(g*.047+s.seed*.6)+1.2*Math.sin(g*.13+s.seed*2.1)+(h?(Math.random()-.5)*s.front*.45:(Math.random()-.35)*s.front*1.3),M=s.ox+s.dx*(s.s+v)-s.dz*g,R=s.oz+s.dz*(s.s+v)+s.dx*g,y=n.heightFast(M,R)+Math.random()*.6,E=Math.random()<(s.mega?.14:.26)*(this.thin===void 0?1:this.thin),T=s.speed*(.55+.6*Math.random());this.emit(M,y,R,s.dx*T+i.x*.2,(1.5+5.5*Math.random())*(.5+o)*f,s.dz*T+i.z*.2,E?2+Math.random()*2.4:.8+Math.random()*1.1,E?Math.min(3,(.7+Math.random()*1.2)*f):.02+Math.pow(Math.random(),2)*.07,E?1:0,E?1.4:0,E?.17:.9,E?.5:1)}}}update(t,e,i){let n=this.max,s=this.waves,a=0,o=this.aPos.array,h=this.aData.array,c=this.aVel.array,l=this.aMisc.array;this._tick=(this._tick+1)%3;for(let u=0;u<n;u++){let d=this.life[u];if(d<=0||(d-=t,this.life[u]=d,d<=0))continue;let f=this.kind[u],m=this.seed[u]>=2;if(f>2.5)this.px[u]+=this.vx[u]*t,this.py[u]+=this.vy[u]*t,this.pz[u]+=this.vz[u]*t;else{let x=m?f>.5?.35:.06:f>.5?2.4:.5,v=Math.exp(-x*t);this.vx[u]=i.x+(this.vx[u]-i.x)*v,this.vz[u]=i.z+(this.vz[u]-i.z)*v,this.vy[u]=(this.vy[u]-(f>.5?m?8.2:2.6:9.81)*t)*(f>.5&&!m?v:1),this.px[u]+=this.vx[u]*t,this.py[u]+=this.vy[u]*t,this.pz[u]+=this.vz[u]*t}if(this.size[u]+=this.grow[u]*t,f<2.5&&u%3===this._tick&&this.vy[u]<0&&this.py[u]<s.heightFast(this.px[u],this.pz[u])-.12){this.life[u]=0;continue}let b=1-d/this.maxLife[u],g=f<.5?Math.min(1,(1-b)*6):f>2.5?Math.min(1,b*14):Math.min(1,b*9)*Math.min(1,(1-b)*3),p=a*4;o[p]=this.px[u],o[p+1]=this.py[u],o[p+2]=this.pz[u],o[p+3]=this.size[u],h[p]=this.alpha[u]*g,h[p+1]=this.rot[u],h[p+2]=this.stretch[u],h[p+3]=f,c[a*3]=this.vx[u],c[a*3+1]=this.vy[u],c[a*3+2]=this.vz[u],l[a*2]=b,l[a*2+1]=this.seed[u],a++}this.alive=a,this.mesh.geometry.instanceCount=a,this.aPos.needsUpdate=!0,this.aData.needsUpdate=!0,this.aVel.needsUpdate=!0,this.aMisc.needsUpdate=!0}};var kx=`
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
}`,zx=`
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
}`,Ux=`
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
}`,Nx=`
precision highp float;
uniform vec3 uLight;
varying vec2 vUv; varying float vA;
void main() {
  if (dot(vUv, vUv) > 1.0 || vA < 0.35) discard;
  gl_FragColor = vec4(uLight * 0.55, 1.0);
}`;function Gd(r,t){let e=new Ki;if(e.setAttribute("position",new Wt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),e.setIndex([0,1,2,0,2,3]),t){let i=new Float32Array(r*t);for(let n=0;n<i.length;n++)i[n]=Math.random();e.setAttribute("aSeed",new Qe(i,t))}return e.instanceCount=r,e}var yo=class{constructor(t,e){this.waves=t,this.group=new ce,this.under=0,this.isUnder=!1,this.depth=0,this.aeration=0,this.burst=0,this.onEnter=null,this.onExit=null,this.light=new w;let i=this.max=e.bubbles;this.bx=new Float32Array(i),this.by=new Float32Array(i),this.bz=new Float32Array(i),this.bvx=new Float32Array(i),this.bvz=new Float32Array(i),this.br=new Float32Array(i),this.bl=new Float32Array(i),this.bp=new Float32Array(i),this.head=0;let n=Gd(i,0);this.aPos=new Qe(new Float32Array(i*4),4),this.aPos.setUsage(Bi),this.aSeed=new Qe(new Float32Array(i),1),this.aSeed.setUsage(Bi),n.setAttribute("aPos",this.aPos),n.setAttribute("aSeed",this.aSeed),n.instanceCount=0,this.bubbles=new pt(n,new se({uniforms:{uPx:{value:.001},uLight:{value:this.light}},vertexShader:kx,fragmentShader:zx})),this.bubbles.frustumCulled=!1,this.bubbles.renderOrder=8,this.moteOffset=new w,this.motes=new pt(Gd(e.motes,4),new se({uniforms:{uBox:{value:new w(7,7,7)},uOffset:{value:this.moteOffset},uPx:{value:.001},uTime:at.uTime,uLight:{value:this.light}},vertexShader:Ux,fragmentShader:Nx})),this.motes.frustumCulled=!1,this.motes.renderOrder=8,this.motes.visible=!1,this.group.add(this.bubbles,this.motes),this._w={vx:0,vy:0,vz:0},this._tick=0,this._exhale=0,this._aerAcc=0,this._kick=0,this._n=new w}bubble(t,e,i,n,s=6,a=0,o=0){let h=this.head;this.head=(this.head+1)%this.max,this.bx[h]=t,this.by[h]=e,this.bz[h]=i,this.br[h]=n,this.bl[h]=s,this.bp[h]=Math.random()*6.283,this.bvx[h]=a,this.bvz[h]=o}burstAt(t,e,i,n=1){for(let s=0;s<e;s++){let a=Math.random()*6.283,o=Math.acos(2*Math.random()-1),h=i*Math.cbrt(Math.random());this.bubble(t.x+Math.sin(o)*Math.cos(a)*h,t.y+Math.cos(o)*h,t.z+Math.sin(o)*Math.sin(a)*h,(.002+Math.pow(Math.random(),3)*.02)*n,2.5+Math.random()*5,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2)}}update(t,e,i,n,s,a,o,h,c,l){let u=i,d=e.position,f=this._n.set(u.nx,u.ny,u.nz),m=f.x*0+f.y*(d.y-u.h)+f.z*0;this.depth=-m,o.u.uWaterPlane.value.set(f.x,f.y,f.z,-(f.x*d.x+f.y*u.h+f.z*d.z)),o.u.uUnderAmount.value=m<.4?1:0;let b=this.isUnder;this.isUnder=b?m<.03:m<-.03;let g=1-ke(-.12,.05,m);this.under+=(g-this.under)*(1-Math.exp(-t*18)),this.isUnder&&!b&&this.onEnter&&this.onEnter(),!this.isUnder&&b&&this.onExit&&this.onExit();let p=Math.max(0,this.depth),x=at.uAmbient.value,v=at.uFlash.value,M=at.uFlashColor.value,R=Math.exp(-p*.085);o.u.uUnderColor.value.set((x.x*.9+M.x*v*.5)*.1*R,(x.y*.9+M.y*v*.5)*.3*R,(x.z*.9+M.z*v*.5)*.38*R),this.burst=Math.max(0,this.burst-t*.7);let y=Math.min(1,(u.aer*1.15+this.burst*.8)*Math.exp(-p/3.2)+u.turb*.22*Math.exp(-p/4.5));this.aeration+=(y-this.aeration)*(1-Math.exp(-t*(y>this.aeration?12:1.6))),o.u.uAeration.value=this.aeration*this.under;let E=1+2.8*this.aeration;o.u.uUnderExt.value.set(.3*E,.13*E,.1*E),o.u.uUnderDistort.value=.004+.01*Math.min(1,u.turb+this.aeration),o.u.uShaft.value=(.9-.5*h.storm+v*3)*Math.exp(-p*.12),o.u.uExposureBias.value=1+(.62*Math.exp(-p*.045)-1)*this.under;let T=2.6*R*(1+5*this.aeration);this.light.set((x.x*T+M.x*v*.8)*1,(x.y*T+M.y*v*.8)*1.25,(x.z*T+M.z*v*.8)*1.35);let _=2*Math.tan(Ln.degToRad(e.fov)*.5)/Math.max(1,l);if(this.bubbles.material.uniforms.uPx.value=_,this.motes.material.uniforms.uPx.value=_,a.wasUnder&&a.alive)for(this._exhale+=t*(5+16*s.effort+22*mt((40-a.oxygen)/40));this._exhale>=1;)this._exhale-=1,this.bubble(c.x+(Math.random()-.5)*.06,c.y,c.z+(Math.random()-.5)*.06,.003+Math.random()*.012,5,n.vel.x*.5,n.vel.z*.5);if(n.subFrac>.5)for(this._kick+=t*Math.min(140,n.relSpeed*n.relSpeed*3.2);this._kick>=1;){this._kick-=1;let D=n.points[2+(Math.random()*9|0)].world;this.bubble(D.x+(Math.random()-.5)*.3,D.y+(Math.random()-.5)*.3,D.z+(Math.random()-.5)*.3,.002+Math.random()*.007,3+Math.random()*3)}if(this.under>.3&&this.aeration>.04){this._aerAcc+=t*900*this.aeration;let D=Math.min(60,Math.floor(this._aerAcc));for(this._aerAcc-=D;D-- >0;){let O=Math.random()*6.283,B=.4+Math.random()*3.6,U=(Math.random()-.4)*3.2;this.bubble(d.x+Math.cos(O)*B,d.y+U,d.z+Math.sin(O)*B,.002+Math.pow(Math.random(),2.5)*.03,2+Math.random()*4,(Math.random()-.5)*2,(Math.random()-.5)*2)}}let S=this.waves,k=this.aPos.array,W=this.aSeed.array,Y=0;this._tick=(this._tick+1)%4;let N=S.breakers.some(D=>D.active&&(D.roll>.01||D.turb>.01));for(let D=0;D<this.max;D++){let O=this.bl[D];if(O<=0)continue;O-=t,this.bl[D]=O;let B=this.br[D],U=.18+2.6*Math.sqrt(B);this.bp[D]+=t*(5+30*B/.02);let F=this.bvx[D]+Math.sin(this.bp[D])*.12,P=U,V=this.bvz[D]+Math.cos(this.bp[D]*.8)*.12;if(N){let z=this._w;z.vx=0,z.vy=0,z.vz=0,S.breakerFlow(this.bx[D],this.by[D],this.bz[D],u.h,z),F+=z.vx,P+=z.vy,V+=z.vz}let q=Math.exp(-t*1.5);if(this.bvx[D]*=q,this.bvz[D]*=q,this.bx[D]+=F*t,this.by[D]+=P*t,this.bz[D]+=V*t,D%4===this._tick&&this.by[D]>S.heightFast(this.bx[D],this.bz[D])-.02){this.bl[D]=0;continue}if(O<=0)continue;let H=Y*4;k[H]=this.bx[D],k[H+1]=this.by[D],k[H+2]=this.bz[D],k[H+3]=B*Math.min(1,O*2),W[Y]=this.bp[D],Y++}this.bubbles.geometry.instanceCount=Y,this.aPos.needsUpdate=!0,this.aSeed.needsUpdate=!0,this.bubbles.visible=Y>0,this.motes.visible=this.under>.02,this.moteOffset.addScaledVector(n.relFlow,t*.6),this.moteOffset.y-=t*.01}};function Cc(r,t,e){let i=Math.floor(r.sampleRate*t),n=r.createBuffer(1,i,r.sampleRate),s=n.getChannelData(0),a=0,o=0,h=0,c=0;for(let u=0;u<i;u++){let d=Math.random()*2-1;e==="white"?s[u]=d*.6:e==="pink"?(a=.99765*a+d*.099046,o=.963*o+d*.2965164,h=.57*h+d*1.0526913,s[u]=(a+o+h+d*.1848)*.16):(c=(c+.02*d)/1.02,s[u]=c*3.2)}let l=Math.floor(r.sampleRate*.05);for(let u=0;u<l;u++){let d=u/l;s[i-l+u]=s[i-l+u]*(1-d)+s[u]*d}return n}var _o=class{constructor(){this.ctx=null,this.ready=!1,this.volume=.85,this.sfxOn=!0,this.under=0,this.heartPhase=0,this.gurgleTimer=1,this.time=0,this.patter=0,this.lastCrash=-10}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.white=Cc(e,4,"white"),this.pink=Cc(e,6,"pink"),this.brown=Cc(e,8,"brown");let i=E=>{let T=e.createGain();return T.gain.value=E,T},n=(E,T,_=.7)=>{let S=e.createBiquadFilter();return S.type=E,S.frequency.value=T,S.Q.value=_,S};this.G=i,this.F=n,this.master=i(this.volume);let s=e.createDynamicsCompressor();s.threshold.value=-22,s.ratio.value=7,s.attack.value=.004,s.release.value=.35,this.finalLP=n("lowpass",2e4,.7);let a=i(1.5);this.master.connect(this.finalLP),this.finalLP.connect(s),s.connect(a),a.connect(e.destination),this.air=i(1),this.airLP=n("lowpass",2e4,.7),this.airBoom=n("peaking",170,1.6),this.airBoom.gain.value=0,this.air.connect(this.airLP),this.airLP.connect(this.airBoom),this.airBoom.connect(this.master),this.water=i(0),this.water.connect(this.master);let o=e.createBuffer(2,Math.floor(e.sampleRate*2.6),e.sampleRate);for(let E=0;E<2;E++){let T=o.getChannelData(E),_=0;for(let S=0;S<T.length;S++){let k=S/e.sampleRate;_+=(Math.random()*2-1-_)*.12,T[S]=_*Math.exp(-k*2.4)*2.2}}this.verb=e.createConvolver(),this.verb.buffer=o,this.verbOut=i(.5),this.verb.connect(this.verbOut),this.verbOut.connect(this.master),this.waterSend=i(.9),this.water.connect(this.waterSend),this.waterSend.connect(this.verb);let h=(E,T=1)=>{let _=e.createBufferSource();return _.buffer=E,_.loop=!0,_.playbackRate.value=T,_.start(0,Math.random()*E.duration),_},c=(E,T,_)=>{let S=E;for(let k of T)S.connect(k),S=k;return S.connect(_),T[T.length-1]};this.rumble=c(h(this.brown,.8),[n("lowpass",130),i(.3)],this.air),this.wash=c(h(this.pink),[n("bandpass",620,.5),i(0)],this.air),this.roar=c(h(this.brown,1.3),[n("bandpass",210,.6),i(0)],this.air),this.roarF=this.roar,this.spots=[];for(let E=0;E<3;E++){let T=e.createPanner();T.panningModel="HRTF",T.distanceModel="inverse",T.refDistance=6,T.rolloffFactor=1.1,T.maxDistance=200;let _=i(0),S=n("bandpass",900+E*450,.7);h(this.pink,.9+E*.13).connect(S),S.connect(_),_.connect(T),T.connect(this.air),this.spots.push({p:T,g:_,x:0,y:0,z:0,a:0})}this.rainG=c(h(this.white),[n("highpass",1900),n("lowpass",9500),i(0)],this.air),this.patterG=c(h(this.white,1.3),[n("bandpass",3400,1.4),i(0)],this.air),this.windF=n("bandpass",420,1.8),this.windG=i(0),this.windPan=e.createStereoPanner?e.createStereoPanner():i(1),h(this.pink,.7).connect(this.windF),this.windF.connect(this.windG),this.windG.connect(this.windPan),this.windPan.connect(this.air),this.whistleF=n("bandpass",1300,7),this.whistleG=i(0),h(this.pink,1.1).connect(this.whistleF),this.whistleF.connect(this.whistleG),this.whistleG.connect(this.windPan),this.droneG=c(h(this.brown,.55),[n("lowpass",95),i(.9)],this.water),this.streamF=n("bandpass",520,.9),this.streamG=i(0),this.streamAM=i(0);let l=h(this.brown,.35),u=i(14);l.connect(n("lowpass",14)).connect(u),u.connect(this.streamAM.gain),h(this.pink,1.25).connect(this.streamF),this.streamF.connect(this.streamAM),this.streamAM.connect(this.streamG),this.streamG.connect(this.water),this.bodyG=i(1),this.bodyG.connect(this.master),this.vDry=i(1);let d=n("highpass",115,.7),f=n("peaking",1150,1),m=n("lowpass",6200,.7);f.gain.value=2.5,this.vDry.connect(d),d.connect(f),f.connect(m),m.connect(this.master),this.vWet=i(0),this.vLP=n("lowpass",430,3.5),this.vRes=n("peaking",260,2),this.vRes.gain.value=8,this.vTrem=i(.55),this.vWet.connect(this.vLP),this.vLP.connect(this.vRes),this.vRes.connect(this.vTrem),this.vTrem.connect(this.water),this.vTrem.connect(this.verb),this.breathG=i(1),this.breathG.connect(this.vDry),this.breathG.connect(this.vWet),this.beds=null,this.swimLevel=0;let b=e.createOscillator();b.type="sawtooth",b.frequency.value=17;let g=i(.5);b.connect(g),g.connect(this.vTrem.gain);let p=h(this.brown,.3),x=i(55);p.connect(n("lowpass",6)).connect(x),x.connect(b.frequency),b.start(),this.tinG=i(0),this.tinG.connect(s);for(let E of[3150,3212]){let T=e.createOscillator();T.type="sine",T.frequency.value=E,T.connect(this.tinG),T.start()}this.heliPan=e.createPanner(),this.heliPan.panningModel="HRTF",this.heliPan.distanceModel="inverse",this.heliPan.refDistance=45,this.heliPan.rolloffFactor=.7,this.heliPan.maxDistance=1200,this.heliG=i(0),this.heliChop=i(.5);let v=e.createOscillator();v.type="sawtooth",v.frequency.value=21;let M=i(.45);v.connect(M),M.connect(this.heliChop.gain),v.start(),h(this.brown,1.4).connect(n("lowpass",180)).connect(this.heliChop);let R=n("bandpass",1900,6),y=i(.05);h(this.white,1).connect(R),R.connect(y),y.connect(this.heliG),this.heliChop.connect(this.heliG),this.heliG.connect(this.heliPan),this.heliPan.connect(this.air),this.voice={},this.curVoice=null,this.ready=!0,this._decodeVoices()}setVoices(t){this.voiceSrc=t,this.ready&&this._decodeVoices()}_decodeVoices(){if(!(!this.voiceSrc||this._decoding)){this._decoding=!0;for(let[t,e]of Object.entries(this.voiceSrc)){let i=atob(e),n=new Uint8Array(i.length);for(let s=0;s<i.length;s++)n[s]=i.charCodeAt(s);this.ctx.decodeAudioData(n.buffer).then(s=>{this.voice[t]=s,this._startBeds()}).catch(()=>{})}}}_startBeds(){let t=this.voice;if(this.beds||!t.b_pant||!t.b_tired||!t.w_swim||this.voiceSrc.a_storm&&!t.a_storm||this.voiceSrc.a_heli&&!t.a_heli||this.voiceSrc.bt_creak&&!t.bt_creak)return;let e=(i,n)=>{let s=this.ctx.createBufferSource();s.buffer=i,s.loop=!0,s.loopStart=.03,s.loopEnd=i.duration-.03;let a=this.G(0);return s.connect(a),a.connect(n),s.start(0,.03+Math.random()*(i.duration-.1)),{s,g:a}};this.beds={pant:e(t.b_pant,this.breathG),tired:e(t.b_tired,this.breathG),swim:e(t.w_swim,this.air)},t.a_storm&&(this.beds.storm=e(t.a_storm,this.air)),t.bt_creak&&(this.beds.boat=e(t.bt_creak,this.air)),t.a_heli&&(this.beds.heli=e(t.a_heli,this.heliG),this.beds.heli.g.gain.value=1)}setBreath(t,e,i,n){if(!this.beds||!this.ready||this.ctx.state!=="running")return;let s=this.ctx.currentTime,a=n?.09:.012;this.beds.pant.g.gain.setTargetAtTime(t,s,a),this.beds.tired.g.gain.setTargetAtTime(e,s,a),this.beds.pant.s.playbackRate.setTargetAtTime(i,s,.4)}playVoice(t,e=1,i=1,n=null){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;this.stopVoice(.05);let a=this.ctx,o=a.currentTime,h=i*(this.under>.5?.84:1),c=n?Math.min(n[0],s.duration):0,l=n?Math.min(n[1],s.duration):s.duration,u=(l-c)/h,d=a.createBufferSource();d.buffer=s,d.playbackRate.value=h;let f=this.G(1e-4);return f.gain.setValueAtTime(1e-4,o),f.gain.exponentialRampToValueAtTime(Math.max(.001,e),o+(n&&n[0]>0?.09:.012)),n&&l<s.duration-.01&&(f.gain.setValueAtTime(Math.max(.001,e),o+Math.max(.02,u-.12)),f.gain.exponentialRampToValueAtTime(1e-4,o+u)),d.connect(f),f.connect(this.vDry),f.connect(this.vWet),d.start(o,c,l-c),this.curVoice={s:d,g:f,end:o+u},u}stopVoice(t=.08){let e=this.curVoice;if(!e)return;this.curVoice=null;let i=this.ctx.currentTime;if(!(i>=e.end))try{e.g.gain.setTargetAtTime(0,i,t/3),e.s.stop(i+t+.05)}catch{}}playClip(t,e=1,i=1,n=0){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;let a=this.ctx,o=a.createBufferSource();o.buffer=s,o.playbackRate.value=i;let h=this.G(e);if(o.connect(h),a.createStereoPanner){let c=a.createStereoPanner();c.pan.value=n,h.connect(c),c.connect(this.air)}else h.connect(this.air);return o.start(),s.duration/i}setVolume(t){this.volume=t,this.master&&this.master.gain.setTargetAtTime(this.sfxOn===!1?0:t,this.ctx.currentTime,.05)}setSfx(t){this.sfxOn=t,this.master&&this.master.gain.setTargetAtTime(t?this.volume:0,this.ctx.currentTime,.05),this.tinG&&!t&&this.tinG.gain.setTargetAtTime(0,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_burst(t){let e=this.ctx,i=e.currentTime+(t.delay||0),n=e.createBufferSource();n.buffer=t.buf,n.playbackRate.value=t.rate||1;let s=this.F(t.type||"bandpass",t.f0,t.q||1);t.f1&&s.frequency.exponentialRampToValueAtTime(Math.max(20,t.f1),i+t.dur);let a=this.G(0);a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(Math.max(2e-4,t.gain),i+(t.attack||.02)),a.gain.exponentialRampToValueAtTime(1e-4,i+t.dur),n.connect(s),s.connect(a);let o=a;if(t.pan!==void 0&&e.createStereoPanner){let h=e.createStereoPanner();h.pan.value=t.pan,a.connect(h),o=h}o.connect(t.out||this.air),t.verb&&o.connect(this.verb),n.start(i,Math.random()*(t.buf.duration-t.dur-.1)),n.stop(i+t.dur+.05)}_blip(t,e,i,n,s,a){let o=this.ctx,h=o.currentTime+s,c=o.createOscillator();c.type="sine",c.frequency.setValueAtTime(t,h),c.frequency.exponentialRampToValueAtTime(e,h+i);let l=this.G(0);l.gain.setValueAtTime(1e-4,h),l.gain.exponentialRampToValueAtTime(n,h+i*.3),l.gain.exponentialRampToValueAtTime(1e-4,h+i),c.connect(l),l.connect(a||this.water),c.start(h),c.stop(h+i+.02)}gurgle(t=.6){if(!this.ready)return;let e=6+Math.floor(Math.random()*10*t+4),i=0;for(let n=0;n<e;n++){let s=170+Math.random()*420;this._blip(s,s*(1.5+Math.random()*.9),.035+Math.random()*.05,.1*t*(.4+Math.random()),i),i+=.022+Math.random()*.06}this._burst({buf:this.pink,f0:380,f1:900,q:1.2,dur:Math.min(1.2,i+.2),gain:.16*t,attack:.05,out:this.water})}onEvent(t,e){if(!this.ready)return;let i=this.under>.5;switch(t){case"thunder":{let n=mt(e.dist/7e3),s=e.power;{let b="a_thunder"+(1+(Math.random()*3|0)),g=this.voice&&this.voice[b];if(g){let p=this.ctx,x=p.currentTime,v=p.createBufferSource();v.buffer=g,v.playbackRate.value=lt(1,.82,n)*(.94+Math.random()*.12);let M=this.F("lowpass",lt(16e3,420,Math.sqrt(n)),.6),R=this.G(lt(2.2,.45,n)*s);v.connect(M),M.connect(R),R.connect(this.air),R.connect(this.verb),v.start(x),e.dist<2600&&(this._blip(64,26,1.4,1.1*s*(1-e.dist/2600),0,this.master),this._burst({buf:this.white,type:"highpass",f0:1800,dur:.22,gain:1.2*s*(1-e.dist/2600),attack:.002}))}}let a=lt(5,10,Math.random())*(.8+.4*n),o=this.ctx,h=o.currentTime,c=o.createBufferSource();c.buffer=this.brown,c.loop=!0,c.playbackRate.value=.7+Math.random()*.5;let l=this.F("lowpass",lt(1100,170,n),.5),u=this.G(0),d=lt(.6,.2,n)*s;u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(d,h+lt(.04,.6,n));let f=h+.5,m=2+Math.floor(Math.random()*4);for(let b=0;b<m;b++)f+=.4+Math.random()*1.1,u.gain.exponentialRampToValueAtTime(d*(.25+Math.random()*.5)*Math.exp(-b*.35),f);u.gain.exponentialRampToValueAtTime(1e-4,h+a),c.connect(l),l.connect(u),u.connect(this.air),u.connect(this.verb),c.start(h,Math.random()*6),c.stop(h+a+.1),e.dist<2200&&this._burst({buf:this.white,type:"highpass",f0:700,dur:.35,gain:.8*s*(1-e.dist/2200),attack:.004,verb:!0});break}case"impact":{let n=Math.min(1,e.strength/3.2);if(this.time-this.lastCrash<.5)break;this.lastCrash=this.time,this._burst({buf:this.white,type:"lowpass",f0:5200,f1:260,q:.6,dur:1.5+n,gain:.55+.5*n,attack:.015,verb:!0}),this._burst({buf:this.brown,type:"lowpass",f0:240,f1:60,q:.8,dur:1.9,gain:1*n+.3,attack:.02,out:this.master}),this._blip(74,34,.7,.5*n,0,this.master),this.playClip("a_crash"+(1+(Math.random()*3|0)),.7+.6*n,.9+Math.random()*.2,0);break}case"boatSlam":{let n=Math.min(1,e.v/6);if(this.time-(this.lastSlam||-9)<.35)break;this.lastSlam=this.time,this.playClip("bt_slam"+(1+(Math.random()*3|0)),.35+.65*n,.88+Math.random()*.22,e.pan||0),this._blip(64,30,.5,.35*n,0,this.master);break}case"splash":{let n=Math.min(1,e.v/5);this._burst({buf:this.pink,f0:1400+Math.random()*1200,f1:600,q:.8,dur:.16+.22*n,gain:.1+.22*n,attack:.006,pan:Math.random()*1.2-.6});break}case"submerge":this._burst({buf:this.brown,type:"lowpass",f0:900,f1:120,dur:.7,gain:.7,attack:.01,out:this.master}),this.gurgle(.9),this.gurgleTimer=.8;break;case"surface":this._burst({buf:this.white,type:"highpass",f0:1500,f1:3500,dur:.5,gain:.3,attack:.02});break;case"camEnter":this._blip(120,52,.45,.35,0,this.master);break;case"camExit":this._burst({buf:this.pink,f0:2200,f1:900,q:.6,dur:.6,gain:.22,attack:.02});break;default:break}}update(t,e){if(!this.ready||this.ctx.state!=="running")return;this.time+=t;let i=this.ctx,n=i.currentTime,s=(f,m,b=.12)=>f.setTargetAtTime(m,n,b),a=this.under=e.under,o=i.listener,h=e.cam;o.positionX?(o.positionX.value=h.pos.x,o.positionY.value=h.pos.y,o.positionZ.value=h.pos.z,o.forwardX.value=h.fwd.x,o.forwardY.value=h.fwd.y,o.forwardZ.value=h.fwd.z,o.upX.value=h.up.x,o.upY.value=h.up.y,o.upZ.value=h.up.z):(o.setPosition(h.pos.x,h.pos.y,h.pos.z),o.setOrientation(h.fwd.x,h.fwd.y,h.fwd.z,h.up.x,h.up.y,h.up.z)),s(this.airLP.frequency,lt(2e4,330*Math.exp(-e.depth*.06)+120,a*a),.06),s(this.airBoom.gain,9*a,.1),s(this.air.gain,lt(1,.55,a),.1),s(this.water.gain,a*(1-.7*e.blackout),.08),s(this.bodyG.gain,(1-a)*(1-e.blackout),.05),s(this.verbOut.gain,.35+.5*a,.2);let c=.7+.6*(e.gust||0);s(this.rumble.gain,.32+.45*e.storm+.22*Math.min(1,Math.abs(e.swellV)/6),.3),this.beds&&this.beds.storm&&(s(this.beds.storm.g.gain,(.25+.95*e.storm)*c,.5),this.beds.storm.s.playbackRate.setTargetAtTime(.94+.1*(e.gust||0),n,1.2)),this.crashT=(this.crashT===void 0?3:this.crashT)-t*(.4+e.storm),this.crashT<=0&&a<.5&&(this.crashT=2.2+Math.random()*4.5,this.playClip("a_crash"+(1+(Math.random()*3|0)),(.16+.34*Math.random())*e.storm,.8+Math.random()*.4,Math.random()*1.6-.8));let l=0;for(let f of e.hot){let m=Math.hypot(f.x-h.pos.x,f.z-h.pos.z);l+=f.amount/(1+m/12)}s(this.wash.gain,Math.min(.8,.12*e.storm+.16*l),.25),s(this.roar.gain,Math.min(1.1,e.threat*e.threat*1.1),.2);for(let f=0;f<this.spots.length;f++){let m=this.spots[f],b=e.hot[f];b?(m.a<.02?(m.x=b.x,m.y=b.y,m.z=b.z):(m.x+=(b.x-m.x)*.1,m.y+=(b.y-m.y)*.1,m.z+=(b.z-m.z)*.1),m.a+=(Math.min(1,b.amount)-m.a)*.08):m.a*=.94,m.p.positionX?(m.p.positionX.value=m.x,m.p.positionY.value=m.y,m.p.positionZ.value=m.z):m.p.setPosition(m.x,m.y,m.z),s(m.g.gain,m.a*.9,.1)}s(this.rainG.gain,.2*e.rain*c,.4),this.patter+=Math.random()<t*9?1:0,this.patter*=Math.exp(-t*9),s(this.patterG.gain,.06*e.rain*(.4+Math.min(1.5,this.patter)),.03);let u=mt(e.windSpeed/34);s(this.windF.frequency,260+520*e.gust*u,.5),s(this.windG.gain,.55*Math.pow(u,1.5)*c+.6*(e.air||0),.15),s(this.whistleF.frequency,900+900*e.gust*e.gust,.6),s(this.whistleG.gain,.1*Math.pow(u,2.2)*e.gust,.5),this.windPan.pan&&s(this.windPan.pan,wi(e.windPan*.55,-.8,.8),.6),s(this.streamG.gain,Math.min(1,e.aeration*1.4+Math.min(.5,e.relSpeed*.08))*.5,.1),s(this.streamF.frequency,420+500*e.aeration,.2),e.mouthUnder&&e.alive&&(this.gurgleTimer-=t*(1+1.6*mt((45-e.oxygen)/45)+e.effort*.6),this.gurgleTimer<=0&&(this.gurgle(.45+.5*Math.random()),this.gurgleTimer=1.1+Math.random()*2));let d=Math.max(mt((62-e.oxygen)/55),mt(((e.fear||0)-.62)*2.4)*.8)*(e.alive?1:0)+(e.mouthUnder?.18:0);if(d>.05&&(this.heartPhase+=t*lt(1.2,2.5,mt(d)),this.heartPhase>=1)){this.heartPhase-=1;let f=.5*Math.min(1,d*1.3);this._blip(62,40,.11,f,0,this.master),this._blip(52,36,.13,f*.7,.16,this.master)}if(s(this.master.gain,(this.sfxOn===!1?0:this.volume)*(1-.85*e.blackout),.3),e.heli&&e.heli.on){let f=e.heli.pos;this.heliPan.positionX?(this.heliPan.positionX.value=f.x,this.heliPan.positionY.value=f.y,this.heliPan.positionZ.value=f.z):this.heliPan.setPosition(f.x,f.y,f.z),s(this.heliG.gain,6,.6)}else s(this.heliG.gain,0,.8);this.beds&&s(this.beds.swim.g.gain,Math.min(.6,(e.swimSplash||0)*.55)*(1-a),.25),this.beds&&this.beds.boat&&(s(this.beds.boat.g.gain,Math.min(.5,(e.boatCreak||0)*.5)*(1-a),.3),this.beds.boat.s.playbackRate.setTargetAtTime(.9+.25*Math.min(1,e.boatCreak||0),n,.5)),s(this.vDry.gain,1-a,.04),s(this.vWet.gain,a*2.2,.04),s(this.tinG.gain,(this.sfxOn===!1?0:this.volume)*(.014*mt((30-e.oxygen)/30)+.03*e.blackout),.3),s(this.finalLP.frequency,2e4*Math.pow(.022,e.blackout)*Math.pow(.03,e.slow||0),.08)}};var Ox=`
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
`,Ot=(r,t,e)=>{let i=document.createElement(r);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i},Pc=r=>`${String(Math.floor(r/60)).padStart(2,"0")}:${String(Math.floor(r%60)).padStart(2,"0")}`,Mo=class r{constructor(t,e,i){this.root=t,this.api=e,this.isTouch=i,t.classList.toggle("touch",!!i);let n=Ot("style");n.textContent=Ox,document.head.appendChild(n),this.title=Ot("div","layer shade"),this.title.id="title";let s=Ot("div","col");s.appendChild(Ot("h1","","EXTREME<br>OCEAN SURVIVAL")),this.goBtn=Ot("div","go act","\uC2DC\uC791"),s.appendChild(this.goBtn),this.titleRows=Ot("div","rows"),s.appendChild(this.titleRows),this.title.appendChild(s),this.title.appendChild(Ot("div","hint",i?"\uC67C\uCABD \uB04C\uAE30 \uBC29\uD5A5 \xB7 \uD5E4\uC5C4 / \uC785\uC218 \uBC84\uD2BC \xB7 \uD654\uBA74 \uB04C\uAE30 \uC2DC\uC810":"WASD \uBC29\uD5A5 \xB7 Space(\uC88C\uD074\uB9AD) \uD5E4\uC5C4 \xB7 F(\uC6B0\uD074\uB9AD) \uC785\uC218 \xB7 \uB9C8\uC6B0\uC2A4 \uC2DC\uC810 \xB7 V \uC2DC\uC810 \uC804\uD658 \xB7 Esc \uBA48\uCDA4")),this.pause=Ot("div","layer shade"),this.pause.id="pause";let a=Ot("div","col");a.appendChild(Ot("h2","","\uBA48\uCDA4")),this.pauseTime=Ot("div","time"),a.appendChild(this.pauseTime),this.resumeBtn=Ot("div","go act","\uACC4\uC18D"),a.appendChild(this.resumeBtn),this.pauseRows=Ot("div","rows"),a.appendChild(this.pauseRows),this.pause.appendChild(a),this.dead=Ot("div","layer shade"),this.dead.id="dead";let o=Ot("div","col");this.deadTitle=Ot("h2","",""),o.appendChild(this.deadTitle),this.deadTime=Ot("div","time"),o.appendChild(this.deadTime),this.againBtn=Ot("div","go act","\uB2E4\uC2DC"),o.appendChild(this.againBtn),this.dead.appendChild(o),this.won=Ot("div","layer shade"),this.won.id="won";let h=Ot("div","col");h.appendChild(Ot("h2","","\uAD6C\uC870\uB418\uC5C8\uB2E4")),this.wonTime=Ot("div","time"),h.appendChild(this.wonTime),this.wonBtn=Ot("div","go act","\uB2E4\uC2DC"),h.appendChild(this.wonBtn),this.won.appendChild(h),this.noteEl=Ot("div","note"),this.creditLink=Ot("div","credit act on","Credits / Licenses"),this.credits=Ot("div"),this.credits.id="credits";{let f="http://creativecommons.org/licenses/by/4.0/",m=(g,p)=>`<a class="act" href="${g}" target="_blank" rel="noopener noreferrer">${p}</a>`,b=Ot("div","box");b.appendChild(Ot("h2","","CREDITS / LICENSES")),b.appendChild(Ot("h3","","3D MODELS")),b.appendChild(Ot("div","it",`<b>Emergency Heli - Flight Care 2</b><p>by Mixmamo.studio: An effortless 3D collections. \xB7 ${m("https://skfb.ly/pBOGV","skfb.ly/pBOGV")}<br>Licensed under ${m(f,"Creative Commons Attribution 4.0")}<br>\uBCC0\uACBD: \uC6F9\uC6A9\uC73C\uB85C \uC904\uC784(\uBC16\uC5D0\uC11C \uBCF4\uC774\uC9C0 \uC54A\uB294 \uC2E4\uB0B4 \uBD80\uD488 \uC81C\uAC70, \uBD80\uD488 \uBCD1\uD569) \xB7 \uC55E\uBB38\uC744 \uB2EB\uC74C \xB7 \uD68C\uC804\uB0A0\uAC1C\uB97C \uBE44\uD589 \uC911 \uBAA8\uC591\uC73C\uB85C \uD3C4</p>`)),b.appendChild(Ot("div","it",`<b>Assault Boat</b><p>by tnnv \xB7 Sketchfab<br>Licensed under ${m(f,"Creative Commons Attribution 4.0")}<br>\uBCC0\uACBD: \uC6F9\uC6A9\uC73C\uB85C \uC904\uC784(\uBD80\uD488 \uBCD1\uD569, \uADF8\uB9BC \uB2E4\uC2DC \uC555\uCD95) \xB7 \uBC1D\uAE30 \uC870\uC815</p>`)),b.appendChild(Ot("div","lic",`CC BY 4.0 \u2014 ${f}`)),this.creditClose=Ot("div","go act","\uB2EB\uAE30"),b.appendChild(this.creditClose),this.credits.appendChild(b)}this.hud=Ot("div","layer"),this.hud.id="hud";let c=Ot("div","bars");this.bars={};for(let[f,m]of[["o2","\uC0B0\uC18C"],["st","\uCCB4\uB825"],["tp","\uCCB4\uC628"],["rs","\uAD6C\uC870"]]){let b=Ot("div","bar",`<i>${m}</i><u><s></s></u>`);c.appendChild(b),this.bars[f]={el:b,fill:b.querySelector("s")}}this.hud.appendChild(c),i||(this.keysEl=Ot("div","keys",""),this.hud.appendChild(this.keysEl)),this.act="",this.setMode("swim"),t.append(Object.assign(Ot("div"),{id:"bars-t"}),Object.assign(Ot("div"),{id:"bars-b"})),this.touch=Ot("div","layer"),this.touch.id="touch",t.append(this.hud,this.noteEl,this.touch,this.title,this.pause,this.dead,this.won,this.creditLink,this.credits),i&&this.buildTouch();let l=(f,m)=>r.tap(f,m);l(this.goBtn,()=>e.start()),l(this.resumeBtn,()=>e.resume()),l(this.againBtn,()=>e.restart()),l(this.wonBtn,()=>e.restart());let u=-1e9,d=f=>{this.credits.classList.toggle("on",f),f&&(this.credits.scrollTop=0,u=performance.now())};l(this.creditLink,()=>d(!0)),l(this.creditClose,()=>d(!1)),this.credits.addEventListener("click",f=>{f.stopPropagation(),f.target===this.credits&&performance.now()-u>600&&d(!1)}),this.credits.addEventListener("pointerdown",f=>f.stopPropagation()),document.addEventListener("keydown",f=>{f.code==="Escape"&&this.credits.classList.contains("on")&&(d(!1),f.stopImmediatePropagation(),f.preventDefault())},!0),this.buildRows(),this.mode=""}static tap(t,e){let i=null,n=0,s=0,a=-1e9;t.addEventListener("pointerdown",o=>{i=o.pointerId,n=o.clientX,s=o.clientY,o.stopPropagation()}),t.addEventListener("pointerup",o=>{o.pointerId===i&&(i=null,o.stopPropagation(),Math.hypot(o.clientX-n,o.clientY-s)<30&&(a=performance.now(),e(o)))}),t.addEventListener("pointercancel",()=>{i=null}),t.addEventListener("click",o=>{o.stopPropagation(),!(performance.now()-a<800)&&e(o)})}buildRows(){let t=this.api,e=(i,n)=>{i.innerHTML="";let s=(a,o,h)=>{let c=Ot("div","row act",`${a}<b></b>`),l=c.querySelector("b"),u=()=>{l.textContent=o()};r.tap(c,()=>{h(),this.refresh()}),this._upd.push(u),u(),i.appendChild(c)};if(s("\uD654\uC9C8",()=>t.get("quality"),()=>t.cycle("quality")),s("\uC2DC\uC810",()=>t.get("view"),()=>t.cycle("view")),s("\uC790\uB3D9 \uCE74\uBA54\uB77C",()=>t.get("autocam"),()=>t.cycle("autocam")),s("\uCE74\uBA54\uB77C \uD754\uB4E4\uB9BC",()=>t.get("shake"),()=>t.cycle("shake")),s("\uC18C\uB9AC \uD06C\uAE30",()=>t.get("volume"),()=>t.cycle("volume")),s("\uD6A8\uACFC\uC74C",()=>t.get("sfx"),()=>t.cycle("sfx")),n){let a=Ot("div","row tests wide","\uC2DC\uD5D8 \uC7A5\uBA74");for(let h of"ABCDEFGHR"){let c=Ot("span","t act",h);r.tap(c,()=>t.scenario(h)),a.appendChild(c)}i.appendChild(a);let o=Ot("div","row act wide","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC");r.tap(o,()=>t.restart()),i.appendChild(o)}};this._upd=[],e(this.titleRows,!1),e(this.pauseRows,!0)}refresh(){for(let t of this._upd)t()}show(t,e){this.mode=t,this.title.classList.toggle("on",t==="title"),this.pause.classList.toggle("on",t==="paused"),this.dead.classList.toggle("on",t==="dead"),this.won.classList.toggle("on",t==="won"),t==="won"&&(this.wonTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+Pc(e.time)),t!=="playing"&&this.noteEl.classList.remove("on"),this.hud.classList.toggle("on",t==="playing"),this.touch.classList.toggle("on",t==="playing"&&this.isTouch),this.creditLink.classList.toggle("on",t!=="playing"),t==="playing"&&this.credits.classList.remove("on"),t==="paused"&&(this.pauseTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+Pc(e.time)),t==="dead"&&(this.deadTitle.textContent=e.cause==="cold"?"\uCCB4\uC628\uC744 \uC783\uACE0 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4":"\uC228\uC774 \uB2E4\uD574 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4",this.deadTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+Pc(e.time)),this.refresh(),t!=="playing"&&this.releaseTouch()}cine(t){this.root.classList.toggle("cine",!!t),t&&(this.noteEl.classList.remove("on"),clearTimeout(this._nt))}note(t,e=6){this.noteEl.textContent=t,this.noteEl.classList.add("on"),clearTimeout(this._nt),this._nt=setTimeout(()=>this.noteEl.classList.remove("on"),e*1e3)}setMode(t){if(t===this.act)return;this.act=t;let e="<span><b>V</b><i>\xB7</i><b>\uD720</b>\uC2DC\uC810</span><span><b>Esc</b>\uBA48\uCDA4</span>",i=t==="boat"?"<span><b>Space</b>\uAF49 \uBD99\uC7A1\uAE30</span>"+e:t==="cling"?"<span><b>Space</b>\uAF49 \uC950\uAE30</span><span><b>F</b>\uB193\uAE30</span>"+e:"<span><b>Space</b>\uD5E4\uC5C4</span><span><b>F</b>\uC785\uC218</span>"+e;this.keysEl&&(this.keysEl.innerHTML=i),this.swBtn&&(this.swBtn.textContent=t==="boat"?"\uBD99\uC7A1\uAE30":t==="cling"?"\uAF49 \uC950\uAE30":"\uD5E4\uC5C4",this.dvBtn.textContent=t==="cling"?"\uB193\uAE30":"\uC785\uC218",this.dvBtn.style.opacity=t==="boat"?"0.3":"")}setBars(t,e,i,n=0){let s=(a,o,h,c)=>{a.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,o)).toFixed(3)})`,a.el.classList.toggle("show",o<h),a.el.classList.toggle("low",o<c)};s(this.bars.o2,t,.97,.3),s(this.bars.st,e,.9,.22),s(this.bars.tp,i,.8,.35),this.bars.rs.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,n)).toFixed(3)})`,this.bars.rs.el.classList.toggle("show",n>.01)}buildTouch(){let t=this.api,e=t.input;e.touch={x:0,z:0,swim:!1,dive:!1};let i=Ot("div","zone zl"),n=Ot("div","zone zr"),s=Ot("div","stick","<b></b>"),a=s.firstChild;this.touch.append(i,n,s);let o=null,h=0,c=0,l=null,u=0,d=0,f=56;i.addEventListener("pointerdown",T=>{if(o===null){o=T.pointerId,h=T.clientX,c=T.clientY;try{i.setPointerCapture(T.pointerId)}catch{}s.style.display="block",s.style.left=h+"px",s.style.top=c+"px",a.style.transform="translate(0,0)",T.preventDefault()}}),i.addEventListener("pointermove",T=>{if(T.pointerId!==o)return;let _=T.clientX-h,S=T.clientY-c,k=Math.hypot(_,S);k>f&&(_*=f/k,S*=f/k),a.style.transform=`translate(${_}px,${S}px)`;let W=.12,Y=_/f,N=-S/f;Math.hypot(Y,N)<W&&(Y=0,N=0),e.touch.x=Y,e.touch.z=N,T.preventDefault()});let m=T=>{T.pointerId===o&&(o=null,e.touch.x=0,e.touch.z=0,s.style.display="none")};i.addEventListener("pointerup",m),i.addEventListener("pointercancel",m),n.addEventListener("pointerdown",T=>{if(l===null){l=T.pointerId,u=T.clientX,d=T.clientY;try{n.setPointerCapture(T.pointerId)}catch{}T.preventDefault()}}),n.addEventListener("pointermove",T=>{T.pointerId===l&&(e.dx+=(T.clientX-u)*2.2,e.dy+=(T.clientY-d)*2.2,u=T.clientX,d=T.clientY,e.lastLook=performance.now()/1e3,T.preventDefault())});let b=T=>{T.pointerId===l&&(l=null)};n.addEventListener("pointerup",b),n.addEventListener("pointercancel",b);let g=(T,_)=>{let S=Ot("div","btn "+T,_);return this.touch.appendChild(S),S},p=this.swBtn=g("sw","\uD5E4\uC5C4"),x=this.dvBtn=g("dv","\uC785\uC218"),v=g("sm vw",'<svg viewBox="0 0 24 24"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/></svg>\uC2DC\uC810'),M=g("sm ps",'<svg viewBox="0 0 24 24"><path d="M8.5 5v14M15.5 5v14"/></svg>\uBA48\uCDA4'),R=(T,_)=>{let S=null;T.addEventListener("pointerdown",W=>{W.preventDefault(),W.stopPropagation(),S=W.pointerId;try{T.setPointerCapture(W.pointerId)}catch{}T.classList.add("on"),e.touch[_]=!0});let k=W=>{S!==null&&W.pointerId!==S||(W.stopPropagation(),S=null,T.classList.remove("on"),e.touch[_]=!1)};T.addEventListener("pointerup",k),T.addEventListener("pointercancel",k),T.addEventListener("lostpointercapture",k)};R(p,"swim"),R(x,"dive"),v.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),t.toggleView()}),M.addEventListener("pointerdown",T=>{T.preventDefault(),T.stopPropagation(),t.pause()}),this.releaseTouch=()=>{o=null,l=null,e.touch.x=0,e.touch.z=0,e.touch.swim=!1,e.touch.dive=!1,s.style.display="none",p.classList.remove("on"),x.classList.remove("on")};let y=()=>this.releaseTouch(),E=T=>{(!T.touches||T.touches.length===0)&&y()};document.addEventListener("touchend",E,{capture:!0,passive:!0}),document.addEventListener("touchcancel",E,{capture:!0,passive:!0}),window.addEventListener("blur",y),window.addEventListener("pagehide",y),document.addEventListener("visibilitychange",()=>{document.hidden&&y()})}releaseTouch(){}};var ss={A:{label:"\uBCF4\uD1B5 \uD30C\uB3C4\uC5D0 \uB5A0 \uC788\uAE30",storm:.42,t0:40,view:"third",keys:{},script:[]},B:{label:"\uD070 \uB108\uC6B8 \uC811\uADFC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:15,height:16,breakOffset:9,angleOffset:0,width:240,speed:13,frontMin:27,back:70})}]},C:{label:"\uD30C\uB3C4 \uBD95\uAD34 \xB7 \uCDA9\uB3CC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:9,height:13.5,breakOffset:-1,angleOffset:0,width:170,speed:14})}]},D:{label:"\uBB3C\uC18D \uD718\uB9D0\uB9BC",storm:1,t0:12,view:"first",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:6,height:14.5,breakOffset:-1.3,angleOffset:0,width:170,speed:14})}]},E:{label:"\uC218\uBA74 \uBCF5\uADC0",storm:.85,t0:30,view:"first",keys:{up:!0,sprint:!0},setup:r=>{r.body.pos.y-=5.5,r.body.prevPos.copy(r.body.pos),r.survival.oxygen=42,r.survival.wasUnder=!0,r.survival.submergedTime=14,r.cam.pitch=.7},script:[{t:9,do:r=>{r.input.virtual={}}}]},F:{label:"\uBC88\uAC1C",storm:.9,t0:55,view:"third",keys:{},script:[{t:2,do:r=>r.lightning.strike(r.camera.position,{azimuth:Math.PI,dist:1700,sheet:0,power:1.4})},{t:9,do:r=>r.lightning.strike(r.camera.position,{azimuth:Math.PI*.8,dist:5200,sheet:1,power:1})}]},G:{label:"\uCDA9\uB3CC \uC911 \uC2DC\uC810 \uC804\uD658",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:7,height:12.5,breakOffset:-1,angleOffset:0,width:170,speed:14})},...[2,3.6,5.2,6.4,7.4,8.4,9.6,11,12.6,14.2].map(r=>({t:r,do:t=>t.cam.toggle()}))]}};ss.H={label:"\uD574\uC77C \xB7 \uBB3C\uC18D \uAE4A\uC774 \uD718\uB9D0\uB9BC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launchMega({lead:14,height:34})}]};ss.R={label:"\uAD6C\uC870 \uD5EC\uAE30",storm:.8,t0:30,view:"third",keys:{},script:[{t:.5,do:r=>r.rescue.dispatch(r.body.pos,Math.PI,16)},...Array.from({length:70},(r,t)=>({t:11+t*.5,do:e=>{if(e.rescue.state==="lift"){e.input.virtual=null;return}let i=e.rescue.ring,n=e.body.pos;e.cam.yaw=Math.atan2(i.x-n.x,i.z-n.z),e.input.virtual={z:1,sprint:!0},e.input.enabled=!0}}))]};ss.S={label:"\uBCF4\uD2B8\uC5D0\uC11C \uC2DC\uC791 \xB7 \uC804\uBCF5",storm:1,t0:12,view:"third",keys:{},setup:r=>{r.board(),r.placeShip()},script:[{t:1,do:r=>r.launchIntroWave(9)}]};ss.T={label:"\uBCF4\uD2B8\uC5D0 \uB5A0 \uC788\uAE30",storm:.7,t0:30,view:"third",keys:{},setup:r=>r.board(),script:[]};var wo=class{constructor(t){this.game=t,this.active=null,this.t=0,this.next=0,this.name=""}run(t){let e=ss[t];if(!e)return!1;let i=this.game;i.waves.time=e.t0;for(let n of i.waves.breakers)n.active=!1;return i.weather.locked=!0,i.weather.base=i.weather.storm=e.storm,i.weather.time=0,i.interaction.auto=!1,i.autoLightning=!1,i.lightning.active=!1,i.lightning.pendingThunder.length=0,i.rescue.reset(1e9),i.weather.update(0),i.waves.update(0),i.resetPlayer(),i.cam.setMode(e.view),i.cam.blend=i.cam.target,i.cam.yaw=-Math.PI/2,i.cam.pitch=e.view==="first"?-.02:-.08,i.input.virtual=e.keys&&Object.keys(e.keys).length?{...e.keys}:null,i.input.virtual&&(i.input.enabled=!0),e.setup&&e.setup(i),this.active=e,this.name=t,this.t=0,this.next=0,!0}stop(){this.active=null,this.game.input.virtual=null}update(t){if(!this.active)return;this.t+=t;let e=this.active.script;for(;this.next<e.length&&this.t>=e[this.next].t;)e[this.next].do(this.game),this.next++}};function Lc(r,t){if(t===md)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Pr||t===ja){let e=r.getIndex();if(e===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let h=0;h<o.count;h++)a.push(h);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let i=e.count-2,n=[];if(t===Pr)for(let a=1;a<=i;a++)n.push(e.getX(0)),n.push(e.getX(a)),n.push(e.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(e.getX(a)),n.push(e.getX(a+1)),n.push(e.getX(a+2))):(n.push(e.getX(a+2)),n.push(e.getX(a+1)),n.push(e.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}var Eo=class extends mn{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Nc(e)}),this.register(function(e){return new jc(e)}),this.register(function(e){return new Yc(e)}),this.register(function(e){return new Kc(e)}),this.register(function(e){return new Bc(e)}),this.register(function(e){return new Hc(e)}),this.register(function(e){return new Vc(e)}),this.register(function(e){return new Gc(e)}),this.register(function(e){return new Uc(e)}),this.register(function(e){return new Wc(e)}),this.register(function(e){return new Oc(e)}),this.register(function(e){return new Xc(e)}),this.register(function(e){return new qc(e)}),this.register(function(e){return new kc(e)}),this.register(function(e){return new Qc(e)}),this.register(function(e){return new Zc(e)})}load(t,e,i,n){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Pn.extractUrlBase(t);a=Pn.resolveURL(c,this.path)}else a=Pn.extractUrlBase(t);this.manager.itemStart(t);let o=function(c){n?n(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},h=new Ar(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(c){try{s.parse(c,a,function(l){e(l),s.manager.itemEnd(t)},o)}catch(l){o(l)}},i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s,a={},o={},h=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(h.decode(new Uint8Array(t,0,4))===Yd){try{a[ne.KHR_BINARY_GLTF]=new Jc(t)}catch(u){n&&n(u);return}s=JSON.parse(a[ne.KHR_BINARY_GLTF].content)}else s=JSON.parse(h.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new rl(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let u=this.pluginCallbacks[l](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){let u=s.extensionsUsed[l],d=s.extensionsRequired||[];switch(u){case ne.KHR_MATERIALS_UNLIT:a[u]=new zc;break;case ne.KHR_DRACO_MESH_COMPRESSION:a[u]=new $c(s,this.dracoLoader);break;case ne.KHR_TEXTURE_TRANSFORM:a[u]=new tl;break;case ne.KHR_MESH_QUANTIZATION:a[u]=new el;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(t,e){let i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}};function Bx(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}var ne={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kc=class{constructor(t){this.parser=t,this.name=ne.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){let s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,i="light:"+t,n=e.cache.get(i);if(n)return n;let s=e.json,h=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],c,l=new Dt(16777215);h.color!==void 0&&l.setRGB(h.color[0],h.color[1],h.color[2],De);let u=h.range!==void 0?h.range:0;switch(h.type){case"directional":c=new Jn(l),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ga(l),c.distance=u;break;case"spot":c=new Xs(l),c.distance=u,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,c.angle=h.spot.outerConeAngle,c.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return c.position.set(0,0,0),c.decay=2,Fn(c,h),h.intensity!==void 0&&(c.intensity=h.intensity),c.name=e.createUniqueName(h.name||"light_"+t),n=Promise.resolve(c),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,i=this.parser,s=i.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(h){return i._getNodeRef(e.cache,o,h)})}},zc=class{constructor(){this.name=ne.KHR_MATERIALS_UNLIT}getMaterialType(){return Oe}extendParams(t,e,i){let n=[];t.color=new Dt(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],De),t.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,fe))}return Promise.all(n)}},Uc=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},Nc=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ft(o,o)}return Promise.all(s)}},Oc=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},Bc=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_SHEEN}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new Dt(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],De)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",a.sheenColorTexture,fe)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},Hc=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},Vc=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_VOLUME}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return e.attenuationColor=new Dt().setRGB(o[0],o[1],o[2],De),Promise.all(s)}},Gc=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_IOR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Wc=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_SPECULAR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return e.specularColor=new Dt().setRGB(o[0],o[1],o[2],De),a.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",a.specularColorTexture,fe)),Promise.all(s)}},qc=class{constructor(t){this.parser=t,this.name=ne.EXT_MATERIALS_BUMP}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}},Xc=class{constructor(t){this.parser=t,this.name=ne.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},jc=class{constructor(t){this.parser=t,this.name=ne.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}},Yc=class{constructor(t){this.parser=t,this.name=ne.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=n.images[a.source],h=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(h=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(t,a.source,h);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Kc=class{constructor(t){this.parser=t,this.name=ne.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=n.images[a.source],h=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(h=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(t,a.source,h);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Qc=class{constructor(t){this.name=ne.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let h=n.byteOffset||0,c=n.byteLength||0,l=n.count,u=n.byteStride,d=new Uint8Array(o,h,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(l,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(l*u);return a.decodeGltfBuffer(new Uint8Array(f),l,u,d,n.mode,n.filter),f})})}else return null}},Zc=class{constructor(t){this.name=ne.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=e.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==Li.TRIANGLES&&c.mode!==Li.TRIANGLE_STRIP&&c.mode!==Li.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],h={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(l=>(h[c]=l,h[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{let l=c.pop(),u=l.isGroup?l.children:[l],d=c[0].count,f=[];for(let m of u){let b=new Pt,g=new w,p=new yt,x=new w(1,1,1),v=new La(m.geometry,m.material,d);for(let M=0;M<d;M++)h.TRANSLATION&&g.fromBufferAttribute(h.TRANSLATION,M),h.ROTATION&&p.fromBufferAttribute(h.ROTATION,M),h.SCALE&&x.fromBufferAttribute(h.SCALE,M),v.setMatrixAt(M,b.compose(g,p,x));for(let M in h)if(M==="_COLOR_0"){let R=h[M];v.instanceColor=new Qe(R.array,R.itemSize,R.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,h[M]);Se.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return l.isGroup?(l.clear(),l.add(...f),l):f[0]}))}},Yd="glTF",Fr=12,Wd={JSON:1313821514,BIN:5130562},Jc=class{constructor(t){this.name=ne.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Fr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Yd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Fr,s=new DataView(t,Fr),a=0;for(;a<n;){let o=s.getUint32(a,!0);a+=4;let h=s.getUint32(a,!0);if(a+=4,h===Wd.JSON){let c=new Uint8Array(t,Fr+a,o);this.content=i.decode(c)}else if(h===Wd.BIN){let c=Fr+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$c=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ne.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},h={},c={};for(let l in a){let u=nl[l]||l.toLowerCase();o[u]=a[l]}for(let l in t.attributes){let u=nl[l]||l.toLowerCase();if(a[l]!==void 0){let d=i.accessors[t.attributes[l]],f=$s[d.componentType];c[u]=f.name,h[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(l){return new Promise(function(u,d){n.decodeDracoFile(l,function(f){for(let m in f.attributes){let b=f.attributes[m],g=h[m];g!==void 0&&(b.normalized=g)}u(f)},o,c,De,d)})})}},tl=class{constructor(){this.name=ne.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},el=class{constructor(){this.name=ne.KHR_MESH_QUANTIZATION}},So=class extends An{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let a=0;a!==n;a++)e[a]=i[s+a];return e}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=o*2,c=o*3,l=n-e,u=(i-e)/l,d=u*u,f=d*u,m=t*c,b=m-c,g=-2*f+3*d,p=f-d,x=1-g,v=p-d+u;for(let M=0;M!==o;M++){let R=a[b+M+o],y=a[b+M+h]*l,E=a[m+M+o],T=a[m+M]*l;s[M]=x*R+v*y+g*E+p*T}return s}},Hx=new yt,il=class extends So{interpolate_(t,e,i,n){let s=super.interpolate_(t,e,i,n);return Hx.fromArray(s).normalize().toArray(s),s}},Li={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qd={9728:Re,9729:ee,9984:ba,9985:uc,9986:ur,9987:Ye},Xd={33071:ai,33648:xr,10497:ti},Ic={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},In={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vx={CUBICSPLINE:void 0,LINEAR:jn,STEP:ks},Fc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Gx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Me({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),r.DefaultMaterial}function rs(r,t,e){for(let i in e.extensions)r[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function Fn(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Wx(r,t,e){let i=!1,n=!1,s=!1;for(let c=0,l=t.length;c<l;c++){let u=t[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);let a=[],o=[],h=[];for(let c=0,l=t.length;c<l;c++){let u=t[c];if(i){let d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(n){let d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;h.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(h)]).then(function(c){let l=c[0],u=c[1],d=c[2];return i&&(r.morphAttributes.position=l),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function qx(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)r.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xx(r){let t,e=r.extensions&&r.extensions[ne.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Dc(e.attributes):t=r.indices+":"+Dc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)t+=":"+Dc(r.targets[i]);return t}function Dc(r){let t="",e=Object.keys(r).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+r[e[i]]+";";return t}function sl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Yx=new Pt,rl=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Bx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new Va(this.options.manager):this.textureLoader=new Wa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ar(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return rs(s,o,n),Fn(o,n),Promise.all(i._invokeAll(function(h){return h.afterRoot&&h.afterRoot(o)})).then(function(){t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){let a=e[n].joints;for(let o=0,h=a.length;o<h;o++)t[a[o]].isBone=!0}for(let n=0,s=t.length;n<s;n++){let a=t[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;let n=i.clone(),s=(a,o)=>{let h=this.associations.get(a);h!=null&&this.associations.set(o,h);for(let[c,l]of a.children.entries())s(l,o.children[c])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){let n=t(e[i]);if(n)return n}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let i=[];for(let n=0;n<e.length;n++){let s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){let i=t+":"+e,n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){let i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,a){return i.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ne.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,a){i.load(Pn.resolveURL(e.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){let n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){let e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){let a=Ic[n.type],o=$s[n.componentType],h=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new Wt(c,a,h))}let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],h=Ic[n.type],c=$s[n.componentType],l=c.BYTES_PER_ELEMENT,u=l*h,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,v=e.cache.get(x);v||(b=new c(o,p*f,n.count*f/l),v=new Hs(b,f/l),e.cache.add(x,v)),g=new Kn(v,h,d%f/l,m)}else o===null?b=new c(n.count*h):b=new c(o,d,n.count*h),g=new Wt(b,h,m);if(n.sparse!==void 0){let p=Ic.SCALAR,x=$s[n.sparse.indices.componentType],v=n.sparse.indices.byteOffset||0,M=n.sparse.values.byteOffset||0,R=new x(a[1],v,n.sparse.count*p),y=new c(a[2],M,n.sparse.count*h);o!==null&&(g=new Wt(g.array.slice(),g.itemSize,g.normalized));for(let E=0,T=R.length;E<T;E++){let _=R[E];if(g.setX(_,y[E*h]),h>=2&&g.setY(_,y[E*h+1]),h>=3&&g.setZ(_,y[E*h+2]),h>=4&&g.setW(_,y[E*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(t){let e=this.json,i=this.options,s=e.textures[t].source,a=e.images[s],o=this.textureLoader;if(a.uri){let h=i.manager.getHandler(a.uri);h!==null&&(o=h)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,i){let n=this,s=this.json,a=s.textures[t],o=s.images[e],h=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[h])return this.textureCache[h];let c=this.loadImageSource(e,i).then(function(l){l.flipY=!1,l.name=a.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return l.magFilter=qd[d.magFilter]||ee,l.minFilter=qd[d.minFilter]||Ye,l.wrapS=Xd[d.wrapS]||ti,l.wrapT=Xd[d.wrapT]||ti,n.associations.set(l,{textures:t}),l}).catch(function(){return null});return this.textureCache[h]=c,c}loadImageSource(t,e){let i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let a=n.images[t],o=self.URL||self.webkitURL,h=a.uri||"",c=!1;if(a.bufferView!==void 0)h=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return h=o.createObjectURL(d),h});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let l=Promise.resolve(h).then(function(u){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(b){let g=new Ke(b);g.needsUpdate=!0,d(g)}),e.load(Pn.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(h),u.userData.mimeType=a.mimeType||jx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),u});return this.sourceCache[t]=l,l}assignTexture(t,e,i,n){let s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[ne.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[ne.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let h=s.associations.get(a);a=s.extensions[ne.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,h)}}return n!==void 0&&(a.colorSpace=n),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,i=t.material,n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+i.uuid,h=this.cache.get(o);h||(h=new Sr,di.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,h.sizeAttenuation=!1,this.cache.add(o,h)),i=h}else if(t.isLine){let o="LineBasicMaterial:"+i.uuid,h=this.cache.get(o);h||(h=new Er,di.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,this.cache.add(o,h)),i=h}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let h=this.cache.get(o);h||(h=i.clone(),s&&(h.vertexColors=!0),a&&(h.flatShading=!0),n&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(o,h),this.associations.set(h,this.associations.get(i))),i=h}t.material=i}getMaterialType(){return Me}loadMaterial(t){let e=this,i=this.json,n=this.extensions,s=i.materials[t],a,o={},h=s.extensions||{},c=[];if(h[ne.KHR_MATERIALS_UNLIT]){let u=n[ne.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,e))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Dt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],De),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",u.baseColorTexture,fe)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=Fe);let l=s.alphaMode||Fc.OPAQUE;if(l===Fc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Fc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Oe&&(c.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ft(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Oe&&(c.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Oe){let u=s.emissiveFactor;o.emissive=new Dt().setRGB(u[0],u[1],u[2],De)}return s.emissiveTexture!==void 0&&a!==Oe&&c.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,fe)),Promise.all(c).then(function(){let u=new a(o);return s.name&&(u.name=s.name),Fn(u,s),e.associations.set(u,{materials:t}),s.extensions&&rs(n,u,s),u})}createUniqueName(t){let e=be.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[ne.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(h){return jd(h,o,e)})}let a=[];for(let o=0,h=t.length;o<h;o++){let c=t[o],l=Xx(c),u=n[l];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ne.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=jd(new le,c,e),n[l]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){let e=this,i=this.json,n=this.extensions,s=i.meshes[t],a=s.primitives,o=[];for(let h=0,c=a.length;h<c;h++){let l=a[h].material===void 0?Gx(this.cache):this.getDependency("material",a[h].material);o.push(l)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(h){let c=h.slice(0,h.length-1),l=h[h.length-1],u=[];for(let f=0,m=l.length;f<m;f++){let b=l[f],g=a[f],p,x=c[f];if(g.mode===Li.TRIANGLES||g.mode===Li.TRIANGLE_STRIP||g.mode===Li.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Qn(b,x):new pt(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Li.TRIANGLE_STRIP?p.geometry=Lc(p.geometry,ja):g.mode===Li.TRIANGLE_FAN&&(p.geometry=Lc(p.geometry,Pr));else if(g.mode===Li.LINES)p=new Ia(b,x);else if(g.mode===Li.LINE_STRIP)p=new Gs(b,x);else if(g.mode===Li.LINE_LOOP)p=new Fa(b,x);else if(g.mode===Li.POINTS)p=new Da(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&qx(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),Fn(p,s),g.extensions&&rs(n,p,g),e.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&rs(n,u[0],s),u[0];let d=new ce;s.extensions&&rs(n,d,s),e.associations.set(d,{meshes:t});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(t){let e,i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Ne(Ln.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new fi(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),Fn(e,i),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let s=n.pop(),a=n,o=[],h=[];for(let c=0,l=a.length;c<l;c++){let u=a[c];if(u){o.push(u);let d=new Pt;s!==null&&d.fromArray(s.array,c*16),h.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Vs(o,h)})}loadAnimation(t){let e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,a=[],o=[],h=[],c=[],l=[];for(let u=0,d=n.channels.length;u<d;u++){let f=n.channels[u],m=n.samplers[f.sampler],b=f.target,g=b.node,p=n.parameters!==void 0?n.parameters[m.input]:m.input,x=n.parameters!==void 0?n.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),h.push(this.getDependency("accessor",x)),c.push(m),l.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(h),Promise.all(c),Promise.all(l)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let x=0,v=d.length;x<v;x++){let M=d[x],R=f[x],y=m[x],E=b[x],T=g[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let _=i._createAnimationTracks(M,R,y,E,T);if(_)for(let S=0;S<_.length;S++)p.push(_[S])}return new Ha(s,void 0,p)})}createNodeMesh(t){let e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let h=0,c=n.weights.length;h<c;h++)o.morphTargetInfluences[h]=n.weights[h]}),a})}loadNode(t){let e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),a=[],o=n.children||[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));let h=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),h]).then(function(c){let l=c[0],u=c[1],d=c[2];d!==null&&l.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Yx)});for(let f=0,m=u.length;f<m;f++)l.add(u[f]);return l})}_loadNodeShallow(t){let e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],a=s.name?n.createUniqueName(s.name):"",o=[],h=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return h&&o.push(h),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let l;if(s.isBone===!0?l=new Zn:c.length>1?l=new ce:c.length===1?l=c[0]:l=new Se,l!==c[0])for(let u=0,d=c.length;u<d;u++)l.add(c[u]);if(s.name&&(l.userData.name=s.name,l.name=a),Fn(l,s),s.extensions&&rs(i,l,s),s.matrix!==void 0){let u=new Pt;u.fromArray(s.matrix),l.applyMatrix4(u)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return n.associations.has(l)||n.associations.set(l,{}),n.associations.get(l).nodes=t,l}),this.nodeCache[t]}loadScene(t){let e=this.extensions,i=this.json.scenes[t],n=this,s=new ce;i.name&&(s.name=n.createUniqueName(i.name)),Fn(s,i),i.extensions&&rs(e,s,i);let a=i.nodes||[],o=[];for(let h=0,c=a.length;h<c;h++)o.push(n.getDependency("node",a[h]));return Promise.all(o).then(function(h){for(let l=0,u=h.length;l<u;l++)s.add(h[l]);let c=l=>{let u=new Map;for(let[d,f]of n.associations)(d instanceof di||d instanceof Ke)&&u.set(d,f);return l.traverse(d=>{let f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}_createAnimationTracks(t,e,i,n,s){let a=[],o=t.name?t.name:t.uuid,h=[];In[s.path]===In.weights?t.traverse(function(d){d.morphTargetInfluences&&h.push(d.name?d.name:d.uuid)}):h.push(o);let c;switch(In[s.path]){case In.weights:c=fn;break;case In.rotation:c=Yi;break;case In.position:case In.scale:c=pn;break;default:switch(i.itemSize){case 1:c=fn;break;case 2:case 3:default:c=pn;break}break}let l=n.interpolation!==void 0?Vx[n.interpolation]:jn,u=this._getArrayFromAccessor(i);for(let d=0,f=h.length;d<f;d++){let m=new c(h[d]+"."+In[s.path],e.array,u,l);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let i=sl(e.constructor),n=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){let n=this instanceof Yi?il:So;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Kx(r,t,e){let i=t.attributes,n=new Ai;if(i.POSITION!==void 0){let o=e.json.accessors[i.POSITION],h=o.min,c=o.max;if(h!==void 0&&c!==void 0){if(n.set(new w(h[0],h[1],h[2]),new w(c[0],c[1],c[2])),o.normalized){let l=sl($s[o.componentType]);n.min.multiplyScalar(l),n.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new w,h=new w;for(let c=0,l=s.length;c<l;c++){let u=s[c];if(u.POSITION!==void 0){let d=e.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(h.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),h.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),h.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=sl($s[d.componentType]);h.multiplyScalar(b)}o.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;let a=new _i;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function jd(r,t,e){let i=t.attributes,n=[];function s(a,o){return e.getDependency("accessor",a).then(function(h){r.setAttribute(o,h)})}for(let a in i){let o=nl[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(t.indices!==void 0&&!r.index){let a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});n.push(a)}return he.workingColorSpace!==De&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${he.workingColorSpace}" not supported.`),Fn(r,t),Kx(r,t,e),Promise.all(n).then(function(){return t.targets!==void 0?Wx(r,t.targets,e):r})}var Kd=function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(e)?t:r,s,a=WebAssembly.instantiate(o(n),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var M=p.charCodeAt(v);x[v]=M>96?M-97:M>64?M-39:M+4}for(var R=0,v=0;v<p.length;++v)x[R++]=x[v]<60?i[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,R)}function h(p,x,v,M,R,y){var E=s.exports.sbrk,T=v+3&-4,_=E(T*M),S=E(R.length),k=new Uint8Array(s.exports.memory.buffer);k.set(R,S);var W=p(_,v,M,S,R.length);if(W==0&&y&&y(_,T,M),x.set(k.subarray(_,_+v*M)),E(_-E(0)),W!=0)throw new Error("Malformed buffer data: "+W)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},l={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var M=v.data;x.pending-=M.count,x.requests[M.id][M.action](M.value),delete x.requests[M.id]},x}function m(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(n))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+h.toString()+g.toString(),v=new Blob([x],{type:"text/javascript"}),M=URL.createObjectURL(v),R=0;R<p;++R)u[R]=f(M);URL.revokeObjectURL(M)}function b(p,x,v,M,R){for(var y=u[0],E=1;E<u.length;++E)u[E].pending<y.pending&&(y=u[E]);return new Promise(function(T,_){var S=new Uint8Array(v),k=d++;y.pending+=p,y.requests[k]={resolve:T,reject:_},y.object.postMessage({id:k,count:p,size:x,source:S,mode:M,filter:R},[S.buffer])})}function g(p){a.then(function(){var x=p.data;try{var v=new Uint8Array(x.count*x.size);h(s.exports[x.mode],v,x.count,x.size,x.source,s.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(M){self.postMessage({id:x.id,count:x.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,v,M,R){h(s.exports.meshopt_decodeVertexBuffer,p,x,v,M,s.exports[c[R]])},decodeIndexBuffer:function(p,x,v,M){h(s.exports.meshopt_decodeIndexBuffer,p,x,v,M)},decodeIndexSequence:function(p,x,v,M){h(s.exports.meshopt_decodeIndexSequence,p,x,v,M)},decodeGltfBuffer:function(p,x,v,M,R,y){h(s.exports[l[R]],p,x,v,M,s.exports[c[y]])},decodeGltfBufferAsync:function(p,x,v,M,R){return u.length>0?b(p,x,v,l[M],c[R]):a.then(function(){var y=new Uint8Array(p*x);return h(s.exports[l[M]],y,p,x,v,s.exports[c[R]]),y})}}}();var Qd=[["hips","Hips",null,null],["spine","Spine","Spine1","chest"],["chest","Spine2","Neck","neck"],["neck","Neck","Head","head"],["head","Head",null,null],["upperArmL","LeftArm","LeftForeArm","foreArmL"],["foreArmL","LeftForeArm","LeftHand","handL"],["handL","LeftHand","LeftHandMiddle1",[.03,-.182,.012]],["upperArmR","RightArm","RightForeArm","foreArmR"],["foreArmR","RightForeArm","RightHand","handR"],["handR","RightHand","RightHandMiddle1",[-.03,-.182,.012]],["thighL","LeftUpLeg","LeftLeg","shinL"],["shinL","LeftLeg","LeftFoot","footL"],["footL","LeftFoot","LeftToeBase",[.006,-.063,.205]],["thighR","RightUpLeg","RightLeg","shinR"],["shinR","RightLeg","RightFoot","footR"],["footR","RightFoot","RightToeBase",[-.006,-.063,.205]]],Qx=["Index","Middle","Ring","Pinky"];function Ao(r){return new Promise((t,e)=>{let i=atob(r),n=new Uint8Array(i.length);for(let a=0;a<i.length;a++)n[a]=i.charCodeAt(a);let s=new Eo;s.setMeshoptDecoder(Kd),s.parse(n.buffer,"",t,e)})}var To=class{constructor(t,e,i=1.78){let n=t.group,s=n.position.clone(),a=n.quaternion.clone();n.position.set(0,0,0),n.quaternion.identity(),this.root=new ce,this.root.name="glbBody",this.root.add(e.scene),n.add(this.root);let o=null;if(e.scene.traverse(y=>{y.isSkinnedMesh&&!o&&(o=y)}),!o)throw new Error("GLB has no skinned mesh");this.mesh=o,o.frustumCulled=!1,o.layers.enable(1),o.skeleton.pose(),n.updateMatrixWorld(!0);let h=new Map;o.skeleton.bones.forEach(y=>h.set(y.name.replace(/^mixamorig:?/i,""),y)),this.by=h;for(let y of Qd)if(!h.get(y[1]))throw new Error("GLB skeleton is missing "+y[1]);let c=new w,l=new w;{let y=h.get("Head").getWorldPosition(new w).sub(h.get("Hips").getWorldPosition(c)).normalize(),E=h.get("LeftUpLeg").getWorldPosition(new w).sub(h.get("RightUpLeg").getWorldPosition(l)).normalize(),T=new w().crossVectors(E,y).normalize();E.crossVectors(y,T).normalize(),this.root.quaternion.setFromRotationMatrix(new Pt().makeBasis(E,y,T)).invert()}n.updateMatrixWorld(!0);let u=()=>(n.updateMatrixWorld(!0),o.skeleton.update(),o.computeBoundingBox(),o.boundingBox.clone().applyMatrix4(o.matrixWorld)),d=u();this.sourceHeight=d.max.y-d.min.y,this.root.scale.setScalar(i/this.sourceHeight),n.updateMatrixWorld(!0),h.get("Hips").getWorldPosition(c),this.root.position.set(-c.x,-c.y,-c.z),n.updateMatrixWorld(!0),d=u();let f=h.get("Head").getWorldPosition(new w);this.eye=new w(0,d.max.y-.118,f.z+.082),this.mouth=new w(0,d.max.y-.185,f.z+.09),this.top=d.max.y,this.feet=d.min.y;let m=h.get("Hips");this.order=[],m.traverse(y=>{y.isBone&&this.order.push(y)}),this.order.forEach((y,E)=>{y.userData.k=E}),this.parent=this.order.map(y=>y===m?-1:y.parent.userData.k),this.restL=this.order.map(y=>y.quaternion.clone()),this.W=this.order.map(()=>new yt),this.rootParentW=m.parent.getWorldQuaternion(new yt),this.driver=this.order.map(()=>-1),this.aligned=this.order.map(()=>null);let b=y=>new w(hi[A[y]][2],hi[A[y]][3],hi[A[y]][4]),g=new yt;for(let[y,E,T,_]of Qd){let S=h.get(E),k=S.userData.k,W=S.getWorldQuaternion(new yt),Y=new yt;if(T&&_&&h.get(T)){let N=h.get(T).getWorldPosition(new w).sub(S.getWorldPosition(c)).normalize(),D=(Array.isArray(_)?new w(..._):b(_).sub(b(y))).normalize();Y.setFromUnitVectors(N,D)}this.driver[k]=A[y],this.aligned[k]=Y.multiply(W)}this.special=this.order.map(()=>null);let p=h.get("Spine1");if(p){let y=h.get("Spine2").getWorldPosition(new w).sub(p.getWorldPosition(c)).normalize(),E=new yt().setFromUnitVectors(y,new w(0,1,0)).multiply(p.getWorldQuaternion(new yt));this.special[p.userData.k]={type:"mid",aligned:E}}for(let[y,E,T]of[["LeftShoulder",1,A.upperArmL],["RightShoulder",-1,A.upperArmR]]){let _=h.get(y);_&&(this.special[_.userData.k]={type:"clav",side:E,arm:T,restW:_.getWorldQuaternion(new yt)})}this._d=new w,this._e=new ui,this._q2=new yt,this.fingers={Left:[],Right:[]},this.grip={Left:0,Right:0};for(let y of["Left","Right"]){let E=h.get(y+"Hand"),T=new w(0,-1,0);for(let _ of Qx)for(let S=1;S<=3;S++){let k=h.get(`${y}Hand${_}${S}`);if(!k)continue;let W=k.children.find(F=>F.isBone),Y=W?W.getWorldPosition(new w).sub(k.getWorldPosition(c)).normalize():new w(y==="Left"?1:-1,0,0),N=new w().crossVectors(Y,T).normalize(),D=k.parent.getWorldQuaternion(new yt),O=k.getWorldQuaternion(new yt);g.setFromAxisAngle(N,(S===1?.32:.42)*(_==="Pinky"?1.25:_==="Index"?.8:1));let B=g.clone().multiply(O),U=D.invert();this.restL[k.userData.k]=U.clone().multiply(B),k.quaternion.copy(this.restL[k.userData.k]),g.setFromAxisAngle(N,S===1?1.05:S===2?1.35:.9),this.fingers[y].push({bone:k,open:this.restL[k.userData.k].clone(),shut:U.clone().multiply(g.clone().multiply(O))})}}this.D=hi.map(()=>new yt),this.headBone=h.get("Head"),this._q=new yt;let x=Array.isArray(o.material)?o.material:[o.material];for(let y of x)y.roughness=.44,y.metalness=0,y.envMapIntensity=1.3,y.color&&y.color.setRGB(.7,.78,.9),y.needsUpdate=!0;this.cutOn={value:0},this.headRigid=[];let v=`
  if (uCutOn > 0.5 && cutV > 0.0) {
    vec3 rel = position - uCutPos; rel -= uCutDir * dot(rel, uCutDir);
    transformed = uCutPos + rel * min(1.0, uCutR / max(length(rel), 1.0e-5)) - uCutDir * (0.4 * uCutR);
  }`,M=h.get("Head"),R=y=>{for(let E=y.parent;E;E=E.parent)if(E===M)return!0;return!1};e.scene.traverse(y=>{if(!y.isMesh)return;if(!y.isSkinnedMesh){R(y)&&this.headRigid.push(y);return}let E=y.skeleton.bones,T=et=>E.findIndex(ot=>ot.name.replace(/^mixamorig:?/i,"")===et),_=T("Neck"),S=T("Head"),k=T("Spine2");if(_<0||S<0||k<0)return;let W=new Set([_]);M.traverse(et=>{let ot=E.indexOf(et);ot>=0&&W.add(ot)});let Y=y.geometry.attributes.position,N=y.geometry.attributes.skinIndex,D=y.geometry.attributes.skinWeight,O=N.count,B=new Float32Array(O),U=new Float32Array(O),F=new w,P=new w,V=new w,q=0,H=0;for(let et=0;et<O;et++){let ot=0,it=0,wt=0;for(let K=0;K<4;K++){let zt=D.getComponent(et,K),xt=N.getComponent(et,K);it+=zt,W.has(xt)&&(ot+=zt),xt===_&&(wt+=zt)}B[et]=it>0?ot/it:0,U[et]=it>0?wt/it:0,V.fromBufferAttribute(Y,et),U[et]=Math.max(U[et],B[et]>.25&&B[et]<.85?.6:0),U[et]>.5?(F.add(V),q++):B[et]>.95&&(P.add(V),H++)}if(!q||!H)return;y.geometry.setAttribute("aHead",new Wt(B,1)),F.multiplyScalar(1/q),P.multiplyScalar(1/H);let z=P.clone().sub(F).normalize(),G=0,tt=0;for(let et=0;et<O;et++){if(U[et]<=.5)continue;V.fromBufferAttribute(Y,et).sub(F);let ot=V.dot(z),it=V.addScaledVector(z,-ot).length();ot<G&&(G=ot),it>tt&&(tt=it)}let Q={uCutOn:this.cutOn,uCutPos:{value:F.clone().addScaledVector(z,G*.55)},uCutDir:{value:z},uCutR:{value:tt*.8},uCutBone:{value:k}};y.frustumCulled=!1,this.cutInfo=Q;for(let et of Array.isArray(y.material)?y.material:[y.material])et.onBeforeCompile=ot=>{Object.assign(ot.uniforms,Q),ot.vertexShader=`attribute float aHead; uniform float uCutOn; uniform vec3 uCutPos; uniform vec3 uCutDir; uniform float uCutR; uniform float uCutBone; varying float vCut;
`+ot.vertexShader.replace("#include <skinbase_vertex>",`float cutV = aHead - 0.6;
  vCut = cutV;
  #include <skinbase_vertex>
  #ifdef USE_SKINNING
  if (uCutOn > 0.5 && cutV > 0.0) { boneMatX = getBoneMatrix(uCutBone); boneMatY = boneMatX; boneMatZ = boneMatX; boneMatW = boneMatX; }
  #endif`).replace("#include <morphtarget_vertex>","#include <morphtarget_vertex>"+v),ot.fragmentShader=`uniform float uCutOn; varying float vCut;
`+ot.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) diffuseColor.a = 1.0;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) gl_FragColor.rgb = vec3(0.010, 0.012, 0.014);`)},et.customProgramCacheKey=()=>"eos-neck-lid-"+y.uuid,et.needsUpdate=!0}),this.material=x[0],n.position.copy(s),n.quaternion.copy(a),n.updateMatrixWorld(!0)}setHeadVisible(t){this.cutOn.value=t?0:1}setGrip(t,e){for(let[i,n]of[["Left",t],["Right",e]])if(!(Math.abs(this.grip[i]-n)<.01)){this.grip[i]=n;for(let s of this.fingers[i])s.bone.quaternion.copy(s.open).slerp(s.shut,n),this.restL[s.bone.userData.k].copy(s.bone.quaternion)}}update(t){let e=this.D;for(let a=0;a<t.length;a++){let o=hi[a][1];o<0?e[a].copy(t[a].quaternion):e[a].copy(e[o]).multiply(t[a].quaternion)}let i=this.W,n=this.order,s=this._q;for(let a=0;a<n.length;a++){let o=this.parent[a]<0?this.rootParentW:i[this.parent[a]],h=this.driver[a];if(h>=0)i[a].copy(e[h]).multiply(this.aligned[a]),n[a].quaternion.copy(s.copy(o).invert().multiply(i[a]));else if(this.special[a]){let c=this.special[a];if(c.type==="mid")i[a].copy(e[A.spine]).slerp(e[A.chest],.5).multiply(c.aligned);else{let l=this._d.set(0,-1,0).applyQuaternion(t[c.arm].quaternion),u=Math.max(0,Math.min(1,(l.y+.35)/1.35)),d=Math.max(0,Math.min(1,l.z));this._q2.setFromEuler(this._e.set(0,-c.side*.3*d,c.side*.62*u*u*(3-2*u),"YXZ")),i[a].copy(e[A.chest]).multiply(this._q2).multiply(c.restW)}n[a].quaternion.copy(s.copy(o).invert().multiply(i[a]))}else i[a].copy(o).multiply(this.restL[a])}}};var Zd={scream:[["scream_eyes",1,"snap"],["scream_mouth",1,"open"]],fear:[["fear_brows",1,"snap"],["scream_mouth",.85,"open"]],agony:[["agony",1,"slow"]],sob:[["sob",1,"slow"]],terror:[["fear_brows",1,"snap"],["scream_eyes",.25,"snap"],["shout_mouth",1,"open"]],hit:[["eyes_wide",1,"snap"],["clench",1,"snap"],["fear_brows",.3,"snap"]],strain:[["clench",.85,"slow"],["strain_eyes",1,"slow"]],dying:[["exhaust",1,"slow"],["sob",.35,"slow"]],shock:[["jaw_drop",1,"open"],["eyes_wide",.8,"snap"],["fear_brows",.6,"snap"]],gasp:[["gasp",1,"snap"],["eyes_wide",.5,"snap"]],silent:[["jaw_drop",.9,"slow"],["strain_eyes",.8,"slow"]],wince:[["strain_eyes",.7,"snap"],["clench",.6,"snap"]],hold:[["clench",.4,"slow"],["eyes_wide",.55,"slow"],["fear_brows",.35,"slow"]],choke:[["eyes_wide",1,"snap"],["gasp",.55,"open"],["exhaust",.2,"slow"]],howl:[["sob",.7,"slow"],["shout_mouth",1,"open"]],pant:[["exhaust",.6,"slow"],["gasp",.45,"breath"]],blank:[["exhaust",.5,"slow"],["eyes_wide",.4,"slow"],["jaw_drop",.25,"slow"]],groan:[["strain_eyes",.9,"slow"],["agony",.5,"slow"],["clench",.5,"slow"],["fear_brows",.25,"slow"]],moan:[["agony",.75,"slow"],["sob",.4,"slow"],["exhaust",.35,"breath"],["strain_eyes",.35,"slow"]]},Zx={snap:16,open:8,slow:3.2,breath:6},Ro=class{constructor(){this.mesh=null,this.dict=null,this.inf=null,this.cur={},this.tgt={},this.shape={},this.forced=null,this.forcedT=0,this.forcedGain=1,this.label="none",this.time=0,this.blinkT=2,this.blink=0}attach(t){if(!t||!t.morphTargetDictionary||!t.morphTargetInfluences)return!1;this.mesh=t,this.dict=t.morphTargetDictionary,this.inf=t.morphTargetInfluences;for(let e of Object.keys(this.dict))this.cur[e]=0,this.tgt[e]=0,this.shape[e]="slow";return!0}play(t,e,i=1){Zd[t]&&(this.forced=t,this.forcedT=e,this.forcedGain=i)}update(t,e){if(!this.mesh)return;this.time+=t;let i=this.tgt,n=this.shape;for(let u in i)i[u]=0;let s=0;this.label="none";let a=(u,d)=>{if(!(d<=.01)){d>s&&(s=d,this.label=u);for(let[f,m,b]of Zd[u]){if(i[f]===void 0)continue;let g=m*Math.min(1,d)*(b==="breath"?.5+.5*Math.sin(e.breathPhase*6.283):1);g>i[f]&&(i[f]=g,n[f]=b)}}};if(this.forcedT-=t,this.forced&&this.forcedT>0?a(this.forced,this.forcedGain):this.forced=null,!e.alive||e.blackout>.75)a("blank",1);else if(e.mouthUnder){let u=e.oxygen;e.impact>1&&a("hit",Math.min(1,e.impact/1.8)),u<14?(a("silent",1),a("agony",.7)):u<34?(a("choke",1),a("agony",.5*(34-u)/20)):u<62?(a("strain",.5+.5*(62-u)/28),a("hold",.6)):a("hold",1),e.blackout>.15&&a("dying",e.blackout*1.2)}else e.impact>1&&a("hit",Math.min(1,e.impact/1.8)),e.air>.3&&a("shock",e.air),e.brace>.3&&(a(e.crestDist<12?"terror":"fear",e.brace),e.brace>.85&&e.crestDist<5&&a("hold",.8)),e.gaspTimer>0&&(e.inhaling?a("gasp",.45+.55*Math.min(1,e.gaspTimer/2.5)):a("pant",1),e.swallow>.25&&a("wince",.7)),a("choke",mt((40-e.oxygen)/30)),e.stamina<24&&a("dying",1-e.stamina/24),e.effort>.7&&a("strain",Math.min(1,(e.effort-.7)*1.5)),e.temp<35.2&&a("groan",mt((35.2-e.temp)/2)*.7),s<.35&&a("pant",.25+.5*e.exertion);this.blinkT-=t,this.blinkT<=0&&(this.blink=.16,this.blinkT=1.8+Math.random()*3.5),this.blink=Math.max(0,this.blink-t),this.blink>0&&!e.mouthUnder&&i.strain_eyes!==void 0&&(i.strain_eyes=Math.max(i.strain_eyes,.9));let o=this.inf,h=this.dict,c=this.cur,l=0;for(let u in c){let f=i[u]>c[u]?Zx[n[u]]||4:3.4;c[u]+=(i[u]-c[u])*(1-Math.exp(-t*f));let m=1+.12*Math.sin(this.time*(2.3+l*.37)+l*1.9)*(c[u]>.05?1:0);o[h[u]]=Math.max(0,Math.min(1.15,c[u]*m)),l++}}};var Jx={gasp:[["b_gasp3",0,3,.72],["b_gasp4",0,3,.7],["b_gasp2",0,3,.8],["b_gasp1",0,3,.9]],inhale:[["b_gasp3",0,.85,.62],["b_gasp4",0,.62,.6]],cough:[["b_choke",.25,1.7,1],["b_choke",1.95,3,1.1],["b_choke",3.9,5,1.2],["b_choke",7.15,8.95,1.1],["b_choke",9.4,10.8,.9]],sputter:[["b_choke",5.45,6.1,1.1],["b_choke",14.25,14.7,.9],["b_choke",15.4,16.5,1],["b_choke",19.45,20.05,.6]],retch:[["b_choke",11.65,14.15,1.2],["b_choke",17.65,18.8,.8]],groan:[["b_under",0,1.25,1.2],["b_under",2.05,3.45,1.2]],bubbles:[["b_under",4.1,8.15,.9]]},$x={gasp:1.2,inhale:3,cough:1.2,sputter:1.4,retch:4,groan:3,bubbles:1.5},ty={gasp:"gasp",inhale:"gasp",cough:"wince",sputter:"wince",retch:"choke",groan:"silent",bubbles:"choke"},ey={cough:1,sputter:1,retch:1},Co=class{constructor(t,e,i={}){this.audio=t,this.face=e,this.hooks=i,this.t=0,this.cool={},this.cur={prio:0,until:0},this.jobs=[],this.marks={},this.prevBrace=0,this.prevAir=0,this.prevDive=!1,this.splashCool=0,this.slapCool=0,this.gurgleUntil=0,this.gT=0,this.bubT=2,this.bed=0,this.last="",this.lastPick={},this.count=0}say(t,e,i,n){let s=this.t;if(s<(this.cool[t]||0)||s<this.cur.until&&e<=this.cur.prio)return 0;let a=Jx[t],o=Math.random()*a.length|0;a.length>1&&o===this.lastPick[t]&&(o=(o+1)%a.length),this.lastPick[t]=o;let[h,c,l,u]=a[o],d=!!(n&&n.under),f=this.audio.playVoice(h,i*u*(d?1.3:1),.97+Math.random()*.06,[c,l]);this.last=t,this.count++;let m=f||l-c;return this.cur={prio:e,until:s+m*.85},this.cool[t]=s+m+$x[t],this.face&&this.face.play(d?t==="groan"?"silent":"choke":ty[t],m+.25),ey[t]&&this.hooks.cough&&this.hooks.cough(m),d&&(this.audio.gurgle(.95),this.hooks.bubbles&&this.hooks.bubbles(Math.min(44,Math.round(12+m*14))),this.gurgleUntil=s+m,this.gT=.3),m}later(t,e){this.jobs.push({at:this.t+t,fn:e})}onEvent(t,e,i){if(!(!i||!i.alive))if(t==="surface")if(e.time>1.2||e.need>.2){let n=this.say("gasp",6,1,i);e.time>7||i.swallow>.45?this.later(Math.max(1.1,n*.6),s=>{s.under||this.say("retch",6,1,s)}):(e.time>3.2||i.swallow>.2)&&this.later(Math.max(1,n*.55),s=>{s.under||this.say("cough",5,.95,s)})}else e.time>.25&&(i.swallow>.1||Math.random()<.5)&&this.say("sputter",3,.8,i);else t==="impact"?e.strength>1.15&&!i.under&&this.say("sputter",4,1,i):t==="exhale"&&e.cough?i.under||this.say("cough",4,.85,i):t==="splash"?this.t>this.splashCool&&e.v>1.8&&!i.camUnder&&(this.splashCool=this.t+.45,this.audio.playClip(e.v>4?Math.random()<.5?"w_splash2":"w_splash1":"w_splash3",Math.min(.9,.15+e.v*.09),.9+Math.random()*.25,Math.random()*1.2-.6)):t==="limb"&&this.t>this.slapCool&&e.v>1.3&&!i.camUnder&&(this.slapCool=this.t+.07,this.audio.playClip("w_slap"+(1+(Math.random()*6|0)),Math.min(.75,.06+e.v*.085)*(e.kind==="arm"?.6:1),.85+Math.random()*.4,e.pan||0))}update(t,e){this.t+=t;for(let c=this.jobs.length-1;c>=0;c--)this.t>=this.jobs[c].at&&this.jobs.splice(c,1)[0].fn(e);let i=e.alive&&!e.under,n=c=>Math.max(0,Math.min(1,c)),s=n(.3+.55*(e.exertion||0)+(e.gaspTimer>0?.35:0)+.3*(e.struggle||0)+.25*n(e.brace||0)+.2*(e.air||0)+.38*(e.fear||0)),a=n((30-e.stamina)/25),o=this.t<this.cur.until?.28:1,h=i?(1-(e.blackout||0))*o:0;if(this.bed=h*(.2+.8*s)*(1-.7*a),this.audio.setBreath(this.bed*.95,h*(.12+.88*a)*.9,.92+.42*s,i),!!e.alive)if(e.under&&this.t<this.gurgleUntil&&(this.gT-=t,this.gT<=0&&(this.audio.gurgle(.6),this.gT=.32+Math.random()*.3,this.hooks.bubbles&&this.hooks.bubbles(7))),!e.under&&e.mouthDepth!==void 0&&e.mouthDepth>-.07&&(this.lipT=(this.lipT||0)-t,this.lipT<=0&&(this.lipT=.35+Math.random()*.35,this.audio.gurgle(.35+.3*Math.random()),this.hooks.bubbles&&e.mouthDepth>-.02&&this.hooks.bubbles(3))),!e.under&&(e.fear||0)>.68&&(this.fearT=(this.fearT===void 0?3:this.fearT)-t,this.fearT<=0&&(this.fearT=3.5+Math.random()*4.5,this.say("gasp",2,.55+.4*e.fear,e))),e.brace>.7&&this.prevBrace<=.7&&e.crestHeight>6&&!e.under&&this.say("inhale",5,1,e),this.prevBrace=e.brace,e.dive&&!this.prevDive&&!e.under&&this.say("inhale",5,.9,e),this.prevDive=e.dive,e.air>.5&&this.prevAir<=.5&&!e.under&&this.say("inhale",5,1,e),this.prevAir=e.air,e.under){let c=n(((e.tumble||0)-.25)*2.2+((e.turb||0)-.3)*1.2);c>.05?(this.thrG=(this.thrG||0)-t,this.thrG<=0&&(this.thrG=.16+(1-c)*.3+Math.random()*.14,this.audio.gurgle(.45+.5*c),this.hooks.bubbles&&this.hooks.bubbles(Math.round(5+9*c))),this.thrV=(this.thrV||0)-t,this.thrV<=0&&(this.thrV=1.7+Math.random()*1.4,this.say("bubbles",3,.6+.4*c,e))):this.thrV=Math.min(this.thrV||0,.4);let l=e.oxygen;l<48&&!this.marks.a&&(this.marks.a=!0,this.say("groan",5,.8,e)),l<30&&!this.marks.b&&(this.marks.b=!0,this.say("groan",6,1,e)),l<14&&!this.marks.c&&(this.marks.c=!0,this.say("groan",7,1,e)),l<72&&(this.bubT-=t*(1+n((50-l)/40)),this.bubT<=0&&(this.bubT=2.6+Math.random()*2.4,this.say("bubbles",2,.55+.4*n((60-l)/50),e)))}else e.oxygen>60&&(this.marks.a=this.marks.b=this.marks.c=!1)}};var iy=`
varying vec3 vP;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vP = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,ny=`
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
}`,sy=`
varying vec2 vP;
void main() { vP = (uv - 0.5) * 2.0 * 5.2; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,ry=`
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
}`,as=25,Po=class{constructor(t){this.waves=t,this.group=new ce,this.group.visible=!1,this.state="none",this.arriveAt=240,this.hoverTime=0,this.hold=0,this.rescued=!1,this.pos=new w,this.vel=new w,this.ring=new w,this.ringVel=new w,this.tan=.125,this.time=0,this.aim=new w,this._s=gi(),this._v=new w,this._d=new w,this._down=new w(0,-1,0),this._from=new w;let e=this.heli=new ce,i=new Me({color:13620438,roughness:.45,metalness:.2}),n=new Me({color:13127708,roughness:.5,metalness:.1}),s=new Me({color:1316892,roughness:.5,metalness:.4}),a=new Me({color:395532,roughness:.08,metalness:.8});{let F=document.createElement("canvas");F.width=F.height=512;let P=F.getContext("2d");P.fillStyle="#e9ecee",P.fillRect(0,0,512,512);let V=7,q=()=>(V=V*16807%2147483647,V/2147483647);for(let z=0;z<2600;z++){let G=205+q()*45;P.fillStyle=`rgba(${G},${G},${G+3},0.25)`,P.fillRect(q()*512,q()*512,2+q()*5,2+q()*5)}for(let z=0;z<46;z++){let G=q()*512,tt=3+q()*14,Q=P.createLinearGradient(0,0,0,512);Q.addColorStop(0,"rgba(60,62,66,0)"),Q.addColorStop(.3+q()*.3,`rgba(60,62,66,${.05+q()*.12})`),Q.addColorStop(1,"rgba(60,62,66,0)"),P.fillStyle=Q,P.fillRect(G,0,tt,512)}P.strokeStyle="rgba(40,44,50,0.62)",P.lineWidth=1.6;for(let z of[64,150,256,330,420,500])P.beginPath(),P.moveTo(0,z),P.lineTo(512,z),P.stroke();for(let z of[0,86,128,214,256,342,384,470])P.beginPath(),P.moveTo(z,0),P.lineTo(z,512),P.stroke();P.fillStyle="rgba(50,54,60,0.55)";for(let z of[58,70,144,156,250,262,324,336,414,426])for(let G=4;G<512;G+=9)P.fillRect(G,z,1.6,1.6);for(let z of[80,92,208,220,336,348,464,476])for(let G=4;G<512;G+=9)P.fillRect(z,G,1.6,1.6);let H=new Oi(F);H.colorSpace=fe,H.wrapS=H.wrapT=ti,H.repeat.set(4,3),H.anisotropy=4,i.map=H,i.color.set(14672869)}let o=(F,P,V,q,H=512)=>{let z=document.createElement("canvas");z.width=H,z.height=Math.round(H*V/P);let G=z.getContext("2d");G.textAlign="center",G.textBaseline="middle",G.fillStyle=q;let tt=z.height/F.length;F.forEach(([et,ot],it)=>{G.font=`900 ${Math.round(tt*ot)}px "Arial Black", "Malgun Gothic", "Noto Sans KR", Arial, sans-serif`,G.fillText(et,H/2,tt*(it+.5),H*.96)});let Q=new Oi(z);return Q.colorSpace=fe,Q.anisotropy=4,new pt(new Mi(P,V),new Me({map:Q,transparent:!0,alphaTest:.35,roughness:.6,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}))},h=[[.02,3.35],[.55,3.2],[.95,2.8],[1.22,2.1],[1.32,1.2],[1.32,0],[1.25,-1],[1,-1.9],[.62,-2.6],[.4,-3.6],[.3,-5.4],[.22,-7.3],[.12,-8.2],[.02,-8.35]],c=new pt(new Ws(h.map(([F,P])=>new ft(F,P)),28),i);c.rotation.x=Math.PI/2,c.scale.set(1,1,1.12),e.add(c);let l=new pt(new xe(1.345,1.3,.9,28,1,!0),n);l.rotation.x=Math.PI/2,l.scale.set(1,1,1.12),l.position.z=-.75,e.add(l);let u=new pt(new xe(.33,.3,.7,14,1,!0),n);u.rotation.x=Math.PI/2,u.position.set(0,0,-5.6),e.add(u);let d=[[1.335,.9],[1.335,1.25],[1.235,2.1],[.965,2.8],[.565,3.2],[.03,3.36]].map(([F,P])=>new ft(F*1.012,P)),f=new pt(new Ws(d,20,Math.PI/2+.38,Math.PI-.76),a);f.rotation.x=Math.PI/2,f.scale.set(1,1,1.12),e.add(f);for(let F of[-1,1]){let P=new pt(new Ce(.05,.62,1.05),a);P.position.set(F*1.335,.42,-1.25),e.add(P);let V=new pt(new Ce(.06,1.5,.09),i);V.position.set(F*1.31,.2,.92),e.add(V)}let m=new pt(new Ce(1.5,.12,3.6),s);m.position.set(0,-1.44,.2),e.add(m);let b=new pt(new ji(1,18,12),i);b.scale.set(.85,.55,1.9),b.position.set(0,1.35,-.5),e.add(b);for(let F of[-1,1]){let P=new pt(new xe(.16,.2,.9,10),s);P.rotation.x=Math.PI/2,P.position.set(F*.55,1.35,-1.9),e.add(P)}let g=new pt(new Ce(.1,2,1),i);g.position.set(0,.95,-7.9),g.rotation.x=-.42,e.add(g);let p=new pt(new Ce(.11,.5,.75),n);p.position.set(0,1.78,-8.28),p.rotation.x=-.42,e.add(p);let x=new pt(new Ce(2.6,.07,.6),i);x.position.set(0,.1,-6.9),e.add(x);let v=new pt(new xe(.13,.2,.75,10),s);v.position.set(0,2.05,-.2),e.add(v);let M=new pt(new xe(.34,.34,.16,12),s);M.position.set(0,2.42,-.2),e.add(M);for(let F of[-1,1]){let P=new pt(new xe(.06,.06,4.6,8),s);P.rotation.x=Math.PI/2,P.position.set(F*1.35,-1.75,.3),e.add(P);let V=new pt(new xe(.06,.06,.6,8),s);V.rotation.x=Math.PI/2-.6,V.position.set(F*1.35,-1.6,2.8),e.add(V);for(let q of[-1,1]){let H=new pt(new xe(.05,.05,1.05,6),s);H.position.set(F*1.12,-1.28,.3+q*1.15),H.rotation.z=-F*.45,e.add(H)}}let R=new pt(new Ce(.06,1.35,1.5),new Oe({color:new Dt(.06,.04,.018)}));R.position.set(1.325,.05,.1),e.add(R);let y=new pt(new ji(.2,10,8),new Oe({color:329223}));y.position.set(1.36,.35,.45),y.scale.set(.5,1,1),e.add(y);let E=new pt(new Ce(.1,.55,.42),new Oe({color:329223}));E.position.set(1.36,-.08,.45),e.add(E);let T=new pt(new xe(.06,.06,1.3,8),s);T.rotation.z=Math.PI/2-.25,T.position.set(1.75,1,.1),e.add(T);let _=new pt(new xe(.16,.16,.34,10),s);_.rotation.x=Math.PI/2,_.position.set(2.32,.86,.1),e.add(_);{let F=o([["RESCUE",.92]],1.45,.38,"#b8431a");F.position.set(-1.345,-.3,.52),F.rotation.y=-Math.PI/2,e.add(F);let P=o([["\uAD6C\uC870",.9]],.62,.36,"#b8431a");P.position.set(-1.33,-.75,.52),P.rotation.y=-Math.PI/2,e.add(P);for(let H of[-1,1]){let z=o([["119",.95]],.62,.36,"#f1f3f4");z.position.set(H*1.37,-.28,H>0?-1:-.75),z.rotation.y=H*Math.PI/2,e.add(z)}let V=o([["119",.95],["RESCUE",.62]],1.35,2.3,"#d4572a");V.position.set(0,-1.512,.25),V.rotation.x=Math.PI/2,e.add(V),V.material.emissiveMap=V.material.map,V.material.emissive.set(16777215),V.material.emissiveIntensity=.55;let q=o([["119",.9]],.5,.3,"#b8431a");q.position.set(.062,.85,-7.86),q.rotation.set(-.42,Math.PI/2,0,"YXZ"),e.add(q)}{let F=new pt(new xe(.26,.2,.34,14),s);F.rotation.x=-.5,F.position.set(0,-1.16,2.1),e.add(F);let P=new pt(new dn(.235,.035,8,18),s);P.rotation.x=Math.PI/2-.5,P.position.set(0,-1.29,2.2),e.add(P);let V=new pt(new Ce(.62,.07,.07),s);V.position.set(0,-1.05,2.05),e.add(V);for(let Q of[-1,1]){for(let wt of[1.25,-.75]){let K=new pt(new un(.17,1.15,4,10),new Me({color:2303787,roughness:.8}));K.rotation.x=Math.PI/2,K.position.set(Q*1.35,-1.62,wt),e.add(K)}let et=new pt(new xe(.012,.012,.75,4),s);et.position.set(Q*.3,1.55,2.25),et.rotation.x=.5,e.add(et);let ot=new pt(new xe(.014,.014,.5,5),s);ot.rotation.x=Math.PI/2,ot.position.set(Q*.42,-.62,3.2),e.add(ot);let it=new pt(new Ce(.05,.55,.5),i);it.position.set(Q*1.3,.1,-6.9),e.add(it)}let q=new pt(new Ce(.34,.05,1.3),s);q.position.set(1.5,-.95,.1),e.add(q);for(let Q of[.3,.62]){let et=new pt(new un(.075,.42,3,8),new Me({color:11553308,roughness:.7}));et.position.set(1.47,-.72,Q),et.rotation.z=.12,e.add(et);let ot=new pt(new Ce(.12,.1,.24),s);ot.position.set(1.5,-1,Q+.04),e.add(ot)}for(let[Q,et,ot,it]of[[0,.52,-4.4,.7],[0,.46,-5.9,.5],[0,-1.62,-1.4,.4],[.5,1.88,.9,.45]]){let wt=new pt(new xe(.012,.02,it,5),s);wt.position.set(Q,et+(et>0?it/2:-it/2),ot),wt.rotation.x=et>0?-.35:.35,e.add(wt)}let H=new pt(new xe(.03,.03,.9,6),s);H.position.set(0,-.42,-7.6),H.rotation.x=.9,e.add(H);let z=new pt(new Ce(.16,.22,.2),n);z.position.set(2.32,.62,.1),e.add(z);let G=new pt(new xe(.035,.035,.9,6),s);G.rotation.z=Math.PI/2+.75,G.position.set(1.72,.62,.1),e.add(G),this.bladeRoots=new ce,this.bladeRoots.position.set(0,2.47,-.2);for(let Q=0;Q<4;Q++){let et=new pt(new Ce(2.3,.035,.26),s);et.position.set(Math.cos(Q*Math.PI/2)*1.25,0,Math.sin(Q*Math.PI/2)*1.25),et.rotation.y=-Q*Math.PI/2,this.bladeRoots.add(et)}e.add(this.bladeRoots);let tt=new pt(new ji(.2,10,6),s);tt.scale.y=.5,tt.position.set(0,2.55,-.2),e.add(tt)}let S=(F,P,V)=>{let q=document.createElement("canvas");q.width=q.height=256;let H=q.getContext("2d");H.translate(128,128);let z=H.createRadialGradient(0,0,8,0,0,126);z.addColorStop(0,`rgba(30,35,40,${P*.5})`),z.addColorStop(.8,`rgba(30,35,40,${P})`),z.addColorStop(.97,`rgba(52,58,66,${P*1.5})`),z.addColorStop(1,"rgba(30,35,40,0)"),H.fillStyle=z,H.beginPath(),H.arc(0,0,126,0,6.283),H.fill();for(let tt=0;tt<F;tt++){H.save(),H.rotate(tt*6.283/F);let Q=H.createLinearGradient(0,-16,0,16);Q.addColorStop(0,"rgba(20,24,28,0)"),Q.addColorStop(.5,`rgba(20,24,28,${V})`),Q.addColorStop(1,"rgba(20,24,28,0)"),H.fillStyle=Q,H.beginPath(),H.moveTo(6,0),H.lineTo(124,-15),H.lineTo(124,15),H.closePath(),H.fill(),H.restore()}let G=new Oi(q);return G.colorSpace=qe,G};this.rotor=new pt(new qs(6.3,48),new Oe({map:S(4,.22,.5),transparent:!0,side:Fe,depthWrite:!1})),this.rotor.rotation.x=-Math.PI/2,this.rotor.position.set(0,2.5,-.2),e.add(this.rotor),this.tail=new pt(new qs(1.05,24),new Oe({map:S(2,.2,.4),transparent:!0,side:Fe,depthWrite:!1})),this.tail.position.set(.22,1.25,-8.15),this.tail.rotation.y=Math.PI/2,e.add(this.tail);let k=(F,P,V,q,H,z,G=.13)=>{let tt=new pt(new ji(G,8,6),new Oe({color:new Dt(F,P,V)}));return tt.position.set(q,H,z),e.add(tt),tt};k(2.6,.12,.1,1.35,.1,.6),k(.1,2.4,.4,-1.35,.1,.6),this.strobe=k(5,5,5.6,0,1.75,-7.6,.16),this.beacon=k(6,.25,.2,0,-.55,-3.4,.14),this.lampHead=k(5,5.8,7,0,-1.25,2.2,.22),this.group.add(e),this.spotLight=new Xs(13952255,0,0,.16,.7,0),this.spotLight.layers.enableAll(),this.group.add(this.spotLight,this.spotLight.target),this.beamMat=new se({uniforms:{uNoise:at.uNoise,uTime:at.uTime,uI:{value:0},uApex:{value:new w},uAxis:{value:new w(0,-1,0)},uLen:{value:1},uTan:{value:this.tan},uWaterY:{value:0}},vertexShader:iy,fragmentShader:ny,transparent:!0,blending:Xn,depthWrite:!1,side:yi});let W=new xe(.02,1,1,32,1,!1);W.translate(0,-.5,0),this.beam=new pt(W,this.beamMat),this.beam.frustumCulled=!1,this.beam.renderOrder=18,this.group.add(this.beam);let Y=new Me({color:9279131,roughness:.55,metalness:.4,emissive:1843236});this.ringMesh=new ce;let N=.335,D=.092;this.ringR=N,this.ringT=D,this.bridleTop=.44;let O=new Me({color:7614479,roughness:.7,metalness:.03}),B=new Me({color:7106675,roughness:.7,metalness:.03}),U=new pt(new dn(N,D,14,36),O);this.ringMesh.add(U);for(let F=0;F<4;F++){let P=new pt(new dn(N,D+.004,12,5,.4),B);P.rotation.z=F*Math.PI/2+.6,this.ringMesh.add(P)}for(let F=0;F<3;F++){let P=F*2.094+.52,V=new pt(new xe(.007,.007,1,4),Y),q=new w(Math.cos(P)*N,Math.sin(P)*N,-D*.8),H=new w(0,0,-this.bridleTop);V.position.copy(q).add(H).multiplyScalar(.5),V.scale.y=q.distanceTo(H),V.quaternion.setFromUnitVectors(new w(0,1,0),H.clone().sub(q).normalize()),this.ringMesh.add(V)}{let F=new pt(new un(.03,.08,3,8),new Me({color:10258998,roughness:.5,metalness:.5}));F.rotation.x=Math.PI/2,F.position.set(0,0,-this.bridleTop-.05),this.ringMesh.add(F);let P=new pt(new dn(.03,.008,6,12),Y);P.position.set(0,0,-this.bridleTop+.01),P.rotation.y=Math.PI/2,this.ringMesh.add(P);let V=new pt(new dn(N,D+.012,6,40),new Me({color:1777185,roughness:.9}));V.scale.set(1,1,.16),V.position.z=-D*.8,this.ringMesh.add(V)}this.strobeR=new pt(new ji(.035,8,6),new Oe({color:new Dt(6,6,6.5)})),this.strobeR.position.set(N,0,-D-.025),this.ringMesh.add(this.strobeR),this.ringMesh.traverse(F=>{F.isMesh&&F.layers.enable(1)}),this.group.add(this.ringMesh),this.rope=[],this.ropeGroup=new ce,this.group.add(this.ropeGroup);for(let F=0;F<as;F++)this.rope.push({p:new w,q:new w});{let F=(as-1)*4+1,P=7,V=P+1;this.ropeRings=F,this.ropeRad=P;let q=new Float32Array(F*V*3),H=new Float32Array(F*V*3),z=new Float32Array(F*V*2),G=[];for(let it=0;it<F;it++)for(let wt=0;wt<V;wt++)z[(it*V+wt)*2]=wt/P,z[(it*V+wt)*2+1]=it*.55;for(let it=0;it<F-1;it++)for(let wt=0;wt<P;wt++){let K=it*V+wt,zt=K+1,xt=K+V,Ct=xt+1;G.push(K,xt,zt,zt,xt,Ct)}let tt=new le;tt.setAttribute("position",new Wt(q,3).setUsage(Bi)),tt.setAttribute("normal",new Wt(H,3).setUsage(Bi)),tt.setAttribute("uv",new Wt(z,2).setUsage(Bi)),tt.setIndex(G);let Q=document.createElement("canvas");Q.width=32,Q.height=32;let et=Q.getContext("2d");et.fillStyle="#b9b29a",et.fillRect(0,0,32,32),et.strokeStyle="#5f5a4c",et.lineWidth=3;for(let it=-32;it<64;it+=8)et.beginPath(),et.moveTo(it,0),et.lineTo(it+32,32),et.stroke();let ot=new Oi(Q);ot.wrapS=ot.wrapT=ti,ot.colorSpace=fe,this.ropeMesh=new pt(tt,new Me({map:ot,roughness:.85,metalness:0,emissive:1381391})),this.ropeMesh.frustumCulled=!1,this.ropeGroup.add(this.ropeMesh),this.ropePts=this.rope.map(()=>new w),this._rp=new w,this._rt=new w,this._rn=new w(1,0,0),this._rb=new w,this._rq=new w}this.ropeLen=20,this._top=new w,this.station=new w,this.holdNeed=2.6,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.liftBase=0,this.ringSpin=0,this._qr=new yt,this._er=new ui,this.lineDir=new w(0,1,0),this.hangDir=new w(0,1,0),this.hoistAt=new w(0,-1.2,0),this.lampAt=new w(0,-1.3,0)}_local(t,e){let i=this.heli.rotation.y,n=Math.cos(i),s=Math.sin(i);return e.set(this.pos.x+t.x*n+t.z*s,this.pos.y+t.y,this.pos.z-t.x*s+t.z*n)}setModel(t){let e=this.heli;for(let d of e.children)d.visible=!1;let i=t.scene;i.name="md902";let n=d=>i.getObjectByName(d),s=n("body"),a=n("glass"),o=n("hub"),h=n("blades");if(!s||!o||!h)throw new Error("helicopter model: parts missing");s.material.envMapIntensity=.6,s.material.color.setScalar(1.25),a&&(a.material.envMapIntensity=1,a.material.vertexColors=!1,a.material.color.setRGB(.012,.016,.02)),this.spinHub=new ce,this.spinBlades=new ce,this.spinHub.add(o),this.spinBlades.add(h),this.spinBlades.visible=!1,e.add(i,this.spinHub,this.spinBlades);let c=new Me({color:1316892,roughness:.5,metalness:.4}),l=d=>(e.add(d),d);this.rotorMat=new se({uniforms:{uAngle:{value:0},uSmear:{value:.6},uLit:{value:new w(.1,.1,.1)}},vertexShader:sy,fragmentShader:ry,transparent:!0,side:Fe,depthWrite:!1}),this.rotor=l(new pt(new qs(5.2,72),this.rotorMat)),this.rotor.rotation.x=-Math.PI/2,this.rotor.position.set(0,1.72,0),this.rotor.renderOrder=3;let u=(d,f,m,b,g,p,x=.13)=>{let v=new pt(new ji(x,8,6),new Oe({color:new Dt(d,f,m)}));return v.position.set(b,g,p),l(v)};u(1.9,.09,.07,1.45,.42,-4.75,.08),u(.08,1.8,.3,-1.44,.42,-4.82,.08),this.strobe=u(5,5,5.6,.03,.5,-6.2,.12),this.beacon=u(6,.25,.2,0,-1.09,-.55,.1),this.lampAt.set(0,-1.16,1.28),this.lampHead=u(5,5.8,7,0,-1.16,1.28,.15);{l(new pt(new xe(.19,.15,.2,14),c)).position.set(0,-1.07,1.28);let f=l(new pt(new dn(.165,.028,8,18),c));f.rotation.x=Math.PI/2,f.position.set(0,-1.17,1.28)}{let d=new w(.74,.86,.22),f=new w(1.47,.97,.22),m=l(new pt(new xe(.045,.055,d.distanceTo(f),8),c));m.position.copy(d).add(f).multiplyScalar(.5),m.quaternion.setFromUnitVectors(new w(0,1,0),f.clone().sub(d).normalize());let b=l(new pt(new xe(.028,.028,.62,6),c)),g=new w(.8,.52,.22),p=new w(1.22,.92,.22);b.scale.y=g.distanceTo(p)/.62,b.position.copy(g).add(p).multiplyScalar(.5),b.quaternion.setFromUnitVectors(new w(0,1,0),p.clone().sub(g).normalize());let x=l(new pt(new xe(.12,.12,.26,10),c));x.rotation.x=Math.PI/2,x.position.set(1.47,.93,.22),l(new pt(new Ce(.12,.16,.14),new Me({color:13127708,roughness:.5,metalness:.1}))).position.set(1.47,.74,.22),this.hoistAt.set(1.47,.66,.22);let M=new Me({color:8008723,roughness:.8}),R=new Me({color:13225166,roughness:.4}),y=l(new pt(new un(.15,.34,3,8),M));y.position.set(.7,-.22,.42),y.rotation.z=-.22,l(new pt(new ji(.125,10,8),R)).position.set(.78,.13,.42);for(let _ of[.33,.51]){let S=l(new pt(new un(.065,.36,3,8),M));S.position.set(.88,-.8,_),S.rotation.z=.1,l(new pt(new Ce(.11,.09,.22),c)).position.set(.9,-1.03,_+.04)}let T=l(new pt(new un(.05,.42,3,6),M));T.position.set(.95,.1,.34),T.rotation.z=-1.05}this.model=i}reset(t=240){this.state="none",this.group.visible=!1,this.rescued=!1,this.hold=0,this.arriveAt=t,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.liftTaut=!1,this.haulT=0,this.lineDir.set(0,1,0),this.hangDir.set(0,1,0),at.uSpotP.value.y=0,at.uWash.value.w=0}_dropRope(){let t=this._local(this.hoistAt,this._top);this.ropeLen=Math.max(8,t.y-this.waves.heightFast(t.x,t.z))+2.5;for(let e=0;e<as;e++){let i=this.rope[e];i.p.set(t.x,t.y-this.ropeLen*.92*e/(as-1),t.z),i.q.copy(i.p)}this.ring.copy(this.rope[as-1].p)}_rope(t,e,i,n){let s=this.waves,a=this._s,o=this.rope,h=as,c=this._local(this.hoistAt,this._top);if(n){let d=c.distanceTo(o[h-1].p);this.liftTaut?(this.haulT+=t,this.ropeLen=Math.max(2.6,this.ropeLen-1.7*Math.min(1,this.haulT/1.5)*t)):(this.ropeLen=Math.max(d+.05,this.ropeLen-5*t),this.liftT>.8&&this.ropeLen<=d+.12&&(this.liftTaut=!0,this.haulT=0))}else{let d=Math.max(6,c.y-s.heightFast(o[h-1].p.x,o[h-1].p.z))+2.8;this.ropeLen+=(d-this.ropeLen)*Math.min(1,t*3.5)}let l=this.ropeLen/(h-1),u=Math.min(t,1/30)*.5;for(let d=0;d<2;d++){o[0].p.copy(c),o[0].q.copy(c);for(let f=1;f<h;f++){let m=o[f],b=f===h-1,g=m.p.x-m.q.x,p=m.p.y-m.q.y,x=m.p.z-m.q.z;m.q.copy(m.p);let v=Math.sin(Math.PI*f/(h-1)),M=.1+.16*v*(.6+.4*Math.sin(this.time*.9+f*.35)),R=e.x*M,y=-9.81,E=e.z*M,T=.994,_=m.p.x-this.pos.x,S=m.p.z-this.pos.z,k=Math.hypot(_,S)+.001,W=Math.max(0,1-k/16)*(b?5:2);if(b&&s.sample(m.p.x,m.p.z,a),n&&(W*=b?Math.max(0,1-(m.p.y-a.h)/2.5):.2),R+=_/k*W,E+=S/k*W,b){let Y=a.h+.06-m.p.y;if(Y>0){y+=Math.min(n?160:70,Y*(n?260:95));let N=Math.min(1,u*(n?16:6));g+=(a.vx*u-g)*N,p+=(a.vy*u-p)*N,x+=(a.vz*u-x)*N,T=.975}this.gripping&&!n&&(R+=(i.x-m.p.x)*7,E+=(i.z-m.p.z)*7)}m.p.x+=g*T+R*u*u,m.p.y+=p*T+y*u*u,m.p.z+=x*T+E*u*u}for(let f=0;f<14;f++)for(let m=0;m<h-1;m++){let b=o[m].p,g=o[m+1].p,p=g.x-b.x,x=g.y-b.y,v=g.z-b.z,M=Math.hypot(p,x,v);if(M<=l)continue;let R=(M-l)/M,y=m===0?0:m+1===h-1?n?.88:.62:.5,E=1-y;b.x+=p*R*y,b.y+=x*R*y,b.z+=v*R*y,g.x-=p*R*E,g.y-=x*R*E,g.z-=v*R*E}{let f=(n?this.vel.length()+4.5:9)*u,m=28*u;for(let b=1;b<h;b++){let g=o[b],p=g.p.x-g.q.x,x=g.p.y-g.q.y,v=g.p.z-g.q.z,M=Math.hypot(p,x,v),R=b===h-1?f:m;if(M>R){let y=R/M;g.p.set(g.q.x+p*y,g.q.y+x*y,g.q.z+v*y)}}}}n?this.ring.lerp(o[h-1].p,1-Math.exp(-t/.035)):this.ring.copy(o[h-1].p),this._d.copy(o[h-7].p).sub(o[h-1].p),this._d.lengthSq()>1e-4&&this._d.y>0&&(this._d.normalize(),this.lineDir.lerp(this._d,Math.min(1,t*3)).normalize());{let d=this.hangDir.copy(this.lineDir).multiplyScalar(.75);d.y+=.25;let f=Math.hypot(d.x,d.z),m=d.y*.49;f>m&&(d.x*=m/f,d.z*=m/f),d.normalize()}}dispatch(t,e=Math.random()*6.283,i=60){this.state="inbound",this.rescued=!1,this.hold=0,this.hoverTime=0,this.group.visible=!0,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.liftTaut=!1,this.haulT=0,this.lineDir.set(0,1,0),this.hangDir.set(0,1,0),this.ring.set(t.x+Math.cos(e)*i,0,t.z+Math.sin(e)*i),this.pos.set(this.ring.x+Math.cos(e)*520,70,this.ring.z+Math.sin(e)*520),this.vel.set(0,0,0)}update(t,e,i,n,s,a,o,h,c){if(this.time+=t,this.state==="none")if(o&&s&&n>=this.arriveAt)this.dispatch(e,Math.atan2(i.z,i.x)+(Math.random()-.5)*2.4,55+Math.random()*30);else{at.uSpotP.value.y=0,at.uWash.value.w=0;return}let l=this.waves,u=this._s,d=this.state==="lift";if(this.state==="inbound")this.station.set(this.ring.x,0,this.ring.z);else if(this.state==="hover"){let U=e.x-this.station.x,F=e.z-this.station.z,P=Math.hypot(U,F);if(P>1.5){let V=Math.min(2.2,P*.5)*t/P;this.station.x+=U*V,this.station.z+=F*V}}let f=l.heightFast(this.station.x,this.station.z)+20+Math.sin(this.time*.7)*.8,m=this._v.set(this.station.x+Math.sin(this.time*.43)*2.6+Math.sin(this.time*1.1)*.9,f,this.station.z+Math.cos(this.time*.37)*2.6);if(this.state==="leaving"&&m.set(this.pos.x+i.x*40,this.pos.y+30,this.pos.z+i.z*40),d){this.liftT+=t;let U=Math.max(this.liftBase,l.heightFast(this.pos.x,this.pos.z),l.heightFast(this.ring.x,this.ring.z));this.liftT>6.5?m.set(this.pos.x-i.x*3,U+26+(this.liftT-6.5)*5,this.pos.z-i.z*3):m.set(this.pos.x,U+20+Math.max(0,this.liftT-3)*1.5,this.pos.z)}let b=m.sub(this.pos),g=b.length(),p=this.state==="inbound"?46:this.state==="leaving"?40:d?this.liftT>6.5?7.5:3:6,x=b.multiplyScalar(Math.min(p,g*.9)/Math.max(g,.001));if(this.vel.lerp(x,1-Math.exp(-t*(d?.35:1.4))),this.pos.addScaledVector(this.vel,t),this.state==="inbound"&&g<6&&(this.state="hover",this.hoverTime=0,this._dropRope()),this.state==="hover"||d?this._rope(t,i,e,d):(l.sample(this.ring.x,this.ring.z,u),this.ring.y=u.h),this.reach=!1,this.state==="hover"){this.hoverTime+=t;let U=Math.hypot(e.x-this.ring.x,e.y+.35-this.ring.y,e.z-this.ring.z);this.reach=U<1.5&&s,this.gripping&&(U>2.2||!c||!s)&&(this.gripping=!1,this.hold>.5&&(this.slipped=!0)),this.reach&&c&&(this.gripping=!0),this.hold=this.gripping?this.hold+t:Math.max(0,this.hold-t*2.5),this.hold>=this.holdNeed&&(this.rescued=!0,this.state="lift",this.liftT=0,this.liftTaut=!1,this.haulT=0,this.liftBase=this.ring.y);let F=this.reach||this.gripping;if(this.hoverTime>150&&!F&&!this.rescued&&(this.state="leaving",this.leaveT=0),a)for(this.washAcc=(this.washAcc||0)+t*150;this.washAcc>=1;){this.washAcc-=1;let P=Math.random()*6.283,V=4+Math.random()*13,q=7+Math.random()*6,H=this.pos.x+Math.cos(P)*V,z=this.pos.z+Math.sin(P)*V,G=l.heightFast(H,z),tt=Math.random()<.28;a.emit(H,G+.08+Math.random()*.2,z,Math.cos(P)*q,.5+Math.random()*1.4,Math.sin(P)*q,tt?.7+Math.random()*.7:.5+Math.random()*.5,tt?.16+Math.random()*.22:.012+Math.random()*.03,tt?2:0,tt?.7:0,tt?.16:.9,tt?1.4:1)}}if(this.state==="leaving"&&(this.leaveT+=t,this.leaveT>14)){this.state="none",this.group.visible=!1,this.arriveAt=n+180,at.uSpotP.value.y=0,at.uWash.value.w=0;return}let v=this.heli;v.position.copy(this.pos);let M=Math.atan2(this.ring.x-this.pos.x+this.vel.x*3,this.ring.z-this.pos.z+this.vel.z*3),R=Math.hypot(this.vel.x,this.vel.z);if(v.rotation.set(Math.min(.3,R*.008),this.state==="hover"?v.rotation.y+Math.sin(this.time*.25)*.004:M,Math.sin(this.time*1.3)*.03,"YXZ"),this.rotorMat){let U=this.rotorMat.uniforms,F=41;U.uAngle.value=(U.uAngle.value-F*t)%6.2831853,U.uSmear.value=F/105;let P=at.uAmbient.value,V=at.uFlash.value,q=at.uFlashColor.value;U.uLit.value.set(P.x*2.4+V*q.x*.5,P.y*2.4+V*q.y*.5,P.z*2.4+V*q.z*.5)}else this.rotor.rotation.z+=t*(2.6+1.4*Math.sin(this.time*2.3));this.tail.rotation.z+=t*5.2,this.bladeRoots&&(this.bladeRoots.rotation.y-=t*39),this.spinHub&&(this.spinHub.rotation.y-=t*41),this.rotorMat||(this.rotor.material.opacity=.85+.15*Math.sin(this.time*31)),this.strobe.visible=this.time%1.1<.07,this.beacon.visible=(this.time+.5)%1.3<.16;let y=this.state==="hover"?Math.min(1,this.hoverTime/3):this.state==="lift"?1:0;this.aim.set(this.ring.x+(1-y)*Math.sin(this.time*.8)*26,this.ring.y,this.ring.z+(1-y)*Math.cos(this.time*.6)*26),this.state==="lift"&&(this.aim.y=Math.min(this.aim.y,l.heightFast(this.aim.x,this.aim.z)));let E=this.state==="leaving"?Math.max(0,1-this.leaveT/3):1,T=this._local(this.lampAt,this._from);{let U=Math.hypot(this.aim.x-T.x,this.aim.z-T.z);T.y-this.aim.y<U*.5&&(this.aim.y=T.y-U*.5)}let _=T.distanceTo(this.aim),S=this._d.copy(this.aim).sub(T).normalize(),k=_,W=this.aim.y;if(S.y<-.04)for(let U=0;U<4;U++)W=this.waves.heightFast(T.x+S.x*k,T.z+S.z*k),k=Math.max(2,(W-T.y)/S.y);else k=320;let Y=Math.min(k*1.15+4,340),N=this.tan*1.3*Y;this.beamMat.uniforms.uWaterY.value=W-.6,this.beam.position.copy(T),this.beam.quaternion.setFromUnitVectors(this._down,S),this.beam.scale.set(N,Y,N);let D=this.beamMat.uniforms;if(D.uApex.value.copy(T),D.uAxis.value.copy(S),D.uLen.value=Y,D.uI.value=.17*E,h){let U=this._v.copy(h).sub(T),F=U.dot(S),P=Math.sqrt(Math.max(0,U.lengthSq()-F*F)),q=F>-.5&&F<Y+.5&&P<F*this.tan*1.3+.6?Xe:yi;this.beamMat.side!==q&&(this.beamMat.side=q,this.beamMat.needsUpdate=!0)}this.spotLight.position.copy(T),this.spotLight.target.position.copy(this.aim),this.spotLight.angle=Math.atan(this.tan)*1.35,this.spotLight.penumbra=.85,this.spotLight.intensity=5*E,at.uSpotPos.value.copy(T),at.uSpotDir.value.copy(S),at.uSpotP.value.set(Math.cos(Math.atan(this.tan)),1.7*E,55,0);let O=this.pos.y-l.heightFast(this.pos.x,this.pos.z);at.uWash.value.set(this.pos.x,this.pos.z,24,E*Math.max(0,Math.min(1,(60-O)/30)));let B=this.state==="hover"||this.state==="lift";if(this.ringMesh.visible=B,this.ropeGroup.visible=B,B){this.ringMesh.position.copy(this.ring),this.state==="lift"?(this.ringSpin+=t*.35,this.ringMesh.quaternion.setFromUnitVectors(this._down.clone().negate(),this.hangDir).multiply(this._qr.setFromEuler(this._er.set(Math.PI/2,0,this.ringSpin,"YXZ")))):(l.sample(this.ring.x,this.ring.z,u),this.ringMesh.rotation.set(Math.PI/2+u.nz*.6,0,-u.nx*.6)),this.strobeR.visible=this.time%.9<.08;let U=this.rope,F=this.ropePts,P=as;for(let bt=0;bt<P;bt++)F[bt].copy(U[bt].p);this.ringMesh.updateMatrixWorld(!0),F[P-1].set(0,0,-this.bridleTop-.06).applyMatrix4(this.ringMesh.matrixWorld),F[P-2].lerp(F[P-1],.35);let V=this.ropeRings,q=this.ropeRad,H=q+1,z=.017,G=this.ropeMesh.geometry.attributes.position,tt=this.ropeMesh.geometry.attributes.normal,Q=this.ropeMesh.geometry.attributes.uv,et=this._rp,ot=this._rt,it=this._rn,wt=this._rb,K=this._rq,zt=(bt,Ht)=>bt<0?Ht.copy(F[0]).multiplyScalar(2).sub(F[1]):bt>P-1?Ht.copy(F[P-1]).multiplyScalar(2).sub(F[P-2]):Ht.copy(F[bt]),xt=this._ra||(this._ra=[new w,new w,new w,new w]),Ct=0;for(let bt=0;bt<V;bt++){let Ht=bt/(V-1)*(P-1),At=Math.min(P-2,Math.floor(Ht)),L=Ht-At,C=L*L,$=C*L;zt(At-1,xt[0]),zt(At,xt[1]),zt(At+1,xt[2]),zt(At+2,xt[3]);let ht=(1-3*L+3*C-$)/6,dt=(4-6*C+3*$)/6,gt=(1+3*L+3*C-3*$)/6,Lt=$/6;K.copy(et),et.set(0,0,0).addScaledVector(xt[0],ht).addScaledVector(xt[1],dt).addScaledVector(xt[2],gt).addScaledVector(xt[3],Lt);let j=-(1-L)*(1-L)/2,ct=(3*C-4*L)/2,vt=(1+2*L-3*C)/2,kt=C/2;ot.set(0,0,0).addScaledVector(xt[0],j).addScaledVector(xt[1],ct).addScaledVector(xt[2],vt).addScaledVector(xt[3],kt),ot.lengthSq()<1e-10?ot.set(0,-1,0):ot.normalize(),bt>0&&(Ct+=et.distanceTo(K)),it.addScaledVector(ot,-it.dot(ot)),it.lengthSq()<1e-6&&it.set(1,0,0).addScaledVector(ot,-ot.x),it.normalize(),wt.crossVectors(ot,it);for(let ut=0;ut<H;ut++){let oe=ut/q*6.2832,Yt=Math.cos(oe),Bt=Math.sin(oe),It=(bt*H+ut)*3,Rt=it.x*Yt+wt.x*Bt,qt=it.y*Yt+wt.y*Bt,ae=it.z*Yt+wt.z*Bt;G.array[It]=et.x+Rt*z,G.array[It+1]=et.y+qt*z,G.array[It+2]=et.z+ae*z,tt.array[It]=Rt,tt.array[It+1]=qt,tt.array[It+2]=ae,Q.array[(bt*H+ut)*2+1]=Ct/.11}}Q.needsUpdate=!0,G.needsUpdate=!0,tt.needsUpdate=!0}}};var ay=[[A.handL,0,-.09,.012,"hand"],[A.handR,0,-.09,.012,"hand"],[A.foreArmL,0,-.13,0,"arm"],[A.foreArmR,0,-.13,0,"arm"],[A.footL,0,-.04,.12,"foot"],[A.footR,0,-.04,.12,"foot"]],Lo=class{constructor(t,e,i){this.waves=t,this.ch=e,this.body=i,this.tips=ay.map(([n,s,a,o,h])=>({bone:n,off:new w(s,a,o),kind:h,p:new w,prev:new w,has:!1,was:!0,wet:0,cool:0})),this._s=gi(),this._v=new w,this._hd=new w,this.activity=0,this.onSlap=null,this.bowAcc=0,this.churnAcc=0}reset(){for(let t of this.tips)t.has=!1,t.wet=0;this.activity=0}update(t,e,i,n=!0){if(t<=0)return;let s=this.waves,a=this._s,o=this._v,h=0;e.near=!0;for(let l of this.tips){if(l.p.copy(l.off).applyMatrix4(this.ch.bones[l.bone].matrixWorld),!l.has){l.prev.copy(l.p),l.has=!0,s.sample(l.p.x,l.p.z,a),l.was=l.p.y<a.h;continue}if(o.copy(l.p).sub(l.prev).multiplyScalar(1/t),l.prev.copy(l.p),l.cool-=t,!n||o.lengthSq()>900){l.wet=0;continue}s.sample(l.p.x,l.p.z,a);let u=l.p.y<a.h,d=o.x-a.vx,f=o.y-a.vy,m=o.z-a.vz,b=Math.hypot(d,f,m),g=Math.hypot(d,m)+1e-4,p=l.kind==="hand"?1:l.kind==="foot"?.6:.45;if(u!==l.was){if(u&&b>(l.kind==="foot"?3:2.1)&&l.cool<=0&&l.kind!=="arm"){let x=Math.min(1.6,(.14+b*.22)*p)*(.6+.4*Math.random());if((l.kind==="hand"||Math.random()<.6)&&e.slap(l.p.x,a.h,l.p.z,x,d/g*Math.min(1,g/2.5),m/g*Math.min(1,g/2.5),a.vx+d*.55,a.vy,a.vz+m*.55,l.kind==="hand"?1:0),l.kind==="hand"){let v=Math.min(16,Math.round(3+b*1.5));for(let M=0;M<v;M++){let R=(Math.random()-.5)*2.2,y=Math.cos(R),E=Math.sin(R),T=.9+Math.random()*(1.2+b*.35),_=d/g*y-m/g*E,S=m/g*y+d/g*E;e.emit(l.p.x+_*.06,a.h+.03,l.p.z+S*.06,a.vx+_*T,a.vy+.8+Math.random()*(1.2+b*.22),a.vz+S*T,.28+Math.random()*.32,.009+Math.pow(Math.random(),2)*.02,0,0,1)}}l.cool=(l.kind==="hand",.3),h+=x,this.onSlap&&this.onSlap(b,l.p,l.kind)}else if(!u&&b>2.2&&l.kind==="hand"){let x=Math.min(1.5,(.1+b*.2)*p);e.fling(l.p.x,Math.max(l.p.y,a.h+.02),l.p.z,o.x,o.y,o.z,x),l.wet=.6,h+=x*.6}}if(!u&&l.wet>0){l.wet-=t;let x=b>2.5&&Math.random()<t*35*l.wet?1:0;for(let v=0;v<x;v++)e.emit(l.p.x+(Math.random()-.5)*.06,l.p.y+(Math.random()-.5)*.06,l.p.z+(Math.random()-.5)*.06,o.x*(.35+.5*Math.random()),o.y*.6+.5*Math.random(),o.z*(.35+.5*Math.random()),.35+Math.random()*.5,.01+Math.random()*.022,0,0,1)}if(l.kind==="foot"&&Math.abs(l.p.y-a.h)<.12&&b>2){for(this.churnAcc+=t*Math.min(42,b*8);this.churnAcc>=1;){this.churnAcc-=1;let x=Math.random()*6.283,v=Math.random()*.9;if(e.emit(l.p.x+Math.cos(x)*.05,a.h+.02,l.p.z+Math.sin(x)*.05,a.vx+Math.cos(x)*v+d*.25,a.vy+.9+2.1*Math.random()*Math.min(1.4,b/3),a.vz+Math.sin(x)*v+m*.25,.3+Math.random()*.4,.009+Math.pow(Math.random(),2)*.022,0,0,1),Math.random()<.08){e.lean=(Math.random()-.5)*.3;let M=.22+Math.random()*.16;e.emit(l.p.x,a.h-.02,l.p.z,a.vx,a.vy,a.vz,.62*Math.sqrt(M/.45),M,3,0,.75,0),e.lean=0}}h+=.25*t*10}l.was=u}let c=this.body;if(n&&c.subFrac>.2&&c.subFrac<.98&&c.relSpeed>1.5&&c.mouthDepth<.4){let l=Math.min(6,c.relSpeed),u=Math.hypot(c.relFlow.x,c.relFlow.z)+1e-4,d=-c.relFlow.x/u,f=-c.relFlow.z/u,m=this._hd.setFromMatrixPosition(this.ch.bones[A.head].matrixWorld);for(this.bowAcc+=t*Math.min(40,(l-1.3)*16);this.bowAcc>=1;){this.bowAcc-=1;let b=Math.random()<.5?-1:1,g=Math.random(),p,x,v,M,R;if(g<.5){let E=(Math.random()-.5)*.5,T=.12+Math.random()*.45;p=m.x+d*T-f*E,x=m.z+f*T+d*E,v=l*.7+.4+Math.random()*1.4,M=(Math.random()-.5)*1.2,R=.6+Math.random()*1.6}else{let E=(.22+Math.random()*.2)*b,T=-.5+Math.random()*.9;p=c.pos.x+d*T-f*E,x=c.pos.z+f*T+d*E,v=l*.3,M=b*(.4+Math.random()*1),R=.5+Math.random()*1.3}let y=!1;e.emit(p,c.surfaceH+.03,x,c.surface.vx+d*v-f*M,c.surface.vy+R*Math.min(1.4,.6+l*.3),c.surface.vz+f*v+d*M,y?.25+Math.random()*.3:.4+Math.random()*.55,y?.04+Math.random()*.05:Math.random()<.3?.028+Math.random()*.03:.011+Math.pow(Math.random(),2)*.026,y?1:0,y?.4:0,y?.32:1)}h+=.12+.1*l}e.near=!1,this.activity+=(Math.min(1,h)-this.activity)*(1-Math.exp(-t*(h>this.activity?12:2.5)))}};var Jd=1025,oy=1.22,al=9.81,$d=.35,we={tubeY:.37,tubeR:.21,halfW:.72,floorY:.325,bowZ:1.95,sternZ:-1.9,transomZ:-1.28,bowStart:1};function Qi(r){if(r<=we.bowStart)return we.halfW;let t=Math.min(1,(r-we.bowStart)/(we.bowZ-we.bowStart));return we.halfW*Math.sqrt(Math.max(0,1-t*t))}function Dr(r){return we.tubeY+.2*ke(.9,2,r)}function Ii(r,t,e,i,n,s,a,o,h){return{o:new w(r,t,e),r:new w,vol:i/1e3,half:n,cx:s,cy:a,cz:o,air:h,sub:0,was:0,h:0,hOk:!1}}var Io=class{constructor(t){this.waves=t,this.group=new ce,this.group.name="boat",this.group.visible=!1,this.holder=new ce,this.group.add(this.holder),this.active=!1,this.loaded=!1,this.com=new w(0,.3,-.28),this.baseMass=168,this.mass=this.baseMass,this.inertia=new w(250,300,78),this.pos=new w,this.vel=new w,this.quat=new yt,this.angVel=new w,this.prevPos=new w,this.prevQuat=new yt,this.wind=new w,this.rider=0,this.swamp=0,this.upY=1,this.sitUp=1,this.capsized=!1,this.flipArmed=!1,this.flipping=0,this.settle=0,this.flipAxis=new w,this.flipDir=new w,this.keepYaw=null,this.slam=0,this.slamPos=new w,this.aer=0,this.brkH=0,this.subFrac=0,this.relFlow=new w,this.relSpeed=0,this.extF=new w,this.extT=new w,this.tow=new w;let e=we.halfW,i=we.tubeY;this.points=[Ii(e,i,-1.65,105,.21,.13,.3,.075,.05),Ii(-e,i,-1.65,105,.21,.13,.3,.075,.05),Ii(e,i,-.7,118,.21,.13,.34,.06,.055),Ii(-e,i,-.7,118,.21,.13,.34,.06,.055),Ii(e,i,.3,118,.21,.13,.34,.06,.055),Ii(-e,i,.3,118,.21,.13,.34,.06,.055),Ii(.69,i+.03,1.2,105,.21,.12,.3,.075,.055),Ii(-.69,i+.03,1.2,105,.21,.12,.3,.075,.055),Ii(0,.52,1.8,95,.22,.1,.26,.11,.07),Ii(0,.2,-.7,85,.13,.1,.55,.07,0),Ii(0,.21,.62,85,.13,.1,.55,.07,0),Ii(0,.12,-1.5,9,.16,.1,.03,.05,.03)];for(let n of this.points)n.o.sub(this.com);this.totalVol=this.points.reduce((n,s)=>n+s.vol,0),this._s=gi(),this._w={vx:0,vy:0,vz:0,ax:0,ay:0,az:0},this._p=new w,this._vp=new w,this._f=new w,this._F=new w,this._T=new w,this._X=new w,this._Y=new w,this._Z=new w,this._t=new w,this._t2=new w,this._qi=new yt,this._dq=new yt,this._m=new Pt,this.inv=new Pt,this.matrix=new Pt}setModel(t){let e=null;if(t.scene.traverse(n=>{n.isMesh&&!e&&(e=n)}),!e)throw new Error("boat model has no mesh");this.mesh=e;let i=e.material;i.envMapIntensity=.6,i.roughness=.95,i.color.setRGB(1.12,1.18,1.28),i.aoMapIntensity=.8,i.normalScale.set(1,1),i.needsUpdate=!0,this.material=i,t.scene.traverse(n=>{n.layers.enable(1),n.frustumCulled=!1}),t.scene.position.copy(this.com).multiplyScalar(-1),this.holder.add(t.scene),this.loaded=!0}reset(t,e,i){let n=this.waves.sample(t,e,this._s);this.quat.setFromAxisAngle(this._t.set(0,1,0),i),this.pos.set(t,n.h+.14+this.com.y-.13,e),this.vel.set(n.vx,n.vy,n.vz),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat),this.swamp=0,this.flipping=0,this.settle=0,this.capsized=!1,this.upY=1,this.sitUp=1,this.slam=0,this.extF.set(0,0,0),this.extT.set(0,0,0),this.tow.set(0,0,0),this.hcOk=!1,this.depth=0;for(let s of this.points)s.was=0,s.hOk=!1;this.active=!0,this.group.visible=this.loaded,this._updateMatrices(this.pos,this.quat)}hide(){this.active=!1,this.group.visible=!1}_updateMatrices(t,e){this._t.copy(this.com).multiplyScalar(-1).applyQuaternion(e).add(t),this.matrix.compose(this._t,e,this._t2.set(1,1,1)),this.inv.copy(this.matrix).invert()}pushAt(t,e,i,n){this.extF.x+=e,this.extF.y+=i,this.extF.z+=n;let s=this._t.copy(t).sub(this.pos);this.extT.x+=s.y*n-s.z*i,this.extT.y+=s.z*e-s.x*n,this.extT.z+=s.x*i-s.y*e}velocityAt(t,e){return e.copy(t).sub(this.pos).cross(this.angVel).multiplyScalar(-1).add(this.vel)}step(t){if(!this.active)return;let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._X.set(1,0,0).applyQuaternion(this.quat),n=this._Y.set(0,1,0).applyQuaternion(this.quat),s=this._Z.set(0,0,1).applyQuaternion(this.quat);this.upY=n.y;let a=this._F.set(0,0,0),o=this._T.set(0,0,0);this.mass=this.baseMass+this.rider+260*this.swamp;let h=0,c=0,l=0,u=0,d=0,f=0,m=0,b=0,g=0,p=0,x=0,v=this.dbg||(this.dbg={});v.buoy=0,v.dragY=0,v.bay=0,v.bvy=0,v.plunge=0,v.wvy=0,v.h=0,v.ay=0;let M=1-.32*this.swamp;for(let B=0;B<this.points.length;B++){let U=this.points[B],F=U.r.copy(U.o).applyQuaternion(this.quat),P=this._p.copy(this.pos).add(F),V=this._vp.copy(this.angVel).cross(F).add(this.vel),q=e.sample(P.x,P.z,this._s),H=q.h-P.y,z=Math.max(0,Math.min(1,(H+U.half)/(2*U.half))),G=U.hOk?Math.max(-9,Math.min(4.6,(q.h-U.h)/t)):q.vy;if(U.h=q.h,U.hOk=!0,z>.5!=U.was>.5){let Q=Math.abs(V.y-q.vy);Q>d&&(d=Q,this.slamPos.set(P.x,q.h,P.z))}U.was=z,U.sub=z;let tt=this._f.set(0,0,0);if(f+=q.nx,m+=q.ny,b+=q.nz,q.brkH>l&&(l=q.brkH),q.lip>u&&(u=q.lip),z>0){let Q=Math.max(0,H),et=q.aer*Math.exp(-Q/3.5);et>c&&(c=et);let ot=Jd*(1-.6*et),it=e.bodyFlow(q.x0,q.z0,Q,this._w),K=.25+.75*Math.exp(-Q/(2.5+.35*Math.max(0,q.brkH)));it.vx+=q.bvx*K,it.vy+=q.bvy,it.vz+=q.bvz*K,q.plunge>.01&&(it.vy-=.25*q.plunge*Math.exp(-Q/3)),e.breakerFlow(P.x,P.y,P.z,q.h,it),z>.55&&G>it.vy&&(it.vy+=(G-it.vy)*mt((z-.55)/.3)*Math.exp(-Q/1.5));let zt=ot*U.vol*z*M;tt.set(zt*(1+$d)*it.ax,zt*Math.max(.3*al,al+it.ay+q.bay),zt*(1+$d)*it.az),v.buoy+=tt.y,v.bay=Math.max(v.bay,Math.abs(q.bay))*Math.sign(q.bay||1),v.bvy=q.bvy,v.plunge=Math.max(v.plunge,q.plunge),v.wvy=it.vy,v.h=q.h,v.ay=it.ay;let xt=it.vx-V.x,Ct=it.vy-V.y,bt=it.vz-V.z;g+=xt*z,p+=bt*z,x+=z;let Ht=xt*i.x+Ct*i.y+bt*i.z,At=xt*n.x+Ct*n.y+bt*n.z,L=xt*s.x+Ct*s.y+bt*s.z,C=.5*ot*z,$=(C*U.cx*Math.abs(Ht)+60*U.cx*z)*Ht,ht=(C*U.cy*Math.abs(At)+150*U.cy*z)*At,dt=(C*U.cz*Math.abs(L)+60*U.cz*z)*L;tt.x+=i.x*$+n.x*ht+s.x*dt,tt.y+=i.y*$+n.y*ht+s.y*dt,tt.z+=i.z*$+n.z*ht+s.z*dt,v.dragY+=i.y*$+n.y*ht+s.y*dt,h+=U.vol*z}if(z<1&&U.air>0){let Q=this.wind.x-V.x,et=-V.y,ot=this.wind.z-V.z,it=.5*oy*U.air*(1-z)*(1-.55*this.swamp)*Math.hypot(Q,et,ot);tt.x+=Q*it,tt.y+=et*it,tt.z+=ot*it}a.add(tt),o.x+=F.y*tt.z-F.z*tt.y,o.y+=F.z*tt.x-F.x*tt.z,o.z+=F.x*tt.y-F.y*tt.x}this.subFrac=h/this.totalVol,this.aer=c,this.brkH=l,this.slam=d,x>0?this.relFlow.set(g/x,0,p/x):this.relFlow.set(0,0,0),this.relSpeed+=(this.relFlow.length()-this.relSpeed)*(1-Math.exp(-t*6));{let B=Math.hypot(f,m,b)||1;this.sitUp=(n.x*f+n.y*m+n.z*b)/B}let R=Math.max(mt((c-.35)*2)*mt(l/4),mt((.35-Math.abs(n.y))*3),mt((this.subFrac-.86)*6));R>0?this.swamp+=(1-this.swamp)*(1-Math.exp(-t*1.6*R)):this.swamp>.5&&(this.swamp+=(.5-this.swamp)*(1-Math.exp(-t*.04)));let y=1+.9*Math.min(1,this.subFrac*2.5)+(this.rider+260*this.swamp)/this.baseMass*.5;if(this.flipArmed&&this.flipping<=0&&n.y>.3)for(let B of e.breakers){if(!B.active||B.height<4.5)continue;let U=this.pos.x-B.ox,F=this.pos.z-B.oz,P=U*B.dx+F*B.dz-B.s,V=-U*B.dz+F*B.dx,q=Math.exp(-(V*V)/(B.width*B.width));if(P<8&&P>-8&&B.height*q>4.5){this.flipAxis.set(B.dz,0,-B.dx),this.flipDir.set(B.dx,0,B.dz),this.flipping=2.6,this.flipArmed=!1;break}}if(this.flipping>0){this.flipping-=t;let B=this.angVel.dot(this.flipAxis);n.y>-.8?o.addScaledVector(this.flipAxis,(3-B)*2100*y):(this.flipping=0,this.settle=1.4),a.addScaledVector(this.flipDir,this.mass*5*mt((this.flipping-2)/.6))}if(this.settle>0&&(this.settle-=t,o.addScaledVector(this.angVel,-1500*y)),this.flipArmed&&this.rider>0&&this.flipping<=0){let B=Math.hypot(f,m,b)||1,U=(n.y*b-n.z*m)/B,F=(n.z*f-n.x*b)/B,P=(n.x*m-n.y*f)/B,V=this.angVel.dot(n);o.x+=U*5200*y-(this.angVel.x-n.x*V)*1500*y,o.y+=F*5200*y-(this.angVel.y-n.y*V)*1500*y,o.z+=P*5200*y-(this.angVel.z-n.z*V)*1500*y}if(this.keepYaw!==null&&n.y>.5){let B=Math.atan2(s.x,s.z),U=this.keepYaw-B;U=Math.atan2(Math.sin(U),Math.cos(U)),o.y+=Math.max(-260,Math.min(260,U*420-this.angVel.y*300))}this.capsized=n.y<0,a.add(this.extF),o.add(this.extT),this.extF.set(0,0,0),this.extT.set(0,0,0),a.add(this.tow);let E=this.mass+.08*Jd*h;a.y-=this.mass*al,this.vel.addScaledVector(a,t/E);let T=this.vel.length();T>40&&this.vel.multiplyScalar(40/T),this.pos.addScaledVector(this.vel,t);{let B=e.sample(this.pos.x,this.pos.z,this._s),U=this.hcOk?Math.max(-30,Math.min(30,(B.h-this.hc)/t)):B.vy;this.hc=B.h,this.hcOk=!0;let F=this.pos.y-B.h;this.depth=-F,F<-.42?(this.pos.y=B.h-.42,this.vel.y<U&&(this.vel.y=U)):F>.45&&this.vel.y>U&&(this.vel.y+=(U-this.vel.y)*Math.min(1,t*7),F>1.5&&(this.pos.y=B.h+1.5,this.vel.y>U&&(this.vel.y=U)))}let _=this._qi.copy(this.quat).invert(),S=this._t.copy(this.angVel).applyQuaternion(_),k=this._t2.copy(o).applyQuaternion(_),W=this.inertia.x*y,Y=this.inertia.y*y,N=this.inertia.z*y;S.x+=(k.x-(N-Y)*S.y*S.z)/W*t,S.y+=(k.y-(W-N)*S.z*S.x)/Y*t,S.z+=(k.z-(Y-W)*S.x*S.y)/N*t,S.multiplyScalar(Math.exp(-(.35+2.2*Math.min(1,this.subFrac*2.5))*t));let D=S.length();D>9&&S.multiplyScalar(9/D),this.angVel.copy(S).applyQuaternion(this.quat);let O=this.angVel.length()*t;O>1e-7&&(this._dq.setFromAxisAngle(this._t.copy(this.angVel).normalize(),O),this.quat.premultiply(this._dq).normalize()),this._updateMatrices(this.pos,this.quat)}sync(t){this.active&&(this.group.position.lerpVectors(this.prevPos,this.pos,t),this.group.quaternion.slerpQuaternions(this.prevQuat,this.quat,t),this.group.updateMatrixWorld(!0))}toWorld(t,e){return e.copy(t).applyMatrix4(this.matrix)}dirToWorld(t,e){return e.copy(t).applyQuaternion(this.quat)}nearestGrip(t,e){let i=this._t.copy(t).applyMatrix4(this.inv),n=0,s=1,a=1e9;for(let d=0;d<=24;d++){let f=-1.75+(we.bowZ-.15+1.75)*d/24,m=Qi(f),b=Dr(f);for(let g of[1,-1]){let p=Math.hypot(i.x-g*m,i.y-b,i.z-f);p<a&&(a=p,n=f,s=g)}}let o=Qi(n),h=Qi(n+.05);e.dist=a,e.z=n,e.side=s,e.local=(e.local||new w).set(s*o,Dr(n),n),e.point=this.toWorld(e.local,e.point||new w);let c=s*(h-o),l=.05,u=Math.hypot(c,l);return e.tangent=this.dirToWorld(this._t2.set(c/u,0,l/u),e.tangent||new w),e.normal=this.dirToWorld(this._t2.set(s*l/u,0,-s*c/u),e.normal||new w),e}};var kr=r=>{window.__load&&window.__load(r)},Fo=r=>new Promise((t,e)=>{let i=document.createElement("script");i.src=r,i.onload=t,i.onerror=()=>e(new Error("load failed: "+r)),document.head.appendChild(i)}),li=new URLSearchParams(location.search),Zi=1/120,Ei={get(r,t){try{let e=localStorage.getItem("eos."+r);return e===null?t:e}catch{return t}},set(r,t){try{localStorage.setItem("eos."+r,String(t))}catch{}}},ol=[.5,1,1.5],hl=[0,.4,.85,1],cl=class{constructor(){if(this.canvas=document.getElementById("view"),this.manual=li.get("manual")==="1",this.renderer=new Mr({canvas:this.canvas,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),!this.renderer.capabilities.isWebGL2)throw new Error("WebGL2 is required");this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=De,this.renderer.toneMapping=Xi,this.renderer.autoClear=!0,this.perf=new so(this.renderer);let t=li.get("q")||Ei.get("quality",this.perf.pickDefault());this.perf.setProfile(Ks[t]?t:this.perf.pickDefault()),this.manual&&(this.perf.adaptive=!1),at.hdrType=this.perf.info.halfFloat?ln:je,this.isTouch=li.get("touch")==="1"||li.get("touch")!=="0"&&navigator.maxTouchPoints>0&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,at.uNoise.value=Pd(),at.uDetailN.value=Ld(),at.uFoamTex.value=Id(),this.time=0,this.acc=0,this.state="title",this.deadTimer=0,this.scene=new Ri,this.camera=new Ne(62,16/9,.07,3e4),this.camera.layers.enableAll(),this.waves=new Qa,this.sky=new Ja(this.renderer,this.perf.profile.envSize),this.ocean=new $a(this.waves,this.perf.profile),this.post=new io(this.renderer),this.post.levels=this.perf.profile.bloomLevels,this.scene.add(this.sky.dome,this.ocean.mesh),this.flashLight=new Jn(13163775,0),this.keyLight=new Jn(10465476,.42),this.flashLight.layers.enableAll(),this.keyLight.layers.enableAll(),this.scene.add(this.flashLight,this.flashLight.target,this.keyLight,this.keyLight.target),this.pmrem=new Bs(this.renderer),this.envTimer=0,this.envRT=null,this.input=new mo(this.canvas),this.character=new ao,this.scene.add(this.character.group),this.body=new ho(this.waves),this.survival=new co,this.player=new lo(this.body,this.survival,this.input),this.anim=new uo(this.character,this.body,this.player,this.survival),this.cam=new po(this.camera,this.character,this.body,this.player,this.waves,this.input),this.cam.yaw=-Math.PI/2;let e=li.get("view")||Ei.get("view","third");this.cam.setMode(e),this.cam.blend=this.cam.target,this.cam.intensity=+Ei.get("shake",1)||1,this.cam.auto=Ei.get("autocam","1")!=="0",li.has("yaw")&&(this.cam.yaw=+li.get("yaw")),li.has("pitch")&&(this.cam.pitch=+li.get("pitch")),this.limbs=new Lo(this.waves,this.character,this.body),this.limbs.onSlap=(n,s,a)=>{this.foam&&this.foam.enabled&&n>1.6&&this.foam.addSplash(s.x,s.z,Math.min(.55,.12+n*.07));let o=this.camera.matrixWorld.elements,h=s.x-this.camera.position.x,c=s.z-this.camera.position.z;a!=="foot"&&n>1.6&&this.cam.blend<.5&&!this.underwater.isUnder&&this.lens.spawn(a==="hand"?3:1),this.emit("limb",{v:n,pos:s,kind:a,pan:Math.max(-.8,Math.min(.8,(h*o[0]+c*o[2])/(Math.hypot(h,c)+.5)))})},this.mouthUnder=!1,this.camUnder=0,this.mouthWorld=new w,this.impactBlur=0,this.listeners=[],this.weather=new go(this.waves),this.weather.base=this.weather.storm=li.has("storm")?+li.get("storm"):1,this.manual&&(this.weather.locked=!0),this.lightning=new vo,this.scene.add(this.lightning.group),this.autoLightning=!(this.manual||li.get("auto")==="0"),this.buildEffects(),this.interaction.auto=this.autoLightning,this.audio=new _o,this.audio.volume=+Ei.get("volume",.85),this.audio.sfxOn=Ei.get("sfx","1")!=="0",this.listeners.push((n,s)=>this.audio.onEvent(n,s)),this.face=new Ro,this.onCharacter=n=>this.face.attach(n.mesh),this.vst={alive:!0},this.coughSeq=0,this.coughT=0,this.voiceDir=new Co(this.audio,this.face,{bubbles:n=>this.underwater.burstAt(this.mouthWorld,n,.22),cough:n=>{this.coughSeq=n,this.coughT=0}}),this.listeners.push((n,s)=>this.voiceDir.onEvent(n,s,this.vst)),Fo("dist/voice.js").then(()=>{this.audio.setVoices(window.__EOS_VOICE)}).catch(()=>console.warn("[voice] \uBAA9\uC18C\uB9AC \uB179\uC74C\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4")),this.listeners.push((n,s)=>{if(n==="inhale"&&(this.anim.gaspKick=Math.max(this.anim.gaspKick,s.gasp?1:.4*s.strength)),n==="exhale"&&!this.mouthUnder&&this.spray&&this.state!=="title"){let a=this.player.heading,o=this.weather.wind,h=this.mouthWorld,c=3+Math.round(4*s.strength);for(let l=0;l<c;l++)this.spray.emit(h.x+a.x*.05,h.y+.01,h.z+a.z*.05,a.x*(.5+Math.random()*.7)+o.x*.04,.15+Math.random()*.3,a.z*(.5+Math.random()*.7)+o.z*.04,.5+Math.random()*.5,.05+Math.random()*.06,1,.45,.11+.08*s.strength,.6)}}),this.lightning.onThunder=n=>this.audio.onEvent("thunder",n),this.audioState={cam:{pos:this.camera.position,fwd:new w,up:new w},hot:[]},this.rescue=new Po(this.waves),this.scene.add(this.rescue.group),this.boat=new Io(this.waves),this.scene.add(this.boat.group),this.aboard=!1,this.bacc=0,this.washT=0,this.boatOff=li.get("boat")==="0",this.seatPos=new w(.2,we.floorY+.15,-.3);{let a=new w(Math.sin(.26),0,Math.cos(.26)),o=new w(Math.cos(.26)*Math.sin(.45),-Math.cos(.45),-Math.sin(.26)*Math.sin(.45));this.seatQuat=new yt().setFromRotationMatrix(new Pt().makeBasis(new w().crossVectors(a,o),a,o))}this.rid={p:new w,v:new w,pv:new w,d:new w,has:!1,slam:0},this.wonTimer=0,this.scenarios=new wo(this),this.pendingScenario=li.get("test"),this.weather.update(0),this.waves.update(0),this.body.reset(0,0),this.syncCharacter(1),this.anim.update(1/60),this.character.group.updateMatrixWorld(!0),this.drawScene=(n,s)=>{let a=this.renderer;if(a.setRenderTarget(n),s){let o=(this.camUnder||0)<.5;o&&((this._clipUnder||(this._clipUnder=[new zi(new w(0,-1,0),0)]))[0].constant=this.body.surfaceH+.04,a.clippingPlanes=this._clipUnder),this.camera.layers.set(1),a.setClearColor(0,0),a.clear(),a.render(this.scene,this.camera),this.camera.layers.enableAll(),o&&(a.clippingPlanes=this._noClip||(this._noClip=[]))}else a.render(this.scene,this.camera)};let i={input:this.input,start:()=>this.start(),resume:()=>this.resume(),restart:()=>this.restart(),pause:()=>this.pause(),toggleView:()=>{this.cam.toggle(),Ei.set("view",this.cam.mode),this.impactBlur=Math.max(this.impactBlur,.3)},scenario:n=>{this.scenarios.run(n),this.resume()},get:n=>n==="quality"?this.perf.profile.label:n==="view"?this.cam.mode==="first"?"1\uC778\uCE6D":"3\uC778\uCE6D":n==="shake"?Math.round(this.cam.intensity*100)+"%":n==="autocam"?this.cam.auto?"\uCF2C":"\uB054":n==="sfx"?this.audio.sfxOn?"\uCF2C":"\uB054":Math.round(this.audio.volume*100)+"%",cycle:n=>{if(n==="quality"){let s=Object.keys(Ks);this.setQuality(s[(s.indexOf(this.perf.profile.key)+1)%s.length])}else if(n==="view")i.toggleView();else if(n==="sfx")this.audio.setSfx(!this.audio.sfxOn),Ei.set("sfx",this.audio.sfxOn?"1":"0");else if(n==="autocam")this.cam.auto=!this.cam.auto,Ei.set("autocam",this.cam.auto?"1":"0");else if(n==="shake")this.cam.intensity=ol[(ol.indexOf(this.cam.intensity)+1)%ol.length]||1,Ei.set("shake",this.cam.intensity);else{let s=hl[(hl.indexOf(this.audio.volume)+1)%hl.length];this.audio.setVolume(s===void 0?.85:s),Ei.set("volume",this.audio.volume)}this.state!=="playing"&&this.state!=="title"&&this.renderStill()}};this.api=i,this.ui=!this.manual||li.get("ui")==="1"?new Mo(document.getElementById("ui"),i,this.isTouch):null,this.hadLock=!1,this.input.onLockChange=n=>{n?this.hadLock=!0:this.hadLock&&this.state==="playing"&&(this.hadLock=!1,this.pause())},this.canvas.addEventListener("click",()=>{this.state==="playing"&&!this.isTouch&&!this.input.locked&&this.input.lock()}),window.addEventListener("keydown",n=>{n.repeat||((n.code==="KeyV"||n.code==="KeyC")&&this.state==="playing"&&i.toggleView(),n.code==="KeyP"&&(this.state==="playing"?this.pause():this.state==="paused"&&this.resume()),n.code==="Enter"&&this.state==="title"&&this.start())}),window.addEventListener("wheel",n=>{if(this.state!=="playing"||this.cam.cine)return;let s=n.deltaY<0?"first":"third";s!==this.cam.mode&&(this.cam.setMode(s),Ei.set("view",s),this.impactBlur=Math.max(this.impactBlur,.3),this.ui&&this.ui.refresh())},{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()}),this.manual?(this.state="playing",this.ui&&this.ui.show("playing",{time:0,cause:""}),this.pendingScenario&&(this.scenarios.run(this.pendingScenario),this.pendingScenario=null)):this.setState("title");{let n=["pointerdown","keydown","touchend","mousedown"],s=()=>{if(!(this.state==="paused"||this.state==="dead"||this.manual)){try{this.audio.start(),this.audio.resume()}catch{}if(this.audio.ctx&&this.audio.ctx.state==="running")for(let a of n)window.removeEventListener(a,s,!0)}};for(let a of n)window.addEventListener(a,s,!0);this.onAssets=s}window.addEventListener("resize",()=>{this.resize(),(this.state==="paused"||this.state==="dead")&&this.renderStill()}),this.resize(),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}async loadCharacter(){try{kr(.3),window.__EOS_SON||await Fo("dist/son.js"),kr(.7);let t=await Ao(window.__EOS_SON);kr(.9),window.__EOS_SON=null;let e=new To(this.character,t);this.character.useGlb(e),this.body.setAirway(new w(0,e.mouth.y,e.mouth.z),new w(0,e.eye.y,e.eye.z)),this.glbInfo={verts:e.mesh.geometry.attributes.position.count,bones:e.order.length,morphs:Object.keys(e.mesh.morphTargetDictionary||{}),sourceHeight:+e.sourceHeight.toFixed(3)},this.onCharacter&&this.onCharacter(e),kr(.92)}catch(t){console.warn("[character] GLB \uCE90\uB9AD\uD130\uB97C \uC4F0\uC9C0 \uBABB\uD574 \uAE30\uBCF8 \uBAB8\uC73C\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4: "+t.message),this.glbInfo={error:t.message},this.character.body.visible=!0,this.character.head.visible=!0}}async loadHeli(){try{window.__EOS_HELI||await Fo("dist/heli.js");let t=await Ao(window.__EOS_HELI);window.__EOS_HELI=null;let e=0;t.scene.traverse(i=>{i.isMesh&&(e+=i.geometry.attributes.position.count)}),this.rescue.setModel(t),this.heliInfo={verts:e}}catch(t){console.warn("[heli] \uD5EC\uAE30 \uBAA8\uB378\uC744 \uC4F0\uC9C0 \uBABB\uD574 \uAE30\uBCF8 \uD5EC\uAE30\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4: "+t.message),this.heliInfo={error:t.message}}}async loadBoat(){if(!this.boatOff)try{window.__EOS_BOAT||await Fo("dist/boat.js");let t=await Ao(window.__EOS_BOAT);window.__EOS_BOAT=null,this.boat.setModel(t),this.boatInfo={verts:this.boat.mesh.geometry.attributes.position.count},(this.wantBoard||this.state==="title"&&!this.scenarios.active)&&this.board()}catch(t){console.warn("[boat] \uBCF4\uD2B8 \uBAA8\uB378\uC744 \uC4F0\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+t.message),this.boatInfo={error:t.message}}}slamOut(){let t=this.boat,e=this._bt||(this._bt={p:new w,n:new w,q:new yt});e.q.copy(t.quat).invert(),e.p.copy(t.slamPos).sub(t.pos).applyQuaternion(e.q);let i=Math.max(we.sternZ,Math.min(we.bowZ,e.p.z)),n=Qi(i)+.28,s,a,o,h;if(e.p.z<we.transomZ&&Math.abs(e.p.x)<we.halfW-.3)s=e.p.x,a=we.sternZ-.25,o=0,h=-1;else{let c=e.p.x>=0?1:-1;s=c*n,a=i,o=c,h=0}return e.n.set(o,0,h).applyQuaternion(t.quat),e.n.y=0,e.n.normalize(),e.p.set(s,0,a).applyQuaternion(t.quat).add(t.pos),e.p}board(){if(!this.boat.loaded){this.wantBoard=!this.boatOff;return}this.wantBoard=!1;let t=this.body,e=-Math.PI/2+.32;this.boat.reset(t.pos.x,t.pos.z,e),this.boat.rider=this.body.mass,this.boat.flipArmed=!0,this.boat.keepYaw=e,this.aboard=!0,this.washT=0,this.bacc=0,this.boardedAt=this.time,this.pinToBoat(!0),this.anim.hold="aboard",this.syncCharacter(1)}pinToBoat(t,e=1/60){let i=this.boat,n=this.body,s=this.rid;t&&i.sync(1);let a=this._pt||(this._pt={base:new w,v:new w,a:new w,q:new yt,qi:new yt,e:new ui,x:new w(1,0,0),z:new w(0,0,1)}),o=this._seatW||(this._seatW=new w),h=this._seatQ||(this._seatQ=new yt);a.base.copy(this.seatPos).sub(i.com).applyQuaternion(i.group.quaternion).add(i.group.position),i.velocityAt(a.base,a.v),(t||!s.has)&&(s.pv.copy(a.v),s.p.set(0,0,0),s.v.set(0,0,0),s.d.set(0,0,0),s.slam=0,s.has=!0),a.a.copy(a.v).sub(s.pv).multiplyScalar(1/Math.max(e,.001)),s.pv.copy(a.v),a.a.lengthSq()>2025&&a.a.setLength(45),a.a.multiplyScalar(-1),a.a.y-=9.81,a.a.applyQuaternion(a.qi.copy(i.group.quaternion).invert()),a.a.y+=9.81,s.d.lerp(a.a,1-Math.exp(-e*16));let c=Math.max(1,Math.ceil(e/.012)),l=e/c;for(let d=0;d<c;d++)s.v.x+=(s.d.x*3.2-30*s.p.x-3.2*s.v.x)*l,s.v.z+=(s.d.z*2.4-34*s.p.z-3.4*s.v.z)*l,s.v.y+=((s.d.y-4)*1.5-15*s.p.y-2*s.v.y)*l,s.p.addScaledVector(s.v,l),s.p.y<=0&&(s.v.y<-.5&&(s.slam=Math.max(s.slam,Math.min(1,-s.v.y/2.2))),s.p.y=0,s.v.y<0&&(s.v.y=0)),s.p.y>.22&&(s.p.y=.22,s.v.y>0&&(s.v.y=0)),s.p.x>.07?(s.p.x=.07,s.v.x>0&&(s.v.x=-.3*s.v.x)):s.p.x<-.26&&(s.p.x=-.26,s.v.x<0&&(s.v.x=0)),s.p.z>.16?(s.p.z=.16,s.v.z>0&&(s.v.z=0)):s.p.z<-.24&&(s.p.z=-.24,s.v.z<0&&(s.v.z=0));s.slam=Math.max(0,s.slam-e*3.2),this.state==="title"&&s.p.multiplyScalar(.5),o.copy(this.seatPos).add(s.p).sub(i.com).applyQuaternion(i.group.quaternion).add(i.group.position),h.copy(i.group.quaternion).multiply(this.seatQuat).multiply(a.q.setFromAxisAngle(a.z,s.p.x/.5)).multiply(a.q.setFromAxisAngle(a.x,s.p.y/.8)),n.pin(o,h,i.velocityAt(o,this._seatV||(this._seatV=new w)),i.angVel);let u=this.anim.ride;u.lift=s.p.y/.22,u.side=s.p.x/.2,u.fore=s.p.z/.2,u.slam=s.slam,s.slam>.55&&this.state==="playing"&&(this.impactBlur=Math.max(this.impactBlur,.12*s.slam))}launchIntroWave(t=10){return this.introWave=this.interaction.launch({lead:t,height:12.5,breakOffset:.2,angleOffset:0,width:190,speed:14}),this.introWave}boatPoint(t,e,i,n){return n.set(t,e,i).applyMatrix4(this.boat.holder.children[0].matrixWorld)}contactBoat(t){let e=this.boat,i=this.body,n=this.player,s=this.survival;this.clingCool=Math.max(0,(this.clingCool||0)-t);let a=n.swimHeld,o=a&&!this._swimWas;if(this._swimWas=a,!e.active||!e.loaded){this.clinging=!1,n.cling=!1,n.faceDir=null,this.nearBoat=99;return}let h=this._cb||(this._cb={c:new w,g:{},g2:{},out:new w,a:new w,f:new w,v:new w,l:new w,n:new w,Y:new w});if(h.c.set(0,.4,0).applyQuaternion(i.quat).add(i.pos),h.c.distanceToSquared(e.pos)>36){this.nearBoat=99,this.clinging&&this.letGo(!1);return}let c=e.nearestGrip(h.c,h.g);this.nearBoat=c.dist,h.Y.set(0,1,0).applyQuaternion(e.quat);for(let x=0;x<3;x++){let v=i.points[x],M=x===1?.15:.11,R=e.nearestGrip(v.world,h.g2),y=0;if(R.dist<we.tubeR+M)y=we.tubeR+M-R.dist,h.n.copy(v.world).sub(R.point),h.n.lengthSq()<1e-6&&h.n.copy(R.normal),this.clinging&&(h.n.y=Math.max(0,h.n.y),h.n.lengthSq()<1e-6&&h.n.copy(R.normal)),h.n.normalize();else{let E=h.l.copy(v.world).applyMatrix4(e.inv);if(Math.abs(E.x)<Qi(E.z)&&E.z>we.transomZ&&E.z<we.bowZ&&E.y>0&&E.y<we.floorY+M){let T=E.y>.17;y=T?we.floorY+M-E.y:E.y+M*.5,h.n.copy(h.Y).multiplyScalar(T?1:-1)}}if(y>0){e.velocityAt(v.world,h.v);let E=(i.vel.x-h.v.x)*h.n.x+(i.vel.y-h.v.y)*h.n.y+(i.vel.z-h.v.z)*h.n.z,T=Math.max(0,Math.min(2600,y*9e3-E*500));i.extForce.addScaledVector(h.n,T),e.pushAt(v.world,-h.n.x*T*.6,-h.n.y*T*.6,-h.n.z*T*.6)}}if(!this.clinging){let x=s.alive&&this.clingCool<=0&&c.dist<1.25&&!n.diveHeld&&!this.rescue.reach&&this.rescue.state!=="lift"&&n.air<.5;if(this.canCling=x,x&&o)this.clinging=!0,this.clingZ=c.z,this.clingSide=c.side,this.strain=0,this.clingNote=0,this.grip=Math.max(this.grip===void 0?1:this.grip,.35),this.runaway=0,this.grabT=3;else{n.cling=!1,n.faceDir=null,this.grip=Math.min(1,(this.grip===void 0?1:this.grip)+.03*t);return}}if(!s.alive||n.diveHeld){this.letGo(!1);return}let l=Qi(this.clingZ),u=Qi(this.clingZ+.05),d=(this._cg||(this._cg=new w)).set(this.clingSide*l,Dr(this.clingZ),this.clingZ).applyMatrix4(e.matrix),f=this.clingSide*(u-l),m=Math.hypot(f,.05);h.out.set(this.clingSide*.05/m,0,-this.clingSide*f/m).applyQuaternion(e.quat),h.out.y=0,h.out.lengthSq()<.04&&h.out.set(i.pos.x-d.x,0,i.pos.z-d.z),h.out.normalize(),h.c.set(0,.42,0).applyQuaternion(i.quat),this.squeezeK=(this.squeezeK||0)+((a?1:0)-(this.squeezeK||0))*(1-Math.exp(-t*6)),h.a.copy(d).addScaledVector(h.out,we.tubeR+.2-.07*this.squeezeK),h.a.y=i.surfaceH+.065+.05*this.squeezeK,h.l.copy(i.pos).add(h.c),e.velocityAt(d,h.v),h.n.copy(i.angVel).cross(h.c).add(i.vel),h.f.copy(h.a).sub(h.l).multiplyScalar(900),h.f.x-=(h.n.x-h.v.x)*230,h.f.y-=(h.n.y-h.v.y)*280,h.f.z-=(h.n.z-h.v.z)*230;let b=h.f.length(),g=a;this.needNow=b,this.squeeze=g,n.squeeze=g,this.grip=Math.max(0,Math.min(1,this.grip+(g?-(.17+.1*Math.min(1,b/600)):.06)*t)),this.grabT=Math.max(0,(this.grabT||0)-t);let p=(g?200+730*this.grip:200+130*this.grip)*(.5+.5*s.eff)*(.4+.6*n.control);this.grabT>0&&(p=Math.max(p,1e3),b<190&&(this.grabT=Math.min(this.grabT,.2))),this.strain=Math.max(0,this.strain+(b>p?t:-t*.8)),b>p&&h.f.multiplyScalar(p/b),i.extForce.add(h.f),i.extTorque.x+=h.c.y*h.f.z-h.c.z*h.f.y,i.extTorque.y+=h.c.z*h.f.x-h.c.x*h.f.z,i.extTorque.z+=h.c.x*h.f.y-h.c.y*h.f.x,e.pushAt(d,-h.f.x,-h.f.y,-h.f.z),h.c.add(i.pos),n.cling=!0,n.faceDir=(this._fd||(this._fd=new w)).copy(h.out).multiplyScalar(-1),(this.strain>.6||h.c.distanceTo(d)>1.9)&&this.letGo(!0)}letGo(t){this.clinging&&(this.clinging=!1,this.player.cling=!1,this.player.squeeze=!1,this.player.faceDir=null,this.clingCool=t?1.1:.7,t&&(this.tornAt=this.time,this.player.control=Math.min(this.player.control,.3),this.brnd()<.5&&this.startRunaway()),this.gustT=5+6*this.brnd())}startRunaway(){if(!this.boat.active||this.aboard)return;let t=this.weather.wind,e=Math.hypot(t.x,t.z)||1,i=(this.brnd()-.5)*.7;(this.runDir||(this.runDir=new w)).set((t.x*Math.cos(i)-t.z*Math.sin(i))/e,0,(t.x*Math.sin(i)+t.z*Math.cos(i))/e),this.runaway=5+4*this.brnd(),this.runNote=1.6}boatFrame(t){let e=this.boat;if(!e.active||!e.loaded)return;this.slamCool=Math.max(0,(this.slamCool||0)-t),this.state;{let s=this.spray,a=e.relSpeed;if(a>1.1&&e.subFrac>.03&&e.subFrac<.9){this.hullAcc=(this.hullAcc||0)+t*Math.min(46,(a-.9)*16);let o=e.group.quaternion,h=this._hs||(this._hs={l:new w,p:new w,n:new w,qi:new yt});h.l.copy(e.relFlow).applyQuaternion(h.qi.copy(o).invert());let c=Math.hypot(h.l.x,h.l.z)||1;h.l.x/=c,h.l.z/=c;let l=s.near;s.near=!0;let u=0;for(;this.hullAcc>=1&&u++<12;){this.hullAcc-=1;let d=-1.9+Math.random()*3.85,f=Math.random()<.5?-1:1,m=d>1.5,b=m?f*.5:f,g=m?.87:0;if(b*-h.l.x+g*-h.l.z<.2)continue;this.boatPoint(f*(Qi(d)+.2),.28,d,h.p);let p=this.waves.heightFast(h.p.x,h.p.z);if(Math.abs(h.p.y-p)>.45)continue;h.n.set(b,0,g).applyQuaternion(o);let x=.9+Math.random()*2.2*Math.min(1.6,a/2.2),v=.5+Math.random()*1.4;if(s.emit(h.p.x,p+.04,h.p.z,e.vel.x+h.n.x*v+e.relFlow.x*.25,e.vel.y*.3+x,e.vel.z+h.n.z*v+e.relFlow.z*.25,.4+Math.random()*.5,Math.random()<.25?.024+Math.random()*.02:.01+Math.pow(Math.random(),2)*.02,0,0,.95),Math.random()<.1){let M=(.26+.24*Math.random())*Math.min(1.6,a/2.2);s.lean=(h.n.x*s._rx+h.n.z*s._rz)*.5,s.emit(h.p.x,p-.02,h.p.z,e.vel.x+h.n.x*.5,0,e.vel.z+h.n.z*.5,.62*Math.sqrt(M/.45),M,3,0,.75,0),s.lean=0}}s.near=l}if(this.lightSlapCool=Math.max(0,(this.lightSlapCool||0)-t),e.slam>1.2&&e.slam<=2.4&&this.lightSlapCool<=0){this.lightSlapCool=.4;{let o=this.slamOut(),h=this._bt.n;s.slap(o.x,e.slamPos.y,o.z,Math.min(1.9,.5+e.slam*.5),h.x*.8,h.z*.8,e.vel.x,0,e.vel.z,2.2)}this.boatSlamK=Math.max(this.boatSlamK||0,.25+e.slam*.12),this.state!=="title"&&this.emit("boatSlam",{v:e.slam*.8,pan:0})}}if(e.slam>2.4&&this.slamCool<=0&&this.state!=="title"){this.slamCool=.5,this.boatSlamK=1;let s=Math.min(2.2,(e.slam-1.6)*.6);this.spray.burst(e.slamPos.x,e.slamPos.y,e.slamPos.z,s*.6,this.weather.wind);{let a=this.slamOut(),o=this._bt.n.x,h=this._bt.n.z;for(let c=0;c<3;c++){let l=(c-1)*.7,u=Math.cos(l),d=Math.sin(l),f=o*u-h*d,m=o*d+h*u;this.spray.slap(a.x+f*.3-o*.1,e.slamPos.y,a.z+m*.3-h*.1,Math.min(3,1.2+e.slam*.4),f,m,e.vel.x,0,e.vel.z,3)}}this.foam.addSplash(e.slamPos.x,e.slamPos.z,Math.min(1,.3+e.slam/8));{let a=this.camera.matrixWorld.elements,o=e.slamPos.x-this.camera.position.x,h=e.slamPos.z-this.camera.position.z,c=Math.hypot(o,h);this.emit("boatSlam",{v:e.slam*Math.min(1,9/(c+3)),pan:Math.max(-.8,Math.min(.8,(o*a[0]+h*a[2])/(c+.5)))})}}if(this.wasCapsized!==e.capsized&&(this.wasCapsized=e.capsized,this.state!=="title"&&(this.spray.burst(e.pos.x,this.waves.heightFast(e.pos.x,e.pos.z),e.pos.z,1.8,this.weather.wind),this.foam.addSplash(e.pos.x,e.pos.z,1),this.emit("boatSlam",{v:7,pan:0}))),!this.ui||this.state!=="playing")return;let i=this.isTouch?"\uD5E4\uC5C4":"Space",n=this.isTouch?"\uC785\uC218":"F";this.boatNote=Math.max(0,(this.boatNote||0)-t),this.clinging&&!this._clingWas?(this.ui.note(`\uB3CC\uD48D\xB7\uD070 \uD30C\uB3C4\uAC00 \uC62C \uB54C ${i} \uAFB9 \u2014 \uAF49 \uC954\uB2E4 \xB7 ${n} \uB193\uAE30`,4.5),this.boatNote=6):!this.clinging&&this._clingWas&&this.time-(this.tornAt||-9)<.3?(this.ui.note("\uB193\uCCE4\uB2E4",2.5),this.boatNote=4):!this.clinging&&!this.aboard&&this.canCling&&this.boatNote<=0&&(this.ui.note(`${i} \u2014 \uBCF4\uD2B8\uB97C \uBD99\uC7A1\uACE0 \uBC84\uD2F4\uB2E4`,3),this.boatNote=7),this._clingWas=this.clinging}throwOff(){if(!this.aboard)return;let t=this.body,e=this.boat;this.aboard=!1,e.rider=0,e.flipArmed=!1,e.keepYaw=null;let i=(this._tv||(this._tv=new w)).set(0,1,0).applyQuaternion(e.quat);t.vel.addScaledVector(i,2),t.vel.y+=1,t.vel.y>6.5&&(t.vel.y=6.5),t.angVel.copy(e.angVel).multiplyScalar(.9),this.player.control=.04,this.player.impact=Math.max(this.player.impact,1.8),this.player.impactPeak=Math.max(this.player.impactPeak,1.8),this.anim.hold=null,this.acc=0,this.impactBlur=Math.max(this.impactBlur,.6),this.emit("impact",{strength:2.6,dir:i.clone(),aer:e.aer}),this.thrownAt=this.time,this.clingCool=2.5,this.ui&&this.state==="playing"&&this.ui.note(this.isTouch?"\uD5E4\uC5C4 \xB7 \uC785\uC218":"Space \uD5E4\uC5C4 \xB7 F \uC785\uC218",6)}buildEffects(){let t=this.perf.profile;if(this.rain){this.scene.remove(this.rain.group,this.spray.mesh,this.underwater.group);for(let e of[this.rain.group,this.spray.mesh,this.underwater.group])e.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()});this.foam.enabled&&this.foam.rt.forEach(e=>e.dispose()),this.lens.rt.dispose()}this.rain=new bo(t),this.spray=new xo(this.waves,t.spray),this.foam=new to(this.renderer,t.foamAcc),this.underwater=new yo(this.waves,t),this.lens=new no(this.renderer,t.lensDrops),this.scene.add(this.rain.group,this.spray.mesh,this.underwater.group),this.post.u.tLens.value=this.lens.texture,this.interaction?this.interaction.spray=this.spray:this.interaction=new eo(this.waves,this.body,this.player,this.spray),this.underwater.onEnter=()=>{this.underwater.burstAt(this.camera.position,46,.8),this.impactBlur=Math.max(this.impactBlur,.5),this.emit("camEnter")},this.underwater.onExit=()=>{this.lens.spawn(Math.round(14+20*(1-this.cam.blend)),1),this.lens.sheet=1,this.emit("camExit")},this.interaction.onImpact=e=>{let i=Math.min(1,e.strength/3);this.impactBlur=Math.max(this.impactBlur,i),this.underwater.burst=Math.max(this.underwater.burst,i),this.underwater.isUnder||this.lens.spawn(Math.round((6+16*i)*(1.6-this.cam.blend)),1),this.foam.addSplash(this.body.pos.x,this.body.pos.z,1),this.emit("impact",e)},this.interaction.onSplash=(e,i)=>{!this.underwater.isUnder&&this.cam.blend<.5&&this.lens.spawn(2),this.foam.addSplash(i.x,i.z,Math.min(1,e/4)),this.emit("splash",{v:e,pos:i})}}setQuality(t){this.perf.setProfile(t),Ei.set("quality",t);let e=this.perf.profile;this.ocean.applyProfile(e),this.sky.envRT.setSize(e.envSize,e.envSize/2),this.post.levels=e.bloomLevels,this.buildEffects(),this.resize(!0)}setState(t){this.state=t,this.ui&&this.ui.show(t,{time:this.survival.timeAlive,cause:this.survival.cause})}start(){this.audio.start(),this.resetPlayer(),!this.pendingScenario&&!this.scenarios.active&&this.board(),this.cam.script=null,this.input.enabled=!0,this.pendingScenario?(this.scenarios.run(this.pendingScenario),this.pendingScenario=null):this.scenarios.active||(this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=this.aboard?58:22,this.interaction.megaNext=105+Math.random()*40,this.introWaveAt=this.aboard?this.time+9.5:0),this.isTouch?this.goFullscreen():this.input.lock(),this.setState("playing"),this.scenarios.active||(this.cam.setMode(this.cam.mode),this.cam.cine={mode:"intro",t:0,dur:4.5},this.introStrike=1.3),this.ui&&this.ui.note(this.aboard?`\uBCF4\uD2B8\uAC00 \uD288 \uB54C ${this.isTouch?"\uBD99\uC7A1\uAE30":"Space"} \uAFB9 \u2014 \uAF49 \uBD99\uC7A1\uC544\uB77C`:this.isTouch?"\uD5E4\uC5C4 \xB7 \uC785\uC218":"Space \uD5E4\uC5C4 \xB7 F \uC785\uC218",6),this.last=performance.now()}pause(){this.state==="playing"&&(this.input.enabled=!1,this.audio.suspend(),this.isTouch||this.input.unlock(),this.setState("paused"))}resume(){this.state!=="playing"&&(this.audio.start(),this.audio.resume(),this.input.enabled=!0,this.cam.script=null,this.isTouch||this.input.lock(),this.setState("playing"),this.last=performance.now())}restart(){this.scenarios.stop(),this.weather.locked=!1,this.weather.base=1;for(let t of this.waves.breakers)t.active=!1;this.rescue.reset(240),this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=22,this.interaction.megaNext=80+Math.random()*40,this.resetPlayer(),this.board(),this.aboard&&(this.interaction.next=58,this.introWaveAt=this.time+9.5),this.resume(),this.ui&&this.aboard&&this.ui.note(`\uBCF4\uD2B8\uAC00 \uD288 \uB54C ${this.isTouch?"\uBD99\uC7A1\uAE30":"Space"} \uAFB9 \u2014 \uAF49 \uBD99\uC7A1\uC544\uB77C`,6)}resetPlayer(){this.body.reset(this.body.pos.x,this.body.pos.z),this.survival.reset(),this.survival.events.length=0,this.player.brace=0,this.player.air=0,this.player.control=1,this.player.diveBlend=0,this.player.riseBlend=0,this.player.crawlBlend=0,this.player.swimBlend=0,this.player.underSwim=0,this.player.impact=0,this.player.impactPeak=0,this.player.tumble=0,this.player.events.length=0,this.cam.qd.identity(),this.cam.inited=!1,this.deadTimer=0,this.impactBlur=0,this.mouthUnder=!1,this.wonTimer=0,this.lifting=!1,this.liftIn=0,this.anim.force=null,this.cam.cine=null,this.timeScale=1,this.slowLeft=1.4,this.slowWant=1,this.grabNote=0,this.post.u.uFade.value=0,this.post.u.uTunnel.value=0,this.post.u.uDesat.value=0,this.lens.wipe(),this.limbs.reset(),this.aboard=!1,this.anim.hold=null,this.boat.hide(),this.clinging=!1,this.player.cling=!1,this.player.faceDir=null,this.introWave=null,this.introWaveAt=0,this.grip=1,this.slip=0,this.aboardLoose=0,this._slipTold=!1,this.fear=.45,this.gustTold=!1,this.squeeze=!1,this.squeezeK=0,this.runaway=0,this.gustT=6,this.brnd=oi(977),this.player.squeeze=!1,this.thrownAt=-99,this.wasCapsized=!1,this.clingCool=0,this.syncCharacter(1),this.character.group.updateMatrixWorld(!0)}goFullscreen(){try{let t=document.documentElement,e=t.requestFullscreen?t.requestFullscreen():null;e&&e.catch&&e.catch(()=>{})}catch{}}resize(t){let e=window.innerWidth,i=window.innerHeight,n=Math.min(window.devicePixelRatio||1,2);this.renderer.setSize(Math.round(e*n),Math.round(i*n),!1),this.canvas.style.width=e+"px",this.canvas.style.height=i+"px",this.camera.aspect=e/i,this.cam.portrait=mt((1-e/i)/.5),this.camera.updateProjectionMatrix();let[s,a]=this.perf.renderSize(Math.round(e*n),Math.round(i*n));this.post.useOpaque=this.perf.profile.refraction,this.post.fxaa=this.perf.profile.fxaa,this.post.setSize(s,a,t===!0),this.ocean.uniforms.uSceneColor.value=this.post.rtOpaque.texture,this.ocean.uniforms.uSceneDepth.value=this.post.rtOpaque.depthTexture}emit(t,e){for(let i=0;i<this.listeners.length;i++)this.listeners[i](t,e)}syncCharacter(t){let e=this.character.group,i=this.body;e.position.lerpVectors(i.prevPos,i.pos,t),e.quaternion.slerpQuaternions(i.prevQuat,i.quat,t)}step(t){this.time+=t,at.uTime.value=this.time,this.scenarios.update(t),this.weather.update(t),this.waves.update(t),at.uWaveA.value=this.waves.uA,at.uWaveB.value=this.waves.uB,at.uBrkA.value=this.waves.uBrkA,at.uBrkB.value=this.waves.uBrkB,at.uBrkC.value=this.waves.uBrkC,this.body.wind.copy(this.weather.wind),this.body.breathVol=(this.survival.lung-.55)*3.2,this.acc+=t;let e=0;if(this.studio){let y=this.studio,E=this.body;E.pos.set(y.x,y.y,y.z),E.prevPos.copy(E.pos),E.vel.set(0,0,0),E.angVel.set(0,0,0),E.quat.copy(y.quat),E.prevQuat.copy(y.quat),E.relFlow.set(0,0,0),E.relSpeed=0,this.anim.force=y.state,this.anim.forcePhase=y.phase,this.acc=0}if(this.lifting){let y=this.body,E=this.rescue;y.prevPos.copy(y.pos),y.prevQuat.copy(y.quat);let T=E.hangDir,_=this._liftQ||(this._liftQ=new yt),S=this._liftQ2||(this._liftQ2=new yt);_.setFromUnitVectors(this._up||(this._up=new w(0,1,0)),T),S.setFromAxisAngle(this._up,E.ringSpin),_.multiply(S);let k=(this._liftP||(this._liftP=new w)).copy(E.ring).addScaledVector(T,-.2);this.liftIn||((this.liftOff||(this.liftOff=new w)).copy(y.pos).sub(k),(this.liftQ0||(this.liftQ0=new yt)).copy(y.quat),this.liftOff.length()>2&&this.liftOff.setLength(2)),this.liftIn=Math.min(1,(this.liftIn||0)+t/1.1);let W=this.liftIn*this.liftIn*(3-2*this.liftIn);y.pos.copy(k).addScaledVector(this.liftOff,1-W),y.quat.copy(this.liftQ0).slerp(_,W),y.vel.copy(E.vel),y.angVel.set(0,0,0),y.subFrac=Math.max(0,Math.min(1,(this.waves.heightFast(y.pos.x,y.pos.z)-y.pos.y+.6)/1.5)),y.mouthDepth=-2,y.eyeDepth=-2,y.relSpeed=0,y.dragG=0,this.anim.force="hang",this.acc=0}{let y=this.boat;y.tow.set(0,0,0);let E=this.time-(this.thrownAt||-99);if(y.active&&!this.aboard&&E<16){let _=this.body.pos.x-y.pos.x,S=this.body.pos.z-y.pos.z,k=Math.hypot(_,S)+.001;if(k>5.5){let W=((y.vel.x-this.body.vel.x)*_+(y.vel.z-this.body.vel.z)*S)/k,Y=Math.max(0,Math.min(3200,(k-5.5)*420-W*700))*Math.min(1,(16-E)/4);y.tow.set(_/k*Y,0,S/k*Y)}}if(this.gustPull=0,y.active&&this.clinging){let _=mt((this.weather.gust-1.12)/.18);if(_>0){let S=this.weather.wind,k=Math.hypot(S.x,S.z)||1,W=1900*_*_;y.tow.x+=S.x/k*W,y.tow.z+=S.z/k*W}this.gustPull=_,_>.45&&!this.gustTold&&this.ui&&this.state==="playing"&&(this.gustTold=!0,this.ui.note(`\uB3CC\uD48D\uC774 \uBCF4\uD2B8\uB97C \uC7A1\uC544\uCC48\uB2E4 \u2014 ${this.isTouch?"\uD5E4\uC5C4":"Space"} \uAFB9`,3.5))}if(y.active&&!this.aboard&&!this.clinging&&E>=16&&this.state==="playing"&&(this.gustT=(this.gustT===void 0?6:this.gustT)-t,this.gustT<=0&&(this.gustT=6+9*this.brnd(),this.runaway<=0&&this.brnd()<.5&&this.startRunaway())),this.runaway>0&&y.active)if(this.runaway-=t,this.clinging||this.aboard)this.runaway=0;else{let _=Math.min(1,this.runaway/1.5)*1100;y.tow.x+=this.runDir.x*_,y.tow.z+=this.runDir.z*_,this.runNote-=t,this.runNote<=0&&this.runNote>-1&&this.ui&&y.pos.distanceTo(this.body.pos)>7&&(this.runNote=-2,this.ui.note("\uBCF4\uD2B8\uAC00 \uB5A0\uBC00\uB824 \uAC04\uB2E4",3),this.boatNote=6)}y.active&&!this.aboard&&y.pos.distanceToSquared(this.body.pos)>150*150&&y.hide(),y.wind.copy(this.weather.wind),this.bacc+=t;let T=0;for(;y.active&&this.bacc>=Zi&&T<8;)y.step(Zi),this.bacc-=Zi,T++;if((T===8||!y.active)&&(this.bacc=0),y.sync(this.bacc/Zi),this.aboard){if(this.washT=this.body.mouthDepth>.05?this.washT+t:0,y.flipping>0&&(y.upY<.4||y.sitUp<.5)||y.upY<.1||y.angVel.length()>3.4||this.washT>1.3||!y.active||this.lifting)this.throwOff();else if(this.pinToBoat(!1,t),this.anim.hold="aboard",this.acc=0,this.state==="playing"&&this.survival.timeAlive>5.5){let _=this.input.enabled&&this.input.swim(),S=this.rid;this.squeeze=_,this.grip=Math.max(0,Math.min(1,this.grip+(_?-.15:.075)*t));let k=mt((S.d.length()-3.2)/5)+.8*mt(S.p.y/.1),W=_&&this.grip>.03;this.slip=Math.max(0,(this.slip||0)+(W?-1.4:k*.8+.085)*t),this.aboardLoose=(this.aboardLoose||0)+((W?0:Math.min(1,this.slip*1.6))-(this.aboardLoose||0))*(1-Math.exp(-t*8)),this.slip>.45&&!this._slipTold&&this.ui&&(this._slipTold=!0,this.ui.note(`\uC190\uC774 \uD480\uB9B0\uB2E4 \u2014 ${this.isTouch?"\uBD99\uC7A1\uAE30":"Space"} \uAFB9`,3)),this.slip>1&&(this.throwOff(),y.flipArmed=y.upY>.3,this.ui&&this.ui.note("\uBCF4\uD2B8\uC5D0\uC11C \uB5A8\uC5B4\uC84C\uB2E4",3))}}}this.introWaveAt&&this.time>=this.introWaveAt&&(this.introWaveAt=0,this.boat.active&&this.state==="playing"&&this.launchIntroWave(10.5));{let y=this.introWave,E=this.boat;if(y&&y.active&&(this.aboard||E.flipArmed)&&y.age<y.tBreak){let T=(E.pos.x-y.ox)*y.dx+(E.pos.z-y.oz)*y.dz-y.s;if(T>3){let _=Math.max(5,y.speed-(E.vel.x*y.dx+E.vel.z*y.dz));y.tBreak+=(y.age+T/_+.15-y.tBreak)*(1-Math.exp(-t*2.5))}}else y&&!y.active&&(this.introWave=null)}for(;!this.studio&&!this.lifting&&!this.aboard&&this.acc>=Zi&&e<8;)this.player.fixedUpdate(Zi),this.contactBoat(Zi),this.body.step(Zi),this.acc-=Zi,e++;e===8&&(this.acc=0),this.mouthUnder=this.mouthUnder?this.body.mouthDepth>-.015:this.body.mouthDepth>.03;let i=this.survival;this.state!=="title"&&this.state!=="won"&&!this.lifting&&i.update(t,{mouthUnder:this.mouthUnder,effort:this.player.effort,turb:this.body.turb,subFrac:this.body.subFrac,storm:this.weather.storm,sudden:this.player.impact>.8,brace:Math.max(this.player.brace,this.player.diveHeld?1:0)}),this.syncCharacter(this.acc/Zi);{let y=this.anim.reach,E=this.boat,T=0;if(this.aboard&&E.loaded)T=1,this.boatPoint(.875,.4,.22,y[0].pos),this.boatPoint(.47,.55,.58,y[1].pos),this._looseHand=this.aboardLoose>.35;else if(this.clinging&&E.loaded){T=1,this.anim.hold="cling";let _=this.clingZ,S=this.clingSide,k=Qi(_),W=this.boatPoint(S*k,Dr(_),_,this._rg||(this._rg=new w)),Y=(this._ro||(this._ro=new w)).set(this.character.group.position.x-W.x,0,this.character.group.position.z-W.z);Y.lengthSq()<1e-4&&Y.set(S,0,0).applyQuaternion(E.group.quaternion),Y.y=0,Y.normalize();let N=Y.z,D=-Y.x;for(let O=0;O<2;O++){let B=O===0?.21:-.21;y[O].pos.set(W.x+N*B+Y.x*.115,W.y+.165,W.z+D*B+Y.z*.115)}}else if(this.lifting){T=Math.min(1,(this.liftIn||0)*1.6);let _=this.character.group,S=this.rescue.ringR,k=this.rescue.ringT,W=.01*Math.sin(this.time*2.3),Y=.2;for(let D=0;D<2;D++){let O=D===0?1:-1,B=D===0?.8:.92,U=S+k*.72;y[D].pos.set(O*Math.cos(B)*U,Y+k*.55+(D===0?W:-W),Math.sin(B)*U).applyQuaternion(_.quaternion).add(_.position),y[D].pole||(y[D].pole=new w),y[D].pole.set(O*(S+k+.1),Y+k+.07,-.02).applyQuaternion(_.quaternion).add(_.position),y[D].usePole=!0}let N=Math.max(0,1-this.rescue.liftT/7);for(this.dripAcc=(this.dripAcc||0)+t*46*N*N;this.dripAcc>=1;){this.dripAcc-=1;let D=Math.random()<.6,O=(Math.random()-.5)*.3,B=D?-.86-Math.random()*.08:-.1-Math.random()*.5,U=(Math.random()-.5)*.2,F=(this._dp||(this._dp=new w)).set(O,B,U).applyQuaternion(_.quaternion).add(_.position),P=this.rescue.vel;this.spray.emit(F.x,F.y,F.z,P.x+(Math.random()-.5)*.5,P.y-.4-Math.random()*.8,P.z+(Math.random()-.5)*.5,.9+Math.random()*.5,.01+Math.random()*.014,0,0,.9)}}else this.anim.hold==="cling"&&(this.anim.hold=null);if(this.lifting||(y[0].usePole=!1,y[1].usePole=!1),y[0].on=T,y[1].on=T&&this.aboard&&this._looseHand?.15:T,this.character.glb&&this.character.glb.setGrip){let _=y[0].w>.5?1:0;this.character.glb.setGrip(_,_)}}if(this.anim.update(t),this.character.retarget(),this.character.group.updateMatrixWorld(!0),this.body.syncLimbs(this.character),this.boatFrame(t),this.state==="title")this.interaction.next=Math.max(this.interaction.next,8),this.interaction.megaNext=Math.max(this.interaction.megaNext,40),this.cam.script||(this.cam.script={yaw:-Math.PI/2,pitch:-.07}),this.cam.blend=1,this.cam.orbit=this.time*.11;else if(this.cam.orbit!==0&&!this.keepOrbit){let y=((this.cam.orbit+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;this.cam.orbit=Math.abs(y)<.01?0:y*Math.exp(-t*3)}{let y=this.cam.interest,E=this.interaction,T=this.body;if(E.crestDist<130&&E.crestDist>6&&E.crestHeight>4)y.x=T.pos.x-E.crestDx*60,y.z=T.pos.z-E.crestDz*60,y.w=mt(E.crestHeight/10)*mt(1.2-E.crestDist/130);else if(this.boat.active&&!this.aboard&&this.time-(this.thrownAt||-99)<9)y.x=this.boat.pos.x,y.z=this.boat.pos.z,y.w=.75;else if(this.rescue.state==="hover"||this.rescue.state==="inbound"){let _=this.rescue.state==="hover"?this.rescue.ring:this.rescue.pos;y.x=_.x,y.z=_.z,y.w=.6}else y.w=0;this.cam.oxygen=this.survival.alive?this.survival.oxygen:100,this.cam.shiver=this.survival.shiver}this.cam.armAdd=(this.cam.armAdd||0)+((this.aboard||this.time-(this.thrownAt||-99)<4?1.5:0)-(this.cam.armAdd||0))*(1-Math.exp(-t*1.2)),this.cam.holdAbove=!this.aboard&&this.time-(this.thrownAt||-99)<6.5,this.cam.fpLift=(this.cam.fpLift||0)+((this.aboard?.27:0)-(this.cam.fpLift||0))*(1-Math.exp(-t*(this.aboard?3:9))),this.cam.update(t);let n=this.camera.position,s=this.weather.wind,a=this.weather.storm;this.mouthWorld.copy(this.body._mouth).applyQuaternion(this.character.group.quaternion).add(this.character.group.position),this.underwater.update(t,this.camera,this.cam.surfaceAtCam,this.body,this.player,i,this.post,this.weather,this.mouthWorld,this.post.h),this.camUnder=this.underwater.under;let o=i.events;for(let y=0;y<o.length;y++){let E=o[y];E.type==="submerge"&&this.underwater.burstAt(this.mouthWorld,34,.45),E.type==="surface"&&(this.player.recover=2+4*E.need),this.emit(E.type,E)}o.length=0,this.introStrike>0&&(this.introStrike-=t,this.introStrike<=0&&this.lightning.strike(n,{azimuth:this.cam.yaw+.5,dist:1500,sheet:0,power:1.4})),this.lightning.update(t,n,a>.3?.3+.9*a:0,this.autoLightning),this.interaction.update(t,n,this.camUnder,s);let h=this.interaction.crestDist,c=this.interaction.crestHeight,l=c>18?60:30,u=i.alive&&h>-2&&h<l&&c>5?mt(1-h/l)*mt(c/9):0;this.player.brace+=(u-this.player.brace)*(1-Math.exp(-t*5)),this.cam.threat=this.interaction.threat;let d=this.rescue,f=d.state==="hover",m=this.input.enabled&&this.player.swimHeld;d.update(t,this.body.pos,s,i.timeAlive,i.alive,this.spray,this.state==="playing",this.camera.position,m),this.player.grab=d.state==="hover"&&d.gripping?d.ring:null;let b=this.isTouch?"\uD5E4\uC5C4":"Space";this.ui&&this.state==="playing"&&(!f&&d.state==="hover"&&this.ui.note(`\uAD6C\uC870 \uD5EC\uAE30 \u2014 \uD29C\uBE0C\uAE4C\uC9C0 \uAC00\uC11C ${b}\uB97C \uAFB9 \uB20C\uB7EC \uBD99\uC7A1\uC544\uB77C`,8),this.grabNote-=t,d.slipped?(d.slipped=!1,this.ui.note("\uB193\uCCE4\uB2E4",2.5),this.grabNote=3):d.reach&&!d.gripping&&this.grabNote<=0&&(this.ui.note(`${b}\uB97C \uAFB9 \uB20C\uB7EC \uBD99\uC7A1\uC544\uB77C`,2.5),this.grabNote=4)),d.state==="lift"&&!this.lifting&&(this.lifting=!0,this.input.enabled=!1,this.interaction.auto=!1,this.autoLightning=!0,this.cam.setMode("third"),this.cam.cine={mode:"lift",t:0,yaw0:this.cam.yaw},this.emit("surface",{need:1,time:6})),d.rescued&&this.state==="playing"&&(this.wonTimer+=t,this.post.u.uFade.value=Math.max(0,Math.min(.9,(this.wonTimer-9.5)/2.2)),this.wonTimer>11.5&&!this.manual&&(this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("won")));{let y=!!this.cam.cine||this.lifting;y!==!!this.cineOn&&(this.cineOn=y,this.ui&&this.ui.cine(y))}{let y=this.interaction,E=i.alive&&!this.lifting&&(this.player.brace>.7&&y.crestDist<7&&y.crestDist>-2&&y.crestHeight>7||this.player.air>.6),T=this.realDt||t;E&&this.slowLeft>0?(this.slowWant=.42,this.slowLeft-=T):(this.slowWant=1,E||(this.slowLeft=Math.min(1.4,this.slowLeft+T*.2)))}let g=this.body.subFrac<.05&&this.body.pos.y-this.body.surfaceH>1?1:0;this.player.air+=(g-this.player.air)*(1-Math.exp(-t*(g?10:4)));{let y=this.mouthUnder&&i.alive&&!this.aboard;if(y&&!this._washWas&&(this._washPend=(this.clearFor||0)>.45&&!this.player.diveHeld&&this.body.mouthDepth<.7&&this.state==="playing",this._washLive=!1,this._washT=0),y&&(this._washT=(this._washT||0)+t,this._washPend&&this._washT>=(this.player.crawlBlend>.5?.32:0)&&(this._washPend=!1,this._washLive=!0,this.washAt=this.time,this.anim.flinch=this.player.crawlBlend>.5?.6:1,this.anim.flinchSide=Math.random()<.5?-1:1,this.time-(this.gulpAt||-9)>2.5&&Math.random()<(i.inhaling?.8:.3)&&(this.gulpAt=this.time,i.swallow=Math.min(1,i.swallow+.25),i.oxygen=Math.max(0,i.oxygen-3),this._gulped=!0),this.audio.gurgle(.9),this.cam.blend<.5&&(this.body.eyeDepth>-.02&&(this.lens.sheet=Math.max(this.lens.sheet,.5)),this.impactBlur=Math.max(this.impactBlur,.22)))),!y&&this._washWas&&this._washLive&&this.time-(this.washAt||-9)<3&&i.alive&&this.state==="playing"){let E=this.mouthWorld,T=this.player.heading;for(let _=0;_<9;_++)this.spray.emit(E.x+T.x*.06,E.y,E.z+T.z*.06,T.x*(1.2+Math.random()*1.6)+(Math.random()-.5)*.8,.4+Math.random()*1.1,T.z*(1.2+Math.random()*1.6)+(Math.random()-.5)*.8,.3+Math.random()*.3,.008+Math.random()*.012,0,0,.95);this.voiceDir.say(this._gulped?"cough":"sputter",5,.95,this.vst),this._gulped&&(this.coughSeq=Math.max(this.coughSeq,2.2),this.coughT=.25),this._gulped=!1,this.cam.blend<.5&&this.lens.spawn(12,1)}this.clearFor=y?0:(this.clearFor||0)+t,this._washWas=y}{let y=this.time-(this.thrownAt||-99),E=i.alive?Math.min(1,.4+.4*this.interaction.threat+.25*mt((72-i.oxygen)/50)+.22*i.swallow+.2*mt(this.player.impact)+(this.mouthUnder?.18:0)+.3*mt(1-y/14)+.18*mt((40-i.stamina)/40)+(this.aboard?.3*mt(this.rid.d.length()/9):0)):0;this.fear=(this.fear||0)+(E-(this.fear||0))*(1-Math.exp(-t*(E>(this.fear||0)?4:.4))),this.player.fear=this.state==="title"?.3:this.fear,this.cam.shiver=Math.max(this.cam.shiver||0,1.5*Math.max(0,this.fear-.5))}let p=this.vst;p.alive=i.alive,p.blackout=i.blackout,p.mouthUnder=this.mouthUnder,p.under=this.mouthUnder,p.camUnder=this.underwater.isUnder,p.oxygen=i.oxygen,p.impact=this.player.impact,p.brace=this.player.brace,p.crestDist=h,p.crestHeight=c,p.gaspTimer=i.gaspTimer,p.inhaling=i.inhaling,p.breathPhase=i.breathPhase,p.stamina=i.stamina,p.effort=this.player.effort,p.temp=i.temp,p.swallow=i.swallow,p.air=this.player.air,p.exertion=i.exertion,p.struggle=this.anim.w.struggle,p.dive=this.player.diveHeld,p.tumble=this.player.tumble,p.turb=this.body.turb,p.fear=this.player.fear||0,p.mouthDepth=this.body.mouthDepth,this.coughSeq>0&&(this.coughSeq-=t,this.coughT-=t,this.coughT<=0&&(this.anim.coughKick=1,this.coughT=.42+Math.random()*.2,this.cam.blend<.5&&i.alive&&(this.impactBlur=Math.max(this.impactBlur,.14)))),this.face.update(t,p),this.state!=="title"&&this.voiceDir.update(t,p),this.limbs.update(t,this.spray,s,!this.aboard),this.spray.seedCrests(t,n,s,a,Math.min(40,1500*t)*(this.perf.profile.spray/9e3));{let y=this.time-(this.thrownAt||-99);this.spray.thin=y<6?.3:y<10?.3+.7*(y-6)/4:1}this.spray.seedBreakers(t,n,s);{let y=this.camera.matrixWorld.elements;this.spray._rx=y[0],this.spray._rz=y[2]}this.spray.update(t,n,s),this.rain.update(t,this.camera,s,this.weather.rain,this.camUnder,this.post.h);let x=this.post.u;this.impactBlur=Math.max(0,this.impactBlur-t*.9),x.uBlur.value=this.impactBlur*2.6,x.uSheet.value=this.lens.sheet,x.uWhiteout.value=this.interaction.whiteout*(this.time-(this.thrownAt||-99)<10?.3:1),x.uMotionBlur.value=this.perf.profile.motionBlur?Math.min(.6,this.player.impact*.3+this.player.tumble*.5):0;{let y=Math.max(mt((40-i.oxygen)/40),mt((34.2-i.temp)/2.2),i.blackout)*(i.alive?1:0);this.pulseT=(this.pulseT||0)+t*(1.5+1.2*y);let E=Math.pow(Math.max(0,Math.sin(this.pulseT*Math.PI*2)),8);x.uTunnel.value=i.blackout,this.lidK=0}x.uDesat.value=.35*i.blackout+.18*mt((35.5-i.temp)/3),this.state==="title"?(x.uDofAmount.value=1.6,x.uDofFocus.value=this.cam.arm):x.uDofAmount.value=0,i.alive&&!this.lifting&&!this.rescue.rescued&&(x.uFade.value=this.lidK||0),i.alive||(this.deadTimer===0&&!this.manual&&(this.cam.cine={mode:"death",t:0}),this.deadTimer+=t,x.uFade.value=Math.min(.82,this.deadTimer/4),this.deadTimer>4&&this.state==="playing"&&!this.manual&&(this.input.enabled=!1,this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("dead"))),this.ui&&this.state==="playing"&&(this.ui.setBars(i.oxygen/100,i.stamina/100,(i.temp-31.5)/5.5,this.clinging||this.aboard?Math.max(.02,this.grip):this.rescue.hold/this.rescue.holdNeed),this.ui.setMode(this.aboard?"boat":this.clinging?"cling":"swim"));let v=at.uFlash.value;this.flashLight.intensity=v*3.2,this.flashLight.position.copy(this.character.group.position).addScaledVector(at.uFlashDir.value,50),this.flashLight.target.position.copy(this.character.group.position),this.keyLight.position.copy(this.character.group.position).addScaledVector(at.uGlowDir.value,50),this.keyLight.target.position.copy(this.character.group.position),this.character.material.envMapIntensity=(this.studioLight?4.5:this.character.glb?1.25:1.7)+v*2,this.boat.material&&(this.boat.material.envMapIntensity=(this.studioLight?4:.6)+v*1.4),this.keyLight.intensity=this.studioLight?2.2:.42,this.ocean.update(this.camera,t),this.ocean.uniforms.uPlayerPos.value.copy(this.character.group.position),this.ocean.uniforms.uBoatOn.value=this.boat.active&&this.boat.loaded?1:0;{let y=this.boat,T=y.active&&y.loaded?Math.min(1,.12+.15*Math.max(0,y.relSpeed-.3)+.4*(this.boatSlamK||0)+(y.flipping>0?.5:0))*Math.min(1,y.subFrac*6):0;this.boatFoamK=(this.boatFoamK||0)+(T-(this.boatFoamK||0))*(1-Math.exp(-t*(T>(this.boatFoamK||0)?9:2.2))),this.boatSlamK=Math.max(0,(this.boatSlamK||0)-t*1.6),this.ocean.uniforms.uBoatFoam.value=this.boatFoamK}this.boat.active&&this.boat.loaded&&this.ocean.uniforms.uBoatInv.value.copy(this.boat.holder.children[0].matrixWorld).invert(),this.ocean.uniforms.uPlayerFoam.value=(.06+this.anim.splashiness*.12+this.limbs.activity*.18)*Math.min(1,this.body.subFrac*3)*(this.body.eyeDepth<.25?1:0);let M=this.audioState,R=this.camera.matrixWorld.elements;M.cam.fwd.set(-R[8],-R[9],-R[10]),M.cam.up.set(R[4],R[5],R[6]),M.storm=a,M.rain=this.weather.rain,M.windSpeed=this.weather.windSpeed,M.gust=this.weather.gust,M.windPan=-(s.x*R[0]+s.z*R[2])/Math.max(1,this.weather.windSpeed),M.under=this.underwater.under,M.depth=Math.max(0,this.underwater.depth),M.aeration=this.underwater.aeration,M.threat=this.interaction.threat,M.hot=this.spray.hot,M.oxygen=i.oxygen,M.effort=this.player.effort,this.clinging&&this.strain>.12&&(this.impactBlur=Math.max(this.impactBlur,.1)),M.gustPull=this.gustPull||0,M.fear=this.player.fear||0,M.boatCreak=this.aboard?.35+.5*Math.min(1,this.boat.angVel.length()*.8)+.4*this.rid.slam:this.clinging?.4+.5*Math.min(1,(this.strain||0)*2.5):0,M.heli=this.rescue.state!=="none"?{on:!0,pos:this.rescue.pos}:null,M.air=this.player.air,M.relSpeed=this.body.relSpeed,M.swellV=this.body.surface.vy,M.alive=i.alive,M.blackout=i.blackout,M.mouthUnder=this.mouthUnder,M.slow=1-(this.timeScale||1),M.swimSplash=Math.max(this.limbs.activity,this.anim.w.swim*.8)*(this.mouthUnder?.3:1),this.audio.update(t,M),this.input.endFrame()}render(t){if(this.sky.updateEnv(),this.envTimer-=t,this.envTimer<=0&&at.uFlash.value<.01){let i=this.pmrem.fromEquirectangular(this.sky.envRT.texture);this.envRT&&this.envRT.dispose(),this.envRT=i,this.scene.environment=i.texture,this.envTimer=9}let e=this.weather.rain*(.9+5*(1-this.cam.blend))*(.6+.4*this.weather.gust);if(this.lens.update(t,e,this.underwater.isUnder,this.camera.aspect),this.foam.enabled){let i=this.boat,n=this.foam.u,s=i.active&&i.loaded;if(s){let a=i.group.quaternion,o=2*(a.x*a.z+a.w*a.y),h=1-2*(a.x*a.x+a.y*a.y),c=Math.hypot(o,h)||1;n.uBoat.value.set(i.group.position.x,i.group.position.z,o/c,h/c)}n.uBoatFoam.value=s?Math.max(0,(this.boatFoamK||0)-.22)*1:0}this.foam.update(t,this.camera.position.x,this.camera.position.z,this.character.group.position,this.anim.splashiness*.07+this.limbs.activity*.12,this.ocean.uniforms),this.post.render(this.drawScene,this.camera,t,this.time)}renderStill(){this.render(0)}loop(t){requestAnimationFrame(this.loop);let e=Math.max(0,Math.min((t-this.last)/1e3,.1));this.last=t,!this.manual&&(this.state==="paused"||this.state==="dead"||(this.realDt=e,this.timeScale=(this.timeScale||1)+((this.slowWant||1)-(this.timeScale||1))*(1-Math.exp(-e*9)),this.step(e*this.timeScale),this.render(e),this.perf.update(e)&&this.resize()))}};function hy(){let r;try{r=new cl}catch(e){let i=document.getElementById("fatal");i.style.display="flex",i.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uC2E4\uD589\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 (WebGL2 \uD544\uC694). "+e.message,console.error(e);return}let t=new URLSearchParams(location.search);(t.get("glb")==="0"?Promise.resolve():r.loadCharacter()).then(()=>r.loadBoat()).then(()=>t.get("heli")==="0"?null:r.loadHeli()).then(()=>{r.onAssets&&r.onAssets(),window.__ocean.ready=!0,kr(1)}),window.__ocean={game:r,ready:!1,scenarios:Object.keys(ss),advance(e,i=1/60){let n=Math.max(1,Math.round(e/i));for(let s=0;s<n;s++)r.step(i),r.render(i)},scenario(e){return r.scenarios.run(e)},studio(e){let i=new yt;e.prone?i.setFromRotationMatrix(new Pt().makeBasis(new w(0,0,1),new w(-1,0,0),new w(0,-1,0))):i.setFromAxisAngle(new w(0,1,0),-Math.PI/2);let n=r.waves.sample(0,0,{}).h;r.studio={state:e.state,phase:e.phase||0,quat:i,x:0,y:n+14,z:0},r.player.underSwim=e.under?1:0,r.anim.forcePike=e.pike||0,r.weather.base=r.weather.storm=.15,r.weather.locked=!0,r.cam.setMode("third"),r.cam.blend=1,r.cam.yaw=-Math.PI/2,r.cam.pitch=e.pitch!==void 0?e.pitch:-.05,r.cam.orbit=e.orbit||0,r.keepOrbit=!0,r.cam.armOverride=e.arm||2.7,r.cam.inited=!1,r.post.u.uExposureBias.value=1,r.studioLight=!0;for(let s=0;s<4;s++)r.step(.5);return r.render(1/60),r.render(1/60),r.anim.state},set(e){return e.view&&(r.cam.setMode(e.view),e.snap&&(r.cam.blend=r.cam.target)),e.yaw!==void 0&&(r.cam.yaw=e.yaw),e.pitch!==void 0&&(r.cam.pitch=e.pitch),e.orbit!==void 0&&(r.cam.orbit=e.orbit,r.keepOrbit=!0),e.arm!==void 0&&(r.cam.armOverride=e.arm),e.keys!==void 0&&(r.input.virtual=e.keys,r.input.enabled=!0),e.storm!==void 0&&(r.weather.base=e.storm,e.snap&&(r.weather.storm=e.storm)),e.breaker&&r.interaction.launch(e.breaker),e.strike&&r.lightning.strike(r.camera.position,e.strike),!0},info(){let e=r.body,i=r.survival;return{t:+r.time.toFixed(2),state:r.state,size:[r.post.w,r.post.h],profile:r.perf.profile.key,sigH:+r.waves.sigHeight.toFixed(1),pos:[+e.pos.x.toFixed(1),+e.pos.y.toFixed(2),+e.pos.z.toFixed(1)],surf:+e.surfaceH.toFixed(2),mouth:+e.mouthDepth.toFixed(2),sub:+e.subFrac.toFixed(2),ctl:+r.player.control.toFixed(2),imp:+r.player.impact.toFixed(2),anim:r.anim.state,view:r.cam.mode,blend:+r.cam.blend.toFixed(2),camUnder:+r.camUnder.toFixed(2),yaw:+r.cam.yaw.toFixed(2),o2:+i.oxygen.toFixed(0),st:+i.stamina.toFixed(0),temp:+i.temp.toFixed(2),alive:i.alive,flash:+at.uFlash.value.toFixed(2),spray:r.spray.alive,drops:r.lens.count,fps:+r.perf.fps.toFixed(0),rescue:r.rescue.state,hold:+r.rescue.hold.toFixed(1),won:r.rescue.rescued,aboard:r.aboard,cling:!!r.clinging,grip:+(r.grip===void 0?1:r.grip).toFixed(2),runaway:+(r.runaway||0).toFixed(1),near:+(r.nearBoat||99).toFixed(1),boat:r.boat.active?{up:+r.boat.upY.toFixed(2),swamp:+r.boat.swamp.toFixed(2),dist:+r.boat.pos.distanceTo(e.pos).toFixed(1),sub:+r.boat.subFrac.toFixed(2)}:null,face:r.face.label,air:+r.player.air.toFixed(2),swim:r.player.swimHeld,dive:r.player.diveHeld,depth:+Math.max(0,e.mouthDepth).toFixed(2),voice:r.voiceDir.last,voices:r.voiceDir.count,glb:!!r.character.glb}},measure(e){return new Promise(i=>{let n=performance.now(),s=0,a=0,o=n,h=c=>{s++,a=Math.max(a,c-o),o=c,c-n>=e*1e3?i({fps:+(s/((c-n)/1e3)).toFixed(1),worstMs:+a.toFixed(1),scale:r.perf.scale,size:[r.post.w,r.post.h],profile:r.perf.profile.key}):requestAnimationFrame(h)};requestAnimationFrame(h)})}}}hy();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
