// Power is the only predation rule. Reward is the separate per-round pearl income.
export const LEVELS = [2, 6, 11, 51, 101, 201, 301, 401];
export const PLAYER_COLOR = '#9af3ff';
export const INITIAL_POWER = 2;
export const DISPLAY_LIMIT = .25; // Maximum whole-sprite dimension / viewport short side.
export const LOOPIE_MAX_POWER_SIZE = 10; // Loopie's body never grows past a 10-power creature; power keeps rising.
export const AREA_LIMIT = .22; // Sum of sprite bounding-box areas, not unique pixel coverage.
export const CREATURES = Object.freeze([
  { species: 'silver', name: '小银鱼', power: 1, reward: 1, aspect: .3 },
  { species: 'gold', name: '金色鱼', power: 5, reward: 5, aspect: 160 / 220 },
  { species: 'clownfish', name: '小丑鱼', power: 10, reward: 5, aspect: .62 },
  { species: 'tang', name: '蓝吊鱼', power: 10, reward: 5, aspect: .65 },
  { species: 'manta', name: '蝠鲼', power: 50, reward: 10, aspect: 404 / 520 },
  { species: 'jellyfish', name: '水母', power: 50, reward: 10, aspect: 1.1, sizeFactor: .7 },
  { species: 'seahorse', name: '海马', power: 50, reward: 10, aspect: 1.55, sizeFactor: .42 },
  { species: 'turtle', name: '海龟', power: 100, reward: 15, aspect: .65, sizeFactor: .66 },
  { species: 'swordfish', name: '旗鱼', power: 100, reward: 15, aspect: .4 },
  { species: 'orca', name: '虎鲸', power: 300, reward: 20, aspect: 420 / 900 },
  { species: 'whale', name: '蓝鲸', power: 400, reward: 20, aspect: 296 / 900, sizeFactor: .72 },
  { species: 'shark', name: '鲨鱼', power: 200, reward: 20, aspect: .45 },
].map(c => Object.freeze(c)));
const BY_SPECIES = Object.fromEntries(CREATURES.map(c => [c.species, c]));
const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
const bodyArea = e => 4 * e.r * e.ry * 1.12;
export function rng(seed = 831) {
  return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
export function relation(player, fish) {
  if (player.power > fish.power) return 'prey';
  if (fish.power > player.power) return 'danger';
  return 'equal';
}
export function overlaps(a, b) {
  return ((a.x - b.x) / ((a.r + b.r) * .72)) ** 2 + ((a.y - b.y) / ((a.ry + b.ry) * .65)) ** 2 < 1;
}
export class Ocean {
  constructor({ width = 1280, height = 720, seed = 831, topInset = 130, bottomInset = 108, aspects = {} } = {}) {
    this.width = width; this.height = height; this.aspects = aspects;
    this.scale = clamp(Math.min(width, height) / 720, .72, 1); this.base = 24 * this.scale;
    this.topInset = clamp(topInset, 0, Math.max(0, height - 340)); this.bottomInset = bottomInset;
    this.random = rng(seed); this.time = 0; this.status = 'running'; this.fishes = []; this.events = []; this.serial = 0;
    this.players = [{ id: 0, x: width * .4, y: height * .42, power: INITIAL_POWER, score: 0, eaten: 0, level: 0, vx: 0, vy: 0, dir: 1, alive: true, grace: 2.6, pop: 0 }];
    this.size(this.players[0], 'loopie', true); this.setTopInset(this.topInset);
    this.density = this.countLimit(); this.spawnTimer = .9;
    // The first three silver fish are part of the count and area budget, not bonus population.
    for (let i = 0; i < this.density; i++) this.spawn(true, null, i < 3 ? BY_SPECIES.silver : null);
  }
  countLimit() { return this.width < 420 ? 9 : this.width < 700 ? 12 : 18; }
  aspect(species) { return this.aspects[species] || (species === 'loopie' ? 320 / 412 : BY_SPECIES[species].aspect); }
  size(e, species, immediate = false) {
    const aspect = this.aspect(species);
    const short = Math.min(this.width, this.height) * DISPLAY_LIMIT, cap = short / (2 * Math.max(1.12, aspect * 1.12)), common = short / 2.24;
    const grown = this.base * (e.power / INITIAL_POWER) ** .32;
    const limit = species === 'loopie' ? this.base * (LOOPIE_MAX_POWER_SIZE / INITIAL_POWER) ** .32 : Infinity;
    // sizeFactor scales the common (wide-body) size, so small-bodied species stay proportionally smaller on every screen;
    // the species' own aspect cap still bounds the final sprite.
    e.r = Math.min(Math.min(grown, limit, common) * (BY_SPECIES[species]?.sizeFactor ?? 1), cap);
    e.ry = e.r * aspect;
    if (species === 'loopie') e.visualR = immediate ? e.r : Math.min(e.visualR, e.r);
  }
  bounds(e) {
    // topInset is the water surface. Loopie may touch it; fish keep room for the "!" warning below the surface.
    const pad = e.species ? 24 * this.scale : 0;
    return { left: e.r * 1.12 + 3, right: this.width - e.r * 1.12 - 3, top: this.topInset + e.ry * 1.12 + pad, bottom: this.height - this.bottomInset - e.ry * 1.12 };
  }
  contain(e, horizontal = false) {
    const b = this.bounds(e);
    if (horizontal) e.x = clamp(e.x, b.left, b.right);
    e.y = clamp(e.y, b.top, b.bottom);
  }
  resize(width, height) {
    const sx = width / this.width, sy = height / this.height;
    this.width = width; this.height = height; this.scale = clamp(Math.min(width, height) / 720, .72, 1); this.base = 24 * this.scale; this.density = this.countLimit();
    for (const p of this.players) { p.x *= sx; p.y *= sy; p.vx = p.vy = 0; this.size(p, 'loopie', true); }
    for (const f of this.fishes) { f.x *= sx; f.y *= sy; f.homeY *= sy; f.speed = f.baseSpeed * this.scale; f.vx = f.dir * f.speed; f.vy = 0; this.size(f, f.species); }
    this.setTopInset(this.topInset); this.trimPopulation();
  }
  setBottomInset(bottomInset) {
    // Footer / legend reserve; the playfield always keeps at least 200 logical px.
    this.bottomInset = bottomInset; this.setTopInset(this.topInset);
  }
  setTopInset(topInset) {
    this.topInset = clamp(topInset, 0, Math.max(0, this.height - 340));
    this.bottomInset = clamp(this.bottomInset ?? 108, 0, Math.max(0, this.height - this.topInset - 200));
    for (const p of this.players) this.contain(p, true);
    for (const f of this.fishes) { this.contain(f); f.homeY = f.y; }
    this.trimPopulation();
  }
  occupancy() {
    return { count: this.fishes.length, limit: this.density ?? this.countLimit(), area: this.players.filter(p => p.alive).reduce((n, p) => n + bodyArea(p), 0) + this.fishes.reduce((n, f) => n + bodyArea(f), 0), budget: this.width * Math.max(1, this.height - this.topInset - this.bottomInset) * AREA_LIMIT };
  }
  trimPopulation() {
    // On rotation or growth, discard farthest fish first; never truncate a near collision before testing it.
    while (this.fishes.length) {
      const o = this.occupancy(); if (o.count <= o.limit && o.area <= o.budget) break;
      const p = this.players[0]; let index = 0, farthest = -1;
      this.fishes.forEach((f, i) => { const d = Math.hypot(f.x - p.x, f.y - p.y); if (d > farthest) { farthest = d; index = i; } });
      this.fishes.splice(index, 1);
    }
  }
  chooseCreature() {
    const power = this.players[0].power, roll = this.random();
    let pool = CREATURES.filter(c => roll < .62 ? c.power < power : roll < .74 ? c.power >= power && c.power <= power * 3 : c.power > power);
    if (!pool.length) pool = CREATURES;
    // Bias edible groups toward the player's current tier without eliminating small fish.
    const weights = pool.map(c => c.power < power ? 1 + Math.log2(c.power + 1) * .35 : 1);
    let pick = this.random() * weights.reduce((a, b) => a + b, 0);
    return pool.find((_, i) => (pick -= weights[i]) <= 0) || pool.at(-1);
  }
  spawn(initial = false, spec = null, forced = null) {
    const c = spec ? BY_SPECIES[spec.species || 'silver'] : forced || this.chooseCreature();
    if (!c) throw new Error(`Unknown creature: ${spec?.species}`);
    const dir = spec?.dir ?? (this.random() < .5 ? 1 : -1);
    const f = { id: ++this.serial, species: c.species, name: c.name, power: c.power, reward: c.reward, dir, baseSpeed: 52 + this.random() * 34, phase: this.random() * 6.28, age: 0, fleeing: false, vx: 0, vy: 0 };
    this.size(f, c.species); f.speed = f.baseSpeed * this.scale;
    if (spec) { if (spec.speed !== undefined) { f.speed = spec.speed; f.baseSpeed = spec.speed / this.scale; } }
    const b = this.bounds(f), randY = () => b.top + this.random() * Math.max(0, b.bottom - b.top);
    f.x = spec?.x ?? (initial ? b.left + this.random() * Math.max(0, b.right - b.left) : dir > 0 ? -f.r * 2 : this.width + f.r * 2);
    f.y = spec?.y ?? randY(); f.homeY = f.y; f.vx = dir * f.speed;
    if (!spec) {
      const o = this.occupancy(); if (o.count >= o.limit || o.area + bodyArea(f) > o.budget) return null;
      if (initial) {
        const safe = () => this.players.every(p => Math.hypot(f.x - p.x, f.y - p.y) > f.r + p.r + 65 * this.scale) && this.fishes.every(other => Math.abs(f.x - other.x) > (f.r + other.r) * 1.15 || Math.abs(f.y - other.y) > (f.ry + other.ry) * 1.3 + 18 * this.scale);
        let tries = 0;
        while (!safe() && tries++ < 45) { f.x = b.left + this.random() * Math.max(0, b.right - b.left); f.y = randY(); }
        if (!safe()) return null;
      }
    }
    this.contain(f); f.homeY = f.y; this.fishes.push(f); return f;
  }
  eat(p, f) {
    p.eaten++; p.score += f.reward; p.power += f.reward; p.pop = .3;
    this.size(p, 'loopie');
    const level = LEVELS.reduce((n, threshold, i) => p.power >= threshold ? i : n, 0);
    this.events.push({ type: 'eat', player: p.id, x: f.x, y: f.y, value: f.reward, species: f.species });
    if (level > p.level) { p.level = level; this.events.push({ type: 'grow', player: p.id, level, x: p.x, y: p.y }); }
    this.fishes.splice(this.fishes.indexOf(f), 1); this.contain(p, true);
  }
  step(dt, inputs = []) {
    if (this.status !== 'running') return;
    this.time += dt;
    for (const p of this.players) {
      if (!p.alive) continue;
      const input = inputs[p.id] || { x: 0, y: 0 }, n = Math.hypot(input.x, input.y), speed = 210 * this.scale / (1 + p.level * .025), factor = n > 1 ? 1 / n : 1, easing = 1 - Math.exp(-19 * dt);
      p.vx += (input.x * factor * speed - p.vx) * easing; p.vy += (input.y * factor * speed - p.vy) * easing;
      p.x += p.vx * dt; p.y += p.vy * dt; this.contain(p, true);
      if (Math.abs(p.vx) > 5) p.dir = p.vx > 0 ? 1 : -1;
      p.grace = Math.max(0, p.grace - dt); p.pop = Math.max(0, p.pop - dt); p.visualR += (p.r - p.visualR) * (1 - Math.exp(-10 * dt));
    }
    for (const f of this.fishes) {
      f.age += dt;
      const p = this.players[0], dx = f.x - p.x, dy = f.y - p.y, distance = Math.hypot(dx, dy), reach = p.r + f.r + 74 * this.scale;
      f.fleeing = p.alive && f.species !== 'silver' && relation(p, f) === 'prey' && distance < reach;
      let vx = f.dir * f.speed, vy;
      if (f.fleeing) {
        const escapeSpeed = Math.min(166 * this.scale, f.speed + 72 * this.scale), n = distance || 1;
        vx = (distance ? dx / n : f.dir) * escapeSpeed; vy = dy / n * escapeSpeed; f.homeY = f.y;
      } else vy = (f.homeY + Math.sin(f.age * .8 + f.phase) * 10 * this.scale - f.y) * 3;
      const easing = 1 - Math.exp(-7 * dt); f.vx += (vx - f.vx) * easing; f.vy += (vy - f.vy) * easing;
      f.x += f.vx * dt; f.y += f.vy * dt; this.contain(f);
      if (Math.abs(f.vx) > 5) f.dir = f.vx > 0 ? 1 : -1;
    }
    // All danger collisions precede all eating. Same-step growth cannot erase a dangerous overlap.
    for (const p of this.players) {
      if (!p.alive || p.grace > 0) continue;
      const danger = this.fishes.find(f => relation(p, f) === 'danger' && overlaps(p, f));
      if (danger) { p.alive = false; p.vx = p.vy = 0; this.events.push({ type: 'death', player: p.id, x: p.x, y: p.y }); }
    }
    for (const p of this.players) {
      if (!p.alive) continue;
      for (const f of [...this.fishes]) if (relation(p, f) === 'prey' && overlaps(p, f)) this.eat(p, f);
    }
    this.fishes = this.fishes.filter(f => f.x > -f.r * 4 && f.x < this.width + f.r * 4);
    this.trimPopulation(); this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) { this.spawn(); this.spawnTimer = .9; }
    if (this.players.every(p => !p.alive)) { this.status = 'over'; this.events.push({ type: 'over' }); }
  }
  drainEvents() { const events = this.events; this.events = []; return events; }
  snapshot() {
    return { width: this.width, height: this.height, topInset: this.topInset, bottomInset: this.bottomInset, base: this.base, scale: this.scale, time: this.time, status: this.status, occupancy: this.occupancy(), displayLimit: DISPLAY_LIMIT, creatures: CREATURES, players: this.players.map(p => ({ ...p })), fishes: this.fishes.map(f => ({ ...f })), finite: [...this.players, ...this.fishes].every(e => ['x', 'y', 'r', 'ry', 'power'].every(k => Number.isFinite(e[k]))) };
  }
}
