import { createStore } from 'vuex'

import { levels } from './levels.js'

export default createStore({
  state: {
    level:1,
    // levels:{
    //   level1: level1,
    // }
    levels:levels
    
    // level: 1
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
