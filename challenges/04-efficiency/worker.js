// classic Worker：只在独立线程内用 Sval；页面6秒硬超时负责终止同步死循环。
// REFERENCE / BASELINE 已由 sim.js 提供为普通字符串，没有动态 import。
let bootError = null;
try {
  importScripts('sval.min.js', 'sim.js');
  self.ChallengeSim.protectSandboxHost();
}
catch (error) { bootError = String(error && error.message ? error.message : error); }

self.onmessage = async (event) => {
  if (bootError || !self.ChallengeSim || typeof self.ChallengeSim.compileSandboxed !== 'function' || typeof self.ChallengeSim.runAll !== 'function') {
    self.postMessage({ ok: false, kind: 'worker', message: bootError || '独立模拟器没有完整加载' });
    return;
  }
  const { code, seedBase } = event.data || {};
  if (typeof code !== 'string') {
    self.postMessage({ ok: false, kind: 'compile', message: '代码必须是字符串' });
    return;
  }
  let load;
  try {
    load = self.ChallengeSim.compileSandboxed(code);
    load(); // 提前检查语法与解释器初始化，每次真正调用仍是新实例。
  } catch (error) {
    self.postMessage({ ok: false, kind: 'compile', message: String(error && error.message ? error.message : error) });
    return;
  }
  try {
    const summary = await self.ChallengeSim.runAll(load, { seedBase, hangMs: 80 });
    self.postMessage({ ok: true, summary });
  } catch (error) {
    self.postMessage({ ok: false, kind: 'runtime', message: String(error && error.message ? error.message : error) });
  }
};
