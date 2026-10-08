// 모자 쓴 신사 댄서 (three.js r147 필요)
if(window.THREE&&THREE.GLTFLoader){
// ===== 모자 쓴 신사 댄서 (model.glb) =====
// model.glb에는 뼈대가 없어서, 불러온 뒤 몸통·머리·팔·다리 뼈대를 직접 심고 춤을 춰요.
(function(){
const box=document.getElementById('monBox'),mc=document.getElementById('mon');
let renderer;try{renderer=new THREE.WebGLRenderer({canvas:mc,alpha:true,antialias:!window.POSTFX,stencil:false})}catch(e){box.style.display='none';return}
renderer.setPixelRatio(Math.min(devicePixelRatio||1,2));renderer.outputEncoding=THREE.sRGBEncoding;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;   // 영화 톤 보정: 밝은 곳은 부드럽게, 색은 진하게
// 환경광: 실내 반사광(RoomEnvironment)을 깔아서 그림자 쪽에도 은은한 빛이 돌게 (없으면 예전 조명만)
function makeEnv(r){try{if(!THREE.RoomEnvironment)return null;const pm=new THREE.PMREMGenerator(r),t=pm.fromScene(new THREE.RoomEnvironment(),.04).texture;pm.dispose();return t}catch(e){return null}}
const scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(28,1,.1,50);
const hemi=new THREE.HemisphereLight(0xffffff,0x8899aa,.2);scene.add(hemi);const dl=new THREE.DirectionalLight(0xffffff,1.1);dl.position.set(1.5,2,3);scene.add(dl);
const bl=new THREE.DirectionalLight(0xffe8f6,.55);bl.position.set(-2.2,2.6,-3);scene.add(bl);   // 뒤쪽 윤곽 빛: 배경에서 캐릭터가 떠 보이게
scene.environment=makeEnv(renderer);
// ---- 리얼 효과: 실시간 그림자(바닥 + 몸에 스스로) · 표면 디테일(텍스처 명암으로 만든 노멀맵) · 선명도(고해상도로 그리기, 비스듬한 텍스처도 선명하게) ----
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;
// ---- 무대 조명: 분홍·하늘색 스포트라이트 두 개가 박자에 맞춰 번쩍이며 좌우로 훑어요 (조명·필터 「무대 조명」) ----
const SPOTS=[new THREE.SpotLight(0xff4fa3,0,0,.5,.75),new THREE.SpotLight(0x3ddcff,0,0,.5,.75)];SPOTS[0].position.set(-2.9,3.6,2.6);SPOTS[1].position.set(2.9,3.6,2.6);SPOTS.forEach(s=>{scene.add(s);scene.add(s.target)});
// ---- 화면 효과 (js/postfx.js): 블룸·AO·빛줄기·잉크 선·색보정·그레인… ----
const FX=window.POSTFX?(()=>{try{return POSTFX.create(renderer,scene,cam)}catch(e){console.warn('postfx',e);return null}})():null;
let CUR_L=null;
dl.shadow.mapSize.set(1024,1024);   /* 그림자 맵: 캐릭터 둘레에 딱 맞춰 잡으니(fitShadow) 1024 로도 충분해요 (2048 은 매 프레임 4배 일) */{const c=dl.shadow.camera;c.left=-2.4;c.right=2.4;c.top=2.4;c.bottom=-2.4;c.near=.3;c.far=12}dl.shadow.bias=-.0004;dl.shadow.normalBias=.03;dl.shadow.radius=5;
const ground=new THREE.Mesh(new THREE.PlaneGeometry(10,10),new THREE.ShadowMaterial({opacity:.4}));ground.rotation.x=-Math.PI/2;ground.position.y=-.955;ground.receiveShadow=true;scene.add(ground);   // 발밑 그림자만 보이는 투명 바닥
const GY0=-.955,BOY_GY=.18;   // 바닥 높이 · 소년 그림자 높이 — 소년을 그리는 차례에만 바닥을 +0.18 올려요 (2026-10-06 사용자가 그림자 패널로 맞춘 값 · setup)
ground.material.depthWrite=false;   // 바닥은 깊이를 안 남겨요 — 신사 · 소년을 두 번 나눠 그릴 때 첫 번째(신사) 바닥 깊이에 가려서, 소년 바닥을 아래로 내리면 소년 그림자가 통째로 사라졌어요 (그림자만 보이는 투명 바닥이라 깊이는 필요 없어요)
// 소년 발밑 그림자 (2026-10-06 사용자: 「소년 그림자가 동떨어져 있어 — 신사처럼 발밑에 · 진하기도 신사와 같게」)
//  소년은 다리를 벌리고 춤춰서 진짜 그림자가 한쪽 발끝에서 레인 쪽으로만 길게 뻗고 다른 발 밑은 비어 있어, 그림자가 따로 떨어져 보였어요
//  → 두 발(발목 · 발가락 뼈)을 감싸는 타원 그림자를 바닥 재질 안에서 진짜 그림자와 「더 진한 쪽」으로 합쳐요 — 겹쳐도 두 번 어두워지지 않고, 진하기는 진짜 그림자(= 신사와 같은 값) 그대로
//  소년을 그리는 차례(소년이 보일 때)에만 켜요 · 발이 뜨면(깡충) 옅어져요
const GB={uGBC:{value:new THREE.Vector2()},uGBD:{value:new THREE.Vector2(1,0)},uGBR:{value:new THREE.Vector2(.3,.2)},uGBK:{value:0}},GBP=[0,1,2,3].map(()=>new THREE.Vector3());let GBB=null;
ground.material.onBeforeCompile=sh=>{Object.assign(sh.uniforms,GB);
  sh.vertexShader=sh.vertexShader.replace('void main() {','varying vec3 vGBW;\nvoid main() {').replace('#include <worldpos_vertex>','#include <worldpos_vertex>\n\tvGBW=(modelMatrix*vec4(transformed,1.0)).xyz;');
  sh.fragmentShader=sh.fragmentShader.replace('void main() {','uniform vec2 uGBC,uGBD,uGBR;uniform float uGBK;varying vec3 vGBW;\nvoid main() {').replace(/gl_FragColor\s*=\s*vec4\(\s*color\s*,\s*opacity\s*\*\s*\(\s*1\.0\s*-\s*getShadowMask\(\)\s*\)\s*\);/,
    'vec2 gbd=vGBW.xz-uGBC;vec2 gbr=vec2(dot(gbd,uGBD),dot(gbd,vec2(-uGBD.y,uGBD.x)))/uGBR;float gbl=uGBK*(1.0-smoothstep(0.3,1.0,length(gbr)));\n\tgl_FragColor=vec4(color,opacity*max(1.0-getShadowMask(),gbl));')};
ground.material.customProgramCacheKey=()=>'ground-boyfeet';
ground.onBeforeRender=()=>{GB.uGBK.value=0;const T=TG.boy;if(!T||!T.visible||!BOY.on||!BOY.mesh||!BOY.mesh.skeleton)return;
  if(!GBB){const bs=BOY.mesh.skeleton.bones,f=n=>bs.find(b=>b.name==='mixamorig'+n);GBB=['LeftFoot','LeftToeBase','RightFoot','RightToeBase'].map(f);if(GBB.some(b=>!b))GBB=[]}   /* 자동 리깅 소년(뼈 이름이 달라요)은 그냥 진짜 그림자만 */
  if(!GBB.length)return;GBB.forEach((b,i)=>b.getWorldPosition(GBP[i]));const P=GBP,lx=(P[0].x+P[1].x)/2,lz=(P[0].z+P[1].z)/2,rx=(P[2].x+P[3].x)/2,rz=(P[2].z+P[3].z)/2;
  let dx=rx-lx,dz=rz-lz;const d=Math.hypot(dx,dz)||1;dx/=d;dz/=d;const sc=BOY.off.scale.x*(BOY.react?BOY.react.scale.x:1)*T.scale.x;   /* 타원: 두 발을 잇는 방향으로 길게 · 소년 크기(성장 포함)만큼 */
  GB.uGBC.value.set((lx+rx)/2,(lz+rz)/2);GB.uGBD.value.set(dx,dz);GB.uGBR.value.set(d/2+.3*sc,.24*sc);
  const lift=Math.min(P[1].y,P[3].y)-GY0;GB.uGBK.value=Math.max(.35,Math.min(1,1-(lift-.05)/.25))};   /* 발가락 바닥 높이 — 딛고 있으면 0.02~0.05 */
const MAXANI=renderer.capabilities.getMaxAnisotropy?renderer.capabilities.getMaxAnisotropy():8;
const NMAP=new Map(),NQ=[];   // 텍스처 → 노멀맵 (처음 한 번만, 하나씩 쉬어 가며 만들어요)
function normalFor(tex){if(!tex||!tex.image)return null;if(NMAP.has(tex))return NMAP.get(tex);if(!NQ.includes(tex)){NQ.push(tex);if(NQ.length===1)setTimeout(nextNormal,30)}return null}
function nextNormal(){const tex=NQ[0];if(!tex)return;try{const img=tex.image,W=Math.min(2048,img.width||img.videoWidth||0),H=Math.round((img.height||0)*W/(img.width||1));
    if(W>8&&H>8){const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d',{willReadFrequently:true});x.drawImage(img,0,0,W,H);const p=x.getImageData(0,0,W,H).data,h=new Float32Array(W*H);
      for(let i=0,j=0;i<h.length;i++,j+=4)h[i]=(p[j]*.299+p[j+1]*.587+p[j+2]*.114)/255;
      const out=x.createImageData(W,H),o=out.data;
      for(let y=0;y<H;y++){const ya=(y?y-1:0)*W,yb=(y<H-1?y+1:y)*W,yr=y*W;for(let X=0;X<W;X++){const xa=X?X-1:0,xb=X<W-1?X+1:X,nx=-(h[yr+xb]-h[yr+xa])*3,ny=-(h[yb+X]-h[ya+X])*3,l=Math.sqrt(nx*nx+ny*ny+1),k=(yr+X)*4;
        o[k]=(nx/l*.5+.5)*255;o[k+1]=(ny/l*.5+.5)*255;o[k+2]=(1/l*.5+.5)*255;o[k+3]=255}}
      x.putImageData(out,0,0);const t=new THREE.CanvasTexture(c);t.flipY=tex.flipY;t.wrapS=tex.wrapS;t.wrapT=tex.wrapT;t.anisotropy=MAXANI;NMAP.set(tex,t)}else NMAP.set(tex,null)}catch(e){console.warn('normal map',e);NMAP.set(tex,null)}
  NQ.shift();if(NQ.length)setTimeout(nextNormal,30);else{applyLook();if(window.NOTE_RERENDER)NOTE_RIG.forEach((R,i)=>R&&NOTE_RERENDER(i))}}
let curRes=0;
// 3D 캔버스는 무대 전체를 덮어요 → 선명 배율(1.5배)을 그대로 쓰면 화소가 너무 많아요 (1920×1080 이면 466만, 고해상도 모니터는 1000만 넘게 — 그걸 매 프레임 화면(MSAA) · 깊이 · 후처리로 여러 번 그려요)
//  → 화소 수는 260만까지 (FHD 그대로보다 조금 더 선명) · 배율은 1 밑으로는 안 내려요 (플레이 중 버벅임 줄이기)
const PX_MAX=2.6e6;
function pxRatio(W,H){const want=Math.min(2,(devicePixelRatio||1)*(window.STAGE_K||1)*(curRes||1));if(window.MOB)return Math.min(want,Math.sqrt(1.1e6/Math.max(1,W*H)));   /* 모바일: 3D 화소는 110만까지 */   /* 무대 배율까지 곱해요 (무대 1920×1080 을 창에 맞춰 키우고 줄여요) */return Math.max(Math.min(1,want),Math.min(want,Math.sqrt(PX_MAX/Math.max(1,W*H))))}
let SW=1920,SH=1080;   // 무대 크기 (캐릭터 화면 자리 계산용 — 매 프레임 레이아웃을 읽지 않게)
function size(){const W=box.clientWidth,H=box.clientHeight;if(!W||!H)return;SW=W;SH=H;renderer.setPixelRatio(pxRatio(W,H));renderer.setSize(W,H,false);if(FX)FX.setSize(renderer.domElement.width,renderer.domElement.height);
  const r=window.MON_RECT||{x:0,y:0,w:W,h:H};cam.aspect=r.w/r.h;   // 카메라는 예전 댄서 칸(r) 기준으로 잡고, 그 바깥으로 무대 전체까지 넓혀서 그려요
  cam.position.set(0,.12,Math.max(4.4,4.4/cam.aspect*.75));cam.lookAt(0,.12,0);cam.setViewOffset(r.w,r.h,-r.x,-r.y,W,H);cam.updateProjectionMatrix();if(typeof boyPlace==='function')boyPlace()}
addEventListener('resize',size);addEventListener('monresize',size);
function buf(s){const b=atob(s),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u.buffer}
const ss=(a,b,x)=>{let t=(x-a)/(b-a);t=t<0?0:t>1?1:t;return t*t*(3-2*t)};
// TG: 댄서별 조절 그룹 (모델 조절 패널의 크기·회전·기울기·위치) — id: gentle 신사 / 곡 id
const TG={},DEG=Math.PI/180;
// ===== 조명·필터 (모델 조절 패널 「조명·필터」 탭, window.TUNE.look) =====
// 셀 셰이딩(MeshToonMaterial + 계단 그라데이션) · 외곽선(뒤집은 껍데기) · 림 라이트(가장자리 빛) · 조명 세기·방향·색 · 색감(채도·대비·밝기)
// 신사·곡 전용 댄서·노트 모델 모두에 적용해요. 노트는 그림을 미리 찍어 두는 방식이라 값을 놓을 때 다시 찍어요.
const LOOK0={lv:4,fx:1,elev:50,dir:65,sun:1.5,warm:.1,light:1,env:1,stage:0,sc1:'#ff4fa3',sc2:'#3ddcff',shadow:.9,detail:0,res:1,unlit:0,toon:0,outline:0,oc:'#2b0a45',rim:.12,rc:'#ffffff',
  bloom:.25,bth:.85,ao:.45,aos:0,cel:0,celn:3,shade:0,shc:'#6a4fb3',diff:0,kuwa:0,scr:0,grad:0,g1:'#ffd1f0',g2:'#a7d8ff',rays:0,ink:0,sharp:0,ca:0,grain:0,vig:0,poster:0,exp:1,con:1,sat:1.04,vib:.1,temp:0,tint:0,split:0,bri:1};   // 기본: 위쪽 비스듬한 태양 + 그림자 + 표면 디테일 + 가벼운 블룸·AO·선명   // 기본: 비스듬한 옆빛(70°) + 그림자 + 표면 디테일 — 미리보기에서 가장 입체적으로 보인 값
// 대상별 (2026-10-02 사용자: 노트 · 소년 · 신사 3D 설정 따로): TUNE.looks[대상] + 공통(TUNE.common: 화면 효과 켜기 · 선명도 — 3D 화면이 하나라서)
// 소년은 신사 맞은편(왼쪽)에 서 있어서 태양 방향을 좌우로 뒤집어 비춰요 → 그림자가 신사처럼 발밑에서 레인 쪽으로 (2026-10-06 사용자: 「소년 그림자가 떨어져 있어 — 신사처럼 발밑에」)
//  예전엔 같은 방향이라 소년 그림자만 화면 바깥쪽(왼쪽)으로 길게 뻗어 따로 떨어진 얼룩처럼 보였어요 · 모델 조절 패널 값은 그대로(좌우만 뒤집어 써요)
const boyLook=()=>{const L=lookOf('boy');L.dir=-L.dir;L.shadow=lookOf('gentle').shadow;return L};   // 그림자 진하기는 신사 값 그대로 (2026-10-06 사용자: 「그림자 진하기도 신사와 같아야지」)
const lookOf=id=>{const T=window.TUNE;return Object.assign({},LOOK0,(T&&T.looks&&T.looks[id])||(T&&T.look)||{},(T&&T.common)||{})},look=()=>lookOf('gentle'),LOOK_MESHES=[],GRAD={};
function gradTex(n){if(GRAD[n])return GRAD[n];const v=n===2?[110,255]:n===3?[70,170,255]:[50,120,190,255],dt=new Uint8Array(n*4);v.forEach((x,i)=>dt.set([x,x,x,255],i*4));
  const t=new THREE.DataTexture(dt,n,1,THREE.RGBAFormat);t.minFilter=t.magFilter=THREE.NearestFilter;t.needsUpdate=true;return GRAD[n]=t}
function withRim(mat){const U={uRim:{value:0},uRimC:{value:new THREE.Color(1,1,1)}};mat.userData.rimU=U;
  mat.onBeforeCompile=sh=>{Object.assign(sh.uniforms,U);sh.fragmentShader='uniform float uRim;uniform vec3 uRimC;\n'+sh.fragmentShader.replace('#include <dithering_fragment>',
    '#include <dithering_fragment>\n  { vec3 rn=normalize(vNormal); float rf=pow(1.0-clamp(abs(dot(rn,normalize(vViewPosition))),0.0,1.0),2.2); gl_FragColor.rgb+=uRimC*uRim*rf; }')};return mat}
function hullOf(me){if(me.userData.hull)return me.userData.hull;const hm=new THREE.MeshBasicMaterial({color:0x2b0a45,side:THREE.BackSide}),U={uW:{value:0}};hm.userData.wU=U;
  hm.onBeforeCompile=sh=>{Object.assign(sh.uniforms,U);sh.vertexShader='uniform float uW;\n'+sh.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\n  transformed+=normalize(normal)*uW;')};
  const h=me.isSkinnedMesh?new THREE.SkinnedMesh(me.geometry,hm):new THREE.Mesh(me.geometry,hm);if(me.isSkinnedMesh)h.bind(me.skeleton,me.bindMatrix);
  h.frustumCulled=false;h.position.copy(me.position);h.quaternion.copy(me.quaternion);h.scale.copy(me.scale);me.parent.add(h);return me.userData.hull=h}
function lookMesh(me,owner){if(owner)me.userData.owner=owner;if(!me.userData.std){me.userData.std=withRim(me.material);LOOK_MESHES.push(me);const mp=me.material.map;if(mp){mp.anisotropy=MAXANI;mp.needsUpdate=true}}}
function cssFilter(L){return L.sat===1&&L.con===1&&L.bri===1?'none':`saturate(${L.sat}) contrast(${L.con}) brightness(${L.bri})`}
function lightRig(h,d,L,h0,d0){h.intensity=h0*L.light;d.intensity=d0*L.sun;const a=L.dir*DEG,el=(L.elev??31)*DEG;d.position.set(Math.sin(a)*Math.cos(el)*4,Math.sin(el)*4,Math.cos(a)*Math.cos(el)*4);   // 태양: 방향(dir)·높이(elev)
  const w=L.warm,c=w>=0?new THREE.Color(1,1-.24*w,1-.55*w):new THREE.Color(1+.3*w,1+.12*w,1);d.color.copy(c);h.color.copy(c)}
function applyLook(){const L=lookOf('gentle');
  for(const me of LOOK_MESHES){const L=lookOf(me.userData.owner||'gentle'),oc=new THREE.Color(L.oc),rc=new THREE.Color(L.rc),std=me.userData.std;let mat=std;
    if(L.unlit){let u=me.userData.unlit;if(!u){u=me.userData.unlit=new THREE.MeshBasicMaterial({color:0xffffff});u.toneMapped=false}u.map=std.map;u.color.copy(std.color);u.needsUpdate=true;
      me.material=u;if(L.outline>0||me.userData.hull){const h=hullOf(me);h.visible=L.outline>0;h.material.color.copy(oc);h.material.userData.wU.uW.value=L.outline*.006}continue}   // 텍스처 그대로: 조명·톤 보정 없이 칠해진 색 그대로 (외곽선만)
    if(L.toon){let t=me.userData.toon;if(!t){t=me.userData.toon=withRim(new THREE.MeshToonMaterial({color:0xffffff}))}t.map=std.map;t.color.copy(std.color);t.gradientMap=gradTex(L.toon);t.needsUpdate=true;mat=t}
    {const nm=L.detail>0?normalFor(std.map):null;for(const m of [std,me.userData.toon])if(m){if(m.normalMap!==nm){m.normalMap=nm;m.needsUpdate=true}if(nm)m.normalScale.set(L.detail,L.detail)}}
    me.castShadow=me.receiveShadow=L.shadow>0;std.envMapIntensity=L.env*.3;me.material=mat;mat.userData.rimU.uRim.value=L.rim;mat.userData.rimU.uRimC.value.copy(rc);
    if(L.outline>0||me.userData.hull){const h=hullOf(me);h.visible=L.outline>0;h.material.color.copy(oc);h.material.userData.wU.uW.value=L.outline*.006}}
  rig(L);renderer.toneMappingExposure=L.exp;CUR_L=L;mc.style.filter=FX&&L.fx?'none':cssFilter(L);   // 화면 효과를 켜면 색보정은 후처리에서 (끄면 3D 화면 하나라 신사 값으로)
  if(L.res!==curRes){curRes=L.res;size()}}
function rig(L){lightRig(hemi,dl,L,.2,1.1);bl.intensity=.55*L.sun;dl.castShadow=L.shadow>0;ground.visible=L.shadow>0;ground.material.opacity=.5*L.shadow}
const SUNV=new THREE.Vector3(),MIDV=new THREE.Vector3();
function sunUVOf(L){const a=L.dir*DEG,el=(L.elev??31)*DEG;SUNV.set(Math.sin(a)*Math.cos(el),Math.sin(el),Math.cos(a)*Math.cos(el)).multiplyScalar(30).project(cam);   // 화면 밖 태양은 가장자리 근처로 끌어와서 빛줄기가 보이게
  return SUNV.z<1?new THREE.Vector2(Math.min(1.12,Math.max(-.12,SUNV.x*.5+.5)),Math.min(1.12,Math.max(-.12,SUNV.y*.5+.5))):null}
function sunColOf(L){const w=L.warm;return w>=0?new THREE.Color(1,1-.24*w,1-.55*w):new THREE.Color(1+.3*w,1+.12*w,1)}
function midUV(){MIDV.set(0,-.3,0);TG.gentle.localToWorld(MIDV);MIDV.project(cam);const g=MIDV.x;MIDV.set(0,-.3,0);BOY.off.localToWorld(MIDV);MIDV.project(cam);return ((g+MIDV.x)/2+1)/2}   // 신사 · 소년 사이 화면 가로 위치 (0~1)
window.LOOK_APPLY=reshoot=>{applyLook();if(reshoot&&window.NOTE_RERENDER)NOTE_RIG.forEach((R,i)=>R&&NOTE_RERENDER(i))};
let root,B={},react={hop:0,hy:0,hv:0,wob:0,cheer:0,spin:0},mat;   /* hy · hv: 맞힘 깡충 높이 · 속도 (중력으로 떨어져요) */
// 원본 모델은 무손실 meshopt 로 묶여 있어요 → 로더에 압축 해제기를 달아요 (maple-drum-assets/meshopt-lossless.mjs)
const GL=()=>{const l=new THREE.GLTFLoader();if(window.MeshoptDecoder)l.setMeshoptDecoder(MeshoptDecoder);return l};
const _gl=GL(),_onG=g=>{
  let src;g.scene.traverse(o=>{if(o.isMesh&&!src)src=o});
  const geo=src.geometry.clone();geo.applyMatrix4(src.matrixWorld);
  mat=src.material;mat.metalness=0;mat.roughness=.85;
  // 텍스처는 glb 안의 blob 주소 대신 data: 이미지로 직접 입혀요 (게시된 페이지 보안 정책에서 blob 이미지가 막힐 수 있어서)
  {const img=new Image();img.onload=()=>{const tx=new THREE.Texture(img);tx.flipY=false;tx.encoding=THREE.sRGBEncoding;tx.anisotropy=4;tx.needsUpdate=true;
    mat.map=tx;mat.color.set(0xffffff);mat.needsUpdate=true;setTimeout(makeSprites,50)};img.src=window.MONSTER_TEX||'assets/model/gentleman_tex.jpg'}
  // 뼈대: 0 root,1 hips,2 spine,3 head,4 팔R(우산),5 팔L,6 다리R,7 다리L
  const J=[[null,0,-.95,0],[0,0,-.6,0],[1,0,-.35,0],[2,0,-.22,0],[2,-.42,-.2,0],[2,.40,-.2,0],[1,-.2,-.62,0],[1,.17,-.62,0]];
  const bones=J.map(()=>new THREE.Bone());
  J.forEach(([p,x,y,z],i)=>{const pp=p==null?[0,0,0]:J[p].slice(1);bones[i].position.set(x-(p==null?0:pp[0]),y-(p==null?0:pp[1]),z);if(p!=null)bones[p].add(bones[i])});
  ['root','hips','spine','head','armR','armL','legR','legL'].forEach((n,i)=>B[n]=bones[i]);
  const P=geo.attributes.position,n=P.count,si=new Uint16Array(n*4),sw=new Float32Array(n*4);
  for(let i=0;i<n;i++){const x=P.getX(i),y=P.getY(i);
    let wR=ss(-.40,-.49,x)*ss(-.07,-.12,y)*(y>-.4?1:ss(-.49,-.55,x));
    let wL=ss(.38,.47,x)*(x>.52?ss(.02,-.04,y):ss(-.08,-.13,y))*ss(-.42,-.34,y);
    const a=Math.min(1,wR+wL);if(wR+wL>1){wR/=wR+wL;wL=1-wR}
    const wH=ss(-.28,-.18,y),tr=(1-a)*(1-wH),wLeg=ss(-.56,-.68,y),wSp=ss(-.55,-.35,y),lr=ss(-.06,.02,x);
    const w=[0,tr*(1-wLeg)*(1-wSp),tr*(1-wLeg)*wSp,(1-a)*wH,wR,wL,tr*wLeg*(1-lr),tr*wLeg*lr];
    const idx=w.map((v,k)=>k).sort((p,q)=>w[q]-w[p]).slice(0,4);let s=0;idx.forEach(k=>s+=w[k]);
    idx.forEach((k,j)=>{si[i*4+j]=k;sw[i*4+j]=s>0?w[k]/s:(j?0:1)})}
  geo.setAttribute('skinIndex',new THREE.Uint16BufferAttribute(si,4));geo.setAttribute('skinWeight',new THREE.Float32BufferAttribute(sw,4));
  geo.computeBoundingBox();GTOP=geo.boundingBox.max.y;   /* 말풍선 자리: 모자 꼭대기 높이 (B 는 뼈 목록이라 따로 둬요) */
  const mesh=new THREE.SkinnedMesh(geo,mat);mesh.frustumCulled=false;lookMesh(mesh,'gentle');
  root=new THREE.Group();root.add(bones[0]);root.add(mesh);root.updateMatrixWorld(true);mesh.bind(new THREE.Skeleton(bones));
  TG.gentle=new THREE.Group();TG.gentle.add(root);scene.add(TG.gentle);applyLook();Object.values(B).forEach(b=>b.userData.p0=b.position.clone());size();
},_onE=e=>{console.error('model load',e);box.style.display='none'};
const R3=window.R3D||{prog(){},fin(){}};window.R3D_GO=true;   // 3D 준비 신호 (index.html R3D): 신사 · 소년 · 노트 캐릭터 4종을 받고 노트 그림까지 구우면 「준비 중」 막대가 끝나요 — 실패해도 끝으로 쳐요 (2026-10-06 사용자: 로딩 추천안)
const _onG2=g=>{try{_onG(g)}finally{R3.fin('gentle')}},_onE2=e=>{try{_onE(e)}finally{R3.fin('gentle')}};
if(window.MOB)R3.fin('gentle');   // 모바일: 3D 신사는 안 불러요 (영상이 늘 위에 있어서 안 보여요)
else if(window.MONSTER_B64)_gl.parse(buf(MONSTER_B64),'',_onG2,_onE2);else _gl.load(window.MONSTER_GLB||'assets/model/gentleman.glb',_onG2,x=>R3.prog('gentle',x.loaded),e=>{const alt=window.MEDIA_ALT&&MEDIA_ALT(window.MONSTER_GLB);if(alt){console.warn('gentleman: 예비 주소로',e);_gl.load(alt,_onG2,x=>R3.prog('gentle',x.loaded),_onE2)}else _onE2(e)});   /* 신사 모델은 GitHub 에서 (jsDelivr → 안 되면 GitHub 원본 · 2026-10-07) */
// ---- 노트용 스프라이트: 같은 모델을 작은 화면에 여러 각도로 찍어서 노트 그림으로 써요 ----
function makeSprites(){if(window.NOTE_MODEL)return;try{
  const S=128,sr=new THREE.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true});sr.setSize(S,S,false);sr.outputEncoding=THREE.sRGBEncoding;
  const sc=new THREE.PerspectiveCamera(30,1,.1,50);sc.position.set(0,0,4.1);sc.lookAt(0,0,0);
  Object.values(B).forEach(b=>{b.rotation.set(0,0,0);b.scale.set(1,1,1);b.position.copy(b.userData.p0)});
  const frames=[],N=16;
  for(let i=0;i<N;i++){B.root.rotation.y=i/N*Math.PI*2;B.armL.rotation.z=.5;B.armR.rotation.z=-.5;root.updateMatrixWorld(true);sr.render(scene,sc);
    const c=document.createElement('canvas');c.width=c.height=S;c.getContext('2d').drawImage(sr.domElement,0,0);frames.push(c)}
  window.NOTE_SPR=frames;sr.dispose();sr.forceContextLoss&&sr.forceContextLoss()}catch(e){console.error('sprite',e)}}
// 레인 옆 3D 캐릭터는 신사 하나예요 (라이더 3D 는 2026-10-02 에 뺐어요)
function activeId(){return 'gentle'}
window.DANCER_ACTIVE=activeId;
// ---- 4倍の世界 왼쪽 댄서: 소년 인형 (window.BOY_GLB — 예전 자동 리깅 소년 · 2026-10-07 용량 줄이기로 이제 안 받아요) ----
// T 포즈로 서 있는 뼈대 없는 모델이라, 신사와 같은 이름의 뼈(root·hips·spine·head·팔·다리)를 심어서 신사 춤을 거울처럼 같이 춰요. 판정 반응도 같이 해요.
// 자리: 신사(화면 오른쪽)와 좌우 대칭인 왼쪽, 레인 쪽으로 살짝. 카메라를 향해 몸을 돌려 세워요.
var BOY={B:{},on:false,wx:0};   // var: size() 가 먼저 불려도 괜찮게
const BOY_SONG='yonbai';
// 팔 정점 고르기: 팔 영역(|x|>0.22, 어깨 높이 -0.235~0.04) 안에서 삼각형으로 이어진 덩어리 중 손끝(|x|>0.72)이 들어 있는 것만 팔.
// UV 이음매로 갈라진 정점은 위치가 같으면 하나로 쳐요. (거리로만 자르면 손이 잘려 막대처럼 늘어나거나, 볼이 팔에 끌려갔어요)
function boyArmMask(geo){const P=geo.attributes.position,n=P.count,ix=geo.index?geo.index.array:null,nt=ix?ix.length/3:n/3,R=new Uint8Array(n),wid=new Int32Array(n),key=new Map();
  for(let i=0;i<n;i++){const x=P.getX(i),y=P.getY(i),k=Math.round(x*2e4)+','+Math.round(y*2e4)+','+Math.round(P.getZ(i)*2e4);let w=key.get(k);if(w===undefined){w=key.size;key.set(k,w)}wid[i]=w;
    R[i]=Math.abs(x)>.22&&y<.04&&y>-.235?1:0}
  const par=new Int32Array(key.size);for(let i=0;i<par.length;i++)par[i]=i;
  const find=a=>{while(par[a]!==a){par[a]=par[par[a]];a=par[a]}return a},uni=(a,b)=>{a=find(a);b=find(b);if(a!==b)par[a]=b};
  for(let t=0;t<nt;t++){const a=ix?ix[t*3]:t*3,b=ix?ix[t*3+1]:t*3+1,c=ix?ix[t*3+2]:t*3+2;if(R[a]&&R[b]&&R[c]){uni(wid[a],wid[b]);uni(wid[b],wid[c])}}
  const seed=new Set();for(let i=0;i<n;i++)if(R[i]&&Math.abs(P.getX(i))>.72)seed.add(find(wid[i]));
  const out=new Uint8Array(n);for(let i=0;i<n;i++)out[i]=R[i]&&seed.has(find(wid[i]))?1:0;return out}
function loadBoy(url){GL().load(url,g=>{try{
  let src;g.scene.updateMatrixWorld(true);g.scene.traverse(o=>{if(o.isMesh&&!src)src=o});
  const geo=src.geometry.clone();geo.applyMatrix4(src.matrixWorld);const m=src.material;m.metalness=0;m.roughness=.85;
  // 뼈 자리 (모델 좌표: 발 -0.95 · 다리 갈라지는 곳 -0.62 · 반바지 -0.25~-0.6 · 몸통 -0.25~0.05 · 목 0.07 · 머리 0.1~0.95 · 팔 y -0.2~0, |x| 0.25~0.78)
  const J=[[null,0,-.95,0],[0,0,-.45,0],[1,0,-.2,0],[2,0,.07,0],[2,-.27,-.1,0],[2,.27,-.1,0],[1,-.14,-.5,0],[1,.14,-.5,0]];
  const bones=J.map(()=>new THREE.Bone());
  J.forEach(([pa,x,y,z],i)=>{const pp=pa==null?[0,0,0]:J[pa].slice(1);bones[i].position.set(x-pp[0],y-pp[1],z-pp[2]);if(pa!=null)bones[pa].add(bones[i])});
  ['root','hips','spine','head','armR','armL','legR','legL'].forEach((n,i)=>BOY.B[n]=bones[i]);
  const P=geo.attributes.position,n=P.count,si=new Uint16Array(n*4),sw=new Float32Array(n*4);
  const ARM=boyArmMask(geo);BOY.armN=ARM.reduce((s,v)=>s+v,0);   // 손끝에서부터 이어진 팔 정점만 (볼·턱은 가까워도 이어져 있지 않아서 빠져요)
  for(let i=0;i<n;i++){const x=P.getX(i),y=P.getY(i),ax=Math.abs(x);
    const arm=ARM[i]?ss(.22,.31,ax):0,wR=x<0?arm:0,wL=x>0?arm:0,a=wR+wL;   // 겨드랑이 쪽만 몸통과 부드럽게 섞어요
    const hd=ss(.01,.11,y),wH=(1-a)*hd,tr=(1-a)*(1-hd),wLeg=ss(-.5,-.64,y),wSp=ss(-.42,-.22,y),lr=ss(-.03,.03,x);
    const w=[0,tr*(1-wLeg)*(1-wSp),tr*(1-wLeg)*wSp,wH,wR,wL,tr*wLeg*(1-lr),tr*wLeg*lr];
    const idx=w.map((v,k)=>k).sort((p,q)=>w[q]-w[p]).slice(0,4);let s2=0;idx.forEach(k=>s2+=w[k]);
    idx.forEach((k,j)=>{si[i*4+j]=k;sw[i*4+j]=s2>0?w[k]/s2:(j?0:1)})}
  geo.setAttribute('skinIndex',new THREE.Uint16BufferAttribute(si,4));geo.setAttribute('skinWeight',new THREE.Float32BufferAttribute(sw,4));
  const mesh=new THREE.SkinnedMesh(geo,m);mesh.frustumCulled=false;lookMesh(mesh,'boy');
  const r0=new THREE.Group();r0.add(bones[0]);r0.add(mesh);r0.updateMatrixWorld(true);mesh.bind(new THREE.Skeleton(bones));
  BOY.off=new THREE.Group();BOY.off.add(r0);TG.boy=new THREE.Group();TG.boy.add(BOY.off);TG.boy.visible=false;scene.add(TG.boy);
  BOY.mesh=mesh;window.__BOY=BOY;Object.values(BOY.B).forEach(b=>b.userData.p0=b.position.clone());applyLook();boyPlace()}catch(e){console.error('boy dancer',e)}},undefined,e=>console.error('boy dancer',e))}
// 신사와 좌우 대칭인 자리 (발 높이는 같아요): 화면 x 가 (전체 폭 - 신사 x) 가 되는 세계 x 를 구해요
function boyPlace(){if(!BOY||!BOY.off)return;const W=box.clientWidth;if(!W)return;cam.updateMatrixWorld();
  const p0=new THREE.Vector3(0,-.95,0).project(cam),p1=new THREE.Vector3(1,-.95,0).project(cam),s0=(p0.x+1)/2*W,s1=(p1.x+1)/2*W;
  const tx=W-s0+W*.015,wx=(tx-s0)/(s1-s0),bs=.9;BOY.wx=wx;BOY.off.position.set(wx,-.95*(1-bs),0);BOY.off.scale.setScalar(bs);
  BOY.off.rotation.y=Math.atan2(cam.position.x-wx,cam.position.z)*.85+.12;   // 카메라 쪽으로 몸을 돌리고, 레인 쪽으로 살짝 더
  shadowSpan()}
// 그림자 범위: 소년이 있으면 왼쪽까지 넓혀요 (바뀔 때만 그림자 지도를 다시 만들어요)
// 그림자 지도 범위: 캐릭터가 서 있는 곳(신사 + 소년)만 감싸도록 해 방향에 맞춰 매 프레임 맞춰요
// → 지도는 2048×2048 하나로 충분하고(예전엔 소년이 있으면 4096×2048), 같은 크기 안에 캐릭터가 더 촘촘히 들어가 그림자도 그대로거나 더 선명해요
const SHB=[new THREE.Vector3(),new THREE.Vector3()],SHV=new THREE.Vector3();
function shadowSpan(){ground.scale.set(BOY.on?Math.max(1,(Math.abs(BOY.wx)+2.4)/4):1,1,1)}
function fitShadow(who){const c=dl.shadow.camera;   // who: 'gentle' · 'boy' (나눠 그릴 때 그 사람만) · 없으면 둘 다
 dl.updateMatrixWorld();dl.target.updateMatrixWorld();dl.shadow.updateMatrices(dl);
  let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;const boxes=[];if(who!=='boy')boxes.push([-1.15,1.15,-.97,1.25,-1,1]);if(who!=='gentle'&&BOY.on&&TG.boy)boxes.push([BOY.wx-1.15,BOY.wx+1.15,-.97,.95,-1.1,1.1]);if(!boxes.length)boxes.push([-1.15,1.15,-.97,1.25,-1,1]);
  for(const b of boxes)for(let i=0;i<8;i++){SHV.set(i&1?b[1]:b[0],i&2?b[3]:b[2],i&4?b[5]:b[4]).applyMatrix4(c.matrixWorldInverse);if(SHV.x<x0)x0=SHV.x;if(SHV.x>x1)x1=SHV.x;if(SHV.y<y0)y0=SHV.y;if(SHV.y>y1)y1=SHV.y}
  const m=.15;if(Math.abs(c.left-(x0-m))+Math.abs(c.right-(x1+m))+Math.abs(c.bottom-(y0-m))+Math.abs(c.top-(y1+m))>.002){c.left=x0-m;c.right=x1+m;c.bottom=y0-m;c.top=y1+m;c.updateProjectionMatrix()}}
// Mixamo 로 리깅한 소년 (window.BOY_MIXAMO, model/boy_mixamo): 진짜 춤 동작(스윙 댄스)을 곡 시간에 맞춰 틀어요. 실패하면 자동 리깅 소년으로.
// 머리는 maple-drum-assets/mixamo_in/convert.mjs 에서 Head·Neck 뼈에만 다시 붙였어요 (Mixamo 그대로면 턱·볼이 어깨·팔에 끌려 늘어나요)
// 춤 고르기: 8마디마다 다음 춤으로 (스윙 → 힙합 → 업록 → …), 바뀔 때 0.6초 동안 섞어요. 곡 시간에 맞춰서 멈추면 같이 멈춰요
// 춤마다 원래 박자 (maple-drum-assets/mixamo_in/tempo2.mjs 로 잰 값): 한 바퀴 박자 수 · 엉덩이가 내려앉는 첫 박 자리(초)
const BOY_TEMPO={swing:{beats:32,p0:.433},hiphop:{beats:10,p0:.2},uprock:{beats:12,p0:0}};
// 기본 서 있는 자세: T 포즈에서 어깨만 돌려 팔을 몸 옆으로 살짝 벌려 내린 자세 (mixamo_in/idle.mjs 로 찾은 값)
const BOY_IDLE_HIPS=new THREE.Vector3(0,.44,0);
const BOY_IDLE={LeftArm:[.31126,-.03929,-.1189,.94204],RightArm:[.30937,.02653,.08123,.94709]};
// 춤 고르기: 8마디마다 다음 춤으로 (스윙 → 힙합 → 업록 → …), 바뀔 때 0.6초 동안 섞어요
// 속도: 춤의 한 박이 곡의 한 박(또는 반 박·두 박)에 딱 맞게 늘이고 줄여요 → 엉덩이가 내려앉는 순간이 곡의 박자와 같아요
// 곡이 시작되기 전(곡 선택 화면·카운트다운)에는 기본 자세로 서서 숨만 쉬어요
function boyDance(st){const A=BOY.acts;if(!A||!A.length)return;
  const play=st!=null&&typeof CHART!=='undefined',spb=play?60/CHART.bpm:.6,t=play?st-CHART.beats[0]:-1;
  const w0=play?Math.min(1,Math.max(0,(t+.3)/.6)):0;BOY.idle=1-w0;   // 첫 박 0.3초 전부터 춤으로 넘어가요
  const b=play?Math.max(0,beatAt(st)):0,seg=Math.floor(b/32),lb=b-seg*32,cur=seg%A.length,prev=(seg+A.length-1)%A.length,f=seg>0?Math.min(1,lb*spb/.6):1;
  A.forEach((a,i)=>{const c=a.getClip(),d=c.duration,T=BOY_TEMPO[c.name]||{beats:Math.max(1,Math.round(d/.5)),p0:0},pc=d/T.beats;
    if(a.userData==null){let best=1,bd=9;for(const k of [.5,1,2]){const r=Math.abs(Math.log(k*pc/spb));if(r<bd){bd=r;best=k}}a.userData={k:best,spb}}   /* 곡 한 박에 춤 몇 박 */
    if(a.userData.spb!==spb){a.userData=null;return}
    const w=(i===cur?f:(i===prev&&f<1?1-f:0))*w0,beats=i===cur?lb:lb+32,ct=(T.p0%pc)+beats*a.userData.k*pc;a.setEffectiveWeight(w);a.time=((ct%d)+d)%d});
  BOY.mixer.update(0);
  if(BOY.idle>0&&BOY.arms){for(const [bn,q] of BOY.arms)bn.quaternion.slerp(q,BOY.idle);if(BOY.hips)BOY.hips.position.lerp(BOY_IDLE_HIPS,BOY.idle)}}   /* 춤 동작은 엉덩이를 바닥 기준 높이로 올려 두니, 서 있을 때도 같은 높이로 (안 그러면 바닥에 파묻혀요) */
function loadBoyMixamo(url){const fb=e=>{console.error('boy mixamo',e);R3.fin('boy');if(window.BOY_GLB)loadBoy(BOY_GLB)};GL().load(url,g=>{try{
  const sc=g.scene;let mesh=null;sc.traverse(o=>{if(o.isSkinnedMesh){if(!mesh)mesh=o;o.frustumCulled=false;if(o.material){o.material.metalness=0;o.material.roughness=.85}lookMesh(o,'boy')}});if(!mesh)throw new Error('no skinned mesh');
  // 춤 여러 개 (스윙 · 힙합 · 브레이크 업록): 제자리 춤이 되게 엉덩이 이동을 정리해요
  //  · 한 바퀴 동안 앞이나 옆으로 걸어가는 춤은 그 직선 이동을 빼서 반복할 때 휙 돌아가지 않게
  //  · 남은 좌우·앞뒤 흔들림은 30%만 (레인 쪽으로 걸어가지 않게)
  const clips=g.animations.slice();
  for(const clip of clips){const tr=clip.tracks.find(t=>/Hips\.position$/.test(t.name));if(!tr)continue;const v=tr.values,T=tr.times,n=T.length,t0=T[0],t1=T[n-1]||1,x0=v[0],z0=v[2],dx=v[(n-1)*3]-x0,dz=v[(n-1)*3+2]-z0;
    for(let i=0;i<n;i++){const k=(T[i]-t0)/(t1-t0||1),x=v[i*3]-dx*k,z=v[i*3+2]-dz*k;v[i*3]=x0+(x-x0)*.3;v[i*3+2]=z0+(z-z0)*.3}}
  const inner=new THREE.Group();inner.position.y=-.93;inner.add(sc);   // 춤 동작은 발이 y≈0 이라 신사 발 높이(-0.955)로 내려요
  BOY.react=new THREE.Group();BOY.react.add(inner);BOY.off=new THREE.Group();BOY.off.add(BOY.react);TG.boy=new THREE.Group();TG.boy.add(BOY.off);TG.boy.visible=false;scene.add(TG.boy);
  BOY.mixer=new THREE.AnimationMixer(sc);BOY.acts=clips.map(c=>{const a=BOY.mixer.clipAction(c);a.play();a.setEffectiveWeight(0);return a});BOY.arms=[];sc.traverse(o=>{if(o.isBone&&/Hips$/.test(o.name))BOY.hips=o;if(/HeadTop_End$/.test(o.name))BOY.top=o;if(o.isBone&&/Head$/.test(o.name))BOY.head=o;   /* 머리 꼭대기 지점은 뼈대 목록 밖이라 일반 지점으로 들어와요 */if(o.isBone)for(const k in BOY_IDLE)if(o.name.endsWith(k)&&!/Fore/.test(o.name))BOY.arms.push([o,new THREE.Quaternion(...BOY_IDLE[k])])});BOY.mesh=mesh;window.__BOY=BOY;
  applyLook();boyPlace();R3.fin('boy')}catch(e){fb(e)}},x=>R3.prog('boy',x.loaded),e=>{const alt=window.MEDIA_ALT&&MEDIA_ALT(url);if(alt){console.warn('boy mixamo: 예비 주소로',e);loadBoyMixamo(alt)}else fb(e)})   /* 소년 모델은 GitHub 에서 (jsDelivr → 안 되면 GitHub 원본) */}
if(window.BOY_MIXAMO)loadBoyMixamo(BOY_MIXAMO);else{R3.fin('boy');if(window.BOY_GLB)loadBoy(BOY_GLB)}
// ---- 노트 전용 모델 (window.NOTE_GLBS): 여러 개면 노트마다 섞여서 나와요. 없거나 실패하면 신사 그림 그대로 ----
// 크기: 모든 모델에 첫 번째 모델의 배율을 똑같이 써요 → 원래 모델링 크기 그대로 비교돼서 같은 크기로 보여요 (그림 밖으로 나가면만 줄여요)
function noteRig(gl,k0){
  const sc=new THREE.PerspectiveCamera(30,1,.1,50);sc.position.set(0,.25,4.1);sc.lookAt(0,0,0);
  const ns=new THREE.Scene();ns.add(new THREE.HemisphereLight(0xffffff,0x8899aa,.6));const dl2=new THREE.DirectionalLight(0xffffff,1.15);dl2.position.set(1.5,2,3);ns.add(dl2);
  const bl2=new THREE.DirectionalLight(0xffe8f6,.55);bl2.position.set(-2.2,2.6,-3);ns.add(bl2);
  const m=gl.scene,bb=new THREE.Box3().setFromObject(m),sz=bb.getSize(new THREE.Vector3()),c=bb.getCenter(new THREE.Vector3()),k=Math.min(k0,1.9/Math.max(sz.x,sz.y,sz.z));
  m.position.sub(c);const piv=new THREE.Group();piv.add(m);piv.scale.setScalar(k);piv.position.y=-1+sz.y*k/2;ns.add(piv);   // 바닥을 그림 아래쪽에 (받침 위에 서게)
  const meshes=[];m.traverse(o=>{if(o.isMesh&&o.material){o.material.metalness=0;o.material.roughness=Math.max(.6,o.material.roughness??.8);meshes.push(o)}});meshes.forEach(m=>lookMesh(m,'notes'));
  return {ns,sc,piv,hemi:ns.children[0],dl:dl2,bl:bl2}}
function noteShoot(sr,R,tilt){const frames=[],N=36,S=sr.domElement.width,L=lookOf('notes'),cf=cssFilter(L);applyLook();lightRig(R.hemi,R.dl,L,.22,1.15);R.bl.intensity=.55*L.sun;R.ns.environment=sr.userData.env;sr.toneMappingExposure=L.exp;   // 36장(10°씩): 천천히 돌아도 뚝뚝 끊기지 않게
  for(let i=0;i<N;i++){R.piv.rotation.set(tilt,i/N*Math.PI*2,0);sr.render(R.ns,R.sc);const cv=document.createElement('canvas');cv.width=cv.height=S;const x=cv.getContext('2d');x.filter=cf;x.drawImage(sr.domElement,0,0);frames.push(cv)}
  return frames}
function noteRenderer(){const sr=new THREE.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true});sr.setSize(256,256,false);sr.outputEncoding=THREE.sRGBEncoding;
  sr.toneMapping=THREE.ACESFilmicToneMapping;sr.toneMappingExposure=lookOf('notes').exp;sr.userData={env:makeEnv(sr)};return sr}   // 렌더러에는 userData 가 없어서 직접 만들어요
