// Concatenate after V3_CASTLE_DATA, V3_THREE and V3_LAYOUT are initialized.
// Public gradients point INTO the obstacle: v3Push subtracts gradient * amount.
// No renderer, input handling, HUD events or changes to the upstream world here.
function v3CreateStructureCollision(data, position) {
  const vertices = data.collision;
  if (!vertices || vertices.BYTES_PER_ELEMENT !== 4 || !vertices.length || vertices.length % 48) {
    throw new Error('Castle collision requires packed 16-float vertices / complete triangles');
  }
  const triangleCount = vertices.length / 48;
  const CELL = 2, NORMAL_EPS = 1e-8, SLOP = 1e-4, FAR = 100;
  // These tessellations match the CLOSED backing constructors in castle.js.
  // Polygonal distances, rather than ideal-circle interiors, avoid phantom
  // recovery outside the visible facets. Update these if those constructors change.
  const CYLINDER_SEGMENTS = 40, ARCH_SEGMENTS = 36;
  const bounds = new Float64Array(triangleCount * 6);
  const normals = new Float64Array(triangleCount * 3);
  const degenerate = new Uint8Array(triangleCount);
  const seen = new Uint32Array(triangleCount);
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  let degenerateCount = 0;
  for (let id = 0; id < triangleCount; id++) {
    const p = id * 48, b = id * 6, n = id * 3;
    for (let axis = 0; axis < 3; axis++) {
      const a = vertices[p + axis], c = vertices[p + 16 + axis], d = vertices[p + 32 + axis];
      if (!Number.isFinite(a) || !Number.isFinite(c) || !Number.isFinite(d)) {
        throw new Error('Non-finite castle collision position at triangle ' + id);
      }
      bounds[b + axis] = Math.min(a, c, d);
      bounds[b + 3 + axis] = Math.max(a, c, d);
      lo[axis] = Math.min(lo[axis], bounds[b + axis]);
      hi[axis] = Math.max(hi[axis], bounds[b + 3 + axis]);
    }
    const ux = vertices[p + 16] - vertices[p], uy = vertices[p + 17] - vertices[p + 1], uz = vertices[p + 18] - vertices[p + 2];
    const vx = vertices[p + 32] - vertices[p], vy = vertices[p + 33] - vertices[p + 1], vz = vertices[p + 34] - vertices[p + 2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    let length = Math.hypot(nx, ny, nz);
    const sx = vertices[p + 3] + vertices[p + 19] + vertices[p + 35];
    const sy = vertices[p + 4] + vertices[p + 20] + vertices[p + 36];
    const sz = vertices[p + 5] + vertices[p + 21] + vertices[p + 37];
    if (length === 0) {
      degenerate[id] = 1;
      degenerateCount++;
      nx = sx; ny = sy; nz = sz;
      length = Math.hypot(nx, ny, nz);
    } else if (nx * sx + ny * sy + nz * sz < 0) {
      nx = -nx; ny = -ny; nz = -nz;
    }
    if (!(length > 0) || !Number.isFinite(length)) {
      nx = 0; ny = 1; nz = 0; length = 1;
    }
    normals[n] = nx / length; normals[n + 1] = ny / length; normals[n + 2] = nz / length;
  }

  const size = lo.map((v, axis) => Math.floor((hi[axis] - v) / CELL) + 1);
  const nx = size[0], ny = size[1], nz = size[2];
  const cells = new Array(nx * ny * nz);
  let cellCount = 0, references = 0, maxCellTriangles = 0;
  const cellIndex = (x, y, z) => x + nx * (y + ny * z);
  for (let id = 0; id < triangleCount; id++) {
    const b = id * 6;
    const x0 = Math.floor((bounds[b] - lo[0]) / CELL), x1 = Math.floor((bounds[b + 3] - lo[0]) / CELL);
    const y0 = Math.floor((bounds[b + 1] - lo[1]) / CELL), y1 = Math.floor((bounds[b + 4] - lo[1]) / CELL);
    const z0 = Math.floor((bounds[b + 2] - lo[2]) / CELL), z1 = Math.floor((bounds[b + 5] - lo[2]) / CELL);
    for (let z = z0; z <= z1; z++) for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const key = cellIndex(x, y, z);
      if (!cells[key]) { cells[key] = []; cellCount++; }
      cells[key].push(id);
      references++;
    }
  }
  for (let i = 0; i < cells.length; i++) if (cells[i]) {
    maxCellTriangles = Math.max(maxCellTriangles, cells[i].length);
    cells[i] = Uint32Array.from(cells[i]);
  }

  // Shared scratch only: no per-triangle Vector3, Triangle, Set or cell-key strings.
  const triangle = new V3_THREE.Triangle();
  const point = new V3_THREE.Vector3(), closest = new V3_THREE.Vector3();
  let stamp = 0, best2 = Infinity, bestId = -1, qx = 0, qy = 0, qz = 0;
  let tested = 0, visited = 0;
  function aabbDistance2(x, y, z, ax, ay, az, bx, by, bz) {
    const dx = Math.max(ax - x, 0, x - bx), dy = Math.max(ay - y, 0, y - by), dz = Math.max(az - z, 0, z - bz);
    return dx * dx + dy * dy + dz * dz;
  }
  function beginQuery(x, y, z) {
    stamp = (stamp + 1) >>> 0;
    if (stamp === 0) { seen.fill(0); stamp = 1; }
    best2 = Infinity; bestId = -1; tested = 0; visited = 0;
    point.set(x, y, z);
  }
  function segmentClosest(ax, ay, az, bx, by, bz, x, y, z) {
    const dx = bx - ax, dy = by - ay, dz = bz - az;
    const length2 = dx * dx + dy * dy + dz * dz;
    const t = length2 ? Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy + (z - az) * dz) / length2)) : 0;
    const cx = ax + t * dx, cy = ay + t * dy, cz = az + t * dz;
    const d2 = (cx - x) ** 2 + (cy - y) ** 2 + (cz - z) ** 2;
    if (d2 < best2) { best2 = d2; qx = cx; qy = cy; qz = cz; return true; }
    return false;
  }
  function scan(x, y, z, reach) {
    const reach2 = reach * reach;
    const x0 = Math.max(0, Math.floor((x - reach - lo[0]) / CELL)), x1 = Math.min(nx - 1, Math.floor((x + reach - lo[0]) / CELL));
    const y0 = Math.max(0, Math.floor((y - reach - lo[1]) / CELL)), y1 = Math.min(ny - 1, Math.floor((y + reach - lo[1]) / CELL));
    const z0 = Math.max(0, Math.floor((z - reach - lo[2]) / CELL)), z1 = Math.min(nz - 1, Math.floor((z + reach - lo[2]) / CELL));
    for (let iz = z0; iz <= z1; iz++) for (let iy = y0; iy <= y1; iy++) for (let ix = x0; ix <= x1; ix++) {
      const list = cells[cellIndex(ix, iy, iz)];
      if (!list) continue;
      const ax = lo[0] + ix * CELL, ay = lo[1] + iy * CELL, az = lo[2] + iz * CELL;
      if (aabbDistance2(x, y, z, ax, ay, az, ax + CELL, ay + CELL, az + CELL) > Math.min(reach2, best2)) continue;
      visited++;
      for (let j = 0; j < list.length; j++) {
        const id = list[j], b = id * 6;
        if (seen[id] === stamp) continue;
        if (aabbDistance2(x, y, z, bounds[b], bounds[b + 1], bounds[b + 2], bounds[b + 3], bounds[b + 4], bounds[b + 5]) > Math.min(reach2, best2)) continue;
        seen[id] = stamp; tested++;
        const p = id * 48;
        if (degenerate[id]) {
          let improved = segmentClosest(vertices[p], vertices[p + 1], vertices[p + 2], vertices[p + 16], vertices[p + 17], vertices[p + 18], x, y, z);
          improved = segmentClosest(vertices[p + 16], vertices[p + 17], vertices[p + 18], vertices[p + 32], vertices[p + 33], vertices[p + 34], x, y, z) || improved;
          improved = segmentClosest(vertices[p + 32], vertices[p + 33], vertices[p + 34], vertices[p], vertices[p + 1], vertices[p + 2], x, y, z) || improved;
          if (improved) bestId = id;
          continue;
        }
        triangle.a.set(vertices[p], vertices[p + 1], vertices[p + 2]);
        triangle.b.set(vertices[p + 16], vertices[p + 17], vertices[p + 18]);
        triangle.c.set(vertices[p + 32], vertices[p + 33], vertices[p + 34]);
        triangle.closestPointToPoint(point, closest);
        const d2 = point.distanceToSquared(closest);
        if (d2 < best2) { best2 = d2; bestId = id; qx = closest.x; qy = closest.y; qz = closest.z; }
      }
    }
  }

  // CCW polygon segments: [a.u,a.v,b.u,b.v,outward.u,outward.v].
  function polygon(points) {
    const segments = new Float64Array(points.length * 6);
    for (let i = 0; i < points.length; i++) {
      const a = points[i], b = points[(i + 1) % points.length], p = i * 6;
      const du = b[0] - a[0], dv = b[1] - a[1], length = Math.hypot(du, dv);
      segments.set([a[0], a[1], b[0], b[1], dv / length, -du / length], p);
    }
    return segments;
  }
  const solids = [], counts = { cylinder: 0, box: 0, arch: 0 };
  for (const source of data.solids || []) {
    if (source.collidable === false) continue;
    const s = { kind: source.kind, center: source.center, half: source.half };
    if (!s.center || s.center.length !== 3 || !s.center.every(Number.isFinite)) throw new Error('Invalid castle solid center');
    const c = s.center;
    if (s.kind === 'box') {
      if (!s.half || s.half.length !== 3 || !s.half.every(v => Number.isFinite(v) && v > 0)) throw new Error('Invalid castle box');
      s.min = c.map((v, i) => v - s.half[i]); s.max = c.map((v, i) => v + s.half[i]);
    } else if (s.kind === 'cylinder') {
      s.radius = source.radius;
      if (!(Number.isFinite(s.radius) && s.radius > 0 && Number.isFinite(s.half) && s.half > 0)) throw new Error('Invalid castle cylinder');
      const points = [];
      for (let i = 0; i < CYLINDER_SEGMENTS; i++) {
        const a = i * Math.PI * 2 / CYLINDER_SEGMENTS;
        points.push([s.radius * Math.cos(a), s.radius * Math.sin(a)]);
      }
      s.edges = polygon(points);
      s.apothem = s.radius * Math.cos(Math.PI / CYLINDER_SEGMENTS);
      s.min = [c[0] - s.radius, c[1] - s.half, c[2] - s.radius];
      s.max = [c[0] + s.radius, c[1] + s.half, c[2] + s.radius];
    } else if (s.kind === 'arch') {
      s.inner = source.inner; s.outer = source.outer; s.half = source.depth;
      if (!(Number.isFinite(s.inner) && s.inner > 0 && Number.isFinite(s.outer) && s.outer > s.inner && Number.isFinite(s.half) && s.half > 0)) throw new Error('Invalid castle arch');
      const points = [];
      for (let i = 0; i <= ARCH_SEGMENTS; i++) {
        const a = i * Math.PI / ARCH_SEGMENTS;
        points.push([s.outer * Math.cos(a), s.outer * Math.sin(a)]);
      }
      for (let i = ARCH_SEGMENTS; i >= 0; i--) {
        const a = i * Math.PI / ARCH_SEGMENTS;
        points.push([s.inner * Math.cos(a), s.inner * Math.sin(a)]);
      }
      s.edges = polygon(points);
      s.min = [c[0] - s.outer, c[1], c[2] - s.half];
      s.max = [c[0] + s.outer, c[1] + s.outer, c[2] + s.half];
    } else {
      throw new Error('Unsupported castle backing solid: ' + s.kind);
    }
    counts[s.kind]++; solids.push(s);
  }

  // Signed distance to a backing AND its corresponding closest external surface.
  // This scratch is never used for exterior collision; only centers inside a backing.
  const surface = { distance: 0, x: 0, y: 0, z: 0, nx: 0, ny: 0, nz: 0 };
  function solidDistance(s, x, y, z) {
    const dx = x - s.center[0], dy = y - s.center[1], dz = z - s.center[2];
    let px, py, pz, fallbackX = 0, fallbackY = 0, fallbackZ = 0, distance;
    if (s.kind === 'box') {
      const h = s.half;
      const ax = Math.abs(dx) - h[0], ay = Math.abs(dy) - h[1], az = Math.abs(dz) - h[2];
      px = Math.max(-h[0], Math.min(h[0], dx));
      py = Math.max(-h[1], Math.min(h[1], dy));
      pz = Math.max(-h[2], Math.min(h[2], dz));
      distance = Math.hypot(Math.max(ax, 0), Math.max(ay, 0), Math.max(az, 0)) + Math.min(Math.max(ax, ay, az), 0);
      if (ax <= 0 && ay <= 0 && az <= 0) {
        if (ax >= ay && ax >= az) { fallbackX = dx < 0 ? -1 : 1; px = fallbackX * h[0]; }
        else if (ay >= az) { fallbackY = dy < 0 ? -1 : 1; py = fallbackY * h[1]; }
        else { fallbackZ = dz < 0 ? -1 : 1; pz = fallbackZ * h[2]; }
      }
    } else {
      const cylinder = s.kind === 'cylinder';
      const u = dx, v = cylinder ? dz : dy, w = cylinder ? dy : dz;
      let inside2D;
      if (cylinder) {
        const angle = Math.atan2(v, u), step = Math.PI * 2 / CYLINDER_SEGMENTS;
        const normalAngle = (Math.floor(angle / step) + .5) * step;
        inside2D = u * Math.cos(normalAngle) + v * Math.sin(normalAngle) <= s.apothem;
      } else {
        const step = Math.PI / ARCH_SEGMENTS, angle = Math.atan2(v, u);
        const sector = Math.max(0, Math.min(ARCH_SEGMENTS - 1, Math.floor(angle / step)));
        const projection = u * Math.cos((sector + .5) * step) + v * Math.sin((sector + .5) * step);
        inside2D = v >= 0 && projection >= s.inner * Math.cos(step / 2) && projection <= s.outer * Math.cos(step / 2);
      }
      let d2 = Infinity, pu = 0, pv = 0, nu = 0, nv = 0;
      const edges = s.edges;
      for (let i = 0; i < edges.length; i += 6) {
        const a = edges[i], b = edges[i + 1], du = edges[i + 2] - a, dv = edges[i + 3] - b;
        const t = Math.max(0, Math.min(1, ((u - a) * du + (v - b) * dv) / (du * du + dv * dv)));
        const cu = a + t * du, cv = b + t * dv, candidate = (cu - u) ** 2 + (cv - v) ** 2;
        if (candidate < d2) { d2 = candidate; pu = cu; pv = cv; nu = edges[i + 4]; nv = edges[i + 5]; }
      }
      const planar = (inside2D ? -1 : 1) * Math.sqrt(d2), axial = Math.abs(w) - s.half;
      distance = Math.hypot(Math.max(planar, 0), Math.max(axial, 0)) + Math.min(Math.max(planar, axial), 0);
      let pw = Math.max(-s.half, Math.min(s.half, w)), nw = 0;
      if (planar <= 0 && axial >= planar) { pu = u; pv = v; pw = w < 0 ? -s.half : s.half; nw = w < 0 ? -1 : 1; nu = nv = 0; }
      if (cylinder) { px = pu; py = pw; pz = pv; fallbackX = nu; fallbackY = nw; fallbackZ = nv; }
      else { px = pu; py = pv; pz = pw; fallbackX = nu; fallbackY = nv; fallbackZ = nw; }
    }
    surface.distance = distance;
    surface.x = px + s.center[0]; surface.y = py + s.center[1]; surface.z = pz + s.center[2];
    const sign = distance < 0 ? 1 : -1;
    const gx = (px - dx) * sign, gy = (py - dy) * sign, gz = (pz - dz) * sign, length = Math.hypot(gx, gy, gz);
    if (length > NORMAL_EPS) { surface.nx = gx / length; surface.ny = gy / length; surface.nz = gz / length; }
    else { surface.nx = fallbackX; surface.ny = fallbackY; surface.nz = fallbackZ; }
  }

  const info = {
    triangleCount, collisionTriangles: triangleCount,
    renderTriangles: data.triangles ?? null,
    // geometry.js flattens meshes without ranges; a mesh count cannot be inferred.
    meshCount: data.collisionMeshCount ?? null,
    gridCellCount: cellCount, gridCapacity: cells.length, gridDimensions: size,
    cellSize: CELL, gridReferences: references, maxCellTriangles,
    backingSolidCount: solids.length, solidCounts: counts,
    cylinderSegments: CYLINDER_SEGMENTS, archSegments: ARCH_SEGMENTS,
    degenerateTriangles: degenerateCount, localBounds: { min: lo.slice(), max: hi.slice() },
    source: 'collision (collidable filter applied by geometry.js)',
    queries: 0, interiorQueries: 0, overlapRecoveries: 0, aabbRejects: 0,
    lastTrianglesTested: 0, lastCellsVisited: 0, maxTrianglesTested: 0,
    totalTrianglesTested: 0, lastSolidTests: 0
  };
  const recoveryDirections = new Float64Array((solids.length + 6) * 3);
  const recoveryMin = [Infinity, Infinity, Infinity], recoveryMax = [-Infinity, -Infinity, -Infinity];
  for (const s of solids) for (let i = 0; i < 3; i++) {
    recoveryMin[i] = Math.min(recoveryMin[i], s.min[i]);
    recoveryMax[i] = Math.max(recoveryMax[i], s.max[i]);
  }
  let depth = 0, inwardX = 0, inwardY = 0, inwardZ = 0;
  function backingClearance(x, y, z, radius) {
    let distance = radius;
    for (let i = 0; i < solids.length; i++) {
      const s = solids[i];
      if (aabbDistance2(x, y, z, s.min[0], s.min[1], s.min[2], s.max[0], s.max[1], s.max[2]) > radius * radius) continue;
      info.lastSolidTests++;
      solidDistance(s, x, y, z);
      distance = Math.min(distance, surface.distance);
    }
    return distance;
  }
  function escapeDistance(x, y, z, radius, dx, dy, dz, initial) {
    // March along a unit recovery direction through the UNION of backings.
    // Each distance is 1-Lipschitz, so a radius-distance step cannot skip the
    // next possible free center. AABB is only a finite ray termination bound,
    // never a collider or an exterior contact substitute.
    let end = Infinity;
    if (dx > NORMAL_EPS) end = Math.min(end, (recoveryMax[0] + radius + SLOP - x) / dx);
    if (dx < -NORMAL_EPS) end = Math.min(end, (recoveryMin[0] - radius - SLOP - x) / dx);
    if (dy > NORMAL_EPS) end = Math.min(end, (recoveryMax[1] + radius + SLOP - y) / dy);
    if (dy < -NORMAL_EPS) end = Math.min(end, (recoveryMin[1] - radius - SLOP - y) / dy);
    if (dz > NORMAL_EPS) end = Math.min(end, (recoveryMax[2] + radius + SLOP - z) / dz);
    if (dz < -NORMAL_EPS) end = Math.min(end, (recoveryMin[2] - radius - SLOP - z) / dz);
    let travel = Math.min(initial, end);
    for (let i = 0; i < 96; i++) {
      const clearance = backingClearance(x + dx * travel, y + dy * travel, z + dz * travel, radius);
      if (clearance >= radius) return travel;
      travel = Math.min(end, travel + radius - clearance + SLOP);
    }
    return end;
  }
  function interior(x, y, z, radius) {
    depth = 0; info.lastSolidTests = 0;
    let directions = 0;
    for (let i = 0; i < solids.length; i++) {
      const s = solids[i];
      if (x < s.min[0] || x > s.max[0] || y < s.min[1] || y > s.max[1] || z < s.min[2] || z > s.max[2]) continue;
      info.lastSolidTests++;
      solidDistance(s, x, y, z);
      if (surface.distance >= 0) continue;
      recoveryDirections[directions++] = surface.nx;
      recoveryDirections[directions++] = surface.ny;
      recoveryDirections[directions++] = surface.nz;
      if (surface.distance < -depth) {
        depth = -surface.distance;
        inwardX = -surface.nx; inwardY = -surface.ny; inwardZ = -surface.nz;
      }
    }
    if (!(depth > 0)) return false;
    info.interiorQueries++;
    const initial = radius + depth + SLOP;
    if (backingClearance(x - inwardX * initial, y - inwardY * initial, z - inwardZ * initial, radius) >= radius) return true;
    info.overlapRecoveries++;
    // Individual nearest-surface gradients plus symmetric tie-break directions
    // avoid a pillar choosing an exit deeper into a neighboring tower. Only this
    // exceptional inside-union case uses a conservative (not exact CSG) depth.
    for (let axis = 0; axis < 3; axis++) for (let sign = -1; sign <= 1; sign += 2) {
      recoveryDirections[directions++] = axis === 0 ? sign : 0;
      recoveryDirections[directions++] = axis === 1 ? sign : 0;
      recoveryDirections[directions++] = axis === 2 ? sign : 0;
    }
    let best = Infinity;
    for (let i = 0; i < directions; i += 3) {
      const dx = recoveryDirections[i], dy = recoveryDirections[i + 1], dz = recoveryDirections[i + 2];
      const travel = escapeDistance(x, y, z, radius, dx, dy, dz, initial);
      if (travel < best) { best = travel; inwardX = -dx; inwardY = -dy; inwardZ = -dz; }
    }
    depth = best - radius - SLOP;
    return true;
  }
  function finishQuery() {
    info.lastTrianglesTested = tested; info.lastCellsVisited = visited;
    info.totalTrianglesTested += tested;
    info.maxTrianglesTested = Math.max(info.maxTrianglesTested, tested);
  }
  function validSphere(x, y, z, radius) {
    return Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z) && Number.isFinite(radius) && radius >= 0;
  }
  function start() {
    info.queries++; info.lastTrianglesTested = info.lastCellsVisited = info.lastSolidTests = 0;
  }
  function contact(x, y, z, radius) {
    if (!validSphere(x, y, z, radius)) throw new RangeError('Invalid castle contact sphere');
    start();
    x -= position[0]; y -= position[1]; z -= position[2];
    if (interior(x, y, z, radius)) return { gx: inwardX, gy: inwardY, gz: inwardZ, amount: radius + depth + SLOP };
    if (aabbDistance2(x, y, z, lo[0], lo[1], lo[2], hi[0], hi[1], hi[2]) > radius * radius) { info.aabbRejects++; return null; }
    beginQuery(x, y, z); scan(x, y, z, radius); finishQuery();
    const distance = Math.sqrt(best2), amount = radius - distance;
    if (bestId < 0 || !(amount > 0)) return null;
    if (distance > NORMAL_EPS) return { gx: (qx - x) / distance, gy: (qy - y) / distance, gz: (qz - z) / distance, amount: amount + SLOP };
    const p = bestId * 48, n = bestId * 3;
    // At (or extremely near) a triangle surface, keep a valid face normal.
    // At exactly zero distance the packed outward orientation wins; behind a
    // two-sided sheet the sign is reversed. Closed backing interiors ran first.
    const side = (x - vertices[p]) * normals[n] + (y - vertices[p + 1]) * normals[n + 1] + (z - vertices[p + 2]) * normals[n + 2] < 0 ? 1 : -1;
    return { gx: side * normals[n], gy: side * normals[n + 1], gz: side * normals[n + 2], amount: amount + SLOP };
  }
  function penetration(x, y, z, radius) {
    if (!validSphere(x, y, z, radius)) throw new RangeError('Invalid castle penetration sphere');
    start();
    x -= position[0]; y -= position[1]; z -= position[2];
    if (interior(x, y, z, radius)) return radius + depth;
    const boundDistance = Math.sqrt(aabbDistance2(x, y, z, lo[0], lo[1], lo[2], hi[0], hi[1], hi[2]));
    if (boundDistance > FAR + radius) { info.aabbRejects++; return -FAR; }
    beginQuery(x, y, z);
    let reach = Math.max(CELL, radius, boundDistance + CELL);
    // Exact nearest triangle, not merely triangles in the sphere's own cell.
    // Once best <= reach, every possible closer triangle's AABB was covered.
    // Stamps de-duplicate across cells AND expansion passes.
    for (;;) {
      scan(x, y, z, reach);
      if (bestId >= 0 && best2 <= reach * reach) break;
      reach = bestId >= 0 ? Math.max(reach * 2, Math.sqrt(best2)) : reach * 2;
    }
    finishQuery();
    return radius - Math.sqrt(best2);
  }

  const doorRadius = data.spec?.innerRadius ?? 4.8, spring = data.spec?.spring ?? 11, bottom = .5;
  function doorDistance(x, y) {
    const dy = y - spring;
    // Distance to the upper semicircle, then the two finite jamb edges and sill.
    let distance = dy >= 0 ? Math.abs(Math.hypot(x, dy) - doorRadius) : Math.hypot(Math.abs(x) - doorRadius, dy);
    const cy = Math.max(bottom, Math.min(spring, y));
    distance = Math.min(distance, Math.hypot(Math.abs(x) - doorRadius, y - cy));
    distance = Math.min(distance, Math.hypot(Math.max(Math.abs(x) - doorRadius, 0), y - bottom));
    const inside = y >= bottom && (y <= spring ? Math.abs(x) <= doorRadius : Math.hypot(x, dy) <= doorRadius);
    return inside ? distance : -distance;
  }
  function doorClearance(x, y, heading = 0) {
    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(heading)) throw new RangeError('Invalid castle door pose');
    const c = Math.cos(heading), s = Math.sin(heading);
    const lx = x - position[0], ly = y - position[1];
    let clearance = Infinity;
    for (let i = 0; i < V3_SPHERES.length; i++) {
      const sample = V3_SPHERES[i];
      // Identical yaw convention to v3Offset, without allocating its array.
      const sx = lx + sample[0] * c - sample[2] * s, sy = ly + sample[1];
      clearance = Math.min(clearance, doorDistance(sx, sy) - sample[3]);
    }
    return clearance;
  }
  return { contact, penetration, doorClearance, info };
}
const v3CastleCollision=v3CreateStructureCollision(V3_CASTLE_DATA,V3_LAYOUT.castle.position);
const v3LandmarkCollisions=v3Landmarks.map(item=>({...item,solver:v3CreateStructureCollision(item.geometry,item.position)}));
function v3LandmarkContact(x,y,z,radius){
 for(const item of v3LandmarkCollisions){const c=item.solver.contact(x,y,z,radius);if(c)return {...c,id:item.id};}
 return null;
}
function v3AddedContact(x,y,z,radius){return v3CastleContact(x,y,z,radius)||v3LandmarkContact(x,y,z,radius);}
function v3LandmarkPenetration(x,y,z,radius){let value=-100;for(const item of v3LandmarkCollisions)value=Math.max(value,item.solver.penetration(x,y,z,radius));return value;}

function v3CastleContact(x, y, z, radius) {
  return v3CastleCollision.contact(x, y, z, radius);
}
function v3CastlePenetration(x, y, z, radius) {
  return v3CastleCollision.penetration(x, y, z, radius);
}
function v3CastleDoorClearance(x, y, heading = 0) {
  return v3CastleCollision.doorClearance(x, y, heading);
}
const v3CastleCollisionInfo = v3CastleCollision.info;
