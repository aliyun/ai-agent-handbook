# AgentLoop Self-Evolving Islands Game

[中文](./README.md) | [Play online](https://aliyun.github.io/ai-agent-handbook/games/)

This is the open-source web game included in the AI Agent Handbook. It turns agent observability, auditing, evaluation, experimentation, and optimization into five underwater islands. The first two chapters, Misty Lighthouse and Boundary Customs, are playable today; the other three are open for community contributions.

## Quick start

```bash
npm ci
npm run game:dev
```

The command builds a local preview from readable sources and starts a development server. Open `/index.html` at the URL printed in the terminal.

Before submitting a change, run:

```bash
npm run game:check
npm test
```

`game:check` rebuilds the game and verifies that the readable source reproduces all three runtimes from the published v21 release. `game/dist/` is generated for local preview and must not be committed.

## Source layout

```text
game/
├── src/
│   ├── map.js              # Five-island map and chapter guide
│   ├── lighthouse.js       # Chapter 1: Canvas 2D platformer
│   └── sea/
│       ├── space-v21.js    # Chapter 2 entry: Three.js ocean
│       └── *.js            # Ocean, cockpit, wildlife, and terrain modules
├── scripts/
│   ├── build.mjs           # Build a runnable local preview
│   └── check.mjs           # Verify source/runtime equivalence
└── dist/                   # Generated locally; not committed

public/games/               # Current GitHub Pages release and static assets
```

The HTML/CSS shells for the map and Chapter 1 live in `public/games/*.html`; readable interaction logic lives in `game/src/`. Chapter 2 is maintained as ES Modules and bundled with esbuild. Do not edit hash-named runtime files in `public/games/assets/` directly unless you are maintaining the release pipeline.

## Ways to contribute

- Build Chapter 3 (Echo Theater), Chapter 4 (Twin Experiment Islands), or Chapter 5 (Growth Garden).
- Add gameplay mechanics, collectibles, sea life, or accessibility improvements.
- Improve mobile controls, loading, rendering performance, and low-end fallbacks.
- Fix navigation, progress persistence, and browser compatibility.
- Add automated tests, visual regression checks, and performance baselines.

For new mechanics, submit a playable isolated sample before integrating it into the main map. Control or camera changes should include real desktop and mobile test results.

## Pull requests

1. Branch from `main` and keep the change focused.
2. Edit files under `game/src/`, then play the result with `npm run game:dev`.
3. Run `npm run game:check`, `npm run check`, and relevant Playwright tests.
4. Describe gameplay changes, test environments, and known limits. Include desktop and mobile screenshots for visual changes.
5. Do not commit `game/dist/`, test screenshots, local caches, secrets, or internal enterprise data.

Use [Issues](https://github.com/aliyun/ai-agent-handbook/issues) to discuss new chapters or larger mechanics, or open a [Pull Request](https://github.com/aliyun/ai-agent-handbook/pulls) directly.

## License and asset boundaries

- Project code under `game/` follows the repository's [Apache License 2.0](https://github.com/aliyun/ai-agent-handbook/blob/main/LICENSE).
- Three.js 0.180.0 uses the MIT License; the bundled notice is in [`public/games/three.LICENSE.txt`](../public/games/three.LICENSE.txt).
- Apache License 2.0 does not grant trademark rights. Alibaba Cloud, AgentLoop, and Loopie names, marks, and character artwork remain the property of their respective rights holders. Confirm separate permission before reusing them for promotion or derivative branding.
- Contributors may submit only code and media they have the right to license. Third-party material must include its source, license, and required attribution.

To study the implementation, start with `map.js`, `lighthouse.js`, and `sea/space-v21.js`. They show the map host, a Canvas 2D chapter, and a Three.js 3D chapter respectively.
