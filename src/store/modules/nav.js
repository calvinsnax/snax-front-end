export default {
  namespaced: true,

  state: {
    navVisible: false,
    menus: [
      {
        name: '홈',
        routerName: 'home',
        exact: true,
      },
    ],
  },

  mutations: {
    setNavVisible(state, payload) {
      state.navVisible = payload
    },
  },

  actions: {},

  getters: {},
}
