<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from "vue";
import { useData, useRoute } from "vitepress";

const { frontmatter, page } = useData();
const route = useRoute();
const size = ref("normal");
const progress = ref(0);
const viewer = ref(null);
const media = ref({ src: "", alt: "" });
const printing = ref(false);
let timer;
let objectUrl;
function setSize(value) {
  size.value = value;
  document.documentElement.dataset.readingSize = value;
  try {
    localStorage.setItem("handbook:size", value);
  } catch {}
}
function saveProgress() {
  const doc = document.querySelector(".vp-doc");
  if (!doc) return;
  const range = document.documentElement.scrollHeight - innerHeight;
  progress.value =
    range > 0 ? Math.min(100, Math.round((scrollY / range) * 100)) : 100;
  if (!frontmatter.value.bookPart) return;
  const headings = [...doc.querySelectorAll("h2[id], h3[id]")];
  const current = headings
    .filter((h) => h.getBoundingClientRect().top < 150)
    .at(-1);
  const href =
    location.pathname + (current ? "#" + encodeURIComponent(current.id) : "");
  try {
    localStorage.setItem(
      "handbook:last",
      JSON.stringify({ href, title: page.value.title }),
    );
  } catch {}
}
function onScroll() {
  clearTimeout(timer);
  timer = setTimeout(saveProgress, 150);
}
function openImage(src, alt) {
  media.value = { src, alt };
  viewer.value?.showModal();
}
function imageClick(event) {
  const img = event.target.closest?.(".vp-doc img:not(.mermaid-diagram img)");
  if (img && !img.closest("a"))
    openImage(img.currentSrc || img.src, img.alt || "正文插图");
}
function imageKey(event) {
  if (event.key === "Enter" || event.key === " ") {
    if (event.target.matches('.vp-doc img[role="button"]')) {
      event.preventDefault();
      imageClick(event);
    }
  }
}
function diagramOpen(event) {
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  objectUrl = URL.createObjectURL(
    new Blob([event.detail.svg], { type: "image/svg+xml" }),
  );
  openImage(objectUrl, "Mermaid 图表");
}
async function preparePage() {
  await nextTick();
  document.querySelectorAll(".vp-doc img").forEach((img) => {
    if (!img.closest("a, .mermaid-diagram")) {
      img.tabIndex = 0;
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", `放大：${img.alt || "正文插图"}`);
    }
  });
  saveProgress();
}
async function printPage() {
  printing.value = true;
  try {
    const pending = [];
    window.dispatchEvent(
      new CustomEvent("book:prepare-print", { detail: pending }),
    );
    document.querySelectorAll(".vp-doc img").forEach((img) => {
      img.loading = "eager";
      pending.push(img.decode().catch(() => {}));
    });
    await Promise.all(pending);
    await nextTick();
    window.print();
  } finally {
    printing.value = false;
  }
}
onMounted(() => {
  try {
    const value = localStorage.getItem("handbook:size");
    if (["small", "normal", "large"].includes(value)) setSize(value);
  } catch {}
  preparePage();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("book:diagram", diagramOpen);
  document.addEventListener("click", imageClick);
  document.addEventListener("keydown", imageKey);
});
watch(() => route.path, preparePage, { flush: "post" });
onBeforeUnmount(() => {
  clearTimeout(timer);
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("book:diagram", diagramOpen);
  document.removeEventListener("click", imageClick);
  document.removeEventListener("keydown", imageKey);
});
</script>
<template>
  <div
    class="reading-progress"
    :style="{ width: progress + '%' }"
    aria-hidden="true"
  />
  <div class="reader-tools" aria-label="阅读设置">
    <div class="reading-meta">
      <span v-if="frontmatter.bookPart">{{ frontmatter.bookPart }}</span
      ><span>约 {{ frontmatter.readingMinutes }} 分钟</span>
    </div>
    <div class="reader-actions">
      <div class="font-controls" role="group" aria-label="正文字号">
        <button
          v-for="(label, value) in { small: '小', normal: '中', large: '大' }"
          :key="value"
          :aria-label="`${label}号字`"
          :aria-pressed="size === value"
          @click="setSize(value)"
        >
          {{ label }}
        </button>
      </div>
      <button
        class="print-button"
        :disabled="printing"
        @click="printPage"
        aria-label="打印本页"
      >
        {{ printing ? "准备中…" : "打印" }}
      </button>
    </div>
  </div>
  <dialog
    ref="viewer"
    class="image-viewer"
    aria-label="图片预览"
    @click="
      (event) => {
        if (event.target === viewer) viewer.close();
      }
    "
  >
    <div class="viewer-actions">
      <a :href="media.src" target="_blank" rel="noopener noreferrer"
        >打开原图 ↗</a
      ><button autofocus @click="viewer.close()" aria-label="关闭图片预览">
        关闭 ×
      </button>
    </div>
    <img :src="media.src || undefined" :alt="media.alt" />
    <p>{{ media.alt }}</p>
  </dialog>
</template>
