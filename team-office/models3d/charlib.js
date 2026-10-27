// 22명 3D 캐릭터 공통 로더 — 모든 캐릭터가 Meshy 자동 리깅의 같은 뼈 이름(Hips, Spine, LeftArm…)을 쓰므로
// 동작(clips.json)은 한 벌만 두고 사람마다 이름으로 붙인다. 엉덩이 이동만 사람별 엉덩이 높이로 다시 늘린다.
//
// 일반 <script> 로 읽는다 (모듈로 import 하면 index.html 을 파일로 열었을 때 브라우저가 막는다):
//   <script src="../models3d/charlib.js"></script>
//   const { loadClips, loadCharacter, cutImage } = window.CharLib(THREE, GLTFLoader);
// 파일(file://)로 열렸으면 .glb·.json·.webp 대신 build_offline.py 가 만든 .js 를 <script> 로 읽는다.
window.CharLib = function (THREE, GLTFLoader) {
  const loader = new GLTFLoader();
  const FILE = true; // 아티팩트: .glb 를 못 올려서 늘 .js 묶음으로
  const VER = "39"; // 모델·동작을 다시 만들면 올린다 (서버로 열 때 브라우저가 예전 파일을 쓰지 않게)
  const scripts = new Map();

  function loadScript(src) {
    if (!scripts.has(src)) {
      scripts.set(src, new Promise((ok, fail) => {
        const s = document.createElement("script");
        s.src = src;
        s.onload = ok;
        s.onerror = () => fail(new Error(`못 읽음: ${src}`));
        document.head.appendChild(s);
      }));
    }
    return scripts.get(src);
  }
  function b64ToBuffer(b64) {
    const bin = atob(b64), out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out.buffer;
  }
  // "../models3d/mii/석용현.glb" → 파일로 열렸으면 "../models3d/js/mii/석용현.js" 를 읽고 window.__GLB["mii/석용현"]
  async function loadGLB(path) {
    if (!FILE) return loader.loadAsync(`${path}`);
    const m = path.match(/^(.*?)([^/]+)\/([^/]+)\.glb$/);
    const key = `${m[2]}/${m[3]}`;
    await loadScript(`${m[1]}js/${m[2]}/${m[3]}.js`); // 파일로 열어도 예전 모델을 쓰지 않게
    const buf = b64ToBuffer(window.__GLB[key]);
    delete window.__GLB[key]; // 문자열은 바로 버린다 (메모리)
    return new Promise((ok, fail) => loader.parse(buf, "", ok, fail));
  }
  // 그림 세우기용 2D 그림: 파일로 열렸으면 data URL (파일 그림은 WebGL 텍스처로 못 쓴다)
  async function cutImage(base, style, name) {
    if (!FILE) return `${base}/${style}/${name}.webp`;
    await loadScript(`${base}/js/${style}.js`);
    return window.__CUT[style][name];
  }

  async function loadClips(url) {
    let j;
    if (FILE) {
      await loadScript(url.replace(/clips\.json$/, "js/clips.js") + ``);
      j = window.__CLIPS;
    } else j = await (await fetch(`${url}`)).json();
    const out = {};
    for (const c of j.clips) {
      const clip = THREE.AnimationClip.parse(c);
      // 걷기는 제자리 걸음으로 — 앞으로 나가는 거리는 코드가 움직인다
      if (c.name === "walk") {
        for (const t of clip.tracks) {
          if (!t.name.endsWith(".position")) continue;
          const v = t.values, x0 = v[0], z0 = v[2];
          for (let i = 0; i < v.length; i += 3) { v[i] = x0; v[i + 2] = z0; }
        }
        // 팔 휘두름을 절반쯤으로: 크게 휘두르면 리깅 가중치가 거친 어깨·팔이 늘어나 보인다
        for (const t of clip.tracks) {
          if (!/(Shoulder|Arm|ForeArm|Hand)\.quaternion$/.test(t.name)) continue;
          const v = t.values, q = new THREE.Quaternion(), mean = new THREE.Quaternion(0, 0, 0, 0), q0 = new THREE.Quaternion().fromArray(v, 0);
          for (let i = 0; i < v.length; i += 4) { // 평균 자세 (부호를 첫 키에 맞춰 더한다)
            q.fromArray(v, i);
            const s = q.dot(q0) < 0 ? -1 : 1;
            mean.set(mean.x + s * q.x, mean.y + s * q.y, mean.z + s * q.z, mean.w + s * q.w);
          }
          mean.normalize();
          for (let i = 0; i < v.length; i += 4) q.fromArray(v, i).slerp(mean, 0.55).toArray(v, i);
        }
      }
      out[c.name] = clip;
    }
    return out;
  }

  // 재질은 사람마다 따로 두지 않고 설정만 맞춘다 (빛 받는 정도가 같아야 한 화면에서 통일돼 보인다)
  function tuneMaterial(m, style) {
    m.roughness = style.roughness ?? 0.85;
    m.metalness = 0;
    if (m.map) {
      m.map.colorSpace = THREE.SRGBColorSpace;
      m.map.anisotropy = 8;
    }
    if (style.flat) m.flatShading = true;
    // baked: 텍스처에 이미 그림의 부드러운 명암이 들어 있다 — 조명을 또 세게 받으면 탁하고 얼룩져 보인다.
    // 그림 색 대부분은 그대로(자체 발광), 조명은 입체감만 살짝 (baked = 그림 색 비율)
    if (style.baked && m.map) {
      const b = style.baked;
      m.emissiveMap = m.map;
      m.emissive = new THREE.Color(b, b, b);
      m.color = new THREE.Color(1 - b, 1 - b, 1 - b).multiplyScalar(1.15);
      m.envMapIntensity = 0.25;
      m.roughness = 0.95;
    }
    m.needsUpdate = true;
  }

  // 얼굴 그림(눈·코·입·안경): 텍스처 조각에 그리지 않고 따로 한 장을 정면에서 비춰 덮는다 (flat_paint.py 가 GLB 에 넣음).
  // 리깅 전 자세의 꼭짓점 위치로 비추므로 움직여도 얼굴에 붙어 있다. 뒤통수·옆으로는 안 비친다 (정면을 보는 면만).
  function addFaceDecal(m, tex, fd) {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    tex.needsUpdate = true;
    m.onBeforeCompile = (sh) => {
      sh.uniforms.faceDecal = { value: tex };
      sh.uniforms.faceXf = { value: new THREE.Vector4(fd.a, fd.b, fd.c, fd.d) };
      sh.uniforms.faceHy = { value: fd.hy };
      sh.vertexShader = sh.vertexShader
        .replace("#include <common>", "#include <common>\nuniform vec4 faceXf;\nuniform float faceHy;\nvarying vec2 vFaceUv;\nvarying float vFaceOn;")
        .replace("#include <begin_vertex>", "#include <begin_vertex>\nvFaceUv = vec2(position.x * faceXf.x + faceXf.y, position.y * faceXf.z + faceXf.w);\nvFaceOn = step(faceHy, position.y) * smoothstep(0.1, 0.35, normal.z);");
      sh.fragmentShader = sh.fragmentShader
        .replace("#include <common>", "#include <common>\nuniform sampler2D faceDecal;\nvarying vec2 vFaceUv;\nvarying float vFaceOn;")
        .replace("#include <map_fragment>", "#include <map_fragment>\nvec4 faceD = texture2D(faceDecal, vFaceUv);\nvec2 faceIn = step(vec2(0.0), vFaceUv) * step(vFaceUv, vec2(1.0));\nfloat faceA = faceD.a * vFaceOn * faceIn.x * faceIn.y;\ndiffuseColor.rgb = mix(diffuseColor.rgb, faceD.rgb, faceA);")
        .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance = mix(totalEmissiveRadiance, faceD.rgb * emissive, faceA);");
    };
    m.customProgramCacheKey = () => "faceDecal";
    m.needsUpdate = true;
  }

  async function loadCharacter(url, clips, opt = {}) {
    const height = opt.height ?? 1.7;
    const gltf = await loadGLB(url);
    const root = gltf.scene;
    root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root);
    const s = height / (box.max.y - box.min.y);
    root.scale.multiplyScalar(s);
    root.position.set(-(box.min.x + box.max.x) / 2 * s, -box.min.y * s, -(box.min.z + box.max.z) / 2 * s);
    const wrap = new THREE.Group();
    wrap.add(root);
    const decals = [];
    root.traverse((o) => {
      if (!o.isMesh) return;
      o.frustumCulled = false;
      o.castShadow = !!opt.shadow;
      tuneMaterial(o.material, opt.style || {});
      const fd = o.material.userData.faceDecal;
      if (fd && gltf.parser) decals.push(gltf.parser.getDependency("texture", fd.texture).then((t) => addFaceDecal(o.material, t, fd)));
    });
    await Promise.all(decals);
    const hipY = root.getObjectByName("Hips").position.y;
    const mixer = new THREE.AnimationMixer(root);
    const actions = {};
    for (const [name, clip] of Object.entries(clips)) {
      const c = clip.clone();
      for (const t of c.tracks) {
        if (!t.name.endsWith(".position")) continue;
        const v = t.values;
        for (let i = 0; i < v.length; i++) v[i] *= hipY;
      }
      const a = mixer.clipAction(c);
      if (name === "sit_down" || name === "stand_up") {
        a.setLoop(THREE.LoopOnce, 1);
        a.clampWhenFinished = true;
      }
      actions[name] = a;
    }
    let cur = null;
    function play(name, fade = 0.35) {
      const next = actions[name];
      if (!next || next === cur) return next;
      next.reset().setEffectiveWeight(1).play();
      if (cur) cur.crossFadeTo(next, fade, false);
      cur = next;
      return next;
    }
    return { wrap, root, mixer, actions, play, scale: s, get current() { return cur; } };
  }

  return { loadClips, loadCharacter, cutImage, loadScript, loadGLB };
};
