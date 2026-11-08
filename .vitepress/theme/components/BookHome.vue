<script setup>
import { ref, onMounted } from "vue";
import { withBase } from "vitepress";
import { data as book } from "../../book.data";
const last = ref(null);
onMounted(() => {
  try {
    const saved = JSON.parse(localStorage.getItem("handbook:last") || "null");
    if (saved?.href?.startsWith(withBase("/")) && !saved.href.startsWith("//"))
      last.value = saved;
  } catch {
    /* Reading works when storage is unavailable. */
  }
});
</script>

<template>
  <main class="book-home vp-raw">
    <section class="book-hero" aria-labelledby="book-title">
      <div class="hero-copy">
        <p class="book-eyebrow"><span /> Agent 工程开源白皮书</p>
        <h1 id="book-title">AI Agent<br /><em>Handbook</em></h1>
        <p class="hero-subtitle">从模型能力，到可靠的 Agent 系统</p>
        <p class="hero-description">
          一本面向企业级智能体的工程实践指南。沿着架构、构建、运行、治理与调优的完整生命周期，理解
          Agent 如何从原型走向生产。
        </p>
        <div class="hero-actions">
          <a class="book-button primary" :href="withBase('/preface.html')"
            >开始阅读 <span>→</span></a
          >
          <a class="book-button secondary" :href="withBase('/contents.html')"
            >浏览全书目录</a
          >
          <a class="book-button secondary challenge-entry" :href="withBase('/challenges/')" target="_self"
            >闯关游戏 <span class="challenge-beta">Beta</span><span aria-hidden="true">→</span></a
          >
        </div>
        <a v-if="last" class="continue-reading" :href="last.href"
          >继续上次阅读：{{ last.title }} <span>→</span></a
        >
        <a
          class="hero-github"
          href="https://github.com/aliyun/ai-agent-handbook"
          target="_blank"
          rel="noopener noreferrer"
          ><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"
            /></svg
          ><span>在 GitHub 上参与共建</span
          ><span class="hero-github-arrow" aria-hidden="true">↗</span></a
        >
      </div>
      <div class="book-cover" aria-hidden="true">
        <div class="cover-title">
          AI AGENT<br />HANDBOOK<span>智能体工程白皮书</span>
        </div>
        <div class="cover-orbit">
          <div class="orbit one" />
          <div class="orbit two" />
          <div class="orbit three" />
          <span class="orbit-center">Agent</span>
        </div>
        <div class="cover-bottom">
          从架构到实践<br /><span>A FIELD GUIDE TO AGENT ENGINEERING</span>
        </div>
      </div>
    </section>

    <div class="book-facts" aria-label="全书概览">
      <div>
        <strong>{{ book.chapterCount }}</strong
        ><span>个章节，涵盖 Agent 全生命周期</span>
      </div>
      <div>
        <strong>{{ book.parts.length }}</strong
        ><span>个篇章，循序建立认知</span>
      </div>
      <div>
        <strong>{{ book.caseCount }}</strong
        ><span>个案例，来自一线实践</span
        ><em class="facts-update">每周新增最新实践</em>
      </div>
    </div>

    <section class="book-parts" aria-labelledby="parts-title">
      <div class="section-heading">
        <h2 id="parts-title">目录</h2>
      </div>
      <div class="parts-grid">
        <a
          v-for="(part, i) in book.parts"
          :key="part.id"
          class="part-card"
          :href="withBase(part.href)"
        >
          <div class="part-topline">
            <span>PART {{ String(i + 1).padStart(2, "0") }}</span
            ><span>↗</span>
          </div>
          <h3>
            {{ part.title }} <small>{{ part.english }}</small>
          </h3>
          <p>{{ part.description }}</p>
          <span class="part-range">第 {{ part.range }} 章</span>
        </a>
        <a class="part-card survey-card" :href="withBase('/survey.html')"
          ><div class="part-topline">
            <span>COMMUNITY INSIGHTS</span><span>↗</span>
          </div>
          <h3>从开发者的现实出发</h3>
          <p>阅读 2026 年 Agent 开发者调研，了解工程落地的共同挑战。</p>
          <span class="part-range">阅读调研报告 →</span></a
        >
      </div>
    </section>
    <section class="book-invitation">
      <div>
        <p class="book-eyebrow">BUILT IN THE OPEN</p>
        <h2>让实践成为下一页的答案。</h2>
        <p>开源项目由阿里云与社区共同维护，欢迎反馈修改建议和您的一线实践。</p>
      </div>
      <a
        class="book-button secondary"
        href="https://github.com/aliyun/ai-agent-handbook"
        target="_blank"
        rel="noopener noreferrer"
        >参与共建 ↗</a
      >
    </section>
  </main>
</template>
