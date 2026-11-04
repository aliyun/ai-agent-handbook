import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import net from 'node:net';
import { EventEmitter, once } from 'node:events';
import {
  existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync,
  renameSync, rmSync, symlinkSync, writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createLeaderboardServer } from './server.mjs';

const PAIR = { level: '01-refund-timeout', version: 'v1' };
const QUERY = '/api/leaderboard?level=01-refund-timeout&version=v1';
const ORIGIN = 'http://localhost:4173';
const EPOCH = Date.parse('2026-10-30T12:00:00.000Z');
const ENTRY_KEYS = ['githubId', 'homepage', 'rank', 'score', 'submittedAt'];

function submission(githubId = 'Alice', score = 80, extra = {}) {
  return { ...PAIR, githubId, homepage: 'https://example.com/profile', score, ...extra };
}

function request(server, {
  method = 'GET', path = QUERY, headers = {}, body, chunks,
} = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      host: '127.0.0.1', port: server.address().port, method, path, headers,
    }, (res) => {
      const received = [];
      res.on('data', (chunk) => received.push(chunk));
      res.on('error', reject);
      res.on('end', () => {
        try {
          assert.match(res.headers['content-type'], /^application\/json/);
          assert.equal(res.headers['cache-control'], 'no-store');
          assert.equal(res.headers['x-content-type-options'], 'nosniff');
          const text = Buffer.concat(received).toString('utf8');
          resolve({ status: res.statusCode, headers: res.headers,
            body: text ? JSON.parse(text) : undefined });
        } catch (error) { reject(error); }
      });
    });
    req.on('error', reject);
    if (chunks) {
      for (const chunk of chunks) req.write(chunk);
      req.end();
    } else req.end(body);
  });
}

function post(server, value = submission(), options = {}) {
  return request(server, { method: 'POST', path: '/api/leaderboard',
    body: JSON.stringify(value), ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers } });
}

async function stop(server) {
  if (!server?.listening) return;
  await new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
    server.closeAllConnections();
  });
}

async function fixture(t, options = {}, seed) {
  const directory = mkdtempSync(join(tmpdir(), 'leaderboard-test-'));
  const dataFile = join(directory, 'leaderboard.json');
  let server;
  // Register cleanup before startup, including when startup throws.
  t.after(async () => {
    await stop(server);
    rmSync(directory, { recursive: true, force: true });
  });
  if (seed !== undefined) writeFileSync(dataFile, JSON.stringify(seed));
  const settings = { dataFile, rateLimit: { limit: 1000 }, ...options };
  async function start() {
    server = createLeaderboardServer(settings);
    server.listen(0, '127.0.0.1');
    await once(server, 'listening');
    return server;
  }
  await start();
  return {
    directory, dataFile, get server() { return server; },
    async restart() { await stop(server); return start(); },
  };
}

function persistedRecord(githubId, sequence, extra = {}) {
  return { ...submission(githubId), submittedAt: new Date(EPOCH).toISOString(), sequence, ...extra };
}

function persistedStore(records = []) {
  return { schemaVersion: 1,
    nextSequence: Math.max(0, ...records.map((record) => record.sequence)) + 1,
    lastSubmittedAt: Math.max(0, ...records.map((record) => Date.parse(record.submittedAt))),
    records };
}

test('empty GET and exact public POST shape; only whitelisted fields are persisted', async (t) => {
  const f = await fixture(t, { now: () => EPOCH });
  const empty = await request(f.server);
  assert.equal(empty.status, 200);
  assert.deepEqual(empty.body, { entries: [], total: 0 });
  assert.equal(existsSync(f.dataFile), false);
  const result = await post(f.server, submission(' Alice ', 60, {
    rank: -999, submittedAt: '1900-01-01', serverTime: 0,
    code: 'do not execute or store', email: 'private@example.com', ip: '10.0.0.1',
  }));
  assert.equal(result.status, 200);
  assert.deepEqual(Object.keys(result.body).sort(), ['entries', 'entry', 'status', 'total']);
  assert.equal(result.body.status, 'created');
  assert.deepEqual(result.body.entry, {
    rank: 1, githubId: 'Alice', homepage: 'https://example.com/profile',
    score: 60, submittedAt: new Date(EPOCH).toISOString(),
  });
  assert.deepEqual(Object.keys(result.body.entry).sort(), ENTRY_KEYS);
  assert.deepEqual(result.body.entries, [result.body.entry]);
  assert.equal(result.body.total, 1);
  const store = JSON.parse(readFileSync(f.dataFile, 'utf8'));
  assert.deepEqual(Object.keys(store.records[0]).sort(),
    ['githubId', 'homepage', 'level', 'score', 'sequence', 'submittedAt', 'version']);
  assert.equal(store.nextSequence, 2);
  assert.equal(store.lastSubmittedAt, EPOCH);
  assert.deepEqual(readdirSync(f.directory), ['leaderboard.json']);
});

