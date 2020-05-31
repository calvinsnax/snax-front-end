import axios from '@/plugins/axios'

export default {
  namespaced: true,

  state: {
    contentList: [],
  },

  mutations: {
    setContentList(state, payload) {
      state.contentList = payload
    },
  },

  actions: {
    async searchData({ commit }, productId) {
      const { data } = await axios.get(`/content/${productId}`)
      if (!data) console.log('결과가 없습니다.')
      console.log(data)
      commit('setContentList', data)
    },
  },
}
