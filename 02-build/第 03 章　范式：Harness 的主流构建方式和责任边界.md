# 第 03 章　范式：Harness 的主流构建方式和责任边界

上一章从组件、平台和生命周期三个视图给出了 Agentic Application 的参考架构，并将“架构设计”明确为生命周期的第一个阶段。本章进入第二篇“构建”，从 Harness 主流的构建路径、任务&信息&行动三类工程契约，阐述如何构建可靠的 Agent。

编码 Agent 为这项工作提供了一个可观察的工程样本。在代码、文件和测试构成的环境中，模型可以通过工具持续行动，系统也可以用编译、测试和文件差异验证结果。它说明，模型能力只有经过上下文组织、任务循环、状态管理、工具执行、权限控制和结果验证，才可能稳定转化为任务结果。但编码场景不是所有企业任务的替代物。审批、交易、客服和运营任务具有不同的业务状态、权限边界和成功标准，企业不能照搬一套 Coding Agent 流程，而应复用其中可泛化的 Harness 机制。

从工程视角看，构建 Agent 的主要工作，是为模型建立与任务结构、风险等级相匹配的 Harness。这并不意味着企业必须从零实现模型之外的全部系统。面向不同的定制深度、产品抽象和运行责任，当前可以归纳出四种主要构建起点：

*   基于高代码 Agent Framework 自主构建 Harness
    
*   复用产品化的 Harness
    
*   基于模型构建 Agent
    
*   在云产品的预置能力之上，快速构建 Agent
    

在单个 Agent 之外，企业还需要 Agent Platform 创建和接入这些 Agents，并提供规模化交付、运行、治理、协作、观测和优化能力。

本章分别以 AgentScope、QwenPaw、Qoder Cloud Agents 和阿里云 AgentCore 作为四种构建方式的示例，并以阿里云 AgentCore 作为 Agent Platform，展示如何统一创建、接入、交付、纳管和运营多源 Agent。四种起点不是由低到高的成熟度阶梯，也不必互斥。同一企业可以用高代码框架构建需要深度定制的核心 Agent，用 Coding Agent 将产品化 Harness 嵌入现有应用，也可以通过云产品中组合的预置能力快速创建 Agent，再由统一 Agent Platform 纳管和运营。

## 3.1 Agent = Model + Harness

### 3.1.1 Harness 是模型之外的工程系统

本白皮书将 Agent Harness 定义为：

> **模型之外、围绕 Agent Loop 组织上下文、能力、状态、环境与控制机制，并将模型判断转化为可执行、可恢复、可验证任务过程的代码、配置和执行逻辑。**

这个定义包含三层含义。

*   第一，Harness 不是一个更长的 System Prompt。Prompt 只是它在某一轮推理中生成的输入之一。Harness 还包括任务状态机、工具注册、计划管理、权限检查、环境适配、事件处理、错误恢复和完成验证等确定性逻辑。
    
*   第二，Harness 不是某一种 Agent Framework 的同义词。Framework 可以帮助企业实现 Harness；成熟的 Coding Agent CLI 或 SDK 可以提供一套现成 Harness；Managed Agents 还可以把 Harness 连同执行服务一起托管。Harness 描述的是 Agent 如何工作的系统层，而不是某一类产品形态。
    
*   第三，Harness 不是 Runtime 或 Sandbox。Harness 决定下一步应为模型提供什么、允许模型提出什么行动、怎样推进任务；Runtime 负责持续承载这个过程；Sandbox 负责把实际行动限制在可控环境中。三者协同，但责任不同。
    

```mermaid
flowchart LR
    U[用户、业务事件或上级 Agent] --> H

    subgraph A[Agent]
        direction LR
        M[Model<br/>理解、推理与决策]
        H[Harness<br/>组织、行动与控制]
        H <--> M
    end

    H --> R[Runtime<br/>进程、任务、调度与恢复]
    H --> S[Sandbox / Environment<br/>文件、代码、浏览器与系统]
    H --> X[企业工具、数据与远程 Agent]
    R --> P[Agent Platform<br/>规模化运行与治理]
    S --> P

```

一次模型调用没有可靠的跨轮状态，也不知道任务是否已经在其他节点推进；上下文窗口有限，无法自然保留长任务中的全部事实；工具调用只表达行动意图，并不等于当前用户获得执行授权；模型可以声称任务完成，却不能证明文件已经生成、测试已经通过、订单已经提交或审批已经生效。

Harness 因而要把概率性的模型判断嵌入确定性的系统边界。模型决定 Agent 能理解和推理到什么程度，Harness 决定这些能力怎样持续转化为任务结果，Runtime 与 Sandbox 则决定这个过程如何被承载和限制。

| 层次 | 核心问题 | 主要责任 |
| --- | --- | --- |
| Model | Agent 能理解和推理到什么程度 | 语义理解、规划判断、生成与工具选择 |
| Harness 编排 | Agent 如何工作 | Loop、Context、State、Plan、Tool、Skill、Subagent、Permission 与 Verification |
| Runtime | Agent 如何持续运行 | 进程承载、任务调度、并发、等待与故障恢复 |
| Sandbox / Environment | Agent 在哪里行动、影响范围多大 | 文件、进程、网络、Secret、资源和环境隔离 |
| Agent Platform | 如何规模化交付和治理 | 多租户、发布、网关、配额、观测、评估、安全和运营 |

这些逻辑边界不一定对应五个独立产品或部署单元。一个 SDK 可以同时包含 Harness 和本地 Runtime，托管服务也可以同时提供 Harness、Runtime 与 Sandbox。但在架构设计中仍要保留边界，否则企业无法判断故障归属、数据位置、迁移成本和最终责任。

### 3.1.2 开发 Harness 要实现哪些对象

从开发者视角看，构建 Harness 不是罗列功能，而是让一组工程对象在同一个任务生命周期中协同工作：

| 构建对象 | 开发阶段需要回答的问题 | 主要交付物 |
| --- | --- | --- |
| Agent Contract | Agent 为谁工作、目标是什么、允许和禁止什么 | 角色指令、任务输入输出和成功标准 |
| Execution | 模型怎样循环、规划、等待、委派和结束 | Agent Loop、状态机、预算与 Verifier |
| Context & State | 每轮看见什么，任务事实保存在何处 | Context Policy、Session / Task Schema、Workspace 与 Memory |
| Capability | Agent 可以使用哪些方法和外部能力 | Tool Schema、MCP、Skill、Subagent 与能力目录 |
| Environment | 文件、命令、浏览器或企业系统在哪里运行 | Environment Contract、Sandbox 与 Artifact 边界 |
| Control | 以谁的身份行动，哪些动作要拒绝或审批 | Permission Policy、HITL 与短时凭证 |
| Interaction | 用户和上层应用如何看进度、干预和恢复 | Event Schema、Streaming、Channel 与恢复游标 |
| Quality | 如何证明一次任务完成，并判断新版本是否更好 | Trace、Outcome、测试用例和评估基线 |

