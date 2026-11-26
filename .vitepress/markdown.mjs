import { getPage, resolveBookLink } from "./book.mjs";

// Keep previously published section links valid when editorial wording or numbering changes.
// Keys are stable public page URLs and the current generated heading IDs.
export const legacyHeadingIds = {
  "/architecture/chapter-01.html": {
    "第-01-章-ai-原生应用的新阶段": "第-1-章-ai-原生应用的新阶段",
    "_1-1-从生成内容到完成任务": "_1-1-从生成内容到完成任务-ai-原生应用的生产拐点",
    "_1-1-2-coding-agent-为什么能说明这一变化": "_1-1-2-coding-agent-为什么构成拐点",
    "_1-1-3-编程之外-其他任务也需要这些能力": "_1-1-3-从专用场景走向通用架构",
    "_1-2-从-chat-rag-到-agentic-application-怎样选择应用形态": "_1-2-从-chat-rag-到-agentic-application-应用形态的演进",
    "_1-2-1-新的形态不一定要替代旧的形态": "_1-2-1-应用形态不是一条简单的替代链",
    "_1-2-3-什么时候需要长程智能体或多智能体": "_1-2-3-从单智能体到长程智能体与多智能体",
    "_1-3-agentic-application-是什么-不是什么": "_1-3-agentic-application-的定义、边界与核心特征",
    "_1-3-2-判断一个应用的六个方面": "_1-3-2-六个判定特征",
    "_1-3-3-几个容易混淆的概念": "_1-3-3-概念边界",
    "_1-4-从能演示到能稳定运行-怎样判断成熟度": "_1-4-从可演示到可运营-企业成熟度与升级判断",
    "_1-4-1-不要只看产品名称": "_1-4-1-成熟度不由产品名称决定",
    "_1-4-2-构建之前-先把几个问题想清楚": "_1-4-2-从成熟度走向架构决策",
    "_1-4-3-多个-agent-一起运行-谁来统一管理": "_1-4-3-从管理软件到管理-agent-引入操作系统视角",
  },
  "/architecture/chapter-02.html": {
    "第-02-章-agentic-application-参考架构": "第-2-章-agentic-application-参考架构",
  },
  "/build/chapter-03.html": {
    "第-03-章-范式-harness-的主流构建方式和责任边界": "第-3-章-范式-harness-的主流构建方式和责任边界",
  },
  "/build/chapter-04.html": {
    "第-04-章-任务-编排、长程推进与协作流转": "第-4-章-任务-编排、长程推进与协作流转",
  },
  "/build/chapter-05.html": {
    "第-05-章-信息-上下文、状态与可复用能力资产": "第-5-章-信息-上下文、状态与可复用能力资产",
  },
  "/build/chapter-06.html": {
    "第-06-章-行动-受控执行、验证反馈与交付准备": "第-6-章-行动-受控执行、验证反馈与交付准备",
  },
  "/run/chapter-07.html": {
    "第-07-章-agent-运行时与沙箱": "第-7-章-agent-运行时与沙箱",
  },
  "/run/chapter-08.html": {
    "第-08-章-agent-状态存储与语义资产": "第-8-章-agent-状态存储与语义资产",
    "_8-8-本章小结": "本章小结",
  },
  "/run/chapter-09.html": {
    "第-09-章-ai-网关与统一流量治理": "第-9-章-ai-网关与统一流量治理",
  },
  "/run/chapter-10/overview.html": {
    "_10-6-本章小结": "本章小结",
  },
  "/run/chapter-11.html": {
    "第-11-章-multi-agent-协作与编排": "第-11章-multi-agent-协作与编排",
  },
  "/optimization/chapter-18/overview.html": {
    "_18-1-1-benchmark-提醒我们-会做、做完和稳定交付是不同层次": "benchmark-提醒我们-会做、做完和稳定交付是不同层次",
    "_18-2-数据飞轮怎样把运行经验变成改进": "_18-2-、数据飞轮怎样把运行经验变成改进",
    "_18-3-围绕同一任务连接各个模块": "_18-3-、围绕同一任务连接各个模块",
    "_18-4-从一个业务问题开始-把第一轮做完": "_18-4-、从一个业务问题开始-把第一轮做完",
  },
  "/optimization/chapter-20.html": {
    "_20-3-1-选来源与字段": "选来源与字段",
    "_20-3-2-用预览确认这张表好不好用": "用预览确认这张表好不好用",
    "_20-3-3-创建、运行-再到-dataset-使用结果": "创建、运行-再到-dataset-使用结果",
    "_20-4-1-人工看不过来-先缩小到能处理的量": "人工看不过来-先缩小到能处理的量",
    "_20-4-2-没有业务标签-让模型先做一版": "没有业务标签-让模型先做一版",
  },
  "/optimization/chapter-24.html": {
    "_24-1-1-四个边缘优化方向": "四个边缘优化方向",
    "_24-1-2-中心云调优与边缘调优的分工": "中心云调优与边缘调优的分工",
    "_24-2-1-边缘评估指标体系": "边缘评估指标体系",
    "_24-2-2-边缘评估数据回流": "边缘评估数据回流",
    "_24-3-1-全球就近接入与智能路由": "全球就近接入与智能路由",
    "_24-3-2-ai-推理传输优化": "ai-推理传输优化",
    "_24-3-3-语义缓存与回源卸载": "语义缓存与回源卸载",
    "_24-4-1-边缘数据为优化提供什么": "边缘数据为优化提供什么",
    "_24-4-2-优化闭环中-esa-与-agent-平台的职责分工": "优化闭环中-esa-与-agent-平台的职责分工",
    "_24-4-3-从统一能力走向全球差异化优化": "从统一能力走向全球差异化优化",
    "_24-5-1-边缘版本同步与就近读取": "边缘版本同步与就近读取",
    "_24-5-2-区域适配": "区域适配",
    "_24-5-3-agent-友好内容转换": "agent-友好内容转换",
    "_24-5-4-webmcp-网站即-mcp-server": "webmcp-网站即-mcp-server",
    "_24-6-1-纵深安全的前置": "纵深安全的前置",
    "_24-6-2-ai-爬虫管理": "ai-爬虫管理",
    "_24-6-3-边缘安全与-region-安全的分层协作": "边缘安全与-region-安全的分层协作",
    "_24-7-1-边缘真实流量的观测能力": "边缘真实流量的观测能力",
    "_24-7-2-边缘生产验证与仿真的互补关系": "边缘生产验证与仿真的互补关系",
    "_24-7-3-边缘灰度发布与版本管理": "边缘灰度发布与版本管理",
    "_24-7-4-验证结果的边缘-region-联合评估": "验证结果的边缘-region-联合评估",
    "_24-8-1-阶段一-边缘基础设施增强-agent": "阶段一-边缘基础设施增强-agent",
    "_24-8-2-阶段二-agent-能力部署到边缘": "阶段二-agent-能力部署到边缘",
    "_24-8-3-阶段三-agent-原生部署在边缘": "阶段三-agent-原生部署在边缘",
    "_24-8-4-企业边缘优化成熟度模型-本书归纳-供企业自评参考": "企业边缘优化成熟度模型-本书归纳-供企业自评参考",
    "_24-9-1-能力状态矩阵": "能力状态矩阵",
    "_24-9-2-边缘优化的限制与不适用场景": "边缘优化的限制与不适用场景",
    "_24-9-3-企业决策建议": "企业决策建议",
  },
  "/cases/chapter-25/": {
    "第-25-章-研发效能": "第25章-研发效能",
  },
  "/cases/chapter-26/": {
    "第-26-章-设计工程": "第26章-设计工程",
  },
  "/cases/chapter-27/": {
    "第-27-章-运维、安全与企业-it": "第27章-运维、安全与企业-it",
  },
  "/cases/chapter-28/": {
    "第-28-章-客户、销售与运营": "第28章-客户、销售与运营",
  },
};

