import setupExtend from "vite-plugin-vue-setup-extend";

/**直接在script标签上定义name */
export default function createSetupExtend() {
  return setupExtend();
}
