// ===== 픽몬 픽셀 연출 (레인 좌우, 화면 아래쪽) =====
// 픽몬 곡 전용이에요. 배경 영상(메이플 게임 화면)이 메인이고, 가끔 좌우 아래에 메이플 도트 캐릭터들이 나와서 박자에 맞춰 통통 뛰어요.
// 캐릭터 그림은 화면에 그대로 그리고, 글자·말풍선·이름표·HP 바·반짝이·발판은 저해상도(화면 높이 360 기준) 캔버스에 그려 키워서 도트 느낌을 내요.
// 장면(2마디씩): 크루 댄스 / 펫 산책 / 몬스터 등장(HP 바·데미지·메소) / 라이더 질주 / 알 깨기 / 보스(WARNING → 루테니아)
// 판정: 퍼펙트·그레이트·굿 → 떠 있는 몬스터에 데미지 숫자(퍼펙트는 크리티컬), 캐릭터가 더 높이 뛰어요
//       미스 → 캐릭터가 깜빡이며 움찔, 콤보가 끊기면 유령이 「앗...!」 / 25콤보 「나이스~!」 / 50콤보·피버 시작 → LEVEL UP!
// 16마디 한 바퀴: 4·8·12마디째에 한쪽, 15마디째에 양쪽(크루 + 보스). 피버 중엔 4마디마다 양쪽.
// 그림: window.ART_PIXEL[곡] = {이름: 주소} (pix/*). 프레임은 가로로 이어 붙인 띠예요 (META).
// 켜고 끄기: 설정 「비주얼 아트」가 끄기가 아니면 켜져요 (window.VJ_MODE, js/vj.js).
(()=>{
const $=id=>document.getElementById(id),stage=$('stage'),ART=window.ART_PIXEL||{};
const META={av_boy:{w:45,h:69,n:1,d:[100]},av_goggle:{w:42,h:65,n:1,d:[100]},av_pink:{w:57,h:72,n:1,d:[100]},av_purple:{w:48,h:72,n:1,d:[100]},av_wink:{w:48,h:69,n:1,d:[100]},av_black:{w:51,h:68,n:1,d:[100]},
  shrub:{w:212,h:176,n:5,d:[240,120,120,120,120]},ghost:{w:70,h:58,n:1,d:[100]},fox:{w:63,h:42,n:4,d:[150,150,150,150]},boss:{w:320,h:179,n:10,d:[150,150,150,150,150,150,150,150,150,150]},
  egg:{w:23,h:25,n:1,d:[100]},chick:{w:69,h:66,n:4,d:[180,180,180,180]},moss:{w:269,h:255,n:1,d:[100]},luti:{w:65,h:40,n:9,d:[150,150,150,150,150,150,150,150,150]},rider:{w:63,h:93,n:1,d:[100]}};
for(const k in META){const m=META[k];m.T=m.d.reduce((a,b)=>a+b,0)}
// ---- 캔버스: 화면용 + 도트 버퍼 두 장(뒤: 발판·그림자 / 앞: 글자·말풍선·반짝이) ----
const cv=document.createElement('canvas');cv.className='artpanels pix';$('bg').after(cv);const ctx=cv.getContext('2d');
const PR=1;let W=0,H=0,S=3,LW=1,LH=1;   // 도트 그림이라 기기 배율은 1 — CSS image-rendering:pixelated 로 또렷하게 키워요
const bkC=document.createElement('canvas'),bk=bkC.getContext('2d'),fkC=document.createElement('canvas'),fk=fkC.getContext('2d');
let szDirty=true;
function size(){if(!szDirty)return;szDirty=false;const w=stage.clientWidth,h=stage.clientHeight;if(w===W&&h===H)return;W=w;H=h;cv.width=Math.round(W*PR);cv.height=Math.round(H*PR);
  S=Math.max(2,Math.round(H/360));LW=Math.ceil(W/S);LH=Math.ceil(H/S);bkC.width=fkC.width=LW;bkC.height=fkC.height=LH}
addEventListener('resize',()=>szDirty=true);if(window.ResizeObserver)new ResizeObserver(()=>szDirty=true).observe(stage);   // 크기는 바뀔 때만 다시 재요 (매 프레임 레이아웃 계산 안 하게)
// ---- 그림 (곡을 고르면 받아서 미리 풀어 둬요) ----
const LOADED={};
function imgs(id){const a=ART[id];if(!a)return null;if(LOADED[id])return LOADED[id];const o={};
  for(const k in a){if(!a[k])continue;const im=new Image();im.crossOrigin='anonymous';im.onload=()=>{if(window.createImageBitmap)createImageBitmap(im).then(bm=>{o[k]=bm}).catch(()=>{})};im.src=a[k];o[k]=im}
  return LOADED[id]=o}
const ok=im=>!!im&&(im.complete===undefined?im.width>0:im.complete&&im.naturalWidth>0);
// ---- 도우미 ----
const fr=x=>x-Math.floor(x),clamp=(x,a,b)=>x<a?a:x>b?b:x,lerp=(a,b,t)=>a+(b-a)*t,eOut=x=>1-(1-x)*(1-x),eIn=x=>x*x;
const hsh=x=>{const s=Math.sin(x*127.1+311.7)*43758.5453;return s-Math.floor(s)};
const G2=v=>Math.round(v/S);   // 화면 px → 도트 칸
function frameOf(m,ms){if(m.n<2)return 0;let t=ms%m.T;for(let i=0;i<m.n;i++){if(t<m.d[i])return i;t-=m.d[i]}return 0}
// 스프라이트(화면에 바로): 발 가운데 (x,y) 기준, k = 화면 px / 도트 1칸. 원본은 왼쪽을 봐요 → flip 이면 오른쪽
function spr(I,name,x,y,k,o){const im=I[name],m=META[name];if(!ok(im)||!m)return null;o=o||{};const fi=frameOf(m,o.ms||0),w=Math.round(m.w*k*(o.sx||1)),h=Math.round(m.h*k*(o.sy||1));
  ctx.save();ctx.globalAlpha*=o.a==null?1:o.a;ctx.translate(Math.round(x),Math.round(y));if(o.flip)ctx.scale(-1,1);ctx.drawImage(im,fi*m.w,0,m.w,m.h,-Math.round(w/2),-h,w,h);
  if(o.white){ctx.globalCompositeOperation='lighter';ctx.globalAlpha*=o.white;ctx.drawImage(im,fi*m.w,0,m.w,m.h,-Math.round(w/2),-h,w,h)}ctx.restore();return {x,y,top:y-h,w,h}}
// 도트 그림(문자열 줄): 글자 → 색
function bmp(c,rows,x,y,pal){for(let j=0;j<rows.length;j++)for(let i=0;i<rows[j].length;i++){const ch=rows[j][i];if(ch==='.')continue;c.fillStyle=pal[ch];c.fillRect(x+i,y+j,1,1)}}
const HEART=['.rr.rr.','rrwrrrr','rrrrrrr','.rrrrr.','..rrr..','...r...'],HEART_P={r:'#ff5c93',w:'#ffd0e0'};
const SPARK=['..w..','..w..','wwyww','..w..','..w..'],SPARK_P={w:'#ffffff',y:'#fff36b'};
const COIN=['.kkk.','kyyyk','kywyk','kyyyk','.kkk.'],COIN_P={k:'#a0620a',y:'#ffcc33',w:'#fff6c0'};
const SWEAT=['.b.','bbb','bwb','.b.'],SWEAT_P={b:'#7fd3ff',w:'#ffffff'};
const TAIL=['kwwwk','.kwk.','..k..'],TAIL_P={k:'#2b2b44',w:'#ffffff'};
const BM={};function bmc(rows,pal){const c=document.createElement('canvas');c.width=rows[0].length;c.height=rows.length;bmp(c.getContext('2d'),rows,0,0,pal);return c}
BM.heart=bmc(HEART,HEART_P);BM.spark=bmc(SPARK,SPARK_P);BM.coin=bmc(COIN,COIN_P);BM.sweat=bmc(SWEAT,SWEAT_P);BM.tail=bmc(TAIL,TAIL_P);
// ---- 도트 글자 (갈무리 글꼴, 도트 1칸 = 1px, 외곽선 1칸, 반투명 없이) ----
const FONT='"Galmuri11","Galmuri9","DungGeunMo","Jua",monospace';
const PAL={dmg:['#fff36b','#ff8a1f','#5a1a00'],crit:['#ffe3f0','#ff3a6e','#4a0024'],sys:['#fff6a8','#ffd23f','#3b2a00'],white:['#ffffff','#e8ecff','#2b1a40'],
  level:['#fffbd0','#ffb800','#5a3000'],ink:['#2b2b44','#2b2b44',null],tag:['#ffffff','#ffffff',null],name:['#ffd9e8','#ff8fb8','#2a0a18'],warn:['#fff36b','#ff4040','#2a0000']};
const TXC={},T0=performance.now();let fontOK=false;try{document.fonts&&document.fonts.load('12px Galmuri11')}catch(e){}
function fontReady(){if(!fontOK){try{fontOK=!!(document.fonts&&document.fonts.check('12px Galmuri11'))}catch(e){}}return fontOK}
function ptext(s,kind){const key=kind+'|'+s;if(TXC[key])return TXC[key];const p=PAL[kind]||PAL.white,c=document.createElement('canvas'),x=c.getContext('2d',{willReadFrequently:true});x.font='12px '+FONT;
  // 넉넉한 캔버스에 기준선(alphabetic)을 정수 줄에 맞춰 그린 뒤, 실제 글자가 있는 칸만 잘라요 (글꼴 위아래 여백 때문에 잘리지 않게)
  const W0=Math.ceil(x.measureText(s).width)+6,H0=28;c.width=W0;c.height=H0;x.font='12px '+FONT;x.textBaseline='alphabetic';const bx=3,by=19;
  if(p[2]){x.fillStyle=p[2];for(const [dx,dy] of [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]])x.fillText(s,bx+dx,by+dy)}
  const g=x.createLinearGradient(0,by-10,0,by);g.addColorStop(0,p[0]);g.addColorStop(1,p[1]);x.fillStyle=g;x.fillText(s,bx,by);
  const d=x.getImageData(0,0,W0,H0),a=d.data;let x0=W0,x1=-1,y0=H0,y1=-1;
  for(let j=0;j<H0;j++)for(let i=0;i<W0;i++){const k=(j*W0+i)*4+3;a[k]=a[k]<110?0:255;if(a[k]){if(i<x0)x0=i;if(i>x1)x1=i;if(j<y0)y0=j;if(j>y1)y1=j}}
  x.putImageData(d,0,0);let out=c;
  if(x1>=0){out=document.createElement('canvas');out.width=x1-x0+1;out.height=y1-y0+1;out.getContext('2d').drawImage(c,-x0,-y0)}
  if(fontReady()||performance.now()-T0>8000)TXC[key]=out;return out}   // 글꼴이 늦으면 8초 뒤엔 그냥 저장 (매 프레임 다시 만들지 않게)
// 숫자 글자 이어 붙이기 (메이플 데미지처럼 살짝 겹쳐요)
function numText(s,kind,cx,y,sc,a){let w=0,h=0;const g=[];for(const ch of s){const t=ptext(ch,kind);g.push(t);w+=t.width-1;h=Math.max(h,t.height)}w+=1;w*=sc;h*=sc;
  cx=clamp(cx,w/2+3,LW-w/2-3);let x=Math.round(cx-w/2);if(a!=null)fk.globalAlpha=a;for(const t of g){fk.drawImage(t,x,Math.round(y+(h-t.height*sc)),t.width*sc,t.height*sc);x+=(t.width-1)*sc}fk.globalAlpha=1;return {w,h}}
// 앞 버퍼에 글자 (가운데 정렬, 위쪽 y, 배율 sc)
function text(s,kind,cx,y,sc,a){if((kind==='dmg'||kind==='crit')&&/^[0-9]+$/.test(s))return numText(s,kind,cx,y,sc||1,a);const t=ptext(s,kind),w=t.width*(sc||1),h=t.height*(sc||1);cx=clamp(cx,w/2+3,LW-w/2-3);fk.save();if(a!=null)fk.globalAlpha=a;fk.drawImage(t,Math.round(cx-w/2),Math.round(y),w,h);fk.restore();return {w,h}}
// 말풍선: 꼬리 끝이 (cx, by). 글자 둘레로 흰 칸 2줄 + 테두리 1줄
function bubble(s,cx,by,a){const t=ptext(s,'ink'),w=t.width+6,h=t.height+6,x0=Math.round(cx-w/2),y0=Math.round(by-h-2);fk.save();if(a!=null)fk.globalAlpha=a;
  fk.fillStyle='#2b2b44';fk.fillRect(x0+1,y0,w-2,h);fk.fillRect(x0,y0+1,w,h-2);fk.fillStyle='#ffffff';fk.fillRect(x0+2,y0+1,w-4,h-2);fk.fillRect(x0+1,y0+2,w-2,h-4);
  fk.drawImage(t,x0+3,y0+3);const tx=Math.round(cx)-2;fk.clearRect(tx,y0+h-1,5,1);fk.drawImage(BM.tail,tx,y0+h-1);fk.restore()}
// 몬스터 HP 바 (이름은 띄우지 않아요)
function hpbar(cx,y,wid,frac){const x0=Math.round(cx-wid/2);fk.fillStyle='#1a0a10';fk.fillRect(x0-1,y-1,wid+2,6);fk.fillStyle='#4a2030';fk.fillRect(x0,y,wid,4);
  const fw=Math.max(0,Math.round(wid*frac));fk.fillStyle='#ff3d6a';fk.fillRect(x0,y,fw,4);fk.fillStyle='#ffa0b8';fk.fillRect(x0,y,fw,1)}
// 발판 (메이플 풀 블록): 도트 좌표 x0~x1, 윗면 y, 0~1 펼쳐짐
const PLC=new Map();
function platform(X0,X1,Y,k){if(k<=0)return;const cx=(X0+X1)/2,hw=Math.round((X1-X0)/2*k),w=hw*2;if(w<2)return;let c=PLC.get(w);
  if(!c){if(PLC.size>40)PLC.clear();c=document.createElement('canvas');c.width=w+2;c.height=11;platformDraw(c.getContext('2d'),0,w,0);PLC.set(w,c)}bk.drawImage(c,Math.round(cx-hw),Y)}
function platformDraw(bk,x0,x1,y){const w=x1-x0;
  bk.fillStyle='rgba(20,10,30,.28)';bk.fillRect(x0+2,y+8,w,2);
  bk.fillStyle='#9a5b2e';bk.fillRect(x0,y+2,w,6);bk.fillStyle='#7a4320';for(let i=x0+1;i<x1-1;i+=4){bk.fillRect(i,y+4+((i>>2)&1),1,1);bk.fillRect(i+2,y+6,1,1)}
  bk.fillStyle='#5a3018';bk.fillRect(x0,y+8,w,1);bk.fillStyle='#45b13c';bk.fillRect(x0,y,w,3);bk.fillStyle='#7be05a';bk.fillRect(x0+1,y,w-2,1);
  bk.fillStyle='#2f8a2c';for(let i=x0+2;i<x1-1;i+=5)bk.fillRect(i,y+3,1,1+((i>>1)&1))}
function shadow(cx,y,w){const x=Math.round(cx),hw=Math.max(2,Math.round(w/2));bk.fillStyle='rgba(20,10,30,.3)';bk.fillRect(x-hw+1,y-1,hw*2-2,1);bk.fillRect(x-hw,y,hw*2,1);bk.fillRect(x-hw+1,y+1,hw*2-2,1)}
// ---- 반짝이·하트·메소·땀방울 (도트 좌표) ----
const PT=[];
function puff(kind,x,y,o){if(PT.length>220)return;PT.push(Object.assign({kind,x,y,vx:0,vy:0,g:0,life:1,dec:.02,gy:1e9,c:'#fff'},o))}
function burst(x,y,n,big){for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,v=(big?1.6:1)*(.8+Math.random()*1.8);
  puff(Math.random()<.4?'spark':'sq',x,y,{vx:Math.cos(a)*v,vy:Math.sin(a)*v-1,g:.06,dec:.025+Math.random()*.02,c:['#ffffff','#fff36b','#ff9bd0','#9ff3ff','#b6ff8a'][i%5]})}}