一个最小 Agent 可以只实现其中一部分，但进入企业生产环境后，这些问题都必须有明确责任人。选择 Harness 构建路径，本质上就是决定哪些对象由企业开发，哪些对象复用现有产品，哪些对象交给托管平台承载。

这些对象可以进一步归纳为三个能力域：执行与编排、上下文与状态、行动与反馈。这里只把它们作为构建检查表；第 04–06 章将分别展开它们的内部原理、实现方式和调优方法。

图 3-1　企业 Agent 的构建与承载关系

![第3章1.svg](../assets/imgs/chapter-03/image-001.svg)

构建 Agent 不能从选择框架或打开工具开始，而应先固定任务契约（Agent Contract）。任务契约说明 Agent 为谁工作、接受什么输入、交付什么结果、允许影响哪些系统、哪些动作必须拒绝或审批，以及什么证据能够证明任务完成。同一个修复高危依赖漏洞目标，可以只生成分析报告，也可以在隔离环境中修改代码并运行测试，还可以创建合并请求；除非契约明确授予发布权限并规定审批条件，这些 Agent 都不应把修复完成解释为已经发布生产。

### 3.1.3 四类构建入口解决不同责任问题

在选择具体实现之前，企业还要判断任务路径由谁控制。步骤、分支和异常在设计时已经明确的任务，更适合使用 Workflow；执行路径必须根据中间结果和环境反馈动态决定时，可以由 Agent 持有部分决策权；高风险主流程稳定、局部判断复杂的任务，则可以使用 Hybrid，由 Workflow 固定审批、交易和发布边界，由 Agent 负责检索、分析和方案生成。Workflow、Agent 主导与 Hybrid 描述路径控制方式，不是与 Single-Agent、Long-Horizon Agent 和 Multi-Agent 并列的应用形态。

在此基础上，高代码框架自行构建Harness、产品化Harness、Managed Agents 服务和 Agent 云产品构成四类常见的构建入口。它们最显著的差异，不是模型能力，也不是应用形态，而是 Harness 的通用行为由谁实现，Runtime 与 Sandbox 由谁提供，以及企业应用需要补齐哪些控制和验收责任。Single-Agent、Long-Horizon Agent 和 Multi-Agent 都可以从其中任一入口构建；应用形态决定需要怎样的任务组织、持久状态与协作契约，构建入口则决定这些能力主要由企业、产品还是平台实现。AgentScope、QwenPaw、Qoder Cloud Agents 和阿里云 AgentCore 分别作为本章的代表案例。表 3-2 对四类入口的控制重点、可复用能力、企业责任和适用条件进行比较。

| 构建入口 | 示例 | 企业直接控制的重点 | 可复用或托管的能力 | 企业仍需承担的责任 | 更适合的条件 |
| --- | --- | --- | --- | --- | --- |
| 高代码 Agent Framework 自主构建 Harness | AgentScope、LangChain、DeepSeek Harness | Loop、Context、Planning、状态语义、工具策略和验证逻辑 | Framework 提供模型、消息、工具、状态和编排等基础抽象 | 组合后的行为、执行基础、安全、恢复、评估和业务验收 | 任务逻辑独特，需要深度定制，或数据与环境必须由企业控制 |
| 产品化 Harness | QwenPaw、Hermes | 业务目标、工具扩展、权限回调、Workspace 和应用集成 | 工作区理解、任务规划、工具执行、Session、事件和过程干预 | 多租户接入、业务 Task、隔离环境、凭证、Artifact 和 Outcome | 希望复用既有工作方式，同时嵌入现有产品或企业流程 |
| 基于模型构建Agent | Qoder Cloud Agents、Claude Managed Agent | Agent 定义、Environment 配置、企业能力接入、任务委派和验收 | 约定范围内的 Harness、Session 推进、事件流、隔离执行与云端运行资源 | 身份映射、业务状态、审批、数据边界、结果验收和退出机制 | 在线服务、异步任务、批量任务和快速生产化 |
| 基于云产品构建Agent | 阿里云 AgentCore、 | 业务目标、Agent 配置、共享资源组合、发布范围和验收规则 | 产品预置的模型、知识、工具、运行环境及管理能力，具体范围以版本为准 | 业务 Task、数据与权限边界、扩展集成、效果评估和最终验收 | 希望以云产品入口快速创建 Agent，并与企业共享资源和平台治理衔接 |

表 3-2　四类 Agent 构建入口的主要差异

四类入口不是严格互斥的技术分类。高代码框架构建的 Agent 可以使用托管 Runtime；产品化 Harness 可以运行在企业集群，也可以被平台调度；基于模型构建Agent 仍需接入企业工具、身份和业务系统；基于云产品构建 Agent 既可以提供平台内的原生构建入口，也可以进一步承担多源 Agent 的目录、运行和治理能力。选择时应分别判断任务效果是否依赖修改 Loop 或 Context、数据和执行环境能否托管、团队是否愿意维护状态恢复与 Sandbox，以及最终交付对象是个人工作区、嵌入式应用、异步任务服务还是平台内业务 Agent。

## 3.2 基于高代码框架自主构建 Harness

高代码 Agent Framework 提供模型、消息、工具、Agent、状态和编排等代码级抽象，应用团队在其上定义任务循环、上下文策略、能力组合和企业集成。这里的“高代码”强调开发团队可以直接控制和扩展 Harness 机制，与依靠可视化配置或预置模板的构建入口相区分，并不表示框架路径一定更复杂或更成熟。以 AgentScope Java 为例，HarnessAgent 将工作区、状态、Memory、Context 压缩、Plan Mode、Skill、Subagent、Sandbox 和交互控制等能力组织在统一运行上下文中，使团队可以按业务需要自主构建 Harness。这里的自主构建指开发团队使用框架设计和实现 Harness，并不是 Agent 自己生成或重构 Harness。

Framework 路径的核心价值是任务语义控制。企业可以决定每轮 Context 怎样组成、哪些错误可以重试、计划何时生成和更新、何时请求审批、怎样创建子任务，以及什么证据算完成。与之对应，Framework 提供的是构建材料，不会自动补齐多租户隔离、状态恢复、Sandbox、安全策略、评估基线和业务验收。

