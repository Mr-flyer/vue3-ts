// commit 提交格式 》type(scope?): subject  #scope is optional
// type 》关键字、subject 》内容
module.exports = {
  extends: ["@commitlint/config-conventional"],
  // [等级,类型,值]
  // 错误等级》0,1,2、类型》always|never
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能 feature
        "fix", // 修复 bug
        "docs", // 文档注释
        "style", // 代码格式(不影响代码运行的变动)
        "refactor", // 重构、优化(既不增加新功能，也不是修复bug)
        "perf", // 性能优化
        "test", // 增加测试
        "chore", // 构建过程或辅助工具的变动
        "revert", // 回退
        "build" //打包
      ]
    ], // 可提交的关键字
    // "type-case": [0], // 关键字小写
    "type-empty": [0], // 关键字不能为空
    "subject-full-stop": [0, "never"], // 结尾符号
    "subject-case": [0, "never"], // 内容小写
    "header-max-length": [0, "always", 72] // 提交字符最大长度
  }
};
