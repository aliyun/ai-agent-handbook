# HiRoute Jev 实践配图

四张带文字的讲解图由内置 `image_gen` 生成，用于解释对话反馈与自主执行、产品职责、独立问题和当前路由规则，不是产品截图或实验测量。中文文字、字段名、箭头与示意计算已经逐图核对；原始提示词见 [illustration-prompts.json](illustration-prompts.json)。

两张历史记录产品图是未修改的 macOS 原生 HiRoute Desktop 截图，来自 [HiRoute 公共提交](https://github.com/higress-group/HiRoute/tree/5232db559bb8e856d44549d5e1488c7cf4f78d83)，按原仓库 [Apache-2.0 许可证](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/LICENSE) 引用并保留出处。

| 本目录文件 | 原仓库文件 | 捕获日期与数据来源 |
| --- | --- | --- |
| `desktop-session-competence-zh.png` | `news/assets/desktop-session-competence-zh.png` | 2026-10-05；隔离回放原始 HTTPX 阶段记录 |
| `desktop-plan-competence-zh.png` | `news/assets/desktop-plan-competence-zh.png` | 同次捕获；已评分与未评分阶段汇总 |

历史记录截图保持原始阶段身份和分数；0.485、0.775 的两位小数显示为 0.48、0.78，最终 Astra 阶段仍未评分。这些分数来自不同工作阶段，不代表受控模型排名。

公开原始说明见 [ILLUSTRATIONS.md](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/news/ILLUSTRATIONS.md) 与 [原生捕获记录](https://github.com/higress-group/HiRoute/blob/5232db559bb8e856d44549d5e1488c7cf4f78d83/news/competence-product-views.json)。本次复制后核对了两张截图的公开 Git 对象和 SHA-256；文件尺寸、哈希及来源见 [provenance.json](provenance.json)。

## 用户提供的配置截图

2026-10-14，用户提供三张 HiRoute Desktop 截图并指定用于本文：

- `desktop-smart-saving-zh.png`：第 3 张截图原样复制，展示百炼决策连接、免费省钱模型和 Qwen 3.7 Plus 主力模型。
- `desktop-custom-branches-zh.png`：第 1、2 张截图按原尺寸左右拼接，中间增加 24 像素白色间隔，同时展示“代码实现”和“文本转换”分支。界面内容未裁剪、重绘或改写。

截图中的配置与模型组合用于说明配置方式。尺寸、哈希和拼接方式记录在 `provenance.json`。
