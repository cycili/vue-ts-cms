<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><UserFilled /></el-icon>
            账号登录
          </span>
        </template>
        <loginAccount ref="accountRef"></loginAccount>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><Iphone /></el-icon>手机登录</span
          >
        </template>
        <loginPhone ref="phoneRef"></loginPhone>
      </el-tab-pane>
    </el-tabs>
    <!-- 记住密码 -->
    <div class="account-control">
      <el-checkbox v-model="keepPassword">记住密码</el-checkbox>
      <el-link type="primary"> 忘记密码</el-link>
    </div>
    <div>
      <el-button class="login" type="primary" @click="handleLoginClick">
        立即登录</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UserFilled, Iphone, Phone } from '@element-plus/icons-vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
//定义属性
const keepPassword = ref(true)
const accountRef = ref<InstanceType<typeof loginAccount>>()
const phoneRef = ref<InstanceType<typeof loginPhone>>()
const currentTab = ref<string>('account')
// 定义方法
//
const handleLoginClick = () => {
  if (currentTab.value === 'account') {
    console.log('立即登录', accountRef.value?.loginAction(keepPassword.value))
  } else {
    console.log('立即登录', phoneRef.value?.phoneAction(keepPassword.value))
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 120px;
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .login {
    width: 100%;
    height: 48px;
  }
}
</style>
