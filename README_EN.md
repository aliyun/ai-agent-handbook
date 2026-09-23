# AI Agent HandBook

[中文](./README.md) | English

Following the agent lifecycle—from architecture and building to operation, governance, and optimization—we share the experience and lessons we have gained from deploying enterprise agents. If this white paper helps individuals learn or organizations put agents into practice, we would be deeply grateful.

We dedicate this project to everyone contributing to the development of AI.

---

## 1. Background and Structure

In September 2025, we published the [AI-Native Application Architecture White Paper](https://developer.aliyun.com/ebook/8479). It examined the full DevOps lifecycle of AI-native applications—from architecture and technology choices to engineering practice, operations, and optimization—breaking down key concepts and difficult problems while offering possible approaches. As models and agent technologies have advanced rapidly, however, attention has shifted from building agents quickly to three new challenges:

- **Engineering:** Turn probabilistic intelligence into reliable productivity so agents can take on critical tasks.
- **Scaling:** Address stability, security, performance, and cost as agents move from isolated experiments to intelligent infrastructure that can be deployed at scale.
- **Organization:** Move beyond isolated agents and bring them into core business processes as part of an intelligent organization.

Last year's white paper can no longer fully address these needs.

We have therefore reworked its structure. With more up-to-date content, a greater share devoted to real-world practice, and a more community-driven approach, we hope to support enterprise technology selection and internal project planning. By maintaining the white paper as an open-source project, we aim to keep sharing emerging thinking and practical experience in AI-native application architecture.

## 2. Audience and Takeaways

This white paper is primarily for teams building and deploying enterprise agents. It can also support technology selection, architecture reviews, project proposals, and a shared vocabulary across organizations.

| Reader | Recommended sections | What you will gain |
| --- | --- | --- |
| Agent and AI application developers | Building, Runtime, Optimization | Engineering methods for harnesses, context, state, tools, sandboxes, trajectories, and evaluation. |
| Architects and platform engineers | Architecture, Runtime, Governance | An architecture spanning components, platform responsibilities, and the application lifecycle. |
| Technology and engineering leaders | Architecture, Governance, Practice | Criteria for application form, maturity, investment boundaries, and production risk. |
| Product and business leaders | Survey, Architecture, Practice | A way to identify suitable tasks, define human-agent responsibilities, and plan the path beyond pilots. |
| Security, quality, and operations teams | Runtime, Governance, Optimization | Approaches to observation, audit, authorization, release validation, evaluation, and root-cause analysis. |
| Researchers and ecosystem contributors | Entire white paper and Practice | First-hand enterprise problems, reusable abstractions, and open questions for further work. |

By the end, you should be able to:

- Choose the least complex agent architecture sufficient for the business goal, task uncertainty, and risk.
- Distinguish model limitations from harness and systems-engineering problems.
- Design tasks that can advance over time, recover from interruption, and finish based on verifiable evidence.
- Provide an execution environment, state, traffic management, permissions, observability, and cost controls.
- Build an improvement loop using traces, trajectories, golden datasets, and evaluation experiments.
- Apply these methods to software engineering, design, operations, enterprise IT, and customer-facing use cases.

## 3. Reading Guide

The linked chapters and case studies are currently written in Chinese; this English README is a guide to the existing content, not a translation of the entire white paper.

### Repository structure

| Part | Directory | Chapters | Focus |
| --- | --- | --- | --- |
| [2026 Agent Developer Survey Report](./2026-agent-survey-report.md) | Repository root | — | Enterprise development, production adoption, architecture choices, toolchains, governance, and evaluation. |
| [Preface](./00-preface/) | `00-preface/` | — | The white paper's structure and background. |
| [Architecture](./01-architecture/) | `01-architecture/` | 1–2 | Define the system, select an application form, assess maturity, and establish a reference architecture. |
| [Building](./02-build/) | `02-build/` | 3–6 | Organize tasks, information, and actions around the harness. |
| [Runtime](./03-run/) | `03-run/` | 7–12 | From reliable single-agent execution to asynchronous and distributed multi-agent systems. |
| [Governance](./04-governance/) | `04-governance/` | 13–16 | Make operations visible, behavior bounded, assets manageable, and release behavior testable. |
| [Optimization](./05-optimization/) | `05-optimization/` | 17–24 | Continuous improvement of both models and agents. |
| [Practice](./06-case-study/) | `06-case-study/` | 25–29 | Enterprise cases, domain applications, and agent-infrastructure exploration. |
| [Conclusion and Outlook](./07-conclusion/) | `07-conclusion/` | 30 | From Agentic Application to Agentic OS. |

### Chapter guide

| Part | Chapter | Main topics |
| --- | --- | --- |
| Architecture | [1. A New Stage for AI-Native Applications](<./01-architecture/第 1 章 AI 原生应用的新阶段.md>) | Application evolution, Agentic Application boundaries, and enterprise maturity. |
| Architecture | [2. Agentic Application Reference Architecture](<./01-architecture/第 2 章 Agentic Application 参考架构.md>) | Component, platform-responsibility, and lifecycle views. |
| Building | [3. Harness Construction Patterns and Responsibilities](<./02-build/第 3 章 范式：Harness 的主流构建方式和责任边界.md>) | Code-first frameworks, productized harnesses, managed agents, cloud products, and platform boundaries. |
| Building | [4. Tasks: Orchestration and Long-Horizon Collaboration](<./02-build/第 4 章 任务：编排、长程推进与协作流转.md>) | Agent loops, task state machines, planning, delegation, asynchronous continuation, and completion evidence. |
| Building | [5. Information: Context, State, and Reusable Assets](<./02-build/第 5 章 信息：上下文、状态与可复用能力资产.md>) | Context builders, compression, sessions, task state, workspaces, memory, knowledge, and skills. |
| Building | [6. Actions: Controlled Execution and Verification](<./02-build/第 6 章 行动：受控执行、验证反馈与交付准备.md>) | Action planes, Function Calling, MCP, A2A, environment contracts, permissions, and human approval. |
| Runtime | [7. Agent Runtime and Sandboxes](<./03-run/第 7 章 Agent 运行时与沙箱.md>) | Sandboxes, runtime, workspaces, environment lifecycle, and production execution. |
| Runtime | [8. Agent State Storage and Semantic Assets](<./03-run/第 8 章 Agent 状态存储与语义资产.md>) | Event logs, checkpoints, snapshots, artifacts, long-term memory, RAG, and business semantics. |
| Runtime | [9. AI Gateways and Unified Traffic Governance](<./03-run/第 9 章 AI 网关与统一流量治理.md>) | Identity, permissions, budgets, routing, audit, and approval across LLM, MCP, and agent traffic. |
| Runtime | [10. Asynchronous Agent Tasks and Automation](<./03-run/第 10 章 Agent 异步任务与自动化流程.md>) | Synchronous/asynchronous boundaries, completion semantics, scheduled work, and workflows. |
| Runtime | [11. Multi-Agent Coordination and Orchestration](<./03-run/第 11 章 Multi-Agent 协作与编排.md>) | Heterogeneous agents, team topology, task assignment, result aggregation, and orchestration roles. |
| Runtime | [12. Distributed Agent Communication](<./03-run/第 12 章 Agent 分布式通信.md>) | Protocol choices and message governance across capability, collaboration, internal, and human-agent interactions. |
| Governance | [13. Agent Observability](<./04-governance/第 13 章 Agent 的可观测性.md>) | Metrics, logs, traces, events, cost attribution, and audit. |
| Governance | [14. Agent Security](<./04-governance/第 14 章 Agent 安全.md>) | Prompt injection, identity, per-action validation, high-risk authorization, and data-egress controls. |
| Governance | [15. Discovery and Management of AI Assets](<./04-governance/第 15 章 AI 资产的发现与管理.md>) | Registration, versioning, discovery, dependencies, and releases for prompts, skills, MCP, and agents. |
| Governance | [16. Agent Behavior Generation and Quality Validation](<./04-governance/第 16 章 Agent 行为生成与质量验证.md>) | User and environment simulation, scenarios, and pre-release validation. |
| Optimization | [17. Model Tuning](<./05-optimization/第 17 章 模型调优.md>) | Root-cause criteria, SFT, agentic RL, distillation, and production acceptance. |
| Optimization | [18. Overview of Agent Optimization](<./05-optimization/第 18 章 Agent 调优总览.md>) | Optimization targets, method boundaries, and the data flywheel. |
| Optimization | [19. Agent Trajectory Data](<./05-optimization/第 19 章 Agent 轨迹数据.md>) | Turning traces into reusable behavioral and decision evidence. |
| Optimization | [20. Processing Agent Runtime Data](<./05-optimization/第 20 章 Agent 运行时数据处理.md>) | Collection, cleaning, processing, and declarative data pipelines. |
| Optimization | [21. Golden Datasets for Agents](<./05-optimization/第 21 章 Agent 黄金数据集.md>) | Evaluation assets with inputs, trajectories, outcomes, and judging criteria. |
| Optimization | [22. Improving Agents Through Bad Cases](<./05-optimization/第 22 章 Agent 优化：Badcase.md>) | Failure discovery, attribution, fixes, regression checks, and experiments. |
| Optimization | [23. Controlled Self-Evolution](<./05-optimization/第 23 章 受控自进化.md>) | Turning validated experience into memory, skills, tools, and runtime improvements. |
| Optimization | [24. Edge Runtime and Global Optimization](<./05-optimization/第 24 章 Agent 边缘运行时与全球优化.md>) | Edge runtime, evaluation, performance, cost, delivery, security, and simulation. |
| Practice | [25. Software Engineering Productivity](<./06-case-study/第 25 章 研发效能/>) | Code review, defect detection, patch delivery, and end-to-end engineering. |
| Practice | [26. Design Engineering](<./06-case-study/第 26 章 设计工程/>) | Vibe Designing and GenUI. |
| Practice | [27. Operations, Security, and Enterprise IT](<./06-case-study/第 27 章 运维、安全与企业 IT/>) | Production operations in automotive, retail, and enterprise software. |
| Practice | [28. Customer, Sales, and Operations](<./06-case-study/第 28 章 客户、销售与运营/>) | Long-term memory, content insights, office productivity, and data agents. |
| Practice | [29. GOAI Agent Infra: Frontiers in Multi-Agent Collaboration](<./06-case-study/第 29 章 GOAI Agent Infra 赛道：多 Agent 协同的前沿实践探索.md>) | Open-source competition projects and agent-infrastructure exploration. |
| Conclusion and Outlook | [30. From Agentic Application to Agentic OS](<./07-conclusion/第 30 章 从 Agentic Application 到 Agentic OS.md>) | From individual applications toward collaborative, governable, evolving systems. |

### Case-study guide

| Chapter | Case study |
| --- | --- |
| 25. Software engineering | [ABACI: Targeted Testing and Defect Detection for Kernel Patches](<./06-case-study/第 25 章 研发效能/ABACI 内核补丁定向测试与缺陷检测智能体.md>) |
| 25. Software engineering | [Kitta: A Domain-Specific Code Review Agent](<./06-case-study/第 25 章 研发效能/Kitta：领域专用 Code Review Agent.md>) |
| 25. Software engineering | [PatchPilot Agents: Orchestrated, Verifiable Kernel Patch Delivery](<./06-case-study/第 25 章 研发效能/PatchPilot Agents：让内核补丁交付成为可编排、可验证的工程闭环.md>) |
| 25. Software engineering | [From Alerts to Automatic Repair: PolarDB-X Loop Engineering](<./06-case-study/第 25 章 研发效能/从报警到自动修复，PolarDB-X 的 Loop 工程实践.md>) |
| 25. Software engineering | [From Coding Productivity to End-to-End Delivery: Human-Agent Collaboration in Cloud Communications](<./06-case-study/第 25 章 研发效能/从编码提效到端到端交付，云通信的人机协作实践.md>) |
| 25. Software engineering | [Evaluation-Driven Delivery: AI Agent Security Product Development](<./06-case-study/第 25 章 研发效能/从评测驱动到端到端交付：AI Agent 安全产品研发提效实践.md>) |
| 25. Software engineering | [A Multi-Agent Engineering Team: From Writing Code to End-to-End Delivery](<./06-case-study/第 25 章 研发效能/多 Agent 组成研发小队：AI 研发如何从写代码走向端到端交付.md>) |
| 26. Design engineering | [GenUI: From Answers to Deliverables](<./06-case-study/第 26 章 设计工程/GenUI：让 Agent 从给出答案走向交付结果.md>) |
| 26. Design engineering | [Vibe Designing: An Intent-Driven AI Design Paradigm](<./06-case-study/第 26 章 设计工程/Vibe Designing：意图驱动的 AI 设计范式进化.md>) |
| 27. Operations and IT | [Geely's Intelligent Operations Practice](<./06-case-study/第 27 章 运维、安全与企业 IT/吉利汽车智能运维的落地实践.md>) |
| 27. Operations and IT | [Tastien's Intelligent Operations Loop Across 10,000 Stores](<./06-case-study/第 27 章 运维、安全与企业 IT/塔斯汀万店连锁的智能运维闭环实践.md>) |
| 27. Operations and IT | [ChangJieTong's Observability and Intelligent Operations](<./06-case-study/第 27 章 运维、安全与企业 IT/畅捷通的可观测与智能运维实践.md>) |
| 28. Customer and operations | [MiniMax's Long-Horizon Memory Data Foundation](<./06-case-study/第 28 章 客户、销售与运营/MiniMax 构建海量长周期记忆数据底座的实践.md>) |
| 28. Customer and operations | [Office Productivity at ShineWing, an Accounting Firm](<./06-case-study/第 28 章 客户、销售与运营/会计师事务所信永中和的办公提效探索.md>) |
| 28. Customer and operations | [Bilibili's Cross-Platform Content Insights](<./06-case-study/第 28 章 客户、销售与运营/哔哩哔哩构建全域内容洞察的实践.md>) |
| 28. Customer and operations | [Data Agent for Operational Analytics](<./06-case-study/第 28 章 客户、销售与运营/运营分析 Data Agent 实践.md>) |

### Suggested reading paths

- **New to enterprise agents:** Survey → Chapters 1–2 → Chapters 3–6 → Chapters 13–16.
- **Moving an agent into production:** Chapters 7–9 → Chapters 13–14 → Chapters 18–23.
- **Building a multi-agent system:** Chapters 4–6 → Chapters 10–12 → Chapters 13 and 16.
- **Responsible for evaluation and optimization:** Chapter 13 → Chapters 18–23 → relevant case studies.
- **Responsible for selection or project approval:** Survey → Chapters 1–3 → Practice → Chapter 30.

## 4. Roadmap

This white paper is an open, evolving project rather than a document frozen after its first release. Planned work includes:

- **More enterprise cases:** Add first-hand examples from engineering, operations, customer service, data, security, finance, and industry-specific workflows, including trade-offs and failure modes.
- **Hands-on cloud experiences:** Create reproducible online exercises for sandboxes, runtimes, AI gateways, state storage, observability, and evaluation.
- **Deeper governance coverage:** Track enterprise needs in identity, prompt-injection defense, data egress, audit, asset registration, versioning, and pre-release simulation.
- **Stronger evaluation methods:** Expand coverage of task success rates, trajectory evaluation, LLM-as-Judge, golden datasets, bad-case regression, online experiments, and quality–cost trade-offs.
- **Ongoing technical updates:** Revisit conclusions as models, harnesses, protocols, runtimes, multi-agent systems, and Agentic OS evolve.
- **Community collaboration:** Improve content guidelines, case templates, terminology, review processes, and release practices.

### Contributing

Developers, architects, researchers, enterprise teams, and product practitioners are welcome to contribute. You can open an Issue to report an error or suggest a topic; submit a Pull Request to improve a chapter, figure, or reference; share a sanitized case study or postmortem; or contribute reproducible code, cloud exercises, datasets, and experiments.

Please respect authorship and permission boundaries. Remove or obtain authorization for enterprise data, customer information, internal-system details, and security-sensitive material before contributing.

Before submitting a pull request, run the documentation quality checks:

```bash
npm ci
npm run check
```

## 5. Contributors

Thanks to everyone who has helped with architecture, writing, case studies, and review.

### Alibaba Cloud

| Contribution area | Contributors |
| --- | --- |
| Preface | 麻芃 |
| Developer Survey Report | 任娟, 王晨 |
| Architecture | 王晨, 刘军, 沈林 |
| Building | 刘军, 泮圣伟, 王晨 |
| Runtime | 赵庆杰, 李诗波, 林清山, 黄晓萌, 张添翼, 赵源筱, 孙校, 宋震, 胡庆达, 柳遵飞, 朱桐, 余华峰, 罗鑫, 孔可青 |
| Governance | 肖长军, 周洋, 张磊, 王方, 张海彬, 程书意, 刘子明, 饶子昊, 任懿, 杨永, 王硕, 马昕, 刘宇轩, 杨翊 |
| Optimization | 张寒萌, 李盛荣, 王亚宁, 孙坚运, 马云雷, 王桢, 郑前祎, 刘航, 陈新 |
| Practice | 杨涛, 朱颜, 余艾琳, 胡峻 |
| Conclusion and Outlook | 林演 |

### External Contributors

The project remains open to community contributions. Developers, architects, researchers, enterprise technology teams, and product practitioners are welcome to collaborate through Issues and Pull Requests. Accepted contributors will be acknowledged in this section.

---

If this white paper helps you better understand, build, operate, govern, and optimize agents, please share it, discuss it, and help improve it.
