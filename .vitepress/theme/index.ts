import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import BookHome from "./components/BookHome.vue";
import BookContents from "./components/BookContents.vue";
import ChapterIndex from "./components/ChapterIndex.vue";
import MermaidDiagram from "./components/MermaidDiagram.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("BookHome", BookHome);
    app.component("BookContents", BookContents);
    app.component("ChapterIndex", ChapterIndex);
    app.component("MermaidDiagram", MermaidDiagram);
  },
};
