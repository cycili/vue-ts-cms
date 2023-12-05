<template>
  <div>
    <!-- <el-button type="primary" @click="submit(input)">提交按钮 </el-button> -->
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <!-- 输入框 -->
    <!-- <ElForm label-width="120px">
      <ElFormItem label="客户名字：">
        <ElInput
          type="primary"
          placeholder="这是一个输入框哦"
          v-model="input"
        ></ElInput
      ></ElFormItem>

     提交按钮
    </ElForm> -->
  </div>
</template>

<script lang="ts" setup>
// 引入
import { ref, reactive } from 'vue'
import { ElInput, ElButton, ElForm, ElFormItem } from 'element-plus'
// import 'element-plus/theme-chalk'
// import 'element-plus/theme-chalk/el-button.css'

// 定义变量 // 表单绑定的值
const input = ref<string>('')
console.log(input.value)
//定义方法
const submit = async (input: string) => {
  // 拿到值
  console.log('value', input)
  // 上送接口
  // let res = await submitAxios(input)
}
</script>

<style scoped></style>
