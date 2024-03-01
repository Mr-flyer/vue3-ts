<template>
  <component :is="layouts['defaults']" />
</template>

<script setup lang="ts">
const layouts: any = {
  defaults: import("@/layout/main/defaults.vue")
};
</script>

<style scoped lang="scss"></style>
