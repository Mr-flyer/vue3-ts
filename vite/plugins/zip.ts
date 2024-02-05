import path from "path";
import compressing from "compressing";
import { cwd } from "node:process";

/**压缩打包后的dist文件夹为zip */
export default (viteEnv) => {
  const targetPath = path.resolve(cwd(), "dist");
  return {
    name: "compression",
    closeBundle() {
      compressing.zip.compressDir(targetPath, viteEnv.VITE_DIST_ZIP ?? "dist.zip");
    }
  };
};
