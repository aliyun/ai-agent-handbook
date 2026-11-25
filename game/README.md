# AgentLoop 自进化群岛游戏

[English](./README_EN.md) | [在线试玩](https://aliyun.github.io/ai-agent-handbook/games/)

这是《AI Agent Handbook》里的开源网页游戏。游戏把 Agent 的观测、审计、评估、实验和优化做成五座海底岛屿，目前开放“迷雾灯塔”“边界海关”和“回声剧场”三关，其余两关欢迎社区一起共建。

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

`game:check` 会重新构建游戏，并确认可读源码能够生成与发布 v24 完全一致的五个运行时。生成目录 `game/dist/` 只用于本地预览，不提交到 Git。第二关需要支持 WebGPU 的浏览器，推荐桌面 Chrome 或 Edge；不支持时仍可返回地图进入另外两关。

修改第二关源码后，先运行 `node game/scripts/publish.mjs` 重建 `public/games/` 中的第二关及宿主，再进行上述检查。这一步只生成本地发布副本，不会推送或上线。硬件 GPU 的完整航行、通关与触控模拟测试可在 macOS Chrome 下运行 `PLAYWRIGHT_WEBGPU=1 PLAYWRIGHT_CHANNEL=chrome npx playwright test tests/games.spec.ts --workers=1`；无 GPU 的 CI 验证加载失败后的地图和其他关，不冒充完成真实渲染验收。

## 目录结构

```text
game/
├── src/
│   ├── map.js              # 五关群岛地图与游戏说明
│   ├── lighthouse.js       # 第一关：Canvas 2D 横版游戏
│   ├── sea/
│   │   ├── host.js         # 无渲染共享宿主：按需加载各关并保留状态
│   │   └── space-v22.js    # 旧版 WebGL 源码，仅作历史参考，不进入发布构建
│   ├── abyssal/
│   │   ├── upstream/      # 固定版本 Abyssal Garden 原始源码（MIT）
│   │   ├── src/           # 原生第二关、潜水舱、城堡/灯塔/沉船与碰撞
│   │   ├── integrate.cjs  # 源级接入，不修改 upstream 文件
│   │   └── template.html  # 第二关轻量页面外壳
│   └── ocean/
│       ├── game.js         # 第三关入口：Canvas 2D 海洋吞食游戏
│       └── *.mjs           # 生态规则与原创循环音乐
├── scripts/
│   ├── build.mjs           # 生成本地可运行预览
│   ├── native.mjs          # 校验上游锁定版本并编译 WebGPU 场景
│   ├── publish.mjs         # 重建本地第二关发布副本及哈希清单
│   └── check.mjs           # 源码—发布运行时一致性检查
└── dist/                   # 本地生成，不入库

public/games/               # GitHub Pages 当前发布产物与静态资源
```

地图、第一关和第三关的 HTML/CSS 外壳位于 `public/games/*.html`；交互逻辑的可读源码位于 `game/src/`。第二关基于固定版本 Abyssal Garden 的原生 WebGPU 管线，由源级接入脚本与 esbuild 打包；Three.js 只构造新增模型，不负责渲染。第三关以 ES Modules 维护。除维护发布流程外，请不要直接修改 `public/games/assets/` 中的哈希运行文件。

## 可以贡献什么

- 完成第四关“双生实验岛”和第五关“生长花园”；
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
- 第二关上游 [Abyssal Garden](https://github.com/Noniv/abyssal-garden) 遵循 MIT License，Copyright (c) 2026 Maksymilian Dendura；固定版本与逐文件哈希见 `src/abyssal/upstream-lock.json`，许可保留在原始源码与发布运行时中。
- Three.js 0.180.0 遵循 MIT License，发布副本见 [`public/games/three.LICENSE.txt`](../public/games/three.LICENSE.txt)。
- Apache License 2.0 不授予商标权。Alibaba Cloud、AgentLoop、Loopie 的名称、标识和角色形象仍属于相应权利人；复用、宣传或制作衍生品牌素材时，请另行确认授权。
- 贡献者只能提交自己有权许可的代码和素材。引用第三方内容时，必须说明来源、许可证和必要的署名方式。

如果只想借鉴实现，可以从 `map.js`、`lighthouse.js`、`sea/host.js`、`abyssal/src/game.js` 和 `ocean/game.js` 开始阅读，分别了解地图、横版关卡、共享导航、原生 WebGPU 探索与 Canvas 2D 吞食关卡。
