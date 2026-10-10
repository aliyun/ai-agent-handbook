<script setup>
import { computed } from "vue";
import { withBase } from "vitepress";
import { data as book } from "../../book.data";
const props = defineProps({ chapter: Number });
const chapter = computed(() =>
  book.parts.flatMap((p) => p.pages).find((p) => p.chapter === props.chapter),
);
</script>
<template>
  <ol class="case-index">
    <li v-for="(page, i) in chapter?.children" :key="page.href">
      <a :href="withBase(page.href)"
        ><span>{{ String(i + 1).padStart(2, "0") }}</span
        >{{ page.title }} <b>→</b></a
      >
    </li>
  </ol>
</template>
