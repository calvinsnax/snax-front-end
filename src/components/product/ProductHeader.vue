<template>
  <header :class="$style.header">
    <div :class="$style.headerContainer" class="tw-container tw-mx-auto">
      <div :class="$style.thumbnail">
        <img :src="product.thumbnail" :alt="product.name" />
      </div>

      <div :class="$style.body">
        <h2 :class="$style.category">{{ product.category }}</h2>
        <h1 :class="$style.name">{{ product.name }}</h1>
        <p :class="$style.desc">{{ product.description }}</p>

        <!-- 할인 전 원가격 -->
        <div v-if="product.discountPrice" :class="$style.priceBeforeDiscount">
          {{ product.price | currency('', 0) }}원
        </div>

        <!-- 할인이 적용된 가격 -->
        <div :class="$style.price">
          <span>{{ getDiscountedPrice | currency('', 0) }}</span>
          <span :class="$style.currency">원</span>
        </div>

        <ProductOption />

        <AppCard gray flat>
          <AppCardTitle>
            <div :class="$style.orderPrice">
              <div :class="$style.label">주문금액</div>
              <AppSpacer />
              <div :class="$style.value">
                <span>{{ getTotalAmount(license) | currency('', 0) }}</span>
                <span :class="$style.currency">원</span>
              </div>
            </div>
          </AppCardTitle>

          <AppCardBody>
            <div :class="$style.buttonGroup">
              <a
                v-if="product.previewLink"
                :href="product.previewLink"
                target="_blank"
              >
                <button :class="[$style.button, $style.preview]">
                  미리보기
                </button>
              </a>
              <button
                :class="[$style.button, $style.cart]"
                @click="onClickCart"
              >
                장바구니에 담기
              </button>
            </div>
          </AppCardBody>
        </AppCard>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import ProductOption from './ProductOption'

export default {
  components: {
    ProductOption,
  },

  computed: {
    ...mapState('product', ['product', 'license']),
    ...mapState('auth', ['loggedIn']),
    ...mapGetters('product', ['getDiscountedPrice', 'getTotalAmount']),
  },

  methods: {
    ...mapActions('cart', ['addToCart', 'fetchData']),

    async onClickCart() {
      if (!this.loggedIn) {
        this.$toast.danger({ message: '로그인이 필요합니다.' })
        return
      }

      if (!this.license) {
        this.$toast.danger({ message: '라이센스를 선택해주세요.' })
        return
      }

      await this.addToCart({
        productId: this.product._id,
        license: this.license,
      })
      await this.fetchData({}) // 카트 정보 갱신
      this.$toast.show({ message: '장바구니에 담겼습니다.' })
    },
  },
}
</script>

<style lang="scss" module scoped>
.header {
  position: relative;
  padding-top: $base-nav-height + 3rem;
  padding-bottom: 4rem;

  .headerBg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(white, 0.9);
      backdrop-filter: saturate(180%) blur(20px);
    }
  }

  .headerContainer {
    display: flex;
    align-items: flex-start;

    @media (max-width: $large-w) {
      display: block;
    }
  }

  .thumbnail {
    flex: 1;
    img {
      width: 100%;
      height: auto;
      border-radius: $border-radius-3;
    }
  }

  .body {
    flex: 0 0 40%;
    padding-left: 3rem;

    @media (max-width: $large-w) {
      padding-left: 0;
      padding-top: 3rem;
    }

    .category {
      color: $color-primary;
      font-size: 0.875rem;
      font-weight: $font-weight-bold;
    }
    & > .name {
      font-size: 2rem;
      font-weight: $font-weight-bold;
    }
    .desc {
      color: $color-gray-600;
      font-size: 0.875rem;
      margin-bottom: 2rem;
    }

    .priceBeforeDiscount {
      position: relative;
      display: inline-block;

      font-size: 1.25rem;
      font-weight: $font-weight-medium;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #ff6b6b;
        -webkit-transform: rotate(8deg);
        transform: rotate(8deg);
      }
    }
    & > .price {
      font-size: 2rem;
      font-weight: $font-weight-bold;
      .currency {
        font-size: 1rem;
      }
    }

    .orderPrice {
      flex: 1;
      display: flex;
      font-size: 0.875rem;
      font-weight: $font-weight-bold;
    }
  }
}

.buttonGroup {
  display: flex;
  align-items: center;
}

.button {
  flex: 1;
  padding: 0.75rem 2rem;

  color: white;
  font-size: 0.875rem;
  font-weight: $font-weight-bold;

  background-color: black;
  border-radius: 5rem;
  outline: none;

  &.preview {
    flex: 0 0 auto;
    margin-right: 0.75rem;
    background-color: $color-primary;
  }
}
</style>