function drawPT(move){for(let i=PT.length-1;i>=0;i--){const p=PT[i];if(move){p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.vx*=.98;p.life-=p.dec;if(p.y>p.gy){p.y=p.gy;p.vy*=-.45;p.vx*=.7;if(Math.abs(p.vy)<.3)p.vy=0}}
  if(p.life<=0){PT.splice(i,1);continue}const x=Math.round(p.x),y=Math.round(p.y);fk.globalAlpha=Math.min(1,p.life*2);
  if(p.kind==='heart')fk.drawImage(BM.heart,x-3,y-3);else if(p.kind==='spark')fk.drawImage(BM.spark,x-2,y-2);else if(p.kind==='coin')fk.drawImage(BM.coin,x-2,y-4);
  else if(p.kind==='sweat')fk.drawImage(BM.sweat,x-1,y-2);
  else if(p.kind==='dust'){fk.fillStyle='rgba(235,225,210,.9)';const r=Math.round(1+(1-p.life)*3);fk.fillRect(x-r,y-r,r*2,r*2)}
  else{fk.fillStyle=p.c;fk.fillRect(x,y,p.big?2:1,p.big?2:1)}}fk.globalAlpha=1}
// ---- 데미지 숫자 (메이플처럼 위로 쌓이며 떠올라요) ----
const DN=[];
function damage(key,x,y,kind,val){const stack=DN.filter(d=>d.key===key&&d.age<.45).length;DN.push({key,x,y:y-stack*13,kind,s:String(val),age:0})}
function drawDN(dt){for(let i=DN.length-1;i>=0;i--){const d=DN[i];d.age+=dt;if(d.age>.9){DN.splice(i,1);continue}
  const sc=d.age<.06?2:1,yy=d.y-d.age*16,a=d.age>.65?(.9-d.age)/.25:1;text(d.s,d.kind,d.x,yy-12*sc,sc,a)}}