test('score descending, earliest equal score first, ordinal ranks, TOP20 and full total', async (t) => {
  let clock = EPOCH;
  const f = await fixture(t, { now: () => clock });
  for (let i = 0; i < 25; i += 1) {
    clock = EPOCH + i;
    const result = await post(f.server, submission(`user-${i}`, 60 + i));
    assert.equal(result.status, 200);
    assert.equal(result.body.total, i + 1);
    assert.equal(result.body.entry.rank, 1);
  }
  clock += 1;
  const later = await post(f.server, submission('later-equal', 84));
  assert.equal(later.body.entry.rank, 2);
  const bottom = await post(f.server, submission('bottom', 60));
  assert.equal(bottom.body.entry.rank, 27);
  assert.equal(bottom.body.entries.length, 20);
  const { body } = await request(f.server);
  assert.equal(body.total, 27);
  assert.equal(body.entries.length, 20);
  assert.deepEqual(body.entries.slice(0, 3).map((entry) => entry.githubId),
    ['user-24', 'later-equal', 'user-23']);
  assert.deepEqual(body.entries.map((entry) => entry.rank), Array.from({ length: 20 }, (_, i) => i + 1));
  assert.equal(body.entries.at(-1).githubId, 'user-6');
  for (const entry of body.entries) assert.deepEqual(Object.keys(entry).sort(), ENTRY_KEYS);
});

test('same-millisecond ties use persisted server sequence; backward clock is clamped across restart', async (t) => {
  let clock = EPOCH;
  const f = await fixture(t, { now: () => clock });
  for (const id of ['zeta', 'Alpha', 'beta']) {
    assert.equal((await post(f.server, submission(id, 90))).status, 200);
  }
  clock = EPOCH - 100000;
  const fourth = await post(f.server, submission('aardvark', 90));
  assert.equal(fourth.body.entry.submittedAt, new Date(EPOCH).toISOString());
  assert.equal(fourth.body.entry.rank, 4);
  await f.restart();
  const fifth = await post(f.server, submission('zero', 90));
  assert.equal(fifth.body.entry.rank, 5);
  assert.deepEqual((await request(f.server)).body.entries.map((entry) => entry.githubId),
    ['zeta', 'Alpha', 'beta', 'aardvark', 'zero']);
  assert.deepEqual(JSON.parse(readFileSync(f.dataFile, 'utf8')).records.map((record) => record.sequence),
    [1, 2, 3, 4, 5]);
});

test('case-insensitive ID upsert: equal/lower scores cannot change link/time; higher scores can', async (t) => {
  let clock = EPOCH;
  const f = await fixture(t, { now: () => clock });
  const original = (await post(f.server, submission(' Alice ', 80))).body.entry;
  const originalFile = readFileSync(f.dataFile, 'utf8');
  clock += 1000;
  for (const score of [80, 79, 60]) {
    const result = await post(f.server, submission('aLiCe', score, { homepage: 'https://other.example/new' }));
    assert.equal(result.body.status, 'unchanged');
    assert.equal(result.body.total, 1);
    assert.deepEqual(result.body.entry, original);
    assert.equal(readFileSync(f.dataFile, 'utf8'), originalFile);
  }
  await post(f.server, submission('Bob', 90));
  clock += 1000;
  const improved = await post(f.server, submission('ALICE', 90, { homepage: 'https://other.example/new' }));
  assert.equal(improved.body.status, 'improved');
  assert.equal(improved.body.total, 2);
  assert.equal(improved.body.entry.githubId, 'Alice');
  assert.equal(improved.body.entry.rank, 2); // Bob reached 90 first.
  assert.equal(improved.body.entry.homepage, 'https://other.example/new');
  assert.equal(improved.body.entry.submittedAt, new Date(clock).toISOString());
  clock += 1;
  const best = await post(f.server, submission('alice', 100));
  assert.equal(best.body.entry.rank, 1);
  assert.equal(best.body.status, 'improved');
  await f.restart();
  assert.deepEqual((await request(f.server)).body, { entries: best.body.entries, total: 2 });
  assert.equal((await post(f.server, submission('ALICE', 99))).body.status, 'unchanged');
});

