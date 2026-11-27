/* 필름 톤 스튜디오 — WebGL2 렌더러.
   순서: 준비(노출·흔들림) → 블룸 → 할레이션 → 디퓨전·색보정·LUT → 마무리(빛 내림·비네트·색수차·테이프·그레인·손상·레터박스)
   블룸/할레이션/디퓨전 흐림은 film_filters.py 와 같은 가우스 흐림을 낮은 해상도에서 근사한다. */
(function () {
'use strict';

const HEAD = `#version 300 es
precision highp float;
precision highp int;
precision highp sampler3D;
in vec2 v_uv;
out vec4 o;
const vec3 LUMA = vec3(0.299, 0.587, 0.114);
uint hsh(uint x) { x ^= x >> 16; x *= 0x7feb352du; x ^= x >> 15; x *= 0x846ca68bu; x ^= x >> 16; return x; }
float h1(float a, float b) { return float(hsh(floatBitsToUint(a) ^ hsh(floatBitsToUint(b) + 0x9e3779b9u))) / 4294967295.0; }
`;

const VS = `#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() { v_uv = a_pos * 0.5 + 0.5; gl_Position = vec4(a_pos, 0.0, 1.0); }`;

const FS = {
  // 원본을 읽어 노출·깜빡임을 곱하고 게이트 위브만큼 옮긴다. (DOM/VideoFrame 은 위쪽 행이 먼저라 v 를 뒤집어 읽는다)
  // 로그 영상이면 곡선을 풀어 선형 → 색역을 Rec.709 로 → 필름식 톤매핑 → sRGB (노출·깜빡임은 선형에서)
  prep: HEAD + `
uniform sampler2D u_src; uniform vec2 u_off; uniform float u_zoom; uniform float u_gain;
uniform int u_log; uniform int u_legal; uniform mat3 u_gamut; uniform float u_linGain;
float dec(float t) {
  if (u_log == 1) return t >= 171.2102946929 / 1023.0 ? pow(10.0, (t * 1023.0 - 420.0) / 261.5) * 0.19 - 0.01
                                                     : (t * 1023.0 - 95.0) * 0.01125 / (171.2102946929 - 95.0);       // S-Log3
  if (u_log == 2) return t > 0.149658 ? (pow(10.0, (t - 0.385537) / 0.247190) - 0.052272) / 5.555556
                                      : (t - 0.092809) / 5.367655;                                                       // LogC3 EI800
  if (u_log == 3) return t < 0.181 ? (t - 0.125) / 5.6 : pow(10.0, (t - 0.598206) / 0.241514) - 0.00873;              // V-Log
  if (u_log == 4) return t >= 0.100537775 ? (pow(10.0, (t - 0.790453) / 0.344676) - 0.009468) / 0.555556
                                          : (t - 0.092864) / 8.735631;                                                   // F-Log
  return t;
}
void main() {
  vec2 uv = (v_uv - 0.5) / u_zoom + 0.5 + u_off;
  vec3 c = texture(u_src, vec2(uv.x, 1.0 - uv.y)).rgb;
  if (u_log > 0) {
    if (u_legal == 1) c = (c * 876.0 + 64.0) / 1023.0;      // 영상 파일(보통 범위)은 10비트 코드값으로 되돌려 읽는다
    vec3 lin = max(vec3(dec(c.r), dec(c.g), dec(c.b)) * u_gamut, 0.0) * u_linGain;
    vec3 tm = clamp(lin * (2.51 * lin + 0.03) / (lin * (2.43 * lin + 0.59) + 0.14), 0.0, 1.0);
    o = vec4(mix(tm * 12.92, 1.055 * pow(tm, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), tm)), 1.0);
    return;
  }
  o = vec4(c * u_gain, 1.0);
}`,
  copy: HEAD + `
uniform sampler2D u_in; uniform vec2 u_ls;
void main() { o = vec4(texture(u_in, v_uv * u_ls).rgb, 1.0); }`,
  // 구간이 넘어갈 때 두 톤을 섞는다
  mix: HEAD + `
uniform sampler2D u_a; uniform sampler2D u_b; uniform float u_t;
void main() { ivec2 p = ivec2(gl_FragCoord.xy); o = vec4(mix(texelFetch(u_a, p, 0).rgb, texelFetch(u_b, p, 0).rgb, u_t), 1.0); }`,
  // f×f 상자 축소. mode 1 = 블룸 밝은 부분(hi*x), 2 = 할레이션 마스크(hi)
  down: HEAD + `
uniform sampler2D u_in; uniform int u_f; uniform int u_mode; uniform float u_thr;
void main() {
  ivec2 sz = textureSize(u_in, 0);
  ivec2 b = ivec2(gl_FragCoord.xy) * u_f;
  vec3 acc = vec3(0.0); float n = 0.0;
  for (int j = 0; j < u_f; j++) for (int i = 0; i < u_f; i++) {
    ivec2 p = b + ivec2(i, j);
    if (p.x >= sz.x || p.y >= sz.y) continue;
    vec3 c = texelFetch(u_in, p, 0).rgb;
    if (u_mode == 1) { float l = dot(c, LUMA); c *= clamp((l - u_thr) / (1.0 - u_thr), 0.0, 1.0); }
    else if (u_mode == 2) { float l = dot(c, LUMA); c = vec3(clamp((l - u_thr) / (1.0 - u_thr), 0.0, 1.0)); }
    else if (u_mode == 3) {   // 할레이션: 선형 빛에서 문턱을 넘은 양. 하얗게 날아간 곳은 실제로 훨씬 밝았던 빛이라 더 키운다
      float mx = max(max(c.r, c.g), c.b), lin = pow(max(mx, 0.0), 2.2), tl = pow(u_thr, 2.2);
      float e = max(lin - tl, 0.0) / max(1.0 - tl, 1e-4);
      c = vec3(e * (1.0 + 3.0 * smoothstep(0.9, 1.0, mx)));
    }
    acc += c; n += 1.0;
  }
  o = vec4(acc / max(n, 1.0), 1.0);
}`,
  // 한 방향 가우스 (scipy 'reflect' 경계)
  blur: HEAD + `
uniform sampler2D u_in; uniform ivec2 u_dir; uniform float u_sigma; uniform int u_rad;
int refl(int q, int n) { if (q < 0) q = -q - 1; if (q >= n) q = 2 * n - q - 1; return clamp(q, 0, n - 1); }
void main() {
  ivec2 sz = textureSize(u_in, 0); ivec2 p = ivec2(gl_FragCoord.xy);
  vec4 acc = vec4(0.0); float ws = 0.0; float k = -0.5 / (u_sigma * u_sigma);
  for (int d = -u_rad; d <= u_rad; d++) {
    float w = exp(k * float(d * d));
    ivec2 q = p + u_dir * d; q.x = refl(q.x, sz.x); q.y = refl(q.y, sz.y);
    acc += texelFetch(u_in, q, 0) * w; ws += w;
  }
  o = acc / ws;
}`,
  // 블룸: 스크린 합성 (1 넘는 값은 그대로 둔다)
  bloom: HEAD + `
uniform sampler2D u_a; uniform sampler2D u_low; uniform vec2 u_ls; uniform float u_amt; uniform vec3 u_tint;
void main() {
  vec3 x = texelFetch(u_a, ivec2(gl_FragCoord.xy), 0).rgb;
  vec3 b = clamp(texture(u_low, v_uv * u_ls).rgb * u_amt * u_tint, 0.0, 1.0);
  o = vec4(x + b * (1.0 - min(x, vec3(1.0))), 1.0);
}`,
  // 할레이션: 강한 빛이 필름 바탕에서 되튀어 빨강 감광층을 한 번 더 비춘다 → 선형 빛에 붉은 주황 번짐을 더함
  halation: HEAD + `
uniform sampler2D u_b; uniform sampler2D u_low; uniform sampler2D u_low2; uniform vec2 u_ls; uniform vec2 u_ls2;
uniform float u_amt; uniform float u_thr; uniform vec3 u_col;
void main() {
  vec3 x = texelFetch(u_b, ivec2(gl_FragCoord.xy), 0).rgb;
  float h = 0.62 * texture(u_low, v_uv * u_ls).r + 0.38 * texture(u_low2, v_uv * u_ls2).r;
  vec3 lin = pow(max(x, 0.0), vec3(2.2)) + h * u_amt * u_col;
  o = vec4(pow(lin, vec3(1.0 / 2.2)), 1.0);
}`,
  // 디퓨전 + 롤오프 + 색온도 + LUT + film_filters.grade + S커브 + 필름 압축
  grade: HEAD + `
uniform sampler2D u_c; uniform sampler2D u_dif; uniform vec2 u_difS; uniform float u_difAmt;
uniform float u_roll; uniform vec3 u_wb;
uniform vec3 u_lift; uniform vec3 u_gain; uniform vec3 u_gamma;
uniform float u_sat; uniform float u_vib; uniform vec3 u_sh; uniform vec3 u_hi;
uniform float u_con; uniform float u_scurve; uniform float u_comp; uniform float u_hiDesat; uniform float u_density;
uniform sampler3D u_lut; uniform float u_lutMix; uniform float u_lutN; uniform vec3 u_lutMin; uniform vec3 u_lutMax; uniform int u_lutPos;
uniform int u_lutIn; uniform mat3 u_lutM; uniform float u_lutGain;
uniform float u_bw; uniform vec3 u_bwW; uniform vec3 u_tone; uniform float u_toneAmt;
float lg10(float v) { return log(v) * 0.4342944819; }
// 일반 영상(Rec.709, 감마 2.4) → 선형 → LUT 가 기대하는 로그. 1 시네온 2 LogC3 3 S-Log3 4 V-Log 5 Log3G10 (리졸브 변환 LUT 와 대조함)
vec3 lutEnc(vec3 c) {
  if (u_lutIn == 0) return c;
  vec3 lin = max(pow(max(c, 0.0), vec3(2.4)) * u_lutGain * u_lutM, 0.0), o;
  for (int i = 0; i < 3; i++) {
    float v = lin[i];
    if (u_lutIn == 1) o[i] = (685.0 + 300.0 * lg10(v * (1.0 - 0.0107977) + 0.0107977)) / 1023.0;
    else if (u_lutIn == 2) o[i] = v > 0.010591 ? 0.247190 * lg10(5.555556 * v + 0.052272) + 0.385537 : 5.367655 * v + 0.092809;
    else if (u_lutIn == 3) o[i] = v >= 0.01125 ? (420.0 + lg10((v + 0.01) / 0.19) * 261.5) / 1023.0 : (v * (171.2102946929 - 95.0) / 0.01125 + 95.0) / 1023.0;
    else if (u_lutIn == 4) o[i] = v < 0.01 ? 5.6 * v + 0.125 : 0.241514 * lg10(v + 0.00873) + 0.598206;
    else o[i] = 0.224282 * lg10((v + 0.01) * 155.975327 + 1.0);
  }
  return o;
}
vec3 lutApply(vec3 c) {
  vec3 t = clamp((lutEnc(c) - u_lutMin) / (u_lutMax - u_lutMin), 0.0, 1.0);
  return texture(u_lut, t * ((u_lutN - 1.0) / u_lutN) + 0.5 / u_lutN).rgb;
}
vec3 shoulder(vec3 x, float r) {
  // 무릎 k = 1-0.4r 위로 부드럽게 눌러 1+0.8r 에서 1 이 되게 (t 기준 끝점 3)
  float k = 1.0 - 0.4 * r;
  vec3 t = max(x - k, 0.0) / (1.0 - k);
  vec3 y = k + (1.0 - k) * t * (1.0 + t / 9.0) / (1.0 + t);
  return mix(x, min(y, vec3(1.0)), step(vec3(k), x));
}
float sat3(vec3 x) { return max(max(x.r, x.g), x.b) - min(min(x.r, x.g), x.b); }
void main() {
  vec3 x = texelFetch(u_c, ivec2(gl_FragCoord.xy), 0).rgb;
  if (u_difAmt > 0.0) { vec3 b = texture(u_dif, v_uv * u_difS).rgb; x = x * (1.0 - u_difAmt) + max(x, b) * u_difAmt; }
  if (u_roll > 0.0) x = shoulder(x, u_roll);
  x *= u_wb;
  if (u_lutPos == 1) x = mix(x, lutApply(x), u_lutMix);
  x = x * u_gain + u_lift * (1.0 - x);
  x = pow(max(clamp(x, 0.0, 1.0), vec3(1e-7)), u_gamma);
  float l = dot(x, LUMA);
  x = vec3(l) + (x - vec3(l)) * u_sat;
  if (u_vib != 0.0) x = vec3(l) + (x - vec3(l)) * (1.0 + u_vib * (1.0 - clamp(sat3(x) * 1.6, 0.0, 1.0)));
  x = x + u_sh * (1.0 - l) * (1.0 - l) + u_hi * l * l;
  x = (x - 0.5) * u_con + 0.5;
  if (u_scurve != 0.0) { float l2 = dot(x, LUMA); x += (l2 * l2 * (3.0 - 2.0 * l2) - l2) * u_scurve; }
  // 필름 압축: 밝은 쪽은 세게, 어두운 쪽은 약하게 가운데로 모은다 (어두운 영상이 회색으로 뜨지 않게)
  if (u_comp > 0.0) { float l3 = dot(x, LUMA), dl = l3 - 0.5; x += 0.5 + dl / (1.0 + u_comp * (dl > 0.0 ? 1.0 : 0.35) * abs(dl) * 2.0) - l3; }
  if (u_hiDesat > 0.0) { float l4 = dot(x, LUMA); x = mix(x, vec3(l4), smoothstep(0.55, 1.0, l4) * u_hiDesat); }
  if (u_density > 0.0) x *= 1.0 - u_density * clamp(sat3(x), 0.0, 1.0) * 0.35;
  // 흑백: 렌즈 필터 = 채널 섞는 비율, 인화 색 = 그림자·중간에 더 물드는 색
  if (u_bw > 0.0) {
    float lb = dot(x, u_bwW); vec3 m = vec3(lb);
    if (u_toneAmt > 0.0) m *= mix(vec3(1.0), u_tone, u_toneAmt * (1.0 - 0.5 * clamp(lb, 0.0, 1.0)));
    x = mix(x, m, u_bw);
  }
  if (u_lutPos == 2) x = mix(x, lutApply(clamp(x, 0.0, 1.0)), u_lutMix);
  o = vec4(x, 1.0);
}`,
  // 정규분포 흰 잡음 4채널 (r = 흑백 입자, g·b = 색 입자)
  noise: HEAD + `
uniform uint u_seed;
float u01(uint h) { return (float(h >> 8) + 0.5) / 16777216.0; }
void main() {
  uvec2 p = uvec2(gl_FragCoord.xy);
  uint h = hsh(p.x + hsh(p.y + hsh(u_seed)));
  float a = u01(h), b = u01(hsh(h ^ 0x9e3779b9u)), c = u01(hsh(h + 0x632be5abu)), d = u01(hsh(h ^ 0x85ebca6bu));
  float r1 = sqrt(-2.0 * log(a)), r2 = sqrt(-2.0 * log(c));
  o = vec4(r1 * cos(6.2831853 * b), r1 * sin(6.2831853 * b), r2 * cos(6.2831853 * d), r2 * sin(6.2831853 * d));
}`,
  finish: HEAD + `
uniform sampler2D u_img; uniform sampler2D u_src; uniform sampler2D u_noise;
uniform vec2 u_res; uniform float u_s; uniform float u_split; uniform int u_orig;
uniform float u_topAmt; uniform float u_topLen; uniform vec3 u_topCol;
uniform float u_vigAmt; uniform float u_vigSoft; uniform float u_ca;
uniform float u_bleed; uniform float u_soft; uniform float u_scan; uniform float u_track;
uniform int u_gOn; uniform float u_gAmt; uniform float u_gNorm; uniform float u_gK; uniform float u_gRough; uniform float u_gColor;
uniform sampler2D u_noise2; uniform float u_gNorm2;
uniform float u_dust; uniform float u_scratch; uniform float u_lb;
uniform float u_time; uniform float u_frame; uniform uint u_seed; uniform float u_mix; uniform sampler2D u_base;
vec3 img(vec2 px) { return texture(u_img, px / u_res).rgb; }
vec3 base(vec2 px) {
  vec3 c = img(px);
  if (u_soft > 0.0) {
    float s = u_soft;
    c = (c * 2.0 + img(px + vec2(s, 0.0)) + img(px - vec2(s, 0.0)) + img(px + vec2(0.0, s * 0.5)) + img(px - vec2(0.0, s * 0.5))) / 6.0;
  }
  if (u_bleed > 0.0) {
    vec3 acc = vec3(0.0); float ws = 0.0;
    for (int i = -2; i <= 6; i++) { float w = 1.0 - abs(float(i) - 2.0) / 5.0; acc += img(px + vec2(float(i) * u_bleed / 4.0, 0.0)) * w; ws += w; }
    vec3 a = acc / ws;
    c = vec3(dot(c, LUMA)) + (a - vec3(dot(a, LUMA)));
  }
  return c;
}
vec3 look(vec2 px) {
  vec3 c = base(px);
  if (u_topAmt > 0.0) {
    float g = clamp((px.y - 0.5) / max(u_res.y - 1.0, 1.0), 0.0, 1.0);
    g = pow(clamp(1.0 - (1.0 - g) / u_topLen, 0.0, 1.0), 1.6);
    c = c + g * u_topAmt * u_topCol * (1.0 - c);
  }
  if (u_vigAmt != 0.0) {
    vec2 d = (px - 0.5 - u_res * 0.5) / (u_res * 0.5);
    float r = length(d) / sqrt(2.0);
    c *= 1.0 - u_vigAmt * pow(clamp((r - (1.0 - u_vigSoft)) / u_vigSoft, 0.0, 1.0), 1.6);
  }
  return c;
}
float gauss(vec2 px, uint salt) {
  uint h = hsh(uint(px.x) + hsh(uint(px.y) + hsh(u_seed ^ salt)));
  float a = (float(h >> 8) + 0.5) / 16777216.0, b = float(hsh(h) >> 8) / 16777216.0;
  return sqrt(-2.0 * log(a)) * cos(6.2831853 * b);
}
void main() {
  if (u_orig == 1 || (u_split >= 0.0 && gl_FragCoord.x < u_split * u_res.x)) {
    o = vec4(texture(u_src, vec2(v_uv.x, 1.0 - v_uv.y)).rgb, 1.0); return;
  }
  vec2 px = gl_FragCoord.xy;
  float band = 0.0, line = 0.0;
  if (u_track > 0.0) {
    line = floor(px.y / max(1.0, u_res.y / 480.0));
    px.x += (h1(line, u_frame) - 0.5) * u_track * 1.2 * u_s;
    float bandY = fract(u_time * 0.11 + 0.3) * 1.4 - 0.2;
    band = smoothstep(0.045, 0.0, abs(1.0 - px.y / u_res.y - bandY)) * u_track;
    px.x += band * (h1(line, u_frame + 9.0) - 0.3) * 24.0 * u_s;
  }
  vec3 col;
  if (u_ca > 0.0) {
    vec2 d = (px - 0.5 - u_res * 0.5) / (u_res * 0.5);
    col = vec3(look(px - d * u_ca).r, look(px).g, look(px + d * u_ca).b);
  } else col = look(px);
  if (u_dust > 0.0) {
    for (int i = 0; i < 24; i++) {
      float fi = float(i);
      if (h1(fi, u_frame + 0.5) > u_dust * 0.6) continue;
      vec2 pos = vec2(h1(fi, u_frame + 1.5), h1(fi, u_frame + 2.5)) * u_res;
      float sz = h1(fi, u_frame + 3.5);
      float rr = max((sz < 0.85 ? mix(1.6, 4.0, sz / 0.85) : mix(5.0, 12.0, (sz - 0.85) / 0.15)) * u_s, 0.9);
      float an = h1(fi, u_frame + 4.5) * 6.2832;
      vec2 d = px - pos; d = vec2(cos(an) * d.x - sin(an) * d.y, sin(an) * d.x + cos(an) * d.y);
      d.x *= mix(0.35, 1.0, h1(fi, u_frame + 5.5));
      float m = smoothstep(1.0, 0.45, length(d) / max(rr, 0.5));
      if (m <= 0.0) continue;
      col = h1(fi, u_frame + 6.5) < 0.7 ? col * (1.0 - 0.85 * m) : mix(col, vec3(0.92), 0.8 * m);
    }
  }
  if (u_scratch > 0.0) {
    for (int k = 0; k < 3; k++) {
      float fk = float(k);
      float seg = floor(u_frame / 9.0 + fk * 0.37) + fk * 31.0;
      if (h1(seg, 11.0) > u_scratch * 0.7) continue;
      float x0 = h1(seg, 12.0) * u_res.x + (h1(u_frame, 13.0 + fk) - 0.5) * 3.0 * u_s;
      float w = max((1.0 + h1(seg, 14.0) * 1.5) * u_s, 0.9);
      float along = 0.55 + 0.45 * sin(px.y / u_res.y * (6.0 + 10.0 * h1(seg, 15.0)) + h1(seg, 16.0) * 6.28);
      float m = smoothstep(w, 0.0, abs(px.x - x0)) * along * (h1(u_frame, 17.0 + fk) < 0.85 ? 1.0 : 0.0);
      col = h1(seg, 18.0) < 0.6 ? mix(col, vec3(0.95), m * 0.55) : col * (1.0 - m * 0.6);
    }
  }
  if (u_gOn == 1) {
    // 고운 입자 + 굵은 덩어리 (같은 세기가 되게 정규화)
    vec4 n = texelFetch(u_noise, ivec2(gl_FragCoord.xy), 0) * u_gNorm;
    vec4 nc = texture(u_noise2, v_uv) * u_gNorm2;
    n = (n * 0.85 + nc * 0.45) / 0.9618;
    float m = n.r;
    if (u_gRough > 0.0) { float r = u_gRough; m = (m * (1.0 - r) + gauss(gl_FragCoord.xy, 77u) * r) / sqrt((1.0 - r) * (1.0 - r) + r * r); }
    // 컬러 필름은 세 감광층이 따로 입자를 가진다 — 파랑(가장 빠른 층)이 가장 거칠다. 색 입자 = 층마다 따로인 잡음과 섞는 양
    float cg = clamp(u_gColor, 0.0, 1.0);
    vec3 per = vec3(n.g, n.b, n.a) * vec3(1.0, 0.85, 1.3);
    vec3 nn = (vec3(m) * (1.0 - cg) + per * cg) / sqrt((1.0 - cg) * (1.0 - cg) + cg * cg);
    // 밝기별 세기: 중간톤에서 가장 잘 보이고, 아주 어두운 곳·하얀 곳에선 줄어든다 (인화 곡선의 기울기)
    float l = dot(col, LUMA);
    float w = smoothstep(0.0, 0.1, l) * (0.42 + 0.58 * pow(max(1.0 - abs(l - 0.45) / 0.55, 0.0), 1.2));
    col += nn * max(w, 0.12) * u_gAmt * u_gK;
  }
  if (band > 0.0) {
    float sp = h1(floor(px.x / (2.0 * u_s)) + line * 7.0, u_frame);
    col = mix(col, sp > 0.8 ? vec3(1.0) : col, band * 0.6) + band * 0.06;
  }
  if (u_scan > 0.0) col *= 1.0 - u_scan * 0.5 * (0.5 + 0.5 * cos(6.2832 * gl_FragCoord.y / max(2.0, u_res.y / 240.0)));
  if (u_lb > 0.0 && u_lb > u_res.x / u_res.y + 0.001) {
    float bar = (u_res.y - u_res.x / u_lb) * 0.5;
    if (gl_FragCoord.y < bar || gl_FragCoord.y > u_res.y - bar) col = vec3(0.0);
  }
  // 효과 세기: 원본과 섞는다
  // (노출·로그 풀기까지 한 바탕 A 와 섞어서 로그 영상도 맞는 색으로)
  if (u_mix < 0.999) col = mix(texelFetch(u_base, ivec2(gl_FragCoord.xy), 0).rgb, col, u_mix);
  o = vec4(clamp(col, 0.0, 1.0), 1.0);
}`,
};

function hash1(i, s) {
  let x = (Math.imul(i | 0, 374761393) + Math.imul(s | 0, 668265263)) | 0;
  x = Math.imul(x ^ (x >>> 13), 1274126177); x ^= x >>> 16;
  return (x >>> 0) / 4294967295;
}
function vnoise(t, s) {
  const i = Math.floor(t), f = t - i, u = f * f * (3 - 2 * f);
  const a = hash1(i, s), b = hash1(i + 1, s);
  return (a + (b - a) * u) * 2 - 1;
}

/* 흐림 계획: σ(렌더 px) → 축소 배율 f, 낮은 해상도 σ, 반경.
   상자 축소(분산 (f²-1)/12)와 쌍선형 확대(분산 f²/6)를 빼서 전체 흐림이 σ 가 되게 맞춘다. */
function blurPlan(sigma) {
  let f = 1;
  while (f < 8 && sigma / (f * 2) >= 4) f *= 2;
  const v = sigma * sigma - (f > 1 ? (f * f - 1) / 12 + f * f / 6 : 0);
  const sl = Math.sqrt(Math.max(v, 0.04)) / f;
  return { f, sigma: sl, rad: sl < 0.2 ? 0 : Math.min(64, Math.ceil(3.5 * sl)) };
}

/* 그레인: 가로 1920 기준 σ 의 입자를 지금 해상도로 줄여 본 것과 같은 굵기·세기가 되게 */
function grainPlan(sigmaRef, s) {
  let sig, k = 1;
  if (s < 1) {
    const tot = Math.sqrt(sigmaRef * sigmaRef + (1 / (s * s) - 1) / 12);
    k = sigmaRef / tot; sig = tot * s;
  } else sig = sigmaRef * s;
  if (sig < 0.2) return { rad: 0, sigma: sig, norm: 1, k };
  const rad = Math.min(48, Math.ceil(3.5 * sig));
  let sum = 0, sq = 0; const w = [];
  for (let d = -rad; d <= rad; d++) { const v = Math.exp(-0.5 * d * d / (sig * sig)); w.push(v); sum += v; }
  for (const v of w) sq += (v / sum) * (v / sum);
  return { rad, sigma: sig, norm: 1 / sq, k };   // 2D 분리 흐림의 표준편차 = Σw²
}

/* 카메라 로그: 셰이더 번호와 카메라 색역 → Rec.709 행렬(행 우선, D65) */
const LOGS = {
  slog3: { id: 1, m: [1.6269474, -0.5401385, -0.0868089, -0.1785155, 1.4179409, -0.2394254, -0.0444361, -0.1959200, 1.2403561] },  // S-Gamut3.Cine
  logc3: { id: 2, m: [1.617523, -0.537287, -0.080237, -0.070573, 1.334613, -0.264040, -0.021102, -0.226954, 1.248056] },            // ARRI Wide Gamut 3
  vlog:  { id: 3, m: [1.806576, -0.695697, -0.110879, -0.170090, 1.305955, -0.135865, -0.025206, -0.154468, 1.179674] },            // V-Gamut
  flog:  { id: 4, m: [1.660491, -0.587641, -0.072850, -0.124550, 1.132900, -0.008349, -0.018151, -0.100579, 1.118730] },            // F-Gamut (= Rec.2020)
};
const BW_FILTERS = { neutral: [0.299, 0.587, 0.114], red: [0.7, 0.3, 0.0], orange: [0.55, 0.4, 0.05], yellow: [0.42, 0.5, 0.08], green: [0.2, 0.7, 0.1], blue: [0.1, 0.3, 0.6] };
const BW_TONES = { none: [1, 1, 1], sepia: [1.14, 0.98, 0.76], selenium: [0.97, 0.94, 1.07], cyan: [0.72, 0.94, 1.3], warm: [1.07, 1.0, 0.9] };
const IDENT3 = [1, 0, 0, 0, 1, 0, 0, 0, 1];
function inv3(m) {   // 행 우선 3×3 역행렬
  const [a, b, c, d, e, f, g, h, i] = m, A = e * i - f * h, B = -(d * i - f * g), C = d * h - e * g, det = a * A + b * B + c * C;
  return [A, -(b * i - c * h), b * f - c * e, B, a * i - c * g, -(a * f - c * d), C, -(a * h - b * g), a * e - b * d].map(v => v / det);
}
/* 직접 불러온 LUT 의 입력 방식 → 셰이더 번호와 709 → 카메라 색역 행렬 */
const FILE_LUT_IN = { display: [0, IDENT3], cineon: [1, IDENT3], logc3: [2, inv3(LOGS.logc3.m)], slog3: [3, inv3(LOGS.slog3.m)], vlog: [4, inv3(LOGS.vlog.m)] };

/* 필름 규격(mm) 을 다른 효과 값에 얹는다: 입자 굵기·양, 흔들림, 깜빡임, 먼지, 비네트 + 흐림.
   「먼지·스크래치 끄기」면 어디서 왔든(필름 크기·필름 종류) 먼지·스크래치·깜빡임을 모두 뺀다. */
function applyGauge(e, st) {
  const G = FTS.GAUGES[e.gauge];
  if (st && st.p && st.p.marks === 'off') e.dust = e.scratch = e.flicker = 0;
  if (!G || !(e.gaugeAmt > 0)) return { soft: 0 };
  const k = e.gaugeAmt, lerp = m => 1 + (m - 1) * k;
  // 그레인을 따로 켜 두지 않았으면 규격의 기본 입자를 깐다 (직접 0 으로 내린 건 존중)
  if (!(st && st.on && st.on.grain) && !(e.grainAmt > 0)) { e.grainAmt = 0.012; e.grainSize = 0.9; }
  e.grainAmt *= lerp(G.grainAmt); e.grainSize *= lerp(G.grainSize);
  e.weaveAmt = Math.max(e.weaveAmt, G.weave * k);
  if (!(st && st.p && st.p.marks === 'off')) {
    e.flicker = Math.max(e.flicker, G.flicker * k);
    e.dust = Math.max(e.dust, G.dust * k);
    e.scratch = Math.max(e.scratch, G.scratch * k);
  }
  e.vigAmt += G.vig * k;
  return { soft: G.soft * k };
}

/* 결과 크기에 따른 효과 배율 (가로 1920 × 세로 1080 기준) */
function lookScale(W, H) {
  const L = Math.max(W, H), S = Math.min(W, H);
  return Math.max(L / 1920, S / 1080);
}

class FilmRenderer {
  constructor(canvas) {
    const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, depth: false, stencil: false,
      premultipliedAlpha: false, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
    if (!gl) throw new Error('이 브라우저에서 WebGL2를 쓸 수 없어요. 최신 크롬이나 엣지로 열어 주세요.');
    this.gl = gl; this.canvas = canvas;
    this.floatOK = !!gl.getExtension('EXT_color_buffer_float');
    this.P = {};
    for (const k in FS) this.P[k] = this._program(FS[k]);
    this.vao = gl.createVertexArray();
    gl.bindVertexArray(this.vao);
    const vb = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vb);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    this.T = {};
    this.src = this._tex2d(1, 1, gl.RGBA8, gl.RGBA, gl.UNSIGNED_BYTE);
    this.dummy = this._tex2d(1, 1, gl.RGBA8, gl.RGBA, gl.UNSIGNED_BYTE);
    this.srcW = 1; this.srcH = 1;
    this.setLut(null);
    this.noiseKey = '';
  }

  _program(fs) {
    const gl = this.gl;
    const sh = (type, code) => {
      const s = gl.createShader(type); gl.shaderSource(s, code); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error('셰이더 오류: ' + gl.getShaderInfoLog(s));
      return s;
    };
    const p = gl.createProgram();
    gl.attachShader(p, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fs));
    gl.bindAttribLocation(p, 0, 'a_pos'); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error('셰이더 연결 오류: ' + gl.getProgramInfoLog(p));
    return { p, loc: {} };
  }

  _tex2d(w, h, internal, format, type) {
    const gl = this.gl, t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texImage2D(gl.TEXTURE_2D, 0, internal, w, h, 0, format, type, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return t;
  }

  _target(name, w, h) {
    const gl = this.gl;
    let t = this.T[name];
    if (t && t.w === w && t.h === h) return t;
    if (t) { gl.deleteTexture(t.tex); gl.deleteFramebuffer(t.fbo); }
    const half = this.floatOK;
    const tex = this._tex2d(w, h, half ? gl.RGBA16F : gl.RGBA8, gl.RGBA, half ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE);
    const fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    if (half && gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
      this.floatOK = false; gl.deleteTexture(tex); gl.deleteFramebuffer(fbo); delete this.T[name];
      return this._target(name, w, h);
    }
    t = this.T[name] = { tex, fbo, w, h };
    return t;
  }

  _pass(prog, out, w, h, u) {
    const gl = this.gl, P = this.P[prog];
    gl.useProgram(P.p);
    gl.bindFramebuffer(gl.FRAMEBUFFER, out ? this._target(out, w, h).fbo : null);
    gl.viewport(0, 0, w, h);
    const L = n => (n in P.loc ? P.loc[n] : (P.loc[n] = gl.getUniformLocation(P.p, n)));
    let unit = 0;
    for (const n in u.tex || {}) {
      const v = u.tex[n];
      gl.activeTexture(gl.TEXTURE0 + unit);
      if (n === 'u_lut') gl.bindTexture(gl.TEXTURE_3D, v);
      else gl.bindTexture(gl.TEXTURE_2D, typeof v === 'string' ? this.T[v].tex : v);
      gl.uniform1i(L(n), unit++);
    }
    for (const n in u.f || {}) gl.uniform1f(L(n), u.f[n]);
    for (const n in u.v2 || {}) gl.uniform2fv(L(n), u.v2[n]);
    for (const n in u.v3 || {}) gl.uniform3fv(L(n), u.v3[n]);
    for (const n in u.i || {}) gl.uniform1i(L(n), u.i[n]);
    for (const n in u.i2 || {}) gl.uniform2iv(L(n), u.i2[n]);
    for (const n in u.ui || {}) gl.uniform1ui(L(n), u.ui[n]);
    for (const n in u.m3 || {}) gl.uniformMatrix3fv(L(n), false, u.m3[n]);   // 행 우선으로 넘기고 셰이더에서 v * M
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  /* video 요소 · img · VideoFrame · canvas 를 원본 텍스처로 (크롬은 영상 프레임을 8비트로 넘겨 주므로 8비트) */
  upload(source, w, h) {
    const gl = this.gl;
    gl.bindTexture(gl.TEXTURE_2D, this.src);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, gl.RGBA, gl.UNSIGNED_BYTE, source);
    this.srcW = w; this.srcH = h;
  }

  _lut3d(n, rgb) {   // rgb: 빨강이 가장 빨리 바뀌는 순서의 [r,g,b…]
    const gl = this.gl, rgba = new Float32Array(n * n * n * 4);
    for (let i = 0; i < n * n * n; i++) { rgba[i * 4] = rgb[i * 3]; rgba[i * 4 + 1] = rgb[i * 3 + 1]; rgba[i * 4 + 2] = rgb[i * 3 + 2]; rgba[i * 4 + 3] = 1; }
    const t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_3D, t);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage3D(gl.TEXTURE_3D, 0, gl.RGBA16F, n, n, n, 0, gl.RGBA, gl.FLOAT, rgba);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    for (const p of [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T, gl.TEXTURE_WRAP_R]) gl.texParameteri(gl.TEXTURE_3D, p, gl.CLAMP_TO_EDGE);
    return t;
  }

  /* 직접 불러온 LUT: lut = { size, data: Float32Array(rgb…), min:[3], max:[3] } 또는 null */
  setLut(lut) {
    if (this.lutTex) this.gl.deleteTexture(this.lutTex);
    if (!lut) lut = { size: 2, data: new Float32Array([0,0,0, 1,0,0, 0,1,0, 1,1,0, 0,0,1, 1,0,1, 0,1,1, 1,1,1]), min: [0, 0, 0], max: [1, 1, 1], identity: true };
    this.lutTex = this._lut3d(lut.size, lut.data); this.lut = lut;
  }

  /* 지금 쓸 LUT: 직접 불러온 파일 또는 내장(리졸브) LUT. 없으면 null */
  _activeLut(e) {
    if (!(e.lutMix > 0)) return null;
    if (e.lutSrc === 'file') {
      if (!this.lut || this.lut.identity) return null;
      const [id, m] = FILE_LUT_IN[e.lutIn] || FILE_LUT_IN.display;
      return { tex: this.lutTex, size: this.lut.size, min: this.lut.min, max: this.lut.max, in: id, m, gain: 1 };
    }
    const d = (window.FTS_LUTS || {})[e.lutSrc];
    if (!d) return null;
    this.builtin = this.builtin || {};
    if (!this.builtin[e.lutSrc]) {   // base64 → 16비트 → 0~1
      const bin = atob(d.b64), u8 = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
      const u16 = new Uint16Array(u8.buffer), f = new Float32Array(u16.length);
      for (let i = 0; i < u16.length; i++) f[i] = u16[i] / 65535;
      this.builtin[e.lutSrc] = this._lut3d(d.size, f);
    }
    return { tex: this.builtin[e.lutSrc], size: d.size, min: [0, 0, 0], max: [1, 1, 1], in: d.in, m: d.m, gain: d.gain };
  }

  _blurChain(name, srcName, W, H, sigma, mode, thr) {
    const pl = blurPlan(sigma), w = Math.ceil(W / pl.f), h = Math.ceil(H / pl.f);
    this._pass('down', name + '0', w, h, { tex: { u_in: srcName }, i: { u_f: pl.f, u_mode: mode }, f: { u_thr: thr || 0 } });
    if (pl.rad > 0) {
      this._pass('blur', name + '1', w, h, { tex: { u_in: name + '0' }, i2: { u_dir: [1, 0] }, f: { u_sigma: pl.sigma }, i: { u_rad: pl.rad } });
      this._pass('blur', name + '0', w, h, { tex: { u_in: name + '1' }, i2: { u_dir: [0, 1] }, f: { u_sigma: pl.sigma }, i: { u_rad: pl.rad } });
    }
    return [W / (pl.f * w), H / (pl.f * h)];
  }

  /* st = {on, p}, o = { time(초), split(0~1, 없으면 -1), original(bool), still(bool) } */
  /* st 로 그린다. o.blend = { state, amount } 면 그 톤과 amount 만큼 섞는다 (구간 사이 부드러운 전환) */
  render(st, o) {
    const b = o.blend;
    if (b && b.state && b.amount > 0.001 && b.amount < 0.999) {
      const W = this.canvas.width, H = this.canvas.height;
      this._render(st, o, 'MXA');
      this._render(b.state, o, 'MXB');
      this._pass('mix', null, W, H, { tex: { u_a: 'MXA', u_b: 'MXB' }, f: { u_t: b.amount } });
      return;
    }
    this._render(b && b.amount >= 0.999 ? b.state : st, o, null);
  }

  _render(st, o, out) {
    const gl = this.gl, W = this.canvas.width, H = this.canvas.height;
    const e = FTS.effective(st), s = lookScale(W, H), gauge = applyGauge(e, st);
    const time = o.time || 0, frame = Math.floor(time * 24 + 1e-4);
    gl.bindVertexArray(this.vao);
    gl.disable(gl.BLEND);

    // 준비: 노출 · 깜빡임 · 게이트 위브
    let off = [0, 0], zoom = 1;
    if (e.weaveAmt > 0) {
      const a = e.weaveAmt * s, t = time * e.weaveSpeed;
      const ox = a * 0.5 * (0.6 * vnoise(t * 3, 11) + 0.4 * (hash1(frame, 12) * 2 - 1));
      const oy = a * (0.6 * vnoise(t * 2.3, 13) + 0.4 * (hash1(frame, 14) * 2 - 1));
      off = [ox / W, oy / H]; zoom = 1 + 2.4 * a / Math.min(W, H);
    }
    let gain = Math.pow(2, e.exposure);
    if (e.flicker > 0) gain *= 1 + e.flicker * 0.25 * (0.6 * (hash1(frame, 9) * 2 - 1) + 0.4 * vnoise(time * 2, 5));
    const log = LOGS[e.logType];
    this._pass('prep', 'A', W, H, { tex: { u_src: this.src }, v2: { u_off: off },
      f: { u_zoom: zoom, u_gain: gain, u_linGain: 0.6 * gain },          // 로그: 18% 회색이 화면 0.41 쯤 오게 0.6 배
      i: { u_log: log ? log.id : 0, u_legal: e.logRange === 'full' ? 0 : 1 }, m3: { u_gamut: log ? log.m : IDENT3 } });
    let cur = 'A';
    if (gauge.soft * s > 0.2) {   // 작은 필름일수록 화면이 무르다
      const ls = this._blurChain('gs', cur, W, H, gauge.soft * s, 0, 0);
      this._pass('copy', 'A2', W, H, { tex: { u_in: 'gs0' }, v2: { u_ls: ls } });
      cur = 'A2';
    }

    if (e.bloomAmt > 0) {
      const ls = this._blurChain('bl', cur, W, H, e.bloomRad * s, 1, e.bloomThr);
      const w = e.bloomWarm, tint = [1, 1 - 0.18 * w, 1 - 0.4 * w];
      this._pass('bloom', 'B', W, H, { tex: { u_a: cur, u_low: 'bl0' }, v2: { u_ls: ls }, f: { u_amt: e.bloomAmt }, v3: { u_tint: tint } });
      cur = 'B';
    }
    if (e.halAmt > 0) {   // 좁은 번짐(가장자리에 붙은 붉은 띠)과 넓은 번짐(옅은 꼬리)
      const ls = this._blurChain('ha', cur, W, H, e.halRad * 0.4 * s, 3, e.halThr);
      const ls2 = this._blurChain('hb', cur, W, H, e.halRad * 1.6 * s, 3, e.halThr);
      this._pass('halation', 'C', W, H, { tex: { u_b: cur, u_low: 'ha0', u_low2: 'hb0' }, v2: { u_ls: ls, u_ls2: ls2 },
        f: { u_amt: e.halAmt * 1.6, u_thr: e.halThr }, v3: { u_col: [1.0, 0.3, 0.06] } });
      cur = 'C';
    }
    let difS = [1, 1], difTex = this.dummy;
    if (e.difAmt > 0) { difS = this._blurChain('df', cur, W, H, e.difRad * s, 0, 0); difTex = 'df0'; }

    // 색온도: 밝기는 유지하고 빨강·파랑 / 초록 비율만
    let wb = [1 + 0.12 * e.temp, 1 - 0.08 * e.tint, 1 - 0.12 * e.temp];
    const wl = wb[0] * 0.299 + wb[1] * 0.587 + wb[2] * 0.114; wb = wb.map(v => v / wl);
    const lut = this._activeLut(e), L = lut || { tex: this.lutTex, size: this.lut.size, min: this.lut.min, max: this.lut.max, in: 0, m: IDENT3, gain: 1 };
    this._pass('grade', 'G', W, H, {
      tex: { u_c: cur, u_dif: difTex, u_lut: L.tex },
      v2: { u_difS: difS },
      f: { u_difAmt: e.difAmt, u_roll: e.rolloff, u_sat: e.sat, u_vib: e.vib, u_con: e.contrast, u_scurve: e.scurve,
        u_comp: e.comp, u_hiDesat: e.hiDesat, u_density: e.density, u_lutMix: lut ? e.lutMix : 0, u_lutN: L.size, u_lutGain: L.gain,
        u_bw: e.bwAmt, u_toneAmt: e.bwTone === 'none' ? 0 : e.bwToneAmt },
      v3: { u_wb: wb, u_lift: e.lift, u_gain: e.gain, u_gamma: e.gamma, u_sh: e.shadow, u_hi: e.high,
        u_lutMin: L.min, u_lutMax: L.max,
        u_bwW: BW_FILTERS[e.bwFilter] || BW_FILTERS.neutral, u_tone: BW_TONES[e.bwTone] || BW_TONES.none },
      i: { u_lutPos: lut ? (e.lutPos === 'before' ? 1 : 2) : 0, u_lutIn: L.in },
      m3: { u_lutM: L.m },
    });

    // 그레인 잡음: 매 프레임 새로 (멈춰 있으면 그대로)
    const seed = o.seed !== undefined ? o.seed : (Math.floor(time * 1000) + 1);
    let gp = null;
    if (e.grainAmt > 0) {
      gp = grainPlan(e.grainSize, s);
      const key = [W, H, seed, gp.rad, gp.sigma.toFixed(4)].join('|');
      gp.c = this.noiseC || grainPlan(e.grainSize * 1.2, s);
      if (key !== this.noiseKey) {
        this._pass('noise', 'N0', W, H, { ui: { u_seed: (seed * 2654435761) >>> 0 } });
        if (gp.rad > 0) {
          this._pass('blur', 'N1', W, H, { tex: { u_in: 'N0' }, i2: { u_dir: [1, 0] }, f: { u_sigma: gp.sigma }, i: { u_rad: gp.rad } });
          this._pass('blur', 'N0', W, H, { tex: { u_in: 'N1' }, i2: { u_dir: [0, 1] }, f: { u_sigma: gp.sigma }, i: { u_rad: gp.rad } });
        }
        // 입자 덩어리: 반 해상도에서 2.4 배 굵게 (실제 필름 입자는 크기가 고르지 않고 뭉친다)
        const W2 = Math.max(2, W >> 1), H2 = Math.max(2, H >> 1);
        gp.c = grainPlan(e.grainSize * 1.2, s);
        this._pass('noise', 'NC0', W2, H2, { ui: { u_seed: (seed * 2246822519 + 77) >>> 0 } });
        if (gp.c.rad > 0) {
          this._pass('blur', 'NC1', W2, H2, { tex: { u_in: 'NC0' }, i2: { u_dir: [1, 0] }, f: { u_sigma: gp.c.sigma }, i: { u_rad: gp.c.rad } });
          this._pass('blur', 'NC0', W2, H2, { tex: { u_in: 'NC1' }, i2: { u_dir: [0, 1] }, f: { u_sigma: gp.c.sigma }, i: { u_rad: gp.c.rad } });
        }
        this.noiseKey = key; this.noiseC = gp.c;
      }
    }
    const tw = e.topWarm;
    this._pass('finish', out, W, H, {
      tex: { u_img: 'G', u_src: this.src, u_noise: gp ? 'N0' : this.dummy, u_noise2: gp ? 'NC0' : this.dummy, u_base: 'A' },
      v2: { u_res: [W, H] },
      f: { u_s: s, u_split: o.split === undefined ? -1 : o.split, u_topAmt: e.topAmt, u_topLen: e.topLen,
        u_vigAmt: e.vigAmt, u_vigSoft: e.vigSoft, u_ca: e.caPx * s, u_bleed: e.vhsBleed * s, u_soft: e.vhsSoft * s,
        u_scan: e.vhsScan, u_track: e.vhsTrack, u_gAmt: e.grainAmt, u_gNorm: gp ? gp.norm : 1, u_gK: gp ? gp.k : 1,
        u_gRough: e.grainRough, u_gColor: e.grainColor, u_gNorm2: gp && gp.c ? gp.c.norm : 1, u_dust: e.dust, u_scratch: e.scratch, u_lb: e.lbRatio,
        u_time: time, u_frame: frame, u_mix: e.mixAll === undefined ? 1 : e.mixAll },
      v3: { u_topCol: [1, 1 - 0.15 * tw, 1 - 0.4 * tw] },
      i: { u_orig: o.original ? 1 : 0, u_gOn: gp ? 1 : 0 },
      ui: { u_seed: (seed * 2246822519) >>> 0 },
    });
  }

  /* 화면 픽셀(위쪽 행부터, RGBA 8비트) */
  readPixels() {
    const gl = this.gl, W = this.canvas.width, H = this.canvas.height, buf = new Uint8Array(W * H * 4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.readPixels(0, 0, W, H, gl.RGBA, gl.UNSIGNED_BYTE, buf);
    const out = new Uint8Array(W * H * 4), row = W * 4;
    for (let y = 0; y < H; y++) out.set(buf.subarray((H - 1 - y) * row, (H - y) * row), y * row);
    return out;
  }
}

window.FilmRenderer = FilmRenderer;
window.FTS_lookScale = lookScale;
})();
