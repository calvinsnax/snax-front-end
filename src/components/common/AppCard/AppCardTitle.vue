<template functional>
  <div class="app-card-title" :class="$style.appCardTitle">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.appCardTitle {
  display: flex;
  align-items: center;
  padding: 42px 52px 31px;
  font-size: 24px;
  font-weight: $font-weight-medium;
}
</style>

<style lang="scss">
.app-card-title + .app-card-body {
  padding: 0 52px 45px !important;
}
</style>
