<template>
  <AppCardBody
    :class="[
      $style.homeCardBody,
      lighten && $style.lighten,
      blur && $style.blur,
      expand && $style.expand,
      dense && $style.dense,
    ]"
  >
    <slot />
  </AppCardBody>
</template>

<script>
export default {
  props: {
    lighten: [Boolean, String],
    blur: [Boolean, String],
    expand: [Boolean, String],
    dense: [Boolean, String],
  },

  provide() {
    return {
      homeCardBody: this,
    }
  },
}
</script>

<style lang="scss" module scoped>
.homeCardBody {
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;

  &.expand {
    flex: 1;
  }

  &.blur {
    background-color: rgba(white, 0.2);
    backdrop-filter: saturate(180%) blur(40px);
  }

  &.lighten {
    color: white;
    // &.blur {
    //   background-color: rgba(black, 0.2);
    // }
  }

  &.dense {
    padding: 1rem 1.25rem;
  }
}
</style>
