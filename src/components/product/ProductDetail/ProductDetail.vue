<template>
  <div :class="$style.content">
    <div class="tw-container tw-mx-auto">
      <component :is="componentId" />
    </div>
  </div>
</template>

<script>
import equeer from './ProductEqueer'
import eden from './ProductEden'
import hios from './ProductHios'
import circulator from './ProductCirculator'

export default {
  components: {
    equeer,
    eden,
    hios,
    circulator,
  },

  computed: {
    productId() {
      return this.$route.params.id
    },

    componentId() {
      if (!this.productId) return 'equeer'
      return this.productId
    },
  },
}
</script>

<style lang="scss" module scoped>
.content {
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
