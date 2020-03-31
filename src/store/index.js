import Vue from 'vue'
import Vuex from 'vuex'

// Modules
// ───────────────────────────────────

let moduleList = ['auth', 'nav', 'store']
let modules = {}

moduleList.forEach(val => {
  const path = require(`./modules/${val}.js`)
  modules[val] = path.default
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules,
})