test('parallel POSTs never lose records or reduce a duplicate ID best score', async (t) => {
  const f = await fixture(t, { now: () => EPOCH });
  const results = await Promise.all(Array.from({ length: 30 }, (_, i) =>
    post(f.server, submission(`parallel-${i}`, 60 + i))));
  assert.ok(results.every((result) => result.status === 200));
  const sameId = await Promise.all([80, 100, 90, 60].map((score) =>
    post(f.server, submission('Same-ID', score))));
  assert.ok(sameId.every((result) => result.status === 200));
  const board = (await request(f.server)).body;
  assert.equal(board.total, 31);
  assert.equal(board.entries[0].githubId, 'Same-ID');
  assert.equal(board.entries[0].score, 100);
  await f.restart();
  assert.deepEqual((await request(f.server)).body, board);
});

test('only available level/version pairs accepted by GET and POST', async (t) => {
  const f = await fixture(t);
  for (const [level, version] of [
    ['02-resume', 'v1'], ['03-memory', 'v1'], ['04-efficiency', 'v1'],
    [PAIR.level, 'v2'], ['unknown', 'v1'], [PAIR.level, ''], ['', 'v1'],
  ]) {
    assert.equal((await request(f.server, {
      path: `/api/leaderboard?level=${level}&version=${version}`,
    })).status, 400);
    assert.equal((await post(f.server, submission('Alice', 80, { level, version }))).status, 400);
  }
  for (const path of ['/api/leaderboard', `/api/leaderboard?level=${PAIR.level}`,
    `${QUERY}&level=${PAIR.level}`, `${QUERY}&version=v1`]) {
    assert.equal((await request(f.server, { path })).status, 400);
  }
  assert.equal((await post(f.server, submission('Alice', 80, { level: 1 }))).status, 400);
  assert.equal(existsSync(f.dataFile), false);
});

test('GitHub ID trim/length/hyphen validation and arbitrary public HTTPS homepages', async (t) => {
  const f = await fixture(t);
  for (const id of ['', ' ', '-alice', 'alice-', 'alice--bob', 'a_b', 'a.b', 'a/b',
    '@alice', 'a b', '张三', 'a'.repeat(40), 1, null, {}, 'a\nb', '<script>']) {
    assert.equal((await post(f.server, submission(id))).status, 400, String(id));
  }
  for (const [id, homepage] of [
    ['a', 'https://example.com/'], ['a'.repeat(39), 'https://portfolio.example/path?q=1#about'],
    ['A-1-b', 'https://8.8.8.8:8443/path'], ['mixed', 'https://[2606:4700:4700::1111]/'],
    ['mapped', 'https://[::ffff:8.8.8.8]/'], ['unicode', 'https://例子.中国/个人主页'],
    ['maxlink', `https://example.com/${'a'.repeat(2048 - 'https://example.com/'.length)}`],
  ]) {
    const result = await post(f.server, submission(id, 80, { homepage }));
    assert.equal(result.status, 200, homepage);
    assert.equal(result.body.entry.homepage, homepage);
  }
});