const tiltOf=i=>((window.TUNE&&TUNE.notes[i]&&TUNE.notes[i].tilt)||0)*DEG,NOTE_RIG=[];
window.NOTE_RERENDER=i=>{const R=NOTE_RIG[i];if(!R)return;const sr=noteRenderer();window.NOTE_SPRS[i]=noteShoot(sr,R,tiltOf(i));sr.dispose();sr.forceContextLoss&&sr.forceContextLoss();window.NOTE_SPR=NOTE_SPRS.find(Boolean)};
function loadNotes(){const urls=(window.NOTE_GLBS||[]).filter(Boolean);for(let i=(window.NOTE_GLBS||[]).length;i<4;i++)R3.fin('note'+i);   // 없는 자리는 바로 끝으로
 if(!urls.length){[0,1,2,3].forEach(i=>R3.fin('note'+i));R3.fin('bake')}
 if(urls.length){const L=GL();
  Promise.all((window.NOTE_GLBS||[]).map((u,i)=>u?new Promise(r=>L.load(u,g=>{R3.fin('note'+i);r(g)},x=>R3.prog('note'+i,x.loaded),e=>{console.error('note model',e);R3.fin('note'+i);r(null)})):(R3.fin('note'+i),null))).then(gs=>{try{
    const ok=gs.filter(Boolean);if(!ok.length)return;   // 실패한 모델 자리는 null 로 남겨 순서를 지켜요 (레인 배정에 써요)
    const s0=new THREE.Box3().setFromObject(ok[0].scene).getSize(new THREE.Vector3()),k0=1.8/Math.max(s0.x,s0.y,s0.z);   // 첫 번째 모델: 가장 긴 변 1.8 — 나머지도 같은 배율 (원래 모델링 크기 그대로)
    gs.forEach((g,i)=>NOTE_RIG[i]=g?noteRig(g,k0):null);
    const sr=noteRenderer();const sets=NOTE_RIG.map((R,i)=>R?noteShoot(sr,R,tiltOf(i)):null);sr.dispose();sr.forceContextLoss&&sr.forceContextLoss();
    window.NOTE_SPRS=sets;window.NOTE_SPR=sets.find(Boolean);window.NOTE_MODEL=true;
    if(window.MOB){if(window.createImageBitmap){const NQ=160,shrink=src=>{const c=document.createElement('canvas');c.width=c.height=NQ;const x=c.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(src,0,0,NQ,NQ);return createImageBitmap(c)};Promise.all(sets.map(fr=>fr?Promise.all(fr.map(shrink)):null)).then(bs=>{window.NOTE_SPRS=bs;window.NOTE_SPR=bs.find(Boolean)}).catch(()=>{})}}   // 모바일: 160px ImageBitmap 으로 (그릴 때 가벼워요 · 저장본은 256px 그대로)
    }catch(e){console.error('note sprite',e)}finally{R3.fin('bake')}})}}