一个最小 AgentScope Harness 可以先确定三件事：使用什么模型、Agent 在哪个 Workspace 工作、一次调用属于哪个用户和 Session。

```java
HarnessAgent agent = HarnessAgent.builder()
    .name("remediation-agent")
    .model(model)
    .workspace(Paths.get(".agentscope/workspace"))
    .build();

agent.call(message, RuntimeContext.builder()
    .userId("u-1842")
    .sessionId("remediation-2026-0917")
    .build()).block();

```

这段代码已经建立了最小 Harness 边界，但还不是完整的企业 Agent。`name` 标识行为主体，`model` 提供推理能力，`workspace` 为指令、文件、计划、Memory、Skill 和任务产物提供外部空间，`RuntimeContext` 则把用户与 Session 身份带入当前调用。

接下来不应一次性打开所有能力，而应从任务成功标准反推需要的 Harness。例如，漏洞修复 Agent 至少需要读取代码、生成补丁、执行测试和验证安全扫描；如果计划未经确认不能修改代码，就需要 Plan Mode 与 Permission；如果分析和评审可以并行，就需要 Subagent；如果任务跨越多个调用，就需要外置状态和可恢复 Workspace。

### 3.2.1 按业务需求组合 Harness 能力

AgentScope 使用 Builder、Middleware 和工作区资产逐步叠加能力。下面的示例在最小 Agent 上增加计划、Todo、上下文压缩、大工具结果卸载和 E2B Sandbox：

```java
HarnessAgent agent = HarnessAgent.builder()
    .name("remediation-agent")
    .model(model)
    .workspace(Paths.get(".agentscope/workspace"))
    .enablePlanMode()
    .enableTaskList()
    .compaction(CompactionConfig.builder()
        .triggerMessages(30)
        .keepMessages(10)
        .build())
    .toolResultEviction(ToolResultEvictionConfig.defaults())
    .filesystem(new DockerFilesystemSpec()
        .image("ubuntu:24.04"))
    .build();

```

真正的构建工作不在于调用多少 Builder 方法，而在于定义这些能力之间的契约：

| 能力 | AgentScope 中的构建入口 | 应用团队需要决定什么 |
| --- | --- | --- |
| 指令与上下文 | `AGENTS.md`、附加 Context、Middleware | 指令层级、动态信息、Token 预算和冲突规则 |
| 状态与记忆 | Workspace、StateStore、Memory、Compaction | Session / Task 边界、写入规则、恢复和多租户隔离 |
| 计划与任务 | Plan Mode、Todo、Task State | 何时先规划、谁批准、阶段目标如何验收 |
| 能力资产 | Tool、Skill Repository、Subagent | 能力发现、版本、权限、委派和输出契约 |
| 执行环境 | FileSystem、Docker 或其他 Sandbox | 文件、网络、Secret、资源、快照和隔离范围 |
| 控制与交互 | Permission、Channel、Middleware | ALLOW / DENY / ASK、用户干预和事件映射 |
| 质量与反馈 | Trace、Verifier、评估接口 | 完成证据、观测字段和版本回归标准 |

稳定、确定性的步骤应尽量沉淀为 Tool、脚本或策略；需要模型理解目标和权衡方案的部分留在 Agent Loop；可能影响外部世界的动作统一经过权限和 Sandbox。这样构建出来的 Harness 才具有可测试边界，而不是由 Prompt 驱动的一组隐式行为。

### 3.2.2 从单机进程走向分布式服务

本地 HarnessAgent 解决的是单个 Agent 如何工作。要把它变成企业在线服务，还需要在外围建立多租户接入、任务调度、共享状态、隔离环境、能力网关和观测评估系统。

```mermaid
flowchart TB
    C[API、Web、App、IDE 与业务事件] --> G[企业 Agent 接入层<br/>身份·租户·配额·路由]
    G --> Q[Task Service 与任务队列]
    Q --> W[AgentScope Worker 集群]

    subgraph H[应用团队自主构建的 Harness]
        L[Agent Loop 与 Planning]
        C1[Context、State、Memory 与 Skill]
        A[Tool、Permission、Subagent 与 Verify]
        L <--> C1
        L <--> A
    end

    W --> H
    H <--> M[模型服务]
    H <--> S[(共享 Session、Task 与 Memory Store)]
    H --> X[Sandbox / Workspace 资源池]
    H --> T[企业 Tool、MCP、数据与远程 Agent]
    H --> O[Event、Trace 与 Evaluation]

```

在线实例不应依赖进程内消息历史恢复任务。应用团队需要把 Session、Task、Plan、子任务和 Artifact 映射到共享状态接口；为同一任务设置并发写入或执行租约；在 Worker 失效后从安全点恢复；按租户创建或复用 Sandbox；使用短时身份访问企业工具。物理存储、调度和容灾属于 Runtime，但 Harness 必须先定义相应逻辑契约。

工作区 Agent 的架构重心会有所不同：它可以直接运行在 IDE、CLI 或团队 Workspace 中，保留更长生命周期的文件和用户交互；但只要进入多人、多项目或后台执行，同样需要身份、状态、权限、Artifact 和 Trace 边界。

### 3.2.3 适用边界与构建交付物

Framework 路径适合业务逻辑独特、数据或执行环境不能交给外部托管、需要改变 Loop 或 Context 策略，或者企业希望沉淀统一 Agent 技术底座的场景。它也要求团队具备模型应用、分布式系统、安全和效果评估能力。

这一条路径在 Build 阶段至少应形成：可测试的 Harness 代码、Agent Contract、状态 Schema、Context Policy、Tool 与 Skill 清单、Environment Contract、Permission Policy、Verifier、事件模型和回归用例。只有模型与这些行为配置被共同版本化，线上结果才能被复现和回滚。

## 3.3 复用产品化的 Harness

Coding Agent 的生产实践，以及 Claw 形态的工作区助手已经形成一套可复用的工作模式：检查工作区、制定计划、调用文件和命令工具、维护 Session、请求权限、生成 Artifact，并在长任务中接受用户在执行过程中的干预。这套机制也适用于围绕文件、工具和可验证环境展开的企业任务，例如读取数据并调用分析脚本、采集日志并定位故障、汇总材料并生成报告。企业如果不需要从零设计这些通用行为，可以通过 CLI 直接使用，也可以通过 SDK 将产品化 Harness 嵌入业务应用，再接入业务工具、权限规则和验收标准。

### 3.3.1 区分 CLI、SDK、工作区助手

