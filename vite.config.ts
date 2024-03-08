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
          additionalData: "@use '@/styles/element.theme.scss' as *;"
        }
      }
    },
    server: {
      proxy: {
        "/api": {
          target: env.VITE_ADMIN_PROXY_PATH, // 目标服务器地址
          ws: true, // 是否启用 WebSocket
          changeOrigin: true // 是否修改请求头中的 Origin 字段
          // rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    },
    // 全局常量
    define: {
      __NEXT_NAME__: JSON.stringify(process.env.npm_package_name)
    }
  };
});