// 노트 그림은 index.html 이 미리 구운 그림 판(notes/nN.txt)으로 넣어요 (2026-10-07 사용자: 「64MB 밑으로」 — 3D 노트 모델 34MB 를 안 받게)
//  3D 노트 모델을 줄 때(window.NOTE_GLBS)만 예전처럼 여기서 구워요 · 모바일 기기 저장(IndexedDB)은 이제 필요 없어서 뺐어요
if((window.NOTE_GLBS||[]).some(Boolean))loadNotes();
const clock=new THREE.Clock();
function songT(){try{return (typeof playing!=='undefined'&&playing)?now():null}catch(e){return null}}
// ---- 춤 동작 모음 (몇 마디마다 곡 분위기에 맞춰 바뀜) ----
// 반환값: 각 뼈의 추가 회전/이동. b=박자 위치, ph=박자 안 위치(0~1), bi=박자 번호
const up=x=>Math.pow(Math.max(0,Math.sin(Math.PI*x)),.8);
const MOVES=[
 {n:'번갈아 손들기',e:0,f:(b,ph,bi)=>({aL:bi%2?up(ph)*1.25:.05,aR:bi%2?.05:up(ph)*1.25,legL:bi%2?0:.18*up(ph),legR:bi%2?.18*up(ph):0})},
 {n:'양팔 파닥',e:0,f:(b)=>{const w=Math.sin(2*Math.PI*b);return{aL:.5+w*.4,aR:.5-w*.4,headZ:w*.1}}},
 {n:'우산 휘두르기',e:1,f:(b,ph)=>{const c=2*Math.PI*b/2;return{aR:.9+Math.sin(c)*.6,aRx:Math.cos(c)*.6,aL:-.15,twist:Math.sin(c)*.35,headZ:Math.sin(c)*.12}}},
 {n:'옆으로 스텝',e:1,f:(b,ph,bi)=>{const side=Math.sin(Math.PI*b/2);return{x:side*.45,aL:.25-side*.35,aR:.25+side*.35,legL:bi%2?.25*up(ph):0,legR:bi%2?0:.25*up(ph),hipsZ:side*.1}}},
 {n:'만세 점프',e:2,f:(b,ph)=>({aL:1.35+up(ph)*.2,aR:1.35+up(ph)*.2,hop:up(ph)*.9,legL:up(ph)*.2,legR:up(ph)*.2})},
 {n:'콘서트 웨이브',e:2,f:(b)=>{const s=Math.sin(Math.PI*b/2);return{aL:1.2+s*.25,aR:1.2-s*.25,rootZ:s*.14,headZ:s*.18,twist:s*.1}}},
 {n:'빙글빙글',e:1,f:(b,ph,bi)=>({rotY:2*Math.PI*((b%4)/4),aL:.7,aR:.7,hop:up(ph)*.3})},
 {n:'꾸벅 인사',e:0,f:(b,ph,bi)=>{const k=bi%4===0?up(ph):0;return{spineX:k*.55,headX:k*.3,aR:.2+k*.9,aRx:-k*.8,aL:.1}}},
 {n:'킥 스텝',e:2,f:(b,ph,bi)=>({legL:bi%2?up(ph)*.55:0,legR:bi%2?0:up(ph)*.55,aL:bi%2?.3:.3+up(ph)*1.1,aR:bi%2?.3+up(ph)*1.1:.3,hop:up(ph)*.35,twist:(bi%2?1:-1)*.15})},
 {n:'트위스트',e:1,f:(b)=>{const w=Math.sin(2*Math.PI*b);return{twist:w*.5,hipsZ:-w*.12,aL:.7+w*.3,aR:.7-w*.3,headZ:-w*.12,legL:Math.max(0,w)*.2,legR:Math.max(0,-w)*.2}}},
 {n:'점프 턴',e:2,f:(b,ph,bi)=>{const t=bi%4===3;return{rotY:t?ph*Math.PI*2:0,hop:up(ph)*(t?1.1:.25),aL:1.2,aR:1.2}}},
 {n:'엉덩이 흔들기',e:1,f:(b)=>{const w=Math.sin(2*Math.PI*b);return{hipsZ:w*.22,spineZ:-w*.2,rotY:Math.PI+w*.25,aL:.35,aR:.35,headZ:w*.1}}},
];
const K=['aL','aR','aRx','aLx','legL','legR','x','hop','rootZ','rotY','twist','hipsZ','spineX','spineZ','headX','headZ'];
function segMove(seg){if(typeof CHART!=='undefined'&&segMove.chart!==CHART){segMove.chart=CHART;segMove.cache={}}   // 곡이 바뀌면 동작 순서도 새로
  if(segMove.cache[seg]!=null)return segMove.cache[seg];if(typeof CHART==='undefined')return 0;const mm=CHART.bpm>130?2:1,t=beatTime((seg*4+2)*mm);
  const i=Math.max(0,Math.floor(t*20)),w=CHART.env.slice(i,i+80),e=w.length?w.reduce((a,b)=>a+b,0)/w.length:.4;
  const lvl=e<.35?0:e<.5?1:2;const pool=MOVES.map((m,j)=>j).filter(j=>Math.abs(MOVES[j].e-lvl)<=1);
  let h=(seg*2654435761>>>0)%pool.length,pick=pool[h];if(seg>0&&pick===segMove.cache[seg-1])pick=pool[(h+1)%pool.length];
  segMove.cache[seg]=pick;return pick}
