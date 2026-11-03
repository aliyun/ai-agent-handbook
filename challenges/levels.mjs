// 关卡目录的唯一来源。筹备中的关卡不生成页面，也不提供进入链接。
// 评分规则变化时升级 version，避免不同规则下的本机成绩混在一起。
export const levels = [
  {
    id: "01-refund-timeout",
    number: "01",
    version: "v1",
    title: "Agent 退款超时，如何优化？",
    description: "退款没有回应，怎样重试才不会多退钱，又能有证据地确认完成？",
    status: "available",
  },
  {
    id: "02-resume",
    number: "02",
    version: "v1",
    title: "断线中断，如何优化？",
    description: "任务中途断线，恢复之后，从哪里继续？",
    status: "planned",
  },
  {
    id: "03-memory",
    number: "03",
    version: "v1",
    title: "记忆错了，如何优化？",
    description: "留下哪些信息，才能帮助 Agent 做对下一步？",
    status: "planned",
  },
  {
    id: "04-efficiency",
    number: "04",
    version: "v1",
    title: "调用成本高，如何优化？",
    description: "减少调用时，怎样守住任务效果？",
    status: "planned",
  },
];
