(()=>{var so="160";var Qc=0,Po=1,jc=2;var ac=1,th=2,Ri=3,Xi=0,Fe=1,Ge=2;var Gi=0,Wi=1,Hs=2,Lo=3,Io=4,ro=5,Pi=100,eh=101,ih=102,Do=103,Uo=104,cr=200,nh=201,ao=202,sh=203,rs=204,ba=205,rh=206,ah=207,oh=208,lh=209,ch=210,hh=211,uh=212,dh=213,fh=214,ph=0,mh=1,gh=2,Vs=3,vh=4,xh=5,_h=6,yh=7,oc=0,Mh=1,bh=2,vi=0,wh=1,Sh=2,Eh=3,Th=4,Ah=5,Rh=6,Fo="attached",Ch="detached",lc=300,zn=301,kn=302,wa=303,Sa=304,hr=306,Di=1e3,Qe=1001,Ea=1002,Me=1003,No=1004;var Wr=1005;var $t=1006,Ph=1007;var je=1008;var Ce=1009,Lh=1010,Ih=1011,oo=1012,cc=1013,Vi=1014,Li=1015,Ui=1016,hc=1017,uc=1018,rn=1020,Dh=1021,se=1023,Uh=1024,Fh=1025,an=1026,Hn=1027,Nh=1028,dc=1029,Oh=1030,fc=1031,pc=1033,Xr=33776,qr=33777,Yr=33778,Zr=33779,Oo=35840,Bo=35841,zo=35842,ko=35843,mc=36196,Ho=37492,Vo=37496,Go=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,Zo=37813,Jo=37814,$o=37815,Ko=37816,Qo=37817,jo=37818,tl=37819,el=37820,il=37821,Jr=36492,nl=36494,sl=36495,Bh=36283,rl=36284,al=36285,ol=36286;var Gs=2300,Ws=2301,$r=2302,ll=2400,cl=2401,hl=2402;var gc=3e3,on=3001,zh=3200,kh=3201,vc=0,Hh=1,ii="",Re="srgb",ci="srgb-linear",lo="display-p3",ur="display-p3-linear",Xs="linear",he="srgb",qs="rec709",Ys="p3";var vn=7680;var ul=519,Vh=512,Gh=513,Wh=514,xc=515,Xh=516,qh=517,Yh=518,Zh=519,dl=35044,Fi=35048;var fl="300 es",Ta=1035,Ii=2e3,Zs=2001,qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=1234567,es=Math.PI/180,as=180/Math.PI;function fn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Ue(n,t,e){return Math.max(t,Math.min(e,n))}function co(n,t){return(n%t+t)%t}function Jh(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function $h(n,t,e){return n!==t?(e-n)/(t-n):0}function is(n,t,e){return(1-e)*n+e*t}function Kh(n,t,e,i){return is(n,t,1-Math.exp(-e*i))}function Qh(n,t=1){return t-Math.abs(co(n,t*2)-t)}function jh(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function tu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function eu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function iu(n,t){return n+Math.random()*(t-n)}function nu(n){return n*(.5-Math.random())}function su(n){n!==void 0&&(pl=n);let t=pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ru(n){return n*es}function au(n){return n*as}function Aa(n){return(n&n-1)===0&&n!==0}function ou(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Js(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function lu(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ke(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Yn={DEG2RAD:es,RAD2DEG:as,generateUUID:fn,clamp:Ue,euclideanModulo:co,mapLinear:Jh,inverseLerp:$h,lerp:is,damp:Kh,pingpong:Qh,smoothstep:jh,smootherstep:tu,randInt:eu,randFloat:iu,randFloatSpread:nu,seededRandom:su,degToRad:ru,radToDeg:au,isPowerOfTwo:Aa,ceilPowerOfTwo:ou,floorPowerOfTwo:Js,setQuaternionFromProperEuler:lu,normalize:ke,denormalize:Dn},xt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],_=s[1],x=s[4],w=s[7],C=s[2],y=s[5],A=s[8];return r[0]=o*v+a*_+l*C,r[3]=o*m+a*x+l*y,r[6]=o*p+a*w+l*A,r[1]=c*v+h*_+u*C,r[4]=c*m+h*x+u*y,r[7]=c*p+h*w+u*A,r[2]=d*v+f*_+g*C,r[5]=d*m+f*x+g*y,r[8]=d*p+f*w+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*c-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Kr.makeScale(t,e)),this}rotate(t){return this.premultiply(Kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Kr=new qt;function _c(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $s(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cu(){let n=$s("canvas");return n.style.display="block",n}var ml={};function ns(n){n in ml||(ml[n]=!0,console.warn(n))}var gl=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vl=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vs={[ci]:{transfer:Xs,primaries:qs,toReference:n=>n,fromReference:n=>n},[Re]:{transfer:he,primaries:qs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ur]:{transfer:Xs,primaries:Ys,toReference:n=>n.applyMatrix3(vl),fromReference:n=>n.applyMatrix3(gl)},[lo]:{transfer:he,primaries:Ys,toReference:n=>n.convertSRGBToLinear().applyMatrix3(vl),fromReference:n=>n.applyMatrix3(gl).convertLinearToSRGB()}},hu=new Set([ci,ur]),ne={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!hu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=vs[t].toReference,s=vs[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return vs[n].primaries},getTransfer:function(n){return n===ii?Xs:vs[n].transfer}};function On(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var xn,Ks=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xn===void 0&&(xn=$s("canvas")),xn.width=t.width,xn.height=t.height;let i=xn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=$s("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(On(e[i]/255)*255):e[i]=On(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uu=0,Qs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=fn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jr(s[o].image)):r.push(jr(s[o]))}else r=jr(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function jr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ks.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var du=0,ni=class n extends qi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Qe,s=Qe,r=$t,o=je,a=se,l=Ce,c=n.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=fn(),this.name="",this.source=new Qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===on?Re:ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case Qe:t.x=t.x<0?0:1;break;case Ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case Qe:t.y=t.y<0?0:1;break;case Ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Re?on:gc}set encoding(t){ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===on?Re:ii}};ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=lc;ni.DEFAULT_ANISOTROPY=1;var ce=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,w=(f+1)/2,C=(p+1)/2,y=(h+d)/4,A=(u+v)/4,O=(g+m)/4;return x>w&&x>C?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=y/i,r=A/i):w>C?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=y/s,r=O/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=A/r,s=O/r),this.set(i,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ra=class extends qi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===on?Re:ii),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ni(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},de=class extends Ra{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},js=class extends ni{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ca=class extends ni{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ee=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*v,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let C=Math.sqrt(x),y=Math.atan2(C,p*_);m=Math.sin(m*y)/C,a=Math.sin(a*y)/C}let w=a*_;if(l=l*m+d*w,c=c*m+f*w,h=h*m+g*w,u=u*m+v*w,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ta=new R,xl=new ee,Yi=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xs.copy(i.boundingBox)),xs.applyMatrix4(t.matrixWorld),this.union(xs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kn),_s.subVectors(this.max,Kn),_n.subVectors(t.a,Kn),yn.subVectors(t.b,Kn),Mn.subVectors(t.c,Kn),Oi.subVectors(yn,_n),Bi.subVectors(Mn,yn),Qi.subVectors(_n,Mn);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-Qi.z,Qi.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,Qi.z,0,-Qi.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-Qi.y,Qi.x,0];return!ea(e,_n,yn,Mn,_s)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,_n,yn,Mn,_s))?!1:(ys.crossVectors(Oi,Bi),e=[ys.x,ys.y,ys.z],ea(e,_n,yn,Mn,_s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},wi=[new R,new R,new R,new R,new R,new R,new R,new R],ai=new R,xs=new Yi,_n=new R,yn=new R,Mn=new R,Oi=new R,Bi=new R,Qi=new R,Kn=new R,_s=new R,ys=new R,ji=new R;function ea(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ji.fromArray(n,r);let a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),h=i.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var fu=new Yi,Qn=new R,ia=new R,ln=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):fu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qn.subVectors(t,this.center);let e=Qn.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Qn,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qn.copy(t.center).add(ia)),this.expandByPoint(Qn.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new R,na=new R,Ms=new R,zi=new R,sa=new R,bs=new R,ra=new R,tr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){na.copy(t).add(e).multiplyScalar(.5),Ms.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(na);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ms),a=zi.dot(this.direction),l=-zi.dot(Ms),c=zi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(na).addScaledVector(Ms,d),f}intersectSphere(t,e){Si.subVectors(t.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,i,s,r){sa.subVectors(e,t),bs.subVectors(i,t),ra.crossVectors(sa,bs);let o=this.direction.dot(ra),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,t);let l=a*this.direction.dot(bs.crossVectors(zi,bs));if(l<0)return null;let c=a*this.direction.dot(sa.cross(zi));if(c<0||l+c>o)return null;let h=-a*zi.dot(ra);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,v,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/bn.setFromMatrixColumn(t,0).length(),r=1/bn.setFromMatrixColumn(t,1).length(),o=1/bn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pu,t,mu)}lookAt(t,e,i){let s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ki.crossVectors(i,$e),ki.lengthSq()===0&&(Math.abs(i.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ki.crossVectors(i,$e)),ki.normalize(),ws.crossVectors($e,ki),s[0]=ki.x,s[4]=ws.x,s[8]=$e.x,s[1]=ki.y,s[5]=ws.y,s[9]=$e.y,s[2]=ki.z,s[6]=ws.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],_=i[3],x=i[7],w=i[11],C=i[15],y=s[0],A=s[4],O=s[8],M=s[12],S=s[1],F=s[5],G=s[9],K=s[13],D=s[2],P=s[6],k=s[10],Z=s[14],Y=s[3],z=s[7],J=s[11],$=s[15];return r[0]=o*y+a*S+l*D+c*Y,r[4]=o*A+a*F+l*P+c*z,r[8]=o*O+a*G+l*k+c*J,r[12]=o*M+a*K+l*Z+c*$,r[1]=h*y+u*S+d*D+f*Y,r[5]=h*A+u*F+d*P+f*z,r[9]=h*O+u*G+d*k+f*J,r[13]=h*M+u*K+d*Z+f*$,r[2]=g*y+v*S+m*D+p*Y,r[6]=g*A+v*F+m*P+p*z,r[10]=g*O+v*G+m*k+p*J,r[14]=g*M+v*K+m*Z+p*$,r[3]=_*y+x*S+w*D+C*Y,r[7]=_*A+x*F+w*P+C*z,r[11]=_*O+x*G+w*k+C*J,r[15]=_*M+x*K+w*Z+C*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+v*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=u*m*c-v*d*c+v*l*f-a*m*f-u*l*p+a*d*p,x=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,w=h*v*c-g*u*c+g*a*f-o*v*f-h*a*p+o*u*p,C=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,y=e*_+i*x+s*w+r*C;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/y;return t[0]=_*A,t[1]=(v*d*r-u*m*r-v*s*f+i*m*f+u*s*p-i*d*p)*A,t[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*A,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*A,t[4]=x*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*A,t[8]=w*A,t[9]=(g*u*r-h*v*r-g*i*f+e*v*f+h*i*p-e*u*p)*A,t[10]=(o*v*r-g*a*r+g*i*c-e*v*c-o*i*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*A,t[12]=C*A,t[13]=(h*v*s-g*u*s+g*i*d-e*v*d-h*i*m+e*u*m)*A,t[14]=(g*a*s-o*v*s-g*i*l+e*v*l+o*i*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,_=l*c,x=l*h,w=l*u,C=i.x,y=i.y,A=i.z;return s[0]=(1-(v+p))*C,s[1]=(f+w)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(f-w)*y,s[5]=(1-(d+p))*y,s[6]=(m+_)*y,s[7]=0,s[8]=(g+x)*A,s[9]=(m-_)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=bn.set(s[0],s[1],s[2]).length(),o=bn.set(s[4],s[5],s[6]).length(),a=bn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],oi.copy(this);let c=1/r,h=1/o,u=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,e.setFromRotationMatrix(oi),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ii){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),f,g;if(a===Ii)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zs)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ii){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h,g,v;if(a===Ii)g=(o+r)*u,v=-2*u;else if(a===Zs)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},bn=new R,oi=new Gt,pu=new R(0,0,0),mu=new R(1,1,1),ki=new R,ws=new R,$e=new R,_l=new Gt,yl=new ee,Vn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _l.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_l,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yl.setFromEuler(this),this.setFromQuaternion(yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gu=0,Ml=new R,wn=new ee,Ei=new Gt,Ss=new R,jn=new R,vu=new R,xu=new ee,bl=new R(1,0,0),wl=new R(0,1,0),Sl=new R(0,0,1),_u={type:"added"},yu={type:"removed"},We=class n extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new R,e=new Vn,i=new ee,s=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Gt},normalMatrix:{value:new qt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wn.setFromAxisAngle(t,e),this.quaternion.multiply(wn),this}rotateOnWorldAxis(t,e){return wn.setFromAxisAngle(t,e),this.quaternion.premultiply(wn),this}rotateX(t){return this.rotateOnAxis(bl,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(Sl,t)}translateOnAxis(t,e){return Ml.copy(t).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bl,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(Sl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ss.copy(t):Ss.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),jn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(jn,Ss,this.up):Ei.lookAt(Ss,jn,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),wn.setFromRotationMatrix(Ei),this.quaternion.premultiply(wn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(_u)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yu)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,t,vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};We.DEFAULT_UP=new R(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new R,Ti=new R,aa=new R,Ai=new R,Sn=new R,En=new R,El=new R,oa=new R,la=new R,ca=new R,Es=!1,Un=class n{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){li.subVectors(s,e),Ti.subVectors(i,e),aa.subVectors(t,e);let o=li.dot(li),a=li.dot(Ti),l=li.dot(aa),c=Ti.dot(Ti),h=Ti.dot(aa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(t,e,i,s,r,o,a,l){return Es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Es=!0),this.getInterpolation(t,e,i,s,r,o,a,l)}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),Ti.subVectors(t,e),li.cross(Ti).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),li.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Es=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Sn.subVectors(s,i),En.subVectors(r,i),oa.subVectors(t,i);let l=Sn.dot(oa),c=En.dot(oa);if(l<=0&&c<=0)return e.copy(i);la.subVectors(t,s);let h=Sn.dot(la),u=En.dot(la);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Sn,o);ca.subVectors(t,r);let f=Sn.dot(ca),g=En.dot(ca);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(En,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return El.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(El,a);let p=1/(m+v+d);return o=v*p,a=d*p,e.copy(i).addScaledVector(Sn,o).addScaledVector(En,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function ha(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Zt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=co(t,1),e=Ue(e,0,1),i=Ue(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ha(o,r,t+1/3),this.g=ha(o,r,t),this.b=ha(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=Re){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let i=yc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return ne.fromWorkingColorSpace(De.copy(this),t),Math.round(Ue(De.r*255,0,255))*65536+Math.round(Ue(De.g*255,0,255))*256+Math.round(Ue(De.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(De.copy(this),e);let i=De.r,s=De.g,r=De.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Re){ne.fromWorkingColorSpace(De.copy(this),t);let e=De.r,i=De.g,s=De.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hi),this.setHSL(Hi.h+t,Hi.s+e,Hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hi),t.getHSL(Ts);let i=is(Hi.h,Ts.h,e),s=is(Hi.s,Ts.s,e),r=is(Hi.l,Ts.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new Zt;Zt.NAMES=yc;var Mu=0,cn=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=Wi,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rs,this.blendDst=ba,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vn,this.stencilZFail=vn,this.stencilZPass=vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rs&&(i.blendSrc=this.blendSrc),this.blendDst!==ba&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ir=class extends cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new R,As=new xt,Qt=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=dl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),i=ke(i,this.array),s=ke(s,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),t}};var Gn=class extends Qt{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var nr=class extends Qt{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ne=class extends Qt{constructor(t,e,i){super(new Float32Array(t),e,i)}};var bu=0,ei=new Gt,ua=new We,Tn=new R,Ke=new Yi,ts=new Yi,Te=new R,Pe=class n extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_c(t)?nr:Gn)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,i){return ei.makeTranslation(t,e,i),this.applyMatrix4(ei),this}scale(t,e,i){return ei.makeScale(t,e,i),this.applyMatrix4(ei),this}lookAt(t){return ua.lookAt(t),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tn).negate(),this.translate(Tn.x,Tn.y,Tn.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Ke.min,ts.min),Ke.expandByPoint(Te),Te.addVectors(Ke.max,ts.max),Ke.expandByPoint(Te)):(Ke.expandByPoint(ts.min),Ke.expandByPoint(ts.max))}Ke.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Te.fromBufferAttribute(a,c),l&&(Tn.fromBufferAttribute(t,c),Te.add(Tn)),s=Math.max(s,i.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new R,h[S]=new R;let u=new R,d=new R,f=new R,g=new xt,v=new xt,m=new xt,p=new R,_=new R;function x(S,F,G){u.fromArray(s,S*3),d.fromArray(s,F*3),f.fromArray(s,G*3),g.fromArray(o,S*2),v.fromArray(o,F*2),m.fromArray(o,G*2),d.sub(u),f.sub(u),v.sub(g),m.sub(g);let K=1/(v.x*m.y-m.x*v.y);isFinite(K)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(K),_.copy(f).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(K),c[S].add(p),c[F].add(p),c[G].add(p),h[S].add(_),h[F].add(_),h[G].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let S=0,F=w.length;S<F;++S){let G=w[S],K=G.start,D=G.count;for(let P=K,k=K+D;P<k;P+=3)x(i[P+0],i[P+1],i[P+2])}let C=new R,y=new R,A=new R,O=new R;function M(S){A.fromArray(r,S*3),O.copy(A);let F=c[S];C.copy(F),C.sub(A.multiplyScalar(A.dot(F))).normalize(),y.crossVectors(O,F);let K=y.dot(h[S])<0?-1:1;l[S*4]=C.x,l[S*4+1]=C.y,l[S*4+2]=C.z,l[S*4+3]=K}for(let S=0,F=w.length;S<F;++S){let G=w[S],K=G.start,D=G.count;for(let P=K,k=K+D;P<k;P+=3)M(i[P+0]),M(i[P+1]),M(i[P+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Qt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tl=new Gt,tn=new tr,Rs=new ln,Al=new R,An=new R,Rn=new R,Cn=new R,da=new R,Cs=new R,Ps=new xt,Ls=new xt,Is=new xt,Rl=new R,Cl=new R,Pl=new R,Ds=new R,Us=new R,Jt=class extends We{constructor(t=new Pe,e=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(da.fromBufferAttribute(u,t),o?Cs.addScaledVector(da,h):Cs.addScaledVector(da.sub(e),h))}e.add(Cs)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(r),tn.copy(t.ray).recast(t.near),!(Rs.containsPoint(tn.origin)===!1&&(tn.intersectSphere(Rs,Al)===null||tn.origin.distanceToSquared(Al)>(t.far-t.near)**2))&&(Tl.copy(r).invert(),tn.copy(t.ray).applyMatrix4(Tl),!(i.boundingBox!==null&&tn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,tn)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=_,C=x;w<C;w+=3){let y=a.getX(w),A=a.getX(w+1),O=a.getX(w+2);s=Fs(this,p,t,i,c,h,u,y,A,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=a.getX(m),x=a.getX(m+1),w=a.getX(m+2);s=Fs(this,o,t,i,c,h,u,_,x,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=_,C=x;w<C;w+=3){let y=w,A=w+1,O=w+2;s=Fs(this,p,t,i,c,h,u,y,A,O),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=m,x=m+1,w=m+2;s=Fs(this,o,t,i,c,h,u,_,x,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function wu(n,t,e,i,s,r,o,a){let l;if(t.side===Fe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Xi,a),l===null)return null;Us.copy(a),Us.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Us);return c<e.near||c>e.far?null:{distance:c,point:Us.clone(),object:n}}function Fs(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,An),n.getVertexPosition(l,Rn),n.getVertexPosition(c,Cn);let h=wu(n,t,e,i,An,Rn,Cn,Ds);if(h){s&&(Ps.fromBufferAttribute(s,a),Ls.fromBufferAttribute(s,l),Is.fromBufferAttribute(s,c),h.uv=Un.getInterpolation(Ds,An,Rn,Cn,Ps,Ls,Is,new xt)),r&&(Ps.fromBufferAttribute(r,a),Ls.fromBufferAttribute(r,l),Is.fromBufferAttribute(r,c),h.uv1=Un.getInterpolation(Ds,An,Rn,Cn,Ps,Ls,Is,new xt),h.uv2=h.uv1),o&&(Rl.fromBufferAttribute(o,a),Cl.fromBufferAttribute(o,l),Pl.fromBufferAttribute(o,c),h.normal=Un.getInterpolation(Ds,An,Rn,Cn,Rl,Cl,Pl,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};Un.getNormal(An,Rn,Cn,u.normal),h.face=u}return h}var os=class n extends Pe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function g(v,m,p,_,x,w,C,y,A,O,M){let S=w/A,F=C/O,G=w/2,K=C/2,D=y/2,P=A+1,k=O+1,Z=0,Y=0,z=new R;for(let J=0;J<k;J++){let $=J*F-K;for(let st=0;st<P;st++){let L=st*S-G;z[v]=L*_,z[m]=$*x,z[p]=D,c.push(z.x,z.y,z.z),z[v]=0,z[m]=0,z[p]=y>0?1:-1,h.push(z.x,z.y,z.z),u.push(st/A),u.push(1-J/O),Z+=1}}for(let J=0;J<O;J++)for(let $=0;$<A;$++){let st=d+$+P*J,L=d+$+P*(J+1),B=d+($+1)+P*(J+1),et=d+($+1)+P*J;l.push(st,L,et),l.push(L,B,et),Y+=6}a.addGroup(f,Y,M),f+=Y,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Wn(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function He(n){let t={};for(let e=0;e<n.length;e++){let i=Wn(n[e]);for(let s in i)t[s]=i[s]}return t}function Su(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Mc(n){return n.getRenderTarget()===null?n.outputColorSpace:ne.workingColorSpace}var Eu={clone:Wn,merge:He},Tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tu,this.fragmentShader=Au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wn(t.uniforms),this.uniformsGroups=Su(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},sr=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ve=class extends sr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=as*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return as*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(es*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Pn=-90,Ln=1,Pa=class extends We{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(Pn,Ln,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Pn,Ln,t,e);r.layers=this.layers,this.add(r);let o=new Ve(Pn,Ln,t,e);o.layers=this.layers,this.add(o);let a=new Ve(Pn,Ln,t,e);a.layers=this.layers,this.add(a);let l=new Ve(Pn,Ln,t,e);l.layers=this.layers,this.add(l);let c=new Ve(Pn,Ln,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},rr=class extends ni{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:zn,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},La=class extends de{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===on?Re:ii),this.texture=new rr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$t}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new os(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:Wn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:Gi});r.uniforms.tEquirect.value=e;let o=new Jt(s,r),a=e.minFilter;return e.minFilter===je&&(e.minFilter=$t),new Pa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},fa=new R,Ru=new R,Cu=new qt,Ci=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=fa.subVectors(i,e).cross(Ru.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(fa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Cu.getNormalMatrix(t),s=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},en=new ln,Ns=new R,ls=class{constructor(t=new Ci,e=new Ci,i=new Ci,s=new Ci,r=new Ci,o=new Ci){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ii){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],x=s[14],w=s[15];if(i[0].setComponents(l-r,d-c,m-f,w-p).normalize(),i[1].setComponents(l+r,d+c,m+f,w+p).normalize(),i[2].setComponents(l+o,d+h,m+g,w+_).normalize(),i[3].setComponents(l-o,d-h,m-g,w-_).normalize(),i[4].setComponents(l-a,d-u,m-v,w-x).normalize(),e===Ii)i[5].setComponents(l+a,d+u,m+v,w+x).normalize();else if(e===Zs)i[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),en.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),en.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(en)}intersectsSprite(t){return en.center.set(0,0,0),en.radius=.7071067811865476,en.applyMatrix4(t.matrixWorld),this.intersectsSphere(en)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ns.x=s.normal.x>0?t.max.x:t.min.x,Ns.y=s.normal.y>0?t.max.y:t.min.y,Ns.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function bc(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Pu(n,t){let e=t.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),f.count===-1&&g.length===0&&n.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){let p=g[v];e?n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var hi=class n extends Pe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let _=p*d-o;for(let x=0;x<c;x++){let w=x*u-r;g.push(w,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let x=_+c*p,w=_+c*(p+1),C=_+1+c*(p+1),y=_+1+c*p;f.push(x,w,y),f.push(w,C,y)}this.setIndex(f),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(v,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iu=`#ifdef USE_ALPHAHASH
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
#endif`,Du=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ou=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zu=`#ifdef USE_BATCHING
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
#endif`,ku=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wu=`#ifdef USE_IRIDESCENCE
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
#endif`,Xu=`#ifdef USE_BUMPMAP
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,td=`#define PI 3.141592653589793
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
} // validated`,ed=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,id=`vec3 transformedNormal = objectNormal;
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
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,od="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`
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
}`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wd=`uniform bool receiveShadow;
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
#endif`,Sd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cd=`PhysicalMaterial material;
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
#endif`,Pd=`struct PhysicalMaterial {
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
}`,Ld=`
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Od=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hd=`#if defined( USE_POINTS_UV )
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
#endif`,Vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xd=`#ifdef USE_MORPHNORMALS
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
#endif`,qd=`#ifdef USE_MORPHTARGETS
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
#endif`,Yd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jd=`#ifdef USE_NORMALMAP
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
#endif`,tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,af=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gf=`float getShadowMask() {
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
}`,vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
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
#endif`,_f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,Mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ef=`#ifdef USE_TRANSMISSION
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
#endif`,Tf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
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
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
}`,zf=`#define DISTANCE
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
}`,kf=`#define DISTANCE
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`uniform float scale;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#include <common>
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
}`,qf=`uniform vec3 diffuse;
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
}`,Yf=`#define LAMBERT
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
}`,Zf=`#define LAMBERT
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
}`,Jf=`#define MATCAP
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
}`,$f=`#define MATCAP
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
}`,Kf=`#define NORMAL
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
}`,Qf=`#define NORMAL
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
}`,jf=`#define PHONG
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
}`,tp=`#define PHONG
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
}`,ep=`#define STANDARD
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
}`,ip=`#define STANDARD
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
}`,np=`#define TOON
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
}`,sp=`#define TOON
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
}`,rp=`uniform float size;
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
}`,ap=`uniform vec3 diffuse;
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
}`,op=`#include <common>
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
}`,lp=`uniform vec3 color;
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
}`,cp=`uniform float rotation;
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
}`,hp=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Lu,alphahash_pars_fragment:Iu,alphamap_fragment:Du,alphamap_pars_fragment:Uu,alphatest_fragment:Fu,alphatest_pars_fragment:Nu,aomap_fragment:Ou,aomap_pars_fragment:Bu,batching_pars_vertex:zu,batching_vertex:ku,begin_vertex:Hu,beginnormal_vertex:Vu,bsdfs:Gu,iridescence_fragment:Wu,bumpmap_pars_fragment:Xu,clipping_planes_fragment:qu,clipping_planes_pars_fragment:Yu,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:Ju,color_fragment:$u,color_pars_fragment:Ku,color_pars_vertex:Qu,color_vertex:ju,common:td,cube_uv_reflection_fragment:ed,defaultnormal_vertex:id,displacementmap_pars_vertex:nd,displacementmap_vertex:sd,emissivemap_fragment:rd,emissivemap_pars_fragment:ad,colorspace_fragment:od,colorspace_pars_fragment:ld,envmap_fragment:cd,envmap_common_pars_fragment:hd,envmap_pars_fragment:ud,envmap_pars_vertex:dd,envmap_physical_pars_fragment:Sd,envmap_vertex:fd,fog_vertex:pd,fog_pars_vertex:md,fog_fragment:gd,fog_pars_fragment:vd,gradientmap_pars_fragment:xd,lightmap_fragment:_d,lightmap_pars_fragment:yd,lights_lambert_fragment:Md,lights_lambert_pars_fragment:bd,lights_pars_begin:wd,lights_toon_fragment:Ed,lights_toon_pars_fragment:Td,lights_phong_fragment:Ad,lights_phong_pars_fragment:Rd,lights_physical_fragment:Cd,lights_physical_pars_fragment:Pd,lights_fragment_begin:Ld,lights_fragment_maps:Id,lights_fragment_end:Dd,logdepthbuf_fragment:Ud,logdepthbuf_pars_fragment:Fd,logdepthbuf_pars_vertex:Nd,logdepthbuf_vertex:Od,map_fragment:Bd,map_pars_fragment:zd,map_particle_fragment:kd,map_particle_pars_fragment:Hd,metalnessmap_fragment:Vd,metalnessmap_pars_fragment:Gd,morphcolor_vertex:Wd,morphnormal_vertex:Xd,morphtarget_pars_vertex:qd,morphtarget_vertex:Yd,normal_fragment_begin:Zd,normal_fragment_maps:Jd,normal_pars_fragment:$d,normal_pars_vertex:Kd,normal_vertex:Qd,normalmap_pars_fragment:jd,clearcoat_normal_fragment_begin:tf,clearcoat_normal_fragment_maps:ef,clearcoat_pars_fragment:nf,iridescence_pars_fragment:sf,opaque_fragment:rf,packing:af,premultiplied_alpha_fragment:of,project_vertex:lf,dithering_fragment:cf,dithering_pars_fragment:hf,roughnessmap_fragment:uf,roughnessmap_pars_fragment:df,shadowmap_pars_fragment:ff,shadowmap_pars_vertex:pf,shadowmap_vertex:mf,shadowmask_pars_fragment:gf,skinbase_vertex:vf,skinning_pars_vertex:xf,skinning_vertex:_f,skinnormal_vertex:yf,specularmap_fragment:Mf,specularmap_pars_fragment:bf,tonemapping_fragment:wf,tonemapping_pars_fragment:Sf,transmission_fragment:Ef,transmission_pars_fragment:Tf,uv_pars_fragment:Af,uv_pars_vertex:Rf,uv_vertex:Cf,worldpos_vertex:Pf,background_vert:Lf,background_frag:If,backgroundCube_vert:Df,backgroundCube_frag:Uf,cube_vert:Ff,cube_frag:Nf,depth_vert:Of,depth_frag:Bf,distanceRGBA_vert:zf,distanceRGBA_frag:kf,equirect_vert:Hf,equirect_frag:Vf,linedashed_vert:Gf,linedashed_frag:Wf,meshbasic_vert:Xf,meshbasic_frag:qf,meshlambert_vert:Yf,meshlambert_frag:Zf,meshmatcap_vert:Jf,meshmatcap_frag:$f,meshnormal_vert:Kf,meshnormal_frag:Qf,meshphong_vert:jf,meshphong_frag:tp,meshphysical_vert:ep,meshphysical_frag:ip,meshtoon_vert:np,meshtoon_frag:sp,points_vert:rp,points_frag:ap,shadow_vert:op,shadow_frag:lp,sprite_vert:cp,sprite_frag:hp},ot={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},gi={basic:{uniforms:He([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:He([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Zt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:He([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:He([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:He([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Zt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:He([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:He([ot.points,ot.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:He([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:He([ot.common,ot.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:He([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:He([ot.sprite,ot.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:He([ot.common,ot.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:He([ot.lights,ot.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};gi.physical={uniforms:He([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Os={r:0,b:0,g:0};function up(n,t,e,i,s,r,o){let a=new Zt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),_=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===hr)?(h===void 0&&(h=new Jt(new os(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Wn(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,y,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ne.getTransfer(x.colorSpace)!==he,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Jt(new hi(2,2),new Kt({name:"BackgroundMaterial",uniforms:Wn(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ne.getTransfer(x.colorSpace)!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(Os,Mc(n)),i.buffers.color.setClear(Os.r,Os.g,Os.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function dp(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(D,P,k,Z,Y){let z=!1;if(o){let J=v(Z,k,P);c!==J&&(c=J,f(c.object)),z=p(D,Z,k,Y),z&&_(D,Z,k,Y)}else{let J=P.wireframe===!0;(c.geometry!==Z.id||c.program!==k.id||c.wireframe!==J)&&(c.geometry=Z.id,c.program=k.id,c.wireframe=J,z=!0)}Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,O(D,P,k,Z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(D){return i.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function v(D,P,k){let Z=k.wireframe===!0,Y=a[D.id];Y===void 0&&(Y={},a[D.id]=Y);let z=Y[P.id];z===void 0&&(z={},Y[P.id]=z);let J=z[Z];return J===void 0&&(J=m(d()),z[Z]=J),J}function m(D){let P=[],k=[],Z=[];for(let Y=0;Y<s;Y++)P[Y]=0,k[Y]=0,Z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:Z,object:D,attributes:{},index:null}}function p(D,P,k,Z){let Y=c.attributes,z=P.attributes,J=0,$=k.getAttributes();for(let st in $)if($[st].location>=0){let B=Y[st],et=z[st];if(et===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(et=D.instanceColor)),B===void 0||B.attribute!==et||et&&B.data!==et.data)return!0;J++}return c.attributesNum!==J||c.index!==Z}function _(D,P,k,Z){let Y={},z=P.attributes,J=0,$=k.getAttributes();for(let st in $)if($[st].location>=0){let B=z[st];B===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(B=D.instanceColor));let et={};et.attribute=B,B&&B.data&&(et.data=B.data),Y[st]=et,J++}c.attributes=Y,c.attributesNum=J,c.index=Z}function x(){let D=c.newAttributes;for(let P=0,k=D.length;P<k;P++)D[P]=0}function w(D){C(D,0)}function C(D,P){let k=c.newAttributes,Z=c.enabledAttributes,Y=c.attributeDivisors;k[D]=1,Z[D]===0&&(n.enableVertexAttribArray(D),Z[D]=1),Y[D]!==P&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,P),Y[D]=P)}function y(){let D=c.newAttributes,P=c.enabledAttributes;for(let k=0,Z=P.length;k<Z;k++)P[k]!==D[k]&&(n.disableVertexAttribArray(k),P[k]=0)}function A(D,P,k,Z,Y,z,J){J===!0?n.vertexAttribIPointer(D,P,k,Y,z):n.vertexAttribPointer(D,P,k,Z,Y,z)}function O(D,P,k,Z){if(i.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let Y=Z.attributes,z=k.getAttributes(),J=P.defaultAttributeValues;for(let $ in z){let st=z[$];if(st.location>=0){let L=Y[$];if(L===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(L=D.instanceColor)),L!==void 0){let B=L.normalized,et=L.itemSize,rt=e.get(L);if(rt===void 0)continue;let lt=rt.buffer,_t=rt.type,yt=rt.bytesPerElement,vt=i.isWebGL2===!0&&(_t===n.INT||_t===n.UNSIGNED_INT||L.gpuType===cc);if(L.isInterleavedBufferAttribute){let Lt=L.data,H=Lt.stride,fe=L.offset;if(Lt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<st.locationSize;Mt++)C(st.location+Mt,Lt.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let Mt=0;Mt<st.locationSize;Mt++)w(st.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let Mt=0;Mt<st.locationSize;Mt++)A(st.location+Mt,et/st.locationSize,_t,B,H*yt,(fe+et/st.locationSize*Mt)*yt,vt)}else{if(L.isInstancedBufferAttribute){for(let Lt=0;Lt<st.locationSize;Lt++)C(st.location+Lt,L.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let Lt=0;Lt<st.locationSize;Lt++)w(st.location+Lt);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let Lt=0;Lt<st.locationSize;Lt++)A(st.location+Lt,et/st.locationSize,_t,B,et*yt,et/st.locationSize*Lt*yt,vt)}}else if(J!==void 0){let B=J[$];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(st.location,B);break;case 3:n.vertexAttrib3fv(st.location,B);break;case 4:n.vertexAttrib4fv(st.location,B);break;default:n.vertexAttrib1fv(st.location,B)}}}}y()}function M(){G();for(let D in a){let P=a[D];for(let k in P){let Z=P[k];for(let Y in Z)g(Z[Y].object),delete Z[Y];delete P[k]}delete a[D]}}function S(D){if(a[D.id]===void 0)return;let P=a[D.id];for(let k in P){let Z=P[k];for(let Y in Z)g(Z[Y].object),delete Z[Y];delete P[k]}delete a[D.id]}function F(D){for(let P in a){let k=a[P];if(k[D.id]===void 0)continue;let Z=k[D.id];for(let Y in Z)g(Z[Y].object),delete Z[Y];delete k[D.id]}}function G(){K(),h=!0,c!==l&&(c=l,f(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:w,disableUnusedAttributes:y}}function fp(n,t,e,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=n,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function pp(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,w=o||t.has("OES_texture_float"),C=x&&w,y=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:y}}function mp(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Ci,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,x=_*4,w=p.clippingState||null;l.value=w,w=h(g,d,x,f);for(let C=0;C!==x;++C)w[C]=e[C];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,w=f;x!==v;++x,w+=4)o.copy(u[x]).applyMatrix4(_,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function gp(n){let t=new WeakMap;function e(o,a){return a===wa?o.mapping=zn:a===Sa&&(o.mapping=kn),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===wa||a===Sa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new La(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var si=class extends sr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fn=4,Ll=[.125,.215,.35,.446,.526,.582],sn=20,pa=new si,Il=new Zt,ma=null,ga=0,va=0,nn=(1+Math.sqrt(5))/2,In=1/nn,Dl=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,nn,In),new R(0,nn,-In),new R(In,0,nn),new R(-In,0,nn),new R(nn,In,0),new R(-nn,In,0)],Xn=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,va),t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zn||t.mapping===kn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Ui,format:se,colorSpace:ci,depthBuffer:!1},s=Ul(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ul(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vp(r)),this._blurMaterial=xp(r,t,e)}return s}_compileMaterial(t){let e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,i,s){let a=new Ve(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Il),h.toneMapping=vi,h.autoClear=!1;let f=new ir({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new Jt(new os,f),v=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Il),v=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;Bs(s,_*x,p>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===zn||t.mapping===kn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Bs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,pa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Dl[(s-1)%Dl.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Jt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*sn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):sn;m>sn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sn}`);let p=[],_=0;for(let A=0;A<sn;++A){let O=A/v,M=Math.exp(-O*O/2);p.push(M),A===0?_+=M:A<m&&(_+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;let w=this._sizeLods[s],C=3*w*(s>x-Fn?s-x+Fn:0),y=4*(this._cubeSize-w);Bs(e,C,y,3*w,2*w),l.setRenderTarget(e),l.render(u,pa)}};function vp(n){let t=[],e=[],i=[],s=n,r=n-Fn+1+Ll.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Fn?l=Ll[o-n+Fn-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),x=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let y=0;y<f;y++){let A=y%3*2/3-1,O=y>2?0:-1,M=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];_.set(M,v*g*y),x.set(d,m*g*y);let S=[y,y,y,y,y,y];w.set(S,p*g*y)}let C=new Pe;C.setAttribute("position",new Qt(_,v)),C.setAttribute("uv",new Qt(x,m)),C.setAttribute("faceIndex",new Qt(w,p)),t.push(C),s>Fn&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ul(n,t,e){let i=new de(n,t,e);return i.texture.mapping=hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function xp(n,t,e){let i=new Float32Array(sn),s=new R(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:sn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Fl(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Nl(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function ho(){return`

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
	`}function _p(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===wa||l===Sa,h=l===zn||l===kn;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Xn(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Xn(n));let d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function yp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Mp(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let x=0,w=_.length;x<w;x+=3){let C=_[x+0],y=_[x+1],A=_[x+2];d.push(C,y,y,A,A,C)}}else if(g!==void 0){let _=g.array;v=g.version;for(let x=0,w=_.length/3-1;x<w;x+=3){let C=x+0,y=x+1,A=x+2;d.push(C,y,y,A,A,C)}}else return;let m=new(_c(d)?nr:Gn)(d,1);m.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function bp(n,t,e,i){let s=i.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,g){n.drawElements(r,g,a,f*l),e.update(g,r,1)}function u(f,g,v){if(v===0)return;let m,p;if(s)m=n,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*l,v),e.update(g,r,v)}function d(f,g,v){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,v);let p=0;for(let _=0;_<v;_++)p+=g[_];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function wp(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Sp(n,t){return n[0]-t[0]}function Ep(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Tp(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,o=new ce,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,v=r.get(h);if(v===void 0||v.count!==g){let D=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();let _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],O=0;_===!0&&(O=1),x===!0&&(O=2),w===!0&&(O=3);let M=h.attributes.position.count*O,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let F=new Float32Array(M*S*4*g),G=new js(F,M,S,g);G.type=Li,G.needsUpdate=!0;let K=O*4;for(let P=0;P<g;P++){let k=C[P],Z=y[P],Y=A[P],z=M*S*4*P;for(let J=0;J<k.count;J++){let $=J*K;_===!0&&(o.fromBufferAttribute(k,J),F[z+$+0]=o.x,F[z+$+1]=o.y,F[z+$+2]=o.z,F[z+$+3]=0),x===!0&&(o.fromBufferAttribute(Z,J),F[z+$+4]=o.x,F[z+$+5]=o.y,F[z+$+6]=o.z,F[z+$+7]=0),w===!0&&(o.fromBufferAttribute(Y,J),F[z+$+8]=o.x,F[z+$+9]=o.y,F[z+$+10]=o.z,F[z+$+11]=Y.itemSize===4?o.w:1)}}v={count:g,texture:G,size:new xt(M,S)},r.set(h,v),h.addEventListener("dispose",D)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",p),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let f=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<f;x++){let w=g[x];w[0]=x,w[1]=d[x]}g.sort(Ep);for(let x=0;x<8;x++)x<f&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Sp);let v=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let w=a[x],C=w[0],y=w[1];C!==Number.MAX_SAFE_INTEGER&&y?(v&&h.getAttribute("morphTarget"+x)!==v[C]&&h.setAttribute("morphTarget"+x,v[C]),m&&h.getAttribute("morphNormal"+x)!==m[C]&&h.setAttribute("morphNormal"+x,m[C]),s[x]=y,p+=y):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Ap(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var hn=class extends ni{constructor(t,e,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:an,h!==an&&h!==Hn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===an&&(i=Vi),i===void 0&&h===Hn&&(i=rn),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Me,this.minFilter=l!==void 0?l:Me,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wc=new ni,Sc=new hn(1,1);Sc.compareFunction=xc;var Ec=new js,Tc=new Ca,Ac=new rr,Ol=[],Bl=[],zl=new Float32Array(16),kl=new Float32Array(9),Hl=new Float32Array(4);function Zn(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Ol[s];if(r===void 0&&(r=new Float32Array(s),Ol[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function dr(n,t){let e=Bl[t];e===void 0&&(e=new Int32Array(t),Bl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Rp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Cp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function Pp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function Lp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function Ip(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,i))return;Hl.set(i),n.uniformMatrix2fv(this.addr,!1,Hl),we(e,i)}}function Dp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,i))return;kl.set(i),n.uniformMatrix3fv(this.addr,!1,kl),we(e,i)}}function Up(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,i))return;zl.set(i),n.uniformMatrix4fv(this.addr,!1,zl),we(e,i)}}function Fp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Np(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function Op(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function Bp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function zp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function kp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function Hp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function Vp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function Gp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Sc:wc;e.setTexture2D(t||r,s)}function Wp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Tc,s)}function Xp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ac,s)}function qp(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ec,s)}function Yp(n){switch(n){case 5126:return Rp;case 35664:return Cp;case 35665:return Pp;case 35666:return Lp;case 35674:return Ip;case 35675:return Dp;case 35676:return Up;case 5124:case 35670:return Fp;case 35667:case 35671:return Np;case 35668:case 35672:return Op;case 35669:case 35673:return Bp;case 5125:return zp;case 36294:return kp;case 36295:return Hp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}function Zp(n,t){n.uniform1fv(this.addr,t)}function Jp(n,t){let e=Zn(t,this.size,2);n.uniform2fv(this.addr,e)}function $p(n,t){let e=Zn(t,this.size,3);n.uniform3fv(this.addr,e)}function Kp(n,t){let e=Zn(t,this.size,4);n.uniform4fv(this.addr,e)}function Qp(n,t){let e=Zn(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function jp(n,t){let e=Zn(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function tm(n,t){let e=Zn(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function em(n,t){n.uniform1iv(this.addr,t)}function im(n,t){n.uniform2iv(this.addr,t)}function nm(n,t){n.uniform3iv(this.addr,t)}function sm(n,t){n.uniform4iv(this.addr,t)}function rm(n,t){n.uniform1uiv(this.addr,t)}function am(n,t){n.uniform2uiv(this.addr,t)}function om(n,t){n.uniform3uiv(this.addr,t)}function lm(n,t){n.uniform4uiv(this.addr,t)}function cm(n,t,e){let i=this.cache,s=t.length,r=dr(e,s);be(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||wc,r[o])}function hm(n,t,e){let i=this.cache,s=t.length,r=dr(e,s);be(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Tc,r[o])}function um(n,t,e){let i=this.cache,s=t.length,r=dr(e,s);be(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ac,r[o])}function dm(n,t,e){let i=this.cache,s=t.length,r=dr(e,s);be(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ec,r[o])}function fm(n){switch(n){case 5126:return Zp;case 35664:return Jp;case 35665:return $p;case 35666:return Kp;case 35674:return Qp;case 35675:return jp;case 35676:return tm;case 5124:case 35670:return em;case 35667:case 35671:return im;case 35668:case 35672:return nm;case 35669:case 35673:return sm;case 5125:return rm;case 36294:return am;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}var Ia=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Yp(e.type)}},Da=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fm(e.type)}},Ua=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},xa=/(\w+)(\])?(\[|\.)?/g;function Vl(n,t){n.seq.push(t),n.map[t.id]=t}function pm(n,t,e){let i=n.name,s=i.length;for(xa.lastIndex=0;;){let r=xa.exec(i),o=xa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vl(e,c===void 0?new Ia(a,n,t):new Da(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Ua(a),Vl(e,u)),e=u}}}var Bn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);pm(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Gl(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var mm=37297,gm=0;function vm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function xm(n){let t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(n),i;switch(t===e?i="":t===Ys&&e===qs?i="LinearDisplayP3ToLinearSRGB":t===qs&&e===Ys&&(i="LinearSRGBToLinearDisplayP3"),n){case ci:case ur:return[i,"LinearTransferOETF"];case Re:case lo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Wl(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+vm(n.getShaderSource(t),o)}else return s}function _m(n,t){let e=xm(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ym(n,t){let e;switch(t){case wh:e="Linear";break;case Sh:e="Reinhard";break;case Eh:e="OptimizedCineon";break;case Th:e="ACESFilmic";break;case Rh:e="AgX";break;case Ah:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Mm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Nn).join(`
`)}function bm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Nn).join(`
`)}function wm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Sm(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Nn(n){return n!==""}function Xl(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Em=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(n){return n.replace(Em,Am)}var Tm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Am(n,t){let e=kt[t];if(e===void 0){let i=Tm.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fa(e)}var Rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(n){return n.replace(Rm,Cm)}function Cm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zl(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pm(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===th?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function Lm(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zn:case kn:t="ENVMAP_TYPE_CUBE";break;case hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Im(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case kn:t="ENVMAP_MODE_REFRACTION";break}return t}function Dm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case oc:t="ENVMAP_BLENDING_MULTIPLY";break;case Mh:t="ENVMAP_BLENDING_MIX";break;case bh:t="ENVMAP_BLENDING_ADD";break}return t}function Um(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Fm(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Pm(e),c=Lm(e),h=Im(e),u=Dm(e),d=Um(e),f=e.isWebGL2?"":Mm(e),g=bm(e),v=wm(r),m=s.createProgram(),p,_,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Nn).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Nn).join(`
`),_.length>0&&(_+=`
`)):(p=[Zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nn).join(`
`),_=[f,Zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?kt.tonemapping_pars_fragment:"",e.toneMapping!==vi?ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,_m("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nn).join(`
`)),o=Fa(o),o=Xl(o,e),o=ql(o,e),a=Fa(a),a=Xl(a,e),a=ql(a,e),o=Yl(o),a=Yl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let w=x+p+o,C=x+_+a,y=Gl(s,s.VERTEX_SHADER,w),A=Gl(s,s.FRAGMENT_SHADER,C);s.attachShader(m,y),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function O(G){if(n.debug.checkShaderErrors){let K=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(y).trim(),P=s.getShaderInfoLog(A).trim(),k=!0,Z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,y,A);else{let Y=Wl(s,y,"vertex"),z=Wl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+Y+`
`+z)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(D===""||P==="")&&(Z=!1);Z&&(G.diagnostics={runnable:k,programLog:K,vertexShader:{log:D,prefix:p},fragmentShader:{log:P,prefix:_}})}s.deleteShader(y),s.deleteShader(A),M=new Bn(s,m),S=Sm(s,m)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let S;this.getAttributes=function(){return S===void 0&&O(this),S};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,mm)),F},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gm++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=A,this}var Nm=0,Na=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Oa(t),e.set(t,i)),i}},Oa=class{constructor(t){this.id=Nm++,this.code=t,this.usedTimes=0}};function Om(n,t,e,i,s,r,o){let a=new er,l=new Na,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,S,F,G,K){let D=G.fog,P=K.geometry,k=M.isMeshStandardMaterial?G.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),Y=Z&&Z.mapping===hr?Z.image.height:null,z=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let J=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,$=J!==void 0?J.length:0,st=0;P.morphAttributes.position!==void 0&&(st=1),P.morphAttributes.normal!==void 0&&(st=2),P.morphAttributes.color!==void 0&&(st=3);let L,B,et,rt;if(z){let Be=gi[z];L=Be.vertexShader,B=Be.fragmentShader}else L=M.vertexShader,B=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),rt=l.getFragmentShaderID(M);let lt=n.getRenderTarget(),_t=K.isInstancedMesh===!0,yt=K.isBatchedMesh===!0,vt=!!M.map,Lt=!!M.matcap,H=!!Z,fe=!!M.aoMap,Mt=!!M.lightMap,Ct=!!M.bumpMap,gt=!!M.normalMap,re=!!M.displacementMap,Ut=!!M.emissiveMap,T=!!M.metalnessMap,b=!!M.roughnessMap,W=M.anisotropy>0,it=M.clearcoat>0,tt=M.iridescence>0,nt=M.sheen>0,bt=M.transmission>0,ut=W&&!!M.anisotropyMap,pt=it&&!!M.clearcoatMap,Rt=it&&!!M.clearcoatNormalMap,Ht=it&&!!M.clearcoatRoughnessMap,j=tt&&!!M.iridescenceMap,ie=tt&&!!M.iridescenceThicknessMap,Yt=nt&&!!M.sheenColorMap,Dt=nt&&!!M.sheenRoughnessMap,St=!!M.specularMap,mt=!!M.specularColorMap,zt=!!M.specularIntensityMap,te=bt&&!!M.transmissionMap,ge=bt&&!!M.thicknessMap,Wt=!!M.gradientMap,at=!!M.alphaMap,I=M.alphaTest>0,ct=!!M.alphaHash,ht=!!M.extensions,Pt=!!P.attributes.uv1,Tt=!!P.attributes.uv2,ae=!!P.attributes.uv3,oe=vi;return M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(oe=n.toneMapping),{isWebGL2:h,shaderID:z,shaderType:M.type,shaderName:M.name,vertexShader:L,fragmentShader:B,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:rt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:yt,instancing:_t,instancingColor:_t&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ci,map:vt,matcap:Lt,envMap:H,envMapMode:H&&Z.mapping,envMapCubeUVHeight:Y,aoMap:fe,lightMap:Mt,bumpMap:Ct,normalMap:gt,displacementMap:d&&re,emissiveMap:Ut,normalMapObjectSpace:gt&&M.normalMapType===Hh,normalMapTangentSpace:gt&&M.normalMapType===vc,metalnessMap:T,roughnessMap:b,anisotropy:W,anisotropyMap:ut,clearcoat:it,clearcoatMap:pt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Ht,iridescence:tt,iridescenceMap:j,iridescenceThicknessMap:ie,sheen:nt,sheenColorMap:Yt,sheenRoughnessMap:Dt,specularMap:St,specularColorMap:mt,specularIntensityMap:zt,transmission:bt,transmissionMap:te,thicknessMap:ge,gradientMap:Wt,opaque:M.transparent===!1&&M.blending===Wi,alphaMap:at,alphaTest:I,alphaHash:ct,combine:M.combine,mapUv:vt&&v(M.map.channel),aoMapUv:fe&&v(M.aoMap.channel),lightMapUv:Mt&&v(M.lightMap.channel),bumpMapUv:Ct&&v(M.bumpMap.channel),normalMapUv:gt&&v(M.normalMap.channel),displacementMapUv:re&&v(M.displacementMap.channel),emissiveMapUv:Ut&&v(M.emissiveMap.channel),metalnessMapUv:T&&v(M.metalnessMap.channel),roughnessMapUv:b&&v(M.roughnessMap.channel),anisotropyMapUv:ut&&v(M.anisotropyMap.channel),clearcoatMapUv:pt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&v(M.sheenRoughnessMap.channel),specularMapUv:St&&v(M.specularMap.channel),specularColorMapUv:mt&&v(M.specularColorMap.channel),specularIntensityMapUv:zt&&v(M.specularIntensityMap.channel),transmissionMapUv:te&&v(M.transmissionMap.channel),thicknessMapUv:ge&&v(M.thicknessMap.channel),alphaMapUv:at&&v(M.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(gt||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:Tt,vertexUv3s:ae,pointsUvs:K.isPoints===!0&&!!P.attributes.uv&&(vt||at),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:st,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:vt&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===he,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ge,flipSided:M.side===Fe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ht&&M.extensions.derivatives===!0,extensionFragDepth:ht&&M.extensions.fragDepth===!0,extensionDrawBuffers:ht&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ht&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let F in M.defines)S.push(F),S.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(_(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function w(M){let S=g[M.type],F;if(S){let G=gi[S];F=Eu.clone(G.uniforms)}else F=M.uniforms;return F}function C(M,S){let F;for(let G=0,K=c.length;G<K;G++){let D=c[G];if(D.cacheKey===S){F=D,++F.usedTimes;break}}return F===void 0&&(F=new Fm(n,S,M,r),c.push(F)),F}function y(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:C,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:O}}function Bm(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function zm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Jl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $l(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,v,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){let p=o(u,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,v,m){let p=o(u,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||zm),i.length>1&&i.sort(d||Jl),s.length>1&&s.sort(d||Jl)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function km(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new $l,n.set(i,[o])):s>=r.length?(o=new $l,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Hm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Zt};break;case"SpotLight":e={position:new R,direction:new R,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function Vm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Gm=0;function Wm(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Xm(n,t){let e=new Hm,i=Vm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,o=new Gt,a=new Gt;function l(h,u){let d=0,f=0,g=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let v=0,m=0,p=0,_=0,x=0,w=0,C=0,y=0,A=0,O=0,M=0;h.sort(Wm);let S=u===!0?Math.PI:1;for(let G=0,K=h.length;G<K;G++){let D=h[G],P=D.color,k=D.intensity,Z=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=P.r*k*S,f+=P.g*k*S,g+=P.b*k*S;else if(D.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(D.sh.coefficients[z],k);M++}else if(D.isDirectionalLight){let z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){let J=D.shadow,$=i.get(D);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,s.directionalShadow[v]=$,s.directionalShadowMap[v]=Y,s.directionalShadowMatrix[v]=D.shadow.matrix,w++}s.directional[v]=z,v++}else if(D.isSpotLight){let z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(P).multiplyScalar(k*S),z.distance=Z,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,s.spot[p]=z;let J=D.shadow;if(D.map&&(s.spotLightMap[A]=D.map,A++,J.updateMatrices(D),D.castShadow&&O++),s.spotLightMatrix[p]=J.matrix,D.castShadow){let $=i.get(D);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,s.spotShadow[p]=$,s.spotShadowMap[p]=Y,y++}p++}else if(D.isRectAreaLight){let z=e.get(D);z.color.copy(P).multiplyScalar(k),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),s.rectArea[_]=z,_++}else if(D.isPointLight){let z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*S),z.distance=D.distance,z.decay=D.decay,D.castShadow){let J=D.shadow,$=i.get(D);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,$.shadowCameraNear=J.camera.near,$.shadowCameraFar=J.camera.far,s.pointShadow[m]=$,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=D.shadow.matrix,C++}s.point[m]=z,m++}else if(D.isHemisphereLight){let z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(k*S),z.groundColor.copy(D.groundColor).multiplyScalar(k*S),s.hemi[x]=z,x++}}_>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_FLOAT_1,s.rectAreaLTC2=ot.LTC_FLOAT_2):(s.rectAreaLTC1=ot.LTC_HALF_1,s.rectAreaLTC2=ot.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_FLOAT_1,s.rectAreaLTC2=ot.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_HALF_1,s.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==v||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==_||F.hemiLength!==x||F.numDirectionalShadows!==w||F.numPointShadows!==C||F.numSpotShadows!==y||F.numSpotMaps!==A||F.numLightProbes!==M)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=_,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=y,s.spotShadowMap.length=y,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=y+A-O,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=M,F.directionalLength=v,F.pointLength=m,F.spotLength=p,F.rectAreaLength=_,F.hemiLength=x,F.numDirectionalShadows=w,F.numPointShadows=C,F.numSpotShadows=y,F.numSpotMaps=A,F.numLightProbes=M,s.version=Gm++)}function c(h,u){let d=0,f=0,g=0,v=0,m=0,p=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){let w=h[_];if(w.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(w.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let C=s.rectArea[v];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(w.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){let C=s.point[f];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Kl(n,t){let e=new Xm(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function qm(n,t){let e=new WeakMap;function i(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Kl(n,t),e.set(r,[l])):o>=a.length?(l=new Kl(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}var Ba=class extends cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},za=class extends cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zm=`uniform sampler2D shadow_pass;
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
}`;function Jm(n,t,e){let i=new ls,s=new xt,r=new xt,o=new ce,a=new Ba({depthPacking:kh}),l=new za,c={},h=e.maxTextureSize,u={[Xi]:Fe,[Fe]:Xi,[Ge]:Ge},d=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Ym,fragmentShader:Zm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pe;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let p=this.type;this.render=function(y,A,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;let M=n.getRenderTarget(),S=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Gi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let K=p!==Ri&&this.type===Ri,D=p===Ri&&this.type!==Ri;for(let P=0,k=y.length;P<k;P++){let Z=y[P],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let z=Y.getFrameExtents();if(s.multiply(z),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,Y.mapSize.y=r.y)),Y.map===null||K===!0||D===!0){let $=this.type!==Ri?{minFilter:Me,magFilter:Me}:{};Y.map!==null&&Y.map.dispose(),Y.map=new de(s.x,s.y,$),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let J=Y.getViewportCount();for(let $=0;$<J;$++){let st=Y.getViewport($);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),G.viewport(o),Y.updateMatrices(Z,$),i=Y.getFrustum(),w(A,O,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Ri&&_(Y,O),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,F)};function _(y,A){let O=t.update(v);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new de(s.x,s.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(A,null,O,d,v,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(A,null,O,f,v,null)}function x(y,A,O,M){let S=null,F=O.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(F!==void 0)S=F;else if(S=O.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let G=S.uuid,K=A.uuid,D=c[G];D===void 0&&(D={},c[G]=D);let P=D[K];P===void 0&&(P=S.clone(),D[K]=P,A.addEventListener("dispose",C)),S=P}if(S.visible=A.visible,S.wireframe=A.wireframe,M===Ri?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let G=n.properties.get(S);G.light=O}return S}function w(y,A,O,M,S){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Ri)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld);let K=t.update(y),D=y.material;if(Array.isArray(D)){let P=K.groups;for(let k=0,Z=P.length;k<Z;k++){let Y=P[k],z=D[Y.materialIndex];if(z&&z.visible){let J=x(y,z,M,S);y.onBeforeShadow(n,y,A,O,K,J,Y),n.renderBufferDirect(O,null,K,J,y,Y),y.onAfterShadow(n,y,A,O,K,J,Y)}}}else if(D.visible){let P=x(y,D,M,S);y.onBeforeShadow(n,y,A,O,K,P,null),n.renderBufferDirect(O,null,K,P,y,null),y.onAfterShadow(n,y,A,O,K,P,null)}}let G=y.children;for(let K=0,D=G.length;K<D;K++)w(G[K],A,O,M,S)}function C(y){y.target.removeEventListener("dispose",C);for(let O in c){let M=c[O],S=y.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function $m(n,t,e){let i=e.isWebGL2;function s(){let I=!1,ct=new ce,ht=null,Pt=new ce(0,0,0,0);return{setMask:function(Tt){ht!==Tt&&!I&&(n.colorMask(Tt,Tt,Tt,Tt),ht=Tt)},setLocked:function(Tt){I=Tt},setClear:function(Tt,ae,oe,Se,Be){Be===!0&&(Tt*=Se,ae*=Se,oe*=Se),ct.set(Tt,ae,oe,Se),Pt.equals(ct)===!1&&(n.clearColor(Tt,ae,oe,Se),Pt.copy(ct))},reset:function(){I=!1,ht=null,Pt.set(-1,0,0,0)}}}function r(){let I=!1,ct=null,ht=null,Pt=null;return{setTest:function(Tt){Tt?yt(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(Tt){ct!==Tt&&!I&&(n.depthMask(Tt),ct=Tt)},setFunc:function(Tt){if(ht!==Tt){switch(Tt){case ph:n.depthFunc(n.NEVER);break;case mh:n.depthFunc(n.ALWAYS);break;case gh:n.depthFunc(n.LESS);break;case Vs:n.depthFunc(n.LEQUAL);break;case vh:n.depthFunc(n.EQUAL);break;case xh:n.depthFunc(n.GEQUAL);break;case _h:n.depthFunc(n.GREATER);break;case yh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=Tt}},setLocked:function(Tt){I=Tt},setClear:function(Tt){Pt!==Tt&&(n.clearDepth(Tt),Pt=Tt)},reset:function(){I=!1,ct=null,ht=null,Pt=null}}}function o(){let I=!1,ct=null,ht=null,Pt=null,Tt=null,ae=null,oe=null,Se=null,Be=null;return{setTest:function(le){I||(le?yt(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(le){ct!==le&&!I&&(n.stencilMask(le),ct=le)},setFunc:function(le,ze,mi){(ht!==le||Pt!==ze||Tt!==mi)&&(n.stencilFunc(le,ze,mi),ht=le,Pt=ze,Tt=mi)},setOp:function(le,ze,mi){(ae!==le||oe!==ze||Se!==mi)&&(n.stencilOp(le,ze,mi),ae=le,oe=ze,Se=mi)},setLocked:function(le){I=le},setClear:function(le){Be!==le&&(n.clearStencil(le),Be=le)},reset:function(){I=!1,ct=null,ht=null,Pt=null,Tt=null,ae=null,oe=null,Se=null,Be=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,v=[],m=null,p=!1,_=null,x=null,w=null,C=null,y=null,A=null,O=null,M=new Zt(0,0,0),S=0,F=!1,G=null,K=null,D=null,P=null,k=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,z=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=z>=1):J.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=z>=2);let $=null,st={},L=n.getParameter(n.SCISSOR_BOX),B=n.getParameter(n.VIEWPORT),et=new ce().fromArray(L),rt=new ce().fromArray(B);function lt(I,ct,ht,Pt){let Tt=new Uint8Array(4),ae=n.createTexture();n.bindTexture(I,ae),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<ht;oe++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(ct,0,n.RGBA,1,1,Pt,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(ct+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return ae}let _t={};_t[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_t[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),yt(n.DEPTH_TEST),l.setFunc(Vs),Ut(!1),T(Po),yt(n.CULL_FACE),gt(Gi);function yt(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function vt(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function Lt(I,ct){return f[I]!==ct?(n.bindFramebuffer(I,ct),f[I]=ct,i&&(I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ct),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ct)),!0):!1}function H(I,ct){let ht=v,Pt=!1;if(I)if(ht=g.get(ct),ht===void 0&&(ht=[],g.set(ct,ht)),I.isWebGLMultipleRenderTargets){let Tt=I.texture;if(ht.length!==Tt.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,oe=Tt.length;ae<oe;ae++)ht[ae]=n.COLOR_ATTACHMENT0+ae;ht.length=Tt.length,Pt=!0}}else ht[0]!==n.COLOR_ATTACHMENT0&&(ht[0]=n.COLOR_ATTACHMENT0,Pt=!0);else ht[0]!==n.BACK&&(ht[0]=n.BACK,Pt=!0);Pt&&(e.isWebGL2?n.drawBuffers(ht):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ht))}function fe(I){return m!==I?(n.useProgram(I),m=I,!0):!1}let Mt={[Pi]:n.FUNC_ADD,[eh]:n.FUNC_SUBTRACT,[ih]:n.FUNC_REVERSE_SUBTRACT};if(i)Mt[Do]=n.MIN,Mt[Uo]=n.MAX;else{let I=t.get("EXT_blend_minmax");I!==null&&(Mt[Do]=I.MIN_EXT,Mt[Uo]=I.MAX_EXT)}let Ct={[cr]:n.ZERO,[nh]:n.ONE,[ao]:n.SRC_COLOR,[rs]:n.SRC_ALPHA,[ch]:n.SRC_ALPHA_SATURATE,[oh]:n.DST_COLOR,[rh]:n.DST_ALPHA,[sh]:n.ONE_MINUS_SRC_COLOR,[ba]:n.ONE_MINUS_SRC_ALPHA,[lh]:n.ONE_MINUS_DST_COLOR,[ah]:n.ONE_MINUS_DST_ALPHA,[hh]:n.CONSTANT_COLOR,[uh]:n.ONE_MINUS_CONSTANT_COLOR,[dh]:n.CONSTANT_ALPHA,[fh]:n.ONE_MINUS_CONSTANT_ALPHA};function gt(I,ct,ht,Pt,Tt,ae,oe,Se,Be,le){if(I===Gi){p===!0&&(vt(n.BLEND),p=!1);return}if(p===!1&&(yt(n.BLEND),p=!0),I!==ro){if(I!==_||le!==F){if((x!==Pi||y!==Pi)&&(n.blendEquation(n.FUNC_ADD),x=Pi,y=Pi),le)switch(I){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hs:n.blendFunc(n.ONE,n.ONE);break;case Lo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Io:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Io:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,C=null,A=null,O=null,M.set(0,0,0),S=0,_=I,F=le}return}Tt=Tt||ct,ae=ae||ht,oe=oe||Pt,(ct!==x||Tt!==y)&&(n.blendEquationSeparate(Mt[ct],Mt[Tt]),x=ct,y=Tt),(ht!==w||Pt!==C||ae!==A||oe!==O)&&(n.blendFuncSeparate(Ct[ht],Ct[Pt],Ct[ae],Ct[oe]),w=ht,C=Pt,A=ae,O=oe),(Se.equals(M)===!1||Be!==S)&&(n.blendColor(Se.r,Se.g,Se.b,Be),M.copy(Se),S=Be),_=I,F=!1}function re(I,ct){I.side===Ge?vt(n.CULL_FACE):yt(n.CULL_FACE);let ht=I.side===Fe;ct&&(ht=!ht),Ut(ht),I.blending===Wi&&I.transparent===!1?gt(Gi):gt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);let Pt=I.stencilWrite;c.setTest(Pt),Pt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),W(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(I){G!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),G=I)}function T(I){I!==Qc?(yt(n.CULL_FACE),I!==K&&(I===Po?n.cullFace(n.BACK):I===jc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),K=I}function b(I){I!==D&&(Y&&n.lineWidth(I),D=I)}function W(I,ct,ht){I?(yt(n.POLYGON_OFFSET_FILL),(P!==ct||k!==ht)&&(n.polygonOffset(ct,ht),P=ct,k=ht)):vt(n.POLYGON_OFFSET_FILL)}function it(I){I?yt(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function tt(I){I===void 0&&(I=n.TEXTURE0+Z-1),$!==I&&(n.activeTexture(I),$=I)}function nt(I,ct,ht){ht===void 0&&($===null?ht=n.TEXTURE0+Z-1:ht=$);let Pt=st[ht];Pt===void 0&&(Pt={type:void 0,texture:void 0},st[ht]=Pt),(Pt.type!==I||Pt.texture!==ct)&&($!==ht&&(n.activeTexture(ht),$=ht),n.bindTexture(I,ct||_t[I]),Pt.type=I,Pt.texture=ct)}function bt(){let I=st[$];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ut(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ht(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(I){et.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),et.copy(I))}function te(I){rt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),rt.copy(I))}function ge(I,ct){let ht=u.get(ct);ht===void 0&&(ht=new WeakMap,u.set(ct,ht));let Pt=ht.get(I);Pt===void 0&&(Pt=n.getUniformBlockIndex(ct,I.name),ht.set(I,Pt))}function Wt(I,ct){let Pt=u.get(ct).get(I);h.get(ct)!==Pt&&(n.uniformBlockBinding(ct,Pt,I.__bindingPointIndex),h.set(ct,Pt))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},$=null,st={},f={},g=new WeakMap,v=[],m=null,p=!1,_=null,x=null,w=null,C=null,y=null,A=null,O=null,M=new Zt(0,0,0),S=0,F=!1,G=null,K=null,D=null,P=null,k=null,et.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:yt,disable:vt,bindFramebuffer:Lt,drawBuffers:H,useProgram:fe,setBlending:gt,setMaterial:re,setFlipSided:Ut,setCullFace:T,setLineWidth:b,setPolygonOffset:W,setScissorTest:it,activeTexture:tt,bindTexture:nt,unbindTexture:bt,compressedTexImage2D:ut,compressedTexImage3D:pt,texImage2D:St,texImage3D:mt,updateUBOMapping:ge,uniformBlockBinding:Wt,texStorage2D:Yt,texStorage3D:Dt,texSubImage2D:Rt,texSubImage3D:Ht,compressedTexSubImage2D:j,compressedTexSubImage3D:ie,scissor:zt,viewport:te,reset:at}}function Km(n,t,e,i,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,b){return f?new OffscreenCanvas(T,b):$s("canvas")}function v(T,b,W,it){let tt=1;if((T.width>it||T.height>it)&&(tt=it/Math.max(T.width,T.height)),tt<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let nt=b?Js:Math.floor,bt=nt(tt*T.width),ut=nt(tt*T.height);u===void 0&&(u=g(bt,ut));let pt=W?g(bt,ut):u;return pt.width=bt,pt.height=ut,pt.getContext("2d").drawImage(T,0,0,bt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+bt+"x"+ut+")."),pt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Aa(T.width)&&Aa(T.height)}function p(T){return a?!1:T.wrapS!==Qe||T.wrapT!==Qe||T.minFilter!==Me&&T.minFilter!==$t}function _(T,b){return T.generateMipmaps&&b&&T.minFilter!==Me&&T.minFilter!==$t}function x(T){n.generateMipmap(T)}function w(T,b,W,it,tt=!1){if(a===!1)return b;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let nt=b;if(b===n.RED&&(W===n.FLOAT&&(nt=n.R32F),W===n.HALF_FLOAT&&(nt=n.R16F),W===n.UNSIGNED_BYTE&&(nt=n.R8)),b===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(nt=n.R8UI),W===n.UNSIGNED_SHORT&&(nt=n.R16UI),W===n.UNSIGNED_INT&&(nt=n.R32UI),W===n.BYTE&&(nt=n.R8I),W===n.SHORT&&(nt=n.R16I),W===n.INT&&(nt=n.R32I)),b===n.RG&&(W===n.FLOAT&&(nt=n.RG32F),W===n.HALF_FLOAT&&(nt=n.RG16F),W===n.UNSIGNED_BYTE&&(nt=n.RG8)),b===n.RGBA){let bt=tt?Xs:ne.getTransfer(it);W===n.FLOAT&&(nt=n.RGBA32F),W===n.HALF_FLOAT&&(nt=n.RGBA16F),W===n.UNSIGNED_BYTE&&(nt=bt===he?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function C(T,b,W){return _(T,W)===!0||T.isFramebufferTexture&&T.minFilter!==Me&&T.minFilter!==$t?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function y(T){return T===Me||T===No||T===Wr?n.NEAREST:n.LINEAR}function A(T){let b=T.target;b.removeEventListener("dispose",A),M(b),b.isVideoTexture&&h.delete(b)}function O(T){let b=T.target;b.removeEventListener("dispose",O),F(b)}function M(T){let b=i.get(T);if(b.__webglInit===void 0)return;let W=T.source,it=d.get(W);if(it){let tt=it[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(T),Object.keys(it).length===0&&d.delete(W)}i.remove(T)}function S(T){let b=i.get(T);n.deleteTexture(b.__webglTexture);let W=T.source,it=d.get(W);delete it[b.__cacheKey],o.memory.textures--}function F(T){let b=T.texture,W=i.get(T),it=i.get(b);if(it.__webglTexture!==void 0&&(n.deleteTexture(it.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(W.__webglFramebuffer[tt]))for(let nt=0;nt<W.__webglFramebuffer[tt].length;nt++)n.deleteFramebuffer(W.__webglFramebuffer[tt][nt]);else n.deleteFramebuffer(W.__webglFramebuffer[tt]);W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[tt])}else{if(Array.isArray(W.__webglFramebuffer))for(let tt=0;tt<W.__webglFramebuffer.length;tt++)n.deleteFramebuffer(W.__webglFramebuffer[tt]);else n.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let tt=0;tt<W.__webglColorRenderbuffer.length;tt++)W.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[tt]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let tt=0,nt=b.length;tt<nt;tt++){let bt=i.get(b[tt]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),o.memory.textures--),i.remove(b[tt])}i.remove(b),i.remove(T)}let G=0;function K(){G=0}function D(){let T=G;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),G+=1,T}function P(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function k(T,b){let W=i.get(T);if(T.isVideoTexture&&re(T),T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){let it=T.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(W,T,b);return}}e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+b)}function Z(T,b){let W=i.get(T);if(T.version>0&&W.__version!==T.version){et(W,T,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+b)}function Y(T,b){let W=i.get(T);if(T.version>0&&W.__version!==T.version){et(W,T,b);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+b)}function z(T,b){let W=i.get(T);if(T.version>0&&W.__version!==T.version){rt(W,T,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+b)}let J={[Di]:n.REPEAT,[Qe]:n.CLAMP_TO_EDGE,[Ea]:n.MIRRORED_REPEAT},$={[Me]:n.NEAREST,[No]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[Ph]:n.LINEAR_MIPMAP_NEAREST,[je]:n.LINEAR_MIPMAP_LINEAR},st={[Vh]:n.NEVER,[Zh]:n.ALWAYS,[Gh]:n.LESS,[xc]:n.LEQUAL,[Wh]:n.EQUAL,[Yh]:n.GEQUAL,[Xh]:n.GREATER,[qh]:n.NOTEQUAL};function L(T,b,W){if(W?(n.texParameteri(T,n.TEXTURE_WRAP_S,J[b.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,J[b.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,J[b.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,$[b.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,$[b.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==Qe||b.wrapT!==Qe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,y(b.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,y(b.minFilter)),b.minFilter!==Me&&b.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,st[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let it=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Me||b.minFilter!==Wr&&b.minFilter!==je||b.type===Li&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ui&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(T,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function B(T,b){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",A));let it=b.source,tt=d.get(it);tt===void 0&&(tt={},d.set(it,tt));let nt=P(b);if(nt!==T.__cacheKey){tt[nt]===void 0&&(tt[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),tt[nt].usedTimes++;let bt=tt[T.__cacheKey];bt!==void 0&&(tt[T.__cacheKey].usedTimes--,bt.usedTimes===0&&S(b)),T.__cacheKey=nt,T.__webglTexture=tt[nt].texture}return W}function et(T,b,W){let it=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=n.TEXTURE_3D);let tt=B(T,b),nt=b.source;e.bindTexture(it,T.__webglTexture,n.TEXTURE0+W);let bt=i.get(nt);if(nt.version!==bt.__version||tt===!0){e.activeTexture(n.TEXTURE0+W);let ut=ne.getPrimaries(ne.workingColorSpace),pt=b.colorSpace===ii?null:ne.getPrimaries(b.colorSpace),Rt=b.colorSpace===ii||ut===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Ht=p(b)&&m(b.image)===!1,j=v(b.image,Ht,!1,s.maxTextureSize);j=Ut(b,j);let ie=m(j)||a,Yt=r.convert(b.format,b.colorSpace),Dt=r.convert(b.type),St=w(b.internalFormat,Yt,Dt,b.colorSpace,b.isVideoTexture);L(it,b,ie);let mt,zt=b.mipmaps,te=a&&b.isVideoTexture!==!0&&St!==mc,ge=bt.__version===void 0||tt===!0,Wt=C(b,j,ie);if(b.isDepthTexture)St=n.DEPTH_COMPONENT,a?b.type===Li?St=n.DEPTH_COMPONENT32F:b.type===Vi?St=n.DEPTH_COMPONENT24:b.type===rn?St=n.DEPTH24_STENCIL8:St=n.DEPTH_COMPONENT16:b.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===an&&St===n.DEPTH_COMPONENT&&b.type!==oo&&b.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Vi,Dt=r.convert(b.type)),b.format===Hn&&St===n.DEPTH_COMPONENT&&(St=n.DEPTH_STENCIL,b.type!==rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=rn,Dt=r.convert(b.type))),ge&&(te?e.texStorage2D(n.TEXTURE_2D,1,St,j.width,j.height):e.texImage2D(n.TEXTURE_2D,0,St,j.width,j.height,0,Yt,Dt,null));else if(b.isDataTexture)if(zt.length>0&&ie){te&&ge&&e.texStorage2D(n.TEXTURE_2D,Wt,St,zt[0].width,zt[0].height);for(let at=0,I=zt.length;at<I;at++)mt=zt[at],te?e.texSubImage2D(n.TEXTURE_2D,at,0,0,mt.width,mt.height,Yt,Dt,mt.data):e.texImage2D(n.TEXTURE_2D,at,St,mt.width,mt.height,0,Yt,Dt,mt.data);b.generateMipmaps=!1}else te?(ge&&e.texStorage2D(n.TEXTURE_2D,Wt,St,j.width,j.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,Yt,Dt,j.data)):e.texImage2D(n.TEXTURE_2D,0,St,j.width,j.height,0,Yt,Dt,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){te&&ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Wt,St,zt[0].width,zt[0].height,j.depth);for(let at=0,I=zt.length;at<I;at++)mt=zt[at],b.format!==se?Yt!==null?te?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,mt.width,mt.height,j.depth,Yt,mt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,St,mt.width,mt.height,j.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,mt.width,mt.height,j.depth,Yt,Dt,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,St,mt.width,mt.height,j.depth,0,Yt,Dt,mt.data)}else{te&&ge&&e.texStorage2D(n.TEXTURE_2D,Wt,St,zt[0].width,zt[0].height);for(let at=0,I=zt.length;at<I;at++)mt=zt[at],b.format!==se?Yt!==null?te?e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,mt.width,mt.height,Yt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,at,St,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(n.TEXTURE_2D,at,0,0,mt.width,mt.height,Yt,Dt,mt.data):e.texImage2D(n.TEXTURE_2D,at,St,mt.width,mt.height,0,Yt,Dt,mt.data)}else if(b.isDataArrayTexture)te?(ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Wt,St,j.width,j.height,j.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Yt,Dt,j.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,j.width,j.height,j.depth,0,Yt,Dt,j.data);else if(b.isData3DTexture)te?(ge&&e.texStorage3D(n.TEXTURE_3D,Wt,St,j.width,j.height,j.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Yt,Dt,j.data)):e.texImage3D(n.TEXTURE_3D,0,St,j.width,j.height,j.depth,0,Yt,Dt,j.data);else if(b.isFramebufferTexture){if(ge)if(te)e.texStorage2D(n.TEXTURE_2D,Wt,St,j.width,j.height);else{let at=j.width,I=j.height;for(let ct=0;ct<Wt;ct++)e.texImage2D(n.TEXTURE_2D,ct,St,at,I,0,Yt,Dt,null),at>>=1,I>>=1}}else if(zt.length>0&&ie){te&&ge&&e.texStorage2D(n.TEXTURE_2D,Wt,St,zt[0].width,zt[0].height);for(let at=0,I=zt.length;at<I;at++)mt=zt[at],te?e.texSubImage2D(n.TEXTURE_2D,at,0,0,Yt,Dt,mt):e.texImage2D(n.TEXTURE_2D,at,St,Yt,Dt,mt);b.generateMipmaps=!1}else te?(ge&&e.texStorage2D(n.TEXTURE_2D,Wt,St,j.width,j.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Yt,Dt,j)):e.texImage2D(n.TEXTURE_2D,0,St,Yt,Dt,j);_(b,ie)&&x(it),bt.__version=nt.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function rt(T,b,W){if(b.image.length!==6)return;let it=B(T,b),tt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+W);let nt=i.get(tt);if(tt.version!==nt.__version||it===!0){e.activeTexture(n.TEXTURE0+W);let bt=ne.getPrimaries(ne.workingColorSpace),ut=b.colorSpace===ii?null:ne.getPrimaries(b.colorSpace),pt=b.colorSpace===ii||bt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Rt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ht=b.image[0]&&b.image[0].isDataTexture,j=[];for(let at=0;at<6;at++)!Rt&&!Ht?j[at]=v(b.image[at],!1,!0,s.maxCubemapSize):j[at]=Ht?b.image[at].image:b.image[at],j[at]=Ut(b,j[at]);let ie=j[0],Yt=m(ie)||a,Dt=r.convert(b.format,b.colorSpace),St=r.convert(b.type),mt=w(b.internalFormat,Dt,St,b.colorSpace),zt=a&&b.isVideoTexture!==!0,te=nt.__version===void 0||it===!0,ge=C(b,ie,Yt);L(n.TEXTURE_CUBE_MAP,b,Yt);let Wt;if(Rt){zt&&te&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ge,mt,ie.width,ie.height);for(let at=0;at<6;at++){Wt=j[at].mipmaps;for(let I=0;I<Wt.length;I++){let ct=Wt[I];b.format!==se?Dt!==null?zt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,0,0,ct.width,ct.height,Dt,ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,mt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,0,0,ct.width,ct.height,Dt,St,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,I,mt,ct.width,ct.height,0,Dt,St,ct.data)}}}else{Wt=b.mipmaps,zt&&te&&(Wt.length>0&&ge++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ge,mt,j[0].width,j[0].height));for(let at=0;at<6;at++)if(Ht){zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,j[at].width,j[at].height,Dt,St,j[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,mt,j[at].width,j[at].height,0,Dt,St,j[at].data);for(let I=0;I<Wt.length;I++){let ht=Wt[I].image[at].image;zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,0,0,ht.width,ht.height,Dt,St,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,mt,ht.width,ht.height,0,Dt,St,ht.data)}}else{zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Dt,St,j[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,mt,Dt,St,j[at]);for(let I=0;I<Wt.length;I++){let ct=Wt[I];zt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,0,0,Dt,St,ct.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,I+1,mt,Dt,St,ct.image[at])}}}_(b,Yt)&&x(n.TEXTURE_CUBE_MAP),nt.__version=tt.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function lt(T,b,W,it,tt,nt){let bt=r.convert(W.format,W.colorSpace),ut=r.convert(W.type),pt=w(W.internalFormat,bt,ut,W.colorSpace);if(!i.get(b).__hasExternalTextures){let Ht=Math.max(1,b.width>>nt),j=Math.max(1,b.height>>nt);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,nt,pt,Ht,j,b.depth,0,bt,ut,null):e.texImage2D(tt,nt,pt,Ht,j,0,bt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),gt(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,tt,i.get(W).__webglTexture,0,Ct(b)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,tt,i.get(W).__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(T,b,W){if(n.bindRenderbuffer(n.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let it=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(W||gt(b)){let tt=b.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Li?it=n.DEPTH_COMPONENT32F:tt.type===Vi&&(it=n.DEPTH_COMPONENT24));let nt=Ct(b);gt(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,it,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,it,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,it,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){let it=Ct(b);W&&gt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,n.DEPTH24_STENCIL8,b.width,b.height):gt(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{let it=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let tt=0;tt<it.length;tt++){let nt=it[tt],bt=r.convert(nt.format,nt.colorSpace),ut=r.convert(nt.type),pt=w(nt.internalFormat,bt,ut,nt.colorSpace),Rt=Ct(b);W&&gt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,pt,b.width,b.height):gt(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,pt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);let it=i.get(b.depthTexture).__webglTexture,tt=Ct(b);if(b.depthTexture.format===an)gt(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(b.depthTexture.format===Hn)gt(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function vt(T){let b=i.get(T),W=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");yt(b.__webglFramebuffer,T)}else if(W){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]=n.createRenderbuffer(),_t(b.__webglDepthbuffer[it],T,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),_t(b.__webglDepthbuffer,T,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(T,b,W){let it=i.get(T);b!==void 0&&lt(it.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&vt(T)}function H(T){let b=T.texture,W=i.get(T),it=i.get(b);T.addEventListener("dispose",O),T.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=b.version,o.memory.textures++);let tt=T.isWebGLCubeRenderTarget===!0,nt=T.isWebGLMultipleRenderTargets===!0,bt=m(T)||a;if(tt){W.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[ut]=[];for(let pt=0;pt<b.mipmaps.length;pt++)W.__webglFramebuffer[ut][pt]=n.createFramebuffer()}else W.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)W.__webglFramebuffer[ut]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(nt)if(s.drawBuffers){let ut=T.texture;for(let pt=0,Rt=ut.length;pt<Rt;pt++){let Ht=i.get(ut[pt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&gt(T)===!1){let ut=nt?b:[b];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let pt=0;pt<ut.length;pt++){let Rt=ut[pt];W.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[pt]);let Ht=r.convert(Rt.format,Rt.colorSpace),j=r.convert(Rt.type),ie=w(Rt.internalFormat,Ht,j,Rt.colorSpace,T.isXRRenderTarget===!0),Yt=Ct(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,ie,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,W.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(W.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),L(n.TEXTURE_CUBE_MAP,b,bt);for(let ut=0;ut<6;ut++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)lt(W.__webglFramebuffer[ut][pt],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else lt(W.__webglFramebuffer[ut],T,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);_(b,bt)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){let ut=T.texture;for(let pt=0,Rt=ut.length;pt<Rt;pt++){let Ht=ut[pt],j=i.get(Ht);e.bindTexture(n.TEXTURE_2D,j.__webglTexture),L(n.TEXTURE_2D,Ht,bt),lt(W.__webglFramebuffer,T,Ht,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),_(Ht,bt)&&x(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?ut=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,it.__webglTexture),L(ut,b,bt),a&&b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)lt(W.__webglFramebuffer[pt],T,b,n.COLOR_ATTACHMENT0,ut,pt);else lt(W.__webglFramebuffer,T,b,n.COLOR_ATTACHMENT0,ut,0);_(b,bt)&&x(ut),e.unbindTexture()}T.depthBuffer&&vt(T)}function fe(T){let b=m(T)||a,W=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let it=0,tt=W.length;it<tt;it++){let nt=W[it];if(_(nt,b)){let bt=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ut=i.get(nt).__webglTexture;e.bindTexture(bt,ut),x(bt),e.unbindTexture()}}}function Mt(T){if(a&&T.samples>0&&gt(T)===!1){let b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],W=T.width,it=T.height,tt=n.COLOR_BUFFER_BIT,nt=[],bt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(T),pt=T.isWebGLMultipleRenderTargets===!0;if(pt)for(let Rt=0;Rt<b.length;Rt++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Rt=0;Rt<b.length;Rt++){nt.push(n.COLOR_ATTACHMENT0+Rt),T.depthBuffer&&nt.push(bt);let Ht=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Ht===!1&&(T.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),pt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[Rt]),Ht===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[bt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[bt])),pt){let j=i.get(b[Rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,W,it,0,0,W,it,tt,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let Rt=0;Rt<b.length;Rt++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,ut.__webglColorRenderbuffer[Rt]);let Ht=i.get(b[Rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,Ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function Ct(T){return Math.min(s.maxSamples,T.samples)}function gt(T){let b=i.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function re(T){let b=o.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function Ut(T,b){let W=T.colorSpace,it=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Ta||W!==ci&&W!==ii&&(ne.getTransfer(W)===he?a===!1?t.has("EXT_sRGB")===!0&&it===se?(T.format=Ta,T.minFilter=$t,T.generateMipmaps=!1):b=Ks.sRGBToLinear(b):(it!==se||tt!==Ce)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}this.allocateTextureUnit=D,this.resetTextureUnits=K,this.setTexture2D=k,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=Lt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=gt}function Qm(n,t,e){let i=e.isWebGL2;function s(r,o=ii){let a,l=ne.getTransfer(o);if(r===Ce)return n.UNSIGNED_BYTE;if(r===hc)return n.UNSIGNED_SHORT_4_4_4_4;if(r===uc)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Lh)return n.BYTE;if(r===Ih)return n.SHORT;if(r===oo)return n.UNSIGNED_SHORT;if(r===cc)return n.INT;if(r===Vi)return n.UNSIGNED_INT;if(r===Li)return n.FLOAT;if(r===Ui)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Dh)return n.ALPHA;if(r===se)return n.RGBA;if(r===Uh)return n.LUMINANCE;if(r===Fh)return n.LUMINANCE_ALPHA;if(r===an)return n.DEPTH_COMPONENT;if(r===Hn)return n.DEPTH_STENCIL;if(r===Ta)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Nh)return n.RED;if(r===dc)return n.RED_INTEGER;if(r===Oh)return n.RG;if(r===fc)return n.RG_INTEGER;if(r===pc)return n.RGBA_INTEGER;if(r===Xr||r===qr||r===Yr||r===Zr)if(l===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Oo||r===Bo||r===zo||r===ko)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ko)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ho||r===Vo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ho)return l===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Vo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Go||r===Wo||r===Xo||r===qo||r===Yo||r===Zo||r===Jo||r===$o||r===Ko||r===Qo||r===jo||r===tl||r===el||r===il)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Go)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$o)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ko)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jo)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tl)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===el)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===il)return l===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jr||r===nl||r===sl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Jr)return l===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bh||r===rl||r===al||r===ol)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Jr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===rl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===al)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ol)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===rn?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var ka=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Xe=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},jm={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Xe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ha=class extends qi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=e.getContextAttributes(),m=null,p=null,_=[],x=[],w=new xt,C=null,y=new Ve;y.layers.enable(1),y.viewport=new ce;let A=new Ve;A.layers.enable(2),A.viewport=new ce;let O=[y,A],M=new ka;M.layers.enable(1),M.layers.enable(2);let S=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let B=_[L];return B===void 0&&(B=new ss,_[L]=B),B.getTargetRaySpace()},this.getControllerGrip=function(L){let B=_[L];return B===void 0&&(B=new ss,_[L]=B),B.getGripSpace()},this.getHand=function(L){let B=_[L];return B===void 0&&(B=new ss,_[L]=B),B.getHandSpace()};function G(L){let B=x.indexOf(L.inputSource);if(B===-1)return;let et=_[B];et!==void 0&&(et.update(L.inputSource,L.frame,c||o),et.dispatchEvent({type:L.type,data:L.inputSource}))}function K(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",D);for(let L=0;L<_.length;L++){let B=x[L];B!==null&&(x[L]=null,_[L].disconnect(B))}S=null,F=null,t.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,st.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",K),s.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let B={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,B),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new de(f.framebufferWidth,f.framebufferHeight,{format:se,type:Ce,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let B=null,et=null,rt=null;v.depth&&(rt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,B=v.stencil?Hn:an,et=v.stencil?rn:Vi);let lt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new de(d.textureWidth,d.textureHeight,{format:se,type:Ce,depthTexture:new hn(d.textureWidth,d.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let _t=t.properties.get(p);_t.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(L){for(let B=0;B<L.removed.length;B++){let et=L.removed[B],rt=x.indexOf(et);rt>=0&&(x[rt]=null,_[rt].disconnect(et))}for(let B=0;B<L.added.length;B++){let et=L.added[B],rt=x.indexOf(et);if(rt===-1){for(let _t=0;_t<_.length;_t++)if(_t>=x.length){x.push(et),rt=_t;break}else if(x[_t]===null){x[_t]=et,rt=_t;break}if(rt===-1)break}let lt=_[rt];lt&&lt.connect(et)}}let P=new R,k=new R;function Z(L,B,et){P.setFromMatrixPosition(B.matrixWorld),k.setFromMatrixPosition(et.matrixWorld);let rt=P.distanceTo(k),lt=B.projectionMatrix.elements,_t=et.projectionMatrix.elements,yt=lt[14]/(lt[10]-1),vt=lt[14]/(lt[10]+1),Lt=(lt[9]+1)/lt[5],H=(lt[9]-1)/lt[5],fe=(lt[8]-1)/lt[0],Mt=(_t[8]+1)/_t[0],Ct=yt*fe,gt=yt*Mt,re=rt/(-fe+Mt),Ut=re*-fe;B.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Ut),L.translateZ(re),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();let T=yt+re,b=vt+re,W=Ct-Ut,it=gt+(rt-Ut),tt=Lt*vt/b*T,nt=H*vt/b*T;L.projectionMatrix.makePerspective(W,it,tt,nt,T,b),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function Y(L,B){B===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(B.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;M.near=A.near=y.near=L.near,M.far=A.far=y.far=L.far,(S!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,F=M.far);let B=L.parent,et=M.cameras;Y(M,B);for(let rt=0;rt<et.length;rt++)Y(et[rt],B);et.length===2?Z(M,y,A):M.projectionMatrix.copy(y.projectionMatrix),z(L,M,B)};function z(L,B,et){et===null?L.matrix.copy(B.matrixWorld):(L.matrix.copy(et.matrixWorld),L.matrix.invert(),L.matrix.multiply(B.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(B.projectionMatrix),L.projectionMatrixInverse.copy(B.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=as*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(L){l=L,d!==null&&(d.fixedFoveation=L),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=L)};let J=null;function $(L,B){if(h=B.getViewerPose(c||o),g=B,h!==null){let et=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let rt=!1;et.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let lt=0;lt<et.length;lt++){let _t=et[lt],yt=null;if(f!==null)yt=f.getViewport(_t);else{let Lt=u.getViewSubImage(d,_t);yt=Lt.viewport,lt===0&&(t.setRenderTargetTextures(p,Lt.colorTexture,d.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(p))}let vt=O[lt];vt===void 0&&(vt=new Ve,vt.layers.enable(lt),vt.viewport=new ce,O[lt]=vt),vt.matrix.fromArray(_t.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(_t.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(yt.x,yt.y,yt.width,yt.height),lt===0&&(M.matrix.copy(vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(vt)}}for(let et=0;et<_.length;et++){let rt=x[et],lt=_[et];rt!==null&&lt!==void 0&&lt.update(rt,B,c||o)}J&&J(L,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),g=null}let st=new bc;st.setAnimationLoop($),this.setAnimationLoop=function(L){J=L},this.dispose=function(){}}};function t0(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function e0(n,t,e,i){let s={},r={},o=[],a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){let w=x.program;i.uniformBlockBinding(_,w)}function c(_,x){let w=s[_.id];w===void 0&&(g(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",m));let C=x.program;i.updateUBOMapping(_,C);let y=t.render.frame;r[_.id]!==y&&(d(_),r[_.id]=y)}function h(_){let x=u();_.__bindingPointIndex=x;let w=n.createBuffer(),C=_.__size,y=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,C,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,w),w}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let x=s[_.id],w=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let y=0,A=w.length;y<A;y++){let O=Array.isArray(w[y])?w[y]:[w[y]];for(let M=0,S=O.length;M<S;M++){let F=O[M];if(f(F,y,M,C)===!0){let G=F.__offset,K=Array.isArray(F.value)?F.value:[F.value],D=0;for(let P=0;P<K.length;P++){let k=K[P],Z=v(k);typeof k=="number"||typeof k=="boolean"?(F.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,G+D,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=0,F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=0,F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=0):(k.toArray(F.__data,D),D+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,x,w,C){let y=_.value,A=x+"_"+w;if(C[A]===void 0)return typeof y=="number"||typeof y=="boolean"?C[A]=y:C[A]=y.clone(),!0;{let O=C[A];if(typeof y=="number"||typeof y=="boolean"){if(O!==y)return C[A]=y,!0}else if(O.equals(y)===!1)return O.copy(y),!0}return!1}function g(_){let x=_.uniforms,w=0,C=16;for(let A=0,O=x.length;A<O;A++){let M=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,F=M.length;S<F;S++){let G=M[S],K=Array.isArray(G.value)?G.value:[G.value];for(let D=0,P=K.length;D<P;D++){let k=K[D],Z=v(k),Y=w%C;Y!==0&&C-Y<Z.boundary&&(w+=C-Y),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=Z.storage}}}let y=w%C;return y>0&&(w+=C-y),_.__size=w,_.__cache={},this}function v(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){let x=_.target;x.removeEventListener("dispose",m);let w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var cs=class{constructor(t={}){let{canvas:e=cu(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this._useLegacyLights=!1,this.toneMapping=vi,this.toneMappingExposure=1;let x=this,w=!1,C=0,y=0,A=null,O=-1,M=null,S=new ce,F=new ce,G=null,K=new Zt(0),D=0,P=e.width,k=e.height,Z=1,Y=null,z=null,J=new ce(0,0,P,k),$=new ce(0,0,P,k),st=!1,L=new ls,B=!1,et=!1,rt=null,lt=new Gt,_t=new xt,yt=new R,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return A===null?Z:1}let H=i;function fe(E,N){for(let X=0;X<E.length;X++){let q=E[X],V=e.getContext(q,N);if(V!==null)return V}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${so}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ct,!1),H===null){let N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),H=fe(N,E),H===null)throw fe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Mt,Ct,gt,re,Ut,T,b,W,it,tt,nt,bt,ut,pt,Rt,Ht,j,ie,Yt,Dt,St,mt,zt,te;function ge(){Mt=new yp(H),Ct=new pp(H,Mt,t),Mt.init(Ct),mt=new Qm(H,Mt,Ct),gt=new $m(H,Mt,Ct),re=new wp(H),Ut=new Bm,T=new Km(H,Mt,gt,Ut,Ct,mt,re),b=new gp(x),W=new _p(x),it=new Pu(H,Ct),zt=new dp(H,Mt,it,Ct),tt=new Mp(H,it,re,zt),nt=new Ap(H,tt,it,re),Yt=new Tp(H,Ct,T),Ht=new mp(Ut),bt=new Om(x,b,W,Mt,Ct,zt,Ht),ut=new t0(x,Ut),pt=new km,Rt=new qm(Mt,Ct),ie=new up(x,b,W,gt,nt,d,l),j=new Jm(x,nt,Ct),te=new e0(H,re,Ct,gt),Dt=new fp(H,Mt,re,Ct),St=new bp(H,Mt,re,Ct),re.programs=bt.programs,x.capabilities=Ct,x.extensions=Mt,x.properties=Ut,x.renderLists=pt,x.shadowMap=j,x.state=gt,x.info=re}ge();let Wt=new Ha(x,H);this.xr=Wt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let E=Mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(P,k,!1))},this.getSize=function(E){return E.set(P,k)},this.setSize=function(E,N,X=!0){if(Wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=E,k=N,e.width=Math.floor(E*Z),e.height=Math.floor(N*Z),X===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(P*Z,k*Z).floor()},this.setDrawingBufferSize=function(E,N,X){P=E,k=N,Z=X,e.width=Math.floor(E*X),e.height=Math.floor(N*X),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,N,X,q){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,N,X,q),gt.viewport(S.copy(J).multiplyScalar(Z).floor())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,N,X,q){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,N,X,q),gt.scissor(F.copy($).multiplyScalar(Z).floor())},this.getScissorTest=function(){return st},this.setScissorTest=function(E){gt.setScissorTest(st=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(E=!0,N=!0,X=!0){let q=0;if(E){let V=!1;if(A!==null){let ft=A.texture.format;V=ft===pc||ft===fc||ft===dc}if(V){let ft=A.texture.type,wt=ft===Ce||ft===Vi||ft===oo||ft===rn||ft===hc||ft===uc,At=ie.getClearColor(),It=ie.getClearAlpha(),Vt=At.r,Ft=At.g,Bt=At.b;wt?(f[0]=Vt,f[1]=Ft,f[2]=Bt,f[3]=It,H.clearBufferuiv(H.COLOR,0,f)):(g[0]=Vt,g[1]=Ft,g[2]=Bt,g[3]=It,H.clearBufferiv(H.COLOR,0,g))}else q|=H.COLOR_BUFFER_BIT}N&&(q|=H.DEPTH_BUFFER_BIT),X&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),pt.dispose(),Rt.dispose(),Ut.dispose(),b.dispose(),W.dispose(),nt.dispose(),zt.dispose(),te.dispose(),bt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Be),Wt.removeEventListener("sessionend",le),rt&&(rt.dispose(),rt=null),ze.stop()};function at(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=re.autoReset,N=j.enabled,X=j.autoUpdate,q=j.needsUpdate,V=j.type;ge(),re.autoReset=E,j.enabled=N,j.autoUpdate=X,j.needsUpdate=q,j.type=V}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ht(E){let N=E.target;N.removeEventListener("dispose",ht),Pt(N)}function Pt(E){Tt(E),Ut.remove(E)}function Tt(E){let N=Ut.get(E).programs;N!==void 0&&(N.forEach(function(X){bt.releaseProgram(X)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,X,q,V,ft){N===null&&(N=vt);let wt=V.isMesh&&V.matrixWorld.determinant()<0,At=Zc(E,N,X,q,V);gt.setMaterial(q,wt);let It=X.index,Vt=1;if(q.wireframe===!0){if(It=tt.getWireframeAttribute(X),It===void 0)return;Vt=2}let Ft=X.drawRange,Bt=X.attributes.position,_e=Ft.start*Vt,Je=(Ft.start+Ft.count)*Vt;ft!==null&&(_e=Math.max(_e,ft.start*Vt),Je=Math.min(Je,(ft.start+ft.count)*Vt)),It!==null?(_e=Math.max(_e,0),Je=Math.min(Je,It.count)):Bt!=null&&(_e=Math.max(_e,0),Je=Math.min(Je,Bt.count));let Ee=Je-_e;if(Ee<0||Ee===1/0)return;zt.setup(V,q,At,X,It);let bi,pe=Dt;if(It!==null&&(bi=it.get(It),pe=St,pe.setIndex(bi)),V.isMesh)q.wireframe===!0?(gt.setLineWidth(q.wireframeLinewidth*Lt()),pe.setMode(H.LINES)):pe.setMode(H.TRIANGLES);else if(V.isLine){let Xt=q.linewidth;Xt===void 0&&(Xt=1),gt.setLineWidth(Xt*Lt()),V.isLineSegments?pe.setMode(H.LINES):V.isLineLoop?pe.setMode(H.LINE_LOOP):pe.setMode(H.LINE_STRIP)}else V.isPoints?pe.setMode(H.POINTS):V.isSprite&&pe.setMode(H.TRIANGLES);if(V.isBatchedMesh)pe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)pe.renderInstances(_e,Ee,V.count);else if(X.isInstancedBufferGeometry){let Xt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,kr=Math.min(X.instanceCount,Xt);pe.renderInstances(_e,Ee,kr)}else pe.render(_e,Ee)};function ae(E,N,X){E.transparent===!0&&E.side===Ge&&E.forceSinglePass===!1?(E.side=Fe,E.needsUpdate=!0,gs(E,N,X),E.side=Xi,E.needsUpdate=!0,gs(E,N,X),E.side=Ge):gs(E,N,X)}this.compile=function(E,N,X=null){X===null&&(X=E),m=Rt.get(X),m.init(),_.push(m),X.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),E!==X&&E.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);let q=new Set;return E.traverse(function(V){let ft=V.material;if(ft)if(Array.isArray(ft))for(let wt=0;wt<ft.length;wt++){let At=ft[wt];ae(At,X,V),q.add(At)}else ae(ft,X,V),q.add(ft)}),_.pop(),m=null,q},this.compileAsync=function(E,N,X=null){let q=this.compile(E,N,X);return new Promise(V=>{function ft(){if(q.forEach(function(wt){Ut.get(wt).currentProgram.isReady()&&q.delete(wt)}),q.size===0){V(E);return}setTimeout(ft,10)}Mt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let oe=null;function Se(E){oe&&oe(E)}function Be(){ze.stop()}function le(){ze.start()}let ze=new bc;ze.setAnimationLoop(Se),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(E){oe=E,Wt.setAnimationLoop(E),E===null?ze.stop():ze.start()},Wt.addEventListener("sessionstart",Be),Wt.addEventListener("sessionend",le),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(N),N=Wt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,A),m=Rt.get(E,_.length),m.init(),_.push(m),lt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),L.setFromProjectionMatrix(lt),et=this.localClippingEnabled,B=Ht.init(this.clippingPlanes,et),v=pt.get(E,p.length),v.init(),p.push(v),mi(E,N,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(Y,z),this.info.render.frame++,B===!0&&Ht.beginShadows();let X=m.state.shadowsArray;if(j.render(X,E,N),B===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(v,E),m.setupLights(x._useLegacyLights),N.isArrayCamera){let q=N.cameras;for(let V=0,ft=q.length;V<ft;V++){let wt=q[V];So(v,E,wt,wt.viewport)}}else So(v,E,N);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(x,E,N),zt.resetDefaultState(),O=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function mi(E,N,X,q){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||L.intersectsSprite(E)){q&&yt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(lt);let wt=nt.update(E),At=E.material;At.visible&&v.push(E,wt,At,X,yt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||L.intersectsObject(E))){let wt=nt.update(E),At=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),yt.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),yt.copy(wt.boundingSphere.center)),yt.applyMatrix4(E.matrixWorld).applyMatrix4(lt)),Array.isArray(At)){let It=wt.groups;for(let Vt=0,Ft=It.length;Vt<Ft;Vt++){let Bt=It[Vt],_e=At[Bt.materialIndex];_e&&_e.visible&&v.push(E,wt,_e,X,yt.z,Bt)}}else At.visible&&v.push(E,wt,At,X,yt.z,null)}}let ft=E.children;for(let wt=0,At=ft.length;wt<At;wt++)mi(ft[wt],N,X,q)}function So(E,N,X,q){let V=E.opaque,ft=E.transmissive,wt=E.transparent;m.setupLightsView(X),B===!0&&Ht.setGlobalState(x.clippingPlanes,X),ft.length>0&&Yc(V,ft,N,X),q&&gt.viewport(S.copy(q)),V.length>0&&ms(V,N,X),ft.length>0&&ms(ft,N,X),wt.length>0&&ms(wt,N,X),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Yc(E,N,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let ft=Ct.isWebGL2;rt===null&&(rt=new de(1,1,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Ui:Ce,minFilter:je,samples:ft?4:0})),x.getDrawingBufferSize(_t),ft?rt.setSize(_t.x,_t.y):rt.setSize(Js(_t.x),Js(_t.y));let wt=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(K),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();let At=x.toneMapping;x.toneMapping=vi,ms(E,X,q),T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt);let It=!1;for(let Vt=0,Ft=N.length;Vt<Ft;Vt++){let Bt=N[Vt],_e=Bt.object,Je=Bt.geometry,Ee=Bt.material,bi=Bt.group;if(Ee.side===Ge&&_e.layers.test(q.layers)){let pe=Ee.side;Ee.side=Fe,Ee.needsUpdate=!0,Eo(_e,X,q,Je,Ee,bi),Ee.side=pe,Ee.needsUpdate=!0,It=!0}}It===!0&&(T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt)),x.setRenderTarget(wt),x.setClearColor(K,D),x.toneMapping=At}function ms(E,N,X){let q=N.isScene===!0?N.overrideMaterial:null;for(let V=0,ft=E.length;V<ft;V++){let wt=E[V],At=wt.object,It=wt.geometry,Vt=q===null?wt.material:q,Ft=wt.group;At.layers.test(X.layers)&&Eo(At,N,X,It,Vt,Ft)}}function Eo(E,N,X,q,V,ft){E.onBeforeRender(x,N,X,q,V,ft),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(x,N,X,q,E,ft),V.transparent===!0&&V.side===Ge&&V.forceSinglePass===!1?(V.side=Fe,V.needsUpdate=!0,x.renderBufferDirect(X,N,q,V,E,ft),V.side=Xi,V.needsUpdate=!0,x.renderBufferDirect(X,N,q,V,E,ft),V.side=Ge):x.renderBufferDirect(X,N,q,V,E,ft),E.onAfterRender(x,N,X,q,V,ft)}function gs(E,N,X){N.isScene!==!0&&(N=vt);let q=Ut.get(E),V=m.state.lights,ft=m.state.shadowsArray,wt=V.state.version,At=bt.getParameters(E,V.state,ft,N,X),It=bt.getProgramCacheKey(At),Vt=q.programs;q.environment=E.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(E.isMeshStandardMaterial?W:b).get(E.envMap||q.environment),Vt===void 0&&(E.addEventListener("dispose",ht),Vt=new Map,q.programs=Vt);let Ft=Vt.get(It);if(Ft!==void 0){if(q.currentProgram===Ft&&q.lightsStateVersion===wt)return Ao(E,At),Ft}else At.uniforms=bt.getUniforms(E),E.onBuild(X,At,x),E.onBeforeCompile(At,x),Ft=bt.acquireProgram(At,It),Vt.set(It,Ft),q.uniforms=At.uniforms;let Bt=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=Ht.uniform),Ao(E,At),q.needsLights=$c(E),q.lightsStateVersion=wt,q.needsLights&&(Bt.ambientLightColor.value=V.state.ambient,Bt.lightProbe.value=V.state.probe,Bt.directionalLights.value=V.state.directional,Bt.directionalLightShadows.value=V.state.directionalShadow,Bt.spotLights.value=V.state.spot,Bt.spotLightShadows.value=V.state.spotShadow,Bt.rectAreaLights.value=V.state.rectArea,Bt.ltc_1.value=V.state.rectAreaLTC1,Bt.ltc_2.value=V.state.rectAreaLTC2,Bt.pointLights.value=V.state.point,Bt.pointLightShadows.value=V.state.pointShadow,Bt.hemisphereLights.value=V.state.hemi,Bt.directionalShadowMap.value=V.state.directionalShadowMap,Bt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Bt.spotShadowMap.value=V.state.spotShadowMap,Bt.spotLightMatrix.value=V.state.spotLightMatrix,Bt.spotLightMap.value=V.state.spotLightMap,Bt.pointShadowMap.value=V.state.pointShadowMap,Bt.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Ft,q.uniformsList=null,Ft}function To(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=Bn.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ao(E,N){let X=Ut.get(E);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Zc(E,N,X,q,V){N.isScene!==!0&&(N=vt),T.resetTextureUnits();let ft=N.fog,wt=q.isMeshStandardMaterial?N.environment:null,At=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ci,It=(q.isMeshStandardMaterial?W:b).get(q.envMap||wt),Vt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ft=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Bt=!!X.morphAttributes.position,_e=!!X.morphAttributes.normal,Je=!!X.morphAttributes.color,Ee=vi;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ee=x.toneMapping);let bi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pe=bi!==void 0?bi.length:0,Xt=Ut.get(q),kr=m.state.lights;if(B===!0&&(et===!0||E!==M)){let ti=E===M&&q.id===O;Ht.setState(q,E,ti)}let ve=!1;q.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==kr.state.version||Xt.outputColorSpace!==At||V.isBatchedMesh&&Xt.batching===!1||!V.isBatchedMesh&&Xt.batching===!0||V.isInstancedMesh&&Xt.instancing===!1||!V.isInstancedMesh&&Xt.instancing===!0||V.isSkinnedMesh&&Xt.skinning===!1||!V.isSkinnedMesh&&Xt.skinning===!0||V.isInstancedMesh&&Xt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xt.instancingColor===!1&&V.instanceColor!==null||Xt.envMap!==It||q.fog===!0&&Xt.fog!==ft||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Ht.numPlanes||Xt.numIntersection!==Ht.numIntersection)||Xt.vertexAlphas!==Vt||Xt.vertexTangents!==Ft||Xt.morphTargets!==Bt||Xt.morphNormals!==_e||Xt.morphColors!==Je||Xt.toneMapping!==Ee||Ct.isWebGL2===!0&&Xt.morphTargetsCount!==pe)&&(ve=!0):(ve=!0,Xt.__version=q.version);let $i=Xt.currentProgram;ve===!0&&($i=gs(q,N,V));let Ro=!1,$n=!1,Hr=!1,Le=$i.getUniforms(),Ki=Xt.uniforms;if(gt.useProgram($i.program)&&(Ro=!0,$n=!0,Hr=!0),q.id!==O&&(O=q.id,$n=!0),Ro||M!==E){Le.setValue(H,"projectionMatrix",E.projectionMatrix),Le.setValue(H,"viewMatrix",E.matrixWorldInverse);let ti=Le.map.cameraPosition;ti!==void 0&&ti.setValue(H,yt.setFromMatrixPosition(E.matrixWorld)),Ct.logarithmicDepthBuffer&&Le.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Le.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,$n=!0,Hr=!0)}if(V.isSkinnedMesh){Le.setOptional(H,V,"bindMatrix"),Le.setOptional(H,V,"bindMatrixInverse");let ti=V.skeleton;ti&&(Ct.floatVertexTextures?(ti.boneTexture===null&&ti.computeBoneTexture(),Le.setValue(H,"boneTexture",ti.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Le.setOptional(H,V,"batchingTexture"),Le.setValue(H,"batchingTexture",V._matricesTexture,T));let Vr=X.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0&&Ct.isWebGL2===!0)&&Yt.update(V,X,$i),($n||Xt.receiveShadow!==V.receiveShadow)&&(Xt.receiveShadow=V.receiveShadow,Le.setValue(H,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ki.envMap.value=It,Ki.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),$n&&(Le.setValue(H,"toneMappingExposure",x.toneMappingExposure),Xt.needsLights&&Jc(Ki,Hr),ft&&q.fog===!0&&ut.refreshFogUniforms(Ki,ft),ut.refreshMaterialUniforms(Ki,q,Z,k,rt),Bn.upload(H,To(Xt),Ki,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Bn.upload(H,To(Xt),Ki,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Le.setValue(H,"center",V.center),Le.setValue(H,"modelViewMatrix",V.modelViewMatrix),Le.setValue(H,"normalMatrix",V.normalMatrix),Le.setValue(H,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let ti=q.uniformsGroups;for(let Gr=0,Kc=ti.length;Gr<Kc;Gr++)if(Ct.isWebGL2){let Co=ti[Gr];te.update(Co,$i),te.bind(Co,$i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $i}function Jc(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function $c(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,N,X){Ut.get(E.texture).__webglTexture=N,Ut.get(E.depthTexture).__webglTexture=X;let q=Ut.get(E);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){let X=Ut.get(E);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,X=0){A=E,C=N,y=X;let q=!0,V=null,ft=!1,wt=!1;if(E){let It=Ut.get(E);It.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(H.FRAMEBUFFER,null),q=!1):It.__webglFramebuffer===void 0?T.setupRenderTarget(E):It.__hasExternalTextures&&T.rebindTextures(E,Ut.get(E.texture).__webglTexture,Ut.get(E.depthTexture).__webglTexture);let Vt=E.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(wt=!0);let Ft=Ut.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?V=Ft[N][X]:V=Ft[N],ft=!0):Ct.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?V=Ut.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?V=Ft[X]:V=Ft,S.copy(E.viewport),F.copy(E.scissor),G=E.scissorTest}else S.copy(J).multiplyScalar(Z).floor(),F.copy($).multiplyScalar(Z).floor(),G=st;if(gt.bindFramebuffer(H.FRAMEBUFFER,V)&&Ct.drawBuffers&&q&&gt.drawBuffers(E,V),gt.viewport(S),gt.scissor(F),gt.setScissorTest(G),ft){let It=Ut.get(E.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+N,It.__webglTexture,X)}else if(wt){let It=Ut.get(E.texture),Vt=N||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.__webglTexture,X||0,Vt)}O=-1},this.readRenderTargetPixels=function(E,N,X,q,V,ft,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Ut.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){gt.bindFramebuffer(H.FRAMEBUFFER,At);try{let It=E.texture,Vt=It.format,Ft=It.type;if(Vt!==se&&mt.convert(Vt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Bt=Ft===Ui&&(Mt.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(Ft!==Ce&&mt.convert(Ft)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===Li&&(Ct.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-q&&X>=0&&X<=E.height-V&&H.readPixels(N,X,q,V,mt.convert(Vt),mt.convert(Ft),ft)}finally{let It=A!==null?Ut.get(A).__webglFramebuffer:null;gt.bindFramebuffer(H.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(E,N,X=0){let q=Math.pow(2,-X),V=Math.floor(N.image.width*q),ft=Math.floor(N.image.height*q);T.setTexture2D(N,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,E.x,E.y,V,ft),gt.unbindTexture()},this.copyTextureToTexture=function(E,N,X,q=0){let V=N.image.width,ft=N.image.height,wt=mt.convert(X.format),At=mt.convert(X.type);T.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment),N.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,E.x,E.y,V,ft,wt,At,N.image.data):N.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,wt,N.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,q,E.x,E.y,wt,At,N.image),q===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,X,q,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ft=E.max.x-E.min.x+1,wt=E.max.y-E.min.y+1,At=E.max.z-E.min.z+1,It=mt.convert(q.format),Vt=mt.convert(q.type),Ft;if(q.isData3DTexture)T.setTexture3D(q,0),Ft=H.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)T.setTexture2DArray(q,0),Ft=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);let Bt=H.getParameter(H.UNPACK_ROW_LENGTH),_e=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Je=H.getParameter(H.UNPACK_SKIP_PIXELS),Ee=H.getParameter(H.UNPACK_SKIP_ROWS),bi=H.getParameter(H.UNPACK_SKIP_IMAGES),pe=X.isCompressedTexture?X.mipmaps[V]:X.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,pe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,pe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,E.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,E.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,E.min.z),X.isDataTexture||X.isData3DTexture?H.texSubImage3D(Ft,V,N.x,N.y,N.z,ft,wt,At,It,Vt,pe.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ft,V,N.x,N.y,N.z,ft,wt,At,It,pe.data)):H.texSubImage3D(Ft,V,N.x,N.y,N.z,ft,wt,At,It,Vt,pe),H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_e),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Je),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ee),H.pixelStorei(H.UNPACK_SKIP_IMAGES,bi),V===0&&q.generateMipmaps&&H.generateMipmap(Ft),gt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),gt.unbindTexture()},this.resetState=function(){C=0,y=0,A=null,gt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===lo?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===ur?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Re?on:gc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===on?Re:ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Va=class extends cs{};Va.prototype.isWebGL1Renderer=!0;var ri=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ql=new R,jl=new ce,tc=new ce,i0=new R,ec=new Gt,zs=new R,_a=new ln,ic=new Gt,ya=new tr,hs=class extends Jt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fo,this.bindMatrix=new Gt,this.bindMatrixInverse=new Gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yi),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,zs),this.boundingBox.expandByPoint(zs)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,zs),this.boundingSphere.expandByPoint(zs)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(s),t.ray.intersectsSphere(_a)!==!1&&(ic.copy(s).invert(),ya.copy(t.ray).applyMatrix4(ic),!(this.boundingBox!==null&&ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ya)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ce,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Fo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ch?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,s=this.geometry;jl.fromBufferAttribute(s.attributes.skinIndex,t),tc.fromBufferAttribute(s.attributes.skinWeight,t),Ql.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=tc.getComponent(r);if(o!==0){let a=jl.getComponent(r);ec.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(i0.copy(Ql).applyMatrix4(ec),o)}}return e.applyMatrix4(this.bindMatrixInverse)}boneTransform(t,e){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(t,e)}},us=class extends We{constructor(){super(),this.isBone=!0,this.type="Bone"}},xi=class extends ni{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Me,h=Me,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nc=new Gt,n0=new Gt,ar=class n{constructor(t=[],e=[]){this.uuid=fn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Gt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Gt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:n0;nc.multiplyMatrices(a,e[r]),nc.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new xi(e,t,t,se,Li);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){let r=t.bones[i],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new us),this.bones.push(o),this.boneInverses.push(new Gt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=i[s];t.boneInverses.push(a.toArray())}return t}},qe=class extends Qt{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var Ga=class n extends Pe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(r.slice(),3)),this.setAttribute("uv",new Ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let x=new R,w=new R,C=new R;for(let y=0;y<e.length;y+=3)f(e[y+0],x),f(e[y+1],w),f(e[y+2],C),l(x,w,C,_)}function l(_,x,w,C){let y=C+1,A=[];for(let O=0;O<=y;O++){A[O]=[];let M=_.clone().lerp(w,O/y),S=x.clone().lerp(w,O/y),F=y-O;for(let G=0;G<=F;G++)G===0&&O===y?A[O][G]=M:A[O][G]=M.clone().lerp(S,G/F)}for(let O=0;O<y;O++)for(let M=0;M<2*(y-O)-1;M++){let S=Math.floor(M/2);M%2===0?(d(A[O][S+1]),d(A[O+1][S]),d(A[O][S])):(d(A[O][S+1]),d(A[O+1][S+1]),d(A[O+1][S]))}}function c(_){let x=new R;for(let w=0;w<r.length;w+=3)x.x=r[w+0],x.y=r[w+1],x.z=r[w+2],x.normalize().multiplyScalar(_),r[w+0]=x.x,r[w+1]=x.y,r[w+2]=x.z}function h(){let _=new R;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let w=m(_)/2/Math.PI+.5,C=p(_)/Math.PI+.5;o.push(w,1-C)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let x=o[_+0],w=o[_+2],C=o[_+4],y=Math.max(x,w,C),A=Math.min(x,w,C);y>.9&&A<.1&&(x<.2&&(o[_+0]+=1),w<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,x){let w=_*3;x.x=t[w+0],x.y=t[w+1],x.z=t[w+2]}function g(){let _=new R,x=new R,w=new R,C=new R,y=new xt,A=new xt,O=new xt;for(let M=0,S=0;M<r.length;M+=9,S+=6){_.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),w.set(r[M+6],r[M+7],r[M+8]),y.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),O.set(o[S+4],o[S+5]),C.copy(_).add(x).add(w).divideScalar(3);let F=m(C);v(y,S+0,_,F),v(A,S+2,x,F),v(O,S+4,w,F)}}function v(_,x,w,C){C<0&&_.x===1&&(o[x]=_.x-1),w.x===0&&w.z===0&&(o[x]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var or=class n extends Ga{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Wa=class extends cn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},lr=class extends Wa{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ks(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function s0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var qn=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xa=class extends qn{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ll,endingEnd:ll}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case cl:r=t,a=2*e-i;break;case hl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case cl:o=t,l=2*i-e;break;case hl:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*v+.5*g,w=f*m-f*v;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+_*o[c+C]+x*o[l+C]+w*o[u+C];return r}},qa=class extends qn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ya=class extends qn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ui=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ks(e,this.TimeBufferType),this.values=ks(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ks(t.times,Array),values:ks(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Gs:e=this.InterpolantFactoryMethodDiscrete;break;case Ws:e=this.InterpolantFactoryMethodLinear;break;case $r:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return $r}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&s0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===$r,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=Ws;var un=class extends ui{};un.prototype.ValueTypeName="bool";un.prototype.ValueBufferType=Array;un.prototype.DefaultInterpolation=Gs;un.prototype.InterpolantFactoryMethodLinear=void 0;un.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends ui{};Za.prototype.ValueTypeName="color";var Ja=class extends ui{};Ja.prototype.ValueTypeName="number";var $a=class extends qn{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ee.slerpFlat(r,0,o,c-a,o,c,l);return r}},ds=class extends ui{InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}};ds.prototype.ValueTypeName="quaternion";ds.prototype.DefaultInterpolation=Ws;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var dn=class extends ui{};dn.prototype.ValueTypeName="string";dn.prototype.ValueBufferType=Array;dn.prototype.DefaultInterpolation=Gs;dn.prototype.InterpolantFactoryMethodLinear=void 0;dn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends ui{};Ka.prototype.ValueTypeName="vector";var Qa=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},r0=new Qa,ja=class{constructor(t){this.manager=t!==void 0?t:r0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var to=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Ma=new Gt,sc=new R,rc=new R,eo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(sc),rc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rc),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var io=class extends eo{constructor(){super(new si(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends to{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new io}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var _i=class extends Pe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var uo="\\[\\]\\.:\\/",a0=new RegExp("["+uo+"]","g"),fo="[^"+uo+"]",o0="[^"+uo.replace("\\.","")+"]",l0=/((?:WC+[\/:])*)/.source.replace("WC",fo),c0=/(WCOD+)?/.source.replace("WCOD",o0),h0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fo),u0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fo),d0=new RegExp("^"+l0+c0+h0+u0+"$"),f0=["material","materials","bones","map"],no=class{constructor(t,e,i){let s=i||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ue=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(a0,"")}static parseTrackName(t){let e=d0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);f0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=no;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j0=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:so}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=so);function di(n){let t=n>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var yi=(n,t,e)=>n<t?t:n>e?e:n,Et=n=>n<0?0:n>1?1:n,Nt=(n,t,e)=>n+(t-n)*e;function Oe(n,t,e){let i=Et((e-n)/(t-n));return i*i*(3-2*i)}function Mi(n,t=0){let e=Math.floor(n),i=n-e,s=o=>{let a=Math.sin((o+t*57.13)*127.1)*43758.5453;return a-Math.floor(a)},r=i*i*(3-2*i);return s(e)*(1-r)+s(e+1)*r}var me=24,Ye=2,p0=9.81,po=Math.PI*2,m0=[[300,3,.8,.3,0],[236,3.2,.8,.3,0],[187,3,.8,.34,0],[151,2.6,.8,.34,0],[122,2.1,.78,.38,0],[99,1.6,.78,.38,0],[78,1.05,.64,.7,1],[63,.9,.64,.7,1],[50,.75,.64,.75,1],[40,.6,.62,.75,1],[31,.48,.62,.8,1],[24.5,.38,.6,.8,1],[19,.3,.6,.85,1],[15,.235,.58,.85,1],[12.1,.17,.5,1.15,2],[9.3,.13,.5,1.15,2],[7.1,.1,.48,1.2,2],[5.4,.077,.48,1.2,2],[4.1,.058,.46,1.25,2],[3.2,.045,.46,1.25,2],[2.5,.035,.44,1.3,2],[1.9,.027,.44,1.3,2],[1.5,.021,.42,1.35,2],[1.15,.016,.42,1.35,2]],mo=class{constructor(){this.active=!1,this.ox=0,this.oz=0,this.dx=1,this.dz=0,this.speed=14,this.width=150,this.hMax=12,this.t0=0,this.tBreak=14,this.age=0,this.s=0,this.height=0,this.front=14,this.frontMin=8.5,this.back=55,this.curl=0,this.brk=0,this.turb=0,this.roll=0}},fr=class{constructor(t=20261112){this.time=0,this.storm=1,this.windAngle=0;let e=di(t);this.dirX=new Float64Array(me),this.dirZ=new Float64Array(me),this.k=new Float64Array(me),this.omega=new Float64Array(me),this.phase0=new Float64Array(me),this.amp0=new Float64Array(me),this.amp=new Float64Array(me),this.steep=new Float64Array(me),this.len=new Float64Array(me),this.band=new Uint8Array(me),this.phT=new Float64Array(me);for(let i=0;i<me;i++){let[s,r,o,a,l]=m0[i],c=1+(e()-.5)*.06,h=s*c,u=i%2===0?1:-1,d=this.windAngle+u*a*(.25+.75*e());this.dirX[i]=Math.cos(d),this.dirZ[i]=Math.sin(d),this.len[i]=h,this.k[i]=po/h,this.omega[i]=Math.sqrt(p0*this.k[i]),this.phase0[i]=e()*po,this.amp0[i]=r*(.9+e()*.2),this.steep[i]=o,this.band[i]=l}this.uA=new Float32Array(me*4),this.uB=new Float32Array(me*4),this.breakers=[];for(let i=0;i<Ye;i++)this.breakers.push(new mo);this.uBrkA=new Float32Array(Ye*4),this.uBrkB=new Float32Array(Ye*4),this.uBrkC=new Float32Array(Ye*4),this.sigHeight=0,this.setStorm(1),this.update(0)}setStorm(t){this.storm=Et(t);let e=0;for(let i=0;i<me;i++){let s=this.band[i],r=s===0?Nt(.3,1,this.storm):s===1?Nt(.22,1,this.storm):Nt(.4,1,this.storm);this.amp[i]=this.amp0[i]*r,e+=this.amp[i]*this.amp[i]*.5}this.sigHeight=4*Math.sqrt(e)}update(t){this.time+=t;let e=this.time;for(let i=0;i<me;i++){this.phT[i]=(this.omega[i]*e+this.phase0[i])%po;let s=i*4;this.uA[s]=this.dirX[i],this.uA[s+1]=this.dirZ[i],this.uA[s+2]=this.k[i],this.uA[s+3]=this.amp[i],this.uB[s]=this.phT[i],this.uB[s+1]=this.steep[i],this.uB[s+2]=this.len[i],this.uB[s+3]=0}for(let i=0;i<Ye;i++){let s=this.breakers[i],r=i*4;if(s.active){s.age=e-s.t0,s.s=s.speed*s.age;let a=Oe(0,s.tBreak*.85,s.age),l=s.age-s.tBreak;s.brk=Et(l/1.6);let c=l>0?Math.exp(-l/3):1;s.height=s.hMax*a*(.16+.84*c),s.front=Nt(26,s.frontMin,Oe(.3,1,a)),s.curl=Oe(-2.2,.3,l)*(l>0?Math.exp(-l/2.2):1),s.turb=l>0?Math.min(1,l/1)*Math.exp(-Math.max(0,l-2.5)/5):0,s.roll=l>0?s.brk*Math.exp(-l/3.2):0,l>20&&(s.active=!1)}let o=s.active?1:0;this.uBrkA[r]=s.ox,this.uBrkA[r+1]=s.oz,this.uBrkA[r+2]=s.dx,this.uBrkA[r+3]=s.dz,this.uBrkB[r]=s.s,this.uBrkB[r+1]=s.height*o,this.uBrkB[r+2]=s.front,this.uBrkB[r+3]=s.back,this.uBrkC[r]=s.width,this.uBrkC[r+1]=s.curl*o,this.uBrkC[r+2]=s.brk*o,this.uBrkC[r+3]=s.turb*o}}spawnBreaker(t,e,i={}){let s=this.breakers.find(a=>!a.active);if(!s)return null;let r=this.windAngle+(i.angleOffset||0);s.dx=Math.cos(r),s.dz=Math.sin(r),s.speed=i.speed||14;let o=i.lead||15;return s.ox=t-s.dx*s.speed*o,s.oz=e-s.dz*s.speed*o,s.width=i.width||150,s.hMax=i.height||12,s.back=i.back||55,s.frontMin=i.frontMin||8.5,s.t0=this.time,s.tBreak=o+(i.breakOffset!==void 0?i.breakOffset:-1.2),s.age=0,s.active=!0,s.s=0,s.height=0,s.curl=0,s.brk=0,s.turb=0,s.roll=0,s}_breakerHeight(t,e,i){let s=e-t.ox,r=i-t.oz,o=s*t.dx+r*t.dz,a=-s*t.dz+r*t.dx,l=o-t.s,c=Math.exp(-(a*a)/(t.width*t.width)),h=l>0?t.front:t.back,u=Math.exp(-(l*l)/(h*h)),d=(l-2.4*t.front)/(1.7*t.front),f=-.16*Math.exp(-d*d);return this._bu=l,this._benv=c,this._bp=u,this._bsc=h,this._btr=f,this._btu=d,t.height*c*(u+f)}sample(t,e,i){let s=me,r=this.dirX,o=this.dirZ,a=this.k,l=this.amp,c=this.steep,h=this.phT,u=this.omega,d=t,f=e;for(let L=0;L<3;L++){let B=0,et=0;for(let rt=0;rt<s;rt++){let lt=a[rt]*(r[rt]*d+o[rt]*f)-h[rt],_t=c[rt]*l[rt]*Math.sin(lt);B-=r[rt]*_t,et-=o[rt]*_t}d=t-B,f=e-et}let g=0,v=0,m=0,p=0,_=0,x=0,w=0,C=0,y=0,A=0,O=0,M=0;for(let L=0;L<s;L++){let B=a[L]*(r[L]*d+o[L]*f)-h[L],et=Math.sin(B),rt=Math.cos(B),lt=l[L],_t=a[L]*lt,yt=c[L]*_t,vt=u[L];g+=lt*rt,v+=yt*r[L]*r[L]*rt,m+=yt*o[L]*o[L]*rt,p+=yt*r[L]*o[L]*rt,_-=_t*r[L]*et,x-=_t*o[L]*et;let Lt=c[L]*lt*vt;w+=Lt*r[L]*rt,y+=Lt*o[L]*rt,C+=lt*vt*et;let H=Lt*vt;A+=H*r[L]*et,M+=H*o[L]*et,O-=lt*vt*vt*rt}let S=-_*(1-m)-x*p,F=(1-v)*(1-m)-p*p,G=-x*(1-v)-_*p,K=F,D=0,P=0,k=0,Z=0,Y=0,z=0,J=0,$=0;for(let L=0;L<Ye;L++){let B=this.breakers[L];if(!B.active||B.height<.01)continue;let et=this._breakerHeight(B,t,e),rt=this._bu,lt=this._benv,_t=this._bp,yt=this._bsc;if(lt<.002)continue;let vt=-2*rt/(yt*yt)*_t-.16*Math.exp(-this._btu*this._btu)*(-2*this._btu/(1.7*B.front)),Lt=B.height*lt*vt;g+=et,k+=et,F<.05&&(F=.05);let H=1/F;S*=H,G*=H,F=1,S-=Lt*B.dx,G-=Lt*B.dz,Y+=-B.speed*Lt,$+=B.speed*B.speed*B.height*lt*(-2/(yt*yt)+4*rt*rt/(yt*yt*yt*yt))*_t;let fe=B.speed*(.3*(1-B.brk)+.65*B.curl+.22*B.roll)*lt*_t*Math.min(1,B.height/6);J=Math.max(J,lt*B.curl*Math.exp(-Math.pow((rt-.25*B.front)/(1.3*B.front),2))*Math.min(1,B.height/5)),Z+=B.dx*fe,z+=B.dz*fe;let Mt=lt*Math.exp(-Math.pow((rt-.3*B.front)/(1.6*B.front+26*B.turb),2));D=Math.max(D,B.brk*Mt*Math.min(1,B.height/3+B.turb)),P=Math.max(P,B.turb*lt*Math.exp(-Math.pow((rt+14*B.turb)/(22+30*B.turb),2)))}let st=1/Math.sqrt(S*S+F*F+G*G);return i.h=g,i.nx=S*st,i.ny=F*st,i.nz=G*st,i.vx=w+Z,i.vy=C+Y,i.vz=y+z,i.ax=A,i.ay=O,i.az=M,i.bvx=Z,i.bvy=Y,i.bvz=z,i.lip=J,i.bay=$<-8.8?-8.8:$>19.6?19.6:$,i.jac=K,i.x0=d,i.z0=f,i.aer=D,i.turb=P,i.brkH=k,i}heightFast(t,e){let i=this.dirX,s=this.dirZ,r=this.k,o=this.amp,a=this.phT,l=0;for(let c=0;c<14;c++)l+=o[c]*Math.cos(r[c]*(i[c]*t+s[c]*e)-a[c]);for(let c=0;c<Ye;c++){let h=this.breakers[c];h.active&&h.height>.01&&(l+=this._breakerHeight(h,t,e))}return l}velocityAtDepth(t,e,i,s){let r=this.dirX,o=this.dirZ,a=this.k,l=this.amp,c=this.steep,h=this.phT,u=this.omega,d=0,f=0,g=0;for(let v=0;v<me;v++){let m=Math.exp(-a[v]*i);if(m<.01)continue;let p=a[v]*(r[v]*t+o[v]*e)-h[v],_=l[v]*u[v]*m,x=Math.cos(p);d+=c[v]*_*r[v]*x,g+=c[v]*_*o[v]*x,f+=_*Math.sin(p)}return s.vx=d,s.vy=f,s.vz=g,s}breakerFlow(t,e,i,s,r){let o=0,a=0,l=0,c=this.time;for(let h=0;h<Ye;h++){let u=this.breakers[h];if(!u.active||u.roll<.003&&u.turb<.003)continue;let d=t-u.ox,f=i-u.oz,g=d*u.dx+f*u.dz,v=-d*u.dz+f*u.dx,m=Math.exp(-(v*v)/(u.width*u.width));if(m<.01)continue;let p=g-u.s;if(u.roll>.003){let _=Math.max(1.8,.36*u.hMax),x=p-.35*u.front,w=e-(s-.55*_),C=Math.hypot(x,w);if(C<3.2*_){let y=C<_?1:_*_/(C*C),A=.85*u.speed/_*u.roll*m*y,O=A*w;o+=u.dx*O,l+=u.dz*O,a+=-A*x}}if(u.turb>.003){let _=u.turb*m*Math.exp(-Math.pow((p+14*u.turb)/(22+30*u.turb),2))*Math.exp(-Math.max(0,s-e)/6.5);if(_>.01){let x=_*3.4;o+=x*(Math.sin(.9*i+1.7*e+2.3*c)+.6*Math.sin(1.7*t-1.1*e-3.1*c+1.3)),a+=x*(Math.sin(1.1*t+.8*i+2.9*c+.7)+.6*Math.sin(-1.5*i+1.9*e+2*c)),l+=x*(Math.sin(1.3*e-.9*t+2.6*c+2.1)+.6*Math.sin(1.6*t+1.2*i-2.2*c))}}}return r.vx+=o,r.vy+=a,r.vz+=l,r}};function Zi(){return{bay:0,lip:0,bvx:0,bvy:0,bvz:0,h:0,nx:0,ny:1,nz:0,vx:0,vy:0,vz:0,ax:0,ay:0,az:0,jac:1,x0:0,z0:0,aer:0,turb:0,brkH:0}}var Q={hdrType:Ui,uWaveA:{value:new Float32Array(me*4)},uWaveB:{value:new Float32Array(me*4)},uBrkA:{value:new Float32Array(Ye*4)},uBrkB:{value:new Float32Array(Ye*4)},uBrkC:{value:new Float32Array(Ye*4)},uTime:{value:0},uStorm:{value:1},uRain:{value:1},uWindDir:{value:new xt(1,0)},uWindSpeed:{value:28},uGlowDir:{value:new R(-.55,.35,.25).normalize()},uAmbient:{value:new R(.05,.06,.072)},uFlash:{value:0},uFlashDir:{value:new R(1,.35,0).normalize()},uFlashColor:{value:new R(.78,.86,1)},uFlashSheet:{value:0},uFogDensity:{value:1/2600},uNoise:{value:null},uSkyEnv:{value:null},uDetailN:{value:null},uFoamTex:{value:null},uResolution:{value:new xt(1,1)}};function Rc(n=7){let e=di(n),i=new Uint8Array(256*256*4);for(let r=0;r<i.length;r++)i[r]=e()*256|0;let s=new xi(i,256,256,se,Ce);return s.wrapS=s.wrapT=Di,s.minFilter=$t,s.magFilter=$t,s.generateMipmaps=!1,s.needsUpdate=!0,s}function Cc(n=11,t=256){let e=di(n),i=[];for(let d=0;d<56;d++){let f=2+Math.pow(e(),1.6)*38,g=(e()-.5)*2.4+(e()<.2?Math.PI*e():0),v=Math.round(Math.cos(g)*f),m=Math.round(Math.sin(g)*f);if(v===0&&m===0)continue;let p=Math.hypot(v,m);i.push({m:v,n:m,a:Math.pow(p,-1.35),ph:e()*Math.PI*2})}let s=new Float32Array(t*t),r=new Float32Array(t*t),o=new Float32Array(t*t),a=0;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=f/t,v=d/t,m=0,p=0,_=0;for(let w=0;w<i.length;w++){let C=i[w],y=6.283185307*(C.m*g+C.n*v)+C.ph,A=Math.sin(y);m-=C.a*C.m*A,p-=C.a*C.n*A,_+=C.a*Math.cos(y)}let x=d*t+f;s[x]=m,r[x]=p,o[x]=_,a+=m*m+p*p}a=Math.sqrt(a/(t*t*2));let l=0;for(let d=0;d<o.length;d++)l=Math.max(l,Math.abs(o[d]));let c=new Uint8Array(t*t*4),h=.3/a;for(let d=0;d<t*t;d++)c[d*4]=Math.max(0,Math.min(255,Math.round((s[d]*h*.5+.5)*255))),c[d*4+1]=Math.max(0,Math.min(255,Math.round((r[d]*h*.5+.5)*255))),c[d*4+2]=Math.round((o[d]/l*.5+.5)*255),c[d*4+3]=255;let u=new xi(c,t,t,se,Ce);return u.wrapS=u.wrapT=Di,u.minFilter=je,u.magFilter=$t,u.generateMipmaps=!0,u.anisotropy=8,u.needsUpdate=!0,u}function Pc(n=23,t=256){let e=di(n),i=c=>{let h=new Float32Array(c*c*2);for(let d=0;d<h.length;d++)h[d]=e();let u=new Float32Array(t*t*2);for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=(f+.5)/t*c,v=(d+.5)/t*c,m=Math.floor(g),p=Math.floor(v),_=9,x=9;for(let w=-1;w<=1;w++)for(let C=-1;C<=1;C++){let y=m+C,A=p+w,O=(y%c+c)%c,M=(A%c+c)%c,S=y+h[(M*c+O)*2],F=A+h[(M*c+O)*2+1],G=Math.hypot(S-g,F-v);G<_?(x=_,_=G):G<x&&(x=G)}u[(d*t+f)*2]=_,u[(d*t+f)*2+1]=x-_}return u},s=i(9),r=i(23),o=i(51),a=new Uint8Array(t*t*4);for(let c=0;c<t*t;c++){let h=1-Math.min(1,s[c*2+1]*3.2),u=1-Math.min(1,r[c*2+1]*3),d=Math.min(1,h*.62+u*.5),f=Math.min(1,(1-s[c*2]*1.25)*.7+(1-r[c*2]*1.3)*.3),g=1-Math.min(1,o[c*2]*1.6);a[c*4]=Math.round(Math.max(0,d)*255),a[c*4+1]=Math.round(Math.max(0,f)*255),a[c*4+2]=Math.round(Math.max(0,g)*255),a[c*4+3]=255}let l=new xi(a,t,t,se,Ce);return l.wrapS=l.wrapT=Di,l.minFilter=je,l.magFilter=$t,l.generateMipmaps=!0,l.anisotropy=8,l.needsUpdate=!0,l}function Lc(n=5,t=128){let e=di(n),i=[];for(let o=0;o<14;o++)i.push([.5+(e()-.5)*.42,.5+(e()-.5)*.42,.12+e()*.2]);let s=new Uint8Array(t*t*4);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=(a+.5)/t,c=(o+.5)/t,h=0;for(let g of i){let v=Math.hypot(l-g[0],c-g[1])/g[2];h+=Math.exp(-v*v*2.2)}let u=1-Math.min(1,Math.hypot(l-.5,c-.5)*2),d=Math.min(1,h*.42)*Math.min(1,u*2.4),f=(o*t+a)*4;s[f]=s[f+1]=s[f+2]=255,s[f+3]=Math.round(d*255)}let r=new xi(s,t,t,se,Ce);return r.minFilter=je,r.magFilter=$t,r.generateMipmaps=!0,r.needsUpdate=!0,r}var pn=`
#define NW ${me}
#define NB ${Ye}
uniform vec4 uWaveA[NW];   // dir.x, dir.z, k, amplitude
uniform vec4 uWaveB[NW];   // phase(t), steepness, wavelength, -
uniform vec4 uBrkA[NB];    // origin.xz, dir.xz
uniform vec4 uBrkB[NB];    // crest s, height, front scale, back scale
uniform vec4 uBrkC[NB];    // lateral width, curl, breaking, turbulence
`,mn=`
vec4 breakerProfile(int i, vec2 x, out float env) {
  vec4 A = uBrkA[i]; vec4 B = uBrkB[i]; vec4 C = uBrkC[i];
  vec2 r = x - A.xy;
  float along = dot(r, A.zw);
  float lat = -r.x * A.w + r.y * A.z;
  float u = along - B.x;
  env = exp(-(lat * lat) / (C.x * C.x));
  float sc = u > 0.0 ? B.z : B.w;
  float p = exp(-(u * u) / (sc * sc));
  float tu = (u - 2.4 * B.z) / (1.7 * B.z);
  float tr = -0.16 * exp(-tu * tu);
  float h = B.y * env * (p + tr);
  float slope = B.y * env * (-2.0 * u / (sc * sc) * p + 0.16 * exp(-tu * tu) * (2.0 * tu / (1.7 * B.z)));
  return vec4(h, slope, p, u);
}
// Foam produced by breaker i at world xz (crest cap, collapsing face, whitewater left behind).
float breakerFoam(int i, vec2 x) {
  float env;
  vec4 pr = breakerProfile(i, x, env);
  vec4 B = uBrkB[i]; vec4 C = uBrkC[i];
  float u = pr.w;
  float big = clamp(B.y / 5.0, 0.0, 1.0);
  float cap = smoothstep(0.62, 0.97, pr.z) * (0.35 * smoothstep(0.55, 1.0, C.y) + C.z);
  float face = u > 0.0 ? C.z * (1.0 - smoothstep(0.0, B.z * (0.5 + 2.6 * C.z), u)) : 0.0;
  float wake = C.w * exp(-pow((u + 14.0 * C.w) / (22.0 + 30.0 * C.w), 2.0));
  return env * max(max(cap, face) * big, wake);
}
`,pr=`
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
`,Ic=`
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
`;var Dc=`
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
`,g0=`
const float PI = 3.14159265359;
vec3 equirectToDir(vec2 uv) {
  float phi = (uv.x - 0.5) * 2.0 * PI;
  float lat = (uv.y - 0.5) * PI;
  return vec3(cos(lat) * cos(phi), sin(lat), cos(lat) * sin(phi));
}
`,Uc=`
vec2 dirToEquirect(vec3 d) {
  return vec2(atan(d.z, d.x) * 0.15915494 + 0.5, asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5);
}
`,mr=class{constructor(t,e=512){this.renderer=t;let i={uNoise:Q.uNoise,uTime:Q.uTime,uStorm:Q.uStorm,uWindDir:Q.uWindDir,uGlowDir:Q.uGlowDir,uFlash:Q.uFlash,uFlashDir:Q.uFlashDir,uFlashColor:Q.uFlashColor,uFlashSheet:Q.uFlashSheet};this.domeMat=new Kt({uniforms:i,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = position;
          vec4 p = projectionMatrix * viewMatrix * vec4(position * 9000.0 + cameraPosition, 1.0);
          gl_Position = p.xyww;   // always at the far plane
        }`,fragmentShader:`
        varying vec3 vDir;
        ${Dc}
        void main() { gl_FragColor = vec4(stormSky(normalize(vDir), 1), 1.0); }`,side:Fe,depthWrite:!1,depthTest:!0,fog:!1}),this.dome=new Jt(new or(1,5),this.domeMat),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,this.envRT=new de(e,e/2,{type:Q.hdrType,format:se,depthBuffer:!1,minFilter:je,magFilter:$t,generateMipmaps:!0}),this.envRT.texture.wrapS=Di,this.envRT.texture.wrapT=Qe,this.envMat=new Kt({uniforms:i,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        varying vec2 vUv;
        ${Dc}
        ${g0}
        void main() { gl_FragColor = vec4(stormSky(equirectToDir(vUv), 0), 1.0); }`,depthTest:!1,depthWrite:!1}),this.envScene=new ri,this.envQuad=new Jt(new hi(2,2),this.envMat),this.envQuad.frustumCulled=!1,this.envScene.add(this.envQuad),this.envCam=new si(-1,1,1,-1,0,1),Q.uSkyEnv.value=this.envRT.texture}updateEnv(){let t=this.renderer,e=t.getRenderTarget();t.setRenderTarget(this.envRT),t.render(this.envScene,this.envCam),t.setRenderTarget(e)}dispose(){this.envRT.dispose(),this.domeMat.dispose(),this.envMat.dispose(),this.dome.geometry.dispose()}};var v0=`
attribute float aSpacing;
uniform vec2 uCenter;
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${pn}
${pr}
${mn}
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
      float lip = pow(pr.z, 3.0) * env * uBrkB[i].y * uBrkC[i].y;
      wp.xz += uBrkA[i].zw * lip * 0.95;
      wp.y -= lip * uBrkC[i].y * 0.30;
    }
  }
  vWorld = wp; vX0 = x0; vPre = pre;
  vec4 mv = viewMatrix * vec4(wp, 1.0);
  vViewZ = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,x0=`
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
varying vec3 vWorld;
varying vec2 vX0;
varying vec2 vPre;
varying float vViewZ;
${pn}
${Ic}
${mn}
${Uc}
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
  float fJ = (1.0 - smoothstep(0.08, 0.60, J)) * (0.30 + 0.70 * uStorm);
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
  float self = uPlayerFoam * exp(-pd * pd / 1.6);
  float foam = max(max(max(fJ, bFoam), acc), max(streak * 0.30, self));
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
    float crest = smoothstep(-0.15, 1.0, h / (uSigH * 0.5 + 0.5));
    float thin = pow(1.0 - NdV, 2.0);
    vec3 body = (uDeepColor + uScatterColor * (0.10 + 0.62 * crest * (0.30 + 0.70 * thin))) * light;

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

    vec3 foamCol = vec3(0.80, 0.85, 0.87) * foamShade * (amb * (2.4 + 0.8 * N.y) + flashL * flashWrap * 0.8);
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
`;function _0(n,t,e,i){let s=n*t,r=new Float32Array(s*3),o=new Float32Array(s);for(let h=0;h<n;h++){let u=e*(Math.exp(i*h)-1)/i,d=e*Math.exp(i*h),f=Math.PI*2*u/t,g=Math.max(d,f);for(let v=0;v<t;v++){let m=v/t*Math.PI*2,p=(h*t+v)*3;r[p]=Math.cos(m)*u,r[p+1]=0,r[p+2]=Math.sin(m)*u,o[h*t+v]=g}}let a=new Uint32Array((n-1)*t*6),l=0;for(let h=0;h<n-1;h++)for(let u=0;u<t;u++){let d=h*t+u,f=h*t+(u+1)%t,g=(h+1)*t+u,v=(h+1)*t+(u+1)%t;a[l++]=d,a[l++]=f,a[l++]=g,a[l++]=f,a[l++]=v,a[l++]=g}let c=new Pe;return c.setAttribute("position",new Qt(r,3)),c.setAttribute("aSpacing",new Qt(o,1)),c.setIndex(new Qt(a,1)),c}var gr=class{constructor(t,e){this.waves=t,this.uniforms={uWaveA:Q.uWaveA,uWaveB:Q.uWaveB,uBrkA:Q.uBrkA,uBrkB:Q.uBrkB,uBrkC:Q.uBrkC,uSkyEnv:Q.uSkyEnv,uDetailN:Q.uDetailN,uFoamTex:Q.uFoamTex,uNoise:Q.uNoise,uTime:Q.uTime,uStorm:Q.uStorm,uRain:Q.uRain,uWindDir:Q.uWindDir,uAmbient:Q.uAmbient,uFlash:Q.uFlash,uFlashDir:Q.uFlashDir,uFlashColor:Q.uFlashColor,uFogDensity:Q.uFogDensity,uResolution:Q.uResolution,uCenter:{value:new xt},uDeepColor:{value:new R(.02,.062,.105)},uScatterColor:{value:new R(.13,.27,.305)},uDetailScroll:{value:new ce},uDetailScroll3:{value:new xt},uDetailStrength:{value:.5},uSigH:{value:10},uSceneColor:{value:null},uSceneDepth:{value:null},uNearFar:{value:new xt(.08,3e4)},uFoamAcc:{value:null},uFoamAccRect:{value:new ce(0,0,1,0)},uPlayerPos:{value:new R(0,-1e3,0)},uPlayerFoam:{value:0}},this.material=new Kt({uniforms:this.uniforms,vertexShader:v0,fragmentShader:x0,side:Ge,defines:{}}),this.mesh=new Jt(new Pe,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,this.applyProfile(e)}applyProfile(t){this.mesh.geometry.dispose();let e=Math.log(14e3*.0128/t.oceanStep+1)/t.oceanRings*1;this.mesh.geometry=_0(t.oceanRings,t.oceanSegs,t.oceanStep,this._solveG(t.oceanRings,t.oceanStep,14e3,e));let i={};t.refraction&&(i.USE_REFRACTION=1),t.foamAcc&&(i.USE_FOAM_ACC=1),t.ripples&&(i.USE_RIPPLES=1),this.material.defines=i,this.material.needsUpdate=!0}_solveG(t,e,i,s){let r=Math.max(s,.004);for(let o=0;o<40;o++){let a=Math.exp(r*t),l=e*(a-1)/r-i,c=e*(t*a*r-(a-1))/(r*r);r-=l/c,r<.001&&(r=.001)}return r}update(t,e,i){let s=this.uniforms;s.uCenter.value.set(t.position.x,t.position.z),s.uSigH.value=this.waves.sigHeight;let r=Q.uWindDir.value.x,o=Q.uWindDir.value.y,a=.6+.4*Q.uStorm.value;s.uDetailScroll.value.x+=r*1.9*.047*a*e,s.uDetailScroll.value.y+=o*1.9*.047*a*e,s.uDetailScroll.value.z+=o*1.1*.19*a*e+.011*e,s.uDetailScroll.value.w+=-r*1.1*.19*a*e,s.uDetailScroll3.value.x+=(r*.75-o*.2)*.83*a*e,s.uDetailScroll3.value.y+=(o*.75+r*.2)*.83*a*e,s.uDetailStrength.value=.3+.34*Q.uStorm.value,s.uNearFar.value.set(t.near,t.far)}};var y0=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tPrev;
uniform vec2 uCenter; uniform vec2 uPrevCenter; uniform float uSize; uniform float uDt; uniform float uStorm; uniform float uTexel;
uniform vec3 uPlayer; uniform float uPlayerFoam;
${pn}
${mn}
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
  float src = (1.0 - smoothstep(0.02, 0.50, J)) * (0.30 + 0.70 * uStorm);
  vec2 wp = x0 + disp;
  for (int i = 0; i < NB; i++) if (uBrkB[i].y > 0.01) src = max(src, breakerFoam(i, wp));
  float pd = length(wp - uPlayer.xz);
  src = max(src, uPlayerFoam * exp(-pd * pd / 1.2));
  vec2 puv = vUv + (uCenter - uPrevCenter) / uSize;
  float prev = 0.0;
  if (puv.x > 0.0 && puv.x < 1.0 && puv.y > 0.0 && puv.y < 1.0) prev = texture(tPrev, puv).r;
  // slow exponential decay plus a constant erosion so thin foam breaks up into lace and disappears
  prev = max(0.0, prev * exp(-uDt / 9.0) - uDt * 0.018);
  gl_FragColor = vec4(max(src, prev), 0.0, 0.0, 1.0);
}`,vr=class{constructor(t,e=1024,i=340){if(this.renderer=t,this.size=e,this.world=i,this.enabled=e>0,!this.enabled)return;let s={type:Q.hdrType,format:se,depthBuffer:!1,minFilter:$t,magFilter:$t};this.rt=[new de(e,e,s),new de(e,e,s)],this.idx=0,this.center=new xt,this.prevCenter=new xt,this.u={tPrev:{value:null},uCenter:{value:this.center},uPrevCenter:{value:this.prevCenter},uSize:{value:i},uDt:{value:.016},uStorm:Q.uStorm,uTexel:{value:i/e},uPlayer:{value:new R},uPlayerFoam:{value:0},uWaveA:Q.uWaveA,uWaveB:Q.uWaveB,uBrkA:Q.uBrkA,uBrkB:Q.uBrkB,uBrkC:Q.uBrkC},this.mat=new Kt({uniforms:this.u,fragmentShader:y0,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }"}),this.scene=new ri,this.quad=new Jt(new hi(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.cam=new si(-1,1,1,-1,0,1),this.first=!0}update(t,e,i,s,r,o){if(!this.enabled){o.uFoamAccRect.value.w=0;return}let a=this.world/this.size,l=Math.round(e/a)*a,c=Math.round(i/a)*a;this.prevCenter.copy(this.first?new xt(l,c):this.center),this.center.set(l,c);let h=this.rt[this.idx],u=this.rt[1-this.idx];this.u.tPrev.value=h.texture,this.u.uDt.value=t,this.u.uPlayer.value.copy(s),this.u.uPlayerFoam.value=r;let d=this.renderer,f=d.getRenderTarget();d.setRenderTarget(u),d.render(this.scene,this.cam),d.setRenderTarget(f),this.idx=1-this.idx,this.first=!1,o.uFoamAcc.value=u.texture,o.uFoamAccRect.value.set(l,c,this.world,1)}};var xr=class{constructor(t,e,i,s,r=4242){this.waves=t,this.body=e,this.player=i,this.spray=s,this.rnd=di(r),this.auto=!0,this.next=24,this.threat=0,this.crestDist=1e9,this.crestHeight=0,this.whiteout=0,this.onImpact=null,this.onSplash=null,this._splashCool=0}launch(t={}){let e=this.rnd,i=this.body,s=this.waves.storm;return this.waves.spawnBreaker(i.pos.x+i.vel.x*2,i.pos.z+i.vel.z*2,{lead:t.lead!==void 0?t.lead:13+e()*5,height:t.height!==void 0?t.height:Nt(6.5,14.5,s)*(.8+.45*e()),width:t.width!==void 0?t.width:110+e()*90,speed:t.speed!==void 0?t.speed:12.5+e()*3.5,breakOffset:t.breakOffset!==void 0?t.breakOffset:-2.4+e()*3.4,angleOffset:t.angleOffset!==void 0?t.angleOffset:(e()-.5)*.5,frontMin:t.frontMin,back:t.back})}update(t,e,i,s){let r=this.waves,o=this.body;this.auto&&(this.next-=t,this.next<=0&&(r.storm>.3&&this.launch(),this.next=Nt(75,24,r.storm)*(.65+.8*this.rnd())));let a=0,l=1e9,c=0;for(let f of r.breakers){if(!f.active)continue;let g=o.pos.x-f.ox,v=o.pos.z-f.oz,m=g*f.dx+v*f.dz-f.s,p=-g*f.dz+v*f.dx,_=Math.exp(-(p*p)/(f.width*f.width));m>-10&&m<l&&(l=m,c=f.height*_);let x=Et(1-Math.abs(m)/120);a=Math.max(a,x*Et(f.height*_/9))}this.threat+=(a-this.threat)*(1-Math.exp(-t*2.5)),this.crestDist=l,this.crestHeight=c;let h=r.sample(e.x,e.z,this._s||(this._s={h:0})),u=Math.max(h.aer,(h.lip||0)*1.1)*Et(1-(e.y-h.h)/7)*(1-i);this.whiteout+=(Math.min(.93,u*1.6)-this.whiteout)*(1-Math.exp(-t*(u>this.whiteout?14:2.5)));let d=this.player.events;for(let f=0;f<d.length;f++){let g=d[f];g.type==="impact"&&(this.spray.burst(o.pos.x,o.surfaceH+.2,o.pos.z,g.strength*2.2,s,g.dir.x,g.dir.z),this.onImpact&&this.onImpact(g))}d.length=0,this._splashCool-=t,o.splash>1.1&&this._splashCool<=0&&(this._splashCool=.09,this.spray.burst(o.splashPos.x,o.splashPos.y,o.splashPos.z,Math.min(4,o.splash*.55),s),this.onSplash&&this.onSplash(o.splash,o.splashPos))}};var go={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new xt(1/1024,1/512)}},vertexShader:`

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
	`};var M0="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",b0=`
varying vec2 vUv; uniform sampler2D tScene; uniform float uThreshold; uniform float uKnee;
void main(){
  vec3 c = textureLod(tScene, vUv, 1.0).rgb;
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / (4.0 * uKnee + 1e-5);
  float w = max(soft, br - uThreshold) / max(br, 1e-5);
  gl_FragColor = vec4(min(c * w, vec3(40.0)), 1.0);
}`,w0=`
varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 a = texture(tSrc, vUv + t * vec2(-1.0, -1.0)).rgb, b = texture(tSrc, vUv + t * vec2(1.0, -1.0)).rgb;
  vec3 c = texture(tSrc, vUv + t * vec2(-1.0, 1.0)).rgb, d = texture(tSrc, vUv + t * vec2(1.0, 1.0)).rgb;
  vec3 e = texture(tSrc, vUv).rgb;
  gl_FragColor = vec4((a + b + c + d) * 0.2 + e * 0.2, 1.0);
}`,S0=`
varying vec2 vUv; uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel;
void main(){
  vec2 t = uTexel;
  vec3 s = texture(tSrc, vUv + t * vec2(-1.0, 0.0)).rgb + texture(tSrc, vUv + t * vec2(1.0, 0.0)).rgb
         + texture(tSrc, vUv + t * vec2(0.0, -1.0)).rgb + texture(tSrc, vUv + t * vec2(0.0, 1.0)).rgb;
  s = s * 0.125 + texture(tSrc, vUv).rgb * 0.5;
  gl_FragColor = vec4(s + texture(tAdd, vUv).rgb, 1.0);
}`,E0=`
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
}`,T0=`
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
}`,_r=class{constructor(t){this.renderer=t,this.fsScene=new ri,this.fsCam=new si(-1,1,1,-1,0,1),this.fsQuad=new Jt(new hi(2,2),null),this.fsQuad.frustumCulled=!1,this.fsScene.add(this.fsQuad),this.w=2,this.h=2,this.levels=5,this.useOpaque=!0;let e=(r,o)=>new Kt({uniforms:o,vertexShader:M0,fragmentShader:r,depthTest:!1,depthWrite:!1});this.matPre=e(b0,{tScene:{value:null},uThreshold:{value:.16},uKnee:{value:.12}}),this.matDown=e(w0,{tSrc:{value:null},uTexel:{value:new xt}}),this.matUp=e(S0,{tSrc:{value:null},tAdd:{value:null},uTexel:{value:new xt}}),this.matAdapt=e(E0,{tScene:{value:null},tPrev:{value:null},uDt:{value:.016},uReset:{value:1}}),this.u={tScene:{value:null},tDepth:{value:null},tBloom:{value:null},tAdapt:{value:null},tLens:{value:null},uNoise:Q.uNoise,uResolution:{value:new xt},uNearFar:{value:new xt(.08,3e4)},uTime:{value:0},uCamPos:{value:new R},uCamRight:{value:new R},uCamUp:{value:new R},uCamFwd:{value:new R},uTanFov:{value:new xt},uPrevViewProj:{value:new Gt},uMotionBlur:{value:0},uBloom:{value:.55},uExposureKey:{value:.125},uExposureRange:{value:new xt(.5,7)},uExposureBias:{value:1},uWaterPlane:{value:new ce(0,1,0,0)},uUnderAmount:{value:0},uUnderColor:{value:new R(.004,.012,.018)},uUnderExt:{value:new R(.42,.2,.16)},uAeration:{value:0},uUnderDistort:{value:.012},uShaftDir:{value:new R(0,1,0)},uShaft:{value:0},uLensStrength:{value:.05},uSheet:{value:0},uBlur:{value:0},uDofFocus:{value:10},uDofAmount:{value:0},uVignette:{value:.42},uGrain:{value:.028},uTunnel:{value:0},uDesat:{value:0},uFade:{value:0},uWhiteout:{value:0},uGradeMix:{value:1}},this.matComposite=e(T0,this.u),this.matFXAA=new Kt({uniforms:{tDiffuse:{value:null},resolution:{value:new xt}},vertexShader:go.vertexShader,fragmentShader:go.fragmentShader,depthTest:!1,depthWrite:!1}),this.matCopy=e("varying vec2 vUv; uniform sampler2D tSrc; void main(){ gl_FragColor = texture(tSrc, vUv); }",{tSrc:{value:null}});let i=new xi(new Uint8Array([0,0,0,0]),1,1);i.needsUpdate=!0,this.blankLens=i,this.u.tLens.value=i,this.rtScene=null,this.rtOpaque=null,this.rtLDR=null,this.down=[],this.up=[];let s={type:Q.hdrType,format:se,depthBuffer:!1,minFilter:Me,magFilter:Me};this.adapt=[new de(1,1,s),new de(1,1,s)],this.adaptIdx=0,this.adaptReset=!0,this.fxaa=!0,this.prevViewProj=new Gt,this._vp=new Gt}setSize(t,e,i){if(t=Math.max(2,Math.floor(t)),e=Math.max(2,Math.floor(e)),!i&&t===this.w&&e===this.h&&this.rtScene)return;this.w=t,this.h=e,(l=>l.forEach(c=>c&&c.dispose()))([this.rtScene,this.rtOpaque,this.rtLDR,...this.down,...this.up]);let r={type:Q.hdrType,format:se,magFilter:$t};this.rtScene=new de(t,e,{...r,minFilter:je,generateMipmaps:!0,depthBuffer:!0}),this.rtScene.depthTexture=new hn(t,e),this.rtOpaque=new de(t,e,{...r,minFilter:$t,depthBuffer:!0}),this.rtOpaque.depthTexture=new hn(t,e),this.rtLDR=new de(t,e,{type:Ce,format:se,minFilter:$t,magFilter:$t,depthBuffer:!1}),this.down=[],this.up=[];let o=t>>1,a=e>>1;for(let l=0;l<this.levels;l++){o=Math.max(2,o),a=Math.max(2,a);let c={...r,minFilter:$t,depthBuffer:!1};this.down.push(new de(o,a,c)),l<this.levels-1&&this.up.push(new de(o,a,c)),o>>=1,a>>=1}Q.uResolution.value.set(t,e),this.adaptReset=!0}_pass(t,e){this.fsQuad.material=t,this.renderer.setRenderTarget(e),this.renderer.render(this.fsScene,this.fsCam)}render(t,e,i,s){let r=this.renderer,o=this.u;this.useOpaque&&t(this.rtOpaque,!0),t(this.rtScene,!1),this.matPre.uniforms.tScene.value=this.rtScene.texture,this._pass(this.matPre,this.down[0]);for(let d=1;d<this.levels;d++)this.matDown.uniforms.tSrc.value=this.down[d-1].texture,this.matDown.uniforms.uTexel.value.set(1/this.down[d-1].width,1/this.down[d-1].height),this._pass(this.matDown,this.down[d]);let a=this.down[this.levels-1];for(let d=this.levels-2;d>=0;d--)this.matUp.uniforms.tSrc.value=a.texture,this.matUp.uniforms.tAdd.value=this.down[d].texture,this.matUp.uniforms.uTexel.value.set(1/a.width,1/a.height),this._pass(this.matUp,this.up[d]),a=this.up[d];let l=this.adapt[this.adaptIdx],c=this.adapt[1-this.adaptIdx];this.matAdapt.uniforms.tScene.value=this.rtScene.texture,this.matAdapt.uniforms.tPrev.value=l.texture,this.matAdapt.uniforms.uDt.value=i,this.matAdapt.uniforms.uReset.value=this.adaptReset?1:0,this._pass(this.matAdapt,c),this.adaptIdx=1-this.adaptIdx,this.adaptReset=!1,o.tScene.value=this.rtScene.texture,o.tDepth.value=this.rtScene.depthTexture,o.tBloom.value=a.texture,o.tAdapt.value=c.texture,o.uResolution.value.set(this.w,this.h),o.uNearFar.value.set(e.near,e.far),o.uTime.value=s;let h=e.matrixWorld.elements;o.uCamRight.value.set(h[0],h[1],h[2]),o.uCamUp.value.set(h[4],h[5],h[6]),o.uCamFwd.value.set(-h[8],-h[9],-h[10]),o.uCamPos.value.copy(e.position);let u=Math.tan(Yn.degToRad(e.fov)*.5);o.uTanFov.value.set(u*e.aspect,u),o.uPrevViewProj.value.copy(this.prevViewProj),this._vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.prevViewProj.copy(this._vp),this.fxaa?(this._pass(this.matComposite,this.rtLDR),this.matFXAA.uniforms.tDiffuse.value=this.rtLDR.texture,this.matFXAA.uniforms.resolution.value.set(1/this.w,1/this.h),this._pass(this.matFXAA,null)):this._pass(this.matComposite,null)}};var A0=`
attribute vec4 aDrop;       // x, y (0..1), radius (in screen heights), strength
uniform float uAspect;
varying vec2 vP; varying float vS;
void main() {
  vP = position.xy; vS = aDrop.w;
  vec2 c = aDrop.xy * 2.0 - 1.0;
  gl_Position = vec4(c + position.xy * vec2(aDrop.z / uAspect, aDrop.z) * 2.0 * vec2(1.0, 1.18), 0.0, 1.0);
}`,R0=`
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
}`,yr=class{constructor(t,e=120){this.renderer=t,this.max=e,this.rt=new de(640,360,{type:Q.hdrType,format:se,depthBuffer:!1,minFilter:$t,magFilter:$t}),this.x=new Float32Array(e),this.y=new Float32Array(e),this.r=new Float32Array(e),this.vy=new Float32Array(e),this.vx=new Float32Array(e),this.life=new Float32Array(e),this.wait=new Float32Array(e),this.head=0,this.rainAcc=0,this.count=0;let i=new _i;i.setAttribute("position",new Qt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),this.aDrop=new qe(new Float32Array(e*4),4),this.aDrop.setUsage(Fi),i.setAttribute("aDrop",this.aDrop),i.instanceCount=0,this.dropMat=new Kt({uniforms:{uAspect:{value:16/9}},vertexShader:A0,fragmentShader:R0,transparent:!0,depthTest:!1,depthWrite:!1,blending:Wi}),this.drops=new Jt(i,this.dropMat),this.drops.frustumCulled=!1,this.fadeMat=new Kt({uniforms:{uK:{value:.95}},vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform float uK; void main(){ gl_FragColor = vec4(uK); }",transparent:!0,depthTest:!1,depthWrite:!1,blending:ro,blendEquation:Pi,blendSrc:cr,blendDst:ao,blendSrcAlpha:cr,blendDstAlpha:rs}),this.fade=new Jt(new hi(2,2),this.fadeMat),this.fade.frustumCulled=!1,this.scene=new ri,this.scene.add(this.fade,this.drops),this.fade.renderOrder=0,this.drops.renderOrder=1,this.cam=new si(-1,1,1,-1,0,1),this.needClear=!0,this.sheet=0}get texture(){return this.rt.texture}spawn(t,e=0){for(let i=0;i<t;i++){let s=this.head;this.head=(this.head+1)%this.max,this.x[s]=Math.random(),this.y[s]=Math.pow(Math.random(),.8);let r=Math.random()<.22+.35*e;this.r[s]=r?.016+Math.random()*.026:.004+Math.random()*.011,this.vy[s]=0,this.vx[s]=0,this.wait[s]=r?Math.random()*1.6:1e9,this.life[s]=r?9:2.5+Math.random()*5}}wipe(){this.life.fill(0),this.needClear=!0,this.sheet=0}update(t,e,i,s){if(i)(this.count>0||!this.needClear)&&this.wipe();else{this.rainAcc+=t*e;let h=Math.floor(this.rainAcc);this.rainAcc-=h,h>0&&this.spawn(Math.min(h,6))}this.sheet=Math.max(0,this.sheet-t*.42);let r=this.aDrop.array,o=0;for(let h=0;h<this.max;h++){if(this.life[h]<=0)continue;if(this.life[h]-=t,this.wait[h]<1e8&&(this.wait[h]-=t,this.wait[h]<=0&&(this.vy[h]=Math.min(.2,this.vy[h]+t*(.12+4*this.r[h])),Math.random()<t*.8&&(this.vy[h]*=.2,this.wait[h]=Math.random()*.5),this.vx[h]+=(Math.random()-.5)*t*.5,this.vx[h]*=Math.exp(-t*4),this.y[h]-=this.vy[h]*t,this.x[h]+=this.vx[h]*t,this.r[h]-=t*.0012,this.y[h]<-.06||this.r[h]<.004))){this.life[h]=0;continue}let u=Math.min(1,this.life[h]/.8),d=o*4;r[d]=this.x[h],r[d+1]=this.y[h],r[d+2]=this.r[h]*(.6+.4*u),r[d+3]=u,o++}this.count=o,this.drops.geometry.instanceCount=o,this.aDrop.needsUpdate=!0,this.dropMat.uniforms.uAspect.value=s,this.fadeMat.uniforms.uK.value=Math.exp(-t*2.6);let a=this.renderer,l=a.getRenderTarget(),c=a.autoClear;a.setRenderTarget(this.rt),this.needClear&&(a.setClearColor(0,0),a.clear(),this.needClear=!1),a.autoClear=!1,a.render(this.scene,this.cam),a.autoClear=c,a.setRenderTarget(l)}};var Jn={cinematic:{key:"cinematic",label:"CINEMATIC",oceanRings:512,oceanSegs:512,oceanStep:.28,envSize:512,maxPixels:3686400,minScale:.6,refraction:!0,foamAcc:1024,ripples:!0,motionBlur:!0,fxaa:!0,bloomLevels:5,rain:26e3,splashes:2600,spray:9e3,bubbles:1400,motes:2600,lensRes:.5,lensDrops:150},high:{key:"high",label:"HIGH",oceanRings:384,oceanSegs:384,oceanStep:.36,envSize:256,maxPixels:2073600,minScale:.55,refraction:!0,foamAcc:512,ripples:!0,motionBlur:!1,fxaa:!0,bloomLevels:5,rain:15e3,splashes:1500,spray:5e3,bubbles:900,motes:1500,lensRes:.5,lensDrops:100},performance:{key:"performance",label:"PERFORMANCE",oceanRings:256,oceanSegs:256,oceanStep:.5,envSize:128,maxPixels:921600,minScale:.5,refraction:!1,foamAcc:0,ripples:!1,motionBlur:!1,fxaa:!1,bloomLevels:4,rain:6e3,splashes:500,spray:2e3,bubbles:400,motes:600,lensRes:.35,lensDrops:60}},Mr=class{constructor(t){this.renderer=t,this.profile=Jn.cinematic,this.scale=1,this.frameMs=16.7,this.fps=60,this._acc=0,this._slow=0,this._fast=0,this.adaptive=!0,this.info=this.detect()}detect(){let t=this.renderer.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),i=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown",s=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),r=/SwiftShader|llvmpipe|Software|Basic Render/i.test(i),o=/Intel\(R\) (U?HD|Iris)(?! Xe)|Mali|Adreno|PowerVR/i.test(i);return{webgl2:this.renderer.capabilities.isWebGL2,webgpu:typeof navigator<"u"&&!!navigator.gpu,halfFloat:!!t.getExtension("EXT_color_buffer_float")||!!t.getExtension("EXT_color_buffer_half_float"),gpu:i,mobile:s,software:r,weak:o}}pickDefault(){let t=this.info;return t.software||t.mobile?"performance":t.weak?"high":"cinematic"}setProfile(t){this.profile=Jn[t]||Jn.cinematic,this.scale=1,this._slow=this._fast=0}renderSize(t,e){let i=this.profile.maxPixels,s=Math.min(1,Math.sqrt(i/Math.max(1,t*e)));return s*=this.scale,[Math.max(320,Math.round(t*s)),Math.max(180,Math.round(e*s))]}update(t){let e=t*1e3;return this.frameMs+=(e-this.frameMs)*.06,this.fps=1e3/this.frameMs,this.adaptive?(this.frameMs>21.5?(this._slow+=t,this._fast=0):this.frameMs<13.5?(this._fast+=t,this._slow=0):(this._slow*=.9,this._fast*=.9),this._slow>1.5&&this.scale>this.profile.minScale?(this.scale=Math.max(this.profile.minScale,this.scale-.08),this._slow=0,!0):this._fast>6&&this.scale<1?(this.scale=Math.min(1,this.scale+.05),this._fast=0,!0):!1):!1}};var gn=[["hips",-1,0,0,0],["spine",0,0,.12,0],["chest",1,0,.3,0],["neck",2,0,.525,0],["head",3,0,.625,.012],["upperArmL",2,.178,.455,0],["foreArmL",5,.236,.172,.006],["handL",6,.286,-.078,.032],["upperArmR",2,-.178,.455,0],["foreArmR",8,-.236,.172,.006],["handR",9,-.286,-.078,.032],["thighL",0,.096,-.07,0],["shinL",11,.106,-.505,.006],["footL",12,.106,-.925,-.016],["thighR",0,-.096,-.07,0],["shinR",14,-.106,-.505,.006],["footR",15,-.106,-.925,-.016]],U={};gn.forEach((n,t)=>{U[n[0]]=t});var C0=new R(0,.082,.088),Ot={jacket:[.72,.15,.04],jacketDark:[.42,.085,.028],tape:[.85,.87,.84],pants:[.045,.055,.08],shoe:[.022,.022,.024],skin:[.62,.43,.34],skinDark:[.46,.29,.22],hair:[.03,.024,.02],lip:[.36,.16,.14],eye:[.05,.035,.03]},br=class{constructor(){this.pos=[],this.col=[],this.si=[],this.sw=[],this.idx=[],this.n=0}vert(t,e,i){this.pos.push(t.x,t.y,t.z),this.col.push(e[0],e[1],e[2]);let s=[0,0,0,0],r=[0,0,0,0],o=0;for(let a=0;a<i.length&&a<4;a++)s[a]=i[a][0],r[a]=i[a][1],o+=i[a][1];for(let a=0;a<4;a++)r[a]/=o||1;return this.si.push(...s),this.sw.push(...r),this.n++}tube(t,e,i=!0,s=!0){let r=new R,o=new R,a=new R,l=new R,c=new R(0,0,1),h=new R(0,1,0),u=[];for(let f=0;f<t.length;f++){let g=t[Math.max(0,f-1)].c,v=t[Math.min(t.length-1,f+1)].c;r.subVectors(v,g).normalize(),t[f].ax?o.copy(t[f].ax):(o.crossVectors(r,c),o.lengthSq()<.04&&o.crossVectors(r,h),o.normalize()),a.crossVectors(o,r).normalize();let m=this.n;for(let p=0;p<e;p++){let _=p/e*Math.PI*2,x=Math.cos(_),w=Math.sin(_),C=t[f].rx,y=t[f].rz;if(t[f].shape){let O=t[f].shape(_,x,w);C*=O,y*=O}l.copy(t[f].c).addScaledVector(o,x*C).addScaledVector(a,w*y);let A=typeof t[f].col=="function"?t[f].col(_,l):t[f].col;this.vert(l,A,t[f].w)}u.push(m)}for(let f=0;f<u.length-1;f++)for(let g=0;g<e;g++){let v=u[f]+g,m=u[f]+(g+1)%e,p=u[f+1]+g,_=u[f+1]+(g+1)%e;this.idx.push(v,p,m,m,p,_)}let d=(f,g,v)=>{let m=typeof g.col=="function"?g.col(0,g.c):g.col,p=this.vert(g.c,m,g.w);for(let _=0;_<e;_++){let x=f+_,w=f+(_+1)%e;v?this.idx.push(p,w,x):this.idx.push(p,x,w)}};i&&d(u[0],t[0],!0),s&&d(u[u.length-1],t[t.length-1],!1)}build(){let t=new Pe;return t.setAttribute("position",new Ne(this.pos,3)),t.setAttribute("color",new Ne(this.col,3)),t.setAttribute("skinIndex",new Gn(this.si,4)),t.setAttribute("skinWeight",new Ne(this.sw,4)),t.setIndex(this.idx),t.computeVertexNormals(),t}},xe=(n,t,e)=>new R(n,t,e),fi=(n,t,e)=>new R().lerpVectors(n,t,e),Fc=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function P0(){let n=new br,t=18,e=r=>{let o=gn[U[r]];return xe(o[2],o[3],o[4])},i=[[-.135,.12,.095],[-.085,.165,.116],[-.02,.176,.12],[.05,.166,.114],[.11,.156,.108],[.17,.152,.106],[.24,.164,.114],[.31,.18,.124],[.385,.184,.128],[.445,.186,.118],[.488,.152,.1],[.52,.1,.086],[.552,.08,.08],[.58,.074,.076]],s=r=>{if(r<.02)return[[U.hips,1]];if(r<.14){let o=Fc(.02,.14,r);return[[U.hips,1-o],[U.spine,o]]}if(r<.2)return[[U.spine,1]];if(r<.32){let o=Fc(.2,.32,r);return[[U.spine,1-o],[U.chest,o]]}return[[U.chest,1]]};n.tube(i.map(([r,o,a])=>{let l=r>-.06,c=l?1.07:1;return{c:xe(0,r,l?.004:0),rx:o*c,rz:a*c,w:s(r),col:(h,u)=>l?r>.28&&r<.325?Ot.tape:Math.abs(u.x)<.012&&u.z>0||r>.5?Ot.jacketDark:Ot.jacket:Ot.pants}}),t),n.tube([{c:xe(0,.53,.002),rx:.063,rz:.066,col:Ot.skin,w:[[U.chest,.6],[U.neck,.4]]},{c:xe(0,.575,.006),rx:.061,rz:.064,col:Ot.skin,w:[[U.neck,1]]},{c:xe(0,.63,.012),rx:.06,rz:.063,col:Ot.skin,w:[[U.neck,.5],[U.head,.5]]},{c:xe(0,.665,.016),rx:.057,rz:.06,col:Ot.skin,w:[[U.head,1]]}],14);for(let r of[1,-1]){let o=r>0?U.upperArmL:U.upperArmR,a=r>0?U.foreArmL:U.foreArmR,l=r>0?U.handL:U.handR,c=e(r>0?"upperArmL":"upperArmR"),h=e(r>0?"foreArmL":"foreArmR"),u=e(r>0?"handL":"handR"),d=xe(u.x+r*.03,u.y-.182,u.z+.012),f=[];f.push({c:xe(c.x-r*.012,c.y+.052,0),rx:.036,rz:.04,col:Ot.jacket,w:[[U.chest,.65],[o,.35]]}),f.push({c:xe(c.x+r*.004,c.y+.02,0),rx:.064,rz:.066,col:Ot.jacket,w:[[U.chest,.4],[o,.6]]});let g=[[.12,.066],[.3,.062],[.52,.058],[.74,.054],[.9,.052]];for(let[_,x]of g){let w=_>.28&&_<.4;f.push({c:fi(c,h,_),rx:x,rz:x*1.04,col:w?Ot.tape:Ot.jacket,w:_>.8?[[o,.75],[a,.25]]:[[o,1]]})}f.push({c:h.clone(),rx:.051,rz:.053,col:Ot.jacket,w:[[o,.5],[a,.5]]});let v=[[.12,.052],[.32,.051],[.55,.046],[.78,.041],[.9,.04]];for(let[_,x]of v)f.push({c:fi(h,u,_),rx:x,rz:x,col:_>.86?Ot.jacketDark:Ot.jacket,w:_<.2?[[o,.25],[a,.75]]:[[a,1]]});f.push({c:fi(h,u,.955),rx:.027,rz:.031,col:Ot.skin,w:[[a,1]]}),f.push({c:u.clone(),rx:.021,rz:.031,col:Ot.skin,w:[[a,.5],[l,.5]]}),f.push({c:fi(u,d,.3),rx:.017,rz:.044,col:Ot.skin,w:[[l,1]]}),f.push({c:fi(u,d,.55),rx:.015,rz:.046,col:Ot.skin,w:[[l,1]]}),f.push({c:fi(u,d,.8),rx:.012,rz:.04,col:Ot.skinDark,w:[[l,1]]}),f.push({c:d.clone(),rx:.007,rz:.022,col:Ot.skinDark,w:[[l,1]]}),n.tube(f,12);let m=fi(u,d,.22).add(xe(0,0,.034)),p=fi(u,d,.52).add(xe(r*.008,0,.066));n.tube([{c:m,rx:.012,rz:.013,col:Ot.skin,w:[[l,1]]},{c:fi(m,p,.6),rx:.011,rz:.011,col:Ot.skin,w:[[l,1]]},{c:p,rx:.007,rz:.007,col:Ot.skinDark,w:[[l,1]]}],7)}for(let r of[1,-1]){let o=r>0?U.thighL:U.thighR,a=r>0?U.shinL:U.shinR,l=r>0?U.footL:U.footR,c=e(r>0?"thighL":"thighR"),h=e(r>0?"shinL":"shinR"),u=e(r>0?"footL":"footR"),d=[];d.push({c:xe(c.x,c.y+.045,0),rx:.08,rz:.09,col:Ot.pants,w:[[U.hips,.7],[o,.3]]});let f=[[.05,.094,.1],[.25,.09,.096],[.5,.079,.084],[.75,.067,.07],[.92,.06,.062]];for(let[m,p,_]of f)d.push({c:fi(c,h,m),rx:p,rz:_,col:Ot.pants,w:m<.15?[[U.hips,.4],[o,.6]]:m>.85?[[o,.75],[a,.25]]:[[o,1]]});d.push({c:h.clone(),rx:.058,rz:.061,col:Ot.pants,w:[[o,.5],[a,.5]]});let g=[[.1,.056,.06],[.28,.057,.066],[.5,.05,.056],[.75,.042,.045],[.93,.038,.04]];for(let[m,p,_]of g)d.push({c:fi(h,u,m).add(xe(0,0,m>.15&&m<.6?-.008:0)),rx:p,rz:_,col:Ot.pants,w:m<.2?[[o,.25],[a,.75]]:[[a,1]]});d.push({c:u.clone(),rx:.036,rz:.04,col:Ot.shoe,w:[[a,.5],[l,.5]]}),n.tube(d,14,!0,!1);let v=u.y-.045;n.tube([{c:xe(u.x,v+.012,u.z-.068),rx:.03,rz:.03,col:Ot.shoe,w:[[l,1]]},{c:xe(u.x,v+.006,u.z-.035),rx:.042,rz:.046,col:Ot.shoe,w:[[l,.8],[a,.2]]},{c:xe(u.x,v,u.z+.03),rx:.046,rz:.048,col:Ot.shoe,w:[[l,1]]},{c:xe(u.x+r*.004,v-.008,u.z+.1),rx:.049,rz:.036,col:Ot.shoe,w:[[l,1]]},{c:xe(u.x+r*.006,v-.014,u.z+.165),rx:.044,rz:.026,col:Ot.shoe,w:[[l,1]]},{c:xe(u.x+r*.006,v-.018,u.z+.205),rx:.028,rz:.016,col:Ot.shoe,w:[[l,1]]}],12)}return n.build()}function L0(){let n=new br,t=xe(0,.722,.022),e=20,i=26,s=[];for(let c=0;c<=e;c++){let h=c/e*Math.PI,u=Math.cos(h),d=Math.sin(h),f=Math.max(0,-u),g=t.y+u*(u>0?.108:.118),v=.078*(1-.3*f*f),m=.097*(1-.2*f*f),p=t.z+.012*f-.006*Math.max(0,u);s.push({c:xe(0,g,p),ax:xe(1,0,0),rx:Math.max(.004,v*d),rz:Math.max(.004,m*d),w:f>.75?[[U.head,.7],[U.neck,.3]]:[[U.head,1]],shape:(_,x,w)=>{let C=Math.max(0,-w),y=1,A=g-t.y;return y+=.2*Math.exp(-Math.pow((A+.022)/.02,2))*Math.pow(C,26)*Math.pow(Math.max(0,1-Math.abs(x)*5),1),y+=.035*Math.exp(-Math.pow((A-.03)/.016,2))*Math.pow(C,3),y-=.03*Math.exp(-Math.pow((A-.008)/.012,2))*Math.pow(C,2)*Math.exp(-Math.pow((Math.abs(x)-.36)/.16,2)),y+=.05*Math.exp(-Math.pow((A+.088)/.022,2))*Math.pow(C,4),y},col:(_,x)=>{let w=x.y-t.y,C=x.x,y=x.z-t.z,A=y>0,O=A?.058+Math.abs(C)*-.25:-.045-Math.max(0,-y)*.2;if(w>O)return Ot.hair;if(A){if(Math.abs(w-.01)<.01&&Math.abs(Math.abs(C)-.031)<.014)return Ot.eye;if(Math.abs(w-.03)<.006&&Math.abs(Math.abs(C)-.031)<.022)return Ot.hair;if(Math.abs(w+.058)<.007&&Math.abs(C)<.024)return Ot.lip;if(w<-.02&&w>-.1&&Math.abs(C)>.02)return Ot.skinDark}return Ot.skin}})}n.tube(s,i,!1,!1);let r=n.build(),o=r.attributes.position,a=r.attributes.color,l=r.attributes.normal;for(let c=0;c<o.count;c++)a.getX(c)<.04&&a.getY(c)<.03&&o.setXYZ(c,o.getX(c)+l.getX(c)*.008,o.getY(c)+l.getY(c)*.008,o.getZ(c)+l.getZ(c)*.008);return r.computeVertexNormals(),r}var wr=class{constructor(){this.group=new Xe,this.group.name="survivor",this.bones=gn.map(t=>{let e=new us;return e.name=t[0],e}),gn.forEach((t,e)=>{let i=this.bones[e];if(t[1]>=0){let s=gn[t[1]];i.position.set(t[2]-s[2],t[3]-s[3],t[4]-s[4]),this.bones[t[1]].add(i)}else i.position.set(t[2],t[3],t[4])}),this.root=this.bones[0],this.group.add(this.root),this.group.updateMatrixWorld(!0),this.skeleton=new ar(this.bones),this.material=new lr({vertexColors:!0,roughness:.62,metalness:0,clearcoat:.28,clearcoatRoughness:.32,envMapIntensity:1}),this.body=new hs(P0(),this.material),this.head=new hs(L0(),this.material);for(let t of[this.body,this.head])t.frustumCulled=!1,t.layers.enable(1),this.group.add(t),t.bind(this.skeleton,new Gt);this._v=new R}bone(t){return this.bones[U[t]]}eyeWorld(t){return t.copy(C0).applyMatrix4(this.bones[U.head].matrixWorld)}};var Nc=1025,I0=1.22,vo=9.81,Sr=.55;function pi(n,t,e,i,s,r,o,a,l=-1,c=-1){return{name:n,offset:new R(t,e,i),rest:new R(t,e,i),vol:s/1e3,half:r,cdaP:o,cdaA:a,bone:l,boneB:c,sub:0,depth:-10,world:new R,wasSub:0}}var Er=class n{constructor(t){this.waves=t,this.mass=80,this.inertia=new R(11.5,1.7,12.5),this.pos=new R,this.vel=new R,this.quat=new ee,this.angVel=new R,this.prevPos=new R,this.prevQuat=new ee,this.points=[pi("head",0,.7,.02,5,.11,.035,.012),pi("chest",0,.38,.01,26,.15,.13,.03),pi("pelvis",0,0,0,16,.13,.11,.02),pi("shoulderL",.21,.4,0,3.2,.07,.035,.006),pi("shoulderR",-.21,.4,0,3.2,.07,.035,.006),pi("armL",.28,.05,.02,1.8,.05,.04,.005,U.handL),pi("armR",-.28,.05,.02,1.8,.05,.04,.005,U.handR),pi("legL",.1,-.33,0,7.2,.09,.07,.008,U.shinL),pi("legR",-.1,-.33,0,7.2,.09,.07,.008,U.shinR),pi("footL",.105,-.82,0,4.4,.06,.055,.006,U.footL),pi("footR",-.105,-.82,0,4.4,.06,.055,.006,U.footR)],this.totalVol=this.points.reduce((e,i)=>e+i.vol,0),this.breathVol=0,this.extForce=new R,this.extTorque=new R,this.wind=new R,this.subFrac=0,this.mouthDepth=-1,this.eyeDepth=-1,this.relFlow=new R,this.relSpeed=0,this.dragG=0,this.aer=0,this.turb=0,this.surface=Zi(),this.surfaceH=0,this.splash=0,this.splashPos=new R,this._s=Zi(),this._w={vx:0,vy:0,vz:0},this._r=new R,this._p=new R,this._vp=new R,this._u=new R,this._f=new R,this._F=new R,this._T=new R,this._axis=new R,this._tmp=new R,this._tmp2=new R,this._qi=new ee,this._dq=new ee,this._up=new R,this._mouth=new R(0,.655,.105),this._eye=new R(0,.705,.1)}reset(t,e){let i=this.waves.sample(t,e,this._s);this.pos.set(t,i.h-.62,e),this.vel.set(i.vx,i.vy,i.vz),this.quat.identity(),this.angVel.set(0,0,0),this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat)}syncLimbs(t){let e=this._tmp,i=t.group.matrixWorld,s=n._im||(n._im=new Gt);s.copy(i).invert();for(let r of this.points)r.bone<0||(e.setFromMatrixPosition(t.bones[r.bone].matrixWorld).applyMatrix4(s),e.lengthSq()<1.6&&r.offset.lerp(e,.5))}step(t){let e=this.waves;this.prevPos.copy(this.pos),this.prevQuat.copy(this.quat);let i=this._F.set(0,0,0),s=this._T.set(0,0,0),r=this._axis.set(0,1,0).applyQuaternion(this.quat),o=0,a=0,l=0,c=0,h=0;this.relFlow.set(0,0,0),this.splash=0;let u=this._tmp2.set(0,0,0);for(let D=0;D<this.points.length;D++){let P=this.points[D],k=this._r.copy(P.offset).applyQuaternion(this.quat),Z=this._p.copy(this.pos).add(k);P.world.copy(Z);let Y=this._vp.copy(this.angVel).cross(k).add(this.vel),z=e.sample(Z.x,Z.z,this._s),J=z.h-Z.y;P.depth=J;let $=Math.max(0,Math.min(1,(J+P.half)/(2*P.half)));if($>.5!=P.wasSub>.5){let B=Math.abs(Y.y-z.vy)+.4*Math.hypot(Y.x-z.vx,Y.z-z.vz);B>this.splash&&(this.splash=B,this.splashPos.set(Z.x,z.h,Z.z))}P.wasSub=$,P.sub=$;let st=this._f.set(0,0,0),L=P.vol+(D===1?this.breathVol/1e3:0);if($>0){let B=Math.max(0,J),et=z.aer*Math.exp(-B/3.5),rt=Nc*(1-.72*et);et>l&&(l=et),z.turb>c&&(c=z.turb);let lt=e.velocityAtDepth(z.x0,z.z0,B,this._w),_t=Math.exp(-B/22);lt.vx+=z.bvx*_t,lt.vy+=z.bvy*_t,lt.vz+=z.bvz*_t,e.breakerFlow(Z.x,Z.y,Z.z,z.h,lt);let yt=Math.exp(-.05*B),vt=rt*L*$;st.set(vt*(1+Sr)*z.ax*yt,vt*(vo+(1+Sr)*(z.ay*yt+z.bay*_t)),vt*(1+Sr)*z.az*yt);let Lt=this._u.set(lt.vx-Y.x,lt.vy-Y.y,lt.vz-Y.z),H=Lt.dot(r),fe=this._tmp.copy(r).multiplyScalar(H),Mt=this._up.copy(Lt).sub(fe),Ct=.5*rt*P.cdaP*$*Mt.length()+42*P.cdaP*$/.1,gt=.5*rt*P.cdaA*$*Math.abs(H)+8*$*P.cdaA/.01,re=Mt.x*Ct+fe.x*gt,Ut=Mt.y*Ct+fe.y*gt,T=Mt.z*Ct+fe.z*gt;st.x+=re,st.y+=Ut,st.z+=T,u.x+=re,u.y+=Ut,u.z+=T,o+=L*$,this.relFlow.addScaledVector(Lt,L*$),h+=L*$}if($<1){let B=this._u.set(this.wind.x-Y.x,this.wind.y-Y.y,this.wind.z-Y.z),et=.5*I0*P.cdaP*1.1*(1-$)*B.length();st.addScaledVector(B,et)}i.add(st),s.add(this._tmp.copy(k).cross(st))}a=u.length(),this.subFrac=o/this.totalVol,this.aer=l,this.turb=c,h>0&&this.relFlow.multiplyScalar(1/h),this.relSpeed=this.relFlow.length(),this.dragG=a/(this.mass*vo);let d=this.mass+Sr*Nc*o;i.add(this.extForce),i.y-=this.mass*vo,this.vel.addScaledVector(i,t/d);let f=this.vel.length();f>45&&this.vel.multiplyScalar(45/f),this.pos.addScaledVector(this.vel,t),s.add(this.extTorque);let g=this._qi.copy(this.quat).invert(),v=this._tmp.copy(this.angVel).applyQuaternion(g),m=this._tmp2.copy(s).applyQuaternion(g),p=1+.6*this.subFrac,_=this.inertia.x*p,x=this.inertia.y*p,w=this.inertia.z*p,C=(m.x-(w-x)*v.y*v.z)/_,y=(m.y-(_-w)*v.z*v.x)/x,A=(m.z-(x-_)*v.x*v.y)/w;v.x+=C*t,v.y+=y*t,v.z+=A*t;let O=Math.exp(-(.25+1.1*this.subFrac)*t);v.multiplyScalar(O);let M=v.length();M>14&&v.multiplyScalar(14/M),this.angVel.copy(v).applyQuaternion(this.quat);let S=this.angVel.length()*t;S>1e-7&&(this._dq.setFromAxisAngle(this._r.copy(this.angVel).normalize(),S),this.quat.premultiply(this._dq).normalize());let F=this._r.copy(this._mouth).applyQuaternion(this.quat).add(this.pos),G=e.sample(F.x,F.z,this.surface);this.surfaceH=G.h,this.mouthDepth=G.h-F.y;let K=this._p.copy(this._eye).applyQuaternion(this.quat).add(this.pos);this.eyeDepth=G.h-K.y}};var Tr=class{constructor(){this.reset(),this.events=[]}reset(){this.oxygen=100,this.stamina=100,this.temp=37,this.fatigue=0,this.blackout=0,this.alive=!0,this.cause="",this.timeAlive=0,this.breathPhase=0,this.lung=.6,this.breathRate=.3,this.exertion=0,this.gaspTimer=0,this.submergedTime=0,this.wasUnder=!1,this.swallow=0,this.eff=1,this.condition=1,this.shiver=0,this.inhaling=!1}update(t,e){if(!this.alive)return;this.timeAlive+=t;let i=e.mouthUnder,s=e.effort;if(this.exertion+=(Et(s*.6+(100-this.stamina)/160+(100-this.oxygen)/120)-this.exertion)*(1-Math.exp(-t*.8)),i)this.submergedTime+=t,this.oxygen-=t*(2.3+2.4*s+1.5*e.turb)*(1+.5*this.swallow),this.wasUnder||(this.inhaling&&e.sudden&&(this.swallow=Math.min(1,this.swallow+.45),this.oxygen-=6),this.events.push({type:"submerge",lung:this.lung})),this.lung=Math.max(.12,this.lung-t*(.025+.03*s));else{if(this.wasUnder){let _=Et((100-this.oxygen)/60+this.submergedTime/12);this.gaspTimer=1.5+5.5*_,this.events.push({type:"surface",need:_,time:this.submergedTime}),this.breathPhase=0,this.submergedTime=0}let u=this.gaspTimer>0?1:0;this.gaspTimer=Math.max(0,this.gaspTimer-t),this.oxygen+=t*(15+13*u)*(1-.6*this.swallow),this.swallow=Math.max(0,this.swallow-t*.12);let d=Nt(.26,.95,Et(this.exertion*.9+u*.55));this.breathRate+=(d-this.breathRate)*(1-Math.exp(-t*1.4));let f=this.stamina<25?1+.35*Math.sin(this.timeAlive*2.7)*Math.sin(this.timeAlive*1.3):1,g=this.breathPhase;this.breathPhase+=t*this.breathRate*f,this.breathPhase>=1&&(this.breathPhase-=1);let v=this.breathPhase<.4;v&&!this.inhaling&&this.events.push({type:"inhale",strength:Et(.25+this.exertion*.8+u*.6),gasp:u>0&&g>this.breathPhase?1:u}),!v&&this.inhaling&&this.events.push({type:"exhale",strength:Et(.2+this.exertion*.7+u*.4),cough:this.swallow>.25?1:0}),this.inhaling=v;let m=Nt(.45,.95,Et(this.exertion+u)),p=v?.45+.5*m*(this.breathPhase/.4):.95*m-(.95*m-.4)*((this.breathPhase-.4)/.6)+0;this.lung+=(yi(p,.3,1)-this.lung)*(1-Math.exp(-t*9))}this.wasUnder=i,this.oxygen=yi(this.oxygen,0,100);let r=Oe(36,32.5,this.temp),o=1-Et((36-this.temp)/3.5),a=100-this.fatigue*.62,l=s>.42?(s-.42)*9:0,c=i?0:s<.42?(3.4-s*4)*(.45+.55*o)*(1-this.fatigue/170):0;this.stamina=yi(this.stamina+(c-l)*t,0,a),this.fatigue=yi(this.fatigue+t*(.035+.16*s),0,100);let h=.0042*(1+.45*s)*(.6+.4*e.subFrac)*(1+.3*e.storm);this.temp-=h*t,this.shiver=Et((36.2-this.temp)/1.6)*(1-Et((33-this.temp)/1.5)),this.oxygen<=.01?this.blackout+=t/11:this.blackout-=t/3.5,this.temp<31.5&&(this.blackout+=t/40),this.blackout=Et(this.blackout),this.blackout>=1&&(this.alive=!1,this.cause=this.temp<31.5&&this.oxygen>5?"cold":"drown",this.events.push({type:"dead",cause:this.cause})),this.eff=Nt(.32,1,Oe(0,38,this.stamina))*(.45+.55*o)*(1-.6*this.blackout),this.condition=Et(Math.min(this.oxygen/100+.25,1)*(.4+.6*this.stamina/100)*(.35+.65*o)*(1-this.blackout))}};var Ar=new R(0,1,0),Rr=class{constructor(t,e,i){this.body=t,this.survival=e,this.input=i,this.yaw=Math.PI,this.pitch=0,this.control=1,this.impact=0,this.impactPeak=0,this.moveAmt=0,this.effort=0,this.swimBlend=0,this.underSwim=0,this.upHeld=!1,this.sprintHeld=!1,this.moveDir=new R(0,0,1),this.facing=new R(0,0,1),this.recover=0,this.tumble=0,this.events=[],this._lastImpact=-10,this._time=0,this._fwd=new R,this._right=new R,this._dir=new R,this._x=new R,this._y=new R,this._z=new R,this._m=new Gt,this._qt=new ee,this._qe=new ee,this._ax=new R,this._qs=new ee}fixedUpdate(t){let e=this.body,i=this.survival,s=this.input;this._time+=t;let r=e.dragG,o=r>this.impact+.25;this.impact=r>this.impact?Nt(this.impact,r,1-Math.exp(-t*30)):this.impact*Math.exp(-t*2.2),this.impactPeak=Math.max(this.impactPeak*Math.exp(-t*1.2),r),r>1.4&&o&&this._time-this._lastImpact>.8&&(this._lastImpact=this._time,this.events.push({type:"impact",strength:r,dir:e.relFlow.clone().normalize(),aer:e.aer}));let a=Et(1-Oe(.9,3.2,this.impact)-.75*e.aer-.55*e.turb),l=a<this.control?14:.55+.9*i.eff;this.control+=(Math.max(.04,a)-this.control)*(1-Math.exp(-t*l));let c=this.control*(i.alive?1:0)*(1-.8*i.blackout);this.tumble+=(Et(e.angVel.length()/3.5)*(1-c*.6)-this.tumble)*(1-Math.exp(-t*3)),this.recover=Math.max(0,this.recover-t);let h=s.enabled?s.axisX():0,u=s.enabled?s.axisZ():0,d=s.enabled&&s.up(),f=s.enabled&&s.sprint();this.upHeld=d,this.sprintHeld=f;let g=Math.cos(this.pitch),v=Math.sin(this.pitch),m=this._fwd.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),p=this._right.set(-m.z,0,m.x),_=e.mouthDepth>.45,x=u>0&&this.pitch<-.42,w=_||x;this.underSwim+=((w?1:0)-this.underSwim)*(1-Math.exp(-t*5));let C=this._dir.set(0,0,0);w?C.set(m.x*g,v,m.z*g).multiplyScalar(u).addScaledVector(p,h):C.copy(m).multiplyScalar(u).addScaledVector(p,h);let y=Math.min(1,C.length());y>.01&&(C.normalize(),this.moveDir.lerp(C,1-Math.exp(-t*6)).normalize()),this.moveAmt+=(y-this.moveAmt)*(1-Math.exp(-t*5)),this.facing.copy(m);let A=i.eff*c,O=Math.min(1,e.subFrac*1.25),M=e.extForce.set(0,0,0),S=0;if(y>.01){let z=(f?300:165)*A*O*y;M.addScaledVector(C,z),S+=(f?1:.5)*y}if(d&&(M.y+=(f?330:235)*A*O,S+=f?.75:.5),!w||d){let z=e.vel.y-e.surface.vy,J=Math.max(0,Math.min(150,(e.mouthDepth+.11)*1100-z*150))*A*O;M.y+=J,S+=.34*Math.min(1,J/100)+.08}this.effort+=(S-this.effort)*(1-Math.exp(-t*6));let F=!w&&y>.15?f?1:.72:0;this.swimBlend+=(F-this.swimBlend)*(1-Math.exp(-t*2.2));let G=this._y,K=this._z,D=this._x,P=this._ax.set(this.moveDir.x,0,this.moveDir.z);if(P.lengthSq()<.01?P.copy(m):P.normalize(),this.underSwim>.5&&(y>.1||d))y>.1?G.copy(this.moveDir):G.copy(Ar),K.copy(Ar).multiplyScalar(-1).lerp(m,Math.abs(G.y)),K.addScaledVector(G,-K.dot(G));else{let z=this.swimBlend;G.copy(Ar).multiplyScalar(1-z*.86).addScaledVector(P,z).normalize(),K.copy(z>.4?P:m).multiplyScalar(1-z*.9).addScaledVector(Ar,-z*.9),K.addScaledVector(G,-K.dot(G))}K.lengthSq()<1e-4&&K.copy(m).addScaledVector(G,-m.dot(G)),K.normalize(),D.crossVectors(G,K).normalize(),this._m.makeBasis(D,G,K),this._qt.setFromRotationMatrix(this._m);let k=this._qe.copy(e.quat).invert().premultiply(this._qt);k.w<0&&(k.x=-k.x,k.y=-k.y,k.z=-k.z,k.w=-k.w);let Z=2*Math.acos(Math.min(1,k.w)),Y=e.extTorque.set(0,0,0);if(Z>1e-4){let z=Math.sqrt(Math.max(1e-9,1-k.w*k.w));this._ax.set(k.x/z,k.y/z,k.z/z);let J=62*A,$=20*A;Y.copy(this._ax).multiplyScalar(J*Math.min(Z,1.4)).addScaledVector(e.angVel,-$);let st=Y.length(),L=95*A;st>L&&Y.multiplyScalar(L/st)}}};var xo=gn.length,Ni=Math.PI*2,Oc=new R(0,-1,0),Bc=["float","tread","swim","under","struggle","tumble","recover","exhaust"];function dt(n,t,e,i,s){let r=t*3;n[r]=e,n[r+1]=i,n[r+2]=s}var zc=(n,t,e)=>Math.exp(-Math.pow((n-t)/e,2));function kc(n,t,e,i){let s=e;dt(n,U.spine,.1,0,0),dt(n,U.chest,.05,0,0),dt(n,U.neck,-.14,0,0),dt(n,U.head,-.22,0,0);for(let r of[1,-1]){let o=r>0,a=Math.sin(t+(o?0:.35)),l=Math.cos(t+(o?0:.35));dt(n,o?U.upperArmL:U.upperArmR,-.3+.1*l*s,r*(.15+.42*a*s),r*Nt(.98,.62,i)),dt(n,o?U.foreArmL:U.foreArmR,-.62-.28*l*s,r*.25*a*s,0),dt(n,o?U.handL:U.handR,.18*a*s,0,r*.15*l*s);let c=t*1+(o?0:Math.PI);dt(n,o?U.thighL:U.thighR,Nt(-.52,-.2,i)+.32*Math.sin(c)*s,0,r*(.22+.13*Math.cos(c)*s)),dt(n,o?U.shinL:U.shinR,Nt(.88,.4,i)+.46*Math.sin(c-1.1)*s,0,0),dt(n,o?U.footL:U.footR,.45,0,0)}}function D0(n,t){dt(n,U.spine,-.1,.2*Math.sin(t),0),dt(n,U.chest,-.08,.2*Math.sin(t),0);let e=Math.pow(Math.max(0,Math.sin(t-.6)),3);dt(n,U.neck,-.3+.12*e,-.45*e,0),dt(n,U.head,-.38+.22*e,-.55*e,0);for(let i of[1,-1]){let s=i>0,r=((t+(s?0:Math.PI))%Ni+Ni)%Ni/Ni,o,a,l;if(r<.6){let h=r/.6,u=h*h*(3-2*h);o=Math.PI*(1-u),a=-.62*Math.sin(h*Math.PI),l=.16}else{let h=(r-.6)/.4,u=h*h*(3-2*h);o=-Math.PI*u,a=-1.25*Math.sin(h*Math.PI),l=.16+.42*Math.sin(h*Math.PI)}dt(n,s?U.upperArmL:U.upperArmR,-o,0,i*l),dt(n,s?U.foreArmL:U.foreArmR,a,0,0),dt(n,s?U.handL:U.handR,.1,0,0);let c=Math.sin(t*3+(s?0:Math.PI));dt(n,s?U.thighL:U.thighR,-.05+.27*c,0,i*.05),dt(n,s?U.shinL:U.shinR,.2+.3*Math.max(0,Math.sin(t*3+(s?0:Math.PI)+.9)),0,0),dt(n,s?U.footL:U.footR,.8,0,0)}}function U0(n,t){let e=(t%Ni+Ni)%Ni/Ni;dt(n,U.spine,-.06,0,0),dt(n,U.chest,-.06,0,0),dt(n,U.neck,-.22,0,0),dt(n,U.head,-.32,0,0);let i,s,r;if(e<.4){let l=e/.4,c=l*l*(3-2*l);i=-(Math.PI*.94)*(1-c)-.22*c,s=.14+.95*Math.sin(l*Math.PI),r=-.35*Math.sin(l*Math.PI)}else{let l=(e-.4)/.6,c=l*l*(3-2*l);i=-.22-(Math.PI*.94-.22)*c,s=.14+.12*Math.sin(l*Math.PI),r=-1.85*Math.sin(l*Math.PI)}let o=zc(e,.52,.12),a=zc(e,.7,.08);for(let l of[1,-1]){let c=l>0;dt(n,c?U.upperArmL:U.upperArmR,i,0,l*s),dt(n,c?U.foreArmL:U.foreArmR,r,0,0),dt(n,c?U.handL:U.handR,0,0,0),dt(n,c?U.thighL:U.thighR,-.1-.62*o+.12*a,0,l*(.08+.42*o)),dt(n,c?U.shinL:U.shinR,.15+1.35*o,0,0),dt(n,c?U.footL:U.footR,.7-.5*o,0,0)}}function F0(n,t,e){dt(n,U.spine,-.12+.06*Math.sin(t*.7),.1*Math.sin(t*.9),0),dt(n,U.chest,-.1,.12*Math.sin(t*.9+.5),0),dt(n,U.neck,-.22,.15*Math.sin(t*.45),0),dt(n,U.head,-.46+.08*Math.sin(t*1.3),.2*Math.sin(t*.5+1),0);for(let i of[1,-1]){let s=i>0,r=s?0:2.3,o=Mi(e*2.3,s?3:9)-.5;dt(n,s?U.upperArmL:U.upperArmR,-1.75+.75*Math.sin(t+r)+o*.6,i*.3*Math.sin(t*.8+r),i*(.55+.3*Math.sin(t*1.7+r))),dt(n,s?U.foreArmL:U.foreArmR,-.65-.55*Math.sin(t*1.3+1+r),0,0),dt(n,s?U.handL:U.handR,.3*Math.sin(t*2+r),0,0),dt(n,s?U.thighL:U.thighR,-.4+.46*Math.sin(t*1.15+(s?0:Math.PI)),0,i*.2),dt(n,s?U.shinL:U.shinR,.75+.55*Math.sin(t*1.15+(s?0:Math.PI)-1),0,0),dt(n,s?U.footL:U.footR,.4,0,0)}}function N0(n,t){let e=(i,s)=>Mi(t*s,i)-.5;dt(n,U.spine,.24+e(1,.7)*.3,e(2,.6)*.3,e(3,.5)*.2),dt(n,U.chest,.18+e(4,.8)*.2,e(5,.6)*.25,0),dt(n,U.neck,.22+e(6,.9)*.3,e(7,.7)*.4,0),dt(n,U.head,.15+e(8,1)*.3,e(9,.8)*.4,e(10,.6)*.2);for(let i of[1,-1]){let s=i>0,r=s?20:40;dt(n,s?U.upperArmL:U.upperArmR,-.55+e(r,.9)*1.2,i*e(r+1,.7)*.8,i*(.75+e(r+2,.8)*.7)),dt(n,s?U.foreArmL:U.foreArmR,-.85+e(r+3,1.1)*.9,0,0),dt(n,s?U.handL:U.handR,e(r+4,1.3)*.5,0,e(r+5,1.2)*.4),dt(n,s?U.thighL:U.thighR,-.62+e(r+6,.8)*.9,0,i*(.25+e(r+7,.7)*.4)),dt(n,s?U.shinL:U.shinR,1+e(r+8,1)*.8,0,0),dt(n,s?U.footL:U.footR,.5,0,0)}}function O0(n,t,e){dt(n,U.spine,-.1-.06*e,0,0),dt(n,U.chest,-.12-.1*e,0,0),dt(n,U.neck,-.26,0,0),dt(n,U.head,-.5-.08*e,0,0);for(let i of[1,-1]){let s=i>0,r=Math.sin(t*.8+(s?0:.5));dt(n,s?U.upperArmL:U.upperArmR,-.15+.12*r,i*.5*r,i*1.15),dt(n,s?U.foreArmL:U.foreArmR,-.35-.2*r,0,0),dt(n,s?U.handL:U.handR,.25*r,0,0);let o=t*.8+(s?0:Math.PI);dt(n,s?U.thighL:U.thighR,-.42+.3*Math.sin(o),0,i*.24),dt(n,s?U.shinL:U.shinR,.8+.4*Math.sin(o-1.1),0,0),dt(n,s?U.footL:U.footR,.45,0,0)}}function B0(n,t){let e=Math.sin(t*.35);dt(n,U.spine,-.06,0,.04*e),dt(n,U.chest,-.1,0,0),dt(n,U.neck,-.28,.12*e,0),dt(n,U.head,-.55,.1*e,.08*e);for(let i of[1,-1]){let s=i>0;dt(n,s?U.upperArmL:U.upperArmR,-.1+.06*e,i*.12*e,i*1.24),dt(n,s?U.foreArmL:U.foreArmR,-.25-.08*e,0,0),dt(n,s?U.handL:U.handR,.15,0,0),dt(n,s?U.thighL:U.thighR,-.12+.07*Math.sin(t*.35+(s?0:2)),0,i*.14),dt(n,s?U.shinL:U.shinR,.26+.1*Math.sin(t*.35+(s?1:3)),0,0),dt(n,s?U.footL:U.footR,.6,0,0)}}var Cr=class{constructor(t,e,i,s){this.ch=t,this.body=e,this.player=i,this.sv=s,this.pose=new Float32Array(xo*3),this.tmp=new Float32Array(xo*3),this.w={},this.wt={};for(let r of Bc)this.w[r]=0,this.wt[r]=0;this.w.tread=1,this.phase=0,this.time=0,this.state="tread",this.splashiness=0,this._e=new Vn(0,0,0,"YXZ"),this._q=new ee,this._q2=new ee,this._u=new R,this._wb=new R,this._d=new R,this._qi=new ee,this._flow=new R,this._wLag=new R}update(t){let e=this.player,i=this.body,s=this.sv,r=this.wt;this.time+=t;let o=s.alive?e.control*(1-.7*s.blackout):0,a=1-Oe(.22,.78,o),l=1-a,c=e.underSwim,h=Math.max(e.moveAmt,e.upHeld?.8:0);r.tumble=a,r.under=l*c*h,r.swim=l*(1-c)*e.swimBlend;let u=Math.max(Et((38-s.oxygen)/26),e.upHeld&&e.sprintHeld?.75:0,Et(e.impact-.7)*.8);r.struggle=l*(1-c)*(1-r.swim)*u,r.recover=l*(1-c)*Et(s.gaspTimer/3)*(1-r.swim)*(1-u);let d=1-Oe(6,24,s.stamina);r.exhaust=l*(1-c)*(1-r.swim)*d*(1-u);let f=r.tumble+r.under+r.swim+r.struggle+r.recover+r.exhaust,g=Math.max(0,1-f),v=Et(e.effort*1.6);r.tread=g*(.35+.65*v),r.float=g-r.tread,f=0;let m=0;for(let L of Bc)this.w[L]+=(r[L]-this.w[L])*(1-Math.exp(-t*(L==="tumble"&&r[L]>this.w[L]?16:4.5))),f+=this.w[L],this.w[L]>m&&(m=this.w[L],this.state=L);let p=this.w,_=1/Math.max(1e-4,f),x=Ni*(p.float*.42+p.tread*(.75+.45*v)+p.swim*(.55+(e.sprintHeld?.32:.05))+p.under*(.5+(e.sprintHeld?.3:.05))+p.struggle*1.9+p.recover*.8+p.exhaust*.5+p.tumble*.3)*_*(.55+.45*s.eff);this.phase+=x*t;let w=this.phase,C=this.pose,y=this.tmp;C.fill(0);let A=L=>{if(L<=5e-4)return;let B=L*_;for(let et=0;et<C.length;et++)C[et]+=y[et]*B};p.float>5e-4&&(y.fill(0),kc(y,w,.38,1),A(p.float)),p.tread>5e-4&&(y.fill(0),kc(y,w,.75+.5*v,0),A(p.tread)),p.swim>5e-4&&(y.fill(0),D0(y,w),A(p.swim)),p.under>5e-4&&(y.fill(0),U0(y,w),A(p.under)),p.struggle>5e-4&&(y.fill(0),F0(y,w,this.time),A(p.struggle)),p.tumble>5e-4&&(y.fill(0),N0(y,this.time),A(p.tumble)),p.recover>5e-4&&(y.fill(0),O0(y,w,s.lung),A(p.recover)),p.exhaust>5e-4&&(y.fill(0),B0(y,w),A(p.exhaust));let O=l*(1-p.swim);C[U.chest*3]-=.07*(s.lung-.5)*O,C[U.spine*3]-=.04*(s.lung-.5)*O;let M=Math.max(-.6,Math.min(.6,e.pitch))*O;if(C[U.head*3]-=M*.45,C[U.neck*3]-=M*.25,s.shiver>.01){let L=s.shiver*.035;C[U.chest*3+1]+=Math.sin(this.time*61)*L,C[U.upperArmL*3]+=Math.sin(this.time*57+1)*L*1.5,C[U.upperArmR*3]+=Math.sin(this.time*59+2)*L*1.5,C[U.head*3+1]+=Math.sin(this.time*53)*L*.8}let S=this._qi.copy(i.quat).invert(),F=this._flow.lerp(this._u.copy(i.relFlow).applyQuaternion(S),1-Math.exp(-t*8)),G=F.length(),K=Et(G/4.5)*(.22+.78*p.tumble*_),D=this._wLag.lerp(this._wb.copy(i.angVel).applyQuaternion(S),1-Math.exp(-t*10)),P=Math.min(.7,D.length()*.07)*(.35+.65*p.tumble*_),k=null,Z=null;K>.01&&G>.05&&(this._d.copy(Oc).multiplyScalar(1-K).addScaledVector(F,K/G).normalize(),k=this._q2.setFromUnitVectors(Oc,this._d));let Y=this.ch.bones,z=this._e,J=this._q,$=1-Math.exp(-t*13);for(let L=0;L<xo;L++)z.set(C[L*3],C[L*3+1],C[L*3+2],"YXZ"),J.setFromEuler(z),L===U.upperArmL||L===U.upperArmR||L===U.thighL||L===U.thighR?(k&&J.premultiply(k),P>.01&&(Z=Hc.setFromAxisAngle(this._d.copy(D).normalize(),-P),J.premultiply(Z))):L===U.head&&P>.01&&(Z=Hc.setFromAxisAngle(this._d.copy(D).normalize(),-P*.5),J.premultiply(Z)),Y[L].quaternion.slerp(J,$);let st=(p.tread*(.25+.5*v)+p.swim*.9+p.struggle*1+p.recover*.5)*_;this.splashiness+=(st*Math.min(1,i.subFrac*1.3)*(1-c)-this.splashiness)*(1-Math.exp(-t*3))}},Hc=new ee;var Vc=new R(0,1,0),Gc=new ee,Pr=class{constructor(t,e,i,s,r,o){this.camera=t,this.ch=e,this.body=i,this.player=s,this.waves=r,this.input=o,this.target=1,this.blend=1,this.yaw=Math.PI,this.pitch=-.08,this.sens=.0021,this.intensity=1,this.qd=new ee,this.pivot=new R,this.tpPos=new R,this.inited=!1,this.arm=4.6,this.under=0,this.fovKick=0,this.eye=new R,this.chest=new R,this.surfaceAtCam=Zi(),this.script=null,this._m=new xt,this._f=new R,this._v=new R,this._v2=new R,this._q=new ee,this._q2=new ee,this._mat=new Gt,this._s=Zi(),this._fp=new R,this._qfp=new ee,this._qtp=new ee}toggle(){this.target=this.target>.5?0:1}setMode(t){this.target=t==="first"?0:1}get mode(){return this.target>.5?"third":"first"}lookQuat(t,e,i){let s=Math.cos(e);return this._f.set(Math.sin(t)*s,Math.sin(e),Math.cos(t)*s),this._mat.lookAt(this._v.set(0,0,0),this._f,Vc),i.setFromRotationMatrix(this._mat)}update(t){let e=this.camera,i=this.body,s=this.player,r=this.input.consumeMouse(this._m);this.input.enabled&&(this.yaw-=r.x*this.sens,this.pitch-=r.y*this.sens),this.script&&(this.yaw=this.script.yaw,this.pitch=this.script.pitch),this.pitch=yi(this.pitch,-1.45,1.45),s.yaw=this.yaw,s.pitch=this.pitch;let o=1/.85;this.blend=yi(this.blend+Math.sign(this.target-this.blend)*t*o,0,1),Math.abs(this.target-this.blend)<t*o&&(this.blend=this.target);let a=this.blend*this.blend*(3-2*this.blend),l=Et(1-s.control)*.85+s.tumble*.4,c=Et(l),h=this.intensity*Nt(.2,1,c)*Nt(1,.42,a),u=i.angVel,d=u.length();d>1e-5&&h>0&&(this._q.setFromAxisAngle(this._v.copy(u).multiplyScalar(1/d),d*h*t),this.qd.premultiply(this._q));let f=Nt(.32,2.6,c);this.qd.slerp(Gc,1-Math.exp(-t/f)).normalize(),this.ch.eyeWorld(this.eye),this.chest.setFromMatrixPosition(this.ch.bones[2].matrixWorld),this.inited||(this.pivot.copy(this.chest),this.inited=!0,this.tpPos.copy(this.chest).add(this._v.set(0,1.2,4))),this.lookQuat(this.yaw,this.pitch,this._qfp).premultiply(this.qd),this._fp.copy(this.eye);let g=1-Math.exp(-t*10),v=1-Math.exp(-t*5.5);this.pivot.x+=(this.chest.x-this.pivot.x)*g,this.pivot.z+=(this.chest.z-this.pivot.z)*g,this.pivot.y+=(this.chest.y+.22-this.pivot.y)*v;let p=3.5+.7*Et(this.waves.sigHeight/16)+1.8*Et(s.impactPeak-.6);this.arm+=(p-this.arm)*(1-Math.exp(-t*1.6));let _=Math.cos(this.pitch),x=this._f.set(Math.sin(this.yaw)*_,Math.sin(this.pitch),Math.cos(this.yaw)*_),w=this._v,C=Oe(.7,1.8,i.eyeDepth);this.under+=(C-this.under)*(1-Math.exp(-t*(C>this.under?3.5:2.2)));let y=this.arm,A=.5;for(let S=0;S<5&&(w.copy(this.pivot).addScaledVector(x,-y),w.y+=.62+.16*y,!(this.under>.98));S++){let F=this.waves.sample(w.x,w.z,this._s).h,G=(w.x+this.pivot.x)*.5,K=(w.z+this.pivot.z)*.5,D=this.waves.sample(G,K,this._s).h,P=(w.y+this.pivot.y+.3)*.5,k=Math.max(F+A-w.y,D+.2-P);if(k<=0||y<=1.7){k>0&&(w.y+=k*(1-this.under));break}y=Math.max(1.7,y*.78)}this.armNow=y,this.tpPos.lerp(w,1-Math.exp(-t*7.5));let O=this._v2.copy(this.pivot).addScaledVector(i.vel,.04);O.y+=.34,O.addScaledVector(x,2.2),this._mat.lookAt(this.tpPos,O,Vc),this._qtp.setFromRotationMatrix(this._mat),this._q.copy(Gc).slerp(this.qd,.45),this._qtp.premultiply(this._q),e.position.copy(this._fp).lerp(this.tpPos,a),e.quaternion.copy(this._qfp).slerp(this._qtp,a),this.fovKick+=(Et(s.impact-.6)*7-this.fovKick)*(1-Math.exp(-t*4));let M=Nt(82,66,a)+this.fovKick*this.intensity;Math.abs(M-e.fov)>.01&&(e.fov=M,e.updateProjectionMatrix()),e.updateMatrixWorld(!0),this.ch.head.visible=e.position.distanceTo(this.eye)>.34,this.waves.sample(e.position.x,e.position.z,this.surfaceAtCam)}};var Lr=class{constructor(t){this.canvas=t,this.keys=new Set,this.dx=0,this.dy=0,this.locked=!1,this.enabled=!1,this.pressed=new Set,this.onLockChange=null,window.addEventListener("keydown",e=>{e.repeat||(this.keys.add(e.code),this.pressed.add(e.code),this.enabled&&["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault())}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("mousemove",e=>{this.locked&&(this.dx+=e.movementX,this.dy+=e.movementY)}),this.virtual=null,this.touch=null}lock(){if(this.canvas.requestPointerLock){let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}}unlock(){document.exitPointerLock&&document.exitPointerLock()}down(t){return this.keys.has(t)}axisX(){if(this.virtual)return this.virtual.x||0;let t=(this.down("KeyD")||this.down("ArrowRight")?1:0)-(this.down("KeyA")||this.down("ArrowLeft")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.x:0)))}axisZ(){if(this.virtual)return this.virtual.z||0;let t=(this.down("KeyW")||this.down("ArrowUp")?1:0)-(this.down("KeyS")||this.down("ArrowDown")?1:0);return Math.max(-1,Math.min(1,t+(this.touch?this.touch.z:0)))}up(){return this.virtual?!!this.virtual.up:this.down("Space")||!!(this.touch&&this.touch.up)}sprint(){return this.virtual?!!this.virtual.sprint:this.down("ShiftLeft")||this.down("ShiftRight")||!!(this.touch&&this.touch.sprint)}consumeMouse(t){return t.x=this.dx,t.y=this.dy,this.dx=0,this.dy=0,t}endFrame(){this.pressed.clear()}};var Ir=class{constructor(t){this.waves=t,this.base=1,this.storm=1,this.locked=!1,this.wind=new R(26,0,0),this.windSpeed=26,this.gust=1,this.windAngle=0,this.rain=1,this.time=0}update(t){this.time+=t;let e=this.time,i=this.locked?0:(Mi(e*.021,3)-.5)*.22+(Mi(e*.09,5)-.5)*.08,s=Et(this.base+i*(.4+.6*this.base));this.storm+=(s-this.storm)*(1-Math.exp(-t*.25));let r=this.locked?0:(Mi(e*.035,11)-.5)*.9;this.windAngle=this.waves.windAngle+r,this.gust=.78+.34*Mi(e*.31,17)+.22*Mi(e*1.3,23)*this.storm,this.windSpeed=Nt(9,31,this.storm)*this.gust,this.wind.set(Math.cos(this.windAngle)*this.windSpeed,0,Math.sin(this.windAngle)*this.windSpeed);let o=this.locked?.9:.62+.38*Mi(e*.05,29);this.rain=Et(Nt(.25,1,this.storm)*o+.1*this.storm),Q.uStorm.value=this.storm,Q.uRain.value=this.rain,Q.uWindDir.value.set(Math.cos(this.windAngle),Math.sin(this.windAngle)),Q.uWindSpeed.value=this.windSpeed,Q.uFogDensity.value=Nt(1/5200,1/1500,this.rain)*(.8+.4*this.storm);let a=Nt(1.25,.86,this.storm);Q.uAmbient.value.set(.05*a,.06*a,.072*a),this.waves.setStorm(this.storm)}};var z0=`
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
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,k0=`
precision highp float;
uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor; uniform float uIntensity;
varying vec2 vQ; varying float vA;
void main() {
  float across = 1.0 - vQ.x * vQ.x;
  float along = smoothstep(0.0, 0.25, vQ.y) * (1.0 - smoothstep(0.55, 1.0, vQ.y));
  float a = across * along * vA * uIntensity;
  vec3 col = vec3(0.62, 0.68, 0.74) * (uAmbient * 3.4 + uFlashColor * uFlash * 2.2);
  gl_FragColor = vec4(col, a * 0.26);
}`,H0=`
attribute vec4 aSeed;
uniform float uTime; uniform float uTile; uniform float uIntensity;
${pn}
${pr}
${mn}
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
}`,V0=`
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
}`;function Wc(n,t){let e=new _i,i=t==="streak"?new Float32Array([-1,0,0,1,0,0,1,1,0,-1,1,0]):new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);e.setAttribute("position",new Qt(i,3)),e.setIndex([0,1,2,0,2,3]);let s=new Float32Array(n*4);for(let r=0;r<s.length;r++)s[r]=Math.random();return e.setAttribute("aSeed",new qe(s,4)),e.instanceCount=n,e}var Dr=class{constructor(t){this.group=new Xe,this.offset=new R,this.vel=new R(8,-9,0),this.camVel=new R,this._lastCam=new R,this._has=!1;let e=(i,s,r,o)=>{let a={uBox:{value:new R(...s)},uOffset:{value:this.offset},uVel:{value:this.vel},uCamVel:{value:this.camVel},uStreak:{value:o},uWidth:{value:r},uPx:{value:.001},uIntensity:{value:1},uAmbient:Q.uAmbient,uFlash:Q.uFlash,uFlashColor:Q.uFlashColor},l=new Jt(Wc(i,"streak"),new Kt({uniforms:a,vertexShader:z0,fragmentShader:k0,transparent:!0,depthWrite:!1,side:Ge}));return l.frustumCulled=!1,l.renderOrder=20,l};this.near=e(Math.round(t.rain*.62),[22,16,22],.0024,.02),this.far=e(Math.round(t.rain*.38),[80,46,80],.007,.03),this.group.add(this.near,this.far),this.splashU={uWaveA:Q.uWaveA,uWaveB:Q.uWaveB,uBrkA:Q.uBrkA,uBrkB:Q.uBrkB,uBrkC:Q.uBrkC,uTime:Q.uTime,uTile:{value:34},uIntensity:{value:1},uAmbient:Q.uAmbient,uFlash:Q.uFlash,uFlashColor:Q.uFlashColor},this.splash=new Jt(Wc(t.splashes,"quad"),new Kt({uniforms:this.splashU,vertexShader:H0,fragmentShader:V0,transparent:!0,depthWrite:!1})),this.splash.frustumCulled=!1,this.splash.renderOrder=12,this.group.add(this.splash)}update(t,e,i,s,r,o){this.vel.set(i.x*.5,-8.6-1.4*s,i.z*.5),this.offset.addScaledVector(this.vel,t);for(let c of["x","y","z"])Math.abs(this.offset[c])>4e3&&(this.offset[c]%=4e3);this._has&&t>0&&this.camVel.copy(e.position).sub(this._lastCam).multiplyScalar(1/t),this.camVel.length()>40&&this.camVel.setLength(40),this._lastCam.copy(e.position),this._has=!0;let a=2*Math.tan(Yn.degToRad(e.fov)*.5)/Math.max(1,o),l=s*(1-r);for(let c of[this.near,this.far])c.material.uniforms.uPx.value=a,c.material.uniforms.uIntensity.value=l*(c===this.far?.8:1),c.visible=l>.01;this.splashU.uIntensity.value=l,this.splash.visible=l>.01}};var G0=`
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
}`,W0=`
precision highp float;
uniform float uPower; uniform vec3 uColor; uniform float uFog;
varying float vSide; varying float vBright; varying float vH;
void main() {
  float core = exp(-vSide * vSide * 9.0);
  float glow = exp(-abs(vSide) * 2.2) * 0.25;
  float veil = mix(0.35, 1.0, smoothstep(0.0, 500.0, vH));   // the foot of the bolt is behind rain and spray
  gl_FragColor = vec4(uColor * (core + glow) * uPower * vBright * uFog * veil, 1.0);
}`,Ur=class{constructor(t=99){this.rnd=di(t),this.group=new Xe,this.strokes=[],this.age=1e9,this.active=!1,this.dir=new R(1,.3,0),this.pos=new R,this.dist=3e3,this.sheet=0,this.power=1,this.intensity=0,this.pendingThunder=[],this.onThunder=null,this.time=0,this.next=6,this.rate=1,this.mat=new Kt({uniforms:{uWidth:{value:6},uPower:{value:0},uColor:{value:new R(.82,.88,1)},uFog:{value:1}},vertexShader:G0,fragmentShader:W0,transparent:!0,blending:Hs,depthWrite:!1,depthTest:!0,side:Ge}),this.bolt=new Jt(new Pe,this.mat),this.bolt.frustumCulled=!1,this.bolt.visible=!1,this.bolt.renderOrder=2,this.group.add(this.bolt)}_buildBolt(t,e){let i=this.rnd,s=[],r=(f,g,v,m)=>{let p=[f,g],_=f.distanceTo(g),x=_*.13;for(let w=0;w<6;w++){let C=[p[0]];for(let y=0;y<p.length-1;y++){let A=p[y].clone().lerp(p[y+1],.5);A.x+=(i()-.5)*x,A.z+=(i()-.5)*x,A.y+=(i()-.5)*x*.35,C.push(A,p[y+1])}p=C,x*=.52}for(let w=0;w<p.length-1;w++)if(s.push([p[w],p[w+1],v]),m<2&&i()<(m===0?.075:.04)&&w>3&&w<p.length-6){let C=p[w+1].clone().sub(p[w]).normalize(),y=_*(.12+i()*.25),A=p[w].clone().addScaledVector(C,y*.6).add(new R((i()-.5)*y,-i()*y*.5,(i()-.5)*y));r(p[w].clone(),A,v*.42,m+1)}};r(t,e,1,0);let o=s.length,a=new Float32Array(o*4*3),l=new Float32Array(o*4*3),c=new Float32Array(o*4),h=new Float32Array(o*4),u=new Uint32Array(o*6);for(let f=0;f<o;f++){let[g,v,m]=s[f],p=v.clone().sub(g).normalize(),_=(x,w,C)=>{let y=(f*4+x)*3;a[y]=w.x,a[y+1]=w.y,a[y+2]=w.z,l[y]=p.x,l[y+1]=p.y,l[y+2]=p.z,c[f*4+x]=C,h[f*4+x]=m};_(0,g,-1),_(1,g,1),_(2,v,1),_(3,v,-1),u.set([f*4,f*4+1,f*4+2,f*4,f*4+2,f*4+3],f*6)}let d=new Pe;d.setAttribute("position",new Qt(a,3)),d.setAttribute("normal",new Qt(l,3)),d.setAttribute("aSide",new Qt(c,1)),d.setAttribute("aBright",new Qt(h,1)),d.setIndex(new Qt(u,1)),this.bolt.geometry.dispose(),this.bolt.geometry=d}strike(t,e={}){let i=this.rnd,s=e.azimuth!==void 0?e.azimuth:i()*Math.PI*2;this.dist=e.dist!==void 0?e.dist:900+Math.pow(i(),1.4)*6500,this.sheet=e.sheet!==void 0?e.sheet:i()<.38?1:0,this.power=e.power!==void 0?e.power:Nt(1.45,.55,Et(this.dist/7e3))*(.8+i()*.4),this.pos.set(t.x+Math.cos(s)*this.dist,0,t.z+Math.sin(s)*this.dist);let r=1300+i()*700;this.dir.set(Math.cos(s)*this.dist,this.sheet?r:r*.55,Math.sin(s)*this.dist).normalize(),this.strokes.length=0;let o=2+Math.floor(i()*4),a=0;for(let l=0;l<o;l++)this.strokes.push({t:a,peak:(l===0?1:.35+i()*.65)*this.power,tau:.045+i()*.09}),a+=.045+i()*.13;if(this.age=0,this.active=!0,!this.sheet){let l=new R(this.pos.x+(i()-.5)*500,r,this.pos.z+(i()-.5)*500);this._buildBolt(l,new R(this.pos.x,-5,this.pos.z)),this.mat.uniforms.uWidth.value=Math.max(2.2,this.dist*.0032)}return this.pendingThunder.push({at:this.time+this.dist/343,dist:this.dist,power:this.power,pos:this.pos.clone().setY(600)}),this}update(t,e,i,s=!0){this.time+=t,s&&(this.next-=t*i,this.next<=0&&(this.strike(e),this.next=this.rnd()<.22?1.2+this.rnd()*2.5:7+this.rnd()*22));let r=0;if(this.active){this.age+=t;let o=!1;for(let a of this.strokes){let l=this.age-a.t;if(l<0){o=!0;continue}let c=a.peak*Math.min(1,l/.008)*Math.exp(-l/a.tau);c>.004&&(o=!0),r+=c}r*=.85+.3*Math.sin(this.age*190)*Math.sin(this.age*67),o||(this.active=!1,r=0)}this.intensity=Math.max(0,r),Q.uFlash.value=this.intensity*.36,this.active&&(Q.uFlashDir.value.copy(this.dir),Q.uFlashSheet.value=this.sheet),this.bolt.visible=this.active&&!this.sheet&&this.intensity>.01,this.mat.uniforms.uPower.value=this.intensity*26,this.mat.uniforms.uFog.value=Math.exp(-this.dist*Q.uFogDensity.value*.55);for(let o=this.pendingThunder.length-1;o>=0;o--)if(this.time>=this.pendingThunder[o].at){let a=this.pendingThunder.splice(o,1)[0];this.onThunder&&this.onThunder(a)}}};var X0=`
attribute vec4 aPos;      // xyz, size
attribute vec4 aData;     // alpha, rotation, stretch, kind
attribute vec3 aVel;
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist;
void main() {
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  float c = cos(aData.y), s = sin(aData.y);
  vec2 q = vec2(position.x * c - position.y * s, position.x * s + position.y * c);
  vec3 wp = aPos.xyz + (right * q.x + up * q.y) * aPos.w;
  // streak fast droplets along their velocity
  vec3 vdir = aVel * aData.z;
  wp += vdir * position.y * 0.035;
  vUv = position.xy * 0.5 + 0.5; vA = aData.x; vKind = aData.w;
  vec4 mv = viewMatrix * vec4(wp, 1.0);
  vDist = -mv.z;
  gl_Position = projectionMatrix * mv;
}`,q0=`
precision highp float;
uniform sampler2D uTex; uniform vec3 uAmbient; uniform float uFlash; uniform vec3 uFlashColor;
varying vec2 vUv; varying float vA; varying float vKind; varying float vDist;
void main() {
  float a = texture(uTex, vUv).a * vA;
  a *= smoothstep(0.12, 0.7, vDist);            // do not slam huge sprites through the near plane
  if (a < 0.003) discard;
  vec3 col = mix(vec3(0.74, 0.79, 0.82), vec3(0.62, 0.68, 0.73), vKind) * (uAmbient * 3.6 + uFlashColor * uFlash * 1.9);
  gl_FragColor = vec4(col, a);
}`,Fr=class{constructor(t,e=6e3){this.waves=t,this.max=e,this.px=new Float32Array(e),this.py=new Float32Array(e),this.pz=new Float32Array(e),this.vx=new Float32Array(e),this.vy=new Float32Array(e),this.vz=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.size=new Float32Array(e),this.grow=new Float32Array(e),this.kind=new Float32Array(e),this.rot=new Float32Array(e),this.alpha=new Float32Array(e),this.head=0,this.alive=0;let i=new _i;i.setAttribute("position",new Qt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),i.setIndex([0,1,2,0,2,3]),this.aPos=new qe(new Float32Array(e*4),4),this.aPos.setUsage(Fi),this.aData=new qe(new Float32Array(e*4),4),this.aData.setUsage(Fi),this.aVel=new qe(new Float32Array(e*3),3),this.aVel.setUsage(Fi),i.setAttribute("aPos",this.aPos),i.setAttribute("aData",this.aData),i.setAttribute("aVel",this.aVel),i.instanceCount=0,this.mesh=new Jt(i,new Kt({uniforms:{uTex:{value:Lc()},uAmbient:Q.uAmbient,uFlash:Q.uFlash,uFlashColor:Q.uFlashColor},vertexShader:X0,fragmentShader:q0,transparent:!0,depthWrite:!1})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=15,this._s=Zi(),this._tick=0,this.emitAcc=0,this.hot=[]}emit(t,e,i,s,r,o,a,l,c,h=0,u=1){let d=this.head;this.head=(this.head+1)%this.max,this.px[d]=t,this.py[d]=e,this.pz[d]=i,this.vx[d]=s,this.vy[d]=r,this.vz[d]=o,this.life[d]=a,this.maxLife[d]=a,this.size[d]=l,this.kind[d]=c,this.grow[d]=h,this.rot[d]=Math.random()*6.283,this.alpha[d]=u}burst(t,e,i,s,r,o=0,a=0){let l=Math.min(260,Math.round(18+s*34));for(let c=0;c<l;c++){let h=Math.random()*6.283,u=Math.random(),d=(.8+2.6*Math.random())*Math.min(3.5,.6+s*.55),f=Math.random()<.4;this.emit(t+Math.cos(h)*u*.5,e+Math.random()*.2,i+Math.sin(h)*u*.5,Math.cos(h)*d*.8+o*d*1.4+r.x*.12,d*(.5+1.1*Math.random()),Math.sin(h)*d*.8+a*d*1.4+r.z*.12,f?1.1+Math.random()*1.6:.5+Math.random()*.7,f?.25+Math.random()*.4:.05+Math.random()*.1,f?1:0,f?1.1:.15,f?.35:.85)}}seedCrests(t,e,i,s,r){let o=this.waves,a=this._s;this.hot.length=0;let l=Math.round(r*(.5+.5*s)),c=Math.hypot(i.x,i.z)+.001;for(let h=0;h<l;h++){let u=Math.random()*6.283,d=3+Math.pow(Math.random(),1.6)*95,f=e.x+Math.cos(u)*d,g=e.z+Math.sin(u)*d;o.sample(f,g,a);let v=Math.max(0,.42-a.jac)*2.4,m=Math.max(v,a.aer*1.6,a.turb*.5);if(m<.05)continue;(this.hot.length<6||m>this.hot[this.hot.length-1].amount)&&(this.hot.push({x:f,y:a.h,z:g,amount:m}),this.hot.sort((_,x)=>x.amount-_.amount),this.hot.length>6&&(this.hot.length=6));let p=Math.min(10,Math.round(1+m*5));for(let _=0;_<p;_++){let x=Math.random()<.55,w=(Math.random()-.5)*2.4,C=(Math.random()-.5)*2.4,y=(.8+2.8*Math.random())*(.6+m);this.emit(f+w,a.h+.05+Math.random()*.25,g+C,a.vx+i.x*(.22+.3*Math.random()),a.vy*.5+y,a.vz+i.z*(.22+.3*Math.random()),x?1.6+Math.random()*2.4:.6+Math.random()*.9,x?.5+Math.random()*1:.07+Math.random()*.13,x?1:0,x?1.6:.25,x?.22:.7)}}}seedBreakers(t,e,i){let s=this.waves;for(let r of s.breakers){if(!r.active||r.height<2)continue;let o=Math.max(r.curl,r.brk*.8,r.turb*.35);if(o<.05)continue;let a=e.x-r.ox,l=e.z-r.oz,c=-a*r.dz+l*r.dx,h=a*r.dx+l*r.dz-r.s;if(Math.abs(h)>140)continue;this.emitAcc+=t*520*o*Math.min(1,r.height/8);let u=Math.min(90,Math.floor(this.emitAcc));this.emitAcc-=u;for(let d=0;d<u;d++){let f=c+(Math.random()-.5)*110;if(Math.exp(-(f*f)/(r.width*r.width))<.15)continue;let v=(Math.random()-.35)*r.front*1.3,m=r.ox+r.dx*(r.s+v)-r.dz*f,p=r.oz+r.dz*(r.s+v)+r.dx*f,_=s.heightFast(m,p)+Math.random()*.6,x=Math.random()<.6,w=r.speed*(.55+.6*Math.random());this.emit(m,_,p,r.dx*w+i.x*.2,(1.5+5.5*Math.random())*(.5+o),r.dz*w+i.z*.2,x?2.2+Math.random()*2.6:.8+Math.random()*1.1,x?.9+Math.random()*1.8:.1+Math.random()*.2,x?1:0,x?2.2:.35,x?.26:.8)}}}update(t,e,i){let s=this.max,r=this.waves,o=0,a=this.aPos.array,l=this.aData.array,c=this.aVel.array;this._tick=(this._tick+1)%3;for(let h=0;h<s;h++){let u=this.life[h];if(u<=0||(u-=t,this.life[h]=u,u<=0))continue;let d=this.kind[h],f=d>.5?2.4:.55,g=Math.exp(-f*t);if(this.vx[h]=i.x+(this.vx[h]-i.x)*g,this.vz[h]=i.z+(this.vz[h]-i.z)*g,this.vy[h]=(this.vy[h]-(d>.5?2.2:9.81)*t)*(d>.5?g:1),this.px[h]+=this.vx[h]*t,this.py[h]+=this.vy[h]*t,this.pz[h]+=this.vz[h]*t,this.size[h]+=this.grow[h]*t,h%3===this._tick&&this.vy[h]<0&&this.py[h]<r.heightFast(this.px[h],this.pz[h])-.15){this.life[h]=0;continue}let v=u/this.maxLife[h],m=Math.min(1,v*3)*Math.min(1,(1-v)*12),p=o*4;a[p]=this.px[h],a[p+1]=this.py[h],a[p+2]=this.pz[h],a[p+3]=this.size[h],l[p]=this.alpha[h]*m,l[p+1]=this.rot[h],l[p+2]=d>.5?0:1,l[p+3]=d,c[o*3]=this.vx[h],c[o*3+1]=this.vy[h],c[o*3+2]=this.vz[h],o++}this.alive=o,this.mesh.geometry.instanceCount=o,this.aPos.needsUpdate=!0,this.aData.needsUpdate=!0,this.aVel.needsUpdate=!0}};var Y0=`
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
}`,Z0=`
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
}`,J0=`
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
}`,$0=`
precision highp float;
uniform vec3 uLight;
varying vec2 vUv; varying float vA;
void main() {
  if (dot(vUv, vUv) > 1.0 || vA < 0.35) discard;
  gl_FragColor = vec4(uLight * 0.55, 1.0);
}`;function Xc(n,t){let e=new _i;if(e.setAttribute("position",new Qt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),e.setIndex([0,1,2,0,2,3]),t){let i=new Float32Array(n*t);for(let s=0;s<i.length;s++)i[s]=Math.random();e.setAttribute("aSeed",new qe(i,t))}return e.instanceCount=n,e}var Nr=class{constructor(t,e){this.waves=t,this.group=new Xe,this.under=0,this.isUnder=!1,this.depth=0,this.aeration=0,this.burst=0,this.onEnter=null,this.onExit=null,this.light=new R;let i=this.max=e.bubbles;this.bx=new Float32Array(i),this.by=new Float32Array(i),this.bz=new Float32Array(i),this.bvx=new Float32Array(i),this.bvz=new Float32Array(i),this.br=new Float32Array(i),this.bl=new Float32Array(i),this.bp=new Float32Array(i),this.head=0;let s=Xc(i,0);this.aPos=new qe(new Float32Array(i*4),4),this.aPos.setUsage(Fi),this.aSeed=new qe(new Float32Array(i),1),this.aSeed.setUsage(Fi),s.setAttribute("aPos",this.aPos),s.setAttribute("aSeed",this.aSeed),s.instanceCount=0,this.bubbles=new Jt(s,new Kt({uniforms:{uPx:{value:.001},uLight:{value:this.light}},vertexShader:Y0,fragmentShader:Z0})),this.bubbles.frustumCulled=!1,this.bubbles.renderOrder=8,this.moteOffset=new R,this.motes=new Jt(Xc(e.motes,4),new Kt({uniforms:{uBox:{value:new R(7,7,7)},uOffset:{value:this.moteOffset},uPx:{value:.001},uTime:Q.uTime,uLight:{value:this.light}},vertexShader:J0,fragmentShader:$0})),this.motes.frustumCulled=!1,this.motes.renderOrder=8,this.motes.visible=!1,this.group.add(this.bubbles,this.motes),this._w={vx:0,vy:0,vz:0},this._tick=0,this._exhale=0,this._aerAcc=0,this._kick=0,this._n=new R}bubble(t,e,i,s,r=6,o=0,a=0){let l=this.head;this.head=(this.head+1)%this.max,this.bx[l]=t,this.by[l]=e,this.bz[l]=i,this.br[l]=s,this.bl[l]=r,this.bp[l]=Math.random()*6.283,this.bvx[l]=o,this.bvz[l]=a}burstAt(t,e,i,s=1){for(let r=0;r<e;r++){let o=Math.random()*6.283,a=Math.acos(2*Math.random()-1),l=i*Math.cbrt(Math.random());this.bubble(t.x+Math.sin(a)*Math.cos(o)*l,t.y+Math.cos(a)*l,t.z+Math.sin(a)*Math.sin(o)*l,(.002+Math.pow(Math.random(),3)*.02)*s,2.5+Math.random()*5,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2)}}update(t,e,i,s,r,o,a,l,c,h){let u=i,d=e.position,f=this._n.set(u.nx,u.ny,u.nz),g=f.x*0+f.y*(d.y-u.h)+f.z*0;this.depth=-g,a.u.uWaterPlane.value.set(f.x,f.y,f.z,-(f.x*d.x+f.y*u.h+f.z*d.z)),a.u.uUnderAmount.value=g<.4?1:0;let v=this.isUnder;this.isUnder=v?g<.03:g<-.03;let m=1-Oe(-.12,.05,g);this.under+=(m-this.under)*(1-Math.exp(-t*18)),this.isUnder&&!v&&this.onEnter&&this.onEnter(),!this.isUnder&&v&&this.onExit&&this.onExit();let p=Math.max(0,this.depth),_=Q.uAmbient.value,x=Q.uFlash.value,w=Q.uFlashColor.value,C=Math.exp(-p*.085);a.u.uUnderColor.value.set((_.x*.9+w.x*x*.5)*.1*C,(_.y*.9+w.y*x*.5)*.3*C,(_.z*.9+w.z*x*.5)*.38*C),this.burst=Math.max(0,this.burst-t*.7);let y=Math.min(1,(u.aer*1.15+this.burst*.8)*Math.exp(-p/3.2)+u.turb*.22*Math.exp(-p/4.5));this.aeration+=(y-this.aeration)*(1-Math.exp(-t*(y>this.aeration?12:1.6))),a.u.uAeration.value=this.aeration*this.under;let A=1+2.8*this.aeration;a.u.uUnderExt.value.set(.3*A,.13*A,.1*A),a.u.uUnderDistort.value=.004+.01*Math.min(1,u.turb+this.aeration),a.u.uShaft.value=(.9-.5*l.storm+x*3)*Math.exp(-p*.12),a.u.uExposureBias.value=1+(.62*Math.exp(-p*.045)-1)*this.under;let O=2.6*C*(1+5*this.aeration);this.light.set((_.x*O+w.x*x*.8)*1,(_.y*O+w.y*x*.8)*1.25,(_.z*O+w.z*x*.8)*1.35);let M=2*Math.tan(Yn.degToRad(e.fov)*.5)/Math.max(1,h);if(this.bubbles.material.uniforms.uPx.value=M,this.motes.material.uniforms.uPx.value=M,o.wasUnder&&o.alive)for(this._exhale+=t*(5+16*r.effort+22*Et((40-o.oxygen)/40));this._exhale>=1;)this._exhale-=1,this.bubble(c.x+(Math.random()-.5)*.06,c.y,c.z+(Math.random()-.5)*.06,.003+Math.random()*.012,5,s.vel.x*.5,s.vel.z*.5);if(s.subFrac>.5)for(this._kick+=t*Math.min(140,s.relSpeed*s.relSpeed*3.2);this._kick>=1;){this._kick-=1;let P=s.points[2+(Math.random()*9|0)].world;this.bubble(P.x+(Math.random()-.5)*.3,P.y+(Math.random()-.5)*.3,P.z+(Math.random()-.5)*.3,.002+Math.random()*.007,3+Math.random()*3)}if(this.under>.3&&this.aeration>.04){this._aerAcc+=t*900*this.aeration;let P=Math.min(60,Math.floor(this._aerAcc));for(this._aerAcc-=P;P-- >0;){let k=Math.random()*6.283,Z=.4+Math.random()*3.6,Y=(Math.random()-.4)*3.2;this.bubble(d.x+Math.cos(k)*Z,d.y+Y,d.z+Math.sin(k)*Z,.002+Math.pow(Math.random(),2.5)*.03,2+Math.random()*4,(Math.random()-.5)*2,(Math.random()-.5)*2)}}let S=this.waves,F=this.aPos.array,G=this.aSeed.array,K=0;this._tick=(this._tick+1)%4;let D=S.breakers.some(P=>P.active&&(P.roll>.01||P.turb>.01));for(let P=0;P<this.max;P++){let k=this.bl[P];if(k<=0)continue;k-=t,this.bl[P]=k;let Z=this.br[P],Y=.18+2.6*Math.sqrt(Z);this.bp[P]+=t*(5+30*Z/.02);let z=this.bvx[P]+Math.sin(this.bp[P])*.12,J=Y,$=this.bvz[P]+Math.cos(this.bp[P]*.8)*.12;if(D){let B=this._w;B.vx=0,B.vy=0,B.vz=0,S.breakerFlow(this.bx[P],this.by[P],this.bz[P],u.h,B),z+=B.vx,J+=B.vy,$+=B.vz}let st=Math.exp(-t*1.5);if(this.bvx[P]*=st,this.bvz[P]*=st,this.bx[P]+=z*t,this.by[P]+=J*t,this.bz[P]+=$*t,P%4===this._tick&&this.by[P]>S.heightFast(this.bx[P],this.bz[P])-.02){this.bl[P]=0;continue}if(k<=0)continue;let L=K*4;F[L]=this.bx[P],F[L+1]=this.by[P],F[L+2]=this.bz[P],F[L+3]=Z*Math.min(1,k*2),G[K]=this.bp[P],K++}this.bubbles.geometry.instanceCount=K,this.aPos.needsUpdate=!0,this.aSeed.needsUpdate=!0,this.bubbles.visible=K>0,this.motes.visible=this.under>.02,this.moteOffset.addScaledVector(s.relFlow,t*.6),this.moteOffset.y-=t*.01}};function _o(n,t,e){let i=Math.floor(n.sampleRate*t),s=n.createBuffer(1,i,n.sampleRate),r=s.getChannelData(0),o=0,a=0,l=0,c=0;for(let u=0;u<i;u++){let d=Math.random()*2-1;e==="white"?r[u]=d*.6:e==="pink"?(o=.99765*o+d*.099046,a=.963*a+d*.2965164,l=.57*l+d*1.0526913,r[u]=(o+a+l+d*.1848)*.16):(c=(c+.02*d)/1.02,r[u]=c*3.2)}let h=Math.floor(n.sampleRate*.05);for(let u=0;u<h;u++){let d=u/h;r[i-h+u]=r[i-h+u]*(1-d)+r[u]*d}return s}var Or=class{constructor(){this.ctx=null,this.ready=!1,this.volume=.85,this.under=0,this.heartPhase=0,this.gurgleTimer=1,this.time=0,this.patter=0,this.lastCrash=-10}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.white=_o(e,4,"white"),this.pink=_o(e,6,"pink"),this.brown=_o(e,8,"brown");let i=u=>{let d=e.createGain();return d.gain.value=u,d},s=(u,d,f=.7)=>{let g=e.createBiquadFilter();return g.type=u,g.frequency.value=d,g.Q.value=f,g};this.G=i,this.F=s,this.master=i(this.volume);let r=e.createDynamicsCompressor();r.threshold.value=-16,r.ratio.value=5,r.attack.value=.004,r.release.value=.3,this.master.connect(r),r.connect(e.destination),this.air=i(1),this.airLP=s("lowpass",2e4,.7),this.airBoom=s("peaking",170,1.6),this.airBoom.gain.value=0,this.air.connect(this.airLP),this.airLP.connect(this.airBoom),this.airBoom.connect(this.master),this.water=i(0),this.water.connect(this.master);let o=e.createBuffer(2,Math.floor(e.sampleRate*2.6),e.sampleRate);for(let u=0;u<2;u++){let d=o.getChannelData(u),f=0;for(let g=0;g<d.length;g++){let v=g/e.sampleRate;f+=(Math.random()*2-1-f)*.12,d[g]=f*Math.exp(-v*2.4)*2.2}}this.verb=e.createConvolver(),this.verb.buffer=o,this.verbOut=i(.5),this.verb.connect(this.verbOut),this.verbOut.connect(this.master),this.waterSend=i(.9),this.water.connect(this.waterSend),this.waterSend.connect(this.verb);let a=(u,d=1)=>{let f=e.createBufferSource();return f.buffer=u,f.loop=!0,f.playbackRate.value=d,f.start(0,Math.random()*u.duration),f},l=(u,d,f)=>{let g=u;for(let v of d)g.connect(v),g=v;return g.connect(f),d[d.length-1]};this.rumble=l(a(this.brown,.8),[s("lowpass",130),i(.3)],this.air),this.wash=l(a(this.pink),[s("bandpass",620,.5),i(0)],this.air),this.roar=l(a(this.brown,1.3),[s("bandpass",210,.6),i(0)],this.air),this.roarF=this.roar,this.spots=[];for(let u=0;u<3;u++){let d=e.createPanner();d.panningModel="HRTF",d.distanceModel="inverse",d.refDistance=6,d.rolloffFactor=1.1,d.maxDistance=200;let f=i(0),g=s("bandpass",900+u*450,.7);a(this.pink,.9+u*.13).connect(g),g.connect(f),f.connect(d),d.connect(this.air),this.spots.push({p:d,g:f,x:0,y:0,z:0,a:0})}this.rainG=l(a(this.white),[s("highpass",1900),s("lowpass",9500),i(0)],this.air),this.patterG=l(a(this.white,1.3),[s("bandpass",3400,1.4),i(0)],this.air),this.windF=s("bandpass",420,1.8),this.windG=i(0),this.windPan=e.createStereoPanner?e.createStereoPanner():i(1),a(this.pink,.7).connect(this.windF),this.windF.connect(this.windG),this.windG.connect(this.windPan),this.windPan.connect(this.air),this.whistleF=s("bandpass",1300,7),this.whistleG=i(0),a(this.pink,1.1).connect(this.whistleF),this.whistleF.connect(this.whistleG),this.whistleG.connect(this.windPan),this.droneG=l(a(this.brown,.55),[s("lowpass",95),i(.9)],this.water),this.streamF=s("bandpass",520,.9),this.streamG=i(0),this.streamAM=i(0);let c=a(this.brown,.35),h=i(14);c.connect(s("lowpass",14)).connect(h),h.connect(this.streamAM.gain),a(this.pink,1.25).connect(this.streamF),this.streamF.connect(this.streamAM),this.streamAM.connect(this.streamG),this.streamG.connect(this.water),this.bodyG=i(1),this.bodyG.connect(this.master),this.ready=!0}setVolume(t){this.volume=t,this.master&&this.master.gain.setTargetAtTime(t,this.ctx.currentTime,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_burst(t){let e=this.ctx,i=e.currentTime+(t.delay||0),s=e.createBufferSource();s.buffer=t.buf,s.playbackRate.value=t.rate||1;let r=this.F(t.type||"bandpass",t.f0,t.q||1);t.f1&&r.frequency.exponentialRampToValueAtTime(Math.max(20,t.f1),i+t.dur);let o=this.G(0);o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(Math.max(2e-4,t.gain),i+(t.attack||.02)),o.gain.exponentialRampToValueAtTime(1e-4,i+t.dur),s.connect(r),r.connect(o);let a=o;if(t.pan!==void 0&&e.createStereoPanner){let l=e.createStereoPanner();l.pan.value=t.pan,o.connect(l),a=l}a.connect(t.out||this.air),t.verb&&a.connect(this.verb),s.start(i,Math.random()*(t.buf.duration-t.dur-.1)),s.stop(i+t.dur+.05)}_blip(t,e,i,s,r,o){let a=this.ctx,l=a.currentTime+r,c=a.createOscillator();c.type="sine",c.frequency.setValueAtTime(t,l),c.frequency.exponentialRampToValueAtTime(e,l+i);let h=this.G(0);h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(s,l+i*.3),h.gain.exponentialRampToValueAtTime(1e-4,l+i),c.connect(h),h.connect(o||this.water),c.start(l),c.stop(l+i+.02)}gurgle(t=.6){if(!this.ready)return;let e=6+Math.floor(Math.random()*10*t+4),i=0;for(let s=0;s<e;s++){let r=170+Math.random()*420;this._blip(r,r*(1.5+Math.random()*.9),.035+Math.random()*.05,.1*t*(.4+Math.random()),i),i+=.022+Math.random()*.06}this._burst({buf:this.pink,f0:380,f1:900,q:1.2,dur:Math.min(1.2,i+.2),gain:.16*t,attack:.05,out:this.water})}onEvent(t,e){if(!this.ready)return;let i=this.under>.5;switch(t){case"thunder":{let s=Et(e.dist/7e3),r=e.power,o=Nt(5,10,Math.random())*(.8+.4*s),a=this.ctx,l=a.currentTime,c=a.createBufferSource();c.buffer=this.brown,c.loop=!0,c.playbackRate.value=.7+Math.random()*.5;let h=this.F("lowpass",Nt(1100,170,s),.5),u=this.G(0),d=Nt(1,.28,s)*r;u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(d,l+Nt(.04,.6,s));let f=l+.5,g=2+Math.floor(Math.random()*4);for(let v=0;v<g;v++)f+=.4+Math.random()*1.1,u.gain.exponentialRampToValueAtTime(d*(.25+Math.random()*.5)*Math.exp(-v*.35),f);u.gain.exponentialRampToValueAtTime(1e-4,l+o),c.connect(h),h.connect(u),u.connect(this.air),u.connect(this.verb),c.start(l,Math.random()*6),c.stop(l+o+.1),e.dist<2200&&this._burst({buf:this.white,type:"highpass",f0:700,dur:.35,gain:.8*r*(1-e.dist/2200),attack:.004,verb:!0});break}case"impact":{let s=Math.min(1,e.strength/3.2);if(this.time-this.lastCrash<.5)break;this.lastCrash=this.time,this._burst({buf:this.white,type:"lowpass",f0:5200,f1:260,q:.6,dur:1.5+s,gain:.55+.5*s,attack:.015,verb:!0}),this._burst({buf:this.brown,type:"lowpass",f0:240,f1:60,q:.8,dur:1.9,gain:1*s+.3,attack:.02,out:this.master}),this._blip(74,34,.7,.5*s,0,this.master);break}case"splash":{let s=Math.min(1,e.v/5);this._burst({buf:this.pink,f0:1400+Math.random()*1200,f1:600,q:.8,dur:.16+.22*s,gain:.1+.22*s,attack:.006,pan:Math.random()*1.2-.6});break}case"inhale":{if(i)break;let s=e.strength,r=e.gasp?1:0,o=Nt(1.25,.42,s)*(r?.85:1);if(this._burst({buf:this.pink,f0:800+500*s,f1:1900+900*s,q:1.1,dur:o,gain:.05+.16*s+.12*r,attack:o*(r?.15:.4),out:this.bodyG}),r||s>.7){let a=this.ctx,l=a.currentTime,c=a.createOscillator();c.type="sawtooth",c.frequency.setValueAtTime(150+Math.random()*40,l),c.frequency.linearRampToValueAtTime(235+Math.random()*50,l+o*.8);let h=this.F("bandpass",720,4),u=this.F("bandpass",1250,5),d=this.G(0);d.gain.setValueAtTime(1e-4,l),d.gain.exponentialRampToValueAtTime(.045*(.5+r),l+o*.2),d.gain.exponentialRampToValueAtTime(1e-4,l+o*.9),c.connect(h),c.connect(u),h.connect(d),u.connect(d),d.connect(this.bodyG),c.start(l),c.stop(l+o)}break}case"exhale":{if(i)break;let s=e.strength,r=Nt(1.5,.5,s);if(this._burst({buf:this.pink,f0:950+300*s,f1:480,q:.9,dur:r,gain:.04+.11*s,attack:.06,out:this.bodyG}),e.cough)for(let o=0;o<3;o++)this._burst({buf:this.white,f0:900,f1:500,q:1.5,dur:.14,gain:.3,attack:.008,delay:.1+o*.22,out:this.bodyG});break}case"submerge":this._burst({buf:this.brown,type:"lowpass",f0:900,f1:120,dur:.7,gain:.7,attack:.01,out:this.master}),this.gurgle(.9),this.gurgleTimer=.8;break;case"surface":this._burst({buf:this.white,type:"highpass",f0:1500,f1:3500,dur:.5,gain:.3,attack:.02});break;case"camEnter":this._blip(120,52,.45,.35,0,this.master);break;case"camExit":this._burst({buf:this.pink,f0:2200,f1:900,q:.6,dur:.6,gain:.22,attack:.02});break;default:break}}update(t,e){if(!this.ready||this.ctx.state!=="running")return;this.time+=t;let i=this.ctx,s=i.currentTime,r=(d,f,g=.12)=>d.setTargetAtTime(f,s,g),o=this.under=e.under,a=i.listener,l=e.cam;a.positionX?(a.positionX.value=l.pos.x,a.positionY.value=l.pos.y,a.positionZ.value=l.pos.z,a.forwardX.value=l.fwd.x,a.forwardY.value=l.fwd.y,a.forwardZ.value=l.fwd.z,a.upX.value=l.up.x,a.upY.value=l.up.y,a.upZ.value=l.up.z):(a.setPosition(l.pos.x,l.pos.y,l.pos.z),a.setOrientation(l.fwd.x,l.fwd.y,l.fwd.z,l.up.x,l.up.y,l.up.z)),r(this.airLP.frequency,Nt(2e4,330*Math.exp(-e.depth*.06)+120,o*o),.06),r(this.airBoom.gain,9*o,.1),r(this.air.gain,Nt(1,.55,o),.1),r(this.water.gain,o*(1-.7*e.blackout),.08),r(this.bodyG.gain,(1-o)*(1-e.blackout),.05),r(this.verbOut.gain,.35+.5*o,.2),r(this.rumble.gain,.16+.26*e.storm+.1*Math.min(1,Math.abs(e.swellV)/6),.3);let c=0;for(let d of e.hot){let f=Math.hypot(d.x-l.pos.x,d.z-l.pos.z);c+=d.amount/(1+f/12)}r(this.wash.gain,Math.min(.5,.05*e.storm+.11*c),.25),r(this.roar.gain,Math.min(1.1,e.threat*e.threat*1.1),.2);for(let d=0;d<this.spots.length;d++){let f=this.spots[d],g=e.hot[d];g?(f.a<.02?(f.x=g.x,f.y=g.y,f.z=g.z):(f.x+=(g.x-f.x)*.1,f.y+=(g.y-f.y)*.1,f.z+=(g.z-f.z)*.1),f.a+=(Math.min(1,g.amount)-f.a)*.08):f.a*=.94,f.p.positionX?(f.p.positionX.value=f.x,f.p.positionY.value=f.y,f.p.positionZ.value=f.z):f.p.setPosition(f.x,f.y,f.z),r(f.g.gain,f.a*.9,.1)}r(this.rainG.gain,.12*e.rain,.4),this.patter+=Math.random()<t*9?1:0,this.patter*=Math.exp(-t*9),r(this.patterG.gain,.03*e.rain*(.4+Math.min(1.5,this.patter)),.03);let h=Et(e.windSpeed/34);r(this.windF.frequency,260+520*e.gust*h,.5),r(this.windG.gain,.34*Math.pow(h,1.5),.4),r(this.whistleF.frequency,900+900*e.gust*e.gust,.6),r(this.whistleG.gain,.05*Math.pow(h,2.2)*e.gust,.5),this.windPan.pan&&r(this.windPan.pan,yi(e.windPan*.55,-.8,.8),.6),r(this.streamG.gain,Math.min(1,e.aeration*1.4+Math.min(.5,e.relSpeed*.08))*.5,.1),r(this.streamF.frequency,420+500*e.aeration,.2),e.mouthUnder&&e.alive&&(this.gurgleTimer-=t*(1+1.6*Et((45-e.oxygen)/45)+e.effort*.6),this.gurgleTimer<=0&&(this.gurgle(.45+.5*Math.random()),this.gurgleTimer=1.1+Math.random()*2));let u=Et((62-e.oxygen)/55)*(e.alive?1:0)+(e.mouthUnder?.18:0);if(u>.05&&(this.heartPhase+=t*Nt(1.2,2.5,Et(u)),this.heartPhase>=1)){this.heartPhase-=1;let d=.5*Math.min(1,u*1.3);this._blip(62,40,.11,d,0,this.master),this._blip(52,36,.13,d*.7,.16,this.master)}r(this.master.gain,this.volume*(1-.85*e.blackout),.3)}};var K0=`
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
#touch .zone { position: absolute; top: 0; bottom: 0; pointer-events: auto; touch-action: none; }
#touch .zl { left: 0; width: 46%; } #touch .zr { left: 46%; right: 0; }
#touch .stick { position: absolute; width: 120px; height: 120px; margin: -60px 0 0 -60px; border: 1px solid rgba(255,255,255,.28); border-radius: 50%; display: none; pointer-events: none; }
#touch .stick b { position: absolute; left: 50%; top: 50%; width: 44px; height: 44px; margin: -22px 0 0 -22px; border-radius: 50%; background: rgba(255,255,255,.28); }
#touch .btn { position: absolute; width: 68px; height: 68px; border-radius: 50%; border: 1px solid rgba(255,255,255,.34); color: rgba(240,245,248,.8); font-size: 12px; letter-spacing: .1em;
  display: flex; align-items: center; justify-content: center; pointer-events: auto; touch-action: none; background: rgba(6,10,14,.18); }
#touch .btn.on { background: rgba(255,255,255,.26); border-color: #fff; color: #fff; }
#touch .up { right: 26px; bottom: 34px; } #touch .sp { right: 108px; bottom: 22px; }
#touch .sm { width: 46px; height: 46px; font-size: 11px; top: 14px; } #touch .vw { right: 76px; } #touch .ps { right: 18px; }
#rot { position: absolute; inset: 0; display: none; align-items: center; justify-content: center; background: rgba(3,6,9,.86); color: #e9eef1; font-size: 15px; letter-spacing: .12em; pointer-events: none; }
`,jt=(n,t,e)=>{let i=document.createElement(n);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i},qc=n=>`${String(Math.floor(n/60)).padStart(2,"0")}:${String(Math.floor(n%60)).padStart(2,"0")}`,Br=class{constructor(t,e,i){this.root=t,this.api=e,this.isTouch=i;let s=jt("style");s.textContent=K0,document.head.appendChild(s),this.title=jt("div","layer shade"),this.title.id="title";let r=jt("div","col");r.appendChild(jt("h1","","EXTREME<br>OCEAN SURVIVAL")),this.goBtn=jt("div","go act","\uC2DC\uC791"),r.appendChild(this.goBtn),this.titleRows=jt("div"),r.appendChild(this.titleRows),this.title.appendChild(r),this.title.appendChild(jt("div","hint",i?"\uC67C\uCABD \uB04C\uAE30 \uC774\uB3D9 \xB7 \uC624\uB978\uCABD \uB04C\uAE30 \uC2DC\uC810 \xB7 \uC704\uB85C / \uD798\uAECF \uBC84\uD2BC":"WASD \uC774\uB3D9 \xB7 Space \uC704\uB85C \xB7 Shift \uD798\uAECF \xB7 \uB9C8\uC6B0\uC2A4 \uC2DC\uC810 \xB7 V \uC2DC\uC810 \uC804\uD658 \xB7 Esc \uBA48\uCDA4")),this.pause=jt("div","layer shade"),this.pause.id="pause";let o=jt("div","col");o.appendChild(jt("h2","","\uBA48\uCDA4")),this.pauseTime=jt("div","time"),o.appendChild(this.pauseTime),this.resumeBtn=jt("div","go act","\uACC4\uC18D"),o.appendChild(this.resumeBtn),this.pauseRows=jt("div"),o.appendChild(this.pauseRows),this.pause.appendChild(o),this.dead=jt("div","layer shade"),this.dead.id="dead";let a=jt("div","col");this.deadTitle=jt("h2","",""),a.appendChild(this.deadTitle),this.deadTime=jt("div","time"),a.appendChild(this.deadTime),this.againBtn=jt("div","go act","\uB2E4\uC2DC"),a.appendChild(this.againBtn),this.dead.appendChild(a),this.hud=jt("div","layer"),this.hud.id="hud";let l=jt("div","bars");this.bars={};for(let[h,u]of[["o2","\uC0B0\uC18C"],["st","\uCCB4\uB825"],["tp","\uCCB4\uC628"]]){let d=jt("div","bar",`<i>${u}</i><u><s></s></u>`);l.appendChild(d),this.bars[h]={el:d,fill:d.querySelector("s")}}this.hud.appendChild(l),this.touch=jt("div","layer"),this.touch.id="touch",this.rot=jt("div","","\uD654\uBA74\uC744 \uAC00\uB85C\uB85C \uB3CC\uB824 \uC8FC\uC138\uC694"),this.rot.id="rot",t.append(this.hud,this.touch,this.title,this.pause,this.dead,this.rot),i&&this.buildTouch();let c=(h,u)=>h.addEventListener("click",d=>{d.stopPropagation(),u()});c(this.goBtn,()=>e.start()),c(this.resumeBtn,()=>e.resume()),c(this.againBtn,()=>e.restart()),this.buildRows(),this.mode="",window.addEventListener("resize",()=>this.checkRotate()),this.checkRotate()}checkRotate(){this.rot.style.display=this.isTouch&&window.innerHeight>window.innerWidth*1.05?"flex":"none"}buildRows(){let t=this.api,e=(i,s)=>{i.innerHTML="";let r=(o,a,l)=>{let c=jt("div","row act",`${o}<b></b>`),h=c.querySelector("b"),u=()=>{h.textContent=a()};c.addEventListener("click",d=>{d.stopPropagation(),l(),this.refresh()}),this._upd.push(u),u(),i.appendChild(c)};if(r("\uD654\uC9C8",()=>t.get("quality"),()=>t.cycle("quality")),r("\uC2DC\uC810",()=>t.get("view"),()=>t.cycle("view")),r("\uCE74\uBA54\uB77C \uD754\uB4E4\uB9BC",()=>t.get("shake"),()=>t.cycle("shake")),r("\uC18C\uB9AC",()=>t.get("volume"),()=>t.cycle("volume")),s){let o=jt("div","row","\uC2DC\uD5D8 \uC7A5\uBA74");for(let l of"ABCDEFG"){let c=jt("span","t act",l);c.addEventListener("click",h=>{h.stopPropagation(),t.scenario(l)}),o.appendChild(c)}i.appendChild(o);let a=jt("div","row act","\uCC98\uC74C\uBD80\uD130 \uB2E4\uC2DC");a.addEventListener("click",l=>{l.stopPropagation(),t.restart()}),i.appendChild(a)}};this._upd=[],e(this.titleRows,!1),e(this.pauseRows,!0)}refresh(){for(let t of this._upd)t()}show(t,e){this.mode=t,this.title.classList.toggle("on",t==="title"),this.pause.classList.toggle("on",t==="paused"),this.dead.classList.toggle("on",t==="dead"),this.hud.classList.toggle("on",t==="playing"),this.touch.classList.toggle("on",t==="playing"&&this.isTouch),t==="paused"&&(this.pauseTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+qc(e.time)),t==="dead"&&(this.deadTitle.textContent=e.cause==="cold"?"\uCCB4\uC628\uC744 \uC783\uACE0 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4":"\uC228\uC774 \uB2E4\uD574 \uC758\uC2DD\uC774 \uB04A\uACBC\uB2E4",this.deadTime.textContent="\uBC84\uD2F4 \uC2DC\uAC04 "+qc(e.time)),this.refresh(),t!=="playing"&&this.releaseTouch()}setBars(t,e,i){let s=(r,o,a,l)=>{r.fill.style.transform=`scaleX(${Math.max(0,Math.min(1,o)).toFixed(3)})`,r.el.classList.toggle("show",o<a),r.el.classList.toggle("low",o<l)};s(this.bars.o2,t,.97,.3),s(this.bars.st,e,.9,.22),s(this.bars.tp,i,.8,.35)}buildTouch(){let t=this.api,e=t.input;e.touch={x:0,z:0,up:!1,sprint:!1};let i=jt("div","zone zl"),s=jt("div","zone zr"),r=jt("div","stick","<b></b>"),o=r.firstChild;this.touch.append(i,s,r);let a=null,l=0,c=0,h=null,u=0,d=0,f=56;i.addEventListener("pointerdown",y=>{if(a===null){a=y.pointerId,l=y.clientX,c=y.clientY;try{i.setPointerCapture(y.pointerId)}catch{}r.style.display="block",r.style.left=l+"px",r.style.top=c+"px",o.style.transform="translate(0,0)",y.preventDefault()}}),i.addEventListener("pointermove",y=>{if(y.pointerId!==a)return;let A=y.clientX-l,O=y.clientY-c,M=Math.hypot(A,O);M>f&&(A*=f/M,O*=f/M),o.style.transform=`translate(${A}px,${O}px)`;let S=.12,F=A/f,G=-O/f;Math.hypot(F,G)<S&&(F=0,G=0),e.touch.x=F,e.touch.z=G,y.preventDefault()});let g=y=>{y.pointerId===a&&(a=null,e.touch.x=0,e.touch.z=0,r.style.display="none")};i.addEventListener("pointerup",g),i.addEventListener("pointercancel",g),s.addEventListener("pointerdown",y=>{if(h===null){h=y.pointerId,u=y.clientX,d=y.clientY;try{s.setPointerCapture(y.pointerId)}catch{}y.preventDefault()}}),s.addEventListener("pointermove",y=>{y.pointerId===h&&(e.dx+=(y.clientX-u)*2.2,e.dy+=(y.clientY-d)*2.2,u=y.clientX,d=y.clientY,y.preventDefault())});let v=y=>{y.pointerId===h&&(h=null)};s.addEventListener("pointerup",v),s.addEventListener("pointercancel",v);let m=(y,A)=>{let O=jt("div","btn "+y,A);return this.touch.appendChild(O),O},p=m("up","\uC704\uB85C"),_=m("sp","\uD798\uAECF"),x=m("sm vw","\uC2DC\uC810"),w=m("sm ps","\u2161");((y,A,O)=>{y.addEventListener("pointerdown",S=>{S.preventDefault(),S.stopPropagation();try{y.setPointerCapture(S.pointerId)}catch{}y.classList.add("on"),A()});let M=S=>{S.stopPropagation(),y.classList.remove("on"),O()};y.addEventListener("pointerup",M),y.addEventListener("pointercancel",M)})(p,()=>{e.touch.up=!0},()=>{e.touch.up=!1}),_.addEventListener("pointerdown",y=>{y.preventDefault(),y.stopPropagation(),e.touch.sprint=!e.touch.sprint,_.classList.toggle("on",e.touch.sprint)}),x.addEventListener("pointerdown",y=>{y.preventDefault(),y.stopPropagation(),t.toggleView()}),w.addEventListener("pointerdown",y=>{y.preventDefault(),y.stopPropagation(),t.pause()}),this._sp=_,this.releaseTouch=()=>{a=null,h=null,e.touch.x=0,e.touch.z=0,e.touch.up=!1,r.style.display="none",p.classList.remove("on")}}releaseTouch(){}};var yo={A:{label:"\uBCF4\uD1B5 \uD30C\uB3C4\uC5D0 \uB5A0 \uC788\uAE30",storm:.42,t0:40,view:"third",keys:{},script:[]},B:{label:"\uD070 \uB108\uC6B8 \uC811\uADFC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:n=>n.interaction.launch({lead:15,height:16,breakOffset:9,angleOffset:0,width:240,speed:13,frontMin:27,back:70})}]},C:{label:"\uD30C\uB3C4 \uBD95\uAD34 \xB7 \uCDA9\uB3CC",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:n=>n.interaction.launch({lead:9,height:13.5,breakOffset:-1,angleOffset:0,width:170,speed:14})}]},D:{label:"\uBB3C\uC18D \uD718\uB9D0\uB9BC",storm:1,t0:12,view:"first",keys:{},script:[{t:.1,do:n=>n.interaction.launch({lead:6,height:14.5,breakOffset:-1.3,angleOffset:0,width:170,speed:14})}]},E:{label:"\uC218\uBA74 \uBCF5\uADC0",storm:.85,t0:30,view:"first",keys:{up:!0,sprint:!0},setup:n=>{n.body.pos.y-=5.5,n.body.prevPos.copy(n.body.pos),n.survival.oxygen=42,n.survival.wasUnder=!0,n.survival.submergedTime=14,n.cam.pitch=.7},script:[{t:9,do:n=>{n.input.virtual={}}}]},F:{label:"\uBC88\uAC1C",storm:.9,t0:55,view:"third",keys:{},script:[{t:2,do:n=>n.lightning.strike(n.camera.position,{azimuth:Math.PI,dist:1700,sheet:0,power:1.4})},{t:9,do:n=>n.lightning.strike(n.camera.position,{azimuth:Math.PI*.8,dist:5200,sheet:1,power:1})}]},G:{label:"\uCDA9\uB3CC \uC911 \uC2DC\uC810 \uC804\uD658",storm:1,t0:12,view:"third",keys:{},script:[{t:.1,do:n=>n.interaction.launch({lead:7,height:12.5,breakOffset:-1,angleOffset:0,width:170,speed:14})},...[2,3.6,5.2,6.4,7.4,8.4,9.6,11,12.6,14.2].map(n=>({t:n,do:t=>t.cam.toggle()}))]}},zr=class{constructor(t){this.game=t,this.active=null,this.t=0,this.next=0,this.name=""}run(t){let e=yo[t];if(!e)return!1;let i=this.game;i.waves.time=e.t0;for(let s of i.waves.breakers)s.active=!1;return i.weather.locked=!0,i.weather.base=i.weather.storm=e.storm,i.weather.time=0,i.interaction.auto=!1,i.autoLightning=!1,i.lightning.active=!1,i.lightning.pendingThunder.length=0,i.weather.update(0),i.waves.update(0),i.resetPlayer(),i.cam.setMode(e.view),i.cam.blend=i.cam.target,i.cam.yaw=-Math.PI/2,i.cam.pitch=e.view==="first"?-.02:-.08,i.input.virtual=e.keys&&Object.keys(e.keys).length?{...e.keys}:null,i.input.virtual&&(i.input.enabled=!0),e.setup&&e.setup(i),this.active=e,this.name=t,this.t=0,this.next=0,!0}stop(){this.active=null,this.game.input.virtual=null}update(t){if(!this.active)return;this.t+=t;let e=this.active.script;for(;this.next<e.length&&this.t>=e[this.next].t;)e[this.next].do(this.game),this.next++}};var Ze=new URLSearchParams(location.search),ps=1/120,Ji={get(n,t){try{let e=localStorage.getItem("eos."+n);return e===null?t:e}catch{return t}},set(n,t){try{localStorage.setItem("eos."+n,String(t))}catch{}}},Mo=[.5,1,1.5],bo=[0,.4,.85,1],wo=class{constructor(){if(this.canvas=document.getElementById("view"),this.manual=Ze.get("manual")==="1",this.renderer=new cs({canvas:this.canvas,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}),!this.renderer.capabilities.isWebGL2)throw new Error("WebGL2 is required");this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=ci,this.renderer.toneMapping=vi,this.renderer.autoClear=!0,this.perf=new Mr(this.renderer);let t=Ze.get("q")||Ji.get("quality",this.perf.pickDefault());this.perf.setProfile(Jn[t]?t:this.perf.pickDefault()),this.manual&&(this.perf.adaptive=!1),Q.hdrType=this.perf.info.halfFloat?Ui:Ce,this.isTouch=Ze.get("touch")==="1"||Ze.get("touch")!=="0"&&navigator.maxTouchPoints>0&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,Q.uNoise.value=Rc(),Q.uDetailN.value=Cc(),Q.uFoamTex.value=Pc(),this.time=0,this.acc=0,this.state="title",this.deadTimer=0,this.scene=new ri,this.camera=new Ve(62,16/9,.07,3e4),this.camera.layers.enableAll(),this.waves=new fr,this.sky=new mr(this.renderer,this.perf.profile.envSize),this.ocean=new gr(this.waves,this.perf.profile),this.post=new _r(this.renderer),this.post.levels=this.perf.profile.bloomLevels,this.scene.add(this.sky.dome,this.ocean.mesh),this.flashLight=new fs(13163775,0),this.keyLight=new fs(10465476,.42),this.flashLight.layers.enableAll(),this.keyLight.layers.enableAll(),this.scene.add(this.flashLight,this.flashLight.target,this.keyLight,this.keyLight.target),this.pmrem=new Xn(this.renderer),this.envTimer=0,this.envRT=null,this.input=new Lr(this.canvas),this.character=new wr,this.scene.add(this.character.group),this.body=new Er(this.waves),this.survival=new Tr,this.player=new Rr(this.body,this.survival,this.input),this.anim=new Cr(this.character,this.body,this.player,this.survival),this.cam=new Pr(this.camera,this.character,this.body,this.player,this.waves,this.input),this.cam.yaw=-Math.PI/2;let e=Ze.get("view")||Ji.get("view","third");this.cam.setMode(e),this.cam.blend=this.cam.target,this.cam.intensity=+Ji.get("shake",1)||1,Ze.has("yaw")&&(this.cam.yaw=+Ze.get("yaw")),Ze.has("pitch")&&(this.cam.pitch=+Ze.get("pitch")),this.mouthUnder=!1,this.camUnder=0,this.mouthWorld=new R,this.impactBlur=0,this.listeners=[],this.weather=new Ir(this.waves),this.weather.base=this.weather.storm=Ze.has("storm")?+Ze.get("storm"):1,this.manual&&(this.weather.locked=!0),this.lightning=new Ur,this.scene.add(this.lightning.group),this.autoLightning=!(this.manual||Ze.get("auto")==="0"),this.buildEffects(),this.interaction.auto=this.autoLightning,this.audio=new Or,this.audio.volume=+Ji.get("volume",.85),this.listeners.push((s,r)=>this.audio.onEvent(s,r)),this.lightning.onThunder=s=>this.audio.onEvent("thunder",s),this.audioState={cam:{pos:this.camera.position,fwd:new R,up:new R},hot:[]},this.scenarios=new zr(this),this.pendingScenario=Ze.get("test"),this.weather.update(0),this.waves.update(0),this.body.reset(0,0),this.syncCharacter(1),this.anim.update(1/60),this.character.group.updateMatrixWorld(!0),this.drawScene=(s,r)=>{let o=this.renderer;o.setRenderTarget(s),r?(this.camera.layers.set(1),o.setClearColor(0,0),o.clear(),o.render(this.scene,this.camera),this.camera.layers.enableAll()):o.render(this.scene,this.camera)};let i={input:this.input,start:()=>this.start(),resume:()=>this.resume(),restart:()=>this.restart(),pause:()=>this.pause(),toggleView:()=>{this.cam.toggle(),Ji.set("view",this.cam.mode)},scenario:s=>{this.scenarios.run(s),this.resume()},get:s=>s==="quality"?this.perf.profile.label:s==="view"?this.cam.mode==="first"?"1\uC778\uCE6D":"3\uC778\uCE6D":s==="shake"?Math.round(this.cam.intensity*100)+"%":Math.round(this.audio.volume*100)+"%",cycle:s=>{if(s==="quality"){let r=Object.keys(Jn);this.setQuality(r[(r.indexOf(this.perf.profile.key)+1)%r.length])}else if(s==="view")i.toggleView();else if(s==="shake")this.cam.intensity=Mo[(Mo.indexOf(this.cam.intensity)+1)%Mo.length]||1,Ji.set("shake",this.cam.intensity);else{let r=bo[(bo.indexOf(this.audio.volume)+1)%bo.length];this.audio.setVolume(r===void 0?.85:r),Ji.set("volume",this.audio.volume)}this.state!=="playing"&&this.state!=="title"&&this.renderStill()}};this.api=i,this.ui=!this.manual||Ze.get("ui")==="1"?new Br(document.getElementById("ui"),i,this.isTouch):null,this.hadLock=!1,this.input.onLockChange=s=>{s?this.hadLock=!0:this.hadLock&&this.state==="playing"&&(this.hadLock=!1,this.pause())},this.canvas.addEventListener("click",()=>{this.state==="playing"&&!this.isTouch&&!this.input.locked&&this.input.lock()}),window.addEventListener("keydown",s=>{s.repeat||((s.code==="KeyV"||s.code==="KeyC")&&this.state==="playing"&&i.toggleView(),s.code==="KeyP"&&(this.state==="playing"?this.pause():this.state==="paused"&&this.resume()),s.code==="Enter"&&this.state==="title"&&this.start())}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()}),this.manual?(this.state="playing",this.ui&&this.ui.show("playing",{time:0,cause:""}),this.pendingScenario&&(this.scenarios.run(this.pendingScenario),this.pendingScenario=null)):this.setState("title"),window.addEventListener("resize",()=>{this.resize(),(this.state==="paused"||this.state==="dead")&&this.renderStill()}),this.resize(),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}buildEffects(){let t=this.perf.profile;if(this.rain){this.scene.remove(this.rain.group,this.spray.mesh,this.underwater.group);for(let e of[this.rain.group,this.spray.mesh,this.underwater.group])e.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&i.material.dispose()});this.foam.enabled&&this.foam.rt.forEach(e=>e.dispose()),this.lens.rt.dispose()}this.rain=new Dr(t),this.spray=new Fr(this.waves,t.spray),this.foam=new vr(this.renderer,t.foamAcc),this.underwater=new Nr(this.waves,t),this.lens=new yr(this.renderer,t.lensDrops),this.scene.add(this.rain.group,this.spray.mesh,this.underwater.group),this.post.u.tLens.value=this.lens.texture,this.interaction?this.interaction.spray=this.spray:this.interaction=new xr(this.waves,this.body,this.player,this.spray),this.underwater.onEnter=()=>{this.underwater.burstAt(this.camera.position,46,.8),this.impactBlur=Math.max(this.impactBlur,.5),this.emit("camEnter")},this.underwater.onExit=()=>{this.lens.spawn(48,1),this.lens.sheet=1,this.emit("camExit")},this.interaction.onImpact=e=>{let i=Math.min(1,e.strength/3);this.impactBlur=Math.max(this.impactBlur,i),this.underwater.burst=Math.max(this.underwater.burst,i),this.underwater.isUnder||this.lens.spawn(Math.round(14+30*i),1),this.emit("impact",e)},this.interaction.onSplash=(e,i)=>{!this.underwater.isUnder&&this.cam.blend<.5&&this.lens.spawn(2),this.emit("splash",{v:e,pos:i})}}setQuality(t){this.perf.setProfile(t),Ji.set("quality",t);let e=this.perf.profile;this.ocean.applyProfile(e),this.sky.envRT.setSize(e.envSize,e.envSize/2),this.post.levels=e.bloomLevels,this.buildEffects(),this.resize(!0)}setState(t){this.state=t,this.ui&&this.ui.show(t,{time:this.survival.timeAlive,cause:this.survival.cause})}start(){this.audio.start(),this.resetPlayer(),this.cam.script=null,this.input.enabled=!0,this.pendingScenario?(this.scenarios.run(this.pendingScenario),this.pendingScenario=null):this.scenarios.active||(this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=22),this.isTouch?this.goFullscreen():this.input.lock(),this.setState("playing"),this.last=performance.now()}pause(){this.state==="playing"&&(this.input.enabled=!1,this.audio.suspend(),this.isTouch||this.input.unlock(),this.setState("paused"))}resume(){this.state!=="playing"&&(this.audio.start(),this.audio.resume(),this.input.enabled=!0,this.cam.script=null,this.isTouch||this.input.lock(),this.setState("playing"),this.last=performance.now())}restart(){this.scenarios.stop(),this.weather.locked=!1,this.weather.base=1;for(let t of this.waves.breakers)t.active=!1;this.interaction.auto=!0,this.autoLightning=!0,this.interaction.next=22,this.resetPlayer(),this.resume()}resetPlayer(){this.body.reset(this.body.pos.x,this.body.pos.z),this.survival.reset(),this.survival.events.length=0,this.player.control=1,this.player.impact=0,this.player.impactPeak=0,this.player.tumble=0,this.player.events.length=0,this.cam.qd.identity(),this.cam.inited=!1,this.deadTimer=0,this.impactBlur=0,this.mouthUnder=!1,this.post.u.uFade.value=0,this.post.u.uTunnel.value=0,this.post.u.uDesat.value=0,this.lens.wipe(),this.syncCharacter(1),this.character.group.updateMatrixWorld(!0)}goFullscreen(){try{let t=document.documentElement,e=t.requestFullscreen?t.requestFullscreen():null;e&&e.then&&e.then(()=>{screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}).catch(()=>{})}catch{}}resize(t){let e=window.innerWidth,i=window.innerHeight,s=Math.min(window.devicePixelRatio||1,2);this.renderer.setSize(Math.round(e*s),Math.round(i*s),!1),this.canvas.style.width=e+"px",this.canvas.style.height=i+"px",this.camera.aspect=e/i,this.camera.updateProjectionMatrix();let[r,o]=this.perf.renderSize(Math.round(e*s),Math.round(i*s));this.post.useOpaque=this.perf.profile.refraction,this.post.fxaa=this.perf.profile.fxaa,this.post.setSize(r,o,t===!0),this.ocean.uniforms.uSceneColor.value=this.post.rtOpaque.texture,this.ocean.uniforms.uSceneDepth.value=this.post.rtOpaque.depthTexture}emit(t,e){for(let i=0;i<this.listeners.length;i++)this.listeners[i](t,e)}syncCharacter(t){let e=this.character.group,i=this.body;e.position.lerpVectors(i.prevPos,i.pos,t),e.quaternion.slerpQuaternions(i.prevQuat,i.quat,t)}step(t){this.time+=t,Q.uTime.value=this.time,this.scenarios.update(t),this.weather.update(t),this.waves.update(t),Q.uWaveA.value=this.waves.uA,Q.uWaveB.value=this.waves.uB,Q.uBrkA.value=this.waves.uBrkA,Q.uBrkB.value=this.waves.uBrkB,Q.uBrkC.value=this.waves.uBrkC,this.body.wind.copy(this.weather.wind),this.body.breathVol=(this.survival.lung-.55)*3.2,this.acc+=t;let e=0;for(;this.acc>=ps&&e<8;)this.player.fixedUpdate(ps),this.body.step(ps),this.acc-=ps,e++;e===8&&(this.acc=0),this.mouthUnder=this.mouthUnder?this.body.mouthDepth>-.015:this.body.mouthDepth>.03;let i=this.survival;this.state!=="title"&&i.update(t,{mouthUnder:this.mouthUnder,effort:this.player.effort,turb:this.body.turb,subFrac:this.body.subFrac,storm:this.weather.storm,sudden:this.player.impact>.8}),this.syncCharacter(this.acc/ps),this.anim.update(t),this.character.group.updateMatrixWorld(!0),this.body.syncLimbs(this.character),this.state==="title"&&(this.cam.script||(this.cam.script={yaw:this.cam.yaw,pitch:-.07}),this.cam.script.yaw=-Math.PI/2+Math.sin(this.time*.07)*.5),this.cam.update(t);let s=this.camera.position,r=this.weather.wind,o=this.weather.storm;this.mouthWorld.copy(this.body._mouth).applyQuaternion(this.character.group.quaternion).add(this.character.group.position),this.underwater.update(t,this.camera,this.cam.surfaceAtCam,this.body,this.player,i,this.post,this.weather,this.mouthWorld,this.post.h),this.camUnder=this.underwater.under;let a=i.events;for(let d=0;d<a.length;d++){let f=a[d];f.type==="submerge"&&this.underwater.burstAt(this.mouthWorld,34,.45),f.type==="surface"&&(this.player.recover=2+4*f.need),this.emit(f.type,f)}a.length=0,this.lightning.update(t,s,o>.3?.3+.9*o:0,this.autoLightning),this.interaction.update(t,s,this.camUnder,r),this.spray.seedCrests(t,s,r,o,Math.min(40,1500*t)*(this.perf.profile.spray/9e3)),this.spray.seedBreakers(t,s,r),this.spray.update(t,s,r),this.rain.update(t,this.camera,r,this.weather.rain,this.camUnder,this.post.h);let l=this.post.u;this.impactBlur=Math.max(0,this.impactBlur-t*.9),l.uBlur.value=this.impactBlur*2.6,l.uSheet.value=this.lens.sheet,l.uWhiteout.value=this.interaction.whiteout,l.uMotionBlur.value=this.perf.profile.motionBlur?Math.min(1,this.player.impact*.45+this.player.tumble*.9):0,l.uTunnel.value=Math.max(Et((32-i.oxygen)/32)*.75,i.blackout),l.uDesat.value=.35*i.blackout+.18*Et((35.5-i.temp)/3),this.state==="title"?(l.uDofAmount.value=1.6,l.uDofFocus.value=this.cam.arm):l.uDofAmount.value=0,i.alive||(this.deadTimer+=t,l.uFade.value=Math.min(.82,this.deadTimer/4),this.deadTimer>4&&this.state==="playing"&&!this.manual&&(this.input.enabled=!1,this.isTouch||(this.hadLock=!1,this.input.unlock()),this.setState("dead"))),this.ui&&this.state==="playing"&&this.ui.setBars(i.oxygen/100,i.stamina/100,(i.temp-31.5)/5.5);let c=Q.uFlash.value;this.flashLight.intensity=c*3.2,this.flashLight.position.copy(this.character.group.position).addScaledVector(Q.uFlashDir.value,50),this.flashLight.target.position.copy(this.character.group.position),this.keyLight.position.copy(this.character.group.position).addScaledVector(Q.uGlowDir.value,50),this.keyLight.target.position.copy(this.character.group.position),this.character.material.envMapIntensity=1.7+c*2,this.ocean.update(this.camera,t),this.ocean.uniforms.uPlayerPos.value.copy(this.character.group.position),this.ocean.uniforms.uPlayerFoam.value=this.anim.splashiness*.9;let h=this.audioState,u=this.camera.matrixWorld.elements;h.cam.fwd.set(-u[8],-u[9],-u[10]),h.cam.up.set(u[4],u[5],u[6]),h.storm=o,h.rain=this.weather.rain,h.windSpeed=this.weather.windSpeed,h.gust=this.weather.gust,h.windPan=-(r.x*u[0]+r.z*u[2])/Math.max(1,this.weather.windSpeed),h.under=this.underwater.under,h.depth=Math.max(0,this.underwater.depth),h.aeration=this.underwater.aeration,h.threat=this.interaction.threat,h.hot=this.spray.hot,h.oxygen=i.oxygen,h.effort=this.player.effort,h.relSpeed=this.body.relSpeed,h.swellV=this.body.surface.vy,h.alive=i.alive,h.blackout=i.blackout,h.mouthUnder=this.mouthUnder,this.audio.update(t,h),this.input.endFrame()}render(t){if(this.sky.updateEnv(),this.envTimer-=t,this.envTimer<=0&&Q.uFlash.value<.01){let i=this.pmrem.fromEquirectangular(this.sky.envRT.texture);this.envRT&&this.envRT.dispose(),this.envRT=i,this.scene.environment=i.texture,this.envTimer=9}let e=this.weather.rain*(2.2+5.5*(1-this.cam.blend))*(.6+.4*this.weather.gust);this.lens.update(t,e,this.underwater.isUnder,this.camera.aspect),this.foam.update(t,this.camera.position.x,this.camera.position.z,this.character.group.position,this.anim.splashiness*.8,this.ocean.uniforms),this.post.render(this.drawScene,this.camera,t,this.time)}renderStill(){this.render(0)}loop(t){requestAnimationFrame(this.loop);let e=Math.max(0,Math.min((t-this.last)/1e3,.1));this.last=t,!this.manual&&(this.state==="paused"||this.state==="dead"||(this.step(e),this.render(e),this.perf.update(e)&&this.resize()))}};function Q0(){let n;try{n=new wo}catch(t){let e=document.getElementById("fatal");e.style.display="flex",e.textContent="\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 \uC2E4\uD589\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 (WebGL2 \uD544\uC694). "+t.message,console.error(t);return}window.__ocean={game:n,ready:!0,scenarios:Object.keys(yo),advance(t,e=1/60){let i=Math.max(1,Math.round(t/e));for(let s=0;s<i;s++)n.step(e),n.render(e)},scenario(t){return n.scenarios.run(t)},set(t){return t.view&&(n.cam.setMode(t.view),t.snap&&(n.cam.blend=n.cam.target)),t.yaw!==void 0&&(n.cam.yaw=t.yaw),t.pitch!==void 0&&(n.cam.pitch=t.pitch),t.keys!==void 0&&(n.input.virtual=t.keys,n.input.enabled=!0),t.storm!==void 0&&(n.weather.base=t.storm,t.snap&&(n.weather.storm=t.storm)),t.breaker&&n.interaction.launch(t.breaker),t.strike&&n.lightning.strike(n.camera.position,t.strike),!0},info(){let t=n.body,e=n.survival;return{t:+n.time.toFixed(2),state:n.state,size:[n.post.w,n.post.h],profile:n.perf.profile.key,sigH:+n.waves.sigHeight.toFixed(1),pos:[+t.pos.x.toFixed(1),+t.pos.y.toFixed(2),+t.pos.z.toFixed(1)],surf:+t.surfaceH.toFixed(2),mouth:+t.mouthDepth.toFixed(2),sub:+t.subFrac.toFixed(2),ctl:+n.player.control.toFixed(2),imp:+n.player.impact.toFixed(2),anim:n.anim.state,view:n.cam.mode,blend:+n.cam.blend.toFixed(2),camUnder:+n.camUnder.toFixed(2),yaw:+n.cam.yaw.toFixed(2),o2:+e.oxygen.toFixed(0),st:+e.stamina.toFixed(0),temp:+e.temp.toFixed(2),alive:e.alive,flash:+Q.uFlash.value.toFixed(2),spray:n.spray.alive,drops:n.lens.count,fps:+n.perf.fps.toFixed(0)}},measure(t){return new Promise(e=>{let i=performance.now(),s=0,r=0,o=i,a=l=>{s++,r=Math.max(r,l-o),o=l,l-i>=t*1e3?e({fps:+(s/((l-i)/1e3)).toFixed(1),worstMs:+r.toFixed(1),scale:n.perf.scale,size:[n.post.w,n.post.h],profile:n.perf.profile.key}):requestAnimationFrame(a)};requestAnimationFrame(a)})}}}Q0();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