segMove.cache={};
function pose(mi,b,ph,bi){const o=MOVES[mi].f(b,ph,bi),r={};K.forEach(k=>r[k]=o[k]||0);return r}
let curName='';
// 4배의 세계 「네 배로 크는 법」 (2026-10-06 사용자: 「3D 캐릭터 · 속도 네가 조절해 봐」)
//  · 콤보가 4 · 16 · 64 · 256 (4배씩!) 이 될 때마다 두 캐릭터가 한 단계씩 쑥 커져요 (발 기준, 튕기는 용수철 + 늘었다 줄었다) — 0.86 → 0.91 → 0.96 → 1.01 → 1.06
//    콤보가 끊기면 처음 크기로 피식 (흔들). 처음엔 예전보다 조금 작게 시작해서 이펙트 자리가 생기고, 잘 치면 예전 크기보다 커져요
//  · 후렴(채보 hs.lv 2)엔 바운스가 조금 더 깊게 — 두 배 빠르기(8분음표)는 크기가 박자마다 커졌다 작아져 버벅여 보여서 뺐어요 (사용자 2026-10-06)
//  · 화면 연출 끄기(비주얼 아트 끄기)면 예전 그대로 (크기 1 · 바운스 그대로) · js/vj_4x.js 가 같은 단계(window.GROW4)로 배지 · 별 연출
const G4={on:false,stage:0,sc:1,v:0,pop:0,wob:0,dw:0},G4C={base:.86,step:.05,th:[4,16,64,256]},PV=new THREE.Vector3();window.GROW4={th:G4C.th,st:G4};
function g4Update(st,dt){const sid=typeof SONGS!=='undefined'&&SONGS[cur]?SONGS[cur].id:'';G4.on=sid==='yonbai'&&typeof G!=='undefined'&&G.land&&window.VJ_MODE!=='off';
  if(!G4.on){G4.stage=0;G4.sc=1;G4.v=0;G4.dw=0;G4.pop=0;G4.wob=0;return}
  if(st==null){G4.stage=0;G4.sc=G4C.base;G4.v=0;G4.pop=0;G4.wob=0;G4.dw=0;return}   /* 플레이 밖: 시작 크기로 (다음 판을 줄어드는 모습으로 시작하지 않게) */
  const c=typeof combo!=='undefined'?combo:0;let n=0;for(const x of G4C.th)if(c>=x)n++;
  if(n>G4.stage)G4.pop=1;else if(n<G4.stage)G4.wob=1;G4.stage=n;
  const tg=G4C.base+G4C.step*n,K=110,D=2*.6*Math.sqrt(K);G4.v+=(K*(tg-G4.sc)-D*G4.v)*dt;G4.sc+=G4.v*dt;G4.pop=Math.max(0,G4.pop-dt*2.2);G4.wob*=Math.exp(-dt*3.2);
  let lv=1;if(st!=null&&typeof CHART!=='undefined'&&CHART.hs&&CHART.hs.lv&&typeof beatAt==='function'){const bar=Math.floor((beatAt(st)-(CHART.db||0))/4);lv=CHART.hs.lv[Math.max(0,Math.min(CHART.hs.lv.length-1,bar))]}
  G4.dw+=((lv>=2?1:0)-G4.dw)*Math.min(1,dt*3)}
