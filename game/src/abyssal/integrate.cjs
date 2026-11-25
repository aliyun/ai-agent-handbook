const fs=require('node:fs'),path=require('node:path');
module.exports=(source,root)=>{
 const read=n=>fs.readFileSync(path.join(root,'src',n),'utf8');
 const replace=(old,value)=>{const count=source.split(old).length-1;if(count!==1)throw new Error('Integration anchor count '+count+': '+old.slice(0,80));source=source.replace(old,()=>value);};
 source=source.replaceAll('abyssalLoad','customsCastleV2Load').replaceAll('localStorage.abyssal','localStorage.customsCastleV2').replaceAll("'abyssal'","'customsCastleV2'");
 // Local v2 water grading: retain the original extinction, animated caustics,
 // shadows and volumetric pipeline. Reduce additive whitening at its source,
 // especially the original lavender zone, rather than applying a CSS filter.
 replace('const PCOL = vec3f(.58, .66, .98);','const PCOL = vec3f(.22, .50, .66);');
 replace('I * (1.22 + .3 * m2 * m2);','I * (.96 + .22 * m2 * m2);');
 replace('const TANH = 0.6, NEAR = 0.1, EXPO = 0.62, RAYS = 0.54;','const TANH = 0.6, NEAR = 0.1, EXPO = 0.54, RAYS = 0.32;');
 replace('c = mix(c, bl, .06) + bl * .03;','c = mix(c, bl, .035) + bl * .015;');
 replace("const $ = (id) => document.getElementById(id);",read('layout.js')+'\n'+"const $ = (id) => document.getElementById(id);");
 replace('D = Wd.gy = T.smp = null;', 'const V3_LAYOUT=v3Layout(Wd.gy);\nD = Wd.gy = T.smp = null;');
 replace('// ---------------------------------------------------------------- timing (GPU timestamp queries)',read('model-shader.js')+'\n'+read('native-models.js')+'\n'+read('castle-collision.js')+'\n'+read('game.js')+'\n// ---------------------------------------------------------------- timing (GPU timestamp queries)');
 replace('function render() {','function render() {\n  if(!V3_STATE.hideAdditions)v3Camera();v3Prepare();');
 replace('  // kelp and plants: 9-row blades up close, 5 rows mid-range, a decimated set far away','  v3DrawWorld(r);\n  // kelp and plants: 9-row blades up close, 5 rows mid-range, a decimated set far away');
 replace('  r.setPipeline(pBack); r.draw(4);','  r.setPipeline(pBack); r.draw(4);\n  v3DrawGlass(r);');
 replace("  r = e.beginRenderPass(passPost); r.setPipeline(pPost); r.setBindGroup(0, bgPost); r.draw(3); r.end();","  r = e.beginRenderPass(passPost); r.setPipeline(pPost); r.setBindGroup(0, bgPost); r.draw(3); r.end();\n  v3DrawCockpit(e,passPost.colorAttachments[0].view);");
 const begin=source.indexOf('  F[TIME] += dt;\n  {'),end=source.indexOf('  render();\n  if (hud)',begin);
 if(begin<0||end<begin)throw new Error('Upstream frame movement boundary changed');
 source=source.slice(0,begin)+'  if(!menu)F[TIME]+=dt;\n  v3Update(dt);\n'+source.slice(end);
 replace("else if (e.code >= 'Digit1' && e.code <= 'Digit6') lookAt(...POSES[e.code.charCodeAt(5) - 49]);","else if (e.code >= 'Digit1' && e.code <= 'Digit3' && !menu && !e.repeat) v3GotoLandmark(['castle','lighthouse','wreck'][e.code.charCodeAt(5)-49]);");
 replace("  menu = m; body.className = m ? 'm' : document.pointerLockElement ? 'g p' : 'g';","  if(V3_STATE.completed&&!V3_STATE.continuing){menu=true;body.className='g';return;}\n  menu = m; if(m){v3Stop();v3PauseAudio();} body.className = m ? 'm' : document.pointerLockElement ? 'g p' : 'g';");
 replace("  sound(); ui(false); bDive.textContent = 'Resume';","  ui(false); sound(); V3_STATE.started=true;v3Post('started');v3Music.play().catch(()=>{});bDive.textContent = '继续探索';");
 // Starting/resuming must leave the cursor free for the on-screen controls.
 // Clicking the canvas still opts into the original mouse-look capture.
 replace('  if (!mob) capture();','  // Mouse capture is opt-in through the canvas, not the start button.');
 replace("  if (mob) document.documentElement.requestFullscreen?.()?.then(() => screen.orientation.lock('landscape')).catch(() => 0);",'  // Keep the actual viewport on phones; optional fullscreen has its own button.');
 replace("canvas.addEventListener('click', capture);","canvas.addEventListener('click', () => {if(!mob)capture();});");
 replace("document.addEventListener('pointerlockchange', () => ui(!document.pointerLockElement));","document.addEventListener('pointerlockchange', () => {if(mob)return;if(document.pointerLockElement===canvas){v3ReleasedMouse=false;if(V3_STATE.started&&!menu)ui(false);}else if(!v3ReleasedMouse&&V3_STATE.started&&!menu)ui(true);});");
 replace('lookAt(...POSES[0]);','v3Setup();v3Camera();');
 replace('ui(true);\nrequestAnimationFrame',"ui(true);v3Post('ready');\nrequestAnimationFrame");
 replace('  requestAnimationFrame(frame);','  requestAnimationFrame(frame);\n  if(V3_STATE.hostSuspended){F[LAST]=now;return;}\n  resize();');
 replace("else if (e.code === 'KeyM') mute();","else if (e.code === 'KeyM') {mute();v3Music.muted=!v3Music.muted;}");
 replace('const mute = () => { muted = !muted;', 'const mute = () => { if(!AC || !OUT)return; muted = !muted;');
 replace('function sound() {', 'function sound() {\n  if(document.hidden || V3_STATE.hostSuspended || menu)return;');
 replace("document.addEventListener('visibilitychange', () => { if (AC) document.hidden ? AC.suspend() : AC.resume(); });", "document.addEventListener('visibilitychange', () => { if(!window.__abyssalV3)return; if (document.hidden || V3_STATE.hostSuspended || menu) v3PauseAudio(); else {sound();v3Music.play().catch(()=>{});} });");
 replace('const x = rot.matches ? f.clientY : f.clientX, y = rot.matches ? -f.clientX : f.clientY, s = 1100 / min(innerWidth, innerHeight);','const x = f.clientX, y = f.clientY, s = 1100 / min(innerWidth, innerHeight);');
 // Only fingers started on the canvas may drive its look joystick.
 source=source.replaceAll('e.touches','e.targetTouches');
 const messages={'This scene needs WebGPU. Try a current Chrome or Edge.':'需要 WebGPU，请用桌面 Chrome 或 Edge 打开。','No WebGPU adapter found.':'未找到 WebGPU 显卡，请检查浏览器硬件加速。','The graphics device was lost. Reload the page to try again.':'显卡连接已中断，请重新加载。','Compiling shaders…':'准备原版材质…','Sculpting the seabed…':'雕刻海底地形…','Carving canyons…':'生成海底峡谷…','Growing kelp…':'种植海藻森林…','Building set pieces…':'准备沉船与海洋生物…','Letting the light in…':'接入潜水舱与海底光照…'};
 for(const [a,b] of Object.entries(messages))source=source.replaceAll(a,b);
 return source;
};
