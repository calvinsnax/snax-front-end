<template>
  <div :class="$style.content">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.content {
  position: relative;
  margin-top: -1px;
  padding: 25px;
  background-color: white;
  border: 1px solid $color-border-lighter;
  border-radius: 0 $border-radius-1 $border-radius-1;
}
</style>
