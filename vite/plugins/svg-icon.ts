import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

/**
 * 使用svg-icon
 * @param isBuild 是否为生产环境
 */
export default function createSvgIcon(isBuild) {
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")],
    symbolId: "icon-[dir]-[name]",
    svgoOptions: isBuild // 是否压缩
  });
}
