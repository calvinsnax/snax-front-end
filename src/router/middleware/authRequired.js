import store from '@/store'

export default async (to, from, next) => {
  // token 체크를 하고
  const result = await store.dispatch('auth/getAuth')

  // 결과에 따라 로그인으로 보낼지 말지를 결정
  if (!result) next({ name: 'login' })
  next()
}
