<template>
  <div class="login-container">
    <div class="login-pc">
      <img src="@/assets/login/login_bg.svg" />
    </div>
    <div class="login-box">
      <div class="login-form">
        <div class="my-3 text-6xl font-semibold">MG ADMIN</div>
        <div class="p-12 bg-white mx-auto rounded-3xl w-96">
          <Password />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入组件
const Password = defineAsyncComponent(() => import("./component/password.vue"));
</script>

<style scoped lang="scss">
.login-container {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18rem;
  padding: 0 2rem;
  background: url("@/assets/login/bg.png") no-repeat;
  background-size: 100% 100%;

  .login-pc,
  .login-box {
    display: flex;
    align-items: center;
    text-align: center;
  }
}
</style>
