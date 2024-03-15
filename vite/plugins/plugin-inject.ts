// ts声明
import type { PluginOption } from "vite";
import inject from "@rollup/plugin-inject";

export default function createPluginInject(): PluginOption {
  return inject({ $: "jquery" });
}