// 성장할 때 늘었다 줄었다: [가로, 세로] 배율 (pop 1 → 0)
const g4Squash=()=>{const e=G4.pop;if(e<=0)return [1,1];const w=Math.cos((1-e)*Math.PI*2);return [1-.04*e*w,1+.075*e*w]};
// 캐릭터 화면 자리 (무대 px): 머리 꼭대기 · 발 — js/vj_4x.js 가 배지 · 별 자리로 써요
function g4Pos(){if(!G4.on||!BOY.on||!TG.boy||!TG.boy.visible||!BOY.react||!TG.gentle||!B.head){window.DANCER_POS=null;return}
  const pj=()=>{PV.project(cam);return [(PV.x+1)/2*SW,(1-PV.y)/2*SH]};
  PV.set(0,-.95,0);TG.gentle.localToWorld(PV);const gf=pj();PV.set(0,GTOP+.3,0);B.head.localToWorld(PV);const gh=pj();
  PV.set(0,-.93,0);BOY.react.localToWorld(PV);const bf=pj();const h=BOY.top||BOY.head;let bh=[bf[0],bf[1]-460];if(h){h.getWorldPosition(PV);PV.y+=BOY.top?.12:.85;bh=pj()}
  window.DANCER_POS={g:{x:gf[0],head:gh[1],feet:gf[1]},b:{x:bf[0],head:bh[1],feet:bf[1]},sc:G4.sc}}
