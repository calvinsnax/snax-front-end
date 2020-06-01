<template>
  <div :class="$style.page">
    <ProductHeader />
    <ProductDetail v-if="!loading" />
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

  data: () => ({
    loading: true,
  }),

  async created() {
    this.loading = true
    await this.fetchData(this.$route.params.id)
    this.loading = false
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