Coding Agent CLI 适合开发者直接在工作区中操作，SDK 适合将相同或相近的 Harness 嵌入既有应用，工作区助手则强调跨入口的连续使用和个人化状态。三者的区别不是模型能力高低，而是 Harness 由谁发起、状态由谁保存、事件由谁消费，以及面向个人工作区还是企业业务系统交付。

Qoder CLI 和 Qoder Agent SDK 是 Coding Agent 的代表案例。Agent SDK 是应用侧编程接口，负责提交目标与选项、消费事件、处理权限请求和续接 Session；配套的 CLI 运行组件负责运行 Qoder 产品提供的 Harness，在目标工作区规划任务、调用模型并执行工具。

工作区助手则把同类 Harness 扩展到更广泛的个人知识、办公协同、消息处理和自动化任务，OpenClaw、Hermes Agent 和 QwenPaw 可以作为代表。两者可以相互组合，也都不能仅凭产品侧 Session 或运行结果替代企业 Task、权限判定和 Outcome 验收。

### 3.3.2 Coding Agent CLI 与 SDK

Qoder CLI 和 Agent SDK 是这条路径的代表。Agent SDK 是应用侧编程接口，负责提交 Prompt 与 Options、消费事件和控制 Session；Qoder CLI 是底层 Agent Runtime，负责规划任务、调用模型并在目标环境中执行工具。SDK 包通常会携带兼容的 CLI Runtime，应用不必把 CLI 另外安装成一项远程服务。

直接使用 CLI 适合个人和团队工作区；使用 SDK 则可以把 Agent 接入 IDE、研发平台、故障处理系统、企业工作台或自动化任务。二者的区别不是模型能力，而是 Harness 由谁发起、怎样接收事件，以及企业是否需要建立自己的应用与控制面。

**用 Agent SDK 嵌入业务应用**

下面的 TypeScript 示例把成熟 Harness 嵌入一个漏洞修复服务。应用设置工作目录、可用工具集合和预授权范围，通过审批回调处理需要确认的操作，再持续消费文本、工具调用与运行结果：

```ts
import { accessTokenFromEnv, query } from '@qoder-ai/qoder-agent-sdk';

for await (const message of query({
  prompt: '分析 payment-service 的高危依赖漏洞，修改代码并补充测试；不要发布。',
  options: {
    auth: accessTokenFromEnv(),
    cwd: '/workspace/payment-service',
    tools: ['Read', 'Write', 'Edit', 'Glob', 'Grep', 'Bash'],
    allowedTools: ['Read', 'Glob', 'Grep'],
    permissionMode: 'default',
    async canUseTool(toolName, input, context) {
      // 宿主应用实现审批；取消或超时应拒绝执行。
      const approved = await requestToolApproval({
        toolName, input, signal: context.signal,
      });
      return approved
        ? { behavior: 'allow', updatedInput: input, toolUseID: context.toolUseID }
        : { behavior: 'deny', message: '操作未获批准。', toolUseID: context.toolUseID };
    },
  },
})) {
  if (message.type === 'assistant') {
    for (const block of message.message.content) {
      if (block.type === 'text') publishText(block.text);
      if (block.type === 'tool_use') publishToolEvent(block.name);
    }
  }
  // 保存运行结果；通过测试、安全扫描和业务验收后再确认 Outcome。
  if (message.type === 'result') await persistRunResult(message);
}
```

这段代码复用了任务规划、模型调用、工具执行、上下文与 Session 等 Harness 能力。tools 限定可用工具集合，allowedTools 仅预授权读取和检索工具；需要确认的文件修改或命令调用，由 canUseTool 交给应用审批。requestToolApproval、publishText、publishToolEvent 和 persistRunResult 均由宿主应用实现。审批界面应展示实际操作及其输入，并在拒绝、取消或超时时终止该操作。

企业还要把 cwd 指向受控 Workspace，不向该环境注入生产发布凭据，并通过身份与网络策略阻断生产发布通路，落实“不要发布”的限制。result 只作为运行结果保存；应用应依据变更文件、测试、安全扫描和业务状态验证成功标准，再确认业务 Outcome、交付成果并记录反馈。

SDK 还可以接入 MCP、Skill、Plugin、Subagent、Hooks、Memory 和外部 Session Store。构建时应优先使用已经存在的扩展点，而不是在外围 Prompt 中模拟相同机制；只有当现成 Harness 的行为与业务成功标准不匹配时，才评估是否需要转向 Framework 路径。

**将成熟 Harness 封装为分布式服务**

当然不能把一个 CLI 进程直接当作多租户在线服务，企业需要在 SDK 外围增加身份和任务控制面，并把每次 Agent 执行调度到受控 Worker 与 Workspace。

```mermaid
flowchart TB
    C[API、业务系统、IDE 与自动化任务] --> G[多租户接入层<br/>认证·租户·配额·路由]
    G --> T[Task / Session Service]
    T --> Q[任务队列与 Worker 调度]

    subgraph W[弹性 Agent Worker 池]
        S[Qoder Agent SDK<br/>应用接口]
        R[Qoder CLI Runtime<br/>Loop·Model·Tool·Permission]
        S --> R
    end

    Q --> S
    R --> X[每任务隔离的 Sandbox / Workspace]
    R --> M[Qoder 模型服务]
    R --> E[企业 Tool、MCP、Skill 与数据]
    S <--> SS[(外部 Session Store)]
    T <--> DS[(Task、Artifact 与业务状态)]
    P[租户策略、短时凭证与审批] --> S
    S --> V[Event、Streaming 与结果回传]
    V --> C

```

外部 Session Store 可以镜像 Session 历史，并允许后续请求在另一台主机上通过 `session_id` 继续执行。但它只负责 Session Transcript，不等于完整的企业任务存储，也不保存认证状态、应用配置、文件 Checkpoint 或保留策略。企业仍要分别管理 Task State、Artifact、Sandbox Snapshot、凭证和业务 Outcome。

共享 Session Store 还必须保证租户与项目键隔离、同一键的追加顺序、幂等写入和并发控制。Worker 失效后，任务服务先确认原行动和工作区状态，再决定 Resume、Retry 或转人工，不能因为 Session 能被读取就直接重放最后一次工具调用。

### 3.3.3 工作区助手

QwenPaw 官方将产品定位为可部署在本地或云端环境中的个人人工智能助手，并提供 Web Console、桌面应用、终端用户界面（Terminal User Interface，TUI）、CLI 和消息 Channel 等入口。其架构以 Agent Workspace 为持续边界，每个 Agent 对应一个工作区，工作区承载配置、Memory、Skill 和历史等状态；MCP、Subagent、Cron 与 Sandbox 则扩展能力调用、并行任务、定时执行和受控运行。这里的“云端环境”表示软件可以部署到云上，不等于官方提供了企业级托管 Agent 服务。

