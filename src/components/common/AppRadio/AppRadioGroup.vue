<template>
  <div class="app-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.app-radio-group {
  display: flex;
  align-items: center;
  line-height: 1;
  .app-radio-button {
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
