// ===== 화면 효과 (게임식 후처리) — js/dancer.js 가 POSTFX.create(renderer, scene, camera) 로 써요 =====
// 장면을 투명 배경 그대로 텍스처에 그린 뒤
//   깊이로 AO(틈 그늘)·잉크 선 → 블룸(빛 번짐) → 빛줄기(태양 쪽 방사형) → 색수차·선명 → 톤매핑·색보정·포스터화·비네팅·그레인 → 화면
// 캐릭터 바깥은 투명이라 배경 영상·레인 위에 자연스럽게 겹쳐요. 색은 모두 미리 곱한 알파(premultiplied)로 다뤄요.
window.POSTFX={create(renderer,scene,camera){
const T=THREE,gl2=renderer.capabilities.isWebGL2,HF=gl2?T.HalfFloatType:T.UnsignedByteType;
const tri=new T.BufferGeometry();tri.setAttribute('position',new T.Float32BufferAttribute([-1,-1,0,3,-1,0,-1,3,0],3));
const oc=new T.OrthographicCamera(-1,1,1,-1,0,1);
const VS='varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,0.0,1.0);}';
function pass(fs,u){const m=new T.ShaderMaterial({uniforms:u,vertexShader:VS,fragmentShader:fs,depthTest:false,depthWrite:false,blending:T.NoBlending});
  const s=new T.Scene(),q=new T.Mesh(tri,m);q.frustumCulled=false;s.add(q);return {m,u,s}}
function draw(p,target){renderer.setRenderTarget(target);renderer.render(p.s,oc)}
const RT=(w,h,o)=>new T.WebGLRenderTarget(Math.max(1,w|0),Math.max(1,h|0),Object.assign({type:HF,depthBuffer:false,stencilBuffer:false},o||{}));
const black=new T.DataTexture(new Uint8Array(4),1,1);black.needsUpdate=true;
const depthMat=new T.MeshDepthMaterial({depthPacking:T.RGBADepthPacking});
let W=0,H=0,rS=null,rD=null,rDh=null,rRay=null,rRay2=null,rAO=null,rAO2=null,rG=null,rG2=null;const rLv=[],rTmp=[];

// 밝은 부분만 뽑기 (블룸 재료)
const pBright=pass(`uniform sampler2D tS;uniform float uTh,uTh2,uMid,uTwo;varying vec2 vUv;
void main(){vec4 c=texture2D(tS,vUv);float l=dot(c.rgb,vec3(0.2126,0.7152,0.0722));float th=uTwo>0.5?mix(uTh,uTh2,1.0-smoothstep(uMid-0.03,uMid+0.03,vUv.x)):uTh;gl_FragColor=vec4(c.rgb*smoothstep(th,th+0.35,l),0.0);}`,{tS:{value:null},uTh:{value:0.8},uTh2:{value:0.8},uMid:{value:.5},uTwo:{value:0}});
// 축소 복사
const pCopy=pass(`uniform sampler2D tS;varying vec2 vUv;void main(){gl_FragColor=texture2D(tS,vUv);}`,{tS:{value:null}});
// 가우시안 흐림 (선형 보간을 써서 5번 읽기로 9칸)
const pBlur=pass(`uniform sampler2D tS;uniform vec2 uDir;varying vec2 vUv;
void main(){vec3 c=texture2D(tS,vUv).rgb*0.2270270270;
c+=(texture2D(tS,vUv+uDir*1.3846153846).rgb+texture2D(tS,vUv-uDir*1.3846153846).rgb)*0.3162162162;
c+=(texture2D(tS,vUv+uDir*3.2307692308).rgb+texture2D(tS,vUv-uDir*3.2307692308).rgb)*0.0702702703;
gl_FragColor=vec4(c,0.0);}`,{tS:{value:null},uDir:{value:new T.Vector2()}});
// 빛줄기: 태양 쪽으로 걸어가며 '가려지지 않은 정도'를 모아요 → 캐릭터 뒤로 그늘 줄, 옆으로 빛 줄
const pRay=pass(`uniform sampler2D tS;uniform vec2 uSun;uniform float uAsp;varying vec2 vUv;
void main(){vec2 d=vUv-uSun;float dist=length(d*vec2(uAsp,1.0));vec2 st=d*(0.92/28.0);vec2 uv=vUv;float ill=0.0,w=1.0,ws=0.0;
for(int i=0;i<28;i++){uv-=st;vec2 cu=clamp(uv,0.0,1.0);ill+=(1.0-texture2D(tS,cu).a)*w;ws+=w;w*=0.955;}
ill/=ws;float shade=1.0-texture2D(tS,vUv).a*0.65;
gl_FragColor=vec4(vec3(ill*exp(-dist*1.05)*shade),0.0);}`,{tS:{value:null},uSun:{value:new T.Vector2(.8,1.2)},uAsp:{value:1}});
// 마무리
// AO(틈 그늘)는 따로 반 해상도로 계산 → 흐림 두 번으로 점 노이즈를 지운 뒤 마무리에서 곱해요
// (예전엔 마무리에서 점마다 무작위로 바로 계산해서 매끈한 얼굴에 모래알 같은 점이 남았어요)
// 완만한 곡면(얼굴·볼)은 그늘이 안 지게 깊이 차 기준을 높였어요: 0.004 → 0.014
const pAO=pass(`uniform sampler2D tD;uniform vec2 uPx;uniform float uR,uT,uT2,uMid,uTwo,uNear,uFar;varying vec2 vUv;
#include <packing>
float vz(vec2 uv){float d=unpackRGBAToDepth(texture2D(tD,uv));return d>=0.9999?-10000.0:perspectiveDepthToViewZ(d,uNear,uFar);}
float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
void main(){float cz=vz(vUv);if(cz<-1000.0){gl_FragColor=vec4(0.0);return;}
  float tt=uTwo>0.5?mix(uT,uT2,1.0-smoothstep(uMid-0.03,uMid+0.03,vUv.x)):uT;
  float occ=0.0,ang=hash(floor(vUv/uPx))*6.2832;
  for(int i=0;i<16;i++){float fi=float(i);float an=ang+fi*2.39996;float rr=(0.2+0.8*fract(fi*0.618+0.37))*uR;
    float sz=vz(vUv+vec2(cos(an),sin(an))*rr*uPx);if(sz<-1000.0)continue;float dz=sz-cz;
    occ+=smoothstep(tt,tt+0.036,dz)*(1.0-smoothstep(0.14,0.5,dz));}   // uT: 낮을수록 얼굴 같은 완만한 곡면에도 음영 (AO 곡면 음영)
  gl_FragColor=vec4(vec3(occ/16.0),0.0);}`,{tD:{value:black},uPx:{value:new T.Vector2(1,1)},uR:{value:14},uT:{value:.014},uT2:{value:.014},uMid:{value:.5},uTwo:{value:0},uNear:{value:.1},uFar:{value:50}});
const U={tS:{value:null},tD:{value:black},tAO:{value:black},tB0:{value:black},tB1:{value:black},tB2:{value:black},tB3:{value:black},tR:{value:black},uPx:{value:new T.Vector2(1,1)},
  uTime:{value:0},uExp:{value:1},uTone:{value:1},uCon:{value:1},uSat:{value:1},uVib:{value:0},uTemp:{value:0},uTint:{value:0},uSplit:{value:0},uBri:{value:1},
  uBloom:{value:0},uAO:{value:0},uAOR:{value:14},uInk:{value:0},uInkC:{value:new T.Color(0x2b0a45)},uSharp:{value:0},uCA:{value:0},uGrain:{value:0},uVig:{value:0},uPoster:{value:0},
  uRays:{value:0},uSunC:{value:new T.Color(1,.9,.7)},uNear:{value:.1},uFar:{value:50},
  tG:{value:black},uPunch:{value:0},uDiff:{value:0},uCel:{value:0},uCelN:{value:3},uShade:{value:0},uShadeC:{value:new T.Color(0x6a4fb3)},uKuwa:{value:0},uScr:{value:0},uCell:{value:5},
  uGrad:{value:0},uGrad1:{value:new T.Color(0xffd1f0)},uGrad2:{value:new T.Color(0xa7d8ff)}};
// ---- 대상별 화면 효과 (2026-10-02 사용자: 신사 · 소년 설정 따로): 마무리 셰이더의 대상별 값을 두 벌(uX = 신사 · uX_B = 소년)로 늘리고
//      화면 가로 위치로 섞어요 — 소년은 화면 왼쪽, 신사는 오른쪽이라 가운데(uMid) 근처에서 부드럽게 갈라요. 한 명만 있으면(uTwo 0) 신사 값 그대로
const PERF=['uExp','uTone','uCon','uSat','uVib','uTemp','uTint','uSplit','uBri','uBloom','uAO','uInk','uSharp','uCA','uGrain','uVig','uPoster','uRays','uPunch','uDiff','uCel','uCelN','uShade','uKuwa','uScr','uGrad'],PERV=['uInkC','uSunC','uShadeC','uGrad1','uGrad2'];
function sideSplit(fs){const i=fs.indexOf('void main(){')+12;let head=fs.slice(0,i),body=fs.slice(i);
  for(const n of PERF.concat(PERV))body=body.replace(new RegExp('\\b'+n+'\\b','g'),n+'_');
  body=body.replace('vec3 ry=texture2D(tR,uv).rgb*uRays_*uSunC_*0.9;','vec3 ry=mix(texture2D(tR,uv).rgb*uRays*uSunC,texture2D(tR2,uv).rgb*uRays_B*uSunC_B,mk_)*0.9;');
  const dec='uniform float '+PERF.map(n=>n+'_B').join(',')+';uniform vec3 '+PERV.map(n=>n+'_B').join(',')+';uniform float uMid,uTwo;uniform sampler2D tR2;\n';
  const pre='float mk_=uTwo>0.5?1.0-smoothstep(uMid-0.03,uMid+0.03,vUv.x):0.0;'+PERF.map(n=>`float ${n}_=mix(${n},${n}_B,mk_);`).join('')+PERV.map(n=>`vec3 ${n}_=mix(${n},${n}_B,mk_);`).join('');
  return head.replace('varying vec2 vUv;',dec+'varying vec2 vUv;')+pre+body}
PERF.forEach(n=>U[n+'_B']={value:U[n].value});PERV.forEach(n=>U[n+'_B']={value:U[n].value.clone()});/* 소년 쪽 값: 이름 뒤에 _B (uGrad+2 가 원래 있던 uGrad2 와 겹치지 않게) */U.uMid={value:.5};U.uTwo={value:0};U.tR2={value:black};
const pFinal=pass(sideSplit(`uniform sampler2D tS,tD,tAO,tB0,tB1,tB2,tB3,tR,tG;uniform vec2 uPx;
uniform float uPunch,uDiff,uCel,uCelN,uShade,uKuwa,uScr,uCell,uGrad;uniform vec3 uShadeC,uGrad1,uGrad2;
uniform float uTime,uExp,uTone,uCon,uSat,uVib,uTemp,uTint,uSplit,uBri,uBloom,uAO,uAOR,uInk,uSharp,uCA,uGrain,uVig,uPoster,uRays,uNear,uFar;uniform vec3 uInkC,uSunC;varying vec2 vUv;
#include <packing>
float vz(vec2 uv){float d=unpackRGBAToDepth(texture2D(tD,uv));return d>=0.9999?-10000.0:perspectiveDepthToViewZ(d,uNear,uFar);}
float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
// three.js 와 똑같은 ACES 톤매핑 (효과를 끈 화면과 색이 같게). 예전 간이 공식은 어두운 곳을 뭉개고 대비가 과했어요
vec3 acesPunch(vec3 x){return clamp((x*(2.51*x+0.03))/(x*(2.43*x+0.59)+0.14),0.0,1.0);}   // 예전 톤 (대비 진함) — 프리셋 「예전 느낌」
vec3 rrtOdt(vec3 v){vec3 a=v*(v+0.0245786)-0.000090537;vec3 b=v*(0.983729*v+0.4329510)+0.238081;return a/b;}
vec3 aces(vec3 c){const mat3 IM=mat3(vec3(0.59719,0.07600,0.02840),vec3(0.35458,0.90834,0.13383),vec3(0.04823,0.01566,0.83777));
  const mat3 OM=mat3(vec3(1.60475,-0.10208,-0.00327),vec3(-0.53108,1.10813,-0.07276),vec3(-0.07367,-0.00605,1.07602));
  c*=1.0/0.6;c=IM*c;c=rrtOdt(c);c=OM*c;return clamp(c,0.0,1.0);}
vec3 toSRGB(vec3 c){return mix(c*12.92,1.055*pow(c,vec3(1.0/2.4))-0.055,step(vec3(0.0031308),c));}
// 수채 평탄화(쿠와하라): 네 방향 3x3 묶음 중 가장 고른(분산이 작은) 묶음의 평균색 → 얼룩은 지우고 경계는 살려요
vec4 quad(vec2 uv,vec2 d){vec3 m=vec3(0.0),q=vec3(0.0);for(int j=0;j<3;j++)for(int i=0;i<3;i++){vec3 c=texture2D(tS,uv+vec2(float(i)*d.x,float(j)*d.y)*uPx*1.6).rgb;m+=c;q+=c*c;}
  m/=9.0;q=q/9.0-m*m;return vec4(m,q.r+q.g+q.b);}
vec3 overlay(vec3 b,vec3 o){return mix(2.0*b*o,1.0-2.0*(1.0-b)*(1.0-o),step(0.5,b));}
void main(){
  vec2 uv=vUv;vec4 s=texture2D(tS,uv);
  if(uCA>0.0){vec2 o=(uv-0.5)*uCA*0.007;vec4 r=texture2D(tS,uv+o),b=texture2D(tS,uv-o);s=vec4(r.r,s.g,b.b,max(s.a,max(r.a,b.a)));}
  if(uSharp>0.0){vec4 n=texture2D(tS,uv+vec2(uPx.x,0.0))+texture2D(tS,uv-vec2(uPx.x,0.0))+texture2D(tS,uv+vec2(0.0,uPx.y))+texture2D(tS,uv-vec2(0.0,uPx.y));
    s.rgb=max(s.rgb+(s.rgb*4.0-n.rgb)*uSharp*0.6,0.0);}
  if(uKuwa>0.0&&s.a>0.0){vec4 q1=quad(uv,vec2(-1.0,-1.0)),q2=quad(uv,vec2(1.0,-1.0)),q3=quad(uv,vec2(-1.0,1.0)),q4=quad(uv,vec2(1.0,1.0));
    vec4 b=q1;if(q2.w<b.w)b=q2;if(q3.w<b.w)b=q3;if(q4.w<b.w)b=q4;s.rgb=mix(s.rgb,b.rgb,uKuwa);}
  vec3 col=s.rgb;float a=s.a;
  float cz=uInk>0.0?vz(uv):-10000.0;
  if(uAO>0.0&&a>0.0)col*=1.0-clamp(texture2D(tAO,uv).r*uAO*1.9,0.0,0.85);   // 흐려 둔 AO
  float ink=0.0;
  if(uInk>0.0){float e=0.0;bool cb=cz<-1000.0;
    for(int i=0;i<8;i++){float an=float(i)*0.785398;float z=vz(uv+vec2(cos(an),sin(an))*uPx*(0.6+uInk));bool zb=z<-1000.0;
      e=max(e,(zb!=cb)?1.0:(cb?0.0:smoothstep(0.03,0.09,abs(z-cz))));}
    ink=e;}
  vec3 bl=(texture2D(tB0,uv).rgb*0.55+texture2D(tB1,uv).rgb*0.8+texture2D(tB2,uv).rgb+texture2D(tB3,uv).rgb*1.15)*uBloom;
  vec3 ry=texture2D(tR,uv).rgb*uRays*uSunC*0.9;
  col+=bl+ry;float A=clamp(max(a,dot(bl+ry,vec3(0.2126,0.7152,0.0722))*1.2),0.0,1.0);
  vec3 c=col/max(A,0.0001)*uExp;
  c=uTone>0.5?(uPunch>0.5?acesPunch(c*0.9):aces(c)):clamp(c,0.0,1.0);
  c*=uBri;c*=vec3(1.0+uTemp*0.2+uTint*0.05,1.0+uTemp*0.02-uTint*0.08,1.0-uTemp*0.22+uTint*0.05);
  float L=dot(c,vec3(0.2126,0.7152,0.0722));
  c=mix(c,c*mix(vec3(0.84,1.0,1.16),vec3(1.14,1.0,0.84),smoothstep(0.1,0.75,L)),uSplit);
  c=mix(vec3(0.5),c,uCon);
  L=dot(c,vec3(0.2126,0.7152,0.0722));float sat=max(c.r,max(c.g,c.b))-min(c.r,min(c.g,c.b));
  c=mix(vec3(L),c,uSat*(1.0+uVib*(1.0-sat)));
  c=clamp(c,0.0,1.0);
  if(uPoster>1.5)c=floor(c*uPoster+0.5)/uPoster;
  // 애니 음영: 밝기만 몇 단계로 끊어요 (색은 그대로, 단계 경계는 살짝 부드럽게)
  if(uCel>0.0){float l=dot(c,vec3(0.2126,0.7152,0.0722)),n=uCelN,q=(floor(l*n)+smoothstep(0.4,0.6,fract(l*n)))/n;q=max(q,0.45/n);c=mix(c,clamp(c*(q/max(l,0.001)),0.0,1.0),uCel);}
  // 그림자 색: 어두운 곳을 검정 대신 그림자 색(보라·파랑)으로
  if(uShade>0.0){float l=dot(c,vec3(0.2126,0.7152,0.0722)),w=1.0-smoothstep(0.1,0.6,l);c=mix(c,c*uShadeC*1.45+uShadeC*0.05,w*uShade);}
  c*=1.0-uVig*smoothstep(0.35,0.95,length((uv-0.5)*vec2(1.25,1.0)));
  c=toSRGB(clamp(c,0.0,1.0));
  c+=(hash(uv*1913.0+fract(uTime))-0.5)*uGrain*0.14;
  // 그라데이션: 위아래로 색을 덧씌워요 (오버레이)
  if(uGrad>0.0)c=mix(c,overlay(clamp(c,0.0,1.0),mix(uGrad2,uGrad1,uv.y)),uGrad);
  // 스크린톤: 어두운 곳에 45도 망점
  if(uScr>0.0){vec2 fc=mat2(0.7071,-0.7071,0.7071,0.7071)*gl_FragCoord.xy;vec2 g=fract(fc/uCell)-0.5;float dk=1.0-dot(c,vec3(0.299,0.587,0.114));
    float td=1.0-smoothstep(dk*0.62-0.07,dk*0.62+0.07,length(g));c=mix(c,c*0.32,td*uScr*smoothstep(0.3,0.65,dk));}
  // 확산 글로우: 흐린 화면을 스크린 합성 → 애니 촬영 처리처럼 은은하게 빛나요
  if(uDiff>0.0){vec3 gw=toSRGB(clamp(texture2D(tG,uv).rgb,0.0,1.0))*uDiff;c=1.0-(1.0-clamp(c,0.0,1.0))*(1.0-gw);A=max(A,clamp(dot(gw,vec3(0.2126,0.7152,0.0722))*0.9,0.0,1.0));}
  c=mix(clamp(c,0.0,1.0),uInkC,ink*0.92);A=max(A,ink*0.92);
  gl_FragColor=vec4(c*A,A);}`),U);

function setSize(w,h){if(w===W&&h===H)return;W=w;H=h;[rS,rD,rDh,rRay,rRay2,rAO,rAO2,rG,rG2,...rLv,...rTmp].forEach(r=>r&&r.dispose());rLv.length=rTmp.length=0;
  rS=RT(w,h,{depthBuffer:true,samples:gl2?4:0});rS.ignoreDepthForMultisampleCopy=false;   /* 신사 · 소년을 두 번 나눠 그릴 때 깊이가 이어지게 */rD=RT(w,h,{type:T.UnsignedByteType,depthBuffer:true});rDh=RT(w/2,h/2,{type:T.UnsignedByteType,depthBuffer:true});rRay=RT(w/2,h/2);rRay2=RT(w/2,h/2);rAO=RT(w/2,h/2);rAO2=RT(w/2,h/2);rG=RT(w/4,h/4);rG2=RT(w/4,h/4);
  for(let i=0;i<4;i++){const d=2<<i;rLv.push(RT(w/d,h/d));rTmp.push(RT(w/d,h/d))}U.uPx.value.set(1/w,1/h)}
// P: 조명·필터 값 (window.TUNE.look) + sunUV / sunColor / time / hide(깊이에서 뺄 물체)
function setSide(P,x){const u=k=>U[k+x],rayOn=P.rays>0&&P.sunUV;   // x: '' = 신사(A) · '_B' = 소년(B)
  u('uExp').value=P.exp;u('uTone').value=P.unlit?0:1;u('uCon').value=P.con;u('uSat').value=P.sat;u('uVib').value=P.vib;u('uTemp').value=P.temp;u('uTint').value=P.tint;u('uSplit').value=P.split;u('uBri').value=P.bri;
  u('uBloom').value=P.bloom;u('uAO').value=P.ao;u('uInk').value=P.ink;u('uInkC').value.set(P.oc);u('uSharp').value=P.sharp;u('uCA').value=P.ca;u('uGrain').value=P.grain;u('uVig').value=P.vig;u('uPoster').value=P.poster;
  u('uPunch').value=P.punch||0;u('uDiff').value=P.diff||0;u('uCel').value=P.cel||0;u('uCelN').value=P.celn||3;u('uShade').value=P.shade||0;u('uShadeC').value.set(P.shc||'#6a4fb3');u('uKuwa').value=P.kuwa||0;
  u('uScr').value=P.scr||0;u('uGrad').value=P.grad||0;u('uGrad1').value.set(P.g1||'#ffd1f0');u('uGrad2').value.set(P.g2||'#a7d8ff');
  u('uRays').value=rayOn?P.rays:0;if(P.sunColor)u('uSunC').value.copy(P.sunColor)}
// P: 신사(또는 한 명) 조명·필터 값 + sunUV / sunColor / time / hide(깊이에서 뺄 물체) / drawColor(색 그리기를 대신할 함수)
//    P.B: 소년 값 (있으면 화면 왼쪽에 따로) · P.mid: 두 사람 사이 화면 가로 위치 (0~1)
function render(P){if(!W)return;const cc=renderer.getClearColor(new T.Color()),ca=renderer.getClearAlpha(),B=P.B||null,Q=B||P,two=!!B,any=k=>P[k]>0||(two&&B[k]>0);
  renderer.setClearColor(0x000000,0);renderer.setRenderTarget(rS);renderer.clear();if(P.drawColor)P.drawColor();else renderer.render(scene,camera);
  const needD=any('ao')||any('ink'),DT=any('ink')?rD:rDh;   // 깊이: 잉크 선이 없으면 AO(반 해상도)에만 쓰니 반 해상도로 그려요
  if(needD){const hid=(P.hide||[]).filter(o=>o.visible);hid.forEach(o=>o.visible=false);scene.overrideMaterial=depthMat;renderer.setClearColor(0x000000,1);
    renderer.setRenderTarget(DT);renderer.clear();renderer.render(scene,camera);scene.overrideMaterial=null;hid.forEach(o=>o.visible=true);renderer.setClearColor(0x000000,0)}
  const mid=P.mid??.5;[pAO.u,pBright.u,U].forEach(u=>{u.uMid.value=mid;u.uTwo.value=two?1:0});
  if(any('ao')){pAO.u.tD.value=DT.texture;pAO.u.uPx.value.set(1/W,1/H);pAO.u.uR.value=14*Math.max(1,W/1280);pAO.u.uT.value=.014-.011*(P.aos||0);pAO.u.uT2.value=.014-.011*(Q.aos||0);pAO.u.uNear.value=camera.near;pAO.u.uFar.value=camera.far;draw(pAO,rAO);
    for(let k=0;k<2;k++){pBlur.u.tS.value=rAO.texture;pBlur.u.uDir.value.set(1/rAO.width,0);draw(pBlur,rAO2);pBlur.u.tS.value=rAO2.texture;pBlur.u.uDir.value.set(0,1/rAO.height);draw(pBlur,rAO)}}   // 흐림 두 번 → 노이즈 없음
  if(any('diff')){pCopy.u.tS.value=rS.texture;draw(pCopy,rG);for(let k=0;k<3;k++){pBlur.u.tS.value=rG.texture;pBlur.u.uDir.value.set(1.5/rG.width,0);draw(pBlur,rG2);pBlur.u.tS.value=rG2.texture;pBlur.u.uDir.value.set(0,1.5/rG.height);draw(pBlur,rG)}}   // 확산 글로우 재료
  if(any('bloom')){pBright.u.tS.value=rS.texture;pBright.u.uTh.value=P.bth;pBright.u.uTh2.value=Q.bth;draw(pBright,rLv[0]);
    for(let i=0;i<4;i++){if(i){pCopy.u.tS.value=rLv[i-1].texture;draw(pCopy,rLv[i])}
      pBlur.u.tS.value=rLv[i].texture;pBlur.u.uDir.value.set(1/rLv[i].width,0);draw(pBlur,rTmp[i]);pBlur.u.tS.value=rTmp[i].texture;pBlur.u.uDir.value.set(0,1/rLv[i].height);draw(pBlur,rLv[i])}}
  const rayA=P.rays>0&&P.sunUV,rayB=two&&B.rays>0&&B.sunUV;   // 빛줄기: 사람마다 해 방향이 달라서 따로
  if(rayA){pRay.u.tS.value=rS.texture;pRay.u.uSun.value.copy(P.sunUV);pRay.u.uAsp.value=W/H;draw(pRay,rRay)}
  if(rayB){pRay.u.tS.value=rS.texture;pRay.u.uSun.value.copy(B.sunUV);pRay.u.uAsp.value=W/H;draw(pRay,rRay2)}
  U.tS.value=rS.texture;U.tD.value=needD?DT.texture:black;U.tAO.value=any('ao')?rAO.texture:black;[U.tB0,U.tB1,U.tB2,U.tB3].forEach((u,i)=>u.value=any('bloom')?rLv[i].texture:black);U.tR.value=rayA?rRay.texture:black;U.tR2.value=rayB?rRay2.texture:black;
  U.tG.value=any('diff')?rG.texture:black;U.uTime.value=P.time||0;U.uAOR.value=14*(W/1280>1?W/1280:1);U.uCell.value=5*Math.max(1,W/1280);U.uNear.value=camera.near;U.uFar.value=camera.far;
  setSide(P,'');setSide(Q,'_B');
  renderer.setRenderTarget(null);renderer.clear();renderer.render(pFinal.s,oc);renderer.setClearColor(cc,ca)}
return {setSize,render}}};
