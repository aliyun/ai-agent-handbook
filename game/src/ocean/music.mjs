// Original "Little Ocean Hop": synthesized instruments only, no sampled songs.
// 116 BPM, 4/4, 16 bars; mono/32000 Hz; peak 0.60. Caller owns playback.
// Start with a caller-side music Gain around 0.08 to leave room for eat SFX.
const SAMPLE_RATE = 32000;
const BPM = 116;
const BEATS = 16 * 4;
const LOOP_FRAMES = Math.round(BEATS * 60 / BPM * SAMPLE_RATE);
const BEAT_SECONDS = LOOP_FRAMES / SAMPLE_RATE / BEATS;
const TAIL_FRAMES = 2 * SAMPLE_RATE;
let musicPromise;

// Hand-written G-major pentatonic phrases: [beat within bar, MIDI pitch].
const MELODY = [
  [[0, 67], [0.75, 71], [1.5, 74], [2, 71], [2.75, 69], [3.5, 67]],
  [[0, 71], [1, 74], [1.75, 76], [2.5, 74], [3.25, 71]],
  [[0, 67], [0.5, 69], [1.5, 71], [2.25, 74], [3, 71], [3.5, 69]],
  [[0.25, 69], [1, 74], [2, 76], [2.75, 74], [3.5, 69]],
  [[0, 71], [0.75, 74], [1.5, 76], [2.5, 74], [3.25, 71]],
  [[0, 76], [1, 74], [1.75, 71], [2.5, 69], [3.5, 71]],
  [[0, 69], [0.75, 71], [1.5, 74], [2, 71], [3, 67]],
  [[0, 74], [1, 71], [1.75, 69], [2.5, 67], [3.25, 69]],
  [[0, 67], [0.75, 74], [1.5, 71], [2.25, 69], [3, 71], [3.5, 74]],
  [[0, 76], [0.75, 74], [1.75, 71], [2.5, 74], [3.5, 71]],
  [[0, 69], [0.5, 67], [1.5, 69], [2.25, 71], [3, 74]],
  [[0.25, 74], [1, 76], [2, 74], [2.75, 71], [3.5, 69]],
  [[0, 71], [0.75, 74], [1.5, 71], [2.5, 69], [3.25, 67]],
  [[0, 71], [1, 76], [1.75, 74], [2.5, 71], [3.5, 69]],
  [[0, 67], [0.75, 69], [1.5, 71], [2.25, 69], [3, 67]],
  [[0, 69], [1, 74], [1.75, 71], [2.5, 69], [3.25, 74]],
];

const CHORDS = [
  { bass: 43, notes: [55, 59, 62] }, // G
  { bass: 40, notes: [55, 59, 64] }, // Em7
  { bass: 36, notes: [55, 60, 64] }, // C
  { bass: 38, notes: [54, 57, 62] }, // D
];

function edgeEnvelope(time, duration, attack, release) {
  const fadeIn = time < attack ? 0.5 - 0.5 * Math.cos(Math.PI * time / attack) : 1;
  const remaining = duration - time;
  const fadeOut = remaining < release
    ? 0.5 - 0.5 * Math.cos(Math.PI * Math.max(0, remaining) / release)
    : 1;
  return fadeIn * fadeOut;
}

function makeInstrument(offline, kind, midi = 0) {
  const duration = kind === 'wood' ? 1.1 : kind === 'bass' ? 0.9
    : kind === 'kick' ? 0.28 : kind === 'shaker' ? 0.12 : 0.16;
  const buffer = offline.createBuffer(1, Math.ceil(duration * SAMPLE_RATE), SAMPLE_RATE);
  const samples = buffer.getChannelData(0);
  const frequency = 440 * 2 ** ((midi - 69) / 12);
  let seed = 0x4c4f4f50;
  let lowNoise = 0;
  let previousLow = 0;
  let bandNoise = 0;
  let phase = 0;

  for (let i = 0; i < samples.length; i++) {
    const t = i / SAMPLE_RATE;
    let value;
    if (kind === 'wood') {
      const p = 2 * Math.PI * frequency * t;
      // Rounded fundamental and quickly decaying wooden-bar overtones.
      value = Math.sin(p) * Math.exp(-t / 0.24)
        + 0.13 * Math.sin(p * 2) * Math.exp(-t / 0.12)
        + 0.19 * Math.sin(p * 3.99) * Math.exp(-t / 0.065)
        + 0.018 * Math.sin(p * 9.97) * Math.exp(-t / 0.025);
    } else if (kind === 'bass') {
      const p = 2 * Math.PI * frequency * t;
      value = (Math.sin(p) + 0.16 * Math.sin(2 * p) + 0.035 * Math.sin(3 * p))
        * Math.exp(-t / 0.3);
    } else if (kind === 'kick') {
      phase += 2 * Math.PI * (54 + 44 * Math.exp(-t / 0.025)) / SAMPLE_RATE;
      value = Math.sin(phase) * Math.exp(-t / 0.055);
    } else {
      // Deterministic, softly band-limited synthetic noise; never a recording.
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      const noise = seed / 0x80000000 - 1;
      lowNoise += 0.22 * (noise - lowNoise);
      bandNoise = 0.88 * (bandNoise + lowNoise - previousLow);
      previousLow = lowNoise;
      value = bandNoise * Math.exp(-t / (kind === 'shaker' ? 0.028 : 0.04));
      if (kind === 'tap') value += 0.18 * Math.sin(2 * Math.PI * 720 * t) * Math.exp(-t / 0.02);
    }
    const attack = kind === 'bass' ? 0.012 : kind === 'wood' ? 0.006 : 0.003;
    samples[i] = value * edgeEnvelope(t, duration, attack, 0.045);
  }
  return buffer;
}

