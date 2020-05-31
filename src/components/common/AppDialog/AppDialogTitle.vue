<template functional>
  <div class="app-dialog-title" :class="$style.appDialogTitle">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.appDialogTitle {
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  padding-bottom: 0;
  font-size: 1rem;
  font-weight: $font-weight-medium;
}
</style>
