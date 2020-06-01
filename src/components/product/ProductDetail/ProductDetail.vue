<template>
  <div :class="$style.content">
    <ProductSection title="제품 소개">
      <div class="tw-container tw-mx-auto">
        <AppViewer
          v-if="!product.isCustomContent || !componentId"
          :value="product.content"
        />
        <component v-else :is="componentId" />
      </div>
    </ProductSection>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductSection from '../ProductSection'

// import equeer from './ProductEqueer'
// import eden from './ProductEden'
// import hios from './ProductHios'
import circulator from './ProductCirculator'

export default {
  components: {
    ProductSection,
    // equeer,
    // eden,
    // hios,
    circulator,
  },

  computed: {
    ...mapState('product', ['product']),
    productId() {
      return this.$route.params.id
    },

    componentId() {
      if (!this.productId) return false
      return this.productId
    },
  },
}
</script>

<style lang="scss" module scoped>
.content {
  position: relative;
}
</style>
