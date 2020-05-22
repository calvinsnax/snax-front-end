import axios from '@/plugins/axios'

export default {
  namespaced: true,

  state: {
    products: [
      // {
      //   id: 'equeer',
      //   thumbnail: '/img/thumb_equeer.jpg',
      //   title: '이퀴어 테마 패키지',
      //   desc: '커뮤니티 사이트를 위한 최적의 솔루션',
      //   category: '테마 패키지',
      //   price: 40000,
      //   discountPrice: 0,
      //   previewLink: 'https://calvinsnax.com/equeer',
      // },
      // {
      //   id: 'eden',
      //   thumbnail: '/img/thumb_eden.jpg',
      //   title: 'EDEN 게시판 스킨',
      //   desc: '기본기를 갖춘 가벼운 게시판 스킨',
      //   category: '모듈 스킨',
      //   price: 40000,
      //   discountPrice: 10000,
      //   previewLink: 'https://calvinsnax.com/equeer',
      // },
      // {
      //   id: 'hios',
      //   thumbnail: '/img/thumb_hios.jpg',
      //   title: 'Hios 회원모듈 스킨 세트',
      //   desc: '회원 페이지를 새롭게',
      //   category: '모듈 스킨',
      //   price: 40000,
      //   discountPrice: 0,
      // },
      // {
      //   id: 'circulator',
      //   thumbnail: '/img/thumb_circulator.jpg',
      //   title: 'C!irculator 알림센터 스킨',
      //   desc: '센스있는 알림 디자인',
      //   category: '모듈 스킨',
      //   price: 40000,
      //   discountPrice: 0,
      // },
    ],
  },

  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
  },

  actions: {
    async fetchData({ commit }) {
      const { data } = await axios.get('/product')
      if (!data) return

      commit('setProducts', data)
    },
  },
}
