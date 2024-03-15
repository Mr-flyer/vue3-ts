import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import pinia from "@/stores";

import "./styles/tailwind.css";
import "./styles/index.scss";

const app = createApp(App);
app.use(router).use(pinia).mount("#app");
