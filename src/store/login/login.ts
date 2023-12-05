import { Module } from 'vuex'
import router from '@/router'
import type { ILoginState } from './type'
import type { IRootState } from '../type'
import type { IAccount } from '@/apis/login/type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/apis/login/login'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state: any, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }: any, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)

      const { id, token } = loginResult.data
      commit('changeToken', token)
      // localCache.setCache('token', token)
      //2.请求用户信息的数据
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localStorage.setCache('userInfo', userInfo)
      console.log(loginResult.data.id)
      console.log('执行accountLoginAction', payload)

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const UserMenus = userMenusResult.data
      commit('changeUserMenus', UserMenus)
      localStorage.setCache('UserMenus', UserMenus)
      console.log('UserMenus', UserMenus)

      //4.跳到首页
      router.push('/main')
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
    }
  }
}

export default loginModule
