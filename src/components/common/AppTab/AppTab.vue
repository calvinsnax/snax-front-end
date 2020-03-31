<template>
  <ul :class="[$style.tab, border && $style.border]">
    <slot />
  </ul>
</template>

<script>
export default {
  props: {
    border: [Boolean, String],
  },
}
</script>

<style lang="scss" module scoped>
.tab {
  position: relative;
  display: flex;
  list-style-type: none;
  padding: 0;
  z-index: 1;
  overflow-x: auto;
}

.border {
  border-bottom: 1px solid $color-border-lighter;
}
</style>
