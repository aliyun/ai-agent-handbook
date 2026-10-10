<script setup>
import { withBase } from "vitepress";
import { data as book } from "../../book.data";
</script>
<template>
  <div class="book-contents">
    <div class="contents-intro">
      <a :href="withBase('/preface.html')">序言 →</a
      ><a :href="withBase('/survey.html')">2026 年 Agent 开发者调研 →</a>
    </div>
    <section
      v-for="(part, index) in book.parts"
      :key="part.id"
      class="contents-part"
    >
      <header>
        <span class="book-eyebrow"
          >PART {{ String(index + 1).padStart(2, "0") }}</span
        >
        <h2 :id="part.id">
          <a :href="withBase(part.href)"
            >{{ part.title }} <small>本篇导读 →</small></a
          >
        </h2>
        <p>{{ part.description }}</p>
      </header>
      <ol>
        <li v-for="page in part.pages" :key="page.href">
          <a :href="withBase(page.href)">{{ page.title }}</a>
          <ul v-if="page.children">
            <li v-for="child in page.children" :key="child.href">
              <a :href="withBase(child.href)">{{ child.title }}</a>
            </li>
          </ul>
        </li>
      </ol>
    </section>
  </div>
</template>
