(()=>{var Ec="160";var Pf=0,Il=1,Lf=2;var Ed=1,Ff=2,on=3,_i=0,je=1,ke=2;var Tn=0,An=1,un=2,Dl=3,kl=4,Sc=5,hn=100,If=101,Df=102,zl=103,Ul=104,so=200,kf=201,Tc=202,zf=203,wr=204,zh=205,Uf=206,Nf=207,Of=208,Bf=209,Hf=210,Vf=211,Gf=212,Wf=213,qf=214,Xf=0,jf=1,Yf=2,Ca=3,Kf=4,Qf=5,Zf=6,Jf=7,Sd=0,$f=1,tp=2,ji=0,ep=1,ip=2,np=3,sp=4,rp=5,ap=6,Nl="attached",op="detached",Td=300,ks=301,zs=302,Uh=303,Nh=304,ro=306,ii=1e3,li=1001,Er=1002,Le=1003,Pa=1004;var mr=1005;var ee=1006,Ac=1007;var Ke=1008;var Ye=1009,hp=1010,cp=1011,Rc=1012,Ad=1013,En=1014,cn=1015,dn=1016,Rd=1017,Cd=1018,Xn=1020,lp=1021,de=1023,up=1024,dp=1025,jn=1026,Us=1027,fp=1028,Pd=1029,pp=1030,Ld=1031,Fd=1033,$o=33776,th=33777,eh=33778,ih=33779,Ol=35840,Bl=35841,Hl=35842,Vl=35843,Id=36196,Gl=37492,Wl=37496,ql=37808,Xl=37809,jl=37810,Yl=37811,Kl=37812,Ql=37813,Zl=37814,Jl=37815,$l=37816,tu=37817,eu=37818,iu=37819,nu=37820,su=37821,nh=36492,ru=36494,au=36495,mp=36283,ou=36284,hu=36285,cu=36286;var Ns=2300,Kn=2301,sh=2302,lu=2400,uu=2401,du=2402,gp=2500;var Dd=0,ao=1,Hr=2,kd=3e3,Yn=3001,bp=3200,vp=3201,zd=0,xp=1,He="",fe="srgb",ze="srgb-linear",Cc="display-p3",oo="display-p3-linear",La="linear",xe="srgb",Fa="rec709",Ia="p3";var cs=7680;var fu=519,yp=512,_p=513,Mp=514,Ud=515,wp=516,Ep=517,Sp=518,Tp=519,Oh=35044,mi=35048;var pu="300 es",Bh=1035,ln=2e3,Da=2001,Rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mu=1234567,gr=Math.PI/180,Os=180/Math.PI;function Ci(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ti[r&255]+ti[r>>8&255]+ti[r>>16&255]+ti[r>>24&255]+"-"+ti[t&255]+ti[t>>8&255]+"-"+ti[t>>16&15|64]+ti[t>>24&255]+"-"+ti[e&63|128]+ti[e>>8&255]+"-"+ti[e>>16&255]+ti[e>>24&255]+ti[i&255]+ti[i>>8&255]+ti[i>>16&255]+ti[i>>24&255]).toLowerCase()}function Oe(r,t,e){return Math.max(t,Math.min(e,r))}function Pc(r,t){return(r%t+t)%t}function Ap(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function Rp(r,t,e){return r!==t?(e-r)/(t-r):0}function br(r,t,e){return(1-e)*r+e*t}function Cp(r,t,e,i){return br(r,t,1-Math.exp(-e*i))}function Pp(r,t=1){return t-Math.abs(Pc(r,t*2)-t)}function Lp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Fp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Ip(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Dp(r,t){return r+Math.random()*(t-r)}function kp(r){return r*(.5-Math.random())}function zp(r){r!==void 0&&(mu=r);let t=mu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Up(r){return r*gr}function Np(r){return r*Os}function Hh(r){return(r&r-1)===0&&r!==0}function Op(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ka(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Bp(r,t,e,i,n){let s=Math.cos,a=Math.sin,o=s(e/2),h=a(e/2),c=s((t+i)/2),l=a((t+i)/2),u=s((t-i)/2),f=a((t-i)/2),d=s((i-t)/2),m=a((i-t)/2);switch(n){case"XYX":r.set(o*l,h*u,h*f,o*c);break;case"YZY":r.set(h*f,o*l,h*u,o*c);break;case"ZXZ":r.set(h*u,h*f,o*l,o*c);break;case"XZX":r.set(o*l,h*m,h*d,o*c);break;case"YXY":r.set(h*d,o*l,h*m,o*c);break;case"ZYZ":r.set(h*m,h*d,o*l,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Xi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ue(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var In={DEG2RAD:gr,RAD2DEG:Os,generateUUID:Ci,clamp:Oe,euclideanModulo:Pc,mapLinear:Ap,inverseLerp:Rp,lerp:br,damp:Cp,pingpong:Pp,smoothstep:Lp,smootherstep:Fp,randInt:Ip,randFloat:Dp,randFloatSpread:kp,seededRandom:zp,degToRad:Up,radToDeg:Np,isPowerOfTwo:Hh,ceilPowerOfTwo:Op,floorPowerOfTwo:ka,setQuaternionFromProperEuler:Bp,normalize:ue,denormalize:Xi},ct=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class r{constructor(t,e,i,n,s,a,o,h,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,h,c)}set(t,e,i,n,s,a,o,h,c){let l=this.elements;return l[0]=t,l[1]=n,l[2]=o,l[3]=e,l[4]=s,l[5]=h,l[6]=i,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],h=i[6],c=i[1],l=i[4],u=i[7],f=i[2],d=i[5],m=i[8],v=n[0],g=n[3],p=n[6],y=n[1],b=n[4],_=n[7],A=n[2],x=n[5],E=n[8];return s[0]=a*v+o*y+h*A,s[3]=a*g+o*b+h*x,s[6]=a*p+o*_+h*E,s[1]=c*v+l*y+u*A,s[4]=c*g+l*b+u*x,s[7]=c*p+l*_+u*E,s[2]=f*v+d*y+m*A,s[5]=f*g+d*b+m*x,s[8]=f*p+d*_+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],h=t[6],c=t[7],l=t[8];return e*a*l-e*o*c-i*s*l+i*o*h+n*s*c-n*a*h}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],h=t[6],c=t[7],l=t[8],u=l*a-o*c,f=o*h-l*s,d=c*s-a*h,m=e*u+i*f+n*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=u*v,t[1]=(n*c-l*i)*v,t[2]=(o*i-n*a)*v,t[3]=f*v,t[4]=(l*e-n*h)*v,t[5]=(n*s-o*e)*v,t[6]=d*v,t[7]=(i*h-c*e)*v,t[8]=(a*e-i*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let h=Math.cos(s),c=Math.sin(s);return this.set(i*h,i*c,-i*(h*a+c*o)+a+t,-n*c,n*h,-n*(-c*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(rh.makeScale(t,e)),this}rotate(t){return this.premultiply(rh.makeRotation(-t)),this}translate(t,e){return this.premultiply(rh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rh=new te;function Nd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Sr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hp(){let r=Sr("canvas");return r.style.display="block",r}var gu={};function vr(r){r in gu||(gu[r]=!0,console.warn(r))}var bu=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vu=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Kr={[ze]:{transfer:La,primaries:Fa,toReference:r=>r,fromReference:r=>r},[fe]:{transfer:xe,primaries:Fa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[oo]:{transfer:La,primaries:Ia,toReference:r=>r.applyMatrix3(vu),fromReference:r=>r.applyMatrix3(bu)},[Cc]:{transfer:xe,primaries:Ia,toReference:r=>r.convertSRGBToLinear().applyMatrix3(vu),fromReference:r=>r.applyMatrix3(bu).convertLinearToSRGB()}},Vp=new Set([ze,oo]),ce={enabled:!0,_workingColorSpace:ze,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Vp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let i=Kr[t].toReference,n=Kr[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Kr[r].primaries},getTransfer:function(r){return r===He?La:Kr[r].transfer}};function Is(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ah(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ls,za=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=Sr("canvas")),ls.width=t.width,ls.height=t.height;let i=ls.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Is(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Is(e[i]/255)*255):e[i]=Is(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gp=0,Ua=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Ci(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(oh(n[a].image)):s.push(oh(n[a]))}else s=oh(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function oh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?za.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wp=0,Qe=class r extends Rn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=li,n=li,s=ee,a=Ke,o=de,h=Ye,c=r.DEFAULT_ANISOTROPY,l=He){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Ci(),this.name="",this.source=new Ua(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===Yn?fe:He),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ii:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case Er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ii:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case Er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?Yn:kd}set encoding(t){vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Yn?fe:He}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Td;Qe.DEFAULT_ANISOTROPY=1;var qt=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,h=t.elements,c=h[0],l=h[4],u=h[8],f=h[1],d=h[5],m=h[9],v=h[2],g=h[6],p=h[10];if(Math.abs(l-f)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(l+f)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,_=(d+1)/2,A=(p+1)/2,x=(l+f)/4,E=(u+v)/4,T=(m+g)/4;return b>_&&b>A?b<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(b),n=x/i,s=E/i):_>A?_<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=x/n,s=T/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=E/s,n=T/s),this.set(i,n,s,e),this}let y=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(f-l)*(f-l));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-v)/y,this.z=(f-l)/y,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vh=class extends Rn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new qt(0,0,t,e),this.scissorTest=!1,this.viewport=new qt(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(vr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Yn?fe:He),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ee,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Qe(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ua(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_e=class extends Vh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Na=class extends Qe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Le,this.minFilter=Le,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gh=class extends Qe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Le,this.minFilter=Le,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wt=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let h=i[n+0],c=i[n+1],l=i[n+2],u=i[n+3],f=s[a+0],d=s[a+1],m=s[a+2],v=s[a+3];if(o===0){t[e+0]=h,t[e+1]=c,t[e+2]=l,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=v;return}if(u!==v||h!==f||c!==d||l!==m){let g=1-o,p=h*f+c*d+l*m+u*v,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let A=Math.sqrt(b),x=Math.atan2(A,p*y);g=Math.sin(g*x)/A,o=Math.sin(o*x)/A}let _=o*y;if(h=h*g+f*_,c=c*g+d*_,l=l*g+m*_,u=u*g+v*_,g===1-o){let A=1/Math.sqrt(h*h+c*c+l*l+u*u);h*=A,c*=A,l*=A,u*=A}}t[e]=h,t[e+1]=c,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],h=i[n+1],c=i[n+2],l=i[n+3],u=s[a],f=s[a+1],d=s[a+2],m=s[a+3];return t[e]=o*m+l*u+h*d-c*f,t[e+1]=h*m+l*f+c*u-o*d,t[e+2]=c*m+l*d+o*f-h*u,t[e+3]=l*m-o*u-h*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,h=Math.sin,c=o(i/2),l=o(n/2),u=o(s/2),f=h(i/2),d=h(n/2),m=h(s/2);switch(a){case"XYZ":this._x=f*l*u+c*d*m,this._y=c*d*u-f*l*m,this._z=c*l*m+f*d*u,this._w=c*l*u-f*d*m;break;case"YXZ":this._x=f*l*u+c*d*m,this._y=c*d*u-f*l*m,this._z=c*l*m-f*d*u,this._w=c*l*u+f*d*m;break;case"ZXY":this._x=f*l*u-c*d*m,this._y=c*d*u+f*l*m,this._z=c*l*m+f*d*u,this._w=c*l*u-f*d*m;break;case"ZYX":this._x=f*l*u-c*d*m,this._y=c*d*u+f*l*m,this._z=c*l*m-f*d*u,this._w=c*l*u+f*d*m;break;case"YZX":this._x=f*l*u+c*d*m,this._y=c*d*u+f*l*m,this._z=c*l*m-f*d*u,this._w=c*l*u-f*d*m;break;case"XZY":this._x=f*l*u-c*d*m,this._y=c*d*u-f*l*m,this._z=c*l*m+f*d*u,this._w=c*l*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],h=e[9],c=e[2],l=e[6],u=e[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(l-h)*d,this._y=(s-c)*d,this._z=(a-n)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(l-h)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(s+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(s-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(h+l)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-n)/d,this._x=(s+c)/d,this._y=(h+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,h=e._y,c=e._z,l=e._w;return this._x=i*l+a*o+n*c-s*h,this._y=n*l+a*h+s*o-i*c,this._z=s*l+a*c+i*h-n*o,this._w=a*l-i*o-n*h-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let h=1-o*o;if(h<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(h),l=Math.atan2(c,o),u=Math.sin((1-e)*l)/c,f=Math.sin(e*l)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,h=t.w,c=2*(a*n-o*i),l=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+h*c+a*u-o*l,this.y=i+h*l+o*c-s*u,this.z=n+h*u+s*l-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,h=e.z;return this.x=n*h-s*o,this.y=s*a-i*h,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return hh.copy(this).projectOnVector(t),this.sub(hh)}reflect(t){return this.sub(hh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hh=new w,xu=new wt,Pi=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ui):Ui.fromBufferAttribute(s,a),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Zr.subVectors(this.max,rr),us.subVectors(t.a,rr),ds.subVectors(t.b,rr),fs.subVectors(t.c,rr),xn.subVectors(ds,us),yn.subVectors(fs,ds),On.subVectors(us,fs);let e=[0,-xn.z,xn.y,0,-yn.z,yn.y,0,-On.z,On.y,xn.z,0,-xn.x,yn.z,0,-yn.x,On.z,0,-On.x,-xn.y,xn.x,0,-yn.y,yn.x,0,-On.y,On.x,0];return!ch(e,us,ds,fs,Zr)||(e=[1,0,0,0,1,0,0,0,1],!ch(e,us,ds,fs,Zr))?!1:(Jr.crossVectors(xn,yn),e=[Jr.x,Jr.y,Jr.z],ch(e,us,ds,fs,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},tn=[new w,new w,new w,new w,new w,new w,new w,new w],Ui=new w,Qr=new Pi,us=new w,ds=new w,fs=new w,xn=new w,yn=new w,On=new w,rr=new w,Zr=new w,Jr=new w,Bn=new w;function ch(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Bn.fromArray(r,s);let o=n.x*Math.abs(Bn.x)+n.y*Math.abs(Bn.y)+n.z*Math.abs(Bn.z),h=t.dot(Bn),c=e.dot(Bn),l=i.dot(Bn);if(Math.max(-Math.max(h,c,l),Math.min(h,c,l))>o)return!1}return!0}var qp=new Pi,ar=new w,lh=new w,Mi=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):qp.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);let e=ar.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ar,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(lh)),this.expandByPoint(ar.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},en=new w,uh=new w,$r=new w,_n=new w,dh=new w,ta=new w,fh=new w,Bs=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,en)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=en.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(en.copy(this.origin).addScaledVector(this.direction,e),en.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){uh.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(uh);let s=t.distanceTo(e)*.5,a=-this.direction.dot($r),o=_n.dot(this.direction),h=-_n.dot($r),c=_n.lengthSq(),l=Math.abs(1-a*a),u,f,d,m;if(l>0)if(u=a*h-o,f=a*o-h,m=s*l,u>=0)if(f>=-m)if(f<=m){let v=1/l;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*h)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*h)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*h)+c;else f<=-m?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-h),s),d=-u*u+f*(f+2*h)+c):f<=m?(u=0,f=Math.min(Math.max(-s,-h),s),d=f*(f+2*h)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-h),s),d=-u*u+f*(f+2*h)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*h)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(uh).addScaledVector($r,f),d}intersectSphere(t,e){en.subVectors(t.center,this.origin);let i=en.dot(this.direction),n=en.dot(en)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,h=i+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,h,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),l>=0?(s=(t.min.y-f.y)*l,a=(t.max.y-f.y)*l):(s=(t.max.y-f.y)*l,a=(t.min.y-f.y)*l),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-f.z)*u,h=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,h=(t.min.z-f.z)*u),i>h||o>n)||((o>i||i!==i)&&(i=o),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,en)!==null}intersectTriangle(t,e,i,n,s){dh.subVectors(e,t),ta.subVectors(i,t),fh.crossVectors(dh,ta);let a=this.direction.dot(fh),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,t);let h=o*this.direction.dot(ta.crossVectors(_n,ta));if(h<0)return null;let c=o*this.direction.dot(dh.cross(_n));if(c<0||h+c>a)return null;let l=-o*_n.dot(fh);return l<0?null:this.at(l/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class r{constructor(t,e,i,n,s,a,o,h,c,l,u,f,d,m,v,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,h,c,l,u,f,d,m,v,g)}set(t,e,i,n,s,a,o,h,c,l,u,f,d,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=h,p[2]=c,p[6]=l,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/ps.setFromMatrixColumn(t,0).length(),s=1/ps.setFromMatrixColumn(t,1).length(),a=1/ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),h=Math.cos(n),c=Math.sin(n),l=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=a*l,d=a*u,m=o*l,v=o*u;e[0]=h*l,e[4]=-h*u,e[8]=c,e[1]=d+m*c,e[5]=f-v*c,e[9]=-o*h,e[2]=v-f*c,e[6]=m+d*c,e[10]=a*h}else if(t.order==="YXZ"){let f=h*l,d=h*u,m=c*l,v=c*u;e[0]=f+v*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*l,e[9]=-o,e[2]=d*o-m,e[6]=v+f*o,e[10]=a*h}else if(t.order==="ZXY"){let f=h*l,d=h*u,m=c*l,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*l,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){let f=a*l,d=a*u,m=o*l,v=o*u;e[0]=h*l,e[4]=m*c-d,e[8]=f*c+v,e[1]=h*u,e[5]=v*c+f,e[9]=d*c-m,e[2]=-c,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){let f=a*h,d=a*c,m=o*h,v=o*c;e[0]=h*l,e[4]=v-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*l,e[9]=-o*l,e[2]=-c*l,e[6]=d*u+m,e[10]=f-v*u}else if(t.order==="XZY"){let f=a*h,d=a*c,m=o*h,v=o*c;e[0]=h*l,e[4]=-u,e[8]=c*l,e[1]=f*u+v,e[5]=a*l,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*l,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xp,t,jp)}lookAt(t,e,i){let n=this.elements;return xi.subVectors(t,e),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Mn.crossVectors(i,xi),Mn.lengthSq()===0&&(Math.abs(i.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Mn.crossVectors(i,xi)),Mn.normalize(),ea.crossVectors(xi,Mn),n[0]=Mn.x,n[4]=ea.x,n[8]=xi.x,n[1]=Mn.y,n[5]=ea.y,n[9]=xi.y,n[2]=Mn.z,n[6]=ea.z,n[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],h=i[8],c=i[12],l=i[1],u=i[5],f=i[9],d=i[13],m=i[2],v=i[6],g=i[10],p=i[14],y=i[3],b=i[7],_=i[11],A=i[15],x=n[0],E=n[4],T=n[8],M=n[12],S=n[1],D=n[5],G=n[9],K=n[13],O=n[2],P=n[6],F=n[10],z=n[14],U=n[3],N=n[7],k=n[11],W=n[15];return s[0]=a*x+o*S+h*O+c*U,s[4]=a*E+o*D+h*P+c*N,s[8]=a*T+o*G+h*F+c*k,s[12]=a*M+o*K+h*z+c*W,s[1]=l*x+u*S+f*O+d*U,s[5]=l*E+u*D+f*P+d*N,s[9]=l*T+u*G+f*F+d*k,s[13]=l*M+u*K+f*z+d*W,s[2]=m*x+v*S+g*O+p*U,s[6]=m*E+v*D+g*P+p*N,s[10]=m*T+v*G+g*F+p*k,s[14]=m*M+v*K+g*z+p*W,s[3]=y*x+b*S+_*O+A*U,s[7]=y*E+b*D+_*P+A*N,s[11]=y*T+b*G+_*F+A*k,s[15]=y*M+b*K+_*z+A*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],h=t[9],c=t[13],l=t[2],u=t[6],f=t[10],d=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+s*h*u-n*c*u-s*o*f+i*c*f+n*o*d-i*h*d)+v*(+e*h*d-e*c*f+s*a*f-n*a*d+n*c*l-s*h*l)+g*(+e*c*u-e*o*d-s*a*u+i*a*d+s*o*l-i*c*l)+p*(-n*o*l-e*h*u+e*o*f+n*a*u-i*a*f+i*h*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],h=t[6],c=t[7],l=t[8],u=t[9],f=t[10],d=t[11],m=t[12],v=t[13],g=t[14],p=t[15],y=u*g*c-v*f*c+v*h*d-o*g*d-u*h*p+o*f*p,b=m*f*c-l*g*c-m*h*d+a*g*d+l*h*p-a*f*p,_=l*v*c-m*u*c+m*o*d-a*v*d-l*o*p+a*u*p,A=m*u*h-l*v*h-m*o*f+a*v*f+l*o*g-a*u*g,x=e*y+i*b+n*_+s*A;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/x;return t[0]=y*E,t[1]=(v*f*s-u*g*s-v*n*d+i*g*d+u*n*p-i*f*p)*E,t[2]=(o*g*s-v*h*s+v*n*c-i*g*c-o*n*p+i*h*p)*E,t[3]=(u*h*s-o*f*s-u*n*c+i*f*c+o*n*d-i*h*d)*E,t[4]=b*E,t[5]=(l*g*s-m*f*s+m*n*d-e*g*d-l*n*p+e*f*p)*E,t[6]=(m*h*s-a*g*s-m*n*c+e*g*c+a*n*p-e*h*p)*E,t[7]=(a*f*s-l*h*s+l*n*c-e*f*c-a*n*d+e*h*d)*E,t[8]=_*E,t[9]=(m*u*s-l*v*s-m*i*d+e*v*d+l*i*p-e*u*p)*E,t[10]=(a*v*s-m*o*s+m*i*c-e*v*c-a*i*p+e*o*p)*E,t[11]=(l*o*s-a*u*s-l*i*c+e*u*c+a*i*d-e*o*d)*E,t[12]=A*E,t[13]=(l*v*n-m*u*n+m*i*f-e*v*f-l*i*g+e*u*g)*E,t[14]=(m*o*n-a*v*n-m*i*h+e*v*h+a*i*g-e*o*g)*E,t[15]=(a*u*n-l*o*n+l*i*h-e*u*h-a*i*f+e*o*f)*E,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,h=t.z,c=s*a,l=s*o;return this.set(c*a+i,c*o-n*h,c*h+n*o,0,c*o+n*h,l*o+i,l*h-n*a,0,c*h-n*o,l*h+n*a,s*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,h=e._w,c=s+s,l=a+a,u=o+o,f=s*c,d=s*l,m=s*u,v=a*l,g=a*u,p=o*u,y=h*c,b=h*l,_=h*u,A=i.x,x=i.y,E=i.z;return n[0]=(1-(v+p))*A,n[1]=(d+_)*A,n[2]=(m-b)*A,n[3]=0,n[4]=(d-_)*x,n[5]=(1-(f+p))*x,n[6]=(g+y)*x,n[7]=0,n[8]=(m+b)*E,n[9]=(g-y)*E,n[10]=(1-(f+v))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=ps.set(n[0],n[1],n[2]).length(),a=ps.set(n[4],n[5],n[6]).length(),o=ps.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Ni.copy(this);let c=1/s,l=1/a,u=1/o;return Ni.elements[0]*=c,Ni.elements[1]*=c,Ni.elements[2]*=c,Ni.elements[4]*=l,Ni.elements[5]*=l,Ni.elements[6]*=l,Ni.elements[8]*=u,Ni.elements[9]*=u,Ni.elements[10]*=u,e.setFromRotationMatrix(Ni),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=ln){let h=this.elements,c=2*s/(e-t),l=2*s/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),d,m;if(o===ln)d=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===Da)d=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=l,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=m,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=ln){let h=this.elements,c=1/(e-t),l=1/(i-n),u=1/(a-s),f=(e+t)*c,d=(i+n)*l,m,v;if(o===ln)m=(a+s)*u,v=-2*u;else if(o===Da)m=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*c,h[4]=0,h[8]=0,h[12]=-f,h[1]=0,h[5]=2*l,h[9]=0,h[13]=-d,h[2]=0,h[6]=0,h[10]=v,h[14]=-m,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ps=new w,Ni=new Lt,Xp=new w(0,0,0),jp=new w(1,1,1),Mn=new w,ea=new w,xi=new w,yu=new Lt,_u=new wt,ni=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],h=n[1],c=n[5],l=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var Oa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yp=0,Mu=new w,ms=new wt,nn=new Lt,ia=new w,or=new w,Kp=new w,Qp=new wt,wu=new w(1,0,0),Eu=new w(0,1,0),Su=new w(0,0,1),Zp={type:"added"},Jp={type:"removed"},Te=class r extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new w,e=new ni,i=new wt,n=new w(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Lt},normalMatrix:{value:new te}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(wu,t)}rotateY(t){return this.rotateOnAxis(Eu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return Mu.copy(t).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wu,t)}translateY(t){return this.translateOnAxis(Eu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ia.copy(t):ia.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(or,ia,this.up):nn.lookAt(ia,or,this.up),this.quaternion.setFromRotationMatrix(nn),n&&(nn.extractRotation(n.matrixWorld),ms.setFromRotationMatrix(nn),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Zp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,Kp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Qp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let c=0,l=h.length;c<l;c++){let u=h[c];s(t.shapes,u)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(s(t.materials,this.material[h]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];n.animations.push(s(t.animations,h))}}if(e){let o=a(t.geometries),h=a(t.materials),c=a(t.textures),l=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),c.length>0&&(i.textures=c),l.length>0&&(i.images=l),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=n,i;function a(o){let h=[];for(let c in o){let l=o[c];delete l.metadata,h.push(l)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Te.DEFAULT_UP=new w(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oi=new w,sn=new w,ph=new w,rn=new w,gs=new w,bs=new w,Tu=new w,mh=new w,gh=new w,bh=new w,na=!1,qn=class r{constructor(t=new w,e=new w,i=new w){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Oi.subVectors(t,e),n.cross(Oi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Oi.subVectors(n,e),sn.subVectors(i,e),ph.subVectors(t,e);let a=Oi.dot(Oi),o=Oi.dot(sn),h=Oi.dot(ph),c=sn.dot(sn),l=sn.dot(ph),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*h-o*l)*f,m=(a*l-o*h)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(t,e,i,n,s,a,o,h){return na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),na=!0),this.getInterpolation(t,e,i,n,s,a,o,h)}static getInterpolation(t,e,i,n,s,a,o,h){return this.getBarycoord(t,e,i,n,rn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,rn.x),h.addScaledVector(a,rn.y),h.addScaledVector(o,rn.z),h)}static isFrontFacing(t,e,i,n){return Oi.subVectors(i,e),sn.subVectors(t,e),Oi.cross(sn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Oi.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return na===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),na=!0),r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;gs.subVectors(n,i),bs.subVectors(s,i),mh.subVectors(t,i);let h=gs.dot(mh),c=bs.dot(mh);if(h<=0&&c<=0)return e.copy(i);gh.subVectors(t,n);let l=gs.dot(gh),u=bs.dot(gh);if(l>=0&&u<=l)return e.copy(n);let f=h*u-l*c;if(f<=0&&h>=0&&l<=0)return a=h/(h-l),e.copy(i).addScaledVector(gs,a);bh.subVectors(t,s);let d=gs.dot(bh),m=bs.dot(bh);if(m>=0&&d<=m)return e.copy(s);let v=d*c-h*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(bs,o);let g=l*m-d*u;if(g<=0&&u-l>=0&&d-m>=0)return Tu.subVectors(s,n),o=(u-l)/(u-l+(d-m)),e.copy(n).addScaledVector(Tu,o);let p=1/(g+v+f);return a=v*p,o=f*p,e.copy(i).addScaledVector(gs,a).addScaledVector(bs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},sa={h:0,s:0,l:0};function vh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ce.workingColorSpace){if(t=Pc(t,1),e=Oe(e,0,1),i=Oe(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=vh(a,s,t+1/3),this.g=vh(a,s,t),this.b=vh(a,s,t-1/3)}return ce.toWorkingColorSpace(this,n),this}setStyle(t,e=fe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){let i=Od[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}copyLinearToSRGB(t){return this.r=ah(t.r),this.g=ah(t.g),this.b=ah(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return ce.fromWorkingColorSpace(ei.copy(this),t),Math.round(Oe(ei.r*255,0,255))*65536+Math.round(Oe(ei.g*255,0,255))*256+Math.round(Oe(ei.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(ei.copy(this),e);let i=ei.r,n=ei.g,s=ei.b,a=Math.max(i,n,s),o=Math.min(i,n,s),h,c,l=(o+a)/2;if(o===a)h=0,c=0;else{let u=a-o;switch(c=l<=.5?u/(a+o):u/(2-a-o),a){case i:h=(n-s)/u+(n<s?6:0);break;case n:h=(s-i)/u+2;break;case s:h=(i-n)/u+4;break}h/=6}return t.h=h,t.s=c,t.l=l,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(ei.copy(this),e),t.r=ei.r,t.g=ei.g,t.b=ei.b,t}getStyle(t=fe){ce.fromWorkingColorSpace(ei.copy(this),t);let e=ei.r,i=ei.g,n=ei.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(sa);let i=br(wn.h,sa.h,e),n=br(wn.s,sa.s,e),s=br(wn.l,sa.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ei=new kt;kt.NAMES=Od;var $p=0,di=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=An,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wr,this.blendDst=zh,this.blendEquation=hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==An&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wr&&(i.blendSrc=this.blendSrc),this.blendDst!==zh&&(i.blendDst=this.blendDst),this.blendEquation!==hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let h=s[o];delete h.metadata,a.push(h)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ne=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ue=new w,ra=new ct,Nt=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oh&&(t.usage=this.usage),t}};var Hs=class extends Nt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ba=class extends Nt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var se=class extends Nt{constructor(t,e,i){super(new Float32Array(t),e,i)}};var t0=0,Ri=new Lt,xh=new Te,vs=new w,yi=new Pi,hr=new Pi,Xe=new w,oe=class r extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nd(t)?Ba:Hs)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new te().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,e,i){return Ri.makeTranslation(t,e,i),this.applyMatrix4(Ri),this}scale(t,e,i){return Ri.makeScale(t,e,i),this.applyMatrix4(Ri),this}lookAt(t){return xh.lookAt(t),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];yi.setFromBufferAttribute(s),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){let i=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(yi.min,hr.min),yi.expandByPoint(Xe),Xe.addVectors(yi.max,hr.max),yi.expandByPoint(Xe)):(yi.expandByPoint(hr.min),yi.expandByPoint(hr.max))}yi.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Xe.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Xe));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],h=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Xe.fromBufferAttribute(o,c),h&&(vs.fromBufferAttribute(t,c),Xe.add(vs)),n=Math.max(n,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*o),4));let h=this.getAttribute("tangent").array,c=[],l=[];for(let S=0;S<o;S++)c[S]=new w,l[S]=new w;let u=new w,f=new w,d=new w,m=new ct,v=new ct,g=new ct,p=new w,y=new w;function b(S,D,G){u.fromArray(n,S*3),f.fromArray(n,D*3),d.fromArray(n,G*3),m.fromArray(a,S*2),v.fromArray(a,D*2),g.fromArray(a,G*2),f.sub(u),d.sub(u),v.sub(m),g.sub(m);let K=1/(v.x*g.y-g.x*v.y);isFinite(K)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(d,-v.y).multiplyScalar(K),y.copy(d).multiplyScalar(v.x).addScaledVector(f,-g.x).multiplyScalar(K),c[S].add(p),c[D].add(p),c[G].add(p),l[S].add(y),l[D].add(y),l[G].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let S=0,D=_.length;S<D;++S){let G=_[S],K=G.start,O=G.count;for(let P=K,F=K+O;P<F;P+=3)b(i[P+0],i[P+1],i[P+2])}let A=new w,x=new w,E=new w,T=new w;function M(S){E.fromArray(s,S*3),T.copy(E);let D=c[S];A.copy(D),A.sub(E.multiplyScalar(E.dot(D))).normalize(),x.crossVectors(T,D);let K=x.dot(l[S])<0?-1:1;h[S*4]=A.x,h[S*4+1]=A.y,h[S*4+2]=A.z,h[S*4+3]=K}for(let S=0,D=_.length;S<D;++S){let G=_[S],K=G.start,O=G.count;for(let P=K,F=K+O;P<F;P+=3)M(i[P+0]),M(i[P+1]),M(i[P+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new w,s=new w,a=new w,o=new w,h=new w,c=new w,l=new w,u=new w;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);n.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),l.subVectors(a,s),u.subVectors(n,s),l.cross(u),o.fromBufferAttribute(i,m),h.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(l),h.add(l),c.add(l),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,h.x,h.y,h.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),l.subVectors(a,s),u.subVectors(n,s),l.cross(u),i.setXYZ(f+0,l.x,l.y,l.z),i.setXYZ(f+1,l.x,l.y,l.z),i.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,h){let c=o.array,l=o.itemSize,u=o.normalized,f=new c.constructor(h.length*l),d=0,m=0;for(let v=0,g=h.length;v<g;v++){o.isInterleavedBufferAttribute?d=h[v]*o.data.stride+o.offset:d=h[v]*l;for(let p=0;p<l;p++)f[m++]=c[d++]}return new Nt(f,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let h=n[o],c=t(h,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let h=[],c=s[o];for(let l=0,u=c.length;l<u;l++){let f=c[l],d=t(f,i);h.push(d)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,h=a.length;o<h;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let h in i){let c=i[h];t.data.attributes[h]=c.toJSON(t.data)}let n={},s=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],l=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];l.push(d.toJSON(t.data))}l.length>0&&(n[h]=l,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let l=n[c];this.setAttribute(c,l.clone(e))}let s=t.morphAttributes;for(let c in s){let l=[],u=s[c];for(let f=0,d=u.length;f<d;f++)l.push(u[f].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,l=a.length;c<l;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Au=new Lt,Hn=new Bs,aa=new Mi,Ru=new w,xs=new w,ys=new w,_s=new w,yh=new w,oa=new w,ha=new ct,ca=new ct,la=new ct,Cu=new w,Pu=new w,Lu=new w,ua=new w,da=new w,gt=class extends Te{constructor(t=new oe,e=new Ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){oa.set(0,0,0);for(let h=0,c=s.length;h<c;h++){let l=o[h],u=s[h];l!==0&&(yh.fromBufferAttribute(u,t),a?oa.addScaledVector(yh,l):oa.addScaledVector(yh.sub(e),l))}e.add(oa)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),Hn.copy(t.ray).recast(t.near),!(aa.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(aa,Ru)===null||Hn.origin.distanceToSquared(Ru)>(t.far-t.near)**2))&&(Au.copy(s).invert(),Hn.copy(t.ray).applyMatrix4(Au),!(i.boundingBox!==null&&Hn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,h=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,A=b;_<A;_+=3){let x=o.getX(_),E=o.getX(_+1),T=o.getX(_+2);n=fa(this,p,t,i,c,l,u,x,E,T),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let y=o.getX(g),b=o.getX(g+1),_=o.getX(g+2);n=fa(this,a,t,i,c,l,u,y,b,_),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(h!==void 0)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),b=Math.min(h.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,A=b;_<A;_+=3){let x=_,E=_+1,T=_+2;n=fa(this,p,t,i,c,l,u,x,E,T),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let m=Math.max(0,d.start),v=Math.min(h.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let y=g,b=g+1,_=g+2;n=fa(this,a,t,i,c,l,u,y,b,_),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function e0(r,t,e,i,n,s,a,o){let h;if(t.side===je?h=i.intersectTriangle(a,s,n,!0,o):h=i.intersectTriangle(n,s,a,t.side===_i,o),h===null)return null;da.copy(o),da.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(da);return c<e.near||c>e.far?null:{distance:c,point:da.clone(),object:r}}function fa(r,t,e,i,n,s,a,o,h,c){r.getVertexPosition(o,xs),r.getVertexPosition(h,ys),r.getVertexPosition(c,_s);let l=e0(r,t,e,i,xs,ys,_s,ua);if(l){n&&(ha.fromBufferAttribute(n,o),ca.fromBufferAttribute(n,h),la.fromBufferAttribute(n,c),l.uv=qn.getInterpolation(ua,xs,ys,_s,ha,ca,la,new ct)),s&&(ha.fromBufferAttribute(s,o),ca.fromBufferAttribute(s,h),la.fromBufferAttribute(s,c),l.uv1=qn.getInterpolation(ua,xs,ys,_s,ha,ca,la,new ct),l.uv2=l.uv1),a&&(Cu.fromBufferAttribute(a,o),Pu.fromBufferAttribute(a,h),Lu.fromBufferAttribute(a,c),l.normal=qn.getInterpolation(ua,xs,ys,_s,Cu,Pu,Lu,new w),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));let u={a:o,b:h,c,normal:new w,materialIndex:0};qn.getNormal(xs,ys,_s,u.normal),l.face=u}return l}var Me=class r extends oe{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let h=[],c=[],l=[],u=[],f=0,d=0;m("z","y","x",-1,-1,i,e,t,a,s,0),m("z","y","x",1,-1,i,e,-t,a,s,1),m("x","z","y",1,1,t,i,e,n,a,2),m("x","z","y",1,-1,t,i,-e,n,a,3),m("x","y","z",1,-1,t,e,i,n,s,4),m("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(h),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(u,2));function m(v,g,p,y,b,_,A,x,E,T,M){let S=_/E,D=A/T,G=_/2,K=A/2,O=x/2,P=E+1,F=T+1,z=0,U=0,N=new w;for(let k=0;k<F;k++){let W=k*D-K;for(let j=0;j<P;j++){let V=j*S-G;N[v]=V*y,N[g]=W*b,N[p]=O,c.push(N.x,N.y,N.z),N[v]=0,N[g]=0,N[p]=x>0?1:-1,l.push(N.x,N.y,N.z),u.push(j/E),u.push(1-k/T),z+=1}}for(let k=0;k<T;k++)for(let W=0;W<E;W++){let j=f+W+P*k,V=f+W+P*(k+1),B=f+(W+1)+P*(k+1),X=f+(W+1)+P*k;h.push(j,V,X),h.push(V,B,X),U+=6}o.addGroup(d,U,M),d+=U,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vs(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ci(r){let t={};for(let e=0;e<r.length;e++){let i=Vs(r[e]);for(let n in i)t[n]=i[n]}return t}function i0(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Bd(r){return r.getRenderTarget()===null?r.outputColorSpace:ce.workingColorSpace}var n0={clone:Vs,merge:ci},s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ne=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=i0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ha=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Be=class extends Ha{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/h,e-=a.offsetY*i/c,n*=a.width/h,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ms=-90,ws=1,Wh=class extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Be(Ms,ws,t,e);n.layers=this.layers,this.add(n);let s=new Be(Ms,ws,t,e);s.layers=this.layers,this.add(s);let a=new Be(Ms,ws,t,e);a.layers=this.layers,this.add(a);let o=new Be(Ms,ws,t,e);o.layers=this.layers,this.add(o);let h=new Be(Ms,ws,t,e);h.layers=this.layers,this.add(h);let c=new Be(Ms,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,h]=e;for(let c of e)this.remove(c);if(t===ln)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Da)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,h,c,l]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,h),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,l),t.setRenderTarget(u,f,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Va=class extends Qe{constructor(t,e,i,n,s,a,o,h,c,l){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,i,n,s,a,o,h,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qh=class extends _e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(vr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Yn?fe:He),this.texture=new Va(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Me(5,5,5),s=new ne({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:Tn});s.uniforms.tEquirect.value=e;let a=new gt(n,s),o=e.minFilter;return e.minFilter===Ke&&(e.minFilter=ee),new Wh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},_h=new w,a0=new w,o0=new te,Bi=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=_h.subVectors(i,e).cross(a0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(_h),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||o0.getNormalMatrix(t),n=this.coplanarPoint(_h).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vn=new Mi,pa=new w,Tr=class{constructor(t=new Bi,e=new Bi,i=new Bi,n=new Bi,s=new Bi,a=new Bi){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ln){let i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],h=n[3],c=n[4],l=n[5],u=n[6],f=n[7],d=n[8],m=n[9],v=n[10],g=n[11],p=n[12],y=n[13],b=n[14],_=n[15];if(i[0].setComponents(h-s,f-c,g-d,_-p).normalize(),i[1].setComponents(h+s,f+c,g+d,_+p).normalize(),i[2].setComponents(h+a,f+l,g+m,_+y).normalize(),i[3].setComponents(h-a,f-l,g-m,_-y).normalize(),i[4].setComponents(h-o,f-u,g-v,_-b).normalize(),e===ln)i[5].setComponents(h+o,f+u,g+v,_+b).normalize();else if(e===Da)i[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(pa.x=n.normal.x>0?t.max.x:t.min.x,pa.y=n.normal.y>0?t.max.y:t.min.y,pa.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Hd(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function h0(r,t){let e=t.isWebGL2,i=new WeakMap;function n(c,l){let u=c.array,f=c.usage,d=u.byteLength,m=r.createBuffer();r.bindBuffer(l,m),r.bufferData(l,u,f),c.onUploadCallback();let v;if(u instanceof Float32Array)v=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=r.SHORT;else if(u instanceof Uint32Array)v=r.UNSIGNED_INT;else if(u instanceof Int32Array)v=r.INT;else if(u instanceof Int8Array)v=r.BYTE;else if(u instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,l,u){let f=l.array,d=l._updateRange,m=l.updateRanges;if(r.bindBuffer(u,c),d.count===-1&&m.length===0&&r.bufferSubData(u,0,f),m.length!==0){for(let v=0,g=m.length;v<g;v++){let p=m[v];e?r.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):r.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}l.clearUpdateRanges()}d.count!==-1&&(e?r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),l.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let l=i.get(c);l&&(r.deleteBuffer(l.buffer),i.delete(c))}function h(c,l){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,n(c,l));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,l),u.version=c.version}}return{get:a,remove:o,update:h}}var wi=class r extends oe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),h=Math.floor(n),c=o+1,l=h+1,u=t/o,f=e/h,d=[],m=[],v=[],g=[];for(let p=0;p<l;p++){let y=p*f-a;for(let b=0;b<c;b++){let _=b*u-s;m.push(_,-y,0),v.push(0,0,1),g.push(b/o),g.push(1-p/h)}}for(let p=0;p<h;p++)for(let y=0;y<o;y++){let b=y+c*p,_=y+c*(p+1),A=y+1+c*(p+1),x=y+1+c*p;d.push(b,_,x),d.push(_,A,x)}this.setIndex(d),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
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
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,p0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
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
#endif`,g0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
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
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M0=`#ifdef USE_IRIDESCENCE
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
#endif`,w0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,F0=`#define PI 3.141592653589793
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
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D0=`vec3 transformedNormal = objectNormal;
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
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",B0=`
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
}`,H0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q0=`#ifdef USE_GRADIENTMAP
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
}`,Z0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,em=`uniform bool receiveShadow;
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
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
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
#endif`,hm=`struct PhysicalMaterial {
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
}`,cm=`
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xm=`#if defined( USE_POINTS_UV )
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
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
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
#endif`,Em=`#ifdef USE_MORPHTARGETS
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
#endif`,Sm=`#ifdef USE_MORPHTARGETS
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
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lm=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jm=`float getShadowMask() {
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
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Km=`#ifdef USE_SKINNING
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
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ig=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
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
}`,mg=`#if DEPTH_PACKING == 3200
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
}`,gg=`#define DISTANCE
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
}`,bg=`#define DISTANCE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
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
}`,_g=`uniform vec3 diffuse;
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
}`,Mg=`#include <common>
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
}`,wg=`uniform vec3 diffuse;
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
}`,Eg=`#define LAMBERT
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
}`,Sg=`#define LAMBERT
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define MATCAP
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
}`,Rg=`#define NORMAL
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
}`,Cg=`#define NORMAL
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
}`,Pg=`#define PHONG
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
}`,Lg=`#define PHONG
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
}`,Fg=`#define STANDARD
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
}`,Ig=`#define STANDARD
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
}`,Dg=`#define TOON
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
}`,kg=`#define TOON
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
}`,zg=`uniform float size;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Og=`uniform vec3 color;
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
}`,Bg=`uniform float rotation;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:c0,alphahash_pars_fragment:l0,alphamap_fragment:u0,alphamap_pars_fragment:d0,alphatest_fragment:f0,alphatest_pars_fragment:p0,aomap_fragment:m0,aomap_pars_fragment:g0,batching_pars_vertex:b0,batching_vertex:v0,begin_vertex:x0,beginnormal_vertex:y0,bsdfs:_0,iridescence_fragment:M0,bumpmap_pars_fragment:w0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:S0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:A0,color_fragment:R0,color_pars_fragment:C0,color_pars_vertex:P0,color_vertex:L0,common:F0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:D0,displacementmap_pars_vertex:k0,displacementmap_vertex:z0,emissivemap_fragment:U0,emissivemap_pars_fragment:N0,colorspace_fragment:O0,colorspace_pars_fragment:B0,envmap_fragment:H0,envmap_common_pars_fragment:V0,envmap_pars_fragment:G0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:im,envmap_vertex:q0,fog_vertex:X0,fog_pars_vertex:j0,fog_fragment:Y0,fog_pars_fragment:K0,gradientmap_pars_fragment:Q0,lightmap_fragment:Z0,lightmap_pars_fragment:J0,lights_lambert_fragment:$0,lights_lambert_pars_fragment:tm,lights_pars_begin:em,lights_toon_fragment:nm,lights_toon_pars_fragment:sm,lights_phong_fragment:rm,lights_phong_pars_fragment:am,lights_physical_fragment:om,lights_physical_pars_fragment:hm,lights_fragment_begin:cm,lights_fragment_maps:lm,lights_fragment_end:um,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:bm,map_particle_fragment:vm,map_particle_pars_fragment:xm,metalnessmap_fragment:ym,metalnessmap_pars_fragment:_m,morphcolor_vertex:Mm,morphnormal_vertex:wm,morphtarget_pars_vertex:Em,morphtarget_vertex:Sm,normal_fragment_begin:Tm,normal_fragment_maps:Am,normal_pars_fragment:Rm,normal_pars_vertex:Cm,normal_vertex:Pm,normalmap_pars_fragment:Lm,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:km,opaque_fragment:zm,packing:Um,premultiplied_alpha_fragment:Nm,project_vertex:Om,dithering_fragment:Bm,dithering_pars_fragment:Hm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:qm,shadowmap_vertex:Xm,shadowmask_pars_fragment:jm,skinbase_vertex:Ym,skinning_pars_vertex:Km,skinning_vertex:Qm,skinnormal_vertex:Zm,specularmap_fragment:Jm,specularmap_pars_fragment:$m,tonemapping_fragment:tg,tonemapping_pars_fragment:eg,transmission_fragment:ig,transmission_pars_fragment:ng,uv_pars_fragment:sg,uv_pars_vertex:rg,uv_vertex:ag,worldpos_vertex:og,background_vert:hg,background_frag:cg,backgroundCube_vert:lg,backgroundCube_frag:ug,cube_vert:dg,cube_frag:fg,depth_vert:pg,depth_frag:mg,distanceRGBA_vert:gg,distanceRGBA_frag:bg,equirect_vert:vg,equirect_frag:xg,linedashed_vert:yg,linedashed_frag:_g,meshbasic_vert:Mg,meshbasic_frag:wg,meshlambert_vert:Eg,meshlambert_frag:Sg,meshmatcap_vert:Tg,meshmatcap_frag:Ag,meshnormal_vert:Rg,meshnormal_frag:Cg,meshphong_vert:Pg,meshphong_frag:Lg,meshphysical_vert:Fg,meshphysical_frag:Ig,meshtoon_vert:Dg,meshtoon_frag:kg,points_vert:zg,points_frag:Ug,shadow_vert:Ng,shadow_frag:Og,sprite_vert:Bg,sprite_frag:Hg},St={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},qi={basic:{uniforms:ci([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:ci([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new kt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:ci([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:ci([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:ci([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new kt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:ci([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:ci([St.points,St.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:ci([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:ci([St.common,St.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:ci([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:ci([St.sprite,St.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:ci([St.common,St.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:ci([St.lights,St.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};qi.physical={uniforms:ci([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var ma={r:0,b:0,g:0};function Vg(r,t,e,i,n,s,a){let o=new kt(0),h=s===!0?0:1,c,l,u=null,f=0,d=null;function m(g,p){let y=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=(p.backgroundBlurriness>0?e:t).get(b)),b===null?v(o,h):b&&b.isColor&&(v(b,1),y=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===ro)?(l===void 0&&(l=new gt(new Me(1,1,1),new ne({name:"BackgroundCubeMaterial",uniforms:Vs(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,x,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ce.getTransfer(b.colorSpace)!==xe,(u!==b||f!==b.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new gt(new wi(2,2),new ne({name:"BackgroundMaterial",uniforms:Vs(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ce.getTransfer(b.colorSpace)!==xe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,p){g.getRGB(ma,Bd(r)),i.buffers.color.setClear(ma.r,ma.g,ma.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),h=p,v(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,v(o,h)},render:m}}function Gg(r,t,e,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},h=g(null),c=h,l=!1;function u(O,P,F,z,U){let N=!1;if(a){let k=v(z,F,P);c!==k&&(c=k,d(c.object)),N=p(O,z,F,U),N&&y(O,z,F,U)}else{let k=P.wireframe===!0;(c.geometry!==z.id||c.program!==F.id||c.wireframe!==k)&&(c.geometry=z.id,c.program=F.id,c.wireframe=k,N=!0)}U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(N||l)&&(l=!1,T(O,P,F,z),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function f(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(O){return i.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function m(O){return i.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function v(O,P,F){let z=F.wireframe===!0,U=o[O.id];U===void 0&&(U={},o[O.id]=U);let N=U[P.id];N===void 0&&(N={},U[P.id]=N);let k=N[z];return k===void 0&&(k=g(f()),N[z]=k),k}function g(O){let P=[],F=[],z=[];for(let U=0;U<n;U++)P[U]=0,F[U]=0,z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:z,object:O,attributes:{},index:null}}function p(O,P,F,z){let U=c.attributes,N=P.attributes,k=0,W=F.getAttributes();for(let j in W)if(W[j].location>=0){let B=U[j],X=N[j];if(X===void 0&&(j==="instanceMatrix"&&O.instanceMatrix&&(X=O.instanceMatrix),j==="instanceColor"&&O.instanceColor&&(X=O.instanceColor)),B===void 0||B.attribute!==X||X&&B.data!==X.data)return!0;k++}return c.attributesNum!==k||c.index!==z}function y(O,P,F,z){let U={},N=P.attributes,k=0,W=F.getAttributes();for(let j in W)if(W[j].location>=0){let B=N[j];B===void 0&&(j==="instanceMatrix"&&O.instanceMatrix&&(B=O.instanceMatrix),j==="instanceColor"&&O.instanceColor&&(B=O.instanceColor));let X={};X.attribute=B,B&&B.data&&(X.data=B.data),U[j]=X,k++}c.attributes=U,c.attributesNum=k,c.index=z}function b(){let O=c.newAttributes;for(let P=0,F=O.length;P<F;P++)O[P]=0}function _(O){A(O,0)}function A(O,P){let F=c.newAttributes,z=c.enabledAttributes,U=c.attributeDivisors;F[O]=1,z[O]===0&&(r.enableVertexAttribArray(O),z[O]=1),U[O]!==P&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,P),U[O]=P)}function x(){let O=c.newAttributes,P=c.enabledAttributes;for(let F=0,z=P.length;F<z;F++)P[F]!==O[F]&&(r.disableVertexAttribArray(F),P[F]=0)}function E(O,P,F,z,U,N,k){k===!0?r.vertexAttribIPointer(O,P,F,U,N):r.vertexAttribPointer(O,P,F,z,U,N)}function T(O,P,F,z){if(i.isWebGL2===!1&&(O.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();let U=z.attributes,N=F.getAttributes(),k=P.defaultAttributeValues;for(let W in N){let j=N[W];if(j.location>=0){let V=U[W];if(V===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(V=O.instanceColor)),V!==void 0){let B=V.normalized,X=V.itemSize,$=e.get(V);if($===void 0)continue;let Z=$.buffer,it=$.type,pt=$.bytesPerElement,rt=i.isWebGL2===!0&&(it===r.INT||it===r.UNSIGNED_INT||V.gpuType===Ad);if(V.isInterleavedBufferAttribute){let Tt=V.data,H=Tt.stride,dt=V.offset;if(Tt.isInstancedInterleavedBuffer){for(let at=0;at<j.locationSize;at++)A(j.location+at,Tt.meshPerAttribute);O.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let at=0;at<j.locationSize;at++)_(j.location+at);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let at=0;at<j.locationSize;at++)E(j.location+at,X/j.locationSize,it,B,H*pt,(dt+X/j.locationSize*at)*pt,rt)}else{if(V.isInstancedBufferAttribute){for(let Tt=0;Tt<j.locationSize;Tt++)A(j.location+Tt,V.meshPerAttribute);O.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Tt=0;Tt<j.locationSize;Tt++)_(j.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let Tt=0;Tt<j.locationSize;Tt++)E(j.location+Tt,X/j.locationSize,it,B,X*pt,X/j.locationSize*Tt*pt,rt)}}else if(k!==void 0){let B=k[W];if(B!==void 0)switch(B.length){case 2:r.vertexAttrib2fv(j.location,B);break;case 3:r.vertexAttrib3fv(j.location,B);break;case 4:r.vertexAttrib4fv(j.location,B);break;default:r.vertexAttrib1fv(j.location,B)}}}}x()}function M(){G();for(let O in o){let P=o[O];for(let F in P){let z=P[F];for(let U in z)m(z[U].object),delete z[U];delete P[F]}delete o[O]}}function S(O){if(o[O.id]===void 0)return;let P=o[O.id];for(let F in P){let z=P[F];for(let U in z)m(z[U].object),delete z[U];delete P[F]}delete o[O.id]}function D(O){for(let P in o){let F=o[P];if(F[O.id]===void 0)continue;let z=F[O.id];for(let U in z)m(z[U].object),delete z[U];delete F[O.id]}}function G(){K(),l=!0,c!==h&&(c=h,d(c.object))}function K(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:u,reset:G,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:D,initAttributes:b,enableAttribute:_,disableUnusedAttributes:x}}function Wg(r,t,e,i){let n=i.isWebGL2,s;function a(l){s=l}function o(l,u){r.drawArrays(s,l,u),e.update(u,s,1)}function h(l,u,f){if(f===0)return;let d,m;if(n)d=r,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,u,f),e.update(u,s,f)}function c(l,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f;m++)this.render(l[m],u[m]);else{d.multiDrawArraysWEBGL(s,l,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];e.update(m,s,1)}}this.setMode=a,this.render=o,this.renderInstances=h,this.renderMultiDraw=c}function qg(r,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",h=s(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);let c=a||t.has("WEBGL_draw_buffers"),l=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,_=a||t.has("OES_texture_float"),A=b&&_,x=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:b,floatFragmentTextures:_,floatVertexTextures:A,maxSamples:x}}function Xg(r){let t=this,e=null,i=0,n=!1,s=!1,a=new Bi,o=new te,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=l(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!n||m===null||m.length===0||s&&!g)s?l(null):c();else{let y=s?0:i,b=y*4,_=p.clippingState||null;h.value=_,_=l(m,f,b,d);for(let A=0;A!==b;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function l(u,f,d,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=h.value,m!==!0||g===null){let p=d+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,_=d;b!==v;++b,_+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}h.value=g,h.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function jg(r){let t=new WeakMap;function e(a,o){return o===Uh?a.mapping=ks:o===Nh&&(a.mapping=zs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Uh||o===Nh)if(t.has(a)){let h=t.get(a).texture;return e(h,a.mapping)}else{let h=a.image;if(h&&h.height>0){let c=new qh(h.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var fi=class extends Ha{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,h=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=l*this.view.offsetY,h=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ps=4,Fu=[.125,.215,.35,.446,.526,.582],Wn=20,Mh=new fi,Iu=new kt,wh=null,Eh=0,Sh=0,Gn=(1+Math.sqrt(5))/2,Es=1/Gn,Du=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Gn,Es),new w(0,Gn,-Es),new w(Es,0,Gn),new w(-Es,0,Gn),new w(Gn,Es,0),new w(-Gn,Es,0)],Gs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){wh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wh,Eh,Sh),t.scissorTest=!1,ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ee,minFilter:ee,generateMipmaps:!1,type:dn,format:de,colorSpace:ze,depthBuffer:!1},n=ku(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yg(s)),this._blurMaterial=Kg(s,t,e)}return n}_compileMaterial(t){let e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,Mh)}_sceneToCubeUV(t,e,i,n){let o=new Be(90,1,e,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,f=l.toneMapping;l.getClearColor(Iu),l.toneMapping=ji,l.autoClear=!1;let d=new Ne({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),m=new gt(new Me,d),v=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,v=!0):(d.color.copy(Iu),v=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,h[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,h[p]),o.lookAt(0,c[p],0)):(o.up.set(0,h[p],0),o.lookAt(0,0,c[p]));let b=this._cubeSize;ga(n,y*b,p>2?b:0,b,b),l.setRenderTarget(n),v&&l.render(m,o),l.render(t,o)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=f,l.autoClear=u,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===ks||t.mapping===zs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let h=this._cubeSize;ga(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(a,Mh)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Du[(n-1)%Du.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let h=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new gt(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Wn-1),v=s/m,g=isFinite(s)?1+Math.floor(l*v):Wn;g>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wn}`);let p=[],y=0;for(let E=0;E<Wn;++E){let T=E/v,M=Math.exp(-T*T/2);p.push(M),E===0?y+=M:E<g&&(y+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=m,f.mipInt.value=b-i;let _=this._sizeLods[n],A=3*_*(n>b-Ps?n-b+Ps:0),x=4*(this._cubeSize-_);ga(e,A,x,3*_,2*_),h.setRenderTarget(e),h.render(u,Mh)}};function Yg(r){let t=[],e=[],i=[],n=r,s=r-Ps+1+Fu.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let h=1/o;a>r-Ps?h=Fu[a-r+Ps-1]:a===0&&(h=0),i.push(h);let c=1/(o-2),l=-c,u=1+c,f=[l,l,u,l,u,u,l,l,u,u,l,u],d=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*d),b=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let x=0;x<d;x++){let E=x%3*2/3-1,T=x>2?0:-1,M=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];y.set(M,v*m*x),b.set(f,g*m*x);let S=[x,x,x,x,x,x];_.set(S,p*m*x)}let A=new oe;A.setAttribute("position",new Nt(y,v)),A.setAttribute("uv",new Nt(b,g)),A.setAttribute("faceIndex",new Nt(_,p)),t.push(A),n>Ps&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ku(r,t,e){let i=new _e(r,t,e);return i.texture.mapping=ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Kg(r,t,e){let i=new Float32Array(Wn),n=new w(0,1,0);return new ne({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function zu(){return new ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Uu(){return new ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Lc(){return`

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
	`}function Qg(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let h=o.mapping,c=h===Uh||h===Nh,l=h===ks||h===zs;if(c||l)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Gs(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||l&&u&&n(u)){e===null&&(e=new Gs(r));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function n(o){let h=0,c=6;for(let l=0;l<c;l++)o[l]!==void 0&&h++;return h===c}function s(o){let h=o.target;h.removeEventListener("dispose",s);let c=t.get(h);c!==void 0&&(t.delete(h),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Zg(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Jg(r,t,e,i){let n={},s=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let v=f.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}f.removeEventListener("dispose",a),delete n[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,e.memory.geometries++),f}function h(u){let f=u.attributes;for(let m in f)t.update(f[m],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let v=d[m];for(let g=0,p=v.length;g<p;g++)t.update(v[g],r.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,v=0;if(d!==null){let y=d.array;v=d.version;for(let b=0,_=y.length;b<_;b+=3){let A=y[b+0],x=y[b+1],E=y[b+2];f.push(A,x,x,E,E,A)}}else if(m!==void 0){let y=m.array;v=m.version;for(let b=0,_=y.length/3-1;b<_;b+=3){let A=b+0,x=b+1,E=b+2;f.push(A,x,x,E,E,A)}}else return;let g=new(Nd(f)?Ba:Hs)(f,1);g.version=v;let p=s.get(u);p&&t.remove(p),s.set(u,g)}function l(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:h,getWireframeAttribute:l}}function $g(r,t,e,i){let n=i.isWebGL2,s;function a(d){s=d}let o,h;function c(d){o=d.type,h=d.bytesPerElement}function l(d,m){r.drawElements(s,m,o,d*h),e.update(m,s,1)}function u(d,m,v){if(v===0)return;let g,p;if(n)g=r,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,m,o,d*h,v),e.update(m,s,v)}function f(d,m,v){if(v===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<v;p++)this.render(d[p]/h,m[p]);else{g.multiDrawElementsWEBGL(s,m,0,o,d,0,v);let p=0;for(let y=0;y<v;y++)p+=m[y];e.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function tb(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function eb(r,t){return r[0]-t[0]}function ib(r,t){return Math.abs(t[1])-Math.abs(r[1])}function nb(r,t,e){let i={},n=new Float32Array(8),s=new WeakMap,a=new qt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function h(c,l,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=d!==void 0?d.length:0,v=s.get(l);if(v===void 0||v.count!==m){let O=function(){G.dispose(),s.delete(l),l.removeEventListener("dispose",O)};v!==void 0&&v.texture.dispose();let y=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,A=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],E=l.morphAttributes.color||[],T=0;y===!0&&(T=1),b===!0&&(T=2),_===!0&&(T=3);let M=l.attributes.position.count*T,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let D=new Float32Array(M*S*4*m),G=new Na(D,M,S,m);G.type=cn,G.needsUpdate=!0;let K=T*4;for(let P=0;P<m;P++){let F=A[P],z=x[P],U=E[P],N=M*S*4*P;for(let k=0;k<F.count;k++){let W=k*K;y===!0&&(a.fromBufferAttribute(F,k),D[N+W+0]=a.x,D[N+W+1]=a.y,D[N+W+2]=a.z,D[N+W+3]=0),b===!0&&(a.fromBufferAttribute(z,k),D[N+W+4]=a.x,D[N+W+5]=a.y,D[N+W+6]=a.z,D[N+W+7]=0),_===!0&&(a.fromBufferAttribute(U,k),D[N+W+8]=a.x,D[N+W+9]=a.y,D[N+W+10]=a.z,D[N+W+11]=U.itemSize===4?a.w:1)}}v={count:m,texture:G,size:new ct(M,S)},s.set(l,v),l.addEventListener("dispose",O)}let g=0;for(let y=0;y<f.length;y++)g+=f[y];let p=l.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{let d=f===void 0?0:f.length,m=i[l.id];if(m===void 0||m.length!==d){m=[];for(let b=0;b<d;b++)m[b]=[b,0];i[l.id]=m}for(let b=0;b<d;b++){let _=m[b];_[0]=b,_[1]=f[b]}m.sort(ib);for(let b=0;b<8;b++)b<d&&m[b][1]?(o[b][0]=m[b][0],o[b][1]=m[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(eb);let v=l.morphAttributes.position,g=l.morphAttributes.normal,p=0;for(let b=0;b<8;b++){let _=o[b],A=_[0],x=_[1];A!==Number.MAX_SAFE_INTEGER&&x?(v&&l.getAttribute("morphTarget"+b)!==v[A]&&l.setAttribute("morphTarget"+b,v[A]),g&&l.getAttribute("morphNormal"+b)!==g[A]&&l.setAttribute("morphNormal"+b,g[A]),n[b]=x,p+=x):(v&&l.hasAttribute("morphTarget"+b)===!0&&l.deleteAttribute("morphTarget"+b),g&&l.hasAttribute("morphNormal"+b)===!0&&l.deleteAttribute("morphNormal"+b),n[b]=0)}let y=l.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:h}}function sb(r,t,e,i){let n=new WeakMap;function s(h){let c=i.render.frame,l=h.geometry,u=t.get(h,l);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),n.get(h)!==c&&(e.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,r.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){let f=h.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function a(){n=new WeakMap}function o(h){let c=h.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var Qn=class extends Qe{constructor(t,e,i,n,s,a,o,h,c,l){if(l=l!==void 0?l:jn,l!==jn&&l!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===jn&&(i=En),i===void 0&&l===Us&&(i=Xn),super(null,n,s,a,o,h,l,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Le,this.minFilter=h!==void 0?h:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Vd=new Qe,Gd=new Qn(1,1);Gd.compareFunction=Ud;var Wd=new Na,qd=new Gh,Xd=new Va,Nu=[],Ou=[],Bu=new Float32Array(16),Hu=new Float32Array(9),Vu=new Float32Array(4);function Zs(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Nu[n];if(s===void 0&&(s=new Float32Array(n),Nu[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ve(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Ge(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function ho(r,t){let e=Ou[t];e===void 0&&(e=new Int32Array(t),Ou[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function rb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function ab(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2fv(this.addr,t),Ge(e,t)}}function ob(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;r.uniform3fv(this.addr,t),Ge(e,t)}}function hb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4fv(this.addr,t),Ge(e,t)}}function cb(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,i))return;Vu.set(i),r.uniformMatrix2fv(this.addr,!1,Vu),Ge(e,i)}}function lb(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,i))return;Hu.set(i),r.uniformMatrix3fv(this.addr,!1,Hu),Ge(e,i)}}function ub(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,i))return;Bu.set(i),r.uniformMatrix4fv(this.addr,!1,Bu),Ge(e,i)}}function db(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function fb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2iv(this.addr,t),Ge(e,t)}}function pb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;r.uniform3iv(this.addr,t),Ge(e,t)}}function mb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4iv(this.addr,t),Ge(e,t)}}function gb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function bb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2uiv(this.addr,t),Ge(e,t)}}function vb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;r.uniform3uiv(this.addr,t),Ge(e,t)}}function xb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4uiv(this.addr,t),Ge(e,t)}}function yb(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?Gd:Vd;e.setTexture2D(t||s,n)}function _b(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||qd,n)}function Mb(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Xd,n)}function wb(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Wd,n)}function Eb(r){switch(r){case 5126:return rb;case 35664:return ab;case 35665:return ob;case 35666:return hb;case 35674:return cb;case 35675:return lb;case 35676:return ub;case 5124:case 35670:return db;case 35667:case 35671:return fb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return bb;case 36295:return vb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return wb}}function Sb(r,t){r.uniform1fv(this.addr,t)}function Tb(r,t){let e=Zs(t,this.size,2);r.uniform2fv(this.addr,e)}function Ab(r,t){let e=Zs(t,this.size,3);r.uniform3fv(this.addr,e)}function Rb(r,t){let e=Zs(t,this.size,4);r.uniform4fv(this.addr,e)}function Cb(r,t){let e=Zs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Pb(r,t){let e=Zs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Lb(r,t){let e=Zs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Fb(r,t){r.uniform1iv(this.addr,t)}function Ib(r,t){r.uniform2iv(this.addr,t)}function Db(r,t){r.uniform3iv(this.addr,t)}function kb(r,t){r.uniform4iv(this.addr,t)}function zb(r,t){r.uniform1uiv(this.addr,t)}function Ub(r,t){r.uniform2uiv(this.addr,t)}function Nb(r,t){r.uniform3uiv(this.addr,t)}function Ob(r,t){r.uniform4uiv(this.addr,t)}function Bb(r,t,e){let i=this.cache,n=t.length,s=ho(e,n);Ve(i,s)||(r.uniform1iv(this.addr,s),Ge(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Vd,s[a])}function Hb(r,t,e){let i=this.cache,n=t.length,s=ho(e,n);Ve(i,s)||(r.uniform1iv(this.addr,s),Ge(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||qd,s[a])}function Vb(r,t,e){let i=this.cache,n=t.length,s=ho(e,n);Ve(i,s)||(r.uniform1iv(this.addr,s),Ge(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Xd,s[a])}function Gb(r,t,e){let i=this.cache,n=t.length,s=ho(e,n);Ve(i,s)||(r.uniform1iv(this.addr,s),Ge(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Wd,s[a])}function Wb(r){switch(r){case 5126:return Sb;case 35664:return Tb;case 35665:return Ab;case 35666:return Rb;case 35674:return Cb;case 35675:return Pb;case 35676:return Lb;case 5124:case 35670:return Fb;case 35667:case 35671:return Ib;case 35668:case 35672:return Db;case 35669:case 35673:return kb;case 5125:return zb;case 36294:return Ub;case 36295:return Nb;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return Hb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Gb}}var Xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Eb(e.type)}},jh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wb(e.type)}},Yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},Th=/(\w+)(\])?(\[|\.)?/g;function Gu(r,t){r.seq.push(t),r.map[t.id]=t}function qb(r,t,e){let i=r.name,n=i.length;for(Th.lastIndex=0;;){let s=Th.exec(i),a=Th.lastIndex,o=s[1],h=s[2]==="]",c=s[3];if(h&&(o=o|0),c===void 0||c==="["&&a+2===n){Gu(e,c===void 0?new Xh(o,r,t):new jh(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Yh(o),Gu(e,u)),e=u}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);qb(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],h=i[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Wu(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var Xb=37297,jb=0;function Yb(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Kb(r){let t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(r),i;switch(t===e?i="":t===Ia&&e===Fa?i="LinearDisplayP3ToLinearSRGB":t===Fa&&e===Ia&&(i="LinearSRGBToLinearDisplayP3"),r){case ze:case oo:return[i,"LinearTransferOETF"];case fe:case Cc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function qu(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Yb(r.getShaderSource(t),a)}else return n}function Qb(r,t){let e=Kb(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Zb(r,t){let e;switch(t){case ep:e="Linear";break;case ip:e="Reinhard";break;case np:e="OptimizedCineon";break;case sp:e="ACESFilmic";break;case ap:e="AgX";break;case rp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Jb(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ls).join(`
`)}function $b(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ls).join(`
`)}function tv(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ev(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ls(r){return r!==""}function Xu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ju(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(r){return r.replace(iv,sv)}var nv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sv(r,t){let e=Qt[t];if(e===void 0){let i=nv.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Kh(e)}var rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(r){return r.replace(rv,av)}function av(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ku(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ov(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ed?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ff?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===on&&(t="SHADOWMAP_TYPE_VSM"),t}function hv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ks:case zs:t="ENVMAP_TYPE_CUBE";break;case ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function lv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sd:t="ENVMAP_BLENDING_MULTIPLY";break;case $f:t="ENVMAP_BLENDING_MIX";break;case tp:t="ENVMAP_BLENDING_ADD";break}return t}function uv(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function dv(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,h=ov(e),c=hv(e),l=cv(e),u=lv(e),f=uv(e),d=e.isWebGL2?"":Jb(e),m=$b(e),v=tv(s),g=n.createProgram(),p,y,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ls).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ls).join(`
`),y.length>0&&(y+=`
`)):(p=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),y=[d,Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ji?"#define TONE_MAPPING":"",e.toneMapping!==ji?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ji?Zb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Qb("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),a=Kh(a),a=Xu(a,e),a=ju(a,e),o=Kh(o),o=Xu(o,e),o=ju(o,e),a=Yu(a),o=Yu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let _=b+p+a,A=b+y+o,x=Wu(n,n.VERTEX_SHADER,_),E=Wu(n,n.FRAGMENT_SHADER,A);n.attachShader(g,x),n.attachShader(g,E),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function T(G){if(r.debug.checkShaderErrors){let K=n.getProgramInfoLog(g).trim(),O=n.getShaderInfoLog(x).trim(),P=n.getShaderInfoLog(E).trim(),F=!0,z=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,x,E);else{let U=qu(n,x,"vertex"),N=qu(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+U+`
`+N)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(O===""||P==="")&&(z=!1);z&&(G.diagnostics={runnable:F,programLog:K,vertexShader:{log:O,prefix:p},fragmentShader:{log:P,prefix:y}})}n.deleteShader(x),n.deleteShader(E),M=new Ds(n,g),S=ev(n,g)}let M;this.getUniforms=function(){return M===void 0&&T(this),M};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=n.getProgramParameter(g,Xb)),D},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jb++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=x,this.fragmentShader=E,this}var fv=0,Qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Zh(t),e.set(t,i)),i}},Zh=class{constructor(t){this.id=fv++,this.code=t,this.usedTimes=0}};function pv(r,t,e,i,n,s,a){let o=new Oa,h=new Qh,c=[],l=n.isWebGL2,u=n.logarithmicDepthBuffer,f=n.vertexTextures,d=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function g(M,S,D,G,K){let O=G.fog,P=K.geometry,F=M.isMeshStandardMaterial?G.environment:null,z=(M.isMeshStandardMaterial?e:t).get(M.envMap||F),U=z&&z.mapping===ro?z.image.height:null,N=m[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let k=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,W=k!==void 0?k.length:0,j=0;P.morphAttributes.position!==void 0&&(j=1),P.morphAttributes.normal!==void 0&&(j=2),P.morphAttributes.color!==void 0&&(j=3);let V,B,X,$;if(N){let ai=qi[N];V=ai.vertexShader,B=ai.fragmentShader}else V=M.vertexShader,B=M.fragmentShader,h.update(M),X=h.getVertexShaderID(M),$=h.getFragmentShaderID(M);let Z=r.getRenderTarget(),it=K.isInstancedMesh===!0,pt=K.isBatchedMesh===!0,rt=!!M.map,Tt=!!M.matcap,H=!!z,dt=!!M.aoMap,at=!!M.lightMap,ft=!!M.bumpMap,st=!!M.normalMap,At=!!M.displacementMap,_t=!!M.emissiveMap,L=!!M.metalnessMap,C=!!M.roughnessMap,Q=M.anisotropy>0,lt=M.clearcoat>0,mt=M.iridescence>0,vt=M.sheen>0,It=M.transmission>0,Y=Q&&!!M.anisotropyMap,ut=lt&&!!M.clearcoatMap,Mt=lt&&!!M.clearcoatNormalMap,zt=lt&&!!M.clearcoatRoughnessMap,xt=mt&&!!M.iridescenceMap,he=mt&&!!M.iridescenceThicknessMap,ie=vt&&!!M.sheenColorMap,Wt=vt&&!!M.sheenRoughnessMap,Ut=!!M.specularMap,Ft=!!M.specularColorMap,Kt=!!M.specularIntensityMap,le=It&&!!M.transmissionMap,Ce=It&&!!M.thicknessMap,Jt=!!M.gradientMap,Et=!!M.alphaMap,q=M.alphaTest>0,Rt=!!M.alphaHash,Ct=!!M.extensions,Vt=!!P.attributes.uv1,Ot=!!P.attributes.uv2,me=!!P.attributes.uv3,ge=ji;return M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ge=r.toneMapping),{isWebGL2:l,shaderID:N,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:B,defines:M.defines,customVertexShaderID:X,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:pt,instancing:it,instancingColor:it&&K.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ze,map:rt,matcap:Tt,envMap:H,envMapMode:H&&z.mapping,envMapCubeUVHeight:U,aoMap:dt,lightMap:at,bumpMap:ft,normalMap:st,displacementMap:f&&At,emissiveMap:_t,normalMapObjectSpace:st&&M.normalMapType===xp,normalMapTangentSpace:st&&M.normalMapType===zd,metalnessMap:L,roughnessMap:C,anisotropy:Q,anisotropyMap:Y,clearcoat:lt,clearcoatMap:ut,clearcoatNormalMap:Mt,clearcoatRoughnessMap:zt,iridescence:mt,iridescenceMap:xt,iridescenceThicknessMap:he,sheen:vt,sheenColorMap:ie,sheenRoughnessMap:Wt,specularMap:Ut,specularColorMap:Ft,specularIntensityMap:Kt,transmission:It,transmissionMap:le,thicknessMap:Ce,gradientMap:Jt,opaque:M.transparent===!1&&M.blending===An,alphaMap:Et,alphaTest:q,alphaHash:Rt,combine:M.combine,mapUv:rt&&v(M.map.channel),aoMapUv:dt&&v(M.aoMap.channel),lightMapUv:at&&v(M.lightMap.channel),bumpMapUv:ft&&v(M.bumpMap.channel),normalMapUv:st&&v(M.normalMap.channel),displacementMapUv:At&&v(M.displacementMap.channel),emissiveMapUv:_t&&v(M.emissiveMap.channel),metalnessMapUv:L&&v(M.metalnessMap.channel),roughnessMapUv:C&&v(M.roughnessMap.channel),anisotropyMapUv:Y&&v(M.anisotropyMap.channel),clearcoatMapUv:ut&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&v(M.sheenRoughnessMap.channel),specularMapUv:Ut&&v(M.specularMap.channel),specularColorMapUv:Ft&&v(M.specularColorMap.channel),specularIntensityMapUv:Kt&&v(M.specularIntensityMap.channel),transmissionMapUv:le&&v(M.transmissionMap.channel),thicknessMapUv:Ce&&v(M.thicknessMap.channel),alphaMapUv:Et&&v(M.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(st||Q),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:Vt,vertexUv2s:Ot,vertexUv3s:me,pointsUvs:K.isPoints===!0&&!!P.attributes.uv&&(rt||Et),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:j,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:ge,useLegacyLights:r._useLegacyLights,decodeVideoTexture:rt&&M.map.isVideoTexture===!0&&ce.getTransfer(M.map.colorSpace)===xe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ke,flipSided:M.side===je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ct&&M.extensions.derivatives===!0,extensionFragDepth:Ct&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ct&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ct&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ct&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(y(S,M),b(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function b(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function _(M){let S=m[M.type],D;if(S){let G=qi[S];D=n0.clone(G.uniforms)}else D=M.uniforms;return D}function A(M,S){let D;for(let G=0,K=c.length;G<K;G++){let O=c[G];if(O.cacheKey===S){D=O,++D.usedTimes;break}}return D===void 0&&(D=new dv(r,S,M,s),c.push(D)),D}function x(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function E(M){h.remove(M)}function T(){h.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:x,releaseShaderCache:E,programs:c,dispose:T}}function mv(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function gv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Qu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Zu(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,f,d,m,v,g){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),t++,p}function o(u,f,d,m,v,g){let p=a(u,f,d,m,v,g);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):e.push(p)}function h(u,f,d,m,v,g){let p=a(u,f,d,m,v,g);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||gv),i.length>1&&i.sort(f||Qu),n.length>1&&n.sort(f||Qu)}function l(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:h,finish:l,sort:c}}function bv(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new Zu,r.set(i,[a])):n>=s.length?(a=new Zu,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function vv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new kt};break;case"SpotLight":e={position:new w,direction:new w,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new w,halfWidth:new w,halfHeight:new w};break}return r[t.id]=e,e}}}function xv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var yv=0;function _v(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Mv(r,t){let e=new vv,i=xv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let s=new w,a=new Lt,o=new Lt;function h(l,u){let f=0,d=0,m=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let v=0,g=0,p=0,y=0,b=0,_=0,A=0,x=0,E=0,T=0,M=0;l.sort(_v);let S=u===!0?Math.PI:1;for(let G=0,K=l.length;G<K;G++){let O=l[G],P=O.color,F=O.intensity,z=O.distance,U=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=P.r*F*S,d+=P.g*F*S,m+=P.b*F*S;else if(O.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(O.sh.coefficients[N],F);M++}else if(O.isDirectionalLight){let N=e.get(O);if(N.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){let k=O.shadow,W=i.get(O);W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.directionalShadow[v]=W,n.directionalShadowMap[v]=U,n.directionalShadowMatrix[v]=O.shadow.matrix,_++}n.directional[v]=N,v++}else if(O.isSpotLight){let N=e.get(O);N.position.setFromMatrixPosition(O.matrixWorld),N.color.copy(P).multiplyScalar(F*S),N.distance=z,N.coneCos=Math.cos(O.angle),N.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),N.decay=O.decay,n.spot[p]=N;let k=O.shadow;if(O.map&&(n.spotLightMap[E]=O.map,E++,k.updateMatrices(O),O.castShadow&&T++),n.spotLightMatrix[p]=k.matrix,O.castShadow){let W=i.get(O);W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.spotShadow[p]=W,n.spotShadowMap[p]=U,x++}p++}else if(O.isRectAreaLight){let N=e.get(O);N.color.copy(P).multiplyScalar(F),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),n.rectArea[y]=N,y++}else if(O.isPointLight){let N=e.get(O);if(N.color.copy(O.color).multiplyScalar(O.intensity*S),N.distance=O.distance,N.decay=O.decay,O.castShadow){let k=O.shadow,W=i.get(O);W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=O.shadow.matrix,A++}n.point[g]=N,g++}else if(O.isHemisphereLight){let N=e.get(O);N.skyColor.copy(O.color).multiplyScalar(F*S),N.groundColor.copy(O.groundColor).multiplyScalar(F*S),n.hemi[b]=N,b++}}y>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=m;let D=n.hash;(D.directionalLength!==v||D.pointLength!==g||D.spotLength!==p||D.rectAreaLength!==y||D.hemiLength!==b||D.numDirectionalShadows!==_||D.numPointShadows!==A||D.numSpotShadows!==x||D.numSpotMaps!==E||D.numLightProbes!==M)&&(n.directional.length=v,n.spot.length=p,n.rectArea.length=y,n.point.length=g,n.hemi.length=b,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=x+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=M,D.directionalLength=v,D.pointLength=g,D.spotLength=p,D.rectAreaLength=y,D.hemiLength=b,D.numDirectionalShadows=_,D.numPointShadows=A,D.numSpotShadows=x,D.numSpotMaps=E,D.numLightProbes=M,n.version=yv++)}function c(l,u){let f=0,d=0,m=0,v=0,g=0,p=u.matrixWorldInverse;for(let y=0,b=l.length;y<b;y++){let _=l[y];if(_.isDirectionalLight){let A=n.directional[f];A.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),f++}else if(_.isSpotLight){let A=n.spot[m];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let A=n.rectArea[v];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(_.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(_.width*.5,0,0),A.halfHeight.set(0,_.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:h,setupView:c,state:n}}function Ju(r,t){let e=new Mv(r,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function h(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:h,setupLightsView:c,pushLight:a,pushShadow:o}}function wv(r,t){let e=new WeakMap;function i(s,a=0){let o=e.get(s),h;return o===void 0?(h=new Ju(r,t),e.set(s,[h])):a>=o.length?(h=new Ju(r,t),o.push(h)):h=o[a],h}function n(){e=new WeakMap}return{get:i,dispose:n}}var Jh=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$h=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
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
}`;function Tv(r,t,e){let i=new Tr,n=new ct,s=new ct,a=new qt,o=new Jh({depthPacking:vp}),h=new $h,c={},l=e.maxTextureSize,u={[_i]:je,[je]:_i,[ke]:ke},f=new ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Ev,fragmentShader:Sv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new oe;m.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new gt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ed;let p=this.type;this.render=function(x,E,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||x.length===0)return;let M=r.getRenderTarget(),S=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),G=r.state;G.setBlending(Tn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let K=p!==on&&this.type===on,O=p===on&&this.type!==on;for(let P=0,F=x.length;P<F;P++){let z=x[P],U=z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;n.copy(U.mapSize);let N=U.getFrameExtents();if(n.multiply(N),s.copy(U.mapSize),(n.x>l||n.y>l)&&(n.x>l&&(s.x=Math.floor(l/N.x),n.x=s.x*N.x,U.mapSize.x=s.x),n.y>l&&(s.y=Math.floor(l/N.y),n.y=s.y*N.y,U.mapSize.y=s.y)),U.map===null||K===!0||O===!0){let W=this.type!==on?{minFilter:Le,magFilter:Le}:{};U.map!==null&&U.map.dispose(),U.map=new _e(n.x,n.y,W),U.map.texture.name=z.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();let k=U.getViewportCount();for(let W=0;W<k;W++){let j=U.getViewport(W);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),G.viewport(a),U.updateMatrices(z,W),i=U.getFrustum(),_(E,T,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===on&&y(U,T),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(M,S,D)};function y(x,E){let T=t.update(v);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new _e(n.x,n.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(E,null,T,f,v,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(E,null,T,d,v,null)}function b(x,E,T,M){let S=null,D=T.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(D!==void 0)S=D;else if(S=T.isPointLight===!0?h:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let G=S.uuid,K=E.uuid,O=c[G];O===void 0&&(O={},c[G]=O);let P=O[K];P===void 0&&(P=S.clone(),O[K]=P,E.addEventListener("dispose",A)),S=P}if(S.visible=E.visible,S.wireframe=E.wireframe,M===on?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let G=r.properties.get(S);G.light=T}return S}function _(x,E,T,M,S){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&S===on)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,x.matrixWorld);let K=t.update(x),O=x.material;if(Array.isArray(O)){let P=K.groups;for(let F=0,z=P.length;F<z;F++){let U=P[F],N=O[U.materialIndex];if(N&&N.visible){let k=b(x,N,M,S);x.onBeforeShadow(r,x,E,T,K,k,U),r.renderBufferDirect(T,null,K,k,x,U),x.onAfterShadow(r,x,E,T,K,k,U)}}}else if(O.visible){let P=b(x,O,M,S);x.onBeforeShadow(r,x,E,T,K,P,null),r.renderBufferDirect(T,null,K,P,x,null),x.onAfterShadow(r,x,E,T,K,P,null)}}let G=x.children;for(let K=0,O=G.length;K<O;K++)_(G[K],E,T,M,S)}function A(x){x.target.removeEventListener("dispose",A);for(let T in c){let M=c[T],S=x.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function Av(r,t,e){let i=e.isWebGL2;function n(){let q=!1,Rt=new qt,Ct=null,Vt=new qt(0,0,0,0);return{setMask:function(Ot){Ct!==Ot&&!q&&(r.colorMask(Ot,Ot,Ot,Ot),Ct=Ot)},setLocked:function(Ot){q=Ot},setClear:function(Ot,me,ge,We,ai){ai===!0&&(Ot*=We,me*=We,ge*=We),Rt.set(Ot,me,ge,We),Vt.equals(Rt)===!1&&(r.clearColor(Ot,me,ge,We),Vt.copy(Rt))},reset:function(){q=!1,Ct=null,Vt.set(-1,0,0,0)}}}function s(){let q=!1,Rt=null,Ct=null,Vt=null;return{setTest:function(Ot){Ot?pt(r.DEPTH_TEST):rt(r.DEPTH_TEST)},setMask:function(Ot){Rt!==Ot&&!q&&(r.depthMask(Ot),Rt=Ot)},setFunc:function(Ot){if(Ct!==Ot){switch(Ot){case Xf:r.depthFunc(r.NEVER);break;case jf:r.depthFunc(r.ALWAYS);break;case Yf:r.depthFunc(r.LESS);break;case Ca:r.depthFunc(r.LEQUAL);break;case Kf:r.depthFunc(r.EQUAL);break;case Qf:r.depthFunc(r.GEQUAL);break;case Zf:r.depthFunc(r.GREATER);break;case Jf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ct=Ot}},setLocked:function(Ot){q=Ot},setClear:function(Ot){Vt!==Ot&&(r.clearDepth(Ot),Vt=Ot)},reset:function(){q=!1,Rt=null,Ct=null,Vt=null}}}function a(){let q=!1,Rt=null,Ct=null,Vt=null,Ot=null,me=null,ge=null,We=null,ai=null;return{setTest:function(be){q||(be?pt(r.STENCIL_TEST):rt(r.STENCIL_TEST))},setMask:function(be){Rt!==be&&!q&&(r.stencilMask(be),Rt=be)},setFunc:function(be,oi,Wi){(Ct!==be||Vt!==oi||Ot!==Wi)&&(r.stencilFunc(be,oi,Wi),Ct=be,Vt=oi,Ot=Wi)},setOp:function(be,oi,Wi){(me!==be||ge!==oi||We!==Wi)&&(r.stencilOp(be,oi,Wi),me=be,ge=oi,We=Wi)},setLocked:function(be){q=be},setClear:function(be){ai!==be&&(r.clearStencil(be),ai=be)},reset:function(){q=!1,Rt=null,Ct=null,Vt=null,Ot=null,me=null,ge=null,We=null,ai=null}}}let o=new n,h=new s,c=new a,l=new WeakMap,u=new WeakMap,f={},d={},m=new WeakMap,v=[],g=null,p=!1,y=null,b=null,_=null,A=null,x=null,E=null,T=null,M=new kt(0,0,0),S=0,D=!1,G=null,K=null,O=null,P=null,F=null,z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,N=0,k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=N>=1):k.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=N>=2);let W=null,j={},V=r.getParameter(r.SCISSOR_BOX),B=r.getParameter(r.VIEWPORT),X=new qt().fromArray(V),$=new qt().fromArray(B);function Z(q,Rt,Ct,Vt){let Ot=new Uint8Array(4),me=r.createTexture();r.bindTexture(q,me),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ge=0;ge<Ct;ge++)i&&(q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY)?r.texImage3D(Rt,0,r.RGBA,1,1,Vt,0,r.RGBA,r.UNSIGNED_BYTE,Ot):r.texImage2D(Rt+ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ot);return me}let it={};it[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(it[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),h.setClear(1),c.setClear(0),pt(r.DEPTH_TEST),h.setFunc(Ca),_t(!1),L(Il),pt(r.CULL_FACE),st(Tn);function pt(q){f[q]!==!0&&(r.enable(q),f[q]=!0)}function rt(q){f[q]!==!1&&(r.disable(q),f[q]=!1)}function Tt(q,Rt){return d[q]!==Rt?(r.bindFramebuffer(q,Rt),d[q]=Rt,i&&(q===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=Rt),q===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=Rt)),!0):!1}function H(q,Rt){let Ct=v,Vt=!1;if(q)if(Ct=m.get(Rt),Ct===void 0&&(Ct=[],m.set(Rt,Ct)),q.isWebGLMultipleRenderTargets){let Ot=q.texture;if(Ct.length!==Ot.length||Ct[0]!==r.COLOR_ATTACHMENT0){for(let me=0,ge=Ot.length;me<ge;me++)Ct[me]=r.COLOR_ATTACHMENT0+me;Ct.length=Ot.length,Vt=!0}}else Ct[0]!==r.COLOR_ATTACHMENT0&&(Ct[0]=r.COLOR_ATTACHMENT0,Vt=!0);else Ct[0]!==r.BACK&&(Ct[0]=r.BACK,Vt=!0);Vt&&(e.isWebGL2?r.drawBuffers(Ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ct))}function dt(q){return g!==q?(r.useProgram(q),g=q,!0):!1}let at={[hn]:r.FUNC_ADD,[If]:r.FUNC_SUBTRACT,[Df]:r.FUNC_REVERSE_SUBTRACT};if(i)at[zl]=r.MIN,at[Ul]=r.MAX;else{let q=t.get("EXT_blend_minmax");q!==null&&(at[zl]=q.MIN_EXT,at[Ul]=q.MAX_EXT)}let ft={[so]:r.ZERO,[kf]:r.ONE,[Tc]:r.SRC_COLOR,[wr]:r.SRC_ALPHA,[Hf]:r.SRC_ALPHA_SATURATE,[Of]:r.DST_COLOR,[Uf]:r.DST_ALPHA,[zf]:r.ONE_MINUS_SRC_COLOR,[zh]:r.ONE_MINUS_SRC_ALPHA,[Bf]:r.ONE_MINUS_DST_COLOR,[Nf]:r.ONE_MINUS_DST_ALPHA,[Vf]:r.CONSTANT_COLOR,[Gf]:r.ONE_MINUS_CONSTANT_COLOR,[Wf]:r.CONSTANT_ALPHA,[qf]:r.ONE_MINUS_CONSTANT_ALPHA};function st(q,Rt,Ct,Vt,Ot,me,ge,We,ai,be){if(q===Tn){p===!0&&(rt(r.BLEND),p=!1);return}if(p===!1&&(pt(r.BLEND),p=!0),q!==Sc){if(q!==y||be!==D){if((b!==hn||x!==hn)&&(r.blendEquation(r.FUNC_ADD),b=hn,x=hn),be)switch(q){case An:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case un:r.blendFunc(r.ONE,r.ONE);break;case Dl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case An:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case un:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Dl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}_=null,A=null,E=null,T=null,M.set(0,0,0),S=0,y=q,D=be}return}Ot=Ot||Rt,me=me||Ct,ge=ge||Vt,(Rt!==b||Ot!==x)&&(r.blendEquationSeparate(at[Rt],at[Ot]),b=Rt,x=Ot),(Ct!==_||Vt!==A||me!==E||ge!==T)&&(r.blendFuncSeparate(ft[Ct],ft[Vt],ft[me],ft[ge]),_=Ct,A=Vt,E=me,T=ge),(We.equals(M)===!1||ai!==S)&&(r.blendColor(We.r,We.g,We.b,ai),M.copy(We),S=ai),y=q,D=!1}function At(q,Rt){q.side===ke?rt(r.CULL_FACE):pt(r.CULL_FACE);let Ct=q.side===je;Rt&&(Ct=!Ct),_t(Ct),q.blending===An&&q.transparent===!1?st(Tn):st(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),o.setMask(q.colorWrite);let Vt=q.stencilWrite;c.setTest(Vt),Vt&&(c.setMask(q.stencilWriteMask),c.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),c.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Q(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?pt(r.SAMPLE_ALPHA_TO_COVERAGE):rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function _t(q){G!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),G=q)}function L(q){q!==Pf?(pt(r.CULL_FACE),q!==K&&(q===Il?r.cullFace(r.BACK):q===Lf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):rt(r.CULL_FACE),K=q}function C(q){q!==O&&(U&&r.lineWidth(q),O=q)}function Q(q,Rt,Ct){q?(pt(r.POLYGON_OFFSET_FILL),(P!==Rt||F!==Ct)&&(r.polygonOffset(Rt,Ct),P=Rt,F=Ct)):rt(r.POLYGON_OFFSET_FILL)}function lt(q){q?pt(r.SCISSOR_TEST):rt(r.SCISSOR_TEST)}function mt(q){q===void 0&&(q=r.TEXTURE0+z-1),W!==q&&(r.activeTexture(q),W=q)}function vt(q,Rt,Ct){Ct===void 0&&(W===null?Ct=r.TEXTURE0+z-1:Ct=W);let Vt=j[Ct];Vt===void 0&&(Vt={type:void 0,texture:void 0},j[Ct]=Vt),(Vt.type!==q||Vt.texture!==Rt)&&(W!==Ct&&(r.activeTexture(Ct),W=Ct),r.bindTexture(q,Rt||it[q]),Vt.type=q,Vt.texture=Rt)}function It(){let q=j[W];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{r.compressedTexImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{r.texSubImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function zt(){try{r.texSubImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ie(){try{r.texStorage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Wt(){try{r.texStorage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ut(){try{r.texImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ft(){try{r.texImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Kt(q){X.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),X.copy(q))}function le(q){$.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),$.copy(q))}function Ce(q,Rt){let Ct=u.get(Rt);Ct===void 0&&(Ct=new WeakMap,u.set(Rt,Ct));let Vt=Ct.get(q);Vt===void 0&&(Vt=r.getUniformBlockIndex(Rt,q.name),Ct.set(q,Vt))}function Jt(q,Rt){let Vt=u.get(Rt).get(q);l.get(Rt)!==Vt&&(r.uniformBlockBinding(Rt,Vt,q.__bindingPointIndex),l.set(Rt,Vt))}function Et(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},W=null,j={},d={},m=new WeakMap,v=[],g=null,p=!1,y=null,b=null,_=null,A=null,x=null,E=null,T=null,M=new kt(0,0,0),S=0,D=!1,G=null,K=null,O=null,P=null,F=null,X.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),o.reset(),h.reset(),c.reset()}return{buffers:{color:o,depth:h,stencil:c},enable:pt,disable:rt,bindFramebuffer:Tt,drawBuffers:H,useProgram:dt,setBlending:st,setMaterial:At,setFlipSided:_t,setCullFace:L,setLineWidth:C,setPolygonOffset:Q,setScissorTest:lt,activeTexture:mt,bindTexture:vt,unbindTexture:It,compressedTexImage2D:Y,compressedTexImage3D:ut,texImage2D:Ut,texImage3D:Ft,updateUBOMapping:Ce,uniformBlockBinding:Jt,texStorage2D:ie,texStorage3D:Wt,texSubImage2D:Mt,texSubImage3D:zt,compressedTexSubImage2D:xt,compressedTexSubImage3D:he,scissor:Kt,viewport:le,reset:Et}}function Rv(r,t,e,i,n,s,a){let o=n.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,C){return d?new OffscreenCanvas(L,C):Sr("canvas")}function v(L,C,Q,lt){let mt=1;if((L.width>lt||L.height>lt)&&(mt=lt/Math.max(L.width,L.height)),mt<1||C===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let vt=C?ka:Math.floor,It=vt(mt*L.width),Y=vt(mt*L.height);u===void 0&&(u=m(It,Y));let ut=Q?m(It,Y):u;return ut.width=It,ut.height=Y,ut.getContext("2d").drawImage(L,0,0,It,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+It+"x"+Y+")."),ut}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function g(L){return Hh(L.width)&&Hh(L.height)}function p(L){return o?!1:L.wrapS!==li||L.wrapT!==li||L.minFilter!==Le&&L.minFilter!==ee}function y(L,C){return L.generateMipmaps&&C&&L.minFilter!==Le&&L.minFilter!==ee}function b(L){r.generateMipmap(L)}function _(L,C,Q,lt,mt=!1){if(o===!1)return C;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let vt=C;if(C===r.RED&&(Q===r.FLOAT&&(vt=r.R32F),Q===r.HALF_FLOAT&&(vt=r.R16F),Q===r.UNSIGNED_BYTE&&(vt=r.R8)),C===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(vt=r.R8UI),Q===r.UNSIGNED_SHORT&&(vt=r.R16UI),Q===r.UNSIGNED_INT&&(vt=r.R32UI),Q===r.BYTE&&(vt=r.R8I),Q===r.SHORT&&(vt=r.R16I),Q===r.INT&&(vt=r.R32I)),C===r.RG&&(Q===r.FLOAT&&(vt=r.RG32F),Q===r.HALF_FLOAT&&(vt=r.RG16F),Q===r.UNSIGNED_BYTE&&(vt=r.RG8)),C===r.RGBA){let It=mt?La:ce.getTransfer(lt);Q===r.FLOAT&&(vt=r.RGBA32F),Q===r.HALF_FLOAT&&(vt=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(vt=It===xe?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(vt=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(vt=r.RGB5_A1)}return(vt===r.R16F||vt===r.R32F||vt===r.RG16F||vt===r.RG32F||vt===r.RGBA16F||vt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function A(L,C,Q){return y(L,Q)===!0||L.isFramebufferTexture&&L.minFilter!==Le&&L.minFilter!==ee?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function x(L){return L===Le||L===Pa||L===mr?r.NEAREST:r.LINEAR}function E(L){let C=L.target;C.removeEventListener("dispose",E),M(C),C.isVideoTexture&&l.delete(C)}function T(L){let C=L.target;C.removeEventListener("dispose",T),D(C)}function M(L){let C=i.get(L);if(C.__webglInit===void 0)return;let Q=L.source,lt=f.get(Q);if(lt){let mt=lt[C.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&S(L),Object.keys(lt).length===0&&f.delete(Q)}i.remove(L)}function S(L){let C=i.get(L);r.deleteTexture(C.__webglTexture);let Q=L.source,lt=f.get(Q);delete lt[C.__cacheKey],a.memory.textures--}function D(L){let C=L.texture,Q=i.get(L),lt=i.get(C);if(lt.__webglTexture!==void 0&&(r.deleteTexture(lt.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(Q.__webglFramebuffer[mt]))for(let vt=0;vt<Q.__webglFramebuffer[mt].length;vt++)r.deleteFramebuffer(Q.__webglFramebuffer[mt][vt]);else r.deleteFramebuffer(Q.__webglFramebuffer[mt]);Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer[mt])}else{if(Array.isArray(Q.__webglFramebuffer))for(let mt=0;mt<Q.__webglFramebuffer.length;mt++)r.deleteFramebuffer(Q.__webglFramebuffer[mt]);else r.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&r.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let mt=0;mt<Q.__webglColorRenderbuffer.length;mt++)Q.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(Q.__webglColorRenderbuffer[mt]);Q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let mt=0,vt=C.length;mt<vt;mt++){let It=i.get(C[mt]);It.__webglTexture&&(r.deleteTexture(It.__webglTexture),a.memory.textures--),i.remove(C[mt])}i.remove(C),i.remove(L)}let G=0;function K(){G=0}function O(){let L=G;return L>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+n.maxTextures),G+=1,L}function P(L){let C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function F(L,C){let Q=i.get(L);if(L.isVideoTexture&&At(L),L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){let lt=L.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(Q,L,C);return}}e.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+C)}function z(L,C){let Q=i.get(L);if(L.version>0&&Q.__version!==L.version){X(Q,L,C);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+C)}function U(L,C){let Q=i.get(L);if(L.version>0&&Q.__version!==L.version){X(Q,L,C);return}e.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+C)}function N(L,C){let Q=i.get(L);if(L.version>0&&Q.__version!==L.version){$(Q,L,C);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+C)}let k={[ii]:r.REPEAT,[li]:r.CLAMP_TO_EDGE,[Er]:r.MIRRORED_REPEAT},W={[Le]:r.NEAREST,[Pa]:r.NEAREST_MIPMAP_NEAREST,[mr]:r.NEAREST_MIPMAP_LINEAR,[ee]:r.LINEAR,[Ac]:r.LINEAR_MIPMAP_NEAREST,[Ke]:r.LINEAR_MIPMAP_LINEAR},j={[yp]:r.NEVER,[Tp]:r.ALWAYS,[_p]:r.LESS,[Ud]:r.LEQUAL,[Mp]:r.EQUAL,[Sp]:r.GEQUAL,[wp]:r.GREATER,[Ep]:r.NOTEQUAL};function V(L,C,Q){if(Q?(r.texParameteri(L,r.TEXTURE_WRAP_S,k[C.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,k[C.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,k[C.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,W[C.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,W[C.minFilter])):(r.texParameteri(L,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(L,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(C.wrapS!==li||C.wrapT!==li)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,r.TEXTURE_MAG_FILTER,x(C.magFilter)),r.texParameteri(L,r.TEXTURE_MIN_FILTER,x(C.minFilter)),C.minFilter!==Le&&C.minFilter!==ee&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,j[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let lt=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===Le||C.minFilter!==mr&&C.minFilter!==Ke||C.type===cn&&t.has("OES_texture_float_linear")===!1||o===!1&&C.type===dn&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(r.texParameterf(L,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,n.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function B(L,C){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",E));let lt=C.source,mt=f.get(lt);mt===void 0&&(mt={},f.set(lt,mt));let vt=P(C);if(vt!==L.__cacheKey){mt[vt]===void 0&&(mt[vt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),mt[vt].usedTimes++;let It=mt[L.__cacheKey];It!==void 0&&(mt[L.__cacheKey].usedTimes--,It.usedTimes===0&&S(C)),L.__cacheKey=vt,L.__webglTexture=mt[vt].texture}return Q}function X(L,C,Q){let lt=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(lt=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(lt=r.TEXTURE_3D);let mt=B(L,C),vt=C.source;e.bindTexture(lt,L.__webglTexture,r.TEXTURE0+Q);let It=i.get(vt);if(vt.version!==It.__version||mt===!0){e.activeTexture(r.TEXTURE0+Q);let Y=ce.getPrimaries(ce.workingColorSpace),ut=C.colorSpace===He?null:ce.getPrimaries(C.colorSpace),Mt=C.colorSpace===He||Y===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let zt=p(C)&&g(C.image)===!1,xt=v(C.image,zt,!1,n.maxTextureSize);xt=_t(C,xt);let he=g(xt)||o,ie=s.convert(C.format,C.colorSpace),Wt=s.convert(C.type),Ut=_(C.internalFormat,ie,Wt,C.colorSpace,C.isVideoTexture);V(lt,C,he);let Ft,Kt=C.mipmaps,le=o&&C.isVideoTexture!==!0&&Ut!==Id,Ce=It.__version===void 0||mt===!0,Jt=A(C,xt,he);if(C.isDepthTexture)Ut=r.DEPTH_COMPONENT,o?C.type===cn?Ut=r.DEPTH_COMPONENT32F:C.type===En?Ut=r.DEPTH_COMPONENT24:C.type===Xn?Ut=r.DEPTH24_STENCIL8:Ut=r.DEPTH_COMPONENT16:C.type===cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===jn&&Ut===r.DEPTH_COMPONENT&&C.type!==Rc&&C.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=En,Wt=s.convert(C.type)),C.format===Us&&Ut===r.DEPTH_COMPONENT&&(Ut=r.DEPTH_STENCIL,C.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Xn,Wt=s.convert(C.type))),Ce&&(le?e.texStorage2D(r.TEXTURE_2D,1,Ut,xt.width,xt.height):e.texImage2D(r.TEXTURE_2D,0,Ut,xt.width,xt.height,0,ie,Wt,null));else if(C.isDataTexture)if(Kt.length>0&&he){le&&Ce&&e.texStorage2D(r.TEXTURE_2D,Jt,Ut,Kt[0].width,Kt[0].height);for(let Et=0,q=Kt.length;Et<q;Et++)Ft=Kt[Et],le?e.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,ie,Wt,Ft.data):e.texImage2D(r.TEXTURE_2D,Et,Ut,Ft.width,Ft.height,0,ie,Wt,Ft.data);C.generateMipmaps=!1}else le?(Ce&&e.texStorage2D(r.TEXTURE_2D,Jt,Ut,xt.width,xt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt.width,xt.height,ie,Wt,xt.data)):e.texImage2D(r.TEXTURE_2D,0,Ut,xt.width,xt.height,0,ie,Wt,xt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){le&&Ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Jt,Ut,Kt[0].width,Kt[0].height,xt.depth);for(let Et=0,q=Kt.length;Et<q;Et++)Ft=Kt[Et],C.format!==de?ie!==null?le?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Ft.width,Ft.height,xt.depth,ie,Ft.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,Ut,Ft.width,Ft.height,xt.depth,0,Ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?e.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Ft.width,Ft.height,xt.depth,ie,Wt,Ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Et,Ut,Ft.width,Ft.height,xt.depth,0,ie,Wt,Ft.data)}else{le&&Ce&&e.texStorage2D(r.TEXTURE_2D,Jt,Ut,Kt[0].width,Kt[0].height);for(let Et=0,q=Kt.length;Et<q;Et++)Ft=Kt[Et],C.format!==de?ie!==null?le?e.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,ie,Ft.data):e.compressedTexImage2D(r.TEXTURE_2D,Et,Ut,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?e.texSubImage2D(r.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,ie,Wt,Ft.data):e.texImage2D(r.TEXTURE_2D,Et,Ut,Ft.width,Ft.height,0,ie,Wt,Ft.data)}else if(C.isDataArrayTexture)le?(Ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Jt,Ut,xt.width,xt.height,xt.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,ie,Wt,xt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ut,xt.width,xt.height,xt.depth,0,ie,Wt,xt.data);else if(C.isData3DTexture)le?(Ce&&e.texStorage3D(r.TEXTURE_3D,Jt,Ut,xt.width,xt.height,xt.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,ie,Wt,xt.data)):e.texImage3D(r.TEXTURE_3D,0,Ut,xt.width,xt.height,xt.depth,0,ie,Wt,xt.data);else if(C.isFramebufferTexture){if(Ce)if(le)e.texStorage2D(r.TEXTURE_2D,Jt,Ut,xt.width,xt.height);else{let Et=xt.width,q=xt.height;for(let Rt=0;Rt<Jt;Rt++)e.texImage2D(r.TEXTURE_2D,Rt,Ut,Et,q,0,ie,Wt,null),Et>>=1,q>>=1}}else if(Kt.length>0&&he){le&&Ce&&e.texStorage2D(r.TEXTURE_2D,Jt,Ut,Kt[0].width,Kt[0].height);for(let Et=0,q=Kt.length;Et<q;Et++)Ft=Kt[Et],le?e.texSubImage2D(r.TEXTURE_2D,Et,0,0,ie,Wt,Ft):e.texImage2D(r.TEXTURE_2D,Et,Ut,ie,Wt,Ft);C.generateMipmaps=!1}else le?(Ce&&e.texStorage2D(r.TEXTURE_2D,Jt,Ut,xt.width,xt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,ie,Wt,xt)):e.texImage2D(r.TEXTURE_2D,0,Ut,ie,Wt,xt);y(C,he)&&b(lt),It.__version=vt.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function $(L,C,Q){if(C.image.length!==6)return;let lt=B(L,C),mt=C.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+Q);let vt=i.get(mt);if(mt.version!==vt.__version||lt===!0){e.activeTexture(r.TEXTURE0+Q);let It=ce.getPrimaries(ce.workingColorSpace),Y=C.colorSpace===He?null:ce.getPrimaries(C.colorSpace),ut=C.colorSpace===He||It===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Mt=C.isCompressedTexture||C.image[0].isCompressedTexture,zt=C.image[0]&&C.image[0].isDataTexture,xt=[];for(let Et=0;Et<6;Et++)!Mt&&!zt?xt[Et]=v(C.image[Et],!1,!0,n.maxCubemapSize):xt[Et]=zt?C.image[Et].image:C.image[Et],xt[Et]=_t(C,xt[Et]);let he=xt[0],ie=g(he)||o,Wt=s.convert(C.format,C.colorSpace),Ut=s.convert(C.type),Ft=_(C.internalFormat,Wt,Ut,C.colorSpace),Kt=o&&C.isVideoTexture!==!0,le=vt.__version===void 0||lt===!0,Ce=A(C,he,ie);V(r.TEXTURE_CUBE_MAP,C,ie);let Jt;if(Mt){Kt&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,Ft,he.width,he.height);for(let Et=0;Et<6;Et++){Jt=xt[Et].mipmaps;for(let q=0;q<Jt.length;q++){let Rt=Jt[q];C.format!==de?Wt!==null?Kt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,q,0,0,Rt.width,Rt.height,Wt,Rt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,q,Ft,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,q,0,0,Rt.width,Rt.height,Wt,Ut,Rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,q,Ft,Rt.width,Rt.height,0,Wt,Ut,Rt.data)}}}else{Jt=C.mipmaps,Kt&&le&&(Jt.length>0&&Ce++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,Ft,xt[0].width,xt[0].height));for(let Et=0;Et<6;Et++)if(zt){Kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,xt[Et].width,xt[Et].height,Wt,Ut,xt[Et].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Ft,xt[Et].width,xt[Et].height,0,Wt,Ut,xt[Et].data);for(let q=0;q<Jt.length;q++){let Ct=Jt[q].image[Et].image;Kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,q+1,0,0,Ct.width,Ct.height,Wt,Ut,Ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,q+1,Ft,Ct.width,Ct.height,0,Wt,Ut,Ct.data)}}else{Kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Wt,Ut,xt[Et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Ft,Wt,Ut,xt[Et]);for(let q=0;q<Jt.length;q++){let Rt=Jt[q];Kt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,q+1,0,0,Wt,Ut,Rt.image[Et]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,q+1,Ft,Wt,Ut,Rt.image[Et])}}}y(C,ie)&&b(r.TEXTURE_CUBE_MAP),vt.__version=mt.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function Z(L,C,Q,lt,mt,vt){let It=s.convert(Q.format,Q.colorSpace),Y=s.convert(Q.type),ut=_(Q.internalFormat,It,Y,Q.colorSpace);if(!i.get(C).__hasExternalTextures){let zt=Math.max(1,C.width>>vt),xt=Math.max(1,C.height>>vt);mt===r.TEXTURE_3D||mt===r.TEXTURE_2D_ARRAY?e.texImage3D(mt,vt,ut,zt,xt,C.depth,0,It,Y,null):e.texImage2D(mt,vt,ut,zt,xt,0,It,Y,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),st(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,mt,i.get(Q).__webglTexture,0,ft(C)):(mt===r.TEXTURE_2D||mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,lt,mt,i.get(Q).__webglTexture,vt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function it(L,C,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,L),C.depthBuffer&&!C.stencilBuffer){let lt=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(Q||st(C)){let mt=C.depthTexture;mt&&mt.isDepthTexture&&(mt.type===cn?lt=r.DEPTH_COMPONENT32F:mt.type===En&&(lt=r.DEPTH_COMPONENT24));let vt=ft(C);st(C)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt,lt,C.width,C.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,lt,C.width,C.height)}else r.renderbufferStorage(r.RENDERBUFFER,lt,C.width,C.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(C.depthBuffer&&C.stencilBuffer){let lt=ft(C);Q&&st(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,r.DEPTH24_STENCIL8,C.width,C.height):st(C)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,r.DEPTH24_STENCIL8,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{let lt=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let mt=0;mt<lt.length;mt++){let vt=lt[mt],It=s.convert(vt.format,vt.colorSpace),Y=s.convert(vt.type),ut=_(vt.internalFormat,It,Y,vt.colorSpace),Mt=ft(C);Q&&st(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,ut,C.width,C.height):st(C)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt,ut,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,ut,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),F(C.depthTexture,0);let lt=i.get(C.depthTexture).__webglTexture,mt=ft(C);if(C.depthTexture.format===jn)st(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,lt,0,mt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,lt,0);else if(C.depthTexture.format===Us)st(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,lt,0,mt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function rt(L){let C=i.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");pt(C.__webglFramebuffer,L)}else if(Q){C.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[lt]),C.__webglDepthbuffer[lt]=r.createRenderbuffer(),it(C.__webglDepthbuffer[lt],L,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),it(C.__webglDepthbuffer,L,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(L,C,Q){let lt=i.get(L);C!==void 0&&Z(lt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&rt(L)}function H(L){let C=L.texture,Q=i.get(L),lt=i.get(C);L.addEventListener("dispose",T),L.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture()),lt.__version=C.version,a.memory.textures++);let mt=L.isWebGLCubeRenderTarget===!0,vt=L.isWebGLMultipleRenderTargets===!0,It=g(L)||o;if(mt){Q.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(o&&C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer[Y]=[];for(let ut=0;ut<C.mipmaps.length;ut++)Q.__webglFramebuffer[Y][ut]=r.createFramebuffer()}else Q.__webglFramebuffer[Y]=r.createFramebuffer()}else{if(o&&C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Y=0;Y<C.mipmaps.length;Y++)Q.__webglFramebuffer[Y]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(vt)if(n.drawBuffers){let Y=L.texture;for(let ut=0,Mt=Y.length;ut<Mt;ut++){let zt=i.get(Y[ut]);zt.__webglTexture===void 0&&(zt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&st(L)===!1){let Y=vt?C:[C];Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ut=0;ut<Y.length;ut++){let Mt=Y[ut];Q.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[ut]);let zt=s.convert(Mt.format,Mt.colorSpace),xt=s.convert(Mt.type),he=_(Mt.internalFormat,zt,xt,Mt.colorSpace,L.isXRRenderTarget===!0),ie=ft(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,he,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),it(Q.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){e.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture),V(r.TEXTURE_CUBE_MAP,C,It);for(let Y=0;Y<6;Y++)if(o&&C.mipmaps&&C.mipmaps.length>0)for(let ut=0;ut<C.mipmaps.length;ut++)Z(Q.__webglFramebuffer[Y][ut],L,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ut);else Z(Q.__webglFramebuffer[Y],L,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);y(C,It)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){let Y=L.texture;for(let ut=0,Mt=Y.length;ut<Mt;ut++){let zt=Y[ut],xt=i.get(zt);e.bindTexture(r.TEXTURE_2D,xt.__webglTexture),V(r.TEXTURE_2D,zt,It),Z(Q.__webglFramebuffer,L,zt,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,0),y(zt,It)&&b(r.TEXTURE_2D)}e.unbindTexture()}else{let Y=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?Y=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Y,lt.__webglTexture),V(Y,C,It),o&&C.mipmaps&&C.mipmaps.length>0)for(let ut=0;ut<C.mipmaps.length;ut++)Z(Q.__webglFramebuffer[ut],L,C,r.COLOR_ATTACHMENT0,Y,ut);else Z(Q.__webglFramebuffer,L,C,r.COLOR_ATTACHMENT0,Y,0);y(C,It)&&b(Y),e.unbindTexture()}L.depthBuffer&&rt(L)}function dt(L){let C=g(L)||o,Q=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let lt=0,mt=Q.length;lt<mt;lt++){let vt=Q[lt];if(y(vt,C)){let It=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Y=i.get(vt).__webglTexture;e.bindTexture(It,Y),b(It),e.unbindTexture()}}}function at(L){if(o&&L.samples>0&&st(L)===!1){let C=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Q=L.width,lt=L.height,mt=r.COLOR_BUFFER_BIT,vt=[],It=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=i.get(L),ut=L.isWebGLMultipleRenderTargets===!0;if(ut)for(let Mt=0;Mt<C.length;Mt++)e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let Mt=0;Mt<C.length;Mt++){vt.push(r.COLOR_ATTACHMENT0+Mt),L.depthBuffer&&vt.push(It);let zt=Y.__ignoreDepthValues!==void 0?Y.__ignoreDepthValues:!1;if(zt===!1&&(L.depthBuffer&&(mt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&(mt|=r.STENCIL_BUFFER_BIT)),ut&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt]),zt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[It]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[It])),ut){let xt=i.get(C[Mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xt,0)}r.blitFramebuffer(0,0,Q,lt,0,0,Q,lt,mt,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,vt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let Mt=0;Mt<C.length;Mt++){e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt]);let zt=i.get(C[Mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}}function ft(L){return Math.min(n.maxSamples,L.samples)}function st(L){let C=i.get(L);return o&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function At(L){let C=a.render.frame;l.get(L)!==C&&(l.set(L,C),L.update())}function _t(L,C){let Q=L.colorSpace,lt=L.format,mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Bh||Q!==ze&&Q!==He&&(ce.getTransfer(Q)===xe?o===!1?t.has("EXT_sRGB")===!0&&lt===de?(L.format=Bh,L.minFilter=ee,L.generateMipmaps=!1):C=za.sRGBToLinear(C):(lt!==de||mt!==Ye)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),C}this.allocateTextureUnit=O,this.resetTextureUnits=K,this.setTexture2D=F,this.setTexture2DArray=z,this.setTexture3D=U,this.setTextureCube=N,this.rebindTextures=Tt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=st}function Cv(r,t,e){let i=e.isWebGL2;function n(s,a=He){let o,h=ce.getTransfer(a);if(s===Ye)return r.UNSIGNED_BYTE;if(s===Rd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Cd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===hp)return r.BYTE;if(s===cp)return r.SHORT;if(s===Rc)return r.UNSIGNED_SHORT;if(s===Ad)return r.INT;if(s===En)return r.UNSIGNED_INT;if(s===cn)return r.FLOAT;if(s===dn)return i?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===lp)return r.ALPHA;if(s===de)return r.RGBA;if(s===up)return r.LUMINANCE;if(s===dp)return r.LUMINANCE_ALPHA;if(s===jn)return r.DEPTH_COMPONENT;if(s===Us)return r.DEPTH_STENCIL;if(s===Bh)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===fp)return r.RED;if(s===Pd)return r.RED_INTEGER;if(s===pp)return r.RG;if(s===Ld)return r.RG_INTEGER;if(s===Fd)return r.RGBA_INTEGER;if(s===$o||s===th||s===eh||s===ih)if(h===xe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===$o)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===th)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eh)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ih)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===$o)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===th)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eh)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ih)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ol||s===Bl||s===Hl||s===Vl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ol)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Id)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Gl||s===Wl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Gl)return h===xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Wl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ql||s===Xl||s===jl||s===Yl||s===Kl||s===Ql||s===Zl||s===Jl||s===$l||s===tu||s===eu||s===iu||s===nu||s===su)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ql)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ql)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jl)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$l)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tu)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===eu)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===iu)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nu)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===su)return h===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nh||s===ru||s===au)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===nh)return h===xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ru)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===au)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mp||s===ou||s===hu||s===cu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===nh)return o.COMPRESSED_RED_RGTC1_EXT;if(s===ou)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xn?i?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}var tc=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ae=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pv={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,h=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=l.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pv)))}return o!==null&&(o.visible=n!==null),h!==null&&(h.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ae;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ec=class extends Rn{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",h=1,c=null,l=null,u=null,f=null,d=null,m=null,v=e.getContextAttributes(),g=null,p=null,y=[],b=[],_=new ct,A=null,x=new Be;x.layers.enable(1),x.viewport=new qt;let E=new Be;E.layers.enable(2),E.viewport=new qt;let T=[x,E],M=new tc;M.layers.enable(1),M.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let B=y[V];return B===void 0&&(B=new xr,y[V]=B),B.getTargetRaySpace()},this.getControllerGrip=function(V){let B=y[V];return B===void 0&&(B=new xr,y[V]=B),B.getGripSpace()},this.getHand=function(V){let B=y[V];return B===void 0&&(B=new xr,y[V]=B),B.getHandSpace()};function G(V){let B=b.indexOf(V.inputSource);if(B===-1)return;let X=y[B];X!==void 0&&(X.update(V.inputSource,V.frame,c||a),X.dispatchEvent({type:V.type,data:V.inputSource}))}function K(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",K),n.removeEventListener("inputsourceschange",O);for(let V=0;V<y.length;V++){let B=b[V];B!==null&&(b[V]=null,y[V].disconnect(B))}S=null,D=null,t.setRenderTarget(g),d=null,f=null,u=null,n=null,p=null,j.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(g=t.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",K),n.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(_),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let B={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,e,B),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new _e(d.framebufferWidth,d.framebufferHeight,{format:de,type:Ye,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let B=null,X=null,$=null;v.depth&&($=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,B=v.stencil?Us:jn,X=v.stencil?Xn:En);let Z={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:s};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(Z),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new _e(f.textureWidth,f.textureHeight,{format:de,type:Ye,depthTexture:new Qn(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let it=t.properties.get(p);it.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await n.requestReferenceSpace(o),j.setContext(n),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function O(V){for(let B=0;B<V.removed.length;B++){let X=V.removed[B],$=b.indexOf(X);$>=0&&(b[$]=null,y[$].disconnect(X))}for(let B=0;B<V.added.length;B++){let X=V.added[B],$=b.indexOf(X);if($===-1){for(let it=0;it<y.length;it++)if(it>=b.length){b.push(X),$=it;break}else if(b[it]===null){b[it]=X,$=it;break}if($===-1)break}let Z=y[$];Z&&Z.connect(X)}}let P=new w,F=new w;function z(V,B,X){P.setFromMatrixPosition(B.matrixWorld),F.setFromMatrixPosition(X.matrixWorld);let $=P.distanceTo(F),Z=B.projectionMatrix.elements,it=X.projectionMatrix.elements,pt=Z[14]/(Z[10]-1),rt=Z[14]/(Z[10]+1),Tt=(Z[9]+1)/Z[5],H=(Z[9]-1)/Z[5],dt=(Z[8]-1)/Z[0],at=(it[8]+1)/it[0],ft=pt*dt,st=pt*at,At=$/(-dt+at),_t=At*-dt;B.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(_t),V.translateZ(At),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let L=pt+At,C=rt+At,Q=ft-_t,lt=st+($-_t),mt=Tt*rt/C*L,vt=H*rt/C*L;V.projectionMatrix.makePerspective(Q,lt,mt,vt,L,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function U(V,B){B===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(B.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;M.near=E.near=x.near=V.near,M.far=E.far=x.far=V.far,(S!==M.near||D!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,D=M.far);let B=V.parent,X=M.cameras;U(M,B);for(let $=0;$<X.length;$++)U(X[$],B);X.length===2?z(M,x,E):M.projectionMatrix.copy(x.projectionMatrix),N(V,M,B)};function N(V,B,X){X===null?V.matrix.copy(B.matrixWorld):(V.matrix.copy(X.matrixWorld),V.matrix.invert(),V.matrix.multiply(B.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(B.projectionMatrix),V.projectionMatrixInverse.copy(B.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Os*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return h},this.setFoveation=function(V){h=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let k=null;function W(V,B){if(l=B.getViewerPose(c||a),m=B,l!==null){let X=l.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let $=!1;X.length!==M.cameras.length&&(M.cameras.length=0,$=!0);for(let Z=0;Z<X.length;Z++){let it=X[Z],pt=null;if(d!==null)pt=d.getViewport(it);else{let Tt=u.getViewSubImage(f,it);pt=Tt.viewport,Z===0&&(t.setRenderTargetTextures(p,Tt.colorTexture,f.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(p))}let rt=T[Z];rt===void 0&&(rt=new Be,rt.layers.enable(Z),rt.viewport=new qt,T[Z]=rt),rt.matrix.fromArray(it.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(it.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(pt.x,pt.y,pt.width,pt.height),Z===0&&(M.matrix.copy(rt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),$===!0&&M.cameras.push(rt)}}for(let X=0;X<y.length;X++){let $=b[X],Z=y[X];$!==null&&Z!==void 0&&Z.update($,B,c||a)}k&&k(V,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),m=null}let j=new Hd;j.setAnimationLoop(W),this.setAnimationLoop=function(V){k=V},this.dispose=function(){}}};function Lv(r,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Bd(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,y,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),l(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?h(g,p,y,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let b=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*b,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function h(g,p,y,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=b*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Fv(r,t,e,i){let n={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(y,b){let _=b.program;i.uniformBlockBinding(y,_)}function c(y,b){let _=n[y.id];_===void 0&&(m(y),_=l(y),n[y.id]=_,y.addEventListener("dispose",g));let A=b.program;i.updateUBOMapping(y,A);let x=t.render.frame;s[y.id]!==x&&(f(y),s[y.id]=x)}function l(y){let b=u();y.__bindingPointIndex=b;let _=r.createBuffer(),A=y.__size,x=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,A,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let b=n[y.id],_=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let x=0,E=_.length;x<E;x++){let T=Array.isArray(_[x])?_[x]:[_[x]];for(let M=0,S=T.length;M<S;M++){let D=T[M];if(d(D,x,M,A)===!0){let G=D.__offset,K=Array.isArray(D.value)?D.value:[D.value],O=0;for(let P=0;P<K.length;P++){let F=K[P],z=v(F);typeof F=="number"||typeof F=="boolean"?(D.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,G+O,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=0,D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=0,D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=0):(F.toArray(D.__data,O),O+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,b,_,A){let x=y.value,E=b+"_"+_;if(A[E]===void 0)return typeof x=="number"||typeof x=="boolean"?A[E]=x:A[E]=x.clone(),!0;{let T=A[E];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return A[E]=x,!0}else if(T.equals(x)===!1)return T.copy(x),!0}return!1}function m(y){let b=y.uniforms,_=0,A=16;for(let E=0,T=b.length;E<T;E++){let M=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,D=M.length;S<D;S++){let G=M[S],K=Array.isArray(G.value)?G.value:[G.value];for(let O=0,P=K.length;O<P;O++){let F=K[O],z=v(F),U=_%A;U!==0&&A-U<z.boundary&&(_+=A-U),G.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=z.storage}}}let x=_%A;return x>0&&(_+=A-x),y.__size=_,y.__cache={},this}function v(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function g(y){let b=y.target;b.removeEventListener("dispose",g);let _=a.indexOf(b.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(n[b.id]),delete n[b.id],delete s[b.id]}function p(){for(let y in n)r.deleteBuffer(n[y]);a=[],n={},s={}}return{bind:h,update:c,dispose:p}}var Ar=class{constructor(t={}){let{canvas:e=Hp(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let d=new Uint32Array(4),m=new Int32Array(4),v=null,g=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=ji,this.toneMappingExposure=1;let b=this,_=!1,A=0,x=0,E=null,T=-1,M=null,S=new qt,D=new qt,G=null,K=new kt(0),O=0,P=e.width,F=e.height,z=1,U=null,N=null,k=new qt(0,0,P,F),W=new qt(0,0,P,F),j=!1,V=new Tr,B=!1,X=!1,$=null,Z=new Lt,it=new ct,pt=new w,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Tt(){return E===null?z:1}let H=i;function dt(I,J){for(let nt=0;nt<I.length;nt++){let ot=I[nt],et=e.getContext(ot,J);if(et!==null)return et}return null}try{let I={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ec}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",q,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),H===null){let J=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&J.shift(),H=dt(J,I),H===null)throw dt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let at,ft,st,At,_t,L,C,Q,lt,mt,vt,It,Y,ut,Mt,zt,xt,he,ie,Wt,Ut,Ft,Kt,le;function Ce(){at=new Zg(H),ft=new qg(H,at,t),at.init(ft),Ft=new Cv(H,at,ft),st=new Av(H,at,ft),At=new tb(H),_t=new mv,L=new Rv(H,at,st,_t,ft,Ft,At),C=new jg(b),Q=new Qg(b),lt=new h0(H,ft),Kt=new Gg(H,at,lt,ft),mt=new Jg(H,lt,At,Kt),vt=new sb(H,mt,lt,At),ie=new nb(H,ft,L),zt=new Xg(_t),It=new pv(b,C,Q,at,ft,Kt,zt),Y=new Lv(b,_t),ut=new bv,Mt=new wv(at,ft),he=new Vg(b,C,Q,st,vt,f,h),xt=new Tv(b,vt,ft),le=new Fv(H,At,ft,st),Wt=new Wg(H,at,At,ft),Ut=new $g(H,at,At,ft),At.programs=It.programs,b.capabilities=ft,b.extensions=at,b.properties=_t,b.renderLists=ut,b.shadowMap=xt,b.state=st,b.info=At}Ce();let Jt=new ec(b,H);this.xr=Jt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let I=at.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=at.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(I){I!==void 0&&(z=I,this.setSize(P,F,!1))},this.getSize=function(I){return I.set(P,F)},this.setSize=function(I,J,nt=!0){if(Jt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=I,F=J,e.width=Math.floor(I*z),e.height=Math.floor(J*z),nt===!0&&(e.style.width=I+"px",e.style.height=J+"px"),this.setViewport(0,0,I,J)},this.getDrawingBufferSize=function(I){return I.set(P*z,F*z).floor()},this.setDrawingBufferSize=function(I,J,nt){P=I,F=J,z=nt,e.width=Math.floor(I*nt),e.height=Math.floor(J*nt),this.setViewport(0,0,I,J)},this.getCurrentViewport=function(I){return I.copy(S)},this.getViewport=function(I){return I.copy(k)},this.setViewport=function(I,J,nt,ot){I.isVector4?k.set(I.x,I.y,I.z,I.w):k.set(I,J,nt,ot),st.viewport(S.copy(k).multiplyScalar(z).floor())},this.getScissor=function(I){return I.copy(W)},this.setScissor=function(I,J,nt,ot){I.isVector4?W.set(I.x,I.y,I.z,I.w):W.set(I,J,nt,ot),st.scissor(D.copy(W).multiplyScalar(z).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(I){st.setScissorTest(j=I)},this.setOpaqueSort=function(I){U=I},this.setTransparentSort=function(I){N=I},this.getClearColor=function(I){return I.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(I=!0,J=!0,nt=!0){let ot=0;if(I){let et=!1;if(E!==null){let Pt=E.texture.format;et=Pt===Fd||Pt===Ld||Pt===Pd}if(et){let Pt=E.texture.type,Dt=Pt===Ye||Pt===En||Pt===Rc||Pt===Xn||Pt===Rd||Pt===Cd,Bt=he.getClearColor(),Gt=he.getClearAlpha(),Zt=Bt.r,Xt=Bt.g,Yt=Bt.b;Dt?(d[0]=Zt,d[1]=Xt,d[2]=Yt,d[3]=Gt,H.clearBufferuiv(H.COLOR,0,d)):(m[0]=Zt,m[1]=Xt,m[2]=Yt,m[3]=Gt,H.clearBufferiv(H.COLOR,0,m))}else ot|=H.COLOR_BUFFER_BIT}J&&(ot|=H.DEPTH_BUFFER_BIT),nt&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",q,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),ut.dispose(),Mt.dispose(),_t.dispose(),C.dispose(),Q.dispose(),vt.dispose(),Kt.dispose(),le.dispose(),It.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",ai),Jt.removeEventListener("sessionend",be),$&&($.dispose(),$=null),oi.stop()};function Et(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let I=At.autoReset,J=xt.enabled,nt=xt.autoUpdate,ot=xt.needsUpdate,et=xt.type;Ce(),At.autoReset=I,xt.enabled=J,xt.autoUpdate=nt,xt.needsUpdate=ot,xt.type=et}function Rt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ct(I){let J=I.target;J.removeEventListener("dispose",Ct),Vt(J)}function Vt(I){Ot(I),_t.remove(I)}function Ot(I){let J=_t.get(I).programs;J!==void 0&&(J.forEach(function(nt){It.releaseProgram(nt)}),I.isShaderMaterial&&It.releaseShaderCache(I))}this.renderBufferDirect=function(I,J,nt,ot,et,Pt){J===null&&(J=rt);let Dt=et.isMesh&&et.matrixWorld.determinant()<0,Bt=Tf(I,J,nt,ot,et);st.setMaterial(ot,Dt);let Gt=nt.index,Zt=1;if(ot.wireframe===!0){if(Gt=mt.getWireframeAttribute(nt),Gt===void 0)return;Zt=2}let Xt=nt.drawRange,Yt=nt.attributes.position,De=Xt.start*Zt,vi=(Xt.start+Xt.count)*Zt;Pt!==null&&(De=Math.max(De,Pt.start*Zt),vi=Math.min(vi,(Pt.start+Pt.count)*Zt)),Gt!==null?(De=Math.max(De,0),vi=Math.min(vi,Gt.count)):Yt!=null&&(De=Math.max(De,0),vi=Math.min(vi,Yt.count));let qe=vi-De;if(qe<0||qe===1/0)return;Kt.setup(et,ot,Bt,nt,Gt);let $i,Ee=Wt;if(Gt!==null&&($i=lt.get(Gt),Ee=Ut,Ee.setIndex($i)),et.isMesh)ot.wireframe===!0?(st.setLineWidth(ot.wireframeLinewidth*Tt()),Ee.setMode(H.LINES)):Ee.setMode(H.TRIANGLES);else if(et.isLine){let $t=ot.linewidth;$t===void 0&&($t=1),st.setLineWidth($t*Tt()),et.isLineSegments?Ee.setMode(H.LINES):et.isLineLoop?Ee.setMode(H.LINE_LOOP):Ee.setMode(H.LINE_STRIP)}else et.isPoints?Ee.setMode(H.POINTS):et.isSprite&&Ee.setMode(H.TRIANGLES);if(et.isBatchedMesh)Ee.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else if(et.isInstancedMesh)Ee.renderInstances(De,qe,et.count);else if(nt.isInstancedBufferGeometry){let $t=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Ko=Math.min(nt.instanceCount,$t);Ee.renderInstances(De,qe,Ko)}else Ee.render(De,qe)};function me(I,J,nt){I.transparent===!0&&I.side===ke&&I.forceSinglePass===!1?(I.side=je,I.needsUpdate=!0,Yr(I,J,nt),I.side=_i,I.needsUpdate=!0,Yr(I,J,nt),I.side=ke):Yr(I,J,nt)}this.compile=function(I,J,nt=null){nt===null&&(nt=I),g=Mt.get(nt),g.init(),y.push(g),nt.traverseVisible(function(et){et.isLight&&et.layers.test(J.layers)&&(g.pushLight(et),et.castShadow&&g.pushShadow(et))}),I!==nt&&I.traverseVisible(function(et){et.isLight&&et.layers.test(J.layers)&&(g.pushLight(et),et.castShadow&&g.pushShadow(et))}),g.setupLights(b._useLegacyLights);let ot=new Set;return I.traverse(function(et){let Pt=et.material;if(Pt)if(Array.isArray(Pt))for(let Dt=0;Dt<Pt.length;Dt++){let Bt=Pt[Dt];me(Bt,nt,et),ot.add(Bt)}else me(Pt,nt,et),ot.add(Pt)}),y.pop(),g=null,ot},this.compileAsync=function(I,J,nt=null){let ot=this.compile(I,J,nt);return new Promise(et=>{function Pt(){if(ot.forEach(function(Dt){_t.get(Dt).currentProgram.isReady()&&ot.delete(Dt)}),ot.size===0){et(I);return}setTimeout(Pt,10)}at.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let ge=null;function We(I){ge&&ge(I)}function ai(){oi.stop()}function be(){oi.start()}let oi=new Hd;oi.setAnimationLoop(We),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(I){ge=I,Jt.setAnimationLoop(I),I===null?oi.stop():oi.start()},Jt.addEventListener("sessionstart",ai),Jt.addEventListener("sessionend",be),this.render=function(I,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(J),J=Jt.getCamera()),I.isScene===!0&&I.onBeforeRender(b,I,J,E),g=Mt.get(I,y.length),g.init(),y.push(g),Z.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V.setFromProjectionMatrix(Z),X=this.localClippingEnabled,B=zt.init(this.clippingPlanes,X),v=ut.get(I,p.length),v.init(),p.push(v),Wi(I,J,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(U,N),this.info.render.frame++,B===!0&&zt.beginShadows();let nt=g.state.shadowsArray;if(xt.render(nt,I,J),B===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(v,I),g.setupLights(b._useLegacyLights),J.isArrayCamera){let ot=J.cameras;for(let et=0,Pt=ot.length;et<Pt;et++){let Dt=ot[et];Al(v,I,Dt,Dt.viewport)}}else Al(v,I,J);E!==null&&(L.updateMultisampleRenderTarget(E),L.updateRenderTargetMipmap(E)),I.isScene===!0&&I.onAfterRender(b,I,J),Kt.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Wi(I,J,nt,ot){if(I.visible===!1)return;if(I.layers.test(J.layers)){if(I.isGroup)nt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(J);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||V.intersectsSprite(I)){ot&&pt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Z);let Dt=vt.update(I),Bt=I.material;Bt.visible&&v.push(I,Dt,Bt,nt,pt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||V.intersectsObject(I))){let Dt=vt.update(I),Bt=I.material;if(ot&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),pt.copy(I.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),pt.copy(Dt.boundingSphere.center)),pt.applyMatrix4(I.matrixWorld).applyMatrix4(Z)),Array.isArray(Bt)){let Gt=Dt.groups;for(let Zt=0,Xt=Gt.length;Zt<Xt;Zt++){let Yt=Gt[Zt],De=Bt[Yt.materialIndex];De&&De.visible&&v.push(I,Dt,De,nt,pt.z,Yt)}}else Bt.visible&&v.push(I,Dt,Bt,nt,pt.z,null)}}let Pt=I.children;for(let Dt=0,Bt=Pt.length;Dt<Bt;Dt++)Wi(Pt[Dt],J,nt,ot)}function Al(I,J,nt,ot){let et=I.opaque,Pt=I.transmissive,Dt=I.transparent;g.setupLightsView(nt),B===!0&&zt.setGlobalState(b.clippingPlanes,nt),Pt.length>0&&Sf(et,Pt,J,nt),ot&&st.viewport(S.copy(ot)),et.length>0&&jr(et,J,nt),Pt.length>0&&jr(Pt,J,nt),Dt.length>0&&jr(Dt,J,nt),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Sf(I,J,nt,ot){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;let Pt=ft.isWebGL2;$===null&&($=new _e(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")?dn:Ye,minFilter:Ke,samples:Pt?4:0})),b.getDrawingBufferSize(it),Pt?$.setSize(it.x,it.y):$.setSize(ka(it.x),ka(it.y));let Dt=b.getRenderTarget();b.setRenderTarget($),b.getClearColor(K),O=b.getClearAlpha(),O<1&&b.setClearColor(16777215,.5),b.clear();let Bt=b.toneMapping;b.toneMapping=ji,jr(I,nt,ot),L.updateMultisampleRenderTarget($),L.updateRenderTargetMipmap($);let Gt=!1;for(let Zt=0,Xt=J.length;Zt<Xt;Zt++){let Yt=J[Zt],De=Yt.object,vi=Yt.geometry,qe=Yt.material,$i=Yt.group;if(qe.side===ke&&De.layers.test(ot.layers)){let Ee=qe.side;qe.side=je,qe.needsUpdate=!0,Rl(De,nt,ot,vi,qe,$i),qe.side=Ee,qe.needsUpdate=!0,Gt=!0}}Gt===!0&&(L.updateMultisampleRenderTarget($),L.updateRenderTargetMipmap($)),b.setRenderTarget(Dt),b.setClearColor(K,O),b.toneMapping=Bt}function jr(I,J,nt){let ot=J.isScene===!0?J.overrideMaterial:null;for(let et=0,Pt=I.length;et<Pt;et++){let Dt=I[et],Bt=Dt.object,Gt=Dt.geometry,Zt=ot===null?Dt.material:ot,Xt=Dt.group;Bt.layers.test(nt.layers)&&Rl(Bt,J,nt,Gt,Zt,Xt)}}function Rl(I,J,nt,ot,et,Pt){I.onBeforeRender(b,J,nt,ot,et,Pt),I.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),et.onBeforeRender(b,J,nt,ot,I,Pt),et.transparent===!0&&et.side===ke&&et.forceSinglePass===!1?(et.side=je,et.needsUpdate=!0,b.renderBufferDirect(nt,J,ot,et,I,Pt),et.side=_i,et.needsUpdate=!0,b.renderBufferDirect(nt,J,ot,et,I,Pt),et.side=ke):b.renderBufferDirect(nt,J,ot,et,I,Pt),I.onAfterRender(b,J,nt,ot,et,Pt)}function Yr(I,J,nt){J.isScene!==!0&&(J=rt);let ot=_t.get(I),et=g.state.lights,Pt=g.state.shadowsArray,Dt=et.state.version,Bt=It.getParameters(I,et.state,Pt,J,nt),Gt=It.getProgramCacheKey(Bt),Zt=ot.programs;ot.environment=I.isMeshStandardMaterial?J.environment:null,ot.fog=J.fog,ot.envMap=(I.isMeshStandardMaterial?Q:C).get(I.envMap||ot.environment),Zt===void 0&&(I.addEventListener("dispose",Ct),Zt=new Map,ot.programs=Zt);let Xt=Zt.get(Gt);if(Xt!==void 0){if(ot.currentProgram===Xt&&ot.lightsStateVersion===Dt)return Pl(I,Bt),Xt}else Bt.uniforms=It.getUniforms(I),I.onBuild(nt,Bt,b),I.onBeforeCompile(Bt,b),Xt=It.acquireProgram(Bt,Gt),Zt.set(Gt,Xt),ot.uniforms=Bt.uniforms;let Yt=ot.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Yt.clippingPlanes=zt.uniform),Pl(I,Bt),ot.needsLights=Rf(I),ot.lightsStateVersion=Dt,ot.needsLights&&(Yt.ambientLightColor.value=et.state.ambient,Yt.lightProbe.value=et.state.probe,Yt.directionalLights.value=et.state.directional,Yt.directionalLightShadows.value=et.state.directionalShadow,Yt.spotLights.value=et.state.spot,Yt.spotLightShadows.value=et.state.spotShadow,Yt.rectAreaLights.value=et.state.rectArea,Yt.ltc_1.value=et.state.rectAreaLTC1,Yt.ltc_2.value=et.state.rectAreaLTC2,Yt.pointLights.value=et.state.point,Yt.pointLightShadows.value=et.state.pointShadow,Yt.hemisphereLights.value=et.state.hemi,Yt.directionalShadowMap.value=et.state.directionalShadowMap,Yt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Yt.spotShadowMap.value=et.state.spotShadowMap,Yt.spotLightMatrix.value=et.state.spotLightMatrix,Yt.spotLightMap.value=et.state.spotLightMap,Yt.pointShadowMap.value=et.state.pointShadowMap,Yt.pointShadowMatrix.value=et.state.pointShadowMatrix),ot.currentProgram=Xt,ot.uniformsList=null,Xt}function Cl(I){if(I.uniformsList===null){let J=I.currentProgram.getUniforms();I.uniformsList=Ds.seqWithValue(J.seq,I.uniforms)}return I.uniformsList}function Pl(I,J){let nt=_t.get(I);nt.outputColorSpace=J.outputColorSpace,nt.batching=J.batching,nt.instancing=J.instancing,nt.instancingColor=J.instancingColor,nt.skinning=J.skinning,nt.morphTargets=J.morphTargets,nt.morphNormals=J.morphNormals,nt.morphColors=J.morphColors,nt.morphTargetsCount=J.morphTargetsCount,nt.numClippingPlanes=J.numClippingPlanes,nt.numIntersection=J.numClipIntersection,nt.vertexAlphas=J.vertexAlphas,nt.vertexTangents=J.vertexTangents,nt.toneMapping=J.toneMapping}function Tf(I,J,nt,ot,et){J.isScene!==!0&&(J=rt),L.resetTextureUnits();let Pt=J.fog,Dt=ot.isMeshStandardMaterial?J.environment:null,Bt=E===null?b.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ze,Gt=(ot.isMeshStandardMaterial?Q:C).get(ot.envMap||Dt),Zt=ot.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Xt=!!nt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Yt=!!nt.morphAttributes.position,De=!!nt.morphAttributes.normal,vi=!!nt.morphAttributes.color,qe=ji;ot.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(qe=b.toneMapping);let $i=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Ee=$i!==void 0?$i.length:0,$t=_t.get(ot),Ko=g.state.lights;if(B===!0&&(X===!0||I!==M)){let Ai=I===M&&ot.id===T;zt.setState(ot,I,Ai)}let Pe=!1;ot.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Ko.state.version||$t.outputColorSpace!==Bt||et.isBatchedMesh&&$t.batching===!1||!et.isBatchedMesh&&$t.batching===!0||et.isInstancedMesh&&$t.instancing===!1||!et.isInstancedMesh&&$t.instancing===!0||et.isSkinnedMesh&&$t.skinning===!1||!et.isSkinnedMesh&&$t.skinning===!0||et.isInstancedMesh&&$t.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&$t.instancingColor===!1&&et.instanceColor!==null||$t.envMap!==Gt||ot.fog===!0&&$t.fog!==Pt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==zt.numPlanes||$t.numIntersection!==zt.numIntersection)||$t.vertexAlphas!==Zt||$t.vertexTangents!==Xt||$t.morphTargets!==Yt||$t.morphNormals!==De||$t.morphColors!==vi||$t.toneMapping!==qe||ft.isWebGL2===!0&&$t.morphTargetsCount!==Ee)&&(Pe=!0):(Pe=!0,$t.__version=ot.version);let Un=$t.currentProgram;Pe===!0&&(Un=Yr(ot,J,et));let Ll=!1,sr=!1,Qo=!1,$e=Un.getUniforms(),Nn=$t.uniforms;if(st.useProgram(Un.program)&&(Ll=!0,sr=!0,Qo=!0),ot.id!==T&&(T=ot.id,sr=!0),Ll||M!==I){$e.setValue(H,"projectionMatrix",I.projectionMatrix),$e.setValue(H,"viewMatrix",I.matrixWorldInverse);let Ai=$e.map.cameraPosition;Ai!==void 0&&Ai.setValue(H,pt.setFromMatrixPosition(I.matrixWorld)),ft.logarithmicDepthBuffer&&$e.setValue(H,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&$e.setValue(H,"isOrthographic",I.isOrthographicCamera===!0),M!==I&&(M=I,sr=!0,Qo=!0)}if(et.isSkinnedMesh){$e.setOptional(H,et,"bindMatrix"),$e.setOptional(H,et,"bindMatrixInverse");let Ai=et.skeleton;Ai&&(ft.floatVertexTextures?(Ai.boneTexture===null&&Ai.computeBoneTexture(),$e.setValue(H,"boneTexture",Ai.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}et.isBatchedMesh&&($e.setOptional(H,et,"batchingTexture"),$e.setValue(H,"batchingTexture",et._matricesTexture,L));let Zo=nt.morphAttributes;if((Zo.position!==void 0||Zo.normal!==void 0||Zo.color!==void 0&&ft.isWebGL2===!0)&&ie.update(et,nt,Un),(sr||$t.receiveShadow!==et.receiveShadow)&&($t.receiveShadow=et.receiveShadow,$e.setValue(H,"receiveShadow",et.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Nn.envMap.value=Gt,Nn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),sr&&($e.setValue(H,"toneMappingExposure",b.toneMappingExposure),$t.needsLights&&Af(Nn,Qo),Pt&&ot.fog===!0&&Y.refreshFogUniforms(Nn,Pt),Y.refreshMaterialUniforms(Nn,ot,z,F,$),Ds.upload(H,Cl($t),Nn,L)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Ds.upload(H,Cl($t),Nn,L),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&$e.setValue(H,"center",et.center),$e.setValue(H,"modelViewMatrix",et.modelViewMatrix),$e.setValue(H,"normalMatrix",et.normalMatrix),$e.setValue(H,"modelMatrix",et.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){let Ai=ot.uniformsGroups;for(let Jo=0,Cf=Ai.length;Jo<Cf;Jo++)if(ft.isWebGL2){let Fl=Ai[Jo];le.update(Fl,Un),le.bind(Fl,Un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Un}function Af(I,J){I.ambientLightColor.needsUpdate=J,I.lightProbe.needsUpdate=J,I.directionalLights.needsUpdate=J,I.directionalLightShadows.needsUpdate=J,I.pointLights.needsUpdate=J,I.pointLightShadows.needsUpdate=J,I.spotLights.needsUpdate=J,I.spotLightShadows.needsUpdate=J,I.rectAreaLights.needsUpdate=J,I.hemisphereLights.needsUpdate=J}function Rf(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(I,J,nt){_t.get(I.texture).__webglTexture=J,_t.get(I.depthTexture).__webglTexture=nt;let ot=_t.get(I);ot.__hasExternalTextures=!0,ot.__hasExternalTextures&&(ot.__autoAllocateDepthBuffer=nt===void 0,ot.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,J){let nt=_t.get(I);nt.__webglFramebuffer=J,nt.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(I,J=0,nt=0){E=I,A=J,x=nt;let ot=!0,et=null,Pt=!1,Dt=!1;if(I){let Gt=_t.get(I);Gt.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1):Gt.__webglFramebuffer===void 0?L.setupRenderTarget(I):Gt.__hasExternalTextures&&L.rebindTextures(I,_t.get(I.texture).__webglTexture,_t.get(I.depthTexture).__webglTexture);let Zt=I.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Dt=!0);let Xt=_t.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Xt[J])?et=Xt[J][nt]:et=Xt[J],Pt=!0):ft.isWebGL2&&I.samples>0&&L.useMultisampledRTT(I)===!1?et=_t.get(I).__webglMultisampledFramebuffer:Array.isArray(Xt)?et=Xt[nt]:et=Xt,S.copy(I.viewport),D.copy(I.scissor),G=I.scissorTest}else S.copy(k).multiplyScalar(z).floor(),D.copy(W).multiplyScalar(z).floor(),G=j;if(st.bindFramebuffer(H.FRAMEBUFFER,et)&&ft.drawBuffers&&ot&&st.drawBuffers(I,et),st.viewport(S),st.scissor(D),st.setScissorTest(G),Pt){let Gt=_t.get(I.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+J,Gt.__webglTexture,nt)}else if(Dt){let Gt=_t.get(I.texture),Zt=J||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.__webglTexture,nt||0,Zt)}T=-1},this.readRenderTargetPixels=function(I,J,nt,ot,et,Pt,Dt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=_t.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){st.bindFramebuffer(H.FRAMEBUFFER,Bt);try{let Gt=I.texture,Zt=Gt.format,Xt=Gt.type;if(Zt!==de&&Ft.convert(Zt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Yt=Xt===dn&&(at.has("EXT_color_buffer_half_float")||ft.isWebGL2&&at.has("EXT_color_buffer_float"));if(Xt!==Ye&&Ft.convert(Xt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xt===cn&&(ft.isWebGL2||at.has("OES_texture_float")||at.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=I.width-ot&&nt>=0&&nt<=I.height-et&&H.readPixels(J,nt,ot,et,Ft.convert(Zt),Ft.convert(Xt),Pt)}finally{let Gt=E!==null?_t.get(E).__webglFramebuffer:null;st.bindFramebuffer(H.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(I,J,nt=0){let ot=Math.pow(2,-nt),et=Math.floor(J.image.width*ot),Pt=Math.floor(J.image.height*ot);L.setTexture2D(J,0),H.copyTexSubImage2D(H.TEXTURE_2D,nt,0,0,I.x,I.y,et,Pt),st.unbindTexture()},this.copyTextureToTexture=function(I,J,nt,ot=0){let et=J.image.width,Pt=J.image.height,Dt=Ft.convert(nt.format),Bt=Ft.convert(nt.type);L.setTexture2D(nt,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,nt.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,nt.unpackAlignment),J.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ot,I.x,I.y,et,Pt,Dt,Bt,J.image.data):J.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ot,I.x,I.y,J.mipmaps[0].width,J.mipmaps[0].height,Dt,J.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,ot,I.x,I.y,Dt,Bt,J.image),ot===0&&nt.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),st.unbindTexture()},this.copyTextureToTexture3D=function(I,J,nt,ot,et=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Pt=I.max.x-I.min.x+1,Dt=I.max.y-I.min.y+1,Bt=I.max.z-I.min.z+1,Gt=Ft.convert(ot.format),Zt=Ft.convert(ot.type),Xt;if(ot.isData3DTexture)L.setTexture3D(ot,0),Xt=H.TEXTURE_3D;else if(ot.isDataArrayTexture||ot.isCompressedArrayTexture)L.setTexture2DArray(ot,0),Xt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,ot.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,ot.unpackAlignment);let Yt=H.getParameter(H.UNPACK_ROW_LENGTH),De=H.getParameter(H.UNPACK_IMAGE_HEIGHT),vi=H.getParameter(H.UNPACK_SKIP_PIXELS),qe=H.getParameter(H.UNPACK_SKIP_ROWS),$i=H.getParameter(H.UNPACK_SKIP_IMAGES),Ee=nt.isCompressedTexture?nt.mipmaps[et]:nt.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ee.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,I.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,I.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,I.min.z),nt.isDataTexture||nt.isData3DTexture?H.texSubImage3D(Xt,et,J.x,J.y,J.z,Pt,Dt,Bt,Gt,Zt,Ee.data):nt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Xt,et,J.x,J.y,J.z,Pt,Dt,Bt,Gt,Ee.data)):H.texSubImage3D(Xt,et,J.x,J.y,J.z,Pt,Dt,Bt,Gt,Zt,Ee),H.pixelStorei(H.UNPACK_ROW_LENGTH,Yt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,De),H.pixelStorei(H.UNPACK_SKIP_PIXELS,vi),H.pixelStorei(H.UNPACK_SKIP_ROWS,qe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,$i),et===0&&ot.generateMipmaps&&H.generateMipmap(Xt),st.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?L.setTextureCube(I,0):I.isData3DTexture?L.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?L.setTexture2DArray(I,0):L.setTexture2D(I,0),st.unbindTexture()},this.resetState=function(){A=0,x=0,E=null,st.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Cc?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===oo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?Yn:kd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Yn?fe:ze}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ic=class extends Ar{};ic.prototype.isWebGL1Renderer=!0;var Li=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Ws=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hi=new w,Zn=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.applyMatrix4(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.applyNormalMatrix(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.transformDirection(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Nt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rr=class extends di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ss,cr=new w,Ts=new w,As=new w,Rs=new ct,lr=new ct,jd=new Lt,ba=new w,ur=new w,va=new w,$u=new ct,Ah=new ct,td=new ct,Ga=class extends Te{constructor(t=new Rr){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ws(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Zn(i,3,0,!1)),Ss.setAttribute("uv",new Zn(i,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ts.setFromMatrixScale(this.matrixWorld),jd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ts.multiplyScalar(-As.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;xa(ba.set(-.5,-.5,0),As,a,Ts,n,s),xa(ur.set(.5,-.5,0),As,a,Ts,n,s),xa(va.set(.5,.5,0),As,a,Ts,n,s),$u.set(0,0),Ah.set(1,0),td.set(1,1);let o=t.ray.intersectTriangle(ba,ur,va,!1,cr);if(o===null&&(xa(ur.set(-.5,.5,0),As,a,Ts,n,s),Ah.set(0,1),o=t.ray.intersectTriangle(ba,va,ur,!1,cr),o===null))return;let h=t.ray.origin.distanceTo(cr);h<t.near||h>t.far||e.push({distance:h,point:cr.clone(),uv:qn.getInterpolation(cr,ba,ur,va,$u,Ah,td,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function xa(r,t,e,i,n,s){Rs.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(lr.x=s*Rs.x-n*Rs.y,lr.y=n*Rs.x+s*Rs.y):lr.copy(Rs),r.copy(t),r.x+=lr.x,r.y+=lr.y,r.applyMatrix4(jd)}var ed=new w,id=new qt,nd=new qt,Iv=new w,sd=new Lt,ya=new w,Rh=new Mi,rd=new Lt,Ch=new Bs,Jn=class extends gt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nl,this.bindMatrix=new Lt,this.bindMatrixInverse=new Lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pi),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,ya),this.boundingBox.expandByPoint(ya)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,ya),this.boundingSphere.expandByPoint(ya)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rh.copy(this.boundingSphere),Rh.applyMatrix4(n),t.ray.intersectsSphere(Rh)!==!1&&(rd.copy(n).invert(),Ch.copy(t.ray).applyMatrix4(rd),!(this.boundingBox!==null&&Ch.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ch)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new qt,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Nl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===op?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;id.fromBufferAttribute(n.attributes.skinIndex,t),nd.fromBufferAttribute(n.attributes.skinWeight,t),ed.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let a=nd.getComponent(s);if(a!==0){let o=id.getComponent(s);sd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(Iv.copy(ed).applyMatrix4(sd),a)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},$n=class extends Te{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hi=class extends Qe{constructor(t=null,e=1,i=1,n,s,a,o,h,c=Le,l=Le,u,f){super(null,a,o,h,c,l,n,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ad=new Lt,Dv=new Lt,qs=class r{constructor(t=[],e=[]){this.uuid=Ci(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Lt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Lt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=t.length;s<a;s++){let o=t[s]?t[s].matrixWorld:Dv;ad.multiplyMatrices(o,e[s]),ad.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Hi(e,t,t,de,cn);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let s=t.bones[i],a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new $n),this.bones.push(a),this.boneInverses.push(new Lt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){let a=e[n];t.bones.push(a.uuid);let o=i[n];t.boneInverses.push(o.toArray())}return t}},Ze=class extends Nt{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cs=new Lt,od=new Lt,_a=[],hd=new Pi,kv=new Lt,dr=new gt,fr=new Mi,Wa=class extends gt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ze(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,kv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cs),hd.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(hd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Cs),fr.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(fr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(i),t.ray.intersectsSphere(fr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Cs),od.multiplyMatrices(i,Cs),dr.matrixWorld=od,dr.raycast(t,_a);for(let a=0,o=_a.length;a<o;a++){let h=_a[a];h.instanceId=s,h.object=this,e.push(h)}_a.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ze(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Cr=class extends di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},cd=new w,ld=new w,ud=new Lt,Ph=new Bs,Ma=new Mi,Xs=class extends Te{constructor(t=new oe,e=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)cd.fromBufferAttribute(e,n-1),ld.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=cd.distanceTo(ld);t.setAttribute("lineDistance",new se(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(n),Ma.radius+=s,t.ray.intersectsSphere(Ma)===!1)return;ud.copy(n).invert(),Ph.copy(t.ray).applyMatrix4(ud);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=new w,l=new w,u=new w,f=new w,d=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let b=p,_=y-1;b<_;b+=d){let A=m.getX(b),x=m.getX(b+1);if(c.fromBufferAttribute(g,A),l.fromBufferAttribute(g,x),Ph.distanceSqToSegment(c,l,f,u)>h)continue;f.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let b=p,_=y-1;b<_;b+=d){if(c.fromBufferAttribute(g,b),l.fromBufferAttribute(g,b+1),Ph.distanceSqToSegment(c,l,f,u)>h)continue;f.applyMatrix4(this.matrixWorld);let x=t.ray.origin.distanceTo(f);x<t.near||x>t.far||e.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},dd=new w,fd=new w,qa=class extends Xs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)dd.fromBufferAttribute(e,n),fd.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+dd.distanceTo(fd);t.setAttribute("lineDistance",new se(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xa=class extends Xs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Pr=class extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pd=new Lt,nc=new Bs,wa=new Mi,Ea=new w,js=class extends Te{constructor(t=new oe,e=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(n),wa.radius+=s,t.ray.intersectsSphere(wa)===!1)return;pd.copy(n).invert(),nc.copy(t.ray).applyMatrix4(pd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,v=d;m<v;m++){let g=c.getX(m);Ea.fromBufferAttribute(u,g),md(Ea,g,h,n,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,v=d;m<v;m++)Ea.fromBufferAttribute(u,m),md(Ea,m,h,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function md(r,t,e,i,n,s,a){let o=nc.distanceSqToPoint(r);if(o<e){let h=new w;nc.closestPointToPoint(r,h),h.applyMatrix4(i);let c=n.ray.origin.distanceTo(h);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,object:a})}}var Fi=class extends Qe{constructor(t,e,i,n,s,a,o,h,c){super(t,e,i,n,s,a,o,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,h=s-1,c;for(;o<=h;)if(n=Math.floor(o+(h-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)h=n-1;else{h=n;break}if(n=h,i[n]===a)return n/(s-1);let l=i[n],f=i[n+1]-l,d=(a-l)/f;return(n+d)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),h=e||(a.isVector2?new ct:new w);return h.copy(o).sub(a).normalize(),h}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new w,n=[],s=[],a=[],o=new w,h=new Lt;for(let d=0;d<=t;d++){let m=d/t;n[d]=this.getTangentAt(m,new w)}s[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,l=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);l<=c&&(c=l,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Oe(n[d-1].dot(n[d]),-1,1));s[d].applyMatrix4(h.makeRotationAxis(o,m))}a[d].crossVectors(n[d],s[d])}if(e===!0){let d=Math.acos(Oe(s[0].dot(s[t]),-1,1));d/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(h.makeRotationAxis(n[m],d*m)),a[m].crossVectors(n[m],s[m])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Lr=class extends Ii{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=h}getPoint(t,e){let i=e||new ct,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,h=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=h-this.aX,d=c-this.aY;h=f*l-d*u+this.aX,c=f*u+d*l+this.aY}return i.set(h,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sc=class extends Lr{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fc(){let r=0,t=0,e=0,i=0;function n(s,a,o,h){r=s,t=o,e=-3*s+3*a-2*o-h,i=2*s-2*a+o+h}return{initCatmullRom:function(s,a,o,h,c){n(a,o,c*(o-s),c*(h-a))},initNonuniformCatmullRom:function(s,a,o,h,c,l,u){let f=(a-s)/c-(o-s)/(c+l)+(o-a)/l,d=(o-a)/l-(h-a)/(l+u)+(h-o)/u;f*=l,d*=l,n(a,o,f,d)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var Sa=new w,Lh=new Fc,Fh=new Fc,Ih=new Fc,Fr=class extends Ii{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new w){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:h===0&&o===s-1&&(o=s-2,h=1);let c,l;this.closed||o>0?c=n[(o-1)%s]:(Sa.subVectors(n[0],n[1]).add(n[0]),c=Sa);let u=n[o%s],f=n[(o+1)%s];if(this.closed||o+2<s?l=n[(o+2)%s]:(Sa.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=Sa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(l),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Lh.initNonuniformCatmullRom(c.x,u.x,f.x,l.x,m,v,g),Fh.initNonuniformCatmullRom(c.y,u.y,f.y,l.y,m,v,g),Ih.initNonuniformCatmullRom(c.z,u.z,f.z,l.z,m,v,g)}else this.curveType==="catmullrom"&&(Lh.initCatmullRom(c.x,u.x,f.x,l.x,this.tension),Fh.initCatmullRom(c.y,u.y,f.y,l.y,this.tension),Ih.initCatmullRom(c.z,u.z,f.z,l.z,this.tension));return i.set(Lh.calc(h),Fh.calc(h),Ih.calc(h)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new w().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gd(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,h=r*o;return(2*e-2*i+s+a)*h+(-3*e+3*i-2*s-a)*o+s*r+e}function zv(r,t){let e=1-r;return e*e*t}function Uv(r,t){return 2*(1-r)*r*t}function Nv(r,t){return r*r*t}function yr(r,t,e,i){return zv(r,t)+Uv(r,e)+Nv(r,i)}function Ov(r,t){let e=1-r;return e*e*e*t}function Bv(r,t){let e=1-r;return 3*e*e*r*t}function Hv(r,t){return 3*(1-r)*r*r*t}function Vv(r,t){return r*r*r*t}function _r(r,t,e,i,n){return Ov(r,t)+Bv(r,e)+Hv(r,i)+Vv(r,n)}var ja=class extends Ii{constructor(t=new ct,e=new ct,i=new ct,n=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ct){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(_r(t,n.x,s.x,a.x,o.x),_r(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},rc=class extends Ii{constructor(t=new w,e=new w,i=new w,n=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new w){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(_r(t,n.x,s.x,a.x,o.x),_r(t,n.y,s.y,a.y,o.y),_r(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ya=class extends Ii{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ac=class extends Ii{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends Ii{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(yr(t,n.x,s.x,a.x),yr(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oc=class extends Ii{constructor(t=new w,e=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new w){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(yr(t,n.x,s.x,a.x),yr(t,n.y,s.y,a.y),yr(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends Ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,h=n[a===0?a:a-1],c=n[a],l=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(gd(o,h.x,c.x,l.x,u.x),gd(o,h.y,c.y,l.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new ct().fromArray(n))}return this}},hc=Object.freeze({__proto__:null,ArcCurve:sc,CatmullRomCurve3:Fr,CubicBezierCurve:ja,CubicBezierCurve3:rc,EllipseCurve:Lr,LineCurve:Ya,LineCurve3:ac,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:oc,SplineCurve:Qa}),cc=class extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],h=o.getLength(),c=h===0?0:1-a/h;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(o);for(let c=0;c<h.length;c++){let l=h[c];i&&i.equals(l)||(e.push(l),i=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new hc[n.type]().fromJSON(n))}return this}},Ir=class extends cc{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ya(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Ka(this.currentPoint.clone(),new ct(t,e),new ct(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new ja(this.currentPoint.clone(),new ct(t,e),new ct(i,n),new ct(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Qa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+o,e+h,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,h){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,i,n,s,a,o,h),this}absellipse(t,e,i,n,s,a,o,h){let c=new Lr(t,e,i,n,s,a,o,h);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ys=class r extends oe{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Oe(n,0,Math.PI*2);let s=[],a=[],o=[],h=[],c=[],l=1/e,u=new w,f=new ct,d=new w,m=new w,v=new w,g=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-g,d.z=p*0,v.copy(d),d.normalize(),h.push(d.x,d.y,d.z);break;case t.length-1:h.push(v.x,v.y,v.z);break;default:g=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),h.push(d.x,d.y,d.z),v.copy(m)}for(let y=0;y<=e;y++){let b=i+y*l*n,_=Math.sin(b),A=Math.cos(b);for(let x=0;x<=t.length-1;x++){u.x=t[x].x*_,u.y=t[x].y,u.z=t[x].x*A,a.push(u.x,u.y,u.z),f.x=y/e,f.y=x/(t.length-1),o.push(f.x,f.y);let E=h[3*x+0]*_,T=h[3*x+1],M=h[3*x+0]*A;c.push(E,T,M)}}for(let y=0;y<e;y++)for(let b=0;b<t.length-1;b++){let _=b+y*t.length,A=_,x=_+t.length,E=_+t.length+1,T=_+1;s.push(A,x,T),s.push(E,T,x)}this.setIndex(s),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},fn=class r extends Ys{constructor(t=1,e=1,i=4,n=8){let s=new Ir;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}},Ks=class r extends oe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],h=[],c=new w,l=new ct;a.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*n;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[f]/t+1)/2,l.y=(a[f+1]/t+1)/2,h.push(l.x,l.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pe=class r extends oe{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:h};let c=this;n=Math.floor(n),s=Math.floor(s);let l=[],u=[],f=[],d=[],m=0,v=[],g=i/2,p=0;y(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(l),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function y(){let _=new w,A=new w,x=0,E=(e-t)/i;for(let T=0;T<=s;T++){let M=[],S=T/s,D=S*(e-t)+t;for(let G=0;G<=n;G++){let K=G/n,O=K*h+o,P=Math.sin(O),F=Math.cos(O);A.x=D*P,A.y=-S*i+g,A.z=D*F,u.push(A.x,A.y,A.z),_.set(P,E,F).normalize(),f.push(_.x,_.y,_.z),d.push(K,1-S),M.push(m++)}v.push(M)}for(let T=0;T<n;T++)for(let M=0;M<s;M++){let S=v[M][T],D=v[M+1][T],G=v[M+1][T+1],K=v[M][T+1];l.push(S,D,K),l.push(D,G,K),x+=6}c.addGroup(p,x,0),p+=x}function b(_){let A=m,x=new ct,E=new w,T=0,M=_===!0?t:e,S=_===!0?1:-1;for(let G=1;G<=n;G++)u.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),m++;let D=m;for(let G=0;G<=n;G++){let O=G/n*h+o,P=Math.cos(O),F=Math.sin(O);E.x=M*F,E.y=g*S,E.z=M*P,u.push(E.x,E.y,E.z),f.push(0,S,0),x.x=P*.5+.5,x.y=F*.5*S+.5,d.push(x.x,x.y),m++}for(let G=0;G<n;G++){let K=A+G,O=D+G;_===!0?l.push(O,O+1,K):l.push(O+1,O,K),T+=3}c.addGroup(p,T,_===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var lc=class r extends oe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),c(i),l(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new w,_=new w,A=new w;for(let x=0;x<e.length;x+=3)d(e[x+0],b),d(e[x+1],_),d(e[x+2],A),h(b,_,A,y)}function h(y,b,_,A){let x=A+1,E=[];for(let T=0;T<=x;T++){E[T]=[];let M=y.clone().lerp(_,T/x),S=b.clone().lerp(_,T/x),D=x-T;for(let G=0;G<=D;G++)G===0&&T===x?E[T][G]=M:E[T][G]=M.clone().lerp(S,G/D)}for(let T=0;T<x;T++)for(let M=0;M<2*(x-T)-1;M++){let S=Math.floor(M/2);M%2===0?(f(E[T][S+1]),f(E[T+1][S]),f(E[T][S])):(f(E[T][S+1]),f(E[T+1][S+1]),f(E[T+1][S]))}}function c(y){let b=new w;for(let _=0;_<s.length;_+=3)b.x=s[_+0],b.y=s[_+1],b.z=s[_+2],b.normalize().multiplyScalar(y),s[_+0]=b.x,s[_+1]=b.y,s[_+2]=b.z}function l(){let y=new w;for(let b=0;b<s.length;b+=3){y.x=s[b+0],y.y=s[b+1],y.z=s[b+2];let _=g(y)/2/Math.PI+.5,A=p(y)/Math.PI+.5;a.push(_,1-A)}m(),u()}function u(){for(let y=0;y<a.length;y+=6){let b=a[y+0],_=a[y+2],A=a[y+4],x=Math.max(b,_,A),E=Math.min(b,_,A);x>.9&&E<.1&&(b<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,b){let _=y*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function m(){let y=new w,b=new w,_=new w,A=new w,x=new ct,E=new ct,T=new ct;for(let M=0,S=0;M<s.length;M+=9,S+=6){y.set(s[M+0],s[M+1],s[M+2]),b.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),x.set(a[S+0],a[S+1]),E.set(a[S+2],a[S+3]),T.set(a[S+4],a[S+5]),A.copy(y).add(b).add(_).divideScalar(3);let D=g(A);v(x,S+0,y,D),v(E,S+2,b,D),v(T,S+4,_,D)}}function v(y,b,_,A){A<0&&y.x===1&&(a[b]=y.x-1),_.x===0&&_.z===0&&(a[b]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var Dr=class extends Ir{constructor(t){super(t),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Ir().fromJSON(n))}return this}},Gv={triangulate:function(r,t,e=2){let i=t&&t.length,n=i?t[0]*e:r.length,s=Yd(r,0,n,e,!0),a=[];if(!s||s.next===s.prev)return a;let o,h,c,l,u,f,d;if(i&&(s=Yv(r,t,s,e)),r.length>80*e){o=c=r[0],h=l=r[1];for(let m=e;m<n;m+=e)u=r[m],f=r[m+1],u<o&&(o=u),f<h&&(h=f),u>c&&(c=u),f>l&&(l=f);d=Math.max(c-o,l-h),d=d!==0?32767/d:0}return kr(s,a,e,o,h,d,0),a}};function Yd(r,t,e,i,n){let s,a;if(n===rx(r,t,e,i)>0)for(s=t;s<e;s+=i)a=bd(s,r[s],r[s+1],a);else for(s=e-i;s>=t;s-=i)a=bd(s,r[s],r[s+1],a);return a&&co(a,a.next)&&(Ur(a),a=a.next),a}function ts(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(co(e,e.next)||Se(e.prev,e,e.next)===0)){if(Ur(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function kr(r,t,e,i,n,s,a){if(!r)return;!a&&s&&$v(r,i,n,s);let o=r,h,c;for(;r.prev!==r.next;){if(h=r.prev,c=r.next,s?qv(r,i,n,s):Wv(r)){t.push(h.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Ur(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Xv(ts(r),t,e),kr(r,t,e,i,n,s,2)):a===2&&jv(r,t,e,i,n,s):kr(ts(r),t,e,i,n,s,1);break}}}function Wv(r){let t=r.prev,e=r,i=r.next;if(Se(t,e,i)>=0)return!1;let n=t.x,s=e.x,a=i.x,o=t.y,h=e.y,c=i.y,l=n<s?n<a?n:a:s<a?s:a,u=o<h?o<c?o:c:h<c?h:c,f=n>s?n>a?n:a:s>a?s:a,d=o>h?o>c?o:c:h>c?h:c,m=i.next;for(;m!==t;){if(m.x>=l&&m.x<=f&&m.y>=u&&m.y<=d&&Fs(n,o,s,h,a,c,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function qv(r,t,e,i){let n=r.prev,s=r,a=r.next;if(Se(n,s,a)>=0)return!1;let o=n.x,h=s.x,c=a.x,l=n.y,u=s.y,f=a.y,d=o<h?o<c?o:c:h<c?h:c,m=l<u?l<f?l:f:u<f?u:f,v=o>h?o>c?o:c:h>c?h:c,g=l>u?l>f?l:f:u>f?u:f,p=uc(d,m,t,e,i),y=uc(v,g,t,e,i),b=r.prevZ,_=r.nextZ;for(;b&&b.z>=p&&_&&_.z<=y;){if(b.x>=d&&b.x<=v&&b.y>=m&&b.y<=g&&b!==n&&b!==a&&Fs(o,l,h,u,c,f,b.x,b.y)&&Se(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==n&&_!==a&&Fs(o,l,h,u,c,f,_.x,_.y)&&Se(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=v&&b.y>=m&&b.y<=g&&b!==n&&b!==a&&Fs(o,l,h,u,c,f,b.x,b.y)&&Se(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=g&&_!==n&&_!==a&&Fs(o,l,h,u,c,f,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Xv(r,t,e){let i=r;do{let n=i.prev,s=i.next.next;!co(n,s)&&Kd(n,i,i.next,s)&&zr(n,s)&&zr(s,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Ur(i),Ur(i.next),i=r=s),i=i.next}while(i!==r);return ts(i)}function jv(r,t,e,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ix(a,o)){let h=Qd(a,o);a=ts(a,a.next),h=ts(h,h.next),kr(a,t,e,i,n,s,0),kr(h,t,e,i,n,s,0);return}o=o.next}a=a.next}while(a!==r)}function Yv(r,t,e,i){let n=[],s,a,o,h,c;for(s=0,a=t.length;s<a;s++)o=t[s]*i,h=s<a-1?t[s+1]*i:r.length,c=Yd(r,o,h,i,!1),c===c.next&&(c.steiner=!0),n.push(ex(c));for(n.sort(Kv),s=0;s<n.length;s++)e=Qv(n[s],e);return e}function Kv(r,t){return r.x-t.x}function Qv(r,t){let e=Zv(r,t);if(!e)return t;let i=Qd(e,r);return ts(i,i.next),ts(e,e.next)}function Zv(r,t){let e=t,i=-1/0,n,s=r.x,a=r.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>i&&(i=f,n=e.x<e.next.x?e:e.next,f===s))return n}e=e.next}while(e!==t);if(!n)return null;let o=n,h=n.x,c=n.y,l=1/0,u;e=n;do s>=e.x&&e.x>=h&&s!==e.x&&Fs(a<c?s:i,a,h,c,a<c?i:s,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(s-e.x),zr(e,r)&&(u<l||u===l&&(e.x>n.x||e.x===n.x&&Jv(n,e)))&&(n=e,l=u)),e=e.next;while(e!==o);return n}function Jv(r,t){return Se(r.prev,r,t.prev)<0&&Se(t.next,r,r.next)<0}function $v(r,t,e,i){let n=r;do n.z===0&&(n.z=uc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,tx(n)}function tx(r){let t,e,i,n,s,a,o,h,c=1;do{for(e=r,r=null,s=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(h=c;o>0||h>0&&i;)o!==0&&(h===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,o--):(n=i,i=i.nextZ,h--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;e=i}s.nextZ=null,c*=2}while(a>1);return r}function uc(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function ex(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Fs(r,t,e,i,n,s,a,o){return(n-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(n-a)*(i-o)}function ix(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!nx(r,t)&&(zr(r,t)&&zr(t,r)&&sx(r,t)&&(Se(r.prev,r,t.prev)||Se(r,t.prev,t))||co(r,t)&&Se(r.prev,r,r.next)>0&&Se(t.prev,t,t.next)>0)}function Se(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function co(r,t){return r.x===t.x&&r.y===t.y}function Kd(r,t,e,i){let n=Aa(Se(r,t,e)),s=Aa(Se(r,t,i)),a=Aa(Se(e,i,r)),o=Aa(Se(e,i,t));return!!(n!==s&&a!==o||n===0&&Ta(r,e,t)||s===0&&Ta(r,i,t)||a===0&&Ta(e,r,i)||o===0&&Ta(e,t,i))}function Ta(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Aa(r){return r>0?1:r<0?-1:0}function nx(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Kd(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function zr(r,t){return Se(r.prev,r,r.next)<0?Se(r,t,r.next)>=0&&Se(r,r.prev,t)>=0:Se(r,t,r.prev)<0||Se(r,r.next,t)<0}function sx(r,t){let e=r,i=!1,n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function Qd(r,t){let e=new dc(r.i,r.x,r.y),i=new dc(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function bd(r,t,e,i){let n=new dc(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Ur(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function dc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rx(r,t,e,i){let n=0;for(let s=t,a=e-i;s<e;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}var Mr=class r{static area(t){let e=t.length,i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let i=[],n=[],s=[];vd(t),xd(i,t);let a=t.length;e.forEach(vd);for(let h=0;h<e.length;h++)n.push(a),a+=e[h].length,xd(i,e[h]);let o=Gv.triangulate(i,n);for(let h=0;h<o.length;h+=3)s.push(o.slice(h,h+3));return s}};function vd(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function xd(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Za=class r extends oe{constructor(t=new Dr([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],s=[];for(let o=0,h=t.length;o<h;o++){let c=t[o];a(c)}this.setAttribute("position",new se(n,3)),this.setAttribute("uv",new se(s,2)),this.computeVertexNormals();function a(o){let h=[],c=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:ax,b,_=!1,A,x,E,T;p&&(b=p.getSpacedPoints(l),_=!0,f=!1,A=p.computeFrenetFrames(l,!1),x=new w,E=new w,T=new w),f||(g=0,d=0,m=0,v=0);let M=o.extractPoints(c),S=M.shape,D=M.holes;if(!Mr.isClockWise(S)){S=S.reverse();for(let H=0,dt=D.length;H<dt;H++){let at=D[H];Mr.isClockWise(at)&&(D[H]=at.reverse())}}let K=Mr.triangulateShape(S,D),O=S;for(let H=0,dt=D.length;H<dt;H++){let at=D[H];S=S.concat(at)}function P(H,dt,at){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(dt,at)}let F=S.length,z=K.length;function U(H,dt,at){let ft,st,At,_t=H.x-dt.x,L=H.y-dt.y,C=at.x-H.x,Q=at.y-H.y,lt=_t*_t+L*L,mt=_t*Q-L*C;if(Math.abs(mt)>Number.EPSILON){let vt=Math.sqrt(lt),It=Math.sqrt(C*C+Q*Q),Y=dt.x-L/vt,ut=dt.y+_t/vt,Mt=at.x-Q/It,zt=at.y+C/It,xt=((Mt-Y)*Q-(zt-ut)*C)/(_t*Q-L*C);ft=Y+_t*xt-H.x,st=ut+L*xt-H.y;let he=ft*ft+st*st;if(he<=2)return new ct(ft,st);At=Math.sqrt(he/2)}else{let vt=!1;_t>Number.EPSILON?C>Number.EPSILON&&(vt=!0):_t<-Number.EPSILON?C<-Number.EPSILON&&(vt=!0):Math.sign(L)===Math.sign(Q)&&(vt=!0),vt?(ft=-L,st=_t,At=Math.sqrt(lt)):(ft=_t,st=L,At=Math.sqrt(lt/2))}return new ct(ft/At,st/At)}let N=[];for(let H=0,dt=O.length,at=dt-1,ft=H+1;H<dt;H++,at++,ft++)at===dt&&(at=0),ft===dt&&(ft=0),N[H]=U(O[H],O[at],O[ft]);let k=[],W,j=N.concat();for(let H=0,dt=D.length;H<dt;H++){let at=D[H];W=[];for(let ft=0,st=at.length,At=st-1,_t=ft+1;ft<st;ft++,At++,_t++)At===st&&(At=0),_t===st&&(_t=0),W[ft]=U(at[ft],at[At],at[_t]);k.push(W),j=j.concat(W)}for(let H=0;H<g;H++){let dt=H/g,at=d*Math.cos(dt*Math.PI/2),ft=m*Math.sin(dt*Math.PI/2)+v;for(let st=0,At=O.length;st<At;st++){let _t=P(O[st],N[st],ft);Z(_t.x,_t.y,-at)}for(let st=0,At=D.length;st<At;st++){let _t=D[st];W=k[st];for(let L=0,C=_t.length;L<C;L++){let Q=P(_t[L],W[L],ft);Z(Q.x,Q.y,-at)}}}let V=m+v;for(let H=0;H<F;H++){let dt=f?P(S[H],j[H],V):S[H];_?(E.copy(A.normals[0]).multiplyScalar(dt.x),x.copy(A.binormals[0]).multiplyScalar(dt.y),T.copy(b[0]).add(E).add(x),Z(T.x,T.y,T.z)):Z(dt.x,dt.y,0)}for(let H=1;H<=l;H++)for(let dt=0;dt<F;dt++){let at=f?P(S[dt],j[dt],V):S[dt];_?(E.copy(A.normals[H]).multiplyScalar(at.x),x.copy(A.binormals[H]).multiplyScalar(at.y),T.copy(b[H]).add(E).add(x),Z(T.x,T.y,T.z)):Z(at.x,at.y,u/l*H)}for(let H=g-1;H>=0;H--){let dt=H/g,at=d*Math.cos(dt*Math.PI/2),ft=m*Math.sin(dt*Math.PI/2)+v;for(let st=0,At=O.length;st<At;st++){let _t=P(O[st],N[st],ft);Z(_t.x,_t.y,u+at)}for(let st=0,At=D.length;st<At;st++){let _t=D[st];W=k[st];for(let L=0,C=_t.length;L<C;L++){let Q=P(_t[L],W[L],ft);_?Z(Q.x,Q.y+b[l-1].y,b[l-1].x+at):Z(Q.x,Q.y,u+at)}}}B(),X();function B(){let H=n.length/3;if(f){let dt=0,at=F*dt;for(let ft=0;ft<z;ft++){let st=K[ft];it(st[2]+at,st[1]+at,st[0]+at)}dt=l+g*2,at=F*dt;for(let ft=0;ft<z;ft++){let st=K[ft];it(st[0]+at,st[1]+at,st[2]+at)}}else{for(let dt=0;dt<z;dt++){let at=K[dt];it(at[2],at[1],at[0])}for(let dt=0;dt<z;dt++){let at=K[dt];it(at[0]+F*l,at[1]+F*l,at[2]+F*l)}}i.addGroup(H,n.length/3-H,0)}function X(){let H=n.length/3,dt=0;$(O,dt),dt+=O.length;for(let at=0,ft=D.length;at<ft;at++){let st=D[at];$(st,dt),dt+=st.length}i.addGroup(H,n.length/3-H,1)}function $(H,dt){let at=H.length;for(;--at>=0;){let ft=at,st=at-1;st<0&&(st=H.length-1);for(let At=0,_t=l+g*2;At<_t;At++){let L=F*At,C=F*(At+1),Q=dt+ft+L,lt=dt+st+L,mt=dt+st+C,vt=dt+ft+C;pt(Q,lt,mt,vt)}}}function Z(H,dt,at){h.push(H),h.push(dt),h.push(at)}function it(H,dt,at){rt(H),rt(dt),rt(at);let ft=n.length/3,st=y.generateTopUV(i,n,ft-3,ft-2,ft-1);Tt(st[0]),Tt(st[1]),Tt(st[2])}function pt(H,dt,at,ft){rt(H),rt(dt),rt(ft),rt(dt),rt(at),rt(ft);let st=n.length/3,At=y.generateSideWallUV(i,n,st-6,st-3,st-2,st-1);Tt(At[0]),Tt(At[1]),Tt(At[3]),Tt(At[1]),Tt(At[2]),Tt(At[3])}function rt(H){n.push(h[H*3+0]),n.push(h[H*3+1]),n.push(h[H*3+2])}function Tt(H){s.push(H.x),s.push(H.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return ox(e,i,t)}static fromJSON(t,e){let i=[];for(let s=0,a=t.shapes.length;s<a;s++){let o=e[t.shapes[s]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new hc[n.type]().fromJSON(n)),new r(i,t.options)}},ax={generateTopUV:function(r,t,e,i,n){let s=t[e*3],a=t[e*3+1],o=t[i*3],h=t[i*3+1],c=t[n*3],l=t[n*3+1];return[new ct(s,a),new ct(o,h),new ct(c,l)]},generateSideWallUV:function(r,t,e,i,n,s){let a=t[e*3],o=t[e*3+1],h=t[e*3+2],c=t[i*3],l=t[i*3+1],u=t[i*3+2],f=t[n*3],d=t[n*3+1],m=t[n*3+2],v=t[s*3],g=t[s*3+1],p=t[s*3+2];return Math.abs(o-l)<Math.abs(a-c)?[new ct(a,1-h),new ct(c,1-u),new ct(f,1-m),new ct(v,1-p)]:[new ct(o,1-h),new ct(l,1-u),new ct(d,1-m),new ct(g,1-p)]}};function ox(r,t,e){if(e.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){let s=r[i];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ja=class r extends lc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Yi=class r extends oe{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let h=Math.min(a+o,Math.PI),c=0,l=[],u=new w,f=new w,d=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){let y=[],b=p/i,_=0;p===0&&a===0?_=.5/e:p===i&&h===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){let x=A/e;u.x=-t*Math.cos(n+x*s)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(n+x*s)*Math.sin(a+b*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(x+_,1-b),y.push(c++)}l.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let b=l[p][y+1],_=l[p][y],A=l[p+1][y],x=l[p+1][y+1];(p!==0||a>0)&&d.push(b,_,x),(p!==i-1||h<Math.PI)&&d.push(_,A,x)}this.setIndex(d),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var pn=class r extends oe{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],h=[],c=[],l=new w,u=new w,f=new w;for(let d=0;d<=i;d++)for(let m=0;m<=n;m++){let v=m/n*s,g=d/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),l.x=t*Math.cos(v),l.y=t*Math.sin(v),f.subVectors(u,l).normalize(),h.push(f.x,f.y,f.z),c.push(m/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=n;m++){let v=(n+1)*d+m-1,g=(n+1)*(d-1)+m-1,p=(n+1)*(d-1)+m,y=(n+1)*d+m;a.push(v,g,y),a.push(g,p,y)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Fe=class extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},pi=class extends Fe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Ra(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function hx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function cx(r){function t(n,s){return r[n]-r[s]}let e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function yd(r,t,e){let i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){let o=e[s]*t;for(let h=0;h!==t;++h)n[a++]=r[o+h]}return n}function Zd(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=r[n++];while(s!==void 0)}var Cn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let h=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fc=class extends Cn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lu,endingEnd:lu}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],h=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case uu:s=t,o=2*e-i;break;case du:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(h===void 0)switch(this.getSettings_().endingEnd){case uu:a=t,h=2*i-e;break;case du:a=1,h=i+n[1]-n[0];break;default:a=t-1,h=e}let c=(i-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(h-i),this._offsetPrev=s*l,this._offsetNext=a*l}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,l=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-e)/(n-e),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,y=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,b=(-1-d)*g+(1.5+d)*v+.5*m,_=d*g-d*v;for(let A=0;A!==o;++A)s[A]=p*a[l+A]+y*a[c+A]+b*a[h+A]+_*a[u+A];return s}},pc=class extends Cn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,l=(i-e)/(n-e),u=1-l;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[h+f]*l;return s}},mc=class extends Cn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Di=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ra(e,this.TimeBufferType),this.values=Ra(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ra(t.times,Array),values:Ra(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ns:e=this.InterpolantFactoryMethodDiscrete;break;case Kn:e=this.InterpolantFactoryMethodLinear;break;case sh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Kn;case this.InterpolantFactoryMethodSmooth:return sh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let h=i[o];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(a!==null&&a>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,h,a),t=!1;break}a=h}if(n!==void 0&&hx(n))for(let o=0,h=n.length;o!==h;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===sh,s=t.length-1,a=1;for(let o=1;o<s;++o){let h=!1,c=t[o],l=t[o+1];if(c!==l&&(o!==1||c!==t[0]))if(n)h=!0;else{let u=o*i,f=u-i,d=u+i;for(let m=0;m!==i;++m){let v=e[u+m];if(v!==e[f+m]||v!==e[d+m]){h=!0;break}}}if(h){if(o!==a){t[a]=t[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,h=a*i,c=0;c!==i;++c)e[h+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=Kn;var Pn=class extends Di{};Pn.prototype.ValueTypeName="bool";Pn.prototype.ValueBufferType=Array;Pn.prototype.DefaultInterpolation=Ns;Pn.prototype.InterpolantFactoryMethodLinear=void 0;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends Di{};$a.prototype.ValueTypeName="color";var mn=class extends Di{};mn.prototype.ValueTypeName="number";var gc=class extends Cn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(i-e)/(n-e),c=t*o;for(let l=c+o;c!==l;c+=4)wt.slerpFlat(s,0,a,c-o,a,c,h);return s}},Ki=class extends Di{InterpolantFactoryMethodLinear(t){return new gc(this.times,this.values,this.getValueSize(),t)}};Ki.prototype.ValueTypeName="quaternion";Ki.prototype.DefaultInterpolation=Kn;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ln=class extends Di{};Ln.prototype.ValueTypeName="string";Ln.prototype.ValueBufferType=Array;Ln.prototype.DefaultInterpolation=Ns;Ln.prototype.InterpolantFactoryMethodLinear=void 0;Ln.prototype.InterpolantFactoryMethodSmooth=void 0;var gn=class extends Di{};gn.prototype.ValueTypeName="vector";var to=class{constructor(t,e=-1,i,n=gp){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=Ci(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(ux(i[a]).scale(n));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){let e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=i.length;s!==a;++s)e.push(Di.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){let s=e.length,a=[];for(let o=0;o<s;o++){let h=[],c=[];h.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let l=cx(h);h=yd(h,1,l),c=yd(c,1,l),!n&&h[0]===0&&(h.push(s),c.push(c[0])),a.push(new mn(".morphTargetInfluences["+e[o].name+"]",h,c).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){let n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,h=t.length;o<h;o++){let c=t[o],l=c.name.match(s);if(l&&l.length>1){let u=l[1],f=n[u];f||(n[u]=f=[]),f.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,f,d,m,v){if(d.length!==0){let g=[],p=[];Zd(d,g,p,m),g.length!==0&&v.push(new u(f,g,p))}},n=[],s=t.name||"default",a=t.fps||30,o=t.blendMode,h=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let v=0;v<f[m].morphTargets.length;v++)d[f[m].morphTargets[v]]=-1;for(let v in d){let g=[],p=[];for(let y=0;y!==f[m].morphTargets.length;++y){let b=f[m];g.push(b.time),p.push(b.morphTarget===v?1:0)}n.push(new mn(".morphTargetInfluence["+v+"]",g,p))}h=d.length*a}else{let d=".bones["+e[u].name+"]";i(gn,d+".position",f,"pos",n),i(Ki,d+".quaternion",f,"rot",n),i(gn,d+".scale",f,"scl",n)}}return n.length===0?null:new this(s,h,n,o)}resetDuration(){let t=this.tracks,e=0;for(let i=0,n=t.length;i!==n;++i){let s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function lx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mn;case"vector":case"vector2":case"vector3":case"vector4":return gn;case"color":return $a;case"quaternion":return Ki;case"bool":case"boolean":return Pn;case"string":return Ln}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function ux(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=lx(r.type);if(r.times===void 0){let e=[],i=[];Zd(r.keys,e,i,"value"),r.times=e,r.values=i}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}var Sn={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},bc=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,h,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(l){o++,s===!1&&n.onStart!==void 0&&n.onStart(l,a,o),s=!0},this.itemEnd=function(l){a++,n.onProgress!==void 0&&n.onProgress(l,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(l){n.onError!==void 0&&n.onError(l)},this.resolveURL=function(l){return h?h(l):l},this.setURLModifier=function(l){return h=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){let u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return m}return null}}},dx=new bc,bn=class{constructor(t){this.manager=t!==void 0?t:dx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bn.DEFAULT_MATERIAL_NAME="__DEFAULT";var an={},vc=class extends Error{constructor(t,e){super(t),this.response=e}},Nr=class extends bn{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=Sn.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(an[t]!==void 0){an[t].push({onLoad:e,onProgress:i,onError:n});return}an[t]=[],an[t].push({onLoad:e,onProgress:i,onError:n});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,h=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let l=an[t],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,m=d!==0,v=0,g=new ReadableStream({start(p){y();function y(){u.read().then(({done:b,value:_})=>{if(b)p.close();else{v+=_.byteLength;let A=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:d});for(let x=0,E=l.length;x<E;x++){let T=l[x];T.onProgress&&T.onProgress(A)}p.enqueue(_),y()}})}}});return new Response(g)}else throw new vc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(h){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Sn.add(t,c);let l=an[t];delete an[t];for(let u=0,f=l.length;u<f;u++){let d=l[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let l=an[t];if(l===void 0)throw this.manager.itemError(t),c;delete an[t];for(let u=0,f=l.length;u<f;u++){let d=l[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var xc=class extends bn{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=Sn.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let o=Sr("img");function h(){l(),Sn.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){l(),n&&n(u),s.manager.itemError(t),s.manager.itemEnd(t)}function l(){o.removeEventListener("load",h,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}};var eo=class extends bn{constructor(t){super(t)}load(t,e,i,n){let s=new Qe,a=new xc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}},Or=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Dh=new Lt,_d=new w,Md=new w,Br=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;_d.setFromMatrixPosition(t.matrixWorld),e.position.copy(_d),Md.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Md),e.updateMatrixWorld(),Dh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},yc=class extends Br{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Os*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Qs=class extends Or{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new yc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},wd=new Lt,pr=new w,kh=new w,_c=class extends Br{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new qt(2,1,1,1),new qt(0,1,1,1),new qt(3,1,1,1),new qt(1,1,1,1),new qt(3,0,1,1),new qt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),pr.setFromMatrixPosition(t.matrixWorld),i.position.copy(pr),kh.copy(i.position),kh.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(kh),i.updateMatrixWorld(),n.makeTranslation(-pr.x,-pr.y,-pr.z),wd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd)}},io=class extends Or{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new _c}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Mc=class extends Br{constructor(){super(new fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},es=class extends Or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Mc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Fn=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,n=t.length;i<n;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Qi=class extends oe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var no=class extends bn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=Sn.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let h=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Sn.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){n&&n(c),Sn.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Sn.add(t,h),s.manager.itemStart(t)}};var Ic="\\[\\]\\.:\\/",fx=new RegExp("["+Ic+"]","g"),Dc="[^"+Ic+"]",px="[^"+Ic.replace("\\.","")+"]",mx=/((?:WC+[\/:])*)/.source.replace("WC",Dc),gx=/(WCOD+)?/.source.replace("WCOD",px),bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),vx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),xx=new RegExp("^"+mx+gx+bx+vx+"$"),yx=["material","materials","bones","map"],wc=class{constructor(t,e,i){let n=i||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ve=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fx,"")}static parseTrackName(t){let e=xx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);yx.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let h=i(o.children);if(h)return h}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=wc;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);function Je(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ei=(r,t,e)=>r<t?t:r>e?e:r,bt=r=>r<0?0:r>1?1:r,yt=(r,t,e)=>r+(t-r)*e;function Re(r,t,e){let i=bt((e-r)/(t-r));return i*i*(3-2*i)}function si(r,t=0){let e=Math.floor(r),i=r-e,n=a=>{let o=Math.sin((a+t*57.13)*127.1)*43758.5453;return o-Math.floor(o)},s=i*i*(3-2*i);return n(e)*(1-s)+n(e+1)*s}var ye=24,gi=2,_x=9.81,kc=Math.PI*2,Mx=[[300,3,.8,.3,0],[236,3.2,.8,.3,0],[187,3,.8,.34,0],[151,2.6,.8,.34,0],[122,2.1,.78,.38,0],[99,1.6,.78,.38,0],[78,1.05,.64,.7,1],[63,.9,.64,.7,1],[50,.75,.64,.75,1],[40,.6,.62,.75,1],[31,.48,.62,.8,1],[24.5,.38,.6,.8,1],[19,.3,.6,.85,1],[15,.235,.58,.85,1],[12.1,.17,.5,1.15,2],[9.3,.13,.5,1.15,2],[7.1,.1,.48,1.2,2],[5.4,.077,.48,1.2,2],[4.1,.058,.46,1.25,2],[3.2,.045,.46,1.25,2],[2.5,.035,.44,1.3,2],[1.9,.027,.44,1.3,2],[1.5,.021,.42,1.35,2],[1.15,.016,.42,1.35,2]],zc=class{constructor(){this.active=!1,this.ox=0,this.oz=0,this.dx=1,this.dz=0,this.speed=14,this.width=150,this.hMax=12,this.t0=0,this.tBreak=14,this.age=0,this.s=0,this.height=0,this.front=14,this.frontMin=8.5,this.seed=0,this.mega=!1,this.back=55,this.curl=0,this.brk=0,this.turb=0,this.roll=0}},lo=class{constructor(t=20261112){this.time=0,this.storm=1,this.windAngle=0;let e=Je(t);this.dirX=new Float64Array(ye),this.dirZ=new Float64Array(ye),this.k=new Float64Array(ye),this.omega=new Float64Array(ye),this.phase0=new Float64Array(ye),this.amp0=new Float64Array(ye),this.amp=new Float64Array(ye),this.steep=new Float64Array(ye),this.len=new Float64Array(ye),this.band=new Uint8Array(ye),this.phT=new Float64Array(ye),this.bodyW=new Float64Array(ye);for(let i=0;i<ye;i++){let[n,s,a,o,h]=Mx[i],c=1+(e()-.5)*.06,l=n*c,u=i%2===0?1:-1,f=this.windAngle+u*o*(.25+.75*e());this.dirX[i]=Math.cos(f),this.dirZ[i]=Math.sin(f),this.len[i]=l,this.k[i]=kc/l,this.omega[i]=Math.sqrt(_x*this.k[i]),this.phase0[i]=e()*kc,this.amp0[i]=s*(.9+e()*.2),this.steep[i]=a,this.band[i]=h,this.bodyW[i]=1/(1+Math.pow(this.k[i]*.95,2))}this.uA=new Float32Array(ye*4),this.uB=new Float32Array(ye*4),this.breakers=[];for(let i=0;i<gi;i++)this.breakers.push(new zc);this.uBrkA=new Float32Array(gi*4),this.uBrkB=new Float32Array(gi*4),this.uBrkC=new Float32Array(gi*4),this.sigHeight=0,this.setStorm(1),this.update(0)}setStorm(t){this.storm=bt(t);let e=0,i=1+.2*Math.sin(this.time*.105)*Math.sin(this.time*.041+1.3);for(let n=0;n<ye;n++){let s=this.band[n],a=s===0?yt(.3,1,this.storm):s===1?yt(.22,1,this.storm):yt(.4,1,this.storm);this.amp[n]=this.amp0[n]*a*(s<2?i:1),e+=this.amp[n]*this.amp[n]*.5}this.sigHeight=4*Math.sqrt(e)}update(t){this.time+=t;let e=this.time;for(let i=0;i<ye;i++){this.phT[i]=(this.omega[i]*e+this.phase0[i])%kc;let n=i*4;this.uA[n]=this.dirX[i],this.uA[n+1]=this.dirZ[i],this.uA[n+2]=this.k[i],this.uA[n+3]=this.amp[i],this.uB[n]=this.phT[i],this.uB[n+1]=this.steep[i],this.uB[n+2]=this.len[i],this.uB[n+3]=0}for(let i=0;i<gi;i++){let n=this.breakers[i],s=i*4;if(n.active){n.age=e-n.t0,n.s=n.speed*n.age;let o=Re(0,n.tBreak*.85,n.age),h=n.age-n.tBreak;n.brk=bt(h/1.6);let c=h>0?Math.exp(-h/(n.mega?5:3)):1;n.height=n.hMax*o*(.16+.84*c),n.front=yt(26,n.frontMin,Re(.3,1,o)),n.curl=Re(-2.2,.3,h)*(h>0?Math.exp(-h/2.2):1),n.turb=h>0?Math.min(1,h/1)*Math.exp(-Math.max(0,h-2.5)/(n.mega?8:5)):0,n.roll=h>0?n.brk*Math.exp(-h/(n.mega?5.5:3.2)):0,h>(n.mega?30:20)&&(n.active=!1)}let a=n.active?1:0;this.uBrkA[s]=n.ox,this.uBrkA[s+1]=n.oz,this.uBrkA[s+2]=n.dx,this.uBrkA[s+3]=n.dz,this.uBrkB[s]=n.s,this.uBrkB[s+1]=n.height*a,this.uBrkB[s+2]=n.front,this.uBrkB[s+3]=n.back,this.uBrkC[s]=n.width,this.uBrkC[s+1]=n.curl*a,this.uBrkC[s+2]=n.brk*a,this.uBrkC[s+3]=n.turb*a}}spawnBreaker(t,e,i={}){let n=this.breakers.find(o=>!o.active);if(!n)return null;let s=this.windAngle+(i.angleOffset||0);n.dx=Math.cos(s),n.dz=Math.sin(s),n.speed=i.speed||14;let a=i.lead||15;return n.ox=t-n.dx*n.speed*a,n.oz=e-n.dz*n.speed*a,n.seed=n.ox*.013+n.oz*.017,n.width=i.width||150,n.hMax=i.height||12,n.back=i.back||55,n.frontMin=i.frontMin||8.5,n.mega=!!i.mega,n.t0=this.time,n.tBreak=a+(i.breakOffset!==void 0?i.breakOffset:-1.2),n.age=0,n.active=!0,n.s=0,n.height=0,n.curl=0,n.brk=0,n.turb=0,n.roll=0,n}_breakerHeight(t,e,i){let n=e-t.ox,s=i-t.oz,a=n*t.dx+s*t.dz,o=-n*t.dz+s*t.dx,h=.16*Math.sin(o*.071+t.seed)+.09*Math.sin(o*.193+t.seed*1.7),c=2.6*Math.sin(o*.047+t.seed*.6)+1.2*Math.sin(o*.13+t.seed*2.1),l=a-t.s-c,u=Math.exp(-(o*o)/(t.width*t.width))*(1+h),f=l>0?t.front:t.back,d=Math.exp(-(l*l)/(f*f)),m=(l-2.4*t.front)/(1.7*t.front),v=-.22*Math.exp(-m*m);return this._bu=l,this._benv=u,this._bp=d,this._bsc=f,this._btr=v,this._btu=m,this._bpeel=Math.max(.15,Math.min(1.3,.55+2.5*h)),t.height*u*(d+v)}sample(t,e,i){let n=ye,s=this.dirX,a=this.dirZ,o=this.k,h=this.amp,c=this.steep,l=this.phT,u=this.omega,f=t,d=e;for(let B=0;B<3;B++){let X=0,$=0;for(let Z=0;Z<n;Z++){let it=o[Z]*(s[Z]*f+a[Z]*d)-l[Z],pt=c[Z]*h[Z]*Math.sin(it);X-=s[Z]*pt,$-=a[Z]*pt}f=t-X,d=e-$}let m=0,v=0,g=0,p=0,y=0,b=0,_=0,A=0,x=0,E=0,T=0,M=0;for(let B=0;B<n;B++){let X=o[B]*(s[B]*f+a[B]*d)-l[B],$=Math.sin(X),Z=Math.cos(X),it=h[B],pt=o[B]*it,rt=c[B]*pt,Tt=u[B];m+=it*Z,v+=rt*s[B]*s[B]*Z,g+=rt*a[B]*a[B]*Z,p+=rt*s[B]*a[B]*Z,y-=pt*s[B]*$,b-=pt*a[B]*$;let H=c[B]*it*Tt;_+=H*s[B]*Z,x+=H*a[B]*Z,A+=it*Tt*$;let dt=H*Tt;E+=dt*s[B]*$,M+=dt*a[B]*$,T-=it*Tt*Tt*Z}let S=-y*(1-g)-b*p,D=(1-v)*(1-g)-p*p,G=-b*(1-v)-y*p,K=D,O=0,P=0,F=0,z=0,U=0,N=0,k=0,W=0,j=0;for(let B=0;B<gi;B++){let X=this.breakers[B];if(!X.active||X.height<.01)continue;let $=this._breakerHeight(X,t,e),Z=this._bu,it=this._benv,pt=this._bp,rt=this._bsc;if(it<.002)continue;let Tt=-2*Z/(rt*rt)*pt-.22*Math.exp(-this._btu*this._btu)*(-2*this._btu/(1.7*X.front)),H=X.height*it*Tt;m+=$,F+=$,D<.05&&(D=.05);let dt=1/D;S*=dt,G*=dt,D=1,S-=H*X.dx,G-=H*X.dz,U+=Math.max(-12,Math.min(14,-X.speed*H)),W+=X.speed*X.speed*X.height*it*(-2/(rt*rt)+4*Z*Z/(rt*rt*rt*rt))*pt;let at=X.speed*(.3*(1-X.brk)+.65*X.curl+.22*X.roll)*it*pt*Math.min(1,X.height/6),ft=it*X.curl*Math.exp(-Math.pow((Z-.25*X.front)/(1.3*X.front),2))*Math.min(1,X.height/5);if(k=Math.max(k,ft),j=Math.max(j,Math.min(X.mega?15:12,3.5+.6*X.hMax)*ft*Re(-.7,.5,X.age-X.tBreak)),X.mega){let _t=Math.min(1,ft*1.3)*Re(-.7,.5,X.age-X.tBreak),L=Math.max(-12,Math.min(14,-X.speed*H));L>0&&(U-=L*.25*_t);let C=X.speed*X.speed*X.height*it*(-2/(rt*rt)+4*Z*Z/(rt*rt*rt*rt))*pt;C>0&&(W-=C*.2*_t)}if(z+=X.dx*at,N+=X.dz*at,X.mega){let _t=X.speed*it*X.curl*Math.exp(-Math.pow((Z-.1*X.front)/(.9*X.front),2));z+=X.dx*.45*_t,N+=X.dz*.45*_t}let st=X.speed*.26*it*Math.exp(-this._btu*this._btu)*Math.min(1,X.height/6)*(1-X.brk);z-=X.dx*st,N-=X.dz*st;let At=it*Math.exp(-Math.pow((Z-.3*X.front)/(1.6*X.front+26*X.turb),2));O=Math.max(O,X.brk*At*Math.min(1,X.height/3+X.turb)),P=Math.max(P,X.turb*it*Math.exp(-Math.pow((Z+14*X.turb)/(22+30*X.turb),2)))}let V=1/Math.sqrt(S*S+D*D+G*G);return i.h=m,i.nx=S*V,i.ny=D*V,i.nz=G*V,i.vx=_+z,i.vy=A+U,i.vz=x+N,i.ax=E,i.ay=T,i.az=M,i.bvx=z,i.bvy=U,i.bvz=N,i.lip=k,i.plunge=j,i.bay=W<-8.8?-8.8:W>19.6?19.6:W,i.jac=K,i.x0=f,i.z0=d,i.aer=O,i.turb=P,i.brkH=F,i}heightFast(t,e){let i=this.dirX,n=this.dirZ,s=this.k,a=this.amp,o=this.phT,h=0;for(let c=0;c<14;c++)h+=a[c]*Math.cos(s[c]*(i[c]*t+n[c]*e)-o[c]);for(let c=0;c<gi;c++){let l=this.breakers[c];l.active&&l.height>.01&&(h+=this._breakerHeight(l,t,e))}return h}bodyFlow(t,e,i,n){let s=this.dirX,a=this.dirZ,o=this.k,h=this.amp,c=this.steep,l=this.phT,u=this.omega,f=this.bodyW,d=0,m=0,v=0,g=0,p=0,y=0;for(let b=0;b<ye;b++){let _=Math.exp(-o[b]*i)*f[b];if(_<.01)continue;let A=o[b]*(s[b]*t+a[b]*e)-l[b],x=Math.sin(A),E=Math.cos(A),T=h[b]*u[b]*_,M=T*u[b];d+=c[b]*T*s[b]*E,v+=c[b]*T*a[b]*E,m+=T*x,g+=c[b]*M*s[b]*x,y+=c[b]*M*a[b]*x,p-=M*E}return n.vx=d,n.vy=m,n.vz=v,n.ax=g,n.ay=p,n.az=y,n}velocityAtDepth(t,e,i,n){let s=this.dirX,a=this.dirZ,o=this.k,h=this.amp,c=this.steep,l=this.phT,u=this.omega,f=0,d=0,m=0;for(let v=0;v<ye;v++){let g=Math.exp(-o[v]*i);if(g<.01)continue;let p=o[v]*(s[v]*t+a[v]*e)-l[v],y=h[v]*u[v]*g,b=Math.cos(p);f+=c[v]*y*s[v]*b,m+=c[v]*y*a[v]*b,d+=y*Math.sin(p)}return n.vx=f,n.vy=d,n.vz=m,n}breakerFlow(t,e,i,n,s){let a=0,o=0,h=0,c=this.time;for(let l=0;l<gi;l++){let u=this.breakers[l];if(!u.active||u.roll<.003&&u.turb<.003)continue;this._breakerHeight(u,t,i);let f=this._benv,d=this._bu;if(!(f<.01)){if(u.roll>.003){let m=Math.max(1.8,Math.min(7.5,.36*u.hMax)),v=d-.35*u.front,g=e-(n-.55*m),p=Math.hypot(v,g);if(p<3.2*m){let y=p<m?1:m*m/(p*p),b=.85*u.speed/m*u.roll*f*y,_=b*g;a+=u.dx*_,h+=u.dz*_,o+=-b*v}}if(u.turb>.003){let m=u.turb*f*Math.exp(-Math.pow((d+14*u.turb)/(22+30*u.turb),2))*Math.exp(-Math.max(0,n-e)/6.5);if(m>.01){let v=m*3.4;a+=v*(Math.sin(.9*i+1.7*e+2.3*c)+.6*Math.sin(1.7*t-1.1*e-3.1*c+1.3)),o+=v*(Math.sin(1.1*t+.8*i+2.9*c+.7)+.6*Math.sin(-1.5*i+1.9*e+2*c)),h+=v*(Math.sin(1.3*e-.9*t+2.6*c+2.1)+.6*Math.sin(1.6*t+1.2*i-2.2*c)),o-=m*2.6*Math.exp(-Math.max(0,n-e)/3)}}}}return s.vx+=a,s.vy+=o,s.vz+=h,s}};function bi(){return{bay:0,lip:0,plunge:0,bvx:0,bvy:0,bvz:0,h:0,nx:0,ny:1,nz:0,vx:0,vy:0,vz:0,ax:0,ay:0,az:0,jac:1,x0:0,z0:0,aer:0,turb:0,brkH:0}}var ht={hdrType:dn,uWaveA:{value:new Float32Array(ye*4)},uWaveB:{value:new Float32Array(ye*4)},uBrkA:{value:new Float32Array(gi*4)},uBrkB:{value:new Float32Array(gi*4)},uBrkC:{value:new Float32Array(gi*4)},uTime:{value:0},uStorm:{value:1},uRain:{value:1},uWindDir:{value:new ct(1,0)},uWindSpeed:{value:28},uGlowDir:{value:new w(-.55,.35,.25).normalize()},uAmbient:{value:new w(.05,.06,.072)},uFlash:{value:0},uFlashDir:{value:new w(1,.35,0).normalize()},uFlashColor:{value:new w(.78,.86,1)},uFlashSheet:{value:0},uFogDensity:{value:1/2600},uNoise:{value:null},uSkyEnv:{value:null},uDetailN:{value:null},uFoamTex:{value:null},uResolution:{value:new ct(1,1)},uSpotPos:{value:new w(0,100,0)},uSpotDir:{value:new w(0,-1,0)},uSpotP:{value:new qt(.99,0,30,0)},uWash:{value:new qt(0,0,1,0)}},Js=`
uniform vec3 uSpotPos; uniform vec3 uSpotDir; uniform vec4 uSpotP;
float spotAt(vec3 p, out vec3 L) {
  vec3 d = uSpotPos - p; float ds = length(d); L = d / max(ds, 1e-3);
  if (uSpotP.y < 0.001) return 0.0;
  float x = (1.0 - dot(-L, uSpotDir)) / (1.0 - uSpotP.x);          // 1 at the nominal edge of the beam
  return uSpotP.y * (exp(-1.5 * x * x) + 0.045 * exp(-0.09 * x)) / (1.0 + ds * ds / (uSpotP.z * uSpotP.z));
}
`,vn="vec3(0.78, 0.88, 1.0)";function Jd(r=7){let e=Je(r),i=new Uint8Array(256*256*4);for(let s=0;s<i.length;s++)i[s]=e()*256|0;let n=new Hi(i,256,256,de,Ye);return n.wrapS=n.wrapT=ii,n.minFilter=ee,n.magFilter=ee,n.generateMipmaps=!1,n.needsUpdate=!0,n}function $d(r=11,t=256){let e=Je(r),i=[];for(let f=0;f<56;f++){let d=2+Math.pow(e(),1.6)*38,m=(e()-.5)*2.4+(e()<.2?Math.PI*e():0),v=Math.round(Math.cos(m)*d),g=Math.round(Math.sin(m)*d);if(v===0&&g===0)continue;let p=Math.hypot(v,g);i.push({m:v,n:g,a:Math.pow(p,-1.35),ph:e()*Math.PI*2})}let n=new Float32Array(t*t),s=new Float32Array(t*t),a=new Float32Array(t*t),o=0;for(let f=0;f<t;f++)for(let d=0;d<t;d++){let m=d/t,v=f/t,g=0,p=0,y=0;for(let _=0;_<i.length;_++){let A=i[_],x=6.283185307*(A.m*m+A.n*v)+A.ph,E=Math.sin(x);g-=A.a*A.m*E,p-=A.a*A.n*E,y+=A.a*Math.cos(x)}let b=f*t+d;n[b]=g,s[b]=p,a[b]=y,o+=g*g+p*p}o=Math.sqrt(o/(t*t*2));let h=0;for(let f=0;f<a.length;f++)h=Math.max(h,Math.abs(a[f]));let c=new Uint8Array(t*t*4),l=.3/o;for(let f=0;f<t*t;f++)c[f*4]=Math.max(0,Math.min(255,Math.round((n[f]*l*.5+.5)*255))),c[f*4+1]=Math.max(0,Math.min(255,Math.round((s[f]*l*.5+.5)*255))),c[f*4+2]=Math.round((a[f]/h*.5+.5)*255),c[f*4+3]=255;let u=new Hi(c,t,t,de,Ye);return u.wrapS=u.wrapT=ii,u.minFilter=Ke,u.magFilter=ee,u.generateMipmaps=!0,u.anisotropy=8,u.needsUpdate=!0,u}function tf(r=23,t=256){let e=Je(r),i=c=>{let l=new Float32Array(c*c*2);for(let f=0;f<l.length;f++)l[f]=e();let u=new Float32Array(t*t*2);for(let f=0;f<t;f++)for(let d=0;d<t;d++){let m=(d+.5)/t*c,v=(f+.5)/t*c,g=Math.floor(m),p=Math.floor(v),y=9,b=9;for(let _=-1;_<=1;_++)for(let A=-1;A<=1;A++){let x=g+A,E=p+_,T=(x%c+c)%c,M=(E%c+c)%c,S=x+l[(M*c+T)*2],D=E+l[(M*c+T)*2+1],G=Math.hypot(S-m,D-v);G<y?(b=y,y=G):G<b&&(b=G)}u[(f*t+d)*2]=y,u[(f*t+d)*2+1]=b-y}return u},n=i(9),s=i(23),a=i(51),o=new Uint8Array(t*t*4);for(let c=0;c<t*t;c++){let l=1-Math.min(1,n[c*2+1]*3.2),u=1-Math.min(1,s[c*2+1]*3),f=Math.min(1,l*.62+u*.5),d=Math.min(1,(1-n[c*2]*1.25)*.7+(1-s[c*2]*1.3)*.3),m=1-Math.min(1,a[c*2]*1.6);o[c*4]=Math.round(Math.max(0,f)*255),o[c*4+1]=Math.round(Math.max(0,d)*255),o[c*4+2]=Math.round(Math.max(0,m)*255),o[c*4+3]=255}let h=new Hi(o,t,t,de,Ye);return h.wrapS=h.wrapT=ii,h.minFilter=Ke,h.magFilter=ee,h.generateMipmaps=!0,h.anisotropy=8,h.needsUpdate=!0,h}var is=`
#define NW ${ye}
#define NB ${gi}
uniform vec4 uWaveA[NW];   // dir.x, dir.z, k, amplitude
uniform vec4 uWaveB[NW];   // phase(t), steepness, wavelength, -
uniform vec4 uBrkA[NB];    // origin.xz, dir.xz
uniform vec4 uBrkB[NB];    // crest s, height, front scale, back scale
uniform vec4 uBrkC[NB];    // lateral width, curl, breaking, turbulence
`,ns=`
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
`,uo=`
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
`,ef=`
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
`;var nf=`
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
`,wx=`
const float PI = 3.14159265359;
vec3 equirectToDir(vec2 uv) {
  float phi = (uv.x - 0.5) * 2.0 * PI;
  float lat = (uv.y - 0.5) * PI;
  return vec3(cos(lat) * cos(phi), sin(lat), cos(lat) * sin(phi));
}
`,po=`
vec2 dirToEquirect(vec3 d) {
  return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5);
}
`,fo=class{constructor(t,e=512){this.renderer=t;let i={uNoise:ht.uNoise,uTime:ht.uTime,uStorm:ht.uStorm,uWindDir:ht.uWindDir,uGlowDir:ht.uGlowDir,uFlash:ht.uFlash,uFlashDir:ht.uFlashDir,uFlashColor:ht.uFlashColor,uFlashSheet:ht.uFlashSheet};this.domeMat=new ne({uniforms:i,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = position;
          vec4 p = projectionMatrix * viewMatrix * vec4(position * 9000.0 + cameraPosition, 1.0);
          gl_Position = p.xyww;   // always at the far plane
        }`,fragmentShader:`
        varying vec3 vDir;
        ${nf}
        void main() { gl_FragColor = vec4(stormSky(normalize(vDir), 1), 1.0); }`,side:je,depthWrite:!1,depthTest:!0,fog:!1}),this.dome=new gt(new Ja(1,5),this.domeMat),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,this.envRT=new _e(e,e/2,{type:ht.hdrType,format:de,depthBuffer:!1,minFilter:Ke,magFilter:ee,generateMipmaps:!0}),this.envRT.texture.wrapS=ii,this.envRT.texture.wrapT=li,this.envMat=new ne({uniforms:i,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        varying vec2 vUv;
        ${nf}
        ${wx}
        void main() { gl_FragColor = vec4(stormSky(equirectToDir(vUv), 0), 1.0); }`,depthTest:!1,depthWrite:!1}),this.envScene=new Li,this.envQuad=new gt(new wi(2,2),this.envMat),this.envQuad.frustumCulled=!1,this.envScene.add(this.envQuad),this.envCam=new fi(-1,1,1,-1,0,1),ht.uSkyEnv.value=this.envRT.texture}updateEnv(){let t=this.renderer,e=t.getRenderTarget();t.setRenderTarget(this.envRT),t.render(this.envScene,this.envCam),t.setRenderTarget(e)}dispose(){this.envRT.dispose(),this.domeMat.dispose(),this.envMat.dispose(),this.dome.geometry.dispose()}};var Ex=`
attribute float aSpacing;
uniform vec2 uCenter;
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${is}
${uo}
${ns}
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
`,Sx=`
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
${Js}
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${is}
${ef}
${ns}
${po}
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
    body += (uDeepColor * 0.95 + uScatterColor * 0.26 + vec3(0.018, 0.021, 0.024)) * ${vn} * spot * (0.22 + 0.78 * snl * snl)
          + ${vn} * spot * 0.020 * (0.3 + 0.7 * snl);

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
      col += ${vn} * spot * min(Ds, 60.0) * fss * 0.55;
    }
    vec3 foamCol = vec3(0.80, 0.85, 0.87) * foamShade * (amb * (2.4 + 0.8 * N.y) + flashL * flashWrap * 0.8 + ${vn} * spot * (0.55 + 1.05 * snl));
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
`;function Tx(r,t,e,i){let n=r*t,s=new Float32Array(n*3),a=new Float32Array(n);for(let l=0;l<r;l++){let u=e*(Math.exp(i*l)-1)/i,f=e*Math.exp(i*l),d=Math.PI*2*u/t,m=Math.max(f,d);for(let v=0;v<t;v++){let g=v/t*Math.PI*2,p=(l*t+v)*3;s[p]=Math.cos(g)*u,s[p+1]=0,s[p+2]=Math.sin(g)*u,a[l*t+v]=m}}let o=new Uint32Array((r-1)*t*6),h=0;for(let l=0;l<r-1;l++)for(let u=0;u<t;u++){let f=l*t+u,d=l*t+(u+1)%t,m=(l+1)*t+u,v=(l+1)*t+(u+1)%t;o[h++]=f,o[h++]=d,o[h++]=m,o[h++]=d,o[h++]=v,o[h++]=m}let c=new oe;return c.setAttribute("position",new Nt(s,3)),c.setAttribute("aSpacing",new Nt(a,1)),c.setIndex(new Nt(o,1)),c}var mo=class{constructor(t,e){this.waves=t,this.uniforms={uWaveA:ht.uWaveA,uWaveB:ht.uWaveB,uBrkA:ht.uBrkA,uBrkB:ht.uBrkB,uBrkC:ht.uBrkC,uSkyEnv:ht.uSkyEnv,uDetailN:ht.uDetailN,uFoamTex:ht.uFoamTex,uNoise:ht.uNoise,uTime:ht.uTime,uStorm:ht.uStorm,uRain:ht.uRain,uWindDir:ht.uWindDir,uAmbient:ht.uAmbient,uFlash:ht.uFlash,uFlashDir:ht.uFlashDir,uFlashColor:ht.uFlashColor,uFogDensity:ht.uFogDensity,uResolution:ht.uResolution,uCenter:{value:new ct},uDeepColor:{value:new w(.02,.062,.105)},uScatterColor:{value:new w(.13,.27,.305)},uDetailScroll:{value:new qt},uDetailScroll3:{value:new ct},uDetailStrength:{value:.5},uSigH:{value:10},uSceneColor:{value:null},uSceneDepth:{value:null},uNearFar:{value:new ct(.08,3e4)},uFoamAcc:{value:null},uFoamAccRect:{value:new qt(0,0,1,0)},uPlayerPos:{value:new w(0,-1e3,0)},uPlayerFoam:{value:0},uBoatInv:{value:new Lt},uBoatOn:{value:0},uBoatFoam:{value:0},uSpotPos:ht.uSpotPos,uSpotDir:ht.uSpotDir,uSpotP:ht.uSpotP,uWash:ht.uWash},this.material=new ne({uniforms:this.uniforms,vertexShader:Ex,fragmentShader:Sx,side:ke,defines:{}}),this.mesh=new gt(new oe,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,this.applyProfile(e)}applyProfile(t){this.mesh.geometry.dispose();let e=Math.log(14e3*.0128/t.oceanStep+1)/t.oceanRings*1;this.mesh.geometry=Tx(t.oceanRings,t.oceanSegs,t.oceanStep,this._solveG(t.oceanRings,t.oceanStep,14e3,e));let i={};t.refraction&&(i.USE_REFRACTION=1),t.foamAcc&&(i.USE_FOAM_ACC=1),t.ripples&&(i.USE_RIPPLES=1),this.material.defines=i,this.material.needsUpdate=!0}_solveG(t,e,i,n){let s=Math.max(n,.004);for(let a=0;a<40;a++){let o=Math.exp(s*t),h=e*(o-1)/s-i,c=e*(t*o*s-(o-1))/(s*s);s-=h/c,s<.001&&(s=.001)}return s}update(t,e,i){let n=this.uniforms;n.uCenter.value.set(t.position.x,t.position.z),n.uSigH.value=this.waves.sigHeight;let s=ht.uWindDir.value.x,a=ht.uWindDir.value.y,o=.6+.4*ht.uStorm.value;n.uDetailScroll.value.x+=s*1.9*.047*o*e,n.uDetailScroll.value.y+=a*1.9*.047*o*e,n.uDetailScroll.value.z+=a*1.1*.19*o*e+.011*e,n.uDetailScroll.value.w+=-s*1.1*.19*o*e,n.uDetailScroll3.value.x+=(s*.75-a*.2)*.83*o*e,n.uDetailScroll3.value.y+=(a*.75+s*.2)*.83*o*e,n.uDetailStrength.value=.3+.34*ht.uStorm.value,n.uNearFar.value.set(t.near,t.far)}};var Ax=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tPrev;
uniform vec2 uCenter; uniform vec2 uPrevCenter; uniform float uSize; uniform float uDt; uniform float uStorm; uniform float uTexel;
uniform vec3 uPlayer; uniform float uPlayerFoam;
uniform vec4 uBoat; uniform float uBoatFoam;      // boat centre x,z and the direction of its length; how much it is churning
uniform vec4 uSplash[4];      // x, z, ring radius, strength
${is}
${ns}
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
}`,go=class{constructor(t,e=1024,i=340){if(this.renderer=t,this.size=e,this.world=i,this.enabled=e>0,!this.enabled)return;let n={type:ht.hdrType,format:de,depthBuffer:!1,minFilter:ee,magFilter:ee};this.rt=[new _e(e,e,n),new _e(e,e,n)],this.idx=0,this.center=new ct,this.prevCenter=new ct,this.u={tPrev:{value:null},uCenter:{value:this.center},uPrevCenter:{value:this.prevCenter},uSize:{value:i},uDt:{value:.016},uStorm:ht.uStorm,uTexel:{value:i/e},uPlayer:{value:new w},uPlayerFoam:{value:0},uSplash:{value:new Float32Array(16)},uBoat:{value:new qt(0,0,0,1)},uBoatFoam:{value:0},uWaveA:ht.uWaveA,uWaveB:ht.uWaveB,uBrkA:ht.uBrkA,uBrkB:ht.uBrkB,uBrkC:ht.uBrkC},this.mat=new ne({uniforms:this.u,fragmentShader:Ax,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"}),this.scene=new Li,this.quad=new gt(new wi(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.cam=new fi(-1,1,1,-1,0,1),this.first=!0,this.splashes=[0,1,2,3].map(()=>({x:0,z:0,s:0,age:9})),this.nextSplash=0}addSplash(t,e,i){if(!this.enabled)return;let n=this.splashes[this.nextSplash];this.nextSplash=(this.nextSplash+1)%4,n.x=t,n.z=e,n.s=Math.min(1,i),n.age=0}update(t,e,i,n,s,a){if(!this.enabled){a.uFoamAccRect.value.w=0;return}let o=this.world/this.size,h=Math.round(e/o)*o,c=Math.round(i/o)*o;this.prevCenter.copy(this.first?new ct(h,c):this.center),this.center.set(h,c);let l=this.rt[this.idx],u=this.rt[1-this.idx];this.u.tPrev.value=l.texture,this.u.uDt.value=t,this.u.uPlayer.value.copy(n),this.u.uPlayerFoam.value=s;let f=this.u.uSplash.value;for(let v=0;v<4;v++){let g=this.splashes[v];g.age+=t;let p=g.age<1.3;f[v*4]=g.x,f[v*4+1]=g.z,f[v*4+2]=.25+1.5*g.age*(.6+.6*g.s),f[v*4+3]=p?g.s*Math.exp(-g.age*2):0}let d=this.renderer,m=d.getRenderTarget();d.setRenderTarget(u),d.render(this.scene,this.cam),d.setRenderTarget(m),this.idx=1-this.idx,this.first=!1,a.uFoamAcc.value=u.texture,a.uFoamAccRect.value.set(h,c,this.world,1)}};var bo=class{constructor(t,e,i,n,s=4242){this.waves=t,this.body=e,this.player=i,this.spray=n,this.rnd=Je(s),this.auto=!0,this.next=24,this.megaNext=85+this.rnd()*40,this.threat=0,this.crestDist=1e9,this.crestHeight=0,this.crestDx=0,this.crestDz=0,this.whiteout=0,this.onImpact=null,this.onSplash=null,this._splashCool=0}launch(t={}){let e=this.rnd,i=this.body,n=this.waves.storm;return this.waves.spawnBreaker(i.pos.x+i.vel.x*2,i.pos.z+i.vel.z*2,{lead:t.lead!==void 0?t.lead:13+e()*5,height:t.height!==void 0?t.height:yt(6.5,14.5,n)*(.8+.45*e()),width:t.width!==void 0?t.width:110+e()*90,speed:t.speed!==void 0?t.speed:12.5+e()*3.5,breakOffset:t.breakOffset!==void 0?t.breakOffset:-2+e()*2.3,angleOffset:t.angleOffset!==void 0?t.angleOffset:(e()-.5)*.5,frontMin:t.frontMin,back:t.back})}launchMega(t={}){let e=this.rnd,i=this.body;return this.waves.spawnBreaker(i.pos.x,i.pos.z,{mega:!0,lead:t.lead!==void 0?t.lead:19,height:t.height!==void 0?t.height:30+8*e(),width:520,speed:t.speed||24,breakOffset:t.breakOffset!==void 0?t.breakOffset:-.5,angleOffset:(e()-.5)*.2,frontMin:26,back:120})}update(t,e,i,n){let s=this.waves,a=this.body;if(this.auto){this.megaNext-=t;let d=s.breakers.some(m=>m.active&&m.mega);this.megaNext<=0&&s.storm>.6&&!s.breakers.some(m=>m.active)&&(this.launchMega(),this.megaNext=150+this.rnd()*100),this.next-=t,this.next<=0&&(s.storm>.3&&!d&&this.megaNext>14&&this.launch(),this.next=yt(75,24,s.storm)*(.65+.8*this.rnd()))}let o=0,h=1e9,c=0;for(let d of s.breakers){if(!d.active)continue;let m=a.pos.x-d.ox,v=a.pos.z-d.oz,g=m*d.dx+v*d.dz-d.s,p=-m*d.dz+v*d.dx,y=Math.exp(-(p*p)/(d.width*d.width));g>-10&&g<h&&(h=g,c=d.height*y,this.crestDx=d.dx,this.crestDz=d.dz);let b=bt(1-Math.abs(g)/(d.mega?320:120));o=Math.max(o,b*bt(d.height*y/9))}this.threat+=(o-this.threat)*(1-Math.exp(-t*2.5)),this.crestDist=h,this.crestHeight=c;let l=s.sample(e.x,e.z,this._s||(this._s={h:0})),u=Math.max(l.aer,(l.lip||0)*1.1)*bt(1-(e.y-l.h)/7)*(1-i);this.whiteout+=(Math.min(.93,u*1.6)-this.whiteout)*(1-Math.exp(-t*(u>this.whiteout?14:2.5)));let f=this.player.events;for(let d=0;d<f.length;d++){let m=f[d];m.type==="impact"&&(this.spray.burst(a.pos.x,a.surfaceH+.2,a.pos.z,m.strength*2.2,n,m.dir.x,m.dir.z),this.onImpact&&this.onImpact(m))}f.length=0,this._splashCool-=t,a.splash>3&&this._splashCool<=0&&(this._splashCool=.6,this.spray.burst(a.splashPos.x,a.splashPos.y,a.splashPos.z,Math.min(3.5,(a.splash-2.4)*.9),n),this.onSplash&&this.onSplash(a.splash,a.splashPos))}};var Uc={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ct(1/1024,1/512)}},vertexShader:`

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
	`};var Rx="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Cx=`
varying vec2 vUv; uniform sampler2D tScene; uniform float uThreshold; uniform float uKnee;
void main(){
  vec3 c = textureLod(tScene, vUv, 1.0).rgb;
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-5);
  float w = max(soft, br - uThreshold) / max(br, 1e-5);
  gl_FragColor = vec4(min(c * w, vec3(40.0)), 1.0);
}`,Px=`
varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 a = texture(tSrc, vUv + t * vec2(-1.0, -1.0)).rgb, b = texture(tSrc, vUv + t * vec2(1.0, -1.0)).rgb;
  vec3 c = texture(tSrc, vUv + t * vec2(-1.0, 1.0)).rgb, d = texture(tSrc, vUv + t * vec2(1.0, 1.0)).rgb;
  vec3 e = texture(tSrc, vUv).rgb;
  gl_FragColor = vec4((a + b + c + d) * 0.2 + e * 0.2, 1.0);
}`,Lx=`
varying vec2 vUv; uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 s = texture(tSrc, vUv + t * vec2(-1.0, 0.0)).rgb + texture(tSrc, vUv + t * vec2(1.0, 0.0)).rgb
         + texture(tSrc, vUv + t * vec2(0.0, -1.0)).rgb + texture(tSrc, vUv + t * vec2(0.0, 1.0)).rgb;
  s = s * 0.125 + texture(tSrc, vUv).rgb * 0.5;
  gl_FragColor = vec4(s + texture(tAdd, vUv).rgb, 1.0);
}`,Fx=`
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
}`,Ix=`
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
}`,vo=class{constructor(t){this.renderer=t,this.fsScene=new Li,this.fsCam=new fi(-1,1,1,-1,0,1),this.fsQuad=new gt(new wi(2,2),null),this.fsQuad.frustumCulled=!1,this.fsScene.add(this.fsQuad),this.w=2,this.h=2,this.levels=5,this.useOpaque=!0;let e=(s,a)=>new ne({uniforms:a,vertexShader:Rx,fragmentShader:s,depthTest:!1,depthWrite:!1});this.matPre=e(Cx,{tScene:{value:null},uThreshold:{value:.16},uKnee:{value:.12}}),this.matDown=e(Px,{tSrc:{value:null},uTexel:{value:new ct}}),this.matUp=e(Lx,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new ct}}),this.matAdapt=e(Fx,{tScene:{value:null},tPrev:{value:null},uDt:{value:.016},uReset:{value:1}}),this.u={tScene:{value:null},tDepth:{value:null},tBloom:{value:null},tAdapt:{value:null},tLens:{value:null},uNoise:ht.uNoise,uResolution:{value:new ct},uNearFar:{value:new ct(.08,3e4)},uTime:{value:0},uCamPos:{value:new w},uCamRight:{value:new w},uCamUp:{value:new w},uCamFwd:{value:new w},uTanFov:{value:new ct},uPrevViewProj:{value:new Lt},uMotionBlur:{value:0},uBloom:{value:.55},uExposureKey:{value:.125},uExposureRange:{value:new ct(.5,7)},uExposureBias:{value:1},uWaterPlane:{value:new qt(0,1,0,0)},uUnderAmount:{value:0},uUnderColor:{value:new w(.004,.012,.018)},uUnderExt:{value:new w(.42,.2,.16)},uAeration:{value:0},uUnderDistort:{value:.012},uShaftDir:{value:new w(0,1,0)},uShaft:{value:0},uLensStrength:{value:.05},uSheet:{value:0},uBlur:{value:0},uDofFocus:{value:10},uDofAmount:{value:0},uVignette:{value:.42},uGrain:{value:.028},uTunnel:{value:0},uDesat:{value:0},uFade:{value:0},uWhiteout:{value:0},uGradeMix:{value:1}},this.matComposite=e(Ix,this.u),this.matFXAA=new ne({uniforms:{tDiffuse:{value:null},resolution:{value:new ct}},vertexShader:Uc.vertexShader,fragmentShader:Uc.fragmentShader,depthTest:!1,depthWrite:!1}),this.matCopy=e("varying vec2 vUv; uniform sampler2D tSrc; void main(){ gl_FragColor = texture(tSrc, vUv); }",{tSrc:{value:null}});let i=new Hi(new Uint8Array([0,0,0,0]),1,1);i.needsUpdate=!0,this.blankLens=i,this.u.tLens.value=i,this.rtScene=null,this.rtOpaque=null,this.rtLDR=null,this.down=[],this.up=[];let n={type:ht.hdrType,format:de,depthBuffer:!1,minFilter:Le,magFilter:Le};this.adapt=[new _e(1,1,n),new _e(1,1,n)],this.adaptIdx=0,this.adaptReset=!0,this.fxaa=!0,this.prevViewProj=new Lt,this._vp=new Lt}setSize(t,e,i){if(t=Math.max(2,Math.floor(t)),e=Math.max(2,Math.floor(e)),!i&&t===this.w&&e===this.h&&this.rtScene)return;this.w=t,this.h=e,(h=>h.forEach(c=>c&&c.dispose()))([this.rtScene,this.rtOpaque,this.rtLDR,...this.down,...this.up]);let s={type:ht.hdrType,format:de,magFilter:ee};this.rtScene=new _e(t,e,{...s,minFilter:Ke,generateMipmaps:!0,depthBuffer:!0}),this.rtScene.depthTexture=new Qn(t,e),this.rtOpaque=new _e(t,e,{...s,minFilter:ee,depthBuffer:!0}),this.rtOpaque.depthTexture=new Qn(t,e),this.rtLDR=new _e(t,e,{type:Ye,format:de,minFilter:ee,magFilter:ee,depthBuffer:!1}),this.down=[],this.up=[];let a=t>>1,o=e>>1;for(let h=0;h<this.levels;h++){a=Math.max(2,a),o=Math.max(2,o);let c={...s,minFilter:ee,depthBuffer:!1};this.down.push(new _e(a,o,c)),h<this.levels-1&&this.up.push(new _e(a,o,c)),a>>=1,o>>=1}ht.uResolution.value.set(t,e),this.adaptReset=!0}_pass(t,e){this.fsQuad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.fsScene,this.fsCam)}render(t,e,i,n){let s=this.renderer,a=this.u;this.useOpaque&&t(this.rtOpaque,!0),t(this.rtScene,!1),this.matPre.uniforms.tScene.value=this.rtScene.texture,this._pass(this.matPre,this.down[0]);for(let f=1;f<this.levels;f++)this.matDown.uniforms.tSrc.value=this.down[f-1].texture,this.matDown.uniforms.uTexel.value.set(1/this.down[f-1].width,1/this.down[f-1].height),this._pass(this.matDown,this.down[f]);let o=this.down[this.levels-1];for(let f=this.levels-2;f>=0;f--)this.matUp.uniforms.tSrc.value=o.texture,this.matUp.uniforms.tAdd.value=this.down[f].texture,this.matUp.uniforms.uTexel.value.set(1/o.width,1/o.height),this._pass(this.matUp,this.up[f]),o=this.up[f];let h=this.adapt[this.adaptIdx],c=this.adapt[1-this.adaptIdx];this.matAdapt.uniforms.tScene.value=this.rtScene.texture,this.matAdapt.uniforms.tPrev.value=h.texture,this.matAdapt.uniforms.uDt.value=i,this.matAdapt.uniforms.uReset.value=this.adaptReset?1:0,this._pass(this.matAdapt,c),this.adaptIdx=1-this.adaptIdx,this.adaptReset=!1,a.tScene.value=this.rtScene.texture,a.tDepth.value=this.rtScene.depthTexture,a.tBloom.value=o.texture,a.tAdapt.value=c.texture,a.uResolution.value.set(this.w,this.h),a.uNearFar.value.set(e.near,e.far),a.uTime.value=n;let l=e.matrixWorld.elements;a.uCamRight.value.set(l[0],l[1],l[2]),a.uCamUp.value.set(l[4],l[5],l[6]),a.uCamFwd.value.set(-l[8],-l[9],-l[10]),a.uCamPos.value.copy(e.position);let u=Math.tan(In.degToRad(e.fov)*.5);a.uTanFov.value.set(u*e.aspect,u),a.uPrevViewProj.value.copy(this.prevViewProj),this._vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.prevViewProj.copy(this._vp),this.fxaa?(this._pass(this.matComposite,this.rtLDR),this.matFXAA.uniforms.tDiffuse.value=this.rtLDR.texture,this.matFXAA.uniforms.resolution.value.set(1/this.w,1/this.h),this._pass(this.matFXAA,null)):this._pass(this.matComposite,null)}};var Dx=`
attribute vec4 aDrop;       // x, y (0..1), radius (in screen heights), strength
uniform float uAspect;
varying vec2 vP; varying float vS;
void main() {
  vP = position.xy; vS = aDrop.w;
  vec2 c = aDrop.xy * 2.0 - 1.0;
  gl_Position = vec4(c + position.xy * vec2(aDrop.z / uAspect, aDrop.z) * 2.0 * vec2(1.0, 1.18), 0.0, 1.0);
}`,kx=`
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
}`,xo=class{constructor(t,e=120){this.renderer=t,this.max=e,this.rt=new _e(640,360,{type:ht.hdrType,format:de,depthBuffer:!1,minFilter:ee,magFilter:ee}),this.x=new Float32Array(e),this.y=new Float32Array(e),this.r=new Float32Array(e),this.vy=new Float32Array(e),this.vx=new Float32Array(e),this.life=new Float32Array(e),this.wait=new Float32Array(e),this.head=0,this.rainAcc=0,this.count=0,this.trail=new Float32Array(e);let i=new Qi;i.setAttribute("position",new Nt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),this.aDrop=new Ze(new Float32Array(e*4),4),this.aDrop.setUsage(mi),i.setAttribute("aDrop",this.aDrop),i.instanceCount=0,this.dropMat=new ne({uniforms:{uAspect:{value:16/9}},vertexShader:Dx,fragmentShader:kx,transparent:!0,depthTest:!1,depthWrite:!1,blending:An}),this.drops=new gt(i,this.dropMat),this.drops.frustumCulled=!1,this.fadeMat=new ne({uniforms:{uK:{value:.95}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform float uK; void main(){ gl_FragColor = vec4(uK); }",transparent:!0,depthTest:!1,depthWrite:!1,blending:Sc,blendEquation:hn,blendSrc:so,blendDst:Tc,blendSrcAlpha:so,blendDstAlpha:wr}),this.fade=new gt(new wi(2,2),this.fadeMat),this.fade.frustumCulled=!1,this.scene=new Li,this.scene.add(this.fade,this.drops),this.fade.renderOrder=0,this.drops.renderOrder=1,this.cam=new fi(-1,1,1,-1,0,1),this.needClear=!0,this.sheet=0}get texture(){return this.rt.texture}spawn(t,e=0){for(let i=0;i<t;i++){let n=this.head;this.head=(this.head+1)%this.max,this.x[n]=Math.random(),this.y[n]=Math.pow(Math.random(),.8);let s=Math.random()<.14+.26*e;this.r[n]=s?.011+Math.random()*.015:.003+Math.random()*.008,this.vy[n]=0,this.vx[n]=0,this.wait[n]=s?Math.random()*1.6:1e9,this.life[n]=s?5.5:1.8+Math.random()*3.2}}wipe(){this.life.fill(0),this.needClear=!0,this.sheet=0}update(t,e,i,n){if(i)(this.count>0||!this.needClear)&&this.wipe();else{this.rainAcc+=t*e;let l=Math.floor(this.rainAcc);this.rainAcc-=l,l>0&&this.spawn(Math.min(l,6))}this.sheet=Math.max(0,this.sheet-t*.42);let s=this.aDrop.array,a=0;for(let l=0;l<this.max;l++){if(this.life[l]<=0)continue;if(this.life[l]-=t,this.wait[l]<1e8&&(this.wait[l]-=t,this.wait[l]<=0)){if(this.vy[l]=Math.min(.2,this.vy[l]+t*(.12+4*this.r[l])),Math.random()<t*.8&&(this.vy[l]*=.2,this.wait[l]=Math.random()*.5),this.vx[l]+=(Math.random()-.5)*t*.5,this.vx[l]*=Math.exp(-t*4),this.y[l]-=this.vy[l]*t,this.x[l]+=this.vx[l]*t,this.trail[l]+=this.vy[l]*t,this.trail[l]>.035+this.r[l]){this.trail[l]=0;let d=this.head;this.head=(this.head+1)%this.max,d!==l&&this.life[d]<=0&&(this.x[d]=this.x[l]+(Math.random()-.5)*.004,this.y[d]=this.y[l]+this.r[l]*1.2,this.r[d]=.0035+Math.random()*.003,this.vy[d]=0,this.vx[d]=0,this.wait[d]=1e9,this.life[d]=.9+Math.random()*1.2,this.trail[d]=0)}if(this.r[l]-=t*.0012,this.y[l]<-.06||this.r[l]<.004){this.life[l]=0;continue}}let u=Math.min(1,this.life[l]/.8),f=a*4;s[f]=this.x[l],s[f+1]=this.y[l],s[f+2]=this.r[l]*(.6+.4*u),s[f+3]=u,a++}this.count=a,this.drops.geometry.instanceCount=a,this.aDrop.needsUpdate=!0,this.dropMat.uniforms.uAspect.value=n,this.fadeMat.uniforms.uK.value=Math.exp(-t*22);let o=this.renderer,h=o.getRenderTarget(),c=o.autoClear;o.setRenderTarget(this.rt),this.needClear&&(o.setClearColor(0,0),o.clear(),this.needClear=!1),o.autoClear=!1,o.render(this.scene,this.cam),o.autoClear=c,o.setRenderTarget(h)}};var $s={cinematic:{key:"cinematic",label:"CINEMATIC",oceanRings:512,oceanSegs:512,oceanStep:.28,envSize:512,maxPixels:3686400,minScale:.6,refraction:!0,foamAcc:1024,ripples:!0,motionBlur:!0,fxaa:!0,bloomLevels:5,rain:26e3,splashes:2600,spray:9e3,bubbles:1400,motes:2600,lensRes:.5,lensDrops:150},high:{key:"high",label:"HIGH",oceanRings:384,oceanSegs:384,oceanStep:.36,envSize:256,maxPixels:2073600,minScale:.55,refraction:!0,foamAcc:512,ripples:!0,motionBlur:!1,fxaa:!0,bloomLevels:5,rain:15e3,splashes:1500,spray:5e3,bubbles:900,motes:1500,lensRes:.5,lensDrops:100},performance:{key:"performance",label:"PERFORMANCE",oceanRings:256,oceanSegs:256,oceanStep:.5,envSize:128,maxPixels:921600,minScale:.5,refraction:!1,foamAcc:0,ripples:!1,motionBlur:!1,fxaa:!1,bloomLevels:4,rain:6e3,splashes:500,spray:2e3,bubbles:400,motes:600,lensRes:.35,lensDrops:60}},yo=class{constructor(t){this.renderer=t,this.profile=$s.cinematic,this.scale=1,this.frameMs=16.7,this.fps=60,this._acc=0,this._slow=0,this._fast=0,this.adaptive=!0,this.info=this.detect()}detect(){let t=this.renderer.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),i=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown",n=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),s=/SwiftShader|llvmpipe|Software|Basic Render/i.test(i),a=/Intel\(R\) (U?HD|Iris)(?! Xe)|Mali|Adreno|PowerVR/i.test(i);return{webgl2:this.renderer.capabilities.isWebGL2,webgpu:typeof navigator<"u"&&!!navigator.gpu,halfFloat:!!t.getExtension("EXT_color_buffer_float")||!!t.getExtension("EXT_color_buffer_half_float"),gpu:i,mobile:n,software:s,weak:a}}pickDefault(){let t=this.info;return t.software||t.mobile?"performance":t.weak?"high":"cinematic"}setProfile(t){this.profile=$s[t]||$s.cinematic,this.scale=1,this._slow=this._fast=0}renderSize(t,e){let i=this.profile.maxPixels,n=Math.min(1,Math.sqrt(i/Math.max(1,t*e)));return n*=this.scale,[Math.max(320,Math.round(t*n)),Math.max(180,Math.round(e*n))]}update(t){let e=t*1e3;return this.frameMs+=(e-this.frameMs)*.06,this.fps=1e3/this.frameMs,this.adaptive?(this.frameMs>21.5?(this._slow+=t,this._fast=0):this.frameMs<13.5?(this._fast+=t,this._slow=0):(this._slow*=.9,this._fast*=.9),this._slow>1.5&&this.scale>this.profile.minScale?(this.scale=Math.max(this.profile.minScale,this.scale-.08),this._slow=0,!0):this._fast>6&&this.scale<1?(this.scale=Math.min(1,this.scale+.05),this._fast=0,!0):!1):!1}};var ui=[["hips",-1,0,0,0],["spine",0,0,.12,0],["chest",1,0,.3,0],["neck",2,0,.525,0],["head",3,0,.625,.012],["upperArmL",2,.178,.455,0],["foreArmL",5,.236,.172,.006],["handL",6,.286,-.078,.032],["upperArmR",2,-.178,.455,0],["foreArmR",8,-.236,.172,.006],["handR",9,-.286,-.078,.032],["thighL",0,.096,-.07,0],["shinL",11,.106,-.505,.006],["footL",12,.106,-.925,-.016],["thighR",0,-.096,-.07,0],["shinR",14,-.106,-.505,.006],["footR",15,-.106,-.925,-.016]],R={};ui.forEach((r,t)=>{R[r[0]]=t});var zx=new w(0,.082,.088),jt={jacket:[.72,.15,.04],jacketDark:[.42,.085,.028],tape:[.85,.87,.84],pants:[.045,.055,.08],shoe:[.022,.022,.024],skin:[.62,.43,.34],skinDark:[.46,.29,.22],hair:[.03,.024,.02],lip:[.36,.16,.14],eye:[.05,.035,.03]},_o=class{constructor(){this.pos=[],this.col=[],this.si=[],this.sw=[],this.idx=[],this.n=0}vert(t,e,i){this.pos.push(t.x,t.y,t.z),this.col.push(e[0],e[1],e[2]);let n=[0,0,0,0],s=[0,0,0,0],a=0;for(let o=0;o<i.length&&o<4;o++)n[o]=i[o][0],s[o]=i[o][1],a+=i[o][1];for(let o=0;o<4;o++)s[o]/=a||1;return this.si.push(...n),this.sw.push(...s),this.n++}tube(t,e,i=!0,n=!0){let s=new w,a=new w,o=new w,h=new w,c=new w(0,0,1),l=new w(0,1,0),u=[];for(let d=0;d<t.length;d++){let m=t[Math.max(0,d-1)].c,v=t[Math.min(t.length-1,d+1)].c;s.subVectors(v,m).normalize(),t[d].ax?a.copy(t[d].ax):(a.crossVectors(s,c),a.lengthSq()<.04&&a.crossVectors(s,l),a.normalize()),o.crossVectors(a,s).normalize();let g=this.n;for(let p=0;p<e;p++){let y=p/e*Math.PI*2,b=Math.cos(y),_=Math.sin(y),A=t[d].rx,x=t[d].rz;if(t[d].shape){let T=t[d].shape(y,b,_);A*=T,x*=T}h.copy(t[d].c).addScaledVector(a,b*A).addScaledVector(o,_*x);let E=typeof t[d].col=="function"?t[d].col(y,h):t[d].col;this.vert(h,E,t[d].w)}u.push(g)}for(let d=0;d<u.length-1;d++)for(let m=0;m<e;m++){let v=u[d]+m,g=u[d]+(m+1)%e,p=u[d+1]+m,y=u[d+1]+(m+1)%e;this.idx.push(v,p,g,g,p,y)}let f=(d,m,v)=>{let g=typeof m.col=="function"?m.col(0,m.c):m.col,p=this.vert(m.c,g,m.w);for(let y=0;y<e;y++){let b=d+y,_=d+(y+1)%e;v?this.idx.push(p,_,b):this.idx.push(p,b,_)}};i&&f(u[0],t[0],!0),n&&f(u[u.length-1],t[t.length-1],!1)}build(){let t=new oe;return t.setAttribute("position",new se(this.pos,3)),t.setAttribute("color",new se(this.col,3)),t.setAttribute("skinIndex",new Hs(this.si,4)),t.setAttribute("skinWeight",new se(this.sw,4)),t.setIndex(this.idx),t.computeVertexNormals(),t}},Ie=(r,t,e)=>new w(r,t,e),Vi=(r,t,e)=>new w().lerpVectors(r,t,e),sf=(r,t,e)=>{let i=Math.max(0,Math.min(1,(e-r)/(t-r)));return i*i*(3-2*i)};function Ux(){let r=new _o,t=18,e=s=>{let a=ui[R[s]];return Ie(a[2],a[3],a[4])},i=[[-.135,.12,.095],[-.085,.165,.116],[-.02,.176,.12],[.05,.166,.114],[.11,.156,.108],[.17,.152,.106],[.24,.164,.114],[.31,.18,.124],[.385,.184,.128],[.445,.186,.118],[.488,.152,.1],[.52,.1,.086],[.552,.08,.08],[.58,.074,.076]],n=s=>{if(s<.02)return[[R.hips,1]];if(s<.14){let a=sf(.02,.14,s);return[[R.hips,1-a],[R.spine,a]]}if(s<.2)return[[R.spine,1]];if(s<.32){let a=sf(.2,.32,s);return[[R.spine,1-a],[R.chest,a]]}return[[R.chest,1]]};r.tube(i.map(([s,a,o])=>{let h=s>-.06,c=h?1.07:1;return{c:Ie(0,s,h?.004:0),rx:a*c,rz:o*c,w:n(s),col:(l,u)=>h?s>.28&&s<.325?jt.tape:Math.abs(u.x)<.012&&u.z>0||s>.5?jt.jacketDark:jt.jacket:jt.pants}}),t),r.tube([{c:Ie(0,.53,.002),rx:.063,rz:.066,col:jt.skin,w:[[R.chest,.6],[R.neck,.4]]},{c:Ie(0,.575,.006),rx:.061,rz:.064,col:jt.skin,w:[[R.neck,1]]},{c:Ie(0,.63,.012),rx:.06,rz:.063,col:jt.skin,w:[[R.neck,.5],[R.head,.5]]},{c:Ie(0,.665,.016),rx:.057,rz:.06,col:jt.skin,w:[[R.head,1]]}],14);for(let s of[1,-1]){let a=s>0?R.upperArmL:R.upperArmR,o=s>0?R.foreArmL:R.foreArmR,h=s>0?R.handL:R.handR,c=e(s>0?"upperArmL":"upperArmR"),l=e(s>0?"foreArmL":"foreArmR"),u=e(s>0?"handL":"handR"),f=Ie(u.x+s*.03,u.y-.182,u.z+.012),d=[];d.push({c:Ie(c.x-s*.012,c.y+.052,0),rx:.036,rz:.04,col:jt.jacket,w:[[R.chest,.65],[a,.35]]}),d.push({c:Ie(c.x+s*.004,c.y+.02,0),rx:.064,rz:.066,col:jt.jacket,w:[[R.chest,.4],[a,.6]]});let m=[[.12,.066],[.3,.062],[.52,.058],[.74,.054],[.9,.052]];for(let[y,b]of m){let _=y>.28&&y<.4;d.push({c:Vi(c,l,y),rx:b,rz:b*1.04,col:_?jt.tape:jt.jacket,w:y>.8?[[a,.75],[o,.25]]:[[a,1]]})}d.push({c:l.clone(),rx:.051,rz:.053,col:jt.jacket,w:[[a,.5],[o,.5]]});let v=[[.12,.052],[.32,.051],[.55,.046],[.78,.041],[.9,.04]];for(let[y,b]of v)d.push({c:Vi(l,u,y),rx:b,rz:b,col:y>.86?jt.jacketDark:jt.jacket,w:y<.2?[[a,.25],[o,.75]]:[[o,1]]});d.push({c:Vi(l,u,.955),rx:.027,rz:.031,col:jt.skin,w:[[o,1]]}),d.push({c:u.clone(),rx:.021,rz:.031,col:jt.skin,w:[[o,.5],[h,.5]]}),d.push({c:Vi(u,f,.3),rx:.017,rz:.044,col:jt.skin,w:[[h,1]]}),d.push({c:Vi(u,f,.55),rx:.015,rz:.046,col:jt.skin,w:[[h,1]]}),d.push({c:Vi(u,f,.8),rx:.012,rz:.04,col:jt.skinDark,w:[[h,1]]}),d.push({c:f.clone(),rx:.007,rz:.022,col:jt.skinDark,w:[[h,1]]}),r.tube(d,12);let g=Vi(u,f,.22).add(Ie(0,0,.034)),p=Vi(u,f,.52).add(Ie(s*.008,0,.066));r.tube([{c:g,rx:.012,rz:.013,col:jt.skin,w:[[h,1]]},{c:Vi(g,p,.6),rx:.011,rz:.011,col:jt.skin,w:[[h,1]]},{c:p,rx:.007,rz:.007,col:jt.skinDark,w:[[h,1]]}],7)}for(let s of[1,-1]){let a=s>0?R.thighL:R.thighR,o=s>0?R.shinL:R.shinR,h=s>0?R.footL:R.footR,c=e(s>0?"thighL":"thighR"),l=e(s>0?"shinL":"shinR"),u=e(s>0?"footL":"footR"),f=[];f.push({c:Ie(c.x,c.y+.045,0),rx:.08,rz:.09,col:jt.pants,w:[[R.hips,.7],[a,.3]]});let d=[[.05,.094,.1],[.25,.09,.096],[.5,.079,.084],[.75,.067,.07],[.92,.06,.062]];for(let[g,p,y]of d)f.push({c:Vi(c,l,g),rx:p,rz:y,col:jt.pants,w:g<.15?[[R.hips,.4],[a,.6]]:g>.85?[[a,.75],[o,.25]]:[[a,1]]});f.push({c:l.clone(),rx:.058,rz:.061,col:jt.pants,w:[[a,.5],[o,.5]]});let m=[[.1,.056,.06],[.28,.057,.066],[.5,.05,.056],[.75,.042,.045],[.93,.038,.04]];for(let[g,p,y]of m)f.push({c:Vi(l,u,g).add(Ie(0,0,g>.15&&g<.6?-.008:0)),rx:p,rz:y,col:jt.pants,w:g<.2?[[a,.25],[o,.75]]:[[o,1]]});f.push({c:u.clone(),rx:.036,rz:.04,col:jt.shoe,w:[[o,.5],[h,.5]]}),r.tube(f,14,!0,!1);let v=u.y-.045;r.tube([{c:Ie(u.x,v+.012,u.z-.068),rx:.03,rz:.03,col:jt.shoe,w:[[h,1]]},{c:Ie(u.x,v+.006,u.z-.035),rx:.042,rz:.046,col:jt.shoe,w:[[h,.8],[o,.2]]},{c:Ie(u.x,v,u.z+.03),rx:.046,rz:.048,col:jt.shoe,w:[[h,1]]},{c:Ie(u.x+s*.004,v-.008,u.z+.1),rx:.049,rz:.036,col:jt.shoe,w:[[h,1]]},{c:Ie(u.x+s*.006,v-.014,u.z+.165),rx:.044,rz:.026,col:jt.shoe,w:[[h,1]]},{c:Ie(u.x+s*.006,v-.018,u.z+.205),rx:.028,rz:.016,col:jt.shoe,w:[[h,1]]}],12)}return r.build()}function Nx(){let r=new _o,t=Ie(0,.722,.022),e=20,i=26,n=[];for(let c=0;c<=e;c++){let l=c/e*Math.PI,u=Math.cos(l),f=Math.sin(l),d=Math.max(0,-u),m=t.y+u*(u>0?.108:.118),v=.078*(1-.3*d*d),g=.097*(1-.2*d*d),p=t.z+.012*d-.006*Math.max(0,u);n.push({c:Ie(0,m,p),ax:Ie(1,0,0),rx:Math.max(.004,v*f),rz:Math.max(.004,g*f),w:d>.75?[[R.head,.7],[R.neck,.3]]:[[R.head,1]],shape:(y,b,_)=>{let A=Math.max(0,-_),x=1,E=m-t.y;return x+=.2*Math.exp(-Math.pow((E+.022)/.02,2))*Math.pow(A,26)*Math.pow(Math.max(0,1-Math.abs(b)*5),1),x+=.035*Math.exp(-Math.pow((E-.03)/.016,2))*Math.pow(A,3),x-=.03*Math.exp(-Math.pow((E-.008)/.012,2))*Math.pow(A,2)*Math.exp(-Math.pow((Math.abs(b)-.36)/.16,2)),x+=.05*Math.exp(-Math.pow((E+.088)/.022,2))*Math.pow(A,4),x},col:(y,b)=>{let _=b.y-t.y,A=b.x,x=b.z-t.z,E=x>0,T=E?.058+Math.abs(A)*-.25:-.045-Math.max(0,-x)*.2;if(_>T)return jt.hair;if(E){if(Math.abs(_-.01)<.01&&Math.abs(Math.abs(A)-.031)<.014)return jt.eye;if(Math.abs(_-.03)<.006&&Math.abs(Math.abs(A)-.031)<.022)return jt.hair;if(Math.abs(_+.058)<.007&&Math.abs(A)<.024)return jt.lip;if(_<-.02&&_>-.1&&Math.abs(A)>.02)return jt.skinDark}return jt.skin}})}r.tube(n,i,!1,!1);let s=r.build(),a=s.attributes.position,o=s.attributes.color,h=s.attributes.normal;for(let c=0;c<a.count;c++)o.getX(c)<.04&&o.getY(c)<.03&&a.setXYZ(c,a.getX(c)+h.getX(c)*.008,a.getY(c)+h.getY(c)*.008,a.getZ(c)+h.getZ(c)*.008);return s.computeVertexNormals(),s}var Mo=class{constructor(){this.group=new ae,this.group.name="survivor",this.bones=ui.map(t=>{let e=new $n;return e.name=t[0],e}),ui.forEach((t,e)=>{let i=this.bones[e];if(t[1]>=0){let n=ui[t[1]];i.position.set(t[2]-n[2],t[3]-n[3],t[4]-n[4]),this.bones[t[1]].add(i)}else i.position.set(t[2],t[3],t[4])}),this.root=this.bones[0],this.group.add(this.root),this.group.updateMatrixWorld(!0),this.skeleton=new qs(this.bones),this.material=new pi({vertexColors:!0,roughness:.62,metalness:0,clearcoat:.28,clearcoatRoughness:.32,envMapIntensity:1}),this.body=new Jn(Ux(),this.material),this.head=new Jn(Nx(),this.material);for(let t of[this.body,this.head])t.frustumCulled=!1,t.layers.enable(1),this.group.add(t),t.bind(this.skeleton,new Lt);this.body.visible=!1,this.head.visible=!1,this._v=new w,this.eyeLocal=zx.clone(),this.glb=null}useGlb(t){this.glb=t,this.body.visible=!1,this.head.visible=!1,this.procHead=this.head,this.head={_v:!0,get visible(){return this._v},set visible(e){this._v=e,t.setHeadVisible(e)}},this.material=t.material,this.eyeLocal.set(0,t.eye.y-ui[R.head][3],t.eye.z-ui[R.head][4]+.06)}retarget(){this.glb&&this.glb.update(this.bones)}bone(t){return this.bones[R[t]]}eyeWorld(t){return t.copy(this.eyeLocal).applyMatrix4(this.bones[R.head].matrixWorld)}};var rf=1025,Ox=1.22,Vr=9.81,wo=.55;function Gi(r,t,e,i,n,s,a,o,h=-1,c=-1){return{name:r,offset:new w(t,e,i),rest:new w(t,e,i),vol:n/1e3,half:s,cdaP:a,cdaA:o,bone:h,boneB:c,sub:0,depth:-10,world:new w,wasSub:0}}var Eo=class r{constructor(t){this.waves=t,this.mass=80.6,this.inertia=new w(11.5,1.7,12.5),this.pos=new w,this.vel=new w,this.quat=new wt,this.angVel=new w,this.prevPos=new w,this.prevQuat=new wt,this.points=[Gi("head",0,.7,.02,5.2,.11,.035,.012),Gi("chest",0,.38,.01,29.7,.15,.13,.03),Gi("pelvis",0,0,0,15.5,.13,.11,.02),Gi("shoulderL",.21,.4,0,3.2,.07,.035,.006),Gi("shoulderR",-.21,.4,0,3.2,.07,.035,.006),Gi("armL",.28,.05,.02,1.8,.05,.04,.005,R.handL),Gi("armR",-.28,.05,.02,1.8,.05,.04,.005,R.handR),Gi("legL",.1,-.33,0,6.5,.09,.07,.008,R.shinL),Gi("legR",-.1,-.33,0,6.5,.09,.07,.008,R.shinR),Gi("footL",.105,-.82,0,3.4,.06,.055,.006,R.footL),Gi("footR",-.105,-.82,0,3.4,.06,.055,.006,R.footR)],this.totalVol=this.points.reduce((e,i)=>e+i.vol,0),this.breathVol=0,this.extForce=new w,this.extTorque=new w,this.wind=new w,this.waterTorque=new w,this.hydroTorque=new w,this.subFrac=0,this.mouthDepth=-1,this.eyeDepth=-1,this.relFlow=new w,this.relSpeed=0,this.dragG=0,this.aer=0,this.turb=0,this.plunge=0,this.surface=bi(),this.surfaceH=0,this.splash=0,this.splashPos=new w,this._s=bi(),this._w={vx:0,vy:0,vz:0,ax:0,ay:0,az:0},this._r=new w,this._p=new w,this._vp=new w,this._u=new w,this._f=new w,this._F=new w,this._T=new w,this._axis=new w,this._tmp=new w,this._tmp2=new w,this._qi=new wt,this._dq=new wt,this._up=new w,this._mouth=new w(0,.655,.105),this._eye=new w(0,.705,.1)}reset(t,e){let i=this.waves.sample(t,e,this._s);this.pos.set(t,i.h-.62,e),this.vel.set(i.vx,i.vy,i.vz),this.quat.identity(),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat)}setAirway(t,e){this._mouth.copy(t),this._eye.copy(e),this._mouthH=new w(t.x,t.y-.625,t.z-.012),this._eyeH=new w(e.x,e.y-.625,e.z-.012)}pin(t,e,i,n){this.pos.copy(t),this.prevPos.copy(t),this.quat.copy(e),this.prevQuat.copy(e),this.vel.copy(i),this.angVel.copy(n);let s=this._r.copy(this._mouth).applyQuaternion(e).add(t),a=this.waves.sample(s.x,s.z,this.surface);this.surfaceH=a.h,this.mouthDepth=a.h-s.y;let o=this._p.copy(this._eye).applyQuaternion(e).add(t);this.eyeDepth=a.h-o.y,this.subFrac=Math.max(0,Math.min(1,(a.h-t.y+.2)/.7)),this.relFlow.set(0,0,0),this.relSpeed=0,this.dragG=0,this.aer=a.aer,this.turb=a.turb,this.plunge=0,this.splash=0,this.extForce.set(0,0,0),this.extTorque.set(0,0,0)}syncLimbs(t){let e=this._tmp,i=t.group.matrixWorld,n=r._im||(r._im=new Lt);n.copy(i).invert(),this._mouthH||this.setAirway(this._mouth.clone(),this._eye.clone());let s=t.bones[R.head].matrixWorld;e.copy(this._mouthH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._mouth.lerp(e,.5),e.copy(this._eyeH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._eye.lerp(e,.5);for(let a of this.points)a.bone<0||(e.setFromMatrixPosition(t.bones[a.bone].matrixWorld).applyMatrix4(n),e.lengthSq()<1.6&&a.offset.lerp(e,.5))}step(t){let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._F.set(0,0,0),n=this._T.set(0,0,0),s=this._axis.set(0,1,0).applyQuaternion(this.quat),a=0,o=0,h=0,c=0,l=0,u=0;this.relFlow.set(0,0,0),this.splash=0;let f=this._tmp2.set(0,0,0),d=0,m=0;for(let z=0;z<this.points.length;z++){let U=this.points[z],N=this._r.copy(U.offset).applyQuaternion(this.quat),k=this._p.copy(this.pos).add(N);U.world.copy(k);let W=this._vp.copy(this.angVel).cross(N).add(this.vel),j=e.sample(k.x,k.z,this._s),V=j.h-k.y;U.depth=V;let B=Math.max(0,Math.min(1,(V+U.half)/(2*U.half)));if(U.bone<0&&B>.5!=U.wasSub>.5){let Z=Math.abs(W.y-j.vy)+.4*Math.hypot(W.x-j.vx,W.z-j.vz);Z>this.splash&&(this.splash=Z,this.splashPos.set(k.x,j.h,k.z))}U.wasSub=B,U.sub=B;let X=this._f.set(0,0,0),$=U.vol+(z===1?this.breathVol/1e3:0);if(B>0){let Z=Math.max(0,V),it=j.aer*Math.exp(-Z/3.5),pt=rf*(1-.72*it);it>h&&(h=it),j.turb>c&&(c=j.turb),j.plunge>u&&(u=j.plunge);let rt=e.bodyFlow(j.x0,j.z0,Z,this._w),Tt=Math.exp(-Z/80),H=Math.exp(-Z/(2.5+.35*Math.max(0,j.brkH)));rt.vx+=j.bvx*(.25*Tt+.75*H),rt.vy+=j.bvy*Tt,rt.vz+=j.bvz*(.25*Tt+.75*H),j.plunge>.01&&(rt.vy-=j.plunge*Math.exp(-Z/Math.min(8.5,2+.45*Math.max(0,j.brkH)))),e.breakerFlow(k.x,k.y,k.z,j.h,rt);let dt=pt*$*B;d+=-N.z*dt*Vr,m+=N.x*dt*Vr,X.set(dt*(1+wo)*rt.ax,dt*(Vr+(1+wo)*(rt.ay+j.bay*Tt)),dt*(1+wo)*rt.az);let at=this._u.set(rt.vx-W.x,rt.vy-W.y,rt.vz-W.z),ft=at.dot(s),st=this._tmp.copy(s).multiplyScalar(ft),At=this._up.copy(at).sub(st),_t=.5*pt*U.cdaP*B*At.length()+24*U.cdaP*B/.1,L=.5*pt*U.cdaA*B*Math.abs(ft)+8*B*U.cdaA/.01,C=At.x*_t+st.x*L,Q=At.y*_t+st.y*L,lt=At.z*_t+st.z*L;X.x+=C,X.y+=Q,X.z+=lt,f.x+=C,f.y+=Q,f.z+=lt,a+=$*B,this.relFlow.addScaledVector(at,$*B),l+=$*B}if(B<1){let Z=this._u.set(this.wind.x-W.x,this.wind.y-W.y,this.wind.z-W.z),it=.5*Ox*U.cdaP*1.1*(1-B)*Z.length();X.addScaledVector(Z,it)}i.add(X),n.add(this._tmp.copy(N).cross(X))}o=f.length(),this.hydroTorque.set(d,0,m),this.subFrac=a/this.totalVol,this.aer=h,this.turb=c,this.plunge=u,l>0&&this.relFlow.multiplyScalar(1/l),this.relSpeed=this.relFlow.length(),this.dragG=o/(this.mass*Vr);let v=this.mass+wo*rf*a;i.add(this.extForce),i.y-=this.mass*Vr,this.vel.addScaledVector(i,t/v);let g=this.vel.length();g>45&&this.vel.multiplyScalar(45/g),this.pos.addScaledVector(this.vel,t),this.waterTorque.copy(n),n.add(this.extTorque);let p=this._qi.copy(this.quat).invert(),y=this._tmp.copy(this.angVel).applyQuaternion(p),b=this._tmp2.copy(n).applyQuaternion(p),_=1+.6*this.subFrac,A=this.inertia.x*_,x=this.inertia.y*_,E=this.inertia.z*_,T=(b.x-(E-x)*y.y*y.z)/A,M=(b.y-(A-E)*y.z*y.x)/x,S=(b.z-(x-A)*y.x*y.y)/E;y.x+=T*t,y.y+=M*t,y.z+=S*t;let D=Math.exp(-(.25+1.1*this.subFrac)*t);y.multiplyScalar(D);let G=y.length();G>14&&y.multiplyScalar(14/G),this.angVel.copy(y).applyQuaternion(this.quat);let K=this.angVel.length()*t;K>1e-7&&(this._dq.setFromAxisAngle(this._r.copy(this.angVel).normalize(),K),this.quat.premultiply(this._dq).normalize());let O=this._r.copy(this._mouth).applyQuaternion(this.quat).add(this.pos),P=e.sample(O.x,O.z,this.surface);this.surfaceH=P.h,this.mouthDepth=P.h-O.y;let F=this._p.copy(this._eye).applyQuaternion(this.quat).add(this.pos);this.eyeDepth=P.h-F.y}};var So=class{constructor(){this.reset(),this.events=[]}reset(){this.oxygen=100,this.stamina=100,this.temp=37,this.fatigue=0,this.blackout=0,this.alive=!0,this.cause="",this.timeAlive=0,this.breathPhase=0,this.lung=.6,this.breathRate=.3,this.exertion=0,this.gaspTimer=0,this.submergedTime=0,this.wasUnder=!1,this.swallow=0,this.eff=1,this.condition=1,this.shiver=0,this.inhaling=!1,this.lungAtDive=.6}update(t,e){if(!this.alive)return;this.timeAlive+=t;let i=e.mouthUnder,n=e.effort;if(this.exertion+=(bt(n*.6+(100-this.stamina)/160+(100-this.oxygen)/120)-this.exertion)*(1-Math.exp(-t*.8)),i)this.submergedTime+=t,this.oxygen-=t*(2.3+2.4*n+1.5*e.turb)*(1+.5*this.swallow)*(1.3-.45*this.lungAtDive),this.wasUnder||(this.inhaling&&e.sudden&&(this.swallow=Math.min(1,this.swallow+.45),this.oxygen-=6),this.lungAtDive=this.lung,this.events.push({type:"submerge",lung:this.lung})),this.lung=Math.max(.12,this.lung-t*(.025+.03*n));else{if(this.wasUnder){let y=bt((100-this.oxygen)/60+this.submergedTime/12);this.gaspTimer=1.5+5.5*y,this.events.push({type:"surface",need:y,time:this.submergedTime}),this.breathPhase=0,this.submergedTime=0}let u=this.gaspTimer>0?1:0;this.gaspTimer=Math.max(0,this.gaspTimer-t),this.oxygen+=t*(15+13*u)*(1-.6*this.swallow),this.swallow=Math.max(0,this.swallow-t*.12);let f=yt(.26,.95,bt(this.exertion*.9+u*.55));this.breathRate+=(f-this.breathRate)*(1-Math.exp(-t*1.4));let d=this.stamina<25?1+.35*Math.sin(this.timeAlive*2.7)*Math.sin(this.timeAlive*1.3):1,m=this.breathPhase;this.breathPhase+=t*this.breathRate*d,this.breathPhase>=1&&(this.breathPhase-=1);let v=this.breathPhase<.4;v&&!this.inhaling&&this.events.push({type:"inhale",strength:bt(.25+this.exertion*.8+u*.6),gasp:u>0&&m>this.breathPhase?1:u}),!v&&this.inhaling&&this.events.push({type:"exhale",strength:bt(.2+this.exertion*.7+u*.4),cough:this.swallow>.25?1:0}),this.inhaling=v;let g=yt(.45,.95,bt(this.exertion+u)),p=v?.45+.5*g*(this.breathPhase/.4):.95*g-(.95*g-.4)*((this.breathPhase-.4)/.6)+0;this.lung+=(Ei(p,.3,1)-this.lung)*(1-Math.exp(-t*9)),e.brace>.5&&(this.lung+=(1-this.lung)*(1-Math.exp(-t*5)))}this.wasUnder=i,this.oxygen=Ei(this.oxygen,0,100);let s=Re(36,32.5,this.temp),a=1-bt((36-this.temp)/3.5),o=100-this.fatigue*.62,h=n>.42?(n-.42)*7:0,c=i?0:n<.42?(3.4-n*4)*(.45+.55*a)*(1-this.fatigue/170):0;this.stamina=Ei(this.stamina+(c-h)*t,0,o),this.fatigue=Ei(this.fatigue+t*(.035+.16*n),0,100);let l=.0042*(1+.45*n)*(.6+.4*e.subFrac)*(1+.3*e.storm);this.temp-=l*t,this.shiver=bt((36.2-this.temp)/1.6)*(1-bt((33-this.temp)/1.5)),this.oxygen<=.01?this.blackout+=t/11:this.blackout-=t/3.5,this.temp<31.5&&(this.blackout+=t/40),this.blackout=bt(this.blackout),this.blackout>=1&&(this.alive=!1,this.cause=this.temp<31.5&&this.oxygen>5?"cold":"drown",this.events.push({type:"dead",cause:this.cause})),this.eff=yt(.32,1,Re(0,38,this.stamina))*(.45+.55*a)*(1-.6*this.blackout),this.condition=bt(Math.min(this.oxygen/100+.25,1)*(.4+.6*this.stamina/100)*(.35+.65*a)*(1-this.blackout))}};var ss=new w(0,1,0),To=class{constructor(t,e,i){this.body=t,this.survival=e,this.input=i,this.yaw=Math.PI,this.pitch=0,this.control=1,this.impact=0,this.impactPeak=0,this.moveAmt=0,this.effort=0,this.swimBlend=0,this.underSwim=0,this.crawlBlend=0,this.diveBlend=0,this.riseBlend=0,this.swimHeld=!1,this.diveHeld=!1,this.upHeld=!1,this.sprintHeld=!1,this.diveTime=0,this.moveDir=new w(0,0,1),this.heading=new w(0,0,1),this.facing=new w(0,0,1),this.recover=0,this.strokePhase=0,this.brace=0,this.air=0,this.grab=null,this.fear=0,this.cling=!1,this.faceDir=null,this.struggleW=0,this.tumble=0,this.events=[],this._lastImpact=-10,this._time=0,this._fwd=new w,this._right=new w,this._dir=new w,this._x=new w,this._y=new w,this._z=new w,this._m=new Lt,this._qt=new wt,this._qe=new wt,this._ax=new w,this._h=new w}fixedUpdate(t){let e=this.body,i=this.survival,n=this.input;this._time+=t;let s=e.dragG,a=s>this.impact+.25;this.impact=s>this.impact?yt(this.impact,s,1-Math.exp(-t*30)):this.impact*Math.exp(-t*2.2),this.impactPeak=Math.max(this.impactPeak*Math.exp(-t*1.2),s),s>1.4&&a&&this._time-this._lastImpact>.8&&(this._lastImpact=this._time,this.events.push({type:"impact",strength:s,dir:e.relFlow.clone().normalize(),aer:e.aer}));let o=bt(1-Re(.9,3.2,this.impact)-.75*e.aer-.55*e.turb-.9*this.air),h=o<this.control?14:.55+.9*i.eff;this.control+=(Math.max(.04,o)-this.control)*(1-Math.exp(-t*h));let c=this.control*(i.alive?1:0)*(1-.8*i.blackout);this.tumble+=(bt(e.angVel.length()/3.5)*(1-c*.6)-this.tumble)*(1-Math.exp(-t*3)),this.recover=Math.max(0,this.recover-t);let l=n.enabled?n.axisX():0,u=n.enabled?n.axisZ():0,f=n.enabled&&n.swim(),d=n.enabled&&n.dive(),m=f&&!this.cling;this.swimHeld=f,this.diveHeld=d,this.sprintHeld=m,this.upHeld=m&&e.mouthDepth>.45&&!d,this.diveTime=d?this.diveTime+t:0;let v=this._fwd.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),g=this._right.set(-v.z,0,v.x);this.facing.copy(v);let p=this._h.copy(v).multiplyScalar(u).addScaledVector(g,l),y=Math.min(1,p.length());y>.05?p.multiplyScalar(1/p.length()):(p.copy(v),y=0),this.cling&&this.faceDir&&(p.copy(this.faceDir),y=0),this.heading.lerp(p,1-Math.exp(-t*(y>0||m||d||this.fp||this.cling?7:1.5))).normalize();let b=e.mouthDepth>.45,_=Math.max(0,e.mouthDepth);this.underSwim+=((b||d&&e.mouthDepth>.1?1:0)-this.underSwim)*(1-Math.exp(-t*5)),this.diveBlend+=((d?1:0)-this.diveBlend)*(1-Math.exp(-t*(d?7:3.5)));let A=b&&!d;this.riseBlend+=((A?1:0)-this.riseBlend)*(1-Math.exp(-t*4));let x=this._dir.set(0,0,0),E=0,T=0;if(d){let B=.95*bt((6.5-_)/2.5);x.copy(this.heading).multiplyScalar(.55+.45*(1-B)).addScaledVector(ss,-B).normalize(),E=1,T=m?360:270}else b?m?(x.copy(this.heading).multiplyScalar(y>0?.75:.35).addScaledVector(ss,.9).normalize(),E=1,T=360):y>0&&(x.copy(this.heading).multiplyScalar(y).addScaledVector(ss,.45*Math.min(1,_/.8)).normalize(),E=y,T=170):m?(x.copy(this.heading),E=1,T=325):y>0&&(x.copy(this.heading),E=y,T=150);E>.01&&this.moveDir.lerp(x,1-Math.exp(-t*6)).normalize(),this.moveAmt+=(E-this.moveAmt)*(1-Math.exp(-t*5));let M=i.eff*c,S=Math.min(1,e.subFrac*1.25),D=e.extForce.set(0,0,0),G=0;if(E>.01){let B=1+.42*this.swimBlend*Math.sin(2*this.strokePhase)+.38*this.underSwim*Math.sin(this.strokePhase-1),X=b||d?1:bt(1+(e.mouthDepth+.3+.06*this.crawlBlend)*3.5);D.addScaledVector(x,T*M*S*E*B*X*(this.grab?.2:1)),G+=(T>200?.8:.45)*E,d&&this.diveTime<1.1&&_<1.2&&(D.y-=260*M*Math.sin(Math.min(1,this.diveTime/1.1)*Math.PI))}let K=.2+.04*this.crawlBlend;if(!b&&e.mouthDepth<-K&&this.air<.3&&e.pos.y-e.surfaceH<1&&(D.y-=Math.min(520,(-e.mouthDepth-K)*1500)),!b&&this.air<.3&&this.swimBlend>.05&&e.points[2].sub!==void 0){let B=e.points[2].depth,X=.26+.06*this.crawlBlend;B<X&&(D.y-=Math.min(850,(X-B)*2300)*Math.min(1,this.swimBlend*1.5))}if(b&&!d&&!m&&(D.y+=165*M*S,G+=.5),!b&&!d){let B=e.vel.y-e.surface.vy,X=.06+.07*bt(i.stamina/60)+.06*this.crawlBlend+.04*this.swimBlend*(1-this.crawlBlend)+(this.fp?.05*this.crawlBlend:0),$=Math.max(0,Math.min(210+110*this.crawlBlend+55*this.fear,(e.mouthDepth+X+.035*this.fear)*1e3-B*140))*M*S*(1+.45*Math.sin(2*this.strokePhase));this.struggleW>.05&&($=$*(1-.65*this.struggleW)+175*this.struggleW*M*S*Math.max(0,Math.sin(this.strokePhase))),D.y+=$,G+=.34*Math.min(1,$/100)*(1-this.crawlBlend)+.08+.09*this.fear*(1-this.crawlBlend)}if(this.grab){let B=this.grab.x-e.pos.x,X=this.grab.z-e.pos.z,$=Math.hypot(B,X);if($<4.5){let Z=Math.min(280,$*230)*c;D.x+=B/($+.001)*Z,D.z+=X/($+.001)*Z,D.y+=70*S}}this.cling&&(G=this.squeeze?.5:Math.min(G,.14)),this.effort+=(G-this.effort)*(1-Math.exp(-t*6));let O=!b&&!d&&E>.15?m?1:.5*E:0;this.crawlBlend+=((m&&!b&&!d?1:0)-this.crawlBlend)*(1-Math.exp(-t*4)),this.swimBlend+=(O-this.swimBlend)*(1-Math.exp(-t*(O>this.swimBlend?3.2:2.2)));let P=this._y,F=this._z,z=this._x,U=this._ax.set(this.heading.x,0,this.heading.z);U.lengthSq()<.01?U.copy(v):U.normalize();let N=this._time;if(d||b&&E>.1)P.copy(x),F.copy(ss).multiplyScalar(-(1-Math.abs(P.y))).addScaledVector(U,P.y),F.addScaledVector(P,-F.dot(P));else if(b)P.copy(ss).addScaledVector(U,.12),P.normalize(),F.copy(U),F.addScaledVector(P,-F.dot(P));else{let B=this.swimBlend;P.copy(ss).multiplyScalar(1-B*.5).addScaledVector(U,B);let X=1-B;P.addScaledVector(U,X*(.13+.07*Math.sin(N*.83)*Math.sin(N*.31))),P.addScaledVector(g,X*.08*Math.sin(N*.57+1.3)*Math.sin(N*.23+.4)),P.normalize(),F.copy(U).multiplyScalar(1-B*.9).addScaledVector(ss,-B*.9),F.addScaledVector(P,-F.dot(P))}F.lengthSq()<1e-4&&F.copy(U).addScaledVector(P,-U.dot(P)),F.lengthSq()<1e-4&&F.copy(g),F.normalize(),z.crossVectors(P,F).normalize(),this._m.makeBasis(z,P,F),this._qt.setFromRotationMatrix(this._m);let k=this._qe.copy(e.quat).invert().premultiply(this._qt);k.w<0&&(k.x=-k.x,k.y=-k.y,k.z=-k.z,k.w=-k.w);let W=2*Math.acos(Math.min(1,k.w)),j=e.extTorque.set(0,0,0);if(W>1e-4){let B=Math.sqrt(Math.max(1e-9,1-k.w*k.w));this._ax.set(k.x/B,k.y/B,k.z/B);let X=Math.max(this.swimBlend,this.underSwim,this.diveBlend),$=d||b?1+2.2*bt((W-.5)/.9):1,Z=this.cling?.6:1,it=this.cling?1:1-.16*this.fear*(1-X),pt=(72+70*X)*M*$*Z*it,rt=(21+13*X)*M*(this.cling?.55:1);j.copy(this._ax).multiplyScalar(pt*Math.min(W,1.4)).addScaledVector(e.angVel,-rt);let Tt=j.length(),H=(130+110*X)*M*$;Tt>H&&j.multiplyScalar(H/Tt)}let V=Math.max(this.swimBlend,d?1:0,b&&E>.1?this.underSwim:0);V>.02&&j.addScaledVector(e.hydroTorque,-V*Math.min(1,M*1.5)),this.swimBlend>.2&&(this._ax.set(0,1,0).applyQuaternion(e.quat),j.addScaledVector(this._ax,(20+22*this.crawlBlend)*this.swimBlend*M*Math.sin(this.strokePhase)))}};var as=ui.length,er=Math.PI*2,af=new w(0,-1,0),rs=["hang","float","tread","paddle","swim","dive","under","rise","struggle","tumble","recover","exhaust","brace","flail","aboard","cling"],Bx={hang:.45,float:1.2,tread:1.9,paddle:1.35,swim:1.62,dive:1.5,under:1.5,rise:2.3,struggle:2.4,tumble:.45,recover:1.5,exhaust:.7,brace:.85,flail:2.8,aboard:.5,cling:.9};function tt(r,t,e,i,n){let s=t*3;r[s]=e,r[s+1]=i,r[s+2]=n}var Oc=(r,t,e)=>Math.exp(-Math.pow((r-t)/e,2)),Si=r=>(r=bt(r),r*r*(3-2*r)),Wc=r=>(r%er+er)%er/er;function of(r,t,e,i){let n=e;tt(r,R.spine,.05+.04*Math.sin(t*2)*n,.05*Math.sin(t)*n,.04*Math.sin(t+.6)*n),tt(r,R.chest,-.05,-.06*Math.sin(t)*n,0),tt(r,R.neck,-.14,0,0),tt(r,R.head,-.22-.04*Math.sin(t*2)*n,0,0);for(let s of[1,-1]){let a=s>0,o=a?0:.55,h=Math.sin(t+o),c=Math.cos(t+o);tt(r,a?R.upperArmL:R.upperArmR,-.34+.1*c*n,-s*.34*h*n,s*yt(1.4,.95,i)),tt(r,a?R.foreArmL:R.foreArmR,yt(-.42,-.8,i)-.24*c*n,0,0),tt(r,a?R.handL:R.handR,.32*h*n,0,s*.2*c*n);let l=t+(a?0:Math.PI);tt(r,a?R.thighL:R.thighR,yt(-.92,-.38,i)+.22*Math.sin(l)*n,s*.28*Math.cos(l)*n,s*(yt(.5,.24,i)+.12*Math.cos(l)*n)),tt(r,a?R.shinL:R.shinR,yt(1.42,.62,i)+.46*Math.sin(l-1.2)*n,0,0),tt(r,a?R.footL:R.footR,.22+.3*Math.sin(l-1.8)*n,0,0)}}function Hx(r,t){let e=Wc(t),i,n,s;if(e<.22)i=-2.25,n=.1,s=-.1;else if(e<.55){let u=Si((e-.22)/.33);i=yt(-2.25,-1.25,u),n=yt(.1,.95,u),s=yt(-.1,-1.35,u)}else if(e<.72){let u=Si((e-.55)/.17);i=yt(-1.25,-.8,u),n=yt(.95,.28,u),s=yt(-1.35,-2.1,u)}else{let u=Si((e-.72)/.28);i=yt(-.8,-2.25,u),n=yt(.28,.1,u),s=yt(-2.1,-.1,u)}let a,o,h,c;if(e<.5)a=.06,o=.07,h=.1,c=.75;else if(e<.74){let u=Si((e-.5)/.24);a=yt(.06,-.78,u),o=yt(.07,.46,u),h=yt(.1,1.9,u),c=yt(.75,-.15,u)}else if(e<.88){let u=Si((e-.74)/.14);a=yt(-.78,-.18,u),o=yt(.46,.5,u),h=yt(1.9,.3,u),c=yt(-.15,.3,u)}else{let u=Si((e-.88)/.12);a=yt(-.18,.06,u),o=yt(.5,.07,u),h=yt(.3,.1,u),c=yt(.3,.75,u)}let l=Oc(e,.5,.14);tt(r,R.spine,-.08-.06*l,0,0),tt(r,R.chest,-.1-.06*l,0,0),tt(r,R.neck,-.28,0,0),tt(r,R.head,-.36-.05*l,0,0);for(let u of[1,-1]){let f=u>0;tt(r,f?R.upperArmL:R.upperArmR,i,0,u*n),tt(r,f?R.foreArmL:R.foreArmR,s,0,0),tt(r,f?R.handL:R.handR,.12,0,0),tt(r,f?R.thighL:R.thighR,a,0,u*o),tt(r,f?R.shinL:R.shinR,h,0,0),tt(r,f?R.footL:R.footR,c,0,0)}}function Vx(r,t){let e=Math.sin(t),i=Math.sin(t*2);tt(r,R.spine,-.1+.05*i,.16*e,.07*e),tt(r,R.chest,-.12,.3*e,.09*e),tt(r,R.neck,-.36,-.24*e,-.03*e),tt(r,R.head,-.4+.04*i,-.24*e,-.04*e);for(let n of[1,-1]){let s=n>0,a=Wc(t+(s?0:Math.PI)),o,h,c,l;if(a<.1){let d=Si(a/.1);o=yt(-2.42,-2.62,d),h=yt(-.42,-.16,d),c=.16,l=.1}else if(a<.24){let d=Si((a-.1)/.14);o=yt(-2.62,-2.18,d),h=yt(-.16,-.95,d),c=yt(.16,.24,d),l=yt(.1,.34,d)}else if(a<.44){let d=Si((a-.24)/.2);o=yt(-2.18,-.95,d),h=yt(-.95,-1.45,Math.sin(d*Math.PI*.5))+.25*d*d,c=yt(.24,.1,d),l=.34}else if(a<.58){let d=Si((a-.44)/.14);o=yt(-.95,.22,d),h=yt(-1.2,-.3,d),c=yt(.1,.16,d),l=yt(.34,.05,d)}else{let d=(a-.58)/.42,m=Si(d),v=Math.sin(d*Math.PI);o=yt(.22,Math.PI*2-2.42,m),h=-.3-1.55*Math.pow(v,.8),c=.16+.8*v,l=-.18*v}tt(r,s?R.upperArmL:R.upperArmR,o,0,n*c),tt(r,s?R.foreArmL:R.foreArmR,h,0,0),tt(r,s?R.handL:R.handR,l,0,0);let u=t*3+(s?0:Math.PI),f=Math.sin(u);tt(r,s?R.thighL:R.thighR,.05+.21*f,0,n*.05),tt(r,s?R.shinL:R.shinR,.1+.5*Math.max(0,Math.sin(u+1.1)),0,0),tt(r,s?R.footL:R.footR,.8+.12*Math.sin(u+2),0,0)}}function hf(r,t,e){let i=Wc(t),n=Math.sin(i*er-1.2);tt(r,R.spine,-.05+.09*n+.42*e,0,0),tt(r,R.chest,-.06-.07*n+.3*e,0,0),tt(r,R.neck,-.2+.42*e,0,0),tt(r,R.head,-.3+.05*n+.45*e,0,0);let s,a,o;if(i<.36){let l=i/.36,u=Si(l);s=yt(-(Math.PI*.94),-.2,u),a=.14+.92*Math.sin(l*Math.PI),o=-.4*Math.sin(l*Math.PI)}else if(i<.52)s=-.2,a=.14,o=-.05;else{let l=(i-.52)/.48,u=Si(l);s=yt(-.2,-(Math.PI*.94),u),a=.14+.1*Math.sin(l*Math.PI),o=-1.85*Math.sin(l*Math.PI)}s=yt(s,-2.75,e),a=yt(a,.12,e),o=yt(o,-.1,e);let h=Oc(i,.62,.1),c=Oc(i,.78,.07);for(let l of[1,-1]){let u=l>0;tt(r,u?R.upperArmL:R.upperArmR,s,0,l*a),tt(r,u?R.foreArmL:R.foreArmR,o,0,0),tt(r,u?R.handL:R.handR,0,0,0),tt(r,u?R.thighL:R.thighR,yt(-.08-.62*h+.14*c,-1,e),0,l*(.07+.42*h*(1-e))),tt(r,u?R.shinL:R.shinR,yt(.12+1.35*h,.1,e),0,0),tt(r,u?R.footL:R.footR,.75-.5*h*(1-e),0,0)}}function Gx(r,t,e,i){let n=(s,a)=>(si(e*a,s)-.5)*i;tt(r,R.spine,-.08,.06*Math.sin(t),.05*Math.sin(t*.7)*i),tt(r,R.chest,-.12,.1*Math.sin(t),0),tt(r,R.neck,-.34,.1*Math.sin(t*.37)*i,0),tt(r,R.head,-.42+n(1,1.3)*.12,.16*Math.sin(t*.37+.6)*i,0);for(let s of[1,-1]){let a=s>0,o=t+(a?0:Math.PI),h=.5+.5*Math.sin(o),c=Math.max(0,-Math.cos(o)),l=Math.max(0,Math.cos(o));tt(r,a?R.upperArmL:R.upperArmR,yt(-.55,-2.8,h)+n(a?5:7,1.1)*.3,s*.1*Math.cos(o)*i,s*(.22+.24*(1-h)+.1*i)),tt(r,a?R.foreArmL:R.foreArmR,-.25-.45*c-1.05*l,0,0),tt(r,a?R.handL:R.handR,.35*c,0,s*.1);let u=t*2+(a?0:Math.PI)+n(a?11:13,.8)*1.2;tt(r,a?R.thighL:R.thighR,-.14+.44*Math.sin(u),0,s*(.1+.08*i)),tt(r,a?R.shinL:R.shinR,.26+.58*Math.max(0,Math.sin(u+.9)),0,0),tt(r,a?R.footL:R.footR,.72,0,0)}}function Wx(r,t,e){let i=(o,h)=>si(e*h,o)-.5,n=Math.sin(t),s=Math.max(0,n),a=Math.max(0,-n);tt(r,R.spine,-.1-.06*s,.07*Math.sin(t*.5),.05*Math.sin(t*.7)),tt(r,R.chest,-.12-.04*s,.05*Math.sin(t*.5+.8),0),tt(r,R.neck,-.3,.1*Math.sin(t*.37),0),tt(r,R.head,-.4+.08*a+i(1,1.3)*.1,.16*Math.sin(t*.37+.6),.05*Math.sin(t*.53));for(let o of[1,-1]){let h=o>0,c=h?0:.45,l=Math.sin(t+c),u=Math.max(0,l),f=Math.max(0,-l);tt(r,h?R.upperArmL:R.upperArmR,-.24+.18*l+i(h?3:4,1.7)*.2,o*.14*Math.cos(t+c),o*(1.24-.56*(.5+.5*l))),tt(r,h?R.foreArmL:R.foreArmR,-.26-.42*f,0,0),tt(r,h?R.handL:R.handR,.42*u,0,o*.1);let d=t*.6+(h?0:2.1);tt(r,h?R.thighL:R.thighR,-.24+.18*Math.sin(d),0,o*.16),tt(r,h?R.shinL:R.shinR,.46+.26*Math.sin(d+1),0,0),tt(r,h?R.footL:R.footR,.55,0,0)}}function qx(r,t){let e=Math.sin(t),i=Math.sin(t*.5+1),n=Math.max(0,Math.sin(t*.31-.4));tt(r,R.spine,.2,.05*e,.04*i),tt(r,R.chest,.14,.04*e,0),tt(r,R.neck,.16+.1*i-.42*n,.06*e,0),tt(r,R.head,.12+.16*i-.42*n,.08*e,.05*i);for(let s of[1,-1]){let a=s>0;tt(r,a?R.upperArmL:R.upperArmR,-.42,-s*.25,s*1.02),tt(r,a?R.foreArmL:R.foreArmR,-1.25,0,0),tt(r,a?R.handL:R.handR,.35,0,0),tt(r,a?R.thighL:R.thighR,-.34+.12*Math.sin(t+(a?0:1.3)),0,s*.06),tt(r,a?R.shinL:R.shinR,.55+.18*Math.sin(t+(a?.8:2.2)),0,0),tt(r,a?R.footL:R.footR,.75,0,0)}}function Xx(r,t,e,i){let n=Math.sin(t),s=1-i,a=(si(e*.33,31)-.5)*s,o=.5+.5*Math.sin(e*.47+1.3*Math.sin(e*.21));tt(r,R.spine,-.06*s+.14*i+.02*n,.04,.05),tt(r,R.chest,-.08*s+.12*i+.02*n,.1,.04),tt(r,R.neck,(-.24-.14*o)*s+.26*i,-.16+.22*a,0),tt(r,R.head,(-.28-.16*o)*s+.3*i,-.24+.34*a,-.1),tt(r,R.upperArmL,.28,0,2.03),tt(r,R.foreArmL,-1.12-.2*i,0,0),tt(r,R.handL,.35,0,0),tt(r,R.upperArmR,-2.62,.75,0),tt(r,R.foreArmR,-.26-.5*i,0,0),tt(r,R.handR,.3,0,0),tt(r,R.thighL,-.75-.25*i,0,.55),tt(r,R.shinL,1.3+.25*i,0,0),tt(r,R.footL,.55,0,0),tt(r,R.thighR,.1-.25*i,0,-.42),tt(r,R.shinR,.32+.45*i,0,0),tt(r,R.footR,.8,0,0)}function jx(r,t,e){let i=Math.sin(t),n=Math.sin(t*.5+.7);tt(r,R.spine,.1+.03*i,0,.03*n),tt(r,R.chest,.04,0,0),tt(r,R.neck,-.2+.06*n,0,0),tt(r,R.head,-.3+.08*n,0,0);for(let s of[1,-1]){let a=s>0,o=t+(a?0:Math.PI);tt(r,a?R.upperArmL:R.upperArmR,-2.05,0,s*.32),tt(r,a?R.foreArmL:R.foreArmR,-.75,0,0),tt(r,a?R.handL:R.handR,.3,0,0),tt(r,a?R.thighL:R.thighR,-.22+.2*Math.sin(o),0,s*.12),tt(r,a?R.shinL:R.shinR,.5+.26*Math.sin(o-1.1),0,0),tt(r,a?R.footL:R.footR,.55,0,0)}}function Yx(r,t){let e=(i,n)=>si(t*n,i)-.5;tt(r,R.spine,.2+e(1,.7)*.34,e(2,.6)*.3,e(3,.5)*.22),tt(r,R.chest,.14+e(4,.8)*.26,e(5,.6)*.26,0),tt(r,R.neck,.16+e(6,.9)*.3,e(7,.7)*.36,0),tt(r,R.head,.1+e(8,1)*.3,e(9,.8)*.4,e(10,.6)*.18);for(let i of[1,-1]){let n=i>0,s=n?20:40;tt(r,n?R.upperArmL:R.upperArmR,-.7+e(s,.9)*1.3,i*e(s+1,.7)*.6,i*(.8+e(s+2,.8)*.7)),tt(r,n?R.foreArmL:R.foreArmR,-.85+e(s+3,1.1)*1,0,0),tt(r,n?R.handL:R.handR,e(s+4,1.3)*.6,0,e(s+5,1.2)*.4),tt(r,n?R.thighL:R.thighR,-.6+e(s+6,.8)*1,0,i*(.24+e(s+7,.7)*.36)),tt(r,n?R.shinL:R.shinR,.95+e(s+8,1)*.9,0,0),tt(r,n?R.footL:R.footR,.5+e(s+9,1.1)*.4,0,0)}}function Kx(r,t,e){tt(r,R.spine,-.08-.08*e,0,0),tt(r,R.chest,-.1-.1*e,0,0),tt(r,R.neck,-.26,0,0),tt(r,R.head,-.4-.05*e,0,0);for(let i of[1,-1]){let n=i>0,s=Math.sin(t+(n?0:.5));tt(r,n?R.upperArmL:R.upperArmR,-.3+.12*s,-i*.3*s,i*(1.05+.1*e)),tt(r,n?R.foreArmL:R.foreArmR,-.6-.25*s,0,0),tt(r,n?R.handL:R.handR,.25*s,0,0);let a=t+(n?0:Math.PI);tt(r,n?R.thighL:R.thighR,-.7+.26*Math.sin(a),i*.2*Math.cos(a),i*.4),tt(r,n?R.shinL:R.shinR,1.15+.4*Math.sin(a-1.1),0,0),tt(r,n?R.footL:R.footR,.35,0,0)}}function Qx(r,t){let e=Math.sin(t*.5);tt(r,R.spine,-.06,0,.04*e),tt(r,R.chest,-.1,0,0),tt(r,R.neck,-.28,.12*e,0),tt(r,R.head,-.42,.1*e,.08*e);for(let i of[1,-1]){let n=i>0;tt(r,n?R.upperArmL:R.upperArmR,-.18+.08*e,i*.12*e,i*1.02),tt(r,n?R.foreArmL:R.foreArmR,-.55-.12*e,0,0),tt(r,n?R.handL:R.handR,.15,0,0),tt(r,n?R.thighL:R.thighR,-.14+.09*Math.sin(t*.5+(n?0:2)),0,i*.14),tt(r,n?R.shinL:R.shinR,.28+.12*Math.sin(t*.5+(n?1:3)),0,0),tt(r,n?R.footL:R.footR,.6,0,0)}}function Zx(r,t){let e=Math.sin(t*1.4);tt(r,R.spine,.3,.22,0),tt(r,R.chest,.22,.2,0),tt(r,R.neck,.28,.22,0),tt(r,R.head,.3,.28,.1),tt(r,R.upperArmL,-1.35,-.55,.3),tt(r,R.foreArmL,-1.55,0,0),tt(r,R.handL,.2,0,0),tt(r,R.upperArmR,-1.6,.35,-.45),tt(r,R.foreArmR,-1.75,0,0),tt(r,R.handR,.2,0,0),tt(r,R.thighL,-.85+.12*e,0,.18),tt(r,R.shinL,1.25-.15*e,0,0),tt(r,R.footL,.4,0,0),tt(r,R.thighR,-.7-.12*e,0,-.18),tt(r,R.shinR,1.15+.15*e,0,0),tt(r,R.footR,.4,0,0)}function Jx(r,t,e){let i=(n,s)=>si(e*s,n)-.5;tt(r,R.spine,.05+.18*Math.sin(t*.9),.22*Math.sin(t*.5+1),.12*Math.sin(t*.7)),tt(r,R.chest,-.04+.13*Math.sin(t*.9+.6),.22*Math.sin(t*.5+1.4),0),tt(r,R.neck,-.12+i(1,1.5)*.26,i(2,1.3)*.36,0),tt(r,R.head,-.2+i(3,1.7)*.3,i(4,1.4)*.4,i(5,1.1)*.16);for(let n of[1,-1]){let s=n>0,a=t*(s?1:1.17)+(s?0:2.1),o=s?60:80;tt(r,s?R.upperArmL:R.upperArmR,-1.5+1.05*Math.sin(a)+i(o,1.9)*.4,n*(.15+.35*Math.cos(a*.9)),n*(.65+.4*Math.sin(a*1.3+1))),tt(r,s?R.foreArmL:R.foreArmR,-.7-.6*Math.sin(a+1.2),0,0),tt(r,s?R.handL:R.handR,.5*Math.sin(a*2),0,n*.2*Math.sin(a*1.7));let h=t*1.25+(s?0:Math.PI)+i(o+5,.9)*1.2;tt(r,s?R.thighL:R.thighR,-.55+.7*Math.sin(h),0,n*(.22+.16*Math.sin(h*.7))),tt(r,s?R.shinL:R.shinR,Math.max(.05,.95+.75*Math.sin(h-1.3)),0,0),tt(r,s?R.footL:R.footR,.4+.3*Math.sin(h),0,0)}}var $x=[[R.spine,-.18,.52,.25,-.2,.2],[R.chest,-.16,.38,.25,-.18,.18],[R.neck,-.4,.42,.36,-.22,.22],[R.head,-.45,.42,.5,-.22,.22],[R.foreArmL,-2.2,.02,.12,-.04,.04],[R.foreArmR,-2.2,.02,.12,-.04,.04],[R.handL,-.6,.6,.2,-.3,.3],[R.handR,-.6,.6,.2,-.3,.3],[R.shinL,0,2.2,.04,-.04,.04],[R.shinR,0,2.2,.04,-.04,.04],[R.footL,-.35,.95,.25,-.25,.25],[R.footR,-.35,.95,.25,-.25,.25]],Bc=new Array(as).fill(null);for(let r of $x)Bc[r[0]]=r;var cf=new ni(0,0,0,"YXZ");function ty(r,t){let e=cf.setFromQuaternion(r,"YXZ"),i=e.x,n=e.y,s=e.z,a=!1;i<t[1]?(i=t[1],a=!0):i>t[2]&&(i=t[2],a=!0),n<-t[3]?(n=-t[3],a=!0):n>t[3]&&(n=t[3],a=!0),s<t[4]?(s=t[4],a=!0):s>t[5]&&(s=t[5],a=!0),a&&r.setFromEuler(cf.set(i,n,s,"YXZ"))}var ey=new w,iy=new wt,ny=new w;function sy(r,t,e){let i=ey.set(0,-1,0).applyQuaternion(r),n=ny.copy(i),s=i.x*t,a=s,o=i.y,h=i.z;if(e)h<-.42&&(h=-.42),a<-.22?a=-.22:a>.8&&(a=.8),o>.45&&(o=.45),h<0&&o>-.35&&(o=-.35);else{let c=-.5-.34*Math.max(0,Math.min(1,a*1.6));h<c&&(h=c),h<.15&&a<-.05&&(a=-.05),a<-.62&&(a=-.62),h<-.2&&o>.55&&(o=.55)}a===s&&o===i.y&&h===i.z||(i.set(a*t,o,h),!(i.lengthSq()<1e-6)&&(i.normalize(),r.premultiply(iy.setFromUnitVectors(n,i))))}var tr=new wt,lf=new wt;function ry(r,t){let e=Math.hypot(r.y,r.w);if(e<.22)return;tr.set(0,r.y/e,0,r.w/e);let i=2*Math.atan2(tr.y,tr.w);if(i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),Math.abs(i)<=t)return;lf.copy(r).multiply(tr.invert());let n=Math.sign(i)*t*.5;tr.set(0,Math.sin(n),0,Math.cos(n)),r.copy(lf).multiply(tr)}var ay=new wt().setFromAxisAngle(new w(0,0,1),Math.PI/2),oy=new wt().setFromAxisAngle(new w(0,0,1),-Math.PI/2),hy=new w,Nc=new w,Hc=new wt,Gr=new wt;function Vc(r,t){let e=hy.set(0,-1,0).applyQuaternion(r);if(Nc.set(t,0,0),e.dot(Nc)<-.9)return null;Hc.setFromUnitVectors(Nc,e).multiply(t>0?ay:oy),Gr.copy(Hc).invert().multiply(r);let i=2*Math.atan2(Gr.y,Gr.w);return i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),i}var Gc={1:1,"-1":1};{let r=new ni(-2.5,0,.15,"YXZ"),t=new wt().setFromEuler(r);Gc[1]=Math.sign(Vc(t,1))||1,t.setFromEuler(r.set(-2.5,0,-.15,"YXZ")),Gc[-1]=Math.sign(Vc(t,-1))||1}function cy(r,t,e){let i=Vc(r,t);if(i===null||Math.abs(i)<=e)return;let n=Math.sign(i)*e,s=Gc[t]*e,a=Re(1.75,2.8,Math.abs(i)),o=(n+(s-n)*a)*.5;Gr.set(0,Math.sin(o),0,Math.cos(o)),r.copy(Hc).multiply(Gr)}var Ao=class{constructor(t,e,i,n){this.ch=t,this.body=e,this.player=i,this.sv=n,this.tmp=new Float32Array(as*3),this.add=new Float32Array(as*3),this.acc=new Float32Array(as*4),this.ref=new Float32Array(as*4),this.w={},this.wt={};for(let s of rs)this.w[s]=0,this.wt[s]=0;this.w.tread=1,this.phase=0,this.time=0,this.tumbleT=0,this.state="tread",this.splashiness=0,this.gaspKick=0,this.coughKick=0,this.force=null,this.forcePhase=void 0,this.hold=null,this.flinch=0,this.flinchSide=1,this.ride={lift:0,side:0,fore:0,slam:0},this.reach=[{pos:new w,on:0,w:0},{pos:new w,on:0,w:0}],this._ik={S:new w,qp:new wt,qu:new wt,qf:new wt,a:new w,n:new w,w:new w,fix:new wt,x:new w(1,0,0)},this._e=new ni(0,0,0,"YXZ"),this._q=new wt,this._q2=new wt,this._q3=new wt,this._qa=new wt,this._u=new w,this._wb=new w,this._d=new w,this._qi=new wt,this._flow=new w,this._wLag=new w,this._pv=new w,this._acc=new w,this._a=new w,this._hasPv=!1}_reach(t,e,i,n,s){let a=this.ch.bones,o=this._ik,h=a[t],c=a[e],l=a[i],u=c.position,f=l.position;o.S.setFromMatrixPosition(h.matrixWorld),h.parent.getWorldQuaternion(o.qp);let d=u.length()+f.length()-.004,m=Math.max(.16,Math.min(d,o.n.copy(n).sub(o.S).length())),v=.02,g=2.3;for(let p=0;p<14;p++){let y=(v+g)*.5;o.qf.setFromAxisAngle(o.x,-y),o.w.copy(f).applyQuaternion(o.qf).add(u).length()>m?v=y:g=y}o.qf.setFromAxisAngle(o.x,-(v+g)*.5),o.w.copy(f).applyQuaternion(o.qf).add(u),o.qu.copy(o.qp).multiply(h.quaternion),o.a.copy(o.w).applyQuaternion(o.qu).normalize(),o.n.normalize(),o.fix.setFromUnitVectors(o.a,o.n),o.qu.premultiply(o.fix).premultiply(o.qp.invert()),h.quaternion.slerp(o.qu,s),c.quaternion.slerp(o.qf,s)}_mix(t){let e=this.tmp,i=this.acc,n=this.ref,s=this._e,a=this._q,o=this._first;for(let h=0;h<as;h++){s.set(e[h*3],e[h*3+1],e[h*3+2],"YXZ"),a.setFromEuler(s);let c=h*4;o&&(n[c]=a.x,n[c+1]=a.y,n[c+2]=a.z,n[c+3]=a.w);let l=n[c]*a.x+n[c+1]*a.y+n[c+2]*a.z+n[c+3]*a.w<0?-t:t;i[c]+=a.x*l,i[c+1]+=a.y*l,i[c+2]+=a.z*l,i[c+3]+=a.w*l}this._first=!1}update(t){let e=this.player,i=this.body,n=this.sv,s=this.wt;this.time+=t;let a=n.alive?e.control*(1-.7*n.blackout):0,o=1-Re(.22,.78,a),h=Math.max(o,e.air||0),c=n.alive?bt(1-n.blackout*1.5):0,l=1-h,u=e.underSwim,f=e.diveBlend||0;s.flail=h*c*.8,s.tumble=h-s.flail,s.dive=l*f;let d=l*(1-f);s.under=d*u*e.moveAmt,s.rise=d*u*(1-e.moveAmt);let m=d*(1-u);s.swim=m*(e.crawlBlend||0),s.paddle=m*(1-(e.crawlBlend||0))*bt(e.swimBlend*2.2);let v=bt((s.swim+s.paddle)/Math.max(.001,m));s.brace=m*e.brace*(1-.7*v);let g=1-e.brace*(1-.7*v),p=Math.max(bt((38-n.oxygen)/26),bt((34-n.stamina)/28),bt(n.swallow*1.3),bt(e.impact-.7)*.8),y=m*(1-v);s.struggle=y*p*g,s.recover=y*bt(n.gaspTimer/3)*(1-p)*g;let b=1-Re(6,24,n.stamina);s.exhaust=y*b*(1-p)*g;let _=0;s.hang=0;for(let Y of rs)Y!=="tread"&&Y!=="float"&&(_+=s[Y]);let A=Math.max(0,1-_),x=bt(e.effort*1.6),E=e.fear||0;if(s.float=A*.22*(1-x)*(1-E),s.tread=A-s.float,s.aboard=0,s.cling=0,this.hold){let Y=this.hold==="cling"?Math.min(1,s.tumble+s.flail)*.5:0;for(let ut of rs)s[ut]=ut===this.hold?1-Y:ut==="tumble"||ut==="flail"?s[ut]*(Y>0?.5:0):0}if(this.force)for(let Y of rs)s[Y]=Y===this.force?1:0,this.w[Y]=s[Y];_=0;let T=0;for(let Y of rs)this.w[Y]+=(s[Y]-this.w[Y])*(1-Math.exp(-t*((Y==="tumble"||Y==="flail")&&s[Y]>this.w[Y]?14:Y==="brace"||Y==="dive"||Y==="cling"?7:Y==="aboard"?30:5))),_+=this.w[Y],this.w[Y]>T&&(T=this.w[Y],this.state=Y);let M=this.w,S=1/Math.max(1e-4,_),D=0;for(let Y of rs)D+=M[Y]*Bx[Y];D+=M.tread*.45*x+M.struggle*.2*p+M.flail*(i.subFrac<.3?.8:0)+M.rise*.3*bt((60-n.oxygen)/50),D*=1+.42*E*(M.tread+M.float+M.recover+M.exhaust+M.struggle)*S,D*=1+(.08+.22*E)*(si(this.time*.6,77)-.5);let G=er*D*S*(.72+.28*n.eff);this.phase+=G*t,this.forcePhase!==void 0&&(this.phase=this.forcePhase);let K=this.phase;e.strokePhase=K,e.struggleW=M.struggle*S;let O=Math.min(2.5,i.relSpeed*.25+i.angVel.length()*.22+i.turb);this.tumbleT+=t*(.8+1.6*O);let P=this.tmp,F=this.acc;F.fill(0),this._first=!0;let z=(Y,ut)=>{Y<=5e-4||(P.fill(0),ut(),this._mix(Y*S))},U=rs.slice().sort((Y,ut)=>M[ut]-M[Y]),N=this.force==="dive"?this.forcePike||0:bt(1-Math.abs((e.diveTime||9)-.32)/.42)*bt(1.4-Math.max(0,i.mouthDepth));for(let Y of U)switch(Y){case"hang":z(M.hang,()=>qx(P,K));break;case"float":z(M.float,()=>of(P,K,.55,1));break;case"tread":z(M.tread,()=>of(P,K,1+.4*x+.55*E,0));break;case"paddle":z(M.paddle,()=>Hx(P,K));break;case"swim":z(M.swim,()=>Vx(P,K));break;case"dive":z(M.dive,()=>hf(P,K,N));break;case"under":z(M.under,()=>hf(P,K,0));break;case"rise":z(M.rise,()=>Gx(P,K,this.time,1));break;case"struggle":z(M.struggle,()=>Wx(P,K,this.time));break;case"tumble":z(M.tumble,()=>Yx(P,this.tumbleT));break;case"recover":z(M.recover,()=>Kx(P,K,n.lung));break;case"exhaust":z(M.exhaust,()=>Qx(P,K));break;case"brace":z(M.brace,()=>Zx(P,K));break;case"aboard":z(M.aboard,()=>Xx(P,K,this.time,bt((e.brace||0)*1.6-.5)));break;case"cling":z(M.cling,()=>jx(P,K,this.time));break;default:z(M.flail,()=>Jx(P,K,this.time));break}let k=this.add;k.fill(0);let W=l*(1-M.swim*S);k[R.chest*3]-=.18*(n.lung-.5)*W,k[R.spine*3]-=.08*(n.lung-.5)*W;{let Y=bt(.4+.5*p+.4*(e.brace||0)+.3*x+.6*E)*l*(1-u)*(1-.8*M.swim*S),ut=this.time*(.45+.5*Y+.9*E),Mt=e.fp?0:1;k[R.head*3]-=.14*E*l*(1-u)*Mt,k[R.neck*3]-=.06*E*l*(1-u)*Mt,k[R.chest*3]-=.05*E*Math.sin(this.time*9.5)*l,k[R.spine*3+2]+=.07*E*(si(this.time*1.7,55)-.5)*2*l;let zt=(si(ut,91)-.5)*2;k[R.neck*3+1]+=.16*zt*Y,k[R.head*3+1]+=.22*zt*Y}if(this.gaspKick=Math.max(0,this.gaspKick-t*2.6),this.coughKick=Math.max(0,this.coughKick-t*4.5),this.gaspKick>.001){let Y=this.gaspKick*this.gaspKick*W;k[R.head*3]-=.3*Y,k[R.neck*3]-=.14*Y,k[R.chest*3]-=.18*Y,k[R.upperArmL*3+2]+=.16*Y,k[R.upperArmR*3+2]-=.16*Y}if(this.coughKick>.001){let Y=Math.sin(this.coughKick*Math.PI)*W,ut=i.subFrac>.3&&M.aboard<.5?1:0;k[R.spine*3]+=(.3-.16*ut)*Y,k[R.chest*3]+=(.22-.12*ut)*Y,k[R.head*3]+=(.34-.42*ut)*Y,k[R.neck*3]+=(.2-.24*ut)*Y}if(M.aboard>.01){let Y=this.ride,ut=M.aboard*S,Mt=bt(Y.lift),zt=this.time;k[R.thighR*3]+=(.16*Mt+.12*Mt*Math.sin(zt*11))*ut,k[R.shinR*3]+=(.5*Mt+.2*Mt*Math.sin(zt*13+1))*ut,k[R.thighL*3]+=(.16*Mt*Math.sin(zt*9+2)+.1*Mt)*ut,k[R.shinL*3]-=.25*Mt*ut,k[R.thighR*3+2]-=.25*Math.max(0,-Y.side)*ut,k[R.spine*3+2]+=.24*Y.side*ut,k[R.chest*3+2]+=.12*Y.side*ut,k[R.spine*3+1]+=.1*Y.fore*ut,k[R.spine*3]+=(.26*Y.slam-.1*Mt)*ut,k[R.chest*3]+=.16*Y.slam*ut,k[R.neck*3]+=(.3*Y.slam+.12*Mt)*ut,k[R.head*3]+=(.32*Y.slam+.1*Mt)*ut}if(this.flinch>.002){let Y=this.flinch*this.flinch*l,ut=this.flinchSide;k[R.head*3+1]+=.55*Y*ut,k[R.neck*3+1]+=.25*Y*ut,k[R.head*3]+=.05*Y,k[R.head*3+2]+=.18*Y*ut,k[R.neck*3+2]+=.08*Y*ut,k[R.upperArmL*3+2]+=.22*Y,k[R.upperArmR*3+2]-=.22*Y,k[(ut>0?R.upperArmR:R.upperArmL)*3]-=.55*Y,k[(ut>0?R.foreArmR:R.foreArmL)*3]-=.6*Y,this.flinch=Math.max(0,this.flinch-t*1.9)}if(n.shiver>.01){let Y=n.shiver*.035;k[R.chest*3+1]+=Math.sin(this.time*61)*Y,k[R.upperArmL*3]+=Math.sin(this.time*57+1)*Y*1.5,k[R.upperArmR*3]+=Math.sin(this.time*59+2)*Y*1.5,k[R.head*3+1]+=Math.sin(this.time*53)*Y*.8}let j=this._qi.copy(i.quat).invert(),V=this.force?0:Math.max(.25+.75*(M.tumble+.45*M.flail)*S,.7*M.cling*S);i.subFrac<.15?this._u.copy(i.vel).multiplyScalar(-.3):this._u.copy(i.relFlow);let B=this._flow.lerp(this._u.applyQuaternion(j),1-Math.exp(-t*8)),X=B.length(),$=this.force?0:bt(X/4.5)*V*.7;this._hasPv||(this._pv.copy(i.vel),this._hasPv=!0);let Z=this._a.copy(i.vel).sub(this._pv).multiplyScalar(1/Math.max(t,.001));this._pv.copy(i.vel),Z.lengthSq()>3600&&Z.setLength(60);let it=this._acc.lerp(Z.applyQuaternion(j),1-Math.exp(-t*9)),pt=it.length(),rt=this.force?0:bt(pt/38)*(.3+.5*V),Tt=this._wLag.lerp(this._wb.copy(i.angVel).applyQuaternion(j),1-Math.exp(-t*10)),H=Tt.length(),dt=this.force?0:Math.min(.6,H*.07)*(.35+.65*M.tumble*S),at=null,ft=Math.min(.72,$+rt);if(ft>.01){let Y=this._d.copy(af).multiplyScalar(1-ft);X>.05&&Y.addScaledVector(B,ft*$/(($+rt)*X)),pt>.05&&Y.addScaledVector(it,-ft*rt/(($+rt)*pt)),Y.lengthSq()>1e-4&&(Y.normalize(),at=this._q2.setFromUnitVectors(af,Y))}let st=null;dt>.01&&(st=this._q3.setFromAxisAngle(this._u.copy(Tt).normalize(),-dt));let At=this.force?0:.4+.6*V,_t=(Y,ut)=>Math.max(-ut,Math.min(ut,Y));k[R.spine*3]+=_t(it.z*.01*At,.3),k[R.chest*3]+=_t(it.z*.008*At,.24),k[R.spine*3+2]+=_t(it.x*.008*At,.18),k[R.neck*3]+=_t(it.z*.012*At,.3),k[R.neck*3+2]+=_t(it.x*.008*At,.16);let L=Math.min(1,H/5)*V;k[R.foreArmL*3]-=.45*L,k[R.foreArmR*3]-=.45*L,k[R.shinL*3]+=.4*L,k[R.shinR*3]+=.4*L;let C=this.ch.bones,Q=this._e,lt=this._q,mt=this._qa,vt=1-Math.exp(-t*26);for(let Y=0;Y<as;Y++){let ut=Y*4;lt.set(F[ut],F[ut+1],F[ut+2],F[ut+3]),lt.lengthSq()<1e-8?lt.identity():lt.normalize();let Mt=k[Y*3],zt=k[Y*3+1],xt=k[Y*3+2];(Mt!==0||zt!==0||xt!==0)&&lt.multiply(mt.setFromEuler(Q.set(Mt,zt,xt,"YXZ"))),Y===R.upperArmL||Y===R.upperArmR||Y===R.thighL||Y===R.thighR?(at&&lt.premultiply(at),st&&lt.premultiply(st),sy(lt,Y===R.upperArmL||Y===R.thighL?1:-1,Y===R.thighL||Y===R.thighR),Y===R.thighL||Y===R.thighR?ry(lt,.55):cy(lt,Y===R.upperArmL?1:-1,1.15)):(Y===R.head&&st&&lt.premultiply(ly.copy(uy).slerp(st,.4)),Bc[Y]&&ty(lt,Bc[Y])),C[Y].quaternion.slerp(lt,vt)}{let Y=this.reach,ut=!1;for(let Mt=0;Mt<2;Mt++)Y[Mt].w+=(Y[Mt].on-Y[Mt].w)*(1-Math.exp(-t*(Y[Mt].on>Y[Mt].w?9:6))),Y[Mt].w>.005&&(ut=!0);if(ut){this.ch.group.updateMatrixWorld(!0);for(let Mt=0;Mt<2;Mt++)Y[Mt].w>.005&&this._reach(Mt===0?R.upperArmL:R.upperArmR,Mt===0?R.foreArmL:R.foreArmR,Mt===0?R.handL:R.handR,Y[Mt].pos,Y[Mt].w)}}let It=(M.tread*(.25+.4*x)+M.paddle*.5+M.swim*1+M.struggle*1+M.recover*.5+M.dive*.8)*S;this.splashiness+=(It*Math.min(1,i.subFrac*1.3)*(1-u)-this.splashiness)*(1-Math.exp(-t*3))}},ly=new wt,uy=new wt;var ir=new w(0,1,0),qc=new wt,Ro=class{constructor(t,e,i,n,s,a){this.camera=t,this.ch=e,this.body=i,this.player=n,this.waves=s,this.input=a,this.target=1,this.blend=1,this.yaw=Math.PI,this.pitch=-.08,this.sens=.0021,this.intensity=1,this.qd=new wt,this.pivot=new w,this.tpPos=new w,this.inited=!1,this.arm=4.6,this.under=0,this.fovKick=0,this.threat=0,this.orbit=0,this.eye=new w,this.chest=new w,this.surfaceAtCam=bi(),this.script=null,this.auto=!0,this.interest={x:0,z:0,w:0},this.portrait=0,this.autoT=0,this.drift=0,this.roll=0,this.push=0,this.time=0,this.shiver=0,this.cine=null,this._m=new ct,this._f=new w,this._v=new w,this._v2=new w,this._q=new wt,this._q2=new wt,this._mat=new Lt,this._s=bi(),this._fp=new w,this._qfp=new wt,this._qtp=new wt,this._qh=new wt,this._qhS=new wt,this._hasH=!1}toggle(){this.target=this.target>.5?0:1}setMode(t){this.target=t==="first"?0:1}get mode(){return this.target>.5?"third":"first"}lookQuat(t,e,i){let n=Math.cos(e);return this._f.set(Math.sin(t)*n,Math.sin(e),Math.cos(t)*n),this._mat.lookAt(this._v.set(0,0,0),this._f,ir),i.setFromRotationMatrix(this._mat)}update(t){let e=this.camera,i=this.body,n=this.player,s=this.input.consumeMouse(this._m);this.time+=t,this.input.enabled&&(this.yaw-=s.x*this.sens,this.pitch-=s.y*this.sens);let a=performance.now()/1e3,o=Math.abs(s.x)+Math.abs(s.y)>.5||a-this.input.lastLook<2.5,h=this.input.enabled&&this.input.busy();if(this.auto&&this.input.enabled&&!this.script&&!o){let F=this.input.axisX();if(h)Math.abs(F)>.15&&(this.yaw-=F*.85*t),this.autoT=0;else{this.autoT+=t;let U=Math.min(1,this.autoT/1.5);if(this.interest.w>.05){let k=Math.atan2(this.interest.x-i.pos.x,this.interest.z-i.pos.z)-this.yaw;k=((k+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,this.yaw+=Math.sign(k)*Math.min(Math.abs(k),(.25+.9*this.interest.w)*t)*U}else this.drift+=t*.13,this.yaw+=(.045*Math.sin(this.drift)+.03*Math.sin(this.drift*2.3+1))*t*U}let z=-.07+.24*this.threat-.1*this.under;(!h||n.underSwim<.5)&&(this.pitch+=(z-this.pitch)*(1-Math.exp(-t*(h?.5:1.1))))}else this.autoT=0;this.script&&(this.yaw=this.script.yaw,this.pitch=this.script.pitch),this.pitch=Ei(this.pitch,-1.45,1.45),n.yaw=this.yaw,n.pitch=this.pitch;let c=1/.85;this.blend=Ei(this.blend+Math.sign(this.target-this.blend)*t*c,0,1),Math.abs(this.target-this.blend)<t*c&&(this.blend=this.target);let l=this.blend*this.blend*(3-2*this.blend),u=bt(1-n.control)*.85+n.tumble*.4,f=bt(u),d=this.intensity*yt(.2,1,f)*yt(1,.42,l),m=i.angVel,v=m.length();v>1e-5&&d>0&&(this._q.setFromAxisAngle(this._v.copy(m).multiplyScalar(1/v),v*d*t),this.qd.premultiply(this._q));let g=yt(.32,2.6,f);this.qd.slerp(qc,1-Math.exp(-t/g)).normalize(),this.ch.eyeWorld(this.eye),this.fpLift&&(this.eye.y+=this.fpLift),this.chest.setFromMatrixPosition(this.ch.bones[2].matrixWorld),this.inited||(this.pivot.copy(this.chest),this.inited=!0,this.tpPos.copy(this.chest).add(this._v.set(0,1.2,4)));{this.ch.bones[4].getWorldQuaternion(this._qh);{let it=this._v.set(1,0,0).applyQuaternion(this.ch.bones[2].getWorldQuaternion(this._q2)),pt=this._v2.set(0,0,1).applyQuaternion(this._qh);if(pt.addScaledVector(it,-pt.dot(it)),pt.lengthSq()>1e-4){pt.normalize(),it.addScaledVector(pt,-it.dot(pt)).normalize();let rt=this._f.crossVectors(pt,it);this._qh.setFromRotationMatrix(this._mat.makeBasis(it,rt,pt))}}this._hasH||(this._qhS.copy(this._qh),this._hasH=!0),this._qhS.slerp(this._qh,1-Math.exp(-t*12));let z=Math.cos(this.pitch),U=this.pitch-.16*(n.crawlBlend||0),N=Math.cos(U),k=this._v2.set(Math.sin(this.yaw)*N,Math.sin(U),Math.cos(this.yaw)*N).applyQuaternion(this._q2.copy(this._qhS).invert()),W=Math.atan2(k.x,k.z),j=Math.asin(Ei(k.y,-1,1)),V=Ei(W,-.75,.75),B=Ei(j,-.45,.9),X=Math.max(Math.abs(W-V),Math.abs(j-B));k.set(Math.sin(V)*Math.cos(B),Math.sin(B),Math.cos(V)*Math.cos(B)).applyQuaternion(this._qhS);let $=bt(f),Z=this._f.set(0,1,0).applyQuaternion(this._qhS).multiplyScalar($);Z.y+=1-$,Z.lengthSq()<1e-4&&Z.set(0,1,0),Z.normalize(),Math.abs(Z.dot(k))>.995&&Z.set(0,0,1).applyQuaternion(this._qhS),this._mat.lookAt(this._v.set(0,0,0),k,Z),this._qfp.setFromRotationMatrix(this._mat).premultiply(this._q.copy(qc).slerp(this.qd,.5)),n.fp=this.blend<.5}this._fp.copy(this.eye);let p=1-Math.exp(-t*10),y=1-Math.exp(-t*5.5);this.pivot.x+=(this.chest.x-this.pivot.x)*p,this.pivot.z+=(this.chest.z-this.pivot.z)*p,this.pivot.y+=(this.chest.y+.22-this.pivot.y)*y;let b=bt(this.waves.sigHeight/16);this.push+=((this.auto?bt((45-(this.oxygen===void 0?100:this.oxygen))/40):0)-this.push)*(1-Math.exp(-t*.8));let _=(3.5+.7*b+1.8*bt(n.impactPeak-.6)+1.3*this.threat+2.8*(n.air||0)-.5*(n.crawlBlend||0)-1.2*this.push)*(1+.22*this.portrait)+(this.armAdd||0);this.arm+=(_-this.arm)*(1-Math.exp(-t*1.6));let A=Math.cos(this.pitch),x=this.yaw+this.orbit,E=this._f.set(Math.sin(x)*A,Math.sin(this.pitch),Math.cos(x)*A),T=this._v,M=this.holdAbove?0:Re(.7,1.8,i.eyeDepth);this.under+=(M-this.under)*(1-Math.exp(-t*(M>this.under?3.5:2.2)));let S=this.armOverride||this.arm,D=.5;for(let F=0;F<5&&(T.copy(this.pivot).addScaledVector(E,-S),T.y+=(.62+.16*S)*(1-.45*this.threat*(this.auto?1:0))+.25*this.portrait,!(this.under>.98));F++){let z=this.waves.sample(T.x,T.z,this._s).h,U=(T.x+this.pivot.x)*.5,N=(T.z+this.pivot.z)*.5,k=this.waves.sample(U,N,this._s).h,W=(T.y+this.pivot.y+.3)*.5,j=Math.max(z+D-T.y,k+.2-W);if(j<=0||S<=1.7){j>0&&(T.y+=j*(1-this.under));break}S=Math.max(1.7,S*.78)}if(this.armNow=S,this.tpPos.lerp(T,1-Math.exp(-t*7.5)),this.holdAbove){let F=this.waves.sample(this.tpPos.x,this.tpPos.z,this._s).h+1;this.tpPos.y<F&&(this.tpPos.y=F)}let G=this._v2.copy(this.pivot).addScaledVector(i.vel,.04);if(G.y+=.34+1.1*this.threat+.25*this.portrait,G.addScaledVector(E,2.2),this._mat.lookAt(this.tpPos,G,ir),this._qtp.setFromRotationMatrix(this._mat),this._q.copy(qc).slerp(this.qd,.45),this._qtp.premultiply(this._q),e.position.copy(this._fp).lerp(this.tpPos,l),e.quaternion.copy(this._qfp).slerp(this._qtp,l),l>0&&l<1){let F=this._fp.distanceTo(this.tpPos)*l,z=.32*(F/.28)*Math.exp(1-F/.28),U=.2*(F/.12)*Math.exp(1-F/.12),N=this._v2.set(0,0,-1).applyQuaternion(this._qfp);e.position.addScaledVector(N,U),e.position.y+=z}{let F=this.surfaceAtCam,z=e.matrixWorld.elements,U=F.nx*z[0]+F.nz*z[2],N=Math.max(-.16,Math.min(.16,-U*.38))*l*(1-this.under)*this.intensity;this.roll+=(N-this.roll)*(1-Math.exp(-t*1.6)),Math.abs(this.roll)>1e-4&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.set(0,0,1),this.roll))}this.fovKick+=(bt(n.impact-.6)*7-this.fovKick)*(1-Math.exp(-t*4));let K=yt(76,66,l)+this.fovKick*this.intensity+4*this.threat*l+9*(n.air||0)*l+7*(n.crawlBlend||0)*l-5*this.push*l+this.portrait*yt(13,19,l);this.debugView&&(e.position.copy(this.debugView.pos),this._mat.lookAt(e.position,this.debugView.target,ir),e.quaternion.setFromRotationMatrix(this._mat));let O=0;if(this.cine){let F=this.cine;F.t+=t;let z=this.pivot,U=N=>(N=bt(N),N*N*(3-2*N));if(F.mode==="intro"){let N=1-U(F.t/F.dur);e.position.addScaledVector(E,-24*N),e.position.y+=17*N,this._v2.copy(z),this._v2.y+=.3,this._mat.lookAt(e.position,this._v2,ir),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,bt(N*3)),O=-8*N,F.t>=F.dur&&(this.cine=null)}else if(F.mode==="lift"){let N=F.yaw0+2.4+F.t*.13,k=4.2+F.t*.55,W=z.x-Math.sin(N)*k,j=z.z-Math.cos(N)*k;this._v.set(W,Math.max(this.waves.heightFast(W,j)+.9,z.y-.9+F.t*.12),j),F.pos||(F.pos=e.position.clone()),F.pos.lerp(this._v,1-Math.exp(-t*(F.t<7?1.4:Math.max(.05,1.4-(F.t-7)*.5)))),e.position.copy(F.pos),this._v2.copy(z),this._v2.y+=.9+Math.min(1.6,F.t*.2),this._mat.lookAt(e.position,this._v2,ir),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,bt(F.t*1.5)),O=-Math.min(22,8+F.t*1.5)}else F.mode==="death"&&(F.pos||(F.pos=e.position.clone()),F.pos.y+=.22*t,e.position.copy(F.pos),this._mat.lookAt(e.position,z,ir),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,1-Math.exp(-t*2)),O=-Math.min(10,F.t*2))}let P=.07;(Math.abs(K+O-e.fov)>.01||Math.abs(P-e.near)>.002)&&(e.fov=K+O,e.near=P,e.updateProjectionMatrix());{if(this.shiver>.02){let z=this.shiver*.0035*this.intensity*yt(1.6,.6,l),U=this.time;this._v.set(Math.sin(U*57)*z,Math.sin(U*61+1)*z,Math.sin(U*53+2)*z*.6);let N=this._v.length();N>1e-6&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.multiplyScalar(1/N),N))}let F=bt(n.effort*1.1)*this.intensity*(1-.6*this.under);if(F>.02){let z=n.strokePhase||0,U=this.time,N=yt(3.4,.6,l);e.position.y+=Math.sin(z*2)*.018*F*N;let k=(Math.sin(U*11.3)+Math.sin(U*17.9+1.3))*.0012*F,W=(Math.sin(U*9.7+2.1)+Math.sin(U*15.1))*.0012*F;this._v.set(k+Math.sin(z*2+.6)*.006*F*N,W+Math.sin(z)*.007*F*N,Math.sin(z)*.014*F*N);let j=this._v.length();j>1e-5&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.multiplyScalar(1/j),j))}}e.updateMatrixWorld(!0),this.ch.head.visible=e.position.distanceTo(this.eye)>.19,this.waves.sample(e.position.x,e.position.z,this.surfaceAtCam)}};var Co=class{constructor(t){this.canvas=t,this.keys=new Set,this.dx=0,this.dy=0,this.locked=!1,this.enabled=!1,this.pressed=new Set,this.onLockChange=null,this.mouseL=!1,this.mouseR=!1,this.lastLook=-100,window.addEventListener("keydown",e=>{e.repeat||(this.keys.add(e.code),this.pressed.add(e.code),this.enabled&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseL=this.mouseR=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.locked||(this.mouseL=this.mouseR=!1),this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("mousemove",e=>{this.locked&&(this.dx+=e.movementX,this.dy+=e.movementY,Math.abs(e.movementX)+Math.abs(e.movementY)>1&&(this.lastLook=performance.now()/1e3))}),document.addEventListener("mousedown",e=>{this.locked&&(e.button===0&&(this.mouseL=!0),e.button===2&&(this.mouseR=!0))}),document.addEventListener("mouseup",e=>{e.button===0&&(this.mouseL=!1),e.button===2&&(this.mouseR=!1)}),document.addEventListener("contextmenu",e=>{(this.locked||this.enabled)&&e.preventDefault()}),this.virtual=null,this.touch=null}lock(){if(this.canvas.requestPointerLock){let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}}unlock(){document.exitPointerLock&&document.exitPointerLock()}down(t){return this.keys.has(t)}axisX(){if(this.virtual)return this.virtual.x||0;let t=(this.down("KeyD")||this.down("ArrowRight")?1:0)-(this.down("KeyA")||this.down("ArrowLeft")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.x:0)))}axisZ(){if(this.virtual)return this.virtual.z||0;let t=(this.down("KeyW")||this.down("ArrowUp")?1:0)-(this.down("KeyS")||this.down("ArrowDown")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.z:0)))}swim(){return this.virtual?!!(this.virtual.swim||this.virtual.sprint||this.virtual.up):this.down("Space")||this.down("ShiftLeft")||this.down("ShiftRight")||this.mouseL||!!(this.touch&&this.touch.swim)}dive(){return this.virtual?!!this.virtual.dive:this.down("KeyF")||this.down("KeyQ")||this.mouseR||!!(this.touch&&this.touch.dive)}busy(){return Math.abs(this.axisX())+Math.abs(this.axisZ())>.05||this.swim()||this.dive()}consumeMouse(t){return t.x=this.dx,t.y=this.dy,this.dx=0,this.dy=0,t}endFrame(){this.pressed.clear()}};var Po=class{constructor(t){this.waves=t,this.base=1,this.storm=1,this.locked=!1,this.wind=new w(26,0,0),this.windSpeed=26,this.gust=1,this.windAngle=0,this.rain=1,this.time=0}update(t){this.time+=t;let e=this.time,i=this.locked?0:(si(e*.021,3)-.5)*.22+(si(e*.09,5)-.5)*.08,n=bt(this.base+i*(.4+.6*this.base));this.storm+=(n-this.storm)*(1-Math.exp(-t*.25));let s=this.locked?0:(si(e*.035,11)-.5)*.9;this.windAngle=this.waves.windAngle+s,this.gust=.78+.34*si(e*.31,17)+.22*si(e*1.3,23)*this.storm,this.windSpeed=yt(9,31,this.storm)*this.gust,this.wind.set(Math.cos(this.windAngle)*this.windSpeed,0,Math.sin(this.windAngle)*this.windSpeed);let a=this.locked?.9:.62+.38*si(e*.05,29);this.rain=bt(yt(.25,1,this.storm)*a+.1*this.storm),ht.uStorm.value=this.storm,ht.uRain.value=this.rain,ht.uWindDir.value.set(Math.cos(this.windAngle),Math.sin(this.windAngle)),ht.uWindSpeed.value=this.windSpeed,ht.uFogDensity.value=yt(1/5200,1/1500,this.rain)*(.8+.4*this.storm);let o=yt(1.25,.86,this.storm);ht.uAmbient.value.set(.05*o,.06*o,.072*o),this.waves.setStorm(this.storm)}};var dy=`
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
}`,fy=`
precision highp float;
uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor; uniform float uIntensity;
varying vec2 vQ; varying float vA; varying float vSpot;
void main() {
  float across = 1.0 - vQ.x * vQ.x;
  float along = smoothstep(0.0, 0.25, vQ.y) * (1.0 - smoothstep(0.55, 1.0, vQ.y));
  float a = across * along * vA * uIntensity;
  // rain falling through the searchlight is what makes the beam visible: each streak lights up
  vec3 col = vec3(0.62, 0.68, 0.74) * (uAmbient * 3.4 + uFlashColor * uFlash * 2.2 + ${vn} * vSpot * 1.1);
  gl_FragColor = vec4(col, a * 0.26 * (1.0 + 2.2 * min(vSpot, 1.5)));
}`,py=`
attribute vec4 aSeed;
uniform float uTime; uniform float uTile; uniform float uIntensity;
${is}
${uo}
${ns}
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
}`,my=`
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
}`;function uf(r,t){let e=new Qi,i=t==="streak"?new Float32Array([-1,0,0,1,0,0,1,1,0,-1,1,0]):new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);e.setAttribute("position",new Nt(i,3)),e.setIndex([0,1,2,0,2,3]);let n=new Float32Array(r*4);for(let s=0;s<n.length;s++)n[s]=Math.random();return e.setAttribute("aSeed",new Ze(n,4)),e.instanceCount=r,e}var Lo=class{constructor(t){this.group=new ae,this.offset=new w,this.vel=new w(8,-9,0),this.camVel=new w,this._lastCam=new w,this._has=!1;let e=(i,n,s,a)=>{let o={uBox:{value:new w(...n)},uOffset:{value:this.offset},uVel:{value:this.vel},uCamVel:{value:this.camVel},uStreak:{value:a},uWidth:{value:s},uPx:{value:.001},uIntensity:{value:1},uSpotPos:ht.uSpotPos,uSpotDir:ht.uSpotDir,uSpotP:ht.uSpotP,uAmbient:ht.uAmbient,uFlash:ht.uFlash,uFlashColor:ht.uFlashColor},h=new gt(uf(i,"streak"),new ne({uniforms:o,vertexShader:dy,fragmentShader:fy,transparent:!0,depthWrite:!1,side:ke}));return h.frustumCulled=!1,h.renderOrder=20,h};this.near=e(Math.round(t.rain*.62),[22,16,22],.0024,.02),this.far=e(Math.round(t.rain*.38),[80,46,80],.007,.03),this.group.add(this.near,this.far),this.splashU={uWaveA:ht.uWaveA,uWaveB:ht.uWaveB,uBrkA:ht.uBrkA,uBrkB:ht.uBrkB,uBrkC:ht.uBrkC,uTime:ht.uTime,uTile:{value:34},uIntensity:{value:1},uAmbient:ht.uAmbient,uFlash:ht.uFlash,uFlashColor:ht.uFlashColor},this.splash=new gt(uf(t.splashes,"quad"),new ne({uniforms:this.splashU,vertexShader:py,fragmentShader:my,transparent:!0,depthWrite:!1})),this.splash.frustumCulled=!1,this.splash.renderOrder=12,this.group.add(this.splash)}update(t,e,i,n,s,a){this.vel.set(i.x*.5,-8.6-1.4*n,i.z*.5),this.offset.addScaledVector(this.vel,t);for(let c of["x","y","z"])Math.abs(this.offset[c])>4e3&&(this.offset[c]%=4e3);this._has&&t>0&&this.camVel.copy(e.position).sub(this._lastCam).multiplyScalar(1/t),this.camVel.length()>40&&this.camVel.setLength(40),this._lastCam.copy(e.position),this._has=!0;let o=2*Math.tan(In.degToRad(e.fov)*.5)/Math.max(1,a),h=n*(1-s);for(let c of[this.near,this.far])c.material.uniforms.uPx.value=o,c.material.uniforms.uIntensity.value=h*(c===this.far?.8:1),c.visible=h>.01;this.splashU.uIntensity.value=h,this.splash.visible=h>.01}};var gy=`
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
}`,by=`
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
}`,Fo=class{constructor(t=99){this.rnd=Je(t),this.group=new ae,this.strokes=[],this.age=1e9,this.active=!1,this.dir=new w(1,.3,0),this.pos=new w,this.dist=3e3,this.sheet=0,this.power=1,this.intensity=0,this.pendingThunder=[],this.onThunder=null,this.time=0,this.next=6,this.rate=1,this.mat=new ne({uniforms:{uWidth:{value:6},uPower:{value:0},uBranchK:{value:1},uColor:{value:new w(.82,.88,1)},uFog:{value:1}},vertexShader:gy,fragmentShader:by,transparent:!0,blending:un,depthWrite:!1,depthTest:!0,side:ke}),this.bolt=new gt(new oe,this.mat),this.bolt.frustumCulled=!1,this.bolt.visible=!1,this.bolt.renderOrder=2,this.group.add(this.bolt);let e=document.createElement("canvas");e.width=e.height=128;let i=e.getContext("2d"),n=i.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(255,255,255,0.55)"),n.addColorStop(.45,"rgba(255,255,255,0.16)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,128,128);let s=new Fi(e);s.colorSpace=He,this.glows=[0,1,2].map(()=>{let a=new Ga(new Rr({map:s,color:0,blending:un,depthWrite:!1,transparent:!0,fog:!1}));return a.visible=!1,a.renderOrder=1,this.group.add(a),a})}_buildBolt(t,e){let i=this.rnd,n=[],s=(m,v,g,p,y,b)=>{let _=[m,v],A=m.distanceTo(v),x=A*(y===0?.17:.24);for(let T=0;T<b;T++){let M=[_[0]];for(let S=0;S<_.length-1;S++){let D=_[S].clone().lerp(_[S+1],.5);D.x+=(i()-.5)*x,D.z+=(i()-.5)*x,D.y+=(i()-.5)*x*.4,M.push(D,_[S+1])}_=M,x*=.6}let E=_.length-1;for(let T=0;T<E;T++){let M=T/E,S=(T+1)/E;n.push([_[T],_[T+1],yt(g,p,Math.pow(M,.8)),yt(g,p,Math.pow(S,.8)),y>0?1:0]);let D=y===0?.085*(M<.72?1:.35):y===1?.045:.02;if(y<3&&T>2&&T<E-3&&i()<D){let G=_[T+1].clone().sub(_[T]).normalize(),K=A*(y===0?.1+i()*.3:.18+i()*.3)*(1-.45*M),O=i()*6.283,P=.35+i()*.55,F=new w(G.x+Math.cos(O)*P,G.y-.15-i()*.3,G.z+Math.sin(O)*P).normalize(),z=yt(g,p,M)*(.5+i()*.25);s(_[T].clone(),_[T].clone().addScaledVector(F,K),z,.02,y+1,y===0?5:4)}}};s(t,e,1,.82,0,7);let a=n.length,o=new Float32Array(a*4*3),h=new Float32Array(a*4*3),c=new Float32Array(a*4),l=new Float32Array(a*4),u=new Float32Array(a*4),f=new Uint32Array(a*6);for(let m=0;m<a;m++){let[v,g,p,y,b]=n[m],_=g.clone().sub(v).normalize(),A=(x,E,T,M)=>{let S=(m*4+x)*3;o[S]=E.x,o[S+1]=E.y,o[S+2]=E.z,h[S]=_.x,h[S+1]=_.y,h[S+2]=_.z,c[m*4+x]=T,l[m*4+x]=M,u[m*4+x]=b};A(0,v,-1,p),A(1,v,1,p),A(2,g,1,y),A(3,g,-1,y),f.set([m*4,m*4+1,m*4+2,m*4,m*4+2,m*4+3],m*6)}let d=new oe;d.setAttribute("position",new Nt(o,3)),d.setAttribute("normal",new Nt(h,3)),d.setAttribute("aSide",new Nt(c,1)),d.setAttribute("aBright",new Nt(l,1)),d.setAttribute("aBranch",new Nt(u,1)),d.setIndex(new Nt(f,1)),this.bolt.geometry.dispose(),this.bolt.geometry=d}strike(t,e={}){let i=this.rnd,n=e.azimuth!==void 0?e.azimuth:i()*Math.PI*2;this.dist=e.dist!==void 0?e.dist:500+Math.pow(i(),1.6)*5e3,this.sheet=e.sheet!==void 0?e.sheet:i()<.38?1:0,this.power=e.power!==void 0?e.power:yt(1.45,.55,bt(this.dist/7e3))*(.8+i()*.4),this.pos.set(t.x+Math.cos(n)*this.dist,0,t.z+Math.sin(n)*this.dist);let s=1300+i()*700;this.dir.set(Math.cos(n)*this.dist,this.sheet?s:s*.55,Math.sin(n)*this.dist).normalize(),this.strokes.length=0;let a=2+Math.floor(i()*4),o=0;for(let h=0;h<a;h++)this.strokes.push({t:o,peak:(h===0?1:.35+i()*.65)*this.power,tau:.045+i()*.09}),o+=.045+i()*.13;if(this.age=0,this.active=!0,!this.sheet){let h=new w(this.pos.x+(i()-.5)*500,s,this.pos.z+(i()-.5)*500);this._buildBolt(h,new w(this.pos.x,-5,this.pos.z)),this.mat.uniforms.uWidth.value=Math.max(5,this.dist*.0075),this.boltTop=h.clone()}{let h=this.sheet?this.pos.x:(this.boltTop.x+this.pos.x)*.5,c=this.sheet?this.pos.z:(this.boltTop.z+this.pos.z)*.5,l=this.glows;this.sheet?(l[0].position.set(this.pos.x,s*.9,this.pos.z),l[0].scale.setScalar(this.dist*.75),l[1].position.set(this.pos.x+(i()-.5)*this.dist*.4,s*.8,this.pos.z+(i()-.5)*this.dist*.4),l[1].scale.setScalar(this.dist*.45),l[2].scale.setScalar(.001)):(l[0].position.set(this.boltTop.x,s*.93,this.boltTop.z),l[0].scale.setScalar(this.dist*.34),l[1].position.set(h,s*.48,c),l[1].scale.setScalar(this.dist*.22),l[2].position.set(this.pos.x,40,this.pos.z),l[2].scale.setScalar(this.dist*.12))}return this.pendingThunder.push({at:this.time+Math.min(2.2,this.dist/343*.3),dist:this.dist,power:this.power,pos:this.pos.clone().setY(600)}),this}update(t,e,i,n=!0){this.time+=t,n&&(this.next-=t*i,this.next<=0&&(this.strike(e),this.next=this.rnd()<.22?1.2+this.rnd()*2.5:7+this.rnd()*22));let s=0;if(this.active){this.age+=t;let a=!1;for(let o of this.strokes){let h=this.age-o.t;if(h<0){a=!0;continue}let c=o.peak*Math.min(1,h/.008)*Math.exp(-h/o.tau);c>.004&&(a=!0),s+=c}s*=.85+.3*Math.sin(this.age*190)*Math.sin(this.age*67),a||(this.active=!1,s=0)}this.intensity=Math.max(0,s),ht.uFlash.value=this.intensity*.62,this.active&&(ht.uFlashDir.value.copy(this.dir),ht.uFlashSheet.value=this.sheet),this.bolt.visible=this.active&&!this.sheet&&this.intensity>.01,this.mat.uniforms.uPower.value=this.intensity*30,this.mat.uniforms.uBranchK.value=Math.exp(-this.age/.17);{let a=Math.exp(-this.dist*ht.uFogDensity.value*.55),o=this.active?this.intensity*a:0,h=this.sheet?[.14,.09,0]:[.075,.03,.05];for(let c=0;c<3;c++){let l=this.glows[c];l.visible=o*h[c]>.002,l.material.color.setRGB(.62*o*h[c],.7*o*h[c],1*o*h[c])}}this.mat.uniforms.uFog.value=Math.exp(-this.dist*ht.uFogDensity.value*.55);for(let a=this.pendingThunder.length-1;a>=0;a--)if(this.time>=this.pendingThunder[a].at){let o=this.pendingThunder.splice(a,1)[0];this.onThunder&&this.onThunder(o)}}};var vy=`
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
}`,xy=`
precision highp float;
uniform sampler2D uTex; uniform sampler2D uSplashTex; uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor;
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist; varying float vAge; varying float vSeed; varying float vSpot;
void main() {
  vec3 light = uAmbient * 2.6 + uFlashColor * uFlash * 1.9 + ${vn} * min(vSpot, 1.0) * 0.14;
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
}`;function yy(r=31,t=256){let e=Je(r),i=new Float32Array(4096);for(let c=0;c<i.length;c++)i[c]=e();let n=(c,l,u)=>i[((c*73+l*151+u*37)%4096+4096)%4096],s=(c,l,u)=>{let f=Math.floor(c),d=Math.floor(l),m=c-f,v=l-d,g=m*m*(3-2*m),p=v*v*(3-2*v);return(n(f,d,u)*(1-g)+n(f+1,d,u)*g)*(1-p)+(n(f,d+1,u)*(1-g)+n(f+1,d+1,u)*g)*p},a=(c,l,u,f)=>{let d=.5,m=0;for(let v=0;v<f;v++)m+=d*s(c,l,u+v*7),c=c*2.03+11.3,l=l*2.03+5.7,d*=.5;return m},o=new Uint8Array(t*2*t*2*4);for(let c=0;c<2;c++)for(let l=0;l<2;l++){let u=l+c*2+1;for(let f=0;f<t;f++)for(let d=0;d<t;d++){let m=(d+.5)/t*2-1,v=(f+.5)/t*2-1,g=m+(a(m*2.2+3,v*2.2,u+20,3)-.5)*.7,p=v+(a(m*2.2,v*2.2+9,u+40,3)-.5)*.7,y=Math.hypot(g,p)*(.92+.5*(a(Math.atan2(p,g)*1.6+5,1.5,u+60,2)-.5)),b=Math.max(0,1-y*1.08),_=Math.max(0,Math.min(1,(a(g*3.1+7,p*3.1+2,u,4)*1.5-.22)*Math.pow(b,.7)*1.9)),A=a(m*15+1,v*15+4,u+80,3),x=((c*t+f)*t*2+l*t+d)*4;o[x]=Math.round(_*255),o[x+1]=Math.round(A*255),o[x+2]=0,o[x+3]=255}}let h=new Hi(o,t*2,t*2,de,Ye);return h.minFilter=ee,h.magFilter=ee,h.generateMipmaps=!1,h.needsUpdate=!0,h}function _y(r=77,t=160){let e=Je(r),i=8,n=16,s=4,a=5,o=document.createElement("canvas");o.width=o.height=t*i;let h=o.getContext("2d");h.fillStyle="#000",h.fillRect(0,0,o.width,o.height),h.globalCompositeOperation="lighter",h.lineCap="round";let c=.5435,l=(t-2*a)/1.6,u=(t-2*a-3)/1.02,f=t/160,d=(v,g,p)=>{let y=Math.min(1,Math.max(0,(p-v)/(g-v)));return y*y*(3-2*y)};for(let v=0;v<s;v++){let g=(e()-.5)*.14,p=[],y=7+Math.floor(e()*4);for(let _=0;_<y;_++){let A=g+(e()<.3?(e()-.5)*.26:(e()<.5?-1:1)*(.22+.55*e())),x=(.58+.42*e())*(1-.3*Math.min(1,Math.abs(A-g)/.8)),E=10+Math.floor(e()*8),T=.9+1.2*e(),M=.02+.05*e();for(let S=0;S<E;S++){let D=.28+.72*(S+e()*.7)/E;p.push({a:A+(e()-.5)*M*(1+2*(1-D)),v:x*D,r:T*(S===E-1?2.5:.9+1.5*e()*e())*(.7+.5*D),fine:.25+.3*D,kd:.45,die:.8+.2*e(),al:.5+.3*e()})}}for(let _=0;_<230;_++)p.push({a:g+(e()+e()+e()-1.5)*.85,v:.2+.74*Math.pow(e(),1.1),r:.6+1*e()*e(),fine:.75+.25*e(),kd:.5+.4*e(),die:.45+.55*e(),al:.3+.35*e()});let b=[];for(let _=0;_<14;_++)b.push({x:e()-.5,y:e(),r:.5+.5*e()});for(let _=0;_<n;_++){let A=_/(n-1),x=.14+A*3.56,E=_%i*t,T=(i-1-(v*2+Math.floor(_/i)))*t;h.save(),h.beginPath(),h.rect(E+a,T+a,t-2*a,t-2*a),h.clip();let M=E+t/2,S=T+t-a-1,D=Math.sin(Math.min(1,A*3.2)*Math.PI)*.9+.1*(1-A),G=.1+.22*Math.min(1,A*2.2);for(let K of b){let O=M+K.x*G*2*l,P=S-K.y*.1*D*u,F=(.035+.045*K.r)*l*(.6+.6*D),z=h.createRadialGradient(O,P,0,O,P,F);z.addColorStop(0,`rgba(48,${Math.round(48*.22)},0,${.3*(1-A)*(.4+.6*D)})`),z.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=z,h.beginPath(),h.arc(O,P,F,0,6.283),h.fill()}for(let K of p){let O=Math.sin(K.a)*K.v,P=Math.cos(K.a)*K.v,F=Math.exp(-K.kd*x),z=O*(1-F)/K.kd,U=P*x-.5*c*x*x;if(U<0)continue;let N=O*F*l,k=-(P-c*x)*u,W=M+z*l,j=S-U*u,V=Math.max(0,1-x/1.5),B=K.fine*(1-.7*V),X=K.al*(1-d(K.die-.22,K.die,A))*(.6+.4*V);if(X<.02)continue;let $=.105+.02*V;h.strokeStyle=`rgba(48,${Math.round(48*B)},0,${X})`,h.lineWidth=Math.max(1,K.r*f*(.9+2.95*V)),h.beginPath(),h.moveTo(W-N*$,j-k*$),h.lineTo(W,j),h.stroke()}h.restore()}}let m=new Fi(o);return m.colorSpace=He,m.minFilter=Ke,m.magFilter=ee,m.generateMipmaps=!0,m}var Io=class{constructor(t,e=6e3){this.waves=t,this.max=e,this._rx=1,this._rz=0,this.px=new Float32Array(e),this.py=new Float32Array(e),this.pz=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vz=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.grow=new Float32Array(e),this.kind=new Float32Array(e),this.stretch=new Float32Array(e),this.rot=new Float32Array(e),this.alpha=new Float32Array(e),this.seed=new Float32Array(e),this.head=0,this.alive=0;let i=new Qi;i.setAttribute("position",new Nt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]);let n=s=>{let a=new Ze(new Float32Array(e*s),s);return a.setUsage(mi),a};this.aPos=n(4),this.aData=n(4),this.aVel=n(3),this.aMisc=n(2),i.setAttribute("aPos",this.aPos),i.setAttribute("aData",this.aData),i.setAttribute("aVel",this.aVel),i.setAttribute("aMisc",this.aMisc),i.instanceCount=0,this.mesh=new gt(i,new ne({uniforms:{uTex:{value:yy()},uSplashTex:{value:_y()},uAmbient:ht.uAmbient,uFlash:ht.uFlash,uFlashColor:ht.uFlashColor,uSpotPos:ht.uSpotPos,uSpotDir:ht.uSpotDir,uSpotP:ht.uSpotP},vertexShader:vy,fragmentShader:xy,transparent:!0,depthWrite:!1})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=15,this._s=bi(),this._tick=0,this.emitAcc=0,this.near=!1,this.hot=[]}emit(t,e,i,n,s,a,o,h,c,l=0,u=1,f=-1){let d=this.head;this.head=(this.head+1)%this.max,this.px[d]=t,this.py[d]=e,this.pz[d]=i,this.vx[d]=n,this.vy[d]=s,this.vz[d]=a,this.life[d]=o,this.maxLife[d]=o,this.size[d]=h,this.kind[d]=c,this.grow[d]=l,this.rot[d]=c>2.5?this.lean||0:c>1.5?0:Math.random()*6.283,this.alpha[d]=u,this.seed[d]=Math.random()*.999+(this.near?2:0),this.stretch[d]=f>=0?f:c<.5?1:c>1.5?2.6:.35}burst(t,e,i,n,s,a=0,o=0){let h=this.near;this.near=!0;let c=Math.min(1.9,.42+n*.27),l=s.x*.1,u=s.z*.1,f=Math.min(230,Math.round(8+n*38));for(let g=0;g<f;g++){let p=Math.random()*6.283,y=.12+Math.random()*.34*c,b=(1+2.4*Math.random())*c,_=(1.8+3.6*Math.pow(Math.random(),1.4))*c;this.emit(t+Math.cos(p)*y,e+.03+Math.random()*.1,i+Math.sin(p)*y,Math.cos(p)*b+a*b*1.5+l,_,Math.sin(p)*b+o*b*1.5+u,.55+Math.random()*.75,.01+Math.pow(Math.random(),2)*.026,0,0,.95)}let d=Math.min(60,Math.round(n*10));for(let g=0;g<d;g++){let p=Math.random()*6.283,y=Math.random()*.7*c;this.emit(t+Math.cos(p)*.08,e+.05,i+Math.sin(p)*.08,Math.cos(p)*y+a*c+l,(3.2+4.2*Math.random())*c,Math.sin(p)*y+o*c+u,.6+Math.random()*.7,.012+Math.random()*.022,0,0,.95)}let m=Math.max(1,Math.min(5,Math.round(n*1.1)));for(let g=0;g<m;g++){let p=Math.random()*6.283,y=.24*c*Math.random(),b=(.55+.45*Math.random())*c*(g?.8:1.15);this.lean=(Math.random()-.5)*.3+(a*this._rx+o*this._rz)*.4,this.emit(t+Math.cos(p)*y,e-.03,i+Math.sin(p)*y,a*.5*c,0,o*.5*c,.62*Math.sqrt(b/.45)*(.92+.16*Math.random()),b,3,0,.8,0)}this.lean=0;let v=Math.max(0,Math.min(14,Math.round(n*2.8-2.6)));for(let g=0;g<v;g++){let p=Math.random()*6.283,y=Math.random()*.9*c;this.emit(t+Math.cos(p)*.3,e+.15+Math.random()*.3,i+Math.sin(p)*.3,Math.cos(p)*y+l*2,.5+Math.random()*1.1,Math.sin(p)*y+u*2,.9+Math.random()*1.1,(.24+Math.random()*.3)*c,1,.5,.2,.3)}this.near=h}slap(t,e,i,n,s,a,o=0,h=0,c=0,l=1){let u=.62+.38*Math.min(2.4,n),f=this.near;this.near=!0;let d=n>1.15?2:1,m=s*this._rx+a*this._rz;for(let g=0;g<d;g++){let p=(.5+.16*Math.random())*u*(.62+.38*l)*(g?.7:1);this.lean=m*.42+(Math.random()-.5)*.16,this.emit(t+(Math.random()-.5)*.08+s*.05,e-.02,i+(Math.random()-.5)*.08+a*.05,o+s*.4*u,h,c+a*.4*u,.62*Math.sqrt(p/.45)*(.92+.16*Math.random()),p,3,0,.8,0)}this.lean=0;let v=Math.round(8+n*16);for(let g=0;g<v;g++){let p=Math.random()*6.283,y=Math.random(),b=(.3+1.6*y*y)*u,_=(1.4+2.8*Math.pow(Math.random(),1.2))*u,A=Math.random(),x=A<.55?.01+Math.random()*.012:A<.9?.02+Math.random()*.016:.036+Math.random()*.022;this.emit(t+Math.cos(p)*.08*u,e+.02+Math.random()*.08,i+Math.sin(p)*.08*u,o+Math.cos(p)*b+s*(.3+1.2*Math.random())*u,h+_,c+Math.sin(p)*b+a*(.3+1.2*Math.random())*u,.36+Math.random()*.44,x,0,0,1)}this.near=f}fling(t,e,i,n,s,a,o){let h=this.near;if(this.near=!0,o>.45){let l=(.26+.14*Math.random())*(.6+.5*o),u=Math.hypot(n,a)+1e-4;this.lean=(n*this._rx+a*this._rz)/u*Math.min(1,u/3)*.5,this.emit(t,e-.04,i,n*.25,0,a*.25,.62*Math.sqrt(l/.45),l,3,0,.7,0),this.lean=0}let c=Math.round(10+o*22);for(let l=0;l<c;l++){let u=.2+.8*Math.random(),f=Math.random();this.emit(t+(Math.random()-.5)*.12,e+Math.random()*.08,i+(Math.random()-.5)*.12,n*u+(Math.random()-.5)*1.3,s*u+.5+Math.random()*1.6,a*u+(Math.random()-.5)*1.3,.38+Math.random()*.5,f<.6?.01+Math.random()*.012:f<.93?.022+Math.random()*.018:.04+Math.random()*.025,0,0,1)}this.near=h}seedCrests(t,e,i,n,s){let a=this.waves,o=this._s;this.hot.length=0;let h=Math.round(s*(.5+.5*n)),c=Math.hypot(i.x,i.z)+.001;for(let u=0;u<h;u++){let f=Math.random()*6.283,d=3+Math.pow(Math.random(),1.6)*95,m=e.x+Math.cos(f)*d,v=e.z+Math.sin(f)*d;a.sample(m,v,o);let g=Math.max(0,.42-o.jac)*2.4,p=Math.max(g,o.aer*1.6,o.turb*.5);if(p<.05)continue;(this.hot.length<6||p>this.hot[this.hot.length-1].amount)&&(this.hot.push({x:m,y:o.h,z:v,amount:p}),this.hot.sort((b,_)=>_.amount-b.amount),this.hot.length>6&&(this.hot.length=6));let y=Math.min(12,Math.round(2+p*6));for(let b=0;b<y;b++){let _=Math.random()<.36,A=(Math.random()-.5)*2.4,x=(Math.random()-.5)*2.4,E=(.8+2.8*Math.random())*(.6+p);this.emit(m+A,o.h+.05+Math.random()*.25,v+x,o.vx+i.x*(.22+.3*Math.random()),o.vy*.5+E,o.vz+i.z*(.22+.3*Math.random()),_?1.4+Math.random()*1.8:.6+Math.random()*.9,_?.4+Math.random()*.7:.014+Math.pow(Math.random(),2)*.04,_?1:0,_?1.2:0,_?.2:.9)}}let l=Math.round(s*.34*n*n);for(let u=0;u<l;u++){let f=Math.random()*6.283,d=2+Math.pow(Math.random(),1.3)*48,m=e.x+Math.cos(f)*d,v=e.z+Math.sin(f)*d;a.sample(m,v,o);let g=Math.max(0,-(o.nx*i.x+o.nz*i.z)/c);if(!(Math.random()>.35+1.6*g))for(let p=0;p<2;p++)this.emit(m+(Math.random()-.5)*3,o.h+.1+Math.random()*.5,v+(Math.random()-.5)*3,o.vx+i.x*(.45+.4*Math.random()),.4+Math.random()*1.6,o.vz+i.z*(.45+.4*Math.random()),.6+Math.random()*.9,.2+Math.random()*.3,2,.25,.07,1.1)}}seedBreakers(t,e,i){let n=this.waves;for(let s of n.breakers){if(!s.active||s.height<2)continue;let a=s.brk<.01?Math.min(.34,Math.max(0,(s.height-3.5)/18)):0,o=Math.max(s.curl,s.brk*.8,s.turb*.35,a),h=o===a;if(o<.05)continue;let c=e.x-s.ox,l=e.z-s.oz,u=-c*s.dz+l*s.dx,f=c*s.dx+l*s.dz-s.s;if(Math.abs(f)>160+s.height*3)continue;let d=Math.min(2.2,.7+s.height/16);this.emitAcc+=t*620*o*Math.min(1.6,s.height/8)*(this.thin===void 0?1:this.thin);let m=Math.min(130,Math.floor(this.emitAcc));this.emitAcc-=m;for(let v=0;v<m;v++){let g=u+(Math.random()-.5)*110*d;if(Math.exp(-(g*g)/(s.width*s.width))<.15)continue;let b=2.6*Math.sin(g*.047+s.seed*.6)+1.2*Math.sin(g*.13+s.seed*2.1)+(h?(Math.random()-.5)*s.front*.45:(Math.random()-.35)*s.front*1.3),_=s.ox+s.dx*(s.s+b)-s.dz*g,A=s.oz+s.dz*(s.s+b)+s.dx*g,x=n.heightFast(_,A)+Math.random()*.6,E=Math.random()<(s.mega?.14:.26)*(this.thin===void 0?1:this.thin),T=s.speed*(.55+.6*Math.random());this.emit(_,x,A,s.dx*T+i.x*.2,(1.5+5.5*Math.random())*(.5+o)*d,s.dz*T+i.z*.2,E?2+Math.random()*2.4:.8+Math.random()*1.1,E?Math.min(3,(.7+Math.random()*1.2)*d):.02+Math.pow(Math.random(),2)*.07,E?1:0,E?1.4:0,E?.17:.9,E?.5:1)}}}update(t,e,i){let n=this.max,s=this.waves,a=0,o=this.aPos.array,h=this.aData.array,c=this.aVel.array,l=this.aMisc.array;this._tick=(this._tick+1)%3;for(let u=0;u<n;u++){let f=this.life[u];if(f<=0||(f-=t,this.life[u]=f,f<=0))continue;let d=this.kind[u],m=this.seed[u]>=2;if(d>2.5)this.px[u]+=this.vx[u]*t,this.py[u]+=this.vy[u]*t,this.pz[u]+=this.vz[u]*t;else{let y=m?d>.5?.35:.06:d>.5?2.4:.5,b=Math.exp(-y*t);this.vx[u]=i.x+(this.vx[u]-i.x)*b,this.vz[u]=i.z+(this.vz[u]-i.z)*b,this.vy[u]=(this.vy[u]-(d>.5?m?8.2:2.6:9.81)*t)*(d>.5&&!m?b:1),this.px[u]+=this.vx[u]*t,this.py[u]+=this.vy[u]*t,this.pz[u]+=this.vz[u]*t}if(this.size[u]+=this.grow[u]*t,d<2.5&&u%3===this._tick&&this.vy[u]<0&&this.py[u]<s.heightFast(this.px[u],this.pz[u])-.12){this.life[u]=0;continue}let v=1-f/this.maxLife[u],g=d<.5?Math.min(1,(1-v)*6):d>2.5?Math.min(1,v*14):Math.min(1,v*9)*Math.min(1,(1-v)*3),p=a*4;o[p]=this.px[u],o[p+1]=this.py[u],o[p+2]=this.pz[u],o[p+3]=this.size[u],h[p]=this.alpha[u]*g,h[p+1]=this.rot[u],h[p+2]=this.stretch[u],h[p+3]=d,c[a*3]=this.vx[u],c[a*3+1]=this.vy[u],c[a*3+2]=this.vz[u],l[a*2]=v,l[a*2+1]=this.seed[u],a++}this.alive=a,this.mesh.geometry.instanceCount=a,this.aPos.needsUpdate=!0,this.aData.needsUpdate=!0,this.aVel.needsUpdate=!0,this.aMisc.needsUpdate=!0}};var My=`
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
}`,wy=`
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
}`,Ey=`
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
}`,Sy=`
precision highp float;
uniform vec3 uLight;
varying vec2 vUv; varying float vA;
void main() {
  if (dot(vUv, vUv) > 1.0 || vA < 0.35) discard;
  gl_FragColor = vec4(uLight * 0.55, 1.0);
}`;function df(r,t){let e=new Qi;if(e.setAttribute("position",new Nt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),e.setIndex([0,1,2,0,2,3]),t){let i=new Float32Array(r*t);for(let n=0;n<i.length;n++)i[n]=Math.random();e.setAttribute("aSeed",new Ze(i,t))}return e.instanceCount=r,e}var Do=class{constructor(t,e){this.waves=t,this.group=new ae,this.under=0,this.isUnder=!1,this.depth=0,this.aeration=0,this.burst=0,this.onEnter=null,this.onExit=null,this.light=new w;let i=this.max=e.bubbles;this.bx=new Float32Array(i),this.by=new Float32Array(i),this.bz=new Float32Array(i),this.bvx=new Float32Array(i),this.bvz=new Float32Array(i),this.br=new Float32Array(i),this.bl=new Float32Array(i),this.bp=new Float32Array(i),this.head=0;let n=df(i,0);this.aPos=new Ze(new Float32Array(i*4),4),this.aPos.setUsage(mi),this.aSeed=new Ze(new Float32Array(i),1),this.aSeed.setUsage(mi),n.setAttribute("aPos",this.aPos),n.setAttribute("aSeed",this.aSeed),n.instanceCount=0,this.bubbles=new gt(n,new ne({uniforms:{uPx:{value:.001},uLight:{value:this.light}},vertexShader:My,fragmentShader:wy})),this.bubbles.frustumCulled=!1,this.bubbles.renderOrder=8,this.moteOffset=new w,this.motes=new gt(df(e.motes,4),new ne({uniforms:{uBox:{value:new w(7,7,7)},uOffset:{value:this.moteOffset},uPx:{value:.001},uTime:ht.uTime,uLight:{value:this.light}},vertexShader:Ey,fragmentShader:Sy})),this.motes.frustumCulled=!1,this.motes.renderOrder=8,this.motes.visible=!1,this.group.add(this.bubbles,this.motes),this._w={vx:0,vy:0,vz:0},this._tick=0,this._exhale=0,this._aerAcc=0,this._kick=0,this._n=new w}bubble(t,e,i,n,s=6,a=0,o=0){let h=this.head;this.head=(this.head+1)%this.max,this.bx[h]=t,this.by[h]=e,this.bz[h]=i,this.br[h]=n,this.bl[h]=s,this.bp[h]=Math.random()*6.283,this.bvx[h]=a,this.bvz[h]=o}burstAt(t,e,i,n=1){for(let s=0;s<e;s++){let a=Math.random()*6.283,o=Math.acos(2*Math.random()-1),h=i*Math.cbrt(Math.random());this.bubble(t.x+Math.sin(o)*Math.cos(a)*h,t.y+Math.cos(o)*h,t.z+Math.sin(o)*Math.sin(a)*h,(.002+Math.pow(Math.random(),3)*.02)*n,2.5+Math.random()*5,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2)}}update(t,e,i,n,s,a,o,h,c,l){let u=i,f=e.position,d=this._n.set(u.nx,u.ny,u.nz),m=d.x*0+d.y*(f.y-u.h)+d.z*0;this.depth=-m,o.u.uWaterPlane.value.set(d.x,d.y,d.z,-(d.x*f.x+d.y*u.h+d.z*f.z)),o.u.uUnderAmount.value=m<.4?1:0;let v=this.isUnder;this.isUnder=v?m<.03:m<-.03;let g=1-Re(-.12,.05,m);this.under+=(g-this.under)*(1-Math.exp(-t*18)),this.isUnder&&!v&&this.onEnter&&this.onEnter(),!this.isUnder&&v&&this.onExit&&this.onExit();let p=Math.max(0,this.depth),y=ht.uAmbient.value,b=ht.uFlash.value,_=ht.uFlashColor.value,A=Math.exp(-p*.085);o.u.uUnderColor.value.set((y.x*.9+_.x*b*.5)*.1*A,(y.y*.9+_.y*b*.5)*.3*A,(y.z*.9+_.z*b*.5)*.38*A),this.burst=Math.max(0,this.burst-t*.7);let x=Math.min(1,(u.aer*1.15+this.burst*.8)*Math.exp(-p/3.2)+u.turb*.22*Math.exp(-p/4.5));this.aeration+=(x-this.aeration)*(1-Math.exp(-t*(x>this.aeration?12:1.6))),o.u.uAeration.value=this.aeration*this.under;let E=1+2.8*this.aeration;o.u.uUnderExt.value.set(.3*E,.13*E,.1*E),o.u.uUnderDistort.value=.004+.01*Math.min(1,u.turb+this.aeration),o.u.uShaft.value=(.9-.5*h.storm+b*3)*Math.exp(-p*.12),o.u.uExposureBias.value=1+(.62*Math.exp(-p*.045)-1)*this.under;let T=2.6*A*(1+5*this.aeration);this.light.set((y.x*T+_.x*b*.8)*1,(y.y*T+_.y*b*.8)*1.25,(y.z*T+_.z*b*.8)*1.35);let M=2*Math.tan(In.degToRad(e.fov)*.5)/Math.max(1,l);if(this.bubbles.material.uniforms.uPx.value=M,this.motes.material.uniforms.uPx.value=M,a.wasUnder&&a.alive)for(this._exhale+=t*(5+16*s.effort+22*bt((40-a.oxygen)/40));this._exhale>=1;)this._exhale-=1,this.bubble(c.x+(Math.random()-.5)*.06,c.y,c.z+(Math.random()-.5)*.06,.003+Math.random()*.012,5,n.vel.x*.5,n.vel.z*.5);if(n.subFrac>.5)for(this._kick+=t*Math.min(140,n.relSpeed*n.relSpeed*3.2);this._kick>=1;){this._kick-=1;let P=n.points[2+(Math.random()*9|0)].world;this.bubble(P.x+(Math.random()-.5)*.3,P.y+(Math.random()-.5)*.3,P.z+(Math.random()-.5)*.3,.002+Math.random()*.007,3+Math.random()*3)}if(this.under>.3&&this.aeration>.04){this._aerAcc+=t*900*this.aeration;let P=Math.min(60,Math.floor(this._aerAcc));for(this._aerAcc-=P;P-- >0;){let F=Math.random()*6.283,z=.4+Math.random()*3.6,U=(Math.random()-.4)*3.2;this.bubble(f.x+Math.cos(F)*z,f.y+U,f.z+Math.sin(F)*z,.002+Math.pow(Math.random(),2.5)*.03,2+Math.random()*4,(Math.random()-.5)*2,(Math.random()-.5)*2)}}let S=this.waves,D=this.aPos.array,G=this.aSeed.array,K=0;this._tick=(this._tick+1)%4;let O=S.breakers.some(P=>P.active&&(P.roll>.01||P.turb>.01));for(let P=0;P<this.max;P++){let F=this.bl[P];if(F<=0)continue;F-=t,this.bl[P]=F;let z=this.br[P],U=.18+2.6*Math.sqrt(z);this.bp[P]+=t*(5+30*z/.02);let N=this.bvx[P]+Math.sin(this.bp[P])*.12,k=U,W=this.bvz[P]+Math.cos(this.bp[P]*.8)*.12;if(O){let B=this._w;B.vx=0,B.vy=0,B.vz=0,S.breakerFlow(this.bx[P],this.by[P],this.bz[P],u.h,B),N+=B.vx,k+=B.vy,W+=B.vz}let j=Math.exp(-t*1.5);if(this.bvx[P]*=j,this.bvz[P]*=j,this.bx[P]+=N*t,this.by[P]+=k*t,this.bz[P]+=W*t,P%4===this._tick&&this.by[P]>S.heightFast(this.bx[P],this.bz[P])-.02){this.bl[P]=0;continue}if(F<=0)continue;let V=K*4;D[V]=this.bx[P],D[V+1]=this.by[P],D[V+2]=this.bz[P],D[V+3]=z*Math.min(1,F*2),G[K]=this.bp[P],K++}this.bubbles.geometry.instanceCount=K,this.aPos.needsUpdate=!0,this.aSeed.needsUpdate=!0,this.bubbles.visible=K>0,this.motes.visible=this.under>.02,this.moteOffset.addScaledVector(n.relFlow,t*.6),this.moteOffset.y-=t*.01}};function Xc(r,t,e){let i=Math.floor(r.sampleRate*t),n=r.createBuffer(1,i,r.sampleRate),s=n.getChannelData(0),a=0,o=0,h=0,c=0;for(let u=0;u<i;u++){let f=Math.random()*2-1;e==="white"?s[u]=f*.6:e==="pink"?(a=.99765*a+f*.099046,o=.963*o+f*.2965164,h=.57*h+f*1.0526913,s[u]=(a+o+h+f*.1848)*.16):(c=(c+.02*f)/1.02,s[u]=c*3.2)}let l=Math.floor(r.sampleRate*.05);for(let u=0;u<l;u++){let f=u/l;s[i-l+u]=s[i-l+u]*(1-f)+s[u]*f}return n}var ko=class{constructor(){this.ctx=null,this.ready=!1,this.volume=.85,this.sfxOn=!0,this.under=0,this.heartPhase=0,this.gurgleTimer=1,this.time=0,this.patter=0,this.lastCrash=-10}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.white=Xc(e,4,"white"),this.pink=Xc(e,6,"pink"),this.brown=Xc(e,8,"brown");let i=E=>{let T=e.createGain();return T.gain.value=E,T},n=(E,T,M=.7)=>{let S=e.createBiquadFilter();return S.type=E,S.frequency.value=T,S.Q.value=M,S};this.G=i,this.F=n,this.master=i(this.volume);let s=e.createDynamicsCompressor();s.threshold.value=-22,s.ratio.value=7,s.attack.value=.004,s.release.value=.35,this.finalLP=n("lowpass",2e4,.7);let a=i(1.5);this.master.connect(this.finalLP),this.finalLP.connect(s),s.connect(a),a.connect(e.destination),this.air=i(1),this.airLP=n("lowpass",2e4,.7),this.airBoom=n("peaking",170,1.6),this.airBoom.gain.value=0,this.air.connect(this.airLP),this.airLP.connect(this.airBoom),this.airBoom.connect(this.master),this.water=i(0),this.water.connect(this.master);let o=e.createBuffer(2,Math.floor(e.sampleRate*2.6),e.sampleRate);for(let E=0;E<2;E++){let T=o.getChannelData(E),M=0;for(let S=0;S<T.length;S++){let D=S/e.sampleRate;M+=(Math.random()*2-1-M)*.12,T[S]=M*Math.exp(-D*2.4)*2.2}}this.verb=e.createConvolver(),this.verb.buffer=o,this.verbOut=i(.5),this.verb.connect(this.verbOut),this.verbOut.connect(this.master),this.waterSend=i(.9),this.water.connect(this.waterSend),this.waterSend.connect(this.verb);let h=(E,T=1)=>{let M=e.createBufferSource();return M.buffer=E,M.loop=!0,M.playbackRate.value=T,M.start(0,Math.random()*E.duration),M},c=(E,T,M)=>{let S=E;for(let D of T)S.connect(D),S=D;return S.connect(M),T[T.length-1]};this.rumble=c(h(this.brown,.8),[n("lowpass",130),i(.3)],this.air),this.wash=c(h(this.pink),[n("bandpass",620,.5),i(0)],this.air),this.roar=c(h(this.brown,1.3),[n("bandpass",210,.6),i(0)],this.air),this.roarF=this.roar,this.spots=[];for(let E=0;E<3;E++){let T=e.createPanner();T.panningModel="HRTF",T.distanceModel="inverse",T.refDistance=6,T.rolloffFactor=1.1,T.maxDistance=200;let M=i(0),S=n("bandpass",900+E*450,.7);h(this.pink,.9+E*.13).connect(S),S.connect(M),M.connect(T),T.connect(this.air),this.spots.push({p:T,g:M,x:0,y:0,z:0,a:0})}this.rainG=c(h(this.white),[n("highpass",1900),n("lowpass",9500),i(0)],this.air),this.patterG=c(h(this.white,1.3),[n("bandpass",3400,1.4),i(0)],this.air),this.windF=n("bandpass",420,1.8),this.windG=i(0),this.windPan=e.createStereoPanner?e.createStereoPanner():i(1),h(this.pink,.7).connect(this.windF),this.windF.connect(this.windG),this.windG.connect(this.windPan),this.windPan.connect(this.air),this.whistleF=n("bandpass",1300,7),this.whistleG=i(0),h(this.pink,1.1).connect(this.whistleF),this.whistleF.connect(this.whistleG),this.whistleG.connect(this.windPan),this.droneG=c(h(this.brown,.55),[n("lowpass",95),i(.9)],this.water),this.streamF=n("bandpass",520,.9),this.streamG=i(0),this.streamAM=i(0);let l=h(this.brown,.35),u=i(14);l.connect(n("lowpass",14)).connect(u),u.connect(this.streamAM.gain),h(this.pink,1.25).connect(this.streamF),this.streamF.connect(this.streamAM),this.streamAM.connect(this.streamG),this.streamG.connect(this.water),this.bodyG=i(1),this.bodyG.connect(this.master),this.vDry=i(1);let f=n("highpass",115,.7),d=n("peaking",1150,1),m=n("lowpass",6200,.7);d.gain.value=2.5,this.vDry.connect(f),f.connect(d),d.connect(m),m.connect(this.master),this.vWet=i(0),this.vLP=n("lowpass",430,3.5),this.vRes=n("peaking",260,2),this.vRes.gain.value=8,this.vTrem=i(.55),this.vWet.connect(this.vLP),this.vLP.connect(this.vRes),this.vRes.connect(this.vTrem),this.vTrem.connect(this.water),this.vTrem.connect(this.verb),this.breathG=i(1),this.breathG.connect(this.vDry),this.breathG.connect(this.vWet),this.beds=null,this.swimLevel=0;let v=e.createOscillator();v.type="sawtooth",v.frequency.value=17;let g=i(.5);v.connect(g),g.connect(this.vTrem.gain);let p=h(this.brown,.3),y=i(55);p.connect(n("lowpass",6)).connect(y),y.connect(v.frequency),v.start(),this.tinG=i(0),this.tinG.connect(s);for(let E of[3150,3212]){let T=e.createOscillator();T.type="sine",T.frequency.value=E,T.connect(this.tinG),T.start()}this.heliPan=e.createPanner(),this.heliPan.panningModel="HRTF",this.heliPan.distanceModel="inverse",this.heliPan.refDistance=45,this.heliPan.rolloffFactor=.7,this.heliPan.maxDistance=1200,this.heliG=i(0),this.heliChop=i(.5);let b=e.createOscillator();b.type="sawtooth",b.frequency.value=21;let _=i(.45);b.connect(_),_.connect(this.heliChop.gain),b.start(),h(this.brown,1.4).connect(n("lowpass",180)).connect(this.heliChop);let A=n("bandpass",1900,6),x=i(.05);h(this.white,1).connect(A),A.connect(x),x.connect(this.heliG),this.heliChop.connect(this.heliG),this.heliG.connect(this.heliPan),this.heliPan.connect(this.air),this.voice={},this.curVoice=null,this.ready=!0,this._decodeVoices()}setVoices(t){this.voiceSrc=t,this.ready&&this._decodeVoices()}_decodeVoices(){if(!(!this.voiceSrc||this._decoding)){this._decoding=!0;for(let[t,e]of Object.entries(this.voiceSrc)){let i=atob(e),n=new Uint8Array(i.length);for(let s=0;s<i.length;s++)n[s]=i.charCodeAt(s);this.ctx.decodeAudioData(n.buffer).then(s=>{this.voice[t]=s,this._startBeds()}).catch(()=>{})}}}_startBeds(){let t=this.voice;if(this.beds||!t.b_pant||!t.b_tired||!t.w_swim||this.voiceSrc.a_storm&&!t.a_storm||this.voiceSrc.a_heli&&!t.a_heli||this.voiceSrc.bt_creak&&!t.bt_creak)return;let e=(i,n)=>{let s=this.ctx.createBufferSource();s.buffer=i,s.loop=!0,s.loopStart=.03,s.loopEnd=i.duration-.03;let a=this.G(0);return s.connect(a),a.connect(n),s.start(0,.03+Math.random()*(i.duration-.1)),{s,g:a}};this.beds={pant:e(t.b_pant,this.breathG),tired:e(t.b_tired,this.breathG),swim:e(t.w_swim,this.air)},t.a_storm&&(this.beds.storm=e(t.a_storm,this.air)),t.bt_creak&&(this.beds.boat=e(t.bt_creak,this.air)),t.a_heli&&(this.beds.heli=e(t.a_heli,this.heliG),this.beds.heli.g.gain.value=1)}setBreath(t,e,i,n){if(!this.beds||!this.ready||this.ctx.state!=="running")return;let s=this.ctx.currentTime,a=n?.09:.012;this.beds.pant.g.gain.setTargetAtTime(t,s,a),this.beds.tired.g.gain.setTargetAtTime(e,s,a),this.beds.pant.s.playbackRate.setTargetAtTime(i,s,.4)}playVoice(t,e=1,i=1,n=null){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;this.stopVoice(.05);let a=this.ctx,o=a.currentTime,h=i*(this.under>.5?.84:1),c=n?Math.min(n[0],s.duration):0,l=n?Math.min(n[1],s.duration):s.duration,u=(l-c)/h,f=a.createBufferSource();f.buffer=s,f.playbackRate.value=h;let d=this.G(1e-4);return d.gain.setValueAtTime(1e-4,o),d.gain.exponentialRampToValueAtTime(Math.max(.001,e),o+(n&&n[0]>0?.09:.012)),n&&l<s.duration-.01&&(d.gain.setValueAtTime(Math.max(.001,e),o+Math.max(.02,u-.12)),d.gain.exponentialRampToValueAtTime(1e-4,o+u)),f.connect(d),d.connect(this.vDry),d.connect(this.vWet),f.start(o,c,l-c),this.curVoice={s:f,g:d,end:o+u},u}stopVoice(t=.08){let e=this.curVoice;if(!e)return;this.curVoice=null;let i=this.ctx.currentTime;if(!(i>=e.end))try{e.g.gain.setTargetAtTime(0,i,t/3),e.s.stop(i+t+.05)}catch{}}playClip(t,e=1,i=1,n=0){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;let a=this.ctx,o=a.createBufferSource();o.buffer=s,o.playbackRate.value=i;let h=this.G(e);if(o.connect(h),a.createStereoPanner){let c=a.createStereoPanner();c.pan.value=n,h.connect(c),c.connect(this.air)}else h.connect(this.air);return o.start(),s.duration/i}setVolume(t){this.volume=t,this.master&&this.master.gain.setTargetAtTime(this.sfxOn===!1?0:t,this.ctx.currentTime,.05)}setSfx(t){this.sfxOn=t,this.master&&this.master.gain.setTargetAtTime(t?this.volume:0,this.ctx.currentTime,.05),this.tinG&&!t&&this.tinG.gain.setTargetAtTime(0,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_burst(t){let e=this.ctx,i=e.currentTime+(t.delay||0),n=e.createBufferSource();n.buffer=t.buf,n.playbackRate.value=t.rate||1;let s=this.F(t.type||"bandpass",t.f0,t.q||1);t.f1&&s.frequency.exponentialRampToValueAtTime(Math.max(20,t.f1),i+t.dur);let a=this.G(0);a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(Math.max(2e-4,t.gain),i+(t.attack||.02)),a.gain.exponentialRampToValueAtTime(1e-4,i+t.dur),n.connect(s),s.connect(a);let o=a;if(t.pan!==void 0&&e.createStereoPanner){let h=e.createStereoPanner();h.pan.value=t.pan,a.connect(h),o=h}o.connect(t.out||this.air),t.verb&&o.connect(this.verb),n.start(i,Math.random()*(t.buf.duration-t.dur-.1)),n.stop(i+t.dur+.05)}_blip(t,e,i,n,s,a){let o=this.ctx,h=o.currentTime+s,c=o.createOscillator();c.type="sine",c.frequency.setValueAtTime(t,h),c.frequency.exponentialRampToValueAtTime(e,h+i);let l=this.G(0);l.gain.setValueAtTime(1e-4,h),l.gain.exponentialRampToValueAtTime(n,h+i*.3),l.gain.exponentialRampToValueAtTime(1e-4,h+i),c.connect(l),l.connect(a||this.water),c.start(h),c.stop(h+i+.02)}gurgle(t=.6){if(!this.ready)return;let e=6+Math.floor(Math.random()*10*t+4),i=0;for(let n=0;n<e;n++){let s=170+Math.random()*420;this._blip(s,s*(1.5+Math.random()*.9),.035+Math.random()*.05,.1*t*(.4+Math.random()),i),i+=.022+Math.random()*.06}this._burst({buf:this.pink,f0:380,f1:900,q:1.2,dur:Math.min(1.2,i+.2),gain:.16*t,attack:.05,out:this.water})}onEvent(t,e){if(!this.ready)return;let i=this.under>.5;switch(t){case"thunder":{let n=bt(e.dist/7e3),s=e.power;{let v="a_thunder"+(1+(Math.random()*3|0)),g=this.voice&&this.voice[v];if(g){let p=this.ctx,y=p.currentTime,b=p.createBufferSource();b.buffer=g,b.playbackRate.value=yt(1,.82,n)*(.94+Math.random()*.12);let _=this.F("lowpass",yt(16e3,420,Math.sqrt(n)),.6),A=this.G(yt(2.2,.45,n)*s);b.connect(_),_.connect(A),A.connect(this.air),A.connect(this.verb),b.start(y),e.dist<2600&&(this._blip(64,26,1.4,1.1*s*(1-e.dist/2600),0,this.master),this._burst({buf:this.white,type:"highpass",f0:1800,dur:.22,gain:1.2*s*(1-e.dist/2600),attack:.002}))}}let a=yt(5,10,Math.random())*(.8+.4*n),o=this.ctx,h=o.currentTime,c=o.createBufferSource();c.buffer=this.brown,c.loop=!0,c.playbackRate.value=.7+Math.random()*.5;let l=this.F("lowpass",yt(1100,170,n),.5),u=this.G(0),f=yt(.6,.2,n)*s;u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(f,h+yt(.04,.6,n));let d=h+.5,m=2+Math.floor(Math.random()*4);for(let v=0;v<m;v++)d+=.4+Math.random()*1.1,u.gain.exponentialRampToValueAtTime(f*(.25+Math.random()*.5)*Math.exp(-v*.35),d);u.gain.exponentialRampToValueAtTime(1e-4,h+a),c.connect(l),l.connect(u),u.connect(this.air),u.connect(this.verb),c.start(h,Math.random()*6),c.stop(h+a+.1),e.dist<2200&&this._burst({buf:this.white,type:"highpass",f0:700,dur:.35,gain:.8*s*(1-e.dist/2200),attack:.004,verb:!0});break}case"impact":{let n=Math.min(1,e.strength/3.2);if(this.time-this.lastCrash<.5)break;this.lastCrash=this.time,this._burst({buf:this.white,type:"lowpass",f0:5200,f1:260,q:.6,dur:1.5+n,gain:.55+.5*n,attack:.015,verb:!0}),this._burst({buf:this.brown,type:"lowpass",f0:240,f1:60,q:.8,dur:1.9,gain:1*n+.3,attack:.02,out:this.master}),this._blip(74,34,.7,.5*n,0,this.master),this.playClip("a_crash"+(1+(Math.random()*3|0)),.7+.6*n,.9+Math.random()*.2,0);break}case"boatSlam":{let n=Math.min(1,e.v/6);if(this.time-(this.lastSlam||-9)<.35)break;this.lastSlam=this.time,this.playClip("bt_slam"+(1+(Math.random()*3|0)),.35+.65*n,.88+Math.random()*.22,e.pan||0),this._blip(64,30,.5,.35*n,0,this.master);break}case"splash":{let n=Math.min(1,e.v/5);this._burst({buf:this.pink,f0:1400+Math.random()*1200,f1:600,q:.8,dur:.16+.22*n,gain:.1+.22*n,attack:.006,pan:Math.random()*1.2-.6});break}case"submerge":this._burst({buf:this.brown,type:"lowpass",f0:900,f1:120,dur:.7,gain:.7,attack:.01,out:this.master}),this.gurgle(.9),this.gurgleTimer=.8;break;case"surface":this._burst({buf:this.white,type:"highpass",f0:1500,f1:3500,dur:.5,gain:.3,attack:.02});break;case"camEnter":this._blip(120,52,.45,.35,0,this.master);break;case"camExit":this._burst({buf:this.pink,f0:2200,f1:900,q:.6,dur:.6,gain:.22,attack:.02});break;default:break}}update(t,e){if(!this.ready||this.ctx.state!=="running")return;this.time+=t;let i=this.ctx,n=i.currentTime,s=(d,m,v=.12)=>d.setTargetAtTime(m,n,v),a=this.under=e.under,o=i.listener,h=e.cam;o.positionX?(o.positionX.value=h.pos.x,o.positionY.value=h.pos.y,o.positionZ.value=h.pos.z,o.forwardX.value=h.fwd.x,o.forwardY.value=h.fwd.y,o.forwardZ.value=h.fwd.z,o.upX.value=h.up.x,o.upY.value=h.up.y,o.upZ.value=h.up.z):(o.setPosition(h.pos.x,h.pos.y,h.pos.z),o.setOrientation(h.fwd.x,h.fwd.y,h.fwd.z,h.up.x,h.up.y,h.up.z)),s(this.airLP.frequency,yt(2e4,330*Math.exp(-e.depth*.06)+120,a*a),.06),s(this.airBoom.gain,9*a,.1),s(this.air.gain,yt(1,.55,a),.1),s(this.water.gain,a*(1-.7*e.blackout),.08),s(this.bodyG.gain,(1-a)*(1-e.blackout),.05),s(this.verbOut.gain,.35+.5*a,.2);let c=.7+.6*(e.gust||0);s(this.rumble.gain,.32+.45*e.storm+.22*Math.min(1,Math.abs(e.swellV)/6),.3),this.beds&&this.beds.storm&&(s(this.beds.storm.g.gain,(.25+.95*e.storm)*c,.5),this.beds.storm.s.playbackRate.setTargetAtTime(.94+.1*(e.gust||0),n,1.2)),this.crashT=(this.crashT===void 0?3:this.crashT)-t*(.4+e.storm),this.crashT<=0&&a<.5&&(this.crashT=2.2+Math.random()*4.5,this.playClip("a_crash"+(1+(Math.random()*3|0)),(.16+.34*Math.random())*e.storm,.8+Math.random()*.4,Math.random()*1.6-.8));let l=0;for(let d of e.hot){let m=Math.hypot(d.x-h.pos.x,d.z-h.pos.z);l+=d.amount/(1+m/12)}s(this.wash.gain,Math.min(.8,.12*e.storm+.16*l),.25),s(this.roar.gain,Math.min(1.1,e.threat*e.threat*1.1),.2);for(let d=0;d<this.spots.length;d++){let m=this.spots[d],v=e.hot[d];v?(m.a<.02?(m.x=v.x,m.y=v.y,m.z=v.z):(m.x+=(v.x-m.x)*.1,m.y+=(v.y-m.y)*.1,m.z+=(v.z-m.z)*.1),m.a+=(Math.min(1,v.amount)-m.a)*.08):m.a*=.94,m.p.positionX?(m.p.positionX.value=m.x,m.p.positionY.value=m.y,m.p.positionZ.value=m.z):m.p.setPosition(m.x,m.y,m.z),s(m.g.gain,m.a*.9,.1)}s(this.rainG.gain,.2*e.rain*c,.4),this.patter+=Math.random()<t*9?1:0,this.patter*=Math.exp(-t*9),s(this.patterG.gain,.06*e.rain*(.4+Math.min(1.5,this.patter)),.03);let u=bt(e.windSpeed/34);s(this.windF.frequency,260+520*e.gust*u,.5),s(this.windG.gain,.55*Math.pow(u,1.5)*c+.6*(e.air||0),.15),s(this.whistleF.frequency,900+900*e.gust*e.gust,.6),s(this.whistleG.gain,.1*Math.pow(u,2.2)*e.gust,.5),this.windPan.pan&&s(this.windPan.pan,Ei(e.windPan*.55,-.8,.8),.6),s(this.streamG.gain,Math.min(1,e.aeration*1.4+Math.min(.5,e.relSpeed*.08))*.5,.1),s(this.streamF.frequency,420+500*e.aeration,.2),e.mouthUnder&&e.alive&&(this.gurgleTimer-=t*(1+1.6*bt((45-e.oxygen)/45)+e.effort*.6),this.gurgleTimer<=0&&(this.gurgle(.45+.5*Math.random()),this.gurgleTimer=1.1+Math.random()*2));let f=Math.max(bt((62-e.oxygen)/55),bt(((e.fear||0)-.62)*2.4)*.8)*(e.alive?1:0)+(e.mouthUnder?.18:0);if(f>.05&&(this.heartPhase+=t*yt(1.2,2.5,bt(f)),this.heartPhase>=1)){this.heartPhase-=1;let d=.5*Math.min(1,f*1.3);this._blip(62,40,.11,d,0,this.master),this._blip(52,36,.13,d*.7,.16,this.master)}if(s(this.master.gain,(this.sfxOn===!1?0:this.volume)*(1-.85*e.blackout),.3),e.heli&&e.heli.on){let d=e.heli.pos;this.heliPan.positionX?(this.heliPan.positionX.value=d.x,this.heliPan.positionY.value=d.y,this.heliPan.positionZ.value=d.z):this.heliPan.setPosition(d.x,d.y,d.z),s(this.heliG.gain,6,.6)}else s(this.heliG.gain,0,.8);this.beds&&s(this.beds.swim.g.gain,Math.min(.6,(e.swimSplash||0)*.55)*(1-a),.25),this.beds&&this.beds.boat&&(s(this.beds.boat.g.gain,Math.min(.5,(e.boatCreak||0)*.5)*(1-a),.3),this.beds.boat.s.playbackRate.setTargetAtTime(.9+.25*Math.min(1,e.boatCreak||0),n,.5)),s(this.vDry.gain,1-a,.04),s(this.vWet.gain,a*2.2,.04),s(this.tinG.gain,(this.sfxOn===!1?0:this.volume)*(.014*bt((30-e.oxygen)/30)+.03*e.blackout),.3),s(this.finalLP.frequency,2e4*Math.pow(.022,e.blackout)*Math.pow(.03,e.slow||0),.08)}};var Ty=`
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
#ui .note { position: absolute; left: 0; right: 0; top: 9vh; text-align: center; font-size: clamp(13px, 1.2vw, 18px); letter-spacing: .32em; color: rgba(236,242,246,.9); text-shadow: 0 1px 14px rgba(0,0,0,.8); opacity: 0; transition: opacity 1.2s; pointer-events: none; }
#ui .note.on { opacity: 1; }
#ui .credit { position: absolute; right: 3.2vw; bottom: 2.2vh; display: none; padding: 6px 2px; font-size: 10px; letter-spacing: .14em; color: rgba(215,225,232,.34); z-index: 6; }
#ui .credit.on { display: block; }
#ui .credit:hover { color: rgba(240,245,248,.9); }
#credits { position: absolute; inset: 0; display: none; z-index: 20; background: #04070a; pointer-events: auto; overflow-y: auto; touch-action: pan-y; }
#credits.on { display: block; }
#credits .box { margin: 0 0 0 7vw; padding: 9vh 7vw 7vh 0; max-width: 640px; }
#credits h3 { margin: 0 0 2.2vh; font-size: 10.5px; font-weight: 400; letter-spacing: .32em; color: rgba(225,233,238,.46); }
#credits .it { margin: 0 0 3vh; }
#credits .it b { display: block; font-weight: 400; font-size: clamp(14px, 1.15vw, 17px); letter-spacing: .06em; color: #eef3f6; }
#credits .it p { margin: .55em 0 0; font-size: clamp(11.5px, .92vw, 13.5px); line-height: 1.8; letter-spacing: .03em; color: rgba(225,233,238,.64); }
#credits a { color: rgba(238,243,246,.92); text-decoration: none; border-bottom: 1px solid rgba(255,255,255,.3); cursor: pointer; }
#credits a:hover { border-bottom-color: #fff; }
#credits .lic { margin: 4vh 0 4vh; padding-top: 2.4vh; border-top: 1px solid rgba(255,255,255,.14); font-size: clamp(11px, .88vw, 13px); line-height: 1.8; color: rgba(225,233,238,.5); }
@media (orientation: portrait) {
  #ui .hint { bottom: 5.4vh; }
  #ui .credit { right: auto; left: 8vw; bottom: 1.6vh; }
  #credits .box { margin-left: 8vw; padding-right: 8vw; }
}
`,Ht=(r,t,e)=>{let i=document.createElement(r);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i},jc=r=>`${String(Math.floor(r/60)).padStart(2,"0")}:${String(Math.floor(r%60)).padStart(2,"0")}`,zo=class{constructor(t,e,i){this.root=t,this.api=e,this.isTouch=i;let n=Ht("style");n.textContent=Ty,document.head.appendChild(n),this.title=Ht("div","layer shade"),this.title.id="title";let s=Ht("div","col");s.appendChild(Ht("h1","","EXTREME<br>OCEAN SURVIVAL")),this.goBtn=Ht("div","go act","\uC2DC\uC791"),s.appendChild(this.goBtn),this.titleRows=Ht("div"),s.appendChild(this.titleRows),this.title.appendChild(s),this.title.appendChild(Ht("div","hint",i?"\uC67C\uCABD \uB04C\uAE30 \uBC29\uD5A5 \xB7 \uD5E4\uC5C4 / \uC785\uC218 \uBC84\uD2BC \xB7 \uD654\uBA74 \uB04C\uAE30 \uC2DC\uC810":"WASD \uBC29\uD5A5 \xB7 Space(\uC88C\uD074\uB9AD) \uD5E4\uC5C4 \xB7 F(\uC6B0\uD074\uB9AD) \uC785\uC218 \xB7 \uB9C8\uC6B0\uC2A4 \uC2DC\uC810 \xB7 V \uC2DC\uC810 \uC804\uD658 \xB7 Esc \uBA48\uCDA4")),this.pause=Ht("div","layer shade"),this.pause.id="pause";let a=Ht("div","col");a.appendChild(Ht("h2","","\uBA48\uCDA4")),this.pauseTime=Ht("div","time"),a.appendChild(this.pauseTime),this.resumeBtn=Ht("div","go act","\uACC4\uC18D"),a.appendChild(this.resumeBtn),this.pauseRows=Ht("div"),a.appendChild(this.pauseRows),this.pause.appendChild(a),this.dead=Ht("div","layer shade"),this.dead.id="dead";let o=Ht("div","col");this.deadTitle=Ht("h2","",""),o.appendChild(this.deadTitle),this.deadTime=Ht("div","time"),o.appendChild(this.deadTime),this.againBtn=Ht("div","go act","\uB2E4\uC2DC"),o.appendChild(this.againBtn),this.dead.appendChild(o),this.won=Ht("div","layer shade"),this.won.id="won";let h=Ht("div","col");h.appendChild(Ht("h2","","\uAD6C\uC870\uB418\uC5C8\uB2E4")),this.wonTime=Ht("div","time"),h.appendChild(this.wonTime),this.wonBtn=Ht("div","go act","\uB2E4\uC2DC"),h.appendChild(this.wonBtn),this.won.appendChild(h),this.noteEl=Ht("div","note"),this.creditLink=Ht("div","credit act on","Credits / Licenses"),this.credits=Ht("div"),this.credits.id="credits";{let f="http://creativecommons.org/licenses/by/4.0/",d=(v,g)=>`<a class="act" href="${v}" target="_blank" rel="noopener noreferrer">${g}</a>`,m=Ht("div","box");m.appendChild(Ht("h2","","CREDITS / LICENSES")),m.appendChild(Ht("h3","","3D MODELS")),m.appendChild(Ht("div","it",`<b>Emergency Heli - Flight Care 2</b><p>by Mixmamo.studio: An effortless 3D collections. \xB7 ${d("https://skfb.ly/pBOGV","skfb.ly/pBOGV")}<br>Licensed under ${d(f,"Creative Commons Attribution 4.0")}<br>\uBCC0\uACBD: \uC6F9\uC6A9\uC73C\uB85C \uC904\uC784(\uBC16\uC5D0\uC11C \uBCF4\uC774\uC9C0 \uC54A\uB294 \uC2E4\uB0B4 \uBD80\uD488 \uC81C\uAC70, \uBD80\uD488 \uBCD1\uD569) \xB7 \uC55E\uBB38\uC744 \uB2EB\uC74C \xB7 \uD68C\uC804\uB0A0\uAC1C\uB97C \uBE44\uD589 \uC911 \uBAA8\uC591\uC73C\uB85C \uD3C4</p>`)),m.appendChild(Ht("div","it",`<b>Assault Boat</b><p>by tnnv \xB7 Sketchfab<br>Licensed under ${d(f,"Creative Commons Attribution 4.0")}<br>\uBCC0\uACBD: \uC6F9\uC6A9\uC73C\uB85C \uC904\uC784(\uBD80\uD488 \uBCD1\uD569, \uADF8\uB9BC \uB2E4\uC2DC \uC555\uCD95) \xB7 \uBC1D\uAE30 \uC870\uC815</p>`)),m.appendChild(Ht("div","lic",`CC BY 4.0 \u2014 ${f}`)),this.creditClose=Ht("div","go act","\uB2EB\uAE30"),m.appendChild(this.creditClose),this.credits.appendChild(m)}this.hud=Ht("div","layer"),this.hud.id="hud";let c=Ht("div","bars");this.bars={};for(let[f,d]of[["o2","\uC0B0\uC18C"],["st","\uCCB4\uB825"],["tp","\uCCB4\uC628"],["rs","\uAD6C\uC870"]]){let m=Ht("div","bar",`<i>${d}</i><u><s></s></u>`);c.appendChild(m),this.bars[f]={el:m,fill:m.querySelector("s")}}this.hud.appendChild(c),i||(this.keysEl=Ht("div","keys",""),this.hud.appendChild(this.keysEl)),this.act="",this.setMode("swim"),t.append(Object.assign(Ht("div"),{id:"bars-t"}),Object.assign(Ht("div"),{id:"bars-b"})),this.touch=Ht("div","layer"),this.touch.id="touch",t.append(this.hud,this.noteEl,this.touch,this.title,this.pause,this.dead,this.won,this.creditLink,this.credits),i&&this.buildTouch();let l=(f,d)=>f.addEventListener("click",m=>{m.stopPropagation(),d()});l(this.goBtn,()=>e.start()),l(this.resumeBtn,()=>e.resume()),l(this.againBtn,()=>e.restart()),l(this.wonBtn,()=>e.restart());let u=f=>{this.credits.classList.toggle("on",f),f&&(this.credits.scrollTop=0)};l(this.creditLink,()=>u(!0)),l(this.creditClose,()=>u(!1)),this.credits.addEventListener("click",f=>{f.stopPropagation(),f.target===this.credits&&u(!1)}),this.credits.addEventListener("pointerdown",f=>f.stopPropagation()),document.addEventListener("keydown",f=>{f.code==="Escape"&&this.credits.classList.contains("on")&&(u(!1),f.stopImmediatePropagation(),f.preventDefault())},!0),this.buildRows(),this.mode=""}buildRows(){let t=this.api,e=(i,n)=>{i.innerHTML="";let s=(a,o,h)=>{let c=Ht("div","row act",`${a}<b></b>`),l=c.querySelector("b"),u=()=>{l.textContent=o()};c.addEventListener("click",f=>{f.stopPropagation(),h(),this.refresh()}),this._upd.push(u),u(),i.appendChild(c)};if(s("\uD654\uC9C8",()=>t.get("quality"),()=>t.cycle("quality")),s("\uC2DC\uC810",()=>t.get("view"),()=>t.cycle("view")),s("\uC790\uB3D9 \uCE74\uBA54\uB77C",()=>t.get("autocam"),()=>t.cycle("autocam")),s("\uCE74\uBA54\uB77C \uD754\uB4E4\uB9BC",()=>t.get("shake"),()=>t.cycle("shake")),s("\uC18C\uB9AC \uD06C\uAE30",()=>t.get("volume"),()=>t.cycle("volume")),s("\uD6A8\uACFC\uC74C",()=>t.get("sfx"),()=>t.cycle("sfx")),n){let a=Ht("div","row","\uC2DC\uD5D8 \uC7A5\uBA74");for(let h of"ABCDEFGHR"){let c=Ht("span","t act",h);c.addEventListener("click",l=>{l.stopPropagation(),t.scenario(h)}),a.appendChild(c)}i.appendChild(a);let o=Ht("div","row act","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC");o.addEventListener("click",h=>{h.stopPropagation(),t.restart()}),i.appendChild(o)}};this._upd=[],e(this.titleRows,!1),e(this.pauseRows,!0)}refresh(){for(let t of this._upd)t()}show(t,e){this.mode=t,this.title.classList.toggle("on",t==="title"),this.pause.classList.toggle("on",t==="paused"),this.dead.classList.toggle("on",t==="dead"),this.won.classList.toggle("on",t==="won"),t==="won"&&(this.wonTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+jc(e.time)),t!=="playing"&&this.noteEl.classList.remove("on"),this.hud.classList.toggle("on",t==="playing"),this.touch.classList.toggle("on",t==="playing"&&this.isTouch),this.creditLink.classList.toggle("on",t!=="playing"),t==="playing"&&this.credits.classList.remove("on"),t==="paused"&&(this.pauseTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+jc(e.time)),t==="dead"&&(this.deadTitle.textContent=e.cause==="cold"?"\uCCB4\uC628\uC744 \uC783\uACE0 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4":"\uC228\uC774 \uB2E4\uD574 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4",this.deadTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+jc(e.time)),this.refresh(),t!=="playing"&&this.releaseTouch()}cine(t){this.root.classList.toggle("cine",!!t),t&&(this.noteEl.classList.remove("on"),clearTimeout(this._nt))}note(t,e=6){this.noteEl.textContent=t,this.noteEl.classList.add("on"),clearTimeout(this._nt),this._nt=setTimeout(()=>this.noteEl.classList.remove("on"),e*1e3)}setMode(t){if(t===this.act)return;this.act=t;let e="<span><b>V</b><i>\xB7</i><b>\uD720</b>\uC2DC\uC810</span><span><b>Esc</b>\uBA48\uCDA4</span>",i=t==="boat"?"<span><b>Space</b>\uAF49 \uBD99\uC7A1\uAE30</span>"+e:t==="cling"?"<span><b>Space</b>\uAF49 \uC950\uAE30</span><span><b>F</b>\uB193\uAE30</span>"+e:"<span><b>Space</b>\uD5E4\uC5C4</span><span><b>F</b>\uC785\uC218</span>"+e;this.keysEl&&(this.keysEl.innerHTML=i),this.swBtn&&(this.swBtn.textContent=t==="boat"?"\uBD99\uC7A1\uAE30":t==="cling"?"\uAF49 \uC950\uAE30":"\uD5E4\uC5C4",this.dvBtn.textContent=t==="cling"?"\uB193\uAE30":"\uC785\uC218",this.dvBtn.style.opacity=t==="boat"?"0.3":"")}setBars(t,e,i,n=0){let s=(a,o,h,c)=>{a.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,o)).toFixed(3)})`,a.el.classList.toggle("show",o<h),a.el.classList.toggle("low",o<c)};s(this.bars.o2,t,.97,.3),s(this.bars.st,e,.9,.22),s(this.bars.tp,i,.8,.35),this.bars.rs.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,n)).toFixed(3)})`,this.bars.rs.el.classList.toggle("show",n>.01)}buildTouch(){let t=this.api,e=t.input;e.touch={x:0,z:0,swim:!1,dive:!1};let i=Ht("div","zone zl"),n=Ht("div","zone zr"),s=Ht("div","stick","<b></b>"),a=s.firstChild;this.touch.append(i,n,s);let o=null,h=0,c=0,l=null,u=0,f=0,d=56;i.addEventListener("pointerdown",x=>{if(o===null){o=x.pointerId,h=x.clientX,c=x.clientY;try{i.setPointerCapture(x.pointerId)}catch{}s.style.display="block",s.style.left=h+"px",s.style.top=c+"px",a.style.transform="translate(0,0)",x.preventDefault()}}),i.addEventListener("pointermove",x=>{if(x.pointerId!==o)return;let E=x.clientX-h,T=x.clientY-c,M=Math.hypot(E,T);M>d&&(E*=d/M,T*=d/M),a.style.transform=`translate(${E}px,${T}px)`;let S=.12,D=E/d,G=-T/d;Math.hypot(D,G)<S&&(D=0,G=0),e.touch.x=D,e.touch.z=G,x.preventDefault()});let m=x=>{x.pointerId===o&&(o=null,e.touch.x=0,e.touch.z=0,s.style.display="none")};i.addEventListener("pointerup",m),i.addEventListener("pointercancel",m),n.addEventListener("pointerdown",x=>{if(l===null){l=x.pointerId,u=x.clientX,f=x.clientY;try{n.setPointerCapture(x.pointerId)}catch{}x.preventDefault()}}),n.addEventListener("pointermove",x=>{x.pointerId===l&&(e.dx+=(x.clientX-u)*2.2,e.dy+=(x.clientY-f)*2.2,u=x.clientX,f=x.clientY,e.lastLook=performance.now()/1e3,x.preventDefault())});let v=x=>{x.pointerId===l&&(l=null)};n.addEventListener("pointerup",v),n.addEventListener("pointercancel",v);let g=(x,E)=>{let T=Ht("div","btn "+x,E);return this.touch.appendChild(T),T},p=this.swBtn=g("sw","\uD5E4\uC5C4"),y=this.dvBtn=g("dv","\uC785\uC218"),b=g("sm vw",'<svg viewBox="0 0 24 24"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/></svg>\uC2DC\uC810'),_=g("sm ps",'<svg viewBox="0 0 24 24"><path d="M8.5 5v14M15.5 5v14"/></svg>\uBA48\uCDA4'),A=(x,E)=>{let T=null;x.addEventListener("pointerdown",S=>{S.preventDefault(),S.stopPropagation(),T=S.pointerId;try{x.setPointerCapture(S.pointerId)}catch{}x.classList.add("on"),e.touch[E]=!0});let M=S=>{T!==null&&S.pointerId!==T||(S.stopPropagation(),T=null,x.classList.remove("on"),e.touch[E]=!1)};x.addEventListener("pointerup",M),x.addEventListener("pointercancel",M),x.addEventListener("lostpointercapture",M)};A(p,"swim"),A(y,"dive"),b.addEventListener("pointerdown",x=>{x.preventDefault(),x.stopPropagation(),t.toggleView()}),_.addEventListener("pointerdown",x=>{x.preventDefault(),x.stopPropagation(),t.pause()}),this.releaseTouch=()=>{o=null,l=null,e.touch.x=0,e.touch.z=0,e.touch.swim=!1,e.touch.dive=!1,s.style.display="none",p.classList.remove("on"),y.classList.remove("on")}}releaseTouch(){}};var os={A:{label:"\uBCF4\uD1B5 \uD30C\uB3C4\uC5D0 \uB5A0 \uC788\uAE30",storm:.42,t0:40,view:"third",keys:{},script:[]},B:{label:"\uD070 \uB108\uC6B8 \uC811\uADFC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:15,height:16,breakOffset:9,angleOffset:0,width:240,speed:13,frontMin:27,back:70})}]},C:{label:"\uD30C\uB3C4 \uBD95\uAD34 \xB7 \uCDA9\uB3CC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:9,height:13.5,breakOffset:-1,angleOffset:0,width:170,speed:14})}]},D:{label:"\uBB3C\uC18D \uD718\uB9D0\uB9BC",storm:1,t0:12,view:"first",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:6,height:14.5,breakOffset:-1.3,angleOffset:0,width:170,speed:14})}]},E:{label:"\uC218\uBA74 \uBCF5\uADC0",storm:.85,t0:30,view:"first",keys:{up:!0,sprint:!0},setup:r=>{r.body.pos.y-=5.5,r.body.prevPos.copy(r.body.pos),r.survival.oxygen=42,r.survival.wasUnder=!0,r.survival.submergedTime=14,r.cam.pitch=.7},script:[{t:9,do:r=>{r.input.virtual={}}}]},F:{label:"\uBC88\uAC1C",storm:.9,t0:55,view:"third",keys:{},script:[{t:2,do:r=>r.lightning.strike(r.camera.position,{azimuth:Math.PI,dist:1700,sheet:0,power:1.4})},{t:9,do:r=>r.lightning.strike(r.camera.position,{azimuth:Math.PI*.8,dist:5200,sheet:1,power:1})}]},G:{label:"\uCDA9\uB3CC \uC911 \uC2DC\uC810 \uC804\uD658",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:7,height:12.5,breakOffset:-1,angleOffset:0,width:170,speed:14})},...[2,3.6,5.2,6.4,7.4,8.4,9.6,11,12.6,14.2].map(r=>({t:r,do:t=>t.cam.toggle()}))]}};os.H={label:"\uD574\uC77C \xB7 \uBB3C\uC18D \uAE4A\uC774 \uD718\uB9D0\uB9BC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launchMega({lead:14,height:34})}]};os.R={label:"\uAD6C\uC870 \uD5EC\uAE30",storm:.8,t0:30,view:"third",keys:{},script:[{t:.5,do:r=>r.rescue.dispatch(r.body.pos,Math.PI,16)},...Array.from({length:70},(r,t)=>({t:11+t*.5,do:e=>{if(e.rescue.state==="lift"){e.input.virtual=null;return}let i=e.rescue.ring,n=e.body.pos;e.cam.yaw=Math.atan2(i.x-n.x,i.z-n.z),e.input.virtual={z:1,sprint:!0},e.input.enabled=!0}}))]};os.S={label:"\uBCF4\uD2B8\uC5D0\uC11C \uC2DC\uC791 \xB7 \uC804\uBCF5",storm:1,t0:12,view:"third",keys:{},setup:r=>{r.board(),r.placeShip()},script:[{t:1,do:r=>r.launchIntroWave(9)}]};os.T={label:"\uBCF4\uD2B8\uC5D0 \uB5A0 \uC788\uAE30",storm:.7,t0:30,view:"third",keys:{},setup:r=>r.board(),script:[]};var Uo=class{constructor(t){this.game=t,this.active=null,this.t=0,this.next=0,this.name=""}run(t){let e=os[t];if(!e)return!1;let i=this.game;i.waves.time=e.t0;for(let n of i.waves.breakers)n.active=!1;return i.weather.locked=!0,i.weather.base=i.weather.storm=e.storm,i.weather.time=0,i.interaction.auto=!1,i.autoLightning=!1,i.lightning.active=!1,i.lightning.pendingThunder.length=0,i.rescue.reset(1e9),i.weather.update(0),i.waves.update(0),i.resetPlayer(),i.cam.setMode(e.view),i.cam.blend=i.cam.target,i.cam.yaw=-Math.PI/2,i.cam.pitch=e.view==="first"?-.02:-.08,i.input.virtual=e.keys&&Object.keys(e.keys).length?{...e.keys}:null,i.input.virtual&&(i.input.enabled=!0),e.setup&&e.setup(i),this.active=e,this.name=t,this.t=0,this.next=0,!0}stop(){this.active=null,this.game.input.virtual=null}update(t){if(!this.active)return;this.t+=t;let e=this.active.script;for(;this.next<e.length&&this.t>=e[this.next].t;)e[this.next].do(this.game),this.next++}};function pf(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,h=new oe,c=0;for(let l=0;l<r.length;++l){let u=r[l],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;h.addGroup(c,d,l),c+=d}}if(e){let l=0,u=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+l);l+=r[f].attributes.position.count}h.setIndex(u)}for(let l in s){let u=ff(s[l]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;h.setAttribute(l,u)}for(let l in a){let u=a[l][0].length;if(u===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[l]=[];for(let f=0;f<u;++f){let d=[];for(let v=0;v<a[l].length;++v)d.push(a[l][v][f]);let m=ff(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;h.morphAttributes[l].push(m)}}return h}function ff(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let l=r[c];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=l.normalized),i!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=l.gpuType),n!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=l.array.length}let a=new t(s),o=0;for(let c=0;c<r.length;++c)a.set(r[c].array,o),o+=r[c].array.length;let h=new Nt(a,e,i);return n!==void 0&&(h.gpuType=n),h}function Yc(r,t){if(t===Dd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Hr||t===ao){let e=r.getIndex();if(e===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let h=0;h<o.count;h++)a.push(h);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let i=e.count-2,n=[];if(t===Hr)for(let a=1;a<=i;a++)n.push(e.getX(0)),n.push(e.getX(a)),n.push(e.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(e.getX(a)),n.push(e.getX(a+1)),n.push(e.getX(a+2))):(n.push(e.getX(a+2)),n.push(e.getX(a+1)),n.push(e.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}var No=class extends bn{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new el(e)}),this.register(function(e){return new ll(e)}),this.register(function(e){return new ul(e)}),this.register(function(e){return new dl(e)}),this.register(function(e){return new nl(e)}),this.register(function(e){return new sl(e)}),this.register(function(e){return new rl(e)}),this.register(function(e){return new al(e)}),this.register(function(e){return new tl(e)}),this.register(function(e){return new ol(e)}),this.register(function(e){return new il(e)}),this.register(function(e){return new cl(e)}),this.register(function(e){return new hl(e)}),this.register(function(e){return new Jc(e)}),this.register(function(e){return new fl(e)}),this.register(function(e){return new pl(e)})}load(t,e,i,n){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Fn.extractUrlBase(t);a=Fn.resolveURL(c,this.path)}else a=Fn.extractUrlBase(t);this.manager.itemStart(t);let o=function(c){n?n(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},h=new Nr(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(c){try{s.parse(c,a,function(l){e(l),s.manager.itemEnd(t)},o)}catch(l){o(l)}},i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s,a={},o={},h=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(h.decode(new Uint8Array(t,0,4))===xf){try{a[re.KHR_BINARY_GLTF]=new ml(t)}catch(u){n&&n(u);return}s=JSON.parse(a[re.KHR_BINARY_GLTF].content)}else s=JSON.parse(h.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ml(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let u=this.pluginCallbacks[l](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){let u=s.extensionsUsed[l],f=s.extensionsRequired||[];switch(u){case re.KHR_MATERIALS_UNLIT:a[u]=new $c;break;case re.KHR_DRACO_MESH_COMPRESSION:a[u]=new gl(s,this.dracoLoader);break;case re.KHR_TEXTURE_TRANSFORM:a[u]=new bl;break;case re.KHR_MESH_QUANTIZATION:a[u]=new vl;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(t,e){let i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}};function Ay(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}var re={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Jc=class{constructor(t){this.parser=t,this.name=re.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){let s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,i="light:"+t,n=e.cache.get(i);if(n)return n;let s=e.json,h=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],c,l=new kt(16777215);h.color!==void 0&&l.setRGB(h.color[0],h.color[1],h.color[2],ze);let u=h.range!==void 0?h.range:0;switch(h.type){case"directional":c=new es(l),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new io(l),c.distance=u;break;case"spot":c=new Qs(l),c.distance=u,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,c.angle=h.spot.outerConeAngle,c.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return c.position.set(0,0,0),c.decay=2,kn(c,h),h.intensity!==void 0&&(c.intensity=h.intensity),c.name=e.createUniqueName(h.name||"light_"+t),n=Promise.resolve(c),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,i=this.parser,s=i.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(h){return i._getNodeRef(e.cache,o,h)})}},$c=class{constructor(){this.name=re.KHR_MATERIALS_UNLIT}getMaterialType(){return Ne}extendParams(t,e,i){let n=[];t.color=new kt(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],ze),t.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,fe))}return Promise.all(n)}},tl=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},el=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ct(o,o)}return Promise.all(s)}},il=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},nl=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_SHEEN}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new kt(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],ze)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",a.sheenColorTexture,fe)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},sl=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},rl=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_VOLUME}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return e.attenuationColor=new kt().setRGB(o[0],o[1],o[2],ze),Promise.all(s)}},al=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_IOR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},ol=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_SPECULAR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return e.specularColor=new kt().setRGB(o[0],o[1],o[2],ze),a.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",a.specularColorTexture,fe)),Promise.all(s)}},hl=class{constructor(t){this.parser=t,this.name=re.EXT_MATERIALS_BUMP}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}},cl=class{constructor(t){this.parser=t,this.name=re.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},ll=class{constructor(t){this.parser=t,this.name=re.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}},ul=class{constructor(t){this.parser=t,this.name=re.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=n.images[a.source],h=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(h=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(t,a.source,h);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},dl=class{constructor(t){this.parser=t,this.name=re.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=n.images[a.source],h=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(h=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(t,a.source,h);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},fl=class{constructor(t){this.name=re.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let h=n.byteOffset||0,c=n.byteLength||0,l=n.count,u=n.byteStride,f=new Uint8Array(o,h,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(l,u,f,n.mode,n.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(l*u);return a.decodeGltfBuffer(new Uint8Array(d),l,u,f,n.mode,n.filter),d})})}else return null}},pl=class{constructor(t){this.name=re.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=e.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==ki.TRIANGLES&&c.mode!==ki.TRIANGLE_STRIP&&c.mode!==ki.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],h={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(l=>(h[c]=l,h[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{let l=c.pop(),u=l.isGroup?l.children:[l],f=c[0].count,d=[];for(let m of u){let v=new Lt,g=new w,p=new wt,y=new w(1,1,1),b=new Wa(m.geometry,m.material,f);for(let _=0;_<f;_++)h.TRANSLATION&&g.fromBufferAttribute(h.TRANSLATION,_),h.ROTATION&&p.fromBufferAttribute(h.ROTATION,_),h.SCALE&&y.fromBufferAttribute(h.SCALE,_),b.setMatrixAt(_,v.compose(g,p,y));for(let _ in h)if(_==="_COLOR_0"){let A=h[_];b.instanceColor=new Ze(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,h[_]);Te.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),d.push(b)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}},xf="glTF",Wr=12,mf={JSON:1313821514,BIN:5130562},ml=class{constructor(t){this.name=re.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Wr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==xf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Wr,s=new DataView(t,Wr),a=0;for(;a<n;){let o=s.getUint32(a,!0);a+=4;let h=s.getUint32(a,!0);if(a+=4,h===mf.JSON){let c=new Uint8Array(t,Wr+a,o);this.content=i.decode(c)}else if(h===mf.BIN){let c=Wr+a;this.body=t.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},gl=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=re.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},h={},c={};for(let l in a){let u=yl[l]||l.toLowerCase();o[u]=a[l]}for(let l in t.attributes){let u=yl[l]||l.toLowerCase();if(a[l]!==void 0){let f=i.accessors[t.attributes[l]],d=nr[f.componentType];c[u]=d.name,h[u]=f.normalized===!0}}return e.getDependency("bufferView",s).then(function(l){return new Promise(function(u,f){n.decodeDracoFile(l,function(d){for(let m in d.attributes){let v=d.attributes[m],g=h[m];g!==void 0&&(v.normalized=g)}u(d)},o,c,ze,f)})})}},bl=class{constructor(){this.name=re.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},vl=class{constructor(){this.name=re.KHR_MESH_QUANTIZATION}},Oo=class extends Cn{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let a=0;a!==n;a++)e[a]=i[s+a];return e}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=o*2,c=o*3,l=n-e,u=(i-e)/l,f=u*u,d=f*u,m=t*c,v=m-c,g=-2*d+3*f,p=d-f,y=1-g,b=p-f+u;for(let _=0;_!==o;_++){let A=a[v+_+o],x=a[v+_+h]*l,E=a[m+_+o],T=a[m+_]*l;s[_]=y*A+b*x+g*E+p*T}return s}},Ry=new wt,xl=class extends Oo{interpolate_(t,e,i,n){let s=super.interpolate_(t,e,i,n);return Ry.fromArray(s).normalize().toArray(s),s}},ki={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},nr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gf={9728:Le,9729:ee,9984:Pa,9985:Ac,9986:mr,9987:Ke},bf={33071:li,33648:Er,10497:ii},Kc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Dn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cy={CUBICSPLINE:void 0,LINEAR:Kn,STEP:Ns},Qc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Py(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Fe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),r.DefaultMaterial}function hs(r,t,e){for(let i in e.extensions)r[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function kn(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Ly(r,t,e){let i=!1,n=!1,s=!1;for(let c=0,l=t.length;c<l;c++){let u=t[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);let a=[],o=[],h=[];for(let c=0,l=t.length;c<l;c++){let u=t[c];if(i){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;a.push(f)}if(n){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(f)}if(s){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;h.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(h)]).then(function(c){let l=c[0],u=c[1],f=c[2];return i&&(r.morphAttributes.position=l),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function Fy(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)r.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Iy(r){let t,e=r.extensions&&r.extensions[re.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Zc(e.attributes):t=r.indices+":"+Zc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)t+=":"+Zc(r.targets[i]);return t}function Zc(r){let t="",e=Object.keys(r).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+r[e[i]]+";";return t}function _l(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Dy(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var ky=new Lt,Ml=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Ay,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new eo(this.options.manager):this.textureLoader=new no(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return hs(s,o,n),kn(o,n),Promise.all(i._invokeAll(function(h){return h.afterRoot&&h.afterRoot(o)})).then(function(){t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){let a=e[n].joints;for(let o=0,h=a.length;o<h;o++)t[a[o]].isBone=!0}for(let n=0,s=t.length;n<s;n++){let a=t[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;let n=i.clone(),s=(a,o)=>{let h=this.associations.get(a);h!=null&&this.associations.set(o,h);for(let[c,l]of a.children.entries())s(l,o.children[c])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){let n=t(e[i]);if(n)return n}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let i=[];for(let n=0;n<e.length;n++){let s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){let i=t+":"+e,n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){let i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,a){return i.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[re.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,a){i.load(Fn.resolveURL(e.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){let n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){let e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){let a=Kc[n.type],o=nr[n.componentType],h=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new Nt(c,a,h))}let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],h=Kc[n.type],c=nr[n.componentType],l=c.BYTES_PER_ELEMENT,u=l*h,f=n.byteOffset||0,d=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,m=n.normalized===!0,v,g;if(d&&d!==u){let p=Math.floor(f/d),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,b=e.cache.get(y);b||(v=new c(o,p*d,n.count*d/l),b=new Ws(v,d/l),e.cache.add(y,b)),g=new Zn(b,h,f%d/l,m)}else o===null?v=new c(n.count*h):v=new c(o,f,n.count*h),g=new Nt(v,h,m);if(n.sparse!==void 0){let p=Kc.SCALAR,y=nr[n.sparse.indices.componentType],b=n.sparse.indices.byteOffset||0,_=n.sparse.values.byteOffset||0,A=new y(a[1],b,n.sparse.count*p),x=new c(a[2],_,n.sparse.count*h);o!==null&&(g=new Nt(g.array.slice(),g.itemSize,g.normalized));for(let E=0,T=A.length;E<T;E++){let M=A[E];if(g.setX(M,x[E*h]),h>=2&&g.setY(M,x[E*h+1]),h>=3&&g.setZ(M,x[E*h+2]),h>=4&&g.setW(M,x[E*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(t){let e=this.json,i=this.options,s=e.textures[t].source,a=e.images[s],o=this.textureLoader;if(a.uri){let h=i.manager.getHandler(a.uri);h!==null&&(o=h)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,i){let n=this,s=this.json,a=s.textures[t],o=s.images[e],h=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[h])return this.textureCache[h];let c=this.loadImageSource(e,i).then(function(l){l.flipY=!1,l.name=a.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let f=(s.samplers||{})[a.sampler]||{};return l.magFilter=gf[f.magFilter]||ee,l.minFilter=gf[f.minFilter]||Ke,l.wrapS=bf[f.wrapS]||ii,l.wrapT=bf[f.wrapT]||ii,n.associations.set(l,{textures:t}),l}).catch(function(){return null});return this.textureCache[h]=c,c}loadImageSource(t,e){let i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let a=n.images[t],o=self.URL||self.webkitURL,h=a.uri||"",c=!1;if(a.bufferView!==void 0)h=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return h=o.createObjectURL(f),h});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let l=Promise.resolve(h).then(function(u){return new Promise(function(f,d){let m=f;e.isImageBitmapLoader===!0&&(m=function(v){let g=new Qe(v);g.needsUpdate=!0,f(g)}),e.load(Fn.resolveURL(u,s.path),m,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(h),u.userData.mimeType=a.mimeType||Dy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),u});return this.sourceCache[t]=l,l}assignTexture(t,e,i,n){let s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[re.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[re.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let h=s.associations.get(a);a=s.extensions[re.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,h)}}return n!==void 0&&(a.colorSpace=n),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,i=t.material,n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+i.uuid,h=this.cache.get(o);h||(h=new Pr,di.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,h.sizeAttenuation=!1,this.cache.add(o,h)),i=h}else if(t.isLine){let o="LineBasicMaterial:"+i.uuid,h=this.cache.get(o);h||(h=new Cr,di.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,this.cache.add(o,h)),i=h}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let h=this.cache.get(o);h||(h=i.clone(),s&&(h.vertexColors=!0),a&&(h.flatShading=!0),n&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(o,h),this.associations.set(h,this.associations.get(i))),i=h}t.material=i}getMaterialType(){return Fe}loadMaterial(t){let e=this,i=this.json,n=this.extensions,s=i.materials[t],a,o={},h=s.extensions||{},c=[];if(h[re.KHR_MATERIALS_UNLIT]){let u=n[re.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,e))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new kt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],ze),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",u.baseColorTexture,fe)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=ke);let l=s.alphaMode||Qc.OPAQUE;if(l===Qc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Qc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Ne&&(c.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ct(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Ne&&(c.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Ne){let u=s.emissiveFactor;o.emissive=new kt().setRGB(u[0],u[1],u[2],ze)}return s.emissiveTexture!==void 0&&a!==Ne&&c.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,fe)),Promise.all(c).then(function(){let u=new a(o);return s.name&&(u.name=s.name),kn(u,s),e.associations.set(u,{materials:t}),s.extensions&&hs(n,u,s),u})}createUniqueName(t){let e=ve.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[re.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(h){return vf(h,o,e)})}let a=[];for(let o=0,h=t.length;o<h;o++){let c=t[o],l=Iy(c),u=n[l];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[re.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=vf(new oe,c,e),n[l]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(t){let e=this,i=this.json,n=this.extensions,s=i.meshes[t],a=s.primitives,o=[];for(let h=0,c=a.length;h<c;h++){let l=a[h].material===void 0?Py(this.cache):this.getDependency("material",a[h].material);o.push(l)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(h){let c=h.slice(0,h.length-1),l=h[h.length-1],u=[];for(let d=0,m=l.length;d<m;d++){let v=l[d],g=a[d],p,y=c[d];if(g.mode===ki.TRIANGLES||g.mode===ki.TRIANGLE_STRIP||g.mode===ki.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Jn(v,y):new gt(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===ki.TRIANGLE_STRIP?p.geometry=Yc(p.geometry,ao):g.mode===ki.TRIANGLE_FAN&&(p.geometry=Yc(p.geometry,Hr));else if(g.mode===ki.LINES)p=new qa(v,y);else if(g.mode===ki.LINE_STRIP)p=new Xs(v,y);else if(g.mode===ki.LINE_LOOP)p=new Xa(v,y);else if(g.mode===ki.POINTS)p=new js(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Fy(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),kn(p,s),g.extensions&&hs(n,p,g),e.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return s.extensions&&hs(n,u[0],s),u[0];let f=new ae;s.extensions&&hs(n,f,s),e.associations.set(f,{meshes:t});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(t){let e,i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Be(In.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new fi(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),kn(e,i),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let s=n.pop(),a=n,o=[],h=[];for(let c=0,l=a.length;c<l;c++){let u=a[c];if(u){o.push(u);let f=new Lt;s!==null&&f.fromArray(s.array,c*16),h.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new qs(o,h)})}loadAnimation(t){let e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,a=[],o=[],h=[],c=[],l=[];for(let u=0,f=n.channels.length;u<f;u++){let d=n.channels[u],m=n.samplers[d.sampler],v=d.target,g=v.node,p=n.parameters!==void 0?n.parameters[m.input]:m.input,y=n.parameters!==void 0?n.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),h.push(this.getDependency("accessor",y)),c.push(m),l.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(h),Promise.all(c),Promise.all(l)]).then(function(u){let f=u[0],d=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let y=0,b=f.length;y<b;y++){let _=f[y],A=d[y],x=m[y],E=v[y],T=g[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let M=i._createAnimationTracks(_,A,x,E,T);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new to(s,void 0,p)})}createNodeMesh(t){let e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let h=0,c=n.weights.length;h<c;h++)o.morphTargetInfluences[h]=n.weights[h]}),a})}loadNode(t){let e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),a=[],o=n.children||[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));let h=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),h]).then(function(c){let l=c[0],u=c[1],f=c[2];f!==null&&l.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ky)});for(let d=0,m=u.length;d<m;d++)l.add(u[d]);return l})}_loadNodeShallow(t){let e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],a=s.name?n.createUniqueName(s.name):"",o=[],h=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return h&&o.push(h),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let l;if(s.isBone===!0?l=new $n:c.length>1?l=new ae:c.length===1?l=c[0]:l=new Te,l!==c[0])for(let u=0,f=c.length;u<f;u++)l.add(c[u]);if(s.name&&(l.userData.name=s.name,l.name=a),kn(l,s),s.extensions&&hs(i,l,s),s.matrix!==void 0){let u=new Lt;u.fromArray(s.matrix),l.applyMatrix4(u)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return n.associations.has(l)||n.associations.set(l,{}),n.associations.get(l).nodes=t,l}),this.nodeCache[t]}loadScene(t){let e=this.extensions,i=this.json.scenes[t],n=this,s=new ae;i.name&&(s.name=n.createUniqueName(i.name)),kn(s,i),i.extensions&&hs(e,s,i);let a=i.nodes||[],o=[];for(let h=0,c=a.length;h<c;h++)o.push(n.getDependency("node",a[h]));return Promise.all(o).then(function(h){for(let l=0,u=h.length;l<u;l++)s.add(h[l]);let c=l=>{let u=new Map;for(let[f,d]of n.associations)(f instanceof di||f instanceof Qe)&&u.set(f,d);return l.traverse(f=>{let d=n.associations.get(f);d!=null&&u.set(f,d)}),u};return n.associations=c(s),s})}_createAnimationTracks(t,e,i,n,s){let a=[],o=t.name?t.name:t.uuid,h=[];Dn[s.path]===Dn.weights?t.traverse(function(f){f.morphTargetInfluences&&h.push(f.name?f.name:f.uuid)}):h.push(o);let c;switch(Dn[s.path]){case Dn.weights:c=mn;break;case Dn.rotation:c=Ki;break;case Dn.position:case Dn.scale:c=gn;break;default:switch(i.itemSize){case 1:c=mn;break;case 2:case 3:default:c=gn;break}break}let l=n.interpolation!==void 0?Cy[n.interpolation]:Kn,u=this._getArrayFromAccessor(i);for(let f=0,d=h.length;f<d;f++){let m=new c(h[f]+"."+Dn[s.path],e.array,u,l);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let i=_l(e.constructor),n=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){let n=this instanceof Ki?xl:Oo;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function zy(r,t,e){let i=t.attributes,n=new Pi;if(i.POSITION!==void 0){let o=e.json.accessors[i.POSITION],h=o.min,c=o.max;if(h!==void 0&&c!==void 0){if(n.set(new w(h[0],h[1],h[2]),new w(c[0],c[1],c[2])),o.normalized){let l=_l(nr[o.componentType]);n.min.multiplyScalar(l),n.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new w,h=new w;for(let c=0,l=s.length;c<l;c++){let u=s[c];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(h.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),h.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),h.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let v=_l(nr[f.componentType]);h.multiplyScalar(v)}o.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;let a=new Mi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function vf(r,t,e){let i=t.attributes,n=[];function s(a,o){return e.getDependency("accessor",a).then(function(h){r.setAttribute(o,h)})}for(let a in i){let o=yl[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(t.indices!==void 0&&!r.index){let a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});n.push(a)}return ce.workingColorSpace!==ze&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ce.workingColorSpace}" not supported.`),kn(r,t),zy(r,t,e),Promise.all(n).then(function(){return t.targets!==void 0?Ly(r,t.targets,e):r})}var yf=function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(e)?t:r,s,a=WebAssembly.instantiate(o(n),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),b=0;b<p.length;++b){var _=p.charCodeAt(b);y[b]=_>96?_-97:_>64?_-39:_+4}for(var A=0,b=0;b<p.length;++b)y[A++]=y[b]<60?i[y[b]]:(y[b]-60)*64+y[++b];return y.buffer.slice(0,A)}function h(p,y,b,_,A,x){var E=s.exports.sbrk,T=b+3&-4,M=E(T*_),S=E(A.length),D=new Uint8Array(s.exports.memory.buffer);D.set(A,S);var G=p(M,b,_,S,A.length);if(G==0&&x&&x(M,T,_),y.set(D.subarray(M,M+b*_)),E(M-E(0)),G!=0)throw new Error("Malformed buffer data: "+G)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},l={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(b){var _=b.data;y.pending-=_.count,y.requests[_.id][_.action](_.value),delete y.requests[_.id]},y}function m(p){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(n))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+h.toString()+g.toString(),b=new Blob([y],{type:"text/javascript"}),_=URL.createObjectURL(b),A=0;A<p;++A)u[A]=d(_);URL.revokeObjectURL(_)}function v(p,y,b,_,A){for(var x=u[0],E=1;E<u.length;++E)u[E].pending<x.pending&&(x=u[E]);return new Promise(function(T,M){var S=new Uint8Array(b),D=f++;x.pending+=p,x.requests[D]={resolve:T,reject:M},x.object.postMessage({id:D,count:p,size:y,source:S,mode:_,filter:A},[S.buffer])})}function g(p){a.then(function(){var y=p.data;try{var b=new Uint8Array(y.count*y.size);h(s.exports[y.mode],b,y.count,y.size,y.source,s.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:b},[b.buffer])}catch(_){self.postMessage({id:y.id,count:y.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,y,b,_,A){h(s.exports.meshopt_decodeVertexBuffer,p,y,b,_,s.exports[c[A]])},decodeIndexBuffer:function(p,y,b,_){h(s.exports.meshopt_decodeIndexBuffer,p,y,b,_)},decodeIndexSequence:function(p,y,b,_){h(s.exports.meshopt_decodeIndexSequence,p,y,b,_)},decodeGltfBuffer:function(p,y,b,_,A,x){h(s.exports[l[A]],p,y,b,_,s.exports[c[x]])},decodeGltfBufferAsync:function(p,y,b,_,A){return u.length>0?v(p,y,b,l[_],c[A]):a.then(function(){var x=new Uint8Array(p*y);return h(s.exports[l[_]],x,p,y,b,s.exports[c[A]]),x})}}}();var _f=[["hips","Hips",null,null],["spine","Spine","Spine1","chest"],["chest","Spine2","Neck","neck"],["neck","Neck","Head","head"],["head","Head",null,null],["upperArmL","LeftArm","LeftForeArm","foreArmL"],["foreArmL","LeftForeArm","LeftHand","handL"],["handL","LeftHand","LeftHandMiddle1",[.03,-.182,.012]],["upperArmR","RightArm","RightForeArm","foreArmR"],["foreArmR","RightForeArm","RightHand","handR"],["handR","RightHand","RightHandMiddle1",[-.03,-.182,.012]],["thighL","LeftUpLeg","LeftLeg","shinL"],["shinL","LeftLeg","LeftFoot","footL"],["footL","LeftFoot","LeftToeBase",[.006,-.063,.205]],["thighR","RightUpLeg","RightLeg","shinR"],["shinR","RightLeg","RightFoot","footR"],["footR","RightFoot","RightToeBase",[-.006,-.063,.205]]],Uy=["Index","Middle","Ring","Pinky"];function Ho(r){return new Promise((t,e)=>{let i=atob(r),n=new Uint8Array(i.length);for(let a=0;a<i.length;a++)n[a]=i.charCodeAt(a);let s=new No;s.setMeshoptDecoder(yf),s.parse(n.buffer,"",t,e)})}var Bo=class{constructor(t,e,i=1.78){let n=t.group,s=n.position.clone(),a=n.quaternion.clone();n.position.set(0,0,0),n.quaternion.identity(),this.root=new ae,this.root.name="glbBody",this.root.add(e.scene),n.add(this.root);let o=null;if(e.scene.traverse(x=>{x.isSkinnedMesh&&!o&&(o=x)}),!o)throw new Error("GLB has no skinned mesh");this.mesh=o,o.frustumCulled=!1,o.layers.enable(1),o.skeleton.pose(),n.updateMatrixWorld(!0);let h=new Map;o.skeleton.bones.forEach(x=>h.set(x.name.replace(/^mixamorig:?/i,""),x)),this.by=h;for(let x of _f)if(!h.get(x[1]))throw new Error("GLB skeleton is missing "+x[1]);let c=new w,l=new w;{let x=h.get("Head").getWorldPosition(new w).sub(h.get("Hips").getWorldPosition(c)).normalize(),E=h.get("LeftUpLeg").getWorldPosition(new w).sub(h.get("RightUpLeg").getWorldPosition(l)).normalize(),T=new w().crossVectors(E,x).normalize();E.crossVectors(x,T).normalize(),this.root.quaternion.setFromRotationMatrix(new Lt().makeBasis(E,x,T)).invert()}n.updateMatrixWorld(!0);let u=()=>(n.updateMatrixWorld(!0),o.skeleton.update(),o.computeBoundingBox(),o.boundingBox.clone().applyMatrix4(o.matrixWorld)),f=u();this.sourceHeight=f.max.y-f.min.y,this.root.scale.setScalar(i/this.sourceHeight),n.updateMatrixWorld(!0),h.get("Hips").getWorldPosition(c),this.root.position.set(-c.x,-c.y,-c.z),n.updateMatrixWorld(!0),f=u();let d=h.get("Head").getWorldPosition(new w);this.eye=new w(0,f.max.y-.118,d.z+.082),this.mouth=new w(0,f.max.y-.185,d.z+.09),this.top=f.max.y,this.feet=f.min.y;let m=h.get("Hips");this.order=[],m.traverse(x=>{x.isBone&&this.order.push(x)}),this.order.forEach((x,E)=>{x.userData.k=E}),this.parent=this.order.map(x=>x===m?-1:x.parent.userData.k),this.restL=this.order.map(x=>x.quaternion.clone()),this.W=this.order.map(()=>new wt),this.rootParentW=m.parent.getWorldQuaternion(new wt),this.driver=this.order.map(()=>-1),this.aligned=this.order.map(()=>null);let v=x=>new w(ui[R[x]][2],ui[R[x]][3],ui[R[x]][4]),g=new wt;for(let[x,E,T,M]of _f){let S=h.get(E),D=S.userData.k,G=S.getWorldQuaternion(new wt),K=new wt;if(T&&M&&h.get(T)){let O=h.get(T).getWorldPosition(new w).sub(S.getWorldPosition(c)).normalize(),P=(Array.isArray(M)?new w(...M):v(M).sub(v(x))).normalize();K.setFromUnitVectors(O,P)}this.driver[D]=R[x],this.aligned[D]=K.multiply(G)}this.special=this.order.map(()=>null);let p=h.get("Spine1");if(p){let x=h.get("Spine2").getWorldPosition(new w).sub(p.getWorldPosition(c)).normalize(),E=new wt().setFromUnitVectors(x,new w(0,1,0)).multiply(p.getWorldQuaternion(new wt));this.special[p.userData.k]={type:"mid",aligned:E}}for(let[x,E,T]of[["LeftShoulder",1,R.upperArmL],["RightShoulder",-1,R.upperArmR]]){let M=h.get(x);M&&(this.special[M.userData.k]={type:"clav",side:E,arm:T,restW:M.getWorldQuaternion(new wt)})}this._d=new w,this._e=new ni,this._q2=new wt,this.fingers={Left:[],Right:[]},this.grip={Left:0,Right:0};for(let x of["Left","Right"]){let E=h.get(x+"Hand"),T=new w(0,-1,0);for(let M of Uy)for(let S=1;S<=3;S++){let D=h.get(`${x}Hand${M}${S}`);if(!D)continue;let G=D.children.find(N=>N.isBone),K=G?G.getWorldPosition(new w).sub(D.getWorldPosition(c)).normalize():new w(x==="Left"?1:-1,0,0),O=new w().crossVectors(K,T).normalize(),P=D.parent.getWorldQuaternion(new wt),F=D.getWorldQuaternion(new wt);g.setFromAxisAngle(O,(S===1?.32:.42)*(M==="Pinky"?1.25:M==="Index"?.8:1));let z=g.clone().multiply(F),U=P.invert();this.restL[D.userData.k]=U.clone().multiply(z),D.quaternion.copy(this.restL[D.userData.k]),g.setFromAxisAngle(O,S===1?1.05:S===2?1.35:.9),this.fingers[x].push({bone:D,open:this.restL[D.userData.k].clone(),shut:U.clone().multiply(g.clone().multiply(F))})}}this.D=ui.map(()=>new wt),this.headBone=h.get("Head"),this._q=new wt;let y=Array.isArray(o.material)?o.material:[o.material];for(let x of y)x.roughness=.44,x.metalness=0,x.envMapIntensity=1.3,x.color&&x.color.setRGB(.7,.78,.9),x.needsUpdate=!0;this.cutOn={value:0},this.headRigid=[];let b=`
  if (uCutOn > 0.5 && cutV > 0.0) {
    vec3 rel = position - uCutPos; rel -= uCutDir * dot(rel, uCutDir);
    transformed = uCutPos + rel * min(1.0, uCutR / max(length(rel), 1.0e-5)) - uCutDir * (0.4 * uCutR);
  }`,_=h.get("Head"),A=x=>{for(let E=x.parent;E;E=E.parent)if(E===_)return!0;return!1};e.scene.traverse(x=>{if(!x.isMesh)return;if(!x.isSkinnedMesh){A(x)&&this.headRigid.push(x);return}let E=x.skeleton.bones,T=it=>E.findIndex(pt=>pt.name.replace(/^mixamorig:?/i,"")===it),M=T("Neck"),S=T("Head"),D=T("Spine2");if(M<0||S<0||D<0)return;let G=new Set([M]);_.traverse(it=>{let pt=E.indexOf(it);pt>=0&&G.add(pt)});let K=x.geometry.attributes.position,O=x.geometry.attributes.skinIndex,P=x.geometry.attributes.skinWeight,F=O.count,z=new Float32Array(F),U=new Float32Array(F),N=new w,k=new w,W=new w,j=0,V=0;for(let it=0;it<F;it++){let pt=0,rt=0,Tt=0;for(let H=0;H<4;H++){let dt=P.getComponent(it,H),at=O.getComponent(it,H);rt+=dt,G.has(at)&&(pt+=dt),at===M&&(Tt+=dt)}z[it]=rt>0?pt/rt:0,U[it]=rt>0?Tt/rt:0,W.fromBufferAttribute(K,it),U[it]=Math.max(U[it],z[it]>.25&&z[it]<.85?.6:0),U[it]>.5?(N.add(W),j++):z[it]>.95&&(k.add(W),V++)}if(!j||!V)return;x.geometry.setAttribute("aHead",new Nt(z,1)),N.multiplyScalar(1/j),k.multiplyScalar(1/V);let B=k.clone().sub(N).normalize(),X=0,$=0;for(let it=0;it<F;it++){if(U[it]<=.5)continue;W.fromBufferAttribute(K,it).sub(N);let pt=W.dot(B),rt=W.addScaledVector(B,-pt).length();pt<X&&(X=pt),rt>$&&($=rt)}let Z={uCutOn:this.cutOn,uCutPos:{value:N.clone().addScaledVector(B,X*.55)},uCutDir:{value:B},uCutR:{value:$*.8},uCutBone:{value:D}};x.frustumCulled=!1,this.cutInfo=Z;for(let it of Array.isArray(x.material)?x.material:[x.material])it.onBeforeCompile=pt=>{Object.assign(pt.uniforms,Z),pt.vertexShader=`attribute float aHead; uniform float uCutOn; uniform vec3 uCutPos; uniform vec3 uCutDir; uniform float uCutR; uniform float uCutBone; varying float vCut;
`+pt.vertexShader.replace("#include <skinbase_vertex>",`float cutV = aHead - 0.6;
  vCut = cutV;
  #include <skinbase_vertex>
  #ifdef USE_SKINNING
  if (uCutOn > 0.5 && cutV > 0.0) { boneMatX = getBoneMatrix(uCutBone); boneMatY = boneMatX; boneMatZ = boneMatX; boneMatW = boneMatX; }
  #endif`).replace("#include <morphtarget_vertex>","#include <morphtarget_vertex>"+b),pt.fragmentShader=`uniform float uCutOn; varying float vCut;
`+pt.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) diffuseColor.a = 1.0;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) gl_FragColor.rgb = vec3(0.010, 0.012, 0.014);`)},it.customProgramCacheKey=()=>"eos-neck-lid-"+x.uuid,it.needsUpdate=!0}),this.material=y[0],n.position.copy(s),n.quaternion.copy(a),n.updateMatrixWorld(!0)}setHeadVisible(t){this.cutOn.value=t?0:1}setGrip(t,e){for(let[i,n]of[["Left",t],["Right",e]])if(!(Math.abs(this.grip[i]-n)<.01)){this.grip[i]=n;for(let s of this.fingers[i])s.bone.quaternion.copy(s.open).slerp(s.shut,n),this.restL[s.bone.userData.k].copy(s.bone.quaternion)}}update(t){let e=this.D;for(let a=0;a<t.length;a++){let o=ui[a][1];o<0?e[a].copy(t[a].quaternion):e[a].copy(e[o]).multiply(t[a].quaternion)}let i=this.W,n=this.order,s=this._q;for(let a=0;a<n.length;a++){let o=this.parent[a]<0?this.rootParentW:i[this.parent[a]],h=this.driver[a];if(h>=0)i[a].copy(e[h]).multiply(this.aligned[a]),n[a].quaternion.copy(s.copy(o).invert().multiply(i[a]));else if(this.special[a]){let c=this.special[a];if(c.type==="mid")i[a].copy(e[R.spine]).slerp(e[R.chest],.5).multiply(c.aligned);else{let l=this._d.set(0,-1,0).applyQuaternion(t[c.arm].quaternion),u=Math.max(0,Math.min(1,(l.y+.35)/1.35)),f=Math.max(0,Math.min(1,l.z));this._q2.setFromEuler(this._e.set(0,-c.side*.3*f,c.side*.62*u*u*(3-2*u),"YXZ")),i[a].copy(e[R.chest]).multiply(this._q2).multiply(c.restW)}n[a].quaternion.copy(s.copy(o).invert().multiply(i[a]))}else i[a].copy(o).multiply(this.restL[a])}}};var Mf={scream:[["scream_eyes",1,"snap"],["scream_mouth",1,"open"]],fear:[["fear_brows",1,"snap"],["scream_mouth",.85,"open"]],agony:[["agony",1,"slow"]],sob:[["sob",1,"slow"]],terror:[["fear_brows",1,"snap"],["scream_eyes",.25,"snap"],["shout_mouth",1,"open"]],hit:[["eyes_wide",1,"snap"],["clench",1,"snap"],["fear_brows",.3,"snap"]],strain:[["clench",.85,"slow"],["strain_eyes",1,"slow"]],dying:[["exhaust",1,"slow"],["sob",.35,"slow"]],shock:[["jaw_drop",1,"open"],["eyes_wide",.8,"snap"],["fear_brows",.6,"snap"]],gasp:[["gasp",1,"snap"],["eyes_wide",.5,"snap"]],silent:[["jaw_drop",.9,"slow"],["strain_eyes",.8,"slow"]],wince:[["strain_eyes",.7,"snap"],["clench",.6,"snap"]],hold:[["clench",.4,"slow"],["eyes_wide",.55,"slow"],["fear_brows",.35,"slow"]],choke:[["eyes_wide",1,"snap"],["gasp",.55,"open"],["exhaust",.2,"slow"]],howl:[["sob",.7,"slow"],["shout_mouth",1,"open"]],pant:[["exhaust",.6,"slow"],["gasp",.45,"breath"]],blank:[["exhaust",.5,"slow"],["eyes_wide",.4,"slow"],["jaw_drop",.25,"slow"]],groan:[["strain_eyes",.9,"slow"],["agony",.5,"slow"],["clench",.5,"slow"],["fear_brows",.25,"slow"]],moan:[["agony",.75,"slow"],["sob",.4,"slow"],["exhaust",.35,"breath"],["strain_eyes",.35,"slow"]]},Ny={snap:16,open:8,slow:3.2,breath:6},Vo=class{constructor(){this.mesh=null,this.dict=null,this.inf=null,this.cur={},this.tgt={},this.shape={},this.forced=null,this.forcedT=0,this.forcedGain=1,this.label="none",this.time=0,this.blinkT=2,this.blink=0}attach(t){if(!t||!t.morphTargetDictionary||!t.morphTargetInfluences)return!1;this.mesh=t,this.dict=t.morphTargetDictionary,this.inf=t.morphTargetInfluences;for(let e of Object.keys(this.dict))this.cur[e]=0,this.tgt[e]=0,this.shape[e]="slow";return!0}play(t,e,i=1){Mf[t]&&(this.forced=t,this.forcedT=e,this.forcedGain=i)}update(t,e){if(!this.mesh)return;this.time+=t;let i=this.tgt,n=this.shape;for(let u in i)i[u]=0;let s=0;this.label="none";let a=(u,f)=>{if(!(f<=.01)){f>s&&(s=f,this.label=u);for(let[d,m,v]of Mf[u]){if(i[d]===void 0)continue;let g=m*Math.min(1,f)*(v==="breath"?.5+.5*Math.sin(e.breathPhase*6.283):1);g>i[d]&&(i[d]=g,n[d]=v)}}};if(this.forcedT-=t,this.forced&&this.forcedT>0?a(this.forced,this.forcedGain):this.forced=null,!e.alive||e.blackout>.75)a("blank",1);else if(e.mouthUnder){let u=e.oxygen;e.impact>1&&a("hit",Math.min(1,e.impact/1.8)),u<14?(a("silent",1),a("agony",.7)):u<34?(a("choke",1),a("agony",.5*(34-u)/20)):u<62?(a("strain",.5+.5*(62-u)/28),a("hold",.6)):a("hold",1),e.blackout>.15&&a("dying",e.blackout*1.2)}else e.impact>1&&a("hit",Math.min(1,e.impact/1.8)),e.air>.3&&a("shock",e.air),e.brace>.3&&(a(e.crestDist<12?"terror":"fear",e.brace),e.brace>.85&&e.crestDist<5&&a("hold",.8)),e.gaspTimer>0&&(e.inhaling?a("gasp",.45+.55*Math.min(1,e.gaspTimer/2.5)):a("pant",1),e.swallow>.25&&a("wince",.7)),a("choke",bt((40-e.oxygen)/30)),e.stamina<24&&a("dying",1-e.stamina/24),e.effort>.7&&a("strain",Math.min(1,(e.effort-.7)*1.5)),e.temp<35.2&&a("groan",bt((35.2-e.temp)/2)*.7),s<.35&&a("pant",.25+.5*e.exertion);this.blinkT-=t,this.blinkT<=0&&(this.blink=.16,this.blinkT=1.8+Math.random()*3.5),this.blink=Math.max(0,this.blink-t),this.blink>0&&!e.mouthUnder&&i.strain_eyes!==void 0&&(i.strain_eyes=Math.max(i.strain_eyes,.9));let o=this.inf,h=this.dict,c=this.cur,l=0;for(let u in c){let d=i[u]>c[u]?Ny[n[u]]||4:3.4;c[u]+=(i[u]-c[u])*(1-Math.exp(-t*d));let m=1+.12*Math.sin(this.time*(2.3+l*.37)+l*1.9)*(c[u]>.05?1:0);o[h[u]]=Math.max(0,Math.min(1.15,c[u]*m)),l++}}};var Oy={gasp:[["b_gasp3",0,3,.72],["b_gasp4",0,3,.7],["b_gasp2",0,3,.8],["b_gasp1",0,3,.9]],inhale:[["b_gasp3",0,.85,.62],["b_gasp4",0,.62,.6]],cough:[["b_choke",.25,1.7,1],["b_choke",1.95,3,1.1],["b_choke",3.9,5,1.2],["b_choke",7.15,8.95,1.1],["b_choke",9.4,10.8,.9]],sputter:[["b_choke",5.45,6.1,1.1],["b_choke",14.25,14.7,.9],["b_choke",15.4,16.5,1],["b_choke",19.45,20.05,.6]],retch:[["b_choke",11.65,14.15,1.2],["b_choke",17.65,18.8,.8]],groan:[["b_under",0,1.25,1.2],["b_under",2.05,3.45,1.2]],bubbles:[["b_under",4.1,8.15,.9]]},By={gasp:1.2,inhale:3,cough:1.2,sputter:1.4,retch:4,groan:3,bubbles:1.5},Hy={gasp:"gasp",inhale:"gasp",cough:"wince",sputter:"wince",retch:"choke",groan:"silent",bubbles:"choke"},Vy={cough:1,sputter:1,retch:1},Go=class{constructor(t,e,i={}){this.audio=t,this.face=e,this.hooks=i,this.t=0,this.cool={},this.cur={prio:0,until:0},this.jobs=[],this.marks={},this.prevBrace=0,this.prevAir=0,this.prevDive=!1,this.splashCool=0,this.slapCool=0,this.gurgleUntil=0,this.gT=0,this.bubT=2,this.bed=0,this.last="",this.lastPick={},this.count=0}say(t,e,i,n){let s=this.t;if(s<(this.cool[t]||0)||s<this.cur.until&&e<=this.cur.prio)return 0;let a=Oy[t],o=Math.random()*a.length|0;a.length>1&&o===this.lastPick[t]&&(o=(o+1)%a.length),this.lastPick[t]=o;let[h,c,l,u]=a[o],f=!!(n&&n.under),d=this.audio.playVoice(h,i*u*(f?1.3:1),.97+Math.random()*.06,[c,l]);this.last=t,this.count++;let m=d||l-c;return this.cur={prio:e,until:s+m*.85},this.cool[t]=s+m+By[t],this.face&&this.face.play(f?t==="groan"?"silent":"choke":Hy[t],m+.25),Vy[t]&&this.hooks.cough&&this.hooks.cough(m),f&&(this.audio.gurgle(.95),this.hooks.bubbles&&this.hooks.bubbles(Math.min(44,Math.round(12+m*14))),this.gurgleUntil=s+m,this.gT=.3),m}later(t,e){this.jobs.push({at:this.t+t,fn:e})}onEvent(t,e,i){if(!(!i||!i.alive))if(t==="surface")if(e.time>1.2||e.need>.2){let n=this.say("gasp",6,1,i);e.time>7||i.swallow>.45?this.later(Math.max(1.1,n*.6),s=>{s.under||this.say("retch",6,1,s)}):(e.time>3.2||i.swallow>.2)&&this.later(Math.max(1,n*.55),s=>{s.under||this.say("cough",5,.95,s)})}else e.time>.25&&(i.swallow>.1||Math.random()<.5)&&this.say("sputter",3,.8,i);else t==="impact"?e.strength>1.15&&!i.under&&this.say("sputter",4,1,i):t==="exhale"&&e.cough?i.under||this.say("cough",4,.85,i):t==="splash"?this.t>this.splashCool&&e.v>1.8&&!i.camUnder&&(this.splashCool=this.t+.45,this.audio.playClip(e.v>4?Math.random()<.5?"w_splash2":"w_splash1":"w_splash3",Math.min(.9,.15+e.v*.09),.9+Math.random()*.25,Math.random()*1.2-.6)):t==="limb"&&this.t>this.slapCool&&e.v>1.3&&!i.camUnder&&(this.slapCool=this.t+.07,this.audio.playClip("w_slap"+(1+(Math.random()*6|0)),Math.min(.75,.06+e.v*.085)*(e.kind==="arm"?.6:1),.85+Math.random()*.4,e.pan||0))}update(t,e){this.t+=t;for(let c=this.jobs.length-1;c>=0;c--)this.t>=this.jobs[c].at&&this.jobs.splice(c,1)[0].fn(e);let i=e.alive&&!e.under,n=c=>Math.max(0,Math.min(1,c)),s=n(.3+.55*(e.exertion||0)+(e.gaspTimer>0?.35:0)+.3*(e.struggle||0)+.25*n(e.brace||0)+.2*(e.air||0)+.38*(e.fear||0)),a=n((30-e.stamina)/25),o=this.t<this.cur.until?.28:1,h=i?(1-(e.blackout||0))*o:0;if(this.bed=h*(.2+.8*s)*(1-.7*a),this.audio.setBreath(this.bed*.95,h*(.12+.88*a)*.9,.92+.42*s,i),!!e.alive)if(e.under&&this.t<this.gurgleUntil&&(this.gT-=t,this.gT<=0&&(this.audio.gurgle(.6),this.gT=.32+Math.random()*.3,this.hooks.bubbles&&this.hooks.bubbles(7))),!e.under&&e.mouthDepth!==void 0&&e.mouthDepth>-.07&&(this.lipT=(this.lipT||0)-t,this.lipT<=0&&(this.lipT=.35+Math.random()*.35,this.audio.gurgle(.35+.3*Math.random()),this.hooks.bubbles&&e.mouthDepth>-.02&&this.hooks.bubbles(3))),!e.under&&(e.fear||0)>.68&&(this.fearT=(this.fearT===void 0?3:this.fearT)-t,this.fearT<=0&&(this.fearT=3.5+Math.random()*4.5,this.say("gasp",2,.55+.4*e.fear,e))),e.brace>.7&&this.prevBrace<=.7&&e.crestHeight>6&&!e.under&&this.say("inhale",5,1,e),this.prevBrace=e.brace,e.dive&&!this.prevDive&&!e.under&&this.say("inhale",5,.9,e),this.prevDive=e.dive,e.air>.5&&this.prevAir<=.5&&!e.under&&this.say("inhale",5,1,e),this.prevAir=e.air,e.under){let c=n(((e.tumble||0)-.25)*2.2+((e.turb||0)-.3)*1.2);c>.05?(this.thrG=(this.thrG||0)-t,this.thrG<=0&&(this.thrG=.16+(1-c)*.3+Math.random()*.14,this.audio.gurgle(.45+.5*c),this.hooks.bubbles&&this.hooks.bubbles(Math.round(5+9*c))),this.thrV=(this.thrV||0)-t,this.thrV<=0&&(this.thrV=1.7+Math.random()*1.4,this.say("bubbles",3,.6+.4*c,e))):this.thrV=Math.min(this.thrV||0,.4);let l=e.oxygen;l<48&&!this.marks.a&&(this.marks.a=!0,this.say("groan",5,.8,e)),l<30&&!this.marks.b&&(this.marks.b=!0,this.say("groan",6,1,e)),l<14&&!this.marks.c&&(this.marks.c=!0,this.say("groan",7,1,e)),l<72&&(this.bubT-=t*(1+n((50-l)/40)),this.bubT<=0&&(this.bubT=2.6+Math.random()*2.4,this.say("bubbles",2,.55+.4*n((60-l)/50),e)))}else e.oxygen>60&&(this.marks.a=this.marks.b=this.marks.c=!1)}};var Gy=`
varying vec3 vP;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vP = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Wy=`
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
}`,zn=13,Wo=class{constructor(t){this.waves=t,this.group=new ae,this.group.visible=!1,this.state="none",this.arriveAt=240,this.hoverTime=0,this.hold=0,this.rescued=!1,this.pos=new w,this.vel=new w,this.ring=new w,this.ringVel=new w,this.tan=.125,this.time=0,this.aim=new w,this._s=bi(),this._v=new w,this._d=new w,this._down=new w(0,-1,0),this._from=new w;let e=this.heli=new ae,i=new Fe({color:13620438,roughness:.45,metalness:.2}),n=new Fe({color:13127708,roughness:.5,metalness:.1}),s=new Fe({color:1316892,roughness:.5,metalness:.4}),a=new Fe({color:395532,roughness:.08,metalness:.8});{let P=document.createElement("canvas");P.width=P.height=512;let F=P.getContext("2d");F.fillStyle="#e9ecee",F.fillRect(0,0,512,512);let z=7,U=()=>(z=z*16807%2147483647,z/2147483647);for(let k=0;k<2600;k++){let W=205+U()*45;F.fillStyle=`rgba(${W},${W},${W+3},0.25)`,F.fillRect(U()*512,U()*512,2+U()*5,2+U()*5)}for(let k=0;k<46;k++){let W=U()*512,j=3+U()*14,V=F.createLinearGradient(0,0,0,512);V.addColorStop(0,"rgba(60,62,66,0)"),V.addColorStop(.3+U()*.3,`rgba(60,62,66,${.05+U()*.12})`),V.addColorStop(1,"rgba(60,62,66,0)"),F.fillStyle=V,F.fillRect(W,0,j,512)}F.strokeStyle="rgba(40,44,50,0.62)",F.lineWidth=1.6;for(let k of[64,150,256,330,420,500])F.beginPath(),F.moveTo(0,k),F.lineTo(512,k),F.stroke();for(let k of[0,86,128,214,256,342,384,470])F.beginPath(),F.moveTo(k,0),F.lineTo(k,512),F.stroke();F.fillStyle="rgba(50,54,60,0.55)";for(let k of[58,70,144,156,250,262,324,336,414,426])for(let W=4;W<512;W+=9)F.fillRect(W,k,1.6,1.6);for(let k of[80,92,208,220,336,348,464,476])for(let W=4;W<512;W+=9)F.fillRect(k,W,1.6,1.6);let N=new Fi(P);N.colorSpace=fe,N.wrapS=N.wrapT=ii,N.repeat.set(4,3),N.anisotropy=4,i.map=N,i.color.set(14672869)}let o=(P,F,z,U,N=512)=>{let k=document.createElement("canvas");k.width=N,k.height=Math.round(N*z/F);let W=k.getContext("2d");W.textAlign="center",W.textBaseline="middle",W.fillStyle=U;let j=k.height/P.length;P.forEach(([B,X],$)=>{W.font=`900 ${Math.round(j*X)}px "Arial Black", "Malgun Gothic", "Noto Sans KR", Arial, sans-serif`,W.fillText(B,N/2,j*($+.5),N*.96)});let V=new Fi(k);return V.colorSpace=fe,V.anisotropy=4,new gt(new wi(F,z),new Fe({map:V,transparent:!0,alphaTest:.35,roughness:.6,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}))},h=[[.02,3.35],[.55,3.2],[.95,2.8],[1.22,2.1],[1.32,1.2],[1.32,0],[1.25,-1],[1,-1.9],[.62,-2.6],[.4,-3.6],[.3,-5.4],[.22,-7.3],[.12,-8.2],[.02,-8.35]],c=new gt(new Ys(h.map(([P,F])=>new ct(P,F)),28),i);c.rotation.x=Math.PI/2,c.scale.set(1,1,1.12),e.add(c);let l=new gt(new pe(1.345,1.3,.9,28,1,!0),n);l.rotation.x=Math.PI/2,l.scale.set(1,1,1.12),l.position.z=-.75,e.add(l);let u=new gt(new pe(.33,.3,.7,14,1,!0),n);u.rotation.x=Math.PI/2,u.position.set(0,0,-5.6),e.add(u);let f=[[1.335,.9],[1.335,1.25],[1.235,2.1],[.965,2.8],[.565,3.2],[.03,3.36]].map(([P,F])=>new ct(P*1.012,F)),d=new gt(new Ys(f,20,Math.PI/2+.38,Math.PI-.76),a);d.rotation.x=Math.PI/2,d.scale.set(1,1,1.12),e.add(d);for(let P of[-1,1]){let F=new gt(new Me(.05,.62,1.05),a);F.position.set(P*1.335,.42,-1.25),e.add(F);let z=new gt(new Me(.06,1.5,.09),i);z.position.set(P*1.31,.2,.92),e.add(z)}let m=new gt(new Me(1.5,.12,3.6),s);m.position.set(0,-1.44,.2),e.add(m);let v=new gt(new Yi(1,18,12),i);v.scale.set(.85,.55,1.9),v.position.set(0,1.35,-.5),e.add(v);for(let P of[-1,1]){let F=new gt(new pe(.16,.2,.9,10),s);F.rotation.x=Math.PI/2,F.position.set(P*.55,1.35,-1.9),e.add(F)}let g=new gt(new Me(.1,2,1),i);g.position.set(0,.95,-7.9),g.rotation.x=-.42,e.add(g);let p=new gt(new Me(.11,.5,.75),n);p.position.set(0,1.78,-8.28),p.rotation.x=-.42,e.add(p);let y=new gt(new Me(2.6,.07,.6),i);y.position.set(0,.1,-6.9),e.add(y);let b=new gt(new pe(.13,.2,.75,10),s);b.position.set(0,2.05,-.2),e.add(b);let _=new gt(new pe(.34,.34,.16,12),s);_.position.set(0,2.42,-.2),e.add(_);for(let P of[-1,1]){let F=new gt(new pe(.06,.06,4.6,8),s);F.rotation.x=Math.PI/2,F.position.set(P*1.35,-1.75,.3),e.add(F);let z=new gt(new pe(.06,.06,.6,8),s);z.rotation.x=Math.PI/2-.6,z.position.set(P*1.35,-1.6,2.8),e.add(z);for(let U of[-1,1]){let N=new gt(new pe(.05,.05,1.05,6),s);N.position.set(P*1.12,-1.28,.3+U*1.15),N.rotation.z=-P*.45,e.add(N)}}let A=new gt(new Me(.06,1.35,1.5),new Ne({color:new kt(.06,.04,.018)}));A.position.set(1.325,.05,.1),e.add(A);let x=new gt(new Yi(.2,10,8),new Ne({color:329223}));x.position.set(1.36,.35,.45),x.scale.set(.5,1,1),e.add(x);let E=new gt(new Me(.1,.55,.42),new Ne({color:329223}));E.position.set(1.36,-.08,.45),e.add(E);let T=new gt(new pe(.06,.06,1.3,8),s);T.rotation.z=Math.PI/2-.25,T.position.set(1.75,1,.1),e.add(T);let M=new gt(new pe(.16,.16,.34,10),s);M.rotation.x=Math.PI/2,M.position.set(2.32,.86,.1),e.add(M);{let P=o([["RESCUE",.92]],1.45,.38,"#b8431a");P.position.set(-1.345,-.3,.52),P.rotation.y=-Math.PI/2,e.add(P);let F=o([["\uAD6C\uC870",.9]],.62,.36,"#b8431a");F.position.set(-1.33,-.75,.52),F.rotation.y=-Math.PI/2,e.add(F);for(let N of[-1,1]){let k=o([["119",.95]],.62,.36,"#f1f3f4");k.position.set(N*1.37,-.28,N>0?-1:-.75),k.rotation.y=N*Math.PI/2,e.add(k)}let z=o([["119",.95],["RESCUE",.62]],1.35,2.3,"#d4572a");z.position.set(0,-1.512,.25),z.rotation.x=Math.PI/2,e.add(z),z.material.emissiveMap=z.material.map,z.material.emissive.set(16777215),z.material.emissiveIntensity=.55;let U=o([["119",.9]],.5,.3,"#b8431a");U.position.set(.062,.85,-7.86),U.rotation.set(-.42,Math.PI/2,0,"YXZ"),e.add(U)}{let P=new gt(new pe(.26,.2,.34,14),s);P.rotation.x=-.5,P.position.set(0,-1.16,2.1),e.add(P);let F=new gt(new pn(.235,.035,8,18),s);F.rotation.x=Math.PI/2-.5,F.position.set(0,-1.29,2.2),e.add(F);let z=new gt(new Me(.62,.07,.07),s);z.position.set(0,-1.05,2.05),e.add(z);for(let V of[-1,1]){for(let Z of[1.25,-.75]){let it=new gt(new fn(.17,1.15,4,10),new Fe({color:2303787,roughness:.8}));it.rotation.x=Math.PI/2,it.position.set(V*1.35,-1.62,Z),e.add(it)}let B=new gt(new pe(.012,.012,.75,4),s);B.position.set(V*.3,1.55,2.25),B.rotation.x=.5,e.add(B);let X=new gt(new pe(.014,.014,.5,5),s);X.rotation.x=Math.PI/2,X.position.set(V*.42,-.62,3.2),e.add(X);let $=new gt(new Me(.05,.55,.5),i);$.position.set(V*1.3,.1,-6.9),e.add($)}let U=new gt(new Me(.34,.05,1.3),s);U.position.set(1.5,-.95,.1),e.add(U);for(let V of[.3,.62]){let B=new gt(new fn(.075,.42,3,8),new Fe({color:11553308,roughness:.7}));B.position.set(1.47,-.72,V),B.rotation.z=.12,e.add(B);let X=new gt(new Me(.12,.1,.24),s);X.position.set(1.5,-1,V+.04),e.add(X)}for(let[V,B,X,$]of[[0,.52,-4.4,.7],[0,.46,-5.9,.5],[0,-1.62,-1.4,.4],[.5,1.88,.9,.45]]){let Z=new gt(new pe(.012,.02,$,5),s);Z.position.set(V,B+(B>0?$/2:-$/2),X),Z.rotation.x=B>0?-.35:.35,e.add(Z)}let N=new gt(new pe(.03,.03,.9,6),s);N.position.set(0,-.42,-7.6),N.rotation.x=.9,e.add(N);let k=new gt(new Me(.16,.22,.2),n);k.position.set(2.32,.62,.1),e.add(k);let W=new gt(new pe(.035,.035,.9,6),s);W.rotation.z=Math.PI/2+.75,W.position.set(1.72,.62,.1),e.add(W),this.bladeRoots=new ae,this.bladeRoots.position.set(0,2.47,-.2);for(let V=0;V<4;V++){let B=new gt(new Me(2.3,.035,.26),s);B.position.set(Math.cos(V*Math.PI/2)*1.25,0,Math.sin(V*Math.PI/2)*1.25),B.rotation.y=-V*Math.PI/2,this.bladeRoots.add(B)}e.add(this.bladeRoots);let j=new gt(new Yi(.2,10,6),s);j.scale.y=.5,j.position.set(0,2.55,-.2),e.add(j)}let S=(P,F,z)=>{let U=document.createElement("canvas");U.width=U.height=256;let N=U.getContext("2d");N.translate(128,128);let k=N.createRadialGradient(0,0,8,0,0,126);k.addColorStop(0,`rgba(30,35,40,${F*.5})`),k.addColorStop(.8,`rgba(30,35,40,${F})`),k.addColorStop(.97,`rgba(52,58,66,${F*1.5})`),k.addColorStop(1,"rgba(30,35,40,0)"),N.fillStyle=k,N.beginPath(),N.arc(0,0,126,0,6.283),N.fill();for(let j=0;j<P;j++){N.save(),N.rotate(j*6.283/P);let V=N.createLinearGradient(0,-16,0,16);V.addColorStop(0,"rgba(20,24,28,0)"),V.addColorStop(.5,`rgba(20,24,28,${z})`),V.addColorStop(1,"rgba(20,24,28,0)"),N.fillStyle=V,N.beginPath(),N.moveTo(6,0),N.lineTo(124,-15),N.lineTo(124,15),N.closePath(),N.fill(),N.restore()}let W=new Fi(U);return W.colorSpace=He,W};this.rotor=new gt(new Ks(6.3,48),new Ne({map:S(4,.22,.5),transparent:!0,side:ke,depthWrite:!1})),this.rotor.rotation.x=-Math.PI/2,this.rotor.position.set(0,2.5,-.2),e.add(this.rotor),this.tail=new gt(new Ks(1.05,24),new Ne({map:S(2,.2,.4),transparent:!0,side:ke,depthWrite:!1})),this.tail.position.set(.22,1.25,-8.15),this.tail.rotation.y=Math.PI/2,e.add(this.tail);let D=(P,F,z,U,N,k,W=.13)=>{let j=new gt(new Yi(W,8,6),new Ne({color:new kt(P,F,z)}));return j.position.set(U,N,k),e.add(j),j};D(2.6,.12,.1,1.35,.1,.6),D(.1,2.4,.4,-1.35,.1,.6),this.strobe=D(5,5,5.6,0,1.75,-7.6,.16),this.beacon=D(6,.25,.2,0,-.55,-3.4,.14),this.lampHead=D(5,5.8,7,0,-1.25,2.2,.22),this.group.add(e),this.spotLight=new Qs(13952255,0,0,.16,.7,0),this.spotLight.layers.enableAll(),this.group.add(this.spotLight,this.spotLight.target),this.beamMat=new ne({uniforms:{uNoise:ht.uNoise,uTime:ht.uTime,uI:{value:0},uApex:{value:new w},uAxis:{value:new w(0,-1,0)},uLen:{value:1},uTan:{value:this.tan},uWaterY:{value:0}},vertexShader:Gy,fragmentShader:Wy,transparent:!0,blending:un,depthWrite:!1,side:_i});let G=new pe(.02,1,1,32,1,!1);G.translate(0,-.5,0),this.beam=new gt(G,this.beamMat),this.beam.frustumCulled=!1,this.beam.renderOrder=18,this.group.add(this.beam);let K=new Fe({color:9279131,roughness:.55,metalness:.4,emissive:1843236});this.ringMesh=new ae;let O=new gt(new pn(.43,.105,14,36),n);this.ringMesh.add(O);for(let P=0;P<4;P++){let F=new gt(new pn(.43,.109,12,5,.34),i);F.rotation.z=P*Math.PI/2+.6,this.ringMesh.add(F)}for(let P=0;P<3;P++){let F=P*2.094,z=new gt(new pe(.008,.008,1,4),K),U=new w(Math.cos(F)*.43,Math.sin(F)*.43,-.08),N=new w(0,0,-.5);z.position.copy(U).add(N).multiplyScalar(.5),z.scale.y=U.distanceTo(N),z.quaternion.setFromUnitVectors(new w(0,1,0),N.clone().sub(U).normalize()),this.ringMesh.add(z)}{let P=new gt(new fn(.035,.09,3,8),new Fe({color:12165690,roughness:.45,metalness:.5}));P.rotation.x=Math.PI/2,P.position.set(0,0,-.56),this.ringMesh.add(P);let F=new gt(new pn(.035,.009,6,12),K);F.position.set(0,0,-.49),F.rotation.y=Math.PI/2,this.ringMesh.add(F);let z=new gt(new pn(.43,.118,6,40),new Fe({color:1777185,roughness:.9}));z.scale.set(1,1,.16),z.position.z=-.085,this.ringMesh.add(z)}this.strobeR=new gt(new Yi(.035,8,6),new Ne({color:new kt(6,6,6.5)})),this.strobeR.position.set(.43,0,-.13),this.ringMesh.add(this.strobeR),this.ringMesh.traverse(P=>{P.isMesh&&P.layers.enable(1)}),this.group.add(this.ringMesh),this.rope=[],this.ropeGroup=new ae,this.group.add(this.ropeGroup);for(let P=0;P<zn;P++)this.rope.push({p:new w,q:new w});{let P=(zn-1)*5+1,F=7,z=F+1;this.ropeRings=P,this.ropeRad=F;let U=new Float32Array(P*z*3),N=new Float32Array(P*z*3),k=new Float32Array(P*z*2),W=[];for(let $=0;$<P;$++)for(let Z=0;Z<z;Z++)k[($*z+Z)*2]=Z/F,k[($*z+Z)*2+1]=$*.55;for(let $=0;$<P-1;$++)for(let Z=0;Z<F;Z++){let it=$*z+Z,pt=it+1,rt=it+z,Tt=rt+1;W.push(it,rt,pt,pt,rt,Tt)}let j=new oe;j.setAttribute("position",new Nt(U,3).setUsage(mi)),j.setAttribute("normal",new Nt(N,3).setUsage(mi)),j.setAttribute("uv",new Nt(k,2)),j.setIndex(W);let V=document.createElement("canvas");V.width=32,V.height=32;let B=V.getContext("2d");B.fillStyle="#b9b29a",B.fillRect(0,0,32,32),B.strokeStyle="#5f5a4c",B.lineWidth=3;for(let $=-32;$<64;$+=11)B.beginPath(),B.moveTo($,0),B.lineTo($+32,32),B.stroke();let X=new Fi(V);X.wrapS=X.wrapT=ii,X.colorSpace=fe,this.ropeMesh=new gt(j,new Fe({map:X,roughness:.85,metalness:0,emissive:1381391})),this.ropeMesh.frustumCulled=!1,this.ropeGroup.add(this.ropeMesh),this.ropeCurve=new Fr(this.rope.map(()=>new w),!1,"centripetal"),this._rp=new w,this._rt=new w,this._rn=new w(1,0,0),this._rb=new w,this._rq=new w}this.ropeLen=20,this._top=new w,this.station=new w,this.holdNeed=2.6,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.liftBase=0,this.ringSpin=0,this._qr=new wt,this._er=new ni,this.lineDir=new w(0,1,0),this.hoistAt=new w(0,-1.2,0),this.lampAt=new w(0,-1.3,0)}_local(t,e){let i=this.heli.rotation.y,n=Math.cos(i),s=Math.sin(i);return e.set(this.pos.x+t.x*n+t.z*s,this.pos.y+t.y,this.pos.z-t.x*s+t.z*n)}setModel(t){let e=this.heli;for(let f of e.children)f.visible=!1;let i=t.scene;i.name="md902";let n=f=>i.getObjectByName(f),s=n("body"),a=n("glass"),o=n("hub"),h=n("blades");if(!s||!o||!h)throw new Error("helicopter model: parts missing");s.material.envMapIntensity=.6,s.material.color.setScalar(1.25),a&&(a.material.envMapIntensity=1,a.material.vertexColors=!1,a.material.color.setRGB(.012,.016,.02)),this.spinHub=new ae,this.spinBlades=new ae,this.spinHub.add(o),this.spinBlades.add(h),h.material=h.material.clone(),h.material.transparent=!0,h.material.opacity=.42,h.material.depthWrite=!1,h.renderOrder=2,e.add(i,this.spinHub,this.spinBlades);let c=new Fe({color:1316892,roughness:.5,metalness:.4}),l=f=>(e.add(f),f);{let f=document.createElement("canvas");f.width=f.height=256;let d=f.getContext("2d");d.translate(128,128);let m=d.createRadialGradient(0,0,8,0,0,126);m.addColorStop(0,"rgba(30,35,40,0.10)"),m.addColorStop(.8,"rgba(30,35,40,0.20)"),m.addColorStop(.97,"rgba(52,58,66,0.30)"),m.addColorStop(1,"rgba(30,35,40,0)"),d.fillStyle=m,d.beginPath(),d.arc(0,0,126,0,6.283),d.fill();for(let g=0;g<5;g++){d.save(),d.rotate(g*6.283/5);let p=d.createLinearGradient(0,-16,0,16);p.addColorStop(0,"rgba(20,24,28,0)"),p.addColorStop(.5,"rgba(20,24,28,0.42)"),p.addColorStop(1,"rgba(20,24,28,0)"),d.fillStyle=p,d.beginPath(),d.moveTo(6,0),d.lineTo(124,-15),d.lineTo(124,15),d.closePath(),d.fill(),d.restore()}let v=new Fi(f);v.colorSpace=He,this.rotor=l(new gt(new Ks(5.16,48),new Ne({map:v,transparent:!0,side:ke,depthWrite:!1}))),this.rotor.rotation.x=-Math.PI/2,this.rotor.position.set(0,1.74,0),this.rotor.renderOrder=3,this.rotor.material.color.setScalar(.2)}let u=(f,d,m,v,g,p,y=.13)=>{let b=new gt(new Yi(y,8,6),new Ne({color:new kt(f,d,m)}));return b.position.set(v,g,p),l(b)};u(1.9,.09,.07,1.45,.42,-4.75,.08),u(.08,1.8,.3,-1.44,.42,-4.82,.08),this.strobe=u(5,5,5.6,.03,.5,-6.2,.12),this.beacon=u(6,.25,.2,0,-1.09,-.55,.1),this.lampAt.set(0,-1.16,1.28),this.lampHead=u(5,5.8,7,0,-1.16,1.28,.15);{l(new gt(new pe(.19,.15,.2,14),c)).position.set(0,-1.07,1.28);let d=l(new gt(new pn(.165,.028,8,18),c));d.rotation.x=Math.PI/2,d.position.set(0,-1.17,1.28)}{let f=new w(.74,.86,.22),d=new w(1.47,.97,.22),m=l(new gt(new pe(.045,.055,f.distanceTo(d),8),c));m.position.copy(f).add(d).multiplyScalar(.5),m.quaternion.setFromUnitVectors(new w(0,1,0),d.clone().sub(f).normalize());let v=l(new gt(new pe(.028,.028,.62,6),c)),g=new w(.8,.52,.22),p=new w(1.22,.92,.22);v.scale.y=g.distanceTo(p)/.62,v.position.copy(g).add(p).multiplyScalar(.5),v.quaternion.setFromUnitVectors(new w(0,1,0),p.clone().sub(g).normalize());let y=l(new gt(new pe(.12,.12,.26,10),c));y.rotation.x=Math.PI/2,y.position.set(1.47,.93,.22),l(new gt(new Me(.12,.16,.14),new Fe({color:13127708,roughness:.5,metalness:.1}))).position.set(1.47,.74,.22),this.hoistAt.set(1.47,.66,.22);let _=new Fe({color:8008723,roughness:.8}),A=new Fe({color:13225166,roughness:.4}),x=l(new gt(new fn(.15,.34,3,8),_));x.position.set(.7,-.22,.42),x.rotation.z=-.22,l(new gt(new Yi(.125,10,8),A)).position.set(.78,.13,.42);for(let M of[.33,.51]){let S=l(new gt(new fn(.065,.36,3,8),_));S.position.set(.88,-.8,M),S.rotation.z=.1,l(new gt(new Me(.11,.09,.22),c)).position.set(.9,-1.03,M+.04)}let T=l(new gt(new fn(.05,.42,3,6),_));T.position.set(.95,.1,.34),T.rotation.z=-1.05}this.model=i}reset(t=240){this.state="none",this.group.visible=!1,this.rescued=!1,this.hold=0,this.arriveAt=t,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,ht.uSpotP.value.y=0,ht.uWash.value.w=0}_dropRope(){let t=this._local(this.hoistAt,this._top);this.ropeLen=Math.max(8,t.y-this.waves.heightFast(t.x,t.z))+2.5;for(let e=0;e<zn;e++){let i=this.rope[e];i.p.set(t.x,t.y-this.ropeLen*.92*e/(zn-1),t.z),i.q.copy(i.p)}this.ring.copy(this.rope[zn-1].p)}_rope(t,e,i,n){let s=this.waves,a=this._s,o=this.rope,h=zn,c=this._local(this.hoistAt,this._top);if(n)this.liftT>1&&(this.ropeLen=Math.max(4.2,this.ropeLen-1.7*t));else{let f=Math.max(6,c.y-s.heightFast(o[h-1].p.x,o[h-1].p.z))+2.2;this.ropeLen+=(f-this.ropeLen)*Math.min(1,t*1.5)}let l=this.ropeLen/(h-1),u=Math.min(t,1/30)*.5;for(let f=0;f<2;f++){o[0].p.copy(c),o[0].q.copy(c);for(let d=1;d<h;d++){let m=o[d],v=d===h-1,g=m.p.x-m.q.x,p=m.p.y-m.q.y,y=m.p.z-m.q.z;m.q.copy(m.p);let b=e.x*.06,_=-9.81,A=e.z*.06,x=.994,E=m.p.x-this.pos.x,T=m.p.z-this.pos.z,M=Math.hypot(E,T)+.001,S=Math.max(0,1-M/16)*(v?5:2);if(b+=E/M*S,A+=T/M*S,v&&!n){s.sample(m.p.x,m.p.z,a);let D=a.h+.06-m.p.y;if(D>0){_+=Math.min(70,D*95);let G=Math.min(1,u*6);g+=(a.vx*u-g)*G,p+=(a.vy*u-p)*G,y+=(a.vz*u-y)*G,x=.975}this.gripping&&(b+=(i.x-m.p.x)*7,A+=(i.z-m.p.z)*7)}m.p.x+=g*x+b*u*u,m.p.y+=p*x+_*u*u,m.p.z+=y*x+A*u*u}for(let d=0;d<8;d++)for(let m=0;m<h-1;m++){let v=o[m].p,g=o[m+1].p,p=g.x-v.x,y=g.y-v.y,b=g.z-v.z,_=Math.hypot(p,y,b);if(_<=l)continue;let A=(_-l)/_,x=m===0?0:m+1===h-1?n?.88:.62:.5,E=1-x;v.x+=p*A*x,v.y+=y*A*x,v.z+=b*A*x,g.x-=p*A*E,g.y-=y*A*E,g.z-=b*A*E}}this.ring.copy(o[h-1].p),this._d.copy(o[h-4].p).sub(o[h-1].p),this._d.lengthSq()>1e-4&&this._d.y>0&&(this._d.normalize(),this.lineDir.lerp(this._d,Math.min(1,t*3)).normalize())}dispatch(t,e=Math.random()*6.283,i=60){this.state="inbound",this.rescued=!1,this.hold=0,this.hoverTime=0,this.group.visible=!0,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.ring.set(t.x+Math.cos(e)*i,0,t.z+Math.sin(e)*i),this.pos.set(this.ring.x+Math.cos(e)*520,70,this.ring.z+Math.sin(e)*520),this.vel.set(0,0,0)}update(t,e,i,n,s,a,o,h,c){if(this.time+=t,this.state==="none")if(o&&s&&n>=this.arriveAt)this.dispatch(e,Math.atan2(i.z,i.x)+(Math.random()-.5)*2.4,55+Math.random()*30);else{ht.uSpotP.value.y=0,ht.uWash.value.w=0;return}let l=this.waves,u=this._s,f=this.state==="lift";if(this.state==="inbound")this.station.set(this.ring.x,0,this.ring.z);else if(this.state==="hover"){let U=e.x-this.station.x,N=e.z-this.station.z,k=Math.hypot(U,N);if(k>1.5){let W=Math.min(2.2,k*.5)*t/k;this.station.x+=U*W,this.station.z+=N*W}}let d=l.heightFast(this.station.x,this.station.z)+20+Math.sin(this.time*.7)*.8,m=this._v.set(this.station.x+Math.sin(this.time*.43)*2.6+Math.sin(this.time*1.1)*.9,d,this.station.z+Math.cos(this.time*.37)*2.6);this.state==="leaving"&&m.set(this.pos.x+i.x*40,this.pos.y+30,this.pos.z+i.z*40),f&&(this.liftT+=t,this.liftT>6.5?m.set(this.pos.x-i.x*3,this.liftBase+26+(this.liftT-6.5)*5,this.pos.z-i.z*3):m.set(this.pos.x,this.liftBase+20+Math.max(0,this.liftT-3)*1.5,this.pos.z));let v=m.sub(this.pos),g=v.length(),p=this.state==="inbound"?46:this.state==="leaving"?40:f?this.liftT>6.5?14:3:6,y=v.multiplyScalar(Math.min(p,g*.9)/Math.max(g,.001));if(this.vel.lerp(y,1-Math.exp(-t*(f?.7:1.4))),this.pos.addScaledVector(this.vel,t),this.state==="inbound"&&g<6&&(this.state="hover",this.hoverTime=0,this._dropRope()),this.state==="hover"||f?this._rope(t,i,e,f):(l.sample(this.ring.x,this.ring.z,u),this.ring.y=u.h),this.reach=!1,this.state==="hover"){this.hoverTime+=t;let U=Math.hypot(e.x-this.ring.x,e.y+.35-this.ring.y,e.z-this.ring.z);this.reach=U<1.5&&s,this.gripping&&(U>2.2||!c||!s)&&(this.gripping=!1,this.hold>.5&&(this.slipped=!0)),this.reach&&c&&(this.gripping=!0),this.hold=this.gripping?this.hold+t:Math.max(0,this.hold-t*2.5),this.hold>=this.holdNeed&&(this.rescued=!0,this.state="lift",this.liftT=0,this.liftBase=this.ring.y);let N=this.reach||this.gripping;if(this.hoverTime>150&&!N&&!this.rescued&&(this.state="leaving",this.leaveT=0),a)for(this.washAcc=(this.washAcc||0)+t*150;this.washAcc>=1;){this.washAcc-=1;let k=Math.random()*6.283,W=4+Math.random()*13,j=7+Math.random()*6,V=this.pos.x+Math.cos(k)*W,B=this.pos.z+Math.sin(k)*W,X=l.heightFast(V,B),$=Math.random()<.28;a.emit(V,X+.08+Math.random()*.2,B,Math.cos(k)*j,.5+Math.random()*1.4,Math.sin(k)*j,$?.7+Math.random()*.7:.5+Math.random()*.5,$?.16+Math.random()*.22:.012+Math.random()*.03,$?2:0,$?.7:0,$?.16:.9,$?1.4:1)}}if(this.state==="leaving"&&(this.leaveT+=t,this.leaveT>14)){this.state="none",this.group.visible=!1,this.arriveAt=n+180,ht.uSpotP.value.y=0,ht.uWash.value.w=0;return}let b=this.heli;b.position.copy(this.pos);let _=Math.atan2(this.ring.x-this.pos.x+this.vel.x*3,this.ring.z-this.pos.z+this.vel.z*3),A=Math.hypot(this.vel.x,this.vel.z);b.rotation.set(Math.min(.3,A*.008),this.state==="hover"?b.rotation.y+Math.sin(this.time*.25)*.004:_,Math.sin(this.time*1.3)*.03,"YXZ"),this.rotor.rotation.z+=t*(2.6+1.4*Math.sin(this.time*2.3)),this.tail.rotation.z+=t*5.2,this.bladeRoots&&(this.bladeRoots.rotation.y-=t*39),this.spinHub&&(this.spinHub.rotation.y-=t*39,this.spinBlades.rotation.y-=.6545),this.rotor.material.opacity=.85+.15*Math.sin(this.time*31),this.strobe.visible=this.time%1.1<.07,this.beacon.visible=(this.time+.5)%1.3<.16;let x=this.state==="hover"?Math.min(1,this.hoverTime/3):this.state==="lift"?1:0;this.aim.set(this.ring.x+(1-x)*Math.sin(this.time*.8)*26,this.ring.y,this.ring.z+(1-x)*Math.cos(this.time*.6)*26);let E=this.state==="leaving"?Math.max(0,1-this.leaveT/3):1,T=this._local(this.lampAt,this._from),M=T.distanceTo(this.aim),S=this._d.copy(this.aim).sub(T).normalize(),D=M,G=this.aim.y;if(S.y<-.04)for(let U=0;U<4;U++)G=this.waves.heightFast(T.x+S.x*D,T.z+S.z*D),D=Math.max(2,(G-T.y)/S.y);else D=320;let K=Math.min(D*1.15+4,340),O=this.tan*1.3*K;this.beamMat.uniforms.uWaterY.value=G-.6,this.beam.position.copy(T),this.beam.quaternion.setFromUnitVectors(this._down,S),this.beam.scale.set(O,K,O);let P=this.beamMat.uniforms;if(P.uApex.value.copy(T),P.uAxis.value.copy(S),P.uLen.value=K,P.uI.value=.17*E,h){let U=this._v.copy(h).sub(T),N=U.dot(S),k=Math.sqrt(Math.max(0,U.lengthSq()-N*N)),j=N>-.5&&N<K+.5&&k<N*this.tan*1.3+.6?je:_i;this.beamMat.side!==j&&(this.beamMat.side=j,this.beamMat.needsUpdate=!0)}this.spotLight.position.copy(T),this.spotLight.target.position.copy(this.aim),this.spotLight.angle=Math.atan(this.tan)*1.35,this.spotLight.penumbra=.85,this.spotLight.intensity=5*E,ht.uSpotPos.value.copy(T),ht.uSpotDir.value.copy(S),ht.uSpotP.value.set(Math.cos(Math.atan(this.tan)),1.7*E,55,0);let F=this.pos.y-l.heightFast(this.pos.x,this.pos.z);ht.uWash.value.set(this.pos.x,this.pos.z,24,E*Math.max(0,Math.min(1,(60-F)/30)));let z=this.state==="hover"||this.state==="lift";if(this.ringMesh.visible=z,this.ropeGroup.visible=z,z){this.ringMesh.position.copy(this.ring),this.state==="lift"?(this.ringSpin+=t*.35,this.ringMesh.quaternion.setFromUnitVectors(this._down.clone().negate(),this.lineDir).multiply(this._qr.setFromEuler(this._er.set(Math.PI/2,0,this.ringSpin,"YXZ")))):(l.sample(this.ring.x,this.ring.z,u),this.ringMesh.rotation.set(Math.PI/2+u.nz*.6,0,-u.nx*.6)),this.strobeR.visible=this.time%.9<.08;let U=this.rope,N=this.ropeCurve.points;for(let Tt=0;Tt<zn;Tt++)N[Tt].copy(U[Tt].p);N[zn-1].y+=.45;let k=this.ropeRings,W=this.ropeRad,j=W+1,V=.02,B=this.ropeMesh.geometry.attributes.position,X=this.ropeMesh.geometry.attributes.normal,$=this._rp,Z=this._rt,it=this._rn,pt=this._rb,rt=this._rq;for(let Tt=0;Tt<k;Tt++){let H=Tt/(k-1);this.ropeCurve.getPoint(H,$),this.ropeCurve.getPoint(Math.min(1,H+.004),rt),Z.copy(rt),this.ropeCurve.getPoint(Math.max(0,H-.004),rt),Z.sub(rt).normalize(),it.addScaledVector(Z,-it.dot(Z)),it.lengthSq()<1e-6&&it.set(1,0,0).addScaledVector(Z,-Z.x),it.normalize(),pt.crossVectors(Z,it);for(let dt=0;dt<j;dt++){let at=dt/W*6.2832,ft=Math.cos(at),st=Math.sin(at),At=(Tt*j+dt)*3,_t=it.x*ft+pt.x*st,L=it.y*ft+pt.y*st,C=it.z*ft+pt.z*st;B.array[At]=$.x+_t*V,B.array[At+1]=$.y+L*V,B.array[At+2]=$.z+C*V,X.array[At]=_t,X.array[At+1]=L,X.array[At+2]=C}}B.needsUpdate=!0,X.needsUpdate=!0}}};var qy=[[R.handL,0,-.09,.012,"hand"],[R.handR,0,-.09,.012,"hand"],[R.foreArmL,0,-.13,0,"arm"],[R.foreArmR,0,-.13,0,"arm"],[R.footL,0,-.04,.12,"foot"],[R.footR,0,-.04,.12,"foot"]],qo=class{constructor(t,e,i){this.waves=t,this.ch=e,this.body=i,this.tips=qy.map(([n,s,a,o,h])=>({bone:n,off:new w(s,a,o),kind:h,p:new w,prev:new w,has:!1,was:!0,wet:0,cool:0})),this._s=bi(),this._v=new w,this._hd=new w,this.activity=0,this.onSlap=null,this.bowAcc=0,this.churnAcc=0}reset(){for(let t of this.tips)t.has=!1,t.wet=0;this.activity=0}update(t,e,i,n=!0){if(t<=0)return;let s=this.waves,a=this._s,o=this._v,h=0;e.near=!0;for(let l of this.tips){if(l.p.copy(l.off).applyMatrix4(this.ch.bones[l.bone].matrixWorld),!l.has){l.prev.copy(l.p),l.has=!0,s.sample(l.p.x,l.p.z,a),l.was=l.p.y<a.h;continue}if(o.copy(l.p).sub(l.prev).multiplyScalar(1/t),l.prev.copy(l.p),l.cool-=t,!n||o.lengthSq()>900){l.wet=0;continue}s.sample(l.p.x,l.p.z,a);let u=l.p.y<a.h,f=o.x-a.vx,d=o.y-a.vy,m=o.z-a.vz,v=Math.hypot(f,d,m),g=Math.hypot(f,m)+1e-4,p=l.kind==="hand"?1:l.kind==="foot"?.6:.45;if(u!==l.was){if(u&&v>(l.kind==="foot"?3:2.1)&&l.cool<=0&&l.kind!=="arm"){let y=Math.min(1.6,(.14+v*.22)*p)*(.6+.4*Math.random());(l.kind==="hand"||Math.random()<.6)&&e.slap(l.p.x,a.h,l.p.z,y,f/g*Math.min(1,g/2.5),m/g*Math.min(1,g/2.5),a.vx+f*.55,a.vy,a.vz+m*.55,l.kind==="hand"?1:0),l.cool=l.kind==="hand"?.42:.3,h+=y,this.onSlap&&this.onSlap(v,l.p,l.kind)}else if(!u&&v>2.5&&l.kind==="hand"){let y=Math.min(1.3,(.08+v*.18)*p);e.fling(l.p.x,Math.max(l.p.y,a.h+.02),l.p.z,o.x,o.y,o.z,y),l.wet=.5,h+=y*.6}}if(!u&&l.wet>0){l.wet-=t;let y=v>2.5&&Math.random()<t*35*l.wet?1:0;for(let b=0;b<y;b++)e.emit(l.p.x+(Math.random()-.5)*.06,l.p.y+(Math.random()-.5)*.06,l.p.z+(Math.random()-.5)*.06,o.x*(.35+.5*Math.random()),o.y*.6+.5*Math.random(),o.z*(.35+.5*Math.random()),.35+Math.random()*.5,.01+Math.random()*.022,0,0,1)}if(l.kind==="foot"&&Math.abs(l.p.y-a.h)<.12&&v>2){for(this.churnAcc+=t*Math.min(42,v*8);this.churnAcc>=1;){this.churnAcc-=1;let y=Math.random()*6.283,b=Math.random()*.9;if(e.emit(l.p.x+Math.cos(y)*.05,a.h+.02,l.p.z+Math.sin(y)*.05,a.vx+Math.cos(y)*b+f*.25,a.vy+.9+2.1*Math.random()*Math.min(1.4,v/3),a.vz+Math.sin(y)*b+m*.25,.3+Math.random()*.4,.009+Math.pow(Math.random(),2)*.022,0,0,1),Math.random()<.08){e.lean=(Math.random()-.5)*.3;let _=.22+Math.random()*.16;e.emit(l.p.x,a.h-.02,l.p.z,a.vx,a.vy,a.vz,.62*Math.sqrt(_/.45),_,3,0,.75,0),e.lean=0}}h+=.25*t*10}l.was=u}let c=this.body;if(n&&c.subFrac>.2&&c.subFrac<.98&&c.relSpeed>1.5&&c.mouthDepth<.4){let l=Math.min(6,c.relSpeed),u=Math.hypot(c.relFlow.x,c.relFlow.z)+1e-4,f=-c.relFlow.x/u,d=-c.relFlow.z/u,m=this._hd.setFromMatrixPosition(this.ch.bones[R.head].matrixWorld);for(this.bowAcc+=t*Math.min(40,(l-1.3)*16);this.bowAcc>=1;){this.bowAcc-=1;let v=Math.random()<.5?-1:1,g=Math.random(),p,y,b,_,A;if(g<.5){let E=(Math.random()-.5)*.5,T=.12+Math.random()*.45;p=m.x+f*T-d*E,y=m.z+d*T+f*E,b=l*.7+.4+Math.random()*1.4,_=(Math.random()-.5)*1.2,A=.6+Math.random()*1.6}else{let E=(.22+Math.random()*.2)*v,T=-.5+Math.random()*.9;p=c.pos.x+f*T-d*E,y=c.pos.z+d*T+f*E,b=l*.3,_=v*(.4+Math.random()*1),A=.5+Math.random()*1.3}let x=!1;e.emit(p,c.surfaceH+.03,y,c.surface.vx+f*b-d*_,c.surface.vy+A*Math.min(1.4,.6+l*.3),c.surface.vz+d*b+f*_,x?.25+Math.random()*.3:.4+Math.random()*.55,x?.04+Math.random()*.05:Math.random()<.3?.028+Math.random()*.03:.011+Math.pow(Math.random(),2)*.026,x?1:0,x?.4:0,x?.32:1)}h+=.12+.1*l}e.near=!1,this.activity+=(Math.min(1,h)-this.activity)*(1-Math.exp(-t*(h>this.activity?12:2.5)))}};var wf=1025,Xy=1.22,wl=9.81,Ef=.35,we={tubeY:.37,tubeR:.21,halfW:.72,floorY:.325,bowZ:1.95,sternZ:-1.9,transomZ:-1.28,bowStart:1};function Zi(r){if(r<=we.bowStart)return we.halfW;let t=Math.min(1,(r-we.bowStart)/(we.bowZ-we.bowStart));return we.halfW*Math.sqrt(Math.max(0,1-t*t))}function qr(r){return we.tubeY+.2*Re(.9,2,r)}function zi(r,t,e,i,n,s,a,o,h){return{o:new w(r,t,e),r:new w,vol:i/1e3,half:n,cx:s,cy:a,cz:o,air:h,sub:0,was:0,h:0,hOk:!1}}var Xo=class{constructor(t){this.waves=t,this.group=new ae,this.group.name="boat",this.group.visible=!1,this.holder=new ae,this.group.add(this.holder),this.active=!1,this.loaded=!1,this.com=new w(0,.3,-.28),this.baseMass=168,this.mass=this.baseMass,this.inertia=new w(250,300,78),this.pos=new w,this.vel=new w,this.quat=new wt,this.angVel=new w,this.prevPos=new w,this.prevQuat=new wt,this.wind=new w,this.rider=0,this.swamp=0,this.upY=1,this.sitUp=1,this.capsized=!1,this.flipArmed=!1,this.flipping=0,this.settle=0,this.flipAxis=new w,this.flipDir=new w,this.keepYaw=null,this.slam=0,this.slamPos=new w,this.aer=0,this.brkH=0,this.subFrac=0,this.relFlow=new w,this.relSpeed=0,this.extF=new w,this.extT=new w,this.tow=new w;let e=we.halfW,i=we.tubeY;this.points=[zi(e,i,-1.65,105,.21,.13,.3,.075,.05),zi(-e,i,-1.65,105,.21,.13,.3,.075,.05),zi(e,i,-.7,118,.21,.13,.34,.06,.055),zi(-e,i,-.7,118,.21,.13,.34,.06,.055),zi(e,i,.3,118,.21,.13,.34,.06,.055),zi(-e,i,.3,118,.21,.13,.34,.06,.055),zi(.69,i+.03,1.2,105,.21,.12,.3,.075,.055),zi(-.69,i+.03,1.2,105,.21,.12,.3,.075,.055),zi(0,.52,1.8,95,.22,.1,.26,.11,.07),zi(0,.2,-.7,85,.13,.1,.55,.07,0),zi(0,.21,.62,85,.13,.1,.55,.07,0),zi(0,.12,-1.5,9,.16,.1,.03,.05,.03)];for(let n of this.points)n.o.sub(this.com);this.totalVol=this.points.reduce((n,s)=>n+s.vol,0),this._s=bi(),this._w={vx:0,vy:0,vz:0,ax:0,ay:0,az:0},this._p=new w,this._vp=new w,this._f=new w,this._F=new w,this._T=new w,this._X=new w,this._Y=new w,this._Z=new w,this._t=new w,this._t2=new w,this._qi=new wt,this._dq=new wt,this._m=new Lt,this.inv=new Lt,this.matrix=new Lt}setModel(t){let e=null;if(t.scene.traverse(n=>{n.isMesh&&!e&&(e=n)}),!e)throw new Error("boat model has no mesh");this.mesh=e;let i=e.material;i.envMapIntensity=.6,i.roughness=.95,i.color.setRGB(1.12,1.18,1.28),i.aoMapIntensity=.8,i.normalScale.set(1,1),i.needsUpdate=!0,this.material=i,t.scene.traverse(n=>{n.layers.enable(1),n.frustumCulled=!1}),t.scene.position.copy(this.com).multiplyScalar(-1),this.holder.add(t.scene),this.loaded=!0}reset(t,e,i){let n=this.waves.sample(t,e,this._s);this.quat.setFromAxisAngle(this._t.set(0,1,0),i),this.pos.set(t,n.h+.14+this.com.y-.13,e),this.vel.set(n.vx,n.vy,n.vz),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat),this.swamp=0,this.flipping=0,this.settle=0,this.capsized=!1,this.upY=1,this.sitUp=1,this.slam=0,this.extF.set(0,0,0),this.extT.set(0,0,0),this.tow.set(0,0,0),this.hcOk=!1,this.depth=0;for(let s of this.points)s.was=0,s.hOk=!1;this.active=!0,this.group.visible=this.loaded,this._updateMatrices(this.pos,this.quat)}hide(){this.active=!1,this.group.visible=!1}_updateMatrices(t,e){this._t.copy(this.com).multiplyScalar(-1).applyQuaternion(e).add(t),this.matrix.compose(this._t,e,this._t2.set(1,1,1)),this.inv.copy(this.matrix).invert()}pushAt(t,e,i,n){this.extF.x+=e,this.extF.y+=i,this.extF.z+=n;let s=this._t.copy(t).sub(this.pos);this.extT.x+=s.y*n-s.z*i,this.extT.y+=s.z*e-s.x*n,this.extT.z+=s.x*i-s.y*e}velocityAt(t,e){return e.copy(t).sub(this.pos).cross(this.angVel).multiplyScalar(-1).add(this.vel)}step(t){if(!this.active)return;let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._X.set(1,0,0).applyQuaternion(this.quat),n=this._Y.set(0,1,0).applyQuaternion(this.quat),s=this._Z.set(0,0,1).applyQuaternion(this.quat);this.upY=n.y;let a=this._F.set(0,0,0),o=this._T.set(0,0,0);this.mass=this.baseMass+this.rider+260*this.swamp;let h=0,c=0,l=0,u=0,f=0,d=0,m=0,v=0,g=0,p=0,y=0,b=this.dbg||(this.dbg={});b.buoy=0,b.dragY=0,b.bay=0,b.bvy=0,b.plunge=0,b.wvy=0,b.h=0,b.ay=0;let _=1-.32*this.swamp;for(let z=0;z<this.points.length;z++){let U=this.points[z],N=U.r.copy(U.o).applyQuaternion(this.quat),k=this._p.copy(this.pos).add(N),W=this._vp.copy(this.angVel).cross(N).add(this.vel),j=e.sample(k.x,k.z,this._s),V=j.h-k.y,B=Math.max(0,Math.min(1,(V+U.half)/(2*U.half))),X=U.hOk?Math.max(-9,Math.min(4.6,(j.h-U.h)/t)):j.vy;if(U.h=j.h,U.hOk=!0,B>.5!=U.was>.5){let Z=Math.abs(W.y-j.vy);Z>f&&(f=Z,this.slamPos.set(k.x,j.h,k.z))}U.was=B,U.sub=B;let $=this._f.set(0,0,0);if(d+=j.nx,m+=j.ny,v+=j.nz,j.brkH>l&&(l=j.brkH),j.lip>u&&(u=j.lip),B>0){let Z=Math.max(0,V),it=j.aer*Math.exp(-Z/3.5);it>c&&(c=it);let pt=wf*(1-.6*it),rt=e.bodyFlow(j.x0,j.z0,Z,this._w),H=.25+.75*Math.exp(-Z/(2.5+.35*Math.max(0,j.brkH)));rt.vx+=j.bvx*H,rt.vy+=j.bvy,rt.vz+=j.bvz*H,j.plunge>.01&&(rt.vy-=.25*j.plunge*Math.exp(-Z/3)),e.breakerFlow(k.x,k.y,k.z,j.h,rt),B>.55&&X>rt.vy&&(rt.vy+=(X-rt.vy)*bt((B-.55)/.3)*Math.exp(-Z/1.5));let dt=pt*U.vol*B*_;$.set(dt*(1+Ef)*rt.ax,dt*Math.max(.3*wl,wl+rt.ay+j.bay),dt*(1+Ef)*rt.az),b.buoy+=$.y,b.bay=Math.max(b.bay,Math.abs(j.bay))*Math.sign(j.bay||1),b.bvy=j.bvy,b.plunge=Math.max(b.plunge,j.plunge),b.wvy=rt.vy,b.h=j.h,b.ay=rt.ay;let at=rt.vx-W.x,ft=rt.vy-W.y,st=rt.vz-W.z;g+=at*B,p+=st*B,y+=B;let At=at*i.x+ft*i.y+st*i.z,_t=at*n.x+ft*n.y+st*n.z,L=at*s.x+ft*s.y+st*s.z,C=.5*pt*B,Q=(C*U.cx*Math.abs(At)+60*U.cx*B)*At,lt=(C*U.cy*Math.abs(_t)+150*U.cy*B)*_t,mt=(C*U.cz*Math.abs(L)+60*U.cz*B)*L;$.x+=i.x*Q+n.x*lt+s.x*mt,$.y+=i.y*Q+n.y*lt+s.y*mt,$.z+=i.z*Q+n.z*lt+s.z*mt,b.dragY+=i.y*Q+n.y*lt+s.y*mt,h+=U.vol*B}if(B<1&&U.air>0){let Z=this.wind.x-W.x,it=-W.y,pt=this.wind.z-W.z,rt=.5*Xy*U.air*(1-B)*(1-.55*this.swamp)*Math.hypot(Z,it,pt);$.x+=Z*rt,$.y+=it*rt,$.z+=pt*rt}a.add($),o.x+=N.y*$.z-N.z*$.y,o.y+=N.z*$.x-N.x*$.z,o.z+=N.x*$.y-N.y*$.x}this.subFrac=h/this.totalVol,this.aer=c,this.brkH=l,this.slam=f,y>0?this.relFlow.set(g/y,0,p/y):this.relFlow.set(0,0,0),this.relSpeed+=(this.relFlow.length()-this.relSpeed)*(1-Math.exp(-t*6));{let z=Math.hypot(d,m,v)||1;this.sitUp=(n.x*d+n.y*m+n.z*v)/z}let A=Math.max(bt((c-.35)*2)*bt(l/4),bt((.35-Math.abs(n.y))*3),bt((this.subFrac-.86)*6));A>0?this.swamp+=(1-this.swamp)*(1-Math.exp(-t*1.6*A)):this.swamp>.5&&(this.swamp+=(.5-this.swamp)*(1-Math.exp(-t*.04)));let x=1+.9*Math.min(1,this.subFrac*2.5)+(this.rider+260*this.swamp)/this.baseMass*.5;if(this.flipArmed&&this.flipping<=0&&n.y>.3)for(let z of e.breakers){if(!z.active||z.height<4.5)continue;let U=this.pos.x-z.ox,N=this.pos.z-z.oz,k=U*z.dx+N*z.dz-z.s,W=-U*z.dz+N*z.dx,j=Math.exp(-(W*W)/(z.width*z.width));if(k<8&&k>-8&&z.height*j>4.5){this.flipAxis.set(z.dz,0,-z.dx),this.flipDir.set(z.dx,0,z.dz),this.flipping=2.6,this.flipArmed=!1;break}}if(this.flipping>0){this.flipping-=t;let z=this.angVel.dot(this.flipAxis);n.y>-.8?o.addScaledVector(this.flipAxis,(3-z)*2100*x):(this.flipping=0,this.settle=1.4),a.addScaledVector(this.flipDir,this.mass*5*bt((this.flipping-2)/.6))}if(this.settle>0&&(this.settle-=t,o.addScaledVector(this.angVel,-1500*x)),this.flipArmed&&this.rider>0&&this.flipping<=0){let z=Math.hypot(d,m,v)||1,U=(n.y*v-n.z*m)/z,N=(n.z*d-n.x*v)/z,k=(n.x*m-n.y*d)/z,W=this.angVel.dot(n);o.x+=U*5200*x-(this.angVel.x-n.x*W)*1500*x,o.y+=N*5200*x-(this.angVel.y-n.y*W)*1500*x,o.z+=k*5200*x-(this.angVel.z-n.z*W)*1500*x}if(this.keepYaw!==null&&n.y>.5){let z=Math.atan2(s.x,s.z),U=this.keepYaw-z;U=Math.atan2(Math.sin(U),Math.cos(U)),o.y+=Math.max(-260,Math.min(260,U*420-this.angVel.y*300))}this.capsized=n.y<0,a.add(this.extF),o.add(this.extT),this.extF.set(0,0,0),this.extT.set(0,0,0),a.add(this.tow);let E=this.mass+.08*wf*h;a.y-=this.mass*wl,this.vel.addScaledVector(a,t/E);let T=this.vel.length();T>40&&this.vel.multiplyScalar(40/T),this.pos.addScaledVector(this.vel,t);{let z=e.sample(this.pos.x,this.pos.z,this._s),U=this.hcOk?Math.max(-30,Math.min(30,(z.h-this.hc)/t)):z.vy;this.hc=z.h,this.hcOk=!0;let N=this.pos.y-z.h;this.depth=-N,N<-.42?(this.pos.y=z.h-.42,this.vel.y<U&&(this.vel.y=U)):N>.45&&this.vel.y>U&&(this.vel.y+=(U-this.vel.y)*Math.min(1,t*7),N>1.5&&(this.pos.y=z.h+1.5,this.vel.y>U&&(this.vel.y=U)))}let M=this._qi.copy(this.quat).invert(),S=this._t.copy(this.angVel).applyQuaternion(M),D=this._t2.copy(o).applyQuaternion(M),G=this.inertia.x*x,K=this.inertia.y*x,O=this.inertia.z*x;S.x+=(D.x-(O-K)*S.y*S.z)/G*t,S.y+=(D.y-(G-O)*S.z*S.x)/K*t,S.z+=(D.z-(K-G)*S.x*S.y)/O*t,S.multiplyScalar(Math.exp(-(.35+2.2*Math.min(1,this.subFrac*2.5))*t));let P=S.length();P>9&&S.multiplyScalar(9/P),this.angVel.copy(S).applyQuaternion(this.quat);let F=this.angVel.length()*t;F>1e-7&&(this._dq.setFromAxisAngle(this._t.copy(this.angVel).normalize(),F),this.quat.premultiply(this._dq).normalize()),this._updateMatrices(this.pos,this.quat)}sync(t){this.active&&(this.group.position.lerpVectors(this.prevPos,this.pos,t),this.group.quaternion.slerpQuaternions(this.prevQuat,this.quat,t),this.group.updateMatrixWorld(!0))}toWorld(t,e){return e.copy(t).applyMatrix4(this.matrix)}dirToWorld(t,e){return e.copy(t).applyQuaternion(this.quat)}nearestGrip(t,e){let i=this._t.copy(t).applyMatrix4(this.inv),n=0,s=1,a=1e9;for(let f=0;f<=24;f++){let d=-1.75+(we.bowZ-.15+1.75)*f/24,m=Zi(d),v=qr(d);for(let g of[1,-1]){let p=Math.hypot(i.x-g*m,i.y-v,i.z-d);p<a&&(a=p,n=d,s=g)}}let o=Zi(n),h=Zi(n+.05);e.dist=a,e.z=n,e.side=s,e.local=(e.local||new w).set(s*o,qr(n),n),e.point=this.toWorld(e.local,e.point||new w);let c=s*(h-o),l=.05,u=Math.hypot(c,l);return e.tangent=this.dirToWorld(this._t2.set(c/u,0,l/u),e.tangent||new w),e.normal=this.dirToWorld(this._t2.set(s*l/u,0,-s*c/u),e.normal||new w),e}};var jy=`
attribute float aPale;
varying vec3 vW; varying vec3 vN; varying vec3 vL; varying float vPale;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vL = position; vPale = aPale;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Yy=`
precision highp float;
uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashDir; uniform vec3 uFlashColor; uniform float uFogDensity;
uniform sampler2D uSkyEnv; uniform vec4 uFl[4]; uniform vec4 uFlare; uniform vec2 uSea;
varying vec3 vW; varying vec3 vN; varying vec3 vL; varying float vPale;
${po}
float hash(vec2 p) { return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
void main() {
  vec3 N = normalize(vN);
  // paint: black topsides with a red boot below the waterline (it comes out of the sea as her bow lifts), buff
  // masts, a white house; all of it streaked with rust and salt
  float streak = hash(floor(vec2(vL.z * 1.7, 3.0))) * 0.6 + hash(floor(vec2(vL.z * 0.31, vL.x * 0.4))) * 0.4;
  vec3 hull = mix(vec3(0.035, 0.037, 0.042), vec3(0.085, 0.050, 0.035), smoothstep(0.55, 0.95, streak) * 0.7);
  hull = mix(hull, vec3(0.16, 0.035, 0.028), 1.0 - smoothstep(-0.9, -0.5, vL.y));
  hull = mix(hull, vec3(0.085, 0.080, 0.070), smoothstep(6.55, 6.65, vL.y) * step(0.5, N.y));      // deck plating
  vec3 house = vec3(0.50, 0.51, 0.50) * (0.80 + 0.2 * streak);
  vec3 alb = mix(hull, house, vPale);
  // the overcast: most from above, a little from the bright quarter of the sky, least on what faces down
  vec3 col = alb * uAmbient * (0.75 + 1.75 * max(N.y, 0.0) + 0.5 * (1.0 - abs(N.y)));
  // deck floods: pools of light on the plating and the house, until their circuits go
  for (int i = 0; i < 4; i++) {
    vec3 d = uFl[i].xyz - vW; float r2 = dot(d, d);
    col += alb * vec3(0.86, 0.93, 1.0) * uFl[i].w * (0.25 + 0.75 * max(dot(N, d * inversesqrt(r2)), 0.0)) / (1.0 + r2 * 0.012);
  }
  // the flare hanging over her, lightning
  vec3 fd = uFlare.xyz - vW; float fr2 = dot(fd, fd);
  col += alb * vec3(1.0, 0.16, 0.08) * uFlare.w * (0.3 + 0.7 * max(dot(N, fd * inversesqrt(fr2)), 0.0)) / (1.0 + fr2 * 0.00012);
  col += alb * uFlashColor * uFlash * (0.25 + 0.75 * max(dot(N, uFlashDir), 0.0)) * 0.9;
  // the sea working along her side: broken white water climbing the plating and running off it again
  float wl = vW.y - uSea.x;
  float wz = vL.z * 0.21 + uSea.y * 0.35, wf = fract(wz), wi = floor(wz);
  float wn = mix(hash(vec2(wi, 1.0)), hash(vec2(wi + 1.0, 1.0)), wf * wf * (3.0 - 2.0 * wf));
  float wash = smoothstep(-1.6, -0.2, wl) * (1.0 - smoothstep(0.2 + 1.2 * wn, 0.7 + 2.6 * wn, wl)) * (0.22 + 0.33 * wn) * (1.0 - vPale * 0.6) * step(abs(N.y), 0.6);
  col = mix(col, vec3(0.50, 0.56, 0.60) * (uAmbient * 2.0 + uFlashColor * uFlash * 0.6), wash);
  // the rain and spray between: thicker than over open water at eye height, because she is seen through all of it
  vec3 V = vW - cameraPosition; float dist = length(V);
  float fog = 1.0 - exp(-dist * uFogDensity * 1.7);
  vec3 fogCol = textureLod(uSkyEnv, dirToEquirect(normalize(vec3(V.x, 0.05 * dist, V.z))), 4.5).rgb;
  gl_FragColor = vec4(mix(col, fogCol, fog), 1.0);
}`,Ky=`
attribute vec3 aColor; attribute float aSize;
varying vec3 vColor;
uniform float uScale;
void main() {
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = clamp(aSize * uScale / -mv.z, 1.5, 160.0);
  gl_Position = projectionMatrix * mv;
}`,Qy=`
precision highp float;
varying vec3 vColor;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0; float r = dot(q, q);
  if (r > 1.0) discard;
  float core = exp(-r * 9.0), halo = exp(-r * 2.4) * 0.22, rim = (1.0 - r) * (1.0 - r);
  gl_FragColor = vec4(vColor * (core + halo) * rim, 1.0);
}`,jo=class{constructor(t,e=4181){this.waves=t,this.group=new ae,this.group.name="shipwreck",this.group.visible=!1,this.ship=new ae,this.group.add(this.ship),this.pos=new w,this.yaw=0,this.t=0,this.h=0,this.pitch=0,this.active=!1,this.sink=0;let i=this.rnd=Je(e),n=(y,b,_,A,x,E,T=0,M=0)=>{let S=new Me(y,b,_);return T&&S.rotateX(T),M&&S.rotateZ(M),S.translate(A,x,E),S},s=(y,b,_,A,x,E,T=0,M=0)=>{let S=new pe(y,b,_,10);return T&&S.rotateX(T),M&&S.rotateZ(M),S.translate(A,x,E),S},a=(y,b)=>{let _=y.index?y.toNonIndexed():y;for(let A of Object.keys(_.attributes))A!=="position"&&A!=="normal"&&_.deleteAttribute(A);return _.setAttribute("aPale",new Nt(new Float32Array(_.attributes.position.count).fill(b),1)),_},o=new Dr;o.moveTo(-6.6,-47),o.lineTo(6.6,-47),o.lineTo(7.6,-40),o.lineTo(7.6,22),o.quadraticCurveTo(7,39,0,49.5),o.quadraticCurveTo(-7,39,-7.6,22),o.lineTo(-7.6,-40),o.closePath();let h=new Za(o,{depth:11.5,bevelEnabled:!1,curveSegments:10});h.rotateX(Math.PI/2),h.translate(0,6.6,0);let c=[h,n(11,2.6,17,0,7.9,39.5),n(9,1.3,11,0,7.2,-11),n(9,1.3,11,0,7.2,4),n(9,1.3,11,0,7.2,19),s(1.5,1.8,6.5,0,16.6,-37,-.14),s(.16,.22,10,0,20.2,-29.5),n(3.2,.14,.14,0,23.2,-29.5),n(2,.14,.14,0,21.6,-29.5),s(.18,.26,13,0,15.5,31),n(2.4,.14,.14,0,19.5,31),s(.26,.32,12,4.2,12.6,-3.5),s(.26,.32,12,-4.2,12.6,-3.5),n(9.2,.4,.4,0,18.4,-3.5),s(.14,.14,12,4.2,12.2,2.2,1.1),s(.14,.14,12,-4.2,12.2,2.2,1.1),s(.14,.14,11,3,11.6,-8.8,-1.15),s(.14,.14,11,-3,11.6,-8.8,-1.15),n(.2,1,60,7.5,7.1,-8),n(.2,1,60,-7.5,7.1,-8)],l=[n(13.4,3,17,0,8.1,-31),n(11.4,2.9,13.5,0,11.05,-31.8),n(12.6,2.7,8.2,0,13.85,-29.3),n(17,.3,3.2,0,12.6,-27.6),n(1.4,1.5,5.4,6.2,11.6,-36),n(1.4,1.5,5.4,-6.2,11.6,-36)];this.mat=new ne({uniforms:{uAmbient:ht.uAmbient,uFlash:ht.uFlash,uFlashDir:ht.uFlashDir,uFlashColor:ht.uFlashColor,uFogDensity:ht.uFogDensity,uSkyEnv:ht.uSkyEnv,uFl:{value:[new qt,new qt,new qt,new qt]},uFlare:{value:new qt},uSea:{value:new ct}},vertexShader:jy,fragmentShader:Yy});let u=new gt(pf([...c.map(y=>a(y,0)),...l.map(y=>a(y,1))]),this.mat);u.frustumCulled=!1,this.ship.add(u);let f=this.lights=[],d=(y,b,_,A,x,E)=>f.push({x:y,y:b,z:_,col:A,size:x,kind:E,out:0,ph:i()*6.283,dead:!1}),m=[1,.72,.4],v=[.9,.95,1];for(let y of[-1,1]){for(let b=0;b<6;b++)d(y*6.75,8.6,-37.5+b*2.6,m,1,"cabin");for(let b=0;b<5;b++)d(y*5.75,11.4,-37+b*2.6,m,1,"cabin");for(let b=0;b<3;b++)d(y*6.35,14.1,-32+b*2.6,m,.9,"cabin")}for(let y=0;y<5;y++)d(-5+y*2.5,14.2,-25.15,[.75,.9,.8],.9,"cabin");d(0,18.2,-3.5,v,2.6,"flood"),d(4.2,18,-3.5,v,2.2,"flood"),d(-4.2,18,-3.5,v,2.2,"flood"),d(0,21.5,31,v,2,"flood"),d(0,25.2,-29.5,v,2.2,"mast"),d(7.7,13.2,-27.6,[.1,1,.25],1.6,"side"),d(-7.7,13.2,-27.6,[1,.08,.05],1.6,"side"),d(0,9.4,-47.2,v,1.4,"mast"),d(0,15.6,-29.3,[1,.06,.04],2.4,"beacon"),d(0,9.6,46,[1,.06,.04],1.8,"beacon"),this.flare={on:!1,t:0,pos:new w,vel:new w,at:[7,58,131],next:0};let g=f.length+2,p=new oe;this.aP=new Nt(new Float32Array(g*3),3),this.aC=new Nt(new Float32Array(g*3),3),this.aS=new Nt(new Float32Array(g),1),this.aP.setUsage(mi),this.aC.setUsage(mi),this.aS.setUsage(mi),p.setAttribute("position",this.aP),p.setAttribute("aColor",this.aC),p.setAttribute("aSize",this.aS),this.points=new js(p,new ne({uniforms:{uScale:{value:600}},vertexShader:Ky,fragmentShader:Qy,transparent:!0,depthWrite:!1,blending:un})),this.points.frustumCulled=!1,this.points.renderOrder=12,this.group.add(this.points),this._v=new w,this._q=new wt,this._e=new ni(0,0,0,"YXZ"),this._col=new kt}place(t,e,i,n=1){this.pos.set(t,0,e),this.yaw=i,this.side=n,this.t=0,this.sink=0,this.active=!0,this.group.visible=!0,this.h=this.waves.heightFast(t,e),this.pitch=0;let s=this.rnd;for(let a of this.lights)a.dead=!1,a.out=a.kind==="cabin"?14+150*Math.pow(s(),1.4):a.kind==="flood"?40+70*s():a.kind==="mast"?95+60*s():a.kind==="side"?120+50*s():205+20*s();this.flare.on=!1,this.flare.next=0,this.update(0,!1,null,0)}hide(){this.active=!1,this.group.visible=!1}update(t,e,i,n=900){if(!this.active)return;e&&(this.t+=t);let s=this.t,a=this.waves,o=this.sink=Math.pow(Re(0,235,s),1.25);if(o>.985){this.hide();return}let h=Math.cos(this.yaw),c=Math.sin(this.yaw),l=a.heightFast(this.pos.x+c*32,this.pos.z+h*32),u=a.heightFast(this.pos.x-c*32,this.pos.z-h*32),f=a.heightFast(this.pos.x,this.pos.z),d=1-Math.exp(-t*.55);this.h+=((l+u+f)/3*.55-this.h)*(t>0?d:1),this.pitch+=(Math.atan2(l-u,64)*.4-this.pitch)*(t>0?d:1);let m=.05+.62*Math.pow(o,1.5),v=-this.side*(.24+.36*o+.03*Math.sin(s*.37));if(e&&i){let S=Math.hypot(i.x,i.z)||1;this.pos.x+=i.x/S*.55*t,this.pos.z+=i.z/S*.55*t}this.ship.position.set(this.pos.x,this.h-1-18*Math.pow(o,1.3),this.pos.z),this.mat.uniforms.uSea.value.set((l+u+f)/3,s),this.ship.rotation.set(-m-this.pitch,this.yaw,v,"YXZ"),this.ship.updateMatrixWorld(!0);let g=.72+.28*Math.sin(s*.9)*Math.sin(s*.23+1)-.5*bt((s-60)/150)*(.5+.5*Math.sin(s*2.3)),p=this.aP.array,y=this.aC.array,b=this.aS.array,_=this._v,A=this.ship.matrixWorld,x=0,E=0;for(let S of this.lights){_.set(S.x,S.y,S.z).applyMatrix4(A),p[x*3]=_.x,p[x*3+1]=_.y,p[x*3+2]=_.z;let D=1,G=S.out-s;G<=0?D=0:G<3.5?D=Math.sin(s*31+S.ph)>.2*G?1:.08:(S.kind==="cabin"||S.kind==="flood")&&(D=Math.max(.15,g)*(.9+.1*Math.sin(s*13+S.ph))),S.kind==="beacon"&&(D*=(s*.8+S.ph)%1<.22?1:.03),_.y<this.waves.heightFast(_.x,_.z)-.3&&(D=0);let K=(S.kind==="cabin"?2.2:S.kind==="flood"?5.5:4.2)*D;y[x*3]=S.col[0]*K,y[x*3+1]=S.col[1]*K,y[x*3+2]=S.col[2]*K,b[x]=S.size,S.kind==="flood"&&E<4&&this.mat.uniforms.uFl.value[E++].set(_.x,_.y-.6,_.z,.16*D),x++}let T=this.flare;e&&!T.on&&T.next<T.at.length&&s>=T.at[T.next]&&o<.7&&(T.on=!0,T.t=0,T.next++,T.pos.set(0,17,-29).applyMatrix4(A),T.vel.set((this.rnd()-.5)*6,46,(this.rnd()-.5)*6));let M=0;T.on&&(T.t+=t,T.t<3.2?T.vel.y-=12.5*t:(T.vel.y+=(-3.2-T.vel.y)*(1-Math.exp(-t*2)),i&&(T.vel.x+=(i.x*.35-T.vel.x)*(1-Math.exp(-t*.5)),T.vel.z+=(i.z*.35-T.vel.z)*(1-Math.exp(-t*.5)))),T.pos.addScaledVector(T.vel,t),M=(T.t<3.2?.25:1)*bt((36-T.t)/6)*(.8+.2*Math.sin(s*40)),(T.t>36||T.pos.y<this.waves.heightFast(T.pos.x,T.pos.z))&&(T.on=!1)),p[x*3]=T.pos.x,p[x*3+1]=T.pos.y,p[x*3+2]=T.pos.z,y[x*3]=9*M,y[x*3+1]=.9*M,y[x*3+2]=.5*M,b[x]=4.5,x++,p[x*3]=T.pos.x,p[x*3+1]=T.pos.y,p[x*3+2]=T.pos.z,y[x*3]=.34*M,y[x*3+1]=.035*M,y[x*3+2]=.02*M,b[x]=46,this.flareGlow=M,this.mat.uniforms.uFlare.value.set(T.pos.x,T.pos.y,T.pos.z,.13*M),this.aP.needsUpdate=!0,this.aC.needsUpdate=!0,this.aS.needsUpdate=!0,this.points.material.uniforms.uScale.value=n*.75}};var Xr=r=>{window.__load&&window.__load(r)},Yo=r=>new Promise((t,e)=>{let i=document.createElement("script");i.src=r,i.onload=t,i.onerror=()=>e(new Error("load failed: "+r)),document.head.appendChild(i)}),ri=new URLSearchParams(location.search),Ji=1/120,Ti={get(r,t){try{let e=localStorage.getItem("eos."+r);return e===null?t:e}catch{return t}},set(r,t){try{localStorage.setItem("eos."+r,String(t))}catch{}}},El=[.5,1,1.5],Sl=[0,.4,.85,1],Tl=class{constructor(){if(this.canvas=document.getElementById("view"),this.manual=ri.get("manual")==="1",this.renderer=new Ar({canvas:this.canvas,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),!this.renderer.capabilities.isWebGL2)throw new Error("WebGL2 is required");this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=ze,this.renderer.toneMapping=ji,this.renderer.autoClear=!0,this.perf=new yo(this.renderer);let t=ri.get("q")||Ti.get("quality",this.perf.pickDefault());this.perf.setProfile($s[t]?t:this.perf.pickDefault()),this.manual&&(this.perf.adaptive=!1),ht.hdrType=this.perf.info.halfFloat?dn:Ye,this.isTouch=ri.get("touch")==="1"||ri.get("touch")!=="0"&&navigator.maxTouchPoints>0&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,ht.uNoise.value=Jd(),ht.uDetailN.value=$d(),ht.uFoamTex.value=tf(),this.time=0,this.acc=0,this.state="title",this.deadTimer=0,this.scene=new Li,this.camera=new Be(62,16/9,.07,3e4),this.camera.layers.enableAll(),this.waves=new lo,this.sky=new fo(this.renderer,this.perf.profile.envSize),this.ocean=new mo(this.waves,this.perf.profile),this.post=new vo(this.renderer),this.post.levels=this.perf.profile.bloomLevels,this.scene.add(this.sky.dome,this.ocean.mesh),this.flashLight=new es(13163775,0),this.keyLight=new es(10465476,.42),this.flashLight.layers.enableAll(),this.keyLight.layers.enableAll(),this.scene.add(this.flashLight,this.flashLight.target,this.keyLight,this.keyLight.target),this.pmrem=new Gs(this.renderer),this.envTimer=0,this.envRT=null,this.input=new Co(this.canvas),this.character=new Mo,this.scene.add(this.character.group),this.body=new Eo(this.waves),this.survival=new So,this.player=new To(this.body,this.survival,this.input),this.anim=new Ao(this.character,this.body,this.player,this.survival),this.cam=new Ro(this.camera,this.character,this.body,this.player,this.waves,this.input),this.cam.yaw=-Math.PI/2;let e=ri.get("view")||Ti.get("view","third");this.cam.setMode(e),this.cam.blend=this.cam.target,this.cam.intensity=+Ti.get("shake",1)||1,this.cam.auto=Ti.get("autocam","1")!=="0",ri.has("yaw")&&(this.cam.yaw=+ri.get("yaw")),ri.has("pitch")&&(this.cam.pitch=+ri.get("pitch")),this.limbs=new qo(this.waves,this.character,this.body),this.limbs.onSlap=(n,s,a)=>{this.foam&&this.foam.enabled&&n>1.6&&this.foam.addSplash(s.x,s.z,Math.min(.55,.12+n*.07));let o=this.camera.matrixWorld.elements,h=s.x-this.camera.position.x,c=s.z-this.camera.position.z;a!=="foot"&&n>1.6&&this.cam.blend<.5&&!this.underwater.isUnder&&this.lens.spawn(a==="hand"?3:1),this.emit("limb",{v:n,pos:s,kind:a,pan:Math.max(-.8,Math.min(.8,(h*o[0]+c*o[2])/(Math.hypot(h,c)+.5)))})},this.mouthUnder=!1,this.camUnder=0,this.mouthWorld=new w,this.impactBlur=0,this.listeners=[],this.weather=new Po(this.waves),this.weather.base=this.weather.storm=ri.has("storm")?+ri.get("storm"):1,this.manual&&(this.weather.locked=!0),this.lightning=new Fo,this.scene.add(this.lightning.group),this.autoLightning=!(this.manual||ri.get("auto")==="0"),this.buildEffects(),this.interaction.auto=this.autoLightning,this.audio=new ko,this.audio.volume=+Ti.get("volume",.85),this.audio.sfxOn=Ti.get("sfx","1")!=="0",this.listeners.push((n,s)=>this.audio.onEvent(n,s)),this.face=new Vo,this.onCharacter=n=>this.face.attach(n.mesh),this.vst={alive:!0},this.coughSeq=0,this.coughT=0,this.voiceDir=new Go(this.audio,this.face,{bubbles:n=>this.underwater.burstAt(this.mouthWorld,n,.22),cough:n=>{this.coughSeq=n,this.coughT=0}}),this.listeners.push((n,s)=>this.voiceDir.onEvent(n,s,this.vst)),Yo("dist/voice.js").then(()=>{this.audio.setVoices(window.__EOS_VOICE)}).catch(()=>console.warn("[voice] \uBAA9\uC18C\uB9AC \uB179\uC74C\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4")),this.listeners.push((n,s)=>{if(n==="inhale"&&(this.anim.gaspKick=Math.max(this.anim.gaspKick,s.gasp?1:.4*s.strength)),n==="exhale"&&!this.mouthUnder&&this.spray&&this.state!=="title"){let a=this.player.heading,o=this.weather.wind,h=this.mouthWorld,c=3+Math.round(4*s.strength);for(let l=0;l<c;l++)this.spray.emit(h.x+a.x*.05,h.y+.01,h.z+a.z*.05,a.x*(.5+Math.random()*.7)+o.x*.04,.15+Math.random()*.3,a.z*(.5+Math.random()*.7)+o.z*.04,.5+Math.random()*.5,.05+Math.random()*.06,1,.45,.11+.08*s.strength,.6)}}),this.lightning.onThunder=n=>this.audio.onEvent("thunder",n),this.audioState={cam:{pos:this.camera.position,fwd:new w,up:new w},hot:[]},this.rescue=new Wo(this.waves),this.scene.add(this.rescue.group),this.ship=new jo(this.waves),this.scene.add(this.ship.group),this.shipOff=ri.get("ship")==="0",this.boat=new Xo(this.waves),this.scene.add(this.boat.group),this.aboard=!1,this.bacc=0,this.washT=0,this.boatOff=ri.get("boat")==="0",this.seatPos=new w(.2,we.floorY+.15,-.3);{let a=new w(Math.sin(.26),0,Math.cos(.26)),o=new w(Math.cos(.26)*Math.sin(.45),-Math.cos(.45),-Math.sin(.26)*Math.sin(.45));this.seatQuat=new wt().setFromRotationMatrix(new Lt().makeBasis(new w().crossVectors(a,o),a,o))}this.rid={p:new w,v:new w,pv:new w,d:new w,has:!1,slam:0},this.wonTimer=0,this.scenarios=new Uo(this),this.pendingScenario=ri.get("test"),this.weather.update(0),this.waves.update(0),this.body.reset(0,0),this.syncCharacter(1),this.anim.update(1/60),this.character.group.updateMatrixWorld(!0),this.drawScene=(n,s)=>{let a=this.renderer;if(a.setRenderTarget(n),s){let o=(this.camUnder||0)<.5;o&&((this._clipUnder||(this._clipUnder=[new Bi(new w(0,-1,0),0)]))[0].constant=this.body.surfaceH+.04,a.clippingPlanes=this._clipUnder),this.camera.layers.set(1),a.setClearColor(0,0),a.clear(),a.render(this.scene,this.camera),this.camera.layers.enableAll(),o&&(a.clippingPlanes=this._noClip||(this._noClip=[]))}else a.render(this.scene,this.camera)};let i={input:this.input,start:()=>this.start(),resume:()=>this.resume(),restart:()=>this.restart(),pause:()=>this.pause(),toggleView:()=>{this.cam.toggle(),Ti.set("view",this.cam.mode),this.impactBlur=Math.max(this.impactBlur,.3)},scenario:n=>{this.scenarios.run(n),this.resume()},get:n=>n==="quality"?this.perf.profile.label:n==="view"?this.cam.mode==="first"?"1\uC778\uCE6D":"3\uC778\uCE6D":n==="shake"?Math.round(this.cam.intensity*100)+"%":n==="autocam"?this.cam.auto?"\uCF2C":"\uB054":n==="sfx"?this.audio.sfxOn?"\uCF2C":"\uB054":Math.round(this.audio.volume*100)+"%",cycle:n=>{if(n==="quality"){let s=Object.keys($s);this.setQuality(s[(s.indexOf(this.perf.profile.key)+1)%s.length])}else if(n==="view")i.toggleView();else if(n==="sfx")this.audio.setSfx(!this.audio.sfxOn),Ti.set("sfx",this.audio.sfxOn?"1":"0");else if(n==="autocam")this.cam.auto=!this.cam.auto,Ti.set("autocam",this.cam.auto?"1":"0");else if(n==="shake")this.cam.intensity=El[(El.indexOf(this.cam.intensity)+1)%El.length]||1,Ti.set("shake",this.cam.intensity);else{let s=Sl[(Sl.indexOf(this.audio.volume)+1)%Sl.length];this.audio.setVolume(s===void 0?.85:s),Ti.set("volume",this.audio.volume)}this.state!=="playing"&&this.state!=="title"&&this.renderStill()}};this.api=i,this.ui=!this.manual||ri.get("ui")==="1"?new zo(document.getElementById("ui"),i,this.isTouch):null,this.hadLock=!1,this.input.onLockChange=n=>{n?this.hadLock=!0:this.hadLock&&this.state==="playing"&&(this.hadLock=!1,this.pause())},this.canvas.addEventListener("click",()=>{this.state==="playing"&&!this.isTouch&&!this.input.locked&&this.input.lock()}),window.addEventListener("keydown",n=>{n.repeat||((n.code==="KeyV"||n.code==="KeyC")&&this.state==="playing"&&i.toggleView(),n.code==="KeyP"&&(this.state==="playing"?this.pause():this.state==="paused"&&this.resume()),n.code==="Enter"&&this.state==="title"&&this.start())}),window.addEventListener("wheel",n=>{if(this.state!=="playing"||this.cam.cine)return;let s=n.deltaY<0?"first":"third";s!==this.cam.mode&&(this.cam.setMode(s),Ti.set("view",s),this.impactBlur=Math.max(this.impactBlur,.3),this.ui&&this.ui.refresh())},{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()}),this.manual?(this.state="playing",this.ui&&this.ui.show("playing",{time:0,cause:""}),this.pendingScenario&&(this.scenarios.run(this.pendingScenario),this.pendingScenario=null)):this.setState("title");{let n=["pointerdown","keydown","touchend","mousedown"],s=()=>{if(!(this.state==="paused"||this.state==="dead"||this.manual)){try{this.audio.start(),this.audio.resume()}catch{}if(this.audio.ctx&&this.audio.ctx.state==="running")for(let a of n)window.removeEventListener(a,s,!0)}};for(let a of n)window.addEventListener(a,s,!0);this.onAssets=s}window.addEventListener("resize",()=>{this.resize(),(this.state==="paused"||this.state==="dead")&&this.renderStill()}),this.resize(),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}async loadCharacter(){try{Xr(.3),window.__EOS_SON||await Yo("dist/son.js"),Xr(.7);let t=await Ho(window.__EOS_SON);Xr(.9),window.__EOS_SON=null;let e=new Bo(this.character,t);this.character.useGlb(e),this.body.setAirway(new w(0,e.mouth.y,e.mouth.z),new w(0,e.eye.y,e.eye.z)),this.glbInfo={verts:e.mesh.geometry.attributes.position.count,bones:e.order.length,morphs:Object.keys(e.mesh.morphTargetDictionary||{}),sourceHeight:+e.sourceHeight.toFixed(3)},this.onCharacter&&this.onCharacter(e),Xr(.92)}catch(t){console.warn("[character] GLB \uCE90\uB9AD\uD130\uB97C \uC4F0\uC9C0 \uBABB\uD574 \uAE30\uBCF8 \uBAB8\uC73C\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4: "+t.message),this.glbInfo={error:t.message},this.character.body.visible=!0,this.character.head.visible=!0}}async loadHeli(){try{window.__EOS_HELI||await Yo("dist/heli.js");let t=await Ho(window.__EOS_HELI);window.__EOS_HELI=null;let e=0;t.scene.traverse(i=>{i.isMesh&&(e+=i.geometry.attributes.position.count)}),this.rescue.setModel(t),this.heliInfo={verts:e}}catch(t){console.warn("[heli] \uD5EC\uAE30 \uBAA8\uB378\uC744 \uC4F0\uC9C0 \uBABB\uD574 \uAE30\uBCF8 \uD5EC\uAE30\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4: "+t.message),this.heliInfo={error:t.message}}}async loadBoat(){if(!this.boatOff)try{window.__EOS_BOAT||await Yo("dist/boat.js");let t=await Ho(window.__EOS_BOAT);window.__EOS_BOAT=null,this.boat.setModel(t),this.boatInfo={verts:this.boat.mesh.geometry.attributes.position.count},(this.wantBoard||this.state==="title"&&!this.scenarios.active)&&this.board(),this.state==="title"&&!this.scenarios.active&&this.placeShip()}catch(t){console.warn("[boat] \uBCF4\uD2B8 \uBAA8\uB378\uC744 \uC4F0\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+t.message),this.boatInfo={error:t.message}}}placeShip(){if(this.shipOff)return;let t=this.body;this.ship.place(t.pos.x-200,t.pos.z+80,.8,1)}slamOut(){let t=this.boat,e=this._bt||(this._bt={p:new w,n:new w,q:new wt});e.q.copy(t.quat).invert(),e.p.copy(t.slamPos).sub(t.pos).applyQuaternion(e.q);let i=Math.max(we.sternZ,Math.min(we.bowZ,e.p.z)),n=Zi(i)+.28,s,a,o,h;if(e.p.z<we.transomZ&&Math.abs(e.p.x)<we.halfW-.3)s=e.p.x,a=we.sternZ-.25,o=0,h=-1;else{let c=e.p.x>=0?1:-1;s=c*n,a=i,o=c,h=0}return e.n.set(o,0,h).applyQuaternion(t.quat),e.n.y=0,e.n.normalize(),e.p.set(s,0,a).applyQuaternion(t.quat).add(t.pos),e.p}board(){if(!this.boat.loaded){this.wantBoard=!this.boatOff;return}this.wantBoard=!1;let t=this.body,e=-Math.PI/2+.32;this.boat.reset(t.pos.x,t.pos.z,e),this.boat.rider=this.body.mass,this.boat.flipArmed=!0,this.boat.keepYaw=e,this.aboard=!0,this.washT=0,this.bacc=0,this.boardedAt=this.time,this.pinToBoat(!0),this.anim.hold="aboard",this.syncCharacter(1)}pinToBoat(t,e=1/60){let i=this.boat,n=this.body,s=this.rid;t&&i.sync(1);let a=this._pt||(this._pt={base:new w,v:new w,a:new w,q:new wt,qi:new wt,e:new ni,x:new w(1,0,0),z:new w(0,0,1)}),o=this._seatW||(this._seatW=new w),h=this._seatQ||(this._seatQ=new wt);a.base.copy(this.seatPos).sub(i.com).applyQuaternion(i.group.quaternion).add(i.group.position),i.velocityAt(a.base,a.v),(t||!s.has)&&(s.pv.copy(a.v),s.p.set(0,0,0),s.v.set(0,0,0),s.d.set(0,0,0),s.slam=0,s.has=!0),a.a.copy(a.v).sub(s.pv).multiplyScalar(1/Math.max(e,.001)),s.pv.copy(a.v),a.a.lengthSq()>2025&&a.a.setLength(45),a.a.multiplyScalar(-1),a.a.y-=9.81,a.a.applyQuaternion(a.qi.copy(i.group.quaternion).invert()),a.a.y+=9.81,s.d.lerp(a.a,1-Math.exp(-e*16));let c=Math.max(1,Math.ceil(e/.012)),l=e/c;for(let f=0;f<c;f++)s.v.x+=(s.d.x*3.2-30*s.p.x-3.2*s.v.x)*l,s.v.z+=(s.d.z*2.4-34*s.p.z-3.4*s.v.z)*l,s.v.y+=((s.d.y-4)*1.5-15*s.p.y-2*s.v.y)*l,s.p.addScaledVector(s.v,l),s.p.y<=0&&(s.v.y<-.5&&(s.slam=Math.max(s.slam,Math.min(1,-s.v.y/2.2))),s.p.y=0,s.v.y<0&&(s.v.y=0)),s.p.y>.22&&(s.p.y=.22,s.v.y>0&&(s.v.y=0)),s.p.x>.07?(s.p.x=.07,s.v.x>0&&(s.v.x=-.3*s.v.x)):s.p.x<-.26&&(s.p.x=-.26,s.v.x<0&&(s.v.x=0)),s.p.z>.16?(s.p.z=.16,s.v.z>0&&(s.v.z=0)):s.p.z<-.24&&(s.p.z=-.24,s.v.z<0&&(s.v.z=0));s.slam=Math.max(0,s.slam-e*3.2),this.state==="title"&&s.p.multiplyScalar(.5),o.copy(this.seatPos).add(s.p).sub(i.com).applyQuaternion(i.group.quaternion).add(i.group.position),h.copy(i.group.quaternion).multiply(this.seatQuat).multiply(a.q.setFromAxisAngle(a.z,s.p.x/.5)).multiply(a.q.setFromAxisAngle(a.x,s.p.y/.8)),n.pin(o,h,i.velocityAt(o,this._seatV||(this._seatV=new w)),i.angVel);let u=this.anim.ride;u.lift=s.p.y/.22,u.side=s.p.x/.2,u.fore=s.p.z/.2,u.slam=s.slam,s.slam>.55&&this.state==="playing"&&(this.impactBlur=Math.max(this.impactBlur,.12*s.slam))}launchIntroWave(t=10){return this.introWave=this.interaction.launch({lead:t,height:12.5,breakOffset:.2,angleOffset:0,width:190,speed:14}),this.introWave}boatPoint(t,e,i,n){return n.set(t,e,i).applyMatrix4(this.boat.holder.children[0].matrixWorld)}contactBoat(t){let e=this.boat,i=this.body,n=this.player,s=this.survival;this.clingCool=Math.max(0,(this.clingCool||0)-t);let a=n.swimHeld,o=a&&!this._swimWas;if(this._swimWas=a,!e.active||!e.loaded){this.clinging=!1,n.cling=!1,n.faceDir=null,this.nearBoat=99;return}let h=this._cb||(this._cb={c:new w,g:{},g2:{},out:new w,a:new w,f:new w,v:new w,l:new w,n:new w,Y:new w});if(h.c.set(0,.4,0).applyQuaternion(i.quat).add(i.pos),h.c.distanceToSquared(e.pos)>36){this.nearBoat=99,this.clinging&&this.letGo(!1);return}let c=e.nearestGrip(h.c,h.g);this.nearBoat=c.dist,h.Y.set(0,1,0).applyQuaternion(e.quat);for(let y=0;y<3;y++){let b=i.points[y],_=y===1?.15:.11,A=e.nearestGrip(b.world,h.g2),x=0;if(A.dist<we.tubeR+_)x=we.tubeR+_-A.dist,h.n.copy(b.world).sub(A.point),h.n.lengthSq()<1e-6&&h.n.copy(A.normal),this.clinging&&(h.n.y=Math.max(0,h.n.y),h.n.lengthSq()<1e-6&&h.n.copy(A.normal)),h.n.normalize();else{let E=h.l.copy(b.world).applyMatrix4(e.inv);if(Math.abs(E.x)<Zi(E.z)&&E.z>we.transomZ&&E.z<we.bowZ&&E.y>0&&E.y<we.floorY+_){let T=E.y>.17;x=T?we.floorY+_-E.y:E.y+_*.5,h.n.copy(h.Y).multiplyScalar(T?1:-1)}}if(x>0){e.velocityAt(b.world,h.v);let E=(i.vel.x-h.v.x)*h.n.x+(i.vel.y-h.v.y)*h.n.y+(i.vel.z-h.v.z)*h.n.z,T=Math.max(0,Math.min(2600,x*9e3-E*500));i.extForce.addScaledVector(h.n,T),e.pushAt(b.world,-h.n.x*T*.6,-h.n.y*T*.6,-h.n.z*T*.6)}}if(!this.clinging){let y=s.alive&&this.clingCool<=0&&c.dist<1.25&&!n.diveHeld&&!this.rescue.reach&&this.rescue.state!=="lift"&&n.air<.5;if(this.canCling=y,y&&o)this.clinging=!0,this.clingZ=c.z,this.clingSide=c.side,this.strain=0,this.clingNote=0,this.grip=Math.max(this.grip===void 0?1:this.grip,.35),this.runaway=0,this.grabT=3;else{n.cling=!1,n.faceDir=null,this.grip=Math.min(1,(this.grip===void 0?1:this.grip)+.03*t);return}}if(!s.alive||n.diveHeld){this.letGo(!1);return}let l=Zi(this.clingZ),u=Zi(this.clingZ+.05),f=(this._cg||(this._cg=new w)).set(this.clingSide*l,qr(this.clingZ),this.clingZ).applyMatrix4(e.matrix),d=this.clingSide*(u-l),m=Math.hypot(d,.05);h.out.set(this.clingSide*.05/m,0,-this.clingSide*d/m).applyQuaternion(e.quat),h.out.y=0,h.out.lengthSq()<.04&&h.out.set(i.pos.x-f.x,0,i.pos.z-f.z),h.out.normalize(),h.c.set(0,.42,0).applyQuaternion(i.quat),this.squeezeK=(this.squeezeK||0)+((a?1:0)-(this.squeezeK||0))*(1-Math.exp(-t*6)),h.a.copy(f).addScaledVector(h.out,we.tubeR+.2-.07*this.squeezeK),h.a.y=i.surfaceH+.065+.05*this.squeezeK,h.l.copy(i.pos).add(h.c),e.velocityAt(f,h.v),h.n.copy(i.angVel).cross(h.c).add(i.vel),h.f.copy(h.a).sub(h.l).multiplyScalar(900),h.f.x-=(h.n.x-h.v.x)*230,h.f.y-=(h.n.y-h.v.y)*280,h.f.z-=(h.n.z-h.v.z)*230;let v=h.f.length(),g=a;this.needNow=v,this.squeeze=g,n.squeeze=g,this.grip=Math.max(0,Math.min(1,this.grip+(g?-(.17+.1*Math.min(1,v/600)):.06)*t)),this.grabT=Math.max(0,(this.grabT||0)-t);let p=(g?200+730*this.grip:200+130*this.grip)*(.5+.5*s.eff)*(.4+.6*n.control);this.grabT>0&&(p=Math.max(p,1e3),v<190&&(this.grabT=Math.min(this.grabT,.2))),this.strain=Math.max(0,this.strain+(v>p?t:-t*.8)),v>p&&h.f.multiplyScalar(p/v),i.extForce.add(h.f),i.extTorque.x+=h.c.y*h.f.z-h.c.z*h.f.y,i.extTorque.y+=h.c.z*h.f.x-h.c.x*h.f.z,i.extTorque.z+=h.c.x*h.f.y-h.c.y*h.f.x,e.pushAt(f,-h.f.x,-h.f.y,-h.f.z),h.c.add(i.pos),n.cling=!0,n.faceDir=(this._fd||(this._fd=new w)).copy(h.out).multiplyScalar(-1),(this.strain>.6||h.c.distanceTo(f)>1.9)&&this.letGo(!0)}letGo(t){this.clinging&&(this.clinging=!1,this.player.cling=!1,this.player.squeeze=!1,this.player.faceDir=null,this.clingCool=t?1.1:.7,t&&(this.tornAt=this.time,this.player.control=Math.min(this.player.control,.3),this.brnd()<.5&&this.startRunaway()),this.gustT=5+6*this.brnd())}startRunaway(){if(!this.boat.active||this.aboard)return;let t=this.weather.wind,e=Math.hypot(t.x,t.z)||1,i=(this.brnd()-.5)*.7;(this.runDir||(this.runDir=new w)).set((t.x*Math.cos(i)-t.z*Math.sin(i))/e,0,(t.x*Math.sin(i)+t.z*Math.cos(i))/e),this.runaway=5+4*this.brnd(),this.runNote=1.6}boatFrame(t){let e=this.boat;if(!e.active||!e.loaded)return;this.slamCool=Math.max(0,(this.slamCool||0)-t),this.state;{let s=this.spray,a=e.relSpeed;if(a>1.1&&e.subFrac>.03&&e.subFrac<.9){this.hullAcc=(this.hullAcc||0)+t*Math.min(46,(a-.9)*16);let o=e.group.quaternion,h=this._hs||(this._hs={l:new w,p:new w,n:new w,qi:new wt});h.l.copy(e.relFlow).applyQuaternion(h.qi.copy(o).invert());let c=Math.hypot(h.l.x,h.l.z)||1;h.l.x/=c,h.l.z/=c;let l=s.near;s.near=!0;let u=0;for(;this.hullAcc>=1&&u++<12;){this.hullAcc-=1;let f=-1.9+Math.random()*3.85,d=Math.random()<.5?-1:1,m=f>1.5,v=m?d*.5:d,g=m?.87:0;if(v*-h.l.x+g*-h.l.z<.2)continue;this.boatPoint(d*(Zi(f)+.2),.28,f,h.p);let p=this.waves.heightFast(h.p.x,h.p.z);if(Math.abs(h.p.y-p)>.45)continue;h.n.set(v,0,g).applyQuaternion(o);let y=.9+Math.random()*2.2*Math.min(1.6,a/2.2),b=.5+Math.random()*1.4;if(s.emit(h.p.x,p+.04,h.p.z,e.vel.x+h.n.x*b+e.relFlow.x*.25,e.vel.y*.3+y,e.vel.z+h.n.z*b+e.relFlow.z*.25,.4+Math.random()*.5,Math.random()<.25?.024+Math.random()*.02:.01+Math.pow(Math.random(),2)*.02,0,0,.95),Math.random()<.1){let _=(.26+.24*Math.random())*Math.min(1.6,a/2.2);s.lean=(h.n.x*s._rx+h.n.z*s._rz)*.5,s.emit(h.p.x,p-.02,h.p.z,e.vel.x+h.n.x*.5,0,e.vel.z+h.n.z*.5,.62*Math.sqrt(_/.45),_,3,0,.75,0),s.lean=0}}s.near=l}if(this.lightSlapCool=Math.max(0,(this.lightSlapCool||0)-t),e.slam>1.2&&e.slam<=2.4&&this.lightSlapCool<=0){this.lightSlapCool=.4;{let o=this.slamOut(),h=this._bt.n;s.slap(o.x,e.slamPos.y,o.z,Math.min(1.9,.5+e.slam*.5),h.x*.8,h.z*.8,e.vel.x,0,e.vel.z,2.2)}this.boatSlamK=Math.max(this.boatSlamK||0,.25+e.slam*.12),this.state!=="title"&&this.emit("boatSlam",{v:e.slam*.8,pan:0})}}if(e.slam>2.4&&this.slamCool<=0&&this.state!=="title"){this.slamCool=.5,this.boatSlamK=1;let s=Math.min(2.2,(e.slam-1.6)*.6);this.spray.burst(e.slamPos.x,e.slamPos.y,e.slamPos.z,s*.6,this.weather.wind);{let a=this.slamOut(),o=this._bt.n.x,h=this._bt.n.z;for(let c=0;c<3;c++){let l=(c-1)*.7,u=Math.cos(l),f=Math.sin(l),d=o*u-h*f,m=o*f+h*u;this.spray.slap(a.x+d*.3-o*.1,e.slamPos.y,a.z+m*.3-h*.1,Math.min(3,1.2+e.slam*.4),d,m,e.vel.x,0,e.vel.z,3)}}this.foam.addSplash(e.slamPos.x,e.slamPos.z,Math.min(1,.3+e.slam/8));{let a=this.camera.matrixWorld.elements,o=e.slamPos.x-this.camera.position.x,h=e.slamPos.z-this.camera.position.z,c=Math.hypot(o,h);this.emit("boatSlam",{v:e.slam*Math.min(1,9/(c+3)),pan:Math.max(-.8,Math.min(.8,(o*a[0]+h*a[2])/(c+.5)))})}}if(this.wasCapsized!==e.capsized&&(this.wasCapsized=e.capsized,this.state!=="title"&&(this.spray.burst(e.pos.x,this.waves.heightFast(e.pos.x,e.pos.z),e.pos.z,1.8,this.weather.wind),this.foam.addSplash(e.pos.x,e.pos.z,1),this.emit("boatSlam",{v:7,pan:0}))),!this.ui||this.state!=="playing")return;let i=this.isTouch?"\uD5E4\uC5C4":"Space",n=this.isTouch?"\uC785\uC218":"F";this.boatNote=Math.max(0,(this.boatNote||0)-t),this.clinging&&!this._clingWas?(this.ui.note(`\uB3CC\uD48D\xB7\uD070 \uD30C\uB3C4\uAC00 \uC62C \uB54C ${i} \uAFB9 \u2014 \uAF49 \uC954\uB2E4 \xB7 ${n} \uB193\uAE30`,4.5),this.boatNote=6):!this.clinging&&this._clingWas&&this.time-(this.tornAt||-9)<.3?(this.ui.note("\uB193\uCCE4\uB2E4",2.5),this.boatNote=4):!this.clinging&&!this.aboard&&this.canCling&&this.boatNote<=0&&(this.ui.note(`${i} \u2014 \uBCF4\uD2B8\uB97C \uBD99\uC7A1\uACE0 \uBC84\uD2F4\uB2E4`,3),this.boatNote=7),this._clingWas=this.clinging}throwOff(){if(!this.aboard)return;let t=this.body,e=this.boat;this.aboard=!1,e.rider=0,e.flipArmed=!1,e.keepYaw=null;let i=(this._tv||(this._tv=new w)).set(0,1,0).applyQuaternion(e.quat);t.vel.addScaledVector(i,2),t.vel.y+=1,t.vel.y>6.5&&(t.vel.y=6.5),t.angVel.copy(e.angVel).multiplyScalar(.9),this.player.control=.04,this.player.impact=Math.max(this.player.impact,1.8),this.player.impactPeak=Math.max(this.player.impactPeak,1.8),this.anim.hold=null,this.acc=0,this.impactBlur=Math.max(this.impactBlur,.6),this.emit("impact",{strength:2.6,dir:i.clone(),aer:e.aer}),this.thrownAt=this.time,this.clingCool=2.5,this.ui&&this.state==="playing"&&this.ui.note(this.isTouch?"\uD5E4\uC5C4 \xB7 \uC785\uC218":"Space \uD5E4\uC5C4 \xB7 F \uC785\uC218",6)}buildEffects(){let t=this.perf.profile;if(this.rain){this.scene.remove(this.rain.group,this.spray.mesh,this.underwater.group);for(let e of[this.rain.group,this.spray.mesh,this.underwater.group])e.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()});this.foam.enabled&&this.foam.rt.forEach(e=>e.dispose()),this.lens.rt.dispose()}this.rain=new Lo(t),this.spray=new Io(this.waves,t.spray),this.foam=new go(this.renderer,t.foamAcc),this.underwater=new Do(this.waves,t),this.lens=new xo(this.renderer,t.lensDrops),this.scene.add(this.rain.group,this.spray.mesh,this.underwater.group),this.post.u.tLens.value=this.lens.texture,this.interaction?this.interaction.spray=this.spray:this.interaction=new bo(this.waves,this.body,this.player,this.spray),this.underwater.onEnter=()=>{this.underwater.burstAt(this.camera.position,46,.8),this.impactBlur=Math.max(this.impactBlur,.5),this.emit("camEnter")},this.underwater.onExit=()=>{this.lens.spawn(Math.round(14+20*(1-this.cam.blend)),1),this.lens.sheet=1,this.emit("camExit")},this.interaction.onImpact=e=>{let i=Math.min(1,e.strength/3);this.impactBlur=Math.max(this.impactBlur,i),this.underwater.burst=Math.max(this.underwater.burst,i),this.underwater.isUnder||this.lens.spawn(Math.round((6+16*i)*(1.6-this.cam.blend)),1),this.foam.addSplash(this.body.pos.x,this.body.pos.z,1),this.emit("impact",e)},this.interaction.onSplash=(e,i)=>{!this.underwater.isUnder&&this.cam.blend<.5&&this.lens.spawn(2),this.foam.addSplash(i.x,i.z,Math.min(1,e/4)),this.emit("splash",{v:e,pos:i})}}setQuality(t){this.perf.setProfile(t),Ti.set("quality",t);let e=this.perf.profile;this.ocean.applyProfile(e),this.sky.envRT.setSize(e.envSize,e.envSize/2),this.post.levels=e.bloomLevels,this.buildEffects(),this.resize(!0)}setState(t){this.state=t,this.ui&&this.ui.show(t,{time:this.survival.timeAlive,cause:this.survival.cause})}start(){this.audio.start(),this.resetPlayer(),!this.pendingScenario&&!this.scenarios.active&&(this.board(),this.placeShip()),this.cam.script=null,this.input.enabled=!0,this.pendingScenario?(this.scenarios.run(this.pendingScenario),this.pendingScenario=null):this.scenarios.active||(this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=this.aboard?58:22,this.interaction.megaNext=105+Math.random()*40,this.introWaveAt=this.aboard?this.time+9.5:0),this.isTouch?this.goFullscreen():this.input.lock(),this.setState("playing"),this.scenarios.active||(this.cam.setMode(this.cam.mode),this.cam.cine={mode:"intro",t:0,dur:4.5},this.introStrike=1.3),this.ui&&this.ui.note(this.aboard?`\uBCF4\uD2B8\uAC00 \uD288 \uB54C ${this.isTouch?"\uBD99\uC7A1\uAE30":"Space"} \uAFB9 \u2014 \uAF49 \uBD99\uC7A1\uC544\uB77C`:this.isTouch?"\uD5E4\uC5C4 \xB7 \uC785\uC218":"Space \uD5E4\uC5C4 \xB7 F \uC785\uC218",6),this.last=performance.now()}pause(){this.state==="playing"&&(this.input.enabled=!1,this.audio.suspend(),this.isTouch||this.input.unlock(),this.setState("paused"))}resume(){this.state!=="playing"&&(this.audio.start(),this.audio.resume(),this.input.enabled=!0,this.cam.script=null,this.isTouch||this.input.lock(),this.setState("playing"),this.last=performance.now())}restart(){this.scenarios.stop(),this.weather.locked=!1,this.weather.base=1;for(let t of this.waves.breakers)t.active=!1;this.rescue.reset(240),this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=22,this.interaction.megaNext=80+Math.random()*40,this.resetPlayer(),this.board(),this.placeShip(),this.aboard&&(this.interaction.next=58,this.introWaveAt=this.time+9.5),this.resume(),this.ui&&this.aboard&&this.ui.note(`\uBCF4\uD2B8\uAC00 \uD288 \uB54C ${this.isTouch?"\uBD99\uC7A1\uAE30":"Space"} \uAFB9 \u2014 \uAF49 \uBD99\uC7A1\uC544\uB77C`,6)}resetPlayer(){this.body.reset(this.body.pos.x,this.body.pos.z),this.survival.reset(),this.survival.events.length=0,this.player.brace=0,this.player.air=0,this.player.control=1,this.player.diveBlend=0,this.player.riseBlend=0,this.player.crawlBlend=0,this.player.swimBlend=0,this.player.underSwim=0,this.player.impact=0,this.player.impactPeak=0,this.player.tumble=0,this.player.events.length=0,this.cam.qd.identity(),this.cam.inited=!1,this.deadTimer=0,this.impactBlur=0,this.mouthUnder=!1,this.wonTimer=0,this.lifting=!1,this.anim.force=null,this.cam.cine=null,this.timeScale=1,this.slowLeft=1.4,this.slowWant=1,this.grabNote=0,this.post.u.uFade.value=0,this.post.u.uTunnel.value=0,this.post.u.uDesat.value=0,this.lens.wipe(),this.limbs.reset(),this.ship.hide(),this.aboard=!1,this.anim.hold=null,this.boat.hide(),this.clinging=!1,this.player.cling=!1,this.player.faceDir=null,this.introWave=null,this.introWaveAt=0,this.grip=1,this.slip=0,this.aboardLoose=0,this._slipTold=!1,this.fear=.45,this.gustTold=!1,this.squeeze=!1,this.squeezeK=0,this.runaway=0,this.gustT=6,this.brnd=Je(977),this.player.squeeze=!1,this.thrownAt=-99,this.wasCapsized=!1,this.clingCool=0,this.syncCharacter(1),this.character.group.updateMatrixWorld(!0)}goFullscreen(){try{let t=document.documentElement,e=t.requestFullscreen?t.requestFullscreen():null;e&&e.catch&&e.catch(()=>{})}catch{}}resize(t){let e=window.innerWidth,i=window.innerHeight,n=Math.min(window.devicePixelRatio||1,2);this.renderer.setSize(Math.round(e*n),Math.round(i*n),!1),this.canvas.style.width=e+"px",this.canvas.style.height=i+"px",this.camera.aspect=e/i,this.cam.portrait=bt((1-e/i)/.5),this.camera.updateProjectionMatrix();let[s,a]=this.perf.renderSize(Math.round(e*n),Math.round(i*n));this.post.useOpaque=this.perf.profile.refraction,this.post.fxaa=this.perf.profile.fxaa,this.post.setSize(s,a,t===!0),this.ocean.uniforms.uSceneColor.value=this.post.rtOpaque.texture,this.ocean.uniforms.uSceneDepth.value=this.post.rtOpaque.depthTexture}emit(t,e){for(let i=0;i<this.listeners.length;i++)this.listeners[i](t,e)}syncCharacter(t){let e=this.character.group,i=this.body;e.position.lerpVectors(i.prevPos,i.pos,t),e.quaternion.slerpQuaternions(i.prevQuat,i.quat,t)}step(t){this.time+=t,ht.uTime.value=this.time,this.scenarios.update(t),this.weather.update(t),this.waves.update(t),ht.uWaveA.value=this.waves.uA,ht.uWaveB.value=this.waves.uB,ht.uBrkA.value=this.waves.uBrkA,ht.uBrkB.value=this.waves.uBrkB,ht.uBrkC.value=this.waves.uBrkC,this.body.wind.copy(this.weather.wind),this.body.breathVol=(this.survival.lung-.55)*3.2,this.acc+=t;let e=0;if(this.studio){let x=this.studio,E=this.body;E.pos.set(x.x,x.y,x.z),E.prevPos.copy(E.pos),E.vel.set(0,0,0),E.angVel.set(0,0,0),E.quat.copy(x.quat),E.prevQuat.copy(x.quat),E.relFlow.set(0,0,0),E.relSpeed=0,this.anim.force=x.state,this.anim.forcePhase=x.phase,this.acc=0}if(this.lifting){let x=this.body,E=this.rescue;x.prevPos.copy(x.pos),x.prevQuat.copy(x.quat);let T=E.lineDir,M=this._liftQ||(this._liftQ=new wt),S=this._liftQ2||(this._liftQ2=new wt);M.setFromUnitVectors(this._up||(this._up=new w(0,1,0)),T),S.setFromAxisAngle(this._up,E.ringSpin),x.quat.copy(M).multiply(S),x.pos.copy(E.ring).addScaledVector(T,-.3),x.vel.copy(E.vel),x.angVel.set(0,0,0),x.subFrac=Math.max(0,Math.min(1,(this.waves.heightFast(x.pos.x,x.pos.z)-x.pos.y+.6)/1.5)),x.mouthDepth=-2,x.eyeDepth=-2,x.relSpeed=0,x.dragG=0,this.anim.force="hang",this.acc=0}{let x=this.boat;x.tow.set(0,0,0);let E=this.time-(this.thrownAt||-99);if(x.active&&!this.aboard&&E<16){let M=this.body.pos.x-x.pos.x,S=this.body.pos.z-x.pos.z,D=Math.hypot(M,S)+.001;if(D>5.5){let G=((x.vel.x-this.body.vel.x)*M+(x.vel.z-this.body.vel.z)*S)/D,K=Math.max(0,Math.min(3200,(D-5.5)*420-G*700))*Math.min(1,(16-E)/4);x.tow.set(M/D*K,0,S/D*K)}}if(this.gustPull=0,x.active&&this.clinging){let M=bt((this.weather.gust-1.12)/.18);if(M>0){let S=this.weather.wind,D=Math.hypot(S.x,S.z)||1,G=1900*M*M;x.tow.x+=S.x/D*G,x.tow.z+=S.z/D*G}this.gustPull=M,M>.45&&!this.gustTold&&this.ui&&this.state==="playing"&&(this.gustTold=!0,this.ui.note(`\uB3CC\uD48D\uC774 \uBCF4\uD2B8\uB97C \uC7A1\uC544\uCC48\uB2E4 \u2014 ${this.isTouch?"\uD5E4\uC5C4":"Space"} \uAFB9`,3.5))}if(x.active&&!this.aboard&&!this.clinging&&E>=16&&this.state==="playing"&&(this.gustT=(this.gustT===void 0?6:this.gustT)-t,this.gustT<=0&&(this.gustT=6+9*this.brnd(),this.runaway<=0&&this.brnd()<.5&&this.startRunaway())),this.runaway>0&&x.active)if(this.runaway-=t,this.clinging||this.aboard)this.runaway=0;else{let M=Math.min(1,this.runaway/1.5)*1100;x.tow.x+=this.runDir.x*M,x.tow.z+=this.runDir.z*M,this.runNote-=t,this.runNote<=0&&this.runNote>-1&&this.ui&&x.pos.distanceTo(this.body.pos)>7&&(this.runNote=-2,this.ui.note("\uBCF4\uD2B8\uAC00 \uB5A0\uBC00\uB824 \uAC04\uB2E4",3),this.boatNote=6)}x.active&&!this.aboard&&x.pos.distanceToSquared(this.body.pos)>150*150&&x.hide(),x.wind.copy(this.weather.wind),this.bacc+=t;let T=0;for(;x.active&&this.bacc>=Ji&&T<8;)x.step(Ji),this.bacc-=Ji,T++;if((T===8||!x.active)&&(this.bacc=0),x.sync(this.bacc/Ji),this.aboard){if(this.washT=this.body.mouthDepth>.05?this.washT+t:0,x.flipping>0&&(x.upY<.4||x.sitUp<.5)||x.upY<.1||x.angVel.length()>3.4||this.washT>1.3||!x.active||this.lifting)this.throwOff();else if(this.pinToBoat(!1,t),this.anim.hold="aboard",this.acc=0,this.state==="playing"&&this.survival.timeAlive>5.5){let M=this.input.enabled&&this.input.swim(),S=this.rid;this.squeeze=M,this.grip=Math.max(0,Math.min(1,this.grip+(M?-.15:.075)*t));let D=bt((S.d.length()-3.2)/5)+.8*bt(S.p.y/.1),G=M&&this.grip>.03;this.slip=Math.max(0,(this.slip||0)+(G?-1.4:D*.8+.085)*t),this.aboardLoose=(this.aboardLoose||0)+((G?0:Math.min(1,this.slip*1.6))-(this.aboardLoose||0))*(1-Math.exp(-t*8)),this.slip>.45&&!this._slipTold&&this.ui&&(this._slipTold=!0,this.ui.note(`\uC190\uC774 \uD480\uB9B0\uB2E4 \u2014 ${this.isTouch?"\uBD99\uC7A1\uAE30":"Space"} \uAFB9`,3)),this.slip>1&&(this.throwOff(),x.flipArmed=x.upY>.3,this.ui&&this.ui.note("\uBCF4\uD2B8\uC5D0\uC11C \uB5A8\uC5B4\uC84C\uB2E4",3))}}}this.introWaveAt&&this.time>=this.introWaveAt&&(this.introWaveAt=0,this.boat.active&&this.state==="playing"&&this.launchIntroWave(10.5));{let x=this.introWave,E=this.boat;if(x&&x.active&&(this.aboard||E.flipArmed)&&x.age<x.tBreak){let T=(E.pos.x-x.ox)*x.dx+(E.pos.z-x.oz)*x.dz-x.s;if(T>3){let M=Math.max(5,x.speed-(E.vel.x*x.dx+E.vel.z*x.dz));x.tBreak+=(x.age+T/M+.15-x.tBreak)*(1-Math.exp(-t*2.5))}}else x&&!x.active&&(this.introWave=null)}for(;!this.studio&&!this.lifting&&!this.aboard&&this.acc>=Ji&&e<8;)this.player.fixedUpdate(Ji),this.contactBoat(Ji),this.body.step(Ji),this.acc-=Ji,e++;e===8&&(this.acc=0),this.mouthUnder=this.mouthUnder?this.body.mouthDepth>-.015:this.body.mouthDepth>.03;let i=this.survival;this.state!=="title"&&this.state!=="won"&&!this.lifting&&i.update(t,{mouthUnder:this.mouthUnder,effort:this.player.effort,turb:this.body.turb,subFrac:this.body.subFrac,storm:this.weather.storm,sudden:this.player.impact>.8,brace:Math.max(this.player.brace,this.player.diveHeld?1:0)}),this.syncCharacter(this.acc/Ji);{let x=this.anim.reach,E=this.boat,T=0;if(this.aboard&&E.loaded)T=1,this.boatPoint(.875,.4,.22,x[0].pos),this.boatPoint(.47,.55,.58,x[1].pos),this._looseHand=this.aboardLoose>.35;else if(this.clinging&&E.loaded){T=1,this.anim.hold="cling";let M=this.clingZ,S=this.clingSide,D=Zi(M),G=this.boatPoint(S*D,qr(M),M,this._rg||(this._rg=new w)),K=(this._ro||(this._ro=new w)).set(this.character.group.position.x-G.x,0,this.character.group.position.z-G.z);K.lengthSq()<1e-4&&K.set(S,0,0).applyQuaternion(E.group.quaternion),K.y=0,K.normalize();let O=K.z,P=-K.x;for(let F=0;F<2;F++){let z=F===0?.21:-.21;x[F].pos.set(G.x+O*z+K.x*.115,G.y+.165,G.z+P*z+K.z*.115)}}else this.anim.hold==="cling"&&(this.anim.hold=null);if(x[0].on=T,x[1].on=T&&this.aboard&&this._looseHand?.15:T,this.character.glb&&this.character.glb.setGrip){let M=x[0].w>.5?1:0;this.character.glb.setGrip(M,M)}}if(this.anim.update(t),this.character.retarget(),this.character.group.updateMatrixWorld(!0),this.body.syncLimbs(this.character),this.boatFrame(t),this.ship.update(t,this.state==="playing",this.weather.wind,this.post.h),this.state==="title")this.interaction.next=Math.max(this.interaction.next,8),this.interaction.megaNext=Math.max(this.interaction.megaNext,40),this.cam.script||(this.cam.script={yaw:-Math.PI/2,pitch:-.07}),this.cam.blend=1,this.cam.orbit=this.time*.11;else if(this.cam.orbit!==0&&!this.keepOrbit){let x=((this.cam.orbit+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;this.cam.orbit=Math.abs(x)<.01?0:x*Math.exp(-t*3)}{let x=this.cam.interest,E=this.interaction,T=this.body;if(E.crestDist<130&&E.crestDist>6&&E.crestHeight>4)x.x=T.pos.x-E.crestDx*60,x.z=T.pos.z-E.crestDz*60,x.w=bt(E.crestHeight/10)*bt(1.2-E.crestDist/130);else if(this.boat.active&&!this.aboard&&this.time-(this.thrownAt||-99)<9)x.x=this.boat.pos.x,x.z=this.boat.pos.z,x.w=.75;else if(this.rescue.state==="hover"||this.rescue.state==="inbound"){let M=this.rescue.state==="hover"?this.rescue.ring:this.rescue.pos;x.x=M.x,x.z=M.z,x.w=.6}else x.w=0;this.cam.oxygen=this.survival.alive?this.survival.oxygen:100,this.cam.shiver=this.survival.shiver}this.cam.armAdd=(this.cam.armAdd||0)+((this.aboard||this.time-(this.thrownAt||-99)<4?1.5:0)-(this.cam.armAdd||0))*(1-Math.exp(-t*1.2)),this.cam.holdAbove=!this.aboard&&this.time-(this.thrownAt||-99)<6.5,this.cam.fpLift=(this.cam.fpLift||0)+((this.aboard?.27:0)-(this.cam.fpLift||0))*(1-Math.exp(-t*(this.aboard?3:9))),this.cam.update(t);let n=this.camera.position,s=this.weather.wind,a=this.weather.storm;this.mouthWorld.copy(this.body._mouth).applyQuaternion(this.character.group.quaternion).add(this.character.group.position),this.underwater.update(t,this.camera,this.cam.surfaceAtCam,this.body,this.player,i,this.post,this.weather,this.mouthWorld,this.post.h),this.camUnder=this.underwater.under;let o=i.events;for(let x=0;x<o.length;x++){let E=o[x];E.type==="submerge"&&this.underwater.burstAt(this.mouthWorld,34,.45),E.type==="surface"&&(this.player.recover=2+4*E.need),this.emit(E.type,E)}o.length=0,this.introStrike>0&&(this.introStrike-=t,this.introStrike<=0&&this.lightning.strike(n,{azimuth:this.cam.yaw+.5,dist:1500,sheet:0,power:1.4})),this.lightning.update(t,n,a>.3?.3+.9*a:0,this.autoLightning),this.interaction.update(t,n,this.camUnder,s);let h=this.interaction.crestDist,c=this.interaction.crestHeight,l=c>18?60:30,u=i.alive&&h>-2&&h<l&&c>5?bt(1-h/l)*bt(c/9):0;this.player.brace+=(u-this.player.brace)*(1-Math.exp(-t*5)),this.cam.threat=this.interaction.threat;let f=this.rescue,d=f.state==="hover",m=this.input.enabled&&this.player.swimHeld;f.update(t,this.body.pos,s,i.timeAlive,i.alive,this.spray,this.state==="playing",this.camera.position,m),this.player.grab=f.state==="hover"&&f.gripping?f.ring:null;let v=this.isTouch?"\uD5E4\uC5C4":"Space";this.ui&&this.state==="playing"&&(!d&&f.state==="hover"&&this.ui.note(`\uAD6C\uC870 \uD5EC\uAE30 \u2014 \uD29C\uBE0C\uAE4C\uC9C0 \uAC00\uC11C ${v}\uB97C \uAFB9 \uB20C\uB7EC \uBD99\uC7A1\uC544\uB77C`,8),this.grabNote-=t,f.slipped?(f.slipped=!1,this.ui.note("\uB193\uCCE4\uB2E4",2.5),this.grabNote=3):f.reach&&!f.gripping&&this.grabNote<=0&&(this.ui.note(`${v}\uB97C \uAFB9 \uB20C\uB7EC \uBD99\uC7A1\uC544\uB77C`,2.5),this.grabNote=4)),f.state==="lift"&&!this.lifting&&(this.lifting=!0,this.input.enabled=!1,this.interaction.auto=!1,this.autoLightning=!0,this.cam.setMode("third"),this.cam.cine={mode:"lift",t:0,yaw0:this.cam.yaw},this.emit("surface",{need:1,time:6})),f.rescued&&this.state==="playing"&&(this.wonTimer+=t,this.post.u.uFade.value=Math.max(0,Math.min(.9,(this.wonTimer-9.5)/2.2)),this.wonTimer>11.5&&!this.manual&&(this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("won")));{let x=!!this.cam.cine||this.lifting;x!==!!this.cineOn&&(this.cineOn=x,this.ui&&this.ui.cine(x))}{let x=this.interaction,E=i.alive&&!this.lifting&&(this.player.brace>.7&&x.crestDist<7&&x.crestDist>-2&&x.crestHeight>7||this.player.air>.6),T=this.realDt||t;E&&this.slowLeft>0?(this.slowWant=.42,this.slowLeft-=T):(this.slowWant=1,E||(this.slowLeft=Math.min(1.4,this.slowLeft+T*.2)))}let g=this.body.subFrac<.05&&this.body.pos.y-this.body.surfaceH>1?1:0;this.player.air+=(g-this.player.air)*(1-Math.exp(-t*(g?10:4)));{let x=this.mouthUnder&&i.alive&&!this.aboard;if(x&&!this._washWas&&(this._washPend=(this.clearFor||0)>.45&&!this.player.diveHeld&&this.body.mouthDepth<.7&&this.state==="playing",this._washLive=!1,this._washT=0),x&&(this._washT=(this._washT||0)+t,this._washPend&&this._washT>=(this.player.crawlBlend>.5?.32:0)&&(this._washPend=!1,this._washLive=!0,this.washAt=this.time,this.anim.flinch=this.player.crawlBlend>.5?.6:1,this.anim.flinchSide=Math.random()<.5?-1:1,this.time-(this.gulpAt||-9)>2.5&&Math.random()<(i.inhaling?.8:.3)&&(this.gulpAt=this.time,i.swallow=Math.min(1,i.swallow+.25),i.oxygen=Math.max(0,i.oxygen-3),this._gulped=!0),this.audio.gurgle(.9),this.cam.blend<.5&&(this.lens.sheet=Math.max(this.lens.sheet,.8),this.impactBlur=Math.max(this.impactBlur,.3)))),!x&&this._washWas&&this._washLive&&this.time-(this.washAt||-9)<3&&i.alive&&this.state==="playing"){let E=this.mouthWorld,T=this.player.heading;for(let M=0;M<9;M++)this.spray.emit(E.x+T.x*.06,E.y,E.z+T.z*.06,T.x*(1.2+Math.random()*1.6)+(Math.random()-.5)*.8,.4+Math.random()*1.1,T.z*(1.2+Math.random()*1.6)+(Math.random()-.5)*.8,.3+Math.random()*.3,.008+Math.random()*.012,0,0,.95);this.voiceDir.say(this._gulped?"cough":"sputter",5,.95,this.vst),this._gulped&&(this.coughSeq=Math.max(this.coughSeq,2.2),this.coughT=.25),this._gulped=!1,this.cam.blend<.5&&this.lens.spawn(12,1)}this.clearFor=x?0:(this.clearFor||0)+t,this._washWas=x}{let x=this.time-(this.thrownAt||-99),E=i.alive?Math.min(1,.4+.4*this.interaction.threat+.25*bt((72-i.oxygen)/50)+.22*i.swallow+.2*bt(this.player.impact)+(this.mouthUnder?.18:0)+.3*bt(1-x/14)+.18*bt((40-i.stamina)/40)+(this.aboard?.3*bt(this.rid.d.length()/9):0)):0;this.fear=(this.fear||0)+(E-(this.fear||0))*(1-Math.exp(-t*(E>(this.fear||0)?4:.4))),this.player.fear=this.state==="title"?.3:this.fear,this.cam.shiver=Math.max(this.cam.shiver||0,1.5*Math.max(0,this.fear-.5))}let p=this.vst;p.alive=i.alive,p.blackout=i.blackout,p.mouthUnder=this.mouthUnder,p.under=this.mouthUnder,p.camUnder=this.underwater.isUnder,p.oxygen=i.oxygen,p.impact=this.player.impact,p.brace=this.player.brace,p.crestDist=h,p.crestHeight=c,p.gaspTimer=i.gaspTimer,p.inhaling=i.inhaling,p.breathPhase=i.breathPhase,p.stamina=i.stamina,p.effort=this.player.effort,p.temp=i.temp,p.swallow=i.swallow,p.air=this.player.air,p.exertion=i.exertion,p.struggle=this.anim.w.struggle,p.dive=this.player.diveHeld,p.tumble=this.player.tumble,p.turb=this.body.turb,p.fear=this.player.fear||0,p.mouthDepth=this.body.mouthDepth,this.coughSeq>0&&(this.coughSeq-=t,this.coughT-=t,this.coughT<=0&&(this.anim.coughKick=1,this.coughT=.42+Math.random()*.2,this.cam.blend<.5&&i.alive&&(this.impactBlur=Math.max(this.impactBlur,.14)))),this.face.update(t,p),this.state!=="title"&&this.voiceDir.update(t,p),this.limbs.update(t,this.spray,s,!this.aboard),this.spray.seedCrests(t,n,s,a,Math.min(40,1500*t)*(this.perf.profile.spray/9e3));{let x=this.time-(this.thrownAt||-99);this.spray.thin=x<6?.3:x<10?.3+.7*(x-6)/4:1}this.spray.seedBreakers(t,n,s);{let x=this.camera.matrixWorld.elements;this.spray._rx=x[0],this.spray._rz=x[2]}this.spray.update(t,n,s),this.rain.update(t,this.camera,s,this.weather.rain,this.camUnder,this.post.h);let y=this.post.u;this.impactBlur=Math.max(0,this.impactBlur-t*.9),y.uBlur.value=this.impactBlur*2.6,y.uSheet.value=this.lens.sheet,y.uWhiteout.value=this.interaction.whiteout*(this.time-(this.thrownAt||-99)<10?.3:1),y.uMotionBlur.value=this.perf.profile.motionBlur?Math.min(.6,this.player.impact*.3+this.player.tumble*.5):0;{let x=Math.max(bt((40-i.oxygen)/40),bt((34.2-i.temp)/2.2),i.blackout)*(i.alive?1:0);this.pulseT=(this.pulseT||0)+t*(1.5+1.2*x);let E=Math.pow(Math.max(0,Math.sin(this.pulseT*Math.PI*2)),8);y.uTunnel.value=i.blackout,this.lidK=0}y.uDesat.value=.35*i.blackout+.18*bt((35.5-i.temp)/3),this.state==="title"?(y.uDofAmount.value=1.6,y.uDofFocus.value=this.cam.arm):y.uDofAmount.value=0,i.alive&&!this.lifting&&!this.rescue.rescued&&(y.uFade.value=this.lidK||0),i.alive||(this.deadTimer===0&&!this.manual&&(this.cam.cine={mode:"death",t:0}),this.deadTimer+=t,y.uFade.value=Math.min(.82,this.deadTimer/4),this.deadTimer>4&&this.state==="playing"&&!this.manual&&(this.input.enabled=!1,this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("dead"))),this.ui&&this.state==="playing"&&(this.ui.setBars(i.oxygen/100,i.stamina/100,(i.temp-31.5)/5.5,this.clinging||this.aboard?Math.max(.02,this.grip):this.rescue.hold/this.rescue.holdNeed),this.ui.setMode(this.aboard?"boat":this.clinging?"cling":"swim"));let b=ht.uFlash.value;this.flashLight.intensity=b*3.2,this.flashLight.position.copy(this.character.group.position).addScaledVector(ht.uFlashDir.value,50),this.flashLight.target.position.copy(this.character.group.position),this.keyLight.position.copy(this.character.group.position).addScaledVector(ht.uGlowDir.value,50),this.keyLight.target.position.copy(this.character.group.position),this.character.material.envMapIntensity=(this.studioLight?4.5:this.character.glb?1.25:1.7)+b*2,this.boat.material&&(this.boat.material.envMapIntensity=(this.studioLight?4:.6)+b*1.4),this.keyLight.intensity=this.studioLight?2.2:.42,this.ocean.update(this.camera,t),this.ocean.uniforms.uPlayerPos.value.copy(this.character.group.position),this.ocean.uniforms.uBoatOn.value=this.boat.active&&this.boat.loaded?1:0;{let x=this.boat,T=x.active&&x.loaded?Math.min(1,.12+.15*Math.max(0,x.relSpeed-.3)+.4*(this.boatSlamK||0)+(x.flipping>0?.5:0))*Math.min(1,x.subFrac*6):0;this.boatFoamK=(this.boatFoamK||0)+(T-(this.boatFoamK||0))*(1-Math.exp(-t*(T>(this.boatFoamK||0)?9:2.2))),this.boatSlamK=Math.max(0,(this.boatSlamK||0)-t*1.6),this.ocean.uniforms.uBoatFoam.value=this.boatFoamK}this.boat.active&&this.boat.loaded&&this.ocean.uniforms.uBoatInv.value.copy(this.boat.holder.children[0].matrixWorld).invert(),this.ocean.uniforms.uPlayerFoam.value=(.06+this.anim.splashiness*.12+this.limbs.activity*.18)*Math.min(1,this.body.subFrac*3)*(this.body.eyeDepth<.25?1:0);let _=this.audioState,A=this.camera.matrixWorld.elements;_.cam.fwd.set(-A[8],-A[9],-A[10]),_.cam.up.set(A[4],A[5],A[6]),_.storm=a,_.rain=this.weather.rain,_.windSpeed=this.weather.windSpeed,_.gust=this.weather.gust,_.windPan=-(s.x*A[0]+s.z*A[2])/Math.max(1,this.weather.windSpeed),_.under=this.underwater.under,_.depth=Math.max(0,this.underwater.depth),_.aeration=this.underwater.aeration,_.threat=this.interaction.threat,_.hot=this.spray.hot,_.oxygen=i.oxygen,_.effort=this.player.effort,this.clinging&&this.strain>.12&&(this.impactBlur=Math.max(this.impactBlur,.1)),_.gustPull=this.gustPull||0,_.fear=this.player.fear||0,_.boatCreak=this.aboard?.35+.5*Math.min(1,this.boat.angVel.length()*.8)+.4*this.rid.slam:this.clinging?.4+.5*Math.min(1,(this.strain||0)*2.5):0,_.heli=this.rescue.state!=="none"?{on:!0,pos:this.rescue.pos}:null,_.air=this.player.air,_.relSpeed=this.body.relSpeed,_.swellV=this.body.surface.vy,_.alive=i.alive,_.blackout=i.blackout,_.mouthUnder=this.mouthUnder,_.slow=1-(this.timeScale||1),_.swimSplash=Math.max(this.limbs.activity,this.anim.w.swim*.8)*(this.mouthUnder?.3:1),this.audio.update(t,_),this.input.endFrame()}render(t){if(this.sky.updateEnv(),this.envTimer-=t,this.envTimer<=0&&ht.uFlash.value<.01){let i=this.pmrem.fromEquirectangular(this.sky.envRT.texture);this.envRT&&this.envRT.dispose(),this.envRT=i,this.scene.environment=i.texture,this.envTimer=9}let e=this.weather.rain*(.9+5*(1-this.cam.blend))*(.6+.4*this.weather.gust);if(this.lens.update(t,e,this.underwater.isUnder,this.camera.aspect),this.foam.enabled){let i=this.boat,n=this.foam.u,s=i.active&&i.loaded;if(s){let a=i.group.quaternion,o=2*(a.x*a.z+a.w*a.y),h=1-2*(a.x*a.x+a.y*a.y),c=Math.hypot(o,h)||1;n.uBoat.value.set(i.group.position.x,i.group.position.z,o/c,h/c)}n.uBoatFoam.value=s?Math.max(0,(this.boatFoamK||0)-.22)*1:0}this.foam.update(t,this.camera.position.x,this.camera.position.z,this.character.group.position,this.anim.splashiness*.07+this.limbs.activity*.12,this.ocean.uniforms),this.post.render(this.drawScene,this.camera,t,this.time)}renderStill(){this.render(0)}loop(t){requestAnimationFrame(this.loop);let e=Math.max(0,Math.min((t-this.last)/1e3,.1));this.last=t,!this.manual&&(this.state==="paused"||this.state==="dead"||(this.realDt=e,this.timeScale=(this.timeScale||1)+((this.slowWant||1)-(this.timeScale||1))*(1-Math.exp(-e*9)),this.step(e*this.timeScale),this.render(e),this.perf.update(e)&&this.resize()))}};function Zy(){let r;try{r=new Tl}catch(e){let i=document.getElementById("fatal");i.style.display="flex",i.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uC2E4\uD589\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 (WebGL2 \uD544\uC694). "+e.message,console.error(e);return}let t=new URLSearchParams(location.search);(t.get("glb")==="0"?Promise.resolve():r.loadCharacter()).then(()=>r.loadBoat()).then(()=>t.get("heli")==="0"?null:r.loadHeli()).then(()=>{r.onAssets&&r.onAssets(),window.__ocean.ready=!0,Xr(1)}),window.__ocean={game:r,ready:!1,scenarios:Object.keys(os),advance(e,i=1/60){let n=Math.max(1,Math.round(e/i));for(let s=0;s<n;s++)r.step(i),r.render(i)},scenario(e){return r.scenarios.run(e)},studio(e){let i=new wt;e.prone?i.setFromRotationMatrix(new Lt().makeBasis(new w(0,0,1),new w(-1,0,0),new w(0,-1,0))):i.setFromAxisAngle(new w(0,1,0),-Math.PI/2);let n=r.waves.sample(0,0,{}).h;r.studio={state:e.state,phase:e.phase||0,quat:i,x:0,y:n+14,z:0},r.player.underSwim=e.under?1:0,r.anim.forcePike=e.pike||0,r.weather.base=r.weather.storm=.15,r.weather.locked=!0,r.cam.setMode("third"),r.cam.blend=1,r.cam.yaw=-Math.PI/2,r.cam.pitch=e.pitch!==void 0?e.pitch:-.05,r.cam.orbit=e.orbit||0,r.keepOrbit=!0,r.cam.armOverride=e.arm||2.7,r.cam.inited=!1,r.post.u.uExposureBias.value=1,r.studioLight=!0;for(let s=0;s<4;s++)r.step(.5);return r.render(1/60),r.render(1/60),r.anim.state},set(e){return e.view&&(r.cam.setMode(e.view),e.snap&&(r.cam.blend=r.cam.target)),e.yaw!==void 0&&(r.cam.yaw=e.yaw),e.pitch!==void 0&&(r.cam.pitch=e.pitch),e.orbit!==void 0&&(r.cam.orbit=e.orbit,r.keepOrbit=!0),e.arm!==void 0&&(r.cam.armOverride=e.arm),e.keys!==void 0&&(r.input.virtual=e.keys,r.input.enabled=!0),e.storm!==void 0&&(r.weather.base=e.storm,e.snap&&(r.weather.storm=e.storm)),e.breaker&&r.interaction.launch(e.breaker),e.strike&&r.lightning.strike(r.camera.position,e.strike),!0},info(){let e=r.body,i=r.survival;return{t:+r.time.toFixed(2),state:r.state,size:[r.post.w,r.post.h],profile:r.perf.profile.key,sigH:+r.waves.sigHeight.toFixed(1),pos:[+e.pos.x.toFixed(1),+e.pos.y.toFixed(2),+e.pos.z.toFixed(1)],surf:+e.surfaceH.toFixed(2),mouth:+e.mouthDepth.toFixed(2),sub:+e.subFrac.toFixed(2),ctl:+r.player.control.toFixed(2),imp:+r.player.impact.toFixed(2),anim:r.anim.state,view:r.cam.mode,blend:+r.cam.blend.toFixed(2),camUnder:+r.camUnder.toFixed(2),yaw:+r.cam.yaw.toFixed(2),o2:+i.oxygen.toFixed(0),st:+i.stamina.toFixed(0),temp:+i.temp.toFixed(2),alive:i.alive,flash:+ht.uFlash.value.toFixed(2),spray:r.spray.alive,drops:r.lens.count,fps:+r.perf.fps.toFixed(0),rescue:r.rescue.state,hold:+r.rescue.hold.toFixed(1),won:r.rescue.rescued,aboard:r.aboard,cling:!!r.clinging,grip:+(r.grip===void 0?1:r.grip).toFixed(2),runaway:+(r.runaway||0).toFixed(1),near:+(r.nearBoat||99).toFixed(1),boat:r.boat.active?{up:+r.boat.upY.toFixed(2),swamp:+r.boat.swamp.toFixed(2),dist:+r.boat.pos.distanceTo(e.pos).toFixed(1),sub:+r.boat.subFrac.toFixed(2)}:null,face:r.face.label,air:+r.player.air.toFixed(2),swim:r.player.swimHeld,dive:r.player.diveHeld,depth:+Math.max(0,e.mouthDepth).toFixed(2),voice:r.voiceDir.last,voices:r.voiceDir.count,glb:!!r.character.glb}},measure(e){return new Promise(i=>{let n=performance.now(),s=0,a=0,o=n,h=c=>{s++,a=Math.max(a,c-o),o=c,c-n>=e*1e3?i({fps:+(s/((c-n)/1e3)).toFixed(1),worstMs:+a.toFixed(1),scale:r.perf.scale,size:[r.post.w,r.post.h],profile:r.perf.profile.key}):requestAnimationFrame(h)};requestAnimationFrame(h)})}}}Zy();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