let WARM=0;   // 3D 예열: 0 아직 · 1 이번 프레임에 몰래 그림 · 2 끝
function tick(){requestAnimationFrame(tick);const dt=Math.min(clock.getDelta(),.05);if(!root)return;if(document.body.classList.contains('menu')||document.body.classList.contains('art-hide3d')||(window.MOB&&document.body.classList.contains('von'))){if(WARM!==0||!(TG.boy||clock.elapsedTime>12)||document.hidden)return;WARM=1}   /* 메뉴 · 그림 연출 곡에선 3D 를 안 그려요 — 단 모델을 다 받은 뒤 한 번은 몰래 그려서(신사 + 소년) 셰이더 · 텍스처를 미리 준비해 둬요: 첫 판 시작 때 멈칫하지 않게 (2026-10-06 출시 점검) */   /* 메뉴 화면(첫 화면 · 곡 선택 · 곡 대기 화면 · 결과)에선 3D 댄서를 그리지 않아요 (css 로도 숨김) */
  const st=songT(),on=st!=null,mm=CHART.bpm>130?2:1,per=60/CHART.bpm*mm;
  const bp=on?beatAt(st)/mm:clock.elapsedTime/(per*2);   /* 박자 지도(engine.js beatAt)를 따라가요 — 템포가 흔들리는 곡도 박이 안 밀려요 */
  const gw=on?Math.min(1,Math.max(0,(st-CHART.beats[0]+.3)/.6)):0;   /* 춤 세기: 곡 선택 화면·카운트다운에선 0 (소년과 같이 기본 자세), 첫 박 0.3초 전부터 춤 */
  const k=(.95+.15*Math.min(typeof combo!=='undefined'?combo:0,30)/30)*gw;
  const ph=bp-Math.floor(bp),bi=Math.floor(bp);
  g4Update(st,dt);   /* 4배의 세계: 콤보 4배마다 쑥 크기 · 후렴엔 바운스 두 배 빠르기 */
  const bob1=-.5*(1+Math.cos(2*Math.PI*bp)),bob=G4.on?bob1*(1+.25*G4.dw):bob1,   /* 후렴은 같은 빠르기에 조금 더 깊게 (두 배 빠르기는 버벅여 보여서 뺐어요) */sway=Math.sin(Math.PI*bp),breath=(1-gw)*Math.sin(clock.elapsedTime*2.4);   /* 서 있을 때 숨쉬기 (소년과 같은 빠르기) */
  // 동작 고르기 + 전환 부드럽게 섞기
  let P;
  if(!on||gw<=0){P={};K.forEach(key=>P[key]=0)}
  else{const seg=Math.max(0,Math.floor(bp/4)),m=segMove(seg),pm=seg>0?segMove(seg-1):m,tr=Math.min(1,(bp-seg*4)/.75);
    const A=pose(pm,bp,ph,bi),Bp=pose(m,bp,ph,bi);P={};K.forEach(key=>P[key]=A[key]+(Bp[key]-A[key])*(tr*tr*(3-2*tr)));
    if(MOVES[m].n!==curName)curName=MOVES[m].n;}
  const r=B.root;
  r.position.x=P.x*k;
  r.position.y=r.userData.p0.y+breath*.006+(bob*.06*k)+(P.hop*.16+react.hy*.18)*k*1.3;
  r.scale.set(1-bob*.06*k,1+bob*.085*k,1-bob*.06*k);
  r.rotation.set(0,(sway*.3+P.twist)*k+P.rotY+react.spin*Math.PI*2,P.rootZ*k+react.wob*Math.sin(clock.elapsedTime*40)*.08+G4.wob*Math.sin(clock.elapsedTime*22)*.12);
  B.hips.rotation.set(0,0,(sway*.1+P.hipsZ)*k);
  B.spine.rotation.set((-bob*.09+P.spineX)*k,0,(-sway*.12+P.spineZ)*k);
  B.head.rotation.set((bob*.16+P.headX)*k,sway*.14*k,(sway*.16+P.headZ)*k+react.wob*Math.sin(clock.elapsedTime*30)*.25);
  B.armL.rotation.set(P.aLx*k,0,P.aL*k+react.cheer*1.1);B.armR.rotation.set(P.aRx*k,0,-(P.aR*k+react.cheer*1.1));
  B.legR.rotation.set(P.legR*k,0,-P.legR*.4*k);B.legL.rotation.set(P.legL*k,0,P.legL*.4*k);
  // 소년: 4倍の世界 일 때만, 신사 춤을 좌우 거울로 (팔은 T 포즈에서 내려 둔 자리 기준)
  {const sid=typeof SONGS!=='undefined'&&SONGS[cur]?SONGS[cur].id:'',bon=!!TG.boy&&(sid===BOY_SONG||WARM===1)&&typeof G!=='undefined'&&G.land;if(bon!==BOY.on){BOY.on=bon;shadowSpan()}
   if(TG.boy&&BOY.mixer){TG.boy.visible=bon;if(bon){boyDance(on?st:null);
      const hp=react.hy,br=(BOY.idle||0)*Math.sin(clock.elapsedTime*2.4);const q=G4.on?G4.sc:1,[qx,qy]=G4.on?g4Squash():[1,1],sX=(1+react.cheer*.06)*q*qx,sY=(1+react.cheer*.06)*q*qy;   /* 4배의 세계: 성장 크기 · 성장할 때만 살짝 늘었다 줄었다 (박자마다 크기를 바꾸던 후렴 8분 바운스는 뺐어요 — 사용자 2026-10-06: 「딱딱 커졌다 작아져 버벅여」) */
      BOY.react.scale.set(sX,sY,sX);BOY.react.position.y=hp*.2+br*.006+.93*(sY-1);BOY.react.rotation.set(0,react.spin*Math.PI*2,react.wob*Math.sin(clock.elapsedTime*40)*.07+G4.wob*Math.sin(clock.elapsedTime*22+1)*.12)}}
   else if(TG.boy){TG.boy.visible=bon;if(bon){const Q=BOY.B,q=Q.root,hp=react.hy,wob=react.wob*Math.sin(clock.elapsedTime*40+1);
    q.position.x=-P.x*k;q.position.y=q.userData.p0.y+(bob*.06*k)+(P.hop*.16+hp*.22)*k*1.3;q.scale.set(1-bob*.07*k,1+bob*.1*k,1-bob*.07*k);
    q.rotation.set(0,-(sway*.3+P.twist)*k-P.rotY-react.spin*Math.PI*2,-P.rootZ*k-wob*.08);
    Q.hips.rotation.set(0,0,-(sway*.1+P.hipsZ)*k);Q.spine.rotation.set((-bob*.09+P.spineX)*k,0,-(-sway*.12+P.spineZ)*k);
    Q.head.rotation.set((bob*.12+P.headX*.7)*k,-sway*.12*k,-(sway*.14+P.headZ)*k-react.wob*Math.sin(clock.elapsedTime*30)*.22);
    Q.armL.rotation.set(P.aRx*k,0,Math.min(1.05,-1.3+(P.aR*k+react.cheer*1.2)*1.45));Q.armR.rotation.set(P.aLx*k,0,Math.max(-1.05,1.3-(P.aL*k+react.cheer*1.2)*1.45));
    Q.legR.rotation.set(P.legL*k,0,-P.legL*.4*k);Q.legL.rotation.set(P.legR*k,0,P.legR*.4*k)}}}
  for(const id in TG){const t=(window.TUNE&&TUNE.dancer[id])||{},g=TG[id],s=t.s??1,gr=id==='gentle'&&G4.on,q=gr?G4.sc:1,[qx,qy]=gr?g4Squash():[1,1],sx=s*q*qx,sy=s*q*qy;g.scale.set(sx,sy,sx);g.rotation.set((t.rx||0)*DEG,(t.ry||0)*DEG,0);g.position.set(t.x||0,.95*(sy-1)+(t.y||0),0)}   // 모델 조절 패널 (+ 4배의 세계 성장: 신사는 그룹째 발 기준으로)
  g4Pos();
  react.hv-=49*dt;react.hy+=react.hv*dt;if(react.hy<=0){react.hy=0;if(react.hv<0)react.hv=0}   /* 깡충: 위로 튀었다 중력으로 내려와요 (예전엔 노트마다 공중에서 바닥으로 확 끌어내려 딱딱 끊겨 보였어요) */react.wob*=.9;react.cheer*=.965;react.spin=react.spin>0?Math.max(0,react.spin-dt*1.6):0;
  // 대상별 조명 (2026-10-02 사용자: 신사 · 소년 3D 설정 따로): 둘이 같이 있으면 각자 자기 조명 · 그림자로 두 번 나눠 그리고, 화면 효과는 왼쪽(소년) · 오른쪽(신사) 값을 따로
  const LG=lookOf('gentle'),LB=boyLook(),two=!!(BOY.on&&TG.boy&&TG.boy.visible&&TG.gentle),pulse=on?Math.pow(1-ph,2):.35,tt=clock.elapsedTime;
  const spots=L=>{if(L.stage>0)SPOTS.forEach((s,i)=>{s.intensity=L.stage*(.55+1.1*pulse);s.color.set(i?L.sc2:L.sc1);s.target.position.set(Math.sin(tt*.9+i*Math.PI)*1.2,-.5,Math.cos(tt*.6+i)*.4)});else SPOTS.forEach(s=>s.intensity=0)};
  const setup=(L,who)=>{rig(L);spots(L);renderer.toneMappingExposure=L.exp;if(dl.castShadow)fitShadow(who);renderer.shadowMap.needsUpdate=true;
    ground.position.y=GY0+(who==='boy'?BOY_GY:0)};   /* 소년 그림자 높이 (BOY_GY) — 신사 차례는 그대로 */
  lyricBubbles(st);
  const drawColor=()=>{if(!two){setup(LG,null);renderer.render(scene,cam);return}
    const ctx=renderer.getContext(),inv=ctx.invalidateFramebuffer,ac=renderer.autoClear;if(inv)ctx.invalidateFramebuffer=()=>{};   /* 두 번째 그림이 첫 번째를 지우지 않게 */
    try{TG.boy.visible=false;setup(LG,'gentle');renderer.render(scene,cam);
      TG.boy.visible=true;TG.gentle.visible=false;setup(LB,'boy');renderer.autoClear=false;renderer.render(scene,cam)}
    finally{renderer.autoClear=ac;TG.gentle.visible=true;TG.boy.visible=true;if(inv)ctx.invalidateFramebuffer=inv}};
  if(FX&&LG.fx){const A=Object.assign({},LG,{sunUV:sunUVOf(LG),sunColor:sunColOf(LG),time:tt,hide:[ground],drawColor});
    if(two){A.B=Object.assign({},LB,{sunUV:sunUVOf(LB),sunColor:sunColOf(LB)});A.mid=midUV()}
    FX.render(A)}
  else drawColor();
  if(WARM===1)WARM=2}   // 예열 끝
