<template>
  <div class="login-phone">
    <el-form label-width="60px">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="密码" prop="verifyCode">
        <div class="getCode">
          <el-input v-model="phone.verifyCode" />
          <el-button type="primary" class="btn"> 获取验证码</el-button>
        </div>
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
    const phone = reactive({
      number: '',
      verifyCode: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const phoneAction = (keepPassword: boolean) => {
      console.log('loginAction')
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('登录')
          //1.判断是否需要记住密码
          if (keepPassword) {
            // 本地缓存
            localCache.setCache('name', phone.number)
            localCache.setCache('password', phone.verifyCode)
          } else {
            localCache.removeCache('name')
            localCache.removeCache('password')
          }
          // 2.开始使用登录逻辑
          store.dispatch('login/phoneLoginAction', { ...phone })
          console.log()
        } else {
        }
      })
    }
    return { phone, formRef, phoneAction }
  }
})
</script>

<style lang="less" scoped>
.getCode {
  display: flex;
  .btn {
    margin-left: 8px;
  }
}
</style>
