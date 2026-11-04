import http from 'node:http';
import { BlockList, isIP } from 'node:net';
import {
  closeSync, fsyncSync, lstatSync, mkdirSync, openSync, readFileSync,
  renameSync, unlinkSync, writeFileSync,
} from 'node:fs';
import { randomUUID } from 'node:crypto';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { levels } from '../levels.mjs';

// A local, single-process, self-reported experience board: neither IDs nor scores
// are authenticated. CORS is a browser policy, not authentication. No URL fetching,
// client-code execution, or storage of code/email/IP is performed.
const MAX_BODY_BYTES = 4096;
const MAX_RECORDS = 10000;
const MAX_DATE_MS = 8640000000000000;
const METHODS = ['GET', 'POST', 'OPTIONS'];
const DEFAULT_ORIGINS = ['http://127.0.0.1:4173', 'http://localhost:4173'];
const availablePairs = new Set(levels
  .filter((level) => level.status === 'available')
  .map((level) => JSON.stringify([level.id, level.version])));

const localAddresses = new BlockList();
for (const [address, prefix] of [
  ['0.0.0.0', 8], ['10.0.0.0', 8], ['100.64.0.0', 10], ['127.0.0.0', 8],
  ['169.254.0.0', 16], ['172.16.0.0', 12], ['192.0.0.0', 24],
  ['192.168.0.0', 16], ['198.18.0.0', 15], ['224.0.0.0', 3],
]) localAddresses.addSubnet(address, prefix, 'ipv4');
for (const [address, prefix] of [
  ['::', 96], ['::1', 128], ['fc00::', 7], ['fe80::', 10],
  ['fec0::', 10], ['ff00::', 8],
]) localAddresses.addSubnet(address, prefix, 'ipv6');

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function validatePair(level, version) {
  if (typeof level !== 'string' || typeof version !== 'string'
      || !availablePairs.has(JSON.stringify([level, version]))) {
    throw new HttpError(400, 'Unknown or unavailable level/version.');
  }
}