下面的命令只用于说明 QwenPaw 从初始化工作区到打开应用或进入 Coding 模式的基本入口，具体安装条件和命令应以所用版本的官方文档为准。

```plaintext
pip install qwenpaw
qwenpaw init --defaults
qwenpaw app
qwenpaw .
```

工作区助手带来的复用，不只是少写一段 Agent Loop 代码。用户通过不同 Channel 进入同一个 Agent 时，可以继续使用既有 Memory、Skill 和 MCP 工具；Cron 可以在独立 Session 中推进定时任务，Subagent 可以执行后台工作。企业仍要逐项确认这些状态是否具备所需的并发控制、恢复、保留和审计语义。以 QwenPaw 为例，官方文档明确提示后台 Subagent 不可恢复，Sandbox 在未启用约束时不会自动提供隔离，因此不能把功能可用直接等同于生产责任已经满足。

**将工作区助手接入企业应用与平台**

个人工作区中的连续体验，不能直接替代企业级任务服务。企业接入工作区助手时，需要在外围增加身份、租户、Task、审批和 Outcome 控制，并为每个用户、团队或任务明确 Workspace、Memory、Credential 与 Sandbox 的隔离边界。图 3-3 以 QwenPaw 为例展示目标架构：产品化 Harness 保留工作区、Memory、Skill、MCP、Subagent 和 Channel 等能力，企业接入层负责将其映射到业务对象和控制要求。

图 3-3　工作区助手的企业接入封装——以 QwenPaw 为例（目标架构示意）

![第3章2.svg](../assets/imgs/chapter-03/image-002.svg)

图中的多租户入口、任务队列和实例调度属于目标架构，不是对 QwenPaw 当前产品能力的直接陈述。QwenPaw Hub 可以让互信团队在一台服务器上使用各自实例，但官方将其标为早期版本，并明确不构成面向陌生用户的强多租户边界。企业不能把共享部署直接解释为强隔离平台，也不能因为工作区历史可读就机械重放失效前的高影响操作。恢复前仍要核对幂等键、外部系统状态和已生成 Artifact。

**适用边界与构建交付物**

这条路径适合希望复用产品化 Harness、工作区和多 Channel 能力，同时将 Agent 接入个人知识、研发协作、办公自动化或企业流程的团队。Coding Agent CLI 和 SDK 更适合围绕开发工作区进行直接操作或编程集成；工作区助手更适合需要持续 Memory、跨入口交互、定时任务和通用工具组合的场景。选择时应优先判断任务是否依赖代码级修改 Loop 或 Context、状态是否需要跨 Channel 延续，以及数据、凭证和执行环境能否进入该工作区。

构建阶段至少应形成产品与版本清单、Workspace 和 Memory 策略、Tool、MCP 与 Skill 清单、Channel 接入、身份与 Credential 边界、Sandbox 策略、Task 与 Session 映射、Event 与 Artifact 处理、业务 Verifier 和退出机制。若任务效果依赖修改底层规划算法、Context 编译顺序或特殊状态迁移，而产品没有相应扩展点，高代码 Framework 路径可能更合适；若任务需要强多租户、弹性调度和长时恢复，也不能仅依赖个人工作区或单个助手进程。

## 3.4 基于模型构建 Agent

Qoder Cloud Agents 把通用 Harness 与运行基础进一步服务化，相比 SDK 侧重将成熟 Harness 的执行能力嵌入应用，Qoder Cloud Agents 围绕目标、执行、成果交付和结果反馈组织任务过程，云端托管为这一过程提供运行基础。 

沿用前面的漏洞修复案例，企业通过 SDK 构建服务时，还需要部署和调度承载 SDK 的 Worker 与 Workspace，为任务准备执行环境，并建设面向业务的会话服务。采用 Qoder Cloud Agents 后，平台承担基础 Agent Loop、Session 推进、工具运行和 Serverless 的隔离环境，持续执行漏洞分析、代码修改和测试，向应用交付变更文件与执行结果。企业的集成重点由组织一次次执行，转向定义任务目标、处理必要干预和验收最终成果。

企业仍负责接入代码仓库和业务工具、映射用户身份与权限、管理业务任务状态，并定义审批和验收流程。应用侧也需处理事件消费与断线续接。任务是否达到成功标准，应结合变更文件、测试、安全扫描和真实业务状态判断；提交或发布生产环境仍由企业策略决定。

### 3.4.1 用四个对象定义托管任务

Qoder Cloud Agents 使用四个核心对象组织构建与运行：

| 对象 | 作用 | 企业主要配置 |
| --- | --- | --- |
| Agent | 可复用的 Agent 定义 | 模型、System Prompt、工具、Skill 和行为配置 |
| Environment | Session 使用的容器运行环境 | 依赖、启动配置、资源、环境变量和凭证 |
| Session | 一次具体任务或持续交互实例 | Agent、Environment、用户目标和业务关联信息 |
| Event | Session 的输入与实时执行事件 | 用户消息、状态、工具、进度、结果和系统联动 |

构建流程可以归纳为五步：准备访问身份，创建 Environment，定义 Agent，绑定二者创建 Session，最后接通事件通道并发送 user.message。使用 SSE 时，应先确认连接建立，再提交任务；历史事件可通过列表接口分页读取。

```mermaid
flowchart LR
    D[定义 Agent<br/>Model·System·Tool] --> S[创建 Session]
    E[配置 Environment<br/>Container·Dependency·Secret] --> S
    U[企业任务] --> V[发送 user.message]
    S --> V
    V --> H[托管 Harness 与 Sandbox]
    H --> O[Event Stream<br/>State·Tool·Message·Result]

```

### 3.4.2 通过 API 创建并运行 Agent

下面的精简示例创建一个 Agent，将它与已有 Environment 绑定为 Session，先建立事件订阅，再提交任务。示例分两个终端执行：终端 A 创建 Session 并保持 SSE 连接，终端 B 使用相同访问身份和 Session ID 提交任务。确认 A 收到 HTTP 200 与 text/event-stream 响应头后，再执行 B 中的请求。真实应用应使用服务身份、Secret 管理和错误处理。

