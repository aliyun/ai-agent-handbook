# 决策模型专题：结构化决策的实践

本专题围绕 Agent 工作流中的分类、评分和路由决策，收录 Jev 等决策模型的原理解析、能力实测与可复用的实践资料。首篇文章介绍模型定位、三种问题类型、输入输出结构和决策组合方式；案例中的响应数据为示意值，并非实测结果。

《决策模型接入高代码框架：开发框架：AgentScope + Jev》介绍 AgentScope Java 的 JEV 接入方式，沿着工具选择、模型路由、执行防护、上下文治理、回答修订与轨迹评估，展示结构化判断如何进入完整任务流程，并提供 Java 与 Spring Boot 接入示例。

《基于Jev 范式决策模型，构建智能工单分诊助手》使用 AgentScope Java 与百炼决策模型，串起 AgentCore 代码包部署、普通与流式调用、运行管理和 Team 协作，介绍如何将分诊判断接入一个可部署的业务应用。

《Jev 模型智能路由实践》介绍怎样通过百炼 System One 把任务判断与阶段胜任度反馈接到模型路由中，并通过公开实验核对成本、交付质量和实际执行。

《日常留在本地，难了再上云：本地 Qwen3.8-27B + d3 决策模型 + 云端 Qwen4-Max》记录将本地 d3 接入 HiRoute 的小规模实测，观察任务难度与阶段胜任度如何影响本地、云端模型的逐轮切换，并说明硬件成本、工具续接和上下文上云的边界。

《决策模型实践：自动化评测》结合评测实验，介绍决策阈值、交叉验证、概率校准和训练损失，并讨论原子 Judge 拆分与风险聚合的工程边界。

《AgenticOps 决策模型的能力实测》从 STAROps 的真实调查轨迹出发，比较 12 个模型在运维与通用决策任务中的准确率、响应时间、答案读出与回退组合，并通过完整 RCA 案例检验不同接入位置的质量与开销。

<ChapterIndex chapter="jev" />

## 延伸实践

- [官方快速入门](https://docs.typesafe.ai/introduction/quickstart)：从单个判断到一次请求评估多个问题，附 API 调用示例。
- [意图路由](https://docs.typesafe.ai/patterns/intent-routing)：定义互斥意图，并把分类结果交给代码路由。
- [按置信度路由](https://docs.typesafe.ai/patterns/confidence-routing)：按决策风险选择自动执行、补充信息或人工复核。
- [组合评分](https://docs.typesafe.ai/patterns/composite-scoring)：将多个原子判断交给代码聚合。
