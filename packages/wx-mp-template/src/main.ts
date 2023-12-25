import { createSSRApp } from "vue";
import App from "./App.vue";

import "@/static/css/colorui.css";
import "@/static/css/icon.css";
import "@/static/css/main.css";
import "@/static/css/reset.css";

export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
