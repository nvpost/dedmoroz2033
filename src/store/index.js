import { createStore } from 'vuex'

import { levels } from './levels.js'

export default createStore({
  state: {
    level:1,
    levels:levels,
    userData:{},
    isTouchScreen: false
  },
  getters: {
    getUserData(state){
      return state.userData
    },
    getCount(state){
      return state.userData.length
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
