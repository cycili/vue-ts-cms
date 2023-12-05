import { createStore } from 'vuex'
import type { IRootState } from './type'
import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'cc',
      age: 80,
      height: '123'
    }
  },
  getters: {},
  mutations: {
    changeName(state) {
      state.name
    }
  },
  actions: {},
  modules: {
    login
  }
})
export default store
