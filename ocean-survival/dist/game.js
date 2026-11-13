(()=>{var Ic="160";var Rd=0,Gh=1,Cd=2;var Ru=1,Pd=2,tn=3,gi=0,He=1,Le=2;var vn=0,xn=1,Ms=2,Wh=3,qh=4,Fc=5,nn=100,Ld=101,Id=102,Xh=103,Yh=104,Sa=200,Fd=201,Dc=202,Dd=203,er=204,Zo=205,kd=206,Ud=207,Nd=208,zd=209,Od=210,Bd=211,Hd=212,Vd=213,Gd=214,Wd=0,qd=1,Xd=2,ta=3,Yd=4,jd=5,Kd=6,Qd=7,Cu=0,Zd=1,Jd=2,Hi=0,$d=1,tf=2,ef=3,nf=4,sf=5,rf=6,jh="attached",af="detached",Pu=300,ws=301,Es=302,Jo=303,$o=304,Ta=306,ti=1e3,$e=1001,ir=1002,Ee=1003,ea=1004;var Qs=1005;var ee=1006,kc=1007;var ei=1008;var Ve=1009,of=1010,cf=1011,Uc=1012,Lu=1013,gn=1014,sn=1015,an=1016,Iu=1017,Fu=1018,zn=1020,hf=1021,ue=1023,lf=1024,uf=1025,On=1026,Ss=1027,df=1028,Du=1029,ff=1030,ku=1031,Uu=1033,mo=33776,go=33777,bo=33778,vo=33779,Kh=35840,Qh=35841,Zh=35842,Jh=35843,Nu=36196,$h=37492,tl=37496,el=37808,il=37809,nl=37810,sl=37811,rl=37812,al=37813,ol=37814,cl=37815,hl=37816,ll=37817,ul=37818,dl=37819,fl=37820,pl=37821,xo=36492,ml=36494,gl=36495,pf=36283,bl=36284,vl=36285,xl=36286;var Ts=2300,Hn=2301,yo=2302,yl=2400,_l=2401,Ml=2402,mf=2500;var zu=0,Aa=1,br=2,Ou=3e3,Bn=3001,gf=3200,bf=3201,Bu=0,vf=1,ai="",ve="srgb",Ce="srgb-linear",Nc="display-p3",Ra="display-p3-linear",ia="linear",be="srgb",na="rec709",sa="p3";var ts=7680;var wl=519,xf=512,yf=513,_f=514,Hu=515,Mf=516,wf=517,Ef=518,Sf=519,tc=35044,Wi=35048;var El="300 es",ec=1035,rn=2e3,ra=2001,yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sl=1234567,Zs=Math.PI/180,As=180/Math.PI;function Fi(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[r&255]+Ye[r>>8&255]+Ye[r>>16&255]+Ye[r>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function Fe(r,t,e){return Math.max(t,Math.min(e,r))}function zc(r,t){return(r%t+t)%t}function Tf(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function Af(r,t,e){return r!==t?(e-r)/(t-r):0}function Js(r,t,e){return(1-e)*r+e*t}function Rf(r,t,e,i){return Js(r,t,1-Math.exp(-e*i))}function Cf(r,t=1){return t-Math.abs(zc(r,t*2)-t)}function Pf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Lf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function If(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Ff(r,t){return r+Math.random()*(t-r)}function Df(r){return r*(.5-Math.random())}function kf(r){r!==void 0&&(Sl=r);let t=Sl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Uf(r){return r*Zs}function Nf(r){return r*As}function ic(r){return(r&r-1)===0&&r!==0}function zf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function aa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Of(r,t,e,i,n){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),h=s((t+i)/2),u=a((t+i)/2),l=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":r.set(o*u,c*l,c*d,o*h);break;case"YZY":r.set(c*d,o*u,c*l,o*h);break;case"ZXZ":r.set(c*l,c*d,o*u,o*h);break;case"XZX":r.set(o*u,c*g,c*f,o*h);break;case"YXY":r.set(c*f,o*u,c*g,o*h);break;case"ZYZ":r.set(c*g,c*f,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Bi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function le(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Sn={DEG2RAD:Zs,RAD2DEG:As,generateUUID:Fi,clamp:Fe,euclideanModulo:zc,mapLinear:Tf,inverseLerp:Af,lerp:Js,damp:Rf,pingpong:Cf,smoothstep:Pf,smootherstep:Lf,randInt:If,randFloat:Ff,randFloatSpread:Df,seededRandom:kf,degToRad:Uf,radToDeg:Nf,isPowerOfTwo:ic,ceilPowerOfTwo:zf,floorPowerOfTwo:aa,setQuaternionFromProperEuler:Of,normalize:le,denormalize:Bi},Mt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class r{constructor(t,e,i,n,s,a,o,c,h){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,c,h)}set(t,e,i,n,s,a,o,c,h){let u=this.elements;return u[0]=t,u[1]=n,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],h=i[1],u=i[4],l=i[7],d=i[2],f=i[5],g=i[8],b=n[0],m=n[3],p=n[6],y=n[1],v=n[4],_=n[7],R=n[2],x=n[5],w=n[8];return s[0]=a*b+o*y+c*R,s[3]=a*m+o*v+c*x,s[6]=a*p+o*_+c*w,s[1]=h*b+u*y+l*R,s[4]=h*m+u*v+l*x,s[7]=h*p+u*_+l*w,s[2]=d*b+f*y+g*R,s[5]=d*m+f*v+g*x,s[8]=d*p+f*_+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-i*s*u+i*o*c+n*s*h-n*a*c}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],l=u*a-o*h,d=o*c-u*s,f=h*s-a*c,g=e*l+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=l*b,t[1]=(n*h-u*i)*b,t[2]=(o*i-n*a)*b,t[3]=d*b,t[4]=(u*e-n*c)*b,t[5]=(n*s-o*e)*b,t[6]=f*b,t[7]=(i*c-h*e)*b,t[8]=(a*e-i*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let c=Math.cos(s),h=Math.sin(s);return this.set(i*c,i*h,-i*(c*a+h*o)+a+t,-n*h,n*c,-n*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(_o.makeScale(t,e)),this}rotate(t){return this.premultiply(_o.makeRotation(-t)),this}translate(t,e){return this.premultiply(_o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_o=new $t;function Vu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function nr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Bf(){let r=nr("canvas");return r.style.display="block",r}var Tl={};function $s(r){r in Tl||(Tl[r]=!0,console.warn(r))}var Al=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rl=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sr={[Ce]:{transfer:ia,primaries:na,toReference:r=>r,fromReference:r=>r},[ve]:{transfer:be,primaries:na,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ra]:{transfer:ia,primaries:sa,toReference:r=>r.applyMatrix3(Rl),fromReference:r=>r.applyMatrix3(Al)},[Nc]:{transfer:be,primaries:sa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Rl),fromReference:r=>r.applyMatrix3(Al).convertLinearToSRGB()}},Hf=new Set([Ce,Ra]),ae={enabled:!0,_workingColorSpace:Ce,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Hf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let i=Sr[t].toReference,n=Sr[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Sr[r].primaries},getTransfer:function(r){return r===ai?ia:Sr[r].transfer}};function ys(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Mo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var es,oa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=nr("canvas")),es.width=t.width,es.height=t.height;let i=es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=nr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=ys(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ys(e[i]/255)*255):e[i]=ys(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vf=0,ca=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Fi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(wo(n[a].image)):s.push(wo(n[a]))}else s=wo(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function wo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?oa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gf=0,We=class r extends yn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=$e,n=$e,s=ee,a=ei,o=ue,c=Ve,h=r.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Fi(),this.name="",this.source=new ca(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:($s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Bn?ve:ai),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ti:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ti:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ve?Bn:Ou}set encoding(t){$s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Bn?ve:ai}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Pu;We.DEFAULT_ANISOTROPY=1;var ne=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,c=t.elements,h=c[0],u=c[4],l=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(l-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(l+b)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(h+1)/2,_=(f+1)/2,R=(p+1)/2,x=(u+d)/4,w=(l+b)/4,A=(g+m)/4;return v>_&&v>R?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=x/i,s=w/i):_>R?_<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=x/n,s=A/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=w/s,n=A/s),this.set(i,n,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(l-b)*(l-b)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(l-b)/y,this.z=(d-u)/y,this.w=Math.acos((h+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nc=class extends yn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&($s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Bn?ve:ai),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ee,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new We(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ca(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ye=class extends nc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ha=class extends We{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sc=class extends We{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xt=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let c=i[n+0],h=i[n+1],u=i[n+2],l=i[n+3],d=s[a+0],f=s[a+1],g=s[a+2],b=s[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=l;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=b;return}if(l!==b||c!==d||h!==f||u!==g){let m=1-o,p=c*d+h*f+u*g+l*b,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let R=Math.sqrt(v),x=Math.atan2(R,p*y);m=Math.sin(m*x)/R,o=Math.sin(o*x)/R}let _=o*y;if(c=c*m+d*_,h=h*m+f*_,u=u*m+g*_,l=l*m+b*_,m===1-o){let R=1/Math.sqrt(c*c+h*h+u*u+l*l);c*=R,h*=R,u*=R,l*=R}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=l}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],c=i[n+1],h=i[n+2],u=i[n+3],l=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+u*l+c*f-h*d,t[e+1]=c*g+u*d+h*l-o*f,t[e+2]=h*g+u*f+o*d-c*l,t[e+3]=u*g-o*l-c*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(i/2),u=o(n/2),l=o(s/2),d=c(i/2),f=c(n/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*l+h*f*g,this._y=h*f*l-d*u*g,this._z=h*u*g+d*f*l,this._w=h*u*l-d*f*g;break;case"YXZ":this._x=d*u*l+h*f*g,this._y=h*f*l-d*u*g,this._z=h*u*g-d*f*l,this._w=h*u*l+d*f*g;break;case"ZXY":this._x=d*u*l-h*f*g,this._y=h*f*l+d*u*g,this._z=h*u*g+d*f*l,this._w=h*u*l-d*f*g;break;case"ZYX":this._x=d*u*l-h*f*g,this._y=h*f*l+d*u*g,this._z=h*u*g-d*f*l,this._w=h*u*l+d*f*g;break;case"YZX":this._x=d*u*l+h*f*g,this._y=h*f*l+d*u*g,this._z=h*u*g-d*f*l,this._w=h*u*l-d*f*g;break;case"XZY":this._x=d*u*l-h*f*g,this._y=h*f*l-d*u*g,this._z=h*u*g+d*f*l,this._w=h*u*l+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],l=e[10],d=i+o+l;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-h)*f,this._z=(a-n)*f}else if(i>o&&i>l){let f=2*Math.sqrt(1+i-o-l);this._w=(u-c)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+h)/f}else if(o>l){let f=2*Math.sqrt(1+o-i-l);this._w=(s-h)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+l-i-o);this._w=(a-n)/f,this._x=(s+h)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=i*u+a*o+n*h-s*c,this._y=n*u+a*c+s*o-i*h,this._z=s*u+a*h+i*c-n*o,this._w=a*u-i*o-n*c-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let h=Math.sqrt(c),u=Math.atan2(h,o),l=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=a*l+this._w*d,this._x=i*l+this._x*d,this._y=n*l+this._y*d,this._z=s*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*n-o*i),u=2*(o*e-s*n),l=2*(s*i-a*e);return this.x=e+c*h+a*l-o*u,this.y=i+c*u+o*h-s*l,this.z=n+c*l+s*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Eo.copy(this).projectOnVector(t),this.sub(Eo)}reflect(t){return this.sub(Eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eo=new M,Cl=new xt,Ei=class{constructor(t=new M(1/0,1/0,1/0),e=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pi):Pi.fromBufferAttribute(s,a),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tr.copy(i.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Ar.subVectors(this.max,Gs),is.subVectors(t.a,Gs),ns.subVectors(t.b,Gs),ss.subVectors(t.c,Gs),un.subVectors(ns,is),dn.subVectors(ss,ns),In.subVectors(is,ss);let e=[0,-un.z,un.y,0,-dn.z,dn.y,0,-In.z,In.y,un.z,0,-un.x,dn.z,0,-dn.x,In.z,0,-In.x,-un.y,un.x,0,-dn.y,dn.x,0,-In.y,In.x,0];return!So(e,is,ns,ss,Ar)||(e=[1,0,0,0,1,0,0,0,1],!So(e,is,ns,ss,Ar))?!1:(Rr.crossVectors(un,dn),e=[Rr.x,Rr.y,Rr.z],So(e,is,ns,ss,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ji=[new M,new M,new M,new M,new M,new M,new M,new M],Pi=new M,Tr=new Ei,is=new M,ns=new M,ss=new M,un=new M,dn=new M,In=new M,Gs=new M,Ar=new M,Rr=new M,Fn=new M;function So(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Fn.fromArray(r,s);let o=n.x*Math.abs(Fn.x)+n.y*Math.abs(Fn.y)+n.z*Math.abs(Fn.z),c=t.dot(Fn),h=e.dot(Fn),u=i.dot(Fn);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var Wf=new Ei,Ws=new M,To=new M,bi=class{constructor(t=new M,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Wf.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ws,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(To)),this.expandByPoint(Ws.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ki=new M,Ao=new M,Cr=new M,fn=new M,Ro=new M,Pr=new M,Co=new M,Rs=class{constructor(t=new M,e=new M(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,e),Ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ao.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(Ao);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Cr),o=fn.dot(this.direction),c=-fn.dot(Cr),h=fn.lengthSq(),u=Math.abs(1-a*a),l,d,f,g;if(u>0)if(l=a*c-o,d=a*o-c,g=s*u,l>=0)if(d>=-g)if(d<=g){let b=1/u;l*=b,d*=b,f=l*(l+a*d+2*o)+d*(a*l+d+2*c)+h}else d=s,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*c)+h;else d=-s,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*c)+h;else d<=-g?(l=Math.max(0,-(-a*s+o)),d=l>0?-s:Math.min(Math.max(-s,-c),s),f=-l*l+d*(d+2*c)+h):d<=g?(l=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+h):(l=Math.max(0,-(a*s+o)),d=l>0?s:Math.min(Math.max(-s,-c),s),f=-l*l+d*(d+2*c)+h);else d=a>0?-s:s,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,l),n&&n.copy(Ao).addScaledVector(Cr,d),f}intersectSphere(t,e){Ki.subVectors(t.center,this.origin);let i=Ki.dot(this.direction),n=Ki.dot(Ki)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,c,h=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,n=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,n=(t.min.x-d.x)*h),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),l>=0?(o=(t.min.z-d.z)*l,c=(t.max.z-d.z)*l):(o=(t.max.z-d.z)*l,c=(t.min.z-d.z)*l),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,e,i,n,s){Ro.subVectors(e,t),Pr.subVectors(i,t),Co.crossVectors(Ro,Pr);let a=this.direction.dot(Co),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fn.subVectors(this.origin,t);let c=o*this.direction.dot(Pr.crossVectors(fn,Pr));if(c<0)return null;let h=o*this.direction.dot(Ro.cross(fn));if(h<0||c+h>a)return null;let u=-o*fn.dot(Co);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class r{constructor(t,e,i,n,s,a,o,c,h,u,l,d,f,g,b,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,c,h,u,l,d,f,g,b,m)}set(t,e,i,n,s,a,o,c,h,u,l,d,f,g,b,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=u,p[10]=l,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/rs.setFromMatrixColumn(t,0).length(),s=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),h=Math.sin(n),u=Math.cos(s),l=Math.sin(s);if(t.order==="XYZ"){let d=a*u,f=a*l,g=o*u,b=o*l;e[0]=c*u,e[4]=-c*l,e[8]=h,e[1]=f+g*h,e[5]=d-b*h,e[9]=-o*c,e[2]=b-d*h,e[6]=g+f*h,e[10]=a*c}else if(t.order==="YXZ"){let d=c*u,f=c*l,g=h*u,b=h*l;e[0]=d+b*o,e[4]=g*o-f,e[8]=a*h,e[1]=a*l,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=b+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*u,f=c*l,g=h*u,b=h*l;e[0]=d-b*o,e[4]=-a*l,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=b-d*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*u,f=a*l,g=o*u,b=o*l;e[0]=c*u,e[4]=g*h-f,e[8]=d*h+b,e[1]=c*l,e[5]=b*h+d,e[9]=f*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*h,g=o*c,b=o*h;e[0]=c*u,e[4]=b-d*l,e[8]=g*l+f,e[1]=l,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=f*l+g,e[10]=d-b*l}else if(t.order==="XZY"){let d=a*c,f=a*h,g=o*c,b=o*h;e[0]=c*u,e[4]=-l,e[8]=h*u,e[1]=d*l+b,e[5]=a*u,e[9]=f*l-g,e[2]=g*l-f,e[6]=o*u,e[10]=b*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qf,t,Xf)}lookAt(t,e,i){let n=this.elements;return pi.subVectors(t,e),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),pn.crossVectors(i,pi),pn.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),pn.crossVectors(i,pi)),pn.normalize(),Lr.crossVectors(pi,pn),n[0]=pn.x,n[4]=Lr.x,n[8]=pi.x,n[1]=pn.y,n[5]=Lr.y,n[9]=pi.y,n[2]=pn.z,n[6]=Lr.z,n[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],h=i[12],u=i[1],l=i[5],d=i[9],f=i[13],g=i[2],b=i[6],m=i[10],p=i[14],y=i[3],v=i[7],_=i[11],R=i[15],x=n[0],w=n[4],A=n[8],E=n[12],S=n[1],N=n[5],O=n[9],it=n[13],P=n[2],L=n[6],D=n[10],H=n[14],U=n[3],k=n[7],W=n[11],q=n[15];return s[0]=a*x+o*S+c*P+h*U,s[4]=a*w+o*N+c*L+h*k,s[8]=a*A+o*O+c*D+h*W,s[12]=a*E+o*it+c*H+h*q,s[1]=u*x+l*S+d*P+f*U,s[5]=u*w+l*N+d*L+f*k,s[9]=u*A+l*O+d*D+f*W,s[13]=u*E+l*it+d*H+f*q,s[2]=g*x+b*S+m*P+p*U,s[6]=g*w+b*N+m*L+p*k,s[10]=g*A+b*O+m*D+p*W,s[14]=g*E+b*it+m*H+p*q,s[3]=y*x+v*S+_*P+R*U,s[7]=y*w+v*N+_*L+R*k,s[11]=y*A+v*O+_*D+R*W,s[15]=y*E+v*it+_*H+R*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],l=t[6],d=t[10],f=t[14],g=t[3],b=t[7],m=t[11],p=t[15];return g*(+s*c*l-n*h*l-s*o*d+i*h*d+n*o*f-i*c*f)+b*(+e*c*f-e*h*d+s*a*d-n*a*f+n*h*u-s*c*u)+m*(+e*h*l-e*o*f-s*a*l+i*a*f+s*o*u-i*h*u)+p*(-n*o*u-e*c*l+e*o*d+n*a*l-i*a*d+i*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],l=t[9],d=t[10],f=t[11],g=t[12],b=t[13],m=t[14],p=t[15],y=l*m*h-b*d*h+b*c*f-o*m*f-l*c*p+o*d*p,v=g*d*h-u*m*h-g*c*f+a*m*f+u*c*p-a*d*p,_=u*b*h-g*l*h+g*o*f-a*b*f-u*o*p+a*l*p,R=g*l*c-u*b*c-g*o*d+a*b*d+u*o*m-a*l*m,x=e*y+i*v+n*_+s*R;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/x;return t[0]=y*w,t[1]=(b*d*s-l*m*s-b*n*f+i*m*f+l*n*p-i*d*p)*w,t[2]=(o*m*s-b*c*s+b*n*h-i*m*h-o*n*p+i*c*p)*w,t[3]=(l*c*s-o*d*s-l*n*h+i*d*h+o*n*f-i*c*f)*w,t[4]=v*w,t[5]=(u*m*s-g*d*s+g*n*f-e*m*f-u*n*p+e*d*p)*w,t[6]=(g*c*s-a*m*s-g*n*h+e*m*h+a*n*p-e*c*p)*w,t[7]=(a*d*s-u*c*s+u*n*h-e*d*h-a*n*f+e*c*f)*w,t[8]=_*w,t[9]=(g*l*s-u*b*s-g*i*f+e*b*f+u*i*p-e*l*p)*w,t[10]=(a*b*s-g*o*s+g*i*h-e*b*h-a*i*p+e*o*p)*w,t[11]=(u*o*s-a*l*s-u*i*h+e*l*h+a*i*f-e*o*f)*w,t[12]=R*w,t[13]=(u*b*n-g*l*n+g*i*d-e*b*d-u*i*m+e*l*m)*w,t[14]=(g*o*n-a*b*n-g*i*c+e*b*c+a*i*m-e*o*m)*w,t[15]=(a*l*n-u*o*n+u*i*c-e*l*c-a*i*d+e*o*d)*w,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,h=s*a,u=s*o;return this.set(h*a+i,h*o-n*c,h*c+n*o,0,h*o+n*c,u*o+i,u*c-n*a,0,h*c-n*o,u*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,h=s+s,u=a+a,l=o+o,d=s*h,f=s*u,g=s*l,b=a*u,m=a*l,p=o*l,y=c*h,v=c*u,_=c*l,R=i.x,x=i.y,w=i.z;return n[0]=(1-(b+p))*R,n[1]=(f+_)*R,n[2]=(g-v)*R,n[3]=0,n[4]=(f-_)*x,n[5]=(1-(d+p))*x,n[6]=(m+y)*x,n[7]=0,n[8]=(g+v)*w,n[9]=(m-y)*w,n[10]=(1-(d+b))*w,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=rs.set(n[0],n[1],n[2]).length(),a=rs.set(n[4],n[5],n[6]).length(),o=rs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Li.copy(this);let h=1/s,u=1/a,l=1/o;return Li.elements[0]*=h,Li.elements[1]*=h,Li.elements[2]*=h,Li.elements[4]*=u,Li.elements[5]*=u,Li.elements[6]*=u,Li.elements[8]*=l,Li.elements[9]*=l,Li.elements[10]*=l,e.setFromRotationMatrix(Li),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=rn){let c=this.elements,h=2*s/(e-t),u=2*s/(i-n),l=(e+t)/(e-t),d=(i+n)/(i-n),f,g;if(o===rn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ra)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=rn){let c=this.elements,h=1/(e-t),u=1/(i-n),l=1/(a-s),d=(e+t)*h,f=(i+n)*u,g,b;if(o===rn)g=(a+s)*l,b=-2*l;else if(o===ra)g=s*l,b=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},rs=new M,Li=new At,qf=new M(0,0,0),Xf=new M(1,1,1),pn=new M,Lr=new M,pi=new M,Pl=new At,Ll=new xt,oi=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],c=n[1],h=n[5],u=n[9],l=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-l,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-l,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var la=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yf=0,Il=new M,as=new xt,Qi=new At,Ir=new M,qs=new M,jf=new M,Kf=new xt,Fl=new M(1,0,0),Dl=new M(0,1,0),kl=new M(0,0,1),Qf={type:"added"},Zf={type:"removed"},Se=class r extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new M,e=new oi,i=new xt,n=new M(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new At},normalMatrix:{value:new $t}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Fl,t)}rotateY(t){return this.rotateOnAxis(Dl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return Il.copy(t).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fl,t)}translateY(t){return this.translateOnAxis(Dl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ir.copy(t):Ir.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(qs,Ir,this.up):Qi.lookAt(Ir,qs,this.up),this.quaternion.setFromRotationMatrix(Qi),n&&(Qi.extractRotation(n.matrixWorld),as.setFromRotationMatrix(Qi),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Qf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let l=c[h];s(t.shapes,l)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(s(t.materials,this.material[c]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),l=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),l.length>0&&(i.shapes=l),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Se.DEFAULT_UP=new M(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ii=new M,Zi=new M,Po=new M,Ji=new M,os=new M,cs=new M,Ul=new M,Lo=new M,Io=new M,Fo=new M,Fr=!1,bs=class r{constructor(t=new M,e=new M,i=new M){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ii.subVectors(t,e),n.cross(Ii);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ii.subVectors(n,e),Zi.subVectors(i,e),Po.subVectors(t,e);let a=Ii.dot(Ii),o=Ii.dot(Zi),c=Ii.dot(Po),h=Zi.dot(Zi),u=Zi.dot(Po),l=a*h-o*o;if(l===0)return s.set(0,0,0),null;let d=1/l,f=(h*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getUV(t,e,i,n,s,a,o,c){return Fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fr=!0),this.getInterpolation(t,e,i,n,s,a,o,c)}static getInterpolation(t,e,i,n,s,a,o,c){return this.getBarycoord(t,e,i,n,Ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ji.x),c.addScaledVector(a,Ji.y),c.addScaledVector(o,Ji.z),c)}static isFrontFacing(t,e,i,n){return Ii.subVectors(i,e),Zi.subVectors(t,e),Ii.cross(Zi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Ii.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return Fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fr=!0),r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;os.subVectors(n,i),cs.subVectors(s,i),Lo.subVectors(t,i);let c=os.dot(Lo),h=cs.dot(Lo);if(c<=0&&h<=0)return e.copy(i);Io.subVectors(t,n);let u=os.dot(Io),l=cs.dot(Io);if(u>=0&&l<=u)return e.copy(n);let d=c*l-u*h;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(os,a);Fo.subVectors(t,s);let f=os.dot(Fo),g=cs.dot(Fo);if(g>=0&&f<=g)return e.copy(s);let b=f*h-c*g;if(b<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(i).addScaledVector(cs,o);let m=u*g-f*l;if(m<=0&&l-u>=0&&f-g>=0)return Ul.subVectors(s,n),o=(l-u)/(l-u+(f-g)),e.copy(n).addScaledVector(Ul,o);let p=1/(m+b+d);return a=b*p,o=d*p,e.copy(i).addScaledVector(os,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Do(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ae.workingColorSpace){if(t=zc(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Do(a,s,t+1/3),this.g=Do(a,s,t),this.b=Do(a,s,t-1/3)}return ae.toWorkingColorSpace(this,n),this}setStyle(t,e=ve){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){let i=Gu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return ae.fromWorkingColorSpace(je.copy(this),t),Math.round(Fe(je.r*255,0,255))*65536+Math.round(Fe(je.g*255,0,255))*256+Math.round(Fe(je.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(je.copy(this),e);let i=je.r,n=je.g,s=je.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let l=a-o;switch(h=u<=.5?l/(a+o):l/(2-a-o),a){case i:c=(n-s)/l+(n<s?6:0);break;case n:c=(s-i)/l+2;break;case s:c=(i-n)/l+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=ve){ae.fromWorkingColorSpace(je.copy(this),t);let e=je.r,i=je.g,n=je.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(mn),this.setHSL(mn.h+t,mn.s+e,mn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(mn),t.getHSL(Dr);let i=Js(mn.h,Dr.h,e),n=Js(mn.s,Dr.s,e),s=Js(mn.l,Dr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new Dt;Dt.NAMES=Gu;var Jf=0,vi=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=xn,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=er,this.blendDst=Zo,this.blendEquation=nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xn&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==er&&(i.blendSrc=this.blendSrc),this.blendDst!==Zo&&(i.blendDst=this.blendDst),this.blendEquation!==nn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ge=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Pe=new M,kr=new Mt,Vt=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}};var Cs=class extends Vt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ua=class extends Vt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var se=class extends Vt{constructor(t,e,i){super(new Float32Array(t),e,i)}};var $f=0,wi=new At,ko=new Se,hs=new M,mi=new Ei,Xs=new Ei,Be=new M,ce=class r extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vu(t)?ua:Cs)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new $t().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,e,i){return wi.makeTranslation(t,e,i),this.applyMatrix4(wi),this}scale(t,e,i){return wi.makeScale(t,e,i),this.applyMatrix4(wi),this}lookAt(t){return ko.lookAt(t),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];mi.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(t){let i=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(mi.min,Xs.min),mi.expandByPoint(Be),Be.addVectors(mi.max,Xs.max),mi.expandByPoint(Be)):(mi.expandByPoint(Xs.min),mi.expandByPoint(Xs.max))}mi.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Be.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Be));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Be.fromBufferAttribute(o,h),c&&(hs.fromBufferAttribute(t,h),Be.add(hs)),n=Math.max(n,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,h=[],u=[];for(let S=0;S<o;S++)h[S]=new M,u[S]=new M;let l=new M,d=new M,f=new M,g=new Mt,b=new Mt,m=new Mt,p=new M,y=new M;function v(S,N,O){l.fromArray(n,S*3),d.fromArray(n,N*3),f.fromArray(n,O*3),g.fromArray(a,S*2),b.fromArray(a,N*2),m.fromArray(a,O*2),d.sub(l),f.sub(l),b.sub(g),m.sub(g);let it=1/(b.x*m.y-m.x*b.y);isFinite(it)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-b.y).multiplyScalar(it),y.copy(f).multiplyScalar(b.x).addScaledVector(d,-m.x).multiplyScalar(it),h[S].add(p),h[N].add(p),h[O].add(p),u[S].add(y),u[N].add(y),u[O].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let S=0,N=_.length;S<N;++S){let O=_[S],it=O.start,P=O.count;for(let L=it,D=it+P;L<D;L+=3)v(i[L+0],i[L+1],i[L+2])}let R=new M,x=new M,w=new M,A=new M;function E(S){w.fromArray(s,S*3),A.copy(w);let N=h[S];R.copy(N),R.sub(w.multiplyScalar(w.dot(N))).normalize(),x.crossVectors(A,N);let it=x.dot(u[S])<0?-1:1;c[S*4]=R.x,c[S*4+1]=R.y,c[S*4+2]=R.z,c[S*4+3]=it}for(let S=0,N=_.length;S<N;++S){let O=_[S],it=O.start,P=O.count;for(let L=it,D=it+P;L<D;L+=3)E(i[L+0]),E(i[L+1]),E(i[L+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new M,s=new M,a=new M,o=new M,c=new M,h=new M,u=new M,l=new M;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),b=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,b),a.fromBufferAttribute(e,m),u.subVectors(a,s),l.subVectors(n,s),u.cross(l),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,m),o.add(u),c.add(u),h.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),l.subVectors(n,s),u.cross(l),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){let h=o.array,u=o.itemSize,l=o.normalized,d=new h.constructor(c.length*u),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*u;for(let p=0;p<u;p++)d[g++]=h[f++]}return new Vt(d,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=n[o],h=t(c,i);e.setAttribute(o,h)}let s=this.morphAttributes;for(let o in s){let c=[],h=s[o];for(let u=0,l=h.length;u<l;u++){let d=h[u],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let h=i[c];t.data.attributes[c]=h.toJSON(t.data)}let n={},s=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let l=0,d=h.length;l<d;l++){let f=h[l];u.push(f.toJSON(t.data))}u.length>0&&(n[c]=u,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let h in n){let u=n[h];this.setAttribute(h,u.clone(e))}let s=t.morphAttributes;for(let h in s){let u=[],l=s[h];for(let d=0,f=l.length;d<f;d++)u.push(l[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let l=a[h];this.addGroup(l.start,l.count,l.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nl=new At,Dn=new Rs,Ur=new bi,zl=new M,ls=new M,us=new M,ds=new M,Uo=new M,Nr=new M,zr=new Mt,Or=new Mt,Br=new Mt,Ol=new M,Bl=new M,Hl=new M,Hr=new M,Vr=new M,St=class extends Se{constructor(t=new ce,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){Nr.set(0,0,0);for(let c=0,h=s.length;c<h;c++){let u=o[c],l=s[c];u!==0&&(Uo.fromBufferAttribute(l,t),a?Nr.addScaledVector(Uo,u):Nr.addScaledVector(Uo.sub(e),u))}e.add(Nr)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(s),Dn.copy(t.ray).recast(t.near),!(Ur.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(Ur,zl)===null||Dn.origin.distanceToSquared(zl)>(t.far-t.near)**2))&&(Nl.copy(s).invert(),Dn.copy(t.ray).applyMatrix4(Nl),!(i.boundingBox!==null&&Dn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Dn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,h=s.attributes.uv,u=s.attributes.uv1,l=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,R=v;_<R;_+=3){let x=o.getX(_),w=o.getX(_+1),A=o.getX(_+2);n=Gr(this,p,t,i,h,u,l,x,w,A),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let y=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);n=Gr(this,a,t,i,h,u,l,y,v,_),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,R=v;_<R;_+=3){let x=_,w=_+1,A=_+2;n=Gr(this,p,t,i,h,u,l,x,w,A),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let y=m,v=m+1,_=m+2;n=Gr(this,a,t,i,h,u,l,y,v,_),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function tp(r,t,e,i,n,s,a,o){let c;if(t.side===He?c=i.intersectTriangle(a,s,n,!0,o):c=i.intersectTriangle(n,s,a,t.side===gi,o),c===null)return null;Vr.copy(o),Vr.applyMatrix4(r.matrixWorld);let h=e.ray.origin.distanceTo(Vr);return h<e.near||h>e.far?null:{distance:h,point:Vr.clone(),object:r}}function Gr(r,t,e,i,n,s,a,o,c,h){r.getVertexPosition(o,ls),r.getVertexPosition(c,us),r.getVertexPosition(h,ds);let u=tp(r,t,e,i,ls,us,ds,Hr);if(u){n&&(zr.fromBufferAttribute(n,o),Or.fromBufferAttribute(n,c),Br.fromBufferAttribute(n,h),u.uv=bs.getInterpolation(Hr,ls,us,ds,zr,Or,Br,new Mt)),s&&(zr.fromBufferAttribute(s,o),Or.fromBufferAttribute(s,c),Br.fromBufferAttribute(s,h),u.uv1=bs.getInterpolation(Hr,ls,us,ds,zr,Or,Br,new Mt),u.uv2=u.uv1),a&&(Ol.fromBufferAttribute(a,o),Bl.fromBufferAttribute(a,c),Hl.fromBufferAttribute(a,h),u.normal=bs.getInterpolation(Hr,ls,us,ds,Ol,Bl,Hl,new M),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let l={a:o,b:c,c:h,normal:new M,materialIndex:0};bs.getNormal(ls,us,ds,l.normal),u.face=l}return u}var ci=class r extends ce{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],h=[],u=[],l=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(l,2));function g(b,m,p,y,v,_,R,x,w,A,E){let S=_/w,N=R/A,O=_/2,it=R/2,P=x/2,L=w+1,D=A+1,H=0,U=0,k=new M;for(let W=0;W<D;W++){let q=W*N-it;for(let J=0;J<L;J++){let G=J*S-O;k[b]=G*y,k[m]=q*v,k[p]=P,h.push(k.x,k.y,k.z),k[b]=0,k[m]=0,k[p]=x>0?1:-1,u.push(k.x,k.y,k.z),l.push(J/w),l.push(1-W/A),H+=1}}for(let W=0;W<A;W++)for(let q=0;q<w;q++){let J=d+q+L*W,G=d+q+L*(W+1),z=d+(q+1)+L*(W+1),V=d+(q+1)+L*W;c.push(J,G,V),c.push(G,z,V),U+=6}o.addGroup(f,U,E),f+=U,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ps(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Je(r){let t={};for(let e=0;e<r.length;e++){let i=Ps(r[e]);for(let n in i)t[n]=i[n]}return t}function ep(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Wu(r){return r.getRenderTarget()===null?r.outputColorSpace:ae.workingColorSpace}var ip={clone:Ps,merge:Je},np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,re=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},da=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},De=class extends da{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=As*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return As*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;s+=a.offsetX*n/c,e-=a.offsetY*i/h,n*=a.width/c,i*=a.height/h}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ps=1,rc=class extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new De(fs,ps,t,e);n.layers=this.layers,this.add(n);let s=new De(fs,ps,t,e);s.layers=this.layers,this.add(s);let a=new De(fs,ps,t,e);a.layers=this.layers,this.add(a);let o=new De(fs,ps,t,e);o.layers=this.layers,this.add(o);let c=new De(fs,ps,t,e);c.layers=this.layers,this.add(c);let h=new De(fs,ps,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,c]=e;for(let h of e)this.remove(h);if(t===rn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,h,u]=this.children,l=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,h),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,n),t.render(e,u),t.setRenderTarget(l,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},fa=class extends We{constructor(t,e,i,n,s,a,o,c,h,u){t=t!==void 0?t:[],e=e!==void 0?e:ws,super(t,e,i,n,s,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ac=class extends ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&($s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Bn?ve:ai),this.texture=new fa(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ci(5,5,5),s=new re({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:vn});s.uniforms.tEquirect.value=e;let a=new St(n,s),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=ee),new rc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},No=new M,rp=new M,ap=new $t,en=class{constructor(t=new M(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=No.subVectors(i,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(No),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||ap.getNormalMatrix(t),n=this.coplanarPoint(No).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},kn=new bi,Wr=new M,sr=class{constructor(t=new en,e=new en,i=new en,n=new en,s=new en,a=new en){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=rn){let i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],c=n[3],h=n[4],u=n[5],l=n[6],d=n[7],f=n[8],g=n[9],b=n[10],m=n[11],p=n[12],y=n[13],v=n[14],_=n[15];if(i[0].setComponents(c-s,d-h,m-f,_-p).normalize(),i[1].setComponents(c+s,d+h,m+f,_+p).normalize(),i[2].setComponents(c+a,d+u,m+g,_+y).normalize(),i[3].setComponents(c-a,d-u,m-g,_-y).normalize(),i[4].setComponents(c-o,d-l,m-b,_-v).normalize(),e===rn)i[5].setComponents(c+o,d+l,m+b,_+v).normalize();else if(e===ra)i[5].setComponents(o,l,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Wr.x=n.normal.x>0?t.max.x:t.min.x,Wr.y=n.normal.y>0?t.max.y:t.min.y,Wr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qu(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function op(r,t){let e=t.isWebGL2,i=new WeakMap;function n(h,u){let l=h.array,d=h.usage,f=l.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,l,d),h.onUploadCallback();let b;if(l instanceof Float32Array)b=r.FLOAT;else if(l instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)b=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)b=r.SHORT;else if(l instanceof Uint32Array)b=r.UNSIGNED_INT;else if(l instanceof Int32Array)b=r.INT;else if(l instanceof Int8Array)b=r.BYTE;else if(l instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:g,type:b,bytesPerElement:l.BYTES_PER_ELEMENT,version:h.version,size:f}}function s(h,u,l){let d=u.array,f=u._updateRange,g=u.updateRanges;if(r.bindBuffer(l,h),f.count===-1&&g.length===0&&r.bufferSubData(l,0,d),g.length!==0){for(let b=0,m=g.length;b<m;b++){let p=g[b];e?r.bufferSubData(l,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(l,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(l,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(l,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=i.get(h);u&&(r.deleteBuffer(u.buffer),i.delete(h))}function c(h,u){if(h.isGLBufferAttribute){let d=i.get(h);(!d||d.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let l=i.get(h);if(l===void 0)i.set(h,n(h,u));else if(l.version<h.version){if(l.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(l.buffer,h,u),l.version=h.version}}return{get:a,remove:o,update:c}}var Di=class r extends ce{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(n),h=o+1,u=c+1,l=t/o,d=e/c,f=[],g=[],b=[],m=[];for(let p=0;p<u;p++){let y=p*d-a;for(let v=0;v<h;v++){let _=v*l-s;g.push(_,-y,0),b.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let v=y+h*p,_=y+h*(p+1),R=y+1+h*(p+1),x=y+1+h*p;f.push(v,_,x),f.push(_,R,x)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(b,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
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
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
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
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
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
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,Mp=`#ifdef USE_BUMPMAP
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fp=`vec3 transformedNormal = objectNormal;
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
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`
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
}`,Bp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
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
}`,Qp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
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
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,i0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
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
#endif`,o0=`struct PhysicalMaterial {
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
}`,c0=`
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,p0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,m0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v0=`#if defined( USE_POINTS_UV )
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
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
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
#endif`,w0=`#ifdef USE_MORPHTARGETS
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
#endif`,E0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X0=`float getShadowMask() {
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
}`,Y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,Z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
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
}`,pm=`#if DEPTH_PACKING == 3200
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
}`,mm=`#define DISTANCE
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
}`,gm=`#define DISTANCE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,ym=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
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
}`,Mm=`uniform vec3 diffuse;
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
}`,wm=`#define LAMBERT
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
}`,Em=`#define LAMBERT
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
}`,Sm=`#define MATCAP
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
}`,Tm=`#define MATCAP
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
}`,Am=`#define NORMAL
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
}`,Rm=`#define NORMAL
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
}`,Cm=`#define PHONG
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
}`,Pm=`#define PHONG
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
}`,Lm=`#define STANDARD
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
}`,Im=`#define STANDARD
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
}`,Fm=`#define TOON
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
}`,Dm=`#define TOON
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
}`,km=`uniform float size;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,zm=`uniform vec3 color;
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
}`,Om=`uniform float rotation;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:cp,alphahash_pars_fragment:hp,alphamap_fragment:lp,alphamap_pars_fragment:up,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:bp,begin_vertex:vp,beginnormal_vertex:xp,bsdfs:yp,iridescence_fragment:_p,bumpmap_pars_fragment:Mp,clipping_planes_fragment:wp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:Tp,color_fragment:Ap,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Lp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Fp,displacementmap_pars_vertex:Dp,displacementmap_vertex:kp,emissivemap_fragment:Up,emissivemap_pars_fragment:Np,colorspace_fragment:zp,colorspace_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Vp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:e0,envmap_vertex:Wp,fog_vertex:qp,fog_pars_vertex:Xp,fog_fragment:Yp,fog_pars_fragment:jp,gradientmap_pars_fragment:Kp,lightmap_fragment:Qp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:$p,lights_pars_begin:t0,lights_toon_fragment:i0,lights_toon_pars_fragment:n0,lights_phong_fragment:s0,lights_phong_pars_fragment:r0,lights_physical_fragment:a0,lights_physical_pars_fragment:o0,lights_fragment_begin:c0,lights_fragment_maps:h0,lights_fragment_end:l0,logdepthbuf_fragment:u0,logdepthbuf_pars_fragment:d0,logdepthbuf_pars_vertex:f0,logdepthbuf_vertex:p0,map_fragment:m0,map_pars_fragment:g0,map_particle_fragment:b0,map_particle_pars_fragment:v0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:y0,morphcolor_vertex:_0,morphnormal_vertex:M0,morphtarget_pars_vertex:w0,morphtarget_vertex:E0,normal_fragment_begin:S0,normal_fragment_maps:T0,normal_pars_fragment:A0,normal_pars_vertex:R0,normal_vertex:C0,normalmap_pars_fragment:P0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:I0,clearcoat_pars_fragment:F0,iridescence_pars_fragment:D0,opaque_fragment:k0,packing:U0,premultiplied_alpha_fragment:N0,project_vertex:z0,dithering_fragment:O0,dithering_pars_fragment:B0,roughnessmap_fragment:H0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:W0,shadowmap_vertex:q0,shadowmask_pars_fragment:X0,skinbase_vertex:Y0,skinning_pars_vertex:j0,skinning_vertex:K0,skinnormal_vertex:Q0,specularmap_fragment:Z0,specularmap_pars_fragment:J0,tonemapping_fragment:$0,tonemapping_pars_fragment:tm,transmission_fragment:em,transmission_pars_fragment:im,uv_pars_fragment:nm,uv_pars_vertex:sm,uv_vertex:rm,worldpos_vertex:am,background_vert:om,background_frag:cm,backgroundCube_vert:hm,backgroundCube_frag:lm,cube_vert:um,cube_frag:dm,depth_vert:fm,depth_frag:pm,distanceRGBA_vert:mm,distanceRGBA_frag:gm,equirect_vert:bm,equirect_frag:vm,linedashed_vert:xm,linedashed_frag:ym,meshbasic_vert:_m,meshbasic_frag:Mm,meshlambert_vert:wm,meshlambert_frag:Em,meshmatcap_vert:Sm,meshmatcap_frag:Tm,meshnormal_vert:Am,meshnormal_frag:Rm,meshphong_vert:Cm,meshphong_frag:Pm,meshphysical_vert:Lm,meshphysical_frag:Im,meshtoon_vert:Fm,meshtoon_frag:Dm,points_vert:km,points_frag:Um,shadow_vert:Nm,shadow_frag:zm,sprite_vert:Om,sprite_frag:Bm},gt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Oi={basic:{uniforms:Je([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Je([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Je([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Je([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Je([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Je([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Je([gt.points,gt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Je([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Je([gt.common,gt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Je([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Je([gt.sprite,gt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Je([gt.common,gt.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Je([gt.lights,gt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Oi.physical={uniforms:Je([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var qr={r:0,b:0,g:0};function Hm(r,t,e,i,n,s,a){let o=new Dt(0),c=s===!0?0:1,h,u,l=null,d=0,f=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?b(o,c):v&&v.isColor&&(b(v,1),y=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ta)?(u===void 0&&(u=new St(new ci(1,1,1),new re({name:"BackgroundCubeMaterial",uniforms:Ps(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,x,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ae.getTransfer(v.colorSpace)!==be,(l!==v||d!==v.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,l=v,d=v.version,f=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new St(new Di(2,2),new re({name:"BackgroundMaterial",uniforms:Ps(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ae.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(l!==v||d!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,l=v,d=v.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function b(m,p){m.getRGB(qr,Wu(r)),i.buffers.color.setClear(qr.r,qr.g,qr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,b(o,c)},render:g}}function Vm(r,t,e,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=m(null),h=c,u=!1;function l(P,L,D,H,U){let k=!1;if(a){let W=b(H,D,L);h!==W&&(h=W,f(h.object)),k=p(P,H,D,U),k&&y(P,H,D,U)}else{let W=L.wireframe===!0;(h.geometry!==H.id||h.program!==D.id||h.wireframe!==W)&&(h.geometry=H.id,h.program=D.id,h.wireframe=W,k=!0)}U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(k||u)&&(u=!1,A(P,L,D,H),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(P){return i.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function b(P,L,D){let H=D.wireframe===!0,U=o[P.id];U===void 0&&(U={},o[P.id]=U);let k=U[L.id];k===void 0&&(k={},U[L.id]=k);let W=k[H];return W===void 0&&(W=m(d()),k[H]=W),W}function m(P){let L=[],D=[],H=[];for(let U=0;U<n;U++)L[U]=0,D[U]=0,H[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:H,object:P,attributes:{},index:null}}function p(P,L,D,H){let U=h.attributes,k=L.attributes,W=0,q=D.getAttributes();for(let J in q)if(q[J].location>=0){let z=U[J],V=k[J];if(V===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),z===void 0||z.attribute!==V||V&&z.data!==V.data)return!0;W++}return h.attributesNum!==W||h.index!==H}function y(P,L,D,H){let U={},k=L.attributes,W=0,q=D.getAttributes();for(let J in q)if(q[J].location>=0){let z=k[J];z===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(z=P.instanceColor));let V={};V.attribute=z,z&&z.data&&(V.data=z.data),U[J]=V,W++}h.attributes=U,h.attributesNum=W,h.index=H}function v(){let P=h.newAttributes;for(let L=0,D=P.length;L<D;L++)P[L]=0}function _(P){R(P,0)}function R(P,L){let D=h.newAttributes,H=h.enabledAttributes,U=h.attributeDivisors;D[P]=1,H[P]===0&&(r.enableVertexAttribArray(P),H[P]=1),U[P]!==L&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),U[P]=L)}function x(){let P=h.newAttributes,L=h.enabledAttributes;for(let D=0,H=L.length;D<H;D++)L[D]!==P[D]&&(r.disableVertexAttribArray(D),L[D]=0)}function w(P,L,D,H,U,k,W){W===!0?r.vertexAttribIPointer(P,L,D,U,k):r.vertexAttribPointer(P,L,D,H,U,k)}function A(P,L,D,H){if(i.isWebGL2===!1&&(P.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let U=H.attributes,k=D.getAttributes(),W=L.defaultAttributeValues;for(let q in k){let J=k[q];if(J.location>=0){let G=U[q];if(G===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){let z=G.normalized,V=G.itemSize,st=e.get(G);if(st===void 0)continue;let Z=st.buffer,rt=st.type,ot=st.bytesPerElement,ct=i.isWebGL2===!0&&(rt===r.INT||rt===r.UNSIGNED_INT||G.gpuType===Lu);if(G.isInterleavedBufferAttribute){let Et=G.data,X=Et.stride,Bt=G.offset;if(Et.isInstancedInterleavedBuffer){for(let wt=0;wt<J.locationSize;wt++)R(J.location+wt,Et.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let wt=0;wt<J.locationSize;wt++)_(J.location+wt);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let wt=0;wt<J.locationSize;wt++)w(J.location+wt,V/J.locationSize,rt,z,X*ot,(Bt+V/J.locationSize*wt)*ot,ct)}else{if(G.isInstancedBufferAttribute){for(let Et=0;Et<J.locationSize;Et++)R(J.location+Et,G.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Et=0;Et<J.locationSize;Et++)_(J.location+Et);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let Et=0;Et<J.locationSize;Et++)w(J.location+Et,V/J.locationSize,rt,z,V*ot,V/J.locationSize*Et*ot,ct)}}else if(W!==void 0){let z=W[q];if(z!==void 0)switch(z.length){case 2:r.vertexAttrib2fv(J.location,z);break;case 3:r.vertexAttrib3fv(J.location,z);break;case 4:r.vertexAttrib4fv(J.location,z);break;default:r.vertexAttrib1fv(J.location,z)}}}}x()}function E(){O();for(let P in o){let L=o[P];for(let D in L){let H=L[D];for(let U in H)g(H[U].object),delete H[U];delete L[D]}delete o[P]}}function S(P){if(o[P.id]===void 0)return;let L=o[P.id];for(let D in L){let H=L[D];for(let U in H)g(H[U].object),delete H[U];delete L[D]}delete o[P.id]}function N(P){for(let L in o){let D=o[L];if(D[P.id]===void 0)continue;let H=D[P.id];for(let U in H)g(H[U].object),delete H[U];delete D[P.id]}}function O(){it(),u=!0,h!==c&&(h=c,f(h.object))}function it(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:O,resetDefaultState:it,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:_,disableUnusedAttributes:x}}function Gm(r,t,e,i){let n=i.isWebGL2,s;function a(u){s=u}function o(u,l){r.drawArrays(s,u,l),e.update(l,s,1)}function c(u,l,d){if(d===0)return;let f,g;if(n)f=r,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,l,d),e.update(l,s,d)}function h(u,l,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],l[g]);else{f.multiDrawArraysWEBGL(s,u,0,l,0,d);let g=0;for(let b=0;b<d;b++)g+=l[b];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function Wm(r,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let h=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,l=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,_=a||t.has("OES_texture_float"),R=v&&_,x=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:l,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:R,maxSamples:x}}function qm(r){let t=this,e=null,i=0,n=!1,s=!1,a=new en,o=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){let f=l.length!==0||d||i!==0||n;return n=d,i=l.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(l,d){e=u(l,d,0)},this.setState=function(l,d,f){let g=l.clippingPlanes,b=l.clipIntersection,m=l.clipShadows,p=r.get(l);if(!n||g===null||g.length===0||s&&!m)s?u(null):h();else{let y=s?0:i,v=y*4,_=p.clippingState||null;c.value=_,_=u(g,d,v,f);for(let R=0;R!==v;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(l,d,f,g){let b=l!==null?l.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==b;++v,_+=4)a.copy(l[v]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}function Xm(r){let t=new WeakMap;function e(a,o){return o===Jo?a.mapping=ws:o===$o&&(a.mapping=Es),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Jo||o===$o)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new ac(c.height/2);return h.fromEquirectangularTexture(r,a),t.set(a,h),a.addEventListener("dispose",n),e(h.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var hi=class extends da{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vs=4,Vl=[.125,.215,.35,.446,.526,.582],Nn=20,zo=new hi,Gl=new Dt,Oo=null,Bo=0,Ho=0,Un=(1+Math.sqrt(5))/2,ms=1/Un,Wl=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,Un,ms),new M(0,Un,-ms),new M(ms,0,Un),new M(-ms,0,Un),new M(Un,ms,0),new M(-Un,ms,0)],Ls=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oo,Bo,Ho),t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ee,minFilter:ee,generateMipmaps:!1,type:an,format:ue,colorSpace:Ce,depthBuffer:!1},n=ql(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ym(s)),this._blurMaterial=jm(s,t,e)}return n}_compileMaterial(t){let e=new St(this._lodPlanes[0],t);this._renderer.compile(e,zo)}_sceneToCubeUV(t,e,i,n){let o=new De(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,l=u.autoClear,d=u.toneMapping;u.getClearColor(Gl),u.toneMapping=Hi,u.autoClear=!1;let f=new Ge({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new St(new ci,f),b=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,b=!0):(f.color.copy(Gl),b=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(h[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,h[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,h[p]));let v=this._cubeSize;Xr(n,y*v,p>2?v:0,v,v),u.setRenderTarget(n),b&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=l,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===ws||t.mapping===Es;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;Xr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,zo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Wl[(n-1)%Wl.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,l=new St(this._lodPlanes[n],h),d=h.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Nn-1),b=s/g,m=isFinite(s)?1+Math.floor(u*b):Nn;m>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Nn}`);let p=[],y=0;for(let w=0;w<Nn;++w){let A=w/b,E=Math.exp(-A*A/2);p.push(E),w===0?y+=E:w<m&&(y+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let _=this._sizeLods[n],R=3*_*(n>v-vs?n-v+vs:0),x=4*(this._cubeSize-_);Xr(e,R,x,3*_,2*_),c.setRenderTarget(e),c.render(l,zo)}};function Ym(r){let t=[],e=[],i=[],n=r,s=r-vs+1+Vl.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let c=1/o;a>r-vs?c=Vl[a-r+vs-1]:a===0&&(c=0),i.push(c);let h=1/(o-2),u=-h,l=1+h,d=[u,u,l,u,l,l,u,u,l,l,u,l],f=6,g=6,b=3,m=2,p=1,y=new Float32Array(b*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let x=0;x<f;x++){let w=x%3*2/3-1,A=x>2?0:-1,E=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];y.set(E,b*g*x),v.set(d,m*g*x);let S=[x,x,x,x,x,x];_.set(S,p*g*x)}let R=new ce;R.setAttribute("position",new Vt(y,b)),R.setAttribute("uv",new Vt(v,m)),R.setAttribute("faceIndex",new Vt(_,p)),t.push(R),n>vs&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ql(r,t,e){let i=new ye(r,t,e);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xr(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function jm(r,t,e){let i=new Float32Array(Nn),n=new M(0,1,0);return new re({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Xl(){return new re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Yl(){return new re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function Km(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let c=o.mapping,h=c===Jo||c===$o,u=c===ws||c===Es;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=t.get(o);return e===null&&(e=new Ls(r)),l=h?e.fromEquirectangular(o,l):e.fromCubemap(o,l),t.set(o,l),l.texture}else{if(t.has(o))return t.get(o).texture;{let l=o.image;if(h&&l&&l.height>0||u&&l&&n(l)){e===null&&(e=new Ls(r));let d=h?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function n(o){let c=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function s(o){let c=o.target;c.removeEventListener("dispose",s);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Qm(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Zm(r,t,e,i){let n={},s=new WeakMap;function a(l){let d=l.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let b=d.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)t.remove(b[m])}d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(l,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function c(l){let d=l.attributes;for(let g in d)t.update(d[g],r.ARRAY_BUFFER);let f=l.morphAttributes;for(let g in f){let b=f[g];for(let m=0,p=b.length;m<p;m++)t.update(b[m],r.ARRAY_BUFFER)}}function h(l){let d=[],f=l.index,g=l.attributes.position,b=0;if(f!==null){let y=f.array;b=f.version;for(let v=0,_=y.length;v<_;v+=3){let R=y[v+0],x=y[v+1],w=y[v+2];d.push(R,x,x,w,w,R)}}else if(g!==void 0){let y=g.array;b=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let R=v+0,x=v+1,w=v+2;d.push(R,x,x,w,w,R)}}else return;let m=new(Vu(d)?ua:Cs)(d,1);m.version=b;let p=s.get(l);p&&t.remove(p),s.set(l,m)}function u(l){let d=s.get(l);if(d){let f=l.index;f!==null&&d.version<f.version&&h(l)}else h(l);return s.get(l)}return{get:o,update:c,getWireframeAttribute:u}}function Jm(r,t,e,i){let n=i.isWebGL2,s;function a(f){s=f}let o,c;function h(f){o=f.type,c=f.bytesPerElement}function u(f,g){r.drawElements(s,g,o,f*c),e.update(g,s,1)}function l(f,g,b){if(b===0)return;let m,p;if(n)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,f*c,b),e.update(g,s,b)}function d(f,g,b){if(b===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<b;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,o,f,0,b);let p=0;for(let y=0;y<b;y++)p+=g[y];e.update(p,s,1)}}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=l,this.renderMultiDraw=d}function $m(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function tg(r,t){return r[0]-t[0]}function eg(r,t){return Math.abs(t[1])-Math.abs(r[1])}function ig(r,t,e){let i={},n=new Float32Array(8),s=new WeakMap,a=new ne,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,u,l){let d=h.morphTargetInfluences;if(t.isWebGL2===!0){let f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0,b=s.get(u);if(b===void 0||b.count!==g){let P=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",P)};b!==void 0&&b.texture.dispose();let y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[],A=0;y===!0&&(A=1),v===!0&&(A=2),_===!0&&(A=3);let E=u.attributes.position.count*A,S=1;E>t.maxTextureSize&&(S=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let N=new Float32Array(E*S*4*g),O=new ha(N,E,S,g);O.type=sn,O.needsUpdate=!0;let it=A*4;for(let L=0;L<g;L++){let D=R[L],H=x[L],U=w[L],k=E*S*4*L;for(let W=0;W<D.count;W++){let q=W*it;y===!0&&(a.fromBufferAttribute(D,W),N[k+q+0]=a.x,N[k+q+1]=a.y,N[k+q+2]=a.z,N[k+q+3]=0),v===!0&&(a.fromBufferAttribute(H,W),N[k+q+4]=a.x,N[k+q+5]=a.y,N[k+q+6]=a.z,N[k+q+7]=0),_===!0&&(a.fromBufferAttribute(U,W),N[k+q+8]=a.x,N[k+q+9]=a.y,N[k+q+10]=a.z,N[k+q+11]=U.itemSize===4?a.w:1)}}b={count:g,texture:O,size:new Mt(E,S)},s.set(u,b),u.addEventListener("dispose",P)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=u.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",d),l.getUniforms().setValue(r,"morphTargetsTexture",b.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",b.size)}else{let f=d===void 0?0:d.length,g=i[u.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<f;v++){let _=g[v];_[0]=v,_[1]=d[v]}g.sort(eg);for(let v=0;v<8;v++)v<f&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(tg);let b=u.morphAttributes.position,m=u.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let _=o[v],R=_[0],x=_[1];R!==Number.MAX_SAFE_INTEGER&&x?(b&&u.getAttribute("morphTarget"+v)!==b[R]&&u.setAttribute("morphTarget"+v,b[R]),m&&u.getAttribute("morphNormal"+v)!==m[R]&&u.setAttribute("morphNormal"+v,m[R]),n[v]=x,p+=x):(b&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),n[v]=0)}let y=u.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",y),l.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:c}}function ng(r,t,e,i){let n=new WeakMap;function s(c){let h=i.render.frame,u=c.geometry,l=t.get(c,u);if(n.get(l)!==h&&(t.update(l),n.set(l,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;n.get(d)!==h&&(d.update(),n.set(d,h))}return l}function a(){n=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}var Vn=class extends We{constructor(t,e,i,n,s,a,o,c,h,u){if(u=u!==void 0?u:On,u!==On&&u!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===On&&(i=gn),i===void 0&&u===Ss&&(i=zn),super(null,n,s,a,o,c,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ee,this.minFilter=c!==void 0?c:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xu=new We,Yu=new Vn(1,1);Yu.compareFunction=Hu;var ju=new ha,Ku=new sc,Qu=new fa,jl=[],Kl=[],Ql=new Float32Array(16),Zl=new Float32Array(9),Jl=new Float32Array(4);function ks(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=jl[n];if(s===void 0&&(s=new Float32Array(n),jl[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ke(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Ue(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Ca(r,t){let e=Kl[t];e===void 0&&(e=new Int32Array(t),Kl[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function sg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function rg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;r.uniform2fv(this.addr,t),Ue(e,t)}}function ag(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;r.uniform3fv(this.addr,t),Ue(e,t)}}function og(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;r.uniform4fv(this.addr,t),Ue(e,t)}}function cg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(ke(e,i))return;Jl.set(i),r.uniformMatrix2fv(this.addr,!1,Jl),Ue(e,i)}}function hg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(ke(e,i))return;Zl.set(i),r.uniformMatrix3fv(this.addr,!1,Zl),Ue(e,i)}}function lg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(ke(e,i))return;Ql.set(i),r.uniformMatrix4fv(this.addr,!1,Ql),Ue(e,i)}}function ug(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function dg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;r.uniform2iv(this.addr,t),Ue(e,t)}}function fg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;r.uniform3iv(this.addr,t),Ue(e,t)}}function pg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;r.uniform4iv(this.addr,t),Ue(e,t)}}function mg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function gg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;r.uniform2uiv(this.addr,t),Ue(e,t)}}function bg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;r.uniform3uiv(this.addr,t),Ue(e,t)}}function vg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;r.uniform4uiv(this.addr,t),Ue(e,t)}}function xg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?Yu:Xu;e.setTexture2D(t||s,n)}function yg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ku,n)}function _g(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Qu,n)}function Mg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||ju,n)}function wg(r){switch(r){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return cg;case 35675:return hg;case 35676:return lg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return bg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return Mg}}function Eg(r,t){r.uniform1fv(this.addr,t)}function Sg(r,t){let e=ks(t,this.size,2);r.uniform2fv(this.addr,e)}function Tg(r,t){let e=ks(t,this.size,3);r.uniform3fv(this.addr,e)}function Ag(r,t){let e=ks(t,this.size,4);r.uniform4fv(this.addr,e)}function Rg(r,t){let e=ks(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Cg(r,t){let e=ks(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Pg(r,t){let e=ks(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Lg(r,t){r.uniform1iv(this.addr,t)}function Ig(r,t){r.uniform2iv(this.addr,t)}function Fg(r,t){r.uniform3iv(this.addr,t)}function Dg(r,t){r.uniform4iv(this.addr,t)}function kg(r,t){r.uniform1uiv(this.addr,t)}function Ug(r,t){r.uniform2uiv(this.addr,t)}function Ng(r,t){r.uniform3uiv(this.addr,t)}function zg(r,t){r.uniform4uiv(this.addr,t)}function Og(r,t,e){let i=this.cache,n=t.length,s=Ca(e,n);ke(i,s)||(r.uniform1iv(this.addr,s),Ue(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Xu,s[a])}function Bg(r,t,e){let i=this.cache,n=t.length,s=Ca(e,n);ke(i,s)||(r.uniform1iv(this.addr,s),Ue(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Ku,s[a])}function Hg(r,t,e){let i=this.cache,n=t.length,s=Ca(e,n);ke(i,s)||(r.uniform1iv(this.addr,s),Ue(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Qu,s[a])}function Vg(r,t,e){let i=this.cache,n=t.length,s=Ca(e,n);ke(i,s)||(r.uniform1iv(this.addr,s),Ue(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||ju,s[a])}function Gg(r){switch(r){case 5126:return Eg;case 35664:return Sg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Ig;case 35668:case 35672:return Fg;case 35669:case 35673:return Dg;case 5125:return kg;case 36294:return Ug;case 36295:return Ng;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}var oc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=wg(e.type)}},cc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gg(e.type)}},hc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},Vo=/(\w+)(\])?(\[|\.)?/g;function $l(r,t){r.seq.push(t),r.map[t.id]=t}function Wg(r,t,e){let i=r.name,n=i.length;for(Vo.lastIndex=0;;){let s=Vo.exec(i),a=Vo.lastIndex,o=s[1],c=s[2]==="]",h=s[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===n){$l(e,h===void 0?new oc(o,r,t):new cc(o,r,t));break}else{let l=e.map[o];l===void 0&&(l=new hc(o),$l(e,l)),e=l}}}var _s=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);Wg(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function tu(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var qg=37297,Xg=0;function Yg(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function jg(r){let t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(r),i;switch(t===e?i="":t===sa&&e===na?i="LinearDisplayP3ToLinearSRGB":t===na&&e===sa&&(i="LinearSRGBToLinearDisplayP3"),r){case Ce:case Ra:return[i,"LinearTransferOETF"];case ve:case Nc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function eu(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Yg(r.getShaderSource(t),a)}else return n}function Kg(r,t){let e=jg(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Qg(r,t){let e;switch(t){case $d:e="Linear";break;case tf:e="Reinhard";break;case ef:e="OptimizedCineon";break;case nf:e="ACESFilmic";break;case rf:e="AgX";break;case sf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function Jg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xs).join(`
`)}function $g(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tb(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function xs(r){return r!==""}function iu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(r){return r.replace(eb,nb)}var ib=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nb(r,t){let e=jt[t];if(e===void 0){let i=ib.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return lc(e)}var sb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(r){return r.replace(sb,rb)}function rb(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function ru(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ab(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Pd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===tn&&(t="SHADOWMAP_TYPE_VSM"),t}function ob(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ws:case Es:t="ENVMAP_TYPE_CUBE";break;case Ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function hb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Cu:t="ENVMAP_BLENDING_MULTIPLY";break;case Zd:t="ENVMAP_BLENDING_MIX";break;case Jd:t="ENVMAP_BLENDING_ADD";break}return t}function lb(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function ub(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ab(e),h=ob(e),u=cb(e),l=hb(e),d=lb(e),f=e.isWebGL2?"":Zg(e),g=Jg(e),b=$g(s),m=n.createProgram(),p,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(xs).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(xs).join(`
`),y.length>0&&(y+=`
`)):(p=[ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),y=[f,ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?jt.tonemapping_pars_fragment:"",e.toneMapping!==Hi?Qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Kg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xs).join(`
`)),a=lc(a),a=iu(a,e),a=nu(a,e),o=lc(o),o=iu(o,e),o=nu(o,e),a=su(a),o=su(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let _=v+p+a,R=v+y+o,x=tu(n,n.VERTEX_SHADER,_),w=tu(n,n.FRAGMENT_SHADER,R);n.attachShader(m,x),n.attachShader(m,w),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function A(O){if(r.debug.checkShaderErrors){let it=n.getProgramInfoLog(m).trim(),P=n.getShaderInfoLog(x).trim(),L=n.getShaderInfoLog(w).trim(),D=!0,H=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,x,w);else{let U=eu(n,x,"vertex"),k=eu(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+it+`
`+U+`
`+k)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(P===""||L==="")&&(H=!1);H&&(O.diagnostics={runnable:D,programLog:it,vertexShader:{log:P,prefix:p},fragmentShader:{log:L,prefix:y}})}n.deleteShader(x),n.deleteShader(w),E=new _s(n,m),S=tb(n,m)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=n.getProgramParameter(m,qg)),N},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=w,this}var db=0,uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new dc(t),e.set(t,i)),i}},dc=class{constructor(t){this.id=db++,this.code=t,this.usedTimes=0}};function fb(r,t,e,i,n,s,a){let o=new la,c=new uc,h=[],u=n.isWebGL2,l=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return E===0?"uv":`uv${E}`}function m(E,S,N,O,it){let P=O.fog,L=it.geometry,D=E.isMeshStandardMaterial?O.environment:null,H=(E.isMeshStandardMaterial?e:t).get(E.envMap||D),U=H&&H.mapping===Ta?H.image.height:null,k=g[E.type];E.precision!==null&&(f=n.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let W=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,q=W!==void 0?W.length:0,J=0;L.morphAttributes.position!==void 0&&(J=1),L.morphAttributes.normal!==void 0&&(J=2),L.morphAttributes.color!==void 0&&(J=3);let G,z,V,st;if(k){let Ke=Oi[k];G=Ke.vertexShader,z=Ke.fragmentShader}else G=E.vertexShader,z=E.fragmentShader,c.update(E),V=c.getVertexShaderID(E),st=c.getFragmentShaderID(E);let Z=r.getRenderTarget(),rt=it.isInstancedMesh===!0,ot=it.isBatchedMesh===!0,ct=!!E.map,Et=!!E.matcap,X=!!H,Bt=!!E.aoMap,wt=!!E.lightMap,Rt=!!E.bumpMap,vt=!!E.normalMap,Nt=!!E.displacementMap,Pt=!!E.emissiveMap,F=!!E.metalnessMap,C=!!E.roughnessMap,K=E.anisotropy>0,lt=E.clearcoat>0,ut=E.iridescence>0,ft=E.sheen>0,Y=E.transmission>0,at=K&&!!E.anisotropyMap,ht=lt&&!!E.clearcoatMap,It=lt&&!!E.clearcoatNormalMap,Gt=lt&&!!E.clearcoatRoughnessMap,dt=ut&&!!E.iridescenceMap,he=ut&&!!E.iridescenceThicknessMap,te=ft&&!!E.sheenColorMap,Ht=ft&&!!E.sheenRoughnessMap,Ft=!!E.specularMap,Ct=!!E.specularColorMap,Yt=!!E.specularIntensityMap,oe=Y&&!!E.transmissionMap,Me=Y&&!!E.thicknessMap,Zt=!!E.gradientMap,mt=!!E.alphaMap,B=E.alphaTest>0,yt=!!E.alphaHash,_t=!!E.extensions,zt=!!L.attributes.uv1,kt=!!L.attributes.uv2,fe=!!L.attributes.uv3,pe=Hi;return E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(pe=r.toneMapping),{isWebGL2:u,shaderID:k,shaderType:E.type,shaderName:E.name,vertexShader:G,fragmentShader:z,defines:E.defines,customVertexShaderID:V,customFragmentShaderID:st,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ot,instancing:rt,instancingColor:rt&&it.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ce,map:ct,matcap:Et,envMap:X,envMapMode:X&&H.mapping,envMapCubeUVHeight:U,aoMap:Bt,lightMap:wt,bumpMap:Rt,normalMap:vt,displacementMap:d&&Nt,emissiveMap:Pt,normalMapObjectSpace:vt&&E.normalMapType===vf,normalMapTangentSpace:vt&&E.normalMapType===Bu,metalnessMap:F,roughnessMap:C,anisotropy:K,anisotropyMap:at,clearcoat:lt,clearcoatMap:ht,clearcoatNormalMap:It,clearcoatRoughnessMap:Gt,iridescence:ut,iridescenceMap:dt,iridescenceThicknessMap:he,sheen:ft,sheenColorMap:te,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:Ct,specularIntensityMap:Yt,transmission:Y,transmissionMap:oe,thicknessMap:Me,gradientMap:Zt,opaque:E.transparent===!1&&E.blending===xn,alphaMap:mt,alphaTest:B,alphaHash:yt,combine:E.combine,mapUv:ct&&b(E.map.channel),aoMapUv:Bt&&b(E.aoMap.channel),lightMapUv:wt&&b(E.lightMap.channel),bumpMapUv:Rt&&b(E.bumpMap.channel),normalMapUv:vt&&b(E.normalMap.channel),displacementMapUv:Nt&&b(E.displacementMap.channel),emissiveMapUv:Pt&&b(E.emissiveMap.channel),metalnessMapUv:F&&b(E.metalnessMap.channel),roughnessMapUv:C&&b(E.roughnessMap.channel),anisotropyMapUv:at&&b(E.anisotropyMap.channel),clearcoatMapUv:ht&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:It&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:he&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:te&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(E.sheenRoughnessMap.channel),specularMapUv:Ft&&b(E.specularMap.channel),specularColorMapUv:Ct&&b(E.specularColorMap.channel),specularIntensityMapUv:Yt&&b(E.specularIntensityMap.channel),transmissionMapUv:oe&&b(E.transmissionMap.channel),thicknessMapUv:Me&&b(E.thicknessMap.channel),alphaMapUv:mt&&b(E.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(vt||K),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:zt,vertexUv2s:kt,vertexUv3s:fe,pointsUvs:it.isPoints===!0&&!!L.attributes.uv&&(ct||mt),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:it.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:J,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ct&&E.map.isVideoTexture===!0&&ae.getTransfer(E.map.colorSpace)===be,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Le,flipSided:E.side===He,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:_t&&E.extensions.derivatives===!0,extensionFragDepth:_t&&E.extensions.fragDepth===!0,extensionDrawBuffers:_t&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:_t&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_t&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)S.push(N),S.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(y(S,E),v(S,E),S.push(r.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function y(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function v(E,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function _(E){let S=g[E.type],N;if(S){let O=Oi[S];N=ip.clone(O.uniforms)}else N=E.uniforms;return N}function R(E,S){let N;for(let O=0,it=h.length;O<it;O++){let P=h[O];if(P.cacheKey===S){N=P,++N.usedTimes;break}}return N===void 0&&(N=new ub(r,S,E,s),h.push(N)),N}function x(E){if(--E.usedTimes===0){let S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function w(E){c.remove(E)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:x,releaseShaderCache:w,programs:h,dispose:A}}function pb(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function mb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function au(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ou(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(l,d,f,g,b,m){let p=r[t];return p===void 0?(p={id:l.id,object:l,geometry:d,material:f,groupOrder:g,renderOrder:l.renderOrder,z:b,group:m},r[t]=p):(p.id=l.id,p.object=l,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=l.renderOrder,p.z=b,p.group=m),t++,p}function o(l,d,f,g,b,m){let p=a(l,d,f,g,b,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function c(l,d,f,g,b,m){let p=a(l,d,f,g,b,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function h(l,d){e.length>1&&e.sort(l||mb),i.length>1&&i.sort(d||au),n.length>1&&n.sort(d||au)}function u(){for(let l=t,d=r.length;l<d;l++){let f=r[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:c,finish:u,sort:h}}function gb(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new ou,r.set(i,[a])):n>=s.length?(a=new ou,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function bb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new M,color:new Dt};break;case"SpotLight":e={position:new M,direction:new M,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new M,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new M,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new M,halfWidth:new M,halfHeight:new M};break}return r[t.id]=e,e}}}function vb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var xb=0;function yb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function _b(r,t){let e=new bb,i=vb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new M);let s=new M,a=new At,o=new At;function c(u,l){let d=0,f=0,g=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let b=0,m=0,p=0,y=0,v=0,_=0,R=0,x=0,w=0,A=0,E=0;u.sort(yb);let S=l===!0?Math.PI:1;for(let O=0,it=u.length;O<it;O++){let P=u[O],L=P.color,D=P.intensity,H=P.distance,U=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=L.r*D*S,f+=L.g*D*S,g+=L.b*D*S;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],D);E++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){let W=P.shadow,q=i.get(P);q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,n.directionalShadow[b]=q,n.directionalShadowMap[b]=U,n.directionalShadowMatrix[b]=P.shadow.matrix,_++}n.directional[b]=k,b++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(L).multiplyScalar(D*S),k.distance=H,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[p]=k;let W=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,W.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[p]=W.matrix,P.castShadow){let q=i.get(P);q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,n.spotShadow[p]=q,n.spotShadowMap[p]=U,x++}p++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(L).multiplyScalar(D),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[y]=k,y++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*S),k.distance=P.distance,k.decay=P.decay,P.castShadow){let W=P.shadow,q=i.get(P);q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,q.shadowCameraNear=W.camera.near,q.shadowCameraFar=W.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=P.shadow.matrix,R++}n.point[m]=k,m++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(D*S),k.groundColor.copy(P.groundColor).multiplyScalar(D*S),n.hemi[v]=k,v++}}y>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=g;let N=n.hash;(N.directionalLength!==b||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==y||N.hemiLength!==v||N.numDirectionalShadows!==_||N.numPointShadows!==R||N.numSpotShadows!==x||N.numSpotMaps!==w||N.numLightProbes!==E)&&(n.directional.length=b,n.spot.length=p,n.rectArea.length=y,n.point.length=m,n.hemi.length=v,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=x+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,N.directionalLength=b,N.pointLength=m,N.spotLength=p,N.rectAreaLength=y,N.hemiLength=v,N.numDirectionalShadows=_,N.numPointShadows=R,N.numSpotShadows=x,N.numSpotMaps=w,N.numLightProbes=E,n.version=xb++)}function h(u,l){let d=0,f=0,g=0,b=0,m=0,p=l.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){let _=u[y];if(_.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(_.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let R=n.rectArea[b];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(_.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(_.width*.5,0,0),R.halfHeight.set(0,_.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),b++}else if(_.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(_.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:h,state:n}}function cu(r,t){let e=new _b(r,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(l){i.push(l)}function o(l){n.push(l)}function c(l){e.setup(i,l)}function h(l){e.setupView(i,l)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function Mb(r,t){let e=new WeakMap;function i(s,a=0){let o=e.get(s),c;return o===void 0?(c=new cu(r,t),e.set(s,[c])):a>=o.length?(c=new cu(r,t),o.push(c)):c=o[a],c}function n(){e=new WeakMap}return{get:i,dispose:n}}var fc=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pc=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eb=`uniform sampler2D shadow_pass;
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
}`;function Sb(r,t,e){let i=new sr,n=new Mt,s=new Mt,a=new ne,o=new fc({depthPacking:bf}),c=new pc,h={},u=e.maxTextureSize,l={[gi]:He,[He]:gi,[Le]:Le},d=new re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:wb,fragmentShader:Eb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ce;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new St(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let p=this.type;this.render=function(x,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;let E=r.getRenderTarget(),S=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),O=r.state;O.setBlending(vn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let it=p!==tn&&this.type===tn,P=p===tn&&this.type!==tn;for(let L=0,D=x.length;L<D;L++){let H=x[L],U=H.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;n.copy(U.mapSize);let k=U.getFrameExtents();if(n.multiply(k),s.copy(U.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/k.x),n.x=s.x*k.x,U.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/k.y),n.y=s.y*k.y,U.mapSize.y=s.y)),U.map===null||it===!0||P===!0){let q=this.type!==tn?{minFilter:Ee,magFilter:Ee}:{};U.map!==null&&U.map.dispose(),U.map=new ye(n.x,n.y,q),U.map.texture.name=H.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();let W=U.getViewportCount();for(let q=0;q<W;q++){let J=U.getViewport(q);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),O.viewport(a),U.updateMatrices(H,q),i=U.getFrustum(),_(w,A,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===tn&&y(U,A),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,S,N)};function y(x,w){let A=t.update(b);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new ye(n.x,n.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(w,null,A,d,b,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(w,null,A,f,b,null)}function v(x,w,A,E){let S=null,N=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(N!==void 0)S=N;else if(S=A.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let O=S.uuid,it=w.uuid,P=h[O];P===void 0&&(P={},h[O]=P);let L=P[it];L===void 0&&(L=S.clone(),P[it]=L,w.addEventListener("dispose",R)),S=L}if(S.visible=w.visible,S.wireframe=w.wireframe,E===tn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:l[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=r.properties.get(S);O.light=A}return S}function _(x,w,A,E,S){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&S===tn)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);let it=t.update(x),P=x.material;if(Array.isArray(P)){let L=it.groups;for(let D=0,H=L.length;D<H;D++){let U=L[D],k=P[U.materialIndex];if(k&&k.visible){let W=v(x,k,E,S);x.onBeforeShadow(r,x,w,A,it,W,U),r.renderBufferDirect(A,null,it,W,x,U),x.onAfterShadow(r,x,w,A,it,W,U)}}}else if(P.visible){let L=v(x,P,E,S);x.onBeforeShadow(r,x,w,A,it,L,null),r.renderBufferDirect(A,null,it,L,x,null),x.onAfterShadow(r,x,w,A,it,L,null)}}let O=x.children;for(let it=0,P=O.length;it<P;it++)_(O[it],w,A,E,S)}function R(x){x.target.removeEventListener("dispose",R);for(let A in h){let E=h[A],S=x.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function Tb(r,t,e){let i=e.isWebGL2;function n(){let B=!1,yt=new ne,_t=null,zt=new ne(0,0,0,0);return{setMask:function(kt){_t!==kt&&!B&&(r.colorMask(kt,kt,kt,kt),_t=kt)},setLocked:function(kt){B=kt},setClear:function(kt,fe,pe,ze,Ke){Ke===!0&&(kt*=ze,fe*=ze,pe*=ze),yt.set(kt,fe,pe,ze),zt.equals(yt)===!1&&(r.clearColor(kt,fe,pe,ze),zt.copy(yt))},reset:function(){B=!1,_t=null,zt.set(-1,0,0,0)}}}function s(){let B=!1,yt=null,_t=null,zt=null;return{setTest:function(kt){kt?ot(r.DEPTH_TEST):ct(r.DEPTH_TEST)},setMask:function(kt){yt!==kt&&!B&&(r.depthMask(kt),yt=kt)},setFunc:function(kt){if(_t!==kt){switch(kt){case Wd:r.depthFunc(r.NEVER);break;case qd:r.depthFunc(r.ALWAYS);break;case Xd:r.depthFunc(r.LESS);break;case ta:r.depthFunc(r.LEQUAL);break;case Yd:r.depthFunc(r.EQUAL);break;case jd:r.depthFunc(r.GEQUAL);break;case Kd:r.depthFunc(r.GREATER);break;case Qd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=kt}},setLocked:function(kt){B=kt},setClear:function(kt){zt!==kt&&(r.clearDepth(kt),zt=kt)},reset:function(){B=!1,yt=null,_t=null,zt=null}}}function a(){let B=!1,yt=null,_t=null,zt=null,kt=null,fe=null,pe=null,ze=null,Ke=null;return{setTest:function(me){B||(me?ot(r.STENCIL_TEST):ct(r.STENCIL_TEST))},setMask:function(me){yt!==me&&!B&&(r.stencilMask(me),yt=me)},setFunc:function(me,Qe,zi){(_t!==me||zt!==Qe||kt!==zi)&&(r.stencilFunc(me,Qe,zi),_t=me,zt=Qe,kt=zi)},setOp:function(me,Qe,zi){(fe!==me||pe!==Qe||ze!==zi)&&(r.stencilOp(me,Qe,zi),fe=me,pe=Qe,ze=zi)},setLocked:function(me){B=me},setClear:function(me){Ke!==me&&(r.clearStencil(me),Ke=me)},reset:function(){B=!1,yt=null,_t=null,zt=null,kt=null,fe=null,pe=null,ze=null,Ke=null}}}let o=new n,c=new s,h=new a,u=new WeakMap,l=new WeakMap,d={},f={},g=new WeakMap,b=[],m=null,p=!1,y=null,v=null,_=null,R=null,x=null,w=null,A=null,E=new Dt(0,0,0),S=0,N=!1,O=null,it=null,P=null,L=null,D=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,k=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=k>=2);let q=null,J={},G=r.getParameter(r.SCISSOR_BOX),z=r.getParameter(r.VIEWPORT),V=new ne().fromArray(G),st=new ne().fromArray(z);function Z(B,yt,_t,zt){let kt=new Uint8Array(4),fe=r.createTexture();r.bindTexture(B,fe),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pe=0;pe<_t;pe++)i&&(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)?r.texImage3D(yt,0,r.RGBA,1,1,zt,0,r.RGBA,r.UNSIGNED_BYTE,kt):r.texImage2D(yt+pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,kt);return fe}let rt={};rt[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),rt[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(rt[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),rt[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),ot(r.DEPTH_TEST),c.setFunc(ta),Pt(!1),F(Gh),ot(r.CULL_FACE),vt(vn);function ot(B){d[B]!==!0&&(r.enable(B),d[B]=!0)}function ct(B){d[B]!==!1&&(r.disable(B),d[B]=!1)}function Et(B,yt){return f[B]!==yt?(r.bindFramebuffer(B,yt),f[B]=yt,i&&(B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=yt),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=yt)),!0):!1}function X(B,yt){let _t=b,zt=!1;if(B)if(_t=g.get(yt),_t===void 0&&(_t=[],g.set(yt,_t)),B.isWebGLMultipleRenderTargets){let kt=B.texture;if(_t.length!==kt.length||_t[0]!==r.COLOR_ATTACHMENT0){for(let fe=0,pe=kt.length;fe<pe;fe++)_t[fe]=r.COLOR_ATTACHMENT0+fe;_t.length=kt.length,zt=!0}}else _t[0]!==r.COLOR_ATTACHMENT0&&(_t[0]=r.COLOR_ATTACHMENT0,zt=!0);else _t[0]!==r.BACK&&(_t[0]=r.BACK,zt=!0);zt&&(e.isWebGL2?r.drawBuffers(_t):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(_t))}function Bt(B){return m!==B?(r.useProgram(B),m=B,!0):!1}let wt={[nn]:r.FUNC_ADD,[Ld]:r.FUNC_SUBTRACT,[Id]:r.FUNC_REVERSE_SUBTRACT};if(i)wt[Xh]=r.MIN,wt[Yh]=r.MAX;else{let B=t.get("EXT_blend_minmax");B!==null&&(wt[Xh]=B.MIN_EXT,wt[Yh]=B.MAX_EXT)}let Rt={[Sa]:r.ZERO,[Fd]:r.ONE,[Dc]:r.SRC_COLOR,[er]:r.SRC_ALPHA,[Od]:r.SRC_ALPHA_SATURATE,[Nd]:r.DST_COLOR,[kd]:r.DST_ALPHA,[Dd]:r.ONE_MINUS_SRC_COLOR,[Zo]:r.ONE_MINUS_SRC_ALPHA,[zd]:r.ONE_MINUS_DST_COLOR,[Ud]:r.ONE_MINUS_DST_ALPHA,[Bd]:r.CONSTANT_COLOR,[Hd]:r.ONE_MINUS_CONSTANT_COLOR,[Vd]:r.CONSTANT_ALPHA,[Gd]:r.ONE_MINUS_CONSTANT_ALPHA};function vt(B,yt,_t,zt,kt,fe,pe,ze,Ke,me){if(B===vn){p===!0&&(ct(r.BLEND),p=!1);return}if(p===!1&&(ot(r.BLEND),p=!0),B!==Fc){if(B!==y||me!==N){if((v!==nn||x!==nn)&&(r.blendEquation(r.FUNC_ADD),v=nn,x=nn),me)switch(B){case xn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ms:r.blendFunc(r.ONE,r.ONE);break;case Wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case xn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ms:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,R=null,w=null,A=null,E.set(0,0,0),S=0,y=B,N=me}return}kt=kt||yt,fe=fe||_t,pe=pe||zt,(yt!==v||kt!==x)&&(r.blendEquationSeparate(wt[yt],wt[kt]),v=yt,x=kt),(_t!==_||zt!==R||fe!==w||pe!==A)&&(r.blendFuncSeparate(Rt[_t],Rt[zt],Rt[fe],Rt[pe]),_=_t,R=zt,w=fe,A=pe),(ze.equals(E)===!1||Ke!==S)&&(r.blendColor(ze.r,ze.g,ze.b,Ke),E.copy(ze),S=Ke),y=B,N=!1}function Nt(B,yt){B.side===Le?ct(r.CULL_FACE):ot(r.CULL_FACE);let _t=B.side===He;yt&&(_t=!_t),Pt(_t),B.blending===xn&&B.transparent===!1?vt(vn):vt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),o.setMask(B.colorWrite);let zt=B.stencilWrite;h.setTest(zt),zt&&(h.setMask(B.stencilWriteMask),h.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),h.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),K(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(B){O!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),O=B)}function F(B){B!==Rd?(ot(r.CULL_FACE),B!==it&&(B===Gh?r.cullFace(r.BACK):B===Cd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ct(r.CULL_FACE),it=B}function C(B){B!==P&&(U&&r.lineWidth(B),P=B)}function K(B,yt,_t){B?(ot(r.POLYGON_OFFSET_FILL),(L!==yt||D!==_t)&&(r.polygonOffset(yt,_t),L=yt,D=_t)):ct(r.POLYGON_OFFSET_FILL)}function lt(B){B?ot(r.SCISSOR_TEST):ct(r.SCISSOR_TEST)}function ut(B){B===void 0&&(B=r.TEXTURE0+H-1),q!==B&&(r.activeTexture(B),q=B)}function ft(B,yt,_t){_t===void 0&&(q===null?_t=r.TEXTURE0+H-1:_t=q);let zt=J[_t];zt===void 0&&(zt={type:void 0,texture:void 0},J[_t]=zt),(zt.type!==B||zt.texture!==yt)&&(q!==_t&&(r.activeTexture(_t),q=_t),r.bindTexture(B,yt||rt[B]),zt.type=B,zt.texture=yt)}function Y(){let B=J[q];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function at(){try{r.compressedTexImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{r.compressedTexImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function It(){try{r.texSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Gt(){try{r.texSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{r.texStorage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ht(){try{r.texStorage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ft(){try{r.texImage2D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{r.texImage3D.apply(r,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Yt(B){V.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),V.copy(B))}function oe(B){st.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),st.copy(B))}function Me(B,yt){let _t=l.get(yt);_t===void 0&&(_t=new WeakMap,l.set(yt,_t));let zt=_t.get(B);zt===void 0&&(zt=r.getUniformBlockIndex(yt,B.name),_t.set(B,zt))}function Zt(B,yt){let zt=l.get(yt).get(B);u.get(yt)!==zt&&(r.uniformBlockBinding(yt,zt,B.__bindingPointIndex),u.set(yt,zt))}function mt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},q=null,J={},f={},g=new WeakMap,b=[],m=null,p=!1,y=null,v=null,_=null,R=null,x=null,w=null,A=null,E=new Dt(0,0,0),S=0,N=!1,O=null,it=null,P=null,L=null,D=null,V.set(0,0,r.canvas.width,r.canvas.height),st.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:ot,disable:ct,bindFramebuffer:Et,drawBuffers:X,useProgram:Bt,setBlending:vt,setMaterial:Nt,setFlipSided:Pt,setCullFace:F,setLineWidth:C,setPolygonOffset:K,setScissorTest:lt,activeTexture:ut,bindTexture:ft,unbindTexture:Y,compressedTexImage2D:at,compressedTexImage3D:ht,texImage2D:Ft,texImage3D:Ct,updateUBOMapping:Me,uniformBlockBinding:Zt,texStorage2D:te,texStorage3D:Ht,texSubImage2D:It,texSubImage3D:Gt,compressedTexSubImage2D:dt,compressedTexSubImage3D:he,scissor:Yt,viewport:oe,reset:mt}}function Ab(r,t,e,i,n,s,a){let o=n.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,l,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,C){return f?new OffscreenCanvas(F,C):nr("canvas")}function b(F,C,K,lt){let ut=1;if((F.width>lt||F.height>lt)&&(ut=lt/Math.max(F.width,F.height)),ut<1||C===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){let ft=C?aa:Math.floor,Y=ft(ut*F.width),at=ft(ut*F.height);l===void 0&&(l=g(Y,at));let ht=K?g(Y,at):l;return ht.width=Y,ht.height=at,ht.getContext("2d").drawImage(F,0,0,Y,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+Y+"x"+at+")."),ht}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function m(F){return ic(F.width)&&ic(F.height)}function p(F){return o?!1:F.wrapS!==$e||F.wrapT!==$e||F.minFilter!==Ee&&F.minFilter!==ee}function y(F,C){return F.generateMipmaps&&C&&F.minFilter!==Ee&&F.minFilter!==ee}function v(F){r.generateMipmap(F)}function _(F,C,K,lt,ut=!1){if(o===!1)return C;if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ft=C;if(C===r.RED&&(K===r.FLOAT&&(ft=r.R32F),K===r.HALF_FLOAT&&(ft=r.R16F),K===r.UNSIGNED_BYTE&&(ft=r.R8)),C===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(ft=r.R8UI),K===r.UNSIGNED_SHORT&&(ft=r.R16UI),K===r.UNSIGNED_INT&&(ft=r.R32UI),K===r.BYTE&&(ft=r.R8I),K===r.SHORT&&(ft=r.R16I),K===r.INT&&(ft=r.R32I)),C===r.RG&&(K===r.FLOAT&&(ft=r.RG32F),K===r.HALF_FLOAT&&(ft=r.RG16F),K===r.UNSIGNED_BYTE&&(ft=r.RG8)),C===r.RGBA){let Y=ut?ia:ae.getTransfer(lt);K===r.FLOAT&&(ft=r.RGBA32F),K===r.HALF_FLOAT&&(ft=r.RGBA16F),K===r.UNSIGNED_BYTE&&(ft=Y===be?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function R(F,C,K){return y(F,K)===!0||F.isFramebufferTexture&&F.minFilter!==Ee&&F.minFilter!==ee?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function x(F){return F===Ee||F===ea||F===Qs?r.NEAREST:r.LINEAR}function w(F){let C=F.target;C.removeEventListener("dispose",w),E(C),C.isVideoTexture&&u.delete(C)}function A(F){let C=F.target;C.removeEventListener("dispose",A),N(C)}function E(F){let C=i.get(F);if(C.__webglInit===void 0)return;let K=F.source,lt=d.get(K);if(lt){let ut=lt[C.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&S(F),Object.keys(lt).length===0&&d.delete(K)}i.remove(F)}function S(F){let C=i.get(F);r.deleteTexture(C.__webglTexture);let K=F.source,lt=d.get(K);delete lt[C.__cacheKey],a.memory.textures--}function N(F){let C=F.texture,K=i.get(F),lt=i.get(C);if(lt.__webglTexture!==void 0&&(r.deleteTexture(lt.__webglTexture),a.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(K.__webglFramebuffer[ut]))for(let ft=0;ft<K.__webglFramebuffer[ut].length;ft++)r.deleteFramebuffer(K.__webglFramebuffer[ut][ft]);else r.deleteFramebuffer(K.__webglFramebuffer[ut]);K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer[ut])}else{if(Array.isArray(K.__webglFramebuffer))for(let ut=0;ut<K.__webglFramebuffer.length;ut++)r.deleteFramebuffer(K.__webglFramebuffer[ut]);else r.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&r.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ut=0;ut<K.__webglColorRenderbuffer.length;ut++)K.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(K.__webglColorRenderbuffer[ut]);K.__webglDepthRenderbuffer&&r.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let ut=0,ft=C.length;ut<ft;ut++){let Y=i.get(C[ut]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(C[ut])}i.remove(C),i.remove(F)}let O=0;function it(){O=0}function P(){let F=O;return F>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+n.maxTextures),O+=1,F}function L(F){let C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function D(F,C){let K=i.get(F);if(F.isVideoTexture&&Nt(F),F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){let lt=F.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(K,F,C);return}}e.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+C)}function H(F,C){let K=i.get(F);if(F.version>0&&K.__version!==F.version){V(K,F,C);return}e.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+C)}function U(F,C){let K=i.get(F);if(F.version>0&&K.__version!==F.version){V(K,F,C);return}e.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+C)}function k(F,C){let K=i.get(F);if(F.version>0&&K.__version!==F.version){st(K,F,C);return}e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+C)}let W={[ti]:r.REPEAT,[$e]:r.CLAMP_TO_EDGE,[ir]:r.MIRRORED_REPEAT},q={[Ee]:r.NEAREST,[ea]:r.NEAREST_MIPMAP_NEAREST,[Qs]:r.NEAREST_MIPMAP_LINEAR,[ee]:r.LINEAR,[kc]:r.LINEAR_MIPMAP_NEAREST,[ei]:r.LINEAR_MIPMAP_LINEAR},J={[xf]:r.NEVER,[Sf]:r.ALWAYS,[yf]:r.LESS,[Hu]:r.LEQUAL,[_f]:r.EQUAL,[Ef]:r.GEQUAL,[Mf]:r.GREATER,[wf]:r.NOTEQUAL};function G(F,C,K){if(K?(r.texParameteri(F,r.TEXTURE_WRAP_S,W[C.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,W[C.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,W[C.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,q[C.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,q[C.minFilter])):(r.texParameteri(F,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(F,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(C.wrapS!==$e||C.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(F,r.TEXTURE_MAG_FILTER,x(C.magFilter)),r.texParameteri(F,r.TEXTURE_MIN_FILTER,x(C.minFilter)),C.minFilter!==Ee&&C.minFilter!==ee&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,J[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let lt=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===Ee||C.minFilter!==Qs&&C.minFilter!==ei||C.type===sn&&t.has("OES_texture_float_linear")===!1||o===!1&&C.type===an&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(r.texParameterf(F,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,n.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function z(F,C){let K=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",w));let lt=C.source,ut=d.get(lt);ut===void 0&&(ut={},d.set(lt,ut));let ft=L(C);if(ft!==F.__cacheKey){ut[ft]===void 0&&(ut[ft]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ut[ft].usedTimes++;let Y=ut[F.__cacheKey];Y!==void 0&&(ut[F.__cacheKey].usedTimes--,Y.usedTimes===0&&S(C)),F.__cacheKey=ft,F.__webglTexture=ut[ft].texture}return K}function V(F,C,K){let lt=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(lt=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(lt=r.TEXTURE_3D);let ut=z(F,C),ft=C.source;e.bindTexture(lt,F.__webglTexture,r.TEXTURE0+K);let Y=i.get(ft);if(ft.version!==Y.__version||ut===!0){e.activeTexture(r.TEXTURE0+K);let at=ae.getPrimaries(ae.workingColorSpace),ht=C.colorSpace===ai?null:ae.getPrimaries(C.colorSpace),It=C.colorSpace===ai||at===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Gt=p(C)&&m(C.image)===!1,dt=b(C.image,Gt,!1,n.maxTextureSize);dt=Pt(C,dt);let he=m(dt)||o,te=s.convert(C.format,C.colorSpace),Ht=s.convert(C.type),Ft=_(C.internalFormat,te,Ht,C.colorSpace,C.isVideoTexture);G(lt,C,he);let Ct,Yt=C.mipmaps,oe=o&&C.isVideoTexture!==!0&&Ft!==Nu,Me=Y.__version===void 0||ut===!0,Zt=R(C,dt,he);if(C.isDepthTexture)Ft=r.DEPTH_COMPONENT,o?C.type===sn?Ft=r.DEPTH_COMPONENT32F:C.type===gn?Ft=r.DEPTH_COMPONENT24:C.type===zn?Ft=r.DEPTH24_STENCIL8:Ft=r.DEPTH_COMPONENT16:C.type===sn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===On&&Ft===r.DEPTH_COMPONENT&&C.type!==Uc&&C.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=gn,Ht=s.convert(C.type)),C.format===Ss&&Ft===r.DEPTH_COMPONENT&&(Ft=r.DEPTH_STENCIL,C.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=zn,Ht=s.convert(C.type))),Me&&(oe?e.texStorage2D(r.TEXTURE_2D,1,Ft,dt.width,dt.height):e.texImage2D(r.TEXTURE_2D,0,Ft,dt.width,dt.height,0,te,Ht,null));else if(C.isDataTexture)if(Yt.length>0&&he){oe&&Me&&e.texStorage2D(r.TEXTURE_2D,Zt,Ft,Yt[0].width,Yt[0].height);for(let mt=0,B=Yt.length;mt<B;mt++)Ct=Yt[mt],oe?e.texSubImage2D(r.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,te,Ht,Ct.data):e.texImage2D(r.TEXTURE_2D,mt,Ft,Ct.width,Ct.height,0,te,Ht,Ct.data);C.generateMipmaps=!1}else oe?(Me&&e.texStorage2D(r.TEXTURE_2D,Zt,Ft,dt.width,dt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,dt.width,dt.height,te,Ht,dt.data)):e.texImage2D(r.TEXTURE_2D,0,Ft,dt.width,dt.height,0,te,Ht,dt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){oe&&Me&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,Ft,Yt[0].width,Yt[0].height,dt.depth);for(let mt=0,B=Yt.length;mt<B;mt++)Ct=Yt[mt],C.format!==ue?te!==null?oe?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Ct.width,Ct.height,dt.depth,te,Ct.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,Ft,Ct.width,Ct.height,dt.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Ct.width,Ct.height,dt.depth,te,Ht,Ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,mt,Ft,Ct.width,Ct.height,dt.depth,0,te,Ht,Ct.data)}else{oe&&Me&&e.texStorage2D(r.TEXTURE_2D,Zt,Ft,Yt[0].width,Yt[0].height);for(let mt=0,B=Yt.length;mt<B;mt++)Ct=Yt[mt],C.format!==ue?te!==null?oe?e.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,te,Ct.data):e.compressedTexImage2D(r.TEXTURE_2D,mt,Ft,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage2D(r.TEXTURE_2D,mt,0,0,Ct.width,Ct.height,te,Ht,Ct.data):e.texImage2D(r.TEXTURE_2D,mt,Ft,Ct.width,Ct.height,0,te,Ht,Ct.data)}else if(C.isDataArrayTexture)oe?(Me&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,Ft,dt.width,dt.height,dt.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,te,Ht,dt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,dt.width,dt.height,dt.depth,0,te,Ht,dt.data);else if(C.isData3DTexture)oe?(Me&&e.texStorage3D(r.TEXTURE_3D,Zt,Ft,dt.width,dt.height,dt.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,te,Ht,dt.data)):e.texImage3D(r.TEXTURE_3D,0,Ft,dt.width,dt.height,dt.depth,0,te,Ht,dt.data);else if(C.isFramebufferTexture){if(Me)if(oe)e.texStorage2D(r.TEXTURE_2D,Zt,Ft,dt.width,dt.height);else{let mt=dt.width,B=dt.height;for(let yt=0;yt<Zt;yt++)e.texImage2D(r.TEXTURE_2D,yt,Ft,mt,B,0,te,Ht,null),mt>>=1,B>>=1}}else if(Yt.length>0&&he){oe&&Me&&e.texStorage2D(r.TEXTURE_2D,Zt,Ft,Yt[0].width,Yt[0].height);for(let mt=0,B=Yt.length;mt<B;mt++)Ct=Yt[mt],oe?e.texSubImage2D(r.TEXTURE_2D,mt,0,0,te,Ht,Ct):e.texImage2D(r.TEXTURE_2D,mt,Ft,te,Ht,Ct);C.generateMipmaps=!1}else oe?(Me&&e.texStorage2D(r.TEXTURE_2D,Zt,Ft,dt.width,dt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,te,Ht,dt)):e.texImage2D(r.TEXTURE_2D,0,Ft,te,Ht,dt);y(C,he)&&v(lt),Y.__version=ft.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function st(F,C,K){if(C.image.length!==6)return;let lt=z(F,C),ut=C.source;e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+K);let ft=i.get(ut);if(ut.version!==ft.__version||lt===!0){e.activeTexture(r.TEXTURE0+K);let Y=ae.getPrimaries(ae.workingColorSpace),at=C.colorSpace===ai?null:ae.getPrimaries(C.colorSpace),ht=C.colorSpace===ai||Y===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let It=C.isCompressedTexture||C.image[0].isCompressedTexture,Gt=C.image[0]&&C.image[0].isDataTexture,dt=[];for(let mt=0;mt<6;mt++)!It&&!Gt?dt[mt]=b(C.image[mt],!1,!0,n.maxCubemapSize):dt[mt]=Gt?C.image[mt].image:C.image[mt],dt[mt]=Pt(C,dt[mt]);let he=dt[0],te=m(he)||o,Ht=s.convert(C.format,C.colorSpace),Ft=s.convert(C.type),Ct=_(C.internalFormat,Ht,Ft,C.colorSpace),Yt=o&&C.isVideoTexture!==!0,oe=ft.__version===void 0||lt===!0,Me=R(C,he,te);G(r.TEXTURE_CUBE_MAP,C,te);let Zt;if(It){Yt&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Me,Ct,he.width,he.height);for(let mt=0;mt<6;mt++){Zt=dt[mt].mipmaps;for(let B=0;B<Zt.length;B++){let yt=Zt[B];C.format!==ue?Ht!==null?Yt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B,0,0,yt.width,yt.height,Ht,yt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B,Ct,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B,0,0,yt.width,yt.height,Ht,Ft,yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B,Ct,yt.width,yt.height,0,Ht,Ft,yt.data)}}}else{Zt=C.mipmaps,Yt&&oe&&(Zt.length>0&&Me++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Me,Ct,dt[0].width,dt[0].height));for(let mt=0;mt<6;mt++)if(Gt){Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,dt[mt].width,dt[mt].height,Ht,Ft,dt[mt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Ct,dt[mt].width,dt[mt].height,0,Ht,Ft,dt[mt].data);for(let B=0;B<Zt.length;B++){let _t=Zt[B].image[mt].image;Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B+1,0,0,_t.width,_t.height,Ht,Ft,_t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B+1,Ct,_t.width,_t.height,0,Ht,Ft,_t.data)}}else{Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ht,Ft,dt[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Ct,Ht,Ft,dt[mt]);for(let B=0;B<Zt.length;B++){let yt=Zt[B];Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B+1,0,0,Ht,Ft,yt.image[mt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,B+1,Ct,Ht,Ft,yt.image[mt])}}}y(C,te)&&v(r.TEXTURE_CUBE_MAP),ft.__version=ut.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function Z(F,C,K,lt,ut,ft){let Y=s.convert(K.format,K.colorSpace),at=s.convert(K.type),ht=_(K.internalFormat,Y,at,K.colorSpace);if(!i.get(C).__hasExternalTextures){let Gt=Math.max(1,C.width>>ft),dt=Math.max(1,C.height>>ft);ut===r.TEXTURE_3D||ut===r.TEXTURE_2D_ARRAY?e.texImage3D(ut,ft,ht,Gt,dt,C.depth,0,Y,at,null):e.texImage2D(ut,ft,ht,Gt,dt,0,Y,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,F),vt(C)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,ut,i.get(K).__webglTexture,0,Rt(C)):(ut===r.TEXTURE_2D||ut>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,lt,ut,i.get(K).__webglTexture,ft),e.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(F,C,K){if(r.bindRenderbuffer(r.RENDERBUFFER,F),C.depthBuffer&&!C.stencilBuffer){let lt=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(K||vt(C)){let ut=C.depthTexture;ut&&ut.isDepthTexture&&(ut.type===sn?lt=r.DEPTH_COMPONENT32F:ut.type===gn&&(lt=r.DEPTH_COMPONENT24));let ft=Rt(C);vt(C)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,lt,C.width,C.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,lt,C.width,C.height)}else r.renderbufferStorage(r.RENDERBUFFER,lt,C.width,C.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,F)}else if(C.depthBuffer&&C.stencilBuffer){let lt=Rt(C);K&&vt(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,r.DEPTH24_STENCIL8,C.width,C.height):vt(C)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,r.DEPTH24_STENCIL8,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,F)}else{let lt=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ut=0;ut<lt.length;ut++){let ft=lt[ut],Y=s.convert(ft.format,ft.colorSpace),at=s.convert(ft.type),ht=_(ft.internalFormat,Y,at,ft.colorSpace),It=Rt(C);K&&vt(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,It,ht,C.width,C.height):vt(C)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,It,ht,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,ht,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ot(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),D(C.depthTexture,0);let lt=i.get(C.depthTexture).__webglTexture,ut=Rt(C);if(C.depthTexture.format===On)vt(C)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,lt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,lt,0);else if(C.depthTexture.format===Ss)vt(C)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,lt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function ct(F){let C=i.get(F),K=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ot(C.__webglFramebuffer,F)}else if(K){C.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[lt]),C.__webglDepthbuffer[lt]=r.createRenderbuffer(),rt(C.__webglDepthbuffer[lt],F,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),rt(C.__webglDepthbuffer,F,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(F,C,K){let lt=i.get(F);C!==void 0&&Z(lt.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&ct(F)}function X(F){let C=F.texture,K=i.get(F),lt=i.get(C);F.addEventListener("dispose",A),F.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture()),lt.__version=C.version,a.memory.textures++);let ut=F.isWebGLCubeRenderTarget===!0,ft=F.isWebGLMultipleRenderTargets===!0,Y=m(F)||o;if(ut){K.__webglFramebuffer=[];for(let at=0;at<6;at++)if(o&&C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer[at]=[];for(let ht=0;ht<C.mipmaps.length;ht++)K.__webglFramebuffer[at][ht]=r.createFramebuffer()}else K.__webglFramebuffer[at]=r.createFramebuffer()}else{if(o&&C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer=[];for(let at=0;at<C.mipmaps.length;at++)K.__webglFramebuffer[at]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(ft)if(n.drawBuffers){let at=F.texture;for(let ht=0,It=at.length;ht<It;ht++){let Gt=i.get(at[ht]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&F.samples>0&&vt(F)===!1){let at=ft?C:[C];K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ht=0;ht<at.length;ht++){let It=at[ht];K.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[ht]);let Gt=s.convert(It.format,It.colorSpace),dt=s.convert(It.type),he=_(It.internalFormat,Gt,dt,It.colorSpace,F.isXRRenderTarget===!0),te=Rt(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,te,he,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,K.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),rt(K.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){e.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture),G(r.TEXTURE_CUBE_MAP,C,Y);for(let at=0;at<6;at++)if(o&&C.mipmaps&&C.mipmaps.length>0)for(let ht=0;ht<C.mipmaps.length;ht++)Z(K.__webglFramebuffer[at][ht],F,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ht);else Z(K.__webglFramebuffer[at],F,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);y(C,Y)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){let at=F.texture;for(let ht=0,It=at.length;ht<It;ht++){let Gt=at[ht],dt=i.get(Gt);e.bindTexture(r.TEXTURE_2D,dt.__webglTexture),G(r.TEXTURE_2D,Gt,Y),Z(K.__webglFramebuffer,F,Gt,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),y(Gt,Y)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(o?at=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,lt.__webglTexture),G(at,C,Y),o&&C.mipmaps&&C.mipmaps.length>0)for(let ht=0;ht<C.mipmaps.length;ht++)Z(K.__webglFramebuffer[ht],F,C,r.COLOR_ATTACHMENT0,at,ht);else Z(K.__webglFramebuffer,F,C,r.COLOR_ATTACHMENT0,at,0);y(C,Y)&&v(at),e.unbindTexture()}F.depthBuffer&&ct(F)}function Bt(F){let C=m(F)||o,K=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let lt=0,ut=K.length;lt<ut;lt++){let ft=K[lt];if(y(ft,C)){let Y=F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,at=i.get(ft).__webglTexture;e.bindTexture(Y,at),v(Y),e.unbindTexture()}}}function wt(F){if(o&&F.samples>0&&vt(F)===!1){let C=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],K=F.width,lt=F.height,ut=r.COLOR_BUFFER_BIT,ft=[],Y=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=i.get(F),ht=F.isWebGLMultipleRenderTargets===!0;if(ht)for(let It=0;It<C.length;It++)e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let It=0;It<C.length;It++){ft.push(r.COLOR_ATTACHMENT0+It),F.depthBuffer&&ft.push(Y);let Gt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Gt===!1&&(F.depthBuffer&&(ut|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&(ut|=r.STENCIL_BUFFER_BIT)),ht&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,at.__webglColorRenderbuffer[It]),Gt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Y]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Y])),ht){let dt=i.get(C[It]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,dt,0)}r.blitFramebuffer(0,0,K,lt,0,0,K,lt,ut,r.NEAREST),h&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let It=0;It<C.length;It++){e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,at.__webglColorRenderbuffer[It]);let Gt=i.get(C[It]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,Gt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Rt(F){return Math.min(n.maxSamples,F.samples)}function vt(F){let C=i.get(F);return o&&F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Nt(F){let C=a.render.frame;u.get(F)!==C&&(u.set(F,C),F.update())}function Pt(F,C){let K=F.colorSpace,lt=F.format,ut=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===ec||K!==Ce&&K!==ai&&(ae.getTransfer(K)===be?o===!1?t.has("EXT_sRGB")===!0&&lt===ue?(F.format=ec,F.minFilter=ee,F.generateMipmaps=!1):C=oa.sRGBToLinear(C):(lt!==ue||ut!==Ve)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),C}this.allocateTextureUnit=P,this.resetTextureUnits=it,this.setTexture2D=D,this.setTexture2DArray=H,this.setTexture3D=U,this.setTextureCube=k,this.rebindTextures=Et,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=vt}function Rb(r,t,e){let i=e.isWebGL2;function n(s,a=ai){let o,c=ae.getTransfer(a);if(s===Ve)return r.UNSIGNED_BYTE;if(s===Iu)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Fu)return r.UNSIGNED_SHORT_5_5_5_1;if(s===of)return r.BYTE;if(s===cf)return r.SHORT;if(s===Uc)return r.UNSIGNED_SHORT;if(s===Lu)return r.INT;if(s===gn)return r.UNSIGNED_INT;if(s===sn)return r.FLOAT;if(s===an)return i?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===hf)return r.ALPHA;if(s===ue)return r.RGBA;if(s===lf)return r.LUMINANCE;if(s===uf)return r.LUMINANCE_ALPHA;if(s===On)return r.DEPTH_COMPONENT;if(s===Ss)return r.DEPTH_STENCIL;if(s===ec)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===df)return r.RED;if(s===Du)return r.RED_INTEGER;if(s===ff)return r.RG;if(s===ku)return r.RG_INTEGER;if(s===Uu)return r.RGBA_INTEGER;if(s===mo||s===go||s===bo||s===vo)if(c===be)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===mo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===mo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===go)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Kh||s===Qh||s===Zh||s===Jh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Kh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$h||s===tl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===$h)return c===be?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===tl)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===el||s===il||s===nl||s===sl||s===rl||s===al||s===ol||s===cl||s===hl||s===ll||s===ul||s===dl||s===fl||s===pl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===el)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===il)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nl)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sl)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rl)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===al)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ol)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cl)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hl)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ll)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ul)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dl)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fl)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pl)return c===be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xo||s===ml||s===gl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===xo)return c===be?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ml)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pf||s===bl||s===vl||s===xl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===xo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===bl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zn?i?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}var mc=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},de=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cb={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,i),p=this._getHandJoint(h,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=h.joints["index-finger-tip"],l=h.joints["thumb-tip"],d=u.position.distanceTo(l.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new de;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},gc=class extends yn{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,h=null,u=null,l=null,d=null,f=null,g=null,b=e.getContextAttributes(),m=null,p=null,y=[],v=[],_=new Mt,R=null,x=new De;x.layers.enable(1),x.viewport=new ne;let w=new De;w.layers.enable(2),w.viewport=new ne;let A=[x,w],E=new mc;E.layers.enable(1),E.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let z=y[G];return z===void 0&&(z=new tr,y[G]=z),z.getTargetRaySpace()},this.getControllerGrip=function(G){let z=y[G];return z===void 0&&(z=new tr,y[G]=z),z.getGripSpace()},this.getHand=function(G){let z=y[G];return z===void 0&&(z=new tr,y[G]=z),z.getHandSpace()};function O(G){let z=v.indexOf(G.inputSource);if(z===-1)return;let V=y[z];V!==void 0&&(V.update(G.inputSource,G.frame,h||a),V.dispatchEvent({type:G.type,data:G.inputSource}))}function it(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",it),n.removeEventListener("inputsourceschange",P);for(let G=0;G<y.length;G++){let z=v[G];z!==null&&(v[G]=null,y[G].disconnect(z))}S=null,N=null,t.setRenderTarget(m),f=null,d=null,l=null,n=null,p=null,J.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(G){h=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return l},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",it),n.addEventListener("inputsourceschange",P),b.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(_),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let z={antialias:n.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,z),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ye(f.framebufferWidth,f.framebufferHeight,{format:ue,type:Ve,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil})}else{let z=null,V=null,st=null;b.depth&&(st=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,z=b.stencil?Ss:On,V=b.stencil?zn:gn);let Z={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};l=new XRWebGLBinding(n,e),d=l.createProjectionLayer(Z),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new ye(d.textureWidth,d.textureHeight,{format:ue,type:Ve,depthTexture:new Vn(d.textureWidth,d.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0});let rt=t.properties.get(p);rt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await n.requestReferenceSpace(o),J.setContext(n),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function P(G){for(let z=0;z<G.removed.length;z++){let V=G.removed[z],st=v.indexOf(V);st>=0&&(v[st]=null,y[st].disconnect(V))}for(let z=0;z<G.added.length;z++){let V=G.added[z],st=v.indexOf(V);if(st===-1){for(let rt=0;rt<y.length;rt++)if(rt>=v.length){v.push(V),st=rt;break}else if(v[rt]===null){v[rt]=V,st=rt;break}if(st===-1)break}let Z=y[st];Z&&Z.connect(V)}}let L=new M,D=new M;function H(G,z,V){L.setFromMatrixPosition(z.matrixWorld),D.setFromMatrixPosition(V.matrixWorld);let st=L.distanceTo(D),Z=z.projectionMatrix.elements,rt=V.projectionMatrix.elements,ot=Z[14]/(Z[10]-1),ct=Z[14]/(Z[10]+1),Et=(Z[9]+1)/Z[5],X=(Z[9]-1)/Z[5],Bt=(Z[8]-1)/Z[0],wt=(rt[8]+1)/rt[0],Rt=ot*Bt,vt=ot*wt,Nt=st/(-Bt+wt),Pt=Nt*-Bt;z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Pt),G.translateZ(Nt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let F=ot+Nt,C=ct+Nt,K=Rt-Pt,lt=vt+(st-Pt),ut=Et*ct/C*F,ft=X*ct/C*F;G.projectionMatrix.makePerspective(K,lt,ut,ft,F,C),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function U(G,z){z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;E.near=w.near=x.near=G.near,E.far=w.far=x.far=G.far,(S!==E.near||N!==E.far)&&(n.updateRenderState({depthNear:E.near,depthFar:E.far}),S=E.near,N=E.far);let z=G.parent,V=E.cameras;U(E,z);for(let st=0;st<V.length;st++)U(V[st],z);V.length===2?H(E,x,w):E.projectionMatrix.copy(x.projectionMatrix),k(G,E,z)};function k(G,z,V){V===null?G.matrix.copy(z.matrixWorld):(G.matrix.copy(V.matrixWorld),G.matrix.invert(),G.matrix.multiply(z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(z.projectionMatrix),G.projectionMatrixInverse.copy(z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=As*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let W=null;function q(G,z){if(u=z.getViewerPose(h||a),g=z,u!==null){let V=u.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let st=!1;V.length!==E.cameras.length&&(E.cameras.length=0,st=!0);for(let Z=0;Z<V.length;Z++){let rt=V[Z],ot=null;if(f!==null)ot=f.getViewport(rt);else{let Et=l.getViewSubImage(d,rt);ot=Et.viewport,Z===0&&(t.setRenderTargetTextures(p,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(p))}let ct=A[Z];ct===void 0&&(ct=new De,ct.layers.enable(Z),ct.viewport=new ne,A[Z]=ct),ct.matrix.fromArray(rt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(rt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(ot.x,ot.y,ot.width,ot.height),Z===0&&(E.matrix.copy(ct.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),st===!0&&E.cameras.push(ct)}}for(let V=0;V<y.length;V++){let st=v[V],Z=y[V];st!==null&&Z!==void 0&&Z.update(st,z,h||a)}W&&W(G,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),g=null}let J=new qu;J.setAnimationLoop(q),this.setAnimationLoop=function(G){W=G},this.dispose=function(){}}};function Pb(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Wu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),l(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Lb(r,t,e,i){let n={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){let _=v.program;i.uniformBlockBinding(y,_)}function h(y,v){let _=n[y.id];_===void 0&&(g(y),_=u(y),n[y.id]=_,y.addEventListener("dispose",m));let R=v.program;i.updateUBOMapping(y,R);let x=t.render.frame;s[y.id]!==x&&(d(y),s[y.id]=x)}function u(y){let v=l();y.__bindingPointIndex=v;let _=r.createBuffer(),R=y.__size,x=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,R,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,_),_}function l(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=n[y.id],_=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let x=0,w=_.length;x<w;x++){let A=Array.isArray(_[x])?_[x]:[_[x]];for(let E=0,S=A.length;E<S;E++){let N=A[E];if(f(N,x,E,R)===!0){let O=N.__offset,it=Array.isArray(N.value)?N.value:[N.value],P=0;for(let L=0;L<it.length;L++){let D=it[L],H=b(D);typeof D=="number"||typeof D=="boolean"?(N.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,O+P,N.__data)):D.isMatrix3?(N.__data[0]=D.elements[0],N.__data[1]=D.elements[1],N.__data[2]=D.elements[2],N.__data[3]=0,N.__data[4]=D.elements[3],N.__data[5]=D.elements[4],N.__data[6]=D.elements[5],N.__data[7]=0,N.__data[8]=D.elements[6],N.__data[9]=D.elements[7],N.__data[10]=D.elements[8],N.__data[11]=0):(D.toArray(N.__data,P),P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,v,_,R){let x=y.value,w=v+"_"+_;if(R[w]===void 0)return typeof x=="number"||typeof x=="boolean"?R[w]=x:R[w]=x.clone(),!0;{let A=R[w];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return R[w]=x,!0}else if(A.equals(x)===!1)return A.copy(x),!0}return!1}function g(y){let v=y.uniforms,_=0,R=16;for(let w=0,A=v.length;w<A;w++){let E=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,N=E.length;S<N;S++){let O=E[S],it=Array.isArray(O.value)?O.value:[O.value];for(let P=0,L=it.length;P<L;P++){let D=it[P],H=b(D),U=_%R;U!==0&&R-U<H.boundary&&(_+=R-U),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=H.storage}}}let x=_%R;return x>0&&(_+=R-x),y.__size=_,y.__cache={},this}function b(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function p(){for(let y in n)r.deleteBuffer(n[y]);a=[],n={},s={}}return{bind:c,update:h,dispose:p}}var rr=class{constructor(t={}){let{canvas:e=Bf(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),b=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ve,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;let v=this,_=!1,R=0,x=0,w=null,A=-1,E=null,S=new ne,N=new ne,O=null,it=new Dt(0),P=0,L=e.width,D=e.height,H=1,U=null,k=null,W=new ne(0,0,L,D),q=new ne(0,0,L,D),J=!1,G=new sr,z=!1,V=!1,st=null,Z=new At,rt=new Mt,ot=new M,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Et(){return w===null?H:1}let X=i;function Bt(I,j){for(let tt=0;tt<I.length;tt++){let et=I[tt],$=e.getContext(et,j);if($!==null)return $}return null}try{let I={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ic}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",yt,!1),X===null){let j=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&j.shift(),X=Bt(j,I),X===null)throw Bt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let wt,Rt,vt,Nt,Pt,F,C,K,lt,ut,ft,Y,at,ht,It,Gt,dt,he,te,Ht,Ft,Ct,Yt,oe;function Me(){wt=new Qm(X),Rt=new Wm(X,wt,t),wt.init(Rt),Ct=new Rb(X,wt,Rt),vt=new Tb(X,wt,Rt),Nt=new $m(X),Pt=new pb,F=new Ab(X,wt,vt,Pt,Rt,Ct,Nt),C=new Xm(v),K=new Km(v),lt=new op(X,Rt),Yt=new Vm(X,wt,lt,Rt),ut=new Zm(X,lt,Nt,Yt),ft=new ng(X,ut,lt,Nt),te=new ig(X,Rt,F),Gt=new qm(Pt),Y=new fb(v,C,K,wt,Rt,Yt,Gt),at=new Pb(v,Pt),ht=new gb,It=new Mb(wt,Rt),he=new Hm(v,C,K,vt,ft,d,c),dt=new Sb(v,ft,Rt),oe=new Lb(X,Nt,Rt,vt),Ht=new Gm(X,wt,Nt,Rt),Ft=new Jm(X,wt,Nt,Rt),Nt.programs=Y.programs,v.capabilities=Rt,v.extensions=wt,v.properties=Pt,v.renderLists=ht,v.shadowMap=dt,v.state=vt,v.info=Nt}Me();let Zt=new gc(v,X);this.xr=Zt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let I=wt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=wt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(I){I!==void 0&&(H=I,this.setSize(L,D,!1))},this.getSize=function(I){return I.set(L,D)},this.setSize=function(I,j,tt=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=I,D=j,e.width=Math.floor(I*H),e.height=Math.floor(j*H),tt===!0&&(e.style.width=I+"px",e.style.height=j+"px"),this.setViewport(0,0,I,j)},this.getDrawingBufferSize=function(I){return I.set(L*H,D*H).floor()},this.setDrawingBufferSize=function(I,j,tt){L=I,D=j,H=tt,e.width=Math.floor(I*tt),e.height=Math.floor(j*tt),this.setViewport(0,0,I,j)},this.getCurrentViewport=function(I){return I.copy(S)},this.getViewport=function(I){return I.copy(W)},this.setViewport=function(I,j,tt,et){I.isVector4?W.set(I.x,I.y,I.z,I.w):W.set(I,j,tt,et),vt.viewport(S.copy(W).multiplyScalar(H).floor())},this.getScissor=function(I){return I.copy(q)},this.setScissor=function(I,j,tt,et){I.isVector4?q.set(I.x,I.y,I.z,I.w):q.set(I,j,tt,et),vt.scissor(N.copy(q).multiplyScalar(H).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(I){vt.setScissorTest(J=I)},this.setOpaqueSort=function(I){U=I},this.setTransparentSort=function(I){k=I},this.getClearColor=function(I){return I.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(I=!0,j=!0,tt=!0){let et=0;if(I){let $=!1;if(w!==null){let Tt=w.texture.format;$=Tt===Uu||Tt===ku||Tt===Du}if($){let Tt=w.texture.type,Lt=Tt===Ve||Tt===gn||Tt===Uc||Tt===zn||Tt===Iu||Tt===Fu,Ut=he.getClearColor(),Ot=he.getClearAlpha(),Kt=Ut.r,Wt=Ut.g,Xt=Ut.b;Lt?(f[0]=Kt,f[1]=Wt,f[2]=Xt,f[3]=Ot,X.clearBufferuiv(X.COLOR,0,f)):(g[0]=Kt,g[1]=Wt,g[2]=Xt,g[3]=Ot,X.clearBufferiv(X.COLOR,0,g))}else et|=X.COLOR_BUFFER_BIT}j&&(et|=X.DEPTH_BUFFER_BIT),tt&&(et|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),ht.dispose(),It.dispose(),Pt.dispose(),C.dispose(),K.dispose(),ft.dispose(),Yt.dispose(),oe.dispose(),Y.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Ke),Zt.removeEventListener("sessionend",me),st&&(st.dispose(),st=null),Qe.stop()};function mt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let I=Nt.autoReset,j=dt.enabled,tt=dt.autoUpdate,et=dt.needsUpdate,$=dt.type;Me(),Nt.autoReset=I,dt.enabled=j,dt.autoUpdate=tt,dt.needsUpdate=et,dt.type=$}function yt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function _t(I){let j=I.target;j.removeEventListener("dispose",_t),zt(j)}function zt(I){kt(I),Pt.remove(I)}function kt(I){let j=Pt.get(I).programs;j!==void 0&&(j.forEach(function(tt){Y.releaseProgram(tt)}),I.isShaderMaterial&&Y.releaseShaderCache(I))}this.renderBufferDirect=function(I,j,tt,et,$,Tt){j===null&&(j=ct);let Lt=$.isMesh&&$.matrixWorld.determinant()<0,Ut=Ed(I,j,tt,et,$);vt.setMaterial(et,Lt);let Ot=tt.index,Kt=1;if(et.wireframe===!0){if(Ot=ut.getWireframeAttribute(tt),Ot===void 0)return;Kt=2}let Wt=tt.drawRange,Xt=tt.attributes.position,Re=Wt.start*Kt,fi=(Wt.start+Wt.count)*Kt;Tt!==null&&(Re=Math.max(Re,Tt.start*Kt),fi=Math.min(fi,(Tt.start+Tt.count)*Kt)),Ot!==null?(Re=Math.max(Re,0),fi=Math.min(fi,Ot.count)):Xt!=null&&(Re=Math.max(Re,0),fi=Math.min(fi,Xt.count));let Oe=fi-Re;if(Oe<0||Oe===1/0)return;Yt.setup($,et,Ut,tt,Ot);let Yi,_e=Ht;if(Ot!==null&&(Yi=lt.get(Ot),_e=Ft,_e.setIndex(Yi)),$.isMesh)et.wireframe===!0?(vt.setLineWidth(et.wireframeLinewidth*Et()),_e.setMode(X.LINES)):_e.setMode(X.TRIANGLES);else if($.isLine){let Jt=et.linewidth;Jt===void 0&&(Jt=1),vt.setLineWidth(Jt*Et()),$.isLineSegments?_e.setMode(X.LINES):$.isLineLoop?_e.setMode(X.LINE_LOOP):_e.setMode(X.LINE_STRIP)}else $.isPoints?_e.setMode(X.POINTS):$.isSprite&&_e.setMode(X.TRIANGLES);if($.isBatchedMesh)_e.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)_e.renderInstances(Re,Oe,$.count);else if(tt.isInstancedBufferGeometry){let Jt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,lo=Math.min(tt.instanceCount,Jt);_e.renderInstances(Re,Oe,lo)}else _e.render(Re,Oe)};function fe(I,j,tt){I.transparent===!0&&I.side===Le&&I.forceSinglePass===!1?(I.side=He,I.needsUpdate=!0,Er(I,j,tt),I.side=gi,I.needsUpdate=!0,Er(I,j,tt),I.side=Le):Er(I,j,tt)}this.compile=function(I,j,tt=null){tt===null&&(tt=I),m=It.get(tt),m.init(),y.push(m),tt.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),I!==tt&&I.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(v._useLegacyLights);let et=new Set;return I.traverse(function($){let Tt=$.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){let Ut=Tt[Lt];fe(Ut,tt,$),et.add(Ut)}else fe(Tt,tt,$),et.add(Tt)}),y.pop(),m=null,et},this.compileAsync=function(I,j,tt=null){let et=this.compile(I,j,tt);return new Promise($=>{function Tt(){if(et.forEach(function(Lt){Pt.get(Lt).currentProgram.isReady()&&et.delete(Lt)}),et.size===0){$(I);return}setTimeout(Tt,10)}wt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let pe=null;function ze(I){pe&&pe(I)}function Ke(){Qe.stop()}function me(){Qe.start()}let Qe=new qu;Qe.setAnimationLoop(ze),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(I){pe=I,Zt.setAnimationLoop(I),I===null?Qe.stop():Qe.start()},Zt.addEventListener("sessionstart",Ke),Zt.addEventListener("sessionend",me),this.render=function(I,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(j),j=Zt.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,j,w),m=It.get(I,y.length),m.init(),y.push(m),Z.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G.setFromProjectionMatrix(Z),V=this.localClippingEnabled,z=Gt.init(this.clippingPlanes,V),b=ht.get(I,p.length),b.init(),p.push(b),zi(I,j,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(U,k),this.info.render.frame++,z===!0&&Gt.beginShadows();let tt=m.state.shadowsArray;if(dt.render(tt,I,j),z===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(b,I),m.setupLights(v._useLegacyLights),j.isArrayCamera){let et=j.cameras;for(let $=0,Tt=et.length;$<Tt;$++){let Lt=et[$];Nh(b,I,Lt,Lt.viewport)}}else Nh(b,I,j);w!==null&&(F.updateMultisampleRenderTarget(w),F.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(v,I,j),Yt.resetDefaultState(),A=-1,E=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function zi(I,j,tt,et){if(I.visible===!1)return;if(I.layers.test(j.layers)){if(I.isGroup)tt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(j);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||G.intersectsSprite(I)){et&&ot.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Z);let Lt=ft.update(I),Ut=I.material;Ut.visible&&b.push(I,Lt,Ut,tt,ot.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||G.intersectsObject(I))){let Lt=ft.update(I),Ut=I.material;if(et&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ot.copy(I.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),ot.copy(Lt.boundingSphere.center)),ot.applyMatrix4(I.matrixWorld).applyMatrix4(Z)),Array.isArray(Ut)){let Ot=Lt.groups;for(let Kt=0,Wt=Ot.length;Kt<Wt;Kt++){let Xt=Ot[Kt],Re=Ut[Xt.materialIndex];Re&&Re.visible&&b.push(I,Lt,Re,tt,ot.z,Xt)}}else Ut.visible&&b.push(I,Lt,Ut,tt,ot.z,null)}}let Tt=I.children;for(let Lt=0,Ut=Tt.length;Lt<Ut;Lt++)zi(Tt[Lt],j,tt,et)}function Nh(I,j,tt,et){let $=I.opaque,Tt=I.transmissive,Lt=I.transparent;m.setupLightsView(tt),z===!0&&Gt.setGlobalState(v.clippingPlanes,tt),Tt.length>0&&wd($,Tt,j,tt),et&&vt.viewport(S.copy(et)),$.length>0&&wr($,j,tt),Tt.length>0&&wr(Tt,j,tt),Lt.length>0&&wr(Lt,j,tt),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function wd(I,j,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;let Tt=Rt.isWebGL2;st===null&&(st=new ye(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?an:Ve,minFilter:ei,samples:Tt?4:0})),v.getDrawingBufferSize(rt),Tt?st.setSize(rt.x,rt.y):st.setSize(aa(rt.x),aa(rt.y));let Lt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(it),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let Ut=v.toneMapping;v.toneMapping=Hi,wr(I,tt,et),F.updateMultisampleRenderTarget(st),F.updateRenderTargetMipmap(st);let Ot=!1;for(let Kt=0,Wt=j.length;Kt<Wt;Kt++){let Xt=j[Kt],Re=Xt.object,fi=Xt.geometry,Oe=Xt.material,Yi=Xt.group;if(Oe.side===Le&&Re.layers.test(et.layers)){let _e=Oe.side;Oe.side=He,Oe.needsUpdate=!0,zh(Re,tt,et,fi,Oe,Yi),Oe.side=_e,Oe.needsUpdate=!0,Ot=!0}}Ot===!0&&(F.updateMultisampleRenderTarget(st),F.updateRenderTargetMipmap(st)),v.setRenderTarget(Lt),v.setClearColor(it,P),v.toneMapping=Ut}function wr(I,j,tt){let et=j.isScene===!0?j.overrideMaterial:null;for(let $=0,Tt=I.length;$<Tt;$++){let Lt=I[$],Ut=Lt.object,Ot=Lt.geometry,Kt=et===null?Lt.material:et,Wt=Lt.group;Ut.layers.test(tt.layers)&&zh(Ut,j,tt,Ot,Kt,Wt)}}function zh(I,j,tt,et,$,Tt){I.onBeforeRender(v,j,tt,et,$,Tt),I.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),$.onBeforeRender(v,j,tt,et,I,Tt),$.transparent===!0&&$.side===Le&&$.forceSinglePass===!1?($.side=He,$.needsUpdate=!0,v.renderBufferDirect(tt,j,et,$,I,Tt),$.side=gi,$.needsUpdate=!0,v.renderBufferDirect(tt,j,et,$,I,Tt),$.side=Le):v.renderBufferDirect(tt,j,et,$,I,Tt),I.onAfterRender(v,j,tt,et,$,Tt)}function Er(I,j,tt){j.isScene!==!0&&(j=ct);let et=Pt.get(I),$=m.state.lights,Tt=m.state.shadowsArray,Lt=$.state.version,Ut=Y.getParameters(I,$.state,Tt,j,tt),Ot=Y.getProgramCacheKey(Ut),Kt=et.programs;et.environment=I.isMeshStandardMaterial?j.environment:null,et.fog=j.fog,et.envMap=(I.isMeshStandardMaterial?K:C).get(I.envMap||et.environment),Kt===void 0&&(I.addEventListener("dispose",_t),Kt=new Map,et.programs=Kt);let Wt=Kt.get(Ot);if(Wt!==void 0){if(et.currentProgram===Wt&&et.lightsStateVersion===Lt)return Bh(I,Ut),Wt}else Ut.uniforms=Y.getUniforms(I),I.onBuild(tt,Ut,v),I.onBeforeCompile(Ut,v),Wt=Y.acquireProgram(Ut,Ot),Kt.set(Ot,Wt),et.uniforms=Ut.uniforms;let Xt=et.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),Bh(I,Ut),et.needsLights=Td(I),et.lightsStateVersion=Lt,et.needsLights&&(Xt.ambientLightColor.value=$.state.ambient,Xt.lightProbe.value=$.state.probe,Xt.directionalLights.value=$.state.directional,Xt.directionalLightShadows.value=$.state.directionalShadow,Xt.spotLights.value=$.state.spot,Xt.spotLightShadows.value=$.state.spotShadow,Xt.rectAreaLights.value=$.state.rectArea,Xt.ltc_1.value=$.state.rectAreaLTC1,Xt.ltc_2.value=$.state.rectAreaLTC2,Xt.pointLights.value=$.state.point,Xt.pointLightShadows.value=$.state.pointShadow,Xt.hemisphereLights.value=$.state.hemi,Xt.directionalShadowMap.value=$.state.directionalShadowMap,Xt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Xt.spotShadowMap.value=$.state.spotShadowMap,Xt.spotLightMatrix.value=$.state.spotLightMatrix,Xt.spotLightMap.value=$.state.spotLightMap,Xt.pointShadowMap.value=$.state.pointShadowMap,Xt.pointShadowMatrix.value=$.state.pointShadowMatrix),et.currentProgram=Wt,et.uniformsList=null,Wt}function Oh(I){if(I.uniformsList===null){let j=I.currentProgram.getUniforms();I.uniformsList=_s.seqWithValue(j.seq,I.uniforms)}return I.uniformsList}function Bh(I,j){let tt=Pt.get(I);tt.outputColorSpace=j.outputColorSpace,tt.batching=j.batching,tt.instancing=j.instancing,tt.instancingColor=j.instancingColor,tt.skinning=j.skinning,tt.morphTargets=j.morphTargets,tt.morphNormals=j.morphNormals,tt.morphColors=j.morphColors,tt.morphTargetsCount=j.morphTargetsCount,tt.numClippingPlanes=j.numClippingPlanes,tt.numIntersection=j.numClipIntersection,tt.vertexAlphas=j.vertexAlphas,tt.vertexTangents=j.vertexTangents,tt.toneMapping=j.toneMapping}function Ed(I,j,tt,et,$){j.isScene!==!0&&(j=ct),F.resetTextureUnits();let Tt=j.fog,Lt=et.isMeshStandardMaterial?j.environment:null,Ut=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ce,Ot=(et.isMeshStandardMaterial?K:C).get(et.envMap||Lt),Kt=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Wt=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Xt=!!tt.morphAttributes.position,Re=!!tt.morphAttributes.normal,fi=!!tt.morphAttributes.color,Oe=Hi;et.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Oe=v.toneMapping);let Yi=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,_e=Yi!==void 0?Yi.length:0,Jt=Pt.get(et),lo=m.state.lights;if(z===!0&&(V===!0||I!==E)){let Mi=I===E&&et.id===A;Gt.setState(et,I,Mi)}let we=!1;et.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==lo.state.version||Jt.outputColorSpace!==Ut||$.isBatchedMesh&&Jt.batching===!1||!$.isBatchedMesh&&Jt.batching===!0||$.isInstancedMesh&&Jt.instancing===!1||!$.isInstancedMesh&&Jt.instancing===!0||$.isSkinnedMesh&&Jt.skinning===!1||!$.isSkinnedMesh&&Jt.skinning===!0||$.isInstancedMesh&&Jt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Jt.instancingColor===!1&&$.instanceColor!==null||Jt.envMap!==Ot||et.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Gt.numPlanes||Jt.numIntersection!==Gt.numIntersection)||Jt.vertexAlphas!==Kt||Jt.vertexTangents!==Wt||Jt.morphTargets!==Xt||Jt.morphNormals!==Re||Jt.morphColors!==fi||Jt.toneMapping!==Oe||Rt.isWebGL2===!0&&Jt.morphTargetsCount!==_e)&&(we=!0):(we=!0,Jt.__version=et.version);let Pn=Jt.currentProgram;we===!0&&(Pn=Er(et,j,$));let Hh=!1,Vs=!1,uo=!1,Xe=Pn.getUniforms(),Ln=Jt.uniforms;if(vt.useProgram(Pn.program)&&(Hh=!0,Vs=!0,uo=!0),et.id!==A&&(A=et.id,Vs=!0),Hh||E!==I){Xe.setValue(X,"projectionMatrix",I.projectionMatrix),Xe.setValue(X,"viewMatrix",I.matrixWorldInverse);let Mi=Xe.map.cameraPosition;Mi!==void 0&&Mi.setValue(X,ot.setFromMatrixPosition(I.matrixWorld)),Rt.logarithmicDepthBuffer&&Xe.setValue(X,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Xe.setValue(X,"isOrthographic",I.isOrthographicCamera===!0),E!==I&&(E=I,Vs=!0,uo=!0)}if($.isSkinnedMesh){Xe.setOptional(X,$,"bindMatrix"),Xe.setOptional(X,$,"bindMatrixInverse");let Mi=$.skeleton;Mi&&(Rt.floatVertexTextures?(Mi.boneTexture===null&&Mi.computeBoneTexture(),Xe.setValue(X,"boneTexture",Mi.boneTexture,F)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Xe.setOptional(X,$,"batchingTexture"),Xe.setValue(X,"batchingTexture",$._matricesTexture,F));let fo=tt.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0&&Rt.isWebGL2===!0)&&te.update($,tt,Pn),(Vs||Jt.receiveShadow!==$.receiveShadow)&&(Jt.receiveShadow=$.receiveShadow,Xe.setValue(X,"receiveShadow",$.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Ln.envMap.value=Ot,Ln.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Vs&&(Xe.setValue(X,"toneMappingExposure",v.toneMappingExposure),Jt.needsLights&&Sd(Ln,uo),Tt&&et.fog===!0&&at.refreshFogUniforms(Ln,Tt),at.refreshMaterialUniforms(Ln,et,H,D,st),_s.upload(X,Oh(Jt),Ln,F)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(_s.upload(X,Oh(Jt),Ln,F),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Xe.setValue(X,"center",$.center),Xe.setValue(X,"modelViewMatrix",$.modelViewMatrix),Xe.setValue(X,"normalMatrix",$.normalMatrix),Xe.setValue(X,"modelMatrix",$.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){let Mi=et.uniformsGroups;for(let po=0,Ad=Mi.length;po<Ad;po++)if(Rt.isWebGL2){let Vh=Mi[po];oe.update(Vh,Pn),oe.bind(Vh,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function Sd(I,j){I.ambientLightColor.needsUpdate=j,I.lightProbe.needsUpdate=j,I.directionalLights.needsUpdate=j,I.directionalLightShadows.needsUpdate=j,I.pointLights.needsUpdate=j,I.pointLightShadows.needsUpdate=j,I.spotLights.needsUpdate=j,I.spotLightShadows.needsUpdate=j,I.rectAreaLights.needsUpdate=j,I.hemisphereLights.needsUpdate=j}function Td(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,j,tt){Pt.get(I.texture).__webglTexture=j,Pt.get(I.depthTexture).__webglTexture=tt;let et=Pt.get(I);et.__hasExternalTextures=!0,et.__hasExternalTextures&&(et.__autoAllocateDepthBuffer=tt===void 0,et.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,j){let tt=Pt.get(I);tt.__webglFramebuffer=j,tt.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(I,j=0,tt=0){w=I,R=j,x=tt;let et=!0,$=null,Tt=!1,Lt=!1;if(I){let Ot=Pt.get(I);Ot.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(X.FRAMEBUFFER,null),et=!1):Ot.__webglFramebuffer===void 0?F.setupRenderTarget(I):Ot.__hasExternalTextures&&F.rebindTextures(I,Pt.get(I.texture).__webglTexture,Pt.get(I.depthTexture).__webglTexture);let Kt=I.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Lt=!0);let Wt=Pt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Wt[j])?$=Wt[j][tt]:$=Wt[j],Tt=!0):Rt.isWebGL2&&I.samples>0&&F.useMultisampledRTT(I)===!1?$=Pt.get(I).__webglMultisampledFramebuffer:Array.isArray(Wt)?$=Wt[tt]:$=Wt,S.copy(I.viewport),N.copy(I.scissor),O=I.scissorTest}else S.copy(W).multiplyScalar(H).floor(),N.copy(q).multiplyScalar(H).floor(),O=J;if(vt.bindFramebuffer(X.FRAMEBUFFER,$)&&Rt.drawBuffers&&et&&vt.drawBuffers(I,$),vt.viewport(S),vt.scissor(N),vt.setScissorTest(O),Tt){let Ot=Pt.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ot.__webglTexture,tt)}else if(Lt){let Ot=Pt.get(I.texture),Kt=j||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ot.__webglTexture,tt||0,Kt)}A=-1},this.readRenderTargetPixels=function(I,j,tt,et,$,Tt,Lt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Pt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){vt.bindFramebuffer(X.FRAMEBUFFER,Ut);try{let Ot=I.texture,Kt=Ot.format,Wt=Ot.type;if(Kt!==ue&&Ct.convert(Kt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xt=Wt===an&&(wt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&wt.has("EXT_color_buffer_float"));if(Wt!==Ve&&Ct.convert(Wt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===sn&&(Rt.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!Xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=I.width-et&&tt>=0&&tt<=I.height-$&&X.readPixels(j,tt,et,$,Ct.convert(Kt),Ct.convert(Wt),Tt)}finally{let Ot=w!==null?Pt.get(w).__webglFramebuffer:null;vt.bindFramebuffer(X.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(I,j,tt=0){let et=Math.pow(2,-tt),$=Math.floor(j.image.width*et),Tt=Math.floor(j.image.height*et);F.setTexture2D(j,0),X.copyTexSubImage2D(X.TEXTURE_2D,tt,0,0,I.x,I.y,$,Tt),vt.unbindTexture()},this.copyTextureToTexture=function(I,j,tt,et=0){let $=j.image.width,Tt=j.image.height,Lt=Ct.convert(tt.format),Ut=Ct.convert(tt.type);F.setTexture2D(tt,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,tt.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,tt.unpackAlignment),j.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,et,I.x,I.y,$,Tt,Lt,Ut,j.image.data):j.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,et,I.x,I.y,j.mipmaps[0].width,j.mipmaps[0].height,Lt,j.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,et,I.x,I.y,Lt,Ut,j.image),et===0&&tt.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(I,j,tt,et,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Tt=I.max.x-I.min.x+1,Lt=I.max.y-I.min.y+1,Ut=I.max.z-I.min.z+1,Ot=Ct.convert(et.format),Kt=Ct.convert(et.type),Wt;if(et.isData3DTexture)F.setTexture3D(et,0),Wt=X.TEXTURE_3D;else if(et.isDataArrayTexture||et.isCompressedArrayTexture)F.setTexture2DArray(et,0),Wt=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,et.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,et.unpackAlignment);let Xt=X.getParameter(X.UNPACK_ROW_LENGTH),Re=X.getParameter(X.UNPACK_IMAGE_HEIGHT),fi=X.getParameter(X.UNPACK_SKIP_PIXELS),Oe=X.getParameter(X.UNPACK_SKIP_ROWS),Yi=X.getParameter(X.UNPACK_SKIP_IMAGES),_e=tt.isCompressedTexture?tt.mipmaps[$]:tt.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,_e.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,_e.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,I.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,I.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,I.min.z),tt.isDataTexture||tt.isData3DTexture?X.texSubImage3D(Wt,$,j.x,j.y,j.z,Tt,Lt,Ut,Ot,Kt,_e.data):tt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Wt,$,j.x,j.y,j.z,Tt,Lt,Ut,Ot,_e.data)):X.texSubImage3D(Wt,$,j.x,j.y,j.z,Tt,Lt,Ut,Ot,Kt,_e),X.pixelStorei(X.UNPACK_ROW_LENGTH,Xt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Re),X.pixelStorei(X.UNPACK_SKIP_PIXELS,fi),X.pixelStorei(X.UNPACK_SKIP_ROWS,Oe),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Yi),$===0&&et.generateMipmaps&&X.generateMipmap(Wt),vt.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?F.setTextureCube(I,0):I.isData3DTexture?F.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?F.setTexture2DArray(I,0):F.setTexture2D(I,0),vt.unbindTexture()},this.resetState=function(){R=0,x=0,w=null,vt.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Nc?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===Ra?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ve?Bn:Ou}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Bn?ve:Ce}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},bc=class extends rr{};bc.prototype.isWebGL1Renderer=!0;var Si=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},ar=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ze=new M,or=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Vt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var hu=new M,lu=new ne,uu=new ne,Ib=new M,du=new At,Yr=new M,Go=new bi,fu=new At,Wo=new Rs,Gn=class extends St{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jh,this.bindMatrix=new At,this.bindMatrixInverse=new At,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ei),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Yr),this.boundingBox.expandByPoint(Yr)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bi),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Yr),this.boundingSphere.expandByPoint(Yr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(n),t.ray.intersectsSphere(Go)!==!1&&(fu.copy(n).invert(),Wo.copy(t.ray).applyMatrix4(fu),!(this.boundingBox!==null&&Wo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Wo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ne,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===jh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===af?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;lu.fromBufferAttribute(n.attributes.skinIndex,t),uu.fromBufferAttribute(n.attributes.skinWeight,t),hu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let a=uu.getComponent(s);if(a!==0){let o=lu.getComponent(s);du.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(Ib.copy(hu).applyMatrix4(du),a)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},Wn=class extends Se{constructor(){super(),this.isBone=!0,this.type="Bone"}},ki=class extends We{constructor(t=null,e=1,i=1,n,s,a,o,c,h=Ee,u=Ee,l,d){super(null,a,o,c,h,u,n,s,l,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pu=new At,Fb=new At,Is=class r{constructor(t=[],e=[]){this.uuid=Fi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new At)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new At;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=t.length;s<a;s++){let o=t[s]?t[s].matrixWorld:Fb;pu.multiplyMatrices(o,e[s]),pu.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new ki(e,t,t,ue,sn);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let s=t.bones[i],a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Wn),this.bones.push(a),this.boneInverses.push(new At().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){let a=e[n];t.bones.push(a.uuid);let o=i[n];t.boneInverses.push(o.toArray())}return t}},qe=class extends Vt{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},gs=new At,mu=new At,jr=[],gu=new Ei,Db=new At,Ys=new St,js=new bi,pa=class extends St{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qe(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Db)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gs),gu.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(gu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gs),js.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(i),t.ray.intersectsSphere(js)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,gs),mu.multiplyMatrices(i,gs),Ys.matrixWorld=mu,Ys.raycast(t,jr);for(let a=0,o=jr.length;a<o;a++){let c=jr[a];c.instanceId=s,c.object=this,e.push(c)}jr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qe(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var cr=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},bu=new M,vu=new M,xu=new At,qo=new Rs,Kr=new bi,Fs=class extends Se{constructor(t=new ce,e=new cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)bu.fromBufferAttribute(e,n-1),vu.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=bu.distanceTo(vu);t.setAttribute("lineDistance",new se(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(n),Kr.radius+=s,t.ray.intersectsSphere(Kr)===!1)return;xu.copy(n).invert(),qo.copy(t.ray).applyMatrix4(xu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=new M,u=new M,l=new M,d=new M,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=p,_=y-1;v<_;v+=f){let R=g.getX(v),x=g.getX(v+1);if(h.fromBufferAttribute(m,R),u.fromBufferAttribute(m,x),qo.distanceSqToSegment(h,u,d,l)>c)continue;d.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let v=p,_=y-1;v<_;v+=f){if(h.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),qo.distanceSqToSegment(h,u,d,l)>c)continue;d.applyMatrix4(this.matrixWorld);let x=t.ray.origin.distanceTo(d);x<t.near||x>t.far||e.push({distance:x,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},yu=new M,_u=new M,ma=class extends Fs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)yu.fromBufferAttribute(e,n),_u.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+yu.distanceTo(_u);t.setAttribute("lineDistance",new se(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ga=class extends Fs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},hr=class extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mu=new At,vc=new Rs,Qr=new bi,Zr=new M,ba=class extends Se{constructor(t=new ce,e=new hr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(n),Qr.radius+=s,t.ray.intersectsSphere(Qr)===!1)return;Mu.copy(n).invert(),vc.copy(t.ray).applyMatrix4(Mu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=i.index,l=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let m=h.getX(g);Zr.fromBufferAttribute(l,m),wu(Zr,m,c,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++)Zr.fromBufferAttribute(l,g),wu(Zr,g,c,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function wu(r,t,e,i,n,s,a){let o=vc.distanceSqToPoint(r);if(o<e){let c=new M;vc.closestPointToPoint(r,c),c.applyMatrix4(i);let h=n.ray.origin.distanceTo(c);if(h<n.near||h>n.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var lr=class extends We{constructor(t,e,i,n,s,a,o,c,h){super(t,e,i,n,s,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},xc=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,c=s-1,h;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),h=i[n]-a,h<0)o=n+1;else if(h>0)c=n-1;else{c=n;break}if(n=c,i[n]===a)return n/(s-1);let u=i[n],d=i[n+1]-u,f=(a-u)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),c=e||(a.isVector2?new Mt:new M);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new M,n=[],s=[],a=[],o=new M,c=new At;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new M)}s[0]=new M,a[0]=new M;let h=Number.MAX_VALUE,u=Math.abs(n[0].x),l=Math.abs(n[0].y),d=Math.abs(n[0].z);u<=h&&(h=u,i.set(1,0,0)),l<=h&&(h=l,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Fe(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Fe(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function Bc(){let r=0,t=0,e=0,i=0;function n(s,a,o,c){r=s,t=o,e=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,h){n(a,o,h*(o-s),h*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,h,u,l){let d=(a-s)/h-(o-s)/(h+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+l)+(c-o)/l;d*=u,f*=u,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var Jr=new M,Xo=new Bc,Yo=new Bc,jo=new Bc,va=class extends xc{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new M){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let h,u;this.closed||o>0?h=n[(o-1)%s]:(Jr.subVectors(n[0],n[1]).add(n[0]),h=Jr);let l=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?u=n[(o+2)%s]:(Jr.subVectors(n[s-1],n[s-2]).add(n[s-1]),u=Jr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(l),f),b=Math.pow(l.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),Xo.initNonuniformCatmullRom(h.x,l.x,d.x,u.x,g,b,m),Yo.initNonuniformCatmullRom(h.y,l.y,d.y,u.y,g,b,m),jo.initNonuniformCatmullRom(h.z,l.z,d.z,u.z,g,b,m)}else this.curveType==="catmullrom"&&(Xo.initCatmullRom(h.x,l.x,d.x,u.x,this.tension),Yo.initCatmullRom(h.y,l.y,d.y,u.y,this.tension),jo.initCatmullRom(h.z,l.z,d.z,u.z,this.tension));return i.set(Xo.calc(c),Yo.calc(c),jo.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new M().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var ur=class r extends ce{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Fe(n,0,Math.PI*2);let s=[],a=[],o=[],c=[],h=[],u=1/e,l=new M,d=new Mt,f=new M,g=new M,b=new M,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,b.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(b.x,b.y,b.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),c.push(f.x,f.y,f.z),b.copy(g)}for(let y=0;y<=e;y++){let v=i+y*u*n,_=Math.sin(v),R=Math.cos(v);for(let x=0;x<=t.length-1;x++){l.x=t[x].x*_,l.y=t[x].y,l.z=t[x].x*R,a.push(l.x,l.y,l.z),d.x=y/e,d.y=x/(t.length-1),o.push(d.x,d.y);let w=c[3*x+0]*_,A=c[3*x+1],E=c[3*x+0]*R;h.push(w,A,E)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){let _=v+y*t.length,R=_,x=_+t.length,w=_+t.length+1,A=_+1;s.push(R,x,A),s.push(w,A,x)}this.setIndex(s),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var dr=class r extends ce{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],c=[],h=new M,u=new Mt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let l=0,d=3;l<=e;l++,d+=3){let f=i+l/e*n;h.x=t*Math.cos(f),h.y=t*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let l=1;l<=e;l++)s.push(l,l+1,0);this.setIndex(s),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ii=class r extends ce{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let h=this;n=Math.floor(n),s=Math.floor(s);let u=[],l=[],d=[],f=[],g=0,b=[],m=i/2,p=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function y(){let _=new M,R=new M,x=0,w=(e-t)/i;for(let A=0;A<=s;A++){let E=[],S=A/s,N=S*(e-t)+t;for(let O=0;O<=n;O++){let it=O/n,P=it*c+o,L=Math.sin(P),D=Math.cos(P);R.x=N*L,R.y=-S*i+m,R.z=N*D,l.push(R.x,R.y,R.z),_.set(L,w,D).normalize(),d.push(_.x,_.y,_.z),f.push(it,1-S),E.push(g++)}b.push(E)}for(let A=0;A<n;A++)for(let E=0;E<s;E++){let S=b[E][A],N=b[E+1][A],O=b[E+1][A+1],it=b[E][A+1];u.push(S,N,it),u.push(N,O,it),x+=6}h.addGroup(p,x,0),p+=x}function v(_){let R=g,x=new Mt,w=new M,A=0,E=_===!0?t:e,S=_===!0?1:-1;for(let O=1;O<=n;O++)l.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let N=g;for(let O=0;O<=n;O++){let P=O/n*c+o,L=Math.cos(P),D=Math.sin(P);w.x=E*D,w.y=m*S,w.z=E*L,l.push(w.x,w.y,w.z),d.push(0,S,0),x.x=L*.5+.5,x.y=D*.5*S+.5,f.push(x.x,x.y),g++}for(let O=0;O<n;O++){let it=R+O,P=N+O;_===!0?u.push(P,P+1,it):u.push(P+1,P,it),A+=3}h.addGroup(p,A,_===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var yc=class r extends ce{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),h(i),u(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new M,_=new M,R=new M;for(let x=0;x<e.length;x+=3)f(e[x+0],v),f(e[x+1],_),f(e[x+2],R),c(v,_,R,y)}function c(y,v,_,R){let x=R+1,w=[];for(let A=0;A<=x;A++){w[A]=[];let E=y.clone().lerp(_,A/x),S=v.clone().lerp(_,A/x),N=x-A;for(let O=0;O<=N;O++)O===0&&A===x?w[A][O]=E:w[A][O]=E.clone().lerp(S,O/N)}for(let A=0;A<x;A++)for(let E=0;E<2*(x-A)-1;E++){let S=Math.floor(E/2);E%2===0?(d(w[A][S+1]),d(w[A+1][S]),d(w[A][S])):(d(w[A][S+1]),d(w[A+1][S+1]),d(w[A+1][S]))}}function h(y){let v=new M;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(y),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function u(){let y=new M;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];let _=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(_,1-R)}g(),l()}function l(){for(let y=0;y<a.length;y+=6){let v=a[y+0],_=a[y+2],R=a[y+4],x=Math.max(v,_,R),w=Math.min(v,_,R);x>.9&&w<.1&&(v<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,v){let _=y*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){let y=new M,v=new M,_=new M,R=new M,x=new Mt,w=new Mt,A=new Mt;for(let E=0,S=0;E<s.length;E+=9,S+=6){y.set(s[E+0],s[E+1],s[E+2]),v.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),x.set(a[S+0],a[S+1]),w.set(a[S+2],a[S+3]),A.set(a[S+4],a[S+5]),R.copy(y).add(v).add(_).divideScalar(3);let N=m(R);b(x,S+0,y,N),b(w,S+2,v,N),b(A,S+4,_,N)}}function b(y,v,_,R){R<0&&y.x===1&&(a[v]=y.x-1),_.x===0&&_.z===0&&(a[v]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var xa=class r extends yc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var qn=class r extends ce{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),h=0,u=[],l=new M,d=new M,f=[],g=[],b=[],m=[];for(let p=0;p<=i;p++){let y=[],v=p/i,_=0;p===0&&a===0?_=.5/e:p===i&&c===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){let x=R/e;l.x=-t*Math.cos(n+x*s)*Math.sin(a+v*o),l.y=t*Math.cos(a+v*o),l.z=t*Math.sin(n+x*s)*Math.sin(a+v*o),g.push(l.x,l.y,l.z),d.copy(l).normalize(),b.push(d.x,d.y,d.z),m.push(x+_,1-v),y.push(h++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let v=u[p][y+1],_=u[p][y],R=u[p+1][y],x=u[p+1][y+1];(p!==0||a>0)&&f.push(v,_,x),(p!==i-1||c<Math.PI)&&f.push(_,R,x)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(b,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var fr=class r extends ce{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],c=[],h=[],u=new M,l=new M,d=new M;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let b=g/n*s,m=f/i*Math.PI*2;l.x=(t+e*Math.cos(m))*Math.cos(b),l.y=(t+e*Math.cos(m))*Math.sin(b),l.z=e*Math.sin(m),o.push(l.x,l.y,l.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),d.subVectors(l,u).normalize(),c.push(d.x,d.y,d.z),h.push(g/n),h.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let b=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,y=(n+1)*f+g;a.push(b,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var xi=class extends vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bu,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},li=class extends xi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function $r(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function kb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ub(r){function t(n,s){return r[n]-r[s]}let e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function Eu(r,t,e){let i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){let o=e[s]*t;for(let c=0;c!==t;++c)n[a++]=r[o+c]}return n}function Zu(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=r[n++];while(s!==void 0)}var _n=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_c=class extends _n{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yl,endingEnd:yl}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case _l:s=t,o=2*e-i;break;case Ml:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case _l:a=t,c=2*i-e;break;case Ml:a=1,c=i+n[1]-n[0];break;default:a=t-1,c=e}let h=(i-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this._offsetPrev,l=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,y=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*b+.5*g,_=f*m-f*b;for(let R=0;R!==o;++R)s[R]=p*a[u+R]+y*a[h+R]+v*a[c+R]+_*a[l+R];return s}},Mc=class extends _n{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=(i-e)/(n-e),l=1-u;for(let d=0;d!==o;++d)s[d]=a[h+d]*l+a[c+d]*u;return s}},wc=class extends _n{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ti=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$r(e,this.TimeBufferType),this.values=$r(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:$r(t.times,Array),values:$r(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new wc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _c(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ts:e=this.InterpolantFactoryMethodDiscrete;break;case Hn:e=this.InterpolantFactoryMethodLinear;break;case yo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return Hn;case this.InterpolantFactoryMethodSmooth:return yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(n!==void 0&&kb(n))for(let o=0,c=n.length;o!==c;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===yo,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(n)c=!0;else{let l=o*i,d=l-i,f=l+i;for(let g=0;g!==i;++g){let b=e[l+g];if(b!==e[d+g]||b!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let l=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[l+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,c=a*i,h=0;h!==i;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Hn;var Mn=class extends Ti{};Mn.prototype.ValueTypeName="bool";Mn.prototype.ValueBufferType=Array;Mn.prototype.DefaultInterpolation=Ts;Mn.prototype.InterpolantFactoryMethodLinear=void 0;Mn.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends Ti{};ya.prototype.ValueTypeName="color";var on=class extends Ti{};on.prototype.ValueTypeName="number";var Ec=class extends _n{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(n-e),h=t*o;for(let u=h+o;h!==u;h+=4)xt.slerpFlat(s,0,a,h-o,a,h,c);return s}},Vi=class extends Ti{InterpolantFactoryMethodLinear(t){return new Ec(this.times,this.values,this.getValueSize(),t)}};Vi.prototype.ValueTypeName="quaternion";Vi.prototype.DefaultInterpolation=Hn;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var wn=class extends Ti{};wn.prototype.ValueTypeName="string";wn.prototype.ValueBufferType=Array;wn.prototype.DefaultInterpolation=Ts;wn.prototype.InterpolantFactoryMethodLinear=void 0;wn.prototype.InterpolantFactoryMethodSmooth=void 0;var cn=class extends Ti{};cn.prototype.ValueTypeName="vector";var _a=class{constructor(t,e=-1,i,n=mf){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=Fi(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(zb(i[a]).scale(n));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){let e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=i.length;s!==a;++s)e.push(Ti.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){let s=e.length,a=[];for(let o=0;o<s;o++){let c=[],h=[];c.push((o+s-1)%s,o,(o+1)%s),h.push(0,1,0);let u=Ub(c);c=Eu(c,1,u),h=Eu(h,1,u),!n&&c[0]===0&&(c.push(s),h.push(h[0])),a.push(new on(".morphTargetInfluences["+e[o].name+"]",c,h).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){let n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){let h=t[o],u=h.name.match(s);if(u&&u.length>1){let l=u[1],d=n[l];d||(n[l]=d=[]),d.push(h)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(l,d,f,g,b){if(f.length!==0){let m=[],p=[];Zu(f,m,p,g),m.length!==0&&b.push(new l(d,m,p))}},n=[],s=t.name||"default",a=t.fps||30,o=t.blendMode,c=t.length||-1,h=t.hierarchy||[];for(let l=0;l<h.length;l++){let d=h[l].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(let b in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let v=d[g];m.push(v.time),p.push(v.morphTarget===b?1:0)}n.push(new on(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{let f=".bones["+e[l].name+"]";i(cn,f+".position",d,"pos",n),i(Vi,f+".quaternion",d,"rot",n),i(cn,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,c,n,o)}resetDuration(){let t=this.tracks,e=0;for(let i=0,n=t.length;i!==n;++i){let s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Nb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return on;case"vector":case"vector2":case"vector3":case"vector4":return cn;case"color":return ya;case"quaternion":return Vi;case"bool":case"boolean":return Mn;case"string":return wn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function zb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Nb(r.type);if(r.times===void 0){let e=[],i=[];Zu(r.keys,e,i,"value"),r.times=e,r.values=i}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}var bn={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Sc=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,s===!1&&n.onStart!==void 0&&n.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,l){return h.push(u,l),this},this.removeHandler=function(u){let l=h.indexOf(u);return l!==-1&&h.splice(l,2),this},this.getHandler=function(u){for(let l=0,d=h.length;l<d;l+=2){let f=h[l],g=h[l+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},Ob=new Sc,hn=class{constructor(t){this.manager=t!==void 0?t:Ob,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};hn.DEFAULT_MATERIAL_NAME="__DEFAULT";var $i={},Tc=class extends Error{constructor(t,e){super(t),this.response=e}},pr=class extends hn{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=bn.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if($i[t]!==void 0){$i[t].push({onLoad:e,onProgress:i,onError:n});return}$i[t]=[],$i[t].push({onLoad:e,onProgress:i,onError:n});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let u=$i[t],l=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){y();function y(){l.read().then(({done:v,value:_})=>{if(v)p.close();else{b+=_.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let x=0,w=u.length;x<w;x++){let A=u[x];A.onProgress&&A.onProgress(R)}p.enqueue(_),y()}})}}});return new Response(m)}else throw new Tc(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return h.json();default:if(o===void 0)return h.text();{let l=/charset="?([^;"\s]*)"?/i.exec(o),d=l&&l[1]?l[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(g=>f.decode(g))}}}).then(h=>{bn.add(t,h);let u=$i[t];delete $i[t];for(let l=0,d=u.length;l<d;l++){let f=u[l];f.onLoad&&f.onLoad(h)}}).catch(h=>{let u=$i[t];if(u===void 0)throw this.manager.itemError(t),h;delete $i[t];for(let l=0,d=u.length;l<d;l++){let f=u[l];f.onError&&f.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Ac=class extends hn{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=bn.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let o=nr("img");function c(){u(),bn.add(t,this),e&&e(this),s.manager.itemEnd(t)}function h(l){u(),n&&n(l),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}};var Ma=class extends hn{constructor(t){super(t)}load(t,e,i,n){let s=new We,a=new Ac(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}},mr=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Ko=new At,Su=new M,Tu=new M,gr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Su.setFromMatrixPosition(t.matrixWorld),e.position.copy(Su),Tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tu),e.updateMatrixWorld(),Ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Rc=class extends gr{constructor(){super(new De(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=As*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ds=class extends mr{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Rc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Au=new At,Ks=new M,Qo=new M,Cc=class extends gr{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ks.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ks),Qo.copy(i.position),Qo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Qo),i.updateMatrixWorld(),n.makeTranslation(-Ks.x,-Ks.y,-Ks.z),Au.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au)}},wa=class extends mr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Pc=class extends gr{constructor(){super(new hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xn=class extends mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Pc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var En=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,n=t.length;i<n;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Gi=class extends ce{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ea=class extends hn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=bn.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(h=>{e&&e(h),s.manager.itemEnd(t)}).catch(h=>{n&&n(h)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(t,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return bn.add(t,h),e&&e(h),s.manager.itemEnd(t),h}).catch(function(h){n&&n(h),bn.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});bn.add(t,c),s.manager.itemStart(t)}};var Hc="\\[\\]\\.:\\/",Bb=new RegExp("["+Hc+"]","g"),Vc="[^"+Hc+"]",Hb="[^"+Hc.replace("\\.","")+"]",Vb=/((?:WC+[\/:])*)/.source.replace("WC",Vc),Gb=/(WCOD+)?/.source.replace("WCOD",Hb),Wb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),qb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),Xb=new RegExp("^"+Vb+Gb+Wb+qb+"$"),Yb=["material","materials","bones","map"],Lc=class{constructor(t,e,i){let n=i||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ge=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bb,"")}static parseTrackName(t){let e=Xb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Yb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[n];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=Lc;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);function Ai(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var yi=(r,t,e)=>r<t?t:r>e?e:r,pt=r=>r<0?0:r>1?1:r,bt=(r,t,e)=>r+(t-r)*e;function Ie(r,t,e){let i=pt((e-r)/(t-r));return i*i*(3-2*i)}function ni(r,t=0){let e=Math.floor(r),i=r-e,n=a=>{let o=Math.sin((a+t*57.13)*127.1)*43758.5453;return o-Math.floor(o)},s=i*i*(3-2*i);return n(e)*(1-s)+n(e+1)*s}var xe=24,ui=2,jb=9.81,Gc=Math.PI*2,Kb=[[300,3,.8,.3,0],[236,3.2,.8,.3,0],[187,3,.8,.34,0],[151,2.6,.8,.34,0],[122,2.1,.78,.38,0],[99,1.6,.78,.38,0],[78,1.05,.64,.7,1],[63,.9,.64,.7,1],[50,.75,.64,.75,1],[40,.6,.62,.75,1],[31,.48,.62,.8,1],[24.5,.38,.6,.8,1],[19,.3,.6,.85,1],[15,.235,.58,.85,1],[12.1,.17,.5,1.15,2],[9.3,.13,.5,1.15,2],[7.1,.1,.48,1.2,2],[5.4,.077,.48,1.2,2],[4.1,.058,.46,1.25,2],[3.2,.045,.46,1.25,2],[2.5,.035,.44,1.3,2],[1.9,.027,.44,1.3,2],[1.5,.021,.42,1.35,2],[1.15,.016,.42,1.35,2]],Wc=class{constructor(){this.active=!1,this.ox=0,this.oz=0,this.dx=1,this.dz=0,this.speed=14,this.width=150,this.hMax=12,this.t0=0,this.tBreak=14,this.age=0,this.s=0,this.height=0,this.front=14,this.frontMin=8.5,this.seed=0,this.mega=!1,this.back=55,this.curl=0,this.brk=0,this.turb=0,this.roll=0}},Pa=class{constructor(t=20261112){this.time=0,this.storm=1,this.windAngle=0;let e=Ai(t);this.dirX=new Float64Array(xe),this.dirZ=new Float64Array(xe),this.k=new Float64Array(xe),this.omega=new Float64Array(xe),this.phase0=new Float64Array(xe),this.amp0=new Float64Array(xe),this.amp=new Float64Array(xe),this.steep=new Float64Array(xe),this.len=new Float64Array(xe),this.band=new Uint8Array(xe),this.phT=new Float64Array(xe),this.bodyW=new Float64Array(xe);for(let i=0;i<xe;i++){let[n,s,a,o,c]=Kb[i],h=1+(e()-.5)*.06,u=n*h,l=i%2===0?1:-1,d=this.windAngle+l*o*(.25+.75*e());this.dirX[i]=Math.cos(d),this.dirZ[i]=Math.sin(d),this.len[i]=u,this.k[i]=Gc/u,this.omega[i]=Math.sqrt(jb*this.k[i]),this.phase0[i]=e()*Gc,this.amp0[i]=s*(.9+e()*.2),this.steep[i]=a,this.band[i]=c,this.bodyW[i]=1/(1+Math.pow(this.k[i]*.95,2))}this.uA=new Float32Array(xe*4),this.uB=new Float32Array(xe*4),this.breakers=[];for(let i=0;i<ui;i++)this.breakers.push(new Wc);this.uBrkA=new Float32Array(ui*4),this.uBrkB=new Float32Array(ui*4),this.uBrkC=new Float32Array(ui*4),this.sigHeight=0,this.setStorm(1),this.update(0)}setStorm(t){this.storm=pt(t);let e=0,i=1+.2*Math.sin(this.time*.105)*Math.sin(this.time*.041+1.3);for(let n=0;n<xe;n++){let s=this.band[n],a=s===0?bt(.3,1,this.storm):s===1?bt(.22,1,this.storm):bt(.4,1,this.storm);this.amp[n]=this.amp0[n]*a*(s<2?i:1),e+=this.amp[n]*this.amp[n]*.5}this.sigHeight=4*Math.sqrt(e)}update(t){this.time+=t;let e=this.time;for(let i=0;i<xe;i++){this.phT[i]=(this.omega[i]*e+this.phase0[i])%Gc;let n=i*4;this.uA[n]=this.dirX[i],this.uA[n+1]=this.dirZ[i],this.uA[n+2]=this.k[i],this.uA[n+3]=this.amp[i],this.uB[n]=this.phT[i],this.uB[n+1]=this.steep[i],this.uB[n+2]=this.len[i],this.uB[n+3]=0}for(let i=0;i<ui;i++){let n=this.breakers[i],s=i*4;if(n.active){n.age=e-n.t0,n.s=n.speed*n.age;let o=Ie(0,n.tBreak*.85,n.age),c=n.age-n.tBreak;n.brk=pt(c/1.6);let h=c>0?Math.exp(-c/(n.mega?5:3)):1;n.height=n.hMax*o*(.16+.84*h),n.front=bt(26,n.frontMin,Ie(.3,1,o)),n.curl=Ie(-2.2,.3,c)*(c>0?Math.exp(-c/2.2):1),n.turb=c>0?Math.min(1,c/1)*Math.exp(-Math.max(0,c-2.5)/(n.mega?8:5)):0,n.roll=c>0?n.brk*Math.exp(-c/(n.mega?5.5:3.2)):0,c>(n.mega?30:20)&&(n.active=!1)}let a=n.active?1:0;this.uBrkA[s]=n.ox,this.uBrkA[s+1]=n.oz,this.uBrkA[s+2]=n.dx,this.uBrkA[s+3]=n.dz,this.uBrkB[s]=n.s,this.uBrkB[s+1]=n.height*a,this.uBrkB[s+2]=n.front,this.uBrkB[s+3]=n.back,this.uBrkC[s]=n.width,this.uBrkC[s+1]=n.curl*a,this.uBrkC[s+2]=n.brk*a,this.uBrkC[s+3]=n.turb*a}}spawnBreaker(t,e,i={}){let n=this.breakers.find(o=>!o.active);if(!n)return null;let s=this.windAngle+(i.angleOffset||0);n.dx=Math.cos(s),n.dz=Math.sin(s),n.speed=i.speed||14;let a=i.lead||15;return n.ox=t-n.dx*n.speed*a,n.oz=e-n.dz*n.speed*a,n.seed=n.ox*.013+n.oz*.017,n.width=i.width||150,n.hMax=i.height||12,n.back=i.back||55,n.frontMin=i.frontMin||8.5,n.mega=!!i.mega,n.t0=this.time,n.tBreak=a+(i.breakOffset!==void 0?i.breakOffset:-1.2),n.age=0,n.active=!0,n.s=0,n.height=0,n.curl=0,n.brk=0,n.turb=0,n.roll=0,n}_breakerHeight(t,e,i){let n=e-t.ox,s=i-t.oz,a=n*t.dx+s*t.dz,o=-n*t.dz+s*t.dx,c=.16*Math.sin(o*.071+t.seed)+.09*Math.sin(o*.193+t.seed*1.7),h=2.6*Math.sin(o*.047+t.seed*.6)+1.2*Math.sin(o*.13+t.seed*2.1),u=a-t.s-h,l=Math.exp(-(o*o)/(t.width*t.width))*(1+c),d=u>0?t.front:t.back,f=Math.exp(-(u*u)/(d*d)),g=(u-2.4*t.front)/(1.7*t.front),b=-.22*Math.exp(-g*g);return this._bu=u,this._benv=l,this._bp=f,this._bsc=d,this._btr=b,this._btu=g,this._bpeel=Math.max(.15,Math.min(1.3,.55+2.5*c)),t.height*l*(f+b)}sample(t,e,i){let n=xe,s=this.dirX,a=this.dirZ,o=this.k,c=this.amp,h=this.steep,u=this.phT,l=this.omega,d=t,f=e;for(let z=0;z<3;z++){let V=0,st=0;for(let Z=0;Z<n;Z++){let rt=o[Z]*(s[Z]*d+a[Z]*f)-u[Z],ot=h[Z]*c[Z]*Math.sin(rt);V-=s[Z]*ot,st-=a[Z]*ot}d=t-V,f=e-st}let g=0,b=0,m=0,p=0,y=0,v=0,_=0,R=0,x=0,w=0,A=0,E=0;for(let z=0;z<n;z++){let V=o[z]*(s[z]*d+a[z]*f)-u[z],st=Math.sin(V),Z=Math.cos(V),rt=c[z],ot=o[z]*rt,ct=h[z]*ot,Et=l[z];g+=rt*Z,b+=ct*s[z]*s[z]*Z,m+=ct*a[z]*a[z]*Z,p+=ct*s[z]*a[z]*Z,y-=ot*s[z]*st,v-=ot*a[z]*st;let X=h[z]*rt*Et;_+=X*s[z]*Z,x+=X*a[z]*Z,R+=rt*Et*st;let Bt=X*Et;w+=Bt*s[z]*st,E+=Bt*a[z]*st,A-=rt*Et*Et*Z}let S=-y*(1-m)-v*p,N=(1-b)*(1-m)-p*p,O=-v*(1-b)-y*p,it=N,P=0,L=0,D=0,H=0,U=0,k=0,W=0,q=0,J=0;for(let z=0;z<ui;z++){let V=this.breakers[z];if(!V.active||V.height<.01)continue;let st=this._breakerHeight(V,t,e),Z=this._bu,rt=this._benv,ot=this._bp,ct=this._bsc;if(rt<.002)continue;let Et=-2*Z/(ct*ct)*ot-.22*Math.exp(-this._btu*this._btu)*(-2*this._btu/(1.7*V.front)),X=V.height*rt*Et;g+=st,D+=st,N<.05&&(N=.05);let Bt=1/N;S*=Bt,O*=Bt,N=1,S-=X*V.dx,O-=X*V.dz,U+=Math.max(-12,Math.min(14,-V.speed*X)),q+=V.speed*V.speed*V.height*rt*(-2/(ct*ct)+4*Z*Z/(ct*ct*ct*ct))*ot;let wt=V.speed*(.3*(1-V.brk)+.65*V.curl+.22*V.roll)*rt*ot*Math.min(1,V.height/6),Rt=rt*V.curl*Math.exp(-Math.pow((Z-.25*V.front)/(1.3*V.front),2))*Math.min(1,V.height/5);if(W=Math.max(W,Rt),V.mega||(J=Math.max(J,Math.min(12,3.5+.6*V.hMax)*Rt*Ie(-.7,.5,V.age-V.tBreak))),H+=V.dx*wt,k+=V.dz*wt,V.mega){let Pt=V.speed*rt*V.curl*Math.exp(-Math.pow((Z-.1*V.front)/(.9*V.front),2));U+=.78*Pt,H+=V.dx*.8*Pt,k+=V.dz*.8*Pt}let vt=V.speed*.26*rt*Math.exp(-this._btu*this._btu)*Math.min(1,V.height/6)*(1-V.brk);H-=V.dx*vt,k-=V.dz*vt;let Nt=rt*Math.exp(-Math.pow((Z-.3*V.front)/(1.6*V.front+26*V.turb),2));P=Math.max(P,V.brk*Nt*Math.min(1,V.height/3+V.turb)),L=Math.max(L,V.turb*rt*Math.exp(-Math.pow((Z+14*V.turb)/(22+30*V.turb),2)))}let G=1/Math.sqrt(S*S+N*N+O*O);return i.h=g,i.nx=S*G,i.ny=N*G,i.nz=O*G,i.vx=_+H,i.vy=R+U,i.vz=x+k,i.ax=w,i.ay=A,i.az=E,i.bvx=H,i.bvy=U,i.bvz=k,i.lip=W,i.plunge=J,i.bay=q<-8.8?-8.8:q>19.6?19.6:q,i.jac=it,i.x0=d,i.z0=f,i.aer=P,i.turb=L,i.brkH=D,i}heightFast(t,e){let i=this.dirX,n=this.dirZ,s=this.k,a=this.amp,o=this.phT,c=0;for(let h=0;h<14;h++)c+=a[h]*Math.cos(s[h]*(i[h]*t+n[h]*e)-o[h]);for(let h=0;h<ui;h++){let u=this.breakers[h];u.active&&u.height>.01&&(c+=this._breakerHeight(u,t,e))}return c}bodyFlow(t,e,i,n){let s=this.dirX,a=this.dirZ,o=this.k,c=this.amp,h=this.steep,u=this.phT,l=this.omega,d=this.bodyW,f=0,g=0,b=0,m=0,p=0,y=0;for(let v=0;v<xe;v++){let _=Math.exp(-o[v]*i)*d[v];if(_<.01)continue;let R=o[v]*(s[v]*t+a[v]*e)-u[v],x=Math.sin(R),w=Math.cos(R),A=c[v]*l[v]*_,E=A*l[v];f+=h[v]*A*s[v]*w,b+=h[v]*A*a[v]*w,g+=A*x,m+=h[v]*E*s[v]*x,y+=h[v]*E*a[v]*x,p-=E*w}return n.vx=f,n.vy=g,n.vz=b,n.ax=m,n.ay=p,n.az=y,n}velocityAtDepth(t,e,i,n){let s=this.dirX,a=this.dirZ,o=this.k,c=this.amp,h=this.steep,u=this.phT,l=this.omega,d=0,f=0,g=0;for(let b=0;b<xe;b++){let m=Math.exp(-o[b]*i);if(m<.01)continue;let p=o[b]*(s[b]*t+a[b]*e)-u[b],y=c[b]*l[b]*m,v=Math.cos(p);d+=h[b]*y*s[b]*v,g+=h[b]*y*a[b]*v,f+=y*Math.sin(p)}return n.vx=d,n.vy=f,n.vz=g,n}breakerFlow(t,e,i,n,s){let a=0,o=0,c=0,h=this.time;for(let u=0;u<ui;u++){let l=this.breakers[u];if(!l.active||l.roll<.003&&l.turb<.003)continue;this._breakerHeight(l,t,i);let d=this._benv,f=this._bu;if(!(d<.01)){if(l.roll>.003){let g=Math.max(1.8,.36*l.hMax),b=f-.35*l.front,m=e-(n-.55*g),p=Math.hypot(b,m);if(p<3.2*g){let y=p<g?1:g*g/(p*p),v=.85*l.speed/g*l.roll*d*y,_=v*m;a+=l.dx*_,c+=l.dz*_,o+=-v*b}}if(l.turb>.003){let g=l.turb*d*Math.exp(-Math.pow((f+14*l.turb)/(22+30*l.turb),2))*Math.exp(-Math.max(0,n-e)/6.5);if(g>.01){let b=g*3.4;a+=b*(Math.sin(.9*i+1.7*e+2.3*h)+.6*Math.sin(1.7*t-1.1*e-3.1*h+1.3)),o+=b*(Math.sin(1.1*t+.8*i+2.9*h+.7)+.6*Math.sin(-1.5*i+1.9*e+2*h)),c+=b*(Math.sin(1.3*e-.9*t+2.6*h+2.1)+.6*Math.sin(1.6*t+1.2*i-2.2*h)),o-=g*2.6*Math.exp(-Math.max(0,n-e)/3)}}}}return s.vx+=a,s.vy+=o,s.vz+=c,s}};function di(){return{bay:0,lip:0,plunge:0,bvx:0,bvy:0,bvz:0,h:0,nx:0,ny:1,nz:0,vx:0,vy:0,vz:0,ax:0,ay:0,az:0,jac:1,x0:0,z0:0,aer:0,turb:0,brkH:0}}var nt={hdrType:an,uWaveA:{value:new Float32Array(xe*4)},uWaveB:{value:new Float32Array(xe*4)},uBrkA:{value:new Float32Array(ui*4)},uBrkB:{value:new Float32Array(ui*4)},uBrkC:{value:new Float32Array(ui*4)},uTime:{value:0},uStorm:{value:1},uRain:{value:1},uWindDir:{value:new Mt(1,0)},uWindSpeed:{value:28},uGlowDir:{value:new M(-.55,.35,.25).normalize()},uAmbient:{value:new M(.05,.06,.072)},uFlash:{value:0},uFlashDir:{value:new M(1,.35,0).normalize()},uFlashColor:{value:new M(.78,.86,1)},uFlashSheet:{value:0},uFogDensity:{value:1/2600},uNoise:{value:null},uSkyEnv:{value:null},uDetailN:{value:null},uFoamTex:{value:null},uResolution:{value:new Mt(1,1)},uSpotPos:{value:new M(0,100,0)},uSpotDir:{value:new M(0,-1,0)},uSpotP:{value:new ne(.99,0,30,0)},uWash:{value:new ne(0,0,1,0)}},Us=`
uniform vec3 uSpotPos; uniform vec3 uSpotDir; uniform vec4 uSpotP;
float spotAt(vec3 p, out vec3 L) {
  vec3 d = uSpotPos - p; float ds = length(d); L = d / max(ds, 1e-3);
  if (uSpotP.y < 0.001) return 0.0;
  float x = (1.0 - dot(-L, uSpotDir)) / (1.0 - uSpotP.x);          // 1 at the nominal edge of the beam
  return uSpotP.y * (exp(-1.5 * x * x) + 0.045 * exp(-0.09 * x)) / (1.0 + ds * ds / (uSpotP.z * uSpotP.z));
}
`,ln="vec3(0.78, 0.88, 1.0)";function Ju(r=7){let e=Ai(r),i=new Uint8Array(256*256*4);for(let s=0;s<i.length;s++)i[s]=e()*256|0;let n=new ki(i,256,256,ue,Ve);return n.wrapS=n.wrapT=ti,n.minFilter=ee,n.magFilter=ee,n.generateMipmaps=!1,n.needsUpdate=!0,n}function $u(r=11,t=256){let e=Ai(r),i=[];for(let d=0;d<56;d++){let f=2+Math.pow(e(),1.6)*38,g=(e()-.5)*2.4+(e()<.2?Math.PI*e():0),b=Math.round(Math.cos(g)*f),m=Math.round(Math.sin(g)*f);if(b===0&&m===0)continue;let p=Math.hypot(b,m);i.push({m:b,n:m,a:Math.pow(p,-1.35),ph:e()*Math.PI*2})}let n=new Float32Array(t*t),s=new Float32Array(t*t),a=new Float32Array(t*t),o=0;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=f/t,b=d/t,m=0,p=0,y=0;for(let _=0;_<i.length;_++){let R=i[_],x=6.283185307*(R.m*g+R.n*b)+R.ph,w=Math.sin(x);m-=R.a*R.m*w,p-=R.a*R.n*w,y+=R.a*Math.cos(x)}let v=d*t+f;n[v]=m,s[v]=p,a[v]=y,o+=m*m+p*p}o=Math.sqrt(o/(t*t*2));let c=0;for(let d=0;d<a.length;d++)c=Math.max(c,Math.abs(a[d]));let h=new Uint8Array(t*t*4),u=.3/o;for(let d=0;d<t*t;d++)h[d*4]=Math.max(0,Math.min(255,Math.round((n[d]*u*.5+.5)*255))),h[d*4+1]=Math.max(0,Math.min(255,Math.round((s[d]*u*.5+.5)*255))),h[d*4+2]=Math.round((a[d]/c*.5+.5)*255),h[d*4+3]=255;let l=new ki(h,t,t,ue,Ve);return l.wrapS=l.wrapT=ti,l.minFilter=ei,l.magFilter=ee,l.generateMipmaps=!0,l.anisotropy=8,l.needsUpdate=!0,l}function td(r=23,t=256){let e=Ai(r),i=h=>{let u=new Float32Array(h*h*2);for(let d=0;d<u.length;d++)u[d]=e();let l=new Float32Array(t*t*2);for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=(f+.5)/t*h,b=(d+.5)/t*h,m=Math.floor(g),p=Math.floor(b),y=9,v=9;for(let _=-1;_<=1;_++)for(let R=-1;R<=1;R++){let x=m+R,w=p+_,A=(x%h+h)%h,E=(w%h+h)%h,S=x+u[(E*h+A)*2],N=w+u[(E*h+A)*2+1],O=Math.hypot(S-g,N-b);O<y?(v=y,y=O):O<v&&(v=O)}l[(d*t+f)*2]=y,l[(d*t+f)*2+1]=v-y}return l},n=i(9),s=i(23),a=i(51),o=new Uint8Array(t*t*4);for(let h=0;h<t*t;h++){let u=1-Math.min(1,n[h*2+1]*3.2),l=1-Math.min(1,s[h*2+1]*3),d=Math.min(1,u*.62+l*.5),f=Math.min(1,(1-n[h*2]*1.25)*.7+(1-s[h*2]*1.3)*.3),g=1-Math.min(1,a[h*2]*1.6);o[h*4]=Math.round(Math.max(0,d)*255),o[h*4+1]=Math.round(Math.max(0,f)*255),o[h*4+2]=Math.round(Math.max(0,g)*255),o[h*4+3]=255}let c=new ki(o,t,t,ue,Ve);return c.wrapS=c.wrapT=ti,c.minFilter=ei,c.magFilter=ee,c.generateMipmaps=!0,c.anisotropy=8,c.needsUpdate=!0,c}var Yn=`
#define NW ${xe}
#define NB ${ui}
uniform vec4 uWaveA[NW];   // dir.x, dir.z, k, amplitude
uniform vec4 uWaveB[NW];   // phase(t), steepness, wavelength, -
uniform vec4 uBrkA[NB];    // origin.xz, dir.xz
uniform vec4 uBrkB[NB];    // crest s, height, front scale, back scale
uniform vec4 uBrkC[NB];    // lateral width, curl, breaking, turbulence
`,jn=`
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
`,La=`
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
`,ed=`
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
`;var id=`
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
`,Qb=`
const float PI = 3.14159265359;
vec3 equirectToDir(vec2 uv) {
  float phi = (uv.x - 0.5) * 2.0 * PI;
  float lat = (uv.y - 0.5) * PI;
  return vec3(cos(lat) * cos(phi), sin(lat), cos(lat) * sin(phi));
}
`,nd=`
vec2 dirToEquirect(vec3 d) {
  return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5);
}
`,Ia=class{constructor(t,e=512){this.renderer=t;let i={uNoise:nt.uNoise,uTime:nt.uTime,uStorm:nt.uStorm,uWindDir:nt.uWindDir,uGlowDir:nt.uGlowDir,uFlash:nt.uFlash,uFlashDir:nt.uFlashDir,uFlashColor:nt.uFlashColor,uFlashSheet:nt.uFlashSheet};this.domeMat=new re({uniforms:i,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = position;
          vec4 p = projectionMatrix * viewMatrix * vec4(position * 9000.0 + cameraPosition, 1.0);
          gl_Position = p.xyww;   // always at the far plane
        }`,fragmentShader:`
        varying vec3 vDir;
        ${id}
        void main() { gl_FragColor = vec4(stormSky(normalize(vDir), 1), 1.0); }`,side:He,depthWrite:!1,depthTest:!0,fog:!1}),this.dome=new St(new xa(1,5),this.domeMat),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,this.envRT=new ye(e,e/2,{type:nt.hdrType,format:ue,depthBuffer:!1,minFilter:ei,magFilter:ee,generateMipmaps:!0}),this.envRT.texture.wrapS=ti,this.envRT.texture.wrapT=$e,this.envMat=new re({uniforms:i,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        varying vec2 vUv;
        ${id}
        ${Qb}
        void main() { gl_FragColor = vec4(stormSky(equirectToDir(vUv), 0), 1.0); }`,depthTest:!1,depthWrite:!1}),this.envScene=new Si,this.envQuad=new St(new Di(2,2),this.envMat),this.envQuad.frustumCulled=!1,this.envScene.add(this.envQuad),this.envCam=new hi(-1,1,1,-1,0,1),nt.uSkyEnv.value=this.envRT.texture}updateEnv(){let t=this.renderer,e=t.getRenderTarget();t.setRenderTarget(this.envRT),t.render(this.envScene,this.envCam),t.setRenderTarget(e)}dispose(){this.envRT.dispose(),this.domeMat.dispose(),this.envMat.dispose(),this.dome.geometry.dispose()}};var Zb=`
attribute float aSpacing;
uniform vec2 uCenter;
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${Yn}
${La}
${jn}
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
`,Jb=`
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
${Us}
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${Yn}
${ed}
${jn}
${nd}
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
  float foam = max(max(max(fJ, bFoam), acc), max(max(streak * 0.30, self), washFoam));
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
    body += (uDeepColor * 0.95 + uScatterColor * 0.26 + vec3(0.018, 0.021, 0.024)) * ${ln} * spot * (0.22 + 0.78 * snl * snl)
          + ${ln} * spot * 0.020 * (0.3 + 0.7 * snl);

    #ifdef USE_REFRACTION
    vec2 suv = gl_FragCoord.xy / uResolution;
    vec2 off = N.xz * (0.045 / (1.0 + vViewZ * 0.12));
    vec4 sc = texture(uSceneColor, suv + off);
    float sd = linDepth(texture(uSceneDepth, suv + off).r);
    if (sc.a < 0.5 || sd < vViewZ) { sc = texture(uSceneColor, suv); sd = linDepth(texture(uSceneDepth, suv).r); }
    if (sc.a > 0.5 && sd > vViewZ) {
      float thick = sd - vViewZ;
      vec3 tr = exp(-thick * vec3(1.9, 0.95, 0.80));
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
      col += ${ln} * spot * min(Ds, 60.0) * fss * 0.55;
    }
    vec3 foamCol = vec3(0.80, 0.85, 0.87) * foamShade * (amb * (2.4 + 0.8 * N.y) + flashL * flashWrap * 0.8 + ${ln} * spot * (0.55 + 1.05 * snl));
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
`;function $b(r,t,e,i){let n=r*t,s=new Float32Array(n*3),a=new Float32Array(n);for(let u=0;u<r;u++){let l=e*(Math.exp(i*u)-1)/i,d=e*Math.exp(i*u),f=Math.PI*2*l/t,g=Math.max(d,f);for(let b=0;b<t;b++){let m=b/t*Math.PI*2,p=(u*t+b)*3;s[p]=Math.cos(m)*l,s[p+1]=0,s[p+2]=Math.sin(m)*l,a[u*t+b]=g}}let o=new Uint32Array((r-1)*t*6),c=0;for(let u=0;u<r-1;u++)for(let l=0;l<t;l++){let d=u*t+l,f=u*t+(l+1)%t,g=(u+1)*t+l,b=(u+1)*t+(l+1)%t;o[c++]=d,o[c++]=f,o[c++]=g,o[c++]=f,o[c++]=b,o[c++]=g}let h=new ce;return h.setAttribute("position",new Vt(s,3)),h.setAttribute("aSpacing",new Vt(a,1)),h.setIndex(new Vt(o,1)),h}var Fa=class{constructor(t,e){this.waves=t,this.uniforms={uWaveA:nt.uWaveA,uWaveB:nt.uWaveB,uBrkA:nt.uBrkA,uBrkB:nt.uBrkB,uBrkC:nt.uBrkC,uSkyEnv:nt.uSkyEnv,uDetailN:nt.uDetailN,uFoamTex:nt.uFoamTex,uNoise:nt.uNoise,uTime:nt.uTime,uStorm:nt.uStorm,uRain:nt.uRain,uWindDir:nt.uWindDir,uAmbient:nt.uAmbient,uFlash:nt.uFlash,uFlashDir:nt.uFlashDir,uFlashColor:nt.uFlashColor,uFogDensity:nt.uFogDensity,uResolution:nt.uResolution,uCenter:{value:new Mt},uDeepColor:{value:new M(.02,.062,.105)},uScatterColor:{value:new M(.13,.27,.305)},uDetailScroll:{value:new ne},uDetailScroll3:{value:new Mt},uDetailStrength:{value:.5},uSigH:{value:10},uSceneColor:{value:null},uSceneDepth:{value:null},uNearFar:{value:new Mt(.08,3e4)},uFoamAcc:{value:null},uFoamAccRect:{value:new ne(0,0,1,0)},uPlayerPos:{value:new M(0,-1e3,0)},uPlayerFoam:{value:0},uBoatInv:{value:new At},uBoatOn:{value:0},uSpotPos:nt.uSpotPos,uSpotDir:nt.uSpotDir,uSpotP:nt.uSpotP,uWash:nt.uWash},this.material=new re({uniforms:this.uniforms,vertexShader:Zb,fragmentShader:Jb,side:Le,defines:{}}),this.mesh=new St(new ce,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,this.applyProfile(e)}applyProfile(t){this.mesh.geometry.dispose();let e=Math.log(14e3*.0128/t.oceanStep+1)/t.oceanRings*1;this.mesh.geometry=$b(t.oceanRings,t.oceanSegs,t.oceanStep,this._solveG(t.oceanRings,t.oceanStep,14e3,e));let i={};t.refraction&&(i.USE_REFRACTION=1),t.foamAcc&&(i.USE_FOAM_ACC=1),t.ripples&&(i.USE_RIPPLES=1),this.material.defines=i,this.material.needsUpdate=!0}_solveG(t,e,i,n){let s=Math.max(n,.004);for(let a=0;a<40;a++){let o=Math.exp(s*t),c=e*(o-1)/s-i,h=e*(t*o*s-(o-1))/(s*s);s-=c/h,s<.001&&(s=.001)}return s}update(t,e,i){let n=this.uniforms;n.uCenter.value.set(t.position.x,t.position.z),n.uSigH.value=this.waves.sigHeight;let s=nt.uWindDir.value.x,a=nt.uWindDir.value.y,o=.6+.4*nt.uStorm.value;n.uDetailScroll.value.x+=s*1.9*.047*o*e,n.uDetailScroll.value.y+=a*1.9*.047*o*e,n.uDetailScroll.value.z+=a*1.1*.19*o*e+.011*e,n.uDetailScroll.value.w+=-s*1.1*.19*o*e,n.uDetailScroll3.value.x+=(s*.75-a*.2)*.83*o*e,n.uDetailScroll3.value.y+=(a*.75+s*.2)*.83*o*e,n.uDetailStrength.value=.3+.34*nt.uStorm.value,n.uNearFar.value.set(t.near,t.far)}};var tv=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tPrev;
uniform vec2 uCenter; uniform vec2 uPrevCenter; uniform float uSize; uniform float uDt; uniform float uStorm; uniform float uTexel;
uniform vec3 uPlayer; uniform float uPlayerFoam;
uniform vec4 uSplash[4];      // x, z, ring radius, strength
${Yn}
${jn}
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
}`,Da=class{constructor(t,e=1024,i=340){if(this.renderer=t,this.size=e,this.world=i,this.enabled=e>0,!this.enabled)return;let n={type:nt.hdrType,format:ue,depthBuffer:!1,minFilter:ee,magFilter:ee};this.rt=[new ye(e,e,n),new ye(e,e,n)],this.idx=0,this.center=new Mt,this.prevCenter=new Mt,this.u={tPrev:{value:null},uCenter:{value:this.center},uPrevCenter:{value:this.prevCenter},uSize:{value:i},uDt:{value:.016},uStorm:nt.uStorm,uTexel:{value:i/e},uPlayer:{value:new M},uPlayerFoam:{value:0},uSplash:{value:new Float32Array(16)},uWaveA:nt.uWaveA,uWaveB:nt.uWaveB,uBrkA:nt.uBrkA,uBrkB:nt.uBrkB,uBrkC:nt.uBrkC},this.mat=new re({uniforms:this.u,fragmentShader:tv,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"}),this.scene=new Si,this.quad=new St(new Di(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.cam=new hi(-1,1,1,-1,0,1),this.first=!0,this.splashes=[0,1,2,3].map(()=>({x:0,z:0,s:0,age:9})),this.nextSplash=0}addSplash(t,e,i){if(!this.enabled)return;let n=this.splashes[this.nextSplash];this.nextSplash=(this.nextSplash+1)%4,n.x=t,n.z=e,n.s=Math.min(1,i),n.age=0}update(t,e,i,n,s,a){if(!this.enabled){a.uFoamAccRect.value.w=0;return}let o=this.world/this.size,c=Math.round(e/o)*o,h=Math.round(i/o)*o;this.prevCenter.copy(this.first?new Mt(c,h):this.center),this.center.set(c,h);let u=this.rt[this.idx],l=this.rt[1-this.idx];this.u.tPrev.value=u.texture,this.u.uDt.value=t,this.u.uPlayer.value.copy(n),this.u.uPlayerFoam.value=s;let d=this.u.uSplash.value;for(let b=0;b<4;b++){let m=this.splashes[b];m.age+=t;let p=m.age<1.3;d[b*4]=m.x,d[b*4+1]=m.z,d[b*4+2]=.25+1.5*m.age*(.6+.6*m.s),d[b*4+3]=p?m.s*Math.exp(-m.age*2):0}let f=this.renderer,g=f.getRenderTarget();f.setRenderTarget(l),f.render(this.scene,this.cam),f.setRenderTarget(g),this.idx=1-this.idx,this.first=!1,a.uFoamAcc.value=l.texture,a.uFoamAccRect.value.set(c,h,this.world,1)}};var ka=class{constructor(t,e,i,n,s=4242){this.waves=t,this.body=e,this.player=i,this.spray=n,this.rnd=Ai(s),this.auto=!0,this.next=24,this.megaNext=85+this.rnd()*40,this.threat=0,this.crestDist=1e9,this.crestHeight=0,this.crestDx=0,this.crestDz=0,this.whiteout=0,this.onImpact=null,this.onSplash=null,this._splashCool=0}launch(t={}){let e=this.rnd,i=this.body,n=this.waves.storm;return this.waves.spawnBreaker(i.pos.x+i.vel.x*2,i.pos.z+i.vel.z*2,{lead:t.lead!==void 0?t.lead:13+e()*5,height:t.height!==void 0?t.height:bt(6.5,14.5,n)*(.8+.45*e()),width:t.width!==void 0?t.width:110+e()*90,speed:t.speed!==void 0?t.speed:12.5+e()*3.5,breakOffset:t.breakOffset!==void 0?t.breakOffset:-2+e()*2.3,angleOffset:t.angleOffset!==void 0?t.angleOffset:(e()-.5)*.5,frontMin:t.frontMin,back:t.back})}launchMega(t={}){let e=this.rnd,i=this.body;return this.waves.spawnBreaker(i.pos.x,i.pos.z,{mega:!0,lead:t.lead!==void 0?t.lead:19,height:t.height!==void 0?t.height:30+8*e(),width:520,speed:t.speed||24,breakOffset:t.breakOffset!==void 0?t.breakOffset:-.5,angleOffset:(e()-.5)*.2,frontMin:26,back:120})}update(t,e,i,n){let s=this.waves,a=this.body;if(this.auto){this.megaNext-=t;let f=s.breakers.some(g=>g.active&&g.mega);this.megaNext<=0&&s.storm>.6&&!s.breakers.some(g=>g.active)&&(this.launchMega(),this.megaNext=150+this.rnd()*100),this.next-=t,this.next<=0&&(s.storm>.3&&!f&&this.megaNext>14&&this.launch(),this.next=bt(75,24,s.storm)*(.65+.8*this.rnd()))}let o=0,c=1e9,h=0;for(let f of s.breakers){if(!f.active)continue;let g=a.pos.x-f.ox,b=a.pos.z-f.oz,m=g*f.dx+b*f.dz-f.s,p=-g*f.dz+b*f.dx,y=Math.exp(-(p*p)/(f.width*f.width));m>-10&&m<c&&(c=m,h=f.height*y,this.crestDx=f.dx,this.crestDz=f.dz);let v=pt(1-Math.abs(m)/(f.mega?320:120));o=Math.max(o,v*pt(f.height*y/9))}this.threat+=(o-this.threat)*(1-Math.exp(-t*2.5)),this.crestDist=c,this.crestHeight=h;let u=s.sample(e.x,e.z,this._s||(this._s={h:0})),l=Math.max(u.aer,(u.lip||0)*1.1)*pt(1-(e.y-u.h)/7)*(1-i);this.whiteout+=(Math.min(.93,l*1.6)-this.whiteout)*(1-Math.exp(-t*(l>this.whiteout?14:2.5)));let d=this.player.events;for(let f=0;f<d.length;f++){let g=d[f];g.type==="impact"&&(this.spray.burst(a.pos.x,a.surfaceH+.2,a.pos.z,g.strength*2.2,n,g.dir.x,g.dir.z),this.onImpact&&this.onImpact(g))}d.length=0,this._splashCool-=t,a.splash>3&&this._splashCool<=0&&(this._splashCool=.6,this.spray.burst(a.splashPos.x,a.splashPos.y,a.splashPos.z,Math.min(3.5,(a.splash-2.4)*.9),n),this.onSplash&&this.onSplash(a.splash,a.splashPos))}};var qc={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Mt(1/1024,1/512)}},vertexShader:`

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
	`};var ev="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",iv=`
varying vec2 vUv; uniform sampler2D tScene; uniform float uThreshold; uniform float uKnee;
void main(){
  vec3 c = textureLod(tScene, vUv, 1.0).rgb;
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-5);
  float w = max(soft, br - uThreshold) / max(br, 1e-5);
  gl_FragColor = vec4(min(c * w, vec3(40.0)), 1.0);
}`,nv=`
varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 a = texture(tSrc, vUv + t * vec2(-1.0, -1.0)).rgb, b = texture(tSrc, vUv + t * vec2(1.0, -1.0)).rgb;
  vec3 c = texture(tSrc, vUv + t * vec2(-1.0, 1.0)).rgb, d = texture(tSrc, vUv + t * vec2(1.0, 1.0)).rgb;
  vec3 e = texture(tSrc, vUv).rgb;
  gl_FragColor = vec4((a + b + c + d) * 0.2 + e * 0.2, 1.0);
}`,sv=`
varying vec2 vUv; uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 s = texture(tSrc, vUv + t * vec2(-1.0, 0.0)).rgb + texture(tSrc, vUv + t * vec2(1.0, 0.0)).rgb
         + texture(tSrc, vUv + t * vec2(0.0, -1.0)).rgb + texture(tSrc, vUv + t * vec2(0.0, 1.0)).rgb;
  s = s * 0.125 + texture(tSrc, vUv).rgb * 0.5;
  gl_FragColor = vec4(s + texture(tAdd, vUv).rgb, 1.0);
}`,rv=`
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
}`,av=`
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
    float side = dot(np, uWaterPlane.xyz) + uWaterPlane.w + wob;
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
    // aerated whitewater: the entrained air scatters light, so the volume itself turns milky
    if (uAeration > 0.002) {
      float an = fbm3(uv * vec2(3.5, 4.5) + uTime * vec2(0.5, 1.7)) * fbm3(uv * vec2(8.0, 9.0) - uTime * vec2(1.1, 0.6)) * 2.2;
      vec3 white = uUnderColor * 6.5 + vec3(0.010, 0.014, 0.016);
      scat = mix(scat, white * (0.55 + 0.9 * an), clamp(uAeration * 1.1, 0.0, 1.0));
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
}`,Ua=class{constructor(t){this.renderer=t,this.fsScene=new Si,this.fsCam=new hi(-1,1,1,-1,0,1),this.fsQuad=new St(new Di(2,2),null),this.fsQuad.frustumCulled=!1,this.fsScene.add(this.fsQuad),this.w=2,this.h=2,this.levels=5,this.useOpaque=!0;let e=(s,a)=>new re({uniforms:a,vertexShader:ev,fragmentShader:s,depthTest:!1,depthWrite:!1});this.matPre=e(iv,{tScene:{value:null},uThreshold:{value:.16},uKnee:{value:.12}}),this.matDown=e(nv,{tSrc:{value:null},uTexel:{value:new Mt}}),this.matUp=e(sv,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new Mt}}),this.matAdapt=e(rv,{tScene:{value:null},tPrev:{value:null},uDt:{value:.016},uReset:{value:1}}),this.u={tScene:{value:null},tDepth:{value:null},tBloom:{value:null},tAdapt:{value:null},tLens:{value:null},uNoise:nt.uNoise,uResolution:{value:new Mt},uNearFar:{value:new Mt(.08,3e4)},uTime:{value:0},uCamPos:{value:new M},uCamRight:{value:new M},uCamUp:{value:new M},uCamFwd:{value:new M},uTanFov:{value:new Mt},uPrevViewProj:{value:new At},uMotionBlur:{value:0},uBloom:{value:.55},uExposureKey:{value:.125},uExposureRange:{value:new Mt(.5,7)},uExposureBias:{value:1},uWaterPlane:{value:new ne(0,1,0,0)},uUnderAmount:{value:0},uUnderColor:{value:new M(.004,.012,.018)},uUnderExt:{value:new M(.42,.2,.16)},uAeration:{value:0},uUnderDistort:{value:.012},uShaftDir:{value:new M(0,1,0)},uShaft:{value:0},uLensStrength:{value:.05},uSheet:{value:0},uBlur:{value:0},uDofFocus:{value:10},uDofAmount:{value:0},uVignette:{value:.42},uGrain:{value:.028},uTunnel:{value:0},uDesat:{value:0},uFade:{value:0},uWhiteout:{value:0},uGradeMix:{value:1}},this.matComposite=e(av,this.u),this.matFXAA=new re({uniforms:{tDiffuse:{value:null},resolution:{value:new Mt}},vertexShader:qc.vertexShader,fragmentShader:qc.fragmentShader,depthTest:!1,depthWrite:!1}),this.matCopy=e("varying vec2 vUv; uniform sampler2D tSrc; void main(){ gl_FragColor = texture(tSrc, vUv); }",{tSrc:{value:null}});let i=new ki(new Uint8Array([0,0,0,0]),1,1);i.needsUpdate=!0,this.blankLens=i,this.u.tLens.value=i,this.rtScene=null,this.rtOpaque=null,this.rtLDR=null,this.down=[],this.up=[];let n={type:nt.hdrType,format:ue,depthBuffer:!1,minFilter:Ee,magFilter:Ee};this.adapt=[new ye(1,1,n),new ye(1,1,n)],this.adaptIdx=0,this.adaptReset=!0,this.fxaa=!0,this.prevViewProj=new At,this._vp=new At}setSize(t,e,i){if(t=Math.max(2,Math.floor(t)),e=Math.max(2,Math.floor(e)),!i&&t===this.w&&e===this.h&&this.rtScene)return;this.w=t,this.h=e,(c=>c.forEach(h=>h&&h.dispose()))([this.rtScene,this.rtOpaque,this.rtLDR,...this.down,...this.up]);let s={type:nt.hdrType,format:ue,magFilter:ee};this.rtScene=new ye(t,e,{...s,minFilter:ei,generateMipmaps:!0,depthBuffer:!0}),this.rtScene.depthTexture=new Vn(t,e),this.rtOpaque=new ye(t,e,{...s,minFilter:ee,depthBuffer:!0}),this.rtOpaque.depthTexture=new Vn(t,e),this.rtLDR=new ye(t,e,{type:Ve,format:ue,minFilter:ee,magFilter:ee,depthBuffer:!1}),this.down=[],this.up=[];let a=t>>1,o=e>>1;for(let c=0;c<this.levels;c++){a=Math.max(2,a),o=Math.max(2,o);let h={...s,minFilter:ee,depthBuffer:!1};this.down.push(new ye(a,o,h)),c<this.levels-1&&this.up.push(new ye(a,o,h)),a>>=1,o>>=1}nt.uResolution.value.set(t,e),this.adaptReset=!0}_pass(t,e){this.fsQuad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.fsScene,this.fsCam)}render(t,e,i,n){let s=this.renderer,a=this.u;this.useOpaque&&t(this.rtOpaque,!0),t(this.rtScene,!1),this.matPre.uniforms.tScene.value=this.rtScene.texture,this._pass(this.matPre,this.down[0]);for(let d=1;d<this.levels;d++)this.matDown.uniforms.tSrc.value=this.down[d-1].texture,this.matDown.uniforms.uTexel.value.set(1/this.down[d-1].width,1/this.down[d-1].height),this._pass(this.matDown,this.down[d]);let o=this.down[this.levels-1];for(let d=this.levels-2;d>=0;d--)this.matUp.uniforms.tSrc.value=o.texture,this.matUp.uniforms.tAdd.value=this.down[d].texture,this.matUp.uniforms.uTexel.value.set(1/o.width,1/o.height),this._pass(this.matUp,this.up[d]),o=this.up[d];let c=this.adapt[this.adaptIdx],h=this.adapt[1-this.adaptIdx];this.matAdapt.uniforms.tScene.value=this.rtScene.texture,this.matAdapt.uniforms.tPrev.value=c.texture,this.matAdapt.uniforms.uDt.value=i,this.matAdapt.uniforms.uReset.value=this.adaptReset?1:0,this._pass(this.matAdapt,h),this.adaptIdx=1-this.adaptIdx,this.adaptReset=!1,a.tScene.value=this.rtScene.texture,a.tDepth.value=this.rtScene.depthTexture,a.tBloom.value=o.texture,a.tAdapt.value=h.texture,a.uResolution.value.set(this.w,this.h),a.uNearFar.value.set(e.near,e.far),a.uTime.value=n;let u=e.matrixWorld.elements;a.uCamRight.value.set(u[0],u[1],u[2]),a.uCamUp.value.set(u[4],u[5],u[6]),a.uCamFwd.value.set(-u[8],-u[9],-u[10]),a.uCamPos.value.copy(e.position);let l=Math.tan(Sn.degToRad(e.fov)*.5);a.uTanFov.value.set(l*e.aspect,l),a.uPrevViewProj.value.copy(this.prevViewProj),this._vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.prevViewProj.copy(this._vp),this.fxaa?(this._pass(this.matComposite,this.rtLDR),this.matFXAA.uniforms.tDiffuse.value=this.rtLDR.texture,this.matFXAA.uniforms.resolution.value.set(1/this.w,1/this.h),this._pass(this.matFXAA,null)):this._pass(this.matComposite,null)}};var ov=`
attribute vec4 aDrop;       // x, y (0..1), radius (in screen heights), strength
uniform float uAspect;
varying vec2 vP; varying float vS;
void main() {
  vP = position.xy; vS = aDrop.w;
  vec2 c = aDrop.xy * 2.0 - 1.0;
  gl_Position = vec4(c + position.xy * vec2(aDrop.z / uAspect, aDrop.z) * 2.0 * vec2(1.0, 1.18), 0.0, 1.0);
}`,cv=`
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
}`,Na=class{constructor(t,e=120){this.renderer=t,this.max=e,this.rt=new ye(640,360,{type:nt.hdrType,format:ue,depthBuffer:!1,minFilter:ee,magFilter:ee}),this.x=new Float32Array(e),this.y=new Float32Array(e),this.r=new Float32Array(e),this.vy=new Float32Array(e),this.vx=new Float32Array(e),this.life=new Float32Array(e),this.wait=new Float32Array(e),this.head=0,this.rainAcc=0,this.count=0,this.trail=new Float32Array(e);let i=new Gi;i.setAttribute("position",new Vt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),this.aDrop=new qe(new Float32Array(e*4),4),this.aDrop.setUsage(Wi),i.setAttribute("aDrop",this.aDrop),i.instanceCount=0,this.dropMat=new re({uniforms:{uAspect:{value:16/9}},vertexShader:ov,fragmentShader:cv,transparent:!0,depthTest:!1,depthWrite:!1,blending:xn}),this.drops=new St(i,this.dropMat),this.drops.frustumCulled=!1,this.fadeMat=new re({uniforms:{uK:{value:.95}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform float uK; void main(){ gl_FragColor = vec4(uK); }",transparent:!0,depthTest:!1,depthWrite:!1,blending:Fc,blendEquation:nn,blendSrc:Sa,blendDst:Dc,blendSrcAlpha:Sa,blendDstAlpha:er}),this.fade=new St(new Di(2,2),this.fadeMat),this.fade.frustumCulled=!1,this.scene=new Si,this.scene.add(this.fade,this.drops),this.fade.renderOrder=0,this.drops.renderOrder=1,this.cam=new hi(-1,1,1,-1,0,1),this.needClear=!0,this.sheet=0}get texture(){return this.rt.texture}spawn(t,e=0){for(let i=0;i<t;i++){let n=this.head;this.head=(this.head+1)%this.max,this.x[n]=Math.random(),this.y[n]=Math.pow(Math.random(),.8);let s=Math.random()<.14+.26*e;this.r[n]=s?.011+Math.random()*.015:.003+Math.random()*.008,this.vy[n]=0,this.vx[n]=0,this.wait[n]=s?Math.random()*1.6:1e9,this.life[n]=s?5.5:1.8+Math.random()*3.2}}wipe(){this.life.fill(0),this.needClear=!0,this.sheet=0}update(t,e,i,n){if(i)(this.count>0||!this.needClear)&&this.wipe();else{this.rainAcc+=t*e;let u=Math.floor(this.rainAcc);this.rainAcc-=u,u>0&&this.spawn(Math.min(u,6))}this.sheet=Math.max(0,this.sheet-t*.42);let s=this.aDrop.array,a=0;for(let u=0;u<this.max;u++){if(this.life[u]<=0)continue;if(this.life[u]-=t,this.wait[u]<1e8&&(this.wait[u]-=t,this.wait[u]<=0)){if(this.vy[u]=Math.min(.2,this.vy[u]+t*(.12+4*this.r[u])),Math.random()<t*.8&&(this.vy[u]*=.2,this.wait[u]=Math.random()*.5),this.vx[u]+=(Math.random()-.5)*t*.5,this.vx[u]*=Math.exp(-t*4),this.y[u]-=this.vy[u]*t,this.x[u]+=this.vx[u]*t,this.trail[u]+=this.vy[u]*t,this.trail[u]>.035+this.r[u]){this.trail[u]=0;let f=this.head;this.head=(this.head+1)%this.max,f!==u&&this.life[f]<=0&&(this.x[f]=this.x[u]+(Math.random()-.5)*.004,this.y[f]=this.y[u]+this.r[u]*1.2,this.r[f]=.0035+Math.random()*.003,this.vy[f]=0,this.vx[f]=0,this.wait[f]=1e9,this.life[f]=.9+Math.random()*1.2,this.trail[f]=0)}if(this.r[u]-=t*.0012,this.y[u]<-.06||this.r[u]<.004){this.life[u]=0;continue}}let l=Math.min(1,this.life[u]/.8),d=a*4;s[d]=this.x[u],s[d+1]=this.y[u],s[d+2]=this.r[u]*(.6+.4*l),s[d+3]=l,a++}this.count=a,this.drops.geometry.instanceCount=a,this.aDrop.needsUpdate=!0,this.dropMat.uniforms.uAspect.value=n,this.fadeMat.uniforms.uK.value=Math.exp(-t*22);let o=this.renderer,c=o.getRenderTarget(),h=o.autoClear;o.setRenderTarget(this.rt),this.needClear&&(o.setClearColor(0,0),o.clear(),this.needClear=!1),o.autoClear=!1,o.render(this.scene,this.cam),o.autoClear=h,o.setRenderTarget(c)}};var Ns={cinematic:{key:"cinematic",label:"CINEMATIC",oceanRings:512,oceanSegs:512,oceanStep:.28,envSize:512,maxPixels:3686400,minScale:.6,refraction:!0,foamAcc:1024,ripples:!0,motionBlur:!0,fxaa:!0,bloomLevels:5,rain:26e3,splashes:2600,spray:9e3,bubbles:1400,motes:2600,lensRes:.5,lensDrops:150},high:{key:"high",label:"HIGH",oceanRings:384,oceanSegs:384,oceanStep:.36,envSize:256,maxPixels:2073600,minScale:.55,refraction:!0,foamAcc:512,ripples:!0,motionBlur:!1,fxaa:!0,bloomLevels:5,rain:15e3,splashes:1500,spray:5e3,bubbles:900,motes:1500,lensRes:.5,lensDrops:100},performance:{key:"performance",label:"PERFORMANCE",oceanRings:256,oceanSegs:256,oceanStep:.5,envSize:128,maxPixels:921600,minScale:.5,refraction:!1,foamAcc:0,ripples:!1,motionBlur:!1,fxaa:!1,bloomLevels:4,rain:6e3,splashes:500,spray:2e3,bubbles:400,motes:600,lensRes:.35,lensDrops:60}},za=class{constructor(t){this.renderer=t,this.profile=Ns.cinematic,this.scale=1,this.frameMs=16.7,this.fps=60,this._acc=0,this._slow=0,this._fast=0,this.adaptive=!0,this.info=this.detect()}detect(){let t=this.renderer.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),i=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown",n=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),s=/SwiftShader|llvmpipe|Software|Basic Render/i.test(i),a=/Intel\(R\) (U?HD|Iris)(?! Xe)|Mali|Adreno|PowerVR/i.test(i);return{webgl2:this.renderer.capabilities.isWebGL2,webgpu:typeof navigator<"u"&&!!navigator.gpu,halfFloat:!!t.getExtension("EXT_color_buffer_float")||!!t.getExtension("EXT_color_buffer_half_float"),gpu:i,mobile:n,software:s,weak:a}}pickDefault(){let t=this.info;return t.software||t.mobile?"performance":t.weak?"high":"cinematic"}setProfile(t){this.profile=Ns[t]||Ns.cinematic,this.scale=1,this._slow=this._fast=0}renderSize(t,e){let i=this.profile.maxPixels,n=Math.min(1,Math.sqrt(i/Math.max(1,t*e)));return n*=this.scale,[Math.max(320,Math.round(t*n)),Math.max(180,Math.round(e*n))]}update(t){let e=t*1e3;return this.frameMs+=(e-this.frameMs)*.06,this.fps=1e3/this.frameMs,this.adaptive?(this.frameMs>21.5?(this._slow+=t,this._fast=0):this.frameMs<13.5?(this._fast+=t,this._slow=0):(this._slow*=.9,this._fast*=.9),this._slow>1.5&&this.scale>this.profile.minScale?(this.scale=Math.max(this.profile.minScale,this.scale-.08),this._slow=0,!0):this._fast>6&&this.scale<1?(this.scale=Math.min(1,this.scale+.05),this._fast=0,!0):!1):!1}};var si=[["hips",-1,0,0,0],["spine",0,0,.12,0],["chest",1,0,.3,0],["neck",2,0,.525,0],["head",3,0,.625,.012],["upperArmL",2,.178,.455,0],["foreArmL",5,.236,.172,.006],["handL",6,.286,-.078,.032],["upperArmR",2,-.178,.455,0],["foreArmR",8,-.236,.172,.006],["handR",9,-.286,-.078,.032],["thighL",0,.096,-.07,0],["shinL",11,.106,-.505,.006],["footL",12,.106,-.925,-.016],["thighR",0,-.096,-.07,0],["shinR",14,-.106,-.505,.006],["footR",15,-.106,-.925,-.016]],T={};si.forEach((r,t)=>{T[r[0]]=t});var hv=new M(0,.082,.088),qt={jacket:[.72,.15,.04],jacketDark:[.42,.085,.028],tape:[.85,.87,.84],pants:[.045,.055,.08],shoe:[.022,.022,.024],skin:[.62,.43,.34],skinDark:[.46,.29,.22],hair:[.03,.024,.02],lip:[.36,.16,.14],eye:[.05,.035,.03]},Oa=class{constructor(){this.pos=[],this.col=[],this.si=[],this.sw=[],this.idx=[],this.n=0}vert(t,e,i){this.pos.push(t.x,t.y,t.z),this.col.push(e[0],e[1],e[2]);let n=[0,0,0,0],s=[0,0,0,0],a=0;for(let o=0;o<i.length&&o<4;o++)n[o]=i[o][0],s[o]=i[o][1],a+=i[o][1];for(let o=0;o<4;o++)s[o]/=a||1;return this.si.push(...n),this.sw.push(...s),this.n++}tube(t,e,i=!0,n=!0){let s=new M,a=new M,o=new M,c=new M,h=new M(0,0,1),u=new M(0,1,0),l=[];for(let f=0;f<t.length;f++){let g=t[Math.max(0,f-1)].c,b=t[Math.min(t.length-1,f+1)].c;s.subVectors(b,g).normalize(),t[f].ax?a.copy(t[f].ax):(a.crossVectors(s,h),a.lengthSq()<.04&&a.crossVectors(s,u),a.normalize()),o.crossVectors(a,s).normalize();let m=this.n;for(let p=0;p<e;p++){let y=p/e*Math.PI*2,v=Math.cos(y),_=Math.sin(y),R=t[f].rx,x=t[f].rz;if(t[f].shape){let A=t[f].shape(y,v,_);R*=A,x*=A}c.copy(t[f].c).addScaledVector(a,v*R).addScaledVector(o,_*x);let w=typeof t[f].col=="function"?t[f].col(y,c):t[f].col;this.vert(c,w,t[f].w)}l.push(m)}for(let f=0;f<l.length-1;f++)for(let g=0;g<e;g++){let b=l[f]+g,m=l[f]+(g+1)%e,p=l[f+1]+g,y=l[f+1]+(g+1)%e;this.idx.push(b,p,m,m,p,y)}let d=(f,g,b)=>{let m=typeof g.col=="function"?g.col(0,g.c):g.col,p=this.vert(g.c,m,g.w);for(let y=0;y<e;y++){let v=f+y,_=f+(y+1)%e;b?this.idx.push(p,_,v):this.idx.push(p,v,_)}};i&&d(l[0],t[0],!0),n&&d(l[l.length-1],t[t.length-1],!1)}build(){let t=new ce;return t.setAttribute("position",new se(this.pos,3)),t.setAttribute("color",new se(this.col,3)),t.setAttribute("skinIndex",new Cs(this.si,4)),t.setAttribute("skinWeight",new se(this.sw,4)),t.setIndex(this.idx),t.computeVertexNormals(),t}},Ae=(r,t,e)=>new M(r,t,e),Ui=(r,t,e)=>new M().lerpVectors(r,t,e),sd=(r,t,e)=>{let i=Math.max(0,Math.min(1,(e-r)/(t-r)));return i*i*(3-2*i)};function lv(){let r=new Oa,t=18,e=s=>{let a=si[T[s]];return Ae(a[2],a[3],a[4])},i=[[-.135,.12,.095],[-.085,.165,.116],[-.02,.176,.12],[.05,.166,.114],[.11,.156,.108],[.17,.152,.106],[.24,.164,.114],[.31,.18,.124],[.385,.184,.128],[.445,.186,.118],[.488,.152,.1],[.52,.1,.086],[.552,.08,.08],[.58,.074,.076]],n=s=>{if(s<.02)return[[T.hips,1]];if(s<.14){let a=sd(.02,.14,s);return[[T.hips,1-a],[T.spine,a]]}if(s<.2)return[[T.spine,1]];if(s<.32){let a=sd(.2,.32,s);return[[T.spine,1-a],[T.chest,a]]}return[[T.chest,1]]};r.tube(i.map(([s,a,o])=>{let c=s>-.06,h=c?1.07:1;return{c:Ae(0,s,c?.004:0),rx:a*h,rz:o*h,w:n(s),col:(u,l)=>c?s>.28&&s<.325?qt.tape:Math.abs(l.x)<.012&&l.z>0||s>.5?qt.jacketDark:qt.jacket:qt.pants}}),t),r.tube([{c:Ae(0,.53,.002),rx:.063,rz:.066,col:qt.skin,w:[[T.chest,.6],[T.neck,.4]]},{c:Ae(0,.575,.006),rx:.061,rz:.064,col:qt.skin,w:[[T.neck,1]]},{c:Ae(0,.63,.012),rx:.06,rz:.063,col:qt.skin,w:[[T.neck,.5],[T.head,.5]]},{c:Ae(0,.665,.016),rx:.057,rz:.06,col:qt.skin,w:[[T.head,1]]}],14);for(let s of[1,-1]){let a=s>0?T.upperArmL:T.upperArmR,o=s>0?T.foreArmL:T.foreArmR,c=s>0?T.handL:T.handR,h=e(s>0?"upperArmL":"upperArmR"),u=e(s>0?"foreArmL":"foreArmR"),l=e(s>0?"handL":"handR"),d=Ae(l.x+s*.03,l.y-.182,l.z+.012),f=[];f.push({c:Ae(h.x-s*.012,h.y+.052,0),rx:.036,rz:.04,col:qt.jacket,w:[[T.chest,.65],[a,.35]]}),f.push({c:Ae(h.x+s*.004,h.y+.02,0),rx:.064,rz:.066,col:qt.jacket,w:[[T.chest,.4],[a,.6]]});let g=[[.12,.066],[.3,.062],[.52,.058],[.74,.054],[.9,.052]];for(let[y,v]of g){let _=y>.28&&y<.4;f.push({c:Ui(h,u,y),rx:v,rz:v*1.04,col:_?qt.tape:qt.jacket,w:y>.8?[[a,.75],[o,.25]]:[[a,1]]})}f.push({c:u.clone(),rx:.051,rz:.053,col:qt.jacket,w:[[a,.5],[o,.5]]});let b=[[.12,.052],[.32,.051],[.55,.046],[.78,.041],[.9,.04]];for(let[y,v]of b)f.push({c:Ui(u,l,y),rx:v,rz:v,col:y>.86?qt.jacketDark:qt.jacket,w:y<.2?[[a,.25],[o,.75]]:[[o,1]]});f.push({c:Ui(u,l,.955),rx:.027,rz:.031,col:qt.skin,w:[[o,1]]}),f.push({c:l.clone(),rx:.021,rz:.031,col:qt.skin,w:[[o,.5],[c,.5]]}),f.push({c:Ui(l,d,.3),rx:.017,rz:.044,col:qt.skin,w:[[c,1]]}),f.push({c:Ui(l,d,.55),rx:.015,rz:.046,col:qt.skin,w:[[c,1]]}),f.push({c:Ui(l,d,.8),rx:.012,rz:.04,col:qt.skinDark,w:[[c,1]]}),f.push({c:d.clone(),rx:.007,rz:.022,col:qt.skinDark,w:[[c,1]]}),r.tube(f,12);let m=Ui(l,d,.22).add(Ae(0,0,.034)),p=Ui(l,d,.52).add(Ae(s*.008,0,.066));r.tube([{c:m,rx:.012,rz:.013,col:qt.skin,w:[[c,1]]},{c:Ui(m,p,.6),rx:.011,rz:.011,col:qt.skin,w:[[c,1]]},{c:p,rx:.007,rz:.007,col:qt.skinDark,w:[[c,1]]}],7)}for(let s of[1,-1]){let a=s>0?T.thighL:T.thighR,o=s>0?T.shinL:T.shinR,c=s>0?T.footL:T.footR,h=e(s>0?"thighL":"thighR"),u=e(s>0?"shinL":"shinR"),l=e(s>0?"footL":"footR"),d=[];d.push({c:Ae(h.x,h.y+.045,0),rx:.08,rz:.09,col:qt.pants,w:[[T.hips,.7],[a,.3]]});let f=[[.05,.094,.1],[.25,.09,.096],[.5,.079,.084],[.75,.067,.07],[.92,.06,.062]];for(let[m,p,y]of f)d.push({c:Ui(h,u,m),rx:p,rz:y,col:qt.pants,w:m<.15?[[T.hips,.4],[a,.6]]:m>.85?[[a,.75],[o,.25]]:[[a,1]]});d.push({c:u.clone(),rx:.058,rz:.061,col:qt.pants,w:[[a,.5],[o,.5]]});let g=[[.1,.056,.06],[.28,.057,.066],[.5,.05,.056],[.75,.042,.045],[.93,.038,.04]];for(let[m,p,y]of g)d.push({c:Ui(u,l,m).add(Ae(0,0,m>.15&&m<.6?-.008:0)),rx:p,rz:y,col:qt.pants,w:m<.2?[[a,.25],[o,.75]]:[[o,1]]});d.push({c:l.clone(),rx:.036,rz:.04,col:qt.shoe,w:[[o,.5],[c,.5]]}),r.tube(d,14,!0,!1);let b=l.y-.045;r.tube([{c:Ae(l.x,b+.012,l.z-.068),rx:.03,rz:.03,col:qt.shoe,w:[[c,1]]},{c:Ae(l.x,b+.006,l.z-.035),rx:.042,rz:.046,col:qt.shoe,w:[[c,.8],[o,.2]]},{c:Ae(l.x,b,l.z+.03),rx:.046,rz:.048,col:qt.shoe,w:[[c,1]]},{c:Ae(l.x+s*.004,b-.008,l.z+.1),rx:.049,rz:.036,col:qt.shoe,w:[[c,1]]},{c:Ae(l.x+s*.006,b-.014,l.z+.165),rx:.044,rz:.026,col:qt.shoe,w:[[c,1]]},{c:Ae(l.x+s*.006,b-.018,l.z+.205),rx:.028,rz:.016,col:qt.shoe,w:[[c,1]]}],12)}return r.build()}function uv(){let r=new Oa,t=Ae(0,.722,.022),e=20,i=26,n=[];for(let h=0;h<=e;h++){let u=h/e*Math.PI,l=Math.cos(u),d=Math.sin(u),f=Math.max(0,-l),g=t.y+l*(l>0?.108:.118),b=.078*(1-.3*f*f),m=.097*(1-.2*f*f),p=t.z+.012*f-.006*Math.max(0,l);n.push({c:Ae(0,g,p),ax:Ae(1,0,0),rx:Math.max(.004,b*d),rz:Math.max(.004,m*d),w:f>.75?[[T.head,.7],[T.neck,.3]]:[[T.head,1]],shape:(y,v,_)=>{let R=Math.max(0,-_),x=1,w=g-t.y;return x+=.2*Math.exp(-Math.pow((w+.022)/.02,2))*Math.pow(R,26)*Math.pow(Math.max(0,1-Math.abs(v)*5),1),x+=.035*Math.exp(-Math.pow((w-.03)/.016,2))*Math.pow(R,3),x-=.03*Math.exp(-Math.pow((w-.008)/.012,2))*Math.pow(R,2)*Math.exp(-Math.pow((Math.abs(v)-.36)/.16,2)),x+=.05*Math.exp(-Math.pow((w+.088)/.022,2))*Math.pow(R,4),x},col:(y,v)=>{let _=v.y-t.y,R=v.x,x=v.z-t.z,w=x>0,A=w?.058+Math.abs(R)*-.25:-.045-Math.max(0,-x)*.2;if(_>A)return qt.hair;if(w){if(Math.abs(_-.01)<.01&&Math.abs(Math.abs(R)-.031)<.014)return qt.eye;if(Math.abs(_-.03)<.006&&Math.abs(Math.abs(R)-.031)<.022)return qt.hair;if(Math.abs(_+.058)<.007&&Math.abs(R)<.024)return qt.lip;if(_<-.02&&_>-.1&&Math.abs(R)>.02)return qt.skinDark}return qt.skin}})}r.tube(n,i,!1,!1);let s=r.build(),a=s.attributes.position,o=s.attributes.color,c=s.attributes.normal;for(let h=0;h<a.count;h++)o.getX(h)<.04&&o.getY(h)<.03&&a.setXYZ(h,a.getX(h)+c.getX(h)*.008,a.getY(h)+c.getY(h)*.008,a.getZ(h)+c.getZ(h)*.008);return s.computeVertexNormals(),s}var Ba=class{constructor(){this.group=new de,this.group.name="survivor",this.bones=si.map(t=>{let e=new Wn;return e.name=t[0],e}),si.forEach((t,e)=>{let i=this.bones[e];if(t[1]>=0){let n=si[t[1]];i.position.set(t[2]-n[2],t[3]-n[3],t[4]-n[4]),this.bones[t[1]].add(i)}else i.position.set(t[2],t[3],t[4])}),this.root=this.bones[0],this.group.add(this.root),this.group.updateMatrixWorld(!0),this.skeleton=new Is(this.bones),this.material=new li({vertexColors:!0,roughness:.62,metalness:0,clearcoat:.28,clearcoatRoughness:.32,envMapIntensity:1}),this.body=new Gn(lv(),this.material),this.head=new Gn(uv(),this.material);for(let t of[this.body,this.head])t.frustumCulled=!1,t.layers.enable(1),this.group.add(t),t.bind(this.skeleton,new At);this.body.visible=!1,this.head.visible=!1,this._v=new M,this.eyeLocal=hv.clone(),this.glb=null}useGlb(t){this.glb=t,this.body.visible=!1,this.head.visible=!1,this.procHead=this.head,this.head={_v:!0,get visible(){return this._v},set visible(e){this._v=e,t.setHeadVisible(e)}},this.material=t.material,this.eyeLocal.set(0,t.eye.y-si[T.head][3],t.eye.z-si[T.head][4]+.06)}retarget(){this.glb&&this.glb.update(this.bones)}bone(t){return this.bones[T[t]]}eyeWorld(t){return t.copy(this.eyeLocal).applyMatrix4(this.bones[T.head].matrixWorld)}};var rd=1025,dv=1.22,vr=9.81,Ha=.55;function Ni(r,t,e,i,n,s,a,o,c=-1,h=-1){return{name:r,offset:new M(t,e,i),rest:new M(t,e,i),vol:n/1e3,half:s,cdaP:a,cdaA:o,bone:c,boneB:h,sub:0,depth:-10,world:new M,wasSub:0}}var Va=class r{constructor(t){this.waves=t,this.mass=80.6,this.inertia=new M(11.5,1.7,12.5),this.pos=new M,this.vel=new M,this.quat=new xt,this.angVel=new M,this.prevPos=new M,this.prevQuat=new xt,this.points=[Ni("head",0,.7,.02,5.2,.11,.035,.012),Ni("chest",0,.38,.01,29.7,.15,.13,.03),Ni("pelvis",0,0,0,15.5,.13,.11,.02),Ni("shoulderL",.21,.4,0,3.2,.07,.035,.006),Ni("shoulderR",-.21,.4,0,3.2,.07,.035,.006),Ni("armL",.28,.05,.02,1.8,.05,.04,.005,T.handL),Ni("armR",-.28,.05,.02,1.8,.05,.04,.005,T.handR),Ni("legL",.1,-.33,0,6.5,.09,.07,.008,T.shinL),Ni("legR",-.1,-.33,0,6.5,.09,.07,.008,T.shinR),Ni("footL",.105,-.82,0,3.4,.06,.055,.006,T.footL),Ni("footR",-.105,-.82,0,3.4,.06,.055,.006,T.footR)],this.totalVol=this.points.reduce((e,i)=>e+i.vol,0),this.breathVol=0,this.extForce=new M,this.extTorque=new M,this.wind=new M,this.waterTorque=new M,this.hydroTorque=new M,this.subFrac=0,this.mouthDepth=-1,this.eyeDepth=-1,this.relFlow=new M,this.relSpeed=0,this.dragG=0,this.aer=0,this.turb=0,this.plunge=0,this.surface=di(),this.surfaceH=0,this.splash=0,this.splashPos=new M,this._s=di(),this._w={vx:0,vy:0,vz:0,ax:0,ay:0,az:0},this._r=new M,this._p=new M,this._vp=new M,this._u=new M,this._f=new M,this._F=new M,this._T=new M,this._axis=new M,this._tmp=new M,this._tmp2=new M,this._qi=new xt,this._dq=new xt,this._up=new M,this._mouth=new M(0,.655,.105),this._eye=new M(0,.705,.1)}reset(t,e){let i=this.waves.sample(t,e,this._s);this.pos.set(t,i.h-.62,e),this.vel.set(i.vx,i.vy,i.vz),this.quat.identity(),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat)}setAirway(t,e){this._mouth.copy(t),this._eye.copy(e),this._mouthH=new M(t.x,t.y-.625,t.z-.012),this._eyeH=new M(e.x,e.y-.625,e.z-.012)}pin(t,e,i,n){this.pos.copy(t),this.prevPos.copy(t),this.quat.copy(e),this.prevQuat.copy(e),this.vel.copy(i),this.angVel.copy(n);let s=this._r.copy(this._mouth).applyQuaternion(e).add(t),a=this.waves.sample(s.x,s.z,this.surface);this.surfaceH=a.h,this.mouthDepth=a.h-s.y;let o=this._p.copy(this._eye).applyQuaternion(e).add(t);this.eyeDepth=a.h-o.y,this.subFrac=Math.max(0,Math.min(1,(a.h-t.y+.2)/.7)),this.relFlow.set(0,0,0),this.relSpeed=0,this.dragG=0,this.aer=a.aer,this.turb=a.turb,this.plunge=0,this.splash=0,this.extForce.set(0,0,0),this.extTorque.set(0,0,0)}syncLimbs(t){let e=this._tmp,i=t.group.matrixWorld,n=r._im||(r._im=new At);n.copy(i).invert(),this._mouthH||this.setAirway(this._mouth.clone(),this._eye.clone());let s=t.bones[T.head].matrixWorld;e.copy(this._mouthH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._mouth.lerp(e,.5),e.copy(this._eyeH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._eye.lerp(e,.5);for(let a of this.points)a.bone<0||(e.setFromMatrixPosition(t.bones[a.bone].matrixWorld).applyMatrix4(n),e.lengthSq()<1.6&&a.offset.lerp(e,.5))}step(t){let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._F.set(0,0,0),n=this._T.set(0,0,0),s=this._axis.set(0,1,0).applyQuaternion(this.quat),a=0,o=0,c=0,h=0,u=0,l=0;this.relFlow.set(0,0,0),this.splash=0;let d=this._tmp2.set(0,0,0),f=0,g=0;for(let H=0;H<this.points.length;H++){let U=this.points[H],k=this._r.copy(U.offset).applyQuaternion(this.quat),W=this._p.copy(this.pos).add(k);U.world.copy(W);let q=this._vp.copy(this.angVel).cross(k).add(this.vel),J=e.sample(W.x,W.z,this._s),G=J.h-W.y;U.depth=G;let z=Math.max(0,Math.min(1,(G+U.half)/(2*U.half)));if(U.bone<0&&z>.5!=U.wasSub>.5){let Z=Math.abs(q.y-J.vy)+.4*Math.hypot(q.x-J.vx,q.z-J.vz);Z>this.splash&&(this.splash=Z,this.splashPos.set(W.x,J.h,W.z))}U.wasSub=z,U.sub=z;let V=this._f.set(0,0,0),st=U.vol+(H===1?this.breathVol/1e3:0);if(z>0){let Z=Math.max(0,G),rt=J.aer*Math.exp(-Z/3.5),ot=rd*(1-.72*rt);rt>c&&(c=rt),J.turb>h&&(h=J.turb),J.plunge>l&&(l=J.plunge);let ct=e.bodyFlow(J.x0,J.z0,Z,this._w),Et=Math.exp(-Z/80),X=Math.exp(-Z/(2.5+.35*Math.max(0,J.brkH)));ct.vx+=J.bvx*(.25*Et+.75*X),ct.vy+=J.bvy*Et,ct.vz+=J.bvz*(.25*Et+.75*X),J.plunge>.01&&(ct.vy-=J.plunge*Math.exp(-Z/(2+.45*Math.max(0,J.brkH)))),e.breakerFlow(W.x,W.y,W.z,J.h,ct);let Bt=ot*st*z;f+=-k.z*Bt*vr,g+=k.x*Bt*vr,V.set(Bt*(1+Ha)*ct.ax,Bt*(vr+(1+Ha)*(ct.ay+J.bay*Et)),Bt*(1+Ha)*ct.az);let wt=this._u.set(ct.vx-q.x,ct.vy-q.y,ct.vz-q.z),Rt=wt.dot(s),vt=this._tmp.copy(s).multiplyScalar(Rt),Nt=this._up.copy(wt).sub(vt),Pt=.5*ot*U.cdaP*z*Nt.length()+24*U.cdaP*z/.1,F=.5*ot*U.cdaA*z*Math.abs(Rt)+8*z*U.cdaA/.01,C=Nt.x*Pt+vt.x*F,K=Nt.y*Pt+vt.y*F,lt=Nt.z*Pt+vt.z*F;V.x+=C,V.y+=K,V.z+=lt,d.x+=C,d.y+=K,d.z+=lt,a+=st*z,this.relFlow.addScaledVector(wt,st*z),u+=st*z}if(z<1){let Z=this._u.set(this.wind.x-q.x,this.wind.y-q.y,this.wind.z-q.z),rt=.5*dv*U.cdaP*1.1*(1-z)*Z.length();V.addScaledVector(Z,rt)}i.add(V),n.add(this._tmp.copy(k).cross(V))}o=d.length(),this.hydroTorque.set(f,0,g),this.subFrac=a/this.totalVol,this.aer=c,this.turb=h,this.plunge=l,u>0&&this.relFlow.multiplyScalar(1/u),this.relSpeed=this.relFlow.length(),this.dragG=o/(this.mass*vr);let b=this.mass+Ha*rd*a;i.add(this.extForce),i.y-=this.mass*vr,this.vel.addScaledVector(i,t/b);let m=this.vel.length();m>45&&this.vel.multiplyScalar(45/m),this.pos.addScaledVector(this.vel,t),this.waterTorque.copy(n),n.add(this.extTorque);let p=this._qi.copy(this.quat).invert(),y=this._tmp.copy(this.angVel).applyQuaternion(p),v=this._tmp2.copy(n).applyQuaternion(p),_=1+.6*this.subFrac,R=this.inertia.x*_,x=this.inertia.y*_,w=this.inertia.z*_,A=(v.x-(w-x)*y.y*y.z)/R,E=(v.y-(R-w)*y.z*y.x)/x,S=(v.z-(x-R)*y.x*y.y)/w;y.x+=A*t,y.y+=E*t,y.z+=S*t;let N=Math.exp(-(.25+1.1*this.subFrac)*t);y.multiplyScalar(N);let O=y.length();O>14&&y.multiplyScalar(14/O),this.angVel.copy(y).applyQuaternion(this.quat);let it=this.angVel.length()*t;it>1e-7&&(this._dq.setFromAxisAngle(this._r.copy(this.angVel).normalize(),it),this.quat.premultiply(this._dq).normalize());let P=this._r.copy(this._mouth).applyQuaternion(this.quat).add(this.pos),L=e.sample(P.x,P.z,this.surface);this.surfaceH=L.h,this.mouthDepth=L.h-P.y;let D=this._p.copy(this._eye).applyQuaternion(this.quat).add(this.pos);this.eyeDepth=L.h-D.y}};var Ga=class{constructor(){this.reset(),this.events=[]}reset(){this.oxygen=100,this.stamina=100,this.temp=37,this.fatigue=0,this.blackout=0,this.alive=!0,this.cause="",this.timeAlive=0,this.breathPhase=0,this.lung=.6,this.breathRate=.3,this.exertion=0,this.gaspTimer=0,this.submergedTime=0,this.wasUnder=!1,this.swallow=0,this.eff=1,this.condition=1,this.shiver=0,this.inhaling=!1,this.lungAtDive=.6}update(t,e){if(!this.alive)return;this.timeAlive+=t;let i=e.mouthUnder,n=e.effort;if(this.exertion+=(pt(n*.6+(100-this.stamina)/160+(100-this.oxygen)/120)-this.exertion)*(1-Math.exp(-t*.8)),i)this.submergedTime+=t,this.oxygen-=t*(2.3+2.4*n+1.5*e.turb)*(1+.5*this.swallow)*(1.3-.45*this.lungAtDive),this.wasUnder||(this.inhaling&&e.sudden&&(this.swallow=Math.min(1,this.swallow+.45),this.oxygen-=6),this.lungAtDive=this.lung,this.events.push({type:"submerge",lung:this.lung})),this.lung=Math.max(.12,this.lung-t*(.025+.03*n));else{if(this.wasUnder){let y=pt((100-this.oxygen)/60+this.submergedTime/12);this.gaspTimer=1.5+5.5*y,this.events.push({type:"surface",need:y,time:this.submergedTime}),this.breathPhase=0,this.submergedTime=0}let l=this.gaspTimer>0?1:0;this.gaspTimer=Math.max(0,this.gaspTimer-t),this.oxygen+=t*(15+13*l)*(1-.6*this.swallow),this.swallow=Math.max(0,this.swallow-t*.12);let d=bt(.26,.95,pt(this.exertion*.9+l*.55));this.breathRate+=(d-this.breathRate)*(1-Math.exp(-t*1.4));let f=this.stamina<25?1+.35*Math.sin(this.timeAlive*2.7)*Math.sin(this.timeAlive*1.3):1,g=this.breathPhase;this.breathPhase+=t*this.breathRate*f,this.breathPhase>=1&&(this.breathPhase-=1);let b=this.breathPhase<.4;b&&!this.inhaling&&this.events.push({type:"inhale",strength:pt(.25+this.exertion*.8+l*.6),gasp:l>0&&g>this.breathPhase?1:l}),!b&&this.inhaling&&this.events.push({type:"exhale",strength:pt(.2+this.exertion*.7+l*.4),cough:this.swallow>.25?1:0}),this.inhaling=b;let m=bt(.45,.95,pt(this.exertion+l)),p=b?.45+.5*m*(this.breathPhase/.4):.95*m-(.95*m-.4)*((this.breathPhase-.4)/.6)+0;this.lung+=(yi(p,.3,1)-this.lung)*(1-Math.exp(-t*9)),e.brace>.5&&(this.lung+=(1-this.lung)*(1-Math.exp(-t*5)))}this.wasUnder=i,this.oxygen=yi(this.oxygen,0,100);let s=Ie(36,32.5,this.temp),a=1-pt((36-this.temp)/3.5),o=100-this.fatigue*.62,c=n>.42?(n-.42)*7:0,h=i?0:n<.42?(3.4-n*4)*(.45+.55*a)*(1-this.fatigue/170):0;this.stamina=yi(this.stamina+(h-c)*t,0,o),this.fatigue=yi(this.fatigue+t*(.035+.16*n),0,100);let u=.0042*(1+.45*n)*(.6+.4*e.subFrac)*(1+.3*e.storm);this.temp-=u*t,this.shiver=pt((36.2-this.temp)/1.6)*(1-pt((33-this.temp)/1.5)),this.oxygen<=.01?this.blackout+=t/11:this.blackout-=t/3.5,this.temp<31.5&&(this.blackout+=t/40),this.blackout=pt(this.blackout),this.blackout>=1&&(this.alive=!1,this.cause=this.temp<31.5&&this.oxygen>5?"cold":"drown",this.events.push({type:"dead",cause:this.cause})),this.eff=bt(.32,1,Ie(0,38,this.stamina))*(.45+.55*a)*(1-.6*this.blackout),this.condition=pt(Math.min(this.oxygen/100+.25,1)*(.4+.6*this.stamina/100)*(.35+.65*a)*(1-this.blackout))}};var Kn=new M(0,1,0),Wa=class{constructor(t,e,i){this.body=t,this.survival=e,this.input=i,this.yaw=Math.PI,this.pitch=0,this.control=1,this.impact=0,this.impactPeak=0,this.moveAmt=0,this.effort=0,this.swimBlend=0,this.underSwim=0,this.crawlBlend=0,this.diveBlend=0,this.riseBlend=0,this.swimHeld=!1,this.diveHeld=!1,this.upHeld=!1,this.sprintHeld=!1,this.diveTime=0,this.moveDir=new M(0,0,1),this.heading=new M(0,0,1),this.facing=new M(0,0,1),this.recover=0,this.strokePhase=0,this.brace=0,this.air=0,this.grab=null,this.cling=!1,this.faceDir=null,this.struggleW=0,this.tumble=0,this.events=[],this._lastImpact=-10,this._time=0,this._fwd=new M,this._right=new M,this._dir=new M,this._x=new M,this._y=new M,this._z=new M,this._m=new At,this._qt=new xt,this._qe=new xt,this._ax=new M,this._h=new M}fixedUpdate(t){let e=this.body,i=this.survival,n=this.input;this._time+=t;let s=e.dragG,a=s>this.impact+.25;this.impact=s>this.impact?bt(this.impact,s,1-Math.exp(-t*30)):this.impact*Math.exp(-t*2.2),this.impactPeak=Math.max(this.impactPeak*Math.exp(-t*1.2),s),s>1.4&&a&&this._time-this._lastImpact>.8&&(this._lastImpact=this._time,this.events.push({type:"impact",strength:s,dir:e.relFlow.clone().normalize(),aer:e.aer}));let o=pt(1-Ie(.9,3.2,this.impact)-.75*e.aer-.55*e.turb-.9*this.air),c=o<this.control?14:.55+.9*i.eff;this.control+=(Math.max(.04,o)-this.control)*(1-Math.exp(-t*c));let h=this.control*(i.alive?1:0)*(1-.8*i.blackout);this.tumble+=(pt(e.angVel.length()/3.5)*(1-h*.6)-this.tumble)*(1-Math.exp(-t*3)),this.recover=Math.max(0,this.recover-t);let u=n.enabled?n.axisX():0,l=n.enabled?n.axisZ():0,d=n.enabled&&n.swim(),f=n.enabled&&n.dive(),g=d&&!this.cling;this.swimHeld=d,this.diveHeld=f,this.sprintHeld=g,this.upHeld=g&&e.mouthDepth>.45&&!f,this.diveTime=f?this.diveTime+t:0;let b=this._fwd.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),m=this._right.set(-b.z,0,b.x);this.facing.copy(b);let p=this._h.copy(b).multiplyScalar(l).addScaledVector(m,u),y=Math.min(1,p.length());y>.05?p.multiplyScalar(1/p.length()):(p.copy(b),y=0),this.cling&&this.faceDir&&(p.copy(this.faceDir),y=0),this.heading.lerp(p,1-Math.exp(-t*(y>0||g||f||this.fp||this.cling?7:1.5))).normalize();let v=e.mouthDepth>.45,_=Math.max(0,e.mouthDepth);this.underSwim+=((v||f&&e.mouthDepth>.1?1:0)-this.underSwim)*(1-Math.exp(-t*5)),this.diveBlend+=((f?1:0)-this.diveBlend)*(1-Math.exp(-t*(f?7:3.5)));let R=v&&!f;this.riseBlend+=((R?1:0)-this.riseBlend)*(1-Math.exp(-t*4));let x=this._dir.set(0,0,0),w=0,A=0;if(f){let z=.95*pt((6.5-_)/2.5);x.copy(this.heading).multiplyScalar(.55+.45*(1-z)).addScaledVector(Kn,-z).normalize(),w=1,A=g?360:270}else v?g?(x.copy(this.heading).multiplyScalar(y>0?.75:.35).addScaledVector(Kn,.9).normalize(),w=1,A=360):y>0&&(x.copy(this.heading).multiplyScalar(y).addScaledVector(Kn,.45*Math.min(1,_/.8)).normalize(),w=y,A=170):g?(x.copy(this.heading),w=1,A=380):y>0&&(x.copy(this.heading),w=y,A=150);w>.01&&this.moveDir.lerp(x,1-Math.exp(-t*6)).normalize(),this.moveAmt+=(w-this.moveAmt)*(1-Math.exp(-t*5));let E=i.eff*h,S=Math.min(1,e.subFrac*1.25),N=e.extForce.set(0,0,0),O=0;if(w>.01){let z=1+.3*this.swimBlend*Math.sin(2*this.strokePhase)+.38*this.underSwim*Math.sin(this.strokePhase-1),V=v||f?1:pt(1+(e.mouthDepth+.28+.22*this.crawlBlend)*3.5);N.addScaledVector(x,A*E*S*w*z*V*(this.grab?.2:1)),O+=(A>200?.8:.45)*w,f&&this.diveTime<1.1&&_<1.2&&(N.y-=260*E*Math.sin(Math.min(1,this.diveTime/1.1)*Math.PI))}let it=.22+.22*this.crawlBlend;if(!v&&e.mouthDepth<-it&&this.air<.3&&e.pos.y-e.surfaceH<1&&(N.y-=Math.min(520,(-e.mouthDepth-it)*1500)),v&&!f&&!g&&(N.y+=165*E*S,O+=.5),!v&&!f){let z=e.vel.y-e.surface.vy,V=.06+.07*pt(i.stamina/60)+.17*this.crawlBlend,st=Math.max(0,Math.min(210+110*this.crawlBlend,(e.mouthDepth+V)*1e3-z*140))*E*S*(1+.45*Math.sin(2*this.strokePhase));this.struggleW>.05&&(st=st*(1-.65*this.struggleW)+175*this.struggleW*E*S*Math.max(0,Math.sin(this.strokePhase))),N.y+=st,O+=.34*Math.min(1,st/100)*(1-this.crawlBlend)+.08}if(this.grab){let z=this.grab.x-e.pos.x,V=this.grab.z-e.pos.z,st=Math.hypot(z,V);if(st<4.5){let Z=Math.min(280,st*230)*h;N.x+=z/(st+.001)*Z,N.z+=V/(st+.001)*Z,N.y+=70*S}}this.cling&&(O=Math.min(O,.14)),this.effort+=(O-this.effort)*(1-Math.exp(-t*6));let P=!v&&!f&&w>.15?g?1:.5*w:0;this.crawlBlend+=((g&&!v&&!f?1:0)-this.crawlBlend)*(1-Math.exp(-t*4)),this.swimBlend+=(P-this.swimBlend)*(1-Math.exp(-t*(P>this.swimBlend?3.2:2.2)));let L=this._y,D=this._z,H=this._x,U=this._ax.set(this.heading.x,0,this.heading.z);U.lengthSq()<.01?U.copy(b):U.normalize();let k=this._time;if(f||v&&w>.1)L.copy(x),D.copy(Kn).multiplyScalar(-(1-Math.abs(L.y))).addScaledVector(U,L.y),D.addScaledVector(L,-D.dot(L));else if(v)L.copy(Kn).addScaledVector(U,.12),L.normalize(),D.copy(U),D.addScaledVector(L,-D.dot(L));else{let z=this.swimBlend;L.copy(Kn).multiplyScalar(1-z*.6).addScaledVector(U,z);let V=1-z;L.addScaledVector(U,V*(.13+.07*Math.sin(k*.83)*Math.sin(k*.31))),L.addScaledVector(m,V*.08*Math.sin(k*.57+1.3)*Math.sin(k*.23+.4)),L.normalize(),D.copy(U).multiplyScalar(1-z*.9).addScaledVector(Kn,-z*.9),D.addScaledVector(L,-D.dot(L))}D.lengthSq()<1e-4&&D.copy(U).addScaledVector(L,-U.dot(L)),D.lengthSq()<1e-4&&D.copy(m),D.normalize(),H.crossVectors(L,D).normalize(),this._m.makeBasis(H,L,D),this._qt.setFromRotationMatrix(this._m);let W=this._qe.copy(e.quat).invert().premultiply(this._qt);W.w<0&&(W.x=-W.x,W.y=-W.y,W.z=-W.z,W.w=-W.w);let q=2*Math.acos(Math.min(1,W.w)),J=e.extTorque.set(0,0,0);if(q>1e-4){let z=Math.sqrt(Math.max(1e-9,1-W.w*W.w));this._ax.set(W.x/z,W.y/z,W.z/z);let V=Math.max(this.swimBlend,this.underSwim,this.diveBlend),st=f||v?1+2.2*pt((q-.5)/.9):1,Z=this.cling?.6:1,rt=(72+70*V)*E*st*Z,ot=(21+13*V)*E*(this.cling?.55:1);J.copy(this._ax).multiplyScalar(rt*Math.min(q,1.4)).addScaledVector(e.angVel,-ot);let ct=J.length(),Et=(130+110*V)*E*st;ct>Et&&J.multiplyScalar(Et/ct)}let G=Math.max(this.swimBlend,f?1:0,v&&w>.1?this.underSwim:0);G>.02&&J.addScaledVector(e.hydroTorque,-G*Math.min(1,E*1.5)),this.swimBlend>.2&&(this._ax.set(0,1,0).applyQuaternion(e.quat),J.addScaledVector(this._ax,(20+22*this.crawlBlend)*this.swimBlend*E*Math.sin(this.strokePhase)))}};var Zn=si.length,Os=Math.PI*2,ad=new M(0,-1,0),Qn=["hang","float","tread","paddle","swim","dive","under","rise","struggle","tumble","recover","exhaust","brace","flail","aboard","cling"],fv={hang:.45,float:1.2,tread:1.9,paddle:1.35,swim:1.62,dive:1.5,under:1.5,rise:2.3,struggle:2.4,tumble:.45,recover:1.5,exhaust:.7,brace:.85,flail:2.8,aboard:.5,cling:.9};function Q(r,t,e,i,n){let s=t*3;r[s]=e,r[s+1]=i,r[s+2]=n}var Yc=(r,t,e)=>Math.exp(-Math.pow((r-t)/e,2)),qi=r=>(r=pt(r),r*r*(3-2*r)),Jc=r=>(r%Os+Os)%Os/Os;function od(r,t,e,i){let n=e;Q(r,T.spine,.05+.04*Math.sin(t*2)*n,.05*Math.sin(t)*n,.04*Math.sin(t+.6)*n),Q(r,T.chest,-.05,-.06*Math.sin(t)*n,0),Q(r,T.neck,-.14,0,0),Q(r,T.head,-.22-.04*Math.sin(t*2)*n,0,0);for(let s of[1,-1]){let a=s>0,o=a?0:.55,c=Math.sin(t+o),h=Math.cos(t+o);Q(r,a?T.upperArmL:T.upperArmR,-.34+.1*h*n,-s*.34*c*n,s*bt(1.4,.95,i)),Q(r,a?T.foreArmL:T.foreArmR,bt(-.42,-.8,i)-.24*h*n,0,0),Q(r,a?T.handL:T.handR,.32*c*n,0,s*.2*h*n);let u=t+(a?0:Math.PI);Q(r,a?T.thighL:T.thighR,bt(-.92,-.38,i)+.22*Math.sin(u)*n,s*.28*Math.cos(u)*n,s*(bt(.5,.24,i)+.12*Math.cos(u)*n)),Q(r,a?T.shinL:T.shinR,bt(1.42,.62,i)+.46*Math.sin(u-1.2)*n,0,0),Q(r,a?T.footL:T.footR,.22+.3*Math.sin(u-1.8)*n,0,0)}}function pv(r,t){let e=Jc(t),i,n,s;if(e<.22)i=-2.25,n=.1,s=-.1;else if(e<.55){let l=qi((e-.22)/.33);i=bt(-2.25,-1.25,l),n=bt(.1,.95,l),s=bt(-.1,-1.35,l)}else if(e<.72){let l=qi((e-.55)/.17);i=bt(-1.25,-.8,l),n=bt(.95,.28,l),s=bt(-1.35,-2.1,l)}else{let l=qi((e-.72)/.28);i=bt(-.8,-2.25,l),n=bt(.28,.1,l),s=bt(-2.1,-.1,l)}let a,o,c,h;if(e<.5)a=.06,o=.07,c=.1,h=.75;else if(e<.74){let l=qi((e-.5)/.24);a=bt(.06,-.78,l),o=bt(.07,.46,l),c=bt(.1,1.9,l),h=bt(.75,-.15,l)}else if(e<.88){let l=qi((e-.74)/.14);a=bt(-.78,-.18,l),o=bt(.46,.5,l),c=bt(1.9,.3,l),h=bt(-.15,.3,l)}else{let l=qi((e-.88)/.12);a=bt(-.18,.06,l),o=bt(.5,.07,l),c=bt(.3,.1,l),h=bt(.3,.75,l)}let u=Yc(e,.5,.14);Q(r,T.spine,-.08-.06*u,0,0),Q(r,T.chest,-.1-.06*u,0,0),Q(r,T.neck,-.28,0,0),Q(r,T.head,-.36-.05*u,0,0);for(let l of[1,-1]){let d=l>0;Q(r,d?T.upperArmL:T.upperArmR,i,0,l*n),Q(r,d?T.foreArmL:T.foreArmR,s,0,0),Q(r,d?T.handL:T.handR,.12,0,0),Q(r,d?T.thighL:T.thighR,a,0,l*o),Q(r,d?T.shinL:T.shinR,c,0,0),Q(r,d?T.footL:T.footR,h,0,0)}}function mv(r,t){let e=Math.sin(t),i=Math.sin(t*2);Q(r,T.spine,-.12+.06*i,.25*e,.1*e),Q(r,T.chest,-.12,.25*e,.08*e),Q(r,T.neck,-.36,-.22*e,0),Q(r,T.head,-.4+.05*i,-.26*e,.04*e);for(let n of[1,-1]){let s=n>0,a=Jc(t+(s?0:Math.PI)),o,c,h,u;if(a<.55){let d=a/.55,f=qi(d);o=bt(-(Math.PI-.62),-.1,f),c=-.1-1.05*Math.sin(d*Math.PI),h=.12+.12*Math.sin(d*Math.PI),u=.35*Math.sin(d*Math.PI)}else{let d=(a-.55)/.45,f=qi(d);o=bt(.1,Math.PI+.62,f),c=-.2-1.5*Math.sin(d*Math.PI),h=.22+.72*Math.sin(d*Math.PI),u=.1}Q(r,s?T.upperArmL:T.upperArmR,o,0,n*h),Q(r,s?T.foreArmL:T.foreArmR,c,0,0),Q(r,s?T.handL:T.handR,u,0,0);let l=t*3+(s?0:Math.PI);Q(r,s?T.thighL:T.thighR,-.02+.36*Math.sin(l),0,n*.06),Q(r,s?T.shinL:T.shinR,.16+.62*Math.max(0,Math.sin(l+.9)),0,0),Q(r,s?T.footL:T.footR,.82,0,0)}}function cd(r,t,e){let i=Jc(t),n=Math.sin(i*Os-1.2);Q(r,T.spine,-.05+.09*n+.42*e,0,0),Q(r,T.chest,-.06-.07*n+.3*e,0,0),Q(r,T.neck,-.2+.42*e,0,0),Q(r,T.head,-.3+.05*n+.45*e,0,0);let s,a,o;if(i<.36){let u=i/.36,l=qi(u);s=bt(-(Math.PI*.94),-.2,l),a=.14+.92*Math.sin(u*Math.PI),o=-.4*Math.sin(u*Math.PI)}else if(i<.52)s=-.2,a=.14,o=-.05;else{let u=(i-.52)/.48,l=qi(u);s=bt(-.2,-(Math.PI*.94),l),a=.14+.1*Math.sin(u*Math.PI),o=-1.85*Math.sin(u*Math.PI)}s=bt(s,-2.75,e),a=bt(a,.12,e),o=bt(o,-.1,e);let c=Yc(i,.62,.1),h=Yc(i,.78,.07);for(let u of[1,-1]){let l=u>0;Q(r,l?T.upperArmL:T.upperArmR,s,0,u*a),Q(r,l?T.foreArmL:T.foreArmR,o,0,0),Q(r,l?T.handL:T.handR,0,0,0),Q(r,l?T.thighL:T.thighR,bt(-.08-.62*c+.14*h,-1,e),0,u*(.07+.42*c*(1-e))),Q(r,l?T.shinL:T.shinR,bt(.12+1.35*c,.1,e),0,0),Q(r,l?T.footL:T.footR,.75-.5*c*(1-e),0,0)}}function gv(r,t,e,i){let n=(s,a)=>(ni(e*a,s)-.5)*i;Q(r,T.spine,-.08,.06*Math.sin(t),.05*Math.sin(t*.7)*i),Q(r,T.chest,-.12,.1*Math.sin(t),0),Q(r,T.neck,-.34,.1*Math.sin(t*.37)*i,0),Q(r,T.head,-.42+n(1,1.3)*.12,.16*Math.sin(t*.37+.6)*i,0);for(let s of[1,-1]){let a=s>0,o=t+(a?0:Math.PI),c=.5+.5*Math.sin(o),h=Math.max(0,-Math.cos(o)),u=Math.max(0,Math.cos(o));Q(r,a?T.upperArmL:T.upperArmR,bt(-.55,-2.8,c)+n(a?5:7,1.1)*.3,s*.1*Math.cos(o)*i,s*(.22+.24*(1-c)+.1*i)),Q(r,a?T.foreArmL:T.foreArmR,-.25-.45*h-1.05*u,0,0),Q(r,a?T.handL:T.handR,.35*h,0,s*.1);let l=t*2+(a?0:Math.PI)+n(a?11:13,.8)*1.2;Q(r,a?T.thighL:T.thighR,-.14+.44*Math.sin(l),0,s*(.1+.08*i)),Q(r,a?T.shinL:T.shinR,.26+.58*Math.max(0,Math.sin(l+.9)),0,0),Q(r,a?T.footL:T.footR,.72,0,0)}}function bv(r,t,e){let i=(o,c)=>ni(e*c,o)-.5,n=Math.sin(t),s=Math.max(0,n),a=Math.max(0,-n);Q(r,T.spine,-.1-.06*s,.07*Math.sin(t*.5),.05*Math.sin(t*.7)),Q(r,T.chest,-.12-.04*s,.05*Math.sin(t*.5+.8),0),Q(r,T.neck,-.3,.1*Math.sin(t*.37),0),Q(r,T.head,-.4+.08*a+i(1,1.3)*.1,.16*Math.sin(t*.37+.6),.05*Math.sin(t*.53));for(let o of[1,-1]){let c=o>0,h=c?0:.45,u=Math.sin(t+h),l=Math.max(0,u),d=Math.max(0,-u);Q(r,c?T.upperArmL:T.upperArmR,-.24+.18*u+i(c?3:4,1.7)*.2,o*.14*Math.cos(t+h),o*(1.24-.56*(.5+.5*u))),Q(r,c?T.foreArmL:T.foreArmR,-.26-.42*d,0,0),Q(r,c?T.handL:T.handR,.42*l,0,o*.1);let f=t*.6+(c?0:2.1);Q(r,c?T.thighL:T.thighR,-.24+.18*Math.sin(f),0,o*.16),Q(r,c?T.shinL:T.shinR,.46+.26*Math.sin(f+1),0,0),Q(r,c?T.footL:T.footR,.55,0,0)}}function vv(r,t){let e=Math.sin(t),i=Math.sin(t*.5+1),n=Math.max(0,Math.sin(t*.31-.4));Q(r,T.spine,.2,.05*e,.04*i),Q(r,T.chest,.14,.04*e,0),Q(r,T.neck,.16+.1*i-.42*n,.06*e,0),Q(r,T.head,.12+.16*i-.42*n,.08*e,.05*i);for(let s of[1,-1]){let a=s>0;Q(r,a?T.upperArmL:T.upperArmR,-.42,-s*.25,s*1.02),Q(r,a?T.foreArmL:T.foreArmR,-1.25,0,0),Q(r,a?T.handL:T.handR,.35,0,0),Q(r,a?T.thighL:T.thighR,-.34+.12*Math.sin(t+(a?0:1.3)),0,s*.06),Q(r,a?T.shinL:T.shinR,.55+.18*Math.sin(t+(a?.8:2.2)),0,0),Q(r,a?T.footL:T.footR,.75,0,0)}}function xv(r,t,e,i){let n=Math.sin(t),s=1-i,a=(ni(e*.33,31)-.5)*s,o=.5+.5*Math.sin(e*.47+1.3*Math.sin(e*.21));Q(r,T.spine,-.06*s+.14*i+.02*n,.04,.05),Q(r,T.chest,-.08*s+.12*i+.02*n,.1,.04),Q(r,T.neck,(-.16-.16*o)*s+.26*i,-.16+.22*a,0),Q(r,T.head,(-.18-.22*o)*s+.3*i,-.24+.34*a,-.1),Q(r,T.upperArmL,.28,0,2.03),Q(r,T.foreArmL,-1.12-.2*i,0,0),Q(r,T.handL,.35,0,0),Q(r,T.upperArmR,-2.62,.75,0),Q(r,T.foreArmR,-.26-.5*i,0,0),Q(r,T.handR,.3,0,0),Q(r,T.thighL,-.75-.25*i,0,.55),Q(r,T.shinL,1.3+.25*i,0,0),Q(r,T.footL,.55,0,0),Q(r,T.thighR,.1-.25*i,0,-.42),Q(r,T.shinR,.32+.45*i,0,0),Q(r,T.footR,.8,0,0)}function yv(r,t,e){let i=Math.sin(t),n=Math.sin(t*.5+.7);Q(r,T.spine,.1+.03*i,0,.03*n),Q(r,T.chest,.04,0,0),Q(r,T.neck,-.2+.06*n,0,0),Q(r,T.head,-.3+.08*n,0,0);for(let s of[1,-1]){let a=s>0,o=t+(a?0:Math.PI);Q(r,a?T.upperArmL:T.upperArmR,-2.05,0,s*.32),Q(r,a?T.foreArmL:T.foreArmR,-.75,0,0),Q(r,a?T.handL:T.handR,.3,0,0),Q(r,a?T.thighL:T.thighR,-.22+.2*Math.sin(o),0,s*.12),Q(r,a?T.shinL:T.shinR,.5+.26*Math.sin(o-1.1),0,0),Q(r,a?T.footL:T.footR,.55,0,0)}}function _v(r,t){let e=(i,n)=>ni(t*n,i)-.5;Q(r,T.spine,.2+e(1,.7)*.34,e(2,.6)*.3,e(3,.5)*.22),Q(r,T.chest,.14+e(4,.8)*.26,e(5,.6)*.26,0),Q(r,T.neck,.16+e(6,.9)*.3,e(7,.7)*.36,0),Q(r,T.head,.1+e(8,1)*.3,e(9,.8)*.4,e(10,.6)*.18);for(let i of[1,-1]){let n=i>0,s=n?20:40;Q(r,n?T.upperArmL:T.upperArmR,-.7+e(s,.9)*1.3,i*e(s+1,.7)*.6,i*(.8+e(s+2,.8)*.7)),Q(r,n?T.foreArmL:T.foreArmR,-.85+e(s+3,1.1)*1,0,0),Q(r,n?T.handL:T.handR,e(s+4,1.3)*.6,0,e(s+5,1.2)*.4),Q(r,n?T.thighL:T.thighR,-.6+e(s+6,.8)*1,0,i*(.24+e(s+7,.7)*.36)),Q(r,n?T.shinL:T.shinR,.95+e(s+8,1)*.9,0,0),Q(r,n?T.footL:T.footR,.5+e(s+9,1.1)*.4,0,0)}}function Mv(r,t,e){Q(r,T.spine,-.08-.08*e,0,0),Q(r,T.chest,-.1-.1*e,0,0),Q(r,T.neck,-.26,0,0),Q(r,T.head,-.4-.05*e,0,0);for(let i of[1,-1]){let n=i>0,s=Math.sin(t+(n?0:.5));Q(r,n?T.upperArmL:T.upperArmR,-.3+.12*s,-i*.3*s,i*(1.05+.1*e)),Q(r,n?T.foreArmL:T.foreArmR,-.6-.25*s,0,0),Q(r,n?T.handL:T.handR,.25*s,0,0);let a=t+(n?0:Math.PI);Q(r,n?T.thighL:T.thighR,-.7+.26*Math.sin(a),i*.2*Math.cos(a),i*.4),Q(r,n?T.shinL:T.shinR,1.15+.4*Math.sin(a-1.1),0,0),Q(r,n?T.footL:T.footR,.35,0,0)}}function wv(r,t){let e=Math.sin(t*.5);Q(r,T.spine,-.06,0,.04*e),Q(r,T.chest,-.1,0,0),Q(r,T.neck,-.28,.12*e,0),Q(r,T.head,-.42,.1*e,.08*e);for(let i of[1,-1]){let n=i>0;Q(r,n?T.upperArmL:T.upperArmR,-.18+.08*e,i*.12*e,i*1.02),Q(r,n?T.foreArmL:T.foreArmR,-.55-.12*e,0,0),Q(r,n?T.handL:T.handR,.15,0,0),Q(r,n?T.thighL:T.thighR,-.14+.09*Math.sin(t*.5+(n?0:2)),0,i*.14),Q(r,n?T.shinL:T.shinR,.28+.12*Math.sin(t*.5+(n?1:3)),0,0),Q(r,n?T.footL:T.footR,.6,0,0)}}function Ev(r,t){let e=Math.sin(t*1.4);Q(r,T.spine,.3,.22,0),Q(r,T.chest,.22,.2,0),Q(r,T.neck,.28,.22,0),Q(r,T.head,.3,.28,.1),Q(r,T.upperArmL,-1.35,-.55,.3),Q(r,T.foreArmL,-1.55,0,0),Q(r,T.handL,.2,0,0),Q(r,T.upperArmR,-1.6,.35,-.45),Q(r,T.foreArmR,-1.75,0,0),Q(r,T.handR,.2,0,0),Q(r,T.thighL,-.85+.12*e,0,.18),Q(r,T.shinL,1.25-.15*e,0,0),Q(r,T.footL,.4,0,0),Q(r,T.thighR,-.7-.12*e,0,-.18),Q(r,T.shinR,1.15+.15*e,0,0),Q(r,T.footR,.4,0,0)}function Sv(r,t,e){let i=(n,s)=>ni(e*s,n)-.5;Q(r,T.spine,.05+.18*Math.sin(t*.9),.22*Math.sin(t*.5+1),.12*Math.sin(t*.7)),Q(r,T.chest,-.04+.13*Math.sin(t*.9+.6),.22*Math.sin(t*.5+1.4),0),Q(r,T.neck,-.12+i(1,1.5)*.26,i(2,1.3)*.36,0),Q(r,T.head,-.2+i(3,1.7)*.3,i(4,1.4)*.4,i(5,1.1)*.16);for(let n of[1,-1]){let s=n>0,a=t*(s?1:1.17)+(s?0:2.1),o=s?60:80;Q(r,s?T.upperArmL:T.upperArmR,-1.5+1.05*Math.sin(a)+i(o,1.9)*.4,n*(.15+.35*Math.cos(a*.9)),n*(.65+.4*Math.sin(a*1.3+1))),Q(r,s?T.foreArmL:T.foreArmR,-.7-.6*Math.sin(a+1.2),0,0),Q(r,s?T.handL:T.handR,.5*Math.sin(a*2),0,n*.2*Math.sin(a*1.7));let c=t*1.25+(s?0:Math.PI)+i(o+5,.9)*1.2;Q(r,s?T.thighL:T.thighR,-.55+.7*Math.sin(c),0,n*(.22+.16*Math.sin(c*.7))),Q(r,s?T.shinL:T.shinR,Math.max(.05,.95+.75*Math.sin(c-1.3)),0,0),Q(r,s?T.footL:T.footR,.4+.3*Math.sin(c),0,0)}}var Tv=[[T.spine,-.18,.52,.25,-.2,.2],[T.chest,-.16,.38,.25,-.18,.18],[T.neck,-.4,.42,.36,-.22,.22],[T.head,-.45,.42,.5,-.22,.22],[T.foreArmL,-2.2,.02,.12,-.04,.04],[T.foreArmR,-2.2,.02,.12,-.04,.04],[T.handL,-.6,.6,.2,-.3,.3],[T.handR,-.6,.6,.2,-.3,.3],[T.shinL,0,2.2,.04,-.04,.04],[T.shinR,0,2.2,.04,-.04,.04],[T.footL,-.35,.95,.25,-.25,.25],[T.footR,-.35,.95,.25,-.25,.25]],jc=new Array(Zn).fill(null);for(let r of Tv)jc[r[0]]=r;var hd=new oi(0,0,0,"YXZ");function Av(r,t){let e=hd.setFromQuaternion(r,"YXZ"),i=e.x,n=e.y,s=e.z,a=!1;i<t[1]?(i=t[1],a=!0):i>t[2]&&(i=t[2],a=!0),n<-t[3]?(n=-t[3],a=!0):n>t[3]&&(n=t[3],a=!0),s<t[4]?(s=t[4],a=!0):s>t[5]&&(s=t[5],a=!0),a&&r.setFromEuler(hd.set(i,n,s,"YXZ"))}var Rv=new M,Cv=new xt,Pv=new M;function Lv(r,t,e){let i=Rv.set(0,-1,0).applyQuaternion(r),n=Pv.copy(i),s=i.x*t,a=s,o=i.y,c=i.z;if(e)c<-.42&&(c=-.42),a<-.22?a=-.22:a>.8&&(a=.8),o>.45&&(o=.45),c<0&&o>-.35&&(o=-.35);else{let h=-.5-.34*Math.max(0,Math.min(1,a*1.6));c<h&&(c=h),c<.15&&a<-.05&&(a=-.05),a<-.62&&(a=-.62),c<-.2&&o>.55&&(o=.55)}a===s&&o===i.y&&c===i.z||(i.set(a*t,o,c),!(i.lengthSq()<1e-6)&&(i.normalize(),r.premultiply(Cv.setFromUnitVectors(n,i))))}var zs=new xt,ld=new xt;function Iv(r,t){let e=Math.hypot(r.y,r.w);if(e<.22)return;zs.set(0,r.y/e,0,r.w/e);let i=2*Math.atan2(zs.y,zs.w);if(i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),Math.abs(i)<=t)return;ld.copy(r).multiply(zs.invert());let n=Math.sign(i)*t*.5;zs.set(0,Math.sin(n),0,Math.cos(n)),r.copy(ld).multiply(zs)}var Fv=new xt().setFromAxisAngle(new M(0,0,1),Math.PI/2),Dv=new xt().setFromAxisAngle(new M(0,0,1),-Math.PI/2),kv=new M,Xc=new M,Kc=new xt,xr=new xt;function Qc(r,t){let e=kv.set(0,-1,0).applyQuaternion(r);if(Xc.set(t,0,0),e.dot(Xc)<-.9)return null;Kc.setFromUnitVectors(Xc,e).multiply(t>0?Fv:Dv),xr.copy(Kc).invert().multiply(r);let i=2*Math.atan2(xr.y,xr.w);return i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),i}var Zc={1:1,"-1":1};{let r=new oi(-2.5,0,.15,"YXZ"),t=new xt().setFromEuler(r);Zc[1]=Math.sign(Qc(t,1))||1,t.setFromEuler(r.set(-2.5,0,-.15,"YXZ")),Zc[-1]=Math.sign(Qc(t,-1))||1}function Uv(r,t,e){let i=Qc(r,t);if(i===null||Math.abs(i)<=e)return;let n=Math.sign(i)*e,s=Zc[t]*e,a=Ie(1.75,2.8,Math.abs(i)),o=(n+(s-n)*a)*.5;xr.set(0,Math.sin(o),0,Math.cos(o)),r.copy(Kc).multiply(xr)}var qa=class{constructor(t,e,i,n){this.ch=t,this.body=e,this.player=i,this.sv=n,this.tmp=new Float32Array(Zn*3),this.add=new Float32Array(Zn*3),this.acc=new Float32Array(Zn*4),this.ref=new Float32Array(Zn*4),this.w={},this.wt={};for(let s of Qn)this.w[s]=0,this.wt[s]=0;this.w.tread=1,this.phase=0,this.time=0,this.tumbleT=0,this.state="tread",this.splashiness=0,this.gaspKick=0,this.coughKick=0,this.force=null,this.forcePhase=void 0,this.hold=null,this.ride={lift:0,side:0,fore:0,slam:0},this.reach=[{pos:new M,on:0,w:0},{pos:new M,on:0,w:0}],this._ik={S:new M,qp:new xt,qu:new xt,qf:new xt,a:new M,n:new M,w:new M,fix:new xt,x:new M(1,0,0)},this._e=new oi(0,0,0,"YXZ"),this._q=new xt,this._q2=new xt,this._q3=new xt,this._qa=new xt,this._u=new M,this._wb=new M,this._d=new M,this._qi=new xt,this._flow=new M,this._wLag=new M,this._pv=new M,this._acc=new M,this._a=new M,this._hasPv=!1}_reach(t,e,i,n,s){let a=this.ch.bones,o=this._ik,c=a[t],h=a[e],u=a[i],l=h.position,d=u.position;o.S.setFromMatrixPosition(c.matrixWorld),c.parent.getWorldQuaternion(o.qp);let f=l.length()+d.length()-.004,g=Math.max(.16,Math.min(f,o.n.copy(n).sub(o.S).length())),b=.02,m=2.3;for(let p=0;p<14;p++){let y=(b+m)*.5;o.qf.setFromAxisAngle(o.x,-y),o.w.copy(d).applyQuaternion(o.qf).add(l).length()>g?b=y:m=y}o.qf.setFromAxisAngle(o.x,-(b+m)*.5),o.w.copy(d).applyQuaternion(o.qf).add(l),o.qu.copy(o.qp).multiply(c.quaternion),o.a.copy(o.w).applyQuaternion(o.qu).normalize(),o.n.normalize(),o.fix.setFromUnitVectors(o.a,o.n),o.qu.premultiply(o.fix).premultiply(o.qp.invert()),c.quaternion.slerp(o.qu,s),h.quaternion.slerp(o.qf,s)}_mix(t){let e=this.tmp,i=this.acc,n=this.ref,s=this._e,a=this._q,o=this._first;for(let c=0;c<Zn;c++){s.set(e[c*3],e[c*3+1],e[c*3+2],"YXZ"),a.setFromEuler(s);let h=c*4;o&&(n[h]=a.x,n[h+1]=a.y,n[h+2]=a.z,n[h+3]=a.w);let u=n[h]*a.x+n[h+1]*a.y+n[h+2]*a.z+n[h+3]*a.w<0?-t:t;i[h]+=a.x*u,i[h+1]+=a.y*u,i[h+2]+=a.z*u,i[h+3]+=a.w*u}this._first=!1}update(t){let e=this.player,i=this.body,n=this.sv,s=this.wt;this.time+=t;let a=n.alive?e.control*(1-.7*n.blackout):0,o=1-Ie(.22,.78,a),c=Math.max(o,e.air||0),h=n.alive?pt(1-n.blackout*1.5):0,u=1-c,l=e.underSwim,d=e.diveBlend||0;s.flail=c*h*.8,s.tumble=c-s.flail,s.dive=u*d;let f=u*(1-d);s.under=f*l*e.moveAmt,s.rise=f*l*(1-e.moveAmt);let g=f*(1-l);s.swim=g*(e.crawlBlend||0),s.paddle=g*(1-(e.crawlBlend||0))*pt(e.swimBlend*2.2);let b=pt((s.swim+s.paddle)/Math.max(.001,g));s.brace=g*e.brace*(1-.7*b);let m=1-e.brace*(1-.7*b),p=Math.max(pt((38-n.oxygen)/26),pt((34-n.stamina)/28),pt(n.swallow*1.3),pt(e.impact-.7)*.8),y=g*(1-b);s.struggle=y*p*m,s.recover=y*pt(n.gaspTimer/3)*(1-p)*m;let v=1-Ie(6,24,n.stamina);s.exhaust=y*v*(1-p)*m;let _=0;s.hang=0;for(let Y of Qn)Y!=="tread"&&Y!=="float"&&(_+=s[Y]);let R=Math.max(0,1-_),x=pt(e.effort*1.6);if(s.float=R*.22*(1-x),s.tread=R-s.float,s.aboard=0,s.cling=0,this.hold){let Y=this.hold==="cling"?Math.min(1,s.tumble+s.flail)*.5:0;for(let at of Qn)s[at]=at===this.hold?1-Y:at==="tumble"||at==="flail"?s[at]*(Y>0?.5:0):0}if(this.force)for(let Y of Qn)s[Y]=Y===this.force?1:0,this.w[Y]=s[Y];_=0;let w=0;for(let Y of Qn)this.w[Y]+=(s[Y]-this.w[Y])*(1-Math.exp(-t*((Y==="tumble"||Y==="flail")&&s[Y]>this.w[Y]?14:Y==="brace"||Y==="dive"||Y==="cling"?7:Y==="aboard"?30:5))),_+=this.w[Y],this.w[Y]>w&&(w=this.w[Y],this.state=Y);let A=this.w,E=1/Math.max(1e-4,_),S=0;for(let Y of Qn)S+=A[Y]*fv[Y];S+=A.tread*.45*x+A.struggle*.2*p+A.flail*(i.subFrac<.3?.8:0)+A.rise*.3*pt((60-n.oxygen)/50),S*=1+.08*(ni(this.time*.6,77)-.5);let N=Os*S*E*(.72+.28*n.eff);this.phase+=N*t,this.forcePhase!==void 0&&(this.phase=this.forcePhase);let O=this.phase;e.strokePhase=O,e.struggleW=A.struggle*E;let it=Math.min(2.5,i.relSpeed*.25+i.angVel.length()*.22+i.turb);this.tumbleT+=t*(.8+1.6*it);let P=this.tmp,L=this.acc;L.fill(0),this._first=!0;let D=(Y,at)=>{Y<=5e-4||(P.fill(0),at(),this._mix(Y*E))},H=Qn.slice().sort((Y,at)=>A[at]-A[Y]),U=this.force==="dive"?this.forcePike||0:pt(1-Math.abs((e.diveTime||9)-.32)/.42)*pt(1.4-Math.max(0,i.mouthDepth));for(let Y of H)switch(Y){case"hang":D(A.hang,()=>vv(P,O));break;case"float":D(A.float,()=>od(P,O,.55,1));break;case"tread":D(A.tread,()=>od(P,O,1+.4*x,0));break;case"paddle":D(A.paddle,()=>pv(P,O));break;case"swim":D(A.swim,()=>mv(P,O));break;case"dive":D(A.dive,()=>cd(P,O,U));break;case"under":D(A.under,()=>cd(P,O,0));break;case"rise":D(A.rise,()=>gv(P,O,this.time,1));break;case"struggle":D(A.struggle,()=>bv(P,O,this.time));break;case"tumble":D(A.tumble,()=>_v(P,this.tumbleT));break;case"recover":D(A.recover,()=>Mv(P,O,n.lung));break;case"exhaust":D(A.exhaust,()=>wv(P,O));break;case"brace":D(A.brace,()=>Ev(P,O));break;case"aboard":D(A.aboard,()=>xv(P,O,this.time,pt((e.brace||0)*1.6-.5)));break;case"cling":D(A.cling,()=>yv(P,O,this.time));break;default:D(A.flail,()=>Sv(P,O,this.time));break}let k=this.add;k.fill(0);let W=u*(1-A.swim*E);k[T.chest*3]-=.18*(n.lung-.5)*W,k[T.spine*3]-=.08*(n.lung-.5)*W;{let Y=pt(.4+.5*p+.4*(e.brace||0)+.3*x)*u*(1-l)*(1-.8*A.swim*E),at=this.time*(.45+.5*Y),ht=(ni(at,91)-.5)*2;k[T.neck*3+1]+=.16*ht*Y,k[T.head*3+1]+=.22*ht*Y}if(this.gaspKick=Math.max(0,this.gaspKick-t*2.6),this.coughKick=Math.max(0,this.coughKick-t*4.5),this.gaspKick>.001){let Y=this.gaspKick*this.gaspKick*W;k[T.head*3]-=.3*Y,k[T.neck*3]-=.14*Y,k[T.chest*3]-=.18*Y,k[T.upperArmL*3+2]+=.16*Y,k[T.upperArmR*3+2]-=.16*Y}if(this.coughKick>.001){let Y=Math.sin(this.coughKick*Math.PI)*W;k[T.spine*3]+=.3*Y,k[T.chest*3]+=.22*Y,k[T.head*3]+=.34*Y,k[T.neck*3]+=.2*Y}if(A.aboard>.01){let Y=this.ride,at=A.aboard*E,ht=pt(Y.lift),It=this.time;k[T.thighR*3]+=(.16*ht+.12*ht*Math.sin(It*11))*at,k[T.shinR*3]+=(.5*ht+.2*ht*Math.sin(It*13+1))*at,k[T.thighL*3]+=(.16*ht*Math.sin(It*9+2)+.1*ht)*at,k[T.shinL*3]-=.25*ht*at,k[T.thighR*3+2]-=.25*Math.max(0,-Y.side)*at,k[T.spine*3+2]+=.24*Y.side*at,k[T.chest*3+2]+=.12*Y.side*at,k[T.spine*3+1]+=.1*Y.fore*at,k[T.spine*3]+=(.26*Y.slam-.1*ht)*at,k[T.chest*3]+=.16*Y.slam*at,k[T.neck*3]+=(.3*Y.slam+.12*ht)*at,k[T.head*3]+=(.32*Y.slam+.1*ht)*at}if(n.shiver>.01){let Y=n.shiver*.035;k[T.chest*3+1]+=Math.sin(this.time*61)*Y,k[T.upperArmL*3]+=Math.sin(this.time*57+1)*Y*1.5,k[T.upperArmR*3]+=Math.sin(this.time*59+2)*Y*1.5,k[T.head*3+1]+=Math.sin(this.time*53)*Y*.8}let q=this._qi.copy(i.quat).invert(),J=this.force?0:Math.max(.25+.75*(A.tumble+.45*A.flail)*E,.7*A.cling*E);i.subFrac<.15?this._u.copy(i.vel).multiplyScalar(-.3):this._u.copy(i.relFlow);let G=this._flow.lerp(this._u.applyQuaternion(q),1-Math.exp(-t*8)),z=G.length(),V=this.force?0:pt(z/4.5)*J*.7;this._hasPv||(this._pv.copy(i.vel),this._hasPv=!0);let st=this._a.copy(i.vel).sub(this._pv).multiplyScalar(1/Math.max(t,.001));this._pv.copy(i.vel),st.lengthSq()>3600&&st.setLength(60);let Z=this._acc.lerp(st.applyQuaternion(q),1-Math.exp(-t*9)),rt=Z.length(),ot=this.force?0:pt(rt/38)*(.3+.5*J),ct=this._wLag.lerp(this._wb.copy(i.angVel).applyQuaternion(q),1-Math.exp(-t*10)),Et=ct.length(),X=this.force?0:Math.min(.6,Et*.07)*(.35+.65*A.tumble*E),Bt=null,wt=Math.min(.72,V+ot);if(wt>.01){let Y=this._d.copy(ad).multiplyScalar(1-wt);z>.05&&Y.addScaledVector(G,wt*V/((V+ot)*z)),rt>.05&&Y.addScaledVector(Z,-wt*ot/((V+ot)*rt)),Y.lengthSq()>1e-4&&(Y.normalize(),Bt=this._q2.setFromUnitVectors(ad,Y))}let Rt=null;X>.01&&(Rt=this._q3.setFromAxisAngle(this._u.copy(ct).normalize(),-X));let vt=this.force?0:.4+.6*J,Nt=(Y,at)=>Math.max(-at,Math.min(at,Y));k[T.spine*3]+=Nt(Z.z*.01*vt,.3),k[T.chest*3]+=Nt(Z.z*.008*vt,.24),k[T.spine*3+2]+=Nt(Z.x*.008*vt,.18),k[T.neck*3]+=Nt(Z.z*.012*vt,.3),k[T.neck*3+2]+=Nt(Z.x*.008*vt,.16);let Pt=Math.min(1,Et/5)*J;k[T.foreArmL*3]-=.45*Pt,k[T.foreArmR*3]-=.45*Pt,k[T.shinL*3]+=.4*Pt,k[T.shinR*3]+=.4*Pt;let F=this.ch.bones,C=this._e,K=this._q,lt=this._qa,ut=1-Math.exp(-t*26);for(let Y=0;Y<Zn;Y++){let at=Y*4;K.set(L[at],L[at+1],L[at+2],L[at+3]),K.lengthSq()<1e-8?K.identity():K.normalize();let ht=k[Y*3],It=k[Y*3+1],Gt=k[Y*3+2];(ht!==0||It!==0||Gt!==0)&&K.multiply(lt.setFromEuler(C.set(ht,It,Gt,"YXZ"))),Y===T.upperArmL||Y===T.upperArmR||Y===T.thighL||Y===T.thighR?(Bt&&K.premultiply(Bt),Rt&&K.premultiply(Rt),Lv(K,Y===T.upperArmL||Y===T.thighL?1:-1,Y===T.thighL||Y===T.thighR),Y===T.thighL||Y===T.thighR?Iv(K,.55):Uv(K,Y===T.upperArmL?1:-1,1.15)):(Y===T.head&&Rt&&K.premultiply(Nv.copy(zv).slerp(Rt,.4)),jc[Y]&&Av(K,jc[Y])),F[Y].quaternion.slerp(K,ut)}{let Y=this.reach,at=!1;for(let ht=0;ht<2;ht++)Y[ht].w+=(Y[ht].on-Y[ht].w)*(1-Math.exp(-t*(Y[ht].on>Y[ht].w?9:6))),Y[ht].w>.005&&(at=!0);if(at){this.ch.group.updateMatrixWorld(!0);for(let ht=0;ht<2;ht++)Y[ht].w>.005&&this._reach(ht===0?T.upperArmL:T.upperArmR,ht===0?T.foreArmL:T.foreArmR,ht===0?T.handL:T.handR,Y[ht].pos,Y[ht].w)}}let ft=(A.tread*(.25+.4*x)+A.paddle*.5+A.swim*1+A.struggle*1+A.recover*.5+A.dive*.8)*E;this.splashiness+=(ft*Math.min(1,i.subFrac*1.3)*(1-l)-this.splashiness)*(1-Math.exp(-t*3))}},Nv=new xt,zv=new xt;var Bs=new M(0,1,0),$c=new xt,Xa=class{constructor(t,e,i,n,s,a){this.camera=t,this.ch=e,this.body=i,this.player=n,this.waves=s,this.input=a,this.target=1,this.blend=1,this.yaw=Math.PI,this.pitch=-.08,this.sens=.0021,this.intensity=1,this.qd=new xt,this.pivot=new M,this.tpPos=new M,this.inited=!1,this.arm=4.6,this.under=0,this.fovKick=0,this.threat=0,this.orbit=0,this.eye=new M,this.chest=new M,this.surfaceAtCam=di(),this.script=null,this.auto=!0,this.interest={x:0,z:0,w:0},this.portrait=0,this.autoT=0,this.drift=0,this.roll=0,this.push=0,this.time=0,this.shiver=0,this.cine=null,this._m=new Mt,this._f=new M,this._v=new M,this._v2=new M,this._q=new xt,this._q2=new xt,this._mat=new At,this._s=di(),this._fp=new M,this._qfp=new xt,this._qtp=new xt,this._qh=new xt,this._qhS=new xt,this._hasH=!1}toggle(){this.target=this.target>.5?0:1}setMode(t){this.target=t==="first"?0:1}get mode(){return this.target>.5?"third":"first"}lookQuat(t,e,i){let n=Math.cos(e);return this._f.set(Math.sin(t)*n,Math.sin(e),Math.cos(t)*n),this._mat.lookAt(this._v.set(0,0,0),this._f,Bs),i.setFromRotationMatrix(this._mat)}update(t){let e=this.camera,i=this.body,n=this.player,s=this.input.consumeMouse(this._m);this.time+=t,this.input.enabled&&(this.yaw-=s.x*this.sens,this.pitch-=s.y*this.sens);let a=performance.now()/1e3,o=Math.abs(s.x)+Math.abs(s.y)>.5||a-this.input.lastLook<2.5,c=this.input.enabled&&this.input.busy();if(this.auto&&this.input.enabled&&!this.script&&!o){let D=this.input.axisX();if(c)Math.abs(D)>.15&&(this.yaw-=D*.85*t),this.autoT=0;else{this.autoT+=t;let U=Math.min(1,this.autoT/1.5);if(this.interest.w>.05){let W=Math.atan2(this.interest.x-i.pos.x,this.interest.z-i.pos.z)-this.yaw;W=((W+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,this.yaw+=Math.sign(W)*Math.min(Math.abs(W),(.25+.9*this.interest.w)*t)*U}else this.drift+=t*.13,this.yaw+=(.045*Math.sin(this.drift)+.03*Math.sin(this.drift*2.3+1))*t*U}let H=-.07+.24*this.threat-.1*this.under;(!c||n.underSwim<.5)&&(this.pitch+=(H-this.pitch)*(1-Math.exp(-t*(c?.5:1.1))))}else this.autoT=0;this.script&&(this.yaw=this.script.yaw,this.pitch=this.script.pitch),this.pitch=yi(this.pitch,-1.45,1.45),n.yaw=this.yaw,n.pitch=this.pitch;let h=1/.85;this.blend=yi(this.blend+Math.sign(this.target-this.blend)*t*h,0,1),Math.abs(this.target-this.blend)<t*h&&(this.blend=this.target);let u=this.blend*this.blend*(3-2*this.blend),l=pt(1-n.control)*.85+n.tumble*.4,d=pt(l),f=this.intensity*bt(.2,1,d)*bt(1,.42,u),g=i.angVel,b=g.length();b>1e-5&&f>0&&(this._q.setFromAxisAngle(this._v.copy(g).multiplyScalar(1/b),b*f*t),this.qd.premultiply(this._q));let m=bt(.32,2.6,d);this.qd.slerp($c,1-Math.exp(-t/m)).normalize(),this.ch.eyeWorld(this.eye),this.chest.setFromMatrixPosition(this.ch.bones[2].matrixWorld),this.inited||(this.pivot.copy(this.chest),this.inited=!0,this.tpPos.copy(this.chest).add(this._v.set(0,1.2,4)));{this.ch.bones[4].getWorldQuaternion(this._qh);{let rt=this._v.set(1,0,0).applyQuaternion(this.ch.bones[2].getWorldQuaternion(this._q2)),ot=this._v2.set(0,0,1).applyQuaternion(this._qh);if(ot.addScaledVector(rt,-ot.dot(rt)),ot.lengthSq()>1e-4){ot.normalize(),rt.addScaledVector(ot,-rt.dot(ot)).normalize();let ct=this._f.crossVectors(ot,rt);this._qh.setFromRotationMatrix(this._mat.makeBasis(rt,ct,ot))}}this._hasH||(this._qhS.copy(this._qh),this._hasH=!0),this._qhS.slerp(this._qh,1-Math.exp(-t*12));let H=Math.cos(this.pitch),U=this.pitch-.16*(n.crawlBlend||0),k=Math.cos(U),W=this._v2.set(Math.sin(this.yaw)*k,Math.sin(U),Math.cos(this.yaw)*k).applyQuaternion(this._q2.copy(this._qhS).invert()),q=Math.atan2(W.x,W.z),J=Math.asin(yi(W.y,-1,1)),G=yi(q,-.75,.75),z=yi(J,-.45,.9),V=Math.max(Math.abs(q-G),Math.abs(J-z));W.set(Math.sin(G)*Math.cos(z),Math.sin(z),Math.cos(G)*Math.cos(z)).applyQuaternion(this._qhS);let st=pt(d),Z=this._f.set(0,1,0).applyQuaternion(this._qhS).multiplyScalar(st);Z.y+=1-st,Z.lengthSq()<1e-4&&Z.set(0,1,0),Z.normalize(),Math.abs(Z.dot(W))>.995&&Z.set(0,0,1).applyQuaternion(this._qhS),this._mat.lookAt(this._v.set(0,0,0),W,Z),this._qfp.setFromRotationMatrix(this._mat).premultiply(this._q.copy($c).slerp(this.qd,.5)),n.fp=this.blend<.5}this._fp.copy(this.eye);let p=1-Math.exp(-t*10),y=1-Math.exp(-t*5.5);this.pivot.x+=(this.chest.x-this.pivot.x)*p,this.pivot.z+=(this.chest.z-this.pivot.z)*p,this.pivot.y+=(this.chest.y+.22-this.pivot.y)*y;let v=pt(this.waves.sigHeight/16);this.push+=((this.auto?pt((45-(this.oxygen===void 0?100:this.oxygen))/40):0)-this.push)*(1-Math.exp(-t*.8));let _=(3.5+.7*v+1.8*pt(n.impactPeak-.6)+1.3*this.threat+2.8*(n.air||0)-.5*(n.crawlBlend||0)-1.2*this.push)*(1+.22*this.portrait)+(this.armAdd||0);this.arm+=(_-this.arm)*(1-Math.exp(-t*1.6));let R=Math.cos(this.pitch),x=this.yaw+this.orbit,w=this._f.set(Math.sin(x)*R,Math.sin(this.pitch),Math.cos(x)*R),A=this._v,E=Ie(.7,1.8,i.eyeDepth);this.under+=(E-this.under)*(1-Math.exp(-t*(E>this.under?3.5:2.2)));let S=this.armOverride||this.arm,N=.5;for(let D=0;D<5&&(A.copy(this.pivot).addScaledVector(w,-S),A.y+=(.62+.16*S)*(1-.45*this.threat*(this.auto?1:0))+.25*this.portrait,!(this.under>.98));D++){let H=this.waves.sample(A.x,A.z,this._s).h,U=(A.x+this.pivot.x)*.5,k=(A.z+this.pivot.z)*.5,W=this.waves.sample(U,k,this._s).h,q=(A.y+this.pivot.y+.3)*.5,J=Math.max(H+N-A.y,W+.2-q);if(J<=0||S<=1.7){J>0&&(A.y+=J*(1-this.under));break}S=Math.max(1.7,S*.78)}this.armNow=S,this.tpPos.lerp(A,1-Math.exp(-t*7.5));let O=this._v2.copy(this.pivot).addScaledVector(i.vel,.04);if(O.y+=.34+1.1*this.threat+.25*this.portrait,O.addScaledVector(w,2.2),this._mat.lookAt(this.tpPos,O,Bs),this._qtp.setFromRotationMatrix(this._mat),this._q.copy($c).slerp(this.qd,.45),this._qtp.premultiply(this._q),e.position.copy(this._fp).lerp(this.tpPos,u),e.quaternion.copy(this._qfp).slerp(this._qtp,u),u>0&&u<1){let D=this._fp.distanceTo(this.tpPos)*u,H=.32*(D/.28)*Math.exp(1-D/.28),U=.2*(D/.12)*Math.exp(1-D/.12),k=this._v2.set(0,0,-1).applyQuaternion(this._qfp);e.position.addScaledVector(k,U),e.position.y+=H}{let D=this.surfaceAtCam,H=e.matrixWorld.elements,U=D.nx*H[0]+D.nz*H[2],k=Math.max(-.16,Math.min(.16,-U*.38))*u*(1-this.under)*this.intensity;this.roll+=(k-this.roll)*(1-Math.exp(-t*1.6)),Math.abs(this.roll)>1e-4&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.set(0,0,1),this.roll))}this.fovKick+=(pt(n.impact-.6)*7-this.fovKick)*(1-Math.exp(-t*4));let it=bt(76,66,u)+this.fovKick*this.intensity+4*this.threat*u+9*(n.air||0)*u+7*(n.crawlBlend||0)*u-5*this.push*u+this.portrait*bt(13,19,u);this.debugView&&(e.position.copy(this.debugView.pos),this._mat.lookAt(e.position,this.debugView.target,Bs),e.quaternion.setFromRotationMatrix(this._mat));let P=0;if(this.cine){let D=this.cine;D.t+=t;let H=this.pivot,U=k=>(k=pt(k),k*k*(3-2*k));if(D.mode==="intro"){let k=1-U(D.t/D.dur);e.position.addScaledVector(w,-24*k),e.position.y+=17*k,this._v2.copy(H),this._v2.y+=.3,this._mat.lookAt(e.position,this._v2,Bs),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,pt(k*3)),P=-8*k,D.t>=D.dur&&(this.cine=null)}else if(D.mode==="lift"){let k=D.yaw0+2.4+D.t*.13,W=4.2+D.t*.55,q=H.x-Math.sin(k)*W,J=H.z-Math.cos(k)*W;this._v.set(q,Math.max(this.waves.heightFast(q,J)+.9,H.y-.9+D.t*.12),J),D.pos||(D.pos=e.position.clone()),D.pos.lerp(this._v,1-Math.exp(-t*(D.t<7?1.4:Math.max(.05,1.4-(D.t-7)*.5)))),e.position.copy(D.pos),this._v2.copy(H),this._v2.y+=.9+Math.min(1.6,D.t*.2),this._mat.lookAt(e.position,this._v2,Bs),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,pt(D.t*1.5)),P=-Math.min(22,8+D.t*1.5)}else D.mode==="death"&&(D.pos||(D.pos=e.position.clone()),D.pos.y+=.22*t,e.position.copy(D.pos),this._mat.lookAt(e.position,H,Bs),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,1-Math.exp(-t*2)),P=-Math.min(10,D.t*2))}let L=.07;(Math.abs(it+P-e.fov)>.01||Math.abs(L-e.near)>.002)&&(e.fov=it+P,e.near=L,e.updateProjectionMatrix());{if(this.shiver>.02){let H=this.shiver*.0035*this.intensity*bt(1.6,.6,u),U=this.time;this._v.set(Math.sin(U*57)*H,Math.sin(U*61+1)*H,Math.sin(U*53+2)*H*.6);let k=this._v.length();k>1e-6&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.multiplyScalar(1/k),k))}let D=pt(n.effort*1.1)*this.intensity*(1-.6*this.under);if(D>.02){let H=n.strokePhase||0,U=this.time,k=bt(3.4,.6,u);e.position.y+=Math.sin(H*2)*.018*D*k;let W=(Math.sin(U*11.3)+Math.sin(U*17.9+1.3))*.0012*D,q=(Math.sin(U*9.7+2.1)+Math.sin(U*15.1))*.0012*D;this._v.set(W+Math.sin(H*2+.6)*.006*D*k,q+Math.sin(H)*.007*D*k,Math.sin(H)*.014*D*k);let J=this._v.length();J>1e-5&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.multiplyScalar(1/J),J))}}e.updateMatrixWorld(!0),this.ch.head.visible=e.position.distanceTo(this.eye)>.19,this.waves.sample(e.position.x,e.position.z,this.surfaceAtCam)}};var Ya=class{constructor(t){this.canvas=t,this.keys=new Set,this.dx=0,this.dy=0,this.locked=!1,this.enabled=!1,this.pressed=new Set,this.onLockChange=null,this.mouseL=!1,this.mouseR=!1,this.lastLook=-100,window.addEventListener("keydown",e=>{e.repeat||(this.keys.add(e.code),this.pressed.add(e.code),this.enabled&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseL=this.mouseR=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.locked||(this.mouseL=this.mouseR=!1),this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("mousemove",e=>{this.locked&&(this.dx+=e.movementX,this.dy+=e.movementY,Math.abs(e.movementX)+Math.abs(e.movementY)>1&&(this.lastLook=performance.now()/1e3))}),document.addEventListener("mousedown",e=>{this.locked&&(e.button===0&&(this.mouseL=!0),e.button===2&&(this.mouseR=!0))}),document.addEventListener("mouseup",e=>{e.button===0&&(this.mouseL=!1),e.button===2&&(this.mouseR=!1)}),document.addEventListener("contextmenu",e=>{(this.locked||this.enabled)&&e.preventDefault()}),this.virtual=null,this.touch=null}lock(){if(this.canvas.requestPointerLock){let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}}unlock(){document.exitPointerLock&&document.exitPointerLock()}down(t){return this.keys.has(t)}axisX(){if(this.virtual)return this.virtual.x||0;let t=(this.down("KeyD")||this.down("ArrowRight")?1:0)-(this.down("KeyA")||this.down("ArrowLeft")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.x:0)))}axisZ(){if(this.virtual)return this.virtual.z||0;let t=(this.down("KeyW")||this.down("ArrowUp")?1:0)-(this.down("KeyS")||this.down("ArrowDown")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.z:0)))}swim(){return this.virtual?!!(this.virtual.swim||this.virtual.sprint||this.virtual.up):this.down("Space")||this.down("ShiftLeft")||this.down("ShiftRight")||this.mouseL||!!(this.touch&&this.touch.swim)}dive(){return this.virtual?!!this.virtual.dive:this.down("KeyF")||this.down("KeyQ")||this.mouseR||!!(this.touch&&this.touch.dive)}busy(){return Math.abs(this.axisX())+Math.abs(this.axisZ())>.05||this.swim()||this.dive()}consumeMouse(t){return t.x=this.dx,t.y=this.dy,this.dx=0,this.dy=0,t}endFrame(){this.pressed.clear()}};var ja=class{constructor(t){this.waves=t,this.base=1,this.storm=1,this.locked=!1,this.wind=new M(26,0,0),this.windSpeed=26,this.gust=1,this.windAngle=0,this.rain=1,this.time=0}update(t){this.time+=t;let e=this.time,i=this.locked?0:(ni(e*.021,3)-.5)*.22+(ni(e*.09,5)-.5)*.08,n=pt(this.base+i*(.4+.6*this.base));this.storm+=(n-this.storm)*(1-Math.exp(-t*.25));let s=this.locked?0:(ni(e*.035,11)-.5)*.9;this.windAngle=this.waves.windAngle+s,this.gust=.78+.34*ni(e*.31,17)+.22*ni(e*1.3,23)*this.storm,this.windSpeed=bt(9,31,this.storm)*this.gust,this.wind.set(Math.cos(this.windAngle)*this.windSpeed,0,Math.sin(this.windAngle)*this.windSpeed);let a=this.locked?.9:.62+.38*ni(e*.05,29);this.rain=pt(bt(.25,1,this.storm)*a+.1*this.storm),nt.uStorm.value=this.storm,nt.uRain.value=this.rain,nt.uWindDir.value.set(Math.cos(this.windAngle),Math.sin(this.windAngle)),nt.uWindSpeed.value=this.windSpeed,nt.uFogDensity.value=bt(1/5200,1/1500,this.rain)*(.8+.4*this.storm);let o=bt(1.25,.86,this.storm);nt.uAmbient.value.set(.05*o,.06*o,.072*o),this.waves.setStorm(this.storm)}};var Ov=`
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
${Us}
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
}`,Bv=`
precision highp float;
uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor; uniform float uIntensity;
varying vec2 vQ; varying float vA; varying float vSpot;
void main() {
  float across = 1.0 - vQ.x * vQ.x;
  float along = smoothstep(0.0, 0.25, vQ.y) * (1.0 - smoothstep(0.55, 1.0, vQ.y));
  float a = across * along * vA * uIntensity;
  // rain falling through the searchlight is what makes the beam visible: each streak lights up
  vec3 col = vec3(0.62, 0.68, 0.74) * (uAmbient * 3.4 + uFlashColor * uFlash * 2.2 + ${ln} * vSpot * 1.1);
  gl_FragColor = vec4(col, a * 0.26 * (1.0 + 2.2 * min(vSpot, 1.5)));
}`,Hv=`
attribute vec4 aSeed;
uniform float uTime; uniform float uTile; uniform float uIntensity;
${Yn}
${La}
${jn}
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
}`,Vv=`
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
}`;function ud(r,t){let e=new Gi,i=t==="streak"?new Float32Array([-1,0,0,1,0,0,1,1,0,-1,1,0]):new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);e.setAttribute("position",new Vt(i,3)),e.setIndex([0,1,2,0,2,3]);let n=new Float32Array(r*4);for(let s=0;s<n.length;s++)n[s]=Math.random();return e.setAttribute("aSeed",new qe(n,4)),e.instanceCount=r,e}var Ka=class{constructor(t){this.group=new de,this.offset=new M,this.vel=new M(8,-9,0),this.camVel=new M,this._lastCam=new M,this._has=!1;let e=(i,n,s,a)=>{let o={uBox:{value:new M(...n)},uOffset:{value:this.offset},uVel:{value:this.vel},uCamVel:{value:this.camVel},uStreak:{value:a},uWidth:{value:s},uPx:{value:.001},uIntensity:{value:1},uSpotPos:nt.uSpotPos,uSpotDir:nt.uSpotDir,uSpotP:nt.uSpotP,uAmbient:nt.uAmbient,uFlash:nt.uFlash,uFlashColor:nt.uFlashColor},c=new St(ud(i,"streak"),new re({uniforms:o,vertexShader:Ov,fragmentShader:Bv,transparent:!0,depthWrite:!1,side:Le}));return c.frustumCulled=!1,c.renderOrder=20,c};this.near=e(Math.round(t.rain*.62),[22,16,22],.0024,.02),this.far=e(Math.round(t.rain*.38),[80,46,80],.007,.03),this.group.add(this.near,this.far),this.splashU={uWaveA:nt.uWaveA,uWaveB:nt.uWaveB,uBrkA:nt.uBrkA,uBrkB:nt.uBrkB,uBrkC:nt.uBrkC,uTime:nt.uTime,uTile:{value:34},uIntensity:{value:1},uAmbient:nt.uAmbient,uFlash:nt.uFlash,uFlashColor:nt.uFlashColor},this.splash=new St(ud(t.splashes,"quad"),new re({uniforms:this.splashU,vertexShader:Hv,fragmentShader:Vv,transparent:!0,depthWrite:!1})),this.splash.frustumCulled=!1,this.splash.renderOrder=12,this.group.add(this.splash)}update(t,e,i,n,s,a){this.vel.set(i.x*.5,-8.6-1.4*n,i.z*.5),this.offset.addScaledVector(this.vel,t);for(let h of["x","y","z"])Math.abs(this.offset[h])>4e3&&(this.offset[h]%=4e3);this._has&&t>0&&this.camVel.copy(e.position).sub(this._lastCam).multiplyScalar(1/t),this.camVel.length()>40&&this.camVel.setLength(40),this._lastCam.copy(e.position),this._has=!0;let o=2*Math.tan(Sn.degToRad(e.fov)*.5)/Math.max(1,a),c=n*(1-s);for(let h of[this.near,this.far])h.material.uniforms.uPx.value=o,h.material.uniforms.uIntensity.value=c*(h===this.far?.8:1),h.visible=c>.01;this.splashU.uIntensity.value=c,this.splash.visible=c>.01}};var Gv=`
attribute float aSide; attribute float aBright;
uniform float uWidth;
varying float vSide; varying float vBright; varying float vH;
void main() {
  vec3 p = position;
  vec3 toCam = normalize(cameraPosition - p);
  vec3 tangent = normalize(normal);
  vec3 side = normalize(cross(tangent, toCam));
  p += side * aSide * uWidth * (0.35 + 0.65 * aBright);
  vSide = aSide; vBright = aBright; vH = p.y;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,Wv=`
precision highp float;
uniform float uPower; uniform vec3 uColor; uniform float uFog;
varying float vSide; varying float vBright; varying float vH;
void main() {
  float core = exp(-vSide * vSide * 9.0);
  float glow = exp(-abs(vSide) * 2.2) * 0.25;
  float veil = mix(0.35, 1.0, smoothstep(0.0, 500.0, vH));   // the foot of the bolt is behind rain and spray
  gl_FragColor = vec4(uColor * (core + glow) * uPower * vBright * uFog * veil, 1.0);
}`,Qa=class{constructor(t=99){this.rnd=Ai(t),this.group=new de,this.strokes=[],this.age=1e9,this.active=!1,this.dir=new M(1,.3,0),this.pos=new M,this.dist=3e3,this.sheet=0,this.power=1,this.intensity=0,this.pendingThunder=[],this.onThunder=null,this.time=0,this.next=6,this.rate=1,this.mat=new re({uniforms:{uWidth:{value:6},uPower:{value:0},uColor:{value:new M(.82,.88,1)},uFog:{value:1}},vertexShader:Gv,fragmentShader:Wv,transparent:!0,blending:Ms,depthWrite:!1,depthTest:!0,side:Le}),this.bolt=new St(new ce,this.mat),this.bolt.frustumCulled=!1,this.bolt.visible=!1,this.bolt.renderOrder=2,this.group.add(this.bolt)}_buildBolt(t,e){let i=this.rnd,n=[],s=(f,g,b,m)=>{let p=[f,g],y=f.distanceTo(g),v=y*.13;for(let _=0;_<6;_++){let R=[p[0]];for(let x=0;x<p.length-1;x++){let w=p[x].clone().lerp(p[x+1],.5);w.x+=(i()-.5)*v,w.z+=(i()-.5)*v,w.y+=(i()-.5)*v*.35,R.push(w,p[x+1])}p=R,v*=.52}for(let _=0;_<p.length-1;_++)if(n.push([p[_],p[_+1],b]),m<2&&i()<(m===0?.075:.04)&&_>3&&_<p.length-6){let R=p[_+1].clone().sub(p[_]).normalize(),x=y*(.12+i()*.25),w=p[_].clone().addScaledVector(R,x*.6).add(new M((i()-.5)*x,-i()*x*.5,(i()-.5)*x));s(p[_].clone(),w,b*.42,m+1)}};s(t,e,1,0);let a=n.length,o=new Float32Array(a*4*3),c=new Float32Array(a*4*3),h=new Float32Array(a*4),u=new Float32Array(a*4),l=new Uint32Array(a*6);for(let f=0;f<a;f++){let[g,b,m]=n[f],p=b.clone().sub(g).normalize(),y=(v,_,R)=>{let x=(f*4+v)*3;o[x]=_.x,o[x+1]=_.y,o[x+2]=_.z,c[x]=p.x,c[x+1]=p.y,c[x+2]=p.z,h[f*4+v]=R,u[f*4+v]=m};y(0,g,-1),y(1,g,1),y(2,b,1),y(3,b,-1),l.set([f*4,f*4+1,f*4+2,f*4,f*4+2,f*4+3],f*6)}let d=new ce;d.setAttribute("position",new Vt(o,3)),d.setAttribute("normal",new Vt(c,3)),d.setAttribute("aSide",new Vt(h,1)),d.setAttribute("aBright",new Vt(u,1)),d.setIndex(new Vt(l,1)),this.bolt.geometry.dispose(),this.bolt.geometry=d}strike(t,e={}){let i=this.rnd,n=e.azimuth!==void 0?e.azimuth:i()*Math.PI*2;this.dist=e.dist!==void 0?e.dist:500+Math.pow(i(),1.6)*5e3,this.sheet=e.sheet!==void 0?e.sheet:i()<.38?1:0,this.power=e.power!==void 0?e.power:bt(1.45,.55,pt(this.dist/7e3))*(.8+i()*.4),this.pos.set(t.x+Math.cos(n)*this.dist,0,t.z+Math.sin(n)*this.dist);let s=1300+i()*700;this.dir.set(Math.cos(n)*this.dist,this.sheet?s:s*.55,Math.sin(n)*this.dist).normalize(),this.strokes.length=0;let a=2+Math.floor(i()*4),o=0;for(let c=0;c<a;c++)this.strokes.push({t:o,peak:(c===0?1:.35+i()*.65)*this.power,tau:.045+i()*.09}),o+=.045+i()*.13;if(this.age=0,this.active=!0,!this.sheet){let c=new M(this.pos.x+(i()-.5)*500,s,this.pos.z+(i()-.5)*500);this._buildBolt(c,new M(this.pos.x,-5,this.pos.z)),this.mat.uniforms.uWidth.value=Math.max(2.2,this.dist*.0032)}return this.pendingThunder.push({at:this.time+Math.min(2.2,this.dist/343*.3),dist:this.dist,power:this.power,pos:this.pos.clone().setY(600)}),this}update(t,e,i,n=!0){this.time+=t,n&&(this.next-=t*i,this.next<=0&&(this.strike(e),this.next=this.rnd()<.22?1.2+this.rnd()*2.5:7+this.rnd()*22));let s=0;if(this.active){this.age+=t;let a=!1;for(let o of this.strokes){let c=this.age-o.t;if(c<0){a=!0;continue}let h=o.peak*Math.min(1,c/.008)*Math.exp(-c/o.tau);h>.004&&(a=!0),s+=h}s*=.85+.3*Math.sin(this.age*190)*Math.sin(this.age*67),a||(this.active=!1,s=0)}this.intensity=Math.max(0,s),nt.uFlash.value=this.intensity*.62,this.active&&(nt.uFlashDir.value.copy(this.dir),nt.uFlashSheet.value=this.sheet),this.bolt.visible=this.active&&!this.sheet&&this.intensity>.01,this.mat.uniforms.uPower.value=this.intensity*26,this.mat.uniforms.uFog.value=Math.exp(-this.dist*nt.uFogDensity.value*.55);for(let a=this.pendingThunder.length-1;a>=0;a--)if(this.time>=this.pendingThunder[a].at){let o=this.pendingThunder.splice(a,1)[0];this.onThunder&&this.onThunder(o)}}};var qv=`
attribute vec4 aPos;      // xyz, size
attribute vec4 aData;     // alpha, rotation, stretch, kind
attribute vec3 aVel;
attribute vec2 aMisc;     // age 0..1, seed
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist; varying float vAge; varying float vSeed; varying float vSpot;
${Us}
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
    float w = aPos.w * 0.5;
    float len = aPos.w * 0.9 + min(sp, 30.0) * 0.011 * aData.z;
    off = perp * position.x * w + dir * position.y * len;
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
}`,Xv=`
precision highp float;
uniform sampler2D uTex; uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor;
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist; varying float vAge; varying float vSeed; varying float vSpot;
void main() {
  vec3 light = uAmbient * 2.6 + uFlashColor * uFlash * 1.9 + ${ln} * min(vSpot, 1.0) * 0.14;
  float a; vec3 col;
  if (vKind < 0.5) {
    // tapered streak: round bright head, thin fading tail
    float along = smoothstep(-1.0, 0.55, vUv.y);
    float wid = mix(0.25, 1.0, along);
    a = (1.0 - smoothstep(wid * 0.55, wid, abs(vUv.x))) * along * (1.0 - smoothstep(0.75, 1.0, vUv.y)) * vA;
    float head = smoothstep(0.2, 0.8, vUv.y) * (1.0 - smoothstep(0.0, 0.5, abs(vUv.x)));
    col = vec3(0.80, 0.86, 0.90) * light * (1.5 + 1.3 * head);
  } else {
    float idx = floor(fract(vSeed) * 3.999);
    vec2 cell = vec2(mod(idx, 2.0), floor(idx * 0.5));
    vec4 t = texture(uTex, (vUv * 0.5 + 0.5 + cell) * 0.5);
    // the puff tears apart from its thin parts inward as it ages
    float thr = mix(0.06, 0.70, vAge);
    a = smoothstep(thr, thr + 0.30, t.r * (0.72 + 0.56 * t.g)) * vA * (1.0 - 0.45 * vAge);
    a *= 1.0 - smoothstep(0.62, 0.96, max(abs(vUv.x), abs(vUv.y)));          // never the square of the sprite
    // thick parts are greyer, the frayed rim catches more light
    float thick = smoothstep(0.35, 0.95, t.r);
    col = mix(vec3(0.70, 0.76, 0.80), vec3(0.52, 0.58, 0.63), thick * 0.7) * light * (0.9 + 0.25 * vUv.y);
  }
  // nothing large and bright right on the lens; spray clouds thin out around the camera so the swimmer stays in view
  // (water the swimmer's own body throws is the exception: it has to be seen at arm's length, first person included)
  float nf = step(1.5, vSeed);
  a *= vKind < 0.5 ? smoothstep(mix(0.3, 0.09, nf), mix(2.0, 0.34, nf), vDist) : smoothstep(mix(1.5, 0.14, nf), mix(9.0, 0.42, nf), vDist);
  if (a < 0.004) discard;
  gl_FragColor = vec4(col, a);
}`;function Yv(r=31,t=256){let e=Ai(r),i=new Float32Array(4096);for(let h=0;h<i.length;h++)i[h]=e();let n=(h,u,l)=>i[((h*73+u*151+l*37)%4096+4096)%4096],s=(h,u,l)=>{let d=Math.floor(h),f=Math.floor(u),g=h-d,b=u-f,m=g*g*(3-2*g),p=b*b*(3-2*b);return(n(d,f,l)*(1-m)+n(d+1,f,l)*m)*(1-p)+(n(d,f+1,l)*(1-m)+n(d+1,f+1,l)*m)*p},a=(h,u,l,d)=>{let f=.5,g=0;for(let b=0;b<d;b++)g+=f*s(h,u,l+b*7),h=h*2.03+11.3,u=u*2.03+5.7,f*=.5;return g},o=new Uint8Array(t*2*t*2*4);for(let h=0;h<2;h++)for(let u=0;u<2;u++){let l=u+h*2+1;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=(f+.5)/t*2-1,b=(d+.5)/t*2-1,m=g+(a(g*2.2+3,b*2.2,l+20,3)-.5)*.7,p=b+(a(g*2.2,b*2.2+9,l+40,3)-.5)*.7,y=Math.hypot(m,p)*(.92+.5*(a(Math.atan2(p,m)*1.6+5,1.5,l+60,2)-.5)),v=Math.max(0,1-y*1.08),_=Math.max(0,Math.min(1,(a(m*3.1+7,p*3.1+2,l,4)*1.5-.22)*Math.pow(v,.7)*1.9)),R=a(g*15+1,b*15+4,l+80,3),x=((h*t+d)*t*2+u*t+f)*4;o[x]=Math.round(_*255),o[x+1]=Math.round(R*255),o[x+2]=0,o[x+3]=255}}let c=new ki(o,t*2,t*2,ue,Ve);return c.minFilter=ee,c.magFilter=ee,c.generateMipmaps=!1,c.needsUpdate=!0,c}var Za=class{constructor(t,e=6e3){this.waves=t,this.max=e,this.px=new Float32Array(e),this.py=new Float32Array(e),this.pz=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vz=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.grow=new Float32Array(e),this.kind=new Float32Array(e),this.stretch=new Float32Array(e),this.rot=new Float32Array(e),this.alpha=new Float32Array(e),this.seed=new Float32Array(e),this.head=0,this.alive=0;let i=new Gi;i.setAttribute("position",new Vt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]);let n=s=>{let a=new qe(new Float32Array(e*s),s);return a.setUsage(Wi),a};this.aPos=n(4),this.aData=n(4),this.aVel=n(3),this.aMisc=n(2),i.setAttribute("aPos",this.aPos),i.setAttribute("aData",this.aData),i.setAttribute("aVel",this.aVel),i.setAttribute("aMisc",this.aMisc),i.instanceCount=0,this.mesh=new St(i,new re({uniforms:{uTex:{value:Yv()},uAmbient:nt.uAmbient,uFlash:nt.uFlash,uFlashColor:nt.uFlashColor,uSpotPos:nt.uSpotPos,uSpotDir:nt.uSpotDir,uSpotP:nt.uSpotP},vertexShader:qv,fragmentShader:Xv,transparent:!0,depthWrite:!1})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=15,this._s=di(),this._tick=0,this.emitAcc=0,this.near=!1,this.hot=[]}emit(t,e,i,n,s,a,o,c,h,u=0,l=1,d=-1){let f=this.head;this.head=(this.head+1)%this.max,this.px[f]=t,this.py[f]=e,this.pz[f]=i,this.vx[f]=n,this.vy[f]=s,this.vz[f]=a,this.life[f]=o,this.maxLife[f]=o,this.size[f]=c,this.kind[f]=h,this.grow[f]=u,this.rot[f]=h>1.5?0:Math.random()*6.283,this.alpha[f]=l,this.seed[f]=Math.random()*.999+(this.near?2:0),this.stretch[f]=d>=0?d:h<.5?1:h>1.5?2.6:.35}burst(t,e,i,n,s,a=0,o=0){let c=this.near;this.near=!0;let h=Math.min(1.9,.42+n*.27),u=s.x*.1,l=s.z*.1,d=Math.min(230,Math.round(8+n*38));for(let m=0;m<d;m++){let p=Math.random()*6.283,y=.12+Math.random()*.34*h,v=(1+2.4*Math.random())*h,_=(1.8+3.6*Math.pow(Math.random(),1.4))*h;this.emit(t+Math.cos(p)*y,e+.03+Math.random()*.1,i+Math.sin(p)*y,Math.cos(p)*v+a*v*1.5+u,_,Math.sin(p)*v+o*v*1.5+l,.55+Math.random()*.75,.01+Math.pow(Math.random(),2)*.026,0,0,.95)}let f=Math.min(60,Math.round(n*10));for(let m=0;m<f;m++){let p=Math.random()*6.283,y=Math.random()*.7*h;this.emit(t+Math.cos(p)*.08,e+.05,i+Math.sin(p)*.08,Math.cos(p)*y+a*h+u,(3.2+4.2*Math.random())*h,Math.sin(p)*y+o*h+l,.6+Math.random()*.7,.012+Math.random()*.022,0,0,.95)}let g=Math.max(0,Math.min(26,Math.round(n*5.5-2.5)));for(let m=0;m<g;m++){let p=Math.random()*6.283,y=(.9+1.5*Math.random())*h;this.emit(t+Math.cos(p)*.25*h,e+.08+Math.random()*.15,i+Math.sin(p)*.25*h,Math.cos(p)*y+a*y+u,(1.1+1.9*Math.random())*h,Math.sin(p)*y+o*y+l,.45+Math.random()*.45,(.13+Math.random()*.17)*h,1,.55,.55,1)}let b=Math.max(0,Math.min(14,Math.round(n*2.8-2.6)));for(let m=0;m<b;m++){let p=Math.random()*6.283,y=Math.random()*.9*h;this.emit(t+Math.cos(p)*.3,e+.15+Math.random()*.3,i+Math.sin(p)*.3,Math.cos(p)*y+u*2,.5+Math.random()*1.1,Math.sin(p)*y+l*2,.9+Math.random()*1.1,(.24+Math.random()*.3)*h,1,.5,.2,.3)}this.near=c}slap(t,e,i,n,s,a,o=0,c=0,h=0,u=1){let l=Math.pow(n,.7),d=this.near;this.near=!0;let f=Math.round(3+n*8);for(let g=0;g<f;g++){let b=Math.random()*6.283,m=(.3+1.2*Math.random())*l,p=(.7+1.9*Math.pow(Math.random(),1.5))*l;this.emit(t+Math.cos(b)*.07,e+.02+Math.random()*.04,i+Math.sin(b)*.07,o+Math.cos(b)*m+s*m*1.6,c+p,h+Math.sin(b)*m+a*m*1.6,.3+Math.random()*.45,Math.random()<.2?.022+Math.random()*.02:.009+Math.pow(Math.random(),2)*.02,0,0,.95)}if(u>0&&n>.9){let g=Math.random()*6.283,b=.4*l;this.emit(t,e+.05,i,o+Math.cos(g)*b+s*1.2,c+.9*l,h+Math.sin(g)*b+a*1.2,.18+Math.random()*.14,(.05+Math.random()*.04)*l,1,.35,.3,1)}this.near=d}fling(t,e,i,n,s,a,o){let c=this.near;this.near=!0;let h=Math.round(3+o*6);for(let l=0;l<h;l++){let d=.4+.6*Math.random();this.emit(t+(Math.random()-.5)*.1,e+Math.random()*.06,i+(Math.random()-.5)*.1,n*d+(Math.random()-.5)*1,s*d+.5+Math.random()*1.1,a*d+(Math.random()-.5)*1,.4+Math.random()*.6,.011+Math.pow(Math.random(),2)*.034,0,0,1)}let u=0;for(let l=0;l<u;l++)this.emit(t,e+.05,i,n*.5+(Math.random()-.5)*.5,s*.5+.6,a*.5+(Math.random()-.5)*.5,.2+Math.random()*.18,(.06+.05*Math.random())*Math.sqrt(o),1,.5,.55,1);this.near=c}seedCrests(t,e,i,n,s){let a=this.waves,o=this._s;this.hot.length=0;let c=Math.round(s*(.5+.5*n)),h=Math.hypot(i.x,i.z)+.001;for(let l=0;l<c;l++){let d=Math.random()*6.283,f=3+Math.pow(Math.random(),1.6)*95,g=e.x+Math.cos(d)*f,b=e.z+Math.sin(d)*f;a.sample(g,b,o);let m=Math.max(0,.42-o.jac)*2.4,p=Math.max(m,o.aer*1.6,o.turb*.5);if(p<.05)continue;(this.hot.length<6||p>this.hot[this.hot.length-1].amount)&&(this.hot.push({x:g,y:o.h,z:b,amount:p}),this.hot.sort((v,_)=>_.amount-v.amount),this.hot.length>6&&(this.hot.length=6));let y=Math.min(12,Math.round(2+p*6));for(let v=0;v<y;v++){let _=Math.random()<.36,R=(Math.random()-.5)*2.4,x=(Math.random()-.5)*2.4,w=(.8+2.8*Math.random())*(.6+p);this.emit(g+R,o.h+.05+Math.random()*.25,b+x,o.vx+i.x*(.22+.3*Math.random()),o.vy*.5+w,o.vz+i.z*(.22+.3*Math.random()),_?1.4+Math.random()*1.8:.6+Math.random()*.9,_?.4+Math.random()*.7:.014+Math.pow(Math.random(),2)*.04,_?1:0,_?1.2:0,_?.2:.9)}}let u=Math.round(s*.34*n*n);for(let l=0;l<u;l++){let d=Math.random()*6.283,f=2+Math.pow(Math.random(),1.3)*48,g=e.x+Math.cos(d)*f,b=e.z+Math.sin(d)*f;a.sample(g,b,o);let m=Math.max(0,-(o.nx*i.x+o.nz*i.z)/h);if(!(Math.random()>.35+1.6*m))for(let p=0;p<2;p++)this.emit(g+(Math.random()-.5)*3,o.h+.1+Math.random()*.5,b+(Math.random()-.5)*3,o.vx+i.x*(.45+.4*Math.random()),.4+Math.random()*1.6,o.vz+i.z*(.45+.4*Math.random()),.6+Math.random()*.9,.2+Math.random()*.3,2,.25,.07,1.1)}}seedBreakers(t,e,i){let n=this.waves;for(let s of n.breakers){if(!s.active||s.height<2)continue;let a=s.brk<.01?Math.min(.34,Math.max(0,(s.height-3.5)/18)):0,o=Math.max(s.curl,s.brk*.8,s.turb*.35,a),c=o===a;if(o<.05)continue;let h=e.x-s.ox,u=e.z-s.oz,l=-h*s.dz+u*s.dx,d=h*s.dx+u*s.dz-s.s;if(Math.abs(d)>160+s.height*3)continue;let f=Math.min(2.2,.7+s.height/16);this.emitAcc+=t*620*o*Math.min(1.6,s.height/8);let g=Math.min(130,Math.floor(this.emitAcc));this.emitAcc-=g;for(let b=0;b<g;b++){let m=l+(Math.random()-.5)*110*f;if(Math.exp(-(m*m)/(s.width*s.width))<.15)continue;let v=2.6*Math.sin(m*.047+s.seed*.6)+1.2*Math.sin(m*.13+s.seed*2.1)+(c?(Math.random()-.5)*s.front*.45:(Math.random()-.35)*s.front*1.3),_=s.ox+s.dx*(s.s+v)-s.dz*m,R=s.oz+s.dz*(s.s+v)+s.dx*m,x=n.heightFast(_,R)+Math.random()*.6,w=Math.random()<(s.mega?.14:.26),A=s.speed*(.55+.6*Math.random());this.emit(_,x,R,s.dx*A+i.x*.2,(1.5+5.5*Math.random())*(.5+o)*f,s.dz*A+i.z*.2,w?2+Math.random()*2.4:.8+Math.random()*1.1,w?Math.min(3,(.7+Math.random()*1.2)*f):.02+Math.pow(Math.random(),2)*.07,w?1:0,w?1.4:0,w?.17:.9,w?.5:1)}}}update(t,e,i){let n=this.max,s=this.waves,a=0,o=this.aPos.array,c=this.aData.array,h=this.aVel.array,u=this.aMisc.array;this._tick=(this._tick+1)%3;for(let l=0;l<n;l++){let d=this.life[l];if(d<=0||(d-=t,this.life[l]=d,d<=0))continue;let f=this.kind[l],g=f>.5?2.4:.5,b=Math.exp(-g*t);if(this.vx[l]=i.x+(this.vx[l]-i.x)*b,this.vz[l]=i.z+(this.vz[l]-i.z)*b,this.vy[l]=(this.vy[l]-(f>.5?2.6:9.81)*t)*(f>.5?b:1),this.px[l]+=this.vx[l]*t,this.py[l]+=this.vy[l]*t,this.pz[l]+=this.vz[l]*t,this.size[l]+=this.grow[l]*t,l%3===this._tick&&this.vy[l]<0&&this.py[l]<s.heightFast(this.px[l],this.pz[l])-.12){this.life[l]=0;continue}let m=1-d/this.maxLife[l],p=f<.5?Math.min(1,(1-m)*6):Math.min(1,m*9)*Math.min(1,(1-m)*3),y=a*4;o[y]=this.px[l],o[y+1]=this.py[l],o[y+2]=this.pz[l],o[y+3]=this.size[l],c[y]=this.alpha[l]*p,c[y+1]=this.rot[l],c[y+2]=this.stretch[l],c[y+3]=f,h[a*3]=this.vx[l],h[a*3+1]=this.vy[l],h[a*3+2]=this.vz[l],u[a*2]=m,u[a*2+1]=this.seed[l],a++}this.alive=a,this.mesh.geometry.instanceCount=a,this.aPos.needsUpdate=!0,this.aData.needsUpdate=!0,this.aVel.needsUpdate=!0,this.aMisc.needsUpdate=!0}};var jv=`
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
}`,Kv=`
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
}`,Qv=`
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
}`,Zv=`
precision highp float;
uniform vec3 uLight;
varying vec2 vUv; varying float vA;
void main() {
  if (dot(vUv, vUv) > 1.0 || vA < 0.35) discard;
  gl_FragColor = vec4(uLight * 0.55, 1.0);
}`;function dd(r,t){let e=new Gi;if(e.setAttribute("position",new Vt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),e.setIndex([0,1,2,0,2,3]),t){let i=new Float32Array(r*t);for(let n=0;n<i.length;n++)i[n]=Math.random();e.setAttribute("aSeed",new qe(i,t))}return e.instanceCount=r,e}var Ja=class{constructor(t,e){this.waves=t,this.group=new de,this.under=0,this.isUnder=!1,this.depth=0,this.aeration=0,this.burst=0,this.onEnter=null,this.onExit=null,this.light=new M;let i=this.max=e.bubbles;this.bx=new Float32Array(i),this.by=new Float32Array(i),this.bz=new Float32Array(i),this.bvx=new Float32Array(i),this.bvz=new Float32Array(i),this.br=new Float32Array(i),this.bl=new Float32Array(i),this.bp=new Float32Array(i),this.head=0;let n=dd(i,0);this.aPos=new qe(new Float32Array(i*4),4),this.aPos.setUsage(Wi),this.aSeed=new qe(new Float32Array(i),1),this.aSeed.setUsage(Wi),n.setAttribute("aPos",this.aPos),n.setAttribute("aSeed",this.aSeed),n.instanceCount=0,this.bubbles=new St(n,new re({uniforms:{uPx:{value:.001},uLight:{value:this.light}},vertexShader:jv,fragmentShader:Kv})),this.bubbles.frustumCulled=!1,this.bubbles.renderOrder=8,this.moteOffset=new M,this.motes=new St(dd(e.motes,4),new re({uniforms:{uBox:{value:new M(7,7,7)},uOffset:{value:this.moteOffset},uPx:{value:.001},uTime:nt.uTime,uLight:{value:this.light}},vertexShader:Qv,fragmentShader:Zv})),this.motes.frustumCulled=!1,this.motes.renderOrder=8,this.motes.visible=!1,this.group.add(this.bubbles,this.motes),this._w={vx:0,vy:0,vz:0},this._tick=0,this._exhale=0,this._aerAcc=0,this._kick=0,this._n=new M}bubble(t,e,i,n,s=6,a=0,o=0){let c=this.head;this.head=(this.head+1)%this.max,this.bx[c]=t,this.by[c]=e,this.bz[c]=i,this.br[c]=n,this.bl[c]=s,this.bp[c]=Math.random()*6.283,this.bvx[c]=a,this.bvz[c]=o}burstAt(t,e,i,n=1){for(let s=0;s<e;s++){let a=Math.random()*6.283,o=Math.acos(2*Math.random()-1),c=i*Math.cbrt(Math.random());this.bubble(t.x+Math.sin(o)*Math.cos(a)*c,t.y+Math.cos(o)*c,t.z+Math.sin(o)*Math.sin(a)*c,(.002+Math.pow(Math.random(),3)*.02)*n,2.5+Math.random()*5,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2)}}update(t,e,i,n,s,a,o,c,h,u){let l=i,d=e.position,f=this._n.set(l.nx,l.ny,l.nz),g=f.x*0+f.y*(d.y-l.h)+f.z*0;this.depth=-g,o.u.uWaterPlane.value.set(f.x,f.y,f.z,-(f.x*d.x+f.y*l.h+f.z*d.z)),o.u.uUnderAmount.value=g<.4?1:0;let b=this.isUnder;this.isUnder=b?g<.03:g<-.03;let m=1-Ie(-.12,.05,g);this.under+=(m-this.under)*(1-Math.exp(-t*18)),this.isUnder&&!b&&this.onEnter&&this.onEnter(),!this.isUnder&&b&&this.onExit&&this.onExit();let p=Math.max(0,this.depth),y=nt.uAmbient.value,v=nt.uFlash.value,_=nt.uFlashColor.value,R=Math.exp(-p*.085);o.u.uUnderColor.value.set((y.x*.9+_.x*v*.5)*.1*R,(y.y*.9+_.y*v*.5)*.3*R,(y.z*.9+_.z*v*.5)*.38*R),this.burst=Math.max(0,this.burst-t*.7);let x=Math.min(1,(l.aer*1.15+this.burst*.8)*Math.exp(-p/3.2)+l.turb*.22*Math.exp(-p/4.5));this.aeration+=(x-this.aeration)*(1-Math.exp(-t*(x>this.aeration?12:1.6))),o.u.uAeration.value=this.aeration*this.under;let w=1+2.8*this.aeration;o.u.uUnderExt.value.set(.3*w,.13*w,.1*w),o.u.uUnderDistort.value=.004+.01*Math.min(1,l.turb+this.aeration),o.u.uShaft.value=(.9-.5*c.storm+v*3)*Math.exp(-p*.12),o.u.uExposureBias.value=1+(.62*Math.exp(-p*.045)-1)*this.under;let A=2.6*R*(1+5*this.aeration);this.light.set((y.x*A+_.x*v*.8)*1,(y.y*A+_.y*v*.8)*1.25,(y.z*A+_.z*v*.8)*1.35);let E=2*Math.tan(Sn.degToRad(e.fov)*.5)/Math.max(1,u);if(this.bubbles.material.uniforms.uPx.value=E,this.motes.material.uniforms.uPx.value=E,a.wasUnder&&a.alive)for(this._exhale+=t*(5+16*s.effort+22*pt((40-a.oxygen)/40));this._exhale>=1;)this._exhale-=1,this.bubble(h.x+(Math.random()-.5)*.06,h.y,h.z+(Math.random()-.5)*.06,.003+Math.random()*.012,5,n.vel.x*.5,n.vel.z*.5);if(n.subFrac>.5)for(this._kick+=t*Math.min(140,n.relSpeed*n.relSpeed*3.2);this._kick>=1;){this._kick-=1;let L=n.points[2+(Math.random()*9|0)].world;this.bubble(L.x+(Math.random()-.5)*.3,L.y+(Math.random()-.5)*.3,L.z+(Math.random()-.5)*.3,.002+Math.random()*.007,3+Math.random()*3)}if(this.under>.3&&this.aeration>.04){this._aerAcc+=t*900*this.aeration;let L=Math.min(60,Math.floor(this._aerAcc));for(this._aerAcc-=L;L-- >0;){let D=Math.random()*6.283,H=.4+Math.random()*3.6,U=(Math.random()-.4)*3.2;this.bubble(d.x+Math.cos(D)*H,d.y+U,d.z+Math.sin(D)*H,.002+Math.pow(Math.random(),2.5)*.03,2+Math.random()*4,(Math.random()-.5)*2,(Math.random()-.5)*2)}}let S=this.waves,N=this.aPos.array,O=this.aSeed.array,it=0;this._tick=(this._tick+1)%4;let P=S.breakers.some(L=>L.active&&(L.roll>.01||L.turb>.01));for(let L=0;L<this.max;L++){let D=this.bl[L];if(D<=0)continue;D-=t,this.bl[L]=D;let H=this.br[L],U=.18+2.6*Math.sqrt(H);this.bp[L]+=t*(5+30*H/.02);let k=this.bvx[L]+Math.sin(this.bp[L])*.12,W=U,q=this.bvz[L]+Math.cos(this.bp[L]*.8)*.12;if(P){let z=this._w;z.vx=0,z.vy=0,z.vz=0,S.breakerFlow(this.bx[L],this.by[L],this.bz[L],l.h,z),k+=z.vx,W+=z.vy,q+=z.vz}let J=Math.exp(-t*1.5);if(this.bvx[L]*=J,this.bvz[L]*=J,this.bx[L]+=k*t,this.by[L]+=W*t,this.bz[L]+=q*t,L%4===this._tick&&this.by[L]>S.heightFast(this.bx[L],this.bz[L])-.02){this.bl[L]=0;continue}if(D<=0)continue;let G=it*4;N[G]=this.bx[L],N[G+1]=this.by[L],N[G+2]=this.bz[L],N[G+3]=H*Math.min(1,D*2),O[it]=this.bp[L],it++}this.bubbles.geometry.instanceCount=it,this.aPos.needsUpdate=!0,this.aSeed.needsUpdate=!0,this.bubbles.visible=it>0,this.motes.visible=this.under>.02,this.moteOffset.addScaledVector(n.relFlow,t*.6),this.moteOffset.y-=t*.01}};function th(r,t,e){let i=Math.floor(r.sampleRate*t),n=r.createBuffer(1,i,r.sampleRate),s=n.getChannelData(0),a=0,o=0,c=0,h=0;for(let l=0;l<i;l++){let d=Math.random()*2-1;e==="white"?s[l]=d*.6:e==="pink"?(a=.99765*a+d*.099046,o=.963*o+d*.2965164,c=.57*c+d*1.0526913,s[l]=(a+o+c+d*.1848)*.16):(h=(h+.02*d)/1.02,s[l]=h*3.2)}let u=Math.floor(r.sampleRate*.05);for(let l=0;l<u;l++){let d=l/u;s[i-u+l]=s[i-u+l]*(1-d)+s[l]*d}return n}var $a=class{constructor(){this.ctx=null,this.ready=!1,this.volume=.85,this.sfxOn=!0,this.under=0,this.heartPhase=0,this.gurgleTimer=1,this.time=0,this.patter=0,this.lastCrash=-10}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.white=th(e,4,"white"),this.pink=th(e,6,"pink"),this.brown=th(e,8,"brown");let i=w=>{let A=e.createGain();return A.gain.value=w,A},n=(w,A,E=.7)=>{let S=e.createBiquadFilter();return S.type=w,S.frequency.value=A,S.Q.value=E,S};this.G=i,this.F=n,this.master=i(this.volume);let s=e.createDynamicsCompressor();s.threshold.value=-22,s.ratio.value=7,s.attack.value=.004,s.release.value=.35,this.finalLP=n("lowpass",2e4,.7);let a=i(1.5);this.master.connect(this.finalLP),this.finalLP.connect(s),s.connect(a),a.connect(e.destination),this.air=i(1),this.airLP=n("lowpass",2e4,.7),this.airBoom=n("peaking",170,1.6),this.airBoom.gain.value=0,this.air.connect(this.airLP),this.airLP.connect(this.airBoom),this.airBoom.connect(this.master),this.water=i(0),this.water.connect(this.master);let o=e.createBuffer(2,Math.floor(e.sampleRate*2.6),e.sampleRate);for(let w=0;w<2;w++){let A=o.getChannelData(w),E=0;for(let S=0;S<A.length;S++){let N=S/e.sampleRate;E+=(Math.random()*2-1-E)*.12,A[S]=E*Math.exp(-N*2.4)*2.2}}this.verb=e.createConvolver(),this.verb.buffer=o,this.verbOut=i(.5),this.verb.connect(this.verbOut),this.verbOut.connect(this.master),this.waterSend=i(.9),this.water.connect(this.waterSend),this.waterSend.connect(this.verb);let c=(w,A=1)=>{let E=e.createBufferSource();return E.buffer=w,E.loop=!0,E.playbackRate.value=A,E.start(0,Math.random()*w.duration),E},h=(w,A,E)=>{let S=w;for(let N of A)S.connect(N),S=N;return S.connect(E),A[A.length-1]};this.rumble=h(c(this.brown,.8),[n("lowpass",130),i(.3)],this.air),this.wash=h(c(this.pink),[n("bandpass",620,.5),i(0)],this.air),this.roar=h(c(this.brown,1.3),[n("bandpass",210,.6),i(0)],this.air),this.roarF=this.roar,this.spots=[];for(let w=0;w<3;w++){let A=e.createPanner();A.panningModel="HRTF",A.distanceModel="inverse",A.refDistance=6,A.rolloffFactor=1.1,A.maxDistance=200;let E=i(0),S=n("bandpass",900+w*450,.7);c(this.pink,.9+w*.13).connect(S),S.connect(E),E.connect(A),A.connect(this.air),this.spots.push({p:A,g:E,x:0,y:0,z:0,a:0})}this.rainG=h(c(this.white),[n("highpass",1900),n("lowpass",9500),i(0)],this.air),this.patterG=h(c(this.white,1.3),[n("bandpass",3400,1.4),i(0)],this.air),this.windF=n("bandpass",420,1.8),this.windG=i(0),this.windPan=e.createStereoPanner?e.createStereoPanner():i(1),c(this.pink,.7).connect(this.windF),this.windF.connect(this.windG),this.windG.connect(this.windPan),this.windPan.connect(this.air),this.whistleF=n("bandpass",1300,7),this.whistleG=i(0),c(this.pink,1.1).connect(this.whistleF),this.whistleF.connect(this.whistleG),this.whistleG.connect(this.windPan),this.droneG=h(c(this.brown,.55),[n("lowpass",95),i(.9)],this.water),this.streamF=n("bandpass",520,.9),this.streamG=i(0),this.streamAM=i(0);let u=c(this.brown,.35),l=i(14);u.connect(n("lowpass",14)).connect(l),l.connect(this.streamAM.gain),c(this.pink,1.25).connect(this.streamF),this.streamF.connect(this.streamAM),this.streamAM.connect(this.streamG),this.streamG.connect(this.water),this.bodyG=i(1),this.bodyG.connect(this.master),this.vDry=i(1);let d=n("highpass",115,.7),f=n("peaking",1150,1),g=n("lowpass",6200,.7);f.gain.value=2.5,this.vDry.connect(d),d.connect(f),f.connect(g),g.connect(this.master),this.vWet=i(0),this.vLP=n("lowpass",430,3.5),this.vRes=n("peaking",260,2),this.vRes.gain.value=8,this.vTrem=i(.55),this.vWet.connect(this.vLP),this.vLP.connect(this.vRes),this.vRes.connect(this.vTrem),this.vTrem.connect(this.water),this.vTrem.connect(this.verb),this.breathG=i(1),this.breathG.connect(this.vDry),this.breathG.connect(this.vWet),this.beds=null,this.swimLevel=0;let b=e.createOscillator();b.type="sawtooth",b.frequency.value=17;let m=i(.5);b.connect(m),m.connect(this.vTrem.gain);let p=c(this.brown,.3),y=i(55);p.connect(n("lowpass",6)).connect(y),y.connect(b.frequency),b.start(),this.tinG=i(0),this.tinG.connect(s);for(let w of[3150,3212]){let A=e.createOscillator();A.type="sine",A.frequency.value=w,A.connect(this.tinG),A.start()}this.heliPan=e.createPanner(),this.heliPan.panningModel="HRTF",this.heliPan.distanceModel="inverse",this.heliPan.refDistance=45,this.heliPan.rolloffFactor=.7,this.heliPan.maxDistance=1200,this.heliG=i(0),this.heliChop=i(.5);let v=e.createOscillator();v.type="sawtooth",v.frequency.value=21;let _=i(.45);v.connect(_),_.connect(this.heliChop.gain),v.start(),c(this.brown,1.4).connect(n("lowpass",180)).connect(this.heliChop);let R=n("bandpass",1900,6),x=i(.05);c(this.white,1).connect(R),R.connect(x),x.connect(this.heliG),this.heliChop.connect(this.heliG),this.heliG.connect(this.heliPan),this.heliPan.connect(this.air),this.voice={},this.curVoice=null,this.ready=!0,this._decodeVoices()}setVoices(t){this.voiceSrc=t,this.ready&&this._decodeVoices()}_decodeVoices(){if(!(!this.voiceSrc||this._decoding)){this._decoding=!0;for(let[t,e]of Object.entries(this.voiceSrc)){let i=atob(e),n=new Uint8Array(i.length);for(let s=0;s<i.length;s++)n[s]=i.charCodeAt(s);this.ctx.decodeAudioData(n.buffer).then(s=>{this.voice[t]=s,this._startBeds()}).catch(()=>{})}}}_startBeds(){let t=this.voice;if(this.beds||!t.b_pant||!t.b_tired||!t.w_swim||this.voiceSrc.a_storm&&!t.a_storm||this.voiceSrc.a_heli&&!t.a_heli)return;let e=(i,n)=>{let s=this.ctx.createBufferSource();s.buffer=i,s.loop=!0,s.loopStart=.03,s.loopEnd=i.duration-.03;let a=this.G(0);return s.connect(a),a.connect(n),s.start(0,.03+Math.random()*(i.duration-.1)),{s,g:a}};this.beds={pant:e(t.b_pant,this.breathG),tired:e(t.b_tired,this.breathG),swim:e(t.w_swim,this.air)},t.a_storm&&(this.beds.storm=e(t.a_storm,this.air)),t.a_heli&&(this.beds.heli=e(t.a_heli,this.heliG),this.beds.heli.g.gain.value=1)}setBreath(t,e,i,n){if(!this.beds||!this.ready||this.ctx.state!=="running")return;let s=this.ctx.currentTime,a=n?.09:.012;this.beds.pant.g.gain.setTargetAtTime(t,s,a),this.beds.tired.g.gain.setTargetAtTime(e,s,a),this.beds.pant.s.playbackRate.setTargetAtTime(i,s,.4)}playVoice(t,e=1,i=1,n=null){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;this.stopVoice(.05);let a=this.ctx,o=a.currentTime,c=i*(this.under>.5?.84:1),h=n?Math.min(n[0],s.duration):0,u=n?Math.min(n[1],s.duration):s.duration,l=(u-h)/c,d=a.createBufferSource();d.buffer=s,d.playbackRate.value=c;let f=this.G(1e-4);return f.gain.setValueAtTime(1e-4,o),f.gain.exponentialRampToValueAtTime(Math.max(.001,e),o+(n&&n[0]>0?.09:.012)),n&&u<s.duration-.01&&(f.gain.setValueAtTime(Math.max(.001,e),o+Math.max(.02,l-.12)),f.gain.exponentialRampToValueAtTime(1e-4,o+l)),d.connect(f),f.connect(this.vDry),f.connect(this.vWet),d.start(o,h,u-h),this.curVoice={s:d,g:f,end:o+l},l}stopVoice(t=.08){let e=this.curVoice;if(!e)return;this.curVoice=null;let i=this.ctx.currentTime;if(!(i>=e.end))try{e.g.gain.setTargetAtTime(0,i,t/3),e.s.stop(i+t+.05)}catch{}}playClip(t,e=1,i=1,n=0){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;let a=this.ctx,o=a.createBufferSource();o.buffer=s,o.playbackRate.value=i;let c=this.G(e);if(o.connect(c),a.createStereoPanner){let h=a.createStereoPanner();h.pan.value=n,c.connect(h),h.connect(this.air)}else c.connect(this.air);return o.start(),s.duration/i}setVolume(t){this.volume=t,this.master&&this.master.gain.setTargetAtTime(this.sfxOn===!1?0:t,this.ctx.currentTime,.05)}setSfx(t){this.sfxOn=t,this.master&&this.master.gain.setTargetAtTime(t?this.volume:0,this.ctx.currentTime,.05),this.tinG&&!t&&this.tinG.gain.setTargetAtTime(0,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_burst(t){let e=this.ctx,i=e.currentTime+(t.delay||0),n=e.createBufferSource();n.buffer=t.buf,n.playbackRate.value=t.rate||1;let s=this.F(t.type||"bandpass",t.f0,t.q||1);t.f1&&s.frequency.exponentialRampToValueAtTime(Math.max(20,t.f1),i+t.dur);let a=this.G(0);a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(Math.max(2e-4,t.gain),i+(t.attack||.02)),a.gain.exponentialRampToValueAtTime(1e-4,i+t.dur),n.connect(s),s.connect(a);let o=a;if(t.pan!==void 0&&e.createStereoPanner){let c=e.createStereoPanner();c.pan.value=t.pan,a.connect(c),o=c}o.connect(t.out||this.air),t.verb&&o.connect(this.verb),n.start(i,Math.random()*(t.buf.duration-t.dur-.1)),n.stop(i+t.dur+.05)}_blip(t,e,i,n,s,a){let o=this.ctx,c=o.currentTime+s,h=o.createOscillator();h.type="sine",h.frequency.setValueAtTime(t,c),h.frequency.exponentialRampToValueAtTime(e,c+i);let u=this.G(0);u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(n,c+i*.3),u.gain.exponentialRampToValueAtTime(1e-4,c+i),h.connect(u),u.connect(a||this.water),h.start(c),h.stop(c+i+.02)}gurgle(t=.6){if(!this.ready)return;let e=6+Math.floor(Math.random()*10*t+4),i=0;for(let n=0;n<e;n++){let s=170+Math.random()*420;this._blip(s,s*(1.5+Math.random()*.9),.035+Math.random()*.05,.1*t*(.4+Math.random()),i),i+=.022+Math.random()*.06}this._burst({buf:this.pink,f0:380,f1:900,q:1.2,dur:Math.min(1.2,i+.2),gain:.16*t,attack:.05,out:this.water})}onEvent(t,e){if(!this.ready)return;let i=this.under>.5;switch(t){case"thunder":{let n=pt(e.dist/7e3),s=e.power;{let b="a_thunder"+(1+(Math.random()*3|0)),m=this.voice&&this.voice[b];if(m){let p=this.ctx,y=p.currentTime,v=p.createBufferSource();v.buffer=m,v.playbackRate.value=bt(1,.82,n)*(.94+Math.random()*.12);let _=this.F("lowpass",bt(16e3,420,Math.sqrt(n)),.6),R=this.G(bt(2.2,.45,n)*s);v.connect(_),_.connect(R),R.connect(this.air),R.connect(this.verb),v.start(y),e.dist<2600&&(this._blip(64,26,1.4,1.1*s*(1-e.dist/2600),0,this.master),this._burst({buf:this.white,type:"highpass",f0:1800,dur:.22,gain:1.2*s*(1-e.dist/2600),attack:.002}))}}let a=bt(5,10,Math.random())*(.8+.4*n),o=this.ctx,c=o.currentTime,h=o.createBufferSource();h.buffer=this.brown,h.loop=!0,h.playbackRate.value=.7+Math.random()*.5;let u=this.F("lowpass",bt(1100,170,n),.5),l=this.G(0),d=bt(.6,.2,n)*s;l.gain.setValueAtTime(1e-4,c),l.gain.exponentialRampToValueAtTime(d,c+bt(.04,.6,n));let f=c+.5,g=2+Math.floor(Math.random()*4);for(let b=0;b<g;b++)f+=.4+Math.random()*1.1,l.gain.exponentialRampToValueAtTime(d*(.25+Math.random()*.5)*Math.exp(-b*.35),f);l.gain.exponentialRampToValueAtTime(1e-4,c+a),h.connect(u),u.connect(l),l.connect(this.air),l.connect(this.verb),h.start(c,Math.random()*6),h.stop(c+a+.1),e.dist<2200&&this._burst({buf:this.white,type:"highpass",f0:700,dur:.35,gain:.8*s*(1-e.dist/2200),attack:.004,verb:!0});break}case"impact":{let n=Math.min(1,e.strength/3.2);if(this.time-this.lastCrash<.5)break;this.lastCrash=this.time,this._burst({buf:this.white,type:"lowpass",f0:5200,f1:260,q:.6,dur:1.5+n,gain:.55+.5*n,attack:.015,verb:!0}),this._burst({buf:this.brown,type:"lowpass",f0:240,f1:60,q:.8,dur:1.9,gain:1*n+.3,attack:.02,out:this.master}),this._blip(74,34,.7,.5*n,0,this.master),this.playClip("a_crash"+(1+(Math.random()*3|0)),.7+.6*n,.9+Math.random()*.2,0);break}case"splash":{let n=Math.min(1,e.v/5);this._burst({buf:this.pink,f0:1400+Math.random()*1200,f1:600,q:.8,dur:.16+.22*n,gain:.1+.22*n,attack:.006,pan:Math.random()*1.2-.6});break}case"submerge":this._burst({buf:this.brown,type:"lowpass",f0:900,f1:120,dur:.7,gain:.7,attack:.01,out:this.master}),this.gurgle(.9),this.gurgleTimer=.8;break;case"surface":this._burst({buf:this.white,type:"highpass",f0:1500,f1:3500,dur:.5,gain:.3,attack:.02});break;case"camEnter":this._blip(120,52,.45,.35,0,this.master);break;case"camExit":this._burst({buf:this.pink,f0:2200,f1:900,q:.6,dur:.6,gain:.22,attack:.02});break;default:break}}update(t,e){if(!this.ready||this.ctx.state!=="running")return;this.time+=t;let i=this.ctx,n=i.currentTime,s=(f,g,b=.12)=>f.setTargetAtTime(g,n,b),a=this.under=e.under,o=i.listener,c=e.cam;o.positionX?(o.positionX.value=c.pos.x,o.positionY.value=c.pos.y,o.positionZ.value=c.pos.z,o.forwardX.value=c.fwd.x,o.forwardY.value=c.fwd.y,o.forwardZ.value=c.fwd.z,o.upX.value=c.up.x,o.upY.value=c.up.y,o.upZ.value=c.up.z):(o.setPosition(c.pos.x,c.pos.y,c.pos.z),o.setOrientation(c.fwd.x,c.fwd.y,c.fwd.z,c.up.x,c.up.y,c.up.z)),s(this.airLP.frequency,bt(2e4,330*Math.exp(-e.depth*.06)+120,a*a),.06),s(this.airBoom.gain,9*a,.1),s(this.air.gain,bt(1,.55,a),.1),s(this.water.gain,a*(1-.7*e.blackout),.08),s(this.bodyG.gain,(1-a)*(1-e.blackout),.05),s(this.verbOut.gain,.35+.5*a,.2);let h=.7+.6*(e.gust||0);s(this.rumble.gain,.32+.45*e.storm+.22*Math.min(1,Math.abs(e.swellV)/6),.3),this.beds&&this.beds.storm&&(s(this.beds.storm.g.gain,(.25+.95*e.storm)*h,.5),this.beds.storm.s.playbackRate.setTargetAtTime(.94+.1*(e.gust||0),n,1.2)),this.crashT=(this.crashT===void 0?3:this.crashT)-t*(.4+e.storm),this.crashT<=0&&a<.5&&(this.crashT=2.2+Math.random()*4.5,this.playClip("a_crash"+(1+(Math.random()*3|0)),(.16+.34*Math.random())*e.storm,.8+Math.random()*.4,Math.random()*1.6-.8));let u=0;for(let f of e.hot){let g=Math.hypot(f.x-c.pos.x,f.z-c.pos.z);u+=f.amount/(1+g/12)}s(this.wash.gain,Math.min(.8,.12*e.storm+.16*u),.25),s(this.roar.gain,Math.min(1.1,e.threat*e.threat*1.1),.2);for(let f=0;f<this.spots.length;f++){let g=this.spots[f],b=e.hot[f];b?(g.a<.02?(g.x=b.x,g.y=b.y,g.z=b.z):(g.x+=(b.x-g.x)*.1,g.y+=(b.y-g.y)*.1,g.z+=(b.z-g.z)*.1),g.a+=(Math.min(1,b.amount)-g.a)*.08):g.a*=.94,g.p.positionX?(g.p.positionX.value=g.x,g.p.positionY.value=g.y,g.p.positionZ.value=g.z):g.p.setPosition(g.x,g.y,g.z),s(g.g.gain,g.a*.9,.1)}s(this.rainG.gain,.2*e.rain*h,.4),this.patter+=Math.random()<t*9?1:0,this.patter*=Math.exp(-t*9),s(this.patterG.gain,.06*e.rain*(.4+Math.min(1.5,this.patter)),.03);let l=pt(e.windSpeed/34);s(this.windF.frequency,260+520*e.gust*l,.5),s(this.windG.gain,.55*Math.pow(l,1.5)*h+.6*(e.air||0),.15),s(this.whistleF.frequency,900+900*e.gust*e.gust,.6),s(this.whistleG.gain,.1*Math.pow(l,2.2)*e.gust,.5),this.windPan.pan&&s(this.windPan.pan,yi(e.windPan*.55,-.8,.8),.6),s(this.streamG.gain,Math.min(1,e.aeration*1.4+Math.min(.5,e.relSpeed*.08))*.5,.1),s(this.streamF.frequency,420+500*e.aeration,.2),e.mouthUnder&&e.alive&&(this.gurgleTimer-=t*(1+1.6*pt((45-e.oxygen)/45)+e.effort*.6),this.gurgleTimer<=0&&(this.gurgle(.45+.5*Math.random()),this.gurgleTimer=1.1+Math.random()*2));let d=pt((62-e.oxygen)/55)*(e.alive?1:0)+(e.mouthUnder?.18:0);if(d>.05&&(this.heartPhase+=t*bt(1.2,2.5,pt(d)),this.heartPhase>=1)){this.heartPhase-=1;let f=.5*Math.min(1,d*1.3);this._blip(62,40,.11,f,0,this.master),this._blip(52,36,.13,f*.7,.16,this.master)}if(s(this.master.gain,(this.sfxOn===!1?0:this.volume)*(1-.85*e.blackout),.3),e.heli&&e.heli.on){let f=e.heli.pos;this.heliPan.positionX?(this.heliPan.positionX.value=f.x,this.heliPan.positionY.value=f.y,this.heliPan.positionZ.value=f.z):this.heliPan.setPosition(f.x,f.y,f.z),s(this.heliG.gain,6,.6)}else s(this.heliG.gain,0,.8);this.beds&&s(this.beds.swim.g.gain,Math.min(.6,(e.swimSplash||0)*.55)*(1-a),.25),s(this.vDry.gain,1-a,.04),s(this.vWet.gain,a*2.2,.04),s(this.tinG.gain,(this.sfxOn===!1?0:this.volume)*(.014*pt((30-e.oxygen)/30)+.03*e.blackout),.3),s(this.finalLP.frequency,2e4*Math.pow(.022,e.blackout)*Math.pow(.03,e.slow||0),.08)}};var Jv=`
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
#hud .keys { position: absolute; right: 3.2vw; bottom: 4.5vh; font-size: clamp(11px, .95vw, 14px); letter-spacing: .12em; color: rgba(230,238,243,.62); text-shadow: 0 1px 8px rgba(0,0,0,.7); }
#hud .keys b { display: inline-block; font-weight: 400; color: #f1f5f7; border: 1px solid rgba(255,255,255,.38); background: rgba(8,12,16,.3); padding: .16em .55em; margin: 0 .45em 0 1.2em; border-radius: 4px; font-size: .92em; }
#hud .keys b + b { margin-left: .25em; }
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
`,Qt=(r,t,e)=>{let i=document.createElement(r);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i},eh=r=>`${String(Math.floor(r/60)).padStart(2,"0")}:${String(Math.floor(r%60)).padStart(2,"0")}`,to=class{constructor(t,e,i){this.root=t,this.api=e,this.isTouch=i;let n=Qt("style");n.textContent=Jv,document.head.appendChild(n),this.title=Qt("div","layer shade"),this.title.id="title";let s=Qt("div","col");s.appendChild(Qt("h1","","EXTREME<br>OCEAN SURVIVAL")),this.goBtn=Qt("div","go act","\uC2DC\uC791"),s.appendChild(this.goBtn),this.titleRows=Qt("div"),s.appendChild(this.titleRows),this.title.appendChild(s),this.title.appendChild(Qt("div","hint",i?"\uC67C\uCABD \uB04C\uAE30 \uBC29\uD5A5 \xB7 \uD5E4\uC5C4 / \uC785\uC218 \uBC84\uD2BC \xB7 \uD654\uBA74 \uB04C\uAE30 \uC2DC\uC810":"WASD \uBC29\uD5A5 \xB7 Space(\uC88C\uD074\uB9AD) \uD5E4\uC5C4 \xB7 F(\uC6B0\uD074\uB9AD) \uC785\uC218 \xB7 \uB9C8\uC6B0\uC2A4 \uC2DC\uC810 \xB7 V \uC2DC\uC810 \uC804\uD658 \xB7 Esc \uBA48\uCDA4")),this.pause=Qt("div","layer shade"),this.pause.id="pause";let a=Qt("div","col");a.appendChild(Qt("h2","","\uBA48\uCDA4")),this.pauseTime=Qt("div","time"),a.appendChild(this.pauseTime),this.resumeBtn=Qt("div","go act","\uACC4\uC18D"),a.appendChild(this.resumeBtn),this.pauseRows=Qt("div"),a.appendChild(this.pauseRows),this.pause.appendChild(a),this.dead=Qt("div","layer shade"),this.dead.id="dead";let o=Qt("div","col");this.deadTitle=Qt("h2","",""),o.appendChild(this.deadTitle),this.deadTime=Qt("div","time"),o.appendChild(this.deadTime),this.againBtn=Qt("div","go act","\uB2E4\uC2DC"),o.appendChild(this.againBtn),this.dead.appendChild(o),this.won=Qt("div","layer shade"),this.won.id="won";let c=Qt("div","col");c.appendChild(Qt("h2","","\uAD6C\uC870\uB418\uC5C8\uB2E4")),this.wonTime=Qt("div","time"),c.appendChild(this.wonTime),this.wonBtn=Qt("div","go act","\uB2E4\uC2DC"),c.appendChild(this.wonBtn),this.won.appendChild(c),this.noteEl=Qt("div","note"),this.hud=Qt("div","layer"),this.hud.id="hud";let h=Qt("div","bars");this.bars={};for(let[l,d]of[["o2","\uC0B0\uC18C"],["st","\uCCB4\uB825"],["tp","\uCCB4\uC628"],["rs","\uAD6C\uC870"]]){let f=Qt("div","bar",`<i>${d}</i><u><s></s></u>`);h.appendChild(f),this.bars[l]={el:f,fill:f.querySelector("s")}}this.hud.appendChild(h),i||this.hud.appendChild(Qt("div","keys","<b>Space</b>\uD5E4\uC5C4<b>F</b>\uC785\uC218<b>V</b><b>\uD720</b>\uC2DC\uC810<b>Esc</b>\uBA48\uCDA4")),t.append(Object.assign(Qt("div"),{id:"bars-t"}),Object.assign(Qt("div"),{id:"bars-b"})),this.touch=Qt("div","layer"),this.touch.id="touch",t.append(this.hud,this.noteEl,this.touch,this.title,this.pause,this.dead,this.won),i&&this.buildTouch();let u=(l,d)=>l.addEventListener("click",f=>{f.stopPropagation(),d()});u(this.goBtn,()=>e.start()),u(this.resumeBtn,()=>e.resume()),u(this.againBtn,()=>e.restart()),u(this.wonBtn,()=>e.restart()),this.buildRows(),this.mode=""}buildRows(){let t=this.api,e=(i,n)=>{i.innerHTML="";let s=(a,o,c)=>{let h=Qt("div","row act",`${a}<b></b>`),u=h.querySelector("b"),l=()=>{u.textContent=o()};h.addEventListener("click",d=>{d.stopPropagation(),c(),this.refresh()}),this._upd.push(l),l(),i.appendChild(h)};if(s("\uD654\uC9C8",()=>t.get("quality"),()=>t.cycle("quality")),s("\uC2DC\uC810",()=>t.get("view"),()=>t.cycle("view")),s("\uC790\uB3D9 \uCE74\uBA54\uB77C",()=>t.get("autocam"),()=>t.cycle("autocam")),s("\uCE74\uBA54\uB77C \uD754\uB4E4\uB9BC",()=>t.get("shake"),()=>t.cycle("shake")),s("\uC18C\uB9AC \uD06C\uAE30",()=>t.get("volume"),()=>t.cycle("volume")),s("\uD6A8\uACFC\uC74C",()=>t.get("sfx"),()=>t.cycle("sfx")),n){let a=Qt("div","row","\uC2DC\uD5D8 \uC7A5\uBA74");for(let c of"ABCDEFGHR"){let h=Qt("span","t act",c);h.addEventListener("click",u=>{u.stopPropagation(),t.scenario(c)}),a.appendChild(h)}i.appendChild(a);let o=Qt("div","row act","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC");o.addEventListener("click",c=>{c.stopPropagation(),t.restart()}),i.appendChild(o)}};this._upd=[],e(this.titleRows,!1),e(this.pauseRows,!0)}refresh(){for(let t of this._upd)t()}show(t,e){this.mode=t,this.title.classList.toggle("on",t==="title"),this.pause.classList.toggle("on",t==="paused"),this.dead.classList.toggle("on",t==="dead"),this.won.classList.toggle("on",t==="won"),t==="won"&&(this.wonTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+eh(e.time)),t!=="playing"&&this.noteEl.classList.remove("on"),this.hud.classList.toggle("on",t==="playing"),this.touch.classList.toggle("on",t==="playing"&&this.isTouch),t==="paused"&&(this.pauseTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+eh(e.time)),t==="dead"&&(this.deadTitle.textContent=e.cause==="cold"?"\uCCB4\uC628\uC744 \uC783\uACE0 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4":"\uC228\uC774 \uB2E4\uD574 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4",this.deadTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+eh(e.time)),this.refresh(),t!=="playing"&&this.releaseTouch()}cine(t){this.root.classList.toggle("cine",!!t),t&&(this.noteEl.classList.remove("on"),clearTimeout(this._nt))}note(t,e=6){this.noteEl.textContent=t,this.noteEl.classList.add("on"),clearTimeout(this._nt),this._nt=setTimeout(()=>this.noteEl.classList.remove("on"),e*1e3)}setBars(t,e,i,n=0){let s=(a,o,c,h)=>{a.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,o)).toFixed(3)})`,a.el.classList.toggle("show",o<c),a.el.classList.toggle("low",o<h)};s(this.bars.o2,t,.97,.3),s(this.bars.st,e,.9,.22),s(this.bars.tp,i,.8,.35),this.bars.rs.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,n)).toFixed(3)})`,this.bars.rs.el.classList.toggle("show",n>.01)}buildTouch(){let t=this.api,e=t.input;e.touch={x:0,z:0,swim:!1,dive:!1};let i=Qt("div","zone zl"),n=Qt("div","zone zr"),s=Qt("div","stick","<b></b>"),a=s.firstChild;this.touch.append(i,n,s);let o=null,c=0,h=0,u=null,l=0,d=0,f=56;i.addEventListener("pointerdown",x=>{if(o===null){o=x.pointerId,c=x.clientX,h=x.clientY;try{i.setPointerCapture(x.pointerId)}catch{}s.style.display="block",s.style.left=c+"px",s.style.top=h+"px",a.style.transform="translate(0,0)",x.preventDefault()}}),i.addEventListener("pointermove",x=>{if(x.pointerId!==o)return;let w=x.clientX-c,A=x.clientY-h,E=Math.hypot(w,A);E>f&&(w*=f/E,A*=f/E),a.style.transform=`translate(${w}px,${A}px)`;let S=.12,N=w/f,O=-A/f;Math.hypot(N,O)<S&&(N=0,O=0),e.touch.x=N,e.touch.z=O,x.preventDefault()});let g=x=>{x.pointerId===o&&(o=null,e.touch.x=0,e.touch.z=0,s.style.display="none")};i.addEventListener("pointerup",g),i.addEventListener("pointercancel",g),n.addEventListener("pointerdown",x=>{if(u===null){u=x.pointerId,l=x.clientX,d=x.clientY;try{n.setPointerCapture(x.pointerId)}catch{}x.preventDefault()}}),n.addEventListener("pointermove",x=>{x.pointerId===u&&(e.dx+=(x.clientX-l)*2.2,e.dy+=(x.clientY-d)*2.2,l=x.clientX,d=x.clientY,e.lastLook=performance.now()/1e3,x.preventDefault())});let b=x=>{x.pointerId===u&&(u=null)};n.addEventListener("pointerup",b),n.addEventListener("pointercancel",b);let m=(x,w)=>{let A=Qt("div","btn "+x,w);return this.touch.appendChild(A),A},p=m("sw","\uD5E4\uC5C4"),y=m("dv","\uC785\uC218"),v=m("sm vw",'<svg viewBox="0 0 24 24"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/></svg>\uC2DC\uC810'),_=m("sm ps",'<svg viewBox="0 0 24 24"><path d="M8.5 5v14M15.5 5v14"/></svg>\uBA48\uCDA4'),R=(x,w)=>{let A=null;x.addEventListener("pointerdown",S=>{S.preventDefault(),S.stopPropagation(),A=S.pointerId;try{x.setPointerCapture(S.pointerId)}catch{}x.classList.add("on"),e.touch[w]=!0});let E=S=>{A!==null&&S.pointerId!==A||(S.stopPropagation(),A=null,x.classList.remove("on"),e.touch[w]=!1)};x.addEventListener("pointerup",E),x.addEventListener("pointercancel",E),x.addEventListener("lostpointercapture",E)};R(p,"swim"),R(y,"dive"),v.addEventListener("pointerdown",x=>{x.preventDefault(),x.stopPropagation(),t.toggleView()}),_.addEventListener("pointerdown",x=>{x.preventDefault(),x.stopPropagation(),t.pause()}),this.releaseTouch=()=>{o=null,u=null,e.touch.x=0,e.touch.z=0,e.touch.swim=!1,e.touch.dive=!1,s.style.display="none",p.classList.remove("on"),y.classList.remove("on")}}releaseTouch(){}};var Jn={A:{label:"\uBCF4\uD1B5 \uD30C\uB3C4\uC5D0 \uB5A0 \uC788\uAE30",storm:.42,t0:40,view:"third",keys:{},script:[]},B:{label:"\uD070 \uB108\uC6B8 \uC811\uADFC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:15,height:16,breakOffset:9,angleOffset:0,width:240,speed:13,frontMin:27,back:70})}]},C:{label:"\uD30C\uB3C4 \uBD95\uAD34 \xB7 \uCDA9\uB3CC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:9,height:13.5,breakOffset:-1,angleOffset:0,width:170,speed:14})}]},D:{label:"\uBB3C\uC18D \uD718\uB9D0\uB9BC",storm:1,t0:12,view:"first",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:6,height:14.5,breakOffset:-1.3,angleOffset:0,width:170,speed:14})}]},E:{label:"\uC218\uBA74 \uBCF5\uADC0",storm:.85,t0:30,view:"first",keys:{up:!0,sprint:!0},setup:r=>{r.body.pos.y-=5.5,r.body.prevPos.copy(r.body.pos),r.survival.oxygen=42,r.survival.wasUnder=!0,r.survival.submergedTime=14,r.cam.pitch=.7},script:[{t:9,do:r=>{r.input.virtual={}}}]},F:{label:"\uBC88\uAC1C",storm:.9,t0:55,view:"third",keys:{},script:[{t:2,do:r=>r.lightning.strike(r.camera.position,{azimuth:Math.PI,dist:1700,sheet:0,power:1.4})},{t:9,do:r=>r.lightning.strike(r.camera.position,{azimuth:Math.PI*.8,dist:5200,sheet:1,power:1})}]},G:{label:"\uCDA9\uB3CC \uC911 \uC2DC\uC810 \uC804\uD658",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:7,height:12.5,breakOffset:-1,angleOffset:0,width:170,speed:14})},...[2,3.6,5.2,6.4,7.4,8.4,9.6,11,12.6,14.2].map(r=>({t:r,do:t=>t.cam.toggle()}))]}};Jn.H={label:"\uD574\uC77C \xB7 \uACF5\uC911\uC73C\uB85C \uB0A0\uC544\uAC10",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launchMega({lead:14,height:34})}]};Jn.R={label:"\uAD6C\uC870 \uD5EC\uAE30",storm:.8,t0:30,view:"third",keys:{},script:[{t:.5,do:r=>r.rescue.dispatch(r.body.pos,Math.PI,16)},...Array.from({length:70},(r,t)=>({t:11+t*.5,do:e=>{if(e.rescue.state==="lift"){e.input.virtual=null;return}let i=e.rescue.ring,n=e.body.pos;e.cam.yaw=Math.atan2(i.x-n.x,i.z-n.z),e.input.virtual={z:1,sprint:!0},e.input.enabled=!0}}))]};Jn.S={label:"\uBCF4\uD2B8\uC5D0\uC11C \uC2DC\uC791 \xB7 \uC804\uBCF5",storm:1,t0:12,view:"third",keys:{},setup:r=>r.board(),script:[{t:1,do:r=>r.launchIntroWave(9)}]};Jn.T={label:"\uBCF4\uD2B8\uC5D0 \uB5A0 \uC788\uAE30",storm:.7,t0:30,view:"third",keys:{},setup:r=>r.board(),script:[]};var eo=class{constructor(t){this.game=t,this.active=null,this.t=0,this.next=0,this.name=""}run(t){let e=Jn[t];if(!e)return!1;let i=this.game;i.waves.time=e.t0;for(let n of i.waves.breakers)n.active=!1;return i.weather.locked=!0,i.weather.base=i.weather.storm=e.storm,i.weather.time=0,i.interaction.auto=!1,i.autoLightning=!1,i.lightning.active=!1,i.lightning.pendingThunder.length=0,i.rescue.reset(1e9),i.weather.update(0),i.waves.update(0),i.resetPlayer(),i.cam.setMode(e.view),i.cam.blend=i.cam.target,i.cam.yaw=-Math.PI/2,i.cam.pitch=e.view==="first"?-.02:-.08,i.input.virtual=e.keys&&Object.keys(e.keys).length?{...e.keys}:null,i.input.virtual&&(i.input.enabled=!0),e.setup&&e.setup(i),this.active=e,this.name=t,this.t=0,this.next=0,!0}stop(){this.active=null,this.game.input.virtual=null}update(t){if(!this.active)return;this.t+=t;let e=this.active.script;for(;this.next<e.length&&this.t>=e[this.next].t;)e[this.next].do(this.game),this.next++}};function ih(r,t){if(t===zu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===br||t===Aa){let e=r.getIndex();if(e===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let i=e.count-2,n=[];if(t===br)for(let a=1;a<=i;a++)n.push(e.getX(0)),n.push(e.getX(a)),n.push(e.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(e.getX(a)),n.push(e.getX(a+1)),n.push(e.getX(a+2))):(n.push(e.getX(a+2)),n.push(e.getX(a+1)),n.push(e.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}var io=class extends hn{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new hh(e)}),this.register(function(e){return new vh(e)}),this.register(function(e){return new xh(e)}),this.register(function(e){return new yh(e)}),this.register(function(e){return new uh(e)}),this.register(function(e){return new dh(e)}),this.register(function(e){return new fh(e)}),this.register(function(e){return new ph(e)}),this.register(function(e){return new ch(e)}),this.register(function(e){return new mh(e)}),this.register(function(e){return new lh(e)}),this.register(function(e){return new bh(e)}),this.register(function(e){return new gh(e)}),this.register(function(e){return new ah(e)}),this.register(function(e){return new _h(e)}),this.register(function(e){return new Mh(e)})}load(t,e,i,n){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let h=En.extractUrlBase(t);a=En.resolveURL(h,this.path)}else a=En.extractUrlBase(t);this.manager.itemStart(t);let o=function(h){n?n(h):console.error(h),s.manager.itemError(t),s.manager.itemEnd(t)},c=new pr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(h){try{s.parse(h,a,function(u){e(u),s.manager.itemEnd(t)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s,a={},o={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===bd){try{a[ie.KHR_BINARY_GLTF]=new wh(t)}catch(l){n&&n(l);return}s=JSON.parse(a[ie.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let h=new Ph(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let l=this.pluginCallbacks[u](h);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[l.name]=l,a[l.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let l=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(l){case ie.KHR_MATERIALS_UNLIT:a[l]=new oh;break;case ie.KHR_DRACO_MESH_COMPRESSION:a[l]=new Eh(s,this.dracoLoader);break;case ie.KHR_TEXTURE_TRANSFORM:a[l]=new Sh;break;case ie.KHR_MESH_QUANTIZATION:a[l]=new Th;break;default:d.indexOf(l)>=0&&o[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}h.setExtensions(a),h.setPlugins(o),h.parse(i,n)}parseAsync(t,e){let i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}};function $v(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}var ie={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ah=class{constructor(t){this.parser=t,this.name=ie.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){let s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,i="light:"+t,n=e.cache.get(i);if(n)return n;let s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],h,u=new Dt(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Ce);let l=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new Xn(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new wa(u),h.distance=l;break;case"spot":h=new Ds(u),h.distance=l,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),h.decay=2,An(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=e.createUniqueName(c.name||"light_"+t),n=Promise.resolve(h),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,i=this.parser,s=i.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(e.cache,o,c)})}},oh=class{constructor(){this.name=ie.KHR_MATERIALS_UNLIT}getMaterialType(){return Ge}extendParams(t,e,i){let n=[];t.color=new Dt(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Ce),t.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,ve))}return Promise.all(n)}},ch=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},hh=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Mt(o,o)}return Promise.all(s)}},lh=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},uh=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_SHEEN}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new Dt(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Ce)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",a.sheenColorTexture,ve)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},dh=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},fh=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_VOLUME}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return e.attenuationColor=new Dt().setRGB(o[0],o[1],o[2],Ce),Promise.all(s)}},ph=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_IOR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},mh=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_SPECULAR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return e.specularColor=new Dt().setRGB(o[0],o[1],o[2],Ce),a.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",a.specularColorTexture,ve)),Promise.all(s)}},gh=class{constructor(t){this.parser=t,this.name=ie.EXT_MATERIALS_BUMP}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}},bh=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:li}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},vh=class{constructor(t){this.parser=t,this.name=ie.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}},xh=class{constructor(t){this.parser=t,this.name=ie.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=n.images[a.source],c=i.textureLoader;if(o.uri){let h=i.options.manager.getHandler(o.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(t,a.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},yh=class{constructor(t){this.parser=t,this.name=ie.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=n.images[a.source],c=i.textureLoader;if(o.uri){let h=i.options.manager.getHandler(o.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(t,a.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},_h=class{constructor(t){this.name=ie.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=n.byteOffset||0,h=n.byteLength||0,u=n.count,l=n.byteStride,d=new Uint8Array(o,c,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,l,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*l);return a.decodeGltfBuffer(new Uint8Array(f),u,l,d,n.mode,n.filter),f})})}else return null}},Mh=class{constructor(t){this.name=ie.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=e.meshes[i.mesh];for(let h of n.primitives)if(h.mode!==Ri.TRIANGLES&&h.mode!==Ri.TRIANGLE_STRIP&&h.mode!==Ri.TRIANGLE_FAN&&h.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],c={};for(let h in a)o.push(this.parser.getDependency("accessor",a[h]).then(u=>(c[h]=u,c[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(h=>{let u=h.pop(),l=u.isGroup?u.children:[u],d=h[0].count,f=[];for(let g of l){let b=new At,m=new M,p=new xt,y=new M(1,1,1),v=new pa(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,b.compose(m,p,y));for(let _ in c)if(_==="_COLOR_0"){let R=c[_];v.instanceColor=new qe(R.array,R.itemSize,R.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Se.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},bd="glTF",yr=12,fd={JSON:1313821514,BIN:5130562},wh=class{constructor(t){this.name=ie.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,yr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==bd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-yr,s=new DataView(t,yr),a=0;for(;a<n;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===fd.JSON){let h=new Uint8Array(t,yr+a,o);this.content=i.decode(h)}else if(c===fd.BIN){let h=yr+a;this.body=t.slice(h,h+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Eh=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ie.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},h={};for(let u in a){let l=Rh[u]||u.toLowerCase();o[l]=a[u]}for(let u in t.attributes){let l=Rh[u]||u.toLowerCase();if(a[u]!==void 0){let d=i.accessors[t.attributes[u]],f=Hs[d.componentType];h[l]=f.name,c[l]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(u){return new Promise(function(l,d){n.decodeDracoFile(u,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}l(f)},o,h,Ce,d)})})}},Sh=class{constructor(){this.name=ie.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Th=class{constructor(){this.name=ie.KHR_MESH_QUANTIZATION}},no=class extends _n{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let a=0;a!==n;a++)e[a]=i[s+a];return e}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,h=o*3,u=n-e,l=(i-e)/u,d=l*l,f=d*l,g=t*h,b=g-h,m=-2*f+3*d,p=f-d,y=1-m,v=p-d+l;for(let _=0;_!==o;_++){let R=a[b+_+o],x=a[b+_+c]*u,w=a[g+_+o],A=a[g+_]*u;s[_]=y*R+v*x+m*w+p*A}return s}},tx=new xt,Ah=class extends no{interpolate_(t,e,i,n){let s=super.interpolate_(t,e,i,n);return tx.fromArray(s).normalize().toArray(s),s}},Ri={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pd={9728:Ee,9729:ee,9984:ea,9985:kc,9986:Qs,9987:ei},md={33071:$e,33648:ir,10497:ti},nh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Tn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ex={CUBICSPLINE:void 0,LINEAR:Hn,STEP:Ts},sh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ix(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new xi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gi})),r.DefaultMaterial}function $n(r,t,e){for(let i in e.extensions)r[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function An(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function nx(r,t,e){let i=!1,n=!1,s=!1;for(let h=0,u=t.length;h<u;h++){let l=t[h];if(l.POSITION!==void 0&&(i=!0),l.NORMAL!==void 0&&(n=!0),l.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let h=0,u=t.length;h<u;h++){let l=t[h];if(i){let d=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):r.attributes.position;a.push(d)}if(n){let d=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(h){let u=h[0],l=h[1],d=h[2];return i&&(r.morphAttributes.position=u),n&&(r.morphAttributes.normal=l),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function sx(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)r.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rx(r){let t,e=r.extensions&&r.extensions[ie.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+rh(e.attributes):t=r.indices+":"+rh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)t+=":"+rh(r.targets[i]);return t}function rh(r){let t="",e=Object.keys(r).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+r[e[i]]+";";return t}function Ch(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ax(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var ox=new At,Ph=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new $v,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new Ma(this.options.manager):this.textureLoader=new Ea(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return $n(s,o,n),An(o,n),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){let a=e[n].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let n=0,s=t.length;n<s;n++){let a=t[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;let n=i.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[h,u]of a.children.entries())s(u,o.children[h])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){let n=t(e[i]);if(n)return n}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let i=[];for(let n=0;n<e.length;n++){let s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){let i=t+":"+e,n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){let i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,a){return i.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ie.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,a){i.load(En.resolveURL(e.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){let n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){let e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){let a=nh[n.type],o=Hs[n.componentType],c=n.normalized===!0,h=new o(n.count*a);return Promise.resolve(new Vt(h,a,c))}let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=nh[n.type],h=Hs[n.componentType],u=h.BYTES_PER_ELEMENT,l=u*c,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0,b,m;if(f&&f!==l){let p=Math.floor(d/f),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,v=e.cache.get(y);v||(b=new h(o,p*f,n.count*f/u),v=new ar(b,f/u),e.cache.add(y,v)),m=new or(v,c,d%f/u,g)}else o===null?b=new h(n.count*c):b=new h(o,d,n.count*c),m=new Vt(b,c,g);if(n.sparse!==void 0){let p=nh.SCALAR,y=Hs[n.sparse.indices.componentType],v=n.sparse.indices.byteOffset||0,_=n.sparse.values.byteOffset||0,R=new y(a[1],v,n.sparse.count*p),x=new h(a[2],_,n.sparse.count*c);o!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,A=R.length;w<A;w++){let E=R[w];if(m.setX(E,x[w*c]),c>=2&&m.setY(E,x[w*c+1]),c>=3&&m.setZ(E,x[w*c+2]),c>=4&&m.setW(E,x[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){let e=this.json,i=this.options,s=e.textures[t].source,a=e.images[s],o=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,i){let n=this,s=this.json,a=s.textures[t],o=s.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let h=this.loadImageSource(e,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return u.magFilter=pd[d.magFilter]||ee,u.minFilter=pd[d.minFilter]||ei,u.wrapS=md[d.wrapS]||ti,u.wrapT=md[d.wrapT]||ti,n.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(t,e){let i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());let a=n.images[t],o=self.URL||self.webkitURL,c=a.uri||"",h=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(l){h=!0;let d=new Blob([l],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(l){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(b){let m=new We(b);m.needsUpdate=!0,d(m)}),e.load(En.resolveURL(l,s.path),g,void 0,f)})}).then(function(l){return h===!0&&o.revokeObjectURL(c),l.userData.mimeType=a.mimeType||ax(a.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[t]=u,u}assignTexture(t,e,i,n){let s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[ie.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[ie.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[ie.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return n!==void 0&&(a.colorSpace=n),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,i=t.material,n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new hr,vi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(t.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new cr,vi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}t.material=i}getMaterialType(){return xi}loadMaterial(t){let e=this,i=this.json,n=this.extensions,s=i.materials[t],a,o={},c=s.extensions||{},h=[];if(c[ie.KHR_MATERIALS_UNLIT]){let l=n[ie.KHR_MATERIALS_UNLIT];a=l.getMaterialType(),h.push(l.extendParams(o,s,e))}else{let l=s.pbrMetallicRoughness||{};if(o.color=new Dt(1,1,1),o.opacity=1,Array.isArray(l.baseColorFactor)){let d=l.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ce),o.opacity=d[3]}l.baseColorTexture!==void 0&&h.push(e.assignTexture(o,"map",l.baseColorTexture,ve)),o.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,o.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(h.push(e.assignTexture(o,"metalnessMap",l.metallicRoughnessTexture)),h.push(e.assignTexture(o,"roughnessMap",l.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=Le);let u=s.alphaMode||sh.OPAQUE;if(u===sh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===sh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Ge&&(h.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Mt(1,1),s.normalTexture.scale!==void 0)){let l=s.normalTexture.scale;o.normalScale.set(l,l)}if(s.occlusionTexture!==void 0&&a!==Ge&&(h.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Ge){let l=s.emissiveFactor;o.emissive=new Dt().setRGB(l[0],l[1],l[2],Ce)}return s.emissiveTexture!==void 0&&a!==Ge&&h.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,ve)),Promise.all(h).then(function(){let l=new a(o);return s.name&&(l.name=s.name),An(l,s),e.associations.set(l,{materials:t}),s.extensions&&$n(n,l,s),l})}createUniqueName(t){let e=ge.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[ie.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return gd(c,o,e)})}let a=[];for(let o=0,c=t.length;o<c;o++){let h=t[o],u=rx(h),l=n[u];if(l)a.push(l.promise);else{let d;h.extensions&&h.extensions[ie.KHR_DRACO_MESH_COMPRESSION]?d=s(h):d=gd(new ce,h,e),n[u]={primitive:h,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){let e=this,i=this.json,n=this.extensions,s=i.meshes[t],a=s.primitives,o=[];for(let c=0,h=a.length;c<h;c++){let u=a[c].material===void 0?ix(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){let h=c.slice(0,c.length-1),u=c[c.length-1],l=[];for(let f=0,g=u.length;f<g;f++){let b=u[f],m=a[f],p,y=h[f];if(m.mode===Ri.TRIANGLES||m.mode===Ri.TRIANGLE_STRIP||m.mode===Ri.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Gn(b,y):new St(b,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Ri.TRIANGLE_STRIP?p.geometry=ih(p.geometry,Aa):m.mode===Ri.TRIANGLE_FAN&&(p.geometry=ih(p.geometry,br));else if(m.mode===Ri.LINES)p=new ma(b,y);else if(m.mode===Ri.LINE_STRIP)p=new Fs(b,y);else if(m.mode===Ri.LINE_LOOP)p=new ga(b,y);else if(m.mode===Ri.POINTS)p=new ba(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&sx(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),An(p,s),m.extensions&&$n(n,p,m),e.assignFinalMaterial(p),l.push(p)}for(let f=0,g=l.length;f<g;f++)e.associations.set(l[f],{meshes:t,primitives:f});if(l.length===1)return s.extensions&&$n(n,l[0],s),l[0];let d=new de;s.extensions&&$n(n,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=l.length;f<g;f++)d.add(l[f]);return d})}loadCamera(t){let e,i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new De(Sn.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new hi(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),An(e,i),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let s=n.pop(),a=n,o=[],c=[];for(let h=0,u=a.length;h<u;h++){let l=a[h];if(l){o.push(l);let d=new At;s!==null&&d.fromArray(s.array,h*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[h])}return new Is(o,c)})}loadAnimation(t){let e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,a=[],o=[],c=[],h=[],u=[];for(let l=0,d=n.channels.length;l<d;l++){let f=n.channels[l],g=n.samplers[f.sampler],b=f.target,m=b.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,y=n.parameters!==void 0?n.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),h.push(g),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(h),Promise.all(u)]).then(function(l){let d=l[0],f=l[1],g=l[2],b=l[3],m=l[4],p=[];for(let y=0,v=d.length;y<v;y++){let _=d[y],R=f[y],x=g[y],w=b[y],A=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let E=i._createAnimationTracks(_,R,x,w,A);if(E)for(let S=0;S<E.length;S++)p.push(E[S])}return new _a(s,void 0,p)})}createNodeMesh(t){let e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,h=n.weights.length;c<h;c++)o.morphTargetInfluences[c]=n.weights[c]}),a})}loadNode(t){let e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),a=[],o=n.children||[];for(let h=0,u=o.length;h<u;h++)a.push(i.getDependency("node",o[h]));let c=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),c]).then(function(h){let u=h[0],l=h[1],d=h[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ox)});for(let f=0,g=l.length;f<g;f++)u.add(l[f]);return u})}_loadNodeShallow(t){let e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],a=s.name?n.createUniqueName(s.name):"",o=[],c=n._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(t)});return c&&o.push(c),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(h){return n._getNodeRef(n.cameraCache,s.camera,h)})),n._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(t)}).forEach(function(h){o.push(h)}),this.nodeCache[t]=Promise.all(o).then(function(h){let u;if(s.isBone===!0?u=new Wn:h.length>1?u=new de:h.length===1?u=h[0]:u=new Se,u!==h[0])for(let l=0,d=h.length;l<d;l++)u.add(h[l]);if(s.name&&(u.userData.name=s.name,u.name=a),An(u,s),s.extensions&&$n(i,u,s),s.matrix!==void 0){let l=new At;l.fromArray(s.matrix),u.applyMatrix4(l)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return n.associations.has(u)||n.associations.set(u,{}),n.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){let e=this.extensions,i=this.json.scenes[t],n=this,s=new de;i.name&&(s.name=n.createUniqueName(i.name)),An(s,i),i.extensions&&$n(e,s,i);let a=i.nodes||[],o=[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,l=c.length;u<l;u++)s.add(c[u]);let h=u=>{let l=new Map;for(let[d,f]of n.associations)(d instanceof vi||d instanceof We)&&l.set(d,f);return u.traverse(d=>{let f=n.associations.get(d);f!=null&&l.set(d,f)}),l};return n.associations=h(s),s})}_createAnimationTracks(t,e,i,n,s){let a=[],o=t.name?t.name:t.uuid,c=[];Tn[s.path]===Tn.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let h;switch(Tn[s.path]){case Tn.weights:h=on;break;case Tn.rotation:h=Vi;break;case Tn.position:case Tn.scale:h=cn;break;default:switch(i.itemSize){case 1:h=on;break;case 2:case 3:default:h=cn;break}break}let u=n.interpolation!==void 0?ex[n.interpolation]:Hn,l=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){let g=new h(c[d]+"."+Tn[s.path],e.array,l,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let i=Ch(e.constructor),n=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){let n=this instanceof Vi?Ah:no;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function cx(r,t,e){let i=t.attributes,n=new Ei;if(i.POSITION!==void 0){let o=e.json.accessors[i.POSITION],c=o.min,h=o.max;if(c!==void 0&&h!==void 0){if(n.set(new M(c[0],c[1],c[2]),new M(h[0],h[1],h[2])),o.normalized){let u=Ch(Hs[o.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new M,c=new M;for(let h=0,u=s.length;h<u;h++){let l=s[h];if(l.POSITION!==void 0){let d=e.json.accessors[l.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=Ch(Hs[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;let a=new bi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function gd(r,t,e){let i=t.attributes,n=[];function s(a,o){return e.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in i){let o=Rh[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(t.indices!==void 0&&!r.index){let a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});n.push(a)}return ae.workingColorSpace!==Ce&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ae.workingColorSpace}" not supported.`),An(r,t),cx(r,t,e),Promise.all(n).then(function(){return t.targets!==void 0?nx(r,t.targets,e):r})}var vd=function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(e)?t:r,s,a=WebAssembly.instantiate(o(n),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),v=0;v<p.length;++v){var _=p.charCodeAt(v);y[v]=_>96?_-97:_>64?_-39:_+4}for(var R=0,v=0;v<p.length;++v)y[R++]=y[v]<60?i[y[v]]:(y[v]-60)*64+y[++v];return y.buffer.slice(0,R)}function c(p,y,v,_,R,x){var w=s.exports.sbrk,A=v+3&-4,E=w(A*_),S=w(R.length),N=new Uint8Array(s.exports.memory.buffer);N.set(R,S);var O=p(E,v,_,S,R.length);if(O==0&&x&&x(E,A,_),y.set(N.subarray(E,E+v*_)),w(E-w(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var h={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},l=[],d=0;function f(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(v){var _=v.data;y.pending-=_.count,y.requests[_.id][_.action](_.value),delete y.requests[_.id]},y}function g(p){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(n))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),v=new Blob([y],{type:"text/javascript"}),_=URL.createObjectURL(v),R=0;R<p;++R)l[R]=f(_);URL.revokeObjectURL(_)}function b(p,y,v,_,R){for(var x=l[0],w=1;w<l.length;++w)l[w].pending<x.pending&&(x=l[w]);return new Promise(function(A,E){var S=new Uint8Array(v),N=d++;x.pending+=p,x.requests[N]={resolve:A,reject:E},x.object.postMessage({id:N,count:p,size:y,source:S,mode:_,filter:R},[S.buffer])})}function m(p){a.then(function(){var y=p.data;try{var v=new Uint8Array(y.count*y.size);c(s.exports[y.mode],v,y.count,y.size,y.source,s.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:v},[v.buffer])}catch(_){self.postMessage({id:y.id,count:y.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,y,v,_,R){c(s.exports.meshopt_decodeVertexBuffer,p,y,v,_,s.exports[h[R]])},decodeIndexBuffer:function(p,y,v,_){c(s.exports.meshopt_decodeIndexBuffer,p,y,v,_)},decodeIndexSequence:function(p,y,v,_){c(s.exports.meshopt_decodeIndexSequence,p,y,v,_)},decodeGltfBuffer:function(p,y,v,_,R,x){c(s.exports[u[R]],p,y,v,_,s.exports[h[x]])},decodeGltfBufferAsync:function(p,y,v,_,R){return l.length>0?b(p,y,v,u[_],h[R]):a.then(function(){var x=new Uint8Array(p*y);return c(s.exports[u[_]],x,p,y,v,s.exports[h[R]]),x})}}}();var xd=[["hips","Hips",null,null],["spine","Spine","Spine1","chest"],["chest","Spine2","Neck","neck"],["neck","Neck","Head","head"],["head","Head",null,null],["upperArmL","LeftArm","LeftForeArm","foreArmL"],["foreArmL","LeftForeArm","LeftHand","handL"],["handL","LeftHand","LeftHandMiddle1",[.03,-.182,.012]],["upperArmR","RightArm","RightForeArm","foreArmR"],["foreArmR","RightForeArm","RightHand","handR"],["handR","RightHand","RightHandMiddle1",[-.03,-.182,.012]],["thighL","LeftUpLeg","LeftLeg","shinL"],["shinL","LeftLeg","LeftFoot","footL"],["footL","LeftFoot","LeftToeBase",[.006,-.063,.205]],["thighR","RightUpLeg","RightLeg","shinR"],["shinR","RightLeg","RightFoot","footR"],["footR","RightFoot","RightToeBase",[-.006,-.063,.205]]],hx=["Index","Middle","Ring","Pinky"];function Lh(r){return new Promise((t,e)=>{let i=atob(r),n=new Uint8Array(i.length);for(let a=0;a<i.length;a++)n[a]=i.charCodeAt(a);let s=new io;s.setMeshoptDecoder(vd),s.parse(n.buffer,"",t,e)})}var so=class{constructor(t,e,i=1.78){let n=t.group,s=n.position.clone(),a=n.quaternion.clone();n.position.set(0,0,0),n.quaternion.identity(),this.root=new de,this.root.name="glbBody",this.root.add(e.scene),n.add(this.root);let o=null;if(e.scene.traverse(x=>{x.isSkinnedMesh&&!o&&(o=x)}),!o)throw new Error("GLB has no skinned mesh");this.mesh=o,o.frustumCulled=!1,o.layers.enable(1),o.skeleton.pose(),n.updateMatrixWorld(!0);let c=new Map;o.skeleton.bones.forEach(x=>c.set(x.name.replace(/^mixamorig:?/i,""),x)),this.by=c;for(let x of xd)if(!c.get(x[1]))throw new Error("GLB skeleton is missing "+x[1]);let h=new M,u=new M;{let x=c.get("Head").getWorldPosition(new M).sub(c.get("Hips").getWorldPosition(h)).normalize(),w=c.get("LeftUpLeg").getWorldPosition(new M).sub(c.get("RightUpLeg").getWorldPosition(u)).normalize(),A=new M().crossVectors(w,x).normalize();w.crossVectors(x,A).normalize(),this.root.quaternion.setFromRotationMatrix(new At().makeBasis(w,x,A)).invert()}n.updateMatrixWorld(!0);let l=()=>(n.updateMatrixWorld(!0),o.skeleton.update(),o.computeBoundingBox(),o.boundingBox.clone().applyMatrix4(o.matrixWorld)),d=l();this.sourceHeight=d.max.y-d.min.y,this.root.scale.setScalar(i/this.sourceHeight),n.updateMatrixWorld(!0),c.get("Hips").getWorldPosition(h),this.root.position.set(-h.x,-h.y,-h.z),n.updateMatrixWorld(!0),d=l();let f=c.get("Head").getWorldPosition(new M);this.eye=new M(0,d.max.y-.118,f.z+.082),this.mouth=new M(0,d.max.y-.185,f.z+.09),this.top=d.max.y,this.feet=d.min.y;let g=c.get("Hips");this.order=[],g.traverse(x=>{x.isBone&&this.order.push(x)}),this.order.forEach((x,w)=>{x.userData.k=w}),this.parent=this.order.map(x=>x===g?-1:x.parent.userData.k),this.restL=this.order.map(x=>x.quaternion.clone()),this.W=this.order.map(()=>new xt),this.rootParentW=g.parent.getWorldQuaternion(new xt),this.driver=this.order.map(()=>-1),this.aligned=this.order.map(()=>null);let b=x=>new M(si[T[x]][2],si[T[x]][3],si[T[x]][4]),m=new xt;for(let[x,w,A,E]of xd){let S=c.get(w),N=S.userData.k,O=S.getWorldQuaternion(new xt),it=new xt;if(A&&E&&c.get(A)){let P=c.get(A).getWorldPosition(new M).sub(S.getWorldPosition(h)).normalize(),L=(Array.isArray(E)?new M(...E):b(E).sub(b(x))).normalize();it.setFromUnitVectors(P,L)}this.driver[N]=T[x],this.aligned[N]=it.multiply(O)}this.special=this.order.map(()=>null);let p=c.get("Spine1");if(p){let x=c.get("Spine2").getWorldPosition(new M).sub(p.getWorldPosition(h)).normalize(),w=new xt().setFromUnitVectors(x,new M(0,1,0)).multiply(p.getWorldQuaternion(new xt));this.special[p.userData.k]={type:"mid",aligned:w}}for(let[x,w,A]of[["LeftShoulder",1,T.upperArmL],["RightShoulder",-1,T.upperArmR]]){let E=c.get(x);E&&(this.special[E.userData.k]={type:"clav",side:w,arm:A,restW:E.getWorldQuaternion(new xt)})}this._d=new M,this._e=new oi,this._q2=new xt,this.fingers={Left:[],Right:[]},this.grip={Left:0,Right:0};for(let x of["Left","Right"]){let w=c.get(x+"Hand"),A=new M(0,-1,0);for(let E of hx)for(let S=1;S<=3;S++){let N=c.get(`${x}Hand${E}${S}`);if(!N)continue;let O=N.children.find(k=>k.isBone),it=O?O.getWorldPosition(new M).sub(N.getWorldPosition(h)).normalize():new M(x==="Left"?1:-1,0,0),P=new M().crossVectors(it,A).normalize(),L=N.parent.getWorldQuaternion(new xt),D=N.getWorldQuaternion(new xt);m.setFromAxisAngle(P,(S===1?.32:.42)*(E==="Pinky"?1.25:E==="Index"?.8:1));let H=m.clone().multiply(D),U=L.invert();this.restL[N.userData.k]=U.clone().multiply(H),N.quaternion.copy(this.restL[N.userData.k]),m.setFromAxisAngle(P,S===1?1.05:S===2?1.35:.9),this.fingers[x].push({bone:N,open:this.restL[N.userData.k].clone(),shut:U.clone().multiply(m.clone().multiply(D))})}}this.D=si.map(()=>new xt),this.headBone=c.get("Head"),this._q=new xt;let y=Array.isArray(o.material)?o.material:[o.material];for(let x of y)x.roughness=.44,x.metalness=0,x.envMapIntensity=1.3,x.color&&x.color.setRGB(.7,.78,.9),x.needsUpdate=!0;this.cutOn={value:0},this.headRigid=[];let v=`
  if (uCutOn > 0.5 && cutV > 0.0) {
    vec3 rel = position - uCutPos; rel -= uCutDir * dot(rel, uCutDir);
    transformed = uCutPos + rel * min(1.0, uCutR / max(length(rel), 1.0e-5)) - uCutDir * (0.4 * uCutR);
  }`,_=c.get("Head"),R=x=>{for(let w=x.parent;w;w=w.parent)if(w===_)return!0;return!1};e.scene.traverse(x=>{if(!x.isMesh)return;if(!x.isSkinnedMesh){R(x)&&this.headRigid.push(x);return}let w=x.skeleton.bones,A=rt=>w.findIndex(ot=>ot.name.replace(/^mixamorig:?/i,"")===rt),E=A("Neck"),S=A("Head"),N=A("Spine2");if(E<0||S<0||N<0)return;let O=new Set([E]);_.traverse(rt=>{let ot=w.indexOf(rt);ot>=0&&O.add(ot)});let it=x.geometry.attributes.position,P=x.geometry.attributes.skinIndex,L=x.geometry.attributes.skinWeight,D=P.count,H=new Float32Array(D),U=new Float32Array(D),k=new M,W=new M,q=new M,J=0,G=0;for(let rt=0;rt<D;rt++){let ot=0,ct=0,Et=0;for(let X=0;X<4;X++){let Bt=L.getComponent(rt,X),wt=P.getComponent(rt,X);ct+=Bt,O.has(wt)&&(ot+=Bt),wt===E&&(Et+=Bt)}H[rt]=ct>0?ot/ct:0,U[rt]=ct>0?Et/ct:0,q.fromBufferAttribute(it,rt),U[rt]=Math.max(U[rt],H[rt]>.25&&H[rt]<.85?.6:0),U[rt]>.5?(k.add(q),J++):H[rt]>.95&&(W.add(q),G++)}if(!J||!G)return;x.geometry.setAttribute("aHead",new Vt(H,1)),k.multiplyScalar(1/J),W.multiplyScalar(1/G);let z=W.clone().sub(k).normalize(),V=0,st=0;for(let rt=0;rt<D;rt++){if(U[rt]<=.5)continue;q.fromBufferAttribute(it,rt).sub(k);let ot=q.dot(z),ct=q.addScaledVector(z,-ot).length();ot<V&&(V=ot),ct>st&&(st=ct)}let Z={uCutOn:this.cutOn,uCutPos:{value:k.clone().addScaledVector(z,V*.55)},uCutDir:{value:z},uCutR:{value:st*.8},uCutBone:{value:N}};x.frustumCulled=!1,this.cutInfo=Z;for(let rt of Array.isArray(x.material)?x.material:[x.material])rt.onBeforeCompile=ot=>{Object.assign(ot.uniforms,Z),ot.vertexShader=`attribute float aHead; uniform float uCutOn; uniform vec3 uCutPos; uniform vec3 uCutDir; uniform float uCutR; uniform float uCutBone; varying float vCut;
`+ot.vertexShader.replace("#include <skinbase_vertex>",`float cutV = aHead - 0.6;
  vCut = cutV;
  #include <skinbase_vertex>
  #ifdef USE_SKINNING
  if (uCutOn > 0.5 && cutV > 0.0) { boneMatX = getBoneMatrix(uCutBone); boneMatY = boneMatX; boneMatZ = boneMatX; boneMatW = boneMatX; }
  #endif`).replace("#include <morphtarget_vertex>","#include <morphtarget_vertex>"+v),ot.fragmentShader=`uniform float uCutOn; varying float vCut;
`+ot.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) diffuseColor.a = 1.0;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) gl_FragColor.rgb = vec3(0.010, 0.012, 0.014);`)},rt.customProgramCacheKey=()=>"eos-neck-lid-"+x.uuid,rt.needsUpdate=!0}),this.material=y[0],n.position.copy(s),n.quaternion.copy(a),n.updateMatrixWorld(!0)}setHeadVisible(t){this.cutOn.value=t?0:1}setGrip(t,e){for(let[i,n]of[["Left",t],["Right",e]])if(!(Math.abs(this.grip[i]-n)<.01)){this.grip[i]=n;for(let s of this.fingers[i])s.bone.quaternion.copy(s.open).slerp(s.shut,n),this.restL[s.bone.userData.k].copy(s.bone.quaternion)}}update(t){let e=this.D;for(let a=0;a<t.length;a++){let o=si[a][1];o<0?e[a].copy(t[a].quaternion):e[a].copy(e[o]).multiply(t[a].quaternion)}let i=this.W,n=this.order,s=this._q;for(let a=0;a<n.length;a++){let o=this.parent[a]<0?this.rootParentW:i[this.parent[a]],c=this.driver[a];if(c>=0)i[a].copy(e[c]).multiply(this.aligned[a]),n[a].quaternion.copy(s.copy(o).invert().multiply(i[a]));else if(this.special[a]){let h=this.special[a];if(h.type==="mid")i[a].copy(e[T.spine]).slerp(e[T.chest],.5).multiply(h.aligned);else{let u=this._d.set(0,-1,0).applyQuaternion(t[h.arm].quaternion),l=Math.max(0,Math.min(1,(u.y+.35)/1.35)),d=Math.max(0,Math.min(1,u.z));this._q2.setFromEuler(this._e.set(0,-h.side*.3*d,h.side*.62*l*l*(3-2*l),"YXZ")),i[a].copy(e[T.chest]).multiply(this._q2).multiply(h.restW)}n[a].quaternion.copy(s.copy(o).invert().multiply(i[a]))}else i[a].copy(o).multiply(this.restL[a])}}};var yd={scream:[["scream_eyes",1,"snap"],["scream_mouth",1,"open"]],fear:[["fear_brows",1,"snap"],["scream_mouth",.85,"open"]],agony:[["agony",1,"slow"]],sob:[["sob",1,"slow"]],terror:[["fear_brows",1,"snap"],["scream_eyes",.25,"snap"],["shout_mouth",1,"open"]],hit:[["eyes_wide",1,"snap"],["clench",1,"snap"],["fear_brows",.3,"snap"]],strain:[["clench",.85,"slow"],["strain_eyes",1,"slow"]],dying:[["exhaust",1,"slow"],["sob",.35,"slow"]],shock:[["jaw_drop",1,"open"],["eyes_wide",.8,"snap"],["fear_brows",.6,"snap"]],gasp:[["gasp",1,"snap"],["eyes_wide",.5,"snap"]],silent:[["jaw_drop",.9,"slow"],["strain_eyes",.8,"slow"]],wince:[["strain_eyes",.7,"snap"],["clench",.6,"snap"]],hold:[["clench",.4,"slow"],["eyes_wide",.55,"slow"],["fear_brows",.35,"slow"]],choke:[["eyes_wide",1,"snap"],["gasp",.55,"open"],["exhaust",.2,"slow"]],howl:[["sob",.7,"slow"],["shout_mouth",1,"open"]],pant:[["exhaust",.6,"slow"],["gasp",.45,"breath"]],blank:[["exhaust",.5,"slow"],["eyes_wide",.4,"slow"],["jaw_drop",.25,"slow"]],groan:[["strain_eyes",.9,"slow"],["agony",.5,"slow"],["clench",.5,"slow"],["fear_brows",.25,"slow"]],moan:[["agony",.75,"slow"],["sob",.4,"slow"],["exhaust",.35,"breath"],["strain_eyes",.35,"slow"]]},lx={snap:16,open:8,slow:3.2,breath:6},ro=class{constructor(){this.mesh=null,this.dict=null,this.inf=null,this.cur={},this.tgt={},this.shape={},this.forced=null,this.forcedT=0,this.forcedGain=1,this.label="none",this.time=0,this.blinkT=2,this.blink=0}attach(t){if(!t||!t.morphTargetDictionary||!t.morphTargetInfluences)return!1;this.mesh=t,this.dict=t.morphTargetDictionary,this.inf=t.morphTargetInfluences;for(let e of Object.keys(this.dict))this.cur[e]=0,this.tgt[e]=0,this.shape[e]="slow";return!0}play(t,e,i=1){yd[t]&&(this.forced=t,this.forcedT=e,this.forcedGain=i)}update(t,e){if(!this.mesh)return;this.time+=t;let i=this.tgt,n=this.shape;for(let l in i)i[l]=0;let s=0;this.label="none";let a=(l,d)=>{if(!(d<=.01)){d>s&&(s=d,this.label=l);for(let[f,g,b]of yd[l]){if(i[f]===void 0)continue;let m=g*Math.min(1,d)*(b==="breath"?.5+.5*Math.sin(e.breathPhase*6.283):1);m>i[f]&&(i[f]=m,n[f]=b)}}};if(this.forcedT-=t,this.forced&&this.forcedT>0?a(this.forced,this.forcedGain):this.forced=null,!e.alive||e.blackout>.75)a("blank",1);else if(e.mouthUnder){let l=e.oxygen;e.impact>1&&a("hit",Math.min(1,e.impact/1.8)),l<14?(a("silent",1),a("agony",.7)):l<34?(a("choke",1),a("agony",.5*(34-l)/20)):l<62?(a("strain",.5+.5*(62-l)/28),a("hold",.6)):a("hold",1),e.blackout>.15&&a("dying",e.blackout*1.2)}else e.impact>1&&a("hit",Math.min(1,e.impact/1.8)),e.air>.3&&a("shock",e.air),e.brace>.3&&(a(e.crestDist<12?"terror":"fear",e.brace),e.brace>.85&&e.crestDist<5&&a("hold",.8)),e.gaspTimer>0&&(e.inhaling?a("gasp",.45+.55*Math.min(1,e.gaspTimer/2.5)):a("pant",1),e.swallow>.25&&a("wince",.7)),a("choke",pt((40-e.oxygen)/30)),e.stamina<24&&a("dying",1-e.stamina/24),e.effort>.7&&a("strain",Math.min(1,(e.effort-.7)*1.5)),e.temp<35.2&&a("groan",pt((35.2-e.temp)/2)*.7),s<.35&&a("pant",.25+.5*e.exertion);this.blinkT-=t,this.blinkT<=0&&(this.blink=.16,this.blinkT=1.8+Math.random()*3.5),this.blink=Math.max(0,this.blink-t),this.blink>0&&!e.mouthUnder&&i.strain_eyes!==void 0&&(i.strain_eyes=Math.max(i.strain_eyes,.9));let o=this.inf,c=this.dict,h=this.cur,u=0;for(let l in h){let f=i[l]>h[l]?lx[n[l]]||4:3.4;h[l]+=(i[l]-h[l])*(1-Math.exp(-t*f));let g=1+.12*Math.sin(this.time*(2.3+u*.37)+u*1.9)*(h[l]>.05?1:0);o[c[l]]=Math.max(0,Math.min(1.15,h[l]*g)),u++}}};var ux={gasp:[["b_gasp3",0,3,.72],["b_gasp4",0,3,.7],["b_gasp2",0,3,.8],["b_gasp1",0,3,.9]],inhale:[["b_gasp3",0,.85,.62],["b_gasp4",0,.62,.6]],cough:[["b_choke",.25,1.7,1],["b_choke",1.95,3,1.1],["b_choke",3.9,5,1.2],["b_choke",7.15,8.95,1.1],["b_choke",9.4,10.8,.9]],sputter:[["b_choke",5.45,6.1,1.1],["b_choke",14.25,14.7,.9],["b_choke",15.4,16.5,1],["b_choke",19.45,20.05,.6]],retch:[["b_choke",11.65,14.15,1.2],["b_choke",17.65,18.8,.8]],groan:[["b_under",0,1.25,1.2],["b_under",2.05,3.45,1.2]],bubbles:[["b_under",4.1,8.15,.9]]},dx={gasp:1.2,inhale:3,cough:1.2,sputter:1.4,retch:4,groan:3,bubbles:1.5},fx={gasp:"gasp",inhale:"gasp",cough:"wince",sputter:"wince",retch:"choke",groan:"silent",bubbles:"choke"},px={cough:1,sputter:1,retch:1},ao=class{constructor(t,e,i={}){this.audio=t,this.face=e,this.hooks=i,this.t=0,this.cool={},this.cur={prio:0,until:0},this.jobs=[],this.marks={},this.prevBrace=0,this.prevAir=0,this.prevDive=!1,this.splashCool=0,this.slapCool=0,this.gurgleUntil=0,this.gT=0,this.bubT=2,this.bed=0,this.last="",this.lastPick={},this.count=0}say(t,e,i,n){let s=this.t;if(s<(this.cool[t]||0)||s<this.cur.until&&e<=this.cur.prio)return 0;let a=ux[t],o=Math.random()*a.length|0;a.length>1&&o===this.lastPick[t]&&(o=(o+1)%a.length),this.lastPick[t]=o;let[c,h,u,l]=a[o],d=!!(n&&n.under),f=this.audio.playVoice(c,i*l*(d?1.3:1),.97+Math.random()*.06,[h,u]);this.last=t,this.count++;let g=f||u-h;return this.cur={prio:e,until:s+g*.85},this.cool[t]=s+g+dx[t],this.face&&this.face.play(d?t==="groan"?"silent":"choke":fx[t],g+.25),px[t]&&this.hooks.cough&&this.hooks.cough(g),d&&(this.audio.gurgle(.95),this.hooks.bubbles&&this.hooks.bubbles(Math.min(44,Math.round(12+g*14))),this.gurgleUntil=s+g,this.gT=.3),g}later(t,e){this.jobs.push({at:this.t+t,fn:e})}onEvent(t,e,i){if(!(!i||!i.alive))if(t==="surface")if(e.time>1.2||e.need>.2){let n=this.say("gasp",6,1,i);e.time>7||i.swallow>.45?this.later(Math.max(1.1,n*.6),s=>{s.under||this.say("retch",6,1,s)}):(e.time>3.2||i.swallow>.2)&&this.later(Math.max(1,n*.55),s=>{s.under||this.say("cough",5,.95,s)})}else e.time>.25&&(i.swallow>.1||Math.random()<.5)&&this.say("sputter",3,.8,i);else t==="impact"?e.strength>1.15&&!i.under&&this.say("sputter",4,1,i):t==="exhale"&&e.cough?i.under||this.say("cough",4,.85,i):t==="splash"?this.t>this.splashCool&&e.v>1.8&&!i.camUnder&&(this.splashCool=this.t+.45,this.audio.playClip(e.v>4?Math.random()<.5?"w_splash2":"w_splash1":"w_splash3",Math.min(.9,.15+e.v*.09),.9+Math.random()*.25,Math.random()*1.2-.6)):t==="limb"&&this.t>this.slapCool&&e.v>1.3&&!i.camUnder&&(this.slapCool=this.t+.07,this.audio.playClip("w_slap"+(1+(Math.random()*6|0)),Math.min(.75,.06+e.v*.085)*(e.kind==="arm"?.6:1),.85+Math.random()*.4,e.pan||0))}update(t,e){this.t+=t;for(let h=this.jobs.length-1;h>=0;h--)this.t>=this.jobs[h].at&&this.jobs.splice(h,1)[0].fn(e);let i=e.alive&&!e.under,n=h=>Math.max(0,Math.min(1,h)),s=n(.3+.55*(e.exertion||0)+(e.gaspTimer>0?.35:0)+.3*(e.struggle||0)+.25*n(e.brace||0)+.2*(e.air||0)),a=n((30-e.stamina)/25),o=this.t<this.cur.until?.28:1,c=i?(1-(e.blackout||0))*o:0;if(this.bed=c*(.2+.8*s)*(1-.7*a),this.audio.setBreath(this.bed*.95,c*(.12+.88*a)*.9,.92+.42*s,i),!!e.alive)if(e.under&&this.t<this.gurgleUntil&&(this.gT-=t,this.gT<=0&&(this.audio.gurgle(.6),this.gT=.32+Math.random()*.3,this.hooks.bubbles&&this.hooks.bubbles(7))),e.brace>.7&&this.prevBrace<=.7&&e.crestHeight>6&&!e.under&&this.say("inhale",5,1,e),this.prevBrace=e.brace,e.dive&&!this.prevDive&&!e.under&&this.say("inhale",5,.9,e),this.prevDive=e.dive,e.air>.5&&this.prevAir<=.5&&!e.under&&this.say("inhale",5,1,e),this.prevAir=e.air,e.under){let h=e.oxygen;h<48&&!this.marks.a&&(this.marks.a=!0,this.say("groan",5,.8,e)),h<30&&!this.marks.b&&(this.marks.b=!0,this.say("groan",6,1,e)),h<14&&!this.marks.c&&(this.marks.c=!0,this.say("groan",7,1,e)),h<72&&(this.bubT-=t*(1+n((50-h)/40)),this.bubT<=0&&(this.bubT=2.6+Math.random()*2.4,this.say("bubbles",2,.55+.4*n((60-h)/50),e)))}else e.oxygen>60&&(this.marks.a=this.marks.b=this.marks.c=!1)}};var mx=`
varying vec3 vP;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vP = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,gx=`
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
}`,Rn=13,oo=class{constructor(t){this.waves=t,this.group=new de,this.group.visible=!1,this.state="none",this.arriveAt=240,this.hoverTime=0,this.hold=0,this.rescued=!1,this.pos=new M,this.vel=new M,this.ring=new M,this.ringVel=new M,this.tan=.125,this.time=0,this.aim=new M,this._s=di(),this._v=new M,this._d=new M,this._down=new M(0,-1,0),this._from=new M;let e=this.heli=new de,i=new xi({color:13620438,roughness:.45,metalness:.2}),n=new xi({color:13127708,roughness:.5,metalness:.1}),s=new xi({color:1316892,roughness:.5,metalness:.4}),a=new xi({color:395532,roughness:.08,metalness:.8}),o=[[.02,3.35],[.55,3.2],[.95,2.8],[1.22,2.1],[1.32,1.2],[1.32,0],[1.25,-1],[1,-1.9],[.62,-2.6],[.4,-3.6],[.3,-5.4],[.22,-7.3],[.12,-8.2],[.02,-8.35]],c=new St(new ur(o.map(([P,L])=>new Mt(P,L)),28),i);c.rotation.x=Math.PI/2,c.scale.set(1,1,1.12),e.add(c);let h=new St(new ii(1.345,1.3,.9,28,1,!0),n);h.rotation.x=Math.PI/2,h.scale.set(1,1,1.12),h.position.z=-.75,e.add(h);let u=new St(new ii(.33,.3,.7,14,1,!0),n);u.rotation.x=Math.PI/2,u.position.set(0,0,-5.6),e.add(u);let l=[[1.335,.9],[1.335,1.25],[1.235,2.1],[.965,2.8],[.565,3.2],[.03,3.36]].map(([P,L])=>new Mt(P*1.012,L)),d=new St(new ur(l,20,Math.PI/2+.38,Math.PI-.76),a);d.rotation.x=Math.PI/2,d.scale.set(1,1,1.12),e.add(d);for(let P of[-1,1]){let L=new St(new ci(.05,.62,1.05),a);L.position.set(P*1.335,.42,-1.25),e.add(L);let D=new St(new ci(.06,1.5,.09),i);D.position.set(P*1.31,.2,.92),e.add(D)}let f=new St(new ci(1.5,.12,3.6),s);f.position.set(0,-1.44,.2),e.add(f);let g=new St(new qn(1,18,12),i);g.scale.set(.85,.55,1.9),g.position.set(0,1.35,-.5),e.add(g);for(let P of[-1,1]){let L=new St(new ii(.16,.2,.9,10),s);L.rotation.x=Math.PI/2,L.position.set(P*.55,1.35,-1.9),e.add(L)}let b=new St(new ci(.1,2,1),i);b.position.set(0,.95,-7.9),b.rotation.x=-.42,e.add(b);let m=new St(new ci(.11,.5,.75),n);m.position.set(0,1.78,-8.28),m.rotation.x=-.42,e.add(m);let p=new St(new ci(2.6,.07,.6),i);p.position.set(0,.1,-6.9),e.add(p);let y=new St(new ii(.13,.2,.75,10),s);y.position.set(0,2.05,-.2),e.add(y);let v=new St(new ii(.34,.34,.16,12),s);v.position.set(0,2.42,-.2),e.add(v);for(let P of[-1,1]){let L=new St(new ii(.06,.06,4.6,8),s);L.rotation.x=Math.PI/2,L.position.set(P*1.35,-1.75,.3),e.add(L);let D=new St(new ii(.06,.06,.6,8),s);D.rotation.x=Math.PI/2-.6,D.position.set(P*1.35,-1.6,2.8),e.add(D);for(let H of[-1,1]){let U=new St(new ii(.05,.05,1.05,6),s);U.position.set(P*1.12,-1.28,.3+H*1.15),U.rotation.z=-P*.45,e.add(U)}}let _=new St(new ci(.06,1.35,1.5),new Ge({color:new Dt(.15,.095,.04)}));_.position.set(1.325,.05,.1),e.add(_);let R=new St(new qn(.2,10,8),new Ge({color:329223}));R.position.set(1.36,.35,.45),R.scale.set(.5,1,1),e.add(R);let x=new St(new ci(.1,.55,.42),new Ge({color:329223}));x.position.set(1.36,-.08,.45),e.add(x);let w=new St(new ii(.06,.06,1.3,8),s);w.rotation.z=Math.PI/2-.25,w.position.set(1.75,1,.1),e.add(w);let A=new St(new ii(.16,.16,.34,10),s);A.rotation.x=Math.PI/2,A.position.set(2.32,.86,.1),e.add(A);let E=(P,L,D)=>{let H=document.createElement("canvas");H.width=H.height=256;let U=H.getContext("2d");U.translate(128,128);let k=U.createRadialGradient(0,0,8,0,0,126);k.addColorStop(0,`rgba(30,35,40,${L*.5})`),k.addColorStop(.8,`rgba(30,35,40,${L})`),k.addColorStop(.97,`rgba(52,58,66,${L*1.5})`),k.addColorStop(1,"rgba(30,35,40,0)"),U.fillStyle=k,U.beginPath(),U.arc(0,0,126,0,6.283),U.fill();for(let q=0;q<P;q++){U.save(),U.rotate(q*6.283/P);let J=U.createLinearGradient(0,-16,0,16);J.addColorStop(0,"rgba(20,24,28,0)"),J.addColorStop(.5,`rgba(20,24,28,${D})`),J.addColorStop(1,"rgba(20,24,28,0)"),U.fillStyle=J,U.beginPath(),U.moveTo(6,0),U.lineTo(124,-15),U.lineTo(124,15),U.closePath(),U.fill(),U.restore()}let W=new lr(H);return W.colorSpace=ai,W};this.rotor=new St(new dr(6.3,48),new Ge({map:E(4,.22,.5),transparent:!0,side:Le,depthWrite:!1})),this.rotor.rotation.x=-Math.PI/2,this.rotor.position.set(0,2.5,-.2),e.add(this.rotor),this.tail=new St(new dr(1.05,24),new Ge({map:E(2,.2,.4),transparent:!0,side:Le,depthWrite:!1})),this.tail.position.set(.22,1.25,-8.15),this.tail.rotation.y=Math.PI/2,e.add(this.tail);let S=(P,L,D,H,U,k,W=.13)=>{let q=new St(new qn(W,8,6),new Ge({color:new Dt(P,L,D)}));return q.position.set(H,U,k),e.add(q),q};S(2.6,.12,.1,1.35,.1,.6),S(.1,2.4,.4,-1.35,.1,.6),this.strobe=S(5,5,5.6,0,1.75,-7.6,.16),this.beacon=S(6,.25,.2,0,-.55,-3.4,.14),this.lampHead=S(5,5.8,7,0,-1.25,2.2,.22),this.group.add(e),this.spotLight=new Ds(13952255,0,0,.16,.7,0),this.spotLight.layers.enableAll(),this.group.add(this.spotLight,this.spotLight.target),this.beamMat=new re({uniforms:{uNoise:nt.uNoise,uTime:nt.uTime,uI:{value:0},uApex:{value:new M},uAxis:{value:new M(0,-1,0)},uLen:{value:1},uTan:{value:this.tan},uWaterY:{value:0}},vertexShader:mx,fragmentShader:gx,transparent:!0,blending:Ms,depthWrite:!1,side:gi});let N=new ii(.02,1,1,32,1,!1);N.translate(0,-.5,0),this.beam=new St(N,this.beamMat),this.beam.frustumCulled=!1,this.beam.renderOrder=18,this.group.add(this.beam);let O=new xi({color:9279131,roughness:.55,metalness:.4,emissive:1843236});this.ringMesh=new de;let it=new St(new fr(.43,.105,14,36),n);this.ringMesh.add(it);for(let P=0;P<4;P++){let L=new St(new fr(.43,.109,12,5,.34),i);L.rotation.z=P*Math.PI/2+.6,this.ringMesh.add(L)}for(let P=0;P<3;P++){let L=P*2.094,D=new St(new ii(.008,.008,1,4),O),H=new M(Math.cos(L)*.43,Math.sin(L)*.43,-.08),U=new M(0,0,-.5);D.position.copy(H).add(U).multiplyScalar(.5),D.scale.y=H.distanceTo(U),D.quaternion.setFromUnitVectors(new M(0,1,0),U.clone().sub(H).normalize()),this.ringMesh.add(D)}this.strobeR=new St(new qn(.035,8,6),new Ge({color:new Dt(6,6,6.5)})),this.strobeR.position.set(.43,0,-.13),this.ringMesh.add(this.strobeR),this.ringMesh.traverse(P=>{P.isMesh&&P.layers.enable(1)}),this.group.add(this.ringMesh),this.rope=[],this.ropeGroup=new de,this.group.add(this.ropeGroup);for(let P=0;P<Rn;P++)this.rope.push({p:new M,q:new M});{let P=(Rn-1)*5+1,L=7,D=L+1;this.ropeRings=P,this.ropeRad=L;let H=new Float32Array(P*D*3),U=new Float32Array(P*D*3),k=new Float32Array(P*D*2),W=[];for(let V=0;V<P;V++)for(let st=0;st<D;st++)k[(V*D+st)*2]=st/L,k[(V*D+st)*2+1]=V*.55;for(let V=0;V<P-1;V++)for(let st=0;st<L;st++){let Z=V*D+st,rt=Z+1,ot=Z+D,ct=ot+1;W.push(Z,ot,rt,rt,ot,ct)}let q=new ce;q.setAttribute("position",new Vt(H,3).setUsage(Wi)),q.setAttribute("normal",new Vt(U,3).setUsage(Wi)),q.setAttribute("uv",new Vt(k,2)),q.setIndex(W);let J=document.createElement("canvas");J.width=32,J.height=32;let G=J.getContext("2d");G.fillStyle="#b9b29a",G.fillRect(0,0,32,32),G.strokeStyle="#5f5a4c",G.lineWidth=3;for(let V=-32;V<64;V+=11)G.beginPath(),G.moveTo(V,0),G.lineTo(V+32,32),G.stroke();let z=new lr(J);z.wrapS=z.wrapT=ti,z.colorSpace=ve,this.ropeMesh=new St(q,new xi({map:z,roughness:.85,metalness:0,emissive:1381391})),this.ropeMesh.frustumCulled=!1,this.ropeGroup.add(this.ropeMesh),this.ropeCurve=new va(this.rope.map(()=>new M),!1,"centripetal"),this._rp=new M,this._rt=new M,this._rn=new M(1,0,0),this._rb=new M,this._rq=new M}this.ropeLen=20,this._top=new M,this.station=new M,this.holdNeed=2.6,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.liftBase=0,this.ringSpin=0,this._qr=new xt,this._er=new oi,this.lineDir=new M(0,1,0)}reset(t=240){this.state="none",this.group.visible=!1,this.rescued=!1,this.hold=0,this.arriveAt=t,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,nt.uSpotP.value.y=0,nt.uWash.value.w=0}_dropRope(){let t=this._top.copy(this.pos);t.y-=1.2,this.ropeLen=Math.max(8,t.y-this.waves.heightFast(t.x,t.z))+2.5;for(let e=0;e<Rn;e++){let i=this.rope[e];i.p.set(t.x,t.y-this.ropeLen*.92*e/(Rn-1),t.z),i.q.copy(i.p)}this.ring.copy(this.rope[Rn-1].p)}_rope(t,e,i,n){let s=this.waves,a=this._s,o=this.rope,c=Rn,h=this._top.copy(this.pos);if(h.y-=1.2,n)this.liftT>1&&(this.ropeLen=Math.max(4.2,this.ropeLen-1.7*t));else{let d=Math.max(6,h.y-s.heightFast(o[c-1].p.x,o[c-1].p.z))+2.2;this.ropeLen+=(d-this.ropeLen)*Math.min(1,t*1.5)}let u=this.ropeLen/(c-1),l=Math.min(t,1/30)*.5;for(let d=0;d<2;d++){o[0].p.copy(h),o[0].q.copy(h);for(let f=1;f<c;f++){let g=o[f],b=f===c-1,m=g.p.x-g.q.x,p=g.p.y-g.q.y,y=g.p.z-g.q.z;g.q.copy(g.p);let v=e.x*.06,_=-9.81,R=e.z*.06,x=.994,w=g.p.x-this.pos.x,A=g.p.z-this.pos.z,E=Math.hypot(w,A)+.001,S=Math.max(0,1-E/16)*(b?5:2);if(v+=w/E*S,R+=A/E*S,b&&!n){s.sample(g.p.x,g.p.z,a);let N=a.h+.06-g.p.y;if(N>0){_+=Math.min(70,N*95);let O=Math.min(1,l*6);m+=(a.vx*l-m)*O,p+=(a.vy*l-p)*O,y+=(a.vz*l-y)*O,x=.975}this.gripping&&(v+=(i.x-g.p.x)*7,R+=(i.z-g.p.z)*7)}g.p.x+=m*x+v*l*l,g.p.y+=p*x+_*l*l,g.p.z+=y*x+R*l*l}for(let f=0;f<8;f++)for(let g=0;g<c-1;g++){let b=o[g].p,m=o[g+1].p,p=m.x-b.x,y=m.y-b.y,v=m.z-b.z,_=Math.hypot(p,y,v);if(_<=u)continue;let R=(_-u)/_,x=g===0?0:g+1===c-1?n?.88:.62:.5,w=1-x;b.x+=p*R*x,b.y+=y*R*x,b.z+=v*R*x,m.x-=p*R*w,m.y-=y*R*w,m.z-=v*R*w}}this.ring.copy(o[c-1].p),this._d.copy(o[c-4].p).sub(o[c-1].p),this._d.lengthSq()>1e-4&&this._d.y>0&&(this._d.normalize(),this.lineDir.lerp(this._d,Math.min(1,t*3)).normalize())}dispatch(t,e=Math.random()*6.283,i=60){this.state="inbound",this.rescued=!1,this.hold=0,this.hoverTime=0,this.group.visible=!0,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.ring.set(t.x+Math.cos(e)*i,0,t.z+Math.sin(e)*i),this.pos.set(this.ring.x+Math.cos(e)*520,70,this.ring.z+Math.sin(e)*520),this.vel.set(0,0,0)}update(t,e,i,n,s,a,o,c,h){if(this.time+=t,this.state==="none")if(o&&s&&n>=this.arriveAt)this.dispatch(e,Math.atan2(i.z,i.x)+(Math.random()-.5)*2.4,55+Math.random()*30);else{nt.uSpotP.value.y=0,nt.uWash.value.w=0;return}let u=this.waves,l=this._s,d=this.state==="lift";if(this.state==="inbound")this.station.set(this.ring.x,0,this.ring.z);else if(this.state==="hover"){let U=e.x-this.station.x,k=e.z-this.station.z,W=Math.hypot(U,k);if(W>1.5){let q=Math.min(2.2,W*.5)*t/W;this.station.x+=U*q,this.station.z+=k*q}}let f=u.heightFast(this.station.x,this.station.z)+20+Math.sin(this.time*.7)*.8,g=this._v.set(this.station.x+Math.sin(this.time*.43)*2.6+Math.sin(this.time*1.1)*.9,f,this.station.z+Math.cos(this.time*.37)*2.6);this.state==="leaving"&&g.set(this.pos.x+i.x*40,this.pos.y+30,this.pos.z+i.z*40),d&&(this.liftT+=t,this.liftT>6.5?g.set(this.pos.x-i.x*3,this.liftBase+26+(this.liftT-6.5)*5,this.pos.z-i.z*3):g.set(this.pos.x,this.liftBase+20+Math.max(0,this.liftT-3)*1.5,this.pos.z));let b=g.sub(this.pos),m=b.length(),p=this.state==="inbound"?46:this.state==="leaving"?40:d?this.liftT>6.5?14:3:6,y=b.multiplyScalar(Math.min(p,m*.9)/Math.max(m,.001));if(this.vel.lerp(y,1-Math.exp(-t*(d?.7:1.4))),this.pos.addScaledVector(this.vel,t),this.state==="inbound"&&m<6&&(this.state="hover",this.hoverTime=0,this._dropRope()),this.state==="hover"||d?this._rope(t,i,e,d):(u.sample(this.ring.x,this.ring.z,l),this.ring.y=l.h),this.reach=!1,this.state==="hover"){this.hoverTime+=t;let U=Math.hypot(e.x-this.ring.x,e.y+.35-this.ring.y,e.z-this.ring.z);this.reach=U<1.5&&s,this.gripping&&(U>2.2||!h||!s)&&(this.gripping=!1,this.hold>.5&&(this.slipped=!0)),this.reach&&h&&(this.gripping=!0),this.hold=this.gripping?this.hold+t:Math.max(0,this.hold-t*2.5),this.hold>=this.holdNeed&&(this.rescued=!0,this.state="lift",this.liftT=0,this.liftBase=this.ring.y);let k=this.reach||this.gripping;if(this.hoverTime>150&&!k&&!this.rescued&&(this.state="leaving",this.leaveT=0),a)for(this.washAcc=(this.washAcc||0)+t*150;this.washAcc>=1;){this.washAcc-=1;let W=Math.random()*6.283,q=4+Math.random()*13,J=7+Math.random()*6,G=this.pos.x+Math.cos(W)*q,z=this.pos.z+Math.sin(W)*q,V=u.heightFast(G,z),st=Math.random()<.28;a.emit(G,V+.08+Math.random()*.2,z,Math.cos(W)*J,.5+Math.random()*1.4,Math.sin(W)*J,st?.7+Math.random()*.7:.5+Math.random()*.5,st?.16+Math.random()*.22:.012+Math.random()*.03,st?2:0,st?.7:0,st?.16:.9,st?1.4:1)}}if(this.state==="leaving"&&(this.leaveT+=t,this.leaveT>14)){this.state="none",this.group.visible=!1,this.arriveAt=n+180,nt.uSpotP.value.y=0,nt.uWash.value.w=0;return}let v=this.heli;v.position.copy(this.pos);let _=Math.atan2(this.ring.x-this.pos.x+this.vel.x*3,this.ring.z-this.pos.z+this.vel.z*3),R=Math.hypot(this.vel.x,this.vel.z);v.rotation.set(Math.min(.3,R*.008),this.state==="hover"?v.rotation.y+Math.sin(this.time*.25)*.004:_,Math.sin(this.time*1.3)*.03,"YXZ"),this.rotor.rotation.z+=t*(2.6+1.4*Math.sin(this.time*2.3)),this.tail.rotation.z+=t*5.2,this.rotor.material.opacity=.85+.15*Math.sin(this.time*31),this.strobe.visible=this.time%1.1<.07,this.beacon.visible=(this.time+.5)%1.3<.16;let x=this.state==="hover"?Math.min(1,this.hoverTime/3):this.state==="lift"?1:0;this.aim.set(this.ring.x+(1-x)*Math.sin(this.time*.8)*26,this.ring.y,this.ring.z+(1-x)*Math.cos(this.time*.6)*26);let w=this.state==="leaving"?Math.max(0,1-this.leaveT/3):1,A=this._from.copy(this.pos);A.y-=1.3;let E=A.distanceTo(this.aim),S=this._d.copy(this.aim).sub(A).normalize(),N=E,O=this.aim.y;if(S.y<-.04)for(let U=0;U<4;U++)O=this.waves.heightFast(A.x+S.x*N,A.z+S.z*N),N=Math.max(2,(O-A.y)/S.y);else N=320;let it=Math.min(N*1.15+4,340),P=this.tan*1.3*it;this.beamMat.uniforms.uWaterY.value=O-.6,this.beam.position.copy(A),this.beam.quaternion.setFromUnitVectors(this._down,S),this.beam.scale.set(P,it,P);let L=this.beamMat.uniforms;if(L.uApex.value.copy(A),L.uAxis.value.copy(S),L.uLen.value=it,L.uI.value=.17*w,c){let U=this._v.copy(c).sub(A),k=U.dot(S),W=Math.sqrt(Math.max(0,U.lengthSq()-k*k)),J=k>-.5&&k<it+.5&&W<k*this.tan*1.3+.6?He:gi;this.beamMat.side!==J&&(this.beamMat.side=J,this.beamMat.needsUpdate=!0)}this.spotLight.position.copy(A),this.spotLight.target.position.copy(this.aim),this.spotLight.angle=Math.atan(this.tan)*1.35,this.spotLight.penumbra=.85,this.spotLight.intensity=5*w,nt.uSpotPos.value.copy(A),nt.uSpotDir.value.copy(S),nt.uSpotP.value.set(Math.cos(Math.atan(this.tan)),1.7*w,55,0);let D=this.pos.y-u.heightFast(this.pos.x,this.pos.z);nt.uWash.value.set(this.pos.x,this.pos.z,24,w*Math.max(0,Math.min(1,(60-D)/30)));let H=this.state==="hover"||this.state==="lift";if(this.ringMesh.visible=H,this.ropeGroup.visible=H,H){this.ringMesh.position.copy(this.ring),this.state==="lift"?(this.ringSpin+=t*.35,this.ringMesh.quaternion.setFromUnitVectors(this._down.clone().negate(),this.lineDir).multiply(this._qr.setFromEuler(this._er.set(Math.PI/2,0,this.ringSpin,"YXZ")))):(u.sample(this.ring.x,this.ring.z,l),this.ringMesh.rotation.set(Math.PI/2+l.nz*.6,0,-l.nx*.6)),this.strobeR.visible=this.time%.9<.08;let U=this.rope,k=this.ropeCurve.points;for(let Et=0;Et<Rn;Et++)k[Et].copy(U[Et].p);k[Rn-1].y+=.45;let W=this.ropeRings,q=this.ropeRad,J=q+1,G=.02,z=this.ropeMesh.geometry.attributes.position,V=this.ropeMesh.geometry.attributes.normal,st=this._rp,Z=this._rt,rt=this._rn,ot=this._rb,ct=this._rq;for(let Et=0;Et<W;Et++){let X=Et/(W-1);this.ropeCurve.getPoint(X,st),this.ropeCurve.getPoint(Math.min(1,X+.004),ct),Z.copy(ct),this.ropeCurve.getPoint(Math.max(0,X-.004),ct),Z.sub(ct).normalize(),rt.addScaledVector(Z,-rt.dot(Z)),rt.lengthSq()<1e-6&&rt.set(1,0,0).addScaledVector(Z,-Z.x),rt.normalize(),ot.crossVectors(Z,rt);for(let Bt=0;Bt<J;Bt++){let wt=Bt/q*6.2832,Rt=Math.cos(wt),vt=Math.sin(wt),Nt=(Et*J+Bt)*3,Pt=rt.x*Rt+ot.x*vt,F=rt.y*Rt+ot.y*vt,C=rt.z*Rt+ot.z*vt;z.array[Nt]=st.x+Pt*G,z.array[Nt+1]=st.y+F*G,z.array[Nt+2]=st.z+C*G,V.array[Nt]=Pt,V.array[Nt+1]=F,V.array[Nt+2]=C}}z.needsUpdate=!0,V.needsUpdate=!0}}};var bx=[[T.handL,0,-.09,.012,"hand"],[T.handR,0,-.09,.012,"hand"],[T.foreArmL,0,-.13,0,"arm"],[T.foreArmR,0,-.13,0,"arm"],[T.footL,0,-.04,.12,"foot"],[T.footR,0,-.04,.12,"foot"]],co=class{constructor(t,e,i){this.waves=t,this.ch=e,this.body=i,this.tips=bx.map(([n,s,a,o,c])=>({bone:n,off:new M(s,a,o),kind:c,p:new M,prev:new M,has:!1,was:!0,wet:0,cool:0})),this._s=di(),this._v=new M,this._hd=new M,this.activity=0,this.onSlap=null,this.bowAcc=0,this.churnAcc=0}reset(){for(let t of this.tips)t.has=!1,t.wet=0;this.activity=0}update(t,e,i,n=!0){if(t<=0)return;let s=this.waves,a=this._s,o=this._v,c=0;e.near=!0;for(let u of this.tips){if(u.p.copy(u.off).applyMatrix4(this.ch.bones[u.bone].matrixWorld),!u.has){u.prev.copy(u.p),u.has=!0,s.sample(u.p.x,u.p.z,a),u.was=u.p.y<a.h;continue}if(o.copy(u.p).sub(u.prev).multiplyScalar(1/t),u.prev.copy(u.p),u.cool-=t,!n||o.lengthSq()>900){u.wet=0;continue}s.sample(u.p.x,u.p.z,a);let l=u.p.y<a.h,d=o.x-a.vx,f=o.y-a.vy,g=o.z-a.vz,b=Math.hypot(d,f,g),m=Math.hypot(d,g)+1e-4,p=u.kind==="hand"?1:u.kind==="foot"?.6:.45;if(l!==u.was){if(l&&b>(u.kind==="foot"?3.8:2.6)&&u.cool<=0&&u.kind!=="arm"){let y=Math.min(1.5,(.1+b*.2)*p)*(.45+.55*Math.random());Math.random()<.65&&e.slap(u.p.x,a.h,u.p.z,y,d/m*Math.min(1,m/2.5),g/m*Math.min(1,m/2.5),a.vx+d*.55,a.vy,a.vz+g*.55,u.kind==="hand"?1:0),u.cool=.5,c+=y,this.onSlap&&this.onSlap(b,u.p,u.kind)}else if(!l&&b>3&&u.kind==="hand"){let y=Math.min(1.2,(.05+b*.16)*p);e.fling(u.p.x,Math.max(u.p.y,a.h+.02),u.p.z,o.x,o.y,o.z,y),u.wet=.5,c+=y*.6}}if(!l&&u.wet>0){u.wet-=t;let y=b>2.5&&Math.random()<t*35*u.wet?1:0;for(let v=0;v<y;v++)e.emit(u.p.x+(Math.random()-.5)*.06,u.p.y+(Math.random()-.5)*.06,u.p.z+(Math.random()-.5)*.06,o.x*(.35+.5*Math.random()),o.y*.6+.5*Math.random(),o.z*(.35+.5*Math.random()),.35+Math.random()*.5,.01+Math.random()*.022,0,0,1)}if(u.kind==="foot"&&Math.abs(u.p.y-a.h)<.1&&b>2.4){for(this.churnAcc+=t*Math.min(26,b*5);this.churnAcc>=1;){this.churnAcc-=1;let y=Math.random()*6.283,v=Math.random()*.9;e.emit(u.p.x+Math.cos(y)*.05,a.h+.02,u.p.z+Math.sin(y)*.05,a.vx+Math.cos(y)*v+d*.25,a.vy+.9+2.1*Math.random()*Math.min(1.4,b/3),a.vz+Math.sin(y)*v+g*.25,.3+Math.random()*.4,.009+Math.pow(Math.random(),2)*.022,0,0,1)}c+=.25*t*10}u.was=l}let h=this.body;if(n&&h.subFrac>.2&&h.subFrac<.98&&h.relSpeed>1.5&&h.mouthDepth<.4){let u=Math.min(6,h.relSpeed),l=Math.hypot(h.relFlow.x,h.relFlow.z)+1e-4,d=-h.relFlow.x/l,f=-h.relFlow.z/l,g=this._hd.setFromMatrixPosition(this.ch.bones[T.head].matrixWorld);for(this.bowAcc+=t*Math.min(40,(u-1.3)*16);this.bowAcc>=1;){this.bowAcc-=1;let b=Math.random()<.5?-1:1,m=Math.random(),p,y,v,_,R;if(m<.5){let w=(Math.random()-.5)*.5,A=.12+Math.random()*.45;p=g.x+d*A-f*w,y=g.z+f*A+d*w,v=u*.7+.4+Math.random()*1.4,_=(Math.random()-.5)*1.2,R=.6+Math.random()*1.6}else{let w=(.22+Math.random()*.2)*b,A=-.5+Math.random()*.9;p=h.pos.x+d*A-f*w,y=h.pos.z+f*A+d*w,v=u*.3,_=b*(.4+Math.random()*1),R=.5+Math.random()*1.3}let x=!1;e.emit(p,h.surfaceH+.03,y,h.surface.vx+d*v-f*_,h.surface.vy+R*Math.min(1.4,.6+u*.3),h.surface.vz+f*v+d*_,x?.25+Math.random()*.3:.4+Math.random()*.55,x?.04+Math.random()*.05:Math.random()<.3?.028+Math.random()*.03:.011+Math.pow(Math.random(),2)*.026,x?1:0,x?.4:0,x?.32:1)}c+=.12+.1*u}e.near=!1,this.activity+=(Math.min(1,c)-this.activity)*(1-Math.exp(-t*(c>this.activity?12:2.5)))}};var _d=1025,vx=1.22,Ih=9.81,Md=.35,Ne={tubeY:.37,tubeR:.21,halfW:.72,floorY:.325,bowZ:1.95,sternZ:-1.9,transomZ:-1.28,bowStart:1};function Cn(r){if(r<=Ne.bowStart)return Ne.halfW;let t=Math.min(1,(r-Ne.bowStart)/(Ne.bowZ-Ne.bowStart));return Ne.halfW*Math.sqrt(Math.max(0,1-t*t))}function _r(r){return Ne.tubeY+.2*Ie(.9,2,r)}function Ci(r,t,e,i,n,s,a,o,c){return{o:new M(r,t,e),r:new M,vol:i/1e3,half:n,cx:s,cy:a,cz:o,air:c,sub:0,was:0,h:0,hOk:!1}}var ho=class{constructor(t){this.waves=t,this.group=new de,this.group.name="boat",this.group.visible=!1,this.holder=new de,this.group.add(this.holder),this.active=!1,this.loaded=!1,this.com=new M(0,.3,-.28),this.baseMass=168,this.mass=this.baseMass,this.inertia=new M(250,300,78),this.pos=new M,this.vel=new M,this.quat=new xt,this.angVel=new M,this.prevPos=new M,this.prevQuat=new xt,this.wind=new M,this.rider=0,this.swamp=0,this.upY=1,this.sitUp=1,this.capsized=!1,this.flipArmed=!1,this.flipping=0,this.settle=0,this.flipAxis=new M,this.flipDir=new M,this.keepYaw=null,this.slam=0,this.slamPos=new M,this.aer=0,this.brkH=0,this.subFrac=0,this.extF=new M,this.extT=new M,this.tow=new M;let e=Ne.halfW,i=Ne.tubeY;this.points=[Ci(e,i,-1.65,105,.21,.13,.3,.075,.05),Ci(-e,i,-1.65,105,.21,.13,.3,.075,.05),Ci(e,i,-.7,118,.21,.13,.34,.06,.055),Ci(-e,i,-.7,118,.21,.13,.34,.06,.055),Ci(e,i,.3,118,.21,.13,.34,.06,.055),Ci(-e,i,.3,118,.21,.13,.34,.06,.055),Ci(.69,i+.03,1.2,105,.21,.12,.3,.075,.055),Ci(-.69,i+.03,1.2,105,.21,.12,.3,.075,.055),Ci(0,.52,1.8,95,.22,.1,.26,.11,.07),Ci(0,.2,-.7,85,.13,.1,.55,.07,0),Ci(0,.21,.62,85,.13,.1,.55,.07,0),Ci(0,.12,-1.5,9,.16,.1,.03,.05,.03)];for(let n of this.points)n.o.sub(this.com);this.totalVol=this.points.reduce((n,s)=>n+s.vol,0),this._s=di(),this._w={vx:0,vy:0,vz:0,ax:0,ay:0,az:0},this._p=new M,this._vp=new M,this._f=new M,this._F=new M,this._T=new M,this._X=new M,this._Y=new M,this._Z=new M,this._t=new M,this._t2=new M,this._qi=new xt,this._dq=new xt,this._m=new At,this.inv=new At,this.matrix=new At}setModel(t){let e=null;if(t.scene.traverse(n=>{n.isMesh&&!e&&(e=n)}),!e)throw new Error("boat model has no mesh");this.mesh=e;let i=e.material;i.envMapIntensity=.6,i.roughness=.95,i.color.setRGB(1.12,1.18,1.28),i.aoMapIntensity=.8,i.normalScale.set(1,1),i.needsUpdate=!0,this.material=i,t.scene.traverse(n=>{n.layers.enable(1),n.frustumCulled=!1}),t.scene.position.copy(this.com).multiplyScalar(-1),this.holder.add(t.scene),this.loaded=!0}reset(t,e,i){let n=this.waves.sample(t,e,this._s);this.quat.setFromAxisAngle(this._t.set(0,1,0),i),this.pos.set(t,n.h+.14+this.com.y-.13,e),this.vel.set(n.vx,n.vy,n.vz),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat),this.swamp=0,this.flipping=0,this.settle=0,this.capsized=!1,this.upY=1,this.sitUp=1,this.slam=0,this.extF.set(0,0,0),this.extT.set(0,0,0),this.tow.set(0,0,0),this.hcOk=!1,this.depth=0;for(let s of this.points)s.was=0,s.hOk=!1;this.active=!0,this.group.visible=this.loaded,this._updateMatrices(this.pos,this.quat)}hide(){this.active=!1,this.group.visible=!1}_updateMatrices(t,e){this._t.copy(this.com).multiplyScalar(-1).applyQuaternion(e).add(t),this.matrix.compose(this._t,e,this._t2.set(1,1,1)),this.inv.copy(this.matrix).invert()}pushAt(t,e,i,n){this.extF.x+=e,this.extF.y+=i,this.extF.z+=n;let s=this._t.copy(t).sub(this.pos);this.extT.x+=s.y*n-s.z*i,this.extT.y+=s.z*e-s.x*n,this.extT.z+=s.x*i-s.y*e}velocityAt(t,e){return e.copy(t).sub(this.pos).cross(this.angVel).multiplyScalar(-1).add(this.vel)}step(t){if(!this.active)return;let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._X.set(1,0,0).applyQuaternion(this.quat),n=this._Y.set(0,1,0).applyQuaternion(this.quat),s=this._Z.set(0,0,1).applyQuaternion(this.quat);this.upY=n.y;let a=this._F.set(0,0,0),o=this._T.set(0,0,0);this.mass=this.baseMass+this.rider+260*this.swamp;let c=0,h=0,u=0,l=0,d=0,f=0,g=0,b=0,m=this.dbg||(this.dbg={});m.buoy=0,m.dragY=0,m.bay=0,m.bvy=0,m.plunge=0,m.wvy=0,m.h=0,m.ay=0;let p=1-.32*this.swamp;for(let P=0;P<this.points.length;P++){let L=this.points[P],D=L.r.copy(L.o).applyQuaternion(this.quat),H=this._p.copy(this.pos).add(D),U=this._vp.copy(this.angVel).cross(D).add(this.vel),k=e.sample(H.x,H.z,this._s),W=k.h-H.y,q=Math.max(0,Math.min(1,(W+L.half)/(2*L.half))),J=L.hOk?Math.max(-9,Math.min(4.6,(k.h-L.h)/t)):k.vy;if(L.h=k.h,L.hOk=!0,q>.5!=L.was>.5){let z=Math.abs(U.y-k.vy);z>d&&(d=z,this.slamPos.set(H.x,k.h,H.z))}L.was=q,L.sub=q;let G=this._f.set(0,0,0);if(f+=k.nx,g+=k.ny,b+=k.nz,k.brkH>u&&(u=k.brkH),k.lip>l&&(l=k.lip),q>0){let z=Math.max(0,W),V=k.aer*Math.exp(-z/3.5);V>h&&(h=V);let st=_d*(1-.6*V),Z=e.bodyFlow(k.x0,k.z0,z,this._w),ot=.25+.75*Math.exp(-z/(2.5+.35*Math.max(0,k.brkH)));Z.vx+=k.bvx*ot,Z.vy+=k.bvy,Z.vz+=k.bvz*ot,k.plunge>.01&&(Z.vy-=.25*k.plunge*Math.exp(-z/3)),e.breakerFlow(H.x,H.y,H.z,k.h,Z),q>.55&&J>Z.vy&&(Z.vy+=(J-Z.vy)*pt((q-.55)/.3)*Math.exp(-z/1.5));let ct=st*L.vol*q*p;G.set(ct*(1+Md)*Z.ax,ct*Math.max(.3*Ih,Ih+Z.ay+k.bay),ct*(1+Md)*Z.az),m.buoy+=G.y,m.bay=Math.max(m.bay,Math.abs(k.bay))*Math.sign(k.bay||1),m.bvy=k.bvy,m.plunge=Math.max(m.plunge,k.plunge),m.wvy=Z.vy,m.h=k.h,m.ay=Z.ay;let Et=Z.vx-U.x,X=Z.vy-U.y,Bt=Z.vz-U.z,wt=Et*i.x+X*i.y+Bt*i.z,Rt=Et*n.x+X*n.y+Bt*n.z,vt=Et*s.x+X*s.y+Bt*s.z,Nt=.5*st*q,Pt=(Nt*L.cx*Math.abs(wt)+60*L.cx*q)*wt,F=(Nt*L.cy*Math.abs(Rt)+150*L.cy*q)*Rt,C=(Nt*L.cz*Math.abs(vt)+60*L.cz*q)*vt;G.x+=i.x*Pt+n.x*F+s.x*C,G.y+=i.y*Pt+n.y*F+s.y*C,G.z+=i.z*Pt+n.z*F+s.z*C,m.dragY+=i.y*Pt+n.y*F+s.y*C,c+=L.vol*q}if(q<1&&L.air>0){let z=this.wind.x-U.x,V=-U.y,st=this.wind.z-U.z,Z=.5*vx*L.air*(1-q)*(1-.55*this.swamp)*Math.hypot(z,V,st);G.x+=z*Z,G.y+=V*Z,G.z+=st*Z}a.add(G),o.x+=D.y*G.z-D.z*G.y,o.y+=D.z*G.x-D.x*G.z,o.z+=D.x*G.y-D.y*G.x}this.subFrac=c/this.totalVol,this.aer=h,this.brkH=u,this.slam=d;{let P=Math.hypot(f,g,b)||1;this.sitUp=(n.x*f+n.y*g+n.z*b)/P}let y=Math.max(pt((h-.35)*2)*pt(u/4),pt((.35-Math.abs(n.y))*3),pt((this.subFrac-.86)*6));y>0?this.swamp+=(1-this.swamp)*(1-Math.exp(-t*1.6*y)):this.swamp>.5&&(this.swamp+=(.5-this.swamp)*(1-Math.exp(-t*.04)));let v=1+.9*Math.min(1,this.subFrac*2.5)+(this.rider+260*this.swamp)/this.baseMass*.5;if(this.flipArmed&&this.flipping<=0&&n.y>.3)for(let P of e.breakers){if(!P.active||P.height<4.5)continue;let L=this.pos.x-P.ox,D=this.pos.z-P.oz,H=L*P.dx+D*P.dz-P.s,U=-L*P.dz+D*P.dx,k=Math.exp(-(U*U)/(P.width*P.width));if(H<8&&H>-8&&P.height*k>4.5){this.flipAxis.set(P.dz,0,-P.dx),this.flipDir.set(P.dx,0,P.dz),this.flipping=2.6,this.flipArmed=!1;break}}if(this.flipping>0){this.flipping-=t;let P=this.angVel.dot(this.flipAxis);n.y>-.8?o.addScaledVector(this.flipAxis,(3-P)*2100*v):(this.flipping=0,this.settle=1.4),a.addScaledVector(this.flipDir,this.mass*5*pt((this.flipping-2)/.6))}if(this.settle>0&&(this.settle-=t,o.addScaledVector(this.angVel,-1500*v)),this.flipArmed&&this.rider>0&&this.flipping<=0){let P=Math.hypot(f,g,b)||1,L=(n.y*b-n.z*g)/P,D=(n.z*f-n.x*b)/P,H=(n.x*g-n.y*f)/P,U=this.angVel.dot(n);o.x+=L*5200*v-(this.angVel.x-n.x*U)*1500*v,o.y+=D*5200*v-(this.angVel.y-n.y*U)*1500*v,o.z+=H*5200*v-(this.angVel.z-n.z*U)*1500*v}if(this.keepYaw!==null&&n.y>.5){let P=Math.atan2(s.x,s.z),L=this.keepYaw-P;L=Math.atan2(Math.sin(L),Math.cos(L)),o.y+=Math.max(-260,Math.min(260,L*420-this.angVel.y*300))}this.capsized=n.y<0,a.add(this.extF),o.add(this.extT),this.extF.set(0,0,0),this.extT.set(0,0,0),a.add(this.tow);let _=this.mass+.08*_d*c;a.y-=this.mass*Ih,this.vel.addScaledVector(a,t/_);let R=this.vel.length();R>40&&this.vel.multiplyScalar(40/R),this.pos.addScaledVector(this.vel,t);{let P=e.sample(this.pos.x,this.pos.z,this._s),L=this.hcOk?Math.max(-30,Math.min(30,(P.h-this.hc)/t)):P.vy;this.hc=P.h,this.hcOk=!0;let D=this.pos.y-P.h;this.depth=-D,D<-.42?(this.pos.y=P.h-.42,this.vel.y<L&&(this.vel.y=L)):D>.45&&this.vel.y>L&&(this.vel.y+=(L-this.vel.y)*Math.min(1,t*7),D>1.5&&(this.pos.y=P.h+1.5,this.vel.y>L&&(this.vel.y=L)))}let x=this._qi.copy(this.quat).invert(),w=this._t.copy(this.angVel).applyQuaternion(x),A=this._t2.copy(o).applyQuaternion(x),E=this.inertia.x*v,S=this.inertia.y*v,N=this.inertia.z*v;w.x+=(A.x-(N-S)*w.y*w.z)/E*t,w.y+=(A.y-(E-N)*w.z*w.x)/S*t,w.z+=(A.z-(S-E)*w.x*w.y)/N*t,w.multiplyScalar(Math.exp(-(.35+2.2*Math.min(1,this.subFrac*2.5))*t));let O=w.length();O>9&&w.multiplyScalar(9/O),this.angVel.copy(w).applyQuaternion(this.quat);let it=this.angVel.length()*t;it>1e-7&&(this._dq.setFromAxisAngle(this._t.copy(this.angVel).normalize(),it),this.quat.premultiply(this._dq).normalize()),this._updateMatrices(this.pos,this.quat)}sync(t){this.active&&(this.group.position.lerpVectors(this.prevPos,this.pos,t),this.group.quaternion.slerpQuaternions(this.prevQuat,this.quat,t),this.group.updateMatrixWorld(!0))}toWorld(t,e){return e.copy(t).applyMatrix4(this.matrix)}dirToWorld(t,e){return e.copy(t).applyQuaternion(this.quat)}nearestGrip(t,e){let i=this._t.copy(t).applyMatrix4(this.inv),n=0,s=1,a=1e9;for(let d=0;d<=24;d++){let f=-1.75+(Ne.bowZ-.15+1.75)*d/24,g=Cn(f),b=_r(f);for(let m of[1,-1]){let p=Math.hypot(i.x-m*g,i.y-b,i.z-f);p<a&&(a=p,n=f,s=m)}}let o=Cn(n),c=Cn(n+.05);e.dist=a,e.z=n,e.side=s,e.local=(e.local||new M).set(s*o,_r(n),n),e.point=this.toWorld(e.local,e.point||new M);let h=s*(c-o),u=.05,l=Math.hypot(h,u);return e.tangent=this.dirToWorld(this._t2.set(h/l,0,u/l),e.tangent||new M),e.normal=this.dirToWorld(this._t2.set(s*u/l,0,-s*h/l),e.normal||new M),e}};var Mr=r=>{window.__load&&window.__load(r)},Fh=r=>new Promise((t,e)=>{let i=document.createElement("script");i.src=r,i.onload=t,i.onerror=()=>e(new Error("load failed: "+r)),document.head.appendChild(i)}),ri=new URLSearchParams(location.search),Xi=1/120,_i={get(r,t){try{let e=localStorage.getItem("eos."+r);return e===null?t:e}catch{return t}},set(r,t){try{localStorage.setItem("eos."+r,String(t))}catch{}}},Dh=[.5,1,1.5],kh=[0,.4,.85,1],Uh=class{constructor(){if(this.canvas=document.getElementById("view"),this.manual=ri.get("manual")==="1",this.renderer=new rr({canvas:this.canvas,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),!this.renderer.capabilities.isWebGL2)throw new Error("WebGL2 is required");this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=Ce,this.renderer.toneMapping=Hi,this.renderer.autoClear=!0,this.perf=new za(this.renderer);let t=ri.get("q")||_i.get("quality",this.perf.pickDefault());this.perf.setProfile(Ns[t]?t:this.perf.pickDefault()),this.manual&&(this.perf.adaptive=!1),nt.hdrType=this.perf.info.halfFloat?an:Ve,this.isTouch=ri.get("touch")==="1"||ri.get("touch")!=="0"&&navigator.maxTouchPoints>0&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,nt.uNoise.value=Ju(),nt.uDetailN.value=$u(),nt.uFoamTex.value=td(),this.time=0,this.acc=0,this.state="title",this.deadTimer=0,this.scene=new Si,this.camera=new De(62,16/9,.07,3e4),this.camera.layers.enableAll(),this.waves=new Pa,this.sky=new Ia(this.renderer,this.perf.profile.envSize),this.ocean=new Fa(this.waves,this.perf.profile),this.post=new Ua(this.renderer),this.post.levels=this.perf.profile.bloomLevels,this.scene.add(this.sky.dome,this.ocean.mesh),this.flashLight=new Xn(13163775,0),this.keyLight=new Xn(10465476,.42),this.flashLight.layers.enableAll(),this.keyLight.layers.enableAll(),this.scene.add(this.flashLight,this.flashLight.target,this.keyLight,this.keyLight.target),this.pmrem=new Ls(this.renderer),this.envTimer=0,this.envRT=null,this.input=new Ya(this.canvas),this.character=new Ba,this.scene.add(this.character.group),this.body=new Va(this.waves),this.survival=new Ga,this.player=new Wa(this.body,this.survival,this.input),this.anim=new qa(this.character,this.body,this.player,this.survival),this.cam=new Xa(this.camera,this.character,this.body,this.player,this.waves,this.input),this.cam.yaw=-Math.PI/2;let e=ri.get("view")||_i.get("view","third");this.cam.setMode(e),this.cam.blend=this.cam.target,this.cam.intensity=+_i.get("shake",1)||1,this.cam.auto=_i.get("autocam","1")!=="0",ri.has("yaw")&&(this.cam.yaw=+ri.get("yaw")),ri.has("pitch")&&(this.cam.pitch=+ri.get("pitch")),this.limbs=new co(this.waves,this.character,this.body),this.limbs.onSlap=(n,s,a)=>{this.foam&&this.foam.enabled&&n>1.6&&this.foam.addSplash(s.x,s.z,Math.min(.55,.12+n*.07));let o=this.camera.matrixWorld.elements,c=s.x-this.camera.position.x,h=s.z-this.camera.position.z;a!=="foot"&&n>1.6&&this.cam.blend<.5&&!this.underwater.isUnder&&this.lens.spawn(a==="hand"?3:1),this.emit("limb",{v:n,pos:s,kind:a,pan:Math.max(-.8,Math.min(.8,(c*o[0]+h*o[2])/(Math.hypot(c,h)+.5)))})},this.mouthUnder=!1,this.camUnder=0,this.mouthWorld=new M,this.impactBlur=0,this.listeners=[],this.weather=new ja(this.waves),this.weather.base=this.weather.storm=ri.has("storm")?+ri.get("storm"):1,this.manual&&(this.weather.locked=!0),this.lightning=new Qa,this.scene.add(this.lightning.group),this.autoLightning=!(this.manual||ri.get("auto")==="0"),this.buildEffects(),this.interaction.auto=this.autoLightning,this.audio=new $a,this.audio.volume=+_i.get("volume",.85),this.audio.sfxOn=_i.get("sfx","1")!=="0",this.listeners.push((n,s)=>this.audio.onEvent(n,s)),this.face=new ro,this.onCharacter=n=>this.face.attach(n.mesh),this.vst={alive:!0},this.coughSeq=0,this.coughT=0,this.voiceDir=new ao(this.audio,this.face,{bubbles:n=>this.underwater.burstAt(this.mouthWorld,n,.22),cough:n=>{this.coughSeq=n,this.coughT=0}}),this.listeners.push((n,s)=>this.voiceDir.onEvent(n,s,this.vst)),Fh("dist/voice.js").then(()=>{this.audio.setVoices(window.__EOS_VOICE)}).catch(()=>console.warn("[voice] \uBAA9\uC18C\uB9AC \uB179\uC74C\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4")),this.listeners.push((n,s)=>{if(n==="inhale"&&(this.anim.gaspKick=Math.max(this.anim.gaspKick,s.gasp?1:.4*s.strength)),n==="exhale"&&!this.mouthUnder&&this.spray&&this.state!=="title"){let a=this.player.heading,o=this.weather.wind,c=this.mouthWorld,h=3+Math.round(4*s.strength);for(let u=0;u<h;u++)this.spray.emit(c.x+a.x*.05,c.y+.01,c.z+a.z*.05,a.x*(.5+Math.random()*.7)+o.x*.04,.15+Math.random()*.3,a.z*(.5+Math.random()*.7)+o.z*.04,.5+Math.random()*.5,.05+Math.random()*.06,1,.45,.11+.08*s.strength,.6)}}),this.lightning.onThunder=n=>this.audio.onEvent("thunder",n),this.audioState={cam:{pos:this.camera.position,fwd:new M,up:new M},hot:[]},this.rescue=new oo(this.waves),this.scene.add(this.rescue.group),this.boat=new ho(this.waves),this.scene.add(this.boat.group),this.aboard=!1,this.bacc=0,this.washT=0,this.boatOff=ri.get("boat")==="0",this.seatPos=new M(.2,Ne.floorY+.15,-.3);{let a=new M(Math.sin(.26),0,Math.cos(.26)),o=new M(Math.cos(.26)*Math.sin(.45),-Math.cos(.45),-Math.sin(.26)*Math.sin(.45));this.seatQuat=new xt().setFromRotationMatrix(new At().makeBasis(new M().crossVectors(a,o),a,o))}this.rid={p:new M,v:new M,pv:new M,d:new M,has:!1,slam:0},this.wonTimer=0,this.scenarios=new eo(this),this.pendingScenario=ri.get("test"),this.weather.update(0),this.waves.update(0),this.body.reset(0,0),this.syncCharacter(1),this.anim.update(1/60),this.character.group.updateMatrixWorld(!0),this.drawScene=(n,s)=>{let a=this.renderer;a.setRenderTarget(n),s?(this.camera.layers.set(1),a.setClearColor(0,0),a.clear(),a.render(this.scene,this.camera),this.camera.layers.enableAll()):a.render(this.scene,this.camera)};let i={input:this.input,start:()=>this.start(),resume:()=>this.resume(),restart:()=>this.restart(),pause:()=>this.pause(),toggleView:()=>{this.cam.toggle(),_i.set("view",this.cam.mode),this.impactBlur=Math.max(this.impactBlur,.3)},scenario:n=>{this.scenarios.run(n),this.resume()},get:n=>n==="quality"?this.perf.profile.label:n==="view"?this.cam.mode==="first"?"1\uC778\uCE6D":"3\uC778\uCE6D":n==="shake"?Math.round(this.cam.intensity*100)+"%":n==="autocam"?this.cam.auto?"\uCF2C":"\uB054":n==="sfx"?this.audio.sfxOn?"\uCF2C":"\uB054":Math.round(this.audio.volume*100)+"%",cycle:n=>{if(n==="quality"){let s=Object.keys(Ns);this.setQuality(s[(s.indexOf(this.perf.profile.key)+1)%s.length])}else if(n==="view")i.toggleView();else if(n==="sfx")this.audio.setSfx(!this.audio.sfxOn),_i.set("sfx",this.audio.sfxOn?"1":"0");else if(n==="autocam")this.cam.auto=!this.cam.auto,_i.set("autocam",this.cam.auto?"1":"0");else if(n==="shake")this.cam.intensity=Dh[(Dh.indexOf(this.cam.intensity)+1)%Dh.length]||1,_i.set("shake",this.cam.intensity);else{let s=kh[(kh.indexOf(this.audio.volume)+1)%kh.length];this.audio.setVolume(s===void 0?.85:s),_i.set("volume",this.audio.volume)}this.state!=="playing"&&this.state!=="title"&&this.renderStill()}};this.api=i,this.ui=!this.manual||ri.get("ui")==="1"?new to(document.getElementById("ui"),i,this.isTouch):null,this.hadLock=!1,this.input.onLockChange=n=>{n?this.hadLock=!0:this.hadLock&&this.state==="playing"&&(this.hadLock=!1,this.pause())},this.canvas.addEventListener("click",()=>{this.state==="playing"&&!this.isTouch&&!this.input.locked&&this.input.lock()}),window.addEventListener("keydown",n=>{n.repeat||((n.code==="KeyV"||n.code==="KeyC")&&this.state==="playing"&&i.toggleView(),n.code==="KeyP"&&(this.state==="playing"?this.pause():this.state==="paused"&&this.resume()),n.code==="Enter"&&this.state==="title"&&this.start())}),window.addEventListener("wheel",n=>{if(this.state!=="playing"||this.cam.cine)return;let s=n.deltaY<0?"first":"third";s!==this.cam.mode&&(this.cam.setMode(s),_i.set("view",s),this.impactBlur=Math.max(this.impactBlur,.3),this.ui&&this.ui.refresh())},{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()}),this.manual?(this.state="playing",this.ui&&this.ui.show("playing",{time:0,cause:""}),this.pendingScenario&&(this.scenarios.run(this.pendingScenario),this.pendingScenario=null)):this.setState("title"),window.addEventListener("resize",()=>{this.resize(),(this.state==="paused"||this.state==="dead")&&this.renderStill()}),this.resize(),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}async loadCharacter(){try{Mr(.3),window.__EOS_SON||await Fh("dist/son.js"),Mr(.7);let t=await Lh(window.__EOS_SON);Mr(.9),window.__EOS_SON=null;let e=new so(this.character,t);this.character.useGlb(e),this.body.setAirway(new M(0,e.mouth.y,e.mouth.z),new M(0,e.eye.y,e.eye.z)),this.glbInfo={verts:e.mesh.geometry.attributes.position.count,bones:e.order.length,morphs:Object.keys(e.mesh.morphTargetDictionary||{}),sourceHeight:+e.sourceHeight.toFixed(3)},this.onCharacter&&this.onCharacter(e),Mr(.92)}catch(t){console.warn("[character] GLB \uCE90\uB9AD\uD130\uB97C \uC4F0\uC9C0 \uBABB\uD574 \uAE30\uBCF8 \uBAB8\uC73C\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4: "+t.message),this.glbInfo={error:t.message},this.character.body.visible=!0,this.character.head.visible=!0}}async loadBoat(){if(!this.boatOff)try{window.__EOS_BOAT||await Fh("dist/boat.js");let t=await Lh(window.__EOS_BOAT);window.__EOS_BOAT=null,this.boat.setModel(t),this.boatInfo={verts:this.boat.mesh.geometry.attributes.position.count},(this.wantBoard||this.state==="title"&&!this.scenarios.active)&&this.board()}catch(t){console.warn("[boat] \uBCF4\uD2B8 \uBAA8\uB378\uC744 \uC4F0\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+t.message),this.boatInfo={error:t.message}}}board(){if(!this.boat.loaded){this.wantBoard=!this.boatOff;return}this.wantBoard=!1;let t=this.body,e=-Math.PI/2+.32;this.boat.reset(t.pos.x,t.pos.z,e),this.boat.rider=this.body.mass,this.boat.flipArmed=!0,this.boat.keepYaw=e,this.aboard=!0,this.washT=0,this.bacc=0,this.pinToBoat(!0),this.anim.hold="aboard",this.syncCharacter(1)}pinToBoat(t,e=1/60){let i=this.boat,n=this.body,s=this.rid;t&&i.sync(1);let a=this._pt||(this._pt={base:new M,v:new M,a:new M,q:new xt,qi:new xt,e:new oi,x:new M(1,0,0),z:new M(0,0,1)}),o=this._seatW||(this._seatW=new M),c=this._seatQ||(this._seatQ=new xt);a.base.copy(this.seatPos).sub(i.com).applyQuaternion(i.group.quaternion).add(i.group.position),i.velocityAt(a.base,a.v),(t||!s.has)&&(s.pv.copy(a.v),s.p.set(0,0,0),s.v.set(0,0,0),s.d.set(0,0,0),s.slam=0,s.has=!0),a.a.copy(a.v).sub(s.pv).multiplyScalar(1/Math.max(e,.001)),s.pv.copy(a.v),a.a.lengthSq()>2025&&a.a.setLength(45),a.a.multiplyScalar(-1),a.a.y-=9.81,a.a.applyQuaternion(a.qi.copy(i.group.quaternion).invert()),a.a.y+=9.81,s.d.lerp(a.a,1-Math.exp(-e*16));let h=Math.max(1,Math.ceil(e/.012)),u=e/h;for(let d=0;d<h;d++)s.v.x+=(s.d.x*3.2-30*s.p.x-3.2*s.v.x)*u,s.v.z+=(s.d.z*2.4-34*s.p.z-3.4*s.v.z)*u,s.v.y+=((s.d.y-4)*1.5-15*s.p.y-2*s.v.y)*u,s.p.addScaledVector(s.v,u),s.p.y<=0&&(s.v.y<-.5&&(s.slam=Math.max(s.slam,Math.min(1,-s.v.y/2.2))),s.p.y=0,s.v.y<0&&(s.v.y=0)),s.p.y>.22&&(s.p.y=.22,s.v.y>0&&(s.v.y=0)),s.p.x>.07?(s.p.x=.07,s.v.x>0&&(s.v.x=-.3*s.v.x)):s.p.x<-.26&&(s.p.x=-.26,s.v.x<0&&(s.v.x=0)),s.p.z>.16?(s.p.z=.16,s.v.z>0&&(s.v.z=0)):s.p.z<-.24&&(s.p.z=-.24,s.v.z<0&&(s.v.z=0));s.slam=Math.max(0,s.slam-e*3.2),this.state==="title"&&s.p.multiplyScalar(.5),o.copy(this.seatPos).add(s.p).sub(i.com).applyQuaternion(i.group.quaternion).add(i.group.position),c.copy(i.group.quaternion).multiply(this.seatQuat).multiply(a.q.setFromAxisAngle(a.z,s.p.x/.5)).multiply(a.q.setFromAxisAngle(a.x,s.p.y/.8)),n.pin(o,c,i.velocityAt(o,this._seatV||(this._seatV=new M)),i.angVel);let l=this.anim.ride;l.lift=s.p.y/.22,l.side=s.p.x/.2,l.fore=s.p.z/.2,l.slam=s.slam,s.slam>.55&&this.state==="playing"&&(this.impactBlur=Math.max(this.impactBlur,.12*s.slam))}launchIntroWave(t=10){return this.introWave=this.interaction.launch({lead:t,height:12.5,breakOffset:.2,angleOffset:0,width:190,speed:14}),this.introWave}boatPoint(t,e,i,n){return n.set(t,e,i).applyMatrix4(this.boat.holder.children[0].matrixWorld)}contactBoat(t){let e=this.boat,i=this.body,n=this.player,s=this.survival;this.clingCool=Math.max(0,(this.clingCool||0)-t);let a=n.swimHeld,o=a&&!this._swimWas;if(this._swimWas=a,!e.active||!e.loaded){this.clinging=!1,n.cling=!1,n.faceDir=null,this.nearBoat=99;return}let c=this._cb||(this._cb={c:new M,g:{},g2:{},out:new M,a:new M,f:new M,v:new M,l:new M,n:new M,Y:new M});if(c.c.set(0,.4,0).applyQuaternion(i.quat).add(i.pos),c.c.distanceToSquared(e.pos)>36){this.nearBoat=99,this.clinging&&this.letGo(!1);return}let h=e.nearestGrip(c.c,c.g);this.nearBoat=h.dist,c.Y.set(0,1,0).applyQuaternion(e.quat);for(let p=0;p<3;p++){let y=i.points[p],v=p===1?.15:.11,_=e.nearestGrip(y.world,c.g2),R=0;if(_.dist<Ne.tubeR+v)R=Ne.tubeR+v-_.dist,c.n.copy(y.world).sub(_.point),c.n.lengthSq()<1e-6&&c.n.copy(_.normal),this.clinging&&(c.n.y=Math.max(0,c.n.y),c.n.lengthSq()<1e-6&&c.n.copy(_.normal)),c.n.normalize();else{let x=c.l.copy(y.world).applyMatrix4(e.inv);if(Math.abs(x.x)<Cn(x.z)&&x.z>Ne.transomZ&&x.z<Ne.bowZ&&x.y>0&&x.y<Ne.floorY+v){let w=x.y>.17;R=w?Ne.floorY+v-x.y:x.y+v*.5,c.n.copy(c.Y).multiplyScalar(w?1:-1)}}if(R>0){e.velocityAt(y.world,c.v);let x=(i.vel.x-c.v.x)*c.n.x+(i.vel.y-c.v.y)*c.n.y+(i.vel.z-c.v.z)*c.n.z,w=Math.max(0,Math.min(2600,R*9e3-x*500));i.extForce.addScaledVector(c.n,w),e.pushAt(y.world,-c.n.x*w*.6,-c.n.y*w*.6,-c.n.z*w*.6)}}if(!this.clinging){let p=s.alive&&this.clingCool<=0&&h.dist<1.25&&!n.diveHeld&&!this.rescue.reach&&this.rescue.state!=="lift"&&n.air<.5;if(this.canCling=p,p&&o)this.clinging=!0,this.clingZ=h.z,this.clingSide=h.side,this.strain=0,this.clingNote=0;else{n.cling=!1,n.faceDir=null;return}}if(!s.alive||n.diveHeld){this.letGo(!1);return}let u=Cn(this.clingZ),l=Cn(this.clingZ+.05),d=(this._cg||(this._cg=new M)).set(this.clingSide*u,_r(this.clingZ),this.clingZ).applyMatrix4(e.matrix),f=this.clingSide*(l-u),g=Math.hypot(f,.05);c.out.set(this.clingSide*.05/g,0,-this.clingSide*f/g).applyQuaternion(e.quat),c.out.y=0,c.out.lengthSq()<.04&&c.out.set(i.pos.x-d.x,0,i.pos.z-d.z),c.out.normalize(),c.c.set(0,.42,0).applyQuaternion(i.quat),c.a.copy(d).addScaledVector(c.out,Ne.tubeR+.2),c.a.y=i.surfaceH+.04,c.l.copy(i.pos).add(c.c),e.velocityAt(d,c.v),c.n.copy(i.angVel).cross(c.c).add(i.vel),c.f.copy(c.a).sub(c.l).multiplyScalar(900),c.f.x-=(c.n.x-c.v.x)*230,c.f.y-=(c.n.y-c.v.y)*280,c.f.z-=(c.n.z-c.v.z)*230;let b=c.f.length(),m=(460+620*s.eff)*(.35+.65*n.control);this.strain=Math.max(0,this.strain+(b>m?t:-t*.6)),b>m&&c.f.multiplyScalar(m/b),i.extForce.add(c.f),i.extTorque.x+=c.c.y*c.f.z-c.c.z*c.f.y,i.extTorque.y+=c.c.z*c.f.x-c.c.x*c.f.z,i.extTorque.z+=c.c.x*c.f.y-c.c.y*c.f.x,e.pushAt(d,-c.f.x,-c.f.y,-c.f.z),c.c.add(i.pos),n.cling=!0,n.faceDir=(this._fd||(this._fd=new M)).copy(c.out).multiplyScalar(-1),(this.strain>.55||c.c.distanceTo(d)>1.9)&&this.letGo(!0)}letGo(t){this.clinging&&(this.clinging=!1,this.player.cling=!1,this.player.faceDir=null,this.clingCool=t?1.6:.7,t&&(this.tornAt=this.time,this.player.control=Math.min(this.player.control,.3)))}boatFrame(t){let e=this.boat;if(!e.active||!e.loaded)return;if(this.slamCool=Math.max(0,(this.slamCool||0)-t),e.slam>2.4&&this.slamCool<=0&&this.state!=="title"){this.slamCool=.5;let s=Math.min(4,(e.slam-1.6)*.9);this.spray.burst(e.slamPos.x,e.slamPos.y,e.slamPos.z,s,this.weather.wind),this.foam.addSplash(e.slamPos.x,e.slamPos.z,Math.min(1,.3+e.slam/8)),this.emit("splash",{v:e.slam*1.4,pos:e.slamPos})}if(this.wasCapsized!==e.capsized&&(this.wasCapsized=e.capsized,this.state!=="title"&&(this.spray.burst(e.pos.x,this.waves.heightFast(e.pos.x,e.pos.z),e.pos.z,3.5,this.weather.wind),this.foam.addSplash(e.pos.x,e.pos.z,1),this.emit("splash",{v:7,pos:e.pos}))),!this.ui||this.state!=="playing")return;let i=this.isTouch?"\uD5E4\uC5C4":"Space",n=this.isTouch?"\uC785\uC218":"F";this.boatNote=Math.max(0,(this.boatNote||0)-t),this.clinging&&!this._clingWas?(this.ui.note(`\uBCF4\uD2B8\uB97C \uBD99\uC7A1\uC558\uB2E4 \u2014 ${n} \uB193\uAE30`,3.5),this.boatNote=6):!this.clinging&&this._clingWas&&this.time-(this.tornAt||-9)<.3?(this.ui.note("\uB193\uCCE4\uB2E4",2.5),this.boatNote=4):!this.clinging&&!this.aboard&&this.canCling&&this.boatNote<=0&&(this.ui.note(`${i} \u2014 \uBCF4\uD2B8\uB97C \uBD99\uC7A1\uACE0 \uBC84\uD2F4\uB2E4`,3),this.boatNote=7),this._clingWas=this.clinging}throwOff(){if(!this.aboard)return;let t=this.body,e=this.boat;this.aboard=!1,e.rider=0,e.flipArmed=!1,e.keepYaw=null;let i=(this._tv||(this._tv=new M)).set(0,1,0).applyQuaternion(e.quat);t.vel.addScaledVector(i,2),t.vel.y+=1,t.vel.y>6.5&&(t.vel.y=6.5),t.angVel.copy(e.angVel).multiplyScalar(.9),this.player.control=.04,this.player.impact=Math.max(this.player.impact,1.8),this.player.impactPeak=Math.max(this.player.impactPeak,1.8),this.anim.hold=null,this.acc=0,this.impactBlur=Math.max(this.impactBlur,.6),this.emit("impact",{strength:2.6,dir:i.clone(),aer:e.aer}),this.thrownAt=this.time,this.clingCool=2.5,this.ui&&this.state==="playing"&&this.ui.note(this.isTouch?"\uD5E4\uC5C4 \xB7 \uC785\uC218":"Space \uD5E4\uC5C4 \xB7 F \uC785\uC218",6)}buildEffects(){let t=this.perf.profile;if(this.rain){this.scene.remove(this.rain.group,this.spray.mesh,this.underwater.group);for(let e of[this.rain.group,this.spray.mesh,this.underwater.group])e.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()});this.foam.enabled&&this.foam.rt.forEach(e=>e.dispose()),this.lens.rt.dispose()}this.rain=new Ka(t),this.spray=new Za(this.waves,t.spray),this.foam=new Da(this.renderer,t.foamAcc),this.underwater=new Ja(this.waves,t),this.lens=new Na(this.renderer,t.lensDrops),this.scene.add(this.rain.group,this.spray.mesh,this.underwater.group),this.post.u.tLens.value=this.lens.texture,this.interaction?this.interaction.spray=this.spray:this.interaction=new ka(this.waves,this.body,this.player,this.spray),this.underwater.onEnter=()=>{this.underwater.burstAt(this.camera.position,46,.8),this.impactBlur=Math.max(this.impactBlur,.5),this.emit("camEnter")},this.underwater.onExit=()=>{this.lens.spawn(Math.round(14+20*(1-this.cam.blend)),1),this.lens.sheet=1,this.emit("camExit")},this.interaction.onImpact=e=>{let i=Math.min(1,e.strength/3);this.impactBlur=Math.max(this.impactBlur,i),this.underwater.burst=Math.max(this.underwater.burst,i),this.underwater.isUnder||this.lens.spawn(Math.round((6+16*i)*(1.6-this.cam.blend)),1),this.foam.addSplash(this.body.pos.x,this.body.pos.z,1),this.emit("impact",e)},this.interaction.onSplash=(e,i)=>{!this.underwater.isUnder&&this.cam.blend<.5&&this.lens.spawn(2),this.foam.addSplash(i.x,i.z,Math.min(1,e/4)),this.emit("splash",{v:e,pos:i})}}setQuality(t){this.perf.setProfile(t),_i.set("quality",t);let e=this.perf.profile;this.ocean.applyProfile(e),this.sky.envRT.setSize(e.envSize,e.envSize/2),this.post.levels=e.bloomLevels,this.buildEffects(),this.resize(!0)}setState(t){this.state=t,this.ui&&this.ui.show(t,{time:this.survival.timeAlive,cause:this.survival.cause})}start(){this.audio.start(),this.resetPlayer(),!this.pendingScenario&&!this.scenarios.active&&this.board(),this.cam.script=null,this.input.enabled=!0,this.pendingScenario?(this.scenarios.run(this.pendingScenario),this.pendingScenario=null):this.scenarios.active||(this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=this.aboard?46:22,this.interaction.megaNext=95+Math.random()*40,this.aboard&&this.launchIntroWave(10.5)),this.isTouch?this.goFullscreen():this.input.lock(),this.setState("playing"),this.scenarios.active||(this.cam.setMode(this.cam.mode),this.cam.cine={mode:"intro",t:0,dur:4.5},this.introStrike=1.3),this.ui&&this.ui.note(this.aboard?"\uBCF4\uD2B8\uB97C \uAF49 \uBD99\uC7A1\uACE0 \uBC84\uD168\uB77C":this.isTouch?"\uD5E4\uC5C4 \xB7 \uC785\uC218":"Space \uD5E4\uC5C4 \xB7 F \uC785\uC218",5),this.last=performance.now()}pause(){this.state==="playing"&&(this.input.enabled=!1,this.audio.suspend(),this.isTouch||this.input.unlock(),this.setState("paused"))}resume(){this.state!=="playing"&&(this.audio.start(),this.audio.resume(),this.input.enabled=!0,this.cam.script=null,this.isTouch||this.input.lock(),this.setState("playing"),this.last=performance.now())}restart(){this.scenarios.stop(),this.weather.locked=!1,this.weather.base=1;for(let t of this.waves.breakers)t.active=!1;this.rescue.reset(240),this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=22,this.interaction.megaNext=80+Math.random()*40,this.resetPlayer(),this.board(),this.aboard&&(this.interaction.next=46,this.launchIntroWave(10.5)),this.resume(),this.ui&&this.aboard&&this.ui.note("\uBCF4\uD2B8\uB97C \uAF49 \uBD99\uC7A1\uACE0 \uBC84\uD168\uB77C",5)}resetPlayer(){this.body.reset(this.body.pos.x,this.body.pos.z),this.survival.reset(),this.survival.events.length=0,this.player.brace=0,this.player.air=0,this.player.control=1,this.player.diveBlend=0,this.player.riseBlend=0,this.player.crawlBlend=0,this.player.swimBlend=0,this.player.underSwim=0,this.player.impact=0,this.player.impactPeak=0,this.player.tumble=0,this.player.events.length=0,this.cam.qd.identity(),this.cam.inited=!1,this.deadTimer=0,this.impactBlur=0,this.mouthUnder=!1,this.wonTimer=0,this.lifting=!1,this.anim.force=null,this.cam.cine=null,this.timeScale=1,this.slowLeft=1.4,this.slowWant=1,this.grabNote=0,this.post.u.uFade.value=0,this.post.u.uTunnel.value=0,this.post.u.uDesat.value=0,this.lens.wipe(),this.limbs.reset(),this.aboard=!1,this.anim.hold=null,this.boat.hide(),this.clinging=!1,this.player.cling=!1,this.player.faceDir=null,this.introWave=null,this.thrownAt=-99,this.wasCapsized=!1,this.clingCool=0,this.syncCharacter(1),this.character.group.updateMatrixWorld(!0)}goFullscreen(){try{let t=document.documentElement,e=t.requestFullscreen?t.requestFullscreen():null;e&&e.catch&&e.catch(()=>{})}catch{}}resize(t){let e=window.innerWidth,i=window.innerHeight,n=Math.min(window.devicePixelRatio||1,2);this.renderer.setSize(Math.round(e*n),Math.round(i*n),!1),this.canvas.style.width=e+"px",this.canvas.style.height=i+"px",this.camera.aspect=e/i,this.cam.portrait=pt((1-e/i)/.5),this.camera.updateProjectionMatrix();let[s,a]=this.perf.renderSize(Math.round(e*n),Math.round(i*n));this.post.useOpaque=this.perf.profile.refraction,this.post.fxaa=this.perf.profile.fxaa,this.post.setSize(s,a,t===!0),this.ocean.uniforms.uSceneColor.value=this.post.rtOpaque.texture,this.ocean.uniforms.uSceneDepth.value=this.post.rtOpaque.depthTexture}emit(t,e){for(let i=0;i<this.listeners.length;i++)this.listeners[i](t,e)}syncCharacter(t){let e=this.character.group,i=this.body;e.position.lerpVectors(i.prevPos,i.pos,t),e.quaternion.slerpQuaternions(i.prevQuat,i.quat,t)}step(t){this.time+=t,nt.uTime.value=this.time,this.scenarios.update(t),this.weather.update(t),this.waves.update(t),nt.uWaveA.value=this.waves.uA,nt.uWaveB.value=this.waves.uB,nt.uBrkA.value=this.waves.uBrkA,nt.uBrkB.value=this.waves.uBrkB,nt.uBrkC.value=this.waves.uBrkC,this.body.wind.copy(this.weather.wind),this.body.breathVol=(this.survival.lung-.55)*3.2,this.acc+=t;let e=0;if(this.studio){let x=this.studio,w=this.body;w.pos.set(x.x,x.y,x.z),w.prevPos.copy(w.pos),w.vel.set(0,0,0),w.angVel.set(0,0,0),w.quat.copy(x.quat),w.prevQuat.copy(x.quat),w.relFlow.set(0,0,0),w.relSpeed=0,this.anim.force=x.state,this.anim.forcePhase=x.phase,this.acc=0}if(this.lifting){let x=this.body,w=this.rescue;x.prevPos.copy(x.pos),x.prevQuat.copy(x.quat);let A=w.lineDir,E=this._liftQ||(this._liftQ=new xt),S=this._liftQ2||(this._liftQ2=new xt);E.setFromUnitVectors(this._up||(this._up=new M(0,1,0)),A),S.setFromAxisAngle(this._up,w.ringSpin),x.quat.copy(E).multiply(S),x.pos.copy(w.ring).addScaledVector(A,-.3),x.vel.copy(w.vel),x.angVel.set(0,0,0),x.subFrac=Math.max(0,Math.min(1,(this.waves.heightFast(x.pos.x,x.pos.z)-x.pos.y+.6)/1.5)),x.mouthDepth=-2,x.eyeDepth=-2,x.relSpeed=0,x.dragG=0,this.anim.force="hang",this.acc=0}{let x=this.boat;x.tow.set(0,0,0);let w=this.time-(this.thrownAt||-99);if(x.active&&!this.aboard&&w<16){let E=this.body.pos.x-x.pos.x,S=this.body.pos.z-x.pos.z,N=Math.hypot(E,S)+.001;if(N>5.5){let O=((x.vel.x-this.body.vel.x)*E+(x.vel.z-this.body.vel.z)*S)/N,it=Math.max(0,Math.min(3200,(N-5.5)*420-O*700))*Math.min(1,(16-w)/4);x.tow.set(E/N*it,0,S/N*it)}}x.wind.copy(this.weather.wind),this.bacc+=t;let A=0;for(;x.active&&this.bacc>=Xi&&A<8;)x.step(Xi),this.bacc-=Xi,A++;(A===8||!x.active)&&(this.bacc=0),x.sync(this.bacc/Xi),this.aboard&&(this.washT=this.body.mouthDepth>.05?this.washT+t:0,x.flipping>0&&(x.upY<.4||x.sitUp<.5)||x.upY<.1||x.angVel.length()>3.4||this.washT>1.3||!x.active||this.lifting?this.throwOff():(this.pinToBoat(!1,t),this.anim.hold="aboard",this.acc=0))}{let x=this.introWave,w=this.boat;if(x&&x.active&&this.aboard&&x.age<x.tBreak){let A=(w.pos.x-x.ox)*x.dx+(w.pos.z-x.oz)*x.dz-x.s;if(A>3){let E=Math.max(5,x.speed-(w.vel.x*x.dx+w.vel.z*x.dz));x.tBreak+=(x.age+A/E+.15-x.tBreak)*(1-Math.exp(-t*2.5))}}else x&&!x.active&&(this.introWave=null)}for(;!this.studio&&!this.lifting&&!this.aboard&&this.acc>=Xi&&e<8;)this.player.fixedUpdate(Xi),this.contactBoat(Xi),this.body.step(Xi),this.acc-=Xi,e++;e===8&&(this.acc=0),this.mouthUnder=this.mouthUnder?this.body.mouthDepth>-.015:this.body.mouthDepth>.03;let i=this.survival;this.state!=="title"&&this.state!=="won"&&!this.lifting&&i.update(t,{mouthUnder:this.mouthUnder,effort:this.player.effort,turb:this.body.turb,subFrac:this.body.subFrac,storm:this.weather.storm,sudden:this.player.impact>.8,brace:Math.max(this.player.brace,this.player.diveHeld?1:0)}),this.syncCharacter(this.acc/Xi);{let x=this.anim.reach,w=this.boat,A=0;if(this.aboard&&w.loaded)A=1,this.boatPoint(.875,.4,.22,x[0].pos),this.boatPoint(.47,.55,.58,x[1].pos);else if(this.clinging&&w.loaded){A=1,this.anim.hold="cling";let E=this.clingZ,S=this.clingSide,N=Cn(E),O=this.boatPoint(S*N,_r(E),E,this._rg||(this._rg=new M)),it=(this._ro||(this._ro=new M)).set(this.character.group.position.x-O.x,0,this.character.group.position.z-O.z);it.lengthSq()<1e-4&&it.set(S,0,0).applyQuaternion(w.group.quaternion),it.y=0,it.normalize();let P=it.z,L=-it.x;for(let D=0;D<2;D++){let H=D===0?.21:-.21;x[D].pos.set(O.x+P*H+it.x*.115,O.y+.165,O.z+L*H+it.z*.115)}}else this.anim.hold==="cling"&&(this.anim.hold=null);if(x[0].on=A,x[1].on=A,this.character.glb&&this.character.glb.setGrip){let E=x[0].w>.5?1:0;this.character.glb.setGrip(E,E)}}if(this.anim.update(t),this.character.retarget(),this.character.group.updateMatrixWorld(!0),this.body.syncLimbs(this.character),this.boatFrame(t),this.state==="title")this.interaction.next=Math.max(this.interaction.next,8),this.interaction.megaNext=Math.max(this.interaction.megaNext,40),this.cam.script||(this.cam.script={yaw:-Math.PI/2,pitch:-.07}),this.cam.target=1,this.cam.blend=1,this.cam.orbit=this.time*.11;else if(this.cam.orbit!==0&&!this.keepOrbit){let x=((this.cam.orbit+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;this.cam.orbit=Math.abs(x)<.01?0:x*Math.exp(-t*3)}{let x=this.cam.interest,w=this.interaction,A=this.body;if(w.crestDist<130&&w.crestDist>6&&w.crestHeight>4)x.x=A.pos.x-w.crestDx*60,x.z=A.pos.z-w.crestDz*60,x.w=pt(w.crestHeight/10)*pt(1.2-w.crestDist/130);else if(this.rescue.state==="hover"||this.rescue.state==="inbound"){let E=this.rescue.state==="hover"?this.rescue.ring:this.rescue.pos;x.x=E.x,x.z=E.z,x.w=.6}else x.w=0;this.cam.oxygen=this.survival.alive?this.survival.oxygen:100,this.cam.shiver=this.survival.shiver}this.cam.armAdd=(this.cam.armAdd||0)+((this.aboard||this.time-(this.thrownAt||-99)<4?1.5:0)-(this.cam.armAdd||0))*(1-Math.exp(-t*1.2)),this.cam.update(t);let n=this.camera.position,s=this.weather.wind,a=this.weather.storm;this.mouthWorld.copy(this.body._mouth).applyQuaternion(this.character.group.quaternion).add(this.character.group.position),this.underwater.update(t,this.camera,this.cam.surfaceAtCam,this.body,this.player,i,this.post,this.weather,this.mouthWorld,this.post.h),this.camUnder=this.underwater.under;let o=i.events;for(let x=0;x<o.length;x++){let w=o[x];w.type==="submerge"&&this.underwater.burstAt(this.mouthWorld,34,.45),w.type==="surface"&&(this.player.recover=2+4*w.need),this.emit(w.type,w)}o.length=0,this.introStrike>0&&(this.introStrike-=t,this.introStrike<=0&&this.lightning.strike(n,{azimuth:this.cam.yaw+.5,dist:1500,sheet:0,power:1.4})),this.lightning.update(t,n,a>.3?.3+.9*a:0,this.autoLightning),this.interaction.update(t,n,this.camUnder,s);let c=this.interaction.crestDist,h=this.interaction.crestHeight,u=h>18?60:30,l=i.alive&&c>-2&&c<u&&h>5?pt(1-c/u)*pt(h/9):0;this.player.brace+=(l-this.player.brace)*(1-Math.exp(-t*5)),this.cam.threat=this.interaction.threat;let d=this.rescue,f=d.state==="hover",g=this.input.enabled&&this.player.swimHeld;d.update(t,this.body.pos,s,i.timeAlive,i.alive,this.spray,this.state==="playing",this.camera.position,g),this.player.grab=d.state==="hover"&&d.gripping?d.ring:null;let b=this.isTouch?"\uD5E4\uC5C4":"Space";this.ui&&this.state==="playing"&&(!f&&d.state==="hover"&&this.ui.note(`\uAD6C\uC870 \uD5EC\uAE30 \u2014 \uD29C\uBE0C\uAE4C\uC9C0 \uAC00\uC11C ${b}\uB97C \uAFB9 \uB20C\uB7EC \uBD99\uC7A1\uC544\uB77C`,8),this.grabNote-=t,d.slipped?(d.slipped=!1,this.ui.note("\uB193\uCCE4\uB2E4",2.5),this.grabNote=3):d.reach&&!d.gripping&&this.grabNote<=0&&(this.ui.note(`${b}\uB97C \uAFB9 \uB20C\uB7EC \uBD99\uC7A1\uC544\uB77C`,2.5),this.grabNote=4)),d.state==="lift"&&!this.lifting&&(this.lifting=!0,this.input.enabled=!1,this.interaction.auto=!1,this.autoLightning=!0,this.cam.setMode("third"),this.cam.cine={mode:"lift",t:0,yaw0:this.cam.yaw},this.emit("surface",{need:1,time:6})),d.rescued&&this.state==="playing"&&(this.wonTimer+=t,this.post.u.uFade.value=Math.max(0,Math.min(.9,(this.wonTimer-9.5)/2.2)),this.wonTimer>11.5&&!this.manual&&(this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("won")));{let x=!!this.cam.cine||this.lifting;x!==!!this.cineOn&&(this.cineOn=x,this.ui&&this.ui.cine(x))}{let x=this.interaction,w=i.alive&&!this.lifting&&(this.player.brace>.7&&x.crestDist<7&&x.crestDist>-2&&x.crestHeight>7||this.player.air>.6),A=this.realDt||t;w&&this.slowLeft>0?(this.slowWant=.42,this.slowLeft-=A):(this.slowWant=1,w||(this.slowLeft=Math.min(1.4,this.slowLeft+A*.2)))}let m=this.body.subFrac<.05&&this.body.pos.y-this.body.surfaceH>1?1:0;this.player.air+=(m-this.player.air)*(1-Math.exp(-t*(m?10:4)));let p=this.vst;p.alive=i.alive,p.blackout=i.blackout,p.mouthUnder=this.mouthUnder,p.under=this.mouthUnder,p.camUnder=this.underwater.isUnder,p.oxygen=i.oxygen,p.impact=this.player.impact,p.brace=this.player.brace,p.crestDist=c,p.crestHeight=h,p.gaspTimer=i.gaspTimer,p.inhaling=i.inhaling,p.breathPhase=i.breathPhase,p.stamina=i.stamina,p.effort=this.player.effort,p.temp=i.temp,p.swallow=i.swallow,p.air=this.player.air,p.exertion=i.exertion,p.struggle=this.anim.w.struggle,p.dive=this.player.diveHeld,this.coughSeq>0&&(this.coughSeq-=t,this.coughT-=t,this.coughT<=0&&(this.anim.coughKick=1,this.coughT=.42+Math.random()*.2)),this.face.update(t,p),this.state!=="title"&&this.voiceDir.update(t,p),this.limbs.update(t,this.spray,s,this.state!=="title"||!0),this.spray.seedCrests(t,n,s,a,Math.min(40,1500*t)*(this.perf.profile.spray/9e3)),this.spray.seedBreakers(t,n,s),this.spray.update(t,n,s),this.rain.update(t,this.camera,s,this.weather.rain,this.camUnder,this.post.h);let y=this.post.u;this.impactBlur=Math.max(0,this.impactBlur-t*.9),y.uBlur.value=this.impactBlur*2.6,y.uSheet.value=this.lens.sheet,y.uWhiteout.value=this.interaction.whiteout*(this.time-(this.thrownAt||-99)<10?.45:1),y.uMotionBlur.value=this.perf.profile.motionBlur?Math.min(.6,this.player.impact*.3+this.player.tumble*.5):0;{let x=Math.max(pt((40-i.oxygen)/40),pt((34.2-i.temp)/2.2),i.blackout)*(i.alive?1:0);this.pulseT=(this.pulseT||0)+t*(1.5+1.2*x);let w=Math.pow(Math.max(0,Math.sin(this.pulseT*Math.PI*2)),8);y.uTunnel.value=i.blackout,this.lidK=0}y.uDesat.value=.35*i.blackout+.18*pt((35.5-i.temp)/3),this.state==="title"?(y.uDofAmount.value=1.6,y.uDofFocus.value=this.cam.arm):y.uDofAmount.value=0,i.alive&&!this.lifting&&!this.rescue.rescued&&(y.uFade.value=this.lidK||0),i.alive||(this.deadTimer===0&&!this.manual&&(this.cam.cine={mode:"death",t:0}),this.deadTimer+=t,y.uFade.value=Math.min(.82,this.deadTimer/4),this.deadTimer>4&&this.state==="playing"&&!this.manual&&(this.input.enabled=!1,this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("dead"))),this.ui&&this.state==="playing"&&this.ui.setBars(i.oxygen/100,i.stamina/100,(i.temp-31.5)/5.5,this.rescue.hold/this.rescue.holdNeed);let v=nt.uFlash.value;this.flashLight.intensity=v*3.2,this.flashLight.position.copy(this.character.group.position).addScaledVector(nt.uFlashDir.value,50),this.flashLight.target.position.copy(this.character.group.position),this.keyLight.position.copy(this.character.group.position).addScaledVector(nt.uGlowDir.value,50),this.keyLight.target.position.copy(this.character.group.position),this.character.material.envMapIntensity=(this.studioLight?4.5:this.character.glb?1.25:1.7)+v*2,this.boat.material&&(this.boat.material.envMapIntensity=(this.studioLight?4:.6)+v*1.4),this.keyLight.intensity=this.studioLight?2.2:.42,this.ocean.update(this.camera,t),this.ocean.uniforms.uPlayerPos.value.copy(this.character.group.position),this.ocean.uniforms.uBoatOn.value=this.boat.active&&this.boat.loaded?1:0,this.boat.active&&this.boat.loaded&&this.ocean.uniforms.uBoatInv.value.copy(this.boat.holder.children[0].matrixWorld).invert(),this.ocean.uniforms.uPlayerFoam.value=(.06+this.anim.splashiness*.12+this.limbs.activity*.16)*Math.min(1,this.body.subFrac*3)*(this.body.eyeDepth<.25?1:0);let _=this.audioState,R=this.camera.matrixWorld.elements;_.cam.fwd.set(-R[8],-R[9],-R[10]),_.cam.up.set(R[4],R[5],R[6]),_.storm=a,_.rain=this.weather.rain,_.windSpeed=this.weather.windSpeed,_.gust=this.weather.gust,_.windPan=-(s.x*R[0]+s.z*R[2])/Math.max(1,this.weather.windSpeed),_.under=this.underwater.under,_.depth=Math.max(0,this.underwater.depth),_.aeration=this.underwater.aeration,_.threat=this.interaction.threat,_.hot=this.spray.hot,_.oxygen=i.oxygen,_.effort=this.player.effort,_.heli=this.rescue.state!=="none"?{on:!0,pos:this.rescue.pos}:null,_.air=this.player.air,_.relSpeed=this.body.relSpeed,_.swellV=this.body.surface.vy,_.alive=i.alive,_.blackout=i.blackout,_.mouthUnder=this.mouthUnder,_.slow=1-(this.timeScale||1),_.swimSplash=Math.max(this.limbs.activity,this.anim.w.swim*.8)*(this.mouthUnder?.3:1),this.audio.update(t,_),this.input.endFrame()}render(t){if(this.sky.updateEnv(),this.envTimer-=t,this.envTimer<=0&&nt.uFlash.value<.01){let i=this.pmrem.fromEquirectangular(this.sky.envRT.texture);this.envRT&&this.envRT.dispose(),this.envRT=i,this.scene.environment=i.texture,this.envTimer=9}let e=this.weather.rain*(.9+5*(1-this.cam.blend))*(.6+.4*this.weather.gust);this.lens.update(t,e,this.underwater.isUnder,this.camera.aspect),this.foam.update(t,this.camera.position.x,this.camera.position.z,this.character.group.position,this.anim.splashiness*.14+this.limbs.activity*.22,this.ocean.uniforms),this.post.render(this.drawScene,this.camera,t,this.time)}renderStill(){this.render(0)}loop(t){requestAnimationFrame(this.loop);let e=Math.max(0,Math.min((t-this.last)/1e3,.1));this.last=t,!this.manual&&(this.state==="paused"||this.state==="dead"||(this.realDt=e,this.timeScale=(this.timeScale||1)+((this.slowWant||1)-(this.timeScale||1))*(1-Math.exp(-e*9)),this.step(e*this.timeScale),this.render(e),this.perf.update(e)&&this.resize()))}};function xx(){let r;try{r=new Uh}catch(e){let i=document.getElementById("fatal");i.style.display="flex",i.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uC2E4\uD589\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 (WebGL2 \uD544\uC694). "+e.message,console.error(e);return}(new URLSearchParams(location.search).get("glb")==="0"?Promise.resolve():r.loadCharacter()).then(()=>r.loadBoat()).then(()=>{r.onAssets&&r.onAssets(),window.__ocean.ready=!0,Mr(1)}),window.__ocean={game:r,ready:!1,scenarios:Object.keys(Jn),advance(e,i=1/60){let n=Math.max(1,Math.round(e/i));for(let s=0;s<n;s++)r.step(i),r.render(i)},scenario(e){return r.scenarios.run(e)},studio(e){let i=new xt;e.prone?i.setFromRotationMatrix(new At().makeBasis(new M(0,0,1),new M(-1,0,0),new M(0,-1,0))):i.setFromAxisAngle(new M(0,1,0),-Math.PI/2);let n=r.waves.sample(0,0,{}).h;r.studio={state:e.state,phase:e.phase||0,quat:i,x:0,y:n+14,z:0},r.player.underSwim=e.under?1:0,r.anim.forcePike=e.pike||0,r.weather.base=r.weather.storm=.15,r.weather.locked=!0,r.cam.setMode("third"),r.cam.blend=1,r.cam.yaw=-Math.PI/2,r.cam.pitch=e.pitch!==void 0?e.pitch:-.05,r.cam.orbit=e.orbit||0,r.keepOrbit=!0,r.cam.armOverride=e.arm||2.7,r.cam.inited=!1,r.post.u.uExposureBias.value=1,r.studioLight=!0;for(let s=0;s<4;s++)r.step(.5);return r.render(1/60),r.render(1/60),r.anim.state},set(e){return e.view&&(r.cam.setMode(e.view),e.snap&&(r.cam.blend=r.cam.target)),e.yaw!==void 0&&(r.cam.yaw=e.yaw),e.pitch!==void 0&&(r.cam.pitch=e.pitch),e.orbit!==void 0&&(r.cam.orbit=e.orbit,r.keepOrbit=!0),e.arm!==void 0&&(r.cam.armOverride=e.arm),e.keys!==void 0&&(r.input.virtual=e.keys,r.input.enabled=!0),e.storm!==void 0&&(r.weather.base=e.storm,e.snap&&(r.weather.storm=e.storm)),e.breaker&&r.interaction.launch(e.breaker),e.strike&&r.lightning.strike(r.camera.position,e.strike),!0},info(){let e=r.body,i=r.survival;return{t:+r.time.toFixed(2),state:r.state,size:[r.post.w,r.post.h],profile:r.perf.profile.key,sigH:+r.waves.sigHeight.toFixed(1),pos:[+e.pos.x.toFixed(1),+e.pos.y.toFixed(2),+e.pos.z.toFixed(1)],surf:+e.surfaceH.toFixed(2),mouth:+e.mouthDepth.toFixed(2),sub:+e.subFrac.toFixed(2),ctl:+r.player.control.toFixed(2),imp:+r.player.impact.toFixed(2),anim:r.anim.state,view:r.cam.mode,blend:+r.cam.blend.toFixed(2),camUnder:+r.camUnder.toFixed(2),yaw:+r.cam.yaw.toFixed(2),o2:+i.oxygen.toFixed(0),st:+i.stamina.toFixed(0),temp:+i.temp.toFixed(2),alive:i.alive,flash:+nt.uFlash.value.toFixed(2),spray:r.spray.alive,drops:r.lens.count,fps:+r.perf.fps.toFixed(0),rescue:r.rescue.state,hold:+r.rescue.hold.toFixed(1),won:r.rescue.rescued,aboard:r.aboard,cling:!!r.clinging,near:+(r.nearBoat||99).toFixed(1),boat:r.boat.active?{up:+r.boat.upY.toFixed(2),swamp:+r.boat.swamp.toFixed(2),dist:+r.boat.pos.distanceTo(e.pos).toFixed(1),sub:+r.boat.subFrac.toFixed(2)}:null,face:r.face.label,air:+r.player.air.toFixed(2),swim:r.player.swimHeld,dive:r.player.diveHeld,depth:+Math.max(0,e.mouthDepth).toFixed(2),voice:r.voiceDir.last,voices:r.voiceDir.count,glb:!!r.character.glb}},measure(e){return new Promise(i=>{let n=performance.now(),s=0,a=0,o=n,c=h=>{s++,a=Math.max(a,h-o),o=h,h-n>=e*1e3?i({fps:+(s/((h-n)/1e3)).toFixed(1),worstMs:+a.toFixed(1),scale:r.perf.scale,size:[r.post.w,r.post.h],profile:r.perf.profile.key}):requestAnimationFrame(c)};requestAnimationFrame(c)})}}}xx();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