test('reject malicious/malformed/credential/local URLs including canonicalized and mapped IPs', async (t) => {
  const f = await fixture(t);
  const homepages = [
    '', null, 123, {}, 'not a URL', 'http://example.com', 'javascript:alert(1)',
    'data:text/html,test', 'file:///etc/passwd', 'https:example.com', 'https://',
    'https://user:pass@example.com', 'https://user@example.com', 'https://:pass@example.com',
    'https://@example.com', 'https://localhost/', 'https://LOCALHOST.:443/',
    'https://sub.localhost', 'https://printer.local', 'https://home.arpa',
    'https://device.home.arpa', 'https://0.0.0.0', 'https://10.1.2.3',
    'https://127.0.0.1', 'https://127.1', 'https://2130706433', 'https://0x7f000001',
    'https://0177.0.0.1', 'https://169.254.169.254', 'https://172.16.0.1',
    'https://172.31.255.255', 'https://192.168.1.1', 'https://100.64.0.1',
    'https://224.0.0.1', 'https://255.255.255.255', 'https://[::]', 'https://[::1]',
    'https://[fc00::1]', 'https://[fd12::1]', 'https://[fe80::1]', 'https://[fec0::1]',
    'https://[ff02::1]', 'https://[::127.0.0.1]', 'https://[::ffff:127.0.0.1]',
    'https://[::ffff:a00:1]', 'https://[::ffff:c0a8:101]', 'https://[fe80::1%25en0]',
    'https://example.com\\@localhost/', 'https://example.com/\npath',
    'https://exa mple.com', ' https://example.com', `https://example.com/${'a'.repeat(2048)}`,
  ];
  for (const homepage of homepages) {
    assert.equal((await post(f.server, submission('Alice', 80, { homepage }))).status, 400, String(homepage));
  }
  assert.deepEqual((await request(f.server)).body, { entries: [], total: 0 });
  assert.equal(existsSync(f.dataFile), false);
});

test('score must be an integer 60..100, with no coercion; invalid JSON/object/UTF-8 rejected', async (t) => {
  const f = await fixture(t);
  for (const score of [59, 101, -1, 80.5, '80', true, null, {}, [], 1e100]) {
    assert.equal((await post(f.server, submission('Alice', score))).status, 400, String(score));
  }
  const noScore = submission();
  delete noScore.score;
  assert.equal((await post(f.server, noScore)).status, 400);
  for (const body of ['', '{', 'null', '[]', '1', '"hello"', '{"score":NaN}',
    Buffer.from([0xff])]) {
    assert.equal((await request(f.server, { method: 'POST', path: '/api/leaderboard', body,
      headers: { 'Content-Type': 'application/json' } })).status, 400);
  }
  assert.equal((await post(f.server, submission('Sixty', 60))).status, 200);
  assert.equal((await post(f.server, submission('Hundred', 100))).status, 200);
});

test('Content-Type 415 and byte-counted 4096 limit for Content-Length and chunked bodies', async (t) => {
  const f = await fixture(t);
  for (const headers of [{}, { 'Content-Type': 'text/plain' },
    { 'Content-Type': 'application/jsonp' },
    { 'Content-Type': 'application/json', 'Content-Encoding': 'gzip' }]) {
    assert.equal((await request(f.server, { method: 'POST', path: '/api/leaderboard',
      body: JSON.stringify(submission()), headers })).status, 415);
  }
  const exact = JSON.stringify(submission('exact')).padEnd(4096, ' ');
  assert.equal((await request(f.server, { method: 'POST', path: '/api/leaderboard', body: exact,
    headers: { 'Content-Type': 'Application/JSON; charset=utf-8', 'Content-Length': 4096 } })).status, 200);
  assert.equal((await request(f.server, { method: 'POST', path: '/api/leaderboard', body: `${exact} `,
    headers: { 'Content-Type': 'application/json', 'Content-Length': 4097 } })).status, 413);
  const utf8 = JSON.stringify(submission('unicode-body', 80, { ignored: '字'.repeat(1400) }));
  assert.ok(utf8.length < 4096 && Buffer.byteLength(utf8) > 4096);
  assert.equal((await request(f.server, { method: 'POST', path: '/api/leaderboard',
    chunks: [utf8.slice(0, 2000), utf8.slice(2000)],
    headers: { 'Content-Type': 'application/json', 'Transfer-Encoding': 'chunked' } })).status, 413);
  assert.equal((await request(f.server)).body.total, 1);
});

