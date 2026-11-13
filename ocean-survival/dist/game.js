(()=>{var gc="160";var hd=0,Mh=1,ld=2;var ou=1,ud=2,Yi=3,hi=0,Oe=1,Le=2;var dn=0,fn=1,ps=2,wh=3,Eh=4,bc=5,Zi=100,dd=101,fd=102,Sh=103,Ah=104,pa=200,pd=201,vc=202,md=203,Ys=204,ko=205,gd=206,bd=207,vd=208,xd=209,yd=210,_d=211,Md=212,wd=213,Ed=214,Sd=0,Ad=1,Td=2,Gr=3,Rd=4,Cd=5,Pd=6,Ld=7,cu=0,Id=1,Dd=2,Di=0,Fd=1,Ud=2,kd=3,Nd=4,Od=5,Bd=6,Th="attached",zd="detached",hu=300,ms=301,gs=302,No=303,Oo=304,ma=306,li=1e3,$e=1001,Ks=1002,Ee=1003,Wr=1004;var Gs=1005;var Qt=1006,xc=1007;var ti=1008;var Be=1009,Hd=1010,Vd=1011,yc=1012,lu=1013,ln=1014,Ji=1015,$i=1016,uu=1017,du=1018,In=1020,Gd=1021,le=1023,Wd=1024,qd=1025,Dn=1026,bs=1027,Xd=1028,fu=1029,jd=1030,pu=1031,mu=1033,io=33776,no=33777,so=33778,ro=33779,Rh=35840,Ch=35841,Ph=35842,Lh=35843,gu=36196,Ih=37492,Dh=37496,Fh=37808,Uh=37809,kh=37810,Nh=37811,Oh=37812,Bh=37813,zh=37814,Hh=37815,Vh=37816,Gh=37817,Wh=37818,qh=37819,Xh=37820,jh=37821,ao=36492,Yh=36494,Kh=36495,Yd=36283,Zh=36284,Jh=36285,Qh=36286;var vs=2300,Un=2301,oo=2302,$h=2400,tl=2401,el=2402,Kd=2500;var bu=0,ga=1,or=2,vu=3e3,Fn=3001,Zd=3200,Jd=3201,xu=0,Qd=1,mi="",_e="srgb",Re="srgb-linear",_c="display-p3",ba="display-p3-linear",qr="linear",ge="srgb",Xr="rec709",jr="p3";var Xn=7680;var il=519,$d=512,tf=513,ef=514,yu=515,nf=516,sf=517,rf=518,af=519,Bo=35044,zn=35048;var nl="300 es",zo=1035,Qi=2e3,Yr=2001,pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=1234567,Ws=Math.PI/180,xs=180/Math.PI;function Si(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[r&255]+Ge[r>>8&255]+Ge[r>>16&255]+Ge[r>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function qe(r,t,e){return Math.max(t,Math.min(e,r))}function Mc(r,t){return(r%t+t)%t}function of(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function cf(r,t,e){return r!==t?(e-r)/(t-r):0}function qs(r,t,e){return(1-e)*r+e*t}function hf(r,t,e,i){return qs(r,t,1-Math.exp(-e*i))}function lf(r,t=1){return t-Math.abs(Mc(r,t*2)-t)}function uf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function df(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function ff(r,t){return r+Math.floor(Math.random()*(t-r+1))}function pf(r,t){return r+Math.random()*(t-r)}function mf(r){return r*(.5-Math.random())}function gf(r){r!==void 0&&(sl=r);let t=sl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bf(r){return r*Ws}function vf(r){return r*xs}function Ho(r){return(r&r-1)===0&&r!==0}function xf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Kr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function yf(r,t,e,i,n){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),h=s((t+i)/2),l=a((t+i)/2),u=s((t-i)/2),d=a((t-i)/2),f=s((i-t)/2),g=a((i-t)/2);switch(n){case"XYX":r.set(o*l,c*u,c*d,o*h);break;case"YZY":r.set(c*d,o*l,c*u,o*h);break;case"ZXZ":r.set(c*u,c*d,o*l,o*h);break;case"XZX":r.set(o*l,c*g,c*f,o*h);break;case"YXY":r.set(c*f,o*l,c*g,o*h);break;case"ZYZ":r.set(c*g,c*f,o*l,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ii(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function he(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var yn={DEG2RAD:Ws,RAD2DEG:xs,generateUUID:Si,clamp:qe,euclideanModulo:Mc,mapLinear:of,inverseLerp:cf,lerp:qs,damp:hf,pingpong:lf,smoothstep:uf,smootherstep:df,randInt:ff,randFloat:pf,randFloatSpread:mf,seededRandom:gf,degToRad:bf,radToDeg:vf,isPowerOfTwo:Ho,ceilPowerOfTwo:xf,floorPowerOfTwo:Kr,setQuaternionFromProperEuler:yf,normalize:he,denormalize:Ii},_t=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class r{constructor(t,e,i,n,s,a,o,c,h){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,c,h)}set(t,e,i,n,s,a,o,c,h){let l=this.elements;return l[0]=t,l[1]=n,l[2]=o,l[3]=e,l[4]=s,l[5]=c,l[6]=i,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],h=i[1],l=i[4],u=i[7],d=i[2],f=i[5],g=i[8],b=n[0],m=n[3],p=n[6],x=n[1],v=n[4],_=n[7],A=n[2],y=n[5],w=n[8];return s[0]=a*b+o*x+c*A,s[3]=a*m+o*v+c*y,s[6]=a*p+o*_+c*w,s[1]=h*b+l*x+u*A,s[4]=h*m+l*v+u*y,s[7]=h*p+l*_+u*w,s[2]=d*b+f*x+g*A,s[5]=d*m+f*v+g*y,s[8]=d*p+f*_+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*a*l-e*o*h-i*s*l+i*o*c+n*s*h-n*a*c}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],u=l*a-o*h,d=o*c-l*s,f=h*s-a*c,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=u*b,t[1]=(n*h-l*i)*b,t[2]=(o*i-n*a)*b,t[3]=d*b,t[4]=(l*e-n*c)*b,t[5]=(n*s-o*e)*b,t[6]=f*b,t[7]=(i*c-h*e)*b,t[8]=(a*e-i*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){let c=Math.cos(s),h=Math.sin(s);return this.set(i*c,i*h,-i*(c*a+h*o)+a+t,-n*h,n*c,-n*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},co=new Zt;function _u(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Zs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _f(){let r=Zs("canvas");return r.style.display="block",r}var rl={};function Xs(r){r in rl||(rl[r]=!0,console.warn(r))}var al=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ol=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mr={[Re]:{transfer:qr,primaries:Xr,toReference:r=>r,fromReference:r=>r},[_e]:{transfer:ge,primaries:Xr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ba]:{transfer:qr,primaries:jr,toReference:r=>r.applyMatrix3(ol),fromReference:r=>r.applyMatrix3(al)},[_c]:{transfer:ge,primaries:jr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ol),fromReference:r=>r.applyMatrix3(al).convertLinearToSRGB()}},Mf=new Set([Re,ba]),ae={enabled:!0,_workingColorSpace:Re,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Mf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let i=mr[t].toReference,n=mr[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return mr[r].primaries},getTransfer:function(r){return r===mi?qr:mr[r].transfer}};function ds(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ho(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var jn,Zr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jn===void 0&&(jn=Zs("canvas")),jn.width=t.width,jn.height=t.height;let i=jn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Zs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=ds(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ds(e[i]/255)*255):e[i]=ds(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wf=0,Jr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Si(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(lo(n[a].image)):s.push(lo(n[a]))}else s=lo(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function lo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zr.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ef=0,Xe=class r extends pn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=$e,n=$e,s=Qt,a=ti,o=le,c=Be,h=r.DEFAULT_ANISOTROPY,l=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Si(),this.name="",this.source=new Jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===Fn?_e:mi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case li:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case Ks:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case li:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case Ks:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_e?Fn:vu}set encoding(t){Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Fn?_e:mi}};Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=hu;Xe.DEFAULT_ANISOTROPY=1;var ie=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,c=t.elements,h=c[0],l=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(h+1)/2,_=(f+1)/2,A=(p+1)/2,y=(l+d)/4,w=(u+b)/4,P=(g+m)/4;return v>_&&v>A?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=y/i,s=w/i):_>A?_<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),i=y/n,s=P/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=w/s,n=P/s),this.set(i,n,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-l)*(d-l));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-b)/x,this.z=(d-l)/x,this.w=Math.acos((h+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vo=class extends pn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(Xs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Fn?_e:mi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Xe(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Jr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xe=class extends Vo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Qr=class extends Xe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Go=class extends Xe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var St=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let c=i[n+0],h=i[n+1],l=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],g=s[a+2],b=s[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=b;return}if(u!==b||c!==d||h!==f||l!==g){let m=1-o,p=c*d+h*f+l*g+u*b,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let A=Math.sqrt(v),y=Math.atan2(A,p*x);m=Math.sin(m*y)/A,o=Math.sin(o*y)/A}let _=o*x;if(c=c*m+d*_,h=h*m+f*_,l=l*m+g*_,u=u*m+b*_,m===1-o){let A=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=A,h*=A,l*=A,u*=A}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){let o=i[n],c=i[n+1],h=i[n+2],l=i[n+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+l*u+c*f-h*d,t[e+1]=c*g+l*d+h*u-o*f,t[e+2]=h*g+l*f+o*d-c*u,t[e+3]=l*g-o*u-c*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(i/2),l=o(n/2),u=o(s/2),d=c(i/2),f=c(n/2),g=c(s/2);switch(a){case"XYZ":this._x=d*l*u+h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u-d*f*g;break;case"YXZ":this._x=d*l*u+h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u+d*f*g;break;case"ZXY":this._x=d*l*u-h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u-d*f*g;break;case"ZYX":this._x=d*l*u-h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u+d*f*g;break;case"YZX":this._x=d*l*u+h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u-d*f*g;break;case"XZY":this._x=d*l*u-h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],c=e[9],h=e[2],l=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-c)*f,this._y=(s-h)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(l-c)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+h)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-h)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(c+l)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=i*l+a*o+n*h-s*c,this._y=n*l+a*c+s*o-i*h,this._z=s*l+a*h+i*c-n*o,this._w=a*l-i*o-n*c-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,o),u=Math.sin((1-e)*l)/h,d=Math.sin(e*l)/h;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*n-o*i),l=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+c*h+a*u-o*l,this.y=i+c*l+o*h-s*u,this.z=n+c*u+s*l-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return uo.copy(this).projectOnVector(t),this.sub(uo)}reflect(t){return this.sub(uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uo=new E,cl=new St,gi=class{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mi):Mi.fromBufferAttribute(s,a),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gr.copy(i.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}let n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),br.subVectors(this.max,ks),Yn.subVectors(t.a,ks),Kn.subVectors(t.b,ks),Zn.subVectors(t.c,ks),rn.subVectors(Kn,Yn),an.subVectors(Zn,Kn),An.subVectors(Yn,Zn);let e=[0,-rn.z,rn.y,0,-an.z,an.y,0,-An.z,An.y,rn.z,0,-rn.x,an.z,0,-an.x,An.z,0,-An.x,-rn.y,rn.x,0,-an.y,an.x,0,-An.y,An.x,0];return!fo(e,Yn,Kn,Zn,br)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,Yn,Kn,Zn,br))?!1:(vr.crossVectors(rn,an),e=[vr.x,vr.y,vr.z],fo(e,Yn,Kn,Zn,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Vi=[new E,new E,new E,new E,new E,new E,new E,new E],Mi=new E,gr=new gi,Yn=new E,Kn=new E,Zn=new E,rn=new E,an=new E,An=new E,ks=new E,br=new E,vr=new E,Tn=new E;function fo(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Tn.fromArray(r,s);let o=n.x*Math.abs(Tn.x)+n.y*Math.abs(Tn.y)+n.z*Math.abs(Tn.z),c=t.dot(Tn),h=e.dot(Tn),l=i.dot(Tn);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}var Sf=new gi,Ns=new E,po=new E,ui=class{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Sf.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ns,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(po)),this.expandByPoint(Ns.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gi=new E,mo=new E,xr=new E,on=new E,go=new E,yr=new E,bo=new E,ys=class{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gi.copy(this.origin).addScaledVector(this.direction,e),Gi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){mo.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),on.copy(this.origin).sub(mo);let s=t.distanceTo(e)*.5,a=-this.direction.dot(xr),o=on.dot(this.direction),c=-on.dot(xr),h=on.lengthSq(),l=Math.abs(1-a*a),u,d,f,g;if(l>0)if(u=a*c-o,d=a*o-c,g=s*l,u>=0)if(d>=-g)if(d<=g){let b=1/l;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+h}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+h):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+h):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+h);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(mo).addScaledVector(xr,d),f}intersectSphere(t,e){Gi.subVectors(t.center,this.origin);let i=Gi.dot(this.direction),n=Gi.dot(Gi)-i*i,s=t.radius*t.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,c,h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,n=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,n=(t.min.x-d.x)*h),l>=0?(s=(t.min.y-d.y)*l,a=(t.max.y-d.y)*l):(s=(t.max.y-d.y)*l,a=(t.min.y-d.y)*l),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Gi)!==null}intersectTriangle(t,e,i,n,s){go.subVectors(e,t),yr.subVectors(i,t),bo.crossVectors(go,yr);let a=this.direction.dot(bo),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;on.subVectors(this.origin,t);let c=o*this.direction.dot(yr.crossVectors(on,yr));if(c<0)return null;let h=o*this.direction.dot(go.cross(on));if(h<0||c+h>a)return null;let l=-o*on.dot(bo);return l<0?null:this.at(l/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class r{constructor(t,e,i,n,s,a,o,c,h,l,u,d,f,g,b,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,c,h,l,u,d,f,g,b,m)}set(t,e,i,n,s,a,o,c,h,l,u,d,f,g,b,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=l,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/Jn.setFromMatrixColumn(t,0).length(),s=1/Jn.setFromMatrixColumn(t,1).length(),a=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),h=Math.sin(n),l=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=a*l,f=a*u,g=o*l,b=o*u;e[0]=c*l,e[4]=-c*u,e[8]=h,e[1]=f+g*h,e[5]=d-b*h,e[9]=-o*c,e[2]=b-d*h,e[6]=g+f*h,e[10]=a*c}else if(t.order==="YXZ"){let d=c*l,f=c*u,g=h*l,b=h*u;e[0]=d+b*o,e[4]=g*o-f,e[8]=a*h,e[1]=a*u,e[5]=a*l,e[9]=-o,e[2]=f*o-g,e[6]=b+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*l,f=c*u,g=h*l,b=h*u;e[0]=d-b*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*l,e[9]=b-d*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*l,f=a*u,g=o*l,b=o*u;e[0]=c*l,e[4]=g*h-f,e[8]=d*h+b,e[1]=c*u,e[5]=b*h+d,e[9]=f*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*h,g=o*c,b=o*h;e[0]=c*l,e[4]=b-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*l,e[9]=-o*l,e[2]=-h*l,e[6]=f*u+g,e[10]=d-b*u}else if(t.order==="XZY"){let d=a*c,f=a*h,g=o*c,b=o*h;e[0]=c*l,e[4]=-u,e[8]=h*l,e[1]=d*u+b,e[5]=a*l,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*l,e[10]=b*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Af,t,Tf)}lookAt(t,e,i){let n=this.elements;return oi.subVectors(t,e),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),cn.crossVectors(i,oi),cn.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),cn.crossVectors(i,oi)),cn.normalize(),_r.crossVectors(oi,cn),n[0]=cn.x,n[4]=_r.x,n[8]=oi.x,n[1]=cn.y,n[5]=_r.y,n[9]=oi.y,n[2]=cn.z,n[6]=_r.z,n[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],h=i[12],l=i[1],u=i[5],d=i[9],f=i[13],g=i[2],b=i[6],m=i[10],p=i[14],x=i[3],v=i[7],_=i[11],A=i[15],y=n[0],w=n[4],P=n[8],M=n[12],S=n[1],U=n[5],O=n[9],Q=n[13],I=n[2],D=n[6],k=n[10],q=n[14],z=n[3],N=n[7],Z=n[11],et=n[15];return s[0]=a*y+o*S+c*I+h*z,s[4]=a*w+o*U+c*D+h*N,s[8]=a*P+o*O+c*k+h*Z,s[12]=a*M+o*Q+c*q+h*et,s[1]=l*y+u*S+d*I+f*z,s[5]=l*w+u*U+d*D+f*N,s[9]=l*P+u*O+d*k+f*Z,s[13]=l*M+u*Q+d*q+f*et,s[2]=g*y+b*S+m*I+p*z,s[6]=g*w+b*U+m*D+p*N,s[10]=g*P+b*O+m*k+p*Z,s[14]=g*M+b*Q+m*q+p*et,s[3]=x*y+v*S+_*I+A*z,s[7]=x*w+v*U+_*D+A*N,s[11]=x*P+v*O+_*k+A*Z,s[15]=x*M+v*Q+_*q+A*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],c=t[9],h=t[13],l=t[2],u=t[6],d=t[10],f=t[14],g=t[3],b=t[7],m=t[11],p=t[15];return g*(+s*c*u-n*h*u-s*o*d+i*h*d+n*o*f-i*c*f)+b*(+e*c*f-e*h*d+s*a*d-n*a*f+n*h*l-s*c*l)+m*(+e*h*u-e*o*f-s*a*u+i*a*f+s*o*l-i*h*l)+p*(-n*o*l-e*c*u+e*o*d+n*a*u-i*a*d+i*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],u=t[9],d=t[10],f=t[11],g=t[12],b=t[13],m=t[14],p=t[15],x=u*m*h-b*d*h+b*c*f-o*m*f-u*c*p+o*d*p,v=g*d*h-l*m*h-g*c*f+a*m*f+l*c*p-a*d*p,_=l*b*h-g*u*h+g*o*f-a*b*f-l*o*p+a*u*p,A=g*u*c-l*b*c-g*o*d+a*b*d+l*o*m-a*u*m,y=e*x+i*v+n*_+s*A;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/y;return t[0]=x*w,t[1]=(b*d*s-u*m*s-b*n*f+i*m*f+u*n*p-i*d*p)*w,t[2]=(o*m*s-b*c*s+b*n*h-i*m*h-o*n*p+i*c*p)*w,t[3]=(u*c*s-o*d*s-u*n*h+i*d*h+o*n*f-i*c*f)*w,t[4]=v*w,t[5]=(l*m*s-g*d*s+g*n*f-e*m*f-l*n*p+e*d*p)*w,t[6]=(g*c*s-a*m*s-g*n*h+e*m*h+a*n*p-e*c*p)*w,t[7]=(a*d*s-l*c*s+l*n*h-e*d*h-a*n*f+e*c*f)*w,t[8]=_*w,t[9]=(g*u*s-l*b*s-g*i*f+e*b*f+l*i*p-e*u*p)*w,t[10]=(a*b*s-g*o*s+g*i*h-e*b*h-a*i*p+e*o*p)*w,t[11]=(l*o*s-a*u*s-l*i*h+e*u*h+a*i*f-e*o*f)*w,t[12]=A*w,t[13]=(l*b*n-g*u*n+g*i*d-e*b*d-l*i*m+e*u*m)*w,t[14]=(g*o*n-a*b*n-g*i*c+e*b*c+a*i*m-e*o*m)*w,t[15]=(a*u*n-l*o*n+l*i*c-e*u*c-a*i*d+e*o*d)*w,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,h=s*a,l=s*o;return this.set(h*a+i,h*o-n*c,h*c+n*o,0,h*o+n*c,l*o+i,l*c-n*a,0,h*c-n*o,l*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,h=s+s,l=a+a,u=o+o,d=s*h,f=s*l,g=s*u,b=a*l,m=a*u,p=o*u,x=c*h,v=c*l,_=c*u,A=i.x,y=i.y,w=i.z;return n[0]=(1-(b+p))*A,n[1]=(f+_)*A,n[2]=(g-v)*A,n[3]=0,n[4]=(f-_)*y,n[5]=(1-(d+p))*y,n[6]=(m+x)*y,n[7]=0,n[8]=(g+v)*w,n[9]=(m-x)*w,n[10]=(1-(d+b))*w,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=Jn.set(n[0],n[1],n[2]).length(),a=Jn.set(n[4],n[5],n[6]).length(),o=Jn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],wi.copy(this);let h=1/s,l=1/a,u=1/o;return wi.elements[0]*=h,wi.elements[1]*=h,wi.elements[2]*=h,wi.elements[4]*=l,wi.elements[5]*=l,wi.elements[6]*=l,wi.elements[8]*=u,wi.elements[9]*=u,wi.elements[10]*=u,e.setFromRotationMatrix(wi),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=Qi){let c=this.elements,h=2*s/(e-t),l=2*s/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,g;if(o===Qi)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Yr)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Qi){let c=this.elements,h=1/(e-t),l=1/(i-n),u=1/(a-s),d=(e+t)*h,f=(i+n)*l,g,b;if(o===Qi)g=(a+s)*u,b=-2*u;else if(o===Yr)g=s*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Jn=new E,wi=new Ct,Af=new E(0,0,0),Tf=new E(1,1,1),cn=new E,_r=new E,oi=new E,hl=new Ct,ll=new St,Fi=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],a=n[4],o=n[8],c=n[1],h=n[5],l=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ll.setFromEuler(this),this.setFromQuaternion(ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fi.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rf=0,ul=new E,Qn=new St,Wi=new Ct,Mr=new E,Os=new E,Cf=new E,Pf=new St,dl=new E(1,0,0),fl=new E(0,1,0),pl=new E(0,0,1),Lf={type:"added"},If={type:"removed"},Se=class r extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new E,e=new Fi,i=new St,n=new E(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Zt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.premultiply(Qn),this}rotateX(t){return this.rotateOnAxis(dl,t)}rotateY(t){return this.rotateOnAxis(fl,t)}rotateZ(t){return this.rotateOnAxis(pl,t)}translateOnAxis(t,e){return ul.copy(t).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dl,t)}translateY(t){return this.translateOnAxis(fl,t)}translateZ(t){return this.translateOnAxis(pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mr.copy(t):Mr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Os,Mr,this.up):Wi.lookAt(Mr,Os,this.up),this.quaternion.setFromRotationMatrix(Wi),n&&(Wi.extractRotation(n.matrixWorld),Qn.setFromRotationMatrix(Wi),this.quaternion.premultiply(Qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Lf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(If)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let u=c[h];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(s(t.materials,this.material[c]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),l=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),l.length>0&&(i.images=l),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let c=[];for(let h in o){let l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Se.DEFAULT_UP=new E(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ei=new E,qi=new E,vo=new E,Xi=new E,$n=new E,ts=new E,ml=new E,xo=new E,yo=new E,_o=new E,wr=!1,hs=class r{constructor(t=new E,e=new E,i=new E){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ei.subVectors(t,e),n.cross(Ei);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ei.subVectors(n,e),qi.subVectors(i,e),vo.subVectors(t,e);let a=Ei.dot(Ei),o=Ei.dot(qi),c=Ei.dot(vo),h=qi.dot(qi),l=qi.dot(vo),u=a*h-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(h*c-o*l)*d,g=(a*l-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getUV(t,e,i,n,s,a,o,c){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),this.getInterpolation(t,e,i,n,s,a,o,c)}static getInterpolation(t,e,i,n,s,a,o,c){return this.getBarycoord(t,e,i,n,Xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Xi.x),c.addScaledVector(a,Xi.y),c.addScaledVector(o,Xi.z),c)}static isFrontFacing(t,e,i,n){return Ei.subVectors(i,e),qi.subVectors(t,e),Ei.cross(qi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),Ei.cross(qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,a,o;$n.subVectors(n,i),ts.subVectors(s,i),xo.subVectors(t,i);let c=$n.dot(xo),h=ts.dot(xo);if(c<=0&&h<=0)return e.copy(i);yo.subVectors(t,n);let l=$n.dot(yo),u=ts.dot(yo);if(l>=0&&u<=l)return e.copy(n);let d=c*u-l*h;if(d<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(i).addScaledVector($n,a);_o.subVectors(t,s);let f=$n.dot(_o),g=ts.dot(_o);if(g>=0&&f<=g)return e.copy(s);let b=f*h-c*g;if(b<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(i).addScaledVector(ts,o);let m=l*g-f*u;if(m<=0&&u-l>=0&&f-g>=0)return ml.subVectors(s,n),o=(u-l)/(u-l+(f-g)),e.copy(n).addScaledVector(ml,o);let p=1/(m+b+d);return a=b*p,o=d*p,e.copy(i).addScaledVector($n,a).addScaledVector(ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Mo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Ut=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ae.workingColorSpace){if(t=Mc(t,1),e=qe(e,0,1),i=qe(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Mo(a,s,t+1/3),this.g=Mo(a,s,t),this.b=Mo(a,s,t-1/3)}return ae.toWorkingColorSpace(this,n),this}setStyle(t,e=_e){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){let i=Mu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}copyLinearToSRGB(t){return this.r=ho(t.r),this.g=ho(t.g),this.b=ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return ae.fromWorkingColorSpace(We.copy(this),t),Math.round(qe(We.r*255,0,255))*65536+Math.round(qe(We.g*255,0,255))*256+Math.round(qe(We.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(We.copy(this),e);let i=We.r,n=We.g,s=We.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,h,l=(o+a)/2;if(o===a)c=0,h=0;else{let u=a-o;switch(h=l<=.5?u/(a+o):u/(2-a-o),a){case i:c=(n-s)/u+(n<s?6:0);break;case n:c=(s-i)/u+2;break;case s:c=(i-n)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=_e){ae.fromWorkingColorSpace(We.copy(this),t);let e=We.r,i=We.g,n=We.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(hn),this.setHSL(hn.h+t,hn.s+e,hn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hn),t.getHSL(Er);let i=qs(hn.h,Er.h,e),n=qs(hn.s,Er.s,e),s=qs(hn.l,Er.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Ut;Ut.NAMES=Mu;var Df=0,di=class extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=fn,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ys,this.blendDst=ko,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fn&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ys&&(i.blendSrc=this.blendSrc),this.blendDst!==ko&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==il&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},je=class extends di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Pe=new E,Sr=new _t,jt=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Bo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ii(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=he(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bo&&(t.usage=this.usage),t}};var _s=class extends jt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ta=class extends jt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oe=class extends jt{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Ff=0,pi=new Ct,wo=new Se,es=new E,ci=new gi,Bs=new gi,Ne=new E,me=class r extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_u(t)?ta:_s)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,i){return pi.makeTranslation(t,e,i),this.applyMatrix4(pi),this}scale(t,e,i){return pi.makeScale(t,e,i),this.applyMatrix4(pi),this}lookAt(t){return wo.lookAt(t),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new E,1/0);return}if(t){let i=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(ci.min,Bs.min),ci.expandByPoint(Ne),Ne.addVectors(ci.max,Bs.max),ci.expandByPoint(Ne)):(ci.expandByPoint(Bs.min),ci.expandByPoint(Bs.max))}ci.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)Ne.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ne));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)Ne.fromBufferAttribute(o,h),c&&(es.fromBufferAttribute(t,h),Ne.add(es)),n=Math.max(n,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,s=e.normal.array,a=e.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,h=[],l=[];for(let S=0;S<o;S++)h[S]=new E,l[S]=new E;let u=new E,d=new E,f=new E,g=new _t,b=new _t,m=new _t,p=new E,x=new E;function v(S,U,O){u.fromArray(n,S*3),d.fromArray(n,U*3),f.fromArray(n,O*3),g.fromArray(a,S*2),b.fromArray(a,U*2),m.fromArray(a,O*2),d.sub(u),f.sub(u),b.sub(g),m.sub(g);let Q=1/(b.x*m.y-m.x*b.y);isFinite(Q)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-b.y).multiplyScalar(Q),x.copy(f).multiplyScalar(b.x).addScaledVector(d,-m.x).multiplyScalar(Q),h[S].add(p),h[U].add(p),h[O].add(p),l[S].add(x),l[U].add(x),l[O].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let S=0,U=_.length;S<U;++S){let O=_[S],Q=O.start,I=O.count;for(let D=Q,k=Q+I;D<k;D+=3)v(i[D+0],i[D+1],i[D+2])}let A=new E,y=new E,w=new E,P=new E;function M(S){w.fromArray(s,S*3),P.copy(w);let U=h[S];A.copy(U),A.sub(w.multiplyScalar(w.dot(U))).normalize(),y.crossVectors(P,U);let Q=y.dot(l[S])<0?-1:1;c[S*4]=A.x,c[S*4+1]=A.y,c[S*4+2]=A.z,c[S*4+3]=Q}for(let S=0,U=_.length;S<U;++S){let O=_[S],Q=O.start,I=O.count;for(let D=Q,k=Q+I;D<k;D+=3)M(i[D+0]),M(i[D+1]),M(i[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new E,s=new E,a=new E,o=new E,c=new E,h=new E,l=new E,u=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),b=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,b),a.fromBufferAttribute(e,m),l.subVectors(a,s),u.subVectors(n,s),l.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,m),o.add(l),c.add(l),h.add(l),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),l.subVectors(a,s),u.subVectors(n,s),l.cross(u),i.setXYZ(d+0,l.x,l.y,l.z),i.setXYZ(d+1,l.x,l.y,l.z),i.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){let h=o.array,l=o.itemSize,u=o.normalized,d=new h.constructor(c.length*l),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*l;for(let p=0;p<l;p++)d[g++]=h[f++]}return new jt(d,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=n[o],h=t(c,i);e.setAttribute(o,h)}let s=this.morphAttributes;for(let o in s){let c=[],h=s[o];for(let l=0,u=h.length;l<u;l++){let d=h[l],f=t(d,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let h=i[c];t.data.attributes[c]=h.toJSON(t.data)}let n={},s=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];l.push(f.toJSON(t.data))}l.length>0&&(n[c]=l,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let h in n){let l=n[h];this.setAttribute(h,l.clone(e))}let s=t.morphAttributes;for(let h in s){let l=[],u=s[h];for(let d=0,f=u.length;d<f;d++)l.push(u[d].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,l=a.length;h<l;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gl=new Ct,Rn=new ys,Ar=new ui,bl=new E,is=new E,ns=new E,ss=new E,Eo=new E,Tr=new E,Rr=new _t,Cr=new _t,Pr=new _t,vl=new E,xl=new E,yl=new E,Lr=new E,Ir=new E,It=class extends Se{constructor(t=new me,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(s&&o){Tr.set(0,0,0);for(let c=0,h=s.length;c<h;c++){let l=o[c],u=s[c];l!==0&&(Eo.fromBufferAttribute(u,t),a?Tr.addScaledVector(Eo,l):Tr.addScaledVector(Eo.sub(e),l))}e.add(Tr)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere),Ar.applyMatrix4(s),Rn.copy(t.ray).recast(t.near),!(Ar.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(Ar,bl)===null||Rn.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(gl.copy(s).invert(),Rn.copy(t.ray).applyMatrix4(gl),!(i.boundingBox!==null&&Rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Rn)))}_computeIntersections(t,e,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,h=s.attributes.uv,l=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,A=v;_<A;_+=3){let y=o.getX(_),w=o.getX(_+1),P=o.getX(_+2);n=Dr(this,p,t,i,h,l,u,y,w,P),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let x=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);n=Dr(this,a,t,i,h,l,u,x,v,_),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,A=v;_<A;_+=3){let y=_,w=_+1,P=_+2;n=Dr(this,p,t,i,h,l,u,y,w,P),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let x=m,v=m+1,_=m+2;n=Dr(this,a,t,i,h,l,u,x,v,_),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Uf(r,t,e,i,n,s,a,o){let c;if(t.side===Oe?c=i.intersectTriangle(a,s,n,!0,o):c=i.intersectTriangle(n,s,a,t.side===hi,o),c===null)return null;Ir.copy(o),Ir.applyMatrix4(r.matrixWorld);let h=e.ray.origin.distanceTo(Ir);return h<e.near||h>e.far?null:{distance:h,point:Ir.clone(),object:r}}function Dr(r,t,e,i,n,s,a,o,c,h){r.getVertexPosition(o,is),r.getVertexPosition(c,ns),r.getVertexPosition(h,ss);let l=Uf(r,t,e,i,is,ns,ss,Lr);if(l){n&&(Rr.fromBufferAttribute(n,o),Cr.fromBufferAttribute(n,c),Pr.fromBufferAttribute(n,h),l.uv=hs.getInterpolation(Lr,is,ns,ss,Rr,Cr,Pr,new _t)),s&&(Rr.fromBufferAttribute(s,o),Cr.fromBufferAttribute(s,c),Pr.fromBufferAttribute(s,h),l.uv1=hs.getInterpolation(Lr,is,ns,ss,Rr,Cr,Pr,new _t),l.uv2=l.uv1),a&&(vl.fromBufferAttribute(a,o),xl.fromBufferAttribute(a,c),yl.fromBufferAttribute(a,h),l.normal=hs.getInterpolation(Lr,is,ns,ss,vl,xl,yl,new E),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));let u={a:o,b:c,c:h,normal:new E,materialIndex:0};hs.getNormal(is,ns,ss,u.normal),l.face=u}return l}var mn=class r extends me{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],h=[],l=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new oe(h,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(u,2));function g(b,m,p,x,v,_,A,y,w,P,M){let S=_/w,U=A/P,O=_/2,Q=A/2,I=y/2,D=w+1,k=P+1,q=0,z=0,N=new E;for(let Z=0;Z<k;Z++){let et=Z*U-Q;for(let $=0;$<D;$++){let G=$*S-O;N[b]=G*x,N[m]=et*v,N[p]=I,h.push(N.x,N.y,N.z),N[b]=0,N[m]=0,N[p]=y>0?1:-1,l.push(N.x,N.y,N.z),u.push($/w),u.push(1-Z/P),q+=1}}for(let Z=0;Z<P;Z++)for(let et=0;et<w;et++){let $=d+et+D*Z,G=d+et+D*(Z+1),B=d+(et+1)+D*(Z+1),j=d+(et+1)+D*Z;c.push($,G,j),c.push(G,B,j),z+=6}o.addGroup(f,z,M),f+=z,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ms(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Qe(r){let t={};for(let e=0;e<r.length;e++){let i=Ms(r[e]);for(let n in i)t[n]=i[n]}return t}function kf(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function wu(r){return r.getRenderTarget()===null?r.outputColorSpace:ae.workingColorSpace}var Nf={clone:Ms,merge:Qe},Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,se=class extends di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=Bf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ea=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Qi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ie=class extends ea{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;s+=a.offsetX*n/c,e-=a.offsetY*i/h,n*=a.width/c,i*=a.height/h}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},rs=-90,as=1,Wo=class extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ie(rs,as,t,e);n.layers=this.layers,this.add(n);let s=new Ie(rs,as,t,e);s.layers=this.layers,this.add(s);let a=new Ie(rs,as,t,e);a.layers=this.layers,this.add(a);let o=new Ie(rs,as,t,e);o.layers=this.layers,this.add(o);let c=new Ie(rs,as,t,e);c.layers=this.layers,this.add(c);let h=new Ie(rs,as,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,c]=e;for(let h of e)this.remove(h);if(t===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,h,l]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,h),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,n),t.render(e,l),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ia=class extends Xe{constructor(t,e,i,n,s,a,o,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,i,n,s,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qo=class extends xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(Xs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Fn?_e:mi),this.texture=new ia(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qt}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new mn(5,5,5),s=new se({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Oe,blending:dn});s.uniforms.tEquirect.value=e;let a=new It(n,s),o=e.minFilter;return e.minFilter===ti&&(e.minFilter=Qt),new Wo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}},So=new E,zf=new E,Hf=new Zt,Ki=class{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=So.subVectors(i,e).cross(zf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(So),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Hf.getNormalMatrix(t),n=this.coplanarPoint(So).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cn=new ui,Fr=new E,Js=class{constructor(t=new Ki,e=new Ki,i=new Ki,n=new Ki,s=new Ki,a=new Ki){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qi){let i=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],c=n[3],h=n[4],l=n[5],u=n[6],d=n[7],f=n[8],g=n[9],b=n[10],m=n[11],p=n[12],x=n[13],v=n[14],_=n[15];if(i[0].setComponents(c-s,d-h,m-f,_-p).normalize(),i[1].setComponents(c+s,d+h,m+f,_+p).normalize(),i[2].setComponents(c+a,d+l,m+g,_+x).normalize(),i[3].setComponents(c-a,d-l,m-g,_-x).normalize(),i[4].setComponents(c-o,d-u,m-b,_-v).normalize(),e===Qi)i[5].setComponents(c+o,d+u,m+b,_+v).normalize();else if(e===Yr)i[5].setComponents(o,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Fr.x=n.normal.x>0?t.max.x:t.min.x,Fr.y=n.normal.y>0?t.max.y:t.min.y,Fr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Eu(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Vf(r,t){let e=t.isWebGL2,i=new WeakMap;function n(h,l){let u=h.array,d=h.usage,f=u.byteLength,g=r.createBuffer();r.bindBuffer(l,g),r.bufferData(l,u,d),h.onUploadCallback();let b;if(u instanceof Float32Array)b=r.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)b=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)b=r.SHORT;else if(u instanceof Uint32Array)b=r.UNSIGNED_INT;else if(u instanceof Int32Array)b=r.INT;else if(u instanceof Int8Array)b=r.BYTE;else if(u instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:b,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:f}}function s(h,l,u){let d=l.array,f=l._updateRange,g=l.updateRanges;if(r.bindBuffer(u,h),f.count===-1&&g.length===0&&r.bufferSubData(u,0,d),g.length!==0){for(let b=0,m=g.length;b<m;b++){let p=g[b];e?r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}l.clearUpdateRanges()}f.count!==-1&&(e?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),l.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let l=i.get(h);l&&(r.deleteBuffer(l.buffer),i.delete(h))}function c(h,l){if(h.isGLBufferAttribute){let d=i.get(h);(!d||d.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let u=i.get(h);if(u===void 0)i.set(h,n(h,l));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,h,l),u.version=h.version}}return{get:a,remove:o,update:c}}var Ai=class r extends me{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(n),h=o+1,l=c+1,u=t/o,d=e/c,f=[],g=[],b=[],m=[];for(let p=0;p<l;p++){let x=p*d-a;for(let v=0;v<h;v++){let _=v*u-s;g.push(_,-x,0),b.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let v=x+h*p,_=x+h*(p+1),A=x+1+h*(p+1),y=x+1+h*p;f.push(v,_,y),f.push(_,A,y)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(b,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Gf=`#ifdef USE_ALPHAHASH
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
#endif`,qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yf=`#ifdef USE_ALPHATEST
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
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
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
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ip=`#ifdef USE_IRIDESCENCE
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
#endif`,np=`#ifdef USE_BUMPMAP
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dp=`#define PI 3.141592653589793
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
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pp=`vec3 transformedNormal = objectNormal;
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
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`
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
}`,_p=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
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
}`,Lp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
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
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Vp=`struct PhysicalMaterial {
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
}`,Gp=`
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$p=`#if defined( USE_POINTS_UV )
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
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`#ifdef USE_MORPHTARGETS
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
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
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
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tm=`float getShadowMask() {
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
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
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
}`,Km=`#if DEPTH_PACKING == 3200
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
}`,Zm=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
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
}`,e0=`uniform vec3 diffuse;
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
}`,i0=`#include <common>
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
}`,n0=`uniform vec3 diffuse;
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define LAMBERT
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
}`,a0=`#define MATCAP
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
}`,o0=`#define MATCAP
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
}`,c0=`#define NORMAL
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
}`,h0=`#define NORMAL
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
}`,l0=`#define PHONG
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
}`,u0=`#define PHONG
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
}`,d0=`#define STANDARD
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
}`,f0=`#define STANDARD
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
}`,p0=`#define TOON
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
}`,m0=`#define TOON
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
}`,g0=`uniform float size;
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
}`,b0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,x0=`uniform vec3 color;
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
}`,y0=`uniform float rotation;
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
}`,_0=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Gf,alphahash_pars_fragment:Wf,alphamap_fragment:qf,alphamap_pars_fragment:Xf,alphatest_fragment:jf,alphatest_pars_fragment:Yf,aomap_fragment:Kf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:$f,beginnormal_vertex:tp,bsdfs:ep,iridescence_fragment:ip,bumpmap_pars_fragment:np,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:ap,clipping_planes_vertex:op,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:lp,color_vertex:up,common:dp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:bp,emissivemap_pars_fragment:vp,colorspace_fragment:xp,colorspace_pars_fragment:yp,envmap_fragment:_p,envmap_common_pars_fragment:Mp,envmap_pars_fragment:wp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:kp,envmap_vertex:Sp,fog_vertex:Ap,fog_pars_vertex:Tp,fog_fragment:Rp,fog_pars_fragment:Cp,gradientmap_pars_fragment:Pp,lightmap_fragment:Lp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Fp,lights_pars_begin:Up,lights_toon_fragment:Np,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:zp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Gp,lights_fragment_maps:Wp,lights_fragment_end:qp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Kp,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:Qp,map_particle_pars_fragment:$p,metalnessmap_fragment:tm,metalnessmap_pars_fragment:em,morphcolor_vertex:im,morphnormal_vertex:nm,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:am,normal_fragment_maps:om,normal_pars_fragment:cm,normal_pars_vertex:hm,normal_vertex:lm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:bm,premultiplied_alpha_fragment:vm,project_vertex:xm,dithering_fragment:ym,dithering_pars_fragment:_m,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Sm,shadowmap_vertex:Am,shadowmask_pars_fragment:Tm,skinbase_vertex:Rm,skinning_pars_vertex:Cm,skinning_vertex:Pm,skinnormal_vertex:Lm,specularmap_fragment:Im,specularmap_pars_fragment:Dm,tonemapping_fragment:Fm,tonemapping_pars_fragment:Um,transmission_fragment:km,transmission_pars_fragment:Nm,uv_pars_fragment:Om,uv_pars_vertex:Bm,uv_vertex:zm,worldpos_vertex:Hm,background_vert:Vm,background_frag:Gm,backgroundCube_vert:Wm,backgroundCube_frag:qm,cube_vert:Xm,cube_frag:jm,depth_vert:Ym,depth_frag:Km,distanceRGBA_vert:Zm,distanceRGBA_frag:Jm,equirect_vert:Qm,equirect_frag:$m,linedashed_vert:t0,linedashed_frag:e0,meshbasic_vert:i0,meshbasic_frag:n0,meshlambert_vert:s0,meshlambert_frag:r0,meshmatcap_vert:a0,meshmatcap_frag:o0,meshnormal_vert:c0,meshnormal_frag:h0,meshphong_vert:l0,meshphong_frag:u0,meshphysical_vert:d0,meshphysical_frag:f0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:b0,shadow_vert:v0,shadow_frag:x0,sprite_vert:y0,sprite_frag:_0},ft={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Li={basic:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Qe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Qe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Ut(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Qe([ft.points,ft.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Qe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Qe([ft.common,ft.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Qe([ft.sprite,ft.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Qe([ft.common,ft.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Qe([ft.lights,ft.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Li.physical={uniforms:Qe([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Ur={r:0,b:0,g:0};function M0(r,t,e,i,n,s,a){let o=new Ut(0),c=s===!0?0:1,h,l,u=null,d=0,f=null;function g(m,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?b(o,c):v&&v.isColor&&(b(v,1),x=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ma)?(l===void 0&&(l=new It(new mn(1,1,1),new se({name:"BackgroundCubeMaterial",uniforms:Ms(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ae.getTransfer(v.colorSpace)!==ge,(u!==v||d!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new It(new Ai(2,2),new se({name:"BackgroundMaterial",uniforms:Ms(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ae.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function b(m,p){m.getRGB(Ur,wu(r)),i.buffers.color.setClear(Ur.r,Ur.g,Ur.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,b(o,c)},render:g}}function w0(r,t,e,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=m(null),h=c,l=!1;function u(I,D,k,q,z){let N=!1;if(a){let Z=b(q,k,D);h!==Z&&(h=Z,f(h.object)),N=p(I,q,k,z),N&&x(I,q,k,z)}else{let Z=D.wireframe===!0;(h.geometry!==q.id||h.program!==k.id||h.wireframe!==Z)&&(h.geometry=q.id,h.program=k.id,h.wireframe=Z,N=!0)}z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(N||l)&&(l=!1,P(I,D,k,q),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(I){return i.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function b(I,D,k){let q=k.wireframe===!0,z=o[I.id];z===void 0&&(z={},o[I.id]=z);let N=z[D.id];N===void 0&&(N={},z[D.id]=N);let Z=N[q];return Z===void 0&&(Z=m(d()),N[q]=Z),Z}function m(I){let D=[],k=[],q=[];for(let z=0;z<n;z++)D[z]=0,k[z]=0,q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:q,object:I,attributes:{},index:null}}function p(I,D,k,q){let z=h.attributes,N=D.attributes,Z=0,et=k.getAttributes();for(let $ in et)if(et[$].location>=0){let B=z[$],j=N[$];if(j===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),B===void 0||B.attribute!==j||j&&B.data!==j.data)return!0;Z++}return h.attributesNum!==Z||h.index!==q}function x(I,D,k,q){let z={},N=D.attributes,Z=0,et=k.getAttributes();for(let $ in et)if(et[$].location>=0){let B=N[$];B===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(B=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(B=I.instanceColor));let j={};j.attribute=B,B&&B.data&&(j.data=B.data),z[$]=j,Z++}h.attributes=z,h.attributesNum=Z,h.index=q}function v(){let I=h.newAttributes;for(let D=0,k=I.length;D<k;D++)I[D]=0}function _(I){A(I,0)}function A(I,D){let k=h.newAttributes,q=h.enabledAttributes,z=h.attributeDivisors;k[I]=1,q[I]===0&&(r.enableVertexAttribArray(I),q[I]=1),z[I]!==D&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,D),z[I]=D)}function y(){let I=h.newAttributes,D=h.enabledAttributes;for(let k=0,q=D.length;k<q;k++)D[k]!==I[k]&&(r.disableVertexAttribArray(k),D[k]=0)}function w(I,D,k,q,z,N,Z){Z===!0?r.vertexAttribIPointer(I,D,k,z,N):r.vertexAttribPointer(I,D,k,q,z,N)}function P(I,D,k,q){if(i.isWebGL2===!1&&(I.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let z=q.attributes,N=k.getAttributes(),Z=D.defaultAttributeValues;for(let et in N){let $=N[et];if($.location>=0){let G=z[et];if(G===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let B=G.normalized,j=G.itemSize,ut=e.get(G);if(ut===void 0)continue;let st=ut.buffer,at=ut.type,lt=ut.bytesPerElement,ht=i.isWebGL2===!0&&(at===r.INT||at===r.UNSIGNED_INT||G.gpuType===lu);if(G.isInterleavedBufferAttribute){let Rt=G.data,V=Rt.stride,ne=G.offset;if(Rt.isInstancedInterleavedBuffer){for(let wt=0;wt<$.locationSize;wt++)A($.location+wt,Rt.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let wt=0;wt<$.locationSize;wt++)_($.location+wt);r.bindBuffer(r.ARRAY_BUFFER,st);for(let wt=0;wt<$.locationSize;wt++)w($.location+wt,j/$.locationSize,at,B,V*lt,(ne+j/$.locationSize*wt)*lt,ht)}else{if(G.isInstancedBufferAttribute){for(let Rt=0;Rt<$.locationSize;Rt++)A($.location+Rt,G.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Rt=0;Rt<$.locationSize;Rt++)_($.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,st);for(let Rt=0;Rt<$.locationSize;Rt++)w($.location+Rt,j/$.locationSize,at,B,j*lt,j/$.locationSize*Rt*lt,ht)}}else if(Z!==void 0){let B=Z[et];if(B!==void 0)switch(B.length){case 2:r.vertexAttrib2fv($.location,B);break;case 3:r.vertexAttrib3fv($.location,B);break;case 4:r.vertexAttrib4fv($.location,B);break;default:r.vertexAttrib1fv($.location,B)}}}}y()}function M(){O();for(let I in o){let D=o[I];for(let k in D){let q=D[k];for(let z in q)g(q[z].object),delete q[z];delete D[k]}delete o[I]}}function S(I){if(o[I.id]===void 0)return;let D=o[I.id];for(let k in D){let q=D[k];for(let z in q)g(q[z].object),delete q[z];delete D[k]}delete o[I.id]}function U(I){for(let D in o){let k=o[D];if(k[I.id]===void 0)continue;let q=k[I.id];for(let z in q)g(q[z].object),delete q[z];delete k[I.id]}}function O(){Q(),l=!0,h!==c&&(h=c,f(h.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:O,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:_,disableUnusedAttributes:y}}function E0(r,t,e,i){let n=i.isWebGL2,s;function a(l){s=l}function o(l,u){r.drawArrays(s,l,u),e.update(u,s,1)}function c(l,u,d){if(d===0)return;let f,g;if(n)f=r,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,l,u,d),e.update(u,s,d)}function h(l,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(l[g],u[g]);else{f.multiDrawArraysWEBGL(s,l,0,u,0,d);let g=0;for(let b=0;b<d;b++)g+=u[b];e.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function S0(r,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let h=a||t.has("WEBGL_draw_buffers"),l=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),b=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,_=a||t.has("OES_texture_float"),A=v&&_,y=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:A,maxSamples:y}}function A0(r){let t=this,e=null,i=0,n=!1,s=!1,a=new Ki,o=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=l(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?l(null):h();else{let x=s?0:i,v=x*4,_=p.clippingState||null;c.value=_,_=l(g,d,v,f);for(let A=0;A!==v;++A)_[A]=e[A];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function l(u,d,f,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==b;++v,_+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}function T0(r){let t=new WeakMap;function e(a,o){return o===No?a.mapping=ms:o===Oo&&(a.mapping=gs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===No||o===Oo)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new qo(c.height/2);return h.fromEquirectangularTexture(r,a),t.set(a,h),a.addEventListener("dispose",n),e(h.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var ii=class extends ea{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,a=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ls=4,_l=[.125,.215,.35,.446,.526,.582],Ln=20,Ao=new ii,Ml=new Ut,To=null,Ro=0,Co=0,Pn=(1+Math.sqrt(5))/2,os=1/Pn,wl=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,Pn,os),new E(0,Pn,-os),new E(os,0,Pn),new E(-os,0,Pn),new E(Pn,os,0),new E(-Pn,os,0)],ws=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){To=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(To,Ro,Co),t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:$i,format:le,colorSpace:Re,depthBuffer:!1},n=El(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R0(s)),this._blurMaterial=C0(s,t,e)}return n}_compileMaterial(t){let e=new It(this._lodPlanes[0],t);this._renderer.compile(e,Ao)}_sceneToCubeUV(t,e,i,n){let o=new Ie(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(Ml),l.toneMapping=Di,l.autoClear=!1;let f=new je({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new It(new mn,f),b=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,b=!0):(f.color.copy(Ml),b=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(h[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,h[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,h[p]));let v=this._cubeSize;kr(n,x*v,p>2?v:0,v,v),l.setRenderTarget(n),b&&l.render(g,o),l.render(t,o)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=d,l.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===ms||t.mapping===gs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Al()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;kr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Ao)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=wl[(n-1)%wl.length];this._blur(t,n-1,n,s,a)}e.autoClear=i}_blur(t,e,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new It(this._lodPlanes[n],h),d=h.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ln-1),b=s/g,m=isFinite(s)?1+Math.floor(l*b):Ln;m>Ln&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ln}`);let p=[],x=0;for(let w=0;w<Ln;++w){let P=w/b,M=Math.exp(-P*P/2);p.push(M),w===0?x+=M:w<m&&(x+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let _=this._sizeLods[n],A=3*_*(n>v-ls?n-v+ls:0),y=4*(this._cubeSize-_);kr(e,A,y,3*_,2*_),c.setRenderTarget(e),c.render(u,Ao)}};function R0(r){let t=[],e=[],i=[],n=r,s=r-ls+1+_l.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let c=1/o;a>r-ls?c=_l[a-r+ls-1]:a===0&&(c=0),i.push(c);let h=1/(o-2),l=-h,u=1+h,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,g=6,b=3,m=2,p=1,x=new Float32Array(b*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let y=0;y<f;y++){let w=y%3*2/3-1,P=y>2?0:-1,M=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(M,b*g*y),v.set(d,m*g*y);let S=[y,y,y,y,y,y];_.set(S,p*g*y)}let A=new me;A.setAttribute("position",new jt(x,b)),A.setAttribute("uv",new jt(v,m)),A.setAttribute("faceIndex",new jt(_,p)),t.push(A),n>ls&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function El(r,t,e){let i=new xe(r,t,e);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kr(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function C0(r,t,e){let i=new Float32Array(Ln),n=new E(0,1,0);return new se({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:wc(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Sl(){return new se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Al(){return new se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}function P0(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let c=o.mapping,h=c===No||c===Oo,l=c===ms||c===gs;if(h||l)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new ws(r)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(h&&u&&u.height>0||l&&u&&n(u)){e===null&&(e=new ws(r));let d=h?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function n(o){let c=0,h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function s(o){let c=o.target;c.removeEventListener("dispose",s);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function L0(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function I0(r,t,e,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let b=d.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)t.remove(b[m])}d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let b=f[g];for(let m=0,p=b.length;m<p;m++)t.update(b[m],r.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,g=u.attributes.position,b=0;if(f!==null){let x=f.array;b=f.version;for(let v=0,_=x.length;v<_;v+=3){let A=x[v+0],y=x[v+1],w=x[v+2];d.push(A,y,y,w,w,A)}}else if(g!==void 0){let x=g.array;b=g.version;for(let v=0,_=x.length/3-1;v<_;v+=3){let A=v+0,y=v+1,w=v+2;d.push(A,y,y,w,w,A)}}else return;let m=new(_u(d)?ta:_s)(d,1);m.version=b;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function l(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:l}}function D0(r,t,e,i){let n=i.isWebGL2,s;function a(f){s=f}let o,c;function h(f){o=f.type,c=f.bytesPerElement}function l(f,g){r.drawElements(s,g,o,f*c),e.update(g,s,1)}function u(f,g,b){if(b===0)return;let m,p;if(n)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,o,f*c,b),e.update(g,s,b)}function d(f,g,b){if(b===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<b;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,o,f,0,b);let p=0;for(let x=0;x<b;x++)p+=g[x];e.update(p,s,1)}}this.setMode=a,this.setIndex=h,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function F0(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function U0(r,t){return r[0]-t[0]}function k0(r,t){return Math.abs(t[1])-Math.abs(r[1])}function N0(r,t,e){let i={},n=new Float32Array(8),s=new WeakMap,a=new ie,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,l,u){let d=h.morphTargetInfluences;if(t.isWebGL2===!0){let f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=f!==void 0?f.length:0,b=s.get(l);if(b===void 0||b.count!==g){let I=function(){O.dispose(),s.delete(l),l.removeEventListener("dispose",I)};b!==void 0&&b.texture.dispose();let x=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,_=l.morphAttributes.color!==void 0,A=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],w=l.morphAttributes.color||[],P=0;x===!0&&(P=1),v===!0&&(P=2),_===!0&&(P=3);let M=l.attributes.position.count*P,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let U=new Float32Array(M*S*4*g),O=new Qr(U,M,S,g);O.type=Ji,O.needsUpdate=!0;let Q=P*4;for(let D=0;D<g;D++){let k=A[D],q=y[D],z=w[D],N=M*S*4*D;for(let Z=0;Z<k.count;Z++){let et=Z*Q;x===!0&&(a.fromBufferAttribute(k,Z),U[N+et+0]=a.x,U[N+et+1]=a.y,U[N+et+2]=a.z,U[N+et+3]=0),v===!0&&(a.fromBufferAttribute(q,Z),U[N+et+4]=a.x,U[N+et+5]=a.y,U[N+et+6]=a.z,U[N+et+7]=0),_===!0&&(a.fromBufferAttribute(z,Z),U[N+et+8]=a.x,U[N+et+9]=a.y,U[N+et+10]=a.z,U[N+et+11]=z.itemSize===4?a.w:1)}}b={count:g,texture:O,size:new _t(M,S)},s.set(l,b),l.addEventListener("dispose",I)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];let p=l.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",p),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",b.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",b.size)}else{let f=d===void 0?0:d.length,g=i[l.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];i[l.id]=g}for(let v=0;v<f;v++){let _=g[v];_[0]=v,_[1]=d[v]}g.sort(k0);for(let v=0;v<8;v++)v<f&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(U0);let b=l.morphAttributes.position,m=l.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let _=o[v],A=_[0],y=_[1];A!==Number.MAX_SAFE_INTEGER&&y?(b&&l.getAttribute("morphTarget"+v)!==b[A]&&l.setAttribute("morphTarget"+v,b[A]),m&&l.getAttribute("morphNormal"+v)!==m[A]&&l.setAttribute("morphNormal"+v,m[A]),n[v]=y,p+=y):(b&&l.hasAttribute("morphTarget"+v)===!0&&l.deleteAttribute("morphTarget"+v),m&&l.hasAttribute("morphNormal"+v)===!0&&l.deleteAttribute("morphNormal"+v),n[v]=0)}let x=l.morphTargetsRelative?1:1-p;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:c}}function O0(r,t,e,i){let n=new WeakMap;function s(c){let h=i.render.frame,l=c.geometry,u=t.get(c,l);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;n.get(d)!==h&&(d.update(),n.set(d,h))}return u}function a(){n=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:a}}var kn=class extends Xe{constructor(t,e,i,n,s,a,o,c,h,l){if(l=l!==void 0?l:Dn,l!==Dn&&l!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===Dn&&(i=ln),i===void 0&&l===bs&&(i=In),super(null,n,s,a,o,c,l,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ee,this.minFilter=c!==void 0?c:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Su=new Xe,Au=new kn(1,1);Au.compareFunction=yu;var Tu=new Qr,Ru=new Go,Cu=new ia,Tl=[],Rl=[],Cl=new Float32Array(16),Pl=new Float32Array(9),Ll=new Float32Array(4);function Rs(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Tl[n];if(s===void 0&&(s=new Float32Array(n),Tl[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function De(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Fe(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function va(r,t){let e=Rl[t];e===void 0&&(e=new Int32Array(t),Rl[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function B0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function z0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;r.uniform2fv(this.addr,t),Fe(e,t)}}function H0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;r.uniform3fv(this.addr,t),Fe(e,t)}}function V0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;r.uniform4fv(this.addr,t),Fe(e,t)}}function G0(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(De(e,i))return;Ll.set(i),r.uniformMatrix2fv(this.addr,!1,Ll),Fe(e,i)}}function W0(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(De(e,i))return;Pl.set(i),r.uniformMatrix3fv(this.addr,!1,Pl),Fe(e,i)}}function q0(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(De(e,i))return;Cl.set(i),r.uniformMatrix4fv(this.addr,!1,Cl),Fe(e,i)}}function X0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function j0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;r.uniform2iv(this.addr,t),Fe(e,t)}}function Y0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;r.uniform3iv(this.addr,t),Fe(e,t)}}function K0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;r.uniform4iv(this.addr,t),Fe(e,t)}}function Z0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function J0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;r.uniform2uiv(this.addr,t),Fe(e,t)}}function Q0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;r.uniform3uiv(this.addr,t),Fe(e,t)}}function $0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;r.uniform4uiv(this.addr,t),Fe(e,t)}}function tg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?Au:Su;e.setTexture2D(t||s,n)}function eg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ru,n)}function ig(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Cu,n)}function ng(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Tu,n)}function sg(r){switch(r){case 5126:return B0;case 35664:return z0;case 35665:return H0;case 35666:return V0;case 35674:return G0;case 35675:return W0;case 35676:return q0;case 5124:case 35670:return X0;case 35667:case 35671:return j0;case 35668:case 35672:return Y0;case 35669:case 35673:return K0;case 5125:return Z0;case 36294:return J0;case 36295:return Q0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return ng}}function rg(r,t){r.uniform1fv(this.addr,t)}function ag(r,t){let e=Rs(t,this.size,2);r.uniform2fv(this.addr,e)}function og(r,t){let e=Rs(t,this.size,3);r.uniform3fv(this.addr,e)}function cg(r,t){let e=Rs(t,this.size,4);r.uniform4fv(this.addr,e)}function hg(r,t){let e=Rs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function lg(r,t){let e=Rs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ug(r,t){let e=Rs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function dg(r,t){r.uniform1iv(this.addr,t)}function fg(r,t){r.uniform2iv(this.addr,t)}function pg(r,t){r.uniform3iv(this.addr,t)}function mg(r,t){r.uniform4iv(this.addr,t)}function gg(r,t){r.uniform1uiv(this.addr,t)}function bg(r,t){r.uniform2uiv(this.addr,t)}function vg(r,t){r.uniform3uiv(this.addr,t)}function xg(r,t){r.uniform4uiv(this.addr,t)}function yg(r,t,e){let i=this.cache,n=t.length,s=va(e,n);De(i,s)||(r.uniform1iv(this.addr,s),Fe(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Su,s[a])}function _g(r,t,e){let i=this.cache,n=t.length,s=va(e,n);De(i,s)||(r.uniform1iv(this.addr,s),Fe(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Ru,s[a])}function Mg(r,t,e){let i=this.cache,n=t.length,s=va(e,n);De(i,s)||(r.uniform1iv(this.addr,s),Fe(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Cu,s[a])}function wg(r,t,e){let i=this.cache,n=t.length,s=va(e,n);De(i,s)||(r.uniform1iv(this.addr,s),Fe(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Tu,s[a])}function Eg(r){switch(r){case 5126:return rg;case 35664:return ag;case 35665:return og;case 35666:return cg;case 35674:return hg;case 35675:return lg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return bg;case 36295:return vg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return wg}}var Xo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=sg(e.type)}},jo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Eg(e.type)}},Yo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(t,e[o.id],i)}}},Po=/(\w+)(\])?(\[|\.)?/g;function Il(r,t){r.seq.push(t),r.map[t.id]=t}function Sg(r,t,e){let i=r.name,n=i.length;for(Po.lastIndex=0;;){let s=Po.exec(i),a=Po.lastIndex,o=s[1],c=s[2]==="]",h=s[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===n){Il(e,h===void 0?new Xo(o,r,t):new jo(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new Yo(o),Il(e,u)),e=u}}}var fs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);Sg(s,a,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Dl(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var Ag=37297,Tg=0;function Rg(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Cg(r){let t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(r),i;switch(t===e?i="":t===jr&&e===Xr?i="LinearDisplayP3ToLinearSRGB":t===Xr&&e===jr&&(i="LinearSRGBToLinearDisplayP3"),r){case Re:case ba:return[i,"LinearTransferOETF"];case _e:case _c:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Fl(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+Rg(r.getShaderSource(t),a)}else return n}function Pg(r,t){let e=Cg(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Lg(r,t){let e;switch(t){case Fd:e="Linear";break;case Ud:e="Reinhard";break;case kd:e="OptimizedCineon";break;case Nd:e="ACESFilmic";break;case Bd:e="AgX";break;case Od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ig(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join(`
`)}function Dg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(us).join(`
`)}function Fg(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ug(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function us(r){return r!==""}function Ul(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(r){return r.replace(kg,Og)}var Ng=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Og(r,t){let e=qt[t];if(e===void 0){let i=Ng.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ko(e)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(r){return r.replace(Bg,zg)}function zg(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ol(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ou?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ud?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Yi&&(t="SHADOWMAP_TYPE_VSM"),t}function Vg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function Wg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case cu:t="ENVMAP_BLENDING_MULTIPLY";break;case Id:t="ENVMAP_BLENDING_MIX";break;case Dd:t="ENVMAP_BLENDING_ADD";break}return t}function qg(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Xg(r,t,e,i){let n=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Hg(e),h=Vg(e),l=Gg(e),u=Wg(e),d=qg(e),f=e.isWebGL2?"":Ig(e),g=Dg(e),b=Fg(s),m=n.createProgram(),p,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(us).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(us).join(`
`),x.length>0&&(x+=`
`)):(p=[Ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),x=[f,Ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?qt.tonemapping_pars_fragment:"",e.toneMapping!==Di?Lg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Pg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(us).join(`
`)),a=Ko(a),a=Ul(a,e),a=kl(a,e),o=Ko(o),o=Ul(o,e),o=kl(o,e),a=Nl(a),o=Nl(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let _=v+p+a,A=v+x+o,y=Dl(n,n.VERTEX_SHADER,_),w=Dl(n,n.FRAGMENT_SHADER,A);n.attachShader(m,y),n.attachShader(m,w),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function P(O){if(r.debug.checkShaderErrors){let Q=n.getProgramInfoLog(m).trim(),I=n.getShaderInfoLog(y).trim(),D=n.getShaderInfoLog(w).trim(),k=!0,q=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,y,w);else{let z=Fl(n,y,"vertex"),N=Fl(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+z+`
`+N)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(I===""||D==="")&&(q=!1);q&&(O.diagnostics={runnable:k,programLog:Q,vertexShader:{log:I,prefix:p},fragmentShader:{log:D,prefix:x}})}n.deleteShader(y),n.deleteShader(w),M=new fs(n,m),S=Ug(n,m)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=n.getProgramParameter(m,Ag)),U},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=w,this}var jg=0,Zo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Jo(t),e.set(t,i)),i}},Jo=class{constructor(t){this.id=jg++,this.code=t,this.usedTimes=0}};function Yg(r,t,e,i,n,s,a){let o=new $r,c=new Zo,h=[],l=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return M===0?"uv":`uv${M}`}function m(M,S,U,O,Q){let I=O.fog,D=Q.geometry,k=M.isMeshStandardMaterial?O.environment:null,q=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),z=q&&q.mapping===ma?q.image.height:null,N=g[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let Z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,et=Z!==void 0?Z.length:0,$=0;D.morphAttributes.position!==void 0&&($=1),D.morphAttributes.normal!==void 0&&($=2),D.morphAttributes.color!==void 0&&($=3);let G,B,j,ut;if(N){let Ke=Li[N];G=Ke.vertexShader,B=Ke.fragmentShader}else G=M.vertexShader,B=M.fragmentShader,c.update(M),j=c.getVertexShaderID(M),ut=c.getFragmentShaderID(M);let st=r.getRenderTarget(),at=Q.isInstancedMesh===!0,lt=Q.isBatchedMesh===!0,ht=!!M.map,Rt=!!M.matcap,V=!!q,ne=!!M.aoMap,wt=!!M.lightMap,Lt=!!M.bumpMap,xt=!!M.normalMap,$t=!!M.displacementMap,Pt=!!M.emissiveMap,L=!!M.metalnessMap,T=!!M.roughnessMap,X=M.anisotropy>0,ot=M.clearcoat>0,nt=M.iridescence>0,ct=M.sheen>0,At=M.transmission>0,gt=X&&!!M.anisotropyMap,W=ot&&!!M.clearcoatMap,Mt=ot&&!!M.clearcoatNormalMap,Ot=ot&&!!M.clearcoatRoughnessMap,rt=nt&&!!M.iridescenceMap,re=nt&&!!M.iridescenceThicknessMap,Jt=ct&&!!M.sheenColorMap,zt=ct&&!!M.sheenRoughnessMap,Dt=!!M.specularMap,Et=!!M.specularColorMap,Wt=!!M.specularIntensityMap,ce=At&&!!M.transmissionMap,Me=At&&!!M.thicknessMap,Yt=!!M.gradientMap,dt=!!M.alphaMap,F=M.alphaTest>0,bt=!!M.alphaHash,vt=!!M.extensions,Nt=!!D.attributes.uv1,Ft=!!D.attributes.uv2,ue=!!D.attributes.uv3,de=Di;return M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(de=r.toneMapping),{isWebGL2:l,shaderID:N,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:B,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:ut,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:lt,instancing:at,instancingColor:at&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Re,map:ht,matcap:Rt,envMap:V,envMapMode:V&&q.mapping,envMapCubeUVHeight:z,aoMap:ne,lightMap:wt,bumpMap:Lt,normalMap:xt,displacementMap:d&&$t,emissiveMap:Pt,normalMapObjectSpace:xt&&M.normalMapType===Qd,normalMapTangentSpace:xt&&M.normalMapType===xu,metalnessMap:L,roughnessMap:T,anisotropy:X,anisotropyMap:gt,clearcoat:ot,clearcoatMap:W,clearcoatNormalMap:Mt,clearcoatRoughnessMap:Ot,iridescence:nt,iridescenceMap:rt,iridescenceThicknessMap:re,sheen:ct,sheenColorMap:Jt,sheenRoughnessMap:zt,specularMap:Dt,specularColorMap:Et,specularIntensityMap:Wt,transmission:At,transmissionMap:ce,thicknessMap:Me,gradientMap:Yt,opaque:M.transparent===!1&&M.blending===fn,alphaMap:dt,alphaTest:F,alphaHash:bt,combine:M.combine,mapUv:ht&&b(M.map.channel),aoMapUv:ne&&b(M.aoMap.channel),lightMapUv:wt&&b(M.lightMap.channel),bumpMapUv:Lt&&b(M.bumpMap.channel),normalMapUv:xt&&b(M.normalMap.channel),displacementMapUv:$t&&b(M.displacementMap.channel),emissiveMapUv:Pt&&b(M.emissiveMap.channel),metalnessMapUv:L&&b(M.metalnessMap.channel),roughnessMapUv:T&&b(M.roughnessMap.channel),anisotropyMapUv:gt&&b(M.anisotropyMap.channel),clearcoatMapUv:W&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:zt&&b(M.sheenRoughnessMap.channel),specularMapUv:Dt&&b(M.specularMap.channel),specularColorMapUv:Et&&b(M.specularColorMap.channel),specularIntensityMapUv:Wt&&b(M.specularIntensityMap.channel),transmissionMapUv:ce&&b(M.transmissionMap.channel),thicknessMapUv:Me&&b(M.thicknessMap.channel),alphaMapUv:dt&&b(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(xt||X),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:Nt,vertexUv2s:Ft,vertexUv3s:ue,pointsUvs:Q.isPoints===!0&&!!D.attributes.uv&&(ht||dt),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Q.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:$,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:de,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ht&&M.map.isVideoTexture===!0&&ae.getTransfer(M.map.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Le,flipSided:M.side===Oe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:vt&&M.extensions.derivatives===!0,extensionFragDepth:vt&&M.extensions.fragDepth===!0,extensionDrawBuffers:vt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:vt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:vt&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let U in M.defines)S.push(U),S.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(x(S,M),v(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function _(M){let S=g[M.type],U;if(S){let O=Li[S];U=Nf.clone(O.uniforms)}else U=M.uniforms;return U}function A(M,S){let U;for(let O=0,Q=h.length;O<Q;O++){let I=h[O];if(I.cacheKey===S){U=I,++U.usedTimes;break}}return U===void 0&&(U=new Xg(r,S,M,s),h.push(U)),U}function y(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:y,releaseShaderCache:w,programs:h,dispose:P}}function Kg(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function Zg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Bl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zl(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,g,b,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),t++,p}function o(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function c(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||Zg),i.length>1&&i.sort(d||Bl),n.length>1&&n.sort(d||Bl)}function l(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:c,finish:l,sort:h}}function Jg(){let r=new WeakMap;function t(i,n){let s=r.get(i),a;return s===void 0?(a=new zl,r.set(i,[a])):n>=s.length?(a=new zl,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Qg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Ut};break;case"SpotLight":e={position:new E,direction:new E,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new E,halfWidth:new E,halfHeight:new E};break}return r[t.id]=e,e}}}function $g(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var tb=0;function eb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ib(r,t){let e=new Qg,i=$g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);let s=new E,a=new Ct,o=new Ct;function c(l,u){let d=0,f=0,g=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let b=0,m=0,p=0,x=0,v=0,_=0,A=0,y=0,w=0,P=0,M=0;l.sort(eb);let S=u===!0?Math.PI:1;for(let O=0,Q=l.length;O<Q;O++){let I=l[O],D=I.color,k=I.intensity,q=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=D.r*k*S,f+=D.g*k*S,g+=D.b*k*S;else if(I.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(I.sh.coefficients[N],k);M++}else if(I.isDirectionalLight){let N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){let Z=I.shadow,et=i.get(I);et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,n.directionalShadow[b]=et,n.directionalShadowMap[b]=z,n.directionalShadowMatrix[b]=I.shadow.matrix,_++}n.directional[b]=N,b++}else if(I.isSpotLight){let N=e.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(D).multiplyScalar(k*S),N.distance=q,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,n.spot[p]=N;let Z=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,Z.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[p]=Z.matrix,I.castShadow){let et=i.get(I);et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,n.spotShadow[p]=et,n.spotShadowMap[p]=z,y++}p++}else if(I.isRectAreaLight){let N=e.get(I);N.color.copy(D).multiplyScalar(k),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),n.rectArea[x]=N,x++}else if(I.isPointLight){let N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity*S),N.distance=I.distance,N.decay=I.decay,I.castShadow){let Z=I.shadow,et=i.get(I);et.shadowBias=Z.bias,et.shadowNormalBias=Z.normalBias,et.shadowRadius=Z.radius,et.shadowMapSize=Z.mapSize,et.shadowCameraNear=Z.camera.near,et.shadowCameraFar=Z.camera.far,n.pointShadow[m]=et,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=I.shadow.matrix,A++}n.point[m]=N,m++}else if(I.isHemisphereLight){let N=e.get(I);N.skyColor.copy(I.color).multiplyScalar(k*S),N.groundColor.copy(I.groundColor).multiplyScalar(k*S),n.hemi[v]=N,v++}}x>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=g;let U=n.hash;(U.directionalLength!==b||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==x||U.hemiLength!==v||U.numDirectionalShadows!==_||U.numPointShadows!==A||U.numSpotShadows!==y||U.numSpotMaps!==w||U.numLightProbes!==M)&&(n.directional.length=b,n.spot.length=p,n.rectArea.length=x,n.point.length=m,n.hemi.length=v,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=y+w-P,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=M,U.directionalLength=b,U.pointLength=m,U.spotLength=p,U.rectAreaLength=x,U.hemiLength=v,U.numDirectionalShadows=_,U.numPointShadows=A,U.numSpotShadows=y,U.numSpotMaps=w,U.numLightProbes=M,n.version=tb++)}function h(l,u){let d=0,f=0,g=0,b=0,m=0,p=u.matrixWorldInverse;for(let x=0,v=l.length;x<v;x++){let _=l[x];if(_.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(_.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let A=n.rectArea[b];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(_.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(_.width*.5,0,0),A.halfHeight.set(0,_.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),b++}else if(_.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:c,setupView:h,state:n}}function Hl(r,t){let e=new ib(r,t),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function c(u){e.setup(i,u)}function h(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function nb(r,t){let e=new WeakMap;function i(s,a=0){let o=e.get(s),c;return o===void 0?(c=new Hl(r,t),e.set(s,[c])):a>=o.length?(c=new Hl(r,t),o.push(c)):c=o[a],c}function n(){e=new WeakMap}return{get:i,dispose:n}}var Qo=class extends di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$o=class extends di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rb=`uniform sampler2D shadow_pass;
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
}`;function ab(r,t,e){let i=new Js,n=new _t,s=new _t,a=new ie,o=new Qo({depthPacking:Jd}),c=new $o,h={},l=e.maxTextureSize,u={[hi]:Oe,[Oe]:hi,[Le]:Le},d=new se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:sb,fragmentShader:rb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new It(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let p=this.type;this.render=function(y,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;let M=r.getRenderTarget(),S=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),O=r.state;O.setBlending(dn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Q=p!==Yi&&this.type===Yi,I=p===Yi&&this.type!==Yi;for(let D=0,k=y.length;D<k;D++){let q=y[D],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);let N=z.getFrameExtents();if(n.multiply(N),s.copy(z.mapSize),(n.x>l||n.y>l)&&(n.x>l&&(s.x=Math.floor(l/N.x),n.x=s.x*N.x,z.mapSize.x=s.x),n.y>l&&(s.y=Math.floor(l/N.y),n.y=s.y*N.y,z.mapSize.y=s.y)),z.map===null||Q===!0||I===!0){let et=this.type!==Yi?{minFilter:Ee,magFilter:Ee}:{};z.map!==null&&z.map.dispose(),z.map=new xe(n.x,n.y,et),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();let Z=z.getViewportCount();for(let et=0;et<Z;et++){let $=z.getViewport(et);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),O.viewport(a),z.updateMatrices(q,et),i=z.getFrustum(),_(w,P,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===Yi&&x(z,P),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,S,U)};function x(y,w){let P=t.update(b);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new xe(n.x,n.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(w,null,P,d,b,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(w,null,P,f,b,null)}function v(y,w,P,M){let S=null,U=P.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(U!==void 0)S=U;else if(S=P.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let O=S.uuid,Q=w.uuid,I=h[O];I===void 0&&(I={},h[O]=I);let D=I[Q];D===void 0&&(D=S.clone(),I[Q]=D,w.addEventListener("dispose",A)),S=D}if(S.visible=w.visible,S.wireframe=w.wireframe,M===Yi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=r.properties.get(S);O.light=P}return S}function _(y,w,P,M,S){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Yi)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,y.matrixWorld);let Q=t.update(y),I=y.material;if(Array.isArray(I)){let D=Q.groups;for(let k=0,q=D.length;k<q;k++){let z=D[k],N=I[z.materialIndex];if(N&&N.visible){let Z=v(y,N,M,S);y.onBeforeShadow(r,y,w,P,Q,Z,z),r.renderBufferDirect(P,null,Q,Z,y,z),y.onAfterShadow(r,y,w,P,Q,Z,z)}}}else if(I.visible){let D=v(y,I,M,S);y.onBeforeShadow(r,y,w,P,Q,D,null),r.renderBufferDirect(P,null,Q,D,y,null),y.onAfterShadow(r,y,w,P,Q,D,null)}}let O=y.children;for(let Q=0,I=O.length;Q<I;Q++)_(O[Q],w,P,M,S)}function A(y){y.target.removeEventListener("dispose",A);for(let P in h){let M=h[P],S=y.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function ob(r,t,e){let i=e.isWebGL2;function n(){let F=!1,bt=new ie,vt=null,Nt=new ie(0,0,0,0);return{setMask:function(Ft){vt!==Ft&&!F&&(r.colorMask(Ft,Ft,Ft,Ft),vt=Ft)},setLocked:function(Ft){F=Ft},setClear:function(Ft,ue,de,Ue,Ke){Ke===!0&&(Ft*=Ue,ue*=Ue,de*=Ue),bt.set(Ft,ue,de,Ue),Nt.equals(bt)===!1&&(r.clearColor(Ft,ue,de,Ue),Nt.copy(bt))},reset:function(){F=!1,vt=null,Nt.set(-1,0,0,0)}}}function s(){let F=!1,bt=null,vt=null,Nt=null;return{setTest:function(Ft){Ft?lt(r.DEPTH_TEST):ht(r.DEPTH_TEST)},setMask:function(Ft){bt!==Ft&&!F&&(r.depthMask(Ft),bt=Ft)},setFunc:function(Ft){if(vt!==Ft){switch(Ft){case Sd:r.depthFunc(r.NEVER);break;case Ad:r.depthFunc(r.ALWAYS);break;case Td:r.depthFunc(r.LESS);break;case Gr:r.depthFunc(r.LEQUAL);break;case Rd:r.depthFunc(r.EQUAL);break;case Cd:r.depthFunc(r.GEQUAL);break;case Pd:r.depthFunc(r.GREATER);break;case Ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=Ft}},setLocked:function(Ft){F=Ft},setClear:function(Ft){Nt!==Ft&&(r.clearDepth(Ft),Nt=Ft)},reset:function(){F=!1,bt=null,vt=null,Nt=null}}}function a(){let F=!1,bt=null,vt=null,Nt=null,Ft=null,ue=null,de=null,Ue=null,Ke=null;return{setTest:function(fe){F||(fe?lt(r.STENCIL_TEST):ht(r.STENCIL_TEST))},setMask:function(fe){bt!==fe&&!F&&(r.stencilMask(fe),bt=fe)},setFunc:function(fe,Ze,Pi){(vt!==fe||Nt!==Ze||Ft!==Pi)&&(r.stencilFunc(fe,Ze,Pi),vt=fe,Nt=Ze,Ft=Pi)},setOp:function(fe,Ze,Pi){(ue!==fe||de!==Ze||Ue!==Pi)&&(r.stencilOp(fe,Ze,Pi),ue=fe,de=Ze,Ue=Pi)},setLocked:function(fe){F=fe},setClear:function(fe){Ke!==fe&&(r.clearStencil(fe),Ke=fe)},reset:function(){F=!1,bt=null,vt=null,Nt=null,Ft=null,ue=null,de=null,Ue=null,Ke=null}}}let o=new n,c=new s,h=new a,l=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,b=[],m=null,p=!1,x=null,v=null,_=null,A=null,y=null,w=null,P=null,M=new Ut(0,0,0),S=0,U=!1,O=null,Q=null,I=null,D=null,k=null,q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,N=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=N>=1):Z.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=N>=2);let et=null,$={},G=r.getParameter(r.SCISSOR_BOX),B=r.getParameter(r.VIEWPORT),j=new ie().fromArray(G),ut=new ie().fromArray(B);function st(F,bt,vt,Nt){let Ft=new Uint8Array(4),ue=r.createTexture();r.bindTexture(F,ue),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<vt;de++)i&&(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)?r.texImage3D(bt,0,r.RGBA,1,1,Nt,0,r.RGBA,r.UNSIGNED_BYTE,Ft):r.texImage2D(bt+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ft);return ue}let at={};at[r.TEXTURE_2D]=st(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=st(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(at[r.TEXTURE_2D_ARRAY]=st(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=st(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),lt(r.DEPTH_TEST),c.setFunc(Gr),Pt(!1),L(Mh),lt(r.CULL_FACE),xt(dn);function lt(F){d[F]!==!0&&(r.enable(F),d[F]=!0)}function ht(F){d[F]!==!1&&(r.disable(F),d[F]=!1)}function Rt(F,bt){return f[F]!==bt?(r.bindFramebuffer(F,bt),f[F]=bt,i&&(F===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=bt),F===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=bt)),!0):!1}function V(F,bt){let vt=b,Nt=!1;if(F)if(vt=g.get(bt),vt===void 0&&(vt=[],g.set(bt,vt)),F.isWebGLMultipleRenderTargets){let Ft=F.texture;if(vt.length!==Ft.length||vt[0]!==r.COLOR_ATTACHMENT0){for(let ue=0,de=Ft.length;ue<de;ue++)vt[ue]=r.COLOR_ATTACHMENT0+ue;vt.length=Ft.length,Nt=!0}}else vt[0]!==r.COLOR_ATTACHMENT0&&(vt[0]=r.COLOR_ATTACHMENT0,Nt=!0);else vt[0]!==r.BACK&&(vt[0]=r.BACK,Nt=!0);Nt&&(e.isWebGL2?r.drawBuffers(vt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(vt))}function ne(F){return m!==F?(r.useProgram(F),m=F,!0):!1}let wt={[Zi]:r.FUNC_ADD,[dd]:r.FUNC_SUBTRACT,[fd]:r.FUNC_REVERSE_SUBTRACT};if(i)wt[Sh]=r.MIN,wt[Ah]=r.MAX;else{let F=t.get("EXT_blend_minmax");F!==null&&(wt[Sh]=F.MIN_EXT,wt[Ah]=F.MAX_EXT)}let Lt={[pa]:r.ZERO,[pd]:r.ONE,[vc]:r.SRC_COLOR,[Ys]:r.SRC_ALPHA,[yd]:r.SRC_ALPHA_SATURATE,[vd]:r.DST_COLOR,[gd]:r.DST_ALPHA,[md]:r.ONE_MINUS_SRC_COLOR,[ko]:r.ONE_MINUS_SRC_ALPHA,[xd]:r.ONE_MINUS_DST_COLOR,[bd]:r.ONE_MINUS_DST_ALPHA,[_d]:r.CONSTANT_COLOR,[Md]:r.ONE_MINUS_CONSTANT_COLOR,[wd]:r.CONSTANT_ALPHA,[Ed]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(F,bt,vt,Nt,Ft,ue,de,Ue,Ke,fe){if(F===dn){p===!0&&(ht(r.BLEND),p=!1);return}if(p===!1&&(lt(r.BLEND),p=!0),F!==bc){if(F!==x||fe!==U){if((v!==Zi||y!==Zi)&&(r.blendEquation(r.FUNC_ADD),v=Zi,y=Zi),fe)switch(F){case fn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ps:r.blendFunc(r.ONE,r.ONE);break;case wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Eh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case fn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ps:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case wh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Eh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,A=null,w=null,P=null,M.set(0,0,0),S=0,x=F,U=fe}return}Ft=Ft||bt,ue=ue||vt,de=de||Nt,(bt!==v||Ft!==y)&&(r.blendEquationSeparate(wt[bt],wt[Ft]),v=bt,y=Ft),(vt!==_||Nt!==A||ue!==w||de!==P)&&(r.blendFuncSeparate(Lt[vt],Lt[Nt],Lt[ue],Lt[de]),_=vt,A=Nt,w=ue,P=de),(Ue.equals(M)===!1||Ke!==S)&&(r.blendColor(Ue.r,Ue.g,Ue.b,Ke),M.copy(Ue),S=Ke),x=F,U=!1}function $t(F,bt){F.side===Le?ht(r.CULL_FACE):lt(r.CULL_FACE);let vt=F.side===Oe;bt&&(vt=!vt),Pt(vt),F.blending===fn&&F.transparent===!1?xt(dn):xt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),o.setMask(F.colorWrite);let Nt=F.stencilWrite;h.setTest(Nt),Nt&&(h.setMask(F.stencilWriteMask),h.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),h.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),X(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?lt(r.SAMPLE_ALPHA_TO_COVERAGE):ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(F){O!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),O=F)}function L(F){F!==hd?(lt(r.CULL_FACE),F!==Q&&(F===Mh?r.cullFace(r.BACK):F===ld?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ht(r.CULL_FACE),Q=F}function T(F){F!==I&&(z&&r.lineWidth(F),I=F)}function X(F,bt,vt){F?(lt(r.POLYGON_OFFSET_FILL),(D!==bt||k!==vt)&&(r.polygonOffset(bt,vt),D=bt,k=vt)):ht(r.POLYGON_OFFSET_FILL)}function ot(F){F?lt(r.SCISSOR_TEST):ht(r.SCISSOR_TEST)}function nt(F){F===void 0&&(F=r.TEXTURE0+q-1),et!==F&&(r.activeTexture(F),et=F)}function ct(F,bt,vt){vt===void 0&&(et===null?vt=r.TEXTURE0+q-1:vt=et);let Nt=$[vt];Nt===void 0&&(Nt={type:void 0,texture:void 0},$[vt]=Nt),(Nt.type!==F||Nt.texture!==bt)&&(et!==vt&&(r.activeTexture(vt),et=vt),r.bindTexture(F,bt||at[F]),Nt.type=F,Nt.texture=bt)}function At(){let F=$[et];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function gt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Jt(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Wt(F){j.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),j.copy(F))}function ce(F){ut.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),ut.copy(F))}function Me(F,bt){let vt=u.get(bt);vt===void 0&&(vt=new WeakMap,u.set(bt,vt));let Nt=vt.get(F);Nt===void 0&&(Nt=r.getUniformBlockIndex(bt,F.name),vt.set(F,Nt))}function Yt(F,bt){let Nt=u.get(bt).get(F);l.get(bt)!==Nt&&(r.uniformBlockBinding(bt,Nt,F.__bindingPointIndex),l.set(bt,Nt))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},et=null,$={},f={},g=new WeakMap,b=[],m=null,p=!1,x=null,v=null,_=null,A=null,y=null,w=null,P=null,M=new Ut(0,0,0),S=0,U=!1,O=null,Q=null,I=null,D=null,k=null,j.set(0,0,r.canvas.width,r.canvas.height),ut.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:lt,disable:ht,bindFramebuffer:Rt,drawBuffers:V,useProgram:ne,setBlending:xt,setMaterial:$t,setFlipSided:Pt,setCullFace:L,setLineWidth:T,setPolygonOffset:X,setScissorTest:ot,activeTexture:nt,bindTexture:ct,unbindTexture:At,compressedTexImage2D:gt,compressedTexImage3D:W,texImage2D:Dt,texImage3D:Et,updateUBOMapping:Me,uniformBlockBinding:Yt,texStorage2D:Jt,texStorage3D:zt,texSubImage2D:Mt,texSubImage3D:Ot,compressedTexSubImage2D:rt,compressedTexSubImage3D:re,scissor:Wt,viewport:ce,reset:dt}}function cb(r,t,e,i,n,s,a){let o=n.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return f?new OffscreenCanvas(L,T):Zs("canvas")}function b(L,T,X,ot){let nt=1;if((L.width>ot||L.height>ot)&&(nt=ot/Math.max(L.width,L.height)),nt<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let ct=T?Kr:Math.floor,At=ct(nt*L.width),gt=ct(nt*L.height);u===void 0&&(u=g(At,gt));let W=X?g(At,gt):u;return W.width=At,W.height=gt,W.getContext("2d").drawImage(L,0,0,At,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+At+"x"+gt+")."),W}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function m(L){return Ho(L.width)&&Ho(L.height)}function p(L){return o?!1:L.wrapS!==$e||L.wrapT!==$e||L.minFilter!==Ee&&L.minFilter!==Qt}function x(L,T){return L.generateMipmaps&&T&&L.minFilter!==Ee&&L.minFilter!==Qt}function v(L){r.generateMipmap(L)}function _(L,T,X,ot,nt=!1){if(o===!1)return T;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ct=T;if(T===r.RED&&(X===r.FLOAT&&(ct=r.R32F),X===r.HALF_FLOAT&&(ct=r.R16F),X===r.UNSIGNED_BYTE&&(ct=r.R8)),T===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(ct=r.R8UI),X===r.UNSIGNED_SHORT&&(ct=r.R16UI),X===r.UNSIGNED_INT&&(ct=r.R32UI),X===r.BYTE&&(ct=r.R8I),X===r.SHORT&&(ct=r.R16I),X===r.INT&&(ct=r.R32I)),T===r.RG&&(X===r.FLOAT&&(ct=r.RG32F),X===r.HALF_FLOAT&&(ct=r.RG16F),X===r.UNSIGNED_BYTE&&(ct=r.RG8)),T===r.RGBA){let At=nt?qr:ae.getTransfer(ot);X===r.FLOAT&&(ct=r.RGBA32F),X===r.HALF_FLOAT&&(ct=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ct=At===ge?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function A(L,T,X){return x(L,X)===!0||L.isFramebufferTexture&&L.minFilter!==Ee&&L.minFilter!==Qt?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function y(L){return L===Ee||L===Wr||L===Gs?r.NEAREST:r.LINEAR}function w(L){let T=L.target;T.removeEventListener("dispose",w),M(T),T.isVideoTexture&&l.delete(T)}function P(L){let T=L.target;T.removeEventListener("dispose",P),U(T)}function M(L){let T=i.get(L);if(T.__webglInit===void 0)return;let X=L.source,ot=d.get(X);if(ot){let nt=ot[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(L),Object.keys(ot).length===0&&d.delete(X)}i.remove(L)}function S(L){let T=i.get(L);r.deleteTexture(T.__webglTexture);let X=L.source,ot=d.get(X);delete ot[T.__cacheKey],a.memory.textures--}function U(L){let T=L.texture,X=i.get(L),ot=i.get(T);if(ot.__webglTexture!==void 0&&(r.deleteTexture(ot.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(X.__webglFramebuffer[nt]))for(let ct=0;ct<X.__webglFramebuffer[nt].length;ct++)r.deleteFramebuffer(X.__webglFramebuffer[nt][ct]);else r.deleteFramebuffer(X.__webglFramebuffer[nt]);X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[nt])}else{if(Array.isArray(X.__webglFramebuffer))for(let nt=0;nt<X.__webglFramebuffer.length;nt++)r.deleteFramebuffer(X.__webglFramebuffer[nt]);else r.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let nt=0;nt<X.__webglColorRenderbuffer.length;nt++)X.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[nt]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let nt=0,ct=T.length;nt<ct;nt++){let At=i.get(T[nt]);At.__webglTexture&&(r.deleteTexture(At.__webglTexture),a.memory.textures--),i.remove(T[nt])}i.remove(T),i.remove(L)}let O=0;function Q(){O=0}function I(){let L=O;return L>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+n.maxTextures),O+=1,L}function D(L){let T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function k(L,T){let X=i.get(L);if(L.isVideoTexture&&$t(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){let ot=L.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(X,L,T);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+T)}function q(L,T){let X=i.get(L);if(L.version>0&&X.__version!==L.version){j(X,L,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+T)}function z(L,T){let X=i.get(L);if(L.version>0&&X.__version!==L.version){j(X,L,T);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+T)}function N(L,T){let X=i.get(L);if(L.version>0&&X.__version!==L.version){ut(X,L,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+T)}let Z={[li]:r.REPEAT,[$e]:r.CLAMP_TO_EDGE,[Ks]:r.MIRRORED_REPEAT},et={[Ee]:r.NEAREST,[Wr]:r.NEAREST_MIPMAP_NEAREST,[Gs]:r.NEAREST_MIPMAP_LINEAR,[Qt]:r.LINEAR,[xc]:r.LINEAR_MIPMAP_NEAREST,[ti]:r.LINEAR_MIPMAP_LINEAR},$={[$d]:r.NEVER,[af]:r.ALWAYS,[tf]:r.LESS,[yu]:r.LEQUAL,[ef]:r.EQUAL,[rf]:r.GEQUAL,[nf]:r.GREATER,[sf]:r.NOTEQUAL};function G(L,T,X){if(X?(r.texParameteri(L,r.TEXTURE_WRAP_S,Z[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Z[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Z[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,et[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,et[T.minFilter])):(r.texParameteri(L,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(L,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==$e||T.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,r.TEXTURE_MAG_FILTER,y(T.magFilter)),r.texParameteri(L,r.TEXTURE_MIN_FILTER,y(T.minFilter)),T.minFilter!==Ee&&T.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ot=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ee||T.minFilter!==Gs&&T.minFilter!==ti||T.type===Ji&&t.has("OES_texture_float_linear")===!1||o===!1&&T.type===$i&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(r.texParameterf(L,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function B(L,T){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",w));let ot=T.source,nt=d.get(ot);nt===void 0&&(nt={},d.set(ot,nt));let ct=D(T);if(ct!==L.__cacheKey){nt[ct]===void 0&&(nt[ct]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),nt[ct].usedTimes++;let At=nt[L.__cacheKey];At!==void 0&&(nt[L.__cacheKey].usedTimes--,At.usedTimes===0&&S(T)),L.__cacheKey=ct,L.__webglTexture=nt[ct].texture}return X}function j(L,T,X){let ot=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ot=r.TEXTURE_3D);let nt=B(L,T),ct=T.source;e.bindTexture(ot,L.__webglTexture,r.TEXTURE0+X);let At=i.get(ct);if(ct.version!==At.__version||nt===!0){e.activeTexture(r.TEXTURE0+X);let gt=ae.getPrimaries(ae.workingColorSpace),W=T.colorSpace===mi?null:ae.getPrimaries(T.colorSpace),Mt=T.colorSpace===mi||gt===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Ot=p(T)&&m(T.image)===!1,rt=b(T.image,Ot,!1,n.maxTextureSize);rt=Pt(T,rt);let re=m(rt)||o,Jt=s.convert(T.format,T.colorSpace),zt=s.convert(T.type),Dt=_(T.internalFormat,Jt,zt,T.colorSpace,T.isVideoTexture);G(ot,T,re);let Et,Wt=T.mipmaps,ce=o&&T.isVideoTexture!==!0&&Dt!==gu,Me=At.__version===void 0||nt===!0,Yt=A(T,rt,re);if(T.isDepthTexture)Dt=r.DEPTH_COMPONENT,o?T.type===Ji?Dt=r.DEPTH_COMPONENT32F:T.type===ln?Dt=r.DEPTH_COMPONENT24:T.type===In?Dt=r.DEPTH24_STENCIL8:Dt=r.DEPTH_COMPONENT16:T.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Dn&&Dt===r.DEPTH_COMPONENT&&T.type!==yc&&T.type!==ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ln,zt=s.convert(T.type)),T.format===bs&&Dt===r.DEPTH_COMPONENT&&(Dt=r.DEPTH_STENCIL,T.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=In,zt=s.convert(T.type))),Me&&(ce?e.texStorage2D(r.TEXTURE_2D,1,Dt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Dt,rt.width,rt.height,0,Jt,zt,null));else if(T.isDataTexture)if(Wt.length>0&&re){ce&&Me&&e.texStorage2D(r.TEXTURE_2D,Yt,Dt,Wt[0].width,Wt[0].height);for(let dt=0,F=Wt.length;dt<F;dt++)Et=Wt[dt],ce?e.texSubImage2D(r.TEXTURE_2D,dt,0,0,Et.width,Et.height,Jt,zt,Et.data):e.texImage2D(r.TEXTURE_2D,dt,Dt,Et.width,Et.height,0,Jt,zt,Et.data);T.generateMipmaps=!1}else ce?(Me&&e.texStorage2D(r.TEXTURE_2D,Yt,Dt,rt.width,rt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,Jt,zt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,Dt,rt.width,rt.height,0,Jt,zt,rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ce&&Me&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Yt,Dt,Wt[0].width,Wt[0].height,rt.depth);for(let dt=0,F=Wt.length;dt<F;dt++)Et=Wt[dt],T.format!==le?Jt!==null?ce?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Et.width,Et.height,rt.depth,Jt,Et.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,dt,Dt,Et.width,Et.height,rt.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?e.texSubImage3D(r.TEXTURE_2D_ARRAY,dt,0,0,0,Et.width,Et.height,rt.depth,Jt,zt,Et.data):e.texImage3D(r.TEXTURE_2D_ARRAY,dt,Dt,Et.width,Et.height,rt.depth,0,Jt,zt,Et.data)}else{ce&&Me&&e.texStorage2D(r.TEXTURE_2D,Yt,Dt,Wt[0].width,Wt[0].height);for(let dt=0,F=Wt.length;dt<F;dt++)Et=Wt[dt],T.format!==le?Jt!==null?ce?e.compressedTexSubImage2D(r.TEXTURE_2D,dt,0,0,Et.width,Et.height,Jt,Et.data):e.compressedTexImage2D(r.TEXTURE_2D,dt,Dt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?e.texSubImage2D(r.TEXTURE_2D,dt,0,0,Et.width,Et.height,Jt,zt,Et.data):e.texImage2D(r.TEXTURE_2D,dt,Dt,Et.width,Et.height,0,Jt,zt,Et.data)}else if(T.isDataArrayTexture)ce?(Me&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Yt,Dt,rt.width,rt.height,rt.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Jt,zt,rt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Dt,rt.width,rt.height,rt.depth,0,Jt,zt,rt.data);else if(T.isData3DTexture)ce?(Me&&e.texStorage3D(r.TEXTURE_3D,Yt,Dt,rt.width,rt.height,rt.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Jt,zt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Dt,rt.width,rt.height,rt.depth,0,Jt,zt,rt.data);else if(T.isFramebufferTexture){if(Me)if(ce)e.texStorage2D(r.TEXTURE_2D,Yt,Dt,rt.width,rt.height);else{let dt=rt.width,F=rt.height;for(let bt=0;bt<Yt;bt++)e.texImage2D(r.TEXTURE_2D,bt,Dt,dt,F,0,Jt,zt,null),dt>>=1,F>>=1}}else if(Wt.length>0&&re){ce&&Me&&e.texStorage2D(r.TEXTURE_2D,Yt,Dt,Wt[0].width,Wt[0].height);for(let dt=0,F=Wt.length;dt<F;dt++)Et=Wt[dt],ce?e.texSubImage2D(r.TEXTURE_2D,dt,0,0,Jt,zt,Et):e.texImage2D(r.TEXTURE_2D,dt,Dt,Jt,zt,Et);T.generateMipmaps=!1}else ce?(Me&&e.texStorage2D(r.TEXTURE_2D,Yt,Dt,rt.width,rt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Jt,zt,rt)):e.texImage2D(r.TEXTURE_2D,0,Dt,Jt,zt,rt);x(T,re)&&v(ot),At.__version=ct.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ut(L,T,X){if(T.image.length!==6)return;let ot=B(L,T),nt=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+X);let ct=i.get(nt);if(nt.version!==ct.__version||ot===!0){e.activeTexture(r.TEXTURE0+X);let At=ae.getPrimaries(ae.workingColorSpace),gt=T.colorSpace===mi?null:ae.getPrimaries(T.colorSpace),W=T.colorSpace===mi||At===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);let Mt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ot=T.image[0]&&T.image[0].isDataTexture,rt=[];for(let dt=0;dt<6;dt++)!Mt&&!Ot?rt[dt]=b(T.image[dt],!1,!0,n.maxCubemapSize):rt[dt]=Ot?T.image[dt].image:T.image[dt],rt[dt]=Pt(T,rt[dt]);let re=rt[0],Jt=m(re)||o,zt=s.convert(T.format,T.colorSpace),Dt=s.convert(T.type),Et=_(T.internalFormat,zt,Dt,T.colorSpace),Wt=o&&T.isVideoTexture!==!0,ce=ct.__version===void 0||ot===!0,Me=A(T,re,Jt);G(r.TEXTURE_CUBE_MAP,T,Jt);let Yt;if(Mt){Wt&&ce&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Me,Et,re.width,re.height);for(let dt=0;dt<6;dt++){Yt=rt[dt].mipmaps;for(let F=0;F<Yt.length;F++){let bt=Yt[F];T.format!==le?zt!==null?Wt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F,0,0,bt.width,bt.height,zt,bt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F,Et,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F,0,0,bt.width,bt.height,zt,Dt,bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F,Et,bt.width,bt.height,0,zt,Dt,bt.data)}}}else{Yt=T.mipmaps,Wt&&ce&&(Yt.length>0&&Me++,e.texStorage2D(r.TEXTURE_CUBE_MAP,Me,Et,rt[0].width,rt[0].height));for(let dt=0;dt<6;dt++)if(Ot){Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,rt[dt].width,rt[dt].height,zt,Dt,rt[dt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Et,rt[dt].width,rt[dt].height,0,zt,Dt,rt[dt].data);for(let F=0;F<Yt.length;F++){let vt=Yt[F].image[dt].image;Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F+1,0,0,vt.width,vt.height,zt,Dt,vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F+1,Et,vt.width,vt.height,0,zt,Dt,vt.data)}}else{Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,zt,Dt,rt[dt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Et,zt,Dt,rt[dt]);for(let F=0;F<Yt.length;F++){let bt=Yt[F];Wt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F+1,0,0,zt,Dt,bt.image[dt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,F+1,Et,zt,Dt,bt.image[dt])}}}x(T,Jt)&&v(r.TEXTURE_CUBE_MAP),ct.__version=nt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function st(L,T,X,ot,nt,ct){let At=s.convert(X.format,X.colorSpace),gt=s.convert(X.type),W=_(X.internalFormat,At,gt,X.colorSpace);if(!i.get(T).__hasExternalTextures){let Ot=Math.max(1,T.width>>ct),rt=Math.max(1,T.height>>ct);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,ct,W,Ot,rt,T.depth,0,At,gt,null):e.texImage2D(nt,ct,W,Ot,rt,0,At,gt,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),xt(T)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,nt,i.get(X).__webglTexture,0,Lt(T)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,nt,i.get(X).__webglTexture,ct),e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(L,T,X){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer&&!T.stencilBuffer){let ot=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(X||xt(T)){let nt=T.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Ji?ot=r.DEPTH_COMPONENT32F:nt.type===ln&&(ot=r.DEPTH_COMPONENT24));let ct=Lt(T);xt(T)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,ot,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,ot,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,ot,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(T.depthBuffer&&T.stencilBuffer){let ot=Lt(T);X&&xt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,r.DEPTH24_STENCIL8,T.width,T.height):xt(T)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{let ot=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let nt=0;nt<ot.length;nt++){let ct=ot[nt],At=s.convert(ct.format,ct.colorSpace),gt=s.convert(ct.type),W=_(ct.internalFormat,At,gt,ct.colorSpace),Mt=Lt(T);X&&xt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,W,T.width,T.height):xt(T)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt,W,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,W,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);let ot=i.get(T.depthTexture).__webglTexture,nt=Lt(T);if(T.depthTexture.format===Dn)xt(T)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0);else if(T.depthTexture.format===bs)xt(T)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function ht(L){let T=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");lt(T.__webglFramebuffer,L)}else if(X){T.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ot]),T.__webglDepthbuffer[ot]=r.createRenderbuffer(),at(T.__webglDepthbuffer[ot],L,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),at(T.__webglDepthbuffer,L,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(L,T,X){let ot=i.get(L);T!==void 0&&st(ot.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&ht(L)}function V(L){let T=L.texture,X=i.get(L),ot=i.get(T);L.addEventListener("dispose",P),L.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=T.version,a.memory.textures++);let nt=L.isWebGLCubeRenderTarget===!0,ct=L.isWebGLMultipleRenderTargets===!0,At=m(L)||o;if(nt){X.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(o&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[gt]=[];for(let W=0;W<T.mipmaps.length;W++)X.__webglFramebuffer[gt][W]=r.createFramebuffer()}else X.__webglFramebuffer[gt]=r.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let gt=0;gt<T.mipmaps.length;gt++)X.__webglFramebuffer[gt]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(ct)if(n.drawBuffers){let gt=L.texture;for(let W=0,Mt=gt.length;W<Mt;W++){let Ot=i.get(gt[W]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&xt(L)===!1){let gt=ct?T:[T];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let W=0;W<gt.length;W++){let Mt=gt[W];X.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[W]);let Ot=s.convert(Mt.format,Mt.colorSpace),rt=s.convert(Mt.type),re=_(Mt.internalFormat,Ot,rt,Mt.colorSpace,L.isXRRenderTarget===!0),Jt=Lt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt,re,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,X.__webglColorRenderbuffer[W])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),at(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(nt){e.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),G(r.TEXTURE_CUBE_MAP,T,At);for(let gt=0;gt<6;gt++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let W=0;W<T.mipmaps.length;W++)st(X.__webglFramebuffer[gt][W],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,W);else st(X.__webglFramebuffer[gt],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(T,At)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){let gt=L.texture;for(let W=0,Mt=gt.length;W<Mt;W++){let Ot=gt[W],rt=i.get(Ot);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),G(r.TEXTURE_2D,Ot,At),st(X.__webglFramebuffer,L,Ot,r.COLOR_ATTACHMENT0+W,r.TEXTURE_2D,0),x(Ot,At)&&v(r.TEXTURE_2D)}e.unbindTexture()}else{let gt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?gt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,ot.__webglTexture),G(gt,T,At),o&&T.mipmaps&&T.mipmaps.length>0)for(let W=0;W<T.mipmaps.length;W++)st(X.__webglFramebuffer[W],L,T,r.COLOR_ATTACHMENT0,gt,W);else st(X.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,gt,0);x(T,At)&&v(gt),e.unbindTexture()}L.depthBuffer&&ht(L)}function ne(L){let T=m(L)||o,X=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ot=0,nt=X.length;ot<nt;ot++){let ct=X[ot];if(x(ct,T)){let At=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,gt=i.get(ct).__webglTexture;e.bindTexture(At,gt),v(At),e.unbindTexture()}}}function wt(L){if(o&&L.samples>0&&xt(L)===!1){let T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],X=L.width,ot=L.height,nt=r.COLOR_BUFFER_BIT,ct=[],At=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=i.get(L),W=L.isWebGLMultipleRenderTargets===!0;if(W)for(let Mt=0;Mt<T.length;Mt++)e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Mt=0;Mt<T.length;Mt++){ct.push(r.COLOR_ATTACHMENT0+Mt),L.depthBuffer&&ct.push(At);let Ot=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Ot===!1&&(L.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),W&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,gt.__webglColorRenderbuffer[Mt]),Ot===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[At]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[At])),W){let rt=i.get(T[Mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,rt,0)}r.blitFramebuffer(0,0,X,ot,0,0,X,ot,nt,r.NEAREST),h&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ct)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),W)for(let Mt=0;Mt<T.length;Mt++){e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,gt.__webglColorRenderbuffer[Mt]);let Ot=i.get(T[Mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,Ot,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function Lt(L){return Math.min(n.maxSamples,L.samples)}function xt(L){let T=i.get(L);return o&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $t(L){let T=a.render.frame;l.get(L)!==T&&(l.set(L,T),L.update())}function Pt(L,T){let X=L.colorSpace,ot=L.format,nt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===zo||X!==Re&&X!==mi&&(ae.getTransfer(X)===ge?o===!1?t.has("EXT_sRGB")===!0&&ot===le?(L.format=zo,L.minFilter=Qt,L.generateMipmaps=!1):T=Zr.sRGBToLinear(T):(ot!==le||nt!==Be)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}this.allocateTextureUnit=I,this.resetTextureUnits=Q,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=N,this.rebindTextures=Rt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=st,this.useMultisampledRTT=xt}function hb(r,t,e){let i=e.isWebGL2;function n(s,a=mi){let o,c=ae.getTransfer(a);if(s===Be)return r.UNSIGNED_BYTE;if(s===uu)return r.UNSIGNED_SHORT_4_4_4_4;if(s===du)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Hd)return r.BYTE;if(s===Vd)return r.SHORT;if(s===yc)return r.UNSIGNED_SHORT;if(s===lu)return r.INT;if(s===ln)return r.UNSIGNED_INT;if(s===Ji)return r.FLOAT;if(s===$i)return i?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Gd)return r.ALPHA;if(s===le)return r.RGBA;if(s===Wd)return r.LUMINANCE;if(s===qd)return r.LUMINANCE_ALPHA;if(s===Dn)return r.DEPTH_COMPONENT;if(s===bs)return r.DEPTH_STENCIL;if(s===zo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Xd)return r.RED;if(s===fu)return r.RED_INTEGER;if(s===jd)return r.RG;if(s===pu)return r.RG_INTEGER;if(s===mu)return r.RGBA_INTEGER;if(s===io||s===no||s===so||s===ro)if(c===ge)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===io)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===no)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===so)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===io)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===no)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===so)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ro)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rh||s===Ch||s===Ph||s===Lh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Rh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ch)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ph)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===gu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ih||s===Dh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ih)return c===ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Dh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Fh||s===Uh||s===kh||s===Nh||s===Oh||s===Bh||s===zh||s===Hh||s===Vh||s===Gh||s===Wh||s===qh||s===Xh||s===jh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Fh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Uh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Oh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Wh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===qh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===jh)return c===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ao||s===Yh||s===Kh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===ao)return c===ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Kh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yd||s===Zh||s===Jh||s===Qh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===ao)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Zh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Jh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===In?i?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}var tc=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ve=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},lb={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,i),p=this._getHandJoint(h,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=l.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ve;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ec=class extends pn{constructor(t,e){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,h=null,l=null,u=null,d=null,f=null,g=null,b=e.getContextAttributes(),m=null,p=null,x=[],v=[],_=new _t,A=null,y=new Ie;y.layers.enable(1),y.viewport=new ie;let w=new Ie;w.layers.enable(2),w.viewport=new ie;let P=[y,w],M=new tc;M.layers.enable(1),M.layers.enable(2);let S=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let B=x[G];return B===void 0&&(B=new js,x[G]=B),B.getTargetRaySpace()},this.getControllerGrip=function(G){let B=x[G];return B===void 0&&(B=new js,x[G]=B),B.getGripSpace()},this.getHand=function(G){let B=x[G];return B===void 0&&(B=new js,x[G]=B),B.getHandSpace()};function O(G){let B=v.indexOf(G.inputSource);if(B===-1)return;let j=x[B];j!==void 0&&(j.update(G.inputSource,G.frame,h||a),j.dispatchEvent({type:G.type,data:G.inputSource}))}function Q(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",Q),n.removeEventListener("inputsourceschange",I);for(let G=0;G<x.length;G++){let B=v[G];B!==null&&(v[G]=null,x[G].disconnect(B))}S=null,U=null,t.setRenderTarget(m),f=null,d=null,u=null,n=null,p=null,$.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(G){h=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",Q),n.addEventListener("inputsourceschange",I),b.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(_),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let B={antialias:n.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,B),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new xe(f.framebufferWidth,f.framebufferHeight,{format:le,type:Be,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil})}else{let B=null,j=null,ut=null;b.depth&&(ut=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,B=b.stencil?bs:Dn,j=b.stencil?In:ln);let st={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(st),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new xe(d.textureWidth,d.textureHeight,{format:le,type:Be,depthTexture:new kn(d.textureWidth,d.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0});let at=t.properties.get(p);at.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await n.requestReferenceSpace(o),$.setContext(n),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function I(G){for(let B=0;B<G.removed.length;B++){let j=G.removed[B],ut=v.indexOf(j);ut>=0&&(v[ut]=null,x[ut].disconnect(j))}for(let B=0;B<G.added.length;B++){let j=G.added[B],ut=v.indexOf(j);if(ut===-1){for(let at=0;at<x.length;at++)if(at>=v.length){v.push(j),ut=at;break}else if(v[at]===null){v[at]=j,ut=at;break}if(ut===-1)break}let st=x[ut];st&&st.connect(j)}}let D=new E,k=new E;function q(G,B,j){D.setFromMatrixPosition(B.matrixWorld),k.setFromMatrixPosition(j.matrixWorld);let ut=D.distanceTo(k),st=B.projectionMatrix.elements,at=j.projectionMatrix.elements,lt=st[14]/(st[10]-1),ht=st[14]/(st[10]+1),Rt=(st[9]+1)/st[5],V=(st[9]-1)/st[5],ne=(st[8]-1)/st[0],wt=(at[8]+1)/at[0],Lt=lt*ne,xt=lt*wt,$t=ut/(-ne+wt),Pt=$t*-ne;B.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Pt),G.translateZ($t),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let L=lt+$t,T=ht+$t,X=Lt-Pt,ot=xt+(ut-Pt),nt=Rt*ht/T*L,ct=V*ht/T*L;G.projectionMatrix.makePerspective(X,ot,nt,ct,L,T),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function z(G,B){B===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(B.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;M.near=w.near=y.near=G.near,M.far=w.far=y.far=G.far,(S!==M.near||U!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,U=M.far);let B=G.parent,j=M.cameras;z(M,B);for(let ut=0;ut<j.length;ut++)z(j[ut],B);j.length===2?q(M,y,w):M.projectionMatrix.copy(y.projectionMatrix),N(G,M,B)};function N(G,B,j){j===null?G.matrix.copy(B.matrixWorld):(G.matrix.copy(j.matrixWorld),G.matrix.invert(),G.matrix.multiply(B.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(B.projectionMatrix),G.projectionMatrixInverse.copy(B.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=xs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let Z=null;function et(G,B){if(l=B.getViewerPose(h||a),g=B,l!==null){let j=l.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let ut=!1;j.length!==M.cameras.length&&(M.cameras.length=0,ut=!0);for(let st=0;st<j.length;st++){let at=j[st],lt=null;if(f!==null)lt=f.getViewport(at);else{let Rt=u.getViewSubImage(d,at);lt=Rt.viewport,st===0&&(t.setRenderTargetTextures(p,Rt.colorTexture,d.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(p))}let ht=P[st];ht===void 0&&(ht=new Ie,ht.layers.enable(st),ht.viewport=new ie,P[st]=ht),ht.matrix.fromArray(at.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(at.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(lt.x,lt.y,lt.width,lt.height),st===0&&(M.matrix.copy(ht.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ut===!0&&M.cameras.push(ht)}}for(let j=0;j<x.length;j++){let ut=v[j],st=x[j];ut!==null&&st!==void 0&&st.update(ut,B,h||a)}Z&&Z(G,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),g=null}let $=new Eu;$.setAnimationLoop(et),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}};function ub(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),l(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,v):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Oe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Oe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function db(r,t,e,i){let n={},s={},a=[],o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){let _=v.program;i.uniformBlockBinding(x,_)}function h(x,v){let _=n[x.id];_===void 0&&(g(x),_=l(x),n[x.id]=_,x.addEventListener("dispose",m));let A=v.program;i.updateUBOMapping(x,A);let y=t.render.frame;s[x.id]!==y&&(d(x),s[x.id]=y)}function l(x){let v=u();x.__bindingPointIndex=v;let _=r.createBuffer(),A=x.__size,y=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,A,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,_),_}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let v=n[x.id],_=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let y=0,w=_.length;y<w;y++){let P=Array.isArray(_[y])?_[y]:[_[y]];for(let M=0,S=P.length;M<S;M++){let U=P[M];if(f(U,y,M,A)===!0){let O=U.__offset,Q=Array.isArray(U.value)?U.value:[U.value],I=0;for(let D=0;D<Q.length;D++){let k=Q[D],q=b(k);typeof k=="number"||typeof k=="boolean"?(U.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,O+I,U.__data)):k.isMatrix3?(U.__data[0]=k.elements[0],U.__data[1]=k.elements[1],U.__data[2]=k.elements[2],U.__data[3]=0,U.__data[4]=k.elements[3],U.__data[5]=k.elements[4],U.__data[6]=k.elements[5],U.__data[7]=0,U.__data[8]=k.elements[6],U.__data[9]=k.elements[7],U.__data[10]=k.elements[8],U.__data[11]=0):(k.toArray(U.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,_,A){let y=x.value,w=v+"_"+_;if(A[w]===void 0)return typeof y=="number"||typeof y=="boolean"?A[w]=y:A[w]=y.clone(),!0;{let P=A[w];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return A[w]=y,!0}else if(P.equals(y)===!1)return P.copy(y),!0}return!1}function g(x){let v=x.uniforms,_=0,A=16;for(let w=0,P=v.length;w<P;w++){let M=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,U=M.length;S<U;S++){let O=M[S],Q=Array.isArray(O.value)?O.value:[O.value];for(let I=0,D=Q.length;I<D;I++){let k=Q[I],q=b(k),z=_%A;z!==0&&A-z<q.boundary&&(_+=A-z),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=q.storage}}}let y=_%A;return y>0&&(_+=A-y),x.__size=_,x.__cache={},this}function b(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){let v=x.target;v.removeEventListener("dispose",m);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete s[v.id]}function p(){for(let x in n)r.deleteBuffer(n[x]);a=[],n={},s={}}return{bind:c,update:h,dispose:p}}var Qs=class{constructor(t={}){let{canvas:e=_f(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),b=null,m=null,p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_e,this._useLegacyLights=!1,this.toneMapping=Di,this.toneMappingExposure=1;let v=this,_=!1,A=0,y=0,w=null,P=-1,M=null,S=new ie,U=new ie,O=null,Q=new Ut(0),I=0,D=e.width,k=e.height,q=1,z=null,N=null,Z=new ie(0,0,D,k),et=new ie(0,0,D,k),$=!1,G=new Js,B=!1,j=!1,ut=null,st=new Ct,at=new _t,lt=new E,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Rt(){return w===null?q:1}let V=i;function ne(C,H){for(let K=0;K<C.length;K++){let J=C[K],Y=e.getContext(J,H);if(Y!==null)return Y}return null}try{let C={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gc}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",bt,!1),V===null){let H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),V=ne(H,C),V===null)throw ne(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let wt,Lt,xt,$t,Pt,L,T,X,ot,nt,ct,At,gt,W,Mt,Ot,rt,re,Jt,zt,Dt,Et,Wt,ce;function Me(){wt=new L0(V),Lt=new S0(V,wt,t),wt.init(Lt),Et=new hb(V,wt,Lt),xt=new ob(V,wt,Lt),$t=new F0(V),Pt=new Kg,L=new cb(V,wt,xt,Pt,Lt,Et,$t),T=new T0(v),X=new P0(v),ot=new Vf(V,Lt),Wt=new w0(V,wt,ot,Lt),nt=new I0(V,ot,$t,Wt),ct=new O0(V,nt,ot,$t),Jt=new N0(V,Lt,L),Ot=new A0(Pt),At=new Yg(v,T,X,wt,Lt,Wt,Ot),gt=new ub(v,Pt),W=new Jg,Mt=new nb(wt,Lt),re=new M0(v,T,X,xt,ct,d,c),rt=new ab(v,ct,Lt),ce=new db(V,$t,Lt,xt),zt=new E0(V,wt,$t,Lt),Dt=new D0(V,wt,$t,Lt),$t.programs=At.programs,v.capabilities=Lt,v.extensions=wt,v.properties=Pt,v.renderLists=W,v.shadowMap=rt,v.state=xt,v.info=$t}Me();let Yt=new ec(v,V);this.xr=Yt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let C=wt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=wt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(D,k,!1))},this.getSize=function(C){return C.set(D,k)},this.setSize=function(C,H,K=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=C,k=H,e.width=Math.floor(C*q),e.height=Math.floor(H*q),K===!0&&(e.style.width=C+"px",e.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(D*q,k*q).floor()},this.setDrawingBufferSize=function(C,H,K){D=C,k=H,q=K,e.width=Math.floor(C*K),e.height=Math.floor(H*K),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,H,K,J){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,H,K,J),xt.viewport(S.copy(Z).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy(et)},this.setScissor=function(C,H,K,J){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,H,K,J),xt.scissor(U.copy(et).multiplyScalar(q).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(C){xt.setScissorTest($=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(C=!0,H=!0,K=!0){let J=0;if(C){let Y=!1;if(w!==null){let yt=w.texture.format;Y=yt===mu||yt===pu||yt===fu}if(Y){let yt=w.texture.type,Tt=yt===Be||yt===ln||yt===yc||yt===In||yt===uu||yt===du,kt=re.getClearColor(),Bt=re.getClearAlpha(),Xt=kt.r,Ht=kt.g,Gt=kt.b;Tt?(f[0]=Xt,f[1]=Ht,f[2]=Gt,f[3]=Bt,V.clearBufferuiv(V.COLOR,0,f)):(g[0]=Xt,g[1]=Ht,g[2]=Gt,g[3]=Bt,V.clearBufferiv(V.COLOR,0,g))}else J|=V.COLOR_BUFFER_BIT}H&&(J|=V.DEPTH_BUFFER_BIT),K&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),W.dispose(),Mt.dispose(),Pt.dispose(),T.dispose(),X.dispose(),ct.dispose(),Wt.dispose(),ce.dispose(),At.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",Ke),Yt.removeEventListener("sessionend",fe),ut&&(ut.dispose(),ut=null),Ze.stop()};function dt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let C=$t.autoReset,H=rt.enabled,K=rt.autoUpdate,J=rt.needsUpdate,Y=rt.type;Me(),$t.autoReset=C,rt.enabled=H,rt.autoUpdate=K,rt.needsUpdate=J,rt.type=Y}function bt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function vt(C){let H=C.target;H.removeEventListener("dispose",vt),Nt(H)}function Nt(C){Ft(C),Pt.remove(C)}function Ft(C){let H=Pt.get(C).programs;H!==void 0&&(H.forEach(function(K){At.releaseProgram(K)}),C.isShaderMaterial&&At.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,K,J,Y,yt){H===null&&(H=ht);let Tt=Y.isMesh&&Y.matrixWorld.determinant()<0,kt=rd(C,H,K,J,Y);xt.setMaterial(J,Tt);let Bt=K.index,Xt=1;if(J.wireframe===!0){if(Bt=nt.getWireframeAttribute(K),Bt===void 0)return;Xt=2}let Ht=K.drawRange,Gt=K.attributes.position,Te=Ht.start*Xt,ai=(Ht.start+Ht.count)*Xt;yt!==null&&(Te=Math.max(Te,yt.start*Xt),ai=Math.min(ai,(yt.start+yt.count)*Xt)),Bt!==null?(Te=Math.max(Te,0),ai=Math.min(ai,Bt.count)):Gt!=null&&(Te=Math.max(Te,0),ai=Math.min(ai,Gt.count));let ke=ai-Te;if(ke<0||ke===1/0)return;Wt.setup(Y,J,kt,K,Bt);let Hi,ye=zt;if(Bt!==null&&(Hi=ot.get(Bt),ye=Dt,ye.setIndex(Hi)),Y.isMesh)J.wireframe===!0?(xt.setLineWidth(J.wireframeLinewidth*Rt()),ye.setMode(V.LINES)):ye.setMode(V.TRIANGLES);else if(Y.isLine){let Kt=J.linewidth;Kt===void 0&&(Kt=1),xt.setLineWidth(Kt*Rt()),Y.isLineSegments?ye.setMode(V.LINES):Y.isLineLoop?ye.setMode(V.LINE_LOOP):ye.setMode(V.LINE_STRIP)}else Y.isPoints?ye.setMode(V.POINTS):Y.isSprite&&ye.setMode(V.TRIANGLES);if(Y.isBatchedMesh)ye.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ye.renderInstances(Te,ke,Y.count);else if(K.isInstancedBufferGeometry){let Kt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Qa=Math.min(K.instanceCount,Kt);ye.renderInstances(Te,ke,Qa)}else ye.render(Te,ke)};function ue(C,H,K){C.transparent===!0&&C.side===Le&&C.forceSinglePass===!1?(C.side=Oe,C.needsUpdate=!0,pr(C,H,K),C.side=hi,C.needsUpdate=!0,pr(C,H,K),C.side=Le):pr(C,H,K)}this.compile=function(C,H,K=null){K===null&&(K=C),m=Mt.get(K),m.init(),x.push(m),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),C!==K&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(v._useLegacyLights);let J=new Set;return C.traverse(function(Y){let yt=Y.material;if(yt)if(Array.isArray(yt))for(let Tt=0;Tt<yt.length;Tt++){let kt=yt[Tt];ue(kt,K,Y),J.add(kt)}else ue(yt,K,Y),J.add(yt)}),x.pop(),m=null,J},this.compileAsync=function(C,H,K=null){let J=this.compile(C,H,K);return new Promise(Y=>{function yt(){if(J.forEach(function(Tt){Pt.get(Tt).currentProgram.isReady()&&J.delete(Tt)}),J.size===0){Y(C);return}setTimeout(yt,10)}wt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let de=null;function Ue(C){de&&de(C)}function Ke(){Ze.stop()}function fe(){Ze.start()}let Ze=new Eu;Ze.setAnimationLoop(Ue),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(C){de=C,Yt.setAnimationLoop(C),C===null?Ze.stop():Ze.start()},Yt.addEventListener("sessionstart",Ke),Yt.addEventListener("sessionend",fe),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(H),H=Yt.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,H,w),m=Mt.get(C,x.length),m.init(),x.push(m),st.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),G.setFromProjectionMatrix(st),j=this.localClippingEnabled,B=Ot.init(this.clippingPlanes,j),b=W.get(C,p.length),b.init(),p.push(b),Pi(C,H,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(z,N),this.info.render.frame++,B===!0&&Ot.beginShadows();let K=m.state.shadowsArray;if(rt.render(K,C,H),B===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(b,C),m.setupLights(v._useLegacyLights),H.isArrayCamera){let J=H.cameras;for(let Y=0,yt=J.length;Y<yt;Y++){let Tt=J[Y];gh(b,C,Tt,Tt.viewport)}}else gh(b,C,H);w!==null&&(L.updateMultisampleRenderTarget(w),L.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(v,C,H),Wt.resetDefaultState(),P=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function Pi(C,H,K,J){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||G.intersectsSprite(C)){J&&lt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(st);let Tt=ct.update(C),kt=C.material;kt.visible&&b.push(C,Tt,kt,K,lt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||G.intersectsObject(C))){let Tt=ct.update(C),kt=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),lt.copy(C.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),lt.copy(Tt.boundingSphere.center)),lt.applyMatrix4(C.matrixWorld).applyMatrix4(st)),Array.isArray(kt)){let Bt=Tt.groups;for(let Xt=0,Ht=Bt.length;Xt<Ht;Xt++){let Gt=Bt[Xt],Te=kt[Gt.materialIndex];Te&&Te.visible&&b.push(C,Tt,Te,K,lt.z,Gt)}}else kt.visible&&b.push(C,Tt,kt,K,lt.z,null)}}let yt=C.children;for(let Tt=0,kt=yt.length;Tt<kt;Tt++)Pi(yt[Tt],H,K,J)}function gh(C,H,K,J){let Y=C.opaque,yt=C.transmissive,Tt=C.transparent;m.setupLightsView(K),B===!0&&Ot.setGlobalState(v.clippingPlanes,K),yt.length>0&&sd(Y,yt,H,K),J&&xt.viewport(S.copy(J)),Y.length>0&&fr(Y,H,K),yt.length>0&&fr(yt,H,K),Tt.length>0&&fr(Tt,H,K),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function sd(C,H,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let yt=Lt.isWebGL2;ut===null&&(ut=new xe(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?$i:Be,minFilter:ti,samples:yt?4:0})),v.getDrawingBufferSize(at),yt?ut.setSize(at.x,at.y):ut.setSize(Kr(at.x),Kr(at.y));let Tt=v.getRenderTarget();v.setRenderTarget(ut),v.getClearColor(Q),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();let kt=v.toneMapping;v.toneMapping=Di,fr(C,K,J),L.updateMultisampleRenderTarget(ut),L.updateRenderTargetMipmap(ut);let Bt=!1;for(let Xt=0,Ht=H.length;Xt<Ht;Xt++){let Gt=H[Xt],Te=Gt.object,ai=Gt.geometry,ke=Gt.material,Hi=Gt.group;if(ke.side===Le&&Te.layers.test(J.layers)){let ye=ke.side;ke.side=Oe,ke.needsUpdate=!0,bh(Te,K,J,ai,ke,Hi),ke.side=ye,ke.needsUpdate=!0,Bt=!0}}Bt===!0&&(L.updateMultisampleRenderTarget(ut),L.updateRenderTargetMipmap(ut)),v.setRenderTarget(Tt),v.setClearColor(Q,I),v.toneMapping=kt}function fr(C,H,K){let J=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,yt=C.length;Y<yt;Y++){let Tt=C[Y],kt=Tt.object,Bt=Tt.geometry,Xt=J===null?Tt.material:J,Ht=Tt.group;kt.layers.test(K.layers)&&bh(kt,H,K,Bt,Xt,Ht)}}function bh(C,H,K,J,Y,yt){C.onBeforeRender(v,H,K,J,Y,yt),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(v,H,K,J,C,yt),Y.transparent===!0&&Y.side===Le&&Y.forceSinglePass===!1?(Y.side=Oe,Y.needsUpdate=!0,v.renderBufferDirect(K,H,J,Y,C,yt),Y.side=hi,Y.needsUpdate=!0,v.renderBufferDirect(K,H,J,Y,C,yt),Y.side=Le):v.renderBufferDirect(K,H,J,Y,C,yt),C.onAfterRender(v,H,K,J,Y,yt)}function pr(C,H,K){H.isScene!==!0&&(H=ht);let J=Pt.get(C),Y=m.state.lights,yt=m.state.shadowsArray,Tt=Y.state.version,kt=At.getParameters(C,Y.state,yt,H,K),Bt=At.getProgramCacheKey(kt),Xt=J.programs;J.environment=C.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(C.isMeshStandardMaterial?X:T).get(C.envMap||J.environment),Xt===void 0&&(C.addEventListener("dispose",vt),Xt=new Map,J.programs=Xt);let Ht=Xt.get(Bt);if(Ht!==void 0){if(J.currentProgram===Ht&&J.lightsStateVersion===Tt)return xh(C,kt),Ht}else kt.uniforms=At.getUniforms(C),C.onBuild(K,kt,v),C.onBeforeCompile(kt,v),Ht=At.acquireProgram(kt,Bt),Xt.set(Bt,Ht),J.uniforms=kt.uniforms;let Gt=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Gt.clippingPlanes=Ot.uniform),xh(C,kt),J.needsLights=od(C),J.lightsStateVersion=Tt,J.needsLights&&(Gt.ambientLightColor.value=Y.state.ambient,Gt.lightProbe.value=Y.state.probe,Gt.directionalLights.value=Y.state.directional,Gt.directionalLightShadows.value=Y.state.directionalShadow,Gt.spotLights.value=Y.state.spot,Gt.spotLightShadows.value=Y.state.spotShadow,Gt.rectAreaLights.value=Y.state.rectArea,Gt.ltc_1.value=Y.state.rectAreaLTC1,Gt.ltc_2.value=Y.state.rectAreaLTC2,Gt.pointLights.value=Y.state.point,Gt.pointLightShadows.value=Y.state.pointShadow,Gt.hemisphereLights.value=Y.state.hemi,Gt.directionalShadowMap.value=Y.state.directionalShadowMap,Gt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Gt.spotShadowMap.value=Y.state.spotShadowMap,Gt.spotLightMatrix.value=Y.state.spotLightMatrix,Gt.spotLightMap.value=Y.state.spotLightMap,Gt.pointShadowMap.value=Y.state.pointShadowMap,Gt.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Ht,J.uniformsList=null,Ht}function vh(C){if(C.uniformsList===null){let H=C.currentProgram.getUniforms();C.uniformsList=fs.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function xh(C,H){let K=Pt.get(C);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function rd(C,H,K,J,Y){H.isScene!==!0&&(H=ht),L.resetTextureUnits();let yt=H.fog,Tt=J.isMeshStandardMaterial?H.environment:null,kt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Re,Bt=(J.isMeshStandardMaterial?X:T).get(J.envMap||Tt),Xt=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ht=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Gt=!!K.morphAttributes.position,Te=!!K.morphAttributes.normal,ai=!!K.morphAttributes.color,ke=Di;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ke=v.toneMapping);let Hi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ye=Hi!==void 0?Hi.length:0,Kt=Pt.get(J),Qa=m.state.lights;if(B===!0&&(j===!0||C!==M)){let fi=C===M&&J.id===P;Ot.setState(J,C,fi)}let we=!1;J.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Qa.state.version||Kt.outputColorSpace!==kt||Y.isBatchedMesh&&Kt.batching===!1||!Y.isBatchedMesh&&Kt.batching===!0||Y.isInstancedMesh&&Kt.instancing===!1||!Y.isInstancedMesh&&Kt.instancing===!0||Y.isSkinnedMesh&&Kt.skinning===!1||!Y.isSkinnedMesh&&Kt.skinning===!0||Y.isInstancedMesh&&Kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Kt.instancingColor===!1&&Y.instanceColor!==null||Kt.envMap!==Bt||J.fog===!0&&Kt.fog!==yt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ot.numPlanes||Kt.numIntersection!==Ot.numIntersection)||Kt.vertexAlphas!==Xt||Kt.vertexTangents!==Ht||Kt.morphTargets!==Gt||Kt.morphNormals!==Te||Kt.morphColors!==ai||Kt.toneMapping!==ke||Lt.isWebGL2===!0&&Kt.morphTargetsCount!==ye)&&(we=!0):(we=!0,Kt.__version=J.version);let En=Kt.currentProgram;we===!0&&(En=pr(J,H,Y));let yh=!1,Us=!1,$a=!1,Ve=En.getUniforms(),Sn=Kt.uniforms;if(xt.useProgram(En.program)&&(yh=!0,Us=!0,$a=!0),J.id!==P&&(P=J.id,Us=!0),yh||M!==C){Ve.setValue(V,"projectionMatrix",C.projectionMatrix),Ve.setValue(V,"viewMatrix",C.matrixWorldInverse);let fi=Ve.map.cameraPosition;fi!==void 0&&fi.setValue(V,lt.setFromMatrixPosition(C.matrixWorld)),Lt.logarithmicDepthBuffer&&Ve.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ve.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Us=!0,$a=!0)}if(Y.isSkinnedMesh){Ve.setOptional(V,Y,"bindMatrix"),Ve.setOptional(V,Y,"bindMatrixInverse");let fi=Y.skeleton;fi&&(Lt.floatVertexTextures?(fi.boneTexture===null&&fi.computeBoneTexture(),Ve.setValue(V,"boneTexture",fi.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Ve.setOptional(V,Y,"batchingTexture"),Ve.setValue(V,"batchingTexture",Y._matricesTexture,L));let to=K.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0&&Lt.isWebGL2===!0)&&Jt.update(Y,K,En),(Us||Kt.receiveShadow!==Y.receiveShadow)&&(Kt.receiveShadow=Y.receiveShadow,Ve.setValue(V,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Sn.envMap.value=Bt,Sn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Us&&(Ve.setValue(V,"toneMappingExposure",v.toneMappingExposure),Kt.needsLights&&ad(Sn,$a),yt&&J.fog===!0&&gt.refreshFogUniforms(Sn,yt),gt.refreshMaterialUniforms(Sn,J,q,k,ut),fs.upload(V,vh(Kt),Sn,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(fs.upload(V,vh(Kt),Sn,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ve.setValue(V,"center",Y.center),Ve.setValue(V,"modelViewMatrix",Y.modelViewMatrix),Ve.setValue(V,"normalMatrix",Y.normalMatrix),Ve.setValue(V,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let fi=J.uniformsGroups;for(let eo=0,cd=fi.length;eo<cd;eo++)if(Lt.isWebGL2){let _h=fi[eo];ce.update(_h,En),ce.bind(_h,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function ad(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function od(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,H,K){Pt.get(C.texture).__webglTexture=H,Pt.get(C.depthTexture).__webglTexture=K;let J=Pt.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,H){let K=Pt.get(C);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,K=0){w=C,A=H,y=K;let J=!0,Y=null,yt=!1,Tt=!1;if(C){let Bt=Pt.get(C);Bt.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(V.FRAMEBUFFER,null),J=!1):Bt.__webglFramebuffer===void 0?L.setupRenderTarget(C):Bt.__hasExternalTextures&&L.rebindTextures(C,Pt.get(C.texture).__webglTexture,Pt.get(C.depthTexture).__webglTexture);let Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Tt=!0);let Ht=Pt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ht[H])?Y=Ht[H][K]:Y=Ht[H],yt=!0):Lt.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?Y=Pt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ht)?Y=Ht[K]:Y=Ht,S.copy(C.viewport),U.copy(C.scissor),O=C.scissorTest}else S.copy(Z).multiplyScalar(q).floor(),U.copy(et).multiplyScalar(q).floor(),O=$;if(xt.bindFramebuffer(V.FRAMEBUFFER,Y)&&Lt.drawBuffers&&J&&xt.drawBuffers(C,Y),xt.viewport(S),xt.scissor(U),xt.setScissorTest(O),yt){let Bt=Pt.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+H,Bt.__webglTexture,K)}else if(Tt){let Bt=Pt.get(C.texture),Xt=H||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Bt.__webglTexture,K||0,Xt)}P=-1},this.readRenderTargetPixels=function(C,H,K,J,Y,yt,Tt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Tt!==void 0&&(kt=kt[Tt]),kt){xt.bindFramebuffer(V.FRAMEBUFFER,kt);try{let Bt=C.texture,Xt=Bt.format,Ht=Bt.type;if(Xt!==le&&Et.convert(Xt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Gt=Ht===$i&&(wt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&wt.has("EXT_color_buffer_float"));if(Ht!==Be&&Et.convert(Ht)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===Ji&&(Lt.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-J&&K>=0&&K<=C.height-Y&&V.readPixels(H,K,J,Y,Et.convert(Xt),Et.convert(Ht),yt)}finally{let Bt=w!==null?Pt.get(w).__webglFramebuffer:null;xt.bindFramebuffer(V.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(C,H,K=0){let J=Math.pow(2,-K),Y=Math.floor(H.image.width*J),yt=Math.floor(H.image.height*J);L.setTexture2D(H,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,C.x,C.y,Y,yt),xt.unbindTexture()},this.copyTextureToTexture=function(C,H,K,J=0){let Y=H.image.width,yt=H.image.height,Tt=Et.convert(K.format),kt=Et.convert(K.type);L.setTexture2D(K,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment),H.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,J,C.x,C.y,Y,yt,Tt,kt,H.image.data):H.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,J,C.x,C.y,H.mipmaps[0].width,H.mipmaps[0].height,Tt,H.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,J,C.x,C.y,Tt,kt,H.image),J===0&&K.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(C,H,K,J,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let yt=C.max.x-C.min.x+1,Tt=C.max.y-C.min.y+1,kt=C.max.z-C.min.z+1,Bt=Et.convert(J.format),Xt=Et.convert(J.type),Ht;if(J.isData3DTexture)L.setTexture3D(J,0),Ht=V.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)L.setTexture2DArray(J,0),Ht=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,J.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,J.unpackAlignment);let Gt=V.getParameter(V.UNPACK_ROW_LENGTH),Te=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ai=V.getParameter(V.UNPACK_SKIP_PIXELS),ke=V.getParameter(V.UNPACK_SKIP_ROWS),Hi=V.getParameter(V.UNPACK_SKIP_IMAGES),ye=K.isCompressedTexture?K.mipmaps[Y]:K.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ye.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ye.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,C.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,C.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C.min.z),K.isDataTexture||K.isData3DTexture?V.texSubImage3D(Ht,Y,H.x,H.y,H.z,yt,Tt,kt,Bt,Xt,ye.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ht,Y,H.x,H.y,H.z,yt,Tt,kt,Bt,ye.data)):V.texSubImage3D(Ht,Y,H.x,H.y,H.z,yt,Tt,kt,Bt,Xt,ye),V.pixelStorei(V.UNPACK_ROW_LENGTH,Gt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Te),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ai),V.pixelStorei(V.UNPACK_SKIP_ROWS,ke),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Hi),Y===0&&J.generateMipmaps&&V.generateMipmap(Ht),xt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),xt.unbindTexture()},this.resetState=function(){A=0,y=0,w=null,xt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===_c?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===ba?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_e?Fn:vu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Fn?_e:Re}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ic=class extends Qs{};ic.prototype.isWebGL1Renderer=!0;var bi=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},$s=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Je=new E,tr=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ii(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),i=he(i,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new jt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Vl=new E,Gl=new ie,Wl=new ie,fb=new E,ql=new Ct,Nr=new E,Lo=new ui,Xl=new Ct,Io=new ys,Nn=class extends It{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Th,this.bindMatrix=new Ct,this.bindMatrixInverse=new Ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new gi),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Nr),this.boundingBox.expandByPoint(Nr)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,Nr),this.boundingSphere.expandByPoint(Nr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lo.copy(this.boundingSphere),Lo.applyMatrix4(n),t.ray.intersectsSphere(Lo)!==!1&&(Xl.copy(n).invert(),Io.copy(t.ray).applyMatrix4(Xl),!(this.boundingBox!==null&&Io.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Io)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ie,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Th?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,n=this.geometry;Gl.fromBufferAttribute(n.attributes.skinIndex,t),Wl.fromBufferAttribute(n.attributes.skinWeight,t),Vl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let a=Wl.getComponent(s);if(a!==0){let o=Gl.getComponent(s);ql.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(fb.copy(Vl).applyMatrix4(ql),a)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},On=class extends Se{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ti=class extends Xe{constructor(t=null,e=1,i=1,n,s,a,o,c,h=Ee,l=Ee,u,d){super(null,a,o,c,h,l,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jl=new Ct,pb=new Ct,Es=class r{constructor(t=[],e=[]){this.uuid=Si(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ct)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Ct;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=t.length;s<a;s++){let o=t[s]?t[s].matrixWorld:pb;jl.multiplyMatrices(o,e[s]),jl.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Ti(e,t,t,le,Ji);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){let s=t.bones[i],a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new On),this.bones.push(a),this.boneInverses.push(new Ct().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){let a=e[n];t.bones.push(a.uuid);let o=i[n];t.boneInverses.push(o.toArray())}return t}},He=class extends jt{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cs=new Ct,Yl=new Ct,Or=[],Kl=new gi,mb=new Ct,zs=new It,Hs=new ui,na=class extends It{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new He(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,mb)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cs),Kl.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(Kl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cs),Hs.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,n=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(i),t.ray.intersectsSphere(Hs)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,cs),Yl.multiplyMatrices(i,cs),zs.matrixWorld=Yl,zs.raycast(t,Or);for(let a=0,o=Or.length;a<o;a++){let c=Or[a];c.instanceId=s,c.object=this,e.push(c)}Or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new He(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var er=class extends di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Zl=new E,Jl=new E,Ql=new Ct,Do=new ys,Br=new ui,Ss=class extends Se{constructor(t=new me,e=new er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Zl.fromBufferAttribute(e,n-1),Jl.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Zl.distanceTo(Jl);t.setAttribute("lineDistance",new oe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(n),Br.radius+=s,t.ray.intersectsSphere(Br)===!1)return;Ql.copy(n).invert(),Do.copy(t.ray).applyMatrix4(Ql);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=new E,l=new E,u=new E,d=new E,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let p=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let v=p,_=x-1;v<_;v+=f){let A=g.getX(v),y=g.getX(v+1);if(h.fromBufferAttribute(m,A),l.fromBufferAttribute(m,y),Do.distanceSqToSegment(h,l,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let P=t.ray.origin.distanceTo(d);P<t.near||P>t.far||e.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let v=p,_=x-1;v<_;v+=f){if(h.fromBufferAttribute(m,v),l.fromBufferAttribute(m,v+1),Do.distanceSqToSegment(h,l,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let y=t.ray.origin.distanceTo(d);y<t.near||y>t.far||e.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},$l=new E,tu=new E,sa=class extends Ss{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)$l.fromBufferAttribute(e,n),tu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+$l.distanceTo(tu);t.setAttribute("lineDistance",new oe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ra=class extends Ss{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},ir=class extends di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},eu=new Ct,nc=new ys,zr=new ui,Hr=new E,aa=class extends Se{constructor(t=new me,e=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(n),zr.radius+=s,t.ray.intersectsSphere(zr)===!1)return;eu.copy(n).invert(),nc.copy(t.ray).applyMatrix4(eu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let m=h.getX(g);Hr.fromBufferAttribute(u,m),iu(Hr,m,c,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)Hr.fromBufferAttribute(u,g),iu(Hr,g,c,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function iu(r,t,e,i,n,s,a){let o=nc.distanceSqToPoint(r);if(o<e){let c=new E;nc.closestPointToPoint(r,c),c.applyMatrix4(i);let h=n.ray.origin.distanceTo(c);if(h<n.near||h>n.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}var nr=class r extends me{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],a=[],o=[],c=[],h=new E,l=new _t;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;h.x=t*Math.cos(f),h.y=t*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),l.x=(a[d]/t+1)/2,l.y=(a[d+1]/t+1)/2,c.push(l.x,l.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},tn=class r extends me{constructor(t=1,e=1,i=1,n=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let h=this;n=Math.floor(n),s=Math.floor(s);let l=[],u=[],d=[],f=[],g=0,b=[],m=i/2,p=0;x(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(l),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function x(){let _=new E,A=new E,y=0,w=(e-t)/i;for(let P=0;P<=s;P++){let M=[],S=P/s,U=S*(e-t)+t;for(let O=0;O<=n;O++){let Q=O/n,I=Q*c+o,D=Math.sin(I),k=Math.cos(I);A.x=U*D,A.y=-S*i+m,A.z=U*k,u.push(A.x,A.y,A.z),_.set(D,w,k).normalize(),d.push(_.x,_.y,_.z),f.push(Q,1-S),M.push(g++)}b.push(M)}for(let P=0;P<n;P++)for(let M=0;M<s;M++){let S=b[M][P],U=b[M+1][P],O=b[M+1][P+1],Q=b[M][P+1];l.push(S,U,Q),l.push(U,O,Q),y+=6}h.addGroup(p,y,0),p+=y}function v(_){let A=g,y=new _t,w=new E,P=0,M=_===!0?t:e,S=_===!0?1:-1;for(let O=1;O<=n;O++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let U=g;for(let O=0;O<=n;O++){let I=O/n*c+o,D=Math.cos(I),k=Math.sin(I);w.x=M*k,w.y=m*S,w.z=M*D,u.push(w.x,w.y,w.z),d.push(0,S,0),y.x=D*.5+.5,y.y=k*.5*S+.5,f.push(y.x,y.y),g++}for(let O=0;O<n;O++){let Q=A+O,I=U+O;_===!0?l.push(I,I+1,Q):l.push(I+1,I,Q),P+=3}h.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var sc=class r extends me{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],a=[];o(n),h(i),l(),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(s.slice(),3)),this.setAttribute("uv",new oe(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let v=new E,_=new E,A=new E;for(let y=0;y<e.length;y+=3)f(e[y+0],v),f(e[y+1],_),f(e[y+2],A),c(v,_,A,x)}function c(x,v,_,A){let y=A+1,w=[];for(let P=0;P<=y;P++){w[P]=[];let M=x.clone().lerp(_,P/y),S=v.clone().lerp(_,P/y),U=y-P;for(let O=0;O<=U;O++)O===0&&P===y?w[P][O]=M:w[P][O]=M.clone().lerp(S,O/U)}for(let P=0;P<y;P++)for(let M=0;M<2*(y-P)-1;M++){let S=Math.floor(M/2);M%2===0?(d(w[P][S+1]),d(w[P+1][S]),d(w[P][S])):(d(w[P][S+1]),d(w[P+1][S+1]),d(w[P+1][S]))}}function h(x){let v=new E;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(x),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function l(){let x=new E;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];let _=m(x)/2/Math.PI+.5,A=p(x)/Math.PI+.5;a.push(_,1-A)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){let v=a[x+0],_=a[x+2],A=a[x+4],y=Math.max(v,_,A),w=Math.min(v,_,A);y>.9&&w<.1&&(v<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,v){let _=x*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){let x=new E,v=new E,_=new E,A=new E,y=new _t,w=new _t,P=new _t;for(let M=0,S=0;M<s.length;M+=9,S+=6){x.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),y.set(a[S+0],a[S+1]),w.set(a[S+2],a[S+3]),P.set(a[S+4],a[S+5]),A.copy(x).add(v).add(_).divideScalar(3);let U=m(A);b(y,S+0,x,U),b(w,S+2,v,U),b(P,S+4,_,U)}}function b(x,v,_,A){A<0&&x.x===1&&(a[v]=x.x-1),_.x===0&&_.z===0&&(a[v]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var oa=class r extends sc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var As=class r extends me{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),h=0,l=[],u=new E,d=new E,f=[],g=[],b=[],m=[];for(let p=0;p<=i;p++){let x=[],v=p/i,_=0;p===0&&a===0?_=.5/e:p===i&&c===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){let y=A/e;u.x=-t*Math.cos(n+y*s)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(n+y*s)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(y+_,1-v),x.push(h++)}l.push(x)}for(let p=0;p<i;p++)for(let x=0;x<e;x++){let v=l[p][x+1],_=l[p][x],A=l[p+1][x],y=l[p+1][x+1];(p!==0||a>0)&&f.push(v,_,y),(p!==i-1||c<Math.PI)&&f.push(_,A,y)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(b,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ca=class r extends me{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],c=[],h=[],l=new E,u=new E,d=new E;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let b=g/n*s,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(b),u.y=(t+e*Math.cos(m))*Math.sin(b),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),l.x=t*Math.cos(b),l.y=t*Math.sin(b),d.subVectors(u,l).normalize(),c.push(d.x,d.y,d.z),h.push(g/n),h.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let b=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,x=(n+1)*f+g;a.push(b,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ui=class extends di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ni=class extends Ui{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Vr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function gb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function bb(r){function t(n,s){return r[n]-r[s]}let e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function nu(r,t,e){let i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){let o=e[s]*t;for(let c=0;c!==t;++c)n[a++]=r[o+c]}return n}function Pu(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=r[n++];while(s!==void 0)}var gn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rc=class extends gn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,a=t+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case tl:s=t,o=2*e-i;break;case el:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case tl:a=t,c=2*i-e;break;case el:a=1,c=i+n[1]-n[0];break;default:a=t-1,c=e}let h=(i-e)*.5,l=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-i),this._offsetPrev=s*l,this._offsetNext=a*l}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,x=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*b+.5*g,_=f*m-f*b;for(let A=0;A!==o;++A)s[A]=p*a[l+A]+x*a[h+A]+v*a[c+A]+_*a[u+A];return s}},ac=class extends gn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,l=(i-e)/(n-e),u=1-l;for(let d=0;d!==o;++d)s[d]=a[h+d]*u+a[c+d]*l;return s}},oc=class extends gn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},vi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new oc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vs:e=this.InterpolantFactoryMethodDiscrete;break;case Un:e=this.InterpolantFactoryMethodLinear;break;case oo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return Un;case this.InterpolantFactoryMethodSmooth:return oo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(n!==void 0&&gb(n))for(let o=0,c=n.length;o!==c;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===oo,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,h=t[o],l=t[o+1];if(h!==l&&(o!==1||h!==t[0]))if(n)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let b=e[u+g];if(b!==e[d+g]||b!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,c=a*i,h=0;h!==i;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=Un;var bn=class extends vi{};bn.prototype.ValueTypeName="bool";bn.prototype.ValueBufferType=Array;bn.prototype.DefaultInterpolation=vs;bn.prototype.InterpolantFactoryMethodLinear=void 0;bn.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends vi{};ha.prototype.ValueTypeName="color";var en=class extends vi{};en.prototype.ValueTypeName="number";var cc=class extends gn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(n-e),h=t*o;for(let l=h+o;h!==l;h+=4)St.slerpFlat(s,0,a,h-o,a,h,c);return s}},ki=class extends vi{InterpolantFactoryMethodLinear(t){return new cc(this.times,this.values,this.getValueSize(),t)}};ki.prototype.ValueTypeName="quaternion";ki.prototype.DefaultInterpolation=Un;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var vn=class extends vi{};vn.prototype.ValueTypeName="string";vn.prototype.ValueBufferType=Array;vn.prototype.DefaultInterpolation=vs;vn.prototype.InterpolantFactoryMethodLinear=void 0;vn.prototype.InterpolantFactoryMethodSmooth=void 0;var nn=class extends vi{};nn.prototype.ValueTypeName="vector";var la=class{constructor(t,e=-1,i,n=Kd){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=Si(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(xb(i[a]).scale(n));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){let e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=i.length;s!==a;++s)e.push(vi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){let s=e.length,a=[];for(let o=0;o<s;o++){let c=[],h=[];c.push((o+s-1)%s,o,(o+1)%s),h.push(0,1,0);let l=bb(c);c=nu(c,1,l),h=nu(h,1,l),!n&&c[0]===0&&(c.push(s),h.push(h[0])),a.push(new en(".morphTargetInfluences["+e[o].name+"]",c,h).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){let n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){let h=t[o],l=h.name.match(s);if(l&&l.length>1){let u=l[1],d=n[u];d||(n[u]=d=[]),d.push(h)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,g,b){if(f.length!==0){let m=[],p=[];Pu(f,m,p,g),m.length!==0&&b.push(new u(d,m,p))}},n=[],s=t.name||"default",a=t.fps||30,o=t.blendMode,c=t.length||-1,h=t.hierarchy||[];for(let u=0;u<h.length;u++){let d=h[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(let b in f){let m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){let v=d[g];m.push(v.time),p.push(v.morphTarget===b?1:0)}n.push(new en(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{let f=".bones["+e[u].name+"]";i(nn,f+".position",d,"pos",n),i(ki,f+".quaternion",d,"rot",n),i(nn,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,c,n,o)}resetDuration(){let t=this.tracks,e=0;for(let i=0,n=t.length;i!==n;++i){let s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function vb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return en;case"vector":case"vector2":case"vector3":case"vector4":return nn;case"color":return ha;case"quaternion":return ki;case"bool":case"boolean":return bn;case"string":return vn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function xb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=vb(r.type);if(r.times===void 0){let e=[],i=[];Pu(r.keys,e,i,"value"),r.times=e,r.values=i}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}var un={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},hc=class{constructor(t,e,i){let n=this,s=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(l){o++,s===!1&&n.onStart!==void 0&&n.onStart(l,a,o),s=!0},this.itemEnd=function(l){a++,n.onProgress!==void 0&&n.onProgress(l,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(l){n.onError!==void 0&&n.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){let u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,d=h.length;u<d;u+=2){let f=h[u],g=h[u+1];if(f.global&&(f.lastIndex=0),f.test(l))return g}return null}}},yb=new hc,sn=class{constructor(t){this.manager=t!==void 0?t:yb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};sn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji={},lc=class extends Error{constructor(t,e){super(t),this.response=e}},sr=class extends sn{constructor(t){super(t)}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=un.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(ji[t]!==void 0){ji[t].push({onLoad:e,onProgress:i,onError:n});return}ji[t]=[],ji[t].push({onLoad:e,onProgress:i,onError:n});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let l=ji[t],u=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){x();function x(){u.read().then(({done:v,value:_})=>{if(v)p.close();else{b+=_.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let y=0,w=l.length;y<w;y++){let P=l[y];P.onProgress&&P.onProgress(A)}p.enqueue(_),x()}})}}});return new Response(m)}else throw new lc(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return h.json();default:if(o===void 0)return h.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(g=>f.decode(g))}}}).then(h=>{un.add(t,h);let l=ji[t];delete ji[t];for(let u=0,d=l.length;u<d;u++){let f=l[u];f.onLoad&&f.onLoad(h)}}).catch(h=>{let l=ji[t];if(l===void 0)throw this.manager.itemError(t),h;delete ji[t];for(let u=0,d=l.length;u<d;u++){let f=l[u];f.onError&&f.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var uc=class extends sn{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=un.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let o=Zs("img");function c(){l(),un.add(t,this),e&&e(this),s.manager.itemEnd(t)}function h(u){l(),n&&n(u),s.manager.itemError(t),s.manager.itemEnd(t)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}};var ua=class extends sn{constructor(t){super(t)}load(t,e,i,n){let s=new Xe,a=new uc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}},rr=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Fo=new Ct,su=new E,ru=new E,ar=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;su.setFromMatrixPosition(t.matrixWorld),e.position.copy(su),ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ru),e.updateMatrixWorld(),Fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},dc=class extends ar{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=xs*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ts=class extends rr{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new dc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},au=new Ct,Vs=new E,Uo=new E,fc=class extends ar{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Vs),Uo.copy(i.position),Uo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Uo),i.updateMatrixWorld(),n.makeTranslation(-Vs.x,-Vs.y,-Vs.z),au.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au)}},da=class extends rr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new fc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},pc=class extends ar{constructor(){super(new ii(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bn=class extends rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new pc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var xn=class{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let i=0,n=t.length;i<n;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},Ni=class extends me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var fa=class extends sn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=un.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(h=>{e&&e(h),s.manager.itemEnd(t)}).catch(h=>{n&&n(h)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(t,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return un.add(t,h),e&&e(h),s.manager.itemEnd(t),h}).catch(function(h){n&&n(h),un.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});un.add(t,c),s.manager.itemStart(t)}};var Ec="\\[\\]\\.:\\/",_b=new RegExp("["+Ec+"]","g"),Sc="[^"+Ec+"]",Mb="[^"+Ec.replace("\\.","")+"]",wb=/((?:WC+[\/:])*)/.source.replace("WC",Sc),Eb=/(WCOD+)?/.source.replace("WCOD",Mb),Sb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sc),Ab=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sc),Tb=new RegExp("^"+wb+Eb+Sb+Ab+"$"),Rb=["material","materials","bones","map"],mc=class{constructor(t,e,i){let n=i||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},pe=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_b,"")}static parseTrackName(t){let e=Tb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Rb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[n];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=mc;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);function xi(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Oi=(r,t,e)=>r<t?t:r>e?e:r,pt=r=>r<0?0:r>1?1:r,mt=(r,t,e)=>r+(t-r)*e;function ze(r,t,e){let i=pt((e-r)/(t-r));return i*i*(3-2*i)}function Ye(r,t=0){let e=Math.floor(r),i=r-e,n=a=>{let o=Math.sin((a+t*57.13)*127.1)*43758.5453;return o-Math.floor(o)},s=i*i*(3-2*i);return n(e)*(1-s)+n(e+1)*s}var be=24,si=2,Cb=9.81,Ac=Math.PI*2,Pb=[[300,3,.8,.3,0],[236,3.2,.8,.3,0],[187,3,.8,.34,0],[151,2.6,.8,.34,0],[122,2.1,.78,.38,0],[99,1.6,.78,.38,0],[78,1.05,.64,.7,1],[63,.9,.64,.7,1],[50,.75,.64,.75,1],[40,.6,.62,.75,1],[31,.48,.62,.8,1],[24.5,.38,.6,.8,1],[19,.3,.6,.85,1],[15,.235,.58,.85,1],[12.1,.17,.5,1.15,2],[9.3,.13,.5,1.15,2],[7.1,.1,.48,1.2,2],[5.4,.077,.48,1.2,2],[4.1,.058,.46,1.25,2],[3.2,.045,.46,1.25,2],[2.5,.035,.44,1.3,2],[1.9,.027,.44,1.3,2],[1.5,.021,.42,1.35,2],[1.15,.016,.42,1.35,2]],Tc=class{constructor(){this.active=!1,this.ox=0,this.oz=0,this.dx=1,this.dz=0,this.speed=14,this.width=150,this.hMax=12,this.t0=0,this.tBreak=14,this.age=0,this.s=0,this.height=0,this.front=14,this.frontMin=8.5,this.seed=0,this.mega=!1,this.back=55,this.curl=0,this.brk=0,this.turb=0,this.roll=0}},xa=class{constructor(t=20261112){this.time=0,this.storm=1,this.windAngle=0;let e=xi(t);this.dirX=new Float64Array(be),this.dirZ=new Float64Array(be),this.k=new Float64Array(be),this.omega=new Float64Array(be),this.phase0=new Float64Array(be),this.amp0=new Float64Array(be),this.amp=new Float64Array(be),this.steep=new Float64Array(be),this.len=new Float64Array(be),this.band=new Uint8Array(be),this.phT=new Float64Array(be),this.bodyW=new Float64Array(be);for(let i=0;i<be;i++){let[n,s,a,o,c]=Pb[i],h=1+(e()-.5)*.06,l=n*h,u=i%2===0?1:-1,d=this.windAngle+u*o*(.25+.75*e());this.dirX[i]=Math.cos(d),this.dirZ[i]=Math.sin(d),this.len[i]=l,this.k[i]=Ac/l,this.omega[i]=Math.sqrt(Cb*this.k[i]),this.phase0[i]=e()*Ac,this.amp0[i]=s*(.9+e()*.2),this.steep[i]=a,this.band[i]=c,this.bodyW[i]=1/(1+Math.pow(this.k[i]*.95,2))}this.uA=new Float32Array(be*4),this.uB=new Float32Array(be*4),this.breakers=[];for(let i=0;i<si;i++)this.breakers.push(new Tc);this.uBrkA=new Float32Array(si*4),this.uBrkB=new Float32Array(si*4),this.uBrkC=new Float32Array(si*4),this.sigHeight=0,this.setStorm(1),this.update(0)}setStorm(t){this.storm=pt(t);let e=0,i=1+.2*Math.sin(this.time*.105)*Math.sin(this.time*.041+1.3);for(let n=0;n<be;n++){let s=this.band[n],a=s===0?mt(.3,1,this.storm):s===1?mt(.22,1,this.storm):mt(.4,1,this.storm);this.amp[n]=this.amp0[n]*a*(s<2?i:1),e+=this.amp[n]*this.amp[n]*.5}this.sigHeight=4*Math.sqrt(e)}update(t){this.time+=t;let e=this.time;for(let i=0;i<be;i++){this.phT[i]=(this.omega[i]*e+this.phase0[i])%Ac;let n=i*4;this.uA[n]=this.dirX[i],this.uA[n+1]=this.dirZ[i],this.uA[n+2]=this.k[i],this.uA[n+3]=this.amp[i],this.uB[n]=this.phT[i],this.uB[n+1]=this.steep[i],this.uB[n+2]=this.len[i],this.uB[n+3]=0}for(let i=0;i<si;i++){let n=this.breakers[i],s=i*4;if(n.active){n.age=e-n.t0,n.s=n.speed*n.age;let o=ze(0,n.tBreak*.85,n.age),c=n.age-n.tBreak;n.brk=pt(c/1.6);let h=c>0?Math.exp(-c/(n.mega?5:3)):1;n.height=n.hMax*o*(.16+.84*h),n.front=mt(26,n.frontMin,ze(.3,1,o)),n.curl=ze(-2.2,.3,c)*(c>0?Math.exp(-c/2.2):1),n.turb=c>0?Math.min(1,c/1)*Math.exp(-Math.max(0,c-2.5)/(n.mega?8:5)):0,n.roll=c>0?n.brk*Math.exp(-c/(n.mega?5.5:3.2)):0,c>(n.mega?30:20)&&(n.active=!1)}let a=n.active?1:0;this.uBrkA[s]=n.ox,this.uBrkA[s+1]=n.oz,this.uBrkA[s+2]=n.dx,this.uBrkA[s+3]=n.dz,this.uBrkB[s]=n.s,this.uBrkB[s+1]=n.height*a,this.uBrkB[s+2]=n.front,this.uBrkB[s+3]=n.back,this.uBrkC[s]=n.width,this.uBrkC[s+1]=n.curl*a,this.uBrkC[s+2]=n.brk*a,this.uBrkC[s+3]=n.turb*a}}spawnBreaker(t,e,i={}){let n=this.breakers.find(o=>!o.active);if(!n)return null;let s=this.windAngle+(i.angleOffset||0);n.dx=Math.cos(s),n.dz=Math.sin(s),n.speed=i.speed||14;let a=i.lead||15;return n.ox=t-n.dx*n.speed*a,n.oz=e-n.dz*n.speed*a,n.seed=n.ox*.013+n.oz*.017,n.width=i.width||150,n.hMax=i.height||12,n.back=i.back||55,n.frontMin=i.frontMin||8.5,n.mega=!!i.mega,n.t0=this.time,n.tBreak=a+(i.breakOffset!==void 0?i.breakOffset:-1.2),n.age=0,n.active=!0,n.s=0,n.height=0,n.curl=0,n.brk=0,n.turb=0,n.roll=0,n}_breakerHeight(t,e,i){let n=e-t.ox,s=i-t.oz,a=n*t.dx+s*t.dz,o=-n*t.dz+s*t.dx,c=.16*Math.sin(o*.071+t.seed)+.09*Math.sin(o*.193+t.seed*1.7),h=2.6*Math.sin(o*.047+t.seed*.6)+1.2*Math.sin(o*.13+t.seed*2.1),l=a-t.s-h,u=Math.exp(-(o*o)/(t.width*t.width))*(1+c),d=l>0?t.front:t.back,f=Math.exp(-(l*l)/(d*d)),g=(l-2.4*t.front)/(1.7*t.front),b=-.22*Math.exp(-g*g);return this._bu=l,this._benv=u,this._bp=f,this._bsc=d,this._btr=b,this._btu=g,this._bpeel=Math.max(.15,Math.min(1.3,.55+2.5*c)),t.height*u*(f+b)}sample(t,e,i){let n=be,s=this.dirX,a=this.dirZ,o=this.k,c=this.amp,h=this.steep,l=this.phT,u=this.omega,d=t,f=e;for(let B=0;B<3;B++){let j=0,ut=0;for(let st=0;st<n;st++){let at=o[st]*(s[st]*d+a[st]*f)-l[st],lt=h[st]*c[st]*Math.sin(at);j-=s[st]*lt,ut-=a[st]*lt}d=t-j,f=e-ut}let g=0,b=0,m=0,p=0,x=0,v=0,_=0,A=0,y=0,w=0,P=0,M=0;for(let B=0;B<n;B++){let j=o[B]*(s[B]*d+a[B]*f)-l[B],ut=Math.sin(j),st=Math.cos(j),at=c[B],lt=o[B]*at,ht=h[B]*lt,Rt=u[B];g+=at*st,b+=ht*s[B]*s[B]*st,m+=ht*a[B]*a[B]*st,p+=ht*s[B]*a[B]*st,x-=lt*s[B]*ut,v-=lt*a[B]*ut;let V=h[B]*at*Rt;_+=V*s[B]*st,y+=V*a[B]*st,A+=at*Rt*ut;let ne=V*Rt;w+=ne*s[B]*ut,M+=ne*a[B]*ut,P-=at*Rt*Rt*st}let S=-x*(1-m)-v*p,U=(1-b)*(1-m)-p*p,O=-v*(1-b)-x*p,Q=U,I=0,D=0,k=0,q=0,z=0,N=0,Z=0,et=0,$=0;for(let B=0;B<si;B++){let j=this.breakers[B];if(!j.active||j.height<.01)continue;let ut=this._breakerHeight(j,t,e),st=this._bu,at=this._benv,lt=this._bp,ht=this._bsc;if(at<.002)continue;let Rt=-2*st/(ht*ht)*lt-.22*Math.exp(-this._btu*this._btu)*(-2*this._btu/(1.7*j.front)),V=j.height*at*Rt;g+=ut,k+=ut,U<.05&&(U=.05);let ne=1/U;S*=ne,O*=ne,U=1,S-=V*j.dx,O-=V*j.dz,z+=Math.max(-12,Math.min(14,-j.speed*V)),et+=j.speed*j.speed*j.height*at*(-2/(ht*ht)+4*st*st/(ht*ht*ht*ht))*lt;let wt=j.speed*(.3*(1-j.brk)+.65*j.curl+.22*j.roll)*at*lt*Math.min(1,j.height/6),Lt=at*j.curl*Math.exp(-Math.pow((st-.25*j.front)/(1.3*j.front),2))*Math.min(1,j.height/5);if(Z=Math.max(Z,Lt),j.mega||($=Math.max($,Math.min(12,3.5+.6*j.hMax)*Lt*ze(-.7,.5,j.age-j.tBreak))),q+=j.dx*wt,N+=j.dz*wt,j.mega){let Pt=j.speed*at*j.curl*Math.exp(-Math.pow((st-.1*j.front)/(.9*j.front),2));z+=.78*Pt,q+=j.dx*.8*Pt,N+=j.dz*.8*Pt}let xt=j.speed*.26*at*Math.exp(-this._btu*this._btu)*Math.min(1,j.height/6)*(1-j.brk);q-=j.dx*xt,N-=j.dz*xt;let $t=at*Math.exp(-Math.pow((st-.3*j.front)/(1.6*j.front+26*j.turb),2));I=Math.max(I,j.brk*$t*Math.min(1,j.height/3+j.turb)),D=Math.max(D,j.turb*at*Math.exp(-Math.pow((st+14*j.turb)/(22+30*j.turb),2)))}let G=1/Math.sqrt(S*S+U*U+O*O);return i.h=g,i.nx=S*G,i.ny=U*G,i.nz=O*G,i.vx=_+q,i.vy=A+z,i.vz=y+N,i.ax=w,i.ay=P,i.az=M,i.bvx=q,i.bvy=z,i.bvz=N,i.lip=Z,i.plunge=$,i.bay=et<-8.8?-8.8:et>19.6?19.6:et,i.jac=Q,i.x0=d,i.z0=f,i.aer=I,i.turb=D,i.brkH=k,i}heightFast(t,e){let i=this.dirX,n=this.dirZ,s=this.k,a=this.amp,o=this.phT,c=0;for(let h=0;h<14;h++)c+=a[h]*Math.cos(s[h]*(i[h]*t+n[h]*e)-o[h]);for(let h=0;h<si;h++){let l=this.breakers[h];l.active&&l.height>.01&&(c+=this._breakerHeight(l,t,e))}return c}bodyFlow(t,e,i,n){let s=this.dirX,a=this.dirZ,o=this.k,c=this.amp,h=this.steep,l=this.phT,u=this.omega,d=this.bodyW,f=0,g=0,b=0,m=0,p=0,x=0;for(let v=0;v<be;v++){let _=Math.exp(-o[v]*i)*d[v];if(_<.01)continue;let A=o[v]*(s[v]*t+a[v]*e)-l[v],y=Math.sin(A),w=Math.cos(A),P=c[v]*u[v]*_,M=P*u[v];f+=h[v]*P*s[v]*w,b+=h[v]*P*a[v]*w,g+=P*y,m+=h[v]*M*s[v]*y,x+=h[v]*M*a[v]*y,p-=M*w}return n.vx=f,n.vy=g,n.vz=b,n.ax=m,n.ay=p,n.az=x,n}velocityAtDepth(t,e,i,n){let s=this.dirX,a=this.dirZ,o=this.k,c=this.amp,h=this.steep,l=this.phT,u=this.omega,d=0,f=0,g=0;for(let b=0;b<be;b++){let m=Math.exp(-o[b]*i);if(m<.01)continue;let p=o[b]*(s[b]*t+a[b]*e)-l[b],x=c[b]*u[b]*m,v=Math.cos(p);d+=h[b]*x*s[b]*v,g+=h[b]*x*a[b]*v,f+=x*Math.sin(p)}return n.vx=d,n.vy=f,n.vz=g,n}breakerFlow(t,e,i,n,s){let a=0,o=0,c=0,h=this.time;for(let l=0;l<si;l++){let u=this.breakers[l];if(!u.active||u.roll<.003&&u.turb<.003)continue;this._breakerHeight(u,t,i);let d=this._benv,f=this._bu;if(!(d<.01)){if(u.roll>.003){let g=Math.max(1.8,.36*u.hMax),b=f-.35*u.front,m=e-(n-.55*g),p=Math.hypot(b,m);if(p<3.2*g){let x=p<g?1:g*g/(p*p),v=.85*u.speed/g*u.roll*d*x,_=v*m;a+=u.dx*_,c+=u.dz*_,o+=-v*b}}if(u.turb>.003){let g=u.turb*d*Math.exp(-Math.pow((f+14*u.turb)/(22+30*u.turb),2))*Math.exp(-Math.max(0,n-e)/6.5);if(g>.01){let b=g*3.4;a+=b*(Math.sin(.9*i+1.7*e+2.3*h)+.6*Math.sin(1.7*t-1.1*e-3.1*h+1.3)),o+=b*(Math.sin(1.1*t+.8*i+2.9*h+.7)+.6*Math.sin(-1.5*i+1.9*e+2*h)),c+=b*(Math.sin(1.3*e-.9*t+2.6*h+2.1)+.6*Math.sin(1.6*t+1.2*i-2.2*h)),o-=g*2.6*Math.exp(-Math.max(0,n-e)/3)}}}}return s.vx+=a,s.vy+=o,s.vz+=c,s}};function yi(){return{bay:0,lip:0,plunge:0,bvx:0,bvy:0,bvz:0,h:0,nx:0,ny:1,nz:0,vx:0,vy:0,vz:0,ax:0,ay:0,az:0,jac:1,x0:0,z0:0,aer:0,turb:0,brkH:0}}var tt={hdrType:$i,uWaveA:{value:new Float32Array(be*4)},uWaveB:{value:new Float32Array(be*4)},uBrkA:{value:new Float32Array(si*4)},uBrkB:{value:new Float32Array(si*4)},uBrkC:{value:new Float32Array(si*4)},uTime:{value:0},uStorm:{value:1},uRain:{value:1},uWindDir:{value:new _t(1,0)},uWindSpeed:{value:28},uGlowDir:{value:new E(-.55,.35,.25).normalize()},uAmbient:{value:new E(.05,.06,.072)},uFlash:{value:0},uFlashDir:{value:new E(1,.35,0).normalize()},uFlashColor:{value:new E(.78,.86,1)},uFlashSheet:{value:0},uFogDensity:{value:1/2600},uNoise:{value:null},uSkyEnv:{value:null},uDetailN:{value:null},uFoamTex:{value:null},uResolution:{value:new _t(1,1)},uSpotPos:{value:new E(0,100,0)},uSpotDir:{value:new E(0,-1,0)},uSpotP:{value:new ie(.99,0,30,0)},uWash:{value:new ie(0,0,1,0)}},Cs=`
uniform vec3 uSpotPos; uniform vec3 uSpotDir; uniform vec4 uSpotP;
float spotAt(vec3 p, out vec3 L) {
  vec3 d = uSpotPos - p; float ds = length(d); L = d / max(ds, 1e-3);
  if (uSpotP.y < 0.001) return 0.0;
  float x = (1.0 - dot(-L, uSpotDir)) / (1.0 - uSpotP.x);          // 1 at the nominal edge of the beam
  return uSpotP.y * (exp(-1.5 * x * x) + 0.045 * exp(-0.09 * x)) / (1.0 + ds * ds / (uSpotP.z * uSpotP.z));
}
`,_n="vec3(0.78, 0.88, 1.0)";function Lu(r=7){let e=xi(r),i=new Uint8Array(256*256*4);for(let s=0;s<i.length;s++)i[s]=e()*256|0;let n=new Ti(i,256,256,le,Be);return n.wrapS=n.wrapT=li,n.minFilter=Qt,n.magFilter=Qt,n.generateMipmaps=!1,n.needsUpdate=!0,n}function Iu(r=11,t=256){let e=xi(r),i=[];for(let d=0;d<56;d++){let f=2+Math.pow(e(),1.6)*38,g=(e()-.5)*2.4+(e()<.2?Math.PI*e():0),b=Math.round(Math.cos(g)*f),m=Math.round(Math.sin(g)*f);if(b===0&&m===0)continue;let p=Math.hypot(b,m);i.push({m:b,n:m,a:Math.pow(p,-1.35),ph:e()*Math.PI*2})}let n=new Float32Array(t*t),s=new Float32Array(t*t),a=new Float32Array(t*t),o=0;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=f/t,b=d/t,m=0,p=0,x=0;for(let _=0;_<i.length;_++){let A=i[_],y=6.283185307*(A.m*g+A.n*b)+A.ph,w=Math.sin(y);m-=A.a*A.m*w,p-=A.a*A.n*w,x+=A.a*Math.cos(y)}let v=d*t+f;n[v]=m,s[v]=p,a[v]=x,o+=m*m+p*p}o=Math.sqrt(o/(t*t*2));let c=0;for(let d=0;d<a.length;d++)c=Math.max(c,Math.abs(a[d]));let h=new Uint8Array(t*t*4),l=.3/o;for(let d=0;d<t*t;d++)h[d*4]=Math.max(0,Math.min(255,Math.round((n[d]*l*.5+.5)*255))),h[d*4+1]=Math.max(0,Math.min(255,Math.round((s[d]*l*.5+.5)*255))),h[d*4+2]=Math.round((a[d]/c*.5+.5)*255),h[d*4+3]=255;let u=new Ti(h,t,t,le,Be);return u.wrapS=u.wrapT=li,u.minFilter=ti,u.magFilter=Qt,u.generateMipmaps=!0,u.anisotropy=8,u.needsUpdate=!0,u}function Du(r=23,t=256){let e=xi(r),i=h=>{let l=new Float32Array(h*h*2);for(let d=0;d<l.length;d++)l[d]=e();let u=new Float32Array(t*t*2);for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=(f+.5)/t*h,b=(d+.5)/t*h,m=Math.floor(g),p=Math.floor(b),x=9,v=9;for(let _=-1;_<=1;_++)for(let A=-1;A<=1;A++){let y=m+A,w=p+_,P=(y%h+h)%h,M=(w%h+h)%h,S=y+l[(M*h+P)*2],U=w+l[(M*h+P)*2+1],O=Math.hypot(S-g,U-b);O<x?(v=x,x=O):O<v&&(v=O)}u[(d*t+f)*2]=x,u[(d*t+f)*2+1]=v-x}return u},n=i(9),s=i(23),a=i(51),o=new Uint8Array(t*t*4);for(let h=0;h<t*t;h++){let l=1-Math.min(1,n[h*2+1]*3.2),u=1-Math.min(1,s[h*2+1]*3),d=Math.min(1,l*.62+u*.5),f=Math.min(1,(1-n[h*2]*1.25)*.7+(1-s[h*2]*1.3)*.3),g=1-Math.min(1,a[h*2]*1.6);o[h*4]=Math.round(Math.max(0,d)*255),o[h*4+1]=Math.round(Math.max(0,f)*255),o[h*4+2]=Math.round(Math.max(0,g)*255),o[h*4+3]=255}let c=new Ti(o,t,t,le,Be);return c.wrapS=c.wrapT=li,c.minFilter=ti,c.magFilter=Qt,c.generateMipmaps=!0,c.anisotropy=8,c.needsUpdate=!0,c}var Hn=`
#define NW ${be}
#define NB ${si}
uniform vec4 uWaveA[NW];   // dir.x, dir.z, k, amplitude
uniform vec4 uWaveB[NW];   // phase(t), steepness, wavelength, -
uniform vec4 uBrkA[NB];    // origin.xz, dir.xz
uniform vec4 uBrkB[NB];    // crest s, height, front scale, back scale
uniform vec4 uBrkC[NB];    // lateral width, curl, breaking, turbulence
`,Vn=`
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
`,ya=`
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
`,Fu=`
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
`;var Uu=`
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
`,Lb=`
const float PI = 3.14159265359;
vec3 equirectToDir(vec2 uv) {
  float phi = (uv.x - 0.5) * 2.0 * PI;
  float lat = (uv.y - 0.5) * PI;
  return vec3(cos(lat) * cos(phi), sin(lat), cos(lat) * sin(phi));
}
`,ku=`
vec2 dirToEquirect(vec3 d) {
  return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5);
}
`,_a=class{constructor(t,e=512){this.renderer=t;let i={uNoise:tt.uNoise,uTime:tt.uTime,uStorm:tt.uStorm,uWindDir:tt.uWindDir,uGlowDir:tt.uGlowDir,uFlash:tt.uFlash,uFlashDir:tt.uFlashDir,uFlashColor:tt.uFlashColor,uFlashSheet:tt.uFlashSheet};this.domeMat=new se({uniforms:i,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = position;
          vec4 p = projectionMatrix * viewMatrix * vec4(position * 9000.0 + cameraPosition, 1.0);
          gl_Position = p.xyww;   // always at the far plane
        }`,fragmentShader:`
        varying vec3 vDir;
        ${Uu}
        void main() { gl_FragColor = vec4(stormSky(normalize(vDir), 1), 1.0); }`,side:Oe,depthWrite:!1,depthTest:!0,fog:!1}),this.dome=new It(new oa(1,5),this.domeMat),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,this.envRT=new xe(e,e/2,{type:tt.hdrType,format:le,depthBuffer:!1,minFilter:ti,magFilter:Qt,generateMipmaps:!0}),this.envRT.texture.wrapS=li,this.envRT.texture.wrapT=$e,this.envMat=new se({uniforms:i,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        varying vec2 vUv;
        ${Uu}
        ${Lb}
        void main() { gl_FragColor = vec4(stormSky(equirectToDir(vUv), 0), 1.0); }`,depthTest:!1,depthWrite:!1}),this.envScene=new bi,this.envQuad=new It(new Ai(2,2),this.envMat),this.envQuad.frustumCulled=!1,this.envScene.add(this.envQuad),this.envCam=new ii(-1,1,1,-1,0,1),tt.uSkyEnv.value=this.envRT.texture}updateEnv(){let t=this.renderer,e=t.getRenderTarget();t.setRenderTarget(this.envRT),t.render(this.envScene,this.envCam),t.setRenderTarget(e)}dispose(){this.envRT.dispose(),this.domeMat.dispose(),this.envMat.dispose(),this.dome.geometry.dispose()}};var Ib=`
attribute float aSpacing;
uniform vec2 uCenter;
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${Hn}
${ya}
${Vn}
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
`,Db=`
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
${Cs}
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${Hn}
${Fu}
${Vn}
${ku}
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
    body += (uDeepColor * 0.55 + uScatterColor * 0.13 + vec3(0.010, 0.012, 0.014)) * ${_n} * spot * (0.15 + 0.85 * snl * snl);

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
      col += ${_n} * spot * min(Ds, 60.0) * fss * 0.55;
    }
    vec3 foamCol = vec3(0.80, 0.85, 0.87) * foamShade * (amb * (2.4 + 0.8 * N.y) + flashL * flashWrap * 0.8 + ${_n} * spot * (0.25 + 0.55 * snl));
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
`;function Fb(r,t,e,i){let n=r*t,s=new Float32Array(n*3),a=new Float32Array(n);for(let l=0;l<r;l++){let u=e*(Math.exp(i*l)-1)/i,d=e*Math.exp(i*l),f=Math.PI*2*u/t,g=Math.max(d,f);for(let b=0;b<t;b++){let m=b/t*Math.PI*2,p=(l*t+b)*3;s[p]=Math.cos(m)*u,s[p+1]=0,s[p+2]=Math.sin(m)*u,a[l*t+b]=g}}let o=new Uint32Array((r-1)*t*6),c=0;for(let l=0;l<r-1;l++)for(let u=0;u<t;u++){let d=l*t+u,f=l*t+(u+1)%t,g=(l+1)*t+u,b=(l+1)*t+(u+1)%t;o[c++]=d,o[c++]=f,o[c++]=g,o[c++]=f,o[c++]=b,o[c++]=g}let h=new me;return h.setAttribute("position",new jt(s,3)),h.setAttribute("aSpacing",new jt(a,1)),h.setIndex(new jt(o,1)),h}var Ma=class{constructor(t,e){this.waves=t,this.uniforms={uWaveA:tt.uWaveA,uWaveB:tt.uWaveB,uBrkA:tt.uBrkA,uBrkB:tt.uBrkB,uBrkC:tt.uBrkC,uSkyEnv:tt.uSkyEnv,uDetailN:tt.uDetailN,uFoamTex:tt.uFoamTex,uNoise:tt.uNoise,uTime:tt.uTime,uStorm:tt.uStorm,uRain:tt.uRain,uWindDir:tt.uWindDir,uAmbient:tt.uAmbient,uFlash:tt.uFlash,uFlashDir:tt.uFlashDir,uFlashColor:tt.uFlashColor,uFogDensity:tt.uFogDensity,uResolution:tt.uResolution,uCenter:{value:new _t},uDeepColor:{value:new E(.02,.062,.105)},uScatterColor:{value:new E(.13,.27,.305)},uDetailScroll:{value:new ie},uDetailScroll3:{value:new _t},uDetailStrength:{value:.5},uSigH:{value:10},uSceneColor:{value:null},uSceneDepth:{value:null},uNearFar:{value:new _t(.08,3e4)},uFoamAcc:{value:null},uFoamAccRect:{value:new ie(0,0,1,0)},uPlayerPos:{value:new E(0,-1e3,0)},uPlayerFoam:{value:0},uSpotPos:tt.uSpotPos,uSpotDir:tt.uSpotDir,uSpotP:tt.uSpotP,uWash:tt.uWash},this.material=new se({uniforms:this.uniforms,vertexShader:Ib,fragmentShader:Db,side:Le,defines:{}}),this.mesh=new It(new me,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,this.applyProfile(e)}applyProfile(t){this.mesh.geometry.dispose();let e=Math.log(14e3*.0128/t.oceanStep+1)/t.oceanRings*1;this.mesh.geometry=Fb(t.oceanRings,t.oceanSegs,t.oceanStep,this._solveG(t.oceanRings,t.oceanStep,14e3,e));let i={};t.refraction&&(i.USE_REFRACTION=1),t.foamAcc&&(i.USE_FOAM_ACC=1),t.ripples&&(i.USE_RIPPLES=1),this.material.defines=i,this.material.needsUpdate=!0}_solveG(t,e,i,n){let s=Math.max(n,.004);for(let a=0;a<40;a++){let o=Math.exp(s*t),c=e*(o-1)/s-i,h=e*(t*o*s-(o-1))/(s*s);s-=c/h,s<.001&&(s=.001)}return s}update(t,e,i){let n=this.uniforms;n.uCenter.value.set(t.position.x,t.position.z),n.uSigH.value=this.waves.sigHeight;let s=tt.uWindDir.value.x,a=tt.uWindDir.value.y,o=.6+.4*tt.uStorm.value;n.uDetailScroll.value.x+=s*1.9*.047*o*e,n.uDetailScroll.value.y+=a*1.9*.047*o*e,n.uDetailScroll.value.z+=a*1.1*.19*o*e+.011*e,n.uDetailScroll.value.w+=-s*1.1*.19*o*e,n.uDetailScroll3.value.x+=(s*.75-a*.2)*.83*o*e,n.uDetailScroll3.value.y+=(a*.75+s*.2)*.83*o*e,n.uDetailStrength.value=.3+.34*tt.uStorm.value,n.uNearFar.value.set(t.near,t.far)}};var Ub=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tPrev;
uniform vec2 uCenter; uniform vec2 uPrevCenter; uniform float uSize; uniform float uDt; uniform float uStorm; uniform float uTexel;
uniform vec3 uPlayer; uniform float uPlayerFoam;
uniform vec4 uSplash[4];      // x, z, ring radius, strength
${Hn}
${Vn}
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
}`,wa=class{constructor(t,e=1024,i=340){if(this.renderer=t,this.size=e,this.world=i,this.enabled=e>0,!this.enabled)return;let n={type:tt.hdrType,format:le,depthBuffer:!1,minFilter:Qt,magFilter:Qt};this.rt=[new xe(e,e,n),new xe(e,e,n)],this.idx=0,this.center=new _t,this.prevCenter=new _t,this.u={tPrev:{value:null},uCenter:{value:this.center},uPrevCenter:{value:this.prevCenter},uSize:{value:i},uDt:{value:.016},uStorm:tt.uStorm,uTexel:{value:i/e},uPlayer:{value:new E},uPlayerFoam:{value:0},uSplash:{value:new Float32Array(16)},uWaveA:tt.uWaveA,uWaveB:tt.uWaveB,uBrkA:tt.uBrkA,uBrkB:tt.uBrkB,uBrkC:tt.uBrkC},this.mat=new se({uniforms:this.u,fragmentShader:Ub,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"}),this.scene=new bi,this.quad=new It(new Ai(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.cam=new ii(-1,1,1,-1,0,1),this.first=!0,this.splashes=[0,1,2,3].map(()=>({x:0,z:0,s:0,age:9})),this.nextSplash=0}addSplash(t,e,i){if(!this.enabled)return;let n=this.splashes[this.nextSplash];this.nextSplash=(this.nextSplash+1)%4,n.x=t,n.z=e,n.s=Math.min(1,i),n.age=0}update(t,e,i,n,s,a){if(!this.enabled){a.uFoamAccRect.value.w=0;return}let o=this.world/this.size,c=Math.round(e/o)*o,h=Math.round(i/o)*o;this.prevCenter.copy(this.first?new _t(c,h):this.center),this.center.set(c,h);let l=this.rt[this.idx],u=this.rt[1-this.idx];this.u.tPrev.value=l.texture,this.u.uDt.value=t,this.u.uPlayer.value.copy(n),this.u.uPlayerFoam.value=s;let d=this.u.uSplash.value;for(let b=0;b<4;b++){let m=this.splashes[b];m.age+=t;let p=m.age<1.3;d[b*4]=m.x,d[b*4+1]=m.z,d[b*4+2]=.25+1.5*m.age*(.6+.6*m.s),d[b*4+3]=p?m.s*Math.exp(-m.age*2):0}let f=this.renderer,g=f.getRenderTarget();f.setRenderTarget(u),f.render(this.scene,this.cam),f.setRenderTarget(g),this.idx=1-this.idx,this.first=!1,a.uFoamAcc.value=u.texture,a.uFoamAccRect.value.set(c,h,this.world,1)}};var Ea=class{constructor(t,e,i,n,s=4242){this.waves=t,this.body=e,this.player=i,this.spray=n,this.rnd=xi(s),this.auto=!0,this.next=24,this.megaNext=85+this.rnd()*40,this.threat=0,this.crestDist=1e9,this.crestHeight=0,this.crestDx=0,this.crestDz=0,this.whiteout=0,this.onImpact=null,this.onSplash=null,this._splashCool=0}launch(t={}){let e=this.rnd,i=this.body,n=this.waves.storm;return this.waves.spawnBreaker(i.pos.x+i.vel.x*2,i.pos.z+i.vel.z*2,{lead:t.lead!==void 0?t.lead:13+e()*5,height:t.height!==void 0?t.height:mt(6.5,14.5,n)*(.8+.45*e()),width:t.width!==void 0?t.width:110+e()*90,speed:t.speed!==void 0?t.speed:12.5+e()*3.5,breakOffset:t.breakOffset!==void 0?t.breakOffset:-2+e()*2.3,angleOffset:t.angleOffset!==void 0?t.angleOffset:(e()-.5)*.5,frontMin:t.frontMin,back:t.back})}launchMega(t={}){let e=this.rnd,i=this.body;return this.waves.spawnBreaker(i.pos.x,i.pos.z,{mega:!0,lead:t.lead!==void 0?t.lead:19,height:t.height!==void 0?t.height:30+8*e(),width:520,speed:t.speed||24,breakOffset:t.breakOffset!==void 0?t.breakOffset:-.5,angleOffset:(e()-.5)*.2,frontMin:26,back:120})}update(t,e,i,n){let s=this.waves,a=this.body;if(this.auto){this.megaNext-=t;let f=s.breakers.some(g=>g.active&&g.mega);this.megaNext<=0&&s.storm>.6&&!s.breakers.some(g=>g.active)&&(this.launchMega(),this.megaNext=150+this.rnd()*100),this.next-=t,this.next<=0&&(s.storm>.3&&!f&&this.megaNext>14&&this.launch(),this.next=mt(75,24,s.storm)*(.65+.8*this.rnd()))}let o=0,c=1e9,h=0;for(let f of s.breakers){if(!f.active)continue;let g=a.pos.x-f.ox,b=a.pos.z-f.oz,m=g*f.dx+b*f.dz-f.s,p=-g*f.dz+b*f.dx,x=Math.exp(-(p*p)/(f.width*f.width));m>-10&&m<c&&(c=m,h=f.height*x,this.crestDx=f.dx,this.crestDz=f.dz);let v=pt(1-Math.abs(m)/(f.mega?320:120));o=Math.max(o,v*pt(f.height*x/9))}this.threat+=(o-this.threat)*(1-Math.exp(-t*2.5)),this.crestDist=c,this.crestHeight=h;let l=s.sample(e.x,e.z,this._s||(this._s={h:0})),u=Math.max(l.aer,(l.lip||0)*1.1)*pt(1-(e.y-l.h)/7)*(1-i);this.whiteout+=(Math.min(.93,u*1.6)-this.whiteout)*(1-Math.exp(-t*(u>this.whiteout?14:2.5)));let d=this.player.events;for(let f=0;f<d.length;f++){let g=d[f];g.type==="impact"&&(this.spray.burst(a.pos.x,a.surfaceH+.2,a.pos.z,g.strength*2.2,n,g.dir.x,g.dir.z),this.onImpact&&this.onImpact(g))}d.length=0,this._splashCool-=t,a.splash>1.1&&this._splashCool<=0&&(this._splashCool=.09,this.spray.burst(a.splashPos.x,a.splashPos.y,a.splashPos.z,Math.min(4,a.splash*.55),n),this.onSplash&&this.onSplash(a.splash,a.splashPos))}};var Rc={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new _t(1/1024,1/512)}},vertexShader:`

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
	`};var kb="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Nb=`
varying vec2 vUv; uniform sampler2D tScene; uniform float uThreshold; uniform float uKnee;
void main(){
  vec3 c = textureLod(tScene, vUv, 1.0).rgb;
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-5);
  float w = max(soft, br - uThreshold) / max(br, 1e-5);
  gl_FragColor = vec4(min(c * w, vec3(40.0)), 1.0);
}`,Ob=`
varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 a = texture(tSrc, vUv + t * vec2(-1.0, -1.0)).rgb, b = texture(tSrc, vUv + t * vec2(1.0, -1.0)).rgb;
  vec3 c = texture(tSrc, vUv + t * vec2(-1.0, 1.0)).rgb, d = texture(tSrc, vUv + t * vec2(1.0, 1.0)).rgb;
  vec3 e = texture(tSrc, vUv).rgb;
  gl_FragColor = vec4((a + b + c + d) * 0.2 + e * 0.2, 1.0);
}`,Bb=`
varying vec2 vUv; uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 s = texture(tSrc, vUv + t * vec2(-1.0, 0.0)).rgb + texture(tSrc, vUv + t * vec2(1.0, 0.0)).rgb
         + texture(tSrc, vUv + t * vec2(0.0, -1.0)).rgb + texture(tSrc, vUv + t * vec2(0.0, 1.0)).rgb;
  s = s * 0.125 + texture(tSrc, vUv).rgb * 0.5;
  gl_FragColor = vec4(s + texture(tAdd, vUv).rgb, 1.0);
}`,zb=`
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
}`,Hb=`
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
    vec3 np = uCamPos + ray * (uNearFar.x * 1.5 / cosF);
    float wob = (sn(vec2(uv.x * 9.0 + uTime * 1.3, uTime * 0.9)) - 0.5) * 0.004;
    float side = dot(np, uWaterPlane.xyz) + uWaterPlane.w + wob;
    under = 1.0 - smoothstep(-0.0012, 0.0012, side);
    line = exp(-pow(side / 0.0035, 2.0));
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
    vec2 vel = (uv - puv) * uMotionBlur;
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
  col *= 1.0 - 0.55 * line;

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
}`,Sa=class{constructor(t){this.renderer=t,this.fsScene=new bi,this.fsCam=new ii(-1,1,1,-1,0,1),this.fsQuad=new It(new Ai(2,2),null),this.fsQuad.frustumCulled=!1,this.fsScene.add(this.fsQuad),this.w=2,this.h=2,this.levels=5,this.useOpaque=!0;let e=(s,a)=>new se({uniforms:a,vertexShader:kb,fragmentShader:s,depthTest:!1,depthWrite:!1});this.matPre=e(Nb,{tScene:{value:null},uThreshold:{value:.16},uKnee:{value:.12}}),this.matDown=e(Ob,{tSrc:{value:null},uTexel:{value:new _t}}),this.matUp=e(Bb,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new _t}}),this.matAdapt=e(zb,{tScene:{value:null},tPrev:{value:null},uDt:{value:.016},uReset:{value:1}}),this.u={tScene:{value:null},tDepth:{value:null},tBloom:{value:null},tAdapt:{value:null},tLens:{value:null},uNoise:tt.uNoise,uResolution:{value:new _t},uNearFar:{value:new _t(.08,3e4)},uTime:{value:0},uCamPos:{value:new E},uCamRight:{value:new E},uCamUp:{value:new E},uCamFwd:{value:new E},uTanFov:{value:new _t},uPrevViewProj:{value:new Ct},uMotionBlur:{value:0},uBloom:{value:.55},uExposureKey:{value:.125},uExposureRange:{value:new _t(.5,7)},uExposureBias:{value:1},uWaterPlane:{value:new ie(0,1,0,0)},uUnderAmount:{value:0},uUnderColor:{value:new E(.004,.012,.018)},uUnderExt:{value:new E(.42,.2,.16)},uAeration:{value:0},uUnderDistort:{value:.012},uShaftDir:{value:new E(0,1,0)},uShaft:{value:0},uLensStrength:{value:.05},uSheet:{value:0},uBlur:{value:0},uDofFocus:{value:10},uDofAmount:{value:0},uVignette:{value:.42},uGrain:{value:.028},uTunnel:{value:0},uDesat:{value:0},uFade:{value:0},uWhiteout:{value:0},uGradeMix:{value:1}},this.matComposite=e(Hb,this.u),this.matFXAA=new se({uniforms:{tDiffuse:{value:null},resolution:{value:new _t}},vertexShader:Rc.vertexShader,fragmentShader:Rc.fragmentShader,depthTest:!1,depthWrite:!1}),this.matCopy=e("varying vec2 vUv; uniform sampler2D tSrc; void main(){ gl_FragColor = texture(tSrc, vUv); }",{tSrc:{value:null}});let i=new Ti(new Uint8Array([0,0,0,0]),1,1);i.needsUpdate=!0,this.blankLens=i,this.u.tLens.value=i,this.rtScene=null,this.rtOpaque=null,this.rtLDR=null,this.down=[],this.up=[];let n={type:tt.hdrType,format:le,depthBuffer:!1,minFilter:Ee,magFilter:Ee};this.adapt=[new xe(1,1,n),new xe(1,1,n)],this.adaptIdx=0,this.adaptReset=!0,this.fxaa=!0,this.prevViewProj=new Ct,this._vp=new Ct}setSize(t,e,i){if(t=Math.max(2,Math.floor(t)),e=Math.max(2,Math.floor(e)),!i&&t===this.w&&e===this.h&&this.rtScene)return;this.w=t,this.h=e,(c=>c.forEach(h=>h&&h.dispose()))([this.rtScene,this.rtOpaque,this.rtLDR,...this.down,...this.up]);let s={type:tt.hdrType,format:le,magFilter:Qt};this.rtScene=new xe(t,e,{...s,minFilter:ti,generateMipmaps:!0,depthBuffer:!0}),this.rtScene.depthTexture=new kn(t,e),this.rtOpaque=new xe(t,e,{...s,minFilter:Qt,depthBuffer:!0}),this.rtOpaque.depthTexture=new kn(t,e),this.rtLDR=new xe(t,e,{type:Be,format:le,minFilter:Qt,magFilter:Qt,depthBuffer:!1}),this.down=[],this.up=[];let a=t>>1,o=e>>1;for(let c=0;c<this.levels;c++){a=Math.max(2,a),o=Math.max(2,o);let h={...s,minFilter:Qt,depthBuffer:!1};this.down.push(new xe(a,o,h)),c<this.levels-1&&this.up.push(new xe(a,o,h)),a>>=1,o>>=1}tt.uResolution.value.set(t,e),this.adaptReset=!0}_pass(t,e){this.fsQuad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.fsScene,this.fsCam)}render(t,e,i,n){let s=this.renderer,a=this.u;this.useOpaque&&t(this.rtOpaque,!0),t(this.rtScene,!1),this.matPre.uniforms.tScene.value=this.rtScene.texture,this._pass(this.matPre,this.down[0]);for(let d=1;d<this.levels;d++)this.matDown.uniforms.tSrc.value=this.down[d-1].texture,this.matDown.uniforms.uTexel.value.set(1/this.down[d-1].width,1/this.down[d-1].height),this._pass(this.matDown,this.down[d]);let o=this.down[this.levels-1];for(let d=this.levels-2;d>=0;d--)this.matUp.uniforms.tSrc.value=o.texture,this.matUp.uniforms.tAdd.value=this.down[d].texture,this.matUp.uniforms.uTexel.value.set(1/o.width,1/o.height),this._pass(this.matUp,this.up[d]),o=this.up[d];let c=this.adapt[this.adaptIdx],h=this.adapt[1-this.adaptIdx];this.matAdapt.uniforms.tScene.value=this.rtScene.texture,this.matAdapt.uniforms.tPrev.value=c.texture,this.matAdapt.uniforms.uDt.value=i,this.matAdapt.uniforms.uReset.value=this.adaptReset?1:0,this._pass(this.matAdapt,h),this.adaptIdx=1-this.adaptIdx,this.adaptReset=!1,a.tScene.value=this.rtScene.texture,a.tDepth.value=this.rtScene.depthTexture,a.tBloom.value=o.texture,a.tAdapt.value=h.texture,a.uResolution.value.set(this.w,this.h),a.uNearFar.value.set(e.near,e.far),a.uTime.value=n;let l=e.matrixWorld.elements;a.uCamRight.value.set(l[0],l[1],l[2]),a.uCamUp.value.set(l[4],l[5],l[6]),a.uCamFwd.value.set(-l[8],-l[9],-l[10]),a.uCamPos.value.copy(e.position);let u=Math.tan(yn.degToRad(e.fov)*.5);a.uTanFov.value.set(u*e.aspect,u),a.uPrevViewProj.value.copy(this.prevViewProj),this._vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.prevViewProj.copy(this._vp),this.fxaa?(this._pass(this.matComposite,this.rtLDR),this.matFXAA.uniforms.tDiffuse.value=this.rtLDR.texture,this.matFXAA.uniforms.resolution.value.set(1/this.w,1/this.h),this._pass(this.matFXAA,null)):this._pass(this.matComposite,null)}};var Vb=`
attribute vec4 aDrop;       // x, y (0..1), radius (in screen heights), strength
uniform float uAspect;
varying vec2 vP; varying float vS;
void main() {
  vP = position.xy; vS = aDrop.w;
  vec2 c = aDrop.xy * 2.0 - 1.0;
  gl_Position = vec4(c + position.xy * vec2(aDrop.z / uAspect, aDrop.z) * 2.0 * vec2(1.0, 1.18), 0.0, 1.0);
}`,Gb=`
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
}`,Aa=class{constructor(t,e=120){this.renderer=t,this.max=e,this.rt=new xe(640,360,{type:tt.hdrType,format:le,depthBuffer:!1,minFilter:Qt,magFilter:Qt}),this.x=new Float32Array(e),this.y=new Float32Array(e),this.r=new Float32Array(e),this.vy=new Float32Array(e),this.vx=new Float32Array(e),this.life=new Float32Array(e),this.wait=new Float32Array(e),this.head=0,this.rainAcc=0,this.count=0,this.trail=new Float32Array(e);let i=new Ni;i.setAttribute("position",new jt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),this.aDrop=new He(new Float32Array(e*4),4),this.aDrop.setUsage(zn),i.setAttribute("aDrop",this.aDrop),i.instanceCount=0,this.dropMat=new se({uniforms:{uAspect:{value:16/9}},vertexShader:Vb,fragmentShader:Gb,transparent:!0,depthTest:!1,depthWrite:!1,blending:fn}),this.drops=new It(i,this.dropMat),this.drops.frustumCulled=!1,this.fadeMat=new se({uniforms:{uK:{value:.95}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform float uK; void main(){ gl_FragColor = vec4(uK); }",transparent:!0,depthTest:!1,depthWrite:!1,blending:bc,blendEquation:Zi,blendSrc:pa,blendDst:vc,blendSrcAlpha:pa,blendDstAlpha:Ys}),this.fade=new It(new Ai(2,2),this.fadeMat),this.fade.frustumCulled=!1,this.scene=new bi,this.scene.add(this.fade,this.drops),this.fade.renderOrder=0,this.drops.renderOrder=1,this.cam=new ii(-1,1,1,-1,0,1),this.needClear=!0,this.sheet=0}get texture(){return this.rt.texture}spawn(t,e=0){for(let i=0;i<t;i++){let n=this.head;this.head=(this.head+1)%this.max,this.x[n]=Math.random(),this.y[n]=Math.pow(Math.random(),.8);let s=Math.random()<.14+.26*e;this.r[n]=s?.011+Math.random()*.015:.003+Math.random()*.008,this.vy[n]=0,this.vx[n]=0,this.wait[n]=s?Math.random()*1.6:1e9,this.life[n]=s?5.5:1.8+Math.random()*3.2}}wipe(){this.life.fill(0),this.needClear=!0,this.sheet=0}update(t,e,i,n){if(i)(this.count>0||!this.needClear)&&this.wipe();else{this.rainAcc+=t*e;let l=Math.floor(this.rainAcc);this.rainAcc-=l,l>0&&this.spawn(Math.min(l,6))}this.sheet=Math.max(0,this.sheet-t*.42);let s=this.aDrop.array,a=0;for(let l=0;l<this.max;l++){if(this.life[l]<=0)continue;if(this.life[l]-=t,this.wait[l]<1e8&&(this.wait[l]-=t,this.wait[l]<=0)){if(this.vy[l]=Math.min(.2,this.vy[l]+t*(.12+4*this.r[l])),Math.random()<t*.8&&(this.vy[l]*=.2,this.wait[l]=Math.random()*.5),this.vx[l]+=(Math.random()-.5)*t*.5,this.vx[l]*=Math.exp(-t*4),this.y[l]-=this.vy[l]*t,this.x[l]+=this.vx[l]*t,this.trail[l]+=this.vy[l]*t,this.trail[l]>.035+this.r[l]){this.trail[l]=0;let f=this.head;this.head=(this.head+1)%this.max,f!==l&&this.life[f]<=0&&(this.x[f]=this.x[l]+(Math.random()-.5)*.004,this.y[f]=this.y[l]+this.r[l]*1.2,this.r[f]=.0035+Math.random()*.003,this.vy[f]=0,this.vx[f]=0,this.wait[f]=1e9,this.life[f]=.9+Math.random()*1.2,this.trail[f]=0)}if(this.r[l]-=t*.0012,this.y[l]<-.06||this.r[l]<.004){this.life[l]=0;continue}}let u=Math.min(1,this.life[l]/.8),d=a*4;s[d]=this.x[l],s[d+1]=this.y[l],s[d+2]=this.r[l]*(.6+.4*u),s[d+3]=u,a++}this.count=a,this.drops.geometry.instanceCount=a,this.aDrop.needsUpdate=!0,this.dropMat.uniforms.uAspect.value=n,this.fadeMat.uniforms.uK.value=Math.exp(-t*22);let o=this.renderer,c=o.getRenderTarget(),h=o.autoClear;o.setRenderTarget(this.rt),this.needClear&&(o.setClearColor(0,0),o.clear(),this.needClear=!1),o.autoClear=!1,o.render(this.scene,this.cam),o.autoClear=h,o.setRenderTarget(c)}};var Ps={cinematic:{key:"cinematic",label:"CINEMATIC",oceanRings:512,oceanSegs:512,oceanStep:.28,envSize:512,maxPixels:3686400,minScale:.6,refraction:!0,foamAcc:1024,ripples:!0,motionBlur:!0,fxaa:!0,bloomLevels:5,rain:26e3,splashes:2600,spray:9e3,bubbles:1400,motes:2600,lensRes:.5,lensDrops:150},high:{key:"high",label:"HIGH",oceanRings:384,oceanSegs:384,oceanStep:.36,envSize:256,maxPixels:2073600,minScale:.55,refraction:!0,foamAcc:512,ripples:!0,motionBlur:!1,fxaa:!0,bloomLevels:5,rain:15e3,splashes:1500,spray:5e3,bubbles:900,motes:1500,lensRes:.5,lensDrops:100},performance:{key:"performance",label:"PERFORMANCE",oceanRings:256,oceanSegs:256,oceanStep:.5,envSize:128,maxPixels:921600,minScale:.5,refraction:!1,foamAcc:0,ripples:!1,motionBlur:!1,fxaa:!1,bloomLevels:4,rain:6e3,splashes:500,spray:2e3,bubbles:400,motes:600,lensRes:.35,lensDrops:60}},Ta=class{constructor(t){this.renderer=t,this.profile=Ps.cinematic,this.scale=1,this.frameMs=16.7,this.fps=60,this._acc=0,this._slow=0,this._fast=0,this.adaptive=!0,this.info=this.detect()}detect(){let t=this.renderer.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),i=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown",n=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),s=/SwiftShader|llvmpipe|Software|Basic Render/i.test(i),a=/Intel\(R\) (U?HD|Iris)(?! Xe)|Mali|Adreno|PowerVR/i.test(i);return{webgl2:this.renderer.capabilities.isWebGL2,webgpu:typeof navigator<"u"&&!!navigator.gpu,halfFloat:!!t.getExtension("EXT_color_buffer_float")||!!t.getExtension("EXT_color_buffer_half_float"),gpu:i,mobile:n,software:s,weak:a}}pickDefault(){let t=this.info;return t.software||t.mobile?"performance":t.weak?"high":"cinematic"}setProfile(t){this.profile=Ps[t]||Ps.cinematic,this.scale=1,this._slow=this._fast=0}renderSize(t,e){let i=this.profile.maxPixels,n=Math.min(1,Math.sqrt(i/Math.max(1,t*e)));return n*=this.scale,[Math.max(320,Math.round(t*n)),Math.max(180,Math.round(e*n))]}update(t){let e=t*1e3;return this.frameMs+=(e-this.frameMs)*.06,this.fps=1e3/this.frameMs,this.adaptive?(this.frameMs>21.5?(this._slow+=t,this._fast=0):this.frameMs<13.5?(this._fast+=t,this._slow=0):(this._slow*=.9,this._fast*=.9),this._slow>1.5&&this.scale>this.profile.minScale?(this.scale=Math.max(this.profile.minScale,this.scale-.08),this._slow=0,!0):this._fast>6&&this.scale<1?(this.scale=Math.min(1,this.scale+.05),this._fast=0,!0):!1):!1}};var ei=[["hips",-1,0,0,0],["spine",0,0,.12,0],["chest",1,0,.3,0],["neck",2,0,.525,0],["head",3,0,.625,.012],["upperArmL",2,.178,.455,0],["foreArmL",5,.236,.172,.006],["handL",6,.286,-.078,.032],["upperArmR",2,-.178,.455,0],["foreArmR",8,-.236,.172,.006],["handR",9,-.286,-.078,.032],["thighL",0,.096,-.07,0],["shinL",11,.106,-.505,.006],["footL",12,.106,-.925,-.016],["thighR",0,-.096,-.07,0],["shinR",14,-.106,-.505,.006],["footR",15,-.106,-.925,-.016]],R={};ei.forEach((r,t)=>{R[r[0]]=t});var Wb=new E(0,.082,.088),Vt={jacket:[.72,.15,.04],jacketDark:[.42,.085,.028],tape:[.85,.87,.84],pants:[.045,.055,.08],shoe:[.022,.022,.024],skin:[.62,.43,.34],skinDark:[.46,.29,.22],hair:[.03,.024,.02],lip:[.36,.16,.14],eye:[.05,.035,.03]},Ra=class{constructor(){this.pos=[],this.col=[],this.si=[],this.sw=[],this.idx=[],this.n=0}vert(t,e,i){this.pos.push(t.x,t.y,t.z),this.col.push(e[0],e[1],e[2]);let n=[0,0,0,0],s=[0,0,0,0],a=0;for(let o=0;o<i.length&&o<4;o++)n[o]=i[o][0],s[o]=i[o][1],a+=i[o][1];for(let o=0;o<4;o++)s[o]/=a||1;return this.si.push(...n),this.sw.push(...s),this.n++}tube(t,e,i=!0,n=!0){let s=new E,a=new E,o=new E,c=new E,h=new E(0,0,1),l=new E(0,1,0),u=[];for(let f=0;f<t.length;f++){let g=t[Math.max(0,f-1)].c,b=t[Math.min(t.length-1,f+1)].c;s.subVectors(b,g).normalize(),t[f].ax?a.copy(t[f].ax):(a.crossVectors(s,h),a.lengthSq()<.04&&a.crossVectors(s,l),a.normalize()),o.crossVectors(a,s).normalize();let m=this.n;for(let p=0;p<e;p++){let x=p/e*Math.PI*2,v=Math.cos(x),_=Math.sin(x),A=t[f].rx,y=t[f].rz;if(t[f].shape){let P=t[f].shape(x,v,_);A*=P,y*=P}c.copy(t[f].c).addScaledVector(a,v*A).addScaledVector(o,_*y);let w=typeof t[f].col=="function"?t[f].col(x,c):t[f].col;this.vert(c,w,t[f].w)}u.push(m)}for(let f=0;f<u.length-1;f++)for(let g=0;g<e;g++){let b=u[f]+g,m=u[f]+(g+1)%e,p=u[f+1]+g,x=u[f+1]+(g+1)%e;this.idx.push(b,p,m,m,p,x)}let d=(f,g,b)=>{let m=typeof g.col=="function"?g.col(0,g.c):g.col,p=this.vert(g.c,m,g.w);for(let x=0;x<e;x++){let v=f+x,_=f+(x+1)%e;b?this.idx.push(p,_,v):this.idx.push(p,v,_)}};i&&d(u[0],t[0],!0),n&&d(u[u.length-1],t[t.length-1],!1)}build(){let t=new me;return t.setAttribute("position",new oe(this.pos,3)),t.setAttribute("color",new oe(this.col,3)),t.setAttribute("skinIndex",new _s(this.si,4)),t.setAttribute("skinWeight",new oe(this.sw,4)),t.setIndex(this.idx),t.computeVertexNormals(),t}},Ae=(r,t,e)=>new E(r,t,e),Ri=(r,t,e)=>new E().lerpVectors(r,t,e),Nu=(r,t,e)=>{let i=Math.max(0,Math.min(1,(e-r)/(t-r)));return i*i*(3-2*i)};function qb(){let r=new Ra,t=18,e=s=>{let a=ei[R[s]];return Ae(a[2],a[3],a[4])},i=[[-.135,.12,.095],[-.085,.165,.116],[-.02,.176,.12],[.05,.166,.114],[.11,.156,.108],[.17,.152,.106],[.24,.164,.114],[.31,.18,.124],[.385,.184,.128],[.445,.186,.118],[.488,.152,.1],[.52,.1,.086],[.552,.08,.08],[.58,.074,.076]],n=s=>{if(s<.02)return[[R.hips,1]];if(s<.14){let a=Nu(.02,.14,s);return[[R.hips,1-a],[R.spine,a]]}if(s<.2)return[[R.spine,1]];if(s<.32){let a=Nu(.2,.32,s);return[[R.spine,1-a],[R.chest,a]]}return[[R.chest,1]]};r.tube(i.map(([s,a,o])=>{let c=s>-.06,h=c?1.07:1;return{c:Ae(0,s,c?.004:0),rx:a*h,rz:o*h,w:n(s),col:(l,u)=>c?s>.28&&s<.325?Vt.tape:Math.abs(u.x)<.012&&u.z>0||s>.5?Vt.jacketDark:Vt.jacket:Vt.pants}}),t),r.tube([{c:Ae(0,.53,.002),rx:.063,rz:.066,col:Vt.skin,w:[[R.chest,.6],[R.neck,.4]]},{c:Ae(0,.575,.006),rx:.061,rz:.064,col:Vt.skin,w:[[R.neck,1]]},{c:Ae(0,.63,.012),rx:.06,rz:.063,col:Vt.skin,w:[[R.neck,.5],[R.head,.5]]},{c:Ae(0,.665,.016),rx:.057,rz:.06,col:Vt.skin,w:[[R.head,1]]}],14);for(let s of[1,-1]){let a=s>0?R.upperArmL:R.upperArmR,o=s>0?R.foreArmL:R.foreArmR,c=s>0?R.handL:R.handR,h=e(s>0?"upperArmL":"upperArmR"),l=e(s>0?"foreArmL":"foreArmR"),u=e(s>0?"handL":"handR"),d=Ae(u.x+s*.03,u.y-.182,u.z+.012),f=[];f.push({c:Ae(h.x-s*.012,h.y+.052,0),rx:.036,rz:.04,col:Vt.jacket,w:[[R.chest,.65],[a,.35]]}),f.push({c:Ae(h.x+s*.004,h.y+.02,0),rx:.064,rz:.066,col:Vt.jacket,w:[[R.chest,.4],[a,.6]]});let g=[[.12,.066],[.3,.062],[.52,.058],[.74,.054],[.9,.052]];for(let[x,v]of g){let _=x>.28&&x<.4;f.push({c:Ri(h,l,x),rx:v,rz:v*1.04,col:_?Vt.tape:Vt.jacket,w:x>.8?[[a,.75],[o,.25]]:[[a,1]]})}f.push({c:l.clone(),rx:.051,rz:.053,col:Vt.jacket,w:[[a,.5],[o,.5]]});let b=[[.12,.052],[.32,.051],[.55,.046],[.78,.041],[.9,.04]];for(let[x,v]of b)f.push({c:Ri(l,u,x),rx:v,rz:v,col:x>.86?Vt.jacketDark:Vt.jacket,w:x<.2?[[a,.25],[o,.75]]:[[o,1]]});f.push({c:Ri(l,u,.955),rx:.027,rz:.031,col:Vt.skin,w:[[o,1]]}),f.push({c:u.clone(),rx:.021,rz:.031,col:Vt.skin,w:[[o,.5],[c,.5]]}),f.push({c:Ri(u,d,.3),rx:.017,rz:.044,col:Vt.skin,w:[[c,1]]}),f.push({c:Ri(u,d,.55),rx:.015,rz:.046,col:Vt.skin,w:[[c,1]]}),f.push({c:Ri(u,d,.8),rx:.012,rz:.04,col:Vt.skinDark,w:[[c,1]]}),f.push({c:d.clone(),rx:.007,rz:.022,col:Vt.skinDark,w:[[c,1]]}),r.tube(f,12);let m=Ri(u,d,.22).add(Ae(0,0,.034)),p=Ri(u,d,.52).add(Ae(s*.008,0,.066));r.tube([{c:m,rx:.012,rz:.013,col:Vt.skin,w:[[c,1]]},{c:Ri(m,p,.6),rx:.011,rz:.011,col:Vt.skin,w:[[c,1]]},{c:p,rx:.007,rz:.007,col:Vt.skinDark,w:[[c,1]]}],7)}for(let s of[1,-1]){let a=s>0?R.thighL:R.thighR,o=s>0?R.shinL:R.shinR,c=s>0?R.footL:R.footR,h=e(s>0?"thighL":"thighR"),l=e(s>0?"shinL":"shinR"),u=e(s>0?"footL":"footR"),d=[];d.push({c:Ae(h.x,h.y+.045,0),rx:.08,rz:.09,col:Vt.pants,w:[[R.hips,.7],[a,.3]]});let f=[[.05,.094,.1],[.25,.09,.096],[.5,.079,.084],[.75,.067,.07],[.92,.06,.062]];for(let[m,p,x]of f)d.push({c:Ri(h,l,m),rx:p,rz:x,col:Vt.pants,w:m<.15?[[R.hips,.4],[a,.6]]:m>.85?[[a,.75],[o,.25]]:[[a,1]]});d.push({c:l.clone(),rx:.058,rz:.061,col:Vt.pants,w:[[a,.5],[o,.5]]});let g=[[.1,.056,.06],[.28,.057,.066],[.5,.05,.056],[.75,.042,.045],[.93,.038,.04]];for(let[m,p,x]of g)d.push({c:Ri(l,u,m).add(Ae(0,0,m>.15&&m<.6?-.008:0)),rx:p,rz:x,col:Vt.pants,w:m<.2?[[a,.25],[o,.75]]:[[o,1]]});d.push({c:u.clone(),rx:.036,rz:.04,col:Vt.shoe,w:[[o,.5],[c,.5]]}),r.tube(d,14,!0,!1);let b=u.y-.045;r.tube([{c:Ae(u.x,b+.012,u.z-.068),rx:.03,rz:.03,col:Vt.shoe,w:[[c,1]]},{c:Ae(u.x,b+.006,u.z-.035),rx:.042,rz:.046,col:Vt.shoe,w:[[c,.8],[o,.2]]},{c:Ae(u.x,b,u.z+.03),rx:.046,rz:.048,col:Vt.shoe,w:[[c,1]]},{c:Ae(u.x+s*.004,b-.008,u.z+.1),rx:.049,rz:.036,col:Vt.shoe,w:[[c,1]]},{c:Ae(u.x+s*.006,b-.014,u.z+.165),rx:.044,rz:.026,col:Vt.shoe,w:[[c,1]]},{c:Ae(u.x+s*.006,b-.018,u.z+.205),rx:.028,rz:.016,col:Vt.shoe,w:[[c,1]]}],12)}return r.build()}function Xb(){let r=new Ra,t=Ae(0,.722,.022),e=20,i=26,n=[];for(let h=0;h<=e;h++){let l=h/e*Math.PI,u=Math.cos(l),d=Math.sin(l),f=Math.max(0,-u),g=t.y+u*(u>0?.108:.118),b=.078*(1-.3*f*f),m=.097*(1-.2*f*f),p=t.z+.012*f-.006*Math.max(0,u);n.push({c:Ae(0,g,p),ax:Ae(1,0,0),rx:Math.max(.004,b*d),rz:Math.max(.004,m*d),w:f>.75?[[R.head,.7],[R.neck,.3]]:[[R.head,1]],shape:(x,v,_)=>{let A=Math.max(0,-_),y=1,w=g-t.y;return y+=.2*Math.exp(-Math.pow((w+.022)/.02,2))*Math.pow(A,26)*Math.pow(Math.max(0,1-Math.abs(v)*5),1),y+=.035*Math.exp(-Math.pow((w-.03)/.016,2))*Math.pow(A,3),y-=.03*Math.exp(-Math.pow((w-.008)/.012,2))*Math.pow(A,2)*Math.exp(-Math.pow((Math.abs(v)-.36)/.16,2)),y+=.05*Math.exp(-Math.pow((w+.088)/.022,2))*Math.pow(A,4),y},col:(x,v)=>{let _=v.y-t.y,A=v.x,y=v.z-t.z,w=y>0,P=w?.058+Math.abs(A)*-.25:-.045-Math.max(0,-y)*.2;if(_>P)return Vt.hair;if(w){if(Math.abs(_-.01)<.01&&Math.abs(Math.abs(A)-.031)<.014)return Vt.eye;if(Math.abs(_-.03)<.006&&Math.abs(Math.abs(A)-.031)<.022)return Vt.hair;if(Math.abs(_+.058)<.007&&Math.abs(A)<.024)return Vt.lip;if(_<-.02&&_>-.1&&Math.abs(A)>.02)return Vt.skinDark}return Vt.skin}})}r.tube(n,i,!1,!1);let s=r.build(),a=s.attributes.position,o=s.attributes.color,c=s.attributes.normal;for(let h=0;h<a.count;h++)o.getX(h)<.04&&o.getY(h)<.03&&a.setXYZ(h,a.getX(h)+c.getX(h)*.008,a.getY(h)+c.getY(h)*.008,a.getZ(h)+c.getZ(h)*.008);return s.computeVertexNormals(),s}var Ca=class{constructor(){this.group=new ve,this.group.name="survivor",this.bones=ei.map(t=>{let e=new On;return e.name=t[0],e}),ei.forEach((t,e)=>{let i=this.bones[e];if(t[1]>=0){let n=ei[t[1]];i.position.set(t[2]-n[2],t[3]-n[3],t[4]-n[4]),this.bones[t[1]].add(i)}else i.position.set(t[2],t[3],t[4])}),this.root=this.bones[0],this.group.add(this.root),this.group.updateMatrixWorld(!0),this.skeleton=new Es(this.bones),this.material=new ni({vertexColors:!0,roughness:.62,metalness:0,clearcoat:.28,clearcoatRoughness:.32,envMapIntensity:1}),this.body=new Nn(qb(),this.material),this.head=new Nn(Xb(),this.material);for(let t of[this.body,this.head])t.frustumCulled=!1,t.layers.enable(1),this.group.add(t),t.bind(this.skeleton,new Ct);this._v=new E,this.eyeLocal=Wb.clone(),this.glb=null}useGlb(t){this.glb=t,this.body.visible=!1,this.head.visible=!1,this.procHead=this.head,this.head={_v:!0,get visible(){return this._v},set visible(e){this._v=e,t.setHeadVisible(e)}},this.material=t.material,this.eyeLocal.set(0,t.eye.y-ei[R.head][3],t.eye.z-ei[R.head][4])}retarget(){this.glb&&this.glb.update(this.bones)}bone(t){return this.bones[R[t]]}eyeWorld(t){return t.copy(this.eyeLocal).applyMatrix4(this.bones[R.head].matrixWorld)}};var Ou=1025,jb=1.22,cr=9.81,Pa=.55;function Ci(r,t,e,i,n,s,a,o,c=-1,h=-1){return{name:r,offset:new E(t,e,i),rest:new E(t,e,i),vol:n/1e3,half:s,cdaP:a,cdaA:o,bone:c,boneB:h,sub:0,depth:-10,world:new E,wasSub:0}}var La=class r{constructor(t){this.waves=t,this.mass=80.6,this.inertia=new E(11.5,1.7,12.5),this.pos=new E,this.vel=new E,this.quat=new St,this.angVel=new E,this.prevPos=new E,this.prevQuat=new St,this.points=[Ci("head",0,.7,.02,5.2,.11,.035,.012),Ci("chest",0,.38,.01,29.7,.15,.13,.03),Ci("pelvis",0,0,0,15.5,.13,.11,.02),Ci("shoulderL",.21,.4,0,3.2,.07,.035,.006),Ci("shoulderR",-.21,.4,0,3.2,.07,.035,.006),Ci("armL",.28,.05,.02,1.8,.05,.04,.005,R.handL),Ci("armR",-.28,.05,.02,1.8,.05,.04,.005,R.handR),Ci("legL",.1,-.33,0,6.5,.09,.07,.008,R.shinL),Ci("legR",-.1,-.33,0,6.5,.09,.07,.008,R.shinR),Ci("footL",.105,-.82,0,3.4,.06,.055,.006,R.footL),Ci("footR",-.105,-.82,0,3.4,.06,.055,.006,R.footR)],this.totalVol=this.points.reduce((e,i)=>e+i.vol,0),this.breathVol=0,this.extForce=new E,this.extTorque=new E,this.wind=new E,this.waterTorque=new E,this.hydroTorque=new E,this.subFrac=0,this.mouthDepth=-1,this.eyeDepth=-1,this.relFlow=new E,this.relSpeed=0,this.dragG=0,this.aer=0,this.turb=0,this.plunge=0,this.surface=yi(),this.surfaceH=0,this.splash=0,this.splashPos=new E,this._s=yi(),this._w={vx:0,vy:0,vz:0,ax:0,ay:0,az:0},this._r=new E,this._p=new E,this._vp=new E,this._u=new E,this._f=new E,this._F=new E,this._T=new E,this._axis=new E,this._tmp=new E,this._tmp2=new E,this._qi=new St,this._dq=new St,this._up=new E,this._mouth=new E(0,.655,.105),this._eye=new E(0,.705,.1)}reset(t,e){let i=this.waves.sample(t,e,this._s);this.pos.set(t,i.h-.62,e),this.vel.set(i.vx,i.vy,i.vz),this.quat.identity(),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat)}setAirway(t,e){this._mouth.copy(t),this._eye.copy(e),this._mouthH=new E(t.x,t.y-.625,t.z-.012),this._eyeH=new E(e.x,e.y-.625,e.z-.012)}syncLimbs(t){let e=this._tmp,i=t.group.matrixWorld,n=r._im||(r._im=new Ct);n.copy(i).invert(),this._mouthH||this.setAirway(this._mouth.clone(),this._eye.clone());let s=t.bones[R.head].matrixWorld;e.copy(this._mouthH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._mouth.lerp(e,.5),e.copy(this._eyeH).applyMatrix4(s).applyMatrix4(n),e.lengthSq()<1.2&&this._eye.lerp(e,.5);for(let a of this.points)a.bone<0||(e.setFromMatrixPosition(t.bones[a.bone].matrixWorld).applyMatrix4(n),e.lengthSq()<1.6&&a.offset.lerp(e,.5))}step(t){let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._F.set(0,0,0),n=this._T.set(0,0,0),s=this._axis.set(0,1,0).applyQuaternion(this.quat),a=0,o=0,c=0,h=0,l=0,u=0;this.relFlow.set(0,0,0),this.splash=0;let d=this._tmp2.set(0,0,0),f=0,g=0;for(let q=0;q<this.points.length;q++){let z=this.points[q],N=this._r.copy(z.offset).applyQuaternion(this.quat),Z=this._p.copy(this.pos).add(N);z.world.copy(Z);let et=this._vp.copy(this.angVel).cross(N).add(this.vel),$=e.sample(Z.x,Z.z,this._s),G=$.h-Z.y;z.depth=G;let B=Math.max(0,Math.min(1,(G+z.half)/(2*z.half)));if(z.bone<0&&B>.5!=z.wasSub>.5){let st=Math.abs(et.y-$.vy)+.4*Math.hypot(et.x-$.vx,et.z-$.vz);st>this.splash&&(this.splash=st,this.splashPos.set(Z.x,$.h,Z.z))}z.wasSub=B,z.sub=B;let j=this._f.set(0,0,0),ut=z.vol+(q===1?this.breathVol/1e3:0);if(B>0){let st=Math.max(0,G),at=$.aer*Math.exp(-st/3.5),lt=Ou*(1-.72*at);at>c&&(c=at),$.turb>h&&(h=$.turb),$.plunge>u&&(u=$.plunge);let ht=e.bodyFlow($.x0,$.z0,st,this._w),Rt=Math.exp(-st/80),V=Math.exp(-st/(2.5+.35*Math.max(0,$.brkH)));ht.vx+=$.bvx*(.25*Rt+.75*V),ht.vy+=$.bvy*Rt,ht.vz+=$.bvz*(.25*Rt+.75*V),$.plunge>.01&&(ht.vy-=$.plunge*Math.exp(-st/(2+.45*Math.max(0,$.brkH)))),e.breakerFlow(Z.x,Z.y,Z.z,$.h,ht);let ne=lt*ut*B;f+=-N.z*ne*cr,g+=N.x*ne*cr,j.set(ne*(1+Pa)*ht.ax,ne*(cr+(1+Pa)*(ht.ay+$.bay*Rt)),ne*(1+Pa)*ht.az);let wt=this._u.set(ht.vx-et.x,ht.vy-et.y,ht.vz-et.z),Lt=wt.dot(s),xt=this._tmp.copy(s).multiplyScalar(Lt),$t=this._up.copy(wt).sub(xt),Pt=.5*lt*z.cdaP*B*$t.length()+24*z.cdaP*B/.1,L=.5*lt*z.cdaA*B*Math.abs(Lt)+8*B*z.cdaA/.01,T=$t.x*Pt+xt.x*L,X=$t.y*Pt+xt.y*L,ot=$t.z*Pt+xt.z*L;j.x+=T,j.y+=X,j.z+=ot,d.x+=T,d.y+=X,d.z+=ot,a+=ut*B,this.relFlow.addScaledVector(wt,ut*B),l+=ut*B}if(B<1){let st=this._u.set(this.wind.x-et.x,this.wind.y-et.y,this.wind.z-et.z),at=.5*jb*z.cdaP*1.1*(1-B)*st.length();j.addScaledVector(st,at)}i.add(j),n.add(this._tmp.copy(N).cross(j))}o=d.length(),this.hydroTorque.set(f,0,g),this.subFrac=a/this.totalVol,this.aer=c,this.turb=h,this.plunge=u,l>0&&this.relFlow.multiplyScalar(1/l),this.relSpeed=this.relFlow.length(),this.dragG=o/(this.mass*cr);let b=this.mass+Pa*Ou*a;i.add(this.extForce),i.y-=this.mass*cr,this.vel.addScaledVector(i,t/b);let m=this.vel.length();m>45&&this.vel.multiplyScalar(45/m),this.pos.addScaledVector(this.vel,t),this.waterTorque.copy(n),n.add(this.extTorque);let p=this._qi.copy(this.quat).invert(),x=this._tmp.copy(this.angVel).applyQuaternion(p),v=this._tmp2.copy(n).applyQuaternion(p),_=1+.6*this.subFrac,A=this.inertia.x*_,y=this.inertia.y*_,w=this.inertia.z*_,P=(v.x-(w-y)*x.y*x.z)/A,M=(v.y-(A-w)*x.z*x.x)/y,S=(v.z-(y-A)*x.x*x.y)/w;x.x+=P*t,x.y+=M*t,x.z+=S*t;let U=Math.exp(-(.25+1.1*this.subFrac)*t);x.multiplyScalar(U);let O=x.length();O>14&&x.multiplyScalar(14/O),this.angVel.copy(x).applyQuaternion(this.quat);let Q=this.angVel.length()*t;Q>1e-7&&(this._dq.setFromAxisAngle(this._r.copy(this.angVel).normalize(),Q),this.quat.premultiply(this._dq).normalize());let I=this._r.copy(this._mouth).applyQuaternion(this.quat).add(this.pos),D=e.sample(I.x,I.z,this.surface);this.surfaceH=D.h,this.mouthDepth=D.h-I.y;let k=this._p.copy(this._eye).applyQuaternion(this.quat).add(this.pos);this.eyeDepth=D.h-k.y}};var Ia=class{constructor(){this.reset(),this.events=[]}reset(){this.oxygen=100,this.stamina=100,this.temp=37,this.fatigue=0,this.blackout=0,this.alive=!0,this.cause="",this.timeAlive=0,this.breathPhase=0,this.lung=.6,this.breathRate=.3,this.exertion=0,this.gaspTimer=0,this.submergedTime=0,this.wasUnder=!1,this.swallow=0,this.eff=1,this.condition=1,this.shiver=0,this.inhaling=!1,this.lungAtDive=.6}update(t,e){if(!this.alive)return;this.timeAlive+=t;let i=e.mouthUnder,n=e.effort;if(this.exertion+=(pt(n*.6+(100-this.stamina)/160+(100-this.oxygen)/120)-this.exertion)*(1-Math.exp(-t*.8)),i)this.submergedTime+=t,this.oxygen-=t*(2.3+2.4*n+1.5*e.turb)*(1+.5*this.swallow)*(1.3-.45*this.lungAtDive),this.wasUnder||(this.inhaling&&e.sudden&&(this.swallow=Math.min(1,this.swallow+.45),this.oxygen-=6),this.lungAtDive=this.lung,this.events.push({type:"submerge",lung:this.lung})),this.lung=Math.max(.12,this.lung-t*(.025+.03*n));else{if(this.wasUnder){let x=pt((100-this.oxygen)/60+this.submergedTime/12);this.gaspTimer=1.5+5.5*x,this.events.push({type:"surface",need:x,time:this.submergedTime}),this.breathPhase=0,this.submergedTime=0}let u=this.gaspTimer>0?1:0;this.gaspTimer=Math.max(0,this.gaspTimer-t),this.oxygen+=t*(15+13*u)*(1-.6*this.swallow),this.swallow=Math.max(0,this.swallow-t*.12);let d=mt(.26,.95,pt(this.exertion*.9+u*.55));this.breathRate+=(d-this.breathRate)*(1-Math.exp(-t*1.4));let f=this.stamina<25?1+.35*Math.sin(this.timeAlive*2.7)*Math.sin(this.timeAlive*1.3):1,g=this.breathPhase;this.breathPhase+=t*this.breathRate*f,this.breathPhase>=1&&(this.breathPhase-=1);let b=this.breathPhase<.4;b&&!this.inhaling&&this.events.push({type:"inhale",strength:pt(.25+this.exertion*.8+u*.6),gasp:u>0&&g>this.breathPhase?1:u}),!b&&this.inhaling&&this.events.push({type:"exhale",strength:pt(.2+this.exertion*.7+u*.4),cough:this.swallow>.25?1:0}),this.inhaling=b;let m=mt(.45,.95,pt(this.exertion+u)),p=b?.45+.5*m*(this.breathPhase/.4):.95*m-(.95*m-.4)*((this.breathPhase-.4)/.6)+0;this.lung+=(Oi(p,.3,1)-this.lung)*(1-Math.exp(-t*9)),e.brace>.5&&(this.lung+=(1-this.lung)*(1-Math.exp(-t*5)))}this.wasUnder=i,this.oxygen=Oi(this.oxygen,0,100);let s=ze(36,32.5,this.temp),a=1-pt((36-this.temp)/3.5),o=100-this.fatigue*.62,c=n>.42?(n-.42)*7:0,h=i?0:n<.42?(3.4-n*4)*(.45+.55*a)*(1-this.fatigue/170):0;this.stamina=Oi(this.stamina+(h-c)*t,0,o),this.fatigue=Oi(this.fatigue+t*(.035+.16*n),0,100);let l=.0042*(1+.45*n)*(.6+.4*e.subFrac)*(1+.3*e.storm);this.temp-=l*t,this.shiver=pt((36.2-this.temp)/1.6)*(1-pt((33-this.temp)/1.5)),this.oxygen<=.01?this.blackout+=t/11:this.blackout-=t/3.5,this.temp<31.5&&(this.blackout+=t/40),this.blackout=pt(this.blackout),this.blackout>=1&&(this.alive=!1,this.cause=this.temp<31.5&&this.oxygen>5?"cold":"drown",this.events.push({type:"dead",cause:this.cause})),this.eff=mt(.32,1,ze(0,38,this.stamina))*(.45+.55*a)*(1-.6*this.blackout),this.condition=pt(Math.min(this.oxygen/100+.25,1)*(.4+.6*this.stamina/100)*(.35+.65*a)*(1-this.blackout))}};var Gn=new E(0,1,0),Da=class{constructor(t,e,i){this.body=t,this.survival=e,this.input=i,this.yaw=Math.PI,this.pitch=0,this.control=1,this.impact=0,this.impactPeak=0,this.moveAmt=0,this.effort=0,this.swimBlend=0,this.underSwim=0,this.crawlBlend=0,this.diveBlend=0,this.riseBlend=0,this.swimHeld=!1,this.diveHeld=!1,this.upHeld=!1,this.sprintHeld=!1,this.diveTime=0,this.moveDir=new E(0,0,1),this.heading=new E(0,0,1),this.facing=new E(0,0,1),this.recover=0,this.strokePhase=0,this.brace=0,this.air=0,this.grab=null,this.struggleW=0,this.tumble=0,this.events=[],this._lastImpact=-10,this._time=0,this._fwd=new E,this._right=new E,this._dir=new E,this._x=new E,this._y=new E,this._z=new E,this._m=new Ct,this._qt=new St,this._qe=new St,this._ax=new E,this._h=new E}fixedUpdate(t){let e=this.body,i=this.survival,n=this.input;this._time+=t;let s=e.dragG,a=s>this.impact+.25;this.impact=s>this.impact?mt(this.impact,s,1-Math.exp(-t*30)):this.impact*Math.exp(-t*2.2),this.impactPeak=Math.max(this.impactPeak*Math.exp(-t*1.2),s),s>1.4&&a&&this._time-this._lastImpact>.8&&(this._lastImpact=this._time,this.events.push({type:"impact",strength:s,dir:e.relFlow.clone().normalize(),aer:e.aer}));let o=pt(1-ze(.9,3.2,this.impact)-.75*e.aer-.55*e.turb-.9*this.air),c=o<this.control?14:.55+.9*i.eff;this.control+=(Math.max(.04,o)-this.control)*(1-Math.exp(-t*c));let h=this.control*(i.alive?1:0)*(1-.8*i.blackout);this.tumble+=(pt(e.angVel.length()/3.5)*(1-h*.6)-this.tumble)*(1-Math.exp(-t*3)),this.recover=Math.max(0,this.recover-t);let l=n.enabled?n.axisX():0,u=n.enabled?n.axisZ():0,d=n.enabled&&n.swim(),f=n.enabled&&n.dive();this.swimHeld=d,this.diveHeld=f,this.sprintHeld=d,this.upHeld=d&&e.mouthDepth>.45&&!f,this.diveTime=f?this.diveTime+t:0;let g=this._fwd.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),b=this._right.set(-g.z,0,g.x);this.facing.copy(g);let m=this._h.copy(g).multiplyScalar(u).addScaledVector(b,l),p=Math.min(1,m.length());p>.05?m.multiplyScalar(1/m.length()):(m.copy(g),p=0),this.heading.lerp(m,1-Math.exp(-t*(p>0||d||f?7:1.5))).normalize();let x=e.mouthDepth>.45,v=Math.max(0,e.mouthDepth);this.underSwim+=((x||f&&e.mouthDepth>.1?1:0)-this.underSwim)*(1-Math.exp(-t*5)),this.diveBlend+=((f?1:0)-this.diveBlend)*(1-Math.exp(-t*(f?7:3.5)));let _=x&&!f;this.riseBlend+=((_?1:0)-this.riseBlend)*(1-Math.exp(-t*4));let A=this._dir.set(0,0,0),y=0,w=0;if(f){let $=.95*pt((6.5-v)/2.5);A.copy(this.heading).multiplyScalar(.55+.45*(1-$)).addScaledVector(Gn,-$).normalize(),y=1,w=d?360:270}else x?d?(A.copy(this.heading).multiplyScalar(p>0?.75:.35).addScaledVector(Gn,.9).normalize(),y=1,w=360):p>0&&(A.copy(this.heading).multiplyScalar(p).addScaledVector(Gn,.45*Math.min(1,v/.8)).normalize(),y=p,w=170):d?(A.copy(this.heading),y=1,w=380):p>0&&(A.copy(this.heading),y=p,w=150);y>.01&&this.moveDir.lerp(A,1-Math.exp(-t*6)).normalize(),this.moveAmt+=(y-this.moveAmt)*(1-Math.exp(-t*5));let P=i.eff*h,M=Math.min(1,e.subFrac*1.25),S=e.extForce.set(0,0,0),U=0;if(y>.01){let $=1+.3*this.swimBlend*Math.sin(2*this.strokePhase)+.38*this.underSwim*Math.sin(this.strokePhase-1),G=x||f?1:pt(1+(e.mouthDepth+.28)*3.5);S.addScaledVector(A,w*P*M*y*$*G*(this.grab?.2:1)),U+=(w>200?.8:.45)*y,f&&this.diveTime<1.1&&v<1.2&&(S.y-=260*P*Math.sin(Math.min(1,this.diveTime/1.1)*Math.PI))}if(!x&&e.mouthDepth<-.22&&this.air<.3&&e.pos.y-e.surfaceH<1&&(S.y-=Math.min(520,(-e.mouthDepth-.22)*1500)),x&&!f&&!d&&(S.y+=165*P*M,U+=.5),!x&&!f){let $=e.vel.y-e.surface.vy,G=.06+.07*pt(i.stamina/60),B=Math.max(0,Math.min(210,(e.mouthDepth+G)*1e3-$*140))*P*M*(1+.45*Math.sin(2*this.strokePhase));this.struggleW>.05&&(B=B*(1-.65*this.struggleW)+175*this.struggleW*P*M*Math.max(0,Math.sin(this.strokePhase))),S.y+=B*(1-.4*this.crawlBlend),U+=.34*Math.min(1,B/100)*(1-this.crawlBlend)+.08}if(this.grab){let $=this.grab.x-e.pos.x,G=this.grab.z-e.pos.z,B=Math.hypot($,G);if(B<4.5){let j=Math.min(280,B*230)*h;S.x+=$/(B+.001)*j,S.z+=G/(B+.001)*j,S.y+=70*M}}this.effort+=(U-this.effort)*(1-Math.exp(-t*6));let O=!x&&!f&&y>.15?d?1:.5*y:0;this.crawlBlend+=((d&&!x&&!f?1:0)-this.crawlBlend)*(1-Math.exp(-t*4)),this.swimBlend+=(O-this.swimBlend)*(1-Math.exp(-t*(O>this.swimBlend?3.2:2.2)));let Q=this._y,I=this._z,D=this._x,k=this._ax.set(this.heading.x,0,this.heading.z);k.lengthSq()<.01?k.copy(g):k.normalize();let q=this._time;if(f||x&&y>.1)Q.copy(A),I.copy(Gn).multiplyScalar(-(1-Math.abs(Q.y))).addScaledVector(k,Q.y),I.addScaledVector(Q,-I.dot(Q));else if(x)Q.copy(Gn).addScaledVector(k,.12),Q.normalize(),I.copy(k),I.addScaledVector(Q,-I.dot(Q));else{let $=this.swimBlend;Q.copy(Gn).multiplyScalar(1-$*.6).addScaledVector(k,$);let G=1-$;Q.addScaledVector(k,G*(.13+.07*Math.sin(q*.83)*Math.sin(q*.31))),Q.addScaledVector(b,G*.08*Math.sin(q*.57+1.3)*Math.sin(q*.23+.4)),Q.normalize(),I.copy(k).multiplyScalar(1-$*.9).addScaledVector(Gn,-$*.9),I.addScaledVector(Q,-I.dot(Q))}I.lengthSq()<1e-4&&I.copy(k).addScaledVector(Q,-k.dot(Q)),I.lengthSq()<1e-4&&I.copy(b),I.normalize(),D.crossVectors(Q,I).normalize(),this._m.makeBasis(D,Q,I),this._qt.setFromRotationMatrix(this._m);let z=this._qe.copy(e.quat).invert().premultiply(this._qt);z.w<0&&(z.x=-z.x,z.y=-z.y,z.z=-z.z,z.w=-z.w);let N=2*Math.acos(Math.min(1,z.w)),Z=e.extTorque.set(0,0,0);if(N>1e-4){let $=Math.sqrt(Math.max(1e-9,1-z.w*z.w));this._ax.set(z.x/$,z.y/$,z.z/$);let G=Math.max(this.swimBlend,this.underSwim,this.diveBlend),B=f||x?1+2.2*pt((N-.5)/.9):1,j=(72+70*G)*P*B,ut=(21+13*G)*P;Z.copy(this._ax).multiplyScalar(j*Math.min(N,1.4)).addScaledVector(e.angVel,-ut);let st=Z.length(),at=(130+110*G)*P*B;st>at&&Z.multiplyScalar(at/st)}let et=Math.max(this.swimBlend,f?1:0,x&&y>.1?this.underSwim:0);et>.02&&Z.addScaledVector(e.hydroTorque,-et*Math.min(1,P*1.5)),this.swimBlend>.2&&(this._ax.set(0,1,0).applyQuaternion(e.quat),Z.addScaledVector(this._ax,20*this.swimBlend*P*Math.sin(this.strokePhase)))}};var Wn=ei.length,Ds=Math.PI*2,Bu=new E(0,-1,0),Ls=["float","tread","paddle","swim","dive","under","rise","struggle","tumble","recover","exhaust","brace","flail"],Yb={float:1.3,tread:2,paddle:1.3,swim:1.5,dive:1.5,under:1.45,rise:2.3,struggle:2.5,tumble:.5,recover:1.7,exhaust:.8,brace:.9,flail:3};function it(r,t,e,i,n){let s=t*3;r[s]=e,r[s+1]=i,r[s+2]=n}var Pc=(r,t,e)=>Math.exp(-Math.pow((r-t)/e,2)),Bi=r=>(r=pt(r),r*r*(3-2*r)),Uc=r=>(r%Ds+Ds)%Ds/Ds;function zu(r,t,e,i){let n=e;it(r,R.spine,.05+.04*Math.sin(t*2)*n,.05*Math.sin(t)*n,.04*Math.sin(t+.6)*n),it(r,R.chest,-.05,-.06*Math.sin(t)*n,0),it(r,R.neck,-.14,0,0),it(r,R.head,-.22-.04*Math.sin(t*2)*n,0,0);for(let s of[1,-1]){let a=s>0,o=a?0:.55,c=Math.sin(t+o),h=Math.cos(t+o);it(r,a?R.upperArmL:R.upperArmR,-.34+.1*h*n,-s*.34*c*n,s*mt(1.4,.95,i)),it(r,a?R.foreArmL:R.foreArmR,mt(-.42,-.8,i)-.24*h*n,0,0),it(r,a?R.handL:R.handR,.32*c*n,0,s*.2*h*n);let l=t+(a?0:Math.PI);it(r,a?R.thighL:R.thighR,mt(-.92,-.38,i)+.22*Math.sin(l)*n,s*.28*Math.cos(l)*n,s*(mt(.5,.24,i)+.12*Math.cos(l)*n)),it(r,a?R.shinL:R.shinR,mt(1.42,.62,i)+.46*Math.sin(l-1.2)*n,0,0),it(r,a?R.footL:R.footR,.22+.3*Math.sin(l-1.8)*n,0,0)}}function Kb(r,t){let e=Uc(t),i,n,s;if(e<.22)i=-2.25,n=.1,s=-.1;else if(e<.55){let u=Bi((e-.22)/.33);i=mt(-2.25,-1.25,u),n=mt(.1,.95,u),s=mt(-.1,-1.35,u)}else if(e<.72){let u=Bi((e-.55)/.17);i=mt(-1.25,-.8,u),n=mt(.95,.28,u),s=mt(-1.35,-2.1,u)}else{let u=Bi((e-.72)/.28);i=mt(-.8,-2.25,u),n=mt(.28,.1,u),s=mt(-2.1,-.1,u)}let a,o,c,h;if(e<.5)a=.06,o=.07,c=.1,h=.75;else if(e<.74){let u=Bi((e-.5)/.24);a=mt(.06,-.78,u),o=mt(.07,.46,u),c=mt(.1,1.9,u),h=mt(.75,-.15,u)}else if(e<.88){let u=Bi((e-.74)/.14);a=mt(-.78,-.18,u),o=mt(.46,.5,u),c=mt(1.9,.3,u),h=mt(-.15,.3,u)}else{let u=Bi((e-.88)/.12);a=mt(-.18,.06,u),o=mt(.5,.07,u),c=mt(.3,.1,u),h=mt(.3,.75,u)}let l=Pc(e,.5,.14);it(r,R.spine,-.08-.06*l,0,0),it(r,R.chest,-.1-.06*l,0,0),it(r,R.neck,-.28,0,0),it(r,R.head,-.36-.05*l,0,0);for(let u of[1,-1]){let d=u>0;it(r,d?R.upperArmL:R.upperArmR,i,0,u*n),it(r,d?R.foreArmL:R.foreArmR,s,0,0),it(r,d?R.handL:R.handR,.12,0,0),it(r,d?R.thighL:R.thighR,a,0,u*o),it(r,d?R.shinL:R.shinR,c,0,0),it(r,d?R.footL:R.footR,h,0,0)}}function Zb(r,t){let e=Math.sin(t),i=Math.sin(t*2);it(r,R.spine,-.13+.04*i,.25*e,.07*e),it(r,R.chest,-.13,.25*e,.05*e),it(r,R.neck,-.36,-.2*e,0),it(r,R.head,-.4+.06*i,-.24*e,.05*e);for(let n of[1,-1]){let s=n>0,a=Uc(t+(s?0:Math.PI)),o,c,h,l;if(a<.58){let d=a/.58,f=Bi(d);o=mt(-(Math.PI-.35),-.15,f),c=-.1-.85*Math.sin(d*Math.PI),h=.14+.1*Math.sin(d*Math.PI),l=.3*Math.sin(d*Math.PI)}else{let d=(a-.58)/.42,f=Bi(d);o=mt(.15,Math.PI+.35,f),c=-.15-1.25*Math.sin(d*Math.PI),h=.16+.5*Math.sin(d*Math.PI),l=.05}it(r,s?R.upperArmL:R.upperArmR,o,0,n*h),it(r,s?R.foreArmL:R.foreArmR,c,0,0),it(r,s?R.handL:R.handR,l,0,0);let u=t*2+(s?0:Math.PI);it(r,s?R.thighL:R.thighR,-.06+.27*Math.sin(u),0,n*.05),it(r,s?R.shinL:R.shinR,.14+.46*Math.max(0,Math.sin(u+.9)),0,0),it(r,s?R.footL:R.footR,.8,0,0)}}function Hu(r,t,e){let i=Uc(t),n=Math.sin(i*Ds-1.2);it(r,R.spine,-.05+.09*n+.42*e,0,0),it(r,R.chest,-.06-.07*n+.3*e,0,0),it(r,R.neck,-.2+.42*e,0,0),it(r,R.head,-.3+.05*n+.45*e,0,0);let s,a,o;if(i<.36){let l=i/.36,u=Bi(l);s=mt(-(Math.PI*.94),-.2,u),a=.14+.92*Math.sin(l*Math.PI),o=-.4*Math.sin(l*Math.PI)}else if(i<.52)s=-.2,a=.14,o=-.05;else{let l=(i-.52)/.48,u=Bi(l);s=mt(-.2,-(Math.PI*.94),u),a=.14+.1*Math.sin(l*Math.PI),o=-1.85*Math.sin(l*Math.PI)}s=mt(s,-2.75,e),a=mt(a,.12,e),o=mt(o,-.1,e);let c=Pc(i,.62,.1),h=Pc(i,.78,.07);for(let l of[1,-1]){let u=l>0;it(r,u?R.upperArmL:R.upperArmR,s,0,l*a),it(r,u?R.foreArmL:R.foreArmR,o,0,0),it(r,u?R.handL:R.handR,0,0,0),it(r,u?R.thighL:R.thighR,mt(-.08-.62*c+.14*h,-1,e),0,l*(.07+.42*c*(1-e))),it(r,u?R.shinL:R.shinR,mt(.12+1.35*c,.1,e),0,0),it(r,u?R.footL:R.footR,.75-.5*c*(1-e),0,0)}}function Jb(r,t,e,i){let n=(s,a)=>(Ye(e*a,s)-.5)*i;it(r,R.spine,-.08,.06*Math.sin(t),.05*Math.sin(t*.7)*i),it(r,R.chest,-.12,.1*Math.sin(t),0),it(r,R.neck,-.34,.1*Math.sin(t*.37)*i,0),it(r,R.head,-.42+n(1,1.3)*.12,.16*Math.sin(t*.37+.6)*i,0);for(let s of[1,-1]){let a=s>0,o=t+(a?0:Math.PI),c=.5+.5*Math.sin(o),h=Math.max(0,-Math.cos(o)),l=Math.max(0,Math.cos(o));it(r,a?R.upperArmL:R.upperArmR,mt(-.55,-2.8,c)+n(a?5:7,1.1)*.3,s*.1*Math.cos(o)*i,s*(.22+.24*(1-c)+.1*i)),it(r,a?R.foreArmL:R.foreArmR,-.25-.45*h-1.05*l,0,0),it(r,a?R.handL:R.handR,.35*h,0,s*.1);let u=t*2+(a?0:Math.PI)+n(a?11:13,.8)*1.2;it(r,a?R.thighL:R.thighR,-.14+.44*Math.sin(u),0,s*(.1+.08*i)),it(r,a?R.shinL:R.shinR,.26+.58*Math.max(0,Math.sin(u+.9)),0,0),it(r,a?R.footL:R.footR,.72,0,0)}}function Qb(r,t,e){let i=(o,c)=>Ye(e*c,o)-.5,n=Math.sin(t),s=Math.max(0,n),a=Math.max(0,-n);it(r,R.spine,-.1-.06*s,.07*Math.sin(t*.5),.05*Math.sin(t*.7)),it(r,R.chest,-.12-.04*s,.05*Math.sin(t*.5+.8),0),it(r,R.neck,-.3,.1*Math.sin(t*.37),0),it(r,R.head,-.4+.08*a+i(1,1.3)*.1,.16*Math.sin(t*.37+.6),.05*Math.sin(t*.53));for(let o of[1,-1]){let c=o>0,h=c?0:.45,l=Math.sin(t+h),u=Math.max(0,l),d=Math.max(0,-l);it(r,c?R.upperArmL:R.upperArmR,-.24+.18*l+i(c?3:4,1.7)*.2,o*.14*Math.cos(t+h),o*(1.24-.56*(.5+.5*l))),it(r,c?R.foreArmL:R.foreArmR,-.26-.42*d,0,0),it(r,c?R.handL:R.handR,.42*u,0,o*.1);let f=t*.6+(c?0:2.1);it(r,c?R.thighL:R.thighR,-.24+.18*Math.sin(f),0,o*.16),it(r,c?R.shinL:R.shinR,.46+.26*Math.sin(f+1),0,0),it(r,c?R.footL:R.footR,.55,0,0)}}function $b(r,t){let e=(i,n)=>Ye(t*n,i)-.5;it(r,R.spine,.2+e(1,.7)*.34,e(2,.6)*.3,e(3,.5)*.22),it(r,R.chest,.14+e(4,.8)*.26,e(5,.6)*.26,0),it(r,R.neck,.16+e(6,.9)*.3,e(7,.7)*.36,0),it(r,R.head,.1+e(8,1)*.3,e(9,.8)*.4,e(10,.6)*.18);for(let i of[1,-1]){let n=i>0,s=n?20:40;it(r,n?R.upperArmL:R.upperArmR,-.7+e(s,.9)*1.3,i*e(s+1,.7)*.6,i*(.8+e(s+2,.8)*.7)),it(r,n?R.foreArmL:R.foreArmR,-.85+e(s+3,1.1)*1,0,0),it(r,n?R.handL:R.handR,e(s+4,1.3)*.6,0,e(s+5,1.2)*.4),it(r,n?R.thighL:R.thighR,-.6+e(s+6,.8)*1,0,i*(.24+e(s+7,.7)*.36)),it(r,n?R.shinL:R.shinR,.95+e(s+8,1)*.9,0,0),it(r,n?R.footL:R.footR,.5+e(s+9,1.1)*.4,0,0)}}function tv(r,t,e){it(r,R.spine,-.08-.08*e,0,0),it(r,R.chest,-.1-.1*e,0,0),it(r,R.neck,-.26,0,0),it(r,R.head,-.4-.05*e,0,0);for(let i of[1,-1]){let n=i>0,s=Math.sin(t+(n?0:.5));it(r,n?R.upperArmL:R.upperArmR,-.3+.12*s,-i*.3*s,i*(1.05+.1*e)),it(r,n?R.foreArmL:R.foreArmR,-.6-.25*s,0,0),it(r,n?R.handL:R.handR,.25*s,0,0);let a=t+(n?0:Math.PI);it(r,n?R.thighL:R.thighR,-.7+.26*Math.sin(a),i*.2*Math.cos(a),i*.4),it(r,n?R.shinL:R.shinR,1.15+.4*Math.sin(a-1.1),0,0),it(r,n?R.footL:R.footR,.35,0,0)}}function ev(r,t){let e=Math.sin(t*.5);it(r,R.spine,-.06,0,.04*e),it(r,R.chest,-.1,0,0),it(r,R.neck,-.28,.12*e,0),it(r,R.head,-.42,.1*e,.08*e);for(let i of[1,-1]){let n=i>0;it(r,n?R.upperArmL:R.upperArmR,-.18+.08*e,i*.12*e,i*1.02),it(r,n?R.foreArmL:R.foreArmR,-.55-.12*e,0,0),it(r,n?R.handL:R.handR,.15,0,0),it(r,n?R.thighL:R.thighR,-.14+.09*Math.sin(t*.5+(n?0:2)),0,i*.14),it(r,n?R.shinL:R.shinR,.28+.12*Math.sin(t*.5+(n?1:3)),0,0),it(r,n?R.footL:R.footR,.6,0,0)}}function iv(r,t){let e=Math.sin(t*1.4);it(r,R.spine,.3,.22,0),it(r,R.chest,.22,.2,0),it(r,R.neck,.28,.22,0),it(r,R.head,.3,.28,.1),it(r,R.upperArmL,-1.35,-.55,.3),it(r,R.foreArmL,-1.55,0,0),it(r,R.handL,.2,0,0),it(r,R.upperArmR,-1.6,.35,-.45),it(r,R.foreArmR,-1.75,0,0),it(r,R.handR,.2,0,0),it(r,R.thighL,-.85+.12*e,0,.18),it(r,R.shinL,1.25-.15*e,0,0),it(r,R.footL,.4,0,0),it(r,R.thighR,-.7-.12*e,0,-.18),it(r,R.shinR,1.15+.15*e,0,0),it(r,R.footR,.4,0,0)}function nv(r,t,e){let i=(n,s)=>Ye(e*s,n)-.5;it(r,R.spine,.05+.18*Math.sin(t*.9),.22*Math.sin(t*.5+1),.12*Math.sin(t*.7)),it(r,R.chest,-.04+.13*Math.sin(t*.9+.6),.22*Math.sin(t*.5+1.4),0),it(r,R.neck,-.12+i(1,1.5)*.26,i(2,1.3)*.36,0),it(r,R.head,-.2+i(3,1.7)*.3,i(4,1.4)*.4,i(5,1.1)*.16);for(let n of[1,-1]){let s=n>0,a=t*(s?1:1.17)+(s?0:2.1),o=s?60:80;it(r,s?R.upperArmL:R.upperArmR,-1.5+1.05*Math.sin(a)+i(o,1.9)*.4,n*(.15+.35*Math.cos(a*.9)),n*(.65+.4*Math.sin(a*1.3+1))),it(r,s?R.foreArmL:R.foreArmR,-.7-.6*Math.sin(a+1.2),0,0),it(r,s?R.handL:R.handR,.5*Math.sin(a*2),0,n*.2*Math.sin(a*1.7));let c=t*1.25+(s?0:Math.PI)+i(o+5,.9)*1.2;it(r,s?R.thighL:R.thighR,-.55+.7*Math.sin(c),0,n*(.22+.16*Math.sin(c*.7))),it(r,s?R.shinL:R.shinR,Math.max(.05,.95+.75*Math.sin(c-1.3)),0,0),it(r,s?R.footL:R.footR,.4+.3*Math.sin(c),0,0)}}var sv=[[R.spine,-.18,.52,.25,-.2,.2],[R.chest,-.16,.38,.25,-.18,.18],[R.neck,-.4,.42,.36,-.22,.22],[R.head,-.45,.42,.5,-.22,.22],[R.foreArmL,-2.2,.02,.12,-.04,.04],[R.foreArmR,-2.2,.02,.12,-.04,.04],[R.handL,-.6,.6,.2,-.3,.3],[R.handR,-.6,.6,.2,-.3,.3],[R.shinL,0,2.2,.04,-.04,.04],[R.shinR,0,2.2,.04,-.04,.04],[R.footL,-.35,.95,.25,-.25,.25],[R.footR,-.35,.95,.25,-.25,.25]],Lc=new Array(Wn).fill(null);for(let r of sv)Lc[r[0]]=r;var Vu=new Fi(0,0,0,"YXZ");function rv(r,t){let e=Vu.setFromQuaternion(r,"YXZ"),i=e.x,n=e.y,s=e.z,a=!1;i<t[1]?(i=t[1],a=!0):i>t[2]&&(i=t[2],a=!0),n<-t[3]?(n=-t[3],a=!0):n>t[3]&&(n=t[3],a=!0),s<t[4]?(s=t[4],a=!0):s>t[5]&&(s=t[5],a=!0),a&&r.setFromEuler(Vu.set(i,n,s,"YXZ"))}var av=new E,ov=new St,cv=new E;function hv(r,t,e){let i=av.set(0,-1,0).applyQuaternion(r),n=cv.copy(i),s=i.x*t,a=s,o=i.y,c=i.z;e?(c<-.42&&(c=-.42),a<-.22?a=-.22:a>.8&&(a=.8),o>.45&&(o=.45),c<0&&o>-.35&&(o=-.35)):(c<-.5&&(c=-.5),c<.15&&a<-.05&&(a=-.05),a<-.62&&(a=-.62),c<-.2&&o>.55&&(o=.55)),!(a===s&&o===i.y&&c===i.z)&&(i.set(a*t,o,c),!(i.lengthSq()<1e-6)&&(i.normalize(),r.premultiply(ov.setFromUnitVectors(n,i))))}var Is=new St,Gu=new St;function lv(r,t){let e=Math.hypot(r.y,r.w);if(e<.22)return;Is.set(0,r.y/e,0,r.w/e);let i=2*Math.atan2(Is.y,Is.w);if(i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),Math.abs(i)<=t)return;Gu.copy(r).multiply(Is.invert());let n=Math.sign(i)*t*.5;Is.set(0,Math.sin(n),0,Math.cos(n)),r.copy(Gu).multiply(Is)}var uv=new St().setFromAxisAngle(new E(0,0,1),Math.PI/2),dv=new St().setFromAxisAngle(new E(0,0,1),-Math.PI/2),fv=new E,Cc=new E,Ic=new St,hr=new St;function Dc(r,t){let e=fv.set(0,-1,0).applyQuaternion(r);if(Cc.set(t,0,0),e.dot(Cc)<-.9)return null;Ic.setFromUnitVectors(Cc,e).multiply(t>0?uv:dv),hr.copy(Ic).invert().multiply(r);let i=2*Math.atan2(hr.y,hr.w);return i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),i}var Fc={1:1,"-1":1};{let r=new Fi(-2.5,0,.15,"YXZ"),t=new St().setFromEuler(r);Fc[1]=Math.sign(Dc(t,1))||1,t.setFromEuler(r.set(-2.5,0,-.15,"YXZ")),Fc[-1]=Math.sign(Dc(t,-1))||1}function pv(r,t,e){let i=Dc(r,t);if(i===null||Math.abs(i)<=e)return;let n=Math.sign(i)*e,s=Fc[t]*e,a=ze(1.75,2.8,Math.abs(i)),o=(n+(s-n)*a)*.5;hr.set(0,Math.sin(o),0,Math.cos(o)),r.copy(Ic).multiply(hr)}var Fa=class{constructor(t,e,i,n){this.ch=t,this.body=e,this.player=i,this.sv=n,this.tmp=new Float32Array(Wn*3),this.add=new Float32Array(Wn*3),this.acc=new Float32Array(Wn*4),this.ref=new Float32Array(Wn*4),this.w={},this.wt={};for(let s of Ls)this.w[s]=0,this.wt[s]=0;this.w.tread=1,this.phase=0,this.time=0,this.tumbleT=0,this.state="tread",this.splashiness=0,this.gaspKick=0,this.coughKick=0,this.force=null,this.forcePhase=void 0,this._e=new Fi(0,0,0,"YXZ"),this._q=new St,this._q2=new St,this._q3=new St,this._qa=new St,this._u=new E,this._wb=new E,this._d=new E,this._qi=new St,this._flow=new E,this._wLag=new E,this._pv=new E,this._acc=new E,this._a=new E,this._hasPv=!1}_mix(t){let e=this.tmp,i=this.acc,n=this.ref,s=this._e,a=this._q,o=this._first;for(let c=0;c<Wn;c++){s.set(e[c*3],e[c*3+1],e[c*3+2],"YXZ"),a.setFromEuler(s);let h=c*4;o&&(n[h]=a.x,n[h+1]=a.y,n[h+2]=a.z,n[h+3]=a.w);let l=n[h]*a.x+n[h+1]*a.y+n[h+2]*a.z+n[h+3]*a.w<0?-t:t;i[h]+=a.x*l,i[h+1]+=a.y*l,i[h+2]+=a.z*l,i[h+3]+=a.w*l}this._first=!1}update(t){let e=this.player,i=this.body,n=this.sv,s=this.wt;this.time+=t;let a=n.alive?e.control*(1-.7*n.blackout):0,o=1-ze(.22,.78,a),c=Math.max(o,e.air||0),h=n.alive?pt(1-n.blackout*1.5):0,l=1-c,u=e.underSwim,d=e.diveBlend||0;s.flail=c*h*.8,s.tumble=c-s.flail,s.dive=l*d;let f=l*(1-d);s.under=f*u*e.moveAmt,s.rise=f*u*(1-e.moveAmt);let g=f*(1-u);s.swim=g*(e.crawlBlend||0),s.paddle=g*(1-(e.crawlBlend||0))*pt(e.swimBlend*2.2);let b=pt((s.swim+s.paddle)/Math.max(.001,g));s.brace=g*e.brace*(1-.7*b);let m=1-e.brace*(1-.7*b),p=Math.max(pt((38-n.oxygen)/26),pt((34-n.stamina)/28),pt(n.swallow*1.3),pt(e.impact-.7)*.8),x=g*(1-b);s.struggle=x*p*m,s.recover=x*pt(n.gaspTimer/3)*(1-p)*m;let v=1-ze(6,24,n.stamina);s.exhaust=x*v*(1-p)*m;let _=0;for(let W of Ls)W!=="tread"&&W!=="float"&&(_+=s[W]);let A=Math.max(0,1-_),y=pt(e.effort*1.6);if(s.float=A*.22*(1-y),s.tread=A-s.float,this.force)for(let W of Ls)s[W]=W===this.force?1:0,this.w[W]=s[W];_=0;let w=0;for(let W of Ls)this.w[W]+=(s[W]-this.w[W])*(1-Math.exp(-t*((W==="tumble"||W==="flail")&&s[W]>this.w[W]?14:W==="brace"||W==="dive"?7:5))),_+=this.w[W],this.w[W]>w&&(w=this.w[W],this.state=W);let P=this.w,M=1/Math.max(1e-4,_),S=0;for(let W of Ls)S+=P[W]*Yb[W];S+=P.tread*.6*y+P.struggle*.25*p+P.flail*(i.subFrac<.3?1:0)+P.rise*.4*pt((60-n.oxygen)/50),S*=1+.16*(Ye(this.time*.9,77)-.5)+.1*Math.sin(this.time*3.1)*Math.sin(this.time*1.3);let U=Ds*S*M*(.72+.28*n.eff);this.phase+=U*t,this.forcePhase!==void 0&&(this.phase=this.forcePhase);let O=this.phase;e.strokePhase=O,e.struggleW=P.struggle*M;let Q=Math.min(2.5,i.relSpeed*.25+i.angVel.length()*.22+i.turb);this.tumbleT+=t*(.8+1.6*Q);let I=this.tmp,D=this.acc;D.fill(0),this._first=!0;let k=(W,Mt)=>{W<=5e-4||(I.fill(0),Mt(),this._mix(W*M))},q=Ls.slice().sort((W,Mt)=>P[Mt]-P[W]),z=this.force==="dive"?this.forcePike||0:pt(1-Math.abs((e.diveTime||9)-.32)/.42)*pt(1.4-Math.max(0,i.mouthDepth));for(let W of q)switch(W){case"float":k(P.float,()=>zu(I,O,.55,1));break;case"tread":k(P.tread,()=>zu(I,O,1+.4*y,0));break;case"paddle":k(P.paddle,()=>Kb(I,O));break;case"swim":k(P.swim,()=>Zb(I,O));break;case"dive":k(P.dive,()=>Hu(I,O,z));break;case"under":k(P.under,()=>Hu(I,O,0));break;case"rise":k(P.rise,()=>Jb(I,O,this.time,1));break;case"struggle":k(P.struggle,()=>Qb(I,O,this.time));break;case"tumble":k(P.tumble,()=>$b(I,this.tumbleT));break;case"recover":k(P.recover,()=>tv(I,O,n.lung));break;case"exhaust":k(P.exhaust,()=>ev(I,O));break;case"brace":k(P.brace,()=>iv(I,O));break;default:k(P.flail,()=>nv(I,O,this.time));break}let N=this.add;N.fill(0);let Z=l*(1-P.swim*M);N[R.chest*3]-=.18*(n.lung-.5)*Z,N[R.spine*3]-=.08*(n.lung-.5)*Z;{let W=pt(.4+.5*p+.4*(e.brace||0)+.3*y)*l*(1-u)*(1-.55*P.swim*M),Mt=this.time*(1.1+1.6*W),Ot=Ye(Mt,91)-.5+.5*(Ye(Mt*2.7,93)-.5);N[R.neck*3+1]+=.36*Ot*W,N[R.head*3+1]+=.46*Ot*W,N[R.head*3]+=.12*(Ye(Mt*1.9,95)-.5)*W;let rt=Math.max(0,Math.sin(O*2))*W;N[R.chest*3+2]+=.05*Math.sin(O)*W,N[R.upperArmL*3]-=.06*rt,N[R.upperArmR*3]-=.06*rt}let et=pt((i.mouthDepth+.07)/.09)*Z*(1-u);N[R.head*3]-=.2*et,N[R.neck*3]-=.1*et;let $=Math.max(-.6,Math.min(.6,e.pitch))*Z*(1-P.brace*M)*(1-.6*et)*(1-u);if(N[R.head*3]-=$*.4,N[R.neck*3]-=$*.22,this.gaspKick=Math.max(0,this.gaspKick-t*2.6),this.coughKick=Math.max(0,this.coughKick-t*4.5),this.gaspKick>.001){let W=this.gaspKick*this.gaspKick*Z;N[R.head*3]-=.3*W,N[R.neck*3]-=.14*W,N[R.chest*3]-=.18*W,N[R.upperArmL*3+2]+=.16*W,N[R.upperArmR*3+2]-=.16*W}if(this.coughKick>.001){let W=Math.sin(this.coughKick*Math.PI)*Z;N[R.spine*3]+=.3*W,N[R.chest*3]+=.22*W,N[R.head*3]+=.34*W,N[R.neck*3]+=.2*W}if(n.shiver>.01){let W=n.shiver*.035;N[R.chest*3+1]+=Math.sin(this.time*61)*W,N[R.upperArmL*3]+=Math.sin(this.time*57+1)*W*1.5,N[R.upperArmR*3]+=Math.sin(this.time*59+2)*W*1.5,N[R.head*3+1]+=Math.sin(this.time*53)*W*.8}let G=this._qi.copy(i.quat).invert(),B=this.force?0:.25+.75*(P.tumble+.45*P.flail)*M;i.subFrac<.15?this._u.copy(i.vel).multiplyScalar(-.3):this._u.copy(i.relFlow);let j=this._flow.lerp(this._u.applyQuaternion(G),1-Math.exp(-t*8)),ut=j.length(),st=this.force?0:pt(ut/4.5)*B*.7;this._hasPv||(this._pv.copy(i.vel),this._hasPv=!0);let at=this._a.copy(i.vel).sub(this._pv).multiplyScalar(1/Math.max(t,.001));this._pv.copy(i.vel),at.lengthSq()>3600&&at.setLength(60);let lt=this._acc.lerp(at.applyQuaternion(G),1-Math.exp(-t*9)),ht=lt.length(),Rt=this.force?0:pt(ht/38)*(.3+.5*B),V=this._wLag.lerp(this._wb.copy(i.angVel).applyQuaternion(G),1-Math.exp(-t*10)),ne=V.length(),wt=this.force?0:Math.min(.6,ne*.07)*(.35+.65*P.tumble*M),Lt=null,xt=Math.min(.72,st+Rt);if(xt>.01){let W=this._d.copy(Bu).multiplyScalar(1-xt);ut>.05&&W.addScaledVector(j,xt*st/((st+Rt)*ut)),ht>.05&&W.addScaledVector(lt,-xt*Rt/((st+Rt)*ht)),W.lengthSq()>1e-4&&(W.normalize(),Lt=this._q2.setFromUnitVectors(Bu,W))}let $t=null;wt>.01&&($t=this._q3.setFromAxisAngle(this._u.copy(V).normalize(),-wt));let Pt=this.force?0:.4+.6*B,L=(W,Mt)=>Math.max(-Mt,Math.min(Mt,W));N[R.spine*3]+=L(lt.z*.01*Pt,.3),N[R.chest*3]+=L(lt.z*.008*Pt,.24),N[R.spine*3+2]+=L(lt.x*.008*Pt,.18),N[R.neck*3]+=L(lt.z*.012*Pt,.3),N[R.neck*3+2]+=L(lt.x*.008*Pt,.16);let T=Math.min(1,ne/5)*B;N[R.foreArmL*3]-=.45*T,N[R.foreArmR*3]-=.45*T,N[R.shinL*3]+=.4*T,N[R.shinR*3]+=.4*T;let X=this.ch.bones,ot=this._e,nt=this._q,ct=this._qa,At=1-Math.exp(-t*26);for(let W=0;W<Wn;W++){let Mt=W*4;nt.set(D[Mt],D[Mt+1],D[Mt+2],D[Mt+3]),nt.lengthSq()<1e-8?nt.identity():nt.normalize();let Ot=N[W*3],rt=N[W*3+1],re=N[W*3+2];(Ot!==0||rt!==0||re!==0)&&nt.multiply(ct.setFromEuler(ot.set(Ot,rt,re,"YXZ"))),W===R.upperArmL||W===R.upperArmR||W===R.thighL||W===R.thighR?(Lt&&nt.premultiply(Lt),$t&&nt.premultiply($t),hv(nt,W===R.upperArmL||W===R.thighL?1:-1,W===R.thighL||W===R.thighR),W===R.thighL||W===R.thighR?lv(nt,.55):pv(nt,W===R.upperArmL?1:-1,1.15)):(W===R.head&&$t&&nt.premultiply(mv.copy(gv).slerp($t,.4)),Lc[W]&&rv(nt,Lc[W])),X[W].quaternion.slerp(nt,At)}let gt=(P.tread*(.25+.4*y)+P.paddle*.5+P.swim*1+P.struggle*1+P.recover*.5+P.dive*.8)*M;this.splashiness+=(gt*Math.min(1,i.subFrac*1.3)*(1-u)-this.splashiness)*(1-Math.exp(-t*3))}},mv=new St,gv=new St;var Wu=new E(0,1,0),qu=new St,Ua=class{constructor(t,e,i,n,s,a){this.camera=t,this.ch=e,this.body=i,this.player=n,this.waves=s,this.input=a,this.target=1,this.blend=1,this.yaw=Math.PI,this.pitch=-.08,this.sens=.0021,this.intensity=1,this.qd=new St,this.pivot=new E,this.tpPos=new E,this.inited=!1,this.arm=4.6,this.under=0,this.fovKick=0,this.threat=0,this.orbit=0,this.eye=new E,this.chest=new E,this.surfaceAtCam=yi(),this.script=null,this.auto=!0,this.interest={x:0,z:0,w:0},this.portrait=0,this.autoT=0,this.drift=0,this.roll=0,this.push=0,this.time=0,this._m=new _t,this._f=new E,this._v=new E,this._v2=new E,this._q=new St,this._q2=new St,this._mat=new Ct,this._s=yi(),this._fp=new E,this._qfp=new St,this._qtp=new St}toggle(){this.target=this.target>.5?0:1}setMode(t){this.target=t==="first"?0:1}get mode(){return this.target>.5?"third":"first"}lookQuat(t,e,i){let n=Math.cos(e);return this._f.set(Math.sin(t)*n,Math.sin(e),Math.cos(t)*n),this._mat.lookAt(this._v.set(0,0,0),this._f,Wu),i.setFromRotationMatrix(this._mat)}update(t){let e=this.camera,i=this.body,n=this.player,s=this.input.consumeMouse(this._m);this.time+=t,this.input.enabled&&(this.yaw-=s.x*this.sens,this.pitch-=s.y*this.sens);let a=performance.now()/1e3,o=Math.abs(s.x)+Math.abs(s.y)>.5||a-this.input.lastLook<2.5,c=this.input.enabled&&this.input.busy();if(this.auto&&this.input.enabled&&!this.script&&!o){let I=this.input.axisX();if(c)Math.abs(I)>.15&&(this.yaw-=I*.85*t),this.autoT=0;else{this.autoT+=t;let k=Math.min(1,this.autoT/1.5);if(this.interest.w>.05){let z=Math.atan2(this.interest.x-i.pos.x,this.interest.z-i.pos.z)-this.yaw;z=((z+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,this.yaw+=Math.sign(z)*Math.min(Math.abs(z),(.25+.9*this.interest.w)*t)*k}else this.drift+=t*.13,this.yaw+=(.045*Math.sin(this.drift)+.03*Math.sin(this.drift*2.3+1))*t*k}let D=-.07+.24*this.threat-.1*this.under;(!c||n.underSwim<.5)&&(this.pitch+=(D-this.pitch)*(1-Math.exp(-t*(c?.5:1.1))))}else this.autoT=0;this.script&&(this.yaw=this.script.yaw,this.pitch=this.script.pitch),this.pitch=Oi(this.pitch,-1.45,1.45),n.yaw=this.yaw,n.pitch=this.pitch;let h=1/.85;this.blend=Oi(this.blend+Math.sign(this.target-this.blend)*t*h,0,1),Math.abs(this.target-this.blend)<t*h&&(this.blend=this.target);let l=this.blend*this.blend*(3-2*this.blend),u=pt(1-n.control)*.85+n.tumble*.4,d=pt(u),f=this.intensity*mt(.2,1,d)*mt(1,.42,l),g=i.angVel,b=g.length();b>1e-5&&f>0&&(this._q.setFromAxisAngle(this._v.copy(g).multiplyScalar(1/b),b*f*t),this.qd.premultiply(this._q));let m=mt(.32,2.6,d);this.qd.slerp(qu,1-Math.exp(-t/m)).normalize(),this.ch.eyeWorld(this.eye),this.chest.setFromMatrixPosition(this.ch.bones[2].matrixWorld),this.inited||(this.pivot.copy(this.chest),this.inited=!0,this.tpPos.copy(this.chest).add(this._v.set(0,1.2,4))),this.lookQuat(this.yaw,this.pitch,this._qfp).premultiply(this.qd),this._fp.copy(this.eye);let p=1-Math.exp(-t*10),x=1-Math.exp(-t*5.5);this.pivot.x+=(this.chest.x-this.pivot.x)*p,this.pivot.z+=(this.chest.z-this.pivot.z)*p,this.pivot.y+=(this.chest.y+.22-this.pivot.y)*x;let v=pt(this.waves.sigHeight/16);this.push+=((this.auto?pt((45-(this.oxygen===void 0?100:this.oxygen))/40):0)-this.push)*(1-Math.exp(-t*.8));let _=(3.5+.7*v+1.8*pt(n.impactPeak-.6)+1.3*this.threat+2.8*(n.air||0)-.5*(n.crawlBlend||0)-1.2*this.push)*(1+.22*this.portrait);this.arm+=(_-this.arm)*(1-Math.exp(-t*1.6));let A=Math.cos(this.pitch),y=this.yaw+this.orbit,w=this._f.set(Math.sin(y)*A,Math.sin(this.pitch),Math.cos(y)*A),P=this._v,M=ze(.7,1.8,i.eyeDepth);this.under+=(M-this.under)*(1-Math.exp(-t*(M>this.under?3.5:2.2)));let S=this.armOverride||this.arm,U=.5;for(let I=0;I<5&&(P.copy(this.pivot).addScaledVector(w,-S),P.y+=(.62+.16*S)*(1-.45*this.threat*(this.auto?1:0))+.25*this.portrait,!(this.under>.98));I++){let D=this.waves.sample(P.x,P.z,this._s).h,k=(P.x+this.pivot.x)*.5,q=(P.z+this.pivot.z)*.5,z=this.waves.sample(k,q,this._s).h,N=(P.y+this.pivot.y+.3)*.5,Z=Math.max(D+U-P.y,z+.2-N);if(Z<=0||S<=1.7){Z>0&&(P.y+=Z*(1-this.under));break}S=Math.max(1.7,S*.78)}this.armNow=S,this.tpPos.lerp(P,1-Math.exp(-t*7.5));let O=this._v2.copy(this.pivot).addScaledVector(i.vel,.04);O.y+=.34+1.1*this.threat+.25*this.portrait,O.addScaledVector(w,2.2),this._mat.lookAt(this.tpPos,O,Wu),this._qtp.setFromRotationMatrix(this._mat),this._q.copy(qu).slerp(this.qd,.45),this._qtp.premultiply(this._q),e.position.copy(this._fp).lerp(this.tpPos,l),e.quaternion.copy(this._qfp).slerp(this._qtp,l);{let I=this.surfaceAtCam,D=e.matrixWorld.elements,k=I.nx*D[0]+I.nz*D[2],q=Math.max(-.16,Math.min(.16,-k*.38))*l*(1-this.under)*this.intensity;this.roll+=(q-this.roll)*(1-Math.exp(-t*1.6)),Math.abs(this.roll)>1e-4&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.set(0,0,1),this.roll))}this.fovKick+=(pt(n.impact-.6)*7-this.fovKick)*(1-Math.exp(-t*4));let Q=mt(82,66,l)+this.fovKick*this.intensity+4*this.threat*l+9*(n.air||0)*l+7*(n.crawlBlend||0)*l-5*this.push*l+this.portrait*mt(13,19,l);Math.abs(Q-e.fov)>.01&&(e.fov=Q,e.updateProjectionMatrix());{let I=pt(n.effort*1.1)*this.intensity*(1-.6*this.under);if(I>.02){let D=n.strokePhase||0,k=this.time,q=mt(1.7,.6,l);e.position.y+=Math.sin(D*2)*.03*I*q;let z=(Math.sin(k*23.1)+Math.sin(k*37.7+1.3))*.0026*I,N=(Math.sin(k*19.3+2.1)+Math.sin(k*31.9))*.0026*I;this._v.set(z+Math.sin(D*2+.6)*.01*I*q,N+Math.sin(D)*.012*I*q,Math.sin(D)*.022*I*q);let Z=this._v.length();Z>1e-5&&e.quaternion.multiply(this._q.setFromAxisAngle(this._v.multiplyScalar(1/Z),Z))}}e.updateMatrixWorld(!0),this.ch.head.visible=e.position.distanceTo(this.eye)>.34,this.waves.sample(e.position.x,e.position.z,this.surfaceAtCam)}};var ka=class{constructor(t){this.canvas=t,this.keys=new Set,this.dx=0,this.dy=0,this.locked=!1,this.enabled=!1,this.pressed=new Set,this.onLockChange=null,this.mouseL=!1,this.mouseR=!1,this.lastLook=-100,window.addEventListener("keydown",e=>{e.repeat||(this.keys.add(e.code),this.pressed.add(e.code),this.enabled&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseL=this.mouseR=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.locked||(this.mouseL=this.mouseR=!1),this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("mousemove",e=>{this.locked&&(this.dx+=e.movementX,this.dy+=e.movementY,Math.abs(e.movementX)+Math.abs(e.movementY)>1&&(this.lastLook=performance.now()/1e3))}),document.addEventListener("mousedown",e=>{this.locked&&(e.button===0&&(this.mouseL=!0),e.button===2&&(this.mouseR=!0))}),document.addEventListener("mouseup",e=>{e.button===0&&(this.mouseL=!1),e.button===2&&(this.mouseR=!1)}),document.addEventListener("contextmenu",e=>{(this.locked||this.enabled)&&e.preventDefault()}),this.virtual=null,this.touch=null}lock(){if(this.canvas.requestPointerLock){let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}}unlock(){document.exitPointerLock&&document.exitPointerLock()}down(t){return this.keys.has(t)}axisX(){if(this.virtual)return this.virtual.x||0;let t=(this.down("KeyD")||this.down("ArrowRight")?1:0)-(this.down("KeyA")||this.down("ArrowLeft")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.x:0)))}axisZ(){if(this.virtual)return this.virtual.z||0;let t=(this.down("KeyW")||this.down("ArrowUp")?1:0)-(this.down("KeyS")||this.down("ArrowDown")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.z:0)))}swim(){return this.virtual?!!(this.virtual.swim||this.virtual.sprint||this.virtual.up):this.down("Space")||this.down("ShiftLeft")||this.down("ShiftRight")||this.mouseL||!!(this.touch&&this.touch.swim)}dive(){return this.virtual?!!this.virtual.dive:this.down("KeyF")||this.down("KeyQ")||this.mouseR||!!(this.touch&&this.touch.dive)}busy(){return Math.abs(this.axisX())+Math.abs(this.axisZ())>.05||this.swim()||this.dive()}consumeMouse(t){return t.x=this.dx,t.y=this.dy,this.dx=0,this.dy=0,t}endFrame(){this.pressed.clear()}};var Na=class{constructor(t){this.waves=t,this.base=1,this.storm=1,this.locked=!1,this.wind=new E(26,0,0),this.windSpeed=26,this.gust=1,this.windAngle=0,this.rain=1,this.time=0}update(t){this.time+=t;let e=this.time,i=this.locked?0:(Ye(e*.021,3)-.5)*.22+(Ye(e*.09,5)-.5)*.08,n=pt(this.base+i*(.4+.6*this.base));this.storm+=(n-this.storm)*(1-Math.exp(-t*.25));let s=this.locked?0:(Ye(e*.035,11)-.5)*.9;this.windAngle=this.waves.windAngle+s,this.gust=.78+.34*Ye(e*.31,17)+.22*Ye(e*1.3,23)*this.storm,this.windSpeed=mt(9,31,this.storm)*this.gust,this.wind.set(Math.cos(this.windAngle)*this.windSpeed,0,Math.sin(this.windAngle)*this.windSpeed);let a=this.locked?.9:.62+.38*Ye(e*.05,29);this.rain=pt(mt(.25,1,this.storm)*a+.1*this.storm),tt.uStorm.value=this.storm,tt.uRain.value=this.rain,tt.uWindDir.value.set(Math.cos(this.windAngle),Math.sin(this.windAngle)),tt.uWindSpeed.value=this.windSpeed,tt.uFogDensity.value=mt(1/5200,1/1500,this.rain)*(.8+.4*this.storm);let o=mt(1.25,.86,this.storm);tt.uAmbient.value.set(.05*o,.06*o,.072*o),this.waves.setStorm(this.storm)}};var bv=`
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
${Cs}
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
}`,vv=`
precision highp float;
uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor; uniform float uIntensity;
varying vec2 vQ; varying float vA; varying float vSpot;
void main() {
  float across = 1.0 - vQ.x * vQ.x;
  float along = smoothstep(0.0, 0.25, vQ.y) * (1.0 - smoothstep(0.55, 1.0, vQ.y));
  float a = across * along * vA * uIntensity;
  // rain falling through the searchlight is what makes the beam visible: each streak lights up
  vec3 col = vec3(0.62, 0.68, 0.74) * (uAmbient * 3.4 + uFlashColor * uFlash * 2.2 + ${_n} * vSpot * 1.1);
  gl_FragColor = vec4(col, a * 0.26 * (1.0 + 2.2 * min(vSpot, 1.5)));
}`,xv=`
attribute vec4 aSeed;
uniform float uTime; uniform float uTile; uniform float uIntensity;
${Hn}
${ya}
${Vn}
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
}`,yv=`
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
}`;function Xu(r,t){let e=new Ni,i=t==="streak"?new Float32Array([-1,0,0,1,0,0,1,1,0,-1,1,0]):new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);e.setAttribute("position",new jt(i,3)),e.setIndex([0,1,2,0,2,3]);let n=new Float32Array(r*4);for(let s=0;s<n.length;s++)n[s]=Math.random();return e.setAttribute("aSeed",new He(n,4)),e.instanceCount=r,e}var Oa=class{constructor(t){this.group=new ve,this.offset=new E,this.vel=new E(8,-9,0),this.camVel=new E,this._lastCam=new E,this._has=!1;let e=(i,n,s,a)=>{let o={uBox:{value:new E(...n)},uOffset:{value:this.offset},uVel:{value:this.vel},uCamVel:{value:this.camVel},uStreak:{value:a},uWidth:{value:s},uPx:{value:.001},uIntensity:{value:1},uSpotPos:tt.uSpotPos,uSpotDir:tt.uSpotDir,uSpotP:tt.uSpotP,uAmbient:tt.uAmbient,uFlash:tt.uFlash,uFlashColor:tt.uFlashColor},c=new It(Xu(i,"streak"),new se({uniforms:o,vertexShader:bv,fragmentShader:vv,transparent:!0,depthWrite:!1,side:Le}));return c.frustumCulled=!1,c.renderOrder=20,c};this.near=e(Math.round(t.rain*.62),[22,16,22],.0024,.02),this.far=e(Math.round(t.rain*.38),[80,46,80],.007,.03),this.group.add(this.near,this.far),this.splashU={uWaveA:tt.uWaveA,uWaveB:tt.uWaveB,uBrkA:tt.uBrkA,uBrkB:tt.uBrkB,uBrkC:tt.uBrkC,uTime:tt.uTime,uTile:{value:34},uIntensity:{value:1},uAmbient:tt.uAmbient,uFlash:tt.uFlash,uFlashColor:tt.uFlashColor},this.splash=new It(Xu(t.splashes,"quad"),new se({uniforms:this.splashU,vertexShader:xv,fragmentShader:yv,transparent:!0,depthWrite:!1})),this.splash.frustumCulled=!1,this.splash.renderOrder=12,this.group.add(this.splash)}update(t,e,i,n,s,a){this.vel.set(i.x*.5,-8.6-1.4*n,i.z*.5),this.offset.addScaledVector(this.vel,t);for(let h of["x","y","z"])Math.abs(this.offset[h])>4e3&&(this.offset[h]%=4e3);this._has&&t>0&&this.camVel.copy(e.position).sub(this._lastCam).multiplyScalar(1/t),this.camVel.length()>40&&this.camVel.setLength(40),this._lastCam.copy(e.position),this._has=!0;let o=2*Math.tan(yn.degToRad(e.fov)*.5)/Math.max(1,a),c=n*(1-s);for(let h of[this.near,this.far])h.material.uniforms.uPx.value=o,h.material.uniforms.uIntensity.value=c*(h===this.far?.8:1),h.visible=c>.01;this.splashU.uIntensity.value=c,this.splash.visible=c>.01}};var _v=`
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
}`,Mv=`
precision highp float;
uniform float uPower; uniform vec3 uColor; uniform float uFog;
varying float vSide; varying float vBright; varying float vH;
void main() {
  float core = exp(-vSide * vSide * 9.0);
  float glow = exp(-abs(vSide) * 2.2) * 0.25;
  float veil = mix(0.35, 1.0, smoothstep(0.0, 500.0, vH));   // the foot of the bolt is behind rain and spray
  gl_FragColor = vec4(uColor * (core + glow) * uPower * vBright * uFog * veil, 1.0);
}`,Ba=class{constructor(t=99){this.rnd=xi(t),this.group=new ve,this.strokes=[],this.age=1e9,this.active=!1,this.dir=new E(1,.3,0),this.pos=new E,this.dist=3e3,this.sheet=0,this.power=1,this.intensity=0,this.pendingThunder=[],this.onThunder=null,this.time=0,this.next=6,this.rate=1,this.mat=new se({uniforms:{uWidth:{value:6},uPower:{value:0},uColor:{value:new E(.82,.88,1)},uFog:{value:1}},vertexShader:_v,fragmentShader:Mv,transparent:!0,blending:ps,depthWrite:!1,depthTest:!0,side:Le}),this.bolt=new It(new me,this.mat),this.bolt.frustumCulled=!1,this.bolt.visible=!1,this.bolt.renderOrder=2,this.group.add(this.bolt)}_buildBolt(t,e){let i=this.rnd,n=[],s=(f,g,b,m)=>{let p=[f,g],x=f.distanceTo(g),v=x*.13;for(let _=0;_<6;_++){let A=[p[0]];for(let y=0;y<p.length-1;y++){let w=p[y].clone().lerp(p[y+1],.5);w.x+=(i()-.5)*v,w.z+=(i()-.5)*v,w.y+=(i()-.5)*v*.35,A.push(w,p[y+1])}p=A,v*=.52}for(let _=0;_<p.length-1;_++)if(n.push([p[_],p[_+1],b]),m<2&&i()<(m===0?.075:.04)&&_>3&&_<p.length-6){let A=p[_+1].clone().sub(p[_]).normalize(),y=x*(.12+i()*.25),w=p[_].clone().addScaledVector(A,y*.6).add(new E((i()-.5)*y,-i()*y*.5,(i()-.5)*y));s(p[_].clone(),w,b*.42,m+1)}};s(t,e,1,0);let a=n.length,o=new Float32Array(a*4*3),c=new Float32Array(a*4*3),h=new Float32Array(a*4),l=new Float32Array(a*4),u=new Uint32Array(a*6);for(let f=0;f<a;f++){let[g,b,m]=n[f],p=b.clone().sub(g).normalize(),x=(v,_,A)=>{let y=(f*4+v)*3;o[y]=_.x,o[y+1]=_.y,o[y+2]=_.z,c[y]=p.x,c[y+1]=p.y,c[y+2]=p.z,h[f*4+v]=A,l[f*4+v]=m};x(0,g,-1),x(1,g,1),x(2,b,1),x(3,b,-1),u.set([f*4,f*4+1,f*4+2,f*4,f*4+2,f*4+3],f*6)}let d=new me;d.setAttribute("position",new jt(o,3)),d.setAttribute("normal",new jt(c,3)),d.setAttribute("aSide",new jt(h,1)),d.setAttribute("aBright",new jt(l,1)),d.setIndex(new jt(u,1)),this.bolt.geometry.dispose(),this.bolt.geometry=d}strike(t,e={}){let i=this.rnd,n=e.azimuth!==void 0?e.azimuth:i()*Math.PI*2;this.dist=e.dist!==void 0?e.dist:900+Math.pow(i(),1.4)*6500,this.sheet=e.sheet!==void 0?e.sheet:i()<.38?1:0,this.power=e.power!==void 0?e.power:mt(1.45,.55,pt(this.dist/7e3))*(.8+i()*.4),this.pos.set(t.x+Math.cos(n)*this.dist,0,t.z+Math.sin(n)*this.dist);let s=1300+i()*700;this.dir.set(Math.cos(n)*this.dist,this.sheet?s:s*.55,Math.sin(n)*this.dist).normalize(),this.strokes.length=0;let a=2+Math.floor(i()*4),o=0;for(let c=0;c<a;c++)this.strokes.push({t:o,peak:(c===0?1:.35+i()*.65)*this.power,tau:.045+i()*.09}),o+=.045+i()*.13;if(this.age=0,this.active=!0,!this.sheet){let c=new E(this.pos.x+(i()-.5)*500,s,this.pos.z+(i()-.5)*500);this._buildBolt(c,new E(this.pos.x,-5,this.pos.z)),this.mat.uniforms.uWidth.value=Math.max(2.2,this.dist*.0032)}return this.pendingThunder.push({at:this.time+this.dist/343,dist:this.dist,power:this.power,pos:this.pos.clone().setY(600)}),this}update(t,e,i,n=!0){this.time+=t,n&&(this.next-=t*i,this.next<=0&&(this.strike(e),this.next=this.rnd()<.22?1.2+this.rnd()*2.5:7+this.rnd()*22));let s=0;if(this.active){this.age+=t;let a=!1;for(let o of this.strokes){let c=this.age-o.t;if(c<0){a=!0;continue}let h=o.peak*Math.min(1,c/.008)*Math.exp(-c/o.tau);h>.004&&(a=!0),s+=h}s*=.85+.3*Math.sin(this.age*190)*Math.sin(this.age*67),a||(this.active=!1,s=0)}this.intensity=Math.max(0,s),tt.uFlash.value=this.intensity*.36,this.active&&(tt.uFlashDir.value.copy(this.dir),tt.uFlashSheet.value=this.sheet),this.bolt.visible=this.active&&!this.sheet&&this.intensity>.01,this.mat.uniforms.uPower.value=this.intensity*26,this.mat.uniforms.uFog.value=Math.exp(-this.dist*tt.uFogDensity.value*.55);for(let a=this.pendingThunder.length-1;a>=0;a--)if(this.time>=this.pendingThunder[a].at){let o=this.pendingThunder.splice(a,1)[0];this.onThunder&&this.onThunder(o)}}};var wv=`
attribute vec4 aPos;      // xyz, size
attribute vec4 aData;     // alpha, rotation, stretch, kind
attribute vec3 aVel;
attribute vec2 aMisc;     // age 0..1, seed
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist; varying float vAge; varying float vSeed; varying float vSpot;
${Cs}
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
}`,Ev=`
precision highp float;
uniform sampler2D uTex; uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor;
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist; varying float vAge; varying float vSeed; varying float vSpot;
void main() {
  vec3 light = uAmbient * 2.6 + uFlashColor * uFlash * 1.9 + ${_n} * vSpot * 0.85;
  float a; vec3 col;
  if (vKind < 0.5) {
    // tapered streak: round bright head, thin fading tail
    float along = smoothstep(-1.0, 0.55, vUv.y);
    float wid = mix(0.25, 1.0, along);
    a = (1.0 - smoothstep(wid * 0.55, wid, abs(vUv.x))) * along * (1.0 - smoothstep(0.75, 1.0, vUv.y)) * vA;
    float head = smoothstep(0.2, 0.8, vUv.y) * (1.0 - smoothstep(0.0, 0.5, abs(vUv.x)));
    col = vec3(0.78, 0.84, 0.88) * light * (1.05 + 1.1 * head);
  } else {
    float idx = floor(vSeed * 3.999);
    vec2 cell = vec2(mod(idx, 2.0), floor(idx * 0.5));
    vec4 t = texture(uTex, (vUv * 0.5 + 0.5 + cell) * 0.5);
    // the puff tears apart from its thin parts inward as it ages
    float thr = mix(0.06, 0.70, vAge);
    a = smoothstep(thr, thr + 0.30, t.r * (0.72 + 0.56 * t.g)) * vA * (1.0 - 0.45 * vAge);
    // thick parts are greyer, the frayed rim catches more light
    float thick = smoothstep(0.35, 0.95, t.r);
    col = mix(vec3(0.70, 0.76, 0.80), vec3(0.52, 0.58, 0.63), thick * 0.7) * light * (0.9 + 0.25 * vUv.y);
  }
  // nothing large and bright right on the lens; spray clouds thin out around the camera so the swimmer stays in view
  a *= vKind < 0.5 ? smoothstep(0.3, 2.0, vDist) : smoothstep(1.5, 9.0, vDist);
  if (a < 0.004) discard;
  gl_FragColor = vec4(col, a);
}`;function Sv(r=31,t=256){let e=xi(r),i=new Float32Array(4096);for(let h=0;h<i.length;h++)i[h]=e();let n=(h,l,u)=>i[((h*73+l*151+u*37)%4096+4096)%4096],s=(h,l,u)=>{let d=Math.floor(h),f=Math.floor(l),g=h-d,b=l-f,m=g*g*(3-2*g),p=b*b*(3-2*b);return(n(d,f,u)*(1-m)+n(d+1,f,u)*m)*(1-p)+(n(d,f+1,u)*(1-m)+n(d+1,f+1,u)*m)*p},a=(h,l,u,d)=>{let f=.5,g=0;for(let b=0;b<d;b++)g+=f*s(h,l,u+b*7),h=h*2.03+11.3,l=l*2.03+5.7,f*=.5;return g},o=new Uint8Array(t*2*t*2*4);for(let h=0;h<2;h++)for(let l=0;l<2;l++){let u=l+h*2+1;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=(f+.5)/t*2-1,b=(d+.5)/t*2-1,m=g+(a(g*2.2+3,b*2.2,u+20,3)-.5)*.7,p=b+(a(g*2.2,b*2.2+9,u+40,3)-.5)*.7,x=Math.hypot(m,p)*(.92+.5*(a(Math.atan2(p,m)*1.6+5,1.5,u+60,2)-.5)),v=Math.max(0,1-x*1.08),_=Math.max(0,Math.min(1,(a(m*3.1+7,p*3.1+2,u,4)*1.5-.22)*Math.pow(v,.7)*1.9)),A=a(g*15+1,b*15+4,u+80,3),y=((h*t+d)*t*2+l*t+f)*4;o[y]=Math.round(_*255),o[y+1]=Math.round(A*255),o[y+2]=0,o[y+3]=255}}let c=new Ti(o,t*2,t*2,le,Be);return c.minFilter=Qt,c.magFilter=Qt,c.generateMipmaps=!1,c.needsUpdate=!0,c}var za=class{constructor(t,e=6e3){this.waves=t,this.max=e,this.px=new Float32Array(e),this.py=new Float32Array(e),this.pz=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vz=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.grow=new Float32Array(e),this.kind=new Float32Array(e),this.stretch=new Float32Array(e),this.rot=new Float32Array(e),this.alpha=new Float32Array(e),this.seed=new Float32Array(e),this.head=0,this.alive=0;let i=new Ni;i.setAttribute("position",new jt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]);let n=s=>{let a=new He(new Float32Array(e*s),s);return a.setUsage(zn),a};this.aPos=n(4),this.aData=n(4),this.aVel=n(3),this.aMisc=n(2),i.setAttribute("aPos",this.aPos),i.setAttribute("aData",this.aData),i.setAttribute("aVel",this.aVel),i.setAttribute("aMisc",this.aMisc),i.instanceCount=0,this.mesh=new It(i,new se({uniforms:{uTex:{value:Sv()},uAmbient:tt.uAmbient,uFlash:tt.uFlash,uFlashColor:tt.uFlashColor,uSpotPos:tt.uSpotPos,uSpotDir:tt.uSpotDir,uSpotP:tt.uSpotP},vertexShader:wv,fragmentShader:Ev,transparent:!0,depthWrite:!1})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=15,this._s=yi(),this._tick=0,this.emitAcc=0,this.hot=[]}emit(t,e,i,n,s,a,o,c,h,l=0,u=1,d=-1){let f=this.head;this.head=(this.head+1)%this.max,this.px[f]=t,this.py[f]=e,this.pz[f]=i,this.vx[f]=n,this.vy[f]=s,this.vz[f]=a,this.life[f]=o,this.maxLife[f]=o,this.size[f]=c,this.kind[f]=h,this.grow[f]=l,this.rot[f]=h>1.5?0:Math.random()*6.283,this.alpha[f]=u,this.seed[f]=Math.random(),this.stretch[f]=d>=0?d:h<.5?1:h>1.5?2.6:.35}burst(t,e,i,n,s,a=0,o=0){let c=Math.min(1.9,.55+n*.24),h=s.x*.1,l=s.z*.1,u=Math.min(230,Math.round(26+n*34));for(let b=0;b<u;b++){let m=Math.random()*6.283,p=.12+Math.random()*.34*c,x=(1+2.4*Math.random())*c,v=(1.8+3.6*Math.pow(Math.random(),1.4))*c;this.emit(t+Math.cos(m)*p,e+.03+Math.random()*.1,i+Math.sin(m)*p,Math.cos(m)*x+a*x*1.5+h,v,Math.sin(m)*x+o*x*1.5+l,.55+Math.random()*.75,.01+Math.pow(Math.random(),2)*.026,0,0,.95)}let d=Math.min(60,Math.round(6+n*9));for(let b=0;b<d;b++){let m=Math.random()*6.283,p=Math.random()*.7*c;this.emit(t+Math.cos(m)*.08,e+.05,i+Math.sin(m)*.08,Math.cos(m)*p+a*c+h,(3.2+4.2*Math.random())*c,Math.sin(m)*p+o*c+l,.6+Math.random()*.7,.012+Math.random()*.022,0,0,.95)}let f=Math.min(26,Math.round(5+n*4));for(let b=0;b<f;b++){let m=Math.random()*6.283,p=(.9+1.5*Math.random())*c;this.emit(t+Math.cos(m)*.25*c,e+.08+Math.random()*.15,i+Math.sin(m)*.25*c,Math.cos(m)*p+a*p+h,(1.1+1.9*Math.random())*c,Math.sin(m)*p+o*p+l,.45+Math.random()*.45,(.13+Math.random()*.17)*c,1,.55,.55,1)}let g=Math.min(14,Math.round(2+n*2.2));for(let b=0;b<g;b++){let m=Math.random()*6.283,p=Math.random()*.9*c;this.emit(t+Math.cos(m)*.3,e+.15+Math.random()*.3,i+Math.sin(m)*.3,Math.cos(m)*p+h*2,.5+Math.random()*1.1,Math.sin(m)*p+l*2,.9+Math.random()*1.1,(.24+Math.random()*.3)*c,1,.5,.2,.3)}}slap(t,e,i,n,s,a,o=0,c=0,h=0){let l=Math.pow(n,.7),u=Math.round(16+n*40);for(let f=0;f<u;f++){let g=Math.random()*6.283,b=(.4+1.9*Math.random())*l,m=(1+3*Math.pow(Math.random(),1.5))*l;this.emit(t+Math.cos(g)*.08,e+.02+Math.random()*.05,i+Math.sin(g)*.08,o+Math.cos(g)*b+s*b*1.8,c+m,h+Math.sin(g)*b+a*b*1.8,.35+Math.random()*.6,.01+Math.pow(Math.random(),2)*.03,0,0,1)}let d=Math.round(3+n*5);for(let f=0;f<d;f++){let g=Math.random()*6.283,b=(.3+.9*Math.random())*l;this.emit(t+Math.cos(g)*.1,e+.04+Math.random()*.08,i+Math.sin(g)*.1,o+Math.cos(g)*b+s*b*1.5,c+(.9+1.6*Math.random())*l,h+Math.sin(g)*b+a*b*1.5,.2+Math.random()*.24,(.06+Math.random()*.09)*l,1,.55,.6,1)}}fling(t,e,i,n,s,a,o){let c=Math.round(8+o*20);for(let l=0;l<c;l++){let u=.4+.6*Math.random();this.emit(t+(Math.random()-.5)*.1,e+Math.random()*.06,i+(Math.random()-.5)*.1,n*u+(Math.random()-.5)*1,s*u+.5+Math.random()*1.1,a*u+(Math.random()-.5)*1,.35+Math.random()*.55,.009+Math.pow(Math.random(),2)*.026,0,0,1)}let h=o>.5?2:1;for(let l=0;l<h;l++)this.emit(t,e+.05,i,n*.5+(Math.random()-.5)*.5,s*.5+.6,a*.5+(Math.random()-.5)*.5,.2+Math.random()*.18,(.06+.05*Math.random())*Math.sqrt(o),1,.5,.55,1)}seedCrests(t,e,i,n,s){let a=this.waves,o=this._s;this.hot.length=0;let c=Math.round(s*(.5+.5*n)),h=Math.hypot(i.x,i.z)+.001;for(let u=0;u<c;u++){let d=Math.random()*6.283,f=3+Math.pow(Math.random(),1.6)*95,g=e.x+Math.cos(d)*f,b=e.z+Math.sin(d)*f;a.sample(g,b,o);let m=Math.max(0,.42-o.jac)*2.4,p=Math.max(m,o.aer*1.6,o.turb*.5);if(p<.05)continue;(this.hot.length<6||p>this.hot[this.hot.length-1].amount)&&(this.hot.push({x:g,y:o.h,z:b,amount:p}),this.hot.sort((v,_)=>_.amount-v.amount),this.hot.length>6&&(this.hot.length=6));let x=Math.min(12,Math.round(2+p*6));for(let v=0;v<x;v++){let _=Math.random()<.36,A=(Math.random()-.5)*2.4,y=(Math.random()-.5)*2.4,w=(.8+2.8*Math.random())*(.6+p);this.emit(g+A,o.h+.05+Math.random()*.25,b+y,o.vx+i.x*(.22+.3*Math.random()),o.vy*.5+w,o.vz+i.z*(.22+.3*Math.random()),_?1.4+Math.random()*1.8:.6+Math.random()*.9,_?.4+Math.random()*.7:.014+Math.pow(Math.random(),2)*.04,_?1:0,_?1.2:0,_?.2:.9)}}let l=Math.round(s*.34*n*n);for(let u=0;u<l;u++){let d=Math.random()*6.283,f=2+Math.pow(Math.random(),1.3)*48,g=e.x+Math.cos(d)*f,b=e.z+Math.sin(d)*f;a.sample(g,b,o);let m=Math.max(0,-(o.nx*i.x+o.nz*i.z)/h);if(!(Math.random()>.35+1.6*m))for(let p=0;p<2;p++)this.emit(g+(Math.random()-.5)*3,o.h+.1+Math.random()*.5,b+(Math.random()-.5)*3,o.vx+i.x*(.45+.4*Math.random()),.4+Math.random()*1.6,o.vz+i.z*(.45+.4*Math.random()),.6+Math.random()*.9,.2+Math.random()*.3,2,.25,.07,1.1)}}seedBreakers(t,e,i){let n=this.waves;for(let s of n.breakers){if(!s.active||s.height<2)continue;let a=s.brk<.01?Math.min(.34,Math.max(0,(s.height-3.5)/18)):0,o=Math.max(s.curl,s.brk*.8,s.turb*.35,a),c=o===a;if(o<.05)continue;let h=e.x-s.ox,l=e.z-s.oz,u=-h*s.dz+l*s.dx,d=h*s.dx+l*s.dz-s.s;if(Math.abs(d)>160+s.height*3)continue;let f=Math.min(2.2,.7+s.height/16);this.emitAcc+=t*620*o*Math.min(1.6,s.height/8);let g=Math.min(130,Math.floor(this.emitAcc));this.emitAcc-=g;for(let b=0;b<g;b++){let m=u+(Math.random()-.5)*110*f;if(Math.exp(-(m*m)/(s.width*s.width))<.15)continue;let v=2.6*Math.sin(m*.047+s.seed*.6)+1.2*Math.sin(m*.13+s.seed*2.1)+(c?(Math.random()-.5)*s.front*.45:(Math.random()-.35)*s.front*1.3),_=s.ox+s.dx*(s.s+v)-s.dz*m,A=s.oz+s.dz*(s.s+v)+s.dx*m,y=n.heightFast(_,A)+Math.random()*.6,w=Math.random()<(s.mega?.14:.26),P=s.speed*(.55+.6*Math.random());this.emit(_,y,A,s.dx*P+i.x*.2,(1.5+5.5*Math.random())*(.5+o)*f,s.dz*P+i.z*.2,w?2+Math.random()*2.4:.8+Math.random()*1.1,w?Math.min(3,(.7+Math.random()*1.2)*f):.02+Math.pow(Math.random(),2)*.07,w?1:0,w?1.4:0,w?.17:.9,w?.5:1)}}}update(t,e,i){let n=this.max,s=this.waves,a=0,o=this.aPos.array,c=this.aData.array,h=this.aVel.array,l=this.aMisc.array;this._tick=(this._tick+1)%3;for(let u=0;u<n;u++){let d=this.life[u];if(d<=0||(d-=t,this.life[u]=d,d<=0))continue;let f=this.kind[u],g=f>.5?2.4:.5,b=Math.exp(-g*t);if(this.vx[u]=i.x+(this.vx[u]-i.x)*b,this.vz[u]=i.z+(this.vz[u]-i.z)*b,this.vy[u]=(this.vy[u]-(f>.5?2.6:9.81)*t)*(f>.5?b:1),this.px[u]+=this.vx[u]*t,this.py[u]+=this.vy[u]*t,this.pz[u]+=this.vz[u]*t,this.size[u]+=this.grow[u]*t,u%3===this._tick&&this.vy[u]<0&&this.py[u]<s.heightFast(this.px[u],this.pz[u])-.12){this.life[u]=0;continue}let m=1-d/this.maxLife[u],p=f<.5?Math.min(1,(1-m)*6):Math.min(1,m*9)*Math.min(1,(1-m)*3),x=a*4;o[x]=this.px[u],o[x+1]=this.py[u],o[x+2]=this.pz[u],o[x+3]=this.size[u],c[x]=this.alpha[u]*p,c[x+1]=this.rot[u],c[x+2]=this.stretch[u],c[x+3]=f,h[a*3]=this.vx[u],h[a*3+1]=this.vy[u],h[a*3+2]=this.vz[u],l[a*2]=m,l[a*2+1]=this.seed[u],a++}this.alive=a,this.mesh.geometry.instanceCount=a,this.aPos.needsUpdate=!0,this.aData.needsUpdate=!0,this.aVel.needsUpdate=!0,this.aMisc.needsUpdate=!0}};var Av=`
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
}`,Tv=`
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
}`,Rv=`
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
}`,Cv=`
precision highp float;
uniform vec3 uLight;
varying vec2 vUv; varying float vA;
void main() {
  if (dot(vUv, vUv) > 1.0 || vA < 0.35) discard;
  gl_FragColor = vec4(uLight * 0.55, 1.0);
}`;function ju(r,t){let e=new Ni;if(e.setAttribute("position",new jt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),e.setIndex([0,1,2,0,2,3]),t){let i=new Float32Array(r*t);for(let n=0;n<i.length;n++)i[n]=Math.random();e.setAttribute("aSeed",new He(i,t))}return e.instanceCount=r,e}var Ha=class{constructor(t,e){this.waves=t,this.group=new ve,this.under=0,this.isUnder=!1,this.depth=0,this.aeration=0,this.burst=0,this.onEnter=null,this.onExit=null,this.light=new E;let i=this.max=e.bubbles;this.bx=new Float32Array(i),this.by=new Float32Array(i),this.bz=new Float32Array(i),this.bvx=new Float32Array(i),this.bvz=new Float32Array(i),this.br=new Float32Array(i),this.bl=new Float32Array(i),this.bp=new Float32Array(i),this.head=0;let n=ju(i,0);this.aPos=new He(new Float32Array(i*4),4),this.aPos.setUsage(zn),this.aSeed=new He(new Float32Array(i),1),this.aSeed.setUsage(zn),n.setAttribute("aPos",this.aPos),n.setAttribute("aSeed",this.aSeed),n.instanceCount=0,this.bubbles=new It(n,new se({uniforms:{uPx:{value:.001},uLight:{value:this.light}},vertexShader:Av,fragmentShader:Tv})),this.bubbles.frustumCulled=!1,this.bubbles.renderOrder=8,this.moteOffset=new E,this.motes=new It(ju(e.motes,4),new se({uniforms:{uBox:{value:new E(7,7,7)},uOffset:{value:this.moteOffset},uPx:{value:.001},uTime:tt.uTime,uLight:{value:this.light}},vertexShader:Rv,fragmentShader:Cv})),this.motes.frustumCulled=!1,this.motes.renderOrder=8,this.motes.visible=!1,this.group.add(this.bubbles,this.motes),this._w={vx:0,vy:0,vz:0},this._tick=0,this._exhale=0,this._aerAcc=0,this._kick=0,this._n=new E}bubble(t,e,i,n,s=6,a=0,o=0){let c=this.head;this.head=(this.head+1)%this.max,this.bx[c]=t,this.by[c]=e,this.bz[c]=i,this.br[c]=n,this.bl[c]=s,this.bp[c]=Math.random()*6.283,this.bvx[c]=a,this.bvz[c]=o}burstAt(t,e,i,n=1){for(let s=0;s<e;s++){let a=Math.random()*6.283,o=Math.acos(2*Math.random()-1),c=i*Math.cbrt(Math.random());this.bubble(t.x+Math.sin(o)*Math.cos(a)*c,t.y+Math.cos(o)*c,t.z+Math.sin(o)*Math.sin(a)*c,(.002+Math.pow(Math.random(),3)*.02)*n,2.5+Math.random()*5,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2)}}update(t,e,i,n,s,a,o,c,h,l){let u=i,d=e.position,f=this._n.set(u.nx,u.ny,u.nz),g=f.x*0+f.y*(d.y-u.h)+f.z*0;this.depth=-g,o.u.uWaterPlane.value.set(f.x,f.y,f.z,-(f.x*d.x+f.y*u.h+f.z*d.z)),o.u.uUnderAmount.value=g<.4?1:0;let b=this.isUnder;this.isUnder=b?g<.03:g<-.03;let m=1-ze(-.12,.05,g);this.under+=(m-this.under)*(1-Math.exp(-t*18)),this.isUnder&&!b&&this.onEnter&&this.onEnter(),!this.isUnder&&b&&this.onExit&&this.onExit();let p=Math.max(0,this.depth),x=tt.uAmbient.value,v=tt.uFlash.value,_=tt.uFlashColor.value,A=Math.exp(-p*.085);o.u.uUnderColor.value.set((x.x*.9+_.x*v*.5)*.1*A,(x.y*.9+_.y*v*.5)*.3*A,(x.z*.9+_.z*v*.5)*.38*A),this.burst=Math.max(0,this.burst-t*.7);let y=Math.min(1,(u.aer*1.15+this.burst*.8)*Math.exp(-p/3.2)+u.turb*.22*Math.exp(-p/4.5));this.aeration+=(y-this.aeration)*(1-Math.exp(-t*(y>this.aeration?12:1.6))),o.u.uAeration.value=this.aeration*this.under;let w=1+2.8*this.aeration;o.u.uUnderExt.value.set(.3*w,.13*w,.1*w),o.u.uUnderDistort.value=.004+.01*Math.min(1,u.turb+this.aeration),o.u.uShaft.value=(.9-.5*c.storm+v*3)*Math.exp(-p*.12),o.u.uExposureBias.value=1+(.62*Math.exp(-p*.045)-1)*this.under;let P=2.6*A*(1+5*this.aeration);this.light.set((x.x*P+_.x*v*.8)*1,(x.y*P+_.y*v*.8)*1.25,(x.z*P+_.z*v*.8)*1.35);let M=2*Math.tan(yn.degToRad(e.fov)*.5)/Math.max(1,l);if(this.bubbles.material.uniforms.uPx.value=M,this.motes.material.uniforms.uPx.value=M,a.wasUnder&&a.alive)for(this._exhale+=t*(5+16*s.effort+22*pt((40-a.oxygen)/40));this._exhale>=1;)this._exhale-=1,this.bubble(h.x+(Math.random()-.5)*.06,h.y,h.z+(Math.random()-.5)*.06,.003+Math.random()*.012,5,n.vel.x*.5,n.vel.z*.5);if(n.subFrac>.5)for(this._kick+=t*Math.min(140,n.relSpeed*n.relSpeed*3.2);this._kick>=1;){this._kick-=1;let D=n.points[2+(Math.random()*9|0)].world;this.bubble(D.x+(Math.random()-.5)*.3,D.y+(Math.random()-.5)*.3,D.z+(Math.random()-.5)*.3,.002+Math.random()*.007,3+Math.random()*3)}if(this.under>.3&&this.aeration>.04){this._aerAcc+=t*900*this.aeration;let D=Math.min(60,Math.floor(this._aerAcc));for(this._aerAcc-=D;D-- >0;){let k=Math.random()*6.283,q=.4+Math.random()*3.6,z=(Math.random()-.4)*3.2;this.bubble(d.x+Math.cos(k)*q,d.y+z,d.z+Math.sin(k)*q,.002+Math.pow(Math.random(),2.5)*.03,2+Math.random()*4,(Math.random()-.5)*2,(Math.random()-.5)*2)}}let S=this.waves,U=this.aPos.array,O=this.aSeed.array,Q=0;this._tick=(this._tick+1)%4;let I=S.breakers.some(D=>D.active&&(D.roll>.01||D.turb>.01));for(let D=0;D<this.max;D++){let k=this.bl[D];if(k<=0)continue;k-=t,this.bl[D]=k;let q=this.br[D],z=.18+2.6*Math.sqrt(q);this.bp[D]+=t*(5+30*q/.02);let N=this.bvx[D]+Math.sin(this.bp[D])*.12,Z=z,et=this.bvz[D]+Math.cos(this.bp[D]*.8)*.12;if(I){let B=this._w;B.vx=0,B.vy=0,B.vz=0,S.breakerFlow(this.bx[D],this.by[D],this.bz[D],u.h,B),N+=B.vx,Z+=B.vy,et+=B.vz}let $=Math.exp(-t*1.5);if(this.bvx[D]*=$,this.bvz[D]*=$,this.bx[D]+=N*t,this.by[D]+=Z*t,this.bz[D]+=et*t,D%4===this._tick&&this.by[D]>S.heightFast(this.bx[D],this.bz[D])-.02){this.bl[D]=0;continue}if(k<=0)continue;let G=Q*4;U[G]=this.bx[D],U[G+1]=this.by[D],U[G+2]=this.bz[D],U[G+3]=q*Math.min(1,k*2),O[Q]=this.bp[D],Q++}this.bubbles.geometry.instanceCount=Q,this.aPos.needsUpdate=!0,this.aSeed.needsUpdate=!0,this.bubbles.visible=Q>0,this.motes.visible=this.under>.02,this.moteOffset.addScaledVector(n.relFlow,t*.6),this.moteOffset.y-=t*.01}};function kc(r,t,e){let i=Math.floor(r.sampleRate*t),n=r.createBuffer(1,i,r.sampleRate),s=n.getChannelData(0),a=0,o=0,c=0,h=0;for(let u=0;u<i;u++){let d=Math.random()*2-1;e==="white"?s[u]=d*.6:e==="pink"?(a=.99765*a+d*.099046,o=.963*o+d*.2965164,c=.57*c+d*1.0526913,s[u]=(a+o+c+d*.1848)*.16):(h=(h+.02*d)/1.02,s[u]=h*3.2)}let l=Math.floor(r.sampleRate*.05);for(let u=0;u<l;u++){let d=u/l;s[i-l+u]=s[i-l+u]*(1-d)+s[u]*d}return n}var Va=class{constructor(){this.ctx=null,this.ready=!1,this.volume=.85,this.under=0,this.heartPhase=0,this.gurgleTimer=1,this.time=0,this.patter=0,this.lastCrash=-10}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.white=kc(e,4,"white"),this.pink=kc(e,6,"pink"),this.brown=kc(e,8,"brown");let i=y=>{let w=e.createGain();return w.gain.value=y,w},n=(y,w,P=.7)=>{let M=e.createBiquadFilter();return M.type=y,M.frequency.value=w,M.Q.value=P,M};this.G=i,this.F=n,this.master=i(this.volume);let s=e.createDynamicsCompressor();s.threshold.value=-16,s.ratio.value=5,s.attack.value=.004,s.release.value=.3,this.finalLP=n("lowpass",2e4,.7),this.master.connect(this.finalLP),this.finalLP.connect(s),s.connect(e.destination),this.air=i(1),this.airLP=n("lowpass",2e4,.7),this.airBoom=n("peaking",170,1.6),this.airBoom.gain.value=0,this.air.connect(this.airLP),this.airLP.connect(this.airBoom),this.airBoom.connect(this.master),this.water=i(0),this.water.connect(this.master);let a=e.createBuffer(2,Math.floor(e.sampleRate*2.6),e.sampleRate);for(let y=0;y<2;y++){let w=a.getChannelData(y),P=0;for(let M=0;M<w.length;M++){let S=M/e.sampleRate;P+=(Math.random()*2-1-P)*.12,w[M]=P*Math.exp(-S*2.4)*2.2}}this.verb=e.createConvolver(),this.verb.buffer=a,this.verbOut=i(.5),this.verb.connect(this.verbOut),this.verbOut.connect(this.master),this.waterSend=i(.9),this.water.connect(this.waterSend),this.waterSend.connect(this.verb);let o=(y,w=1)=>{let P=e.createBufferSource();return P.buffer=y,P.loop=!0,P.playbackRate.value=w,P.start(0,Math.random()*y.duration),P},c=(y,w,P)=>{let M=y;for(let S of w)M.connect(S),M=S;return M.connect(P),w[w.length-1]};this.rumble=c(o(this.brown,.8),[n("lowpass",130),i(.3)],this.air),this.wash=c(o(this.pink),[n("bandpass",620,.5),i(0)],this.air),this.roar=c(o(this.brown,1.3),[n("bandpass",210,.6),i(0)],this.air),this.roarF=this.roar,this.spots=[];for(let y=0;y<3;y++){let w=e.createPanner();w.panningModel="HRTF",w.distanceModel="inverse",w.refDistance=6,w.rolloffFactor=1.1,w.maxDistance=200;let P=i(0),M=n("bandpass",900+y*450,.7);o(this.pink,.9+y*.13).connect(M),M.connect(P),P.connect(w),w.connect(this.air),this.spots.push({p:w,g:P,x:0,y:0,z:0,a:0})}this.rainG=c(o(this.white),[n("highpass",1900),n("lowpass",9500),i(0)],this.air),this.patterG=c(o(this.white,1.3),[n("bandpass",3400,1.4),i(0)],this.air),this.windF=n("bandpass",420,1.8),this.windG=i(0),this.windPan=e.createStereoPanner?e.createStereoPanner():i(1),o(this.pink,.7).connect(this.windF),this.windF.connect(this.windG),this.windG.connect(this.windPan),this.windPan.connect(this.air),this.whistleF=n("bandpass",1300,7),this.whistleG=i(0),o(this.pink,1.1).connect(this.whistleF),this.whistleF.connect(this.whistleG),this.whistleG.connect(this.windPan),this.droneG=c(o(this.brown,.55),[n("lowpass",95),i(.9)],this.water),this.streamF=n("bandpass",520,.9),this.streamG=i(0),this.streamAM=i(0);let h=o(this.brown,.35),l=i(14);h.connect(n("lowpass",14)).connect(l),l.connect(this.streamAM.gain),o(this.pink,1.25).connect(this.streamF),this.streamF.connect(this.streamAM),this.streamAM.connect(this.streamG),this.streamG.connect(this.water),this.bodyG=i(1),this.bodyG.connect(this.master),this.vDry=i(1);let u=n("highpass",115,.7),d=n("peaking",1150,1),f=n("lowpass",6200,.7);d.gain.value=2.5,this.vDry.connect(u),u.connect(d),d.connect(f),f.connect(this.master),this.vWet=i(0),this.vLP=n("lowpass",430,3.5),this.vRes=n("peaking",260,2),this.vRes.gain.value=8,this.vTrem=i(.55),this.vWet.connect(this.vLP),this.vLP.connect(this.vRes),this.vRes.connect(this.vTrem),this.vTrem.connect(this.water),this.vTrem.connect(this.verb),this.breathG=i(1),this.breathG.connect(this.vDry),this.breathG.connect(this.vWet),this.beds=null,this.swimLevel=0;let g=e.createOscillator();g.type="sawtooth",g.frequency.value=17;let b=i(.5);g.connect(b),b.connect(this.vTrem.gain);let m=o(this.brown,.3),p=i(55);m.connect(n("lowpass",6)).connect(p),p.connect(g.frequency),g.start(),this.tinG=i(0),this.tinG.connect(s);for(let y of[3150,3212]){let w=e.createOscillator();w.type="sine",w.frequency.value=y,w.connect(this.tinG),w.start()}this.heliPan=e.createPanner(),this.heliPan.panningModel="HRTF",this.heliPan.distanceModel="inverse",this.heliPan.refDistance=30,this.heliPan.rolloffFactor=.9,this.heliPan.maxDistance=1200,this.heliG=i(0),this.heliChop=i(.5);let x=e.createOscillator();x.type="sawtooth",x.frequency.value=21;let v=i(.45);x.connect(v),v.connect(this.heliChop.gain),x.start(),o(this.brown,1.4).connect(n("lowpass",180)).connect(this.heliChop);let _=n("bandpass",1900,6),A=i(.05);o(this.white,1).connect(_),_.connect(A),A.connect(this.heliG),this.heliChop.connect(this.heliG),this.heliG.connect(this.heliPan),this.heliPan.connect(this.air),this.voice={},this.curVoice=null,this.ready=!0,this._decodeVoices()}setVoices(t){this.voiceSrc=t,this.ready&&this._decodeVoices()}_decodeVoices(){if(!(!this.voiceSrc||this._decoding)){this._decoding=!0;for(let[t,e]of Object.entries(this.voiceSrc)){let i=atob(e),n=new Uint8Array(i.length);for(let s=0;s<i.length;s++)n[s]=i.charCodeAt(s);this.ctx.decodeAudioData(n.buffer).then(s=>{this.voice[t]=s,this._startBeds()}).catch(()=>{})}}}_startBeds(){let t=this.voice;if(this.beds||!t.b_pant||!t.b_tired||!t.w_swim)return;let e=(i,n)=>{let s=this.ctx.createBufferSource();s.buffer=i,s.loop=!0,s.loopStart=.03,s.loopEnd=i.duration-.03;let a=this.G(0);return s.connect(a),a.connect(n),s.start(0,.03+Math.random()*(i.duration-.1)),{s,g:a}};this.beds={pant:e(t.b_pant,this.breathG),tired:e(t.b_tired,this.breathG),swim:e(t.w_swim,this.air)}}setBreath(t,e,i,n){if(!this.beds||!this.ready||this.ctx.state!=="running")return;let s=this.ctx.currentTime,a=n?.09:.012;this.beds.pant.g.gain.setTargetAtTime(t,s,a),this.beds.tired.g.gain.setTargetAtTime(e,s,a),this.beds.pant.s.playbackRate.setTargetAtTime(i,s,.4)}playVoice(t,e=1,i=1,n=null){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;this.stopVoice(.05);let a=this.ctx,o=a.currentTime,c=i*(this.under>.5?.84:1),h=n?Math.min(n[0],s.duration):0,l=n?Math.min(n[1],s.duration):s.duration,u=(l-h)/c,d=a.createBufferSource();d.buffer=s,d.playbackRate.value=c;let f=this.G(1e-4);return f.gain.setValueAtTime(1e-4,o),f.gain.exponentialRampToValueAtTime(Math.max(.001,e),o+(n&&n[0]>0?.09:.012)),n&&l<s.duration-.01&&(f.gain.setValueAtTime(Math.max(.001,e),o+Math.max(.02,u-.12)),f.gain.exponentialRampToValueAtTime(1e-4,o+u)),d.connect(f),f.connect(this.vDry),f.connect(this.vWet),d.start(o,h,l-h),this.curVoice={s:d,g:f,end:o+u},u}stopVoice(t=.08){let e=this.curVoice;if(!e)return;this.curVoice=null;let i=this.ctx.currentTime;if(!(i>=e.end))try{e.g.gain.setTargetAtTime(0,i,t/3),e.s.stop(i+t+.05)}catch{}}playClip(t,e=1,i=1,n=0){let s=this.voice&&this.voice[t];if(!this.ready||!s||this.ctx.state!=="running")return 0;let a=this.ctx,o=a.createBufferSource();o.buffer=s,o.playbackRate.value=i;let c=this.G(e);if(o.connect(c),a.createStereoPanner){let h=a.createStereoPanner();h.pan.value=n,c.connect(h),h.connect(this.air)}else c.connect(this.air);return o.start(),s.duration/i}setVolume(t){this.volume=t,this.master&&this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_burst(t){let e=this.ctx,i=e.currentTime+(t.delay||0),n=e.createBufferSource();n.buffer=t.buf,n.playbackRate.value=t.rate||1;let s=this.F(t.type||"bandpass",t.f0,t.q||1);t.f1&&s.frequency.exponentialRampToValueAtTime(Math.max(20,t.f1),i+t.dur);let a=this.G(0);a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(Math.max(2e-4,t.gain),i+(t.attack||.02)),a.gain.exponentialRampToValueAtTime(1e-4,i+t.dur),n.connect(s),s.connect(a);let o=a;if(t.pan!==void 0&&e.createStereoPanner){let c=e.createStereoPanner();c.pan.value=t.pan,a.connect(c),o=c}o.connect(t.out||this.air),t.verb&&o.connect(this.verb),n.start(i,Math.random()*(t.buf.duration-t.dur-.1)),n.stop(i+t.dur+.05)}_blip(t,e,i,n,s,a){let o=this.ctx,c=o.currentTime+s,h=o.createOscillator();h.type="sine",h.frequency.setValueAtTime(t,c),h.frequency.exponentialRampToValueAtTime(e,c+i);let l=this.G(0);l.gain.setValueAtTime(1e-4,c),l.gain.exponentialRampToValueAtTime(n,c+i*.3),l.gain.exponentialRampToValueAtTime(1e-4,c+i),h.connect(l),l.connect(a||this.water),h.start(c),h.stop(c+i+.02)}gurgle(t=.6){if(!this.ready)return;let e=6+Math.floor(Math.random()*10*t+4),i=0;for(let n=0;n<e;n++){let s=170+Math.random()*420;this._blip(s,s*(1.5+Math.random()*.9),.035+Math.random()*.05,.1*t*(.4+Math.random()),i),i+=.022+Math.random()*.06}this._burst({buf:this.pink,f0:380,f1:900,q:1.2,dur:Math.min(1.2,i+.2),gain:.16*t,attack:.05,out:this.water})}onEvent(t,e){if(!this.ready)return;let i=this.under>.5;switch(t){case"thunder":{let n=pt(e.dist/7e3),s=e.power,a=mt(5,10,Math.random())*(.8+.4*n),o=this.ctx,c=o.currentTime,h=o.createBufferSource();h.buffer=this.brown,h.loop=!0,h.playbackRate.value=.7+Math.random()*.5;let l=this.F("lowpass",mt(1100,170,n),.5),u=this.G(0),d=mt(1,.28,n)*s;u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(d,c+mt(.04,.6,n));let f=c+.5,g=2+Math.floor(Math.random()*4);for(let b=0;b<g;b++)f+=.4+Math.random()*1.1,u.gain.exponentialRampToValueAtTime(d*(.25+Math.random()*.5)*Math.exp(-b*.35),f);u.gain.exponentialRampToValueAtTime(1e-4,c+a),h.connect(l),l.connect(u),u.connect(this.air),u.connect(this.verb),h.start(c,Math.random()*6),h.stop(c+a+.1),e.dist<2200&&this._burst({buf:this.white,type:"highpass",f0:700,dur:.35,gain:.8*s*(1-e.dist/2200),attack:.004,verb:!0});break}case"impact":{let n=Math.min(1,e.strength/3.2);if(this.time-this.lastCrash<.5)break;this.lastCrash=this.time,this._burst({buf:this.white,type:"lowpass",f0:5200,f1:260,q:.6,dur:1.5+n,gain:.55+.5*n,attack:.015,verb:!0}),this._burst({buf:this.brown,type:"lowpass",f0:240,f1:60,q:.8,dur:1.9,gain:1*n+.3,attack:.02,out:this.master}),this._blip(74,34,.7,.5*n,0,this.master);break}case"splash":{let n=Math.min(1,e.v/5);this._burst({buf:this.pink,f0:1400+Math.random()*1200,f1:600,q:.8,dur:.16+.22*n,gain:.1+.22*n,attack:.006,pan:Math.random()*1.2-.6});break}case"submerge":this._burst({buf:this.brown,type:"lowpass",f0:900,f1:120,dur:.7,gain:.7,attack:.01,out:this.master}),this.gurgle(.9),this.gurgleTimer=.8;break;case"surface":this._burst({buf:this.white,type:"highpass",f0:1500,f1:3500,dur:.5,gain:.3,attack:.02});break;case"camEnter":this._blip(120,52,.45,.35,0,this.master);break;case"camExit":this._burst({buf:this.pink,f0:2200,f1:900,q:.6,dur:.6,gain:.22,attack:.02});break;default:break}}update(t,e){if(!this.ready||this.ctx.state!=="running")return;this.time+=t;let i=this.ctx,n=i.currentTime,s=(d,f,g=.12)=>d.setTargetAtTime(f,n,g),a=this.under=e.under,o=i.listener,c=e.cam;o.positionX?(o.positionX.value=c.pos.x,o.positionY.value=c.pos.y,o.positionZ.value=c.pos.z,o.forwardX.value=c.fwd.x,o.forwardY.value=c.fwd.y,o.forwardZ.value=c.fwd.z,o.upX.value=c.up.x,o.upY.value=c.up.y,o.upZ.value=c.up.z):(o.setPosition(c.pos.x,c.pos.y,c.pos.z),o.setOrientation(c.fwd.x,c.fwd.y,c.fwd.z,c.up.x,c.up.y,c.up.z)),s(this.airLP.frequency,mt(2e4,330*Math.exp(-e.depth*.06)+120,a*a),.06),s(this.airBoom.gain,9*a,.1),s(this.air.gain,mt(1,.55,a),.1),s(this.water.gain,a*(1-.7*e.blackout),.08),s(this.bodyG.gain,(1-a)*(1-e.blackout),.05),s(this.verbOut.gain,.35+.5*a,.2),s(this.rumble.gain,.16+.26*e.storm+.1*Math.min(1,Math.abs(e.swellV)/6),.3);let h=0;for(let d of e.hot){let f=Math.hypot(d.x-c.pos.x,d.z-c.pos.z);h+=d.amount/(1+f/12)}s(this.wash.gain,Math.min(.5,.05*e.storm+.11*h),.25),s(this.roar.gain,Math.min(1.1,e.threat*e.threat*1.1),.2);for(let d=0;d<this.spots.length;d++){let f=this.spots[d],g=e.hot[d];g?(f.a<.02?(f.x=g.x,f.y=g.y,f.z=g.z):(f.x+=(g.x-f.x)*.1,f.y+=(g.y-f.y)*.1,f.z+=(g.z-f.z)*.1),f.a+=(Math.min(1,g.amount)-f.a)*.08):f.a*=.94,f.p.positionX?(f.p.positionX.value=f.x,f.p.positionY.value=f.y,f.p.positionZ.value=f.z):f.p.setPosition(f.x,f.y,f.z),s(f.g.gain,f.a*.9,.1)}s(this.rainG.gain,.12*e.rain,.4),this.patter+=Math.random()<t*9?1:0,this.patter*=Math.exp(-t*9),s(this.patterG.gain,.03*e.rain*(.4+Math.min(1.5,this.patter)),.03);let l=pt(e.windSpeed/34);s(this.windF.frequency,260+520*e.gust*l,.5),s(this.windG.gain,.34*Math.pow(l,1.5)+.5*(e.air||0),.15),s(this.whistleF.frequency,900+900*e.gust*e.gust,.6),s(this.whistleG.gain,.05*Math.pow(l,2.2)*e.gust,.5),this.windPan.pan&&s(this.windPan.pan,Oi(e.windPan*.55,-.8,.8),.6),s(this.streamG.gain,Math.min(1,e.aeration*1.4+Math.min(.5,e.relSpeed*.08))*.5,.1),s(this.streamF.frequency,420+500*e.aeration,.2),e.mouthUnder&&e.alive&&(this.gurgleTimer-=t*(1+1.6*pt((45-e.oxygen)/45)+e.effort*.6),this.gurgleTimer<=0&&(this.gurgle(.45+.5*Math.random()),this.gurgleTimer=1.1+Math.random()*2));let u=pt((62-e.oxygen)/55)*(e.alive?1:0)+(e.mouthUnder?.18:0);if(u>.05&&(this.heartPhase+=t*mt(1.2,2.5,pt(u)),this.heartPhase>=1)){this.heartPhase-=1;let d=.5*Math.min(1,u*1.3);this._blip(62,40,.11,d,0,this.master),this._blip(52,36,.13,d*.7,.16,this.master)}if(s(this.master.gain,this.volume*(1-.85*e.blackout),.3),e.heli&&e.heli.on){let d=e.heli.pos;this.heliPan.positionX?(this.heliPan.positionX.value=d.x,this.heliPan.positionY.value=d.y,this.heliPan.positionZ.value=d.z):this.heliPan.setPosition(d.x,d.y,d.z),s(this.heliG.gain,2.4,.6)}else s(this.heliG.gain,0,.8);this.beds&&s(this.beds.swim.g.gain,Math.min(.6,(e.swimSplash||0)*.55)*(1-a),.25),s(this.vDry.gain,1-a,.04),s(this.vWet.gain,a*2.2,.04),s(this.tinG.gain,this.volume*(.014*pt((30-e.oxygen)/30)+.03*e.blackout),.3),s(this.finalLP.frequency,2e4*Math.pow(.022,e.blackout),.2)}};var Pv=`
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
#touch { touch-action: none; }
#touch .zone { position: absolute; pointer-events: auto; touch-action: none; } #touch .zr { z-index: 0; } #touch .zl { z-index: 1; } #touch .stick { z-index: 2; } #touch .btn { z-index: 3; }
#touch .zl { left: 0; top: 0; bottom: 0; width: 46%; } #touch .zr { left: 46%; right: 0; top: 0; bottom: 0; }
#touch .stick { position: absolute; width: 120px; height: 120px; margin: -60px 0 0 -60px; border: 1px solid rgba(255,255,255,.28); border-radius: 50%; display: none; pointer-events: none; }
#touch .stick b { position: absolute; left: 50%; top: 50%; width: 44px; height: 44px; margin: -22px 0 0 -22px; border-radius: 50%; background: rgba(255,255,255,.28); }
#touch .btn { position: absolute; width: 86px; height: 86px; border-radius: 50%; border: 1px solid rgba(255,255,255,.38); color: rgba(240,245,248,.86); font-size: 14px; letter-spacing: .14em;
  display: flex; align-items: center; justify-content: center; pointer-events: auto; touch-action: none; background: rgba(6,10,14,.22); user-select: none; -webkit-user-select: none; }
#touch .btn.on { background: rgba(255,255,255,.28); border-color: #fff; color: #fff; }
#touch .sw { right: max(22px, env(safe-area-inset-right)); bottom: max(30px, env(safe-area-inset-bottom)); }
#touch .dv { right: calc(max(22px, env(safe-area-inset-right)) + 100px); bottom: max(18px, env(safe-area-inset-bottom)); }
#touch .sm { width: 46px; height: 46px; font-size: 11px; top: max(14px, env(safe-area-inset-top)); letter-spacing: .06em; } #touch .vw { right: 76px; } #touch .ps { right: 18px; }
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
`,te=(r,t,e)=>{let i=document.createElement(r);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i},Nc=r=>`${String(Math.floor(r/60)).padStart(2,"0")}:${String(Math.floor(r%60)).padStart(2,"0")}`,Ga=class{constructor(t,e,i){this.root=t,this.api=e,this.isTouch=i;let n=te("style");n.textContent=Pv,document.head.appendChild(n),this.title=te("div","layer shade"),this.title.id="title";let s=te("div","col");s.appendChild(te("h1","","EXTREME<br>OCEAN SURVIVAL")),this.goBtn=te("div","go act","\uC2DC\uC791"),s.appendChild(this.goBtn),this.titleRows=te("div"),s.appendChild(this.titleRows),this.title.appendChild(s),this.title.appendChild(te("div","hint",i?"\uC67C\uCABD \uB04C\uAE30 \uBC29\uD5A5 \xB7 \uD5E4\uC5C4 / \uC785\uC218 \uBC84\uD2BC \xB7 \uD654\uBA74 \uB04C\uAE30 \uC2DC\uC810":"WASD \uBC29\uD5A5 \xB7 Space(\uC88C\uD074\uB9AD) \uD5E4\uC5C4 \xB7 F(\uC6B0\uD074\uB9AD) \uC785\uC218 \xB7 \uB9C8\uC6B0\uC2A4 \uC2DC\uC810 \xB7 V \uC2DC\uC810 \uC804\uD658 \xB7 Esc \uBA48\uCDA4")),this.pause=te("div","layer shade"),this.pause.id="pause";let a=te("div","col");a.appendChild(te("h2","","\uBA48\uCDA4")),this.pauseTime=te("div","time"),a.appendChild(this.pauseTime),this.resumeBtn=te("div","go act","\uACC4\uC18D"),a.appendChild(this.resumeBtn),this.pauseRows=te("div"),a.appendChild(this.pauseRows),this.pause.appendChild(a),this.dead=te("div","layer shade"),this.dead.id="dead";let o=te("div","col");this.deadTitle=te("h2","",""),o.appendChild(this.deadTitle),this.deadTime=te("div","time"),o.appendChild(this.deadTime),this.againBtn=te("div","go act","\uB2E4\uC2DC"),o.appendChild(this.againBtn),this.dead.appendChild(o),this.won=te("div","layer shade"),this.won.id="won";let c=te("div","col");c.appendChild(te("h2","","\uAD6C\uC870\uB418\uC5C8\uB2E4")),this.wonTime=te("div","time"),c.appendChild(this.wonTime),this.wonBtn=te("div","go act","\uB2E4\uC2DC"),c.appendChild(this.wonBtn),this.won.appendChild(c),this.noteEl=te("div","note"),this.hud=te("div","layer"),this.hud.id="hud";let h=te("div","bars");this.bars={};for(let[u,d]of[["o2","\uC0B0\uC18C"],["st","\uCCB4\uB825"],["tp","\uCCB4\uC628"],["rs","\uAD6C\uC870"]]){let f=te("div","bar",`<i>${d}</i><u><s></s></u>`);h.appendChild(f),this.bars[u]={el:f,fill:f.querySelector("s")}}this.hud.appendChild(h),this.touch=te("div","layer"),this.touch.id="touch",t.append(this.hud,this.noteEl,this.touch,this.title,this.pause,this.dead,this.won),i&&this.buildTouch();let l=(u,d)=>u.addEventListener("click",f=>{f.stopPropagation(),d()});l(this.goBtn,()=>e.start()),l(this.resumeBtn,()=>e.resume()),l(this.againBtn,()=>e.restart()),l(this.wonBtn,()=>e.restart()),this.buildRows(),this.mode=""}buildRows(){let t=this.api,e=(i,n)=>{i.innerHTML="";let s=(a,o,c)=>{let h=te("div","row act",`${a}<b></b>`),l=h.querySelector("b"),u=()=>{l.textContent=o()};h.addEventListener("click",d=>{d.stopPropagation(),c(),this.refresh()}),this._upd.push(u),u(),i.appendChild(h)};if(s("\uD654\uC9C8",()=>t.get("quality"),()=>t.cycle("quality")),s("\uC2DC\uC810",()=>t.get("view"),()=>t.cycle("view")),s("\uC790\uB3D9 \uCE74\uBA54\uB77C",()=>t.get("autocam"),()=>t.cycle("autocam")),s("\uCE74\uBA54\uB77C \uD754\uB4E4\uB9BC",()=>t.get("shake"),()=>t.cycle("shake")),s("\uC18C\uB9AC",()=>t.get("volume"),()=>t.cycle("volume")),n){let a=te("div","row","\uC2DC\uD5D8 \uC7A5\uBA74");for(let c of"ABCDEFGHR"){let h=te("span","t act",c);h.addEventListener("click",l=>{l.stopPropagation(),t.scenario(c)}),a.appendChild(h)}i.appendChild(a);let o=te("div","row act","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC");o.addEventListener("click",c=>{c.stopPropagation(),t.restart()}),i.appendChild(o)}};this._upd=[],e(this.titleRows,!1),e(this.pauseRows,!0)}refresh(){for(let t of this._upd)t()}show(t,e){this.mode=t,this.title.classList.toggle("on",t==="title"),this.pause.classList.toggle("on",t==="paused"),this.dead.classList.toggle("on",t==="dead"),this.won.classList.toggle("on",t==="won"),t==="won"&&(this.wonTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+Nc(e.time)),t!=="playing"&&this.noteEl.classList.remove("on"),this.hud.classList.toggle("on",t==="playing"),this.touch.classList.toggle("on",t==="playing"&&this.isTouch),t==="paused"&&(this.pauseTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+Nc(e.time)),t==="dead"&&(this.deadTitle.textContent=e.cause==="cold"?"\uCCB4\uC628\uC744 \uC783\uACE0 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4":"\uC228\uC774 \uB2E4\uD574 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4",this.deadTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+Nc(e.time)),this.refresh(),t!=="playing"&&this.releaseTouch()}note(t,e=6){this.noteEl.textContent=t,this.noteEl.classList.add("on"),clearTimeout(this._nt),this._nt=setTimeout(()=>this.noteEl.classList.remove("on"),e*1e3)}setBars(t,e,i,n=0){let s=(a,o,c,h)=>{a.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,o)).toFixed(3)})`,a.el.classList.toggle("show",o<c),a.el.classList.toggle("low",o<h)};s(this.bars.o2,t,.97,.3),s(this.bars.st,e,.9,.22),s(this.bars.tp,i,.8,.35),this.bars.rs.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,n)).toFixed(3)})`,this.bars.rs.el.classList.toggle("show",n>.01)}buildTouch(){let t=this.api,e=t.input;e.touch={x:0,z:0,swim:!1,dive:!1};let i=te("div","zone zl"),n=te("div","zone zr"),s=te("div","stick","<b></b>"),a=s.firstChild;this.touch.append(i,n,s);let o=null,c=0,h=0,l=null,u=0,d=0,f=56;i.addEventListener("pointerdown",y=>{if(o===null){o=y.pointerId,c=y.clientX,h=y.clientY;try{i.setPointerCapture(y.pointerId)}catch{}s.style.display="block",s.style.left=c+"px",s.style.top=h+"px",a.style.transform="translate(0,0)",y.preventDefault()}}),i.addEventListener("pointermove",y=>{if(y.pointerId!==o)return;let w=y.clientX-c,P=y.clientY-h,M=Math.hypot(w,P);M>f&&(w*=f/M,P*=f/M),a.style.transform=`translate(${w}px,${P}px)`;let S=.12,U=w/f,O=-P/f;Math.hypot(U,O)<S&&(U=0,O=0),e.touch.x=U,e.touch.z=O,y.preventDefault()});let g=y=>{y.pointerId===o&&(o=null,e.touch.x=0,e.touch.z=0,s.style.display="none")};i.addEventListener("pointerup",g),i.addEventListener("pointercancel",g),n.addEventListener("pointerdown",y=>{if(l===null){l=y.pointerId,u=y.clientX,d=y.clientY;try{n.setPointerCapture(y.pointerId)}catch{}y.preventDefault()}}),n.addEventListener("pointermove",y=>{y.pointerId===l&&(e.dx+=(y.clientX-u)*2.2,e.dy+=(y.clientY-d)*2.2,u=y.clientX,d=y.clientY,e.lastLook=performance.now()/1e3,y.preventDefault())});let b=y=>{y.pointerId===l&&(l=null)};n.addEventListener("pointerup",b),n.addEventListener("pointercancel",b);let m=(y,w)=>{let P=te("div","btn "+y,w);return this.touch.appendChild(P),P},p=m("sw","\uD5E4\uC5C4"),x=m("dv","\uC785\uC218"),v=m("sm vw","\uC2DC\uC810"),_=m("sm ps","\u2161"),A=(y,w)=>{let P=null;y.addEventListener("pointerdown",S=>{S.preventDefault(),S.stopPropagation(),P=S.pointerId;try{y.setPointerCapture(S.pointerId)}catch{}y.classList.add("on"),e.touch[w]=!0});let M=S=>{P!==null&&S.pointerId!==P||(S.stopPropagation(),P=null,y.classList.remove("on"),e.touch[w]=!1)};y.addEventListener("pointerup",M),y.addEventListener("pointercancel",M),y.addEventListener("lostpointercapture",M)};A(p,"swim"),A(x,"dive"),v.addEventListener("pointerdown",y=>{y.preventDefault(),y.stopPropagation(),t.toggleView()}),_.addEventListener("pointerdown",y=>{y.preventDefault(),y.stopPropagation(),t.pause()}),this.releaseTouch=()=>{o=null,l=null,e.touch.x=0,e.touch.z=0,e.touch.swim=!1,e.touch.dive=!1,s.style.display="none",p.classList.remove("on"),x.classList.remove("on")}}releaseTouch(){}};var lr={A:{label:"\uBCF4\uD1B5 \uD30C\uB3C4\uC5D0 \uB5A0 \uC788\uAE30",storm:.42,t0:40,view:"third",keys:{},script:[]},B:{label:"\uD070 \uB108\uC6B8 \uC811\uADFC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:15,height:16,breakOffset:9,angleOffset:0,width:240,speed:13,frontMin:27,back:70})}]},C:{label:"\uD30C\uB3C4 \uBD95\uAD34 \xB7 \uCDA9\uB3CC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:9,height:13.5,breakOffset:-1,angleOffset:0,width:170,speed:14})}]},D:{label:"\uBB3C\uC18D \uD718\uB9D0\uB9BC",storm:1,t0:12,view:"first",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:6,height:14.5,breakOffset:-1.3,angleOffset:0,width:170,speed:14})}]},E:{label:"\uC218\uBA74 \uBCF5\uADC0",storm:.85,t0:30,view:"first",keys:{up:!0,sprint:!0},setup:r=>{r.body.pos.y-=5.5,r.body.prevPos.copy(r.body.pos),r.survival.oxygen=42,r.survival.wasUnder=!0,r.survival.submergedTime=14,r.cam.pitch=.7},script:[{t:9,do:r=>{r.input.virtual={}}}]},F:{label:"\uBC88\uAC1C",storm:.9,t0:55,view:"third",keys:{},script:[{t:2,do:r=>r.lightning.strike(r.camera.position,{azimuth:Math.PI,dist:1700,sheet:0,power:1.4})},{t:9,do:r=>r.lightning.strike(r.camera.position,{azimuth:Math.PI*.8,dist:5200,sheet:1,power:1})}]},G:{label:"\uCDA9\uB3CC \uC911 \uC2DC\uC810 \uC804\uD658",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launch({lead:7,height:12.5,breakOffset:-1,angleOffset:0,width:170,speed:14})},...[2,3.6,5.2,6.4,7.4,8.4,9.6,11,12.6,14.2].map(r=>({t:r,do:t=>t.cam.toggle()}))]}};lr.H={label:"\uD574\uC77C \xB7 \uACF5\uC911\uC73C\uB85C \uB0A0\uC544\uAC10",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:r=>r.interaction.launchMega({lead:14,height:34})}]};lr.R={label:"\uAD6C\uC870 \uD5EC\uAE30",storm:.8,t0:30,view:"third",keys:{},script:[{t:.5,do:r=>r.rescue.dispatch(r.body.pos,Math.PI,16)},...Array.from({length:70},(r,t)=>({t:11+t*.5,do:e=>{let i=e.rescue.ring,n=e.body.pos;e.cam.yaw=Math.atan2(i.x-n.x,i.z-n.z),e.input.virtual={z:1,sprint:!0},e.input.enabled=!0}}))]};var Wa=class{constructor(t){this.game=t,this.active=null,this.t=0,this.next=0,this.name=""}run(t){let e=lr[t];if(!e)return!1;let i=this.game;i.waves.time=e.t0;for(let n of i.waves.breakers)n.active=!1;return i.weather.locked=!0,i.weather.base=i.weather.storm=e.storm,i.weather.time=0,i.interaction.auto=!1,i.autoLightning=!1,i.lightning.active=!1,i.lightning.pendingThunder.length=0,i.rescue.state="none",i.rescue.group.visible=!1,i.rescue.rescued=!1,i.rescue.arriveAt=1e9,i.weather.update(0),i.waves.update(0),i.resetPlayer(),i.cam.setMode(e.view),i.cam.blend=i.cam.target,i.cam.yaw=-Math.PI/2,i.cam.pitch=e.view==="first"?-.02:-.08,i.input.virtual=e.keys&&Object.keys(e.keys).length?{...e.keys}:null,i.input.virtual&&(i.input.enabled=!0),e.setup&&e.setup(i),this.active=e,this.name=t,this.t=0,this.next=0,!0}stop(){this.active=null,this.game.input.virtual=null}update(t){if(!this.active)return;this.t+=t;let e=this.active.script;for(;this.next<e.length&&this.t>=e[this.next].t;)e[this.next].do(this.game),this.next++}};function Oc(r,t){if(t===bu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===or||t===ga){let e=r.getIndex();if(e===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let i=e.count-2,n=[];if(t===or)for(let a=1;a<=i;a++)n.push(e.getX(0)),n.push(e.getX(a)),n.push(e.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(e.getX(a)),n.push(e.getX(a+1)),n.push(e.getX(a+2))):(n.push(e.getX(a+2)),n.push(e.getX(a+1)),n.push(e.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}var qa=class extends sn{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new qc(e)}),this.register(function(e){return new th(e)}),this.register(function(e){return new eh(e)}),this.register(function(e){return new ih(e)}),this.register(function(e){return new jc(e)}),this.register(function(e){return new Yc(e)}),this.register(function(e){return new Kc(e)}),this.register(function(e){return new Zc(e)}),this.register(function(e){return new Wc(e)}),this.register(function(e){return new Jc(e)}),this.register(function(e){return new Xc(e)}),this.register(function(e){return new $c(e)}),this.register(function(e){return new Qc(e)}),this.register(function(e){return new Vc(e)}),this.register(function(e){return new nh(e)}),this.register(function(e){return new sh(e)})}load(t,e,i,n){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let h=xn.extractUrlBase(t);a=xn.resolveURL(h,this.path)}else a=xn.extractUrlBase(t);this.manager.itemStart(t);let o=function(h){n?n(h):console.error(h),s.manager.itemError(t),s.manager.itemEnd(t)},c=new sr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(h){try{s.parse(h,a,function(l){e(l),s.manager.itemEnd(t)},o)}catch(l){o(l)}},i,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,i,n){let s,a={},o={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Qu){try{a[ee.KHR_BINARY_GLTF]=new rh(t)}catch(u){n&&n(u);return}s=JSON.parse(a[ee.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let h=new dh(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let u=this.pluginCallbacks[l](h);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){let u=s.extensionsUsed[l],d=s.extensionsRequired||[];switch(u){case ee.KHR_MATERIALS_UNLIT:a[u]=new Gc;break;case ee.KHR_DRACO_MESH_COMPRESSION:a[u]=new ah(s,this.dracoLoader);break;case ee.KHR_TEXTURE_TRANSFORM:a[u]=new oh;break;case ee.KHR_MESH_QUANTIZATION:a[u]=new ch;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}h.setExtensions(a),h.setPlugins(o),h.parse(i,n)}parseAsync(t,e){let i=this;return new Promise(function(n,s){i.parse(t,e,n,s)})}};function Lv(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}var ee={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Vc=class{constructor(t){this.parser=t,this.name=ee.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let i=0,n=e.length;i<n;i++){let s=e[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){let e=this.parser,i="light:"+t,n=e.cache.get(i);if(n)return n;let s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t],h,l=new Ut(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],Re);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new Bn(l),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new da(l),h.distance=u;break;case"spot":h=new Ts(l),h.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),h.decay=2,wn(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=e.createUniqueName(c.name||"light_"+t),n=Promise.resolve(h),e.cache.add(i,n),n}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,i=this.parser,s=i.json.nodes[t],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(e.cache,o,c)})}},Gc=class{constructor(){this.name=ee.KHR_MATERIALS_UNLIT}getMaterialType(){return je}extendParams(t,e,i){let n=[];t.color=new Ut(1,1,1),t.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Re),t.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(t,"map",s.baseColorTexture,_e))}return Promise.all(n)}},Wc=class{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},qc=class{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new _t(o,o)}return Promise.all(s)}},Xc=class{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},jc=class{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_SHEEN}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new Ut(0,0,0),e.sheenRoughness=0,e.sheen=1;let a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Re)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(e,"sheenColorMap",a.sheenColorTexture,_e)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},Yc=class{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},Kc=class{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_VOLUME}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return e.attenuationColor=new Ut().setRGB(o[0],o[1],o[2],Re),Promise.all(s)}},Zc=class{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_IOR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(t,e){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=n.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Jc=class{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_SPECULAR}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(e,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return e.specularColor=new Ut().setRGB(o[0],o[1],o[2],Re),a.specularColorTexture!==void 0&&s.push(i.assignTexture(e,"specularColorMap",a.specularColorTexture,_e)),Promise.all(s)}},Qc=class{constructor(t){this.parser=t,this.name=ee.EXT_MATERIALS_BUMP}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(s)}},$c=class{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:ni}extendMaterialParams(t,e){let i=this.parser,n=i.json.materials[t];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let s=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},th=class{constructor(t){this.parser=t,this.name=ee.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,i=e.json,n=i.textures[t];if(!n.extensions||!n.extensions[this.name])return null;let s=n.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,a)}},eh=class{constructor(t){this.parser=t,this.name=ee.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=n.images[a.source],c=i.textureLoader;if(o.uri){let h=i.options.manager.getHandler(o.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(t,a.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},ih=class{constructor(t){this.parser=t,this.name=ee.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){let e=this.name,i=this.parser,n=i.json,s=n.textures[t];if(!s.extensions||!s.extensions[e])return null;let a=s.extensions[e],o=n.images[a.source],c=i.textureLoader;if(o.uri){let h=i.options.manager.getHandler(o.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(t,a.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}},nh=class{constructor(t){this.name=ee.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,i=e.bufferViews[t];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=n.byteOffset||0,h=n.byteLength||0,l=n.count,u=n.byteStride,d=new Uint8Array(o,c,h);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(l,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(l*u);return a.decodeGltfBuffer(new Uint8Array(f),l,u,d,n.mode,n.filter),f})})}else return null}},sh=class{constructor(t){this.name=ee.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,i=e.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=e.meshes[i.mesh];for(let h of n.primitives)if(h.mode!==_i.TRIANGLES&&h.mode!==_i.TRIANGLE_STRIP&&h.mode!==_i.TRIANGLE_FAN&&h.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],c={};for(let h in a)o.push(this.parser.getDependency("accessor",a[h]).then(l=>(c[h]=l,c[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(h=>{let l=h.pop(),u=l.isGroup?l.children:[l],d=h[0].count,f=[];for(let g of u){let b=new Ct,m=new E,p=new St,x=new E(1,1,1),v=new na(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,b.compose(m,p,x));for(let _ in c)if(_==="_COLOR_0"){let A=c[_];v.instanceColor=new He(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Se.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return l.isGroup?(l.clear(),l.add(...f),l):f[0]}))}},Qu="glTF",ur=12,Yu={JSON:1313821514,BIN:5130562},rh=class{constructor(t){this.name=ee.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,ur),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Qu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-ur,s=new DataView(t,ur),a=0;for(;a<n;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Yu.JSON){let h=new Uint8Array(t,ur+a,o);this.content=i.decode(h)}else if(c===Yu.BIN){let h=ur+a;this.body=t.slice(h,h+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ah=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ee.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let i=this.json,n=this.dracoLoader,s=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},h={};for(let l in a){let u=lh[l]||l.toLowerCase();o[u]=a[l]}for(let l in t.attributes){let u=lh[l]||l.toLowerCase();if(a[l]!==void 0){let d=i.accessors[t.attributes[l]],f=Fs[d.componentType];h[u]=f.name,c[u]=d.normalized===!0}}return e.getDependency("bufferView",s).then(function(l){return new Promise(function(u,d){n.decodeDracoFile(l,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,h,Re,d)})})}},oh=class{constructor(){this.name=ee.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}},ch=class{constructor(){this.name=ee.KHR_MESH_QUANTIZATION}},Xa=class extends gn{constructor(t,e,i,n){super(t,e,i,n)}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n*3+n;for(let a=0;a!==n;a++)e[a]=i[s+a];return e}interpolate_(t,e,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,h=o*3,l=n-e,u=(i-e)/l,d=u*u,f=d*u,g=t*h,b=g-h,m=-2*f+3*d,p=f-d,x=1-m,v=p-d+u;for(let _=0;_!==o;_++){let A=a[b+_+o],y=a[b+_+c]*l,w=a[g+_+o],P=a[g+_]*l;s[_]=x*A+v*y+m*w+p*P}return s}},Iv=new St,hh=class extends Xa{interpolate_(t,e,i,n){let s=super.interpolate_(t,e,i,n);return Iv.fromArray(s).normalize().toArray(s),s}},_i={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ku={9728:Ee,9729:Qt,9984:Wr,9985:xc,9986:Gs,9987:ti},Zu={33071:$e,33648:Ks,10497:li},Bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Dv={CUBICSPLINE:void 0,LINEAR:Un,STEP:vs},zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Fv(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ui({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hi})),r.DefaultMaterial}function qn(r,t,e){for(let i in e.extensions)r[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=e.extensions[i])}function wn(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Uv(r,t,e){let i=!1,n=!1,s=!1;for(let h=0,l=t.length;h<l;h++){let u=t[h];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let h=0,l=t.length;h<l;h++){let u=t[h];if(i){let d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(n){let d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(h){let l=h[0],u=h[1],d=h[2];return i&&(r.morphAttributes.position=l),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function kv(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,i=t.weights.length;e<i;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let i=0,n=e.length;i<n;i++)r.morphTargetDictionary[e[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Nv(r){let t,e=r.extensions&&r.extensions[ee.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Hc(e.attributes):t=r.indices+":"+Hc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)t+=":"+Hc(r.targets[i]);return t}function Hc(r){let t="",e=Object.keys(r).sort();for(let i=0,n=e.length;i<n;i++)t+=e[i]+":"+r[e[i]]+";";return t}function uh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ov(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Bv=new Ct,dh=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Lv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new ua(this.options.manager):this.textureLoader=new fa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return qn(s,o,n),wn(o,n),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=e.length;n<s;n++){let a=e[n].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let n=0,s=t.length;n<s;n++){let a=t[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,i){if(t.refs[e]<=1)return i;let n=i.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[h,l]of a.children.entries())s(l,o.children[h])};return s(i,n),n.name+="_instance_"+t.uses[e]++,n}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let i=0;i<e.length;i++){let n=t(e[i]);if(n)return n}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let i=[];for(let n=0;n<e.length;n++){let s=t(e[n]);s&&i.push(s)}return i}getDependency(t,e){let i=t+":"+e,n=this.cache.get(i);if(!n){switch(t){case"scene":n=this.loadScene(e);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":n=this.loadAccessor(e);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":n=this.loadBuffer(e);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":n=this.loadSkin(e);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":n=this.loadCamera(e);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!n)throw new Error("Unknown type: "+t);break}this.cache.add(i,n)}return n}getDependencies(t){let e=this.cache.get(t);if(!e){let i=this,n=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(n.map(function(s,a){return i.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],i=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ee.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(s,a){i.load(xn.resolveURL(e.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(i){let n=e.byteLength||0,s=e.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(t){let e=this,i=this.json,n=this.json.accessors[t];if(n.bufferView===void 0&&n.sparse===void 0){let a=Bc[n.type],o=Fs[n.componentType],c=n.normalized===!0,h=new o(n.count*a);return Promise.resolve(new jt(h,a,c))}let s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Bc[n.type],h=Fs[n.componentType],l=h.BYTES_PER_ELEMENT,u=l*c,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0,b,m;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,v=e.cache.get(x);v||(b=new h(o,p*f,n.count*f/l),v=new $s(b,f/l),e.cache.add(x,v)),m=new tr(v,c,d%f/l,g)}else o===null?b=new h(n.count*c):b=new h(o,d,n.count*c),m=new jt(b,c,g);if(n.sparse!==void 0){let p=Bc.SCALAR,x=Fs[n.sparse.indices.componentType],v=n.sparse.indices.byteOffset||0,_=n.sparse.values.byteOffset||0,A=new x(a[1],v,n.sparse.count*p),y=new h(a[2],_,n.sparse.count*c);o!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,P=A.length;w<P;w++){let M=A[w];if(m.setX(M,y[w*c]),c>=2&&m.setY(M,y[w*c+1]),c>=3&&m.setZ(M,y[w*c+2]),c>=4&&m.setW(M,y[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){let e=this.json,i=this.options,s=e.textures[t].source,a=e.images[s],o=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,s,o)}loadTextureImage(t,e,i){let n=this,s=this.json,a=s.textures[t],o=s.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let h=this.loadImageSource(e,i).then(function(l){l.flipY=!1,l.name=a.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return l.magFilter=Ku[d.magFilter]||Qt,l.minFilter=Ku[d.minFilter]||ti,l.wrapS=Zu[d.wrapS]||li,l.wrapT=Zu[d.wrapT]||li,n.associations.set(l,{textures:t}),l}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(t,e){let i=this,n=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let a=n.images[t],o=self.URL||self.webkitURL,c=a.uri||"",h=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(u){h=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let l=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(b){let m=new Xe(b);m.needsUpdate=!0,d(m)}),e.load(xn.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return h===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||Ov(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=l,l}assignTexture(t,e,i,n){let s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[ee.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[ee.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[ee.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return n!==void 0&&(a.colorSpace=n),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,i=t.material,n=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new ir,di.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(t.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new er,di.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}t.material=i}getMaterialType(){return Ui}loadMaterial(t){let e=this,i=this.json,n=this.extensions,s=i.materials[t],a,o={},c=s.extensions||{},h=[];if(c[ee.KHR_MATERIALS_UNLIT]){let u=n[ee.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),h.push(u.extendParams(o,s,e))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Ut(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Re),o.opacity=d[3]}u.baseColorTexture!==void 0&&h.push(e.assignTexture(o,"map",u.baseColorTexture,_e)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(h.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),h.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}s.doubleSided===!0&&(o.side=Le);let l=s.alphaMode||zc.OPAQUE;if(l===zc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===zc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==je&&(h.push(e.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new _t(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==je&&(h.push(e.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==je){let u=s.emissiveFactor;o.emissive=new Ut().setRGB(u[0],u[1],u[2],Re)}return s.emissiveTexture!==void 0&&a!==je&&h.push(e.assignTexture(o,"emissiveMap",s.emissiveTexture,_e)),Promise.all(h).then(function(){let u=new a(o);return s.name&&(u.name=s.name),wn(u,s),e.associations.set(u,{materials:t}),s.extensions&&qn(n,u,s),u})}createUniqueName(t){let e=pe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[ee.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return Ju(c,o,e)})}let a=[];for(let o=0,c=t.length;o<c;o++){let h=t[o],l=Nv(h),u=n[l];if(u)a.push(u.promise);else{let d;h.extensions&&h.extensions[ee.KHR_DRACO_MESH_COMPRESSION]?d=s(h):d=Ju(new me,h,e),n[l]={primitive:h,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){let e=this,i=this.json,n=this.extensions,s=i.meshes[t],a=s.primitives,o=[];for(let c=0,h=a.length;c<h;c++){let l=a[c].material===void 0?Fv(this.cache):this.getDependency("material",a[c].material);o.push(l)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){let h=c.slice(0,c.length-1),l=c[c.length-1],u=[];for(let f=0,g=l.length;f<g;f++){let b=l[f],m=a[f],p,x=h[f];if(m.mode===_i.TRIANGLES||m.mode===_i.TRIANGLE_STRIP||m.mode===_i.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Nn(b,x):new It(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===_i.TRIANGLE_STRIP?p.geometry=Oc(p.geometry,ga):m.mode===_i.TRIANGLE_FAN&&(p.geometry=Oc(p.geometry,or));else if(m.mode===_i.LINES)p=new sa(b,x);else if(m.mode===_i.LINE_STRIP)p=new Ss(b,x);else if(m.mode===_i.LINE_LOOP)p=new ra(b,x);else if(m.mode===_i.POINTS)p=new aa(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&kv(p,s),p.name=e.createUniqueName(s.name||"mesh_"+t),wn(p,s),m.extensions&&qn(n,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return s.extensions&&qn(n,u[0],s),u[0];let d=new ve;s.extensions&&qn(n,d,s),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e,i=this.json.cameras[t],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?e=new Ie(yn.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(e=new ii(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(e.name=this.createUniqueName(i.name)),wn(e,i),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],i=[];for(let n=0,s=e.joints.length;n<s;n++)i.push(this._loadNodeShallow(e.joints[n]));return e.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",e.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let s=n.pop(),a=n,o=[],c=[];for(let h=0,l=a.length;h<l;h++){let u=a[h];if(u){o.push(u);let d=new Ct;s!==null&&d.fromArray(s.array,h*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[h])}return new Es(o,c)})}loadAnimation(t){let e=this.json,i=this,n=e.animations[t],s=n.name?n.name:"animation_"+t,a=[],o=[],c=[],h=[],l=[];for(let u=0,d=n.channels.length;u<d;u++){let f=n.channels[u],g=n.samplers[f.sampler],b=f.target,m=b.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,x=n.parameters!==void 0?n.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),h.push(g),l.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(h),Promise.all(l)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let x=0,v=d.length;x<v;x++){let _=d[x],A=f[x],y=g[x],w=b[x],P=m[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let M=i._createAnimationTracks(_,A,y,w,P);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new la(s,void 0,p)})}createNodeMesh(t){let e=this.json,i=this,n=e.nodes[t];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){let a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,h=n.weights.length;c<h;c++)o.morphTargetInfluences[c]=n.weights[c]}),a})}loadNode(t){let e=this.json,i=this,n=e.nodes[t],s=i._loadNodeShallow(t),a=[],o=n.children||[];for(let h=0,l=o.length;h<l;h++)a.push(i.getDependency("node",o[h]));let c=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),c]).then(function(h){let l=h[0],u=h[1],d=h[2];d!==null&&l.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Bv)});for(let f=0,g=u.length;f<g;f++)l.add(u[f]);return l})}_loadNodeShallow(t){let e=this.json,i=this.extensions,n=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let s=e.nodes[t],a=s.name?n.createUniqueName(s.name):"",o=[],c=n._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(t)});return c&&o.push(c),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(h){return n._getNodeRef(n.cameraCache,s.camera,h)})),n._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(t)}).forEach(function(h){o.push(h)}),this.nodeCache[t]=Promise.all(o).then(function(h){let l;if(s.isBone===!0?l=new On:h.length>1?l=new ve:h.length===1?l=h[0]:l=new Se,l!==h[0])for(let u=0,d=h.length;u<d;u++)l.add(h[u]);if(s.name&&(l.userData.name=s.name,l.name=a),wn(l,s),s.extensions&&qn(i,l,s),s.matrix!==void 0){let u=new Ct;u.fromArray(s.matrix),l.applyMatrix4(u)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return n.associations.has(l)||n.associations.set(l,{}),n.associations.get(l).nodes=t,l}),this.nodeCache[t]}loadScene(t){let e=this.extensions,i=this.json.scenes[t],n=this,s=new ve;i.name&&(s.name=n.createUniqueName(i.name)),wn(s,i),i.extensions&&qn(e,s,i);let a=i.nodes||[],o=[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let l=0,u=c.length;l<u;l++)s.add(c[l]);let h=l=>{let u=new Map;for(let[d,f]of n.associations)(d instanceof di||d instanceof Xe)&&u.set(d,f);return l.traverse(d=>{let f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=h(s),s})}_createAnimationTracks(t,e,i,n,s){let a=[],o=t.name?t.name:t.uuid,c=[];Mn[s.path]===Mn.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let h;switch(Mn[s.path]){case Mn.weights:h=en;break;case Mn.rotation:h=ki;break;case Mn.position:case Mn.scale:h=nn;break;default:switch(i.itemSize){case 1:h=en;break;case 2:case 3:default:h=nn;break}break}let l=n.interpolation!==void 0?Dv[n.interpolation]:Un,u=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){let g=new h(c[d]+"."+Mn[s.path],e.array,u,l);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let i=uh(e.constructor),n=new Float32Array(e.length);for(let s=0,a=e.length;s<a;s++)n[s]=e[s]*i;e=n}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){let n=this instanceof ki?hh:Xa;return new n(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function zv(r,t,e){let i=t.attributes,n=new gi;if(i.POSITION!==void 0){let o=e.json.accessors[i.POSITION],c=o.min,h=o.max;if(c!==void 0&&h!==void 0){if(n.set(new E(c[0],c[1],c[2]),new E(h[0],h[1],h[2])),o.normalized){let l=uh(Fs[o.componentType]);n.min.multiplyScalar(l),n.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=t.targets;if(s!==void 0){let o=new E,c=new E;for(let h=0,l=s.length;h<l;h++){let u=s[h];if(u.POSITION!==void 0){let d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=uh(Fs[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;let a=new ui;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function Ju(r,t,e){let i=t.attributes,n=[];function s(a,o){return e.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in i){let o=lh[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(t.indices!==void 0&&!r.index){let a=e.getDependency("accessor",t.indices).then(function(o){r.setIndex(o)});n.push(a)}return ae.workingColorSpace!==Re&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ae.workingColorSpace}" not supported.`),wn(r,t),zv(r,t,e),Promise.all(n).then(function(){return t.targets!==void 0?Uv(r,t.targets,e):r})}var $u=function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(e)?t:r,s,a=WebAssembly.instantiate(o(n),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var _=p.charCodeAt(v);x[v]=_>96?_-97:_>64?_-39:_+4}for(var A=0,v=0;v<p.length;++v)x[A++]=x[v]<60?i[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,A)}function c(p,x,v,_,A,y){var w=s.exports.sbrk,P=v+3&-4,M=w(P*_),S=w(A.length),U=new Uint8Array(s.exports.memory.buffer);U.set(A,S);var O=p(M,v,_,S,A.length);if(O==0&&y&&y(M,P,_),x.set(U.subarray(M,M+v*_)),w(M-w(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var h={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},l={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var _=v.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function g(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(n))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),v=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(v),A=0;A<p;++A)u[A]=f(_);URL.revokeObjectURL(_)}function b(p,x,v,_,A){for(var y=u[0],w=1;w<u.length;++w)u[w].pending<y.pending&&(y=u[w]);return new Promise(function(P,M){var S=new Uint8Array(v),U=d++;y.pending+=p,y.requests[U]={resolve:P,reject:M},y.object.postMessage({id:U,count:p,size:x,source:S,mode:_,filter:A},[S.buffer])})}function m(p){a.then(function(){var x=p.data;try{var v=new Uint8Array(x.count*x.size);c(s.exports[x.mode],v,x.count,x.size,x.source,s.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(_){self.postMessage({id:x.id,count:x.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,v,_,A){c(s.exports.meshopt_decodeVertexBuffer,p,x,v,_,s.exports[h[A]])},decodeIndexBuffer:function(p,x,v,_){c(s.exports.meshopt_decodeIndexBuffer,p,x,v,_)},decodeIndexSequence:function(p,x,v,_){c(s.exports.meshopt_decodeIndexSequence,p,x,v,_)},decodeGltfBuffer:function(p,x,v,_,A,y){c(s.exports[l[A]],p,x,v,_,s.exports[h[y]])},decodeGltfBufferAsync:function(p,x,v,_,A){return u.length>0?b(p,x,v,l[_],h[A]):a.then(function(){var y=new Uint8Array(p*x);return c(s.exports[l[_]],y,p,x,v,s.exports[h[A]]),y})}}}();var td=[["hips","Hips",null,null],["spine","Spine","Spine1","chest"],["chest","Spine2","Neck","neck"],["neck","Neck","Head","head"],["head","Head",null,null],["upperArmL","LeftArm","LeftForeArm","foreArmL"],["foreArmL","LeftForeArm","LeftHand","handL"],["handL","LeftHand","LeftHandMiddle1",[.03,-.182,.012]],["upperArmR","RightArm","RightForeArm","foreArmR"],["foreArmR","RightForeArm","RightHand","handR"],["handR","RightHand","RightHandMiddle1",[-.03,-.182,.012]],["thighL","LeftUpLeg","LeftLeg","shinL"],["shinL","LeftLeg","LeftFoot","footL"],["footL","LeftFoot","LeftToeBase",[.006,-.063,.205]],["thighR","RightUpLeg","RightLeg","shinR"],["shinR","RightLeg","RightFoot","footR"],["footR","RightFoot","RightToeBase",[-.006,-.063,.205]]],Hv=["Index","Middle","Ring","Pinky"];function ed(r){return new Promise((t,e)=>{let i=atob(r),n=new Uint8Array(i.length);for(let a=0;a<i.length;a++)n[a]=i.charCodeAt(a);let s=new qa;s.setMeshoptDecoder($u),s.parse(n.buffer,"",t,e)})}var ja=class{constructor(t,e,i=1.78){let n=t.group,s=n.position.clone(),a=n.quaternion.clone();n.position.set(0,0,0),n.quaternion.identity(),this.root=new ve,this.root.name="glbBody",this.root.add(e.scene),n.add(this.root);let o=null;if(e.scene.traverse(y=>{y.isSkinnedMesh&&!o&&(o=y)}),!o)throw new Error("GLB has no skinned mesh");this.mesh=o,o.frustumCulled=!1,o.layers.enable(1),o.skeleton.pose(),n.updateMatrixWorld(!0);let c=new Map;o.skeleton.bones.forEach(y=>c.set(y.name.replace(/^mixamorig:?/i,""),y)),this.by=c;for(let y of td)if(!c.get(y[1]))throw new Error("GLB skeleton is missing "+y[1]);let h=new E,l=new E;{let y=c.get("Head").getWorldPosition(new E).sub(c.get("Hips").getWorldPosition(h)).normalize(),w=c.get("LeftUpLeg").getWorldPosition(new E).sub(c.get("RightUpLeg").getWorldPosition(l)).normalize(),P=new E().crossVectors(w,y).normalize();w.crossVectors(y,P).normalize(),this.root.quaternion.setFromRotationMatrix(new Ct().makeBasis(w,y,P)).invert()}n.updateMatrixWorld(!0);let u=()=>(n.updateMatrixWorld(!0),o.skeleton.update(),o.computeBoundingBox(),o.boundingBox.clone().applyMatrix4(o.matrixWorld)),d=u();this.sourceHeight=d.max.y-d.min.y,this.root.scale.setScalar(i/this.sourceHeight),n.updateMatrixWorld(!0),c.get("Hips").getWorldPosition(h),this.root.position.set(-h.x,-h.y,-h.z),n.updateMatrixWorld(!0),d=u();let f=c.get("Head").getWorldPosition(new E);this.eye=new E(0,d.max.y-.118,f.z+.082),this.mouth=new E(0,d.max.y-.185,f.z+.09),this.top=d.max.y,this.feet=d.min.y;let g=c.get("Hips");this.order=[],g.traverse(y=>{y.isBone&&this.order.push(y)}),this.order.forEach((y,w)=>{y.userData.k=w}),this.parent=this.order.map(y=>y===g?-1:y.parent.userData.k),this.restL=this.order.map(y=>y.quaternion.clone()),this.W=this.order.map(()=>new St),this.rootParentW=g.parent.getWorldQuaternion(new St),this.driver=this.order.map(()=>-1),this.aligned=this.order.map(()=>null);let b=y=>new E(ei[R[y]][2],ei[R[y]][3],ei[R[y]][4]),m=new St;for(let[y,w,P,M]of td){let S=c.get(w),U=S.userData.k,O=S.getWorldQuaternion(new St),Q=new St;if(P&&M&&c.get(P)){let I=c.get(P).getWorldPosition(new E).sub(S.getWorldPosition(h)).normalize(),D=(Array.isArray(M)?new E(...M):b(M).sub(b(y))).normalize();Q.setFromUnitVectors(I,D)}this.driver[U]=R[y],this.aligned[U]=Q.multiply(O)}this.special=this.order.map(()=>null);let p=c.get("Spine1");if(p){let y=c.get("Spine2").getWorldPosition(new E).sub(p.getWorldPosition(h)).normalize(),w=new St().setFromUnitVectors(y,new E(0,1,0)).multiply(p.getWorldQuaternion(new St));this.special[p.userData.k]={type:"mid",aligned:w}}for(let[y,w,P]of[["LeftShoulder",1,R.upperArmL],["RightShoulder",-1,R.upperArmR]]){let M=c.get(y);M&&(this.special[M.userData.k]={type:"clav",side:w,arm:P,restW:M.getWorldQuaternion(new St)})}this._d=new E,this._e=new Fi,this._q2=new St;for(let y of["Left","Right"]){let w=c.get(y+"Hand"),P=new E(0,-1,0);for(let M of Hv)for(let S=1;S<=3;S++){let U=c.get(`${y}Hand${M}${S}`);if(!U)continue;let O=U.children.find(z=>z.isBone),Q=O?O.getWorldPosition(new E).sub(U.getWorldPosition(h)).normalize():new E(y==="Left"?1:-1,0,0),I=new E().crossVectors(Q,P).normalize(),D=U.parent.getWorldQuaternion(new St),k=U.getWorldQuaternion(new St);m.setFromAxisAngle(I,(S===1?.32:.42)*(M==="Pinky"?1.25:M==="Index"?.8:1));let q=m.clone().multiply(k);this.restL[U.userData.k]=D.invert().multiply(q),U.quaternion.copy(this.restL[U.userData.k])}}this.D=ei.map(()=>new St),this.headBone=c.get("Head"),this._q=new St;let x=Array.isArray(o.material)?o.material:[o.material];for(let y of x)y.roughness=.44,y.metalness=0,y.envMapIntensity=1.3,y.color&&y.color.setRGB(.7,.78,.9),y.needsUpdate=!0;this.cutOn={value:0},this.headRigid=[];let v=`
  if (uCutOn > 0.5 && cutV > 0.0) {
    vec3 rel = position - uCutPos; rel -= uCutDir * dot(rel, uCutDir);
    transformed = uCutPos + rel * min(1.0, uCutR / max(length(rel), 1.0e-5)) - uCutDir * (0.4 * uCutR);
  }`,_=c.get("Head"),A=y=>{for(let w=y.parent;w;w=w.parent)if(w===_)return!0;return!1};e.scene.traverse(y=>{if(!y.isMesh)return;if(!y.isSkinnedMesh){A(y)&&this.headRigid.push(y);return}let w=y.skeleton.bones,P=at=>w.findIndex(lt=>lt.name.replace(/^mixamorig:?/i,"")===at),M=P("Neck"),S=P("Head"),U=P("Spine2");if(M<0||S<0||U<0)return;let O=new Set([M]);_.traverse(at=>{let lt=w.indexOf(at);lt>=0&&O.add(lt)});let Q=y.geometry.attributes.position,I=y.geometry.attributes.skinIndex,D=y.geometry.attributes.skinWeight,k=I.count,q=new Float32Array(k),z=new Float32Array(k),N=new E,Z=new E,et=new E,$=0,G=0;for(let at=0;at<k;at++){let lt=0,ht=0,Rt=0;for(let V=0;V<4;V++){let ne=D.getComponent(at,V),wt=I.getComponent(at,V);ht+=ne,O.has(wt)&&(lt+=ne),wt===M&&(Rt+=ne)}q[at]=ht>0?lt/ht:0,z[at]=ht>0?Rt/ht:0,et.fromBufferAttribute(Q,at),z[at]=Math.max(z[at],q[at]>.25&&q[at]<.85?.6:0),z[at]>.5?(N.add(et),$++):q[at]>.95&&(Z.add(et),G++)}if(!$||!G)return;y.geometry.setAttribute("aHead",new jt(q,1)),N.multiplyScalar(1/$),Z.multiplyScalar(1/G);let B=Z.clone().sub(N).normalize(),j=0,ut=0;for(let at=0;at<k;at++){if(z[at]<=.5)continue;et.fromBufferAttribute(Q,at).sub(N);let lt=et.dot(B),ht=et.addScaledVector(B,-lt).length();lt<j&&(j=lt),ht>ut&&(ut=ht)}let st={uCutOn:this.cutOn,uCutPos:{value:N.clone().addScaledVector(B,j*.55)},uCutDir:{value:B},uCutR:{value:ut*.8},uCutBone:{value:U}};y.frustumCulled=!1,this.cutInfo=st;for(let at of Array.isArray(y.material)?y.material:[y.material])at.onBeforeCompile=lt=>{Object.assign(lt.uniforms,st),lt.vertexShader=`attribute float aHead; uniform float uCutOn; uniform vec3 uCutPos; uniform vec3 uCutDir; uniform float uCutR; uniform float uCutBone; varying float vCut;
`+lt.vertexShader.replace("#include <skinbase_vertex>",`float cutV = aHead - 0.6;
  vCut = cutV;
  #include <skinbase_vertex>
  #ifdef USE_SKINNING
  if (uCutOn > 0.5 && cutV > 0.0) { boneMatX = getBoneMatrix(uCutBone); boneMatY = boneMatX; boneMatZ = boneMatX; boneMatW = boneMatX; }
  #endif`).replace("#include <morphtarget_vertex>","#include <morphtarget_vertex>"+v),lt.fragmentShader=`uniform float uCutOn; varying float vCut;
`+lt.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) diffuseColor.a = 1.0;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if (uCutOn > 0.5 && vCut > 0.0) gl_FragColor.rgb = vec3(0.010, 0.012, 0.014);`)},at.customProgramCacheKey=()=>"eos-neck-lid-"+y.uuid,at.needsUpdate=!0}),this.material=x[0],n.position.copy(s),n.quaternion.copy(a),n.updateMatrixWorld(!0)}setHeadVisible(t){this.cutOn.value=t?0:1;for(let e of this.headRigid)e.visible=t}update(t){let e=this.D;for(let a=0;a<t.length;a++){let o=ei[a][1];o<0?e[a].copy(t[a].quaternion):e[a].copy(e[o]).multiply(t[a].quaternion)}let i=this.W,n=this.order,s=this._q;for(let a=0;a<n.length;a++){let o=this.parent[a]<0?this.rootParentW:i[this.parent[a]],c=this.driver[a];if(c>=0)i[a].copy(e[c]).multiply(this.aligned[a]),n[a].quaternion.copy(s.copy(o).invert().multiply(i[a]));else if(this.special[a]){let h=this.special[a];if(h.type==="mid")i[a].copy(e[R.spine]).slerp(e[R.chest],.5).multiply(h.aligned);else{let l=this._d.set(0,-1,0).applyQuaternion(t[h.arm].quaternion),u=Math.max(0,Math.min(1,(l.y+.35)/1.35)),d=Math.max(0,Math.min(1,l.z));this._q2.setFromEuler(this._e.set(0,-h.side*.3*d,h.side*.62*u*u*(3-2*u),"YXZ")),i[a].copy(e[R.chest]).multiply(this._q2).multiply(h.restW)}n[a].quaternion.copy(s.copy(o).invert().multiply(i[a]))}else i[a].copy(o).multiply(this.restL[a])}}};var id={scream:[["scream_eyes",1,"snap"],["scream_mouth",1,"open"]],fear:[["fear_brows",1,"snap"],["scream_mouth",.85,"open"]],agony:[["agony",1,"slow"]],sob:[["sob",1,"slow"]],terror:[["fear_brows",1,"snap"],["scream_eyes",.25,"snap"],["shout_mouth",1,"open"]],hit:[["eyes_wide",1,"snap"],["clench",1,"snap"],["fear_brows",.3,"snap"]],strain:[["clench",.85,"slow"],["strain_eyes",1,"slow"]],dying:[["exhaust",1,"slow"],["sob",.35,"slow"]],shock:[["jaw_drop",1,"open"],["eyes_wide",.8,"snap"],["fear_brows",.6,"snap"]],gasp:[["gasp",1,"snap"],["eyes_wide",.5,"snap"]],silent:[["jaw_drop",.9,"slow"],["strain_eyes",.8,"slow"]],wince:[["strain_eyes",.7,"snap"],["clench",.6,"snap"]],hold:[["clench",.4,"slow"],["eyes_wide",.55,"slow"],["fear_brows",.35,"slow"]],choke:[["eyes_wide",1,"snap"],["gasp",.55,"open"],["exhaust",.2,"slow"]],howl:[["sob",.7,"slow"],["shout_mouth",1,"open"]],pant:[["exhaust",.6,"slow"],["gasp",.45,"breath"]],blank:[["exhaust",.5,"slow"],["eyes_wide",.4,"slow"],["jaw_drop",.25,"slow"]],groan:[["strain_eyes",.9,"slow"],["agony",.5,"slow"],["clench",.5,"slow"],["fear_brows",.25,"slow"]],moan:[["agony",.75,"slow"],["sob",.4,"slow"],["exhaust",.35,"breath"],["strain_eyes",.35,"slow"]]},Vv={snap:16,open:8,slow:3.2,breath:6},Ya=class{constructor(){this.mesh=null,this.dict=null,this.inf=null,this.cur={},this.tgt={},this.shape={},this.forced=null,this.forcedT=0,this.forcedGain=1,this.label="none",this.time=0,this.blinkT=2,this.blink=0}attach(t){if(!t||!t.morphTargetDictionary||!t.morphTargetInfluences)return!1;this.mesh=t,this.dict=t.morphTargetDictionary,this.inf=t.morphTargetInfluences;for(let e of Object.keys(this.dict))this.cur[e]=0,this.tgt[e]=0,this.shape[e]="slow";return!0}play(t,e,i=1){id[t]&&(this.forced=t,this.forcedT=e,this.forcedGain=i)}update(t,e){if(!this.mesh)return;this.time+=t;let i=this.tgt,n=this.shape;for(let u in i)i[u]=0;let s=0;this.label="none";let a=(u,d)=>{if(!(d<=.01)){d>s&&(s=d,this.label=u);for(let[f,g,b]of id[u]){if(i[f]===void 0)continue;let m=g*Math.min(1,d)*(b==="breath"?.5+.5*Math.sin(e.breathPhase*6.283):1);m>i[f]&&(i[f]=m,n[f]=b)}}};if(this.forcedT-=t,this.forced&&this.forcedT>0?a(this.forced,this.forcedGain):this.forced=null,!e.alive||e.blackout>.75)a("blank",1);else if(e.mouthUnder){let u=e.oxygen;e.impact>1&&a("hit",Math.min(1,e.impact/1.8)),u<14?(a("silent",1),a("agony",.7)):u<34?(a("choke",1),a("agony",.5*(34-u)/20)):u<62?(a("strain",.5+.5*(62-u)/28),a("hold",.6)):a("hold",1),e.blackout>.15&&a("dying",e.blackout*1.2)}else e.impact>1&&a("hit",Math.min(1,e.impact/1.8)),e.air>.3&&a("shock",e.air),e.brace>.3&&(a(e.crestDist<12?"terror":"fear",e.brace),e.brace>.85&&e.crestDist<5&&a("hold",.8)),e.gaspTimer>0&&(e.inhaling?a("gasp",.45+.55*Math.min(1,e.gaspTimer/2.5)):a("pant",1),e.swallow>.25&&a("wince",.7)),a("choke",pt((40-e.oxygen)/30)),e.stamina<24&&a("dying",1-e.stamina/24),e.effort>.7&&a("strain",Math.min(1,(e.effort-.7)*1.5)),e.temp<35.2&&a("groan",pt((35.2-e.temp)/2)*.7),s<.35&&a("pant",.25+.5*e.exertion);this.blinkT-=t,this.blinkT<=0&&(this.blink=.16,this.blinkT=1.8+Math.random()*3.5),this.blink=Math.max(0,this.blink-t),this.blink>0&&!e.mouthUnder&&i.strain_eyes!==void 0&&(i.strain_eyes=Math.max(i.strain_eyes,.9));let o=this.inf,c=this.dict,h=this.cur,l=0;for(let u in h){let f=i[u]>h[u]?Vv[n[u]]||4:3.4;h[u]+=(i[u]-h[u])*(1-Math.exp(-t*f));let g=1+.12*Math.sin(this.time*(2.3+l*.37)+l*1.9)*(h[u]>.05?1:0);o[c[u]]=Math.max(0,Math.min(1.15,h[u]*g)),l++}}};var Gv={gasp:[["b_gasp3",0,3,.72],["b_gasp4",0,3,.7],["b_gasp2",0,3,.8],["b_gasp1",0,3,.9]],inhale:[["b_gasp3",0,.85,.62],["b_gasp4",0,.62,.6]],cough:[["b_choke",.25,1.7,1],["b_choke",1.95,3,1.1],["b_choke",3.9,5,1.2],["b_choke",7.15,8.95,1.1],["b_choke",9.4,10.8,.9]],sputter:[["b_choke",5.45,6.1,1.1],["b_choke",14.25,14.7,.9],["b_choke",15.4,16.5,1],["b_choke",19.45,20.05,.6]],retch:[["b_choke",11.65,14.15,1.2],["b_choke",17.65,18.8,.8]],groan:[["b_under",0,1.25,1.2],["b_under",2.05,3.45,1.2]],bubbles:[["b_under",4.1,8.15,.9]]},Wv={gasp:1.2,inhale:3,cough:1.2,sputter:1.4,retch:4,groan:3,bubbles:1.5},qv={gasp:"gasp",inhale:"gasp",cough:"wince",sputter:"wince",retch:"choke",groan:"silent",bubbles:"choke"},Xv={cough:1,sputter:1,retch:1},Ka=class{constructor(t,e,i={}){this.audio=t,this.face=e,this.hooks=i,this.t=0,this.cool={},this.cur={prio:0,until:0},this.jobs=[],this.marks={},this.prevBrace=0,this.prevAir=0,this.prevDive=!1,this.splashCool=0,this.slapCool=0,this.gurgleUntil=0,this.gT=0,this.bubT=2,this.bed=0,this.last="",this.lastPick={},this.count=0}say(t,e,i,n){let s=this.t;if(s<(this.cool[t]||0)||s<this.cur.until&&e<=this.cur.prio)return 0;let a=Gv[t],o=Math.random()*a.length|0;a.length>1&&o===this.lastPick[t]&&(o=(o+1)%a.length),this.lastPick[t]=o;let[c,h,l,u]=a[o],d=!!(n&&n.under),f=this.audio.playVoice(c,i*u*(d?1.3:1),.97+Math.random()*.06,[h,l]);this.last=t,this.count++;let g=f||l-h;return this.cur={prio:e,until:s+g*.85},this.cool[t]=s+g+Wv[t],this.face&&this.face.play(d?t==="groan"?"silent":"choke":qv[t],g+.25),Xv[t]&&this.hooks.cough&&this.hooks.cough(g),d&&(this.audio.gurgle(.95),this.hooks.bubbles&&this.hooks.bubbles(Math.min(44,Math.round(12+g*14))),this.gurgleUntil=s+g,this.gT=.3),g}later(t,e){this.jobs.push({at:this.t+t,fn:e})}onEvent(t,e,i){if(!(!i||!i.alive))if(t==="surface")if(e.time>1.2||e.need>.2){let n=this.say("gasp",6,1,i);e.time>7||i.swallow>.45?this.later(Math.max(1.1,n*.6),s=>{s.under||this.say("retch",6,1,s)}):(e.time>3.2||i.swallow>.2)&&this.later(Math.max(1,n*.55),s=>{s.under||this.say("cough",5,.95,s)})}else e.time>.25&&(i.swallow>.1||Math.random()<.5)&&this.say("sputter",3,.8,i);else t==="impact"?e.strength>1.15&&!i.under&&this.say("sputter",4,1,i):t==="exhale"&&e.cough?i.under||this.say("cough",4,.85,i):t==="splash"?this.t>this.splashCool&&e.v>1.8&&!i.camUnder&&(this.splashCool=this.t+.45,this.audio.playClip(e.v>4?Math.random()<.5?"w_splash2":"w_splash1":"w_splash3",Math.min(.9,.15+e.v*.09),.9+Math.random()*.25,Math.random()*1.2-.6)):t==="limb"&&this.t>this.slapCool&&e.v>1.3&&!i.camUnder&&(this.slapCool=this.t+.07,this.audio.playClip("w_slap"+(1+(Math.random()*6|0)),Math.min(.75,.06+e.v*.085)*(e.kind==="arm"?.6:1),.85+Math.random()*.4,e.pan||0))}update(t,e){this.t+=t;for(let h=this.jobs.length-1;h>=0;h--)this.t>=this.jobs[h].at&&this.jobs.splice(h,1)[0].fn(e);let i=e.alive&&!e.under,n=h=>Math.max(0,Math.min(1,h)),s=n(.3+.55*(e.exertion||0)+(e.gaspTimer>0?.35:0)+.3*(e.struggle||0)+.25*n(e.brace||0)+.2*(e.air||0)),a=n((30-e.stamina)/25),o=this.t<this.cur.until?.28:1,c=i?(1-(e.blackout||0))*o:0;if(this.bed=c*(.2+.8*s)*(1-.7*a),this.audio.setBreath(this.bed*.95,c*(.12+.88*a)*.9,.92+.42*s,i),!!e.alive)if(e.under&&this.t<this.gurgleUntil&&(this.gT-=t,this.gT<=0&&(this.audio.gurgle(.6),this.gT=.32+Math.random()*.3,this.hooks.bubbles&&this.hooks.bubbles(7))),e.brace>.7&&this.prevBrace<=.7&&e.crestHeight>6&&!e.under&&this.say("inhale",5,1,e),this.prevBrace=e.brace,e.dive&&!this.prevDive&&!e.under&&this.say("inhale",5,.9,e),this.prevDive=e.dive,e.air>.5&&this.prevAir<=.5&&!e.under&&this.say("inhale",5,1,e),this.prevAir=e.air,e.under){let h=e.oxygen;h<48&&!this.marks.a&&(this.marks.a=!0,this.say("groan",5,.8,e)),h<30&&!this.marks.b&&(this.marks.b=!0,this.say("groan",6,1,e)),h<14&&!this.marks.c&&(this.marks.c=!0,this.say("groan",7,1,e)),h<72&&(this.bubT-=t*(1+n((50-h)/40)),this.bubT<=0&&(this.bubT=2.6+Math.random()*2.4,this.say("bubbles",2,.55+.4*n((60-h)/50),e)))}else e.oxygen>60&&(this.marks.a=this.marks.b=this.marks.c=!1)}};var jv=`
varying vec3 vP;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vP = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Yv=`
precision highp float;
uniform sampler2D uNoise; uniform float uTime; uniform float uI;
uniform vec3 uApex; uniform vec3 uAxis; uniform float uLen; uniform float uTan;
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
    float I = 1.0 / (1.0 + s * s / 70.0);
    float nz = texture(uNoise, vec2(q.x * 0.55 + q.z * 0.45, q.y * 0.05 + uTime * 0.85)).r;
    acc += prof * I * (0.5 + 1.0 * nz) * dtm;
  }
  gl_FragColor = vec4(vec3(0.74, 0.86, 1.0) * min(acc, 14.0) * uI, 1.0);
}`,Za=class{constructor(t){this.waves=t,this.group=new ve,this.group.visible=!1,this.state="none",this.arriveAt=240,this.hoverTime=0,this.hold=0,this.rescued=!1,this.pos=new E,this.vel=new E,this.ring=new E,this.ringVel=new E,this.tan=.125,this.time=0,this.aim=new E,this._s=yi(),this._v=new E,this._d=new E,this._down=new E(0,-1,0),this._from=new E;let e=new Ui({color:1711908,roughness:.55,metalness:.3}),i=this.heli=new ve,n=new It(new As(1,20,14),e);n.scale.set(1.25,1.15,3.1),i.add(n);let s=new It(new As(.9,16,12),new Ui({color:790548,roughness:.15,metalness:.6}));s.position.set(0,-.05,2.25),s.scale.set(1.1,.95,1.2),i.add(s);let a=new It(new tn(.34,.14,5.6,10),e);a.rotation.x=Math.PI/2,a.position.set(0,.35,-5.2),i.add(a);let o=new It(new mn(.12,1.7,1),e);o.position.set(0,1,-7.7),o.rotation.x=-.35,i.add(o);let c=new It(new tn(.16,.2,.7,8),e);c.position.set(0,1.45,0),i.add(c);for(let d of[-1,1]){let f=new It(new tn(.07,.07,4.4,6),e);f.rotation.x=Math.PI/2,f.position.set(d*1.25,-1.55,.2),i.add(f);for(let g of[-1,1]){let b=new It(new tn(.05,.05,1,5),e);b.position.set(d*1.05,-1.1,.2+g*1.1),b.rotation.z=-d*.4,i.add(b)}}this.rotor=new ve,this.rotor.position.set(0,1.85,0),i.add(this.rotor);let h=new It(new nr(6.2,40),new je({color:658704,transparent:!0,opacity:.2,side:Le,depthWrite:!1}));h.rotation.x=-Math.PI/2,this.rotor.add(h);for(let d=0;d<4;d++){let f=new It(new mn(.28,.04,6.1),new je({color:395274,transparent:!0,opacity:.55}));f.position.set(Math.sin(d*Math.PI/2)*3.05,0,Math.cos(d*Math.PI/2)*3.05),f.rotation.y=d*Math.PI/2,this.rotor.add(f)}this.tail=new It(new nr(1,16),new je({color:658704,transparent:!0,opacity:.3,side:Le,depthWrite:!1})),this.tail.position.set(.2,1.1,-7.9),this.tail.rotation.y=Math.PI/2,i.add(this.tail);let l=(d,f,g,b,m,p,x=.13)=>{let v=new It(new As(x,8,6),new je({color:new Ut(d,f,g)}));return v.position.set(b,m,p),i.add(v),v};l(2.6,.12,.1,1.35,.1,.6),l(.1,2.4,.4,-1.35,.1,.6),this.strobe=l(5,5,5.6,0,1.75,-7.6,.16),this.lampHead=l(5,5.8,7,0,-1.25,2.2,.22),this.group.add(i),this.spotLight=new Ts(13952255,0,0,.16,.7,0),this.spotLight.layers.enableAll(),this.group.add(this.spotLight,this.spotLight.target),this.beamMat=new se({uniforms:{uNoise:tt.uNoise,uTime:tt.uTime,uI:{value:0},uApex:{value:new E},uAxis:{value:new E(0,-1,0)},uLen:{value:1},uTan:{value:this.tan}},vertexShader:jv,fragmentShader:Yv,transparent:!0,blending:ps,depthWrite:!1,side:hi});let u=new tn(.02,1,1,32,1,!1);u.translate(0,-.5,0),this.beam=new It(u,this.beamMat),this.beam.frustumCulled=!1,this.beam.renderOrder=18,this.group.add(this.beam),this.ringMesh=new It(new ca(.36,.105,12,28),new Ui({color:12732950,roughness:.55})),this.ringMesh.layers.enable(1),this.group.add(this.ringMesh),this.cable=new It(new tn(.018,.018,1,5),new je({color:new Ut(.035,.04,.045)})),this.cable.geometry.translate(0,-.5,0),this.group.add(this.cable)}dispatch(t,e=Math.random()*6.283,i=60){this.state="inbound",this.rescued=!1,this.hold=0,this.hoverTime=0,this.group.visible=!0,this.ring.set(t.x+Math.cos(e)*i,0,t.z+Math.sin(e)*i),this.pos.set(this.ring.x+Math.cos(e)*520,70,this.ring.z+Math.sin(e)*520),this.vel.set(0,0,0)}update(t,e,i,n,s,a,o,c){if(this.time+=t,this.state==="none")if(o&&s&&n>=this.arriveAt)this.dispatch(e,Math.atan2(i.z,i.x)+(Math.random()-.5)*2.4,55+Math.random()*30);else{tt.uSpotP.value.y=0,tt.uWash.value.w=0;return}let h=this.waves,l=this._s;this.ring.x+=i.x*.012*t,this.ring.z+=i.z*.012*t,h.sample(this.ring.x,this.ring.z,l),this.ring.y=l.h+.06;let u=Math.max(l.h,h.heightFast(this.ring.x,this.ring.z))+21+Math.sin(this.time*.7)*.8,d=this._v.set(this.ring.x,u,this.ring.z);this.state==="leaving"&&d.set(this.pos.x+i.x*40,this.pos.y+30,this.pos.z+i.z*40);let f=d.sub(this.pos),g=f.length(),b=this.state==="inbound"?46:this.state==="leaving"?40:6,m=f.multiplyScalar(Math.min(b,g*.9)/Math.max(g,.001));if(this.vel.lerp(m,1-Math.exp(-t*1.4)),this.pos.addScaledVector(this.vel,t),this.pos.x+=Math.sin(this.time*.9)*.25*t,this.pos.z+=Math.cos(this.time*.7)*.25*t,this.state==="inbound"&&g<6&&(this.state="hover",this.hoverTime=0),this.state==="hover"){this.hoverTime+=t;let D=Math.hypot(e.x-this.ring.x,e.z-this.ring.z)<3.4&&s;if(this.hold=D?this.hold+t:Math.max(0,this.hold-t*.6),this.hold>=4.5&&(this.rescued=!0),this.hoverTime>150&&!D&&!this.rescued&&(this.state="leaving",this.leaveT=0),a)for(this.washAcc=(this.washAcc||0)+t*150;this.washAcc>=1;){this.washAcc-=1;let k=Math.random()*6.283,q=4+Math.random()*13,z=7+Math.random()*6,N=this.pos.x+Math.cos(k)*q,Z=this.pos.z+Math.sin(k)*q,et=h.heightFast(N,Z),$=Math.random()<.28;a.emit(N,et+.08+Math.random()*.2,Z,Math.cos(k)*z,.5+Math.random()*1.4,Math.sin(k)*z,$?.7+Math.random()*.7:.5+Math.random()*.5,$?.16+Math.random()*.22:.012+Math.random()*.03,$?2:0,$?.7:0,$?.16:.9,$?1.4:1)}}if(this.state==="leaving"&&(this.leaveT+=t,this.leaveT>14)){this.state="none",this.group.visible=!1,this.arriveAt=n+180,tt.uSpotP.value.y=0,tt.uWash.value.w=0;return}let p=this.heli;p.position.copy(this.pos);let x=Math.atan2(this.ring.x-this.pos.x+this.vel.x*3,this.ring.z-this.pos.z+this.vel.z*3),v=Math.hypot(this.vel.x,this.vel.z);p.rotation.set(Math.min(.3,v*.008),this.state==="hover"?p.rotation.y+Math.sin(this.time*.25)*.004:x,Math.sin(this.time*1.3)*.03,"YXZ"),this.rotor.rotation.y+=t*38,this.tail.rotation.x+=t*60,this.strobe.visible=this.time%1.1<.07;let _=this.state==="hover"?Math.min(1,this.hoverTime/3):0;this.aim.set(this.ring.x+(1-_)*Math.sin(this.time*.8)*26,this.ring.y,this.ring.z+(1-_)*Math.cos(this.time*.6)*26);let A=this.state==="leaving"?Math.max(0,1-this.leaveT/3):1,y=this._from.copy(this.pos);y.y-=1.3;let w=y.distanceTo(this.aim),P=this._d.copy(this.aim).sub(y).normalize(),M=Math.min(w,150),S=this.tan*1.3*M;this.beam.position.copy(y),this.beam.quaternion.setFromUnitVectors(this._down,P),this.beam.scale.set(S,M,S);let U=this.beamMat.uniforms;if(U.uApex.value.copy(y),U.uAxis.value.copy(P),U.uLen.value=M,U.uI.value=.21*A,c){let D=this._v.copy(c).sub(y),k=D.dot(P),q=Math.sqrt(Math.max(0,D.lengthSq()-k*k)),N=k>-.5&&k<M+.5&&q<k*this.tan*1.3+.6?Oe:hi;this.beamMat.side!==N&&(this.beamMat.side=N,this.beamMat.needsUpdate=!0)}this.spotLight.position.copy(y),this.spotLight.target.position.copy(this.aim),this.spotLight.angle=Math.atan(this.tan)*1.35,this.spotLight.penumbra=.85,this.spotLight.intensity=2.4*A,tt.uSpotPos.value.copy(y),tt.uSpotDir.value.copy(P),tt.uSpotP.value.set(Math.cos(Math.atan(this.tan)),1.7*A,30,0);let O=this.pos.y-h.heightFast(this.pos.x,this.pos.z);tt.uWash.value.set(this.pos.x,this.pos.z,24,A*Math.max(0,Math.min(1,(60-O)/30))),this.ringMesh.position.copy(this.ring),this.ringMesh.rotation.set(Math.PI/2+l.nz*.6,0,-l.nx*.6),this.ringMesh.visible=this.cable.visible=this.state==="hover";let Q=this._v.copy(this.pos);Q.y-=1.2;let I=Q.distanceTo(this.ring);this.cable.position.copy(Q),this.cable.quaternion.setFromUnitVectors(this._down,this._d.copy(this.ring).sub(Q).normalize()),this.cable.scale.set(1,I,1)}};var Kv=[[R.handL,0,-.09,.012,"hand"],[R.handR,0,-.09,.012,"hand"],[R.foreArmL,0,-.13,0,"arm"],[R.foreArmR,0,-.13,0,"arm"],[R.footL,0,-.04,.12,"foot"],[R.footR,0,-.04,.12,"foot"]],Ja=class{constructor(t,e,i){this.waves=t,this.ch=e,this.body=i,this.tips=Kv.map(([n,s,a,o,c])=>({bone:n,off:new E(s,a,o),kind:c,p:new E,prev:new E,has:!1,was:!0,wet:0,cool:0})),this._s=yi(),this._v=new E,this.activity=0,this.onSlap=null,this.bowAcc=0,this.churnAcc=0}reset(){for(let t of this.tips)t.has=!1,t.wet=0;this.activity=0}update(t,e,i,n=!0){if(t<=0)return;let s=this.waves,a=this._s,o=this._v,c=0;for(let l of this.tips){if(l.p.copy(l.off).applyMatrix4(this.ch.bones[l.bone].matrixWorld),!l.has){l.prev.copy(l.p),l.has=!0,s.sample(l.p.x,l.p.z,a),l.was=l.p.y<a.h;continue}if(o.copy(l.p).sub(l.prev).multiplyScalar(1/t),l.prev.copy(l.p),l.cool-=t,!n||o.lengthSq()>900){l.wet=0;continue}s.sample(l.p.x,l.p.z,a);let u=l.p.y<a.h,d=o.x-a.vx,f=o.y-a.vy,g=o.z-a.vz,b=Math.hypot(d,f,g),m=Math.hypot(d,g)+1e-4,p=l.kind==="hand"?1:l.kind==="foot"?.85:.6;if(u!==l.was){if(u&&b>.9&&l.cool<=0){let x=Math.min(2.4,(.2+b*.36)*p);e.slap(l.p.x,a.h,l.p.z,x,d/m*Math.min(1,m/2.5),g/m*Math.min(1,m/2.5),a.vx,a.vy,a.vz),l.cool=.12,c+=x,this.onSlap&&this.onSlap(b,l.p,l.kind)}else if(!u&&b>1){let x=Math.min(2.2,(.15+b*.3)*p);e.fling(l.p.x,Math.max(l.p.y,a.h+.02),l.p.z,o.x,o.y,o.z,x),l.wet=.9,c+=x*.6}}if(!u&&l.wet>0){l.wet-=t;let x=b>1.5?(Math.random()<t*55*l.wet?1:0)+(Math.random()<t*30?1:0):Math.random()<t*9?1:0;for(let v=0;v<x;v++)e.emit(l.p.x+(Math.random()-.5)*.06,l.p.y+(Math.random()-.5)*.06,l.p.z+(Math.random()-.5)*.06,o.x*(.35+.4*Math.random()),o.y*.5+.3*Math.random(),o.z*(.35+.4*Math.random()),.3+Math.random()*.45,.007+Math.random()*.012,0,0,.9)}if(Math.abs(l.p.y-a.h)<.11&&b>(l.kind==="foot"?1.8:2.6)&&l.kind!=="arm"){for(this.churnAcc+=t*Math.min(90,b*16)*p;this.churnAcc>=1;){this.churnAcc-=1;let x=Math.random()*6.283,v=Math.random()*.9;e.emit(l.p.x+Math.cos(x)*.05,a.h+.02,l.p.z+Math.sin(x)*.05,a.vx+Math.cos(x)*v+d*.25,a.vy+.9+2.1*Math.random()*Math.min(1.4,b/3),a.vz+Math.sin(x)*v+g*.25,.3+Math.random()*.4,.009+Math.pow(Math.random(),2)*.022,0,0,1),l.kind==="foot"&&Math.random()<.1&&e.emit(l.p.x,a.h+.04,l.p.z,a.vx+d*.2,a.vy+.8+Math.random(),a.vz+g*.2,.2+Math.random()*.18,.06+Math.random()*.07,1,.45,.5,1)}c+=.25*t*10}l.was=u}let h=this.body;if(n&&h.subFrac>.25&&h.subFrac<.97&&h.relSpeed>.9&&h.mouthDepth<.35){this.bowAcc+=t*Math.min(70,(h.relSpeed-.7)*34);let l=Math.hypot(h.relFlow.x,h.relFlow.z)+1e-4,u=-h.relFlow.x/l,d=-h.relFlow.z/l;for(;this.bowAcc>=1;){this.bowAcc-=1;let f=Math.random()<.5?-1:1,g=(.12+Math.random()*.2)*f,b=h.pos.x+u*(.25+Math.random()*.3)-d*g,m=h.pos.z+d*(.25+Math.random()*.3)+u*g,p=h.surfaceH,x=Math.random()<.16;e.emit(b,p+.03,m,h.surface.vx+u*h.relSpeed*.5-d*f*(.4+Math.random()*.9),h.surface.vy+.5+Math.random()*1.3,h.surface.vz+d*h.relSpeed*.5+u*f*(.4+Math.random()*.9),x?.45+Math.random()*.4:.3+Math.random()*.4,x?.1+Math.random()*.12:.007+Math.random()*.014,x?1:0,x?.5:0,x?.4:.9)}c+=.15}this.activity+=(Math.min(1,c)-this.activity)*(1-Math.exp(-t*(c>this.activity?12:2.5)))}};var nd=r=>new Promise((t,e)=>{let i=document.createElement("script");i.src=r,i.onload=t,i.onerror=()=>e(new Error("load failed: "+r)),document.head.appendChild(i)}),ri=new URLSearchParams(location.search),dr=1/120,zi={get(r,t){try{let e=localStorage.getItem("eos."+r);return e===null?t:e}catch{return t}},set(r,t){try{localStorage.setItem("eos."+r,String(t))}catch{}}},fh=[.5,1,1.5],ph=[0,.4,.85,1],mh=class{constructor(){if(this.canvas=document.getElementById("view"),this.manual=ri.get("manual")==="1",this.renderer=new Qs({canvas:this.canvas,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),!this.renderer.capabilities.isWebGL2)throw new Error("WebGL2 is required");this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=Re,this.renderer.toneMapping=Di,this.renderer.autoClear=!0,this.perf=new Ta(this.renderer);let t=ri.get("q")||zi.get("quality",this.perf.pickDefault());this.perf.setProfile(Ps[t]?t:this.perf.pickDefault()),this.manual&&(this.perf.adaptive=!1),tt.hdrType=this.perf.info.halfFloat?$i:Be,this.isTouch=ri.get("touch")==="1"||ri.get("touch")!=="0"&&navigator.maxTouchPoints>0&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,tt.uNoise.value=Lu(),tt.uDetailN.value=Iu(),tt.uFoamTex.value=Du(),this.time=0,this.acc=0,this.state="title",this.deadTimer=0,this.scene=new bi,this.camera=new Ie(62,16/9,.07,3e4),this.camera.layers.enableAll(),this.waves=new xa,this.sky=new _a(this.renderer,this.perf.profile.envSize),this.ocean=new Ma(this.waves,this.perf.profile),this.post=new Sa(this.renderer),this.post.levels=this.perf.profile.bloomLevels,this.scene.add(this.sky.dome,this.ocean.mesh),this.flashLight=new Bn(13163775,0),this.keyLight=new Bn(10465476,.42),this.flashLight.layers.enableAll(),this.keyLight.layers.enableAll(),this.scene.add(this.flashLight,this.flashLight.target,this.keyLight,this.keyLight.target),this.pmrem=new ws(this.renderer),this.envTimer=0,this.envRT=null,this.input=new ka(this.canvas),this.character=new Ca,this.scene.add(this.character.group),this.body=new La(this.waves),this.survival=new Ia,this.player=new Da(this.body,this.survival,this.input),this.anim=new Fa(this.character,this.body,this.player,this.survival),this.cam=new Ua(this.camera,this.character,this.body,this.player,this.waves,this.input),this.cam.yaw=-Math.PI/2;let e=ri.get("view")||zi.get("view","third");this.cam.setMode(e),this.cam.blend=this.cam.target,this.cam.intensity=+zi.get("shake",1)||1,this.cam.auto=zi.get("autocam","1")!=="0",ri.has("yaw")&&(this.cam.yaw=+ri.get("yaw")),ri.has("pitch")&&(this.cam.pitch=+ri.get("pitch")),this.limbs=new Ja(this.waves,this.character,this.body),this.limbs.onSlap=(n,s,a)=>{this.foam&&this.foam.enabled&&n>1.6&&this.foam.addSplash(s.x,s.z,Math.min(.55,.12+n*.07));let o=this.camera.matrixWorld.elements,c=s.x-this.camera.position.x,h=s.z-this.camera.position.z;this.emit("limb",{v:n,pos:s,kind:a,pan:Math.max(-.8,Math.min(.8,(c*o[0]+h*o[2])/(Math.hypot(c,h)+.5)))})},this.mouthUnder=!1,this.camUnder=0,this.mouthWorld=new E,this.impactBlur=0,this.listeners=[],this.weather=new Na(this.waves),this.weather.base=this.weather.storm=ri.has("storm")?+ri.get("storm"):1,this.manual&&(this.weather.locked=!0),this.lightning=new Ba,this.scene.add(this.lightning.group),this.autoLightning=!(this.manual||ri.get("auto")==="0"),this.buildEffects(),this.interaction.auto=this.autoLightning,this.audio=new Va,this.audio.volume=+zi.get("volume",.85),this.listeners.push((n,s)=>this.audio.onEvent(n,s)),this.face=new Ya,this.onCharacter=n=>this.face.attach(n.mesh),this.vst={alive:!0},this.coughSeq=0,this.coughT=0,this.voiceDir=new Ka(this.audio,this.face,{bubbles:n=>this.underwater.burstAt(this.mouthWorld,n,.22),cough:n=>{this.coughSeq=n,this.coughT=0}}),this.listeners.push((n,s)=>this.voiceDir.onEvent(n,s,this.vst)),nd("dist/voice.js").then(()=>{this.audio.setVoices(window.__EOS_VOICE)}).catch(()=>console.warn("[voice] \uBAA9\uC18C\uB9AC \uB179\uC74C\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4")),this.listeners.push((n,s)=>{n==="inhale"&&(this.anim.gaspKick=Math.max(this.anim.gaspKick,s.gasp?1:.4*s.strength))}),this.lightning.onThunder=n=>this.audio.onEvent("thunder",n),this.audioState={cam:{pos:this.camera.position,fwd:new E,up:new E},hot:[]},this.rescue=new Za(this.waves),this.scene.add(this.rescue.group),this.wonTimer=0,this.scenarios=new Wa(this),this.pendingScenario=ri.get("test"),this.weather.update(0),this.waves.update(0),this.body.reset(0,0),this.syncCharacter(1),this.anim.update(1/60),this.character.group.updateMatrixWorld(!0),this.drawScene=(n,s)=>{let a=this.renderer;a.setRenderTarget(n),s?(this.camera.layers.set(1),a.setClearColor(0,0),a.clear(),a.render(this.scene,this.camera),this.camera.layers.enableAll()):a.render(this.scene,this.camera)};let i={input:this.input,start:()=>this.start(),resume:()=>this.resume(),restart:()=>this.restart(),pause:()=>this.pause(),toggleView:()=>{this.cam.toggle(),zi.set("view",this.cam.mode)},scenario:n=>{this.scenarios.run(n),this.resume()},get:n=>n==="quality"?this.perf.profile.label:n==="view"?this.cam.mode==="first"?"1\uC778\uCE6D":"3\uC778\uCE6D":n==="shake"?Math.round(this.cam.intensity*100)+"%":n==="autocam"?this.cam.auto?"\uCF2C":"\uB054":Math.round(this.audio.volume*100)+"%",cycle:n=>{if(n==="quality"){let s=Object.keys(Ps);this.setQuality(s[(s.indexOf(this.perf.profile.key)+1)%s.length])}else if(n==="view")i.toggleView();else if(n==="autocam")this.cam.auto=!this.cam.auto,zi.set("autocam",this.cam.auto?"1":"0");else if(n==="shake")this.cam.intensity=fh[(fh.indexOf(this.cam.intensity)+1)%fh.length]||1,zi.set("shake",this.cam.intensity);else{let s=ph[(ph.indexOf(this.audio.volume)+1)%ph.length];this.audio.setVolume(s===void 0?.85:s),zi.set("volume",this.audio.volume)}this.state!=="playing"&&this.state!=="title"&&this.renderStill()}};this.api=i,this.ui=!this.manual||ri.get("ui")==="1"?new Ga(document.getElementById("ui"),i,this.isTouch):null,this.hadLock=!1,this.input.onLockChange=n=>{n?this.hadLock=!0:this.hadLock&&this.state==="playing"&&(this.hadLock=!1,this.pause())},this.canvas.addEventListener("click",()=>{this.state==="playing"&&!this.isTouch&&!this.input.locked&&this.input.lock()}),window.addEventListener("keydown",n=>{n.repeat||((n.code==="KeyV"||n.code==="KeyC")&&this.state==="playing"&&i.toggleView(),n.code==="KeyP"&&(this.state==="playing"?this.pause():this.state==="paused"&&this.resume()),n.code==="Enter"&&this.state==="title"&&this.start())}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()}),this.manual?(this.state="playing",this.ui&&this.ui.show("playing",{time:0,cause:""}),this.pendingScenario&&(this.scenarios.run(this.pendingScenario),this.pendingScenario=null)):this.setState("title"),window.addEventListener("resize",()=>{this.resize(),(this.state==="paused"||this.state==="dead")&&this.renderStill()}),this.resize(),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}async loadCharacter(){try{window.__EOS_SON||await nd("dist/son.js");let t=await ed(window.__EOS_SON);window.__EOS_SON=null;let e=new ja(this.character,t);this.character.useGlb(e),this.body.setAirway(new E(0,e.mouth.y,e.mouth.z),new E(0,e.eye.y,e.eye.z)),this.glbInfo={verts:e.mesh.geometry.attributes.position.count,bones:e.order.length,morphs:Object.keys(e.mesh.morphTargetDictionary||{}),sourceHeight:+e.sourceHeight.toFixed(3)},this.onCharacter&&this.onCharacter(e)}catch(t){console.warn("[character] GLB \uCE90\uB9AD\uD130\uB97C \uC4F0\uC9C0 \uBABB\uD574 \uAE30\uBCF8 \uBAB8\uC73C\uB85C \uC9C4\uD589\uD569\uB2C8\uB2E4: "+t.message),this.glbInfo={error:t.message}}}buildEffects(){let t=this.perf.profile;if(this.rain){this.scene.remove(this.rain.group,this.spray.mesh,this.underwater.group);for(let e of[this.rain.group,this.spray.mesh,this.underwater.group])e.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()});this.foam.enabled&&this.foam.rt.forEach(e=>e.dispose()),this.lens.rt.dispose()}this.rain=new Oa(t),this.spray=new za(this.waves,t.spray),this.foam=new wa(this.renderer,t.foamAcc),this.underwater=new Ha(this.waves,t),this.lens=new Aa(this.renderer,t.lensDrops),this.scene.add(this.rain.group,this.spray.mesh,this.underwater.group),this.post.u.tLens.value=this.lens.texture,this.interaction?this.interaction.spray=this.spray:this.interaction=new Ea(this.waves,this.body,this.player,this.spray),this.underwater.onEnter=()=>{this.underwater.burstAt(this.camera.position,46,.8),this.impactBlur=Math.max(this.impactBlur,.5),this.emit("camEnter")},this.underwater.onExit=()=>{this.lens.spawn(Math.round(14+20*(1-this.cam.blend)),1),this.lens.sheet=1,this.emit("camExit")},this.interaction.onImpact=e=>{let i=Math.min(1,e.strength/3);this.impactBlur=Math.max(this.impactBlur,i),this.underwater.burst=Math.max(this.underwater.burst,i),this.underwater.isUnder||this.lens.spawn(Math.round((6+16*i)*(1.6-this.cam.blend)),1),this.foam.addSplash(this.body.pos.x,this.body.pos.z,1),this.emit("impact",e)},this.interaction.onSplash=(e,i)=>{!this.underwater.isUnder&&this.cam.blend<.5&&this.lens.spawn(2),this.foam.addSplash(i.x,i.z,Math.min(1,e/4)),this.emit("splash",{v:e,pos:i})}}setQuality(t){this.perf.setProfile(t),zi.set("quality",t);let e=this.perf.profile;this.ocean.applyProfile(e),this.sky.envRT.setSize(e.envSize,e.envSize/2),this.post.levels=e.bloomLevels,this.buildEffects(),this.resize(!0)}setState(t){this.state=t,this.ui&&this.ui.show(t,{time:this.survival.timeAlive,cause:this.survival.cause})}start(){this.audio.start(),this.resetPlayer(),this.cam.script=null,this.input.enabled=!0,this.pendingScenario?(this.scenarios.run(this.pendingScenario),this.pendingScenario=null):this.scenarios.active||(this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=22,this.interaction.megaNext=80+Math.random()*40),this.isTouch?this.goFullscreen():this.input.lock(),this.setState("playing"),this.ui&&this.ui.note(this.isTouch?"\uD5E4\uC5C4 \xB7 \uC785\uC218":"Space \uD5E4\uC5C4 \xB7 F \uC785\uC218",5),this.last=performance.now()}pause(){this.state==="playing"&&(this.input.enabled=!1,this.audio.suspend(),this.isTouch||this.input.unlock(),this.setState("paused"))}resume(){this.state!=="playing"&&(this.audio.start(),this.audio.resume(),this.input.enabled=!0,this.cam.script=null,this.isTouch||this.input.lock(),this.setState("playing"),this.last=performance.now())}restart(){this.scenarios.stop(),this.weather.locked=!1,this.weather.base=1;for(let t of this.waves.breakers)t.active=!1;this.rescue.state="none",this.rescue.group.visible=!1,this.rescue.rescued=!1,this.rescue.hold=0,this.rescue.arriveAt=240,this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=22,this.interaction.megaNext=80+Math.random()*40,this.resetPlayer(),this.resume()}resetPlayer(){this.body.reset(this.body.pos.x,this.body.pos.z),this.survival.reset(),this.survival.events.length=0,this.player.brace=0,this.player.air=0,this.player.control=1,this.player.diveBlend=0,this.player.riseBlend=0,this.player.crawlBlend=0,this.player.swimBlend=0,this.player.underSwim=0,this.player.impact=0,this.player.impactPeak=0,this.player.tumble=0,this.player.events.length=0,this.cam.qd.identity(),this.cam.inited=!1,this.deadTimer=0,this.impactBlur=0,this.mouthUnder=!1,this.wonTimer=0,this.post.u.uFade.value=0,this.post.u.uTunnel.value=0,this.post.u.uDesat.value=0,this.lens.wipe(),this.limbs.reset(),this.syncCharacter(1),this.character.group.updateMatrixWorld(!0)}goFullscreen(){try{let t=document.documentElement,e=t.requestFullscreen?t.requestFullscreen():null;e&&e.catch&&e.catch(()=>{})}catch{}}resize(t){let e=window.innerWidth,i=window.innerHeight,n=Math.min(window.devicePixelRatio||1,2);this.renderer.setSize(Math.round(e*n),Math.round(i*n),!1),this.canvas.style.width=e+"px",this.canvas.style.height=i+"px",this.camera.aspect=e/i,this.cam.portrait=pt((1-e/i)/.5),this.camera.updateProjectionMatrix();let[s,a]=this.perf.renderSize(Math.round(e*n),Math.round(i*n));this.post.useOpaque=this.perf.profile.refraction,this.post.fxaa=this.perf.profile.fxaa,this.post.setSize(s,a,t===!0),this.ocean.uniforms.uSceneColor.value=this.post.rtOpaque.texture,this.ocean.uniforms.uSceneDepth.value=this.post.rtOpaque.depthTexture}emit(t,e){for(let i=0;i<this.listeners.length;i++)this.listeners[i](t,e)}syncCharacter(t){let e=this.character.group,i=this.body;e.position.lerpVectors(i.prevPos,i.pos,t),e.quaternion.slerpQuaternions(i.prevQuat,i.quat,t)}step(t){this.time+=t,tt.uTime.value=this.time,this.scenarios.update(t),this.weather.update(t),this.waves.update(t),tt.uWaveA.value=this.waves.uA,tt.uWaveB.value=this.waves.uB,tt.uBrkA.value=this.waves.uBrkA,tt.uBrkB.value=this.waves.uBrkB,tt.uBrkC.value=this.waves.uBrkC,this.body.wind.copy(this.weather.wind),this.body.breathVol=(this.survival.lung-.55)*3.2,this.acc+=t;let e=0;if(this.studio){let A=this.studio,y=this.body;y.pos.set(A.x,A.y,A.z),y.prevPos.copy(y.pos),y.vel.set(0,0,0),y.angVel.set(0,0,0),y.quat.copy(A.quat),y.prevQuat.copy(A.quat),y.relFlow.set(0,0,0),y.relSpeed=0,this.anim.force=A.state,this.anim.forcePhase=A.phase,this.acc=0}for(;!this.studio&&this.acc>=dr&&e<8;)this.player.fixedUpdate(dr),this.body.step(dr),this.acc-=dr,e++;e===8&&(this.acc=0),this.mouthUnder=this.mouthUnder?this.body.mouthDepth>-.015:this.body.mouthDepth>.03;let i=this.survival;if(this.state!=="title"&&this.state!=="won"&&i.update(t,{mouthUnder:this.mouthUnder,effort:this.player.effort,turb:this.body.turb,subFrac:this.body.subFrac,storm:this.weather.storm,sudden:this.player.impact>.8,brace:Math.max(this.player.brace,this.player.diveHeld?1:0)}),this.syncCharacter(this.acc/dr),this.anim.update(t),this.character.retarget(),this.character.group.updateMatrixWorld(!0),this.body.syncLimbs(this.character),this.state==="title")this.cam.script||(this.cam.script={yaw:-Math.PI/2,pitch:-.07}),this.cam.orbit=this.time*.11;else if(this.cam.orbit!==0&&!this.keepOrbit){let A=((this.cam.orbit+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;this.cam.orbit=Math.abs(A)<.01?0:A*Math.exp(-t*3)}{let A=this.cam.interest,y=this.interaction,w=this.body;if(y.crestDist<130&&y.crestDist>6&&y.crestHeight>4)A.x=w.pos.x-y.crestDx*60,A.z=w.pos.z-y.crestDz*60,A.w=pt(y.crestHeight/10)*pt(1.2-y.crestDist/130);else if(this.rescue.state==="hover"||this.rescue.state==="inbound"){let P=this.rescue.state==="hover"?this.rescue.ring:this.rescue.pos;A.x=P.x,A.z=P.z,A.w=.6}else A.w=0;this.cam.oxygen=this.survival.alive?this.survival.oxygen:100}this.cam.update(t);let n=this.camera.position,s=this.weather.wind,a=this.weather.storm;this.mouthWorld.copy(this.body._mouth).applyQuaternion(this.character.group.quaternion).add(this.character.group.position),this.underwater.update(t,this.camera,this.cam.surfaceAtCam,this.body,this.player,i,this.post,this.weather,this.mouthWorld,this.post.h),this.camUnder=this.underwater.under;let o=i.events;for(let A=0;A<o.length;A++){let y=o[A];y.type==="submerge"&&this.underwater.burstAt(this.mouthWorld,34,.45),y.type==="surface"&&(this.player.recover=2+4*y.need),this.emit(y.type,y)}o.length=0,this.lightning.update(t,n,a>.3?.3+.9*a:0,this.autoLightning),this.interaction.update(t,n,this.camUnder,s);let c=this.interaction.crestDist,h=this.interaction.crestHeight,l=h>18?60:30,u=i.alive&&c>-2&&c<l&&h>5?pt(1-c/l)*pt(h/9):0;this.player.brace+=(u-this.player.brace)*(1-Math.exp(-t*5)),this.cam.threat=this.interaction.threat;let d=this.rescue,f=d.state==="hover";d.update(t,this.body.pos,s,i.timeAlive,i.alive,this.spray,this.state==="playing",this.camera.position);let g=d.state==="hover"&&Math.hypot(this.body.pos.x-d.ring.x,this.body.pos.z-d.ring.z)<4.5;this.player.grab=g?d.ring:null,!f&&d.state==="hover"&&this.ui&&this.state==="playing"&&this.ui.note("\uAD6C\uC870 \uD5EC\uAE30 \u2014 \uBD88\uBE5B \uC544\uB798 \uACE0\uB9AC\uB97C \uBD99\uC7A1\uC544\uB77C",7),d.rescued&&this.state==="playing"&&(this.wonTimer+=t,this.wonTimer>1.6&&!this.manual&&(this.input.enabled=!1,this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("won")));let b=this.body.subFrac<.05&&this.body.pos.y-this.body.surfaceH>1?1:0;this.player.air+=(b-this.player.air)*(1-Math.exp(-t*(b?10:4)));let m=this.vst;m.alive=i.alive,m.blackout=i.blackout,m.mouthUnder=this.mouthUnder,m.under=this.mouthUnder,m.camUnder=this.underwater.isUnder,m.oxygen=i.oxygen,m.impact=this.player.impact,m.brace=this.player.brace,m.crestDist=c,m.crestHeight=h,m.gaspTimer=i.gaspTimer,m.inhaling=i.inhaling,m.breathPhase=i.breathPhase,m.stamina=i.stamina,m.effort=this.player.effort,m.temp=i.temp,m.swallow=i.swallow,m.air=this.player.air,m.exertion=i.exertion,m.struggle=this.anim.w.struggle,m.dive=this.player.diveHeld,this.coughSeq>0&&(this.coughSeq-=t,this.coughT-=t,this.coughT<=0&&(this.anim.coughKick=1,this.coughT=.42+Math.random()*.2)),this.face.update(t,m),this.state!=="title"&&this.voiceDir.update(t,m),this.limbs.update(t,this.spray,s,this.state!=="title"||!0),this.spray.seedCrests(t,n,s,a,Math.min(40,1500*t)*(this.perf.profile.spray/9e3)),this.spray.seedBreakers(t,n,s),this.spray.update(t,n,s),this.rain.update(t,this.camera,s,this.weather.rain,this.camUnder,this.post.h);let p=this.post.u;this.impactBlur=Math.max(0,this.impactBlur-t*.9),p.uBlur.value=this.impactBlur*2.6,p.uSheet.value=this.lens.sheet,p.uWhiteout.value=this.interaction.whiteout,p.uMotionBlur.value=this.perf.profile.motionBlur?Math.min(1,this.player.impact*.45+this.player.tumble*.9):0,p.uTunnel.value=Math.max(pt((32-i.oxygen)/32)*.75,i.blackout),p.uDesat.value=.35*i.blackout+.18*pt((35.5-i.temp)/3),this.state==="title"?(p.uDofAmount.value=1.6,p.uDofFocus.value=this.cam.arm):p.uDofAmount.value=0,i.alive||(this.deadTimer+=t,p.uFade.value=Math.min(.82,this.deadTimer/4),this.deadTimer>4&&this.state==="playing"&&!this.manual&&(this.input.enabled=!1,this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("dead"))),this.ui&&this.state==="playing"&&this.ui.setBars(i.oxygen/100,i.stamina/100,(i.temp-31.5)/5.5,this.rescue.hold/4.5);let x=tt.uFlash.value;this.flashLight.intensity=x*3.2,this.flashLight.position.copy(this.character.group.position).addScaledVector(tt.uFlashDir.value,50),this.flashLight.target.position.copy(this.character.group.position),this.keyLight.position.copy(this.character.group.position).addScaledVector(tt.uGlowDir.value,50),this.keyLight.target.position.copy(this.character.group.position),this.character.material.envMapIntensity=(this.studioLight?4.5:this.character.glb?1.25:1.7)+x*2,this.keyLight.intensity=this.studioLight?2.2:.42,this.ocean.update(this.camera,t),this.ocean.uniforms.uPlayerPos.value.copy(this.character.group.position),this.ocean.uniforms.uPlayerFoam.value=(.1+this.anim.splashiness*.22+this.limbs.activity*.3)*Math.min(1,this.body.subFrac*3)*(this.body.eyeDepth<.25?1:0);let v=this.audioState,_=this.camera.matrixWorld.elements;v.cam.fwd.set(-_[8],-_[9],-_[10]),v.cam.up.set(_[4],_[5],_[6]),v.storm=a,v.rain=this.weather.rain,v.windSpeed=this.weather.windSpeed,v.gust=this.weather.gust,v.windPan=-(s.x*_[0]+s.z*_[2])/Math.max(1,this.weather.windSpeed),v.under=this.underwater.under,v.depth=Math.max(0,this.underwater.depth),v.aeration=this.underwater.aeration,v.threat=this.interaction.threat,v.hot=this.spray.hot,v.oxygen=i.oxygen,v.effort=this.player.effort,v.heli=this.rescue.state!=="none"?{on:!0,pos:this.rescue.pos}:null,v.air=this.player.air,v.relSpeed=this.body.relSpeed,v.swellV=this.body.surface.vy,v.alive=i.alive,v.blackout=i.blackout,v.mouthUnder=this.mouthUnder,v.swimSplash=Math.max(this.limbs.activity,this.anim.w.swim*.8)*(this.mouthUnder?.3:1),this.audio.update(t,v),this.input.endFrame()}render(t){if(this.sky.updateEnv(),this.envTimer-=t,this.envTimer<=0&&tt.uFlash.value<.01){let i=this.pmrem.fromEquirectangular(this.sky.envRT.texture);this.envRT&&this.envRT.dispose(),this.envRT=i,this.scene.environment=i.texture,this.envTimer=9}let e=this.weather.rain*(.9+5*(1-this.cam.blend))*(.6+.4*this.weather.gust);this.lens.update(t,e,this.underwater.isUnder,this.camera.aspect),this.foam.update(t,this.camera.position.x,this.camera.position.z,this.character.group.position,this.anim.splashiness*.2+this.limbs.activity*.24,this.ocean.uniforms),this.post.render(this.drawScene,this.camera,t,this.time)}renderStill(){this.render(0)}loop(t){requestAnimationFrame(this.loop);let e=Math.max(0,Math.min((t-this.last)/1e3,.1));this.last=t,!this.manual&&(this.state==="paused"||this.state==="dead"||(this.step(e),this.render(e),this.perf.update(e)&&this.resize()))}};function Zv(){let r;try{r=new mh}catch(e){let i=document.getElementById("fatal");i.style.display="flex",i.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uC2E4\uD589\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 (WebGL2 \uD544\uC694). "+e.message,console.error(e);return}(new URLSearchParams(location.search).get("glb")==="0"?Promise.resolve():r.loadCharacter()).then(()=>{window.__ocean.ready=!0}),window.__ocean={game:r,ready:!1,scenarios:Object.keys(lr),advance(e,i=1/60){let n=Math.max(1,Math.round(e/i));for(let s=0;s<n;s++)r.step(i),r.render(i)},scenario(e){return r.scenarios.run(e)},studio(e){let i=new St;e.prone?i.setFromRotationMatrix(new Ct().makeBasis(new E(0,0,1),new E(-1,0,0),new E(0,-1,0))):i.setFromAxisAngle(new E(0,1,0),-Math.PI/2);let n=r.waves.sample(0,0,{}).h;r.studio={state:e.state,phase:e.phase||0,quat:i,x:0,y:n+14,z:0},r.player.underSwim=e.under?1:0,r.anim.forcePike=e.pike||0,r.weather.base=r.weather.storm=.15,r.weather.locked=!0,r.cam.setMode("third"),r.cam.blend=1,r.cam.yaw=-Math.PI/2,r.cam.pitch=e.pitch!==void 0?e.pitch:-.05,r.cam.orbit=e.orbit||0,r.keepOrbit=!0,r.cam.armOverride=e.arm||2.7,r.cam.inited=!1,r.post.u.uExposureBias.value=1,r.studioLight=!0;for(let s=0;s<4;s++)r.step(.5);return r.render(1/60),r.render(1/60),r.anim.state},set(e){return e.view&&(r.cam.setMode(e.view),e.snap&&(r.cam.blend=r.cam.target)),e.yaw!==void 0&&(r.cam.yaw=e.yaw),e.pitch!==void 0&&(r.cam.pitch=e.pitch),e.orbit!==void 0&&(r.cam.orbit=e.orbit,r.keepOrbit=!0),e.arm!==void 0&&(r.cam.armOverride=e.arm),e.keys!==void 0&&(r.input.virtual=e.keys,r.input.enabled=!0),e.storm!==void 0&&(r.weather.base=e.storm,e.snap&&(r.weather.storm=e.storm)),e.breaker&&r.interaction.launch(e.breaker),e.strike&&r.lightning.strike(r.camera.position,e.strike),!0},info(){let e=r.body,i=r.survival;return{t:+r.time.toFixed(2),state:r.state,size:[r.post.w,r.post.h],profile:r.perf.profile.key,sigH:+r.waves.sigHeight.toFixed(1),pos:[+e.pos.x.toFixed(1),+e.pos.y.toFixed(2),+e.pos.z.toFixed(1)],surf:+e.surfaceH.toFixed(2),mouth:+e.mouthDepth.toFixed(2),sub:+e.subFrac.toFixed(2),ctl:+r.player.control.toFixed(2),imp:+r.player.impact.toFixed(2),anim:r.anim.state,view:r.cam.mode,blend:+r.cam.blend.toFixed(2),camUnder:+r.camUnder.toFixed(2),yaw:+r.cam.yaw.toFixed(2),o2:+i.oxygen.toFixed(0),st:+i.stamina.toFixed(0),temp:+i.temp.toFixed(2),alive:i.alive,flash:+tt.uFlash.value.toFixed(2),spray:r.spray.alive,drops:r.lens.count,fps:+r.perf.fps.toFixed(0),rescue:r.rescue.state,hold:+r.rescue.hold.toFixed(1),won:r.rescue.rescued,face:r.face.label,air:+r.player.air.toFixed(2),swim:r.player.swimHeld,dive:r.player.diveHeld,depth:+Math.max(0,e.mouthDepth).toFixed(2),voice:r.voiceDir.last,voices:r.voiceDir.count,glb:!!r.character.glb}},measure(e){return new Promise(i=>{let n=performance.now(),s=0,a=0,o=n,c=h=>{s++,a=Math.max(a,h-o),o=h,h-n>=e*1e3?i({fps:+(s/((h-n)/1e3)).toFixed(1),worstMs:+a.toFixed(1),scale:r.perf.scale,size:[r.post.w,r.post.h],profile:r.perf.profile.key}):requestAnimationFrame(c)};requestAnimationFrame(c)})}}}Zv();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
