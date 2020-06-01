import axios from '@/plugins/axios'

export default {
  namespaced: true,

  state: {
    product: {
      thumbnail: '',
      name: '',
      description: '',
      category: '',
      price: 0,
      discountPrice: 0,
      previewLink: '',
      licenses: {
        basic: 0,
        premium: 1.5,
        business: 3,
      },
    },

    license: '',
  },

  mutations: {
    setProduct(state, payload) {
      state.product = payload
    },
    setLicense(state, payload) {
      state.license = payload
    },
  },

  actions: {
    async fetchData({ commit }, id) {
      const { data } = await axios.get(`/product/${id}`)
      if (!data) return

      commit('setProduct', data)
      commit('setLicense', '')
      return
    },
  },

  getters: {
    getDiscountedPrice: state => {
      const discountPrice = state.product.discountPrice
      const price = state.product.price

      if (discountPrice) return price - discountPrice
      return price
    },

    getTotalAmount: (state, getters) => selectedLicense => {
      const discountPrice = state.product.discountPrice
      const price = state.product.price
      const licenses = state.product.licenses

      if (!selectedLicense) return getters.getDiscountedPrice

      return price * licenses[selectedLicense] - discountPrice
    },
  },
}