// ---- LEVEL UP (글자 + 반짝이) ----
const LV=[];
function drawLV(dt){for(let i=LV.length-1;i>=0;i--){const L=LV[i];L.age+=dt;if(L.age>1.7){LV.splice(i,1);continue}const k=L.age,a=k>1.3?(1.7-k)/.4:1,x=Math.round(L.x),top=Math.round(L.top!=null?L.top:L.y-80);
  if(Math.random()<.35)puff(Math.random()<.5?'spark':'sq',x+(Math.random()-.5)*30,top+20+Math.random()*40,{vy:-.4-Math.random()*.6,dec:.03,c:'#fff36b'});   // 빛기둥은 없이 반짝이만
  text('LEVEL UP!','level',x,top-18-Math.round(eOut(Math.min(1,k/.3))*6),k<.08?2:1,a)}}
// ---- 자리: 레인에서 80px 이상, 화면 아래쪽 ----
function region(side){const gy=side==='L'?H*.9:H*.925,gap=80;
  if(side==='L'){const x1=Math.min(W*.31,xOf(0,sAtY(gy))-gap);return {side,x0:18,x1,gy,out:-1}}
  const x0=Math.max(W*.69,xOf(4,sAtY(gy))+gap);return {side,x0,x1:W-18,gy,out:1}}
