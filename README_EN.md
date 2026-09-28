# README

[Tiếng Việt](./README.md) | English | [中文](https://github.com/aliyun/ai-agent-handbook)

# AI Agent HandBook

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
| [2026 Agent Developer Survey Report](./2026-bao-cao-khao-sat-agent.md) | Repository root | — | Enterprise development, production adoption, architecture choices, toolchains, governance, and evaluation. |
| [Preface](./00-loi-noi-dau/00-loi-noi-dau.md) | `00-loi-noi-dau/` | — | The white paper's structure and background. |
| [Architecture](./01-kien-truc/) | `01-kien-truc/` | 1–2 | Define the system, select an application form, assess maturity, and establish a reference architecture. |
| [Building](./02-xay-dung/) | `02-xay-dung/` | 3–6 | Organize tasks, information, and actions around the harness. |
| [Runtime](./03-van-hanh/) | `03-van-hanh/` | 7–12 | From reliable single-agent execution to asynchronous and distributed multi-agent systems. |
| [Governance](./04-quan-tri/) | `04-quan-tri/` | 13–16 | Make operations visible, behavior bounded, assets manageable, and release behavior testable. |
| [Optimization](./05-toi-uu/) | `05-toi-uu/` | 17–24 | Continuous improvement of both models and agents. |
| [Practice](./06-thuc-tien/) | `06-thuc-tien/` | 25–29 | Enterprise cases, domain applications, and agent-infrastructure exploration. |
| [Conclusion and Outlook](./07-tong-ket/) | `07-tong-ket/` | 30 | From Agentic Application to Agentic OS. |

### Chapter guide

| Part | Chapter | Main topics |
| --- | --- | --- |
| Architecture | [1. A New Stage for AI-Native Applications](<./01-kien-truc/chuong-01-giai-doan-moi-cua-ung-dung-ai-native.md>) | Application evolution, Agentic Application boundaries, and enterprise maturity. |
| Architecture | [2. Agentic Application Reference Architecture](<./01-kien-truc/chuong-02-kien-truc-tham-chieu-agentic-application.md>) | Component, platform-responsibility, and lifecycle views. |
| Building | [3. Harness Construction Patterns and Responsibilities](<./02-xay-dung/chuong-03-paradigm-harness-va-ranh-gioi-trach-nhiem.md>) | Code-first frameworks, productized harnesses, managed agents, cloud products, and platform boundaries. |
| Building | [4. Tasks: Orchestration and Long-Horizon Collaboration](<./02-xay-dung/chuong-04-task-dieu-phoi-tien-trinh-dai-va-cong-tac.md>) | Agent loops, task state machines, planning, delegation, asynchronous continuation, and completion evidence. |
| Building | [5. Information: Context, State, and Reusable Assets](<./02-xay-dung/chuong-05-thong-tin-context-state-va-nang-luc-tai-su-dung.md>) | Context builders, compression, sessions, task state, workspaces, memory, knowledge, and skills. |
| Building | [6. Actions: Controlled Execution and Verification](<./02-xay-dung/chuong-06-hanh-dong-thuc-thi-co-kiem-soat-va-xac-thuc.md>) | Action planes, Function Calling, MCP, A2A, environment contracts, permissions, and human approval. |
| Runtime | [7. Agent Runtime and Sandboxes](<./03-van-hanh/chuong-07-agent-runtime-va-sandbox.md>) | Sandboxes, runtime, workspaces, environment lifecycle, and production execution. |
| Runtime | [8. Agent State Storage and Semantic Assets](<./03-van-hanh/chuong-08-luu-tru-trang-thai-va-tai-san-ngu-nghia.md>) | Event logs, checkpoints, snapshots, artifacts, long-term memory, RAG, and business semantics. |
| Runtime | [9. AI Gateways and Unified Traffic Governance](<./03-van-hanh/chuong-09-ai-gateway-va-quan-tri-traffic-thong-nhat.md>) | Identity, permissions, budgets, routing, audit, and approval across LLM, MCP, and agent traffic. |
| Runtime | [10. Asynchronous Agent Tasks and Automation](<./03-van-hanh/chuong-10-task-bat-dong-bo-va-quy-trinh-tu-dong-hoa.md>) | Synchronous/asynchronous boundaries, completion semantics, scheduled work, and workflows. |
| Runtime | [11. Multi-Agent Coordination and Orchestration](<./03-van-hanh/chuong-11-multi-agent-cong-tac-va-orchestration.md>) | Heterogeneous agents, team topology, task assignment, result aggregation, and orchestration roles. |
| Runtime | [12. Distributed Agent Communication](<./03-van-hanh/chuong-12-agent-giao-tiep-phan-tan.md>) | Protocol choices and message governance across capability, collaboration, internal, and human-agent interactions. |
| Governance | [13. Agent Observability](<./04-quan-tri/chuong-13-observability-cua-agent.md>) | Metrics, logs, traces, events, cost attribution, and audit. |
| Governance | [14. Agent Security](<./04-quan-tri/chuong-14-bao-mat-agent.md>) | Prompt injection, identity, per-action validation, high-risk authorization, and data-egress controls. |
| Governance | [15. Discovery and Management of AI Assets](<./04-quan-tri/chuong-15-kham-pha-va-quan-ly-tai-san-ai.md>) | Registration, versioning, discovery, dependencies, and releases for prompts, skills, MCP, and agents. |
| Governance | [16. Agent Behavior Generation and Quality Validation](<./04-quan-tri/chuong-16-sinh-hanh-vi-va-kiem-dinh-chat-luong.md>) | User and environment simulation, scenarios, and pre-release validation. |
| Optimization | [17. Model Tuning](<./05-toi-uu/chuong-17-toi-uu-model.md>) | Root-cause criteria, SFT, agentic RL, distillation, and production acceptance. |
| Optimization | [18. Overview of Agent Optimization](<./05-toi-uu/chuong-18-tong-quan-toi-uu-agent.md>) | Optimization targets, method boundaries, and the data flywheel. |
| Optimization | [19. Agent Trajectory Data](<./05-toi-uu/chuong-19-du-lieu-trajectory.md>) | Turning traces into reusable behavioral and decision evidence. |
| Optimization | [20. Processing Agent Runtime Data](<./05-toi-uu/chuong-20-xu-ly-du-lieu-runtime.md>) | Collection, cleaning, processing, and declarative data pipelines. |
| Optimization | [21. Golden Datasets for Agents](<./05-toi-uu/chuong-21-golden-dataset.md>) | Evaluation assets with inputs, trajectories, outcomes, and judging criteria. |
| Optimization | [22. Improving Agents Through Bad Cases](<./05-toi-uu/chuong-22-toi-uu-agent-badcase.md>) | Failure discovery, attribution, fixes, regression checks, and experiments. |
| Optimization | [23. Controlled Self-Evolution](<./05-toi-uu/chuong-23-tu-tien-hoa-co-kiem-soat.md>) | Turning validated experience into memory, skills, tools, and runtime improvements. |
| Optimization | [24. Edge Runtime and Global Optimization](<./05-toi-uu/chuong-24-edge-runtime-va-toi-uu-toan-cau.md>) | Edge runtime, evaluation, performance, cost, delivery, security, and simulation. |
| Practice | [25. Software Engineering Productivity](<./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/>) | Code review, defect detection, patch delivery, and end-to-end engineering. |
| Practice | [26. Design Engineering](<./06-thuc-tien/chuong-26-design-engineering/>) | Vibe Designing and GenUI. |
| Practice | [27. Operations, Security, and Enterprise IT](<./06-thuc-tien/chuong-27-van-hanh-bao-mat-va-it-doanh-nghiep/>) | Production operations in automotive, retail, and enterprise software. |
| Practice | [28. Customer, Sales, and Operations](<./06-thuc-tien/chuong-28-khach-hang-ban-hang-va-van-hanh/>) | Long-term memory, content insights, office productivity, and data agents. |
| Practice | [29. GOAI Agent Infra: Frontiers in Multi-Agent Collaboration](<./06-thuc-tien/chuong-29-goai-agent-infra.md>) | Open-source competition projects and agent-infrastructure exploration. |
| Conclusion and Outlook | [30. From Agentic Application to Agentic OS](<./07-tong-ket/chuong-30-tu-agentic-application-den-agentic-os.md>) | From individual applications toward collaborative, governable, evolving systems. |

### Case-study guide

| Chapter | Case study |
| --- | --- |
| 25. Software engineering | [ABACI: Targeted Testing and Defect Detection for Kernel Patches](<./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/abaci-kiem-thu-patch-kernel-va-phat-hien-loi.md>) |
| 25. Software engineering | [Kitta: A Domain-Specific Code Review Agent](<./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/kitta-code-review-agent-chuyen-nganh.md>) |
| 25. Software engineering | [PatchPilot Agents: Orchestrated, Verifiable Kernel Patch Delivery](<./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/patchpilot-agents.md>) |
| 25. Software engineering | [From Alerts to Automatic Repair: PolarDB-X Loop Engineering](<./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/polardb-x-tu-canh-bao-den-tu-dong-sua-loi.md>) |
| 25. Software engineering | [From Coding Productivity to End-to-End Delivery: Human-Agent Collaboration in Cloud Communications](<./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/hop-tac-nguoi-may-tai-cloud-communication.md>) |
| 25. Software engineering | [Evaluation-Driven Delivery: AI Agent Security Product Development](<./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/eval-driven-phat-trien-san-pham-bao-mat.md>) |
| 25. Software engineering | [A Multi-Agent Engineering Team: From Writing Code to End-to-End Delivery](<./06-thuc-tien/chuong-25-hieu-suat-ky-thuat/doi-multi-agent-giao-hang-dau-cuoi.md>) |
| 26. Design engineering | [GenUI: From Answers to Deliverables](<./06-thuc-tien/chuong-26-design-engineering/genui.md>) |
| 26. Design engineering | [Vibe Designing: An Intent-Driven AI Design Paradigm](<./06-thuc-tien/chuong-26-design-engineering/vibe-designing.md>) |
| 27. Operations and IT | [Geely's Intelligent Operations Practice](<./06-thuc-tien/chuong-27-van-hanh-bao-mat-va-it-doanh-nghiep/geely-aiops.md>) |
| 27. Operations and IT | [Tastien's Intelligent Operations Loop Across 10,000 Stores](<./06-thuc-tien/chuong-27-van-hanh-bao-mat-va-it-doanh-nghiep/tastien-aiops-chuoi-cua-hang.md>) |
| 27. Operations and IT | [ChangJieTong's Observability and Intelligent Operations](<./06-thuc-tien/chuong-27-van-hanh-bao-mat-va-it-doanh-nghiep/chanjet-observability-va-aiops.md>) |
| 28. Customer and operations | [MiniMax's Long-Horizon Memory Data Foundation](<./06-thuc-tien/chuong-28-khach-hang-ban-hang-va-van-hanh/minimax-nen-tang-du-lieu-memory.md>) |
| 28. Customer and operations | [Office Productivity at ShineWing, an Accounting Firm](<./06-thuc-tien/chuong-28-khach-hang-ban-hang-va-van-hanh/shinewing-nang-cao-hieu-suat-van-phong.md>) |
| 28. Customer and operations | [Bilibili's Cross-Platform Content Insights](<./06-thuc-tien/chuong-28-khach-hang-ban-hang-va-van-hanh/bilibili-content-insight.md>) |
| 28. Customer and operations | [Data Agent for Operational Analytics](<./06-thuc-tien/chuong-28-khach-hang-ban-hang-va-van-hanh/data-agent-phan-tich-van-hanh.md>) |

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

## 5. Contributors

Thanks to everyone who has helped with architecture, writing, case studies, and review.

### Alibaba Cloud

| Contribution area | Contributors |
| --- | --- |
| Preface | Ma Peng |
| Developer Survey Report | Ren Juan, Wang Chen |
| Architecture | Wang Chen, Liu Jun, Shen Lin |
| Building | Liu Jun, Pan Shengwei, Wang Chen |
| Runtime | Zhao Qingjie, Li Shibo, Lin Qingshan, Huang Xiaomeng, Zhang Tianyi, Zhao Yuanxiao, Sun Xiao, Song Zhen, Hu Qingda, Liu Zunfei, Zhu Tong, Yu Huafeng, Luo Xin, Kong Keqing |
| Governance | Xiao Changjun, Zhou Yang, Zhang Lei, Wang Fang, Zhang Haibin, Cheng Shuyi, Liu Ziming, Rao Zihao, Ren Yi, Yang Yong, Wang Shuo, Ma Xin, Liu Yuxuan, Yang Yi |
| Optimization | Zhang Hanmeng, Li Shengrong, Wang Yaning, Sun Jianyun, Ma Yunlei, Wang Zhen, Zheng Qianyi, Liu Hang, Chen Xin |
| Practice | Yang Tao, Zhu Yan, Yu Ailin, Hu Jun |
| Conclusion and Outlook | Lin Yan |

### External Contributors

The project remains open to community contributions. Developers, architects, researchers, enterprise technology teams, and product practitioners are welcome to collaborate through Issues and Pull Requests. Accepted contributors will be acknowledged in this section.

---

If this white paper helps you better understand, build, operate, govern, and optimize agents, please share it, discuss it, and help improve it.
