<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script setup>
import LoginPanel from './cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url(../../assets/img/bg.webp) no-repeat;
  background-size: 100% 100%;
}
</style>