// 들어왔다 나가기 (화면 px): 처음 tin 초 동안 바깥에서 자리로, 끝 tout 초 동안 바깥으로. dir: +1 오른쪽으로 감
function travel(rg,xt,el,dur,tin,tout,mg){const xo=rg.out<0?-mg:W+mg;
  if(el<tin)return {x:lerp(xo,xt,eOut(clamp(el/tin,0,1))),mv:true,dir:-rg.out};
  if(el>dur-tout)return {x:lerp(xt,xo,eIn(clamp((el-(dur-tout))/tout,0,1))),mv:true,dir:rg.out};
  return {x:xt,mv:false,dir:-rg.out}}
// 큰 몬스터 배율: 원본 그림이 커서 아바타(도트 1칸 = S)보다 한 단계 작게, 그래도 정수 배율로 (1080p 에서 2배 — 도트가 고르게)
const MK=()=>Math.max(1,Math.round(S*2/3));
// 큰 그림 가운데 x: 레인 쪽으로는 틈(80px)을 50px 까지만 넘고, 화면 바깥쪽으로는 폭의 10% 까지 걸쳐도 돼요
function fitX(rg,w){let x=(rg.x0+rg.x1)/2;if(rg.out<0){x=Math.min(x,rg.x1+50-w/2);x=Math.max(x,w/2-w*.1)}else{x=Math.max(x,rg.x0-50+w/2);x=Math.min(x,W-w/2+w*.1)}return x}
// 화면 밑에서 통 튀어 올라와 발판에 착지 (잘린 선이 안 보이게 화면 밖에서 출발) · 나갈 때는 살짝 뛰었다가 화면 밑으로
function pop(rg,h,el,dur,tin,tout,canOut){const gy=rg.gy,yB=H+h+8,ap=gy-Math.min(h*.22,H*.08);
  if(el<tin){const p=el/tin;if(p<.62)return {y:lerp(yB,ap,eOut(p/.62)),sx:.94,sy:1.08,on:false};return {y:lerp(ap,gy,eIn((p-.62)/.38)),sx:.96,sy:1.05,on:false}}
  if(canOut&&el>dur-tout){const p=(el-(dur-tout))/tout,hp=Math.min(h*.1,H*.04);if(p<.3)return {y:gy-Math.sin(p/.3*Math.PI*.5)*hp,sx:1,sy:1,on:false,out:true};return {y:lerp(gy-hp,yB,eIn((p-.3)/.7)),sx:.95,sy:1.06,on:false,out:true}}
  const t=el-tin,q=Math.exp(-t*9)*Math.cos(t*24);return {y:gy,sx:1+.12*q,sy:1-.14*q,on:true}}
