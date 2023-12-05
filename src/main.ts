import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import ccRequest from './apis'
// 全局引用
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/apis/index'
import './assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
ccRequest.request({
  url: 'home/multidata',
  method: 'GET',
  showLoading: false
})
createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)

  .mount('#app')
