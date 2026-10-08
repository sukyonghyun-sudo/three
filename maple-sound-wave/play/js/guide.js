// 「게임 방법」 안내 창 (2026-10-03 주말 작업) — 곡 화면 오른쪽 위 「설정」 옆 버튼
// 참고: 태고의 달인 · 프로젝트 세카이의 첫 플레이 안내 — 버튼 = 드럼, 판정, 피버, 숨은 노트, 램프 · 레벨, 연습을 한 장에
// 처음 곡 화면에 왔을 때 버튼에 작은 「NEW」 점이 떠요 (한 번 열면 사라져요)
(function(){
const $=id=>document.getElementById(id),T=$('title');if(!T)return;
const LS=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:v}catch(e){return d}},SS=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const b=document.createElement('button');b.id='guideBtn';b.className='guidebtn';b.type='button';b.innerHTML='<i aria-hidden="true">?</i>게임 방법';if(LS('mds-guide','')!=='seen')b.classList.add('new');T.appendChild(b);
let pop=null;
const PADS=[['D','핑크빈','킥','#FF4FA3'],['F','버섯','스네어','#FF8A2B'],['J','슬라임','하이햇','#3EA63C'],['K','예티','박수 · 크래시','#8C7BBE']];   // 이름을 KEYS 로 하면 엔진의 조작키 목록(KEYS)을 가려서 조작키 글자 바꾸기가 깨져요
const M=!!window.MOB;   // 모바일 세로판: 키보드 대신 손가락 기준 안내
function open(){b.classList.remove('new');SS('mds-guide','seen');
  if(!pop){pop=document.createElement('div');pop.id='guidePop';pop.className='prpop';T.appendChild(pop)}
  pop.innerHTML=`<i class="prbd"></i><div class="prbox gdbox" role="dialog" aria-label="게임 방법">
    <div class="prh"><b>게임 방법</b><span>HOW TO PLAY</span><button class="prx" aria-label="닫기">✕</button></div>
    <div class="gdgrid">
      <div class="gd w2"><h4>버튼 = 드럼</h4><p>${M?'노트가 판정선에 닿는 순간 아래 건반을 손가락으로 톡! 누르는 소리가 곡의 드럼이 돼요 — 직접 쳐서 곡을 완성해요. 두 손가락으로 같이 눌러도 돼요.':'노트가 판정선에 닿는 순간 그 레인 버튼을 눌러요. 누르는 소리가 곡의 드럼이 돼요 — 직접 쳐서 곡을 완성해요.'}</p>
        <div class="gdkeys">${PADS.map(([k,n,d,c],i)=>`<button class="gdk" data-l="${i}" style="--c:${c}"><kbd>${window.KEYCFG&&typeof KEYS!=='undefined'&&KEYS[i]?KEYCFG.label(KEYS[i]):k}</kbd><b>${n}</b><small>${d}</small></button>`).join('')}</div><p class="gdn">버튼을 눌러 보면 그 드럼 소리가 나요</p></div>
      <div class="gd"><h4>판정</h4><ul class="gdj"><li><b class="j1">퍼펙트</b> ±45ms</li><li><b class="j2">그레이트</b> ±85ms</li><li><b class="j3">굿</b> ±125ms</li></ul><p>판정선 아래 <b>타이밍 미터</b>가 빠름 · 늦음을 보여 줘요. 한쪽으로 쏠리면 결과 화면의 「싱크 자동 보정」.</p></div>
      <div class="gd"><h4>피버</h4><p>${M?'위쪽':'왼쪽'} <b>클리어 게이지</b>가 가득 차면 피버 — 점수가 두 배예요. 미스하면 게이지가 줄고 피버가 끝나요. 콤보가 길수록 점수가 커져요.</p></div>
      <div class="gd"><h4>숨은 노트 AD-LIB</h4><p>화면엔 없지만 곡에서 드럼이 울리는 빈자리가 있어요. 그 드럼 버튼을 맞춰 치면 <b>AD-LIB!</b> 보너스. 놓쳐도 콤보는 그대로예요.</p></div>
      <div class="gd"><h4>램프 · 레벨</h4><p><em class="lp2">CLEAR</em> 정확도 72% 이상 · <em class="lp3">FC</em> 미스 없음 · <em class="lp4">AP</em> 전부 퍼펙트. 한 판마다 EXP를 받아 레벨이 오르고, 업적을 깨면 칭호를 달 수 있어요.</p></div>
      <div class="gd"><h4>연습 · 자동 플레이</h4><p>${M?'「곡 정보」 탭의':'곡 그림 아래 카드의'} 「연습 모드」로 구간을 골라 느리게 반복하고, 「자동 플레이」로 채보를 미리 볼 수 있어요. 기록에는 안 남아요.</p></div>
    </div>
    <p class="prn2">${M?'곡 화면: 앨범 그림을 옆으로 밀거나 곡 표지를 눌러 곡 바꾸기 · 플레이 중엔 왼쪽 위 ⏸ 로 일시정지':(document.body.classList.contains('ui2')?'곡 화면 <kbd>↑</kbd><kbd>↓</kbd> 곡 고르기 · <kbd>←</kbd><kbd>→</kbd> 난이도 · <kbd>Enter</kbd> 시작':'곡 선택 화면 <kbd>←</kbd><kbd>→</kbd> 고르기 · <kbd>Enter</kbd> 열기 · 곡 화면 <kbd>Enter</kbd> 시작')+' · 플레이 중 <kbd>Esc</kbd> 일시정지'}</p></div>`;
  pop.hidden=false;pop.querySelector('.prx').onclick=close;pop.querySelector('.prbd').onclick=close;
  pop.querySelectorAll('.gdk').forEach(k=>k.onclick=()=>{const l=+k.dataset.l;if(typeof kitPreview==='function')kitPreview(l);k.classList.remove('hit');void k.offsetWidth;k.classList.add('hit')})}
function close(){if(pop)pop.hidden=true}
b.onclick=open;
addEventListener('keydown',e=>{if(e.key==='Escape'&&pop&&!pop.hidden){e.preventDefault();close()}});
window.GUIDE={open,close};
})();