function finishRendering(offline) {
  // Also supports older prefixed implementations with oncomplete only.
  return new Promise((resolve, reject) => {
    offline.oncomplete = event => resolve(event.renderedBuffer);
    const result = offline.startRendering();
    if (result && typeof result.then === 'function') result.then(resolve, reject);
  });
}

async function renderMusic(context) {
  const Offline = globalThis.OfflineAudioContext
    || globalThis.webkitOfflineAudioContext
    || globalThis.window?.OfflineAudioContext
    || globalThis.window?.webkitOfflineAudioContext;
  if (typeof Offline !== 'function') {
    throw new Error('Ocean music requires OfflineAudioContext.');
  }
  const offline = new Offline(1, LOOP_FRAMES + TAIL_FRAMES, SAMPLE_RATE);
  const lowpass = offline.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.value = 3000;
  lowpass.Q.value = 0.55;
  const highpass = offline.createBiquadFilter();
  highpass.type = 'highpass';
  highpass.frequency.value = 35;
  highpass.Q.value = 0.5;
  lowpass.connect(highpass);
  highpass.connect(offline.destination); // Offline destination only, never speakers.

  const instruments = new Map();
  function note(kind, midi, beat, volume) {
    const key = `${kind}:${midi}`;
    if (!instruments.has(key)) instruments.set(key, makeInstrument(offline, kind, midi));
    const source = offline.createBufferSource();
    const gain = offline.createGain();
    source.buffer = instruments.get(key);
    gain.gain.value = volume;
    source.connect(gain);
    gain.connect(lowpass);
    // All voices are scheduled once, before rendering; no game-frame work.
    source.start(Math.round(beat * BEAT_SECONDS * SAMPLE_RATE) / SAMPLE_RATE);
  }

  for (let bar = 0; bar < 16; bar++) {
    const beat = bar * 4;
    const chord = CHORDS[bar % CHORDS.length];
    MELODY[bar].forEach(([position, midi], index) => {
      note('wood', midi, beat + position, index === 0 ? 0.19 : 0.155 + (index % 3) * 0.012);
    });
    note('bass', chord.bass, beat, 0.145);
    note('bass', chord.bass + 7, beat + 2.25, 0.105);
    for (const position of [0.5, 2.5]) {
      chord.notes.forEach((midi, index) => {
        note('wood', midi, beat + position + index * 0.035, 0.039);
      });
    }
    note('kick', 0, beat, 0.08);
    note('kick', 0, beat + 2, 0.061);
    note('tap', 0, beat + 1, 0.06);
    note('tap', 0, beat + 3, 0.052);
    for (let eighth = 0; eighth < 8; eighth++) {
      // Tiny offbeat lilt, with gentle dynamics rather than sharp hi-hats.
      note('shaker', 0, beat + eighth * 0.5 + (eighth % 2 ? 0.025 : 0),
        eighth % 2 ? 0.045 : 0.029);
    }
  }

  const rendered = await finishRendering(offline);
  const result = context.createBuffer(1, LOOP_FRAMES, SAMPLE_RATE);
  const output = result.getChannelData(0);
  const input = rendered.getChannelData(0);
  // Wrap the complete decay/filter tail into the opening for a circular mix.
  // No full-loop fade-out: it would produce a gap at every repetition.
  for (let i = 0; i < input.length; i++) output[i % LOOP_FRAMES] += input[i];

  let mean = 0;
  for (let i = 0; i < output.length; i++) mean += output[i];
  mean /= output.length;
  let peak = 0;
  for (let i = 0; i < output.length; i++) {
    output[i] -= mean;
    peak = Math.max(peak, Math.abs(output[i]));
  }
  if (!(peak > 0) || !Number.isFinite(peak)) {
    throw new Error('Ocean music rendering produced invalid or silent audio.');
  }
  const scale = 0.6 / peak;
  for (let i = 0; i < output.length; i++) output[i] *= scale;
  return result;
}

/** Return one cached AudioBuffer, playable in any AudioContext, even if suspended. */
export async function createOceanMusic(context) {
  if (!context || typeof context.createBuffer !== 'function') {
    throw new TypeError('createOceanMusic expects an AudioContext.');
  }
  // Share both in-flight and completed renders; allow retry after a real failure.
  if (!musicPromise) {
    musicPromise = renderMusic(context).catch(error => {
      musicPromise = undefined;
      throw error;
    });
  }
  return musicPromise;
}
