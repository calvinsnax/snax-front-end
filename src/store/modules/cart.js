import BootPay from 'bootpay-js'
import { v4 as uuidv4 } from 'uuid'
import store from '@/store'
import _reduce from 'lodash/reduce'
import axios from '@/plugins/axios'
import toast from '@/components/common/AppToast/AppToastInstance'

export default {
  namespaced: true,

  state: {
    cartList: [],
  },

  mutations: {
    setCartList(state, payload) {
      state.cartList = payload
    },
    // async addCartItem(state, payload) {
    //   await state.cartList.push(payload)
    // },
    async deleteCartItem(state, id) {
      const i = state.cartList.map(item => item._id).indexOf(id)
      state.cartList.splice(i, 1)
    },
  },

  actions: {
    async fetchData({ commit }) {
      try {
        const { data } = await axios.get('/cart')
        commit('setCartList', data)
      } catch (err) {
        console.log(err)
      }
    },

    async addToCart(undefined, { productId, license }) {
      try {
        await axios.post('/cart', {
          productId,
          license,
        })
        // await commit('addCartItem', data)
      } catch (err) {
        console.log(err)
      }
    },

    async deleteCartItem({ commit }, cartId) {
      try {
        const { data } = await axios.delete(`/cart/${cartId}`)
        if (!data) toast.danger('해당 상품을 삭제하지 못했습니다.')
        await commit('deleteCartItem', cartId)
      } catch (err) {
        console.log(err)
      }
    },

    // 구매하기
    async purchaseRequest({ getters, commit }) {
      try {
        const orderId = uuidv4()
        const user = store.state.auth.user
        const userInfo = {
          userId: user._id,
          username: user.name,
          email: user.email,
          phone: user.phone,
        }

        //실제 복사하여 사용시에는 모든 주석을 지운 후 사용하세요
        BootPay.request({
          ...getters.getPurchaseData,
          application_id: '5e8dd43902f57e002d1ec992',
          pg: '',
          method: '', //결제수단, 입력하지 않으면 결제수단 선택부터 화면이 시작합니다.
          show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
          user_info: userInfo,
          order_id: orderId, //고유 주문번호로, 생성하신 값을 보내주셔야 합니다.
          // params: {
          //   callback1: '그대로 콜백받을 변수 1',
          //   callback2: '그대로 콜백받을 변수 2',
          //   customvar1234: '변수명도 마음대로',
          // },
          // account_expire_at: '2018-05-25', // 가상계좌 입금기간 제한 ( yyyy-mm-dd 포멧으로 입력해주세요. 가상계좌만 적용됩니다. )
          // extra: {
          //   start_at: '2019-05-10', // 정기 결제 시작일 - 시작일을 지정하지 않으면 그 날 당일로부터 결제가 가능한 Billing key 지급
          //   end_at: '2022-05-10', // 정기결제 만료일 -  기간 없음 - 무제한
          //   vbank_result: 1, // 가상계좌 사용시 사용, 가상계좌 결과창을 볼지(1), 말지(0), 미설정시 봄(1)
          //   quota: '0,2,3', // 결제금액이 5만원 이상시 할부개월 허용범위를 설정할 수 있음, [0(일시불), 2개월, 3개월] 허용, 미설정시 12개월까지 허용
          // },
        })
          .error(data => {
            //결제 진행시 에러가 발생하면 수행됩니다.
            console.log(data)
          })
          .cancel(data => {
            //결제가 취소되면 수행됩니다.
            console.log(data)
          })
          .ready(data => {
            // 가상계좌 입금 계좌번호가 발급되면 호출되는 함수입니다.
            console.log(data)
          })
          .confirm(async data => {
            //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
            //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
            console.log(data)
            BootPay.transactionConfirm(data)
          })
          .close(data => {
            // 결제창이 닫힐때 수행됩니다. (성공,실패,취소에 상관없이 모두 수행됨)
            console.log(data)
          })
          .done(async data => {
            //결제가 정상적으로 완료되면 수행됩니다
            //비즈니스 로직을 수행하기 전에 결제 유효성 검증을 하시길 추천합니다.
            console.log(data)

            const result = await axios.patch(`/order/check/${data.receipt_id}`)
            if (!result)
              toast.danger({
                message: '결제 금액이 동일하지 않아, 결제가 취소되었습니다.',
              })

            commit('setCartList', [])
            toast.show({ message: '결제가 성공적으로 진행되었습니다.' })
          })
      } catch (err) {
        console.log(err)
      }
    },
  },

  getters: {
    // 아이템별 최종 가격
    getCartItemTotalAmount: state => index => {
      if (state.cartList.length === 0) return 0
      const cartItem = state.cartList[index]
      const product = cartItem.productId
      const discountPrice = product.discountPrice
      const price = product.price
      const licensePercent = product.licenses[cartItem.license] || 1

      // return (price - discountPrice) * licensePercent // 가격이 저렴한 계산식
      return price * licensePercent - discountPrice // 가격 증가폭이 높고 비싼 계산식
    },

    // 전체 할인 금액
    getTotalDiscountPrice: state => {
      if (state.cartList.length === 0) return 0
      const list = state.cartList.map(e => {
        return e.productId.discountPrice
      })

      const result = _reduce(list, (total, n) => {
        return total + n
      })
      return result
    },

    // 최종 결제 금액
    getTotalAmount: (state, getters) => {
      if (state.cartList.length === 0) return 0

      const list = state.cartList
      const listLength = list.length
      let totalAmount = 0

      for (let i = 0; i < listLength; i++) {
        totalAmount += getters.getCartItemTotalAmount(i)
      }

      return totalAmount
    },

    getPurchaseItems: (state, getters) => {
      if (state.cartList.length === 0) return []

      const items = state.cartList.map((item, key) => {
        return {
          item_name: item.productId.name, //상품명
          qty: 1, //수량
          unique: item.productId._id, //해당 상품을 구분짓는 primary key
          price: getters.getCartItemTotalAmount(key), //상품 단가
          cat1: item.productId.category, // 대표 상품의 카테고리 상, 50글자 이내
        }
      })
      return items
    },

    getPurchaseData: (state, getters) => {
      if (state.cartList.length === 0) return

      let orderName
      if (state.cartList.length > 1)
        orderName = `${state.cartList[0].productId.name} 외 ${state.cartList
          .length - 1}종`
      else orderName = state.cartList[0].productId.name

      const data = {
        price: getters.getTotalAmount, //실제 결제되는 가격
        name: orderName, //결제창에서 보여질 이름
        items: getters.getPurchaseItems,
      }

      return data
    },
  },
}