test('CORS exact allowlist, origin-less use, JSON preflight and error headers', async (t) => {
  const f = await fixture(t, { allowedOrigins: [ORIGIN, 'https://pages.example'] });
  for (const origin of [ORIGIN, 'https://pages.example']) {
    const result = await request(f.server, { headers: { Origin: origin } });
    assert.equal(result.status, 200);
    assert.equal(result.headers['access-control-allow-origin'], origin);
    assert.equal(result.headers.vary, 'Origin');
    assert.equal(result.headers['access-control-allow-credentials'], undefined);
  }
  for (const origin of ['null', 'https://evil.example', `${ORIGIN}.evil`,
    `${ORIGIN}/`, 'http://localhost:4174', '*']) {
    const result = await post(f.server, submission(), { headers: { Origin: origin } });
    assert.equal(result.status, 403);
    assert.equal(result.headers['access-control-allow-origin'], undefined);
  }
  const preflight = await request(f.server, { method: 'OPTIONS', path: '/api/leaderboard',
    headers: { Origin: ORIGIN, 'Access-Control-Request-Method': 'POST',
      'Access-Control-Request-Headers': 'content-type' } });
  assert.equal(preflight.status, 200);
  assert.deepEqual(preflight.body, { status: 'ok' });
  assert.equal(preflight.headers['access-control-allow-origin'], ORIGIN);
  assert.equal(preflight.headers['access-control-allow-methods'], 'GET, POST, OPTIONS');
  assert.equal(preflight.headers['access-control-allow-headers'], 'Content-Type');
  assert.equal((await request(f.server, { method: 'OPTIONS', headers: {
    Origin: ORIGIN, 'Access-Control-Request-Method': 'DELETE',
  } })).status, 405);
  assert.equal((await request(f.server, { method: 'OPTIONS', headers: {
    Origin: ORIGIN, 'Access-Control-Request-Headers': 'content-type, authorization',
  } })).status, 400);
  assert.equal((await request(f.server, { method: 'OPTIONS', headers: { Origin: 'https://evil.example' } })).status, 403);
  assert.equal((await request(f.server, { method: 'OPTIONS' })).status, 200);
  const noOrigin = await post(f.server);
  assert.equal(noOrigin.status, 200);
  assert.equal(noOrigin.headers['access-control-allow-origin'], undefined);
  const inputError = await post(f.server, submission('bad--id'), { headers: { Origin: ORIGIN } });
  assert.equal(inputError.status, 400);
  assert.equal(inputError.headers['access-control-allow-origin'], ORIGIN);
});

test('empty origin allowlist denies all browser origins, and wildcard/config errors fail fast', async (t) => {
  const f = await fixture(t, { allowedOrigins: [] });
  assert.equal((await request(f.server, { headers: { Origin: ORIGIN } })).status, 403);
  assert.equal((await request(f.server)).status, 200);
  for (const allowedOrigins of [['*'], ['null'], [ORIGIN + '/'], ['https://user@example.com'], ORIGIN]) {
    assert.throws(() => createLeaderboardServer({ dataFile: f.dataFile, allowedOrigins }), TypeError);
  }
  for (const rateLimit of [{ limit: 0 }, { windowMs: -1 }, { maxKeys: 10001 }, { limit: 1.5 }]) {
    assert.throws(() => createLeaderboardServer({ dataFile: f.dataFile, rateLimit }), TypeError);
  }
  assert.throws(() => createLeaderboardServer(), TypeError);
});

test('unknown routes 404 and unsupported methods 405; HEAD follows HTTP no-body semantics', async (t) => {
  const f = await fixture(t);
  for (const path of ['/unknown', '/api/leaderboard/', '/']) {
    assert.equal((await request(f.server, { path })).status, 404);
    assert.equal((await request(f.server, { path, method: 'OPTIONS' })).status, 404);
  }
  for (const method of ['PUT', 'DELETE', 'PATCH', 'HEAD']) {
    const result = await request(f.server, { method });
    assert.equal(result.status, 405);
    assert.equal(result.headers.allow, 'GET, POST, OPTIONS');
    if (method !== 'HEAD') assert.equal(typeof result.body.error, 'string');
  }
});

test('30/min default per-socket-IP POST limit, spoofed forwarding ignored; reads/preflights free', async (t) => {
  let clock = EPOCH;
  const f = await fixture(t, { now: () => clock, rateLimit: {} });
  for (let i = 0; i < 30; i += 1) {
    const result = await post(f.server, submission(), { headers: { 'X-Forwarded-For': `8.8.8.${i}` } });
    assert.equal(result.status, 200);
  }
  const blocked = await post(f.server, submission('Other'));
  assert.equal(blocked.status, 429);
  assert.equal(blocked.headers['retry-after'], '60');
  assert.equal((await request(f.server)).status, 200);
  assert.equal((await request(f.server, { method: 'OPTIONS' })).status, 200);
  clock -= 1000;
  assert.equal((await post(f.server)).status, 429);
  clock = EPOCH + 59999;
  assert.equal((await post(f.server)).status, 429);
  clock = EPOCH + 60000;
  assert.equal((await post(f.server, submission('Other'))).status, 200);
  assert.equal((await request(f.server)).body.total, 2);
});