```bash
# 终端 A：创建 Agent 和 Session，再建立事件订阅。
AGENT_RESPONSE=$(curl -s -X POST "$QODER_API_BASE_URL/api/v1/cloud/agents" \
  -H "Authorization: Bearer $QODER_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "remediation-agent",
    "model": "ultimate",
    "system": "分析依赖漏洞并生成可审批变更，不得直接发布生产环境。",
    "tools": [{
      "type": "agent_toolset_20260401",
      "enabled_tools": ["Bash", "Read", "Write", "Edit", "Glob", "Grep"]
    }]
  }')
AGENT_ID=$(echo "$AGENT_RESPONSE" | jq -r '.id')

SESSION_RESPONSE=$(curl -s -X POST "$QODER_API_BASE_URL/api/v1/cloud/sessions" \
  -H "Authorization: Bearer $QODER_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"agent\":\"$AGENT_ID\",\"environment_id\":\"$ENV_ID\"}")
SESSION_ID=$(echo "$SESSION_RESPONSE" | jq -r '.id')

printf 'SESSION_ID=%s\n' "$SESSION_ID"

# 先订阅：-i 显示响应头；确认 HTTP 200 和 text/event-stream 后再发送任务。
# 此连接持续运行，展示后续任务的进度与结果。
curl -i -sS -N "$QODER_API_BASE_URL/api/v1/cloud/sessions/$SESSION_ID/events/stream" \
  -H "Authorization: Bearer $QODER_ACCESS_TOKEN" \
  -H "Accept: text/event-stream"

# 终端 B：单独执行以下命令，不要排在终端 A 的长连接命令后顺序执行。
# 配置相同的 QODER_API_BASE_URL、QODER_ACCESS_TOKEN，
# 并将 SESSION_ID 设置为终端 A 输出的值；确认 A 已成功建连。
curl -sS -X POST "$QODER_API_BASE_URL/api/v1/cloud/sessions/$SESSION_ID/events" \
  -H "Authorization: Bearer $QODER_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"events":[{"type":"user.message","content":[{"type":"text","text":"修复 payment-service 的高危依赖漏洞并运行测试"}]}]}'
```

应用可以从事件流中接收 session.status\_running、agent.message、agent.tool\_use、agent.tool\_result 和 session.status\_idle 等事件，并把它们映射到自己的任务状态、进度界面、审批系统和 Trace。session.status\_idle 表示当前回合结束；任务是否成功完成，还应结合交付成果和验收标准判断。Agent 定义可以被多个 Session 复用，每个 Session 则承载独立任务与隔离执行环境。

自 2026 年 8 月 24 日起，不带 Last-Event-ID 的新 SSE 连接只接收建连之后产生的事件，因此需要先确认订阅建立，再提交任务。应用应在事件处理成功后保存事件 ID，断线时通过 Last-Event-ID 续接，并按事件 ID 去重；已有或遗漏的事件通过 List Events 分页读取。提交任务若超时，应先核对服务端状态，再决定是否重试，避免重复执行。

从应用集成看，Qoder Agent SDK 主要提供调用和扩展成熟 Harness 的编程接口；QCA 则以业务目标为起点，组织任务持续执行、成果交付与结果反馈。应用通过 Agent、Environment、Session 和 Event 将任务委派给平台，并围绕交付成果进行验收。企业仍需保存业务 task\_id 与 Cloud session\_id 的映射，关联 Artifact、测试和扫描结果、审批记录及业务 Outcome，使执行过程与任务完成结果可以相互追溯。

### 3.4.3 接入企业工具、权限和反馈闭环

托管 Agent 只有连接企业能力后才能完成真实业务任务。企业需要将 Tool、MCP、代码仓库、数据和凭证接入 Environment 或受控 Gateway，并依据当前租户和任务目的限制访问。托管 Sandbox 提供执行隔离，企业 Policy 仍要决定业务上是否允许一次读取、修改、发送或发布。

```mermaid
flowchart TB
    C[企业应用、业务事件与调度器] --> API[Cloud Agents API]
    API --> S[Session]

    subgraph P[Qoder Cloud Agents 托管平面]
        S --> H[托管 Harness<br/>Loop·Context·Tool·Permission]
        H --> X[Session 隔离 Sandbox]
        H --> V[Event Stream / Webhook]
    end

    T[企业 Tool、MCP、数据与短时凭证] --> H
    V --> C
    X --> A[Artifact 与任务结果]
    A --> C
    C --> E[企业审批、Trace、Outcome 与 Evaluation]

```

平台可以推进基础 Harness、执行工具并产生 Event，但不能替企业定义业务正确性。例如，平台能够运行测试和创建变更文件，是否允许发布生产环境仍取决于企业审批；Agent 声称修复完成，也需要企业依据安全扫描、测试和真实系统状态验收。

因此，Managed Agents 的开发重点是把责任边界写成机器可执行契约：Agent 能看见什么工具，Environment 能访问什么资源，凭证以谁的身份发放，哪些事件需要人工参与，什么 Outcome 才能使企业 Task 完成。

### 3.4.4 适用边界与构建交付物

托管路径适合长时异步任务、后端 API 集成、批量处理、计划任务，以及希望快速获得弹性 Runtime 和隔离 Sandbox 的团队。

Build 阶段至少应形成：版本化 Agent 定义、Environment 模板、Tool / MCP 与 Skill 清单、企业身份和权限策略、业务 Task 与 Session 映射、Event 消费与 Channel 适配、Artifact 去向、Verifier 和评估基线。托管越多，企业越应把工具、数据、权限和成功标准定义清楚，否则只是把不明确的 Agent 行为转移到了云端。

## 3.5 使用云产品快速构建 Agent

高代码框架强调对 Harness 机制的代码级控制，Coding Agent CLI 与 SDK 强调复用既有工作方式，Managed Agents 强调把约定范围内的 Harness 和运行责任交给服务提供方。除此之外，企业还可以使用 Agent 云产品，将模型、指令、知识、Memory、Tool、Skill、Credential 和运行环境等资源通过产品界面或开放接口组合为 Agent。其价值不只是减少初始化代码，而是让 Agent 从创建开始就进入统一的资源、身份、版本和质量体系。

阿里云智能体构建和治理平台 AgentCore 可以作为这一路径的代表案例。官方将其能力概括为构建与运行、协作与治理、观测与评估，并提供 Agent 创建与管理、模型连接、Skill、MCP 工具、凭证、Team、Channel、运行监控和 Trace 等能力。

### 3.5.1 云产品构建入口的能力边界

云产品快速构建不等于用可视化页面替代工程设计。产品可以预置模型访问、能力目录、运行环境、身份策略、观测和评估入口，但业务目标、任务状态、数据边界、工具授权和 Outcome 标准仍由企业定义。即使 Agent 可以在平台内完成配置和运行，也不能据此假定它已经满足多租户隔离、长任务恢复、业务审批或生产准入要求；这些能力仍要按具体产品版本、部署方式和企业策略逐项确认。

