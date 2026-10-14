# HiRoute：Jev 模型智能路由实践

用 Agent 做一项稍长的任务，经常会遇到这样的情况：资料整理得挺快，一到方案推导就开始绕圈；代码已经写出来了，但关键边界没有处理好。这时，我们往往得自己判断：是再提醒它一句，还是换一个更强的模型？

如果全程使用强模型，成本又会花在大量读文件、整理材料和格式调整上。一次任务里的工作难度一直在变，执行效果也只有做过之后才看得出来。模型选择如果能跟着这些变化走，会是什么样？

[HiRoute](https://github.com/higress-group/HiRoute) 尝试把这件事接到现有 Agent 的工作流里：**用 Jev 判断当前任务需要多强的能力，同时评价上一阶段完成得怎么样，再为接下来的工作选择模型。** 用户正常追问、指出遗漏，就能提供有价值的反馈；在无人值守的任务中，阶段执行记录也能成为判断依据。

前一篇[《深度解析 Jev 模型：如何快速做结构化决策》](./深度解析%20Jev%20模型：如何快速做结构化决策.md)介绍了 Jev 的决策能力。这篇结合 HiRoute 的实际使用，看看怎样把这些能力用到模型路由中。后面的接入和代码示例统一使用**百炼 System One API**。

## 从一次追问说起

假设你让 Agent 分析一套“数据库写入后发送消息”的方案。它给了一个看起来完整的回答，但漏掉了其中一个故障场景。你接着说：

> 你还没考虑数据库提交成功、消息发送失败的情况，把这部分补上，再给出建议。

这句话里其实有两件事。第一件是接下来要做的工作：补充跨系统故障分析。第二件是对上一阶段的反馈：此前的方案遗漏了关键情况。

HiRoute 把当前要求与此前的执行记录一起交给 Jev，分别判断这两件事。如果当前工作需要更强的推理能力，或者上一阶段的表现触发了胜任度保护，HiRoute 就让主力模型接手。等任务转入资料整理、格式调整等工作，后续决策又可以选择经济模型。

用户仍然用熟悉的方式交流，读结果、提问题、补要求。**这些自然对话可以参与下一次模型选择，不需要额外给模型打分。** 当然，一句“继续”只是继续任务；新增要求也可能只是工作范围变了。Jev 会结合上下文判断反馈的含义。

### 如果用户不在旁边呢？

还有一种越来越常见的用法：一次说清目标，让 Agent 自己持续推进。例如，在支持 `/goal` 的 Agent 中，给出这样的目标：

> 为 HTTP 客户端补上同步和异步 JSON 流式读取，覆盖增量读取、编码和迭代器关闭，完成相关测试并修复失败项。

Agent 按目标规划、实现、验证和修复。HiRoute 在后续决策时整理可见的阶段记录，Jev 按配置好的评分标准评价已经发生的工作：是否取得了有效进展，产出是否回应了任务要求，是否还存在明显遗漏。阶段表现需要更强能力时，HiRoute 可以让主力模型接力。

这里，`/goal` 是调用方 Agent 的目标执行入口。目标和进展通过请求中的任务内容与历史进入判断；Agent 负责推进任务和完成验收，Jev 提供阶段评价，HiRoute 据此选择模型。这样，即使用户没有中途发消息，执行过程仍然能为后续路由提供反馈。

![用户追问与自主执行记录汇入历史上下文，由 Jev 判断当前能力需求和上一阶段表现，再由 HiRoute 选择模型](../../assets/imgs/hiroute-jev/feedback-routing-zh.png)

图 1：有人参与时利用对话反馈，自主执行时利用阶段记录，两种方式都能支持模型接力。

HiRoute 会在新用户消息等决策点重新判断。能够识别为同一轮的工具续接通常沿用已有选择，减少重复决策的开销。

## 实际用下来，带来了什么？

### 一次无人中途介入的编码任务

2026 年 10 月 4 日的一次公开实践中，原生 Codex 为 HTTPX 增加同步与异步 JSON 流式迭代。用户只在开始时给出任务，之后没有中途提示，也没有人工修改代码。HiRoute 在连续工作流中完成了 **Qwen → Astra → Qwen → Astra** 的接力。

前半段主要是源码阅读和接口探查。第一次切到 Astra 后，它完成了上下文摘要，随后由 Qwen 继续。后续阶段再次触发胜任度保护，Astra 接手实现、测试与修复，最终通过 **343 项独立验收断言**，全程约 **31 分 36 秒**。

这个案例采用当时的路由策略，展示了阶段反馈怎样在无人任务中参与模型接力。[完整过程与结果](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/experiments/cases/unattended-engineering/handoff-notes.md)

在 HiRoute Desktop 中，可以直接看到每个阶段由哪个模型完成，以及后续记录的胜任度：

![HiRoute Desktop 的真实会话界面，按 Qwen 和 Astra 展示 HTTPX 任务的执行阶段与评分](../../assets/imgs/hiroute-jev/desktop-session-competence-zh.png)

图 2：HTTPX 历史任务回放。模型接力发生在哪一段，可以沿着会话查看。

![HiRoute Desktop 的真实计划界面，按省钱组与主力组汇总阶段表现](../../assets/imgs/hiroute-jev/desktop-plan-competence-zh.png)

图 3：计划视图汇总各模型组的阶段表现，便于了解模型分工和调整计划。

### 把强模型用在关键判断上

另一组消息系统调研任务，包含六种消息系统的资料核验，以及 Kafka/SQL 一致性决策备忘录。HiRoute 将大量资料整理交给 Qwen-3.8 Flash，把关键方案判断交给 GPT-6 Astra。

三种模式使用相同资料与要求，各完成三次交付：

| 评价项 | HiRoute 混合 | 全 Astra | 全 Qwen |
| --- | --- | --- | --- |
| 三次合计卡片正确率，含引用支撑 | 98.61% | 99.72% | 98.80% |
| 无重大错误的关键备忘录 | 3/3 | 3/3 | 1/3 |

混合模式的关键备忘录三次均无重大错误。在两组对照结果中，相较全 Astra，**API 等价成本分别降低 92.01% 和 91.39%**，其中已经计入 Jev 决策调用和重试成本。[实验任务与结果](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/experiments/cases/research-cost-quality/README.md)

这也是动态路由的直接价值：大量常规工作可以交给经济模型，遇到关键推导或执行困难，再补足所需能力。

## HiRoute 怎样使用 Jev？

HiRoute 是运行在本机的开源路由引擎。Agent 通过 HiRoute 调用模型，继续使用原有的文件、工具和任务流程。HiRoute 则在调用入口准备问题，把 Jev 的判断转换成模型选择。

![HiRoute 准备任务与历史，百炼 System One 返回判断，HiRoute 选择模型，Agent 执行并留下后续反馈](../../assets/imgs/hiroute-jev/decision-loop-zh.png)

图 4：一次决策连接着此前的执行和接下来的工作。

这里最值得展开的是三个问题：**当前做什么、当前有多复杂、上一阶段做得如何。** 在 HiRoute 的决策接口中，前两种分别用 `categorical` 和 `ordinal` 表达；阶段评价使用独立的 `assessment`。

| 要判断的事情 | HiRoute 中的表达 | 百炼 System One 问题类型 |
| --- | --- | --- |
| 任务类别，如写稿、审稿 | `categorical`，从类别中选择一项 | `choice` |
| 工作程度，如简单、复杂 | `ordinal`，返回有序档位的概率 | `score` |
| 上一阶段的完成质量 | `assessment`，返回胜任度 | 独立的 `score` |

内置接入会自动完成这层转换。配置 HiRoute 时写好任务条件和评分标准即可；下面拆开看一下实际发生了什么。

### ordinal：这项工作需要多强的能力？

先从“智能省钱”开始。这个模式配置省钱组和主力组，Jev 判断当前工作更接近哪一档。

档位条件最好写成具体的工作要求。例如，资料整理任务可以这样定义：

| 档位 | 条件 |
| --- | --- |
| `simple` | 资料充分，可直接提取、归类、核对和格式化已有事实 |
| `complex` | 需要推导新结论、处理冲突材料，或分析复杂故障交互 |

这就是一个 `ordinal`：档位有从低到高的顺序。当前 HiRoute 模型路由使用简单、复杂两档。

如果用户说“根据已提供的资料，补齐来源表格”，HiRoute 会把条件转换成 System One 的 `score` 问题。下面是一次首次请求的完整示例，没有历史评分目标：

```json
{
  "model": "decision-model-preview",
  "state": {
    "latest_user": [{"kind": "text", "text": "根据已提供的资料，补齐来源表格。"}],
    "visible_conversation": [],
    "history_partial": false,
    "assessment_from": null
  },
  "questions": {
    "q0": {
      "type": "score",
      "instructions": "判断 state.latest_user 所要求的当前工作需要的处理程度。",
      "criteria": [
        "资料充分，可直接提取、归类、核对和格式化已有事实。",
        "需要推导新结论、处理冲突材料，或分析复杂故障交互。"
      ]
    }
  }
}
```

把它保存为 `decision-request.json`，将百炼 Token Plan Key 配置到 `DASHSCOPE_API_KEY`，即可调用：

```sh
curl --fail-with-body -sS \
  -X POST 'https://token-plan.cn-beijing.maas.aliyuncs.com/compatible-mode/v1/systemone' \
  -H "Authorization: Bearer $DASHSCOPE_API_KEY" \
  -H 'Content-Type: application/json' \
  --data-binary @decision-request.json
```

假设返回以下结果，数值用于说明映射过程：

```json
{
  "answers": {
    "q0": {
      "type": "score",
      "score": 0.07,
      "probabilities": {"0": 0.93, "1": 0.07}
    }
  }
}
```

`0`、`1` 对应传入的两个档位。HiRoute 将它还原成 `simple: 0.93`、`complex: 0.07`，取简单档概率与计划阈值比较。默认阈值是 **0.8**，本次没有历史低分保护，因此进入省钱组。

这里用的是 **`probabilities` 中的简单档概率**。System One 还可以返回 `confidence`，它与任务复杂度、阶段完成质量各有含义。接口详情见[百炼 API 文档](https://help.aliyun.com/zh/model-studio/decision-model-api)和 [Token Plan 接入说明](https://help.aliyun.com/zh/model-studio/token-plan-decision-model)。

### categorical：先分清做什么，再判断需要多强的能力

有些工作流需要更细的分工。例如，写稿与审稿适合不同的模型组合：写稿关注材料组织和表达，审稿关注来源核验和论证检查。

这时可以创建自定义路由，用 `categorical` 选择任务类别。它的选项没有高低顺序，`writing` 和 `review` 分别表示两种工作。某个类别配置了常规组和主力组，就再带一个 `ordinal`，判断这一类工作本次有多复杂。这个类内判断叫 `refinement`。

例如，下面的审稿类别把“范围明确的措辞核查”和“全篇来源、因果论证核查”区分开：

```json
{
  "kind": "categorical",
  "instructions": "按当前请求的主要意图选择类别；条件重叠时取最符合主要意图的一项，均不匹配时选择 writing。",
  "options": [
    {
      "id": "writing",
      "criterion": "撰写、续写或改写文章，包括根据反馈修稿。"
    },
    {
      "id": "review",
      "criterion": "审阅、核实文章并提出意见。",
      "refinement": {
        "kind": "ordinal",
        "instructions": "假设当前任务交给审稿分支，判断审稿工作所需程度。",
        "levels": [
          {"id": "simple", "criterion": "范围明确的格式、措辞与已知事实核查。"},
          {"id": "complex", "criterion": "需要逐项核对来源、检查因果推断或全篇论证。"}
        ]
      }
    }
  ]
}
```

这是 HiRoute 的决策定义片段。内置适配器将它转换成一个 `choice` 问题和一个审稿 `score` 问题，一起发给百炼。如果返回类别为 `review`、简单档概率为 `0.28`，HiRoute 得到的结果相当于：

```json
{
  "decision": {
    "kind": "categorical",
    "choice": "review",
    "refinement": {
      "kind": "ordinal",
      "probabilities": {"simple": 0.28, "complex": 0.72}
    }
  }
}
```

于是，这次任务进入审稿分支，再根据复杂度选择审稿主力组。上例中的写稿类别只配置一个常规组，因此没有类内复杂度判断。

如果写稿和审稿都配置双组，HiRoute 会一次问三个独立问题：属于哪类、假设交给写稿有多复杂、假设交给审稿有多复杂。返回后，只读取选中类别的复杂度。这样便能在一次 System One 调用中完成分类和程度判断。

![类别、复杂度和阶段表现是三个独立问题，HiRoute 根据各自含义组合结果](../../assets/imgs/hiroute-jev/independent-questions-zh.png)

图 5：先把问题拆清楚，再由 HiRoute 应用路由规则。

## 历史上下文，让 Jev 看懂任务的来龙去脉

实际使用中，用户很少每次都把背景重新讲一遍。“按第二个方案继续”“把刚才那个问题补上”，都要结合前文才能理解。同样一句“补齐来源”，可能只是填入已有链接，也可能需要重新核查互相冲突的材料。历史会影响对当前任务的理解，也会影响复杂度判断。

HiRoute 给 Jev 的信息分成几部分：

| 信息 | 用来做什么 |
| --- | --- |
| 当前用户输入 | 理解本轮要求，以及用户明确给出的反馈 |
| 可见的历史执行轮次 | 了解此前做过什么、产出了什么，以及工具活动的状态 |
| 上一阶段的评分范围 | 把评价落在具体执行阶段上 |
| 任务条件与评分标准 | 明确如何分类、如何判断复杂度、怎样评价完成质量 |

独立的小任务可以只看当前输入。连续任务中的指代、遗漏和进展，则需要前文。尤其是胜任度评价，需要看到被评价阶段的实际记录。**这也是 HiRoute 能同时支持对话反馈和无人任务的基础。**

历史变长时，内置接入会从较早的完整轮次开始裁剪，保留当前输入和判断问题。如果裁剪影响了被评分阶段，会标记证据不完整。读者自己实现扩展时，也可以沿用这种组织方式，让 Jev 清楚地区分当前任务与此前表现。

### 阶段表现怎样影响下一次选择？

HiRoute 用 **0、0.5、1** 三个锚点描述阶段完成质量。例如，技术调研可以把标准写成：

| 分数锚点 | 阶段表现 |
| --- | --- |
| 0 | 关键事实失真、没有有效进展，或需要大幅纠正 |
| 0.5 | 已有可用成果，但存在明显遗漏或论证问题 |
| 1 | 事实与引用准确，完成了该阶段要求 |

这些标准会作为独立的 `score` 问题发给 Jev。System One 的三个等级对应 0、1、2，HiRoute 用返回的 `score / 2` 转为 0～1 的胜任度。

假设当前简单概率为 **0.91**，上一阶段返回 `score: 0.96`，转换后的胜任度就是 **0.48**。当前工作本身适合省钱组，但上一阶段的低分可以触发主力接力。HiRoute 默认胜任度下限为 **0.5**，会使用本次适用于同一任务类别和评分标准的完整阶段评分。

![简单概率和阶段胜任度如何共同决定省钱组与主力组的选择](../../assets/imgs/hiroute-jev/competence-guard-zh.png)

图 6：当前工作不复杂，也可能因为上一阶段需要补足能力而交给主力组。

在有人参与的场景里，“遗漏了故障场景”这样的反馈会帮助 Jev 理解之前的产出。在无人执行场景里，则主要结合任务要求与可见的阶段记录评价进展。第一次调用尚无可评阶段时，先根据当前任务选择模型；后续记录逐渐积累，阶段评价也就能够参与决策。

## 先配置一个能用的计划

理解了原理，实际接入只需要几个步骤：

1. 在 HiRoute 的 **模型 → 决策模型** 中添加连接，选择**百炼 Token Plan**，填写套餐 API Key。完整端点为 `https://token-plan.cn-beijing.maas.aliyuncs.com/compatible-mode/v1/systemone`，模型为 `decision-model-preview`，保存并测试连接。使用百炼业务空间时，选择对应接入方式，填写官方文档中的业务空间地址。
2. 创建**智能省钱**计划，选择这个决策连接，为省钱组和主力组配置可用模型。
3. 根据自己的工作写简单、复杂条件及阶段评分标准。例如，资料摘录和格式调整属于简单工作，处理冲突证据和推导新方案属于复杂工作。初次使用可以沿用默认阈值。
4. 发布计划，将 Agent 接入 HiRoute。执行任务后，在会话里查看实际模型、选择原因和阶段表现。

![HiRoute Desktop 的真实智能省钱配置界面，Flash 用于省钱组，Max 用于主力组](../../assets/imgs/hiroute-jev/desktop-smart-saving-zh.png)

图 7：一个 Flash / Max 双组配置示例。

### 自定义分支怎么配？

需要按任务分工时，在“怎样使用模型”中选择**自定义分支**，然后为每个分支填写名称和任务条件。比如，“写稿”接收撰写、续写和改写，“审稿”接收来源核验与论证检查。这些任务条件就是分类时使用的分支提示词，可以直接在 HiRoute 中修改。

接着，为每个分支添加常规模型；需要按复杂度和胜任度进一步选模的分支，再添加主力模型。下面的审稿分支就配置了两组，分别处理常规核查和需要更强能力的工作。

![HiRoute Desktop 真实自定义分支配置界面，展示审稿任务条件以及常规、主力两组模型](../../assets/imgs/hiroute-jev/desktop-custom-branches-zh.png)

图 8：在同一个分支里配置任务条件与模型组，HiRoute 先分类，再决定使用哪一组。

### 阈值和提示词，都可以在界面里调整

前面用到的 0.8 和 0.5 都是默认值。展开**判断设置**，就能按自己的业务调整阈值和提示词，无需编写服务：

| 可以调整的内容 | 在哪里配置 | 调整的作用 |
| --- | --- | --- |
| 分支提示词 | 每个分支的“任务条件” | 定义哪些任务应该进入这个分支 |
| 简单概率阈值 | 判断设置 → 简单概率阈值 | 决定达到多高的简单概率才使用常规或省钱组 |
| 胜任度阈值 | 判断设置 → 胜任度下限 | 决定上一阶段低于多少分时启用主力保护 |
| 程度提示词 | 判断设置 → 什么是简单、复杂任务 | 编辑判断要求，以及简单、复杂任务的具体条件 |
| 胜任度提示词 | 判断设置 → 如何判断胜任 | 编辑评分要求和 0 / 0.5 / 1 三个评分标准 |

例如，审稿任务更重视证据和论证，可以把简单概率阈值调到 **0.85**，胜任度下限调到 **0.6**。在同样的判断结果下，这会更容易选择主力组。写稿分支则可以继续沿用计划默认设置。

操作时，展开审稿分支的“判断设置”，点击**单独调整**，再填写本分支的阈值和提示词。各分支最初跟随“计划默认判断设置”；单独调整后使用自己的整套设置，也可以点击“恢复计划默认”重新跟随。

![HiRoute Desktop 真实分支判断设置界面，展示单独调整后的 0.85 简单概率阈值、0.6 胜任度下限和中文程度提示词](../../assets/imgs/hiroute-jev/desktop-branch-judgment-zh.png)

图 9：审稿分支单独设置阈值与程度提示词，让 Jev 按这类工作的要求作出判断。

这些配置保存并发布后生效。可以先在 HiRoute 中调整条件和阈值，结合会话记录观察效果；如果还需要接入团队知识、组合自己的规则或改变上下文组织方式，再往下扩展自定义服务。

## 把自己的 Jev 策略接进来

当界面中的分支条件、程度判断和评分设置还不能满足需求时，可以把判断逻辑放进自己的服务。例如，按项目加载团队术语和审稿规范，或把已有规则系统的结果一起提供给 Jev。HiRoute 的自定义扩展接口为这类做法提供了接入点。

扩展是一个 HTTP 服务。HiRoute 向它发送决策定义、当前输入、可见历史和评分目标；它调用百炼 System One，再返回 `decision` 和可选的 `assessment`。模型组、阈值和实际模型选择仍在 HiRoute 中配置。[完整接口说明](https://hiroute.ai/docs/decision-api/)

### 从官方参考扩展开始

HiRoute 提供了 Python 参考实现。使用 Python 3.12 或以上版本，在 HiRoute 仓库根目录安装：

```sh
python3 -m venv .venv-jev
.venv-jev/bin/pip install -e ./decision-extensions/extensions/jev-decider
```

下面通过 Python 配置参考服务，直接接入百炼。保存为 `run_bailian_decider.py`，运行前准备好环境变量 `DASHSCOPE_API_KEY`：

```python
import os

from aiohttp import web
from jev_decider.server import create_app
from jev_decider.settings import Settings

settings = Settings(
    api_key=os.environ["DASHSCOPE_API_KEY"],
    upstream_url="https://token-plan.cn-beijing.maas.aliyuncs.com/compatible-mode/v1/systemone",
    model="decision-model-preview",
    request_timeout_seconds=10,
    max_request_bytes=256 * 1024,
    max_concurrency=32,
    inbound_header_name=None,
    inbound_header_value=None,
)
web.run_app(create_app(settings), host="127.0.0.1", port=8080)
```

```sh
.venv-jev/bin/python run_bailian_decider.py
```

在 HiRoute 的 **模型 → 决策模型 → 接入自定义扩展** 中，填写完整地址 `http://127.0.0.1:8080/v1/decisions`，连接超时可设为 15 秒。保存并测试连接，再到路由计划中选择它并发布。如果服务运行在其他机器上，将地址改为 HiRoute 能访问的地址，并按参考文档配置认证。

这里有两个地址：HiRoute 访问你的 `/v1/decisions`，你的服务访问百炼 `/systemone`。服务会负责两种请求格式之间的转换。

### 一个具体改法：让 Jev 理解团队的业务术语

假设团队把“事实卡片”和“决策备忘录”作为两种常见交付物。只看这些名字，模型可能不知道它们各自要求什么。可以在参考扩展的 `jev_decider/decision.py` 中，为上游 `state` 增加一份简短说明。

在 `prepare_decision()` 构造完 `body` 之后、裁剪历史之前，加入：

```python
body["state"]["team_context"] = {
    "事实卡片": "按来源整理已知事实，每个结论附上可追溯的引用。",
    "决策备忘录": "比较候选方案，说明取舍，并分析故障场景及后果。",
}
for question in body["questions"].values():
    question["instructions"] += (
        " 可参考 state.team_context 理解团队术语，"
        "并按本问题传入的 criteria 作出判断。"
    )
```

重启服务后，Jev 就能结合这份团队背景理解任务，同时继续使用 HiRoute 每次传入的类别、复杂度条件和评分标准。你也可以把这份说明从配置文件加载，供多个计划共用。

参考实现里有两个主要入口：`prepare_decision()` 将 HiRoute 定义转换成 Jev 问题，`decision_response()` 将 Jev 答案转换回 HiRoute 结果。前面展示的 `categorical` 响应，就是扩展应返回的形状；`ordinal` 则返回各档位的完整概率。有历史评分目标时，还可以一起返回：

```json
{
  "decision": {
    "kind": "ordinal",
    "probabilities": {"simple": 0.91, "complex": 0.09}
  },
  "assessment": {
    "score": 0.48,
    "partial": false
  }
}
```

改好以后，可以用“整理已有材料”“核查冲突来源”“根据上一轮反馈修稿”这几类任务试一遍，在 HiRoute 会话里观察分支、模型和评分。后续再按自己的任务特点调整上下文和判断条件。[参考扩展源码与使用说明](https://github.com/higress-group/HiRoute/tree/5232db559bb8e856d44549d5e1488c7cf4f78d83/decision-extensions/extensions/jev-decider)

## 写在最后

模型选择很难在任务开始时一次定好。用户会补充要求，任务会从整理转向推导，模型也可能在某个阶段遇到困难。HiRoute 把这些变化接到了路由里：用 Jev 理解当前工作、评价此前表现，再决定接下来由谁完成。

对日常使用者来说，可以继续自然地提问和反馈，让模型选择跟着任务走；对运行长程任务的开发者来说，可以把目标、阶段记录和评分标准接起来，让模型在自主执行中接力。想进一步定制时，同一套决策 API 也为业务上下文和自己的判断方法留出了入口。

从一个双组计划开始，选一项你熟悉的真实任务，看看哪些工作适合经济模型、哪些阶段值得交给主力模型。这往往比一开始就设计复杂策略更容易找到收益。

参考实现：[HiRoute 开源代码](https://github.com/higress-group/HiRoute/tree/5232db559bb8e856d44549d5e1488c7cf4f78d83)。
