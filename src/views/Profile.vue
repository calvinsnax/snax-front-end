<template>
  <div :class="$style.page">
    <div class="tw-text-center tw-pb-6">
      <!-- <h1 class="tw-text-3xl tw-font-bold tw-mb-4">마이페이지</h1> -->

      <AppTab>
        <AppTabItem :to="{ name: 'profile' }" exact>내 정보</AppTabItem>
        <AppTabItem :to="{ name: 'profile-orders' }">주문내역</AppTabItem>
      </AppTab>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.page {
  max-width: 26rem;
  padding: 2rem 1rem;
  margin: 0 auto;
}
</style>
