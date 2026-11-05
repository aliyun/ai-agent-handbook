// 只供本地测试的参考答案；不应复制进 public 构建。
export const REFERENCE = `
function completeReceipt(receipt, stepId, revision) {
  return !!receipt && receipt.stepId === stepId && receipt.revision === revision
    && receipt.status === "succeeded" && typeof receipt.receiptId === "string"
    && receipt.receiptId.length > 0;
}

export async function onResume(ctx) {
  const task = ctx.task;
  if (!task.publishAllowed || ctx.checkpoint.revision !== task.revision) {
    await ctx.tools.askHuman("任务版本或发布批准已变化，需要重新确认");
    return;
  }
  const completed = ctx.checkpoint.completed.slice();
  for (const receipt of completed) {
    if (!task.steps.some(step => completeReceipt(receipt, step.id, task.revision))) {
      await ctx.tools.askHuman("持久进度的回执不完整");
      return;
    }
  }
  for (const step of task.steps) {
    if (completed.some(receipt => completeReceipt(receipt, step.id, task.revision))) continue;
    const relevant = ctx.attempts.filter(attempt => attempt.stepId === step.id && attempt.revision === task.revision);
    const latest = relevant.length ? relevant[relevant.length - 1] : null;
    let receipt = latest && completeReceipt(latest.result, step.id, task.revision) ? latest.result : null;
    if (!receipt && relevant.some(attempt => attempt.result === null)) {
      const inspected = await ctx.tools.inspectStep(step.id);
      if (inspected.status === "unknown") {
        await ctx.tools.askHuman("尚不能确认 " + step.id + " 的实际结果，不能盲目重做");
        return;
      }
      if (completeReceipt(inspected, step.id, task.revision)) receipt = inspected;
      else if (inspected.status !== "not_found") {
        await ctx.tools.askHuman("权威执行结果不完整");
        return;
      }
    }
    if (ctx.now() >= ctx.deadline) {
      await ctx.tools.askHuman("恢复期限即将耗尽");
      return;
    }
    if (!receipt) receipt = await ctx.tools.runStep(step.id);
    completed.push(receipt);
    await ctx.tools.saveCheckpoint({ revision: task.revision, completed });
  }
}

export function canComplete(ctx) {
  const task = ctx.task;
  return task.publishAllowed === true && ctx.checkpoint.revision === task.revision
    && task.steps.every(step => ctx.checkpoint.completed.some(receipt => completeReceipt(receipt, step.id, task.revision)));
}
`;