function dust(x,y,w){for(let i=0;i<8;i++){const d=i%2?1:-1;puff('dust',x+d*(w*.25+Math.random()*w*.2),y-1,{vx:d*(.5+Math.random()*.9),vy:-.25-Math.random()*.3,dec:.035})}}
// ---- 등장인물 ----
const AV=['av_goggle','av_pink','av_black','av_wink','av_boy','av_purple'];
const SAY=['픽몬 GO!','신난다~!','♪♪♪','가즈아~!','같이 춰요!','두근두근!','최고야~!','룰루랄라♪'];
// ---- 일정 ----
const LT=['crew','monster','egg','rider'],RT=['pets','monster','crew','egg'];
function events(b,fv){const bar=Math.floor(b/4),out=[];const add=(bs,side,type)=>out.push({side,type,start:bs*4,len:8,seed:((bs*2654435761)>>>0)%997});
  if(fv){const s=Math.floor(bar/4)*4;if(bar-s<2){const k=Math.floor(bar/4);add(s,'L','crew');add(s,'R',k%2?'boss':'pets')}return out}
  for(const s of [bar,bar-1]){if(s<0)continue;const m=s%16,c=Math.floor(s/16);
    if(m===3)add(s,'L',LT[c%4]);else if(m===7)add(s,'R',RT[c%4]);else if(m===11){const L=c%2;add(s,L?'L':'R',(L?LT:RT)[(c+2)%4])}
    else if(m===14){add(s,'L','crew');add(s,'R','boss')}}
  return out}
// ---- 상태 (몬스터 HP 등, 장면마다) ----
const ST={};const st=ev=>ST[ev.side+ev.start+ev.type]||(ST[ev.side+ev.start+ev.type]={hp:1,hit:0,dead:-1,said:0});
// ---- 판정 연동 ----
let react=0,jfM=0,prevCombo=0,lastRx=-99,liveOn=false,lastB=0,TGT=[],ACT=[],busy={L:0,R:0};const RX=[];
function free(side,b,len){if(busy[side])return false;const fv=typeof fever!=='undefined'&&fever;for(const x of [b,b+len*.5,b+len])if(events(x,fv).some(e=>e.side===side))return false;return !RX.some(e=>e.side===side&&b<e.start+e.len)}
function spawn(type,len){if(!liveOn||window.VJ_PIX_FORCE)return false;for(const side of Math.random()<.5?['L','R']:['R','L'])if(free(side,lastB,len)){RX.push({side,type,start:lastB,len,seed:Math.floor(Math.random()*997),rx:1});return true}return false}
function hitAll(kind){const c=typeof combo!=='undefined'?combo:1;for(const t of TGT){const s=t.st;if(s.dead>=0)continue;const dmg=kind==='p'?t.dp:kind==='gr'?t.dp*.6:t.dp*.3;s.hp=Math.max(0,s.hp-dmg);s.hit=1;
  const v=kind==='p'?10000+((c*7919+t.seed*31)%89999):kind==='gr'?1000+((c*613+t.seed)%8999):100+((c*37)%899);damage(t.key,t.hx+(Math.random()-.5)*10,t.hy,kind==='p'?'crit':'dmg',v)}}
const orig=window.monsterReact;window.monsterReact=k=>{orig&&orig(k);if(!liveOn)return;const c=typeof combo!=='undefined'?combo:0;
  if(k==='p'||k==='gr'||k==='g'){react=k==='p'?1:k==='gr'?.6:.3;hitAll(k);if(k==='p')for(const a of ACT)if(Math.random()<.5)puff('spark',a.x,a.top-2,{vy:-.6,dec:.04})}
  else if(k==='miss'){jfM=1;for(const a of ACT)puff('sweat',a.x+6,a.top,{vy:-.3,g:.05,dec:.03});if(lastB-lastRx>6&&(prevCombo>=8||Math.random()<.3)&&spawn('ghost',4))lastRx=lastB}
  else if(k==='cheer'){react=1;const sides={};for(const a of ACT){const sd=a.x<LW/2?'L':'R';(sides[sd]=sides[sd]||[]).push(a)}let n=0;
    for(const sd in sides){const g=sides[sd],x=g.reduce((t,a)=>t+a.x,0)/g.length,top=Math.min(...g.map(a=>a.top));LV.push({x,y:g[0].foot,top,age:0});for(const a of g)burst(a.x,a.top,8,true);n++}
    if(!n&&spawn('levelup',5))lastRx=lastB}
  if(k!=='miss'&&k!=='cheer'&&c>0&&c%25===0&&lastB-lastRx>4&&spawn('nice',4))lastRx=lastB;
  prevCombo=k==='miss'?0:c};
// ---- 장면 그리기: 화면 스프라이트는 바로, 발판·글자는 버퍼에 ----
// 각 장면은 등장인물 목록(ACT: 반짝이·LEVEL UP 자리)과 데미지 대상(TGT)을 채워요
function avatar(I,name,x,gy,o){const k=S,blink=jfM>.05&&((performance.now()/60)|0)%2,r=spr(I,name,x+(jfM>.05?Math.sin(performance.now()/25)*jfM*2*S:0),gy-(o.hop||0)*S,k,{flip:o.flip,sx:o.sx,sy:o.sy,a:(o.a==null?1:o.a)*(blink?.35:1)});
  if(r){if(!o.ns)shadow(G2(x),G2(gy),G2(r.w)*.7);ACT.push({x:G2(x),top:G2(r.top),foot:G2(gy)})}return r}
