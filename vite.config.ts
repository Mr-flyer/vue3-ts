import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import createVitePlugins from "./vite";

const pathResolve = (dir: string) => {
  return resolve(__dirname, ".", dir);
};
const alias: Record<string, string> = {
  "@": "/src"
};
// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: createVitePlugins({ env, mode, command }),
    resolve: {
      alias
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/styles/element.theme.scss' as *;",
        },
      },
    },
    // 全局常量
    define: {
      __NEXT_NAME__: JSON.stringify(process.env.npm_package_name)
    }
  };
});
