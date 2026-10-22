# 让 Agent 学会判断：从 JEV 接入到完整 Harness 决策流程

大语言模型让 Agent 能够理解任务、生成内容和调用工具。随着任务流程变长，另一类需求也越来越突出：在每个执行节点，系统需要做出一个具体判断。当前该暴露哪些工具？检索材料是否支持这句话？这次操作是否满足执行条件？这些问题的结果最终要进入程序，决定下一步如何运行。

TypeSafe 推出的 **JEV** 正是面向这类需求的模型。TypeSafe 将这一模型类别称为 **System One**：接收上下文与类型化问题，直接返回选项、评分和概率，供软件进行分支、排序和路由。这个名字借用了《思考，快与慢》中“系统一”的概念，强调快速、聚焦的判断。它适合把一个大问题拆成若干具体判断，再由代码组合结果。概念定义见 [TypeSafe System One 官方介绍](https://docs.typesafe.ai/concepts/system-one)。

普通生成模型主要围绕文本生成工作，可以写回答、代码和解释，也能通过结构化输出返回 JSON。JEV 则围绕类型化决策和概率校准训练：开发者预先定义问题和答案空间，模型对给定材料进行判断，返回程序可直接使用的结果。比如，对客服工单选择处理团队，对回答检查事实依据，或对风险给出等级评分，都可以用这种方式表达。它与生成模型在 Agent 流程中承担不同职责，复杂分析和内容生成仍由生成模型完成。

概率让应用有机会把“不确定”纳入流程。当证据不足时，系统可以保留原路线、补充材料或请求人工复核。TypeSafe 所说的概率校准，关注一组预测的概率与实际结果频率是否相符，并不保证某一次判断正确；应用仍需用自己的业务样本验证阈值和采用策略。

**AgentScope 现已正式支持 JEV，将 System One 的结构化判断接入 Agent 的完整任务流程。** 具体来说，通过AgentScope Java 中的 `agentscope-extensions-jev`，开发者可以直接调用 JEV Client 和评审组件，也可以在 Harness 中使用工具选择、模型路由、执行防护、上下文治理、检索证据处理、回答修订、任务监督与轨迹评估等能力。

这项支持让开发者能够明确组织判断与执行的关系：应用提供候选、事实和约束，JEV 返回类型化结果，Harness 在对应环节采用结果，并留下可供评估的运行记录。下面从基础概念、典型场景和实际接入三个方面，介绍如何在 AgentScope Java 中使用 JEV。完整能力入口见 [JEV 模块文档](https://java.agentscope.io/v2/zh/jev/index)。

## 结构化判断如何进入 Agent 系统
JEV 接收上下文和结构化问题，返回概率、选项或评分。AgentScope 没有把它注册为聊天 `Model` provider，而是通过 `JevClient` 和上层组件接入；用户回答、代码补丁和复杂分析仍由生成模型完成。

### JEV、生成模型与 Harness 各自负责什么
可以把 JEV 理解为通过 TypeSafe System One 接口提供结构化判断的模型。调用方先定义“需要判断什么”，再提供业务材料；结果遵循预先定义的问题类型，适合进入程序分支。比如应用已经拿到订单记录和一份回答草稿，此时需要的是“记录是否支持这份回答”的判断，而不是再生成一段面向用户的回复。

生成模型负责分析、生成回答和提出工具调用；JEV 负责对指定问题给出结构化判断；Harness 则负责把这些判断放在合适的执行位置，管理工具、上下文、预算和状态。三者可以配合使用，也可以分开接入：一个普通 Java 服务只做草稿审核时，直接调用客户端或 Judge 就够了。

确定性的规则仍有自己的位置。用户是否有退款权限、订单是否已经退款，可以由身份系统和业务数据库直接检查；回答是否遗漏退款条件、检索材料是否包含诱导指令，则需要理解语义。接入时应先明确哪些事实由代码核验，再把需要语义判断的问题交给 JEV。

### 用 state 提供材料，用 question 定义标准
一次 `SystemOneRequest` 包含共享的 `state` 和按 ID 命名的问题。`state` 可以放用户请求、工具结果、政策或草稿；问题描述这些材料应满足的条件。问题 ID 用于在结果中找到对应答案，同一次请求可以包含多个不同 ID 的问题。

例如，state 中放入“业务记录：尚未执行退款”和“草稿：退款已经完成”，问题应是“业务记录是否支持草稿中的退款状态”。这样得到的概率针对一个明确命题。只问“这个回答好吗”，却不提供政策、事实或评价标准，难以形成可复用的判断。

| 问题类型 | 返回内容 | 适合回答的问题 |
| --- | --- | --- |
| `NoulQuestion` | 陈述为真的概率 | 这个工具是否适用？这句话是否有证据？ |
| `ChoiceQuestion` | 选项、概率分布和置信度 | 在已配置的路线中选哪一条？ |
| `ScoreQuestion` | 等级分布、加权分数和置信度 | 风险严重程度如何？回答覆盖了多少需求？ |


### 如何理解概率、置信度与不确定性
假设某次 `NoulAnswer.noul()` 返回 `0.92`，它表示模型对当前陈述为真的概率判断，不表示操作已经成功，也不表示在你的业务上测得了 92% 的准确率。Choice 返回的是给定候选集合内的选择及分布；Score 的数值要结合定义的等级理解。概率与置信度是决策输入，是否足以采用仍取决于业务阈值和独立评测。

类型化结果便于程序直接处理，但格式正确不等于判断正确。比如查询订单与条件退款可能同时适用，需要逐工具独立判断；选择一个模型路线才适合用单选。概率阈值需要用自己的业务样本校准，不能把示例中的 `0.8` 当作通用标准。

在基本类型之上，`JevJudge` 支持复用评审条件，并区分 `PASS`、`FAIL`、`INCONCLUSIVE` 和 `ERROR`。应用能够分别处理通过、明确失败、证据不足和调用故障。详见[问题类型与状态契约](https://java.agentscope.io/v2/zh/jev/concepts)和[评审定义](https://java.agentscope.io/v2/zh/jev/guides/judge-api)。

## 从一次条件退款看完整流程
假设用户要求：“查一下订单，如果还没发货就退款，并告诉我结果。”完整的处理过程需要把判断放在不同位置。

推理前，工具选择保留查询和退款工具；执行退款前，防护检查当前证据是否支持这次调用。知识检索提供退款政策，证据处理过滤可疑指令，同时保留与用户预期冲突但有用的政策。生成回答后，审核器检查是否遗漏条件、是否把“已提交申请”说成“退款已到账”；必要时只修订草稿。调用结束后，轨迹评估再检查工具使用、回答依据与需求覆盖。

这些环节可以分别启用。退款工具适用，不代表退款条件已经满足；一次调用获准执行，不代表业务操作已经成功；回答审核通过，也不能代替订单系统的执行收据。

## 执行前：选工具、选模型，再检查具体操作
### 工具选择支持多选与有界上下文
`JevToolSelectionMiddleware` 在每轮推理前对可选工具逐一评估适用性，再按数量限制筛选。它可以同时保留查询与退款，也可以在普通问候时明确不提供业务工具。必要工具另行保留，不计入可选数量。

当前默认上下文策略为 `RECENT_WINDOW`：最近 8 条非空文本消息，总文本预算 8000 字符。应用可以调整预算，改为只发送最新用户文本，或使用完整会话。较小窗口能限制判断输入，但也可能丢失早期线索，需要结合任务长度评测。

明确判断所有业务工具都不适用，与判断失败采用不同处理：前者可以只保留必要工具；不确定、超时或非法响应则回退原工具目录。筛选改变的是主模型能看到的候选，不改变工具权限。配置与分支示例见[工具选择指南](https://java.agentscope.io/v2/zh/jev/guides/tool-selection-api)。

### 路由结合阶段、能力、容量和配额
除了调用级模型选择，`JevPhaseRouting` 支持为规划、执行等路线设置有序候选池。宿主提供模型能力、上下文容量、输出预留和配额，先排除不合格候选，再进行选择。开发者可以显式开始阶段，也可以让 JEV 在合格路线中判断，并在候选支持的范围内建议思考等级。

同一次 Agent 调用复用选择，实际派发前仍复核候选条件；候选失效后回退原模型。阶段由应用显式切换，不会因为中间工具输出而自行换阶段。`JevTeamPlanner` 则可为明确阶段推荐已授权、可用的团队成员，实际分派仍由调度方负责。详见[阶段路由](https://java.agentscope.io/v2/zh/jev/guides/phase-routing-api)和[团队建议](https://java.agentscope.io/v2/zh/jev/guides/team-routing)。

### 执行防护检查已经形成的调用
`JevAutoModeMiddleware` 面向具体工具调用做执行前检查。例如，退款工具虽然进入了候选目录，但订单状态尚未查明时，实际退款调用仍需要被检查。

在 ENFORCE 模式下，被拒绝的调用不会派发；判断失败时也拒绝受保护调用。业务权限、参数校验和幂等处理继续由原执行链承担。判断通过只表示可以继续进入执行流程，不能当作授权或业务成功证明。详见[执行防护指南](https://java.agentscope.io/v2/zh/jev/guides/tool-guard-api)。

## 执行中：治理上下文、记忆与检索证据
### 历史压缩保留约束，并支持恢复原始材料
长任务会积累大量文件读取、搜索结果和工具历史。`JevContextCompactor` 接到 Harness 现有压缩入口，在宿主指定的可处理工具范围内，判断历史调用与结果应该保留、截短，还是成对移出当前上下文。

最近消息、系统消息、固定约束和不完整工具结果等有明确保护规则；不确定的材料保留。ENFORCE 采用压缩前必须成功归档，归档失败或没有足够缩减时保留当前历史。后续恢复读取的是已保存消息，不会重新执行历史工具。

截短保留的是结果前缀，不等于生成摘要。最终请求仍经过 Harness 的预算检查。应用可以选择文件或 BaseStore 归档实现，按用户、会话和 Agent 隔离材料。详见[上下文压缩](https://java.agentscope.io/v2/zh/jev/guides/context-compaction-api)、[归档恢复](https://java.agentscope.io/v2/zh/jev/guides/context-archive)及[显式交换对规划](https://java.agentscope.io/v2/zh/jev/guides/context-planner-api)。

长期记忆另有独立入口：`JevMemoryGate` 同时评审候选事实的持久价值和与已有事实的冲突。它提供准入建议，实际写入由应用负责，不会因为上下文压缩而自动把材料转成长期记忆。详见[记忆准入](https://java.agentscope.io/v2/zh/jev/guides/memory-api)。

### 检索处理保留能够纠正前提的证据
RAG 场景需要的不只是相关性排序。用户问“退款一定成功吗”，政策中“退款需要满足条件并经审核”虽然否定了问题的前提，却是关键证据。

`JevEvidenceProcessor` 支持对授权材料分类、过滤和重排，区分提示注入、答案证据与前提冲突。宿主先执行 ACL，JEV 再处理可见材料。开发者可以直接处理段落，通过 `search_evidence` 工具提供给 Agent，或使用 Knowledge 适配接入检索流程。

证据被保留后，还需要检查生成回答是否真正获得支持。这两步分别解决“给模型什么材料”和“模型是否忠实使用材料”。详见[证据处理](https://java.agentscope.io/v2/zh/jev/guides/evidence-pipeline-api)、[相关性与依据检查](https://java.agentscope.io/v2/zh/jev/guides/rag-api)和[Knowledge 适配](https://java.agentscope.io/v2/zh/jev/guides/knowledge-adapter-api)。

## 输出时：审核草稿，并只修订需要修订的文本
当政策是“未使用且七天内可以退款”，Agent 却写成“可以无条件退款”，需要修正的是回答。重跑整个 Agent 可能重复执行已经完成的业务操作。

`JevResponseMiddleware` 对没有工具调用的最终文本进行质量评审。在 ENFORCE 下，原稿明确失败时可以进入有限次数的纯文本修订，修订调用不携带工具，也不重跑 Agent 工具循环。修订稿再次通过审核才发布；证据不足、审核错误或修订耗尽时，不发布未经认可的原稿。

这也影响流式体验：修订过程不会逐字向用户发布，通过审核后才输出文本。应用需要设置评审与修订预算，并处理拒绝或转人工结果。SHADOW 只评审原稿，不修订，也不阻止发布。

内容护栏可以与回答质量审核组合使用；已有草稿的应用还可以直接接入独立草稿管线。详见[回答修订](https://java.agentscope.io/v2/zh/jev/guides/answer-refinement-api)、[内容护栏](https://java.agentscope.io/v2/zh/jev/guides/content-guardrail-api)和[草稿管线](https://java.agentscope.io/v2/zh/jev/guides/draft-pipeline-api)。

## 长任务与交付：监督进展，评估完整轨迹
### 持续监督关注进展和验证证据
`JevSupervisionMiddleware` 在任务运行期间观察是否有实质进展、是否停滞或偏航、是否需要补充验证，并给出继续工作、复核方向、请求验证或完成复核等建议。

监督器只支持 OFF/SHADOW，不会自行停止任务或把任务改成完成。完成复核需要宿主提供与当前版本和作用域匹配的验证证据；只有 Agent 声称“完成”，不能形成可信交付结论。应用也可以独立发起一次任务复核，按自己的调度规则消费建议。详见[持续监督](https://java.agentscope.io/v2/zh/jev/guides/supervision-api)、[验证证据接入](https://java.agentscope.io/v2/zh/jev/guides/supervision-evidence)和[单次任务复核](https://java.agentscope.io/v2/zh/jev/guides/task-review)。

### 轨迹评估把工具行为与回答质量分开衡量
`JevTraceEvaluator` 可以评估历史轨迹，也可以通过中间件采集本次真实调用。内置指标覆盖工具选择、工具结果利用、回答依据、范围遵循、相关性、完整性和间接提示注入，还可增加不调用模型的确定性工具轨迹对照。

同一组定义可以用于在线观察与离线批量评估，自定义指标则支持自己的业务标准。结果保留分类、分数、是否通过与状态，避免把跳过、弃权和错误混成一个低分。

事后评估不会撤销工具执行，也不会为提高分数重跑业务流程；在线中间件只支持 OFF/SHADOW。其价值是帮助发现问题、比较版本和建立回归样本。详见[轨迹评估](https://java.agentscope.io/v2/zh/jev/guides/trace-evaluation-api)、[指标定义](https://java.agentscope.io/v2/zh/jev/guides/metric-definitions)和[批量评估](https://java.agentscope.io/v2/zh/jev/guides/evaluator-api)。

## 进一步扩展：代码评审与只读浏览器任务
结构化判断也可以用于有明确候选和证据边界的专业任务。

`JevCodeReviewer` 对 diff 或源码快照分阶段筛选风险，再从解析出的真实区域定位证据，输出机制、严重度和待复核项。它只支持 OFF/SHADOW，不自动发布评审或批准合并；没有发现也不能当作代码安全证明。这个能力用于组织评审线索，复杂因果分析与测试验证仍需要后续核查。详见[代码评审指南](https://java.agentscope.io/v2/zh/jev/guides/code-review-api)。

`JevBrowserNavigator` 从授权页面的可见候选中选择只读导航、滚动或等待，并通过 `read_browser` 工具接入 Agent。宿主提供独占浏览器会话和独立完成验证器；页面变化后，旧建议需要重新观察。只有独立验证通过才返回 VERIFIED，模型选择 DONE 本身不构成完成。它适合帮助中心和政策查询等受控任务。详见[浏览器执行](https://java.agentscope.io/v2/zh/jev/guides/browser-execution-api)和[动作建议](https://java.agentscope.io/v2/zh/jev/guides/browser-proposals)。

对于业务入口的多标签分流、条件性诉求和客服回复承诺检查，也可以直接组合[候选分类](https://java.agentscope.io/v2/zh/jev/guides/application-api)与[客服评审](https://java.agentscope.io/v2/zh/jev/guides/support-api)，不必先搭建完整 Agent。

## 接入实操：从一个用途开始
### 1. 添加依赖包
下面先完成一次独立判断，再接入已有 Agent。使用 Java 17 或更高版本；`${agentscope.version}` 应替换为项目采用且包含这些 API 的 AgentScope 版本，并保持各模块版本一致。业务代码直接使用客户端、Judge 或评估器时，引入扩展模块：

```xml
<dependency>
    <groupId>io.agentscope</groupId>
    <artifactId>agentscope-extensions-jev</artifactId>
    <version>${agentscope.version}</version>
</dependency>

```

通过 TypeSafe 获取 API 凭据后，在启动 Java 进程的环境中设置 `TYPESAFE_API_KEY`。这个凭据供 JEV 判断接口使用；Agent 原有生成模型仍使用自身配置。客户端未显式设置 key 时依次读取 `TYPESAFE_API_KEY`、`JEV_API_KEY`，两者都没有有效值时无法构建客户端。

### 2. 发起第一次真实判断
下面是一个独立 Java 入口，放入已添加上述依赖的项目后可从 IDE 运行。它请求真实接口，需要配置凭据并会产生接口用量。

```java
import io.agentscope.extensions.judge.jev.JevClient;
import io.agentscope.extensions.judge.jev.JevRetryPolicy;
import io.agentscope.extensions.judge.jev.NoulAnswer;
import io.agentscope.extensions.judge.jev.NoulQuestion;
import io.agentscope.extensions.judge.jev.SystemOneRequest;
import java.time.Duration;
import java.util.Map;

public class JevQuickStart {
    public static void main(String[] args) {
        var client = JevClient.builder()
                .baseUrl("https://api.typesafe.ai")
                .model("jev-latest")
                .timeout(Duration.ofSeconds(5))
                .retryPolicy(new JevRetryPolicy(2, Duration.ofMillis(500)))
                .build();
        var request = SystemOneRequest.builder()
                .state(Map.of(
                        "business_record", "尚未执行退款",
                        "assistant_answer", "退款已经完成"))
                .question("supported", new NoulQuestion(
                        "Does business_record support the refund status claimed in assistant_answer?",
                        null))
                .build();
        var result = client.systemOneBlocking(request);
        var answer = (NoulAnswer) result.answers().get("supported");
        System.out.println("记录支持草稿的概率：" + answer.noul());
    }
}
```

成功调用后会打印 `supported` 对应的概率。这个输入刻意包含事实冲突，预期是较低的支持概率，但具体数值由真实模型返回，不能写死为验收结果。可以把草稿改为“目前尚未执行退款”，比较同一问题下两次输出，再加入真实业务样本评测。

`systemOneBlocking` 适合这个独立入口；响应式服务应组合 `client.systemOne(request)` 返回的 `Mono`，避免阻塞事件循环。客户端会校验答案类型、题目集合和概率等字段；请求或响应失败时抛出 `JevException`，不能把接口错误解释成概率为零。

这里的 5 秒是单次请求超时，重试可能增加总耗时。上层 Judge 或 `JevExecution` 可对包含重试、退避的整个逻辑判断设置预算。更多选项见[客户端指南](https://java.agentscope.io/v2/zh/jev/guides/client)。

### 3. 将概率变成可复用的评审结果
应用如果需要判断草稿是否进入下一步，可以复用上面的 `client`，定义一个 `JevJudge` 条件：

```java
import io.agentscope.extensions.judge.jev.JevJudge;
import io.agentscope.extensions.judge.jev.NoulQuestion;
import java.time.Duration;
import java.util.List;
import java.util.Map;

var definition = new JevJudge.Definition("refund-answer-v1", List.of(
        new JevJudge.Criterion(
                "supported",
                new NoulQuestion(
                        "Does business_record support the refund status claimed in assistant_answer?",
                        null),
                true, 0.2, 0.8)));
var judge = new JevJudge(client, Duration.ofSeconds(2));
var review = judge.judge(
        Map.of("business_record", "尚未执行退款", "assistant_answer", "退款已经完成"),
        definition);
var observed = review.doOnNext(result -> {
    System.out.println("评审状态：" + result.status());
    System.out.println("条件明细：" + result.findings());
});
// 响应式服务返回或组合 observed；独立命令行可调用 observed.block()。
```

`true` 表示期望条件成立；示例中不高于 `0.2` 为 FAIL，不低于 `0.8` 为 PASS，中间区间为 INCONCLUSIVE。请求故障返回 ERROR。这两个阈值只是展示状态分支，需要用业务样本校准。

Judge 返回结果，不自动发布或修订回答。应用应对 PASS 继续后续发布检查，对 FAIL 修订或复核，对 INCONCLUSIVE 补充证据，对 ERROR 采用失败处理。修改标准或阈值时更新定义版本，方便离线回归比较。一个 `Mono` 不要为日志重复订阅，否则会重复评审。

### 4. 把判断挂到已有 Harness
当判断需要自动发生在每轮推理前，再使用中间件。Harness 集成需要额外引入同版本依赖：

```xml
<dependency>
    <groupId>io.agentscope</groupId>
    <artifactId>agentscope-harness</artifactId>
    <version>${agentscope.version}</version>
</dependency>

```

下面使用前面创建的 `client`，`model` 和 `toolkit` 是应用已有的生成模型与工具注册表。工具名和 schema 必须已注册；中间件负责筛选，不负责创建工具。

```java
import io.agentscope.extensions.judge.jev.JevExecution;
import io.agentscope.extensions.judge.jev.example.JevToolSelectionMiddleware;
import io.agentscope.harness.agent.HarnessAgent;
import java.time.Duration;

var options = new JevExecution.Options(
        JevExecution.Mode.SHADOW,
        Duration.ofSeconds(2),
        "order-tools-v1",
        (ctx, record) -> System.out.println(record));
var selector = JevToolSelectionMiddleware.builder(client)
        .execution(options)
        .maxTools(2)
        .confidenceThreshold(0.8)
        .rejectionThreshold(0.2)
        .build();
var agent = HarnessAgent.builder()
        .name("order-support")
        .model(model)
        .toolkit(toolkit)
        .middleware(selector)
        .build();
```

这里的阈值仅用于演示，SHADOW 下主模型仍收到原工具目录。生产观察器应快速返回，并将判断版本、耗时和建议关联到当前运行。普通中间件默认 OFF；SHADOW 记录建议，ENFORCE 才按具体用途采用建议。直接调用 Judge 等应用 API 会发起评审，不隐式受一个全局模式控制。详见[运行模式](https://java.agentscope.io/v2/zh/jev/guides/harness-runtime)。

要验证这个接线是否生效，可以用“查订单”“未发货则退款”和普通问候分别运行现有 Agent，观察记录中是否出现相应工具建议。SHADOW 下实际工具目录应保持不变；校准后把模式改为 ENFORCE 并重新构建中间件和 Agent，再核对实际传给模型的工具。原 Agent 的调用方式保持不变，注册中间件本身不会执行一次任务。

### 5. Spring Boot 使用自动配置的客户端
Spring Boot 项目可用下面的 Starter 引入客户端集成：

```xml
<dependency>
    <groupId>io.agentscope</groupId>
    <artifactId>agentscope-jev-spring-boot-starter</artifactId>
    <version>${agentscope.version}</version>
</dependency>

```

在 `application.yml` 中配置：

```yaml
agentscope:
  jev:
    api-key: ${TYPESAFE_API_KEY:}
    base-url: https://api.typesafe.ai
    model: jev-latest
    timeout: 5s
    retry:
      max-retries: 2
      initial-backoff: 500ms
```

Starter 默认在没有自定义 `JevClient` Bean 时创建客户端。可以通过构造器注入，复用前面的请求和 Judge 定义：

```java
import io.agentscope.extensions.judge.jev.JevClient;
import io.agentscope.extensions.judge.jev.SystemOneRequest;
import io.agentscope.extensions.judge.jev.SystemOneResult;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class DecisionService {
    private final JevClient client;

    public DecisionService(JevClient client) {
        this.client = client;
    }

    public Mono<SystemOneResult> decide(SystemOneRequest request) {
        return client.systemOne(request);
    }
}
```

Starter 配置的是客户端，不会自动给所有 Agent 注册工具筛选或开启 ENFORCE。中间件仍需显式装配；需要定制客户端时可提供 `JevClientBuilderCustomizer` Bean。`agentscope.jev.enabled=false` 可关闭 Starter 的客户端自动创建，依赖该 Bean 的业务组件也应相应调整。

### 6. Service 配置与无需密钥的体验入口
AgentScope Service 用户可以通过 Session 的 `agentOverrides.jev` 分别配置工具选择、防护、路由、内容与质量审核、评估、压缩、监督、代码评审、检索和浏览器用途。密钥由部署环境提供；检索源、模型目录、浏览器会话与验证证据仍需宿主接入。详见[Service 配置](https://java.agentscope.io/v2/zh/jev/guides/service-api)。

如果想先看流程如何运转，`agentscope-examples/jev` 提供无需密钥的离线案例，覆盖检索与回答修订、压缩归档、阶段路由、监督和轨迹评估等场景。按[案例指南](https://java.agentscope.io/v2/zh/jev/guides/agent-integration-example)构建运行即可。案例中的脚本模型和合成判断用于验证流程，不代表真实模型效果。

## 用实际任务判断是否值得接管
增加判断也会增加请求和等待时间。工具描述变少不必然意味着端到端更快，更多审核也不必然提高任务成功率。应对相同输入比较原流程与增强流程，分别测量判断质量、实际派发行为和最终业务结果。

例如退款防护既要统计错误放行，也要统计正常退款被阻止的比例；回答修订要观察最终正确率及附加等待；压缩要检查关键事实保留与后续答案质量。评估时保留错误、弃权和跳过，区分判断耗时与整体耗时，用量缺失时不要记成零成本。

可以先使用 SHADOW 积累样本，再按用途决定是否 ENFORCE，并验证回退是否符合业务要求：工具选择与路由失败保留原流程，受保护工具检查失败拒绝派发，发布前审核失败不发布文本。

官方文档有提供的完整评测指南与预算和观测。欢迎在 [Issue #3251](https://github.com/agentscope-ai/agentscope-java/issues/3251) 分享你的使用场景、缺少的能力和实际评测结果。无论是自定义中间件、完整示例，还是一次没有带来收益的尝试，都能帮助我们继续完善 AgentScope Java 的判断流程。
