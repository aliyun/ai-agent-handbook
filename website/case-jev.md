# Jev 专题：结构化决策的实践

本专题围绕 Agent 工作流中的分类、评分和路由决策，收录 Jev 的原理解析与可复用的实践资料。首篇文章介绍模型定位、三种问题类型、输入输出结构和决策组合方式；案例中的响应数据为示意值，并非实测结果。

<ChapterIndex chapter="jev" />

## 延伸实践

- [官方快速入门](https://docs.typesafe.ai/introduction/quickstart)：从单个判断到一次请求评估多个问题，附 API 调用示例。
- [意图路由](https://docs.typesafe.ai/patterns/intent-routing)：定义互斥意图，并把分类结果交给代码路由。
- [按置信度路由](https://docs.typesafe.ai/patterns/confidence-routing)：按决策风险选择自动执行、补充信息或人工复核。
- [组合评分](https://docs.typesafe.ai/patterns/composite-scoring)：将多个原子判断交给代码聚合。
