import { auth } from '@/plugins/axios'
import store from '@/store'
import toast from '@/components/common/AppToast/AppToastInstance'

export default {
  namespaced: true,
  mutations: {},

  actions: {
    async updateUser(undefined, { name, phone }) {
      try {
        console.log('store: ', name, phone)
        const result = await auth.put('/user', {
          name,
          phone,
        })

        if (!result) return

        store.commit('auth/updateUser', { name, phone })
        toast.show({ message: '계정 정보가 수정되었습니다.' })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
