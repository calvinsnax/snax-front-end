<template>
  <li :class="$style.item">
    <router-link
      :to="{ name: 'product', params: { id: item.productId.id } }"
      :class="$style.thumbnail"
    >
      <img :src="item.productId.thumbnail" :alt="item.productId.name" />
    </router-link>

    <div :class="$style.body">
      <div :class="$style.title">{{ item.productId.name }}</div>

      <!-- 옵션 -->
      <div :class="$style.optionList">
        <div :class="$style.option">
          <span :class="$style.label">라이센스: </span>
          <span>{{ licenseName }}</span>
          <span> ({{ totalAmount | currency('', 0) }}원)</span>
        </div>
      </div>

      <!-- 할인 전 원가격 -->
      <div
        v-if="item.productId.discountPrice"
        :class="$style.priceBeforeDiscount"
      >
        {{ this.item.productId.price | currency('', 0) }}원
      </div>

      <!-- 할인 및 옵션 가격이 적용된 가격 -->
      <div :class="$style.price">
        <span>{{ discountedPrice | currency('', 0) }}</span>
        <span :class="$style.currency">원</span>
      </div>

      <hr />

      <div :class="$style.totalAmount">
        <div :class="$style.label">최종 가격</div>
        <div class="tw-flex-1 tw-text-right">
          {{ totalAmount | currency('', 0) }}원
        </div>
      </div>
    </div>

    <AppButton color="gray-blue" rounded @click="deleteCartItem(item._id)"
      >삭제</AppButton
    >
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    index: Number,
    item: {},
  },

  computed: {
    ...mapGetters('cart', ['getProductTotalAmount']),

    licenseName() {
      const licenses = {
        basic: '베이직',
        premium: '프리미엄',
        business: '비즈니스',
      }

      return licenses[this.item.license]
    },

    // 할인 계산된 금액
    discountedPrice() {
      const product = this.item.productId
      const discountPrice = product.discountPrice
      const price = product.price

      if (discountPrice) return price - discountPrice
      return price
    },

    // 최종 가격
    totalAmount() {
      const product = this.item.productId
      const price = product.price
      const discountPrice = product.discountPrice

      return price * product.licenses[this.item.license] - discountPrice
    },
  },

  methods: {
    ...mapActions('cart', ['deleteCartItem']),
  },
}
</script>

<style lang="scss" module scoped>
.item {
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid $color-gray-300;

  .thumbnail {
    position: relative;
    display: block;
    width: 6rem;
    height: 6rem;
    overflow: hidden;
    border-radius: $border-radius-2;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }

  .body {
    flex: 1;
    padding-left: 1rem;

    .title {
      font-size: 1rem;
      font-weight: $font-weight-medium;
    }
    .optionList {
      margin-bottom: 0.5rem;
    }
    .option {
      font-size: 0.875rem;
      .label {
        color: $color-gray-600;
      }
    }

    .priceBeforeDiscount {
      color: $color-gray-600;
      font-size: 0.75rem;
      text-decoration: line-through;
    }
    .price {
      color: $color-primary;
      // font-size: 0.875rem;
      font-weight: $font-weight-bold;
    }

    .totalAmount {
      display: flex;
      font-size: 0.875rem;
      font-weight: $font-weight-bold;
      .body {
        flex: 1;
        text-align: right;
      }
    }
  }
}
</style>
