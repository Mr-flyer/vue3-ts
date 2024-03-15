// 按需引入ElementPlus组件
import AutoImport from "unplugin-auto-import/vite"; // 自动导入
import Components from "unplugin-vue-components/vite"; // 组件注册
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 自动导入Icon图标
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

/**
 * 按需导入
 * @param command 当前环境 build | prod
 */
export default function createAutoImportComponents(command) {
  return [
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      // 自动导入（函数）
      dts: "types/auto-imports.d.ts",
      imports: ["vue", "vue-router", "pinia"],
      eslintrc: { enabled: true },
      resolvers: [
        ElementPlusResolver({ importStyle: "sass" })
        // IconsResolver()
      ]
    }),
    // https://github.com/antfu/unplugin-vue-components#readme
    Components({
      // 自动注册（组件）
      dts: "types/components.d.ts",
      resolvers: [
        ElementPlusResolver({ importStyle: "sass" })
        // IconsResolver({ enabledCollections: ['ep'] }),
      ]
      // resolvers: command === 'build' ? ElementPlusResolver() : undefined,
    }),
    Icons({ autoInstall: true })
    // {
    //   // 开发环境完整引入element-plus 》优化本地服务启动时页面卡顿、刷新问题
    //   // https://github.com/antfu/unplugin-vue-components/issues/361
    //   name: 'dev-auto-import-element-plus',
    //   transform(code, id) {
    //     if (command !== 'build' && /src\/main.ts$/.test(id)) {
    //       return {
    //         code: `${code};import ElementPlus from 'element-plus';import 'element-plus/theme-chalk/src/index.scss';app.use(ElementPlus);`,
    //         map: null,
    //       };
    //     }
    //   },
    // },
  ];
}