// ---- 가사 말풍선: 정해진 가사 구간에 춤추는 캐릭터 머리 위로 말풍선이 톡 튀어나와요 ----
// 시간은 곡 시간(초). 4倍の世界 「4배가 좋아, 4배가 최고」 — 영상 자막이 나오는 27.85~30.08초 (박자로 47~51박)
const LYRIC_BUBBLES={yonbai:[{who:'boy',t0:27.85,t1:30.45,html:'<b>4배</b>가 좋아~♪'},{who:'gentle',t0:29.13,t1:30.45,html:'<b>4배</b>가 최고~!'}]};
let GTOP=1;const BUB={layer:null,els:{}};const BV=new THREE.Vector3();
function bubbleEl(who){if(!BUB.layer){BUB.layer=document.createElement('div');BUB.layer.className='lybub-layer';document.getElementById('stage').appendChild(BUB.layer)}
  let e=BUB.els[who];if(!e){e=document.createElement('div');e.className='lybub '+who;BUB.layer.appendChild(e);BUB.els[who]=e}return e}
function headTop(who){if(who==='boy'){const h=BOY.top||BOY.head;if(!BOY.on||!h)return null;h.getWorldPosition(BV);BV.y+=BOY.top?.12:.85}
  else{if(!root||!root.visible||!B.head)return null;BV.set(0,GTOP+.22+.08,0);B.head.localToWorld(BV)}
  BV.project(cam);if(BV.z>1)return null;return [(BV.x+1)/2*box.clientWidth,(1-BV.y)/2*box.clientHeight]}
