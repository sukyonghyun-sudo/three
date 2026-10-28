// 팀 사무실 웹앱 서비스 워커 (build_artifact.py 가 VERSION·ASSETS 를 채워 sw.js 로 만든다)
// - 모델·얼굴·three.js 같은 큰 파일: 기기에 있으면 바로 (ASSETS 가 바뀔 때만 새로 받는다)
// - 페이지·스크립트: 늘 새로 받고, 안 되면(오프라인) 기기에 둔 것
// - 실시간 저장소(supabase): 손대지 않는다
const VERSION = "20261028202112", PAGE = "team-office-page-" + VERSION, ASSETS = "team-office-assets-47d92a5f9674";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith("team-office-") && k !== PAGE && k !== ASSETS) await caches.delete(k);
  await self.clients.claim();
})()));
const big = (u) => /\/(models3d|faces|app)\//.test(u.pathname) || u.hostname === "cdn.jsdelivr.net";
self.addEventListener("fetch", (e) => {
  const req = e.request, u = new URL(req.url);
  if (req.method !== "GET" || (u.origin !== location.origin && u.hostname !== "cdn.jsdelivr.net")) return;
  if (big(u)) {
    e.respondWith(caches.open(ASSETS).then(async (c) => {
      const hit = await c.match(req);
      if (hit) return hit;
      const r = await fetch(req);
      if (r.ok) c.put(req, r.clone());
      return r;
    }));
    return;
  }
  e.respondWith(fetch(req).then((r) => {
    if (r.ok) { const copy = r.clone(); caches.open(PAGE).then((c) => c.put(req, copy)); }
    return r;
  }).catch(async () => (await caches.match(req)) || (req.mode === "navigate" ? caches.match("./") : Response.error())));
});
