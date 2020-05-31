<template>
  <div :class="$style.page">
    <OrderList />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import OrderList from '@/components/order/OrderList'

export default {
  components: {
    OrderList,
  },

  created() {
    this.fetchData()
  },

  methods: {
    ...mapActions('order', ['fetchData']),
  },
}
</script>

<style lang="scss" module scoped>
.page {
}
</style>