const eBack=x=>{const c=1.70158;return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2)};
function lyricBubbles(st){const sid=typeof SONGS!=='undefined'&&SONGS[cur]?SONGS[cur].id:'',L=LYRIC_BUBBLES[sid]||[],near=st!=null&&L.some(b=>st>=b.t0-.05&&st<=b.t1+.25),on=near&&typeof G!=='undefined'&&G.land&&getComputedStyle(box).visibility!=='hidden';   /* 보이는지는 말풍선 구간에서만 확인해요 (매 프레임 스타일 읽기는 무거워요) */
  const seen={};for(const b of L){const live=on&&st>=b.t0-.05&&st<=b.t1+.25;if(!live)continue;const p=headTop(b.who);if(!p)continue;seen[b.who]=1;const e=bubbleEl(b.who);
    if(e.dataset.k!==b.html){e.dataset.k=b.html;e.innerHTML=b.html}
    const k=st-b.t0,out=st-b.t1,ph=beatAt(st)%1,hit=Math.exp(-Math.max(0,ph)*6);
    let sc=k<.28?Math.max(0,eBack(Math.max(0,k)/.28)):1;if(out>0)sc*=Math.max(0,1-out/.22);sc*=1+.07*hit;
    const rot=(b.who==='boy'?-1:1)*(4+Math.sin(st*7)*2);e.style.display='block';e.style.left=p[0]+'px';e.style.top=p[1]+'px';
    e.style.transform=`translate(-50%,-100%) translateY(${(-6*hit).toFixed(1)}px) rotate(${rot.toFixed(1)}deg) scale(${sc.toFixed(3)})`}
  for(const w in BUB.els)if(!seen[w])BUB.els[w].style.display='none'}
tick();
window.monsterReact=k=>{if((k==='p'||k==='gr')&&react.hy<.12&&react.hv<=.5)react.hv=k==='p'?7.3:5.2;   /* 바닥 근처일 때만 새로 깡충 (공중에서 또 맞히면 지금 뛰는 걸 그대로) */
  else if(k==='miss')react.wob=1;else if(k==='cheer'){react.cheer=1;react.spin=1}};
})();


}else document.getElementById('monBox').style.display='none';
