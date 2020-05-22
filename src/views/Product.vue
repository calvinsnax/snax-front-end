<template>
  <div :class="$style.page">
    <ProductHeader />
    <ProductDetail />
    <ProductPackage />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductHeader from '@/components/product/ProductHeader'
import ProductPackage from '@/components/product/ProductPackage'
import ProductDetail from '@/components/product/ProductDetail/ProductDetail'

export default {
  components: {
    ProductHeader,
    ProductPackage,
    ProductDetail,
  },

  created() {
    this.fetchData(this.$route.params.id)
  },

  methods: {
    ...mapActions('product', ['fetchData']),
  },
}
</script>

<style lang="scss" module scoped>
.page {
  position: relative;
  margin-top: -$base-nav-height;
}
</style>
