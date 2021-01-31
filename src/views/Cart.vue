<template>
  <div :class="$style.cart">
    <div class="tw-container tw-mx-auto">
      <h1 :class="$style.title">장바구니</h1>

      <div :class="$style.container">
        <div :class="$style.main">
          <CartList />
        </div>

        <div :class="$style.aside">
          <AppCard gray flat>
            <AppCardBody padding="2rem">
              <div :class="$style.infoItem">
                <div :class="$style.label">기본금액</div>
                <div :class="$style.body">
                  {{ priceBeforeDiscount | currency('', 0) }}원
                </div>
              </div>

              <div :class="$style.infoItem">
                <div :class="$style.label">할인금액</div>
                <div :class="$style.body">
                  {{ (getTotalDiscountPrice * -1) | currency('', 0) }}원
                </div>
              </div>

              <div :class="[$style.infoItem, $style.primary]">
                <div :class="$style.label">최종 결제 금액</div>
                <div :class="$style.body">
                  {{ getTotalAmount | currency('', 0) }}원
                </div>
              </div>

              <hr />

              <CartForm v-model="orderInfo" />

              <div class="tw-text-center">
                <AppButton color="black" @click="onClickBuy"
                  >구매하기</AppButton
                >
              </div>
            </AppCardBody>
          </AppCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import CartList from '@/components/cart/CartList'
import CartForm from '@/components/cart/CartForm'
import _cloneDeep from 'lodash/cloneDeep'

export default {
  components: {
    CartList,
    CartForm,
  },

  computed: {
    ...mapState('cart', ['cartList']),
    ...mapGetters('cart', ['getTotalDiscountPrice', 'getTotalAmount']),

    priceBeforeDiscount() {
      return this.getTotalAmount + this.getTotalDiscountPrice
    },
  },

  created() {
    this.fetchData()
  },

  data() {
    return {
      orderInfo: {
        name: '',
      },
    }
  },

  methods: {
    ...mapActions('cart', ['fetchData', 'purchaseRequest']),

    async onClickBuy() {
      const copiedTotalAmount = _cloneDeep(this.getTotalAmount)
      const result = await this.purchaseRequest(this.orderInfo)
      if (!result) return

      this.$alert(
        `
        은행: 카카오뱅크
        예금주: 윤제제
        계좌번호: 3333-07-9792272
      `,
        `주문이 완료되었습니다. 아래 계좌 정보로 최종 결제 금액(${copiedTotalAmount}원)을 입금해주세요.`,
        {
          confirmButtonText: '확인',
          callback: () => {
            this.$router.push({ name: 'profile-orders' })
          },
        },
      )
    },
  },
}
</script>

<style lang="scss" module scoped>
.cart {
  padding-top: 2rem;
  padding-bottom: 2rem;

  hr {
    margin: 2rem 0;
    border-color: $color-gray-400;
  }

  .title {
    font-size: 2rem;
    font-weight: $font-weight-bold;
    margin-bottom: 2rem;
  }
}

.infoItem {
  display: flex;
  margin-bottom: 0.25rem;
  color: $color-gray-600;
  font-size: 0.875rem;

  .body {
    flex: 1;
    text-align: right;
  }

  &.primary {
    color: black;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}

.container {
  display: flex;
  flex-wrap: wrap;

  .main {
    max-width: 70%;
    flex-basis: 70%;
    padding-right: 2rem;
  }

  .aside {
    max-width: 30%;
    flex-basis: 30%;
  }

  @media (max-width: $medium-w) {
    display: block;

    .main,
    .aside {
      max-width: 100%;
      flex-basis: 100%;
      padding-right: 0;
    }
  }
}
</style>
