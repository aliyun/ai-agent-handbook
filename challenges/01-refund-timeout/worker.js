// 在独立线程里跑玩家代码：死循环不会卡住页面，主线程超时后直接终止这个 Worker。
// sval.min.js 是解释器，sim.js 由 scripts/build-challenges.mjs 从 engine.js 等生成。
importScripts('sval.min.js', 'sim.js');

self.onmessage = async (e) => {
  const { runAll, compileSandboxed } = self.RefundSim;
  const { code, seedBase } = e.data || {};
  let load;
  try {
    load = compileSandboxed(code);
    load(); // 先实例化一次，尽早暴露语法错误和顶层异常
  } catch (err) {
    self.postMessage({ ok: false, kind: 'compile', message: String(err && err.message ? err.message : err) });
    return;
  }
  try {
    const summary = await runAll(load, { seedBase, hangMs: 80 });
    self.postMessage({ ok: true, summary });
  } catch (err) {
    self.postMessage({ ok: false, kind: 'runtime', message: String(err && err.message ? err.message : err) });
  }
};
