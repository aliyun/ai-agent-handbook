// 页面展示的玩家起始代码：故意忘记持久进度与当前授权。
export const STARTER = `// 第 02 关：任务中断，如何优化？
// 只修改 onResume(ctx) 和 canComplete(ctx)。固定模型不会替你管理持久进度。

export async function onResume(ctx) {
  // 起始版本：重启后从头执行，假设之前什么都没发生。
  const completed = [];
  for (const step of ctx.task.steps) {
    const receipt = await ctx.tools.runStep(step.id);
    completed.push(receipt);
    await ctx.tools.saveCheckpoint({ revision: ctx.task.revision, completed });
  }
}

export function canComplete(ctx) {
  // 起始版本：只要模型说完成，就提交完成。
  return ctx.model.says === "done";
}
`;
