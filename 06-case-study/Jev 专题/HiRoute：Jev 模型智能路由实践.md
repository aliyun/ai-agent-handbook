# HiRoute：Jev 模型智能路由实践

长程 Agent 任务包含资料整理、方案设计、代码实现和结果核验等不同工作。让模型能力随工作阶段变化，就能把强模型用在关键判断，把经济模型用在大量资料整理和常规执行上。

[HiRoute](https://github.com/higress-group/HiRoute) 把 Jev 接到模型调用入口，判断当前任务所需的能力，并评价此前阶段的执行表现。HiRoute 根据这些结构化判断选择执行模型，原有 Agent 继续使用熟悉的工具和工作流，完成读文件、调用工具和交付任务。

这套分工把省钱与按需补足能力接到同一条 Agent 工作流中：消息系统调研的两组对照结果中，API 等价成本降低超过 **91%**；HTTPX 编码案例自动完成三次换模，通过 **343 项验收断言**。下面结合百炼 System One 接入示例和真实产品界面，介绍这套实践。配图可点击放大。

## 1. 把判断接到现有 Agent 工作流

HiRoute 是运行在本机的开源路由引擎，Desktop 与 CLI 共用本地 Gateway。Agent 使用一份稳定的路由计划，背后的执行模型可以按工作阶段变化。

![HiRoute 准备状态，百炼 System One 返回判断，HiRoute 应用策略，原有 Agent 执行并留下下一次决策的证据](../../assets/imgs/hiroute-jev/decision-loop-zh.png)

图 1：HiRoute 将结构化判断、模型选择与执行反馈接成闭环。

收到新用户消息时，HiRoute 重新判断所需能力；同一轮符合复用条件的工具续接沿用已有模型选择。这样既能按任务调整能力，也能减少重复决策的开销。

有两种接入方式：

| 方式 | 用法 | 适用场景 |
| --- | --- | --- |
| 内置决策模型 | 在 HiRoute 中保存百炼 System One 连接，由内置适配器构造问题和转换答案 | 直接配置路由 |
| 自定义扩展 | 部署参考 HTTP 服务，接收 HiRoute 决策请求，再调用 Jev | 自行管理服务或修改供应商集成 |

两种方式都遵循相同分工：**决策模型提供判断，HiRoute 执行策略，执行模型完成任务。** 阈值、模型组与故障接力统一由 HiRoute 管理。[接入与配置说明](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/decision-extensions/README.zh-CN.md)

## 2. 分开提出三个问题

路由时，下面三个问题需要分别定义：

| 问题 | Jev 问题类型 | HiRoute 消费的结果 |
| --- | --- | --- |
| 当前做什么？例如写稿、审稿 | `Choice` | 任务类别，选择分支 |
| 当前工作需要多强的能力？ | `Score` | 各复杂度档位的概率，在分支内选择模型组 |
| 上一实际执行阶段做得如何？ | 独立的 `Score` | 按固定评分标准计算的胜任度 |

“智能省钱”只有一个任务范围，配置省钱组和主力组，不需要再把简单、复杂建成两个任务类别。“自定义分支”先选择任务类别，再判断该类别内的复杂度；只配置一个模型组的类别无需复杂度问题。

### 2.1 按工作要求定义复杂度

在公开的消息系统调研实验中，简单工作包括从既有资料提取、归类、翻译、核对引用和规范格式。复杂工作包括处理冲突材料、分析多个系统组合后的保证，以及推导故障顺序与副作用。

复杂度条件描述的是完成任务所需的推理能力。例如，大量已有事实的整理适合省钱组，跨系统保证和故障交互的推导适合主力组。把条件落在业务语义上，模型选择就更贴近实际工作。[任务条件示例](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/experiments/cases/research-cost-quality/jev-policy.json)

### 2.2 一次调用，问题彼此独立

Jev 可以在同次请求中回答多个独立问题。HiRoute 一次提交类别问题，以及各双组类别的假设性复杂度问题，答案返回后再读取选中类别的复杂度，减少决策往返。

例如，写稿与审稿都配置两组模型时，可以问：

1. 当前主要意图属于写稿还是审稿？
2. 假设交给写稿分支，所需工作有多复杂？
3. 假设交给审稿分支，所需工作有多复杂？
4. 有可评分的历史阶段时，上一实际阶段完成得如何？

若选中审稿，就读取第 3 个答案；该答案无效时，使用审稿类别的主力组。胜任度始终评价上一实际执行阶段：上一阶段是写稿，就使用写稿的评分标准。[问题设计与结果映射](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/decision-extensions/api/system-one-design.md)

![任务类别选择分支，复杂度选择组，胜任度评价上一实际阶段；同次 System One 请求中的问题彼此独立](../../assets/imgs/hiroute-jev/independent-questions-zh.png)

图 2：分别判断任务类别、当前复杂度与上一阶段表现，再由 HiRoute 组合成路由结果。

### 2.3 概率、评分和置信度分别使用

复杂度使用概率分布中的简单档概率，决定当前任务进入哪个模型组。

胜任度采用 **0 / 0.5 / 1** 三个等距锚点。对应的 System One `Score` 返回 0–2 范围内的值，适配器用 `score / 2` 转为 HiRoute 的 0–1 范围，用于评价阶段完成质量。`confidence` 则表达判断的不确定性。

下面采用**百炼 System One API**，模型为 `decision-model-preview`。示例使用 Token Plan 个人版接入点，需要对应的套餐 API Key（`sk-sp-` 前缀）；将自己的密钥配置到环境变量 `DASHSCOPE_API_KEY`。使用业务空间时，按 API 参考换成含 `{WorkspaceId}` 的地域域名，并使用该业务空间的 API Key。[百炼 API 参考](https://help.aliyun.com/zh/model-studio/decision-model-api)、[Token Plan 接入说明](https://help.aliyun.com/zh/model-studio/token-plan-decision-model)

下面用一个示例说明 System One 请求与路由结果的映射：

```json
{
  "model": "decision-model-preview",
  "state": {
    "latest_user": [{"kind": "text", "text": "根据已提供的资料，补齐来源表格。"}],
    "visible_conversation": [{
      "user": [{"kind": "text", "text": "整理材料中的主要结论及引用。"}],
      "status": "completed",
      "steps": [[{"kind": "text", "text": "已输出表格，但两条关键结论缺少来源支撑。"}]]
    }],
    "history_partial": false,
    "assessment_from": 0
  },
  "questions": {
    "q0": {
      "type": "score",
      "instructions": "只判断 state.latest_user 所要求的当前工作，不评价历史执行表现。",
      "criteria": [
        "资料充分，可直接提取、核对和格式化已有事实。",
        "需要推导新结论、解决冲突或分析复杂故障交互。"
      ]
    },
    "q1": {
      "type": "score",
      "instructions": "评价 state.visible_conversation 从 state.assessment_from 开始的已执行阶段，不评价尚未执行的当前任务。",
      "criteria": [
        "关键事实失真、缺少进展或需要大幅纠正。",
        "已有可用成果，但存在明显遗漏或证据问题。",
        "事实与引用准确，完成该阶段要求。"
      ]
    }
  }
}
```

将上述 JSON 保存为 `decision-request.json`，通过 HTTP 调用：

```sh
curl --fail-with-body -sS \
  -X POST 'https://token-plan.cn-beijing.maas.aliyuncs.com/compatible-mode/v1/systemone' \
  -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
  -H 'Content-Type: application/json' \
  --data-binary @decision-request.json
```

精简响应：

```json
{
  "answers": {
    "q0": {"type": "score", "score": 0.09, "probabilities": {"0": 0.91, "1": 0.09}},
    "q1": {"type": "score", "score": 0.96, "probabilities": {"0": 0.04, "1": 0.96, "2": 0}}
  }
}
```

这里的简单概率为 **0.91**，上一阶段胜任度为 **0.48**。当前任务适合省钱组；当这个低分来自完整证据，并适用于同一类别、计划版本与评分标准时，HiRoute 切到主力组接力。首次请求只提交复杂度问题，后续再加入阶段评分。

## 3. 把答案变成明确的路由规则

HiRoute 将复杂度与阶段反馈组合成清晰的双组选择规则：

| 条件 | 选择 |
| --- | --- |
| 简单概率低于阈值 | 主力组 |
| 简单概率达到阈值，且存在本次适用的完整低分 | 主力组 |
| 简单概率达到阈值，且没有上述低分 | 省钱或常规组 |
| 类别有效，但所需复杂度答案无效 | 该类别的主力组 |

HiRoute 默认使用 **0.8** 的简单概率阈值和 **0.5** 的胜任度下限，驱动省钱组与主力组之间的选择。

低分保护使用本次新产生、证据完整且适用于当前类别的评分，并匹配已发布计划与评分标准。未评分或证据不完整的阶段单独标记，继续按复杂度规则选择模型组。

![简单概率为 0.91 时，上一阶段胜任度 0.48 仅在本次新评分、完整证据、同类别及同计划与标准下触发主力保护](../../assets/imgs/hiroute-jev/competence-guard-zh.png)

图 3：复杂度与阶段胜任度共同决定模型组，兼顾省钱和关键任务所需能力。

HiRoute 也支持模型回切：每条新用户消息重新判断，任务回到简单工作时可以再次使用省钱组。省钱组或常规组的候选不可用时，则接力主力组并记录选择原因，方便区分任务需求、阶段表现与模型可用性。[模型组选择机制](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/crates/gateway/src/core_runtime/classification/group_policy.rs)

### 超时与故障回退

Jev 参考扩展每次决策只请求上游一次，并统一管理超时。决策失败时，智能省钱使用启发式回退；自定义分支使用默认类别，有主力组时优先使用主力组。

观测记录展示实际模型、用量、耗时与阶段评分，便于复盘模型选择和评估成本收益。[参考扩展使用说明](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/decision-extensions/extensions/jev-decider/README.zh-CN.md)

## 4. 实践效果：降低成本，让强模型接力关键任务

### 4.1 消息系统调研：把强模型用在关键判断

任务覆盖六种消息系统的资料核验与 Kafka/SQL 一致性决策备忘录。三种模式使用相同资料与要求：全 GPT-6 Astra、Qwen-3.8 Flash 与 Astra 混合、全 Qwen，各完成三次交付。

HiRoute 混合模式把直接资料整理交给 Qwen，把关键方案判断交给 Astra，让不同能力的模型各司其职。

| 评价项 | HiRoute 混合 | 全 Astra | 全 Qwen |
| --- | --- | --- | --- |
| 三次合计卡片正确率，含引用支撑 | 98.61% | 99.72% | 98.80% |
| 无重大错误的关键备忘录 | 3/3 | 3/3 | 1/3 |

**关键备忘录三次均无重大错误，与全 Astra 的关键任务交付结果一致。** 相较全 Qwen 的一次，混合模式在这个任务中完成了更多无重大错误的关键交付。

相较全 Astra，两组对照结果中，HiRoute 混合模式的 **API 等价成本分别降低 92.01% 和 91.39%**，已计入 Jev 决策调用和重试成本。把经济模型用于大量资料整理、把强模型用于关键判断，为长程任务提供了控制成本的实用路径。[完整实验与结果](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/experiments/cases/research-cost-quality/README.md)

### 4.2 长程编码：反馈能改变下一阶段的能力

2026-10-04 的公开案例中，原生 Codex 为 HTTPX 增加同步与异步 JSON 流式迭代。一次初始指令后，HiRoute 根据阶段表现自动完成 **Qwen → Astra → Qwen → Astra** 的模型接力，贯穿源码理解、上下文整理和代码交付。

| 阶段 | 记录到的工作与反馈 |
| --- | --- |
| Qwen 起步 | 阅读源码和测试，进行接口探查 |
| 首次切到 Astra | 上一阶段评分 0.41，低于 0.5；本次 Astra 请求用于上下文摘要 |
| 回到 Qwen | Astra 摘要阶段评分 0.775，经济优先策略允许 Qwen 接续 |
| 再次切到 Astra | 后续仍在研究，评分 0.485；Astra 接续实现、测试和修复 |

任务耗时约 **31 分 36 秒**，完成实现、测试与修复，并通过 **343 项独立验收断言**。两次原生上下文压缩前后发生三次换模，Agent 在连续工作流中完成了不同模型之间的接续。

该案例采用当时的路由策略，展示了 HiRoute 根据实际表现让强模型接力，并完成从探查到交付的完整任务。[运行过程与验收结果](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/experiments/cases/unattended-engineering/handoff-notes.md)

### 4.3 在产品中看清换模过程

HiRoute Desktop 将路由过程呈现在会话和计划视图中：每个阶段由哪个模型执行、胜任度如何、哪些阶段还在等待评分，都能直接查看，方便复盘模型接力并调整路由计划。

![真实 HiRoute Desktop 会话界面按实际模型展示执行阶段，包含 Qwen 的 0.48、Astra 摘要的 0.78 和最终阶段的未评分状态](../../assets/imgs/hiroute-jev/desktop-session-competence-zh.png)

图 4：HiRoute Desktop 会话视图中的 HTTPX 历史任务回放，按实际模型展示执行阶段和胜任度。

![真实 HiRoute Desktop 计划视图分别汇总省钱组与主力组的已评分和待评分阶段，提供查看阶段入口](../../assets/imgs/hiroute-jev/desktop-plan-competence-zh.png)

图 5：计划视图按模型组汇总阶段表现，单独展示已评分和待评分状态。[产品截图来源](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/news/competence-product-views.json)

## 5. 从最小配置开始使用

### 5.1 配置一个双组计划

1. 在 HiRoute 的“模型 → 决策模型”添加连接，选择 **百炼 Token Plan**，核对完整端点 `https://token-plan.cn-beijing.maas.aliyuncs.com/compatible-mode/v1/systemone`、模型 `decision-model-preview` 和自己的套餐 API Key，保存并测试连接。使用按量业务空间时，改选“百炼业务空间”，按官方文档填写带业务空间 ID 的完整地域接入点。
2. 建立“智能省钱”计划，选择该连接，在省钱组和主力组中分别配置可用执行模型。
3. 按自己的任务定义简单／复杂条件与胜任评分锚点，先固定阈值，再开展代表性任务测试。
4. 发布计划，将其接入现有 Agent；观察实际组、实际模型、选择原因和后续阶段评分。

![真实 HiRoute Desktop 智能省钱配置界面展示百炼 Token Plan 的 Qwen 3.8 Flash 省钱组和 Qwen 3.8 Max 主力组](../../assets/imgs/hiroute-jev/desktop-smart-saving-zh.png)

图 6：HiRoute 智能省钱双组配置界面，Flash 作为省钱组，Max 作为主力组。[产品截图来源](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/news/ILLUSTRATIONS.md)

需要修改供应商集成时，可以部署[可独立安装的 Jev 参考扩展](https://github.com/higress-group/HiRoute/tree/5232db559bb8e856d44549d5e1488c7cf4f78d83/decision-extensions/extensions/jev-decider)，让 HiRoute 通过 `/v1/decisions` 接入自定义决策服务，由服务调用百炼 System One。

### 5.2 查看公开实验结果

在 HiRoute 仓库根目录，使用 Python 3.11+ 执行：

```sh
python3 experiments/reproduce.py fetch
python3 experiments/reproduce.py verify
python3 experiments/reproduce.py report
```

以上命令下载公开的调研与编码实验记录，校验文件并重新计算结果，无需调用付费模型。[实验复现说明](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/experiments/README.md)

开始自己的实践时，可以选取代表性任务，对比单模型与混合路由的成本和交付质量，并保存运行记录。结合实际模型、用量和阶段表现，逐步调整适合自己的路由计划。

## 6. 可迁移的实践方法

- **把问题落在业务语义上。** 分类描述当前意图，复杂度描述所需推理，胜任度评价已发生的工作；每个问题注明评价对象。
- **用明确规则选择模型。** 根据概率和阶段评分选择模型组，配置超时与缺失结果的回退策略。
- **让反馈绑定具体阶段。** 使用适用类别和评分标准评价执行表现，让换模与回切有据可查。
- **把成本和交付放在一起看。** 用相同任务与验收要求比较单模型和混合路由，结合实际用量评估收益。

参考实现：[HiRoute 公共版本](https://github.com/higress-group/HiRoute/tree/5232db559bb8e856d44549d5e1488c7cf4f78d83)。
