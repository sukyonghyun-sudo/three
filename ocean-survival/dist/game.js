(()=>{var Xc="160";var Wd=0,nl=1,qd=2;var Wu=1,Xd=2,en=3,bi=0,Ge=1,Ie=2;var xn=0,yn=1,Ss=2,sl=3,rl=4,Yc=5,sn=100,Yd=101,jd=102,al=103,ol=104,Da=200,Kd=201,jc=202,Qd=203,cr=204,ac=205,Zd=206,Jd=207,$d=208,tf=209,ef=210,nf=211,sf=212,rf=213,af=214,of=0,cf=1,hf=2,aa=3,lf=4,uf=5,df=6,ff=7,qu=0,pf=1,mf=2,Vi=0,gf=1,bf=2,vf=3,xf=4,yf=5,_f=6,cl="attached",Mf="detached",Xu=300,Ts=301,As=302,oc=303,cc=304,ka=306,Je=1e3,ni=1001,hr=1002,Ee=1003,oa=1004;var er=1005;var ee=1006,Kc=1007;var si=1008;var We=1009,wf=1010,Ef=1011,Qc=1012,Yu=1013,bn=1014,rn=1015,on=1016,ju=1017,Ku=1018,Hn=1020,Sf=1021,de=1023,Tf=1024,Af=1025,Vn=1026,Rs=1027,Rf=1028,Qu=1029,Cf=1030,Zu=1031,Ju=1033,Eo=33776,So=33777,To=33778,Ao=33779,hl=35840,ll=35841,ul=35842,dl=35843,$u=36196,fl=37492,pl=37496,ml=37808,gl=37809,bl=37810,vl=37811,xl=37812,yl=37813,_l=37814,Ml=37815,wl=37816,El=37817,Sl=37818,Tl=37819,Al=37820,Rl=37821,Ro=36492,Cl=36494,Pl=36495,Pf=36283,Ll=36284,Il=36285,Fl=36286;var Cs=2300,Wn=2301,Co=2302,Dl=2400,kl=2401,Ul=2402,Lf=2500;var td=0,Ua=1,wr=2,ed=3e3,Gn=3001,If=3200,Ff=3201,id=0,Df=1,ci="",fe="srgb",Ce="srgb-linear",Zc="display-p3",Na="display-p3-linear",ca="linear",ve="srgb",ha="rec709",la="p3";var ns=7680;var Nl=519,kf=512,Uf=513,Nf=514,nd=515,zf=516,Of=517,Bf=518,Hf=519,hc=35044,qi=35048;var zl="300 es",lc=1035,an=2e3,ua=2001,_n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ol=1234567,ir=Math.PI/180,Ps=180/Math.PI;function ki(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[r&255]+Qe[r>>8&255]+Qe[r>>16&255]+Qe[r>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function ke(r,t,e){return Math.max(t,Math.min(e,r))}function Jc(r,t){return(r%t+t)%t}function Vf(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function Gf(r,t,e){return r!==t?(e-r)/(t-r):0}function nr(r,t,e){return(1-e)*r+e*t}function Wf(r,t,e,i){return nr(r,t,1-Math.exp(-e*i))}function qf(r,t=1){return t-Math.abs(Jc(r,t*2)-t)}function Xf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Yf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function jf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Kf(r,t){return r+Math.random()*(t-r)}function Qf(r){return r*(.5-Math.random())}function Zf(r){r!==void 0&&(Ol=r);let t=Ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jf(r){return r*ir}function $f(r){return r*Ps}function uc(r){return(r&r-1)===0&&r!==0}function tp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function da(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ep(r,t,e,i,n){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),h=s((t+i)/2),l=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":r.set(o*l,c*u,c*d,o*h);break;case"YZY":r.set(c*d,o*l,c*u,o*h);break;case"ZXZ":r.set(c*u,c*d,o*l,o*h);break;case"XZX":r.set(o*l,c*g,c*f,o*h);break;case"YXY":r.set(c*f,o*l,c*g,o*h);break;case"ZYZ":r.set(c*g,c*f,o*l,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Hi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ue(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Rn={DEG2RAD:ir,RAD2DEG:Ps,generateUUID:ki,clamp:ke,euclideanModulo:Jc,mapLinear:Vf,inverseLerp:Gf,lerp:nr,damp:Wf,pingpong:qf,smoothstep:Xf,smootherstep:Yf,randInt:jf,randFloat:Kf,randFloatSpread:Qf,seededRandom:Zf,degToRad:Jf,radToDeg:$f,isPowerOfTwo:uc,ceilPowerOfTwo:tp,floorPowerOfTwo:da,setQuaternionFromProperEuler:ep,normalize:ue,denormalize:Hi},dt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class r{constructor(t,e,i,n,s,a,o,c,h){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,c,h)}set(t,e,i,n,s,a,o,c,h){let l=this.elements;return l[0]=t,l[1]=n,l[2]=o,l[3]=e,l[4]=s,l[5]=c,l[6]=i,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],h=i[1],l=i[4],u=i[7],d=i[2],f=i[5],g=i[8],b=n[0],m=n[3],p=n[6],y=n[1],x=n[4],M=n[7],R=n[2],v=n[5],w=n[8];return s[0]=a*b+o*y+c*R,s[3]=a*m+o*x+c*v,s[6]=a*p+o*M+c*w,s[1]=h*b+l*y+u*R,s[4]=h*m+l*x+u*v,s[7]=h*p+l*M+u*w,s[2]=d*b+f*y+g*R,s[5]=d*m+f*x+g*v,s[8]=d*p+f*M+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*a*l-e*o*h-i*s*l+i*o*c+n*s*h-n*a*c}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],u=l*a-o*h,d=o*c-l*s,f=h*s-a*c,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=u*b,t[1]=(n*h-l*i)*b,t[2]=(o*i-n*a)*b,t[3]=d*b,t[4]=(l*e-n*c)*b,t[5]=(n*s-o*e)*b,t[6]=f*b,t[7]=(i*c-h*e)*b,t[8]=(a*e-i*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let c=Math.cos(s),h=Math.sin(s);return this.set(i*c,i*h,-i*(c*a+h*o)+a+t,-n*h,n*c,-n*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Po.makeScale(t,e)),this}rotate(t){return this.premultiply(Po.makeRotation(-t)),this}translate(t,e){return this.premultiply(Po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Po=new $t;function sd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ip(){let r=lr("canvas");return r.style.display="block",r}var Bl={};function sr(r){r in Bl||(Bl[r]=!0,console.warn(r))}var Hl=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vl=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lr={[Ce]:{transfer:ca,primaries:ha,toReference:r=>r,fromReference:r=>r},[fe]:{transfer:ve,primaries:ha,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Na]:{transfer:ca,primaries:la,toReference:r=>r.applyMatrix3(Vl),fromReference:r=>r.applyMatrix3(Hl)},[Zc]:{transfer:ve,primaries:la,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Vl),fromReference:r=>r.applyMatrix3(Hl).convertLinearToSRGB()}},np=new Set([Ce,Na]),ae={enabled:!0,_workingColorSpace:Ce,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!np.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let i=Lr[t].toReference,n=Lr[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Lr[r].primaries},getTransfer:function(r){return r===ci?ca:Lr[r].transfer}};function ws(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Lo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ss,fa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=lr("canvas")),ss.width=t.width,ss.height=t.height;let i=ss.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=ws(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ws(e[i]/255)*255):e[i]=ws(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sp=0,pa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=ki(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Io(n[a].image)):s.push(Io(n[a]))}else s=Io(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function Io(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rp=0,Ye=class r extends _n{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=ni,n=ni,s=ee,a=si,o=de,c=We,h=r.DEFAULT_ANISOTROPY,l=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=ki(),this.name="",this.source=new pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===Gn?fe:ci),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Je:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Je:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fe?Gn:ed}set encoding(t){sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Gn?fe:ci}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Xu;Ye.DEFAULT_ANISOTROPY=1;var ne=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,c=t.elements,h=c[0],l=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(h+1)/2,M=(f+1)/2,R=(p+1)/2,v=(l+d)/4,w=(u+b)/4,A=(g+m)/4;return x>M&&x>R?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=v/i,s=w/i):M>R?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=v/n,s=A/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=w/s,n=A/s),this.set(i,n,s,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-l)*(d-l));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-b)/y,this.z=(d-l)/y,this.w=Math.acos((h+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dc=class extends _n{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gn?fe:ci),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ee,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ye(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new pa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ye=class extends dc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ma=class extends Ye{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fc=class extends Ye{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _t=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let c=i[n+0],h=i[n+1],l=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],g=s[a+2],b=s[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=b;return}if(u!==b||c!==d||h!==f||l!==g){let m=1-o,p=c*d+h*f+l*g+u*b,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let R=Math.sqrt(x),v=Math.atan2(R,p*y);m=Math.sin(m*v)/R,o=Math.sin(o*v)/R}let M=o*y;if(c=c*m+d*M,h=h*m+f*M,l=l*m+g*M,u=u*m+b*M,m===1-o){let R=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=R,h*=R,l*=R,u*=R}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],c=i[n+1],h=i[n+2],l=i[n+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+l*u+c*f-h*d,t[e+1]=c*g+l*d+h*u-o*f,t[e+2]=h*g+l*f+o*d-c*u,t[e+3]=l*g-o*u-c*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(i/2),l=o(n/2),u=o(s/2),d=c(i/2),f=c(n/2),g=c(s/2);switch(a){case"XYZ":this._x=d*l*u+h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u-d*f*g;break;case"YXZ":this._x=d*l*u+h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u+d*f*g;break;case"ZXY":this._x=d*l*u-h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u-d*f*g;break;case"ZYX":this._x=d*l*u-h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u+d*f*g;break;case"YZX":this._x=d*l*u+h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u-d*f*g;break;case"XZY":this._x=d*l*u-h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],c=e[9],h=e[2],l=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-c)*f,this._y=(s-h)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(l-c)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+h)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-h)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(c+l)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=i*l+a*o+n*h-s*c,this._y=n*l+a*c+s*o-i*h,this._z=s*l+a*h+i*c-n*o,this._w=a*l-i*o-n*c-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,o),u=Math.sin((1-e)*l)/h,d=Math.sin(e*l)/h;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*n-o*i),l=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+c*h+a*u-o*l,this.y=i+c*l+o*h-s*u,this.z=n+c*u+s*l-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fo.copy(this).projectOnVector(t),this.sub(Fo)}reflect(t){return this.sub(Fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fo=new _,Gl=new _t,Si=class{constructor(t=new _(1/0,1/0,1/0),e=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ii):Ii.fromBufferAttribute(s,a),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Fr.subVectors(this.max,js),rs.subVectors(t.a,js),as.subVectors(t.b,js),os.subVectors(t.c,js),dn.subVectors(as,rs),fn.subVectors(os,as),kn.subVectors(rs,os);let e=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-kn.z,kn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,kn.z,0,-kn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-kn.y,kn.x,0];return!Do(e,rs,as,os,Fr)||(e=[1,0,0,0,1,0,0,0,1],!Do(e,rs,as,os,Fr))?!1:(Dr.crossVectors(dn,fn),e=[Dr.x,Dr.y,Dr.z],Do(e,rs,as,os,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ki=[new _,new _,new _,new _,new _,new _,new _,new _],Ii=new _,Ir=new Si,rs=new _,as=new _,os=new _,dn=new _,fn=new _,kn=new _,js=new _,Fr=new _,Dr=new _,Un=new _;function Do(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Un.fromArray(r,s);let o=n.x*Math.abs(Un.x)+n.y*Math.abs(Un.y)+n.z*Math.abs(Un.z),c=t.dot(Un),h=e.dot(Un),l=i.dot(Un);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}var ap=new Si,Ks=new _,ko=new _,vi=class{constructor(t=new _,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ap.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ks,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(ko)),this.expandByPoint(Ks.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qi=new _,Uo=new _,kr=new _,pn=new _,No=new _,Ur=new _,zo=new _,Ls=class{constructor(t=new _,e=new _(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,e),Qi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Uo.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(Uo);let s=t.distanceTo(e)*.5,a=-this.direction.dot(kr),o=pn.dot(this.direction),c=-pn.dot(kr),h=pn.lengthSq(),l=Math.abs(1-a*a),u,d,f,g;if(l>0)if(u=a*c-o,d=a*o-c,g=s*l,u>=0)if(d>=-g)if(d<=g){let b=1/l;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+h}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+h):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+h):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+h);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Uo).addScaledVector(kr,d),f}intersectSphere(t,e){Qi.subVectors(t.center,this.origin);let i=Qi.dot(this.direction),n=Qi.dot(Qi)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,c,h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,n=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,n=(t.min.x-d.x)*h),l>=0?(s=(t.min.y-d.y)*l,a=(t.max.y-d.y)*l):(s=(t.max.y-d.y)*l,a=(t.min.y-d.y)*l),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,e,i,n,s){No.subVectors(e,t),Ur.subVectors(i,t),zo.crossVectors(No,Ur);let a=this.direction.dot(zo),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,t);let c=o*this.direction.dot(Ur.crossVectors(pn,Ur));if(c<0)return null;let h=o*this.direction.dot(No.cross(pn));if(h<0||c+h>a)return null;let l=-o*pn.dot(zo);return l<0?null:this.at(l/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class r{constructor(t,e,i,n,s,a,o,c,h,l,u,d,f,g,b,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,c,h,l,u,d,f,g,b,m)}set(t,e,i,n,s,a,o,c,h,l,u,d,f,g,b,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=l,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/cs.setFromMatrixColumn(t,0).length(),s=1/cs.setFromMatrixColumn(t,1).length(),a=1/cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),h=Math.sin(n),l=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*l,f=a*u,g=o*l,b=o*u;e[0]=c*l,e[4]=-c*u,e[8]=h,e[1]=f+g*h,e[5]=d-b*h,e[9]=-o*c,e[2]=b-d*h,e[6]=g+f*h,e[10]=a*c}else if(t.order==="YXZ"){let d=c*l,f=c*u,g=h*l,b=h*u;e[0]=d+b*o,e[4]=g*o-f,e[8]=a*h,e[1]=a*u,e[5]=a*l,e[9]=-o,e[2]=f*o-g,e[6]=b+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*l,f=c*u,g=h*l,b=h*u;e[0]=d-b*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*l,e[9]=b-d*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*l,f=a*u,g=o*l,b=o*u;e[0]=c*l,e[4]=g*h-f,e[8]=d*h+b,e[1]=c*u,e[5]=b*h+d,e[9]=f*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*h,g=o*c,b=o*h;e[0]=c*l,e[4]=b-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*l,e[9]=-o*l,e[2]=-h*l,e[6]=f*u+g,e[10]=d-b*u}else if(t.order==="XZY"){let d=a*c,f=a*h,g=o*c,b=o*h;e[0]=c*l,e[4]=-u,e[8]=h*l,e[1]=d*u+b,e[5]=a*l,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*l,e[10]=b*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(op,t,cp)}lookAt(t,e,i){let n=this.elements;return mi.subVectors(t,e),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),mn.crossVectors(i,mi),mn.lengthSq()===0&&(Math.abs(i.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),mn.crossVectors(i,mi)),mn.normalize(),Nr.crossVectors(mi,mn),n[0]=mn.x,n[4]=Nr.x,n[8]=mi.x,n[1]=mn.y,n[5]=Nr.y,n[9]=mi.y,n[2]=mn.z,n[6]=Nr.z,n[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],h=i[12],l=i[1],u=i[5],d=i[9],f=i[13],g=i[2],b=i[6],m=i[10],p=i[14],y=i[3],x=i[7],M=i[11],R=i[15],v=n[0],w=n[4],A=n[8],E=n[12],S=n[1],z=n[5],V=n[9],it=n[13],k=n[2],P=n[6],L=n[10],O=n[14],U=n[3],I=n[7],B=n[11],W=n[15];return s[0]=a*v+o*S+c*k+h*U,s[4]=a*w+o*z+c*P+h*I,s[8]=a*A+o*V+c*L+h*B,s[12]=a*E+o*it+c*O+h*W,s[1]=l*v+u*S+d*k+f*U,s[5]=l*w+u*z+d*P+f*I,s[9]=l*A+u*V+d*L+f*B,s[13]=l*E+u*it+d*O+f*W,s[2]=g*v+b*S+m*k+p*U,s[6]=g*w+b*z+m*P+p*I,s[10]=g*A+b*V+m*L+p*B,s[14]=g*E+b*it+m*O+p*W,s[3]=y*v+x*S+M*k+R*U,s[7]=y*w+x*z+M*P+R*I,s[11]=y*A+x*V+M*L+R*B,s[15]=y*E+x*it+M*O+R*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],c=t[9],h=t[13],l=t[2],u=t[6],d=t[10],f=t[14],g=t[3],b=t[7],m=t[11],p=t[15];return g*(+s*c*u-n*h*u-s*o*d+i*h*d+n*o*f-i*c*f)+b*(+e*c*f-e*h*d+s*a*d-n*a*f+n*h*l-s*c*l)+m*(+e*h*u-e*o*f-s*a*u+i*a*f+s*o*l-i*h*l)+p*(-n*o*l-e*c*u+e*o*d+n*a*u-i*a*d+i*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],u=t[9],d=t[10],f=t[11],g=t[12],b=t[13],m=t[14],p=t[15],y=u*m*h-b*d*h+b*c*f-o*m*f-u*c*p+o*d*p,x=g*d*h-l*m*h-g*c*f+a*m*f+l*c*p-a*d*p,M=l*b*h-g*u*h+g*o*f-a*b*f-l*o*p+a*u*p,R=g*u*c-l*b*c-g*o*d+a*b*d+l*o*m-a*u*m,v=e*y+i*x+n*M+s*R;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/v;return t[0]=y*w,t[1]=(b*d*s-u*m*s-b*n*f+i*m*f+u*n*p-i*d*p)*w,t[2]=(o*m*s-b*c*s+b*n*h-i*m*h-o*n*p+i*c*p)*w,t[3]=(u*c*s-o*d*s-u*n*h+i*d*h+o*n*f-i*c*f)*w,t[4]=x*w,t[5]=(l*m*s-g*d*s+g*n*f-e*m*f-l*n*p+e*d*p)*w,t[6]=(g*c*s-a*m*s-g*n*h+e*m*h+a*n*p-e*c*p)*w,t[7]=(a*d*s-l*c*s+l*n*h-e*d*h-a*n*f+e*c*f)*w,t[8]=M*w,t[9]=(g*u*s-l*b*s-g*i*f+e*b*f+l*i*p-e*u*p)*w,t[10]=(a*b*s-g*o*s+g*i*h-e*b*h-a*i*p+e*o*p)*w,t[11]=(l*o*s-a*u*s-l*i*h+e*u*h+a*i*f-e*o*f)*w,t[12]=R*w,t[13]=(l*b*n-g*u*n+g*i*d-e*b*d-l*i*m+e*u*m)*w,t[14]=(g*o*n-a*b*n-g*i*c+e*b*c+a*i*m-e*o*m)*w,t[15]=(a*u*n-l*o*n+l*i*c-e*u*c-a*i*d+e*o*d)*w,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,h=s*a,l=s*o;return this.set(h*a+i,h*o-n*c,h*c+n*o,0,h*o+n*c,l*o+i,l*c-n*a,0,h*c-n*o,l*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,h=s+s,l=a+a,u=o+o,d=s*h,f=s*l,g=s*u,b=a*l,m=a*u,p=o*u,y=c*h,x=c*l,M=c*u,R=i.x,v=i.y,w=i.z;return n[0]=(1-(b+p))*R,n[1]=(f+M)*R,n[2]=(g-x)*R,n[3]=0,n[4]=(f-M)*v,n[5]=(1-(d+p))*v,n[6]=(m+y)*v,n[7]=0,n[8]=(g+x)*w,n[9]=(m-y)*w,n[10]=(1-(d+b))*w,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=cs.set(n[0],n[1],n[2]).length(),a=cs.set(n[4],n[5],n[6]).length(),o=cs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],Fi.copy(this);let h=1/s,l=1/a,u=1/o;return Fi.elements[0]*=h,Fi.elements[1]*=h,Fi.elements[2]*=h,Fi.elements[4]*=l,Fi.elements[5]*=l,Fi.elements[6]*=l,Fi.elements[8]*=u,Fi.elements[9]*=u,Fi.elements[10]*=u,e.setFromRotationMatrix(Fi),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=an){let c=this.elements,h=2*s/(e-t),l=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,g;if(o===an)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ua)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=an){let c=this.elements,h=1/(e-t),l=1/(i-n),u=1/(a-s),d=(e+t)*h,f=(i+n)*l,g,b;if(o===an)g=(a+s)*u,b=-2*u;else if(o===ua)g=s*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},cs=new _,Fi=new At,op=new _(0,0,0),cp=new _(1,1,1),mn=new _,Nr=new _,mi=new _,Wl=new At,ql=new _t,hi=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],c=n[1],h=n[5],l=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var ga=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hp=0,Xl=new _,hs=new _t,Zi=new At,zr=new _,Qs=new _,lp=new _,up=new _t,Yl=new _(1,0,0),jl=new _(0,1,0),Kl=new _(0,0,1),dp={type:"added"},fp={type:"removed"},Se=class r extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new _,e=new hi,i=new _t,n=new _(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new At},normalMatrix:{value:new $t}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(Yl,t)}rotateY(t){return this.rotateOnAxis(jl,t)}rotateZ(t){return this.rotateOnAxis(Kl,t)}translateOnAxis(t,e){return Xl.copy(t).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yl,t)}translateY(t){return this.translateOnAxis(jl,t)}translateZ(t){return this.translateOnAxis(Kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?zr.copy(t):zr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Qs,zr,this.up):Zi.lookAt(zr,Qs,this.up),this.quaternion.setFromRotationMatrix(Zi),n&&(Zi.extractRotation(n.matrixWorld),hs.setFromRotationMatrix(Zi),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(dp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let u=c[h];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(s(t.materials,this.material[c]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),l=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),l.length>0&&(i.images=l),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let c=[];for(let h in o){let l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Se.DEFAULT_UP=new _(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Di=new _,Ji=new _,Oo=new _,$i=new _,ls=new _,us=new _,Ql=new _,Bo=new _,Ho=new _,Vo=new _,Or=!1,ys=class r{constructor(t=new _,e=new _,i=new _){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Di.subVectors(t,e),n.cross(Di);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Di.subVectors(n,e),Ji.subVectors(i,e),Oo.subVectors(t,e);let a=Di.dot(Di),o=Di.dot(Ji),c=Di.dot(Oo),h=Ji.dot(Ji),l=Ji.dot(Oo),u=a*h-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(h*c-o*l)*d,g=(a*l-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getUV(t,e,i,n,s,a,o,c){return Or===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Or=!0),this.getInterpolation(t,e,i,n,s,a,o,c)}static getInterpolation(t,e,i,n,s,a,o,c){return this.getBarycoord(t,e,i,n,$i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$i.x),c.addScaledVector(a,$i.y),c.addScaledVector(o,$i.z),c)}static isFrontFacing(t,e,i,n){return Di.subVectors(i,e),Ji.subVectors(t,e),Di.cross(Ji).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Di.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Di.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return Or===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Or=!0),r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;ls.subVectors(n,i),us.subVectors(s,i),Bo.subVectors(t,i);let c=ls.dot(Bo),h=us.dot(Bo);if(c<=0&&h<=0)return e.copy(i);Ho.subVectors(t,n);let l=ls.dot(Ho),u=us.dot(Ho);if(l>=0&&u<=l)return e.copy(n);let d=c*u-l*h;if(d<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(i).addScaledVector(ls,a);Vo.subVectors(t,s);let f=ls.dot(Vo),g=us.dot(Vo);if(g>=0&&f<=g)return e.copy(s);let b=f*h-c*g;if(b<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(i).addScaledVector(us,o);let m=l*g-f*u;if(m<=0&&u-l>=0&&f-g>=0)return Ql.subVectors(s,n),o=(u-l)/(u-l+(f-g)),e.copy(n).addScaledVector(Ql,o);let p=1/(m+b+d);return a=b*p,o=d*p,e.copy(i).addScaledVector(ls,a).addScaledVector(us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Go(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ae.workingColorSpace){if(t=Jc(t,1),e=ke(e,0,1),i=ke(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Go(a,s,t+1/3),this.g=Go(a,s,t),this.b=Go(a,s,t-1/3)}return ae.toWorkingColorSpace(this,n),this}setStyle(t,e=fe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){let i=rd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}copyLinearToSRGB(t){return this.r=Lo(t.r),this.g=Lo(t.g),this.b=Lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return ae.fromWorkingColorSpace(Ze.copy(this),t),Math.round(ke(Ze.r*255,0,255))*65536+Math.round(ke(Ze.g*255,0,255))*256+Math.round(ke(Ze.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ze.copy(this),e);let i=Ze.r,n=Ze.g,s=Ze.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,h,l=(o+a)/2;if(o===a)c=0,h=0;else{let u=a-o;switch(h=l<=.5?u/(a+o):u/(2-a-o),a){case i:c=(n-s)/u+(n<s?6:0);break;case n:c=(s-i)/u+2;break;case s:c=(i-n)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=fe){ae.fromWorkingColorSpace(Ze.copy(this),t);let e=Ze.r,i=Ze.g,n=Ze.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(Br);let i=nr(gn.h,Br.h,e),n=nr(gn.s,Br.s,e),s=nr(gn.l,Br.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new Dt;Dt.NAMES=rd;var pp=0,xi=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=yn,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cr,this.blendDst=ac,this.blendEquation=sn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yn&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cr&&(i.blendSrc=this.blendSrc),this.blendDst!==ac&&(i.blendDst=this.blendDst),this.blendEquation!==sn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qe=class extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new _,Hr=new dt,Vt=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}};var Is=class extends Vt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ba=class extends Vt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var se=class extends Vt{constructor(t,e,i){super(new Float32Array(t),e,i)}};var mp=0,Ei=new At,Wo=new Se,ds=new _,gi=new Si,Zs=new Si,Ve=new _,he=class r extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sd(t)?ba:Is)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new $t().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,i){return Ei.makeTranslation(t,e,i),this.applyMatrix4(Ei),this}scale(t,e,i){return Ei.makeScale(t,e,i),this.applyMatrix4(Ei),this}lookAt(t){return Wo.lookAt(t),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new _,1/0);return}if(t){let i=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(gi.min,Zs.min),gi.expandByPoint(Ve),Ve.addVectors(gi.max,Zs.max),gi.expandByPoint(Ve)):(gi.expandByPoint(Zs.min),gi.expandByPoint(Zs.max))}gi.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ve.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ve));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)Ve.fromBufferAttribute(o,h),c&&(ds.fromBufferAttribute(t,h),Ve.add(ds)),n=Math.max(n,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,h=[],l=[];for(let S=0;S<o;S++)h[S]=new _,l[S]=new _;let u=new _,d=new _,f=new _,g=new dt,b=new dt,m=new dt,p=new _,y=new _;function x(S,z,V){u.fromArray(n,S*3),d.fromArray(n,z*3),f.fromArray(n,V*3),g.fromArray(a,S*2),b.fromArray(a,z*2),m.fromArray(a,V*2),d.sub(u),f.sub(u),b.sub(g),m.sub(g);let it=1/(b.x*m.y-m.x*b.y);isFinite(it)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-b.y).multiplyScalar(it),y.copy(f).multiplyScalar(b.x).addScaledVector(d,-m.x).multiplyScalar(it),h[S].add(p),h[z].add(p),h[V].add(p),l[S].add(y),l[z].add(y),l[V].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let S=0,z=M.length;S<z;++S){let V=M[S],it=V.start,k=V.count;for(let P=it,L=it+k;P<L;P+=3)x(i[P+0],i[P+1],i[P+2])}let R=new _,v=new _,w=new _,A=new _;function E(S){w.fromArray(s,S*3),A.copy(w);let z=h[S];R.copy(z),R.sub(w.multiplyScalar(w.dot(z))).normalize(),v.crossVectors(A,z);let it=v.dot(l[S])<0?-1:1;c[S*4]=R.x,c[S*4+1]=R.y,c[S*4+2]=R.z,c[S*4+3]=it}for(let S=0,z=M.length;S<z;++S){let V=M[S],it=V.start,k=V.count;for(let P=it,L=it+k;P<L;P+=3)E(i[P+0]),E(i[P+1]),E(i[P+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new _,s=new _,a=new _,o=new _,c=new _,h=new _,l=new _,u=new _;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),b=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,b),a.fromBufferAttribute(e,m),l.subVectors(a,s),u.subVectors(n,s),l.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,m),o.add(l),c.add(l),h.add(l),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),l.subVectors(a,s),u.subVectors(n,s),l.cross(u),i.setXYZ(d+0,l.x,l.y,l.z),i.setXYZ(d+1,l.x,l.y,l.z),i.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,c){let h=o.array,l=o.itemSize,u=o.normalized,d=new h.constructor(c.length*l),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*l;for(let p=0;p<l;p++)d[g++]=h[f++]}return new Vt(d,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=n[o],h=t(c,i);e.setAttribute(o,h)}let s=this.morphAttributes;for(let o in s){let c=[],h=s[o];for(let l=0,u=h.length;l<u;l++){let d=h[l],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let h=i[c];t.data.attributes[c]=h.toJSON(t.data)}let n={},s=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];l.push(f.toJSON(t.data))}l.length>0&&(n[c]=l,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let h in n){let l=n[h];this.setAttribute(h,l.clone(e))}let s=t.morphAttributes;for(let h in s){let l=[],u=s[h];for(let d=0,f=u.length;d<f;d++)l.push(u[d].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,l=a.length;h<l;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zl=new At,Nn=new Ls,Vr=new vi,Jl=new _,fs=new _,ps=new _,ms=new _,qo=new _,Gr=new _,Wr=new dt,qr=new dt,Xr=new dt,$l=new _,tu=new _,eu=new _,Yr=new _,jr=new _,gt=class extends Se{constructor(t=new he,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){Gr.set(0,0,0);for(let c=0,h=s.length;c<h;c++){let l=o[c],u=s[c];l!==0&&(qo.fromBufferAttribute(u,t),a?Gr.addScaledVector(qo,l):Gr.addScaledVector(qo.sub(e),l))}e.add(Gr)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(s),Nn.copy(t.ray).recast(t.near),!(Vr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Vr,Jl)===null||Nn.origin.distanceToSquared(Jl)>(t.far-t.near)**2))&&(Zl.copy(s).invert(),Nn.copy(t.ray).applyMatrix4(Zl),!(i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,h=s.attributes.uv,l=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,R=x;M<R;M+=3){let v=o.getX(M),w=o.getX(M+1),A=o.getX(M+2);n=Kr(this,p,t,i,h,l,u,v,w,A),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let y=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);n=Kr(this,a,t,i,h,l,u,y,x,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,R=x;M<R;M+=3){let v=M,w=M+1,A=M+2;n=Kr(this,p,t,i,h,l,u,v,w,A),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let y=m,x=m+1,M=m+2;n=Kr(this,a,t,i,h,l,u,y,x,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function gp(r,t,e,i,n,s,a,o){let c;if(t.side===Ge?c=i.intersectTriangle(a,s,n,!0,o):c=i.intersectTriangle(n,s,a,t.side===bi,o),c===null)return null;jr.copy(o),jr.applyMatrix4(r.matrixWorld);let h=e.ray.origin.distanceTo(jr);return h<e.near||h>e.far?null:{distance:h,point:jr.clone(),object:r}}function Kr(r,t,e,i,n,s,a,o,c,h){r.getVertexPosition(o,fs),r.getVertexPosition(c,ps),r.getVertexPosition(h,ms);let l=gp(r,t,e,i,fs,ps,ms,Yr);if(l){n&&(Wr.fromBufferAttribute(n,o),qr.fromBufferAttribute(n,c),Xr.fromBufferAttribute(n,h),l.uv=ys.getInterpolation(Yr,fs,ps,ms,Wr,qr,Xr,new dt)),s&&(Wr.fromBufferAttribute(s,o),qr.fromBufferAttribute(s,c),Xr.fromBufferAttribute(s,h),l.uv1=ys.getInterpolation(Yr,fs,ps,ms,Wr,qr,Xr,new dt),l.uv2=l.uv1),a&&($l.fromBufferAttribute(a,o),tu.fromBufferAttribute(a,c),eu.fromBufferAttribute(a,h),l.normal=ys.getInterpolation(Yr,fs,ps,ms,$l,tu,eu,new _),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));let u={a:o,b:c,c:h,normal:new _,materialIndex:0};ys.getNormal(fs,ps,ms,u.normal),l.face=u}return l}var Fe=class r extends he{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],h=[],l=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(u,2));function g(b,m,p,y,x,M,R,v,w,A,E){let S=M/w,z=R/A,V=M/2,it=R/2,k=v/2,P=w+1,L=A+1,O=0,U=0,I=new _;for(let B=0;B<L;B++){let W=B*z-it;for(let Q=0;Q<P;Q++){let H=Q*S-V;I[b]=H*y,I[m]=W*x,I[p]=k,h.push(I.x,I.y,I.z),I[b]=0,I[m]=0,I[p]=v>0?1:-1,l.push(I.x,I.y,I.z),u.push(Q/w),u.push(1-B/A),O+=1}}for(let B=0;B<A;B++)for(let W=0;W<w;W++){let Q=d+W+P*B,H=d+W+P*(B+1),N=d+(W+1)+P*(B+1),q=d+(W+1)+P*B;c.push(Q,H,q),c.push(H,N,q),U+=6}o.addGroup(f,U,E),f+=U,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fs(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ii(r){let t={};for(let e=0;e<r.length;e++){let i=Fs(r[e]);for(let n in i)t[n]=i[n]}return t}function bp(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ad(r){return r.getRenderTarget()===null?r.outputColorSpace:ae.workingColorSpace}var vp={clone:Fs,merge:ii},xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,re=class extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},va=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=an}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ue=class extends va{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ir*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;s+=a.offsetX*n/c,e-=a.offsetY*i/h,n*=a.width/c,i*=a.height/h}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,bs=1,pc=class extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ue(gs,bs,t,e);n.layers=this.layers,this.add(n);let s=new Ue(gs,bs,t,e);s.layers=this.layers,this.add(s);let a=new Ue(gs,bs,t,e);a.layers=this.layers,this.add(a);let o=new Ue(gs,bs,t,e);o.layers=this.layers,this.add(o);let c=new Ue(gs,bs,t,e);c.layers=this.layers,this.add(c);let h=new Ue(gs,bs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,c]=e;for(let h of e)this.remove(h);if(t===an)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,h,l]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,h),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,n),t.render(e,l),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},xa=class extends Ye{constructor(t,e,i,n,s,a,o,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,i,n,s,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},mc=class extends ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Gn?fe:ci),this.texture=new xa(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Fe(5,5,5),s=new re({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:xn});s.uniforms.tEquirect.value=e;let a=new gt(n,s),o=e.minFilter;return e.minFilter===si&&(e.minFilter=ee),new pc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},Xo=new _,_p=new _,Mp=new $t,nn=class{constructor(t=new _(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Xo.subVectors(i,e).cross(_p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Xo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Mp.getNormalMatrix(t),n=this.coplanarPoint(Xo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zn=new vi,Qr=new _,ur=class{constructor(t=new nn,e=new nn,i=new nn,n=new nn,s=new nn,a=new nn){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=an){let i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],c=n[3],h=n[4],l=n[5],u=n[6],d=n[7],f=n[8],g=n[9],b=n[10],m=n[11],p=n[12],y=n[13],x=n[14],M=n[15];if(i[0].setComponents(c-s,d-h,m-f,M-p).normalize(),i[1].setComponents(c+s,d+h,m+f,M+p).normalize(),i[2].setComponents(c+a,d+l,m+g,M+y).normalize(),i[3].setComponents(c-a,d-l,m-g,M-y).normalize(),i[4].setComponents(c-o,d-u,m-b,M-x).normalize(),e===an)i[5].setComponents(c+o,d+u,m+b,M+x).normalize();else if(e===ua)i[5].setComponents(o,u,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Qr.x=n.normal.x>0?t.max.x:t.min.x,Qr.y=n.normal.y>0?t.max.y:t.min.y,Qr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function od(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function wp(r,t){let e=t.isWebGL2,i=new WeakMap;function n(h,l){let u=h.array,d=h.usage,f=u.byteLength,g=r.createBuffer();r.bindBuffer(l,g),r.bufferData(l,u,d),h.onUploadCallback();let b;if(u instanceof Float32Array)b=r.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)b=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)b=r.SHORT;else if(u instanceof Uint32Array)b=r.UNSIGNED_INT;else if(u instanceof Int32Array)b=r.INT;else if(u instanceof Int8Array)b=r.BYTE;else if(u instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:b,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:f}}function s(h,l,u){let d=l.array,f=l._updateRange,g=l.updateRanges;if(r.bindBuffer(u,h),f.count===-1&&g.length===0&&r.bufferSubData(u,0,d),g.length!==0){for(let b=0,m=g.length;b<m;b++){let p=g[b];e?r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}l.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),l.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let l=i.get(h);l&&(r.deleteBuffer(l.buffer),i.delete(h))}function c(h,l){if(h.isGLBufferAttribute){let d=i.get(h);(!d||d.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let u=i.get(h);if(u===void 0)i.set(h,n(h,l));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,h,l),u.version=h.version}}return{get:a,remove:o,update:c}}var yi=class r extends he{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(n),h=o+1,l=c+1,u=t/o,d=e/c,f=[],g=[],b=[],m=[];for(let p=0;p<l;p++){let y=p*d-a;for(let x=0;x<h;x++){let M=x*u-s;g.push(M,-y,0),b.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let x=y+h*p,M=y+h*(p+1),R=y+1+h*(p+1),v=y+1+h*p;f.push(x,M,v),f.push(M,R,v)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(b,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
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
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ap=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pp=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ip=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yp=`#define PI 3.141592653589793
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
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t0="gl_FragColor = linearToOutputTexel( gl_FragColor );",e0=`
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
}`,i0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u0=`#ifdef USE_GRADIENTMAP
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
}`,d0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,f0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g0=`uniform bool receiveShadow;
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
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,v0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M0=`PhysicalMaterial material;
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
#endif`,w0=`struct PhysicalMaterial {
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
}`,E0=`
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
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
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,L0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D0=`#if defined( USE_POINTS_UV )
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
#endif`,k0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z0=`#ifdef USE_MORPHNORMALS
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
#endif`,O0=`#ifdef USE_MORPHTARGETS
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
#endif`,B0=`#ifdef USE_MORPHTARGETS
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
#endif`,H0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X0=`#ifdef USE_NORMALMAP
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
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cm=`float getShadowMask() {
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
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bm=`#ifdef USE_TRANSMISSION
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
#endif`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`#include <common>
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
}`,Pm=`#if DEPTH_PACKING == 3200
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
}`,Lm=`#define DISTANCE
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
}`,Im=`#define DISTANCE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`uniform float scale;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,zm=`uniform vec3 diffuse;
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
}`,Om=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
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
}`,Hm=`#define MATCAP
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
}`,Vm=`#define MATCAP
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
}`,Gm=`#define NORMAL
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
}`,Wm=`#define NORMAL
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
}`,qm=`#define PHONG
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
}`,Xm=`#define PHONG
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
}`,Ym=`#define STANDARD
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
}`,jm=`#define STANDARD
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
}`,Km=`#define TOON
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
}`,Qm=`#define TOON
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
}`,Zm=`uniform float size;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,tg=`uniform vec3 color;
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
}`,eg=`uniform float rotation;
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
}`,ig=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Ep,alphahash_pars_fragment:Sp,alphamap_fragment:Tp,alphamap_pars_fragment:Ap,alphatest_fragment:Rp,alphatest_pars_fragment:Cp,aomap_fragment:Pp,aomap_pars_fragment:Lp,batching_pars_vertex:Ip,batching_vertex:Fp,begin_vertex:Dp,beginnormal_vertex:kp,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:zp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:Vp,color_fragment:Gp,color_pars_fragment:Wp,color_pars_vertex:qp,color_vertex:Xp,common:Yp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:Qp,displacementmap_vertex:Zp,emissivemap_fragment:Jp,emissivemap_pars_fragment:$p,colorspace_fragment:t0,colorspace_pars_fragment:e0,envmap_fragment:i0,envmap_common_pars_fragment:n0,envmap_pars_fragment:s0,envmap_pars_vertex:r0,envmap_physical_pars_fragment:b0,envmap_vertex:a0,fog_vertex:o0,fog_pars_vertex:c0,fog_fragment:h0,fog_pars_fragment:l0,gradientmap_pars_fragment:u0,lightmap_fragment:d0,lightmap_pars_fragment:f0,lights_lambert_fragment:p0,lights_lambert_pars_fragment:m0,lights_pars_begin:g0,lights_toon_fragment:v0,lights_toon_pars_fragment:x0,lights_phong_fragment:y0,lights_phong_pars_fragment:_0,lights_physical_fragment:M0,lights_physical_pars_fragment:w0,lights_fragment_begin:E0,lights_fragment_maps:S0,lights_fragment_end:T0,logdepthbuf_fragment:A0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:C0,logdepthbuf_vertex:P0,map_fragment:L0,map_pars_fragment:I0,map_particle_fragment:F0,map_particle_pars_fragment:D0,metalnessmap_fragment:k0,metalnessmap_pars_fragment:U0,morphcolor_vertex:N0,morphnormal_vertex:z0,morphtarget_pars_vertex:O0,morphtarget_vertex:B0,normal_fragment_begin:H0,normal_fragment_maps:V0,normal_pars_fragment:G0,normal_pars_vertex:W0,normal_vertex:q0,normalmap_pars_fragment:X0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:K0,iridescence_pars_fragment:Q0,opaque_fragment:Z0,packing:J0,premultiplied_alpha_fragment:$0,project_vertex:tm,dithering_fragment:em,dithering_pars_fragment:im,roughnessmap_fragment:nm,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:am,shadowmap_vertex:om,shadowmask_pars_fragment:cm,skinbase_vertex:hm,skinning_pars_vertex:lm,skinning_vertex:um,skinnormal_vertex:dm,specularmap_fragment:fm,specularmap_pars_fragment:pm,tonemapping_fragment:mm,tonemapping_pars_fragment:gm,transmission_fragment:bm,transmission_pars_fragment:vm,uv_pars_fragment:xm,uv_pars_vertex:ym,uv_vertex:_m,worldpos_vertex:Mm,background_vert:wm,background_frag:Em,backgroundCube_vert:Sm,backgroundCube_frag:Tm,cube_vert:Am,cube_frag:Rm,depth_vert:Cm,depth_frag:Pm,distanceRGBA_vert:Lm,distanceRGBA_frag:Im,equirect_vert:Fm,equirect_frag:Dm,linedashed_vert:km,linedashed_frag:Um,meshbasic_vert:Nm,meshbasic_frag:zm,meshlambert_vert:Om,meshlambert_frag:Bm,meshmatcap_vert:Hm,meshmatcap_frag:Vm,meshnormal_vert:Gm,meshnormal_frag:Wm,meshphong_vert:qm,meshphong_frag:Xm,meshphysical_vert:Ym,meshphysical_frag:jm,meshtoon_vert:Km,meshtoon_frag:Qm,points_vert:Zm,points_frag:Jm,shadow_vert:$m,shadow_frag:tg,sprite_vert:eg,sprite_frag:ig},vt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Bi={basic:{uniforms:ii([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:ii([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:ii([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:ii([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:ii([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:ii([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:ii([vt.points,vt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:ii([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:ii([vt.common,vt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:ii([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:ii([vt.sprite,vt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:ii([vt.common,vt.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:ii([vt.lights,vt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Bi.physical={uniforms:ii([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Zr={r:0,b:0,g:0};function ng(r,t,e,i,n,s,a){let o=new Dt(0),c=s===!0?0:1,h,l,u=null,d=0,f=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?b(o,c):x&&x.isColor&&(b(x,1),y=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ka)?(l===void 0&&(l=new gt(new Fe(1,1,1),new re({name:"BackgroundCubeMaterial",uniforms:Fs(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,v,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ae.getTransfer(x.colorSpace)!==ve,(u!==x||d!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new gt(new yi(2,2),new re({name:"BackgroundMaterial",uniforms:Fs(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ae.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function b(m,p){m.getRGB(Zr,ad(r)),i.buffers.color.setClear(Zr.r,Zr.g,Zr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,b(o,c)},render:g}}function sg(r,t,e,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=m(null),h=c,l=!1;function u(k,P,L,O,U){let I=!1;if(a){let B=b(O,L,P);h!==B&&(h=B,f(h.object)),I=p(k,O,L,U),I&&y(k,O,L,U)}else{let B=P.wireframe===!0;(h.geometry!==O.id||h.program!==L.id||h.wireframe!==B)&&(h.geometry=O.id,h.program=L.id,h.wireframe=B,I=!0)}U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(I||l)&&(l=!1,A(k,P,L,O),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(k){return i.isWebGL2?r.bindVertexArray(k):s.bindVertexArrayOES(k)}function g(k){return i.isWebGL2?r.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function b(k,P,L){let O=L.wireframe===!0,U=o[k.id];U===void 0&&(U={},o[k.id]=U);let I=U[P.id];I===void 0&&(I={},U[P.id]=I);let B=I[O];return B===void 0&&(B=m(d()),I[O]=B),B}function m(k){let P=[],L=[],O=[];for(let U=0;U<n;U++)P[U]=0,L[U]=0,O[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:O,object:k,attributes:{},index:null}}function p(k,P,L,O){let U=h.attributes,I=P.attributes,B=0,W=L.getAttributes();for(let Q in W)if(W[Q].location>=0){let N=U[Q],q=I[Q];if(q===void 0&&(Q==="instanceMatrix"&&k.instanceMatrix&&(q=k.instanceMatrix),Q==="instanceColor"&&k.instanceColor&&(q=k.instanceColor)),N===void 0||N.attribute!==q||q&&N.data!==q.data)return!0;B++}return h.attributesNum!==B||h.index!==O}function y(k,P,L,O){let U={},I=P.attributes,B=0,W=L.getAttributes();for(let Q in W)if(W[Q].location>=0){let N=I[Q];N===void 0&&(Q==="instanceMatrix"&&k.instanceMatrix&&(N=k.instanceMatrix),Q==="instanceColor"&&k.instanceColor&&(N=k.instanceColor));let q={};q.attribute=N,N&&N.data&&(q.data=N.data),U[Q]=q,B++}h.attributes=U,h.attributesNum=B,h.index=O}function x(){let k=h.newAttributes;for(let P=0,L=k.length;P<L;P++)k[P]=0}function M(k){R(k,0)}function R(k,P){let L=h.newAttributes,O=h.enabledAttributes,U=h.attributeDivisors;L[k]=1,O[k]===0&&(r.enableVertexAttribArray(k),O[k]=1),U[k]!==P&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,P),U[k]=P)}function v(){let k=h.newAttributes,P=h.enabledAttributes;for(let L=0,O=P.length;L<O;L++)P[L]!==k[L]&&(r.disableVertexAttribArray(L),P[L]=0)}function w(k,P,L,O,U,I,B){B===!0?r.vertexAttribIPointer(k,P,L,U,I):r.vertexAttribPointer(k,P,L,O,U,I)}function A(k,P,L,O){if(i.isWebGL2===!1&&(k.isInstancedMesh||O.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let U=O.attributes,I=L.getAttributes(),B=P.defaultAttributeValues;for(let W in I){let Q=I[W];if(Q.location>=0){let H=U[W];if(H===void 0&&(W==="instanceMatrix"&&k.instanceMatrix&&(H=k.instanceMatrix),W==="instanceColor"&&k.instanceColor&&(H=k.instanceColor)),H!==void 0){let N=H.normalized,q=H.itemSize,et=e.get(H);if(et===void 0)continue;let j=et.buffer,st=et.type,ct=et.bytesPerElement,ot=i.isWebGL2===!0&&(st===r.INT||st===r.UNSIGNED_INT||H.gpuType===Yu);if(H.isInterleavedBufferAttribute){let Et=H.data,X=Et.stride,Bt=H.offset;if(Et.isInstancedInterleavedBuffer){for(let St=0;St<Q.locationSize;St++)R(Q.location+St,Et.meshPerAttribute);k.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let St=0;St<Q.locationSize;St++)M(Q.location+St);r.bindBuffer(r.ARRAY_BUFFER,j);for(let St=0;St<Q.locationSize;St++)w(Q.location+St,q/Q.locationSize,st,N,X*ct,(Bt+q/Q.locationSize*St)*ct,ot)}else{if(H.isInstancedBufferAttribute){for(let Et=0;Et<Q.locationSize;Et++)R(Q.location+Et,H.meshPerAttribute);k.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Et=0;Et<Q.locationSize;Et++)M(Q.location+Et);r.bindBuffer(r.ARRAY_BUFFER,j);for(let Et=0;Et<Q.locationSize;Et++)w(Q.location+Et,q/Q.locationSize,st,N,q*ct,q/Q.locationSize*Et*ct,ot)}}else if(B!==void 0){let N=B[W];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(Q.location,N);break;case 3:r.vertexAttrib3fv(Q.location,N);break;case 4:r.vertexAttrib4fv(Q.location,N);break;default:r.vertexAttrib1fv(Q.location,N)}}}}v()}function E(){V();for(let k in o){let P=o[k];for(let L in P){let O=P[L];for(let U in O)g(O[U].object),delete O[U];delete P[L]}delete o[k]}}function S(k){if(o[k.id]===void 0)return;let P=o[k.id];for(let L in P){let O=P[L];for(let U in O)g(O[U].object),delete O[U];delete P[L]}delete o[k.id]}function z(k){for(let P in o){let L=o[P];if(L[k.id]===void 0)continue;let O=L[k.id];for(let U in O)g(O[U].object),delete O[U];delete L[k.id]}}function V(){it(),l=!0,h!==c&&(h=c,f(h.object))}function it(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:V,resetDefaultState:it,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:M,disableUnusedAttributes:v}}function rg(r,t,e,i){let n=i.isWebGL2,s;function a(l){s=l}function o(l,u){r.drawArrays(s,l,u),e.update(u,s,1)}function c(l,u,d){if(d===0)return;let f,g;if(n)f=r,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,l,u,d),e.update(u,s,d)}function h(l,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(l[g],u[g]);else{f.multiDrawArraysWEBGL(s,l,0,u,0,d);let g=0;for(let b=0;b<d;b++)g+=u[b];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function ag(r,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let h=a||t.has("WEBGL_draw_buffers"),l=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=a||t.has("OES_texture_float"),R=x&&M,v=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:v}}function og(r){let t=this,e=null,i=0,n=!1,s=!1,a=new nn,o=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=l(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?l(null):h();else{let y=s?0:i,x=y*4,M=p.clippingState||null;c.value=M,M=l(g,d,x,f);for(let R=0;R!==x;++R)M[R]=e[R];p.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function l(u,d,f,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==b;++x,M+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}function cg(r){let t=new WeakMap;function e(a,o){return o===oc?a.mapping=Ts:o===cc&&(a.mapping=As),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===oc||o===cc)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new mc(c.height/2);return h.fromEquirectangularTexture(r,a),t.set(a,h),a.addEventListener("dispose",n),e(h.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var li=class extends va{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_s=4,iu=[.125,.215,.35,.446,.526,.582],Bn=20,Yo=new li,nu=new Dt,jo=null,Ko=0,Qo=0,On=(1+Math.sqrt(5))/2,vs=1/On,su=[new _(1,1,1),new _(-1,1,1),new _(1,1,-1),new _(-1,1,-1),new _(0,On,vs),new _(0,On,-vs),new _(vs,0,On),new _(-vs,0,On),new _(On,vs,0),new _(-On,vs,0)],Ds=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){jo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jo,Ko,Qo),t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ee,minFilter:ee,generateMipmaps:!1,type:on,format:de,colorSpace:Ce,depthBuffer:!1},n=ru(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hg(s)),this._blurMaterial=lg(s,t,e)}return n}_compileMaterial(t){let e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,Yo)}_sceneToCubeUV(t,e,i,n){let o=new Ue(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(nu),l.toneMapping=Vi,l.autoClear=!1;let f=new qe({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new gt(new Fe,f),b=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,b=!0):(f.color.copy(nu),b=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(h[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,h[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,h[p]));let x=this._cubeSize;Jr(n,y*x,p>2?x:0,x,x),l.setRenderTarget(n),b&&l.render(g,o),l.render(t,o)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=d,l.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Ts||t.mapping===As;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;Jr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Yo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=su[(n-1)%su.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new gt(this._lodPlanes[n],h),d=h.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Bn-1),b=s/g,m=isFinite(s)?1+Math.floor(l*b):Bn;m>Bn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bn}`);let p=[],y=0;for(let w=0;w<Bn;++w){let A=w/b,E=Math.exp(-A*A/2);p.push(E),w===0?y+=E:w<m&&(y+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;let M=this._sizeLods[n],R=3*M*(n>x-_s?n-x+_s:0),v=4*(this._cubeSize-M);Jr(e,R,v,3*M,2*M),c.setRenderTarget(e),c.render(u,Yo)}};function hg(r){let t=[],e=[],i=[],n=r,s=r-_s+1+iu.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let c=1/o;a>r-_s?c=iu[a-r+_s-1]:a===0&&(c=0),i.push(c);let h=1/(o-2),l=-h,u=1+h,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,g=6,b=3,m=2,p=1,y=new Float32Array(b*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let v=0;v<f;v++){let w=v%3*2/3-1,A=v>2?0:-1,E=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];y.set(E,b*g*v),x.set(d,m*g*v);let S=[v,v,v,v,v,v];M.set(S,p*g*v)}let R=new he;R.setAttribute("position",new Vt(y,b)),R.setAttribute("uv",new Vt(x,m)),R.setAttribute("faceIndex",new Vt(M,p)),t.push(R),n>_s&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ru(r,t,e){let i=new ye(r,t,e);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function lg(r,t,e){let i=new Float32Array(Bn),n=new _(0,1,0);return new re({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:$c(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function au(){return new re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function ou(){return new re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}function ug(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let c=o.mapping,h=c===oc||c===cc,l=c===Ts||c===As;if(h||l)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Ds(r)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(h&&u&&u.height>0||l&&u&&n(u)){e===null&&(e=new Ds(r));let d=h?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function n(o){let c=0,h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function s(o){let c=o.target;c.removeEventListener("dispose",s);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function dg(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function fg(r,t,e,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let b=d.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)t.remove(b[m])}d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let b=f[g];for(let m=0,p=b.length;m<p;m++)t.update(b[m],r.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,g=u.attributes.position,b=0;if(f!==null){let y=f.array;b=f.version;for(let x=0,M=y.length;x<M;x+=3){let R=y[x+0],v=y[x+1],w=y[x+2];d.push(R,v,v,w,w,R)}}else if(g!==void 0){let y=g.array;b=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let R=x+0,v=x+1,w=x+2;d.push(R,v,v,w,w,R)}}else return;let m=new(sd(d)?ba:Is)(d,1);m.version=b;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function l(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:l}}function pg(r,t,e,i){let n=i.isWebGL2,s;function a(f){s=f}let o,c;function h(f){o=f.type,c=f.bytesPerElement}function l(f,g){r.drawElements(s,g,o,f*c),e.update(g,s,1)}function u(f,g,b){if(b===0)return;let m,p;if(n)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,f*c,b),e.update(g,s,b)}function d(f,g,b){if(b===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<b;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,o,f,0,b);let p=0;for(let y=0;y<b;y++)p+=g[y];e.update(p,s,1)}}this.setMode=a,this.setIndex=h,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function mg(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function gg(r,t){return r[0]-t[0]}function bg(r,t){return Math.abs(t[1])-Math.abs(r[1])}function vg(r,t,e){let i={},n=new Float32Array(8),s=new WeakMap,a=new ne,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,l,u){let d=h.morphTargetInfluences;if(t.isWebGL2===!0){let f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=f!==void 0?f.length:0,b=s.get(l);if(b===void 0||b.count!==g){let k=function(){V.dispose(),s.delete(l),l.removeEventListener("dispose",k)};b!==void 0&&b.texture.dispose();let y=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,R=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],w=l.morphAttributes.color||[],A=0;y===!0&&(A=1),x===!0&&(A=2),M===!0&&(A=3);let E=l.attributes.position.count*A,S=1;E>t.maxTextureSize&&(S=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let z=new Float32Array(E*S*4*g),V=new ma(z,E,S,g);V.type=rn,V.needsUpdate=!0;let it=A*4;for(let P=0;P<g;P++){let L=R[P],O=v[P],U=w[P],I=E*S*4*P;for(let B=0;B<L.count;B++){let W=B*it;y===!0&&(a.fromBufferAttribute(L,B),z[I+W+0]=a.x,z[I+W+1]=a.y,z[I+W+2]=a.z,z[I+W+3]=0),x===!0&&(a.fromBufferAttribute(O,B),z[I+W+4]=a.x,z[I+W+5]=a.y,z[I+W+6]=a.z,z[I+W+7]=0),M===!0&&(a.fromBufferAttribute(U,B),z[I+W+8]=a.x,z[I+W+9]=a.y,z[I+W+10]=a.z,z[I+W+11]=U.itemSize===4?a.w:1)}}b={count:g,texture:V,size:new dt(E,S)},s.set(l,b),l.addEventListener("dispose",k)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=l.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",b.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",b.size)}else{let f=d===void 0?0:d.length,g=i[l.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];i[l.id]=g}for(let x=0;x<f;x++){let M=g[x];M[0]=x,M[1]=d[x]}g.sort(bg);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(gg);let b=l.morphAttributes.position,m=l.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=o[x],R=M[0],v=M[1];R!==Number.MAX_SAFE_INTEGER&&v?(b&&l.getAttribute("morphTarget"+x)!==b[R]&&l.setAttribute("morphTarget"+x,b[R]),m&&l.getAttribute("morphNormal"+x)!==m[R]&&l.setAttribute("morphNormal"+x,m[R]),n[x]=v,p+=v):(b&&l.hasAttribute("morphTarget"+x)===!0&&l.deleteAttribute("morphTarget"+x),m&&l.hasAttribute("morphNormal"+x)===!0&&l.deleteAttribute("morphNormal"+x),n[x]=0)}let y=l.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:c}}function xg(r,t,e,i){let n=new WeakMap;function s(c){let h=i.render.frame,l=c.geometry,u=t.get(c,l);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;n.get(d)!==h&&(d.update(),n.set(d,h))}return u}function a(){n=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}var qn=class extends Ye{constructor(t,e,i,n,s,a,o,c,h,l){if(l=l!==void 0?l:Vn,l!==Vn&&l!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===Vn&&(i=bn),i===void 0&&l===Rs&&(i=Hn),super(null,n,s,a,o,c,l,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ee,this.minFilter=c!==void 0?c:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},cd=new Ye,hd=new qn(1,1);hd.compareFunction=nd;var ld=new ma,ud=new fc,dd=new xa,cu=[],hu=[],lu=new Float32Array(16),uu=new Float32Array(9),du=new Float32Array(4);function Bs(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=cu[n];if(s===void 0&&(s=new Float32Array(n),cu[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ne(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ze(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function za(r,t){let e=hu[t];e===void 0&&(e=new Int32Array(t),hu[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function yg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function _g(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2fv(this.addr,t),ze(e,t)}}function Mg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;r.uniform3fv(this.addr,t),ze(e,t)}}function wg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4fv(this.addr,t),ze(e,t)}}function Eg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Ne(e,i))return;du.set(i),r.uniformMatrix2fv(this.addr,!1,du),ze(e,i)}}function Sg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Ne(e,i))return;uu.set(i),r.uniformMatrix3fv(this.addr,!1,uu),ze(e,i)}}function Tg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Ne(e,i))return;lu.set(i),r.uniformMatrix4fv(this.addr,!1,lu),ze(e,i)}}function Ag(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Rg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2iv(this.addr,t),ze(e,t)}}function Cg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3iv(this.addr,t),ze(e,t)}}function Pg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4iv(this.addr,t),ze(e,t)}}function Lg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Ig(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2uiv(this.addr,t),ze(e,t)}}function Fg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3uiv(this.addr,t),ze(e,t)}}function Dg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4uiv(this.addr,t),ze(e,t)}}function kg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?hd:cd;e.setTexture2D(t||s,n)}function Ug(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||ud,n)}function Ng(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||dd,n)}function zg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||ld,n)}function Og(r){switch(r){case 5126:return yg;case 35664:return _g;case 35665:return Mg;case 35666:return wg;case 35674:return Eg;case 35675:return Sg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Ig;case 36295:return Fg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return zg}}function Bg(r,t){r.uniform1fv(this.addr,t)}function Hg(r,t){let e=Bs(t,this.size,2);r.uniform2fv(this.addr,e)}function Vg(r,t){let e=Bs(t,this.size,3);r.uniform3fv(this.addr,e)}function Gg(r,t){let e=Bs(t,this.size,4);r.uniform4fv(this.addr,e)}function Wg(r,t){let e=Bs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function qg(r,t){let e=Bs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Xg(r,t){let e=Bs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Yg(r,t){r.uniform1iv(this.addr,t)}function jg(r,t){r.uniform2iv(this.addr,t)}function Kg(r,t){r.uniform3iv(this.addr,t)}function Qg(r,t){r.uniform4iv(this.addr,t)}function Zg(r,t){r.uniform1uiv(this.addr,t)}function Jg(r,t){r.uniform2uiv(this.addr,t)}function $g(r,t){r.uniform3uiv(this.addr,t)}function tb(r,t){r.uniform4uiv(this.addr,t)}function eb(r,t,e){let i=this.cache,n=t.length,s=za(e,n);Ne(i,s)||(r.uniform1iv(this.addr,s),ze(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||cd,s[a])}function ib(r,t,e){let i=this.cache,n=t.length,s=za(e,n);Ne(i,s)||(r.uniform1iv(this.addr,s),ze(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||ud,s[a])}function nb(r,t,e){let i=this.cache,n=t.length,s=za(e,n);Ne(i,s)||(r.uniform1iv(this.addr,s),ze(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||dd,s[a])}function sb(r,t,e){let i=this.cache,n=t.length,s=za(e,n);Ne(i,s)||(r.uniform1iv(this.addr,s),ze(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||ld,s[a])}function rb(r){switch(r){case 5126:return Bg;case 35664:return Hg;case 35665:return Vg;case 35666:return Gg;case 35674:return Wg;case 35675:return qg;case 35676:return Xg;case 5124:case 35670:return Yg;case 35667:case 35671:return jg;case 35668:case 35672:return Kg;case 35669:case 35673:return Qg;case 5125:return Zg;case 36294:return Jg;case 36295:return $g;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return sb}}var gc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Og(e.type)}},bc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rb(e.type)}},vc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},Zo=/(\w+)(\])?(\[|\.)?/g;function fu(r,t){r.seq.push(t),r.map[t.id]=t}function ab(r,t,e){let i=r.name,n=i.length;for(Zo.lastIndex=0;;){let s=Zo.exec(i),a=Zo.lastIndex,o=s[1],c=s[2]==="]",h=s[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===n){fu(e,h===void 0?new gc(o,r,t):new bc(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new vc(o),fu(e,u)),e=u}}}var Es=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);ab(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function pu(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var ob=37297,cb=0;function hb(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function lb(r){let t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(r),i;switch(t===e?i="":t===la&&e===ha?i="LinearDisplayP3ToLinearSRGB":t===ha&&e===la&&(i="LinearSRGBToLinearDisplayP3"),r){case Ce:case Na:return[i,"LinearTransferOETF"];case fe:case Zc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function mu(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+hb(r.getShaderSource(t),a)}else return n}function ub(r,t){let e=lb(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function db(r,t){let e;switch(t){case gf:e="Linear";break;case bf:e="Reinhard";break;case vf:e="OptimizedCineon";break;case xf:e="ACESFilmic";break;case _f:e="AgX";break;case yf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function fb(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function pb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ms).join(`
`)}function mb(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gb(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ms(r){return r!==""}function gu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(r){return r.replace(bb,xb)}var vb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xb(r,t){let e=jt[t];if(e===void 0){let i=vb.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return xc(e)}var yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(r){return r.replace(yb,_b)}function _b(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function xu(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Mb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Wu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===en&&(t="SHADOWMAP_TYPE_VSM"),t}function wb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Eb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function Sb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qu:t="ENVMAP_BLENDING_MULTIPLY";break;case pf:t="ENVMAP_BLENDING_MIX";break;case mf:t="ENVMAP_BLENDING_ADD";break}return t}function Tb(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Ab(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Mb(e),h=wb(e),l=Eb(e),u=Sb(e),d=Tb(e),f=e.isWebGL2?"":fb(e),g=pb(e),b=mb(s),m=n.createProgram(),p,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Ms).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Ms).join(`
`),y.length>0&&(y+=`
`)):(p=[xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),y=[f,xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?jt.tonemapping_pars_fragment:"",e.toneMapping!==Vi?db("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,ub("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),a=xc(a),a=gu(a,e),a=bu(a,e),o=xc(o),o=gu(o,e),o=bu(o,e),a=vu(a),o=vu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=x+p+a,R=x+y+o,v=pu(n,n.VERTEX_SHADER,M),w=pu(n,n.FRAGMENT_SHADER,R);n.attachShader(m,v),n.attachShader(m,w),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function A(V){if(r.debug.checkShaderErrors){let it=n.getProgramInfoLog(m).trim(),k=n.getShaderInfoLog(v).trim(),P=n.getShaderInfoLog(w).trim(),L=!0,O=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(L=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,v,w);else{let U=mu(n,v,"vertex"),I=mu(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+it+`
`+U+`
`+I)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(k===""||P==="")&&(O=!1);O&&(V.diagnostics={runnable:L,programLog:it,vertexShader:{log:k,prefix:p},fragmentShader:{log:P,prefix:y}})}n.deleteShader(v),n.deleteShader(w),E=new Es(n,m),S=gb(n,m)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=n.getProgramParameter(m,ob)),z},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cb++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=w,this}var Rb=0,yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new _c(t),e.set(t,i)),i}},_c=class{constructor(t){this.id=Rb++,this.code=t,this.usedTimes=0}};function Cb(r,t,e,i,n,s,a){let o=new ga,c=new yc,h=[],l=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return E===0?"uv":`uv${E}`}function m(E,S,z,V,it){let k=V.fog,P=it.geometry,L=E.isMeshStandardMaterial?V.environment:null,O=(E.isMeshStandardMaterial?e:t).get(E.envMap||L),U=O&&O.mapping===ka?O.image.height:null,I=g[E.type];E.precision!==null&&(f=n.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let B=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,W=B!==void 0?B.length:0,Q=0;P.morphAttributes.position!==void 0&&(Q=1),P.morphAttributes.normal!==void 0&&(Q=2),P.morphAttributes.color!==void 0&&(Q=3);let H,N,q,et;if(I){let $e=Bi[I];H=$e.vertexShader,N=$e.fragmentShader}else H=E.vertexShader,N=E.fragmentShader,c.update(E),q=c.getVertexShaderID(E),et=c.getFragmentShaderID(E);let j=r.getRenderTarget(),st=it.isInstancedMesh===!0,ct=it.isBatchedMesh===!0,ot=!!E.map,Et=!!E.matcap,X=!!O,Bt=!!E.aoMap,St=!!E.lightMap,Rt=!!E.bumpMap,yt=!!E.normalMap,Nt=!!E.displacementMap,Pt=!!E.emissiveMap,D=!!E.metalnessMap,C=!!E.roughnessMap,Z=E.anisotropy>0,lt=E.clearcoat>0,ut=E.iridescence>0,pt=E.sheen>0,Y=E.transmission>0,at=Z&&!!E.anisotropyMap,ht=lt&&!!E.clearcoatMap,It=lt&&!!E.clearcoatNormalMap,Gt=lt&&!!E.clearcoatRoughnessMap,ft=ut&&!!E.iridescenceMap,le=ut&&!!E.iridescenceThicknessMap,te=pt&&!!E.sheenColorMap,Ht=pt&&!!E.sheenRoughnessMap,Ft=!!E.specularMap,Ct=!!E.specularColorMap,Yt=!!E.specularIntensityMap,oe=Y&&!!E.transmissionMap,Me=Y&&!!E.thicknessMap,Zt=!!E.gradientMap,bt=!!E.alphaMap,G=E.alphaTest>0,Mt=!!E.alphaHash,wt=!!E.extensions,zt=!!P.attributes.uv1,kt=!!P.attributes.uv2,pe=!!P.attributes.uv3,me=Vi;return E.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(me=r.toneMapping),{isWebGL2:l,shaderID:I,shaderType:E.type,shaderName:E.name,vertexShader:H,fragmentShader:N,defines:E.defines,customVertexShaderID:q,customFragmentShaderID:et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ct,instancing:st,instancingColor:st&&it.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ce,map:ot,matcap:Et,envMap:X,envMapMode:X&&O.mapping,envMapCubeUVHeight:U,aoMap:Bt,lightMap:St,bumpMap:Rt,normalMap:yt,displacementMap:d&&Nt,emissiveMap:Pt,normalMapObjectSpace:yt&&E.normalMapType===Df,normalMapTangentSpace:yt&&E.normalMapType===id,metalnessMap:D,roughnessMap:C,anisotropy:Z,anisotropyMap:at,clearcoat:lt,clearcoatMap:ht,clearcoatNormalMap:It,clearcoatRoughnessMap:Gt,iridescence:ut,iridescenceMap:ft,iridescenceThicknessMap:le,sheen:pt,sheenColorMap:te,sheenRoughnessMap:Ht,specularMap:Ft,specularColorMap:Ct,specularIntensityMap:Yt,transmission:Y,transmissionMap:oe,thicknessMap:Me,gradientMap:Zt,opaque:E.transparent===!1&&E.blending===yn,alphaMap:bt,alphaTest:G,alphaHash:Mt,combine:E.combine,mapUv:ot&&b(E.map.channel),aoMapUv:Bt&&b(E.aoMap.channel),lightMapUv:St&&b(E.lightMap.channel),bumpMapUv:Rt&&b(E.bumpMap.channel),normalMapUv:yt&&b(E.normalMap.channel),displacementMapUv:Nt&&b(E.displacementMap.channel),emissiveMapUv:Pt&&b(E.emissiveMap.channel),metalnessMapUv:D&&b(E.metalnessMap.channel),roughnessMapUv:C&&b(E.roughnessMap.channel),anisotropyMapUv:at&&b(E.anisotropyMap.channel),clearcoatMapUv:ht&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:It&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:le&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:te&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(E.sheenRoughnessMap.channel),specularMapUv:Ft&&b(E.specularMap.channel),specularColorMapUv:Ct&&b(E.specularColorMap.channel),specularIntensityMapUv:Yt&&b(E.specularIntensityMap.channel),transmissionMapUv:oe&&b(E.transmissionMap.channel),thicknessMapUv:Me&&b(E.thicknessMap.channel),alphaMapUv:bt&&b(E.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(yt||Z),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:zt,vertexUv2s:kt,vertexUv3s:pe,pointsUvs:it.isPoints===!0&&!!P.attributes.uv&&(ot||bt),fog:!!k,useFog:E.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:it.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:Q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:me,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ot&&E.map.isVideoTexture===!0&&ae.getTransfer(E.map.colorSpace)===ve,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ie,flipSided:E.side===Ge,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:wt&&E.extensions.derivatives===!0,extensionFragDepth:wt&&E.extensions.fragDepth===!0,extensionDrawBuffers:wt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:wt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:wt&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let z in E.defines)S.push(z),S.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(y(S,E),x(S,E),S.push(r.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function y(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function M(E){let S=g[E.type],z;if(S){let V=Bi[S];z=vp.clone(V.uniforms)}else z=E.uniforms;return z}function R(E,S){let z;for(let V=0,it=h.length;V<it;V++){let k=h[V];if(k.cacheKey===S){z=k,++z.usedTimes;break}}return z===void 0&&(z=new Ab(r,S,E,s),h.push(z)),z}function v(E){if(--E.usedTimes===0){let S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function w(E){c.remove(E)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:v,releaseShaderCache:w,programs:h,dispose:A}}function Pb(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function Lb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function yu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function _u(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,g,b,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),t++,p}function o(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function c(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||Lb),i.length>1&&i.sort(d||yu),n.length>1&&n.sort(d||yu)}function l(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:c,finish:l,sort:h}}function Ib(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new _u,r.set(i,[a])):n>=s.length?(a=new _u,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Fb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new _,color:new Dt};break;case"SpotLight":e={position:new _,direction:new _,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new _,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new _,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new _,halfWidth:new _,halfHeight:new _};break}return r[t.id]=e,e}}}function Db(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var kb=0;function Ub(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Nb(r,t){let e=new Fb,i=Db(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new _);let s=new _,a=new At,o=new At;function c(l,u){let d=0,f=0,g=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let b=0,m=0,p=0,y=0,x=0,M=0,R=0,v=0,w=0,A=0,E=0;l.sort(Ub);let S=u===!0?Math.PI:1;for(let V=0,it=l.length;V<it;V++){let k=l[V],P=k.color,L=k.intensity,O=k.distance,U=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=P.r*L*S,f+=P.g*L*S,g+=P.b*L*S;else if(k.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(k.sh.coefficients[I],L);E++}else if(k.isDirectionalLight){let I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity*S),k.castShadow){let B=k.shadow,W=i.get(k);W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,n.directionalShadow[b]=W,n.directionalShadowMap[b]=U,n.directionalShadowMatrix[b]=k.shadow.matrix,M++}n.directional[b]=I,b++}else if(k.isSpotLight){let I=e.get(k);I.position.setFromMatrixPosition(k.matrixWorld),I.color.copy(P).multiplyScalar(L*S),I.distance=O,I.coneCos=Math.cos(k.angle),I.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),I.decay=k.decay,n.spot[p]=I;let B=k.shadow;if(k.map&&(n.spotLightMap[w]=k.map,w++,B.updateMatrices(k),k.castShadow&&A++),n.spotLightMatrix[p]=B.matrix,k.castShadow){let W=i.get(k);W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,n.spotShadow[p]=W,n.spotShadowMap[p]=U,v++}p++}else if(k.isRectAreaLight){let I=e.get(k);I.color.copy(P).multiplyScalar(L),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),n.rectArea[y]=I,y++}else if(k.isPointLight){let I=e.get(k);if(I.color.copy(k.color).multiplyScalar(k.intensity*S),I.distance=k.distance,I.decay=k.decay,k.castShadow){let B=k.shadow,W=i.get(k);W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,W.shadowCameraNear=B.camera.near,W.shadowCameraFar=B.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=k.shadow.matrix,R++}n.point[m]=I,m++}else if(k.isHemisphereLight){let I=e.get(k);I.skyColor.copy(k.color).multiplyScalar(L*S),I.groundColor.copy(k.groundColor).multiplyScalar(L*S),n.hemi[x]=I,x++}}y>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=g;let z=n.hash;(z.directionalLength!==b||z.pointLength!==m||z.spotLength!==p||z.rectAreaLength!==y||z.hemiLength!==x||z.numDirectionalShadows!==M||z.numPointShadows!==R||z.numSpotShadows!==v||z.numSpotMaps!==w||z.numLightProbes!==E)&&(n.directional.length=b,n.spot.length=p,n.rectArea.length=y,n.point.length=m,n.hemi.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=v+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,z.directionalLength=b,z.pointLength=m,z.spotLength=p,z.rectAreaLength=y,z.hemiLength=x,z.numDirectionalShadows=M,z.numPointShadows=R,z.numSpotShadows=v,z.numSpotMaps=w,z.numLightProbes=E,n.version=kb++)}function h(l,u){let d=0,f=0,g=0,b=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=l.length;y<x;y++){let M=l[y];if(M.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(M.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let R=n.rectArea[b];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),b++}else if(M.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:h,state:n}}function Mu(r,t){let e=new Nb(r,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function c(u){e.setup(i,u)}function h(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function zb(r,t){let e=new WeakMap;function i(s,a=0){let o=e.get(s),c;return o===void 0?(c=new Mu(r,t),e.set(s,[c])):a>=o.length?(c=new Mu(r,t),o.push(c)):c=o[a],c}function n(){e=new WeakMap}return{get:i,dispose:n}}var Mc=class extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wc=class extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bb=`uniform sampler2D shadow_pass;
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
}`;function Hb(r,t,e){let i=new ur,n=new dt,s=new dt,a=new ne,o=new Mc({depthPacking:Ff}),c=new wc,h={},l=e.maxTextureSize,u={[bi]:Ge,[Ge]:bi,[Ie]:Ie},d=new re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Ob,fragmentShader:Bb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new he;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wu;let p=this.type;this.render=function(v,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;let E=r.getRenderTarget(),S=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),V=r.state;V.setBlending(xn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let it=p!==en&&this.type===en,k=p===en&&this.type!==en;for(let P=0,L=v.length;P<L;P++){let O=v[P],U=O.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;n.copy(U.mapSize);let I=U.getFrameExtents();if(n.multiply(I),s.copy(U.mapSize),(n.x>l||n.y>l)&&(n.x>l&&(s.x=Math.floor(l/I.x),n.x=s.x*I.x,U.mapSize.x=s.x),n.y>l&&(s.y=Math.floor(l/I.y),n.y=s.y*I.y,U.mapSize.y=s.y)),U.map===null||it===!0||k===!0){let W=this.type!==en?{minFilter:Ee,magFilter:Ee}:{};U.map!==null&&U.map.dispose(),U.map=new ye(n.x,n.y,W),U.map.texture.name=O.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();let B=U.getViewportCount();for(let W=0;W<B;W++){let Q=U.getViewport(W);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),V.viewport(a),U.updateMatrices(O,W),i=U.getFrustum(),M(w,A,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===en&&y(U,A),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,S,z)};function y(v,w){let A=t.update(b);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ye(n.x,n.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(w,null,A,d,b,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(w,null,A,f,b,null)}function x(v,w,A,E){let S=null,z=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(z!==void 0)S=z;else if(S=A.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let V=S.uuid,it=w.uuid,k=h[V];k===void 0&&(k={},h[V]=k);let P=k[it];P===void 0&&(P=S.clone(),k[it]=P,w.addEventListener("dispose",R)),S=P}if(S.visible=w.visible,S.wireframe=w.wireframe,E===en?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let V=r.properties.get(S);V.light=A}return S}function M(v,w,A,E,S){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&S===en)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);let it=t.update(v),k=v.material;if(Array.isArray(k)){let P=it.groups;for(let L=0,O=P.length;L<O;L++){let U=P[L],I=k[U.materialIndex];if(I&&I.visible){let B=x(v,I,E,S);v.onBeforeShadow(r,v,w,A,it,B,U),r.renderBufferDirect(A,null,it,B,v,U),v.onAfterShadow(r,v,w,A,it,B,U)}}}else if(k.visible){let P=x(v,k,E,S);v.onBeforeShadow(r,v,w,A,it,P,null),r.renderBufferDirect(A,null,it,P,v,null),v.onAfterShadow(r,v,w,A,it,P,null)}}let V=v.children;for(let it=0,k=V.length;it<k;it++)M(V[it],w,A,E,S)}function R(v){v.target.removeEventListener("dispose",R);for(let A in h){let E=h[A],S=v.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function Vb(r,t,e){let i=e.isWebGL2;function n(){let G=!1,Mt=new ne,wt=null,zt=new ne(0,0,0,0);return{setMask:function(kt){wt!==kt&&!G&&(r.colorMask(kt,kt,kt,kt),wt=kt)},setLocked:function(kt){G=kt},setClear:function(kt,pe,me,Be,$e){$e===!0&&(kt*=Be,pe*=Be,me*=Be),Mt.set(kt,pe,me,Be),zt.equals(Mt)===!1&&(r.clearColor(kt,pe,me,Be),zt.copy(Mt))},reset:function(){G=!1,wt=null,zt.set(-1,0,0,0)}}}function s(){let G=!1,Mt=null,wt=null,zt=null;return{setTest:function(kt){kt?ct(r.DEPTH_TEST):ot(r.DEPTH_TEST)},setMask:function(kt){Mt!==kt&&!G&&(r.depthMask(kt),Mt=kt)},setFunc:function(kt){if(wt!==kt){switch(kt){case of:r.depthFunc(r.NEVER);break;case cf:r.depthFunc(r.ALWAYS);break;case hf:r.depthFunc(r.LESS);break;case aa:r.depthFunc(r.LEQUAL);break;case lf:r.depthFunc(r.EQUAL);break;case uf:r.depthFunc(r.GEQUAL);break;case df:r.depthFunc(r.GREATER);break;case ff:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}wt=kt}},setLocked:function(kt){G=kt},setClear:function(kt){zt!==kt&&(r.clearDepth(kt),zt=kt)},reset:function(){G=!1,Mt=null,wt=null,zt=null}}}function a(){let G=!1,Mt=null,wt=null,zt=null,kt=null,pe=null,me=null,Be=null,$e=null;return{setTest:function(ge){G||(ge?ct(r.STENCIL_TEST):ot(r.STENCIL_TEST))},setMask:function(ge){Mt!==ge&&!G&&(r.stencilMask(ge),Mt=ge)},setFunc:function(ge,ti,Oi){(wt!==ge||zt!==ti||kt!==Oi)&&(r.stencilFunc(ge,ti,Oi),wt=ge,zt=ti,kt=Oi)},setOp:function(ge,ti,Oi){(pe!==ge||me!==ti||Be!==Oi)&&(r.stencilOp(ge,ti,Oi),pe=ge,me=ti,Be=Oi)},setLocked:function(ge){G=ge},setClear:function(ge){$e!==ge&&(r.clearStencil(ge),$e=ge)},reset:function(){G=!1,Mt=null,wt=null,zt=null,kt=null,pe=null,me=null,Be=null,$e=null}}}let o=new n,c=new s,h=new a,l=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,b=[],m=null,p=!1,y=null,x=null,M=null,R=null,v=null,w=null,A=null,E=new Dt(0,0,0),S=0,z=!1,V=null,it=null,k=null,P=null,L=null,O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,I=0,B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(B)[1]),U=I>=1):B.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),U=I>=2);let W=null,Q={},H=r.getParameter(r.SCISSOR_BOX),N=r.getParameter(r.VIEWPORT),q=new ne().fromArray(H),et=new ne().fromArray(N);function j(G,Mt,wt,zt){let kt=new Uint8Array(4),pe=r.createTexture();r.bindTexture(G,pe),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let me=0;me<wt;me++)i&&(G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY)?r.texImage3D(Mt,0,r.RGBA,1,1,zt,0,r.RGBA,r.UNSIGNED_BYTE,kt):r.texImage2D(Mt+me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,kt);return pe}let st={};st[r.TEXTURE_2D]=j(r.TEXTURE_2D,r.TEXTURE_2D,1),st[r.TEXTURE_CUBE_MAP]=j(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(st[r.TEXTURE_2D_ARRAY]=j(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),st[r.TEXTURE_3D]=j(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),ct(r.DEPTH_TEST),c.setFunc(aa),Pt(!1),D(nl),ct(r.CULL_FACE),yt(xn);function ct(G){d[G]!==!0&&(r.enable(G),d[G]=!0)}function ot(G){d[G]!==!1&&(r.disable(G),d[G]=!1)}function Et(G,Mt){return f[G]!==Mt?(r.bindFramebuffer(G,Mt),f[G]=Mt,i&&(G===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Mt),G===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Mt)),!0):!1}function X(G,Mt){let wt=b,zt=!1;if(G)if(wt=g.get(Mt),wt===void 0&&(wt=[],g.set(Mt,wt)),G.isWebGLMultipleRenderTargets){let kt=G.texture;if(wt.length!==kt.length||wt[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,me=kt.length;pe<me;pe++)wt[pe]=r.COLOR_ATTACHMENT0+pe;wt.length=kt.length,zt=!0}}else wt[0]!==r.COLOR_ATTACHMENT0&&(wt[0]=r.COLOR_ATTACHMENT0,zt=!0);else wt[0]!==r.BACK&&(wt[0]=r.BACK,zt=!0);zt&&(e.isWebGL2?r.drawBuffers(wt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(wt))}function Bt(G){return m!==G?(r.useProgram(G),m=G,!0):!1}let St={[sn]:r.FUNC_ADD,[Yd]:r.FUNC_SUBTRACT,[jd]:r.FUNC_REVERSE_SUBTRACT};if(i)St[al]=r.MIN,St[ol]=r.MAX;else{let G=t.get("EXT_blend_minmax");G!==null&&(St[al]=G.MIN_EXT,St[ol]=G.MAX_EXT)}let Rt={[Da]:r.ZERO,[Kd]:r.ONE,[jc]:r.SRC_COLOR,[cr]:r.SRC_ALPHA,[ef]:r.SRC_ALPHA_SATURATE,[$d]:r.DST_COLOR,[Zd]:r.DST_ALPHA,[Qd]:r.ONE_MINUS_SRC_COLOR,[ac]:r.ONE_MINUS_SRC_ALPHA,[tf]:r.ONE_MINUS_DST_COLOR,[Jd]:r.ONE_MINUS_DST_ALPHA,[nf]:r.CONSTANT_COLOR,[sf]:r.ONE_MINUS_CONSTANT_COLOR,[rf]:r.CONSTANT_ALPHA,[af]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(G,Mt,wt,zt,kt,pe,me,Be,$e,ge){if(G===xn){p===!0&&(ot(r.BLEND),p=!1);return}if(p===!1&&(ct(r.BLEND),p=!0),G!==Yc){if(G!==y||ge!==z){if((x!==sn||v!==sn)&&(r.blendEquation(r.FUNC_ADD),x=sn,v=sn),ge)switch(G){case yn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ss:r.blendFunc(r.ONE,r.ONE);break;case sl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case yn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ss:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case sl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,R=null,w=null,A=null,E.set(0,0,0),S=0,y=G,z=ge}return}kt=kt||Mt,pe=pe||wt,me=me||zt,(Mt!==x||kt!==v)&&(r.blendEquationSeparate(St[Mt],St[kt]),x=Mt,v=kt),(wt!==M||zt!==R||pe!==w||me!==A)&&(r.blendFuncSeparate(Rt[wt],Rt[zt],Rt[pe],Rt[me]),M=wt,R=zt,w=pe,A=me),(Be.equals(E)===!1||$e!==S)&&(r.blendColor(Be.r,Be.g,Be.b,$e),E.copy(Be),S=$e),y=G,z=!1}function Nt(G,Mt){G.side===Ie?ot(r.CULL_FACE):ct(r.CULL_FACE);let wt=G.side===Ge;Mt&&(wt=!wt),Pt(wt),G.blending===yn&&G.transparent===!1?yt(xn):yt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),o.setMask(G.colorWrite);let zt=G.stencilWrite;h.setTest(zt),zt&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Z(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ct(r.SAMPLE_ALPHA_TO_COVERAGE):ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(G){V!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),V=G)}function D(G){G!==Wd?(ct(r.CULL_FACE),G!==it&&(G===nl?r.cullFace(r.BACK):G===qd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ot(r.CULL_FACE),it=G}function C(G){G!==k&&(U&&r.lineWidth(G),k=G)}function Z(G,Mt,wt){G?(ct(r.POLYGON_OFFSET_FILL),(P!==Mt||L!==wt)&&(r.polygonOffset(Mt,wt),P=Mt,L=wt)):ot(r.POLYGON_OFFSET_FILL)}function lt(G){G?ct(r.SCISSOR_TEST):ot(r.SCISSOR_TEST)}function ut(G){G===void 0&&(G=r.TEXTURE0+O-1),W!==G&&(r.activeTexture(G),W=G)}function pt(G,Mt,wt){wt===void 0&&(W===null?wt=r.TEXTURE0+O-1:wt=W);let zt=Q[wt];zt===void 0&&(zt={type:void 0,texture:void 0},Q[wt]=zt),(zt.type!==G||zt.texture!==Mt)&&(W!==wt&&(r.activeTexture(wt),W=wt),r.bindTexture(G,Mt||st[G]),zt.type=G,zt.texture=Mt)}function Y(){let G=Q[W];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function at(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function It(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Gt(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ht(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ft(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ct(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Yt(G){q.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),q.copy(G))}function oe(G){et.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),et.copy(G))}function Me(G,Mt){let wt=u.get(Mt);wt===void 0&&(wt=new WeakMap,u.set(Mt,wt));let zt=wt.get(G);zt===void 0&&(zt=r.getUniformBlockIndex(Mt,G.name),wt.set(G,zt))}function Zt(G,Mt){let zt=u.get(Mt).get(G);l.get(Mt)!==zt&&(r.uniformBlockBinding(Mt,zt,G.__bindingPointIndex),l.set(Mt,zt))}function bt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},W=null,Q={},f={},g=new WeakMap,b=[],m=null,p=!1,y=null,x=null,M=null,R=null,v=null,w=null,A=null,E=new Dt(0,0,0),S=0,z=!1,V=null,it=null,k=null,P=null,L=null,q.set(0,0,r.canvas.width,r.canvas.height),et.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:ct,disable:ot,bindFramebuffer:Et,drawBuffers:X,useProgram:Bt,setBlending:yt,setMaterial:Nt,setFlipSided:Pt,setCullFace:D,setLineWidth:C,setPolygonOffset:Z,setScissorTest:lt,activeTexture:ut,bindTexture:pt,unbindTexture:Y,compressedTexImage2D:at,compressedTexImage3D:ht,texImage2D:Ft,texImage3D:Ct,updateUBOMapping:Me,uniformBlockBinding:Zt,texStorage2D:te,texStorage3D:Ht,texSubImage2D:It,texSubImage3D:Gt,compressedTexSubImage2D:ft,compressedTexSubImage3D:le,scissor:Yt,viewport:oe,reset:bt}}function Gb(r,t,e,i,n,s,a){let o=n.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,C){return f?new OffscreenCanvas(D,C):lr("canvas")}function b(D,C,Z,lt){let ut=1;if((D.width>lt||D.height>lt)&&(ut=lt/Math.max(D.width,D.height)),ut<1||C===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){let pt=C?da:Math.floor,Y=pt(ut*D.width),at=pt(ut*D.height);u===void 0&&(u=g(Y,at));let ht=Z?g(Y,at):u;return ht.width=Y,ht.height=at,ht.getContext("2d").drawImage(D,0,0,Y,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Y+"x"+at+")."),ht}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function m(D){return uc(D.width)&&uc(D.height)}function p(D){return o?!1:D.wrapS!==ni||D.wrapT!==ni||D.minFilter!==Ee&&D.minFilter!==ee}function y(D,C){return D.generateMipmaps&&C&&D.minFilter!==Ee&&D.minFilter!==ee}function x(D){r.generateMipmap(D)}function M(D,C,Z,lt,ut=!1){if(o===!1)return C;if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pt=C;if(C===r.RED&&(Z===r.FLOAT&&(pt=r.R32F),Z===r.HALF_FLOAT&&(pt=r.R16F),Z===r.UNSIGNED_BYTE&&(pt=r.R8)),C===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(pt=r.R8UI),Z===r.UNSIGNED_SHORT&&(pt=r.R16UI),Z===r.UNSIGNED_INT&&(pt=r.R32UI),Z===r.BYTE&&(pt=r.R8I),Z===r.SHORT&&(pt=r.R16I),Z===r.INT&&(pt=r.R32I)),C===r.RG&&(Z===r.FLOAT&&(pt=r.RG32F),Z===r.HALF_FLOAT&&(pt=r.RG16F),Z===r.UNSIGNED_BYTE&&(pt=r.RG8)),C===r.RGBA){let Y=ut?ca:ae.getTransfer(lt);Z===r.FLOAT&&(pt=r.RGBA32F),Z===r.HALF_FLOAT&&(pt=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(pt=Y===ve?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(pt=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(pt=r.RGB5_A1)}return(pt===r.R16F||pt===r.R32F||pt===r.RG16F||pt===r.RG32F||pt===r.RGBA16F||pt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function R(D,C,Z){return y(D,Z)===!0||D.isFramebufferTexture&&D.minFilter!==Ee&&D.minFilter!==ee?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function v(D){return D===Ee||D===oa||D===er?r.NEAREST:r.LINEAR}function w(D){let C=D.target;C.removeEventListener("dispose",w),E(C),C.isVideoTexture&&l.delete(C)}function A(D){let C=D.target;C.removeEventListener("dispose",A),z(C)}function E(D){let C=i.get(D);if(C.__webglInit===void 0)return;let Z=D.source,lt=d.get(Z);if(lt){let ut=lt[C.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&S(D),Object.keys(lt).length===0&&d.delete(Z)}i.remove(D)}function S(D){let C=i.get(D);r.deleteTexture(C.__webglTexture);let Z=D.source,lt=d.get(Z);delete lt[C.__cacheKey],a.memory.textures--}function z(D){let C=D.texture,Z=i.get(D),lt=i.get(C);if(lt.__webglTexture!==void 0&&(r.deleteTexture(lt.__webglTexture),a.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(Z.__webglFramebuffer[ut]))for(let pt=0;pt<Z.__webglFramebuffer[ut].length;pt++)r.deleteFramebuffer(Z.__webglFramebuffer[ut][pt]);else r.deleteFramebuffer(Z.__webglFramebuffer[ut]);Z.__webglDepthbuffer&&r.deleteRenderbuffer(Z.__webglDepthbuffer[ut])}else{if(Array.isArray(Z.__webglFramebuffer))for(let ut=0;ut<Z.__webglFramebuffer.length;ut++)r.deleteFramebuffer(Z.__webglFramebuffer[ut]);else r.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&r.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ut=0;ut<Z.__webglColorRenderbuffer.length;ut++)Z.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(Z.__webglColorRenderbuffer[ut]);Z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ut=0,pt=C.length;ut<pt;ut++){let Y=i.get(C[ut]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(C[ut])}i.remove(C),i.remove(D)}let V=0;function it(){V=0}function k(){let D=V;return D>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+n.maxTextures),V+=1,D}function P(D){let C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function L(D,C){let Z=i.get(D);if(D.isVideoTexture&&Nt(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){let lt=D.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(Z,D,C);return}}e.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+C)}function O(D,C){let Z=i.get(D);if(D.version>0&&Z.__version!==D.version){q(Z,D,C);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+C)}function U(D,C){let Z=i.get(D);if(D.version>0&&Z.__version!==D.version){q(Z,D,C);return}e.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+C)}function I(D,C){let Z=i.get(D);if(D.version>0&&Z.__version!==D.version){et(Z,D,C);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+C)}let B={[Je]:r.REPEAT,[ni]:r.CLAMP_TO_EDGE,[hr]:r.MIRRORED_REPEAT},W={[Ee]:r.NEAREST,[oa]:r.NEAREST_MIPMAP_NEAREST,[er]:r.NEAREST_MIPMAP_LINEAR,[ee]:r.LINEAR,[Kc]:r.LINEAR_MIPMAP_NEAREST,[si]:r.LINEAR_MIPMAP_LINEAR},Q={[kf]:r.NEVER,[Hf]:r.ALWAYS,[Uf]:r.LESS,[nd]:r.LEQUAL,[Nf]:r.EQUAL,[Bf]:r.GEQUAL,[zf]:r.GREATER,[Of]:r.NOTEQUAL};function H(D,C,Z){if(Z?(r.texParameteri(D,r.TEXTURE_WRAP_S,B[C.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,B[C.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,B[C.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,W[C.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,W[C.minFilter])):(r.texParameteri(D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(C.wrapS!==ni||C.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(D,r.TEXTURE_MAG_FILTER,v(C.magFilter)),r.texParameteri(D,r.TEXTURE_MIN_FILTER,v(C.minFilter)),C.minFilter!==Ee&&C.minFilter!==ee&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Q[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let lt=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===Ee||C.minFilter!==er&&C.minFilter!==si||C.type===rn&&t.has("OES_texture_float_linear")===!1||o===!1&&C.type===on&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(r.texParameterf(D,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,n.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function N(D,C){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",w));let lt=C.source,ut=d.get(lt);ut===void 0&&(ut={},d.set(lt,ut));let pt=P(C);if(pt!==D.__cacheKey){ut[pt]===void 0&&(ut[pt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),ut[pt].usedTimes++;let Y=ut[D.__cacheKey];Y!==void 0&&(ut[D.__cacheKey].usedTimes--,Y.usedTimes===0&&S(C)),D.__cacheKey=pt,D.__webglTexture=ut[pt].texture}return Z}function q(D,C,Z){let lt=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(lt=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(lt=r.TEXTURE_3D);let ut=N(D,C),pt=C.source;e.bindTexture(lt,D.__webglTexture,r.TEXTURE0+Z);let Y=i.get(pt);if(pt.version!==Y.__version||ut===!0){e.activeTexture(r.TEXTURE0+Z);let at=ae.getPrimaries(ae.workingColorSpace),ht=C.colorSpace===ci?null:ae.getPrimaries(C.colorSpace),It=C.colorSpace===ci||at===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Gt=p(C)&&m(C.image)===!1,ft=b(C.image,Gt,!1,n.maxTextureSize);ft=Pt(C,ft);let le=m(ft)||o,te=s.convert(C.format,C.colorSpace),Ht=s.convert(C.type),Ft=M(C.internalFormat,te,Ht,C.colorSpace,C.isVideoTexture);H(lt,C,le);let Ct,Yt=C.mipmaps,oe=o&&C.isVideoTexture!==!0&&Ft!==$u,Me=Y.__version===void 0||ut===!0,Zt=R(C,ft,le);if(C.isDepthTexture)Ft=r.DEPTH_COMPONENT,o?C.type===rn?Ft=r.DEPTH_COMPONENT32F:C.type===bn?Ft=r.DEPTH_COMPONENT24:C.type===Hn?Ft=r.DEPTH24_STENCIL8:Ft=r.DEPTH_COMPONENT16:C.type===rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Vn&&Ft===r.DEPTH_COMPONENT&&C.type!==Qc&&C.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=bn,Ht=s.convert(C.type)),C.format===Rs&&Ft===r.DEPTH_COMPONENT&&(Ft=r.DEPTH_STENCIL,C.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Hn,Ht=s.convert(C.type))),Me&&(oe?e.texStorage2D(r.TEXTURE_2D,1,Ft,ft.width,ft.height):e.texImage2D(r.TEXTURE_2D,0,Ft,ft.width,ft.height,0,te,Ht,null));else if(C.isDataTexture)if(Yt.length>0&&le){oe&&Me&&e.texStorage2D(r.TEXTURE_2D,Zt,Ft,Yt[0].width,Yt[0].height);for(let bt=0,G=Yt.length;bt<G;bt++)Ct=Yt[bt],oe?e.texSubImage2D(r.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,te,Ht,Ct.data):e.texImage2D(r.TEXTURE_2D,bt,Ft,Ct.width,Ct.height,0,te,Ht,Ct.data);C.generateMipmaps=!1}else oe?(Me&&e.texStorage2D(r.TEXTURE_2D,Zt,Ft,ft.width,ft.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft.width,ft.height,te,Ht,ft.data)):e.texImage2D(r.TEXTURE_2D,0,Ft,ft.width,ft.height,0,te,Ht,ft.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){oe&&Me&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,Ft,Yt[0].width,Yt[0].height,ft.depth);for(let bt=0,G=Yt.length;bt<G;bt++)Ct=Yt[bt],C.format!==de?te!==null?oe?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Ct.width,Ct.height,ft.depth,te,Ct.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,Ft,Ct.width,Ct.height,ft.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Ct.width,Ct.height,ft.depth,te,Ht,Ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,bt,Ft,Ct.width,Ct.height,ft.depth,0,te,Ht,Ct.data)}else{oe&&Me&&e.texStorage2D(r.TEXTURE_2D,Zt,Ft,Yt[0].width,Yt[0].height);for(let bt=0,G=Yt.length;bt<G;bt++)Ct=Yt[bt],C.format!==de?te!==null?oe?e.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,te,Ct.data):e.compressedTexImage2D(r.TEXTURE_2D,bt,Ft,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage2D(r.TEXTURE_2D,bt,0,0,Ct.width,Ct.height,te,Ht,Ct.data):e.texImage2D(r.TEXTURE_2D,bt,Ft,Ct.width,Ct.height,0,te,Ht,Ct.data)}else if(C.isDataArrayTexture)oe?(Me&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Zt,Ft,ft.width,ft.height,ft.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,te,Ht,ft.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ft,ft.width,ft.height,ft.depth,0,te,Ht,ft.data);else if(C.isData3DTexture)oe?(Me&&e.texStorage3D(r.TEXTURE_3D,Zt,Ft,ft.width,ft.height,ft.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,te,Ht,ft.data)):e.texImage3D(r.TEXTURE_3D,0,Ft,ft.width,ft.height,ft.depth,0,te,Ht,ft.data);else if(C.isFramebufferTexture){if(Me)if(oe)e.texStorage2D(r.TEXTURE_2D,Zt,Ft,ft.width,ft.height);else{let bt=ft.width,G=ft.height;for(let Mt=0;Mt<Zt;Mt++)e.texImage2D(r.TEXTURE_2D,Mt,Ft,bt,G,0,te,Ht,null),bt>>=1,G>>=1}}else if(Yt.length>0&&le){oe&&Me&&e.texStorage2D(r.TEXTURE_2D,Zt,Ft,Yt[0].width,Yt[0].height);for(let bt=0,G=Yt.length;bt<G;bt++)Ct=Yt[bt],oe?e.texSubImage2D(r.TEXTURE_2D,bt,0,0,te,Ht,Ct):e.texImage2D(r.TEXTURE_2D,bt,Ft,te,Ht,Ct);C.generateMipmaps=!1}else oe?(Me&&e.texStorage2D(r.TEXTURE_2D,Zt,Ft,ft.width,ft.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,te,Ht,ft)):e.texImage2D(r.TEXTURE_2D,0,Ft,te,Ht,ft);y(C,le)&&x(lt),Y.__version=pt.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function et(D,C,Z){if(C.image.length!==6)return;let lt=N(D,C),ut=C.source;e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Z);let pt=i.get(ut);if(ut.version!==pt.__version||lt===!0){e.activeTexture(r.TEXTURE0+Z);let Y=ae.getPrimaries(ae.workingColorSpace),at=C.colorSpace===ci?null:ae.getPrimaries(C.colorSpace),ht=C.colorSpace===ci||Y===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let It=C.isCompressedTexture||C.image[0].isCompressedTexture,Gt=C.image[0]&&C.image[0].isDataTexture,ft=[];for(let bt=0;bt<6;bt++)!It&&!Gt?ft[bt]=b(C.image[bt],!1,!0,n.maxCubemapSize):ft[bt]=Gt?C.image[bt].image:C.image[bt],ft[bt]=Pt(C,ft[bt]);let le=ft[0],te=m(le)||o,Ht=s.convert(C.format,C.colorSpace),Ft=s.convert(C.type),Ct=M(C.internalFormat,Ht,Ft,C.colorSpace),Yt=o&&C.isVideoTexture!==!0,oe=pt.__version===void 0||lt===!0,Me=R(C,le,te);H(r.TEXTURE_CUBE_MAP,C,te);let Zt;if(It){Yt&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Me,Ct,le.width,le.height);for(let bt=0;bt<6;bt++){Zt=ft[bt].mipmaps;for(let G=0;G<Zt.length;G++){let Mt=Zt[G];C.format!==de?Ht!==null?Yt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,G,0,0,Mt.width,Mt.height,Ht,Mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,G,Ct,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,G,0,0,Mt.width,Mt.height,Ht,Ft,Mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,G,Ct,Mt.width,Mt.height,0,Ht,Ft,Mt.data)}}}else{Zt=C.mipmaps,Yt&&oe&&(Zt.length>0&&Me++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Me,Ct,ft[0].width,ft[0].height));for(let bt=0;bt<6;bt++)if(Gt){Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,ft[bt].width,ft[bt].height,Ht,Ft,ft[bt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Ct,ft[bt].width,ft[bt].height,0,Ht,Ft,ft[bt].data);for(let G=0;G<Zt.length;G++){let wt=Zt[G].image[bt].image;Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,G+1,0,0,wt.width,wt.height,Ht,Ft,wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,G+1,Ct,wt.width,wt.height,0,Ht,Ft,wt.data)}}else{Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Ht,Ft,ft[bt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Ct,Ht,Ft,ft[bt]);for(let G=0;G<Zt.length;G++){let Mt=Zt[G];Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,G+1,0,0,Ht,Ft,Mt.image[bt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,G+1,Ct,Ht,Ft,Mt.image[bt])}}}y(C,te)&&x(r.TEXTURE_CUBE_MAP),pt.__version=ut.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function j(D,C,Z,lt,ut,pt){let Y=s.convert(Z.format,Z.colorSpace),at=s.convert(Z.type),ht=M(Z.internalFormat,Y,at,Z.colorSpace);if(!i.get(C).__hasExternalTextures){let Gt=Math.max(1,C.width>>pt),ft=Math.max(1,C.height>>pt);ut===r.TEXTURE_3D||ut===r.TEXTURE_2D_ARRAY?e.texImage3D(ut,pt,ht,Gt,ft,C.depth,0,Y,at,null):e.texImage2D(ut,pt,ht,Gt,ft,0,Y,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,D),yt(C)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,ut,i.get(Z).__webglTexture,0,Rt(C)):(ut===r.TEXTURE_2D||ut>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,lt,ut,i.get(Z).__webglTexture,pt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(D,C,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,D),C.depthBuffer&&!C.stencilBuffer){let lt=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(Z||yt(C)){let ut=C.depthTexture;ut&&ut.isDepthTexture&&(ut.type===rn?lt=r.DEPTH_COMPONENT32F:ut.type===bn&&(lt=r.DEPTH_COMPONENT24));let pt=Rt(C);yt(C)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt,lt,C.width,C.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,pt,lt,C.width,C.height)}else r.renderbufferStorage(r.RENDERBUFFER,lt,C.width,C.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,D)}else if(C.depthBuffer&&C.stencilBuffer){let lt=Rt(C);Z&&yt(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,r.DEPTH24_STENCIL8,C.width,C.height):yt(C)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,r.DEPTH24_STENCIL8,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,D)}else{let lt=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ut=0;ut<lt.length;ut++){let pt=lt[ut],Y=s.convert(pt.format,pt.colorSpace),at=s.convert(pt.type),ht=M(pt.internalFormat,Y,at,pt.colorSpace),It=Rt(C);Z&&yt(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,It,ht,C.width,C.height):yt(C)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,It,ht,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,ht,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ct(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),L(C.depthTexture,0);let lt=i.get(C.depthTexture).__webglTexture,ut=Rt(C);if(C.depthTexture.format===Vn)yt(C)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,lt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,lt,0);else if(C.depthTexture.format===Rs)yt(C)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,lt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function ot(D){let C=i.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ct(C.__webglFramebuffer,D)}else if(Z){C.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[lt]),C.__webglDepthbuffer[lt]=r.createRenderbuffer(),st(C.__webglDepthbuffer[lt],D,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),st(C.__webglDepthbuffer,D,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(D,C,Z){let lt=i.get(D);C!==void 0&&j(lt.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&ot(D)}function X(D){let C=D.texture,Z=i.get(D),lt=i.get(C);D.addEventListener("dispose",A),D.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture()),lt.__version=C.version,a.memory.textures++);let ut=D.isWebGLCubeRenderTarget===!0,pt=D.isWebGLMultipleRenderTargets===!0,Y=m(D)||o;if(ut){Z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(o&&C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer[at]=[];for(let ht=0;ht<C.mipmaps.length;ht++)Z.__webglFramebuffer[at][ht]=r.createFramebuffer()}else Z.__webglFramebuffer[at]=r.createFramebuffer()}else{if(o&&C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer=[];for(let at=0;at<C.mipmaps.length;at++)Z.__webglFramebuffer[at]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(pt)if(n.drawBuffers){let at=D.texture;for(let ht=0,It=at.length;ht<It;ht++){let Gt=i.get(at[ht]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&D.samples>0&&yt(D)===!1){let at=pt?C:[C];Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ht=0;ht<at.length;ht++){let It=at[ht];Z.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[ht]);let Gt=s.convert(It.format,It.colorSpace),ft=s.convert(It.type),le=M(It.internalFormat,Gt,ft,It.colorSpace,D.isXRRenderTarget===!0),te=Rt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,te,le,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,Z.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),st(Z.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){e.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture),H(r.TEXTURE_CUBE_MAP,C,Y);for(let at=0;at<6;at++)if(o&&C.mipmaps&&C.mipmaps.length>0)for(let ht=0;ht<C.mipmaps.length;ht++)j(Z.__webglFramebuffer[at][ht],D,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,ht);else j(Z.__webglFramebuffer[at],D,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);y(C,Y)&&x(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){let at=D.texture;for(let ht=0,It=at.length;ht<It;ht++){let Gt=at[ht],ft=i.get(Gt);e.bindTexture(r.TEXTURE_2D,ft.__webglTexture),H(r.TEXTURE_2D,Gt,Y),j(Z.__webglFramebuffer,D,Gt,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,0),y(Gt,Y)&&x(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(o?at=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,lt.__webglTexture),H(at,C,Y),o&&C.mipmaps&&C.mipmaps.length>0)for(let ht=0;ht<C.mipmaps.length;ht++)j(Z.__webglFramebuffer[ht],D,C,r.COLOR_ATTACHMENT0,at,ht);else j(Z.__webglFramebuffer,D,C,r.COLOR_ATTACHMENT0,at,0);y(C,Y)&&x(at),e.unbindTexture()}D.depthBuffer&&ot(D)}function Bt(D){let C=m(D)||o,Z=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let lt=0,ut=Z.length;lt<ut;lt++){let pt=Z[lt];if(y(pt,C)){let Y=D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,at=i.get(pt).__webglTexture;e.bindTexture(Y,at),x(Y),e.unbindTexture()}}}function St(D){if(o&&D.samples>0&&yt(D)===!1){let C=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],Z=D.width,lt=D.height,ut=r.COLOR_BUFFER_BIT,pt=[],Y=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=i.get(D),ht=D.isWebGLMultipleRenderTargets===!0;if(ht)for(let It=0;It<C.length;It++)e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let It=0;It<C.length;It++){pt.push(r.COLOR_ATTACHMENT0+It),D.depthBuffer&&pt.push(Y);let Gt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Gt===!1&&(D.depthBuffer&&(ut|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ut|=r.STENCIL_BUFFER_BIT)),ht&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,at.__webglColorRenderbuffer[It]),Gt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Y]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Y])),ht){let ft=i.get(C[It]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ft,0)}r.blitFramebuffer(0,0,Z,lt,0,0,Z,lt,ut,r.NEAREST),h&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let It=0;It<C.length;It++){e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,at.__webglColorRenderbuffer[It]);let Gt=i.get(C[It]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,Gt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Rt(D){return Math.min(n.maxSamples,D.samples)}function yt(D){let C=i.get(D);return o&&D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Nt(D){let C=a.render.frame;l.get(D)!==C&&(l.set(D,C),D.update())}function Pt(D,C){let Z=D.colorSpace,lt=D.format,ut=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===lc||Z!==Ce&&Z!==ci&&(ae.getTransfer(Z)===ve?o===!1?t.has("EXT_sRGB")===!0&&lt===de?(D.format=lc,D.minFilter=ee,D.generateMipmaps=!1):C=fa.sRGBToLinear(C):(lt!==de||ut!==We)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),C}this.allocateTextureUnit=k,this.resetTextureUnits=it,this.setTexture2D=L,this.setTexture2DArray=O,this.setTexture3D=U,this.setTextureCube=I,this.rebindTextures=Et,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=j,this.useMultisampledRTT=yt}function Wb(r,t,e){let i=e.isWebGL2;function n(s,a=ci){let o,c=ae.getTransfer(a);if(s===We)return r.UNSIGNED_BYTE;if(s===ju)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ku)return r.UNSIGNED_SHORT_5_5_5_1;if(s===wf)return r.BYTE;if(s===Ef)return r.SHORT;if(s===Qc)return r.UNSIGNED_SHORT;if(s===Yu)return r.INT;if(s===bn)return r.UNSIGNED_INT;if(s===rn)return r.FLOAT;if(s===on)return i?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Sf)return r.ALPHA;if(s===de)return r.RGBA;if(s===Tf)return r.LUMINANCE;if(s===Af)return r.LUMINANCE_ALPHA;if(s===Vn)return r.DEPTH_COMPONENT;if(s===Rs)return r.DEPTH_STENCIL;if(s===lc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Rf)return r.RED;if(s===Qu)return r.RED_INTEGER;if(s===Cf)return r.RG;if(s===Zu)return r.RG_INTEGER;if(s===Ju)return r.RGBA_INTEGER;if(s===Eo||s===So||s===To||s===Ao)if(c===ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Eo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===To)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Eo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===So)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===To)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ao)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hl||s===ll||s===ul||s===dl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===hl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ll)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ul)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$u)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===fl||s===pl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===fl)return c===ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===pl)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ml||s===gl||s===bl||s===vl||s===xl||s===yl||s===_l||s===Ml||s===wl||s===El||s===Sl||s===Tl||s===Al||s===Rl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ml)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gl)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bl)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vl)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xl)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yl)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_l)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ml)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wl)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===El)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sl)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tl)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Al)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rl)return c===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ro||s===Cl||s===Pl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Ro)return c===ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Pf||s===Ll||s===Il||s===Fl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ro)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ll)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Il)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hn?i?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}var Ec=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ce=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},qb={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,i),p=this._getHandJoint(h,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=l.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qb)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Sc=class extends _n{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,h=null,l=null,u=null,d=null,f=null,g=null,b=e.getContextAttributes(),m=null,p=null,y=[],x=[],M=new dt,R=null,v=new Ue;v.layers.enable(1),v.viewport=new ne;let w=new Ue;w.layers.enable(2),w.viewport=new ne;let A=[v,w],E=new Ec;E.layers.enable(1),E.layers.enable(2);let S=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let N=y[H];return N===void 0&&(N=new rr,y[H]=N),N.getTargetRaySpace()},this.getControllerGrip=function(H){let N=y[H];return N===void 0&&(N=new rr,y[H]=N),N.getGripSpace()},this.getHand=function(H){let N=y[H];return N===void 0&&(N=new rr,y[H]=N),N.getHandSpace()};function V(H){let N=x.indexOf(H.inputSource);if(N===-1)return;let q=y[N];q!==void 0&&(q.update(H.inputSource,H.frame,h||a),q.dispatchEvent({type:H.type,data:H.inputSource}))}function it(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",it),n.removeEventListener("inputsourceschange",k);for(let H=0;H<y.length;H++){let N=x[H];N!==null&&(x[H]=null,y[H].disconnect(N))}S=null,z=null,t.setRenderTarget(m),f=null,d=null,u=null,n=null,p=null,Q.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(H){h=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",it),n.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(M),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let N={antialias:n.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,N),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ye(f.framebufferWidth,f.framebufferHeight,{format:de,type:We,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil})}else{let N=null,q=null,et=null;b.depth&&(et=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,N=b.stencil?Rs:Vn,q=b.stencil?Hn:bn);let j={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(j),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new ye(d.textureWidth,d.textureHeight,{format:de,type:We,depthTexture:new qn(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0});let st=t.properties.get(p);st.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await n.requestReferenceSpace(o),Q.setContext(n),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function k(H){for(let N=0;N<H.removed.length;N++){let q=H.removed[N],et=x.indexOf(q);et>=0&&(x[et]=null,y[et].disconnect(q))}for(let N=0;N<H.added.length;N++){let q=H.added[N],et=x.indexOf(q);if(et===-1){for(let st=0;st<y.length;st++)if(st>=x.length){x.push(q),et=st;break}else if(x[st]===null){x[st]=q,et=st;break}if(et===-1)break}let j=y[et];j&&j.connect(q)}}let P=new _,L=new _;function O(H,N,q){P.setFromMatrixPosition(N.matrixWorld),L.setFromMatrixPosition(q.matrixWorld);let et=P.distanceTo(L),j=N.projectionMatrix.elements,st=q.projectionMatrix.elements,ct=j[14]/(j[10]-1),ot=j[14]/(j[10]+1),Et=(j[9]+1)/j[5],X=(j[9]-1)/j[5],Bt=(j[8]-1)/j[0],St=(st[8]+1)/st[0],Rt=ct*Bt,yt=ct*St,Nt=et/(-Bt+St),Pt=Nt*-Bt;N.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Pt),H.translateZ(Nt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let D=ct+Nt,C=ot+Nt,Z=Rt-Pt,lt=yt+(et-Pt),ut=Et*ot/C*D,pt=X*ot/C*D;H.projectionMatrix.makePerspective(Z,lt,ut,pt,D,C),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function U(H,N){N===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(N.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;E.near=w.near=v.near=H.near,E.far=w.far=v.far=H.far,(S!==E.near||z!==E.far)&&(n.updateRenderState({depthNear:E.near,depthFar:E.far}),S=E.near,z=E.far);let N=H.parent,q=E.cameras;U(E,N);for(let et=0;et<q.length;et++)U(q[et],N);q.length===2?O(E,v,w):E.projectionMatrix.copy(v.projectionMatrix),I(H,E,N)};function I(H,N,q){q===null?H.matrix.copy(N.matrixWorld):(H.matrix.copy(q.matrixWorld),H.matrix.invert(),H.matrix.multiply(N.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(N.projectionMatrix),H.projectionMatrixInverse.copy(N.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ps*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)};let B=null;function W(H,N){if(l=N.getViewerPose(h||a),g=N,l!==null){let q=l.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let et=!1;q.length!==E.cameras.length&&(E.cameras.length=0,et=!0);for(let j=0;j<q.length;j++){let st=q[j],ct=null;if(f!==null)ct=f.getViewport(st);else{let Et=u.getViewSubImage(d,st);ct=Et.viewport,j===0&&(t.setRenderTargetTextures(p,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),t.setRenderTarget(p))}let ot=A[j];ot===void 0&&(ot=new Ue,ot.layers.enable(j),ot.viewport=new ne,A[j]=ot),ot.matrix.fromArray(st.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(st.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(ct.x,ct.y,ct.width,ct.height),j===0&&(E.matrix.copy(ot.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),et===!0&&E.cameras.push(ot)}}for(let q=0;q<y.length;q++){let et=x[q],j=y[q];et!==null&&j!==void 0&&j.update(et,N,h||a)}B&&B(H,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),g=null}let Q=new od;Q.setAnimationLoop(W),this.setAnimationLoop=function(H){B=H},this.dispose=function(){}}};function Xb(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ad(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),l(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Yb(r,t,e,i){let n={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let M=x.program;i.uniformBlockBinding(y,M)}function h(y,x){let M=n[y.id];M===void 0&&(g(y),M=l(y),n[y.id]=M,y.addEventListener("dispose",m));let R=x.program;i.updateUBOMapping(y,R);let v=t.render.frame;s[y.id]!==v&&(d(y),s[y.id]=v)}function l(y){let x=u();y.__bindingPointIndex=x;let M=r.createBuffer(),R=y.__size,v=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=n[y.id],M=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let v=0,w=M.length;v<w;v++){let A=Array.isArray(M[v])?M[v]:[M[v]];for(let E=0,S=A.length;E<S;E++){let z=A[E];if(f(z,v,E,R)===!0){let V=z.__offset,it=Array.isArray(z.value)?z.value:[z.value],k=0;for(let P=0;P<it.length;P++){let L=it[P],O=b(L);typeof L=="number"||typeof L=="boolean"?(z.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,V+k,z.__data)):L.isMatrix3?(z.__data[0]=L.elements[0],z.__data[1]=L.elements[1],z.__data[2]=L.elements[2],z.__data[3]=0,z.__data[4]=L.elements[3],z.__data[5]=L.elements[4],z.__data[6]=L.elements[5],z.__data[7]=0,z.__data[8]=L.elements[6],z.__data[9]=L.elements[7],z.__data[10]=L.elements[8],z.__data[11]=0):(L.toArray(z.__data,k),k+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,x,M,R){let v=y.value,w=x+"_"+M;if(R[w]===void 0)return typeof v=="number"||typeof v=="boolean"?R[w]=v:R[w]=v.clone(),!0;{let A=R[w];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return R[w]=v,!0}else if(A.equals(v)===!1)return A.copy(v),!0}return!1}function g(y){let x=y.uniforms,M=0,R=16;for(let w=0,A=x.length;w<A;w++){let E=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,z=E.length;S<z;S++){let V=E[S],it=Array.isArray(V.value)?V.value:[V.value];for(let k=0,P=it.length;k<P;k++){let L=it[k],O=b(L),U=M%R;U!==0&&R-U<O.boundary&&(M+=R-U),V.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=O.storage}}}let v=M%R;return v>0&&(M+=R-v),y.__size=M,y.__cache={},this}function b(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function p(){for(let y in n)r.deleteBuffer(n[y]);a=[],n={},s={}}return{bind:c,update:h,dispose:p}}var dr=class{constructor(t={}){let{canvas:e=ip(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),b=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this._useLegacyLights=!1,this.toneMapping=Vi,this.toneMappingExposure=1;let x=this,M=!1,R=0,v=0,w=null,A=-1,E=null,S=new ne,z=new ne,V=null,it=new Dt(0),k=0,P=e.width,L=e.height,O=1,U=null,I=null,B=new ne(0,0,P,L),W=new ne(0,0,P,L),Q=!1,H=new ur,N=!1,q=!1,et=null,j=new At,st=new dt,ct=new _,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Et(){return w===null?O:1}let X=i;function Bt(F,K){for(let tt=0;tt<F.length;tt++){let nt=F[tt],$=e.getContext(nt,K);if($!==null)return $}return null}try{let F={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xc}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",G,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),X===null){let K=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&K.shift(),X=Bt(K,F),X===null)throw Bt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let St,Rt,yt,Nt,Pt,D,C,Z,lt,ut,pt,Y,at,ht,It,Gt,ft,le,te,Ht,Ft,Ct,Yt,oe;function Me(){St=new dg(X),Rt=new ag(X,St,t),St.init(Rt),Ct=new Wb(X,St,Rt),yt=new Vb(X,St,Rt),Nt=new mg(X),Pt=new Pb,D=new Gb(X,St,yt,Pt,Rt,Ct,Nt),C=new cg(x),Z=new ug(x),lt=new wp(X,Rt),Yt=new sg(X,St,lt,Rt),ut=new fg(X,lt,Nt,Yt),pt=new xg(X,ut,lt,Nt),te=new vg(X,Rt,D),Gt=new og(Pt),Y=new Cb(x,C,Z,St,Rt,Yt,Gt),at=new Xb(x,Pt),ht=new Ib,It=new zb(St,Rt),le=new ng(x,C,Z,yt,pt,d,c),ft=new Hb(x,pt,Rt),oe=new Yb(X,Nt,Rt,yt),Ht=new rg(X,St,Nt,Rt),Ft=new pg(X,St,Nt,Rt),Nt.programs=Y.programs,x.capabilities=Rt,x.extensions=St,x.properties=Pt,x.renderLists=ht,x.shadowMap=ft,x.state=yt,x.info=Nt}Me();let Zt=new Sc(x,X);this.xr=Zt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let F=St.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=St.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(F){F!==void 0&&(O=F,this.setSize(P,L,!1))},this.getSize=function(F){return F.set(P,L)},this.setSize=function(F,K,tt=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=F,L=K,e.width=Math.floor(F*O),e.height=Math.floor(K*O),tt===!0&&(e.style.width=F+"px",e.style.height=K+"px"),this.setViewport(0,0,F,K)},this.getDrawingBufferSize=function(F){return F.set(P*O,L*O).floor()},this.setDrawingBufferSize=function(F,K,tt){P=F,L=K,O=tt,e.width=Math.floor(F*tt),e.height=Math.floor(K*tt),this.setViewport(0,0,F,K)},this.getCurrentViewport=function(F){return F.copy(S)},this.getViewport=function(F){return F.copy(B)},this.setViewport=function(F,K,tt,nt){F.isVector4?B.set(F.x,F.y,F.z,F.w):B.set(F,K,tt,nt),yt.viewport(S.copy(B).multiplyScalar(O).floor())},this.getScissor=function(F){return F.copy(W)},this.setScissor=function(F,K,tt,nt){F.isVector4?W.set(F.x,F.y,F.z,F.w):W.set(F,K,tt,nt),yt.scissor(z.copy(W).multiplyScalar(O).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(F){yt.setScissorTest(Q=F)},this.setOpaqueSort=function(F){U=F},this.setTransparentSort=function(F){I=F},this.getClearColor=function(F){return F.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(F=!0,K=!0,tt=!0){let nt=0;if(F){let $=!1;if(w!==null){let Tt=w.texture.format;$=Tt===Ju||Tt===Zu||Tt===Qu}if($){let Tt=w.texture.type,Lt=Tt===We||Tt===bn||Tt===Qc||Tt===Hn||Tt===ju||Tt===Ku,Ut=le.getClearColor(),Ot=le.getClearAlpha(),Kt=Ut.r,Wt=Ut.g,Xt=Ut.b;Lt?(f[0]=Kt,f[1]=Wt,f[2]=Xt,f[3]=Ot,X.clearBufferuiv(X.COLOR,0,f)):(g[0]=Kt,g[1]=Wt,g[2]=Xt,g[3]=Ot,X.clearBufferiv(X.COLOR,0,g))}else nt|=X.COLOR_BUFFER_BIT}K&&(nt|=X.DEPTH_BUFFER_BIT),tt&&(nt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",G,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),ht.dispose(),It.dispose(),Pt.dispose(),C.dispose(),Z.dispose(),pt.dispose(),Yt.dispose(),oe.dispose(),Y.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",$e),Zt.removeEventListener("sessionend",ge),et&&(et.dispose(),et=null),ti.stop()};function bt(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let F=Nt.autoReset,K=ft.enabled,tt=ft.autoUpdate,nt=ft.needsUpdate,$=ft.type;Me(),Nt.autoReset=F,ft.enabled=K,ft.autoUpdate=tt,ft.needsUpdate=nt,ft.type=$}function Mt(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function wt(F){let K=F.target;K.removeEventListener("dispose",wt),zt(K)}function zt(F){kt(F),Pt.remove(F)}function kt(F){let K=Pt.get(F).programs;K!==void 0&&(K.forEach(function(tt){Y.releaseProgram(tt)}),F.isShaderMaterial&&Y.releaseShaderCache(F))}this.renderBufferDirect=function(F,K,tt,nt,$,Tt){K===null&&(K=ot);let Lt=$.isMesh&&$.matrixWorld.determinant()<0,Ut=Bd(F,K,tt,nt,$);yt.setMaterial(nt,Lt);let Ot=tt.index,Kt=1;if(nt.wireframe===!0){if(Ot=ut.getWireframeAttribute(tt),Ot===void 0)return;Kt=2}let Wt=tt.drawRange,Xt=tt.attributes.position,Re=Wt.start*Kt,pi=(Wt.start+Wt.count)*Kt;Tt!==null&&(Re=Math.max(Re,Tt.start*Kt),pi=Math.min(pi,(Tt.start+Tt.count)*Kt)),Ot!==null?(Re=Math.max(Re,0),pi=Math.min(pi,Ot.count)):Xt!=null&&(Re=Math.max(Re,0),pi=Math.min(pi,Xt.count));let He=pi-Re;if(He<0||He===1/0)return;Yt.setup($,nt,Ut,tt,Ot);let ji,_e=Ht;if(Ot!==null&&(ji=lt.get(Ot),_e=Ft,_e.setIndex(ji)),$.isMesh)nt.wireframe===!0?(yt.setLineWidth(nt.wireframeLinewidth*Et()),_e.setMode(X.LINES)):_e.setMode(X.TRIANGLES);else if($.isLine){let Jt=nt.linewidth;Jt===void 0&&(Jt=1),yt.setLineWidth(Jt*Et()),$.isLineSegments?_e.setMode(X.LINES):$.isLineLoop?_e.setMode(X.LINE_LOOP):_e.setMode(X.LINE_STRIP)}else $.isPoints?_e.setMode(X.POINTS):$.isSprite&&_e.setMode(X.TRIANGLES);if($.isBatchedMesh)_e.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)_e.renderInstances(Re,He,$.count);else if(tt.isInstancedBufferGeometry){let Jt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,yo=Math.min(tt.instanceCount,Jt);_e.renderInstances(Re,He,yo)}else _e.render(Re,He)};function pe(F,K,tt){F.transparent===!0&&F.side===Ie&&F.forceSinglePass===!1?(F.side=Ge,F.needsUpdate=!0,Pr(F,K,tt),F.side=bi,F.needsUpdate=!0,Pr(F,K,tt),F.side=Ie):Pr(F,K,tt)}this.compile=function(F,K,tt=null){tt===null&&(tt=F),m=It.get(tt),m.init(),y.push(m),tt.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),F!==tt&&F.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(x._useLegacyLights);let nt=new Set;return F.traverse(function($){let Tt=$.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){let Ut=Tt[Lt];pe(Ut,tt,$),nt.add(Ut)}else pe(Tt,tt,$),nt.add(Tt)}),y.pop(),m=null,nt},this.compileAsync=function(F,K,tt=null){let nt=this.compile(F,K,tt);return new Promise($=>{function Tt(){if(nt.forEach(function(Lt){Pt.get(Lt).currentProgram.isReady()&&nt.delete(Lt)}),nt.size===0){$(F);return}setTimeout(Tt,10)}St.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let me=null;function Be(F){me&&me(F)}function $e(){ti.stop()}function ge(){ti.start()}let ti=new od;ti.setAnimationLoop(Be),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(F){me=F,Zt.setAnimationLoop(F),F===null?ti.stop():ti.start()},Zt.addEventListener("sessionstart",$e),Zt.addEventListener("sessionend",ge),this.render=function(F,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(K),K=Zt.getCamera()),F.isScene===!0&&F.onBeforeRender(x,F,K,w),m=It.get(F,y.length),m.init(),y.push(m),j.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H.setFromProjectionMatrix(j),q=this.localClippingEnabled,N=Gt.init(this.clippingPlanes,q),b=ht.get(F,p.length),b.init(),p.push(b),Oi(F,K,0,x.sortObjects),b.finish(),x.sortObjects===!0&&b.sort(U,I),this.info.render.frame++,N===!0&&Gt.beginShadows();let tt=m.state.shadowsArray;if(ft.render(tt,F,K),N===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),le.render(b,F),m.setupLights(x._useLegacyLights),K.isArrayCamera){let nt=K.cameras;for(let $=0,Tt=nt.length;$<Tt;$++){let Lt=nt[$];Zh(b,F,Lt,Lt.viewport)}}else Zh(b,F,K);w!==null&&(D.updateMultisampleRenderTarget(w),D.updateRenderTargetMipmap(w)),F.isScene===!0&&F.onAfterRender(x,F,K),Yt.resetDefaultState(),A=-1,E=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function Oi(F,K,tt,nt){if(F.visible===!1)return;if(F.layers.test(K.layers)){if(F.isGroup)tt=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(K);else if(F.isLight)m.pushLight(F),F.castShadow&&m.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||H.intersectsSprite(F)){nt&&ct.setFromMatrixPosition(F.matrixWorld).applyMatrix4(j);let Lt=pt.update(F),Ut=F.material;Ut.visible&&b.push(F,Lt,Ut,tt,ct.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||H.intersectsObject(F))){let Lt=pt.update(F),Ut=F.material;if(nt&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),ct.copy(F.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),ct.copy(Lt.boundingSphere.center)),ct.applyMatrix4(F.matrixWorld).applyMatrix4(j)),Array.isArray(Ut)){let Ot=Lt.groups;for(let Kt=0,Wt=Ot.length;Kt<Wt;Kt++){let Xt=Ot[Kt],Re=Ut[Xt.materialIndex];Re&&Re.visible&&b.push(F,Lt,Re,tt,ct.z,Xt)}}else Ut.visible&&b.push(F,Lt,Ut,tt,ct.z,null)}}let Tt=F.children;for(let Lt=0,Ut=Tt.length;Lt<Ut;Lt++)Oi(Tt[Lt],K,tt,nt)}function Zh(F,K,tt,nt){let $=F.opaque,Tt=F.transmissive,Lt=F.transparent;m.setupLightsView(tt),N===!0&&Gt.setGlobalState(x.clippingPlanes,tt),Tt.length>0&&Od($,Tt,K,tt),nt&&yt.viewport(S.copy(nt)),$.length>0&&Cr($,K,tt),Tt.length>0&&Cr(Tt,K,tt),Lt.length>0&&Cr(Lt,K,tt),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Od(F,K,tt,nt){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;let Tt=Rt.isWebGL2;et===null&&(et=new ye(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?on:We,minFilter:si,samples:Tt?4:0})),x.getDrawingBufferSize(st),Tt?et.setSize(st.x,st.y):et.setSize(da(st.x),da(st.y));let Lt=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(it),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear();let Ut=x.toneMapping;x.toneMapping=Vi,Cr(F,tt,nt),D.updateMultisampleRenderTarget(et),D.updateRenderTargetMipmap(et);let Ot=!1;for(let Kt=0,Wt=K.length;Kt<Wt;Kt++){let Xt=K[Kt],Re=Xt.object,pi=Xt.geometry,He=Xt.material,ji=Xt.group;if(He.side===Ie&&Re.layers.test(nt.layers)){let _e=He.side;He.side=Ge,He.needsUpdate=!0,Jh(Re,tt,nt,pi,He,ji),He.side=_e,He.needsUpdate=!0,Ot=!0}}Ot===!0&&(D.updateMultisampleRenderTarget(et),D.updateRenderTargetMipmap(et)),x.setRenderTarget(Lt),x.setClearColor(it,k),x.toneMapping=Ut}function Cr(F,K,tt){let nt=K.isScene===!0?K.overrideMaterial:null;for(let $=0,Tt=F.length;$<Tt;$++){let Lt=F[$],Ut=Lt.object,Ot=Lt.geometry,Kt=nt===null?Lt.material:nt,Wt=Lt.group;Ut.layers.test(tt.layers)&&Jh(Ut,K,tt,Ot,Kt,Wt)}}function Jh(F,K,tt,nt,$,Tt){F.onBeforeRender(x,K,tt,nt,$,Tt),F.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),$.onBeforeRender(x,K,tt,nt,F,Tt),$.transparent===!0&&$.side===Ie&&$.forceSinglePass===!1?($.side=Ge,$.needsUpdate=!0,x.renderBufferDirect(tt,K,nt,$,F,Tt),$.side=bi,$.needsUpdate=!0,x.renderBufferDirect(tt,K,nt,$,F,Tt),$.side=Ie):x.renderBufferDirect(tt,K,nt,$,F,Tt),F.onAfterRender(x,K,tt,nt,$,Tt)}function Pr(F,K,tt){K.isScene!==!0&&(K=ot);let nt=Pt.get(F),$=m.state.lights,Tt=m.state.shadowsArray,Lt=$.state.version,Ut=Y.getParameters(F,$.state,Tt,K,tt),Ot=Y.getProgramCacheKey(Ut),Kt=nt.programs;nt.environment=F.isMeshStandardMaterial?K.environment:null,nt.fog=K.fog,nt.envMap=(F.isMeshStandardMaterial?Z:C).get(F.envMap||nt.environment),Kt===void 0&&(F.addEventListener("dispose",wt),Kt=new Map,nt.programs=Kt);let Wt=Kt.get(Ot);if(Wt!==void 0){if(nt.currentProgram===Wt&&nt.lightsStateVersion===Lt)return tl(F,Ut),Wt}else Ut.uniforms=Y.getUniforms(F),F.onBuild(tt,Ut,x),F.onBeforeCompile(Ut,x),Wt=Y.acquireProgram(Ut,Ot),Kt.set(Ot,Wt),nt.uniforms=Ut.uniforms;let Xt=nt.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),tl(F,Ut),nt.needsLights=Vd(F),nt.lightsStateVersion=Lt,nt.needsLights&&(Xt.ambientLightColor.value=$.state.ambient,Xt.lightProbe.value=$.state.probe,Xt.directionalLights.value=$.state.directional,Xt.directionalLightShadows.value=$.state.directionalShadow,Xt.spotLights.value=$.state.spot,Xt.spotLightShadows.value=$.state.spotShadow,Xt.rectAreaLights.value=$.state.rectArea,Xt.ltc_1.value=$.state.rectAreaLTC1,Xt.ltc_2.value=$.state.rectAreaLTC2,Xt.pointLights.value=$.state.point,Xt.pointLightShadows.value=$.state.pointShadow,Xt.hemisphereLights.value=$.state.hemi,Xt.directionalShadowMap.value=$.state.directionalShadowMap,Xt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Xt.spotShadowMap.value=$.state.spotShadowMap,Xt.spotLightMatrix.value=$.state.spotLightMatrix,Xt.spotLightMap.value=$.state.spotLightMap,Xt.pointShadowMap.value=$.state.pointShadowMap,Xt.pointShadowMatrix.value=$.state.pointShadowMatrix),nt.currentProgram=Wt,nt.uniformsList=null,Wt}function $h(F){if(F.uniformsList===null){let K=F.currentProgram.getUniforms();F.uniformsList=Es.seqWithValue(K.seq,F.uniforms)}return F.uniformsList}function tl(F,K){let tt=Pt.get(F);tt.outputColorSpace=K.outputColorSpace,tt.batching=K.batching,tt.instancing=K.instancing,tt.instancingColor=K.instancingColor,tt.skinning=K.skinning,tt.morphTargets=K.morphTargets,tt.morphNormals=K.morphNormals,tt.morphColors=K.morphColors,tt.morphTargetsCount=K.morphTargetsCount,tt.numClippingPlanes=K.numClippingPlanes,tt.numIntersection=K.numClipIntersection,tt.vertexAlphas=K.vertexAlphas,tt.vertexTangents=K.vertexTangents,tt.toneMapping=K.toneMapping}function Bd(F,K,tt,nt,$){K.isScene!==!0&&(K=ot),D.resetTextureUnits();let Tt=K.fog,Lt=nt.isMeshStandardMaterial?K.environment:null,Ut=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ce,Ot=(nt.isMeshStandardMaterial?Z:C).get(nt.envMap||Lt),Kt=nt.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Wt=!!tt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Xt=!!tt.morphAttributes.position,Re=!!tt.morphAttributes.normal,pi=!!tt.morphAttributes.color,He=Vi;nt.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(He=x.toneMapping);let ji=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,_e=ji!==void 0?ji.length:0,Jt=Pt.get(nt),yo=m.state.lights;if(N===!0&&(q===!0||F!==E)){let wi=F===E&&nt.id===A;Gt.setState(nt,F,wi)}let we=!1;nt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==yo.state.version||Jt.outputColorSpace!==Ut||$.isBatchedMesh&&Jt.batching===!1||!$.isBatchedMesh&&Jt.batching===!0||$.isInstancedMesh&&Jt.instancing===!1||!$.isInstancedMesh&&Jt.instancing===!0||$.isSkinnedMesh&&Jt.skinning===!1||!$.isSkinnedMesh&&Jt.skinning===!0||$.isInstancedMesh&&Jt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Jt.instancingColor===!1&&$.instanceColor!==null||Jt.envMap!==Ot||nt.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Gt.numPlanes||Jt.numIntersection!==Gt.numIntersection)||Jt.vertexAlphas!==Kt||Jt.vertexTangents!==Wt||Jt.morphTargets!==Xt||Jt.morphNormals!==Re||Jt.morphColors!==pi||Jt.toneMapping!==He||Rt.isWebGL2===!0&&Jt.morphTargetsCount!==_e)&&(we=!0):(we=!0,Jt.__version=nt.version);let Fn=Jt.currentProgram;we===!0&&(Fn=Pr(nt,K,$));let el=!1,Ys=!1,_o=!1,Ke=Fn.getUniforms(),Dn=Jt.uniforms;if(yt.useProgram(Fn.program)&&(el=!0,Ys=!0,_o=!0),nt.id!==A&&(A=nt.id,Ys=!0),el||E!==F){Ke.setValue(X,"projectionMatrix",F.projectionMatrix),Ke.setValue(X,"viewMatrix",F.matrixWorldInverse);let wi=Ke.map.cameraPosition;wi!==void 0&&wi.setValue(X,ct.setFromMatrixPosition(F.matrixWorld)),Rt.logarithmicDepthBuffer&&Ke.setValue(X,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ke.setValue(X,"isOrthographic",F.isOrthographicCamera===!0),E!==F&&(E=F,Ys=!0,_o=!0)}if($.isSkinnedMesh){Ke.setOptional(X,$,"bindMatrix"),Ke.setOptional(X,$,"bindMatrixInverse");let wi=$.skeleton;wi&&(Rt.floatVertexTextures?(wi.boneTexture===null&&wi.computeBoneTexture(),Ke.setValue(X,"boneTexture",wi.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Ke.setOptional(X,$,"batchingTexture"),Ke.setValue(X,"batchingTexture",$._matricesTexture,D));let Mo=tt.morphAttributes;if((Mo.position!==void 0||Mo.normal!==void 0||Mo.color!==void 0&&Rt.isWebGL2===!0)&&te.update($,tt,Fn),(Ys||Jt.receiveShadow!==$.receiveShadow)&&(Jt.receiveShadow=$.receiveShadow,Ke.setValue(X,"receiveShadow",$.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Dn.envMap.value=Ot,Dn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Ys&&(Ke.setValue(X,"toneMappingExposure",x.toneMappingExposure),Jt.needsLights&&Hd(Dn,_o),Tt&&nt.fog===!0&&at.refreshFogUniforms(Dn,Tt),at.refreshMaterialUniforms(Dn,nt,O,L,et),Es.upload(X,$h(Jt),Dn,D)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Es.upload(X,$h(Jt),Dn,D),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ke.setValue(X,"center",$.center),Ke.setValue(X,"modelViewMatrix",$.modelViewMatrix),Ke.setValue(X,"normalMatrix",$.normalMatrix),Ke.setValue(X,"modelMatrix",$.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){let wi=nt.uniformsGroups;for(let wo=0,Gd=wi.length;wo<Gd;wo++)if(Rt.isWebGL2){let il=wi[wo];oe.update(il,Fn),oe.bind(il,Fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fn}function Hd(F,K){F.ambientLightColor.needsUpdate=K,F.lightProbe.needsUpdate=K,F.directionalLights.needsUpdate=K,F.directionalLightShadows.needsUpdate=K,F.pointLights.needsUpdate=K,F.pointLightShadows.needsUpdate=K,F.spotLights.needsUpdate=K,F.spotLightShadows.needsUpdate=K,F.rectAreaLights.needsUpdate=K,F.hemisphereLights.needsUpdate=K}function Vd(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(F,K,tt){Pt.get(F.texture).__webglTexture=K,Pt.get(F.depthTexture).__webglTexture=tt;let nt=Pt.get(F);nt.__hasExternalTextures=!0,nt.__hasExternalTextures&&(nt.__autoAllocateDepthBuffer=tt===void 0,nt.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,K){let tt=Pt.get(F);tt.__webglFramebuffer=K,tt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(F,K=0,tt=0){w=F,R=K,v=tt;let nt=!0,$=null,Tt=!1,Lt=!1;if(F){let Ot=Pt.get(F);Ot.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(X.FRAMEBUFFER,null),nt=!1):Ot.__webglFramebuffer===void 0?D.setupRenderTarget(F):Ot.__hasExternalTextures&&D.rebindTextures(F,Pt.get(F.texture).__webglTexture,Pt.get(F.depthTexture).__webglTexture);let Kt=F.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Lt=!0);let Wt=Pt.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Wt[K])?$=Wt[K][tt]:$=Wt[K],Tt=!0):Rt.isWebGL2&&F.samples>0&&D.useMultisampledRTT(F)===!1?$=Pt.get(F).__webglMultisampledFramebuffer:Array.isArray(Wt)?$=Wt[tt]:$=Wt,S.copy(F.viewport),z.copy(F.scissor),V=F.scissorTest}else S.copy(B).multiplyScalar(O).floor(),z.copy(W).multiplyScalar(O).floor(),V=Q;if(yt.bindFramebuffer(X.FRAMEBUFFER,$)&&Rt.drawBuffers&&nt&&yt.drawBuffers(F,$),yt.viewport(S),yt.scissor(z),yt.setScissorTest(V),Tt){let Ot=Pt.get(F.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ot.__webglTexture,tt)}else if(Lt){let Ot=Pt.get(F.texture),Kt=K||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ot.__webglTexture,tt||0,Kt)}A=-1},this.readRenderTargetPixels=function(F,K,tt,nt,$,Tt,Lt){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Pt.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ut=Ut[Lt]),Ut){yt.bindFramebuffer(X.FRAMEBUFFER,Ut);try{let Ot=F.texture,Kt=Ot.format,Wt=Ot.type;if(Kt!==de&&Ct.convert(Kt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xt=Wt===on&&(St.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&St.has("EXT_color_buffer_float"));if(Wt!==We&&Ct.convert(Wt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Wt===rn&&(Rt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=F.width-nt&&tt>=0&&tt<=F.height-$&&X.readPixels(K,tt,nt,$,Ct.convert(Kt),Ct.convert(Wt),Tt)}finally{let Ot=w!==null?Pt.get(w).__webglFramebuffer:null;yt.bindFramebuffer(X.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(F,K,tt=0){let nt=Math.pow(2,-tt),$=Math.floor(K.image.width*nt),Tt=Math.floor(K.image.height*nt);D.setTexture2D(K,0),X.copyTexSubImage2D(X.TEXTURE_2D,tt,0,0,F.x,F.y,$,Tt),yt.unbindTexture()},this.copyTextureToTexture=function(F,K,tt,nt=0){let $=K.image.width,Tt=K.image.height,Lt=Ct.convert(tt.format),Ut=Ct.convert(tt.type);D.setTexture2D(tt,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,tt.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,tt.unpackAlignment),K.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,nt,F.x,F.y,$,Tt,Lt,Ut,K.image.data):K.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,nt,F.x,F.y,K.mipmaps[0].width,K.mipmaps[0].height,Lt,K.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,nt,F.x,F.y,Lt,Ut,K.image),nt===0&&tt.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(F,K,tt,nt,$=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Tt=F.max.x-F.min.x+1,Lt=F.max.y-F.min.y+1,Ut=F.max.z-F.min.z+1,Ot=Ct.convert(nt.format),Kt=Ct.convert(nt.type),Wt;if(nt.isData3DTexture)D.setTexture3D(nt,0),Wt=X.TEXTURE_3D;else if(nt.isDataArrayTexture||nt.isCompressedArrayTexture)D.setTexture2DArray(nt,0),Wt=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,nt.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,nt.unpackAlignment);let Xt=X.getParameter(X.UNPACK_ROW_LENGTH),Re=X.getParameter(X.UNPACK_IMAGE_HEIGHT),pi=X.getParameter(X.UNPACK_SKIP_PIXELS),He=X.getParameter(X.UNPACK_SKIP_ROWS),ji=X.getParameter(X.UNPACK_SKIP_IMAGES),_e=tt.isCompressedTexture?tt.mipmaps[$]:tt.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,_e.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,_e.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,F.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,F.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,F.min.z),tt.isDataTexture||tt.isData3DTexture?X.texSubImage3D(Wt,$,K.x,K.y,K.z,Tt,Lt,Ut,Ot,Kt,_e.data):tt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Wt,$,K.x,K.y,K.z,Tt,Lt,Ut,Ot,_e.data)):X.texSubImage3D(Wt,$,K.x,K.y,K.z,Tt,Lt,Ut,Ot,Kt,_e),X.pixelStorei(X.UNPACK_ROW_LENGTH,Xt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Re),X.pixelStorei(X.UNPACK_SKIP_PIXELS,pi),X.pixelStorei(X.UNPACK_SKIP_ROWS,He),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ji),$===0&&nt.generateMipmaps&&X.generateMipmap(Wt),yt.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?D.setTextureCube(F,0):F.isData3DTexture?D.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?D.setTexture2DArray(F,0):D.setTexture2D(F,0),yt.unbindTexture()},this.resetState=function(){R=0,v=0,w=null,yt.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Zc?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===Na?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fe?Gn:ed}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Gn?fe:Ce}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Tc=class extends dr{};Tc.prototype.isWebGL1Renderer=!0;var Ti=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},fr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ei=new _,pr=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ei.fromBufferAttribute(this,e),ei.applyMatrix4(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ei.fromBufferAttribute(this,e),ei.applyNormalMatrix(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ei.fromBufferAttribute(this,e),ei.transformDirection(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Hi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Vt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var wu=new _,Eu=new ne,Su=new ne,jb=new _,Tu=new At,$r=new _,Jo=new vi,Au=new At,$o=new Ls,Xn=class extends gt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cl,this.bindMatrix=new At,this.bindMatrixInverse=new At,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Si),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,$r),this.boundingBox.expandByPoint($r)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vi),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,$r),this.boundingSphere.expandByPoint($r)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(n),t.ray.intersectsSphere(Jo)!==!1&&(Au.copy(n).invert(),$o.copy(t.ray).applyMatrix4(Au),!(this.boundingBox!==null&&$o.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,$o)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ne,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;Eu.fromBufferAttribute(n.attributes.skinIndex,t),Su.fromBufferAttribute(n.attributes.skinWeight,t),wu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let a=Su.getComponent(s);if(a!==0){let o=Eu.getComponent(s);Tu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(jb.copy(wu).applyMatrix4(Tu),a)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},Yn=class extends Se{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ui=class extends Ye{constructor(t=null,e=1,i=1,n,s,a,o,c,h=Ee,l=Ee,u,d){super(null,a,o,c,h,l,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ru=new At,Kb=new At,ks=class r{constructor(t=[],e=[]){this.uuid=ki(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new At)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new At;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=t.length;s<a;s++){let o=t[s]?t[s].matrixWorld:Kb;Ru.multiplyMatrices(o,e[s]),Ru.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Ui(e,t,t,de,rn);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let s=t.bones[i],a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Yn),this.bones.push(a),this.boneInverses.push(new At().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){let a=e[n];t.bones.push(a.uuid);let o=i[n];t.boneInverses.push(o.toArray())}return t}},je=class extends Vt{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xs=new At,Cu=new At,ta=[],Pu=new Si,Qb=new At,Js=new gt,$s=new vi,ya=class extends gt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new je(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Qb)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xs),Pu.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(Pu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xs),$s.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(i),t.ray.intersectsSphere($s)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,xs),Cu.multiplyMatrices(i,xs),Js.matrixWorld=Cu,Js.raycast(t,ta);for(let a=0,o=ta.length;a<o;a++){let c=ta[a];c.instanceId=s,c.object=this,e.push(c)}ta.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new je(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var mr=class extends xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Lu=new _,Iu=new _,Fu=new At,tc=new Ls,ea=new vi,Us=class extends Se{constructor(t=new he,e=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Lu.fromBufferAttribute(e,n-1),Iu.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Lu.distanceTo(Iu);t.setAttribute("lineDistance",new se(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(n),ea.radius+=s,t.ray.intersectsSphere(ea)===!1)return;Fu.copy(n).invert(),tc.copy(t.ray).applyMatrix4(Fu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=new _,l=new _,u=new _,d=new _,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let x=p,M=y-1;x<M;x+=f){let R=g.getX(x),v=g.getX(x+1);if(h.fromBufferAttribute(m,R),l.fromBufferAttribute(m,v),tc.distanceSqToSegment(h,l,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=p,M=y-1;x<M;x+=f){if(h.fromBufferAttribute(m,x),l.fromBufferAttribute(m,x+1),tc.distanceSqToSegment(h,l,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let v=t.ray.origin.distanceTo(d);v<t.near||v>t.far||e.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},Du=new _,ku=new _,_a=class extends Us{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Du.fromBufferAttribute(e,n),ku.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Du.distanceTo(ku);t.setAttribute("lineDistance",new se(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ma=class extends Us{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},gr=class extends xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Uu=new At,Ac=new Ls,ia=new vi,na=new _,wa=class extends Se{constructor(t=new he,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(n),ia.radius+=s,t.ray.intersectsSphere(ia)===!1)return;Uu.copy(n).invert(),Ac.copy(t.ray).applyMatrix4(Uu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let m=h.getX(g);na.fromBufferAttribute(u,m),Nu(na,m,c,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)na.fromBufferAttribute(u,g),Nu(na,g,c,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Nu(r,t,e,i,n,s,a){let o=Ac.distanceSqToPoint(r);if(o<e){let c=new _;Ac.closestPointToPoint(r,c),c.applyMatrix4(i);let h=n.ray.origin.distanceTo(c);if(h<n.near||h>n.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var jn=class extends Ye{constructor(t,e,i,n,s,a,o,c,h){super(t,e,i,n,s,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,a;e?a=e:a=t*i[s-1];let o=0,c=s-1,h;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),h=i[n]-a,h<0)o=n+1;else if(h>0)c=n-1;else{c=n;break}if(n=c,i[n]===a)return n/(s-1);let l=i[n],d=i[n+1]-l,f=(a-l)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),c=e||(a.isVector2?new dt:new _);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new _,n=[],s=[],a=[],o=new _,c=new At;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new _)}s[0]=new _,a[0]=new _;let h=Number.MAX_VALUE,l=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);l<=h&&(h=l,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ke(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(ke(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},br=class extends Ai{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){let i=e||new dt,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);let o=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=h-this.aY;c=d*l-f*u+this.aX,h=d*u+f*l+this.aY}return i.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Rc=class extends br{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function th(){let r=0,t=0,e=0,i=0;function n(s,a,o,c){r=s,t=o,e=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,h){n(a,o,h*(o-s),h*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,h,l,u){let d=(a-s)/h-(o-s)/(h+l)+(o-a)/l,f=(o-a)/l-(c-a)/(l+u)+(c-o)/u;d*=l,f*=l,n(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+t*s+e*a+i*o}}}var sa=new _,ec=new th,ic=new th,nc=new th,vr=class extends Ai{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new _){let i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let h,l;this.closed||o>0?h=n[(o-1)%s]:(sa.subVectors(n[0],n[1]).add(n[0]),h=sa);let u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?l=n[(o+2)%s]:(sa.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=sa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(l),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),ec.initNonuniformCatmullRom(h.x,u.x,d.x,l.x,g,b,m),ic.initNonuniformCatmullRom(h.y,u.y,d.y,l.y,g,b,m),nc.initNonuniformCatmullRom(h.z,u.z,d.z,l.z,g,b,m)}else this.curveType==="catmullrom"&&(ec.initCatmullRom(h.x,u.x,d.x,l.x,this.tension),ic.initCatmullRom(h.y,u.y,d.y,l.y,this.tension),nc.initCatmullRom(h.z,u.z,d.z,l.z,this.tension));return i.set(ec.calc(c),ic.calc(c),nc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new _().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function zu(r,t,e,i,n){let s=(i-t)*.5,a=(n-e)*.5,o=r*r,c=r*o;return(2*e-2*i+s+a)*c+(-3*e+3*i-2*s-a)*o+s*r+e}function Zb(r,t){let e=1-r;return e*e*t}function Jb(r,t){return 2*(1-r)*r*t}function $b(r,t){return r*r*t}function ar(r,t,e,i){return Zb(r,t)+Jb(r,e)+$b(r,i)}function tv(r,t){let e=1-r;return e*e*e*t}function ev(r,t){let e=1-r;return 3*e*e*r*t}function iv(r,t){return 3*(1-r)*r*r*t}function nv(r,t){return r*r*r*t}function or(r,t,e,i,n){return tv(r,t)+ev(r,e)+iv(r,i)+nv(r,n)}var Ea=class extends Ai{constructor(t=new dt,e=new dt,i=new dt,n=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new dt){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(or(t,n.x,s.x,a.x,o.x),or(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cc=class extends Ai{constructor(t=new _,e=new _,i=new _,n=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new _){let i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(or(t,n.x,s.x,a.x,o.x),or(t,n.y,s.y,a.y,o.y),or(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sa=class extends Ai{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pc=class extends Ai{constructor(t=new _,e=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new _){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ta=class extends Ai{constructor(t=new dt,e=new dt,i=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new dt){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(ar(t,n.x,s.x,a.x),ar(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lc=class extends Ai{constructor(t=new _,e=new _,i=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new _){let i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(ar(t,n.x,s.x,a.x),ar(t,n.y,s.y,a.y),ar(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends Ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,c=n[a===0?a:a-1],h=n[a],l=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(zu(o,c.x,h.x,l.x,u.x),zu(o,c.y,h.y,l.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new dt().fromArray(n))}return this}},Ou=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:vr,CubicBezierCurve:Ea,CubicBezierCurve3:Cc,EllipseCurve:br,LineCurve:Sa,LineCurve3:Pc,QuadraticBezierCurve:Ta,QuadraticBezierCurve3:Lc,SplineCurve:Aa}),Ic=class extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ou[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){let l=c[h];i&&i.equals(l)||(e.push(l),i=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new Ou[n.type]().fromJSON(n))}return this}},Fc=class extends Ic{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Sa(this.currentPoint.clone(),new dt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Ta(this.currentPoint.clone(),new dt(t,e),new dt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,a){let o=new Ea(this.currentPoint.clone(),new dt(t,e),new dt(i,n),new dt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Aa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,n,s,a),this}absarc(t,e,i,n,s,a){return this.absellipse(t,e,i,i,n,s,a),this}ellipse(t,e,i,n,s,a,o,c){let h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+h,e+l,i,n,s,a,o,c),this}absellipse(t,e,i,n,s,a,o,c){let h=new br(t,e,i,n,s,a,o,c);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ns=class r extends he{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=ke(n,0,Math.PI*2);let s=[],a=[],o=[],c=[],h=[],l=1/e,u=new _,d=new dt,f=new _,g=new _,b=new _,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,b.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(b.x,b.y,b.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),c.push(f.x,f.y,f.z),b.copy(g)}for(let y=0;y<=e;y++){let x=i+y*l*n,M=Math.sin(x),R=Math.cos(x);for(let v=0;v<=t.length-1;v++){u.x=t[v].x*M,u.y=t[v].y,u.z=t[v].x*R,a.push(u.x,u.y,u.z),d.x=y/e,d.y=v/(t.length-1),o.push(d.x,d.y);let w=c[3*v+0]*M,A=c[3*v+1],E=c[3*v+0]*R;h.push(w,A,E)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){let M=x+y*t.length,R=M,v=M+t.length,w=M+t.length+1,A=M+1;s.push(R,v,A),s.push(w,A,v)}this.setIndex(s),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},zs=class r extends Ns{constructor(t=1,e=1,i=4,n=8){let s=new Fc;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}},xr=class r extends he{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],c=[],h=new _,l=new dt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;h.x=t*Math.cos(f),h.y=t*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),l.x=(a[d]/t+1)/2,l.y=(a[d+1]/t+1)/2,c.push(l.x,l.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pe=class r extends he{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let h=this;n=Math.floor(n),s=Math.floor(s);let l=[],u=[],d=[],f=[],g=0,b=[],m=i/2,p=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(l),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function y(){let M=new _,R=new _,v=0,w=(e-t)/i;for(let A=0;A<=s;A++){let E=[],S=A/s,z=S*(e-t)+t;for(let V=0;V<=n;V++){let it=V/n,k=it*c+o,P=Math.sin(k),L=Math.cos(k);R.x=z*P,R.y=-S*i+m,R.z=z*L,u.push(R.x,R.y,R.z),M.set(P,w,L).normalize(),d.push(M.x,M.y,M.z),f.push(it,1-S),E.push(g++)}b.push(E)}for(let A=0;A<n;A++)for(let E=0;E<s;E++){let S=b[E][A],z=b[E+1][A],V=b[E+1][A+1],it=b[E][A+1];l.push(S,z,it),l.push(z,V,it),v+=6}h.addGroup(p,v,0),p+=v}function x(M){let R=g,v=new dt,w=new _,A=0,E=M===!0?t:e,S=M===!0?1:-1;for(let V=1;V<=n;V++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let z=g;for(let V=0;V<=n;V++){let k=V/n*c+o,P=Math.cos(k),L=Math.sin(k);w.x=E*L,w.y=m*S,w.z=E*P,u.push(w.x,w.y,w.z),d.push(0,S,0),v.x=P*.5+.5,v.y=L*.5*S+.5,f.push(v.x,v.y),g++}for(let V=0;V<n;V++){let it=R+V,k=z+V;M===!0?l.push(k,k+1,it):l.push(k+1,k,it),A+=3}h.addGroup(p,A,M===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Dc=class r extends he{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),h(i),l(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new _,M=new _,R=new _;for(let v=0;v<e.length;v+=3)f(e[v+0],x),f(e[v+1],M),f(e[v+2],R),c(x,M,R,y)}function c(y,x,M,R){let v=R+1,w=[];for(let A=0;A<=v;A++){w[A]=[];let E=y.clone().lerp(M,A/v),S=x.clone().lerp(M,A/v),z=v-A;for(let V=0;V<=z;V++)V===0&&A===v?w[A][V]=E:w[A][V]=E.clone().lerp(S,V/z)}for(let A=0;A<v;A++)for(let E=0;E<2*(v-A)-1;E++){let S=Math.floor(E/2);E%2===0?(d(w[A][S+1]),d(w[A+1][S]),d(w[A][S])):(d(w[A][S+1]),d(w[A+1][S+1]),d(w[A+1][S]))}}function h(y){let x=new _;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(y),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function l(){let y=new _;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];let M=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(M,1-R)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let x=a[y+0],M=a[y+2],R=a[y+4],v=Math.max(x,M,R),w=Math.min(x,M,R);v>.9&&w<.1&&(x<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,x){let M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let y=new _,x=new _,M=new _,R=new _,v=new dt,w=new dt,A=new dt;for(let E=0,S=0;E<s.length;E+=9,S+=6){y.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),M.set(s[E+6],s[E+7],s[E+8]),v.set(a[S+0],a[S+1]),w.set(a[S+2],a[S+3]),A.set(a[S+4],a[S+5]),R.copy(y).add(x).add(M).divideScalar(3);let z=m(R);b(v,S+0,y,z),b(w,S+2,x,z),b(A,S+4,M,z)}}function b(y,x,M,R){R<0&&y.x===1&&(a[x]=y.x-1),M.x===0&&M.z===0&&(a[x]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var Ra=class r extends Dc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Mn=class r extends he{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),h=0,l=[],u=new _,d=new _,f=[],g=[],b=[],m=[];for(let p=0;p<=i;p++){let y=[],x=p/i,M=0;p===0&&a===0?M=.5/e:p===i&&c===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){let v=R/e;u.x=-t*Math.cos(n+v*s)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(n+v*s)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(v+M,1-x),y.push(h++)}l.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let x=l[p][y+1],M=l[p][y],R=l[p+1][y],v=l[p+1][y+1];(p!==0||a>0)&&f.push(x,M,v),(p!==i-1||c<Math.PI)&&f.push(M,R,v)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(b,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wn=class r extends he{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],c=[],h=[],l=new _,u=new _,d=new _;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let b=g/n*s,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(b),u.y=(t+e*Math.cos(m))*Math.sin(b),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),l.x=t*Math.cos(b),l.y=t*Math.sin(b),d.subVectors(u,l).normalize(),c.push(d.x,d.y,d.z),h.push(g/n),h.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let b=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,y=(n+1)*f+g;a.push(b,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Xe=class extends xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ui=class extends Xe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ra(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function sv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function rv(r){function t(n,s){return r[n]-r[s]}let e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function Bu(r,t,e){let i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){let o=e[s]*t;for(let c=0;c!==t;++c)n[a++]=r[o+c]}return n}function fd(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=r[n++];while(s!==void 0)}var En=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kc=class extends En{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dl,endingEnd:Dl}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case kl:s=t,o=2*e-i;break;case Ul:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case kl:a=t,c=2*i-e;break;case Ul:a=1,c=i+n[1]-n[0];break;default:a=t-1,c=e}let h=(i-e)*.5,l=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-i),this._offsetPrev=s*l,this._offsetNext=a*l}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,y=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*b+.5*g,M=f*m-f*b;for(let R=0;R!==o;++R)s[R]=p*a[l+R]+y*a[h+R]+x*a[c+R]+M*a[u+R];return s}},Uc=class extends En{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=(i-e)/(n-e),u=1-l;for(let d=0;d!==o;++d)s[d]=a[h+d]*u+a[c+d]*l;return s}},Nc=class extends En{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Ri=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ra(e,this.TimeBufferType),this.values=ra(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ra(t.times,Array),values:ra(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Cs:e=this.InterpolantFactoryMethodDiscrete;break;case Wn:e=this.InterpolantFactoryMethodLinear;break;case Co:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Wn;case this.InterpolantFactoryMethodSmooth:return Co}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(n!==void 0&&sv(n))for(let o=0,c=n.length;o!==c;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Co,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,h=t[o],l=t[o+1];if(h!==l&&(o!==1||h!==t[0]))if(n)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let b=e[u+g];if(b!==e[d+g]||b!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,c=a*i,h=0;h!==i;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=Wn;var Sn=class extends Ri{};Sn.prototype.ValueTypeName="bool";Sn.prototype.ValueBufferType=Array;Sn.prototype.DefaultInterpolation=Cs;Sn.prototype.InterpolantFactoryMethodLinear=void 0;Sn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends Ri{};Ca.prototype.ValueTypeName="color";var cn=class extends Ri{};cn.prototype.ValueTypeName="number";var zc=class extends En{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(n-e),h=t*o;for(let l=h+o;h!==l;h+=4)_t.slerpFlat(s,0,a,h-o,a,h,c);return s}},Gi=class extends Ri{InterpolantFactoryMethodLinear(t){return new zc(this.times,this.values,this.getValueSize(),t)}};Gi.prototype.ValueTypeName="quaternion";Gi.prototype.DefaultInterpolation=Wn;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Tn=class extends Ri{};Tn.prototype.ValueTypeName="string";Tn.prototype.ValueBufferType=Array;Tn.prototype.DefaultInterpolation=Cs;Tn.prototype.InterpolantFactoryMethodLinear=void 0;Tn.prototype.InterpolantFactoryMethodSmooth=void 0;var hn=class extends Ri{};hn.prototype.ValueTypeName="vector";var Pa=class{constructor(t,e=-1,i,n=Lf){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=ki(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(ov(i[a]).scale(n));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){let e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=i.length;s!==a;++s)e.push(Ri.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){let s=e.length,a=[];for(let o=0;o<s;o++){let c=[],h=[];c.push((o+s-1)%s,o,(o+1)%s),h.push(0,1,0);let l=rv(c);c=Bu(c,1,l),h=Bu(h,1,l),!n&&c[0]===0&&(c.push(s),h.push(h[0])),a.push(new cn(".morphTargetInfluences["+e[o].name+"]",c,h).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){let n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){let h=t[o],l=h.name.match(s);if(l&&l.length>1){let u=l[1],d=n[u];d||(n[u]=d=[]),d.push(h)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,g,b){if(f.length!==0){let m=[],p=[];fd(f,m,p,g),m.length!==0&&b.push(new u(d,m,p))}},n=[],s=t.name||"default",a=t.fps||30,o=t.blendMode,c=t.length||-1,h=t.hierarchy||[];for(let u=0;u<h.length;u++){let d=h[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(let b in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let x=d[g];m.push(x.time),p.push(x.morphTarget===b?1:0)}n.push(new cn(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{let f=".bones["+e[u].name+"]";i(hn,f+".position",d,"pos",n),i(Gi,f+".quaternion",d,"rot",n),i(hn,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,c,n,o)}resetDuration(){let t=this.tracks,e=0;for(let i=0,n=t.length;i!==n;++i){let s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function av(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cn;case"vector":case"vector2":case"vector3":case"vector4":return hn;case"color":return Ca;case"quaternion":return Gi;case"bool":case"boolean":return Sn;case"string":return Tn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function ov(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=av(r.type);if(r.times===void 0){let e=[],i=[];fd(r.keys,e,i,"value"),r.times=e,r.values=i}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}var vn={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Oc=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(l){o++,s===!1&&n.onStart!==void 0&&n.onStart(l,a,o),s=!0},this.itemEnd=function(l){a++,n.onProgress!==void 0&&n.onProgress(l,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(l){n.onError!==void 0&&n.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){let u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,d=h.length;u<d;u+=2){let f=h[u],g=h[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return g}return null}}},cv=new Oc,ln=class{constructor(t){this.manager=t!==void 0?t:cv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ln.DEFAULT_MATERIAL_NAME="__DEFAULT";var tn={},Bc=class extends Error{constructor(t,e){super(t),this.response=e}},yr=class extends ln{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=vn.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(tn[t]!==void 0){tn[t].push({onLoad:e,onProgress:i,onError:n});return}tn[t]=[],tn[t].push({onLoad:e,onProgress:i,onError:n});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let l=tn[t],u=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:M})=>{if(x)p.close();else{b+=M.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let v=0,w=l.length;v<w;v++){let A=l[v];A.onProgress&&A.onProgress(R)}p.enqueue(M),y()}})}}});return new Response(m)}else throw new Bc(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return h.json();default:if(o===void 0)return h.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(g=>f.decode(g))}}}).then(h=>{vn.add(t,h);let l=tn[t];delete tn[t];for(let u=0,d=l.length;u<d;u++){let f=l[u];f.onLoad&&f.onLoad(h)}}).catch(h=>{let l=tn[t];if(l===void 0)throw this.manager.itemError(t),h;delete tn[t];for(let u=0,d=l.length;u<d;u++){let f=l[u];f.onError&&f.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Hc=class extends ln{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=vn.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let o=lr("img");function c(){l(),vn.add(t,this),e&&e(this),s.manager.itemEnd(t)}function h(u){l(),n&&n(u),s.manager.itemError(t),s.manager.itemEnd(t)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}};var La=class extends ln{constructor(t){super(t)}load(t,e,i,n){let s=new Ye,a=new Hc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}},_r=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var sc=new At,Hu=new _,Vu=new _,Mr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hu),Vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vu),e.updateMatrixWorld(),sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Vc=class extends Mr{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Ps*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Os=class extends _r{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Vc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Gu=new At,tr=new _,rc=new _,Gc=class extends Mr{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),tr.setFromMatrixPosition(t.matrixWorld),i.position.copy(tr),rc.copy(i.position),rc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(rc),i.updateMatrixWorld(),n.makeTranslation(-tr.x,-tr.y,-tr.z),Gu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu)}},Ia=class extends _r{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Gc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Wc=class extends Mr{constructor(){super(new li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kn=class extends _r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new Wc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var An=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,n=t.length;i<n;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Wi=class extends he{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Fa=class extends ln{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=vn.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(h=>{e&&e(h),s.manager.itemEnd(t)}).catch(h=>{n&&n(h)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(t,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return vn.add(t,h),e&&e(h),s.manager.itemEnd(t),h}).catch(function(h){n&&n(h),vn.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});vn.add(t,c),s.manager.itemStart(t)}};var eh="\\[\\]\\.:\\/",hv=new RegExp("["+eh+"]","g"),ih="[^"+eh+"]",lv="[^"+eh.replace("\\.","")+"]",uv=/((?:WC+[\/:])*)/.source.replace("WC",ih),dv=/(WCOD+)?/.source.replace("WCOD",lv),fv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),pv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),mv=new RegExp("^"+uv+dv+fv+pv+"$"),gv=["material","materials","bones","map"],qc=class{constructor(t,e,i){let n=i||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},be=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hv,"")}static parseTrackName(t){let e=mv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);gv.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[n];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=qc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);function Ci(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var _i=(r,t,e)=>r<t?t:r>e?e:r,mt=r=>r<0?0:r>1?1:r,xt=(r,t,e)=>r+(t-r)*e;function De(r,t,e){let i=mt((e-r)/(t-r));return i*i*(3-2*i)}function ri(r,t=0){let e=Math.floor(r),i=r-e,n=a=>{let o=Math.sin((a+t*57.13)*127.1)*43758.5453;return o-Math.floor(o)},s=i*i*(3-2*i);return n(e)*(1-s)+n(e+1)*s}var xe=24,di=2,bv=9.81,nh=Math.PI*2,vv=[[300,3,.8,.3,0],[236,3.2,.8,.3,0],[187,3,.8,.34,0],[151,2.6,.8,.34,0],[122,2.1,.78,.38,0],[99,1.6,.78,.38,0],[78,1.05,.64,.7,1],[63,.9,.64,.7,1],[50,.75,.64,.75,1],[40,.6,.62,.75,1],[31,.48,.62,.8,1],[24.5,.38,.6,.8,1],[19,.3,.6,.85,1],[15,.235,.58,.85,1],[12.1,.17,.5,1.15,2],[9.3,.13,.5,1.15,2],[7.1,.1,.48,1.2,2],[5.4,.077,.48,1.2,2],[4.1,.058,.46,1.25,2],[3.2,.045,.46,1.25,2],[2.5,.035,.44,1.3,2],[1.9,.027,.44,1.3,2],[1.5,.021,.42,1.35,2],[1.15,.016,.42,1.35,2]],sh=class{constructor(){this.active=!1,this.ox=0,this.oz=0,this.dx=1,this.dz=0,this.speed=14,this.width=150,this.hMax=12,this.t0=0,this.tBreak=14,this.age=0,this.s=0,this.height=0,this.front=14,this.frontMin=8.5,this.seed=0,this.mega=!1,this.back=55,this.curl=0,this.brk=0,this.turb=0,this.roll=0}},Oa=class{constructor(t=20261112){this.time=0,this.storm=1,this.windAngle=0;let e=Ci(t);this.dirX=new Float64Array(xe),this.dirZ=new Float64Array(xe),this.k=new Float64Array(xe),this.omega=new Float64Array(xe),this.phase0=new Float64Array(xe),this.amp0=new Float64Array(xe),this.amp=new Float64Array(xe),this.steep=new Float64Array(xe),this.len=new Float64Array(xe),this.band=new Uint8Array(xe),this.phT=new Float64Array(xe),this.bodyW=new Float64Array(xe);for(let i=0;i<xe;i++){let[n,s,a,o,c]=vv[i],h=1+(e()-.5)*.06,l=n*h,u=i%2===0?1:-1,d=this.windAngle+u*o*(.25+.75*e());this.dirX[i]=Math.cos(d),this.dirZ[i]=Math.sin(d),this.len[i]=l,this.k[i]=nh/l,this.omega[i]=Math.sqrt(bv*this.k[i]),this.phase0[i]=e()*nh,this.amp0[i]=s*(.9+e()*.2),this.steep[i]=a,this.band[i]=c,this.bodyW[i]=1/(1+Math.pow(this.k[i]*.95,2))}this.uA=new Float32Array(xe*4),this.uB=new Float32Array(xe*4),this.breakers=[];for(let i=0;i<di;i++)this.breakers.push(new sh);this.uBrkA=new Float32Array(di*4),this.uBrkB=new Float32Array(di*4),this.uBrkC=new Float32Array(di*4),this.sigHeight=0,this.setStorm(1),this.update(0)}setStorm(t){this.storm=mt(t);let e=0,i=1+.2*Math.sin(this.time*.105)*Math.sin(this.time*.041+1.3);for(let n=0;n<xe;n++){let s=this.band[n],a=s===0?xt(.3,1,this.storm):s===1?xt(.22,1,this.storm):xt(.4,1,this.storm);this.amp[n]=this.amp0[n]*a*(s<2?i:1),e+=this.amp[n]*this.amp[n]*.5}this.sigHeight=4*Math.sqrt(e)}update(t){this.time+=t;let e=this.time;for(let i=0;i<xe;i++){this.phT[i]=(this.omega[i]*e+this.phase0[i])%nh;let n=i*4;this.uA[n]=this.dirX[i],this.uA[n+1]=this.dirZ[i],this.uA[n+2]=this.k[i],this.uA[n+3]=this.amp[i],this.uB[n]=this.phT[i],this.uB[n+1]=this.steep[i],this.uB[n+2]=this.len[i],this.uB[n+3]=0}for(let i=0;i<di;i++){let n=this.breakers[i],s=i*4;if(n.active){n.age=e-n.t0,n.s=n.speed*n.age;let o=De(0,n.tBreak*.85,n.age),c=n.age-n.tBreak;n.brk=mt(c/1.6);let h=c>0?Math.exp(-c/(n.mega?5:3)):1;n.height=n.hMax*o*(.16+.84*h),n.front=xt(26,n.frontMin,De(.3,1,o)),n.curl=De(-2.2,.3,c)*(c>0?Math.exp(-c/2.2):1),n.turb=c>0?Math.min(1,c/1)*Math.exp(-Math.max(0,c-2.5)/(n.mega?8:5)):0,n.roll=c>0?n.brk*Math.exp(-c/(n.mega?5.5:3.2)):0,c>(n.mega?30:20)&&(n.active=!1)}let a=n.active?1:0;this.uBrkA[s]=n.ox,this.uBrkA[s+1]=n.oz,this.uBrkA[s+2]=n.dx,this.uBrkA[s+3]=n.dz,this.uBrkB[s]=n.s,this.uBrkB[s+1]=n.height*a,this.uBrkB[s+2]=n.front,this.uBrkB[s+3]=n.back,this.uBrkC[s]=n.width,this.uBrkC[s+1]=n.curl*a,this.uBrkC[s+2]=n.brk*a,this.uBrkC[s+3]=n.turb*a}}spawnBreaker(t,e,i={}){let n=this.breakers.find(o=>!o.active);if(!n)return null;let s=this.windAngle+(i.angleOffset||0);n.dx=Math.cos(s),n.dz=Math.sin(s),n.speed=i.speed||14;let a=i.lead||15;return n.ox=t-n.dx*n.speed*a,n.oz=e-n.dz*n.speed*a,n.seed=n.ox*.013+n.oz*.017,n.width=i.width||150,n.hMax=i.height||12,n.back=i.back||55,n.frontMin=i.frontMin||8.5,n.mega=!!i.mega,n.t0=this.time,n.tBreak=a+(i.breakOffset!==void 0?i.breakOffset:-1.2),n.age=0,n.active=!0,n.s=0,n.height=0,n.curl=0,n.brk=0,n.turb=0,n.roll=0,n}_breakerHeight(t,e,i){let n=e-t.ox,s=i-t.oz,a=n*t.dx+s*t.dz,o=-n*t.dz+s*t.dx,c=.16*Math.sin(o*.071+t.seed)+.09*Math.sin(o*.193+t.seed*1.7),h=2.6*Math.sin(o*.047+t.seed*.6)+1.2*Math.sin(o*.13+t.seed*2.1),l=a-t.s-h,u=Math.exp(-(o*o)/(t.width*t.width))*(1+c),d=l>0?t.front:t.back,f=Math.exp(-(l*l)/(d*d)),g=(l-2.4*t.front)/(1.7*t.front),b=-.22*Math.exp(-g*g);return this._bu=l,this._benv=u,this._bp=f,this._bsc=d,this._btr=b,this._btu=g,this._bpeel=Math.max(.15,Math.min(1.3,.55+2.5*c)),t.height*u*(f+b)}sample(t,e,i){let n=xe,s=this.dirX,a=this.dirZ,o=this.k,c=this.amp,h=this.steep,l=this.phT,u=this.omega,d=t,f=e;for(let N=0;N<3;N++){let q=0,et=0;for(let j=0;j<n;j++){let st=o[j]*(s[j]*d+a[j]*f)-l[j],ct=h[j]*c[j]*Math.sin(st);q-=s[j]*ct,et-=a[j]*ct}d=t-q,f=e-et}let g=0,b=0,m=0,p=0,y=0,x=0,M=0,R=0,v=0,w=0,A=0,E=0;for(let N=0;N<n;N++){let q=o[N]*(s[N]*d+a[N]*f)-l[N],et=Math.sin(q),j=Math.cos(q),st=c[N],ct=o[N]*st,ot=h[N]*ct,Et=u[N];g+=st*j,b+=ot*s[N]*s[N]*j,m+=ot*a[N]*a[N]*j,p+=ot*s[N]*a[N]*j,y-=ct*s[N]*et,x-=ct*a[N]*et;let X=h[N]*st*Et;M+=X*s[N]*j,v+=X*a[N]*j,R+=st*Et*et;let Bt=X*Et;w+=Bt*s[N]*et,E+=Bt*a[N]*et,A-=st*Et*Et*j}let S=-y*(1-m)-x*p,z=(1-b)*(1-m)-p*p,V=-x*(1-b)-y*p,it=z,k=0,P=0,L=0,O=0,U=0,I=0,B=0,W=0,Q=0;for(let N=0;N<di;N++){let q=this.breakers[N];if(!q.active||q.height<.01)continue;let et=this._breakerHeight(q,t,e),j=this._bu,st=this._benv,ct=this._bp,ot=this._bsc;if(st<.002)continue;let Et=-2*j/(ot*ot)*ct-.22*Math.exp(-this._btu*this._btu)*(-2*this._btu/(1.7*q.front)),X=q.height*st*Et;g+=et,L+=et,z<.05&&(z=.05);let Bt=1/z;S*=Bt,V*=Bt,z=1,S-=X*q.dx,V-=X*q.dz,U+=Math.max(-12,Math.min(14,-q.speed*X)),W+=q.speed*q.speed*q.height*st*(-2/(ot*ot)+4*j*j/(ot*ot*ot*ot))*ct;let St=q.speed*(.3*(1-q.brk)+.65*q.curl+.22*q.roll)*st*ct*Math.min(1,q.height/6),Rt=st*q.curl*Math.exp(-Math.pow((j-.25*q.front)/(1.3*q.front),2))*Math.min(1,q.height/5);if(B=Math.max(B,Rt),q.mega||(Q=Math.max(Q,Math.min(12,3.5+.6*q.hMax)*Rt*De(-.7,.5,q.age-q.tBreak))),O+=q.dx*St,I+=q.dz*St,q.mega){let Pt=q.speed*st*q.curl*Math.exp(-Math.pow((j-.1*q.front)/(.9*q.front),2));U+=.78*Pt,O+=q.dx*.8*Pt,I+=q.dz*.8*Pt}let yt=q.speed*.26*st*Math.exp(-this._btu*this._btu)*Math.min(1,q.height/6)*(1-q.brk);O-=q.dx*yt,I-=q.dz*yt;let Nt=st*Math.exp(-Math.pow((j-.3*q.front)/(1.6*q.front+26*q.turb),2));k=Math.max(k,q.brk*Nt*Math.min(1,q.height/3+q.turb)),P=Math.max(P,q.turb*st*Math.exp(-Math.pow((j+14*q.turb)/(22+30*q.turb),2)))}let H=1/Math.sqrt(S*S+z*z+V*V);return i.h=g,i.nx=S*H,i.ny=z*H,i.nz=V*H,i.vx=M+O,i.vy=R+U,i.vz=v+I,i.ax=w,i.ay=A,i.az=E,i.bvx=O,i.bvy=U,i.bvz=I,i.lip=B,i.plunge=Q,i.bay=W<-8.8?-8.8:W>19.6?19.6:W,i.jac=it,i.x0=d,i.z0=f,i.aer=k,i.turb=P,i.brkH=L,i}heightFast(t,e){let i=this.dirX,n=this.dirZ,s=this.k,a=this.amp,o=this.phT,c=0;for(let h=0;h<14;h++)c+=a[h]*Math.cos(s[h]*(i[h]*t+n[h]*e)-o[h]);for(let h=0;h<di;h++){let l=this.breakers[h];l.active&&l.height>.01&&(c+=this._breakerHeight(l,t,e))}return c}bodyFlow(t,e,i,n){let s=this.dirX,a=this.dirZ,o=this.k,c=this.amp,h=this.steep,l=this.phT,u=this.omega,d=this.bodyW,f=0,g=0,b=0,m=0,p=0,y=0;for(let x=0;x<xe;x++){let M=Math.exp(-o[x]*i)*d[x];if(M<.01)continue;let R=o[x]*(s[x]*t+a[x]*e)-l[x],v=Math.sin(R),w=Math.cos(R),A=c[x]*u[x]*M,E=A*u[x];f+=h[x]*A*s[x]*w,b+=h[x]*A*a[x]*w,g+=A*v,m+=h[x]*E*s[x]*v,y+=h[x]*E*a[x]*v,p-=E*w}return n.vx=f,n.vy=g,n.vz=b,n.ax=m,n.ay=p,n.az=y,n}velocityAtDepth(t,e,i,n){let s=this.dirX,a=this.dirZ,o=this.k,c=this.amp,h=this.steep,l=this.phT,u=this.omega,d=0,f=0,g=0;for(let b=0;b<xe;b++){let m=Math.exp(-o[b]*i);if(m<.01)continue;let p=o[b]*(s[b]*t+a[b]*e)-l[b],y=c[b]*u[b]*m,x=Math.cos(p);d+=h[b]*y*s[b]*x,g+=h[b]*y*a[b]*x,f+=y*Math.sin(p)}return n.vx=d,n.vy=f,n.vz=g,n}breakerFlow(t,e,i,n,s){let a=0,o=0,c=0,h=this.time;for(let l=0;l<di;l++){let u=this.breakers[l];if(!u.active||u.roll<.003&&u.turb<.003)continue;this._breakerHeight(u,t,i);let d=this._benv,f=this._bu;if(!(d<.01)){if(u.roll>.003){let g=Math.max(1.8,.36*u.hMax),b=f-.35*u.front,m=e-(n-.55*g),p=Math.hypot(b,m);if(p<3.2*g){let y=p<g?1:g*g/(p*p),x=.85*u.speed/g*u.roll*d*y,M=x*m;a+=u.dx*M,c+=u.dz*M,o+=-x*b}}if(u.turb>.003){let g=u.turb*d*Math.exp(-Math.pow((f+14*u.turb)/(22+30*u.turb),2))*Math.exp(-Math.max(0,n-e)/6.5);if(g>.01){let b=g*3.4;a+=b*(Math.sin(.9*i+1.7*e+2.3*h)+.6*Math.sin(1.7*t-1.1*e-3.1*h+1.3)),o+=b*(Math.sin(1.1*t+.8*i+2.9*h+.7)+.6*Math.sin(-1.5*i+1.9*e+2*h)),c+=b*(Math.sin(1.3*e-.9*t+2.6*h+2.1)+.6*Math.sin(1.6*t+1.2*i-2.2*h)),o-=g*2.6*Math.exp(-Math.max(0,n-e)/3)}}}}return s.vx+=a,s.vy+=o,s.vz+=c,s}};function fi(){return{bay:0,lip:0,plunge:0,bvx:0,bvy:0,bvz:0,h:0,nx:0,ny:1,nz:0,vx:0,vy:0,vz:0,ax:0,ay:0,az:0,jac:1,x0:0,z0:0,aer:0,turb:0,brkH:0}}var rt={hdrType:on,uWaveA:{value:new Float32Array(xe*4)},uWaveB:{value:new Float32Array(xe*4)},uBrkA:{value:new Float32Array(di*4)},uBrkB:{value:new Float32Array(di*4)},uBrkC:{value:new Float32Array(di*4)},uTime:{value:0},uStorm:{value:1},uRain:{value:1},uWindDir:{value:new dt(1,0)},uWindSpeed:{value:28},uGlowDir:{value:new _(-.55,.35,.25).normalize()},uAmbient:{value:new _(.05,.06,.072)},uFlash:{value:0},uFlashDir:{value:new _(1,.35,0).normalize()},uFlashColor:{value:new _(.78,.86,1)},uFlashSheet:{value:0},uFogDensity:{value:1/2600},uNoise:{value:null},uSkyEnv:{value:null},uDetailN:{value:null},uFoamTex:{value:null},uResolution:{value:new dt(1,1)},uSpotPos:{value:new _(0,100,0)},uSpotDir:{value:new _(0,-1,0)},uSpotP:{value:new ne(.99,0,30,0)},uWash:{value:new ne(0,0,1,0)}},Hs=`
uniform vec3 uSpotPos; uniform vec3 uSpotDir; uniform vec4 uSpotP;
float spotAt(vec3 p, out vec3 L) {
  vec3 d = uSpotPos - p; float ds = length(d); L = d / max(ds, 1e-3);
  if (uSpotP.y < 0.001) return 0.0;
  float x = (1.0 - dot(-L, uSpotDir)) / (1.0 - uSpotP.x);          // 1 at the nominal edge of the beam
  return uSpotP.y * (exp(-1.5 * x * x) + 0.045 * exp(-0.09 * x)) / (1.0 + ds * ds / (uSpotP.z * uSpotP.z));
}
`,un="vec3(0.78, 0.88, 1.0)";function pd(r=7){let e=Ci(r),i=new Uint8Array(256*256*4);for(let s=0;s<i.length;s++)i[s]=e()*256|0;let n=new Ui(i,256,256,de,We);return n.wrapS=n.wrapT=Je,n.minFilter=ee,n.magFilter=ee,n.generateMipmaps=!1,n.needsUpdate=!0,n}function md(r=11,t=256){let e=Ci(r),i=[];for(let d=0;d<56;d++){let f=2+Math.pow(e(),1.6)*38,g=(e()-.5)*2.4+(e()<.2?Math.PI*e():0),b=Math.round(Math.cos(g)*f),m=Math.round(Math.sin(g)*f);if(b===0&&m===0)continue;let p=Math.hypot(b,m);i.push({m:b,n:m,a:Math.pow(p,-1.35),ph:e()*Math.PI*2})}let n=new Float32Array(t*t),s=new Float32Array(t*t),a=new Float32Array(t*t),o=0;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=f/t,b=d/t,m=0,p=0,y=0;for(let M=0;M<i.length;M++){let R=i[M],v=6.283185307*(R.m*g+R.n*b)+R.ph,w=Math.sin(v);m-=R.a*R.m*w,p-=R.a*R.n*w,y+=R.a*Math.cos(v)}let x=d*t+f;n[x]=m,s[x]=p,a[x]=y,o+=m*m+p*p}o=Math.sqrt(o/(t*t*2));let c=0;for(let d=0;d<a.length;d++)c=Math.max(c,Math.abs(a[d]));let h=new Uint8Array(t*t*4),l=.3/o;for(let d=0;d<t*t;d++)h[d*4]=Math.max(0,Math.min(255,Math.round((n[d]*l*.5+.5)*255))),h[d*4+1]=Math.max(0,Math.min(255,Math.round((s[d]*l*.5+.5)*255))),h[d*4+2]=Math.round((a[d]/c*.5+.5)*255),h[d*4+3]=255;let u=new Ui(h,t,t,de,We);return u.wrapS=u.wrapT=Je,u.minFilter=si,u.magFilter=ee,u.generateMipmaps=!0,u.anisotropy=8,u.needsUpdate=!0,u}function gd(r=23,t=256){let e=Ci(r),i=h=>{let l=new Float32Array(h*h*2);for(let d=0;d<l.length;d++)l[d]=e();let u=new Float32Array(t*t*2);for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=(f+.5)/t*h,b=(d+.5)/t*h,m=Math.floor(g),p=Math.floor(b),y=9,x=9;for(let M=-1;M<=1;M++)for(let R=-1;R<=1;R++){let v=m+R,w=p+M,A=(v%h+h)%h,E=(w%h+h)%h,S=v+l[(E*h+A)*2],z=w+l[(E*h+A)*2+1],V=Math.hypot(S-g,z-b);V<y?(x=y,y=V):V<x&&(x=V)}u[(d*t+f)*2]=y,u[(d*t+f)*2+1]=x-y}return u},n=i(9),s=i(23),a=i(51),o=new Uint8Array(t*t*4);for(let h=0;h<t*t;h++){let l=1-Math.min(1,n[h*2+1]*3.2),u=1-Math.min(1,s[h*2+1]*3),d=Math.min(1,l*.62+u*.5),f=Math.min(1,(1-n[h*2]*1.25)*.7+(1-s[h*2]*1.3)*.3),g=1-Math.min(1,a[h*2]*1.6);o[h*4]=Math.round(Math.max(0,d)*255),o[h*4+1]=Math.round(Math.max(0,f)*255),o[h*4+2]=Math.round(Math.max(0,g)*255),o[h*4+3]=255}let c=new Ui(o,t,t,de,We);return c.wrapS=c.wrapT=Je,c.minFilter=si,c.magFilter=ee,c.generateMipmaps=!0,c.anisotropy=8,c.needsUpdate=!0,c}var Qn=`
#define NW ${xe}
#define NB ${di}
uniform vec4 uWaveA[NW];   // dir.x, dir.z, k, amplitude
uniform vec4 uWaveB[NW];   // phase(t), steepness, wavelength, -
uniform vec4 uBrkA[NB];    // origin.xz, dir.xz
uniform vec4 uBrkB[NB];    // crest s, height, front scale, back scale
uniform vec4 uBrkC[NB];    // lateral width, curl, breaking, turbulence
`,Zn=`
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
`,Ba=`
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
`,bd=`
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
`;var vd=`
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
`,xv=`
const float PI = 3.14159265359;
vec3 equirectToDir(vec2 uv) {
  float phi = (uv.x - 0.5) * 2.0 * PI;
  float lat = (uv.y - 0.5) * PI;
  return vec3(cos(lat) * cos(phi), sin(lat), cos(lat) * sin(phi));
}
`,xd=`
vec2 dirToEquirect(vec3 d) {
  return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5);
}
`,Ha=class{constructor(t,e=512){this.renderer=t;let i={uNoise:rt.uNoise,uTime:rt.uTime,uStorm:rt.uStorm,uWindDir:rt.uWindDir,uGlowDir:rt.uGlowDir,uFlash:rt.uFlash,uFlashDir:rt.uFlashDir,uFlashColor:rt.uFlashColor,uFlashSheet:rt.uFlashSheet};this.domeMat=new re({uniforms:i,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = position;
          vec4 p = projectionMatrix * viewMatrix * vec4(position * 9000.0 + cameraPosition, 1.0);
          gl_Position = p.xyww;   // always at the far plane
        }`,fragmentShader:`
        varying vec3 vDir;
        ${vd}
        void main() { gl_FragColor = vec4(stormSky(normalize(vDir), 1), 1.0); }`,side:Ge,depthWrite:!1,depthTest:!0,fog:!1}),this.dome=new gt(new Ra(1,5),this.domeMat),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,this.envRT=new ye(e,e/2,{type:rt.hdrType,format:de,depthBuffer:!1,minFilter:si,magFilter:ee,generateMipmaps:!0}),this.envRT.texture.wrapS=Je,this.envRT.texture.wrapT=ni,this.envMat=new re({uniforms:i,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        varying vec2 vUv;
        ${vd}
        ${xv}
        void main() { gl_FragColor = vec4(stormSky(equirectToDir(vUv), 0), 1.0); }`,depthTest:!1,depthWrite:!1}),this.envScene=new Ti,this.envQuad=new gt(new yi(2,2),this.envMat),this.envQuad.frustumCulled=!1,this.envScene.add(this.envQuad),this.envCam=new li(-1,1,1,-1,0,1),rt.uSkyEnv.value=this.envRT.texture}updateEnv(){let t=this.renderer,e=t.getRenderTarget();t.setRenderTarget(this.envRT),t.render(this.envScene,this.envCam),t.setRenderTarget(e)}dispose(){this.envRT.dispose(),this.domeMat.dispose(),this.envMat.dispose(),this.dome.geometry.dispose()}};var yv=`
attribute float aSpacing;
uniform vec2 uCenter;
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${Qn}
${Ba}
${Zn}
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
`,_v=`
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
${Hs}
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${Qn}
${bd}
${Zn}
${xd}
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
    body += (uDeepColor * 0.95 + uScatterColor * 0.26 + vec3(0.018, 0.021, 0.024)) * ${un} * spot * (0.22 + 0.78 * snl * snl)
          + ${un} * spot * 0.020 * (0.3 + 0.7 * snl);

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
      col += ${un} * spot * min(Ds, 60.0) * fss * 0.55;
    }
    vec3 foamCol = vec3(0.80, 0.85, 0.87) * foamShade * (amb * (2.4 + 0.8 * N.y) + flashL * flashWrap * 0.8 + ${un} * spot * (0.55 + 1.05 * snl));
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
`;function Mv(r,t,e,i){let n=r*t,s=new Float32Array(n*3),a=new Float32Array(n);for(let l=0;l<r;l++){let u=e*(Math.exp(i*l)-1)/i,d=e*Math.exp(i*l),f=Math.PI*2*u/t,g=Math.max(d,f);for(let b=0;b<t;b++){let m=b/t*Math.PI*2,p=(l*t+b)*3;s[p]=Math.cos(m)*u,s[p+1]=0,s[p+2]=Math.sin(m)*u,a[l*t+b]=g}}let o=new Uint32Array((r-1)*t*6),c=0;for(let l=0;l<r-1;l++)for(let u=0;u<t;u++){let d=l*t+u,f=l*t+(u+1)%t,g=(l+1)*t+u,b=(l+1)*t+(u+1)%t;o[c++]=d,o[c++]=f,o[c++]=g,o[c++]=f,o[c++]=b,o[c++]=g}let h=new he;return h.setAttribute("position",new Vt(s,3)),h.setAttribute("aSpacing",new Vt(a,1)),h.setIndex(new Vt(o,1)),h}var Va=class{constructor(t,e){this.waves=t,this.uniforms={uWaveA:rt.uWaveA,uWaveB:rt.uWaveB,uBrkA:rt.uBrkA,uBrkB:rt.uBrkB,uBrkC:rt.uBrkC,uSkyEnv:rt.uSkyEnv,uDetailN:rt.uDetailN,uFoamTex:rt.uFoamTex,uNoise:rt.uNoise,uTime:rt.uTime,uStorm:rt.uStorm,uRain:rt.uRain,uWindDir:rt.uWindDir,uAmbient:rt.uAmbient,uFlash:rt.uFlash,uFlashDir:rt.uFlashDir,uFlashColor:rt.uFlashColor,uFogDensity:rt.uFogDensity,uResolution:rt.uResolution,uCenter:{value:new dt},uDeepColor:{value:new _(.02,.062,.105)},uScatterColor:{value:new _(.13,.27,.305)},uDetailScroll:{value:new ne},uDetailScroll3:{value:new dt},uDetailStrength:{value:.5},uSigH:{value:10},uSceneColor:{value:null},uSceneDepth:{value:null},uNearFar:{value:new dt(.08,3e4)},uFoamAcc:{value:null},uFoamAccRect:{value:new ne(0,0,1,0)},uPlayerPos:{value:new _(0,-1e3,0)},uPlayerFoam:{value:0},uBoatInv:{value:new At},uBoatOn:{value:0},uSpotPos:rt.uSpotPos,uSpotDir:rt.uSpotDir,uSpotP:rt.uSpotP,uWash:rt.uWash},this.material=new re({uniforms:this.uniforms,vertexShader:yv,fragmentShader:_v,side:Ie,defines:{}}),this.mesh=new gt(new he,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,this.applyProfile(e)}applyProfile(t){this.mesh.geometry.dispose();let e=Math.log(14e3*.0128/t.oceanStep+1)/t.oceanRings*1;this.mesh.geometry=Mv(t.oceanRings,t.oceanSegs,t.oceanStep,this._solveG(t.oceanRings,t.oceanStep,14e3,e));let i={};t.refraction&&(i.USE_REFRACTION=1),t.foamAcc&&(i.USE_FOAM_ACC=1),t.ripples&&(i.USE_RIPPLES=1),this.material.defines=i,this.material.needsUpdate=!0}_solveG(t,e,i,n){let s=Math.max(n,.004);for(let a=0;a<40;a++){let o=Math.exp(s*t),c=e*(o-1)/s-i,h=e*(t*o*s-(o-1))/(s*s);s-=c/h,s<.001&&(s=.001)}return s}update(t,e,i){let n=this.uniforms;n.uCenter.value.set(t.position.x,t.position.z),n.uSigH.value=this.waves.sigHeight;let s=rt.uWindDir.value.x,a=rt.uWindDir.value.y,o=.6+.4*rt.uStorm.value;n.uDetailScroll.value.x+=s*1.9*.047*o*e,n.uDetailScroll.value.y+=a*1.9*.047*o*e,n.uDetailScroll.value.z+=a*1.1*.19*o*e+.011*e,n.uDetailScroll.value.w+=-s*1.1*.19*o*e,n.uDetailScroll3.value.x+=(s*.75-a*.2)*.83*o*e,n.uDetailScroll3.value.y+=(a*.75+s*.2)*.83*o*e,n.uDetailStrength.value=.3+.34*rt.uStorm.value,n.uNearFar.value.set(t.near,t.far)}};var wv=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tPrev;
uniform vec2 uCenter; uniform vec2 uPrevCenter; uniform float uSize; uniform float uDt; uniform float uStorm; uniform float uTexel;
uniform vec3 uPlayer; uniform float uPlayerFoam;
uniform vec4 uSplash[4];      // x, z, ring radius, strength
${Qn}
${Zn}
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
}`,Ga=class{constructor(t,e=1024,i=340){if(this.renderer=t,this.size=e,this.world=i,this.enabled=e>0,!this.enabled)return;let n={type:rt.hdrType,format:de,depthBuffer:!1,minFilter:ee,magFilter:ee};this.rt=[new ye(e,e,n),new ye(e,e,n)],this.idx=0,this.center=new dt,this.prevCenter=new dt,this.u={tPrev:{value:null},uCenter:{value:this.center},uPrevCenter:{value:this.prevCenter},uSize:{value:i},uDt:{value:.016},uStorm:rt.uStorm,uTexel:{value:i/e},uPlayer:{value:new _},uPlayerFoam:{value:0},uSplash:{value:new Float32Array(16)},uWaveA:rt.uWaveA,uWaveB:rt.uWaveB,uBrkA:rt.uBrkA,uBrkB:rt.uBrkB,uBrkC:rt.uBrkC},this.mat=new re({uniforms:this.u,fragmentShader:wv,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"}),this.scene=new Ti,this.quad=new gt(new yi(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.cam=new li(-1,1,1,-1,0,1),this.first=!0,this.splashes=[0,1,2,3].map(()=>({x:0,z:0,s:0,age:9})),this.nextSplash=0}addSplash(t,e,i){if(!this.enabled)return;let n=this.splashes[this.nextSplash];this.nextSplash=(this.nextSplash+1)%4,n.x=t,n.z=e,n.s=Math.min(1,i),n.age=0}update(t,e,i,n,s,a){if(!this.enabled){a.uFoamAccRect.value.w=0;return}let o=this.world/this.size,c=Math.round(e/o)*o,h=Math.round(i/o)*o;this.prevCenter.copy(this.first?new dt(c,h):this.center),this.center.set(c,h);let l=this.rt[this.idx],u=this.rt[1-this.idx];this.u.tPrev.value=l.texture,this.u.uDt.value=t,this.u.uPlayer.value.copy(n),this.u.uPlayerFoam.value=s;let d=this.u.uSplash.value;for(let b=0;b<4;b++){let m=this.splashes[b];m.age+=t;let p=m.age<1.3;d[b*4]=m.x,d[b*4+1]=m.z,d[b*4+2]=.25+1.5*m.age*(.6+.6*m.s),d[b*4+3]=p?m.s*Math.exp(-m.age*2):0}let f=this.renderer,g=f.getRenderTarget();f.setRenderTarget(u),f.render(this.scene,this.cam),f.setRenderTarget(g),this.idx=1-this.idx,this.first=!1,a.uFoamAcc.value=u.texture,a.uFoamAccRect.value.set(c,h,this.world,1)}};var Wa=class{constructor(t,e,i,n,s=4242){this.waves=t,this.body=e,this.player=i,this.spray=n,this.rnd=Ci(s),this.auto=!0,this.next=24,this.megaNext=85+this.rnd()*40,this.threat=0,this.crestDist=1e9,this.crestHeight=0,this.crestDx=0,this.crestDz=0,this.whiteout=0,this.onImpact=null,this.onSplash=null,this._splashCool=0}launch(t={}){let e=this.rnd,i=this.body,n=this.waves.storm;return this.waves.spawnBreaker(i.pos.x+i.vel.x*2,i.pos.z+i.vel.z*2,{lead:t.lead!==void 0?t.lead:13+e()*5,height:t.height!==void 0?t.height:xt(6.5,14.5,n)*(.8+.45*e()),width:t.width!==void 0?t.width:110+e()*90,speed:t.speed!==void 0?t.speed:12.5+e()*3.5,breakOffset:t.breakOffset!==void 0?t.breakOffset:-2+e()*2.3,angleOffset:t.angleOffset!==void 0?t.angleOffset:(e()-.5)*.5,frontMin:t.frontMin,back:t.back})}launchMega(t={}){let e=this.rnd,i=this.body;return this.waves.spawnBreaker(i.pos.x,i.pos.z,{mega:!0,lead:t.lead!==void 0?t.lead:19,height:t.height!==void 0?t.height:30+8*e(),width:520,speed:t.speed||24,breakOffset:t.breakOffset!==void 0?t.breakOffset:-.5,angleOffset:(e()-.5)*.2,frontMin:26,back:120})}update(t,e,i,n){let s=this.waves,a=this.body;if(this.auto){this.megaNext-=t;let f=s.breakers.some(g=>g.active&&g.mega);this.megaNext<=0&&s.storm>.6&&!s.breakers.some(g=>g.active)&&(this.launchMega(),this.megaNext=150+this.rnd()*100),this.next-=t,this.next<=0&&(s.storm>.3&&!f&&this.megaNext>14&&this.launch(),this.next=xt(75,24,s.storm)*(.65+.8*this.rnd()))}let o=0,c=1e9,h=0;for(let f of s.breakers){if(!f.active)continue;let g=a.pos.x-f.ox,b=a.pos.z-f.oz,m=g*f.dx+b*f.dz-f.s,p=-g*f.dz+b*f.dx,y=Math.exp(-(p*p)/(f.width*f.width));m>-10&&m<c&&(c=m,h=f.height*y,this.crestDx=f.dx,this.crestDz=f.dz);let x=mt(1-Math.abs(m)/(f.mega?320:120));o=Math.max(o,x*mt(f.height*y/9))}this.threat+=(o-this.threat)*(1-Math.exp(-t*2.5)),this.crestDist=c,this.crestHeight=h;let l=s.sample(e.x,e.z,this._s||(this._s={h:0})),u=Math.max(l.aer,(l.lip||0)*1.1)*mt(1-(e.y-l.h)/7)*(1-i);this.whiteout+=(Math.min(.93,u*1.6)-this.whiteout)*(1-Math.exp(-t*(u>this.whiteout?14:2.5)));let d=this.player.events;for(let f=0;f<d.length;f++){let g=d[f];g.type==="impact"&&(this.spray.burst(a.pos.x,a.surfaceH+.2,a.pos.z,g.strength*2.2,n,g.dir.x,g.dir.z),this.onImpact&&this.onImpact(g))}d.length=0,this._splashCool-=t,a.splash>3&&this._splashCool<=0&&(this._splashCool=.6,this.spray.burst(a.splashPos.x,a.splashPos.y,a.splashPos.z,Math.min(3.5,(a.splash-2.4)*.9),n),this.onSplash&&this.onSplash(a.splash,a.splashPos))}};var rh={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new dt(1/1024,1/512)}},vertexShader:`

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
	`};var Ev="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Sv=`
varying vec2 vUv; uniform sampler2D tScene; uniform float uThreshold; uniform float uKnee;
void main(){
  vec3 c = textureLod(tScene, vUv, 1.0).rgb;
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-5);
  float w = max(soft, br - uThreshold) / max(br, 1e-5);
  gl_FragColor = vec4(min(c * w, vec3(40.0)), 1.0);
}`,Tv=`
varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 a = texture(tSrc, vUv + t * vec2(-1.0, -1.0)).rgb, b = texture(tSrc, vUv + t * vec2(1.0, -1.0)).rgb;
  vec3 c = texture(tSrc, vUv + t * vec2(-1.0, 1.0)).rgb, d = texture(tSrc, vUv + t * vec2(1.0, 1.0)).rgb;
  vec3 e = texture(tSrc, vUv).rgb;
  gl_FragColor = vec4((a + b + c + d) * 0.2 + e * 0.2, 1.0);
}`,Av=`
varying vec2 vUv; uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 s = texture(tSrc, vUv + t * vec2(-1.0, 0.0)).rgb + texture(tSrc, vUv + t * vec2(1.0, 0.0)).rgb
         + texture(tSrc, vUv + t * vec2(0.0, -1.0)).rgb + texture(tSrc, vUv + t * vec2(0.0, 1.0)).rgb;
  s = s * 0.125 + texture(tSrc, vUv).rgb * 0.5;
  gl_FragColor = vec4(s + texture(tAdd, vUv).rgb, 1.0);
}`,Rv=`
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
}`,Cv=`
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
}`,qa=class{constructor(t){this.renderer=t,this.fsScene=new Ti,this.fsCam=new li(-1,1,1,-1,0,1),this.fsQuad=new gt(new yi(2,2),null),this.fsQuad.frustumCulled=!1,this.fsScene.add(this.fsQuad),this.w=2,this.h=2,this.levels=5,this.useOpaque=!0;let e=(s,a)=>new re({uniforms:a,vertexShader:Ev,fragmentShader:s,depthTest:!1,depthWrite:!1});this.matPre=e(Sv,{tScene:{value:null},uThreshold:{value:.16},uKnee:{value:.12}}),this.matDown=e(Tv,{tSrc:{value:null},uTexel:{value:new dt}}),this.matUp=e(Av,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new dt}}),this.matAdapt=e(Rv,{tScene:{value:null},tPrev:{value:null},uDt:{value:.016},uReset:{value:1}}),this.u={tScene:{value:null},tDepth:{value:null},tBloom:{value:null},tAdapt:{value:null},tLens:{value:null},uNoise:rt.uNoise,uResolution:{value:new dt},uNearFar:{value:new dt(.08,3e4)},uTime:{value:0},uCamPos:{value:new _},uCamRight:{value:new _},uCamUp:{value:new _},uCamFwd:{value:new _},uTanFov:{value:new dt},uPrevViewProj:{value:new At},uMotionBlur:{value:0},uBloom:{value:.55},uExposureKey:{value:.125},uExposureRange:{value:new dt(.5,7)},uExposureBias:{value:1},uWaterPlane:{value:new ne(0,1,0,0)},uUnderAmount:{value:0},uUnderColor:{value:new _(.004,.012,.018)},uUnderExt:{value:new _(.42,.2,.16)},uAeration:{value:0},uUnderDistort:{value:.012},uShaftDir:{value:new _(0,1,0)},uShaft:{value:0},uLensStrength:{value:.05},uSheet:{value:0},uBlur:{value:0},uDofFocus:{value:10},uDofAmount:{value:0},uVignette:{value:.42},uGrain:{value:.028},uTunnel:{value:0},uDesat:{value:0},uFade:{value:0},uWhiteout:{value:0},uGradeMix:{value:1}},this.matComposite=e(Cv,this.u),this.matFXAA=new re({uniforms:{tDiffuse:{value:null},resolution:{value:new dt}},vertexShader:rh.vertexShader,fragmentShader:rh.fragmentShader,depthTest:!1,depthWrite:!1}),this.matCopy=e("varying vec2 vUv; uniform sampler2D tSrc; void main(){ gl_FragColor = texture(tSrc, vUv); }",{tSrc:{value:null}});let i=new Ui(new Uint8Array([0,0,0,0]),1,1);i.needsUpdate=!0,this.blankLens=i,this.u.tLens.value=i,this.rtScene=null,this.rtOpaque=null,this.rtLDR=null,this.down=[],this.up=[];let n={type:rt.hdrType,format:de,depthBuffer:!1,minFilter:Ee,magFilter:Ee};this.adapt=[new ye(1,1,n),new ye(1,1,n)],this.adaptIdx=0,this.adaptReset=!0,this.fxaa=!0,this.prevViewProj=new At,this._vp=new At}setSize(t,e,i){if(t=Math.max(2,Math.floor(t)),e=Math.max(2,Math.floor(e)),!i&&t===this.w&&e===this.h&&this.rtScene)return;this.w=t,this.h=e,(c=>c.forEach(h=>h&&h.dispose()))([this.rtScene,this.rtOpaque,this.rtLDR,...this.down,...this.up]);let s={type:rt.hdrType,format:de,magFilter:ee};this.rtScene=new ye(t,e,{...s,minFilter:si,generateMipmaps:!0,depthBuffer:!0}),this.rtScene.depthTexture=new qn(t,e),this.rtOpaque=new ye(t,e,{...s,minFilter:ee,depthBuffer:!0}),this.rtOpaque.depthTexture=new qn(t,e),this.rtLDR=new ye(t,e,{type:We,format:de,minFilter:ee,magFilter:ee,depthBuffer:!1}),this.down=[],this.up=[];let a=t>>1,o=e>>1;for(let c=0;c<this.levels;c++){a=Math.max(2,a),o=Math.max(2,o);let h={...s,minFilter:ee,depthBuffer:!1};this.down.push(new ye(a,o,h)),c<this.levels-1&&this.up.push(new ye(a,o,h)),a>>=1,o>>=1}rt.uResolution.value.set(t,e),this.adaptReset=!0}_pass(t,e){this.fsQuad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.fsScene,this.fsCam)}render(t,e,i,n){let s=this.renderer,a=this.u;this.useOpaque&&t(this.rtOpaque,!0),t(this.rtScene,!1),this.matPre.uniforms.tScene.value=this.rtScene.texture,this._pass(this.matPre,this.down[0]);for(let d=1;d<this.levels;d++)this.matDown.uniforms.tSrc.value=this.down[d-1].texture,this.matDown.uniforms.uTexel.value.set(1/this.down[d-1].width,1/this.down[d-1].height),this._pass(this.matDown,this.down[d]);let o=this.down[this.levels-1];for(let d=this.levels-2;d>=0;d--)this.matUp.uniforms.tSrc.value=o.texture,this.matUp.uniforms.tAdd.value=this.down[d].texture,this.matUp.uniforms.uTexel.value.set(1/o.width,1/o.height),this._pass(this.matUp,this.up[d]),o=this.up[d];let c=this.adapt[this.adaptIdx],h=this.adapt[1-this.adaptIdx];this.matAdapt.uniforms.tScene.value=this.rtScene.texture,this.matAdapt.uniforms.tPrev.value=c.texture,this.matAdapt.uniforms.uDt.value=i,this.matAdapt.uniforms.uReset.value=this.adaptReset?1:0,this._pass(this.matAdapt,h),this.adaptIdx=1-this.adaptIdx,this.adaptReset=!1,a.tScene.value=this.rtScene.texture,a.tDepth.value=this.rtScene.depthTexture,a.tBloom.value=o.texture,a.tAdapt.value=h.texture,a.uResolution.value.set(this.w,this.h),a.uNearFar.value.set(e.near,e.far),a.uTime.value=n;let l=e.matrixWorld.elements;a.uCamRight.value.set(l[0],l[1],l[2]),a.uCamUp.value.set(l[4],l[5],l[6]),a.uCamFwd.value.set(-l[8],-l[9],-l[10]),a.uCamPos.value.copy(e.position);let u=Math.tan(Rn.degToRad(e.fov)*.5);a.uTanFov.value.set(u*e.aspect,u),a.uPrevViewProj.value.copy(this.prevViewProj),this._vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.prevViewProj.copy(this._vp),this.fxaa?(this._pass(this.matComposite,this.rtLDR),this.matFXAA.uniforms.tDiffuse.value=this.rtLDR.texture,this.matFXAA.uniforms.resolution.value.set(1/this.w,1/this.h),this._pass(this.matFXAA,null)):this._pass(this.matComposite,null)}};var Pv=`
attribute vec4 aDrop;       // x, y (0..1), radius (in screen heights), strength
uniform float uAspect;
varying vec2 vP; varying float vS;
void main() {
  vP = position.xy; vS = aDrop.w;
  vec2 c = aDrop.xy * 2.0 - 1.0;
  gl_Position = vec4(c + position.xy * vec2(aDrop.z / uAspect, aDrop.z) * 2.0 * vec2(1.0, 1.18), 0.0, 1.0);
}`,Lv=`
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
}`,Xa=class{constructor(t,e=120){this.renderer=t,this.max=e,this.rt=new ye(640,360,{type:rt.hdrType,format:de,depthBuffer:!1,minFilter:ee,magFilter:ee}),this.x=new Float32Array(e),this.y=new Float32Array(e),this.r=new Float32Array(e),this.vy=new Float32Array(e),this.vx=new Float32Array(e),this.life=new Float32Array(e),this.wait=new Float32Array(e),this.head=0,this.rainAcc=0,this.count=0,this.trail=new Float32Array(e);let i=new Wi;i.setAttribute("position",new Vt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),this.aDrop=new je(new Float32Array(e*4),4),this.aDrop.setUsage(qi),i.setAttribute("aDrop",this.aDrop),i.instanceCount=0,this.dropMat=new re({uniforms:{uAspect:{value:16/9}},vertexShader:Pv,fragmentShader:Lv,transparent:!0,depthTest:!1,depthWrite:!1,blending:yn}),this.drops=new gt(i,this.dropMat),this.drops.frustumCulled=!1,this.fadeMat=new re({uniforms:{uK:{value:.95}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform float uK; void main(){ gl_FragColor = vec4(uK); }",transparent:!0,depthTest:!1,depthWrite:!1,blending:Yc,blendEquation:sn,blendSrc:Da,blendDst:jc,blendSrcAlpha:Da,blendDstAlpha:cr}),this.fade=new gt(new yi(2,2),this.fadeMat),this.fade.frustumCulled=!1,this.scene=new Ti,this.scene.add(this.fade,this.drops),this.fade.renderOrder=0,this.drops.renderOrder=1,this.cam=new li(-1,1,1,-1,0,1),this.needClear=!0,this.sheet=0}get texture(){return this.rt.texture}spawn(t,e=0){for(let i=0;i<t;i++){let n=this.head;this.head=(this.head+1)%this.max,this.x[n]=Math.random(),this.y[n]=Math.pow(Math.random(),.8);let s=Math.random()<.14+.26*e;this.r[n]=s?.011+Math.random()*.015:.003+Math.random()*.008,this.vy[n]=0,this.vx[n]=0,this.wait[n]=s?Math.random()*1.6:1e9,this.life[n]=s?5.5:1.8+Math.random()*3.2}}wipe(){this.life.fill(0),this.needClear=!0,this.sheet=0}update(t,e,i,n){if(i)(this.count>0||!this.needClear)&&this.wipe();else{this.rainAcc+=t*e;let l=Math.floor(this.rainAcc);this.rainAcc-=l,l>0&&this.spawn(Math.min(l,6))}this.sheet=Math.max(0,this.sheet-t*.42);let s=this.aDrop.array,a=0;for(let l=0;l<this.max;l++){if(this.life[l]<=0)continue;if(this.life[l]-=t,this.wait[l]<1e8&&(this.wait[l]-=t,this.wait[l]<=0)){if(this.vy[l]=Math.min(.2,this.vy[l]+t*(.12+4*this.r[l])),Math.random()<t*.8&&(this.vy[l]*=.2,this.wait[l]=Math.random()*.5),this.vx[l]+=(Math.random()-.5)*t*.5,this.vx[l]*=Math.exp(-t*4),this.y[l]-=this.vy[l]*t,this.x[l]+=this.vx[l]*t,this.trail[l]+=this.vy[l]*t,this.trail[l]>.035+this.r[l]){this.trail[l]=0;let f=this.head;this.head=(this.head+1)%this.max,f!==l&&this.life[f]<=0&&(this.x[f]=this.x[l]+(Math.random()-.5)*.004,this.y[f]=this.y[l]+this.r[l]*1.2,this.r[f]=.0035+Math.random()*.003,this.vy[f]=0,this.vx[f]=0,this.wait[f]=1e9,this.life[f]=.9+Math.random()*1.2,this.trail[f]=0)}if(this.r[l]-=t*.0012,this.y[l]<-.06||this.r[l]<.004){this.life[l]=0;continue}}let u=Math.min(1,this.life[l]/.8),d=a*4;s[d]=this.x[l],s[d+1]=this.y[l],s[d+2]=this.r[l]*(.6+.4*u),s[d+3]=u,a++}this.count=a,this.drops.geometry.instanceCount=a,this.aDrop.needsUpdate=!0,this.dropMat.uniforms.uAspect.value=n,this.fadeMat.uniforms.uK.value=Math.exp(-t*22);let o=this.renderer,c=o.getRenderTarget(),h=o.autoClear;o.setRenderTarget(this.rt),this.needClear&&(o.setClearColor(0,0),o.clear(),this.needClear=!1),o.autoClear=!1,o.render(this.scene,this.cam),o.autoClear=h,o.setRenderTarget(c)}};var Vs={cinematic:{key:"cinematic",label:"CINEMATIC",oceanRings:512,oceanSegs:512,oceanStep:.28,envSize:512,maxPixels:3686400,minScale:.6,refraction:!0,foamAcc:1024,ripples:!0,motionBlur:!0,fxaa:!0,bloomLevels:5,rain:26e3,splashes:2600,spray:9e3,bubbles:1400,motes:2600,lensRes:.5,lensDrops:150},high:{key:"high",label:"HIGH",oceanRings:384,oceanSegs:384,oceanStep:.36,envSize:256,maxPixels:2073600,minScale:.55,refraction:!0,foamAcc:512,ripples:!0,motionBlur:!1,fxaa:!0,bloomLevels:5,rain:15e3,splashes:1500,spray:5e3,bubbles:900,motes:1500,lensRes:.5,lensDrops:100},performance:{key:"performance",label:"PERFORMANCE",oceanRings:256,oceanSegs:256,oceanStep:.5,envSize:128,maxPixels:921600,minScale:.5,refraction:!1,foamAcc:0,ripples:!1,motionBlur:!1,fxaa:!1,bloomLevels:4,rain:6e3,splashes:500,spray:2e3,bubbles:400,motes:600,lensRes:.35,lensDrops:60}},Ya=class{constructor(t){this.renderer=t,this.profile=Vs.cinematic,this.scale=1,this.frameMs=16.7,this.fps=60,this._acc=0,this._slow=0,this._fast=0,this.adaptive=!0,this.info=this.detect()}detect(){let t=this.renderer.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),i=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown",n=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),s=/SwiftShader|llvmpipe|Software|Basic Render/i.test(i),a=/Intel\(R\) (U?HD|Iris)(?! Xe)|Mali|Adreno|PowerVR/i.test(i);return{webgl2:this.renderer.capabilities.isWebGL2,webgpu:typeof navigator<"u"&&!!navigator.gpu,halfFloat:!!t.getExtension("EXT_color_buffer_float")||!!t.getExtension("EXT_color_buffer_half_float"),gpu:i,mobile:n,software:s,weak:a}}pickDefault(){let t=this.info;return t.software||t.mobile?"performance":t.weak?"high":"cinematic"}setProfile(t){this.profile=Vs[t]||Vs.cinematic,this.scale=1,this._slow=this._fast=0}renderSize(t,e){let i=this.profile.maxPixels,n=Math.min(1,Math.sqrt(i/Math.max(1,t*e)));return n*=this.scale,[Math.max(320,Math.round(t*n)),Math.max(180,Math.round(e*n))]}update(t){let e=t*1e3;return this.frameMs+=(e-this.frameMs)*.06,this.fps=1e3/this.frameMs,this.adaptive?(this.frameMs>21.5?(this._slow+=t,this._fast=0):this.frameMs<13.5?(this._fast+=t,this._slow=0):(this._slow*=.9,this._fast*=.9),this._slow>1.5&&this.scale>this.profile.minScale?(this.scale=Math.max(this.profile.minScale,this.scale-.08),this._slow=0,!0):this._fast>6&&this.scale<1?(this.scale=Math.min(1,this.scale+.05),this._fast=0,!0):!1):!1}};var ai=[["hips",-1,0,0,0],["spine",0,0,.12,0],["chest",1,0,.3,0],["neck",2,0,.525,0],["head",3,0,.625,.012],["upperArmL",2,.178,.455,0],["foreArmL",5,.236,.172,.006],["handL",6,.286,-.078,.032],["upperArmR",2,-.178,.455,0],["foreArmR",8,-.236,.172,.006],["handR",9,-.286,-.078,.032],["thighL",0,.096,-.07,0],["shinL",11,.106,-.505,.006],["footL",12,.106,-.925,-.016],["thighR",0,-.096,-.07,0],["shinR",14,-.106,-.505,.006],["footR",15,-.106,-.925,-.016]],T={};ai.forEach((r,t)=>{T[r[0]]=t});var Iv=new _(0,.082,.088),qt={jacket:[.72,.15,.04],jacketDark:[.42,.085,.028],tape:[.85,.87,.84],pants:[.045,.055,.08],shoe:[.022,.022,.024],skin:[.62,.43,.34],skinDark:[.46,.29,.22],hair:[.03,.024,.02],lip:[.36,.16,.14],eye:[.05,.035,.03]},ja=class{constructor(){this.pos=[],this.col=[],this.si=[],this.sw=[],this.idx=[],this.n=0}vert(t,e,i){this.pos.push(t.x,t.y,t.z),this.col.push(e[0],e[1],e[2]);let n=[0,0,0,0],s=[0,0,0,0],a=0;for(let o=0;o<i.length&&o<4;o++)n[o]=i[o][0],s[o]=i[o][1],a+=i[o][1];for(let o=0;o<4;o++)s[o]/=a||1;return this.si.push(...n),this.sw.push(...s),this.n++}tube(t,e,i=!0,n=!0){let s=new _,a=new _,o=new _,c=new _,h=new _(0,0,1),l=new _(0,1,0),u=[];for(let f=0;f<t.length;f++){let g=t[Math.max(0,f-1)].c,b=t[Math.min(t.length-1,f+1)].c;s.subVectors(b,g).normalize(),t[f].ax?a.copy(t[f].ax):(a.crossVectors(s,h),a.lengthSq()<.04&&a.crossVectors(s,l),a.normalize()),o.crossVectors(a,s).normalize();let m=this.n;for(let p=0;p<e;p++){let y=p/e*Math.PI*2,x=Math.cos(y),M=Math.sin(y),R=t[f].rx,v=t[f].rz;if(t[f].shape){let A=t[f].shape(y,x,M);R*=A,v*=A}c.copy(t[f].c).addScaledVector(a,x*R).addScaledVector(o,M*v);let w=typeof t[f].col=="function"?t[f].col(y,c):t[f].col;this.vert(c,w,t[f].w)}u.push(m)}for(let f=0;f<u.length-1;f++)for(let g=0;g<e;g++){let b=u[f]+g,m=u[f]+(g+1)%e,p=u[f+1]+g,y=u[f+1]+(g+1)%e;this.idx.push(b,p,m,m,p,y)}let d=(f,g,b)=>{let m=typeof g.col=="function"?g.col(0,g.c):g.col,p=this.vert(g.c,m,g.w);for(let y=0;y<e;y++){let x=f+y,M=f+(y+1)%e;b?this.idx.push(p,M,x):this.idx.push(p,x,M)}};i&&d(u[0],t[0],!0),n&&d(u[u.length-1],t[t.length-1],!1)}build(){let t=new he;return t.setAttribute("position",new se(this.pos,3)),t.setAttribute("color",new se(this.col,3)),t.setAttribute("skinIndex",new Is(this.si,4)),t.setAttribute("skinWeight",new se(this.sw,4)),t.setIndex(this.idx),t.computeVertexNormals(),t}},Ae=(r,t,e)=>new _(r,t,e),Ni=(r,t,e)=>new _().lerpVectors(r,t,e),yd=(r,t,e)=>{let i=Math.max(0,Math.min(1,(e-r)/(t-r)));return i*i*(3-2*i)};function Fv(){let r=new ja,t=18,e=s=>{let a=ai[T[s]];return Ae(a[2],a[3],a[4])},i=[[-.135,.12,.095],[-.085,.165,.116],[-.02,.176,.12],[.05,.166,.114],[.11,.156,.108],[.17,.152,.106],[.24,.164,.114],[.31,.18,.124],[.385,.184,.128],[.445,.186,.118],[.488,.152,.1],[.52,.1,.086],[.552,.08,.08],[.58,.074,.076]],n=s=>{if(s<.02)return[[T.hips,1]];if(s<.14){let a=yd(.02,.14,s);return[[T.hips,1-a],[T.spine,a]]}if(s<.2)return[[T.spine,1]];if(s<.32){let a=yd(.2,.32,s);return[[T.spine,1-a],[T.chest,a]]}return[[T.chest,1]]};r.tube(i.map(([s,a,o])=>{let c=s>-.06,h=c?1.07:1;return{c:Ae(0,s,c?.004:0),rx:a*h,rz:o*h,w:n(s),col:(l,u)=>c?s>.28&&s<.325?qt.tape:Math.abs(u.x)<.012&&u.z>0||s>.5?qt.jacketDark:qt.jacket:qt.pants}}),t),r.tube([{c:Ae(0,.53,.002),rx:.063,rz:.066,col:qt.skin,w:[[T.chest,.6],[T.neck,.4]]},{c:Ae(0,.575,.006),rx:.061,rz:.064,col:qt.skin,w:[[T.neck,1]]},{c:Ae(0,.63,.012),rx:.06,rz:.063,col:qt.skin,w:[[T.neck,.5],[T.head,.5]]},{c:Ae(0,.665,.016),rx:.057,rz:.06,col:qt.skin,w:[[T.head,1]]}],14);for(let s of[1,-1]){let a=s>0?T.upperArmL:T.upperArmR,o=s>0?T.foreArmL:T.foreArmR,c=s>0?T.handL:T.handR,h=e(s>0?"upperArmL":"upperArmR"),l=e(s>0?"foreArmL":"foreArmR"),u=e(s>0?"handL":"handR"),d=Ae(u.x+s*.03,u.y-.182,u.z+.012),f=[];f.push({c:Ae(h.x-s*.012,h.y+.052,0),rx:.036,rz:.04,col:qt.jacket,w:[[T.chest,.65],[a,.35]]}),f.push({c:Ae(h.x+s*.004,h.y+.02,0),rx:.064,rz:.066,col:qt.jacket,w:[[T.chest,.4],[a,.6]]});let g=[[.12,.066],[.3,.062],[.52,.058],[.74,.054],[.9,.052]];for(let[y,x]of g){let M=y>.28&&y<.4;f.push({c:Ni(h,l,y),rx:x,rz:x*1.04,col:M?qt.tape:qt.jacket,w:y>.8?[[a,.75],[o,.25]]:[[a,1]]})}f.push({c:l.clone(),rx:.051,rz:.053,col:qt.jacket,w:[[a,.5],[o,.5]]});let b=[[.12,.052],[.32,.051],[.55,.046],[.78,.041],[.9,.04]];for(let[y,x]of b)f.push({c:Ni(l,u,y),rx:x,rz:x,col:y>.86?qt.jacketDark:qt.jacket,w:y<.2?[[a,.25],[o,.75]]:[[o,1]]});f.push({c:Ni(l,u,.955),rx:.027,rz:.031,col:qt.skin,w:[[o,1]]}),f.push({c:u.clone(),rx:.021,rz:.031,col:qt.skin,w:[[o,.5],[c,.5]]}),f.push({c:Ni(u,d,.3),rx:.017,rz:.044,col:qt.skin,w:[[c,1]]}),f.push({c:Ni(u,d,.55),rx:.015,rz:.046,col:qt.skin,w:[[c,1]]}),f.push({c:Ni(u,d,.8),rx:.012,rz:.04,col:qt.skinDark,w:[[c,1]]}),f.push({c:d.clone(),rx:.007,rz:.022,col:qt.skinDark,w:[[c,1]]}),r.tube(f,12);let m=Ni(u,d,.22).add(Ae(0,0,.034)),p=Ni(u,d,.52).add(Ae(s*.008,0,.066));r.tube([{c:m,rx:.012,rz:.013,col:qt.skin,w:[[c,1]]},{c:Ni(m,p,.6),rx:.011,rz:.011,col:qt.skin,w:[[c,1]]},{c:p,rx:.007,rz:.007,col:qt.skinDark,w:[[c,1]]}],7)}for(let s of[1,-1]){let a=s>0?T.thighL:T.thighR,o=s>0?T.shinL:T.shinR,c=s>0?T.footL:T.footR,h=e(s>0?"thighL":"thighR"),l=e(s>0?"shinL":"shinR"),u=e(s>0?"footL":"footR"),d=[];d.push({c:Ae(h.x,h.y+.045,0),rx:.08,rz:.09,col:qt.pants,w:[[T.hips,.7],[a,.3]]});let f=[[.05,.094,.1],[.25,.09,.096],[.5,.079,.084],[.75,.067,.07],[.92,.06,.062]];for(let[m,p,y]of f)d.push({c:Ni(h,l,m),rx:p,rz:y,col:qt.pants,w:m<.15?[[T.hips,.4],[a,.6]]:m>.85?[[a,.75],[o,.25]]:[[a,1]]});d.push({c:l.clone(),rx:.058,rz:.061,col:qt.pants,w:[[a,.5],[o,.5]]});let g=[[.1,.056,.06],[.28,.057,.066],[.5,.05,.056],[.75,.042,.045],[.93,.038,.04]];for(let[m,p,y]of g)d.push({c:Ni(l,u,m).add(Ae(0,0,m>.15&&m<.6?-.008:0)),rx:p,rz:y,col:qt.pants,w:m<.2?[[a,.25],[o,.75]]:[[o,1]]});d.push({c:u.clone(),rx:.036,rz:.04,col:qt.shoe,w:[[o,.5],[c,.5]]}),r.tube(d,14,!0,!1);let b=u.y-.045;r.tube([{c:Ae(u.x,b+.012,u.z-.068),rx:.03,rz:.03,col:qt.shoe,w:[[c,1]]},{c:Ae(u.x,b+.006,u.z-.035),rx:.042,rz:.046,col:qt.shoe,w:[[c,.8],[o,.2]]},{c:Ae(u.x,b,u.z+.03),rx:.046,rz:.048,col:qt.shoe,w:[[c,1]]},{c:Ae(u.x+s*.004,b-.008,u.z+.1),rx:.049,rz:.036,col:qt.shoe,w:[[c,1]]},{c:Ae(u.x+s*.006,b-.014,u.z+.165),rx:.044,rz:.026,col:qt.shoe,w:[[c,1]]},{c:Ae(u.x+s*.006,b-.018,u.z+.205),rx:.028,rz:.016,col:qt.shoe,w:[[c,1]]}],12)}return r.build()}function Dv(){let r=new ja,t=Ae(0,.722,.022),e=20,i=26,n=[];for(let h=0;h<=e;h++){let l=h/e*Math.PI,u=Math.cos(l),d=Math.sin(l),f=Math.max(0,-u),g=t.y+u*(u>0?.108:.118),b=.078*(1-.3*f*f),m=.097*(1-.2*f*f),p=t.z+.012*f-.006*Math.max(0,u);n.push({c:Ae(0,g,p),ax:Ae(1,0,0),rx:Math.max(.004,b*d),rz:Math.max(.004,m*d),w:f>.75?[[T.head,.7],[T.neck,.3]]:[[T.head,1]],shape:(y,x,M)=>{let R=Math.max(0,-M),v=1,w=g-t.y;return v+=.2*Math.exp(-Math.pow((w+.022)/.02,2))*Math.pow(R,26)*Math.pow(Math.max(0,1-Math.abs(x)*5),1),v+=.035*Math.exp(-Math.pow((w-.03)/.016,2))*Math.pow(R,3),v-=.03*Math.exp(-Math.pow((w-.008)/.012,2))*Math.pow(R,2)*Math.exp(-Math.pow((Math.abs(x)-.36)/.16,2)),v+=.05*Math.exp(-Math.pow((w+.088)/.022,2))*Math.pow(R,4),v},col:(y,x)=>{let M=x.y-t.y,R=x.x,v=x.z-t.z,w=v>0,A=w?.058+Math.abs(R)*-.25:-.045-Math.max(0,-v)*.2;if(M>A)return qt.hair;if(w){if(Math.abs(M-.01)<.01&&Math.abs(Math.abs(R)-.031)<.014)return qt.eye;if(Math.abs(M-.03)<.006&&Math.abs(Math.abs(R)-.031)<.022)return qt.hair;if(Math.abs(M+.058)<.007&&Math.abs(R)<.024)return qt.lip;if(M<-.02&&M>-.1&&Math.abs(R)>.02)return qt.skinDark}return qt.skin}})}r.tube(n,i,!1,!1);let s=r.build(),a=s.attributes.position,o=s.attributes.color,c=s.attributes.normal;for(let h=0;h<a.count;h++)o.getX(h)<.04&&o.getY(h)<.03&&a.setXYZ(h,a.getX(h)+c.getX(h)*.008,a.getY(h)+c.getY(h)*.008,a.getZ(h)+c.getZ(h)*.008);return s.computeVertexNormals(),s}var Ka=class{constructor(){this.group=new ce,this.group.name="survivor",this.bones=ai.map(t=>{let e=new Yn;return e.name=t[0],e}),ai.forEach((t,e)=>{let i=this.bones[e];if(t[1]>=0){let n=ai[t[1]];i.position.set(t[2]-n[2],t[3]-n[3],t[4]-n[4]),this.bones[t[1]].add(i)}else i.position.set(t[2],t[3],t[4])}),this.root=this.bones[0],this.group.add(this.root),this.group.updateMatrixWorld(!0),this.skeleton=new ks(this.bones),this.material=new ui({vertexColors:!0,roughness:.62,metalness:0,clearcoat:.28,clearcoatRoughness:.32,envMapIntensity:1}),this.body=new Xn(Fv(),this.material),this.head=new Xn(Dv(),this.material);for(let t of[this.body,this.head])t.frustumCulled=!1,t.layers.enable(1),this.group.add(t),t.bind(this.skeleton,new At);this.body.visible=!1,this.head.visible=!1,this._v=new _,this.eyeLocal=Iv.clone(),this.glb=null}useGlb(t){this.glb=t,this.body.visible=!1,this.head.visible=!1,this.procHead=this.head,this.head={_v:!0,get visible(){return this._v},set visible(e){this._v=e,t.setHeadVisible(e)}},this.material=t.material,this.eyeLocal.set(0,t.eye.y-ai[T.head][3],t.eye.z-ai[T.head][4]+.06)}retarget(){this.glb&&this.glb.update(this.bones)}bone(t){return this.bones[T[t]]}eyeWorld(t){return t.copy(this.eyeLocal).applyMatrix4(this.bones[T.head].matrixWorld)}};var _d=1025,kv=1.22,Er=9.81,Qa=.55;function zi(r,t,e,i,n,s,a,o,c=-1,h=-1){return{name:r,offset:new _(t,e,i),rest:new _(t,e,i),vol:n/1e3,half:s,cdaP:a,cdaA:o,bone:c,boneB:h,sub:0,depth:-10,world:new _,wasSub:0}}var Za=class r{constructor(t){this.waves=t,this.mass=80.6,this.inertia=new _(11.5,1.7,12.5),this.pos=new _,this.vel=new _,this.quat=new _t,this.angVel=new _,this.prevPos=new _,this.prevQuat=new _t,this.points=[zi("head",0,.7,.02,5.2,.11,.035,.012),zi("chest",0,.38,.01,29.7,.15,.13,.03),zi("pelvis",0,0,0,15.5,.13,.11,.02),zi("shoulderL",.21,.4,0,3.2,.07,.035,.006),zi("shoulderR",-.21,.4,0,3.2,.07,.035,.006),zi("armL",.28,.05,.02,1.8,.05,.04,.005,T.handL),zi("armR",-.28,.05,.02,1.8,.05,.04,.005,T.handR),zi("legL",.1,-.33,0,6.5,.09,.07,.008,T.shinL),zi("legR",-.1,-.33,0,6.5,.09,.07,.008,T.shinR),zi("footL",.105,-.82,0,3.4,.06,.055,.006,T.footL),zi("footR",-.105,-.82,0,3.4,.06,.055,.006,T.footR)],this.totalVol=this.points.reduce((e,i)=>e+i.vol,0),this.breathVol=0,this.extForce=new _,this.extTorque=new _,this.wind=new _,this.waterTorque=new _,this.hydroTorque=new _,this.subFrac=0,this.mouthDepth=-1,this.eyeDepth=-1,this.relFlow=new _,this.relSpeed=0,this.dragG=0,this.aer=0,this.turb=0,this.plunge=0,this.surface=fi(),this.surfaceH=0,this.splash=0,this.splashPos=new _,this._s=fi(),this._w={vx:0,vy:0,vz:0,ax:0,ay:0,az:0},this._r=new _,this._p=new _,this._vp=new _,this._u=new _,this._f=new _,this._F=new _,this._T=new _,this._axis=new _,this._tmp=new _,this._tmp2=new _,this._qi=new _t,this._dq=new _t,this._up=new _,this._mouth=new _(0,.655,.105),this._eye=new _(0,.705,.1)}reset(t,e){let i=this.waves.sample(t,e,this._s);this.pos.set(t,i.h-.62,e),this.vel.set(i.vx,i.vy,i.vz),this.quat.identity(),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat)}setAirway(t,e){this._mouth.copy(t),this._eye.copy(e),this._mouthH=new _(t.x,t.y-.625,t.z-.012),this._eyeH=new _(e.x,e.y-.625,e.z-.012)}pin(t,e,i,n){this.pos.copy(t),this.prevPos.copy(t),this.quat.copy(e),this.prevQuat.copy(e),this.vel.copy(i),this.angVel.copy(n);let s=this._r.copy(this._mouth).applyQuaternion(e).add(t),a=this.waves.sample(s.x,s.z,this.surface);this.surfaceH=a.h,this.mouthDepth=a.h-s.y;let o=this._p.copy(this._eye).applyQuaternion(e).add(t);this.eyeDepth=a.h-o.y,this.subFrac=Math.max(0,Math.min(1,(a.h-t.y+.2)/.7)),this.relFlow.set(0,0,0),this.relSpeed=0,this.dragG=0,this.aer=a.aer,this.turb=a.turb,this.plunge=0,this.splash=0,this.extForce.set(0,0,0),this.extTorque.set(0,0,0)}syncLimbs(t){let e=this._tmp,i=t.group.matrixWorld,n=r._im||(r._im=new At);n.copy(i).invert(),this._mouthH||this.setAirway(this._mouth.clone(),this._eye.clone());let s=t.bones[T.head].matrixWorld;e.copy(this._mouthH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._mouth.lerp(e,.5),e.copy(this._eyeH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._eye.lerp(e,.5);for(let a of this.points)a.bone<0||(e.setFromMatrixPosition(t.bones[a.bone].matrixWorld).applyMatrix4(n),e.lengthSq()<1.6&&a.offset.lerp(e,.5))}step(t){let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._F.set(0,0,0),n=this._T.set(0,0,0),s=this._axis.set(0,1,0).applyQuaternion(this.quat),a=0,o=0,c=0,h=0,l=0,u=0;this.relFlow.set(0,0,0),this.splash=0;let d=this._tmp2.set(0,0,0),f=0,g=0;for(let O=0;O<this.points.length;O++){let U=this.points[O],I=this._r.copy(U.offset).applyQuaternion(this.quat),B=this._p.copy(this.pos).add(I);U.world.copy(B);let W=this._vp.copy(this.angVel).cross(I).add(this.vel),Q=e.sample(B.x,B.z,this._s),H=Q.h-B.y;U.depth=H;let N=Math.max(0,Math.min(1,(H+U.half)/(2*U.half)));if(U.bone<0&&N>.5!=U.wasSub>.5){let j=Math.abs(W.y-Q.vy)+.4*Math.hypot(W.x-Q.vx,W.z-Q.vz);j>this.splash&&(this.splash=j,this.splashPos.set(B.x,Q.h,B.z))}U.wasSub=N,U.sub=N;let q=this._f.set(0,0,0),et=U.vol+(O===1?this.breathVol/1e3:0);if(N>0){let j=Math.max(0,H),st=Q.aer*Math.exp(-j/3.5),ct=_d*(1-.72*st);st>c&&(c=st),Q.turb>h&&(h=Q.turb),Q.plunge>u&&(u=Q.plunge);let ot=e.bodyFlow(Q.x0,Q.z0,j,this._w),Et=Math.exp(-j/80),X=Math.exp(-j/(2.5+.35*Math.max(0,Q.brkH)));ot.vx+=Q.bvx*(.25*Et+.75*X),ot.vy+=Q.bvy*Et,ot.vz+=Q.bvz*(.25*Et+.75*X),Q.plunge>.01&&(ot.vy-=Q.plunge*Math.exp(-j/(2+.45*Math.max(0,Q.brkH)))),e.breakerFlow(B.x,B.y,B.z,Q.h,ot);let Bt=ct*et*N;f+=-I.z*Bt*Er,g+=I.x*Bt*Er,q.set(Bt*(1+Qa)*ot.ax,Bt*(Er+(1+Qa)*(ot.ay+Q.bay*Et)),Bt*(1+Qa)*ot.az);let St=this._u.set(ot.vx-W.x,ot.vy-W.y,ot.vz-W.z),Rt=St.dot(s),yt=this._tmp.copy(s).multiplyScalar(Rt),Nt=this._up.copy(St).sub(yt),Pt=.5*ct*U.cdaP*N*Nt.length()+24*U.cdaP*N/.1,D=.5*ct*U.cdaA*N*Math.abs(Rt)+8*N*U.cdaA/.01,C=Nt.x*Pt+yt.x*D,Z=Nt.y*Pt+yt.y*D,lt=Nt.z*Pt+yt.z*D;q.x+=C,q.y+=Z,q.z+=lt,d.x+=C,d.y+=Z,d.z+=lt,a+=et*N,this.relFlow.addScaledVector(St,et*N),l+=et*N}if(N<1){let j=this._u.set(this.wind.x-W.x,this.wind.y-W.y,this.wind.z-W.z),st=.5*kv*U.cdaP*1.1*(1-N)*j.length();q.addScaledVector(j,st)}i.add(q),n.add(this._tmp.copy(I).cross(q))}o=d.length(),this.hydroTorque.set(f,0,g),this.subFrac=a/this.totalVol,this.aer=c,this.turb=h,this.plunge=u,l>0&&this.relFlow.multiplyScalar(1/l),this.relSpeed=this.relFlow.length(),this.dragG=o/(this.mass*Er);let b=this.mass+Qa*_d*a;i.add(this.extForce),i.y-=this.mass*Er,this.vel.addScaledVector(i,t/b);let m=this.vel.length();m>45&&this.vel.multiplyScalar(45/m),this.pos.addScaledVector(this.vel,t),this.waterTorque.copy(n),n.add(this.extTorque);let p=this._qi.copy(this.quat).invert(),y=this._tmp.copy(this.angVel).applyQuaternion(p),x=this._tmp2.copy(n).applyQuaternion(p),M=1+.6*this.subFrac,R=this.inertia.x*M,v=this.inertia.y*M,w=this.inertia.z*M,A=(x.x-(w-v)*y.y*y.z)/R,E=(x.y-(R-w)*y.z*y.x)/v,S=(x.z-(v-R)*y.x*y.y)/w;y.x+=A*t,y.y+=E*t,y.z+=S*t;let z=Math.exp(-(.25+1.1*this.subFrac)*t);y.multiplyScalar(z);let V=y.length();V>14&&y.multiplyScalar(14/V),this.angVel.copy(y).applyQuaternion(this.quat);let it=this.angVel.length()*t;it>1e-7&&(this._dq.setFromAxisAngle(this._r.copy(this.angVel).normalize(),it),this.quat.premultiply(this._dq).normalize());let k=this._r.copy(this._mouth).applyQuaternion(this.quat).add(this.pos),P=e.sample(k.x,k.z,this.surface);this.surfaceH=P.h,this.mouthDepth=P.h-k.y;let L=this._p.copy(this._eye).applyQuaternion(this.quat).add(this.pos);this.eyeDepth=P.h-L.y}};var Ja=class{constructor(){this.reset(),this.events=[]}reset(){this.oxygen=100,this.stamina=100,this.temp=37,this.fatigue=0,this.blackout=0,this.alive=!0,this.cause="",this.timeAlive=0,this.breathPhase=0,this.lung=.6,this.breathRate=.3,this.exertion=0,this.gaspTimer=0,this.submergedTime=0,this.wasUnder=!1,this.swallow=0,this.eff=1,this.condition=1,this.shiver=0,this.inhaling=!1,this.lungAtDive=.6}update(t,e){if(!this.alive)return;this.timeAlive+=t;let i=e.mouthUnder,n=e.effort;if(this.exertion+=(mt(n*.6+(100-this.stamina)/160+(100-this.oxygen)/120)-this.exertion)*(1-Math.exp(-t*.8)),i)this.submergedTime+=t,this.oxygen-=t*(2.3+2.4*n+1.5*e.turb)*(1+.5*this.swallow)*(1.3-.45*this.lungAtDive),this.wasUnder||(this.inhaling&&e.sudden&&(this.swallow=Math.min(1,this.swallow+.45),this.oxygen-=6),this.lungAtDive=this.lung,this.events.push({type:"submerge",lung:this.lung})),this.lung=Math.max(.12,this.lung-t*(.025+.03*n));else{if(this.wasUnder){let y=mt((100-this.oxygen)/60+this.submergedTime/12);this.gaspTimer=1.5+5.5*y,this.events.push({type:"surface",need:y,time:this.submergedTime}),this.breathPhase=0,this.submergedTime=0}let u=this.gaspTimer>0?1:0;this.gaspTimer=Math.max(0,this.gaspTimer-t),this.oxygen+=t*(15+13*u)*(1-.6*this.swallow),this.swallow=Math.max(0,this.swallow-t*.12);let d=xt(.26,.95,mt(this.exertion*.9+u*.55));this.breathRate+=(d-this.breathRate)*(1-Math.exp(-t*1.4));let f=this.stamina<25?1+.35*Math.sin(this.timeAlive*2.7)*Math.sin(this.timeAlive*1.3):1,g=this.breathPhase;this.breathPhase+=t*this.breathRate*f,this.breathPhase>=1&&(this.breathPhase-=1);let b=this.breathPhase<.4;b&&!this.inhaling&&this.events.push({type:"inhale",strength:mt(.25+this.exertion*.8+u*.6),gasp:u>0&&g>this.breathPhase?1:u}),!b&&this.inhaling&&this.events.push({type:"exhale",strength:mt(.2+this.exertion*.7+u*.4),cough:this.swallow>.25?1:0}),this.inhaling=b;let m=xt(.45,.95,mt(this.exertion+u)),p=b?.45+.5*m*(this.breathPhase/.4):.95*m-(.95*m-.4)*((this.breathPhase-.4)/.6)+0;this.lung+=(_i(p,.3,1)-this.lung)*(1-Math.exp(-t*9)),e.brace>.5&&(this.lung+=(1-this.lung)*(1-Math.exp(-t*5)))}this.wasUnder=i,this.oxygen=_i(this.oxygen,0,100);let s=De(36,32.5,this.temp),a=1-mt((36-this.temp)/3.5),o=100-this.fatigue*.62,c=n>.42?(n-.42)*7:0,h=i?0:n<.42?(3.4-n*4)*(.45+.55*a)*(1-this.fatigue/170):0;this.stamina=_i(this.stamina+(h-c)*t,0,o),this.fatigue=_i(this.fatigue+t*(.035+.16*n),0,100);let l=.0042*(1+.45*n)*(.6+.4*e.subFrac)*(1+.3*e.storm);this.temp-=l*t,this.shiver=mt((36.2-this.temp)/1.6)*(1-mt((33-this.temp)/1.5)),this.oxygen<=.01?this.blackout+=t/11:this.blackout-=t/3.5,this.temp<31.5&&(this.blackout+=t/40),this.blackout=mt(this.blackout),this.blackout>=1&&(this.alive=!1,this.cause=this.temp<31.5&&this.oxygen>5?"cold":"drown",this.events.push({type:"dead",cause:this.cause})),this.eff=xt(.32,1,De(0,38,this.stamina))*(.45+.55*a)*(1-.6*this.blackout),this.condition=mt(Math.min(this.oxygen/100+.25,1)*(.4+.6*this.stamina/100)*(.35+.65*a)*(1-this.blackout))}};var Jn=new _(0,1,0),$a=class{constructor(t,e,i){this.body=t,this.survival=e,this.input=i,this.yaw=Math.PI,this.pitch=0,this.control=1,this.impact=0,this.impactPeak=0,this.moveAmt=0,this.effort=0,this.swimBlend=0,this.underSwim=0,this.crawlBlend=0,this.diveBlend=0,this.riseBlend=0,this.swimHeld=!1,this.diveHeld=!1,this.upHeld=!1,this.sprintHeld=!1,this.diveTime=0,this.moveDir=new _(0,0,1),this.heading=new _(0,0,1),this.facing=new _(0,0,1),this.recover=0,this.strokePhase=0,this.brace=0,this.air=0,this.grab=null,this.cling=!1,this.faceDir=null,this.struggleW=0,this.tumble=0,this.events=[],this._lastImpact=-10,this._time=0,this._fwd=new _,this._right=new _,this._dir=new _,this._x=new _,this._y=new _,this._z=new _,this._m=new At,this._qt=new _t,this._qe=new _t,this._ax=new _,this._h=new _}fixedUpdate(t){let e=this.body,i=this.survival,n=this.input;this._time+=t;let s=e.dragG,a=s>this.impact+.25;this.impact=s>this.impact?xt(this.impact,s,1-Math.exp(-t*30)):this.impact*Math.exp(-t*2.2),this.impactPeak=Math.max(this.impactPeak*Math.exp(-t*1.2),s),s>1.4&&a&&this._time-this._lastImpact>.8&&(this._lastImpact=this._time,this.events.push({type:"impact",strength:s,dir:e.relFlow.clone().normalize(),aer:e.aer}));let o=mt(1-De(.9,3.2,this.impact)-.75*e.aer-.55*e.turb-.9*this.air),c=o<this.control?14:.55+.9*i.eff;this.control+=(Math.max(.04,o)-this.control)*(1-Math.exp(-t*c));let h=this.control*(i.alive?1:0)*(1-.8*i.blackout);this.tumble+=(mt(e.angVel.length()/3.5)*(1-h*.6)-this.tumble)*(1-Math.exp(-t*3)),this.recover=Math.max(0,this.recover-t);let l=n.enabled?n.axisX():0,u=n.enabled?n.axisZ():0,d=n.enabled&&n.swim(),f=n.enabled&&n.dive(),g=d&&!this.cling;this.swimHeld=d,this.diveHeld=f,this.sprintHeld=g,this.upHeld=g&&e.mouthDepth>.45&&!f,this.diveTime=f?this.diveTime+t:0;let b=this._fwd.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),m=this._right.set(-b.z,0,b.x);this.facing.copy(b);let p=this._h.copy(b).multiplyScalar(u).addScaledVector(m,l),y=Math.min(1,p.length());y>.05?p.multiplyScalar(1/p.length()):(p.copy(b),y=0),this.cling&&this.faceDir&&(p.copy(this.faceDir),y=0),this.heading.lerp(p,1-Math.exp(-t*(y>0||g||f||this.fp||this.cling?7:1.5))).normalize();let x=e.mouthDepth>.45,M=Math.max(0,e.mouthDepth);this.underSwim+=((x||f&&e.mouthDepth>.1?1:0)-this.underSwim)*(1-Math.exp(-t*5)),this.diveBlend+=((f?1:0)-this.diveBlend)*(1-Math.exp(-t*(f?7:3.5)));let R=x&&!f;this.riseBlend+=((R?1:0)-this.riseBlend)*(1-Math.exp(-t*4));let v=this._dir.set(0,0,0),w=0,A=0;if(f){let N=.95*mt((6.5-M)/2.5);v.copy(this.heading).multiplyScalar(.55+.45*(1-N)).addScaledVector(Jn,-N).normalize(),w=1,A=g?360:270}else x?g?(v.copy(this.heading).multiplyScalar(y>0?.75:.35).addScaledVector(Jn,.9).normalize(),w=1,A=360):y>0&&(v.copy(this.heading).multiplyScalar(y).addScaledVector(Jn,.45*Math.min(1,M/.8)).normalize(),w=y,A=170):g?(v.copy(this.heading),w=1,A=380):y>0&&(v.copy(this.heading),w=y,A=150);w>.01&&this.moveDir.lerp(v,1-Math.exp(-t*6)).normalize(),this.moveAmt+=(w-this.moveAmt)*(1-Math.exp(-t*5));let E=i.eff*h,S=Math.min(1,e.subFrac*1.25),z=e.extForce.set(0,0,0),V=0;if(w>.01){let N=1+.3*this.swimBlend*Math.sin(2*this.strokePhase)+.38*this.underSwim*Math.sin(this.strokePhase-1),q=x||f?1:mt(1+(e.mouthDepth+.28+.22*this.crawlBlend)*3.5);z.addScaledVector(v,A*E*S*w*N*q*(this.grab?.2:1)),V+=(A>200?.8:.45)*w,f&&this.diveTime<1.1&&M<1.2&&(z.y-=260*E*Math.sin(Math.min(1,this.diveTime/1.1)*Math.PI))}let it=.22+.22*this.crawlBlend;if(!x&&e.mouthDepth<-it&&this.air<.3&&e.pos.y-e.surfaceH<1&&(z.y-=Math.min(520,(-e.mouthDepth-it)*1500)),x&&!f&&!g&&(z.y+=165*E*S,V+=.5),!x&&!f){let N=e.vel.y-e.surface.vy,q=.06+.07*mt(i.stamina/60)+.17*this.crawlBlend,et=Math.max(0,Math.min(210+110*this.crawlBlend,(e.mouthDepth+q)*1e3-N*140))*E*S*(1+.45*Math.sin(2*this.strokePhase));this.struggleW>.05&&(et=et*(1-.65*this.struggleW)+175*this.struggleW*E*S*Math.max(0,Math.sin(this.strokePhase))),z.y+=et,V+=.34*Math.min(1,et/100)*(1-this.crawlBlend)+.08}if(this.grab){let N=this.grab.x-e.pos.x,q=this.grab.z-e.pos.z,et=Math.hypot(N,q);if(et<4.5){let j=Math.min(280,et*230)*h;z.x+=N/(et+.001)*j,z.z+=q/(et+.001)*j,z.y+=70*S}}this.cling&&(V=Math.min(V,.14)),this.effort+=(V-this.effort)*(1-Math.exp(-t*6));let k=!x&&!f&&w>.15?g?1:.5*w:0;this.crawlBlend+=((g&&!x&&!f?1:0)-this.crawlBlend)*(1-Math.exp(-t*4)),this.swimBlend+=(k-this.swimBlend)*(1-Math.exp(-t*(k>this.swimBlend?3.2:2.2)));let P=this._y,L=this._z,O=this._x,U=this._ax.set(this.heading.x,0,this.heading.z);U.lengthSq()<.01?U.copy(b):U.normalize();let I=this._time;if(f||x&&w>.1)P.copy(v),L.copy(Jn).multiplyScalar(-(1-Math.abs(P.y))).addScaledVector(U,P.y),L.addScaledVector(P,-L.dot(P));else if(x)P.copy(Jn).addScaledVector(U,.12),P.normalize(),L.copy(U),L.addScaledVector(P,-L.dot(P));else{let N=this.swimBlend;P.copy(Jn).multiplyScalar(1-N*.6).addScaledVector(U,N);let q=1-N;P.addScaledVector(U,q*(.13+.07*Math.sin(I*.83)*Math.sin(I*.31))),P.addScaledVector(m,q*.08*Math.sin(I*.57+1.3)*Math.sin(I*.23+.4)),P.normalize(),L.copy(U).multiplyScalar(1-N*.9).addScaledVector(Jn,-N*.9),L.addScaledVector(P,-L.dot(P))}L.lengthSq()<1e-4&&L.copy(U).addScaledVector(P,-U.dot(P)),L.lengthSq()<1e-4&&L.copy(m),L.normalize(),O.crossVectors(P,L).normalize(),this._m.makeBasis(O,P,L),this._qt.setFromRotationMatrix(this._m);let B=this._qe.copy(e.quat).invert().premultiply(this._qt);B.w<0&&(B.x=-B.x,B.y=-B.y,B.z=-B.z,B.w=-B.w);let W=2*Math.acos(Math.min(1,B.w)),Q=e.extTorque.set(0,0,0);if(W>1e-4){let N=Math.sqrt(Math.max(1e-9,1-B.w*B.w));this._ax.set(B.x/N,B.y/N,B.z/N);let q=Math.max(this.swimBlend,this.underSwim,this.diveBlend),et=f||x?1+2.2*mt((W-.5)/.9):1,j=this.cling?.6:1,st=(72+70*q)*E*et*j,ct=(21+13*q)*E*(this.cling?.55:1);Q.copy(this._ax).multiplyScalar(st*Math.min(W,1.4)).addScaledVector(e.angVel,-ct);let ot=Q.length(),Et=(130+110*q)*E*et;ot>Et&&Q.multiplyScalar(Et/ot)}let H=Math.max(this.swimBlend,f?1:0,x&&w>.1?this.underSwim:0);H>.02&&Q.addScaledVector(e.hydroTorque,-H*Math.min(1,E*1.5)),this.swimBlend>.2&&(this._ax.set(0,1,0).applyQuaternion(e.quat),Q.addScaledVector(this._ax,(20+22*this.crawlBlend)*this.swimBlend*E*Math.sin(this.strokePhase)))}};var ts=ai.length,Ws=Math.PI*2,Md=new _(0,-1,0),$n=["hang","float","tread","paddle","swim","dive","under","rise","struggle","tumble","recover","exhaust","brace","flail","aboard","cling"],Uv={hang:.45,float:1.2,tread:1.9,paddle:1.35,swim:1.62,dive:1.5,under:1.5,rise:2.3,struggle:2.4,tumble:.45,recover:1.5,exhaust:.7,brace:.85,flail:2.8,aboard:.5,cling:.9};function J(r,t,e,i,n){let s=t*3;r[s]=e,r[s+1]=i,r[s+2]=n}var oh=(r,t,e)=>Math.exp(-Math.pow((r-t)/e,2)),Xi=r=>(r=mt(r),r*r*(3-2*r)),dh=r=>(r%Ws+Ws)%Ws/Ws;function wd(r,t,e,i){let n=e;J(r,T.spine,.05+.04*Math.sin(t*2)*n,.05*Math.sin(t)*n,.04*Math.sin(t+.6)*n),J(r,T.chest,-.05,-.06*Math.sin(t)*n,0),J(r,T.neck,-.14,0,0),J(r,T.head,-.22-.04*Math.sin(t*2)*n,0,0);for(let s of[1,-1]){let a=s>0,o=a?0:.55,c=Math.sin(t+o),h=Math.cos(t+o);J(r,a?T.upperArmL:T.upperArmR,-.34+.1*h*n,-s*.34*c*n,s*xt(1.4,.95,i)),J(r,a?T.foreArmL:T.foreArmR,xt(-.42,-.8,i)-.24*h*n,0,0),J(r,a?T.handL:T.handR,.32*c*n,0,s*.2*h*n);let l=t+(a?0:Math.PI);J(r,a?T.thighL:T.thighR,xt(-.92,-.38,i)+.22*Math.sin(l)*n,s*.28*Math.cos(l)*n,s*(xt(.5,.24,i)+.12*Math.cos(l)*n)),J(r,a?T.shinL:T.shinR,xt(1.42,.62,i)+.46*Math.sin(l-1.2)*n,0,0),J(r,a?T.footL:T.footR,.22+.3*Math.sin(l-1.8)*n,0,0)}}function Nv(r,t){let e=dh(t),i,n,s;if(e<.22)i=-2.25,n=.1,s=-.1;else if(e<.55){let u=Xi((e-.22)/.33);i=xt(-2.25,-1.25,u),n=xt(.1,.95,u),s=xt(-.1,-1.35,u)}else if(e<.72){let u=Xi((e-.55)/.17);i=xt(-1.25,-.8,u),n=xt(.95,.28,u),s=xt(-1.35,-2.1,u)}else{let u=Xi((e-.72)/.28);i=xt(-.8,-2.25,u),n=xt(.28,.1,u),s=xt(-2.1,-.1,u)}let a,o,c,h;if(e<.5)a=.06,o=.07,c=.1,h=.75;else if(e<.74){let u=Xi((e-.5)/.24);a=xt(.06,-.78,u),o=xt(.07,.46,u),c=xt(.1,1.9,u),h=xt(.75,-.15,u)}else if(e<.88){let u=Xi((e-.74)/.14);a=xt(-.78,-.18,u),o=xt(.46,.5,u),c=xt(1.9,.3,u),h=xt(-.15,.3,u)}else{let u=Xi((e-.88)/.12);a=xt(-.18,.06,u),o=xt(.5,.07,u),c=xt(.3,.1,u),h=xt(.3,.75,u)}let l=oh(e,.5,.14);J(r,T.spine,-.08-.06*l,0,0),J(r,T.chest,-.1-.06*l,0,0),J(r,T.neck,-.28,0,0),J(r,T.head,-.36-.05*l,0,0);for(let u of[1,-1]){let d=u>0;J(r,d?T.upperArmL:T.upperArmR,i,0,u*n),J(r,d?T.foreArmL:T.foreArmR,s,0,0),J(r,d?T.handL:T.handR,.12,0,0),J(r,d?T.thighL:T.thighR,a,0,u*o),J(r,d?T.shinL:T.shinR,c,0,0),J(r,d?T.footL:T.footR,h,0,0)}}function zv(r,t){let e=Math.sin(t),i=Math.sin(t*2);J(r,T.spine,-.12+.06*i,.25*e,.1*e),J(r,T.chest,-.12,.25*e,.08*e),J(r,T.neck,-.36,-.22*e,0),J(r,T.head,-.4+.05*i,-.26*e,.04*e);for(let n of[1,-1]){let s=n>0,a=dh(t+(s?0:Math.PI)),o,c,h,l;if(a<.55){let d=a/.55,f=Xi(d);o=xt(-(Math.PI-.62),-.1,f),c=-.1-1.05*Math.sin(d*Math.PI),h=.12+.12*Math.sin(d*Math.PI),l=.35*Math.sin(d*Math.PI)}else{let d=(a-.55)/.45,f=Xi(d);o=xt(.1,Math.PI+.62,f),c=-.2-1.5*Math.sin(d*Math.PI),h=.22+.72*Math.sin(d*Math.PI),l=.1}J(r,s?T.upperArmL:T.upperArmR,o,0,n*h),J(r,s?T.foreArmL:T.foreArmR,c,0,0),J(r,s?T.handL:T.handR,l,0,0);let u=t*3+(s?0:Math.PI);J(r,s?T.thighL:T.thighR,-.02+.36*Math.sin(u),0,n*.06),J(r,s?T.shinL:T.shinR,.16+.62*Math.max(0,Math.sin(u+.9)),0,0),J(r,s?T.footL:T.footR,.82,0,0)}}function Ed(r,t,e){let i=dh(t),n=Math.sin(i*Ws-1.2);J(r,T.spine,-.05+.09*n+.42*e,0,0),J(r,T.chest,-.06-.07*n+.3*e,0,0),J(r,T.neck,-.2+.42*e,0,0),J(r,T.head,-.3+.05*n+.45*e,0,0);let s,a,o;if(i<.36){let l=i/.36,u=Xi(l);s=xt(-(Math.PI*.94),-.2,u),a=.14+.92*Math.sin(l*Math.PI),o=-.4*Math.sin(l*Math.PI)}else if(i<.52)s=-.2,a=.14,o=-.05;else{let l=(i-.52)/.48,u=Xi(l);s=xt(-.2,-(Math.PI*.94),u),a=.14+.1*Math.sin(l*Math.PI),o=-1.85*Math.sin(l*Math.PI)}s=xt(s,-2.75,e),a=xt(a,.12,e),o=xt(o,-.1,e);let c=oh(i,.62,.1),h=oh(i,.78,.07);for(let l of[1,-1]){let u=l>0;J(r,u?T.upperArmL:T.upperArmR,s,0,l*a),J(r,u?T.foreArmL:T.foreArmR,o,0,0),J(r,u?T.handL:T.handR,0,0,0),J(r,u?T.thighL:T.thighR,xt(-.08-.62*c+.14*h,-1,e),0,l*(.07+.42*c*(1-e))),J(r,u?T.shinL:T.shinR,xt(.12+1.35*c,.1,e),0,0),J(r,u?T.footL:T.footR,.75-.5*c*(1-e),0,0)}}function Ov(r,t,e,i){let n=(s,a)=>(ri(e*a,s)-.5)*i;J(r,T.spine,-.08,.06*Math.sin(t),.05*Math.sin(t*.7)*i),J(r,T.chest,-.12,.1*Math.sin(t),0),J(r,T.neck,-.34,.1*Math.sin(t*.37)*i,0),J(r,T.head,-.42+n(1,1.3)*.12,.16*Math.sin(t*.37+.6)*i,0);for(let s of[1,-1]){let a=s>0,o=t+(a?0:Math.PI),c=.5+.5*Math.sin(o),h=Math.max(0,-Math.cos(o)),l=Math.max(0,Math.cos(o));J(r,a?T.upperArmL:T.upperArmR,xt(-.55,-2.8,c)+n(a?5:7,1.1)*.3,s*.1*Math.cos(o)*i,s*(.22+.24*(1-c)+.1*i)),J(r,a?T.foreArmL:T.foreArmR,-.25-.45*h-1.05*l,0,0),J(r,a?T.handL:T.handR,.35*h,0,s*.1);let u=t*2+(a?0:Math.PI)+n(a?11:13,.8)*1.2;J(r,a?T.thighL:T.thighR,-.14+.44*Math.sin(u),0,s*(.1+.08*i)),J(r,a?T.shinL:T.shinR,.26+.58*Math.max(0,Math.sin(u+.9)),0,0),J(r,a?T.footL:T.footR,.72,0,0)}}function Bv(r,t,e){let i=(o,c)=>ri(e*c,o)-.5,n=Math.sin(t),s=Math.max(0,n),a=Math.max(0,-n);J(r,T.spine,-.1-.06*s,.07*Math.sin(t*.5),.05*Math.sin(t*.7)),J(r,T.chest,-.12-.04*s,.05*Math.sin(t*.5+.8),0),J(r,T.neck,-.3,.1*Math.sin(t*.37),0),J(r,T.head,-.4+.08*a+i(1,1.3)*.1,.16*Math.sin(t*.37+.6),.05*Math.sin(t*.53));for(let o of[1,-1]){let c=o>0,h=c?0:.45,l=Math.sin(t+h),u=Math.max(0,l),d=Math.max(0,-l);J(r,c?T.upperArmL:T.upperArmR,-.24+.18*l+i(c?3:4,1.7)*.2,o*.14*Math.cos(t+h),o*(1.24-.56*(.5+.5*l))),J(r,c?T.foreArmL:T.foreArmR,-.26-.42*d,0,0),J(r,c?T.handL:T.handR,.42*u,0,o*.1);let f=t*.6+(c?0:2.1);J(r,c?T.thighL:T.thighR,-.24+.18*Math.sin(f),0,o*.16),J(r,c?T.shinL:T.shinR,.46+.26*Math.sin(f+1),0,0),J(r,c?T.footL:T.footR,.55,0,0)}}function Hv(r,t){let e=Math.sin(t),i=Math.sin(t*.5+1),n=Math.max(0,Math.sin(t*.31-.4));J(r,T.spine,.2,.05*e,.04*i),J(r,T.chest,.14,.04*e,0),J(r,T.neck,.16+.1*i-.42*n,.06*e,0),J(r,T.head,.12+.16*i-.42*n,.08*e,.05*i);for(let s of[1,-1]){let a=s>0;J(r,a?T.upperArmL:T.upperArmR,-.42,-s*.25,s*1.02),J(r,a?T.foreArmL:T.foreArmR,-1.25,0,0),J(r,a?T.handL:T.handR,.35,0,0),J(r,a?T.thighL:T.thighR,-.34+.12*Math.sin(t+(a?0:1.3)),0,s*.06),J(r,a?T.shinL:T.shinR,.55+.18*Math.sin(t+(a?.8:2.2)),0,0),J(r,a?T.footL:T.footR,.75,0,0)}}function Vv(r,t,e,i){let n=Math.sin(t),s=1-i,a=(ri(e*.33,31)-.5)*s,o=.5+.5*Math.sin(e*.47+1.3*Math.sin(e*.21));J(r,T.spine,-.06*s+.14*i+.02*n,.04,.05),J(r,T.chest,-.08*s+.12*i+.02*n,.1,.04),J(r,T.neck,(-.24-.14*o)*s+.26*i,-.16+.22*a,0),J(r,T.head,(-.28-.16*o)*s+.3*i,-.24+.34*a,-.1),J(r,T.upperArmL,.28,0,2.03),J(r,T.foreArmL,-1.12-.2*i,0,0),J(r,T.handL,.35,0,0),J(r,T.upperArmR,-2.62,.75,0),J(r,T.foreArmR,-.26-.5*i,0,0),J(r,T.handR,.3,0,0),J(r,T.thighL,-.75-.25*i,0,.55),J(r,T.shinL,1.3+.25*i,0,0),J(r,T.footL,.55,0,0),J(r,T.thighR,.1-.25*i,0,-.42),J(r,T.shinR,.32+.45*i,0,0),J(r,T.footR,.8,0,0)}function Gv(r,t,e){let i=Math.sin(t),n=Math.sin(t*.5+.7);J(r,T.spine,.1+.03*i,0,.03*n),J(r,T.chest,.04,0,0),J(r,T.neck,-.2+.06*n,0,0),J(r,T.head,-.3+.08*n,0,0);for(let s of[1,-1]){let a=s>0,o=t+(a?0:Math.PI);J(r,a?T.upperArmL:T.upperArmR,-2.05,0,s*.32),J(r,a?T.foreArmL:T.foreArmR,-.75,0,0),J(r,a?T.handL:T.handR,.3,0,0),J(r,a?T.thighL:T.thighR,-.22+.2*Math.sin(o),0,s*.12),J(r,a?T.shinL:T.shinR,.5+.26*Math.sin(o-1.1),0,0),J(r,a?T.footL:T.footR,.55,0,0)}}function Wv(r,t){let e=(i,n)=>ri(t*n,i)-.5;J(r,T.spine,.2+e(1,.7)*.34,e(2,.6)*.3,e(3,.5)*.22),J(r,T.chest,.14+e(4,.8)*.26,e(5,.6)*.26,0),J(r,T.neck,.16+e(6,.9)*.3,e(7,.7)*.36,0),J(r,T.head,.1+e(8,1)*.3,e(9,.8)*.4,e(10,.6)*.18);for(let i of[1,-1]){let n=i>0,s=n?20:40;J(r,n?T.upperArmL:T.upperArmR,-.7+e(s,.9)*1.3,i*e(s+1,.7)*.6,i*(.8+e(s+2,.8)*.7)),J(r,n?T.foreArmL:T.foreArmR,-.85+e(s+3,1.1)*1,0,0),J(r,n?T.handL:T.handR,e(s+4,1.3)*.6,0,e(s+5,1.2)*.4),J(r,n?T.thighL:T.thighR,-.6+e(s+6,.8)*1,0,i*(.24+e(s+7,.7)*.36)),J(r,n?T.shinL:T.shinR,.95+e(s+8,1)*.9,0,0),J(r,n?T.footL:T.footR,.5+e(s+9,1.1)*.4,0,0)}}function qv(r,t,e){J(r,T.spine,-.08-.08*e,0,0),J(r,T.chest,-.1-.1*e,0,0),J(r,T.neck,-.26,0,0),J(r,T.head,-.4-.05*e,0,0);for(let i of[1,-1]){let n=i>0,s=Math.sin(t+(n?0:.5));J(r,n?T.upperArmL:T.upperArmR,-.3+.12*s,-i*.3*s,i*(1.05+.1*e)),J(r,n?T.foreArmL:T.foreArmR,-.6-.25*s,0,0),J(r,n?T.handL:T.handR,.25*s,0,0);let a=t+(n?0:Math.PI);J(r,n?T.thighL:T.thighR,-.7+.26*Math.sin(a),i*.2*Math.cos(a),i*.4),J(r,n?T.shinL:T.shinR,1.15+.4*Math.sin(a-1.1),0,0),J(r,n?T.footL:T.footR,.35,0,0)}}function Xv(r,t){let e=Math.sin(t*.5);J(r,T.spine,-.06,0,.04*e),J(r,T.chest,-.1,0,0),J(r,T.neck,-.28,.12*e,0),J(r,T.head,-.42,.1*e,.08*e);for(let i of[1,-1]){let n=i>0;J(r,n?T.upperArmL:T.upperArmR,-.18+.08*e,i*.12*e,i*1.02),J(r,n?T.foreArmL:T.foreArmR,-.55-.12*e,0,0),J(r,n?T.handL:T.handR,.15,0,0),J(r,n?T.thighL:T.thighR,-.14+.09*Math.sin(t*.5+(n?0:2)),0,i*.14),J(r,n?T.shinL:T.shinR,.28+.12*Math.sin(t*.5+(n?1:3)),0,0),J(r,n?T.footL:T.footR,.6,0,0)}}function Yv(r,t){let e=Math.sin(t*1.4);J(r,T.spine,.3,.22,0),J(r,T.chest,.22,.2,0),J(r,T.neck,.28,.22,0),J(r,T.head,.3,.28,.1),J(r,T.upperArmL,-1.35,-.55,.3),J(r,T.foreArmL,-1.55,0,0),J(r,T.handL,.2,0,0),J(r,T.upperArmR,-1.6,.35,-.45),J(r,T.foreArmR,-1.75,0,0),J(r,T.handR,.2,0,0),J(r,T.thighL,-.85+.12*e,0,.18),J(r,T.shinL,1.25-.15*e,0,0),J(r,T.footL,.4,0,0),J(r,T.thighR,-.7-.12*e,0,-.18),J(r,T.shinR,1.15+.15*e,0,0),J(r,T.footR,.4,0,0)}function jv(r,t,e){let i=(n,s)=>ri(e*s,n)-.5;J(r,T.spine,.05+.18*Math.sin(t*.9),.22*Math.sin(t*.5+1),.12*Math.sin(t*.7)),J(r,T.chest,-.04+.13*Math.sin(t*.9+.6),.22*Math.sin(t*.5+1.4),0),J(r,T.neck,-.12+i(1,1.5)*.26,i(2,1.3)*.36,0),J(r,T.head,-.2+i(3,1.7)*.3,i(4,1.4)*.4,i(5,1.1)*.16);for(let n of[1,-1]){let s=n>0,a=t*(s?1:1.17)+(s?0:2.1),o=s?60:80;J(r,s?T.upperArmL:T.upperArmR,-1.5+1.05*Math.sin(a)+i(o,1.9)*.4,n*(.15+.35*Math.cos(a*.9)),n*(.65+.4*Math.sin(a*1.3+1))),J(r,s?T.foreArmL:T.foreArmR,-.7-.6*Math.sin(a+1.2),0,0),J(r,s?T.handL:T.handR,.5*Math.sin(a*2),0,n*.2*Math.sin(a*1.7));let c=t*1.25+(s?0:Math.PI)+i(o+5,.9)*1.2;J(r,s?T.thighL:T.thighR,-.55+.7*Math.sin(c),0,n*(.22+.16*Math.sin(c*.7))),J(r,s?T.shinL:T.shinR,Math.max(.05,.95+.75*Math.sin(c-1.3)),0,0),J(r,s?T.footL:T.footR,.4+.3*Math.sin(c),0,0)}}var Kv=[[T.spine,-.18,.52,.25,-.2,.2],[T.chest,-.16,.38,.25,-.18,.18],[T.neck,-.4,.42,.36,-.22,.22],[T.head,-.45,.42,.5,-.22,.22],[T.foreArmL,-2.2,.02,.12,-.04,.04],[T.foreArmR,-2.2,.02,.12,-.04,.04],[T.handL,-.6,.6,.2,-.3,.3],[T.handR,-.6,.6,.2,-.3,.3],[T.shinL,0,2.2,.04,-.04,.04],[T.shinR,0,2.2,.04,-.04,.04],[T.footL,-.35,.95,.25,-.25,.25],[T.footR,-.35,.95,.25,-.25,.25]],ch=new Array(ts).fill(null);for(let r of Kv)ch[r[0]]=r;var Sd=new hi(0,0,0,"YXZ");function Qv(r,t){let e=Sd.setFromQuaternion(r,"YXZ"),i=e.x,n=e.y,s=e.z,a=!1;i<t[1]?(i=t[1],a=!0):i>t[2]&&(i=t[2],a=!0),n<-t[3]?(n=-t[3],a=!0):n>t[3]&&(n=t[3],a=!0),s<t[4]?(s=t[4],a=!0):s>t[5]&&(s=t[5],a=!0),a&&r.setFromEuler(Sd.set(i,n,s,"YXZ"))}var Zv=new _,Jv=new _t,$v=new _;function tx(r,t,e){let i=Zv.set(0,-1,0).applyQuaternion(r),n=$v.copy(i),s=i.x*t,a=s,o=i.y,c=i.z;if(e)c<-.42&&(c=-.42),a<-.22?a=-.22:a>.8&&(a=.8),o>.45&&(o=.45),c<0&&o>-.35&&(o=-.35);else{let h=-.5-.34*Math.max(0,Math.min(1,a*1.6));c<h&&(c=h),c<.15&&a<-.05&&(a=-.05),a<-.62&&(a=-.62),c<-.2&&o>.55&&(o=.55)}a===s&&o===i.y&&c===i.z||(i.set(a*t,o,c),!(i.lengthSq()<1e-6)&&(i.normalize(),r.premultiply(Jv.setFromUnitVectors(n,i))))}var Gs=new _t,Td=new _t;function ex(r,t){let e=Math.hypot(r.y,r.w);if(e<.22)return;Gs.set(0,r.y/e,0,r.w/e);let i=2*Math.atan2(Gs.y,Gs.w);if(i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),Math.abs(i)<=t)return;Td.copy(r).multiply(Gs.invert());let n=Math.sign(i)*t*.5;Gs.set(0,Math.sin(n),0,Math.cos(n)),r.copy(Td).multiply(Gs)}var ix=new _t().setFromAxisAngle(new _(0,0,1),Math.PI/2),nx=new _t().setFromAxisAngle(new _(0,0,1),-Math.PI/2),sx=new _,ah=new _,hh=new _t,Sr=new _t;function lh(r,t){let e=sx.set(0,-1,0).applyQuaternion(r);if(ah.set(t,0,0),e.dot(ah)<-.9)return null;hh.setFromUnitVectors(ah,e).multiply(t>0?ix:nx),Sr.copy(hh).invert().multiply(r);let i=2*Math.atan2(Sr.y,Sr.w);return i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),i}var uh={1:1,"-1":1};{let r=new hi(-2.5,0,.15,"YXZ"),t=new _t().setFromEuler(r);uh[1]=Math.sign(lh(t,1))||1,t.setFromEuler(r.set(-2.5,0,-.15,"YXZ")),uh[-1]=Math.sign(lh(t,-1))||1}function rx(r,t,e){let i=lh(r,t);if(i===null||Math.abs(i)<=e)return;let n=Math.sign(i)*e,s=uh[t]*e,a=De(1.75,2.8,Math.abs(i)),o=(n+(s-n)*a)*.5;Sr.set(0,Math.sin(o),0,Math.cos(o)),r.copy(hh).multiply(Sr)}var to=class{constructor(t,e,i,n){this.ch=t,this.body=e,this.player=i,this.sv=n,this.tmp=new Float32Array(ts*3),this.add=new Float32Array(ts*3),this.acc=new Float32Array(ts*4),this.ref=new Float32Array(ts*4),this.w={},this.wt={};for(let s of $n)this.w[s]=0,this.wt[s]=0;this.w.tread=1,this.phase=0,this.time=0,this.tumbleT=0,this.state="tread",this.splashiness=0,this.gaspKick=0,this.coughKick=0,this.force=null,this.forcePhase=void 0,this.hold=null,this.ride={lift:0,side:0,fore:0,slam:0},this.reach=[{pos:new _,on:0,w:0},{pos:new _,on:0,w:0}],this._ik={S:new _,qp:new _t,qu:new _t,qf:new _t,a:new _,n:new _,w:new _,fix:new _t,x:new _(1,0,0)},this._e=new hi(0,0,0,"YXZ"),this._q=new _t,this._q2=new _t,this._q3=new _t,this._qa=new _t,this._u=new _,this._wb=new _,this._d=new _,this._qi=new _t,this._flow=new _,this._wLag=new _,this._pv=new _,this._acc=new _,this._a=new _,this._hasPv=!1}_reach(t,e,i,n,s){let a=this.ch.bones,o=this._ik,c=a[t],h=a[e],l=a[i],u=h.position,d=l.position;o.S.setFromMatrixPosition(c.matrixWorld),c.parent.getWorldQuaternion(o.qp);let f=u.length()+d.length()-.004,g=Math.max(.16,Math.min(f,o.n.copy(n).sub(o.S).length())),b=.02,m=2.3;for(let p=0;p<14;p++){let y=(b+m)*.5;o.qf.setFromAxisAngle(o.x,-y),o.w.copy(d).applyQuaternion(o.qf).add(u).length()>g?b=y:m=y}o.qf.setFromAxisAngle(o.x,-(b+m)*.5),o.w.copy(d).applyQuaternion(o.qf).add(u),o.qu.copy(o.qp).multiply(c.quaternion),o.a.copy(o.w).applyQuaternion(o.qu).normalize(),o.n.normalize(),o.fix.setFromUnitVectors(o.a,o.n),o.qu.premultiply(o.fix).premultiply(o.qp.invert()),c.quaternion.slerp(o.qu,s),h.quaternion.slerp(o.qf,s)}_mix(t){let e=this.tmp,i=this.acc,n=this.ref,s=this._e,a=this._q,o=this._first;for(let c=0;c<ts;c++){s.set(e[c*3],e[c*3+1],e[c*3+2],"YXZ"),a.setFromEuler(s);let h=c*4;o&&(n[h]=a.x,n[h+1]=a.y,n[h+2]=a.z,n[h+3]=a.w);let l=n[h]*a.x+n[h+1]*a.y+n[h+2]*a.z+n[h+3]*a.w<0?-t:t;i[h]+=a.x*l,i[h+1]+=a.y*l,i[h+2]+=a.z*l,i[h+3]+=a.w*l}this._first=!1}update(t){let e=this.player,i=this.body,n=this.sv,s=this.wt;this.time+=t;let a=n.alive?e.control*(1-.7*n.blackout):0,o=1-De(.22,.78,a),c=Math.max(o,e.air||0),h=n.alive?mt(1-n.blackout*1.5):0,l=1-c,u=e.underSwim,d=e.diveBlend||0;s.flail=c*h*.8,s.tumble=c-s.flail,s.dive=l*d;let f=l*(1-d);s.under=f*u*e.moveAmt,s.rise=f*u*(1-e.moveAmt);let g=f*(1-u);s.swim=g*(e.crawlBlend||0),s.paddle=g*(1-(e.crawlBlend||0))*mt(e.swimBlend*2.2);let b=mt((s.swim+s.paddle)/Math.max(.001,g));s.brace=g*e.brace*(1-.7*b);let m=1-e.brace*(1-.7*b),p=Math.max(mt((38-n.oxygen)/26),mt((34-n.stamina)/28),mt(n.swallow*1.3),mt(e.impact-.7)*.8),y=g*(1-b);s.struggle=y*p*m,s.recover=y*mt(n.gaspTimer/3)*(1-p)*m;let x=1-De(6,24,n.stamina);s.exhaust=y*x*(1-p)*m;let M=0;s.hang=0;for(let Y of $n)Y!=="tread"&&Y!=="float"&&(M+=s[Y]);let R=Math.max(0,1-M),v=mt(e.effort*1.6);if(s.float=R*.22*(1-v),s.tread=R-s.float,s.aboard=0,s.cling=0,this.hold){let Y=this.hold==="cling"?Math.min(1,s.tumble+s.flail)*.5:0;for(let at of $n)s[at]=at===this.hold?1-Y:at==="tumble"||at==="flail"?s[at]*(Y>0?.5:0):0}if(this.force)for(let Y of $n)s[Y]=Y===this.force?1:0,this.w[Y]=s[Y];M=0;let w=0;for(let Y of $n)this.w[Y]+=(s[Y]-this.w[Y])*(1-Math.exp(-t*((Y==="tumble"||Y==="flail")&&s[Y]>this.w[Y]?14:Y==="brace"||Y==="dive"||Y==="cling"?7:Y==="aboard"?30:5))),M+=this.w[Y],this.w[Y]>w&&(w=this.w[Y],this.state=Y);let A=this.w,E=1/Math.max(1e-4,M),S=0;for(let Y of $n)S+=A[Y]*Uv[Y];S+=A.tread*.45*v+A.struggle*.2*p+A.flail*(i.subFrac<.3?.8:0)+A.rise*.3*mt((60-n.oxygen)/50),S*=1+.08*(ri(this.time*.6,77)-.5);let z=Ws*S*E*(.72+.28*n.eff);this.phase+=z*t,this.forcePhase!==void 0&&(this.phase=this.forcePhase);let V=this.phase;e.strokePhase=V,e.struggleW=A.struggle*E;let it=Math.min(2.5,i.relSpeed*.25+i.angVel.length()*.22+i.turb);this.tumbleT+=t*(.8+1.6*it);let k=this.tmp,P=this.acc;P.fill(0),this._first=!0;let L=(Y,at)=>{Y<=5e-4||(k.fill(0),at(),this._mix(Y*E))},O=$n.slice().sort((Y,at)=>A[at]-A[Y]),U=this.force==="dive"?this.forcePike||0:mt(1-Math.abs((e.diveTime||9)-.32)/.42)*mt(1.4-Math.max(0,i.mouthDepth));for(let Y of O)switch(Y){case"hang":L(A.hang,()=>Hv(k,V));break;case"float":L(A.float,()=>wd(k,V,.55,1));break;case"tread":L(A.tread,()=>wd(k,V,1+.4*v,0));break;case"paddle":L(A.paddle,()=>Nv(k,V));break;case"swim":L(A.swim,()=>zv(k,V));break;case"dive":L(A.dive,()=>Ed(k,V,U));break;case"under":L(A.under,()=>Ed(k,V,0));break;case"rise":L(A.rise,()=>Ov(k,V,this.time,1));break;case"struggle":L(A.struggle,()=>Bv(k,V,this.time));break;case"tumble":L(A.tumble,()=>Wv(k,this.tumbleT));break;case"recover":L(A.recover,()=>qv(k,V,n.lung));break;case"exhaust":L(A.exhaust,()=>Xv(k,V));break;case"brace":L(A.brace,()=>Yv(k,V));break;case"aboard":L(A.aboard,()=>Vv(k,V,this.time,mt((e.brace||0)*1.6-.5)));break;case"cling":L(A.cling,()=>Gv(k,V,this.time));break;default:L(A.flail,()=>jv(k,V,this.time));break}let I=this.add;I.fill(0);let B=l*(1-A.swim*E);I[T.chest*3]-=.18*(n.lung-.5)*B,I[T.spine*3]-=.08*(n.lung-.5)*B;{let Y=mt(.4+.5*p+.4*(e.brace||0)+.3*v)*l*(1-u)*(1-.8*A.swim*E),at=this.time*(.45+.5*Y),ht=(ri(at,91)-.5)*2;I[T.neck*3+1]+=.16*ht*Y,I[T.head*3+1]+=.22*ht*Y}if(this.gaspKick=Math.max(0,this.gaspKick-t*2.6),this.coughKick=Math.max(0,this.coughKick-t*4.5),this.gaspKick>.001){let Y=this.gaspKick*this.gaspKick*B;I[T.head*3]-=.3*Y,I[T.neck*3]-=.14*Y,I[T.chest*3]-=.18*Y,I[T.upperArmL*3+2]+=.16*Y,I[T.upperArmR*3+2]-=.16*Y}if(this.coughKick>.001){let Y=Math.sin(this.coughKick*Math.PI)*B;I[T.spine*3]+=.3*Y,I[T.chest*3]+=.22*Y,I[T.head*3]+=.34*Y,I[T.neck*3]+=.2*Y}if(A.aboard>.01){let Y=this.ride,at=A.aboard*E,ht=mt(Y.lift),It=this.time;I[T.thighR*3]+=(.16*ht+.12*ht*Math.sin(It*11))*at,I[T.shinR*3]+=(.5*ht+.2*ht*Math.sin(It*13+1))*at,I[T.thighL*3]+=(.16*ht*Math.sin(It*9+2)+.1*ht)*at,I[T.shinL*3]-=.25*ht*at,I[T.thighR*3+2]-=.25*Math.max(0,-Y.side)*at,I[T.spine*3+2]+=.24*Y.side*at,I[T.chest*3+2]+=.12*Y.side*at,I[T.spine*3+1]+=.1*Y.fore*at,I[T.spine*3]+=(.26*Y.slam-.1*ht)*at,I[T.chest*3]+=.16*Y.slam*at,I[T.neck*3]+=(.3*Y.slam+.12*ht)*at,I[T.head*3]+=(.32*Y.slam+.1*ht)*at}if(n.shiver>.01){let Y=n.shiver*.035;I[T.chest*3+1]+=Math.sin(this.time*61)*Y,I[T.upperArmL*3]+=Math.sin(this.time*57+1)*Y*1.5,I[T.upperArmR*3]+=Math.sin(this.time*59+2)*Y*1.5,I[T.head*3+1]+=Math.sin(this.time*53)*Y*.8}let W=this._qi.copy(i.quat).invert(),Q=this.force?0:Math.max(.25+.75*(A.tumble+.45*A.flail)*E,.7*A.cling*E);i.subFrac<.15?this._u.copy(i.vel).multiplyScalar(-.3):this._u.copy(i.relFlow);let H=this._flow.lerp(this._u.applyQuaternion(W),1-Math.exp(-t*8)),N=H.length(),q=this.force?0:mt(N/4.5)*Q*.7;this._hasPv||(this._pv.copy(i.vel),this._hasPv=!0);let et=this._a.copy(i.vel).sub(this._pv).multiplyScalar(1/Math.max(t,.001));this._pv.copy(i.vel),et.lengthSq()>3600&&et.setLength(60);let j=this._acc.lerp(et.applyQuaternion(W),1-Math.exp(-t*9)),st=j.length(),ct=this.force?0:mt(st/38)*(.3+.5*Q),ot=this._wLag.lerp(this._wb.copy(i.angVel).applyQuaternion(W),1-Math.exp(-t*10)),Et=ot.length(),X=this.force?0:Math.min(.6,Et*.07)*(.35+.65*A.tumble*E),Bt=null,St=Math.min(.72,q+ct);if(St>.01){let Y=this._d.copy(Md).multiplyScalar(1-St);N>.05&&Y.addScaledVector(H,St*q/((q+ct)*N)),st>.05&&Y.addScaledVector(j,-St*ct/((q+ct)*st)),Y.lengthSq()>1e-4&&(Y.normalize(),Bt=this._q2.setFromUnitVectors(Md,Y))}let Rt=null;X>.01&&(Rt=this._q3.setFromAxisAngle(this._u.copy(ot).normalize(),-X));let yt=this.force?0:.4+.6*Q,Nt=(Y,at)=>Math.max(-at,Math.min(at,Y));I[T.spine*3]+=Nt(j.z*.01*yt,.3),I[T.chest*3]+=Nt(j.z*.008*yt,.24),I[T.spine*3+2]+=Nt(j.x*.008*yt,.18),I[T.neck*3]+=Nt(j.z*.012*yt,.3),I[T.neck*3+2]+=Nt(j.x*.008*yt,.16);let Pt=Math.min(1,Et/5)*Q;I[T.foreArmL*3]-=.45*Pt,I[T.foreArmR*3]-=.45*Pt,I[T.shinL*3]+=.4*Pt,I[T.shinR*3]+=.4*Pt;let D=this.ch.bones,C=this._e,Z=this._q,lt=this._qa,ut=1-Math.exp(-t*26);for(let Y=0;Y<ts;Y++){let at=Y*4;Z.set(P[at],P[at+1],P[at+2],P[at+3]),Z.lengthSq()<1e-8?Z.identity():Z.normalize();let ht=I[Y*3],It=I[Y*3+1],Gt=I[Y*3+2];(ht!==0||It!==0||Gt!==0)&&Z.multiply(lt.setFromEuler(C.set(ht,It,Gt,"YXZ"))),Y===T.upperArmL||Y===T.upperArmR||Y===T.thighL||Y===T.thighR?(Bt&&Z.premultiply(Bt),Rt&&Z.premultiply(Rt),tx(Z,Y===T.upperArmL||Y===T.thighL?1:-1,Y===T.thighL||Y===T.thighR),Y===T.thighL||Y===T.thighR?ex(Z,.55):rx(Z,Y===T.upperArmL?1:-1,1.15)):(Y===T.head&&Rt&&Z.premultiply(ax.copy(ox).slerp(Rt,.4)),ch[Y]&&Qv(Z,ch[Y])),D[Y].quaternion.slerp(Z,ut)}{let Y=this.reach,at=!1;for(let ht=0;ht<2;ht++)Y[ht].w+=(Y[ht].on-Y[ht].w)*(1-Math.exp(-t*(Y[ht].on>Y[ht].w?9:6))),Y[ht].w>.005&&(at=!0);if(at){this.ch.group.updateMatrixWorld(!0);for(let ht=0;ht<2;ht++)Y[ht].w>.005&&this._reach(ht===0?T.upperArmL:T.upperArmR,ht===0?T.foreArmL:T.foreArmR,ht===0?T.handL:T.handR,Y[ht].pos,Y[ht].w)}}let pt=(A.tread*(.25+.4*v)+A.paddle*.5+A.swim*1+A.struggle*1+A.recover*.5+A.dive*.8)*E;this.splashiness+=(pt*Math.min(1,i.subFrac*1.3)*(1-u)-this.splashiness)*(1-Math.exp(-t*3))}},ax=new _t,ox=new _t;var qs=new _(0,1,0),fh=new _t,eo=class{constructor(t,e,i,n,s,a){this.camera=t,this.ch=e,this.body=i,this.player=n,this.waves=s,this.input=a,this.target=1,this.blend=1,this.yaw=Math.PI,this.pitch=-.08,this.sens=.0021,this.intensity=1,this.qd=new _t,this.pivot=new _,this.tpPos=new _,this.inited=!1,this.arm=4.6,this.under=0,this.fovKick=0,this.threat=0,this.orbit=0,this.eye=new _,this.chest=new _,this.surfaceAtCam=fi(),this.script=null,this.auto=!0,this.interest={x:0,z:0,w:0},this.portrait=0,this.autoT=0,this.drift=0,this.roll=0,this.push=0,this.time=0,this.shiver=0,this.cine=null,this._m=new dt,this._f=new _,this._v=new _,this._v2=new _,this._q=new _t,this._q2=new _t,this._mat=new At,this._s=fi(),this._fp=new _,this._qfp=new _t,this._qtp=new _t,this._qh=new _t,this._qhS=new _t,this._hasH=!1}toggle(){this.target=this.target>.5?0:1}setMode(t){this.target=t==="first"?0:1}get mode(){return this.target>.5?"third":"first"}lookQuat(t,e,i){let n=Math.cos(e);return this._f.set(Math.sin(t)*n,Math.sin(e),Math.cos(t)*n),this._mat.lookAt(this._v.set(0,0,0),this._f,qs),i.setFromRotationMatrix(this._mat)}update(t){let e=this.camera,i=this.body,n=this.player,s=this.input.consumeMouse(this._m);this.time+=t,this.input.enabled&&(this.yaw-=s.x*this.sens,this.pitch-=s.y*this.sens);let a=performance.now()/1e3,o=Math.abs(s.x)+Math.abs(s.y)>.5||a-this.input.lastLook<2.5,c=this.input.enabled&&this.input.busy();if(this.auto&&this.input.enabled&&!this.script&&!o){let L=this.input.axisX();if(c)Math.abs(L)>.15&&(this.yaw-=L*.85*t),this.autoT=0;else{this.autoT+=t;let U=Math.min(1,this.autoT/1.5);if(this.interest.w>.05){let B=Math.atan2(this.interest.x-i.pos.x,this.interest.z-i.pos.z)-this.yaw;B=((B+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,this.yaw+=Math.sign(B)*Math.min(Math.abs(B),(.25+.9*this.interest.w)*t)*U}else this.drift+=t*.13,this.yaw+=(.045*Math.sin(this.drift)+.03*Math.sin(this.drift*2.3+1))*t*U}let O=-.07+.24*this.threat-.1*this.under;(!c||n.underSwim<.5)&&(this.pitch+=(O-this.pitch)*(1-Math.exp(-t*(c?.5:1.1))))}else this.autoT=0;this.script&&(this.yaw=this.script.yaw,this.pitch=this.script.pitch),this.pitch=_i(this.pitch,-1.45,1.45),n.yaw=this.yaw,n.pitch=this.pitch;let h=1/.85;this.blend=_i(this.blend+Math.sign(this.target-this.blend)*t*h,0,1),Math.abs(this.target-this.blend)<t*h&&(this.blend=this.target);let l=this.blend*this.blend*(3-2*this.blend),u=mt(1-n.control)*.85+n.tumble*.4,d=mt(u),f=this.intensity*xt(.2,1,d)*xt(1,.42,l),g=i.angVel,b=g.length();b>1e-5&&f>0&&(this._q.setFromAxisAngle(this._v.copy(g).multiplyScalar(1/b),b*f*t),this.qd.premultiply(this._q));let m=xt(.32,2.6,d);this.qd.slerp(fh,1-Math.exp(-t/m)).normalize(),this.ch.eyeWorld(this.eye),this.fpLift&&(this.eye.y+=this.fpLift),this.chest.setFromMatrixPosition(this.ch.bones[2].matrixWorld),this.inited||(this.pivot.copy(this.chest),this.inited=!0,this.tpPos.copy(this.chest).add(this._v.set(0,1.2,4)));{this.ch.bones[4].getWorldQuaternion(this._qh);{let st=this._v.set(1,0,0).applyQuaternion(this.ch.bones[2].getWorldQuaternion(this._q2)),ct=this._v2.set(0,0,1).applyQuaternion(this._qh);if(ct.addScaledVector(st,-ct.dot(st)),ct.lengthSq()>1e-4){ct.normalize(),st.addScaledVector(ct,-st.dot(ct)).normalize();let ot=this._f.crossVectors(ct,st);this._qh.setFromRotationMatrix(this._mat.makeBasis(st,ot,ct))}}this._hasH||(this._qhS.copy(this._qh),this._hasH=!0),this._qhS.slerp(this._qh,1-Math.exp(-t*12));let O=Math.cos(this.pitch),U=this.pitch-.16*(n.crawlBlend||0),I=Math.cos(U),B=this._v2.set(Math.sin(this.yaw)*I,Math.sin(U),Math.cos(this.yaw)*I).applyQuaternion(this._q2.copy(this._qhS).invert()),W=Math.atan2(B.x,B.z),Q=Math.asin(_i(B.y,-1,1)),H=_i(W,-.75,.75),N=_i(Q,-.45,.9),q=Math.max(Math.abs(W-H),Math.abs(Q-N));B.set(Math.sin(H)*Math.cos(N),Math.sin(N),Math.cos(H)*Math.cos(N)).applyQuaternion(this._qhS);let et=mt(d),j=this._f.set(0,1,0).applyQuaternion(this._qhS).multiplyScalar(et);j.y+=1-et,j.lengthSq()<1e-4&&j.set(0,1,0),j.normalize(),Math.abs(j.dot(B))>.995&&j.set(0,0,1).applyQuaternion(this._qhS),this._mat.lookAt(this._v.set(0,0,0),B,j),this._qfp.setFromRotationMatrix(this._mat).premultiply(this._q.copy(fh).slerp(this.qd,.5)),n.fp=this.blend<.5}this._fp.copy(this.eye);let p=1-Math.exp(-t*10),y=1-Math.exp(-t*5.5);this.pivot.x+=(this.chest.x-this.pivot.x)*p,this.pivot.z+=(this.chest.z-this.pivot.z)*p,this.pivot.y+=(this.chest.y+.22-this.pivot.y)*y;let x=mt(this.waves.sigHeight/16);this.push+=((this.auto?mt((45-(this.oxygen===void 0?100:this.oxygen))/40):0)-this.push)*(1-Math.exp(-t*.8));let M=(3.5+.7*x+1.8*mt(n.impactPeak-.6)+1.3*this.threat+2.8*(n.air||0)-.5*(n.crawlBlend||0)-1.2*this.push)*(1+.22*this.portrait)+(this.armAdd||0);this.arm+=(M-this.arm)*(1-Math.exp(-t*1.6));let R=Math.cos(this.pitch),v=this.yaw+this.orbit,w=this._f.set(Math.sin(v)*R,Math.sin(this.pitch),Math.cos(v)*R),A=this._v,E=this.holdAbove?0:De(.7,1.8,i.eyeDepth);this.under+=(E-this.under)*(1-Math.exp(-t*(E>this.under?3.5:2.2)));let S=this.armOverride||this.arm,z=.5;for(let L=0;L<5&&(A.copy(this.pivot).addScaledVector(w,-S),A.y+=(.62+.16*S)*(1-.45*this.threat*(this.auto?1:0))+.25*this.portrait,!(this.under>.98));L++){let O=this.waves.sample(A.x,A.z,this._s).h,U=(A.x+this.pivot.x)*.5,I=(A.z+this.pivot.z)*.5,B=this.waves.sample(U,I,this._s).h,W=(A.y+this.pivot.y+.3)*.5,Q=Math.max(O+z-A.y,B+.2-W);if(Q<=0||S<=1.7){Q>0&&(A.y+=Q*(1-this.under));break}S=Math.max(1.7,S*.78)}if(this.armNow=S,this.tpPos.lerp(A,1-Math.exp(-t*7.5)),this.holdAbove){let L=this.waves.sample(this.tpPos.x,this.tpPos.z,this._s).h+1;this.tpPos.y<L&&(this.tpPos.y=L)}let V=this._v2.copy(this.pivot).addScaledVector(i.vel,.04);if(V.y+=.34+1.1*this.threat+.25*this.portrait,V.addScaledVector(w,2.2),this._mat.lookAt(this.tpPos,V,qs),this._qtp.setFromRotationMatrix(this._mat),this._q.copy(fh).slerp(this.qd,.45),this._qtp.premultiply(this._q),e.position.copy(this._fp).lerp(this.tpPos,l),e.quaternion.copy(this._qfp).slerp(this._qtp,l),l>0&&l<1){let L=this._fp.distanceTo(this.tpPos)*l,O=.32*(L/.28)*Math.exp(1-L/.28),U=.2*(L/.12)*Math.exp(1-L/.12),I=this._v2.set(0,0,-1).applyQuaternion(this._qfp);e.position.addScaledVector(I,U),e.position.y+=O}{let L=this.surfaceAtCam,O=e.matrixWorld.elements,U=L.nx*O[0]+L.nz*O[2],I=Math.max(-.16,Math.min(.16,-U*.38))*l*(1-this.under)*this.intensity;this.roll+=(I-this.roll)*(1-Math.exp(-t*1.6)),Math.abs(this.roll)>1e-4&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.set(0,0,1),this.roll))}this.fovKick+=(mt(n.impact-.6)*7-this.fovKick)*(1-Math.exp(-t*4));let it=xt(76,66,l)+this.fovKick*this.intensity+4*this.threat*l+9*(n.air||0)*l+7*(n.crawlBlend||0)*l-5*this.push*l+this.portrait*xt(13,19,l);this.debugView&&(e.position.copy(this.debugView.pos),this._mat.lookAt(e.position,this.debugView.target,qs),e.quaternion.setFromRotationMatrix(this._mat));let k=0;if(this.cine){let L=this.cine;L.t+=t;let O=this.pivot,U=I=>(I=mt(I),I*I*(3-2*I));if(L.mode==="intro"){let I=1-U(L.t/L.dur);e.position.addScaledVector(w,-24*I),e.position.y+=17*I,this._v2.copy(O),this._v2.y+=.3,this._mat.lookAt(e.position,this._v2,qs),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,mt(I*3)),k=-8*I,L.t>=L.dur&&(this.cine=null)}else if(L.mode==="lift"){let I=L.yaw0+2.4+L.t*.13,B=4.2+L.t*.55,W=O.x-Math.sin(I)*B,Q=O.z-Math.cos(I)*B;this._v.set(W,Math.max(this.waves.heightFast(W,Q)+.9,O.y-.9+L.t*.12),Q),L.pos||(L.pos=e.position.clone()),L.pos.lerp(this._v,1-Math.exp(-t*(L.t<7?1.4:Math.max(.05,1.4-(L.t-7)*.5)))),e.position.copy(L.pos),this._v2.copy(O),this._v2.y+=.9+Math.min(1.6,L.t*.2),this._mat.lookAt(e.position,this._v2,qs),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,mt(L.t*1.5)),k=-Math.min(22,8+L.t*1.5)}else L.mode==="death"&&(L.pos||(L.pos=e.position.clone()),L.pos.y+=.22*t,e.position.copy(L.pos),this._mat.lookAt(e.position,O,qs),this._q.setFromRotationMatrix(this._mat),e.quaternion.slerp(this._q,1-Math.exp(-t*2)),k=-Math.min(10,L.t*2))}let P=.07;(Math.abs(it+k-e.fov)>.01||Math.abs(P-e.near)>.002)&&(e.fov=it+k,e.near=P,e.updateProjectionMatrix());{if(this.shiver>.02){let O=this.shiver*.0035*this.intensity*xt(1.6,.6,l),U=this.time;this._v.set(Math.sin(U*57)*O,Math.sin(U*61+1)*O,Math.sin(U*53+2)*O*.6);let I=this._v.length();I>1e-6&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.multiplyScalar(1/I),I))}let L=mt(n.effort*1.1)*this.intensity*(1-.6*this.under);if(L>.02){let O=n.strokePhase||0,U=this.time,I=xt(3.4,.6,l);e.position.y+=Math.sin(O*2)*.018*L*I;let B=(Math.sin(U*11.3)+Math.sin(U*17.9+1.3))*.0012*L,W=(Math.sin(U*9.7+2.1)+Math.sin(U*15.1))*.0012*L;this._v.set(B+Math.sin(O*2+.6)*.006*L*I,W+Math.sin(O)*.007*L*I,Math.sin(O)*.014*L*I);let Q=this._v.length();Q>1e-5&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.multiplyScalar(1/Q),Q))}}e.updateMatrixWorld(!0),this.ch.head.visible=e.position.distanceTo(this.eye)>.19,this.waves.sample(e.position.x,e.position.z,this.surfaceAtCam)}};var io=class{constructor(t){this.canvas=t,this.keys=new Set,this.dx=0,this.dy=0,this.locked=!1,this.enabled=!1,this.pressed=new Set,this.onLockChange=null,this.mouseL=!1,this.mouseR=!1,this.lastLook=-100,window.addEventListener("keydown",e=>{e.repeat||(this.keys.add(e.code),this.pressed.add(e.code),this.enabled&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseL=this.mouseR=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.locked||(this.mouseL=this.mouseR=!1),this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("mousemove",e=>{this.locked&&(this.dx+=e.movementX,this.dy+=e.movementY,Math.abs(e.movementX)+Math.abs(e.movementY)>1&&(this.lastLook=performance.now()/1e3))}),document.addEventListener("mousedown",e=>{this.locked&&(e.button===0&&(this.mouseL=!0),e.button===2&&(this.mouseR=!0))}),document.addEventListener("mouseup",e=>{e.button===0&&(this.mouseL=!1),e.button===2&&(this.mouseR=!1)}),document.addEventListener("contextmenu",e=>{(this.locked||this.enabled)&&e.preventDefault()}),this.virtual=null,this.touch=null}lock(){if(this.canvas.requestPointerLock){let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}}unlock(){document.exitPointerLock&&document.exitPointerLock()}down(t){return this.keys.has(t)}axisX(){if(this.virtual)return this.virtual.x||0;let t=(this.down("KeyD")||this.down("ArrowRight")?1:0)-(this.down("KeyA")||this.down("ArrowLeft")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.x:0)))}axisZ(){if(this.virtual)return this.virtual.z||0;let t=(this.down("KeyW")||this.down("ArrowUp")?1:0)-(this.down("KeyS")||this.down("ArrowDown")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.z:0)))}swim(){return this.virtual?!!(this.virtual.swim||this.virtual.sprint||this.virtual.up):this.down("Space")||this.down("ShiftLeft")||this.down("ShiftRight")||this.mouseL||!!(this.touch&&this.touch.swim)}dive(){return this.virtual?!!this.virtual.dive:this.down("KeyF")||this.down("KeyQ")||this.mouseR||!!(this.touch&&this.touch.dive)}busy(){return Math.abs(this.axisX())+Math.abs(this.axisZ())>.05||this.swim()||this.dive()}consumeMouse(t){return t.x=this.dx,t.y=this.dy,this.dx=0,this.dy=0,t}endFrame(){this.pressed.clear()}};var no=class{constructor(t){this.waves=t,this.base=1,this.storm=1,this.locked=!1,this.wind=new _(26,0,0),this.windSpeed=26,this.gust=1,this.windAngle=0,this.rain=1,this.time=0}update(t){this.time+=t;let e=this.time,i=this.locked?0:(ri(e*.021,3)-.5)*.22+(ri(e*.09,5)-.5)*.08,n=mt(this.base+i*(.4+.6*this.base));this.storm+=(n-this.storm)*(1-Math.exp(-t*.25));let s=this.locked?0:(ri(e*.035,11)-.5)*.9;this.windAngle=this.waves.windAngle+s,this.gust=.78+.34*ri(e*.31,17)+.22*ri(e*1.3,23)*this.storm,this.windSpeed=xt(9,31,this.storm)*this.gust,this.wind.set(Math.cos(this.windAngle)*this.windSpeed,0,Math.sin(this.windAngle)*this.windSpeed);let a=this.locked?.9:.62+.38*ri(e*.05,29);this.rain=mt(xt(.25,1,this.storm)*a+.1*this.storm),rt.uStorm.value=this.storm,rt.uRain.value=this.rain,rt.uWindDir.value.set(Math.cos(this.windAngle),Math.sin(this.windAngle)),rt.uWindSpeed.value=this.windSpeed,rt.uFogDensity.value=xt(1/5200,1/1500,this.rain)*(.8+.4*this.storm);let o=xt(1.25,.86,this.storm);rt.uAmbient.value.set(.05*o,.06*o,.072*o),this.waves.setStorm(this.storm)}};var cx=`
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
${Hs}
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
}`,hx=`
precision highp float;
uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor; uniform float uIntensity;
varying vec2 vQ; varying float vA; varying float vSpot;
void main() {
  float across = 1.0 - vQ.x * vQ.x;
  float along = smoothstep(0.0, 0.25, vQ.y) * (1.0 - smoothstep(0.55, 1.0, vQ.y));
  float a = across * along * vA * uIntensity;
  // rain falling through the searchlight is what makes the beam visible: each streak lights up
  vec3 col = vec3(0.62, 0.68, 0.74) * (uAmbient * 3.4 + uFlashColor * uFlash * 2.2 + ${un} * vSpot * 1.1);
  gl_FragColor = vec4(col, a * 0.26 * (1.0 + 2.2 * min(vSpot, 1.5)));
}`,lx=`
attribute vec4 aSeed;
uniform float uTime; uniform float uTile; uniform float uIntensity;
${Qn}
${Ba}
${Zn}
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
}`,ux=`
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
}`;function Ad(r,t){let e=new Wi,i=t==="streak"?new Float32Array([-1,0,0,1,0,0,1,1,0,-1,1,0]):new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);e.setAttribute("position",new Vt(i,3)),e.setIndex([0,1,2,0,2,3]);let n=new Float32Array(r*4);for(let s=0;s<n.length;s++)n[s]=Math.random();return e.setAttribute("aSeed",new je(n,4)),e.instanceCount=r,e}var so=class{constructor(t){this.group=new ce,this.offset=new _,this.vel=new _(8,-9,0),this.camVel=new _,this._lastCam=new _,this._has=!1;let e=(i,n,s,a)=>{let o={uBox:{value:new _(...n)},uOffset:{value:this.offset},uVel:{value:this.vel},uCamVel:{value:this.camVel},uStreak:{value:a},uWidth:{value:s},uPx:{value:.001},uIntensity:{value:1},uSpotPos:rt.uSpotPos,uSpotDir:rt.uSpotDir,uSpotP:rt.uSpotP,uAmbient:rt.uAmbient,uFlash:rt.uFlash,uFlashColor:rt.uFlashColor},c=new gt(Ad(i,"streak"),new re({uniforms:o,vertexShader:cx,fragmentShader:hx,transparent:!0,depthWrite:!1,side:Ie}));return c.frustumCulled=!1,c.renderOrder=20,c};this.near=e(Math.round(t.rain*.62),[22,16,22],.0024,.02),this.far=e(Math.round(t.rain*.38),[80,46,80],.007,.03),this.group.add(this.near,this.far),this.splashU={uWaveA:rt.uWaveA,uWaveB:rt.uWaveB,uBrkA:rt.uBrkA,uBrkB:rt.uBrkB,uBrkC:rt.uBrkC,uTime:rt.uTime,uTile:{value:34},uIntensity:{value:1},uAmbient:rt.uAmbient,uFlash:rt.uFlash,uFlashColor:rt.uFlashColor},this.splash=new gt(Ad(t.splashes,"quad"),new re({uniforms:this.splashU,vertexShader:lx,fragmentShader:ux,transparent:!0,depthWrite:!1})),this.splash.frustumCulled=!1,this.splash.renderOrder=12,this.group.add(this.splash)}update(t,e,i,n,s,a){this.vel.set(i.x*.5,-8.6-1.4*n,i.z*.5),this.offset.addScaledVector(this.vel,t);for(let h of["x","y","z"])Math.abs(this.offset[h])>4e3&&(this.offset[h]%=4e3);this._has&&t>0&&this.camVel.copy(e.position).sub(this._lastCam).multiplyScalar(1/t),this.camVel.length()>40&&this.camVel.setLength(40),this._lastCam.copy(e.position),this._has=!0;let o=2*Math.tan(Rn.degToRad(e.fov)*.5)/Math.max(1,a),c=n*(1-s);for(let h of[this.near,this.far])h.material.uniforms.uPx.value=o,h.material.uniforms.uIntensity.value=c*(h===this.far?.8:1),h.visible=c>.01;this.splashU.uIntensity.value=c,this.splash.visible=c>.01}};var dx=`
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
}`,fx=`
precision highp float;
uniform float uPower; uniform vec3 uColor; uniform float uFog;
varying float vSide; varying float vBright; varying float vH;
void main() {
  float core = exp(-vSide * vSide * 9.0);
  float glow = exp(-abs(vSide) * 2.2) * 0.25;
  float veil = mix(0.35, 1.0, smoothstep(0.0, 500.0, vH));   // the foot of the bolt is behind rain and spray
  gl_FragColor = vec4(uColor * (core + glow) * uPower * vBright * uFog * veil, 1.0);
}`,ro=class{constructor(t=99){this.rnd=Ci(t),this.group=new ce,this.strokes=[],this.age=1e9,this.active=!1,this.dir=new _(1,.3,0),this.pos=new _,this.dist=3e3,this.sheet=0,this.power=1,this.intensity=0,this.pendingThunder=[],this.onThunder=null,this.time=0,this.next=6,this.rate=1,this.mat=new re({uniforms:{uWidth:{value:6},uPower:{value:0},uColor:{value:new _(.82,.88,1)},uFog:{value:1}},vertexShader:dx,fragmentShader:fx,transparent:!0,blending:Ss,depthWrite:!1,depthTest:!0,side:Ie}),this.bolt=new gt(new he,this.mat),this.bolt.frustumCulled=!1,this.bolt.visible=!1,this.bolt.renderOrder=2,this.group.add(this.bolt)}_buildBolt(t,e){let i=this.rnd,n=[],s=(f,g,b,m)=>{let p=[f,g],y=f.distanceTo(g),x=y*.13;for(let M=0;M<6;M++){let R=[p[0]];for(let v=0;v<p.length-1;v++){let w=p[v].clone().lerp(p[v+1],.5);w.x+=(i()-.5)*x,w.z+=(i()-.5)*x,w.y+=(i()-.5)*x*.35,R.push(w,p[v+1])}p=R,x*=.52}for(let M=0;M<p.length-1;M++)if(n.push([p[M],p[M+1],b]),m<2&&i()<(m===0?.075:.04)&&M>3&&M<p.length-6){let R=p[M+1].clone().sub(p[M]).normalize(),v=y*(.12+i()*.25),w=p[M].clone().addScaledVector(R,v*.6).add(new _((i()-.5)*v,-i()*v*.5,(i()-.5)*v));s(p[M].clone(),w,b*.42,m+1)}};s(t,e,1,0);let a=n.length,o=new Float32Array(a*4*3),c=new Float32Array(a*4*3),h=new Float32Array(a*4),l=new Float32Array(a*4),u=new Uint32Array(a*6);for(let f=0;f<a;f++){let[g,b,m]=n[f],p=b.clone().sub(g).normalize(),y=(x,M,R)=>{let v=(f*4+x)*3;o[v]=M.x,o[v+1]=M.y,o[v+2]=M.z,c[v]=p.x,c[v+1]=p.y,c[v+2]=p.z,h[f*4+x]=R,l[f*4+x]=m};y(0,g,-1),y(1,g,1),y(2,b,1),y(3,b,-1),u.set([f*4,f*4+1,f*4+2,f*4,f*4+2,f*4+3],f*6)}let d=new he;d.setAttribute("position",new Vt(o,3)),d.setAttribute("normal",new Vt(c,3)),d.setAttribute("aSide",new Vt(h,1)),d.setAttribute("aBright",new Vt(l,1)),d.setIndex(new Vt(u,1)),this.bolt.geometry.dispose(),this.bolt.geometry=d}strike(t,e={}){let i=this.rnd,n=e.azimuth!==void 0?e.azimuth:i()*Math.PI*2;this.dist=e.dist!==void 0?e.dist:500+Math.pow(i(),1.6)*5e3,this.sheet=e.sheet!==void 0?e.sheet:i()<.38?1:0,this.power=e.power!==void 0?e.power:xt(1.45,.55,mt(this.dist/7e3))*(.8+i()*.4),this.pos.set(t.x+Math.cos(n)*this.dist,0,t.z+Math.sin(n)*this.dist);let s=1300+i()*700;this.dir.set(Math.cos(n)*this.dist,this.sheet?s:s*.55,Math.sin(n)*this.dist).normalize(),this.strokes.length=0;let a=2+Math.floor(i()*4),o=0;for(let c=0;c<a;c++)this.strokes.push({t:o,peak:(c===0?1:.35+i()*.65)*this.power,tau:.045+i()*.09}),o+=.045+i()*.13;if(this.age=0,this.active=!0,!this.sheet){let c=new _(this.pos.x+(i()-.5)*500,s,this.pos.z+(i()-.5)*500);this._buildBolt(c,new _(this.pos.x,-5,this.pos.z)),this.mat.uniforms.uWidth.value=Math.max(2.2,this.dist*.0032)}return this.pendingThunder.push({at:this.time+Math.min(2.2,this.dist/343*.3),dist:this.dist,power:this.power,pos:this.pos.clone().setY(600)}),this}update(t,e,i,n=!0){this.time+=t,n&&(this.next-=t*i,this.next<=0&&(this.strike(e),this.next=this.rnd()<.22?1.2+this.rnd()*2.5:7+this.rnd()*22));let s=0;if(this.active){this.age+=t;let a=!1;for(let o of this.strokes){let c=this.age-o.t;if(c<0){a=!0;continue}let h=o.peak*Math.min(1,c/.008)*Math.exp(-c/o.tau);h>.004&&(a=!0),s+=h}s*=.85+.3*Math.sin(this.age*190)*Math.sin(this.age*67),a||(this.active=!1,s=0)}this.intensity=Math.max(0,s),rt.uFlash.value=this.intensity*.62,this.active&&(rt.uFlashDir.value.copy(this.dir),rt.uFlashSheet.value=this.sheet),this.bolt.visible=this.active&&!this.sheet&&this.intensity>.01,this.mat.uniforms.uPower.value=this.intensity*26,this.mat.uniforms.uFog.value=Math.exp(-this.dist*rt.uFogDensity.value*.55);for(let a=this.pendingThunder.length-1;a>=0;a--)if(this.time>=this.pendingThunder[a].at){let o=this.pendingThunder.splice(a,1)[0];this.onThunder&&this.onThunder(o)}}};var px=`
attribute vec4 aPos;      // xyz, size
attribute vec4 aData;     // alpha, rotation, stretch, kind
attribute vec3 aVel;
attribute vec2 aMisc;     // age 0..1, seed
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist; varying float vAge; varying float vSeed; varying float vSpot;
${Hs}
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
}`,mx=`
precision highp float;
uniform sampler2D uTex; uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor;
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist; varying float vAge; varying float vSeed; varying float vSpot;
void main() {
  vec3 light = uAmbient * 2.6 + uFlashColor * uFlash * 1.9 + ${un} * min(vSpot, 1.0) * 0.14;
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
}`;function gx(r=31,t=256){let e=Ci(r),i=new Float32Array(4096);for(let h=0;h<i.length;h++)i[h]=e();let n=(h,l,u)=>i[((h*73+l*151+u*37)%4096+4096)%4096],s=(h,l,u)=>{let d=Math.floor(h),f=Math.floor(l),g=h-d,b=l-f,m=g*g*(3-2*g),p=b*b*(3-2*b);return(n(d,f,u)*(1-m)+n(d+1,f,u)*m)*(1-p)+(n(d,f+1,u)*(1-m)+n(d+1,f+1,u)*m)*p},a=(h,l,u,d)=>{let f=.5,g=0;for(let b=0;b<d;b++)g+=f*s(h,l,u+b*7),h=h*2.03+11.3,l=l*2.03+5.7,f*=.5;return g},o=new Uint8Array(t*2*t*2*4);for(let h=0;h<2;h++)for(let l=0;l<2;l++){let u=l+h*2+1;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=(f+.5)/t*2-1,b=(d+.5)/t*2-1,m=g+(a(g*2.2+3,b*2.2,u+20,3)-.5)*.7,p=b+(a(g*2.2,b*2.2+9,u+40,3)-.5)*.7,y=Math.hypot(m,p)*(.92+.5*(a(Math.atan2(p,m)*1.6+5,1.5,u+60,2)-.5)),x=Math.max(0,1-y*1.08),M=Math.max(0,Math.min(1,(a(m*3.1+7,p*3.1+2,u,4)*1.5-.22)*Math.pow(x,.7)*1.9)),R=a(g*15+1,b*15+4,u+80,3),v=((h*t+d)*t*2+l*t+f)*4;o[v]=Math.round(M*255),o[v+1]=Math.round(R*255),o[v+2]=0,o[v+3]=255}}let c=new Ui(o,t*2,t*2,de,We);return c.minFilter=ee,c.magFilter=ee,c.generateMipmaps=!1,c.needsUpdate=!0,c}var ao=class{constructor(t,e=6e3){this.waves=t,this.max=e,this.px=new Float32Array(e),this.py=new Float32Array(e),this.pz=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vz=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.grow=new Float32Array(e),this.kind=new Float32Array(e),this.stretch=new Float32Array(e),this.rot=new Float32Array(e),this.alpha=new Float32Array(e),this.seed=new Float32Array(e),this.head=0,this.alive=0;let i=new Wi;i.setAttribute("position",new Vt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]);let n=s=>{let a=new je(new Float32Array(e*s),s);return a.setUsage(qi),a};this.aPos=n(4),this.aData=n(4),this.aVel=n(3),this.aMisc=n(2),i.setAttribute("aPos",this.aPos),i.setAttribute("aData",this.aData),i.setAttribute("aVel",this.aVel),i.setAttribute("aMisc",this.aMisc),i.instanceCount=0,this.mesh=new gt(i,new re({uniforms:{uTex:{value:gx()},uAmbient:rt.uAmbient,uFlash:rt.uFlash,uFlashColor:rt.uFlashColor,uSpotPos:rt.uSpotPos,uSpotDir:rt.uSpotDir,uSpotP:rt.uSpotP},vertexShader:px,fragmentShader:mx,transparent:!0,depthWrite:!1})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=15,this._s=fi(),this._tick=0,this.emitAcc=0,this.near=!1,this.hot=[]}emit(t,e,i,n,s,a,o,c,h,l=0,u=1,d=-1){let f=this.head;this.head=(this.head+1)%this.max,this.px[f]=t,this.py[f]=e,this.pz[f]=i,this.vx[f]=n,this.vy[f]=s,this.vz[f]=a,this.life[f]=o,this.maxLife[f]=o,this.size[f]=c,this.kind[f]=h,this.grow[f]=l,this.rot[f]=h>1.5?0:Math.random()*6.283,this.alpha[f]=u,this.seed[f]=Math.random()*.999+(this.near?2:0),this.stretch[f]=d>=0?d:h<.5?1:h>1.5?2.6:.35}burst(t,e,i,n,s,a=0,o=0){let c=this.near;this.near=!0;let h=Math.min(1.9,.42+n*.27),l=s.x*.1,u=s.z*.1,d=Math.min(230,Math.round(8+n*38));for(let m=0;m<d;m++){let p=Math.random()*6.283,y=.12+Math.random()*.34*h,x=(1+2.4*Math.random())*h,M=(1.8+3.6*Math.pow(Math.random(),1.4))*h;this.emit(t+Math.cos(p)*y,e+.03+Math.random()*.1,i+Math.sin(p)*y,Math.cos(p)*x+a*x*1.5+l,M,Math.sin(p)*x+o*x*1.5+u,.55+Math.random()*.75,.01+Math.pow(Math.random(),2)*.026,0,0,.95)}let f=Math.min(60,Math.round(n*10));for(let m=0;m<f;m++){let p=Math.random()*6.283,y=Math.random()*.7*h;this.emit(t+Math.cos(p)*.08,e+.05,i+Math.sin(p)*.08,Math.cos(p)*y+a*h+l,(3.2+4.2*Math.random())*h,Math.sin(p)*y+o*h+u,.6+Math.random()*.7,.012+Math.random()*.022,0,0,.95)}let g=Math.max(0,Math.min(26,Math.round(n*5.5-2.5)));for(let m=0;m<g;m++){let p=Math.random()*6.283,y=(.9+1.5*Math.random())*h;this.emit(t+Math.cos(p)*.25*h,e+.08+Math.random()*.15,i+Math.sin(p)*.25*h,Math.cos(p)*y+a*y+l,(1.1+1.9*Math.random())*h,Math.sin(p)*y+o*y+u,.45+Math.random()*.45,(.13+Math.random()*.17)*h,1,.55,.55,1)}let b=Math.max(0,Math.min(14,Math.round(n*2.8-2.6)));for(let m=0;m<b;m++){let p=Math.random()*6.283,y=Math.random()*.9*h;this.emit(t+Math.cos(p)*.3,e+.15+Math.random()*.3,i+Math.sin(p)*.3,Math.cos(p)*y+l*2,.5+Math.random()*1.1,Math.sin(p)*y+u*2,.9+Math.random()*1.1,(.24+Math.random()*.3)*h,1,.5,.2,.3)}this.near=c}slap(t,e,i,n,s,a,o=0,c=0,h=0,l=1){let u=Math.pow(n,.7),d=this.near;this.near=!0;let f=Math.round(3+n*8);for(let g=0;g<f;g++){let b=Math.random()*6.283,m=(.3+1.2*Math.random())*u,p=(.7+1.9*Math.pow(Math.random(),1.5))*u;this.emit(t+Math.cos(b)*.07,e+.02+Math.random()*.04,i+Math.sin(b)*.07,o+Math.cos(b)*m+s*m*1.6,c+p,h+Math.sin(b)*m+a*m*1.6,.3+Math.random()*.45,Math.random()<.2?.022+Math.random()*.02:.009+Math.pow(Math.random(),2)*.02,0,0,.95)}if(l>0&&n>.9){let g=Math.random()*6.283,b=.4*u;this.emit(t,e+.05,i,o+Math.cos(g)*b+s*1.2,c+.9*u,h+Math.sin(g)*b+a*1.2,.18+Math.random()*.14,(.05+Math.random()*.04)*u,1,.35,.3,1)}this.near=d}fling(t,e,i,n,s,a,o){let c=this.near;this.near=!0;let h=Math.round(3+o*6);for(let u=0;u<h;u++){let d=.4+.6*Math.random();this.emit(t+(Math.random()-.5)*.1,e+Math.random()*.06,i+(Math.random()-.5)*.1,n*d+(Math.random()-.5)*1,s*d+.5+Math.random()*1.1,a*d+(Math.random()-.5)*1,.4+Math.random()*.6,.011+Math.pow(Math.random(),2)*.034,0,0,1)}let l=0;for(let u=0;u<l;u++)this.emit(t,e+.05,i,n*.5+(Math.random()-.5)*.5,s*.5+.6,a*.5+(Math.random()-.5)*.5,.2+Math.random()*.18,(.06+.05*Math.random())*Math.sqrt(o),1,.5,.55,1);this.near=c}seedCrests(t,e,i,n,s){let a=this.waves,o=this._s;this.hot.length=0;let c=Math.round(s*(.5+.5*n)),h=Math.hypot(i.x,i.z)+.001;for(let u=0;u<c;u++){let d=Math.random()*6.283,f=3+Math.pow(Math.random(),1.6)*95,g=e.x+Math.cos(d)*f,b=e.z+Math.sin(d)*f;a.sample(g,b,o);let m=Math.max(0,.42-o.jac)*2.4,p=Math.max(m,o.aer*1.6,o.turb*.5);if(p<.05)continue;(this.hot.length<6||p>this.hot[this.hot.length-1].amount)&&(this.hot.push({x:g,y:o.h,z:b,amount:p}),this.hot.sort((x,M)=>M.amount-x.amount),this.hot.length>6&&(this.hot.length=6));let y=Math.min(12,Math.round(2+p*6));for(let x=0;x<y;x++){let M=Math.random()<.36,R=(Math.random()-.5)*2.4,v=(Math.random()-.5)*2.4,w=(.8+2.8*Math.random())*(.6+p);this.emit(g+R,o.h+.05+Math.random()*.25,b+v,o.vx+i.x*(.22+.3*Math.random()),o.vy*.5+w,o.vz+i.z*(.22+.3*Math.random()),M?1.4+Math.random()*1.8:.6+Math.random()*.9,M?.4+Math.random()*.7:.014+Math.pow(Math.random(),2)*.04,M?1:0,M?1.2:0,M?.2:.9)}}let l=Math.round(s*.34*n*n);for(let u=0;u<l;u++){let d=Math.random()*6.283,f=2+Math.pow(Math.random(),1.3)*48,g=e.x+Math.cos(d)*f,b=e.z+Math.sin(d)*f;a.sample(g,b,o);let m=Math.max(0,-(o.nx*i.x+o.nz*i.z)/h);if(!(Math.random()>.35+1.6*m))for(let p=0;p<2;p++)this.emit(g+(Math.random()-.5)*3,o.h+.1+Math.random()*.5,b+(Math.random()-.5)*3,o.vx+i.x*(.45+.4*Math.random()),.4+Math.random()*1.6,o.vz+i.z*(.45+.4*Math.random()),.6+Math.random()*.9,.2+Math.random()*.3,2,.25,.07,1.1)}}seedBreakers(t,e,i){let n=this.waves;for(let s of n.breakers){if(!s.active||s.height<2)continue;let a=s.brk<.01?Math.min(.34,Math.max(0,(s.height-3.5)/18)):0,o=Math.max(s.curl,s.brk*.8,s.turb*.35,a),c=o===a;if(o<.05)continue;let h=e.x-s.ox,l=e.z-s.oz,u=-h*s.dz+l*s.dx,d=h*s.dx+l*s.dz-s.s;if(Math.abs(d)>160+s.height*3)continue;let f=Math.min(2.2,.7+s.height/16);this.emitAcc+=t*620*o*Math.min(1.6,s.height/8)*(this.thin===void 0?1:this.thin);let g=Math.min(130,Math.floor(this.emitAcc));this.emitAcc-=g;for(let b=0;b<g;b++){let m=u+(Math.random()-.5)*110*f;if(Math.exp(-(m*m)/(s.width*s.width))<.15)continue;let x=2.6*Math.sin(m*.047+s.seed*.6)+1.2*Math.sin(m*.13+s.seed*2.1)+(c?(Math.random()-.5)*s.front*.45:(Math.random()-.35)*s.front*1.3),M=s.ox+s.dx*(s.s+x)-s.dz*m,R=s.oz+s.dz*(s.s+x)+s.dx*m,v=n.heightFast(M,R)+Math.random()*.6,w=Math.random()<(s.mega?.14:.26)*(this.thin===void 0?1:this.thin),A=s.speed*(.55+.6*Math.random());this.emit(M,v,R,s.dx*A+i.x*.2,(1.5+5.5*Math.random())*(.5+o)*f,s.dz*A+i.z*.2,w?2+Math.random()*2.4:.8+Math.random()*1.1,w?Math.min(3,(.7+Math.random()*1.2)*f):.02+Math.pow(Math.random(),2)*.07,w?1:0,w?1.4:0,w?.17:.9,w?.5:1)}}}update(t,e,i){let n=this.max,s=this.waves,a=0,o=this.aPos.array,c=this.aData.array,h=this.aVel.array,l=this.aMisc.array;this._tick=(this._tick+1)%3;for(let u=0;u<n;u++){let d=this.life[u];if(d<=0||(d-=t,this.life[u]=d,d<=0))continue;let f=this.kind[u],g=f>.5?2.4:.5,b=Math.exp(-g*t);if(this.vx[u]=i.x+(this.vx[u]-i.x)*b,this.vz[u]=i.z+(this.vz[u]-i.z)*b,this.vy[u]=(this.vy[u]-(f>.5?2.6:9.81)*t)*(f>.5?b:1),this.px[u]+=this.vx[u]*t,this.py[u]+=this.vy[u]*t,this.pz[u]+=this.vz[u]*t,this.size[u]+=this.grow[u]*t,u%3===this._tick&&this.vy[u]<0&&this.py[u]<s.heightFast(this.px[u],this.pz[u])-.12){this.life[u]=0;continue}let m=1-d/this.maxLife[u],p=f<.5?Math.min(1,(1-m)*6):Math.min(1,m*9)*Math.min(1,(1-m)*3),y=a*4;o[y]=this.px[u],o[y+1]=this.py[u],o[y+2]=this.pz[u],o[y+3]=this.size[u],c[y]=this.alpha[u]*p,c[y+1]=this.rot[u],c[y+2]=this.stretch[u],c[y+3]=f,h[a*3]=this.vx[u],h[a*3+1]=this.vy[u],h[a*3+2]=this.vz[u],l[a*2]=m,l[a*2+1]=this.seed[u],a++}this.alive=a,this.mesh.geometry.instanceCount=a,this.aPos.needsUpdate=!0,this.aData.needsUpdate=!0,this.aVel.needsUpdate=!0,this.aMisc.needsUpdate=!0}};var bx=`
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
}`,vx=`
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
}`,xx=`
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
}`,yx=`
precision highp float;
uniform vec3 uLight;
varying vec2 vUv; varying float vA;
void main() {
  if (dot(vUv, vUv) > 1.0 || vA < 0.35) discard;
  gl_FragColor = vec4(uLight * 0.55, 1.0);
}`;function Rd(r,t){let e=new Wi;if(e.setAttribute("position",new Vt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),e.setIndex([0,1,2,0,2,3]),t){let i=new Float32Array(r*t);for(let n=0;n<i.length;n++)i[n]=Math.random();e.setAttribute("aSeed",new je(i,t))}return e.instanceCount=r,e}var oo=class{constructor(t,e){this.waves=t,this.group=new ce,this.under=0,this.isUnder=!1,this.depth=0,this.aeration=0,this.burst=0,this.onEnter=null,this.onExit=null,this.light=new _;let i=this.max=e.bubbles;this.bx=new Float32Array(i),this.by=new Float32Array(i),this.bz=new Float32Array(i),this.bvx=new Float32Array(i),this.bvz=new Float32Array(i),this.br=new Float32Array(i),this.bl=new Float32Array(i),this.bp=new Float32Array(i),this.head=0;let n=Rd(i,0);this.aPos=new je(new Float32Array(i*4),4),this.aPos.setUsage(qi),this.aSeed=new je(new Float32Array(i),1),this.aSeed.setUsage(qi),n.setAttribute("aPos",this.aPos),n.setAttribute("aSeed",this.aSeed),n.instanceCount=0,this.bubbles=new gt(n,new re({uniforms:{uPx:{value:.001},uLight:{value:this.light}},vertexShader:bx,fragmentShader:vx})),this.bubbles.frustumCulled=!1,this.bubbles.renderOrder=8,this.moteOffset=new _,this.motes=new gt(Rd(e.motes,4),new re({uniforms:{uBox:{value:new _(7,7,7)},uOffset:{value:this.moteOffset},uPx:{value:.001},uTime:rt.uTime,uLight:{value:this.light}},vertexShader:xx,fragmentShader:yx})),this.motes.frustumCulled=!1,this.motes.renderOrder=8,this.motes.visible=!1,this.group.add(this.bubbles,this.motes),this._w={vx:0,vy:0,vz:0},this._tick=0,this._exhale=0,this._aerAcc=0,this._kick=0,this._n=new _}bubble(t,e,i,n,s=6,a=0,o=0){let c=this.head;this.head=(this.head+1)%this.max,this.bx[c]=t,this.by[c]=e,this.bz[c]=i,this.br[c]=n,this.bl[c]=s,this.bp[c]=Math.random()*6.283,this.bvx[c]=a,this.bvz[c]=o}burstAt(t,e,i,n=1){for(let s=0;s<e;s++){let a=Math.random()*6.283,o=Math.acos(2*Math.random()-1),c=i*Math.cbrt(Math.random());this.bubble(t.x+Math.sin(o)*Math.cos(a)*c,t.y+Math.cos(o)*c,t.z+Math.sin(o)*Math.sin(a)*c,(.002+Math.pow(Math.random(),3)*.02)*n,2.5+Math.random()*5,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2)}}update(t,e,i,n,s,a,o,c,h,l){let u=i,d=e.position,f=this._n.set(u.nx,u.ny,u.nz),g=f.x*0+f.y*(d.y-u.h)+f.z*0;this.depth=-g,o.u.uWaterPlane.value.set(f.x,f.y,f.z,-(f.x*d.x+f.y*u.h+f.z*d.z)),o.u.uUnderAmount.value=g<.4?1:0;let b=this.isUnder;this.isUnder=b?g<.03:g<-.03;let m=1-De(-.12,.05,g);this.under+=(m-this.under)*(1-Math.exp(-t*18)),this.isUnder&&!b&&this.onEnter&&this.onEnter(),!this.isUnder&&b&&this.onExit&&this.onExit();let p=Math.max(0,this.depth),y=rt.uAmbient.value,x=rt.uFlash.value,M=rt.uFlashColor.value,R=Math.exp(-p*.085);o.u.uUnderColor.value.set((y.x*.9+M.x*x*.5)*.1*R,(y.y*.9+M.y*x*.5)*.3*R,(y.z*.9+M.z*x*.5)*.38*R),this.burst=Math.max(0,this.burst-t*.7);let v=Math.min(1,(u.aer*1.15+this.burst*.8)*Math.exp(-p/3.2)+u.turb*.22*Math.exp(-p/4.5));this.aeration+=(v-this.aeration)*(1-Math.exp(-t*(v>this.aeration?12:1.6))),o.u.uAeration.value=this.aeration*this.under;let w=1+2.8*this.aeration;o.u.uUnderExt.value.set(.3*w,.13*w,.1*w),o.u.uUnderDistort.value=.004+.01*Math.min(1,u.turb+this.aeration),o.u.uShaft.value=(.9-.5*c.storm+x*3)*Math.exp(-p*.12),o.u.uExposureBias.value=1+(.62*Math.exp(-p*.045)-1)*this.under;let A=2.6*R*(1+5*this.aeration);this.light.set((y.x*A+M.x*x*.8)*1,(y.y*A+M.y*x*.8)*1.25,(y.z*A+M.z*x*.8)*1.35);let E=2*Math.tan(Rn.degToRad(e.fov)*.5)/Math.max(1,l);if(this.bubbles.material.uniforms.uPx.value=E,this.motes.material.uniforms.uPx.value=E,a.wasUnder&&a.alive)for(this._exhale+=t*(5+16*s.effort+22*mt((40-a.oxygen)/40));this._exhale>=1;)this._exhale-=1,this.bubble(h.x+(Math.random()-.5)*.06,h.y,h.z+(Math.random()-.5)*.06,.003+Math.random()*.012,5,n.vel.x*.5,n.vel.z*.5);if(n.subFrac>.5)for(this._kick+=t*Math.min(140,n.relSpeed*n.relSpeed*3.2);this._kick>=1;){this._kick-=1;let P=n.points[2+(Math.random()*9|0)].world;this.bubble(P.x+(Math.random()-.5)*.3,P.y+(Math.random()-.5)*.3,P.z+(Math.random()-.5)*.3,.002+Math.random()*.007,3+Math.random()*3)}if(this.under>.3&&this.aeration>.04){this._aerAcc+=t*900*this.aeration;let P=Math.min(60,Math.floor(this._aerAcc));for(this._aerAcc-=P;P-- >0;){let L=Math.random()*6.283,O=.4+Math.random()*3.6,U=(Math.random()-.4)*3.2;this.bubble(d.x+Math.cos(L)*O,d.y+U,d.z+Math.sin(L)*O,.002+Math.pow(Math.random(),2.5)*.03,2+Math.random()*4,(Math.random()-.5)*2,(Math.random()-.5)*2)}}let S=this.waves,z=this.aPos.array,V=this.aSeed.array,it=0;this._tick=(this._tick+1)%4;let k=S.breakers.some(P=>P.active&&(P.roll>.01||P.turb>.01));for(let P=0;P<this.max;P++){let L=this.bl[P];if(L<=0)continue;L-=t,this.bl[P]=L;let O=this.br[P],U=.18+2.6*Math.sqrt(O);this.bp[P]+=t*(5+30*O/.02);let I=this.bvx[P]+Math.sin(this.bp[P])*.12,B=U,W=this.bvz[P]+Math.cos(this.bp[P]*.8)*.12;if(k){let N=this._w;N.vx=0,N.vy=0,N.vz=0,S.breakerFlow(this.bx[P],this.by[P],this.bz[P],u.h,N),I+=N.vx,B+=N.vy,W+=N.vz}let Q=Math.exp(-t*1.5);if(this.bvx[P]*=Q,this.bvz[P]*=Q,this.bx[P]+=I*t,this.by[P]+=B*t,this.bz[P]+=W*t,P%4===this._tick&&this.by[P]>S.heightFast(this.bx[P],this.bz[P])-.02){this.bl[P]=0;continue}if(L<=0)continue;let H=it*4;z[H]=this.bx[P],z[H+1]=this.by[P],z[H+2]=this.bz[P],z[H+3]=O*Math.min(1,L*2),V[it]=this.bp[P],it++}this.bubbles.geometry.instanceCount=it,this.aPos.needsUpdate=!0,this.aSeed.needsUpdate=!0,this.bubbles.visible=it>0,this.motes.visible=this.under>.02,this.moteOffset.addScaledVector(n.relFlow,t*.6),this.moteOffset.y-=t*.01}};function ph(r,t,e){let i=Math.floor(r.sampleRate*t),n=r.createBuffer(1,i,r.sampleRate),s=n.getChannelData(0),a=0,o=0,c=0,h=0;for(let u=0;u<i;u++){let d=Math.random()*2-1;e==="white"?s[u]=d*.6:e==="pink"?(a=.99765*a+d*.099046,o=.963*o+d*.2965164,c=.57*c+d*1.0526913,s[u]=(a+o+c+d*.1848)*.16):(h=(h+.02*d)/1.02,s[u]=h*3.2)}let l=Math.floor(r.sampleRate*.05);for(let u=0;u<l;u++){let d=u/l;s[i-l+u]=s[i-l+u]*(1-d)+s[u]*d}return n}var co=class{constructor(){this.ctx=null,this.ready=!1,this.volume=.85,this.sfxOn=!0,this.under=0,this.heartPhase=0,this.gurgleTimer=1,this.time=0,this.patter=0,this.lastCrash=-10}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.white=ph(e,4,"white"),this.pink=ph(e,6,"pink"),this.brown=ph(e,8,"brown");let i=w=>{let A=e.createGain();return A.gain.value=w,A},n=(w,A,E=.7)=>{let S=e.createBiquadFilter();return S.type=w,S.frequency.value=A,S.Q.value=E,S};this.G=i,this.F=n,this.master=i(this.volume);let s=e.createDynamicsCompressor();s.threshold.value=-22,s.ratio.value=7,s.attack.value=.004,s.release.value=.35,this.finalLP=n("lowpass",2e4,.7);let a=i(1.5);this.master.connect(this.finalLP),this.finalLP.connect(s),s.connect(a),a.connect(e.destination),this.air=i(1),this.airLP=n("lowpass",2e4,.7),this.airBoom=n("peaking",170,1.6),this.airBoom.gain.value=0,this.air.connect(this.airLP),this.airLP.connect(this.airBoom),this.airBoom.connect(this.master),this.water=i(0),this.water.connect(this.master);let o=e.createBuffer(2,Math.floor(e.sampleRate*2.6),e.sampleRate);for(let w=0;w<2;w++){let A=o.getChannelData(w),E=0;for(let S=0;S<A.length;S++){let z=S/e.sampleRate;E+=(Math.random()*2-1-E)*.12,A[S]=E*Math.exp(-z*2.4)*2.2}}this.verb=e.createConvolver(),this.verb.buffer=o,this.verbOut=i(.5),this.verb.connect(this.verbOut),this.verbOut.connect(this.master),this.waterSend=i(.9),this.water.connect(this.waterSend),this.waterSend.connect(this.verb);let c=(w,A=1)=>{let E=e.createBufferSource();return E.buffer=w,E.loop=!0,E.playbackRate.value=A,E.start(0,Math.random()*w.duration),E},h=(w,A,E)=>{let S=w;for(let z of A)S.connect(z),S=z;return S.connect(E),A[A.length-1]};this.rumble=h(c(this.brown,.8),[n("lowpass",130),i(.3)],this.air),this.wash=h(c(this.pink),[n("bandpass",620,.5),i(0)],this.air),this.roar=h(c(this.brown,1.3),[n("bandpass",210,.6),i(0)],this.air),this.roarF=this.roar,this.spots=[];for(let w=0;w<3;w++){let A=e.createPanner();A.panningModel="HRTF",A.distanceModel="inverse",A.refDistance=6,A.rolloffFactor=1.1,A.maxDistance=200;let E=i(0),S=n("bandpass",900+w*450,.7);c(this.pink,.9+w*.13).connect(S),S.connect(E),E.connect(A),A.connect(this.air),this.spots.push({p:A,g:E,x:0,y:0,z:0,a:0})}this.rainG=h(c(this.white),[n("highpass",1900),n("lowpass",9500),i(0)],this.air),this.patterG=h(c(this.white,1.3),[n("bandpass",3400,1.4),i(0)],this.air),this.windF=n("bandpass",420,1.8),this.windG=i(0),this.windPan=e.createStereoPanner?e.createStereoPanner():i(1),c(this.pink,.7).connect(this.windF),this.windF.connect(this.windG),this.windG.connect(this.windPan),this.windPan.connect(this.air),this.whistleF=n("bandpass",1300,7),this.whistleG=i(0),c(this.pink,1.1).connect(this.whistleF),this.whistleF.connect(this.whistleG),this.whistleG.connect(this.windPan),this.droneG=h(c(this.brown,.55),[n("lowpass",95),i(.9)],this.water),this.streamF=n("bandpass",520,.9),this.streamG=i(0),this.streamAM=i(0);let l=c(this.brown,.35),u=i(14);l.connect(n("lowpass",14)).connect(u),u.connect(this.streamAM.gain),c(this.pink,1.25).connect(this.streamF),this.streamF.connect(this.streamAM),this.streamAM.connect(this.streamG),this.streamG.connect(this.water),this.bodyG=i(1),this.bodyG.connect(this.master),this.vDry=i(1);let d=n("highpass",115,.7),f=n("peaking",1150,1),g=n("lowpass",6200,.7);f.gain.value=2.5,this.vDry.connect(d),d.connect(f),f.connect(g),g.connect(this.master),this.vWet=i(0),this.vLP=n("lowpass",430,3.5),this.vRes=n("peaking",260,2),this.vRes.gain.value=8,this.vTrem=i(.55),this.vWet.connect(this.vLP),this.vLP.connect(this.vRes),this.vRes.connect(this.vTrem),this.vTrem.connect(this.water),this.vTrem.connect(this.verb),this.breathG=i(1),this.breathG.connect(this.vDry),this.breathG.connect(this.vWet),this.beds=null,this.swimLevel=0;let b=e.createOscillator();b.type="sawtooth",b.frequency.value=17;let m=i(.5);b.connect(m),m.connect(this.vTrem.gain);let p=c(this.brown,.3),y=i(55);p.connect(n("lowpass",6)).connect(y),y.connect(b.frequency),b.start(),this.tinG=i(0),this.tinG.connect(s);for(let w of[3150,3212]){let A=e.createOscillator();A.type="sine",A.frequency.value=w,A.connect(this.tinG),A.start()}this.heliPan=e.createPanner(),this.heliPan.panningModel="HRTF",this.heliPan.distanceModel="inverse",this.heliPan.refDistance=45,this.heliPan.rolloffFactor=.7,this.heliPan.maxDistance=1200,this.heliG=i(0),this.heliChop=i(.5);let x=e.createOscillator();x.type="sawtooth",x.frequency.value=21;let M=i(.45);x.connect(M),M.connect(this.heliChop.gain),x.start(),c(this.brown,1.4).connect(n("lowpass",180)).connect(this.heliChop);let R=n("bandpass",1900,6),v=i(.05);c(this.white,1).connect(R),R.connect(v),v.connect(this.heliG),this.heliChop.connect(this.heliG),this.heliG.connect(this.heliPan),this.heliPan.connect(this.air),this.voice={},this.curVoice=null,this.ready=!0,this._decodeVoices()}setVoices(t){this.voiceSrc=t,this.ready&&this._decodeVoices()}_decodeVoices(){if(!(!this.voiceSrc||this._decoding)){this._decoding=!0;for(let[t,e]of Object.entries(this.voiceSrc)){let i=atob(e),n=new Uint8Array(i.length);for(let s=0;s<i.length;s++)n[s]=i.charCodeAt(s);this.ctx.decodeAudioData(n.buffer).then(s=>{this.voice[t]=s,this._startBeds()}).catch(()=>{})}}}_startBeds(){let t=this.voice;if(this.beds||!t.b_pant||!t.b_tired||!t.w_swim||this.voiceSrc.a_storm&&!t.a_storm||this.voiceSrc.a_heli&&!t.a_heli||this.voiceSrc.bt_creak&&!t.bt_creak)return;let e=(i,n)=>{let s=this.ctx.createBufferSource();s.buffer=i,s.loop=!0,s.loopStart=.03,s.loopEnd=i.duration-.03;let a=this.G(0);return s.connect(a),a.connect(n),s.start(0,.03+Math.random()*(i.duration-.1)),{s,g:a}};this.beds={pant:e(t.b_pant,this.breathG),tired:e(t.b_tired,this.breathG),swim:e(t.w_swim,this.air)},t.a_storm&&(this.beds.storm=e(t.a_storm,this.air)),t.bt_creak&&(this.beds.boat=e(t.bt_creak,this.air)),t.a_heli&&(this.beds.heli=e(t.a_heli,this.heliG),this.beds.heli.g.gain.value=1)}setBreath(t,e,i,n){if(!this.beds||!this.ready||this.ctx.state!=="running")return;let s=this.ctx.currentTime,a=n?.09:.012;this.beds.pant.g.gain.setTargetAtTime(t,s,a),this.beds.tired.g.gain.setTargetAtTime(e,s,a),this.beds.pant.s.playbackRate.setTargetAtTime(i,s,.4)}playVoice(t,e=1,i=1,n=null){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;this.stopVoice(.05);let a=this.ctx,o=a.currentTime,c=i*(this.under>.5?.84:1),h=n?Math.min(n[0],s.duration):0,l=n?Math.min(n[1],s.duration):s.duration,u=(l-h)/c,d=a.createBufferSource();d.buffer=s,d.playbackRate.value=c;let f=this.G(1e-4);return f.gain.setValueAtTime(1e-4,o),f.gain.exponentialRampToValueAtTime(Math.max(.001,e),o+(n&&n[0]>0?.09:.012)),n&&l<s.duration-.01&&(f.gain.setValueAtTime(Math.max(.001,e),o+Math.max(.02,u-.12)),f.gain.exponentialRampToValueAtTime(1e-4,o+u)),d.connect(f),f.connect(this.vDry),f.connect(this.vWet),d.start(o,h,l-h),this.curVoice={s:d,g:f,end:o+u},u}stopVoice(t=.08){let e=this.curVoice;if(!e)return;this.curVoice=null;let i=this.ctx.currentTime;if(!(i>=e.end))try{e.g.gain.setTargetAtTime(0,i,t/3),e.s.stop(i+t+.05)}catch{}}playClip(t,e=1,i=1,n=0){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;let a=this.ctx,o=a.createBufferSource();o.buffer=s,o.playbackRate.value=i;let c=this.G(e);if(o.connect(c),a.createStereoPanner){let h=a.createStereoPanner();h.pan.value=n,c.connect(h),h.connect(this.air)}else c.connect(this.air);return o.start(),s.duration/i}setVolume(t){this.volume=t,this.master&&this.master.gain.setTargetAtTime(this.sfxOn===!1?0:t,this.ctx.currentTime,.05)}setSfx(t){this.sfxOn=t,this.master&&this.master.gain.setTargetAtTime(t?this.volume:0,this.ctx.currentTime,.05),this.tinG&&!t&&this.tinG.gain.setTargetAtTime(0,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_burst(t){let e=this.ctx,i=e.currentTime+(t.delay||0),n=e.createBufferSource();n.buffer=t.buf,n.playbackRate.value=t.rate||1;let s=this.F(t.type||"bandpass",t.f0,t.q||1);t.f1&&s.frequency.exponentialRampToValueAtTime(Math.max(20,t.f1),i+t.dur);let a=this.G(0);a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(Math.max(2e-4,t.gain),i+(t.attack||.02)),a.gain.exponentialRampToValueAtTime(1e-4,i+t.dur),n.connect(s),s.connect(a);let o=a;if(t.pan!==void 0&&e.createStereoPanner){let c=e.createStereoPanner();c.pan.value=t.pan,a.connect(c),o=c}o.connect(t.out||this.air),t.verb&&o.connect(this.verb),n.start(i,Math.random()*(t.buf.duration-t.dur-.1)),n.stop(i+t.dur+.05)}_blip(t,e,i,n,s,a){let o=this.ctx,c=o.currentTime+s,h=o.createOscillator();h.type="sine",h.frequency.setValueAtTime(t,c),h.frequency.exponentialRampToValueAtTime(e,c+i);let l=this.G(0);l.gain.setValueAtTime(1e-4,c),l.gain.exponentialRampToValueAtTime(n,c+i*.3),l.gain.exponentialRampToValueAtTime(1e-4,c+i),h.connect(l),l.connect(a||this.water),h.start(c),h.stop(c+i+.02)}gurgle(t=.6){if(!this.ready)return;let e=6+Math.floor(Math.random()*10*t+4),i=0;for(let n=0;n<e;n++){let s=170+Math.random()*420;this._blip(s,s*(1.5+Math.random()*.9),.035+Math.random()*.05,.1*t*(.4+Math.random()),i),i+=.022+Math.random()*.06}this._burst({buf:this.pink,f0:380,f1:900,q:1.2,dur:Math.min(1.2,i+.2),gain:.16*t,attack:.05,out:this.water})}onEvent(t,e){if(!this.ready)return;let i=this.under>.5;switch(t){case"thunder":{let n=mt(e.dist/7e3),s=e.power;{let b="a_thunder"+(1+(Math.random()*3|0)),m=this.voice&&this.voice[b];if(m){let p=this.ctx,y=p.currentTime,x=p.createBufferSource();x.buffer=m,x.playbackRate.value=xt(1,.82,n)*(.94+Math.random()*.12);let M=this.F("lowpass",xt(16e3,420,Math.sqrt(n)),.6),R=this.G(xt(2.2,.45,n)*s);x.connect(M),M.connect(R),R.connect(this.air),R.connect(this.verb),x.start(y),e.dist<2600&&(this._blip(64,26,1.4,1.1*s*(1-e.dist/2600),0,this.master),this._burst({buf:this.white,type:"highpass",f0:1800,dur:.22,gain:1.2*s*(1-e.dist/2600),attack:.002}))}}let a=xt(5,10,Math.random())*(.8+.4*n),o=this.ctx,c=o.currentTime,h=o.createBufferSource();h.buffer=this.brown,h.loop=!0,h.playbackRate.value=.7+Math.random()*.5;let l=this.F("lowpass",xt(1100,170,n),.5),u=this.G(0),d=xt(.6,.2,n)*s;u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(d,c+xt(.04,.6,n));let f=c+.5,g=2+Math.floor(Math.random()*4);for(let b=0;b<g;b++)f+=.4+Math.random()*1.1,u.gain.exponentialRampToValueAtTime(d*(.25+Math.random()*.5)*Math.exp(-b*.35),f);u.gain.exponentialRampToValueAtTime(1e-4,c+a),h.connect(l),l.connect(u),u.connect(this.air),u.connect(this.verb),h.start(c,Math.random()*6),h.stop(c+a+.1),e.dist<2200&&this._burst({buf:this.white,type:"highpass",f0:700,dur:.35,gain:.8*s*(1-e.dist/2200),attack:.004,verb:!0});break}case"impact":{let n=Math.min(1,e.strength/3.2);if(this.time-this.lastCrash<.5)break;this.lastCrash=this.time,this._burst({buf:this.white,type:"lowpass",f0:5200,f1:260,q:.6,dur:1.5+n,gain:.55+.5*n,attack:.015,verb:!0}),this._burst({buf:this.brown,type:"lowpass",f0:240,f1:60,q:.8,dur:1.9,gain:1*n+.3,attack:.02,out:this.master}),this._blip(74,34,.7,.5*n,0,this.master),this.playClip("a_crash"+(1+(Math.random()*3|0)),.7+.6*n,.9+Math.random()*.2,0);break}case"boatSlam":{let n=Math.min(1,e.v/6);if(this.time-(this.lastSlam||-9)<.35)break;this.lastSlam=this.time,this.playClip("bt_slam"+(1+(Math.random()*3|0)),.35+.65*n,.88+Math.random()*.22,e.pan||0),this._blip(64,30,.5,.35*n,0,this.master);break}case"splash":{let n=Math.min(1,e.v/5);this._burst({buf:this.pink,f0:1400+Math.random()*1200,f1:600,q:.8,dur:.16+.22*n,gain:.1+.22*n,attack:.006,pan:Math.random()*1.2-.6});break}case"submerge":this._burst({buf:this.brown,type:"lowpass",f0:900,f1:120,dur:.7,gain:.7,attack:.01,out:this.master}),this.gurgle(.9),this.gurgleTimer=.8;break;case"surface":this._burst({buf:this.white,type:"highpass",f0:1500,f1:3500,dur:.5,gain:.3,attack:.02});break;case"camEnter":this._blip(120,52,.45,.35,0,this.master);break;case"camExit":this._burst({buf:this.pink,f0:2200,f1:900,q:.6,dur:.6,gain:.22,attack:.02});break;default:break}}update(t,e){if(!this.ready||this.ctx.state!=="running")return;this.time+=t;let i=this.ctx,n=i.currentTime,s=(f,g,b=.12)=>f.setTargetAtTime(g,n,b),a=this.under=e.under,o=i.listener,c=e.cam;o.positionX?(o.positionX.value=c.pos.x,o.positionY.value=c.pos.y,o.positionZ.value=c.pos.z,o.forwardX.value=c.fwd.x,o.forwardY.value=c.fwd.y,o.forwardZ.value=c.fwd.z,o.upX.value=c.up.x,o.upY.value=c.up.y,o.upZ.value=c.up.z):(o.setPosition(c.pos.x,c.pos.y,c.pos.z),o.setOrientation(c.fwd.x,c.fwd.y,c.fwd.z,c.up.x,c.up.y,c.up.z)),s(this.airLP.frequency,xt(2e4,330*Math.exp(-e.depth*.06)+120,a*a),.06),s(this.airBoom.gain,9*a,.1),s(this.air.gain,xt(1,.55,a),.1),s(this.water.gain,a*(1-.7*e.blackout),.08),s(this.bodyG.gain,(1-a)*(1-e.blackout),.05),s(this.verbOut.gain,.35+.5*a,.2);let h=.7+.6*(e.gust||0);s(this.rumble.gain,.32+.45*e.storm+.22*Math.min(1,Math.abs(e.swellV)/6),.3),this.beds&&this.beds.storm&&(s(this.beds.storm.g.gain,(.25+.95*e.storm)*h,.5),this.beds.storm.s.playbackRate.setTargetAtTime(.94+.1*(e.gust||0),n,1.2)),this.crashT=(this.crashT===void 0?3:this.crashT)-t*(.4+e.storm),this.crashT<=0&&a<.5&&(this.crashT=2.2+Math.random()*4.5,this.playClip("a_crash"+(1+(Math.random()*3|0)),(.16+.34*Math.random())*e.storm,.8+Math.random()*.4,Math.random()*1.6-.8));let l=0;for(let f of e.hot){let g=Math.hypot(f.x-c.pos.x,f.z-c.pos.z);l+=f.amount/(1+g/12)}s(this.wash.gain,Math.min(.8,.12*e.storm+.16*l),.25),s(this.roar.gain,Math.min(1.1,e.threat*e.threat*1.1),.2);for(let f=0;f<this.spots.length;f++){let g=this.spots[f],b=e.hot[f];b?(g.a<.02?(g.x=b.x,g.y=b.y,g.z=b.z):(g.x+=(b.x-g.x)*.1,g.y+=(b.y-g.y)*.1,g.z+=(b.z-g.z)*.1),g.a+=(Math.min(1,b.amount)-g.a)*.08):g.a*=.94,g.p.positionX?(g.p.positionX.value=g.x,g.p.positionY.value=g.y,g.p.positionZ.value=g.z):g.p.setPosition(g.x,g.y,g.z),s(g.g.gain,g.a*.9,.1)}s(this.rainG.gain,.2*e.rain*h,.4),this.patter+=Math.random()<t*9?1:0,this.patter*=Math.exp(-t*9),s(this.patterG.gain,.06*e.rain*(.4+Math.min(1.5,this.patter)),.03);let u=mt(e.windSpeed/34);s(this.windF.frequency,260+520*e.gust*u,.5),s(this.windG.gain,.55*Math.pow(u,1.5)*h+.6*(e.air||0),.15),s(this.whistleF.frequency,900+900*e.gust*e.gust,.6),s(this.whistleG.gain,.1*Math.pow(u,2.2)*e.gust,.5),this.windPan.pan&&s(this.windPan.pan,_i(e.windPan*.55,-.8,.8),.6),s(this.streamG.gain,Math.min(1,e.aeration*1.4+Math.min(.5,e.relSpeed*.08))*.5,.1),s(this.streamF.frequency,420+500*e.aeration,.2),e.mouthUnder&&e.alive&&(this.gurgleTimer-=t*(1+1.6*mt((45-e.oxygen)/45)+e.effort*.6),this.gurgleTimer<=0&&(this.gurgle(.45+.5*Math.random()),this.gurgleTimer=1.1+Math.random()*2));let d=mt((62-e.oxygen)/55)*(e.alive?1:0)+(e.mouthUnder?.18:0);if(d>.05&&(this.heartPhase+=t*xt(1.2,2.5,mt(d)),this.heartPhase>=1)){this.heartPhase-=1;let f=.5*Math.min(1,d*1.3);this._blip(62,40,.11,f,0,this.master),this._blip(52,36,.13,f*.7,.16,this.master)}if(s(this.master.gain,(this.sfxOn===!1?0:this.volume)*(1-.85*e.blackout),.3),e.heli&&e.heli.on){let f=e.heli.pos;this.heliPan.positionX?(this.heliPan.positionX.value=f.x,this.heliPan.positionY.value=f.y,this.heliPan.positionZ.value=f.z):this.heliPan.setPosition(f.x,f.y,f.z),s(this.heliG.gain,6,.6)}else s(this.heliG.gain,0,.8);this.beds&&s(this.beds.swim.g.gain,Math.min(.6,(e.swimSplash||0)*.55)*(1-a),.25),this.beds&&this.beds.boat&&(s(this.beds.boat.g.gain,Math.min(.5,(e.boatCreak||0)*.5)*(1-a),.3),this.beds.boat.s.playbackRate.setTargetAtTime(.9+.25*Math.min(1,e.boatCreak||0),n,.5)),s(this.vDry.gain,1-a,.04),s(this.vWet.gain,a*2.2,.04),s(this.tinG.gain,(this.sfxOn===!1?0:this.volume)*(.014*mt((30-e.oxygen)/30)+.03*e.blackout),.3),s(this.finalLP.frequency,2e4*Math.pow(.022,e.blackout)*Math.pow(.03,e.slow||0),.08)}};var _x=`
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
`,Qt=(r,t,e)=>{let i=document.createElement(r);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i},mh=r=>`${String(Math.floor(r/60)).padStart(2,"0")}:${String(Math.floor(r%60)).padStart(2,"0")}`,ho=class{constructor(t,e,i){this.root=t,this.api=e,this.isTouch=i;let n=Qt("style");n.textContent=_x,document.head.appendChild(n),this.title=Qt("div","layer shade"),this.title.id="title";let s=Qt("div","col");s.appendChild(Qt("h1","","EXTREME<br>OCEAN SURVIVAL")),this.goBtn=Qt("div","go act","\uC2DC\uC791"),s.appendChild(this.goBtn),this.titleRows=Qt("div"),s.appendChild(this.titleRows),this.title.appendChild(s),this.title.appendChild(Qt("div","hint",i?"\uC67C\uCABD \uB04C\uAE30 \uBC29\uD5A5 \xB7 \uD5E4\uC5C4 / \uC785\uC218 \uBC84\uD2BC \xB7 \uD654\uBA74 \uB04C\uAE30 \uC2DC\uC810":"WASD \uBC29\uD5A5 \xB7 Space(\uC88C\uD074\uB9AD) \uD5E4\uC5C4 \xB7 F(\uC6B0\uD074\uB9AD) \uC785\uC218 \xB7 \uB9C8\uC6B0\uC2A4 \uC2DC\uC810 \xB7 V \uC2DC\uC810 \uC804\uD658 \xB7 Esc \uBA48\uCDA4")),this.pause=Qt("div","layer shade"),this.pause.id="pause";let a=Qt("div","col");a.appendChild(Qt("h2","","\uBA48\uCDA4")),this.pauseTime=Qt("div","time"),a.appendChild(this.pauseTime),this.resumeBtn=Qt("div","go act","\uACC4\uC18D"),a.appendChild(this.resumeBtn),this.pauseRows=Qt("div"),a.appendChild(this.pauseRows),this.pause.appendChild(a),this.dead=Qt("div","layer shade"),this.dead.id="dead";let o=Qt("div","col");this.deadTitle=Qt("h2","",""),o.appendChild(this.deadTitle),this.deadTime=Qt("div","time"),o.appendChild(this.deadTime),this.againBtn=Qt("div","go act","\uB2E4\uC2DC"),o.appendChild(this.againBtn),this.dead.appendChild(o),this.won=Qt("div","layer shade"),this.won.id="won";let c=Qt("div","col");c.appendChild(Qt("h2","","\uAD6C\uC870\uB418\uC5C8\uB2E4")),this.wonTime=Qt("div","time"),c.appendChild(this.wonTime),this.wonBtn=Qt("div","go act","\uB2E4\uC2DC"),c.appendChild(this.wonBtn),this.won.appendChild(c),this.noteEl=Qt("div","note"),this.hud=Qt("div","layer"),this.hud.id="hud";let h=Qt("div","bars");this.bars={};for(let[u,d]of[["o2","\uC0B0\uC18C"],["st","\uCCB4\uB825"],["tp","\uCCB4\uC628"],["rs","\uAD6C\uC870"]]){let f=Qt("div","bar",`<i>${d}</i><u><s></s></u>`);h.appendChild(f),this.bars[u]={el:f,fill:f.querySelector("s")}}this.hud.appendChild(h),i||this.hud.appendChild(Qt("div","keys","<b>Space</b>\uD5E4\uC5C4<b>F</b>\uC785\uC218<b>V</b><b>\uD720</b>\uC2DC\uC810<b>Esc</b>\uBA48\uCDA4")),t.append(Object.assign(Qt("div"),{id:"bars-t"}),Object.assign(Qt("div"),{id:"bars-b"})),this.touch=Qt("div","layer"),this.touch.id="touch",t.append(this.hud,this.noteEl,this.touch,this.title,this.pause,this.dead,this.won),i&&this.buildTouch();let l=(u,d)=>u.addEventListener("click",f=>{f.stopPropagation(),d()});l(this.goBtn,()=>e.start()),l(this.resumeBtn,()=>e.resume()),l(this.againBtn,()=>e.restart()),l(this.wonBtn,()=>e.restart()),this.buildRows(),this.mode=""}buildRows(){let t=this.api,e=(i,n)=>{i.innerHTML="";let s=(a,o,c)=>{let h=Qt("div","row act",`${a}<b></b>`),l=h.querySelector("b"),u=()=>{l.textContent=o()};h.addEventListener("click",d=>{d.stopPropagation(),c(),this.refresh()}),this._upd.push(u),u(),i.appendChild(h)};if(s("\uD654\uC9C8",()=>t.get("quality"),()=>t.cycle("quality")),s("\uC2DC\uC810",()=>t.get("view"),()=>t.cycle("view")),s("\uC790\uB3D9 \uCE74\uBA54\uB77C",()=>t.get("autocam"),()=>t.cycle("autocam")),s("\uCE74\uBA54\uB77C \uD754\uB4E4\uB9BC",()=>t.get("shake"),()=>t.cycle("shake")),s("\uC18C\uB9AC \uD06C\uAE30",()=>t.get("volume"),()=>t.cycle("volume")),s("\uD6A8\uACFC\uC74C",()=>t.get("sfx"),()=>t.cycle("sfx")),n){let a=Qt("div","row","\uC2DC\uD5D8 \uC7A5\uBA74");for(let c of"ABCDEFGHR"){let h=Qt("span","t act",c);h.addEventListener("click",l=>{l.stopPropagation(),t.scenario(c)}),a.appendChild(h)}i.appendChild(a);let o=Qt("div","row act","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC");o.addEventListener("click",c=>{c.stopPropagation(),t.restart()}),i.appendChild(o)}};this._upd=[],e(this.titleRows,!1),e(this.pauseRows,!0)}refresh(){for(let t of this._upd)t()}show(t,e){this.mode=t,this.title.classList.toggle("on",t==="title"),this.pause.classList.toggle("on",t==="paused"),this.dead.classList.toggle("on",t==="dead"),this.won.classList.toggle("on",t==="won"),t==="won"&&(this.wonTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+mh(e.time)),t!=="playing"&&this.noteEl.classList.remove("on"),this.hud.classList.toggle("on",t==="playing"),this.touch.classList.toggle("on",t==="playing"&&this.isTouch),t==="paused"&&(this.pauseTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+mh(e.time)),t==="dead"&&(this.deadTitle.textContent=e.cause==="cold"?"\uCCB4\uC628\uC744 \uC783\uACE0 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4":"\uC228\uC774 \uB2E4\uD574 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4",this.deadTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+mh(e.time)),this.refresh(),t!=="playing"&&this.releaseTouch()}cine(t){this.root.classList.toggle("cine",!!t),t&&(this.noteEl.classList.remove("on"),clearTimeout(this._nt))}note(t,e=6){this.noteEl.textContent=t,this.noteEl.classList.add("on"),clearTimeout(this._nt),this._nt=setTimeout(()=>this.noteEl.classList.remove("on"),e*1e3)}setBars(t,e,i,n=0){let s=(a,o,c,h)=>{a.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,o)).toFixed(3)})`,a.el.classList.toggle("show",o<c),a.el.classList.toggle("low",o<h)};s(this.bars.o2,t,.97,.3),s(this.bars.st,e,.9,.22),s(this.bars.tp,i,.8,.35),this.bars.rs.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,n)).toFixed(3)})`,this.bars.rs.el.classList.toggle("show",n>.01)}buildTouch(){let t=this.api,e=t.input;e.touch={x:0,z:0,swim:!1,dive:!1};let i=Qt("div","zone zl"),n=Qt("div","zone zr"),s=Qt("div","stick","<b></b>"),a=s.firstChild;this.touch.append(i,n,s);let o=null,c=0,h=0,l=null,u=0,d=0,f=56;i.addEventListener("pointerdown",v=>{if(o===null){o=v.pointerId,c=v.clientX,h=v.clientY;try{i.setPointerCapture(v.pointerId)}catch{}s.style.display="block",s.style.left=c+"px",s.style.top=h+"px",a.style.transform="translate(0,0)",v.preventDefault()}}),i.addEventListener("pointermove",v=>{if(v.pointerId!==o)return;let w=v.clientX-c,A=v.clientY-h,E=Math.hypot(w,A);E>f&&(w*=f/E,A*=f/E),a.style.transform=`translate(${w}px,${A}px)`;let S=.12,z=w/f,V=-A/f;Math.hypot(z,V)<S&&(z=0,V=0),e.touch.x=z,e.touch.z=V,v.preventDefault()});let g=v=>{v.pointerId===o&&(o=null,e.touch.x=0,e.touch.z=0,s.style.display="none")};i.addEventListener("pointerup",g),i.addEventListener("pointercancel",g),n.addEventListener("pointerdown",v=>{if(l===null){l=v.pointerId,u=v.clientX,d=v.clientY;try{n.setPointerCapture(v.pointerId)}catch{}v.preventDefault()}}),n.addEventListener("pointermove",v=>{v.pointerId===l&&(e.dx+=(v.clientX-u)*2.2,e.dy+=(v.clientY-d)*2.2,u=v.clientX,d=v.clientY,e.lastLook=performance.now()/1e3,v.preventDefault())});let b=v=>{v.pointerId===l&&(l=null)};n.addEventListener("pointerup",b),n.addEventListener("pointercancel",b);let m=(v,w)=>{let A=Qt("div","btn "+v,w);return this.touch.appendChild(A),A},p=m("sw","\uD5E4\uC5C4"),y=m("dv","\uC785\uC218"),x=m("sm vw",'<svg viewBox="0 0 24 24"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.8"/></svg>\uC2DC\uC810'),M=m("sm ps",'<svg viewBox="0 0 24 24"><path d="M8.5 5v14M15.5 5v14"/></svg>\uBA48\uCDA4'),R=(v,w)=>{let A=null;v.addEventListener("pointerdown",S=>{S.preventDefault(),S.stopPropagation(),A=S.pointerId;try{v.setPointerCapture(S.pointerId)}catch{}v.classList.add("on"),e.touch[w]=!0});let E=S=>{A!==null&&S.pointerId!==A||(S.stopPropagation(),A=null,v.classList.remove("on"),e.touch[w]=!1)};v.addEventListener("pointerup",E),v.addEventListener("pointercancel",E),v.addEventListener("lostpointercapture",E)};R(p,"swim"),R(y,"dive"),x.addEventListener("pointerdown",v=>{v.preventDefault(),v.stopPropagation(),t.toggleView()}),M.addEventListener("pointerdown",v=>{v.preventDefault(),v.stopPropagation(),t.pause()}),this.releaseTouch=()=>{o=null,l=null,e.touch.x=0,e.touch.z=0,e.touch.swim=!1,e.touch.dive=!1,s.style.display="none",p.classList.remove("on"),y.classList.remove("on")}}releaseTouch(){}};var es={A:{label:"\uBCF4\uD1B5 \uD30C\uB3C4\uC5D0 \uB5A0 \uC788\uAE30",storm:.42,t0:40,view:"third",keys:{},script:[]},B:{label:"\uD070 \uB108\uC6B8 \uC811\uADFC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:15,height:16,breakOffset:9,angleOffset:0,width:240,speed:13,frontMin:27,back:70})}]},C:{label:"\uD30C\uB3C4 \uBD95\uAD34 \xB7 \uCDA9\uB3CC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:9,height:13.5,breakOffset:-1,angleOffset:0,width:170,speed:14})}]},D:{label:"\uBB3C\uC18D \uD718\uB9D0\uB9BC",storm:1,t0:12,view:"first",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:6,height:14.5,breakOffset:-1.3,angleOffset:0,width:170,speed:14})}]},E:{label:"\uC218\uBA74 \uBCF5\uADC0",storm:.85,t0:30,view:"first",keys:{up:!0,sprint:!0},setup:r=>{r.body.pos.y-=5.5,r.body.prevPos.copy(r.body.pos),r.survival.oxygen=42,r.survival.wasUnder=!0,r.survival.submergedTime=14,r.cam.pitch=.7},script:[{t:9,do:r=>{r.input.virtual={}}}]},F:{label:"\uBC88\uAC1C",storm:.9,t0:55,view:"third",keys:{},script:[{t:2,do:r=>r.lightning.strike(r.camera.position,{azimuth:Math.PI,dist:1700,sheet:0,power:1.4})},{t:9,do:r=>r.lightning.strike(r.camera.position,{azimuth:Math.PI*.8,dist:5200,sheet:1,power:1})}]},G:{label:"\uCDA9\uB3CC \uC911 \uC2DC\uC810 \uC804\uD658",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:7,height:12.5,breakOffset:-1,angleOffset:0,width:170,speed:14})},...[2,3.6,5.2,6.4,7.4,8.4,9.6,11,12.6,14.2].map(r=>({t:r,do:t=>t.cam.toggle()}))]}};es.H={label:"\uD574\uC77C \xB7 \uACF5\uC911\uC73C\uB85C \uB0A0\uC544\uAC10",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launchMega({lead:14,height:34})}]};es.R={label:"\uAD6C\uC870 \uD5EC\uAE30",storm:.8,t0:30,view:"third",keys:{},script:[{t:.5,do:r=>r.rescue.dispatch(r.body.pos,Math.PI,16)},...Array.from({length:70},(r,t)=>({t:11+t*.5,do:e=>{if(e.rescue.state==="lift"){e.input.virtual=null;return}let i=e.rescue.ring,n=e.body.pos;e.cam.yaw=Math.atan2(i.x-n.x,i.z-n.z),e.input.virtual={z:1,sprint:!0},e.input.enabled=!0}}))]};es.S={label:"\uBCF4\uD2B8\uC5D0\uC11C \uC2DC\uC791 \xB7 \uC804\uBCF5",storm:1,t0:12,view:"third",keys:{},setup:r=>r.board(),script:[{t:1,do:r=>r.launchIntroWave(9)}]};es.T={label:"\uBCF4\uD2B8\uC5D0 \uB5A0 \uC788\uAE30",storm:.7,t0:30,view:"third",keys:{},setup:r=>r.board(),script:[]};var lo=class{constructor(t){this.game=t,this.active=null,this.t=0,this.next=0,this.name=""}run(t){let e=es[t];if(!e)return!1;let i=this.game;i.waves.time=e.t0;for(let n of i.waves.breakers)n.active=!1;return i.weather.locked=!0,i.weather.base=i.weather.storm=e.storm,i.weather.time=0,i.interaction.auto=!1,i.autoLightning=!1,i.lightning.active=!1,i.lightning.pendingThunder.length=0,i.rescue.reset(1e9),i.weather.update(0),i.waves.update(0),i.resetPlayer(),i.cam.setMode(e.view),i.cam.blend=i.cam.target,i.cam.yaw=-Math.PI/2,i.cam.pitch=e.view==="first"?-.02:-.08,i.input.virtual=e.keys&&Object.keys(e.keys).length?{...e.keys}:null,i.input.virtual&&(i.input.enabled=!0),e.setup&&e.setup(i),this.active=e,this.name=t,this.t=0,this.next=0,!0}stop(){this.active=null,this.game.input.virtual=null}update(t){if(!this.active)return;this.t+=t;let e=this.active.script;for(;this.next<e.length&&this.t>=e[this.next].t;)e[this.next].do(this.game),this.next++}};function gh(r,t){if(t===td)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===wr||t===Ua){let e=r.getIndex();if(e===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let i=e.count-2,n=[];if(t===wr)for(let a=1;a<=i;a++)n.push(e.getX(0)),n.push(e.getX(a)),n.push(e.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(e.getX(a)),n.push(e.getX(a+1)),n.push(e.getX(a+2))):(n.push(e.getX(a+2)),n.push(e.getX(a+1)),n.push(e.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}var uo=class extends ln{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new wh(e)}),this.register(function(e){return new Ih(e)}),this.register(function(e){return new Fh(e)}),this.register(function(e){return new Dh(e)}),this.register(function(e){return new Sh(e)}),this.register(function(e){return new Th(e)}),this.register(function(e){return new Ah(e)}),this.register(function(e){return new Rh(e)}),this.register(function(e){return new Mh(e)}),this.register(function(e){return new Ch(e)}),this.register(function(e){return new Eh(e)}),this.register(function(e){return new Lh(e)}),this.register(function(e){return new Ph(e)}),this.register(function(e){return new yh(e)}),this.register(function(e){return new kh(e)}),this.register(function(e){return new Uh(e)})}load(t,e,i,n){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let h=An.extractUrlBase(t);a=An.resolveURL(h,this.path)}else a=An.extractUrlBase(t);this.manager.itemStart(t);let o=function(h){n?n(h):console.error(h),s.manager.itemError(t),s.manager.itemEnd(t)},c=new yr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(h){try{s.parse(h,a,function(l){e(l),s.manager.itemEnd(t)},o)}catch(l){o(l)}},i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s,a={},o={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Fd){try{a[ie.KHR_BINARY_GLTF]=new Nh(t)}catch(u){n&&n(u);return}s=JSON.parse(a[ie.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let h=new Wh(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let u=this.pluginCallbacks[l](h);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){let u=s.extensionsUsed[l],d=s.extensionsRequired||[];switch(u){case ie.KHR_MATERIALS_UNLIT:a[u]=new _h;break;case ie.KHR_DRACO_MESH_COMPRESSION:a[u]=new zh(s,this.dracoLoader);break;case ie.KHR_TEXTURE_TRANSFORM:a[u]=new Oh;break;case ie.KHR_MESH_QUANTIZATION:a[u]=new Bh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}h.setExtensions(a),h.setPlugins(o),h.parse(i,n)}parseAsync(t,e){let i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}};function Mx(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}var ie={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},yh=class{constructor(t){this.parser=t,this.name=ie.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){let s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,i="light:"+t,n=e.cache.get(i);if(n)return n;let s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],h,l=new Dt(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],Ce);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new Kn(l),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Ia(l),h.distance=u;break;case"spot":h=new Os(l),h.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),h.decay=2,Pn(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=e.createUniqueName(c.name||"light_"+t),n=Promise.resolve(h),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,i=this.parser,s=i.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(e.cache,o,c)})}},_h=class{constructor(){this.name=ie.KHR_MATERIALS_UNLIT}getMaterialType(){return qe}extendParams(t,e,i){let n=[];t.color=new Dt(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Ce),t.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,fe))}return Promise.all(n)}},Mh=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},wh=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new dt(o,o)}return Promise.all(s)}},Eh=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},Sh=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_SHEEN}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new Dt(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Ce)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",a.sheenColorTexture,fe)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},Th=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},Ah=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_VOLUME}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return e.attenuationColor=new Dt().setRGB(o[0],o[1],o[2],Ce),Promise.all(s)}},Rh=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_IOR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Ch=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_SPECULAR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return e.specularColor=new Dt().setRGB(o[0],o[1],o[2],Ce),a.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",a.specularColorTexture,fe)),Promise.all(s)}},Ph=class{constructor(t){this.parser=t,this.name=ie.EXT_MATERIALS_BUMP}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}},Lh=class{constructor(t){this.parser=t,this.name=ie.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ui}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},Ih=class{constructor(t){this.parser=t,this.name=ie.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}},Fh=class{constructor(t){this.parser=t,this.name=ie.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=n.images[a.source],c=i.textureLoader;if(o.uri){let h=i.options.manager.getHandler(o.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(t,a.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},Dh=class{constructor(t){this.parser=t,this.name=ie.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=n.images[a.source],c=i.textureLoader;if(o.uri){let h=i.options.manager.getHandler(o.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(t,a.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},kh=class{constructor(t){this.name=ie.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=n.byteOffset||0,h=n.byteLength||0,l=n.count,u=n.byteStride,d=new Uint8Array(o,c,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(l,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(l*u);return a.decodeGltfBuffer(new Uint8Array(f),l,u,d,n.mode,n.filter),f})})}else return null}},Uh=class{constructor(t){this.name=ie.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=e.meshes[i.mesh];for(let h of n.primitives)if(h.mode!==Pi.TRIANGLES&&h.mode!==Pi.TRIANGLE_STRIP&&h.mode!==Pi.TRIANGLE_FAN&&h.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],c={};for(let h in a)o.push(this.parser.getDependency("accessor",a[h]).then(l=>(c[h]=l,c[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(h=>{let l=h.pop(),u=l.isGroup?l.children:[l],d=h[0].count,f=[];for(let g of u){let b=new At,m=new _,p=new _t,y=new _(1,1,1),x=new ya(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&y.fromBufferAttribute(c.SCALE,M),x.setMatrixAt(M,b.compose(m,p,y));for(let M in c)if(M==="_COLOR_0"){let R=c[M];x.instanceColor=new je(R.array,R.itemSize,R.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);Se.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return l.isGroup?(l.clear(),l.add(...f),l):f[0]}))}},Fd="glTF",Tr=12,Cd={JSON:1313821514,BIN:5130562},Nh=class{constructor(t){this.name=ie.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Tr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Fd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Tr,s=new DataView(t,Tr),a=0;for(;a<n;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Cd.JSON){let h=new Uint8Array(t,Tr+a,o);this.content=i.decode(h)}else if(c===Cd.BIN){let h=Tr+a;this.body=t.slice(h,h+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},zh=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ie.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},h={};for(let l in a){let u=Vh[l]||l.toLowerCase();o[u]=a[l]}for(let l in t.attributes){let u=Vh[l]||l.toLowerCase();if(a[l]!==void 0){let d=i.accessors[t.attributes[l]],f=Xs[d.componentType];h[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(l){return new Promise(function(u,d){n.decodeDracoFile(l,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,h,Ce,d)})})}},Oh=class{constructor(){this.name=ie.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},Bh=class{constructor(){this.name=ie.KHR_MESH_QUANTIZATION}},fo=class extends En{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let a=0;a!==n;a++)e[a]=i[s+a];return e}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,h=o*3,l=n-e,u=(i-e)/l,d=u*u,f=d*u,g=t*h,b=g-h,m=-2*f+3*d,p=f-d,y=1-m,x=p-d+u;for(let M=0;M!==o;M++){let R=a[b+M+o],v=a[b+M+c]*l,w=a[g+M+o],A=a[g+M]*l;s[M]=y*R+x*v+m*w+p*A}return s}},wx=new _t,Hh=class extends fo{interpolate_(t,e,i,n){let s=super.interpolate_(t,e,i,n);return wx.fromArray(s).normalize().toArray(s),s}},Pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pd={9728:Ee,9729:ee,9984:oa,9985:Kc,9986:er,9987:si},Ld={33071:ni,33648:hr,10497:Je},bh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Cn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ex={CUBICSPLINE:void 0,LINEAR:Wn,STEP:Cs},vh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Xe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bi})),r.DefaultMaterial}function is(r,t,e){for(let i in e.extensions)r[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function Pn(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Tx(r,t,e){let i=!1,n=!1,s=!1;for(let h=0,l=t.length;h<l;h++){let u=t[h];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let h=0,l=t.length;h<l;h++){let u=t[h];if(i){let d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(n){let d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(h){let l=h[0],u=h[1],d=h[2];return i&&(r.morphAttributes.position=l),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Ax(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)r.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rx(r){let t,e=r.extensions&&r.extensions[ie.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+xh(e.attributes):t=r.indices+":"+xh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)t+=":"+xh(r.targets[i]);return t}function xh(r){let t="",e=Object.keys(r).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+r[e[i]]+";";return t}function Gh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Px=new At,Wh=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Mx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new La(this.options.manager):this.textureLoader=new Fa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return is(s,o,n),Pn(o,n),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){let a=e[n].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let n=0,s=t.length;n<s;n++){let a=t[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;let n=i.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[h,l]of a.children.entries())s(l,o.children[h])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){let n=t(e[i]);if(n)return n}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let i=[];for(let n=0;n<e.length;n++){let s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){let i=t+":"+e,n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){let i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,a){return i.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ie.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,a){i.load(An.resolveURL(e.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){let n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){let e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){let a=bh[n.type],o=Xs[n.componentType],c=n.normalized===!0,h=new o(n.count*a);return Promise.resolve(new Vt(h,a,c))}let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=bh[n.type],h=Xs[n.componentType],l=h.BYTES_PER_ELEMENT,u=l*c,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0,b,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,x=e.cache.get(y);x||(b=new h(o,p*f,n.count*f/l),x=new fr(b,f/l),e.cache.add(y,x)),m=new pr(x,c,d%f/l,g)}else o===null?b=new h(n.count*c):b=new h(o,d,n.count*c),m=new Vt(b,c,g);if(n.sparse!==void 0){let p=bh.SCALAR,y=Xs[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,M=n.sparse.values.byteOffset||0,R=new y(a[1],x,n.sparse.count*p),v=new h(a[2],M,n.sparse.count*c);o!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,A=R.length;w<A;w++){let E=R[w];if(m.setX(E,v[w*c]),c>=2&&m.setY(E,v[w*c+1]),c>=3&&m.setZ(E,v[w*c+2]),c>=4&&m.setW(E,v[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){let e=this.json,i=this.options,s=e.textures[t].source,a=e.images[s],o=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,i){let n=this,s=this.json,a=s.textures[t],o=s.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let h=this.loadImageSource(e,i).then(function(l){l.flipY=!1,l.name=a.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return l.magFilter=Pd[d.magFilter]||ee,l.minFilter=Pd[d.minFilter]||si,l.wrapS=Ld[d.wrapS]||Je,l.wrapT=Ld[d.wrapT]||Je,n.associations.set(l,{textures:t}),l}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(t,e){let i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let a=n.images[t],o=self.URL||self.webkitURL,c=a.uri||"",h=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(u){h=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let l=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(b){let m=new Ye(b);m.needsUpdate=!0,d(m)}),e.load(An.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return h===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||Cx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=l,l}assignTexture(t,e,i,n){let s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[ie.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[ie.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[ie.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return n!==void 0&&(a.colorSpace=n),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,i=t.material,n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new gr,xi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(t.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new mr,xi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}t.material=i}getMaterialType(){return Xe}loadMaterial(t){let e=this,i=this.json,n=this.extensions,s=i.materials[t],a,o={},c=s.extensions||{},h=[];if(c[ie.KHR_MATERIALS_UNLIT]){let u=n[ie.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),h.push(u.extendParams(o,s,e))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Dt(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ce),o.opacity=d[3]}u.baseColorTexture!==void 0&&h.push(e.assignTexture(o,"map",u.baseColorTexture,fe)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(h.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),h.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=Ie);let l=s.alphaMode||vh.OPAQUE;if(l===vh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===vh.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==qe&&(h.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new dt(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==qe&&(h.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==qe){let u=s.emissiveFactor;o.emissive=new Dt().setRGB(u[0],u[1],u[2],Ce)}return s.emissiveTexture!==void 0&&a!==qe&&h.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,fe)),Promise.all(h).then(function(){let u=new a(o);return s.name&&(u.name=s.name),Pn(u,s),e.associations.set(u,{materials:t}),s.extensions&&is(n,u,s),u})}createUniqueName(t){let e=be.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[ie.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return Id(c,o,e)})}let a=[];for(let o=0,c=t.length;o<c;o++){let h=t[o],l=Rx(h),u=n[l];if(u)a.push(u.promise);else{let d;h.extensions&&h.extensions[ie.KHR_DRACO_MESH_COMPRESSION]?d=s(h):d=Id(new he,h,e),n[l]={primitive:h,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){let e=this,i=this.json,n=this.extensions,s=i.meshes[t],a=s.primitives,o=[];for(let c=0,h=a.length;c<h;c++){let l=a[c].material===void 0?Sx(this.cache):this.getDependency("material",a[c].material);o.push(l)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){let h=c.slice(0,c.length-1),l=c[c.length-1],u=[];for(let f=0,g=l.length;f<g;f++){let b=l[f],m=a[f],p,y=h[f];if(m.mode===Pi.TRIANGLES||m.mode===Pi.TRIANGLE_STRIP||m.mode===Pi.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Xn(b,y):new gt(b,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Pi.TRIANGLE_STRIP?p.geometry=gh(p.geometry,Ua):m.mode===Pi.TRIANGLE_FAN&&(p.geometry=gh(p.geometry,wr));else if(m.mode===Pi.LINES)p=new _a(b,y);else if(m.mode===Pi.LINE_STRIP)p=new Us(b,y);else if(m.mode===Pi.LINE_LOOP)p=new Ma(b,y);else if(m.mode===Pi.POINTS)p=new wa(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ax(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),Pn(p,s),m.extensions&&is(n,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&is(n,u[0],s),u[0];let d=new ce;s.extensions&&is(n,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e,i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Ue(Rn.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new li(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),Pn(e,i),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let s=n.pop(),a=n,o=[],c=[];for(let h=0,l=a.length;h<l;h++){let u=a[h];if(u){o.push(u);let d=new At;s!==null&&d.fromArray(s.array,h*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[h])}return new ks(o,c)})}loadAnimation(t){let e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,a=[],o=[],c=[],h=[],l=[];for(let u=0,d=n.channels.length;u<d;u++){let f=n.channels[u],g=n.samplers[f.sampler],b=f.target,m=b.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,y=n.parameters!==void 0?n.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),h.push(g),l.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(h),Promise.all(l)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let y=0,x=d.length;y<x;y++){let M=d[y],R=f[y],v=g[y],w=b[y],A=m[y];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let E=i._createAnimationTracks(M,R,v,w,A);if(E)for(let S=0;S<E.length;S++)p.push(E[S])}return new Pa(s,void 0,p)})}createNodeMesh(t){let e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,h=n.weights.length;c<h;c++)o.morphTargetInfluences[c]=n.weights[c]}),a})}loadNode(t){let e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),a=[],o=n.children||[];for(let h=0,l=o.length;h<l;h++)a.push(i.getDependency("node",o[h]));let c=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),c]).then(function(h){let l=h[0],u=h[1],d=h[2];d!==null&&l.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Px)});for(let f=0,g=u.length;f<g;f++)l.add(u[f]);return l})}_loadNodeShallow(t){let e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],a=s.name?n.createUniqueName(s.name):"",o=[],c=n._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(t)});return c&&o.push(c),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(h){return n._getNodeRef(n.cameraCache,s.camera,h)})),n._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(t)}).forEach(function(h){o.push(h)}),this.nodeCache[t]=Promise.all(o).then(function(h){let l;if(s.isBone===!0?l=new Yn:h.length>1?l=new ce:h.length===1?l=h[0]:l=new Se,l!==h[0])for(let u=0,d=h.length;u<d;u++)l.add(h[u]);if(s.name&&(l.userData.name=s.name,l.name=a),Pn(l,s),s.extensions&&is(i,l,s),s.matrix!==void 0){let u=new At;u.fromArray(s.matrix),l.applyMatrix4(u)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return n.associations.has(l)||n.associations.set(l,{}),n.associations.get(l).nodes=t,l}),this.nodeCache[t]}loadScene(t){let e=this.extensions,i=this.json.scenes[t],n=this,s=new ce;i.name&&(s.name=n.createUniqueName(i.name)),Pn(s,i),i.extensions&&is(e,s,i);let a=i.nodes||[],o=[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let l=0,u=c.length;l<u;l++)s.add(c[l]);let h=l=>{let u=new Map;for(let[d,f]of n.associations)(d instanceof xi||d instanceof Ye)&&u.set(d,f);return l.traverse(d=>{let f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=h(s),s})}_createAnimationTracks(t,e,i,n,s){let a=[],o=t.name?t.name:t.uuid,c=[];Cn[s.path]===Cn.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let h;switch(Cn[s.path]){case Cn.weights:h=cn;break;case Cn.rotation:h=Gi;break;case Cn.position:case Cn.scale:h=hn;break;default:switch(i.itemSize){case 1:h=cn;break;case 2:case 3:default:h=hn;break}break}let l=n.interpolation!==void 0?Ex[n.interpolation]:Wn,u=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){let g=new h(c[d]+"."+Cn[s.path],e.array,u,l);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let i=Gh(e.constructor),n=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){let n=this instanceof Gi?Hh:fo;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Lx(r,t,e){let i=t.attributes,n=new Si;if(i.POSITION!==void 0){let o=e.json.accessors[i.POSITION],c=o.min,h=o.max;if(c!==void 0&&h!==void 0){if(n.set(new _(c[0],c[1],c[2]),new _(h[0],h[1],h[2])),o.normalized){let l=Gh(Xs[o.componentType]);n.min.multiplyScalar(l),n.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new _,c=new _;for(let h=0,l=s.length;h<l;h++){let u=s[h];if(u.POSITION!==void 0){let d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=Gh(Xs[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;let a=new vi;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function Id(r,t,e){let i=t.attributes,n=[];function s(a,o){return e.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in i){let o=Vh[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(t.indices!==void 0&&!r.index){let a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});n.push(a)}return ae.workingColorSpace!==Ce&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ae.workingColorSpace}" not supported.`),Pn(r,t),Lx(r,t,e),Promise.all(n).then(function(){return t.targets!==void 0?Tx(r,t.targets,e):r})}var Dd=function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(e)?t:r,s,a=WebAssembly.instantiate(o(n),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),x=0;x<p.length;++x){var M=p.charCodeAt(x);y[x]=M>96?M-97:M>64?M-39:M+4}for(var R=0,x=0;x<p.length;++x)y[R++]=y[x]<60?i[y[x]]:(y[x]-60)*64+y[++x];return y.buffer.slice(0,R)}function c(p,y,x,M,R,v){var w=s.exports.sbrk,A=x+3&-4,E=w(A*M),S=w(R.length),z=new Uint8Array(s.exports.memory.buffer);z.set(R,S);var V=p(E,x,M,S,R.length);if(V==0&&v&&v(E,A,M),y.set(z.subarray(E,E+x*M)),w(E-w(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var h={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},l={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(x){var M=x.data;y.pending-=M.count,y.requests[M.id][M.action](M.value),delete y.requests[M.id]},y}function g(p){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(n))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),x=new Blob([y],{type:"text/javascript"}),M=URL.createObjectURL(x),R=0;R<p;++R)u[R]=f(M);URL.revokeObjectURL(M)}function b(p,y,x,M,R){for(var v=u[0],w=1;w<u.length;++w)u[w].pending<v.pending&&(v=u[w]);return new Promise(function(A,E){var S=new Uint8Array(x),z=d++;v.pending+=p,v.requests[z]={resolve:A,reject:E},v.object.postMessage({id:z,count:p,size:y,source:S,mode:M,filter:R},[S.buffer])})}function m(p){a.then(function(){var y=p.data;try{var x=new Uint8Array(y.count*y.size);c(s.exports[y.mode],x,y.count,y.size,y.source,s.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:x},[x.buffer])}catch(M){self.postMessage({id:y.id,count:y.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,y,x,M,R){c(s.exports.meshopt_decodeVertexBuffer,p,y,x,M,s.exports[h[R]])},decodeIndexBuffer:function(p,y,x,M){c(s.exports.meshopt_decodeIndexBuffer,p,y,x,M)},decodeIndexSequence:function(p,y,x,M){c(s.exports.meshopt_decodeIndexSequence,p,y,x,M)},decodeGltfBuffer:function(p,y,x,M,R,v){c(s.exports[l[R]],p,y,x,M,s.exports[h[v]])},decodeGltfBufferAsync:function(p,y,x,M,R){return u.length>0?b(p,y,x,l[M],h[R]):a.then(function(){var v=new Uint8Array(p*y);return c(s.exports[l[M]],v,p,y,x,s.exports[h[R]]),v})}}}();var kd=[["hips","Hips",null,null],["spine","Spine","Spine1","chest"],["chest","Spine2","Neck","neck"],["neck","Neck","Head","head"],["head","Head",null,null],["upperArmL","LeftArm","LeftForeArm","foreArmL"],["foreArmL","LeftForeArm","LeftHand","handL"],["handL","LeftHand","LeftHandMiddle1",[.03,-.182,.012]],["upperArmR","RightArm","RightForeArm","foreArmR"],["foreArmR","RightForeArm","RightHand","handR"],["handR","RightHand","RightHandMiddle1",[-.03,-.182,.012]],["thighL","LeftUpLeg","LeftLeg","shinL"],["shinL","LeftLeg","LeftFoot","footL"],["footL","LeftFoot","LeftToeBase",[.006,-.063,.205]],["thighR","RightUpLeg","RightLeg","shinR"],["shinR","RightLeg","RightFoot","footR"],["footR","RightFoot","RightToeBase",[-.006,-.063,.205]]],Ix=["Index","Middle","Ring","Pinky"];function qh(r){return new Promise((t,e)=>{let i=atob(r),n=new Uint8Array(i.length);for(let a=0;a<i.length;a++)n[a]=i.charCodeAt(a);let s=new uo;s.setMeshoptDecoder(Dd),s.parse(n.buffer,"",t,e)})}var po=class{constructor(t,e,i=1.78){let n=t.group,s=n.position.clone(),a=n.quaternion.clone();n.position.set(0,0,0),n.quaternion.identity(),this.root=new ce,this.root.name="glbBody",this.root.add(e.scene),n.add(this.root);let o=null;if(e.scene.traverse(v=>{v.isSkinnedMesh&&!o&&(o=v)}),!o)throw new Error("GLB has no skinned mesh");this.mesh=o,o.frustumCulled=!1,o.layers.enable(1),o.skeleton.pose(),n.updateMatrixWorld(!0);let c=new Map;o.skeleton.bones.forEach(v=>c.set(v.name.replace(/^mixamorig:?/i,""),v)),this.by=c;for(let v of kd)if(!c.get(v[1]))throw new Error("GLB skeleton is missing "+v[1]);let h=new _,l=new _;{let v=c.get("Head").getWorldPosition(new _).sub(c.get("Hips").getWorldPosition(h)).normalize(),w=c.get("LeftUpLeg").getWorldPosition(new _).sub(c.get("RightUpLeg").getWorldPosition(l)).normalize(),A=new _().crossVectors(w,v).normalize();w.crossVectors(v,A).normalize(),this.root.quaternion.setFromRotationMatrix(new At().makeBasis(w,v,A)).invert()}n.updateMatrixWorld(!0);let u=()=>(n.updateMatrixWorld(!0),o.skeleton.update(),o.computeBoundingBox(),o.boundingBox.clone().applyMatrix4(o.matrixWorld)),d=u();this.sourceHeight=d.max.y-d.min.y,this.root.scale.setScalar(i/this.sourceHeight),n.updateMatrixWorld(!0),c.get("Hips").getWorldPosition(h),this.root.position.set(-h.x,-h.y,-h.z),n.updateMatrixWorld(!0),d=u();let f=c.get("Head").getWorldPosition(new _);this.eye=new _(0,d.max.y-.118,f.z+.082),this.mouth=new _(0,d.max.y-.185,f.z+.09),this.top=d.max.y,this.feet=d.min.y;let g=c.get("Hips");this.order=[],g.traverse(v=>{v.isBone&&this.order.push(v)}),this.order.forEach((v,w)=>{v.userData.k=w}),this.parent=this.order.map(v=>v===g?-1:v.parent.userData.k),this.restL=this.order.map(v=>v.quaternion.clone()),this.W=this.order.map(()=>new _t),this.rootParentW=g.parent.getWorldQuaternion(new _t),this.driver=this.order.map(()=>-1),this.aligned=this.order.map(()=>null);let b=v=>new _(ai[T[v]][2],ai[T[v]][3],ai[T[v]][4]),m=new _t;for(let[v,w,A,E]of kd){let S=c.get(w),z=S.userData.k,V=S.getWorldQuaternion(new _t),it=new _t;if(A&&E&&c.get(A)){let k=c.get(A).getWorldPosition(new _).sub(S.getWorldPosition(h)).normalize(),P=(Array.isArray(E)?new _(...E):b(E).sub(b(v))).normalize();it.setFromUnitVectors(k,P)}this.driver[z]=T[v],this.aligned[z]=it.multiply(V)}this.special=this.order.map(()=>null);let p=c.get("Spine1");if(p){let v=c.get("Spine2").getWorldPosition(new _).sub(p.getWorldPosition(h)).normalize(),w=new _t().setFromUnitVectors(v,new _(0,1,0)).multiply(p.getWorldQuaternion(new _t));this.special[p.userData.k]={type:"mid",aligned:w}}for(let[v,w,A]of[["LeftShoulder",1,T.upperArmL],["RightShoulder",-1,T.upperArmR]]){let E=c.get(v);E&&(this.special[E.userData.k]={type:"clav",side:w,arm:A,restW:E.getWorldQuaternion(new _t)})}this._d=new _,this._e=new hi,this._q2=new _t,this.fingers={Left:[],Right:[]},this.grip={Left:0,Right:0};for(let v of["Left","Right"]){let w=c.get(v+"Hand"),A=new _(0,-1,0);for(let E of Ix)for(let S=1;S<=3;S++){let z=c.get(`${v}Hand${E}${S}`);if(!z)continue;let V=z.children.find(I=>I.isBone),it=V?V.getWorldPosition(new _).sub(z.getWorldPosition(h)).normalize():new _(v==="Left"?1:-1,0,0),k=new _().crossVectors(it,A).normalize(),P=z.parent.getWorldQuaternion(new _t),L=z.getWorldQuaternion(new _t);m.setFromAxisAngle(k,(S===1?.32:.42)*(E==="Pinky"?1.25:E==="Index"?.8:1));let O=m.clone().multiply(L),U=P.invert();this.restL[z.userData.k]=U.clone().multiply(O),z.quaternion.copy(this.restL[z.userData.k]),m.setFromAxisAngle(k,S===1?1.05:S===2?1.35:.9),this.fingers[v].push({bone:z,open:this.restL[z.userData.k].clone(),shut:U.clone().multiply(m.clone().multiply(L))})}}this.D=ai.map(()=>new _t),this.headBone=c.get("Head"),this._q=new _t;let y=Array.isArray(o.material)?o.material:[o.material];for(let v of y)v.roughness=.44,v.metalness=0,v.envMapIntensity=1.3,v.color&&v.color.setRGB(.7,.78,.9),v.needsUpdate=!0;this.cutOn={value:0},this.headRigid=[];let x=`
  if (uCutOn > 0.5 && cutV > 0.0) {
    vec3 rel = position - uCutPos; rel -= uCutDir * dot(rel, uCutDir);
    transformed = uCutPos + rel * min(1.0, uCutR / max(length(rel), 1.0e-5)) - uCutDir * (0.4 * uCutR);
  }`,M=c.get("Head"),R=v=>{for(let w=v.parent;w;w=w.parent)if(w===M)return!0;return!1};e.scene.traverse(v=>{if(!v.isMesh)return;if(!v.isSkinnedMesh){R(v)&&this.headRigid.push(v);return}let w=v.skeleton.bones,A=st=>w.findIndex(ct=>ct.name.replace(/^mixamorig:?/i,"")===st),E=A("Neck"),S=A("Head"),z=A("Spine2");if(E<0||S<0||z<0)return;let V=new Set([E]);M.traverse(st=>{let ct=w.indexOf(st);ct>=0&&V.add(ct)});let it=v.geometry.attributes.position,k=v.geometry.attributes.skinIndex,P=v.geometry.attributes.skinWeight,L=k.count,O=new Float32Array(L),U=new Float32Array(L),I=new _,B=new _,W=new _,Q=0,H=0;for(let st=0;st<L;st++){let ct=0,ot=0,Et=0;for(let X=0;X<4;X++){let Bt=P.getComponent(st,X),St=k.getComponent(st,X);ot+=Bt,V.has(St)&&(ct+=Bt),St===E&&(Et+=Bt)}O[st]=ot>0?ct/ot:0,U[st]=ot>0?Et/ot:0,W.fromBufferAttribute(it,st),U[st]=Math.max(U[st],O[st]>.25&&O[st]<.85?.6:0),U[st]>.5?(I.add(W),Q++):O[st]>.95&&(B.add(W),H++)}if(!Q||!H)return;v.geometry.setAttribute("aHead",new Vt(O,1)),I.multiplyScalar(1/Q),B.multiplyScalar(1/H);let N=B.clone().sub(I).normalize(),q=0,et=0;for(let st=0;st<L;st++){if(U[st]<=.5)continue;W.fromBufferAttribute(it,st).sub(I);let ct=W.dot(N),ot=W.addScaledVector(N,-ct).length();ct<q&&(q=ct),ot>et&&(et=ot)}let j={uCutOn:this.cutOn,uCutPos:{value:I.clone().addScaledVector(N,q*.55)},uCutDir:{value:N},uCutR:{value:et*.8},uCutBone:{value:z}};v.frustumCulled=!1,this.cutInfo=j;for(let st of Array.isArray(v.material)?v.material:[v.material])st.onBeforeCompile=ct=>{Object.assign(ct.uniforms,j),ct.vertexShader=`attribute float aHead; uniform float uCutOn; uniform vec3 uCutPos; uniform vec3 uCutDir; uniform float uCutR; uniform float uCutBone; varying float vCut;
`+ct.vertexShader.replace("#include <skinbase_vertex>",`float cutV = aHead - 0.6;
  vCut = cutV;
  #include <skinbase_vertex>
  #ifdef USE_SKINNING
  if (uCutOn > 0.5 && cutV > 0.0) { boneMatX = getBoneMatrix(uCutBone); boneMatY = boneMatX; boneMatZ = boneMatX; boneMatW = boneMatX; }
  #endif`).replace("#include <morphtarget_vertex>","#include <morphtarget_vertex>"+x),ct.fragmentShader=`uniform float uCutOn; varying float vCut;
`+ct.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) diffuseColor.a = 1.0;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) gl_FragColor.rgb = vec3(0.010, 0.012, 0.014);`)},st.customProgramCacheKey=()=>"eos-neck-lid-"+v.uuid,st.needsUpdate=!0}),this.material=y[0],n.position.copy(s),n.quaternion.copy(a),n.updateMatrixWorld(!0)}setHeadVisible(t){this.cutOn.value=t?0:1}setGrip(t,e){for(let[i,n]of[["Left",t],["Right",e]])if(!(Math.abs(this.grip[i]-n)<.01)){this.grip[i]=n;for(let s of this.fingers[i])s.bone.quaternion.copy(s.open).slerp(s.shut,n),this.restL[s.bone.userData.k].copy(s.bone.quaternion)}}update(t){let e=this.D;for(let a=0;a<t.length;a++){let o=ai[a][1];o<0?e[a].copy(t[a].quaternion):e[a].copy(e[o]).multiply(t[a].quaternion)}let i=this.W,n=this.order,s=this._q;for(let a=0;a<n.length;a++){let o=this.parent[a]<0?this.rootParentW:i[this.parent[a]],c=this.driver[a];if(c>=0)i[a].copy(e[c]).multiply(this.aligned[a]),n[a].quaternion.copy(s.copy(o).invert().multiply(i[a]));else if(this.special[a]){let h=this.special[a];if(h.type==="mid")i[a].copy(e[T.spine]).slerp(e[T.chest],.5).multiply(h.aligned);else{let l=this._d.set(0,-1,0).applyQuaternion(t[h.arm].quaternion),u=Math.max(0,Math.min(1,(l.y+.35)/1.35)),d=Math.max(0,Math.min(1,l.z));this._q2.setFromEuler(this._e.set(0,-h.side*.3*d,h.side*.62*u*u*(3-2*u),"YXZ")),i[a].copy(e[T.chest]).multiply(this._q2).multiply(h.restW)}n[a].quaternion.copy(s.copy(o).invert().multiply(i[a]))}else i[a].copy(o).multiply(this.restL[a])}}};var Ud={scream:[["scream_eyes",1,"snap"],["scream_mouth",1,"open"]],fear:[["fear_brows",1,"snap"],["scream_mouth",.85,"open"]],agony:[["agony",1,"slow"]],sob:[["sob",1,"slow"]],terror:[["fear_brows",1,"snap"],["scream_eyes",.25,"snap"],["shout_mouth",1,"open"]],hit:[["eyes_wide",1,"snap"],["clench",1,"snap"],["fear_brows",.3,"snap"]],strain:[["clench",.85,"slow"],["strain_eyes",1,"slow"]],dying:[["exhaust",1,"slow"],["sob",.35,"slow"]],shock:[["jaw_drop",1,"open"],["eyes_wide",.8,"snap"],["fear_brows",.6,"snap"]],gasp:[["gasp",1,"snap"],["eyes_wide",.5,"snap"]],silent:[["jaw_drop",.9,"slow"],["strain_eyes",.8,"slow"]],wince:[["strain_eyes",.7,"snap"],["clench",.6,"snap"]],hold:[["clench",.4,"slow"],["eyes_wide",.55,"slow"],["fear_brows",.35,"slow"]],choke:[["eyes_wide",1,"snap"],["gasp",.55,"open"],["exhaust",.2,"slow"]],howl:[["sob",.7,"slow"],["shout_mouth",1,"open"]],pant:[["exhaust",.6,"slow"],["gasp",.45,"breath"]],blank:[["exhaust",.5,"slow"],["eyes_wide",.4,"slow"],["jaw_drop",.25,"slow"]],groan:[["strain_eyes",.9,"slow"],["agony",.5,"slow"],["clench",.5,"slow"],["fear_brows",.25,"slow"]],moan:[["agony",.75,"slow"],["sob",.4,"slow"],["exhaust",.35,"breath"],["strain_eyes",.35,"slow"]]},Fx={snap:16,open:8,slow:3.2,breath:6},mo=class{constructor(){this.mesh=null,this.dict=null,this.inf=null,this.cur={},this.tgt={},this.shape={},this.forced=null,this.forcedT=0,this.forcedGain=1,this.label="none",this.time=0,this.blinkT=2,this.blink=0}attach(t){if(!t||!t.morphTargetDictionary||!t.morphTargetInfluences)return!1;this.mesh=t,this.dict=t.morphTargetDictionary,this.inf=t.morphTargetInfluences;for(let e of Object.keys(this.dict))this.cur[e]=0,this.tgt[e]=0,this.shape[e]="slow";return!0}play(t,e,i=1){Ud[t]&&(this.forced=t,this.forcedT=e,this.forcedGain=i)}update(t,e){if(!this.mesh)return;this.time+=t;let i=this.tgt,n=this.shape;for(let u in i)i[u]=0;let s=0;this.label="none";let a=(u,d)=>{if(!(d<=.01)){d>s&&(s=d,this.label=u);for(let[f,g,b]of Ud[u]){if(i[f]===void 0)continue;let m=g*Math.min(1,d)*(b==="breath"?.5+.5*Math.sin(e.breathPhase*6.283):1);m>i[f]&&(i[f]=m,n[f]=b)}}};if(this.forcedT-=t,this.forced&&this.forcedT>0?a(this.forced,this.forcedGain):this.forced=null,!e.alive||e.blackout>.75)a("blank",1);else if(e.mouthUnder){let u=e.oxygen;e.impact>1&&a("hit",Math.min(1,e.impact/1.8)),u<14?(a("silent",1),a("agony",.7)):u<34?(a("choke",1),a("agony",.5*(34-u)/20)):u<62?(a("strain",.5+.5*(62-u)/28),a("hold",.6)):a("hold",1),e.blackout>.15&&a("dying",e.blackout*1.2)}else e.impact>1&&a("hit",Math.min(1,e.impact/1.8)),e.air>.3&&a("shock",e.air),e.brace>.3&&(a(e.crestDist<12?"terror":"fear",e.brace),e.brace>.85&&e.crestDist<5&&a("hold",.8)),e.gaspTimer>0&&(e.inhaling?a("gasp",.45+.55*Math.min(1,e.gaspTimer/2.5)):a("pant",1),e.swallow>.25&&a("wince",.7)),a("choke",mt((40-e.oxygen)/30)),e.stamina<24&&a("dying",1-e.stamina/24),e.effort>.7&&a("strain",Math.min(1,(e.effort-.7)*1.5)),e.temp<35.2&&a("groan",mt((35.2-e.temp)/2)*.7),s<.35&&a("pant",.25+.5*e.exertion);this.blinkT-=t,this.blinkT<=0&&(this.blink=.16,this.blinkT=1.8+Math.random()*3.5),this.blink=Math.max(0,this.blink-t),this.blink>0&&!e.mouthUnder&&i.strain_eyes!==void 0&&(i.strain_eyes=Math.max(i.strain_eyes,.9));let o=this.inf,c=this.dict,h=this.cur,l=0;for(let u in h){let f=i[u]>h[u]?Fx[n[u]]||4:3.4;h[u]+=(i[u]-h[u])*(1-Math.exp(-t*f));let g=1+.12*Math.sin(this.time*(2.3+l*.37)+l*1.9)*(h[u]>.05?1:0);o[c[u]]=Math.max(0,Math.min(1.15,h[u]*g)),l++}}};var Dx={gasp:[["b_gasp3",0,3,.72],["b_gasp4",0,3,.7],["b_gasp2",0,3,.8],["b_gasp1",0,3,.9]],inhale:[["b_gasp3",0,.85,.62],["b_gasp4",0,.62,.6]],cough:[["b_choke",.25,1.7,1],["b_choke",1.95,3,1.1],["b_choke",3.9,5,1.2],["b_choke",7.15,8.95,1.1],["b_choke",9.4,10.8,.9]],sputter:[["b_choke",5.45,6.1,1.1],["b_choke",14.25,14.7,.9],["b_choke",15.4,16.5,1],["b_choke",19.45,20.05,.6]],retch:[["b_choke",11.65,14.15,1.2],["b_choke",17.65,18.8,.8]],groan:[["b_under",0,1.25,1.2],["b_under",2.05,3.45,1.2]],bubbles:[["b_under",4.1,8.15,.9]]},kx={gasp:1.2,inhale:3,cough:1.2,sputter:1.4,retch:4,groan:3,bubbles:1.5},Ux={gasp:"gasp",inhale:"gasp",cough:"wince",sputter:"wince",retch:"choke",groan:"silent",bubbles:"choke"},Nx={cough:1,sputter:1,retch:1},go=class{constructor(t,e,i={}){this.audio=t,this.face=e,this.hooks=i,this.t=0,this.cool={},this.cur={prio:0,until:0},this.jobs=[],this.marks={},this.prevBrace=0,this.prevAir=0,this.prevDive=!1,this.splashCool=0,this.slapCool=0,this.gurgleUntil=0,this.gT=0,this.bubT=2,this.bed=0,this.last="",this.lastPick={},this.count=0}say(t,e,i,n){let s=this.t;if(s<(this.cool[t]||0)||s<this.cur.until&&e<=this.cur.prio)return 0;let a=Dx[t],o=Math.random()*a.length|0;a.length>1&&o===this.lastPick[t]&&(o=(o+1)%a.length),this.lastPick[t]=o;let[c,h,l,u]=a[o],d=!!(n&&n.under),f=this.audio.playVoice(c,i*u*(d?1.3:1),.97+Math.random()*.06,[h,l]);this.last=t,this.count++;let g=f||l-h;return this.cur={prio:e,until:s+g*.85},this.cool[t]=s+g+kx[t],this.face&&this.face.play(d?t==="groan"?"silent":"choke":Ux[t],g+.25),Nx[t]&&this.hooks.cough&&this.hooks.cough(g),d&&(this.audio.gurgle(.95),this.hooks.bubbles&&this.hooks.bubbles(Math.min(44,Math.round(12+g*14))),this.gurgleUntil=s+g,this.gT=.3),g}later(t,e){this.jobs.push({at:this.t+t,fn:e})}onEvent(t,e,i){if(!(!i||!i.alive))if(t==="surface")if(e.time>1.2||e.need>.2){let n=this.say("gasp",6,1,i);e.time>7||i.swallow>.45?this.later(Math.max(1.1,n*.6),s=>{s.under||this.say("retch",6,1,s)}):(e.time>3.2||i.swallow>.2)&&this.later(Math.max(1,n*.55),s=>{s.under||this.say("cough",5,.95,s)})}else e.time>.25&&(i.swallow>.1||Math.random()<.5)&&this.say("sputter",3,.8,i);else t==="impact"?e.strength>1.15&&!i.under&&this.say("sputter",4,1,i):t==="exhale"&&e.cough?i.under||this.say("cough",4,.85,i):t==="splash"?this.t>this.splashCool&&e.v>1.8&&!i.camUnder&&(this.splashCool=this.t+.45,this.audio.playClip(e.v>4?Math.random()<.5?"w_splash2":"w_splash1":"w_splash3",Math.min(.9,.15+e.v*.09),.9+Math.random()*.25,Math.random()*1.2-.6)):t==="limb"&&this.t>this.slapCool&&e.v>1.3&&!i.camUnder&&(this.slapCool=this.t+.07,this.audio.playClip("w_slap"+(1+(Math.random()*6|0)),Math.min(.75,.06+e.v*.085)*(e.kind==="arm"?.6:1),.85+Math.random()*.4,e.pan||0))}update(t,e){this.t+=t;for(let h=this.jobs.length-1;h>=0;h--)this.t>=this.jobs[h].at&&this.jobs.splice(h,1)[0].fn(e);let i=e.alive&&!e.under,n=h=>Math.max(0,Math.min(1,h)),s=n(.3+.55*(e.exertion||0)+(e.gaspTimer>0?.35:0)+.3*(e.struggle||0)+.25*n(e.brace||0)+.2*(e.air||0)),a=n((30-e.stamina)/25),o=this.t<this.cur.until?.28:1,c=i?(1-(e.blackout||0))*o:0;if(this.bed=c*(.2+.8*s)*(1-.7*a),this.audio.setBreath(this.bed*.95,c*(.12+.88*a)*.9,.92+.42*s,i),!!e.alive)if(e.under&&this.t<this.gurgleUntil&&(this.gT-=t,this.gT<=0&&(this.audio.gurgle(.6),this.gT=.32+Math.random()*.3,this.hooks.bubbles&&this.hooks.bubbles(7))),e.brace>.7&&this.prevBrace<=.7&&e.crestHeight>6&&!e.under&&this.say("inhale",5,1,e),this.prevBrace=e.brace,e.dive&&!this.prevDive&&!e.under&&this.say("inhale",5,.9,e),this.prevDive=e.dive,e.air>.5&&this.prevAir<=.5&&!e.under&&this.say("inhale",5,1,e),this.prevAir=e.air,e.under){let h=e.oxygen;h<48&&!this.marks.a&&(this.marks.a=!0,this.say("groan",5,.8,e)),h<30&&!this.marks.b&&(this.marks.b=!0,this.say("groan",6,1,e)),h<14&&!this.marks.c&&(this.marks.c=!0,this.say("groan",7,1,e)),h<72&&(this.bubT-=t*(1+n((50-h)/40)),this.bubT<=0&&(this.bubT=2.6+Math.random()*2.4,this.say("bubbles",2,.55+.4*n((60-h)/50),e)))}else e.oxygen>60&&(this.marks.a=this.marks.b=this.marks.c=!1)}};var zx=`
varying vec3 vP;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vP = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Ox=`
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
}`,Ln=13,bo=class{constructor(t){this.waves=t,this.group=new ce,this.group.visible=!1,this.state="none",this.arriveAt=240,this.hoverTime=0,this.hold=0,this.rescued=!1,this.pos=new _,this.vel=new _,this.ring=new _,this.ringVel=new _,this.tan=.125,this.time=0,this.aim=new _,this._s=fi(),this._v=new _,this._d=new _,this._down=new _(0,-1,0),this._from=new _;let e=this.heli=new ce,i=new Xe({color:13620438,roughness:.45,metalness:.2}),n=new Xe({color:13127708,roughness:.5,metalness:.1}),s=new Xe({color:1316892,roughness:.5,metalness:.4}),a=new Xe({color:395532,roughness:.08,metalness:.8});{let P=document.createElement("canvas");P.width=P.height=512;let L=P.getContext("2d");L.fillStyle="#e9ecee",L.fillRect(0,0,512,512);let O=7,U=()=>(O=O*16807%2147483647,O/2147483647);for(let B=0;B<2600;B++){let W=205+U()*45;L.fillStyle=`rgba(${W},${W},${W+3},0.25)`,L.fillRect(U()*512,U()*512,2+U()*5,2+U()*5)}for(let B=0;B<46;B++){let W=U()*512,Q=3+U()*14,H=L.createLinearGradient(0,0,0,512);H.addColorStop(0,"rgba(60,62,66,0)"),H.addColorStop(.3+U()*.3,`rgba(60,62,66,${.05+U()*.12})`),H.addColorStop(1,"rgba(60,62,66,0)"),L.fillStyle=H,L.fillRect(W,0,Q,512)}L.strokeStyle="rgba(40,44,50,0.62)",L.lineWidth=1.6;for(let B of[64,150,256,330,420,500])L.beginPath(),L.moveTo(0,B),L.lineTo(512,B),L.stroke();for(let B of[0,86,128,214,256,342,384,470])L.beginPath(),L.moveTo(B,0),L.lineTo(B,512),L.stroke();L.fillStyle="rgba(50,54,60,0.55)";for(let B of[58,70,144,156,250,262,324,336,414,426])for(let W=4;W<512;W+=9)L.fillRect(W,B,1.6,1.6);for(let B of[80,92,208,220,336,348,464,476])for(let W=4;W<512;W+=9)L.fillRect(B,W,1.6,1.6);let I=new jn(P);I.colorSpace=fe,I.wrapS=I.wrapT=Je,I.repeat.set(4,3),I.anisotropy=4,i.map=I,i.color.set(14672869)}let o=(P,L,O,U,I=512)=>{let B=document.createElement("canvas");B.width=I,B.height=Math.round(I*O/L);let W=B.getContext("2d");W.textAlign="center",W.textBaseline="middle",W.fillStyle=U;let Q=B.height/P.length;P.forEach(([N,q],et)=>{W.font=`900 ${Math.round(Q*q)}px "Arial Black", "Malgun Gothic", "Noto Sans KR", Arial, sans-serif`,W.fillText(N,I/2,Q*(et+.5),I*.96)});let H=new jn(B);return H.colorSpace=fe,H.anisotropy=4,new gt(new yi(L,O),new Xe({map:H,transparent:!0,alphaTest:.35,roughness:.6,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}))},c=[[.02,3.35],[.55,3.2],[.95,2.8],[1.22,2.1],[1.32,1.2],[1.32,0],[1.25,-1],[1,-1.9],[.62,-2.6],[.4,-3.6],[.3,-5.4],[.22,-7.3],[.12,-8.2],[.02,-8.35]],h=new gt(new Ns(c.map(([P,L])=>new dt(P,L)),28),i);h.rotation.x=Math.PI/2,h.scale.set(1,1,1.12),e.add(h);let l=new gt(new Pe(1.345,1.3,.9,28,1,!0),n);l.rotation.x=Math.PI/2,l.scale.set(1,1,1.12),l.position.z=-.75,e.add(l);let u=new gt(new Pe(.33,.3,.7,14,1,!0),n);u.rotation.x=Math.PI/2,u.position.set(0,0,-5.6),e.add(u);let d=[[1.335,.9],[1.335,1.25],[1.235,2.1],[.965,2.8],[.565,3.2],[.03,3.36]].map(([P,L])=>new dt(P*1.012,L)),f=new gt(new Ns(d,20,Math.PI/2+.38,Math.PI-.76),a);f.rotation.x=Math.PI/2,f.scale.set(1,1,1.12),e.add(f);for(let P of[-1,1]){let L=new gt(new Fe(.05,.62,1.05),a);L.position.set(P*1.335,.42,-1.25),e.add(L);let O=new gt(new Fe(.06,1.5,.09),i);O.position.set(P*1.31,.2,.92),e.add(O)}let g=new gt(new Fe(1.5,.12,3.6),s);g.position.set(0,-1.44,.2),e.add(g);let b=new gt(new Mn(1,18,12),i);b.scale.set(.85,.55,1.9),b.position.set(0,1.35,-.5),e.add(b);for(let P of[-1,1]){let L=new gt(new Pe(.16,.2,.9,10),s);L.rotation.x=Math.PI/2,L.position.set(P*.55,1.35,-1.9),e.add(L)}let m=new gt(new Fe(.1,2,1),i);m.position.set(0,.95,-7.9),m.rotation.x=-.42,e.add(m);let p=new gt(new Fe(.11,.5,.75),n);p.position.set(0,1.78,-8.28),p.rotation.x=-.42,e.add(p);let y=new gt(new Fe(2.6,.07,.6),i);y.position.set(0,.1,-6.9),e.add(y);let x=new gt(new Pe(.13,.2,.75,10),s);x.position.set(0,2.05,-.2),e.add(x);let M=new gt(new Pe(.34,.34,.16,12),s);M.position.set(0,2.42,-.2),e.add(M);for(let P of[-1,1]){let L=new gt(new Pe(.06,.06,4.6,8),s);L.rotation.x=Math.PI/2,L.position.set(P*1.35,-1.75,.3),e.add(L);let O=new gt(new Pe(.06,.06,.6,8),s);O.rotation.x=Math.PI/2-.6,O.position.set(P*1.35,-1.6,2.8),e.add(O);for(let U of[-1,1]){let I=new gt(new Pe(.05,.05,1.05,6),s);I.position.set(P*1.12,-1.28,.3+U*1.15),I.rotation.z=-P*.45,e.add(I)}}let R=new gt(new Fe(.06,1.35,1.5),new qe({color:new Dt(.06,.04,.018)}));R.position.set(1.325,.05,.1),e.add(R);let v=new gt(new Mn(.2,10,8),new qe({color:329223}));v.position.set(1.36,.35,.45),v.scale.set(.5,1,1),e.add(v);let w=new gt(new Fe(.1,.55,.42),new qe({color:329223}));w.position.set(1.36,-.08,.45),e.add(w);let A=new gt(new Pe(.06,.06,1.3,8),s);A.rotation.z=Math.PI/2-.25,A.position.set(1.75,1,.1),e.add(A);let E=new gt(new Pe(.16,.16,.34,10),s);E.rotation.x=Math.PI/2,E.position.set(2.32,.86,.1),e.add(E);{let P=o([["RESCUE",.92]],1.45,.38,"#b8431a");P.position.set(-1.345,-.3,.52),P.rotation.y=-Math.PI/2,e.add(P);let L=o([["\uAD6C\uC870",.9]],.62,.36,"#b8431a");L.position.set(-1.33,-.75,.52),L.rotation.y=-Math.PI/2,e.add(L);for(let I of[-1,1]){let B=o([["119",.95]],.62,.36,"#f1f3f4");B.position.set(I*1.37,-.28,I>0?-1:-.75),B.rotation.y=I*Math.PI/2,e.add(B)}let O=o([["119",.95],["RESCUE",.62]],1.35,2.3,"#d4572a");O.position.set(0,-1.512,.25),O.rotation.x=Math.PI/2,e.add(O),O.material.emissiveMap=O.material.map,O.material.emissive.set(16777215),O.material.emissiveIntensity=.55;let U=o([["119",.9]],.5,.3,"#b8431a");U.position.set(.062,.85,-7.86),U.rotation.set(-.42,Math.PI/2,0,"YXZ"),e.add(U)}{let P=new gt(new Pe(.26,.2,.34,14),s);P.rotation.x=-.5,P.position.set(0,-1.16,2.1),e.add(P);let L=new gt(new wn(.235,.035,8,18),s);L.rotation.x=Math.PI/2-.5,L.position.set(0,-1.29,2.2),e.add(L);let O=new gt(new Fe(.62,.07,.07),s);O.position.set(0,-1.05,2.05),e.add(O);for(let H of[-1,1]){for(let j of[1.25,-.75]){let st=new gt(new zs(.17,1.15,4,10),new Xe({color:2303787,roughness:.8}));st.rotation.x=Math.PI/2,st.position.set(H*1.35,-1.62,j),e.add(st)}let N=new gt(new Pe(.012,.012,.75,4),s);N.position.set(H*.3,1.55,2.25),N.rotation.x=.5,e.add(N);let q=new gt(new Pe(.014,.014,.5,5),s);q.rotation.x=Math.PI/2,q.position.set(H*.42,-.62,3.2),e.add(q);let et=new gt(new Fe(.05,.55,.5),i);et.position.set(H*1.3,.1,-6.9),e.add(et)}let U=new gt(new Fe(.34,.05,1.3),s);U.position.set(1.5,-.95,.1),e.add(U);for(let H of[.3,.62]){let N=new gt(new zs(.075,.42,3,8),new Xe({color:11553308,roughness:.7}));N.position.set(1.47,-.72,H),N.rotation.z=.12,e.add(N);let q=new gt(new Fe(.12,.1,.24),s);q.position.set(1.5,-1,H+.04),e.add(q)}for(let[H,N,q,et]of[[0,.52,-4.4,.7],[0,.46,-5.9,.5],[0,-1.62,-1.4,.4],[.5,1.88,.9,.45]]){let j=new gt(new Pe(.012,.02,et,5),s);j.position.set(H,N+(N>0?et/2:-et/2),q),j.rotation.x=N>0?-.35:.35,e.add(j)}let I=new gt(new Pe(.03,.03,.9,6),s);I.position.set(0,-.42,-7.6),I.rotation.x=.9,e.add(I);let B=new gt(new Fe(.16,.22,.2),n);B.position.set(2.32,.62,.1),e.add(B);let W=new gt(new Pe(.035,.035,.9,6),s);W.rotation.z=Math.PI/2+.75,W.position.set(1.72,.62,.1),e.add(W),this.bladeRoots=new ce,this.bladeRoots.position.set(0,2.47,-.2);for(let H=0;H<4;H++){let N=new gt(new Fe(2.3,.035,.26),s);N.position.set(Math.cos(H*Math.PI/2)*1.25,0,Math.sin(H*Math.PI/2)*1.25),N.rotation.y=-H*Math.PI/2,this.bladeRoots.add(N)}e.add(this.bladeRoots);let Q=new gt(new Mn(.2,10,6),s);Q.scale.y=.5,Q.position.set(0,2.55,-.2),e.add(Q)}let S=(P,L,O)=>{let U=document.createElement("canvas");U.width=U.height=256;let I=U.getContext("2d");I.translate(128,128);let B=I.createRadialGradient(0,0,8,0,0,126);B.addColorStop(0,`rgba(30,35,40,${L*.5})`),B.addColorStop(.8,`rgba(30,35,40,${L})`),B.addColorStop(.97,`rgba(52,58,66,${L*1.5})`),B.addColorStop(1,"rgba(30,35,40,0)"),I.fillStyle=B,I.beginPath(),I.arc(0,0,126,0,6.283),I.fill();for(let Q=0;Q<P;Q++){I.save(),I.rotate(Q*6.283/P);let H=I.createLinearGradient(0,-16,0,16);H.addColorStop(0,"rgba(20,24,28,0)"),H.addColorStop(.5,`rgba(20,24,28,${O})`),H.addColorStop(1,"rgba(20,24,28,0)"),I.fillStyle=H,I.beginPath(),I.moveTo(6,0),I.lineTo(124,-15),I.lineTo(124,15),I.closePath(),I.fill(),I.restore()}let W=new jn(U);return W.colorSpace=ci,W};this.rotor=new gt(new xr(6.3,48),new qe({map:S(4,.22,.5),transparent:!0,side:Ie,depthWrite:!1})),this.rotor.rotation.x=-Math.PI/2,this.rotor.position.set(0,2.5,-.2),e.add(this.rotor),this.tail=new gt(new xr(1.05,24),new qe({map:S(2,.2,.4),transparent:!0,side:Ie,depthWrite:!1})),this.tail.position.set(.22,1.25,-8.15),this.tail.rotation.y=Math.PI/2,e.add(this.tail);let z=(P,L,O,U,I,B,W=.13)=>{let Q=new gt(new Mn(W,8,6),new qe({color:new Dt(P,L,O)}));return Q.position.set(U,I,B),e.add(Q),Q};z(2.6,.12,.1,1.35,.1,.6),z(.1,2.4,.4,-1.35,.1,.6),this.strobe=z(5,5,5.6,0,1.75,-7.6,.16),this.beacon=z(6,.25,.2,0,-.55,-3.4,.14),this.lampHead=z(5,5.8,7,0,-1.25,2.2,.22),this.group.add(e),this.spotLight=new Os(13952255,0,0,.16,.7,0),this.spotLight.layers.enableAll(),this.group.add(this.spotLight,this.spotLight.target),this.beamMat=new re({uniforms:{uNoise:rt.uNoise,uTime:rt.uTime,uI:{value:0},uApex:{value:new _},uAxis:{value:new _(0,-1,0)},uLen:{value:1},uTan:{value:this.tan},uWaterY:{value:0}},vertexShader:zx,fragmentShader:Ox,transparent:!0,blending:Ss,depthWrite:!1,side:bi});let V=new Pe(.02,1,1,32,1,!1);V.translate(0,-.5,0),this.beam=new gt(V,this.beamMat),this.beam.frustumCulled=!1,this.beam.renderOrder=18,this.group.add(this.beam);let it=new Xe({color:9279131,roughness:.55,metalness:.4,emissive:1843236});this.ringMesh=new ce;let k=new gt(new wn(.43,.105,14,36),n);this.ringMesh.add(k);for(let P=0;P<4;P++){let L=new gt(new wn(.43,.109,12,5,.34),i);L.rotation.z=P*Math.PI/2+.6,this.ringMesh.add(L)}for(let P=0;P<3;P++){let L=P*2.094,O=new gt(new Pe(.008,.008,1,4),it),U=new _(Math.cos(L)*.43,Math.sin(L)*.43,-.08),I=new _(0,0,-.5);O.position.copy(U).add(I).multiplyScalar(.5),O.scale.y=U.distanceTo(I),O.quaternion.setFromUnitVectors(new _(0,1,0),I.clone().sub(U).normalize()),this.ringMesh.add(O)}{let P=new gt(new zs(.035,.09,3,8),new Xe({color:12165690,roughness:.45,metalness:.5}));P.rotation.x=Math.PI/2,P.position.set(0,0,-.56),this.ringMesh.add(P);let L=new gt(new wn(.035,.009,6,12),it);L.position.set(0,0,-.49),L.rotation.y=Math.PI/2,this.ringMesh.add(L);let O=new gt(new wn(.43,.118,6,40),new Xe({color:1777185,roughness:.9}));O.scale.set(1,1,.16),O.position.z=-.085,this.ringMesh.add(O)}this.strobeR=new gt(new Mn(.035,8,6),new qe({color:new Dt(6,6,6.5)})),this.strobeR.position.set(.43,0,-.13),this.ringMesh.add(this.strobeR),this.ringMesh.traverse(P=>{P.isMesh&&P.layers.enable(1)}),this.group.add(this.ringMesh),this.rope=[],this.ropeGroup=new ce,this.group.add(this.ropeGroup);for(let P=0;P<Ln;P++)this.rope.push({p:new _,q:new _});{let P=(Ln-1)*5+1,L=7,O=L+1;this.ropeRings=P,this.ropeRad=L;let U=new Float32Array(P*O*3),I=new Float32Array(P*O*3),B=new Float32Array(P*O*2),W=[];for(let et=0;et<P;et++)for(let j=0;j<O;j++)B[(et*O+j)*2]=j/L,B[(et*O+j)*2+1]=et*.55;for(let et=0;et<P-1;et++)for(let j=0;j<L;j++){let st=et*O+j,ct=st+1,ot=st+O,Et=ot+1;W.push(st,ot,ct,ct,ot,Et)}let Q=new he;Q.setAttribute("position",new Vt(U,3).setUsage(qi)),Q.setAttribute("normal",new Vt(I,3).setUsage(qi)),Q.setAttribute("uv",new Vt(B,2)),Q.setIndex(W);let H=document.createElement("canvas");H.width=32,H.height=32;let N=H.getContext("2d");N.fillStyle="#b9b29a",N.fillRect(0,0,32,32),N.strokeStyle="#5f5a4c",N.lineWidth=3;for(let et=-32;et<64;et+=11)N.beginPath(),N.moveTo(et,0),N.lineTo(et+32,32),N.stroke();let q=new jn(H);q.wrapS=q.wrapT=Je,q.colorSpace=fe,this.ropeMesh=new gt(Q,new Xe({map:q,roughness:.85,metalness:0,emissive:1381391})),this.ropeMesh.frustumCulled=!1,this.ropeGroup.add(this.ropeMesh),this.ropeCurve=new vr(this.rope.map(()=>new _),!1,"centripetal"),this._rp=new _,this._rt=new _,this._rn=new _(1,0,0),this._rb=new _,this._rq=new _}this.ropeLen=20,this._top=new _,this.station=new _,this.holdNeed=2.6,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.liftBase=0,this.ringSpin=0,this._qr=new _t,this._er=new hi,this.lineDir=new _(0,1,0)}reset(t=240){this.state="none",this.group.visible=!1,this.rescued=!1,this.hold=0,this.arriveAt=t,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,rt.uSpotP.value.y=0,rt.uWash.value.w=0}_dropRope(){let t=this._top.copy(this.pos);t.y-=1.2,this.ropeLen=Math.max(8,t.y-this.waves.heightFast(t.x,t.z))+2.5;for(let e=0;e<Ln;e++){let i=this.rope[e];i.p.set(t.x,t.y-this.ropeLen*.92*e/(Ln-1),t.z),i.q.copy(i.p)}this.ring.copy(this.rope[Ln-1].p)}_rope(t,e,i,n){let s=this.waves,a=this._s,o=this.rope,c=Ln,h=this._top.copy(this.pos);if(h.y-=1.2,n)this.liftT>1&&(this.ropeLen=Math.max(4.2,this.ropeLen-1.7*t));else{let d=Math.max(6,h.y-s.heightFast(o[c-1].p.x,o[c-1].p.z))+2.2;this.ropeLen+=(d-this.ropeLen)*Math.min(1,t*1.5)}let l=this.ropeLen/(c-1),u=Math.min(t,1/30)*.5;for(let d=0;d<2;d++){o[0].p.copy(h),o[0].q.copy(h);for(let f=1;f<c;f++){let g=o[f],b=f===c-1,m=g.p.x-g.q.x,p=g.p.y-g.q.y,y=g.p.z-g.q.z;g.q.copy(g.p);let x=e.x*.06,M=-9.81,R=e.z*.06,v=.994,w=g.p.x-this.pos.x,A=g.p.z-this.pos.z,E=Math.hypot(w,A)+.001,S=Math.max(0,1-E/16)*(b?5:2);if(x+=w/E*S,R+=A/E*S,b&&!n){s.sample(g.p.x,g.p.z,a);let z=a.h+.06-g.p.y;if(z>0){M+=Math.min(70,z*95);let V=Math.min(1,u*6);m+=(a.vx*u-m)*V,p+=(a.vy*u-p)*V,y+=(a.vz*u-y)*V,v=.975}this.gripping&&(x+=(i.x-g.p.x)*7,R+=(i.z-g.p.z)*7)}g.p.x+=m*v+x*u*u,g.p.y+=p*v+M*u*u,g.p.z+=y*v+R*u*u}for(let f=0;f<8;f++)for(let g=0;g<c-1;g++){let b=o[g].p,m=o[g+1].p,p=m.x-b.x,y=m.y-b.y,x=m.z-b.z,M=Math.hypot(p,y,x);if(M<=l)continue;let R=(M-l)/M,v=g===0?0:g+1===c-1?n?.88:.62:.5,w=1-v;b.x+=p*R*v,b.y+=y*R*v,b.z+=x*R*v,m.x-=p*R*w,m.y-=y*R*w,m.z-=x*R*w}}this.ring.copy(o[c-1].p),this._d.copy(o[c-4].p).sub(o[c-1].p),this._d.lengthSq()>1e-4&&this._d.y>0&&(this._d.normalize(),this.lineDir.lerp(this._d,Math.min(1,t*3)).normalize())}dispatch(t,e=Math.random()*6.283,i=60){this.state="inbound",this.rescued=!1,this.hold=0,this.hoverTime=0,this.group.visible=!0,this.gripping=!1,this.reach=!1,this.slipped=!1,this.liftT=0,this.ring.set(t.x+Math.cos(e)*i,0,t.z+Math.sin(e)*i),this.pos.set(this.ring.x+Math.cos(e)*520,70,this.ring.z+Math.sin(e)*520),this.vel.set(0,0,0)}update(t,e,i,n,s,a,o,c,h){if(this.time+=t,this.state==="none")if(o&&s&&n>=this.arriveAt)this.dispatch(e,Math.atan2(i.z,i.x)+(Math.random()-.5)*2.4,55+Math.random()*30);else{rt.uSpotP.value.y=0,rt.uWash.value.w=0;return}let l=this.waves,u=this._s,d=this.state==="lift";if(this.state==="inbound")this.station.set(this.ring.x,0,this.ring.z);else if(this.state==="hover"){let U=e.x-this.station.x,I=e.z-this.station.z,B=Math.hypot(U,I);if(B>1.5){let W=Math.min(2.2,B*.5)*t/B;this.station.x+=U*W,this.station.z+=I*W}}let f=l.heightFast(this.station.x,this.station.z)+20+Math.sin(this.time*.7)*.8,g=this._v.set(this.station.x+Math.sin(this.time*.43)*2.6+Math.sin(this.time*1.1)*.9,f,this.station.z+Math.cos(this.time*.37)*2.6);this.state==="leaving"&&g.set(this.pos.x+i.x*40,this.pos.y+30,this.pos.z+i.z*40),d&&(this.liftT+=t,this.liftT>6.5?g.set(this.pos.x-i.x*3,this.liftBase+26+(this.liftT-6.5)*5,this.pos.z-i.z*3):g.set(this.pos.x,this.liftBase+20+Math.max(0,this.liftT-3)*1.5,this.pos.z));let b=g.sub(this.pos),m=b.length(),p=this.state==="inbound"?46:this.state==="leaving"?40:d?this.liftT>6.5?14:3:6,y=b.multiplyScalar(Math.min(p,m*.9)/Math.max(m,.001));if(this.vel.lerp(y,1-Math.exp(-t*(d?.7:1.4))),this.pos.addScaledVector(this.vel,t),this.state==="inbound"&&m<6&&(this.state="hover",this.hoverTime=0,this._dropRope()),this.state==="hover"||d?this._rope(t,i,e,d):(l.sample(this.ring.x,this.ring.z,u),this.ring.y=u.h),this.reach=!1,this.state==="hover"){this.hoverTime+=t;let U=Math.hypot(e.x-this.ring.x,e.y+.35-this.ring.y,e.z-this.ring.z);this.reach=U<1.5&&s,this.gripping&&(U>2.2||!h||!s)&&(this.gripping=!1,this.hold>.5&&(this.slipped=!0)),this.reach&&h&&(this.gripping=!0),this.hold=this.gripping?this.hold+t:Math.max(0,this.hold-t*2.5),this.hold>=this.holdNeed&&(this.rescued=!0,this.state="lift",this.liftT=0,this.liftBase=this.ring.y);let I=this.reach||this.gripping;if(this.hoverTime>150&&!I&&!this.rescued&&(this.state="leaving",this.leaveT=0),a)for(this.washAcc=(this.washAcc||0)+t*150;this.washAcc>=1;){this.washAcc-=1;let B=Math.random()*6.283,W=4+Math.random()*13,Q=7+Math.random()*6,H=this.pos.x+Math.cos(B)*W,N=this.pos.z+Math.sin(B)*W,q=l.heightFast(H,N),et=Math.random()<.28;a.emit(H,q+.08+Math.random()*.2,N,Math.cos(B)*Q,.5+Math.random()*1.4,Math.sin(B)*Q,et?.7+Math.random()*.7:.5+Math.random()*.5,et?.16+Math.random()*.22:.012+Math.random()*.03,et?2:0,et?.7:0,et?.16:.9,et?1.4:1)}}if(this.state==="leaving"&&(this.leaveT+=t,this.leaveT>14)){this.state="none",this.group.visible=!1,this.arriveAt=n+180,rt.uSpotP.value.y=0,rt.uWash.value.w=0;return}let x=this.heli;x.position.copy(this.pos);let M=Math.atan2(this.ring.x-this.pos.x+this.vel.x*3,this.ring.z-this.pos.z+this.vel.z*3),R=Math.hypot(this.vel.x,this.vel.z);x.rotation.set(Math.min(.3,R*.008),this.state==="hover"?x.rotation.y+Math.sin(this.time*.25)*.004:M,Math.sin(this.time*1.3)*.03,"YXZ"),this.rotor.rotation.z+=t*(2.6+1.4*Math.sin(this.time*2.3)),this.tail.rotation.z+=t*5.2,this.bladeRoots&&(this.bladeRoots.rotation.y-=t*39),this.rotor.material.opacity=.85+.15*Math.sin(this.time*31),this.strobe.visible=this.time%1.1<.07,this.beacon.visible=(this.time+.5)%1.3<.16;let v=this.state==="hover"?Math.min(1,this.hoverTime/3):this.state==="lift"?1:0;this.aim.set(this.ring.x+(1-v)*Math.sin(this.time*.8)*26,this.ring.y,this.ring.z+(1-v)*Math.cos(this.time*.6)*26);let w=this.state==="leaving"?Math.max(0,1-this.leaveT/3):1,A=this._from.copy(this.pos);A.y-=1.3;let E=A.distanceTo(this.aim),S=this._d.copy(this.aim).sub(A).normalize(),z=E,V=this.aim.y;if(S.y<-.04)for(let U=0;U<4;U++)V=this.waves.heightFast(A.x+S.x*z,A.z+S.z*z),z=Math.max(2,(V-A.y)/S.y);else z=320;let it=Math.min(z*1.15+4,340),k=this.tan*1.3*it;this.beamMat.uniforms.uWaterY.value=V-.6,this.beam.position.copy(A),this.beam.quaternion.setFromUnitVectors(this._down,S),this.beam.scale.set(k,it,k);let P=this.beamMat.uniforms;if(P.uApex.value.copy(A),P.uAxis.value.copy(S),P.uLen.value=it,P.uI.value=.17*w,c){let U=this._v.copy(c).sub(A),I=U.dot(S),B=Math.sqrt(Math.max(0,U.lengthSq()-I*I)),Q=I>-.5&&I<it+.5&&B<I*this.tan*1.3+.6?Ge:bi;this.beamMat.side!==Q&&(this.beamMat.side=Q,this.beamMat.needsUpdate=!0)}this.spotLight.position.copy(A),this.spotLight.target.position.copy(this.aim),this.spotLight.angle=Math.atan(this.tan)*1.35,this.spotLight.penumbra=.85,this.spotLight.intensity=5*w,rt.uSpotPos.value.copy(A),rt.uSpotDir.value.copy(S),rt.uSpotP.value.set(Math.cos(Math.atan(this.tan)),1.7*w,55,0);let L=this.pos.y-l.heightFast(this.pos.x,this.pos.z);rt.uWash.value.set(this.pos.x,this.pos.z,24,w*Math.max(0,Math.min(1,(60-L)/30)));let O=this.state==="hover"||this.state==="lift";if(this.ringMesh.visible=O,this.ropeGroup.visible=O,O){this.ringMesh.position.copy(this.ring),this.state==="lift"?(this.ringSpin+=t*.35,this.ringMesh.quaternion.setFromUnitVectors(this._down.clone().negate(),this.lineDir).multiply(this._qr.setFromEuler(this._er.set(Math.PI/2,0,this.ringSpin,"YXZ")))):(l.sample(this.ring.x,this.ring.z,u),this.ringMesh.rotation.set(Math.PI/2+u.nz*.6,0,-u.nx*.6)),this.strobeR.visible=this.time%.9<.08;let U=this.rope,I=this.ropeCurve.points;for(let Et=0;Et<Ln;Et++)I[Et].copy(U[Et].p);I[Ln-1].y+=.45;let B=this.ropeRings,W=this.ropeRad,Q=W+1,H=.02,N=this.ropeMesh.geometry.attributes.position,q=this.ropeMesh.geometry.attributes.normal,et=this._rp,j=this._rt,st=this._rn,ct=this._rb,ot=this._rq;for(let Et=0;Et<B;Et++){let X=Et/(B-1);this.ropeCurve.getPoint(X,et),this.ropeCurve.getPoint(Math.min(1,X+.004),ot),j.copy(ot),this.ropeCurve.getPoint(Math.max(0,X-.004),ot),j.sub(ot).normalize(),st.addScaledVector(j,-st.dot(j)),st.lengthSq()<1e-6&&st.set(1,0,0).addScaledVector(j,-j.x),st.normalize(),ct.crossVectors(j,st);for(let Bt=0;Bt<Q;Bt++){let St=Bt/W*6.2832,Rt=Math.cos(St),yt=Math.sin(St),Nt=(Et*Q+Bt)*3,Pt=st.x*Rt+ct.x*yt,D=st.y*Rt+ct.y*yt,C=st.z*Rt+ct.z*yt;N.array[Nt]=et.x+Pt*H,N.array[Nt+1]=et.y+D*H,N.array[Nt+2]=et.z+C*H,q.array[Nt]=Pt,q.array[Nt+1]=D,q.array[Nt+2]=C}}N.needsUpdate=!0,q.needsUpdate=!0}}};var Bx=[[T.handL,0,-.09,.012,"hand"],[T.handR,0,-.09,.012,"hand"],[T.foreArmL,0,-.13,0,"arm"],[T.foreArmR,0,-.13,0,"arm"],[T.footL,0,-.04,.12,"foot"],[T.footR,0,-.04,.12,"foot"]],vo=class{constructor(t,e,i){this.waves=t,this.ch=e,this.body=i,this.tips=Bx.map(([n,s,a,o,c])=>({bone:n,off:new _(s,a,o),kind:c,p:new _,prev:new _,has:!1,was:!0,wet:0,cool:0})),this._s=fi(),this._v=new _,this._hd=new _,this.activity=0,this.onSlap=null,this.bowAcc=0,this.churnAcc=0}reset(){for(let t of this.tips)t.has=!1,t.wet=0;this.activity=0}update(t,e,i,n=!0){if(t<=0)return;let s=this.waves,a=this._s,o=this._v,c=0;e.near=!0;for(let l of this.tips){if(l.p.copy(l.off).applyMatrix4(this.ch.bones[l.bone].matrixWorld),!l.has){l.prev.copy(l.p),l.has=!0,s.sample(l.p.x,l.p.z,a),l.was=l.p.y<a.h;continue}if(o.copy(l.p).sub(l.prev).multiplyScalar(1/t),l.prev.copy(l.p),l.cool-=t,!n||o.lengthSq()>900){l.wet=0;continue}s.sample(l.p.x,l.p.z,a);let u=l.p.y<a.h,d=o.x-a.vx,f=o.y-a.vy,g=o.z-a.vz,b=Math.hypot(d,f,g),m=Math.hypot(d,g)+1e-4,p=l.kind==="hand"?1:l.kind==="foot"?.6:.45;if(u!==l.was){if(u&&b>(l.kind==="foot"?3.8:2.6)&&l.cool<=0&&l.kind!=="arm"){let y=Math.min(1.5,(.1+b*.2)*p)*(.45+.55*Math.random());Math.random()<.65&&e.slap(l.p.x,a.h,l.p.z,y,d/m*Math.min(1,m/2.5),g/m*Math.min(1,m/2.5),a.vx+d*.55,a.vy,a.vz+g*.55,l.kind==="hand"?1:0),l.cool=.5,c+=y,this.onSlap&&this.onSlap(b,l.p,l.kind)}else if(!u&&b>3&&l.kind==="hand"){let y=Math.min(1.2,(.05+b*.16)*p);e.fling(l.p.x,Math.max(l.p.y,a.h+.02),l.p.z,o.x,o.y,o.z,y),l.wet=.5,c+=y*.6}}if(!u&&l.wet>0){l.wet-=t;let y=b>2.5&&Math.random()<t*35*l.wet?1:0;for(let x=0;x<y;x++)e.emit(l.p.x+(Math.random()-.5)*.06,l.p.y+(Math.random()-.5)*.06,l.p.z+(Math.random()-.5)*.06,o.x*(.35+.5*Math.random()),o.y*.6+.5*Math.random(),o.z*(.35+.5*Math.random()),.35+Math.random()*.5,.01+Math.random()*.022,0,0,1)}if(l.kind==="foot"&&Math.abs(l.p.y-a.h)<.1&&b>2.4){for(this.churnAcc+=t*Math.min(26,b*5);this.churnAcc>=1;){this.churnAcc-=1;let y=Math.random()*6.283,x=Math.random()*.9;e.emit(l.p.x+Math.cos(y)*.05,a.h+.02,l.p.z+Math.sin(y)*.05,a.vx+Math.cos(y)*x+d*.25,a.vy+.9+2.1*Math.random()*Math.min(1.4,b/3),a.vz+Math.sin(y)*x+g*.25,.3+Math.random()*.4,.009+Math.pow(Math.random(),2)*.022,0,0,1)}c+=.25*t*10}l.was=u}let h=this.body;if(n&&h.subFrac>.2&&h.subFrac<.98&&h.relSpeed>1.5&&h.mouthDepth<.4){let l=Math.min(6,h.relSpeed),u=Math.hypot(h.relFlow.x,h.relFlow.z)+1e-4,d=-h.relFlow.x/u,f=-h.relFlow.z/u,g=this._hd.setFromMatrixPosition(this.ch.bones[T.head].matrixWorld);for(this.bowAcc+=t*Math.min(40,(l-1.3)*16);this.bowAcc>=1;){this.bowAcc-=1;let b=Math.random()<.5?-1:1,m=Math.random(),p,y,x,M,R;if(m<.5){let w=(Math.random()-.5)*.5,A=.12+Math.random()*.45;p=g.x+d*A-f*w,y=g.z+f*A+d*w,x=l*.7+.4+Math.random()*1.4,M=(Math.random()-.5)*1.2,R=.6+Math.random()*1.6}else{let w=(.22+Math.random()*.2)*b,A=-.5+Math.random()*.9;p=h.pos.x+d*A-f*w,y=h.pos.z+f*A+d*w,x=l*.3,M=b*(.4+Math.random()*1),R=.5+Math.random()*1.3}let v=!1;e.emit(p,h.surfaceH+.03,y,h.surface.vx+d*x-f*M,h.surface.vy+R*Math.min(1.4,.6+l*.3),h.surface.vz+f*x+d*M,v?.25+Math.random()*.3:.4+Math.random()*.55,v?.04+Math.random()*.05:Math.random()<.3?.028+Math.random()*.03:.011+Math.pow(Math.random(),2)*.026,v?1:0,v?.4:0,v?.32:1)}c+=.12+.1*l}e.near=!1,this.activity+=(Math.min(1,c)-this.activity)*(1-Math.exp(-t*(c>this.activity?12:2.5)))}};var Nd=1025,Hx=1.22,Xh=9.81,zd=.35,Oe={tubeY:.37,tubeR:.21,halfW:.72,floorY:.325,bowZ:1.95,sternZ:-1.9,transomZ:-1.28,bowStart:1};function In(r){if(r<=Oe.bowStart)return Oe.halfW;let t=Math.min(1,(r-Oe.bowStart)/(Oe.bowZ-Oe.bowStart));return Oe.halfW*Math.sqrt(Math.max(0,1-t*t))}function Ar(r){return Oe.tubeY+.2*De(.9,2,r)}function Li(r,t,e,i,n,s,a,o,c){return{o:new _(r,t,e),r:new _,vol:i/1e3,half:n,cx:s,cy:a,cz:o,air:c,sub:0,was:0,h:0,hOk:!1}}var xo=class{constructor(t){this.waves=t,this.group=new ce,this.group.name="boat",this.group.visible=!1,this.holder=new ce,this.group.add(this.holder),this.active=!1,this.loaded=!1,this.com=new _(0,.3,-.28),this.baseMass=168,this.mass=this.baseMass,this.inertia=new _(250,300,78),this.pos=new _,this.vel=new _,this.quat=new _t,this.angVel=new _,this.prevPos=new _,this.prevQuat=new _t,this.wind=new _,this.rider=0,this.swamp=0,this.upY=1,this.sitUp=1,this.capsized=!1,this.flipArmed=!1,this.flipping=0,this.settle=0,this.flipAxis=new _,this.flipDir=new _,this.keepYaw=null,this.slam=0,this.slamPos=new _,this.aer=0,this.brkH=0,this.subFrac=0,this.extF=new _,this.extT=new _,this.tow=new _;let e=Oe.halfW,i=Oe.tubeY;this.points=[Li(e,i,-1.65,105,.21,.13,.3,.075,.05),Li(-e,i,-1.65,105,.21,.13,.3,.075,.05),Li(e,i,-.7,118,.21,.13,.34,.06,.055),Li(-e,i,-.7,118,.21,.13,.34,.06,.055),Li(e,i,.3,118,.21,.13,.34,.06,.055),Li(-e,i,.3,118,.21,.13,.34,.06,.055),Li(.69,i+.03,1.2,105,.21,.12,.3,.075,.055),Li(-.69,i+.03,1.2,105,.21,.12,.3,.075,.055),Li(0,.52,1.8,95,.22,.1,.26,.11,.07),Li(0,.2,-.7,85,.13,.1,.55,.07,0),Li(0,.21,.62,85,.13,.1,.55,.07,0),Li(0,.12,-1.5,9,.16,.1,.03,.05,.03)];for(let n of this.points)n.o.sub(this.com);this.totalVol=this.points.reduce((n,s)=>n+s.vol,0),this._s=fi(),this._w={vx:0,vy:0,vz:0,ax:0,ay:0,az:0},this._p=new _,this._vp=new _,this._f=new _,this._F=new _,this._T=new _,this._X=new _,this._Y=new _,this._Z=new _,this._t=new _,this._t2=new _,this._qi=new _t,this._dq=new _t,this._m=new At,this.inv=new At,this.matrix=new At}setModel(t){let e=null;if(t.scene.traverse(n=>{n.isMesh&&!e&&(e=n)}),!e)throw new Error("boat model has no mesh");this.mesh=e;let i=e.material;i.envMapIntensity=.6,i.roughness=.95,i.color.setRGB(1.12,1.18,1.28),i.aoMapIntensity=.8,i.normalScale.set(1,1),i.needsUpdate=!0,this.material=i,t.scene.traverse(n=>{n.layers.enable(1),n.frustumCulled=!1}),t.scene.position.copy(this.com).multiplyScalar(-1),this.holder.add(t.scene),this.loaded=!0}reset(t,e,i){let n=this.waves.sample(t,e,this._s);this.quat.setFromAxisAngle(this._t.set(0,1,0),i),this.pos.set(t,n.h+.14+this.com.y-.13,e),this.vel.set(n.vx,n.vy,n.vz),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat),this.swamp=0,this.flipping=0,this.settle=0,this.capsized=!1,this.upY=1,this.sitUp=1,this.slam=0,this.extF.set(0,0,0),this.extT.set(0,0,0),this.tow.set(0,0,0),this.hcOk=!1,this.depth=0;for(let s of this.points)s.was=0,s.hOk=!1;this.active=!0,this.group.visible=this.loaded,this._updateMatrices(this.pos,this.quat)}hide(){this.active=!1,this.group.visible=!1}_updateMatrices(t,e){this._t.copy(this.com).multiplyScalar(-1).applyQuaternion(e).add(t),this.matrix.compose(this._t,e,this._t2.set(1,1,1)),this.inv.copy(this.matrix).invert()}pushAt(t,e,i,n){this.extF.x+=e,this.extF.y+=i,this.extF.z+=n;let s=this._t.copy(t).sub(this.pos);this.extT.x+=s.y*n-s.z*i,this.extT.y+=s.z*e-s.x*n,this.extT.z+=s.x*i-s.y*e}velocityAt(t,e){return e.copy(t).sub(this.pos).cross(this.angVel).multiplyScalar(-1).add(this.vel)}step(t){if(!this.active)return;let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._X.set(1,0,0).applyQuaternion(this.quat),n=this._Y.set(0,1,0).applyQuaternion(this.quat),s=this._Z.set(0,0,1).applyQuaternion(this.quat);this.upY=n.y;let a=this._F.set(0,0,0),o=this._T.set(0,0,0);this.mass=this.baseMass+this.rider+260*this.swamp;let c=0,h=0,l=0,u=0,d=0,f=0,g=0,b=0,m=this.dbg||(this.dbg={});m.buoy=0,m.dragY=0,m.bay=0,m.bvy=0,m.plunge=0,m.wvy=0,m.h=0,m.ay=0;let p=1-.32*this.swamp;for(let k=0;k<this.points.length;k++){let P=this.points[k],L=P.r.copy(P.o).applyQuaternion(this.quat),O=this._p.copy(this.pos).add(L),U=this._vp.copy(this.angVel).cross(L).add(this.vel),I=e.sample(O.x,O.z,this._s),B=I.h-O.y,W=Math.max(0,Math.min(1,(B+P.half)/(2*P.half))),Q=P.hOk?Math.max(-9,Math.min(4.6,(I.h-P.h)/t)):I.vy;if(P.h=I.h,P.hOk=!0,W>.5!=P.was>.5){let N=Math.abs(U.y-I.vy);N>d&&(d=N,this.slamPos.set(O.x,I.h,O.z))}P.was=W,P.sub=W;let H=this._f.set(0,0,0);if(f+=I.nx,g+=I.ny,b+=I.nz,I.brkH>l&&(l=I.brkH),I.lip>u&&(u=I.lip),W>0){let N=Math.max(0,B),q=I.aer*Math.exp(-N/3.5);q>h&&(h=q);let et=Nd*(1-.6*q),j=e.bodyFlow(I.x0,I.z0,N,this._w),ct=.25+.75*Math.exp(-N/(2.5+.35*Math.max(0,I.brkH)));j.vx+=I.bvx*ct,j.vy+=I.bvy,j.vz+=I.bvz*ct,I.plunge>.01&&(j.vy-=.25*I.plunge*Math.exp(-N/3)),e.breakerFlow(O.x,O.y,O.z,I.h,j),W>.55&&Q>j.vy&&(j.vy+=(Q-j.vy)*mt((W-.55)/.3)*Math.exp(-N/1.5));let ot=et*P.vol*W*p;H.set(ot*(1+zd)*j.ax,ot*Math.max(.3*Xh,Xh+j.ay+I.bay),ot*(1+zd)*j.az),m.buoy+=H.y,m.bay=Math.max(m.bay,Math.abs(I.bay))*Math.sign(I.bay||1),m.bvy=I.bvy,m.plunge=Math.max(m.plunge,I.plunge),m.wvy=j.vy,m.h=I.h,m.ay=j.ay;let Et=j.vx-U.x,X=j.vy-U.y,Bt=j.vz-U.z,St=Et*i.x+X*i.y+Bt*i.z,Rt=Et*n.x+X*n.y+Bt*n.z,yt=Et*s.x+X*s.y+Bt*s.z,Nt=.5*et*W,Pt=(Nt*P.cx*Math.abs(St)+60*P.cx*W)*St,D=(Nt*P.cy*Math.abs(Rt)+150*P.cy*W)*Rt,C=(Nt*P.cz*Math.abs(yt)+60*P.cz*W)*yt;H.x+=i.x*Pt+n.x*D+s.x*C,H.y+=i.y*Pt+n.y*D+s.y*C,H.z+=i.z*Pt+n.z*D+s.z*C,m.dragY+=i.y*Pt+n.y*D+s.y*C,c+=P.vol*W}if(W<1&&P.air>0){let N=this.wind.x-U.x,q=-U.y,et=this.wind.z-U.z,j=.5*Hx*P.air*(1-W)*(1-.55*this.swamp)*Math.hypot(N,q,et);H.x+=N*j,H.y+=q*j,H.z+=et*j}a.add(H),o.x+=L.y*H.z-L.z*H.y,o.y+=L.z*H.x-L.x*H.z,o.z+=L.x*H.y-L.y*H.x}this.subFrac=c/this.totalVol,this.aer=h,this.brkH=l,this.slam=d;{let k=Math.hypot(f,g,b)||1;this.sitUp=(n.x*f+n.y*g+n.z*b)/k}let y=Math.max(mt((h-.35)*2)*mt(l/4),mt((.35-Math.abs(n.y))*3),mt((this.subFrac-.86)*6));y>0?this.swamp+=(1-this.swamp)*(1-Math.exp(-t*1.6*y)):this.swamp>.5&&(this.swamp+=(.5-this.swamp)*(1-Math.exp(-t*.04)));let x=1+.9*Math.min(1,this.subFrac*2.5)+(this.rider+260*this.swamp)/this.baseMass*.5;if(this.flipArmed&&this.flipping<=0&&n.y>.3)for(let k of e.breakers){if(!k.active||k.height<4.5)continue;let P=this.pos.x-k.ox,L=this.pos.z-k.oz,O=P*k.dx+L*k.dz-k.s,U=-P*k.dz+L*k.dx,I=Math.exp(-(U*U)/(k.width*k.width));if(O<8&&O>-8&&k.height*I>4.5){this.flipAxis.set(k.dz,0,-k.dx),this.flipDir.set(k.dx,0,k.dz),this.flipping=2.6,this.flipArmed=!1;break}}if(this.flipping>0){this.flipping-=t;let k=this.angVel.dot(this.flipAxis);n.y>-.8?o.addScaledVector(this.flipAxis,(3-k)*2100*x):(this.flipping=0,this.settle=1.4),a.addScaledVector(this.flipDir,this.mass*5*mt((this.flipping-2)/.6))}if(this.settle>0&&(this.settle-=t,o.addScaledVector(this.angVel,-1500*x)),this.flipArmed&&this.rider>0&&this.flipping<=0){let k=Math.hypot(f,g,b)||1,P=(n.y*b-n.z*g)/k,L=(n.z*f-n.x*b)/k,O=(n.x*g-n.y*f)/k,U=this.angVel.dot(n);o.x+=P*5200*x-(this.angVel.x-n.x*U)*1500*x,o.y+=L*5200*x-(this.angVel.y-n.y*U)*1500*x,o.z+=O*5200*x-(this.angVel.z-n.z*U)*1500*x}if(this.keepYaw!==null&&n.y>.5){let k=Math.atan2(s.x,s.z),P=this.keepYaw-k;P=Math.atan2(Math.sin(P),Math.cos(P)),o.y+=Math.max(-260,Math.min(260,P*420-this.angVel.y*300))}this.capsized=n.y<0,a.add(this.extF),o.add(this.extT),this.extF.set(0,0,0),this.extT.set(0,0,0),a.add(this.tow);let M=this.mass+.08*Nd*c;a.y-=this.mass*Xh,this.vel.addScaledVector(a,t/M);let R=this.vel.length();R>40&&this.vel.multiplyScalar(40/R),this.pos.addScaledVector(this.vel,t);{let k=e.sample(this.pos.x,this.pos.z,this._s),P=this.hcOk?Math.max(-30,Math.min(30,(k.h-this.hc)/t)):k.vy;this.hc=k.h,this.hcOk=!0;let L=this.pos.y-k.h;this.depth=-L,L<-.42?(this.pos.y=k.h-.42,this.vel.y<P&&(this.vel.y=P)):L>.45&&this.vel.y>P&&(this.vel.y+=(P-this.vel.y)*Math.min(1,t*7),L>1.5&&(this.pos.y=k.h+1.5,this.vel.y>P&&(this.vel.y=P)))}let v=this._qi.copy(this.quat).invert(),w=this._t.copy(this.angVel).applyQuaternion(v),A=this._t2.copy(o).applyQuaternion(v),E=this.inertia.x*x,S=this.inertia.y*x,z=this.inertia.z*x;w.x+=(A.x-(z-S)*w.y*w.z)/E*t,w.y+=(A.y-(E-z)*w.z*w.x)/S*t,w.z+=(A.z-(S-E)*w.x*w.y)/z*t,w.multiplyScalar(Math.exp(-(.35+2.2*Math.min(1,this.subFrac*2.5))*t));let V=w.length();V>9&&w.multiplyScalar(9/V),this.angVel.copy(w).applyQuaternion(this.quat);let it=this.angVel.length()*t;it>1e-7&&(this._dq.setFromAxisAngle(this._t.copy(this.angVel).normalize(),it),this.quat.premultiply(this._dq).normalize()),this._updateMatrices(this.pos,this.quat)}sync(t){this.active&&(this.group.position.lerpVectors(this.prevPos,this.pos,t),this.group.quaternion.slerpQuaternions(this.prevQuat,this.quat,t),this.group.updateMatrixWorld(!0))}toWorld(t,e){return e.copy(t).applyMatrix4(this.matrix)}dirToWorld(t,e){return e.copy(t).applyQuaternion(this.quat)}nearestGrip(t,e){let i=this._t.copy(t).applyMatrix4(this.inv),n=0,s=1,a=1e9;for(let d=0;d<=24;d++){let f=-1.75+(Oe.bowZ-.15+1.75)*d/24,g=In(f),b=Ar(f);for(let m of[1,-1]){let p=Math.hypot(i.x-m*g,i.y-b,i.z-f);p<a&&(a=p,n=f,s=m)}}let o=In(n),c=In(n+.05);e.dist=a,e.z=n,e.side=s,e.local=(e.local||new _).set(s*o,Ar(n),n),e.point=this.toWorld(e.local,e.point||new _);let h=s*(c-o),l=.05,u=Math.hypot(h,l);return e.tangent=this.dirToWorld(this._t2.set(h/u,0,l/u),e.tangent||new _),e.normal=this.dirToWorld(this._t2.set(s*l/u,0,-s*h/u),e.normal||new _),e}};var Rr=r=>{window.__load&&window.__load(r)},Yh=r=>new Promise((t,e)=>{let i=document.createElement("script");i.src=r,i.onload=t,i.onerror=()=>e(new Error("load failed: "+r)),document.head.appendChild(i)}),oi=new URLSearchParams(location.search),Yi=1/120,Mi={get(r,t){try{let e=localStorage.getItem("eos."+r);return e===null?t:e}catch{return t}},set(r,t){try{localStorage.setItem("eos."+r,String(t))}catch{}}},jh=[.5,1,1.5],Kh=[0,.4,.85,1],Qh=class{constructor(){if(this.canvas=document.getElementById("view"),this.manual=oi.get("manual")==="1",this.renderer=new dr({canvas:this.canvas,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),!this.renderer.capabilities.isWebGL2)throw new Error("WebGL2 is required");this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=Ce,this.renderer.toneMapping=Vi,this.renderer.autoClear=!0,this.perf=new Ya(this.renderer);let t=oi.get("q")||Mi.get("quality",this.perf.pickDefault());this.perf.setProfile(Vs[t]?t:this.perf.pickDefault()),this.manual&&(this.perf.adaptive=!1),rt.hdrType=this.perf.info.halfFloat?on:We,this.isTouch=oi.get("touch")==="1"||oi.get("touch")!=="0"&&navigator.maxTouchPoints>0&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,rt.uNoise.value=pd(),rt.uDetailN.value=md(),rt.uFoamTex.value=gd(),this.time=0,this.acc=0,this.state="title",this.deadTimer=0,this.scene=new Ti,this.camera=new Ue(62,16/9,.07,3e4),this.camera.layers.enableAll(),this.waves=new Oa,this.sky=new Ha(this.renderer,this.perf.profile.envSize),this.ocean=new Va(this.waves,this.perf.profile),this.post=new qa(this.renderer),this.post.levels=this.perf.profile.bloomLevels,this.scene.add(this.sky.dome,this.ocean.mesh),this.flashLight=new Kn(13163775,0),this.keyLight=new Kn(10465476,.42),this.flashLight.layers.enableAll(),this.keyLight.layers.enableAll(),this.scene.add(this.flashLight,this.flashLight.target,this.keyLight,this.keyLight.target),this.pmrem=new Ds(this.renderer),this.envTimer=0,this.envRT=null,this.input=new io(this.canvas),this.character=new Ka,this.scene.add(this.character.group),this.body=new Za(this.waves),this.survival=new Ja,this.player=new $a(this.body,this.survival,this.input),this.anim=new to(this.character,this.body,this.player,this.survival),this.cam=new eo(this.camera,this.character,this.body,this.player,this.waves,this.input),this.cam.yaw=-Math.PI/2;let e=oi.get("view")||Mi.get("view","third");this.cam.setMode(e),this.cam.blend=this.cam.target,this.cam.intensity=+Mi.get("shake",1)||1,this.cam.auto=Mi.get("autocam","1")!=="0",oi.has("yaw")&&(this.cam.yaw=+oi.get("yaw")),oi.has("pitch")&&(this.cam.pitch=+oi.get("pitch")),this.limbs=new vo(this.waves,this.character,this.body),this.limbs.onSlap=(n,s,a)=>{this.foam&&this.foam.enabled&&n>1.6&&this.foam.addSplash(s.x,s.z,Math.min(.55,.12+n*.07));let o=this.camera.matrixWorld.elements,c=s.x-this.camera.position.x,h=s.z-this.camera.position.z;a!=="foot"&&n>1.6&&this.cam.blend<.5&&!this.underwater.isUnder&&this.lens.spawn(a==="hand"?3:1),this.emit("limb",{v:n,pos:s,kind:a,pan:Math.max(-.8,Math.min(.8,(c*o[0]+h*o[2])/(Math.hypot(c,h)+.5)))})},this.mouthUnder=!1,this.camUnder=0,this.mouthWorld=new _,this.impactBlur=0,this.listeners=[],this.weather=new no(this.waves),this.weather.base=this.weather.storm=oi.has("storm")?+oi.get("storm"):1,this.manual&&(this.weather.locked=!0),this.lightning=new ro,this.scene.add(this.lightning.group),this.autoLightning=!(this.manual||oi.get("auto")==="0"),this.buildEffects(),this.interaction.auto=this.autoLightning,this.audio=new co,this.audio.volume=+Mi.get("volume",.85),this.audio.sfxOn=Mi.get("sfx","1")!=="0",this.listeners.push((n,s)=>this.audio.onEvent(n,s)),this.face=new mo,this.onCharacter=n=>this.face.attach(n.mesh),this.vst={alive:!0},this.coughSeq=0,this.coughT=0,this.voiceDir=new go(this.audio,this.face,{bubbles:n=>this.underwater.burstAt(this.mouthWorld,n,.22),cough:n=>{this.coughSeq=n,this.coughT=0}}),this.listeners.push((n,s)=>this.voiceDir.onEvent(n,s,this.vst)),Yh("dist/voice.js").then(()=>{this.audio.setVoices(window.__EOS_VOICE)}).catch(()=>console.warn("[voice] \uBAA9\uC18C\uB9AC \uB179\uC74C\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4")),this.listeners.push((n,s)=>{if(n==="inhale"&&(this.anim.gaspKick=Math.max(this.anim.gaspKick,s.gasp?1:.4*s.strength)),n==="exhale"&&!this.mouthUnder&&this.spray&&this.state!=="title"){let a=this.player.heading,o=this.weather.wind,c=this.mouthWorld,h=3+Math.round(4*s.strength);for(let l=0;l<h;l++)this.spray.emit(c.x+a.x*.05,c.y+.01,c.z+a.z*.05,a.x*(.5+Math.random()*.7)+o.x*.04,.15+Math.random()*.3,a.z*(.5+Math.random()*.7)+o.z*.04,.5+Math.random()*.5,.05+Math.random()*.06,1,.45,.11+.08*s.strength,.6)}}),this.lightning.onThunder=n=>this.audio.onEvent("thunder",n),this.audioState={cam:{pos:this.camera.position,fwd:new _,up:new _},hot:[]},this.rescue=new bo(this.waves),this.scene.add(this.rescue.group),this.boat=new xo(this.waves),this.scene.add(this.boat.group),this.aboard=!1,this.bacc=0,this.washT=0,this.boatOff=oi.get("boat")==="0",this.seatPos=new _(.2,Oe.floorY+.15,-.3);{let a=new _(Math.sin(.26),0,Math.cos(.26)),o=new _(Math.cos(.26)*Math.sin(.45),-Math.cos(.45),-Math.sin(.26)*Math.sin(.45));this.seatQuat=new _t().setFromRotationMatrix(new At().makeBasis(new _().crossVectors(a,o),a,o))}this.rid={p:new _,v:new _,pv:new _,d:new _,has:!1,slam:0},this.wonTimer=0,this.scenarios=new lo(this),this.pendingScenario=oi.get("test"),this.weather.update(0),this.waves.update(0),this.body.reset(0,0),this.syncCharacter(1),this.anim.update(1/60),this.character.group.updateMatrixWorld(!0),this.drawScene=(n,s)=>{let a=this.renderer;a.setRenderTarget(n),s?(this.camera.layers.set(1),a.setClearColor(0,0),a.clear(),a.render(this.scene,this.camera),this.camera.layers.enableAll()):a.render(this.scene,this.camera)};let i={input:this.input,start:()=>this.start(),resume:()=>this.resume(),restart:()=>this.restart(),pause:()=>this.pause(),toggleView:()=>{this.cam.toggle(),Mi.set("view",this.cam.mode),this.impactBlur=Math.max(this.impactBlur,.3)},scenario:n=>{this.scenarios.run(n),this.resume()},get:n=>n==="quality"?this.perf.profile.label:n==="view"?this.cam.mode==="first"?"1\uC778\uCE6D":"3\uC778\uCE6D":n==="shake"?Math.round(this.cam.intensity*100)+"%":n==="autocam"?this.cam.auto?"\uCF2C":"\uB054":n==="sfx"?this.audio.sfxOn?"\uCF2C":"\uB054":Math.round(this.audio.volume*100)+"%",cycle:n=>{if(n==="quality"){let s=Object.keys(Vs);this.setQuality(s[(s.indexOf(this.perf.profile.key)+1)%s.length])}else if(n==="view")i.toggleView();else if(n==="sfx")this.audio.setSfx(!this.audio.sfxOn),Mi.set("sfx",this.audio.sfxOn?"1":"0");else if(n==="autocam")this.cam.auto=!this.cam.auto,Mi.set("autocam",this.cam.auto?"1":"0");else if(n==="shake")this.cam.intensity=jh[(jh.indexOf(this.cam.intensity)+1)%jh.length]||1,Mi.set("shake",this.cam.intensity);else{let s=Kh[(Kh.indexOf(this.audio.volume)+1)%Kh.length];this.audio.setVolume(s===void 0?.85:s),Mi.set("volume",this.audio.volume)}this.state!=="playing"&&this.state!=="title"&&this.renderStill()}};this.api=i,this.ui=!this.manual||oi.get("ui")==="1"?new ho(document.getElementById("ui"),i,this.isTouch):null,this.hadLock=!1,this.input.onLockChange=n=>{n?this.hadLock=!0:this.hadLock&&this.state==="playing"&&(this.hadLock=!1,this.pause())},this.canvas.addEventListener("click",()=>{this.state==="playing"&&!this.isTouch&&!this.input.locked&&this.input.lock()}),window.addEventListener("keydown",n=>{n.repeat||((n.code==="KeyV"||n.code==="KeyC")&&this.state==="playing"&&i.toggleView(),n.code==="KeyP"&&(this.state==="playing"?this.pause():this.state==="paused"&&this.resume()),n.code==="Enter"&&this.state==="title"&&this.start())}),window.addEventListener("wheel",n=>{if(this.state!=="playing"||this.cam.cine)return;let s=n.deltaY<0?"first":"third";s!==this.cam.mode&&(this.cam.setMode(s),Mi.set("view",s),this.impactBlur=Math.max(this.impactBlur,.3),this.ui&&this.ui.refresh())},{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()}),this.manual?(this.state="playing",this.ui&&this.ui.show("playing",{time:0,cause:""}),this.pendingScenario&&(this.scenarios.run(this.pendingScenario),this.pendingScenario=null)):this.setState("title"),window.addEventListener("resize",()=>{this.resize(),(this.state==="paused"||this.state==="dead")&&this.renderStill()}),this.resize(),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}async loadCharacter(){try{Rr(.3),window.__EOS_SON||await Yh("dist/son.js"),Rr(.7);let t=await qh(window.__EOS_SON);Rr(.9),window.__EOS_SON=null;let e=new po(this.character,t);this.character.useGlb(e),this.body.setAirway(new _(0,e.mouth.y,e.mouth.z),new _(0,e.eye.y,e.eye.z)),this.glbInfo={verts:e.mesh.geometry.attributes.position.count,bones:e.order.length,morphs:Object.keys(e.mesh.morphTargetDictionary||{}),sourceHeight:+e.sourceHeight.toFixed(3)},this.onCharacter&&this.onCharacter(e),Rr(.92)}catch(t){console.warn("[character] GLB \uCE90\uB9AD\uD130\uB97C \uC4F0\uC9C0 \uBABB\uD574 \uAE30\uBCF8 \uBAB8\uC73C\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4: "+t.message),this.glbInfo={error:t.message},this.character.body.visible=!0,this.character.head.visible=!0}}async loadBoat(){if(!this.boatOff)try{window.__EOS_BOAT||await Yh("dist/boat.js");let t=await qh(window.__EOS_BOAT);window.__EOS_BOAT=null,this.boat.setModel(t),this.boatInfo={verts:this.boat.mesh.geometry.attributes.position.count},(this.wantBoard||this.state==="title"&&!this.scenarios.active)&&this.board()}catch(t){console.warn("[boat] \uBCF4\uD2B8 \uBAA8\uB378\uC744 \uC4F0\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4: "+t.message),this.boatInfo={error:t.message}}}board(){if(!this.boat.loaded){this.wantBoard=!this.boatOff;return}this.wantBoard=!1;let t=this.body,e=-Math.PI/2+.32;this.boat.reset(t.pos.x,t.pos.z,e),this.boat.rider=this.body.mass,this.boat.flipArmed=!0,this.boat.keepYaw=e,this.aboard=!0,this.washT=0,this.bacc=0,this.pinToBoat(!0),this.anim.hold="aboard",this.syncCharacter(1)}pinToBoat(t,e=1/60){let i=this.boat,n=this.body,s=this.rid;t&&i.sync(1);let a=this._pt||(this._pt={base:new _,v:new _,a:new _,q:new _t,qi:new _t,e:new hi,x:new _(1,0,0),z:new _(0,0,1)}),o=this._seatW||(this._seatW=new _),c=this._seatQ||(this._seatQ=new _t);a.base.copy(this.seatPos).sub(i.com).applyQuaternion(i.group.quaternion).add(i.group.position),i.velocityAt(a.base,a.v),(t||!s.has)&&(s.pv.copy(a.v),s.p.set(0,0,0),s.v.set(0,0,0),s.d.set(0,0,0),s.slam=0,s.has=!0),a.a.copy(a.v).sub(s.pv).multiplyScalar(1/Math.max(e,.001)),s.pv.copy(a.v),a.a.lengthSq()>2025&&a.a.setLength(45),a.a.multiplyScalar(-1),a.a.y-=9.81,a.a.applyQuaternion(a.qi.copy(i.group.quaternion).invert()),a.a.y+=9.81,s.d.lerp(a.a,1-Math.exp(-e*16));let h=Math.max(1,Math.ceil(e/.012)),l=e/h;for(let d=0;d<h;d++)s.v.x+=(s.d.x*3.2-30*s.p.x-3.2*s.v.x)*l,s.v.z+=(s.d.z*2.4-34*s.p.z-3.4*s.v.z)*l,s.v.y+=((s.d.y-4)*1.5-15*s.p.y-2*s.v.y)*l,s.p.addScaledVector(s.v,l),s.p.y<=0&&(s.v.y<-.5&&(s.slam=Math.max(s.slam,Math.min(1,-s.v.y/2.2))),s.p.y=0,s.v.y<0&&(s.v.y=0)),s.p.y>.22&&(s.p.y=.22,s.v.y>0&&(s.v.y=0)),s.p.x>.07?(s.p.x=.07,s.v.x>0&&(s.v.x=-.3*s.v.x)):s.p.x<-.26&&(s.p.x=-.26,s.v.x<0&&(s.v.x=0)),s.p.z>.16?(s.p.z=.16,s.v.z>0&&(s.v.z=0)):s.p.z<-.24&&(s.p.z=-.24,s.v.z<0&&(s.v.z=0));s.slam=Math.max(0,s.slam-e*3.2),this.state==="title"&&s.p.multiplyScalar(.5),o.copy(this.seatPos).add(s.p).sub(i.com).applyQuaternion(i.group.quaternion).add(i.group.position),c.copy(i.group.quaternion).multiply(this.seatQuat).multiply(a.q.setFromAxisAngle(a.z,s.p.x/.5)).multiply(a.q.setFromAxisAngle(a.x,s.p.y/.8)),n.pin(o,c,i.velocityAt(o,this._seatV||(this._seatV=new _)),i.angVel);let u=this.anim.ride;u.lift=s.p.y/.22,u.side=s.p.x/.2,u.fore=s.p.z/.2,u.slam=s.slam,s.slam>.55&&this.state==="playing"&&(this.impactBlur=Math.max(this.impactBlur,.12*s.slam))}launchIntroWave(t=10){return this.introWave=this.interaction.launch({lead:t,height:12.5,breakOffset:.2,angleOffset:0,width:190,speed:14}),this.introWave}boatPoint(t,e,i,n){return n.set(t,e,i).applyMatrix4(this.boat.holder.children[0].matrixWorld)}contactBoat(t){let e=this.boat,i=this.body,n=this.player,s=this.survival;this.clingCool=Math.max(0,(this.clingCool||0)-t);let a=n.swimHeld,o=a&&!this._swimWas;if(this._swimWas=a,!e.active||!e.loaded){this.clinging=!1,n.cling=!1,n.faceDir=null,this.nearBoat=99;return}let c=this._cb||(this._cb={c:new _,g:{},g2:{},out:new _,a:new _,f:new _,v:new _,l:new _,n:new _,Y:new _});if(c.c.set(0,.4,0).applyQuaternion(i.quat).add(i.pos),c.c.distanceToSquared(e.pos)>36){this.nearBoat=99,this.clinging&&this.letGo(!1);return}let h=e.nearestGrip(c.c,c.g);this.nearBoat=h.dist,c.Y.set(0,1,0).applyQuaternion(e.quat);for(let p=0;p<3;p++){let y=i.points[p],x=p===1?.15:.11,M=e.nearestGrip(y.world,c.g2),R=0;if(M.dist<Oe.tubeR+x)R=Oe.tubeR+x-M.dist,c.n.copy(y.world).sub(M.point),c.n.lengthSq()<1e-6&&c.n.copy(M.normal),this.clinging&&(c.n.y=Math.max(0,c.n.y),c.n.lengthSq()<1e-6&&c.n.copy(M.normal)),c.n.normalize();else{let v=c.l.copy(y.world).applyMatrix4(e.inv);if(Math.abs(v.x)<In(v.z)&&v.z>Oe.transomZ&&v.z<Oe.bowZ&&v.y>0&&v.y<Oe.floorY+x){let w=v.y>.17;R=w?Oe.floorY+x-v.y:v.y+x*.5,c.n.copy(c.Y).multiplyScalar(w?1:-1)}}if(R>0){e.velocityAt(y.world,c.v);let v=(i.vel.x-c.v.x)*c.n.x+(i.vel.y-c.v.y)*c.n.y+(i.vel.z-c.v.z)*c.n.z,w=Math.max(0,Math.min(2600,R*9e3-v*500));i.extForce.addScaledVector(c.n,w),e.pushAt(y.world,-c.n.x*w*.6,-c.n.y*w*.6,-c.n.z*w*.6)}}if(!this.clinging){let p=s.alive&&this.clingCool<=0&&h.dist<1.25&&!n.diveHeld&&!this.rescue.reach&&this.rescue.state!=="lift"&&n.air<.5;if(this.canCling=p,p&&o)this.clinging=!0,this.clingZ=h.z,this.clingSide=h.side,this.strain=0,this.clingNote=0;else{n.cling=!1,n.faceDir=null;return}}if(!s.alive||n.diveHeld){this.letGo(!1);return}let l=In(this.clingZ),u=In(this.clingZ+.05),d=(this._cg||(this._cg=new _)).set(this.clingSide*l,Ar(this.clingZ),this.clingZ).applyMatrix4(e.matrix),f=this.clingSide*(u-l),g=Math.hypot(f,.05);c.out.set(this.clingSide*.05/g,0,-this.clingSide*f/g).applyQuaternion(e.quat),c.out.y=0,c.out.lengthSq()<.04&&c.out.set(i.pos.x-d.x,0,i.pos.z-d.z),c.out.normalize(),c.c.set(0,.42,0).applyQuaternion(i.quat),c.a.copy(d).addScaledVector(c.out,Oe.tubeR+.2),c.a.y=i.surfaceH+.04,c.l.copy(i.pos).add(c.c),e.velocityAt(d,c.v),c.n.copy(i.angVel).cross(c.c).add(i.vel),c.f.copy(c.a).sub(c.l).multiplyScalar(900),c.f.x-=(c.n.x-c.v.x)*230,c.f.y-=(c.n.y-c.v.y)*280,c.f.z-=(c.n.z-c.v.z)*230;let b=c.f.length(),m=(460+620*s.eff)*(.35+.65*n.control);this.strain=Math.max(0,this.strain+(b>m?t:-t*.6)),b>m&&c.f.multiplyScalar(m/b),i.extForce.add(c.f),i.extTorque.x+=c.c.y*c.f.z-c.c.z*c.f.y,i.extTorque.y+=c.c.z*c.f.x-c.c.x*c.f.z,i.extTorque.z+=c.c.x*c.f.y-c.c.y*c.f.x,e.pushAt(d,-c.f.x,-c.f.y,-c.f.z),c.c.add(i.pos),n.cling=!0,n.faceDir=(this._fd||(this._fd=new _)).copy(c.out).multiplyScalar(-1),(this.strain>.55||c.c.distanceTo(d)>1.9)&&this.letGo(!0)}letGo(t){this.clinging&&(this.clinging=!1,this.player.cling=!1,this.player.faceDir=null,this.clingCool=t?1.6:.7,t&&(this.tornAt=this.time,this.player.control=Math.min(this.player.control,.3)))}boatFrame(t){let e=this.boat;if(!e.active||!e.loaded)return;if(this.slamCool=Math.max(0,(this.slamCool||0)-t),e.slam>2.4&&this.slamCool<=0&&this.state!=="title"){this.slamCool=.5;let s=Math.min(2.2,(e.slam-1.6)*.6);this.spray.burst(e.slamPos.x,e.slamPos.y,e.slamPos.z,s,this.weather.wind),this.foam.addSplash(e.slamPos.x,e.slamPos.z,Math.min(1,.3+e.slam/8));{let a=this.camera.matrixWorld.elements,o=e.slamPos.x-this.camera.position.x,c=e.slamPos.z-this.camera.position.z,h=Math.hypot(o,c);this.emit("boatSlam",{v:e.slam*Math.min(1,9/(h+3)),pan:Math.max(-.8,Math.min(.8,(o*a[0]+c*a[2])/(h+.5)))})}}if(this.wasCapsized!==e.capsized&&(this.wasCapsized=e.capsized,this.state!=="title"&&(this.spray.burst(e.pos.x,this.waves.heightFast(e.pos.x,e.pos.z),e.pos.z,1.8,this.weather.wind),this.foam.addSplash(e.pos.x,e.pos.z,1),this.emit("boatSlam",{v:7,pan:0}))),!this.ui||this.state!=="playing")return;let i=this.isTouch?"\uD5E4\uC5C4":"Space",n=this.isTouch?"\uC785\uC218":"F";this.boatNote=Math.max(0,(this.boatNote||0)-t),this.clinging&&!this._clingWas?(this.ui.note(`\uBCF4\uD2B8\uB97C \uBD99\uC7A1\uC558\uB2E4 \u2014 ${n} \uB193\uAE30`,3.5),this.boatNote=6):!this.clinging&&this._clingWas&&this.time-(this.tornAt||-9)<.3?(this.ui.note("\uB193\uCCE4\uB2E4",2.5),this.boatNote=4):!this.clinging&&!this.aboard&&this.canCling&&this.boatNote<=0&&(this.ui.note(`${i} \u2014 \uBCF4\uD2B8\uB97C \uBD99\uC7A1\uACE0 \uBC84\uD2F4\uB2E4`,3),this.boatNote=7),this._clingWas=this.clinging}throwOff(){if(!this.aboard)return;let t=this.body,e=this.boat;this.aboard=!1,e.rider=0,e.flipArmed=!1,e.keepYaw=null;let i=(this._tv||(this._tv=new _)).set(0,1,0).applyQuaternion(e.quat);t.vel.addScaledVector(i,2),t.vel.y+=1,t.vel.y>6.5&&(t.vel.y=6.5),t.angVel.copy(e.angVel).multiplyScalar(.9),this.player.control=.04,this.player.impact=Math.max(this.player.impact,1.8),this.player.impactPeak=Math.max(this.player.impactPeak,1.8),this.anim.hold=null,this.acc=0,this.impactBlur=Math.max(this.impactBlur,.6),this.emit("impact",{strength:2.6,dir:i.clone(),aer:e.aer}),this.thrownAt=this.time,this.clingCool=2.5,this.ui&&this.state==="playing"&&this.ui.note(this.isTouch?"\uD5E4\uC5C4 \xB7 \uC785\uC218":"Space \uD5E4\uC5C4 \xB7 F \uC785\uC218",6)}buildEffects(){let t=this.perf.profile;if(this.rain){this.scene.remove(this.rain.group,this.spray.mesh,this.underwater.group);for(let e of[this.rain.group,this.spray.mesh,this.underwater.group])e.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()});this.foam.enabled&&this.foam.rt.forEach(e=>e.dispose()),this.lens.rt.dispose()}this.rain=new so(t),this.spray=new ao(this.waves,t.spray),this.foam=new Ga(this.renderer,t.foamAcc),this.underwater=new oo(this.waves,t),this.lens=new Xa(this.renderer,t.lensDrops),this.scene.add(this.rain.group,this.spray.mesh,this.underwater.group),this.post.u.tLens.value=this.lens.texture,this.interaction?this.interaction.spray=this.spray:this.interaction=new Wa(this.waves,this.body,this.player,this.spray),this.underwater.onEnter=()=>{this.underwater.burstAt(this.camera.position,46,.8),this.impactBlur=Math.max(this.impactBlur,.5),this.emit("camEnter")},this.underwater.onExit=()=>{this.lens.spawn(Math.round(14+20*(1-this.cam.blend)),1),this.lens.sheet=1,this.emit("camExit")},this.interaction.onImpact=e=>{let i=Math.min(1,e.strength/3);this.impactBlur=Math.max(this.impactBlur,i),this.underwater.burst=Math.max(this.underwater.burst,i),this.underwater.isUnder||this.lens.spawn(Math.round((6+16*i)*(1.6-this.cam.blend)),1),this.foam.addSplash(this.body.pos.x,this.body.pos.z,1),this.emit("impact",e)},this.interaction.onSplash=(e,i)=>{!this.underwater.isUnder&&this.cam.blend<.5&&this.lens.spawn(2),this.foam.addSplash(i.x,i.z,Math.min(1,e/4)),this.emit("splash",{v:e,pos:i})}}setQuality(t){this.perf.setProfile(t),Mi.set("quality",t);let e=this.perf.profile;this.ocean.applyProfile(e),this.sky.envRT.setSize(e.envSize,e.envSize/2),this.post.levels=e.bloomLevels,this.buildEffects(),this.resize(!0)}setState(t){this.state=t,this.ui&&this.ui.show(t,{time:this.survival.timeAlive,cause:this.survival.cause})}start(){this.audio.start(),this.resetPlayer(),!this.pendingScenario&&!this.scenarios.active&&this.board(),this.cam.script=null,this.input.enabled=!0,this.pendingScenario?(this.scenarios.run(this.pendingScenario),this.pendingScenario=null):this.scenarios.active||(this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=this.aboard?58:22,this.interaction.megaNext=105+Math.random()*40,this.introWaveAt=this.aboard?this.time+9.5:0),this.isTouch?this.goFullscreen():this.input.lock(),this.setState("playing"),this.scenarios.active||(this.cam.setMode(this.cam.mode),this.cam.cine={mode:"intro",t:0,dur:4.5},this.introStrike=1.3),this.ui&&this.ui.note(this.aboard?"\uBCF4\uD2B8\uB97C \uAF49 \uBD99\uC7A1\uACE0 \uBC84\uD168\uB77C":this.isTouch?"\uD5E4\uC5C4 \xB7 \uC785\uC218":"Space \uD5E4\uC5C4 \xB7 F \uC785\uC218",5),this.last=performance.now()}pause(){this.state==="playing"&&(this.input.enabled=!1,this.audio.suspend(),this.isTouch||this.input.unlock(),this.setState("paused"))}resume(){this.state!=="playing"&&(this.audio.start(),this.audio.resume(),this.input.enabled=!0,this.cam.script=null,this.isTouch||this.input.lock(),this.setState("playing"),this.last=performance.now())}restart(){this.scenarios.stop(),this.weather.locked=!1,this.weather.base=1;for(let t of this.waves.breakers)t.active=!1;this.rescue.reset(240),this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=22,this.interaction.megaNext=80+Math.random()*40,this.resetPlayer(),this.board(),this.aboard&&(this.interaction.next=58,this.introWaveAt=this.time+9.5),this.resume(),this.ui&&this.aboard&&this.ui.note("\uBCF4\uD2B8\uB97C \uAF49 \uBD99\uC7A1\uACE0 \uBC84\uD168\uB77C",5)}resetPlayer(){this.body.reset(this.body.pos.x,this.body.pos.z),this.survival.reset(),this.survival.events.length=0,this.player.brace=0,this.player.air=0,this.player.control=1,this.player.diveBlend=0,this.player.riseBlend=0,this.player.crawlBlend=0,this.player.swimBlend=0,this.player.underSwim=0,this.player.impact=0,this.player.impactPeak=0,this.player.tumble=0,this.player.events.length=0,this.cam.qd.identity(),this.cam.inited=!1,this.deadTimer=0,this.impactBlur=0,this.mouthUnder=!1,this.wonTimer=0,this.lifting=!1,this.anim.force=null,this.cam.cine=null,this.timeScale=1,this.slowLeft=1.4,this.slowWant=1,this.grabNote=0,this.post.u.uFade.value=0,this.post.u.uTunnel.value=0,this.post.u.uDesat.value=0,this.lens.wipe(),this.limbs.reset(),this.aboard=!1,this.anim.hold=null,this.boat.hide(),this.clinging=!1,this.player.cling=!1,this.player.faceDir=null,this.introWave=null,this.introWaveAt=0,this.thrownAt=-99,this.wasCapsized=!1,this.clingCool=0,this.syncCharacter(1),this.character.group.updateMatrixWorld(!0)}goFullscreen(){try{let t=document.documentElement,e=t.requestFullscreen?t.requestFullscreen():null;e&&e.catch&&e.catch(()=>{})}catch{}}resize(t){let e=window.innerWidth,i=window.innerHeight,n=Math.min(window.devicePixelRatio||1,2);this.renderer.setSize(Math.round(e*n),Math.round(i*n),!1),this.canvas.style.width=e+"px",this.canvas.style.height=i+"px",this.camera.aspect=e/i,this.cam.portrait=mt((1-e/i)/.5),this.camera.updateProjectionMatrix();let[s,a]=this.perf.renderSize(Math.round(e*n),Math.round(i*n));this.post.useOpaque=this.perf.profile.refraction,this.post.fxaa=this.perf.profile.fxaa,this.post.setSize(s,a,t===!0),this.ocean.uniforms.uSceneColor.value=this.post.rtOpaque.texture,this.ocean.uniforms.uSceneDepth.value=this.post.rtOpaque.depthTexture}emit(t,e){for(let i=0;i<this.listeners.length;i++)this.listeners[i](t,e)}syncCharacter(t){let e=this.character.group,i=this.body;e.position.lerpVectors(i.prevPos,i.pos,t),e.quaternion.slerpQuaternions(i.prevQuat,i.quat,t)}step(t){this.time+=t,rt.uTime.value=this.time,this.scenarios.update(t),this.weather.update(t),this.waves.update(t),rt.uWaveA.value=this.waves.uA,rt.uWaveB.value=this.waves.uB,rt.uBrkA.value=this.waves.uBrkA,rt.uBrkB.value=this.waves.uBrkB,rt.uBrkC.value=this.waves.uBrkC,this.body.wind.copy(this.weather.wind),this.body.breathVol=(this.survival.lung-.55)*3.2,this.acc+=t;let e=0;if(this.studio){let v=this.studio,w=this.body;w.pos.set(v.x,v.y,v.z),w.prevPos.copy(w.pos),w.vel.set(0,0,0),w.angVel.set(0,0,0),w.quat.copy(v.quat),w.prevQuat.copy(v.quat),w.relFlow.set(0,0,0),w.relSpeed=0,this.anim.force=v.state,this.anim.forcePhase=v.phase,this.acc=0}if(this.lifting){let v=this.body,w=this.rescue;v.prevPos.copy(v.pos),v.prevQuat.copy(v.quat);let A=w.lineDir,E=this._liftQ||(this._liftQ=new _t),S=this._liftQ2||(this._liftQ2=new _t);E.setFromUnitVectors(this._up||(this._up=new _(0,1,0)),A),S.setFromAxisAngle(this._up,w.ringSpin),v.quat.copy(E).multiply(S),v.pos.copy(w.ring).addScaledVector(A,-.3),v.vel.copy(w.vel),v.angVel.set(0,0,0),v.subFrac=Math.max(0,Math.min(1,(this.waves.heightFast(v.pos.x,v.pos.z)-v.pos.y+.6)/1.5)),v.mouthDepth=-2,v.eyeDepth=-2,v.relSpeed=0,v.dragG=0,this.anim.force="hang",this.acc=0}{let v=this.boat;v.tow.set(0,0,0);let w=this.time-(this.thrownAt||-99);if(v.active&&!this.aboard&&w<16){let E=this.body.pos.x-v.pos.x,S=this.body.pos.z-v.pos.z,z=Math.hypot(E,S)+.001;if(z>5.5){let V=((v.vel.x-this.body.vel.x)*E+(v.vel.z-this.body.vel.z)*S)/z,it=Math.max(0,Math.min(3200,(z-5.5)*420-V*700))*Math.min(1,(16-w)/4);v.tow.set(E/z*it,0,S/z*it)}}v.wind.copy(this.weather.wind),this.bacc+=t;let A=0;for(;v.active&&this.bacc>=Yi&&A<8;)v.step(Yi),this.bacc-=Yi,A++;(A===8||!v.active)&&(this.bacc=0),v.sync(this.bacc/Yi),this.aboard&&(this.washT=this.body.mouthDepth>.05?this.washT+t:0,v.flipping>0&&(v.upY<.4||v.sitUp<.5)||v.upY<.1||v.angVel.length()>3.4||this.washT>1.3||!v.active||this.lifting?this.throwOff():(this.pinToBoat(!1,t),this.anim.hold="aboard",this.acc=0))}this.introWaveAt&&this.time>=this.introWaveAt&&(this.introWaveAt=0,this.aboard&&this.state==="playing"&&this.launchIntroWave(10.5));{let v=this.introWave,w=this.boat;if(v&&v.active&&this.aboard&&v.age<v.tBreak){let A=(w.pos.x-v.ox)*v.dx+(w.pos.z-v.oz)*v.dz-v.s;if(A>3){let E=Math.max(5,v.speed-(w.vel.x*v.dx+w.vel.z*v.dz));v.tBreak+=(v.age+A/E+.15-v.tBreak)*(1-Math.exp(-t*2.5))}}else v&&!v.active&&(this.introWave=null)}for(;!this.studio&&!this.lifting&&!this.aboard&&this.acc>=Yi&&e<8;)this.player.fixedUpdate(Yi),this.contactBoat(Yi),this.body.step(Yi),this.acc-=Yi,e++;e===8&&(this.acc=0),this.mouthUnder=this.mouthUnder?this.body.mouthDepth>-.015:this.body.mouthDepth>.03;let i=this.survival;this.state!=="title"&&this.state!=="won"&&!this.lifting&&i.update(t,{mouthUnder:this.mouthUnder,effort:this.player.effort,turb:this.body.turb,subFrac:this.body.subFrac,storm:this.weather.storm,sudden:this.player.impact>.8,brace:Math.max(this.player.brace,this.player.diveHeld?1:0)}),this.syncCharacter(this.acc/Yi);{let v=this.anim.reach,w=this.boat,A=0;if(this.aboard&&w.loaded)A=1,this.boatPoint(.875,.4,.22,v[0].pos),this.boatPoint(.47,.55,.58,v[1].pos);else if(this.clinging&&w.loaded){A=1,this.anim.hold="cling";let E=this.clingZ,S=this.clingSide,z=In(E),V=this.boatPoint(S*z,Ar(E),E,this._rg||(this._rg=new _)),it=(this._ro||(this._ro=new _)).set(this.character.group.position.x-V.x,0,this.character.group.position.z-V.z);it.lengthSq()<1e-4&&it.set(S,0,0).applyQuaternion(w.group.quaternion),it.y=0,it.normalize();let k=it.z,P=-it.x;for(let L=0;L<2;L++){let O=L===0?.21:-.21;v[L].pos.set(V.x+k*O+it.x*.115,V.y+.165,V.z+P*O+it.z*.115)}}else this.anim.hold==="cling"&&(this.anim.hold=null);if(v[0].on=A,v[1].on=A,this.character.glb&&this.character.glb.setGrip){let E=v[0].w>.5?1:0;this.character.glb.setGrip(E,E)}}if(this.anim.update(t),this.character.retarget(),this.character.group.updateMatrixWorld(!0),this.body.syncLimbs(this.character),this.boatFrame(t),this.state==="title")this.interaction.next=Math.max(this.interaction.next,8),this.interaction.megaNext=Math.max(this.interaction.megaNext,40),this.cam.script||(this.cam.script={yaw:-Math.PI/2,pitch:-.07}),this.cam.blend=1,this.cam.orbit=this.time*.11;else if(this.cam.orbit!==0&&!this.keepOrbit){let v=((this.cam.orbit+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;this.cam.orbit=Math.abs(v)<.01?0:v*Math.exp(-t*3)}{let v=this.cam.interest,w=this.interaction,A=this.body;if(w.crestDist<130&&w.crestDist>6&&w.crestHeight>4)v.x=A.pos.x-w.crestDx*60,v.z=A.pos.z-w.crestDz*60,v.w=mt(w.crestHeight/10)*mt(1.2-w.crestDist/130);else if(this.boat.active&&!this.aboard&&this.time-(this.thrownAt||-99)<9)v.x=this.boat.pos.x,v.z=this.boat.pos.z,v.w=.75;else if(this.rescue.state==="hover"||this.rescue.state==="inbound"){let E=this.rescue.state==="hover"?this.rescue.ring:this.rescue.pos;v.x=E.x,v.z=E.z,v.w=.6}else v.w=0;this.cam.oxygen=this.survival.alive?this.survival.oxygen:100,this.cam.shiver=this.survival.shiver}this.cam.armAdd=(this.cam.armAdd||0)+((this.aboard||this.time-(this.thrownAt||-99)<4?1.5:0)-(this.cam.armAdd||0))*(1-Math.exp(-t*1.2)),this.cam.holdAbove=!this.aboard&&this.time-(this.thrownAt||-99)<6.5,this.cam.fpLift=(this.cam.fpLift||0)+((this.aboard?.27:0)-(this.cam.fpLift||0))*(1-Math.exp(-t*(this.aboard?3:9))),this.cam.update(t);let n=this.camera.position,s=this.weather.wind,a=this.weather.storm;this.mouthWorld.copy(this.body._mouth).applyQuaternion(this.character.group.quaternion).add(this.character.group.position),this.underwater.update(t,this.camera,this.cam.surfaceAtCam,this.body,this.player,i,this.post,this.weather,this.mouthWorld,this.post.h),this.camUnder=this.underwater.under;let o=i.events;for(let v=0;v<o.length;v++){let w=o[v];w.type==="submerge"&&this.underwater.burstAt(this.mouthWorld,34,.45),w.type==="surface"&&(this.player.recover=2+4*w.need),this.emit(w.type,w)}o.length=0,this.introStrike>0&&(this.introStrike-=t,this.introStrike<=0&&this.lightning.strike(n,{azimuth:this.cam.yaw+.5,dist:1500,sheet:0,power:1.4})),this.lightning.update(t,n,a>.3?.3+.9*a:0,this.autoLightning),this.interaction.update(t,n,this.camUnder,s);let c=this.interaction.crestDist,h=this.interaction.crestHeight,l=h>18?60:30,u=i.alive&&c>-2&&c<l&&h>5?mt(1-c/l)*mt(h/9):0;this.player.brace+=(u-this.player.brace)*(1-Math.exp(-t*5)),this.cam.threat=this.interaction.threat;let d=this.rescue,f=d.state==="hover",g=this.input.enabled&&this.player.swimHeld;d.update(t,this.body.pos,s,i.timeAlive,i.alive,this.spray,this.state==="playing",this.camera.position,g),this.player.grab=d.state==="hover"&&d.gripping?d.ring:null;let b=this.isTouch?"\uD5E4\uC5C4":"Space";this.ui&&this.state==="playing"&&(!f&&d.state==="hover"&&this.ui.note(`\uAD6C\uC870 \uD5EC\uAE30 \u2014 \uD29C\uBE0C\uAE4C\uC9C0 \uAC00\uC11C ${b}\uB97C \uAFB9 \uB20C\uB7EC \uBD99\uC7A1\uC544\uB77C`,8),this.grabNote-=t,d.slipped?(d.slipped=!1,this.ui.note("\uB193\uCCE4\uB2E4",2.5),this.grabNote=3):d.reach&&!d.gripping&&this.grabNote<=0&&(this.ui.note(`${b}\uB97C \uAFB9 \uB20C\uB7EC \uBD99\uC7A1\uC544\uB77C`,2.5),this.grabNote=4)),d.state==="lift"&&!this.lifting&&(this.lifting=!0,this.input.enabled=!1,this.interaction.auto=!1,this.autoLightning=!0,this.cam.setMode("third"),this.cam.cine={mode:"lift",t:0,yaw0:this.cam.yaw},this.emit("surface",{need:1,time:6})),d.rescued&&this.state==="playing"&&(this.wonTimer+=t,this.post.u.uFade.value=Math.max(0,Math.min(.9,(this.wonTimer-9.5)/2.2)),this.wonTimer>11.5&&!this.manual&&(this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("won")));{let v=!!this.cam.cine||this.lifting;v!==!!this.cineOn&&(this.cineOn=v,this.ui&&this.ui.cine(v))}{let v=this.interaction,w=i.alive&&!this.lifting&&(this.player.brace>.7&&v.crestDist<7&&v.crestDist>-2&&v.crestHeight>7||this.player.air>.6),A=this.realDt||t;w&&this.slowLeft>0?(this.slowWant=.42,this.slowLeft-=A):(this.slowWant=1,w||(this.slowLeft=Math.min(1.4,this.slowLeft+A*.2)))}let m=this.body.subFrac<.05&&this.body.pos.y-this.body.surfaceH>1?1:0;this.player.air+=(m-this.player.air)*(1-Math.exp(-t*(m?10:4)));let p=this.vst;p.alive=i.alive,p.blackout=i.blackout,p.mouthUnder=this.mouthUnder,p.under=this.mouthUnder,p.camUnder=this.underwater.isUnder,p.oxygen=i.oxygen,p.impact=this.player.impact,p.brace=this.player.brace,p.crestDist=c,p.crestHeight=h,p.gaspTimer=i.gaspTimer,p.inhaling=i.inhaling,p.breathPhase=i.breathPhase,p.stamina=i.stamina,p.effort=this.player.effort,p.temp=i.temp,p.swallow=i.swallow,p.air=this.player.air,p.exertion=i.exertion,p.struggle=this.anim.w.struggle,p.dive=this.player.diveHeld,this.coughSeq>0&&(this.coughSeq-=t,this.coughT-=t,this.coughT<=0&&(this.anim.coughKick=1,this.coughT=.42+Math.random()*.2)),this.face.update(t,p),this.state!=="title"&&this.voiceDir.update(t,p),this.limbs.update(t,this.spray,s,this.state!=="title"||!0),this.spray.seedCrests(t,n,s,a,Math.min(40,1500*t)*(this.perf.profile.spray/9e3));{let v=this.time-(this.thrownAt||-99);this.spray.thin=v<6?.3:v<10?.3+.7*(v-6)/4:1}this.spray.seedBreakers(t,n,s),this.spray.update(t,n,s),this.rain.update(t,this.camera,s,this.weather.rain,this.camUnder,this.post.h);let y=this.post.u;this.impactBlur=Math.max(0,this.impactBlur-t*.9),y.uBlur.value=this.impactBlur*2.6,y.uSheet.value=this.lens.sheet,y.uWhiteout.value=this.interaction.whiteout*(this.time-(this.thrownAt||-99)<10?.3:1),y.uMotionBlur.value=this.perf.profile.motionBlur?Math.min(.6,this.player.impact*.3+this.player.tumble*.5):0;{let v=Math.max(mt((40-i.oxygen)/40),mt((34.2-i.temp)/2.2),i.blackout)*(i.alive?1:0);this.pulseT=(this.pulseT||0)+t*(1.5+1.2*v);let w=Math.pow(Math.max(0,Math.sin(this.pulseT*Math.PI*2)),8);y.uTunnel.value=i.blackout,this.lidK=0}y.uDesat.value=.35*i.blackout+.18*mt((35.5-i.temp)/3),this.state==="title"?(y.uDofAmount.value=1.6,y.uDofFocus.value=this.cam.arm):y.uDofAmount.value=0,i.alive&&!this.lifting&&!this.rescue.rescued&&(y.uFade.value=this.lidK||0),i.alive||(this.deadTimer===0&&!this.manual&&(this.cam.cine={mode:"death",t:0}),this.deadTimer+=t,y.uFade.value=Math.min(.82,this.deadTimer/4),this.deadTimer>4&&this.state==="playing"&&!this.manual&&(this.input.enabled=!1,this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("dead"))),this.ui&&this.state==="playing"&&this.ui.setBars(i.oxygen/100,i.stamina/100,(i.temp-31.5)/5.5,this.rescue.hold/this.rescue.holdNeed);let x=rt.uFlash.value;this.flashLight.intensity=x*3.2,this.flashLight.position.copy(this.character.group.position).addScaledVector(rt.uFlashDir.value,50),this.flashLight.target.position.copy(this.character.group.position),this.keyLight.position.copy(this.character.group.position).addScaledVector(rt.uGlowDir.value,50),this.keyLight.target.position.copy(this.character.group.position),this.character.material.envMapIntensity=(this.studioLight?4.5:this.character.glb?1.25:1.7)+x*2,this.boat.material&&(this.boat.material.envMapIntensity=(this.studioLight?4:.6)+x*1.4),this.keyLight.intensity=this.studioLight?2.2:.42,this.ocean.update(this.camera,t),this.ocean.uniforms.uPlayerPos.value.copy(this.character.group.position),this.ocean.uniforms.uBoatOn.value=this.boat.active&&this.boat.loaded?1:0,this.boat.active&&this.boat.loaded&&this.ocean.uniforms.uBoatInv.value.copy(this.boat.holder.children[0].matrixWorld).invert(),this.ocean.uniforms.uPlayerFoam.value=(.06+this.anim.splashiness*.12+this.limbs.activity*.16)*Math.min(1,this.body.subFrac*3)*(this.body.eyeDepth<.25?1:0);let M=this.audioState,R=this.camera.matrixWorld.elements;M.cam.fwd.set(-R[8],-R[9],-R[10]),M.cam.up.set(R[4],R[5],R[6]),M.storm=a,M.rain=this.weather.rain,M.windSpeed=this.weather.windSpeed,M.gust=this.weather.gust,M.windPan=-(s.x*R[0]+s.z*R[2])/Math.max(1,this.weather.windSpeed),M.under=this.underwater.under,M.depth=Math.max(0,this.underwater.depth),M.aeration=this.underwater.aeration,M.threat=this.interaction.threat,M.hot=this.spray.hot,M.oxygen=i.oxygen,M.effort=this.player.effort,M.boatCreak=this.aboard?.35+.5*Math.min(1,this.boat.angVel.length()*.8)+.4*this.rid.slam:this.clinging?.4+.5*Math.min(1,(this.strain||0)*2.5):0,M.heli=this.rescue.state!=="none"?{on:!0,pos:this.rescue.pos}:null,M.air=this.player.air,M.relSpeed=this.body.relSpeed,M.swellV=this.body.surface.vy,M.alive=i.alive,M.blackout=i.blackout,M.mouthUnder=this.mouthUnder,M.slow=1-(this.timeScale||1),M.swimSplash=Math.max(this.limbs.activity,this.anim.w.swim*.8)*(this.mouthUnder?.3:1),this.audio.update(t,M),this.input.endFrame()}render(t){if(this.sky.updateEnv(),this.envTimer-=t,this.envTimer<=0&&rt.uFlash.value<.01){let i=this.pmrem.fromEquirectangular(this.sky.envRT.texture);this.envRT&&this.envRT.dispose(),this.envRT=i,this.scene.environment=i.texture,this.envTimer=9}let e=this.weather.rain*(.9+5*(1-this.cam.blend))*(.6+.4*this.weather.gust);this.lens.update(t,e,this.underwater.isUnder,this.camera.aspect),this.foam.update(t,this.camera.position.x,this.camera.position.z,this.character.group.position,this.anim.splashiness*.14+this.limbs.activity*.22,this.ocean.uniforms),this.post.render(this.drawScene,this.camera,t,this.time)}renderStill(){this.render(0)}loop(t){requestAnimationFrame(this.loop);let e=Math.max(0,Math.min((t-this.last)/1e3,.1));this.last=t,!this.manual&&(this.state==="paused"||this.state==="dead"||(this.realDt=e,this.timeScale=(this.timeScale||1)+((this.slowWant||1)-(this.timeScale||1))*(1-Math.exp(-e*9)),this.step(e*this.timeScale),this.render(e),this.perf.update(e)&&this.resize()))}};function Vx(){let r;try{r=new Qh}catch(e){let i=document.getElementById("fatal");i.style.display="flex",i.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uC2E4\uD589\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 (WebGL2 \uD544\uC694). "+e.message,console.error(e);return}(new URLSearchParams(location.search).get("glb")==="0"?Promise.resolve():r.loadCharacter()).then(()=>r.loadBoat()).then(()=>{r.onAssets&&r.onAssets(),window.__ocean.ready=!0,Rr(1)}),window.__ocean={game:r,ready:!1,scenarios:Object.keys(es),advance(e,i=1/60){let n=Math.max(1,Math.round(e/i));for(let s=0;s<n;s++)r.step(i),r.render(i)},scenario(e){return r.scenarios.run(e)},studio(e){let i=new _t;e.prone?i.setFromRotationMatrix(new At().makeBasis(new _(0,0,1),new _(-1,0,0),new _(0,-1,0))):i.setFromAxisAngle(new _(0,1,0),-Math.PI/2);let n=r.waves.sample(0,0,{}).h;r.studio={state:e.state,phase:e.phase||0,quat:i,x:0,y:n+14,z:0},r.player.underSwim=e.under?1:0,r.anim.forcePike=e.pike||0,r.weather.base=r.weather.storm=.15,r.weather.locked=!0,r.cam.setMode("third"),r.cam.blend=1,r.cam.yaw=-Math.PI/2,r.cam.pitch=e.pitch!==void 0?e.pitch:-.05,r.cam.orbit=e.orbit||0,r.keepOrbit=!0,r.cam.armOverride=e.arm||2.7,r.cam.inited=!1,r.post.u.uExposureBias.value=1,r.studioLight=!0;for(let s=0;s<4;s++)r.step(.5);return r.render(1/60),r.render(1/60),r.anim.state},set(e){return e.view&&(r.cam.setMode(e.view),e.snap&&(r.cam.blend=r.cam.target)),e.yaw!==void 0&&(r.cam.yaw=e.yaw),e.pitch!==void 0&&(r.cam.pitch=e.pitch),e.orbit!==void 0&&(r.cam.orbit=e.orbit,r.keepOrbit=!0),e.arm!==void 0&&(r.cam.armOverride=e.arm),e.keys!==void 0&&(r.input.virtual=e.keys,r.input.enabled=!0),e.storm!==void 0&&(r.weather.base=e.storm,e.snap&&(r.weather.storm=e.storm)),e.breaker&&r.interaction.launch(e.breaker),e.strike&&r.lightning.strike(r.camera.position,e.strike),!0},info(){let e=r.body,i=r.survival;return{t:+r.time.toFixed(2),state:r.state,size:[r.post.w,r.post.h],profile:r.perf.profile.key,sigH:+r.waves.sigHeight.toFixed(1),pos:[+e.pos.x.toFixed(1),+e.pos.y.toFixed(2),+e.pos.z.toFixed(1)],surf:+e.surfaceH.toFixed(2),mouth:+e.mouthDepth.toFixed(2),sub:+e.subFrac.toFixed(2),ctl:+r.player.control.toFixed(2),imp:+r.player.impact.toFixed(2),anim:r.anim.state,view:r.cam.mode,blend:+r.cam.blend.toFixed(2),camUnder:+r.camUnder.toFixed(2),yaw:+r.cam.yaw.toFixed(2),o2:+i.oxygen.toFixed(0),st:+i.stamina.toFixed(0),temp:+i.temp.toFixed(2),alive:i.alive,flash:+rt.uFlash.value.toFixed(2),spray:r.spray.alive,drops:r.lens.count,fps:+r.perf.fps.toFixed(0),rescue:r.rescue.state,hold:+r.rescue.hold.toFixed(1),won:r.rescue.rescued,aboard:r.aboard,cling:!!r.clinging,near:+(r.nearBoat||99).toFixed(1),boat:r.boat.active?{up:+r.boat.upY.toFixed(2),swamp:+r.boat.swamp.toFixed(2),dist:+r.boat.pos.distanceTo(e.pos).toFixed(1),sub:+r.boat.subFrac.toFixed(2)}:null,face:r.face.label,air:+r.player.air.toFixed(2),swim:r.player.swimHeld,dive:r.player.diveHeld,depth:+Math.max(0,e.mouthDepth).toFixed(2),voice:r.voiceDir.last,voices:r.voiceDir.count,glb:!!r.character.glb}},measure(e){return new Promise(i=>{let n=performance.now(),s=0,a=0,o=n,c=h=>{s++,a=Math.max(a,h-o),o=h,h-n>=e*1e3?i({fps:+(s/((h-n)/1e3)).toFixed(1),worstMs:+a.toFixed(1),scale:r.perf.scale,size:[r.post.w,r.post.h],profile:r.perf.profile.key}):requestAnimationFrame(c)};requestAnimationFrame(c)})}}}Vx();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
