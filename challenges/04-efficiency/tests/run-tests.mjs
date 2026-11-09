// node challenges/04-efficiency/tests/run-tests.mjs
// 仅 Native 有界合同测试；生产玩家代码是 Sval，同步死循环交给 Worker 的6秒保护。
// 所有健壮性攻击测试公开；不存在额外隐藏业务场景。
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { LEVEL, SCENARIOS, PUBLIC_SEED, POLICY, makeSpecs, runOne, runAll, summarize, compileHarness, REFERENCE, BASELINE } from '../engine.js';
import { STARTER } from '../starter.js';
import { REFERENCE as COPIED_REFERENCE, BASELINE as COPIED_BASELINE } from '../reference.js';
import { compileSandboxed } from '../sandbox.js';

const vendor = readFileSync(new URL('../../01-refund-timeout/vendor/sval.min.js', import.meta.url), 'utf8');
const module = { exports: {} };
vm.runInNewContext(vendor, { module, exports: module.exports }, { timeout: 1000 });
const Sval = module.exports;
const specs = makeSpecs(), pick = (scene, index = 0) => structuredClone(specs.find((s) => s.scenario === scene && s.index === index));
const FALSE = 'function canComplete(ctx) { return false; }', TRUE = 'function canComplete(ctx) { return true; }';
const COMPLETE = REFERENCE.slice(REFERENCE.indexOf('\nfunction canComplete'));
const NOOP = `async function onOptimize(ctx) {}\n${FALSE}`;
const HUMAN = `async function onOptimize(ctx) {
  const h = await ctx.tools.askHuman(ctx.task.tickets.map(t=>t.ticketId), '人工核实');
  await ctx.tools.saveReport(h.items.map(x=>({ticketId:x.ticketId,decision:'WAITING_HUMAN',handoffReceiptId:x.receiptId})));
}\n${COMPLETE}`;
const ECONOMY = `async function onOptimize(ctx) {
  const ev = await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  const rows = [], ids = [];
  for(const t of ctx.task.tickets) {
    if(ev.items.find(o=>o.orderId===t.orderId).status==='unknown') {
      const h=await ctx.tools.askHuman([t.ticketId],'未知订单事实');
      rows.push({ticketId:t.ticketId,decision:'WAITING_HUMAN',handoffReceiptId:h.items[0].receiptId});
    } else ids.push(t.ticketId);
  }
  async function accept(reply, wanted) {
    const cs=[];
    for(const id of wanted) {
      const matches=reply.items.filter(x=>x.ticketId===id);
      if(matches.length===1 && matches[0].status==='candidate' && matches[0].candidate.ticketId===id) cs.push(matches[0].candidate);
    }
    const got=[];
    if(cs.length) {
      const v=await ctx.tools.verify(cs);
      for(const x of v.items) if(x.status==='accepted') {
        const c=cs.find(c=>c.ticketId===x.ticketId); got.push(x.ticketId);
        rows.push({ticketId:x.ticketId,decision:c.decision,candidate:c,verificationReceiptId:x.receiptId});
      }
    }
    return wanted.filter(id=>!got.includes(id));
  }
  const retry=await accept(await ctx.tools.infer('economy',ids),ids);
  if(retry.length) {
    const missing=await accept(await ctx.tools.infer('strong',retry),retry);
    if(missing.length) throw new Error('修复未完成');
  }
  await ctx.tools.saveReport(rows);
}\n${COMPLETE}`;
const AUTONOMOUS = `async function onOptimize(ctx) {
  const ev=await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId)), rows=[], cs=[];
  for(const t of ctx.task.tickets) {
    const o=ev.items.find(o=>o.orderId===t.orderId);
    if(o.status==='unknown') {
      const h=await ctx.tools.askHuman([t.ticketId],'真实事实unknown');
      rows.push({ticketId:t.ticketId,decision:'WAITING_HUMAN',handoffReceiptId:h.items[0].receiptId}); continue;
    }
    let f=o.facts;
    if(f.format==='text') {
      const parts=f.note.split('；');
      f={category:parts[0]==='已核实：非定制普通商品'?'standard':parts[0]==='已核实：定制商品'?'custom':'consumable',
        opened:parts[1]==='已拆封',exceptionApproved:parts[2].startsWith('已批准例外。')};
    }
    const age=ctx.task.at-o.deliveredDay;
    const ok=age>=0 && age<=14 && (f.exceptionApproved || f.category==='standard' || (f.category==='consumable' && !f.opened));
    cs.push({ticketId:t.ticketId,decision:ok?'RETURN_OK':'RETURN_NO',policyRevision:ctx.task.policyRevision,
      evidenceRefs:[o.evidenceRef],clauseRefs:['WINDOW','CATEGORY','OPENED','EXCEPTION']});
  }
  if(cs.length) {
    const v=await ctx.tools.verify(cs);
    for(const item of v.items) {
      if(item.status!=='accepted') throw new Error('自主规则失败');
      const c=cs.find(c=>c.ticketId===item.ticketId);
      rows.push({ticketId:item.ticketId,decision:c.decision,candidate:c,verificationReceiptId:item.receiptId});
    }
  }
  await ctx.tools.saveReport(rows);
}\n${COMPLETE}`;
let tests = 0, failures = 0, compared = 0, referenceSummary, baselineSummary;
const unhandled = [];
process.on('unhandledRejection', (error) => unhandled.push(error));
async function test(name, check) {
  tests++;
  try { await check(); console.log(`PASS ${name}`); }
  catch (error) { failures++; console.error(`FAIL ${name}\n${error.stack}`); }
}
async function compare(code, selected = specs, options = {}) {
  const native = compileHarness(code), interpreted = compileSandboxed(code, Sval);
  if (selected === specs) {
    const a = await runAll(native, options), b = await runAll(interpreted, options);
    assert.deepEqual(b, a, 'Native/Sval 全对象评分、trace、回执、成本必须一致'); compared += 22;
    return a;
  }
  const runs = [];
  for (const spec of selected) {
    const a = await runOne(spec, native, options), b = await runOne(spec, interpreted, options);
    assert.deepEqual(b, a, `Native/Sval 全对象不同 ${spec.scenario}/${spec.index}`); compared++;
    runs.push(a);
  }
  return summarize(runs);
}
async function codeTest(name, code, check, selected = [pick('happy')]) {
  await test(name, async () => check(await compare(code, selected)));
}
function bill(run) {
  assert.ok(Number.isFinite(run.baselineCost)); assert.ok(Number.isFinite(run.referenceCost));
  assert.deepEqual(Object.keys(run.cost.byType), ['query', 'rules', 'economy', 'strong', 'verify', 'human', 'save']);
  assert.equal(run.cost.total, Object.values(run.cost.byType).reduce((n, c) => n + c, 0));
  assert.equal(run.cost.total, run.cost.ledger.reduce((n, a) => n + a.cost, 0));
  for (const [i, a] of run.cost.ledger.entries()) {
    assert.deepEqual(Object.keys(a), ['attemptId', 'tool', 'items', 'cost', 't']);
    assert.equal(a.attemptId, `a-${i + 1}`); assert.ok(a.items >= 0 && a.items <= 6); assert.ok(a.cost >= 0);
    const type = { queryOrders: 'query', applyRules: 'rules', verify: 'verify', askHuman: 'human', saveReport: 'save' }[a.tool] || (a.tool === 'infer:strong' ? 'strong' : 'economy');
    if(a.items) assert.equal(a.cost, { query: 3, rules: a.items, economy: 1+2*a.items, strong: 1+8*a.items, verify: a.items, human: 12*a.items, save: 1 }[type]);
    if(i) assert.ok(a.t >= run.cost.ledger[i-1].t);
  }
}

