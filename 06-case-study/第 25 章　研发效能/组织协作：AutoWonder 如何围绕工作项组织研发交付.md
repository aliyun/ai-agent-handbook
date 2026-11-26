# 组织协作：AutoWonder 如何围绕工作项组织研发交付

开发 Agent 交出代码后，评审要知道自己审的是哪一版。评审打回后，开发要知道哪几条意见还没解决。测试通过后，发布负责人还要确认通过的是哪些检查、针对哪个版本、在哪个环境。把这些工作分给不同的 Agent 并不难，难的是让接手的人或 Agent 不必重新猜一遍前序工作的结论。

[AutoWonder 社区版](https://github.com/aliyun/alibabacloud-landing-zone/tree/ac42a9c8075c645d93bb99d4282a88e6a56fc21b/ai-sdlc/auto-wonder)是一个多 Agent 软件交付平台。人可以从平台的工作项界面、钉钉群或通过模型上下文协议接入的个人 Agent 客户端参与协作。本文依据社区版公开模板和实现，重点看工作项进入交付流程后，角色怎样交接、结果怎样核对，以及哪些决定仍要交回人。

## 一、用工作项接住多次执行

在 AutoWonder 中，工作项记录要做的事，一次调度执行（dispatch）则记录平台如何把某一步交给某个角色运行。开发交给评审时，平台更新同一工作项的负责人和流程步骤，再从评审角色自己的流程入口排入一次新的执行。评审打回开发时，交接仍然围绕原工作项。即使某次执行成功，也只代表本次运行的状态，不代表整个需求已经完成。[交接服务实现](https://github.com/aliyun/alibabacloud-landing-zone/blob/ac42a9c8075c645d93bb99d4282a88e6a56fc21b/ai-sdlc/auto-wonder/src/main/java/com/aliyun/autowonder/dispatch/HandoffService.java#L110-L202)

接手角色不需要继承前一个 Agent 的整段会话。平台打包工作项的正文、评论等材料，并在交接时带上直接前序执行的结论摘要和筛选后的产物引用。任务包提供的是供核对的材料；接手角色仍要确认版本、变更范围和验收条件。[任务上下文组装实现](https://github.com/aliyun/alibabacloud-landing-zone/blob/ac42a9c8075c645d93bb99d4282a88e6a56fc21b/ai-sdlc/auto-wonder/src/main/java/com/aliyun/autowonder/dispatch/PackageContextAssembler.java)

交付流程本身也会更新。[流程快照机制](https://github.com/aliyun/alibabacloud-landing-zone/blob/ac42a9c8075c645d93bb99d4282a88e6a56fc21b/ai-sdlc/auto-wonder/docs/dispatch-workflow-rounds.md)记录入队时的流程、步骤和角色版本，普通重试或暂停恢复沿用原快照。交付仍处于开启状态时，可以显式让当前暂停的正式执行按最新流程重启。新一轮保留旧产物和外部操作回执。比如上一轮发起创建合并请求后超时，结果不明时应先查代码平台的实际记录；换轮不等于外部操作没发生。回执机制只覆盖遵循该协议的操作。

## 二、让评审、返工和测试对得上同一份改动

社区版内置[四种小队模板](https://github.com/aliyun/alibabacloud-landing-zone/blob/ac42a9c8075c645d93bb99d4282a88e6a56fc21b/ai-sdlc/auto-wonder/docs/community/squad-template-seed.md)：独立开发者、开发与评审双人组、标准研发交付小队、全链路研发协作小队。标准小队的主线是开发、评审和测试。全链路模板保留这条主线，另备需求澄清、项目协调、冲突处理和数据库管理角色，由团队按需调用，而不是让每个工作项依次经过七个角色。

[全链路模板的开发与评审约定](https://github.com/aliyun/alibabacloud-landing-zone/blob/ac42a9c8075c645d93bb99d4282a88e6a56fc21b/ai-sdlc/auto-wonder/docs/autowonder-community-templates.sql)把交接写得很具体。开发汇报要标出实际分支、起止提交、合并请求状态和测试结果；未成功创建合并请求，要明确写明，不能把创建入口当成交付结果。评审先核对当前代码是否对应开发交付时的最后一个提交，再审从基线到该提交的全部改动。若只看返工新增的那几个提交，就可能漏掉首轮已经引入但尚未修复的问题。

评审打回时，模板要求给阻塞问题编号，并附代码依据与修改方向。开发沿用原分支和已有合并请求返工，逐条标明已修复、仍未解决或出现回归。复审沿原编号逐项核销，再检查修复直接引入的回归；评审通过后，测试角色核对本轮提交范围和验收版本。这里真正复用的不是聊天记录，而是能被下一棒核对的三件事：改了哪一版、前一棒查过什么、还有什么没解决。这些是模板约定，不等于平台替评审者验证了每条判断。

## 三、把等待回答、同意继续和接回工作项分开

一个 Agent 问「应该在开发环境还是测试环境验证」，和请求负责人批准「按这一版产物继续」，是两种不同的动作。AutoWonder 的[人工输入机制](https://github.com/aliyun/alibabacloud-landing-zone/blob/ac42a9c8075c645d93bb99d4282a88e6a56fc21b/ai-sdlc/auto-wonder/docs/dispatch-requests.md#L5-L33)分别配置步骤内问答与人工审批。两者等待时，原执行和负责人不变；回答事实问题不会代替批准。配置了人工门禁的步骤，由指定人员对本次步骤尝试和对应产物作出决定。产物变了，原批准不能继续使用。若要让门禁挡住发布动作，应把发布安排在门禁之后的独立步骤，并在发布系统配置相应权限。

交回真人则意味着换人接手。全链路模板要求测试角色分别报告测试结论和日常环境部署状态。测试失败时，它可以带着证据打回开发；测试通过但部署失败时，它保留测试结论，将部署失败的阶段和待跟进事项交回真人。即使日常部署成功、工作项被标记为「已发布」或「已完成」，也不能据此判定业务方已经签收或生产发布已经获批。

[AutoWonder 云上升级手册](https://github.com/aliyun/alibabacloud-landing-zone/blob/ac42a9c8075c645d93bb99d4282a88e6a56fc21b/ai-sdlc/auto-wonder/skills/upgrading-autowonder-on-alibaba-cloud/references/upgrade-runbook.md#L644-L692)也展示了这个区别。它针对已有社区版部署，不是研发工作项的默认步骤。常规应用升级不逐步等人批准，新增数据库迁移则要确认风险与备份；切换过程中某个节点检查失败，就停止并保留现场。手册里的「升级通过」只表示云服务器节点上的服务、目标版本校验等本地检查通过。若要验收公网入口或关键业务链路，接手者还需按约定另行核验，不能用节点报告替代业务签收。

## 四、先验证一个交接点，再决定是否增加角色

可以挑一类低风险需求，从单个开发 Agent、固定的构建和测试步骤、人工评审开始。先看看评审是否经常拿错版本，哪类原问题在返工后迟迟不能关闭，以及交接花了多少等待和核对的时间。如果只是提交信息不全，先补交付格式；如果独立评审确实成了持续瓶颈，再试一个评审 Agent，对比人工复核和返工投入有没有减少。试用模板前还要检查权限：社区版应用模板会给生成的 Agent 授予组织仓库的写权限；角色名称不能代替仓库、分支和发布权限的配置。
