# AgentLoop 自进化群岛游戏

[English](./README_EN.md) | [在线试玩](https://aliyun.github.io/ai-agent-handbook/games/)

这是《AI Agent Handbook》里的开源网页游戏。游戏把 Agent 的观测、审计、评估、实验和优化做成五座海底岛屿，目前开放“迷雾灯塔”和“边界海关”两关，其余三关欢迎社区一起共建。

## 从哪里开始

```bash
npm ci
npm run game:dev
```

命令会先用可读源码生成本地预览，再启动开发服务器。终端会显示访问地址；游戏入口是 `/index.html`。

提交前运行：

```bash
npm run game:check
npm test
```

`game:check` 会重新构建游戏，并确认可读源码能够生成与当前线上 v21 完全一致的三个运行时。生成目录 `game/dist/` 只用于本地预览，不提交到 Git。

## 目录结构

```text
game/
├── src/
│   ├── map.js              # 五关群岛地图与游戏说明
│   ├── lighthouse.js       # 第一关：Canvas 2D 横版游戏
│   └── sea/
│       ├── space-v21.js    # 第二关入口：Three.js 立体海洋
│       └── *.js            # 海域、驾驶舱、生物和地形模块
├── scripts/
│   ├── build.mjs           # 生成本地可运行预览
│   └── check.mjs           # 源码—线上运行时一致性检查
└── dist/                   # 本地生成，不入库

public/games/               # GitHub Pages 当前发布产物与静态资源
```

地图和第一关的 HTML/CSS 外壳位于 `public/games/*.html`；交互逻辑的可读源码位于 `game/src/`。第二关以 ES Modules 维护，由 esbuild 打包。除维护发布流程外，请不要直接修改 `public/games/assets/` 中的哈希运行文件。

## 可以贡献什么

- 完成第三关“回声剧场”、第四关“双生实验岛”和第五关“生长花园”；
- 增加关卡机制、收藏物、海域生物或无障碍支持；
- 优化手机端操控、加载速度、渲染性能和低性能设备降级；
- 修复地图、关卡切换、进度保留和浏览器兼容问题；
- 补充自动化测试、视觉回归和性能基线。

改动应保持“玩法先于视觉”：先给出可玩的独立小样，再接入正式地图。涉及操控或视角变化时，请同时提供桌面端和移动端的实际测试结果。

## 提交 Pull Request

1. 从 `main` 创建分支，只修改与本次目标有关的文件。
2. 在 `game/src/` 修改源码，运行 `npm run game:dev` 实际试玩。
3. 运行 `npm run game:check`、`npm run check` 和相关 Playwright 测试。
4. PR 中说明玩法变化、测试环境和已知限制；视觉改动请附桌面端与手机端截图。
5. 不提交 `game/dist/`、测试截图、本地缓存、密钥或企业内部数据。

欢迎先通过 [Issue](https://github.com/aliyun/ai-agent-handbook/issues) 讨论新关卡和较大的玩法调整，也可以直接提交 [Pull Request](https://github.com/aliyun/ai-agent-handbook/pulls)。

## 开源与素材边界

- `game/` 中的项目代码遵循仓库根目录的 [Apache License 2.0](https://github.com/aliyun/ai-agent-handbook/blob/main/LICENSE)。
- Three.js 0.180.0 遵循 MIT License，发布副本见 [`public/games/three.LICENSE.txt`](../public/games/three.LICENSE.txt)。
- Apache License 2.0 不授予商标权。Alibaba Cloud、AgentLoop、Loopie 的名称、标识和角色形象仍属于相应权利人；复用、宣传或制作衍生品牌素材时，请另行确认授权。
- 贡献者只能提交自己有权许可的代码和素材。引用第三方内容时，必须说明来源、许可证和必要的署名方式。

如果只想借鉴实现，可以从 `map.js`、`lighthouse.js` 和 `sea/space-v21.js` 三个入口开始阅读。它们分别展示了地图宿主、Canvas 2D 关卡和 Three.js 3D 关卡的实现方式。
