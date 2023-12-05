<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'
import localCache from '@/utils/cache'
export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (keepPassword: boolean) => {
      console.log('loginAction')
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('登录')
          //1.判断是否需要记住密码
          if (keepPassword) {
            // 本地缓存
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.removeCache('name')
            localCache.removeCache('password')
          }
          // 2.开始使用登录逻辑
          // store.dispatch('login/accountLoginAction', { ...account })
          console.log()
        } else {
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})

// 规则
</script>

<style lang="less" scoped></style>
