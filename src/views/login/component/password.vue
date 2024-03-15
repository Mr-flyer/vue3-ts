<template>
  <el-form
    ref="loginFormRef"
    :model="state.loginForm"
    :rules="state.loginRules"
    size="large"
    label-width="auto"
  >
    <el-form-item prop="username">
      <el-input
        v-model="state.loginForm.username"
        type="password"
        autocomplete="off"
        placeholder="账号"
      />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="state.loginForm.password"
        type="password"
        autocomplete="off"
        placeholder="密码"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="btn-submit rounded-lg mt-2"
        :loading="state.loading"
        @click="handleVerify"
      >
        <span class="tracking-wide font-bold">登 录</span>
      </el-button>
    </el-form-item>
  </el-form>
  <Verify
    ref="verifyRef"
    :mode="'pop'"
    :captcha-type="'blockPuzzle'"
    :img-size="{ width: '330px', height: '155px' }"
    @success="verifySuccess"
  />
</template>

<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import { useUserInfo } from "@/stores/userInfo";

// 动态加载滑块验证码组件
const Verify = defineAsyncComponent(() => import("@/components/Verifition/Verify.vue"));

// 组件实例ref
const verifyRef = ref<InstanceType<typeof Verify>>();
const loginFormRef = ref<FormInstance>();

// 变量
const emit = defineEmits(["signInSuccess"]);
const loading = ref(false);
const state = reactive({
  loading: false,
  loginForm: {
    // 表单数据
    username: "", // 用户名
    password: "", // 密码
    code: "", // 验证码
    randomStr: "blockPuzzle" // 验证码随机数
  },
  loginRules: {
    // 表单校验
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }], // 用户名校验规则
    password: [{ required: true, message: "请输入密码", trigger: "blur" }] // 密码校验规则
  }
});

// 调用滑块验证码进行校验
const handleVerify = async () => {
  try {
    await loginFormRef.value?.validate();
    verifyRef.value?.show(); // 显示滑块验证码
  } catch (error) {}
};

// 滑块验证码校验成功调用后台登录接口
const verifySuccess = (params: any) => {
  state.loginForm.code = params.captchaVerification; // 获取验证码
  onSignIn(); // 调用登录方法
};

// 账号密码登录
const onSignIn = async () => {
  try {
    loading.value = true;
    await useUserInfo().login(state.loginForm);
    emit("signInSuccess");
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.btn-submit {
  width: 100%;
  font-weight: 300;
}
</style>
