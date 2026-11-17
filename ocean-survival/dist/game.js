(()=>{var qt={"son.js":4136853,"boat.js":1303878,"heli.js":1303534,"ship.js":4042854,"survivor.js":3955198};var vc="160";var Af=0,Ll=1,Rf=2;var yd=1,Cf=2,fn=3,Qe=0,Ce=1,Ue=2;var Ln=0,Fn=1,Ji=2,Fl=3,Il=4,xc=5,pn=100,Pf=101,Lf=102,kl=103,Dl=104,ao=200,Ff=201,yc=202,If=203,ka=204,Lh=205,kf=206,Df=207,zf=208,Uf=209,Of=210,Nf=211,Bf=212,Hf=213,Vf=214,Gf=0,Wf=1,qf=2,Lr=3,Xf=4,Kf=5,jf=6,Yf=7,_d=0,Qf=1,Zf=2,Zi=0,Jf=1,$f=2,tp=3,ep=4,ip=5,np=6,zl="attached",sp="detached",wd=300,Ns=301,Bs=302,Fh=303,Ih=304,ro=306,ai=1e3,Ze=1001,Da=1002,Ie=1003,Fr=1004;var Aa=1005;var Jt=1006,_c=1007;var Je=1008;var Be=1009,ap=1010,rp=1011,wc=1012,Md=1013,Cn=1014,mn=1015,bn=1016,Ed=1017,Td=1018,Zn=1020,op=1021,pe=1023,hp=1024,cp=1025,Jn=1026,Hs=1027,Mc=1028,Sd=1029,lp=1030,Ad=1031,Rd=1033,jo=33776,Yo=33777,Qo=33778,Zo=33779,Ul=35840,Ol=35841,Nl=35842,Bl=35843,Cd=36196,Hl=37492,Vl=37496,Gl=37808,Wl=37809,ql=37810,Xl=37811,Kl=37812,jl=37813,Yl=37814,Ql=37815,Zl=37816,Jl=37817,$l=37818,tu=37819,eu=37820,iu=37821,Jo=36492,nu=36494,su=36495,up=36283,au=36284,ru=36285,ou=36286;var Vs=2300,ts=2301,$o=2302,hu=2400,cu=2401,lu=2402,dp=2500;var Pd=0,oo=1,Xa=2,Ld=3e3,$n=3001,fp=3200,pp=3201,Fd=0,mp=1,Ye="",me="srgb",Oe="srgb-linear",Ec="display-p3",ho="display-p3-linear",Ir="linear",we="srgb",kr="rec709",Dr="p3";var ps=7680;var uu=519,gp=512,bp=513,vp=514,Id=515,xp=516,yp=517,_p=518,wp=519,kh=35044,Wi=35048;var du="300 es",Dh=1035,gn=2e3,zr=2001,In=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,t);t.target=null}}},ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=1234567,Ra=Math.PI/180,Gs=180/Math.PI;function Vi(){let a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ni[a&255]+ni[a>>8&255]+ni[a>>16&255]+ni[a>>24&255]+"-"+ni[t&255]+ni[t>>8&255]+"-"+ni[t>>16&15|64]+ni[t>>24&255]+"-"+ni[e&63|128]+ni[e>>8&255]+"-"+ni[e>>16&255]+ni[e>>24&255]+ni[i&255]+ni[i>>8&255]+ni[i>>16&255]+ni[i>>24&255]).toLowerCase()}function He(a,t,e){return Math.max(t,Math.min(e,a))}function Tc(a,t){return(a%t+t)%t}function Mp(a,t,e,i,n){return i+(a-t)*(n-i)/(e-t)}function Ep(a,t,e){return a!==t?(e-a)/(t-a):0}function Ca(a,t,e){return(1-e)*a+e*t}function Tp(a,t,e,i){return Ca(a,t,1-Math.exp(-e*i))}function Sp(a,t=1){return t-Math.abs(Tc(a,t*2)-t)}function Ap(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*(3-2*a))}function Rp(a,t,e){return a<=t?0:a>=e?1:(a=(a-t)/(e-t),a*a*a*(a*(a*6-15)+10))}function Cp(a,t){return a+Math.floor(Math.random()*(t-a+1))}function Pp(a,t){return a+Math.random()*(t-a)}function Lp(a){return a*(.5-Math.random())}function Fp(a){a!==void 0&&(fu=a);let t=fu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ip(a){return a*Ra}function kp(a){return a*Gs}function zh(a){return(a&a-1)===0&&a!==0}function Dp(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Ur(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function zp(a,t,e,i,n){let s=Math.cos,r=Math.sin,o=s(e/2),h=r(e/2),c=s((t+i)/2),u=r((t+i)/2),l=s((t-i)/2),d=r((t-i)/2),f=s((i-t)/2),g=r((i-t)/2);switch(n){case"XYX":a.set(o*u,h*l,h*d,o*c);break;case"YZY":a.set(h*d,o*u,h*l,o*c);break;case"ZXZ":a.set(h*l,h*d,o*u,o*c);break;case"XZX":a.set(o*u,h*g,h*f,o*c);break;case"YXY":a.set(h*f,o*u,h*g,o*c);break;case"ZYZ":a.set(h*g,h*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Qi(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function fe(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var nn={DEG2RAD:Ra,RAD2DEG:Gs,generateUUID:Vi,clamp:He,euclideanModulo:Tc,mapLinear:Mp,inverseLerp:Ep,lerp:Ca,damp:Tp,pingpong:Sp,smoothstep:Ap,smootherstep:Rp,randInt:Cp,randFloat:Pp,randFloatSpread:Lp,seededRandom:Fp,degToRad:Ip,radToDeg:kp,isPowerOfTwo:zh,ceilPowerOfTwo:Dp,floorPowerOfTwo:Ur,setQuaternionFromProperEuler:zp,normalize:fe,denormalize:Qi},gt=class a{constructor(t=0,e=0){a.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*n+t.x,this.y=s*n+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class a{constructor(t,e,i,n,s,r,o,h,c){a.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,h,c)}set(t,e,i,n,s,r,o,h,c){let u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=s,u[5]=h,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[3],h=i[6],c=i[1],u=i[4],l=i[7],d=i[2],f=i[5],g=i[8],b=n[0],m=n[3],p=n[6],v=n[1],x=n[4],w=n[7],R=n[2],y=n[5],E=n[8];return s[0]=r*b+o*v+h*R,s[3]=r*m+o*x+h*y,s[6]=r*p+o*w+h*E,s[1]=c*b+u*v+l*R,s[4]=c*m+u*x+l*y,s[7]=c*p+u*w+l*E,s[2]=d*b+f*v+g*R,s[5]=d*m+f*x+g*y,s[8]=d*p+f*w+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],h=t[6],c=t[7],u=t[8];return e*r*u-e*o*c-i*s*u+i*o*h+n*s*c-n*r*h}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],h=t[6],c=t[7],u=t[8],l=u*r-o*c,d=o*h-u*s,f=c*s-r*h,g=e*l+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=l*b,t[1]=(n*c-u*i)*b,t[2]=(o*i-n*r)*b,t[3]=d*b,t[4]=(u*e-n*h)*b,t[5]=(n*s-o*e)*b,t[6]=f*b,t[7]=(i*h-c*e)*b,t[8]=(r*e-i*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,r,o){let h=Math.cos(s),c=Math.sin(s);return this.set(i*h,i*c,-i*(h*r+c*o)+r+t,-n*c,n*h,-n*(-c*r+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(th.makeScale(t,e)),this}rotate(t){return this.premultiply(th.makeRotation(-t)),this}translate(t,e){return this.premultiply(th.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},th=new ie;function kd(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function za(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Up(){let a=za("canvas");return a.style.display="block",a}var pu={};function Pa(a){a in pu||(pu[a]=!0,console.warn(a))}var mu=new ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gu=new ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$a={[Oe]:{transfer:Ir,primaries:kr,toReference:a=>a,fromReference:a=>a},[me]:{transfer:we,primaries:kr,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[ho]:{transfer:Ir,primaries:Dr,toReference:a=>a.applyMatrix3(gu),fromReference:a=>a.applyMatrix3(mu)},[Ec]:{transfer:we,primaries:Dr,toReference:a=>a.convertSRGBToLinear().applyMatrix3(gu),fromReference:a=>a.applyMatrix3(mu).convertLinearToSRGB()}},Op=new Set([Oe,ho]),de={enabled:!0,_workingColorSpace:Oe,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Op.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;let i=$a[t].toReference,n=$a[e].fromReference;return n(i(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this._workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this._workingColorSpace)},getPrimaries:function(a){return $a[a].primaries},getTransfer:function(a){return a===Ye?Ir:$a[a].transfer}};function Us(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function eh(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var ms,Or=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=za("canvas")),ms.width=t.width,ms.height=t.height;let i=ms.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=za("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=Us(s[r]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Us(e[i]/255)*255):e[i]=Us(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Np=0,Nr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Vi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,o=n.length;r<o;r++)n[r].isDataTexture?s.push(ih(n[r].image)):s.push(ih(n[r]))}else s=ih(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function ih(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Or.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bp=0,$e=class a extends In{constructor(t=a.DEFAULT_IMAGE,e=a.DEFAULT_MAPPING,i=Ze,n=Ze,s=Jt,r=Je,o=pe,h=Be,c=a.DEFAULT_ANISOTROPY,u=Ye){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Vi(),this.name="",this.source=new Nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===$n?me:Ye),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ai:t.x=t.x-Math.floor(t.x);break;case Ze:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ai:t.y=t.y-Math.floor(t.y);break;case Ze:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===me?$n:Ld}set encoding(t){Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===$n?me:Ye}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=wd;$e.DEFAULT_ANISOTROPY=1;var ne=class a{constructor(t=0,e=0,i=0,n=1){a.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*e+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*e+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*e+r[7]*i+r[11]*n+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,h=t.elements,c=h[0],u=h[4],l=h[8],d=h[1],f=h[5],g=h[9],b=h[2],m=h[6],p=h[10];if(Math.abs(u-d)<.01&&Math.abs(l-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(l+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,w=(f+1)/2,R=(p+1)/2,y=(u+d)/4,E=(l+b)/4,A=(g+m)/4;return x>w&&x>R?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=y/i,s=E/i):w>R?w<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(w),i=y/n,s=A/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=E/s,n=A/s),this.set(i,n,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(l-b)*(l-b)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(l-b)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Uh=class extends In{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(Pa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===$n?me:Ye),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new $e(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Nr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Te=class extends Uh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Br=class extends $e{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oh=class extends $e{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _t=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,r,o){let h=i[n+0],c=i[n+1],u=i[n+2],l=i[n+3],d=s[r+0],f=s[r+1],g=s[r+2],b=s[r+3];if(o===0){t[e+0]=h,t[e+1]=c,t[e+2]=u,t[e+3]=l;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=b;return}if(l!==b||h!==d||c!==f||u!==g){let m=1-o,p=h*d+c*f+u*g+l*b,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let R=Math.sqrt(x),y=Math.atan2(R,p*v);m=Math.sin(m*y)/R,o=Math.sin(o*y)/R}let w=o*v;if(h=h*m+d*w,c=c*m+f*w,u=u*m+g*w,l=l*m+b*w,m===1-o){let R=1/Math.sqrt(h*h+c*c+u*u+l*l);h*=R,c*=R,u*=R,l*=R}}t[e]=h,t[e+1]=c,t[e+2]=u,t[e+3]=l}static multiplyQuaternionsFlat(t,e,i,n,s,r){let o=i[n],h=i[n+1],c=i[n+2],u=i[n+3],l=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return t[e]=o*g+u*l+h*f-c*d,t[e+1]=h*g+u*d+c*l-o*f,t[e+2]=c*g+u*f+o*d-h*l,t[e+3]=u*g-o*l-h*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,r=t._order,o=Math.cos,h=Math.sin,c=o(i/2),u=o(n/2),l=o(s/2),d=h(i/2),f=h(n/2),g=h(s/2);switch(r){case"XYZ":this._x=d*u*l+c*f*g,this._y=c*f*l-d*u*g,this._z=c*u*g+d*f*l,this._w=c*u*l-d*f*g;break;case"YXZ":this._x=d*u*l+c*f*g,this._y=c*f*l-d*u*g,this._z=c*u*g-d*f*l,this._w=c*u*l+d*f*g;break;case"ZXY":this._x=d*u*l-c*f*g,this._y=c*f*l+d*u*g,this._z=c*u*g+d*f*l,this._w=c*u*l-d*f*g;break;case"ZYX":this._x=d*u*l-c*f*g,this._y=c*f*l+d*u*g,this._z=c*u*g-d*f*l,this._w=c*u*l+d*f*g;break;case"YZX":this._x=d*u*l+c*f*g,this._y=c*f*l+d*u*g,this._z=c*u*g-d*f*l,this._w=c*u*l-d*f*g;break;case"XZY":this._x=d*u*l-c*f*g,this._y=c*f*l-d*u*g,this._z=c*u*g+d*f*l,this._w=c*u*l+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],r=e[1],o=e[5],h=e[9],c=e[2],u=e[6],l=e[10],d=i+o+l;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-h)*f,this._y=(s-c)*f,this._z=(r-n)*f}else if(i>o&&i>l){let f=2*Math.sqrt(1+i-o-l);this._w=(u-h)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+c)/f}else if(o>l){let f=2*Math.sqrt(1+o-i-l);this._w=(s-c)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(h+u)/f}else{let f=2*Math.sqrt(1+l-i-o);this._w=(r-n)/f,this._x=(s+c)/f,this._y=(h+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,r=t._w,o=e._x,h=e._y,c=e._z,u=e._w;return this._x=i*u+r*o+n*c-s*h,this._y=n*u+r*h+s*o-i*c,this._z=s*u+r*c+i*h-n*o,this._w=r*u-i*o-n*h-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,r=this._w,o=r*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=n,this._z=s,this;let h=1-o*o;if(h<=Number.EPSILON){let f=1-e;return this._w=f*r+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(h),u=Math.atan2(c,o),l=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=r*l+this._w*d,this._x=i*l+this._x*d,this._y=n*l+this._y*d,this._z=s*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class a{constructor(t=0,e=0,i=0){a.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,r=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,r=t.y,o=t.z,h=t.w,c=2*(r*n-o*i),u=2*(o*e-s*n),l=2*(s*i-r*e);return this.x=e+h*c+r*l-o*u,this.y=i+h*u+o*c-s*l,this.z=n+h*l+s*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,r=e.x,o=e.y,h=e.z;return this.x=n*h-s*o,this.y=s*r-i*h,this.z=i*o-n*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return nh.copy(this).projectOnVector(t),this.sub(nh)}reflect(t){return this.sub(nh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nh=new M,bu=new _t,Fi=class{constructor(t=new M(1/0,1/0,1/0),e=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ni):Ni.fromBufferAttribute(s,r),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tr.copy(i.boundingBox)),tr.applyMatrix4(t.matrixWorld),this.union(tr)}let n=t.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ba),er.subVectors(this.max,ba),gs.subVectors(t.a,ba),bs.subVectors(t.b,ba),vs.subVectors(t.c,ba),En.subVectors(bs,gs),Tn.subVectors(vs,bs),Wn.subVectors(gs,vs);let e=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Wn.z,Wn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Wn.z,0,-Wn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Wn.y,Wn.x,0];return!sh(e,gs,bs,vs,er)||(e=[1,0,0,0,1,0,0,0,1],!sh(e,gs,bs,vs,er))?!1:(ir.crossVectors(En,Tn),e=[ir.x,ir.y,ir.z],sh(e,gs,bs,vs,er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},on=[new M,new M,new M,new M,new M,new M,new M,new M],Ni=new M,tr=new Fi,gs=new M,bs=new M,vs=new M,En=new M,Tn=new M,Wn=new M,ba=new M,er=new M,ir=new M,qn=new M;function sh(a,t,e,i,n){for(let s=0,r=a.length-3;s<=r;s+=3){qn.fromArray(a,s);let o=n.x*Math.abs(qn.x)+n.y*Math.abs(qn.y)+n.z*Math.abs(qn.z),h=t.dot(qn),c=e.dot(qn),u=i.dot(qn);if(Math.max(-Math.max(h,c,u),Math.min(h,c,u))>o)return!1}return!0}var Hp=new Fi,va=new M,ah=new M,Ti=class{constructor(t=new M,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Hp.setFromPoints(t).getCenter(i);let n=0;for(let s=0,r=t.length;s<r;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;va.subVectors(t,this.center);let e=va.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(va,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(va.copy(t.center).add(ah)),this.expandByPoint(va.copy(t.center).sub(ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},hn=new M,rh=new M,nr=new M,Sn=new M,oh=new M,sr=new M,hh=new M,Ws=class{constructor(t=new M,e=new M(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){rh.copy(t).add(e).multiplyScalar(.5),nr.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(rh);let s=t.distanceTo(e)*.5,r=-this.direction.dot(nr),o=Sn.dot(this.direction),h=-Sn.dot(nr),c=Sn.lengthSq(),u=Math.abs(1-r*r),l,d,f,g;if(u>0)if(l=r*h-o,d=r*o-h,g=s*u,l>=0)if(d>=-g)if(d<=g){let b=1/u;l*=b,d*=b,f=l*(l+r*d+2*o)+d*(r*l+d+2*h)+c}else d=s,l=Math.max(0,-(r*d+o)),f=-l*l+d*(d+2*h)+c;else d=-s,l=Math.max(0,-(r*d+o)),f=-l*l+d*(d+2*h)+c;else d<=-g?(l=Math.max(0,-(-r*s+o)),d=l>0?-s:Math.min(Math.max(-s,-h),s),f=-l*l+d*(d+2*h)+c):d<=g?(l=0,d=Math.min(Math.max(-s,-h),s),f=d*(d+2*h)+c):(l=Math.max(0,-(r*s+o)),d=l>0?s:Math.min(Math.max(-s,-h),s),f=-l*l+d*(d+2*h)+c);else d=r>0?-s:s,l=Math.max(0,-(r*d+o)),f=-l*l+d*(d+2*h)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,l),n&&n.copy(rh).addScaledVector(nr,d),f}intersectSphere(t,e){hn.subVectors(t.center,this.origin);let i=hn.dot(this.direction),n=hn.dot(hn)-i*i,s=t.radius*t.radius;if(n>s)return null;let r=Math.sqrt(s-n),o=i-r,h=i+r;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,r,o,h,c=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),l>=0?(o=(t.min.z-d.z)*l,h=(t.max.z-d.z)*l):(o=(t.max.z-d.z)*l,h=(t.min.z-d.z)*l),i>h||o>n)||((o>i||i!==i)&&(i=o),(h<n||n!==n)&&(n=h),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,i,n,s){oh.subVectors(e,t),sr.subVectors(i,t),hh.crossVectors(oh,sr);let r=this.direction.dot(hh),o;if(r>0){if(n)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Sn.subVectors(this.origin,t);let h=o*this.direction.dot(sr.crossVectors(Sn,sr));if(h<0)return null;let c=o*this.direction.dot(oh.cross(Sn));if(c<0||h+c>r)return null;let u=-o*Sn.dot(hh);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class a{constructor(t,e,i,n,s,r,o,h,c,u,l,d,f,g,b,m){a.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,r,o,h,c,u,l,d,f,g,b,m)}set(t,e,i,n,s,r,o,h,c,u,l,d,f,g,b,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=r,p[9]=o,p[13]=h,p[2]=c,p[6]=u,p[10]=l,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/xs.setFromMatrixColumn(t,0).length(),s=1/xs.setFromMatrixColumn(t,1).length(),r=1/xs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),h=Math.cos(n),c=Math.sin(n),u=Math.cos(s),l=Math.sin(s);if(t.order==="XYZ"){let d=r*u,f=r*l,g=o*u,b=o*l;e[0]=h*u,e[4]=-h*l,e[8]=c,e[1]=f+g*c,e[5]=d-b*c,e[9]=-o*h,e[2]=b-d*c,e[6]=g+f*c,e[10]=r*h}else if(t.order==="YXZ"){let d=h*u,f=h*l,g=c*u,b=c*l;e[0]=d+b*o,e[4]=g*o-f,e[8]=r*c,e[1]=r*l,e[5]=r*u,e[9]=-o,e[2]=f*o-g,e[6]=b+d*o,e[10]=r*h}else if(t.order==="ZXY"){let d=h*u,f=h*l,g=c*u,b=c*l;e[0]=d-b*o,e[4]=-r*l,e[8]=g+f*o,e[1]=f+g*o,e[5]=r*u,e[9]=b-d*o,e[2]=-r*c,e[6]=o,e[10]=r*h}else if(t.order==="ZYX"){let d=r*u,f=r*l,g=o*u,b=o*l;e[0]=h*u,e[4]=g*c-f,e[8]=d*c+b,e[1]=h*l,e[5]=b*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*h,e[10]=r*h}else if(t.order==="YZX"){let d=r*h,f=r*c,g=o*h,b=o*c;e[0]=h*u,e[4]=b-d*l,e[8]=g*l+f,e[1]=l,e[5]=r*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*l+g,e[10]=d-b*l}else if(t.order==="XZY"){let d=r*h,f=r*c,g=o*h,b=o*c;e[0]=h*u,e[4]=-l,e[8]=c*u,e[1]=d*l+b,e[5]=r*u,e[9]=f*l-g,e[2]=g*l-f,e[6]=o*u,e[10]=b*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vp,t,Gp)}lookAt(t,e,i){let n=this.elements;return wi.subVectors(t,e),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),An.crossVectors(i,wi),An.lengthSq()===0&&(Math.abs(i.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),An.crossVectors(i,wi)),An.normalize(),ar.crossVectors(wi,An),n[0]=An.x,n[4]=ar.x,n[8]=wi.x,n[1]=An.y,n[5]=ar.y,n[9]=wi.y,n[2]=An.z,n[6]=ar.z,n[10]=wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,r=i[0],o=i[4],h=i[8],c=i[12],u=i[1],l=i[5],d=i[9],f=i[13],g=i[2],b=i[6],m=i[10],p=i[14],v=i[3],x=i[7],w=i[11],R=i[15],y=n[0],E=n[4],A=n[8],_=n[12],T=n[1],I=n[5],G=n[9],q=n[13],U=n[2],z=n[6],J=n[10],V=n[14],H=n[3],N=n[7],P=n[11],W=n[15];return s[0]=r*y+o*T+h*U+c*H,s[4]=r*E+o*I+h*z+c*N,s[8]=r*A+o*G+h*J+c*P,s[12]=r*_+o*q+h*V+c*W,s[1]=u*y+l*T+d*U+f*H,s[5]=u*E+l*I+d*z+f*N,s[9]=u*A+l*G+d*J+f*P,s[13]=u*_+l*q+d*V+f*W,s[2]=g*y+b*T+m*U+p*H,s[6]=g*E+b*I+m*z+p*N,s[10]=g*A+b*G+m*J+p*P,s[14]=g*_+b*q+m*V+p*W,s[3]=v*y+x*T+w*U+R*H,s[7]=v*E+x*I+w*z+R*N,s[11]=v*A+x*G+w*J+R*P,s[15]=v*_+x*q+w*V+R*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],r=t[1],o=t[5],h=t[9],c=t[13],u=t[2],l=t[6],d=t[10],f=t[14],g=t[3],b=t[7],m=t[11],p=t[15];return g*(+s*h*l-n*c*l-s*o*d+i*c*d+n*o*f-i*h*f)+b*(+e*h*f-e*c*d+s*r*d-n*r*f+n*c*u-s*h*u)+m*(+e*c*l-e*o*f-s*r*l+i*r*f+s*o*u-i*c*u)+p*(-n*o*u-e*h*l+e*o*d+n*r*l-i*r*d+i*h*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],r=t[4],o=t[5],h=t[6],c=t[7],u=t[8],l=t[9],d=t[10],f=t[11],g=t[12],b=t[13],m=t[14],p=t[15],v=l*m*c-b*d*c+b*h*f-o*m*f-l*h*p+o*d*p,x=g*d*c-u*m*c-g*h*f+r*m*f+u*h*p-r*d*p,w=u*b*c-g*l*c+g*o*f-r*b*f-u*o*p+r*l*p,R=g*l*h-u*b*h-g*o*d+r*b*d+u*o*m-r*l*m,y=e*v+i*x+n*w+s*R;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/y;return t[0]=v*E,t[1]=(b*d*s-l*m*s-b*n*f+i*m*f+l*n*p-i*d*p)*E,t[2]=(o*m*s-b*h*s+b*n*c-i*m*c-o*n*p+i*h*p)*E,t[3]=(l*h*s-o*d*s-l*n*c+i*d*c+o*n*f-i*h*f)*E,t[4]=x*E,t[5]=(u*m*s-g*d*s+g*n*f-e*m*f-u*n*p+e*d*p)*E,t[6]=(g*h*s-r*m*s-g*n*c+e*m*c+r*n*p-e*h*p)*E,t[7]=(r*d*s-u*h*s+u*n*c-e*d*c-r*n*f+e*h*f)*E,t[8]=w*E,t[9]=(g*l*s-u*b*s-g*i*f+e*b*f+u*i*p-e*l*p)*E,t[10]=(r*b*s-g*o*s+g*i*c-e*b*c-r*i*p+e*o*p)*E,t[11]=(u*o*s-r*l*s-u*i*c+e*l*c+r*i*f-e*o*f)*E,t[12]=R*E,t[13]=(u*b*n-g*l*n+g*i*d-e*b*d-u*i*m+e*l*m)*E,t[14]=(g*o*n-r*b*n-g*i*h+e*b*h+r*i*m-e*o*m)*E,t[15]=(r*l*n-u*o*n+u*i*h-e*l*h-r*i*d+e*o*d)*E,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,r=t.x,o=t.y,h=t.z,c=s*r,u=s*o;return this.set(c*r+i,c*o-n*h,c*h+n*o,0,c*o+n*h,u*o+i,u*h-n*r,0,c*h-n*o,u*h+n*r,s*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,r){return this.set(1,i,s,0,t,1,r,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,r=e._y,o=e._z,h=e._w,c=s+s,u=r+r,l=o+o,d=s*c,f=s*u,g=s*l,b=r*u,m=r*l,p=o*l,v=h*c,x=h*u,w=h*l,R=i.x,y=i.y,E=i.z;return n[0]=(1-(b+p))*R,n[1]=(f+w)*R,n[2]=(g-x)*R,n[3]=0,n[4]=(f-w)*y,n[5]=(1-(d+p))*y,n[6]=(m+v)*y,n[7]=0,n[8]=(g+x)*E,n[9]=(m-v)*E,n[10]=(1-(d+b))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=xs.set(n[0],n[1],n[2]).length(),r=xs.set(n[4],n[5],n[6]).length(),o=xs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Bi.copy(this);let c=1/s,u=1/r,l=1/o;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=u,Bi.elements[5]*=u,Bi.elements[6]*=u,Bi.elements[8]*=l,Bi.elements[9]*=l,Bi.elements[10]*=l,e.setFromRotationMatrix(Bi),i.x=s,i.y=r,i.z=o,this}makePerspective(t,e,i,n,s,r,o=gn){let h=this.elements,c=2*s/(e-t),u=2*s/(i-n),l=(e+t)/(e-t),d=(i+n)/(i-n),f,g;if(o===gn)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===zr)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=l,h[12]=0,h[1]=0,h[5]=u,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=f,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,n,s,r,o=gn){let h=this.elements,c=1/(e-t),u=1/(i-n),l=1/(r-s),d=(e+t)*c,f=(i+n)*u,g,b;if(o===gn)g=(r+s)*l,b=-2*l;else if(o===zr)g=s*l,b=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*c,h[4]=0,h[8]=0,h[12]=-d,h[1]=0,h[5]=2*u,h[9]=0,h[13]=-f,h[2]=0,h[6]=0,h[10]=b,h[14]=-g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},xs=new M,Bi=new Rt,Vp=new M(0,0,0),Gp=new M(1,1,1),An=new M,ar=new M,wi=new M,vu=new Rt,xu=new _t,gi=class a{constructor(t=0,e=0,i=0,n=a.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],r=n[4],o=n[8],h=n[1],c=n[5],u=n[9],l=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-l,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-l,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-He(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return vu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xu.setFromEuler(this),this.setFromQuaternion(xu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wp=0,yu=new M,ys=new _t,cn=new Rt,rr=new M,xa=new M,qp=new M,Xp=new _t,_u=new M(1,0,0),wu=new M(0,1,0),Mu=new M(0,0,1),Kp={type:"added"},jp={type:"removed"},Pe=class a extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let t=new M,e=new gi,i=new _t,n=new M(1,1,1);function s(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Rt},normalMatrix:{value:new ie}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,e){return ys.setFromAxisAngle(t,e),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(_u,t)}rotateY(t){return this.rotateOnAxis(wu,t)}rotateZ(t){return this.rotateOnAxis(Mu,t)}translateOnAxis(t,e){return yu.copy(t).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_u,t)}translateY(t){return this.translateOnAxis(wu,t)}translateZ(t){return this.translateOnAxis(Mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?rr.copy(t):rr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(xa,rr,this.up):cn.lookAt(rr,xa,this.up),this.quaternion.setFromRotationMatrix(cn),n&&(cn.extractRotation(n.matrixWorld),ys.setFromRotationMatrix(cn),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Kp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,t,qp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,Xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,r=n.length;s<r;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let c=0,u=h.length;c<u;c++){let l=h[c];s(t.shapes,l)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(s(t.materials,this.material[h]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];n.animations.push(s(t.animations,h))}}if(e){let o=r(t.geometries),h=r(t.materials),c=r(t.textures),u=r(t.images),l=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),l.length>0&&(i.shapes=l),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(o){let h=[];for(let c in o){let u=o[c];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Pe.DEFAULT_UP=new M(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=new M,ln=new M,ch=new M,un=new M,_s=new M,ws=new M,Eu=new M,lh=new M,uh=new M,dh=new M,or=!1,Qn=class a{constructor(t=new M,e=new M,i=new M){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Hi.subVectors(t,e),n.cross(Hi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Hi.subVectors(n,e),ln.subVectors(i,e),ch.subVectors(t,e);let r=Hi.dot(Hi),o=Hi.dot(ln),h=Hi.dot(ch),c=ln.dot(ln),u=ln.dot(ch),l=r*c-o*o;if(l===0)return s.set(0,0,0),null;let d=1/l,f=(c*h-o*u)*d,g=(r*u-o*h)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(t,e,i,n,s,r,o,h){return or===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),or=!0),this.getInterpolation(t,e,i,n,s,r,o,h)}static getInterpolation(t,e,i,n,s,r,o,h){return this.getBarycoord(t,e,i,n,un)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,un.x),h.addScaledVector(r,un.y),h.addScaledVector(o,un.z),h)}static isFrontFacing(t,e,i,n){return Hi.subVectors(i,e),ln.subVectors(t,e),Hi.cross(ln).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Hi.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return a.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return a.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return or===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),or=!0),a.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return a.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return a.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return a.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,r,o;_s.subVectors(n,i),ws.subVectors(s,i),lh.subVectors(t,i);let h=_s.dot(lh),c=ws.dot(lh);if(h<=0&&c<=0)return e.copy(i);uh.subVectors(t,n);let u=_s.dot(uh),l=ws.dot(uh);if(u>=0&&l<=u)return e.copy(n);let d=h*l-u*c;if(d<=0&&h>=0&&u<=0)return r=h/(h-u),e.copy(i).addScaledVector(_s,r);dh.subVectors(t,s);let f=_s.dot(dh),g=ws.dot(dh);if(g>=0&&f<=g)return e.copy(s);let b=f*c-h*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(ws,o);let m=u*g-f*l;if(m<=0&&l-u>=0&&f-g>=0)return Eu.subVectors(s,n),o=(l-u)/(l-u+(f-g)),e.copy(n).addScaledVector(Eu,o);let p=1/(m+b+d);return r=b*p,o=d*p,e.copy(i).addScaledVector(_s,r).addScaledVector(ws,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function fh(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}var Dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=de.workingColorSpace){return this.r=t,this.g=e,this.b=i,de.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=de.workingColorSpace){if(t=Tc(t,1),e=He(e,0,1),i=He(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,r=2*i-s;this.r=fh(r,s,t+1/3),this.g=fh(r,s,t),this.b=fh(r,s,t-1/3)}return de.toWorkingColorSpace(this,n),this}setStyle(t,e=me){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let i=Dd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}copyLinearToSRGB(t){return this.r=eh(t.r),this.g=eh(t.g),this.b=eh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return de.fromWorkingColorSpace(si.copy(this),t),Math.round(He(si.r*255,0,255))*65536+Math.round(He(si.g*255,0,255))*256+Math.round(He(si.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(si.copy(this),e);let i=si.r,n=si.g,s=si.b,r=Math.max(i,n,s),o=Math.min(i,n,s),h,c,u=(o+r)/2;if(o===r)h=0,c=0;else{let l=r-o;switch(c=u<=.5?l/(r+o):l/(2-r-o),r){case i:h=(n-s)/l+(n<s?6:0);break;case n:h=(s-i)/l+2;break;case s:h=(i-n)/l+4;break}h/=6}return t.h=h,t.s=c,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(si.copy(this),e),t.r=si.r,t.g=si.g,t.b=si.b,t}getStyle(t=me){de.fromWorkingColorSpace(si.copy(this),t);let e=si.r,i=si.g,n=si.b;return t!==me?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(hr);let i=Ca(Rn.h,hr.h,e),n=Ca(Rn.s,hr.s,e),s=Ca(Rn.l,hr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},si=new Dt;Dt.NAMES=Dd;var Yp=0,bi=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Fn,this.side=Qe,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Lh,this.blendEquation=pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fn&&(i.blending=this.blending),this.side!==Qe&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ka&&(i.blendSrc=this.blendSrc),this.blendDst!==Lh&&(i.blendDst=this.blendDst),this.blendEquation!==pn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let r=[];for(let o in s){let h=s[o];delete h.metadata,r.push(h)}return r}if(e){let s=n(t.textures),r=n(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ge=class extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new M,cr=new gt,Bt=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=kh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Qi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kh&&(t.usage=this.usage),t}};var qs=class extends Bt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Vr=class extends Bt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oe=class extends Bt{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Qp=0,Li=new Rt,ph=new Pe,Ms=new M,Mi=new Fi,ya=new Fi,je=new M,ce=class a extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kd(t)?Vr:qs)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ie().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,e,i){return Li.makeTranslation(t,e,i),this.applyMatrix4(Li),this}scale(t,e,i){return Li.makeScale(t,e,i),this.applyMatrix4(Li),this}lookAt(t){return ph.lookAt(t),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];Mi.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(t){let i=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let o=e[s];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(Mi.min,ya.min),Mi.expandByPoint(je),je.addVectors(Mi.max,ya.max),Mi.expandByPoint(je)):(Mi.expandByPoint(ya.min),Mi.expandByPoint(ya.max))}Mi.getCenter(i);let n=0;for(let s=0,r=t.count;s<r;s++)je.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(je));if(e)for(let s=0,r=e.length;s<r;s++){let o=e[s],h=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)je.fromBufferAttribute(o,c),h&&(Ms.fromBufferAttribute(t,c),je.add(Ms)),n=Math.max(n,i.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,s=e.normal.array,r=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*o),4));let h=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new M,u[T]=new M;let l=new M,d=new M,f=new M,g=new gt,b=new gt,m=new gt,p=new M,v=new M;function x(T,I,G){l.fromArray(n,T*3),d.fromArray(n,I*3),f.fromArray(n,G*3),g.fromArray(r,T*2),b.fromArray(r,I*2),m.fromArray(r,G*2),d.sub(l),f.sub(l),b.sub(g),m.sub(g);let q=1/(b.x*m.y-m.x*b.y);isFinite(q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-b.y).multiplyScalar(q),v.copy(f).multiplyScalar(b.x).addScaledVector(d,-m.x).multiplyScalar(q),c[T].add(p),c[I].add(p),c[G].add(p),u[T].add(v),u[I].add(v),u[G].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let T=0,I=w.length;T<I;++T){let G=w[T],q=G.start,U=G.count;for(let z=q,J=q+U;z<J;z+=3)x(i[z+0],i[z+1],i[z+2])}let R=new M,y=new M,E=new M,A=new M;function _(T){E.fromArray(s,T*3),A.copy(E);let I=c[T];R.copy(I),R.sub(E.multiplyScalar(E.dot(I))).normalize(),y.crossVectors(A,I);let q=y.dot(u[T])<0?-1:1;h[T*4]=R.x,h[T*4+1]=R.y,h[T*4+2]=R.z,h[T*4+3]=q}for(let T=0,I=w.length;T<I;++T){let G=w[T],q=G.start,U=G.count;for(let z=q,J=q+U;z<J;z+=3)_(i[z+0]),_(i[z+1]),_(i[z+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new M,s=new M,r=new M,o=new M,h=new M,c=new M,u=new M,l=new M;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),b=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,b),r.fromBufferAttribute(e,m),u.subVectors(r,s),l.subVectors(n,s),u.cross(l),o.fromBufferAttribute(i,g),h.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(u),h.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,h.x,h.y,h.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,s),l.subVectors(n,s),u.cross(l),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,h){let c=o.array,u=o.itemSize,l=o.normalized,d=new c.constructor(h.length*u),f=0,g=0;for(let b=0,m=h.length;b<m;b++){o.isInterleavedBufferAttribute?f=h[b]*o.data.stride+o.offset:f=h[b]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Bt(d,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new a,i=this.index.array,n=this.attributes;for(let o in n){let h=n[o],c=t(h,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let h=[],c=s[o];for(let u=0,l=c.length;u<l;u++){let d=c[u],f=t(d,i);h.push(f)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,h=r.length;o<h;o++){let c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let h in i){let c=i[h];t.data.attributes[h]=c.toJSON(t.data)}let n={},s=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],u=[];for(let l=0,d=c.length;l<d;l++){let f=c[l];u.push(f.toJSON(t.data))}u.length>0&&(n[h]=u,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],l=s[c];for(let d=0,f=l.length;d<f;d++)u.push(l[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let l=r[c];this.addGroup(l.start,l.count,l.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tu=new Rt,Xn=new Ws,lr=new Ti,Su=new M,Es=new M,Ts=new M,Ss=new M,mh=new M,ur=new M,dr=new gt,fr=new gt,pr=new gt,Au=new M,Ru=new M,Cu=new M,mr=new M,gr=new M,pt=class extends Pe{constructor(t=new ce,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){ur.set(0,0,0);for(let h=0,c=s.length;h<c;h++){let u=o[h],l=s[h];u!==0&&(mh.fromBufferAttribute(l,t),r?ur.addScaledVector(mh,u):ur.addScaledVector(mh.sub(e),u))}e.add(ur)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere),lr.applyMatrix4(s),Xn.copy(t.ray).recast(t.near),!(lr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(lr,Su)===null||Xn.origin.distanceToSquared(Su)>(t.far-t.near)**2))&&(Tu.copy(s).invert(),Xn.copy(t.ray).applyMatrix4(Tu),!(i.boundingBox!==null&&Xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,i){let n,s=this.geometry,r=this.material,o=s.index,h=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,l=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=v,R=x;w<R;w+=3){let y=o.getX(w),E=o.getX(w+1),A=o.getX(w+2);n=br(this,p,t,i,c,u,l,y,E,A),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=o.getX(m),x=o.getX(m+1),w=o.getX(m+2);n=br(this,r,t,i,c,u,l,v,x,w),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(h!==void 0)if(Array.isArray(r))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(h.count,Math.min(m.start+m.count,f.start+f.count));for(let w=v,R=x;w<R;w+=3){let y=w,E=w+1,A=w+2;n=br(this,p,t,i,c,u,l,y,E,A),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),b=Math.min(h.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=m,x=m+1,w=m+2;n=br(this,r,t,i,c,u,l,v,x,w),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Zp(a,t,e,i,n,s,r,o){let h;if(t.side===Ce?h=i.intersectTriangle(r,s,n,!0,o):h=i.intersectTriangle(n,s,r,t.side===Qe,o),h===null)return null;gr.copy(o),gr.applyMatrix4(a.matrixWorld);let c=e.ray.origin.distanceTo(gr);return c<e.near||c>e.far?null:{distance:c,point:gr.clone(),object:a}}function br(a,t,e,i,n,s,r,o,h,c){a.getVertexPosition(o,Es),a.getVertexPosition(h,Ts),a.getVertexPosition(c,Ss);let u=Zp(a,t,e,i,Es,Ts,Ss,mr);if(u){n&&(dr.fromBufferAttribute(n,o),fr.fromBufferAttribute(n,h),pr.fromBufferAttribute(n,c),u.uv=Qn.getInterpolation(mr,Es,Ts,Ss,dr,fr,pr,new gt)),s&&(dr.fromBufferAttribute(s,o),fr.fromBufferAttribute(s,h),pr.fromBufferAttribute(s,c),u.uv1=Qn.getInterpolation(mr,Es,Ts,Ss,dr,fr,pr,new gt),u.uv2=u.uv1),r&&(Au.fromBufferAttribute(r,o),Ru.fromBufferAttribute(r,h),Cu.fromBufferAttribute(r,c),u.normal=Qn.getInterpolation(mr,Es,Ts,Ss,Au,Ru,Cu,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let l={a:o,b:h,c,normal:new M,materialIndex:0};Qn.getNormal(Es,Ts,Ss,l.normal),u.face=l}return u}var ke=class a extends ce{constructor(t=1,e=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};let o=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);let h=[],c=[],u=[],l=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,r,s,0),g("z","y","x",1,-1,i,e,-t,r,s,1),g("x","z","y",1,1,t,i,e,n,r,2),g("x","z","y",1,-1,t,i,-e,n,r,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(h),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(l,2));function g(b,m,p,v,x,w,R,y,E,A,_){let T=w/E,I=R/A,G=w/2,q=R/2,U=y/2,z=E+1,J=A+1,V=0,H=0,N=new M;for(let P=0;P<J;P++){let W=P*I-q;for(let k=0;k<z;k++){let O=k*T-G;N[b]=O*v,N[m]=W*x,N[p]=U,c.push(N.x,N.y,N.z),N[b]=0,N[m]=0,N[p]=y>0?1:-1,u.push(N.x,N.y,N.z),l.push(k/E),l.push(1-P/A),V+=1}}for(let P=0;P<A;P++)for(let W=0;W<E;W++){let k=d+W+z*P,O=d+W+z*(P+1),D=d+(W+1)+z*(P+1),B=d+(W+1)+z*P;h.push(k,O,B),h.push(O,D,B),H+=6}o.addGroup(f,H,_),f+=H,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xs(a){let t={};for(let e in a){t[e]={};for(let i in a[e]){let n=a[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function li(a){let t={};for(let e=0;e<a.length;e++){let i=Xs(a[e]);for(let n in i)t[n]=i[n]}return t}function Jp(a){let t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function zd(a){return a.getRenderTarget()===null?a.outputColorSpace:de.workingColorSpace}var $p={clone:Xs,merge:li},t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,se=class extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=Jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?e.uniforms[n]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[n]={type:"m4",value:r.toArray()}:e.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Gr=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ve=class extends Gr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ra*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,r=this.view;if(this.view!==null&&this.view.enabled){let h=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/h,e-=r.offsetY*i/c,n*=r.width/h,i*=r.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},As=-90,Rs=1,Nh=class extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ve(As,Rs,t,e);n.layers=this.layers,this.add(n);let s=new Ve(As,Rs,t,e);s.layers=this.layers,this.add(s);let r=new Ve(As,Rs,t,e);r.layers=this.layers,this.add(r);let o=new Ve(As,Rs,t,e);o.layers=this.layers,this.add(o);let h=new Ve(As,Rs,t,e);h.layers=this.layers,this.add(h);let c=new Ve(As,Rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,r,o,h]=e;for(let c of e)this.remove(c);if(t===gn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,h,c,u]=this.children,l=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,r),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,h),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,n),t.render(e,u),t.setRenderTarget(l,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Wr=class extends $e{constructor(t,e,i,n,s,r,o,h,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ns,super(t,e,i,n,s,r,o,h,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bh=class extends Te{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(Pa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===$n?me:Ye),this.texture=new Wr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Jt}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ke(5,5,5),s=new se({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ce,blending:Ln});s.uniforms.tEquirect.value=e;let r=new pt(n,s),o=e.minFilter;return e.minFilter===Je&&(e.minFilter=Jt),new Nh(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(s)}},gh=new M,i0=new M,n0=new ie,Ei=class{constructor(t=new M(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=gh.subVectors(i,e).cross(i0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(gh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||n0.getNormalMatrix(t),n=this.coplanarPoint(gh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Kn=new Ti,vr=new M,Ua=class{constructor(t=new Ei,e=new Ei,i=new Ei,n=new Ei,s=new Ei,r=new Ei){this.planes=[t,e,i,n,s,r]}set(t,e,i,n,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(r),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=gn){let i=this.planes,n=t.elements,s=n[0],r=n[1],o=n[2],h=n[3],c=n[4],u=n[5],l=n[6],d=n[7],f=n[8],g=n[9],b=n[10],m=n[11],p=n[12],v=n[13],x=n[14],w=n[15];if(i[0].setComponents(h-s,d-c,m-f,w-p).normalize(),i[1].setComponents(h+s,d+c,m+f,w+p).normalize(),i[2].setComponents(h+r,d+u,m+g,w+v).normalize(),i[3].setComponents(h-r,d-u,m-g,w-v).normalize(),i[4].setComponents(h-o,d-l,m-b,w-x).normalize(),e===gn)i[5].setComponents(h+o,d+l,m+b,w+x).normalize();else if(e===zr)i[5].setComponents(o,l,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(vr.x=n.normal.x>0?t.max.x:t.min.x,vr.y=n.normal.y>0?t.max.y:t.min.y,vr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ud(){let a=null,t=!1,e=null,i=null;function n(s,r){e(s,r),i=a.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=a.requestAnimationFrame(n),t=!0)},stop:function(){a.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function s0(a,t){let e=t.isWebGL2,i=new WeakMap;function n(c,u){let l=c.array,d=c.usage,f=l.byteLength,g=a.createBuffer();a.bindBuffer(u,g),a.bufferData(u,l,d),c.onUploadCallback();let b;if(l instanceof Float32Array)b=a.FLOAT;else if(l instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)b=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)b=a.SHORT;else if(l instanceof Uint32Array)b=a.UNSIGNED_INT;else if(l instanceof Int32Array)b=a.INT;else if(l instanceof Int8Array)b=a.BYTE;else if(l instanceof Uint8Array)b=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)b=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:g,type:b,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,l){let d=u.array,f=u._updateRange,g=u.updateRanges;if(a.bindBuffer(l,c),f.count===-1&&g.length===0&&a.bufferSubData(l,0,d),g.length!==0){for(let b=0,m=g.length;b<m;b++){let p=g[b];e?a.bufferSubData(l,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):a.bufferSubData(l,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(e?a.bufferSubData(l,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):a.bufferSubData(l,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);u&&(a.deleteBuffer(u.buffer),i.delete(c))}function h(c,u){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let l=i.get(c);if(l===void 0)i.set(c,n(c,u));else if(l.version<c.version){if(l.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(l.buffer,c,u),l.version=c.version}}return{get:r,remove:o,update:h}}var Si=class a extends ce{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,r=e/2,o=Math.floor(i),h=Math.floor(n),c=o+1,u=h+1,l=t/o,d=e/h,f=[],g=[],b=[],m=[];for(let p=0;p<u;p++){let v=p*d-r;for(let x=0;x<c;x++){let w=x*l-s;g.push(w,-v,0),b.push(0,0,1),m.push(x/o),m.push(1-p/h)}}for(let p=0;p<h;p++)for(let v=0;v<o;v++){let x=v+c*p,w=v+c*(p+1),R=v+1+c*(p+1),y=v+1+c*p;f.push(x,w,y),f.push(w,R,y)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(b,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.width,t.height,t.widthSegments,t.heightSegments)}},a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r0=`#ifdef USE_ALPHAHASH
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
#endif`,o0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,l0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u0=`#ifdef USE_AOMAP
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
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f0=`#ifdef USE_BATCHING
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
#endif`,p0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,m0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v0=`#ifdef USE_IRIDESCENCE
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
#endif`,x0=`#ifdef USE_BUMPMAP
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,R0=`#define PI 3.141592653589793
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
} // validated`,C0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P0=`vec3 transformedNormal = objectNormal;
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
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`
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
}`,U0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
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
}`,K0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z0=`uniform bool receiveShadow;
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
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#endif`,sm=`struct PhysicalMaterial {
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
}`,am=`
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mm=`#if defined( USE_POINTS_UV )
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
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
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
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
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
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
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
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`#include <common>
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
}`,ug=`#if DEPTH_PACKING == 3200
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
}`,dg=`#define DISTANCE
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
}`,fg=`#define DISTANCE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
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
}`,bg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#define LAMBERT
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
}`,_g=`#define LAMBERT
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
}`,wg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,Eg=`#define NORMAL
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
}`,Tg=`#define NORMAL
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
}`,Sg=`#define PHONG
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
}`,Ag=`#define PHONG
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
}`,Pg=`#define TOON
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
}`,Lg=`#define TOON
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
}`,Fg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Dg=`uniform vec3 color;
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
}`,zg=`uniform float rotation;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:a0,alphahash_pars_fragment:r0,alphamap_fragment:o0,alphamap_pars_fragment:h0,alphatest_fragment:c0,alphatest_pars_fragment:l0,aomap_fragment:u0,aomap_pars_fragment:d0,batching_pars_vertex:f0,batching_vertex:p0,begin_vertex:m0,beginnormal_vertex:g0,bsdfs:b0,iridescence_fragment:v0,bumpmap_pars_fragment:x0,clipping_planes_fragment:y0,clipping_planes_pars_fragment:_0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:M0,color_fragment:E0,color_pars_fragment:T0,color_pars_vertex:S0,color_vertex:A0,common:R0,cube_uv_reflection_fragment:C0,defaultnormal_vertex:P0,displacementmap_pars_vertex:L0,displacementmap_vertex:F0,emissivemap_fragment:I0,emissivemap_pars_fragment:k0,colorspace_fragment:D0,colorspace_pars_fragment:z0,envmap_fragment:U0,envmap_common_pars_fragment:O0,envmap_pars_fragment:N0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:J0,envmap_vertex:H0,fog_vertex:V0,fog_pars_vertex:G0,fog_fragment:W0,fog_pars_fragment:q0,gradientmap_pars_fragment:X0,lightmap_fragment:K0,lightmap_pars_fragment:j0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:Q0,lights_pars_begin:Z0,lights_toon_fragment:$0,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:im,lights_physical_fragment:nm,lights_physical_pars_fragment:sm,lights_fragment_begin:am,lights_fragment_maps:rm,lights_fragment_end:om,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:um,map_fragment:dm,map_pars_fragment:fm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:gm,metalnessmap_pars_fragment:bm,morphcolor_vertex:vm,morphnormal_vertex:xm,morphtarget_pars_vertex:ym,morphtarget_vertex:_m,normal_fragment_begin:wm,normal_fragment_maps:Mm,normal_pars_fragment:Em,normal_pars_vertex:Tm,normal_vertex:Sm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Lm,opaque_fragment:Fm,packing:Im,premultiplied_alpha_fragment:km,project_vertex:Dm,dithering_fragment:zm,dithering_pars_fragment:Um,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Vm,shadowmask_pars_fragment:Gm,skinbase_vertex:Wm,skinning_pars_vertex:qm,skinning_vertex:Xm,skinnormal_vertex:Km,specularmap_fragment:jm,specularmap_pars_fragment:Ym,tonemapping_fragment:Qm,tonemapping_pars_fragment:Zm,transmission_fragment:Jm,transmission_pars_fragment:$m,uv_pars_fragment:tg,uv_pars_vertex:eg,uv_vertex:ig,worldpos_vertex:ng,background_vert:sg,background_frag:ag,backgroundCube_vert:rg,backgroundCube_frag:og,cube_vert:hg,cube_frag:cg,depth_vert:lg,depth_frag:ug,distanceRGBA_vert:dg,distanceRGBA_frag:fg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:bg,meshbasic_vert:vg,meshbasic_frag:xg,meshlambert_vert:yg,meshlambert_frag:_g,meshmatcap_vert:wg,meshmatcap_frag:Mg,meshnormal_vert:Eg,meshnormal_frag:Tg,meshphong_vert:Sg,meshphong_frag:Ag,meshphysical_vert:Rg,meshphysical_frag:Cg,meshtoon_vert:Pg,meshtoon_frag:Lg,points_vert:Fg,points_frag:Ig,shadow_vert:kg,shadow_frag:Dg,sprite_vert:zg,sprite_frag:Ug},Mt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Yi={basic:{uniforms:li([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:li([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:li([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:li([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:li([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:li([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:li([Mt.points,Mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:li([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:li([Mt.common,Mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:li([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:li([Mt.sprite,Mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:li([Mt.common,Mt.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:li([Mt.lights,Mt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Yi.physical={uniforms:li([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var xr={r:0,b:0,g:0};function Og(a,t,e,i,n,s,r){let o=new Dt(0),h=s===!0?0:1,c,u,l=null,d=0,f=null;function g(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?b(o,h):x&&x.isColor&&(b(x,1),v=!0);let w=a.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(a.autoClear||v)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ro)?(u===void 0&&(u=new pt(new ke(1,1,1),new se({name:"BackgroundCubeMaterial",uniforms:Xs(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=de.getTransfer(x.colorSpace)!==we,(l!==x||d!==x.version||f!==a.toneMapping)&&(u.material.needsUpdate=!0,l=x,d=x.version,f=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new pt(new Si(2,2),new se({name:"BackgroundMaterial",uniforms:Xs(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=de.getTransfer(x.colorSpace)!==we,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||d!==x.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,l=x,d=x.version,f=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function b(m,p){m.getRGB(xr,zd(a)),i.buffers.color.setClear(xr.r,xr.g,xr.b,p,r)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),h=p,b(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,b(o,h)},render:g}}function Ng(a,t,e,i){let n=a.getParameter(a.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,o={},h=m(null),c=h,u=!1;function l(U,z,J,V,H){let N=!1;if(r){let P=b(V,J,z);c!==P&&(c=P,f(c.object)),N=p(U,V,J,H),N&&v(U,V,J,H)}else{let P=z.wireframe===!0;(c.geometry!==V.id||c.program!==J.id||c.wireframe!==P)&&(c.geometry=V.id,c.program=J.id,c.wireframe=P,N=!0)}H!==null&&e.update(H,a.ELEMENT_ARRAY_BUFFER),(N||u)&&(u=!1,A(U,z,J,V),H!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function d(){return i.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function f(U){return i.isWebGL2?a.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?a.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function b(U,z,J){let V=J.wireframe===!0,H=o[U.id];H===void 0&&(H={},o[U.id]=H);let N=H[z.id];N===void 0&&(N={},H[z.id]=N);let P=N[V];return P===void 0&&(P=m(d()),N[V]=P),P}function m(U){let z=[],J=[],V=[];for(let H=0;H<n;H++)z[H]=0,J[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:V,object:U,attributes:{},index:null}}function p(U,z,J,V){let H=c.attributes,N=z.attributes,P=0,W=J.getAttributes();for(let k in W)if(W[k].location>=0){let D=H[k],B=N[k];if(B===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(B=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(B=U.instanceColor)),D===void 0||D.attribute!==B||B&&D.data!==B.data)return!0;P++}return c.attributesNum!==P||c.index!==V}function v(U,z,J,V){let H={},N=z.attributes,P=0,W=J.getAttributes();for(let k in W)if(W[k].location>=0){let D=N[k];D===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(D=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(D=U.instanceColor));let B={};B.attribute=D,D&&D.data&&(B.data=D.data),H[k]=B,P++}c.attributes=H,c.attributesNum=P,c.index=V}function x(){let U=c.newAttributes;for(let z=0,J=U.length;z<J;z++)U[z]=0}function w(U){R(U,0)}function R(U,z){let J=c.newAttributes,V=c.enabledAttributes,H=c.attributeDivisors;J[U]=1,V[U]===0&&(a.enableVertexAttribArray(U),V[U]=1),H[U]!==z&&((i.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,z),H[U]=z)}function y(){let U=c.newAttributes,z=c.enabledAttributes;for(let J=0,V=z.length;J<V;J++)z[J]!==U[J]&&(a.disableVertexAttribArray(J),z[J]=0)}function E(U,z,J,V,H,N,P){P===!0?a.vertexAttribIPointer(U,z,J,H,N):a.vertexAttribPointer(U,z,J,V,H,N)}function A(U,z,J,V){if(i.isWebGL2===!1&&(U.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let H=V.attributes,N=J.getAttributes(),P=z.defaultAttributeValues;for(let W in N){let k=N[W];if(k.location>=0){let O=H[W];if(O===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(O=U.instanceColor)),O!==void 0){let D=O.normalized,B=O.itemSize,Y=e.get(O);if(Y===void 0)continue;let Q=Y.buffer,X=Y.type,ot=Y.bytesPerElement,nt=i.isWebGL2===!0&&(X===a.INT||X===a.UNSIGNED_INT||O.gpuType===Md);if(O.isInterleavedBufferAttribute){let lt=O.data,Z=lt.stride,kt=O.offset;if(lt.isInstancedInterleavedBuffer){for(let vt=0;vt<k.locationSize;vt++)R(k.location+vt,lt.meshPerAttribute);U.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let vt=0;vt<k.locationSize;vt++)w(k.location+vt);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let vt=0;vt<k.locationSize;vt++)E(k.location+vt,B/k.locationSize,X,D,Z*ot,(kt+B/k.locationSize*vt)*ot,nt)}else{if(O.isInstancedBufferAttribute){for(let lt=0;lt<k.locationSize;lt++)R(k.location+lt,O.meshPerAttribute);U.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let lt=0;lt<k.locationSize;lt++)w(k.location+lt);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let lt=0;lt<k.locationSize;lt++)E(k.location+lt,B/k.locationSize,X,D,B*ot,B/k.locationSize*lt*ot,nt)}}else if(P!==void 0){let D=P[W];if(D!==void 0)switch(D.length){case 2:a.vertexAttrib2fv(k.location,D);break;case 3:a.vertexAttrib3fv(k.location,D);break;case 4:a.vertexAttrib4fv(k.location,D);break;default:a.vertexAttrib1fv(k.location,D)}}}}y()}function _(){G();for(let U in o){let z=o[U];for(let J in z){let V=z[J];for(let H in V)g(V[H].object),delete V[H];delete z[J]}delete o[U]}}function T(U){if(o[U.id]===void 0)return;let z=o[U.id];for(let J in z){let V=z[J];for(let H in V)g(V[H].object),delete V[H];delete z[J]}delete o[U.id]}function I(U){for(let z in o){let J=o[z];if(J[U.id]===void 0)continue;let V=J[U.id];for(let H in V)g(V[H].object),delete V[H];delete J[U.id]}}function G(){q(),u=!0,c!==h&&(c=h,f(c.object))}function q(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:l,reset:G,resetDefaultState:q,dispose:_,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:w,disableUnusedAttributes:y}}function Bg(a,t,e,i){let n=i.isWebGL2,s;function r(u){s=u}function o(u,l){a.drawArrays(s,u,l),e.update(l,s,1)}function h(u,l,d){if(d===0)return;let f,g;if(n)f=a,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,l,d),e.update(l,s,d)}function c(u,l,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],l[g]);else{f.multiDrawArraysWEBGL(s,u,0,l,0,d);let g=0;for(let b=0;b<d;b++)g+=l[b];e.update(g,s,1)}}this.setMode=r,this.render=o,this.renderInstances=h,this.renderMultiDraw=c}function Hg(a,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",h=s(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);let c=r||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,l=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),d=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_TEXTURE_SIZE),g=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),b=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),p=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,w=r||t.has("OES_texture_float"),R=x&&w,y=r?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:l,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:R,maxSamples:y}}function Vg(a){let t=this,e=null,i=0,n=!1,s=!1,r=new Ei,o=new ie,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){let f=l.length!==0||d||i!==0||n;return n=d,i=l.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(l,d){e=u(l,d,0)},this.setState=function(l,d,f){let g=l.clippingPlanes,b=l.clipIntersection,m=l.clipShadows,p=a.get(l);if(!n||g===null||g.length===0||s&&!m)s?u(null):c();else{let v=s?0:i,x=v*4,w=p.clippingState||null;h.value=w,w=u(g,d,x,f);for(let R=0;R!==x;++R)w[R]=e[R];p.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(l,d,f,g){let b=l!==null?l.length:0,m=null;if(b!==0){if(m=h.value,g!==!0||m===null){let p=f+b*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,w=f;x!==b;++x,w+=4)r.copy(l[x]).applyMatrix4(v,o),r.normal.toArray(m,w),m[w+3]=r.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}function Gg(a){let t=new WeakMap;function e(r,o){return o===Fh?r.mapping=Ns:o===Ih&&(r.mapping=Bs),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===Fh||o===Ih)if(t.has(r)){let h=t.get(r).texture;return e(h,r.mapping)}else{let h=r.image;if(h&&h.height>0){let c=new Bh(h.height/2);return c.fromEquirectangularTexture(a,r),t.set(r,c),r.addEventListener("dispose",n),e(c.texture,r.mapping)}else return null}}return r}function n(r){let o=r.target;o.removeEventListener("dispose",n);let h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var vi=class extends Gr{constructor(t=-1,e=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,r=i+t,o=n+e,h=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ds=4,Pu=[.125,.215,.35,.446,.526,.582],Yn=20,bh=new vi,Lu=new Dt,vh=null,xh=0,yh=0,jn=(1+Math.sqrt(5))/2,Cs=1/jn,Fu=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,jn,Cs),new M(0,jn,-Cs),new M(Cs,0,jn),new M(-Cs,0,jn),new M(jn,Cs,0),new M(-jn,Cs,0)],Ks=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vh,xh,yh),t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:bn,format:pe,colorSpace:Oe,depthBuffer:!1},n=Iu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(s)),this._blurMaterial=qg(s,t,e)}return n}_compileMaterial(t){let e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,bh)}_sceneToCubeUV(t,e,i,n){let o=new Ve(90,1,e,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,l=u.autoClear,d=u.toneMapping;u.getClearColor(Lu),u.toneMapping=Zi,u.autoClear=!1;let f=new Ge({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new pt(new ke,f),b=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,b=!0):(f.color.copy(Lu),b=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(o.up.set(0,h[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,h[p]),o.lookAt(0,c[p],0)):(o.up.set(0,h[p],0),o.lookAt(0,0,c[p]));let x=this._cubeSize;yr(n,v*x,p>2?x:0,x,x),u.setRenderTarget(n),b&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=l,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Ns||t.mapping===Bs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());let s=n?this._cubemapMaterial:this._equirectMaterial,r=new pt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let h=this._cubeSize;yr(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(r,bh)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),r=Fu[(n-1)%Fu.length];this._blur(t,n-1,n,s,r)}e.autoClear=i}_blur(t,e,i,n,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,n,"latitudinal",s),this._halfBlur(r,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,r,o){let h=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,l=new pt(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Yn-1),b=s/g,m=isFinite(s)?1+Math.floor(u*b):Yn;m>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);let p=[],v=0;for(let E=0;E<Yn;++E){let A=E/b,_=Math.exp(-A*A/2);p.push(_),E===0?v+=_:E<m&&(v+=2*_)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;let w=this._sizeLods[n],R=3*w*(n>x-Ds?n-x+Ds:0),y=4*(this._cubeSize-w);yr(e,R,y,3*w,2*w),h.setRenderTarget(e),h.render(l,bh)}};function Wg(a){let t=[],e=[],i=[],n=a,s=a-Ds+1+Pu.length;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let h=1/o;r>a-Ds?h=Pu[r-a+Ds-1]:r===0&&(h=0),i.push(h);let c=1/(o-2),u=-c,l=1+c,d=[u,u,l,u,l,l,u,u,l,l,u,l],f=6,g=6,b=3,m=2,p=1,v=new Float32Array(b*g*f),x=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let y=0;y<f;y++){let E=y%3*2/3-1,A=y>2?0:-1,_=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];v.set(_,b*g*y),x.set(d,m*g*y);let T=[y,y,y,y,y,y];w.set(T,p*g*y)}let R=new ce;R.setAttribute("position",new Bt(v,b)),R.setAttribute("uv",new Bt(x,m)),R.setAttribute("faceIndex",new Bt(w,p)),t.push(R),n>Ds&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Iu(a,t,e){let i=new Te(a,t,e);return i.texture.mapping=ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yr(a,t,e,i,n){a.viewport.set(t,e,i,n),a.scissor.set(t,e,i,n)}function qg(a,t,e){let i=new Float32Array(Yn),n=new M(0,1,0);return new se({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ku(){return new se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Du(){return new se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}function Xg(a){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let h=o.mapping,c=h===Fh||h===Ih,u=h===Ns||h===Bs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=t.get(o);return e===null&&(e=new Ks(a)),l=c?e.fromEquirectangular(o,l):e.fromCubemap(o,l),t.set(o,l),l.texture}else{if(t.has(o))return t.get(o).texture;{let l=o.image;if(c&&l&&l.height>0||u&&l&&n(l)){e===null&&(e=new Ks(a));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function n(o){let h=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&h++;return h===c}function s(o){let h=o.target;h.removeEventListener("dispose",s);let c=t.get(h);c!==void 0&&(t.delete(h),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Kg(a){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function jg(a,t,e,i){let n={},s=new WeakMap;function r(l){let d=l.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let b=d.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)t.remove(b[m])}d.removeEventListener("dispose",r),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(l,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,e.memory.geometries++),d}function h(l){let d=l.attributes;for(let g in d)t.update(d[g],a.ARRAY_BUFFER);let f=l.morphAttributes;for(let g in f){let b=f[g];for(let m=0,p=b.length;m<p;m++)t.update(b[m],a.ARRAY_BUFFER)}}function c(l){let d=[],f=l.index,g=l.attributes.position,b=0;if(f!==null){let v=f.array;b=f.version;for(let x=0,w=v.length;x<w;x+=3){let R=v[x+0],y=v[x+1],E=v[x+2];d.push(R,y,y,E,E,R)}}else if(g!==void 0){let v=g.array;b=g.version;for(let x=0,w=v.length/3-1;x<w;x+=3){let R=x+0,y=x+1,E=x+2;d.push(R,y,y,E,E,R)}}else return;let m=new(kd(d)?Vr:qs)(d,1);m.version=b;let p=s.get(l);p&&t.remove(p),s.set(l,m)}function u(l){let d=s.get(l);if(d){let f=l.index;f!==null&&d.version<f.version&&c(l)}else c(l);return s.get(l)}return{get:o,update:h,getWireframeAttribute:u}}function Yg(a,t,e,i){let n=i.isWebGL2,s;function r(f){s=f}let o,h;function c(f){o=f.type,h=f.bytesPerElement}function u(f,g){a.drawElements(s,g,o,f*h),e.update(g,s,1)}function l(f,g,b){if(b===0)return;let m,p;if(n)m=a,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,f*h,b),e.update(g,s,b)}function d(f,g,b){if(b===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<b;p++)this.render(f[p]/h,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,o,f,0,b);let p=0;for(let v=0;v<b;v++)p+=g[v];e.update(p,s,1)}}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=l,this.renderMultiDraw=d}function Qg(a){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(e.calls++,r){case a.TRIANGLES:e.triangles+=o*(s/3);break;case a.LINES:e.lines+=o*(s/2);break;case a.LINE_STRIP:e.lines+=o*(s-1);break;case a.LINE_LOOP:e.lines+=o*s;break;case a.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Zg(a,t){return a[0]-t[0]}function Jg(a,t){return Math.abs(t[1])-Math.abs(a[1])}function $g(a,t,e){let i={},n=new Float32Array(8),s=new WeakMap,r=new ne,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function h(c,u,l){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0,b=s.get(u);if(b===void 0||b.count!==g){let U=function(){G.dispose(),s.delete(u),u.removeEventListener("dispose",U)};b!==void 0&&b.texture.dispose();let v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],E=u.morphAttributes.color||[],A=0;v===!0&&(A=1),x===!0&&(A=2),w===!0&&(A=3);let _=u.attributes.position.count*A,T=1;_>t.maxTextureSize&&(T=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let I=new Float32Array(_*T*4*g),G=new Br(I,_,T,g);G.type=mn,G.needsUpdate=!0;let q=A*4;for(let z=0;z<g;z++){let J=R[z],V=y[z],H=E[z],N=_*T*4*z;for(let P=0;P<J.count;P++){let W=P*q;v===!0&&(r.fromBufferAttribute(J,P),I[N+W+0]=r.x,I[N+W+1]=r.y,I[N+W+2]=r.z,I[N+W+3]=0),x===!0&&(r.fromBufferAttribute(V,P),I[N+W+4]=r.x,I[N+W+5]=r.y,I[N+W+6]=r.z,I[N+W+7]=0),w===!0&&(r.fromBufferAttribute(H,P),I[N+W+8]=r.x,I[N+W+9]=r.y,I[N+W+10]=r.z,I[N+W+11]=H.itemSize===4?r.w:1)}}b={count:g,texture:G,size:new gt(_,T)},s.set(u,b),u.addEventListener("dispose",U)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let p=u.morphTargetsRelative?1:1-m;l.getUniforms().setValue(a,"morphTargetBaseInfluence",p),l.getUniforms().setValue(a,"morphTargetInfluences",d),l.getUniforms().setValue(a,"morphTargetsTexture",b.texture,e),l.getUniforms().setValue(a,"morphTargetsTextureSize",b.size)}else{let f=d===void 0?0:d.length,g=i[u.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];i[u.id]=g}for(let x=0;x<f;x++){let w=g[x];w[0]=x,w[1]=d[x]}g.sort(Jg);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Zg);let b=u.morphAttributes.position,m=u.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let w=o[x],R=w[0],y=w[1];R!==Number.MAX_SAFE_INTEGER&&y?(b&&u.getAttribute("morphTarget"+x)!==b[R]&&u.setAttribute("morphTarget"+x,b[R]),m&&u.getAttribute("morphNormal"+x)!==m[R]&&u.setAttribute("morphNormal"+x,m[R]),n[x]=y,p+=y):(b&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),n[x]=0)}let v=u.morphTargetsRelative?1:1-p;l.getUniforms().setValue(a,"morphTargetBaseInfluence",v),l.getUniforms().setValue(a,"morphTargetInfluences",n)}}return{update:h}}function tb(a,t,e,i){let n=new WeakMap;function s(h){let c=i.render.frame,u=h.geometry,l=t.get(h,u);if(n.get(l)!==c&&(t.update(l),n.set(l,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),n.get(h)!==c&&(e.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,a.ARRAY_BUFFER),n.set(h,c))),h.isSkinnedMesh){let d=h.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return l}function r(){n=new WeakMap}function o(h){let c=h.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}var es=class extends $e{constructor(t,e,i,n,s,r,o,h,c,u){if(u=u!==void 0?u:Jn,u!==Jn&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Jn&&(i=Cn),i===void 0&&u===Hs&&(i=Zn),super(null,n,s,r,o,h,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ie,this.minFilter=h!==void 0?h:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Od=new $e,Nd=new es(1,1);Nd.compareFunction=Id;var Bd=new Br,Hd=new Oh,Vd=new Wr,zu=[],Uu=[],Ou=new Float32Array(16),Nu=new Float32Array(9),Bu=new Float32Array(4);function ta(a,t,e){let i=a[0];if(i<=0||i>0)return a;let n=t*e,s=zu[n];if(s===void 0&&(s=new Float32Array(n),zu[n]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function We(a,t){if(a.length!==t.length)return!1;for(let e=0,i=a.length;e<i;e++)if(a[e]!==t[e])return!1;return!0}function qe(a,t){for(let e=0,i=t.length;e<i;e++)a[e]=t[e]}function co(a,t){let e=Uu[t];e===void 0&&(e=new Int32Array(t),Uu[t]=e);for(let i=0;i!==t;++i)e[i]=a.allocateTextureUnit();return e}function eb(a,t){let e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function ib(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;a.uniform2fv(this.addr,t),qe(e,t)}}function nb(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;a.uniform3fv(this.addr,t),qe(e,t)}}function sb(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;a.uniform4fv(this.addr,t),qe(e,t)}}function ab(a,t){let e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(We(e,i))return;Bu.set(i),a.uniformMatrix2fv(this.addr,!1,Bu),qe(e,i)}}function rb(a,t){let e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(We(e,i))return;Nu.set(i),a.uniformMatrix3fv(this.addr,!1,Nu),qe(e,i)}}function ob(a,t){let e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(We(e,i))return;Ou.set(i),a.uniformMatrix4fv(this.addr,!1,Ou),qe(e,i)}}function hb(a,t){let e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function cb(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;a.uniform2iv(this.addr,t),qe(e,t)}}function lb(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;a.uniform3iv(this.addr,t),qe(e,t)}}function ub(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;a.uniform4iv(this.addr,t),qe(e,t)}}function db(a,t){let e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function fb(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;a.uniform2uiv(this.addr,t),qe(e,t)}}function pb(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;a.uniform3uiv(this.addr,t),qe(e,t)}}function mb(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;a.uniform4uiv(this.addr,t),qe(e,t)}}function gb(a,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let s=this.type===a.SAMPLER_2D_SHADOW?Nd:Od;e.setTexture2D(t||s,n)}function bb(a,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Hd,n)}function vb(a,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Vd,n)}function xb(a,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Bd,n)}function yb(a){switch(a){case 5126:return eb;case 35664:return ib;case 35665:return nb;case 35666:return sb;case 35674:return ab;case 35675:return rb;case 35676:return ob;case 5124:case 35670:return hb;case 35667:case 35671:return cb;case 35668:case 35672:return lb;case 35669:case 35673:return ub;case 5125:return db;case 36294:return fb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return xb}}function _b(a,t){a.uniform1fv(this.addr,t)}function wb(a,t){let e=ta(t,this.size,2);a.uniform2fv(this.addr,e)}function Mb(a,t){let e=ta(t,this.size,3);a.uniform3fv(this.addr,e)}function Eb(a,t){let e=ta(t,this.size,4);a.uniform4fv(this.addr,e)}function Tb(a,t){let e=ta(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function Sb(a,t){let e=ta(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function Ab(a,t){let e=ta(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function Rb(a,t){a.uniform1iv(this.addr,t)}function Cb(a,t){a.uniform2iv(this.addr,t)}function Pb(a,t){a.uniform3iv(this.addr,t)}function Lb(a,t){a.uniform4iv(this.addr,t)}function Fb(a,t){a.uniform1uiv(this.addr,t)}function Ib(a,t){a.uniform2uiv(this.addr,t)}function kb(a,t){a.uniform3uiv(this.addr,t)}function Db(a,t){a.uniform4uiv(this.addr,t)}function zb(a,t,e){let i=this.cache,n=t.length,s=co(e,n);We(i,s)||(a.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==n;++r)e.setTexture2D(t[r]||Od,s[r])}function Ub(a,t,e){let i=this.cache,n=t.length,s=co(e,n);We(i,s)||(a.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Hd,s[r])}function Ob(a,t,e){let i=this.cache,n=t.length,s=co(e,n);We(i,s)||(a.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==n;++r)e.setTextureCube(t[r]||Vd,s[r])}function Nb(a,t,e){let i=this.cache,n=t.length,s=co(e,n);We(i,s)||(a.uniform1iv(this.addr,s),qe(i,s));for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Bd,s[r])}function Bb(a){switch(a){case 5126:return _b;case 35664:return wb;case 35665:return Mb;case 35666:return Eb;case 35674:return Tb;case 35675:return Sb;case 35676:return Ab;case 5124:case 35670:return Rb;case 35667:case 35671:return Cb;case 35668:case 35672:return Pb;case 35669:case 35673:return Lb;case 5125:return Fb;case 36294:return Ib;case 36295:return kb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Nb}}var Hh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yb(e.type)}},Vh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bb(e.type)}},Gh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,r=n.length;s!==r;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},_h=/(\w+)(\])?(\[|\.)?/g;function Hu(a,t){a.seq.push(t),a.map[t.id]=t}function Hb(a,t,e){let i=a.name,n=i.length;for(_h.lastIndex=0;;){let s=_h.exec(i),r=_h.lastIndex,o=s[1],h=s[2]==="]",c=s[3];if(h&&(o=o|0),c===void 0||c==="["&&r+2===n){Hu(e,c===void 0?new Hh(o,a,t):new Vh(o,a,t));break}else{let l=e.map[o];l===void 0&&(l=new Gh(o),Hu(e,l)),e=l}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),r=t.getUniformLocation(e,s.name);Hb(s,r,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,r=e.length;s!==r;++s){let o=e[s],h=i[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.id in e&&i.push(r)}return i}};function Vu(a,t,e){let i=a.createShader(t);return a.shaderSource(i,e),a.compileShader(i),i}var Vb=37297,Gb=0;function Wb(a,t){let e=a.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=n;r<s;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return i.join(`
`)}function qb(a){let t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(a),i;switch(t===e?i="":t===Dr&&e===kr?i="LinearDisplayP3ToLinearSRGB":t===kr&&e===Dr&&(i="LinearSRGBToLinearDisplayP3"),a){case Oe:case ho:return[i,"LinearTransferOETF"];case me:case Ec:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[i,"LinearTransferOETF"]}}function Gu(a,t,e){let i=a.getShaderParameter(t,a.COMPILE_STATUS),n=a.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let r=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Wb(a.getShaderSource(t),r)}else return n}function Xb(a,t){let e=qb(t);return`vec4 ${a}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Kb(a,t){let e;switch(t){case Jf:e="Linear";break;case $f:e="Reinhard";break;case tp:e="OptimizedCineon";break;case ep:e="ACESFilmic";break;case np:e="AgX";break;case ip:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function jb(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function Yb(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zs).join(`
`)}function Qb(a){let t=[];for(let e in a){let i=a[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zb(a,t){let e={},i=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=a.getActiveAttrib(t,n),r=s.name,o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function zs(a){return a!==""}function Wu(a,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qu(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(a){return a.replace(Jb,tv)}var $b=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tv(a,t){let e=Zt[t];if(e===void 0){let i=$b.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Wh(e)}var ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(a){return a.replace(ev,iv)}function iv(a,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ku(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nv(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===yd?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===Cf?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function sv(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ns:case Bs:t="ENVMAP_TYPE_CUBE";break;case ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function av(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function rv(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case _d:t="ENVMAP_BLENDING_MULTIPLY";break;case Qf:t="ENVMAP_BLENDING_MIX";break;case Zf:t="ENVMAP_BLENDING_ADD";break}return t}function ov(a){let t=a.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function hv(a,t,e,i){let n=a.getContext(),s=e.defines,r=e.vertexShader,o=e.fragmentShader,h=nv(e),c=sv(e),u=av(e),l=rv(e),d=ov(e),f=e.isWebGL2?"":jb(e),g=Yb(e),b=Qb(s),m=n.createProgram(),p,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(zs).join(`
`),p.length>0&&(p+=`
`),v=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(zs).join(`
`),v.length>0&&(v+=`
`)):(p=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),v=[f,Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Zi?Kb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Xb("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),r=Wh(r),r=Wu(r,e),r=qu(r,e),o=Wh(o),o=Wu(o,e),o=qu(o,e),r=Xu(r),o=Xu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let w=x+p+r,R=x+v+o,y=Vu(n,n.VERTEX_SHADER,w),E=Vu(n,n.FRAGMENT_SHADER,R);n.attachShader(m,y),n.attachShader(m,E),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function A(G){if(a.debug.checkShaderErrors){let q=n.getProgramInfoLog(m).trim(),U=n.getShaderInfoLog(y).trim(),z=n.getShaderInfoLog(E).trim(),J=!0,V=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(J=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,m,y,E);else{let H=Gu(n,y,"vertex"),N=Gu(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+H+`
`+N)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(U===""||z==="")&&(V=!1);V&&(G.diagnostics={runnable:J,programLog:q,vertexShader:{log:U,prefix:p},fragmentShader:{log:z,prefix:v}})}n.deleteShader(y),n.deleteShader(E),_=new Os(n,m),T=Zb(n,m)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=n.getProgramParameter(m,Vb)),I},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gb++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=E,this}var cv=0,qh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Xh(t),e.set(t,i)),i}},Xh=class{constructor(t){this.id=cv++,this.code=t,this.usedTimes=0}};function lv(a,t,e,i,n,s,r){let o=new Hr,h=new qh,c=[],u=n.isWebGL2,l=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(_){return _===0?"uv":`uv${_}`}function m(_,T,I,G,q){let U=G.fog,z=q.geometry,J=_.isMeshStandardMaterial?G.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||J),H=V&&V.mapping===ro?V.image.height:null,N=g[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let P=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,W=P!==void 0?P.length:0,k=0;z.morphAttributes.position!==void 0&&(k=1),z.morphAttributes.normal!==void 0&&(k=2),z.morphAttributes.color!==void 0&&(k=3);let O,D,B,Y;if(N){let oi=Yi[N];O=oi.vertexShader,D=oi.fragmentShader}else O=_.vertexShader,D=_.fragmentShader,h.update(_),B=h.getVertexShaderID(_),Y=h.getFragmentShaderID(_);let Q=a.getRenderTarget(),X=q.isInstancedMesh===!0,ot=q.isBatchedMesh===!0,nt=!!_.map,lt=!!_.matcap,Z=!!V,kt=!!_.aoMap,vt=!!_.lightMap,Et=!!_.bumpMap,xt=!!_.normalMap,Ht=!!_.displacementMap,Pt=!!_.emissiveMap,L=!!_.metalnessMap,C=!!_.roughnessMap,et=_.anisotropy>0,ht=_.clearcoat>0,ft=_.iridescence>0,bt=_.sheen>0,Lt=_.transmission>0,K=et&&!!_.anisotropyMap,ut=ht&&!!_.clearcoatMap,yt=ht&&!!_.clearcoatNormalMap,zt=ht&&!!_.clearcoatRoughnessMap,mt=ft&&!!_.iridescenceMap,ue=ft&&!!_.iridescenceThicknessMap,Yt=bt&&!!_.sheenColorMap,Vt=bt&&!!_.sheenRoughnessMap,Ft=!!_.specularMap,Ct=!!_.specularColorMap,Xt=!!_.specularIntensityMap,he=Lt&&!!_.transmissionMap,Le=Lt&&!!_.thicknessMap,te=!!_.gradientMap,wt=!!_.alphaMap,j=_.alphaTest>0,Tt=!!_.alphaHash,St=!!_.extensions,Gt=!!z.attributes.uv1,Ot=!!z.attributes.uv2,be=!!z.attributes.uv3,ve=Zi;return _.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ve=a.toneMapping),{isWebGL2:u,shaderID:N,shaderType:_.type,shaderName:_.name,vertexShader:O,fragmentShader:D,defines:_.defines,customVertexShaderID:B,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:ot,instancing:X,instancingColor:X&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Q===null?a.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Oe,map:nt,matcap:lt,envMap:Z,envMapMode:Z&&V.mapping,envMapCubeUVHeight:H,aoMap:kt,lightMap:vt,bumpMap:Et,normalMap:xt,displacementMap:d&&Ht,emissiveMap:Pt,normalMapObjectSpace:xt&&_.normalMapType===mp,normalMapTangentSpace:xt&&_.normalMapType===Fd,metalnessMap:L,roughnessMap:C,anisotropy:et,anisotropyMap:K,clearcoat:ht,clearcoatMap:ut,clearcoatNormalMap:yt,clearcoatRoughnessMap:zt,iridescence:ft,iridescenceMap:mt,iridescenceThicknessMap:ue,sheen:bt,sheenColorMap:Yt,sheenRoughnessMap:Vt,specularMap:Ft,specularColorMap:Ct,specularIntensityMap:Xt,transmission:Lt,transmissionMap:he,thicknessMap:Le,gradientMap:te,opaque:_.transparent===!1&&_.blending===Fn,alphaMap:wt,alphaTest:j,alphaHash:Tt,combine:_.combine,mapUv:nt&&b(_.map.channel),aoMapUv:kt&&b(_.aoMap.channel),lightMapUv:vt&&b(_.lightMap.channel),bumpMapUv:Et&&b(_.bumpMap.channel),normalMapUv:xt&&b(_.normalMap.channel),displacementMapUv:Ht&&b(_.displacementMap.channel),emissiveMapUv:Pt&&b(_.emissiveMap.channel),metalnessMapUv:L&&b(_.metalnessMap.channel),roughnessMapUv:C&&b(_.roughnessMap.channel),anisotropyMapUv:K&&b(_.anisotropyMap.channel),clearcoatMapUv:ut&&b(_.clearcoatMap.channel),clearcoatNormalMapUv:yt&&b(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&b(_.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&b(_.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&b(_.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&b(_.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&b(_.sheenRoughnessMap.channel),specularMapUv:Ft&&b(_.specularMap.channel),specularColorMapUv:Ct&&b(_.specularColorMap.channel),specularIntensityMapUv:Xt&&b(_.specularIntensityMap.channel),transmissionMapUv:he&&b(_.transmissionMap.channel),thicknessMapUv:Le&&b(_.thicknessMap.channel),alphaMapUv:wt&&b(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xt||et),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Gt,vertexUv2s:Ot,vertexUv3s:be,pointsUvs:q.isPoints===!0&&!!z.attributes.uv&&(nt||wt),fog:!!U,useFog:_.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:q.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:k,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:ve,useLegacyLights:a._useLegacyLights,decodeVideoTexture:nt&&_.map.isVideoTexture===!0&&de.getTransfer(_.map.colorSpace)===we,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ue,flipSided:_.side===Ce,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:St&&_.extensions.derivatives===!0,extensionFragDepth:St&&_.extensions.fragDepth===!0,extensionDrawBuffers:St&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:St&&_.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)T.push(I),T.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(v(T,_),x(T,_),T.push(a.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function v(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function x(_,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),_.push(o.mask)}function w(_){let T=g[_.type],I;if(T){let G=Yi[T];I=$p.clone(G.uniforms)}else I=_.uniforms;return I}function R(_,T){let I;for(let G=0,q=c.length;G<q;G++){let U=c[G];if(U.cacheKey===T){I=U,++I.usedTimes;break}}return I===void 0&&(I=new hv(a,T,_,s),c.push(I)),I}function y(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),_.destroy()}}function E(_){h.remove(_)}function A(){h.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:R,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:A}}function uv(){let a=new WeakMap;function t(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function e(s){a.delete(s)}function i(s,r,o){a.get(s)[r]=o}function n(){a=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function dv(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function ju(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function Yu(){let a=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function r(l,d,f,g,b,m){let p=a[t];return p===void 0?(p={id:l.id,object:l,geometry:d,material:f,groupOrder:g,renderOrder:l.renderOrder,z:b,group:m},a[t]=p):(p.id=l.id,p.object=l,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=l.renderOrder,p.z=b,p.group=m),t++,p}function o(l,d,f,g,b,m){let p=r(l,d,f,g,b,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function h(l,d,f,g,b,m){let p=r(l,d,f,g,b,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function c(l,d){e.length>1&&e.sort(l||dv),i.length>1&&i.sort(d||ju),n.length>1&&n.sort(d||ju)}function u(){for(let l=t,d=a.length;l<d;l++){let f=a[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:h,finish:u,sort:c}}function fv(){let a=new WeakMap;function t(i,n){let s=a.get(i),r;return s===void 0?(r=new Yu,a.set(i,[r])):n>=s.length?(r=new Yu,s.push(r)):r=s[n],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function pv(){let a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new M,color:new Dt};break;case"SpotLight":e={position:new M,direction:new M,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new M,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new M,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new M,halfWidth:new M,halfHeight:new M};break}return a[t.id]=e,e}}}function mv(){let a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}var gv=0;function bv(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function vv(a,t){let e=new pv,i=mv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new M);let s=new M,r=new Rt,o=new Rt;function h(u,l){let d=0,f=0,g=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let b=0,m=0,p=0,v=0,x=0,w=0,R=0,y=0,E=0,A=0,_=0;u.sort(bv);let T=l===!0?Math.PI:1;for(let G=0,q=u.length;G<q;G++){let U=u[G],z=U.color,J=U.intensity,V=U.distance,H=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=z.r*J*T,f+=z.g*J*T,g+=z.b*J*T;else if(U.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(U.sh.coefficients[N],J);_++}else if(U.isDirectionalLight){let N=e.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){let P=U.shadow,W=i.get(U);W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,n.directionalShadow[b]=W,n.directionalShadowMap[b]=H,n.directionalShadowMatrix[b]=U.shadow.matrix,w++}n.directional[b]=N,b++}else if(U.isSpotLight){let N=e.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(z).multiplyScalar(J*T),N.distance=V,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,n.spot[p]=N;let P=U.shadow;if(U.map&&(n.spotLightMap[E]=U.map,E++,P.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[p]=P.matrix,U.castShadow){let W=i.get(U);W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,n.spotShadow[p]=W,n.spotShadowMap[p]=H,y++}p++}else if(U.isRectAreaLight){let N=e.get(U);N.color.copy(z).multiplyScalar(J),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),n.rectArea[v]=N,v++}else if(U.isPointLight){let N=e.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity*T),N.distance=U.distance,N.decay=U.decay,U.castShadow){let P=U.shadow,W=i.get(U);W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,W.shadowCameraNear=P.camera.near,W.shadowCameraFar=P.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=U.shadow.matrix,R++}n.point[m]=N,m++}else if(U.isHemisphereLight){let N=e.get(U);N.skyColor.copy(U.color).multiplyScalar(J*T),N.groundColor.copy(U.groundColor).multiplyScalar(J*T),n.hemi[x]=N,x++}}v>0&&(t.isWebGL2?a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2):a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=g;let I=n.hash;(I.directionalLength!==b||I.pointLength!==m||I.spotLength!==p||I.rectAreaLength!==v||I.hemiLength!==x||I.numDirectionalShadows!==w||I.numPointShadows!==R||I.numSpotShadows!==y||I.numSpotMaps!==E||I.numLightProbes!==_)&&(n.directional.length=b,n.spot.length=p,n.rectArea.length=v,n.point.length=m,n.hemi.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=y+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=_,I.directionalLength=b,I.pointLength=m,I.spotLength=p,I.rectAreaLength=v,I.hemiLength=x,I.numDirectionalShadows=w,I.numPointShadows=R,I.numSpotShadows=y,I.numSpotMaps=E,I.numLightProbes=_,n.version=gv++)}function c(u,l){let d=0,f=0,g=0,b=0,m=0,p=l.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){let w=u[v];if(w.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(w.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let R=n.rectArea[b];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),b++}else if(w.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:h,setupView:c,state:n}}function Qu(a,t){let e=new vv(a,t),i=[],n=[];function s(){i.length=0,n.length=0}function r(l){i.push(l)}function o(l){n.push(l)}function h(l){e.setup(i,l)}function c(l){e.setupView(i,l)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:h,setupLightsView:c,pushLight:r,pushShadow:o}}function xv(a,t){let e=new WeakMap;function i(s,r=0){let o=e.get(s),h;return o===void 0?(h=new Qu(a,t),e.set(s,[h])):r>=o.length?(h=new Qu(a,t),o.push(h)):h=o[r],h}function n(){e=new WeakMap}return{get:i,dispose:n}}var Kh=class extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jh=class extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
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
}`;function wv(a,t,e){let i=new Ua,n=new gt,s=new gt,r=new ne,o=new Kh({depthPacking:pp}),h=new jh,c={},u=e.maxTextureSize,l={[Qe]:Ce,[Ce]:Qe,[Ue]:Ue},d=new se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:yv,fragmentShader:_v}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ce;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yd;let p=this.type;this.render=function(y,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;let _=a.getRenderTarget(),T=a.getActiveCubeFace(),I=a.getActiveMipmapLevel(),G=a.state;G.setBlending(Ln),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let q=p!==fn&&this.type===fn,U=p===fn&&this.type!==fn;for(let z=0,J=y.length;z<J;z++){let V=y[z],H=V.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);let N=H.getFrameExtents();if(n.multiply(N),s.copy(H.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/N.x),n.x=s.x*N.x,H.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/N.y),n.y=s.y*N.y,H.mapSize.y=s.y)),H.map===null||q===!0||U===!0){let W=this.type!==fn?{minFilter:Ie,magFilter:Ie}:{};H.map!==null&&H.map.dispose(),H.map=new Te(n.x,n.y,W),H.map.texture.name=V.name+".shadowMap",H.camera.updateProjectionMatrix()}a.setRenderTarget(H.map),a.clear();let P=H.getViewportCount();for(let W=0;W<P;W++){let k=H.getViewport(W);r.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),G.viewport(r),H.updateMatrices(V,W),i=H.getFrustum(),w(E,A,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===fn&&v(H,A),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,a.setRenderTarget(_,T,I)};function v(y,E){let A=t.update(b);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Te(n.x,n.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,a.setRenderTarget(y.mapPass),a.clear(),a.renderBufferDirect(E,null,A,d,b,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,a.setRenderTarget(y.map),a.clear(),a.renderBufferDirect(E,null,A,f,b,null)}function x(y,E,A,_){let T=null,I=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)T=I;else if(T=A.isPointLight===!0?h:o,a.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let G=T.uuid,q=E.uuid,U=c[G];U===void 0&&(U={},c[G]=U);let z=U[q];z===void 0&&(z=T.clone(),U[q]=z,E.addEventListener("dispose",R)),T=z}if(T.visible=E.visible,T.wireframe=E.wireframe,_===fn?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:l[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,A.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let G=a.properties.get(T);G.light=A}return T}function w(y,E,A,_,T){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&T===fn)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);let q=t.update(y),U=y.material;if(Array.isArray(U)){let z=q.groups;for(let J=0,V=z.length;J<V;J++){let H=z[J],N=U[H.materialIndex];if(N&&N.visible){let P=x(y,N,_,T);y.onBeforeShadow(a,y,E,A,q,P,H),a.renderBufferDirect(A,null,q,P,y,H),y.onAfterShadow(a,y,E,A,q,P,H)}}}else if(U.visible){let z=x(y,U,_,T);y.onBeforeShadow(a,y,E,A,q,z,null),a.renderBufferDirect(A,null,q,z,y,null),y.onAfterShadow(a,y,E,A,q,z,null)}}let G=y.children;for(let q=0,U=G.length;q<U;q++)w(G[q],E,A,_,T)}function R(y){y.target.removeEventListener("dispose",R);for(let A in c){let _=c[A],T=y.target.uuid;T in _&&(_[T].dispose(),delete _[T])}}}function Mv(a,t,e){let i=e.isWebGL2;function n(){let j=!1,Tt=new ne,St=null,Gt=new ne(0,0,0,0);return{setMask:function(Ot){St!==Ot&&!j&&(a.colorMask(Ot,Ot,Ot,Ot),St=Ot)},setLocked:function(Ot){j=Ot},setClear:function(Ot,be,ve,Xe,oi){oi===!0&&(Ot*=Xe,be*=Xe,ve*=Xe),Tt.set(Ot,be,ve,Xe),Gt.equals(Tt)===!1&&(a.clearColor(Ot,be,ve,Xe),Gt.copy(Tt))},reset:function(){j=!1,St=null,Gt.set(-1,0,0,0)}}}function s(){let j=!1,Tt=null,St=null,Gt=null;return{setTest:function(Ot){Ot?ot(a.DEPTH_TEST):nt(a.DEPTH_TEST)},setMask:function(Ot){Tt!==Ot&&!j&&(a.depthMask(Ot),Tt=Ot)},setFunc:function(Ot){if(St!==Ot){switch(Ot){case Gf:a.depthFunc(a.NEVER);break;case Wf:a.depthFunc(a.ALWAYS);break;case qf:a.depthFunc(a.LESS);break;case Lr:a.depthFunc(a.LEQUAL);break;case Xf:a.depthFunc(a.EQUAL);break;case Kf:a.depthFunc(a.GEQUAL);break;case jf:a.depthFunc(a.GREATER);break;case Yf:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}St=Ot}},setLocked:function(Ot){j=Ot},setClear:function(Ot){Gt!==Ot&&(a.clearDepth(Ot),Gt=Ot)},reset:function(){j=!1,Tt=null,St=null,Gt=null}}}function r(){let j=!1,Tt=null,St=null,Gt=null,Ot=null,be=null,ve=null,Xe=null,oi=null;return{setTest:function(xe){j||(xe?ot(a.STENCIL_TEST):nt(a.STENCIL_TEST))},setMask:function(xe){Tt!==xe&&!j&&(a.stencilMask(xe),Tt=xe)},setFunc:function(xe,hi,ji){(St!==xe||Gt!==hi||Ot!==ji)&&(a.stencilFunc(xe,hi,ji),St=xe,Gt=hi,Ot=ji)},setOp:function(xe,hi,ji){(be!==xe||ve!==hi||Xe!==ji)&&(a.stencilOp(xe,hi,ji),be=xe,ve=hi,Xe=ji)},setLocked:function(xe){j=xe},setClear:function(xe){oi!==xe&&(a.clearStencil(xe),oi=xe)},reset:function(){j=!1,Tt=null,St=null,Gt=null,Ot=null,be=null,ve=null,Xe=null,oi=null}}}let o=new n,h=new s,c=new r,u=new WeakMap,l=new WeakMap,d={},f={},g=new WeakMap,b=[],m=null,p=!1,v=null,x=null,w=null,R=null,y=null,E=null,A=null,_=new Dt(0,0,0),T=0,I=!1,G=null,q=null,U=null,z=null,J=null,V=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,N=0,P=a.getParameter(a.VERSION);P.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),H=N>=1):P.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),H=N>=2);let W=null,k={},O=a.getParameter(a.SCISSOR_BOX),D=a.getParameter(a.VIEWPORT),B=new ne().fromArray(O),Y=new ne().fromArray(D);function Q(j,Tt,St,Gt){let Ot=new Uint8Array(4),be=a.createTexture();a.bindTexture(j,be),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ve=0;ve<St;ve++)i&&(j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY)?a.texImage3D(Tt,0,a.RGBA,1,1,Gt,0,a.RGBA,a.UNSIGNED_BYTE,Ot):a.texImage2D(Tt+ve,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ot);return be}let X={};X[a.TEXTURE_2D]=Q(a.TEXTURE_2D,a.TEXTURE_2D,1),X[a.TEXTURE_CUBE_MAP]=Q(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(X[a.TEXTURE_2D_ARRAY]=Q(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),X[a.TEXTURE_3D]=Q(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),h.setClear(1),c.setClear(0),ot(a.DEPTH_TEST),h.setFunc(Lr),Pt(!1),L(Ll),ot(a.CULL_FACE),xt(Ln);function ot(j){d[j]!==!0&&(a.enable(j),d[j]=!0)}function nt(j){d[j]!==!1&&(a.disable(j),d[j]=!1)}function lt(j,Tt){return f[j]!==Tt?(a.bindFramebuffer(j,Tt),f[j]=Tt,i&&(j===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=Tt),j===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=Tt)),!0):!1}function Z(j,Tt){let St=b,Gt=!1;if(j)if(St=g.get(Tt),St===void 0&&(St=[],g.set(Tt,St)),j.isWebGLMultipleRenderTargets){let Ot=j.texture;if(St.length!==Ot.length||St[0]!==a.COLOR_ATTACHMENT0){for(let be=0,ve=Ot.length;be<ve;be++)St[be]=a.COLOR_ATTACHMENT0+be;St.length=Ot.length,Gt=!0}}else St[0]!==a.COLOR_ATTACHMENT0&&(St[0]=a.COLOR_ATTACHMENT0,Gt=!0);else St[0]!==a.BACK&&(St[0]=a.BACK,Gt=!0);Gt&&(e.isWebGL2?a.drawBuffers(St):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(St))}function kt(j){return m!==j?(a.useProgram(j),m=j,!0):!1}let vt={[pn]:a.FUNC_ADD,[Pf]:a.FUNC_SUBTRACT,[Lf]:a.FUNC_REVERSE_SUBTRACT};if(i)vt[kl]=a.MIN,vt[Dl]=a.MAX;else{let j=t.get("EXT_blend_minmax");j!==null&&(vt[kl]=j.MIN_EXT,vt[Dl]=j.MAX_EXT)}let Et={[ao]:a.ZERO,[Ff]:a.ONE,[yc]:a.SRC_COLOR,[ka]:a.SRC_ALPHA,[Of]:a.SRC_ALPHA_SATURATE,[zf]:a.DST_COLOR,[kf]:a.DST_ALPHA,[If]:a.ONE_MINUS_SRC_COLOR,[Lh]:a.ONE_MINUS_SRC_ALPHA,[Uf]:a.ONE_MINUS_DST_COLOR,[Df]:a.ONE_MINUS_DST_ALPHA,[Nf]:a.CONSTANT_COLOR,[Bf]:a.ONE_MINUS_CONSTANT_COLOR,[Hf]:a.CONSTANT_ALPHA,[Vf]:a.ONE_MINUS_CONSTANT_ALPHA};function xt(j,Tt,St,Gt,Ot,be,ve,Xe,oi,xe){if(j===Ln){p===!0&&(nt(a.BLEND),p=!1);return}if(p===!1&&(ot(a.BLEND),p=!0),j!==xc){if(j!==v||xe!==I){if((x!==pn||y!==pn)&&(a.blendEquation(a.FUNC_ADD),x=pn,y=pn),xe)switch(j){case Fn:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ji:a.blendFunc(a.ONE,a.ONE);break;case Fl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Il:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Fn:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ji:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Fl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Il:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}w=null,R=null,E=null,A=null,_.set(0,0,0),T=0,v=j,I=xe}return}Ot=Ot||Tt,be=be||St,ve=ve||Gt,(Tt!==x||Ot!==y)&&(a.blendEquationSeparate(vt[Tt],vt[Ot]),x=Tt,y=Ot),(St!==w||Gt!==R||be!==E||ve!==A)&&(a.blendFuncSeparate(Et[St],Et[Gt],Et[be],Et[ve]),w=St,R=Gt,E=be,A=ve),(Xe.equals(_)===!1||oi!==T)&&(a.blendColor(Xe.r,Xe.g,Xe.b,oi),_.copy(Xe),T=oi),v=j,I=!1}function Ht(j,Tt){j.side===Ue?nt(a.CULL_FACE):ot(a.CULL_FACE);let St=j.side===Ce;Tt&&(St=!St),Pt(St),j.blending===Fn&&j.transparent===!1?xt(Ln):xt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),h.setFunc(j.depthFunc),h.setTest(j.depthTest),h.setMask(j.depthWrite),o.setMask(j.colorWrite);let Gt=j.stencilWrite;c.setTest(Gt),Gt&&(c.setMask(j.stencilWriteMask),c.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),c.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),et(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ot(a.SAMPLE_ALPHA_TO_COVERAGE):nt(a.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(j){G!==j&&(j?a.frontFace(a.CW):a.frontFace(a.CCW),G=j)}function L(j){j!==Af?(ot(a.CULL_FACE),j!==q&&(j===Ll?a.cullFace(a.BACK):j===Rf?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):nt(a.CULL_FACE),q=j}function C(j){j!==U&&(H&&a.lineWidth(j),U=j)}function et(j,Tt,St){j?(ot(a.POLYGON_OFFSET_FILL),(z!==Tt||J!==St)&&(a.polygonOffset(Tt,St),z=Tt,J=St)):nt(a.POLYGON_OFFSET_FILL)}function ht(j){j?ot(a.SCISSOR_TEST):nt(a.SCISSOR_TEST)}function ft(j){j===void 0&&(j=a.TEXTURE0+V-1),W!==j&&(a.activeTexture(j),W=j)}function bt(j,Tt,St){St===void 0&&(W===null?St=a.TEXTURE0+V-1:St=W);let Gt=k[St];Gt===void 0&&(Gt={type:void 0,texture:void 0},k[St]=Gt),(Gt.type!==j||Gt.texture!==Tt)&&(W!==St&&(a.activeTexture(St),W=St),a.bindTexture(j,Tt||X[j]),Gt.type=j,Gt.texture=Tt)}function Lt(){let j=k[W];j!==void 0&&j.type!==void 0&&(a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function K(){try{a.compressedTexImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ut(){try{a.compressedTexImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function yt(){try{a.texSubImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function zt(){try{a.texSubImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function mt(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ue(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Yt(){try{a.texStorage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Vt(){try{a.texStorage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ft(){try{a.texImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ct(){try{a.texImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Xt(j){B.equals(j)===!1&&(a.scissor(j.x,j.y,j.z,j.w),B.copy(j))}function he(j){Y.equals(j)===!1&&(a.viewport(j.x,j.y,j.z,j.w),Y.copy(j))}function Le(j,Tt){let St=l.get(Tt);St===void 0&&(St=new WeakMap,l.set(Tt,St));let Gt=St.get(j);Gt===void 0&&(Gt=a.getUniformBlockIndex(Tt,j.name),St.set(j,Gt))}function te(j,Tt){let Gt=l.get(Tt).get(j);u.get(Tt)!==Gt&&(a.uniformBlockBinding(Tt,Gt,j.__bindingPointIndex),u.set(Tt,Gt))}function wt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),i===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},W=null,k={},f={},g=new WeakMap,b=[],m=null,p=!1,v=null,x=null,w=null,R=null,y=null,E=null,A=null,_=new Dt(0,0,0),T=0,I=!1,G=null,q=null,U=null,z=null,J=null,B.set(0,0,a.canvas.width,a.canvas.height),Y.set(0,0,a.canvas.width,a.canvas.height),o.reset(),h.reset(),c.reset()}return{buffers:{color:o,depth:h,stencil:c},enable:ot,disable:nt,bindFramebuffer:lt,drawBuffers:Z,useProgram:kt,setBlending:xt,setMaterial:Ht,setFlipSided:Pt,setCullFace:L,setLineWidth:C,setPolygonOffset:et,setScissorTest:ht,activeTexture:ft,bindTexture:bt,unbindTexture:Lt,compressedTexImage2D:K,compressedTexImage3D:ut,texImage2D:Ft,texImage3D:Ct,updateUBOMapping:Le,uniformBlockBinding:te,texStorage2D:Yt,texStorage3D:Vt,texSubImage2D:yt,texSubImage3D:zt,compressedTexSubImage2D:mt,compressedTexSubImage3D:ue,scissor:Xt,viewport:he,reset:wt}}function Ev(a,t,e,i,n,s,r){let o=n.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,l,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,C){return f?new OffscreenCanvas(L,C):za("canvas")}function b(L,C,et,ht){let ft=1;if((L.width>ht||L.height>ht)&&(ft=ht/Math.max(L.width,L.height)),ft<1||C===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let bt=C?Ur:Math.floor,Lt=bt(ft*L.width),K=bt(ft*L.height);l===void 0&&(l=g(Lt,K));let ut=et?g(Lt,K):l;return ut.width=Lt,ut.height=K,ut.getContext("2d").drawImage(L,0,0,Lt,K),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Lt+"x"+K+")."),ut}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return zh(L.width)&&zh(L.height)}function p(L){return o?!1:L.wrapS!==Ze||L.wrapT!==Ze||L.minFilter!==Ie&&L.minFilter!==Jt}function v(L,C){return L.generateMipmaps&&C&&L.minFilter!==Ie&&L.minFilter!==Jt}function x(L){a.generateMipmap(L)}function w(L,C,et,ht,ft=!1){if(o===!1)return C;if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let bt=C;if(C===a.RED&&(et===a.FLOAT&&(bt=a.R32F),et===a.HALF_FLOAT&&(bt=a.R16F),et===a.UNSIGNED_BYTE&&(bt=a.R8)),C===a.RED_INTEGER&&(et===a.UNSIGNED_BYTE&&(bt=a.R8UI),et===a.UNSIGNED_SHORT&&(bt=a.R16UI),et===a.UNSIGNED_INT&&(bt=a.R32UI),et===a.BYTE&&(bt=a.R8I),et===a.SHORT&&(bt=a.R16I),et===a.INT&&(bt=a.R32I)),C===a.RG&&(et===a.FLOAT&&(bt=a.RG32F),et===a.HALF_FLOAT&&(bt=a.RG16F),et===a.UNSIGNED_BYTE&&(bt=a.RG8)),C===a.RGBA){let Lt=ft?Ir:de.getTransfer(ht);et===a.FLOAT&&(bt=a.RGBA32F),et===a.HALF_FLOAT&&(bt=a.RGBA16F),et===a.UNSIGNED_BYTE&&(bt=Lt===we?a.SRGB8_ALPHA8:a.RGBA8),et===a.UNSIGNED_SHORT_4_4_4_4&&(bt=a.RGBA4),et===a.UNSIGNED_SHORT_5_5_5_1&&(bt=a.RGB5_A1)}return(bt===a.R16F||bt===a.R32F||bt===a.RG16F||bt===a.RG32F||bt===a.RGBA16F||bt===a.RGBA32F)&&t.get("EXT_color_buffer_float"),bt}function R(L,C,et){return v(L,et)===!0||L.isFramebufferTexture&&L.minFilter!==Ie&&L.minFilter!==Jt?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function y(L){return L===Ie||L===Fr||L===Aa?a.NEAREST:a.LINEAR}function E(L){let C=L.target;C.removeEventListener("dispose",E),_(C),C.isVideoTexture&&u.delete(C)}function A(L){let C=L.target;C.removeEventListener("dispose",A),I(C)}function _(L){let C=i.get(L);if(C.__webglInit===void 0)return;let et=L.source,ht=d.get(et);if(ht){let ft=ht[C.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&T(L),Object.keys(ht).length===0&&d.delete(et)}i.remove(L)}function T(L){let C=i.get(L);a.deleteTexture(C.__webglTexture);let et=L.source,ht=d.get(et);delete ht[C.__cacheKey],r.memory.textures--}function I(L){let C=L.texture,et=i.get(L),ht=i.get(C);if(ht.__webglTexture!==void 0&&(a.deleteTexture(ht.__webglTexture),r.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(et.__webglFramebuffer[ft]))for(let bt=0;bt<et.__webglFramebuffer[ft].length;bt++)a.deleteFramebuffer(et.__webglFramebuffer[ft][bt]);else a.deleteFramebuffer(et.__webglFramebuffer[ft]);et.__webglDepthbuffer&&a.deleteRenderbuffer(et.__webglDepthbuffer[ft])}else{if(Array.isArray(et.__webglFramebuffer))for(let ft=0;ft<et.__webglFramebuffer.length;ft++)a.deleteFramebuffer(et.__webglFramebuffer[ft]);else a.deleteFramebuffer(et.__webglFramebuffer);if(et.__webglDepthbuffer&&a.deleteRenderbuffer(et.__webglDepthbuffer),et.__webglMultisampledFramebuffer&&a.deleteFramebuffer(et.__webglMultisampledFramebuffer),et.__webglColorRenderbuffer)for(let ft=0;ft<et.__webglColorRenderbuffer.length;ft++)et.__webglColorRenderbuffer[ft]&&a.deleteRenderbuffer(et.__webglColorRenderbuffer[ft]);et.__webglDepthRenderbuffer&&a.deleteRenderbuffer(et.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ft=0,bt=C.length;ft<bt;ft++){let Lt=i.get(C[ft]);Lt.__webglTexture&&(a.deleteTexture(Lt.__webglTexture),r.memory.textures--),i.remove(C[ft])}i.remove(C),i.remove(L)}let G=0;function q(){G=0}function U(){let L=G;return L>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+n.maxTextures),G+=1,L}function z(L){let C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function J(L,C){let et=i.get(L);if(L.isVideoTexture&&Ht(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){let ht=L.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(et,L,C);return}}e.bindTexture(a.TEXTURE_2D,et.__webglTexture,a.TEXTURE0+C)}function V(L,C){let et=i.get(L);if(L.version>0&&et.__version!==L.version){B(et,L,C);return}e.bindTexture(a.TEXTURE_2D_ARRAY,et.__webglTexture,a.TEXTURE0+C)}function H(L,C){let et=i.get(L);if(L.version>0&&et.__version!==L.version){B(et,L,C);return}e.bindTexture(a.TEXTURE_3D,et.__webglTexture,a.TEXTURE0+C)}function N(L,C){let et=i.get(L);if(L.version>0&&et.__version!==L.version){Y(et,L,C);return}e.bindTexture(a.TEXTURE_CUBE_MAP,et.__webglTexture,a.TEXTURE0+C)}let P={[ai]:a.REPEAT,[Ze]:a.CLAMP_TO_EDGE,[Da]:a.MIRRORED_REPEAT},W={[Ie]:a.NEAREST,[Fr]:a.NEAREST_MIPMAP_NEAREST,[Aa]:a.NEAREST_MIPMAP_LINEAR,[Jt]:a.LINEAR,[_c]:a.LINEAR_MIPMAP_NEAREST,[Je]:a.LINEAR_MIPMAP_LINEAR},k={[gp]:a.NEVER,[wp]:a.ALWAYS,[bp]:a.LESS,[Id]:a.LEQUAL,[vp]:a.EQUAL,[_p]:a.GEQUAL,[xp]:a.GREATER,[yp]:a.NOTEQUAL};function O(L,C,et){if(et?(a.texParameteri(L,a.TEXTURE_WRAP_S,P[C.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,P[C.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,P[C.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,W[C.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,W[C.minFilter])):(a.texParameteri(L,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(L,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(C.wrapS!==Ze||C.wrapT!==Ze)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(L,a.TEXTURE_MAG_FILTER,y(C.magFilter)),a.texParameteri(L,a.TEXTURE_MIN_FILTER,y(C.minFilter)),C.minFilter!==Ie&&C.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,k[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ht=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===Ie||C.minFilter!==Aa&&C.minFilter!==Je||C.type===mn&&t.has("OES_texture_float_linear")===!1||o===!1&&C.type===bn&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(a.texParameterf(L,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,n.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function D(L,C){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",E));let ht=C.source,ft=d.get(ht);ft===void 0&&(ft={},d.set(ht,ft));let bt=z(C);if(bt!==L.__cacheKey){ft[bt]===void 0&&(ft[bt]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,et=!0),ft[bt].usedTimes++;let Lt=ft[L.__cacheKey];Lt!==void 0&&(ft[L.__cacheKey].usedTimes--,Lt.usedTimes===0&&T(C)),L.__cacheKey=bt,L.__webglTexture=ft[bt].texture}return et}function B(L,C,et){let ht=a.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ht=a.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ht=a.TEXTURE_3D);let ft=D(L,C),bt=C.source;e.bindTexture(ht,L.__webglTexture,a.TEXTURE0+et);let Lt=i.get(bt);if(bt.version!==Lt.__version||ft===!0){e.activeTexture(a.TEXTURE0+et);let K=de.getPrimaries(de.workingColorSpace),ut=C.colorSpace===Ye?null:de.getPrimaries(C.colorSpace),yt=C.colorSpace===Ye||K===ut?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,C.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,C.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let zt=p(C)&&m(C.image)===!1,mt=b(C.image,zt,!1,n.maxTextureSize);mt=Pt(C,mt);let ue=m(mt)||o,Yt=s.convert(C.format,C.colorSpace),Vt=s.convert(C.type),Ft=w(C.internalFormat,Yt,Vt,C.colorSpace,C.isVideoTexture);O(ht,C,ue);let Ct,Xt=C.mipmaps,he=o&&C.isVideoTexture!==!0&&Ft!==Cd,Le=Lt.__version===void 0||ft===!0,te=R(C,mt,ue);if(C.isDepthTexture)Ft=a.DEPTH_COMPONENT,o?C.type===mn?Ft=a.DEPTH_COMPONENT32F:C.type===Cn?Ft=a.DEPTH_COMPONENT24:C.type===Zn?Ft=a.DEPTH24_STENCIL8:Ft=a.DEPTH_COMPONENT16:C.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Jn&&Ft===a.DEPTH_COMPONENT&&C.type!==wc&&C.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Cn,Vt=s.convert(C.type)),C.format===Hs&&Ft===a.DEPTH_COMPONENT&&(Ft=a.DEPTH_STENCIL,C.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Zn,Vt=s.convert(C.type))),Le&&(he?e.texStorage2D(a.TEXTURE_2D,1,Ft,mt.width,mt.height):e.texImage2D(a.TEXTURE_2D,0,Ft,mt.width,mt.height,0,Yt,Vt,null));else if(C.isDataTexture)if(Xt.length>0&&ue){he&&Le&&e.texStorage2D(a.TEXTURE_2D,te,Ft,Xt[0].width,Xt[0].height);for(let wt=0,j=Xt.length;wt<j;wt++)Ct=Xt[wt],he?e.texSubImage2D(a.TEXTURE_2D,wt,0,0,Ct.width,Ct.height,Yt,Vt,Ct.data):e.texImage2D(a.TEXTURE_2D,wt,Ft,Ct.width,Ct.height,0,Yt,Vt,Ct.data);C.generateMipmaps=!1}else he?(Le&&e.texStorage2D(a.TEXTURE_2D,te,Ft,mt.width,mt.height),e.texSubImage2D(a.TEXTURE_2D,0,0,0,mt.width,mt.height,Yt,Vt,mt.data)):e.texImage2D(a.TEXTURE_2D,0,Ft,mt.width,mt.height,0,Yt,Vt,mt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){he&&Le&&e.texStorage3D(a.TEXTURE_2D_ARRAY,te,Ft,Xt[0].width,Xt[0].height,mt.depth);for(let wt=0,j=Xt.length;wt<j;wt++)Ct=Xt[wt],C.format!==pe?Yt!==null?he?e.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,wt,0,0,0,Ct.width,Ct.height,mt.depth,Yt,Ct.data,0,0):e.compressedTexImage3D(a.TEXTURE_2D_ARRAY,wt,Ft,Ct.width,Ct.height,mt.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?e.texSubImage3D(a.TEXTURE_2D_ARRAY,wt,0,0,0,Ct.width,Ct.height,mt.depth,Yt,Vt,Ct.data):e.texImage3D(a.TEXTURE_2D_ARRAY,wt,Ft,Ct.width,Ct.height,mt.depth,0,Yt,Vt,Ct.data)}else{he&&Le&&e.texStorage2D(a.TEXTURE_2D,te,Ft,Xt[0].width,Xt[0].height);for(let wt=0,j=Xt.length;wt<j;wt++)Ct=Xt[wt],C.format!==pe?Yt!==null?he?e.compressedTexSubImage2D(a.TEXTURE_2D,wt,0,0,Ct.width,Ct.height,Yt,Ct.data):e.compressedTexImage2D(a.TEXTURE_2D,wt,Ft,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?e.texSubImage2D(a.TEXTURE_2D,wt,0,0,Ct.width,Ct.height,Yt,Vt,Ct.data):e.texImage2D(a.TEXTURE_2D,wt,Ft,Ct.width,Ct.height,0,Yt,Vt,Ct.data)}else if(C.isDataArrayTexture)he?(Le&&e.texStorage3D(a.TEXTURE_2D_ARRAY,te,Ft,mt.width,mt.height,mt.depth),e.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Yt,Vt,mt.data)):e.texImage3D(a.TEXTURE_2D_ARRAY,0,Ft,mt.width,mt.height,mt.depth,0,Yt,Vt,mt.data);else if(C.isData3DTexture)he?(Le&&e.texStorage3D(a.TEXTURE_3D,te,Ft,mt.width,mt.height,mt.depth),e.texSubImage3D(a.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Yt,Vt,mt.data)):e.texImage3D(a.TEXTURE_3D,0,Ft,mt.width,mt.height,mt.depth,0,Yt,Vt,mt.data);else if(C.isFramebufferTexture){if(Le)if(he)e.texStorage2D(a.TEXTURE_2D,te,Ft,mt.width,mt.height);else{let wt=mt.width,j=mt.height;for(let Tt=0;Tt<te;Tt++)e.texImage2D(a.TEXTURE_2D,Tt,Ft,wt,j,0,Yt,Vt,null),wt>>=1,j>>=1}}else if(Xt.length>0&&ue){he&&Le&&e.texStorage2D(a.TEXTURE_2D,te,Ft,Xt[0].width,Xt[0].height);for(let wt=0,j=Xt.length;wt<j;wt++)Ct=Xt[wt],he?e.texSubImage2D(a.TEXTURE_2D,wt,0,0,Yt,Vt,Ct):e.texImage2D(a.TEXTURE_2D,wt,Ft,Yt,Vt,Ct);C.generateMipmaps=!1}else he?(Le&&e.texStorage2D(a.TEXTURE_2D,te,Ft,mt.width,mt.height),e.texSubImage2D(a.TEXTURE_2D,0,0,0,Yt,Vt,mt)):e.texImage2D(a.TEXTURE_2D,0,Ft,Yt,Vt,mt);v(C,ue)&&x(ht),Lt.__version=bt.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function Y(L,C,et){if(C.image.length!==6)return;let ht=D(L,C),ft=C.source;e.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+et);let bt=i.get(ft);if(ft.version!==bt.__version||ht===!0){e.activeTexture(a.TEXTURE0+et);let Lt=de.getPrimaries(de.workingColorSpace),K=C.colorSpace===Ye?null:de.getPrimaries(C.colorSpace),ut=C.colorSpace===Ye||Lt===K?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,C.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,C.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let yt=C.isCompressedTexture||C.image[0].isCompressedTexture,zt=C.image[0]&&C.image[0].isDataTexture,mt=[];for(let wt=0;wt<6;wt++)!yt&&!zt?mt[wt]=b(C.image[wt],!1,!0,n.maxCubemapSize):mt[wt]=zt?C.image[wt].image:C.image[wt],mt[wt]=Pt(C,mt[wt]);let ue=mt[0],Yt=m(ue)||o,Vt=s.convert(C.format,C.colorSpace),Ft=s.convert(C.type),Ct=w(C.internalFormat,Vt,Ft,C.colorSpace),Xt=o&&C.isVideoTexture!==!0,he=bt.__version===void 0||ht===!0,Le=R(C,ue,Yt);O(a.TEXTURE_CUBE_MAP,C,Yt);let te;if(yt){Xt&&he&&e.texStorage2D(a.TEXTURE_CUBE_MAP,Le,Ct,ue.width,ue.height);for(let wt=0;wt<6;wt++){te=mt[wt].mipmaps;for(let j=0;j<te.length;j++){let Tt=te[j];C.format!==pe?Vt!==null?Xt?e.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,j,0,0,Tt.width,Tt.height,Vt,Tt.data):e.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,j,Ct,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,j,0,0,Tt.width,Tt.height,Vt,Ft,Tt.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,j,Ct,Tt.width,Tt.height,0,Vt,Ft,Tt.data)}}}else{te=C.mipmaps,Xt&&he&&(te.length>0&&Le++,e.texStorage2D(a.TEXTURE_CUBE_MAP,Le,Ct,mt[0].width,mt[0].height));for(let wt=0;wt<6;wt++)if(zt){Xt?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,mt[wt].width,mt[wt].height,Vt,Ft,mt[wt].data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ct,mt[wt].width,mt[wt].height,0,Vt,Ft,mt[wt].data);for(let j=0;j<te.length;j++){let St=te[j].image[wt].image;Xt?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,j+1,0,0,St.width,St.height,Vt,Ft,St.data):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,j+1,Ct,St.width,St.height,0,Vt,Ft,St.data)}}else{Xt?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Vt,Ft,mt[wt]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ct,Vt,Ft,mt[wt]);for(let j=0;j<te.length;j++){let Tt=te[j];Xt?e.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,j+1,0,0,Vt,Ft,Tt.image[wt]):e.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+wt,j+1,Ct,Vt,Ft,Tt.image[wt])}}}v(C,Yt)&&x(a.TEXTURE_CUBE_MAP),bt.__version=ft.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function Q(L,C,et,ht,ft,bt){let Lt=s.convert(et.format,et.colorSpace),K=s.convert(et.type),ut=w(et.internalFormat,Lt,K,et.colorSpace);if(!i.get(C).__hasExternalTextures){let zt=Math.max(1,C.width>>bt),mt=Math.max(1,C.height>>bt);ft===a.TEXTURE_3D||ft===a.TEXTURE_2D_ARRAY?e.texImage3D(ft,bt,ut,zt,mt,C.depth,0,Lt,K,null):e.texImage2D(ft,bt,ut,zt,mt,0,Lt,K,null)}e.bindFramebuffer(a.FRAMEBUFFER,L),xt(C)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ht,ft,i.get(et).__webglTexture,0,Et(C)):(ft===a.TEXTURE_2D||ft>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ht,ft,i.get(et).__webglTexture,bt),e.bindFramebuffer(a.FRAMEBUFFER,null)}function X(L,C,et){if(a.bindRenderbuffer(a.RENDERBUFFER,L),C.depthBuffer&&!C.stencilBuffer){let ht=o===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(et||xt(C)){let ft=C.depthTexture;ft&&ft.isDepthTexture&&(ft.type===mn?ht=a.DEPTH_COMPONENT32F:ft.type===Cn&&(ht=a.DEPTH_COMPONENT24));let bt=Et(C);xt(C)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,bt,ht,C.width,C.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,bt,ht,C.width,C.height)}else a.renderbufferStorage(a.RENDERBUFFER,ht,C.width,C.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,L)}else if(C.depthBuffer&&C.stencilBuffer){let ht=Et(C);et&&xt(C)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ht,a.DEPTH24_STENCIL8,C.width,C.height):xt(C)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ht,a.DEPTH24_STENCIL8,C.width,C.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,C.width,C.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,L)}else{let ht=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ft=0;ft<ht.length;ft++){let bt=ht[ft],Lt=s.convert(bt.format,bt.colorSpace),K=s.convert(bt.type),ut=w(bt.internalFormat,Lt,K,bt.colorSpace),yt=Et(C);et&&xt(C)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,yt,ut,C.width,C.height):xt(C)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,yt,ut,C.width,C.height):a.renderbufferStorage(a.RENDERBUFFER,ut,C.width,C.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ot(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(a.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),J(C.depthTexture,0);let ht=i.get(C.depthTexture).__webglTexture,ft=Et(C);if(C.depthTexture.format===Jn)xt(C)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ht,0,ft):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ht,0);else if(C.depthTexture.format===Hs)xt(C)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ht,0,ft):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function nt(L){let C=i.get(L),et=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");ot(C.__webglFramebuffer,L)}else if(et){C.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(a.FRAMEBUFFER,C.__webglFramebuffer[ht]),C.__webglDepthbuffer[ht]=a.createRenderbuffer(),X(C.__webglDepthbuffer[ht],L,!1)}else e.bindFramebuffer(a.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=a.createRenderbuffer(),X(C.__webglDepthbuffer,L,!1);e.bindFramebuffer(a.FRAMEBUFFER,null)}function lt(L,C,et){let ht=i.get(L);C!==void 0&&Q(ht.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),et!==void 0&&nt(L)}function Z(L){let C=L.texture,et=i.get(L),ht=i.get(C);L.addEventListener("dispose",A),L.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=a.createTexture()),ht.__version=C.version,r.memory.textures++);let ft=L.isWebGLCubeRenderTarget===!0,bt=L.isWebGLMultipleRenderTargets===!0,Lt=m(L)||o;if(ft){et.__webglFramebuffer=[];for(let K=0;K<6;K++)if(o&&C.mipmaps&&C.mipmaps.length>0){et.__webglFramebuffer[K]=[];for(let ut=0;ut<C.mipmaps.length;ut++)et.__webglFramebuffer[K][ut]=a.createFramebuffer()}else et.__webglFramebuffer[K]=a.createFramebuffer()}else{if(o&&C.mipmaps&&C.mipmaps.length>0){et.__webglFramebuffer=[];for(let K=0;K<C.mipmaps.length;K++)et.__webglFramebuffer[K]=a.createFramebuffer()}else et.__webglFramebuffer=a.createFramebuffer();if(bt)if(n.drawBuffers){let K=L.texture;for(let ut=0,yt=K.length;ut<yt;ut++){let zt=i.get(K[ut]);zt.__webglTexture===void 0&&(zt.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&xt(L)===!1){let K=bt?C:[C];et.__webglMultisampledFramebuffer=a.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(a.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let ut=0;ut<K.length;ut++){let yt=K[ut];et.__webglColorRenderbuffer[ut]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,et.__webglColorRenderbuffer[ut]);let zt=s.convert(yt.format,yt.colorSpace),mt=s.convert(yt.type),ue=w(yt.internalFormat,zt,mt,yt.colorSpace,L.isXRRenderTarget===!0),Yt=Et(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,Yt,ue,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ut,a.RENDERBUFFER,et.__webglColorRenderbuffer[ut])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=a.createRenderbuffer(),X(et.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ft){e.bindTexture(a.TEXTURE_CUBE_MAP,ht.__webglTexture),O(a.TEXTURE_CUBE_MAP,C,Lt);for(let K=0;K<6;K++)if(o&&C.mipmaps&&C.mipmaps.length>0)for(let ut=0;ut<C.mipmaps.length;ut++)Q(et.__webglFramebuffer[K][ut],L,C,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut);else Q(et.__webglFramebuffer[K],L,C,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);v(C,Lt)&&x(a.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){let K=L.texture;for(let ut=0,yt=K.length;ut<yt;ut++){let zt=K[ut],mt=i.get(zt);e.bindTexture(a.TEXTURE_2D,mt.__webglTexture),O(a.TEXTURE_2D,zt,Lt),Q(et.__webglFramebuffer,L,zt,a.COLOR_ATTACHMENT0+ut,a.TEXTURE_2D,0),v(zt,Lt)&&x(a.TEXTURE_2D)}e.unbindTexture()}else{let K=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?K=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(K,ht.__webglTexture),O(K,C,Lt),o&&C.mipmaps&&C.mipmaps.length>0)for(let ut=0;ut<C.mipmaps.length;ut++)Q(et.__webglFramebuffer[ut],L,C,a.COLOR_ATTACHMENT0,K,ut);else Q(et.__webglFramebuffer,L,C,a.COLOR_ATTACHMENT0,K,0);v(C,Lt)&&x(K),e.unbindTexture()}L.depthBuffer&&nt(L)}function kt(L){let C=m(L)||o,et=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ht=0,ft=et.length;ht<ft;ht++){let bt=et[ht];if(v(bt,C)){let Lt=L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,K=i.get(bt).__webglTexture;e.bindTexture(Lt,K),x(Lt),e.unbindTexture()}}}function vt(L){if(o&&L.samples>0&&xt(L)===!1){let C=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],et=L.width,ht=L.height,ft=a.COLOR_BUFFER_BIT,bt=[],Lt=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,K=i.get(L),ut=L.isWebGLMultipleRenderTargets===!0;if(ut)for(let yt=0;yt<C.length;yt++)e.bindFramebuffer(a.FRAMEBUFFER,K.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+yt,a.RENDERBUFFER,null),e.bindFramebuffer(a.FRAMEBUFFER,K.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+yt,a.TEXTURE_2D,null,0);e.bindFramebuffer(a.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let yt=0;yt<C.length;yt++){bt.push(a.COLOR_ATTACHMENT0+yt),L.depthBuffer&&bt.push(Lt);let zt=K.__ignoreDepthValues!==void 0?K.__ignoreDepthValues:!1;if(zt===!1&&(L.depthBuffer&&(ft|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ft|=a.STENCIL_BUFFER_BIT)),ut&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,K.__webglColorRenderbuffer[yt]),zt===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[Lt]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[Lt])),ut){let mt=i.get(C[yt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,mt,0)}a.blitFramebuffer(0,0,et,ht,0,0,et,ht,ft,a.NEAREST),c&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,bt)}if(e.bindFramebuffer(a.READ_FRAMEBUFFER,null),e.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ut)for(let yt=0;yt<C.length;yt++){e.bindFramebuffer(a.FRAMEBUFFER,K.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+yt,a.RENDERBUFFER,K.__webglColorRenderbuffer[yt]);let zt=i.get(C[yt]).__webglTexture;e.bindFramebuffer(a.FRAMEBUFFER,K.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+yt,a.TEXTURE_2D,zt,0)}e.bindFramebuffer(a.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}}function Et(L){return Math.min(n.maxSamples,L.samples)}function xt(L){let C=i.get(L);return o&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ht(L){let C=r.render.frame;u.get(L)!==C&&(u.set(L,C),L.update())}function Pt(L,C){let et=L.colorSpace,ht=L.format,ft=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Dh||et!==Oe&&et!==Ye&&(de.getTransfer(et)===we?o===!1?t.has("EXT_sRGB")===!0&&ht===pe?(L.format=Dh,L.minFilter=Jt,L.generateMipmaps=!1):C=Or.sRGBToLinear(C):(ht!==pe||ft!==Be)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),C}this.allocateTextureUnit=U,this.resetTextureUnits=q,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=H,this.setTextureCube=N,this.rebindTextures=lt,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=xt}function Tv(a,t,e){let i=e.isWebGL2;function n(s,r=Ye){let o,h=de.getTransfer(r);if(s===Be)return a.UNSIGNED_BYTE;if(s===Ed)return a.UNSIGNED_SHORT_4_4_4_4;if(s===Td)return a.UNSIGNED_SHORT_5_5_5_1;if(s===ap)return a.BYTE;if(s===rp)return a.SHORT;if(s===wc)return a.UNSIGNED_SHORT;if(s===Md)return a.INT;if(s===Cn)return a.UNSIGNED_INT;if(s===mn)return a.FLOAT;if(s===bn)return i?a.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===op)return a.ALPHA;if(s===pe)return a.RGBA;if(s===hp)return a.LUMINANCE;if(s===cp)return a.LUMINANCE_ALPHA;if(s===Jn)return a.DEPTH_COMPONENT;if(s===Hs)return a.DEPTH_STENCIL;if(s===Dh)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Mc)return a.RED;if(s===Sd)return a.RED_INTEGER;if(s===lp)return a.RG;if(s===Ad)return a.RG_INTEGER;if(s===Rd)return a.RGBA_INTEGER;if(s===jo||s===Yo||s===Qo||s===Zo)if(h===we)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===jo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===jo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ul||s===Ol||s===Nl||s===Bl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ul)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ol)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Cd)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hl||s===Vl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Hl)return h===we?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Vl)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gl||s===Wl||s===ql||s===Xl||s===Kl||s===jl||s===Yl||s===Ql||s===Zl||s===Jl||s===$l||s===tu||s===eu||s===iu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Gl)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wl)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ql)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xl)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kl)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jl)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yl)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ql)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zl)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jl)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$l)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tu)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===eu)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===iu)return h===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jo||s===nu||s===su)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Jo)return h===we?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===nu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===su)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===up||s===au||s===ru||s===ou)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Jo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===au)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ru)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ou)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zn?i?a.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:n}}var Yh=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},re=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sv={type:"move"},La=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,r=null,o=this._targetRay,h=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,i),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],l=c.joints["thumb-tip"],d=u.position.distanceTo(l.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return o!==null&&(o.visible=n!==null),h!==null&&(h.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new re;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Qh=class extends In{constructor(t,e){super();let i=this,n=null,s=1,r=null,o="local-floor",h=1,c=null,u=null,l=null,d=null,f=null,g=null,b=e.getContextAttributes(),m=null,p=null,v=[],x=[],w=new gt,R=null,y=new Ve;y.layers.enable(1),y.viewport=new ne;let E=new Ve;E.layers.enable(2),E.viewport=new ne;let A=[y,E],_=new Yh;_.layers.enable(1),_.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let D=v[O];return D===void 0&&(D=new La,v[O]=D),D.getTargetRaySpace()},this.getControllerGrip=function(O){let D=v[O];return D===void 0&&(D=new La,v[O]=D),D.getGripSpace()},this.getHand=function(O){let D=v[O];return D===void 0&&(D=new La,v[O]=D),D.getHandSpace()};function G(O){let D=x.indexOf(O.inputSource);if(D===-1)return;let B=v[D];B!==void 0&&(B.update(O.inputSource,O.frame,c||r),B.dispatchEvent({type:O.type,data:O.inputSource}))}function q(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",U);for(let O=0;O<v.length;O++){let D=x[O];D!==null&&(x[O]=null,v[O].disconnect(D))}T=null,I=null,t.setRenderTarget(m),f=null,d=null,l=null,n=null,p=null,k.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return l},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(O){if(n=O,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",q),n.addEventListener("inputsourceschange",U),b.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let D={antialias:n.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,D),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Te(f.framebufferWidth,f.framebufferHeight,{format:pe,type:Be,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil})}else{let D=null,B=null,Y=null;b.depth&&(Y=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=b.stencil?Hs:Jn,B=b.stencil?Zn:Cn);let Q={colorFormat:e.RGBA8,depthFormat:Y,scaleFactor:s};l=new XRWebGLBinding(n,e),d=l.createProjectionLayer(Q),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Te(d.textureWidth,d.textureHeight,{format:pe,type:Be,depthTexture:new es(d.textureWidth,d.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0});let X=t.properties.get(p);X.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(h),c=null,r=await n.requestReferenceSpace(o),k.setContext(n),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function U(O){for(let D=0;D<O.removed.length;D++){let B=O.removed[D],Y=x.indexOf(B);Y>=0&&(x[Y]=null,v[Y].disconnect(B))}for(let D=0;D<O.added.length;D++){let B=O.added[D],Y=x.indexOf(B);if(Y===-1){for(let X=0;X<v.length;X++)if(X>=x.length){x.push(B),Y=X;break}else if(x[X]===null){x[X]=B,Y=X;break}if(Y===-1)break}let Q=v[Y];Q&&Q.connect(B)}}let z=new M,J=new M;function V(O,D,B){z.setFromMatrixPosition(D.matrixWorld),J.setFromMatrixPosition(B.matrixWorld);let Y=z.distanceTo(J),Q=D.projectionMatrix.elements,X=B.projectionMatrix.elements,ot=Q[14]/(Q[10]-1),nt=Q[14]/(Q[10]+1),lt=(Q[9]+1)/Q[5],Z=(Q[9]-1)/Q[5],kt=(Q[8]-1)/Q[0],vt=(X[8]+1)/X[0],Et=ot*kt,xt=ot*vt,Ht=Y/(-kt+vt),Pt=Ht*-kt;D.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Pt),O.translateZ(Ht),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();let L=ot+Ht,C=nt+Ht,et=Et-Pt,ht=xt+(Y-Pt),ft=lt*nt/C*L,bt=Z*nt/C*L;O.projectionMatrix.makePerspective(et,ht,ft,bt,L,C),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function H(O,D){D===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(D.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(n===null)return;_.near=E.near=y.near=O.near,_.far=E.far=y.far=O.far,(T!==_.near||I!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,I=_.far);let D=O.parent,B=_.cameras;H(_,D);for(let Y=0;Y<B.length;Y++)H(B[Y],D);B.length===2?V(_,y,E):_.projectionMatrix.copy(y.projectionMatrix),N(O,_,D)};function N(O,D,B){B===null?O.matrix.copy(D.matrixWorld):(O.matrix.copy(B.matrixWorld),O.matrix.invert(),O.matrix.multiply(D.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(D.projectionMatrix),O.projectionMatrixInverse.copy(D.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Gs*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return h},this.setFoveation=function(O){h=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let P=null;function W(O,D){if(u=D.getViewerPose(c||r),g=D,u!==null){let B=u.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let Y=!1;B.length!==_.cameras.length&&(_.cameras.length=0,Y=!0);for(let Q=0;Q<B.length;Q++){let X=B[Q],ot=null;if(f!==null)ot=f.getViewport(X);else{let lt=l.getViewSubImage(d,X);ot=lt.viewport,Q===0&&(t.setRenderTargetTextures(p,lt.colorTexture,d.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(p))}let nt=A[Q];nt===void 0&&(nt=new Ve,nt.layers.enable(Q),nt.viewport=new ne,A[Q]=nt),nt.matrix.fromArray(X.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(X.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ot.x,ot.y,ot.width,ot.height),Q===0&&(_.matrix.copy(nt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Y===!0&&_.cameras.push(nt)}}for(let B=0;B<v.length;B++){let Y=x[B],Q=v[B];Y!==null&&Q!==void 0&&Q.update(Y,D,c||r)}P&&P(O,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),g=null}let k=new Ud;k.setAnimationLoop(W),this.setAnimationLoop=function(O){P=O},this.dispose=function(){}}};function Av(a,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,zd(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),l(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?h(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ce&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ce&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=a._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function h(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ce&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Rv(a,t,e,i){let n={},s={},r=[],o=e.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(v,x){let w=x.program;i.uniformBlockBinding(v,w)}function c(v,x){let w=n[v.id];w===void 0&&(g(v),w=u(v),n[v.id]=w,v.addEventListener("dispose",m));let R=x.program;i.updateUBOMapping(v,R);let y=t.render.frame;s[v.id]!==y&&(d(v),s[v.id]=y)}function u(v){let x=l();v.__bindingPointIndex=x;let w=a.createBuffer(),R=v.__size,y=v.usage;return a.bindBuffer(a.UNIFORM_BUFFER,w),a.bufferData(a.UNIFORM_BUFFER,R,y),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,x,w),w}function l(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let x=n[v.id],w=v.uniforms,R=v.__cache;a.bindBuffer(a.UNIFORM_BUFFER,x);for(let y=0,E=w.length;y<E;y++){let A=Array.isArray(w[y])?w[y]:[w[y]];for(let _=0,T=A.length;_<T;_++){let I=A[_];if(f(I,y,_,R)===!0){let G=I.__offset,q=Array.isArray(I.value)?I.value:[I.value],U=0;for(let z=0;z<q.length;z++){let J=q[z],V=b(J);typeof J=="number"||typeof J=="boolean"?(I.__data[0]=J,a.bufferSubData(a.UNIFORM_BUFFER,G+U,I.__data)):J.isMatrix3?(I.__data[0]=J.elements[0],I.__data[1]=J.elements[1],I.__data[2]=J.elements[2],I.__data[3]=0,I.__data[4]=J.elements[3],I.__data[5]=J.elements[4],I.__data[6]=J.elements[5],I.__data[7]=0,I.__data[8]=J.elements[6],I.__data[9]=J.elements[7],I.__data[10]=J.elements[8],I.__data[11]=0):(J.toArray(I.__data,U),U+=V.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,G,I.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(v,x,w,R){let y=v.value,E=x+"_"+w;if(R[E]===void 0)return typeof y=="number"||typeof y=="boolean"?R[E]=y:R[E]=y.clone(),!0;{let A=R[E];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return R[E]=y,!0}else if(A.equals(y)===!1)return A.copy(y),!0}return!1}function g(v){let x=v.uniforms,w=0,R=16;for(let E=0,A=x.length;E<A;E++){let _=Array.isArray(x[E])?x[E]:[x[E]];for(let T=0,I=_.length;T<I;T++){let G=_[T],q=Array.isArray(G.value)?G.value:[G.value];for(let U=0,z=q.length;U<z;U++){let J=q[U],V=b(J),H=w%R;H!==0&&R-H<V.boundary&&(w+=R-H),G.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=V.storage}}}let y=w%R;return y>0&&(w+=R-y),v.__size=w,v.__cache={},this}function b(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let w=r.indexOf(x.__bindingPointIndex);r.splice(w,1),a.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function p(){for(let v in n)a.deleteBuffer(n[v]);r=[],n={},s={}}return{bind:h,update:c,dispose:p}}var Oa=class{constructor(t={}){let{canvas:e=Up(),context:i=null,depth:n=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=r;let f=new Uint32Array(4),g=new Int32Array(4),b=null,m=null,p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;let x=this,w=!1,R=0,y=0,E=null,A=-1,_=null,T=new ne,I=new ne,G=null,q=new Dt(0),U=0,z=e.width,J=e.height,V=1,H=null,N=null,P=new ne(0,0,z,J),W=new ne(0,0,z,J),k=!1,O=new Ua,D=!1,B=!1,Y=null,Q=new Rt,X=new gt,ot=new M,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return E===null?V:1}let Z=i;function kt(F,tt){for(let at=0;at<F.length;at++){let rt=F[at],st=e.getContext(rt,tt);if(st!==null)return st}return null}try{let F={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vc}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",j,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),Z===null){let tt=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&tt.shift(),Z=kt(tt,F),Z===null)throw kt(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let vt,Et,xt,Ht,Pt,L,C,et,ht,ft,bt,Lt,K,ut,yt,zt,mt,ue,Yt,Vt,Ft,Ct,Xt,he;function Le(){vt=new Kg(Z),Et=new Hg(Z,vt,t),vt.init(Et),Ct=new Tv(Z,vt,Et),xt=new Mv(Z,vt,Et),Ht=new Qg(Z),Pt=new uv,L=new Ev(Z,vt,xt,Pt,Et,Ct,Ht),C=new Gg(x),et=new Xg(x),ht=new s0(Z,Et),Xt=new Ng(Z,vt,ht,Et),ft=new jg(Z,ht,Ht,Xt),bt=new tb(Z,ft,ht,Ht),Yt=new $g(Z,Et,L),zt=new Vg(Pt),Lt=new lv(x,C,et,vt,Et,Xt,zt),K=new Av(x,Pt),ut=new fv,yt=new xv(vt,Et),ue=new Og(x,C,et,xt,bt,d,h),mt=new wv(x,bt,Et),he=new Rv(Z,Ht,Et,xt),Vt=new Bg(Z,vt,Ht,Et),Ft=new Yg(Z,vt,Ht,Et),Ht.programs=Lt.programs,x.capabilities=Et,x.extensions=vt,x.properties=Pt,x.renderLists=ut,x.shadowMap=mt,x.state=xt,x.info=Ht}Le();let te=new Qh(x,Z);this.xr=te,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let F=vt.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=vt.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(F){F!==void 0&&(V=F,this.setSize(z,J,!1))},this.getSize=function(F){return F.set(z,J)},this.setSize=function(F,tt,at=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=F,J=tt,e.width=Math.floor(F*V),e.height=Math.floor(tt*V),at===!0&&(e.style.width=F+"px",e.style.height=tt+"px"),this.setViewport(0,0,F,tt)},this.getDrawingBufferSize=function(F){return F.set(z*V,J*V).floor()},this.setDrawingBufferSize=function(F,tt,at){z=F,J=tt,V=at,e.width=Math.floor(F*at),e.height=Math.floor(tt*at),this.setViewport(0,0,F,tt)},this.getCurrentViewport=function(F){return F.copy(T)},this.getViewport=function(F){return F.copy(P)},this.setViewport=function(F,tt,at,rt){F.isVector4?P.set(F.x,F.y,F.z,F.w):P.set(F,tt,at,rt),xt.viewport(T.copy(P).multiplyScalar(V).floor())},this.getScissor=function(F){return F.copy(W)},this.setScissor=function(F,tt,at,rt){F.isVector4?W.set(F.x,F.y,F.z,F.w):W.set(F,tt,at,rt),xt.scissor(I.copy(W).multiplyScalar(V).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(F){xt.setScissorTest(k=F)},this.setOpaqueSort=function(F){H=F},this.setTransparentSort=function(F){N=F},this.getClearColor=function(F){return F.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(F=!0,tt=!0,at=!0){let rt=0;if(F){let st=!1;if(E!==null){let At=E.texture.format;st=At===Rd||At===Ad||At===Sd}if(st){let At=E.texture.type,It=At===Be||At===Cn||At===wc||At===Zn||At===Ed||At===Td,Nt=ue.getClearColor(),Wt=ue.getClearAlpha(),$t=Nt.r,Kt=Nt.g,Qt=Nt.b;It?(f[0]=$t,f[1]=Kt,f[2]=Qt,f[3]=Wt,Z.clearBufferuiv(Z.COLOR,0,f)):(g[0]=$t,g[1]=Kt,g[2]=Qt,g[3]=Wt,Z.clearBufferiv(Z.COLOR,0,g))}else rt|=Z.COLOR_BUFFER_BIT}tt&&(rt|=Z.DEPTH_BUFFER_BIT),at&&(rt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",j,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),ut.dispose(),yt.dispose(),Pt.dispose(),C.dispose(),et.dispose(),bt.dispose(),Xt.dispose(),he.dispose(),Lt.dispose(),te.dispose(),te.removeEventListener("sessionstart",oi),te.removeEventListener("sessionend",xe),Y&&(Y.dispose(),Y=null),hi.stop()};function wt(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let F=Ht.autoReset,tt=mt.enabled,at=mt.autoUpdate,rt=mt.needsUpdate,st=mt.type;Le(),Ht.autoReset=F,mt.enabled=tt,mt.autoUpdate=at,mt.needsUpdate=rt,mt.type=st}function Tt(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function St(F){let tt=F.target;tt.removeEventListener("dispose",St),Gt(tt)}function Gt(F){Ot(F),Pt.remove(F)}function Ot(F){let tt=Pt.get(F).programs;tt!==void 0&&(tt.forEach(function(at){Lt.releaseProgram(at)}),F.isShaderMaterial&&Lt.releaseShaderCache(F))}this.renderBufferDirect=function(F,tt,at,rt,st,At){tt===null&&(tt=nt);let It=st.isMesh&&st.matrixWorld.determinant()<0,Nt=wf(F,tt,at,rt,st);xt.setMaterial(rt,It);let Wt=at.index,$t=1;if(rt.wireframe===!0){if(Wt=ft.getWireframeAttribute(at),Wt===void 0)return;$t=2}let Kt=at.drawRange,Qt=at.attributes.position,ze=Kt.start*$t,_i=(Kt.start+Kt.count)*$t;At!==null&&(ze=Math.max(ze,At.start*$t),_i=Math.min(_i,(At.start+At.count)*$t)),Wt!==null?(ze=Math.max(ze,0),_i=Math.min(_i,Wt.count)):Qt!=null&&(ze=Math.max(ze,0),_i=Math.min(_i,Qt.count));let Ke=_i-ze;if(Ke<0||Ke===1/0)return;Xt.setup(st,rt,Nt,at,Wt);let rn,Re=Vt;if(Wt!==null&&(rn=ht.get(Wt),Re=Ft,Re.setIndex(rn)),st.isMesh)rt.wireframe===!0?(xt.setLineWidth(rt.wireframeLinewidth*lt()),Re.setMode(Z.LINES)):Re.setMode(Z.TRIANGLES);else if(st.isLine){let ee=rt.linewidth;ee===void 0&&(ee=1),xt.setLineWidth(ee*lt()),st.isLineSegments?Re.setMode(Z.LINES):st.isLineLoop?Re.setMode(Z.LINE_LOOP):Re.setMode(Z.LINE_STRIP)}else st.isPoints?Re.setMode(Z.POINTS):st.isSprite&&Re.setMode(Z.TRIANGLES);if(st.isBatchedMesh)Re.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else if(st.isInstancedMesh)Re.renderInstances(ze,Ke,st.count);else if(at.isInstancedBufferGeometry){let ee=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Wo=Math.min(at.instanceCount,ee);Re.renderInstances(ze,Ke,Wo)}else Re.render(ze,Ke)};function be(F,tt,at){F.transparent===!0&&F.side===Ue&&F.forceSinglePass===!1?(F.side=Ce,F.needsUpdate=!0,Ja(F,tt,at),F.side=Qe,F.needsUpdate=!0,Ja(F,tt,at),F.side=Ue):Ja(F,tt,at)}this.compile=function(F,tt,at=null){at===null&&(at=F),m=yt.get(at),m.init(),v.push(m),at.traverseVisible(function(st){st.isLight&&st.layers.test(tt.layers)&&(m.pushLight(st),st.castShadow&&m.pushShadow(st))}),F!==at&&F.traverseVisible(function(st){st.isLight&&st.layers.test(tt.layers)&&(m.pushLight(st),st.castShadow&&m.pushShadow(st))}),m.setupLights(x._useLegacyLights);let rt=new Set;return F.traverse(function(st){let At=st.material;if(At)if(Array.isArray(At))for(let It=0;It<At.length;It++){let Nt=At[It];be(Nt,at,st),rt.add(Nt)}else be(At,at,st),rt.add(At)}),v.pop(),m=null,rt},this.compileAsync=function(F,tt,at=null){let rt=this.compile(F,tt,at);return new Promise(st=>{function At(){if(rt.forEach(function(It){Pt.get(It).currentProgram.isReady()&&rt.delete(It)}),rt.size===0){st(F);return}setTimeout(At,10)}vt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ve=null;function Xe(F){ve&&ve(F)}function oi(){hi.stop()}function xe(){hi.start()}let hi=new Ud;hi.setAnimationLoop(Xe),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(F){ve=F,te.setAnimationLoop(F),F===null?hi.stop():hi.start()},te.addEventListener("sessionstart",oi),te.addEventListener("sessionend",xe),this.render=function(F,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(tt),tt=te.getCamera()),F.isScene===!0&&F.onBeforeRender(x,F,tt,E),m=yt.get(F,v.length),m.init(),v.push(m),Q.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),O.setFromProjectionMatrix(Q),B=this.localClippingEnabled,D=zt.init(this.clippingPlanes,B),b=ut.get(F,p.length),b.init(),p.push(b),ji(F,tt,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort(H,N),this.info.render.frame++,D===!0&&zt.beginShadows();let at=m.state.shadowsArray;if(mt.render(at,F,tt),D===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(b,F),m.setupLights(x._useLegacyLights),tt.isArrayCamera){let rt=tt.cameras;for(let st=0,At=rt.length;st<At;st++){let It=rt[st];Tl(b,F,It,It.viewport)}}else Tl(b,F,tt);E!==null&&(L.updateMultisampleRenderTarget(E),L.updateRenderTargetMipmap(E)),F.isScene===!0&&F.onAfterRender(x,F,tt),Xt.resetDefaultState(),A=-1,_=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function ji(F,tt,at,rt){if(F.visible===!1)return;if(F.layers.test(tt.layers)){if(F.isGroup)at=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(tt);else if(F.isLight)m.pushLight(F),F.castShadow&&m.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||O.intersectsSprite(F)){rt&&ot.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Q);let It=bt.update(F),Nt=F.material;Nt.visible&&b.push(F,It,Nt,at,ot.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||O.intersectsObject(F))){let It=bt.update(F),Nt=F.material;if(rt&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),ot.copy(F.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),ot.copy(It.boundingSphere.center)),ot.applyMatrix4(F.matrixWorld).applyMatrix4(Q)),Array.isArray(Nt)){let Wt=It.groups;for(let $t=0,Kt=Wt.length;$t<Kt;$t++){let Qt=Wt[$t],ze=Nt[Qt.materialIndex];ze&&ze.visible&&b.push(F,It,ze,at,ot.z,Qt)}}else Nt.visible&&b.push(F,It,Nt,at,ot.z,null)}}let At=F.children;for(let It=0,Nt=At.length;It<Nt;It++)ji(At[It],tt,at,rt)}function Tl(F,tt,at,rt){let st=F.opaque,At=F.transmissive,It=F.transparent;m.setupLightsView(at),D===!0&&zt.setGlobalState(x.clippingPlanes,at),At.length>0&&_f(st,At,tt,at),rt&&xt.viewport(T.copy(rt)),st.length>0&&Za(st,tt,at),At.length>0&&Za(At,tt,at),It.length>0&&Za(It,tt,at),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function _f(F,tt,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;let At=Et.isWebGL2;Y===null&&(Y=new Te(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?bn:Be,minFilter:Je,samples:At?4:0})),x.getDrawingBufferSize(X),At?Y.setSize(X.x,X.y):Y.setSize(Ur(X.x),Ur(X.y));let It=x.getRenderTarget();x.setRenderTarget(Y),x.getClearColor(q),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();let Nt=x.toneMapping;x.toneMapping=Zi,Za(F,at,rt),L.updateMultisampleRenderTarget(Y),L.updateRenderTargetMipmap(Y);let Wt=!1;for(let $t=0,Kt=tt.length;$t<Kt;$t++){let Qt=tt[$t],ze=Qt.object,_i=Qt.geometry,Ke=Qt.material,rn=Qt.group;if(Ke.side===Ue&&ze.layers.test(rt.layers)){let Re=Ke.side;Ke.side=Ce,Ke.needsUpdate=!0,Sl(ze,at,rt,_i,Ke,rn),Ke.side=Re,Ke.needsUpdate=!0,Wt=!0}}Wt===!0&&(L.updateMultisampleRenderTarget(Y),L.updateRenderTargetMipmap(Y)),x.setRenderTarget(It),x.setClearColor(q,U),x.toneMapping=Nt}function Za(F,tt,at){let rt=tt.isScene===!0?tt.overrideMaterial:null;for(let st=0,At=F.length;st<At;st++){let It=F[st],Nt=It.object,Wt=It.geometry,$t=rt===null?It.material:rt,Kt=It.group;Nt.layers.test(at.layers)&&Sl(Nt,tt,at,Wt,$t,Kt)}}function Sl(F,tt,at,rt,st,At){F.onBeforeRender(x,tt,at,rt,st,At),F.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),st.onBeforeRender(x,tt,at,rt,F,At),st.transparent===!0&&st.side===Ue&&st.forceSinglePass===!1?(st.side=Ce,st.needsUpdate=!0,x.renderBufferDirect(at,tt,rt,st,F,At),st.side=Qe,st.needsUpdate=!0,x.renderBufferDirect(at,tt,rt,st,F,At),st.side=Ue):x.renderBufferDirect(at,tt,rt,st,F,At),F.onAfterRender(x,tt,at,rt,st,At)}function Ja(F,tt,at){tt.isScene!==!0&&(tt=nt);let rt=Pt.get(F),st=m.state.lights,At=m.state.shadowsArray,It=st.state.version,Nt=Lt.getParameters(F,st.state,At,tt,at),Wt=Lt.getProgramCacheKey(Nt),$t=rt.programs;rt.environment=F.isMeshStandardMaterial?tt.environment:null,rt.fog=tt.fog,rt.envMap=(F.isMeshStandardMaterial?et:C).get(F.envMap||rt.environment),$t===void 0&&(F.addEventListener("dispose",St),$t=new Map,rt.programs=$t);let Kt=$t.get(Wt);if(Kt!==void 0){if(rt.currentProgram===Kt&&rt.lightsStateVersion===It)return Rl(F,Nt),Kt}else Nt.uniforms=Lt.getUniforms(F),F.onBuild(at,Nt,x),F.onBeforeCompile(Nt,x),Kt=Lt.acquireProgram(Nt,Wt),$t.set(Wt,Kt),rt.uniforms=Nt.uniforms;let Qt=rt.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Qt.clippingPlanes=zt.uniform),Rl(F,Nt),rt.needsLights=Ef(F),rt.lightsStateVersion=It,rt.needsLights&&(Qt.ambientLightColor.value=st.state.ambient,Qt.lightProbe.value=st.state.probe,Qt.directionalLights.value=st.state.directional,Qt.directionalLightShadows.value=st.state.directionalShadow,Qt.spotLights.value=st.state.spot,Qt.spotLightShadows.value=st.state.spotShadow,Qt.rectAreaLights.value=st.state.rectArea,Qt.ltc_1.value=st.state.rectAreaLTC1,Qt.ltc_2.value=st.state.rectAreaLTC2,Qt.pointLights.value=st.state.point,Qt.pointLightShadows.value=st.state.pointShadow,Qt.hemisphereLights.value=st.state.hemi,Qt.directionalShadowMap.value=st.state.directionalShadowMap,Qt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Qt.spotShadowMap.value=st.state.spotShadowMap,Qt.spotLightMatrix.value=st.state.spotLightMatrix,Qt.spotLightMap.value=st.state.spotLightMap,Qt.pointShadowMap.value=st.state.pointShadowMap,Qt.pointShadowMatrix.value=st.state.pointShadowMatrix),rt.currentProgram=Kt,rt.uniformsList=null,Kt}function Al(F){if(F.uniformsList===null){let tt=F.currentProgram.getUniforms();F.uniformsList=Os.seqWithValue(tt.seq,F.uniforms)}return F.uniformsList}function Rl(F,tt){let at=Pt.get(F);at.outputColorSpace=tt.outputColorSpace,at.batching=tt.batching,at.instancing=tt.instancing,at.instancingColor=tt.instancingColor,at.skinning=tt.skinning,at.morphTargets=tt.morphTargets,at.morphNormals=tt.morphNormals,at.morphColors=tt.morphColors,at.morphTargetsCount=tt.morphTargetsCount,at.numClippingPlanes=tt.numClippingPlanes,at.numIntersection=tt.numClipIntersection,at.vertexAlphas=tt.vertexAlphas,at.vertexTangents=tt.vertexTangents,at.toneMapping=tt.toneMapping}function wf(F,tt,at,rt,st){tt.isScene!==!0&&(tt=nt),L.resetTextureUnits();let At=tt.fog,It=rt.isMeshStandardMaterial?tt.environment:null,Nt=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Oe,Wt=(rt.isMeshStandardMaterial?et:C).get(rt.envMap||It),$t=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Kt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Qt=!!at.morphAttributes.position,ze=!!at.morphAttributes.normal,_i=!!at.morphAttributes.color,Ke=Zi;rt.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ke=x.toneMapping);let rn=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Re=rn!==void 0?rn.length:0,ee=Pt.get(rt),Wo=m.state.lights;if(D===!0&&(B===!0||F!==_)){let Pi=F===_&&rt.id===A;zt.setState(rt,F,Pi)}let Fe=!1;rt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Wo.state.version||ee.outputColorSpace!==Nt||st.isBatchedMesh&&ee.batching===!1||!st.isBatchedMesh&&ee.batching===!0||st.isInstancedMesh&&ee.instancing===!1||!st.isInstancedMesh&&ee.instancing===!0||st.isSkinnedMesh&&ee.skinning===!1||!st.isSkinnedMesh&&ee.skinning===!0||st.isInstancedMesh&&ee.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&ee.instancingColor===!1&&st.instanceColor!==null||ee.envMap!==Wt||rt.fog===!0&&ee.fog!==At||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==zt.numPlanes||ee.numIntersection!==zt.numIntersection)||ee.vertexAlphas!==$t||ee.vertexTangents!==Kt||ee.morphTargets!==Qt||ee.morphNormals!==ze||ee.morphColors!==_i||ee.toneMapping!==Ke||Et.isWebGL2===!0&&ee.morphTargetsCount!==Re)&&(Fe=!0):(Fe=!0,ee.__version=rt.version);let Vn=ee.currentProgram;Fe===!0&&(Vn=Ja(rt,tt,st));let Cl=!1,ga=!1,qo=!1,ii=Vn.getUniforms(),Gn=ee.uniforms;if(xt.useProgram(Vn.program)&&(Cl=!0,ga=!0,qo=!0),rt.id!==A&&(A=rt.id,ga=!0),Cl||_!==F){ii.setValue(Z,"projectionMatrix",F.projectionMatrix),ii.setValue(Z,"viewMatrix",F.matrixWorldInverse);let Pi=ii.map.cameraPosition;Pi!==void 0&&Pi.setValue(Z,ot.setFromMatrixPosition(F.matrixWorld)),Et.logarithmicDepthBuffer&&ii.setValue(Z,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ii.setValue(Z,"isOrthographic",F.isOrthographicCamera===!0),_!==F&&(_=F,ga=!0,qo=!0)}if(st.isSkinnedMesh){ii.setOptional(Z,st,"bindMatrix"),ii.setOptional(Z,st,"bindMatrixInverse");let Pi=st.skeleton;Pi&&(Et.floatVertexTextures?(Pi.boneTexture===null&&Pi.computeBoneTexture(),ii.setValue(Z,"boneTexture",Pi.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}st.isBatchedMesh&&(ii.setOptional(Z,st,"batchingTexture"),ii.setValue(Z,"batchingTexture",st._matricesTexture,L));let Xo=at.morphAttributes;if((Xo.position!==void 0||Xo.normal!==void 0||Xo.color!==void 0&&Et.isWebGL2===!0)&&Yt.update(st,at,Vn),(ga||ee.receiveShadow!==st.receiveShadow)&&(ee.receiveShadow=st.receiveShadow,ii.setValue(Z,"receiveShadow",st.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Gn.envMap.value=Wt,Gn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),ga&&(ii.setValue(Z,"toneMappingExposure",x.toneMappingExposure),ee.needsLights&&Mf(Gn,qo),At&&rt.fog===!0&&K.refreshFogUniforms(Gn,At),K.refreshMaterialUniforms(Gn,rt,V,J,Y),Os.upload(Z,Al(ee),Gn,L)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Os.upload(Z,Al(ee),Gn,L),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ii.setValue(Z,"center",st.center),ii.setValue(Z,"modelViewMatrix",st.modelViewMatrix),ii.setValue(Z,"normalMatrix",st.normalMatrix),ii.setValue(Z,"modelMatrix",st.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){let Pi=rt.uniformsGroups;for(let Ko=0,Tf=Pi.length;Ko<Tf;Ko++)if(Et.isWebGL2){let Pl=Pi[Ko];he.update(Pl,Vn),he.bind(Pl,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function Mf(F,tt){F.ambientLightColor.needsUpdate=tt,F.lightProbe.needsUpdate=tt,F.directionalLights.needsUpdate=tt,F.directionalLightShadows.needsUpdate=tt,F.pointLights.needsUpdate=tt,F.pointLightShadows.needsUpdate=tt,F.spotLights.needsUpdate=tt,F.spotLightShadows.needsUpdate=tt,F.rectAreaLights.needsUpdate=tt,F.hemisphereLights.needsUpdate=tt}function Ef(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(F,tt,at){Pt.get(F.texture).__webglTexture=tt,Pt.get(F.depthTexture).__webglTexture=at;let rt=Pt.get(F);rt.__hasExternalTextures=!0,rt.__hasExternalTextures&&(rt.__autoAllocateDepthBuffer=at===void 0,rt.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,tt){let at=Pt.get(F);at.__webglFramebuffer=tt,at.__useDefaultFramebuffer=tt===void 0},this.setRenderTarget=function(F,tt=0,at=0){E=F,R=tt,y=at;let rt=!0,st=null,At=!1,It=!1;if(F){let Wt=Pt.get(F);Wt.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(Z.FRAMEBUFFER,null),rt=!1):Wt.__webglFramebuffer===void 0?L.setupRenderTarget(F):Wt.__hasExternalTextures&&L.rebindTextures(F,Pt.get(F.texture).__webglTexture,Pt.get(F.depthTexture).__webglTexture);let $t=F.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(It=!0);let Kt=Pt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Kt[tt])?st=Kt[tt][at]:st=Kt[tt],At=!0):Et.isWebGL2&&F.samples>0&&L.useMultisampledRTT(F)===!1?st=Pt.get(F).__webglMultisampledFramebuffer:Array.isArray(Kt)?st=Kt[at]:st=Kt,T.copy(F.viewport),I.copy(F.scissor),G=F.scissorTest}else T.copy(P).multiplyScalar(V).floor(),I.copy(W).multiplyScalar(V).floor(),G=k;if(xt.bindFramebuffer(Z.FRAMEBUFFER,st)&&Et.drawBuffers&&rt&&xt.drawBuffers(F,st),xt.viewport(T),xt.scissor(I),xt.setScissorTest(G),At){let Wt=Pt.get(F.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Wt.__webglTexture,at)}else if(It){let Wt=Pt.get(F.texture),$t=tt||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Wt.__webglTexture,at||0,$t)}A=-1},this.readRenderTargetPixels=function(F,tt,at,rt,st,At,It){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Pt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&It!==void 0&&(Nt=Nt[It]),Nt){xt.bindFramebuffer(Z.FRAMEBUFFER,Nt);try{let Wt=F.texture,$t=Wt.format,Kt=Wt.type;if($t!==pe&&Ct.convert($t)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Qt=Kt===bn&&(vt.has("EXT_color_buffer_half_float")||Et.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Kt!==Be&&Ct.convert(Kt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Kt===mn&&(Et.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=F.width-rt&&at>=0&&at<=F.height-st&&Z.readPixels(tt,at,rt,st,Ct.convert($t),Ct.convert(Kt),At)}finally{let Wt=E!==null?Pt.get(E).__webglFramebuffer:null;xt.bindFramebuffer(Z.FRAMEBUFFER,Wt)}}},this.copyFramebufferToTexture=function(F,tt,at=0){let rt=Math.pow(2,-at),st=Math.floor(tt.image.width*rt),At=Math.floor(tt.image.height*rt);L.setTexture2D(tt,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,at,0,0,F.x,F.y,st,At),xt.unbindTexture()},this.copyTextureToTexture=function(F,tt,at,rt=0){let st=tt.image.width,At=tt.image.height,It=Ct.convert(at.format),Nt=Ct.convert(at.type);L.setTexture2D(at,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,at.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,at.unpackAlignment),tt.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,rt,F.x,F.y,st,At,It,Nt,tt.image.data):tt.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,rt,F.x,F.y,tt.mipmaps[0].width,tt.mipmaps[0].height,It,tt.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,rt,F.x,F.y,It,Nt,tt.image),rt===0&&at.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(F,tt,at,rt,st=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let At=F.max.x-F.min.x+1,It=F.max.y-F.min.y+1,Nt=F.max.z-F.min.z+1,Wt=Ct.convert(rt.format),$t=Ct.convert(rt.type),Kt;if(rt.isData3DTexture)L.setTexture3D(rt,0),Kt=Z.TEXTURE_3D;else if(rt.isDataArrayTexture||rt.isCompressedArrayTexture)L.setTexture2DArray(rt,0),Kt=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,rt.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,rt.unpackAlignment);let Qt=Z.getParameter(Z.UNPACK_ROW_LENGTH),ze=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),_i=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Ke=Z.getParameter(Z.UNPACK_SKIP_ROWS),rn=Z.getParameter(Z.UNPACK_SKIP_IMAGES),Re=at.isCompressedTexture?at.mipmaps[st]:at.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Re.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Re.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,F.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,F.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,F.min.z),at.isDataTexture||at.isData3DTexture?Z.texSubImage3D(Kt,st,tt.x,tt.y,tt.z,At,It,Nt,Wt,$t,Re.data):at.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Kt,st,tt.x,tt.y,tt.z,At,It,Nt,Wt,Re.data)):Z.texSubImage3D(Kt,st,tt.x,tt.y,tt.z,At,It,Nt,Wt,$t,Re),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Qt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ze),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,_i),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Ke),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,rn),st===0&&rt.generateMipmaps&&Z.generateMipmap(Kt),xt.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?L.setTextureCube(F,0):F.isData3DTexture?L.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?L.setTexture2DArray(F,0):L.setTexture2D(F,0),xt.unbindTexture()},this.resetState=function(){R=0,y=0,E=null,xt.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ec?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===ho?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===me?$n:Ld}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===$n?me:Oe}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Zh=class extends Oa{};Zh.prototype.isWebGL1Renderer=!0;var Ii=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},js=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=kh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ci=new M,is=class a{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ci.fromBufferAttribute(this,e),ci.applyMatrix4(t),this.setXYZ(e,ci.x,ci.y,ci.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ci.fromBufferAttribute(this,e),ci.applyNormalMatrix(t),this.setXYZ(e,ci.x,ci.y,ci.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ci.fromBufferAttribute(this,e),ci.transformDirection(t),this.setXYZ(e,ci.x,ci.y,ci.z);return this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Qi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Qi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Qi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Qi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Bt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new a(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Na=class extends bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ps,_a=new M,Ls=new M,Fs=new M,Is=new gt,wa=new gt,Gd=new Rt,_r=new M,Ma=new M,wr=new M,Zu=new gt,wh=new gt,Ju=new gt,qr=class extends Pe{constructor(t=new Na){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new js(e,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new is(i,3,0,!1)),Ps.setAttribute("uv",new is(i,2,3,!1))}this.geometry=Ps,this.material=t,this.center=new gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),Gd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Fs.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let r=this.center;Mr(_r.set(-.5,-.5,0),Fs,r,Ls,n,s),Mr(Ma.set(.5,-.5,0),Fs,r,Ls,n,s),Mr(wr.set(.5,.5,0),Fs,r,Ls,n,s),Zu.set(0,0),wh.set(1,0),Ju.set(1,1);let o=t.ray.intersectTriangle(_r,Ma,wr,!1,_a);if(o===null&&(Mr(Ma.set(-.5,.5,0),Fs,r,Ls,n,s),wh.set(0,1),o=t.ray.intersectTriangle(_r,wr,Ma,!1,_a),o===null))return;let h=t.ray.origin.distanceTo(_a);h<t.near||h>t.far||e.push({distance:h,point:_a.clone(),uv:Qn.getInterpolation(_a,_r,Ma,wr,Zu,wh,Ju,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Mr(a,t,e,i,n,s){Is.subVectors(a,e).addScalar(.5).multiply(i),n!==void 0?(wa.x=s*Is.x-n*Is.y,wa.y=n*Is.x+s*Is.y):wa.copy(Is),a.copy(t),a.x+=wa.x,a.y+=wa.y,a.applyMatrix4(Gd)}var $u=new M,td=new ne,ed=new ne,Cv=new M,id=new Rt,Er=new M,Mh=new Ti,nd=new Rt,Eh=new Ws,ns=class extends pt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zl,this.bindMatrix=new Rt,this.bindMatrixInverse=new Rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fi),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Er),this.boundingBox.expandByPoint(Er)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ti),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Er),this.boundingSphere.expandByPoint(Er)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mh.copy(this.boundingSphere),Mh.applyMatrix4(n),t.ray.intersectsSphere(Mh)!==!1&&(nd.copy(n).invert(),Eh.copy(t.ray).applyMatrix4(nd),!(this.boundingBox!==null&&Eh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Eh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ne,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===zl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;td.fromBufferAttribute(n.attributes.skinIndex,t),ed.fromBufferAttribute(n.attributes.skinWeight,t),$u.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let r=ed.getComponent(s);if(r!==0){let o=td.getComponent(s);id.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(Cv.copy($u).applyMatrix4(id),r)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},ss=class extends Pe{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ai=class extends $e{constructor(t=null,e=1,i=1,n,s,r,o,h,c=Ie,u=Ie,l,d){super(null,r,o,h,c,u,n,s,l,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sd=new Rt,Pv=new Rt,Ys=class a{constructor(t=[],e=[]){this.uuid=Vi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Rt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Rt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,r=t.length;s<r;s++){let o=t[s]?t[s].matrixWorld:Pv;sd.multiplyMatrices(o,e[s]),sd.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new a(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Ai(e,t,t,pe,mn);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let s=t.bones[i],r=e[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new ss),this.bones.push(r),this.boneInverses.push(new Rt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){let r=e[n];t.bones.push(r.uuid);let o=i[n];t.boneInverses.push(o.toArray())}return t}},ti=class extends Bt{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ks=new Rt,ad=new Rt,Tr=[],rd=new Fi,Lv=new Rt,Ea=new pt,Ta=new Ti,Xr=class extends pt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ti(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Lv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ks),rd.copy(t.boundingBox).applyMatrix4(ks),this.boundingBox.union(rd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ks),Ta.copy(t.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Ta)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(i),t.ray.intersectsSphere(Ta)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,ks),ad.multiplyMatrices(i,ks),Ea.matrixWorld=ad,Ea.raycast(t,Tr);for(let r=0,o=Tr.length;r<o;r++){let h=Tr[r];h.instanceId=s,h.object=this,e.push(h)}Tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ti(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ba=class extends bi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},od=new M,hd=new M,cd=new Rt,Th=new Ws,Sr=new Ti,Qs=class extends Pe{constructor(t=new ce,e=new Ba){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)od.fromBufferAttribute(e,n-1),hd.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=od.distanceTo(hd);t.setAttribute("lineDistance",new oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere),Sr.applyMatrix4(n),Sr.radius+=s,t.ray.intersectsSphere(Sr)===!1)return;cd.copy(n).invert(),Th.copy(t.ray).applyMatrix4(cd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=new M,u=new M,l=new M,d=new M,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,r.start),v=Math.min(g.count,r.start+r.count);for(let x=p,w=v-1;x<w;x+=f){let R=g.getX(x),y=g.getX(x+1);if(c.fromBufferAttribute(m,R),u.fromBufferAttribute(m,y),Th.distanceSqToSegment(c,u,d,l)>h)continue;d.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,r.start),v=Math.min(m.count,r.start+r.count);for(let x=p,w=v-1;x<w;x+=f){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Th.distanceSqToSegment(c,u,d,l)>h)continue;d.applyMatrix4(this.matrixWorld);let y=t.ray.origin.distanceTo(d);y<t.near||y>t.far||e.push({distance:y,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},ld=new M,ud=new M,Kr=class extends Qs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)ld.fromBufferAttribute(e,n),ud.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+ld.distanceTo(ud);t.setAttribute("lineDistance",new oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},jr=class extends Qs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ha=class extends bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},dd=new Rt,Jh=new Ws,Ar=new Ti,Rr=new M,Zs=class extends Pe{constructor(t=new ce,e=new Ha){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere),Ar.applyMatrix4(n),Ar.radius+=s,t.ray.intersectsSphere(Ar)===!1)return;dd.copy(n).invert(),Jh.copy(t.ray).applyMatrix4(dd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=i.index,l=i.attributes.position;if(c!==null){let d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,b=f;g<b;g++){let m=c.getX(g);Rr.fromBufferAttribute(l,m),fd(Rr,m,h,n,t,e,this)}}else{let d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=d,b=f;g<b;g++)Rr.fromBufferAttribute(l,g),fd(Rr,g,h,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function fd(a,t,e,i,n,s,r){let o=Jh.distanceSqToPoint(a);if(o<e){let h=new M;Jh.closestPointToPoint(a,h),h.applyMatrix4(i);let c=n.ray.origin.distanceTo(h);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,object:r})}}var Gi=class extends $e{constructor(t,e,i,n,s,r,o,h,c){super(t,e,i,n,s,r,o,h,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ki=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,r;e?r=e:r=t*i[s-1];let o=0,h=s-1,c;for(;o<=h;)if(n=Math.floor(o+(h-o)/2),c=i[n]-r,c<0)o=n+1;else if(c>0)h=n-1;else{h=n;break}if(n=h,i[n]===r)return n/(s-1);let u=i[n],d=i[n+1]-u,f=(r-u)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let r=this.getPoint(n),o=this.getPoint(s),h=e||(r.isVector2?new gt:new M);return h.copy(o).sub(r).normalize(),h}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new M,n=[],s=[],r=[],o=new M,h=new Rt;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new M)}s[0]=new M,r[0]=new M;let c=Number.MAX_VALUE,u=Math.abs(n[0].x),l=Math.abs(n[0].y),d=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),l<=c&&(c=l,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),r[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(He(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(h.makeRotationAxis(o,g))}r[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(He(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(h.makeRotationAxis(n[g],f*g)),r[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Va=class extends ki{constructor(t=0,e=0,i=1,n=1,s=0,r=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=h}getPoint(t,e){let i=e||new gt,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(r?s=0:s=n),this.aClockwise===!0&&!r&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,h=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),l=Math.sin(this.aRotation),d=h-this.aX,f=c-this.aY;h=d*u-f*l+this.aX,c=d*l+f*u+this.aY}return i.set(h,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$h=class extends Va{constructor(t,e,i,n,s,r){super(t,e,i,i,n,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Ac(){let a=0,t=0,e=0,i=0;function n(s,r,o,h){a=s,t=o,e=-3*s+3*r-2*o-h,i=2*s-2*r+o+h}return{initCatmullRom:function(s,r,o,h,c){n(r,o,c*(o-s),c*(h-r))},initNonuniformCatmullRom:function(s,r,o,h,c,u,l){let d=(r-s)/c-(o-s)/(c+u)+(o-r)/u,f=(o-r)/u-(h-r)/(u+l)+(h-o)/l;d*=u,f*=u,n(r,o,d,f)},calc:function(s){let r=s*s,o=r*s;return a+t*s+e*r+i*o}}}var Cr=new M,Sh=new Ac,Ah=new Ac,Rh=new Ac,tc=class extends ki{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new M){let i=e,n=this.points,s=n.length,r=(s-(this.closed?0:1))*t,o=Math.floor(r),h=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:h===0&&o===s-1&&(o=s-2,h=1);let c,u;this.closed||o>0?c=n[(o-1)%s]:(Cr.subVectors(n[0],n[1]).add(n[0]),c=Cr);let l=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?u=n[(o+2)%s]:(Cr.subVectors(n[s-1],n[s-2]).add(n[s-1]),u=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(l),f),b=Math.pow(l.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),Sh.initNonuniformCatmullRom(c.x,l.x,d.x,u.x,g,b,m),Ah.initNonuniformCatmullRom(c.y,l.y,d.y,u.y,g,b,m),Rh.initNonuniformCatmullRom(c.z,l.z,d.z,u.z,g,b,m)}else this.curveType==="catmullrom"&&(Sh.initCatmullRom(c.x,l.x,d.x,u.x,this.tension),Ah.initCatmullRom(c.y,l.y,d.y,u.y,this.tension),Rh.initCatmullRom(c.z,l.z,d.z,u.z,this.tension));return i.set(Sh.calc(h),Ah.calc(h),Rh.calc(h)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new M().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function pd(a,t,e,i,n){let s=(i-t)*.5,r=(n-e)*.5,o=a*a,h=a*o;return(2*e-2*i+s+r)*h+(-3*e+3*i-2*s-r)*o+s*a+e}function Fv(a,t){let e=1-a;return e*e*t}function Iv(a,t){return 2*(1-a)*a*t}function kv(a,t){return a*a*t}function Fa(a,t,e,i){return Fv(a,t)+Iv(a,e)+kv(a,i)}function Dv(a,t){let e=1-a;return e*e*e*t}function zv(a,t){let e=1-a;return 3*e*e*a*t}function Uv(a,t){return 3*(1-a)*a*a*t}function Ov(a,t){return a*a*a*t}function Ia(a,t,e,i,n){return Dv(a,t)+zv(a,e)+Uv(a,i)+Ov(a,n)}var Yr=class extends ki{constructor(t=new gt,e=new gt,i=new gt,n=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new gt){let i=e,n=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(Ia(t,n.x,s.x,r.x,o.x),Ia(t,n.y,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ec=class extends ki{constructor(t=new M,e=new M,i=new M,n=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new M){let i=e,n=this.v0,s=this.v1,r=this.v2,o=this.v3;return i.set(Ia(t,n.x,s.x,r.x,o.x),Ia(t,n.y,s.y,r.y,o.y),Ia(t,n.z,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qr=class extends ki{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ic=class extends ki{constructor(t=new M,e=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new M){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new M){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zr=class extends ki{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){let i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(Fa(t,n.x,s.x,r.x),Fa(t,n.y,s.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nc=class extends ki{constructor(t=new M,e=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new M){let i=e,n=this.v0,s=this.v1,r=this.v2;return i.set(Fa(t,n.x,s.x,r.x),Fa(t,n.y,s.y,r.y),Fa(t,n.z,s.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let i=e,n=this.points,s=(n.length-1)*t,r=Math.floor(s),o=s-r,h=n[r===0?r:r-1],c=n[r],u=n[r>n.length-2?n.length-1:r+1],l=n[r>n.length-3?n.length-1:r+2];return i.set(pd(o,h.x,c.x,u.x,l.x),pd(o,h.y,c.y,u.y,l.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new gt().fromArray(n))}return this}},md=Object.freeze({__proto__:null,ArcCurve:$h,CatmullRomCurve3:tc,CubicBezierCurve:Yr,CubicBezierCurve3:ec,EllipseCurve:Va,LineCurve:Qr,LineCurve3:ic,QuadraticBezierCurve:Zr,QuadraticBezierCurve3:nc,SplineCurve:Jr}),sc=class extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new md[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let r=n[s]-i,o=this.curves[s],h=o.getLength(),c=h===0?0:1-r/h;return o.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let r=s[n],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,h=r.getPoints(o);for(let c=0;c<h.length;c++){let u=h[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new md[n.type]().fromJSON(n))}return this}},ac=class extends sc{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Qr(this.currentPoint.clone(),new gt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Zr(this.currentPoint.clone(),new gt(t,e),new gt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,r){let o=new Yr(this.currentPoint.clone(),new gt(t,e),new gt(i,n),new gt(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Jr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,r){let o=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+o,e+h,i,n,s,r),this}absarc(t,e,i,n,s,r){return this.absellipse(t,e,i,i,n,s,r),this}ellipse(t,e,i,n,s,r,o,h){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,n,s,r,o,h),this}absellipse(t,e,i,n,s,r,o,h){let c=new Va(t,e,i,n,s,r,o,h);if(this.curves.length>0){let l=c.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Js=class a extends ce{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=He(n,0,Math.PI*2);let s=[],r=[],o=[],h=[],c=[],u=1/e,l=new M,d=new gt,f=new M,g=new M,b=new M,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,b.copy(f),f.normalize(),h.push(f.x,f.y,f.z);break;case t.length-1:h.push(b.x,b.y,b.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),h.push(f.x,f.y,f.z),b.copy(g)}for(let v=0;v<=e;v++){let x=i+v*u*n,w=Math.sin(x),R=Math.cos(x);for(let y=0;y<=t.length-1;y++){l.x=t[y].x*w,l.y=t[y].y,l.z=t[y].x*R,r.push(l.x,l.y,l.z),d.x=v/e,d.y=y/(t.length-1),o.push(d.x,d.y);let E=h[3*y+0]*w,A=h[3*y+1],_=h[3*y+0]*R;c.push(E,A,_)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){let w=x+v*t.length,R=w,y=w+t.length,E=w+t.length+1,A=w+1;s.push(R,y,A),s.push(E,A,y)}this.setIndex(s),this.setAttribute("position",new oe(r,3)),this.setAttribute("uv",new oe(o,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.points,t.segments,t.phiStart,t.phiLength)}},vn=class a extends Js{constructor(t=1,e=1,i=4,n=8){let s=new ac;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new a(t.radius,t.length,t.capSegments,t.radialSegments)}},$s=class a extends ce{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],r=[],o=[],h=[],c=new M,u=new gt;r.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let l=0,d=3;l<=e;l++,d+=3){let f=i+l/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(r[d]/t+1)/2,u.y=(r[d+1]/t+1)/2,h.push(u.x,u.y)}for(let l=1;l<=e;l++)s.push(l,l+1,0);this.setIndex(s),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ge=class a extends ce{constructor(t=1,e=1,i=1,n=32,s=1,r=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:h};let c=this;n=Math.floor(n),s=Math.floor(s);let u=[],l=[],d=[],f=[],g=0,b=[],m=i/2,p=0;v(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function v(){let w=new M,R=new M,y=0,E=(e-t)/i;for(let A=0;A<=s;A++){let _=[],T=A/s,I=T*(e-t)+t;for(let G=0;G<=n;G++){let q=G/n,U=q*h+o,z=Math.sin(U),J=Math.cos(U);R.x=I*z,R.y=-T*i+m,R.z=I*J,l.push(R.x,R.y,R.z),w.set(z,E,J).normalize(),d.push(w.x,w.y,w.z),f.push(q,1-T),_.push(g++)}b.push(_)}for(let A=0;A<n;A++)for(let _=0;_<s;_++){let T=b[_][A],I=b[_+1][A],G=b[_+1][A+1],q=b[_][A+1];u.push(T,I,q),u.push(I,G,q),y+=6}c.addGroup(p,y,0),p+=y}function x(w){let R=g,y=new gt,E=new M,A=0,_=w===!0?t:e,T=w===!0?1:-1;for(let G=1;G<=n;G++)l.push(0,m*T,0),d.push(0,T,0),f.push(.5,.5),g++;let I=g;for(let G=0;G<=n;G++){let U=G/n*h+o,z=Math.cos(U),J=Math.sin(U);E.x=_*J,E.y=m*T,E.z=_*z,l.push(E.x,E.y,E.z),d.push(0,T,0),y.x=z*.5+.5,y.y=J*.5*T+.5,f.push(y.x,y.y),g++}for(let G=0;G<n;G++){let q=R+G,U=I+G;w===!0?u.push(U,U+1,q):u.push(U+1,U,q),A+=3}c.addGroup(p,A,w===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var rc=class a extends ce{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],r=[];o(n),c(i),u(),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(s.slice(),3)),this.setAttribute("uv",new oe(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let x=new M,w=new M,R=new M;for(let y=0;y<e.length;y+=3)f(e[y+0],x),f(e[y+1],w),f(e[y+2],R),h(x,w,R,v)}function h(v,x,w,R){let y=R+1,E=[];for(let A=0;A<=y;A++){E[A]=[];let _=v.clone().lerp(w,A/y),T=x.clone().lerp(w,A/y),I=y-A;for(let G=0;G<=I;G++)G===0&&A===y?E[A][G]=_:E[A][G]=_.clone().lerp(T,G/I)}for(let A=0;A<y;A++)for(let _=0;_<2*(y-A)-1;_++){let T=Math.floor(_/2);_%2===0?(d(E[A][T+1]),d(E[A+1][T]),d(E[A][T])):(d(E[A][T+1]),d(E[A+1][T+1]),d(E[A+1][T]))}}function c(v){let x=new M;for(let w=0;w<s.length;w+=3)x.x=s[w+0],x.y=s[w+1],x.z=s[w+2],x.normalize().multiplyScalar(v),s[w+0]=x.x,s[w+1]=x.y,s[w+2]=x.z}function u(){let v=new M;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];let w=m(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;r.push(w,1-R)}g(),l()}function l(){for(let v=0;v<r.length;v+=6){let x=r[v+0],w=r[v+2],R=r[v+4],y=Math.max(x,w,R),E=Math.min(x,w,R);y>.9&&E<.1&&(x<.2&&(r[v+0]+=1),w<.2&&(r[v+2]+=1),R<.2&&(r[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,x){let w=v*3;x.x=t[w+0],x.y=t[w+1],x.z=t[w+2]}function g(){let v=new M,x=new M,w=new M,R=new M,y=new gt,E=new gt,A=new gt;for(let _=0,T=0;_<s.length;_+=9,T+=6){v.set(s[_+0],s[_+1],s[_+2]),x.set(s[_+3],s[_+4],s[_+5]),w.set(s[_+6],s[_+7],s[_+8]),y.set(r[T+0],r[T+1]),E.set(r[T+2],r[T+3]),A.set(r[T+4],r[T+5]),R.copy(v).add(x).add(w).divideScalar(3);let I=m(R);b(y,T+0,v,I),b(E,T+2,x,I),b(A,T+4,w,I)}}function b(v,x,w,R){R<0&&v.x===1&&(r[x]=v.x-1),w.x===0&&w.z===0&&(r[x]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.vertices,t.indices,t.radius,t.details)}};var $r=class a extends rc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new a(t.radius,t.detail)}};var $i=class a extends ce{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let h=Math.min(r+o,Math.PI),c=0,u=[],l=new M,d=new M,f=[],g=[],b=[],m=[];for(let p=0;p<=i;p++){let v=[],x=p/i,w=0;p===0&&r===0?w=.5/e:p===i&&h===Math.PI&&(w=-.5/e);for(let R=0;R<=e;R++){let y=R/e;l.x=-t*Math.cos(n+y*s)*Math.sin(r+x*o),l.y=t*Math.cos(r+x*o),l.z=t*Math.sin(n+y*s)*Math.sin(r+x*o),g.push(l.x,l.y,l.z),d.copy(l).normalize(),b.push(d.x,d.y,d.z),m.push(y+w,1-x),v.push(c++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let x=u[p][v+1],w=u[p][v],R=u[p+1][v],y=u[p+1][v+1];(p!==0||r>0)&&f.push(x,w,y),(p!==i-1||h<Math.PI)&&f.push(w,R,y)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(b,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var xn=class a extends ce{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let r=[],o=[],h=[],c=[],u=new M,l=new M,d=new M;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let b=g/n*s,m=f/i*Math.PI*2;l.x=(t+e*Math.cos(m))*Math.cos(b),l.y=(t+e*Math.cos(m))*Math.sin(b),l.z=e*Math.sin(m),o.push(l.x,l.y,l.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),d.subVectors(l,u).normalize(),h.push(d.x,d.y,d.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let b=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,v=(n+1)*f+g;r.push(b,m,v),r.push(m,p,v)}this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Se=class extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},xi=class extends Se{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Pr(a,t,e){return!a||!e&&a.constructor===t?a:typeof t.BYTES_PER_ELEMENT=="number"?new t(a):Array.prototype.slice.call(a)}function Nv(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Bv(a){function t(n,s){return a[n]-a[s]}let e=a.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function gd(a,t,e){let i=a.length,n=new a.constructor(i);for(let s=0,r=0;r!==i;++s){let o=e[s]*t;for(let h=0;h!==t;++h)n[r++]=a[o+h]}return n}function Wd(a,t,e,i){let n=1,s=a[0];for(;s!==void 0&&s[i]===void 0;)s=a[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(t.push(s.time),e.push.apply(e,r)),s=a[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(t.push(s.time),r.toArray(e,e.length)),s=a[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(t.push(s.time),e.push(r)),s=a[n++];while(s!==void 0)}var kn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let r;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}r=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let h=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(n=s,s=e[--i-1],t>=s)break t}r=i,i=0;break e}break i}for(;i<r;){let o=i+r>>>1;t<e[o]?r=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let r=0;r!==n;++r)e[r]=i[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oc=class extends kn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hu,endingEnd:hu}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,r=t+1,o=n[s],h=n[r];if(o===void 0)switch(this.getSettings_().endingStart){case cu:s=t,o=2*e-i;break;case lu:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(h===void 0)switch(this.getSettings_().endingEnd){case cu:r=t,h=2*i-e;break;case lu:r=1,h=i+n[1]-n[0];break;default:r=t-1,h=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(h-i),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(t,e,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,u=this._offsetPrev,l=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,v=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*b+.5*g,w=f*m-f*b;for(let R=0;R!==o;++R)s[R]=p*r[u+R]+v*r[c+R]+x*r[h+R]+w*r[l+R];return s}},hc=class extends kn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,h=t*o,c=h-o,u=(i-e)/(n-e),l=1-u;for(let d=0;d!==o;++d)s[d]=r[c+d]*l+r[h+d]*u;return s}},cc=class extends kn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Di=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pr(e,this.TimeBufferType),this.values=Pr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Pr(t.times,Array),values:Pr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new oc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Vs:e=this.InterpolantFactoryMethodDiscrete;break;case ts:e=this.InterpolantFactoryMethodLinear;break;case $o:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return ts;case this.InterpolantFactoryMethodSmooth:return $o}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,r=n-1;for(;s!==n&&i[s]<t;)++s;for(;r!==-1&&i[r]>e;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){let h=i[o];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(r!==null&&r>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,h,r),t=!1;break}r=h}if(n!==void 0&&Nv(n))for(let o=0,h=n.length;o!==h;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===$o,s=t.length-1,r=1;for(let o=1;o<s;++o){let h=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(n)h=!0;else{let l=o*i,d=l-i,f=l+i;for(let g=0;g!==i;++g){let b=e[l+g];if(b!==e[d+g]||b!==e[f+g]){h=!0;break}}}if(h){if(o!==r){t[r]=t[o];let l=o*i,d=r*i;for(let f=0;f!==i;++f)e[d+f]=e[l+f]}++r}}if(s>0){t[r]=t[s];for(let o=s*i,h=r*i,c=0;c!==i;++c)e[h+c]=e[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=ts;var Dn=class extends Di{};Dn.prototype.ValueTypeName="bool";Dn.prototype.ValueBufferType=Array;Dn.prototype.DefaultInterpolation=Vs;Dn.prototype.InterpolantFactoryMethodLinear=void 0;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends Di{};to.prototype.ValueTypeName="color";var yn=class extends Di{};yn.prototype.ValueTypeName="number";var lc=class extends kn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,h=(i-e)/(n-e),c=t*o;for(let u=c+o;c!==u;c+=4)_t.slerpFlat(s,0,r,c-o,r,c,h);return s}},tn=class extends Di{InterpolantFactoryMethodLinear(t){return new lc(this.times,this.values,this.getValueSize(),t)}};tn.prototype.ValueTypeName="quaternion";tn.prototype.DefaultInterpolation=ts;tn.prototype.InterpolantFactoryMethodSmooth=void 0;var zn=class extends Di{};zn.prototype.ValueTypeName="string";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=Vs;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var _n=class extends Di{};_n.prototype.ValueTypeName="vector";var eo=class{constructor(t,e=-1,i,n=dp){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=Vi(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],i=t.tracks,n=1/(t.fps||1);for(let r=0,o=i.length;r!==o;++r)e.push(Vv(i[r]).scale(n));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){let e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,r=i.length;s!==r;++s)e.push(Di.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){let s=e.length,r=[];for(let o=0;o<s;o++){let h=[],c=[];h.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let u=Bv(h);h=gd(h,1,u),c=gd(c,1,u),!n&&h[0]===0&&(h.push(s),c.push(c[0])),r.push(new yn(".morphTargetInfluences["+e[o].name+"]",h,c).scale(1/i))}return new this(t,-1,r)}static findByName(t,e){let i=t;if(!Array.isArray(t)){let n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,h=t.length;o<h;o++){let c=t[o],u=c.name.match(s);if(u&&u.length>1){let l=u[1],d=n[l];d||(n[l]=d=[]),d.push(c)}}let r=[];for(let o in n)r.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(l,d,f,g,b){if(f.length!==0){let m=[],p=[];Wd(f,m,p,g),m.length!==0&&b.push(new l(d,m,p))}},n=[],s=t.name||"default",r=t.fps||30,o=t.blendMode,h=t.length||-1,c=t.hierarchy||[];for(let l=0;l<c.length;l++){let d=c[l].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(let b in f){let m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){let x=d[g];m.push(x.time),p.push(x.morphTarget===b?1:0)}n.push(new yn(".morphTargetInfluence["+b+"]",m,p))}h=f.length*r}else{let f=".bones["+e[l].name+"]";i(_n,f+".position",d,"pos",n),i(tn,f+".quaternion",d,"rot",n),i(_n,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,h,n,o)}resetDuration(){let t=this.tracks,e=0;for(let i=0,n=t.length;i!==n;++i){let s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Hv(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yn;case"vector":case"vector2":case"vector3":case"vector4":return _n;case"color":return to;case"quaternion":return tn;case"bool":case"boolean":return Dn;case"string":return zn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Vv(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Hv(a.type);if(a.times===void 0){let e=[],i=[];Wd(a.keys,e,i,"value"),a.times=e,a.values=i}return t.parse!==void 0?t.parse(a):new t(a.name,a.times,a.values,a.interpolation)}var Pn={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},uc=class{constructor(t,e,i){let n=this,s=!1,r=0,o=0,h,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,s===!1&&n.onStart!==void 0&&n.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,n.onProgress!==void 0&&n.onProgress(u,r,o),r===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,l){return c.push(u,l),this},this.removeHandler=function(u){let l=c.indexOf(u);return l!==-1&&c.splice(l,2),this},this.getHandler=function(u){for(let l=0,d=c.length;l<d;l+=2){let f=c[l],g=c[l+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},Gv=new uc,wn=class{constructor(t){this.manager=t!==void 0?t:Gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wn.DEFAULT_MATERIAL_NAME="__DEFAULT";var dn={},dc=class extends Error{constructor(t,e){super(t),this.response=e}},Ga=class extends wn{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=Pn.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(dn[t]!==void 0){dn[t].push({onLoad:e,onProgress:i,onError:n});return}dn[t]=[],dn[t].push({onLoad:e,onProgress:i,onError:n});let r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,h=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=dn[t],l=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){v();function v(){l.read().then(({done:x,value:w})=>{if(x)p.close();else{b+=w.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let y=0,E=u.length;y<E;y++){let A=u[y];A.onProgress&&A.onProgress(R)}p.enqueue(w),v()}})}}});return new Response(m)}else throw new dc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(h){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let l=/charset="?([^;"\s]*)"?/i.exec(o),d=l&&l[1]?l[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Pn.add(t,c);let u=dn[t];delete dn[t];for(let l=0,d=u.length;l<d;l++){let f=u[l];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=dn[t];if(u===void 0)throw this.manager.itemError(t),c;delete dn[t];for(let l=0,d=u.length;l<d;l++){let f=u[l];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var fc=class extends wn{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,r=Pn.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;let o=za("img");function h(){u(),Pn.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(l){u(),n&&n(l),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",h,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}};var io=class extends wn{constructor(t){super(t)}load(t,e,i,n){let s=new $e,r=new fc(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}},Wa=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Ch=new Rt,bd=new M,vd=new M,qa=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;bd.setFromMatrixPosition(t.matrixWorld),e.position.copy(bd),vd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vd),e.updateMatrixWorld(),Ch.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},pc=class extends qa{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Gs*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Un=class extends Wa{constructor(t,e,i=0,n=Math.PI/3,s=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=i,this.angle=n,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new pc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},xd=new Rt,Sa=new M,Ph=new M,mc=class extends qa{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Sa.setFromMatrixPosition(t.matrixWorld),i.position.copy(Sa),Ph.copy(i.position),Ph.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ph),i.updateMatrixWorld(),n.makeTranslation(-Sa.x,-Sa.y,-Sa.z),xd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd)}},no=class extends Wa{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new mc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},gc=class extends qa{constructor(){super(new vi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},as=class extends Wa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new gc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var On=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,n=t.length;i<n;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},en=class extends ce{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var so=class extends wn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,r=Pn.get(t);if(r!==void 0){if(s.manager.itemStart(t),r.then){r.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let h=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pn.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){n&&n(c),Pn.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Pn.add(t,h),s.manager.itemStart(t)}};var Rc="\\[\\]\\.:\\/",Wv=new RegExp("["+Rc+"]","g"),Cc="[^"+Rc+"]",qv="[^"+Rc.replace("\\.","")+"]",Xv=/((?:WC+[\/:])*)/.source.replace("WC",Cc),Kv=/(WCOD+)?/.source.replace("WCOD",qv),jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),Yv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),Qv=new RegExp("^"+Xv+Kv+jv+Yv+"$"),Zv=["material","materials","bones","map"],bc=class{constructor(t,e,i){let n=i||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ye=class a{constructor(t,e,i){this.path=e,this.parsedPath=i||a.parseTrackName(e),this.node=a.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new a.Composite(t,e,i):new a(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wv,"")}static parseTrackName(t){let e=Qv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Zv.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===e||o.uuid===e)return o;let h=i(o.children);if(h)return h}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=a.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[n];if(r===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}h=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(h=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=bc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);function ui(a){let t=a>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ri=(a,t,e)=>a<t?t:a>e?e:a,ct=a=>a<0?0:a>1?1:a,dt=(a,t,e)=>a+(t-a)*e;function _e(a,t,e){let i=ct((e-a)/(t-a));return i*i*(3-2*i)}function ei(a,t=0){let e=Math.floor(a),i=a-e,n=r=>{let o=Math.sin((r+t*57.13)*127.1)*43758.5453;return o-Math.floor(o)},s=i*i*(3-2*i);return n(e)*(1-s)+n(e+1)*s}var Ee=24,yi=2,Jv=9.81,Pc=Math.PI*2,$v=[[300,3,.8,.3,0],[236,3.2,.8,.3,0],[187,3,.8,.34,0],[151,2.6,.8,.34,0],[122,2.1,.78,.38,0],[99,1.6,.78,.38,0],[78,1.05,.64,.7,1],[63,.9,.64,.7,1],[50,.75,.64,.75,1],[40,.6,.62,.75,1],[31,.48,.62,.8,1],[24.5,.38,.6,.8,1],[19,.3,.6,.85,1],[15,.235,.58,.85,1],[12.1,.17,.5,1.15,2],[9.3,.13,.5,1.15,2],[7.1,.1,.48,1.2,2],[5.4,.077,.48,1.2,2],[4.1,.058,.46,1.25,2],[3.2,.045,.46,1.25,2],[2.5,.035,.44,1.3,2],[1.9,.027,.44,1.3,2],[1.5,.021,.42,1.35,2],[1.15,.016,.42,1.35,2]],Lc=class{constructor(){this.active=!1,this.ox=0,this.oz=0,this.dx=1,this.dz=0,this.speed=14,this.width=150,this.hMax=12,this.t0=0,this.tBreak=14,this.age=0,this.s=0,this.height=0,this.front=14,this.frontMin=8.5,this.seed=0,this.mega=!1,this.back=55,this.curl=0,this.brk=0,this.turb=0,this.roll=0}},lo=class{constructor(t=20261112){this.time=0,this.storm=1,this.windAngle=0;let e=ui(t);this.dirX=new Float64Array(Ee),this.dirZ=new Float64Array(Ee),this.k=new Float64Array(Ee),this.omega=new Float64Array(Ee),this.phase0=new Float64Array(Ee),this.amp0=new Float64Array(Ee),this.amp=new Float64Array(Ee),this.steep=new Float64Array(Ee),this.len=new Float64Array(Ee),this.band=new Uint8Array(Ee),this.phT=new Float64Array(Ee),this.bodyW=new Float64Array(Ee);for(let i=0;i<Ee;i++){let[n,s,r,o,h]=$v[i],c=1+(e()-.5)*.06,u=n*c,l=i%2===0?1:-1,d=this.windAngle+l*o*(.25+.75*e());this.dirX[i]=Math.cos(d),this.dirZ[i]=Math.sin(d),this.len[i]=u,this.k[i]=Pc/u,this.omega[i]=Math.sqrt(Jv*this.k[i]),this.phase0[i]=e()*Pc,this.amp0[i]=s*(.9+e()*.2),this.steep[i]=r,this.band[i]=h,this.bodyW[i]=1/(1+Math.pow(this.k[i]*.95,2))}this.uA=new Float32Array(Ee*4),this.uB=new Float32Array(Ee*4),this.breakers=[];for(let i=0;i<yi;i++)this.breakers.push(new Lc);this.uBrkA=new Float32Array(yi*4),this.uBrkB=new Float32Array(yi*4),this.uBrkC=new Float32Array(yi*4),this.sigHeight=0,this.setStorm(1),this.update(0)}setStorm(t){this.storm=ct(t);let e=0,i=1+.2*Math.sin(this.time*.105)*Math.sin(this.time*.041+1.3);for(let n=0;n<Ee;n++){let s=this.band[n],r=s===0?dt(.3,1,this.storm):s===1?dt(.22,1,this.storm):dt(.4,1,this.storm);this.amp[n]=this.amp0[n]*r*(s<2?i:1),e+=this.amp[n]*this.amp[n]*.5}this.sigHeight=4*Math.sqrt(e)}update(t){this.time+=t;let e=this.time;for(let i=0;i<Ee;i++){this.phT[i]=(this.omega[i]*e+this.phase0[i])%Pc;let n=i*4;this.uA[n]=this.dirX[i],this.uA[n+1]=this.dirZ[i],this.uA[n+2]=this.k[i],this.uA[n+3]=this.amp[i],this.uB[n]=this.phT[i],this.uB[n+1]=this.steep[i],this.uB[n+2]=this.len[i],this.uB[n+3]=0}for(let i=0;i<yi;i++){let n=this.breakers[i],s=i*4;if(n.active){n.age=e-n.t0,n.s=n.speed*n.age;let o=_e(0,n.tBreak*.85,n.age),h=n.age-n.tBreak;n.brk=ct(h/1.6);let c=h>0?Math.exp(-h/(n.mega?5:3)):1;n.height=n.hMax*o*(.16+.84*c),n.front=dt(26,n.frontMin,_e(.3,1,o)),n.curl=_e(-2.2,.3,h)*(h>0?Math.exp(-h/2.2):1),n.turb=h>0?Math.min(1,h/1)*Math.exp(-Math.max(0,h-2.5)/(n.mega?8:5)):0,n.roll=h>0?n.brk*Math.exp(-h/(n.mega?5.5:3.2)):0,h>(n.mega?30:20)&&(n.active=!1)}let r=n.active?1:0;this.uBrkA[s]=n.ox,this.uBrkA[s+1]=n.oz,this.uBrkA[s+2]=n.dx,this.uBrkA[s+3]=n.dz,this.uBrkB[s]=n.s,this.uBrkB[s+1]=n.height*r,this.uBrkB[s+2]=n.front,this.uBrkB[s+3]=n.back,this.uBrkC[s]=n.width,this.uBrkC[s+1]=n.curl*r,this.uBrkC[s+2]=n.brk*r,this.uBrkC[s+3]=n.turb*r}}spawnBreaker(t,e,i={}){let n=this.breakers.find(o=>!o.active);if(!n)return null;let s=this.windAngle+(i.angleOffset||0);n.dx=Math.cos(s),n.dz=Math.sin(s),n.speed=i.speed||14;let r=i.lead||15;return n.ox=t-n.dx*n.speed*r,n.oz=e-n.dz*n.speed*r,n.seed=n.ox*.013+n.oz*.017,n.width=i.width||150,n.hMax=i.height||12,n.back=i.back||55,n.frontMin=i.frontMin||8.5,n.mega=!!i.mega,n.t0=this.time,n.tBreak=r+(i.breakOffset!==void 0?i.breakOffset:-1.2),n.age=0,n.active=!0,n.s=0,n.height=0,n.curl=0,n.brk=0,n.turb=0,n.roll=0,n}_breakerHeight(t,e,i){let n=e-t.ox,s=i-t.oz,r=n*t.dx+s*t.dz,o=-n*t.dz+s*t.dx,h=.16*Math.sin(o*.071+t.seed)+.09*Math.sin(o*.193+t.seed*1.7),c=2.6*Math.sin(o*.047+t.seed*.6)+1.2*Math.sin(o*.13+t.seed*2.1),u=r-t.s-c,l=Math.exp(-(o*o)/(t.width*t.width))*(1+h),d=u>0?t.front:t.back,f=u/d,g=u>0?Math.max(0,Math.min(1,(t.height-8)/12))*1.6:0,b=Math.exp(-f*f-g*f*f*f*f);this._bq=f,this._bk=g;let m=(u-2.4*t.front)/(1.7*t.front),p=-.22*Math.exp(-m*m);return this._bu=u,this._benv=l,this._bp=b,this._bsc=d,this._btr=p,this._btu=m,this._bpeel=Math.max(.15,Math.min(1.3,.55+2.5*h)),t.height*l*(b+p)}sample(t,e,i){let n=Ee,s=this.dirX,r=this.dirZ,o=this.k,h=this.amp,c=this.steep,u=this.phT,l=this.omega,d=t,f=e;for(let D=0;D<3;D++){let B=0,Y=0;for(let Q=0;Q<n;Q++){let X=o[Q]*(s[Q]*d+r[Q]*f)-u[Q],ot=c[Q]*h[Q]*Math.sin(X);B-=s[Q]*ot,Y-=r[Q]*ot}d=t-B,f=e-Y}let g=0,b=0,m=0,p=0,v=0,x=0,w=0,R=0,y=0,E=0,A=0,_=0;for(let D=0;D<n;D++){let B=o[D]*(s[D]*d+r[D]*f)-u[D],Y=Math.sin(B),Q=Math.cos(B),X=h[D],ot=o[D]*X,nt=c[D]*ot,lt=l[D];g+=X*Q,b+=nt*s[D]*s[D]*Q,m+=nt*r[D]*r[D]*Q,p+=nt*s[D]*r[D]*Q,v-=ot*s[D]*Y,x-=ot*r[D]*Y;let Z=c[D]*X*lt;w+=Z*s[D]*Q,y+=Z*r[D]*Q,R+=X*lt*Y;let kt=Z*lt;E+=kt*s[D]*Y,_+=kt*r[D]*Y,A-=X*lt*lt*Q}let T=-v*(1-m)-x*p,I=(1-b)*(1-m)-p*p,G=-x*(1-b)-v*p,q=I,U=0,z=0,J=0,V=0,H=0,N=0,P=0,W=0,k=0;for(let D=0;D<yi;D++){let B=this.breakers[D];if(!B.active||B.height<.01)continue;let Y=this._breakerHeight(B,t,e),Q=this._bu,X=this._benv,ot=this._bp,nt=this._bsc;if(X<.002)continue;let lt=this._bq,Z=this._bk,kt=2*lt+4*Z*lt*lt*lt,vt=-kt/nt*ot-.22*Math.exp(-this._btu*this._btu)*(-2*this._btu/(1.7*B.front)),Et=(kt*kt-(2+12*Z*lt*lt))/(nt*nt)*ot,xt=B.height*X*vt;g+=Y,J+=Y,I<.05&&(I=.05);let Ht=1/I;T*=Ht,G*=Ht,I=1,T-=xt*B.dx,G-=xt*B.dz,H+=Math.max(-12,Math.min(14,-B.speed*xt)),W+=B.speed*B.speed*B.height*X*Et;let Pt=B.speed*(.3*(1-B.brk)+.65*B.curl+.22*B.roll)*X*ot*Math.min(1,B.height/6),L=X*B.curl*Math.exp(-Math.pow((Q-.25*B.front)/(1.3*B.front),2))*Math.min(1,B.height/5);if(P=Math.max(P,L),k=Math.max(k,Math.min(B.mega?15:12,3.5+.6*B.hMax)*L*_e(-.7,.5,B.age-B.tBreak)),B.mega){let ht=Math.min(1,L*1.3)*_e(-.7,.5,B.age-B.tBreak),ft=Math.max(-12,Math.min(14,-B.speed*xt));ft>0&&(H-=ft*.25*ht);let bt=B.speed*B.speed*B.height*X*Et;bt>0&&(W-=bt*.2*ht)}if(V+=B.dx*Pt,N+=B.dz*Pt,B.mega){let ht=B.speed*X*B.curl*Math.exp(-Math.pow((Q-.1*B.front)/(.9*B.front),2));V+=B.dx*.45*ht,N+=B.dz*.45*ht}let C=B.speed*.26*X*Math.exp(-this._btu*this._btu)*Math.min(1,B.height/6)*(1-B.brk);V-=B.dx*C,N-=B.dz*C;let et=X*Math.exp(-Math.pow((Q-.3*B.front)/(1.6*B.front+26*B.turb),2));U=Math.max(U,B.brk*et*Math.min(1,B.height/3+B.turb)),z=Math.max(z,B.turb*X*Math.exp(-Math.pow((Q+14*B.turb)/(22+30*B.turb),2)))}let O=1/Math.sqrt(T*T+I*I+G*G);return i.h=g,i.nx=T*O,i.ny=I*O,i.nz=G*O,i.vx=w+V,i.vy=R+H,i.vz=y+N,i.ax=E,i.ay=A,i.az=_,i.bvx=V,i.bvy=H,i.bvz=N,i.lip=P,i.plunge=k,i.bay=W<-8.8?-8.8:W>19.6?19.6:W,i.jac=q,i.x0=d,i.z0=f,i.aer=U,i.turb=z,i.brkH=J,i}heightFast(t,e){let i=this.dirX,n=this.dirZ,s=this.k,r=this.amp,o=this.phT,h=this.steep,c=t,u=e;for(let d=0;d<2;d++){let f=0,g=0;for(let b=0;b<14;b++){let m=h[b]*r[b]*Math.sin(s[b]*(i[b]*c+n[b]*u)-o[b]);f-=i[b]*m,g-=n[b]*m}c=t-f,u=e-g}let l=0;for(let d=0;d<14;d++)l+=r[d]*Math.cos(s[d]*(i[d]*c+n[d]*u)-o[d]);for(let d=0;d<yi;d++){let f=this.breakers[d];f.active&&f.height>.01&&(l+=this._breakerHeight(f,t,e))}return l}bodyFlow(t,e,i,n){let s=this.dirX,r=this.dirZ,o=this.k,h=this.amp,c=this.steep,u=this.phT,l=this.omega,d=this.bodyW,f=0,g=0,b=0,m=0,p=0,v=0;for(let x=0;x<Ee;x++){let w=Math.exp(-o[x]*i)*d[x];if(w<.01)continue;let R=o[x]*(s[x]*t+r[x]*e)-u[x],y=Math.sin(R),E=Math.cos(R),A=h[x]*l[x]*w,_=A*l[x];f+=c[x]*A*s[x]*E,b+=c[x]*A*r[x]*E,g+=A*y,m+=c[x]*_*s[x]*y,v+=c[x]*_*r[x]*y,p-=_*E}return n.vx=f,n.vy=g,n.vz=b,n.ax=m,n.ay=p,n.az=v,n}velocityAtDepth(t,e,i,n){let s=this.dirX,r=this.dirZ,o=this.k,h=this.amp,c=this.steep,u=this.phT,l=this.omega,d=0,f=0,g=0;for(let b=0;b<Ee;b++){let m=Math.exp(-o[b]*i);if(m<.01)continue;let p=o[b]*(s[b]*t+r[b]*e)-u[b],v=h[b]*l[b]*m,x=Math.cos(p);d+=c[b]*v*s[b]*x,g+=c[b]*v*r[b]*x,f+=v*Math.sin(p)}return n.vx=d,n.vy=f,n.vz=g,n}breakerFlow(t,e,i,n,s){let r=0,o=0,h=0,c=this.time;for(let u=0;u<yi;u++){let l=this.breakers[u];if(!l.active||l.roll<.003&&l.turb<.003)continue;this._breakerHeight(l,t,i);let d=this._benv,f=this._bu;if(!(d<.01)){if(l.roll>.003){let g=Math.max(1.8,Math.min(7.5,.36*l.hMax)),b=f-.35*l.front,m=e-(n-.55*g),p=Math.hypot(b,m);if(p<3.2*g){let v=p<g?1:g*g/(p*p),x=.85*l.speed/g*l.roll*d*v,w=x*m;r+=l.dx*w,h+=l.dz*w,o+=-x*b}}if(l.turb>.003){let g=l.turb*d*Math.exp(-Math.pow((f+14*l.turb)/(22+30*l.turb),2))*Math.exp(-Math.max(0,n-e)/6.5);if(g>.01){let b=g*3.4;r+=b*(Math.sin(.9*i+1.7*e+2.3*c)+.6*Math.sin(1.7*t-1.1*e-3.1*c+1.3)),o+=b*(Math.sin(1.1*t+.8*i+2.9*c+.7)+.6*Math.sin(-1.5*i+1.9*e+2*c)),h+=b*(Math.sin(1.3*e-.9*t+2.6*c+2.1)+.6*Math.sin(1.6*t+1.2*i-2.2*c)),o-=g*2.6*Math.exp(-Math.max(0,n-e)/3)}}}}return s.vx+=r,s.vy+=o,s.vz+=h,s}};function ri(){return{bay:0,lip:0,plunge:0,bvx:0,bvy:0,bvz:0,h:0,nx:0,ny:1,nz:0,vx:0,vy:0,vz:0,ax:0,ay:0,az:0,jac:1,x0:0,z0:0,aer:0,turb:0,brkH:0}}var di=[["hips",-1,0,0,0],["spine",0,0,.12,0],["chest",1,0,.3,0],["neck",2,0,.525,0],["head",3,0,.625,.012],["upperArmL",2,.178,.455,0],["foreArmL",5,.236,.172,.006],["handL",6,.286,-.078,.032],["upperArmR",2,-.178,.455,0],["foreArmR",8,-.236,.172,.006],["handR",9,-.286,-.078,.032],["thighL",0,.096,-.07,0],["shinL",11,.106,-.505,.006],["footL",12,.106,-.925,-.016],["thighR",0,-.096,-.07,0],["shinR",14,-.106,-.505,.006],["footR",15,-.106,-.925,-.016]],S={};di.forEach((a,t)=>{S[a[0]]=t});var tx=new M(0,.082,.088),jt={jacket:[.72,.15,.04],jacketDark:[.42,.085,.028],tape:[.85,.87,.84],pants:[.045,.055,.08],shoe:[.022,.022,.024],skin:[.62,.43,.34],skinDark:[.46,.29,.22],hair:[.03,.024,.02],lip:[.36,.16,.14],eye:[.05,.035,.03]},uo=class{constructor(){this.pos=[],this.col=[],this.si=[],this.sw=[],this.idx=[],this.n=0}vert(t,e,i){this.pos.push(t.x,t.y,t.z),this.col.push(e[0],e[1],e[2]);let n=[0,0,0,0],s=[0,0,0,0],r=0;for(let o=0;o<i.length&&o<4;o++)n[o]=i[o][0],s[o]=i[o][1],r+=i[o][1];for(let o=0;o<4;o++)s[o]/=r||1;return this.si.push(...n),this.sw.push(...s),this.n++}tube(t,e,i=!0,n=!0){let s=new M,r=new M,o=new M,h=new M,c=new M(0,0,1),u=new M(0,1,0),l=[];for(let f=0;f<t.length;f++){let g=t[Math.max(0,f-1)].c,b=t[Math.min(t.length-1,f+1)].c;s.subVectors(b,g).normalize(),t[f].ax?r.copy(t[f].ax):(r.crossVectors(s,c),r.lengthSq()<.04&&r.crossVectors(s,u),r.normalize()),o.crossVectors(r,s).normalize();let m=this.n;for(let p=0;p<e;p++){let v=p/e*Math.PI*2,x=Math.cos(v),w=Math.sin(v),R=t[f].rx,y=t[f].rz;if(t[f].shape){let A=t[f].shape(v,x,w);R*=A,y*=A}h.copy(t[f].c).addScaledVector(r,x*R).addScaledVector(o,w*y);let E=typeof t[f].col=="function"?t[f].col(v,h):t[f].col;this.vert(h,E,t[f].w)}l.push(m)}for(let f=0;f<l.length-1;f++)for(let g=0;g<e;g++){let b=l[f]+g,m=l[f]+(g+1)%e,p=l[f+1]+g,v=l[f+1]+(g+1)%e;this.idx.push(b,p,m,m,p,v)}let d=(f,g,b)=>{let m=typeof g.col=="function"?g.col(0,g.c):g.col,p=this.vert(g.c,m,g.w);for(let v=0;v<e;v++){let x=f+v,w=f+(v+1)%e;b?this.idx.push(p,w,x):this.idx.push(p,x,w)}};i&&d(l[0],t[0],!0),n&&d(l[l.length-1],t[t.length-1],!1)}build(){let t=new ce;return t.setAttribute("position",new oe(this.pos,3)),t.setAttribute("color",new oe(this.col,3)),t.setAttribute("skinIndex",new qs(this.si,4)),t.setAttribute("skinWeight",new oe(this.sw,4)),t.setIndex(this.idx),t.computeVertexNormals(),t}},De=(a,t,e)=>new M(a,t,e),qi=(a,t,e)=>new M().lerpVectors(a,t,e),qd=(a,t,e)=>{let i=Math.max(0,Math.min(1,(e-a)/(t-a)));return i*i*(3-2*i)};function ex(){let a=new uo,t=18,e=s=>{let r=di[S[s]];return De(r[2],r[3],r[4])},i=[[-.135,.12,.095],[-.085,.165,.116],[-.02,.176,.12],[.05,.166,.114],[.11,.156,.108],[.17,.152,.106],[.24,.164,.114],[.31,.18,.124],[.385,.184,.128],[.445,.186,.118],[.488,.152,.1],[.52,.1,.086],[.552,.08,.08],[.58,.074,.076]],n=s=>{if(s<.02)return[[S.hips,1]];if(s<.14){let r=qd(.02,.14,s);return[[S.hips,1-r],[S.spine,r]]}if(s<.2)return[[S.spine,1]];if(s<.32){let r=qd(.2,.32,s);return[[S.spine,1-r],[S.chest,r]]}return[[S.chest,1]]};a.tube(i.map(([s,r,o])=>{let h=s>-.06,c=h?1.07:1;return{c:De(0,s,h?.004:0),rx:r*c,rz:o*c,w:n(s),col:(u,l)=>h?s>.28&&s<.325?jt.tape:Math.abs(l.x)<.012&&l.z>0||s>.5?jt.jacketDark:jt.jacket:jt.pants}}),t),a.tube([{c:De(0,.53,.002),rx:.063,rz:.066,col:jt.skin,w:[[S.chest,.6],[S.neck,.4]]},{c:De(0,.575,.006),rx:.061,rz:.064,col:jt.skin,w:[[S.neck,1]]},{c:De(0,.63,.012),rx:.06,rz:.063,col:jt.skin,w:[[S.neck,.5],[S.head,.5]]},{c:De(0,.665,.016),rx:.057,rz:.06,col:jt.skin,w:[[S.head,1]]}],14);for(let s of[1,-1]){let r=s>0?S.upperArmL:S.upperArmR,o=s>0?S.foreArmL:S.foreArmR,h=s>0?S.handL:S.handR,c=e(s>0?"upperArmL":"upperArmR"),u=e(s>0?"foreArmL":"foreArmR"),l=e(s>0?"handL":"handR"),d=De(l.x+s*.03,l.y-.182,l.z+.012),f=[];f.push({c:De(c.x-s*.012,c.y+.052,0),rx:.036,rz:.04,col:jt.jacket,w:[[S.chest,.65],[r,.35]]}),f.push({c:De(c.x+s*.004,c.y+.02,0),rx:.064,rz:.066,col:jt.jacket,w:[[S.chest,.4],[r,.6]]});let g=[[.12,.066],[.3,.062],[.52,.058],[.74,.054],[.9,.052]];for(let[v,x]of g){let w=v>.28&&v<.4;f.push({c:qi(c,u,v),rx:x,rz:x*1.04,col:w?jt.tape:jt.jacket,w:v>.8?[[r,.75],[o,.25]]:[[r,1]]})}f.push({c:u.clone(),rx:.051,rz:.053,col:jt.jacket,w:[[r,.5],[o,.5]]});let b=[[.12,.052],[.32,.051],[.55,.046],[.78,.041],[.9,.04]];for(let[v,x]of b)f.push({c:qi(u,l,v),rx:x,rz:x,col:v>.86?jt.jacketDark:jt.jacket,w:v<.2?[[r,.25],[o,.75]]:[[o,1]]});f.push({c:qi(u,l,.955),rx:.027,rz:.031,col:jt.skin,w:[[o,1]]}),f.push({c:l.clone(),rx:.021,rz:.031,col:jt.skin,w:[[o,.5],[h,.5]]}),f.push({c:qi(l,d,.3),rx:.017,rz:.044,col:jt.skin,w:[[h,1]]}),f.push({c:qi(l,d,.55),rx:.015,rz:.046,col:jt.skin,w:[[h,1]]}),f.push({c:qi(l,d,.8),rx:.012,rz:.04,col:jt.skinDark,w:[[h,1]]}),f.push({c:d.clone(),rx:.007,rz:.022,col:jt.skinDark,w:[[h,1]]}),a.tube(f,12);let m=qi(l,d,.22).add(De(0,0,.034)),p=qi(l,d,.52).add(De(s*.008,0,.066));a.tube([{c:m,rx:.012,rz:.013,col:jt.skin,w:[[h,1]]},{c:qi(m,p,.6),rx:.011,rz:.011,col:jt.skin,w:[[h,1]]},{c:p,rx:.007,rz:.007,col:jt.skinDark,w:[[h,1]]}],7)}for(let s of[1,-1]){let r=s>0?S.thighL:S.thighR,o=s>0?S.shinL:S.shinR,h=s>0?S.footL:S.footR,c=e(s>0?"thighL":"thighR"),u=e(s>0?"shinL":"shinR"),l=e(s>0?"footL":"footR"),d=[];d.push({c:De(c.x,c.y+.045,0),rx:.08,rz:.09,col:jt.pants,w:[[S.hips,.7],[r,.3]]});let f=[[.05,.094,.1],[.25,.09,.096],[.5,.079,.084],[.75,.067,.07],[.92,.06,.062]];for(let[m,p,v]of f)d.push({c:qi(c,u,m),rx:p,rz:v,col:jt.pants,w:m<.15?[[S.hips,.4],[r,.6]]:m>.85?[[r,.75],[o,.25]]:[[r,1]]});d.push({c:u.clone(),rx:.058,rz:.061,col:jt.pants,w:[[r,.5],[o,.5]]});let g=[[.1,.056,.06],[.28,.057,.066],[.5,.05,.056],[.75,.042,.045],[.93,.038,.04]];for(let[m,p,v]of g)d.push({c:qi(u,l,m).add(De(0,0,m>.15&&m<.6?-.008:0)),rx:p,rz:v,col:jt.pants,w:m<.2?[[r,.25],[o,.75]]:[[o,1]]});d.push({c:l.clone(),rx:.036,rz:.04,col:jt.shoe,w:[[o,.5],[h,.5]]}),a.tube(d,14,!0,!1);let b=l.y-.045;a.tube([{c:De(l.x,b+.012,l.z-.068),rx:.03,rz:.03,col:jt.shoe,w:[[h,1]]},{c:De(l.x,b+.006,l.z-.035),rx:.042,rz:.046,col:jt.shoe,w:[[h,.8],[o,.2]]},{c:De(l.x,b,l.z+.03),rx:.046,rz:.048,col:jt.shoe,w:[[h,1]]},{c:De(l.x+s*.004,b-.008,l.z+.1),rx:.049,rz:.036,col:jt.shoe,w:[[h,1]]},{c:De(l.x+s*.006,b-.014,l.z+.165),rx:.044,rz:.026,col:jt.shoe,w:[[h,1]]},{c:De(l.x+s*.006,b-.018,l.z+.205),rx:.028,rz:.016,col:jt.shoe,w:[[h,1]]}],12)}return a.build()}function ix(){let a=new uo,t=De(0,.722,.022),e=20,i=26,n=[];for(let c=0;c<=e;c++){let u=c/e*Math.PI,l=Math.cos(u),d=Math.sin(u),f=Math.max(0,-l),g=t.y+l*(l>0?.108:.118),b=.078*(1-.3*f*f),m=.097*(1-.2*f*f),p=t.z+.012*f-.006*Math.max(0,l);n.push({c:De(0,g,p),ax:De(1,0,0),rx:Math.max(.004,b*d),rz:Math.max(.004,m*d),w:f>.75?[[S.head,.7],[S.neck,.3]]:[[S.head,1]],shape:(v,x,w)=>{let R=Math.max(0,-w),y=1,E=g-t.y;return y+=.2*Math.exp(-Math.pow((E+.022)/.02,2))*Math.pow(R,26)*Math.pow(Math.max(0,1-Math.abs(x)*5),1),y+=.035*Math.exp(-Math.pow((E-.03)/.016,2))*Math.pow(R,3),y-=.03*Math.exp(-Math.pow((E-.008)/.012,2))*Math.pow(R,2)*Math.exp(-Math.pow((Math.abs(x)-.36)/.16,2)),y+=.05*Math.exp(-Math.pow((E+.088)/.022,2))*Math.pow(R,4),y},col:(v,x)=>{let w=x.y-t.y,R=x.x,y=x.z-t.z,E=y>0,A=E?.058+Math.abs(R)*-.25:-.045-Math.max(0,-y)*.2;if(w>A)return jt.hair;if(E){if(Math.abs(w-.01)<.01&&Math.abs(Math.abs(R)-.031)<.014)return jt.eye;if(Math.abs(w-.03)<.006&&Math.abs(Math.abs(R)-.031)<.022)return jt.hair;if(Math.abs(w+.058)<.007&&Math.abs(R)<.024)return jt.lip;if(w<-.02&&w>-.1&&Math.abs(R)>.02)return jt.skinDark}return jt.skin}})}a.tube(n,i,!1,!1);let s=a.build(),r=s.attributes.position,o=s.attributes.color,h=s.attributes.normal;for(let c=0;c<r.count;c++)o.getX(c)<.04&&o.getY(c)<.03&&r.setXYZ(c,r.getX(c)+h.getX(c)*.008,r.getY(c)+h.getY(c)*.008,r.getZ(c)+h.getZ(c)*.008);return s.computeVertexNormals(),s}var ea=class{constructor(){this.group=new re,this.group.name="survivor",this.bones=di.map(t=>{let e=new ss;return e.name=t[0],e}),di.forEach((t,e)=>{let i=this.bones[e];if(t[1]>=0){let n=di[t[1]];i.position.set(t[2]-n[2],t[3]-n[3],t[4]-n[4]),this.bones[t[1]].add(i)}else i.position.set(t[2],t[3],t[4])}),this.root=this.bones[0],this.group.add(this.root),this.group.updateMatrixWorld(!0),this.skeleton=new Ys(this.bones),this.material=new xi({vertexColors:!0,roughness:.62,metalness:0,clearcoat:.28,clearcoatRoughness:.32,envMapIntensity:1}),this.body=new ns(ex(),this.material),this.head=new ns(ix(),this.material);for(let t of[this.body,this.head])t.frustumCulled=!1,t.layers.enable(1),this.group.add(t),t.bind(this.skeleton,new Rt);this.body.visible=!1,this.head.visible=!1,this._v=new M,this.eyeLocal=tx.clone(),this.glb=null}useGlb(t){this.glb=t,this.body.visible=!1,this.head.visible=!1,this.procHead=this.head,this.head={_v:!0,get visible(){return this._v},set visible(e){this._v=e,t.setHeadVisible(e)}},this.material=t.material,this.eyeLocal.set(0,t.eye.y-di[S.head][3],t.eye.z-di[S.head][4]+.06)}retarget(){this.glb&&this.glb.update(this.bones)}bone(t){return this.bones[S[t]]}eyeWorld(t){return t.copy(this.eyeLocal).applyMatrix4(this.bones[S.head].matrixWorld)}};var Xd=1025,nx=1.22,Ka=9.81,fo=.55;function Xi(a,t,e,i,n,s,r,o,h=-1,c=-1){return{name:a,offset:new M(t,e,i),rest:new M(t,e,i),vol:n/1e3,half:s,cdaP:r,cdaA:o,bone:h,boneB:c,sub:0,depth:-10,world:new M,wasSub:0}}var ia=class a{constructor(t){this.waves=t,this.mass=80.6,this.inertia=new M(11.5,1.7,12.5),this.pos=new M,this.vel=new M,this.quat=new _t,this.angVel=new M,this.prevPos=new M,this.prevQuat=new _t,this.points=[Xi("head",0,.7,.02,5.2,.11,.035,.012),Xi("chest",0,.38,.01,29.7,.15,.13,.03),Xi("pelvis",0,0,0,15.5,.13,.11,.02),Xi("shoulderL",.21,.4,0,3.2,.07,.035,.006),Xi("shoulderR",-.21,.4,0,3.2,.07,.035,.006),Xi("armL",.28,.05,.02,1.8,.05,.04,.005,S.handL),Xi("armR",-.28,.05,.02,1.8,.05,.04,.005,S.handR),Xi("legL",.1,-.33,0,6.5,.09,.07,.008,S.shinL),Xi("legR",-.1,-.33,0,6.5,.09,.07,.008,S.shinR),Xi("footL",.105,-.82,0,3.4,.06,.055,.006,S.footL),Xi("footR",-.105,-.82,0,3.4,.06,.055,.006,S.footR)],this.totalVol=this.points.reduce((e,i)=>e+i.vol,0),this.breathVol=0,this.extForce=new M,this.extTorque=new M,this.wind=new M,this.waterTorque=new M,this.hydroTorque=new M,this.subFrac=0,this.mouthDepth=-1,this.eyeDepth=-1,this.relFlow=new M,this.relSpeed=0,this.dragG=0,this.aer=0,this.turb=0,this.plunge=0,this.duck=0,this.surface=ri(),this.surfaceH=0,this.splash=0,this.splashPos=new M,this._s=ri(),this._w={vx:0,vy:0,vz:0,ax:0,ay:0,az:0},this._r=new M,this._p=new M,this._vp=new M,this._u=new M,this._f=new M,this._F=new M,this._T=new M,this._axis=new M,this._tmp=new M,this._tmp2=new M,this._qi=new _t,this._dq=new _t,this._up=new M,this._mouth=new M(0,.655,.105),this._eye=new M(0,.705,.1)}reset(t,e){let i=this.waves.sample(t,e,this._s);this.pos.set(t,i.h-.62,e),this.vel.set(i.vx,i.vy,i.vz),this.quat.identity(),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat)}setAirway(t,e){this._mouth.copy(t),this._eye.copy(e),this._mouthH=new M(t.x,t.y-.625,t.z-.012),this._eyeH=new M(e.x,e.y-.625,e.z-.012)}pin(t,e,i,n){this.pos.copy(t),this.prevPos.copy(t),this.quat.copy(e),this.prevQuat.copy(e),this.vel.copy(i),this.angVel.copy(n);let s=this._r.copy(this._mouth).applyQuaternion(e).add(t),r=this.waves.sample(s.x,s.z,this.surface);this.surfaceH=r.h,this.mouthDepth=r.h-s.y;let o=this._p.copy(this._eye).applyQuaternion(e).add(t);this.eyeDepth=r.h-o.y,this.subFrac=Math.max(0,Math.min(1,(r.h-t.y+.2)/.7)),this.relFlow.set(0,0,0),this.relSpeed=0,this.dragG=0,this.aer=r.aer,this.turb=r.turb,this.plunge=0,this.splash=0,this.extForce.set(0,0,0),this.extTorque.set(0,0,0)}syncLimbs(t){let e=this._tmp,i=t.group.matrixWorld,n=a._im||(a._im=new Rt);n.copy(i).invert(),this._mouthH||this.setAirway(this._mouth.clone(),this._eye.clone());let s=t.bones[S.head].matrixWorld;e.copy(this._mouthH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._mouth.lerp(e,.5),e.copy(this._eyeH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._eye.lerp(e,.5);for(let r of this.points)r.bone<0||(e.setFromMatrixPosition(t.bones[r.bone].matrixWorld).applyMatrix4(n),e.lengthSq()<1.6&&r.offset.lerp(e,.5))}step(t){let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._F.set(0,0,0),n=this._T.set(0,0,0),s=this._axis.set(0,1,0).applyQuaternion(this.quat),r=0,o=0,h=0,c=0,u=0,l=0;this.relFlow.set(0,0,0),this.splash=0;let d=this._tmp2.set(0,0,0),f=0,g=0;for(let V=0;V<this.points.length;V++){let H=this.points[V],N=this._r.copy(H.offset).applyQuaternion(this.quat),P=this._p.copy(this.pos).add(N);H.world.copy(P);let W=this._vp.copy(this.angVel).cross(N).add(this.vel),k=e.sample(P.x,P.z,this._s),O=k.h-P.y;H.depth=O;let D=Math.max(0,Math.min(1,(O+H.half)/(2*H.half)));if(H.bone<0&&D>.5!=H.wasSub>.5){let Q=Math.abs(W.y-k.vy)+.4*Math.hypot(W.x-k.vx,W.z-k.vz);Q>this.splash&&(this.splash=Q,this.splashPos.set(P.x,k.h,P.z))}H.wasSub=D,H.sub=D;let B=this._f.set(0,0,0),Y=H.vol+(V===1?this.breathVol/1e3:0);if(D>0){let Q=Math.max(0,O),X=1-.85*(this.duck||0),ot=k.aer*Math.exp(-Q/3.5)*X,nt=Xd*(1-.72*ot);ot>h&&(h=ot),k.turb*X>c&&(c=k.turb*X),k.plunge*X>l&&(l=k.plunge*X);let lt=e.bodyFlow(k.x0,k.z0,Q,this._w),Z=Math.exp(-Q/80),kt=Math.exp(-Q/(2.5+.35*Math.max(0,k.brkH)));if(lt.vx+=k.bvx*(.25*Z+.75*kt)*X,lt.vy+=k.bvy*Z*X,lt.vz+=k.bvz*(.25*Z+.75*kt)*X,k.plunge>.01&&(lt.vy-=X*k.plunge*Math.exp(-Q/Math.min(8.5,2+.45*Math.max(0,k.brkH)))),X<.999){let bt=lt.vx,Lt=lt.vy,K=lt.vz;e.breakerFlow(P.x,P.y,P.z,k.h,lt),lt.vx=bt+(lt.vx-bt)*X,lt.vy=Lt+(lt.vy-Lt)*X,lt.vz=K+(lt.vz-K)*X}else e.breakerFlow(P.x,P.y,P.z,k.h,lt);let vt=nt*Y*D;f+=-N.z*vt*Ka,g+=N.x*vt*Ka,B.set(vt*(1+fo)*lt.ax,vt*(Ka+(1+fo)*(lt.ay+k.bay*Z)),vt*(1+fo)*lt.az);let Et=this._u.set(lt.vx-W.x,lt.vy-W.y,lt.vz-W.z),xt=Et.dot(s),Ht=this._tmp.copy(s).multiplyScalar(xt),Pt=this._up.copy(Et).sub(Ht),L=.5*nt*H.cdaP*D*Pt.length()+24*H.cdaP*D/.1,C=.5*nt*H.cdaA*D*Math.abs(xt)+8*D*H.cdaA/.01,et=Pt.x*L+Ht.x*C,ht=Pt.y*L+Ht.y*C,ft=Pt.z*L+Ht.z*C;B.x+=et,B.y+=ht,B.z+=ft,d.x+=et,d.y+=ht,d.z+=ft,r+=Y*D,this.relFlow.addScaledVector(Et,Y*D),u+=Y*D}if(D<1){let Q=this._u.set(this.wind.x-W.x,this.wind.y-W.y,this.wind.z-W.z),X=.5*nx*H.cdaP*1.1*(1-D)*Q.length();B.addScaledVector(Q,X)}i.add(B),n.add(this._tmp.copy(N).cross(B))}o=d.length(),this.hydroTorque.set(f,0,g),this.subFrac=r/this.totalVol,this.aer=h,this.turb=c,this.plunge=l,u>0&&this.relFlow.multiplyScalar(1/u),this.relSpeed=this.relFlow.length(),this.dragG=o/(this.mass*Ka);let b=this.mass+fo*Xd*r;i.add(this.extForce),i.y-=this.mass*Ka,this.vel.addScaledVector(i,t/b);let m=this.vel.length();m>45&&this.vel.multiplyScalar(45/m),this.pos.addScaledVector(this.vel,t),this.waterTorque.copy(n),n.add(this.extTorque);let p=this._qi.copy(this.quat).invert(),v=this._tmp.copy(this.angVel).applyQuaternion(p),x=this._tmp2.copy(n).applyQuaternion(p),w=1+.6*this.subFrac,R=this.inertia.x*w,y=this.inertia.y*w,E=this.inertia.z*w,A=(x.x-(E-y)*v.y*v.z)/R,_=(x.y-(R-E)*v.z*v.x)/y,T=(x.z-(y-R)*v.x*v.y)/E;v.x+=A*t,v.y+=_*t,v.z+=T*t;let I=Math.exp(-(.25+1.1*this.subFrac)*t);v.multiplyScalar(I);let G=v.length();G>14&&v.multiplyScalar(14/G),this.angVel.copy(v).applyQuaternion(this.quat);let q=this.angVel.length()*t;q>1e-7&&(this._dq.setFromAxisAngle(this._r.copy(this.angVel).normalize(),q),this.quat.premultiply(this._dq).normalize());let U=this._r.copy(this._mouth).applyQuaternion(this.quat).add(this.pos),z=e.sample(U.x,U.z,this.surface);this.surfaceH=z.h,this.mouthDepth=z.h-U.y;let J=this._p.copy(this._eye).applyQuaternion(this.quat).add(this.pos);this.eyeDepth=z.h-J.y}};var rs=new M(0,1,0),na=class{constructor(t,e,i){this.body=t,this.survival=e,this.input=i,this.yaw=Math.PI,this.pitch=0,this.control=1,this.impact=0,this.impactPeak=0,this.moveAmt=0,this.effort=0,this.swimBlend=0,this.underSwim=0,this.crawlBlend=0,this.diveBlend=0,this.duckQ=0,this.duckT=0,this._cdWas=1e9,this._diveWas=!1,this.duckTry=null,this.riseBlend=0,this.swimHeld=!1,this.diveHeld=!1,this.upHeld=!1,this.sprintHeld=!1,this.diveTime=0,this.moveDir=new M(0,0,1),this.heading=new M(0,0,1),this.facing=new M(0,0,1),this.recover=0,this.strokePhase=0,this.brace=0,this.air=0,this.grab=null,this.fear=0,this.sinkN=150,this.cling=!1,this.faceDir=null,this.struggleW=0,this.tumble=0,this.events=[],this._lastImpact=-10,this._time=0,this._fwd=new M,this._right=new M,this._dir=new M,this._x=new M,this._y=new M,this._z=new M,this._m=new Rt,this._qt=new _t,this._qe=new _t,this._ax=new M,this._h=new M}fixedUpdate(t){let e=this.body,i=this.survival,n=this.input;this._time+=t;let s=e.dragG,r=s>this.impact+.25;this.impact=s>this.impact?dt(this.impact,s,1-Math.exp(-t*30)):this.impact*Math.exp(-t*2.2),this.impactPeak=Math.max(this.impactPeak*Math.exp(-t*1.2),s),s>1.4&&r&&this._time-this._lastImpact>.8&&(this._lastImpact=this._time,this.events.push({type:"impact",strength:s,dir:e.relFlow.clone().normalize(),aer:e.aer}));let o=ct(1-_e(.9,3.2,this.impact)-.75*e.aer-.55*e.turb-.9*this.air),h=o<this.control?14:.55+.9*i.eff;this.control+=(Math.max(.04,o)-this.control)*(1-Math.exp(-t*h));let c=this.control*(i.alive?1:0)*(1-.8*i.blackout)*(i.drown>=.3?0:1-.4*i.drown/.3);this.tumble+=(ct(e.angVel.length()/3.5)*(1-c*.6)-this.tumble)*(1-Math.exp(-t*3)),this.recover=Math.max(0,this.recover-t);let u=n.enabled?n.axisX():0,l=n.enabled?n.axisZ():0,d=n.enabled&&n.swim(),g=n.enabled&&n.dive(),b=d,m=b&&!this.cling;this.swimHeld=b,this.diveHeld=g,this.sprintHeld=m,this.upHeld=m&&e.mouthDepth>.45&&!g,this.diveTime=g?this.diveTime+t:0;let p=this._fwd.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),v=this._right.set(-p.z,0,p.x);this.facing.copy(p);let x=this._h.copy(p).multiplyScalar(l).addScaledVector(v,u),w=Math.min(1,x.length());w>.05?x.multiplyScalar(1/x.length()):(x.copy(p),w=0),this.cling&&this.faceDir&&(x.copy(this.faceDir),w=0),this.heading.lerp(x,1-Math.exp(-t*(w>0||m||g||this.fp||this.cling?7:1.5))).normalize();let R=e.mouthDepth>.45,y=Math.max(0,e.mouthDepth);this.underSwim+=((R||g&&e.mouthDepth>.1?1:0)-this.underSwim)*(1-Math.exp(-t*5)),this.diveBlend+=((g?1:0)-this.diveBlend)*(1-Math.exp(-t*(g?7:3.5)));{let Y=this.crestDist===void 0?1e9:this.crestDist,Q=(this.crestHMax||0)>=7&&i.alive,X=g?this.diveTime:0,ot=g?ct(X/.6)*(X<2.6?1:ct(1-(X-2.6)/1.4)):0,nt=0;if(Q&&Y>2&&Y<1e8&&(nt=Y/(this.crestSpeed||14)<3?ot*(this.crestMega?.55:1):0,this.duckT=0),Q&&this._cdWas>2&&Y<=2&&Y>-6&&this._time-(this._duckJudged||-99)>5){this._duckJudged=this._time;let lt=ot*(this.crestMega?.55:1);this.duckTry={t:+X.toFixed(2),q:+lt.toFixed(2)},lt>.12&&(this.duckQ=lt,this.duckT=3.4,this.duckAge=0,this.events.push({type:"duck",q:lt,early:X>2.6,late:X<.6}))}this._cdWas=Y,this.duckAge=(this.duckAge||0)+t,this.duckT>0&&e.mouthDepth>.05&&this.duckAge<9&&(this.duckT=Math.max(this.duckT,.6)),this.duckT=Math.max(0,(this.duckT||0)-t),this.duckT>0&&(nt=Math.max(nt,this.duckQ||0)),e.duck+=(nt-e.duck)*(1-Math.exp(-t*(nt>e.duck?5:.9)))}let E=R&&!g;this.riseBlend+=((E?1:0)-this.riseBlend)*(1-Math.exp(-t*4));let A=this._dir.set(0,0,0),_=0,T=0;if(g){let Y=(e.duck||0)>.1?2:6.5,Q=Y<3?1:2.5,X=.95*ct((Y-y)/Q);A.copy(this.heading).multiplyScalar(.55+.45*(1-X)).addScaledVector(rs,-X).normalize(),_=1,T=m?360:270}else R?m?(A.copy(this.heading).multiplyScalar(w>0?.75:.35).addScaledVector(rs,.9).normalize(),_=1,T=360):w>0&&(A.copy(this.heading).multiplyScalar(w).addScaledVector(rs,.45*Math.min(1,y/.8)).normalize(),_=w,T=170):m?(A.copy(this.heading),_=1,T=325):w>0&&(A.copy(this.heading),_=w,T=150);_>.01&&this.moveDir.lerp(A,1-Math.exp(-t*6)).normalize(),this.moveAmt+=(_-this.moveAmt)*(1-Math.exp(-t*5));let I=i.eff*c,G=Math.min(1,e.subFrac*1.25),q=e.extForce.set(0,0,0),U=0;if(_>.01){let Y=1+.42*this.swimBlend*Math.sin(2*this.strokePhase)+.38*this.underSwim*Math.sin(this.strokePhase-1),Q=R||g?1:ct(1+(e.mouthDepth+.3+.06*this.crawlBlend)*3.5);q.addScaledVector(A,T*I*G*_*Y*Q*(this.grab?.2:1)),U+=(T>200?.8:.18)*_,g&&this.diveTime<1.1&&y<1.2&&(q.y-=260*I*Math.sin(Math.min(1,this.diveTime/1.1)*Math.PI))}let z=.2+.04*this.crawlBlend;if(!R&&e.mouthDepth<-z&&this.air<.3&&e.pos.y-e.surfaceH<1&&(q.y-=Math.min(520,(-e.mouthDepth-z)*1500)),!R&&this.air<.3&&this.swimBlend>.05&&e.points[2].sub!==void 0){let Y=e.points[2].depth,Q=.26+.06*this.crawlBlend;Y<Q&&(q.y-=Math.min(850,(Q-Y)*2300)*Math.min(1,this.swimBlend*1.5))}R&&!g&&!m&&(q.y+=165*I*G,U+=.5);{let Y=this.crestDist===void 0?1e9:this.crestDist;(e.duck||0)>.15&&R&&!g&&(Y<-1||Y>1e8)&&(q.y+=420*e.duck*G)}if(!R&&!g){let Y=e.vel.y-e.surface.vy,Q=.16*(this.bigLook||0)+.06+.07*ct(i.stamina/60)+.06*this.crawlBlend+.04*this.swimBlend*(1-this.crawlBlend)+(this.fp?.05*this.crawlBlend:0)+.03*Math.max(0,1-2.2*this.swimBlend),X=Math.max(0,Math.min(210+110*this.crawlBlend+55*this.fear,(e.mouthDepth+Q+.035*this.fear)*1e3-Y*140))*I*G*(1+.45*Math.sin(2*this.strokePhase));this.struggleW>.05&&(X=X*(1-.65*this.struggleW)+175*this.struggleW*I*G*Math.max(0,Math.sin(this.strokePhase))),q.y+=X,U+=.34*Math.min(1,X/100)*(1-this.crawlBlend)+.08+.09*this.fear*(1-this.crawlBlend)}if(this.grab){let Y=this.grab.x-e.pos.x,Q=this.grab.z-e.pos.z,X=Math.hypot(Y,Q);if(X<4.5){let ot=Math.min(280,X*230)*c;q.x+=Y/(X+.001)*ot,q.z+=Q/(X+.001)*ot,q.y+=70*G}}this.cling&&(U=this.squeeze?.5:Math.min(U,.14));{let Y=ct((i.drown-.6)/.12),Q=Math.max(i.spentK||0,Y);Q>.01&&!this.cling&&!this.grab&&e.subFrac>.25&&(q.y-=(this.sinkN+34*Y)*Q*ct((10-Math.max(0,e.mouthDepth))/4)),U*=1-(i.spentK||0)}this.effort+=(U-this.effort)*(1-Math.exp(-t*6));let J=!R&&!g&&_>.15?m?1:.5*_:0;this.crawlBlend+=((m&&!R&&!g?1:0)-this.crawlBlend)*(1-Math.exp(-t*4)),this.swimBlend+=(J-this.swimBlend)*(1-Math.exp(-t*(J>this.swimBlend?3.2:2.2)));let V=this._y,H=this._z,N=this._x,P=this._ax.set(this.heading.x,0,this.heading.z);P.lengthSq()<.01?P.copy(p):P.normalize();let W=this._time;if(g||R&&_>.1)V.copy(A),H.copy(rs).multiplyScalar(-(1-Math.abs(V.y))).addScaledVector(P,V.y),H.addScaledVector(V,-H.dot(V));else if(R)V.copy(rs).addScaledVector(P,.12),V.normalize(),H.copy(P),H.addScaledVector(V,-H.dot(V));else{let Y=this.swimBlend;V.copy(rs).multiplyScalar(1-Y*.5).addScaledVector(P,Y);let Q=1-Y,X=Math.max(0,1-2.2*Y);V.addScaledVector(P,Q*(.13+.12*X+.07*Math.sin(W*.83)*Math.sin(W*.31))),V.addScaledVector(v,Q*.08*Math.sin(W*.57+1.3)*Math.sin(W*.23+.4)),V.normalize(),H.copy(P).multiplyScalar(1-Y*.9).addScaledVector(rs,-Y*.9),H.addScaledVector(V,-H.dot(V))}H.lengthSq()<1e-4&&H.copy(P).addScaledVector(V,-P.dot(V)),H.lengthSq()<1e-4&&H.copy(v),H.normalize(),N.crossVectors(V,H).normalize(),this._m.makeBasis(N,V,H),this._qt.setFromRotationMatrix(this._m);let k=this._qe.copy(e.quat).invert().premultiply(this._qt);k.w<0&&(k.x=-k.x,k.y=-k.y,k.z=-k.z,k.w=-k.w);let O=2*Math.acos(Math.min(1,k.w)),D=e.extTorque.set(0,0,0);if(O>1e-4){let Y=Math.sqrt(Math.max(1e-9,1-k.w*k.w));this._ax.set(k.x/Y,k.y/Y,k.z/Y);let Q=Math.max(this.swimBlend,this.underSwim,this.diveBlend),X=g||R?1+2.2*ct((O-.5)/.9):1,ot=this.cling?.6:1,nt=this.cling?1:1-.16*this.fear*(1-Q),lt=this.cling||g||R?0:Math.max(0,1-2.2*Q),Z=(72+70*Q+120*lt)*I*X*ot*nt,kt=(21+13*Q+16*lt)*I*(this.cling?.55:1);D.copy(this._ax).multiplyScalar(Z*Math.min(O,1.4)).addScaledVector(e.angVel,-kt);let vt=D.length(),Et=(130+110*Q+130*lt)*I*X;vt>Et&&D.multiplyScalar(Et/vt)}let B=Math.max(this.swimBlend,g?1:0,R&&_>.1?this.underSwim:0,!this.cling&&!R&&!g?.85*Math.max(0,1-2.2*this.swimBlend):0);B>.02&&D.addScaledVector(e.hydroTorque,-B*Math.min(1,I*1.5)),this.swimBlend>.2&&(this._ax.set(0,1,0).applyQuaternion(e.quat),D.addScaledVector(this._ax,(20+22*this.crawlBlend)*this.swimBlend*I*Math.sin(this.strokePhase)))}};var sa=class{constructor(){this.reset(),this.events=[]}reset(){this.oxygen=100,this.stamina=100,this.temp=37,this.fatigue=0,this.blackout=0,this.drown=0,this.coldBlack=0,this.spent=!1,this.spentK=0,this.windTold=!1,this.alive=!0,this.cause="",this.timeAlive=0,this.breathPhase=0,this.lung=.6,this.breathRate=.3,this.exertion=0,this.gaspTimer=0,this.submergedTime=0,this.wasUnder=!1,this.swallow=0,this.eff=1,this.condition=1,this.shiver=0,this.inhaling=!1,this.lungAtDive=.6}update(t,e){if(!this.alive)return;this.timeAlive+=t;let i=e.mouthUnder,n=e.effort;if(this.exertion+=(ct(n*.6+(100-this.stamina)/160+(100-this.oxygen)/120)-this.exertion)*(1-Math.exp(-t*.8)),i)this.submergedTime+=t,this.oxygen-=t*(2.3+2.4*n+1.5*e.turb)*(1+.5*this.swallow)*(1.3-.45*this.lungAtDive),this.wasUnder||(this.inhaling&&e.sudden&&(this.swallow=Math.min(1,this.swallow+.45),this.oxygen-=6),this.lungAtDive=this.lung,this.events.push({type:"submerge",lung:this.lung})),this.lung=Math.max(.12,this.lung-t*(.025+.03*n));else{if(this.wasUnder){let x=ct((100-this.oxygen)/60+this.submergedTime/12);this.gaspTimer=1.5+5.5*x,this.events.push({type:"surface",need:x,time:this.submergedTime}),this.breathPhase=0,this.submergedTime=0}let d=this.gaspTimer>0?1:0;this.gaspTimer=Math.max(0,this.gaspTimer-t),this.oxygen+=t*(15+13*d)*(1-.6*this.swallow),this.swallow=Math.max(0,this.swallow-t*.12);let f=dt(.26,.95,ct(this.exertion*.9+d*.55));this.breathRate+=(f-this.breathRate)*(1-Math.exp(-t*1.4));let g=this.stamina<25?1+.35*Math.sin(this.timeAlive*2.7)*Math.sin(this.timeAlive*1.3):1,b=this.breathPhase;this.breathPhase+=t*this.breathRate*g,this.breathPhase>=1&&(this.breathPhase-=1);let m=this.breathPhase<.4;m&&!this.inhaling&&this.events.push({type:"inhale",strength:ct(.25+this.exertion*.8+d*.6),gasp:d>0&&b>this.breathPhase?1:d}),!m&&this.inhaling&&this.events.push({type:"exhale",strength:ct(.2+this.exertion*.7+d*.4),cough:this.swallow>.25?1:0}),this.inhaling=m;let p=dt(.45,.95,ct(this.exertion+d)),v=m?.45+.5*p*(this.breathPhase/.4):.95*p-(.95*p-.4)*((this.breathPhase-.4)/.6)+0;this.lung+=(Ri(v,.3,1)-this.lung)*(1-Math.exp(-t*9)),e.brace>.5&&(this.lung+=(1-this.lung)*(1-Math.exp(-t*5)))}this.wasUnder=i,this.oxygen=Ri(this.oxygen,0,100);let s=_e(36,32.5,this.temp),r=1-ct((36-this.temp)/3.5),o=100-this.fatigue*.62,h=this.spent?0:n>.62?(n-.62)*4:0,c=i?0:n<=.62?Math.max(.6,3.4-n*4.2)*(.45+.55*r)*(1-this.fatigue/170):0;this.spent&&(c=3.3),this.stamina=Ri(this.stamina+(c-h)*t,0,o),!this.spent&&this.stamina<=.5&&(this.spent=!0,this.events.push({type:"spent"})),!this.windTold&&this.stamina<30?(this.windTold=!0,this.events.push({type:"winded"})):this.spent&&this.stamina>=Math.min(10,o*.9)&&(this.spent=!1),this.spentK+=((this.spent?1:0)-this.spentK)*(1-Math.exp(-t*(this.spent?3.5:1.5))),this.fatigue=Ri(this.fatigue+t*(.035+.16*n),0,100);let u=.0042*(1+.45*n)*(.6+.4*e.subFrac)*(1+.3*e.storm);this.temp-=u*t,this.shiver=ct((36.2-this.temp)/1.6)*(1-ct((33-this.temp)/1.5));let l=this.drown;this.oxygen<=.01&&i||this.drown>=.3?this.drown=Math.min(1,this.drown+t/8.5):this.drown=Math.max(0,this.drown-t/2.5),l<.3&&this.drown>=.3&&this.events.push({type:"drown",phase:"convulse"}),l<.68&&this.drown>=.68&&this.events.push({type:"drown",phase:"limp"}),this.temp<31.5?this.coldBlack=Math.min(1,this.coldBlack+t/40):this.coldBlack=Math.max(0,this.coldBlack-t/3.5),this.blackout=ct(Math.max(this.coldBlack,(this.drown-.62)/.38)),(this.drown>=1||this.coldBlack>=1)&&(this.alive=!1,this.cause=this.drown>=1?"drown":"cold",this.events.push({type:"dead",cause:this.cause})),this.eff=dt(.32,1,_e(0,38,this.stamina))*(.45+.55*r)*(1-.6*this.blackout)*(1-.95*this.spentK),this.condition=ct(Math.min(this.oxygen/100+.25,1)*(.4+.6*this.stamina/100)*(.35+.65*r)*(1-this.blackout))}};var os=di.length,ra=Math.PI*2,Kd=new M(0,-1,0),Nn=["hang","float","tread","paddle","swim","dive","under","rise","struggle","tumble","recover","exhaust","brace","flail","aboard","cling","drown"],sx={hang:.45,float:1.2,tread:1.5,paddle:1.35,swim:1.8,dive:1.5,under:1.5,rise:2.3,struggle:2.4,tumble:.45,recover:1.5,exhaust:.7,brace:.85,flail:2.8,aboard:.5,cling:.9,drown:1};function $(a,t,e,i,n){let s=t*3;a[s]=e,a[s+1]=i,a[s+2]=n}var Ic=(a,t,e)=>Math.exp(-Math.pow((a-t)/e,2)),fi=a=>(a=ct(a),a*a*(3-2*a)),po=a=>(a%ra+ra)%ra/ra;function ax(a,t,e,i){let n=e;$(a,S.spine,.05+.04*Math.sin(t*2)*n,.05*Math.sin(t)*n,.04*Math.sin(t+.6)*n),$(a,S.chest,-.05,-.06*Math.sin(t)*n,0),$(a,S.neck,-.14,0,0),$(a,S.head,-.22-.04*Math.sin(t*2)*n,0,0);for(let s of[1,-1]){let r=s>0,o=r?0:.55,h=Math.sin(t+o),c=Math.cos(t+o);$(a,r?S.upperArmL:S.upperArmR,-.34+.1*c*n,-s*.34*h*n,s*dt(1.4,.95,i)),$(a,r?S.foreArmL:S.foreArmR,dt(-.42,-.8,i)-.24*c*n,0,0),$(a,r?S.handL:S.handR,.32*h*n,0,s*.2*c*n);let u=t+(r?0:Math.PI);$(a,r?S.thighL:S.thighR,dt(-.92,-.38,i)+.22*Math.sin(u)*n,s*.28*Math.cos(u)*n,s*(dt(.5,.24,i)+.12*Math.cos(u)*n)),$(a,r?S.shinL:S.shinR,dt(1.42,.62,i)+.46*Math.sin(u-1.2)*n,0,0),$(a,r?S.footL:S.footR,.22+.3*Math.sin(u-1.8)*n,0,0)}}function rx(a,t){let e=po(t),i,n,s;if(e<.22)i=-2.25,n=.1,s=-.1;else if(e<.55){let l=fi((e-.22)/.33);i=dt(-2.25,-1.25,l),n=dt(.1,.95,l),s=dt(-.1,-1.35,l)}else if(e<.72){let l=fi((e-.55)/.17);i=dt(-1.25,-.8,l),n=dt(.95,.28,l),s=dt(-1.35,-2.1,l)}else{let l=fi((e-.72)/.28);i=dt(-.8,-2.25,l),n=dt(.28,.1,l),s=dt(-2.1,-.1,l)}let r,o,h,c;if(e<.5)r=.06,o=.07,h=.1,c=.75;else if(e<.74){let l=fi((e-.5)/.24);r=dt(.06,-.78,l),o=dt(.07,.46,l),h=dt(.1,1.9,l),c=dt(.75,-.15,l)}else if(e<.88){let l=fi((e-.74)/.14);r=dt(-.78,-.18,l),o=dt(.46,.5,l),h=dt(1.9,.3,l),c=dt(-.15,.3,l)}else{let l=fi((e-.88)/.12);r=dt(-.18,.06,l),o=dt(.5,.07,l),h=dt(.3,.1,l),c=dt(.3,.75,l)}let u=Ic(e,.5,.14);$(a,S.spine,-.08-.06*u,0,0),$(a,S.chest,-.1-.06*u,0,0),$(a,S.neck,-.28,0,0),$(a,S.head,-.36-.05*u,0,0);for(let l of[1,-1]){let d=l>0;$(a,d?S.upperArmL:S.upperArmR,i,0,l*n),$(a,d?S.foreArmL:S.foreArmR,s,0,0),$(a,d?S.handL:S.handR,.12,0,0),$(a,d?S.thighL:S.thighR,r,0,l*o),$(a,d?S.shinL:S.shinR,h,0,0),$(a,d?S.footL:S.footR,c,0,0)}}function ox(a,t){let e=Math.sin(t),i=Math.sin(t*2);$(a,S.spine,-.1+.06*i,.2*e,.08*e),$(a,S.chest,-.12,.36*e,.1*e),$(a,S.neck,-.36,-.24*e,-.03*e),$(a,S.head,-.4+.04*i,-.24*e,-.04*e);for(let n of[1,-1]){let s=n>0,r=po(t+(s?0:Math.PI)),o,h,c,u;if(r<.1){let f=fi(r/.1);o=dt(-2.16,-2.4,f),h=dt(-.34,-.1,f),c=.16,u=.14}else if(r<.24){let f=fi((r-.1)/.14);o=dt(-2.4,-2.12,f),h=dt(-.1,-.95,f),c=dt(.16,.24,f),u=dt(.14,.34,f)}else if(r<.44){let f=fi((r-.24)/.2);o=dt(-2.12,-.95,f),h=dt(-.95,-1.45,Math.sin(f*Math.PI*.5))+.25*f*f,c=dt(.24,.1,f),u=.34}else if(r<.58){let f=fi((r-.44)/.14);o=dt(-.95,.3,f),h=dt(-1.2,-.22,f),c=dt(.1,.22,f),u=dt(.34,-.1,f)}else{let f=(r-.58)/.42,g=f*f*(1.6-.6*f),b=Math.sin(Math.pow(f,.85)*Math.PI);o=dt(.3,Math.PI*2-2.16,g),h=-.22-.62*Math.pow(b,.9),c=.22+.36*b,u=-.2*b}$(a,s?S.upperArmL:S.upperArmR,o,0,n*c),$(a,s?S.foreArmL:S.foreArmR,h,0,0),$(a,s?S.handL:S.handR,u,0,0);let l=t*3+(s?0:Math.PI),d=Math.sin(l);$(a,s?S.thighL:S.thighR,.05+.21*d,0,n*.05),$(a,s?S.shinL:S.shinR,.1+.5*Math.max(0,Math.sin(l+1.1)),0,0),$(a,s?S.footL:S.footR,.8+.12*Math.sin(l+2),0,0)}}function jd(a,t,e){let i=po(t),n=Math.sin(i*ra-1.2);$(a,S.spine,-.05+.09*n+.42*e,0,0),$(a,S.chest,-.06-.07*n+.3*e,0,0),$(a,S.neck,-.2+.42*e,0,0),$(a,S.head,-.3+.05*n+.45*e,0,0);let s,r,o;if(i<.36){let u=i/.36,l=fi(u);s=dt(-(Math.PI*.94),-.2,l),r=.14+.92*Math.sin(u*Math.PI),o=-.4*Math.sin(u*Math.PI)}else if(i<.52)s=-.2,r=.14,o=-.05;else{let u=(i-.52)/.48,l=fi(u);s=dt(-.2,-(Math.PI*.94),l),r=.14+.1*Math.sin(u*Math.PI),o=-1.85*Math.sin(u*Math.PI)}s=dt(s,-2.75,e),r=dt(r,.12,e),o=dt(o,-.1,e);let h=Ic(i,.62,.1),c=Ic(i,.78,.07);for(let u of[1,-1]){let l=u>0;$(a,l?S.upperArmL:S.upperArmR,s,0,u*r),$(a,l?S.foreArmL:S.foreArmR,o,0,0),$(a,l?S.handL:S.handR,0,0,0),$(a,l?S.thighL:S.thighR,dt(-.08-.62*h+.14*c,-1,e),0,u*(.07+.42*h*(1-e))),$(a,l?S.shinL:S.shinR,dt(.12+1.35*h,.1,e),0,0),$(a,l?S.footL:S.footR,.75-.5*h*(1-e),0,0)}}function hx(a,t,e,i){let n=(s,r)=>(ei(e*r,s)-.5)*i;$(a,S.spine,-.08,.06*Math.sin(t),.05*Math.sin(t*.7)*i),$(a,S.chest,-.12,.1*Math.sin(t),0),$(a,S.neck,-.34,.1*Math.sin(t*.37)*i,0),$(a,S.head,-.42+n(1,1.3)*.12,.16*Math.sin(t*.37+.6)*i,0);for(let s of[1,-1]){let r=s>0,o=t+(r?0:Math.PI),h=.5+.5*Math.sin(o),c=Math.max(0,-Math.cos(o)),u=Math.max(0,Math.cos(o));$(a,r?S.upperArmL:S.upperArmR,dt(-.55,-2.8,h)+n(r?5:7,1.1)*.3,s*.1*Math.cos(o)*i,s*(.22+.24*(1-h)+.1*i)),$(a,r?S.foreArmL:S.foreArmR,-.25-.45*c-1.05*u,0,0),$(a,r?S.handL:S.handR,.35*c,0,s*.1);let l=t*2+(r?0:Math.PI)+n(r?11:13,.8)*1.2;$(a,r?S.thighL:S.thighR,-.14+.44*Math.sin(l),0,s*(.1+.08*i)),$(a,r?S.shinL:S.shinR,.26+.58*Math.max(0,Math.sin(l+.9)),0,0),$(a,r?S.footL:S.footR,.72,0,0)}}function cx(a,t,e){let i=1-_e(.24,.34,e),n=_e(.62,.74,e),s=Math.max(0,1-i-n),r=1-.65*_e(.46,.68,e),o=t*(11.5-4.5*_e(.4,.68,e)),h=(g,b)=>ei(t*b,g)-.5,c=Math.sin(o+2.2*h(3,1.7)),u=Math.sign(c)*Math.pow(Math.abs(c),.45)*r,l=Math.sin(o*.63+1.3+3*h(5,1.1))*r,d=t*13,f=Math.sin(t*.7);$(a,S.spine,i*-.1+s*(.1+.46*u)+n*.24,s*.34*l+n*.03*f,s*.16*l),$(a,S.chest,i*-.14+s*(.05+.36*u)+n*.16,s*.26*l,s*.1*u),$(a,S.neck,i*-.36+s*(-.05+.42*u)+n*.34,s*.3*l,0),$(a,S.head,i*(-.46+.1*Math.sin(d*.5))+s*(-.1+.5*u)+n*.36,s*.34*Math.sin(o*1.31+.7)*r,n*.1+s*.12*l);for(let g of[1,-1]){let b=g>0,m=d+(b?0:Math.PI),p=.5+.5*Math.sin(m),v=Math.max(0,Math.sin(o*1.7+(b?0:2.1)+4*h(b?9:11,2.3)))*r;$(a,b?S.upperArmL:S.upperArmR,i*dt(-.6,-2.85,p)+s*(-.72-.3*v+.2*u)+n*-.8,s*g*.45,g*(i*(.25+.2*(1-p))+s*(.04+.22*v)+n*.55)),$(a,b?S.foreArmL:S.foreArmR,i*(-.3-.9*(1-p))+s*(-2.3+.55*v)+n*-.5,0,0),$(a,b?S.handL:S.handR,s*.3+n*.25,0,g*(.1+.15*n));let x=d*1.3+(b?0:Math.PI);$(a,b?S.thighL:S.thighR,i*(-.15+.5*Math.sin(x))+s*(-.2-.85*v+.25*u)+n*-.22,0,g*(.1+s*.12*v+n*.08)),$(a,b?S.shinL:S.shinR,i*(.3+.6*Math.max(0,Math.sin(x+.9)))+s*(.35+1.25*v)+n*.55,0,0),$(a,b?S.footL:S.footR,i*.7+s*(.5+.3*v)+n*.55,0,0)}}function lx(a,t,e,i=0){let n=Math.sin(t),s=Math.sin(t*2);$(a,S.spine,.06+.07*s*e,.15*n*e,.09*n*e),$(a,S.chest,-.02,.17*n*e,.05*n*e),$(a,S.neck,-.1,-.2*n*e,0),$(a,S.head,-.14-.06*s*e,-.16*n*e,.04*n*e);for(let r of[1,-1]){let o=r>0,h=po(t+(o?0:Math.PI)),c,u,l,d,f=dt(-1.5,-2.45,e)-.12*i,g=dt(.4,-.1,i),b=dt(-.5,-.3,i);if(h<.3){let v=fi(h/.3);c=dt(-.4,f,v),u=dt(-1.8,b,v),l=dt(.26,g,v),d=dt(.1,-.25,v)}else if(h<.42){let v=(h-.3)/.12,x=v*v;c=dt(f,-1.42,x),u=dt(b,-.2,x),l=g,d=dt(-.25,.2,x)}else if(h<.8){let v=fi((h-.42)/.38);c=dt(-1.42,-.08,v),u=-.2-.8*Math.sin(v*Math.PI)-.1*v,l=dt(g,.2,v),d=.3}else{let v=fi((h-.8)/.2);c=dt(-.08,-.4,v),u=dt(-.3,-1.8,v),l=dt(.2,.26,v),d=dt(.3,.1,v)}$(a,o?S.upperArmL:S.upperArmR,c,0,r*l),$(a,o?S.foreArmL:S.foreArmR,u,0,0),$(a,o?S.handL:S.handR,d,0,0);let m=t*1.5+(o?0:Math.PI),p=Math.sin(m);$(a,o?S.thighL:S.thighR,-.2+.44*p*e,0,r*.1),$(a,o?S.shinL:S.shinR,.38+.5*Math.max(0,Math.sin(m-1))*e,0,0),$(a,o?S.footL:S.footR,.6+.12*p,0,0)}}function ux(a,t,e){let i=(o,h)=>ei(e*h,o)-.5,n=Math.sin(t),s=Math.max(0,n),r=Math.max(0,-n);$(a,S.spine,-.1-.06*s,.07*Math.sin(t*.5),.05*Math.sin(t*.7)),$(a,S.chest,-.12-.04*s,.05*Math.sin(t*.5+.8),0),$(a,S.neck,-.3,.1*Math.sin(t*.37),0),$(a,S.head,-.4+.08*r+i(1,1.3)*.1,.16*Math.sin(t*.37+.6),.05*Math.sin(t*.53));for(let o of[1,-1]){let h=o>0,c=h?0:.45,u=Math.sin(t+c),l=Math.max(0,u),d=Math.max(0,-u);$(a,h?S.upperArmL:S.upperArmR,-.24+.18*u+i(h?3:4,1.7)*.2,o*.14*Math.cos(t+c),o*(1.24-.56*(.5+.5*u))),$(a,h?S.foreArmL:S.foreArmR,-.26-.42*d,0,0),$(a,h?S.handL:S.handR,.42*l,0,o*.1);let f=t*.6+(h?0:2.1);$(a,h?S.thighL:S.thighR,-.24+.18*Math.sin(f),0,o*.16),$(a,h?S.shinL:S.shinR,.46+.26*Math.sin(f+1),0,0),$(a,h?S.footL:S.footR,.55,0,0)}}function dx(a,t){let e=Math.sin(t),i=Math.sin(t*.5+1),n=Math.max(0,Math.sin(t*.31-.4));$(a,S.spine,.14,.05*e,.04*i),$(a,S.chest,.16,.04*e,0),$(a,S.neck,.2+.1*i-.5*n,.06*e,0),$(a,S.head,.16+.16*i-.46*n,.08*e,.05*i);for(let s of[1,-1]){let r=s>0;$(a,r?S.upperArmL:S.upperArmR,-.25,-s*.2,s*1.15),$(a,r?S.foreArmL:S.foreArmR,-1.45,0,0),$(a,r?S.handL:S.handR,.45,0,-s*.2),$(a,r?S.thighL:S.thighR,(r?-.3:-.14)+.1*Math.sin(t+(r?0:1.3)),0,s*.05),$(a,r?S.shinL:S.shinR,(r?.52:.3)+.14*Math.sin(t+(r?.8:2.2)),0,0),$(a,r?S.footL:S.footR,.8,0,0)}}function fx(a,t,e,i){let n=Math.sin(t),s=1-i,r=(ei(e*.33,31)-.5)*s,o=.5+.5*Math.sin(e*.47+1.3*Math.sin(e*.21));$(a,S.spine,-.06*s+.14*i+.02*n,.04,.05),$(a,S.chest,-.08*s+.12*i+.02*n,.1,.04),$(a,S.neck,(-.24-.14*o)*s+.26*i,-.16+.22*r,0),$(a,S.head,(-.28-.16*o)*s+.3*i,-.24+.34*r,-.1),$(a,S.upperArmL,.28,0,2.03),$(a,S.foreArmL,-1.12-.2*i,0,0),$(a,S.handL,.35,0,0),$(a,S.upperArmR,-2.62,.75,0),$(a,S.foreArmR,-.26-.5*i,0,0),$(a,S.handR,.3,0,0),$(a,S.thighL,-.75-.25*i,0,.55),$(a,S.shinL,1.3+.25*i,0,0),$(a,S.footL,.55,0,0),$(a,S.thighR,.1-.25*i,0,-.42),$(a,S.shinR,.32+.45*i,0,0),$(a,S.footR,.8,0,0)}function px(a,t,e){let i=Math.sin(t),n=Math.sin(t*.5+.7);$(a,S.spine,.1+.03*i,0,.03*n),$(a,S.chest,.04,0,0),$(a,S.neck,-.2+.06*n,0,0),$(a,S.head,-.3+.08*n,0,0);for(let s of[1,-1]){let r=s>0,o=t+(r?0:Math.PI);$(a,r?S.upperArmL:S.upperArmR,-2.05,0,s*.32),$(a,r?S.foreArmL:S.foreArmR,-.75,0,0),$(a,r?S.handL:S.handR,.3,0,0),$(a,r?S.thighL:S.thighR,-.22+.2*Math.sin(o),0,s*.12),$(a,r?S.shinL:S.shinR,.5+.26*Math.sin(o-1.1),0,0),$(a,r?S.footL:S.footR,.55,0,0)}}function mx(a,t){let e=(i,n)=>ei(t*n,i)-.5;$(a,S.spine,.2+e(1,.7)*.34,e(2,.6)*.3,e(3,.5)*.22),$(a,S.chest,.14+e(4,.8)*.26,e(5,.6)*.26,0),$(a,S.neck,.16+e(6,.9)*.3,e(7,.7)*.36,0),$(a,S.head,.1+e(8,1)*.3,e(9,.8)*.4,e(10,.6)*.18);for(let i of[1,-1]){let n=i>0,s=n?20:40;$(a,n?S.upperArmL:S.upperArmR,-.7+e(s,.9)*1.3,i*e(s+1,.7)*.6,i*(.8+e(s+2,.8)*.7)),$(a,n?S.foreArmL:S.foreArmR,-.85+e(s+3,1.1)*1,0,0),$(a,n?S.handL:S.handR,e(s+4,1.3)*.6,0,e(s+5,1.2)*.4),$(a,n?S.thighL:S.thighR,-.6+e(s+6,.8)*1,0,i*(.24+e(s+7,.7)*.36)),$(a,n?S.shinL:S.shinR,.95+e(s+8,1)*.9,0,0),$(a,n?S.footL:S.footR,.5+e(s+9,1.1)*.4,0,0)}}function gx(a,t,e){$(a,S.spine,-.08-.08*e,0,0),$(a,S.chest,-.1-.1*e,0,0),$(a,S.neck,-.26,0,0),$(a,S.head,-.4-.05*e,0,0);for(let i of[1,-1]){let n=i>0,s=Math.sin(t+(n?0:.5));$(a,n?S.upperArmL:S.upperArmR,-.3+.12*s,-i*.3*s,i*(1.05+.1*e)),$(a,n?S.foreArmL:S.foreArmR,-.6-.25*s,0,0),$(a,n?S.handL:S.handR,.25*s,0,0);let r=t+(n?0:Math.PI);$(a,n?S.thighL:S.thighR,-.7+.26*Math.sin(r),i*.2*Math.cos(r),i*.4),$(a,n?S.shinL:S.shinR,1.15+.4*Math.sin(r-1.1),0,0),$(a,n?S.footL:S.footR,.35,0,0)}}function bx(a,t){let e=Math.sin(t*.5);$(a,S.spine,-.06,0,.04*e),$(a,S.chest,-.1,0,0),$(a,S.neck,-.28,.12*e,0),$(a,S.head,-.42,.1*e,.08*e);for(let i of[1,-1]){let n=i>0;$(a,n?S.upperArmL:S.upperArmR,-.18+.08*e,i*.12*e,i*1.02),$(a,n?S.foreArmL:S.foreArmR,-.55-.12*e,0,0),$(a,n?S.handL:S.handR,.15,0,0),$(a,n?S.thighL:S.thighR,-.14+.09*Math.sin(t*.5+(n?0:2)),0,i*.14),$(a,n?S.shinL:S.shinR,.28+.12*Math.sin(t*.5+(n?1:3)),0,0),$(a,n?S.footL:S.footR,.6,0,0)}}function vx(a,t){let e=Math.sin(t*1.4);$(a,S.spine,.3,.22,0),$(a,S.chest,.22,.2,0),$(a,S.neck,.28,.22,0),$(a,S.head,.3,.28,.1),$(a,S.upperArmL,-1.35,-.55,.3),$(a,S.foreArmL,-1.55,0,0),$(a,S.handL,.2,0,0),$(a,S.upperArmR,-1.6,.35,-.45),$(a,S.foreArmR,-1.75,0,0),$(a,S.handR,.2,0,0),$(a,S.thighL,-.85+.12*e,0,.18),$(a,S.shinL,1.25-.15*e,0,0),$(a,S.footL,.4,0,0),$(a,S.thighR,-.7-.12*e,0,-.18),$(a,S.shinR,1.15+.15*e,0,0),$(a,S.footR,.4,0,0)}function xx(a,t,e){let i=(n,s)=>ei(e*s,n)-.5;$(a,S.spine,.05+.18*Math.sin(t*.9),.22*Math.sin(t*.5+1),.12*Math.sin(t*.7)),$(a,S.chest,-.04+.13*Math.sin(t*.9+.6),.22*Math.sin(t*.5+1.4),0),$(a,S.neck,-.12+i(1,1.5)*.26,i(2,1.3)*.36,0),$(a,S.head,-.2+i(3,1.7)*.3,i(4,1.4)*.4,i(5,1.1)*.16);for(let n of[1,-1]){let s=n>0,r=t*(s?1:1.17)+(s?0:2.1),o=s?60:80;$(a,s?S.upperArmL:S.upperArmR,-1.5+1.05*Math.sin(r)+i(o,1.9)*.4,n*(.15+.35*Math.cos(r*.9)),n*(.65+.4*Math.sin(r*1.3+1))),$(a,s?S.foreArmL:S.foreArmR,-.7-.6*Math.sin(r+1.2),0,0),$(a,s?S.handL:S.handR,.5*Math.sin(r*2),0,n*.2*Math.sin(r*1.7));let h=t*1.25+(s?0:Math.PI)+i(o+5,.9)*1.2;$(a,s?S.thighL:S.thighR,-.55+.7*Math.sin(h),0,n*(.22+.16*Math.sin(h*.7))),$(a,s?S.shinL:S.shinR,Math.max(.05,.95+.75*Math.sin(h-1.3)),0,0),$(a,s?S.footL:S.footR,.4+.3*Math.sin(h),0,0)}}var yx=[[S.spine,-.18,.52,.25,-.2,.2],[S.chest,-.16,.38,.25,-.18,.18],[S.neck,-.4,.42,.36,-.22,.22],[S.head,-.45,.42,.5,-.22,.22],[S.foreArmL,-2.2,.02,.12,-.04,.04],[S.foreArmR,-2.2,.02,.12,-.04,.04],[S.handL,-.6,.6,.2,-.3,.3],[S.handR,-.6,.6,.2,-.3,.3],[S.shinL,0,2.2,.04,-.04,.04],[S.shinR,0,2.2,.04,-.04,.04],[S.footL,-.35,.95,.25,-.25,.25],[S.footR,-.35,.95,.25,-.25,.25]],kc=new Array(os).fill(null);for(let a of yx)kc[a[0]]=a;var Yd=new gi(0,0,0,"YXZ");function _x(a,t){let e=Yd.setFromQuaternion(a,"YXZ"),i=e.x,n=e.y,s=e.z,r=!1;i<t[1]?(i=t[1],r=!0):i>t[2]&&(i=t[2],r=!0),n<-t[3]?(n=-t[3],r=!0):n>t[3]&&(n=t[3],r=!0),s<t[4]?(s=t[4],r=!0):s>t[5]&&(s=t[5],r=!0),r&&a.setFromEuler(Yd.set(i,n,s,"YXZ"))}var wx=new M,Mx=new _t,Ex=new M;function Tx(a,t,e){let i=wx.set(0,-1,0).applyQuaternion(a),n=Ex.copy(i),s=i.x*t,r=s,o=i.y,h=i.z;if(e)h<-.42&&(h=-.42),r<-.22?r=-.22:r>.8&&(r=.8),o>.45&&(o=.45),h<0&&o>-.35&&(o=-.35);else{let c=-.5-.34*Math.max(0,Math.min(1,r*1.6));h<c&&(h=c),h<.15&&r<-.05&&(r=-.05),r<-.62&&(r=-.62),h<-.2&&o>.55&&(o=.55)}r===s&&o===i.y&&h===i.z||(i.set(r*t,o,h),!(i.lengthSq()<1e-6)&&(i.normalize(),a.premultiply(Mx.setFromUnitVectors(n,i))))}var aa=new _t,Qd=new _t;function Sx(a,t){let e=Math.hypot(a.y,a.w);if(e<.22)return;aa.set(0,a.y/e,0,a.w/e);let i=2*Math.atan2(aa.y,aa.w);if(i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),Math.abs(i)<=t)return;Qd.copy(a).multiply(aa.invert());let n=Math.sign(i)*t*.5;aa.set(0,Math.sin(n),0,Math.cos(n)),a.copy(Qd).multiply(aa)}var Ax=new _t().setFromAxisAngle(new M(0,0,1),Math.PI/2),Rx=new _t().setFromAxisAngle(new M(0,0,1),-Math.PI/2),Cx=new M,Fc=new M,Dc=new _t,ja=new _t;function zc(a,t){let e=Cx.set(0,-1,0).applyQuaternion(a);if(Fc.set(t,0,0),e.dot(Fc)<-.9)return null;Dc.setFromUnitVectors(Fc,e).multiply(t>0?Ax:Rx),ja.copy(Dc).invert().multiply(a);let i=2*Math.atan2(ja.y,ja.w);return i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),i}var Uc={1:1,"-1":1};{let a=new gi(-2.5,0,.15,"YXZ"),t=new _t().setFromEuler(a);Uc[1]=Math.sign(zc(t,1))||1,t.setFromEuler(a.set(-2.5,0,-.15,"YXZ")),Uc[-1]=Math.sign(zc(t,-1))||1}function Px(a,t,e){let i=zc(a,t);if(i===null||Math.abs(i)<=e)return;let n=Math.sign(i)*e,s=Uc[t]*e,r=_e(1.75,2.8,Math.abs(i)),o=(n+(s-n)*r)*.5;ja.set(0,Math.sin(o),0,Math.cos(o)),a.copy(Dc).multiply(ja)}var oa=class{constructor(t,e,i,n){this.ch=t,this.body=e,this.player=i,this.sv=n,this.tmp=new Float32Array(os*3),this.add=new Float32Array(os*3),this.acc=new Float32Array(os*4),this.ref=new Float32Array(os*4),this.w={},this.wt={};for(let s of Nn)this.w[s]=0,this.wt[s]=0;this.w.tread=1,this.phase=0,this.time=0,this.tumbleT=0,this.state="tread",this.splashiness=0,this.gaspKick=0,this.coughKick=0,this.force=null,this.forcePhase=void 0,this.hold=null,this.flinch=0,this.flinchSide=1,this.ride={lift:0,side:0,fore:0,slam:0},this.reach=[{pos:new M,on:0,w:0},{pos:new M,on:0,w:0}],this._ik={fix2:new M,qs:new _t,S:new M,qp:new _t,qu:new _t,qf:new _t,a:new M,n:new M,w:new M,fix:new _t,x:new M(1,0,0)},this._e=new gi(0,0,0,"YXZ"),this._q=new _t,this._q2=new _t,this._q3=new _t,this._qa=new _t,this._u=new M,this._wb=new M,this._d=new M,this._qi=new _t,this._flow=new M,this._wLag=new M,this._pv=new M,this._acc=new M,this._a=new M,this._hasPv=!1}_reach(t,e,i,n,s,r){let o=this.ch.bones,h=this._ik,c=o[t],u=o[e],l=o[i],d=u.position,f=l.position;h.S.setFromMatrixPosition(c.matrixWorld),c.parent.getWorldQuaternion(h.qp);let g=d.length()+f.length()-.004,b=Math.max(.16,Math.min(g,h.n.copy(n).sub(h.S).length())),m=.02,p=2.3;for(let v=0;v<14;v++){let x=(m+p)*.5;h.qf.setFromAxisAngle(h.x,-x),h.w.copy(f).applyQuaternion(h.qf).add(d).length()>b?m=x:p=x}if(h.qf.setFromAxisAngle(h.x,-(m+p)*.5),h.w.copy(f).applyQuaternion(h.qf).add(d),h.qu.copy(h.qp).multiply(c.quaternion),h.a.copy(h.w).applyQuaternion(h.qu).normalize(),h.n.normalize(),h.fix.setFromUnitVectors(h.a,h.n),h.qu.premultiply(h.fix),r){let v=h.w.copy(d).applyQuaternion(h.qu);v.addScaledVector(h.n,-v.dot(h.n));let x=h.a.copy(r).sub(h.S);if(x.addScaledVector(h.n,-x.dot(h.n)),v.lengthSq()>1e-8&&x.lengthSq()>1e-8){v.normalize(),x.normalize();let w=Math.atan2(h.fix2.crossVectors(v,x).dot(h.n),v.dot(x));h.qs.setFromAxisAngle(h.n,w),h.qu.premultiply(h.qs)}}h.qu.premultiply(h.qp.invert()),c.quaternion.slerp(h.qu,s),u.quaternion.slerp(h.qf,s)}_mix(t){let e=this.tmp,i=this.acc,n=this.ref,s=this._e,r=this._q,o=this._first;for(let h=0;h<os;h++){s.set(e[h*3],e[h*3+1],e[h*3+2],"YXZ"),r.setFromEuler(s);let c=h*4;o&&(n[c]=r.x,n[c+1]=r.y,n[c+2]=r.z,n[c+3]=r.w);let u=n[c]*r.x+n[c+1]*r.y+n[c+2]*r.z+n[c+3]*r.w<0?-t:t;i[c]+=r.x*u,i[c+1]+=r.y*u,i[c+2]+=r.z*u,i[c+3]+=r.w*u}this._first=!1}update(t){let e=this.player,i=this.body,n=this.sv,s=this.wt;this.time+=t;let r=n.alive?e.control*(1-.7*n.blackout):0,o=1-_e(.22,.78,r),h=Math.max(o,e.air||0),c=n.alive?ct(1-n.blackout*1.5):0,u=1-h,l=e.underSwim,d=e.diveBlend||0;s.flail=h*c*.8,s.tumble=h-s.flail,s.dive=u*d;let f=u*(1-d);s.under=f*l*e.moveAmt,s.rise=f*l*(1-e.moveAmt);let g=f*(1-l);s.swim=g*(e.crawlBlend||0),s.paddle=g*(1-(e.crawlBlend||0))*ct(e.swimBlend*2.2);let b=ct((s.swim+s.paddle)/Math.max(.001,g));s.brace=g*e.brace*(1-.7*b);let m=1-e.brace*(1-.7*b),p=Math.max(ct((38-n.oxygen)/26),ct((34-n.stamina)/28),ct(n.swallow*1.3),ct(e.impact-.7)*.8),v=g*(1-b);s.struggle=v*p*m,s.recover=v*ct(n.gaspTimer/3)*(1-p)*m;let x=1-_e(6,24,n.stamina);s.exhaust=v*x*(1-p)*m;let w=0;s.hang=0;for(let K of Nn)K!=="tread"&&K!=="float"&&(w+=s[K]);let R=Math.max(0,1-w),y=ct(e.effort*1.6),E=e.fear||0;s.float=R*.22*(1-y)*(1-E),s.tread=R-s.float,s.aboard=0,s.cling=0,s.drown=0;{let K=Math.max(ct(n.drown/.1),n.alive?.9*(n.spentK||0):n.cause==="drown"?1:0);if(K>.01&&!this.hold){for(let ut of Nn)s[ut]*=1-K;s.drown=K}}if(this.hold){let K=this.hold==="cling"?Math.min(1,s.tumble+s.flail)*.5:0;for(let ut of Nn)s[ut]=ut===this.hold?1-K:ut==="tumble"||ut==="flail"?s[ut]*(K>0?.5:0):0}if(this.force)for(let K of Nn)s[K]=K===this.force?1:0,this.w[K]=s[K];w=0;let A=0;for(let K of Nn)this.w[K]+=(s[K]-this.w[K])*(1-Math.exp(-t*((K==="tumble"||K==="flail")&&s[K]>this.w[K]?14:K==="brace"||K==="dive"||K==="cling"?7:K==="drown"?9:K==="aboard"?30:5))),w+=this.w[K],this.w[K]>A&&(A=this.w[K],this.state=K);let _=this.w,T=1/Math.max(1e-4,w),I=0;for(let K of Nn)I+=_[K]*sx[K];I+=_.tread*.3*y+_.struggle*.2*p+_.flail*(i.subFrac<.3?.8:0)+_.rise*.3*ct((60-n.oxygen)/50),I*=1+.42*E*(_.float+_.recover+_.exhaust+_.struggle)*T+.34*E*_.tread*T,I*=1+(.08+.22*E)*(ei(this.time*.6,77)-.5);let G=ra*I*T*(.72+.28*n.eff);this.phase+=G*t,this.forcePhase!==void 0&&(this.phase=this.forcePhase);let q=this.phase;e.strokePhase=q,e.struggleW=_.struggle*T;let U=Math.min(2.5,i.relSpeed*.25+i.angVel.length()*.22+i.turb);this.tumbleT+=t*(.8+1.6*U);let z=this.tmp,J=this.acc;J.fill(0),this._first=!0;let V=(K,ut)=>{K<=5e-4||(z.fill(0),ut(),this._mix(K*T))},H=Nn.slice().sort((K,ut)=>_[ut]-_[K]),N=this.force==="dive"?this.forcePike||0:ct(1-Math.abs((e.diveTime||9)-.32)/.42)*ct(1.4-Math.max(0,i.mouthDepth));for(let K of H)switch(K){case"hang":V(_.hang,()=>dx(z,q));break;case"float":V(_.float,()=>ax(z,q,.55,1));break;case"drown":V(_.drown,()=>cx(z,this.time,n.alive?n.drown>.01?n.drown:.86:1));break;case"tread":V(_.tread,()=>lx(z,q,ct(.42+.25*y+.62*E),e.fp?1:0));break;case"paddle":V(_.paddle,()=>rx(z,q));break;case"swim":V(_.swim,()=>ox(z,q));break;case"dive":V(_.dive,()=>jd(z,q,N));break;case"under":V(_.under,()=>jd(z,q,0));break;case"rise":V(_.rise,()=>hx(z,q,this.time,1));break;case"struggle":V(_.struggle,()=>ux(z,q,this.time));break;case"tumble":V(_.tumble,()=>mx(z,this.tumbleT));break;case"recover":V(_.recover,()=>gx(z,q,n.lung));break;case"exhaust":V(_.exhaust,()=>bx(z,q));break;case"brace":V(_.brace,()=>vx(z,q));break;case"aboard":V(_.aboard,()=>fx(z,q,this.time,ct((e.brace||0)*1.6-.5)));break;case"cling":V(_.cling,()=>px(z,q,this.time));break;default:V(_.flail,()=>xx(z,q,this.time));break}let P=this.add;P.fill(0);let W=u*(1-_.swim*T);P[S.chest*3]-=.18*(n.lung-.5)*W,P[S.spine*3]-=.08*(n.lung-.5)*W;{let K=ct(.4+.5*p+.4*(e.brace||0)+.3*y+.6*E)*u*(1-l)*(1-.8*_.swim*T),ut=this.time*(.45+.5*K+.9*E),yt=e.fp?0:1;P[S.head*3]-=.14*E*u*(1-l)*yt,P[S.neck*3]-=.06*E*u*(1-l)*yt,P[S.chest*3]-=.05*E*Math.sin(this.time*9.5)*u,P[S.spine*3+2]+=.07*E*(ei(this.time*1.7,55)-.5)*2*u;let zt=(ei(ut,91)-.5)*2;P[S.neck*3+1]+=.16*zt*K,P[S.head*3+1]+=.22*zt*K}if(this.gaspKick=Math.max(0,this.gaspKick-t*2.6),this.coughKick=Math.max(0,this.coughKick-t*4.5),this.gaspKick>.001){let K=this.gaspKick*this.gaspKick*W;P[S.head*3]-=.3*K,P[S.neck*3]-=.14*K,P[S.chest*3]-=.18*K,P[S.upperArmL*3+2]+=.16*K,P[S.upperArmR*3+2]-=.16*K}if(this.coughKick>.001){let K=Math.sin(this.coughKick*Math.PI)*W,ut=i.subFrac>.3&&_.aboard<.5?1:0;P[S.spine*3]+=(.3-.16*ut)*K,P[S.chest*3]+=(.22-.12*ut)*K,P[S.head*3]+=(.34-.42*ut)*K,P[S.neck*3]+=(.2-.24*ut)*K}if(_.aboard>.01){let K=this.ride,ut=_.aboard*T,yt=ct(K.lift),zt=this.time;P[S.thighR*3]+=(.16*yt+.12*yt*Math.sin(zt*11))*ut,P[S.shinR*3]+=(.5*yt+.2*yt*Math.sin(zt*13+1))*ut,P[S.thighL*3]+=(.16*yt*Math.sin(zt*9+2)+.1*yt)*ut,P[S.shinL*3]-=.25*yt*ut,P[S.thighR*3+2]-=.25*Math.max(0,-K.side)*ut,P[S.spine*3+2]+=.24*K.side*ut,P[S.chest*3+2]+=.12*K.side*ut,P[S.spine*3+1]+=.1*K.fore*ut,P[S.spine*3]+=(.26*K.slam-.1*yt)*ut,P[S.chest*3]+=.16*K.slam*ut,P[S.neck*3]+=(.3*K.slam+.12*yt)*ut,P[S.head*3]+=(.32*K.slam+.1*yt)*ut}if(this.flinch>.002){let K=this.flinch*this.flinch*u,ut=this.flinchSide;P[S.head*3+1]+=.55*K*ut,P[S.neck*3+1]+=.25*K*ut,P[S.head*3]+=.05*K,P[S.head*3+2]+=.18*K*ut,P[S.neck*3+2]+=.08*K*ut,P[S.upperArmL*3+2]+=.22*K,P[S.upperArmR*3+2]-=.22*K,P[(ut>0?S.upperArmR:S.upperArmL)*3]-=.55*K,P[(ut>0?S.foreArmR:S.foreArmL)*3]-=.6*K,this.flinch=Math.max(0,this.flinch-t*1.9)}if(n.shiver>.01){let K=n.shiver*.035;P[S.chest*3+1]+=Math.sin(this.time*61)*K,P[S.upperArmL*3]+=Math.sin(this.time*57+1)*K*1.5,P[S.upperArmR*3]+=Math.sin(this.time*59+2)*K*1.5,P[S.head*3+1]+=Math.sin(this.time*53)*K*.8}let k=this._qi.copy(i.quat).invert(),O=this.force?0:Math.max(.25+.75*(_.tumble+.45*_.flail)*T,.7*_.cling*T);i.subFrac<.15?this._u.copy(i.vel).multiplyScalar(-.3):this._u.copy(i.relFlow);let D=this._flow.lerp(this._u.applyQuaternion(k),1-Math.exp(-t*8)),B=D.length(),Y=this.force?0:ct(B/4.5)*O*.7;this._hasPv||(this._pv.copy(i.vel),this._hasPv=!0);let Q=this._a.copy(i.vel).sub(this._pv).multiplyScalar(1/Math.max(t,.001));this._pv.copy(i.vel),Q.lengthSq()>3600&&Q.setLength(60);let X=this._acc.lerp(Q.applyQuaternion(k),1-Math.exp(-t*9)),ot=X.length(),nt=this.force?0:ct(ot/38)*(.3+.5*O),lt=this._wLag.lerp(this._wb.copy(i.angVel).applyQuaternion(k),1-Math.exp(-t*10)),Z=lt.length(),kt=this.force?0:Math.min(.6,Z*.07)*(.35+.65*_.tumble*T),vt=null,Et=Math.min(.72,Y+nt);if(Et>.01){let K=this._d.copy(Kd).multiplyScalar(1-Et);B>.05&&K.addScaledVector(D,Et*Y/((Y+nt)*B)),ot>.05&&K.addScaledVector(X,-Et*nt/((Y+nt)*ot)),K.lengthSq()>1e-4&&(K.normalize(),vt=this._q2.setFromUnitVectors(Kd,K))}let xt=null;kt>.01&&(xt=this._q3.setFromAxisAngle(this._u.copy(lt).normalize(),-kt));let Ht=this.force?0:.4+.6*O,Pt=(K,ut)=>Math.max(-ut,Math.min(ut,K));P[S.spine*3]+=Pt(X.z*.01*Ht,.3),P[S.chest*3]+=Pt(X.z*.008*Ht,.24),P[S.spine*3+2]+=Pt(X.x*.008*Ht,.18),P[S.neck*3]+=Pt(X.z*.012*Ht,.3),P[S.neck*3+2]+=Pt(X.x*.008*Ht,.16);let L=Math.min(1,Z/5)*O;P[S.foreArmL*3]-=.45*L,P[S.foreArmR*3]-=.45*L,P[S.shinL*3]+=.4*L,P[S.shinR*3]+=.4*L;let C=this.ch.bones,et=this._e,ht=this._q,ft=this._qa,bt=1-Math.exp(-t*26);for(let K=0;K<os;K++){let ut=K*4;ht.set(J[ut],J[ut+1],J[ut+2],J[ut+3]),ht.lengthSq()<1e-8?ht.identity():ht.normalize();let yt=P[K*3],zt=P[K*3+1],mt=P[K*3+2];(yt!==0||zt!==0||mt!==0)&&ht.multiply(ft.setFromEuler(et.set(yt,zt,mt,"YXZ"))),K===S.upperArmL||K===S.upperArmR||K===S.thighL||K===S.thighR?(vt&&ht.premultiply(vt),xt&&ht.premultiply(xt),Tx(ht,K===S.upperArmL||K===S.thighL?1:-1,K===S.thighL||K===S.thighR),K===S.thighL||K===S.thighR?Sx(ht,.55):Px(ht,K===S.upperArmL?1:-1,1.15)):(K===S.head&&xt&&ht.premultiply(Lx.copy(Fx).slerp(xt,.4)),kc[K]&&_x(ht,kc[K])),C[K].quaternion.slerp(ht,bt)}{let K=this.reach,ut=!1;for(let yt=0;yt<2;yt++)K[yt].w+=(K[yt].on-K[yt].w)*(1-Math.exp(-t*(K[yt].on>K[yt].w?9:6))),K[yt].w>.005&&(ut=!0);if(ut){this.ch.group.updateMatrixWorld(!0);for(let yt=0;yt<2;yt++)K[yt].w>.005&&this._reach(yt===0?S.upperArmL:S.upperArmR,yt===0?S.foreArmL:S.foreArmR,yt===0?S.handL:S.handR,K[yt].pos,K[yt].w,K[yt].pole&&K[yt].usePole?K[yt].pole:null)}}let Lt=(_.tread*(.25+.4*y)+_.paddle*.5+_.swim*1+_.struggle*1+_.recover*.5+_.dive*.8)*T;this.splashiness+=(Lt*Math.min(1,i.subFrac*1.3)*(1-l)-this.splashiness)*(1-Math.exp(-t*3))}},Lx=new _t,Fx=new _t;var Ix=[[S.handL,0,-.09,.012,"hand"],[S.handR,0,-.09,.012,"hand"],[S.foreArmL,0,-.13,0,"arm"],[S.foreArmR,0,-.13,0,"arm"],[S.footL,0,-.04,.12,"foot"],[S.footR,0,-.04,.12,"foot"]],ha=class{constructor(t,e,i){this.waves=t,this.ch=e,this.body=i,this.tips=Ix.map(([n,s,r,o,h])=>({bone:n,off:new M(s,r,o),kind:h,p:new M,prev:new M,has:!1,was:!0,wet:0,cool:0})),this._s=ri(),this._v=new M,this._hd=new M,this.activity=0,this.onSlap=null,this.bowAcc=0,this.churnAcc=0}reset(){for(let t of this.tips)t.has=!1,t.wet=0;this.activity=0}update(t,e,i,n=!0){if(t<=0)return;let s=this.waves,r=this._s,o=this._v,h=0;e.near=!0;for(let u of this.tips){if(u.p.copy(u.off).applyMatrix4(this.ch.bones[u.bone].matrixWorld),!u.has){u.prev.copy(u.p),u.has=!0,s.sample(u.p.x,u.p.z,r),u.was=u.p.y<r.h;continue}if(o.copy(u.p).sub(u.prev).multiplyScalar(1/t),u.prev.copy(u.p),u.cool-=t,!n||o.lengthSq()>900){u.wet=0;continue}s.sample(u.p.x,u.p.z,r);let l=u.p.y<r.h,d=o.x-r.vx,f=o.y-r.vy,g=o.z-r.vz,b=Math.hypot(d,f,g),m=Math.hypot(d,g)+1e-4,p=u.kind==="hand"?1:u.kind==="foot"?.6:.45;if(l!==u.was){if(l&&b>(u.kind==="foot"?2.4:2)&&u.cool<=0&&u.kind!=="arm"){let v=Math.min(1.9,(.28+b*.26)*p)*(.75+.25*Math.random());if((u.kind==="hand"||Math.random()<.85)&&e.slap(u.p.x,r.h,u.p.z,v,d/m*Math.min(1,m/2.5),g/m*Math.min(1,m/2.5),r.vx+d*.55,r.vy,r.vz+g*.55,u.kind==="hand"?1:0),u.kind==="hand"){let x=Math.min(16,Math.round(3+b*1.5));for(let w=0;w<x;w++){let R=(Math.random()-.5)*2.2,y=Math.cos(R),E=Math.sin(R),A=.9+Math.random()*(1.2+b*.35),_=d/m*y-g/m*E,T=g/m*y+d/m*E;e.emit(u.p.x+_*.06,r.h+.03,u.p.z+T*.06,r.vx+_*A,r.vy+.8+Math.random()*(1.2+b*.22),r.vz+T*A,.28+Math.random()*.32,.009+Math.pow(Math.random(),2)*.02,0,0,1)}}u.cool=(u.kind==="hand",.3),h+=v,this.onSlap&&this.onSlap(b,u.p,u.kind)}else if(!l&&b>2.2&&u.kind==="hand"){let v=Math.min(1.5,(.1+b*.2)*p);e.fling(u.p.x,Math.max(u.p.y,r.h+.02),u.p.z,o.x,o.y,o.z,v),u.wet=.6,h+=v*.6}}if(!l&&u.wet>0){u.wet-=t;let v=b>2.5&&Math.random()<t*35*u.wet?1:0;for(let x=0;x<v;x++)e.emit(u.p.x+(Math.random()-.5)*.06,u.p.y+(Math.random()-.5)*.06,u.p.z+(Math.random()-.5)*.06,o.x*(.35+.5*Math.random()),o.y*.6+.5*Math.random(),o.z*(.35+.5*Math.random()),.35+Math.random()*.5,.01+Math.random()*.022,0,0,1)}if(u.kind==="foot"&&Math.abs(u.p.y-r.h)<.12&&b>2){for(this.churnAcc+=t*Math.min(42,b*8);this.churnAcc>=1;){this.churnAcc-=1;let v=Math.random()*6.283,x=Math.random()*.9;if(e.emit(u.p.x+Math.cos(v)*.05,r.h+.02,u.p.z+Math.sin(v)*.05,r.vx+Math.cos(v)*x+d*.25,r.vy+.9+2.1*Math.random()*Math.min(1.4,b/3),r.vz+Math.sin(v)*x+g*.25,.3+Math.random()*.4,.009+Math.pow(Math.random(),2)*.022,0,0,1),Math.random()<.08){e.lean=(Math.random()-.5)*.3;let w=.22+Math.random()*.16;e.emit(u.p.x,r.h-.02,u.p.z,r.vx,r.vy,r.vz,.62*Math.sqrt(w/.45),w,3,0,.75,0),e.lean=0}}h+=.25*t*10}u.was=l}let c=this.body;if(n&&c.subFrac>.2&&c.subFrac<.98&&c.relSpeed>1.5&&c.mouthDepth<.4){let u=Math.min(6,c.relSpeed),l=Math.hypot(c.relFlow.x,c.relFlow.z)+1e-4,d=-c.relFlow.x/l,f=-c.relFlow.z/l,g=this._hd.setFromMatrixPosition(this.ch.bones[S.head].matrixWorld);for(this.bowAcc+=t*Math.min(40,(u-1.3)*16);this.bowAcc>=1;){this.bowAcc-=1;let b=Math.random()<.5?-1:1,m=Math.random(),p,v,x,w,R;if(m<.5){let E=(Math.random()-.5)*.5,A=.12+Math.random()*.45;p=g.x+d*A-f*E,v=g.z+f*A+d*E,x=u*.7+.4+Math.random()*1.4,w=(Math.random()-.5)*1.2,R=.6+Math.random()*1.6}else{let E=(.22+Math.random()*.2)*b,A=-.5+Math.random()*.9;p=c.pos.x+d*A-f*E,v=c.pos.z+f*A+d*E,x=u*.3,w=b*(.4+Math.random()*1),R=.5+Math.random()*1.3}let y=!1;e.emit(p,c.surfaceH+.03,v,c.surface.vx+d*x-f*w,c.surface.vy+R*Math.min(1.4,.6+u*.3),c.surface.vz+f*x+d*w,y?.25+Math.random()*.3:.4+Math.random()*.55,y?.04+Math.random()*.05:Math.random()<.3?.028+Math.random()*.03:.011+Math.pow(Math.random(),2)*.026,y?1:0,y?.4:0,y?.32:1)}h+=.12+.1*u}e.near=!1,this.activity+=(Math.min(1,h)-this.activity)*(1-Math.exp(-t*(h>this.activity?12:2.5)))}};function Oc(a,t){if(t===Pd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(t===Xa||t===oo){let e=a.getIndex();if(e===null){let r=[],o=a.getAttribute("position");if(o!==void 0){for(let h=0;h<o.count;h++)r.push(h);a.setIndex(r),e=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}let i=e.count-2,n=[];if(t===Xa)for(let r=1;r<=i;r++)n.push(e.getX(0)),n.push(e.getX(r)),n.push(e.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(e.getX(r)),n.push(e.getX(r+1)),n.push(e.getX(r+2))):(n.push(e.getX(r+2)),n.push(e.getX(r+1)),n.push(e.getX(r)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=a.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),a}var mo=class extends wn{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new qc(e)}),this.register(function(e){return new tl(e)}),this.register(function(e){return new el(e)}),this.register(function(e){return new il(e)}),this.register(function(e){return new Kc(e)}),this.register(function(e){return new jc(e)}),this.register(function(e){return new Yc(e)}),this.register(function(e){return new Qc(e)}),this.register(function(e){return new Wc(e)}),this.register(function(e){return new Zc(e)}),this.register(function(e){return new Xc(e)}),this.register(function(e){return new $c(e)}),this.register(function(e){return new Jc(e)}),this.register(function(e){return new Vc(e)}),this.register(function(e){return new nl(e)}),this.register(function(e){return new sl(e)})}load(t,e,i,n){let s=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let c=On.extractUrlBase(t);r=On.resolveURL(c,this.path)}else r=On.extractUrlBase(t);this.manager.itemStart(t);let o=function(c){n?n(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},h=new Ga(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(c){try{s.parse(c,r,function(u){e(u),s.manager.itemEnd(t)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s,r={},o={},h=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(h.decode(new Uint8Array(t,0,4))===ef){try{r[ae.KHR_BINARY_GLTF]=new al(t)}catch(l){n&&n(l);return}s=JSON.parse(r[ae.KHR_BINARY_GLTF].content)}else s=JSON.parse(h.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new dl(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let l=this.pluginCallbacks[u](c);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[l.name]=l,r[l.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let l=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(l){case ae.KHR_MATERIALS_UNLIT:r[l]=new Gc;break;case ae.KHR_DRACO_MESH_COMPRESSION:r[l]=new rl(s,this.dracoLoader);break;case ae.KHR_TEXTURE_TRANSFORM:r[l]=new ol;break;case ae.KHR_MESH_QUANTIZATION:r[l]=new hl;break;default:d.indexOf(l)>=0&&o[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(i,n)}parseAsync(t,e){let i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}};function kx(){let a={};return{get:function(t){return a[t]},add:function(t,e){a[t]=e},remove:function(t){delete a[t]},removeAll:function(){a={}}}}var ae={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Vc=class{constructor(t){this.parser=t,this.name=ae.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){let s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,i="light:"+t,n=e.cache.get(i);if(n)return n;let s=e.json,h=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],c,u=new Dt(16777215);h.color!==void 0&&u.setRGB(h.color[0],h.color[1],h.color[2],Oe);let l=h.range!==void 0?h.range:0;switch(h.type){case"directional":c=new as(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new no(u),c.distance=l;break;case"spot":c=new Un(u),c.distance=l,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,c.angle=h.spot.outerConeAngle,c.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return c.position.set(0,0,0),c.decay=2,Hn(c,h),h.intensity!==void 0&&(c.intensity=h.intensity),c.name=e.createUniqueName(h.name||"light_"+t),n=Promise.resolve(c),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,i=this.parser,s=i.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(h){return i._getNodeRef(e.cache,o,h)})}},Gc=class{constructor(){this.name=ae.KHR_MATERIALS_UNLIT}getMaterialType(){return Ge}extendParams(t,e,i){let n=[];t.color=new Dt(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;t.color.setRGB(r[0],r[1],r[2],Oe),t.opacity=r[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,me))}return Promise.all(n)}},Wc=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},qc=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];if(r.clearcoatFactor!==void 0&&(e.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){let o=r.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new gt(o,o)}return Promise.all(s)}},Xc=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return r.iridescenceFactor!==void 0&&(e.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(e.iridescenceIOR=r.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}},Kc=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SHEEN}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new Dt(0,0,0),e.sheenRoughness=0,e.sheen=1;let r=n.extensions[this.name];if(r.sheenColorFactor!==void 0){let o=r.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Oe)}return r.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",r.sheenColorTexture,me)),r.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}},jc=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return r.transmissionFactor!==void 0&&(e.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",r.transmissionTexture)),Promise.all(s)}},Yc=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_VOLUME}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];e.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",r.thicknessTexture)),e.attenuationDistance=r.attenuationDistance||1/0;let o=r.attenuationColor||[1,1,1];return e.attenuationColor=new Dt().setRGB(o[0],o[1],o[2],Oe),Promise.all(s)}},Qc=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IOR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Zc=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SPECULAR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];e.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",r.specularTexture));let o=r.specularColorFactor||[1,1,1];return e.specularColor=new Dt().setRGB(o[0],o[1],o[2],Oe),r.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",r.specularColorTexture,me)),Promise.all(s)}},Jc=class{constructor(t){this.parser=t,this.name=ae.EXT_MATERIALS_BUMP}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return e.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(i.assignTexture(e,"bumpMap",r.bumpTexture)),Promise.all(s)}},$c=class{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:xi}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],r=n.extensions[this.name];return r.anisotropyStrength!==void 0&&(e.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(e.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(i.assignTexture(e,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}},tl=class{constructor(t){this.parser=t,this.name=ae.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],r=e.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,r)}},el=class{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let r=s.extensions[e],o=n.images[r.source],h=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(h=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(t,r.source,h);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},il=class{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let r=s.extensions[e],o=n.images[r.source],h=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(h=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(t,r.source,h);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},nl=class{constructor(t){this.name=ae.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let h=n.byteOffset||0,c=n.byteLength||0,u=n.count,l=n.byteStride,d=new Uint8Array(o,h,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,l,d,n.mode,n.filter).then(function(f){return f.buffer}):r.ready.then(function(){let f=new ArrayBuffer(u*l);return r.decodeGltfBuffer(new Uint8Array(f),u,l,d,n.mode,n.filter),f})})}else return null}},sl=class{constructor(t){this.name=ae.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=e.meshes[i.mesh];for(let c of n.primitives)if(c.mode!==zi.TRIANGLES&&c.mode!==zi.TRIANGLE_STRIP&&c.mode!==zi.TRIANGLE_FAN&&c.mode!==void 0)return null;let r=i.extensions[this.name].attributes,o=[],h={};for(let c in r)o.push(this.parser.getDependency("accessor",r[c]).then(u=>(h[c]=u,h[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{let u=c.pop(),l=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of l){let b=new Rt,m=new M,p=new _t,v=new M(1,1,1),x=new Xr(g.geometry,g.material,d);for(let w=0;w<d;w++)h.TRANSLATION&&m.fromBufferAttribute(h.TRANSLATION,w),h.ROTATION&&p.fromBufferAttribute(h.ROTATION,w),h.SCALE&&v.fromBufferAttribute(h.SCALE,w),x.setMatrixAt(w,b.compose(m,p,v));for(let w in h)if(w==="_COLOR_0"){let R=h[w];x.instanceColor=new ti(R.array,R.itemSize,R.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&g.geometry.setAttribute(w,h[w]);Pe.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},ef="glTF",Ya=12,Zd={JSON:1313821514,BIN:5130562},al=class{constructor(t){this.name=ae.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Ya),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==ef)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Ya,s=new DataView(t,Ya),r=0;for(;r<n;){let o=s.getUint32(r,!0);r+=4;let h=s.getUint32(r,!0);if(r+=4,h===Zd.JSON){let c=new Uint8Array(t,Ya+r,o);this.content=i.decode(c)}else if(h===Zd.BIN){let c=Ya+r;this.body=t.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},rl=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ae.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,r=t.extensions[this.name].attributes,o={},h={},c={};for(let u in r){let l=ll[u]||u.toLowerCase();o[l]=r[u]}for(let u in t.attributes){let l=ll[u]||u.toLowerCase();if(r[u]!==void 0){let d=i.accessors[t.attributes[u]],f=ca[d.componentType];c[l]=f.name,h[l]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(u){return new Promise(function(l,d){n.decodeDracoFile(u,function(f){for(let g in f.attributes){let b=f.attributes[g],m=h[g];m!==void 0&&(b.normalized=m)}l(f)},o,c,Oe,d)})})}},ol=class{constructor(){this.name=ae.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},hl=class{constructor(){this.name=ae.KHR_MESH_QUANTIZATION}},go=class extends kn{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let r=0;r!==n;r++)e[r]=i[s+r];return e}interpolate_(t,e,i,n){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,h=o*2,c=o*3,u=n-e,l=(i-e)/u,d=l*l,f=d*l,g=t*c,b=g-c,m=-2*f+3*d,p=f-d,v=1-m,x=p-d+l;for(let w=0;w!==o;w++){let R=r[b+w+o],y=r[b+w+h]*u,E=r[g+w+o],A=r[g+w]*u;s[w]=v*R+x*y+m*E+p*A}return s}},Dx=new _t,cl=class extends go{interpolate_(t,e,i,n){let s=super.interpolate_(t,e,i,n);return Dx.fromArray(s).normalize().toArray(s),s}},zi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ca={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jd={9728:Ie,9729:Jt,9984:Fr,9985:_c,9986:Aa,9987:Je},$d={33071:Ze,33648:Da,10497:ai},Nc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ll={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zx={CUBICSPLINE:void 0,LINEAR:ts,STEP:Vs},Bc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ux(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Se({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qe})),a.DefaultMaterial}function hs(a,t,e){for(let i in e.extensions)a[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function Hn(a,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(a.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Ox(a,t,e){let i=!1,n=!1,s=!1;for(let c=0,u=t.length;c<u;c++){let l=t[c];if(l.POSITION!==void 0&&(i=!0),l.NORMAL!==void 0&&(n=!0),l.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(a);let r=[],o=[],h=[];for(let c=0,u=t.length;c<u;c++){let l=t[c];if(i){let d=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):a.attributes.position;r.push(d)}if(n){let d=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):a.attributes.normal;o.push(d)}if(s){let d=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):a.attributes.color;h.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(h)]).then(function(c){let u=c[0],l=c[1],d=c[2];return i&&(a.morphAttributes.position=u),n&&(a.morphAttributes.normal=l),s&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function Nx(a,t){if(a.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)a.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(a.morphTargetInfluences.length===e.length){a.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)a.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bx(a){let t,e=a.extensions&&a.extensions[ae.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Hc(e.attributes):t=a.indices+":"+Hc(a.attributes)+":"+a.mode,a.targets!==void 0)for(let i=0,n=a.targets.length;i<n;i++)t+=":"+Hc(a.targets[i]);return t}function Hc(a){let t="",e=Object.keys(a).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+a[e[i]]+";";return t}function ul(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hx(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Vx=new Rt,dl=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new kx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new io(this.options.manager):this.textureLoader=new so(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ga(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){let o={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:i,userData:{}};return hs(s,o,n),Hn(o,n),Promise.all(i._invokeAll(function(h){return h.afterRoot&&h.afterRoot(o)})).then(function(){t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n].joints;for(let o=0,h=r.length;o<h;o++)t[r[o]].isBone=!0}for(let n=0,s=t.length;n<s;n++){let r=t[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;let n=i.clone(),s=(r,o)=>{let h=this.associations.get(r);h!=null&&this.associations.set(o,h);for(let[c,u]of r.children.entries())s(u,o.children[c])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){let n=t(e[i]);if(n)return n}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let i=[];for(let n=0;n<e.length;n++){let s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){let i=t+":"+e,n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){let i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,r){return i.getDependency(t,r)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ae.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,r){i.load(On.resolveURL(e.uri,n.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){let n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){let e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){let r=Nc[n.type],o=ca[n.componentType],h=n.normalized===!0,c=new o(n.count*r);return Promise.resolve(new Bt(c,r,h))}let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(r){let o=r[0],h=Nc[n.type],c=ca[n.componentType],u=c.BYTES_PER_ELEMENT,l=u*h,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0,b,m;if(f&&f!==l){let p=Math.floor(d/f),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,x=e.cache.get(v);x||(b=new c(o,p*f,n.count*f/u),x=new js(b,f/u),e.cache.add(v,x)),m=new is(x,h,d%f/u,g)}else o===null?b=new c(n.count*h):b=new c(o,d,n.count*h),m=new Bt(b,h,g);if(n.sparse!==void 0){let p=Nc.SCALAR,v=ca[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,w=n.sparse.values.byteOffset||0,R=new v(r[1],x,n.sparse.count*p),y=new c(r[2],w,n.sparse.count*h);o!==null&&(m=new Bt(m.array.slice(),m.itemSize,m.normalized));for(let E=0,A=R.length;E<A;E++){let _=R[E];if(m.setX(_,y[E*h]),h>=2&&m.setY(_,y[E*h+1]),h>=3&&m.setZ(_,y[E*h+2]),h>=4&&m.setW(_,y[E*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){let e=this.json,i=this.options,s=e.textures[t].source,r=e.images[s],o=this.textureLoader;if(r.uri){let h=i.manager.getHandler(r.uri);h!==null&&(o=h)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,i){let n=this,s=this.json,r=s.textures[t],o=s.images[e],h=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[h])return this.textureCache[h];let c=this.loadImageSource(e,i).then(function(u){u.flipY=!1,u.name=r.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(s.samplers||{})[r.sampler]||{};return u.magFilter=Jd[d.magFilter]||Jt,u.minFilter=Jd[d.minFilter]||Je,u.wrapS=$d[d.wrapS]||ai,u.wrapT=$d[d.wrapT]||ai,n.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[h]=c,c}loadImageSource(t,e){let i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());let r=n.images[t],o=self.URL||self.webkitURL,h=r.uri||"",c=!1;if(r.bufferView!==void 0)h=i.getDependency("bufferView",r.bufferView).then(function(l){c=!0;let d=new Blob([l],{type:r.mimeType});return h=o.createObjectURL(d),h});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let u=Promise.resolve(h).then(function(l){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(b){let m=new $e(b);m.needsUpdate=!0,d(m)}),e.load(On.resolveURL(l,s.path),g,void 0,f)})}).then(function(l){return c===!0&&o.revokeObjectURL(h),l.userData.mimeType=r.mimeType||Hx(r.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),l});return this.sourceCache[t]=u,u}assignTexture(t,e,i,n){let s=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(r=r.clone(),r.channel=i.texCoord),s.extensions[ae.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[ae.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let h=s.associations.get(r);r=s.extensions[ae.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,h)}}return n!==void 0&&(r.colorSpace=n),t[e]=r,r})}assignFinalMaterial(t){let e=t.geometry,i=t.material,n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,r=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+i.uuid,h=this.cache.get(o);h||(h=new Ha,bi.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,h.sizeAttenuation=!1,this.cache.add(o,h)),i=h}else if(t.isLine){let o="LineBasicMaterial:"+i.uuid,h=this.cache.get(o);h||(h=new Ba,bi.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,this.cache.add(o,h)),i=h}if(n||s||r){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let h=this.cache.get(o);h||(h=i.clone(),s&&(h.vertexColors=!0),r&&(h.flatShading=!0),n&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(o,h),this.associations.set(h,this.associations.get(i))),i=h}t.material=i}getMaterialType(){return Se}loadMaterial(t){let e=this,i=this.json,n=this.extensions,s=i.materials[t],r,o={},h=s.extensions||{},c=[];if(h[ae.KHR_MATERIALS_UNLIT]){let l=n[ae.KHR_MATERIALS_UNLIT];r=l.getMaterialType(),c.push(l.extendParams(o,s,e))}else{let l=s.pbrMetallicRoughness||{};if(o.color=new Dt(1,1,1),o.opacity=1,Array.isArray(l.baseColorFactor)){let d=l.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Oe),o.opacity=d[3]}l.baseColorTexture!==void 0&&c.push(e.assignTexture(o,"map",l.baseColorTexture,me)),o.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,o.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(o,"metalnessMap",l.metallicRoughnessTexture)),c.push(e.assignTexture(o,"roughnessMap",l.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=Ue);let u=s.alphaMode||Bc.OPAQUE;if(u===Bc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Bc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Ge&&(c.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new gt(1,1),s.normalTexture.scale!==void 0)){let l=s.normalTexture.scale;o.normalScale.set(l,l)}if(s.occlusionTexture!==void 0&&r!==Ge&&(c.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Ge){let l=s.emissiveFactor;o.emissive=new Dt().setRGB(l[0],l[1],l[2],Oe)}return s.emissiveTexture!==void 0&&r!==Ge&&c.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,me)),Promise.all(c).then(function(){let l=new r(o);return s.name&&(l.name=s.name),Hn(l,s),e.associations.set(l,{materials:t}),s.extensions&&hs(n,l,s),l})}createUniqueName(t){let e=ye.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[ae.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(h){return tf(h,o,e)})}let r=[];for(let o=0,h=t.length;o<h;o++){let c=t[o],u=Bx(c),l=n[u];if(l)r.push(l.promise);else{let d;c.extensions&&c.extensions[ae.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=tf(new ce,c,e),n[u]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(t){let e=this,i=this.json,n=this.extensions,s=i.meshes[t],r=s.primitives,o=[];for(let h=0,c=r.length;h<c;h++){let u=r[h].material===void 0?Ux(this.cache):this.getDependency("material",r[h].material);o.push(u)}return o.push(e.loadGeometries(r)),Promise.all(o).then(function(h){let c=h.slice(0,h.length-1),u=h[h.length-1],l=[];for(let f=0,g=u.length;f<g;f++){let b=u[f],m=r[f],p,v=c[f];if(m.mode===zi.TRIANGLES||m.mode===zi.TRIANGLE_STRIP||m.mode===zi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new ns(b,v):new pt(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===zi.TRIANGLE_STRIP?p.geometry=Oc(p.geometry,oo):m.mode===zi.TRIANGLE_FAN&&(p.geometry=Oc(p.geometry,Xa));else if(m.mode===zi.LINES)p=new Kr(b,v);else if(m.mode===zi.LINE_STRIP)p=new Qs(b,v);else if(m.mode===zi.LINE_LOOP)p=new jr(b,v);else if(m.mode===zi.POINTS)p=new Zs(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Nx(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),Hn(p,s),m.extensions&&hs(n,p,m),e.assignFinalMaterial(p),l.push(p)}for(let f=0,g=l.length;f<g;f++)e.associations.set(l[f],{meshes:t,primitives:f});if(l.length===1)return s.extensions&&hs(n,l[0],s),l[0];let d=new re;s.extensions&&hs(n,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=l.length;f<g;f++)d.add(l[f]);return d})}loadCamera(t){let e,i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Ve(nn.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new vi(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),Hn(e,i),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let s=n.pop(),r=n,o=[],h=[];for(let c=0,u=r.length;c<u;c++){let l=r[c];if(l){o.push(l);let d=new Rt;s!==null&&d.fromArray(s.array,c*16),h.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Ys(o,h)})}loadAnimation(t){let e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,r=[],o=[],h=[],c=[],u=[];for(let l=0,d=n.channels.length;l<d;l++){let f=n.channels[l],g=n.samplers[f.sampler],b=f.target,m=b.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,v=n.parameters!==void 0?n.parameters[g.output]:g.output;b.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),h.push(this.getDependency("accessor",v)),c.push(g),u.push(b))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(h),Promise.all(c),Promise.all(u)]).then(function(l){let d=l[0],f=l[1],g=l[2],b=l[3],m=l[4],p=[];for(let v=0,x=d.length;v<x;v++){let w=d[v],R=f[v],y=g[v],E=b[v],A=m[v];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let _=i._createAnimationTracks(w,R,y,E,A);if(_)for(let T=0;T<_.length;T++)p.push(_[T])}return new eo(s,void 0,p)})}createNodeMesh(t){let e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let r=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let h=0,c=n.weights.length;h<c;h++)o.morphTargetInfluences[h]=n.weights[h]}),r})}loadNode(t){let e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),r=[],o=n.children||[];for(let c=0,u=o.length;c<u;c++)r.push(i.getDependency("node",o[c]));let h=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(r),h]).then(function(c){let u=c[0],l=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Vx)});for(let f=0,g=l.length;f<g;f++)u.add(l[f]);return u})}_loadNodeShallow(t){let e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],r=s.name?n.createUniqueName(s.name):"",o=[],h=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return h&&o.push(h),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new ss:c.length>1?u=new re:c.length===1?u=c[0]:u=new Pe,u!==c[0])for(let l=0,d=c.length;l<d;l++)u.add(c[l]);if(s.name&&(u.userData.name=s.name,u.name=r),Hn(u,s),s.extensions&&hs(i,u,s),s.matrix!==void 0){let l=new Rt;l.fromArray(s.matrix),u.applyMatrix4(l)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return n.associations.has(u)||n.associations.set(u,{}),n.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){let e=this.extensions,i=this.json.scenes[t],n=this,s=new re;i.name&&(s.name=n.createUniqueName(i.name)),Hn(s,i),i.extensions&&hs(e,s,i);let r=i.nodes||[],o=[];for(let h=0,c=r.length;h<c;h++)o.push(n.getDependency("node",r[h]));return Promise.all(o).then(function(h){for(let u=0,l=h.length;u<l;u++)s.add(h[u]);let c=u=>{let l=new Map;for(let[d,f]of n.associations)(d instanceof bi||d instanceof $e)&&l.set(d,f);return u.traverse(d=>{let f=n.associations.get(d);f!=null&&l.set(d,f)}),l};return n.associations=c(s),s})}_createAnimationTracks(t,e,i,n,s){let r=[],o=t.name?t.name:t.uuid,h=[];Bn[s.path]===Bn.weights?t.traverse(function(d){d.morphTargetInfluences&&h.push(d.name?d.name:d.uuid)}):h.push(o);let c;switch(Bn[s.path]){case Bn.weights:c=yn;break;case Bn.rotation:c=tn;break;case Bn.position:case Bn.scale:c=_n;break;default:switch(i.itemSize){case 1:c=yn;break;case 2:case 3:default:c=_n;break}break}let u=n.interpolation!==void 0?zx[n.interpolation]:ts,l=this._getArrayFromAccessor(i);for(let d=0,f=h.length;d<f;d++){let g=new c(h[d]+"."+Bn[s.path],e.array,l,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let i=ul(e.constructor),n=new Float32Array(e.length);for(let s=0,r=e.length;s<r;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){let n=this instanceof tn?cl:go;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Gx(a,t,e){let i=t.attributes,n=new Fi;if(i.POSITION!==void 0){let o=e.json.accessors[i.POSITION],h=o.min,c=o.max;if(h!==void 0&&c!==void 0){if(n.set(new M(h[0],h[1],h[2]),new M(c[0],c[1],c[2])),o.normalized){let u=ul(ca[o.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new M,h=new M;for(let c=0,u=s.length;c<u;c++){let l=s[c];if(l.POSITION!==void 0){let d=e.json.accessors[l.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(h.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),h.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),h.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=ul(ca[d.componentType]);h.multiplyScalar(b)}o.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}a.boundingBox=n;let r=new Ti;n.getCenter(r.center),r.radius=n.min.distanceTo(n.max)/2,a.boundingSphere=r}function tf(a,t,e){let i=t.attributes,n=[];function s(r,o){return e.getDependency("accessor",r).then(function(h){a.setAttribute(o,h)})}for(let r in i){let o=ll[r]||r.toLowerCase();o in a.attributes||n.push(s(i[r],o))}if(t.indices!==void 0&&!a.index){let r=e.getDependency("accessor",t.indices).then(function(o){a.setIndex(o)});n.push(r)}return de.workingColorSpace!==Oe&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${de.workingColorSpace}" not supported.`),Hn(a,t),Gx(a,t,e),Promise.all(n).then(function(){return t.targets!==void 0?Ox(a,t.targets,e):a})}var nf=function(){"use strict";var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(e)?t:a,s,r=WebAssembly.instantiate(o(n),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),x=0;x<p.length;++x){var w=p.charCodeAt(x);v[x]=w>96?w-97:w>64?w-39:w+4}for(var R=0,x=0;x<p.length;++x)v[R++]=v[x]<60?i[v[x]]:(v[x]-60)*64+v[++x];return v.buffer.slice(0,R)}function h(p,v,x,w,R,y){var E=s.exports.sbrk,A=x+3&-4,_=E(A*w),T=E(R.length),I=new Uint8Array(s.exports.memory.buffer);I.set(R,T);var G=p(_,x,w,T,R.length);if(G==0&&y&&y(_,A,w),v.set(I.subarray(_,_+x*w)),E(_-E(0)),G!=0)throw new Error("Malformed buffer data: "+G)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},l=[],d=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(x){var w=x.data;v.pending-=w.count,v.requests[w.id][w.action](w.value),delete v.requests[w.id]},v}function g(p){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(n))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+h.toString()+m.toString(),x=new Blob([v],{type:"text/javascript"}),w=URL.createObjectURL(x),R=0;R<p;++R)l[R]=f(w);URL.revokeObjectURL(w)}function b(p,v,x,w,R){for(var y=l[0],E=1;E<l.length;++E)l[E].pending<y.pending&&(y=l[E]);return new Promise(function(A,_){var T=new Uint8Array(x),I=d++;y.pending+=p,y.requests[I]={resolve:A,reject:_},y.object.postMessage({id:I,count:p,size:v,source:T,mode:w,filter:R},[T.buffer])})}function m(p){r.then(function(){var v=p.data;try{var x=new Uint8Array(v.count*v.size);h(s.exports[v.mode],x,v.count,v.size,v.source,s.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(w){self.postMessage({id:v.id,count:v.count,action:"reject",value:w})}})}return{ready:r,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,v,x,w,R){h(s.exports.meshopt_decodeVertexBuffer,p,v,x,w,s.exports[c[R]])},decodeIndexBuffer:function(p,v,x,w){h(s.exports.meshopt_decodeIndexBuffer,p,v,x,w)},decodeIndexSequence:function(p,v,x,w){h(s.exports.meshopt_decodeIndexSequence,p,v,x,w)},decodeGltfBuffer:function(p,v,x,w,R,y){h(s.exports[u[R]],p,v,x,w,s.exports[c[y]])},decodeGltfBufferAsync:function(p,v,x,w,R){return l.length>0?b(p,v,x,u[w],c[R]):r.then(function(){var y=new Uint8Array(p*v);return h(s.exports[u[w]],y,p,v,x,s.exports[c[R]]),y})}}}();var sf=[["hips","Hips",null,null],["spine","Spine","Spine1","chest"],["chest","Spine2","Neck","neck"],["neck","Neck","Head","head"],["head","Head",null,null],["upperArmL","LeftArm","LeftForeArm","foreArmL"],["foreArmL","LeftForeArm","LeftHand","handL"],["handL","LeftHand","LeftHandMiddle1",[.03,-.182,.012]],["upperArmR","RightArm","RightForeArm","foreArmR"],["foreArmR","RightForeArm","RightHand","handR"],["handR","RightHand","RightHandMiddle1",[-.03,-.182,.012]],["thighL","LeftUpLeg","LeftLeg","shinL"],["shinL","LeftLeg","LeftFoot","footL"],["footL","LeftFoot","LeftToeBase",[.006,-.063,.205]],["thighR","RightUpLeg","RightLeg","shinR"],["shinR","RightLeg","RightFoot","footR"],["footR","RightFoot","RightToeBase",[-.006,-.063,.205]]],Wx=["Index","Middle","Ring","Pinky"];function cs(a){return new Promise((t,e)=>{let i=atob(a),n=new Uint8Array(i.length);for(let r=0;r<i.length;r++)n[r]=i.charCodeAt(r);let s=new mo;s.setMeshoptDecoder(nf),s.parse(n.buffer,"",t,e)})}var la=class{constructor(t,e,i=1.78){let n=t.group,s=n.position.clone(),r=n.quaternion.clone();n.position.set(0,0,0),n.quaternion.identity(),this.root=new re,this.root.name="glbBody",this.root.add(e.scene),n.add(this.root);let o=null;if(e.scene.traverse(y=>{y.isSkinnedMesh&&!o&&(o=y)}),!o)throw new Error("GLB has no skinned mesh");this.mesh=o,o.frustumCulled=!1,o.layers.enable(1),o.skeleton.pose(),n.updateMatrixWorld(!0);let h=new Map;o.skeleton.bones.forEach(y=>h.set(y.name.replace(/^mixamorig:?/i,""),y)),this.by=h;for(let y of sf)if(!h.get(y[1]))throw new Error("GLB skeleton is missing "+y[1]);let c=new M,u=new M;{let y=h.get("Head").getWorldPosition(new M).sub(h.get("Hips").getWorldPosition(c)).normalize(),E=h.get("LeftUpLeg").getWorldPosition(new M).sub(h.get("RightUpLeg").getWorldPosition(u)).normalize(),A=new M().crossVectors(E,y).normalize();E.crossVectors(y,A).normalize(),this.root.quaternion.setFromRotationMatrix(new Rt().makeBasis(E,y,A)).invert()}n.updateMatrixWorld(!0);let l=()=>(n.updateMatrixWorld(!0),o.skeleton.update(),o.computeBoundingBox(),o.boundingBox.clone().applyMatrix4(o.matrixWorld)),d=l();this.sourceHeight=d.max.y-d.min.y,this.root.scale.setScalar(i/this.sourceHeight),n.updateMatrixWorld(!0),h.get("Hips").getWorldPosition(c),this.root.position.set(-c.x,-c.y,-c.z),n.updateMatrixWorld(!0),d=l();let f=h.get("Head").getWorldPosition(new M);this.eye=new M(0,d.max.y-.118,f.z+.082),this.mouth=new M(0,d.max.y-.185,f.z+.09),this.top=d.max.y,this.feet=d.min.y;let g=h.get("Hips");this.order=[],g.traverse(y=>{y.isBone&&this.order.push(y)}),this.order.forEach((y,E)=>{y.userData.k=E}),this.parent=this.order.map(y=>y===g?-1:y.parent.userData.k),this.restL=this.order.map(y=>y.quaternion.clone()),this.W=this.order.map(()=>new _t),this.rootParentW=g.parent.getWorldQuaternion(new _t),this.driver=this.order.map(()=>-1),this.aligned=this.order.map(()=>null);let b=y=>new M(di[S[y]][2],di[S[y]][3],di[S[y]][4]),m=new _t;for(let[y,E,A,_]of sf){let T=h.get(E),I=T.userData.k,G=T.getWorldQuaternion(new _t),q=new _t;if(A&&_&&h.get(A)){let U=h.get(A).getWorldPosition(new M).sub(T.getWorldPosition(c)).normalize(),z=(Array.isArray(_)?new M(..._):b(_).sub(b(y))).normalize();q.setFromUnitVectors(U,z)}this.driver[I]=S[y],this.aligned[I]=q.multiply(G)}this.special=this.order.map(()=>null);let p=h.get("Spine1");if(p){let y=h.get("Spine2").getWorldPosition(new M).sub(p.getWorldPosition(c)).normalize(),E=new _t().setFromUnitVectors(y,new M(0,1,0)).multiply(p.getWorldQuaternion(new _t));this.special[p.userData.k]={type:"mid",aligned:E}}for(let[y,E,A]of[["LeftShoulder",1,S.upperArmL],["RightShoulder",-1,S.upperArmR]]){let _=h.get(y);_&&(this.special[_.userData.k]={type:"clav",side:E,arm:A,restW:_.getWorldQuaternion(new _t)})}this._d=new M,this._e=new gi,this._q2=new _t,this.fingers={Left:[],Right:[]},this.grip={Left:0,Right:0};for(let y of["Left","Right"]){let E=h.get(y+"Hand"),A=new M(0,-1,0);for(let _ of Wx)for(let T=1;T<=3;T++){let I=h.get(`${y}Hand${_}${T}`);if(!I)continue;let G=I.children.find(N=>N.isBone),q=G?G.getWorldPosition(new M).sub(I.getWorldPosition(c)).normalize():new M(y==="Left"?1:-1,0,0),U=new M().crossVectors(q,A).normalize(),z=I.parent.getWorldQuaternion(new _t),J=I.getWorldQuaternion(new _t);m.setFromAxisAngle(U,(T===1?.32:.42)*(_==="Pinky"?1.25:_==="Index"?.8:1));let V=m.clone().multiply(J),H=z.invert();this.restL[I.userData.k]=H.clone().multiply(V),I.quaternion.copy(this.restL[I.userData.k]),m.setFromAxisAngle(U,T===1?1.05:T===2?1.35:.9),this.fingers[y].push({bone:I,open:this.restL[I.userData.k].clone(),shut:H.clone().multiply(m.clone().multiply(J))})}}this.D=di.map(()=>new _t),this.headBone=h.get("Head"),this._q=new _t;let v=Array.isArray(o.material)?o.material:[o.material];for(let y of v)y.roughness=.44,y.metalness=0,y.envMapIntensity=1.3,y.color&&y.color.setRGB(.7,.78,.9),y.needsUpdate=!0;this.cutOn={value:0},this.headRigid=[];let x=`
  if (uCutOn > 0.5 && cutV > 0.0) {
    vec3 rel = position - uCutPos; rel -= uCutDir * dot(rel, uCutDir);
    transformed = uCutPos + rel * min(1.0, uCutR / max(length(rel), 1.0e-5)) - uCutDir * (0.4 * uCutR);
  }`,w=h.get("Head"),R=y=>{for(let E=y.parent;E;E=E.parent)if(E===w)return!0;return!1};e.scene.traverse(y=>{if(!y.isMesh)return;if(!y.isSkinnedMesh){R(y)&&this.headRigid.push(y);return}let E=y.skeleton.bones,A=X=>E.findIndex(ot=>ot.name.replace(/^mixamorig:?/i,"")===X),_=A("Neck"),T=A("Head"),I=A("Spine2");if(_<0||T<0||I<0)return;let G=new Set([_]);w.traverse(X=>{let ot=E.indexOf(X);ot>=0&&G.add(ot)});let q=y.geometry.attributes.position,U=y.geometry.attributes.skinIndex,z=y.geometry.attributes.skinWeight,J=U.count,V=new Float32Array(J),H=new Float32Array(J),N=new M,P=new M,W=new M,k=0,O=0;for(let X=0;X<J;X++){let ot=0,nt=0,lt=0;for(let Z=0;Z<4;Z++){let kt=z.getComponent(X,Z),vt=U.getComponent(X,Z);nt+=kt,G.has(vt)&&(ot+=kt),vt===_&&(lt+=kt)}V[X]=nt>0?ot/nt:0,H[X]=nt>0?lt/nt:0,W.fromBufferAttribute(q,X),H[X]=Math.max(H[X],V[X]>.25&&V[X]<.85?.6:0),H[X]>.5?(N.add(W),k++):V[X]>.95&&(P.add(W),O++)}if(!k||!O)return;y.geometry.setAttribute("aHead",new Bt(V,1)),N.multiplyScalar(1/k),P.multiplyScalar(1/O);let D=P.clone().sub(N).normalize(),B=0,Y=0;for(let X=0;X<J;X++){if(H[X]<=.5)continue;W.fromBufferAttribute(q,X).sub(N);let ot=W.dot(D),nt=W.addScaledVector(D,-ot).length();ot<B&&(B=ot),nt>Y&&(Y=nt)}let Q={uCutOn:this.cutOn,uCutPos:{value:N.clone().addScaledVector(D,B*.55)},uCutDir:{value:D},uCutR:{value:Y*.8},uCutBone:{value:I}};y.frustumCulled=!1,this.cutInfo=Q;for(let X of Array.isArray(y.material)?y.material:[y.material])X.onBeforeCompile=ot=>{Object.assign(ot.uniforms,Q),ot.vertexShader=`attribute float aHead; uniform float uCutOn; uniform vec3 uCutPos; uniform vec3 uCutDir; uniform float uCutR; uniform float uCutBone; varying float vCut;
`+ot.vertexShader.replace("#include <skinbase_vertex>",`float cutV = aHead - 0.6;
  vCut = cutV;
  #include <skinbase_vertex>
  #ifdef USE_SKINNING
  if (uCutOn > 0.5 && cutV > 0.0) { boneMatX = getBoneMatrix(uCutBone); boneMatY = boneMatX; boneMatZ = boneMatX; boneMatW = boneMatX; }
  #endif`).replace("#include <morphtarget_vertex>","#include <morphtarget_vertex>"+x),ot.fragmentShader=`uniform float uCutOn; varying float vCut;
`+ot.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) diffuseColor.a = 1.0;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) gl_FragColor.rgb = vec3(0.010, 0.012, 0.014);`)},X.customProgramCacheKey=()=>"eos-neck-lid-"+y.uuid,X.needsUpdate=!0}),this.material=v[0],n.position.copy(s),n.quaternion.copy(r),n.updateMatrixWorld(!0)}setHeadVisible(t){this.cutOn.value=t?0:1}setGrip(t,e){for(let[i,n]of[["Left",t],["Right",e]])if(!(Math.abs(this.grip[i]-n)<.01)){this.grip[i]=n;for(let s of this.fingers[i])s.bone.quaternion.copy(s.open).slerp(s.shut,n),this.restL[s.bone.userData.k].copy(s.bone.quaternion)}}update(t){let e=this.D;for(let r=0;r<t.length;r++){let o=di[r][1];o<0?e[r].copy(t[r].quaternion):e[r].copy(e[o]).multiply(t[r].quaternion)}let i=this.W,n=this.order,s=this._q;for(let r=0;r<n.length;r++){let o=this.parent[r]<0?this.rootParentW:i[this.parent[r]],h=this.driver[r];if(h>=0)i[r].copy(e[h]).multiply(this.aligned[r]),n[r].quaternion.copy(s.copy(o).invert().multiply(i[r]));else if(this.special[r]){let c=this.special[r];if(c.type==="mid")i[r].copy(e[S.spine]).slerp(e[S.chest],.5).multiply(c.aligned);else{let u=this._d.set(0,-1,0).applyQuaternion(t[c.arm].quaternion),l=Math.max(0,Math.min(1,(u.y+.35)/1.35)),d=Math.max(0,Math.min(1,u.z));this._q2.setFromEuler(this._e.set(0,-c.side*.3*d,c.side*.62*l*l*(3-2*l),"YXZ")),i[r].copy(e[S.chest]).multiply(this._q2).multiply(c.restW)}n[r].quaternion.copy(s.copy(o).invert().multiply(i[r]))}else i[r].copy(o).multiply(this.restL[r])}}};var ua=1/120,qx=a=>Math.max(0,Math.min(1,a)),fl=class{constructor(){this.enabled=!0,this.v={x:0,z:0,swim:!1,dive:!1},this.virtual=null,this.touch=null}axisX(){return this.v.x}axisZ(){return this.v.z}swim(){return!!this.v.swim}dive(){return!!this.v.dive}busy(){return!1}},bo=class{constructor(t,e){this.waves=t,this.scene=e,this.ready=!1,this.failed=!1,this.state="none",this.t=0,this.acc=0,this.input=new fl,this.body=new ia(t),this.survival=new sa,this.player=new na(this.body,this.survival,this.input),this.character=null,this.anim=null,this.limbs=null,this.pos=this.body.pos,this.onSplash=null,this.burstT=0,this.burstOn=!0,this.phase=0,this.t1=8,this.t2=0,this.st2=26}async load(t){try{window.__EOS_SURV||await t("dist/survivor.js");let e=await cs(window.__EOS_SURV);window.__EOS_SURV=null,this.character=new ea;let i=new la(this.character,e);this.character.useGlb(i),this.body.setAirway(new M(0,i.mouth.y,i.mouth.z),new M(0,i.eye.y,i.eye.z)),this.anim=new oa(this.character,this.body,this.player,this.survival),this.limbs=new ha(this.waves,this.character,this.body),this.limbs.onSlap=(n,s,r)=>{this.onSplash&&this.onSplash(s,n,r)},this.character.group.visible=!1,this.scene.add(this.character.group),this.ready=!0}catch(e){console.warn("[survivor] \uB2E4\uB978 \uC0DD\uC874\uC790 \uBAA8\uB378\uC744 \uC4F0\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+e.message),this.failed=!0}}get active(){return this.state==="fight"}spawn(t,e,i,n){return this.ready?(this.body.reset(t,e),this.survival.reset(),this.survival.stamina=55,this.survival.fatigue=60,this.survival.temp=35.6,this.player.yaw=Math.atan2(i-t,n-e),this.player.control=1,this.player.diveBlend=0,this.player.swimBlend=0,this.player.underSwim=0,this.player.crawlBlend=0,this.player.events.length=0,this.survival.events.length=0,this.input.v={x:0,z:1,swim:!0,dive:!1},this.state="fight",this.t=0,this.acc=0,this.burstT=0,this.burstOn=!0,this.phase=1,this.t1=7+Math.random()*2.5,this.character.group.visible=!0,this.character.group.position.copy(this.body.pos),this.character.group.quaternion.copy(this.body.quat),!0):!1}hide(){this.state="none",this.character&&(this.character.group.visible=!1)}update(t,e,i,n,s,r){if(this.state!=="fight"||!this.ready)return;this.t+=t;let o=this.survival,h=this.body,c=this.player,u=Math.hypot(e-h.pos.x,i-h.pos.z);if(this.phase===1&&(this.t>this.t1||u<8.5)&&(this.phase=2,this.t2=this.t+6+Math.random()*3,this.st2=Math.min(o.stamina,26)),this.phase===2&&this.t>this.t2&&(this.phase=3,o.oxygen=0),this.phase===1){this.burstT-=t,this.burstT<=0&&(this.burstOn=!this.burstOn,this.burstT=this.burstOn?1+Math.random()*1.4:.35+Math.random()*.5);let m=Math.atan2(e-h.pos.x,i-h.pos.z)-c.yaw;m=((m+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,c.yaw+=m*(1-Math.exp(-t*1.5))+.25*Math.sin(this.t*1.7)*t,this.input.v={x:0,z:1,swim:this.burstOn,dive:!1}}else if(this.phase===2){let b=qx((this.t2-this.t)/7);o.stamina=Math.min(o.stamina,4+(this.st2-4)*b),this.input.v={x:0,z:0,swim:!1,dive:!1}}else this.input.v={x:0,z:0,swim:!1,dive:!1},o.alive&&(o.oxygen=0,o.drown<.68?o.stamina=Math.min(o.stamina,3):o.stamina>.3&&(o.stamina=.3));h.wind.copy(n),h.breathVol=(o.lung-.55)*3.2,this.acc+=t;let l=0;for(;this.acc>=ua&&l<8;)c.fixedUpdate(ua),h.step(ua),this.acc-=ua,l++;l===8&&(this.acc=0),c.events.length=0;{let b=h.pos.x-e,m=h.pos.z-i,p=Math.hypot(b,m);if(p<.95&&p>1e-4){let v=(.95-p)/p;h.pos.x+=b*v,h.pos.z+=m*v,h.prevPos.x+=b*v,h.prevPos.z+=m*v}}let d=h.mouthDepth>.03;o.update(t,{mouthUnder:d,effort:c.effort,turb:h.turb,subFrac:h.subFrac,storm:r,sudden:c.impact>.8,brace:0}),o.events.length=0,this.phase===3&&o.alive&&o.drown<.3&&(o.drown=Math.min(.3,o.drown+t/6));let f=this.character.group;f.position.lerpVectors(h.prevPos,h.pos,this.acc/ua),f.quaternion.slerpQuaternions(h.prevQuat,h.quat,this.acc/ua),this.anim.update(t),this.character.retarget(),f.updateMatrixWorld(!0),h.syncLimbs(this.character),s&&this.limbs.update(t,s,n,!0);let g=this.waves.heightFast(h.pos.x,h.pos.z);(!o.alive&&g-h.pos.y>9||this.t>120||Math.hypot(h.pos.x-e,h.pos.z-i)>400)&&(this.state="gone",f.visible=!1)}};var it={hdrType:bn,uWaveA:{value:new Float32Array(Ee*4)},uWaveB:{value:new Float32Array(Ee*4)},uBrkA:{value:new Float32Array(yi*4)},uBrkB:{value:new Float32Array(yi*4)},uBrkC:{value:new Float32Array(yi*4)},uTime:{value:0},uStorm:{value:1},uRain:{value:1},uSquall:{value:0},uWindDir:{value:new gt(1,0)},uWindSpeed:{value:28},uGlowDir:{value:new M(-.55,.35,.25).normalize()},uAmbient:{value:new M(.05,.06,.072)},uFlash:{value:0},uFlashDir:{value:new M(1,.35,0).normalize()},uFlashColor:{value:new M(.78,.86,1)},uFlashSheet:{value:0},uFogDensity:{value:1/2600},uNoise:{value:null},uSkyEnv:{value:null},uDetailN:{value:null},uFoamTex:{value:null},uResolution:{value:new gt(1,1)},uSpotPos:{value:new M(0,100,0)},uSpotDir:{value:new M(0,-1,0)},uSpotP:{value:new ne(.99,0,30,0)},uWash:{value:new ne(0,0,1,0)}},da=`
uniform vec3 uSpotPos; uniform vec3 uSpotDir; uniform vec4 uSpotP;
float spotAt(vec3 p, out vec3 L) {
  vec3 d = uSpotPos - p; float ds = length(d); L = d / max(ds, 1e-3);
  if (uSpotP.y < 0.001) return 0.0;
  float x = max(0.0, (1.0 - dot(-L, uSpotDir)) / (1.0 - uSpotP.x));   // 1 at the nominal edge of the beam (never below 0: exp(-0.09 x) must not run away)
  return uSpotP.y * (exp(-1.5 * x * x) + 0.045 * exp(-0.09 * x)) / (1.0 + ds * ds / (uSpotP.z * uSpotP.z));
}
`,Mn="vec3(0.78, 0.88, 1.0)";function af(a=7){let e=ui(a),i=new Uint8Array(256*256*4);for(let s=0;s<i.length;s++)i[s]=e()*256|0;let n=new Ai(i,256,256,pe,Be);return n.wrapS=n.wrapT=ai,n.minFilter=Jt,n.magFilter=Jt,n.generateMipmaps=!1,n.needsUpdate=!0,n}function rf(a=11,t=256){let e=ui(a),i=[];for(let d=0;d<56;d++){let f=2+Math.pow(e(),1.6)*38,g=(e()-.5)*2.4+(e()<.2?Math.PI*e():0),b=Math.round(Math.cos(g)*f),m=Math.round(Math.sin(g)*f);if(b===0&&m===0)continue;let p=Math.hypot(b,m);i.push({m:b,n:m,a:Math.pow(p,-1.35),ph:e()*Math.PI*2})}let n=new Float32Array(t*t),s=new Float32Array(t*t),r=new Float32Array(t*t),o=0;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=f/t,b=d/t,m=0,p=0,v=0;for(let w=0;w<i.length;w++){let R=i[w],y=6.283185307*(R.m*g+R.n*b)+R.ph,E=Math.sin(y);m-=R.a*R.m*E,p-=R.a*R.n*E,v+=R.a*Math.cos(y)}let x=d*t+f;n[x]=m,s[x]=p,r[x]=v,o+=m*m+p*p}o=Math.sqrt(o/(t*t*2));let h=0;for(let d=0;d<r.length;d++)h=Math.max(h,Math.abs(r[d]));let c=new Uint8Array(t*t*4),u=.3/o;for(let d=0;d<t*t;d++)c[d*4]=Math.max(0,Math.min(255,Math.round((n[d]*u*.5+.5)*255))),c[d*4+1]=Math.max(0,Math.min(255,Math.round((s[d]*u*.5+.5)*255))),c[d*4+2]=Math.round((r[d]/h*.5+.5)*255),c[d*4+3]=255;let l=new Ai(c,t,t,pe,Be);return l.wrapS=l.wrapT=ai,l.minFilter=Je,l.magFilter=Jt,l.generateMipmaps=!0,l.anisotropy=8,l.needsUpdate=!0,l}function of(a=23,t=256){let e=ui(a),i=c=>{let u=new Float32Array(c*c*2);for(let d=0;d<u.length;d++)u[d]=e();let l=new Float32Array(t*t*2);for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=(f+.5)/t*c,b=(d+.5)/t*c,m=Math.floor(g),p=Math.floor(b),v=9,x=9;for(let w=-1;w<=1;w++)for(let R=-1;R<=1;R++){let y=m+R,E=p+w,A=(y%c+c)%c,_=(E%c+c)%c,T=y+u[(_*c+A)*2],I=E+u[(_*c+A)*2+1],G=Math.hypot(T-g,I-b);G<v?(x=v,v=G):G<x&&(x=G)}l[(d*t+f)*2]=v,l[(d*t+f)*2+1]=x-v}return l},n=i(9),s=i(23),r=i(51),o=new Uint8Array(t*t*4);for(let c=0;c<t*t;c++){let u=1-Math.min(1,n[c*2+1]*3.2),l=1-Math.min(1,s[c*2+1]*3),d=Math.min(1,u*.62+l*.5),f=Math.min(1,(1-n[c*2]*1.25)*.7+(1-s[c*2]*1.3)*.3),g=1-Math.min(1,r[c*2]*1.6);o[c*4]=Math.round(Math.max(0,d)*255),o[c*4+1]=Math.round(Math.max(0,f)*255),o[c*4+2]=Math.round(Math.max(0,g)*255),o[c*4+3]=255}let h=new Ai(o,t,t,pe,Be);return h.wrapS=h.wrapT=ai,h.minFilter=Je,h.magFilter=Jt,h.generateMipmaps=!0,h.anisotropy=8,h.needsUpdate=!0,h}var ls=`
#define NW ${Ee}
#define NB ${yi}
uniform vec4 uWaveA[NW];   // dir.x, dir.z, k, amplitude
uniform vec4 uWaveB[NW];   // phase(t), steepness, wavelength, -
uniform vec4 uBrkA[NB];    // origin.xz, dir.xz
uniform vec4 uBrkB[NB];    // crest s, height, front scale, back scale
uniform vec4 uBrkC[NB];    // lateral width, curl, breaking, turbulence
`,us=`
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
  // (a big one stands up in front as a wall: the face falls away much faster than a plain hump's, below a rounded top)
  float q = u / sc, kq = u > 0.0 ? clamp((B.y - 8.0) / 12.0, 0.0, 1.0) * 1.6 : 0.0;
  float p = exp(-q * q - kq * q * q * q * q);
  float tu = (u - 2.4 * B.z) / (1.7 * B.z);
  float tr = -0.22 * exp(-tu * tu);
  float h = B.y * env * (p + tr);
  float slope = B.y * env * (-(2.0 * q + 4.0 * kq * q * q * q) / sc * p + 0.22 * exp(-tu * tu) * (2.0 * tu / (1.7 * B.z)));
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
`,vo=`
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
`,hf=`
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
`;var cf=`
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
`,Xx=`
const float PI = 3.14159265359;
vec3 equirectToDir(vec2 uv) {
  float phi = (uv.x - 0.5) * 2.0 * PI;
  float lat = (uv.y - 0.5) * PI;
  return vec3(cos(lat) * cos(phi), sin(lat), cos(lat) * sin(phi));
}
`,yo=`
vec2 dirToEquirect(vec3 d) {
  return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5);
}
`,xo=class{constructor(t,e=512){this.renderer=t;let i={uNoise:it.uNoise,uTime:it.uTime,uStorm:it.uStorm,uWindDir:it.uWindDir,uGlowDir:it.uGlowDir,uFlash:it.uFlash,uFlashDir:it.uFlashDir,uFlashColor:it.uFlashColor,uFlashSheet:it.uFlashSheet};this.domeMat=new se({uniforms:i,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = position;
          vec4 p = projectionMatrix * viewMatrix * vec4(position * 9000.0 + cameraPosition, 1.0);
          gl_Position = p.xyww;   // always at the far plane
        }`,fragmentShader:`
        varying vec3 vDir;
        ${cf}
        void main() { gl_FragColor = vec4(stormSky(normalize(vDir), 1), 1.0); }`,side:Ce,depthWrite:!1,depthTest:!0,fog:!1}),this.dome=new pt(new $r(1,5),this.domeMat),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,this.envRT=new Te(e,e/2,{type:it.hdrType,format:pe,depthBuffer:!1,minFilter:Je,magFilter:Jt,generateMipmaps:!0}),this.envRT.texture.wrapS=ai,this.envRT.texture.wrapT=Ze,this.envMat=new se({uniforms:i,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        varying vec2 vUv;
        ${cf}
        ${Xx}
        void main() { gl_FragColor = vec4(stormSky(equirectToDir(vUv), 0), 1.0); }`,depthTest:!1,depthWrite:!1}),this.envScene=new Ii,this.envQuad=new pt(new Si(2,2),this.envMat),this.envQuad.frustumCulled=!1,this.envScene.add(this.envQuad),this.envCam=new vi(-1,1,1,-1,0,1),it.uSkyEnv.value=this.envRT.texture}updateEnv(){let t=this.renderer,e=t.getRenderTarget();t.setRenderTarget(this.envRT),t.render(this.envScene,this.envCam),t.setRenderTarget(e)}dispose(){this.envRT.dispose(),this.domeMat.dispose(),this.envMat.dispose(),this.dome.geometry.dispose()}};var _o=19,lf=37,ds=new Float32Array([0,0,0,0,0,0,0,0,0,0,.6,2.6,5.2,6.1,7.5,8.8,10,11,11,0,0,0,0,0,0,0,0,0,.6,3,4.9,6.7,7.6,9.1,9.7,10.7,11.6,11.6,0,.7,1.1,1.1,1.1,1,.8,1.1,2.5,3.8,5.5,7.1,8.4,9,9.9,10.8,11.6,12.3,12.3,.7,1.8,2.2,2.5,2.8,2.9,3.2,4,4.7,5.9,7.1,8.6,9.7,10.3,11.2,11.8,12.6,13.1,13.1,1,2.7,3.1,3.6,4.2,4.7,5.3,6.2,6.7,7.5,8.5,9.6,10.9,11.4,11.9,12.5,13.1,13.6,13.6,1.6,3.3,4.6,5.1,5.8,6.7,7.1,7.9,8.5,9.3,10.3,10.9,11.7,12.1,12.6,13.4,13.6,13.8,13.8,2.2,4.4,5.8,6.7,7.4,8.3,8.7,9.5,10,10.7,11.1,11.6,12.4,12.8,13.3,13.5,13.8,14,14,2.8,5.6,7.3,8.5,8.9,9.8,10.2,10.9,11.4,11.8,12.3,12.6,13.2,13.5,13.7,13.9,14,14.2,14.2,3.5,7.4,8.6,9.5,10.4,11.1,11.5,12,12.2,12.6,13,13.5,13.7,13.7,13.9,14.1,14.2,14.2,14.2,4.4,8,10.1,10.8,11.5,12.3,12.4,12.8,13,13.4,13.6,13.8,14,14.1,14.1,14.2,14.2,14.2,14.2,4.8,9.9,11,11.7,12.6,12.9,13,13.3,13.7,13.7,13.8,13.9,14.1,14.2,14.2,14.2,14.2,14.2,14.2,5.4,10.1,12,12.7,13.1,13.5,13.6,13.8,13.8,14,14,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,5.8,10.7,12.6,13.1,13.5,13.8,13.9,14,14,14,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.2,11.3,13.2,13.4,13.7,14,14,14.1,14.2,14.2,14.2,14.2,14.2,14.3,14.3,14.3,14.2,14.2,14.2,6.4,11.9,13.4,13.6,13.9,14,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.6,12.2,13.5,13.8,13.9,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.6,12,13.7,13.8,13.9,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.7,12,13.6,13.8,13.9,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.7,12,13.6,13.8,13.9,14,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.7,12.8,13.6,13.8,13.9,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.6,12,13.6,13.8,13.9,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.5,12.1,13.4,13.7,13.8,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,6.3,11.6,13.1,13.4,13.7,13.9,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,5.9,10.8,12.7,13.1,13.5,13.8,13.9,14,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,14.2,5.4,10.1,12,12.6,13,13.5,13.7,13.8,13.9,14,14.1,14.1,14.1,14.2,14.2,14.2,14.2,14.2,14.2,4.9,9.3,11.2,12.4,12.6,13.1,13.3,13.6,13.7,13.8,13.9,14,14.1,14.1,14.1,14.1,14.2,14.2,14.2,4.3,8.3,10.5,11,11.7,12.4,12.6,13,13.1,13.4,13.5,13.6,13.8,13.8,13.9,13.9,14,14,14,3.7,8.1,9.1,10,10.9,11.4,11.8,12.1,12.4,12.6,12.9,13.1,13.3,13.4,13.5,13.8,13.8,13.8,13.8,3.1,6.4,7.9,8.9,9.5,10.2,10.5,11,11.3,11.7,12,12.3,12.5,12.7,12.9,13.1,13.3,13.5,13.5,0,5,6.8,7.4,8.2,8.9,9.2,9.7,10,10.4,10.7,11,11.4,11.6,12,12.2,12.4,12.6,12.6,0,4.1,5.4,6.4,6.7,7.4,7.7,8.2,8.4,8.8,9.1,9.5,10,10.2,10.6,10.9,11.3,11.8,12.3,0,2.9,4.2,4.8,5.4,5.9,6.1,6.4,6.7,7,7.4,7.6,8,8.4,8.8,9.4,9.7,10.1,10.9,0,2.2,3.3,3.9,4.5,4.8,5,5.1,5.2,5.3,5.6,5.9,6.1,6.5,6.9,7.3,7.9,8.7,9.5,0,2.2,2.7,3.2,3.7,4,4,4.1,4.2,4.1,4.1,4.1,4.2,4.7,5,5.4,6,6.8,7.3,0,1.5,2.4,2.7,3,3.3,3.3,3.3,3.1,3,2.9,2.9,2.9,3.1,3.6,3.8,4.3,6.5,6.5,0,.7,1.9,2.1,2.3,2.3,2.3,2.1,2,1.7,1.4,1.1,.7,.9,1,1.4,2,2.7,3.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);function wo(a,t=0){if(!(a>-90&&a<90))return 0;let e=Math.max(0,Math.min(18,t+9)),i=(a+90)/5,n=Math.min(35,Math.floor(i)),s=Math.min(17,Math.floor(e)),r=i-n,o=e-s,h=n*_o+s,c=h+_o,u=ds[h]+(ds[h+1]-ds[h])*o,l=ds[c]+(ds[c+1]-ds[c])*o;return u+(l-u)*r}var sn=null;function uf(){if(sn)return sn;let a=new Uint8Array(_o*lf);for(let t=0;t<a.length;t++)a[t]=Math.round(Math.min(1,ds[t]/16)*255);return sn=new Ai(a,_o,lf,Mc,Be),sn.minFilter=sn.magFilter=Jt,sn.wrapS=sn.wrapT=Ze,sn.generateMipmaps=!1,sn.needsUpdate=!0,sn}var df=`
float hullHalf(sampler2D T, float z, float y) {
  if (z <= -90.0 || z >= 90.0) return 0.0;
  vec2 uv = vec2((clamp(y, -9.0, 9.0) + 9.5) / 19.0, ((z + 90.0) / 5.0 + 0.5) / 37.0);
  return texture(T, uv).r * 16.0;
}
`;var Kx=`
attribute float aSpacing;
uniform vec2 uCenter;
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${ls}
${vo}
${us}
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
`,jx=`
precision highp float;
uniform sampler2D uSkyEnv;
uniform sampler2D uDetailN;
uniform sampler2D uFoamTex;
uniform sampler2D uNoise;
uniform float uTime;
uniform float uStorm;
uniform float uRain;
uniform float uSquall;      // a squall on him: the surface beaten flat-grey by rain, foam dragged out in long lines down the wind
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
${df}
uniform float uBoatFoam;      // how hard the hull is working the water (0 at rest in still water)
${da}
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${ls}
${hf}
${us}
${yo}
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
      // (down the face of a big one, white streaks pulled out by the water pouring down it)
      if (uBrkB[i].y > 8.0 && pr.w > 0.0) {
        vec2 rr = vPre - uBrkA[i].xy; float lt = -rr.x * uBrkA[i].w + rr.y * uBrkA[i].z;
        float face = smoothstep(0.12, 0.40, pr.z) * (1.0 - smoothstep(0.80, 0.98, pr.z)) * smoothstep(8.0, 18.0, uBrkB[i].y) * env;
        float sk = texture(uFoamTex, vec2(lt * 0.018, pr.w * 0.004 - uTime * 0.05)).g * 0.6 + texture(uFoamTex, vec2(lt * 0.05 + 0.3, pr.w * 0.009 - uTime * 0.08)).r * 0.4;
        bFoam = max(bFoam, face * smoothstep(0.50, 0.92, sk) * 0.45);      // (broad and faint: drawn thin they were white scratches)
      }
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
  if (nearK > 0.0 && uRain > 0.01) dn += rainRipples(vX0, uTime) * 0.32 * nearK * uRain * (1.0 + 0.9 * uSquall);
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

  float rough = 0.05 + 0.085 * uStorm + 0.05 * uSquall;
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
  float foam = max(max(max(max(max(fJ, bFoam), acc), max(max(streak * (0.30 + 0.30 * uSquall), self), washFoam)), max(boatF, shipF)), bodyF);
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
    // (the tops of the seas let the sky's light through and stand out pale against the troughs: it is what gives them their size)
    vec3 body = (uDeepColor * (0.86 + 0.14 * crest) + uScatterColor * (0.10 + 0.84 * crest * (0.30 + 0.70 * thin))) * light;
    // searchlight: the beam goes into the water and comes back out as a glow from inside the lit patch
    // (and the rain-beaten skin of the water scatters some of it straight back: inside the beam the sea is plainly lit)
    // (as the light falls on it: a beam coming in low over the sea - the ship's, from a couple of hundred metres - lights
    // the faces turned to it, not the whole surface, which had gone white as far as its stripe reached)
    body += (uDeepColor * 0.95 + uScatterColor * 0.26 + vec3(0.018, 0.021, 0.024)) * ${Mn} * spot * (0.06 + 0.94 * snl * snl)
          + ${Mn} * spot * 0.020 * (0.15 + 0.85 * snl);

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
      col += ${Mn} * spot * min(Ds, 60.0) * fss * 0.55;
    }
    vec3 foamCol = vec3(0.80, 0.85, 0.87) * foamShade * (amb * (2.4 + 0.8 * N.y) + flashL * flashWrap * 0.8 + ${Mn} * spot * (0.14 + 1.46 * snl));
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
`;function Yx(a,t,e,i){let n=a*t,s=new Float32Array(n*3),r=new Float32Array(n);for(let u=0;u<a;u++){let l=e*(Math.exp(i*u)-1)/i,d=e*Math.exp(i*u),f=Math.PI*2*l/t,g=Math.max(d,f);for(let b=0;b<t;b++){let m=b/t*Math.PI*2,p=(u*t+b)*3;s[p]=Math.cos(m)*l,s[p+1]=0,s[p+2]=Math.sin(m)*l,r[u*t+b]=g}}let o=new Uint32Array((a-1)*t*6),h=0;for(let u=0;u<a-1;u++)for(let l=0;l<t;l++){let d=u*t+l,f=u*t+(l+1)%t,g=(u+1)*t+l,b=(u+1)*t+(l+1)%t;o[h++]=d,o[h++]=f,o[h++]=g,o[h++]=f,o[h++]=b,o[h++]=g}let c=new ce;return c.setAttribute("position",new Bt(s,3)),c.setAttribute("aSpacing",new Bt(r,1)),c.setIndex(new Bt(o,1)),c}var Mo=class{constructor(t,e){this.waves=t,this.uniforms={uWaveA:it.uWaveA,uWaveB:it.uWaveB,uBrkA:it.uBrkA,uBrkB:it.uBrkB,uBrkC:it.uBrkC,uSkyEnv:it.uSkyEnv,uDetailN:it.uDetailN,uFoamTex:it.uFoamTex,uNoise:it.uNoise,uTime:it.uTime,uStorm:it.uStorm,uRain:it.uRain,uSquall:it.uSquall,uWindDir:it.uWindDir,uAmbient:it.uAmbient,uFlash:it.uFlash,uFlashDir:it.uFlashDir,uFlashColor:it.uFlashColor,uFogDensity:it.uFogDensity,uResolution:it.uResolution,uCenter:{value:new gt},uDeepColor:{value:new M(.02,.062,.105)},uScatterColor:{value:new M(.13,.27,.305)},uDetailScroll:{value:new ne},uDetailScroll3:{value:new gt},uDetailStrength:{value:.5},uSigH:{value:10},uSceneColor:{value:null},uSceneDepth:{value:null},uNearFar:{value:new gt(.08,3e4)},uFoamAcc:{value:null},uFoamAccRect:{value:new ne(0,0,1,0)},uPlayerPos:{value:new M(0,-1e3,0)},uPlayerFoam:{value:0},uBody:{value:Array.from({length:11},()=>new ne)},uBodyOn:{value:0},uBoatInv:{value:new Rt},uBoatOn:{value:0},uShipInv:{value:new Rt},uShipOn:{value:0},uShipFoam:{value:0},uShipHull:{value:uf()},uBoatFoam:{value:0},uSpotPos:it.uSpotPos,uSpotDir:it.uSpotDir,uSpotP:it.uSpotP,uWash:it.uWash},this.material=new se({uniforms:this.uniforms,vertexShader:Kx,fragmentShader:jx,side:Ue,defines:{}}),this.mesh=new pt(new ce,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,this.applyProfile(e)}applyProfile(t){this.mesh.geometry.dispose();let e=Math.log(14e3*.0128/t.oceanStep+1)/t.oceanRings*1;this.mesh.geometry=Yx(t.oceanRings,t.oceanSegs,t.oceanStep,this._solveG(t.oceanRings,t.oceanStep,14e3,e));let i={};t.refraction&&(i.USE_REFRACTION=1),t.foamAcc&&(i.USE_FOAM_ACC=1),t.ripples&&(i.USE_RIPPLES=1),this.material.defines=i,this.material.needsUpdate=!0}_solveG(t,e,i,n){let s=Math.max(n,.004);for(let r=0;r<40;r++){let o=Math.exp(s*t),h=e*(o-1)/s-i,c=e*(t*o*s-(o-1))/(s*s);s-=h/c,s<.001&&(s=.001)}return s}update(t,e,i){let n=this.uniforms;n.uCenter.value.set(t.position.x,t.position.z),n.uSigH.value=this.waves.sigHeight;let s=it.uWindDir.value.x,r=it.uWindDir.value.y,o=.6+.4*it.uStorm.value;n.uDetailScroll.value.x+=s*1.9*.047*o*e,n.uDetailScroll.value.y+=r*1.9*.047*o*e,n.uDetailScroll.value.z+=r*1.1*.19*o*e+.011*e,n.uDetailScroll.value.w+=-s*1.1*.19*o*e,n.uDetailScroll3.value.x+=(s*.75-r*.2)*.83*o*e,n.uDetailScroll3.value.y+=(r*.75+s*.2)*.83*o*e,n.uDetailStrength.value=.3+.34*it.uStorm.value,n.uNearFar.value.set(t.near,t.far)}};var Qx=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tPrev;
uniform vec2 uCenter; uniform vec2 uPrevCenter; uniform float uSize; uniform float uDt; uniform float uStorm; uniform float uTexel;
uniform vec3 uPlayer; uniform float uPlayerFoam;
uniform vec4 uBoat; uniform float uBoatFoam;      // boat centre x,z and the direction of its length; how much it is churning
uniform vec4 uSplash[4];      // x, z, ring radius, strength
${ls}
${us}
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
}`,Eo=class{constructor(t,e=1024,i=340){if(this.renderer=t,this.size=e,this.world=i,this.enabled=e>0,!this.enabled)return;let n={type:it.hdrType,format:pe,depthBuffer:!1,minFilter:Jt,magFilter:Jt};this.rt=[new Te(e,e,n),new Te(e,e,n)],this.idx=0,this.center=new gt,this.prevCenter=new gt,this.u={tPrev:{value:null},uCenter:{value:this.center},uPrevCenter:{value:this.prevCenter},uSize:{value:i},uDt:{value:.016},uStorm:it.uStorm,uTexel:{value:i/e},uPlayer:{value:new M},uPlayerFoam:{value:0},uSplash:{value:new Float32Array(16)},uBoat:{value:new ne(0,0,0,1)},uBoatFoam:{value:0},uWaveA:it.uWaveA,uWaveB:it.uWaveB,uBrkA:it.uBrkA,uBrkB:it.uBrkB,uBrkC:it.uBrkC},this.mat=new se({uniforms:this.u,fragmentShader:Qx,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"}),this.scene=new Ii,this.quad=new pt(new Si(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.cam=new vi(-1,1,1,-1,0,1),this.first=!0,this.splashes=[0,1,2,3].map(()=>({x:0,z:0,s:0,age:9})),this.nextSplash=0}addSplash(t,e,i){if(!this.enabled)return;let n=this.splashes[this.nextSplash];this.nextSplash=(this.nextSplash+1)%4,n.x=t,n.z=e,n.s=Math.min(1,i),n.age=0}update(t,e,i,n,s,r){if(!this.enabled){r.uFoamAccRect.value.w=0;return}let o=this.world/this.size,h=Math.round(e/o)*o,c=Math.round(i/o)*o;this.prevCenter.copy(this.first?new gt(h,c):this.center),this.center.set(h,c);let u=this.rt[this.idx],l=this.rt[1-this.idx];this.u.tPrev.value=u.texture,this.u.uDt.value=t,this.u.uPlayer.value.copy(n),this.u.uPlayerFoam.value=s;let d=this.u.uSplash.value;for(let b=0;b<4;b++){let m=this.splashes[b];m.age+=t;let p=m.age<1.3;d[b*4]=m.x,d[b*4+1]=m.z,d[b*4+2]=.25+1.5*m.age*(.6+.6*m.s),d[b*4+3]=p?m.s*Math.exp(-m.age*2):0}let f=this.renderer,g=f.getRenderTarget();f.setRenderTarget(l),f.render(this.scene,this.cam),f.setRenderTarget(g),this.idx=1-this.idx,this.first=!1,r.uFoamAcc.value=l.texture,r.uFoamAccRect.value.set(h,c,this.world,1)}};var To=class{constructor(t,e,i,n,s=4242){this.waves=t,this.body=e,this.player=i,this.spray=n,this.rnd=ui(s),this.auto=!0,this.next=24,this.megaNext=85+this.rnd()*40,this.threat=0,this.crestDist=1e9,this.crestHeight=0,this.crestDx=0,this.crestDz=0,this.whiteout=0,this.onImpact=null,this.onSplash=null,this.onDuck=null,this._splashCool=0}launch(t={}){let e=this.rnd,i=this.body,n=this.waves.storm;return this.waves.spawnBreaker(i.pos.x+i.vel.x*2,i.pos.z+i.vel.z*2,{lead:t.lead!==void 0?t.lead:13+e()*5,height:t.height!==void 0?t.height:dt(8.5,18.5,n)*(.8+.45*e()),width:t.width!==void 0?t.width:110+e()*90,speed:t.speed!==void 0?t.speed:12.5+e()*3.5,breakOffset:t.breakOffset!==void 0?t.breakOffset:-2+e()*2.3,angleOffset:t.angleOffset!==void 0?t.angleOffset:(e()-.5)*.5,frontMin:t.frontMin,back:t.back})}launchMega(t={}){let e=this.rnd,i=this.body;return this.waves.spawnBreaker(i.pos.x,i.pos.z,{mega:!0,lead:t.lead!==void 0?t.lead:19,height:t.height!==void 0?t.height:38+6*e(),width:520,speed:t.speed||24,breakOffset:t.breakOffset!==void 0?t.breakOffset:-.5,angleOffset:(e()-.5)*.2,frontMin:16,back:95})}update(t,e,i,n){let s=this.waves,r=this.body;if(this.auto){this.megaNext-=t;let f=s.breakers.some(g=>g.active&&g.mega);this.megaNext<=0&&s.storm>.6&&!s.breakers.some(g=>g.active)&&(this.launchMega(),this.megaNext=140+this.rnd()*80),this.next-=t,this.next<=0&&(s.storm>.3&&!f&&this.megaNext>14&&this.launch(),this.next=dt(75,24,s.storm)*(.65+.8*this.rnd()))}let o=0,h=1e9,c=0;for(let f of s.breakers){if(!f.active)continue;let g=r.pos.x-f.ox,b=r.pos.z-f.oz,m=g*f.dx+b*f.dz-f.s,p=-g*f.dz+b*f.dx,v=Math.exp(-(p*p)/(f.width*f.width));m>-10&&m<h&&(h=m,c=f.height*v,this.crestHMax=f.hMax*v,this.crestSpeed=f.speed,this.crestMega=f.mega,this.crestDx=f.dx,this.crestDz=f.dz);let x=ct(1-Math.abs(m)/(f.mega?320:120));o=Math.max(o,x*ct(f.height*v/9))}this.threat+=(o-this.threat)*(1-Math.exp(-t*2.5)),this.crestDist=h,this.crestHeight=c,h>1e8&&(this.crestHMax=0);let u=s.sample(e.x,e.z,this._s||(this._s={h:0})),l=Math.max(u.aer,(u.lip||0)*1.1)*ct(1-(e.y-u.h)/7)*(1-i);this.whiteout+=(Math.min(.93,l*1.6)-this.whiteout)*(1-Math.exp(-t*(l>this.whiteout?14:2.5)));let d=this.player.events;for(let f=0;f<d.length;f++){let g=d[f];g.type==="impact"&&(this.spray.burst(r.pos.x,r.surfaceH+.2,r.pos.z,g.strength*2.2,n,g.dir.x,g.dir.z),this.onImpact&&this.onImpact(g)),g.type==="duck"&&this.onDuck&&this.onDuck(g)}d.length=0,this._splashCool-=t,r.splash>3&&this._splashCool<=0&&(this._splashCool=.6,this.spray.burst(r.splashPos.x,r.splashPos.y,r.splashPos.z,Math.min(3.5,(r.splash-2.4)*.9),n),this.onSplash&&this.onSplash(r.splash,r.splashPos))}};var pl={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new gt(1/1024,1/512)}},vertexShader:`

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
	`};var Zx="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Jx=`
varying vec2 vUv; uniform sampler2D tScene; uniform float uThreshold; uniform float uKnee;
void main(){
  vec3 c = textureLod(tScene, vUv, 1.0).rgb;
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-5);
  float w = max(soft, br - uThreshold) / max(br, 1e-5);
  gl_FragColor = vec4(min(c * w, vec3(40.0)), 1.0);
}`,$x=`
varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 a = texture(tSrc, vUv + t * vec2(-1.0, -1.0)).rgb, b = texture(tSrc, vUv + t * vec2(1.0, -1.0)).rgb;
  vec3 c = texture(tSrc, vUv + t * vec2(-1.0, 1.0)).rgb, d = texture(tSrc, vUv + t * vec2(1.0, 1.0)).rgb;
  vec3 e = texture(tSrc, vUv).rgb;
  gl_FragColor = vec4((a + b + c + d) * 0.2 + e * 0.2, 1.0);
}`,t1=`
varying vec2 vUv; uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 s = texture(tSrc, vUv + t * vec2(-1.0, 0.0)).rgb + texture(tSrc, vUv + t * vec2(1.0, 0.0)).rgb
         + texture(tSrc, vUv + t * vec2(0.0, -1.0)).rgb + texture(tSrc, vUv + t * vec2(0.0, 1.0)).rgb;
  s = s * 0.125 + texture(tSrc, vUv).rgb * 0.5;
  gl_FragColor = vec4(s + texture(tAdd, vUv).rgb, 1.0);
}`,e1=`
varying vec2 vUv; uniform sampler2D tScene; uniform sampler2D tPrev; uniform float uDt; uniform float uReset;
uniform vec3 uAmbient; uniform float uFlash;
void main(){
  vec3 c = textureLod(tScene, vec2(0.5), 20.0).rgb;
  float lum = max(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
  // The eye adapts to the light of the sky and the sea, not to a lamp. A searchlight pool (or a ship's floodlights)
  // filling a part of the picture raised the average six-fold and the eye closed down 2.5 times: everything round the
  // pool went black. So what it measures is held to a little above what the sky's light alone (and a lightning
  // flash, which lights the whole world) would give: lit things are bright, and the rest stays as it was.
  float skyLum = dot(uAmbient, vec3(0.2126, 0.7152, 0.0722)) + 0.11 * uFlash;
  lum = min(lum, skyLum * 0.6);
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
}`,i1=`
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
}`,So=class{constructor(t){this.renderer=t,this.fsScene=new Ii,this.fsCam=new vi(-1,1,1,-1,0,1),this.fsQuad=new pt(new Si(2,2),null),this.fsQuad.frustumCulled=!1,this.fsScene.add(this.fsQuad),this.w=2,this.h=2,this.levels=5,this.useOpaque=!0;let e=(s,r)=>new se({uniforms:r,vertexShader:Zx,fragmentShader:s,depthTest:!1,depthWrite:!1});this.matPre=e(Jx,{tScene:{value:null},uThreshold:{value:.16},uKnee:{value:.12}}),this.matDown=e($x,{tSrc:{value:null},uTexel:{value:new gt}}),this.matUp=e(t1,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new gt}}),this.matAdapt=e(e1,{tScene:{value:null},tPrev:{value:null},uDt:{value:.016},uReset:{value:1},uAmbient:it.uAmbient,uFlash:it.uFlash}),this.u={tScene:{value:null},tDepth:{value:null},tBloom:{value:null},tAdapt:{value:null},tLens:{value:null},uNoise:it.uNoise,uResolution:{value:new gt},uNearFar:{value:new gt(.08,3e4)},uTime:{value:0},uCamPos:{value:new M},uCamRight:{value:new M},uCamUp:{value:new M},uCamFwd:{value:new M},uTanFov:{value:new gt},uPrevViewProj:{value:new Rt},uMotionBlur:{value:0},uBloom:{value:.55},uExposureKey:{value:.125},uExposureRange:{value:new gt(.5,7)},uExposureBias:{value:1},uWaterPlane:{value:new ne(0,1,0,0)},uUnderAmount:{value:0},uUnderColor:{value:new M(.004,.012,.018)},uUnderExt:{value:new M(.42,.2,.16)},uAeration:{value:0},uUnderDistort:{value:.012},uShaftDir:{value:new M(0,1,0)},uShaft:{value:0},uLensStrength:{value:.05},uSheet:{value:0},uBlur:{value:0},uDofFocus:{value:10},uDofAmount:{value:0},uVignette:{value:.42},uGrain:{value:.028},uTunnel:{value:0},uDesat:{value:0},uFade:{value:0},uWhiteout:{value:0},uGradeMix:{value:1}},this.matComposite=e(i1,this.u),this.matFXAA=new se({uniforms:{tDiffuse:{value:null},resolution:{value:new gt}},vertexShader:pl.vertexShader,fragmentShader:pl.fragmentShader,depthTest:!1,depthWrite:!1}),this.matCopy=e("varying vec2 vUv; uniform sampler2D tSrc; void main(){ gl_FragColor = texture(tSrc, vUv); }",{tSrc:{value:null}});let i=new Ai(new Uint8Array([0,0,0,0]),1,1);i.needsUpdate=!0,this.blankLens=i,this.u.tLens.value=i,this.rtScene=null,this.rtOpaque=null,this.rtLDR=null,this.down=[],this.up=[];let n={type:it.hdrType,format:pe,depthBuffer:!1,minFilter:Ie,magFilter:Ie};this.adapt=[new Te(1,1,n),new Te(1,1,n)],this.adaptIdx=0,this.adaptReset=!0,this.fxaa=!0,this.prevViewProj=new Rt,this._vp=new Rt}setSize(t,e,i){if(t=Math.max(2,Math.floor(t)),e=Math.max(2,Math.floor(e)),!i&&t===this.w&&e===this.h&&this.rtScene)return;this.w=t,this.h=e,(h=>h.forEach(c=>c&&c.dispose()))([this.rtScene,this.rtOpaque,this.rtLDR,...this.down,...this.up]);let s={type:it.hdrType,format:pe,magFilter:Jt};this.rtScene=new Te(t,e,{...s,minFilter:Je,generateMipmaps:!0,depthBuffer:!0}),this.rtScene.depthTexture=new es(t,e),this.rtOpaque=new Te(t,e,{...s,minFilter:Jt,depthBuffer:!0}),this.rtOpaque.depthTexture=new es(t,e),this.rtLDR=new Te(t,e,{type:Be,format:pe,minFilter:Jt,magFilter:Jt,depthBuffer:!1}),this.down=[],this.up=[];let r=t>>1,o=e>>1;for(let h=0;h<this.levels;h++){r=Math.max(2,r),o=Math.max(2,o);let c={...s,minFilter:Jt,depthBuffer:!1};this.down.push(new Te(r,o,c)),h<this.levels-1&&this.up.push(new Te(r,o,c)),r>>=1,o>>=1}it.uResolution.value.set(t,e),this.adaptReset=!0}_pass(t,e){this.fsQuad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.fsScene,this.fsCam)}render(t,e,i,n){let s=this.renderer,r=this.u;this.useOpaque&&t(this.rtOpaque,!0),t(this.rtScene,!1),this.matPre.uniforms.tScene.value=this.rtScene.texture,this._pass(this.matPre,this.down[0]);for(let d=1;d<this.levels;d++)this.matDown.uniforms.tSrc.value=this.down[d-1].texture,this.matDown.uniforms.uTexel.value.set(1/this.down[d-1].width,1/this.down[d-1].height),this._pass(this.matDown,this.down[d]);let o=this.down[this.levels-1];for(let d=this.levels-2;d>=0;d--)this.matUp.uniforms.tSrc.value=o.texture,this.matUp.uniforms.tAdd.value=this.down[d].texture,this.matUp.uniforms.uTexel.value.set(1/o.width,1/o.height),this._pass(this.matUp,this.up[d]),o=this.up[d];let h=this.adapt[this.adaptIdx],c=this.adapt[1-this.adaptIdx];this.matAdapt.uniforms.tScene.value=this.rtScene.texture,this.matAdapt.uniforms.tPrev.value=h.texture,this.matAdapt.uniforms.uDt.value=i,this.matAdapt.uniforms.uReset.value=this.adaptReset?1:0,this._pass(this.matAdapt,c),this.adaptIdx=1-this.adaptIdx,this.adaptReset=!1,r.tScene.value=this.rtScene.texture,r.tDepth.value=this.rtScene.depthTexture,r.tBloom.value=o.texture,r.tAdapt.value=c.texture,r.uResolution.value.set(this.w,this.h),r.uNearFar.value.set(e.near,e.far),r.uTime.value=n;let u=e.matrixWorld.elements;r.uCamRight.value.set(u[0],u[1],u[2]),r.uCamUp.value.set(u[4],u[5],u[6]),r.uCamFwd.value.set(-u[8],-u[9],-u[10]),r.uCamPos.value.copy(e.position);let l=Math.tan(nn.degToRad(e.fov)*.5);r.uTanFov.value.set(l*e.aspect,l),r.uPrevViewProj.value.copy(this.prevViewProj),this._vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.prevViewProj.copy(this._vp),this.fxaa?(this._pass(this.matComposite,this.rtLDR),this.matFXAA.uniforms.tDiffuse.value=this.rtLDR.texture,this.matFXAA.uniforms.resolution.value.set(1/this.w,1/this.h),this._pass(this.matFXAA,null)):this._pass(this.matComposite,null)}};var n1=`
attribute vec4 aDrop;       // x, y (0..1), radius (in screen heights), strength
uniform float uAspect;
varying vec2 vP; varying float vS;
void main() {
  vP = position.xy; vS = aDrop.w;
  vec2 c = aDrop.xy * 2.0 - 1.0;
  gl_Position = vec4(c + position.xy * vec2(aDrop.z / uAspect, aDrop.z) * 2.0 * vec2(1.0, 1.18), 0.0, 1.0);
}`,s1=`
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
}`,Ao=class{constructor(t,e=120){this.renderer=t,this.max=e,this.rt=new Te(640,360,{type:it.hdrType,format:pe,depthBuffer:!1,minFilter:Jt,magFilter:Jt}),this.x=new Float32Array(e),this.y=new Float32Array(e),this.r=new Float32Array(e),this.vy=new Float32Array(e),this.vx=new Float32Array(e),this.life=new Float32Array(e),this.wait=new Float32Array(e),this.head=0,this.rainAcc=0,this.count=0,this.trail=new Float32Array(e);let i=new en;i.setAttribute("position",new Bt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),this.aDrop=new ti(new Float32Array(e*4),4),this.aDrop.setUsage(Wi),i.setAttribute("aDrop",this.aDrop),i.instanceCount=0,this.dropMat=new se({uniforms:{uAspect:{value:16/9}},vertexShader:n1,fragmentShader:s1,transparent:!0,depthTest:!1,depthWrite:!1,blending:Fn}),this.drops=new pt(i,this.dropMat),this.drops.frustumCulled=!1,this.fadeMat=new se({uniforms:{uK:{value:.95}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform float uK; void main(){ gl_FragColor = vec4(uK); }",transparent:!0,depthTest:!1,depthWrite:!1,blending:xc,blendEquation:pn,blendSrc:ao,blendDst:yc,blendSrcAlpha:ao,blendDstAlpha:ka}),this.fade=new pt(new Si(2,2),this.fadeMat),this.fade.frustumCulled=!1,this.scene=new Ii,this.scene.add(this.fade,this.drops),this.fade.renderOrder=0,this.drops.renderOrder=1,this.cam=new vi(-1,1,1,-1,0,1),this.needClear=!0,this.sheet=0}get texture(){return this.rt.texture}spawn(t,e=0){for(let i=0;i<t;i++){let n=this.head;this.head=(this.head+1)%this.max,this.x[n]=Math.random(),this.y[n]=Math.pow(Math.random(),.8);let s=Math.random()<.14+.26*e;this.r[n]=s?.011+Math.random()*.015:.003+Math.random()*.008,this.vy[n]=0,this.vx[n]=0,this.wait[n]=s?Math.random()*1.6:1e9,this.life[n]=s?5.5:1.8+Math.random()*3.2}}wipe(){this.life.fill(0),this.needClear=!0,this.sheet=0}update(t,e,i,n,s=0){if(s>.01)for(let l=0;l<this.max;l++)this.life[l]>0&&(this.life[l]-=t*3.5*s);if(this.sheet=Math.max(0,this.sheet-t*3*s),i)(this.count>0||!this.needClear)&&this.wipe();else{this.rainAcc+=t*e;let l=Math.floor(this.rainAcc);this.rainAcc-=l,l>0&&this.spawn(Math.min(l,6))}this.sheet=Math.max(0,this.sheet-t*1);let r=this.aDrop.array,o=0;for(let l=0;l<this.max;l++){if(this.life[l]<=0)continue;if(this.life[l]-=t,this.wait[l]<1e8&&(this.wait[l]-=t,this.wait[l]<=0)){if(this.vy[l]=Math.min(.2,this.vy[l]+t*(.12+4*this.r[l])),Math.random()<t*.8&&(this.vy[l]*=.2,this.wait[l]=Math.random()*.5),this.vx[l]+=(Math.random()-.5)*t*.5,this.vx[l]*=Math.exp(-t*4),this.y[l]-=this.vy[l]*t,this.x[l]+=this.vx[l]*t,this.trail[l]+=this.vy[l]*t,this.trail[l]>.035+this.r[l]){this.trail[l]=0;let g=this.head;this.head=(this.head+1)%this.max,g!==l&&this.life[g]<=0&&(this.x[g]=this.x[l]+(Math.random()-.5)*.004,this.y[g]=this.y[l]+this.r[l]*1.2,this.r[g]=.0035+Math.random()*.003,this.vy[g]=0,this.vx[g]=0,this.wait[g]=1e9,this.life[g]=.9+Math.random()*1.2,this.trail[g]=0)}if(this.r[l]-=t*.0012,this.y[l]<-.06||this.r[l]<.004){this.life[l]=0;continue}}let d=Math.min(1,this.life[l]/.8),f=o*4;r[f]=this.x[l],r[f+1]=this.y[l],r[f+2]=this.r[l]*(.6+.4*d),r[f+3]=d,o++}this.count=o,this.drops.geometry.instanceCount=o,this.aDrop.needsUpdate=!0,this.dropMat.uniforms.uAspect.value=n,this.fadeMat.uniforms.uK.value=Math.exp(-t*22);let h=this.renderer,c=h.getRenderTarget(),u=h.autoClear;h.setRenderTarget(this.rt),this.needClear&&(h.setClearColor(0,0),h.clear(),this.needClear=!1),h.autoClear=!1,h.render(this.scene,this.cam),h.autoClear=u,h.setRenderTarget(c)}};var fa={cinematic:{key:"cinematic",label:"CINEMATIC",oceanRings:512,oceanSegs:512,oceanStep:.28,envSize:512,maxPixels:3686400,minScale:.6,refraction:!0,foamAcc:1024,ripples:!0,motionBlur:!0,fxaa:!0,bloomLevels:5,rain:26e3,splashes:2600,spray:9e3,bubbles:1400,motes:2600,lensRes:.5,lensDrops:150},high:{key:"high",label:"HIGH",oceanRings:384,oceanSegs:384,oceanStep:.36,envSize:256,maxPixels:2073600,minScale:.55,refraction:!0,foamAcc:512,ripples:!0,motionBlur:!1,fxaa:!0,bloomLevels:5,rain:15e3,splashes:1500,spray:5e3,bubbles:900,motes:1500,lensRes:.5,lensDrops:100},performance:{key:"performance",label:"PERFORMANCE",oceanRings:256,oceanSegs:256,oceanStep:.5,envSize:128,maxPixels:921600,minScale:.5,refraction:!1,foamAcc:0,ripples:!1,motionBlur:!1,fxaa:!1,bloomLevels:4,rain:6e3,splashes:500,spray:2e3,bubbles:400,motes:600,lensRes:.35,lensDrops:60}},Ro=class{constructor(t){this.renderer=t,this.profile=fa.cinematic,this.scale=1,this.frameMs=16.7,this.fps=60,this._acc=0,this._slow=0,this._fast=0,this.adaptive=!0,this.info=this.detect()}detect(){let t=this.renderer.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),i=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown",n=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),s=/SwiftShader|llvmpipe|Software|Basic Render/i.test(i),r=/Intel\(R\) (U?HD|Iris)(?! Xe)|Mali|Adreno|PowerVR/i.test(i);return{webgl2:this.renderer.capabilities.isWebGL2,webgpu:typeof navigator<"u"&&!!navigator.gpu,halfFloat:!!t.getExtension("EXT_color_buffer_float")||!!t.getExtension("EXT_color_buffer_half_float"),gpu:i,mobile:n,software:s,weak:r}}pickDefault(){let t=this.info;return t.software||t.mobile?"performance":t.weak?"high":"cinematic"}setProfile(t){this.profile=fa[t]||fa.cinematic,this.scale=1,this._slow=this._fast=0}renderSize(t,e){let i=this.profile.maxPixels,n=Math.min(1,Math.sqrt(i/Math.max(1,t*e)));return n*=this.scale,[Math.max(320,Math.round(t*n)),Math.max(180,Math.round(e*n))]}update(t){let e=t*1e3;return this.frameMs+=(e-this.frameMs)*.06,this.fps=1e3/this.frameMs,this.adaptive?(this.frameMs>21.5?(this._slow+=t,this._fast=0):this.frameMs<13.5?(this._fast+=t,this._slow=0):(this._slow*=.9,this._fast*=.9),this._slow>1.5&&this.scale>this.profile.minScale?(this.scale=Math.max(this.profile.minScale,this.scale-.08),this._slow=0,!0):this._fast>6&&this.scale<1?(this.scale=Math.min(1,this.scale+.05),this._fast=0,!0):!1):!1}};var pa=new M(0,1,0),ml=new _t,Co=class{constructor(t,e,i,n,s,r){this.camera=t,this.ch=e,this.body=i,this.player=n,this.waves=s,this.input=r,this.target=1,this.blend=1,this.yaw=Math.PI,this.pitch=-.08,this.sens=.0021,this.intensity=1,this.qd=new _t,this.pivot=new M,this.tpPos=new M,this.inited=!1,this.arm=4.6,this.under=0,this.fovKick=0,this.threat=0,this.crestDist=1e9,this.crestHeight=0,this.crestDx=0,this.crestDz=1,this.waveK=0,this.landK=0,this.jolt=0,this.joltV=0,this._impWas=0,this.troughK=0,this.crestK=0,this.bigK=0,this.churn=0,this.spin=0,this.fpIn=0,this.fpLiftW=0,this.fpWallK=0,this.crestHMax=0,this.fpWatch=0,this.yawOffset=0,this.vista=0,this.vistaT=0,this.vistaNext=26+Math.random()*18,this.vistaOk=!1,this.orbit=0,this.eye=new M,this.chest=new M,this.surfaceAtCam=ri(),this.script=null,this.auto=!0,this.interest={x:0,z:0,w:0},this.portrait=0,this.autoT=0,this.drift=0,this.roll=0,this.push=0,this.time=0,this.shiver=0,this.cine=null,this._m=new gt,this._f=new M,this._v=new M,this._v2=new M,this._q=new _t,this._q2=new _t,this._mat=new Rt,this._s=ri(),this._fp=new M,this._qfp=new _t,this._qtp=new _t,this._qh=new _t,this._qhS=new _t,this._hasH=!1}toggle(){this.target=this.target>.5?0:1}setMode(t){this.target=t==="first"?0:1}get mode(){return this.target>.5?"third":"first"}lookQuat(t,e,i){let n=Math.cos(e);return this._f.set(Math.sin(t)*n,Math.sin(e),Math.cos(t)*n),this._mat.lookAt(this._v.set(0,0,0),this._f,pa),i.setFromRotationMatrix(this._mat)}update(t){let e=this.camera,i=this.body,n=this.player,s=this.input.consumeMouse(this._m);this.time+=t,this.input.enabled&&(this.yaw-=s.x*this.sens,this.pitch-=s.y*this.sens);let r=performance.now()/1e3,o=Math.abs(s.x)+Math.abs(s.y)>.5||r-this.input.lastLook<2.5,h=this.input.enabled&&this.input.busy(),c=this.crestDist===void 0?1e9:this.crestDist,u=150*Math.max(1,(this.crestHMax||0)/22),l=c>2&&c<u+10?ct(((this.crestHMax||0)-10)/8)*ct((u-c)/40):0;this.fpIn+=(l-this.fpIn)*(1-Math.exp(-t*(l>this.fpIn?1.4:3)));let d=(1-this.blend)*this.fpIn;if(this.auto&&this.input.enabled&&!this.script&&!o){if(h){let O=Math.atan2(n.heading.x,n.heading.z),D=Math.abs(this.input.axisX())>.25&&this.input.axisZ()>-.25,B=O-this.yaw;if(B=((B+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,D&&Math.abs(B)>.15&&Math.abs(B)<2){let Y=B*(1-Math.exp(-t*1.1));this.yaw+=Y,this.yawOffset+=Y}this.autoT=0}else{this.autoT+=t;let O=Math.min(1,this.autoT/1.5);if(this.interest.w>.05){let B=Math.atan2(this.interest.x-i.pos.x,this.interest.z-i.pos.z)-this.yaw;B=((B+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,this.yaw+=Math.sign(B)*Math.min(Math.abs(B),(.25+.9*this.interest.w)*t)*O}else this.drift+=t*.13,this.yaw+=(.045*Math.sin(this.drift)+.03*Math.sin(this.drift*2.3+1))*t*O}let k=-.07+.24*this.threat+.2*this.waveK+.16*this.landK-.1*this.under+.22*this.bigK*(this.waveK+this.landK)+(1-this.blend)*.3*this.bigK*(this.waveK+this.landK);d>.01&&c>2&&(k=Math.max(k,d*.85*Math.atan2(Math.max(0,.9*(this.crestHeight||0)-.3),Math.max(c,2)))),(!h||n.underSwim<.5)&&(this.pitch+=(k-this.pitch)*(1-Math.exp(-t*(h?.5:1.1)*(1+1.5*d))))}else this.autoT=0;let f=Math.max(this.bigK*this.waveK,.6*d);if(!this.script&&!o&&f>.12&&this.crestDist<(d>.2?u:120)&&this.crestDist>2){let O=Math.atan2(-this.crestDx,-this.crestDz)-this.yaw;O=((O+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;let D=O*(1-Math.exp(-t*2.6*f));this.yaw+=D,h&&(this.yawOffset+=D)}h||(this.yawOffset=0);{let k=this.input.axisX(),O=this.input.axisZ(),D=h?(k>.25?1:k<-.25?-1:0)*3+(O>.25?1:O<-.25?-1:0):99;D!==this._kv&&(h&&this._kv!==void 0&&this._kv!==99&&(this.yawOffset=0),this._kv=D)}this.script&&(this.yaw=this.script.yaw,this.pitch=this.script.pitch),(this.closeS||0)>.02&&!this.script&&(this.pitch+=(-.18-this.pitch)*(1-Math.exp(-t*2.5*this.closeS))),this.pitch=Ri(this.pitch,-1.45,1.45),n.yaw=this.yaw-this.yawOffset,n.pitch=this.pitch;let g=1/.85;this.blend=Ri(this.blend+Math.sign(this.target-this.blend)*t*g,0,1),Math.abs(this.target-this.blend)<t*g&&(this.blend=this.target);let b=this.blend*this.blend*(3-2*this.blend),m=ct(1-n.control)*.85+n.tumble*.4,p=ct(m),v=this.intensity*dt(.2,1,p)*dt(1,.42,b),x=i.angVel,w=x.length();w>1e-5&&v>0&&(this._q.setFromAxisAngle(this._v.copy(x).multiplyScalar(1/w),w*v*t),this.qd.premultiply(this._q));let R=dt(.32,2.6,p);this.qd.slerp(ml,1-Math.exp(-t/R)).normalize(),this.ch.eyeWorld(this.eye),this.fpLift&&(this.eye.y+=this.fpLift);{let k=ct((c-2.5)/3.5),O=(1-(n.diveBlend||0))*ct((1-this.blend)*4),D=Math.max(this.fpIn*k,this.fpWatch||0)*O,B=0;if(D>.01){let Y=this.waves.heightFast(this.eye.x,this.eye.z)+.3-this.eye.y;B=Math.min(this.fpIn*k>.05?2.8:.6,Math.max(0,Y))*D}this.fpLiftW+=(B-this.fpLiftW)*(1-Math.exp(-t*(B>this.fpLiftW?16:7))),this.eye.y+=this.fpLiftW,this.fpWallK=Math.max(d*k,(1-this.blend)*(this.fpWatch||0))*(1-(n.diveBlend||0))}this.chest.setFromMatrixPosition(this.ch.bones[2].matrixWorld),this.inited||(this.pivot.copy(this.chest),this.inited=!0,this.tpPos.copy(this.chest).add(this._v.set(0,1.2,4)));{this.ch.bones[4].getWorldQuaternion(this._qh);{let vt=this._v.set(1,0,0).applyQuaternion(this.ch.bones[2].getWorldQuaternion(this._q2)),Et=this._v2.set(0,0,1).applyQuaternion(this._qh);if(Et.addScaledVector(vt,-Et.dot(vt)),Et.lengthSq()>1e-4){Et.normalize(),vt.addScaledVector(Et,-vt.dot(Et)).normalize();let xt=this._f.crossVectors(Et,vt);this._qh.setFromRotationMatrix(this._mat.makeBasis(vt,xt,Et))}}this._hasH||(this._qhS.copy(this._qh),this._hasH=!0),this._qhS.slerp(this._qh,1-Math.exp(-t*12));let O=Math.cos(this.pitch),D=this.pitch-.16*(n.crawlBlend||0),B=Math.cos(D),Y=this._v2.set(Math.sin(this.yaw)*B,Math.sin(D),Math.cos(this.yaw)*B).applyQuaternion(this._q2.copy(this._qhS).invert()),Q=Math.atan2(Y.x,Y.z),X=Math.asin(Ri(Y.y,-1,1)),ot=Ri(Q,-.75,.75),nt=Ri(X,-.45-.42*(1-(n.crawlBlend||0))*(1-(n.underSwim||0)),.9),lt=Math.max(Math.abs(Q-ot),Math.abs(X-nt));Y.set(Math.sin(ot)*Math.cos(nt),Math.sin(nt),Math.cos(ot)*Math.cos(nt)).applyQuaternion(this._qhS);let Z=ct(p),kt=this._f.set(0,1,0).applyQuaternion(this._qhS).multiplyScalar(Z);kt.y+=1-Z,kt.lengthSq()<1e-4&&kt.set(0,1,0),kt.normalize(),Math.abs(kt.dot(Y))>.995&&kt.set(0,0,1).applyQuaternion(this._qhS),this._mat.lookAt(this._v.set(0,0,0),Y,kt),this._qfp.setFromRotationMatrix(this._mat).premultiply(this._q.copy(ml).slerp(this.qd,.5)),n.fp=this.blend<.5}this._fp.copy(this.eye);let y=1-Math.exp(-t*10),E=1-Math.exp(-t*5.5);this.pivot.x+=(this.chest.x-this.pivot.x)*y,this.pivot.z+=(this.chest.z-this.pivot.z)*y,this.pivot.y+=(this.chest.y+.22-this.pivot.y)*E;let A=ct(this.waves.sigHeight/16);this.push+=((this.auto?ct((45-(this.oxygen===void 0?100:this.oxygen))/40):0)-this.push)*(1-Math.exp(-t*.8));{let k=ct(((this.crestHeight||0)-6)/7),O=this.crestDist===void 0?1e9:this.crestDist,D=this.threat*k*(O>1?1:0),B=k*(O>1&&O<26?ct(1-O/26):0);this.bigK+=(ct(((this.crestHeight||0)-11)/10)*(O>-4&&O<160?1:0)-this.bigK)*(1-Math.exp(-t*1.5)),this.waveK+=(D-this.waveK)*(1-Math.exp(-t*(D>this.waveK?2.2:2.6))),this.landK+=(B-this.landK)*(1-Math.exp(-t*(B>this.landK?5:3.2)));let Y=n.impact||0;Y>1&&this._impWas<=1&&(this.joltV+=7*Math.min(2.2,Y)*this.intensity),this._impWas=Y;let Q=(i.surfaceH||0)/Math.max(3,this.waves.sigHeight*.5);this.troughK+=(ct(-Q*1.25-.12)-this.troughK)*(1-Math.exp(-t*1.3)),this.crestK+=(ct(Q*1.25-.2)-this.crestK)*(1-Math.exp(-t*1.3)),this.auto&&this.vistaOk&&!o&&this.input.enabled&&(this.vistaNext-=t,this.vistaNext<=0&&this.vistaT<=0&&(this.vistaT=7.5,this.vistaNext=48+Math.random()*34)),(!this.vistaOk||o)&&(this.vistaT=Math.min(this.vistaT,1.2)),this.vistaT>0&&(this.vistaT-=t);let X=this.vistaT>0?Math.min(1,(7.5-this.vistaT)/2.4)*Math.min(1,this.vistaT/1.9):0;this.vista+=(X*X*(3-2*X)-this.vista)*(1-Math.exp(-t*3));let ot=ct((n.tumble||0)*1.4+ct(((n.impact||0)-1)/1.4))*(this.under>.3||(n.air||0)>.3?1:.55);if(this.churn+=(ot-this.churn)*(1-Math.exp(-t*(ot>this.churn?9:1.4))),this.churn>.02)this.spin+=t*this.churn*(2.6+1.4*Math.sin(this.time*.9));else{let Z=((this.spin+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;this.spin=Math.abs(Z)<.005?0:Z*Math.exp(-t*1.8)}let nt=31,lt=.16;this.joltV+=(-nt*nt*this.jolt-2*lt*nt*this.joltV)*t,this.jolt+=this.joltV*t}let _=(3.5+.7*A+1.8*ct(n.impactPeak-.6)+1.3*this.threat+3*this.waveK-2.6*this.landK+1.5*this.crestK-.5*this.troughK+20*this.vista+this.bigK*(1.3*this.waveK-1*this.landK)-2.2*this.churn+2.8*(n.air||0)-.5*(n.crawlBlend||0)-1.2*this.push)*(1+.22*this.portrait)+(this.armAdd||0);this.closeS=(this.closeS||0)+((this.closeK||0)-(this.closeS||0))*(1-Math.exp(-t*2.5)),this.arm+=(dt(_,2.2,.9*this.closeS)-this.arm)*(1-Math.exp(-t*(1.6+2.4*this.closeS)));let T=Math.cos(this.pitch),I=this.yaw+this.orbit+this.spin,G=this._f.set(Math.sin(I)*T,Math.sin(this.pitch),Math.cos(I)*T),q=this._v,U=this.holdAbove?0:ct(((n.diveBlend||0)-.3)/.5)*_e(.05,.35,i.eyeDepth);this.diveK=(this.diveK||0)+(U-(this.diveK||0))*(1-Math.exp(-t*(U>(this.diveK||0)?9:i.eyeDepth<.05?7:1.8)));let z=this.holdAbove?0:Math.max(_e(.7,1.8,i.eyeDepth),this.diveK);this.under+=(z-this.under)*(1-Math.exp(-t*(z>this.under?this.diveK>.3?10:3.5:2.2)));let J=(this.armOverride||this.arm)*(1-.3*this.diveK),V=.5;for(let k=0;k<5&&(q.copy(this.pivot).addScaledVector(G,-J),q.y+=((.62+.16*J)*Math.max(.2,1-.45*this.threat*(this.auto?1:0)-.38*this.waveK-.42*this.troughK+.35*this.crestK)+5*this.vista+.25*this.portrait)*(1-.8*this.diveK),!(this.under>.98));k++){let O=this.waves.sample(q.x,q.z,this._s).h,D=(q.x+this.pivot.x)*.5,B=(q.z+this.pivot.z)*.5,Y=this.waves.sample(D,B,this._s).h,Q=(q.y+this.pivot.y+.3)*.5,X=Math.max(O+V-q.y,Y+.2-Q);if(X>0&&this.bigK*Math.max(this.waveK,this.landK)>.25&&this.under<.5&&X<4){q.y+=X;break}if(X<=0||J<=1.7){X>0&&(q.y+=X*(1-this.under));break}J=Math.max(1.7,J*.78)}if(this.armNow=J,this.diveK>.02){let k=this.waves.sample(q.x,q.z,this._s).h-.45;q.y>k&&(q.y+=(k-q.y)*this.diveK)}if(this.tpPos.lerp(q,1-Math.exp(-t*(7.5+6*this.diveK))),this.holdAbove){let k=this.waves.sample(this.tpPos.x,this.tpPos.z,this._s).h+1;this.tpPos.y<k&&(this.tpPos.y=k)}else if(this.under<.5){let k=this.waves.sample(this.tpPos.x,this.tpPos.z,this._s).h+.3;this.tpPos.y<k&&(this.tpPos.y=k)}let H=this._v2.copy(this.pivot).addScaledVector(i.vel,.04);if(H.y+=.34+1.1*this.threat+1.5*this.waveK+1.6*this.landK+1.1*this.troughK-.4*this.crestK+this.bigK*(1.2*this.waveK+1.6*this.landK)+.25*this.portrait,H.addScaledVector(G,2.2*(1-(this.closeS||0))),(this.closeS||0)>0&&(H.y-=(.34+1.1*this.threat+1.5*this.waveK+1.6*this.landK+1.1*this.troughK-.4*this.crestK)*this.closeS),this._mat.lookAt(this.tpPos,H,pa),this._qtp.setFromRotationMatrix(this._mat),this._q.copy(ml).slerp(this.qd,.45),this._qtp.premultiply(this._q),e.position.copy(this._fp).lerp(this.tpPos,b),e.quaternion.copy(this._qfp).slerp(this._qtp,b),b>0&&b<1){let k=this._fp.distanceTo(this.tpPos)*b,O=.32*(k/.28)*Math.exp(1-k/.28),D=.2*(k/.12)*Math.exp(1-k/.12),B=this._v2.set(0,0,-1).applyQuaternion(this._qfp);e.position.addScaledVector(B,D),e.position.y+=O}{let k=this.surfaceAtCam,O=e.matrixWorld.elements,D=k.nx*O[0]+k.nz*O[2],B=-(this.crestDx*O[0]+this.crestDz*O[2])*.11*this.waveK,Y=(Math.max(-.16,Math.min(.16,-D*.38))*b+B)*(1-this.under)*this.intensity;this.roll+=(Y-this.roll)*(1-Math.exp(-t*1.6));let Q=this.time,X=this.churn*this.intensity,ot=this.roll+this.jolt*.9+X*(.62*Math.sin(Q*5.3)+.34*Math.sin(Q*12.9+1.1)),nt=-this.jolt*.55+X*(.24*Math.sin(Q*8.1+.4)+.1*Math.sin(Q*17.3));if(Math.abs(X)>.001&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.set(0,1,0),X*.2*Math.sin(Q*6.7+2))),Math.abs(ot)>1e-4&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.set(0,0,1),ot)),Math.abs(nt)>1e-4&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.set(1,0,0),nt)),e.position.y-=Math.abs(this.jolt)*1.6*b,b>.5&&this.under<.5&&!this.holdAbove){let lt=this.waves.sample(e.position.x,e.position.z,this._s).h+.25;e.position.y<lt&&(e.position.y=lt)}}this.fovKick+=(ct(n.impact-.6)*7-this.fovKick)*(1-Math.exp(-t*4));let N=dt(76,66,b)+this.fovKick*this.intensity+4*this.threat*b+(9*this.waveK+8*this.landK+5*this.troughK+3*this.crestK+this.bigK*(5*this.waveK+3*this.landK)*b+this.bigK*(13*this.waveK+10*this.landK)*(1-b))*dt(.75,1,b)-7*this.vista*b+this.churn*(7+5*Math.sin(this.time*4.4))+9*(n.air||0)*b+7*(n.crawlBlend||0)*b-5*this.push*b+this.portrait*dt(13,19,b);this.debugView&&(e.position.copy(this.debugView.pos),this._mat.lookAt(e.position,this.debugView.target,pa),e.quaternion.setFromRotationMatrix(this._mat));let P=0;if(this.cine){let k=this.cine;k.t+=t;let O=this.pivot,D=B=>(B=ct(B),B*B*(3-2*B));if(k.mode==="intro"){let B=1-D(k.t/k.dur);e.position.addScaledVector(G,-24*B),e.position.y+=17*B,this._v2.copy(O),this._v2.y+=.3,this._mat.lookAt(e.position,this._v2,pa),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,ct(B*3)),P=-8*B,k.t>=k.dur&&(this.cine=null)}else if(k.mode==="lift"){let B=k.yaw0+2.4+k.t*.13,Y=4.2+k.t*.55,Q=O.x-Math.sin(B)*Y,X=O.z-Math.cos(B)*Y;this._v.set(Q,Math.max(this.waves.heightFast(Q,X)+1.5,O.y-.9+k.t*.12),X),k.pos||(k.pos=e.position.clone()),k.pos.lerp(this._v,1-Math.exp(-t*(k.t<7?1.4:Math.max(.05,1.4-(k.t-7)*.5))));{let ot=this.waves.heightFast(k.pos.x,k.pos.z)+1.1;k.pos.y<ot&&(k.pos.y=ot)}e.position.copy(k.pos),this._v2.copy(O),this._v2.y+=.9+Math.min(1.6,k.t*.2),this._mat.lookAt(e.position,this._v2,pa),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,ct(k.t*1.5)),P=-Math.min(22,8+k.t*1.5)}else k.mode==="death"&&(k.pos||(k.pos=e.position.clone()),k.pos.y+=.22*t,e.position.copy(k.pos),this._mat.lookAt(e.position,O,pa),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,1-Math.exp(-t*2)),P=-Math.min(10,k.t*2))}let W=.07;(Math.abs(N+P-e.fov)>.01||Math.abs(W-e.near)>.002)&&(e.fov=N+P,e.near=W,e.updateProjectionMatrix());{if(this.shiver>.02){let O=this.shiver*.0035*this.intensity*dt(1.6,.6,b),D=this.time;this._v.set(Math.sin(D*57)*O,Math.sin(D*61+1)*O,Math.sin(D*53+2)*O*.6);let B=this._v.length();B>1e-6&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.multiplyScalar(1/B),B))}let k=ct(n.effort*1.1)*this.intensity*(1-.6*this.under);if(k>.02){let O=n.strokePhase||0,D=this.time,B=dt(3.4,.6,b);e.position.y+=Math.sin(O*2)*.018*k*B;let Y=(Math.sin(D*11.3)+Math.sin(D*17.9+1.3))*.0012*k,Q=(Math.sin(D*9.7+2.1)+Math.sin(D*15.1))*.0012*k;this._v.set(Y+Math.sin(O*2+.6)*.006*k*B,Q+Math.sin(O)*.007*k*B,Math.sin(O)*.014*k*B);let X=this._v.length();X>1e-5&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.multiplyScalar(1/X),X))}}e.updateMatrixWorld(!0),this.ch.head.visible=e.position.distanceTo(this.eye)>.19,this.waves.sample(e.position.x,e.position.z,this.surfaceAtCam)}};var Po=class{constructor(t){this.canvas=t,this.keys=new Set,this.dx=0,this.dy=0,this.locked=!1,this.enabled=!1,this.pressed=new Set,this.onLockChange=null,this.mouseL=!1,this.mouseR=!1,this.lastLook=-100,window.addEventListener("keydown",e=>{e.repeat||(this.keys.add(e.code),this.pressed.add(e.code),this.enabled&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseL=this.mouseR=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.locked||(this.mouseL=this.mouseR=!1),this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("mousemove",e=>{this.locked&&(this.dx+=e.movementX,this.dy+=e.movementY,Math.abs(e.movementX)+Math.abs(e.movementY)>1&&(this.lastLook=performance.now()/1e3))}),document.addEventListener("mousedown",e=>{this.locked&&(e.button===0&&(this.mouseL=!0),e.button===2&&(this.mouseR=!0))}),document.addEventListener("mouseup",e=>{e.button===0&&(this.mouseL=!1),e.button===2&&(this.mouseR=!1)}),document.addEventListener("contextmenu",e=>{(this.locked||this.enabled)&&e.preventDefault()}),this.virtual=null,this.touch=null}lock(){if(!navigator.webdriver&&this.canvas.requestPointerLock){let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}}unlock(){document.exitPointerLock&&document.exitPointerLock()}down(t){return this.keys.has(t)}axisX(){if(this.virtual)return this.virtual.x||0;let t=(this.down("KeyD")||this.down("ArrowRight")?1:0)-(this.down("KeyA")||this.down("ArrowLeft")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.x:0)))}axisZ(){if(this.virtual)return this.virtual.z||0;let t=(this.down("KeyW")||this.down("ArrowUp")?1:0)-(this.down("KeyS")||this.down("ArrowDown")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.z:0)))}swim(){return this.virtual?!!(this.virtual.swim||this.virtual.sprint||this.virtual.up):this.down("Space")||this.down("ShiftLeft")||this.down("ShiftRight")||this.mouseL||!!(this.touch&&this.touch.swim)}dive(){return this.virtual?!!this.virtual.dive:this.down("KeyF")||this.down("KeyQ")||this.mouseR||!!(this.touch&&this.touch.dive)}busy(){return Math.abs(this.axisX())+Math.abs(this.axisZ())>.05||this.swim()||this.dive()}consumeMouse(t){return t.x=this.dx,t.y=this.dy,this.dx=0,this.dy=0,t}endFrame(){this.pressed.clear()}};var Lo=class{constructor(t){this.waves=t,this.base=1,this.storm=1,this.locked=!1,this.wind=new M(26,0,0),this.windSpeed=26,this.gust=1,this.windAngle=0,this.rain=1,this.time=0,this.squall=0,this.squallT=0,this.squallLen=0,this.nextSquall=16+Math.random()*16,this.squallForce=void 0}update(t){this.time+=t;let e=this.time,i=this.locked?0:(ei(e*.021,3)-.5)*.22+(ei(e*.09,5)-.5)*.08,n=ct(this.base+i*(.4+.6*this.base));this.storm+=(n-this.storm)*(1-Math.exp(-t*.25));let s=this.locked?0:(ei(e*.035,11)-.5)*.9;this.windAngle=this.waves.windAngle+s,this.gust=.78+.34*ei(e*.31,17)+.22*ei(e*1.3,23)*this.storm,this.windSpeed=dt(9,31,this.storm)*this.gust,this.wind.set(Math.cos(this.windAngle)*this.windSpeed,0,Math.sin(this.windAngle)*this.windSpeed);let r=this.locked?.9:.62+.38*ei(e*.05,29);this.rain=ct(dt(.25,1,this.storm)*r+.1*this.storm);{!this.locked&&this.storm>.45&&(this.nextSquall-=t,this.nextSquall<=0&&this.squallT<=0&&(this.squallLen=10+Math.random()*8,this.squallT=this.squallLen,this.nextSquall=this.squallLen+18+Math.random()*26));let h=0;this.squallT>0&&(this.squallT-=t,h=Math.min(1,(this.squallLen-this.squallT)/3)*Math.min(1,Math.max(0,this.squallT)/5)),this.squallForce!==void 0&&(h=this.squallForce),this.squall+=(h-this.squall)*(1-Math.exp(-t*2.2)),this.rain=ct(this.rain+.45*this.squall),it.uSquall.value=this.squall}it.uStorm.value=this.storm,it.uRain.value=this.rain,it.uWindDir.value.set(Math.cos(this.windAngle),Math.sin(this.windAngle)),it.uWindSpeed.value=this.windSpeed,it.uFogDensity.value=dt(1/5200,1/1500,this.rain)*(.8+.4*this.storm)*(1+2.3*this.squall);let o=dt(1.25,.86,this.storm);it.uAmbient.value.set(.05*o,.06*o,.072*o),this.waves.setStorm(this.storm)}};var a1=`
attribute vec4 aSeed;
uniform vec3 uBox;
uniform vec3 uOffset;      // integral of rain velocity
uniform vec3 uVel;         // current rain velocity (world)
uniform vec3 uCamVel;
uniform float uStreak;     // exposure time (s)
uniform float uWidth;
uniform float uPx;         // world size of one pixel at 1 m
uniform vec2 uWindDir; uniform float uTime; uniform float uSquall;
varying vec2 vQ;
varying float vA;
varying float vSpot;
${da}
void main() {
  float sf = 0.82 + 0.36 * aSeed.w;
  vec3 p = mod(aSeed.xyz * uBox + uOffset * sf - cameraPosition, uBox) - uBox * 0.5;
  vec3 wp = cameraPosition + p;
  // The rain does not fall evenly: it comes in sheets that run down the wind - thick where a sheet is passing, thin
  // between them - and in a sheet it is driven flatter. In a squall the sheets close up and it all goes sideways.
  float along = dot(wp.xz, uWindDir), across = dot(wp.xz, vec2(-uWindDir.y, uWindDir.x));
  float sheet = sin(along * 0.11 - uTime * 2.3 + 1.7 * sin(across * 0.07 + uTime * 0.31)) * 0.5 + 0.5;
  sheet = mix(sheet * sheet, 0.55 + 0.45 * sheet, uSquall);
  vec3 rel = uVel * sf - uCamVel + vec3(uWindDir.x, 0.0, uWindDir.y) * (5.0 * sheet + 9.0 * uSquall);
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
  vA = nearFade * farFade * thin * (0.38 + 1.25 * sheet);
  vec3 sl; vSpot = spotAt(wp, sl);
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,r1=`
precision highp float;
uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor; uniform float uIntensity;
varying vec2 vQ; varying float vA; varying float vSpot;
void main() {
  float across = 1.0 - vQ.x * vQ.x;
  float along = smoothstep(0.0, 0.25, vQ.y) * (1.0 - smoothstep(0.55, 1.0, vQ.y));
  float a = across * along * vA * uIntensity;
  // rain falling through the searchlight is what makes the beam visible: each streak lights up
  vec3 col = vec3(0.62, 0.68, 0.74) * (uAmbient * 3.4 + uFlashColor * uFlash * 2.2 + ${Mn} * vSpot * 1.1);
  gl_FragColor = vec4(col, a * 0.26 * (1.0 + 2.2 * min(vSpot, 1.5)));
}`,o1=`
attribute vec4 aSeed;
uniform float uTime; uniform float uTile; uniform float uIntensity;
${ls}
${vo}
${us}
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
}`,h1=`
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
}`;function ff(a,t){let e=new en,i=t==="streak"?new Float32Array([-1,0,0,1,0,0,1,1,0,-1,1,0]):new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);e.setAttribute("position",new Bt(i,3)),e.setIndex([0,1,2,0,2,3]);let n=new Float32Array(a*4);for(let s=0;s<n.length;s++)n[s]=Math.random();return e.setAttribute("aSeed",new ti(n,4)),e.instanceCount=a,e}var Fo=class{constructor(t){this.group=new re,this.offset=new M,this.vel=new M(8,-9,0),this.camVel=new M,this._lastCam=new M,this._has=!1;let e=(i,n,s,r)=>{let o={uBox:{value:new M(...n)},uOffset:{value:this.offset},uVel:{value:this.vel},uCamVel:{value:this.camVel},uStreak:{value:r},uWidth:{value:s},uPx:{value:.001},uIntensity:{value:1},uWindDir:it.uWindDir,uTime:it.uTime,uSquall:it.uSquall,uSpotPos:it.uSpotPos,uSpotDir:it.uSpotDir,uSpotP:it.uSpotP,uAmbient:it.uAmbient,uFlash:it.uFlash,uFlashColor:it.uFlashColor},h=new pt(ff(i,"streak"),new se({uniforms:o,vertexShader:a1,fragmentShader:r1,transparent:!0,depthWrite:!1,side:Ue}));return h.frustumCulled=!1,h.renderOrder=20,h};this.near=e(Math.round(t.rain*.62),[22,16,22],.0024,.02),this.far=e(Math.round(t.rain*.38),[80,46,80],.007,.03),this.group.add(this.near,this.far),this.splashU={uWaveA:it.uWaveA,uWaveB:it.uWaveB,uBrkA:it.uBrkA,uBrkB:it.uBrkB,uBrkC:it.uBrkC,uTime:it.uTime,uTile:{value:34},uIntensity:{value:1},uAmbient:it.uAmbient,uFlash:it.uFlash,uFlashColor:it.uFlashColor},this.splash=new pt(ff(t.splashes,"quad"),new se({uniforms:this.splashU,vertexShader:o1,fragmentShader:h1,transparent:!0,depthWrite:!1})),this.splash.frustumCulled=!1,this.splash.renderOrder=12,this.group.add(this.splash)}update(t,e,i,n,s,r){this.vel.set(i.x*.5,-8.6-1.4*n,i.z*.5),this.offset.addScaledVector(this.vel,t);for(let c of["x","y","z"])Math.abs(this.offset[c])>4e3&&(this.offset[c]%=4e3);this._has&&t>0&&this.camVel.copy(e.position).sub(this._lastCam).multiplyScalar(1/t),this.camVel.length()>40&&this.camVel.setLength(40),this._lastCam.copy(e.position),this._has=!0;let o=2*Math.tan(nn.degToRad(e.fov)*.5)/Math.max(1,r),h=n*(1-s);for(let c of[this.near,this.far])c.material.uniforms.uPx.value=o,c.material.uniforms.uIntensity.value=h*(c===this.far?.8:1)*(1+.9*it.uSquall.value),c.visible=h>.01;this.splashU.uIntensity.value=h*(1+.8*it.uSquall.value),this.splash.visible=h>.01}};var c1=`
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
}`,l1=`
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
}`,Io=class{constructor(t=99){this.rnd=ui(t),this.group=new re,this.strokes=[],this.age=1e9,this.active=!1,this.dir=new M(1,.3,0),this.pos=new M,this.dist=3e3,this.sheet=0,this.power=1,this.intensity=0,this.pendingThunder=[],this.onThunder=null,this.time=0,this.next=6,this.rate=1,this.mat=new se({uniforms:{uWidth:{value:6},uPower:{value:0},uBranchK:{value:1},uColor:{value:new M(.82,.88,1)},uFog:{value:1}},vertexShader:c1,fragmentShader:l1,transparent:!0,blending:Ji,depthWrite:!1,depthTest:!0,side:Ue}),this.bolt=new pt(new ce,this.mat),this.bolt.frustumCulled=!1,this.bolt.visible=!1,this.bolt.renderOrder=2,this.group.add(this.bolt);let e=document.createElement("canvas");e.width=e.height=128;let i=e.getContext("2d"),n=i.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.18,"rgba(255,255,255,0.55)"),n.addColorStop(.45,"rgba(255,255,255,0.16)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,128,128);let s=new Gi(e);s.colorSpace=Ye,this.glows=[0,1,2].map(()=>{let r=new qr(new Na({map:s,color:0,blending:Ji,depthWrite:!1,transparent:!0,fog:!1}));return r.visible=!1,r.renderOrder=1,this.group.add(r),r})}_buildBolt(t,e){let i=this.rnd,n=[],s=(g,b,m,p,v,x)=>{let w=[g,b],R=g.distanceTo(b),y=R*(v===0?.17:.24);for(let A=0;A<x;A++){let _=[w[0]];for(let T=0;T<w.length-1;T++){let I=w[T].clone().lerp(w[T+1],.5);I.x+=(i()-.5)*y,I.z+=(i()-.5)*y,I.y+=(i()-.5)*y*.4,_.push(I,w[T+1])}w=_,y*=.6}let E=w.length-1;for(let A=0;A<E;A++){let _=A/E,T=(A+1)/E;n.push([w[A],w[A+1],dt(m,p,Math.pow(_,.8)),dt(m,p,Math.pow(T,.8)),v>0?1:0]);let I=v===0?.085*(_<.72?1:.35):v===1?.045:.02;if(v<3&&A>2&&A<E-3&&i()<I){let G=w[A+1].clone().sub(w[A]).normalize(),q=R*(v===0?.1+i()*.3:.18+i()*.3)*(1-.45*_),U=i()*6.283,z=.35+i()*.55,J=new M(G.x+Math.cos(U)*z,G.y-.15-i()*.3,G.z+Math.sin(U)*z).normalize(),V=dt(m,p,_)*(.5+i()*.25);s(w[A].clone(),w[A].clone().addScaledVector(J,q),V,.02,v+1,v===0?5:4)}}};s(t,e,1,.82,0,7);let r=n.length,o=new Float32Array(r*4*3),h=new Float32Array(r*4*3),c=new Float32Array(r*4),u=new Float32Array(r*4),l=new Float32Array(r*4),d=new Uint32Array(r*6);for(let g=0;g<r;g++){let[b,m,p,v,x]=n[g],w=m.clone().sub(b).normalize(),R=(y,E,A,_)=>{let T=(g*4+y)*3;o[T]=E.x,o[T+1]=E.y,o[T+2]=E.z,h[T]=w.x,h[T+1]=w.y,h[T+2]=w.z,c[g*4+y]=A,u[g*4+y]=_,l[g*4+y]=x};R(0,b,-1,p),R(1,b,1,p),R(2,m,1,v),R(3,m,-1,v),d.set([g*4,g*4+1,g*4+2,g*4,g*4+2,g*4+3],g*6)}let f=new ce;f.setAttribute("position",new Bt(o,3)),f.setAttribute("normal",new Bt(h,3)),f.setAttribute("aSide",new Bt(c,1)),f.setAttribute("aBright",new Bt(u,1)),f.setAttribute("aBranch",new Bt(l,1)),f.setIndex(new Bt(d,1)),this.bolt.geometry.dispose(),this.bolt.geometry=f}strike(t,e={}){let i=this.rnd,n=e.azimuth!==void 0?e.azimuth:i()*Math.PI*2;this.dist=e.dist!==void 0?e.dist:500+Math.pow(i(),1.6)*5e3,this.sheet=e.sheet!==void 0?e.sheet:i()<.38?1:0,this.power=e.power!==void 0?e.power:dt(1.45,.55,ct(this.dist/7e3))*(.8+i()*.4),this.pos.set(t.x+Math.cos(n)*this.dist,0,t.z+Math.sin(n)*this.dist);let s=1300+i()*700;this.dir.set(Math.cos(n)*this.dist,this.sheet?s:s*.55,Math.sin(n)*this.dist).normalize(),this.strokes.length=0;let r=2+Math.floor(i()*4),o=0;for(let h=0;h<r;h++)this.strokes.push({t:o,peak:(h===0?1:.35+i()*.65)*this.power,tau:.045+i()*.09}),o+=.045+i()*.13;if(this.age=0,this.active=!0,!this.sheet){let h=new M(this.pos.x+(i()-.5)*500,s,this.pos.z+(i()-.5)*500);this._buildBolt(h,new M(this.pos.x,-5,this.pos.z)),this.mat.uniforms.uWidth.value=Math.max(5,this.dist*.0075),this.boltTop=h.clone()}{let h=this.sheet?this.pos.x:(this.boltTop.x+this.pos.x)*.5,c=this.sheet?this.pos.z:(this.boltTop.z+this.pos.z)*.5,u=this.glows;this.sheet?(u[0].position.set(this.pos.x,s*.9,this.pos.z),u[0].scale.setScalar(this.dist*.75),u[1].position.set(this.pos.x+(i()-.5)*this.dist*.4,s*.8,this.pos.z+(i()-.5)*this.dist*.4),u[1].scale.setScalar(this.dist*.45),u[2].scale.setScalar(.001)):(u[0].position.set(this.boltTop.x,s*.93,this.boltTop.z),u[0].scale.setScalar(this.dist*.34),u[1].position.set(h,s*.48,c),u[1].scale.setScalar(this.dist*.22),u[2].position.set(this.pos.x,40,this.pos.z),u[2].scale.setScalar(this.dist*.12))}return this.pendingThunder.push({at:this.time+Math.min(2.2,this.dist/343*.3),dist:this.dist,power:this.power,pos:this.pos.clone().setY(600)}),this}update(t,e,i,n=!0){this.time+=t,n&&(this.next-=t*i,this.next<=0&&(this.strike(e),this.next=this.rnd()<.22?1.2+this.rnd()*2.5:7+this.rnd()*22));let s=0;if(this.active){this.age+=t;let r=!1;for(let o of this.strokes){let h=this.age-o.t;if(h<0){r=!0;continue}let c=o.peak*Math.min(1,h/.008)*Math.exp(-h/o.tau);c>.004&&(r=!0),s+=c}s*=.85+.3*Math.sin(this.age*190)*Math.sin(this.age*67),r||(this.active=!1,s=0)}this.intensity=Math.max(0,s),it.uFlash.value=this.intensity*.62,this.active&&(it.uFlashDir.value.copy(this.dir),it.uFlashSheet.value=this.sheet),this.bolt.visible=this.active&&!this.sheet&&this.intensity>.01,this.mat.uniforms.uPower.value=this.intensity*30,this.mat.uniforms.uBranchK.value=Math.exp(-this.age/.17);{let r=Math.exp(-this.dist*it.uFogDensity.value*.55),o=this.active?this.intensity*r:0,h=this.sheet?[.14,.09,0]:[.075,.03,.05];for(let c=0;c<3;c++){let u=this.glows[c];u.visible=o*h[c]>.002,u.material.color.setRGB(.62*o*h[c],.7*o*h[c],1*o*h[c])}}this.mat.uniforms.uFog.value=Math.exp(-this.dist*it.uFogDensity.value*.55);for(let r=this.pendingThunder.length-1;r>=0;r--)if(this.time>=this.pendingThunder[r].at){let o=this.pendingThunder.splice(r,1)[0];this.onThunder&&this.onThunder(o)}}};var u1=`
attribute vec4 aPos;      // xyz, size
attribute vec4 aData;     // alpha, rotation, stretch, kind
attribute vec3 aVel;
attribute vec2 aMisc;     // age 0..1, seed
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist; varying float vAge; varying float vSeed; varying float vSpot;
${da}
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
}`,d1=`
precision highp float;
uniform sampler2D uTex; uniform sampler2D uSplashTex; uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor;
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist; varying float vAge; varying float vSeed; varying float vSpot;
void main() {
  vec3 light = uAmbient * 2.6 + uFlashColor * uFlash * 1.9 + ${Mn} * min(vSpot, 1.0) * 0.14;
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
}`;function f1(a=31,t=256){let e=ui(a),i=new Float32Array(4096);for(let c=0;c<i.length;c++)i[c]=e();let n=(c,u,l)=>i[((c*73+u*151+l*37)%4096+4096)%4096],s=(c,u,l)=>{let d=Math.floor(c),f=Math.floor(u),g=c-d,b=u-f,m=g*g*(3-2*g),p=b*b*(3-2*b);return(n(d,f,l)*(1-m)+n(d+1,f,l)*m)*(1-p)+(n(d,f+1,l)*(1-m)+n(d+1,f+1,l)*m)*p},r=(c,u,l,d)=>{let f=.5,g=0;for(let b=0;b<d;b++)g+=f*s(c,u,l+b*7),c=c*2.03+11.3,u=u*2.03+5.7,f*=.5;return g},o=new Uint8Array(t*2*t*2*4);for(let c=0;c<2;c++)for(let u=0;u<2;u++){let l=u+c*2+1;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=(f+.5)/t*2-1,b=(d+.5)/t*2-1,m=g+(r(g*2.2+3,b*2.2,l+20,3)-.5)*.7,p=b+(r(g*2.2,b*2.2+9,l+40,3)-.5)*.7,v=Math.hypot(m,p)*(.92+.5*(r(Math.atan2(p,m)*1.6+5,1.5,l+60,2)-.5)),x=Math.max(0,1-v*1.08),w=Math.max(0,Math.min(1,(r(m*3.1+7,p*3.1+2,l,4)*1.5-.22)*Math.pow(x,.7)*1.9)),R=r(g*15+1,b*15+4,l+80,3),y=((c*t+d)*t*2+u*t+f)*4;o[y]=Math.round(w*255),o[y+1]=Math.round(R*255),o[y+2]=0,o[y+3]=255}}let h=new Ai(o,t*2,t*2,pe,Be);return h.minFilter=Jt,h.magFilter=Jt,h.generateMipmaps=!1,h.needsUpdate=!0,h}function p1(a=77,t=160){let e=ui(a),i=8,n=16,s=4,r=5,o=document.createElement("canvas");o.width=o.height=t*i;let h=o.getContext("2d");h.fillStyle="#000",h.fillRect(0,0,o.width,o.height),h.globalCompositeOperation="lighter",h.lineCap="round";let c=.5435,u=(t-2*r)/1.6,l=(t-2*r-3)/1.02,d=t/160,f=(b,m,p)=>{let v=Math.min(1,Math.max(0,(p-b)/(m-b)));return v*v*(3-2*v)};for(let b=0;b<s;b++){let m=(e()-.5)*.14,p=[],v=7+Math.floor(e()*4);for(let w=0;w<v;w++){let R=m+(e()<.3?(e()-.5)*.26:(e()<.5?-1:1)*(.22+.55*e())),y=(.58+.42*e())*(1-.3*Math.min(1,Math.abs(R-m)/.8)),E=10+Math.floor(e()*8),A=.9+1.2*e(),_=.02+.05*e();for(let T=0;T<E;T++){let I=.28+.72*(T+e()*.7)/E;p.push({a:R+(e()-.5)*_*(1+2*(1-I)),v:y*I,r:A*(T===E-1?2.5:.9+1.5*e()*e())*(.7+.5*I),fine:.25+.3*I,kd:.45,die:.8+.2*e(),al:.5+.3*e()})}}for(let w=0;w<230;w++)p.push({a:m+(e()+e()+e()-1.5)*.85,v:.2+.74*Math.pow(e(),1.1),r:.6+1*e()*e(),fine:.75+.25*e(),kd:.5+.4*e(),die:.45+.55*e(),al:.3+.35*e()});let x=[];for(let w=0;w<14;w++)x.push({x:e()-.5,y:e(),r:.5+.5*e()});for(let w=0;w<n;w++){let R=w/(n-1),y=.14+R*3.56,E=w%i*t,A=(i-1-(b*2+Math.floor(w/i)))*t;h.save(),h.beginPath(),h.rect(E+r,A+r,t-2*r,t-2*r),h.clip();let _=E+t/2,T=A+t-r-1,I=Math.sin(Math.min(1,R*3.2)*Math.PI)*.9+.1*(1-R),G=.1+.22*Math.min(1,R*2.2);for(let q of x){let U=_+q.x*G*2*u,z=T-q.y*.1*I*l,J=(.035+.045*q.r)*u*(.6+.6*I),V=h.createRadialGradient(U,z,0,U,z,J);V.addColorStop(0,`rgba(48,${Math.round(48*.22)},0,${.3*(1-R)*(.4+.6*I)})`),V.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=V,h.beginPath(),h.arc(U,z,J,0,6.283),h.fill()}for(let q of p){let U=Math.sin(q.a)*q.v,z=Math.cos(q.a)*q.v,J=Math.exp(-q.kd*y),V=U*(1-J)/q.kd,H=z*y-.5*c*y*y;if(H<0)continue;let N=U*J*u,P=-(z-c*y)*l,W=_+V*u,k=T-H*l,O=Math.max(0,1-y/1.5),D=q.fine*(1-.7*O),B=q.al*(1-f(q.die-.22,q.die,R))*(.6+.4*O);if(B<.02)continue;let Y=.105+.02*O;h.strokeStyle=`rgba(48,${Math.round(48*D)},0,${B})`,h.lineWidth=Math.max(1,q.r*d*(.9+2.95*O)),h.beginPath(),h.moveTo(W-N*Y,k-P*Y),h.lineTo(W,k),h.stroke()}h.restore()}}let g=new Gi(o);return g.colorSpace=Ye,g.minFilter=Je,g.magFilter=Jt,g.generateMipmaps=!0,g}var ko=class{constructor(t,e=6e3){this.waves=t,this.max=e,this._rx=1,this._rz=0,this.px=new Float32Array(e),this.py=new Float32Array(e),this.pz=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vz=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.grow=new Float32Array(e),this.kind=new Float32Array(e),this.stretch=new Float32Array(e),this.rot=new Float32Array(e),this.alpha=new Float32Array(e),this.seed=new Float32Array(e),this.head=0,this.alive=0;let i=new en;i.setAttribute("position",new Bt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]);let n=s=>{let r=new ti(new Float32Array(e*s),s);return r.setUsage(Wi),r};this.aPos=n(4),this.aData=n(4),this.aVel=n(3),this.aMisc=n(2),i.setAttribute("aPos",this.aPos),i.setAttribute("aData",this.aData),i.setAttribute("aVel",this.aVel),i.setAttribute("aMisc",this.aMisc),i.instanceCount=0,this.mesh=new pt(i,new se({uniforms:{uTex:{value:f1()},uSplashTex:{value:p1()},uAmbient:it.uAmbient,uFlash:it.uFlash,uFlashColor:it.uFlashColor,uSpotPos:it.uSpotPos,uSpotDir:it.uSpotDir,uSpotP:it.uSpotP},vertexShader:u1,fragmentShader:d1,transparent:!0,depthWrite:!1})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=15,this._s=ri(),this._tick=0,this.emitAcc=0,this.near=!1,this.hot=[]}emit(t,e,i,n,s,r,o,h,c,u=0,l=1,d=-1){let f=this.head;this.head=(this.head+1)%this.max,this.px[f]=t,this.py[f]=e,this.pz[f]=i,this.vx[f]=n,this.vy[f]=s,this.vz[f]=r,this.life[f]=o,this.maxLife[f]=o,this.size[f]=h,this.kind[f]=c,this.grow[f]=u,this.rot[f]=c>2.5?this.lean||0:c>1.5?0:Math.random()*6.283,this.alpha[f]=l,this.seed[f]=Math.random()*.999+(this.near?2:0),this.stretch[f]=d>=0?d:c<.5?1:c>1.5?2.6:.35}burst(t,e,i,n,s,r=0,o=0){let h=this.near;this.near=!0;let c=Math.min(1.9,.42+n*.27),u=s.x*.1,l=s.z*.1,d=Math.min(230,Math.round(8+n*38));for(let m=0;m<d;m++){let p=Math.random()*6.283,v=.12+Math.random()*.34*c,x=(1+2.4*Math.random())*c,w=(1.8+3.6*Math.pow(Math.random(),1.4))*c;this.emit(t+Math.cos(p)*v,e+.03+Math.random()*.1,i+Math.sin(p)*v,Math.cos(p)*x+r*x*1.5+u,w,Math.sin(p)*x+o*x*1.5+l,.55+Math.random()*.75,.01+Math.pow(Math.random(),2)*.026,0,0,.95)}let f=Math.min(60,Math.round(n*10));for(let m=0;m<f;m++){let p=Math.random()*6.283,v=Math.random()*.7*c;this.emit(t+Math.cos(p)*.08,e+.05,i+Math.sin(p)*.08,Math.cos(p)*v+r*c+u,(3.2+4.2*Math.random())*c,Math.sin(p)*v+o*c+l,.6+Math.random()*.7,.012+Math.random()*.022,0,0,.95)}let g=Math.max(1,Math.min(5,Math.round(n*1.1)));for(let m=0;m<g;m++){let p=Math.random()*6.283,v=.24*c*Math.random(),x=(.55+.45*Math.random())*c*(m?.8:1.15);this.lean=(Math.random()-.5)*.3+(r*this._rx+o*this._rz)*.4,this.emit(t+Math.cos(p)*v,e-.03,i+Math.sin(p)*v,r*.5*c,0,o*.5*c,.62*Math.sqrt(x/.45)*(.92+.16*Math.random()),x,3,0,.8,0)}this.lean=0;let b=Math.max(0,Math.min(14,Math.round(n*2.8-2.6)));for(let m=0;m<b;m++){let p=Math.random()*6.283,v=Math.random()*.9*c;this.emit(t+Math.cos(p)*.3,e+.15+Math.random()*.3,i+Math.sin(p)*.3,Math.cos(p)*v+u*2,.5+Math.random()*1.1,Math.sin(p)*v+l*2,.9+Math.random()*1.1,(.24+Math.random()*.3)*c,1,.5,.2,.3)}this.near=h}slap(t,e,i,n,s,r,o=0,h=0,c=0,u=1){let l=.62+.38*Math.min(2.4,n),d=this.near;this.near=!0;let f=n>1.15?2:1,g=s*this._rx+r*this._rz;for(let m=0;m<f;m++){let p=(.5+.16*Math.random())*l*(.62+.38*u)*(m?.7:1);this.lean=g*.42+(Math.random()-.5)*.16,this.emit(t+(Math.random()-.5)*.08+s*.05,e-.02,i+(Math.random()-.5)*.08+r*.05,o+s*.4*l,h,c+r*.4*l,.62*Math.sqrt(p/.45)*(.92+.16*Math.random()),p,3,0,.8,0)}this.lean=0;let b=Math.round(8+n*16);for(let m=0;m<b;m++){let p=Math.random()*6.283,v=Math.random(),x=(.3+1.6*v*v)*l,w=(1.4+2.8*Math.pow(Math.random(),1.2))*l,R=Math.random(),y=R<.55?.01+Math.random()*.012:R<.9?.02+Math.random()*.016:.036+Math.random()*.022;this.emit(t+Math.cos(p)*.08*l,e+.02+Math.random()*.08,i+Math.sin(p)*.08*l,o+Math.cos(p)*x+s*(.3+1.2*Math.random())*l,h+w,c+Math.sin(p)*x+r*(.3+1.2*Math.random())*l,.36+Math.random()*.44,y,0,0,1)}this.near=d}fling(t,e,i,n,s,r,o){let h=this.near;if(this.near=!0,o>.45){let u=(.26+.14*Math.random())*(.6+.5*o),l=Math.hypot(n,r)+1e-4;this.lean=(n*this._rx+r*this._rz)/l*Math.min(1,l/3)*.5,this.emit(t,e-.04,i,n*.25,0,r*.25,.62*Math.sqrt(u/.45),u,3,0,.7,0),this.lean=0}let c=Math.round(10+o*22);for(let u=0;u<c;u++){let l=.2+.8*Math.random(),d=Math.random();this.emit(t+(Math.random()-.5)*.12,e+Math.random()*.08,i+(Math.random()-.5)*.12,n*l+(Math.random()-.5)*1.3,s*l+.5+Math.random()*1.6,r*l+(Math.random()-.5)*1.3,.38+Math.random()*.5,d<.6?.01+Math.random()*.012:d<.93?.022+Math.random()*.018:.04+Math.random()*.025,0,0,1)}this.near=h}crestCurtain(t,e,i,n=1){let s=this.waves,r=this._s;for(let o of s.breakers){if(!o.active||o.height<9)continue;let h=Math.min(1,(o.height-9)/13)*(o.mega?1.8:1);this._cAcc=(this._cAcc||0)+t*130*h*n;let c=0;for(;this._cAcc>=1&&c++<60;){this._cAcc-=1;let u=e.x-o.ox,l=e.z-o.oz,d=-u*o.dz+l*o.dx,f=Math.min(o.width*1.3,o.mega?360:200),g=Math.max(-f,Math.min(f,d+(Math.random()-.5)*2*Math.min(f,140)*Math.pow(Math.random(),.6))),b=2.6*Math.sin(g*.047+o.seed*.6)+1.2*Math.sin(g*.13+o.seed*2.1),m=o.s+b-.15*o.front+(Math.random()-.5)*2.5,p=o.ox+o.dx*m-o.dz*g,v=o.oz+o.dz*m+o.dx*g;if(Math.hypot(p-e.x,v-e.z)>420)continue;s.sample(p,v,r);let w=!0,R=2+Math.random()*(3+4*h);this.emit(p,r.h+.2+Math.random()*.8,v,o.dx*o.speed*(.75+.2*Math.random())+i.x*.3,R,o.dz*o.speed*(.75+.2*Math.random())+i.z*.3,w?1.3+Math.random()*1.3:.7+Math.random()*.7,w?1.6+Math.random()*2.6*(.6+.4*h):.35+Math.random()*.5,w?1:2,w?2.2:.4,w?.4+.25*Math.random():.18,w?-1:1.4)}}}seedCrests(t,e,i,n,s){let r=this.waves,o=this._s;this.hot.length=0;let h=Math.round(s*(.5+.5*n)),c=Math.hypot(i.x,i.z)+.001;for(let d=0;d<h;d++){let f=Math.random()*6.283,g=3+Math.pow(Math.random(),1.6)*95,b=e.x+Math.cos(f)*g,m=e.z+Math.sin(f)*g;r.sample(b,m,o);let p=Math.max(0,.42-o.jac)*2.4,v=Math.max(p,o.aer*1.6,o.turb*.5);if(v<.05)continue;(this.hot.length<6||v>this.hot[this.hot.length-1].amount)&&(this.hot.push({x:b,y:o.h,z:m,amount:v}),this.hot.sort((w,R)=>R.amount-w.amount),this.hot.length>6&&(this.hot.length=6));let x=Math.min(12,Math.round(2+v*6));for(let w=0;w<x;w++){let R=Math.random()<.36,y=(Math.random()-.5)*2.4,E=(Math.random()-.5)*2.4,A=(.8+2.8*Math.random())*(.6+v);this.emit(b+y,o.h+.05+Math.random()*.25,m+E,o.vx+i.x*(.22+.3*Math.random()),o.vy*.5+A,o.vz+i.z*(.22+.3*Math.random()),R?1.4+Math.random()*1.8:.6+Math.random()*.9,R?.4+Math.random()*.7:.014+Math.pow(Math.random(),2)*.04,R?1:0,R?1.2:0,R?.2:.9)}}let u=it.uSquall.value,l=Math.round(s*.34*n*n*(1+1.4*u));for(let d=0;d<l;d++){let f=Math.random()*6.283,g=2+Math.pow(Math.random(),1.3)*48,b=e.x+Math.cos(f)*g,m=e.z+Math.sin(f)*g;r.sample(b,m,o);let p=Math.max(0,-(o.nx*i.x+o.nz*i.z)/c),v=Math.max(0,Math.min(1,o.h/(.45*(r.sigHeight||12))*.5+.5));if(!(Math.random()>(.25+1.6*p)*(.35+1.1*v)))for(let x=0;x<2;x++)this.emit(b+(Math.random()-.5)*3,o.h+.1+Math.random()*.5,m+(Math.random()-.5)*3,o.vx+i.x*(.45+.4*Math.random()),.4+Math.random()*1.6,o.vz+i.z*(.45+.4*Math.random()),.6+Math.random()*.9,.2+Math.random()*.3,2,.25,.07+.06*u+.03*v,1.1+.6*u)}}seedBreakers(t,e,i){let n=this.waves;for(let s of n.breakers){if(!s.active||s.height<2)continue;let r=s.brk<.01?Math.min(.34,Math.max(0,(s.height-3.5)/18)):0,o=Math.max(s.curl,s.brk*.8,s.turb*.35,r),h=o===r;if(o<.05)continue;let c=e.x-s.ox,u=e.z-s.oz,l=-c*s.dz+u*s.dx,d=c*s.dx+u*s.dz-s.s;if(Math.abs(d)>160+s.height*3)continue;let f=Math.min(2.2,.7+s.height/16);this.emitAcc+=t*620*o*Math.min(1.6,s.height/8)*(this.thin===void 0?1:this.thin);let g=Math.min(130,Math.floor(this.emitAcc));this.emitAcc-=g;for(let b=0;b<g;b++){let m=l+(Math.random()-.5)*110*f;if(Math.exp(-(m*m)/(s.width*s.width))<.15)continue;let x=2.6*Math.sin(m*.047+s.seed*.6)+1.2*Math.sin(m*.13+s.seed*2.1)+(h?(Math.random()-.5)*s.front*.45:(Math.random()-.35)*s.front*1.3),w=s.ox+s.dx*(s.s+x)-s.dz*m,R=s.oz+s.dz*(s.s+x)+s.dx*m,y=n.heightFast(w,R)+Math.random()*.6,E=Math.random()<(s.mega?.14:.26)*(this.thin===void 0?1:this.thin),A=s.speed*(.55+.6*Math.random());this.emit(w,y,R,s.dx*A+i.x*.2,(1.5+5.5*Math.random())*(.5+o)*f,s.dz*A+i.z*.2,E?2+Math.random()*2.4:.8+Math.random()*1.1,E?Math.min(3,(.7+Math.random()*1.2)*f):.02+Math.pow(Math.random(),2)*.07,E?1:0,E?1.4:0,E?.17:.9,E?.5:1)}}}update(t,e,i){let n=this.max,s=this.waves,r=0,o=this.aPos.array,h=this.aData.array,c=this.aVel.array,u=this.aMisc.array;this._tick=(this._tick+1)%3;for(let l=0;l<n;l++){let d=this.life[l];if(d<=0||(d-=t,this.life[l]=d,d<=0))continue;let f=this.kind[l],g=this.seed[l]>=2;if(f>2.5)this.px[l]+=this.vx[l]*t,this.py[l]+=this.vy[l]*t,this.pz[l]+=this.vz[l]*t;else{let v=g?f>.5?.35:.06:f>.5?2.4:.5,x=Math.exp(-v*t);this.vx[l]=i.x+(this.vx[l]-i.x)*x,this.vz[l]=i.z+(this.vz[l]-i.z)*x,this.vy[l]=(this.vy[l]-(f>.5?g?8.2:2.6:9.81)*t)*(f>.5&&!g?x:1),this.px[l]+=this.vx[l]*t,this.py[l]+=this.vy[l]*t,this.pz[l]+=this.vz[l]*t}if(this.size[l]+=this.grow[l]*t,f<2.5&&l%3===this._tick&&this.vy[l]<0&&this.py[l]<s.heightFast(this.px[l],this.pz[l])-.12){this.life[l]=0;continue}let b=1-d/this.maxLife[l],m=f<.5?Math.min(1,(1-b)*6):f>2.5?Math.min(1,b*14):Math.min(1,b*9)*Math.min(1,(1-b)*3),p=r*4;o[p]=this.px[l],o[p+1]=this.py[l],o[p+2]=this.pz[l],o[p+3]=this.size[l],h[p]=this.alpha[l]*m,h[p+1]=this.rot[l],h[p+2]=this.stretch[l],h[p+3]=f,c[r*3]=this.vx[l],c[r*3+1]=this.vy[l],c[r*3+2]=this.vz[l],u[r*2]=b,u[r*2+1]=this.seed[l],r++}this.alive=r,this.mesh.geometry.instanceCount=r,this.aPos.needsUpdate=!0,this.aData.needsUpdate=!0,this.aVel.needsUpdate=!0,this.aMisc.needsUpdate=!0}};var m1=`
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
}`,g1=`
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
}`,b1=`
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
}`,v1=`
precision highp float;
uniform vec3 uLight;
varying vec2 vUv; varying float vA;
void main() {
  if (dot(vUv, vUv) > 1.0 || vA < 0.35) discard;
  gl_FragColor = vec4(uLight * 0.55, 1.0);
}`;function pf(a,t){let e=new en;if(e.setAttribute("position",new Bt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),e.setIndex([0,1,2,0,2,3]),t){let i=new Float32Array(a*t);for(let n=0;n<i.length;n++)i[n]=Math.random();e.setAttribute("aSeed",new ti(i,t))}return e.instanceCount=a,e}var Do=class{constructor(t,e){this.waves=t,this.group=new re,this.under=0,this.isUnder=!1,this.depth=0,this.aeration=0,this.burst=0,this.onEnter=null,this.onExit=null,this.light=new M;let i=this.max=e.bubbles;this.bx=new Float32Array(i),this.by=new Float32Array(i),this.bz=new Float32Array(i),this.bvx=new Float32Array(i),this.bvz=new Float32Array(i),this.br=new Float32Array(i),this.bl=new Float32Array(i),this.bp=new Float32Array(i),this.head=0;let n=pf(i,0);this.aPos=new ti(new Float32Array(i*4),4),this.aPos.setUsage(Wi),this.aSeed=new ti(new Float32Array(i),1),this.aSeed.setUsage(Wi),n.setAttribute("aPos",this.aPos),n.setAttribute("aSeed",this.aSeed),n.instanceCount=0,this.bubbles=new pt(n,new se({uniforms:{uPx:{value:.001},uLight:{value:this.light}},vertexShader:m1,fragmentShader:g1})),this.bubbles.frustumCulled=!1,this.bubbles.renderOrder=8,this.moteOffset=new M,this.motes=new pt(pf(e.motes,4),new se({uniforms:{uBox:{value:new M(7,7,7)},uOffset:{value:this.moteOffset},uPx:{value:.001},uTime:it.uTime,uLight:{value:this.light}},vertexShader:b1,fragmentShader:v1})),this.motes.frustumCulled=!1,this.motes.renderOrder=8,this.motes.visible=!1,this.group.add(this.bubbles,this.motes),this._w={vx:0,vy:0,vz:0},this._tick=0,this._exhale=0,this._aerAcc=0,this._kick=0,this._n=new M}bubble(t,e,i,n,s=6,r=0,o=0){let h=this.head;this.head=(this.head+1)%this.max,this.bx[h]=t,this.by[h]=e,this.bz[h]=i,this.br[h]=n,this.bl[h]=s,this.bp[h]=Math.random()*6.283,this.bvx[h]=r,this.bvz[h]=o}burstAt(t,e,i,n=1){for(let s=0;s<e;s++){let r=Math.random()*6.283,o=Math.acos(2*Math.random()-1),h=i*Math.cbrt(Math.random());this.bubble(t.x+Math.sin(o)*Math.cos(r)*h,t.y+Math.cos(o)*h,t.z+Math.sin(o)*Math.sin(r)*h,(.002+Math.pow(Math.random(),3)*.02)*n,2.5+Math.random()*5,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2)}}update(t,e,i,n,s,r,o,h,c,u){let l=i,d=e.position,f=this._n.set(l.nx,l.ny,l.nz),g=f.x*0+f.y*(d.y-l.h)+f.z*0;this.depth=-g,o.u.uWaterPlane.value.set(f.x,f.y,f.z,-(f.x*d.x+f.y*l.h+f.z*d.z)),o.u.uUnderAmount.value=g<.4?1:0;let b=this.isUnder;this.isUnder=b?g<.03:g<-.03;let m=1-_e(-.12,.05,g);this.under+=(m-this.under)*(1-Math.exp(-t*18)),this.isUnder&&!b&&this.onEnter&&this.onEnter(),!this.isUnder&&b&&this.onExit&&this.onExit();let p=Math.max(0,this.depth),v=it.uAmbient.value,x=it.uFlash.value,w=it.uFlashColor.value,R=Math.exp(-p*.085);o.u.uUnderColor.value.set((v.x*.9+w.x*x*.5)*.1*R,(v.y*.9+w.y*x*.5)*.3*R,(v.z*.9+w.z*x*.5)*.38*R),this.burst=Math.max(0,this.burst-t*.7);let y=Math.min(1,(l.aer*1.15+this.burst*.8)*Math.exp(-p/3.2)+l.turb*.22*Math.exp(-p/4.5));this.aeration+=(y-this.aeration)*(1-Math.exp(-t*(y>this.aeration?12:1.6))),o.u.uAeration.value=this.aeration*this.under;let E=1+2.8*this.aeration;o.u.uUnderExt.value.set(.3*E,.13*E,.1*E),o.u.uUnderDistort.value=.004+.01*Math.min(1,l.turb+this.aeration),o.u.uShaft.value=(.9-.5*h.storm+x*3)*Math.exp(-p*.12),o.u.uExposureBias.value=1+(.62*Math.exp(-p*.045)-1)*this.under;let A=2.6*R*(1+5*this.aeration);this.light.set((v.x*A+w.x*x*.8)*1,(v.y*A+w.y*x*.8)*1.25,(v.z*A+w.z*x*.8)*1.35);let _=2*Math.tan(nn.degToRad(e.fov)*.5)/Math.max(1,u);if(this.bubbles.material.uniforms.uPx.value=_,this.motes.material.uniforms.uPx.value=_,r.wasUnder&&r.alive)for(this._exhale+=t*(5+16*s.effort+22*ct((40-r.oxygen)/40));this._exhale>=1;)this._exhale-=1,this.bubble(c.x+(Math.random()-.5)*.06,c.y,c.z+(Math.random()-.5)*.06,.003+Math.random()*.012,5,n.vel.x*.5,n.vel.z*.5);if(n.subFrac>.5)for(this._kick+=t*Math.min(140,n.relSpeed*n.relSpeed*3.2);this._kick>=1;){this._kick-=1;let z=n.points[2+(Math.random()*9|0)].world;this.bubble(z.x+(Math.random()-.5)*.3,z.y+(Math.random()-.5)*.3,z.z+(Math.random()-.5)*.3,.002+Math.random()*.007,3+Math.random()*3)}if(this.under>.3&&this.aeration>.04){this._aerAcc+=t*900*this.aeration;let z=Math.min(60,Math.floor(this._aerAcc));for(this._aerAcc-=z;z-- >0;){let J=Math.random()*6.283,V=.4+Math.random()*3.6,H=(Math.random()-.4)*3.2;this.bubble(d.x+Math.cos(J)*V,d.y+H,d.z+Math.sin(J)*V,.002+Math.pow(Math.random(),2.5)*.03,2+Math.random()*4,(Math.random()-.5)*2,(Math.random()-.5)*2)}}let T=this.waves,I=this.aPos.array,G=this.aSeed.array,q=0;this._tick=(this._tick+1)%4;let U=T.breakers.some(z=>z.active&&(z.roll>.01||z.turb>.01));for(let z=0;z<this.max;z++){let J=this.bl[z];if(J<=0)continue;J-=t,this.bl[z]=J;let V=this.br[z],H=.18+2.6*Math.sqrt(V);this.bp[z]+=t*(5+30*V/.02);let N=this.bvx[z]+Math.sin(this.bp[z])*.12,P=H,W=this.bvz[z]+Math.cos(this.bp[z]*.8)*.12;if(U){let D=this._w;D.vx=0,D.vy=0,D.vz=0,T.breakerFlow(this.bx[z],this.by[z],this.bz[z],l.h,D),N+=D.vx,P+=D.vy,W+=D.vz}let k=Math.exp(-t*1.5);if(this.bvx[z]*=k,this.bvz[z]*=k,this.bx[z]+=N*t,this.by[z]+=P*t,this.bz[z]+=W*t,z%4===this._tick&&this.by[z]>T.heightFast(this.bx[z],this.bz[z])-.02){this.bl[z]=0;continue}if(J<=0)continue;let O=q*4;I[O]=this.bx[z],I[O+1]=this.by[z],I[O+2]=this.bz[z],I[O+3]=V*Math.min(1,J*2),G[q]=this.bp[z],q++}this.bubbles.geometry.instanceCount=q,this.aPos.needsUpdate=!0,this.aSeed.needsUpdate=!0,this.bubbles.visible=q>0,this.motes.visible=this.under>.02,this.moteOffset.addScaledVector(n.relFlow,t*.6),this.moteOffset.y-=t*.01}};function gl(a,t,e){let i=Math.floor(a.sampleRate*t),n=a.createBuffer(1,i,a.sampleRate),s=n.getChannelData(0),r=0,o=0,h=0,c=0;for(let l=0;l<i;l++){let d=Math.random()*2-1;e==="white"?s[l]=d*.6:e==="pink"?(r=.99765*r+d*.099046,o=.963*o+d*.2965164,h=.57*h+d*1.0526913,s[l]=(r+o+h+d*.1848)*.16):(c=(c+.02*d)/1.02,s[l]=c*3.2)}let u=Math.floor(a.sampleRate*.05);for(let l=0;l<u;l++){let d=l/u;s[i-u+l]=s[i-u+l]*(1-d)+s[l]*d}return n}var zo=class{constructor(){this.ctx=null,this.ready=!1,this.volume=.85,this.sfxOn=!0,this.under=0,this.heartPhase=0,this.gurgleTimer=1,this.time=0,this.patter=0,this.lastCrash=-10}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.white=gl(e,4,"white"),this.pink=gl(e,6,"pink"),this.brown=gl(e,8,"brown");let i=A=>{let _=e.createGain();return _.gain.value=A,_},n=(A,_,T=.7)=>{let I=e.createBiquadFilter();return I.type=A,I.frequency.value=_,I.Q.value=T,I};this.G=i,this.F=n,this.master=i(this.volume);let s=e.createDynamicsCompressor();s.threshold.value=-22,s.ratio.value=7,s.attack.value=.004,s.release.value=.35,this.finalLP=n("lowpass",2e4,.7);let r=i(1.5);this.master.connect(this.finalLP),this.finalLP.connect(s),s.connect(r),r.connect(e.destination),this.air=i(1),this.airLP=n("lowpass",2e4,.7),this.airBoom=n("peaking",170,1.6),this.airBoom.gain.value=0,this.air.connect(this.airLP),this.airLP.connect(this.airBoom),this.airBoom.connect(this.master),this.water=i(0),this.water.connect(this.master);let o=e.createBuffer(2,Math.floor(e.sampleRate*2.6),e.sampleRate);for(let A=0;A<2;A++){let _=o.getChannelData(A),T=0;for(let I=0;I<_.length;I++){let G=I/e.sampleRate;T+=(Math.random()*2-1-T)*.12,_[I]=T*Math.exp(-G*2.4)*2.2}}this.verb=e.createConvolver(),this.verb.buffer=o,this.verbOut=i(.5),this.verb.connect(this.verbOut),this.verbOut.connect(this.master),this.waterSend=i(.9),this.water.connect(this.waterSend),this.waterSend.connect(this.verb);let h=(A,_=1)=>{let T=e.createBufferSource();return T.buffer=A,T.loop=!0,T.playbackRate.value=_,T.start(0,Math.random()*A.duration),T},c=(A,_,T)=>{let I=A;for(let G of _)I.connect(G),I=G;return I.connect(T),_[_.length-1]};this.rumble=c(h(this.brown,.8),[n("lowpass",130),i(.3)],this.air),this.wash=c(h(this.pink),[n("bandpass",620,.5),i(0)],this.air),this.roar=c(h(this.brown,1.3),[n("bandpass",210,.6),i(0)],this.air),this.roarF=this.roar,this.spots=[];for(let A=0;A<3;A++){let _=e.createPanner();_.panningModel="HRTF",_.distanceModel="inverse",_.refDistance=6,_.rolloffFactor=1.1,_.maxDistance=200;let T=i(0),I=n("bandpass",900+A*450,.7);h(this.pink,.9+A*.13).connect(I),I.connect(T),T.connect(_),_.connect(this.air),this.spots.push({p:_,g:T,x:0,y:0,z:0,a:0})}this.rainG=c(h(this.white),[n("highpass",1900),n("lowpass",9500),i(0)],this.air),this.patterG=c(h(this.white,1.3),[n("bandpass",3400,1.4),i(0)],this.air),this.windF=n("bandpass",420,1.8),this.windG=i(0),this.windPan=e.createStereoPanner?e.createStereoPanner():i(1),h(this.pink,.7).connect(this.windF),this.windF.connect(this.windG),this.windG.connect(this.windPan),this.windPan.connect(this.air),this.whistleF=n("bandpass",1300,7),this.whistleG=i(0),h(this.pink,1.1).connect(this.whistleF),this.whistleF.connect(this.whistleG),this.whistleG.connect(this.windPan),this.droneG=c(h(this.brown,.55),[n("lowpass",95),i(.9)],this.water),this.streamF=n("bandpass",520,.9),this.streamG=i(0),this.streamAM=i(0);let u=h(this.brown,.35),l=i(14);u.connect(n("lowpass",14)).connect(l),l.connect(this.streamAM.gain),h(this.pink,1.25).connect(this.streamF),this.streamF.connect(this.streamAM),this.streamAM.connect(this.streamG),this.streamG.connect(this.water),this.bodyG=i(1),this.bodyG.connect(this.master),this.vDry=i(1);let d=n("highpass",115,.7),f=n("peaking",1150,1),g=n("lowpass",6200,.7);f.gain.value=2.5,this.vDry.connect(d),d.connect(f),f.connect(g),g.connect(this.master),this.vWet=i(0),this.vLP=n("lowpass",430,3.5),this.vRes=n("peaking",260,2),this.vRes.gain.value=8,this.vTrem=i(.55),this.vWet.connect(this.vLP),this.vLP.connect(this.vRes),this.vRes.connect(this.vTrem),this.vTrem.connect(this.water),this.vTrem.connect(this.verb),this.breathG=i(1),this.breathG.connect(this.vDry),this.breathG.connect(this.vWet),this.beds=null,this.swimLevel=0;let b=e.createOscillator();b.type="sawtooth",b.frequency.value=17;let m=i(.5);b.connect(m),m.connect(this.vTrem.gain);let p=h(this.brown,.3),v=i(55);p.connect(n("lowpass",6)).connect(v),v.connect(b.frequency),b.start(),this.tinG=i(0),this.tinG.connect(s);for(let A of[3150,3212]){let _=e.createOscillator();_.type="sine",_.frequency.value=A,_.connect(this.tinG),_.start()}this.heliPan=e.createPanner(),this.heliPan.panningModel="HRTF",this.heliPan.distanceModel="inverse",this.heliPan.refDistance=45,this.heliPan.rolloffFactor=.7,this.heliPan.maxDistance=1200,this.heliG=i(0),this.heliChop=i(.5);let x=e.createOscillator();x.type="sawtooth",x.frequency.value=21;let w=i(.45);x.connect(w),w.connect(this.heliChop.gain),x.start(),h(this.brown,1.4).connect(n("lowpass",180)).connect(this.heliChop);let R=n("bandpass",1900,6),y=i(.05);h(this.white,1).connect(R),R.connect(y),y.connect(this.heliG),this.heliChop.connect(this.heliG),this.heliG.connect(this.heliPan),this.heliPan.connect(this.air);let E=(A,_)=>{let T=e.createPanner();return T.panningModel="HRTF",T.distanceModel="inverse",T.refDistance=A,T.rolloffFactor=_,T.maxDistance=5e3,T};this.PN=E,this.shipPan=E(55,.9),this.shipG=i(0),this.shipG.connect(this.shipPan),this.shipPan.connect(this.air),this.shipBeat=i(.6);{let A=e.createOscillator();A.type="sine",A.frequency.value=1.55;let _=i(.55);A.connect(_),_.connect(this.shipBeat.gain),A.start()}h(this.brown,1).connect(n("lowpass",70)).connect(this.shipBeat),this.shipBeat.connect(this.shipG),this.bowPan=E(16,1.1),this.bowG=i(0),this.bowG.connect(this.bowPan),this.bowPan.connect(this.air),this.propPan=E(10,1.3),this.propG=i(0),this.propG.connect(this.propPan),this.propPan.connect(this.air),this.shipWater=i(0),this.shipWater.connect(this.water),this.voice={},this.curVoice=null,this.ready=!0,this._decodeVoices()}setVoices(t){this.voiceSrc=t,this.ready&&this._decodeVoices()}_decodeVoices(){if(!(!this.voiceSrc||this._decoding)){this._decoding=!0;for(let[t,e]of Object.entries(this.voiceSrc)){let i=atob(e),n=new Uint8Array(i.length);for(let s=0;s<i.length;s++)n[s]=i.charCodeAt(s);this.ctx.decodeAudioData(n.buffer).then(s=>{this.voice[t]=s,this._startBeds()}).catch(()=>{})}}}_startBeds(){let t=this.voice;if(this.beds||!t.b_pant||!t.b_tired||!t.w_swim||this.voiceSrc.a_storm&&!t.a_storm||this.voiceSrc.a_heli&&!t.a_heli||this.voiceSrc.bt_creak&&!t.bt_creak||this.voiceSrc.s_engine&&!t.s_engine||this.voiceSrc.s_bow&&!t.s_bow||this.voiceSrc.s_prop&&!t.s_prop)return;let e=(i,n)=>{let s=this.ctx.createBufferSource();s.buffer=i,s.loop=!0,s.loopStart=.03,s.loopEnd=i.duration-.03;let r=this.G(0);return s.connect(r),r.connect(n),s.start(0,.03+Math.random()*(i.duration-.1)),{s,g:r}};if(this.beds={pant:e(t.b_pant,this.breathG),tired:e(t.b_tired,this.breathG),swim:e(t.w_swim,this.air)},t.a_storm&&(this.beds.storm=e(t.a_storm,this.air)),t.bt_creak&&(this.beds.boat=e(t.bt_creak,this.air)),t.a_heli&&(this.beds.heli=e(t.a_heli,this.heliG),this.beds.heli.g.gain.value=1),t.s_engine){this.beds.shipEng=e(t.s_engine,this.shipG),this.beds.shipEng.g.gain.value=1;let i=this.G(.9);this.beds.shipEng.g.connect(i),i.connect(this.shipWater)}if(t.s_bow&&(this.beds.shipBow=e(t.s_bow,this.bowG),this.beds.shipBow.g.gain.value=1),t.s_prop){this.beds.shipProp=e(t.s_prop,this.propG),this.beds.shipProp.g.gain.value=1;let i=this.G(1.2);this.beds.shipProp.g.connect(i),i.connect(this.shipWater)}}setBreath(t,e,i,n){if(!this.beds||!this.ready||this.ctx.state!=="running")return;let s=this.ctx.currentTime,r=n?.09:.012;this.beds.pant.g.gain.setTargetAtTime(t,s,r),this.beds.tired.g.gain.setTargetAtTime(e,s,r),this.beds.pant.s.playbackRate.setTargetAtTime(i,s,.4)}playVoice(t,e=1,i=1,n=null){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;this.stopVoice(.05);let r=this.ctx,o=r.currentTime,h=i*(this.under>.5?.84:1),c=n?Math.min(n[0],s.duration):0,u=n?Math.min(n[1],s.duration):s.duration,l=(u-c)/h,d=r.createBufferSource();d.buffer=s,d.playbackRate.value=h;let f=this.G(1e-4);return f.gain.setValueAtTime(1e-4,o),f.gain.exponentialRampToValueAtTime(Math.max(.001,e),o+(n&&n[0]>0?.09:.012)),n&&u<s.duration-.01&&(f.gain.setValueAtTime(Math.max(.001,e),o+Math.max(.02,l-.12)),f.gain.exponentialRampToValueAtTime(1e-4,o+l)),d.connect(f),f.connect(this.vDry),f.connect(this.vWet),d.start(o,c,u-c),this.curVoice={s:d,g:f,end:o+l},l}stopVoice(t=.08){let e=this.curVoice;if(!e)return;this.curVoice=null;let i=this.ctx.currentTime;if(!(i>=e.end))try{e.g.gain.setTargetAtTime(0,i,t/3),e.s.stop(i+t+.05)}catch{}}playClip(t,e=1,i=1,n=0){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;let r=this.ctx,o=r.createBufferSource();o.buffer=s,o.playbackRate.value=i;let h=this.G(e);if(o.connect(h),r.createStereoPanner){let c=r.createStereoPanner();c.pan.value=n,h.connect(c),c.connect(this.air)}else h.connect(this.air);return o.start(),s.duration/i}setVolume(t){this.volume=t,this.master&&this.master.gain.setTargetAtTime(this.sfxOn===!1?0:t,this.ctx.currentTime,.05)}setSfx(t){this.sfxOn=t,this.master&&this.master.gain.setTargetAtTime(t?this.volume:0,this.ctx.currentTime,.05),this.tinG&&!t&&this.tinG.gain.setTargetAtTime(0,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_burst(t){let e=this.ctx,i=e.currentTime+(t.delay||0),n=e.createBufferSource();n.buffer=t.buf,n.playbackRate.value=t.rate||1;let s=this.F(t.type||"bandpass",t.f0,t.q||1);t.f1&&s.frequency.exponentialRampToValueAtTime(Math.max(20,t.f1),i+t.dur);let r=this.G(0);r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(Math.max(2e-4,t.gain),i+(t.attack||.02)),r.gain.exponentialRampToValueAtTime(1e-4,i+t.dur),n.connect(s),s.connect(r);let o=r;if(t.pan!==void 0&&e.createStereoPanner){let h=e.createStereoPanner();h.pan.value=t.pan,r.connect(h),o=h}o.connect(t.out||this.air),t.verb&&o.connect(this.verb),n.start(i,Math.random()*(t.buf.duration-t.dur-.1)),n.stop(i+t.dur+.05)}_blip(t,e,i,n,s,r){let o=this.ctx,h=o.currentTime+s,c=o.createOscillator();c.type="sine",c.frequency.setValueAtTime(t,h),c.frequency.exponentialRampToValueAtTime(e,h+i);let u=this.G(0);u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(n,h+i*.3),u.gain.exponentialRampToValueAtTime(1e-4,h+i),c.connect(u),u.connect(r||this.water),c.start(h),c.stop(h+i+.02)}gurgle(t=.6){if(!this.ready)return;let e=6+Math.floor(Math.random()*10*t+4),i=0;for(let n=0;n<e;n++){let s=170+Math.random()*420;this._blip(s,s*(1.5+Math.random()*.9),.035+Math.random()*.05,.1*t*(.4+Math.random()),i),i+=.022+Math.random()*.06}this._burst({buf:this.pink,f0:380,f1:900,q:1.2,dur:Math.min(1.2,i+.2),gain:.16*t,attack:.05,out:this.water})}onEvent(t,e){if(!this.ready)return;let i=this.under>.5;switch(t){case"thunder":{let n=ct(e.dist/7e3),s=e.power;{let b="a_thunder"+(1+(Math.random()*3|0)),m=this.voice&&this.voice[b];if(m){let p=this.ctx,v=p.currentTime,x=p.createBufferSource();x.buffer=m,x.playbackRate.value=dt(1,.82,n)*(.94+Math.random()*.12);let w=this.F("lowpass",dt(16e3,420,Math.sqrt(n)),.6),R=this.G(dt(2.2,.45,n)*s);x.connect(w),w.connect(R),R.connect(this.air),R.connect(this.verb),x.start(v),e.dist<2600&&(this._blip(64,26,1.4,1.1*s*(1-e.dist/2600),0,this.master),this._burst({buf:this.white,type:"highpass",f0:1800,dur:.22,gain:1.2*s*(1-e.dist/2600),attack:.002}))}}let r=dt(5,10,Math.random())*(.8+.4*n),o=this.ctx,h=o.currentTime,c=o.createBufferSource();c.buffer=this.brown,c.loop=!0,c.playbackRate.value=.7+Math.random()*.5;let u=this.F("lowpass",dt(1100,170,n),.5),l=this.G(0),d=dt(.6,.2,n)*s;l.gain.setValueAtTime(1e-4,h),l.gain.exponentialRampToValueAtTime(d,h+dt(.04,.6,n));let f=h+.5,g=2+Math.floor(Math.random()*4);for(let b=0;b<g;b++)f+=.4+Math.random()*1.1,l.gain.exponentialRampToValueAtTime(d*(.25+Math.random()*.5)*Math.exp(-b*.35),f);l.gain.exponentialRampToValueAtTime(1e-4,h+r),c.connect(u),u.connect(l),l.connect(this.air),l.connect(this.verb),c.start(h,Math.random()*6),c.stop(h+r+.1),e.dist<2200&&this._burst({buf:this.white,type:"highpass",f0:700,dur:.35,gain:.8*s*(1-e.dist/2200),attack:.004,verb:!0});break}case"impact":{let n=Math.min(1,e.strength/3.2);if(this.time-this.lastCrash<.5)break;this.lastCrash=this.time,this._burst({buf:this.white,type:"lowpass",f0:5200,f1:260,q:.6,dur:1.5+n,gain:.55+.5*n,attack:.015,verb:!0}),this._burst({buf:this.brown,type:"lowpass",f0:240,f1:60,q:.8,dur:1.9,gain:1*n+.3,attack:.02,out:this.master}),this._blip(74,34,.7,.5*n,0,this.master),this.playClip("a_crash"+(1+(Math.random()*3|0)),.7+.6*n,.9+Math.random()*.2,0);break}case"shipHorn":{let n=this.voice&&this.voice[e.long?"s_horn":"s_hornS"];if(!n||!e.pos)break;let s=this.ctx.createBufferSource();s.buffer=n;let r=this.G(e.long?5.5:4.5),o=this.PN(120,.55);o.positionX?(o.positionX.value=e.pos.x,o.positionY.value=e.pos.y,o.positionZ.value=e.pos.z):o.setPosition(e.pos.x,e.pos.y,e.pos.z),s.connect(r),r.connect(o),o.connect(this.air),s.start();break}case"boatSlam":{let n=Math.min(1,e.v/6);if(this.time-(this.lastSlam||-9)<.35)break;this.lastSlam=this.time,this.playClip("bt_slam"+(1+(Math.random()*3|0)),.35+.65*n,.88+Math.random()*.22,e.pan||0),this._blip(64,30,.5,.35*n,0,this.master);break}case"splash":{let n=Math.min(1,e.v/5);this._burst({buf:this.pink,f0:1400+Math.random()*1200,f1:600,q:.8,dur:.16+.22*n,gain:.1+.22*n,attack:.006,pan:Math.random()*1.2-.6});break}case"submerge":this._burst({buf:this.brown,type:"lowpass",f0:900,f1:120,dur:.7,gain:.7,attack:.01,out:this.master}),this.gurgle(.9),this.gurgleTimer=.8;break;case"drown":e.phase==="convulse"?(this._burst({buf:this.brown,type:"lowpass",f0:520,f1:80,dur:1.4,gain:.9,attack:.02,out:this.master}),this.gurgle(1.7),this.gurgleTimer=1.6,this.playVoice&&this.playVoice("b_under",1.35,.9,[4.1,8.15])):(this._burst({buf:this.brown,type:"lowpass",f0:260,f1:60,dur:2.2,gain:.5,attack:.3,out:this.master}),this.gurgle(1.1));break;case"surface":this._burst({buf:this.white,type:"highpass",f0:1500,f1:3500,dur:.5,gain:.3,attack:.02});break;case"duck":{let n=Math.min(1,.4+e.q);this._burst({buf:this.brown,type:"lowpass",f0:420,f1:90,q:.7,dur:2.6,gain:.85*n,attack:.35,out:this.master}),this._burst({buf:this.pink,type:"lowpass",f0:900,f1:200,q:.6,dur:2,gain:.25*n,attack:.25,delay:.15,out:this.water}),this._blip(58,30,1.2,.3*n,.1,this.master);break}case"camEnter":this._blip(120,52,.45,.35,0,this.master);break;case"camExit":this._burst({buf:this.pink,f0:2200,f1:900,q:.6,dur:.6,gain:.22,attack:.02});break;default:break}}update(t,e){if(!this.ready||this.ctx.state!=="running")return;this.time+=t;let i=this.ctx,n=i.currentTime,s=(g,b,m=.12)=>g.setTargetAtTime(b,n,m),r=this.under=e.under,o=i.listener,h=e.cam;o.positionX?(o.positionX.value=h.pos.x,o.positionY.value=h.pos.y,o.positionZ.value=h.pos.z,o.forwardX.value=h.fwd.x,o.forwardY.value=h.fwd.y,o.forwardZ.value=h.fwd.z,o.upX.value=h.up.x,o.upY.value=h.up.y,o.upZ.value=h.up.z):(o.setPosition(h.pos.x,h.pos.y,h.pos.z),o.setOrientation(h.fwd.x,h.fwd.y,h.fwd.z,h.up.x,h.up.y,h.up.z)),s(this.airLP.frequency,dt(2e4,330*Math.exp(-e.depth*.06)+120,r*r),.06),s(this.airBoom.gain,9*r,.1),s(this.air.gain,dt(1,.55,r),.1),s(this.water.gain,r*(1-.7*e.blackout),.08),s(this.bodyG.gain,(1-r)*(1-e.blackout),.05),s(this.verbOut.gain,.35+.5*r,.2);let c=.7+.6*(e.gust||0);s(this.rumble.gain,.32+.45*e.storm+.22*Math.min(1,Math.abs(e.swellV)/6),.3),this.beds&&this.beds.storm&&(s(this.beds.storm.g.gain,(.25+.95*e.storm)*c,.5),this.beds.storm.s.playbackRate.setTargetAtTime(.94+.1*(e.gust||0),n,1.2)),this.crashT=(this.crashT===void 0?3:this.crashT)-t*(.4+e.storm),this.crashT<=0&&r<.5&&(this.crashT=2.2+Math.random()*4.5,this.playClip("a_crash"+(1+(Math.random()*3|0)),(.16+.34*Math.random())*e.storm,.8+Math.random()*.4,Math.random()*1.6-.8));let u=0;for(let g of e.hot){let b=Math.hypot(g.x-h.pos.x,g.z-h.pos.z);u+=g.amount/(1+b/12)}s(this.wash.gain,Math.min(.8,.12*e.storm+.16*u),.25),s(this.roar.gain,Math.min(1.1,e.threat*e.threat*1.1),.2);for(let g=0;g<this.spots.length;g++){let b=this.spots[g],m=e.hot[g];m?(b.a<.02?(b.x=m.x,b.y=m.y,b.z=m.z):(b.x+=(m.x-b.x)*.1,b.y+=(m.y-b.y)*.1,b.z+=(m.z-b.z)*.1),b.a+=(Math.min(1,m.amount)-b.a)*.08):b.a*=.94,b.p.positionX?(b.p.positionX.value=b.x,b.p.positionY.value=b.y,b.p.positionZ.value=b.z):b.p.setPosition(b.x,b.y,b.z),s(b.g.gain,b.a*.9,.1)}let l=e.squall||0;s(this.rainG.gain,.2*e.rain*c*(1+.85*l),.4),this.patter+=Math.random()<t*9?1:0,this.patter*=Math.exp(-t*9),s(this.patterG.gain,.06*e.rain*(.4+Math.min(1.5,this.patter))*(1+.6*l),.03);let d=ct(e.windSpeed/34+.22*l);s(this.windF.frequency,260+520*e.gust*d,.5),s(this.windG.gain,.55*Math.pow(d,1.5)*c+.6*(e.air||0),.15),s(this.whistleF.frequency,900+900*e.gust*e.gust,.6),s(this.whistleG.gain,.1*Math.pow(d,2.2)*e.gust,.5),this.windPan.pan&&s(this.windPan.pan,Ri(e.windPan*.55,-.8,.8),.6),s(this.streamG.gain,Math.min(1,e.aeration*1.4+Math.min(.5,e.relSpeed*.08))*.5,.1),s(this.streamF.frequency,420+500*e.aeration,.2),e.mouthUnder&&e.alive&&(this.gurgleTimer-=t*(1+1.6*ct((45-e.oxygen)/45)+e.effort*.6),this.gurgleTimer<=0&&(this.gurgle(.45+.5*Math.random()),this.gurgleTimer=1.1+Math.random()*2));let f=Math.max(ct((62-e.oxygen)/55),ct(((e.fear||0)-.62)*2.4)*.8)*(e.alive?1:0)+(e.mouthUnder?.18:0);if(f>.05&&(this.heartPhase+=t*dt(1.2,2.5,ct(f)),this.heartPhase>=1)){this.heartPhase-=1;let g=.5*Math.min(1,f*1.3);this._blip(62,40,.11,g,0,this.master),this._blip(52,36,.13,g*.7,.16,this.master)}if(s(this.master.gain,(this.sfxOn===!1?0:this.volume)*(1-.85*e.blackout),.3),e.heli&&e.heli.on){let g=e.heli.pos;this.heliPan.positionX?(this.heliPan.positionX.value=g.x,this.heliPan.positionY.value=g.y,this.heliPan.positionZ.value=g.z):this.heliPan.setPosition(g.x,g.y,g.z),s(this.heliG.gain,6,.6)}else s(this.heliG.gain,0,.8);{let g=e.ship,b=(m,p)=>{m.positionX?(m.positionX.value=p.x,m.positionY.value=p.y,m.positionZ.value=p.z):m.setPosition(p.x,p.y,p.z)};g&&g.on?(b(this.shipPan,g.engine),b(this.bowPan,g.bow),b(this.propPan,g.prop),s(this.shipG.gain,2.4,.6),s(this.bowG.gain,2.6*g.speedK,.6),s(this.propG.gain,1.8*g.speedK,.6),s(this.shipWater.gain,2.8*Math.min(1,70/(g.propDist+15)),.3)):(s(this.shipG.gain,0,1.5),s(this.bowG.gain,0,1.5),s(this.propG.gain,0,1.5),s(this.shipWater.gain,0,1.5))}this.beds&&s(this.beds.swim.g.gain,Math.min(.6,(e.swimSplash||0)*.55)*(1-r),.25),this.beds&&this.beds.boat&&(s(this.beds.boat.g.gain,Math.min(.5,(e.boatCreak||0)*.5)*(1-r),.3),this.beds.boat.s.playbackRate.setTargetAtTime(.9+.25*Math.min(1,e.boatCreak||0),n,.5)),s(this.vDry.gain,1-r,.04),s(this.vWet.gain,r*2.2,.04),s(this.tinG.gain,(this.sfxOn===!1?0:this.volume)*(.014*ct((30-e.oxygen)/30)+.03*e.blackout),.3),s(this.finalLP.frequency,2e4*Math.pow(.022,e.blackout)*Math.pow(.03,e.slow||0),.08)}};var x1=`
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
#ui.touch .row span.t.tl { padding: 0 .55em; }
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
`,Ut=(a,t,e)=>{let i=document.createElement(a);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i},bl=a=>`${String(Math.floor(a/60)).padStart(2,"0")}:${String(Math.floor(a%60)).padStart(2,"0")}`,Uo=class a{constructor(t,e,i){this.root=t,this.api=e,this.isTouch=i,t.classList.toggle("touch",!!i);let n=Ut("style");n.textContent=x1,document.head.appendChild(n),this.title=Ut("div","layer shade"),this.title.id="title";let s=Ut("div","col");s.appendChild(Ut("h1","","EXTREME<br>OCEAN SURVIVAL")),this.goBtn=Ut("div","go act","\uC2DC\uC791"),s.appendChild(this.goBtn),this.titleRows=Ut("div","rows"),s.appendChild(this.titleRows),this.title.appendChild(s),this.title.appendChild(Ut("div","hint",i?"\uC67C\uCABD \uB04C\uAE30 \uBC29\uD5A5 \xB7 \uD5E4\uC5C4 / \uC785\uC218 \uBC84\uD2BC \xB7 \uD654\uBA74 \uB04C\uAE30 \uC2DC\uC810":"WASD \uBC29\uD5A5 \xB7 Space(\uC88C\uD074\uB9AD) \uD5E4\uC5C4 \xB7 F(\uC6B0\uD074\uB9AD) \uC785\uC218 \xB7 \uB9C8\uC6B0\uC2A4 \uC2DC\uC810 \xB7 V \uC2DC\uC810 \uC804\uD658 \xB7 Esc \uBA48\uCDA4")),this.pause=Ut("div","layer shade"),this.pause.id="pause";let r=Ut("div","col");r.appendChild(Ut("h2","","\uBA48\uCDA4")),this.pauseTime=Ut("div","time"),r.appendChild(this.pauseTime),this.resumeBtn=Ut("div","go act","\uACC4\uC18D"),r.appendChild(this.resumeBtn),this.pauseRows=Ut("div","rows"),r.appendChild(this.pauseRows),this.pause.appendChild(r),this.dead=Ut("div","layer shade"),this.dead.id="dead";let o=Ut("div","col");this.deadTitle=Ut("h2","",""),o.appendChild(this.deadTitle),this.deadTime=Ut("div","time"),o.appendChild(this.deadTime),this.againBtn=Ut("div","go act","\uB2E4\uC2DC"),o.appendChild(this.againBtn),this.dead.appendChild(o),this.won=Ut("div","layer shade"),this.won.id="won";let h=Ut("div","col");h.appendChild(Ut("h2","","\uAD6C\uC870\uB418\uC5C8\uB2E4")),this.wonTime=Ut("div","time"),h.appendChild(this.wonTime),this.wonBtn=Ut("div","go act","\uB2E4\uC2DC"),h.appendChild(this.wonBtn),this.won.appendChild(h),this.noteEl=Ut("div","note"),this.creditLink=Ut("div","credit act on","Credits / Licenses"),this.credits=Ut("div"),this.credits.id="credits";{let f="http://creativecommons.org/licenses/by/4.0/",g=(m,p)=>`<a class="act" href="${m}" target="_blank" rel="noopener noreferrer">${p}</a>`,b=Ut("div","box");b.appendChild(Ut("h2","","CREDITS / LICENSES")),b.appendChild(Ut("h3","","3D MODELS")),b.appendChild(Ut("div","it",`<b>Emergency Heli - Flight Care 2</b><p>by Mixmamo.studio: An effortless 3D collections. \xB7 ${g("https://skfb.ly/pBOGV","skfb.ly/pBOGV")}<br>Licensed under ${g(f,"Creative Commons Attribution 4.0")}<br>Changes: reduced for the web (cabin parts not visible from outside removed, parts merged) \xB7 front doors closed \xB7 rotor blades straightened to their in-flight shape and drawn as a motion-blurred disc</p>`)),b.appendChild(Ut("div","it",`<b>Assault Boat</b><p>by tnnv \xB7 Sketchfab<br>Licensed under ${g(f,"Creative Commons Attribution 4.0")}<br>Changes: reduced for the web (parts merged, textures re-compressed) \xB7 brightness adjusted</p>`)),b.appendChild(Ut("div","it",`<b>Octopus Cargo Ship</b><p>by KurumA \xB7 ${g("https://skfb.ly/psXDo","skfb.ly/psXDo")}<br>Licensed under ${g(f,"Creative Commons Attribution 4.0")}<br>Changes: reduced for the web (materials and parts merged, unused texture sets removed, vertices stored as integers, textures resized and re-compressed) \xB7 scaled to a 180 m ship \xB7 navigation, deck and search lights added</p>`)),b.appendChild(Ut("div","lic",`CC BY 4.0 \u2014 ${f}`)),this.creditClose=Ut("div","go act","Close"),b.appendChild(this.creditClose),this.credits.appendChild(b)}this.hud=Ut("div","layer"),this.hud.id="hud";let c=Ut("div","bars");this.bars={};for(let[f,g]of[["o2","\uC0B0\uC18C"],["st","\uCCB4\uB825"],["tp","\uCCB4\uC628"],["rs","\uAD6C\uC870"]]){let b=Ut("div","bar",`<i>${g}</i><u><s></s></u>`);c.appendChild(b),this.bars[f]={el:b,fill:b.querySelector("s")}}this.hud.appendChild(c),i||(this.keysEl=Ut("div","keys",""),this.hud.appendChild(this.keysEl)),this.act="",this.setMode("swim"),t.append(Object.assign(Ut("div"),{id:"bars-t"}),Object.assign(Ut("div"),{id:"bars-b"})),this.touch=Ut("div","layer"),this.touch.id="touch",t.append(this.hud,this.noteEl,this.touch,this.title,this.pause,this.dead,this.won,this.creditLink,this.credits),i&&this.buildTouch();let u=(f,g)=>a.tap(f,g);u(this.goBtn,()=>e.start()),u(this.resumeBtn,()=>e.resume()),u(this.againBtn,()=>e.restart()),u(this.wonBtn,()=>e.restart());let l=-1e9,d=f=>{this.credits.classList.toggle("on",f),f&&(this.credits.scrollTop=0,l=performance.now())};u(this.creditLink,()=>d(!0)),u(this.creditClose,()=>d(!1)),this.credits.addEventListener("click",f=>{f.stopPropagation(),f.target===this.credits&&performance.now()-l>600&&d(!1)}),this.credits.addEventListener("pointerdown",f=>f.stopPropagation()),document.addEventListener("keydown",f=>{f.code==="Escape"&&this.credits.classList.contains("on")&&(d(!1),f.stopImmediatePropagation(),f.preventDefault())},!0),this.buildRows(),this.mode=""}static tap(t,e){let i=null,n=0,s=0,r=-1e9,o=!1;t.addEventListener("pointerdown",h=>{i=h.pointerId,n=h.clientX,s=h.clientY,o=!1,h.stopPropagation()}),t.addEventListener("pointerup",h=>{h.pointerId===i&&(i=null,h.stopPropagation(),Math.hypot(h.clientX-n,h.clientY-s)<30&&(o=!0,e(h),r=performance.now()))}),t.addEventListener("pointercancel",()=>{i=null}),t.addEventListener("click",h=>{if(h.stopPropagation(),o&&performance.now()-r<1500){o=!1;return}o=!1,e(h)})}buildRows(){let t=this.api,e=(i,n)=>{i.innerHTML="";let s=(r,o,h)=>{let c=Ut("div","row act",`${r}<b></b>`),u=c.querySelector("b"),l=()=>{u.textContent=o()};a.tap(c,()=>{h(),this.refresh()}),this._upd.push(l),l(),i.appendChild(c)};if(s("\uD654\uC9C8",()=>t.get("quality"),()=>t.cycle("quality")),s("\uC2DC\uC810",()=>t.get("view"),()=>t.cycle("view")),s("\uC790\uB3D9 \uCE74\uBA54\uB77C",()=>t.get("autocam"),()=>t.cycle("autocam")),s("\uCE74\uBA54\uB77C \uD754\uB4E4\uB9BC",()=>t.get("shake"),()=>t.cycle("shake")),s("\uC18C\uB9AC \uD06C\uAE30",()=>t.get("volume"),()=>t.cycle("volume")),s("\uD6A8\uACFC\uC74C",()=>t.get("sfx"),()=>t.cycle("sfx")),n){let r=Ut("div","row tests wide","\uC2DC\uD5D8 \uC7A5\uBA74");for(let h of"ABCDEFGH"){let c=Ut("span","t act",h);a.tap(c,()=>t.scenario(h)),r.appendChild(c)}for(let[h,c]of[["K","\uD654\uBB3C\uC120"],["O","\uC775\uC0AC"],["X","\uD0C8\uC9C4"],["R","\uD5EC\uAE30"],["W","\uD070 \uD30C\uB3C4"],["P","\uC0DD\uC874\uC790"]]){let u=Ut("span","t act tl",c);a.tap(u,()=>t.scenario(h)),r.appendChild(u)}i.appendChild(r);let o=Ut("div","row act wide","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC");a.tap(o,()=>t.restart()),i.appendChild(o)}};this._upd=[],e(this.titleRows,!1),e(this.pauseRows,!0)}refresh(){for(let t of this._upd)t()}show(t,e){this.mode=t,this.title.classList.toggle("on",t==="title"),this.pause.classList.toggle("on",t==="paused"),this.dead.classList.toggle("on",t==="dead"),this.won.classList.toggle("on",t==="won"),t==="won"&&(this.wonTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+bl(e.time)),t!=="playing"&&this.noteEl.classList.remove("on"),this.hud.classList.toggle("on",t==="playing"),this.touch.classList.toggle("on",t==="playing"&&this.isTouch),this.creditLink.classList.toggle("on",t!=="playing"),t==="playing"&&this.credits.classList.remove("on"),t==="paused"&&(this.pauseTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+bl(e.time)),t==="dead"&&(this.deadTitle.textContent=e.cause==="cold"?"\uCCB4\uC628\uC744 \uC783\uACE0 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4":e.cause==="ship"?"\uBC30 \uBC11\uC73C\uB85C \uBE68\uB824 \uB4E4\uC5B4\uAC14\uB2E4":"\uC228\uC774 \uB2E4\uD574 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4",this.deadTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+bl(e.time)),this.refresh(),t!=="playing"&&this.releaseTouch()}cine(t){this.root.classList.toggle("cine",!!t),t&&(this.noteEl.classList.remove("on"),clearTimeout(this._nt))}note(t,e=6){this.noteEl.textContent=t,this.noteEl.classList.add("on"),clearTimeout(this._nt),this._nt=setTimeout(()=>this.noteEl.classList.remove("on"),e*1e3)}setMode(t){if(t===this.act)return;this.act=t;let e="<span><b>V</b><i>\xB7</i><b>\uD720</b>\uC2DC\uC810</span><span><b>Esc</b>\uBA48\uCDA4</span>",i=t==="boat"?"<span><b>Space</b>\uAF49 \uBD99\uC7A1\uAE30</span>"+e:t==="cling"?"<span><b>Space</b>\uAF49 \uC950\uAE30</span><span><b>F</b>\uB193\uAE30</span>"+e:t==="ship"?"<span><b>Space</b>\uD5E4\uC5C4</span><span><b>F</b>\uC190 \uD754\uB4E4\uAE30</span>"+e:"<span><b>Space</b>\uD5E4\uC5C4</span><span><b>F</b>\uC785\uC218</span>"+e;this.keysEl&&(this.keysEl.innerHTML=i),this.swBtn&&(this.swBtn.textContent=t==="boat"?"\uBD99\uC7A1\uAE30":t==="cling"?"\uAF49 \uC950\uAE30":"\uD5E4\uC5C4",this.dvBtn.textContent=t==="cling"?"\uB193\uAE30":t==="ship"?"\uD754\uB4E4\uAE30":"\uC785\uC218",this.dvBtn.style.opacity=t==="boat"?"0.3":"")}setBars(t,e,i,n=0){let s=(r,o,h,c)=>{r.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,o)).toFixed(3)})`,r.el.classList.toggle("show",o<h),r.el.classList.toggle("low",o<c)};s(this.bars.o2,t,.97,.3),s(this.bars.st,e,.9,.22),s(this.bars.tp,i,.8,.35),this.bars.rs.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,n)).toFixed(3)})`,this.bars.rs.el.classList.toggle("show",n>.01)}buildTouch(){let t=this.api,e=t.input;e.touch={x:0,z:0,swim:!1,dive:!1};let i=Ut("div","zone zl"),n=Ut("div","zone zr"),s=Ut("div","stick","<b></b>"),r=s.firstChild;this.touch.append(i,n,s);let o=null,h=0,c=0,u=null,l=0,d=0,f=56;i.addEventListener("pointerdown",A=>{if(o===null){o=A.pointerId,h=A.clientX,c=A.clientY;try{i.setPointerCapture(A.pointerId)}catch{}s.style.display="block",s.style.left=h+"px",s.style.top=c+"px",r.style.transform="translate(0,0)",A.preventDefault()}}),i.addEventListener("pointermove",A=>{if(A.pointerId!==o)return;let _=A.clientX-h,T=A.clientY-c,I=Math.hypot(_,T);I>f&&(_*=f/I,T*=f/I),r.style.transform=`translate(${_}px,${T}px)`;let G=.12,q=_/f,U=-T/f;Math.hypot(q,U)<G&&(q=0,U=0),e.touch.x=q,e.touch.z=U,A.preventDefault()});let g=A=>{A.pointerId===o&&(o=null,e.touch.x=0,e.touch.z=0,s.style.display="none")};i.addEventListener("pointerup",g),i.addEventListener("pointercancel",g),n.addEventListener("pointerdown",A=>{if(u===null){u=A.pointerId,l=A.clientX,d=A.clientY;try{n.setPointerCapture(A.pointerId)}catch{}A.preventDefault()}}),n.addEventListener("pointermove",A=>{A.pointerId===u&&(e.dx+=(A.clientX-l)*2.2,e.dy+=(A.clientY-d)*2.2,l=A.clientX,d=A.clientY,e.lastLook=performance.now()/1e3,A.preventDefault())});let b=A=>{A.pointerId===u&&(u=null)};n.addEventListener("pointerup",b),n.addEventListener("pointercancel",b);let m=(A,_)=>{let T=Ut("div","btn "+A,_);return this.touch.appendChild(T),T},p=this.swBtn=m("sw","\uD5E4\uC5C4"),v=this.dvBtn=m("dv","\uC785\uC218"),x=m("sm vw",'<svg viewBox="0 0 24 24"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/></svg>\uC2DC\uC810'),w=m("sm ps",'<svg viewBox="0 0 24 24"><path d="M8.5 5v14M15.5 5v14"/></svg>\uBA48\uCDA4'),R=(A,_)=>{let T=null;A.addEventListener("pointerdown",G=>{G.preventDefault(),G.stopPropagation(),T=G.pointerId;try{A.setPointerCapture(G.pointerId)}catch{}A.classList.add("on"),e.touch[_]=!0});let I=G=>{T!==null&&G.pointerId!==T||(G.stopPropagation(),T=null,A.classList.remove("on"),e.touch[_]=!1)};A.addEventListener("pointerup",I),A.addEventListener("pointercancel",I),A.addEventListener("lostpointercapture",I)};R(p,"swim"),R(v,"dive"),x.addEventListener("pointerdown",A=>{A.preventDefault(),A.stopPropagation(),t.toggleView()}),w.addEventListener("pointerdown",A=>{A.preventDefault(),A.stopPropagation(),t.pause()}),this.releaseTouch=()=>{o=null,u=null,e.touch.x=0,e.touch.z=0,e.touch.swim=!1,e.touch.dive=!1,s.style.display="none",p.classList.remove("on"),v.classList.remove("on")};let y=()=>this.releaseTouch(),E=A=>{(!A.touches||A.touches.length===0)&&y()};document.addEventListener("touchend",E,{capture:!0,passive:!0}),document.addEventListener("touchcancel",E,{capture:!0,passive:!0}),window.addEventListener("blur",y),window.addEventListener("pagehide",y),document.addEventListener("visibilitychange",()=>{document.hidden&&y()})}releaseTouch(){}};var Ui={A:{label:"\uBCF4\uD1B5 \uD30C\uB3C4\uC5D0 \uB5A0 \uC788\uAE30",storm:.42,t0:40,view:"third",keys:{},script:[]},B:{label:"\uD070 \uB108\uC6B8 \uC811\uADFC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:a=>a.interaction.launch({lead:15,height:16,breakOffset:9,angleOffset:0,width:240,speed:13,frontMin:27,back:70})}]},C:{label:"\uD30C\uB3C4 \uBD95\uAD34 \xB7 \uCDA9\uB3CC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:a=>a.interaction.launch({lead:9,height:13.5,breakOffset:-1,angleOffset:0,width:170,speed:14})}]},D:{label:"\uBB3C\uC18D \uD718\uB9D0\uB9BC",storm:1,t0:12,view:"first",keys:{},script:[{t:.1,do:a=>a.interaction.launch({lead:6,height:14.5,breakOffset:-1.3,angleOffset:0,width:170,speed:14})}]},E:{label:"\uC218\uBA74 \uBCF5\uADC0",storm:.85,t0:30,view:"first",keys:{up:!0,sprint:!0},setup:a=>{a.body.pos.y-=5.5,a.body.prevPos.copy(a.body.pos),a.survival.oxygen=42,a.survival.wasUnder=!0,a.survival.submergedTime=14,a.cam.pitch=.7},script:[{t:9,do:a=>{a.input.virtual={}}}]},F:{label:"\uBC88\uAC1C",storm:.9,t0:55,view:"third",keys:{},script:[{t:2,do:a=>a.lightning.strike(a.camera.position,{azimuth:Math.PI,dist:1700,sheet:0,power:1.4})},{t:9,do:a=>a.lightning.strike(a.camera.position,{azimuth:Math.PI*.8,dist:5200,sheet:1,power:1})}]},G:{label:"\uCDA9\uB3CC \uC911 \uC2DC\uC810 \uC804\uD658",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:a=>a.interaction.launch({lead:7,height:12.5,breakOffset:-1,angleOffset:0,width:170,speed:14})},...[2,3.6,5.2,6.4,7.4,8.4,9.6,11,12.6,14.2].map(a=>({t:a,do:t=>t.cam.toggle()}))]}};Ui.H={label:"\uD574\uC77C \xB7 \uBB3C\uC18D \uAE4A\uC774 \uD718\uB9D0\uB9BC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:a=>a.interaction.launchMega({lead:14,height:42})}]};Ui.K={label:"\uD654\uBB3C\uC120",storm:.8,t0:30,view:"third",keys:{},script:[{t:.3,do:a=>{a.cargo.loaded&&a.cargo.start(a.body.pos,{dist:260,offset:0})}},{t:.6,do:a=>{let t=a.cargo.pos,e=a.body.pos;a.cam.yaw=Math.atan2(t.x-e.x,t.z-e.z),a.cam.pitch=.02}}]};Ui.O={label:"\uC775\uC0AC",storm:.85,t0:30,view:"third",keys:{},setup:a=>{a.body.pos.y-=6.5,a.body.prevPos.copy(a.body.pos),a.survival.oxygen=1.5,a.survival.wasUnder=!0,a.survival.submergedTime=20},script:[]};Ui.X={label:"\uD0C8\uC9C4",storm:1,t0:12,view:"third",keys:{swim:!0,z:1},setup:a=>{a.survival.stamina=4,a.survival.oxygen=26,a.survival.windTold=!0},script:[{t:.1,do:a=>a.interaction.launch({lead:7,height:13,breakOffset:-1,angleOffset:0,width:170,speed:14})},{t:7,do:a=>{a.input.virtual={}}}]};Ui.P={label:"\uC0DD\uC874\uC790",storm:.8,t0:30,view:"third",keys:{},script:[{t:.3,do:a=>{a.spawnOther(!0)}}]};Ui.W={label:"\uD070 \uD30C\uB3C4",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:a=>a.interaction.launch({lead:9,height:22,breakOffset:.2,angleOffset:0,width:220,speed:15})},{t:.4,do:a=>{let t=a.interaction;(t.crestDx||t.crestDz)&&(a.cam.yaw=Math.atan2(-t.crestDx,-t.crestDz))}}]};Ui.R={label:"\uAD6C\uC870 \uD5EC\uAE30",storm:.8,t0:30,view:"third",keys:{},script:[{t:.5,do:a=>a.rescue.dispatch(a.body.pos,Math.PI,16)}],each:a=>{let t=a.rescue;if(t.state==="lift"||a.state!=="playing"){a.input.virtual=null;return}if(t.state!=="hover")return;let e=t.ring,i=a.body.pos,n=Math.hypot(e.x-i.x,e.z-i.z);a.cam.yaw=Math.atan2(e.x-i.x,e.z-i.z),a.input.virtual=n>1?{z:1,swim:!0}:{swim:!0},a.input.enabled=!0}};Ui.S={label:"\uBCF4\uD2B8\uC5D0\uC11C \uC2DC\uC791 \xB7 \uC804\uBCF5",storm:1,t0:12,view:"third",keys:{},setup:a=>{a.board()},script:[{t:1,do:a=>a.launchIntroWave(9)}]};Ui.T={label:"\uBCF4\uD2B8\uC5D0 \uB5A0 \uC788\uAE30",storm:.7,t0:30,view:"third",keys:{},setup:a=>a.board(),script:[]};var Oo=class{constructor(t){this.game=t,this.active=null,this.t=0,this.next=0,this.name=""}run(t){let e=Ui[t];if(!e)return!1;let i=this.game;i.waves.time=e.t0;for(let n of i.waves.breakers)n.active=!1;return i.weather.locked=!0,i.weather.base=i.weather.storm=e.storm,i.weather.time=0,i.interaction.auto=!1,i.autoLightning=!1,i.lightning.active=!1,i.lightning.pendingThunder.length=0,i.rescue.reset(1e9),i.weather.update(0),i.waves.update(0),i.resetPlayer(),i.cam.setMode(e.view),i.cam.blend=i.cam.target,i.cam.yaw=-Math.PI/2,i.cam.pitch=e.view==="first"?-.02:-.08,i.input.virtual=e.keys&&Object.keys(e.keys).length?{...e.keys}:null,i.input.virtual&&(i.input.enabled=!0),e.setup&&e.setup(i),this.active=e,this.name=t,this.t=0,this.next=0,!0}stop(){this.active=null,this.game.input.virtual=null}update(t){if(!this.active)return;this.t+=t;let e=this.active.script;for(;this.next<e.length&&this.t>=e[this.next].t;)e[this.next].do(this.game),this.next++;this.active&&this.active.each&&this.active.each(this.game,this.t)}};var mf={scream:[["scream_eyes",1,"snap"],["scream_mouth",1,"open"]],fear:[["fear_brows",1,"snap"],["scream_mouth",.85,"open"]],agony:[["agony",1,"slow"]],sob:[["sob",1,"slow"]],terror:[["fear_brows",1,"snap"],["scream_eyes",.25,"snap"],["shout_mouth",1,"open"]],hit:[["eyes_wide",1,"snap"],["clench",1,"snap"],["fear_brows",.3,"snap"]],strain:[["clench",.85,"slow"],["strain_eyes",1,"slow"]],dying:[["exhaust",1,"slow"],["sob",.35,"slow"]],shock:[["jaw_drop",1,"open"],["eyes_wide",.8,"snap"],["fear_brows",.6,"snap"]],gasp:[["gasp",1,"snap"],["eyes_wide",.5,"snap"]],silent:[["jaw_drop",.9,"slow"],["strain_eyes",.8,"slow"]],wince:[["strain_eyes",.7,"snap"],["clench",.6,"snap"]],hold:[["clench",.4,"slow"],["eyes_wide",.55,"slow"],["fear_brows",.35,"slow"]],choke:[["eyes_wide",1,"snap"],["gasp",.55,"open"],["exhaust",.2,"slow"]],howl:[["sob",.7,"slow"],["shout_mouth",1,"open"]],pant:[["exhaust",.6,"slow"],["gasp",.45,"breath"]],blank:[["exhaust",.5,"slow"],["eyes_wide",.4,"slow"],["jaw_drop",.25,"slow"]],groan:[["strain_eyes",.9,"slow"],["agony",.5,"slow"],["clench",.5,"slow"],["fear_brows",.25,"slow"]],moan:[["agony",.75,"slow"],["sob",.4,"slow"],["exhaust",.35,"breath"],["strain_eyes",.35,"slow"]]},y1={snap:16,open:8,slow:3.2,breath:6},No=class{constructor(){this.mesh=null,this.dict=null,this.inf=null,this.cur={},this.tgt={},this.shape={},this.forced=null,this.forcedT=0,this.forcedGain=1,this.label="none",this.time=0,this.blinkT=2,this.blink=0}attach(t){if(!t||!t.morphTargetDictionary||!t.morphTargetInfluences)return!1;this.mesh=t,this.dict=t.morphTargetDictionary,this.inf=t.morphTargetInfluences;for(let e of Object.keys(this.dict))this.cur[e]=0,this.tgt[e]=0,this.shape[e]="slow";return!0}play(t,e,i=1){mf[t]&&(this.forced=t,this.forcedT=e,this.forcedGain=i)}update(t,e){if(!this.mesh)return;this.time+=t;let i=this.tgt,n=this.shape;for(let l in i)i[l]=0;let s=0;this.label="none";let r=(l,d)=>{if(!(d<=.01)){d>s&&(s=d,this.label=l);for(let[f,g,b]of mf[l]){if(i[f]===void 0)continue;let m=g*Math.min(1,d)*(b==="breath"?.5+.5*Math.sin(e.breathPhase*6.283):1);m>i[f]&&(i[f]=m,n[f]=b)}}};if(this.forcedT-=t,this.forced&&this.forcedT>0?r(this.forced,this.forcedGain):this.forced=null,!e.alive||e.blackout>.75)r("blank",1);else if(e.mouthUnder){let l=e.oxygen;e.impact>1&&r("hit",Math.min(1,e.impact/1.8)),l<14?(r("silent",1),r("agony",.7)):l<34?(r("choke",1),r("agony",.5*(34-l)/20)):l<62?(r("strain",.5+.5*(62-l)/28),r("hold",.6)):r("hold",1),e.blackout>.15&&r("dying",e.blackout*1.2)}else e.impact>1&&r("hit",Math.min(1,e.impact/1.8)),e.air>.3&&r("shock",e.air),e.brace>.3&&(r(e.crestDist<12?"terror":"fear",e.brace),e.brace>.85&&e.crestDist<5&&r("hold",.8)),e.gaspTimer>0&&(e.inhaling?r("gasp",.45+.55*Math.min(1,e.gaspTimer/2.5)):r("pant",1),e.swallow>.25&&r("wince",.7)),r("choke",ct((40-e.oxygen)/30)),e.stamina<24&&r("dying",1-e.stamina/24),e.effort>.7&&r("strain",Math.min(1,(e.effort-.7)*1.5)),e.temp<35.2&&r("groan",ct((35.2-e.temp)/2)*.7),s<.35&&r("pant",.25+.5*e.exertion);this.blinkT-=t,this.blinkT<=0&&(this.blink=.16,this.blinkT=1.8+Math.random()*3.5),this.blink=Math.max(0,this.blink-t),this.blink>0&&!e.mouthUnder&&i.strain_eyes!==void 0&&(i.strain_eyes=Math.max(i.strain_eyes,.9));let o=this.inf,h=this.dict,c=this.cur,u=0;for(let l in c){let f=i[l]>c[l]?y1[n[l]]||4:3.4;c[l]+=(i[l]-c[l])*(1-Math.exp(-t*f));let g=1+.12*Math.sin(this.time*(2.3+u*.37)+u*1.9)*(c[l]>.05?1:0);o[h[l]]=Math.max(0,Math.min(1.15,c[l]*g)),u++}}};var _1={gasp:[["b_gasp3",0,3,.72],["b_gasp4",0,3,.7],["b_gasp2",0,3,.8],["b_gasp1",0,3,.9]],inhale:[["b_gasp3",0,.85,.62],["b_gasp4",0,.62,.6]],cough:[["b_choke",.25,1.7,1],["b_choke",1.95,3,1.1],["b_choke",3.9,5,1.2],["b_choke",7.15,8.95,1.1],["b_choke",9.4,10.8,.9]],sputter:[["b_choke",5.45,6.1,1.1],["b_choke",14.25,14.7,.9],["b_choke",15.4,16.5,1],["b_choke",19.45,20.05,.6]],retch:[["b_choke",11.65,14.15,1.2],["b_choke",17.65,18.8,.8]],groan:[["b_under",0,1.25,1.2],["b_under",2.05,3.45,1.2]],bubbles:[["b_under",4.1,8.15,.9]]},w1={gasp:1.2,inhale:3,cough:1.2,sputter:1.4,retch:4,groan:3,bubbles:1.5},M1={gasp:"gasp",inhale:"gasp",cough:"wince",sputter:"wince",retch:"choke",groan:"silent",bubbles:"choke"},E1={cough:1,sputter:1,retch:1},Bo=class{constructor(t,e,i={}){this.audio=t,this.face=e,this.hooks=i,this.t=0,this.cool={},this.cur={prio:0,until:0},this.jobs=[],this.marks={},this.prevBrace=0,this.prevAir=0,this.prevDive=!1,this.splashCool=0,this.slapCool=0,this.gurgleUntil=0,this.gT=0,this.bubT=2,this.bed=0,this.last="",this.lastPick={},this.count=0}say(t,e,i,n){let s=this.t;if(s<(this.cool[t]||0)||s<this.cur.until&&e<=this.cur.prio)return 0;let r=_1[t],o=Math.random()*r.length|0;r.length>1&&o===this.lastPick[t]&&(o=(o+1)%r.length),this.lastPick[t]=o;let[h,c,u,l]=r[o],d=!!(n&&n.under),f=this.audio.playVoice(h,i*l*(d?1.3:1),.97+Math.random()*.06,[c,u]);this.last=t,this.count++;let g=f||u-c;return this.cur={prio:e,until:s+g*.85},this.cool[t]=s+g+w1[t],this.face&&this.face.play(d?t==="groan"?"silent":"choke":M1[t],g+.25),E1[t]&&this.hooks.cough&&this.hooks.cough(g),d&&(this.audio.gurgle(.95),this.hooks.bubbles&&this.hooks.bubbles(Math.min(44,Math.round(12+g*14))),this.gurgleUntil=s+g,this.gT=.3),g}later(t,e){this.jobs.push({at:this.t+t,fn:e})}pick(t,e){let i=(this._last||(this._last={}))[t],n=1+(Math.random()*e|0);return n===i&&(n=1+n%e),this._last[t]=n,t+n}onEvent(t,e,i){if(!(!i||!i.alive)){if(t==="surface")if(e.time>1.2||e.need>.2){let n=this.say("gasp",6,1,i);e.time>7||i.swallow>.45?this.later(Math.max(1.1,n*.6),s=>{s.under||this.say("retch",6,1,s)}):(e.time>3.2||i.swallow>.2)&&this.later(Math.max(1,n*.55),s=>{s.under||this.say("cough",5,.95,s)})}else e.time>.25&&(i.swallow>.1||Math.random()<.5)&&this.say("sputter",3,.8,i);else if(t==="impact")e.strength>1.15&&!i.under&&this.say("sputter",4,1,i);else if(t==="exhale"&&e.cough)i.under||this.say("cough",4,.85,i);else if(t==="splash")this.t>this.splashCool&&e.v>1.8&&!i.camUnder&&(this.splashCool=this.t+.45,this.audio.playClip(e.v>4?Math.random()<.5?"w_splash2":"w_splash1":"w_splash3",Math.min(.9,.15+e.v*.09),.9+Math.random()*.25,Math.random()*1.2-.6));else if(t==="limb"&&this.t>this.slapCool&&e.v>1.3&&!i.camUnder){this.slapCool=this.t+.07;let n=(i.struggle||0)>.45||i.drown>0&&i.drown<.68,s=.9+Math.random()*.22;e.kind==="hand"&&n?this.audio.playClip(this.pick("w_thrash",5),Math.min(1.15,.36+e.v*.12),s,e.pan||0):e.kind==="hand"?this.audio.playClip(this.pick("w_stroke",6),Math.min(1,.26+e.v*.11),s,e.pan||0):this.audio.playClip("w_slap"+(1+(Math.random()*6|0)),Math.min(.6,.05+e.v*.07)*(e.kind==="arm"?.6:1),.85+Math.random()*.4,e.pan||0)}}}update(t,e){this.t+=t;for(let c=this.jobs.length-1;c>=0;c--)this.t>=this.jobs[c].at&&this.jobs.splice(c,1)[0].fn(e);let i=e.alive&&!e.under,n=c=>Math.max(0,Math.min(1,c)),s=n(.3+.55*(e.exertion||0)+(e.gaspTimer>0?.35:0)+.3*(e.struggle||0)+.25*n(e.brace||0)+.2*(e.air||0)+.38*(e.fear||0)),r=n((30-e.stamina)/25),o=this.t<this.cur.until?.28:1,h=i?(1-(e.blackout||0))*o:0;if(this.bed=h*(.2+.8*s)*(1-.7*r),this.audio.setBreath(this.bed*.95,h*(.12+.88*r)*.9,.92+.42*s,i),!!e.alive)if(e.under&&this.t<this.gurgleUntil&&(this.gT-=t,this.gT<=0&&(this.audio.gurgle(.6),this.gT=.32+Math.random()*.3,this.hooks.bubbles&&this.hooks.bubbles(7))),!e.under&&e.mouthDepth!==void 0&&e.mouthDepth>-.07&&(this.lipT=(this.lipT||0)-t,this.lipT<=0&&(this.lipT=.35+Math.random()*.35,this.audio.gurgle(.35+.3*Math.random()),this.hooks.bubbles&&e.mouthDepth>-.02&&this.hooks.bubbles(3))),!e.under&&(e.fear||0)>.68&&(this.fearT=(this.fearT===void 0?3:this.fearT)-t,this.fearT<=0&&(this.fearT=3.5+Math.random()*4.5,this.say("gasp",2,.55+.4*e.fear,e))),e.brace>.7&&this.prevBrace<=.7&&e.crestHeight>6&&!e.under&&this.say("inhale",5,1,e),this.prevBrace=e.brace,e.dive&&!this.prevDive&&!e.under&&this.say("inhale",5,.9,e),this.prevDive=e.dive,e.air>.5&&this.prevAir<=.5&&!e.under&&this.say("inhale",5,1,e),this.prevAir=e.air,e.under){let c=n(((e.tumble||0)-.25)*2.2+((e.turb||0)-.3)*1.2);c>.05?(this.thrG=(this.thrG||0)-t,this.thrG<=0&&(this.thrG=.16+(1-c)*.3+Math.random()*.14,this.audio.gurgle(.45+.5*c),this.hooks.bubbles&&this.hooks.bubbles(Math.round(5+9*c))),this.thrV=(this.thrV||0)-t,this.thrV<=0&&(this.thrV=1.7+Math.random()*1.4,this.say("bubbles",3,.6+.4*c,e))):this.thrV=Math.min(this.thrV||0,.4);let u=e.oxygen;u<48&&!this.marks.a&&(this.marks.a=!0,this.say("groan",5,.8,e)),u<30&&!this.marks.b&&(this.marks.b=!0,this.say("groan",6,1,e)),u<14&&!this.marks.c&&(this.marks.c=!0,this.say("groan",7,1,e)),u<72&&(this.bubT-=t*(1+n((50-u)/40)),this.bubT<=0&&(this.bubT=2.6+Math.random()*2.4,this.say("bubbles",2,.55+.4*n((60-u)/50),e)))}else e.oxygen>60&&(this.marks.a=this.marks.b=this.marks.c=!1)}};var vl=`
varying vec3 vP;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vP = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,xl=`
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
}`,T1=`
varying vec2 vP;
void main() { vP = (uv - 0.5) * 2.0 * 5.2; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,S1=`
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
}`,fs=25,Ho=class{constructor(t){this.waves=t,this.group=new re,this.group.visible=!1,this.state="none",this.arriveAt=240,this.hoverTime=0,this.hold=0,this.rescued=!1,this.pos=new M,this.vel=new M,this.ring=new M,this.ringVel=new M,this.tan=.125,this.time=0,this.aim=new M,this._s=ri(),this._v=new M,this._d=new M,this._down=new M(0,-1,0),this._from=new M;let e=this.heli=new re,i=new Se({color:13620438,roughness:.45,metalness:.2}),n=new Se({color:13127708,roughness:.5,metalness:.1}),s=new Se({color:1316892,roughness:.5,metalness:.4}),r=new Se({color:395532,roughness:.08,metalness:.8});{let N=document.createElement("canvas");N.width=N.height=512;let P=N.getContext("2d");P.fillStyle="#e9ecee",P.fillRect(0,0,512,512);let W=7,k=()=>(W=W*16807%2147483647,W/2147483647);for(let D=0;D<2600;D++){let B=205+k()*45;P.fillStyle=`rgba(${B},${B},${B+3},0.25)`,P.fillRect(k()*512,k()*512,2+k()*5,2+k()*5)}for(let D=0;D<46;D++){let B=k()*512,Y=3+k()*14,Q=P.createLinearGradient(0,0,0,512);Q.addColorStop(0,"rgba(60,62,66,0)"),Q.addColorStop(.3+k()*.3,`rgba(60,62,66,${.05+k()*.12})`),Q.addColorStop(1,"rgba(60,62,66,0)"),P.fillStyle=Q,P.fillRect(B,0,Y,512)}P.strokeStyle="rgba(40,44,50,0.62)",P.lineWidth=1.6;for(let D of[64,150,256,330,420,500])P.beginPath(),P.moveTo(0,D),P.lineTo(512,D),P.stroke();for(let D of[0,86,128,214,256,342,384,470])P.beginPath(),P.moveTo(D,0),P.lineTo(D,512),P.stroke();P.fillStyle="rgba(50,54,60,0.55)";for(let D of[58,70,144,156,250,262,324,336,414,426])for(let B=4;B<512;B+=9)P.fillRect(B,D,1.6,1.6);for(let D of[80,92,208,220,336,348,464,476])for(let B=4;B<512;B+=9)P.fillRect(D,B,1.6,1.6);let O=new Gi(N);O.colorSpace=me,O.wrapS=O.wrapT=ai,O.repeat.set(4,3),O.anisotropy=4,i.map=O,i.color.set(14672869)}let o=(N,P,W,k,O=512)=>{let D=document.createElement("canvas");D.width=O,D.height=Math.round(O*W/P);let B=D.getContext("2d");B.textAlign="center",B.textBaseline="middle",B.fillStyle=k;let Y=D.height/N.length;N.forEach(([X,ot],nt)=>{B.font=`900 ${Math.round(Y*ot)}px "Arial Black", "Malgun Gothic", "Noto Sans KR", Arial, sans-serif`,B.fillText(X,O/2,Y*(nt+.5),O*.96)});let Q=new Gi(D);return Q.colorSpace=me,Q.anisotropy=4,new pt(new Si(P,W),new Se({map:Q,transparent:!0,alphaTest:.35,roughness:.6,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}))},h=[[.02,3.35],[.55,3.2],[.95,2.8],[1.22,2.1],[1.32,1.2],[1.32,0],[1.25,-1],[1,-1.9],[.62,-2.6],[.4,-3.6],[.3,-5.4],[.22,-7.3],[.12,-8.2],[.02,-8.35]],c=new pt(new Js(h.map(([N,P])=>new gt(N,P)),28),i);c.rotation.x=Math.PI/2,c.scale.set(1,1,1.12),e.add(c);let u=new pt(new ge(1.345,1.3,.9,28,1,!0),n);u.rotation.x=Math.PI/2,u.scale.set(1,1,1.12),u.position.z=-.75,e.add(u);let l=new pt(new ge(.33,.3,.7,14,1,!0),n);l.rotation.x=Math.PI/2,l.position.set(0,0,-5.6),e.add(l);let d=[[1.335,.9],[1.335,1.25],[1.235,2.1],[.965,2.8],[.565,3.2],[.03,3.36]].map(([N,P])=>new gt(N*1.012,P)),f=new pt(new Js(d,20,Math.PI/2+.38,Math.PI-.76),r);f.rotation.x=Math.PI/2,f.scale.set(1,1,1.12),e.add(f);for(let N of[-1,1]){let P=new pt(new ke(.05,.62,1.05),r);P.position.set(N*1.335,.42,-1.25),e.add(P);let W=new pt(new ke(.06,1.5,.09),i);W.position.set(N*1.31,.2,.92),e.add(W)}let g=new pt(new ke(1.5,.12,3.6),s);g.position.set(0,-1.44,.2),e.add(g);let b=new pt(new $i(1,18,12),i);b.scale.set(.85,.55,1.9),b.position.set(0,1.35,-.5),e.add(b);for(let N of[-1,1]){let P=new pt(new ge(.16,.2,.9,10),s);P.rotation.x=Math.PI/2,P.position.set(N*.55,1.35,-1.9),e.add(P)}let m=new pt(new ke(.1,2,1),i);m.position.set(0,.95,-7.9),m.rotation.x=-.42,e.add(m);let p=new pt(new ke(.11,.5,.75),n);p.position.set(0,1.78,-8.28),p.rotation.x=-.42,e.add(p);let v=new pt(new ke(2.6,.07,.6),i);v.position.set(0,.1,-6.9),e.add(v);let x=new pt(new ge(.13,.2,.75,10),s);x.position.set(0,2.05,-.2),e.add(x);let w=new pt(new ge(.34,.34,.16,12),s);w.position.set(0,2.42,-.2),e.add(w);for(let N of[-1,1]){let P=new pt(new ge(.06,.06,4.6,8),s);P.rotation.x=Math.PI/2,P.position.set(N*1.35,-1.75,.3),e.add(P);let W=new pt(new ge(.06,.06,.6,8),s);W.rotation.x=Math.PI/2-.6,W.position.set(N*1.35,-1.6,2.8),e.add(W);for(let k of[-1,1]){let O=new pt(new ge(.05,.05,1.05,6),s);O.position.set(N*1.12,-1.28,.3+k*1.15),O.rotation.z=-N*.45,e.add(O)}}let R=new pt(new ke(.06,1.35,1.5),new Ge({color:new Dt(.06,.04,.018)}));R.position.set(1.325,.05,.1),e.add(R);let y=new pt(new $i(.2,10,8),new Ge({color:329223}));y.position.set(1.36,.35,.45),y.scale.set(.5,1,1),e.add(y);let E=new pt(new ke(.1,.55,.42),new Ge({color:329223}));E.position.set(1.36,-.08,.45),e.add(E);let A=new pt(new ge(.06,.06,1.3,8),s);A.rotation.z=Math.PI/2-.25,A.position.set(1.75,1,.1),e.add(A);let _=new pt(new ge(.16,.16,.34,10),s);_.rotation.x=Math.PI/2,_.position.set(2.32,.86,.1),e.add(_);{let N=o([["RESCUE",.92]],1.45,.38,"#b8431a");N.position.set(-1.345,-.3,.52),N.rotation.y=-Math.PI/2,e.add(N);let P=o([["\uAD6C\uC870",.9]],.62,.36,"#b8431a");P.position.set(-1.33,-.75,.52),P.rotation.y=-Math.PI/2,e.add(P);for(let O of[-1,1]){let D=o([["119",.95]],.62,.36,"#f1f3f4");D.position.set(O*1.37,-.28,O>0?-1:-.75),D.rotation.y=O*Math.PI/2,e.add(D)}let W=o([["119",.95],["RESCUE",.62]],1.35,2.3,"#d4572a");W.position.set(0,-1.512,.25),W.rotation.x=Math.PI/2,e.add(W),W.material.emissiveMap=W.material.map,W.material.emissive.set(16777215),W.material.emissiveIntensity=.55;let k=o([["119",.9]],.5,.3,"#b8431a");k.position.set(.062,.85,-7.86),k.rotation.set(-.42,Math.PI/2,0,"YXZ"),e.add(k)}{let N=new pt(new ge(.26,.2,.34,14),s);N.rotation.x=-.5,N.position.set(0,-1.16,2.1),e.add(N);let P=new pt(new xn(.235,.035,8,18),s);P.rotation.x=Math.PI/2-.5,P.position.set(0,-1.29,2.2),e.add(P);let W=new pt(new ke(.62,.07,.07),s);W.position.set(0,-1.05,2.05),e.add(W);for(let Q of[-1,1]){for(let lt of[1.25,-.75]){let Z=new pt(new vn(.17,1.15,4,10),new Se({color:2303787,roughness:.8}));Z.rotation.x=Math.PI/2,Z.position.set(Q*1.35,-1.62,lt),e.add(Z)}let X=new pt(new ge(.012,.012,.75,4),s);X.position.set(Q*.3,1.55,2.25),X.rotation.x=.5,e.add(X);let ot=new pt(new ge(.014,.014,.5,5),s);ot.rotation.x=Math.PI/2,ot.position.set(Q*.42,-.62,3.2),e.add(ot);let nt=new pt(new ke(.05,.55,.5),i);nt.position.set(Q*1.3,.1,-6.9),e.add(nt)}let k=new pt(new ke(.34,.05,1.3),s);k.position.set(1.5,-.95,.1),e.add(k);for(let Q of[.3,.62]){let X=new pt(new vn(.075,.42,3,8),new Se({color:11553308,roughness:.7}));X.position.set(1.47,-.72,Q),X.rotation.z=.12,e.add(X);let ot=new pt(new ke(.12,.1,.24),s);ot.position.set(1.5,-1,Q+.04),e.add(ot)}for(let[Q,X,ot,nt]of[[0,.52,-4.4,.7],[0,.46,-5.9,.5],[0,-1.62,-1.4,.4],[.5,1.88,.9,.45]]){let lt=new pt(new ge(.012,.02,nt,5),s);lt.position.set(Q,X+(X>0?nt/2:-nt/2),ot),lt.rotation.x=X>0?-.35:.35,e.add(lt)}let O=new pt(new ge(.03,.03,.9,6),s);O.position.set(0,-.42,-7.6),O.rotation.x=.9,e.add(O);let D=new pt(new ke(.16,.22,.2),n);D.position.set(2.32,.62,.1),e.add(D);let B=new pt(new ge(.035,.035,.9,6),s);B.rotation.z=Math.PI/2+.75,B.position.set(1.72,.62,.1),e.add(B),this.bladeRoots=new re,this.bladeRoots.position.set(0,2.47,-.2);for(let Q=0;Q<4;Q++){let X=new pt(new ke(2.3,.035,.26),s);X.position.set(Math.cos(Q*Math.PI/2)*1.25,0,Math.sin(Q*Math.PI/2)*1.25),X.rotation.y=-Q*Math.PI/2,this.bladeRoots.add(X)}e.add(this.bladeRoots);let Y=new pt(new $i(.2,10,6),s);Y.scale.y=.5,Y.position.set(0,2.55,-.2),e.add(Y)}let T=(N,P,W)=>{let k=document.createElement("canvas");k.width=k.height=256;let O=k.getContext("2d");O.translate(128,128);let D=O.createRadialGradient(0,0,8,0,0,126);D.addColorStop(0,`rgba(30,35,40,${P*.5})`),D.addColorStop(.8,`rgba(30,35,40,${P})`),D.addColorStop(.97,`rgba(52,58,66,${P*1.5})`),D.addColorStop(1,"rgba(30,35,40,0)"),O.fillStyle=D,O.beginPath(),O.arc(0,0,126,0,6.283),O.fill();for(let Y=0;Y<N;Y++){O.save(),O.rotate(Y*6.283/N);let Q=O.createLinearGradient(0,-16,0,16);Q.addColorStop(0,"rgba(20,24,28,0)"),Q.addColorStop(.5,`rgba(20,24,28,${W})`),Q.addColorStop(1,"rgba(20,24,28,0)"),O.fillStyle=Q,O.beginPath(),O.moveTo(6,0),O.lineTo(124,-15),O.lineTo(124,15),O.closePath(),O.fill(),O.restore()}let B=new Gi(k);return B.colorSpace=Ye,B};this.rotor=new pt(new $s(6.3,48),new Ge({map:T(4,.22,.5),transparent:!0,side:Ue,depthWrite:!1})),this.rotor.rotation.x=-Math.PI/2,this.rotor.position.set(0,2.5,-.2),e.add(this.rotor),this.tail=new pt(new $s(1.05,24),new Ge({map:T(2,.2,.4),transparent:!0,side:Ue,depthWrite:!1})),this.tail.position.set(.22,1.25,-8.15),this.tail.rotation.y=Math.PI/2,e.add(this.tail);let I=(N,P,W,k,O,D,B=.13)=>{let Y=new pt(new $i(B,8,6),new Ge({color:new Dt(N,P,W)}));return Y.position.set(k,O,D),e.add(Y),Y};I(2.6,.12,.1,1.35,.1,.6),I(.1,2.4,.4,-1.35,.1,.6),this.strobe=I(5,5,5.6,0,1.75,-7.6,.16),this.beacon=I(6,.25,.2,0,-.55,-3.4,.14),this.lampHead=I(5,5.8,7,0,-1.25,2.2,.22),this.group.add(e),this.spotLight=new Un(13952255,0,0,.16,.7,0),this.spotLight.layers.enableAll(),this.lights=[this.spotLight,this.spotLight.target],this.beamMat=new se({uniforms:{uNoise:it.uNoise,uTime:it.uTime,uI:{value:0},uApex:{value:new M},uAxis:{value:new M(0,-1,0)},uLen:{value:1},uTan:{value:this.tan},uWaterY:{value:0}},vertexShader:vl,fragmentShader:xl,transparent:!0,blending:Ji,depthWrite:!1,side:Qe});let G=new ge(.02,1,1,32,1,!1);G.translate(0,-.5,0),this.beam=new pt(G,this.beamMat),this.beam.frustumCulled=!1,this.beam.renderOrder=18,this.group.add(this.beam);let q=new Se({color:9279131,roughness:.55,metalness:.4,emissive:1843236});this.ringMesh=new re;let U=.335,z=.092;this.ringR=U,this.ringT=z,this.bridleTop=.44;let J=new Se({color:7614479,roughness:.7,metalness:.03}),V=new Se({color:7106675,roughness:.7,metalness:.03}),H=new pt(new xn(U,z,14,36),J);this.ringMesh.add(H);for(let N=0;N<4;N++){let P=new pt(new xn(U,z+.004,12,5,.4),V);P.rotation.z=N*Math.PI/2+.6,this.ringMesh.add(P)}for(let N=0;N<3;N++){let P=N*2.094+.52,W=new pt(new ge(.007,.007,1,4),q),k=new M(Math.cos(P)*U,Math.sin(P)*U,-z*.8),O=new M(0,0,-this.bridleTop);W.position.copy(k).add(O).multiplyScalar(.5),W.scale.y=k.distanceTo(O),W.quaternion.setFromUnitVectors(new M(0,1,0),O.clone().sub(k).normalize()),this.ringMesh.add(W)}{let N=new pt(new vn(.03,.08,3,8),new Se({color:10258998,roughness:.5,metalness:.5}));N.rotation.x=Math.PI/2,N.position.set(0,0,-this.bridleTop-.05),this.ringMesh.add(N);let P=new pt(new xn(.03,.008,6,12),q);P.position.set(0,0,-this.bridleTop+.01),P.rotation.y=Math.PI/2,this.ringMesh.add(P);let W=new pt(new xn(U,z+.012,6,40),new Se({color:1777185,roughness:.9}));W.scale.set(1,1,.16),W.position.z=-z*.8,this.ringMesh.add(W)}this.strobeR=new pt(new $i(.035,8,6),new Ge({color:new Dt(6,6,6.5)})),this.strobeR.position.set(U,0,-z-.025),this.ringMesh.add(this.strobeR),this.ringMesh.traverse(N=>{N.isMesh&&N.layers.enable(1)}),this.group.add(this.ringMesh),this.rope=[],this.ropeGroup=new re,this.group.add(this.ropeGroup);for(let N=0;N<fs;N++)this.rope.push({p:new M,q:new M});{let N=(fs-1)*4+1,P=7,W=P+1;this.ropeRings=N,this.ropeRad=P;let k=new Float32Array(N*W*3),O=new Float32Array(N*W*3),D=new Float32Array(N*W*2),B=[];for(let nt=0;nt<N;nt++)for(let lt=0;lt<W;lt++)D[(nt*W+lt)*2]=lt/P,D[(nt*W+lt)*2+1]=nt*.55;for(let nt=0;nt<N-1;nt++)for(let lt=0;lt<P;lt++){let Z=nt*W+lt,kt=Z+1,vt=Z+W,Et=vt+1;B.push(Z,vt,kt,kt,vt,Et)}let Y=new ce;Y.setAttribute("position",new Bt(k,3).setUsage(Wi)),Y.setAttribute("normal",new Bt(O,3).setUsage(Wi)),Y.setAttribute("uv",new Bt(D,2).setUsage(Wi)),Y.setIndex(B);let Q=document.createElement("canvas");Q.width=32,Q.height=32;let X=Q.getContext("2d");X.fillStyle="#b9b29a",X.fillRect(0,0,32,32),X.strokeStyle="#5f5a4c",X.lineWidth=3;for(let nt=-32;nt<64;nt+=8)X.beginPath(),X.moveTo(nt,0),X.lineTo(nt+32,32),X.stroke();let ot=new Gi(Q);ot.wrapS=ot.wrapT=ai,ot.colorSpace=me,this.ropeMesh=new pt(Y,new Se({map:ot,roughness:.85,metalness:0,emissive:1381391})),this.ropeMesh.frustumCulled=!1,this.ropeGroup.add(this.ropeMesh),this.ropePts=this.rope.map(()=>new M),this._rp=new M,this._rt=new M,this._rn=new M(1,0,0),this._rb=new M,this._rq=new M}this.ropeLen=20,this._top=new M,this.station=new M,this.holdNeed=2.1,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.liftBase=0,this.ringSpin=0,this._qr=new _t,this._er=new gi,this.lineDir=new M(0,1,0),this.hangDir=new M(0,1,0),this.hoistAt=new M(0,-1.2,0),this.lampAt=new M(0,-1.3,0)}_local(t,e){let i=this.heli.rotation.y,n=Math.cos(i),s=Math.sin(i);return e.set(this.pos.x+t.x*n+t.z*s,this.pos.y+t.y,this.pos.z-t.x*s+t.z*n)}setModel(t){let e=this.heli;for(let d of e.children)d.visible=!1;let i=t.scene;i.name="md902";let n=d=>i.getObjectByName(d),s=n("body"),r=n("glass"),o=n("hub"),h=n("blades");if(!s||!o||!h)throw new Error("helicopter model: parts missing");s.material.envMapIntensity=.6,s.material.color.setScalar(1.25),r&&(r.material.envMapIntensity=1,r.material.vertexColors=!1,r.material.color.setRGB(.012,.016,.02)),this.spinHub=new re,this.spinBlades=new re,this.spinHub.add(o),this.spinBlades.add(h),this.spinBlades.visible=!1,e.add(i,this.spinHub,this.spinBlades);let c=new Se({color:1316892,roughness:.5,metalness:.4}),u=d=>(e.add(d),d);this.rotorMat=new se({uniforms:{uAngle:{value:0},uSmear:{value:.6},uLit:{value:new M(.1,.1,.1)}},vertexShader:T1,fragmentShader:S1,transparent:!0,side:Ue,depthWrite:!1}),this.rotor=u(new pt(new $s(5.2,72),this.rotorMat)),this.rotor.rotation.x=-Math.PI/2,this.rotor.position.set(0,1.72,0),this.rotor.renderOrder=3;let l=(d,f,g,b,m,p,v=.13)=>{let x=new pt(new $i(v,8,6),new Ge({color:new Dt(d,f,g)}));return x.position.set(b,m,p),u(x)};l(1.9,.09,.07,1.45,.42,-4.75,.08),l(.08,1.8,.3,-1.44,.42,-4.82,.08),this.strobe=l(5,5,5.6,.03,.5,-6.2,.12),this.beacon=l(6,.25,.2,0,-1.09,-.55,.1),this.lampAt.set(0,-1.16,1.28),this.lampHead=l(5,5.8,7,0,-1.16,1.28,.15);{u(new pt(new ge(.19,.15,.2,14),c)).position.set(0,-1.07,1.28);let f=u(new pt(new xn(.165,.028,8,18),c));f.rotation.x=Math.PI/2,f.position.set(0,-1.17,1.28)}{let d=new M(.74,.86,.22),f=new M(1.47,.97,.22),g=u(new pt(new ge(.045,.055,d.distanceTo(f),8),c));g.position.copy(d).add(f).multiplyScalar(.5),g.quaternion.setFromUnitVectors(new M(0,1,0),f.clone().sub(d).normalize());let b=u(new pt(new ge(.028,.028,.62,6),c)),m=new M(.8,.52,.22),p=new M(1.22,.92,.22);b.scale.y=m.distanceTo(p)/.62,b.position.copy(m).add(p).multiplyScalar(.5),b.quaternion.setFromUnitVectors(new M(0,1,0),p.clone().sub(m).normalize());let v=u(new pt(new ge(.12,.12,.26,10),c));v.rotation.x=Math.PI/2,v.position.set(1.47,.93,.22),u(new pt(new ke(.12,.16,.14),new Se({color:13127708,roughness:.5,metalness:.1}))).position.set(1.47,.74,.22),this.hoistAt.set(1.47,.66,.22);let w=new Se({color:8008723,roughness:.8}),R=new Se({color:13225166,roughness:.4}),y=u(new pt(new vn(.15,.34,3,8),w));y.position.set(.7,-.22,.42),y.rotation.z=-.22,u(new pt(new $i(.125,10,8),R)).position.set(.78,.13,.42);for(let _ of[.33,.51]){let T=u(new pt(new vn(.065,.36,3,8),w));T.position.set(.88,-.8,_),T.rotation.z=.1,u(new pt(new ke(.11,.09,.22),c)).position.set(.9,-1.03,_+.04)}let A=u(new pt(new vn(.05,.42,3,6),w));A.position.set(.95,.1,.34),A.rotation.z=-1.05}this.model=i}reset(t=240){this.state="none",this.group.visible=!1,this.rescued=!1,this.hold=0,this.arriveAt=t,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.liftTaut=!1,this.haulT=0,this.lineDir.set(0,1,0),this.hangDir.set(0,1,0),it.uSpotP.value.y=0,it.uWash.value.w=0,this.spotLight.intensity=0}_dropRope(){let t=this._local(this.hoistAt,this._top);this.ropeLen=Math.max(8,t.y-this.waves.heightFast(t.x,t.z))+2.5;for(let e=0;e<fs;e++){let i=this.rope[e];i.p.set(t.x,t.y-this.ropeLen*.92*e/(fs-1),t.z),i.q.copy(i.p)}this.ring.copy(this.rope[fs-1].p)}_rope(t,e,i,n){let s=this.waves,r=this._s,o=this.rope,h=fs,c=this._local(this.hoistAt,this._top);if(n){let d=c.distanceTo(o[h-1].p);this.liftTaut?(this.haulT+=t,this.ropeLen=Math.max(2.6,this.ropeLen-1.7*Math.min(1,this.haulT/1.5)*t)):(this.ropeLen=Math.max(d+.05,this.ropeLen-5*t),this.liftT>.8&&this.ropeLen<=d+.12&&(this.liftTaut=!0,this.haulT=0))}else{let d=Math.max(6,c.y-s.heightFast(o[h-1].p.x,o[h-1].p.z))+2.8;this.ropeLen+=(d-this.ropeLen)*Math.min(1,t*3.5)}let u=this.ropeLen/(h-1),l=Math.min(t,1/30)*.5;for(let d=0;d<2;d++){o[0].p.copy(c),o[0].q.copy(c);for(let f=1;f<h;f++){let g=o[f],b=f===h-1,m=g.p.x-g.q.x,p=g.p.y-g.q.y,v=g.p.z-g.q.z;g.q.copy(g.p);let x=Math.sin(Math.PI*f/(h-1)),w=.1+.16*x*(.6+.4*Math.sin(this.time*.9+f*.35)),R=e.x*w,y=-9.81,E=e.z*w,A=.994,_=g.p.x-this.pos.x,T=g.p.z-this.pos.z,I=Math.hypot(_,T)+.001,G=Math.max(0,1-I/16)*(b?2.2:2);if(b&&s.sample(g.p.x,g.p.z,r),n&&(G*=b?Math.max(0,1-(g.p.y-r.h)/2.5):.2),R+=_/I*G,E+=T/I*G,b){let q=r.h+.06-g.p.y;if(q>0){y+=Math.min(n?160:70,q*(n?260:95));let U=Math.min(1,l*(n?16:6));m+=(r.vx*l-m)*U,p+=(r.vy*l-p)*U,v+=(r.vz*l-v)*U,A=.975}this.gripping&&!n&&(R+=(i.x-g.p.x)*7,E+=(i.z-g.p.z)*7)}g.p.x+=m*A+R*l*l,g.p.y+=p*A+y*l*l,g.p.z+=v*A+E*l*l}for(let f=0;f<14;f++)for(let g=0;g<h-1;g++){let b=o[g].p,m=o[g+1].p,p=m.x-b.x,v=m.y-b.y,x=m.z-b.z,w=Math.hypot(p,v,x);if(w<=u)continue;let R=(w-u)/w,y=g===0?0:g+1===h-1?n?.88:.62:.5,E=1-y;b.x+=p*R*y,b.y+=v*R*y,b.z+=x*R*y,m.x-=p*R*E,m.y-=v*R*E,m.z-=x*R*E}{let f=(n?this.vel.length()+4.5:9)*l,g=28*l;for(let b=1;b<h;b++){let m=o[b],p=m.p.x-m.q.x,v=m.p.y-m.q.y,x=m.p.z-m.q.z,w=Math.hypot(p,v,x),R=b===h-1?f:g;if(w>R){let y=R/w;m.p.set(m.q.x+p*y,m.q.y+v*y,m.q.z+x*y)}}}}n?this.ring.lerp(o[h-1].p,1-Math.exp(-t/.035)):this.ring.copy(o[h-1].p),this._d.copy(o[h-7].p).sub(o[h-1].p),this._d.lengthSq()>1e-4&&this._d.y>0&&(this._d.normalize(),this.lineDir.lerp(this._d,Math.min(1,t*3)).normalize());{let d=this.hangDir.copy(this.lineDir).multiplyScalar(.75);d.y+=.25;let f=Math.hypot(d.x,d.z),g=d.y*.49;f>g&&(d.x*=g/f,d.z*=g/f),d.normalize()}}dispatch(t,e=Math.random()*6.283,i=60){this.state="inbound",this.rescued=!1,this.hold=0,this.hoverTime=0,this.group.visible=!0,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.liftTaut=!1,this.haulT=0,this.lineDir.set(0,1,0),this.hangDir.set(0,1,0),this.ring.set(t.x+Math.cos(e)*i,0,t.z+Math.sin(e)*i),this.pos.set(this.ring.x+Math.cos(e)*520,70,this.ring.z+Math.sin(e)*520),this.vel.set(0,0,0)}update(t,e,i,n,s,r,o,h,c){if(this.time+=t,this.state==="none")if(o&&s&&n>=this.arriveAt)this.dispatch(e,Math.atan2(i.z,i.x)+(Math.random()-.5)*2.4,9+Math.random()*6);else{it.uSpotP.value.y=0,it.uWash.value.w=0,this.spotLight.intensity=0;return}let u=this.waves,l=this._s,d=this.state==="lift";if(this.state==="inbound")this.station.set(this.ring.x,0,this.ring.z);else if(this.state==="hover"){let H=e.x-this.station.x,N=e.z-this.station.z,P=Math.hypot(H,N);if(P>1.5){let W=Math.min(3,P*.6)*t/P;this.station.x+=H*W,this.station.z+=N*W}}let f=u.heightFast(this.station.x,this.station.z)+20+Math.sin(this.time*.7)*.8,g=this._v.set(this.station.x+Math.sin(this.time*.43)*1.7+Math.sin(this.time*1.1)*.6,f,this.station.z+Math.cos(this.time*.37)*1.7);if(this.state==="leaving"&&g.set(this.pos.x+i.x*40,this.pos.y+30,this.pos.z+i.z*40),d){this.liftT+=t;let H=Math.max(this.liftBase,u.heightFast(this.pos.x,this.pos.z),u.heightFast(this.ring.x,this.ring.z));this.liftT>6.5?g.set(this.pos.x-i.x*3,H+26+(this.liftT-6.5)*5,this.pos.z-i.z*3):g.set(this.pos.x,H+20+Math.max(0,this.liftT-3)*1.5,this.pos.z)}let b=g.sub(this.pos),m=b.length(),p=this.state==="inbound"?46:this.state==="leaving"?40:d?this.liftT>6.5?7.5:3:6,v=b.multiplyScalar(Math.min(p,m*.9)/Math.max(m,.001));if(this.vel.lerp(v,1-Math.exp(-t*(d?.35:1.4))),this.pos.addScaledVector(this.vel,t),this.state==="inbound"&&m<6&&(this.state="hover",this.hoverTime=0,this._dropRope()),this.state==="hover"||d?this._rope(t,i,e,d):(u.sample(this.ring.x,this.ring.z,l),this.ring.y=l.h),this.reach=!1,this.state==="hover"){this.hoverTime+=t;let H=Math.hypot(e.x-this.ring.x,e.y+.35-this.ring.y,e.z-this.ring.z);this.reach=H<1.9&&s,this.gripping&&(H>2.7||!c||!s)&&(this.gripping=!1,this.hold>.5&&(this.slipped=!0)),this.reach&&c&&(this.gripping=!0),this.hold=this.gripping?this.hold+t:Math.max(0,this.hold-t*2.5),this.hold>=this.holdNeed&&(this.rescued=!0,this.state="lift",this.liftT=0,this.liftTaut=!1,this.haulT=0,this.liftBase=this.ring.y);let N=this.reach||this.gripping;if(this.hoverTime>150&&!N&&!this.rescued&&(this.state="leaving",this.leaveT=0),r)for(this.washAcc=(this.washAcc||0)+t*150;this.washAcc>=1;){this.washAcc-=1;let P=Math.random()*6.283,W=4+Math.random()*13,k=7+Math.random()*6,O=this.pos.x+Math.cos(P)*W,D=this.pos.z+Math.sin(P)*W,B=u.heightFast(O,D),Y=Math.random()<.28;r.emit(O,B+.08+Math.random()*.2,D,Math.cos(P)*k,.5+Math.random()*1.4,Math.sin(P)*k,Y?.7+Math.random()*.7:.5+Math.random()*.5,Y?.16+Math.random()*.22:.012+Math.random()*.03,Y?2:0,Y?.7:0,Y?.16:.9,Y?1.4:1)}}if(this.state==="leaving"&&(this.leaveT+=t,this.leaveT>14)){this.state="none",this.group.visible=!1,this.arriveAt=n+180,it.uSpotP.value.y=0,it.uWash.value.w=0,this.spotLight.intensity=0;return}let x=this.heli;x.position.copy(this.pos);let w=Math.atan2(this.ring.x-this.pos.x+this.vel.x*3,this.ring.z-this.pos.z+this.vel.z*3),R=Math.hypot(this.vel.x,this.vel.z);if(x.rotation.set(Math.min(.3,R*.008),this.state==="hover"?x.rotation.y+Math.sin(this.time*.25)*.004:w,Math.sin(this.time*1.3)*.03,"YXZ"),this.rotorMat){let H=this.rotorMat.uniforms,N=41;H.uAngle.value=(H.uAngle.value-N*t)%6.2831853,H.uSmear.value=N/105;let P=it.uAmbient.value,W=it.uFlash.value,k=it.uFlashColor.value;H.uLit.value.set(P.x*2.4+W*k.x*.5,P.y*2.4+W*k.y*.5,P.z*2.4+W*k.z*.5)}else this.rotor.rotation.z+=t*(2.6+1.4*Math.sin(this.time*2.3));this.tail.rotation.z+=t*5.2,this.bladeRoots&&(this.bladeRoots.rotation.y-=t*39),this.spinHub&&(this.spinHub.rotation.y-=t*41),this.rotorMat||(this.rotor.material.opacity=.85+.15*Math.sin(this.time*31)),this.strobe.visible=this.time%1.1<.07,this.beacon.visible=(this.time+.5)%1.3<.16;let y=this.state==="hover"?Math.min(1,this.hoverTime/3):this.state==="lift"?1:0;this.aim.set(this.ring.x+(1-y)*Math.sin(this.time*.8)*26,this.ring.y,this.ring.z+(1-y)*Math.cos(this.time*.6)*26),this.state==="lift"&&(this.aim.y=Math.min(this.aim.y,u.heightFast(this.aim.x,this.aim.z)));let E=this.state==="leaving"?Math.max(0,1-this.leaveT/3):1,A=this._local(this.lampAt,this._from);{let H=Math.hypot(this.aim.x-A.x,this.aim.z-A.z);A.y-this.aim.y<H*.5&&(this.aim.y=A.y-H*.5)}let _=A.distanceTo(this.aim),T=this._d.copy(this.aim).sub(A).normalize(),I=_,G=this.aim.y;if(T.y<-.04)for(let H=0;H<4;H++)G=this.waves.heightFast(A.x+T.x*I,A.z+T.z*I),I=Math.max(2,(G-A.y)/T.y);else I=320;let q=Math.min(I*1.15+4,340),U=this.tan*1.3*q;this.beamMat.uniforms.uWaterY.value=G-.6,this.beam.position.copy(A),this.beam.quaternion.setFromUnitVectors(this._down,T),this.beam.scale.set(U,q,U);let z=this.beamMat.uniforms;if(z.uApex.value.copy(A),z.uAxis.value.copy(T),z.uLen.value=q,z.uI.value=.17*E,h){let H=this._v.copy(h).sub(A),N=H.dot(T),P=Math.sqrt(Math.max(0,H.lengthSq()-N*N)),k=N>-.5&&N<q+.5&&P<N*this.tan*1.3+.6?Ce:Qe;this.beamMat.side!==k&&(this.beamMat.side=k,this.beamMat.needsUpdate=!0)}this.spotLight.position.copy(A),this.spotLight.target.position.copy(this.aim),this.spotLight.angle=Math.atan(this.tan)*1.35,this.spotLight.penumbra=.85,this.spotLight.intensity=5*E,it.uSpotPos.value.copy(A),it.uSpotDir.value.copy(T),it.uSpotP.value.set(Math.cos(Math.atan(this.tan)),1.7*E,55,0);let J=this.pos.y-u.heightFast(this.pos.x,this.pos.z);it.uWash.value.set(this.pos.x,this.pos.z,24,E*Math.max(0,Math.min(1,(60-J)/30)));let V=this.state==="hover"||this.state==="lift";if(this.ringMesh.visible=V,this.ropeGroup.visible=V,V){this.ringMesh.position.copy(this.ring),this.state==="lift"?(this.ringSpin+=t*.35,this.ringMesh.quaternion.setFromUnitVectors(this._down.clone().negate(),this.hangDir).multiply(this._qr.setFromEuler(this._er.set(Math.PI/2,0,this.ringSpin,"YXZ")))):(u.sample(this.ring.x,this.ring.z,l),this.ringMesh.rotation.set(Math.PI/2+l.nz*.6,0,-l.nx*.6)),this.strobeR.visible=this.time%.9<.08;let H=this.rope,N=this.ropePts,P=fs;for(let xt=0;xt<P;xt++)N[xt].copy(H[xt].p);this.ringMesh.updateMatrixWorld(!0),N[P-1].set(0,0,-this.bridleTop-.06).applyMatrix4(this.ringMesh.matrixWorld),N[P-2].lerp(N[P-1],.35);let W=this.ropeRings,k=this.ropeRad,O=k+1,D=.017,B=this.ropeMesh.geometry.attributes.position,Y=this.ropeMesh.geometry.attributes.normal,Q=this.ropeMesh.geometry.attributes.uv,X=this._rp,ot=this._rt,nt=this._rn,lt=this._rb,Z=this._rq,kt=(xt,Ht)=>xt<0?Ht.copy(N[0]).multiplyScalar(2).sub(N[1]):xt>P-1?Ht.copy(N[P-1]).multiplyScalar(2).sub(N[P-2]):Ht.copy(N[xt]),vt=this._ra||(this._ra=[new M,new M,new M,new M]),Et=0;for(let xt=0;xt<W;xt++){let Ht=xt/(W-1)*(P-1),Pt=Math.min(P-2,Math.floor(Ht)),L=Ht-Pt,C=L*L,et=C*L;kt(Pt-1,vt[0]),kt(Pt,vt[1]),kt(Pt+1,vt[2]),kt(Pt+2,vt[3]);let ht=(1-3*L+3*C-et)/6,ft=(4-6*C+3*et)/6,bt=(1+3*L+3*C-3*et)/6,Lt=et/6;Z.copy(X),X.set(0,0,0).addScaledVector(vt[0],ht).addScaledVector(vt[1],ft).addScaledVector(vt[2],bt).addScaledVector(vt[3],Lt);let K=-(1-L)*(1-L)/2,ut=(3*C-4*L)/2,yt=(1+2*L-3*C)/2,zt=C/2;ot.set(0,0,0).addScaledVector(vt[0],K).addScaledVector(vt[1],ut).addScaledVector(vt[2],yt).addScaledVector(vt[3],zt),ot.lengthSq()<1e-10?ot.set(0,-1,0):ot.normalize(),xt>0&&(Et+=X.distanceTo(Z)),nt.addScaledVector(ot,-nt.dot(ot)),nt.lengthSq()<1e-6&&nt.set(1,0,0).addScaledVector(ot,-ot.x),nt.normalize(),lt.crossVectors(ot,nt);for(let mt=0;mt<O;mt++){let ue=mt/k*6.2832,Yt=Math.cos(ue),Vt=Math.sin(ue),Ft=(xt*O+mt)*3,Ct=nt.x*Yt+lt.x*Vt,Xt=nt.y*Yt+lt.y*Vt,he=nt.z*Yt+lt.z*Vt;B.array[Ft]=X.x+Ct*D,B.array[Ft+1]=X.y+Xt*D,B.array[Ft+2]=X.z+he*D,Y.array[Ft]=Ct,Y.array[Ft+1]=Xt,Y.array[Ft+2]=he,Q.array[(xt*O+mt)*2+1]=Et/.11}}Q.needsUpdate=!0,B.needsUpdate=!0,Y.needsUpdate=!0}}};var A1=`
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
}`,R1=`
precision highp float;
varying vec3 vC; varying float vA;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0; float r = dot(q, q);
  if (r > 1.0) discard;
  float k = exp(-r * 4.5) + 0.35 * exp(-r * 30.0);
  gl_FragColor = vec4(vC * k * vA, 1.0);
}`,gf=[[-.2,29.6,84.1,9,9,8.5,1.2],[.4,38.4,-57.3,9,9,8.5,1.2],[14,17,-32.4,9,.6,.4,1.1],[-14,17,-32.4,.4,7,1.6,1.1],[0,10.2,-89.6,8,8,7.5,1],[0,21.5,-21,7,4.2,1.6,1.6],[0,21.5,33,7,4.2,1.6,1.6],[0,21.5,52,7,4.2,1.6,1.6],[8.5,24.8,-50.2,6,3.6,1.4,1.4],[-8.5,24.8,-50.2,6,3.6,1.4,1.4],...[-5,-2.5,0,2.5,5].map(a=>[a,27,-50.6,2.4,1.9,1.2,.9])],pi=class a{constructor(t){this.waves=t,this.group=new re,this.group.visible=!1,this.holder=new re,this.group.add(this.holder),this.loaded=!1,this.active=!1,this.pos=new M,this.yaw=0,this.speed=0,this.heave=0,this.heaveV=0,this.pitch=0,this.pitchV=0,this.roll=0,this.rollV=0,this._s=ri(),this.length=180,this.breadth=28.7,this.time=0,this.phase="none",this.t=0,this.track={ox:0,oz:0,dx:0,dz:1,off:0},this.headOn=!1,this.spotted=!1,this.spotT=0,this.spottedAt=-1,this.closest=1e9,this.sweep=0,this.local=new M,this._inv=new Rt,this._v=new M,this._w=new M,this.events=[],this.hornAt=[],this.prolongedAt=0}static halfBeam(t,e=0){return wo(t,e)}static deckY(t){return t>55?9+5.5*Math.min(1,(t-55)/25):9}static keelY(t){return t<-78?-9+8.5*Math.min(1,(-78-t)/9):t>75?-8.4:-9.05}toLocal(t,e){return e.copy(t).applyMatrix4(this._inv)}toWorld(t,e){return e.copy(t).applyMatrix4(this.group.matrixWorld)}insideLocal(t,e=0){if(t.y<a.keelY(t.z)-e||t.y>a.deckY(t.z)+e+1.5)return!1;let i=wo(t.z,t.y);return i>.05&&Math.abs(t.x)<i+e}keepOutside(t,e){if(!this.active||!this.loaded||(this.toLocal(t,this._v),!this.insideLocal(this._v,.6)))return!1;if(this.toLocal(e,this._w),this.insideLocal(this._w,.6)){this.toLocal(t,this._v);let s=this._w.x>=0?1:-1;return this._v.x=s*(wo(this._v.z,this._v.y)+.9),this.toWorld(this._v,t),!0}let i=0,n=1;for(let s=0;s<18;s++){let r=(i+n)/2;this._w.copy(e).lerp(t,r),this.toLocal(this._w,this._v),this.insideLocal(this._v,.6)?n=r:i=r}return t.copy(e).lerp(t,i),!0}start(t,e={}){let i=e.bearing!==void 0?e.bearing:Math.random()*6.283,n=-Math.sin(i),s=-Math.cos(i);this.headOn=e.offset!==void 0?Math.abs(e.offset)<16:!0;let r=e.offset!==void 0?e.offset:(Math.random()-.5)*16,o=e.dist||440,h=t.x+s*r,c=t.z-n*r;this.track={ox:h,oz:c,dx:n,dz:s,off:r},this.aim={x:t.x,z:t.z,lx:t.x,lz:t.z},this.avoidOff=0,this.speed=e.speed||5.5,this.place(h-n*o,c-s*o,Math.atan2(n,s),this.speed),this.phase="coming",this.t=0,this.spotted=!1,this.spotT=0,this.spottedAt=-1,this.closest=1e9,this.sweep=0,this.sweepT=0,this.glimpse=0,this._beamS=!1,this.hornAt=[],this.prolongedAt=this.time+4+Math.random()*6,this.events.push({type:"appear"})}soundPoints(t){return t.engine=this.toWorld(this._w.set(0,6,-70),t.engine||new M),t.bow=this.toWorld(this._w.set(0,.5,88),t.bow||new M),t.prop=this.toWorld(this._w.set(0,-5.5,-87.5),t.prop||new M),t.horn=this.toWorld(this._w.set(0,33,-62),t.horn||new M),t}horn(t,e=1.4){for(let i=0;i<t;i++)this.hornAt.push(this.time+i*e)}_searchlight(t,e,i){let n=this._beamT||(this._beamT=new M);if(this.glimpse=Math.max(0,(this.glimpse||0)-t),this.spotted||this.glimpse>0)n.set(e.x,e.y,e.z);else{this.sweepT=(this.sweepT||0)+t,this.sweep=Math.sin(this.sweepT*.52)*.36+Math.sin(this.sweepT*.13+1)*.06;let s=this.yaw+this.sweep,r=185+75*Math.sin(this.sweepT*.23+.6);n.set(this.pos.x+Math.sin(s)*r,0,this.pos.z+Math.cos(s)*r),n.y=this.waves.heightFast(n.x,n.z)}return this._beamS?i.lerp(n,1-Math.exp(-t*(this.spotted||this.glimpse>0?3.5:6))):i.copy(n),this._beamS=!0,i}setModel(t){let e=t.scene;e.name="cargoShip";let i={uFogDensity:it.uFogDensity,uSkyEnv:it.uSkyEnv};e.traverse(u=>{if(!u.isMesh)return;u.layers.enable(1);let l=u.material;l.envMapIntensity=.45,l.vertexColors&&l.color.multiplyScalar(1.35),l.onBeforeCompile=d=>{Object.assign(d.uniforms,i),d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vShipW;`).replace("#include <project_vertex>",`#include <project_vertex>
vShipW = (modelMatrix * vec4(transformed, 1.0)).xyz - cameraPosition;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vShipW;
uniform float uFogDensity;
uniform sampler2D uSkyEnv;
`+yo).replace("#include <dithering_fragment>",`
  {
    float fogD = length(vShipW);
    float fogK = 1.0 - exp(-fogD * uFogDensity);
    vec3 fd = normalize(vec3(vShipW.x, 0.05 * length(vShipW.xz), vShipW.z));
    gl_FragColor.rgb = mix(gl_FragColor.rgb, textureLod(uSkyEnv, dirToEquirect(fd), 4.5).rgb, fogK);
  }
  #include <dithering_fragment>`)},l.needsUpdate=!0}),this.holder.add(e);let n=gf.length,s=new Float32Array(n*3),r=new Float32Array(n*3),o=new Float32Array(n);gf.forEach((u,l)=>{s.set(u.slice(0,3),l*3),r.set(u.slice(3,6),l*3),o[l]=u[6]});let h=new ce;h.setAttribute("position",new Bt(s,3)),h.setAttribute("color",new Bt(r,3)),h.setAttribute("size",new Bt(o,1)),this.lightMat=new se({uniforms:{uPx:{value:500},uFogDensity:it.uFogDensity,uOn:{value:1}},vertexShader:A1,fragmentShader:R1,transparent:!0,depthWrite:!1,blending:Ji}),this.lights=new Zs(h,this.lightMat),this.lights.frustumCulled=!1,this.lights.renderOrder=4,this.holder.add(this.lights),this.beamMat=new se({uniforms:{uNoise:it.uNoise,uTime:it.uTime,uI:{value:0},uApex:{value:new M},uAxis:{value:new M(0,-1,0)},uLen:{value:1},uTan:{value:.07},uWaterY:{value:0}},vertexShader:vl,fragmentShader:xl,transparent:!0,blending:Ji,depthWrite:!1,side:Qe});let c=new ge(.02,1,1,24,1,!1);c.translate(0,-.5,0),this.beam=new pt(c,this.beamMat),this.beam.frustumCulled=!1,this.beam.renderOrder=18,this.spotLight=new Un(13952255,0,0,.1,.75,0),this.spotLight.layers.enableAll(),this.beam.visible=!1,this.group.parent&&this.group.parent.add(this.beam,this.spotLight,this.spotLight.target),this.loaded=!0}warm(t,e,i){if(!this.loaded)return;let n=this.group.visible;this.group.visible=!0;let s=t.clippingPlanes;t.compile(this.group,e,i),t.clippingPlanes=[new Ei(new M(0,-1,0),0)],t.compile(this.group,e,i),t.clippingPlanes=s,this.group.traverse(r=>{if(r.isMesh)for(let o of["map","normalMap","emissiveMap"])r.material[o]&&t.initTexture(r.material[o])}),this.group.visible=n}place(t,e,i,n=0){this.pos.set(t,0,e),this.yaw=i,this.speed=n,this.heave=this._seaUnder().h,this.heaveV=0,this.pitch=this._seaUnder().p,this.pitchV=0,this.roll=0,this.rollV=0,this.active=!0,this.group.visible=this.loaded}hide(){this.active=!1,this.group.visible=!1,this.phase="none",this.hornAt=[],this.prolongedAt=0,this.beam&&(this.beam.visible=!1,this.spotLight.intensity=0),this.beamFrom=null}_seaUnder(){let t=this.waves,e=this._s,i=Math.cos(this.yaw),n=Math.sin(this.yaw),s=(f,g)=>(t.sample(this.pos.x+n*f+i*g,this.pos.z+i*f-n*g,e),e.h),r=this._fitH||(this._fitH=new Float32Array(9)),o=0,h=0,c=0,u=0;for(let f=0;f<9;f++){let g=-80+f*20,b=f%2?0:1,m=s(g,0),p=b?s(g,11):m,v=b?s(g,-11):m,x=(2*m+p+v)/4;r[f]=x,o+=x,h+=g*x,c+=g*g,u+=p-v}let l=o/9,d=h/c;for(let f=0;f<3;f++){let g=0,b=0,m=0,p=0,v=0;for(let w=0;w<9;w++){let R=-80+w*20,y=r[w]<l+d*R?9:1;g+=y,b+=y*R,m+=y*R*R,p+=y*r[w],v+=y*R*r[w]}let x=g*m-b*b;d=(g*v-b*p)/x,l=(p-d*b)/g}return{h:l,p:-Math.atan(d),r:Math.atan2(u/5,22)}}update(t,e,i,n,s=0){if(!this.active||!this.loaded||t<=0)return;if(this.time+=t,this.t+=t,n&&this.aim&&(this.phase==="coming"||this.phase==="passing"&&this.spotted)){let u=this.aim,l=Math.sin(this.yaw),d=Math.cos(this.yaw);((n.x-this.pos.x)*l+(n.z-this.pos.z)*d>238&&!this.spotted||!(s>.15))&&(u.x+=n.x-u.lx,u.z+=n.z-u.lz),u.lx=n.x,u.lz=n.z,this.spotted&&!this.avoidOff&&(this.avoidOff=((u.x-this.pos.x)*d-(u.z-this.pos.z)*l<=0?1:-1)*45);let g=(u.x-this.pos.x)*l+(u.z-this.pos.z)*d,b=this.spotted?this.avoidOff:this.track.off;if(g>(this.spotted?70:this.headOn?113:150)){let m=u.x+d*b,p=u.z-l*b,x=Math.atan2(m-this.pos.x,p-this.pos.z)-this.yaw;x=Math.atan2(Math.sin(x),Math.cos(x));let w=this.spotted?.02:this.headOn?.012:.008;this.yaw+=Math.max(-w,Math.min(w,x*.5))*t}}let r=Math.cos(this.yaw),o=Math.sin(this.yaw);this.pos.x+=o*this.speed*t,this.pos.z+=r*this.speed*t;let h=this._seaUnder(),c=(u,l,d,f,g)=>{let b=f*f*(d-u)-2*g*f*l;return l+=b*t,[u+l*t,l]};if([this.heave,this.heaveV]=c(this.heave,this.heaveV,h.h,1.5,.75),[this.pitch,this.pitchV]=c(this.pitch,this.pitchV,h.p,1.6,.75),[this.roll,this.rollV]=c(this.roll,this.rollV,h.r*.9+.035*Math.sin(this.time*.48),.9,.3),this.group.position.set(this.pos.x,this.heave,this.pos.z),this.group.rotation.set(this.pitch,this.yaw,this.roll,"YXZ"),this.group.updateMatrixWorld(!0),this._inv.copy(this.group.matrixWorld).invert(),n){this.toLocal(n,this.local);let u=Math.hypot(n.x-this.pos.x,n.z-this.pos.z);this.closest=Math.min(this.closest,u),this.phase==="coming"&&this.local.z<110&&(this.phase="passing"),this.phase==="passing"&&this.local.z<-110&&(this.phase="going"),this.phase==="going"&&u>900&&(this.hide(),this.phase="none")}for(this.prolongedAt&&this.time>=this.prolongedAt&&!this.spotted&&this.phase!=="going"&&(this.horn(1),this.prolongedAt=this.time+38+Math.random()*20);this.hornAt.length&&this.time>=this.hornAt[0];)this.hornAt.shift(),this.events.push({type:"horn",long:!this.spotted});if(this.beam&&n){let u=this.toWorld(this._w.set(0,30.5,-48.5),this._beamFrom||(this._beamFrom=new M)),l=this._searchlight(t,n,this._beamAim||(this._beamAim=new M)),d=this._v.copy(l).sub(u).normalize(),f=Math.min(340,u.distanceTo(l)*1.15+4),g=.07;this.beam.position.copy(u),this.beam.quaternion.setFromUnitVectors(this._down||(this._down=new M(0,-1,0)),d),this.beam.scale.set(g*1.3*f,f,g*1.3*f);let b=this.beamMat.uniforms;b.uApex.value.copy(u),b.uAxis.value.copy(d),b.uLen.value=f,b.uTan.value=g,b.uWaterY.value=l.y-.6,b.uI.value=.1,this.beamAim=l,this.beamFrom=u,this.beamTan=g,this.beamAxis=(this._beamAxis||(this._beamAxis=new M)).copy(d),this.beam.visible=!0,this.spotLight.position.copy(u),this.spotLight.target.position.copy(l),this.spotLight.angle=Math.atan(g)*1.35;let m=u.distanceTo(l);if(this.spotLight.intensity=2.6/(1+m*m/(55*55)),e){let p=this._w.copy(e.position).sub(u),v=p.dot(d),x=Math.sqrt(Math.max(0,p.lengthSq()-v*v)),w=v>-.5&&v<f+.5&&x<v*g*1.3+.6?Ce:Qe;this.beamMat.side!==w&&(this.beamMat.side=w,this.beamMat.needsUpdate=!0)}}if(e&&this.lightMat){let u=Math.tan(nn.degToRad(e.fov*.5));this.lightMat.uniforms.uPx.value=(i||720)*.5/u}}};var bf=1025,C1=1.22,yl=9.81,vf=.35,Ae={tubeY:.37,tubeR:.21,halfW:.72,floorY:.325,bowZ:1.95,sternZ:-1.9,transomZ:-1.28,bowStart:1};function an(a){if(a<=Ae.bowStart)return Ae.halfW;let t=Math.min(1,(a-Ae.bowStart)/(Ae.bowZ-Ae.bowStart));return Ae.halfW*Math.sqrt(Math.max(0,1-t*t))}function Qa(a){return Ae.tubeY+.2*_e(.9,2,a)}function Oi(a,t,e,i,n,s,r,o,h){return{o:new M(a,t,e),r:new M,vol:i/1e3,half:n,cx:s,cy:r,cz:o,air:h,sub:0,was:0,h:0,hOk:!1}}var Vo=class{constructor(t){this.waves=t,this.group=new re,this.group.name="boat",this.group.visible=!1,this.holder=new re,this.group.add(this.holder),this.active=!1,this.loaded=!1,this.com=new M(0,.3,-.28),this.baseMass=168,this.mass=this.baseMass,this.inertia=new M(250,300,78),this.pos=new M,this.vel=new M,this.quat=new _t,this.angVel=new M,this.prevPos=new M,this.prevQuat=new _t,this.wind=new M,this.rider=0,this.swamp=0,this.upY=1,this.sitUp=1,this.capsized=!1,this.flipArmed=!1,this.flipping=0,this.settle=0,this.flipAxis=new M,this.flipDir=new M,this.keepYaw=null,this.slam=0,this.slamPos=new M,this.aer=0,this.brkH=0,this.subFrac=0,this.relFlow=new M,this.relSpeed=0,this.extF=new M,this.extT=new M,this.tow=new M;let e=Ae.halfW,i=Ae.tubeY;this.points=[Oi(e,i,-1.65,105,.21,.13,.3,.075,.05),Oi(-e,i,-1.65,105,.21,.13,.3,.075,.05),Oi(e,i,-.7,118,.21,.13,.34,.06,.055),Oi(-e,i,-.7,118,.21,.13,.34,.06,.055),Oi(e,i,.3,118,.21,.13,.34,.06,.055),Oi(-e,i,.3,118,.21,.13,.34,.06,.055),Oi(.69,i+.03,1.2,105,.21,.12,.3,.075,.055),Oi(-.69,i+.03,1.2,105,.21,.12,.3,.075,.055),Oi(0,.52,1.8,95,.22,.1,.26,.11,.07),Oi(0,.2,-.7,85,.13,.1,.55,.07,0),Oi(0,.21,.62,85,.13,.1,.55,.07,0),Oi(0,.12,-1.5,9,.16,.1,.03,.05,.03)];for(let n of this.points)n.o.sub(this.com);this.totalVol=this.points.reduce((n,s)=>n+s.vol,0),this._s=ri(),this._w={vx:0,vy:0,vz:0,ax:0,ay:0,az:0},this._p=new M,this._vp=new M,this._f=new M,this._F=new M,this._T=new M,this._X=new M,this._Y=new M,this._Z=new M,this._t=new M,this._t2=new M,this._qi=new _t,this._dq=new _t,this._m=new Rt,this.inv=new Rt,this.matrix=new Rt}setModel(t){let e=null;if(t.scene.traverse(n=>{n.isMesh&&!e&&(e=n)}),!e)throw new Error("boat model has no mesh");this.mesh=e;let i=e.material;i.envMapIntensity=.6,i.roughness=.95,i.color.setRGB(1.12,1.18,1.28),i.aoMapIntensity=.8,i.normalScale.set(1,1),i.needsUpdate=!0,this.material=i,t.scene.traverse(n=>{n.layers.enable(1),n.frustumCulled=!1}),t.scene.position.copy(this.com).multiplyScalar(-1),this.holder.add(t.scene),this.loaded=!0}reset(t,e,i){let n=this.waves.sample(t,e,this._s);this.quat.setFromAxisAngle(this._t.set(0,1,0),i),this.pos.set(t,n.h+.14+this.com.y-.13,e),this.vel.set(n.vx,n.vy,n.vz),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat),this.swamp=0,this.flipping=0,this.settle=0,this.capsized=!1,this.upY=1,this.sitUp=1,this.slam=0,this.extF.set(0,0,0),this.extT.set(0,0,0),this.tow.set(0,0,0),this.hcOk=!1,this.depth=0;for(let s of this.points)s.was=0,s.hOk=!1;this.active=!0,this.group.visible=this.loaded,this._updateMatrices(this.pos,this.quat)}hide(){this.active=!1,this.group.visible=!1}_updateMatrices(t,e){this._t.copy(this.com).multiplyScalar(-1).applyQuaternion(e).add(t),this.matrix.compose(this._t,e,this._t2.set(1,1,1)),this.inv.copy(this.matrix).invert()}pushAt(t,e,i,n){this.extF.x+=e,this.extF.y+=i,this.extF.z+=n;let s=this._t.copy(t).sub(this.pos);this.extT.x+=s.y*n-s.z*i,this.extT.y+=s.z*e-s.x*n,this.extT.z+=s.x*i-s.y*e}velocityAt(t,e){return e.copy(t).sub(this.pos).cross(this.angVel).multiplyScalar(-1).add(this.vel)}step(t){if(!this.active)return;let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._X.set(1,0,0).applyQuaternion(this.quat),n=this._Y.set(0,1,0).applyQuaternion(this.quat),s=this._Z.set(0,0,1).applyQuaternion(this.quat);this.upY=n.y;let r=this._F.set(0,0,0),o=this._T.set(0,0,0);this.mass=this.baseMass+this.rider+260*this.swamp;let h=0,c=0,u=0,l=0,d=0,f=0,g=0,b=0,m=0,p=0,v=0,x=this.dbg||(this.dbg={});x.buoy=0,x.dragY=0,x.bay=0,x.bvy=0,x.plunge=0,x.wvy=0,x.h=0,x.ay=0;let w=1-.32*this.swamp;for(let V=0;V<this.points.length;V++){let H=this.points[V],N=H.r.copy(H.o).applyQuaternion(this.quat),P=this._p.copy(this.pos).add(N),W=this._vp.copy(this.angVel).cross(N).add(this.vel),k=e.sample(P.x,P.z,this._s),O=k.h-P.y,D=Math.max(0,Math.min(1,(O+H.half)/(2*H.half))),B=H.hOk?Math.max(-9,Math.min(4.6,(k.h-H.h)/t)):k.vy;if(H.h=k.h,H.hOk=!0,D>.5!=H.was>.5){let Q=Math.abs(W.y-k.vy);Q>d&&(d=Q,this.slamPos.set(P.x,k.h,P.z))}H.was=D,H.sub=D;let Y=this._f.set(0,0,0);if(f+=k.nx,g+=k.ny,b+=k.nz,k.brkH>u&&(u=k.brkH),k.lip>l&&(l=k.lip),D>0){let Q=Math.max(0,O),X=k.aer*Math.exp(-Q/3.5);X>c&&(c=X);let ot=bf*(1-.6*X),nt=e.bodyFlow(k.x0,k.z0,Q,this._w),Z=.25+.75*Math.exp(-Q/(2.5+.35*Math.max(0,k.brkH)));nt.vx+=k.bvx*Z,nt.vy+=k.bvy,nt.vz+=k.bvz*Z,k.plunge>.01&&(nt.vy-=.25*k.plunge*Math.exp(-Q/3)),e.breakerFlow(P.x,P.y,P.z,k.h,nt),D>.55&&B>nt.vy&&(nt.vy+=(B-nt.vy)*ct((D-.55)/.3)*Math.exp(-Q/1.5));let kt=ot*H.vol*D*w;Y.set(kt*(1+vf)*nt.ax,kt*Math.max(.3*yl,yl+nt.ay+k.bay),kt*(1+vf)*nt.az),x.buoy+=Y.y,x.bay=Math.max(x.bay,Math.abs(k.bay))*Math.sign(k.bay||1),x.bvy=k.bvy,x.plunge=Math.max(x.plunge,k.plunge),x.wvy=nt.vy,x.h=k.h,x.ay=nt.ay;let vt=nt.vx-W.x,Et=nt.vy-W.y,xt=nt.vz-W.z;m+=vt*D,p+=xt*D,v+=D;let Ht=vt*i.x+Et*i.y+xt*i.z,Pt=vt*n.x+Et*n.y+xt*n.z,L=vt*s.x+Et*s.y+xt*s.z,C=.5*ot*D,et=(C*H.cx*Math.abs(Ht)+60*H.cx*D)*Ht,ht=(C*H.cy*Math.abs(Pt)+150*H.cy*D)*Pt,ft=(C*H.cz*Math.abs(L)+60*H.cz*D)*L;Y.x+=i.x*et+n.x*ht+s.x*ft,Y.y+=i.y*et+n.y*ht+s.y*ft,Y.z+=i.z*et+n.z*ht+s.z*ft,x.dragY+=i.y*et+n.y*ht+s.y*ft,h+=H.vol*D}if(D<1&&H.air>0){let Q=this.wind.x-W.x,X=-W.y,ot=this.wind.z-W.z,nt=.5*C1*H.air*(1-D)*(1-.55*this.swamp)*Math.hypot(Q,X,ot);Y.x+=Q*nt,Y.y+=X*nt,Y.z+=ot*nt}r.add(Y),o.x+=N.y*Y.z-N.z*Y.y,o.y+=N.z*Y.x-N.x*Y.z,o.z+=N.x*Y.y-N.y*Y.x}this.subFrac=h/this.totalVol,this.aer=c,this.brkH=u,this.slam=d,v>0?this.relFlow.set(m/v,0,p/v):this.relFlow.set(0,0,0),this.relSpeed+=(this.relFlow.length()-this.relSpeed)*(1-Math.exp(-t*6));{let V=Math.hypot(f,g,b)||1;this.sitUp=(n.x*f+n.y*g+n.z*b)/V}let R=Math.max(ct((c-.35)*2)*ct(u/4),ct((.35-Math.abs(n.y))*3),ct((this.subFrac-.86)*6));R>0?this.swamp+=(1-this.swamp)*(1-Math.exp(-t*1.6*R)):this.swamp>.5&&(this.swamp+=(.5-this.swamp)*(1-Math.exp(-t*.04)));let y=1+.9*Math.min(1,this.subFrac*2.5)+(this.rider+260*this.swamp)/this.baseMass*.5;if(this.flipArmed&&this.flipping<=0&&n.y>.3)for(let V of e.breakers){if(!V.active||V.height<4.5)continue;let H=this.pos.x-V.ox,N=this.pos.z-V.oz,P=H*V.dx+N*V.dz-V.s,W=-H*V.dz+N*V.dx,k=Math.exp(-(W*W)/(V.width*V.width));if(P<8&&P>-8&&V.height*k>4.5){this.flipAxis.set(V.dz,0,-V.dx),this.flipDir.set(V.dx,0,V.dz),this.flipping=2.6,this.flipArmed=!1;break}}if(this.flipping>0){this.flipping-=t;let V=this.angVel.dot(this.flipAxis);n.y>-.8?o.addScaledVector(this.flipAxis,(3-V)*2100*y):(this.flipping=0,this.settle=1.4),r.addScaledVector(this.flipDir,this.mass*5*ct((this.flipping-2)/.6))}if(this.settle>0&&(this.settle-=t,o.addScaledVector(this.angVel,-1500*y)),this.flipArmed&&this.rider>0&&this.flipping<=0){let V=Math.hypot(f,g,b)||1,H=(n.y*b-n.z*g)/V,N=(n.z*f-n.x*b)/V,P=(n.x*g-n.y*f)/V,W=this.angVel.dot(n);o.x+=H*5200*y-(this.angVel.x-n.x*W)*1500*y,o.y+=N*5200*y-(this.angVel.y-n.y*W)*1500*y,o.z+=P*5200*y-(this.angVel.z-n.z*W)*1500*y}if(this.keepYaw!==null&&n.y>.5){let V=Math.atan2(s.x,s.z),H=this.keepYaw-V;H=Math.atan2(Math.sin(H),Math.cos(H)),o.y+=Math.max(-260,Math.min(260,H*420-this.angVel.y*300))}this.capsized=n.y<0,r.add(this.extF),o.add(this.extT),this.extF.set(0,0,0),this.extT.set(0,0,0),r.add(this.tow);let E=this.mass+.08*bf*h;r.y-=this.mass*yl,this.vel.addScaledVector(r,t/E);let A=this.vel.length();A>40&&this.vel.multiplyScalar(40/A),this.pos.addScaledVector(this.vel,t);{let V=e.sample(this.pos.x,this.pos.z,this._s),H=this.hcOk?Math.max(-30,Math.min(30,(V.h-this.hc)/t)):V.vy;this.hc=V.h,this.hcOk=!0;let N=this.pos.y-V.h;this.depth=-N,N<-.42?(this.pos.y=V.h-.42,this.vel.y<H&&(this.vel.y=H)):N>.45&&this.vel.y>H&&(this.vel.y+=(H-this.vel.y)*Math.min(1,t*7),N>1.5&&(this.pos.y=V.h+1.5,this.vel.y>H&&(this.vel.y=H)))}let _=this._qi.copy(this.quat).invert(),T=this._t.copy(this.angVel).applyQuaternion(_),I=this._t2.copy(o).applyQuaternion(_),G=this.inertia.x*y,q=this.inertia.y*y,U=this.inertia.z*y;T.x+=(I.x-(U-q)*T.y*T.z)/G*t,T.y+=(I.y-(G-U)*T.z*T.x)/q*t,T.z+=(I.z-(q-G)*T.x*T.y)/U*t,T.multiplyScalar(Math.exp(-(.35+2.2*Math.min(1,this.subFrac*2.5))*t));let z=T.length();z>9&&T.multiplyScalar(9/z),this.angVel.copy(T).applyQuaternion(this.quat);let J=this.angVel.length()*t;J>1e-7&&(this._dq.setFromAxisAngle(this._t.copy(this.angVel).normalize(),J),this.quat.premultiply(this._dq).normalize()),this._updateMatrices(this.pos,this.quat)}sync(t){this.active&&(this.group.position.lerpVectors(this.prevPos,this.pos,t),this.group.quaternion.slerpQuaternions(this.prevQuat,this.quat,t),this.group.updateMatrixWorld(!0))}toWorld(t,e){return e.copy(t).applyMatrix4(this.matrix)}dirToWorld(t,e){return e.copy(t).applyQuaternion(this.quat)}nearestGrip(t,e){let i=this._t.copy(t).applyMatrix4(this.inv),n=0,s=1,r=1e9;for(let d=0;d<=24;d++){let f=-1.75+(Ae.bowZ-.15+1.75)*d/24,g=an(f),b=Qa(f);for(let m of[1,-1]){let p=Math.hypot(i.x-m*g,i.y-b,i.z-f);p<r&&(r=p,n=f,s=m)}}let o=an(n),h=an(n+.05);e.dist=r,e.z=n,e.side=s,e.local=(e.local||new M).set(s*o,Qa(n),n),e.point=this.toWorld(e.local,e.point||new M);let c=s*(h-o),u=.05,l=Math.hypot(c,u);return e.tangent=this.dirToWorld(this._t2.set(c/l,0,u/l),e.tangent||new M),e.normal=this.dirToWorld(this._t2.set(s*u/l,0,-s*c/l),e.normal||new M),e}};var El=a=>{window.__load&&window.__load(a)},xf=typeof qt<"u"?qt:{},le=(()=>{let a=h=>(xf[h]||2e6)/1e6,t={first:8,son:a("son.js"),sonUnpack:2.5,boat:a("boat.js"),boatUnpack:1.2,heli:a("heli.js"),heliUnpack:.1,ship:a("ship.js"),shipUnpack:7.5,surv:a("survivor.js"),survUnpack:.5,warm:5.5},e=.05,i=0;for(let h in t)i+=t[h];let n={},s={},r={},o=()=>{let h=0;for(let c in t)h+=t[c]*Math.min(1,n[c]||0);El(e+(1-e)*Math.min(.995,h/i))};return{set(h,c){s[h]===void 0&&(s[h]=performance.now()),c>(n[h]||0)&&(n[h]=Math.min(1,c),o())},done(h){s[h]!==void 0&&r[h]===void 0&&(r[h]=[Math.round(s[h]),Math.round(performance.now()-s[h])]),n[h]=1,o()},start(h){s[h]=performance.now()},times:r}})(),yf=(a=500)=>new Promise(t=>{let e=performance.now(),i=()=>{!window.__loadLag||window.__loadLag()<.015||performance.now()-e>a?t():requestAnimationFrame(i)};requestAnimationFrame(i)}),Go=a=>new Promise((t,e)=>{let i=document.createElement("script");i.src=a,i.onload=t,i.onerror=()=>e(new Error("load failed: "+a)),document.head.appendChild(i)}),ma=(a,t)=>{if(!t)return Go(a);le.start(t);let e=a.split("/").pop(),i=xf[e]||2e6;if(!(/^https?:$/.test(location.protocol)&&window.fetch&&window.ReadableStream&&window.Blob&&window.URL&&URL.createObjectURL)){let s=performance.now(),r=Math.max(.08,i/4e7)*1e3,o=setInterval(()=>le.set(t,.9*(1-Math.exp(-(performance.now()-s)/r))),50);return Go(a).finally(()=>{clearInterval(o),le.done(t)})}return fetch(a).then(async s=>{if(!s.ok||!s.body)throw new Error("fetch "+s.status);let r=s.body.getReader(),o=[],h=0;for(;;){let{done:u,value:l}=await r.read();if(u)break;o.push(l),h+=l.length,le.set(t,.99*Math.min(1,h/i))}let c=URL.createObjectURL(new Blob(o,{type:"text/javascript"}));try{await Go(c)}finally{URL.revokeObjectURL(c)}}).catch(()=>Go(a)).finally(()=>le.done(t))},mi=new URLSearchParams(location.search),Ki=1/120,Ci={get(a,t){try{let e=localStorage.getItem("eos."+a);return e===null?t:e}catch{return t}},set(a,t){try{localStorage.setItem("eos."+a,String(t))}catch{}}},_l=[.5,1,1.5],wl=[0,.4,.85,1],Ml=class{constructor(){if(this.canvas=document.getElementById("view"),this.manual=mi.get("manual")==="1",this.renderer=new Oa({canvas:this.canvas,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),!this.renderer.capabilities.isWebGL2)throw new Error("WebGL2 is required");this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=Oe,this.renderer.toneMapping=Zi,this.renderer.autoClear=!0,this.perf=new Ro(this.renderer);let t=mi.get("q")||Ci.get("quality",this.perf.pickDefault());this.perf.setProfile(fa[t]?t:this.perf.pickDefault()),this.manual&&(this.perf.adaptive=!1),it.hdrType=this.perf.info.halfFloat?bn:Be,this.isTouch=mi.get("touch")==="1"||mi.get("touch")!=="0"&&navigator.maxTouchPoints>0&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,it.uNoise.value=af(),it.uDetailN.value=rf(),it.uFoamTex.value=of(),this.time=0,this.acc=0,this.state="title",this.deadTimer=0,this.shipAt=55+Math.random()*30,this.scene=new Ii,this.camera=new Ve(62,16/9,.07,3e4),this.camera.layers.enableAll(),this.waves=new lo,this.sky=new xo(this.renderer,this.perf.profile.envSize),this.ocean=new Mo(this.waves,this.perf.profile),this.post=new So(this.renderer),this.post.levels=this.perf.profile.bloomLevels,this.scene.add(this.sky.dome,this.ocean.mesh),this.flashLight=new as(13163775,0),this.keyLight=new as(10465476,.42),this.flashLight.layers.enableAll(),this.keyLight.layers.enableAll(),this.scene.add(this.flashLight,this.flashLight.target,this.keyLight,this.keyLight.target),this.pmrem=new Ks(this.renderer),this.envTimer=0,this.envRT=null,this.input=new Po(this.canvas),this.character=new ea,this.scene.add(this.character.group),this.body=new ia(this.waves),this.survival=new sa,this.player=new na(this.body,this.survival,this.input),this.anim=new oa(this.character,this.body,this.player,this.survival),this.cam=new Co(this.camera,this.character,this.body,this.player,this.waves,this.input),this.cam.yaw=-Math.PI/2;let e=mi.get("view")||Ci.get("view","third");this.cam.setMode(e),this.cam.blend=this.cam.target,this.cam.intensity=+Ci.get("shake",1)||1,this.cam.auto=Ci.get("autocam","1")!=="0",mi.has("yaw")&&(this.cam.yaw=+mi.get("yaw")),mi.has("pitch")&&(this.cam.pitch=+mi.get("pitch")),this.limbs=new ha(this.waves,this.character,this.body),this.limbs.onSlap=(n,s,r)=>{this.foam&&this.foam.enabled&&n>1.6&&this.foam.addSplash(s.x,s.z,Math.min(.8,.3+n*.11)*(r==="hand"?1:.65));let o=this.camera.matrixWorld.elements,h=s.x-this.camera.position.x,c=s.z-this.camera.position.z;r!=="foot"&&n>1.6&&this.cam.blend<.5&&!this.underwater.isUnder&&this.lens.spawn(r==="hand"?3:1),this.emit("limb",{v:n,pos:s,kind:r,pan:Math.max(-.8,Math.min(.8,(h*o[0]+c*o[2])/(Math.hypot(h,c)+.5)))})},this.mouthUnder=!1,this.camUnder=0,this.mouthWorld=new M,this.impactBlur=0,this.listeners=[],this.weather=new Lo(this.waves),this.weather.base=this.weather.storm=mi.has("storm")?+mi.get("storm"):1,this.manual&&(this.weather.locked=!0),this.lightning=new Io,this.scene.add(this.lightning.group),this.autoLightning=!(this.manual||mi.get("auto")==="0"),this.buildEffects(),this.interaction.auto=this.autoLightning,this.audio=new zo,this.other=new bo(this.waves,this.scene),this.otherAt=32+Math.random()*14,this.otherDone=!1,this.other.onSplash=(n,s,r)=>{if(this.foam&&this.foam.enabled&&this.foam.addSplash(n.x,n.z,Math.min(.8,.3+s*.11)*(r==="hand"?1:.65)),r!=="hand"||this.underwater.isUnder||!this.audio.playClip)return;let o=this.camera.position,h=this.camera.matrixWorld.elements,c=n.x-o.x,u=n.z-o.z,l=Math.hypot(c,u),d=Math.min(1.1,.45+s*.12)/(1+l/7);d>.02&&this.audio.playClip("w_thrash"+(1+(Math.random()*5|0)),d,.88+Math.random()*.22,Math.max(-.9,Math.min(.9,(c*h[0]+u*h[2])/(l+.5))))},this.audio.volume=+Ci.get("volume",.85),this.audio.sfxOn=Ci.get("sfx","1")!=="0",this.listeners.push((n,s)=>this.audio.onEvent(n,s)),this.face=new No,this.onCharacter=n=>this.face.attach(n.mesh),this.vst={alive:!0},this.coughSeq=0,this.coughT=0,this.voiceDir=new Bo(this.audio,this.face,{bubbles:n=>this.underwater.burstAt(this.mouthWorld,n,.22),cough:n=>{this.coughSeq=n,this.coughT=0}}),this.listeners.push((n,s)=>this.voiceDir.onEvent(n,s,this.vst)),ma("dist/voice.js").then(()=>{this.audio.setVoices(window.__EOS_VOICE)}).catch(()=>console.warn("[voice] \uBAA9\uC18C\uB9AC \uB179\uC74C\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4")),this.listeners.push((n,s)=>{if(n==="inhale"&&(this.anim.gaspKick=Math.max(this.anim.gaspKick,s.gasp?1:.4*s.strength)),n==="exhale"&&!this.mouthUnder&&this.spray&&this.state!=="title"){let r=this.player.heading,o=this.weather.wind,h=this.mouthWorld,c=3+Math.round(4*s.strength);for(let u=0;u<c;u++)this.spray.emit(h.x+r.x*.05,h.y+.01,h.z+r.z*.05,r.x*(.5+Math.random()*.7)+o.x*.04,.15+Math.random()*.3,r.z*(.5+Math.random()*.7)+o.z*.04,.5+Math.random()*.5,.05+Math.random()*.06,1,.45,.11+.08*s.strength,.6)}}),this.lightning.onThunder=n=>this.audio.onEvent("thunder",n),this.audioState={cam:{pos:this.camera.position,fwd:new M,up:new M},hot:[]},this.rescue=new Ho(this.waves),this.scene.add(this.rescue.group,...this.rescue.lights),this.cargo=new pi(this.waves),this.scene.add(this.cargo.group),this.boat=new Vo(this.waves),this.scene.add(this.boat.group),this.aboard=!1,this.bacc=0,this.washT=0,this.boatOff=mi.get("boat")==="0",this.seatPos=new M(.2,Ae.floorY+.15,-.3);{let r=new M(Math.sin(.26),0,Math.cos(.26)),o=new M(Math.cos(.26)*Math.sin(.45),-Math.cos(.45),-Math.sin(.26)*Math.sin(.45));this.seatQuat=new _t().setFromRotationMatrix(new Rt().makeBasis(new M().crossVectors(r,o),r,o))}this.rid={p:new M,v:new M,pv:new M,d:new M,has:!1,slam:0},this.wonTimer=0,this.scenarios=new Oo(this),this.pendingScenario=mi.get("test"),this.weather.update(0),this.waves.update(0),this.body.reset(0,0),this.syncCharacter(1),this.anim.update(1/60),this.character.group.updateMatrixWorld(!0),this.drawScene=(n,s)=>{let r=this.renderer;if(r.setRenderTarget(n),s){let o=(this.camUnder||0)<.5;o&&((this._clipUnder||(this._clipUnder=[new Ei(new M(0,-1,0),0)]))[0].constant=this.body.surfaceH+.04,r.clippingPlanes=this._clipUnder),this.camera.layers.set(1),r.setClearColor(0,0),r.clear(),r.render(this.scene,this.camera),this.camera.layers.enableAll(),o&&(r.clippingPlanes=this._noClip||(this._noClip=[]))}else r.render(this.scene,this.camera)};let i={input:this.input,start:()=>this.start(),resume:()=>this.resume(),restart:()=>this.restart(),pause:()=>this.pause(),toggleView:()=>{this.cam.toggle(),Ci.set("view",this.cam.mode),this.impactBlur=Math.max(this.impactBlur,.3)},scenario:n=>{this.scenarios.run(n),this.resume()},get:n=>n==="quality"?this.perf.profile.label:n==="view"?this.cam.mode==="first"?"1\uC778\uCE6D":"3\uC778\uCE6D":n==="shake"?Math.round(this.cam.intensity*100)+"%":n==="autocam"?this.cam.auto?"\uCF2C":"\uB054":n==="sfx"?this.audio.sfxOn?"\uCF2C":"\uB054":Math.round(this.audio.volume*100)+"%",cycle:n=>{if(n==="quality"){let s=Object.keys(fa);this.setQuality(s[(s.indexOf(this.perf.profile.key)+1)%s.length])}else if(n==="view")i.toggleView();else if(n==="sfx")this.audio.setSfx(!this.audio.sfxOn),Ci.set("sfx",this.audio.sfxOn?"1":"0");else if(n==="autocam")this.cam.auto=!this.cam.auto,Ci.set("autocam",this.cam.auto?"1":"0");else if(n==="shake")this.cam.intensity=_l[(_l.indexOf(this.cam.intensity)+1)%_l.length]||1,Ci.set("shake",this.cam.intensity);else{let s=wl[(wl.indexOf(this.audio.volume)+1)%wl.length];this.audio.setVolume(s===void 0?.85:s),Ci.set("volume",this.audio.volume)}this.state!=="playing"&&this.state!=="title"&&this.renderStill()}};this.api=i,this.ui=!this.manual||mi.get("ui")==="1"?new Uo(document.getElementById("ui"),i,this.isTouch):null,this.hadLock=!1,this.input.onLockChange=n=>{n?this.hadLock=!0:this.hadLock&&this.state==="playing"&&(this.hadLock=!1,this.pause())},this.canvas.addEventListener("click",()=>{this.state==="playing"&&!this.isTouch&&!this.input.locked&&this.input.lock()}),window.addEventListener("keydown",n=>{n.repeat||((n.code==="KeyV"||n.code==="KeyC")&&this.state==="playing"&&i.toggleView(),n.code==="KeyP"&&(this.state==="playing"?this.pause():this.state==="paused"&&this.resume()),n.code==="Enter"&&this.state==="title"&&this.start())}),window.addEventListener("wheel",n=>{if(this.state!=="playing"||this.cam.cine)return;let s=n.deltaY<0?"first":"third";s!==this.cam.mode&&(this.cam.setMode(s),Ci.set("view",s),this.impactBlur=Math.max(this.impactBlur,.3),this.ui&&this.ui.refresh())},{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()}),this.manual?(this.state="playing",this.ui&&this.ui.show("playing",{time:0,cause:""}),this.pendingScenario&&(this.scenarios.run(this.pendingScenario),this.pendingScenario=null)):this.setState("title");{let n=["pointerdown","keydown","touchend","mousedown"],s=()=>{if(!(this.state==="paused"||this.state==="dead"||this.manual)){try{this.audio.start(),this.audio.resume()}catch{}if(this.audio.ctx&&this.audio.ctx.state==="running")for(let r of n)window.removeEventListener(r,s,!0)}};for(let r of n)window.addEventListener(r,s,!0);this.onAssets=s}window.addEventListener("resize",()=>{this.resize(),(this.state==="paused"||this.state==="dead")&&this.renderStill()}),this.resize(),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}async loadCharacter(){try{window.__EOS_SON||await ma("dist/son.js","son"),le.done("son"),le.start("sonUnpack");let t=await cs(window.__EOS_SON);window.__EOS_SON=null;let e=new la(this.character,t);this.character.useGlb(e),this.body.setAirway(new M(0,e.mouth.y,e.mouth.z),new M(0,e.eye.y,e.eye.z)),this.glbInfo={verts:e.mesh.geometry.attributes.position.count,bones:e.order.length,morphs:Object.keys(e.mesh.morphTargetDictionary||{}),sourceHeight:+e.sourceHeight.toFixed(3)},this.onCharacter&&this.onCharacter(e)}catch(t){console.warn("[character] GLB \uCE90\uB9AD\uD130\uB97C \uC4F0\uC9C0 \uBABB\uD574 \uAE30\uBCF8 \uBAB8\uC73C\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4: "+t.message),this.glbInfo={error:t.message},this.character.body.visible=!0,this.character.head.visible=!0}le.done("son"),le.done("sonUnpack")}async loadOther(){if(await this.other.load(e=>ma(e,"surv").then(()=>{le.done("surv"),le.start("survUnpack")})),le.done("surv"),le.done("survUnpack"),!this.other.ready)return;let t=this.other.character.glb&&this.other.character.glb.material;t&&t.map&&this.renderer.initTexture(t.map),this._otherPending&&(this._otherPending=!1,this.spawnOther(!0))}spawnOther(t){if(!this.other.ready)return this._otherPending=!0,!1;let e=this.body,i=this.camera.position,n=this.cam.yaw+(Math.random()-.5)*.7,s=t?15:20+Math.random()*6,r=e.pos.x+Math.sin(n)*s,o=e.pos.z+Math.cos(n)*s;return this.other.spawn(r,o,e.pos.x,e.pos.z)?(this.otherDone=!0,this.otherSeenAt=this.time,this.lightning.strike(i,{azimuth:Math.atan2(o-i.z,r-i.x),dist:1300,sheet:1,power:1.3}),!0):!1}async loadCargo(){try{window.__EOS_SHIP||await ma("dist/ship.js","ship"),le.done("ship"),le.start("shipUnpack");let t=await cs(window.__EOS_SHIP);window.__EOS_SHIP=null,await yf(),this.cargo.setModel(t),this.cargo.warm(this.renderer,this.camera,this.scene);{let s=this.camera,r=new M(0,0,-1).applyQuaternion(s.quaternion);r.y=0,r.normalize(),this.cargo.place(s.position.x+r.x*70,s.position.z+r.z*70,Math.atan2(r.x,r.z)+Math.PI/2),this.cargo.update(1/60,this.camera,it.uResolution.value.y),this.render(1/60),this.render(1/60),this.cargo.hide()}let e=0,i=0,n=0;t.scene.traverse(s=>{s.isMesh&&(n++,e+=s.geometry.attributes.position.count,i+=s.geometry.index?s.geometry.index.count/3:0)}),this.cargoInfo={verts:e,tris:i,meshes:n}}catch(t){console.warn("[cargo] \uD654\uBB3C\uC120 \uBAA8\uB378\uC744 \uC4F0\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+t.message),this.cargoInfo={error:t.message}}le.done("ship"),le.done("shipUnpack")}warmRescue(){le.start("warm");let t=this.rescue,e=this.cargo,i=this.camera,n=this.weather.wind,s=new M(0,0,-1).applyQuaternion(i.quaternion);s.y=0,s.lengthSq()<1e-4&&s.set(0,0,1),s.normalize();let r=t.arriveAt,o=new M(i.position.x+s.x*24,0,i.position.z+s.z*24);o.y=this.waves.heightFast(o.x,o.z);let h=[],c=u=>u.traverse(l=>{(l.isMesh||l.isPoints)&&(h.push([l,l.frustumCulled]),l.frustumCulled=!1)});try{t.dispatch(o,0,0),t.pos.set(o.x,o.y+20,o.z);for(let l=0;l<4;l++)t.update(1/60,o,n,0,!0,null,!0,i.position,!1);e.loaded&&(e.place(i.position.x+s.x*70,i.position.z+s.z*70,Math.atan2(s.x,s.z)+Math.PI/2),e.update(1/60,i,it.uResolution.value.y,o),c(e.group)),c(t.group);let u=this.other.ready&&!this.other.active?this.other.character.group:null;u&&(u.position.set(o.x+3,o.y-.4,o.z),u.visible=!0,u.updateMatrixWorld(!0),this.other.character.retarget(),c(u)),this.render(1/60),this.render(1/60),u&&(u.visible=!1);for(let l of[t.beamMat,e.loaded?e.beamMat:null])l&&(l.side=l.side===Ce?Qe:Ce,l.needsUpdate=!0);this.render(1/60)}catch(u){console.warn("[warm] "+u.message)}for(let[u,l]of h)u.frustumCulled=l;t.reset(r),e.loaded&&e.hide(),this.post.adaptReset=!0,le.done("warm")}async loadHeli(){try{window.__EOS_HELI||await ma("dist/heli.js","heli"),le.done("heli"),le.start("heliUnpack");let t=await cs(window.__EOS_HELI);window.__EOS_HELI=null;let e=0;t.scene.traverse(i=>{i.isMesh&&(e+=i.geometry.attributes.position.count)}),this.rescue.setModel(t),this.heliInfo={verts:e}}catch(t){console.warn("[heli] \uD5EC\uAE30 \uBAA8\uB378\uC744 \uC4F0\uC9C0 \uBABB\uD574 \uAE30\uBCF8 \uD5EC\uAE30\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4: "+t.message),this.heliInfo={error:t.message}}le.done("heli"),le.done("heliUnpack")}async loadBoat(){if(this.boatOff){le.done("boat"),le.done("boatUnpack");return}try{window.__EOS_BOAT||await ma("dist/boat.js","boat"),le.done("boat"),le.start("boatUnpack");let t=await cs(window.__EOS_BOAT);window.__EOS_BOAT=null,this.boat.setModel(t),this.boatInfo={verts:this.boat.mesh.geometry.attributes.position.count},(this.wantBoard||this.state==="title"&&!this.scenarios.active)&&this.board()}catch(t){console.warn("[boat] \uBCF4\uD2B8 \uBAA8\uB378\uC744 \uC4F0\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+t.message),this.boatInfo={error:t.message}}le.done("boat"),le.done("boatUnpack")}slamOut(){let t=this.boat,e=this._bt||(this._bt={p:new M,n:new M,q:new _t});e.q.copy(t.quat).invert(),e.p.copy(t.slamPos).sub(t.pos).applyQuaternion(e.q);let i=Math.max(Ae.sternZ,Math.min(Ae.bowZ,e.p.z)),n=an(i)+.28,s,r,o,h;if(e.p.z<Ae.transomZ&&Math.abs(e.p.x)<Ae.halfW-.3)s=e.p.x,r=Ae.sternZ-.25,o=0,h=-1;else{let c=e.p.x>=0?1:-1;s=c*n,r=i,o=c,h=0}return e.n.set(o,0,h).applyQuaternion(t.quat),e.n.y=0,e.n.normalize(),e.p.set(s,0,r).applyQuaternion(t.quat).add(t.pos),e.p}board(){if(!this.boat.loaded){this.wantBoard=!this.boatOff;return}this.wantBoard=!1;let t=this.body,e=-Math.PI/2+.32;this.boat.reset(t.pos.x,t.pos.z,e),this.boat.rider=this.body.mass,this.boat.flipArmed=!0,this.boat.keepYaw=e,this.aboard=!0,this.washT=0,this.bacc=0,this.boardedAt=this.time,this.pinToBoat(!0),this.anim.hold="aboard",this.syncCharacter(1)}pinToBoat(t,e=1/60){let i=this.boat,n=this.body,s=this.rid;t&&i.sync(1);let r=this._pt||(this._pt={base:new M,v:new M,a:new M,q:new _t,qi:new _t,e:new gi,x:new M(1,0,0),z:new M(0,0,1)}),o=this._seatW||(this._seatW=new M),h=this._seatQ||(this._seatQ=new _t);r.base.copy(this.seatPos).sub(i.com).applyQuaternion(i.group.quaternion).add(i.group.position),i.velocityAt(r.base,r.v),(t||!s.has)&&(s.pv.copy(r.v),s.p.set(0,0,0),s.v.set(0,0,0),s.d.set(0,0,0),s.slam=0,s.has=!0),r.a.copy(r.v).sub(s.pv).multiplyScalar(1/Math.max(e,.001)),s.pv.copy(r.v),r.a.lengthSq()>2025&&r.a.setLength(45),r.a.multiplyScalar(-1),r.a.y-=9.81,r.a.applyQuaternion(r.qi.copy(i.group.quaternion).invert()),r.a.y+=9.81,s.d.lerp(r.a,1-Math.exp(-e*16));let c=Math.max(1,Math.ceil(e/.012)),u=e/c;for(let d=0;d<c;d++)s.v.x+=(s.d.x*3.2-30*s.p.x-3.2*s.v.x)*u,s.v.z+=(s.d.z*2.4-34*s.p.z-3.4*s.v.z)*u,s.v.y+=((s.d.y-4)*1.5-15*s.p.y-2*s.v.y)*u,s.p.addScaledVector(s.v,u),s.p.y<=0&&(s.v.y<-.5&&(s.slam=Math.max(s.slam,Math.min(1,-s.v.y/2.2))),s.p.y=0,s.v.y<0&&(s.v.y=0)),s.p.y>.22&&(s.p.y=.22,s.v.y>0&&(s.v.y=0)),s.p.x>.07?(s.p.x=.07,s.v.x>0&&(s.v.x=-.3*s.v.x)):s.p.x<-.26&&(s.p.x=-.26,s.v.x<0&&(s.v.x=0)),s.p.z>.16?(s.p.z=.16,s.v.z>0&&(s.v.z=0)):s.p.z<-.24&&(s.p.z=-.24,s.v.z<0&&(s.v.z=0));s.slam=Math.max(0,s.slam-e*3.2),this.state==="title"&&s.p.multiplyScalar(.5),o.copy(this.seatPos).add(s.p).sub(i.com).applyQuaternion(i.group.quaternion).add(i.group.position),h.copy(i.group.quaternion).multiply(this.seatQuat).multiply(r.q.setFromAxisAngle(r.z,s.p.x/.5)).multiply(r.q.setFromAxisAngle(r.x,s.p.y/.8)),n.pin(o,h,i.velocityAt(o,this._seatV||(this._seatV=new M)),i.angVel);let l=this.anim.ride;l.lift=s.p.y/.22,l.side=s.p.x/.2,l.fore=s.p.z/.2,l.slam=s.slam,s.slam>.55&&this.state==="playing"&&(this.impactBlur=Math.max(this.impactBlur,.12*s.slam))}launchIntroWave(t=10){return this.introWave=this.interaction.launch({lead:t,height:12.5,breakOffset:.2,angleOffset:0,width:190,speed:14}),this.introWave}boatPoint(t,e,i,n){return n.set(t,e,i).applyMatrix4(this.boat.holder.children[0].matrixWorld)}contactBoat(t){let e=this.boat,i=this.body,n=this.player,s=this.survival;this.clingCool=Math.max(0,(this.clingCool||0)-t);let r=n.swimHeld,o=r&&!this._swimWas;if(this._swimWas=r,!e.active||!e.loaded){this.clinging=!1,n.cling=!1,n.faceDir=null,this.nearBoat=99;return}let h=this._cb||(this._cb={c:new M,g:{},g2:{},out:new M,a:new M,f:new M,v:new M,l:new M,n:new M,Y:new M});if(h.c.set(0,.4,0).applyQuaternion(i.quat).add(i.pos),h.c.distanceToSquared(e.pos)>36){this.nearBoat=99,this.clinging&&this.letGo(!1);return}let c=e.nearestGrip(h.c,h.g);this.nearBoat=c.dist,h.Y.set(0,1,0).applyQuaternion(e.quat);for(let v=0;v<3;v++){let x=i.points[v],w=v===1?.15:.11,R=e.nearestGrip(x.world,h.g2),y=0;if(R.dist<Ae.tubeR+w)y=Ae.tubeR+w-R.dist,h.n.copy(x.world).sub(R.point),h.n.lengthSq()<1e-6&&h.n.copy(R.normal),this.clinging&&(h.n.y=Math.max(0,h.n.y),h.n.lengthSq()<1e-6&&h.n.copy(R.normal)),h.n.normalize();else{let E=h.l.copy(x.world).applyMatrix4(e.inv);if(Math.abs(E.x)<an(E.z)&&E.z>Ae.transomZ&&E.z<Ae.bowZ&&E.y>0&&E.y<Ae.floorY+w){let A=E.y>.17;y=A?Ae.floorY+w-E.y:E.y+w*.5,h.n.copy(h.Y).multiplyScalar(A?1:-1)}}if(y>0){e.velocityAt(x.world,h.v);let E=(i.vel.x-h.v.x)*h.n.x+(i.vel.y-h.v.y)*h.n.y+(i.vel.z-h.v.z)*h.n.z,A=Math.max(0,Math.min(2600,y*9e3-E*500));i.extForce.addScaledVector(h.n,A),e.pushAt(x.world,-h.n.x*A*.6,-h.n.y*A*.6,-h.n.z*A*.6)}}if(!this.clinging){let v=s.alive&&this.clingCool<=0&&c.dist<1.25&&!n.diveHeld&&!this.rescue.reach&&this.rescue.state!=="lift"&&n.air<.5;if(this.canCling=v,v&&o)this.clinging=!0,this.clingZ=c.z,this.clingSide=c.side,this.strain=0,this.clingNote=0,this.grip=Math.max(this.grip===void 0?1:this.grip,.35),this.runaway=0,this.grabT=3;else{n.cling=!1,n.faceDir=null,this.grip=Math.min(1,(this.grip===void 0?1:this.grip)+.03*t);return}}if(!s.alive||n.diveHeld){this.letGo(!1);return}let u=an(this.clingZ),l=an(this.clingZ+.05),d=(this._cg||(this._cg=new M)).set(this.clingSide*u,Qa(this.clingZ),this.clingZ).applyMatrix4(e.matrix),f=this.clingSide*(l-u),g=Math.hypot(f,.05);h.out.set(this.clingSide*.05/g,0,-this.clingSide*f/g).applyQuaternion(e.quat),h.out.y=0,h.out.lengthSq()<.04&&h.out.set(i.pos.x-d.x,0,i.pos.z-d.z),h.out.normalize(),h.c.set(0,.42,0).applyQuaternion(i.quat),this.squeezeK=(this.squeezeK||0)+((r?1:0)-(this.squeezeK||0))*(1-Math.exp(-t*6)),h.a.copy(d).addScaledVector(h.out,Ae.tubeR+.2-.07*this.squeezeK),h.a.y=i.surfaceH+.065+.05*this.squeezeK,h.l.copy(i.pos).add(h.c),e.velocityAt(d,h.v),h.n.copy(i.angVel).cross(h.c).add(i.vel),h.f.copy(h.a).sub(h.l).multiplyScalar(900),h.f.x-=(h.n.x-h.v.x)*230,h.f.y-=(h.n.y-h.v.y)*280,h.f.z-=(h.n.z-h.v.z)*230;let b=h.f.length(),m=r;this.needNow=b,this.squeeze=m,n.squeeze=m,this.grip=Math.max(0,Math.min(1,this.grip+(m?-(.17+.1*Math.min(1,b/600)):.06)*t)),this.grabT=Math.max(0,(this.grabT||0)-t);let p=(m?200+730*this.grip:200+130*this.grip)*(.5+.5*s.eff)*(.4+.6*n.control);this.grabT>0&&(p=Math.max(p,1e3),b<190&&(this.grabT=Math.min(this.grabT,.2))),this.strain=Math.max(0,this.strain+(b>p?t:-t*.8)),b>p&&h.f.multiplyScalar(p/b),i.extForce.add(h.f),i.extTorque.x+=h.c.y*h.f.z-h.c.z*h.f.y,i.extTorque.y+=h.c.z*h.f.x-h.c.x*h.f.z,i.extTorque.z+=h.c.x*h.f.y-h.c.y*h.f.x,e.pushAt(d,-h.f.x,-h.f.y,-h.f.z),h.c.add(i.pos),n.cling=!0,n.faceDir=(this._fd||(this._fd=new M)).copy(h.out).multiplyScalar(-1),(this.strain>.6||h.c.distanceTo(d)>1.9)&&this.letGo(!0)}letGo(t){this.clinging&&(this.clinging=!1,this.player.cling=!1,this.player.squeeze=!1,this.player.faceDir=null,this.clingCool=t?1.1:.7,t&&(this.tornAt=this.time,this.player.control=Math.min(this.player.control,.3),this.brnd()<.5&&this.startRunaway()),this.gustT=5+6*this.brnd())}startRunaway(){if(!this.boat.active||this.aboard)return;let t=this.weather.wind,e=Math.hypot(t.x,t.z)||1,i=(this.brnd()-.5)*.7;(this.runDir||(this.runDir=new M)).set((t.x*Math.cos(i)-t.z*Math.sin(i))/e,0,(t.x*Math.sin(i)+t.z*Math.cos(i))/e),this.runaway=5+4*this.brnd(),this.runNote=1.6}boatFrame(t){let e=this.boat;if(!e.active||!e.loaded)return;this.slamCool=Math.max(0,(this.slamCool||0)-t),this.state;{let s=this.spray,r=e.relSpeed;if(r>1.1&&e.subFrac>.03&&e.subFrac<.9){this.hullAcc=(this.hullAcc||0)+t*Math.min(46,(r-.9)*16);let o=e.group.quaternion,h=this._hs||(this._hs={l:new M,p:new M,n:new M,qi:new _t});h.l.copy(e.relFlow).applyQuaternion(h.qi.copy(o).invert());let c=Math.hypot(h.l.x,h.l.z)||1;h.l.x/=c,h.l.z/=c;let u=s.near;s.near=!0;let l=0;for(;this.hullAcc>=1&&l++<12;){this.hullAcc-=1;let d=-1.9+Math.random()*3.85,f=Math.random()<.5?-1:1,g=d>1.5,b=g?f*.5:f,m=g?.87:0;if(b*-h.l.x+m*-h.l.z<.2)continue;this.boatPoint(f*(an(d)+.2),.28,d,h.p);let p=this.waves.heightFast(h.p.x,h.p.z);if(Math.abs(h.p.y-p)>.45)continue;h.n.set(b,0,m).applyQuaternion(o);let v=.9+Math.random()*2.2*Math.min(1.6,r/2.2),x=.5+Math.random()*1.4;if(s.emit(h.p.x,p+.04,h.p.z,e.vel.x+h.n.x*x+e.relFlow.x*.25,e.vel.y*.3+v,e.vel.z+h.n.z*x+e.relFlow.z*.25,.4+Math.random()*.5,Math.random()<.25?.024+Math.random()*.02:.01+Math.pow(Math.random(),2)*.02,0,0,.95),Math.random()<.1){let w=(.26+.24*Math.random())*Math.min(1.6,r/2.2);s.lean=(h.n.x*s._rx+h.n.z*s._rz)*.5,s.emit(h.p.x,p-.02,h.p.z,e.vel.x+h.n.x*.5,0,e.vel.z+h.n.z*.5,.62*Math.sqrt(w/.45),w,3,0,.75,0),s.lean=0}}s.near=u}if(this.lightSlapCool=Math.max(0,(this.lightSlapCool||0)-t),e.slam>1.2&&e.slam<=2.4&&this.lightSlapCool<=0){this.lightSlapCool=.4;{let o=this.slamOut(),h=this._bt.n;s.slap(o.x,e.slamPos.y,o.z,Math.min(1.9,.5+e.slam*.5),h.x*.8,h.z*.8,e.vel.x,0,e.vel.z,2.2)}this.boatSlamK=Math.max(this.boatSlamK||0,.25+e.slam*.12),this.state!=="title"&&this.emit("boatSlam",{v:e.slam*.8,pan:0})}}if(e.slam>2.4&&this.slamCool<=0&&this.state!=="title"){this.slamCool=.5,this.boatSlamK=1;let s=Math.min(2.2,(e.slam-1.6)*.6);this.spray.burst(e.slamPos.x,e.slamPos.y,e.slamPos.z,s*.6,this.weather.wind);{let r=this.slamOut(),o=this._bt.n.x,h=this._bt.n.z;for(let c=0;c<3;c++){let u=(c-1)*.7,l=Math.cos(u),d=Math.sin(u),f=o*l-h*d,g=o*d+h*l;this.spray.slap(r.x+f*.3-o*.1,e.slamPos.y,r.z+g*.3-h*.1,Math.min(3,1.2+e.slam*.4),f,g,e.vel.x,0,e.vel.z,3)}}this.foam.addSplash(e.slamPos.x,e.slamPos.z,Math.min(1,.3+e.slam/8));{let r=this.camera.matrixWorld.elements,o=e.slamPos.x-this.camera.position.x,h=e.slamPos.z-this.camera.position.z,c=Math.hypot(o,h);this.emit("boatSlam",{v:e.slam*Math.min(1,9/(c+3)),pan:Math.max(-.8,Math.min(.8,(o*r[0]+h*r[2])/(c+.5)))})}}if(this.wasCapsized!==e.capsized&&(this.wasCapsized=e.capsized,this.state!=="title"&&(this.spray.burst(e.pos.x,this.waves.heightFast(e.pos.x,e.pos.z),e.pos.z,1.8,this.weather.wind),this.foam.addSplash(e.pos.x,e.pos.z,1),this.emit("boatSlam",{v:7,pan:0}))),!this.ui||this.state!=="playing")return;let i=this.isTouch?"\uD5E4\uC5C4":"Space",n=this.isTouch?"\uC785\uC218":"F";this.boatNote=Math.max(0,(this.boatNote||0)-t),this.clinging&&!this._clingWas?(this.ui.note(`\uB3CC\uD48D\xB7\uD070 \uD30C\uB3C4\uAC00 \uC62C \uB54C ${i} \uAFB9 \u2014 \uAF49 \uC954\uB2E4 \xB7 ${n} \uB193\uAE30`,4.5),this.boatNote=6):!this.clinging&&this._clingWas&&this.time-(this.tornAt||-9)<.3?(this.ui.note("\uB193\uCCE4\uB2E4",2.5),this.boatNote=4):!this.clinging&&!this.aboard&&this.canCling&&this.boatNote<=0&&(this.ui.note(`${i} \u2014 \uBCF4\uD2B8\uB97C \uBD99\uC7A1\uACE0 \uBC84\uD2F4\uB2E4`,3),this.boatNote=7),this._clingWas=this.clinging}contactShip(t){let e=this.cargo,i=this.body,n=this.player,s=this.survival;if(!e.active||!e.loaded||!s.alive){this.shipTouch=0;return}if(Math.hypot(i.pos.x-e.pos.x,i.pos.z-e.pos.z)>140){this.shipTouch=0,this.shipPrevZ=void 0;return}let r=this._sc||(this._sc={l:new M,n:new M,v:new M}),o=Math.sin(e.yaw),h=Math.cos(e.yaw),c=e.speed/5.5;r.v.set(o*e.speed,0,h*e.speed);let u=(m,p,v,x)=>x.set(m*h+v*o,p,-m*o+v*h);if(this.shipCaught){this.shipCaught+=t,e.toLocal(i.pos,r.l);let m=Math.max(-89,Math.min(89,r.l.z)),p=pi.keelY(m),v=r.l.x>=0?1:-1,x=r.l.y<p-.8,w=x?r.l.x*.4:v*(pi.halfBeam(m,r.l.y)+.55),R=i.vel.x*h-i.vel.z*o;u(Math.max(-900,Math.min(900,(w-r.l.x)*320-R*70)),0,0,r.n),i.extForce.add(r.n),i.extForce.y+=Math.max(-1100,Math.min(400,(p-2.6-r.l.y)*450))-i.vel.y*90,n.control=Math.min(n.control,.03),n.impact=Math.max(n.impact,1.3),this.impactBlur=Math.max(this.impactBlur,.25),(this.shipCaught>6.5||r.l.z<-80)&&this.killBy("ship");return}e.toLocal(i.pos,r.l);let l=this.shipPrevZ===void 0?r.l.z:this.shipPrevZ;if(this.shipPrevZ=r.l.z,l>87&&r.l.z<=87&&Math.abs(r.l.x)<7.5&&r.l.y>pi.keelY(87)-3&&r.l.y<pi.deckY(87)+4){this.shipCaught=.001,this.impactBlur=.9,n.impact=2.2,n.impactPeak=Math.max(n.impactPeak,2.2),this.emit("impact",{strength:3,dir:u(0,-.5,1,new M).normalize(),aer:0});return}let d=0;for(let m=0;m<3;m++){let p=i.points[m],v=m===1?.18:.13;if(e.toLocal(p.world,r.l),r.l.y<pi.keelY(r.l.z)-v||r.l.y>pi.deckY(r.l.z)+2.5)continue;let x=pi.halfBeam(r.l.z,r.l.y);if(x<=.05)continue;let w=(pi.halfBeam(r.l.z-1,r.l.y)-pi.halfBeam(r.l.z+1,r.l.y))/2,R=Math.hypot(1,w),y=(x-Math.abs(r.l.x))/R+v;if(y<=0)continue;let E=r.l.x>=0?1:-1;if(r.l.z>-45&&c>.3){this.shipCaught=.001,this.impactBlur=.9,n.impact=2.2,n.impactPeak=Math.max(n.impactPeak,2.2),this.emit("impact",{strength:3,dir:u(E,-.4,0,new M).normalize(),aer:0});return}u(E/R,0,w/R,r.n);let A=(i.vel.x-r.v.x)*r.n.x+(i.vel.z-r.v.z)*r.n.z;i.extForce.addScaledVector(r.n,Math.max(0,Math.min(4500,y*9e3-A*700))),i.extForce.x+=(r.v.x-i.vel.x)*90,i.extForce.z+=(r.v.z-i.vel.z)*90,d=Math.max(d,-A)}d>1.2&&!(this.shipTouch>0)&&(n.impact=Math.max(n.impact,Math.min(2,.6+d*.3)),n.impactPeak=Math.max(n.impactPeak,n.impact),this.impactBlur=Math.max(this.impactBlur,.35),this.emit("impact",{strength:Math.min(2.5,.8+d*.4),dir:r.n.clone(),aer:0})),this.shipTouch=d>0?.4:Math.max(0,(this.shipTouch||0)-t),e.toLocal(i.pos,r.l);let f=pi.halfBeam(Math.max(-89,Math.min(89,r.l.z))),g=Math.abs(r.l.x)-f,b=r.l.x>=0?1:-1;if(r.l.z>-95&&r.l.z<100&&g<20&&r.l.y>-12)if(r.l.z>55){let m=Math.max(0,1-Math.max(0,g)/12)*Math.min(1,(r.l.z-55)/30)*c*Math.min(1,Math.max(0,(Math.abs(r.l.x)-6)/3));u(b,0,.6,r.n).normalize(),i.extForce.addScaledVector(r.n,220*m),i.extForce.y+=110*m}else{let m=Math.max(0,1-Math.max(0,g)/8)*c;u(-b,0,0,r.n),i.extForce.addScaledVector(r.n,190*m*m+35*m),g<5&&(i.extForce.y-=240*(1-Math.max(0,g)/5)*c)}r.l.z>89&&r.l.z<115&&Math.abs(r.l.x)<8&&(u(0,0,1,r.n),i.extForce.addScaledVector(r.n,220*c*(1-(r.l.z-89)/26)));{let m=r.l.x,p=r.l.y+5.5,v=r.l.z+87.5,x=Math.hypot(m,p,v);if(x<26&&r.l.z<-70){let w=(1-x/26)*c;u(-m/x,0,-v/x,r.n),r.n.y=-p/x,i.extForce.addScaledVector(r.n,520*w),x<3.4&&this.killBy("ship")}}}killBy(t){let e=this.survival;e.alive&&(e.alive=!1,e.cause=t,e.blackout=1,e.events.push({type:"dead",cause:t}),this.impactBlur=1,this.player.impact=2.5,this.player.impactPeak=Math.max(this.player.impactPeak,2.5),this.emit("impact",{strength:3,dir:new M(0,-1,0),aer:0}))}shipFrame(t){let e=this.cargo;if(!e.active||!e.loaded||this.state==="title")return;let i=this.camera.position;if(Math.hypot(i.x-e.pos.x,i.z-e.pos.z)>320)return;let n=this._sf||(this._sf={p:new M,q:new M}),s=e.speed/5.5,r=Math.sin(e.yaw),o=Math.cos(e.yaw),h=this.spray,c=h.near;h.near=i.distanceTo(e.pos)<70,this.bowAcc=(this.bowAcc||0)+t*24*s*(1+Math.max(0,-e.heaveV)*.5+Math.max(0,e.pitchV)*8);let u=0;for(;this.bowAcc>=1&&u++<24;){this.bowAcc-=1;let l=80+Math.random()*8.5,d=Math.random()<.5?-1:1,f=pi.halfBeam(l);e.toWorld(n.q.set(d*(f+.2),0,l),n.p);let g=this.waves.heightFast(n.p.x,n.p.z),b=d*o,m=-d*r,p=1.4+Math.random()*3.2,v=1+Math.random()*3;h.emit(n.p.x,g+.05,n.p.z,e.speed*r*.75+b*p,v,e.speed*o*.75+m*p,.6+Math.random()*.7,Math.random()<.3?.03+Math.random()*.04:.012+Math.random()*.02,0,0,.9)}h.near=c}throwOff(){if(!this.aboard)return;let t=this.body,e=this.boat;this.aboard=!1,e.rider=0,e.flipArmed=!1,e.keepYaw=null;let i=(this._tv||(this._tv=new M)).set(0,1,0).applyQuaternion(e.quat);t.vel.addScaledVector(i,2),t.vel.y+=1,t.vel.y>6.5&&(t.vel.y=6.5),t.angVel.copy(e.angVel).multiplyScalar(.9),this.player.control=.04,this.player.impact=Math.max(this.player.impact,1.8),this.player.impactPeak=Math.max(this.player.impactPeak,1.8),this.anim.hold=null,this.acc=0,this.impactBlur=Math.max(this.impactBlur,.6),this.emit("impact",{strength:2.6,dir:i.clone(),aer:e.aer}),this.thrownAt=this.time,this.clingCool=2.5,this.ui&&this.state==="playing"&&this.ui.note(this.isTouch?"\uD5E4\uC5C4 \xB7 \uC785\uC218":"Space \uD5E4\uC5C4 \xB7 F \uC785\uC218",6)}buildEffects(){let t=this.perf.profile;if(this.rain){this.scene.remove(this.rain.group,this.spray.mesh,this.underwater.group);for(let e of[this.rain.group,this.spray.mesh,this.underwater.group])e.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()});this.foam.enabled&&this.foam.rt.forEach(e=>e.dispose()),this.lens.rt.dispose()}this.rain=new Fo(t),this.spray=new ko(this.waves,t.spray),this.foam=new Eo(this.renderer,t.foamAcc),this.underwater=new Do(this.waves,t),this.lens=new Ao(this.renderer,t.lensDrops),this.scene.add(this.rain.group,this.spray.mesh,this.underwater.group),this.post.u.tLens.value=this.lens.texture,this.interaction?this.interaction.spray=this.spray:this.interaction=new To(this.waves,this.body,this.player,this.spray),this.underwater.onEnter=()=>{this.underwater.burstAt(this.camera.position,46,.8),this.impactBlur=Math.max(this.impactBlur,.5),this.emit("camEnter")},this.underwater.onExit=()=>{let e=1-.75*Math.min(1,(this.cam.fpWallK||0)*1.5);this.lens.spawn(Math.round((14+20*(1-this.cam.blend))*e),1),this.lens.sheet=Math.max(this.lens.sheet,e),this.emit("camExit")},this.interaction.onImpact=e=>{let i=Math.min(1,e.strength/3)*(1-.85*Math.min(1,(this.cam.fpWallK||0)*1.5));this.impactBlur=Math.max(this.impactBlur,i),this.underwater.burst=Math.max(this.underwater.burst,i),this.underwater.isUnder||this.lens.spawn(Math.round((6+16*i)*(1.6-this.cam.blend)),1),this.foam.addSplash(this.body.pos.x,this.body.pos.z,1),this.emit("impact",e)},this.interaction.onDuck=e=>{this.emit("duck",e),this.ui&&this.state==="playing"&&(this.duckTold||0)<2&&e.q>.45&&(this.duckTold=(this.duckTold||0)+1,this.ui.note("\uD30C\uB3C4 \uBC11\uC73C\uB85C \uBE60\uC838\uB098\uAC14\uB2E4",2.5))},this.interaction.onSplash=(e,i)=>{!this.underwater.isUnder&&this.cam.blend<.5&&this.lens.spawn(2),this.foam.addSplash(i.x,i.z,Math.min(1,e/4)),this.emit("splash",{v:e,pos:i})}}setQuality(t){this.perf.setProfile(t),Ci.set("quality",t);let e=this.perf.profile;this.ocean.applyProfile(e),this.sky.envRT.setSize(e.envSize,e.envSize/2),this.post.levels=e.bloomLevels,this.buildEffects(),this.resize(!0)}setState(t){this.state=t,this.ui&&this.ui.show(t,{time:this.survival.timeAlive,cause:this.survival.cause})}start(){this.audio.start(),this.resetPlayer(),!this.pendingScenario&&!this.scenarios.active&&this.board(),this.cam.script=null,this.input.enabled=!0,this.pendingScenario?(this.scenarios.run(this.pendingScenario),this.pendingScenario=null):this.scenarios.active||(this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=this.aboard?58:22,this.interaction.megaNext=75+Math.random()*30,this.introWaveAt=this.aboard?this.time+9.5:0),this.isTouch?this.goFullscreen():this.input.lock(),this.setState("playing"),this.scenarios.active||(this.cam.setMode(this.cam.mode),this.cam.cine={mode:"intro",t:0,dur:4.5},this.introStrike=1.3),this.ui&&this.ui.note(this.aboard?`\uBCF4\uD2B8\uAC00 \uD288 \uB54C ${this.isTouch?"\uBD99\uC7A1\uAE30":"Space"} \uAFB9 \u2014 \uAF49 \uBD99\uC7A1\uC544\uB77C`:this.isTouch?"\uD5E4\uC5C4 \xB7 \uC785\uC218":"Space \uD5E4\uC5C4 \xB7 F \uC785\uC218",6),this.last=performance.now()}pause(){this.state==="playing"&&(this.input.enabled=!1,this.audio.suspend(),this.isTouch||this.input.unlock(),this.setState("paused"))}resume(){this.state!=="playing"&&(this.audio.start(),this.audio.resume(),this.input.enabled=!0,this.cam.script=null,this.isTouch||this.input.lock(),this.setState("playing"),this.last=performance.now())}restart(){this.scenarios.stop(),this.weather.locked=!1,this.weather.base=1;for(let t of this.waves.breakers)t.active=!1;this.rescue.reset(240),this.shipAt=55+Math.random()*30,this.shipTold=!1,this.shipPassed=!1,this.otherAt=32+Math.random()*14,this.otherDone=!1,this._otherPending=!1,this.other.hide(),this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=22,this.interaction.megaNext=80+Math.random()*40,this.resetPlayer(),this.board(),this.aboard&&(this.interaction.next=58,this.introWaveAt=this.time+9.5),this.resume(),this.ui&&this.aboard&&this.ui.note(`\uBCF4\uD2B8\uAC00 \uD288 \uB54C ${this.isTouch?"\uBD99\uC7A1\uAE30":"Space"} \uAFB9 \u2014 \uAF49 \uBD99\uC7A1\uC544\uB77C`,6)}resetPlayer(){this.body.reset(this.body.pos.x,this.body.pos.z),this.survival.reset(),this.survival.events.length=0,this.player.brace=0,this.player.air=0,this.player.control=1,this.player.diveBlend=0,this.player.riseBlend=0,this.player.crawlBlend=0,this.player.swimBlend=0,this.player.underSwim=0,this.player.impact=0,this.player.impactPeak=0,this.player.tumble=0,this.player.events.length=0,this.cam.qd.identity(),this.cam.inited=!1,this.deadTimer=0,this.impactBlur=0,this.mouthUnder=!1,this.wonTimer=0,this.duckHints=0,this.duckHintAt=-99,this.duckTold=0,this.player.duckQ=0,this.player.duckT=0,this.player._cdWas=1e9,this.body.duck=0,this.cargo.hide(),this.shipCaught=0,this.shipTouch=0,this.shipPrevZ=void 0,this.lifting=!1,this.liftIn=0,this.anim.force=null,this.cam.cine=null,this.timeScale=1,this.slowLeft=1.4,this.slowWant=1,this.grabNote=0,this.post.u.uFade.value=0,this.post.u.uTunnel.value=0,this.post.u.uDesat.value=0,this.lens.wipe(),this.limbs.reset(),this.aboard=!1,this.anim.hold=null,this.boat.hide(),this.clinging=!1,this.player.cling=!1,this.player.faceDir=null,this.introWave=null,this.introWaveAt=0,this.grip=1,this.slip=0,this.aboardLoose=0,this._slipTold=!1,this.fear=.45,this.gustTold=!1,this.squeeze=!1,this.squeezeK=0,this.runaway=0,this.gustT=6,this.brnd=ui(977),this.player.squeeze=!1,this.thrownAt=-99,this.wasCapsized=!1,this.clingCool=0,this.syncCharacter(1),this.character.group.updateMatrixWorld(!0)}goFullscreen(){try{let t=document.documentElement,e=t.requestFullscreen?t.requestFullscreen():null;e&&e.catch&&e.catch(()=>{})}catch{}}resize(t){let e=window.innerWidth,i=window.innerHeight,n=Math.min(window.devicePixelRatio||1,2);this.renderer.setSize(Math.round(e*n),Math.round(i*n),!1),this.canvas.style.width=e+"px",this.canvas.style.height=i+"px",this.camera.aspect=e/i,this.cam.portrait=ct((1-e/i)/.5),this.camera.updateProjectionMatrix();let[s,r]=this.perf.renderSize(Math.round(e*n),Math.round(i*n));this.post.useOpaque=this.perf.profile.refraction,this.post.fxaa=this.perf.profile.fxaa,this.post.setSize(s,r,t===!0),this.ocean.uniforms.uSceneColor.value=this.post.rtOpaque.texture,this.ocean.uniforms.uSceneDepth.value=this.post.rtOpaque.depthTexture}emit(t,e){for(let i=0;i<this.listeners.length;i++)this.listeners[i](t,e)}syncCharacter(t){let e=this.character.group,i=this.body;e.position.lerpVectors(i.prevPos,i.pos,t),e.quaternion.slerpQuaternions(i.prevQuat,i.quat,t)}step(t){this.time+=t,it.uTime.value=this.time,this.scenarios.update(t),this.weather.update(t),this.waves.update(t),it.uWaveA.value=this.waves.uA,it.uWaveB.value=this.waves.uB,it.uBrkA.value=this.waves.uBrkA,it.uBrkB.value=this.waves.uBrkB,it.uBrkC.value=this.waves.uBrkC,this.body.wind.copy(this.weather.wind),this.body.breathVol=(this.survival.lung-.55)*3.2,this.acc+=t;let e=0;if(this.studio){let y=this.studio,E=this.body;E.pos.set(y.x,y.y,y.z),E.prevPos.copy(E.pos),E.vel.set(0,0,0),E.angVel.set(0,0,0),E.quat.copy(y.quat),E.prevQuat.copy(y.quat),E.relFlow.set(0,0,0),E.relSpeed=0,this.anim.force=y.state,this.anim.forcePhase=y.phase,this.acc=0}if(this.lifting){let y=this.body,E=this.rescue;y.prevPos.copy(y.pos),y.prevQuat.copy(y.quat);let A=E.hangDir,_=this._liftQ||(this._liftQ=new _t),T=this._liftQ2||(this._liftQ2=new _t);_.setFromUnitVectors(this._up||(this._up=new M(0,1,0)),A),T.setFromAxisAngle(this._up,E.ringSpin),_.multiply(T);let I=(this._liftP||(this._liftP=new M)).copy(E.ring).addScaledVector(A,-.2);this.liftIn||((this.liftOff||(this.liftOff=new M)).copy(y.pos).sub(I),(this.liftQ0||(this.liftQ0=new _t)).copy(y.quat),this.liftOff.length()>2&&this.liftOff.setLength(2)),this.liftIn=Math.min(1,(this.liftIn||0)+t/1.1);let G=this.liftIn*this.liftIn*(3-2*this.liftIn);y.pos.copy(I).addScaledVector(this.liftOff,1-G),y.quat.copy(this.liftQ0).slerp(_,G),y.vel.copy(E.vel),y.angVel.set(0,0,0),y.subFrac=Math.max(0,Math.min(1,(this.waves.heightFast(y.pos.x,y.pos.z)-y.pos.y+.6)/1.5)),y.mouthDepth=-2,y.eyeDepth=-2,y.relSpeed=0,y.dragG=0,this.anim.force="hang",this.acc=0}{let y=this.boat;y.tow.set(0,0,0);let E=this.time-(this.thrownAt||-99);if(y.active&&!this.aboard&&E<16){let _=this.body.pos.x-y.pos.x,T=this.body.pos.z-y.pos.z,I=Math.hypot(_,T)+.001;if(I>5.5){let G=((y.vel.x-this.body.vel.x)*_+(y.vel.z-this.body.vel.z)*T)/I,q=Math.max(0,Math.min(3200,(I-5.5)*420-G*700))*Math.min(1,(16-E)/4);y.tow.set(_/I*q,0,T/I*q)}}if(this.gustPull=0,y.active&&this.clinging){let _=ct((this.weather.gust-1.12)/.18);if(_>0){let T=this.weather.wind,I=Math.hypot(T.x,T.z)||1,G=1900*_*_;y.tow.x+=T.x/I*G,y.tow.z+=T.z/I*G}this.gustPull=_,_>.45&&!this.gustTold&&this.ui&&this.state==="playing"&&(this.gustTold=!0,this.ui.note(`\uB3CC\uD48D\uC774 \uBCF4\uD2B8\uB97C \uC7A1\uC544\uCC48\uB2E4 \u2014 ${this.isTouch?"\uD5E4\uC5C4":"Space"} \uAFB9`,3.5))}if(y.active&&!this.aboard&&!this.clinging&&E>=16&&this.state==="playing"&&(this.gustT=(this.gustT===void 0?6:this.gustT)-t,this.gustT<=0&&(this.gustT=6+9*this.brnd(),this.runaway<=0&&this.brnd()<.5&&this.startRunaway())),this.runaway>0&&y.active)if(this.runaway-=t,this.clinging||this.aboard)this.runaway=0;else{let _=Math.min(1,this.runaway/1.5)*1100;y.tow.x+=this.runDir.x*_,y.tow.z+=this.runDir.z*_,this.runNote-=t,this.runNote<=0&&this.runNote>-1&&this.ui&&y.pos.distanceTo(this.body.pos)>7&&(this.runNote=-2,this.ui.note("\uBCF4\uD2B8\uAC00 \uB5A0\uBC00\uB824 \uAC04\uB2E4",3),this.boatNote=6)}y.active&&!this.aboard&&y.pos.distanceToSquared(this.body.pos)>150*150&&y.hide(),y.wind.copy(this.weather.wind),this.bacc+=t;let A=0;for(;y.active&&this.bacc>=Ki&&A<8;)y.step(Ki),this.bacc-=Ki,A++;if((A===8||!y.active)&&(this.bacc=0),y.sync(this.bacc/Ki),this.aboard){if(this.washT=this.body.mouthDepth>.05?this.washT+t:0,y.flipping>0&&(y.upY<.4||y.sitUp<.5)||y.upY<.1||y.angVel.length()>3.4||this.washT>1.3||!y.active||this.lifting)this.throwOff();else if(this.pinToBoat(!1,t),this.anim.hold="aboard",this.acc=0,this.state==="playing"&&this.survival.timeAlive>5.5){let _=this.input.enabled&&this.input.swim(),T=this.rid;this.squeeze=_,this.grip=Math.max(0,Math.min(1,this.grip+(_?-.15:.075)*t));let I=ct((T.d.length()-3.2)/5)+.8*ct(T.p.y/.1),G=_&&this.grip>.03;this.slip=Math.max(0,(this.slip||0)+(G?-1.4:I*.8+.085)*t),this.aboardLoose=(this.aboardLoose||0)+((G?0:Math.min(1,this.slip*1.6))-(this.aboardLoose||0))*(1-Math.exp(-t*8)),this.slip>.45&&!this._slipTold&&this.ui&&(this._slipTold=!0,this.ui.note(`\uC190\uC774 \uD480\uB9B0\uB2E4 \u2014 ${this.isTouch?"\uBD99\uC7A1\uAE30":"Space"} \uAFB9`,3)),this.slip>1&&(this.throwOff(),y.flipArmed=y.upY>.3,this.ui&&this.ui.note("\uBCF4\uD2B8\uC5D0\uC11C \uB5A8\uC5B4\uC84C\uB2E4",3))}}}this.introWaveAt&&this.time>=this.introWaveAt&&(this.introWaveAt=0,this.boat.active&&this.state==="playing"&&this.launchIntroWave(10.5));{let y=this.introWave,E=this.boat;if(y&&y.active&&(this.aboard||E.flipArmed)&&y.age<y.tBreak){let A=(E.pos.x-y.ox)*y.dx+(E.pos.z-y.oz)*y.dz-y.s;if(A>3){let _=Math.max(5,y.speed-(E.vel.x*y.dx+E.vel.z*y.dz));y.tBreak+=(y.age+A/_+.15-y.tBreak)*(1-Math.exp(-t*2.5))}}else y&&!y.active&&(this.introWave=null)}for(;!this.studio&&!this.lifting&&!this.aboard&&this.acc>=Ki&&e<8;)this.player.fixedUpdate(Ki),this.contactBoat(Ki),this.contactShip(Ki),this.body.step(Ki),this.acc-=Ki,e++;e===8&&(this.acc=0),this.mouthUnder=this.mouthUnder?this.body.mouthDepth>-.015:this.body.mouthDepth>.03;let i=this.survival;this.state!=="title"&&this.state!=="won"&&!this.lifting&&i.update(t,{mouthUnder:this.mouthUnder,effort:this.player.effort,turb:this.body.turb,subFrac:this.body.subFrac,storm:this.weather.storm,sudden:this.player.impact>.8,brace:Math.max(this.player.brace,this.player.diveHeld?1:0)}),this.syncCharacter(this.acc/Ki);{let y=this.anim.reach,E=this.boat,A=0;if(this.aboard&&E.loaded)A=1,this.boatPoint(.875,.4,.22,y[0].pos),this.boatPoint(.47,.55,.58,y[1].pos),this._looseHand=this.aboardLoose>.35;else if(this.clinging&&E.loaded){A=1,this.anim.hold="cling";let _=this.clingZ,T=this.clingSide,I=an(_),G=this.boatPoint(T*I,Qa(_),_,this._rg||(this._rg=new M)),q=(this._ro||(this._ro=new M)).set(this.character.group.position.x-G.x,0,this.character.group.position.z-G.z);q.lengthSq()<1e-4&&q.set(T,0,0).applyQuaternion(E.group.quaternion),q.y=0,q.normalize();let U=q.z,z=-q.x;for(let J=0;J<2;J++){let V=J===0?.21:-.21;y[J].pos.set(G.x+U*V+q.x*.115,G.y+.165,G.z+z*V+q.z*.115)}}else if(this.lifting){A=Math.min(1,(this.liftIn||0)*1.6);let _=this.character.group,T=this.rescue.ringR,I=this.rescue.ringT,G=.01*Math.sin(this.time*2.3),q=.2;for(let z=0;z<2;z++){let J=z===0?1:-1,V=z===0?.8:.92,H=T+I*.72;y[z].pos.set(J*Math.cos(V)*H,q+I*.55+(z===0?G:-G),Math.sin(V)*H).applyQuaternion(_.quaternion).add(_.position),y[z].pole||(y[z].pole=new M),y[z].pole.set(J*(T+I+.1),q+I+.07,-.02).applyQuaternion(_.quaternion).add(_.position),y[z].usePole=!0}let U=Math.max(0,1-this.rescue.liftT/7);for(this.dripAcc=(this.dripAcc||0)+t*46*U*U;this.dripAcc>=1;){this.dripAcc-=1;let z=Math.random()<.6,J=(Math.random()-.5)*.3,V=z?-.86-Math.random()*.08:-.1-Math.random()*.5,H=(Math.random()-.5)*.2,N=(this._dp||(this._dp=new M)).set(J,V,H).applyQuaternion(_.quaternion).add(_.position),P=this.rescue.vel;this.spray.emit(N.x,N.y,N.z,P.x+(Math.random()-.5)*.5,P.y-.4-Math.random()*.8,P.z+(Math.random()-.5)*.5,.9+Math.random()*.5,.01+Math.random()*.014,0,0,.9)}}else this.anim.hold==="cling"&&(this.anim.hold=null);if(this.lifting||(y[0].usePole=!1,y[1].usePole=!1),y[0].on=A,y[1].on=A&&this.aboard&&this._looseHand?.15:A,this.character.glb&&this.character.glb.setGrip){let _=y[0].w>.5?1:0;this.character.glb.setGrip(_,_)}}if(this.anim.update(t),this.character.retarget(),this.character.group.updateMatrixWorld(!0),this.body.syncLimbs(this.character),this.boatFrame(t),this.shipFrame(t),this.state==="title")this.interaction.next=Math.max(this.interaction.next,8),this.interaction.megaNext=Math.max(this.interaction.megaNext,40),this.cam.script||(this.cam.script={yaw:-Math.PI/2,pitch:-.07}),this.cam.blend=1,this.cam.orbit=this.time*.11;else if(this.cam.orbit!==0&&!this.keepOrbit){let y=((this.cam.orbit+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;this.cam.orbit=Math.abs(y)<.01?0:y*Math.exp(-t*3)}{let y=this.cam.interest,E=this.interaction,A=this.body;if(E.crestDist<130&&E.crestDist>6&&E.crestHeight>4)y.x=A.pos.x-E.crestDx*60,y.z=A.pos.z-E.crestDz*60,y.w=ct(E.crestHeight/10)*ct(1.2-E.crestDist/130);else if(this.other.active&&(this.other.survival.alive||this.time-this.otherSeenAt<40)&&Math.hypot(this.other.pos.x-A.pos.x,this.other.pos.z-A.pos.z)<90)y.x=this.other.pos.x,y.z=this.other.pos.z,y.w=.7;else if(this.cargo.active&&(this.cargo.phase==="coming"||this.cargo.phase==="passing")&&Math.hypot(this.cargo.pos.x-A.pos.x,this.cargo.pos.z-A.pos.z)<480){let _=this.cargo.soundPoints(this._shipSnd||(this._shipSnd={}));y.x=_.bow.x,y.z=_.bow.z,y.w=.5}else if(this.boat.active&&!this.aboard&&this.time-(this.thrownAt||-99)<9)y.x=this.boat.pos.x,y.z=this.boat.pos.z,y.w=.75;else if(this.rescue.state==="hover"||this.rescue.state==="inbound"){let _=this.rescue.state==="hover"?this.rescue.ring:this.rescue.pos;y.x=_.x,y.z=_.z,y.w=.6}else y.w=0;this.cam.fpWatch=this.other.active&&this.other.survival.drown<.75&&Math.hypot(this.other.pos.x-A.pos.x,this.other.pos.z-A.pos.z)<45?.85:0,this.cam.oxygen=this.survival.alive?this.survival.oxygen:100,this.cam.shiver=this.survival.shiver,this.cam.closeK=Math.max(ct(this.survival.drown/.08),this.survival.alive?this.survival.spentK:this.survival.cause==="drown"?1:0),this.cam.vistaOk=this.state==="playing"&&this.survival.alive&&!this.aboard&&!this.clinging&&!this.lifting&&this.rescue.state==="none"&&!this.cargo.active&&E.threat<.2&&!this.cam.cine&&this.survival.drown<.02&&!this.survival.spent&&this.body.eyeDepth<.2&&!this.scenarios.active}this.cam.armAdd=(this.cam.armAdd||0)+((this.aboard||this.time-(this.thrownAt||-99)<4?1.5:0)-(this.cam.armAdd||0))*(1-Math.exp(-t*1.2)),this.cam.holdAbove=!this.aboard&&this.time-(this.thrownAt||-99)<6.5,this.cam.fpLift=(this.cam.fpLift||0)+((this.aboard?.27:0)-(this.cam.fpLift||0))*(1-Math.exp(-t*(this.aboard?3:9))),this.cam.update(t);let n=this.camera.position,s=this.weather.wind,r=this.weather.storm;this.mouthWorld.copy(this.body._mouth).applyQuaternion(this.character.group.quaternion).add(this.character.group.position),this.underwater.update(t,this.camera,this.cam.surfaceAtCam,this.body,this.player,i,this.post,this.weather,this.mouthWorld,this.post.h),this.camUnder=this.underwater.under;let o=i.events;for(let y=0;y<o.length;y++){let E=o[y];E.type==="submerge"&&this.underwater.burstAt(this.mouthWorld,34,.45),E.type==="surface"&&(this.player.recover=2+4*E.need),E.type==="drown"&&(this.underwater.burstAt(this.mouthWorld,E.phase==="convulse"?64:40,E.phase==="convulse"?.9:.45),this.impactBlur=Math.max(this.impactBlur,E.phase==="convulse"?.5:.2)),E.type==="spent"&&this.ui&&this.state==="playing"&&!this.aboard&&!this.lifting&&this.ui.note("\uD798\uC774 \uB2E4 \uBE60\uC84C\uB2E4 \u2014 \uBAB8\uC774 \uAC00\uB77C\uC549\uB294\uB2E4",3.5),E.type==="winded"&&this.ui&&this.state==="playing"&&!this.aboard&&!this.lifting&&!this.scenarios.active&&this.ui.note("\uC228\uC774 \uCC28\uB2E4 \u2014 \uD5E4\uC5C4\uC744 \uBA48\uCD94\uACE0 \uB5A0 \uC788\uC73C\uBA74 \uCCB4\uB825\uC774 \uB3CC\uC544\uC628\uB2E4",5),this.emit(E.type,E)}o.length=0,i.alive&&i.drown>.3&&i.drown<.72&&(this._drT=(this._drT||0)-t,this._drT<=0&&(this._drT=.26+Math.random()*.42,this.underwater.burstAt(this.mouthWorld,Math.round(9+Math.random()*18),.6),this.audio.gurgle&&this.audio.gurgle(.9+.7*Math.random()))),this.introStrike>0&&(this.introStrike-=t,this.introStrike<=0&&this.lightning.strike(n,{azimuth:this.cam.yaw+.5,dist:1500,sheet:0,power:1.4})),!this.otherDone&&this.other.ready&&this.state==="playing"&&!this.scenarios.active&&i.alive&&!this.aboard&&!this.lifting&&!this.clinging&&this.rescue.state==="none"&&!this.cargo.active&&i.timeAlive>=this.otherAt&&!(this.interaction.crestDist<80&&this.interaction.crestHeight>5)&&this.spawnOther(!1),this.other.active&&this.other.update(t,this.body.pos.x,this.body.pos.z,this.weather.wind,this.spray,this.weather.storm),this.lightning.update(t,n,r>.3?.3+.9*r:0,this.autoLightning),this.interaction.update(t,n,this.camUnder,s);let h=this.interaction.crestDist,c=this.interaction.crestHeight,u=c>18?60:30,l=i.alive&&h>-2&&h<u&&c>5?ct(1-h/u)*ct(c/9):0;this.player.brace+=(l-this.player.brace)*(1-Math.exp(-t*5)),i.alive&&this.state==="playing"&&this.ui&&(this.duckHints||0)<2&&h>28&&h<50&&(this.interaction.crestHMax||0)>=9&&!this.aboard&&!this.clinging&&!this.lifting&&this.time-(this.duckHintAt||-99)>25&&(this.duckHintAt=this.time,this.duckHints=(this.duckHints||0)+1,this.ui.note(this.isTouch?"\uD070 \uD30C\uB3C4 \u2014 \uB36E\uCE58\uAE30 1~2\uCD08 \uC804 \uC785\uC218 \uAFB9, \uD30C\uB3C4 \uBC11\uC73C\uB85C":"\uD070 \uD30C\uB3C4 \u2014 \uB36E\uCE58\uAE30 1~2\uCD08 \uC804 F \uAFB9, \uD30C\uB3C4 \uBC11\uC73C\uB85C",3.5)),this.player.bigLook=(this.cam.bigK||0)*(this.cam.waveK||0)*(this.interaction.crestDist>1?1:0),this.player.crestDist=h,this.player.crestHMax=this.interaction.crestHMax||0,this.player.crestMega=!!this.interaction.crestMega,this.player.crestSpeed=this.interaction.crestSpeed||14,this.cam.threat=this.interaction.threat,this.cam.crestDist=h,this.cam.crestHeight=c,this.cam.crestHMax=this.interaction.crestHMax||0,this.cam.crestDx=this.interaction.crestDx||0,this.cam.crestDz=this.interaction.crestDz||0;let d=this.rescue,f=d.state==="hover",g=this.input.enabled&&this.player.swimHeld;d.update(t,this.body.pos,s,i.timeAlive,i.alive,this.spray,this.state==="playing",this.camera.position,g);{let y=this.cargo,E=this.body;if(!y.active&&y.loaded&&this.state==="playing"&&!this.scenarios.active&&i.alive&&!this.aboard&&!this.lifting&&d.state==="none"&&this.shipAt&&i.timeAlive>=this.shipAt&&(this.shipAt=0,y.start(E.pos)),y.update(t,this.camera,it.uResolution.value.y,E.pos,this.player.moveAmt),y.keepOutside(this.camera.position,this.cam.pivot),y.active){let A=y.soundPoints(this._shipSnd||(this._shipSnd={}));for(let T of y.events)T.type==="horn"&&this.emit("shipHorn",{long:T.long,pos:A.horn});let _=Math.hypot(E.pos.x-y.pos.x,E.pos.z-y.pos.z);!this.shipTold&&_<340&&y.phase==="coming"&&this.ui&&this.state==="playing"&&i.alive&&(this.shipTold=!0,this.ui.note("\uD654\uBB3C\uC120\uC774 \uC774\uCABD\uC73C\uB85C \uC628\uB2E4 \u2014 \uC606\uC73C\uB85C \uD5E4\uC5C4\uCCD0 \uBC43\uAE38\uC5D0\uC11C \uBC97\uC5B4\uB098\uB77C",7)),y.phase==="going"&&!this.shipPassed&&i.alive&&(this.shipPassed=!0,d.arriveAt=Math.min(d.arriveAt,i.timeAlive+30)),d.state==="none"&&y.beamFrom&&(it.uSpotPos.value.copy(y.beamFrom),it.uSpotDir.value.copy(y.beamAxis),it.uSpotP.value.set(Math.cos(Math.atan(y.beamTan)),.8,55,0)),this.shipSnd={on:!0,engine:A.engine,bow:A.bow,prop:A.prop,speedK:y.speed/5.5,propDist:A.prop.distanceTo(this.camera.position)}}else this.shipSnd=null;y.events.length=0}this.player.grab=d.state==="hover"&&d.gripping?d.ring:null;let b=this.isTouch?"\uD5E4\uC5C4":"Space";this.ui&&this.state==="playing"&&(!f&&d.state==="hover"&&this.ui.note(`\uAD6C\uC870 \uD5EC\uAE30 \u2014 \uD29C\uBE0C\uAE4C\uC9C0 \uAC00\uC11C ${b}\uB97C \uAFB9 \uB20C\uB7EC \uBD99\uC7A1\uC544\uB77C`,8),this.grabNote-=t,d.slipped?(d.slipped=!1,this.ui.note("\uB193\uCCE4\uB2E4",2.5),this.grabNote=3):d.reach&&!d.gripping&&this.grabNote<=0&&(this.ui.note(`${b}\uB97C \uAFB9 \uB20C\uB7EC \uBD99\uC7A1\uC544\uB77C`,2.5),this.grabNote=4)),d.state==="lift"&&!this.lifting&&(this.lifting=!0,this.input.enabled=!1,this.interaction.auto=!1,this.autoLightning=!0,this.cam.setMode("third"),this.cam.cine={mode:"lift",t:0,yaw0:this.cam.yaw},this.emit("surface",{need:1,time:6})),d.rescued&&this.state==="playing"&&(this.wonTimer+=t,this.post.u.uFade.value=Math.max(0,Math.min(.9,(this.wonTimer-9.5)/2.2)),this.wonTimer>11.5&&!this.manual&&(this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("won")));{let y=!!this.cam.cine||this.lifting;y!==!!this.cineOn&&(this.cineOn=y,this.ui&&this.ui.cine(y))}{let y=this.interaction,E=i.alive&&!this.lifting&&(this.player.brace>.7&&y.crestDist<7&&y.crestDist>-2&&y.crestHeight>7||this.player.air>.6),A=this.realDt||t;E&&this.slowLeft>0?(this.slowWant=.42,this.slowLeft-=A):(this.slowWant=1,E||(this.slowLeft=Math.min(1.4,this.slowLeft+A*.2)))}let m=this.body.subFrac<.05&&this.body.pos.y-this.body.surfaceH>1?1:0;this.player.air+=(m-this.player.air)*(1-Math.exp(-t*(m?10:4)));{let y=this.mouthUnder&&i.alive&&!this.aboard;if(y&&!this._washWas&&(this._washPend=(this.clearFor||0)>.45&&!this.player.diveHeld&&this.body.mouthDepth<.7&&this.state==="playing",this._washLive=!1,this._washT=0),y&&(this._washT=(this._washT||0)+t,this._washPend&&this._washT>=(this.player.crawlBlend>.5?.32:0)&&(this._washPend=!1,this._washLive=!0,this.washAt=this.time,this.anim.flinch=this.player.crawlBlend>.5?.6:1,this.anim.flinchSide=Math.random()<.5?-1:1,this.time-(this.gulpAt||-9)>2.5&&Math.random()<(i.inhaling?.8:.3)&&(this.gulpAt=this.time,i.swallow=Math.min(1,i.swallow+.25),i.oxygen=Math.max(0,i.oxygen-3),this._gulped=!0),this.audio.gurgle(.9),this.cam.blend<.5&&!((this.cam.fpWallK||0)>.15)&&(this.body.eyeDepth-(this.cam.fpLiftW||0)>-.02&&(this.lens.sheet=Math.max(this.lens.sheet,.5)),this.impactBlur=Math.max(this.impactBlur,.22)))),!y&&this._washWas&&this._washLive&&this.time-(this.washAt||-9)<3&&i.alive&&this.state==="playing"){let E=this.mouthWorld,A=this.player.heading;for(let _=0;_<9;_++)this.spray.emit(E.x+A.x*.06,E.y,E.z+A.z*.06,A.x*(1.2+Math.random()*1.6)+(Math.random()-.5)*.8,.4+Math.random()*1.1,A.z*(1.2+Math.random()*1.6)+(Math.random()-.5)*.8,.3+Math.random()*.3,.008+Math.random()*.012,0,0,.95);this.voiceDir.say(this._gulped?"cough":"sputter",5,.95,this.vst),this._gulped&&(this.coughSeq=Math.max(this.coughSeq,2.2),this.coughT=.25),this._gulped=!1,this.cam.blend<.5&&this.lens.spawn(12,1)}this.clearFor=y?0:(this.clearFor||0)+t,this._washWas=y}{let y=this.time-(this.thrownAt||-99),E=i.alive?Math.min(1,.4+.4*this.interaction.threat+.25*ct((72-i.oxygen)/50)+.22*i.swallow+.2*ct(this.player.impact)+(this.mouthUnder?.18:0)+.3*ct(1-y/14)+.18*ct((40-i.stamina)/40)+(this.aboard?.3*ct(this.rid.d.length()/9):0)):0;this.fear=(this.fear||0)+(E-(this.fear||0))*(1-Math.exp(-t*(E>(this.fear||0)?4:.4))),this.player.fear=this.state==="title"?.3:this.fear,this.cam.shiver=Math.max(this.cam.shiver||0,1.5*Math.max(0,this.fear-.5))}let p=this.vst;p.alive=i.alive,p.blackout=i.blackout,p.mouthUnder=this.mouthUnder,p.under=this.mouthUnder,p.camUnder=this.underwater.isUnder,p.oxygen=i.oxygen,p.impact=this.player.impact,p.brace=this.player.brace,p.crestDist=h,p.crestHeight=c,p.gaspTimer=i.gaspTimer,p.inhaling=i.inhaling,p.breathPhase=i.breathPhase,p.stamina=i.stamina,p.effort=this.player.effort,p.temp=i.temp,p.swallow=i.swallow,p.air=this.player.air,p.exertion=i.exertion,p.struggle=this.anim.w.struggle,p.drown=i.drown||0,p.dive=this.player.diveHeld,p.tumble=this.player.tumble,p.turb=this.body.turb,p.fear=this.player.fear||0,p.mouthDepth=this.body.mouthDepth,this.coughSeq>0&&(this.coughSeq-=t,this.coughT-=t,this.coughT<=0&&(this.anim.coughKick=1,this.coughT=.42+Math.random()*.2,this.cam.blend<.5&&i.alive&&(this.impactBlur=Math.max(this.impactBlur,.14)))),this.face.update(t,p),this.state!=="title"&&this.voiceDir.update(t,p),this.limbs.update(t,this.spray,s,!this.aboard),this.spray.seedCrests(t,n,s,r,Math.min(40,1500*t)*(this.perf.profile.spray/9e3));{let y=this.time-(this.thrownAt||-99);this.spray.thin=y<6?.3:y<10?.3+.7*(y-6)/4:1}this.spray.seedBreakers(t,n,s);{let y=this.camera.matrixWorld.elements;this.spray._rx=y[0],this.spray._rz=y[2]}this.spray.crestCurtain(t,n,s,this.perf.profile.spray/9e3),this.spray.update(t,n,s),this.rain.update(t,this.camera,s,this.weather.rain,this.camUnder,this.post.h);let v=this.post.u;this.impactBlur=Math.max(0,this.impactBlur-t*.9),v.uBlur.value=this.impactBlur*2.6,v.uSheet.value=this.lens.sheet,v.uWhiteout.value=this.interaction.whiteout*(this.time-(this.thrownAt||-99)<10?.3:1)*(1-.6*Math.min(1,this.cam.fpWallK||0)),v.uMotionBlur.value=this.perf.profile.motionBlur?Math.min(.6,this.player.impact*.3+this.player.tumble*.5):0;{let y=Math.max(ct((40-i.oxygen)/40),ct((34.2-i.temp)/2.2),i.blackout)*(i.alive?1:0);this.pulseT=(this.pulseT||0)+t*(1.5+1.2*y);let E=Math.pow(Math.max(0,Math.sin(this.pulseT*Math.PI*2)),8);v.uTunnel.value=i.blackout,this.lidK=0}v.uDesat.value=.35*i.blackout+.18*ct((35.5-i.temp)/3),this.state==="title"?(v.uDofAmount.value=1.6,v.uDofFocus.value=this.cam.arm):v.uDofAmount.value=0,i.alive&&!this.lifting&&!this.rescue.rescued&&(v.uFade.value=this.lidK||0),i.alive||(this.deadTimer===0&&!this.manual&&(this.cam.cine={mode:"death",t:0}),this.deadTimer+=t,v.uFade.value=Math.min(.82,this.deadTimer/4),this.deadTimer>4&&this.state==="playing"&&!this.manual&&(this.input.enabled=!1,this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("dead"))),this.ui&&this.state==="playing"&&(this.ui.setBars(i.oxygen/100,i.stamina/100,(i.temp-31.5)/5.5,this.clinging||this.aboard?Math.max(.02,this.grip):this.rescue.hold/this.rescue.holdNeed),this.ui.setMode(this.aboard?"boat":this.clinging?"cling":"swim"));let x=it.uFlash.value;this.flashLight.intensity=x*3.2,this.flashLight.position.copy(this.character.group.position).addScaledVector(it.uFlashDir.value,50),this.flashLight.target.position.copy(this.character.group.position),this.keyLight.position.copy(this.character.group.position).addScaledVector(it.uGlowDir.value,50),this.keyLight.target.position.copy(this.character.group.position),this.character.material.envMapIntensity=(this.studioLight?4.5:this.character.glb?1.25:1.7)+x*2,this.boat.material&&(this.boat.material.envMapIntensity=(this.studioLight?4:.6)+x*1.4),this.keyLight.intensity=this.studioLight?2.2:.42,this.ocean.update(this.camera,t),this.ocean.uniforms.uPlayerPos.value.copy(this.character.group.position),this.ocean.uniforms.uBoatOn.value=this.boat.active&&this.boat.loaded?1:0;{let y=this.boat,A=y.active&&y.loaded?Math.min(1,.12+.15*Math.max(0,y.relSpeed-.3)+.4*(this.boatSlamK||0)+(y.flipping>0?.5:0))*Math.min(1,y.subFrac*6):0;this.boatFoamK=(this.boatFoamK||0)+(A-(this.boatFoamK||0))*(1-Math.exp(-t*(A>(this.boatFoamK||0)?9:2.2))),this.boatSlamK=Math.max(0,(this.boatSlamK||0)-t*1.6),this.ocean.uniforms.uBoatFoam.value=this.boatFoamK}this.boat.active&&this.boat.loaded&&this.ocean.uniforms.uBoatInv.value.copy(this.boat.holder.children[0].matrixWorld).invert(),this.ocean.uniforms.uShipOn.value=this.cargo.active&&this.cargo.loaded?1:0,this.ocean.uniforms.uShipFoam.value=this.cargo.active?this.cargo.speed/5.5:0,this.cargo.active&&this.cargo.loaded&&(this.cargo.group.updateMatrixWorld(!0),this.ocean.uniforms.uShipInv.value.copy(this.cargo.group.matrixWorld).invert()),this.ocean.uniforms.uPlayerFoam.value=(.06+this.anim.splashiness*.12+this.limbs.activity*.18)*Math.min(1,this.body.subFrac*3)*(this.body.eyeDepth<.25?1:0);{let y=this.ocean.uniforms,E=y.uBody.value,A=this.body.points,_=this._bodyK||(this._bodyK=new Float32Array(11)),T=!this.aboard&&this.state!=="title"&&this.state!=="loading",I=Math.min(1,Math.hypot(this.body.relFlow.x,this.body.relFlow.z)*.35),G=Math.min(1.3,.46+this.anim.splashiness*.35+this.limbs.activity*.7+I*.4),q=[.11,.19,.17,.09,.09,.055,.055,.08,.08,.06,.06];for(let U=0;U<11;U++){let z=A[U],V=(T?Math.max(0,1-Math.max(0,Math.abs(z.depth||0)-z.half)/.2):0)*G*(U>=5?1:.85);_[U]+=(V-_[U])*(1-Math.exp(-t*(V>_[U]?14:3.2))),E[U].set(z.world.x,z.world.z,q[U],_[U])}y.uBodyOn.value=T?1:0,this.bodyFoamK=T?Math.min(.54,.22+this.anim.splashiness*.16+this.limbs.activity*.3+I*.12)*Math.min(1,this.body.subFrac*3)*(this.body.eyeDepth<.6?1:0):0}let w=this.audioState,R=this.camera.matrixWorld.elements;w.cam.fwd.set(-R[8],-R[9],-R[10]),w.cam.up.set(R[4],R[5],R[6]),w.storm=r,w.rain=this.weather.rain,w.squall=this.weather.squall,w.windSpeed=this.weather.windSpeed,w.gust=this.weather.gust,w.windPan=-(s.x*R[0]+s.z*R[2])/Math.max(1,this.weather.windSpeed),w.under=this.underwater.under,w.depth=Math.max(0,this.underwater.depth),w.aeration=this.underwater.aeration,w.threat=this.interaction.threat,w.hot=this.spray.hot,w.oxygen=i.oxygen,w.effort=this.player.effort,this.clinging&&this.strain>.12&&(this.impactBlur=Math.max(this.impactBlur,.1)),w.gustPull=this.gustPull||0,w.fear=this.player.fear||0,w.boatCreak=this.aboard?.35+.5*Math.min(1,this.boat.angVel.length()*.8)+.4*this.rid.slam:this.clinging?.4+.5*Math.min(1,(this.strain||0)*2.5):0,w.ship=this.shipSnd,w.heli=this.rescue.state!=="none"?{on:!0,pos:this.rescue.pos}:null,w.air=this.player.air,w.relSpeed=this.body.relSpeed,w.swellV=this.body.surface.vy,w.alive=i.alive,w.blackout=i.blackout,w.mouthUnder=this.mouthUnder,w.slow=1-(this.timeScale||1),w.swimSplash=Math.max(this.limbs.activity,this.anim.w.swim*.8)*(this.mouthUnder?.3:1),this.audio.update(t,w),this.input.endFrame()}render(t){if(this.sky.updateEnv(),this.envTimer-=t,this.envTimer<=0&&it.uFlash.value<.01){let n=this.pmrem.fromEquirectangular(this.sky.envRT.texture);this.envRT&&this.envRT.dispose(),this.envRT=n,this.scene.environment=n.texture,this.envTimer=9}let e=this.weather.rain*(.9+5*(1-this.cam.blend))*(.6+.4*this.weather.gust)*(1+.35*this.weather.squall*(1-this.cam.blend)),i=Math.max((1-this.cam.blend)*(this.cam.bigK||0)*Math.max(this.cam.waveK||0,this.cam.landK||0)*(this.interaction.crestDist>1?1:0),this.cam.fpWallK||0);if(this.lens.update(t,e*(1-.9*Math.min(1,i*2)),this.underwater.isUnder,this.camera.aspect,Math.min(1,i*2)),this.foam.enabled){let n=this.boat,s=this.foam.u,r=n.active&&n.loaded;if(r){let o=n.group.quaternion,h=2*(o.x*o.z+o.w*o.y),c=1-2*(o.x*o.x+o.y*o.y),u=Math.hypot(h,c)||1;s.uBoat.value.set(n.group.position.x,n.group.position.z,h/u,c/u)}s.uBoatFoam.value=r?Math.max(0,(this.boatFoamK||0)-.22)*1:0}this.foam.update(t,this.camera.position.x,this.camera.position.z,this.character.group.position,this.bodyFoamK||0,this.ocean.uniforms),this.post.render(this.drawScene,this.camera,t,this.time)}renderStill(){this.render(0)}loop(t){requestAnimationFrame(this.loop);let e=Math.max(0,Math.min((t-this.last)/1e3,.1));this.last=t,!this.manual&&(!this._firstDrawn&&(this._lead=(this._lead||0)+1)<=20&&(this._lead===1&&(le.start("first"),El(.05)),this._lead<3||window.__loadLag&&window.__loadLag()>.01)||this.state==="paused"||this.state==="dead"||(this.realDt=e,this.timeScale=(this.timeScale||1)+((this.slowWant||1)-(this.timeScale||1))*(1-Math.exp(-e*9)),this.step(e*this.timeScale),this.render(e),this._firstDrawn||(this._firstDrawn=!0,le.done("first")),this.perf.update(e)&&this.resize()))}};function P1(){let a;try{a=new Ml}catch(e){let i=document.getElementById("fatal");i.style.display="flex",i.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uC2E4\uD589\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 (WebGL2 \uD544\uC694). "+e.message,console.error(e);return}let t=new URLSearchParams(location.search);(t.get("glb")==="0"?Promise.resolve():a.loadCharacter()).then(()=>a.loadBoat()).then(()=>t.get("heli")==="0"?null:a.loadHeli()).then(()=>t.get("cargo")==="0"?null:a.loadCargo()).then(()=>t.get("other")==="0"?null:a.loadOther()).then(()=>yf()).then(()=>{a.warmRescue(),a.onAssets&&a.onAssets(),window.__ocean.ready=!0,El(1)}),window.__ocean={game:a,ready:!1,scenarios:Object.keys(Ui),loadTimes:le.times,advance(e,i=1/60){let n=Math.max(1,Math.round(e/i));for(let s=0;s<n;s++)a.step(i),a.render(i)},scenario(e){return a.scenarios.run(e)},shipPass(e={}){return a.cargo.start(a.body.pos,e),a.cargo.track},cargo(e=60,i=0,n=Math.PI/2,s=0){let r=a.body.pos;return a.cargo.place(r.x+Math.sin(i)*e,r.z+Math.cos(i)*e,n,s),a.cargoInfo},studio(e){let i=new _t;e.prone?i.setFromRotationMatrix(new Rt().makeBasis(new M(0,0,1),new M(-1,0,0),new M(0,-1,0))):i.setFromAxisAngle(new M(0,1,0),-Math.PI/2);let n=a.waves.sample(0,0,{}).h;a.studio={state:e.state,phase:e.phase||0,quat:i,x:0,y:n+14,z:0},a.player.underSwim=e.under?1:0,a.anim.forcePike=e.pike||0,a.weather.base=a.weather.storm=.15,a.weather.locked=!0,a.cam.setMode("third"),a.cam.blend=1,a.cam.yaw=-Math.PI/2,a.cam.pitch=e.pitch!==void 0?e.pitch:-.05,a.cam.orbit=e.orbit||0,a.keepOrbit=!0,a.cam.armOverride=e.arm||2.7,a.cam.inited=!1,a.post.u.uExposureBias.value=1,a.studioLight=!0;for(let s=0;s<4;s++)a.step(.5);return a.render(1/60),a.render(1/60),a.anim.state},set(e){return e.view&&(a.cam.setMode(e.view),e.snap&&(a.cam.blend=a.cam.target)),e.yaw!==void 0&&(a.cam.yaw=e.yaw),e.pitch!==void 0&&(a.cam.pitch=e.pitch),e.orbit!==void 0&&(a.cam.orbit=e.orbit,a.keepOrbit=!0),e.arm!==void 0&&(a.cam.armOverride=e.arm),e.keys!==void 0&&(a.input.virtual=e.keys,a.input.enabled=!0),e.storm!==void 0&&(a.weather.base=e.storm,e.snap&&(a.weather.storm=e.storm)),e.breaker&&a.interaction.launch(e.breaker),e.strike&&a.lightning.strike(a.camera.position,e.strike),!0},info(){let e=a.body,i=a.survival;return{t:+a.time.toFixed(2),state:a.state,size:[a.post.w,a.post.h],profile:a.perf.profile.key,sigH:+a.waves.sigHeight.toFixed(1),pos:[+e.pos.x.toFixed(1),+e.pos.y.toFixed(2),+e.pos.z.toFixed(1)],surf:+e.surfaceH.toFixed(2),mouth:+e.mouthDepth.toFixed(2),sub:+e.subFrac.toFixed(2),ctl:+a.player.control.toFixed(2),imp:+a.player.impact.toFixed(2),anim:a.anim.state,view:a.cam.mode,blend:+a.cam.blend.toFixed(2),camUnder:+a.camUnder.toFixed(2),yaw:+a.cam.yaw.toFixed(2),o2:+i.oxygen.toFixed(0),st:+i.stamina.toFixed(0),temp:+i.temp.toFixed(2),alive:i.alive,flash:+it.uFlash.value.toFixed(2),spray:a.spray.alive,drops:a.lens.count,fps:+a.perf.fps.toFixed(0),rescue:a.rescue.state,hold:+a.rescue.hold.toFixed(1),won:a.rescue.rescued,aboard:a.aboard,cling:!!a.clinging,grip:+(a.grip===void 0?1:a.grip).toFixed(2),runaway:+(a.runaway||0).toFixed(1),near:+(a.nearBoat||99).toFixed(1),boat:a.boat.active?{up:+a.boat.upY.toFixed(2),swamp:+a.boat.swamp.toFixed(2),dist:+a.boat.pos.distanceTo(e.pos).toFixed(1),sub:+a.boat.subFrac.toFixed(2)}:null,face:a.face.label,air:+a.player.air.toFixed(2),swim:a.player.swimHeld,dive:a.player.diveHeld,depth:+Math.max(0,e.mouthDepth).toFixed(2),voice:a.voiceDir.last,voices:a.voiceDir.count,glb:!!a.character.glb}},measure(e){return new Promise(i=>{let n=performance.now(),s=0,r=0,o=n,h=c=>{s++,r=Math.max(r,c-o),o=c,c-n>=e*1e3?i({fps:+(s/((c-n)/1e3)).toFixed(1),worstMs:+r.toFixed(1),scale:a.perf.scale,size:[a.post.w,a.post.h],profile:a.perf.profile.key}):requestAnimationFrame(h)};requestAnimationFrame(h)})}}}P1();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
