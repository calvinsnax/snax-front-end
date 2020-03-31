<template>
  <div
    :class="[
      $style.homeCardDesc,
      lighten && $style.lighten,
      blur && $style.blur,
    ]"
  >
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
    blur() {
      return this.homeCardBody.blur
    },
  },
}
</script>

<style lang="scss" module scoped>
.homeCardDesc {
  color: rgba(black, 0.4);
  font-size: 0.875rem;
  font-weight: $font-weight-regular;
  word-break: keep-all;

  &.lighten {
    color: rgba(white, 0.6);

    &.blur {
      color: white;
    }
  }
}
</style>
