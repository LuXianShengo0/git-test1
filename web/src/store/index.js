import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfor: null,
    count: 1,
    name: 'dkr',
    sex: '男',
    from: 'china'
  },
  mutations: {
    UpDateUserInfor(state,data) {
      // 变更状态
      state.userInfor = data
    }
  },
  actions: {
  },
  modules: {
  }
})
