<script setup lang="ts">
import zhCN from "element-plus/dist/locale/zh-cn.mjs";
</script>

<template>
  <el-config-provider :lang="zhCN">
    <router-view />
  </el-config-provider>
</template>

<style scoped lang="scss">
</style>
