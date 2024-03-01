import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
// 组件
import Login from "@/views/login/index.vue";

const staticRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: Login
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
});

export default router;