这一路径与 Managed Agents 的区别主要在控制面。Managed Agents 侧重把一个已经定义的 Agent 作为服务持续执行；Agent 云产品还承担 Agent 的创建、资源装配、版本管理和发布配置。二者可能由同一产品同时提供，也可能组合使用，因此不能按自建、半托管、全托管简单排列为成熟度阶梯。

### 3.5.2 从共享资源组合为可交付 Agent

企业在云产品中构建 Agent 时，应先从任务契约反推资源组合，而不是先把所有可用模型、知识和工具都加入 Agent。AgentCore 官方资料明确列出 Agent 与模板、模型连接、Skill、MCP 工具、凭证、Team、Channel、运行状态、Trace 和评估等能力，并在场景说明中涉及知识库、记忆库和沙箱运行时。表 3-6 将这些产品能力映射为构建对象和企业责任；具体对象名称、地域、计费和可用范围仍应以正式使用时的对应版本文档为准。

| 构建对象 | 在云产品中的作用 | 企业需要确定的内容 |
| --- | --- | --- |
| Agent 定义与版本 | 组织模型、指令、能力引用和默认运行配置 | 目标、输入输出、行为边界、版本归属和变更策略 |
| Model、Knowledge 与 Memory | 提供推理能力、受控知识和跨轮信息 | 模型选择、数据范围、检索策略、写入规则和保留周期 |
| Tool、MCP 与 Skill | 连接确定性能力、外部系统和可复用任务方法 | 能力契约、参数校验、风险分级、审批点和失败处理 |
| Credential 与 Identity | 约束 Agent 代表谁访问何种资源 | 身份映射、最小权限、短时凭证、租户边界和审计要求 |
| Runtime、Sandbox 与 Channel | 承载执行、隔离环境并连接用户或业务入口 | 资源规格、网络边界、Workspace、超时恢复和交互方式 |
| Event、Trace 与 Evaluation | 记录过程事实并形成质量反馈 | Task 关联、Artifact 去向、评估集、准入阈值和 Outcome 判定 |

表 3-6　云产品快速构建 Agent 的对象与责任

这些对象共同构成构建输入，不意味着它们都属于 Harness 编排层。Agent 定义中的 Loop、Context 和能力选择属于 Agentic Core；Runtime、Sandbox 和资源调度属于生产执行基础；身份策略、观测和评估更多由平台控制面承担。沿用第 02 章的责任域，可以避免把在一个产品界面中完成配置误解为所有能力属于同一个架构层。

### 3.5.3 从平台内 Agent 定义到业务交付

云产品构建出的 Agent 需要经过版本化、评估和准入后再进入业务入口。平台侧的发布或部署状态只说明某个 Agent 定义已经可以被调用，不等于业务任务已经完成。企业还要建立业务 Task 与平台执行对象的映射，把 Event、Trace 和 Artifact 关联到具体版本，并由业务应用或其授权 Verifier 根据真实系统状态形成 Outcome。

构建阶段至少应交付可追溯的 Agent 定义、资源引用、身份与权限策略、运行环境配置、Channel 或 API 接入、测试样例、评估基线和回滚方案。对于会修改外部系统的 Agent，还要把审批、幂等、超时、补偿和人工接管条件落实为确定性机制。这样，云产品带来的速度提升才不会以放弃业务控制为代价。

### 3.5.4 与多源 Agent 管理能力衔接

AgentCore 既提供平台内 Agent 构建入口，也将自研 Agent、开源 Harness 和商业 SaaS Agent 作为统一管理对象，并通过身份鉴权、Team 协作、运行观测和评估能力连接构建与治理。两种角色通过同一组公共对象衔接：平台内创建的 Agent 直接形成受管定义，外部 Agent 则通过平台支持的接入方式注册或调用。平台统一的是身份、资源、版本、任务和质量事实，不要求外部 Agent 改用同一种 Harness。

## 3.6 用 Agent Platform 规模化交付企业 Agent

前四节解决的是单个 Agent 从哪里起步，以及 Harness、运行和控制能力由谁实现。企业同时拥有多个团队、多种 Agent 和不同执行环境后，如果每个项目分别建设模型接入、Tool 目录、凭证管理、Session、Sandbox、部署、观测和评估，不仅会重复投入，也会形成彼此隔离的 Agent、数据和权限孤岛。

因此，企业需要在这些构建入口之上形成共同的 Agent Platform。平台不仅提供原生 Agent 创建入口，还要接入和规模化交付由高代码框架、Coding Agent CLI 与 SDK、Managed Agents 和其他远程服务形成的多源 Agent，并覆盖其运行、治理、协作、观测、评估和持续优化。阿里云 AgentCore 在本章中同时承担这两个视角：第 3.5 节讨论其平台内构建能力，本节讨论其对自研 Agent、开源 Harness 和商业 SaaS Agent 的统一管理，以及由此形成的规模化交付能力。

### 3.6.1 企业级 Agent Platform 的能力边界

本白皮书将企业级 Agent Platform 定义为面向多个团队、多个 Agent 和多种执行形态的平台系统。它以统一对象和接口支持 Agent 的创建、接入、交付、运行、治理、协作、观测和优化，提供共享能力资源、身份策略和质量数据，并通过分布式执行基础连接模型、Runtime、Sandbox、Tool 与远程 Agent。

Harness 决定单个 Agent 如何理解目标和采取行动，Agent Platform 则决定企业中的一组 Agent 如何被创建、发现、复用、组合、交付、运行和治理。平台可以提供或托管 Harness 编排能力，但不能因此替业务应用定义任务目的、授权范围和 Outcome 标准；平台负责汇聚执行证据，业务应用或其授权 Verifier 负责最终业务判断。表 3-7 从创建、接入、交付、运行、治理、协作、观测和优化等方面归纳平台能力。

表 3-7　企业级 Agent Platform 的主要能力

| 平台能力 | 主要管理对象 | 对构建和交付的价值 |
| --- | --- | --- |
| Agent 创建与目录 | Agent Definition、Template、Version、Owner、Tenant | 统一创建入口、资产目录、所有权、复用、变更和回滚 |
| 异构接入与交付 | Workload、Worker、Endpoint、Deployment、Channel | 接入不同 Framework、SDK Worker 和托管 Agent，并面向应用或用户交付 |
| 能力与数据资源 | Model、Tool、MCP、Skill、Memory、Knowledge、Credential | 复用经过审核的企业能力，避免重复集成和凭证散落 |
| 协作与任务组织 | Agent Team、Task、Dependency、Delegation、Handoff、Event、Approval | 组织本地与远程 Agent 分工，管理依赖、结果汇聚和人工干预 |
| 运行与资源调度 | Runtime、Worker、Queue、Sandbox、Workspace、Browser、CPU、GPU、Budget | 按租户、优先级、数据位置和预算分配资源，支持弹性、隔离和恢复 |
| 身份与策略治理 | User、Service Identity、Role、Policy、Secret、Audit | 统一人和 Agent 的身份委派、最小权限、审批和审计边界 |
| 观测、评估与优化 | Event、Trace、Artifact、Outcome、Evaluator、Feedback、Cost | 跨实现关联执行过程和业务结果，为验收、回归、灰度和持续优化提供依据 |

