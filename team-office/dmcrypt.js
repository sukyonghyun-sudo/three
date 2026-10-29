// 우리팀 1:1 대화 잠금 (브라우저 안에서만 잠그고 연다 — 저장소 주인도 대화 내용을 못 읽게)
// · 비밀번호(8자 이상) 하나 → 두 값: 서버가 확인하는 「확인값」(64자리)과, 대화 열쇠를 잠그는 「잠금 열쇠」. 서버는 앞의 것만 받는다
// · 사람마다 대화 열쇠 한 쌍(ECDH P-256): 공개 쪽은 모두에게, 비밀 쪽은 잠금 열쇠로 잠가 서버에 (다른 기기에서 로그인하면 풀어서 씀)
// · 두 사람 사이 메시지는 서로의 열쇠로 만든 같은 열쇠(AES-GCM)로 잠근다 → 본문은 "e1:…"
// · 이 기기에서 푼 열쇠는 꺼낼 수 없는 형태로 IndexedDB 에 둔다 (매번 비밀번호를 묻지 않게)
window.DMCrypt = (() => {
  const S = crypto.subtle, enc = new TextEncoder(), dec = new TextDecoder();
  const ITER = window.__TEST ? 2000 : 310000; // 비밀번호를 늘이는 횟수 (테스트 판은 빨리)
  const EC = { name: "ECDH", namedCurve: "P-256" };
  const b64 = (buf) => { const u = new Uint8Array(buf); let s = ""; for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode(...u.subarray(i, i + 0x8000)); return btoa(s); };
  const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  const hex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  const hkdf = (info) => ({ name: "HKDF", hash: "SHA-256", salt: new Uint8Array(0), info: enc.encode(info) });

  async function fromPassword(char, pw) { // → { auth: 서버 확인값, wrap: 대화 열쇠 잠금 열쇠 }
    const base = await S.importKey("raw", enc.encode(pw), "PBKDF2", false, ["deriveBits"]);
    const bits = await S.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: enc.encode("우리팀:" + char), iterations: ITER }, base, 256);
    const hk = await S.importKey("raw", bits, "HKDF", false, ["deriveBits", "deriveKey"]);
    return {
      auth: hex(await S.deriveBits(hkdf("auth"), hk, 256)),
      wrap: await S.deriveKey(hkdf("wrap"), hk, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]),
    };
  }
  async function seal(key, bytes) {
    const iv = crypto.getRandomValues(new Uint8Array(12)), ct = new Uint8Array(await S.encrypt({ name: "AES-GCM", iv }, key, bytes));
    const out = new Uint8Array(12 + ct.length); out.set(iv); out.set(ct, 12);
    return b64(out);
  }
  async function open(key, s) { const u = unb64(s); return S.decrypt({ name: "AES-GCM", iv: u.slice(0, 12) }, key, u.slice(12)); }
  const usable = (pkcs8) => S.importKey("pkcs8", pkcs8, EC, false, ["deriveBits"]);

  // 새 열쇠 한 쌍 → { pub, priv(잠근 것), key(이 기기용) }
  async function newPair(wrap) {
    const kp = await S.generateKey(EC, true, ["deriveBits"]), pk = await S.exportKey("pkcs8", kp.privateKey);
    return { pub: b64(await S.exportKey("raw", kp.publicKey)), priv: await seal(wrap, pk), key: await usable(pk) };
  }
  const unwrap = async (wrap, priv) => usable(await open(wrap, priv)); // 비밀번호가 다르면 실패(throw)
  const rewrap = async (oldWrap, newWrap, priv) => seal(newWrap, await open(oldWrap, priv)); // 비밀번호 바꿀 때

  // 두 사람 사이 열쇠 (어느 쪽에서 만들어도 같다)
  const pairs = new Map();
  async function pairKey(myKey, me, other, otherPub) {
    const id = `${me}|${other}|${otherPub}`;
    if (!pairs.has(id)) pairs.set(id, (async () => {
      const pub = await S.importKey("raw", unb64(otherPub), EC, false, []);
      const bits = await S.deriveBits({ name: "ECDH", public: pub }, myKey, 256);
      const hk = await S.importKey("raw", bits, "HKDF", false, ["deriveKey"]);
      return S.deriveKey(hkdf("dm:" + [me, other].sort().join("|")), hk, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
    })());
    return pairs.get(id);
  }
  const lock = async (key, text) => "e1:" + (await seal(key, enc.encode(text)));
  const isLocked = (body) => typeof body === "string" && body.startsWith("e1:");
  async function unlock(key, body) { // 못 열면 null (예전 열쇠로 잠긴 것 등)
    try { return dec.decode(await open(key, body.slice(3))); } catch { return null; }
  }

  // 이 기기에 둔 열쇠 (사람마다 · 테스트 판은 탭마다 사람이 달라도 같은 저장소)
  const DB = "teamOfficeKeys" + (window.__TEST ? "Test" : "");
  function idb(mode, fn) {
    return new Promise((ok, no) => {
      const rq = indexedDB.open(DB, 1);
      rq.onupgradeneeded = () => rq.result.createObjectStore("keys");
      rq.onerror = () => no(rq.error);
      rq.onsuccess = () => {
        const tx = rq.result.transaction("keys", mode), r = fn(tx.objectStore("keys"));
        tx.oncomplete = () => { rq.result.close(); ok(r?.result); };
        tx.onerror = () => { rq.result.close(); no(tx.error); };
      };
    });
  }
  const saved = (char) => idb("readonly", (s) => s.get(char)).catch(() => null); // → { key, pub } | undefined
  const keep = (char, key, pub) => idb("readwrite", (s) => s.put({ key, pub }, char)).catch((e) => console.warn("열쇠 저장 실패", e));
  const forget = (char) => idb("readwrite", (s) => s.delete(char)).catch(() => {});

  return { fromPassword, newPair, unwrap, rewrap, pairKey, lock, unlock, isLocked, saved, keep, forget, MIN: 8 };
})();
