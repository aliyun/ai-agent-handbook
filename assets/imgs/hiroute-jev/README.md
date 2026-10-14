# HiRoute Jev 实践配图

四张带文字的讲解图由内置 `image_gen` 生成，用于解释对话反馈与自主执行、产品职责、独立问题和当前路由规则，不是产品截图或实验测量。中文文字、字段名、箭头与示意计算已经逐图核对；原始提示词见 [illustration-prompts.json](illustration-prompts.json)。

三张产品图是未修改的 macOS 原生 HiRoute Desktop 截图，来自 [HiRoute 公共提交](https://github.com/higress-group/HiRoute/tree/5232db559bb8e856d44549d5e1488c7cf4f78d83)，按原仓库 [Apache-2.0 许可证](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/LICENSE) 引用并保留出处。

| 本目录文件 | 原仓库文件 | 捕获日期与数据来源 |
| --- | --- | --- |
| `desktop-session-competence-zh.png` | `news/assets/desktop-session-competence-zh.png` | 2026-10-05；隔离回放原始 HTTPX 阶段记录 |
| `desktop-plan-competence-zh.png` | `news/assets/desktop-plan-competence-zh.png` | 同次捕获；已评分与未评分阶段汇总 |
| `desktop-smart-saving-zh.png` | `news/assets/launch-smart-saving-zh.png` | 2026-10-08；尚未保存或启用的 Flash / Max 配置 |

历史记录截图保持原始阶段身份和分数；0.485、0.775 的两位小数显示为 0.48、0.78，最终 Astra 阶段仍未评分。这些分数来自不同工作阶段，不代表受控模型排名。配置截图中的执行模型组合用于说明双组界面，与文章历史实验分别理解。

公开原始说明见 [ILLUSTRATIONS.md](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/news/ILLUSTRATIONS.md) 与 [原生捕获记录](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/news/competence-product-views.json)。本次复制后核对了三张截图的公开 Git 对象和 SHA-256；文件尺寸、哈希及来源见 [provenance.json](provenance.json)。

## 自定义分支配置截图

`desktop-custom-branches-zh.png` 与 `desktop-branch-judgment-zh.png` 于 2026-10-14 通过 Computer Use 在真实 macOS HiRoute Desktop 中捕获。新建的“写稿与审稿”示例选择百炼决策连接；审稿分支展示常规、主力模型组，并单独设置 0.85 简单概率阈值、0.6 胜任度下限和中文程度提示词。

两图来自未保存、未启用的同一个配置示例。截图后取消新建并返回原页面，没有发布路由、改变已有计划或调用模型。截图工具返回的 JPEG 仅转换为 PNG，保持原尺寸；没有裁剪、重绘或合成界面。它们用于说明配置操作，模型组合和阈值是示例设置。尺寸及哈希记录在 `provenance.json`。
