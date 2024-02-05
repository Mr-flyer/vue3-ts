import { defineConfig, loadEnv } from "vite";
import createVitePlugins from "./vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: createVitePlugins({ env, mode, command })
  };
});
