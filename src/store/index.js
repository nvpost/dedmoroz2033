import { createStore } from 'vuex'

import { level1 } from './level1.js'

export default createStore({
  state: {
    level:1,
    levels:{
      level1: level1,
    }
    
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
