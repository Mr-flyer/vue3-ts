// https://www.tkcnn.com/eslint/
module.exports = {
  // 指定环境 》提供预定义的全局变量
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // 继承有三种模式
  // 1.从 ESLint 本身继承 》eslint:xx
  // 2.从 eslint-config-xxx 的 npm 包继承，可省略`eslint-config`
  // 3.从 ESLint 插件继承，可省略 `eslint-plugin`
  // 格式一般为: `plugin:${pluginName}/${configName}
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  // 解析器（vue官方推荐 vue-eslint-parser）,默认parser
  parser: "vue-eslint-parser",
  // 解析器配置
  parserOptions: {
    ecmaVersion: "latest", // 语法版本，latest 》最新
    // 想使用哪些额外的语言特性的对象
    ecmaFeatures: {
      jsx: true
    },
    parser: "@typescript-eslint/parser",
    sourceType: "module" // 解析模式
  },
  // 覆盖规则 》比方为特定类型的文件指定处理器
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "module"
      }
    }
  ],
  plugins: ["@typescript-eslint", "vue"],
  // 校验规则
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 打开规则作为警告（不影响退出代码）
  // "error" 或 2 - 打开规则作为错误（触发时退出代码为 1）
  rules: {
    indent: ["error", 2], // 缩进模式 2空格，参二可设置为`tab`
    // "linebreak-style": ["error", "unix"], // 行尾/换行符LF
    quotes: ["error", "double"], // 字符串双引号
    semi: ["error", "always"], // 结尾加;号

    // eslint https://eslint.nodejs.cn/docs/rules
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-multiple-empty-lines": ["warn", { max: 1 }], // 不允许多个空行
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unexpected-multiline": "error", // 禁止空余的多行
    "no-useless-escape": "off", // 禁止不必要的转义字符

    // eslint-plugin-vue配置 https://eslint.vuejs.org/rules/
    "vue/multi-word-component-names": "off", // 组件名多字符
    "vue/require-default-prop": "off", // prop要有默认值
    "vue/no-setup-props-reactivity-loss": "off", // 禁止解构setup函数入参 》失去响应
    "vue/require-toggle-inside-transition": "off", // transition组件下子标签需带切换条件
    "vue/require-explicit-emits": "off",
    "vue/custom-event-name-casing": [
      "error",
      "camelCase", // emits事件名驼峰声明
      {
        ignores: []
      }
    ],
    "vue/prop-name-casing": ["error", "camelCase"], // props属性名驼峰声明
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always", // 空元素自动闭合 如 <img />
          normal: "never", // 其他非空元素不许自动闭合
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ], // 元素自动闭合规则

    // @typescript-eslint配置 https://typescript-eslint.io/rules/
    "@typescript-eslint/no-explicit-any": "off", // 禁用any
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-non-null-assertion": "off", // 禁用运算符的非 null 断言 》如 a!.b
    "@typescript-eslint/explicit-function-return-type": "off", // 函数标明返回类型
    "@typescript-eslint/explicit-module-boundary-types": "off", // 导出的函数标明入参、返回类型
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: false, // 允许 `const { props, state } = this`;
        allowedNames: ["self"] // 允许 `const self = this`;
      }
    ],

    "prettier/prettier": "off" // 关闭 prettier 的 ESLint 校验
  }
};
