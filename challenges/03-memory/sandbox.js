// 生产使用 Sval 解释执行，不使用 eval / new Function；每次 load 都是全新实例。
const STRIP = (code) => String(code)
  .replace(/^\s*export\s+default\s+/gm, '')
  .replace(/^\s*export\s+(async\s+function|function|const|let|var|class)\b/gm, '$1');
const TAIL = '\n;exports.__hooks = {\n'
  + '  onRecall: typeof onRecall === "function" ? onRecall : undefined,\n'
  + '  canComplete: typeof canComplete === "function" ? canComplete : undefined\n};';

export function compileSandboxed(code, SvalCtor = globalThis.Sval) {
  if (typeof SvalCtor !== 'function') throw new Error('解释器没有加载成功');
  const source = `"use strict";${STRIP(code)}${TAIL}`;
  const lines = String(code).split('\n').length;
  return () => {
    const interp = new SvalCtor({ ecmaVer: 'latest', sourceType: 'script', sandBox: true });
    // 全局别名 window/self/globalThis 在 Sval 中也指向这个隔离的 global scope。
    // 真实计时不属于模拟工具合同；6 秒硬超时由 UI 终止 classic Worker 保障。
    interp.import({
      setTimeout: undefined, setInterval: undefined, requestAnimationFrame: undefined,
      setImmediate: undefined, queueMicrotask: undefined,
      clearTimeout: undefined, clearInterval: undefined, clearImmediate: undefined, cancelAnimationFrame: undefined,
    });
    try { interp.run(source); }
    catch (error) {
      const match = /\((\d+):(\d+)\)$/.exec(error && error.message);
      if (match) {
        const message = Number(match[1]) > lines
          ? error.message.replace(match[0], '（在代码末尾，可能少了 } 或 )）')
          : error.message.replace(match[0], `（第 ${match[1]} 行）`);
        throw new SyntaxError(message);
      }
      throw error;
    }
    return interp.exports.__hooks;
  };
}
