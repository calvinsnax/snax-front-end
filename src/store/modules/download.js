import axios from '@/plugins/axios'

export default {
  namespaced: true,

  state: {
    downloads: [],
  },

  mutations: {
    setDownloads(state, payload) {
      state.downloads = payload
    },
  },

  actions: {
    async fetchData({ commit }) {
      try {
        const result = await axios.get('/content/list')

        if (!result) return

        commit('setDownloads', result.data)
      } catch (err) {
        console.log(err)
      }
    },

    async updatedSiteUrl({ dispatch }, { cartId, siteUrl }) {
      try {
        const result = await axios.patch(`/content/siteUrl/${cartId}`, {
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
