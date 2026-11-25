import * as THREE from 'three';

// Metres, local space only. Placement, shader conversion and packed-triangle
// collision are deliberately left to the caller. No hidden hull-sized solid.
export const WRECK_SPEC = Object.freeze({
  length: 21.42,
  halfWidth: 3.2,
  hullHeight: 7.85,
  mastHeight: 9.25,
  plankThickness: .26,
  bowAxis: '+x',
  origin: 'keel-bottom',
  sideGap: Object.freeze({
    side: '+z', width: 4.5,
    x: Object.freeze([-2.25, 2.25]),
    y: Object.freeze([2.5, 6.2]),
  }),
});

export function createReefWreck() {
  const root = new THREE.Group();
  root.name = 'abyssal-garden-reef-wreck';
  const solids = [];
  let seed = 0x57ec2a19;
  const rnd = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const woodMaterial = color => {
    const m = new THREE.MeshStandardMaterial({ color, roughness: .94, metalness: 0 });
    m.userData.landmarkWood = true;
    return m;
  };
  const wood = woodMaterial('#77604a');
  const ribWood = woodMaterial('#69503b');
  const endGrain = woodMaterial('#8b7152');
  const woodTones = Array.from({ length: 10 }, () => {
    const m = wood.clone();
    m.color.multiplyScalar(.85 + rnd() * .25);
    return m;
  });
  const copper = new THREE.MeshStandardMaterial({ color: '#a48b60', roughness: .8, metalness: .48 });
  const reef = new THREE.MeshStandardMaterial({ color: '#697970', roughness: .94 });
  reef.userData.castleStone = true;
  const coralMaterials = ['#927d85', '#ae8e87', '#82958d'].map(color =>
    new THREE.MeshStandardMaterial({ color, roughness: .94 }));

  function add(geometry, material, name, position = [0, 0, 0], collidable = true) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name;
    mesh.position.set(...position);
    mesh.userData.collidable = collidable;
    root.add(mesh);
    return mesh;
  }
  function box(x, y, z, w, h, d, material, name, recovery = true) {
    const mesh = add(new THREE.BoxGeometry(w, h, d), material, name, [x, y, z]);
    if (recovery) solids.push({ kind: 'box', center: [x, y, z], half: [w / 2, h / 2, d / 2] });
    return mesh;
  }
  function beam(a, b, height, depth, material, name, collidable = true) {
    const av = new THREE.Vector3(...a), bv = new THREE.Vector3(...b);
    const delta = bv.clone().sub(av);
    const mesh = add(new THREE.BoxGeometry(delta.length(), height, depth), material,
      name, av.clone().add(bv).multiplyScalar(.5).toArray(), collidable);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), delta.normalize());
    // Rotated members have triangle contact only; no axis-aligned recovery box.
    return mesh;
  }

  // [x, maximum half-beam, keel y, sheer y]. The rising forefoot and tall
  // forward stem distinguish a volumetric sailboat from a flat ship symbol.
  const stations = [
    [-10.4, .60, 1.20, 6.10], [-9.2, 1.75, .68, 6.00],
    [-7.8, 2.65, .30, 6.15], [-5.8, 3.08, .17, 6.30],
    [-3.2, 3.20, .15, 6.35], [0, 3.20, .15, 6.40],
    [3.2, 3.00, .22, 6.60], [5.6, 2.60, .45, 6.90],
    [7.6, 1.90, .93, 7.20], [9.0, .95, 1.65, 7.55],
    [10.0, .42, 2.75, 7.70],
  ];
  const TOP = 1.72, rise = 1 - Math.cos(TOP);
  function section(x) {
    const xx = Math.max(stations[0][0], Math.min(stations[stations.length - 1][0], x));
    let i = 0;
    while (i < stations.length - 2 && xx > stations[i + 1][0]) i++;
    const a = stations[i], b = stations[i + 1], t = (xx - a[0]) / (b[0] - a[0]);
    return [a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t,
      a[3] + (b[3] - a[3]) * t];
  }
  function surface(x, theta, side, inset = 0) {
    const [width, bottom, top] = section(x), height = (top - bottom) / rise;
    const ny = -width * Math.cos(theta), nz = height * Math.sin(theta);
    const n = Math.hypot(ny, nz);
    return [x, bottom + height * (1 - Math.cos(theta)) - inset * ny / n,
      side * (width * Math.sin(theta) - inset * nz / n)];
  }
  function outerZ(x, y) {
    const [width, bottom, top] = section(x);
    const cosine = Math.max(-1, Math.min(1, 1 - (y - bottom) * rise / (top - bottom)));
    return width * Math.sqrt(Math.max(0, 1 - cosine * cosine));
  }
  function indexedGeometry(positions, indices, uv) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    if (uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(indices);
    // Separate face normals retain plank/end-grain edges; every cap is real.
    const flat = g.toNonIndexed();
    g.dispose();
    flat.computeVertexNormals();
    return flat;
  }
  function mirrorWinding(g) {
    const count = g.getAttribute('position').count, indices = [];
    for (let i = 0; i < count; i += 3) indices.push(i, i + 2, i + 1);
    g.setIndex(indices);
  }

  // Closed, curved slabs: outer skin, inner skin, two longitudinal end-grain
  // caps and two strake-edge caps. Thickness follows the cross-section normal.
  function slab(xa, xb, ta, tb, side, thickness = .26, inset = 0) {
    const nx = Math.max(1, Math.ceil((xb - xa) / .65));
    const nt = Math.max(1, Math.ceil((tb - ta) / .09));
    const stride = nt + 1, layer = (nx + 1) * stride;
    const positions = [], uv = [], indices = [];
    for (let skin = 0; skin < 2; skin++) {
      for (let i = 0; i <= nx; i++) for (let j = 0; j <= nt; j++) {
        const x = xa + (xb - xa) * i / nx, t = ta + (tb - ta) * j / nt;
        positions.push(...surface(x, t, side, inset + skin * thickness));
        uv.push(x * .3, t * 2);
      }
    }
    const quad = (a, b, c, d) => indices.push(a, b, c, a, c, d);
    for (let i = 0; i < nx; i++) for (let j = 0; j < nt; j++) {
      const a = i * stride + j, b = a + stride, c = b + 1, d = a + 1;
      quad(a, b, c, d);
      quad(a + layer, d + layer, c + layer, b + layer);
    }
    for (let j = 0; j < nt; j++) {
      const a = j, b = nx * stride + j;
      quad(a, a + 1, a + 1 + layer, a + layer);
      quad(b, b + layer, b + 1 + layer, b + 1);
    }
    for (let i = 0; i < nx; i++) {
      const a = i * stride, b = a + stride;
      quad(a, a + layer, b + layer, b);
      quad(a + nt, b + nt, b + nt + layer, a + nt + layer);
    }
    if (side < 0) for (let i = 0; i < indices.length; i += 3) {
      const tmp = indices[i + 1]; indices[i + 1] = indices[i + 2]; indices[i + 2] = tmp;
    }
    return indexedGeometry(positions, indices, uv);
  }

  // Genuine circular holes in XY, not dark discs over an intact hull. Extruded
  // plates and annular collars are warped onto the upper curved shell in Z.
  function warpedPlate(shape, side, depth, inset = 0) {
    const g = new THREE.ExtrudeGeometry(shape, { depth, steps: 1, bevelEnabled: false, curveSegments: 32 });
    const p = g.getAttribute('position');
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), d = p.getZ(i);
      p.setZ(i, side * (outerZ(x, y) - inset - depth + d));
    }
    if (side < 0) mirrorWinding(g);
    g.computeVertexNormals();
    return g;
  }
  function portPlate(xa, xb, side, serial) {
    const shape = new THREE.Shape();
    // XY sheer is piecewise linear: keep real station corners only. Redundant
    // collinear contour samples can produce zero-area extrusion cap triangles.
    const xs = [xa, ...stations.map(s => s[0]).filter(x => x > xa && x < xb), xb];
    for (let i = 0; i < xs.length; i++) {
      const x = xs[i], y = surface(x, 1.08, side)[1];
      if (!i) shape.moveTo(x, y); else shape.lineTo(x, y);
    }
    for (let i = xs.length - 1; i >= 0; i--) {
      const x = xs[i];
      shape.lineTo(x, surface(x, 1.65, side)[1]);
    }
    shape.closePath();
    const xc = (xa + xb) / 2, yc = surface(xc, 1.38, side)[1], radius = .43;
    const hole = new THREE.Path();
    hole.absarc(xc, yc, radius, 0, Math.PI * 2, true);
    shape.holes.push(hole);
    add(warpedPlate(shape, side, .26), woodTones[serial % 10], `port-planking-${side}-${serial}`);
    const collar = new THREE.Shape();
    collar.absarc(xc, yc, .49, 0, Math.PI * 2, false);
    const bore = new THREE.Path();
    bore.absarc(xc, yc, radius, 0, Math.PI * 2, true);
    collar.holes.push(bore);
    add(warpedPlate(collar, side, .34, -.055), copper, `port-collar-${side}-${serial}`);
    const rim = new THREE.TorusGeometry(.512, .072, 8, 32);
    const p = rim.getAttribute('position');
    for (let i = 0; i < p.count; i++) {
      const x = xc + p.getX(i), y = yc + p.getY(i), z = p.getZ(i);
      p.setXYZ(i, x, y, side * (outerZ(x, y) + z + .035));
    }
    if (side < 0) {
      // TorusGeometry is indexed, unlike ExtrudeGeometry.
      const index = rim.index;
      for (let i = 0; i < index.count; i += 3) {
        const b = index.getX(i + 1); index.setX(i + 1, index.getX(i + 2)); index.setX(i + 2, b);
      }
    }
    rim.computeVertexNormals();
    add(rim, copper, `port-rim-${side}-${serial}`);
  }

  const cuts = [-10.4, -9.2, -8, -6, -5.5, -3.5, -2.65, 2.65, 3.3, 5.5, 7.5, 8.7, 9.4, 10];
  const rows = [0, .18, .36, .54, .72, .90, 1.08, 1.27, 1.46, 1.65, TOP];
  const portCells = new Set([2, 4, 8, 9]);
  for (const side of [-1, 1]) for (let i = 0; i < cuts.length - 1; i++) {
    const gap = side === 1 && i === 6;
    const hasPort = portCells.has(i);
    const edge = (i < 2 || i > 10 || hasPort) ? TOP : 1.59 + rnd() * .12;
    for (let j = 0; j < rows.length - 1; j++) {
      if (gap && j >= 4) continue;
      if (hasPort && j >= 6 && j <= 8) continue;
      let xa = cuts[i], xb = cuts[i + 1];
      // Retreat the broken ends OUT of the clearance interval, never across it.
      if (side === 1 && j >= 4) {
        if (i === 5) xb -= rnd() * .34;
        if (i === 7) xa += rnd() * .34;
      }
      const ta = rows[j], tb = j === 9 ? Math.max(1.665, edge) : rows[j + 1];
      add(slab(xa, xb, ta, tb, side), woodTones[(i * 3 + j) % 10], `hull-strake-${side}-${i}-${j}`);
    }
    if (hasPort) portPlate(cuts[i], cuts[i + 1], side, i);
    if (!gap) {
      const railTop = Math.max(1.665, edge);
      add(slab(cuts[i], cuts[i + 1], railTop - .025, railTop + .008, side, .095, -.045),
        copper, `broken-copper-sheer-${side}-${i}`);
    }
  }

  // Narrow closed transoms at the two ends, rather than a solid filling the hold.
  for (const x of [-10.4, 10]) {
    const shape = new THREE.Shape();
    shape.moveTo(0, surface(x, 0, 1)[1]);
    for (let i = 1; i <= 24; i++) {
      const p = surface(x, TOP * i / 24, 1); shape.lineTo(p[2], p[1]);
    }
    for (let i = 24; i >= 0; i--) {
      const p = surface(x, TOP * i / 24, -1); shape.lineTo(p[2], p[1]);
    }
    shape.closePath();
    const g = new THREE.ExtrudeGeometry(shape, { depth: .26, bevelEnabled: false, steps: 1 });
    g.rotateY(Math.PI / 2);
    add(g, endGrain, x < 0 ? 'stern-transom' : 'bow-transom', [x - .13, 0, 0]);
  }
  box(0, .16, 0, 6.4, .32, .36, ribWood, 'grounded-keel');
  for (let i = 0; i < stations.length - 1; i++) {
    const a = stations[i], b = stations[i + 1];
    beam([a[0], a[2] + .12, 0], [b[0], b[2] + .12, 0], .30, .34, ribWood, `curved-keel-${i}`);
  }
  const stem = [[9.72, 2.75, 0], [10.03, 4.35, 0], [10.33, 6.02, 0], [10.68, 7.63, 0]];
  for (let i = 0; i < stem.length - 1; i++) {
    beam(stem[i], stem[i + 1], .42, .64, endGrain, `upturned-bow-stem-${i}`);
    const a = stem[i], b = stem[i + 1];
    for (const side of [-1, 1]) beam([a[0] + .055, a[1], side * .33],
      [b[0] + .055, b[1], side * .33], .075, .055, copper, `stem-copper-${i}-${side}`);
  }

  for (const x of [-8.6, -6.25, -3.15, 3.05, 5.9, 8.45]) for (const side of [-1, 1]) {
    add(slab(x - .13, x + .13, 0, 1.67, side, .19, .285), ribWood, `interior-rib-${side}-${x}`);
  }
  // Low, individually closed sole planks; widths are clipped to the curved
  // hull at BOTH ends. Space above and the entire side breach remain empty.
  for (let i = 0; i < 8; i++) {
    const x = -5.85 + i * 1.65, length = 1.61;
    const width = Math.min(outerZ(x - length / 2, 1.58), outerZ(x + length / 2, 1.58)) - .32;
    for (let j = -3; j <= 3; j++) {
      const z = j * .42;
      if (Math.abs(z) + .19 > width) continue;
      // Two missing sole boards expose the bilge; not an impassable floor box.
      if ((i === 3 || i === 4) && j === -3) continue;
      box(x, 1.68, z, length, .20, .38, woodTones[(i + j + 10) % 10], `sole-plank-${i}-${j}`);
    }
  }
  // Remnant raised decks at the ends only; the central hold is open overhead.
  for (const [xa, xb, y] of [[-9.1, -6.65, 5.25], [6.35, 8.35, 5.40]]) {
    for (let x = xa + .21; x < xb; x += .43) {
      const half = Math.min(outerZ(x - .20, y), outerZ(x + .20, y)) - .34;
      box(x, y, 0, .40, .18, half * 2, wood, `raised-deck-${x.toFixed(2)}`);
    }
    for (const z of [-.75, .75]) beam([xa + .2, y - .25, z], [xb - .15, y - .25, z],
      .24, .22, ribWood, `deck-bearer-${xa}-${z}`);
  }

  // A 40-sided exact vertical lower mast is the only cylinder recovery solid.
  const mastX = -6.8, mastY = 5.13, mastH = 6.86, mastRadius = .24;
  add(new THREE.CylinderGeometry(mastRadius, mastRadius, mastH, 40, 1), ribWood,
    'short-broken-mast-base', [mastX, mastY, -.18]);
  solids.push({ kind: 'cylinder', center: [mastX, mastY, -.18], radius: mastRadius, half: mastH / 2 });
  // Uneven, capped fracture crown: not an open cylinder or a recovery cylinder.
  const crownPositions = [], crownIndices = [], count = 40, bottom = 8.54;
  for (let ring = 0; ring < 2; ring++) for (let i = 0; i < count; i++) {
    const a = i * Math.PI * 2 / count;
    const r = ring ? .18 + rnd() * .035 : mastRadius;
    const y = ring ? 8.88 + rnd() * .37 : bottom;
    crownPositions.push(mastX + Math.cos(a) * r, y, -.18 + Math.sin(a) * r);
  }
  crownPositions.push(mastX, bottom, -.18, mastX, 8.89, -.18);
  for (let i = 0; i < count; i++) {
    const j = (i + 1) % count;
    crownIndices.push(i, count + i, count + j, i, count + j, j,
      2 * count, i, j, 2 * count + 1, count + j, count + i);
  }
  add(indexedGeometry(crownPositions, crownIndices), endGrain, 'capped-splintered-mast-crown');
  beam([-6.8, 7.45, -1.25], [-6.8, 7.25, 1.12], .18, .18, wood, 'broken-yard-stub');
  for (const side of [-1, 1]) {
    beam([-3.16, 5.25, side * 2.74], [-3.0, 6.23, side * 2.90], .14, .14, endGrain, `torn-sheer-splinter-${side}`);
    beam([3.1, 5.75, side * 2.70], [3.0, 6.72, side * 2.78], .13, .15, endGrain, `forward-sheer-splinter-${side}`);
  }
  // Fallen boards stay against the intact far side, never bridging the gap.
  beam([-1.5, 2.0, -1.4], [1.3, 2.33, -2.15], .12, .32, wood, 'loose-interior-board');

  function branch(a, b, r, material) {
    const av = new THREE.Vector3(...a), bv = new THREE.Vector3(...b), delta = bv.clone().sub(av);
    const mesh = add(new THREE.CylinderGeometry(r * .55, r, delta.length(), 6, 1), material,
      'small-coral-branch', av.clone().add(bv).multiplyScalar(.5).toArray(), false);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
  }
  function coral(x, y, z, size) {
    const m = coralMaterials[Math.floor(rnd() * coralMaterials.length)];
    for (let i = 0; i < 3; i++) {
      const a = rnd() * Math.PI * 2, h = size * (.65 + rnd() * .3);
      const top = [x + Math.cos(a) * size * .20, y + h, z + Math.sin(a) * size * .20];
      branch([x, y, z], top, .035, m);
      branch([x, y + h * .5, z], [top[0] + size * .22, top[1] + size * .12, top[2]], .021, m);
    }
  }
  for (const [x, z, sx, sy, sz] of [[-8.6, 2.12, 1.1, .44, .8],
    [-7.8, -2.35, .85, .36, .65], [7.3, 1.7, .75, .48, .8], [6.7, -2.0, 1.0, .36, .7]]) {
    const rock = add(new THREE.IcosahedronGeometry(1, 1), reef, 'low-keel-reef', [x, sy, z]);
    rock.scale.set(sx, sy, sz);
    rock.rotation.y = rnd() * Math.PI;
    coral(x, sy * 1.8, z, .4 + rnd() * .2);
  }
  for (const [x, side] of [[-8.3, 1], [-4.1, -1], [5.9, 1], [8.8, -1]]) {
    const p = surface(x, 1.69, side, -.04);
    coral(p[0], p[1], p[2], .36);
  }

  root.updateMatrixWorld(true);
  return { root, solids, spec: WRECK_SPEC };
}
