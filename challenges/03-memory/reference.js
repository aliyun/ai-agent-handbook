// 只供本地验证；不要把参考答案加入 public 构建。
export const REFERENCE = `
function currentProfile(e, request) {
  return e.tenantId === request.tenantId && e.userId === request.userId
    && e.source === "profile" && e.revision === request.profileRevision
    && e.verifiedAt <= request.at && request.at < e.validUntil;
}

export async function onRecall(ctx) {
  const request = ctx.request;
  if (request.override) {
    // 已认证用户只改这一次：不写长期记忆，下一会话恢复长期地址。
    await ctx.tools.useAddress({ address: request.override.address, sourceId: request.override.sourceId });
    return;
  }
  const candidates = ctx.candidates.filter(c => c.kind === "address" && currentProfile(c, request));
  const receipts = [];
  for (const candidate of candidates) receipts.push(await ctx.tools.readMemory(candidate.id));
  if (receipts.length && receipts.every(r => r.address === receipts[0].address)) {
    await ctx.tools.useAddress({ address: receipts[0].address, sourceId: receipts[0].sourceId });
    return;
  }
  const receipt = await ctx.tools.queryProfile();
  if (receipt.status !== "confirmed") {
    await ctx.tools.askHuman("长期地址冲突，权威档案尚不能确认");
    return;
  }
  await ctx.tools.remember(receipt);
  await ctx.tools.useAddress({ address: receipt.address, sourceId: receipt.sourceId });
}

export function canComplete(ctx) {
  const request = ctx.request, selected = ctx.selection;
  if (!selected || (request.override && selected.address !== request.override.address)) return false;
  return ctx.evidence.some(e => {
    if (e.address !== selected.address || e.sourceId !== selected.sourceId
      || e.tenantId !== request.tenantId || e.userId !== request.userId) return false;
    if (e.scope === "request") {
      return !!request.override && e.requestId === request.id
        && e.sourceId === request.override.sourceId && e.address === request.override.address;
    }
    return (e.scope === "memory" || e.scope === "profile") && currentProfile(e, request);
  });
}
`;