export function bookMarkdown(md) {
  const headingOpen = md.renderer.rules.heading_open;
  md.renderer.rules.heading_open = (tokens, index, options, env, self) => {
    const html = headingOpen
      ? headingOpen(tokens, index, options, env, self)
      : self.renderToken(tokens, index, options);
    const page = getPage(env.relativePath || "");
    const oldId = legacyHeadingIds[page?.href]?.[tokens[index].attrGet("id")];
    return html + (oldId ? `<span id="${md.utils.escapeHtml(oldId)}"></span>` : "");
  };

  md.core.ruler.after("inline", "book-links", (state) => {
    const page = getPage(state.env.relativePath || "");
    if (!page) return;
    function walk(tokens) {
      for (const token of tokens) {
        if (token.type === "link_open")
          token.attrSet(
            "href",
            resolveBookLink(token.attrGet("href"), page.source),
          );
        if (token.type === "image")
          token.attrSet(
            "src",
            resolveBookLink(token.attrGet("src"), page.source),
          );
        if (token.children) walk(token.children);
      }
    }
    walk(state.tokens);
  });

  const text = md.renderer.rules.text;
  md.renderer.rules.text = (tokens, index, options, env, self) => {
    const html = text
      ? text(tokens, index, options, env, self)
      : md.utils.escapeHtml(tokens[index].content);
    return html.replace(
      /\{\{[\s\S]*?\}\}/g,
      (match) => `<span v-pre>${match}</span>`,
    );
  };
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, index, options, env, self) => {
    const token = tokens[index];
    if (token.info.trim() === "mermaid")
      return `<MermaidDiagram code="${encodeURIComponent(token.content)}" />\n`;
    return fence(tokens, index, options, env, self);
  };
}