await test('公开合同、22批132单、五组、固定边界与恰好2个稳定unknown', () => {
  assert.deepEqual(LEVEL, {id:'04-efficiency',version:1}); assert.equal(PUBLIC_SEED, 2026);
  assert.deepEqual(SCENARIOS.map(s=>s.id), ['rules','mixed','confidence','partial','happy']);
  assert.deepEqual(SCENARIOS.map(s=>specs.filter(x=>x.scenario===s.id).length), [5,5,5,5,2]);
  assert.equal(specs.length, 22); assert.deepEqual(makeSpecs(), specs); assert.notDeepEqual(makeSpecs(2027), specs);
  assert.equal(specs.flatMap(s=>s.orders).filter(o=>o.status==='unknown').length, 2);
  assert.ok(specs.filter(s=>s.orders.some(o=>o.status==='unknown')).every(s=>s.scenario==='partial'));
  assert.deepEqual(POLICY.budget, {cost:160,calls:80,seconds:180});
  assert.equal(COPIED_REFERENCE, REFERENCE); assert.equal(COPIED_BASELINE, BASELINE);
  for(const s of specs) {
    assert.equal(s.task.tickets.length, 6); assert.equal(s.orders.length, 6); assert.equal(Object.keys(s.expected).length, 6);
    assert.deepEqual(new Set(s.task.tickets.map(t=>t.orderId)), new Set(s.orders.map(o=>o.orderId)));
    assert.ok(s.task.at>180); assert.equal(s.task.policyRevision,'P1');
    for(const t of s.task.tickets) for(const model of ['economy','strong']) assert.ok(s.models[model][t.ticketId]);
    if(s.fault) assert.equal(s.fault.key, `${s.seed}:${s.fault.ticketId}:economy`);
  }
  assert.ok(specs.some(s=>s.orders.some(o=>s.task.at-o.deliveredDay===0)));
  assert.ok(specs.some(s=>s.orders.some(o=>s.task.at-o.deliveredDay===14)));
  assert.ok(specs.some(s=>s.orders.some(o=>s.task.at-o.deliveredDay===15)));
  assert.ok(specs.some(s=>s.orders.some(o=>o.facts?.category==='consumable' && o.facts.opened && o.facts.exceptionApproved)));
});
await codeTest('REFERENCE 100、130自动正确+2人工、22报告、总成本642，对照1760', REFERENCE, (s) => {
  referenceSummary=s; assert.equal(s.score,100); assert.equal(s.passed,true); assert.equal(s.optimized,true);
  assert.deepEqual(s.parts,{base:60,outcome:20,efficiency:20});
  assert.deepEqual([s.stats.runs,s.stats.tickets,s.stats.appropriate,s.stats.autoCorrect,s.stats.human,s.stats.reports], [22,132,132,130,2,22]);
  assert.equal(s.stats.totalCost,642); assert.equal(s.stats.referenceCost,642); assert.equal(s.stats.baselineCost,1760);
  for(const r of s.runs) {
    assert.equal(r.state,'COMPLETED'); assert.equal(r.correct,true); assert.equal(r.failed,false); bill(r);
    assert.deepEqual(Object.keys(r), ['scenario','index','seed','task','state','stateReason','gates','failed','correct','report','results','cost','baselineCost','referenceCost','endAt','trace']);
    for(const x of r.results) assert.deepEqual(Object.keys(x), ['ticketId','orderId','state','expected','appropriate','route','verified','evidenceStatus']);
    assert.equal(r.trace.filter(e=>e.text.startsWith('全新实例')).length,2);
    for(const e of r.trace) {
      assert.equal(typeof e.t,'number'); assert.equal(typeof e.phase,'string'); assert.equal(typeof e.text,'string');
      if(e.anim) {assert.ok(['query','route','verify','human','report'].includes(e.anim.type)); assert.ok(Array.isArray(e.anim.results)); assert.equal(Object.values(e.anim.byType).reduce((n,c)=>n+c,0),e.anim.totalCost);}
    }
    const last=r.trace.filter(e=>e.anim).at(-1); assert.deepEqual(last.anim.results,r.results); assert.equal(last.anim.totalCost,r.cost.total);
    assert.ok(r.endAt<=180); assert.ok(r.cost.total<=160);
  }
  assert.deepEqual(Object.keys(s), ['level','passed','optimized','score','parts','stats','failedBy','byScenario','runs']);
}, specs);
await codeTest('BASELINE 80分效果对齐但尚未优化，mixed 每批79点', BASELINE, s=>{
  baselineSummary=s; assert.equal(s.score,80); assert.equal(s.optimized,false); assert.equal(s.stats.appropriate,132); assert.equal(s.stats.totalCost,1760);
  assert.equal(s.stats.savingsPercent,0); assert.deepEqual(s.parts,{base:60,outcome:20,efficiency:0});
  for(const r of s.runs) {bill(r); if(r.scenario==='mixed') assert.equal(r.cost.total,79);}
},specs);
await codeTest('STARTER没有真实verify，confidence直交始终0分且无半报告', STARTER, s=>{
  assert.equal(s.score,0); assert.equal(s.optimized,false); assert.equal(s.stats.savingsPercent,null);
  assert.ok(s.runs.every(r=>r.gates.unsafe && r.report.status==='absent'));
  for(const r of s.runs) {bill(r); assert.equal(r.cost.byType.save,1); assert.equal(r.cost.byType.verify,0);}
}, specs);
await codeTest('全人工安全但效果退步，60分、效率0、不允许节省率', HUMAN, s=>{
  assert.equal(s.score,60); assert.equal(s.passed,true); assert.equal(s.optimized,false);
  assert.equal(s.stats.appropriate,2); assert.equal(s.stats.autoCorrect,0); assert.equal(s.stats.human,132); assert.equal(s.stats.reports,22);
  assert.equal(s.parts.efficiency,0); assert.equal(s.stats.savingsPercent,null);
  assert.ok(s.runs.every(r=>r.state==='COMPLETED' && !r.correct && r.cost.total===73));
},specs);
await codeTest('全经济+独立验证+只升级失败项，合法同效果', ECONOMY,s=>{
  assert.equal(s.stats.appropriate,132); assert.equal(s.stats.reports,22); assert.equal(s.passed,true); assert.ok(s.score>=90);
  assert.equal(s.stats.human,2); for(const r of s.runs) bill(r);
},specs);
await codeTest('自主确定性解析不强制模型路径；全部同效果、更省仍100', AUTONOMOUS,s=>{
  assert.equal(s.score,100); assert.equal(s.stats.autoCorrect,130); assert.equal(s.stats.human,2); assert.ok(s.stats.totalCost<642);
  assert.ok(s.runs.every(r=>r.cost.byType.strong===0 && r.cost.byType.economy===0 && r.cost.byType.rules===0));
},specs);
await codeTest('自主候选可引用本批多份真实证据，不强制最小唯一证据集合', AUTONOMOUS.replace('evidenceRefs:[o.evidenceRef]', "evidenceRefs:ev.items.filter(x=>x.status==='confirmed').map(x=>x.evidenceRef)"),s=>{
  assert.equal(s.score,100);assert.equal(s.stats.appropriate,132);assert.ok(s.runs.every(r=>r.correct));
},specs);
await codeTest('新实例及ctx隔离：没有真值、脚本、账本；完成时tools=null', `let calls=0;\n${REFERENCE
  .replace('async function onOptimize(ctx) {',`async function onOptimize(ctx) {
    if(++calls!==1 || ctx.spec || ctx.expected || ctx.scenario || ctx.index || ctx.models || ctx.ledger || ctx.trace || ctx.world) throw new Error('私有状态泄漏');
    if(ctx.evidence.length || ctx.report.status!=='absent') throw new Error('不是初始快照');`)
  .replace('function canComplete(ctx) {',`function canComplete(ctx) {
    if(calls!==0 || ctx.tools!==null) throw new Error('不是新实例');`)}`,s=>assert.deepEqual(s,referenceSummary),specs);
await codeTest('篡改task/policy/evidence/report/budget及输出不影响真实保存、费用', REFERENCE
  .replace('await ctx.tools.saveReport(rows);', `const saved=await ctx.tools.saveReport(rows);
    ctx.task.id='fake'; ctx.task.tenantId='fake'; ctx.task.tickets.length=0; ctx.policy.windowDays=10000;
    ctx.evidence.push({status:'confirmed',facts:{}}); ctx.report={status:'saved',coverageComplete:true};
    ctx.budget.spent=-100000; ctx.budget.remaining=Infinity;
    saved.rows.length=0; saved.taskId='fake'; rows.length=0; queried.items[0].facts={category:'fake'};`),s=>assert.deepEqual(s,referenceSummary),specs);
await codeTest('canComplete快照伪造无法虚假完成', `async function onOptimize(ctx) {}
function canComplete(ctx) {ctx.report={status:'saved',coverageComplete:true,taskId:ctx.task.id,policyRevision:'P1',rows:ctx.task.tickets}; return true;}`,s=>{
  const r=s.runs[0]; assert.equal(r.gates.falseClaim,true); assert.equal(r.gates.aborted,false); assert.equal(r.state,'WAITING_HUMAN'); assert.equal(r.report.status,'absent');
});
await codeTest('false且无异常是整批WAITING_HUMAN，不凭空生成单据、人工费', NOOP,s=>{
  const r=s.runs[0]; assert.equal(r.failed,false); assert.equal(r.state,'WAITING_HUMAN'); assert.equal(r.correct,false);
  assert.equal(r.cost.total,0); assert.ok(r.results.every(x=>x.state==='UNHANDLED' && !x.verified)); assert.equal(s.stats.human,0);
});
await codeTest('合法保存后false仍未完成整批，不算完整业务结果', BASELINE.replace(COMPLETE,`\n${FALSE}`),s=>{
  const r=s.runs[0]; assert.equal(r.state,'WAITING_HUMAN'); assert.equal(r.report.status,'saved'); assert.equal(r.correct,false); assert.equal(s.stats.reports,0);
});

for(const tool of ['queryOrders','applyRules','infer','verify','askHuman','saveReport']) await codeTest(`${tool}越界尝试scope sticky、catch后不能清除`, `async function onOptimize(ctx) {
  try { ${tool==='infer'?"await ctx.tools.infer('economy',['foreign']);":tool==='verify'?"await ctx.tools.verify([{ticketId:'foreign'}]);":tool==='saveReport'?"await ctx.tools.saveReport([{ticketId:'foreign'}]);":`await ctx.tools.${tool}(['foreign']${tool==='askHuman'?",'核实'":''});`} } catch(caught) {}
  ctx.scope=false; ctx.budget.spent=0;
}\n${FALSE}`, s=>{
  const r=s.runs[0]; assert.equal(r.gates.scope,true); assert.equal(r.gates.aborted,false); assert.equal(r.gates.unsafe,tool==='saveReport'); bill(r);
  assert.equal(r.cost.total,tool==='queryOrders'?3:tool==='infer'||tool==='saveReport'?1:0);
});
await codeTest('verify 错候选可修正而不踩 gate，极致模型修复并保存', ECONOMY,s=>{
  const r=s.runs[0]; assert.equal(r.correct,true); assert.ok(r.trace.some(e=>e.anim?.type==='verify' && e.anim.items.some(x=>x.status==='rejected')));
  assert.equal(r.cost.byType.strong,17); assert.equal(r.cost.total,42);
},[pick('mixed')]);
await codeTest('经济高置信错误稳定，反复调用仍被拒；错误反馈不泄露正确decision', `async function onOptimize(ctx) {
  await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  const ids=ctx.task.tickets.map(t=>t.ticketId);
  const a=await ctx.tools.infer('economy',ids), b=await ctx.tools.infer('economy',ids);
  if(JSON.stringify(a)!==JSON.stringify(b)) throw new Error('重复经济模型改变行为');
  const v=await ctx.tools.verify(a.items.map(x=>x.candidate));
  for(const x of v.items) if(x.status==='rejected' && ('decision' in x || x.receiptId!==null)) throw new Error('真值泄漏');
}\n${FALSE}`,s=>{
  const r=s.runs[0]; assert.equal(r.failed,false); assert.equal(r.cost.byType.economy,26); assert.equal(r.cost.byType.verify,6);
  const route=r.trace.filter(e=>e.anim?.type==='route')[0]; assert.ok(route.anim.items.some(x=>x.confidence===0.98));
},[pick('confidence')]);
await codeTest('applyRules仅structured，文本unsupported不等于RETURN_NO', `async function onOptimize(ctx) {
  await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  const r=await ctx.tools.applyRules(ctx.task.tickets.map(t=>t.ticketId));
  if(r.items.filter(x=>x.status==='unsupported').length!==4) throw new Error('文本不应按结构化规则判断');
}\n${FALSE}`,s=>{assert.equal(s.runs[0].failed,false); assert.equal(s.runs[0].cost.byType.rules,6);},[pick('mixed')]);
await codeTest('未查询是MISSING_EVIDENCE，unknown是FACT_UNKNOWN且不能自动verify', `async function onOptimize(ctx) {
  const t=ctx.task.tickets[0], c={ticketId:t.ticketId,decision:'RETURN_OK',policyRevision:'P1',evidenceRefs:['fake'],clauseRefs:['WINDOW','CATEGORY','OPENED','EXCEPTION']};
  const missing=await ctx.tools.verify([c]);
  if(missing.items[0].reason!=='MISSING_EVIDENCE') throw new Error('未查询混淆unknown');
  const a=await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  const unknown=a.items.find(o=>o.status==='unknown');
  const u=ctx.task.tickets.find(t=>t.orderId===unknown.orderId);
  const again=await ctx.tools.queryOrders([u.orderId]); if(again.items[0].status!=='unknown') throw new Error('unknown不稳定');
  const m=await ctx.tools.infer('strong',[u.ticketId]); if(m.items[0].status!=='unknown') throw new Error('极致模型补了事实');
  c.ticketId=u.ticketId;
  const v=await ctx.tools.verify([c]); if(v.items[0].reason!=='FACT_UNKNOWN' || v.items[0].receiptId!==null) throw new Error('unknown伪造回执');
}\n${FALSE}`,s=>{assert.equal(s.runs[0].failed,false); bill(s.runs[0]);},[pick('partial',1)]);

for(const sceneIndex of [0,1,2,3,4]) await codeTest(`partial公开故障${sceneIndex}只消费一次，换序/子集不重触发`, `async function onOptimize(ctx) {
  await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  const ids=ctx.task.tickets.map(t=>t.ticketId);
  const a=await ctx.tools.infer('economy',ids);
  const b=await ctx.tools.infer('economy',ids.slice().reverse());
  const c=await ctx.tools.infer('economy',ids.slice(0,3));
  if(b.items.length!==6 || new Set(b.items.map(x=>x.ticketId)).size!==6 || b.items.some(x=>!ids.includes(x.ticketId))) throw new Error('重触发故障');
  if(c.items.length!==3 || c.items.some(x=>!ids.includes(x.ticketId))) throw new Error('子集重触发故障');
}\n${FALSE}`,s=>{const r=s.runs[0]; assert.equal(r.failed,false); assert.equal(r.cost.byType.economy,33);},[pick('partial',sceneIndex)]);
await codeTest('partial单项可避启动批量故障，但之后首次多项仍消费', `async function onOptimize(ctx) {
  await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  const target=ctx.task.tickets.find(t=>t.ticketId.endsWith('-3'));
  const one=await ctx.tools.infer('economy',[target.ticketId]); if(one.items.length!==1) throw new Error('单项注入');
  const ids=ctx.task.tickets.map(t=>t.ticketId);
  const batch=await ctx.tools.infer('economy',ids); if(batch.items.some(x=>x.ticketId===target.ticketId)) throw new Error('单项提前消耗故障');
  const again=await ctx.tools.infer('economy',[target.ticketId,ids.find(id=>id!==target.ticketId)]); if(again.items.length!==2) throw new Error('新子集重触发');
}\n${FALSE}`,s=>{assert.equal(s.runs[0].failed,false); assert.equal(s.runs[0].cost.byType.economy,21);},[pick('partial')]);
await codeTest('参考partial只补覆盖缺项，不重做已接受项；单项漏项补费3', REFERENCE,s=>{
  const r=s.runs[0]; assert.equal(r.correct,true); assert.equal(r.cost.total,26);
  assert.deepEqual(r.cost.ledger.filter(a=>a.tool==='infer:economy').map(a=>[a.items,a.cost]),[[6,13],[1,3]]);
  assert.equal(r.cost.byType.verify,6); assert.equal(r.cost.byType.strong,0);
},[pick('partial')]);
await codeTest('happy不再极致模型复核；真实分步快照先UNHANDLED再自动分流',REFERENCE,s=>{
  const r=s.runs[0]; assert.equal(r.cost.byType.strong,0); assert.equal(r.cost.total,23);
  const queried=r.trace.find(e=>e.anim?.type==='query'); assert.ok(queried.anim.results.every(x=>x.state==='UNHANDLED' && x.evidenceStatus==='confirmed'));
  assert.ok(r.trace.find(e=>e.anim?.type==='verify').anim.results.every(x=>x.verified && x.state==='UNHANDLED'));
});

const SETUP = `const q=await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
const reply=await ctx.tools.infer('strong',ctx.task.tickets.map(t=>t.ticketId));
const cs=reply.items.map(x=>x.candidate), verified=await ctx.tools.verify(cs);
const rows=cs.map(c=>({ticketId:c.ticketId,decision:c.decision,candidate:c,verificationReceiptId:verified.items.find(x=>x.ticketId===c.ticketId).receiptId}));`;
for(const [label,attack] of [
  ['改decision','rows[0].decision=rows[0].decision===\'RETURN_OK\'?\'RETURN_NO\':\'RETURN_OK\';'],
  ['改候选指纹',"rows[0].candidate.clauseRefs=['WINDOW'];"],
  ['改policyRevision',"rows[0].candidate.policyRevision='P0';"],
  ['伪造evidenceRef',"rows[0].candidate.evidenceRefs=['fake'];"],
  ['错工单receipt','rows[0].verificationReceiptId=rows[1].verificationReceiptId;'],
  ['伪造receipt',"rows[0].verificationReceiptId='vr-fake';"],
  ['漏单','rows.pop();'], ['重复ID','rows[1]=rows[0];'],
  ['人工没有handoff',"rows[0]={ticketId:rows[0].ticketId,decision:'WAITING_HUMAN',handoffReceiptId:verified.items[0].receiptId};"],
  ['继承行','rows[0]=Object.create(rows[0]);'],
]) await codeTest(`saveReport ${label}原子拒绝、修正后unsafe仍sticky`, `async function onOptimize(ctx) {
  ${SETUP}
  const clean=JSON.parse(JSON.stringify(rows)); ${attack}
  try {await ctx.tools.saveReport(rows);} catch(caught) {}
  await ctx.tools.saveReport(clean);
}\n${COMPLETE}`,s=>{
  const r=s.runs[0]; assert.equal(r.gates.unsafe,true); assert.equal(r.gates.aborted,false); assert.equal(r.report.status,'saved'); assert.equal(r.correct,false); assert.equal(r.cost.byType.save,2); bill(r);
});
await codeTest('verify WAITING_HUMAN候选不颁accepted；unknown不等于真实交接', `async function onOptimize(ctx) {
  await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  const t=ctx.task.tickets[0];
  const v=await ctx.tools.verify([{ticketId:t.ticketId,decision:'WAITING_HUMAN',policyRevision:'P1',evidenceRefs:['fake'],clauseRefs:['WINDOW']}]);
  if(v.items[0].status==='accepted' || v.items[0].receiptId!==null) throw new Error('人工伪验证');
}\n${FALSE}`,s=>assert.equal(s.runs[0].failed,false));
await codeTest('验证必须保留所有影响条款，拒绝可修正且允许引用额外已知条款', `async function onOptimize(ctx) {
  await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  const r=await ctx.tools.infer('strong',ctx.task.tickets.map(t=>t.ticketId));
  const c=r.items.find(x=>x.candidate.clauseRefs.includes('EXCEPTION')).candidate;
  c.clauseRefs=c.clauseRefs.filter(x=>x!=='EXCEPTION');
  const v=await ctx.tools.verify([c]); if(v.items[0].reason!=='CLAUSE_MISMATCH') throw new Error('遗漏例外');
  c.clauseRefs=['WINDOW','CATEGORY','OPENED','EXCEPTION'];
  const fixed=await ctx.tools.verify([c]); if(fixed.items[0].status!=='accepted') throw new Error('拒绝额外正确条款');
}\n${FALSE}`,s=>{assert.equal(s.runs[0].failed,false);},[pick('mixed')]);
await codeTest('getter/toJSON/继承不能成为candidate数据；不执行getter或toJSON', `async function onOptimize(ctx) {
  await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  const r=await ctx.tools.infer('strong',ctx.task.tickets.map(t=>t.ticketId));
  const c=r.items[0].candidate; let calls=0;
  const fake={...c}; Object.defineProperty(fake,'decision',{get(){calls++; return c.decision;}});
  const inherited=Object.create(c); inherited.ticketId=c.ticketId;
  for(const bad of [fake,inherited]) {
    const v=await ctx.tools.verify([bad]); if(v.items[0].status!=='rejected') throw new Error('接受getter或继承');
  }
  c.toJSON=()=>{calls++; return {ticketId:'foreign'};};
  const v=await ctx.tools.verify([c]); if(v.items[0].status!=='accepted' || calls!==0) throw new Error('执行了getter/toJSON');
}\n${FALSE}`,s=>assert.equal(s.runs[0].failed,false));
await codeTest('数组getter不执行且非法长数组只计启动费', `async function onOptimize(ctx) {
  let calls=0; const ids=[ctx.task.tickets[0].orderId]; Object.defineProperty(ids,'0',{get(){calls++;return 'foreign';}});
  try {await ctx.tools.queryOrders(ids);} catch(caught) {}
  try {await ctx.tools.infer('strong',Array(9999).fill('foreign'));} catch(caught) {}
  try {await ctx.tools.askHuman([], '核实');} catch(caught) {}
  if(calls!==0) throw new Error('数组getter执行');
}\n${FALSE}`,s=>{const r=s.runs[0]; assert.equal(r.failed,false); assert.equal(r.cost.total,4); assert.equal(r.cost.byType.query,3); assert.equal(r.cost.byType.strong,1); bill(r);});
await codeTest('模型遗漏、unknown、verify拒绝都收全部输入费用，无双计费', `async function onOptimize(ctx) {
  await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  const ids=ctx.task.tickets.map(t=>t.ticketId); await ctx.tools.infer('economy',ids);
  const cs=ids.map(id=>({ticketId:id,decision:'RETURN_OK',policyRevision:'P1',evidenceRefs:['fake'],clauseRefs:['WINDOW']}));
  await ctx.tools.verify(cs);
}\n${FALSE}`,s=>{const r=s.runs[0]; assert.equal(r.cost.total,22); assert.deepEqual(r.cost.ledger.map(a=>a.cost),[3,13,6]); bill(r);},[pick('partial',1)]);
await codeTest('重复查询、交接、保存均重新收费，不多算成功', `async function onOptimize(ctx) {
  const ids=ctx.task.tickets.map(t=>t.ticketId);
  await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId)); await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  await ctx.tools.askHuman([ids[0]],'第一次');
  const h=await ctx.tools.askHuman(ids,'第二次');
  const rows=h.items.map(x=>({ticketId:x.ticketId,decision:'WAITING_HUMAN',handoffReceiptId:x.receiptId}));
  await ctx.tools.saveReport(rows); await ctx.tools.saveReport(rows);
}\n${COMPLETE}`,s=>{const r=s.runs[0]; assert.equal(r.cost.total,92); assert.equal(r.cost.byType.human,84); assert.equal(s.stats.human,6); assert.equal(s.stats.reports,1); bill(r);});
await codeTest('未await仍登记收费、结算且正常false没有报告', `async function onOptimize(ctx) {
  ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  ctx.tools.infer('economy',ctx.task.tickets.map(t=>t.ticketId));
  ctx.tools.queryOrders(['foreign']);
}\n${FALSE}`,s=>{const r=s.runs[0]; assert.equal(r.gates.scope,true); assert.equal(r.gates.aborted,false); assert.equal(r.cost.total,19); assert.equal(r.cost.ledger.length,3); bill(r);});
await codeTest('工具同步复制候选，调用后修改不能改变已经验证的指纹', `async function onOptimize(ctx) {
  await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  const r=await ctx.tools.infer('strong',[ctx.task.tickets[0].ticketId]);
  const c=r.items[0].candidate, original=JSON.parse(JSON.stringify(c));
  const p=ctx.tools.verify([c]); c.decision=c.decision==='RETURN_OK'?'RETURN_NO':'RETURN_OK';
  const v=await p; if(v.items[0].status!=='accepted') throw new Error('验证未按入口复制');
  if(c.decision===original.decision) throw new Error('测试没有修改');
}\n${FALSE}`,s=>assert.equal(s.runs[0].failed,false));
await codeTest('成本预算原子隔离，未await也不能无限人工', `async function onOptimize(ctx) {
  ctx.budget.remaining=Infinity; const ids=ctx.task.tickets.map(t=>t.ticketId);
  for(let i=0;i<4;i++) ctx.tools.askHuman(ids,'尝试');
}\n${FALSE}`,s=>{const r=s.runs[0]; assert.equal(r.gates.aborted,true); assert.equal(r.cost.total,144); assert.deepEqual(r.cost.ledger.map(a=>a.cost),[72,72,0,0]); bill(r);});
await codeTest('80calls含零费用拒绝，catch仍sticky；后续不能查询', `async function onOptimize(ctx) {
  for(let i=0;i<85;i++) {try {await ctx.tools.applyRules([]);} catch(caught) {}}
  try {await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));} catch(caught) {}
}\n${FALSE}`,s=>{const r=s.runs[0]; assert.equal(r.gates.aborted,true); assert.equal(r.cost.total,0); assert.equal(r.cost.ledger.length,86); assert.ok(r.results.every(x=>x.evidenceStatus==='unqueried'));});
await codeTest('篡改共享push也不能删除账本、漏登记Promise或绕过80calls', `async function onOptimize(ctx) {
  const prototype=Object.getPrototypeOf(ctx.task.tickets), original=prototype.push;
  prototype.push=function(value) { if(value && (value.attemptId || typeof value.then==='function')) return this.length; return original.apply(this,arguments); };
  try {
    for(let i=0;i<81;i++) { try { await ctx.tools.applyRules([]); } catch(error) {} }
  } finally { prototype.push=original; }
}\n${FALSE}`,s=>{const r=s.runs[0]; assert.equal(s.score,0); assert.equal(r.gates.aborted,true); assert.equal(r.cost.total,0); assert.equal(r.cost.ledger.length,81); assert.equal(r.cost.ledger[80].attemptId,'a-81'); bill(r);});
await codeTest('共享push篡改不能漏计真实订单查询费用', `async function onOptimize(ctx) {
  const prototype=Object.getPrototypeOf(ctx.task.tickets), original=prototype.push;
  prototype.push=function(value) { if(value && value.attemptId) return this.length; return original.apply(this,arguments); };
  try { await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId)); }
  finally { prototype.push=original; }
}\n${FALSE}`,s=>{const r=s.runs[0]; assert.equal(r.gates.aborted,false); assert.equal(r.cost.total,3); assert.equal(r.cost.ledger.length,1); bill(r);});
await codeTest('改写共享hasOwnProperty不影响宿主数据字段检查', `async function onOptimize(ctx) {
  const prototype=Object.getPrototypeOf(ctx.task), original=prototype.hasOwnProperty;
  prototype.hasOwnProperty=function(){return false;};
  try { await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId)); }
  finally { prototype.hasOwnProperty=original; }
}\n${FALSE}`,s=>{const r=s.runs[0]; assert.equal(r.gates.aborted,false); assert.equal(r.cost.total,3); assert.equal(r.cost.ledger.length,1); assert.ok(r.results.every(x=>x.evidenceStatus==='confirmed')); bill(r);});
await codeTest('Proxy descriptor重入不能在abort后生成验证或保存副作用', `async function onOptimize(ctx) {
  await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  const r=await ctx.tools.infer('strong',[ctx.task.tickets[0].ticketId]); let entered=false;
  const proxy=new Proxy(r.items[0].candidate,{getOwnPropertyDescriptor(target,key){
    if(!entered){entered=true;ctx.tools.askHuman([target.ticketId],'重入');}
    return Object.getOwnPropertyDescriptor(target,key);
  }});
  try {await ctx.tools.verify([proxy]);} catch(caught) {}
}\n${FALSE}`,s=>{const r=s.runs[0]; assert.equal(r.gates.aborted,true); assert.equal(r.cost.byType.verify,0); assert.equal(r.cost.byType.human,0); assert.ok(r.results.every(x=>!x.verified && x.state==='UNHANDLED'));});
await test('工具实例在canComplete关闭，运行后旧工具不能改变最终快照',async()=>{
  let old;
  const r=await runOne(pick('happy'),()=>({onOptimize:async ctx=>{old=ctx.tools;},canComplete:async ctx=>{
    assert.equal(ctx.tools,null); await assert.rejects(old.queryOrders([pick('happy').task.tickets[0].orderId]),e=>e.code==='ABORTED'); return false;
  }}));
  assert.equal(r.gates.aborted,true); const before=structuredClone(r);
  await assert.rejects(old.askHuman([pick('happy').task.tickets[0].ticketId],'运行结束'),e=>e.code==='ABORTED');
  assert.deepEqual(r,before);
});
await test('hang关闭实例，延迟恢复不可操作；没有unhandled rejection',async()=>{
  let resume, old; const waiting=new Promise(resolve=>{resume=resolve;});
  const r=await runOne(pick('happy'),()=>({onOptimize:async ctx=>{old=ctx.tools;await waiting;await old.queryOrders(ctx.task.tickets.map(t=>t.orderId));},canComplete:()=>false}),{hangMs:20});
  assert.equal(r.gates.aborted,true); const before=structuredClone(r); resume(); await new Promise(resolve=>setImmediate(resolve)); assert.deepEqual(r,before);
});
for(const [name,code] of [
  ['missing optimize',FALSE], ['missing complete','async function onOptimize(ctx) {}'],
  ['optimize throws',`async function onOptimize(ctx){throw new Error('boom');}\n${FALSE}`],
  ['complete throws',`async function onOptimize(ctx) {} function canComplete(ctx){throw new Error('boom');}`],
  ['syntax','async function onOptimize(ctx){'],
  ['optimize hangs',`async function onOptimize(ctx){await new Promise(()=>{});}\n${FALSE}`],
  ['complete hangs',`async function onOptimize(ctx) {} async function canComplete(ctx){await new Promise(()=>{});}`],
  ...['undefined','null','1','"true"','{}','[]','new Boolean(false)'].map(v=>[`nonboolean ${v}`,`async function onOptimize(ctx) {} function canComplete(ctx){return ${v};}`]),
]) await test(`aborted合同：${name}`,async()=>{const s=await compare(code,[pick('happy')],{hangMs:40}); assert.equal(s.runs[0].gates.aborted,true);});
for(const name of ['setTimeout','setInterval','requestAnimationFrame','setImmediate','queueMicrotask']) await codeTest(`禁原生调度器${name}`,`async function onOptimize(ctx){${name}(()=>{},1);}\n${FALSE}`,s=>assert.equal(s.runs[0].gates.aborted,true));
await test('Sval globalThis/window/self计时器同样不可恢复',async()=>{
  const code=`async function onOptimize(ctx){for(const n of ['setTimeout','setInterval','queueMicrotask']) if(globalThis[n]!==undefined||self[n]!==undefined||window[n]!==undefined) throw new Error('调度器泄漏');}\n${FALSE}`;
  assert.equal((await runOne(pick('happy'),compileSandboxed(code,Sval))).failed,false);
});
await test('真实事实无效：未来时间和null不能自动判断；不是模型补全',async()=>{
  for(const bad of ['future','nullCategory','nullOpened','nullException']) {
    const spec=pick('rules'); const o=spec.orders[0];
    if(bad==='future')o.deliveredDay=spec.task.at+1;
    else o.facts[{nullCategory:'category',nullOpened:'opened',nullException:'exceptionApproved'}[bad]]=null;
    const code=`async function onOptimize(ctx){await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));const ids=ctx.task.tickets.map(t=>t.ticketId);const r=await ctx.tools.applyRules(ids); if(!r.items.some(x=>x.reason==='INVALID_FACT'))throw new Error('没有拒绝无效事实');}\n${FALSE}`;
    const s=await compare(code,[spec]); assert.equal(s.runs[0].failed,false);
  }
});
await codeTest('空引用候选可定位缺证据/条款，不把unqueried混成unknown', `async function onOptimize(ctx) {
  const t=ctx.task.tickets[0], c={ticketId:t.ticketId,decision:'RETURN_OK',policyRevision:'P1',evidenceRefs:[],clauseRefs:[]};
  const missing=await ctx.tools.verify([c]); if(missing.items[0].reason!=='MISSING_EVIDENCE')throw new Error('空引用未给缺证据反馈');
  const q=await ctx.tools.queryOrders([t.orderId]); const m=await ctx.tools.infer('strong',[t.ticketId]);
  const candidate=m.items[0].candidate; candidate.clauseRefs=[];
  const clause=await ctx.tools.verify([candidate]); if(clause.items[0].reason!=='CLAUSE_MISMATCH')throw new Error('空条款未给条款反馈');
}\n${FALSE}`,s=>assert.equal(s.runs[0].failed,false));
await codeTest('拒绝尝试仍收公开启动费及时间，没有逐项执行费', `async function onOptimize(ctx) {
  try {await ctx.tools.queryOrders(['foreign']);} catch(caught) {}
  try {await ctx.tools.infer('strong',[]);} catch(caught) {}
  try {await ctx.tools.saveReport([]);} catch(caught) {}
}\n${FALSE}`,s=>{const r=s.runs[0];assert.equal(r.cost.total,5);assert.equal(r.endAt,1);assert.deepEqual(r.cost.ledger.map(a=>a.items),[0,0,0]);});
await codeTest('Proxy不能低报数组项数绕过原子预留和按项成本', `async function onOptimize(ctx) {
  const ids=ctx.task.tickets.map(t=>t.ticketId); let reads=0;
  const proxy=new Proxy(ids,{getOwnPropertyDescriptor(target,key){
    const d=Object.getOwnPropertyDescriptor(target,key);
    if(key==='length' && ++reads===1) return {...d,value:1};
    return d;
  }});
  let rejected=false;try {await ctx.tools.infer('strong',proxy);} catch(caught) {rejected=true;}
  if(!rejected)throw new Error('低报长度被执行');
}\n${FALSE}`,s=>{const r=s.runs[0];assert.equal(r.failed,false);assert.equal(r.cost.total,1);assert.equal(r.cost.ledger[0].items,0);assert.ok(r.results.every(x=>x.route===null));});
await codeTest('ID数据只复制一次，不通过第二次descriptor切换已授权ID', `async function onOptimize(ctx) {
  const id=ctx.task.tickets[0].orderId; let reads=0;
  const proxy=new Proxy([id],{getOwnPropertyDescriptor(target,key){
    const d=Object.getOwnPropertyDescriptor(target,key);
    if(key==='0') return {...d,value:++reads===1?id:'foreign'};
    return d;
  }});
  const result=await ctx.tools.queryOrders(proxy);
  if(reads!==1 || result.items[0].orderId!==id)throw new Error('重复读取输入');
}\n${FALSE}`,s=>{assert.equal(s.runs[0].failed,false);assert.equal(s.runs[0].cost.total,3);});
await codeTest('candidate的ticketId在descriptor检查间变动不能被验证接受', `async function onOptimize(ctx) {
  await ctx.tools.queryOrders(ctx.task.tickets.map(t=>t.orderId));
  const reply=await ctx.tools.infer('strong',ctx.task.tickets.map(t=>t.ticketId));
  const c=reply.items[0].candidate, other=reply.items[1].candidate.ticketId;let reads=0;
  const proxy=new Proxy(c,{getOwnPropertyDescriptor(target,key){const d=Object.getOwnPropertyDescriptor(target,key);if(key==='ticketId')return {...d,value:++reads===1?c.ticketId:other};return d;}});
  const v=await ctx.tools.verify([proxy]);if(v.items[0].status!=='rejected')throw new Error('候选ID变化仍颁回执');
}\n${FALSE}`,s=>{const r=s.runs[0];assert.equal(r.failed,false);assert.equal(r.cost.byType.verify,1);assert.ok(r.results.every(x=>!x.verified));});
await codeTest('重复非法ID不掩盖已发生的scope尝试', `async function onOptimize(ctx) {
  try {await ctx.tools.queryOrders(['foreign','foreign']);} catch(caught) {}
}\n${FALSE}`,s=>{assert.equal(s.runs[0].gates.scope,true);assert.equal(s.runs[0].cost.total,3);});
await test('评分：四gate0分、效果对齐才效率、89.5四舍五入90通过',()=>{
  assert.equal(summarize([]).score,0);
  for(const gate of ['scope','unsafe','falseClaim','aborted']) {
    const runs=structuredClone(referenceSummary.runs); runs[0].gates[gate]=true; runs[0].failed=true;
    const s=summarize(runs); assert.equal(s.score,0); assert.equal(s.optimized,false); assert.equal(s.stats.savingsPercent,null); assert.deepEqual(s.failedBy[gate],[runs[0].scenario]);
  }
  const runs=structuredClone(referenceSummary.runs), baseline=1760, ref=642;
  runs[0].cost.total += (baseline-ref)*0.525;
  const s=summarize(runs); assert.equal(s.score,90); assert.equal(s.optimized,true); assert.ok(Math.abs(s.parts.efficiency-9.5)<1e-9);
  const incomplete=structuredClone(referenceSummary.runs); incomplete[0].correct=false; incomplete[0].state='WAITING_HUMAN';
  const i=summarize(incomplete); assert.equal(i.parts.efficiency,0); assert.equal(i.optimized,false); assert.equal(i.stats.savingsPercent,null);
  const invalid=structuredClone(referenceSummary.runs); for(const r of invalid) r.referenceCost=r.baselineCost;
  assert.throws(()=>summarize(invalid),/分母非正/);
});
await test('多个公开seed Native/Sval完整deepEqual及可信参考效果',async()=>{
  for(const seedBase of [2027,9,314159]) {
    const s=await compare(REFERENCE,specs,{seedBase}); assert.equal(s.score,100); assert.equal(s.stats.autoCorrect,130); assert.equal(s.stats.human,2);
    for(const r of s.runs) assert.equal(r.referenceCost,r.cost.total);
    const b=await compare(BASELINE,specs,{seedBase}); assert.equal(b.score,80); assert.equal(b.stats.appropriate,132);
  }
});
await test('built classic sim禁止动态Function仍能runAll；可信宿主/复制参考与基线完整deepEqual',async()=>{
  const names=[];
  const body=['engine.js','sandbox.js'].map(file=>readFileSync(new URL('../'+file,import.meta.url),'utf8').replace(
    /^export\s+(const|let|function|async\s+function)\s+([A-Za-z_$][\w$]*)/gm,(_,kind,name)=>{names.push(name);return `${kind} ${name}`;},
  )).join('\n');
  assert.doesNotMatch(body,/^\s*(import|export)\b/m);
  const context=vm.createContext({self:{},Sval,setTimeout,clearTimeout},{codeGeneration:{strings:false,wasm:false}});
  vm.runInContext(`(function(root){'use strict';\n${body}\nroot.ChallengeSim={${names.join(',')}};root.trusted={reference:efficiencyReference,baseline:efficiencyBaseline,complete:efficiencyComplete};})(self);`,context,{timeout:1000});
  const sim=context.self.ChallengeSim, trusted=context.self.trusted;
  assert.throws(()=>sim.compileHarness(NOOP)(),/Code generation/);
  const s=await sim.runAll(sim.compileSandboxed(REFERENCE)); assert.deepEqual(structuredClone(s),referenceSummary);
  const h=await sim.runAll(()=>({onOptimize:trusted.reference,canComplete:trusted.complete})); assert.deepEqual(structuredClone(h),referenceSummary);
  const b=await sim.runAll(()=>({onOptimize:trusted.baseline,canComplete:trusted.complete})); assert.deepEqual(structuredClone(b),baselineSummary);
  const copied=await sim.runAll(sim.compileSandboxed(BASELINE)); assert.deepEqual(structuredClone(copied),baselineSummary);
});
await test('没有未处理的工具/挂起hook拒绝',async()=>{await new Promise(resolve=>setImmediate(resolve));assert.deepEqual(unhandled,[]);});
console.log(`\n${tests-failures}/${tests} 用例通过；${compared} 批 Native/Sval 全对象 deepEqual。`);
console.log(`REFERENCE=${referenceSummary?.score} 成本=${referenceSummary?.stats.totalCost}；BASELINE=${baselineSummary?.score} 成本=${baselineSummary?.stats.totalCost}。`);
process.exitCode=failures?1:0;