这里的统一不等于把所有能力收进一个单体系统。Registry、Runtime、Sandbox、Gateway、Memory、Observability 和 Evaluation 可以由不同服务实现；Agent Platform 的关键，是让这些服务共享一致的身份、租户、版本、Task 和质量语义，并向开发团队提供一条可重复的企业交付路径。责任域回答谁负责什么，执行面、数据与资源面、控制面则回答能力在哪里运行和由谁托管，两种视图不能互相替代。

### 3.6.2 让原生与外部 Agent 进入同一个平台

Agent Platform 应统一公共对象和接入契约，而不是抹平 Harness 实现差异。平台内原生构建的 Agent 可以直接引用共享模型、工具、知识、身份和运行配置；基于高代码框架构建的 Workload、基于 Coding Agent SDK 封装的 Worker，以及 Managed Agents 或其他远程端点，则保留各自的 Loop、Context、工具执行和状态方式。平台通过 Agent Definition、Task、Session、Event、Identity、State、Checkpoint、Artifact、Trace 和 Outcome 等公共对象连接这些来源。

图 3-5 以目标架构展示同一 Agent Platform 的两个作用面。AgentCore 等平台既可以提供原生构建入口，也可以通过统一契约接入外部异构 Agent。统一的是目录、身份、资源、任务、运行和质量事实，而不是要求不同实现采用同一种内部架构。执行位置可以位于平台托管域、企业自建集群和工作区，也可以是远程托管 Agent 或软件即服务（Software as a Service，SaaS）Agent。

图 3-5　原生与外部 Agent 接入企业 Agent Platform（目标架构示意）

![第3章3.svg](../assets/imgs/chapter-03/image-003.svg)

图中的平台内原生入口和三类外部入口需要通过不同方式进入共同对象体系，平台内外的责任也不能因统一管理而混淆。

平台对多源 Agent 的统一管理至少要满足三个条件。首先，版本与归属必须可追溯，不能只记录一个 Agent 名称而不知道实际模型、Harness 配置、能力和环境版本。其次，Event、Artifact 和 Trace 必须关联 Task、Identity 与 Tenant，才能支持跨系统审计和成本归因。最后，远程 Agent 不能只返回自然语言结论，还应提供可验收的 Artifact、事件或环境事实，否则平台无法把它纳入统一质量闭环。

### 3.6.3 从规模化运行走向协作、治理和优化

资源调度是 Agent Platform 区别于单一开发框架的重要能力。Agent Task 可能持续数小时，并在模型推理、工具执行、人工审批和外部事件之间反复等待；平台不应让等待中的任务长期占用完整计算资源，而应将可恢复状态与执行实例解耦，根据任务优先级、租户配额、Sandbox 类型、数据位置、模型容量和成本预算进行排队与调度。

平台还需要把 Agent Team 视为一组具有目标、身份、权限和依赖关系的任务主体，而不是把每次 Agent 调用当作互不相关的 API 请求。协作关系应明确委派、移交、共享状态、结果聚合和失败传播规则；平台负责提供通信、注册、调度和治理机制，具体业务分工仍由应用和 Harness 定义。这样既能支持 AgentScope 子任务、SDK Worker 与远程托管 Agent 的组合，也能避免多个 Agent 在共享凭证和无边界上下文中相互触发。

观测和评估则把交付延伸到持续优化。平台需要把模型调用、工具执行、状态转换、Artifact、人工反馈、Outcome、成本和安全事件关联到同一 Task 与版本，才能判断问题来自模型、Context、Tool、环境、权限还是任务设计。调优产生的 Prompt、模型、路由、Skill、Tool 或 Harness 变更不能直接影响运行环境，而应回到构建阶段，通过回归评估、安全检查、灰度和回滚门禁后再进入生产。

从构建阶段看，Agent Platform 的最小交付物包括统一 Agent 定义与版本规范、能力资源目录、异构接入适配器、身份与租户模型、Runtime Profile 与资源配额、Task、Session、Event、Artifact、Trace 和 Outcome 契约，以及发布前评估基线。

## 3.7 本章小结

构建企业级 Agent 的核心，是决定怎样实现 Harness，以及由谁承担其行为、运行和效果责任。高代码框架提供代码级控制，AgentScope 展示了如何自主组合 Harness；Coding Agent CLI 和 SDK 或工作区助手提供产品化 Harness，QwenPaw 展示了如何通过持续工作区、Memory、Skill、MCP 和 Channel 复用这些能力。Managed Agents 将约定范围内的 Harness 和运行基础服务化，Qoder Cloud Agents Managed Mode 展示了托管执行与企业验收的责任边界；Agent 云产品则提供原生创建和共享资源入口，阿里云 AgentCore 展示了如何把构建与平台能力衔接。

四类构建入口不是成熟度高低关系，也不必互斥。企业应根据任务结构、定制深度、数据边界、环境影响、团队能力和交付方式选择最低充分方案。无论选择哪种入口，都要区分 Task 与 Session、Event 与 Trace、Artifact 与 Outcome，把权限与验证落实为确定性机制，并让模型、Harness 配置、能力、环境、策略和评估基线共同受版本控制。

当多个团队和多种 Agent 同时存在时，Agent Platform 不只是创建 Agent 的入口，而是支持 Agent 创建、接入、规模化交付、运行、治理、协作、观测和优化的综合平台。AgentCore 同时体现了平台内原生构建和多源 Agent 统一管理两个作用面；具体到 AgentScope、QwenPaw 和 Qoder Cloud Agents 的接入，仍应以统一契约表达目标架构，不能推断为已发布的直连能力。平台统一公共对象和质量事实，但不抹平实现差异，也不替业务应用定义任务目的和正确性。这一边界使不同入口构建的 Agent 能够进入同一套运行、治理与调优体系，并为后续章节建立共同的工程接口。

接下来，第 04 至第 06 章将从任务、信息、行动三类工程契约继续展开 Agent 的构建。