import router from '@/router'
import { auth } from '@/plugins/axios'
import Cookies from 'js-cookie'
import toast from '@/components/common/AppToast/AppToastInstance'

export default {
  namespaced: true,

  state: {
    loggedIn: false, // 기본
    user: {
      name: '',
      email: '',
      description: null,
      profileImage: null,
      coverImages: [],
      isAdmin: false,
      certified: '',
      facebookId: '',
      details: {
        // 성향
        position: '',
        height: 0,
        weight: 0,
      },
      createdAt: '',
      updatedAt: '',
    },

    facebookInitState: false,
    kakaoInitState: false,
  },

  mutations: {
    setLoggedIn(state, payload) {
      state.loggedIn = payload
    },
    setUser(state, payload) {
      state.user = payload
    },

    // sns SDK init
    setFacebookInitState(state, payload) {
      state.facebookInitState = payload
    },
    setKakaoInitState(state, payload) {
      state.kakaoInitState = payload
    },
  },

  actions: {
    async login({ commit }, { type = 'facebook', accessToken }) {
      try {
        console.log(type)

        const { data } = await auth.patch(
          `/auth/login/${type}`,
          {},
          {
            headers: { authorization: 'Bearer ' + accessToken },
          },
        )

        console.log('login data; ', data)

        commit('setLoggedIn', true)
        commit('setUser', data)
        toast.default({ message: `${data.name}님, 환영합니다.` })
        router.push({ name: 'home' })

        return true
      } catch (err) {
        console.log(err)

        if (!err.response) {
          toast.danger({ message: '서버에 연결할 수 없습니다.' })
          return
        }

        console.log('ERROR response: ', err.response)
        if (err.response.status === 400) {
          toast.danger({ message: '아이디 또는 비밀번호가 일치하지 않습니다.' })
        }

        return false
      }
    },

    async logout({ commit }) {
      try {
        // state를 초기화하는 과정
        await commit('setLoggedIn', false)
        await commit('setUser', {
          name: '',
          email: '',
          description: null,
          profileImage: null,
          coverImages: [],
          isAdmin: false,
          certified: '',
          facebookId: '',
          details: {
            // 성향
            position: '',
            height: 0,
            weight: 0,
          },
          createdAt: '',
          updatedAt: '',
        })
        // 토큰 쿠키를 삭제
        await Cookies.remove('access_token')
        await Cookies.remove('refresh_token')
        router.push({ name: 'login' })
      } catch (err) {
        console.log(err)
      }
    },

    // @METHOD: 토큰을 검사하고 유저 정보를 가져오는 메소드
    async getAuth({ commit, dispatch }) {
      console.log('getAuth')
      try {
        const { data } = await auth.get('/auth/verify')

        await commit('setLoggedIn', true)
        await commit('setUser', data)
        return true
      } catch (err) {
        console.log(err)

        if (err.response && err.response.status === 404) {
          toast.danger({ message: '잘못된 접근입니다.' })
          return false
        }
        if (err.response && err.response.status === 401) {
          toast.danger({ message: '잘못된 액세스 토큰입니다.' })
          return false
        }
        if (err.response && err.response.status === 403) {
          console.log('액세스 토큰이 만료되었습니다.')
          return dispatch('refresh')
        }
      }
    },

    async refresh({ commit }) {
      try {
        const { data } = await auth.patch('/auth/refresh')

        console.log(data)
        await commit('setLoggedIn', true)
        await commit('setUser', data)

        return true
      } catch (err) {
        console.log('[EEROR]: ', err)

        if (err.response && err.response.status === 401) {
          toast.warn({ message: '토큰이 만료되었습니다. 다시 로그인해주세요.' })
          // console.log('리프레시 토큰이 올바르지 않습니다.')
          return false
        }
      }
    },
  },
}