const beatHop=(b,ph,amp)=>{const p=fr(b-ph);return Math.pow(Math.sin(p*Math.PI),.8)*(amp+react*6)};
function sceneCrew(I,ev,b,el,dur,lb){const rg=region(ev.side),n=(rg.x1-rg.x0)>=3*56*S?3:2,pk=k0=>{const k=(ev.seed+k0*2)%AV.length;return AV[k]};
  const pf=Math.min(clamp(el/.25,0,1),clamp((dur-el)/.3,0,1));platform(G2(rg.x0)-4,G2(rg.x1)+4,G2(rg.gy),pf);
  const sp=ev.seed%n;
  for(let i=0;i<n;i++){const name=pk(i),xt=rg.x0+(rg.x1-rg.x0)*(i+.5)/n,tr=travel(rg,xt,el-i*.07,dur,.9,.7,90);
    const hop=tr.mv?Math.abs(Math.sin(el*Math.PI/.16))*3:beatHop(b,i*.25,7),p=fr(b-i*.25),sy=tr.mv?1:1-.08*Math.exp(-p*12);
    const r=avatar(I,name,tr.x,rg.gy,{flip:tr.dir>0,hop,sy});if(!r)continue;
    if(i===sp&&lb>1.6&&lb<5.6&&!LV.length)bubble(SAY[(ev.seed+Math.floor(lb/2))%SAY.length],G2(tr.x),G2(r.top)-2,lb<1.8?.5:1)}
  if(XB&&lb>1&&lb<7)puff('heart',G2(lerp(rg.x0,rg.x1,Math.random())),G2(rg.gy)-60,{vy:-.5,dec:.012})}
function scenePets(I,ev,b,el,dur,lb){const rg=region(ev.side),ms=performance.now();
  const L=[['luti',.3],['fox',.72]];
  L.forEach(([nm,u],i)=>{const tr=travel(rg,lerp(rg.x0,rg.x1,u),el-i*.15,dur,1.1,.9,120),hop=tr.mv?0:beatHop(b,i*.5,4);
    const r=spr(I,nm,tr.x,rg.gy-hop*S,S,{flip:tr.dir>0,ms:tr.mv?ms:ms*.5,a:jfM>.05&&((ms/60)|0)%2?.35:1});
    if(r){shadow(G2(tr.x),G2(rg.gy),G2(r.w)*.6);ACT.push({x:G2(tr.x),top:G2(r.top),foot:G2(rg.gy)})}});
  // 병아리: 위에서 빙글빙글
  const mid=(rg.x0+rg.x1)/2,ce=clamp(el/1,0,1),cx=lerp(rg.out<0?-80:W+80,mid+Math.sin(el*1.7)*(rg.x1-rg.x0)*.28,eOut(ce)),cy=rg.gy-(118+Math.sin(el*3.4)*8)*S*.62;
  const ex=el>dur-.8?eIn((el-(dur-.8))/.8):0,x2=lerp(cx,rg.out<0?-100:W+100,ex);
  const rc=spr(I,'chick',x2,cy,S,{flip:Math.cos(el*1.7)*(rg.out<0?1:-1)>0,ms});if(rc){ACT.push({x:G2(x2),top:G2(rc.top),foot:G2(cy)});if(lb>2&&lb<5)bubble('삐약!',G2(x2),G2(rc.top)-1)}
  if(XB&&Math.floor(b)%2===0&&lb>1.5&&lb<7)puff('heart',G2(mid),G2(rg.gy)-30,{vx:(Math.random()-.5)*.6,vy:-.6,dec:.012})}
function sceneMonster(I,ev,b,el,dur,lb){const rg=region(ev.side),nm=ev.side==='L'?'shrub':'moss',m=META[nm],s=st(ev),ms=performance.now();
  const kk=MK(),h=m.h*kk,x=fitX(rg,m.w*kk);
  if(s.dead<0&&s.hp<=0){s.dead=el;burst(G2(x),G2(rg.gy-h*.5),18,true);for(let i=0;i<7;i++)puff('coin',G2(x)+(Math.random()-.5)*20,G2(rg.gy-h*.4),{vx:(Math.random()-.5)*2.4,vy:-2.5-Math.random()*1.5,g:.16,dec:.006,gy:G2(rg.gy)-1});s.exp=100+Math.floor(Math.random()*900)}
  const P=pop(rg,h,el,dur,.55,.45,s.dead<0);if(P.on&&!s.landed){s.landed=1;dust(G2(x),G2(rg.gy),G2(m.w*kk))}
  let a=1;if(s.dead>=0){const k=el-s.dead;a=k>.6?0:(((k*20)|0)%2?.3:1)*(1-k/.6)}
  s.hit*=.8;const shake=s.hit>.1?Math.round(Math.sin(ms/18)*S):0,breathe=1+.025*Math.round(Math.sin(b*Math.PI)*2)/2;
  const r=spr(I,nm,x+shake,P.y,kk,{flip:ev.side==='L',sx:P.sx,sy:breathe*P.sy,ms,a,white:s.hit>.3?s.hit*.6:0});
  if(r&&a>0){if(P.on||s.dead>=0)shadow(G2(x),G2(rg.gy),G2(r.w)*.6);if(s.dead<0&&P.on){const hy=G2(r.top)-4;hpbar(G2(x),hy,40,s.hp);TGT.push({key:ev.side+ev.start,st:s,hx:G2(x),hy:hy-4,dp:.12,seed:ev.seed})}}
  if(s.dead>=0&&el-s.dead<1.6)text('EXP +'+s.exp,'sys',G2(x),G2(rg.gy-h*.7)-Math.round((el-s.dead)*14),1,el-s.dead>1.2?(1.6-(el-s.dead))/.4:1)}
