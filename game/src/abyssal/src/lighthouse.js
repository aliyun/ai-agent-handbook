import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Metres, entirely local coordinates; +z is the large eye's viewing direction.
export const LIGHTHOUSE_SPEC = Object.freeze({
  height: 25.26,
  baseRadius: 5,
  towerRadius: 2.9,
  towerTopRadius: 2.1,
  towerBottom: 1.4,
  towerTop: 18.8,
  bandRadius: 3.2,
  bandCenter: 19.96,
  eyeCenter: Object.freeze([0, 23, 0]),
  eyeOuterRadii: Object.freeze([1.98, 2.2]),
  front: Object.freeze([0, 0, 1]),
  radialSegments: 40,
});

export function createMistLighthouse() {
  const root = new THREE.Group();
  root.name = 'mist-lighthouse';
  const solids = [];
  const batches = new Map();
  let seed = 0x6c696768;
  const rnd = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const stone = (color, textured = true, metalness = 0) => {
    const material = new THREE.MeshStandardMaterial({ color, roughness: .91, metalness });
    material.userData.castleStone = textured;
    return material;
  };
  const mortar = stone('#878b76');
  const limestone = stone('#b6b39a');
  const mineral = stone('#c3b692');
  const reef = stone('#707e70');
  const bronze = stone('#727b61', false, .38);
  bronze.roughness = .67;
  const bronzeDark = stone('#485e52', false, .3);
  const tones = Array.from({ length: 10 }, () => {
    const material = limestone.clone();
    material.color.multiplyScalar(.88 + rnd() * .16);
    return material;
  });
  const coralMaterials = ['#997b85', '#a38b81', '#758d83', '#a39973'].map(color => stone(color, false));
  const glow = new THREE.MeshBasicMaterial({ color: '#55bba6', fog: true, toneMapped: false });
  const backGlow = new THREE.MeshBasicMaterial({ color: '#307e71', fog: true, toneMapped: false });

  function add(geometry, material, x = 0, y = 0, z = 0, collidable = true, name = '') {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.name = name;
    mesh.userData.collidable = collidable;
    root.add(mesh);
    return mesh;
  }

  // Batch only detail meshes, preserving the named closed core for inspection.
  function batch(mesh) {
    mesh.updateMatrix();
    const geometry = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
    geometry.applyMatrix4(mesh.matrix);
    const key = `${mesh.material.uuid}:${mesh.userData.collidable}`;
    if (!batches.has(key)) batches.set(key, { material: mesh.material, collidable: mesh.userData.collidable, geometries: [] });
    batches.get(key).geometries.push(geometry);
    mesh.geometry.dispose();
    root.remove(mesh);
  }

  // Lathe pole quads contain one zero-area triangle each; omit those, not caps.
  function closedLathe(profile, material, name) {
    const geometry = new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), 40);
    const p = geometry.attributes.position;
    const old = geometry.index.array;
    const indices = [];
    const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
    for (let i = 0; i < old.length; i += 3) {
      a.fromBufferAttribute(p, old[i]);
      b.fromBufferAttribute(p, old[i + 1]).sub(a);
      c.fromBufferAttribute(p, old[i + 2]).sub(a);
      if (b.cross(c).lengthSq() > 1e-16) indices.push(old[i], old[i + 1], old[i + 2]);
    }
    geometry.setIndex(indices);
    return add(geometry, material, 0, 0, 0, true, name);
  }

  function cylinder(radius, height, y, material, name) {
    const mesh = add(new THREE.CylinderGeometry(radius, radius, height, 40, 1, false), material, 0, y, 0, true, name);
    // Only exact, upright, closed 40-sided cylinders have analytic recovery solids.
    solids.push({ kind: 'cylinder', center: [0, y, 0], radius, half: height / 2 });
    return mesh;
  }

  const radiusAt = y => {
    const t = THREE.MathUtils.clamp((y - LIGHTHOUSE_SPEC.towerBottom) / (LIGHTHOUSE_SPEC.towerTop - LIGHTHOUSE_SPEC.towerBottom), 0, 1);
    return LIGHTHOUSE_SPEC.towerRadius + (LIGHTHOUSE_SPEC.towerTopRadius - LIGHTHOUSE_SPEC.towerRadius) * t;
  };

  // A closed annular wedge with radial end faces, not an open surface tile.
  function masonryBlock(y0, y1, start, span, relief, material) {
    const ring = [
      [radiusAt(y0) - .10, y0],
      [radiusAt(y0) + relief, y0],
      [radiusAt(y1) + relief, y1],
      [radiusAt(y1) - .10, y1],
    ];
    const positions = [], indices = [];
    const steps = 2;
    for (let i = 0; i <= steps; i++) {
      const angle = start + span * i / steps;
      for (const [r, y] of ring) positions.push(r * Math.sin(angle), y, r * Math.cos(angle));
    }
    for (let i = 0; i < steps; i++) for (let j = 0; j < 4; j++) {
      const a = i * 4 + j, b = a + 4, d = i * 4 + (j + 1) % 4, c = d + 4;
      indices.push(a, b, d, c, d, b);
    }
    indices.push(0, 1, 2, 0, 2, 3);
    const end = steps * 4;
    indices.push(end, end + 2, end + 1, end, end + 3, end + 2);
    const indexed = new THREE.BufferGeometry();
    indexed.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    indexed.setIndex(indices);
    const geometry = indexed.toNonIndexed();
    indexed.dispose();
    geometry.computeVertexNormals();
    // A UV attribute keeps all batch geometries compatible; stone uses triplanar mapping.
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(geometry.attributes.position.count * 2), 2));
    batch(add(geometry, material));
  }

  // Low weathered reef bed: a capped solid with deterministic radial erosion.
  const bed = closedLathe([
    [0, 0], [3.65, 0], [4.38, .18], [4.56, .52], [4.08, .92], [3.2, 1.34], [0, 1.34],
  ], reef, 'closed-weathered-reef');
  const bedPositions = bed.geometry.attributes.position;
  for (let i = 0; i < bedPositions.count; i++) {
    const x = bedPositions.getX(i), z = bedPositions.getZ(i), angle = Math.atan2(x, z);
    const erosion = 1 + .035 * Math.sin(angle * 3 + .7) + .022 * Math.cos(angle * 7 - .4);
    bedPositions.setXYZ(i, x * erosion, bedPositions.getY(i), z * erosion);
  }
  bedPositions.needsUpdate = true;
  bed.geometry.computeVertexNormals();
  for (let i = 0; i < 14; i++) {
    const angle = i * Math.PI * 2 / 14 + (rnd() - .5) * .12;
    const radius = 3.85 + rnd() * .24;
    const rock = add(new THREE.IcosahedronGeometry(1, 1), i % 3 ? reef : mortar,
      Math.sin(angle) * radius, .68, Math.cos(angle) * radius);
    rock.scale.set(.54 + rnd() * .32, .38 + rnd() * .26, .56 + rnd() * .30);
    rock.rotation.y = rnd() * Math.PI * 2;
    batch(rock);
  }
  cylinder(3.24, .64, 1.02, mortar, 'closed-lower-footing');
  cylinder(3.06, .24, 1.46, mineral, 'closed-footing-rim');

  // The actual taper is capped at both ends. No constant-radius hidden tower.
  const towerProfile = [
    [0, 1.4], [2.9, 1.4], [radiusAt(1.5), 1.5],
    [radiusAt(18.7), 18.7], [2.1, 18.8], [0, 18.8],
  ];
  closedLathe(towerProfile, mortar, 'closed-tapered-tower');
  const courseHeight = 17.4 / 18, count = 16, angleStep = Math.PI * 2 / count;
  for (let row = 0; row < 18; row++) for (let i = 0; i < count; i++) {
    const y0 = 1.4 + row * courseHeight + .018, y1 = 1.4 + (row + 1) * courseHeight - .018;
    const start = i * angleStep + (row % 2 ? angleStep / 2 : 0) + .006;
    masonryBlock(y0, y1, start, angleStep - .012, .045 + rnd() * .035, tones[(i + row * 3) % tones.length]);
  }
  for (const y of [2.05, 10.17, 18.6]) {
    const r0 = radiusAt(y - .08), r1 = radiusAt(y + .08);
    closedLathe([[0, y - .08], [r0 + .095, y - .08], [r1 + .095, y + .08], [0, y + .08]], limestone, 'closed-string-course');
  }

  closedLathe([
    [0, 18.65], [radiusAt(18.65), 18.65], [2.17, 18.82], [3.05, 19.10],
    [3.26, 19.19], [3.26, 19.42], [0, 19.42],
  ], mineral, 'closed-flared-capital');

  // Twelve curved, individually closed stone panels with REAL round through-holes.
  // The ring's cavity is empty: no opaque porthole discs or solid drum behind it.
  const panelCount = 12, outerRadius = 3.16, innerRadius = 2.75;
  for (let i = 0; i < panelCount; i++) {
    const angle = i * Math.PI * 2 / panelCount;
    const width = outerRadius * (Math.PI * 2 / panelCount - .005), halfHeight = .54;
    const shape = new THREE.Shape();
    shape.moveTo(-width / 2, -halfHeight);
    for (let j = 1; j <= 4; j++) shape.lineTo(-width / 2 + width * j / 4, -halfHeight);
    shape.lineTo(width / 2, halfHeight);
    for (let j = 1; j <= 4; j++) shape.lineTo(width / 2 - width * j / 4, halfHeight);
    shape.closePath();
    const hole = new THREE.Path();
    hole.absellipse(0, 0, .237, .237, 0, Math.PI * 2, true);
    shape.holes.push(hole);
    const geometry = new THREE.ExtrudeGeometry(shape, { depth: outerRadius - innerRadius, steps: 1, bevelEnabled: false, curveSegments: 10 });
    const positions = geometry.attributes.position;
    for (let j = 0; j < positions.count; j++) {
      const theta = angle + positions.getX(j) / outerRadius;
      const r = innerRadius + positions.getZ(j);
      positions.setXYZ(j, r * Math.sin(theta), positions.getY(j) + LIGHTHOUSE_SPEC.bandCenter, r * Math.cos(theta));
    }
    positions.needsUpdate = true;
    geometry.computeVertexNormals();
    batch(add(geometry, tones[(i + 2) % tones.length]));
    const rim = add(new THREE.TorusGeometry(.269, .061, 6, 16), mineral,
      Math.sin(angle) * 3.17, LIGHTHOUSE_SPEC.bandCenter, Math.cos(angle) * 3.17);
    rim.rotation.y = angle;
    batch(rim);
  }
  cylinder(3.28, .25, 20.625, mineral, 'closed-capital-lid');
  cylinder(1.5, .30, 20.86, bronzeDark, 'closed-eye-plinth');

  function strut(a, b, radius, material, collidable = true) {
    const av = new THREE.Vector3(...a), bv = new THREE.Vector3(...b), delta = bv.clone().sub(av);
    const mesh = add(new THREE.CylinderGeometry(radius * .7, radius, delta.length(), collidable ? 8 : 5, 1, false), material,
      ...av.clone().add(bv).multiplyScalar(.5).toArray(), collidable);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
    batch(mesh);
  }
  for (const sign of [-1, 1]) {
    strut([sign * 1.34, 20.77, -.10], [sign * 1.71, 21.91, -.12], .18, bronze);
  }

  // Thick upright mineral frame, convex teal eye and a fully modelled bronze back.
  const frameShape = new THREE.Shape();
  frameShape.absellipse(0, 0, 1.98, 2.2, 0, Math.PI * 2, false);
  const aperture = new THREE.Path();
  aperture.absellipse(0, 0, 1.62, 1.84, 0, Math.PI * 2, true);
  frameShape.holes.push(aperture);
  add(new THREE.ExtrudeGeometry(frameShape, {
    depth: .60, bevelEnabled: true, bevelSegments: 2, bevelSize: .06, bevelThickness: .06, steps: 1, curveSegments: 24,
  }), mineral, 0, 23, -.30, true, 'closed-mineral-eye-frame');
  const rear = add(new THREE.SphereGeometry(1, 28, 14), bronzeDark, 0, 23, -.10, true, 'closed-bronze-eye-back');
  rear.scale.set(1.84, 2.07, .36);
  const lens = add(new THREE.SphereGeometry(1, 40, 18), glow, 0, 23, .36, true, 'closed-teal-eye');
  lens.scale.set(1.62, 1.84, .34);
  const lip = add(new THREE.TorusGeometry(1, .044, 8, 40), bronze, 0, 23, .43, true, 'bronze-aperture-lip');
  lip.scale.set(1.63, 1.85, 1);
  for (let i = 0; i < 12; i++) {
    const angle = i * Math.PI * 2 / 12;
    const x = Math.sin(angle) * 1.83, y = 23 + Math.cos(angle) * 2.06;
    for (const z of [-.37, .37]) {
      const stud = add(new THREE.SphereGeometry(.058, 8, 4), bronze, x, y, z);
      stud.scale.z = .62;
      batch(stud);
    }
  }
  // Back-side service eye and spokes stay dim and physically attached to the shell.
  const rearRim = add(new THREE.TorusGeometry(.64, .085, 8, 24), bronze, 0, 23, -.48);
  rearRim.scale.y = 1.12;
  const serviceEye = add(new THREE.SphereGeometry(1, 20, 10), backGlow, 0, 23, -.52, true, 'closed-rear-service-eye');
  serviceEye.scale.set(.57, .64, .095);
  for (let i = 0; i < 6; i++) {
    const angle = i * Math.PI / 3;
    strut([Math.sin(angle) * .7, 23 + Math.cos(angle) * .79, -.37],
      [Math.sin(angle) * 1.65, 23 + Math.cos(angle) * 1.84, -.24], .045, bronze);
  }

  function coral(x, y, z, size) {
    const material = coralMaterials[Math.floor(rnd() * coralMaterials.length)];
    for (let i = 0; i < 3; i++) {
      const angle = rnd() * Math.PI * 2, height = size * (.64 + rnd() * .45);
      const tip = [x + Math.sin(angle) * size * .23, y + height, z + Math.cos(angle) * size * .23];
      strut([x, y, z], tip, size * .034, material, false);
      for (const sign of [-1, 1]) {
        const split = angle + sign * .95;
        strut([x + (tip[0] - x) * .52, y + height * .52, z + (tip[2] - z) * .52],
          [tip[0] + Math.sin(split) * size * .23, tip[1] + size * .14, tip[2] + Math.cos(split) * size * .23],
          size * .020, material, false);
      }
    }
  }
  for (let i = 0; i < 26; i++) {
    const angle = rnd() * Math.PI * 2, radius = 3.43 + rnd() * .86;
    coral(Math.sin(angle) * radius, .64 + rnd() * .15, Math.cos(angle) * radius, .42 + rnd() * .85);
  }
  for (let i = 0; i < 6; i++) {
    const angle = i * Math.PI * 2 / 6 + .2;
    coral(Math.sin(angle) * 2.55, 20.75, Math.cos(angle) * 2.55, .32 + rnd() * .30);
  }

  for (const { material, collidable, geometries } of batches.values()) {
    const merged = mergeGeometries(geometries, false);
    if (!merged) throw new Error('Incompatible lighthouse detail geometry');
    add(merged, material, 0, 0, 0, collidable, collidable ? 'closed-stone-metal-detail' : 'noncolliding-coral-detail');
    for (const geometry of geometries) geometry.dispose();
  }
  root.updateMatrixWorld(true);
  return { root, solids, spec: LIGHTHOUSE_SPEC };
}
