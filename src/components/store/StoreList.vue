<template>
  <ul :class="$style.storeList">
    <li v-for="(item, index) in filteredProducts" :key="index">
      <StoreListItem
        :id="item.id"
        :thumbnail="item.thumbnail"
        :title="item.title"
        :desc="item.desc"
        :category="item.category"
        :price="item.price"
        :discountPrice="item.discountPrice"
      />
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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

  & > li {
    min-width: 0;
  }
}
</style>