test('invalid write attempts consume the configurable rate limit', async (t) => {
  const f = await fixture(t, { rateLimit: { limit: 2, windowMs: 1000, maxKeys: 1 } });
  assert.equal((await post(f.server, submission('bad--id'))).status, 400);
  assert.equal((await post(f.server, submission('bad--id'))).status, 400);
  assert.equal((await post(f.server)).status, 429);
  assert.equal((await request(f.server)).body.total, 0);
});

test('bounded limiter map refuses new IPs while full, then cleans expired buckets', async (t) => {
  let clock = EPOCH;
  const f = await fixture(t, { now: () => clock,
    rateLimit: { limit: 2, windowMs: 1000, maxKeys: 1 } });
  // Synthetic socket addresses exercise map capacity without requiring OS loopback aliases.
  // Rejected requests do not read a body; the real handler/limiter are still used.
  async function synthetic(ip) {
    const req = Object.assign(new EventEmitter(), {
      headers: {}, method: 'POST', url: '/api/leaderboard', complete: true,
      socket: { remoteAddress: ip },
    });
    return new Promise((resolve) => {
      const headers = {};
      const res = { setHeader(name, value) { headers[name] = value; },
        end(body) { resolve({ status: this.statusCode, headers, body: JSON.parse(body) }); } };
      f.server.emit('request', req, res);
    });
  }
  assert.equal((await synthetic('203.0.113.1')).status, 415);
  assert.equal((await synthetic('203.0.113.2')).status, 429);
  assert.equal((await synthetic('203.0.113.1')).status, 415);
  assert.equal((await synthetic('203.0.113.1')).status, 429);
  clock += 1000;
  assert.equal((await synthetic('203.0.113.2')).status, 415);
  assert.equal((await synthetic('203.0.113.3')).status, 429);
});

test('record cap 10000 rejects only new IDs; existing improvements and reads remain usable', async (t) => {
  const records = Array.from({ length: 10000 }, (_, i) => persistedRecord(`seed-${i}`, i + 1, { score: 60 }));
  const f = await fixture(t, { now: () => EPOCH + 1 }, persistedStore(records));
  const original = readFileSync(f.dataFile, 'utf8');
  const full = await post(f.server, submission('new-id', 100));
  assert.equal(full.status, 409);
  assert.equal(readFileSync(f.dataFile, 'utf8'), original);
  const improved = await post(f.server, submission('SEED-9999', 100));
  assert.equal(improved.body.status, 'improved');
  assert.equal(improved.body.total, 10000);
  assert.equal(improved.body.entry.rank, 1);
  assert.equal(improved.body.entries.length, 20);
  assert.equal((await post(f.server, submission('seed-9999', 90))).body.status, 'unchanged');
  await f.restart();
  assert.equal((await request(f.server)).body.total, 10000);
});

test('atomic replace failure returns 500 with no half-updated memory or leftover temp file', async (t) => {
  let clock = EPOCH;
  const f = await fixture(t, { now: () => clock });
  const original = (await post(f.server)).body.entry;
  const backup = join(f.directory, 'backup.json');
  renameSync(f.dataFile, backup);
  mkdirSync(f.dataFile); // Forces the final file rename to fail, even when running as root.
  clock += 1000;
  for (const value of [submission('Alice', 100, { homepage: 'https://new.example/' }), submission('Bob', 90)]) {
    const failed = await post(f.server, value);
    assert.equal(failed.status, 500);
    assert.deepEqual(failed.body, { error: 'Internal server error.' });
    assert.deepEqual((await request(f.server)).body, { entries: [original], total: 1 });
    assert.equal(readdirSync(f.directory).some((name) => name.endsWith('.tmp')), false);
  }
  rmSync(f.dataFile, { recursive: true });
  renameSync(backup, f.dataFile);
  await f.restart();
  assert.deepEqual((await request(f.server)).body, { entries: [original], total: 1 });
  assert.equal((await post(f.server, submission('Alice', 100))).body.status, 'improved');
  assert.equal(JSON.parse(readFileSync(f.dataFile, 'utf8')).records[0].sequence, 2);
});

