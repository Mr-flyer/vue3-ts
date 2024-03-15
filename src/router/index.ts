import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
// 组件
import Login from "@/views/login/index.vue";
import Sample from "@/views/exportAsWord/sample.vue";
import Docx from "@/views/docxtemplate.vue";

const staticRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/sample",
    component: Sample
  },
  {
    path: "/docx",
    component: Docx
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
});

export default router;
