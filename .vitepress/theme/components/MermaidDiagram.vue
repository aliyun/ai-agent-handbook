<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useData } from "vitepress";
import { renderDiagram } from "./mermaid-renderer";
const props = defineProps({ code: { type: String, required: true } });
const { isDark } = useData();
const element = ref(null);
const svg = ref("");
const error = ref("");
const source = decodeURIComponent(props.code);
let observer,
  visible = false,
  generation = 0;
async function render() {
  const id = ++generation;
  try {
    const result = await renderDiagram(source, isDark.value);
    if (id === generation) {
      svg.value = result;
      error.value = "";
    }
  } catch (e) {
    if (id === generation) error.value = String(e.message || e);
  }
}
function expand() {
  window.dispatchEvent(
    new CustomEvent("book:diagram", { detail: { svg: svg.value } }),
  );
}
function preparePrint(event) {
  visible = true;
  observer?.disconnect();
  event.detail.push(svg.value ? Promise.resolve() : render());
}
onMounted(() => {
  window.addEventListener("book:prepare-print", preparePrint);
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        visible = true;
        observer.disconnect();
        render();
      }
    },
    { rootMargin: "300px" },
  );
  observer.observe(element.value);
});
watch(isDark, () => {
  if (visible) render();
});
onBeforeUnmount(() => {
  window.removeEventListener("book:prepare-print", preparePrint);
  observer?.disconnect();
  generation++;
});
</script>
<template>
  <figure
    ref="element"
    class="mermaid-diagram"
    :data-rendered="svg ? 'true' : 'false'"
  >
    <div
      v-if="svg"
      class="diagram-svg"
      role="img"
      aria-label="流程图，文字说明可在图表源码中查看"
      v-html="svg"
    />
    <p v-else class="diagram-status">
      {{ error ? "图表暂时无法渲染，可展开源码查看。" : "图表加载中…" }}
    </p>
    <figcaption>
      <details>
        <summary>图表源码</summary>
        <pre>{{ source }}</pre>
        <p v-if="error" class="diagram-error">{{ error }}</p>
      </details>
      <button v-if="svg" @click="expand">查看大图 ↗</button>
    </figcaption>
  </figure>
</template>
