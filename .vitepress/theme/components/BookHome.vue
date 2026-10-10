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
        <p class="book-eyebrow"><span /> 开源白皮书 · 2026</p>
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
        </div>
        <a v-if="last" class="continue-reading" :href="last.href"
          >继续上次阅读：{{ last.title }} <span>→</span></a
        >
      </div>
      <div class="book-cover" aria-hidden="true">
        <div class="cover-top">
          <span>阿里云 × 社区</span><span>2026 EDITION</span>
        </div>
        <div class="cover-title">
          AI AGENT<br />HANDBOOK<span>智能体工程白皮书</span>
        </div>
        <div class="cover-orbit">
          <div class="orbit one" />
          <div class="orbit two" />
          <div class="orbit three" />
          <span class="orbit-center">Agent</span
          ><span class="orbit-label top">BUILD</span
          ><span class="orbit-label bottom">RUN</span>
        </div>
        <div class="cover-bottom">
          从架构到实践<br /><span>A FIELD GUIDE TO AGENT ENGINEERING</span>
        </div>
      </div>
    </section>

    <div class="book-facts" aria-label="全书概览">
      <div>
        <strong>{{ book.chapterCount }}</strong
        ><span>个章节，贯穿工程全程</span>
      </div>
      <div>
        <strong>{{ book.parts.length }}</strong
        ><span>个篇章，循序建立认知</span>
      </div>
      <div>
        <strong>{{ book.caseCount }}</strong
        ><span>个案例，来自一线实践</span>
      </div>
      <a :href="withBase('/reading-guide.html')"
        >找到适合你的阅读路径 <span>↗</span></a
      >
    </div>

    <section class="book-parts" aria-labelledby="parts-title">
      <div class="section-heading">
        <div>
          <p class="book-eyebrow">THE BOOK</p>
          <h2 id="parts-title">一条完整的工程主线</h2>
        </div>
        <p>
          构建定义 Agent 如何工作，运行保障它持续工作。<br />治理与调优，让可靠性和效果在实践中不断提升。
        </p>
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
        <p>这本书由阿里云与社区共同维护，欢迎分享反馈、修订与实践经验。</p>
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
