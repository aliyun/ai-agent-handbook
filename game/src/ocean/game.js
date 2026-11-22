import { Ocean, relation, PLAYER_COLOR, LEVELS, CREATURES, LOOPIE_MAX_POWER_SIZE, INITIAL_POWER } from './core.mjs';
import { createOceanMusic } from './music.mjs';
// Third chapter of /games/. Inside audit-sea.html (?host=1) the host keeps this round alive while the map is open;
// a direct, non-test visit is redirected to that host by the page itself.
const HOSTED = parent !== window && new URLSearchParams(location.search).get('host') === '1';
const MAP_URL = 'index.html';
const ASSET_URLS = window.__OCEAN_ASSETS;
let hostSuspended = HOSTED;
const $ = id => document.getElementById(id), canvas = $('sea'), ctx = canvas.getContext('2d', { alpha: false });
const assets = {}, overlays = ['loader', 'home', 'paused', 'success', 'results'];
const SUCCESS_POWER = 300; // Loopie's displayed power (强弱分); the success dialog appears once per round.
const touch = matchMedia('(pointer:coarse)').matches || navigator.maxTouchPoints > 0, reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;
$('game').classList.toggle('touch', touch);
$('footer-copy').textContent = touch ? '摇杆 / 拖动海水' : 'WASD / 方向键 / 鼠标';
let ocean, screen = 'loading', settled = false, loaded = false, celebrated = false;
let width = 1280, height = 720, background, dpr = 1, last = 0, accumulator = 0, visualTime = 0, hudTimer = 0, toastUntil = 0;
let particles = [], labels = [], rings = [], frames = [], frameCount = 0;
// A passing ship on the surface is decoration only; it never touches the simulation.
let ship = { active: false, x: 0, dir: 1, next: 2.5, passes: 0 };
const badgeWidths = new Map(); // Measured badge widths, keyed by number and font size; cleared on resize.
const keys = new Set(); let pointerTarget = null, canvasPointer = null, joyPointer = null, joy = { x: 0, y: 0 }, mouseEnabled = false;
let audio, musicSource, musicBus, sfxBus, musicBuffer, musicPromise, musicStarts = 0, audioError = null, soundOn = true, lastSound = 0;
function show(name) {
  overlays.forEach(id => $(id).hidden = id !== name);
  screen = name === 'none' ? 'playing' : name;
  $('pause').disabled = !loaded || !['playing', 'paused'].includes(screen);
  $('pause').textContent = screen === 'paused' ? '继续' : '暂停';
  $('scores').hidden = !['playing', 'paused', 'success', 'results'].includes(screen); $('brand').hidden = !$('scores').hidden;
  $('stick').hidden = !touch || screen !== 'playing'; $('touch-tip').hidden = !touch || screen !== 'playing';
  $('hint').hidden = screen !== 'playing' || ocean.time > 8;
  updateAudioMix();
}
function clearInput() {
  keys.clear(); pointerTarget = null; canvasPointer = null; joyPointer = null; joy = { x: 0, y: 0 }; mouseEnabled = false; moveThumb();
}
function moveThumb() { $('thumb').style.transform = `translate(${joy.x * 34}px,${joy.y * 34}px)`; }
function safeBottom() {
  // Keep fish and their number badges above the legend; 108 logical px stays the minimum reserve.
  const rect = canvas.getBoundingClientRect(), legend = document.querySelector('footer').getBoundingClientRect();
  if (!rect.height || !legend.height) return 108;
  return Math.max(108, (rect.bottom - legend.top + 6) * height / rect.height + badgeReserve());
}
// Height of the largest (Loopie) number badge, which may hang below a sprite.
function badgeReserve() {
  const scale = Math.min(1, Math.max(.72, Math.min(width, height) / 720));
  return Math.max(16 * scale, 11 * height / (canvas.clientHeight || height)) * 1.48;
}
// The water surface sits just under the header row (score pill + tools); everything below it is swimmable.
function safeTop() {
  const hidden = $('scores').hidden, brandHidden = $('brand').hidden;
  $('scores').hidden = false; $('brand').hidden = true;
  if (!$('scores').firstChild) $('scores').innerHTML = scoreMarkup();
  const rect = canvas.getBoundingClientRect(), bottom = document.querySelector('header').getBoundingClientRect().bottom;
  $('scores').hidden = hidden; $('brand').hidden = brandHidden;
  if (!rect.height) return 64;
  const surface = Math.max(64, Math.min(height - 340, (bottom - rect.top + 12) / rect.height * height));
  $('hint').style.top = `${surface / height * rect.height + 14}px`;
  return surface;
}
function scoreMarkup() {
  return `<div class="score" id="score-0"><span class="who" style="color:${PLAYER_COLOR}">Loopie</span><b id="power-0">${INITIAL_POWER}</b><span class="unit">强弱分</span><span class="gain">本局 +<span id="points-0">0</span></span><div class="meter"><i id="meter-0" style="background:${PLAYER_COLOR}"></i></div></div>`;
}
function makeOcean(seed = Date.now() >>> 0) {
  const aspects = Object.fromEntries(Object.entries(assets).map(([k, image]) => [k, image.height / image.width]));
  ocean = new Ocean({ width, height, seed, topInset: safeTop(), bottomInset: safeBottom(), aspects });
}
function clearToast() { $('toast').hidden = true; toastUntil = 0; }
function home() { clearInput(); clearToast(); particles = []; labels = []; rings = []; makeOcean(971); show('home'); }
function start() {
  if (!loaded) return;
  clearInput(); clearToast(); settled = false; celebrated = false; particles = []; labels = []; rings = []; frames = []; makeOcean();
  $('scores').innerHTML = scoreMarkup();
  show('none'); ocean.setTopInset(safeTop()); ocean.setBottomInset(safeBottom()); updateHud(); last = 0; accumulator = 0; unlockAudio();
}
function pause() { if (screen === 'playing') { clearInput(); show('paused'); } else if (screen === 'paused') resume(); }
function resume() { clearInput(); last = 0; accumulator = 0; show('none'); unlockAudio(); }
function postHost(message) { if (HOSTED) parent.postMessage({ source: 'loopie-third', ...message }, '*'); }
function silenceAudio() { updateAudioMix(); if (audio) audio.suspend().catch(() => {}); }
// Hosted: "回到游戏主界面" from the pause panel keeps the paused round for the map's 继续游戏;
// ending the round (success 结束游戏 / results) returns to the home screen before showing the map.
function returnToMap(endRound = true) {
  clearInput();
  if (!HOSTED) {
    if (ocean) ocean.status = 'over';
    if (musicSource) { musicSource.stop(); musicSource.disconnect(); musicSource = null; musicPromise = null; }
    if (audio) audio.suspend().catch(() => {});
    location.assign(MAP_URL); return;
  }
  if (endRound) home(); else if (screen === 'playing') show('paused');
  hostSuspended = true; silenceAudio();
  postHost({ type: 'back', started: screen === 'paused' });
}
let hostPendingResume = null;
function focusScreen() {
  const open = overlays.find(id => !$(id).hidden);
  const button = open && $(open).querySelector('button:not(:disabled)');
  if (button) button.focus({ preventScroll: true }); else { canvas.tabIndex = -1; canvas.focus({ preventScroll: true }); }
}
function suspendHost() {
  if (!HOSTED) return;
  hostSuspended = true; hostPendingResume = null;
  if (screen === 'playing') show('paused');
  clearInput(); silenceAudio();
}
function resumeHost(play) {
  if (!HOSTED) return;
  if (!loaded) { hostPendingResume = { play }; return; }
  hostSuspended = false; hostPendingResume = null; clearInput(); last = 0; accumulator = 0;
  if (screen === 'home' && play) start(); else focusScreen();
}
addEventListener('message', e => {
  if (!HOSTED || e.source !== parent || e.data?.source !== 'loopie-host') return;
  if (e.data.type === 'pause') suspendHost();
  else if (e.data.type === 'resume') resumeHost(e.data.play === true);
});
// Reaching the target freezes the round behind the dialog; continuing resumes the same round without asking again.
function celebrate() {
  if (celebrated || settled || screen !== 'playing') return;
  celebrated = true; clearInput(); clearToast(); show('success'); updateHud();
}
function finish() {
  if (settled) return;
  // The score pill stays visible behind the two-button results panel.
  settled = true; clearInput(); ocean.status = 'over'; clearToast();
  show('results'); updateHud();
}
function updateHud() {
  if (!ocean || !['playing', 'paused', 'success', 'results'].includes(screen)) return;
  for (const p of ocean.players) {
    if (!$(`points-${p.id}`)) continue;
    $(`points-${p.id}`).textContent = p.score; $(`power-${p.id}`).textContent = p.power; $(`score-${p.id}`).classList.toggle('dead', !p.alive);
    const lo = LEVELS[p.level], hi = LEVELS[p.level + 1] || lo;
    $(`meter-${p.id}`).style.width = `${p.level === LEVELS.length - 1 ? 100 : Math.min(100, (p.power - lo) / (hi - lo) * 100)}%`;
  }
  // The opening hint sits just under the surface; it steps aside as soon as Loopie swims up into it.
  const hint = $('hint'), p = ocean.players[0], ch = canvas.clientHeight || height;
  const loopieTop = (p.y - p.ry * 1.12) / height * ch - 22, hintBottom = parseFloat(hint.style.top || '0') + 44;
  hint.hidden = screen !== 'playing' || ocean.time > 8 || loopieTop < hintBottom;
}
function toast(text, duration = 2.1) { $('toast').textContent = text; $('toast').hidden = false; toastUntil = visualTime + duration; }
function updateAudioMix() {
  if (!audio) return;
  const time = audio.currentTime;
  // One looping source, with click-free muting. Pausing never creates a second track.
  if (musicBus) { musicBus.gain.cancelScheduledValues(time); musicBus.gain.setTargetAtTime(soundOn && screen === 'playing' && !document.hidden ? .12 : 0, time, .025); }
  if (sfxBus) { sfxBus.gain.cancelScheduledValues(time); sfxBus.gain.setTargetAtTime(soundOn ? 1 : 0, time, .015); }
}
function unlockAudio() {
  if (!soundOn) return;
  try {
    if (!audio) {
      audio = new (window.AudioContext || window.webkitAudioContext)();
      musicBus = audio.createGain(); musicBus.gain.value = 0; musicBus.connect(audio.destination);
      sfxBus = audio.createGain(); sfxBus.connect(audio.destination);
    }
    if (audio.state === 'suspended') audio.resume().catch(error => { audioError = error.message; });
    if (!musicPromise) {
      musicPromise = createOceanMusic(audio).then(buffer => {
        musicBuffer = buffer;
        musicSource = audio.createBufferSource(); musicSource.buffer = buffer; musicSource.loop = true;
        musicSource.connect(musicBus); musicSource.start(); musicStarts++; audioError = null; updateAudioMix();
      }).catch(error => { audioError = error.message; musicPromise = null; });
    }
    updateAudioMix();
  } catch (error) { audioError = error.message; }
}
function tone(type) {
  if (!soundOn || !audio || audio.state !== 'running' || audio.currentTime - lastSound < .065) return;
  lastSound = audio.currentTime;
  try {
    const oscillator = audio.createOscillator(), gain = audio.createGain(), time = audio.currentTime;
    oscillator.type = 'sine'; const freq = type === 'grow' ? 660 : type === 'death' ? 145 : 410 + Math.random() * 130;
    oscillator.frequency.setValueAtTime(freq, time); oscillator.frequency.exponentialRampToValueAtTime(type === 'death' ? 85 : freq * 1.6, time + .12);
    gain.gain.setValueAtTime(.0001, time); gain.gain.exponentialRampToValueAtTime(.055, time + .012); gain.gain.exponentialRampToValueAtTime(.0001, time + .17);
    oscillator.connect(gain); gain.connect(sfxBus); oscillator.start(time); oscillator.stop(time + .18); oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
  } catch {}
}
function processEvents() {
  let ate = false;
  for (const e of ocean.drainEvents()) {
    if (e.type === 'eat') {
      ate = true;
      tone('eat'); labels.push({ x: e.x, y: e.y, text: `+${e.value}`, color: PLAYER_COLOR, life: .9, max: .9 });
      for (let i = 0; i < (reduced ? 2 : 6); i++) particles.push({ x: e.x, y: e.y, vx: (Math.random() - .5) * 110, vy: (Math.random() - .5) * 90, life: .5, color: PLAYER_COLOR });
    } else if (e.type === 'grow') {
      tone('grow'); rings.push({ x: e.x, y: e.y, r: ocean.players[e.player].r, life: .8, color: PLAYER_COLOR });
      const next = LEVELS[e.level] - 1;
      toast(next ? `强弱分超过 ${next}！这个档的生物能吃了` : '继续成长！');
    } else if (e.type === 'death') {
      tone('death'); rings.push({ x: e.x, y: e.y, r: ocean.players[e.player].r, life: 1, color: '#ffc9ac' });
    } else if (e.type === 'over') finish();
  }
  // Power only rises by eating, so checking after an eat fires exactly when Loopie reaches the target.
  const p = ocean.players[0];
  if (ate && p.alive && ocean.status === 'running' && p.power >= SUCCESS_POWER) celebrate();
  if (particles.length > 160) particles = particles.slice(-160);
  if (labels.length > 30) labels = labels.slice(-30);
  if (rings.length > 12) rings = rings.slice(-12);
}
function getInputs() {
  if (joyPointer !== null) return [{ x: joy.x, y: joy.y }];
  const p = ocean.players[0];
  let x = Number(keys.has('KeyD') || keys.has('ArrowRight')) - Number(keys.has('KeyA') || keys.has('ArrowLeft'));
  let y = Number(keys.has('KeyS') || keys.has('ArrowDown')) - Number(keys.has('KeyW') || keys.has('ArrowUp'));
  if (!x && !y && pointerTarget) {
    const dx = pointerTarget.x - p.x, dy = pointerTarget.y - p.y, n = Math.hypot(dx, dy), strength = Math.min(1, n / (45 * ocean.scale));
    if (n > 3) { x = dx / n * strength; y = dy / n * strength; }
  }
  return [{ x, y }];
}
function coordinate(e) { const box = canvas.getBoundingClientRect(); return { x: (e.clientX - box.left) / box.width * width, y: (e.clientY - box.top) / box.height * height }; }
canvas.addEventListener('pointerdown', e => {
  if (screen !== 'playing') return;
  e.preventDefault(); if (canvasPointer !== null) return;
  canvasPointer = e.pointerId; pointerTarget = coordinate(e); mouseEnabled = e.pointerType === 'mouse';
  if (e.isTrusted) canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener('pointermove', e => {
  if (screen !== 'playing') return;
  if (e.pointerType === 'mouse') { mouseEnabled = true; pointerTarget = coordinate(e); }
  else if (canvasPointer === e.pointerId) pointerTarget = coordinate(e);
});
function releaseCanvas(e) { if (canvasPointer === e.pointerId) { canvasPointer = null; if (e.pointerType !== 'mouse') pointerTarget = null; } }
canvas.addEventListener('pointerup', releaseCanvas); canvas.addEventListener('pointercancel', e => { releaseCanvas(e); pointerTarget = null; mouseEnabled = false; }); canvas.addEventListener('lostpointercapture', releaseCanvas);
canvas.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse' && canvasPointer === null) { pointerTarget = null; mouseEnabled = false; } });
const stick = $('stick');
function updateJoy(e) { const box = stick.getBoundingClientRect(); const dx = e.clientX - box.left - box.width / 2, dy = e.clientY - box.top - box.height / 2, n = Math.hypot(dx, dy), limit = box.width * .3, scale = n > limit ? limit / n : 1; joy = { x: dx * scale / limit, y: dy * scale / limit }; moveThumb(); }
stick.addEventListener('pointerdown', e => { if (screen !== 'playing' || joyPointer !== null) return; e.preventDefault(); joyPointer = e.pointerId; if (e.isTrusted) stick.setPointerCapture(e.pointerId); updateJoy(e); });
stick.addEventListener('pointermove', e => { if (joyPointer === e.pointerId) { e.preventDefault(); updateJoy(e); } });
function releaseJoy(e) { if (joyPointer === e.pointerId) { joyPointer = null; joy = { x: 0, y: 0 }; moveThumb(); } }
for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) stick.addEventListener(event, releaseJoy);
const pauseKeys = new Set(['KeyP', 'Escape', 'Enter', 'NumpadEnter', 'Space']);
const accepted = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', ...pauseKeys]);
addEventListener('keydown', e => {
  if (!accepted.has(e.code) || ['INPUT', 'TEXTAREA'].includes(e.target.tagName) || e.target.isContentEditable) return;
  if (pauseKeys.has(e.code)) {
    if (!['playing', 'paused'].includes(screen)) return;
    // A keyboard-focused map-return button keeps its native Enter/Space action.
    if (screen === 'paused' && e.target === $('return-map') && ['Enter', 'NumpadEnter', 'Space'].includes(e.code)) { if (e.repeat) e.preventDefault(); return; }
    // Suppress focused Start/Resume button activation and Space scrolling, including held-key repeats.
    e.preventDefault(); if (!e.repeat) pause(); return;
  }
  if (screen === 'playing') { e.preventDefault(); keys.add(e.code); }
});
addEventListener('keyup', e => keys.delete(e.code));
function suspend() { if (screen === 'playing') pause(); else clearInput(); last = 0; accumulator = 0; }
addEventListener('blur', suspend); document.addEventListener('visibilitychange', () => { if (document.hidden) suspend(); });
$('start').onclick = start; $('again').onclick = start; $('back').onclick = () => returnToMap(true); $('return-map').onclick = () => returnToMap(false); $('pause').onclick = pause; $('resume').onclick = resume;
$('success-end').onclick = () => returnToMap(true); $('success-continue').onclick = resume;
$('sound').onclick = () => { soundOn = !soundOn; $('sound').textContent = `声音 ${soundOn ? '开' : '关'}`; $('sound').setAttribute('aria-pressed', soundOn); if (soundOn) unlockAudio(); updateAudioMix(); };
$('full').onclick = async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else if ($('game').requestFullscreen) await $('game').requestFullscreen(); } catch { toast('当前浏览器未开放全屏，可直接游玩'); } };
function resize() {
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return; // A collapsed canvas must not turn the world size into Infinity/NaN.
  const wasLandscape = width >= height;
  dpr = Math.min(2, devicePixelRatio || 1); height = 720; width = rect.width / rect.height * height;
  canvas.width = Math.round(rect.width * dpr); canvas.height = Math.round(rect.height * dpr); badgeWidths.clear();
  if (ocean) { ocean.resize(width, height); ocean.setTopInset(safeTop()); ocean.setBottomInset(safeBottom()); }
  if (loaded) cacheBackground();
  // Mobile toolbars resize the page mid-gesture; only an orientation flip invalidates held input.
  if (wasLandscape !== (width >= height)) clearInput();
}
const BACKGROUND_SHELL = Object.freeze({ x: 710, y: 529, scale: 2 });
function cacheBackground() {
  background = document.createElement('canvas'); background.width = canvas.width; background.height = canvas.height;
  const b = background.getContext('2d'), image = assets.background, s = Math.max(background.width / image.width, background.height / image.height);
  const x = (background.width - image.width * s) / 2, y = (background.height - image.height * s) / 2;
  b.drawImage(image, x, y, image.width * s, image.height * s);
  // Enlarge only the extracted original shell; cache it once with the background, not each frame.
  const shell = assets.backgroundShell;
  b.drawImage(shell, x + BACKGROUND_SHELL.x * s, y + BACKGROUND_SHELL.y * s, shell.width * BACKGROUND_SHELL.scale * s, shell.height * BACKGROUND_SHELL.scale * s);
  const g = b.createLinearGradient(0, 0, 0, background.height); g.addColorStop(0, '#01273430'); g.addColorStop(.32, '#01273400'); g.addColorStop(1, '#01273424'); b.fillStyle = g; b.fillRect(0, 0, background.width, background.height);
}
addEventListener('resize', resize); resize();
function sprite(name, x, y, r, dir = 1, lean = 0, pulse = 0) {
  const image = assets[name], w = r * 2, h = w * image.height / image.width;
  ctx.save(); ctx.translate(x, y); ctx.rotate(lean); ctx.scale((name === 'loopie' ? -dir : dir) * (1 + pulse), 1 - pulse * .7); ctx.drawImage(image, -w / 2, -h / 2, w, h); ctx.restore();
}
function badgeSize(power, player = false) {
  const font = Math.max((player ? 16 : 14) * ocean.scale, 11 * height / canvas.clientHeight), key = `${power}|${font}`;
  let w = badgeWidths.get(key);
  if (w === undefined) { ctx.save(); ctx.font = `700 ${font}px system-ui`; w = ctx.measureText(String(power)).width + font * .9; ctx.restore(); badgeWidths.set(key, w); }
  return { font, w, h: font * 1.48 };
}
function pill(x, y, w, h) {
  if (ctx.roundRect) { ctx.roundRect(x, y, w, h, h / 2); return; }
  const r = h / 2; ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.arc(x + w - r, y + r, r, -Math.PI / 2, Math.PI / 2); ctx.lineTo(x + r, y + h); ctx.arc(x + r, y + r, r, Math.PI / 2, Math.PI * 1.5); ctx.closePath();
}
function powerBadge(power, x, y, kind = 'prey', player = false, size = badgeSize(power, player)) {
  const { font, w, h } = size, text = String(power);
  ctx.save(); ctx.font = `700 ${font}px system-ui`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  x = Math.max(w / 2 + 2, Math.min(width - w / 2 - 2, x));
  ctx.fillStyle = kind === 'danger' ? '#57352fe8' : '#032b3be8'; ctx.strokeStyle = player ? '#9af3ff' : kind === 'danger' ? '#ffbc9e' : kind === 'equal' ? '#ddd8a0' : '#93e6c6';
  ctx.lineWidth = Math.max(1, height / canvas.clientHeight * .75); ctx.beginPath(); pill(x - w / 2, y - h / 2, w, h); ctx.fill(); ctx.stroke();
  ctx.fillStyle = kind === 'danger' ? '#ffe1cf' : kind === 'equal' ? '#fff0c1' : '#e0fff2'; ctx.fillText(text, x, y + font * .03); ctx.restore();
}
// Sea surface: a sky strip above a moving wave line, with an occasional original ship passing by.
const waveY = (x, t) => ocean.topInset - 3 + Math.sin(x * .021 + t * 1.3) * 2.2 + Math.sin(x * .009 - t * .7) * 1.6;
function wavePath(t, reverse = false) {
  if (reverse) for (let x = width + 16; x >= -16; x -= 16) ctx.lineTo(x, waveY(x, t));
  else for (let x = -16; x <= width + 16; x += 16) ctx.lineTo(x, waveY(x, t));
}
function drawSurface(t) {
  const s = ocean.topInset, sky = ctx.createLinearGradient(0, 0, 0, s);
  sky.addColorStop(0, '#4f9fb8'); sky.addColorStop(.7, '#9fd8df'); sky.addColorStop(1, '#d4f2ee');
  ctx.fillStyle = sky; ctx.beginPath(); ctx.moveTo(-16, 0); ctx.lineTo(width + 16, 0); wavePath(t, true); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#ffffff4d';
  for (let i = 0; i < 3; i++) {
    const cx = ((t * 5 * (1 + i * .3) + i * 470) % (width + 260)) - 130, cy = s * (.3 + i * .12);
    ctx.beginPath(); ctx.ellipse(cx, cy, 46 * ocean.scale, 8 * ocean.scale, 0, 0, 6.28); ctx.ellipse(cx + 22 * ocean.scale, cy - 5 * ocean.scale, 24 * ocean.scale, 8 * ocean.scale, 0, 0, 6.28); ctx.fill();
  }
  if (ship.active) drawShip(ship.x, waveY(ship.x, t), ship.dir, t);
  const skin = ctx.createLinearGradient(0, s - 6, 0, s + 30); skin.addColorStop(0, '#3e9fb0d0'); skin.addColorStop(.35, '#2f8fa266'); skin.addColorStop(1, '#2f8fa200');
  ctx.fillStyle = skin; ctx.beginPath(); ctx.moveTo(-16, s + 30); wavePath(t); ctx.lineTo(width + 16, s + 30); ctx.closePath(); ctx.fill();
  ctx.strokeStyle = '#effffbd9'; ctx.lineWidth = 1.6; ctx.beginPath(); wavePath(t); ctx.stroke();
}
function drawShip(x, y, dir, t) {
  const k = ocean.scale, image = assets.ship, w = 118, h = w * image.height / image.width;
  ctx.save(); ctx.translate(x, y + Math.sin(t * 1.7) * 1.2); ctx.rotate(Math.sin(t * 1.1) * .025); ctx.scale(dir * k, k);
  ctx.fillStyle = '#ffffff99'; for (let i = 0; i < 4; i++) { ctx.beginPath(); ctx.ellipse(-64 - i * 15, 3, 10 - i * 2, 2.2, 0, 0, 6.28); ctx.fill(); }
  // Soft steam follows the new sprite's funnel; the decoded boat itself is one draw, with no per-frame filters.
  for (let i = 0; i < 3; i++) {
    const sx = -8 - i * 8, sy = 12 - h * .77 - 3 - i * 6, r = 3.2 + i * 1.4;
    const steam = ctx.createRadialGradient(sx, sy, 0, sx, sy, r);
    steam.addColorStop(0, '#eef5ed70'); steam.addColorStop(1, '#eef5ed00'); ctx.fillStyle = steam;
    ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2); ctx.fill();
  }
  // Same 118-logical-pixel footprint, hull bottom at +12, and existing motion/appearance cadence.
  ctx.drawImage(image, -w / 2, 12 - h, w, h);
  ctx.restore();
}
function updateShip(elapsed) {
  if (!ship.active) {
    ship.next -= elapsed;
    if (ship.next <= 0) { ship.active = true; ship.dir = Math.random() < .5 ? 1 : -1; ship.x = ship.dir > 0 ? -110 : width + 110; }
    return;
  }
  ship.x += ship.dir * 44 * ocean.scale * elapsed;
  if (ship.x < -120 || ship.x > width + 120) { ship.active = false; ship.passes++; ship.next = 14 + Math.random() * 18; }
}
function draw() {
  if (!loaded || !ocean) return;
  ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.drawImage(background, 0, 0); ctx.setTransform(canvas.width / width, 0, 0, canvas.height / height, 0, 0);
  // The official Loopie bitmap is kept intact; only whole-sprite swimming transforms are applied.
  const t = reduced ? 0 : visualTime;
  const water = height - ocean.topInset;
  ctx.save(); ctx.globalAlpha = .24;
  for (let i = 0; i < (reduced ? 8 : 24); i++) {
    const x = (i * 197.3 + Math.sin(t * .25 + i) * 14) % width, y = height - ((t * (7 + i % 4) + i * 119) % water);
    ctx.beginPath(); ctx.arc(x, y, 1.2 + (i % 3), 0, Math.PI * 2); ctx.strokeStyle = '#b2e9ec'; ctx.lineWidth = .6; ctx.stroke();
  }
  ctx.restore();
  drawSurface(t);
  const active = ocean.players.filter(p => p.alive), single = active.length === 1 ? active[0] : null;
  const fishes = [...ocean.fishes].sort((a, b) => b.r - a.r);
  for (const f of fishes) {
    const inView = f.x > -f.r * 2 && f.x < width + f.r * 2; if (!inView) continue;
    const y = screen === 'home' ? f.y + Math.sin(t * .4 + f.phase) * 8 : f.y;
    sprite(f.species, f.x, y, f.r, f.dir, Math.sin(t * 2 + f.phase) * .022, Math.sin(t * 3 + f.phase) * .013);
    const kind = single ? relation(single, f) : 'equal';
    // Small sprites keep their silhouette: the badge moves just below instead of covering the body.
    const badge = badgeSize(f.power), onBody = f.r * 2 >= badge.w * 2.4 && f.ry * 2 >= badge.h * 1.6;
    powerBadge(f.power, onBody ? f.x - f.dir * f.r * .08 : f.x, onBody ? y + f.ry * .1 : y + f.ry * .95 + badge.h / 2, kind, false, badge);
    if (single && screen === 'playing' && kind === 'danger') {
      const by = y - f.ry * 1.12 - 14 * ocean.scale;
      ctx.fillStyle = '#ffc6a3'; ctx.beginPath(); ctx.arc(f.x, by, 7.5 * ocean.scale, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#422c27'; ctx.font = `bold ${11 * ocean.scale}px system-ui`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('!', f.x, by + .2);
    }
  }
  if (pointerTarget && screen === 'playing' && (!touch || canvasPointer !== null) && joyPointer === null) {
    ctx.strokeStyle = '#b1ffeb66'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(pointerTarget.x, pointerTarget.y, 6, 0, 6.28); ctx.stroke();
  }
  for (const p of ocean.players) {
    if (!p.alive) continue;
    const radius = p.visualR, y = p.y + Math.sin(t * 3 + p.id) * 1.8 * ocean.scale, color = PLAYER_COLOR;
    const halo = ctx.createRadialGradient(p.x, y, 0, p.x, y, radius * 1.65); halo.addColorStop(0, `${color}24`); halo.addColorStop(1, `${color}00`); ctx.fillStyle = halo; ctx.fillRect(p.x - radius * 1.65, y - radius * 1.65, radius * 3.3, radius * 3.3);
    if (p.grace > 0 && screen === 'playing') {
      ctx.strokeStyle = `${color}8a`; ctx.lineWidth = 1.5; ctx.setLineDash(p.grace > 0 ? [4, 5] : []);
      ctx.beginPath(); ctx.ellipse(p.x, y, radius * 1.11, radius * .88, 0, 0, 6.28); ctx.stroke(); ctx.setLineDash([]);
    }
    sprite('loopie', p.x, y, radius, p.dir, p.vy * .0005, reduced ? 0 : Math.sin(p.pop / .3 * Math.PI) * .09);
    // Official Loopie artwork stays unobstructed; its power sits under the body.
    const badge = badgeSize(p.power, true);
    powerBadge(p.power, p.x, y + radius * (assets.loopie.height / assets.loopie.width) + 2 + badge.h / 2, 'prey', true, badge);
    if (screen === 'playing') {
      ctx.font = `600 ${12 * ocean.scale}px system-ui`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = color;
      ctx.fillText('Loopie', p.x, y - radius * .8 - 14);
    }
  }
  for (const ring of rings) { ctx.globalAlpha = Math.max(0, ring.life); ctx.strokeStyle = ring.color; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(ring.x, ring.y, ring.r * (2 - ring.life), 0, 6.28); ctx.stroke(); }
  for (const part of particles) { ctx.globalAlpha = Math.max(0, part.life * 1.5); ctx.fillStyle = part.color; ctx.beginPath(); ctx.arc(part.x, part.y, 2.5, 0, 6.28); ctx.fill(); }
  for (const label of labels) { ctx.globalAlpha = Math.min(1, label.life * 2); ctx.fillStyle = label.color; ctx.font = 'bold 15px system-ui'; ctx.textAlign = 'center'; ctx.fillText(label.text, label.x, label.y); }
  ctx.globalAlpha = 1;
}
function tick(now) {
  const elapsed = last ? Math.min((now - last) / 1000, .1) : 0; last = now;
  if (!document.hidden && !hostSuspended) {
    visualTime += elapsed;
    if (screen === 'playing') {
      accumulator += elapsed; const inputs = getInputs();
      while (accumulator >= 1 / 120 && screen === 'playing') { ocean.step(1 / 120, inputs); processEvents(); accumulator -= 1 / 120; }
      hudTimer += elapsed; if (hudTimer > .1) { updateHud(); hudTimer = 0; }
      if (elapsed > 0) { frames.push(elapsed * 1000); if (frames.length > 2600) frames = frames.slice(-2400); }
    } else accumulator = 0;
    if (['playing', 'home', 'results'].includes(screen)) {
      updateShip(elapsed);
      for (const p of particles) { p.x += p.vx * elapsed; p.y += p.vy * elapsed; p.life -= elapsed; }
      for (const l of labels) { l.y -= 36 * elapsed; l.life -= elapsed; }
      for (const r of rings) r.life -= elapsed;
      particles = particles.filter(p => p.life > 0); labels = labels.filter(p => p.life > 0); rings = rings.filter(p => p.life > 0);
    }
    if (toastUntil && visualTime >= toastUntil) { $('toast').hidden = true; toastUntil = 0; }
    if (screen !== 'paused' || frameCount % 15 === 0) draw();
    frameCount++;
  }
  requestAnimationFrame(tick);
}
if (new URLSearchParams(location.search).has('test')) {
  const snapshot = () => ({ ...ocean.snapshot(), screen, touch, settled, celebrated, successPower: SUCCESS_POWER, mapUrl: MAP_URL, hosted: HOSTED, hostSuspended, backgroundShell: { ...BACKGROUND_SHELL, width: assets.backgroundShell.width * BACKGROUND_SHELL.scale, height: assets.backgroundShell.height * BACKGROUND_SHELL.scale }, music: { ready: !!musicBuffer, state: audio?.state || 'not-created', looping: !!musicSource?.loop, starts: musicStarts, soundOn, gain: musicBus?.gain.value || 0, sfxGain: sfxBus?.gain.value ?? 0, duration: musicBuffer?.duration || 0, sampleRate: musicBuffer?.sampleRate || 0, error: audioError }, ship: { ...ship }, keys: [...keys], joy: { ...joy }, pointerTarget: pointerTarget && { ...pointerTarget }, badgeReserve: badgeReserve(), frameCount, frames: [...frames], assets: Object.fromEntries(Object.entries(assets).map(([k, v]) => [k, { width: v.naturalWidth, height: v.naturalHeight }])) });
  window.__eatGrow = {
    snapshot,
    musicPCM: () => musicBuffer ? Array.from(musicBuffer.getChannelData(0)) : [],
    start: (seed = 831) => { start(); makeOcean(seed); updateHud(); },
    clearFish: () => { ocean.fishes = []; ocean.spawnTimer = 1e5; },
    spawn: spec => ocean.spawn(false, spec),
    player: (id, props) => { const p = ocean.players[id]; Object.assign(p, props); if ('power' in props) { ocean.size(p, 'loopie', true); p.level = LEVELS.reduce((n, v, i) => p.power >= v ? i : n, 0); } ocean.contain(p, true); updateHud(); },
    step: (seconds, inputs = []) => { for (let t = 0; t < seconds && ocean.status === 'running' && screen === 'playing'; t += 1 / 120) { ocean.step(1 / 120, inputs); processEvents(); } updateHud(); draw(); },
    pause, resume, finish, home, ship: props => Object.assign(ship, props), loopieMaxPower: LOOPIE_MAX_POWER_SIZE, relation: (player, fish) => relation(ocean.players[player], ocean.fishes.find(f => f.id === fish)),
  };
}
async function load() {
  const entries = Object.entries(ASSET_URLS); let completed = 0;
  try {
    await Promise.all(entries.map(async ([key, src]) => {
      const image = new Image(); image.decoding = 'async'; image.src = src; await image.decode(); if (!image.naturalWidth) throw new Error('Image decode'); assets[key] = image;
      completed++; const progress = Math.round(completed / entries.length * 90); $('load-bar').style.width = `${progress}%`; $('load-text').textContent = `${progress}%`;
    }));
    loaded = true; cacheBackground(); makeOcean(); draw();
    $('load-bar').style.width = '100%'; $('load-text').textContent = '100%';
    home(); requestAnimationFrame(tick);
    if (HOSTED) {
      postHost({ type: 'ready', started: false });
      if (hostPendingResume) resumeHost(hostPendingResume.play);
    }
  } catch { $('load-text').textContent = '有一张海景没有加载成功，请刷新页面重试'; }
}
load();
