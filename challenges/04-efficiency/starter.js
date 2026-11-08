// 起始代码故意展示 confidence 直交报告的错误流程，不是保守对照。
export const STARTER = `async function onOptimize(ctx) {
  await ctx.tools.queryOrders(ctx.task.tickets.map(t => t.orderId));
  const reply = await ctx.tools.infer('economy', ctx.task.tickets.map(t => t.ticketId));
  const rows = reply.items.filter(item => item.status === 'candidate' && item.confidence >= 0.9)
    .map(item => ({ticketId: item.ticketId, decision: item.candidate.decision,
      candidate: item.candidate, verificationReceiptId: 'confidence-is-not-a-receipt'}));
  // 错误：没有独立验证；即使猜对也不能用 confidence 代替真实回执。
  await ctx.tools.saveReport(rows);
}
function canComplete(ctx) {
  return ctx.report.status === 'saved' && ctx.report.coverageComplete === true;
}`;