test('temporary-file creation failure and unexpected server clock exception return JSON 500', async (t) => {
  let clock = EPOCH;
  const f = await fixture(t, { now: () => {
    if (clock === null) throw new Error('secret diagnostic');
    return clock;
  } });
  const original = (await post(f.server)).body.entry;
  clock = null;
  assert.equal((await post(f.server, submission('Alice', 100))).status, 500);
  assert.deepEqual((await request(f.server)).body.entries, [original]);
  clock = EPOCH + 1;
  const directory = mkdtempSync(join(tmpdir(), 'leaderboard-missing-parent-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  const dataFile = join(directory, 'missing', 'board.json');
  const server = createLeaderboardServer({ dataFile });
  t.after(() => stop(server));
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  assert.equal((await post(server)).status, 500);
  assert.deepEqual((await request(server)).body, { entries: [], total: 0 });
  assert.equal(existsSync(dataFile), false);
});

test('bad on-disk JSON/schema/records fail closed without altering the bytes', async (t) => {
  const directory = mkdtempSync(join(tmpdir(), 'leaderboard-corrupt-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  const dataFile = join(directory, 'board.json');
  const good = persistedRecord('Alice', 1);
  const corrupt = [
    '', '{broken', 'null', '[]', '{}',
    Buffer.from(JSON.stringify(persistedStore([{ ...good, homepage: 'https://example.com/\u00ff' }])), 'latin1'),
    JSON.stringify({ ...persistedStore(), schemaVersion: 2 }),
    JSON.stringify({ ...persistedStore(), records: {} }),
    JSON.stringify({ ...persistedStore([good]), nextSequence: 1 }),
    JSON.stringify({ ...persistedStore([good]), lastSubmittedAt: EPOCH - 1 }),
    JSON.stringify({ ...persistedStore([good]), ip: '127.0.0.1' }),
    ...[
      { githubId: ' Alice ' }, { githubId: 'bad--id' }, { homepage: 'https://localhost/' },
      { score: 59 }, { score: '80' }, { level: '../invalid' }, { version: 'invalid' },
      { submittedAt: 'not a date' }, { submittedAt: '2026-10-30T12:00:00Z' },
      { submittedAt: '1900-01-01T00:00:00.000Z' }, { sequence: 0 }, { sequence: 1.5 },
      { email: 'private@example.com' },
    ].map((extra) => JSON.stringify(persistedStore([{ ...good, ...extra }]))),
    JSON.stringify(persistedStore([good, persistedRecord('ALICE', 2)])),
    JSON.stringify(persistedStore([good, persistedRecord('Bob', 1)])),
    JSON.stringify(persistedStore(Array.from({ length: 10001 }, (_, i) => persistedRecord(`user-${i}`, i + 1)))),
  ];
  for (const bytes of corrupt) {
    writeFileSync(dataFile, bytes);
    assert.throws(() => createLeaderboardServer({ dataFile }), /Invalid leaderboard data/);
    assert.deepEqual(readFileSync(dataFile), Buffer.from(bytes));
  }
  rmSync(dataFile);
  symlinkSync(join(directory, 'absent.json'), dataFile);
  assert.throws(() => createLeaderboardServer({ dataFile }), { code: 'ENOENT' });
  assert.deepEqual(readdirSync(directory), ['board.json']);
});

test('archived versions and retired levels survive restart without mixing into the current board', async (t) => {
  const archived = [
    persistedRecord('Alice', 1, { version: 'v0', score: 100 }),
    // 同一 GitHub ID 在其他关卡的高分不能覆盖当前关卡的成绩。
    persistedRecord('Alice', 2, { level: '99-retired', score: 100 }),
  ];
  const f = await fixture(t, { now: () => EPOCH + 1000 }, persistedStore(archived));
  assert.deepEqual((await request(f.server)).body, { entries: [], total: 0 });
  const current = await post(f.server, submission('Alice', 80));
  assert.equal(current.body.total, 1);
  assert.equal(current.body.entry.score, 80);
  assert.equal(current.body.entry.rank, 1);
  await f.restart();
  assert.deepEqual((await request(f.server)).body, { entries: [current.body.entry], total: 1 });
  assert.equal(JSON.parse(readFileSync(f.dataFile, 'utf8')).records.length, 3);
  assert.equal((await post(f.server, submission('Alice', 100, { version: 'v0' }))).status, 400);
});

test('aborted POST bodies never commit and do not crash later requests', async (t) => {
  const f = await fixture(t);
  const socket = net.connect({ host: '127.0.0.1', port: f.server.address().port });
  t.after(() => socket.destroy());
  await once(socket, 'connect');
  const arrived = once(f.server, 'request');
  const body = JSON.stringify(submission());
  socket.write('POST /api/leaderboard HTTP/1.1\r\nHost: localhost\r\n'
    + `Content-Type: application/json\r\nContent-Length: ${Buffer.byteLength(body) + 100}\r\n\r\n${body}`);
  const [incoming] = await arrived;
  const aborted = once(incoming, 'aborted');
  socket.destroy();
  await aborted;
  assert.deepEqual((await request(f.server)).body, { entries: [], total: 0 });
  assert.equal(existsSync(f.dataFile), false);
  assert.equal((await post(f.server)).body.status, 'created');
});

test('malformed HTTP parser errors also receive JSON/no-store/nosniff', async (t) => {
  const f = await fixture(t);
  const socket = net.connect({ host: '127.0.0.1', port: f.server.address().port });
  t.after(() => socket.destroy());
  const chunks = [];
  socket.on('data', (chunk) => chunks.push(chunk));
  const ended = once(socket, 'end');
  await once(socket, 'connect');
  socket.write('GET / HTTP/1.1\r\nHost: localhost\r\nInvalid Header\r\n\r\n');
  await ended;
  const response = Buffer.concat(chunks).toString('utf8');
  assert.match(response, /^HTTP\/1.1 400 /);
  assert.match(response, /Content-Type: application\/json/);
  assert.match(response, /Cache-Control: no-store/);
  assert.match(response, /X-Content-Type-Options: nosniff/);
  assert.deepEqual(JSON.parse(response.split('\r\n\r\n')[1]), { error: 'Invalid HTTP request.' });
});

test('CLI only starts on direct execution, uses temporary configured data path, prints warning', async (t) => {
  const directory = mkdtempSync(join(tmpdir(), 'leaderboard-cli-'));
  const dataFile = join(directory, 'nested', 'board.json');
  const script = fileURLToPath(new URL('./server.mjs', import.meta.url));
  const child = spawn(process.execPath, [script], {
    cwd: directory, env: { ...process.env, LEADERBOARD_HOST: '127.0.0.1', LEADERBOARD_PORT: '0',
      LEADERBOARD_DATA_FILE: dataFile, LEADERBOARD_ALLOWED_ORIGINS: 'https://pages.example' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let stderr = '';
  child.stderr.setEncoding('utf8');
  child.stderr.on('data', (text) => { stderr += text; });
  t.after(async () => {
    if (child.exitCode === null && child.signalCode === null) {
      const exited = once(child, 'exit');
      child.kill();
      await exited;
    }
    rmSync(directory, { recursive: true, force: true });
  });
  const url = await new Promise((resolve, reject) => {
    let output = '';
    const timeout = setTimeout(() => reject(new Error('CLI startup timeout')), 5000);
    child.once('error', (error) => { clearTimeout(timeout); reject(error); });
    child.once('exit', () => { clearTimeout(timeout); reject(new Error(`CLI exited: ${stderr}`)); });
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', (text) => {
      output += text;
      const match = output.match(/http:\/\/127\.0\.0\.1:\d+\/api\/leaderboard\?[^\s]+/);
      if (match) { clearTimeout(timeout); resolve(match[0]); }
    });
  });
  const get = await fetch(url, { headers: { Origin: 'https://pages.example' } });
  assert.equal(get.status, 200);
  assert.equal(get.headers.get('access-control-allow-origin'), 'https://pages.example');
  assert.deepEqual(await get.json(), { entries: [], total: 0 });
  const created = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(submission()) });
  assert.equal(created.status, 200);
  assert.equal((await created.json()).status, 'created');
  assert.equal(existsSync(dataFile), true);
  assert.equal((await fetch(url, { headers: { Origin: ORIGIN } })).status, 403);
  assert.match(stderr, /自报体验榜/);
  assert.match(stderr, /未经认证/);
  assert.match(stderr, /CORS 不是认证/);
  // Imports at the top of this test file already demonstrate no automatic CLI startup.
});
