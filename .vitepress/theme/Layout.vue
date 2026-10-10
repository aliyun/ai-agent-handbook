<script setup>
import DefaultTheme from "vitepress/theme";
import ReaderTools from "./components/ReaderTools.vue";
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before><ReaderTools /></template>
    <template #doc-after>
      <p class="book-feedback">
        发现问题或有实践经验想分享？
        <a
          href="https://github.com/aliyun/ai-agent-handbook/issues"
          target="_blank"
          rel="noopener noreferrer"
          >参与本书讨论 ↗</a
        >
      </p>
    </template>
  </DefaultTheme.Layout>
</template>
