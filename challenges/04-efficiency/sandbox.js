// 生产 classic Worker 使用隔离 Sval；每次加载重建实例，不动态编译玩家代码。
// 仅在专用 Worker 内调用：ctx/工具结果与解释器共享原生原型，必须先保护宿主内建对象。
export function protectSandboxHost() {
  const functionPrototypes = [Function.prototype,
    Object.getPrototypeOf(async function () {}),
    Object.getPrototypeOf(function* () {}),
    Object.getPrototypeOf(async function* () {})];
  for (const prototype of functionPrototypes) {
    Object.defineProperty(prototype, 'constructor', { value: undefined, writable: false, configurable: false });
  }
  const seen = new Set();
  function protect(value) {
    if (!value || (typeof value !== 'object' && typeof value !== 'function') || seen.has(value)) return;
    seen.add(value);
    for (const name of Object.getOwnPropertyNames(value)) {
      const descriptor = Object.getOwnPropertyDescriptor(value, name);
      if (descriptor && 'value' in descriptor) protect(descriptor.value);
      if (descriptor && descriptor.get) protect(descriptor.get);
      if (descriptor && descriptor.set) protect(descriptor.set);
    }
    protect(Object.getPrototypeOf(value));
    // Sval 用赋值创建对象字面量方法；保留 toString 等已有数据字段的可写性，
    // 同时禁止新增继承字段（如 toJSON）。引擎所需 hasOwnProperty 已独立捕获。
    if (value === Object.prototype) Object.seal(value);
    else Object.freeze(value);
  }
  const iteratorPrototypes = [Object.getPrototypeOf([][Symbol.iterator]()),
    Object.getPrototypeOf(new Map().entries()), Object.getPrototypeOf(new Set().values()),
    Object.getPrototypeOf(''[Symbol.iterator]()),
    Object.getPrototypeOf((function* () {})()), Object.getPrototypeOf((async function* () {})())];
  for (const root of [Object, Array, Function, Map, Set, WeakMap, WeakSet, Promise,
    String, Number, Boolean, Symbol, BigInt, RegExp, Date, Error, TypeError,
    RangeError, SyntaxError, EvalError, ReferenceError, URIError, JSON, Math, Reflect,
    ...functionPrototypes, ...iteratorPrototypes]) protect(root);
  // 防止经 native constructor 或解释器全局重新获得动态执行入口。
  Object.defineProperty(globalThis, 'Function', { value: undefined, writable: false, configurable: false });
  Object.defineProperty(globalThis, 'eval', { value: undefined, writable: false, configurable: false });
}
const EFFICIENCY_STRIP = (code) => String(code)
  .replace(/^\s*export\s+default\s+/gm, '')
  .replace(/^\s*export\s+(async\s+function|function|const|let|var|class)\b/gm, '$1');
const EFFICIENCY_TAIL = '\n;exports.__hooks = {\n'
  + 'onOptimize: typeof onOptimize === "function" ? onOptimize : undefined,\n'
  + 'canComplete: typeof canComplete === "function" ? canComplete : undefined\n};';
export function compileSandboxed(code, SvalCtor = globalThis.Sval) {
  if (typeof SvalCtor !== 'function') throw new Error('解释器没有加载成功');
  const source = `"use strict";${EFFICIENCY_STRIP(code)}${EFFICIENCY_TAIL}`, lines = String(code).split('\n').length;
  return () => {
    const interpreter = new SvalCtor({ ecmaVer: 'latest', sourceType: 'script', sandBox: true });
    interpreter.import({
      Function: undefined, eval: undefined, ChallengeSim: undefined, RefundSim: undefined, Sval: undefined,
      postMessage: undefined, close: undefined, importScripts: undefined, Worker: undefined,
      fetch: undefined, XMLHttpRequest: undefined, WebSocket: undefined,
      setTimeout: undefined, setInterval: undefined, requestAnimationFrame: undefined,
      setImmediate: undefined, queueMicrotask: undefined, clearTimeout: undefined,
      clearInterval: undefined, clearImmediate: undefined, cancelAnimationFrame: undefined,
    });
    try { interpreter.run(source); }
    catch (error) {
      const match = /\((\d+):(\d+)\)$/.exec(error && error.message);
      if (match) throw new SyntaxError(error.message.replace(match[0], Number(match[1]) > lines ? '（在代码末尾，可能少了 } 或 )）' : `（第 ${match[1]} 行）`));
      throw error;
    }
    return interpreter.exports.__hooks;
  };
}
