import axios from 'axios'
import store from '@/store'
import app from '../main'

const baseURL = process.env.VUE_APP_BASE_URL

// @INFO: 일반 통신용
// ───────────────────────────────────────────────────────

export const instance = axios.create({
  baseURL: baseURL,
})

instance.defaults.withCredentials = true // 쿠키를 주고 받을 수 있게 해줌

instance.interceptors.request.use(
  config => {
    app.$Progress.start()
    return config
  },
  error => {
    app.$Progress.fail()
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  response => {
    app.$Progress.finish()
    return response
  },
  async error => {
    app.$Progress.fail()

    const isExpired = error => {
      return (
        error.response &&
        error.response.status === 403 &&
        error.response.data.error === 'jwt expired'
      )
    }

    const isUnAuth = error => {
      return error.response && error.response.status === 401
    }

    if (isExpired(error) || isUnAuth(error)) {
      // 토큰이 만료되었을 때

      const errorAPI = error.config
      errorAPI.retry = true
      await store.dispatch('auth/getAuth')
      return await axios(errorAPI)
    }

    return Promise.reject(error)
  },
)

// ────────────────────────────────────────────────────────────────────

// @INFO: auth용
export const auth = axios.create({
  baseURL: baseURL,
})

auth.defaults.withCredentials = true

auth.interceptors.request.use(
  config => {
    app.$Progress.start()
    return config
  },
  error => {
    app.$Progress.fail()
    return Promise.reject(error)
  },
)

auth.interceptors.response.use(
  response => {
    app.$Progress.finish()
    return response
  },
  function(error) {
    app.$Progress.finish() // 토큰 만료시 에러는 정상적인 범주 안이기 때문에 유저에게 에러를 전달하지 않음.
    return Promise.reject(error)
  },
)

export default instance