function sceneBoss(I,ev,b,el,dur,lb){const rg=region(ev.side),m=META.boss,s=st(ev),ms=performance.now(),kk=MK(),x=fitX(rg,m.w*kk);
  if(el<1.25){const on=((el*8)|0)%2===0,yT=G2(rg.gy-m.h*kk-70),yB=G2(rg.gy)+3,x0=G2(rg.x0)-6,x1=G2(rg.x1)+6,off=Math.floor(el*30)%8;
    for(const yy of [yT,yB]){fk.fillStyle='#1a1400';fk.fillRect(x0,yy,x1-x0,6);fk.fillStyle='#ffd400';for(let i=x0-8;i<x1;i+=8)for(let j=0;j<6;j++){const xx=i+off+j;if(xx>=x0&&xx+3<=x1)fk.fillRect(xx,yy+j,3,1)}}
    if(on)text('WARNING!!','warn',G2(x),Math.round((yT+yB)/2)-14,2)}
  if(el<1.05)return;const k=el-1.05,a=k<.35?(((k*20)|0)%2?.2:1):el>dur-.5?(((el*20)|0)%2?.2:1)*(dur-el)/.5:1,bob=Math.sin(el*2.2)*5*S/3;
  s.hit*=.8;const r=spr(I,'boss',x,rg.gy-14*S/3-bob,kk,{ms,a,white:s.hit>.3?s.hit*.5:0});
  if(r){shadow(G2(x),G2(rg.gy),G2(r.w)*.45);const hy=G2(r.top)-2;if(el<dur-.5){hpbar(G2(x),hy,76,s.hp);TGT.push({key:ev.side+ev.start,st:s,hx:G2(x),hy:hy-4,dp:.03,seed:ev.seed})}}}
function sceneRider(I,ev,b,el,dur,lb){const rg=region(ev.side),xt=(rg.x0+rg.x1)/2,tr=travel(rg,xt,el,dur,.5,.5,140),hop=tr.mv?0:beatHop(b,0,5);
  const r=avatar(I,'rider',tr.x,rg.gy,{flip:tr.dir>0,hop,sy:tr.mv?1:1-.06*Math.exp(-fr(b)*12)});if(!r)return;
  if(tr.mv){const gx=G2(tr.x),back=-tr.dir;for(let i=0;i<5;i++){const y=G2(r.top)+8+i*9,len=10+((i*7+((el*40)|0))%14);fk.fillStyle=i%2?'#ffffff':'#9ff3ff';fk.fillRect(back>0?gx+G2(r.w)/2+2:gx-G2(r.w)/2-2-len,y,len,1)}
    if(Math.random()<.6)puff('dust',G2(tr.x)+back*G2(r.w)*.3,G2(rg.gy)-1,{vx:back*.6,vy:-.2,dec:.05})}
  else{if(lb>1.2&&lb<4.6)bubble(['출발~!','달려라!','부릉부릉~'][ev.seed%3],G2(tr.x),G2(r.top)-2)}}
function sceneEgg(I,ev,b,el,dur,lb){const rg=region(ev.side),x=(rg.x0+rg.x1)/2,k=Math.round(S*1.6),s=st(ev),ms=performance.now(),hatch=4.5;
  if(lb<hatch){const fall=clamp(el/.75,0,1),bnc=Math.abs(Math.sin(fall*Math.PI*2.5))*(1-fall)*40,y=fall<.4?lerp(rg.gy-H*.3,rg.gy,eIn(fall/.4)):rg.gy-bnc*S/3;
    const wob=fr(b)<.15?(Math.floor(b)%2?1:-1)*S:0,r=spr(I,'egg',x+wob,y,k,{a:el<.05?0:1});
    if(r){shadow(G2(x),G2(rg.gy),G2(r.w)*.8);ACT.push({x:G2(x),top:G2(r.top),foot:G2(rg.gy)});if(lb>1.8)bubble(lb<3.3?'...?':'두근두근!',G2(x),G2(r.top)-3)}}
  else{if(!s.said){s.said=1;burst(G2(x),G2(rg.gy-25*k*.5),22,true);for(let i=0;i<5;i++)puff('heart',G2(x),G2(rg.gy)-20,{vx:(Math.random()-.5)*2,vy:-1.5-Math.random(),g:.03,dec:.012})}
    const k2=clamp((el-(hatch*60/CHART.bpm))/1.4,0,1),cx=lerp(x,rg.out<0?-120:W+120,eIn(clamp((k2-.45)/.55,0,1))),cy=rg.gy-eOut(Math.min(1,k2/.45))*H*.12;
    const r=spr(I,'chick',cx,cy,S,{flip:rg.out>0,ms});if(r)ACT.push({x:G2(cx),top:G2(r.top),foot:G2(cy)});
    if(lb-hatch<2.4)text('아이템 획득!','sys',G2(x),G2(rg.gy)-46-Math.round((lb-hatch)*4),1)}}
// 반응 장면
function sceneGhost(I,ev,b,el,dur,lb){const rg=region(ev.side),x=lerp(rg.x0,rg.x1,.5)+Math.sin(el*3)*12*S/3,k=clamp(el/dur,0,1),y=rg.gy-k*60*S,a=k>.7?(1-k)/.3:1;
  const r=spr(I,'ghost',x,y,S,{a:a*.9,flip:ev.side==='L'});if(r&&lb<3)bubble(['앗...!','으앙~','힝...'][ev.seed%3],G2(x),G2(r.top)-2,a)}
function sceneNice(I,ev,b,el,dur,lb,lv){const rg=region(ev.side),x=lerp(rg.x0,rg.x1,.5),name=AV[ev.seed%AV.length],m=META[name],P=pop(rg,m.h*S,el,dur,.42,.36,true);
  const r=avatar(I,name,x,P.y,{flip:ev.side==='L',hop:P.on?beatHop(b,0,6):0,sx:P.sx,sy:P.sy,ns:!P.on});
  if(!r)return;if(P.on&&!ev.fx){ev.fx=1;dust(G2(x),G2(rg.gy),G2(r.w));burst(G2(x),G2(r.top)+10,12);if(lv)LV.push({x:G2(x),y:G2(rg.gy),top:G2(r.top),age:0})}
  if(P.on&&lb<3.4)bubble(lv?'레벨 업~!':['나이스~!','좋아좋아!','잘한다~!'][ev.seed%3],G2(x),G2(r.top)-2)}
