# AgentLoop Self-Evolving Islands Game

[中文](./README.md) | [Play online](https://aliyun.github.io/ai-agent-handbook/games/)

This is the open-source web game included in the AI Agent Handbook. It turns agent observability, auditing, evaluation, experimentation, and optimization into five underwater islands. The first three chapters, Misty Lighthouse, Boundary Customs, and Echo Theater, are playable today; the other two are open for community contributions.

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

`game:check` rebuilds the game and verifies that the readable source reproduces all five runtimes from the v24 release. `game/dist/` is generated for local preview and must not be committed. Chapter 2 requires WebGPU; desktop Chrome or Edge is recommended. Unsupported browsers can still return to the map and play the other chapters.

After editing Chapter 2 sources, run `node game/scripts/publish.mjs` to rebuild the local release files under `public/games/` before running these checks. This does not push or deploy anything. On macOS, run `PLAYWRIGHT_WEBGPU=1 PLAYWRIGHT_CHANNEL=chrome npx playwright test tests/games.spec.ts --workers=1` for hardware-GPU navigation, completion, and simulated-touch tests. CI without a GPU verifies unsupported-device recovery and the other chapters, not real WebGPU rendering.

## Source layout

```text
game/
├── src/
│   ├── map.js              # Five-island map and chapter guide
│   ├── lighthouse.js       # Chapter 1: Canvas 2D platformer
│   ├── sea/
│   │   ├── host.js         # Renderer-free host; lazy chapters with preserved progress
│   │   └── space-v22.js    # Historical WebGL source; excluded from release builds
│   ├── abyssal/
│   │   ├── upstream/      # Pinned Abyssal Garden original source (MIT)
│   │   ├── src/           # Native Chapter 2, submarine, landmarks, and collision
│   │   ├── integrate.cjs  # Source integration; upstream files remain unchanged
│   │   └── template.html  # Lightweight Chapter 2 shell
│   └── ocean/
│       ├── game.js         # Chapter 3 entry: Canvas 2D eat-and-grow game
│       └── *.mjs           # Ecology rules and original looping music
├── scripts/
│   ├── build.mjs           # Build a runnable local preview
│   ├── native.mjs          # Verify pinned upstream and compile the WebGPU scene
│   ├── publish.mjs         # Rebuild local Chapter 2 release and hash manifest
│   └── check.mjs           # Verify source/runtime equivalence
└── dist/                   # Generated locally; not committed

public/games/               # Current GitHub Pages release and static assets
```

The HTML/CSS shells for the map, Chapter 1, and Chapter 3 live in `public/games/*.html`; readable interaction logic lives in `game/src/`. Chapter 2 uses the pinned Abyssal Garden native WebGPU pipeline, source-level integration, and esbuild; Three.js constructs added geometry but does not render. Chapter 3 is maintained as ES Modules and bundled with esbuild. Do not edit hash-named runtime files in `public/games/assets/` directly unless you are maintaining the release pipeline.

## Ways to contribute

- Build Chapter 4 (Twin Experiment Islands) or Chapter 5 (Growth Garden).
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
- Chapter 2's upstream [Abyssal Garden](https://github.com/Noniv/abyssal-garden) uses the MIT License, Copyright (c) 2026 Maksymilian Dendura. The pinned commit and file hashes are in `src/abyssal/upstream-lock.json`; attribution is retained in original sources and the release runtime.
- Three.js 0.180.0 uses the MIT License; the bundled notice is in [`public/games/three.LICENSE.txt`](../public/games/three.LICENSE.txt).
- Apache License 2.0 does not grant trademark rights. Alibaba Cloud, AgentLoop, and Loopie names, marks, and character artwork remain the property of their respective rights holders. Confirm separate permission before reusing them for promotion or derivative branding.
- Contributors may submit only code and media they have the right to license. Third-party material must include its source, license, and required attribution.

To study the implementation, start with `map.js`, `lighthouse.js`, `sea/host.js`, `abyssal/src/game.js`, and `ocean/game.js`. They show the map, platformer, shared navigation, native WebGPU exploration, and Canvas 2D eat-and-grow game respectively.
