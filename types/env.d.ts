// 声明文件，*.vue 后缀的文件交给 vue 模块来处理
declare module "*.vue" {
  import { Component } from "vue";
  const component: Component;
  export default component;
}

interface ImportMetaEnv {
  /**请求域名 */
  readonly VITE_BASE_URL: string
}