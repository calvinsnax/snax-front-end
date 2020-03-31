<template>
  <div :class="[$style.homeCardTitle, lighten && $style.lighten, $style[size]]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    size: String,
  },

  inject: ['homeCardBody'],

  computed: {
    lighten() {
      return this.homeCardBody.lighten
    },
  },
}
</script>

<style lang="scss" module scoped>
.homeCardTitle {
  color: black;
  font-size: 1.5rem;
  font-weight: $font-weight-bold;
  word-break: keep-all;

  &.lighten {
    color: white;
  }

  // size
  &.small {
    font-size: 0.875rem;
  }
}
</style>
