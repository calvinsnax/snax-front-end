<template>
  <div :class="$style.cart">
    <div class="tw-container tw-mx-auto">
      <h1 :class="$style.title">장바구니</h1>

      <el-row :gutter="20">
        <el-col :span="16">
          <CartList />
        </el-col>

        <el-col :span="8">
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

              <div class="tw-text-center">
                <AppButton color="black" @click="purchaseRequest"
                  >구매하기</AppButton
                >
              </div>
            </AppCardBody>
          </AppCard>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import CartList from '@/components/cart/CartList'

export default {
  components: {
    CartList,
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

  methods: {
    ...mapActions('cart', ['fetchData', 'purchaseRequest']),
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
</style>
