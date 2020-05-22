import router from '@/router'
import { auth } from '@/plugins/axios'
import Cookies from 'js-cookie'
import toast from '@/components/common/AppToast/AppToastInstance'

export default {
  namespaced: true,

  state: {
    loggedIn: false, // 기본
    user: {
      _id: '',
      name: '',
      email: '',
      phone: '',
      role: 'user',
      createdAt: '',
      updatedAt: '',
    },
  },

  mutations: {
    setLoggedIn(state, payload) {
      state.loggedIn = payload
    },
    setUser(state, payload) {
      state.user = payload
    },
    updateUser(state, payload) {
      const user = state.user
      state.user = {
        ...user,
        ...payload,
      }
    },
  },

  actions: {
    async login({ commit }, { email, password }) {
      try {
        const { data } = await auth.patch(`/auth/login/`, {
          email,
          password,
        })

        // 로그인 성공
        console.log('login data; ', data)
        Cookies.set('logged_in', true)
        commit('setLoggedIn', true)
        commit('setUser', data)
        toast.default({ message: `${data.name}님, 환영합니다.` })
        router.push({ name: 'home' })

        return true
      } catch (err) {
        console.log(err)

        if (!err.response) {
          toast.danger({ message: '서버에 연결할 수 없습니다.' })
          return false
        }

        console.log('ERROR response: ', err.response)
        if (err.response.status === 403) {
          toast.danger({ message: '아이디 또는 비밀번호가 일치하지 않습니다.' })

          return false
        }

        return false
      }
    },

    async register({ dispatch }, { email, name, password, phone }) {
      try {
        const { data } = await auth.post('/auth/register', {
          email,
          name,
          password,
          phone,
        })

        console.log('register RESULT:: ', data)
        dispatch('login', { email, password })
      } catch (err) {
        console.log(err)
      }
    },

    async logout({ commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          // 쿠키 삭제
          // Cookies.remove('access_token')
          Cookies.remove('logged_in')
          await auth.patch('/auth/logout')

          // state를 초기화하는 과정
          await commit('setLoggedIn', false)
          await commit('setUser', {
            _id: '',
            name: '',
            email: '',
            phone: '',
            role: 'user',
            createdAt: '',
            updatedAt: '',
          })

          resolve()
        } catch (err) {
          console.log(err)
          reject()
        }
      })
    },

    // @METHOD: 토큰을 검사하고 유저 정보를 가져오는 메소드
    async getAuth({ commit, dispatch }) {
      console.log('getAuth')
      try {
        const isLoggedIn = Cookies.get('logged_in')
        if (!isLoggedIn) return

        const { data } = await auth.get('/user')

        await commit('setLoggedIn', true)
        await commit('setUser', data)
        return true
      } catch (err) {
        console.log(err)

        if (err.response && err.response.status === 404) {
          toast.danger({ message: '잘못된 접근입니다.' })
        }
        if (err.response && err.response.status === 401) {
          toast.danger({ message: '잘못된 액세스 토큰입니다.' })
        }
        if (err.response && err.response.status === 403) {
          toast.danger({ message: '액세스 토큰이 만료되었습니다.' })
        }

        await dispatch('logout')
        return false
      }
    },
  },
}
