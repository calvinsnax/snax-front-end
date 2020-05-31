import axios from '@/plugins/axios'

export default {
  namespaced: true,

  state: {
    orders: [],
  },

  mutations: {
    setOrders(state, payload) {
      state.orders = payload
    },
  },

  actions: {
    async fetchData({ commit }) {
      try {
        const result = await axios.get('/user/order')

        if (!result) return

        commit('setOrders', result.data)
      } catch (err) {
        console.log(err)
      }
    },

    async updatedSiteUrl({ dispatch }, { orderId, siteUrl }) {
      try {
        const result = await axios.patch(`/user/order/${orderId}`, {
          siteUrl,
        })

        if (!result) return

        dispatch('fetchData')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
