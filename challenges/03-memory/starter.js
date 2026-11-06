// 起点故意只信相似度首条和模型完成声明，等待玩家补上记忆边界。
export const STARTER = `export async function onRecall(ctx) {
  const memory = await ctx.tools.readMemory(ctx.candidates[0].id);
  await ctx.tools.useAddress({ address: memory.address, sourceId: memory.sourceId });
}

export function canComplete(ctx) {
  return ctx.model.says === "done";
}
`;
