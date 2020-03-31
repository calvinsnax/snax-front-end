<template>
  <div :class="$style.page">
    <div class="tw-container tw-mx-auto">
      <StoreHeader />
      <StoreList />
    </div>
  </div>
</template>

<script>
import StoreHeader from '@/components/store/StoreHeader'
import StoreList from '@/components/store/StoreList'

export default {
  components: {
    StoreHeader,
    StoreList,
  },
}
</script>

<style lang="scss" module scoped>
.page {
  padding-bottom: 4rem;
}
</style>
