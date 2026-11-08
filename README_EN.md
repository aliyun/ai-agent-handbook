# AI Agent Handbook

[中文](./README.md) | English

Organized around the Agent application lifecycle (architecture, building, operations, governance, and optimization), this open-source project gathers practical experience, lessons learned, and insights from Alibaba Cloud, enterprise customers on the cloud, and developers in the open-source community as they bring enterprise-grade Agents into production. We add the latest practices every week and revise published content from time to time. We'd be honored if this project helps, even a little, with your own learning or your company's Agent rollout.

We dedicate this project to everyone contributing to the development of AI.

[Read online](https://aliyun.github.io/ai-agent-handbook/)

[Play the online challenges](https://aliyun.github.io/ai-agent-handbook/challenges/) — we've designed a few mini-games. How high can you score?

We welcome universities and other educational institutions to co-build an enterprise-grade Agent curriculum with us. If you are interested, please reach out on WeChat (max_0928) and mention "curriculum co-building" in your friend request.

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

## 3. Table of Contents

The linked chapters and case studies are currently written in Chinese; this English README is a guide to the existing content, not a translation of the entire white paper.

| Part | Directory | Chapters | Focus |
| --- | --- | --- | --- |
| [2026 Agent Developer Survey Report](./2026-agent-survey-report.md) | Repository root | — | Enterprise development, production adoption, architecture choices, toolchains, governance, and evaluation. |
| [Preface](./00-preface/00-preface.md) | `00-preface/` | — | The white paper's structure and background. |
| [Putting Intelligence to Work: From Creating Intelligence to Using It Well](<./00-preface/智以致用：从造出智能，到用好智能.md>) | `00-preface/` | — | From intelligent capabilities to reliable delivery through multimodality, full-stack systems, and harness engineering. |
| [Architecture](./01-architecture/) | `01-architecture/` | 1–2 | Define the system, select an application form, assess maturity, and establish a reference architecture. |
| [Building](./02-build/) | `02-build/` | 3–6 | Organize tasks, information, and actions around the harness. |
| [Runtime](./03-run/) | `03-run/` | 7–12 | From reliable single-agent execution to asynchronous and distributed multi-agent systems. |
| [Governance](./04-governance/) | `04-governance/` | 13–16 | Make operations visible, behavior bounded, assets manageable, and release behavior testable. |
| [Optimization](./05-optimization/) | `05-optimization/` | 17–24 | Continuous improvement of both models and agents. |
| [Practice](./06-case-study/) | `06-case-study/` | 25–29, Jev topic, Personal Agent topic, and FDE topic | Enterprise cases, domain applications, agent infrastructure, structured decisions, Personal Agent observations, and FDE engineering practices. |
| [Conclusion and Outlook](./07-conclusion/) | `07-conclusion/` | 30 | From Agentic Application to Agentic OS. |

## 4. Roadmap

This white paper is an open, evolving project rather than a document frozen after its first release. Planned work includes:

- **More enterprise cases:** Add first-hand examples from engineering, operations, customer service, data, security, finance, and industry-specific workflows, including trade-offs and failure modes.
- **Hands-on cloud experiences:** Create reproducible online exercises for sandboxes, runtimes, AI gateways, state storage, observability, and evaluation.
- **Deeper governance coverage:** Track enterprise needs in identity, prompt-injection defense, data egress, audit, asset registration, versioning, and pre-release simulation.
- **Stronger evaluation methods:** Expand coverage of task success rates, trajectory evaluation, LLM-as-Judge, golden datasets, bad-case regression, online experiments, and quality–cost trade-offs.
- **Ongoing technical updates:** Revisit conclusions as models, harnesses, protocols, runtimes, multi-agent systems, and Agentic OS evolve.

### Contributing

Developers, architects, researchers, enterprise teams, and product practitioners are welcome to contribute. You can open an Issue to report an error or suggest a topic; submit a Pull Request to improve a chapter, figure, or reference; share a sanitized case study or postmortem; or contribute reproducible code, cloud exercises, datasets, and experiments.

Please respect authorship and permission boundaries. Remove or obtain authorization for enterprise data, customer information, internal-system details, and security-sensitive material before contributing.

## 5. Contributors

Thanks to everyone who has helped with architecture, writing, case studies, and review.

| Contribution area | Contributors |
| --- | --- |
| Preface | Peng Ma |
| Developer Survey Report | Juan Ren, Chen Wang |
| Architecture | Chen Wang, Jun Liu, Lin Shen |
| Building | Jun Liu, Shengwei Pan, Chen Wang |
| Runtime | Qingjie Zhao, Shibo Li, Qingshan Lin, Xiaomeng Huang, Tianyi Zhang, Yuanxiao Zhao, Xiao Sun, Zhen Song, Qingda Hu, Zunfei Liu, Tong Zhu, Huafeng Yu, Xin Luo, Keqing Kong |
| Governance | Changjun Xiao, Yang Zhou, Lei Zhang, Fang Wang, Haibin Zhang, Shuyi Cheng, Ziming Liu, Zihao Rao, Yi Ren, Yong Yang, Shuo Wang, Xin Ma, Yuxuan Liu, Yi Yang |
| Optimization | Hanmeng Zhang, Shengrong Li, Yaning Wang, Jianyun Sun, Yunlei Ma, Zhen Wang, Qianyi Zheng, Hang Liu, Xin Chen, Kaisheng Gao |
| Practice | Tao Yang, Yan Zhu, Ailin Yu, Jun Hu, Jian Jiang, Tianyi Zhang, Bin Zhao, Yuanhang Zhou, Tian Zheng, Yi Ren, Chungang Zhou |
| Conclusion and Outlook | Yan Lin |