const SCENE={crew:sceneCrew,pets:scenePets,monster:sceneMonster,boss:sceneBoss,rider:sceneRider,egg:sceneEgg,ghost:sceneGhost,nice:sceneNice,levelup:(I,ev,b,el,dur,lb)=>sceneNice(I,ev,b,el,dur,lb,true)};
// ---- 매 프레임 ----
let lastT=performance.now(),dirty=true,XB=false,lastBi=0;window.VJ_PIX_FORCE=null;   // 확인용: VJ_PIX_FORCE=[{side:'L',type:'crew',start:박자},…]
function tick(){requestAnimationFrame(tick);
  const sid=typeof SONGS!=='undefined'&&SONGS[cur]?SONGS[cur].id:'',I=imgs(sid),songOn=!!I&&window.VJ_MODE!=='off';window.VJ_PIXEL_ON=songOn;
  const isPlay=typeof playing!=='undefined'&&playing,on=songOn&&isPlay&&typeof G!=='undefined'&&G.land;liveOn=on;
  cv.classList.toggle('on',on);if(!on){if(dirty&&W){ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,cv.width,cv.height)}RX.length=0;PT.length=0;DN.length=0;LV.length=0;prevCombo=0;lastRx=-99;dirty=false;for(const k in ST)delete ST[k];return}size();
  const pn=performance.now(),dt=Math.min(.05,(pn-lastT)/1000);lastT=pn;const isPaused=typeof paused!=='undefined'&&paused;let b=lastB;if(!isPaused)b=beatAt(now());
  if(b<lastB-1){RX.length=0;lastRx=-99;for(const k in ST)delete ST[k]}lastB=b;
  const bi=Math.floor(b);XB=!isPaused&&bi!==lastBi;lastBi=bi;   // 이번 프레임에 박자를 넘었나 (멈춘 동안엔 아니에요)
  const fv=typeof fever!=='undefined'&&fever;if(!isPaused){react*=Math.exp(-dt*5);jfM*=Math.exp(-dt*4)}
  for(let i=RX.length-1;i>=0;i--)if(b>RX[i].start+RX[i].len)RX.splice(i,1);
  const evs=(window.VJ_PIX_FORCE?VJ_PIX_FORCE.map(f=>Object.assign({len:99,seed:7},f)):events(b,fv).concat(RX)).filter(e=>b>=e.start&&b<=e.start+e.len);
  if(!evs.length&&!PT.length&&!DN.length&&!LV.length&&!dirty)return;dirty=evs.length||PT.length||DN.length||LV.length;
  // 그리는 곳은 레인 좌우 아래쪽뿐이라, 그 두 칸만 지우고 옮겨요 (화면 전체를 매번 지우고 키워 그리지 않게)
  const ry=Math.floor(LH*.12),rh=LH-ry,lw=Math.ceil(LW*.37),rx=Math.floor(LW*.63),RECTS=[[0,ry,lw,rh],[rx,ry,LW-rx,rh]];
  ctx.setTransform(PR,0,0,PR,0,0);ctx.imageSmoothingEnabled=false;bk.imageSmoothingEnabled=fk.imageSmoothingEnabled=false;
  for(const [x,y,w,h] of RECTS){ctx.clearRect(x*S,y*S,w*S,h*S);bk.clearRect(x,y,w,h);fk.clearRect(x,y,w,h)}
  // 장면이 스프라이트는 화면에 바로, 발판·그림자는 뒤 버퍼에, 글자·말풍선은 앞 버퍼에 그려요
  const spb=60/CHART.bpm;TGT=[];ACT=[];const nb={L:0,R:0};
  for(const ev of evs){nb[ev.side]=1;const el=(b-ev.start)*spb,dur=ev.len*spb,lb=b-ev.start;const f=SCENE[ev.type];if(f)f(I,ev,b,el,dur,lb)}
  // 발판·그림자(뒤 버퍼)는 스프라이트 아래로: destination-over 로 깔아요
  ctx.save();ctx.globalCompositeOperation='destination-over';for(const [x,y,w,h] of RECTS)ctx.drawImage(bkC,x,y,w,h,x*S,y*S,w*S,h*S);ctx.restore();
  // 피버: 옆에서 도트 색종이
  if(fv&&!isPaused&&Math.random()<.5)for(const side of ['L','R']){const rg=region(side);puff('sq',G2(lerp(rg.x0,rg.x1,Math.random())),G2(H*.55),{vx:(Math.random()-.5)*.4,vy:.6+Math.random()*.6,dec:.008,big:1,c:['#ff5c93','#fff36b','#7be05a','#7fd3ff','#c79bff'][(Math.random()*5)|0]})}
  drawPT(!isPaused);drawDN(isPaused?0:dt);drawLV(isPaused?0:dt);
  for(const [x,y,w,h] of RECTS)ctx.drawImage(fkC,x,y,w,h,x*S,y*S,w*S,h*S);busy=nb}
tick();
// 확인용: VJ_PIX_TEST('miss'|'nice'|'cheer'|'p')
window.__ptext=ptext;window.VJ_PIX_TEST=k=>{if(k==='miss'){prevCombo=20;window.monsterReact('miss')}else if(k==='nice'){lastRx=-99;spawn('nice',4)}else window.monsterReact(k);return RX.length};
})();
