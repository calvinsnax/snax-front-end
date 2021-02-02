<template>
  <ul :class="$style.storeList">
    <li v-for="item in filteredProducts" :key="item.id">
      <StoreListItem :item="item" />
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import StoreListItem from './StoreListItem'

export default {
  components: {
    StoreListItem,
  },

  computed: {
    ...mapState('store', ['products']),

    filteredProducts() {
      const currentCategory = this.$route.query.category

      if (!currentCategory) return this.products
      return this.products.filter(e => e.category === currentCategory)
    },
  },
}
</script>

<style lang="scss" module scoped>
.storeList {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: $medium-w) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;
  }

  & > li {
    min-width: 0;
  }
}
</style>
