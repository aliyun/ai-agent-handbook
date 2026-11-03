// 用 Sval（纯 JS 写的 JS 解释器）执行玩家代码。
// 托管站点和桌面预览的安全策略禁止 eval / new Function，解释执行不受这条限制。
// 语义与 engine.js 里的 compileHarness 保持一致：去掉 export，取出两个函数；每次 load 都是一份全新的实例（模拟进程重启）。
const STRIP = (code) => String(code)
  .replace(/^\s*export\s+default\s+/gm, '')
  .replace(/^\s*export\s+(async\s+function|function|const|let|var|class)\b/gm, '$1');

const TAIL = '\n;exports.__hooks = {\n'
  + '  onRefundTimeout: typeof onRefundTimeout === "function" ? onRefundTimeout : undefined,\n'
  + '  canComplete: typeof canComplete === "function" ? canComplete : undefined\n};';

export function compileSandboxed(code, SvalCtor = globalThis.Sval) {
  if (typeof SvalCtor !== 'function') throw new Error('解释器没有加载成功');
  const source = `"use strict";${STRIP(code)}${TAIL}`; // 不换行，报错行号和编辑器对得上
  const lines = String(code).split('\n').length;
  return () => {
    const interp = new SvalCtor({ ecmaVer: 'latest', sourceType: 'script', sandBox: true });
    try {
      interp.run(source);
    } catch (err) {
      // 解析器报“第几行第几列”；位置落在玩家代码之后，多半是结尾少了 } 或 )
      const m = /\((\d+):(\d+)\)$/.exec(err && err.message);
      if (m) {
        const msg = Number(m[1]) > lines
          ? err.message.replace(m[0], '（在代码末尾，可能少了 } 或 )）')
          : err.message.replace(m[0], `（第 ${m[1]} 行）`);
        throw new SyntaxError(msg);
      }
      throw err;
    }
    return interp.exports.__hooks;
  };
}
