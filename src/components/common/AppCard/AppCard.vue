<template>
  <div
    :class="[
      $style.AppCard,
      overflow && $style.overflow,
      gray && $style.gray,
      flat && $style.flat,
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    overflow: [Boolean, String],
    gray: [Boolean, String],
    flat: [Boolean, String],
  },
}
</script>

<style lang="scss" module scoped>
.AppCard {
  background-color: white;
  border-radius: $border-radius-3;
  box-shadow: rgba(black, 0.05) 0 4px 16px, rgba(black, 0.05) 0 8px 32px,
    rgba(black, 0.05) 0 16px 48px;

  &.overflow {
    overflow: hidden;
  }

  &.gray {
    background-color: $color-gray-200;
  }

  &.flat {
    box-shadow: none;
  }
}
</style>
