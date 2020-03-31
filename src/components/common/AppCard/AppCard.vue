<template>
  <div :class="[$style.AppCard, overflow && $style.overflow]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    overflow: [Boolean, Text],
  },
}
</script>

<style lang="scss" module scoped>
.AppCard {
  // margin-bottom: 26px;
  background-color: white;
  border-radius: $border-radius-3;
  box-shadow: rgba(black, 0.05) 0 4px 16px, rgba(black, 0.05) 0 8px 32px,
    rgba(black, 0.05) 0 16px 48px;

  &.overflow {
    overflow: hidden;
  }
}
</style>
