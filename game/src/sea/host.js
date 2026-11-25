// Shared navigation owns no renderer. Each chapter is created only when selected.
const $ = id => document.getElementById(id);
const layers = [$('firstLayer'), $('seaLayer'), $('thirdLayer')];
const sources = ['loopie-first', 'loopie-sea', 'loopie-third'];
const paths = ['lighthouse.html?host=1', 'abyssal-sea.html?host=1', 'echo-theater.html?host=1'];
const ready = [false, false, false], started = [false, false, false], queued = [false, false, false];
const initial = Number(new URLSearchParams(location.search).get('level') ?? 1);
let level = [0, 1, 2].includes(initial) ? initial : 1;
let mapOpen = false, mapBusy = false, timer;
function post(index, data) { layers[index].contentWindow?.postMessage({ source: 'loopie-host', ...data }, location.origin); }
function mapPost(data) { $('mapLayer').contentWindow?.postMessage({ source: 'loopie-audit', ...data }, location.origin); }
function mapState() { return { type: 'show', selected: level, labels: { 0: started[0] ? '继续游戏' : '开始游戏', 1: started[1] ? '继续探索' : '开始探索', 2: started[2] ? '继续游戏' : '开始游戏' } }; }
function activate() {
  $('shell').classList.toggle('first-active', level === 0);
  $('shell').classList.toggle('third-active', level === 2);
  $('world').style.visibility = level === 1 ? 'visible' : 'hidden';
  layers.forEach((layer, i) => {
    const active = i === level && !mapOpen;
    layer.hidden = i !== level; layer.inert = !active; layer.tabIndex = active ? 0 : -1;
    layer.setAttribute('aria-hidden', String(!active));
    if (!active) post(i, { type: 'pause' });
  });
  $('mapBtn').hidden = mapOpen;
}
function resume() {
  if (mapOpen || mapBusy || !ready[level]) return;
  post(level, { type: 'resume', play: queued[level] });
  if (queued[level]) started[level] = true;
  queued[level] = false; layers[level].focus({ preventScroll: true });
}
function ensure(index, play = false) {
  queued[index] ||= play;
  if (!layers[index].getAttribute('src')) layers[index].src = paths[index] + (index === 1 && new URLSearchParams(location.search).has('test') ? '&test=1' : '');
  resume();
}
function openMap() {
  if (mapOpen || mapBusy) return;
  mapOpen = true; mapBusy = true;
  activate(); $('mapLayer').hidden = false; $('mapLayer').inert = false;
  $('mapLayer').tabIndex = 0; $('mapLayer').setAttribute('aria-hidden', 'false');
  $('shell').classList.add('map-open');
  if (!$('mapLayer').getAttribute('src')) $('mapLayer').src = 'index.html?embed=1';
  mapPost(mapState());
  clearTimeout(timer); timer = setTimeout(() => { mapBusy = false; $('shell').classList.add('map-settled'); mapPost({ type: 'focus' }); $('mapLayer').focus(); }, 180);
}
function closeMap(play, next = level) {
  if (!mapOpen || ![0, 1, 2].includes(next)) return;
  level = next; mapOpen = false; mapBusy = true;
  $('mapLayer').inert = true; $('mapLayer').hidden = true; $('mapLayer').tabIndex = -1;
  $('mapLayer').setAttribute('aria-hidden', 'true');
  $('shell').classList.remove('map-open', 'map-settled');
  activate(); ensure(level, play);
  clearTimeout(timer); timer = setTimeout(() => { mapBusy = false; activate(); resume(); }, 180);
}
$('mapBtn').onclick = openMap;
addEventListener('keydown', e => { if (e.code === 'Escape') { e.preventDefault(); if (mapOpen) closeMap(false); else openMap(); } });
addEventListener('message', e => {
  if (e.origin !== location.origin) return;
  const d = e.data;
  const index = layers.findIndex(layer => e.source === layer.contentWindow);
  if (index >= 0 && d?.source === sources[index]) {
    if (d.type === 'ready') {
      ready[index] = true; started[index] ||= !!d.started;
      if (index !== level || mapOpen) post(index, { type: 'pause' });
      else resume();
    }
    else if (d.type === 'started') started[index] = true;
    else if (d.type === 'back' && index === level) { started[index] ||= !!d.started; openMap(); }
    return;
  }
  if (e.source !== $('mapLayer').contentWindow || d?.source !== 'loopie-map') return;
  if (d.type === 'ready' && mapOpen) mapPost(mapState());
  else if (d.type === 'play') closeMap(true, d.level);
  else if (d.type === 'back') closeMap(false);
});
window.__auditSea = { snapshot: () => {
  const sea = ready[1] ? layers[1].contentWindow?.__abyssalV3?.snapshot() : null;
  return { ready: true, secondReady: ready[1], started: started[1], paused: sea?.paused ?? true,
    mapOpen, mapBusy, navigation: { level: level + 1, firstReady: ready[0], firstStarted: started[0], thirdReady: ready[2], thirdStarted: started[2] },
    counts: sea?.counts ?? { pearl: 0, shell: 0 }, player: sea?.player ?? null,
    renderer: sea?.renderer ?? null, view: sea?.view ?? 'external',
    gate: { unlocked: sea?.unlocked ?? false, passed: sea?.completed ?? false }, native: sea ?? null };
} };
activate(); ensure(level, level !== 1);
