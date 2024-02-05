import { autoComplete, Plugin as importToCDN } from "vite-plugin-cdn-import";

/**CDN加速 */
export default function createImportToCDN() {
  return importToCDN({
    modules: [
      {
        name: "vue",
        var: "Vue",
        path: "https://cdn.bootcdn.net/ajax/libs/vue/3.2.47/vue.global.min.js"
      }
      // {
      //   name: "vue-demi",
      //   var: "VueDemi",
      //   path: "https://cdn.bootcdn.net/ajax/libs/vue-demi/0.14.6/index.iife.min.js",
      // },
    ]
  });
}
