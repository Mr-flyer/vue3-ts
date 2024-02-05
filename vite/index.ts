// ts声明
import type { PluginOption } from "vite";
// 工具
import vue from "@vitejs/plugin-vue";
import createAutoImportComponents from "./plugins/auto-import-components";
import createSetupExtend from "./plugins/setup-extend";
import createSvgIcon from "./plugins/svg-icon";
import buildZip from "./plugins/zip";
import createVisualizer from "./plugins/visualizer";
import createImportToCDN from "./plugins/importToCDN";

export default function createVitePlugins({ env: viteEnv, mode, command }) {
  const isBuild = command === "build";
  const vitePlugins: PluginOption[] = [vue(), ...createAutoImportComponents(viteEnv)];
  vitePlugins.push(createSetupExtend());
  vitePlugins.push(createSvgIcon(isBuild));
  // vitePlugins.push(buildZip());
  // vitePlugins.push(createVisualizer());
  // vitePlugins.push(createImportToCDN());
  return vitePlugins;
}

//#region 批量导入测试
// 获取plugins目录下所有的插件文件
// const pluginFiles = fs.readdirSync(path.resolve(__dirname, 'plugins'));
// 动态导入所有插件并添加到plugins数组中
// const plugins = pluginFiles.map((file) => import(`./plugins/${file}`));
//#endregion
