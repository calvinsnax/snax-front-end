<template>
  <div :class="[$style.homeCardSubtitle, lighten && $style.lighten]">
    <slot />
  </div>
</template>

<script>
export default {
  inject: ['homeCardBody'],

  computed: {
    lighten() {
      return this.homeCardBody.lighten
    },
  },
}
</script>

<style lang="scss" module scoped>
.homeCardSubtitle {
  color: rgba(black, 0.4);
  font-size: 0.875rem;
  font-weight: $font-weight-bold;
  margin-bottom: 0.125rem;

  &.lighten {
    color: rgba(white, 0.5);
  }
}
</style>
