// 玩家打开页面时看到的起始代码（故意有坑）
export const STARTER = `// 第 01 关：Agent 退款超时，如何优化？
// 你只能改这个文件。模型是固定剧本，不会变。
// ctx 的字段和工具请看代码上方「接口速查」。

// 退款请求超时、或实例重启后接手任务时，都会进到这里。
export async function onRefundTimeout(ctx) {
  // 起始版本：超时了就再退一次
  await ctx.tools.refund(ctx.order.id, ctx.order.amount);
}

// 模型说“退款完成了”之后，由这里决定能不能告诉客户。
export function canComplete(ctx) {
  // 起始版本：模型说完成，就算完成
  return ctx.model.says === "done";
}
`;