function validateGithubId(value) {
  if (typeof value !== 'string') throw new HttpError(400, 'Invalid GitHub ID.');
  const id = value.trim();
  if (!/^(?=.{1,39}$)[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(id)) {
    throw new HttpError(400, 'Invalid GitHub ID.');
  }
  return id;
}

function validateHomepage(value) {
  if (typeof value !== 'string' || value.length > 2048
      || !/^https:\/\//i.test(value) || /[\s\\\u0000-\u001f\u007f]/u.test(value)) {
    throw new HttpError(400, 'Homepage must be a valid HTTPS URL (max 2048 characters).');
  }
  let url;
  try { url = new URL(value); } catch {
    throw new HttpError(400, 'Invalid homepage URL.');
  }
  const hostname = url.hostname.replace(/^\[|\]$/g, '').toLowerCase().replace(/\.+$/, '');
  const family = isIP(hostname);
  // WHATWG URL canonicalization also catches decimal/octal/hex IPv4 forms.
  // BlockList recognizes IPv4-mapped IPv6 against its IPv4 subnets.
  const hasUserinfo = value.slice(value.indexOf('://') + 3).split(/[/?#]/, 1)[0].includes('@');
  if (url.protocol !== 'https:' || !hostname || hasUserinfo || url.username || url.password
      || hostname === 'localhost' || hostname.endsWith('.localhost')
      || hostname.endsWith('.local') || hostname === 'local'
      || hostname === 'home.arpa' || hostname.endsWith('.home.arpa')
      || (family && localAddresses.check(hostname, family === 4 ? 'ipv4' : 'ipv6'))) {
    throw new HttpError(400, 'Homepage credentials and local addresses are not allowed.');
  }
  // Retain the validated link as supplied, avoiding percent-encoding length inflation.
  // DNS is deliberately not resolved: this is a link, never a server-side fetch.
  return value;
}

function validateSubmission(value, { persisted = false } = {}) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new HttpError(400, 'Expected a JSON object.');
  }
  if (persisted) {
    // 保留旧版本及已下线关卡的数据；目录升级不能让整份数据库无法启动。
    // 当前 GET/POST 仍只接收目录中开放的关卡与评分版本。
    if (typeof value.level !== 'string' || !/^\d{2}-[a-z0-9-]+$/.test(value.level)
        || typeof value.version !== 'string' || !/^v\d+$/.test(value.version)) {
      throw new HttpError(400, 'Invalid persisted level/version.');
    }
  } else validatePair(value.level, value.version);
  if (!Number.isInteger(value.score) || value.score < 60 || value.score > 100) {
    throw new HttpError(400, 'Self-reported passing score must be an integer from 60 to 100.');
  }
  return {
    level: value.level, version: value.version,
    githubId: validateGithubId(value.githubId),
    homepage: validateHomepage(value.homepage), score: value.score,
  };
}

function keyOf(record) {
  return JSON.stringify([record.level, record.version, record.githubId.toLowerCase()]);
}

function hasExactKeys(value, keys) {
  return value && typeof value === 'object' && !Array.isArray(value)
    && Object.keys(value).length === keys.length
    && keys.every((key) => Object.hasOwn(value, key));
}

function loadStore(dataFile) {
  let bytes;
  try { bytes = readFileSync(dataFile); } catch (error) {
    // A dangling symlink is not an absent store: do not silently replace it.
    if (error.code === 'ENOENT') {
      try { lstatSync(dataFile); } catch (statError) {
        if (statError.code === 'ENOENT') {
          return { schemaVersion: 1, nextSequence: 1, lastSubmittedAt: 0, records: [] };
        }
        throw statError;
      }
    }
    throw error;
  }
  try {
    const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    const store = JSON.parse(text);
    if (!hasExactKeys(store, ['schemaVersion', 'nextSequence', 'lastSubmittedAt', 'records'])
        || store.schemaVersion !== 1 || !Array.isArray(store.records)
        || store.records.length > MAX_RECORDS
        || !Number.isSafeInteger(store.nextSequence) || store.nextSequence < 1
        || !Number.isSafeInteger(store.lastSubmittedAt) || store.lastSubmittedAt < 0
        || store.lastSubmittedAt > MAX_DATE_MS) throw new Error('Invalid store schema.');
    const keys = new Set();
    const sequences = new Set();
    let maxTime = 0;
    let maxSequence = 0;
    for (const record of store.records) {
      if (!hasExactKeys(record, [
        'level', 'version', 'githubId', 'homepage', 'score', 'submittedAt', 'sequence',
      ])) throw new Error('Invalid record schema.');
      const validated = validateSubmission(record, { persisted: true });
      const timestamp = Date.parse(record.submittedAt);
      if (validated.githubId !== record.githubId || typeof record.submittedAt !== 'string'
          || !Number.isSafeInteger(timestamp) || timestamp < 0 || timestamp > MAX_DATE_MS
          || new Date(timestamp).toISOString() !== record.submittedAt
          || !Number.isSafeInteger(record.sequence) || record.sequence < 1
          || sequences.has(record.sequence) || keys.has(keyOf(record))) {
        throw new Error('Invalid or duplicate record.');
      }
      keys.add(keyOf(record));
      sequences.add(record.sequence);
      maxTime = Math.max(maxTime, timestamp);
      maxSequence = Math.max(maxSequence, record.sequence);
    }
    if (store.nextSequence <= maxSequence || store.lastSubmittedAt !== maxTime) {
      throw new Error('Invalid server ordering metadata.');
    }
    return store;
  } catch (cause) {
    // Startup fails closed; never substitute an empty board for corrupt data.
    throw new Error('Invalid leaderboard data; refusing to overwrite it.', { cause });
  }
}

function replaceStore(dataFile, store) {
  const temporary = `${dataFile}.${randomUUID()}.tmp`;
  let fd;
  let created = false;
  try {
    fd = openSync(temporary, 'wx', 0o600);
    created = true;
    writeFileSync(fd, `${JSON.stringify(store)}\n`, 'utf8');
    fsyncSync(fd);
    closeSync(fd);
    fd = undefined;
    // Same-directory rename is the atomic commit point. There are no fallible
    // persistence operations after it. This is not a multi-process database.
    renameSync(temporary, dataFile);
  } finally {
    if (fd !== undefined) { try { closeSync(fd); } catch { /* preserve original failure */ } }
    if (created) { try { unlinkSync(temporary); } catch { /* renamed or cleanup failed */ } }
  }
}

function readBody(request) {
  const length = request.headers['content-length'];
  if (length !== undefined && Number(length) > MAX_BODY_BYTES) {
    throw new HttpError(413, 'Request body exceeds 4096 bytes.');
  }
  return new Promise((resolveBody, reject) => {
    let bytes = 0;
    const chunks = [];
    function cleanup() {
      request.off('data', onData);
      request.off('end', onEnd);
      request.off('error', onError);
      request.off('aborted', onAborted);
    }
    function fail(error) { cleanup(); reject(error); }
    function onData(chunk) {
      bytes += chunk.length;
      if (bytes > MAX_BODY_BYTES) {
        fail(new HttpError(413, 'Request body exceeds 4096 bytes.'));
      } else chunks.push(chunk);
    }
    function onEnd() {
      cleanup();
      try {
        const text = new TextDecoder('utf-8', { fatal: true }).decode(Buffer.concat(chunks));
        resolveBody(JSON.parse(text));
      } catch { reject(new HttpError(400, 'Invalid JSON body.')); }
    }
    function onError() { fail(new HttpError(400, 'Could not read request body.')); }
    function onAborted() { fail(new HttpError(400, 'Request body aborted.')); }
    request.on('data', onData);
    request.on('end', onEnd);
    request.on('error', onError);
    request.on('aborted', onAborted);
  });
}

function normalizeOrigins(origins) {
  if (!Array.isArray(origins) && !(origins instanceof Set)) {
    throw new TypeError('allowedOrigins must be an array or Set of explicit origins.');
  }
  const result = new Set();
  for (const origin of origins) {
    let url;
    try { url = new URL(origin); } catch { throw new TypeError('Invalid allowed origin.'); }
    if (typeof origin !== 'string' || !['http:', 'https:'].includes(url.protocol)
        || url.origin !== origin) throw new TypeError('Use exact HTTP(S) origins, not wildcard or paths.');
    result.add(origin);
  }
  return result;
}

// rateLimit: { limit: 30, windowMs: 60000, maxKeys: 1024 }. Each socket IP gets
// a fixed window. Invalid POSTs count too; X-Forwarded-For is never consulted.
// Saturation rejects new IPs rather than evicting live limits. No IP is persisted.
// dataFile's parent must exist (the CLI creates it; tests use temporary directories).
export function createLeaderboardServer({
  dataFile, allowedOrigins = DEFAULT_ORIGINS, now = Date.now, rateLimit = {},
} = {}) {
  if (typeof dataFile !== 'string' || !dataFile) throw new TypeError('dataFile is required.');
  if (typeof now !== 'function') throw new TypeError('now must be a function returning epoch milliseconds.');
  const origins = normalizeOrigins(allowedOrigins);
  const { limit = 30, windowMs = 60000, maxKeys = 1024 } = rateLimit;
  if (![limit, windowMs, maxKeys].every((value) => Number.isSafeInteger(value) && value > 0)
      || maxKeys > 10000) throw new TypeError('Invalid rateLimit options (maxKeys <= 10000).');
  dataFile = resolve(dataFile);
  let store = loadStore(dataFile);
  const writesByIp = new Map();
  let limiterTime = 0;

  function serverTime() {
    const time = now();
    if (!Number.isSafeInteger(time) || time < 0 || time > MAX_DATE_MS) {
      throw new Error('Invalid server clock.');
    }
    return time;
  }

  function limitWrite(request, response) {
    limiterTime = Math.max(limiterTime, serverTime());
    for (const [ip, bucket] of writesByIp) {
      if (limiterTime - bucket.startedAt >= windowMs) writesByIp.delete(ip);
    }
    const ip = request.socket.remoteAddress;
    let bucket = writesByIp.get(ip);
    if (!ip || (!bucket && writesByIp.size >= maxKeys)) {
      response.setHeader('Retry-After', String(Math.ceil(windowMs / 1000)));
      throw new HttpError(429, 'Write rate limit reached.');
    }
    if (!bucket) {
      bucket = { startedAt: limiterTime, count: 0 };
      writesByIp.set(ip, bucket);
    }
    if (bucket.count >= limit) {
      response.setHeader('Retry-After', String(Math.max(1,
        Math.ceil((windowMs - (limiterTime - bucket.startedAt)) / 1000))));
      throw new HttpError(429, 'Write rate limit reached.');
    }
    bucket.count += 1;
  }

  function sortedRecords(level, version) {
    return store.records.filter((record) => record.level === level && record.version === version)
      .sort((a, b) => b.score - a.score || Date.parse(a.submittedAt) - Date.parse(b.submittedAt)
        || a.sequence - b.sequence);
  }
  function publicEntry(record, rank) {
    return {
      rank, githubId: record.githubId, homepage: record.homepage,
      score: record.score, submittedAt: record.submittedAt,
    };
  }
  function boardResult(records) {
    return { entries: records.slice(0, 20).map((record, index) => publicEntry(record, index + 1)),
      total: records.length };
  }

  async function handle(request, response) {
    response.setHeader('Content-Type', 'application/json; charset=utf-8');
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('Vary', 'Origin');
    function send(status, payload) {
      if (response.destroyed || response.writableEnded) return;
      // Drain rejected requests without retaining their bodies.
      if (!request.complete) request.resume();
      response.statusCode = status;
      response.end(JSON.stringify(payload));
    }
    try {
      const origin = request.headers.origin;
      if (origin !== undefined && !origins.has(origin)) {
        throw new HttpError(403, 'Origin is not allowed.');
      }
      if (origin !== undefined) response.setHeader('Access-Control-Allow-Origin', origin);
      const url = new URL(request.url, 'http://leaderboard.invalid');
      if (url.pathname !== '/api/leaderboard') throw new HttpError(404, 'Not found.');
      if (!METHODS.includes(request.method)) {
        response.setHeader('Allow', METHODS.join(', '));
        throw new HttpError(405, 'Method not allowed.');
      }
      if (request.method === 'OPTIONS') {
        response.setHeader('Allow', METHODS.join(', '));
        response.setHeader('Access-Control-Allow-Methods', METHODS.join(', '));
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        const requestedMethod = request.headers['access-control-request-method'];
        if (requestedMethod && !METHODS.includes(requestedMethod)) {
          throw new HttpError(405, 'Preflight method not allowed.');
        }
        const headers = request.headers['access-control-request-headers'];
        if (headers && headers.split(',').some((header) => header.trim().toLowerCase() !== 'content-type')) {
          throw new HttpError(400, 'Preflight headers not allowed.');
        }
        return send(200, { status: 'ok' });
      }
      if (request.method === 'GET') {
        const level = url.searchParams.get('level');
        const version = url.searchParams.get('version');
        if (url.searchParams.getAll('level').length !== 1 || url.searchParams.getAll('version').length !== 1) {
          throw new HttpError(400, 'Provide one level and one version.');
        }
        validatePair(level, version);
        return send(200, boardResult(sortedRecords(level, version)));
      }

      limitWrite(request, response);
      const contentType = request.headers['content-type'];
      if (typeof contentType !== 'string' || contentType.split(';', 1)[0].trim().toLowerCase() !== 'application/json'
          || (request.headers['content-encoding'] && request.headers['content-encoding'] !== 'identity')) {
        throw new HttpError(415, 'Use application/json with an uncompressed UTF-8 body.');
      }
      const submission = validateSubmission(await readBody(request));
      const key = keyOf(submission);
      const index = store.records.findIndex((record) => keyOf(record) === key);
      const existing = store.records[index];
      let status = 'unchanged';
      let record = existing;
      if (!existing || submission.score > existing.score) {
        if (!existing && store.records.length >= MAX_RECORDS) {
          throw new HttpError(409, 'Leaderboard capacity (10000 records) reached.');
        }
        if (store.nextSequence >= Number.MAX_SAFE_INTEGER) throw new Error('Server sequence exhausted.');
        const timestamp = Math.max(serverTime(), store.lastSubmittedAt);
        record = {
          ...submission, githubId: existing?.githubId ?? submission.githubId,
          submittedAt: new Date(timestamp).toISOString(), sequence: store.nextSequence,
        };
        const records = store.records.slice();
        if (existing) records[index] = record;
        else records.push(record);
        const candidate = {
          schemaVersion: 1, nextSequence: store.nextSequence + 1,
          lastSubmittedAt: timestamp, records,
        };
        replaceStore(dataFile, candidate);
        // Only publish memory after atomic persistence succeeds. No await occurs
        // between selecting a candidate and committing it, preventing lost writes.
        store = candidate;
        status = existing ? 'improved' : 'created';
      }
      const records = sortedRecords(submission.level, submission.version);
      return send(200, {
        status, entry: publicEntry(record, records.indexOf(record) + 1), ...boardResult(records),
      });
    } catch (error) {
      const status = error instanceof HttpError ? error.status : 500;
      send(status, { error: status === 500 ? 'Internal server error.' : error.message });
    }
  }

  const server = http.createServer((request, response) => {
    // Aborts may emit an error after the body reader has removed its listeners.
    // Keep that late transport error from becoming an uncaught process exception.
    request.on('error', () => {});
    void handle(request, response);
  });
  server.requestTimeout = 15000;
  server.headersTimeout = 10000;
  // Node parser errors cannot enter the request handler; still return JSON headers.
  server.on('clientError', (error, socket) => {
    if (!socket.writable || error.code === 'ECONNRESET') { socket.destroy(); return; }
    const status = error.code === 'HPE_HEADER_OVERFLOW' ? 431 : 400;
    const body = JSON.stringify({ error: 'Invalid HTTP request.' });
    socket.end(`HTTP/1.1 ${status} ${status === 431 ? 'Request Header Fields Too Large' : 'Bad Request'}\r\n`
      + 'Content-Type: application/json; charset=utf-8\r\nCache-Control: no-store\r\n'
      + 'X-Content-Type-Options: nosniff\r\nConnection: close\r\n'
      + `Content-Length: ${Buffer.byteLength(body)}\r\n\r\n${body}`);
  });
  server.on('close', () => writesByIp.clear());
  return server;
}

function startCli() {
  const host = process.env.LEADERBOARD_HOST ?? '127.0.0.1';
  const port = Number(process.env.LEADERBOARD_PORT ?? '4180');
  if (!host || !Number.isInteger(port) || port < 0 || port > 65535) {
    throw new Error('Invalid LEADERBOARD_HOST/PORT.');
  }
  const dataFile = resolve(process.env.LEADERBOARD_DATA_FILE ?? '.local/leaderboard.json');
  const allowedOrigins = process.env.LEADERBOARD_ALLOWED_ORIGINS === undefined
    ? DEFAULT_ORIGINS : process.env.LEADERBOARD_ALLOWED_ORIGINS.split(',').map((origin) => origin.trim()).filter(Boolean);
  mkdirSync(dirname(dataFile), { recursive: true });
  const server = createLeaderboardServer({ dataFile, allowedOrigins });
  server.on('error', (error) => { console.error(`Leaderboard startup failed: ${error.message}`); process.exitCode = 1; });
  server.listen(port, host, () => {
    const address = server.address();
    const displayHost = host.includes(':') ? `[${host}]` : host;
    console.log(`Local leaderboard: http://${displayHost}:${address.port}/api/leaderboard?level=01-refund-timeout&version=v1`);
    console.warn('自报体验榜：GitHub 身份、主页及浏览器成绩未经认证；CORS 不是认证。仅供本地单进程小数据量使用，不适合作为生产可信榜。');
  });
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { startCli(); } catch (error) {
    console.error(`Leaderboard startup failed: ${error.message}`);
    process.exitCode = 1;
  }
}
