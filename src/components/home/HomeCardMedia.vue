<template>
  <div :class="[$style.homeCardMedia, absolute && $style.absolute]">
    <img :src="src" :alt="alt" :style="imgStyle" />
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,

    absolute: [Boolean, String],

    position: String,
  },

  computed: {
    imgStyle() {
      return {
        objectPosition: this.position,
      }
    },
  },
}
</script>

<style lang="scss" module scoped>
.homeCardMedia {
  flex: 1;
  position: relative;
  width: 100%;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &.absolute {
    position: absolute;
    height: 100%;
  }
}
</style>
