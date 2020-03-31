<template>
  <div :class="$style.page">
    <ProductHeader />
    <ProductDetail />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductHeader from '@/components/product/ProductHeader'
import ProductDetail from '@/components/product/ProductDetail/ProductDetail'

export default {
  components: {
    ProductHeader,
    ProductDetail,
  },

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
.page {
  position: relative;
  margin-top: -$base-nav-height;
}
</style>
