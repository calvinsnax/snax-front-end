<template>
  <header :class="$style.header">
    <div :class="$style.headerBg">
      <img :src="product.thumbnail" :alt="product.title" />
    </div>

    <div :class="$style.headerContainer" class="tw-container tw-mx-auto">
      <div :class="$style.body">
        <h2 :class="$style.category">{{ product.category }}</h2>
        <h1 :class="$style.title">{{ product.title }}</h1>
        <p :class="$style.desc">
          {{ product.desc }}
        </p>

        <div v-if="product.discountPrice" :class="$style.priceBeforeDiscount">
          {{ priceBeforeDiscount | currency('', 0) }}원
        </div>
        <div :class="$style.price">
          <span>{{ totalPrice | currency('', 0) }}</span>
          <span :class="$style.currency">원</span>
        </div>

        <div :class="$style.option">
          <el-select
            v-model="options.license"
            placeholder="라이센스 선택"
            style="width: 100%"
          >
            <el-option value="basic" label="베이직 라이센스" />
            <el-option value="premium" label="프리미엄 라이센스" />
            <el-option value="business" label="비즈니스 라이센스" />
          </el-select>
        </div>

        <div :class="$style.orderPrice">
          <div :class="$style.label">주문금액</div>
          <AppSpacer />
          <div :class="$style.value">
            <span>{{ totalPrice | currency('', 0) }}</span>
            <span :class="$style.currency">원</span>
          </div>
        </div>

        <button :class="$style.cartButton">장바구니에 담기</button>
      </div>

      <div :class="$style.thumbnail">
        <img :src="product.thumbnail" :alt="product.title" />
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      defaultProductInfo: {
        thumbnail: '/img/thumb_eden.jpg',
        title: 'EDEN 게시판 스킨',
        desc: '기본기를 갖춘 가벼운 게시판 스킨',
        category: '모듈 스킨',
        price: 40000,
        discountPrice: 10000,
      },

      options: {
        license: '',
      },
    }
  },

  computed: {
    ...mapState('store', ['products']),

    productId() {
      return this.$route.params.id
    },

    product() {
      const findedProduct = this.products.find(e => e.id === this.productId)

      if (!findedProduct) return this.defaultProductInfo
      return findedProduct
    },

    priceBeforeDiscount() {
      return this.product.price
    },

    totalPrice() {
      const discountPrice = this.product.discountPrice
      const price = this.product.price

      if (discountPrice) return price - discountPrice
      return price
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
    padding-right: 3rem;

    .category {
      color: $color-primary;
      font-weight: $font-weight-bold;
    }
    .title {
      font-size: 2rem;
      font-weight: $font-weight-bold;
    }
    .desc {
      color: $color-gray-600;
      font-size: 1rem;
      margin-bottom: 3rem;
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
    .price {
      font-size: 2rem;
      font-weight: $font-weight-bold;
      .currency {
        font-size: 1rem;
      }
    }

    .option {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    .orderPrice {
      display: flex;
      padding-bottom: 2rem;
      font-size: 0.875rem;
      font-weight: $font-weight-bold;
    }
  }
}

.cartButton {
  width: 100%;
  padding: 1rem 2rem;

  color: white;
  font-size: 1rem;
  font-weight: $font-weight-bold;

  background-color: black;
  border-radius: 5rem;
  outline: none;
}
</style>
