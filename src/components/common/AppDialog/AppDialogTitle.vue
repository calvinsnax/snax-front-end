<template functional>
  <div class="app-dialog-title" :class="$style.appDialogTitle">
    <div :class="$style.inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.appDialogTitle {
  padding: 0 24px;
  font-size: 16px;
  font-weight: $font-weight-medium;

  .inner {
    display: flex;
    align-items: center;
    padding: 15px 0 11px;
    border-bottom: 1px solid $color-border-lighter;
  }
}
</style>

<style lang="scss">
// .app-dialog-title + .app-dialog-body {
//   padding-top: 0 !important;
// }
</style>
