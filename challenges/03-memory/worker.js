// classic Worker：Sval 解释器与 sim.js 由挑战构建脚本放在同一输出目录。
// 同步死循环由 UI 的 6 秒硬超时 terminate()，不在主线程运行玩家代码。
importScripts('sval.min.js', 'sim.js');

self.onmessage = async (event) => {
  const { runAll, compileSandboxed } = self.ChallengeSim;
  const { code, seedBase } = event.data || {};
  let load;
  try {
    load = compileSandboxed(code);
    load();
  } catch (error) {
    self.postMessage({ ok: false, kind: 'compile', message: String(error && error.message ? error.message : error) });
    return;
  }
  try {
    const summary = await runAll(load, { seedBase, hangMs: 80 });
    self.postMessage({ ok: true, summary });
  } catch (error) {
    self.postMessage({ ok: false, kind: 'runtime', message: String(error && error.message ? error.message : error) });
  }
};
