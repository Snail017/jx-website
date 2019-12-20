import Vue from 'vue'
import Vuex from 'vuex'

/**
 * 格式设置  语言切换可以放在store中，三个module
 * 现在语言切换时请求后端，故留作后期开发
 */
// import complex from './module/complex'
import simplyfy from './module/simplyfy'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    simplyfy
  }
})
