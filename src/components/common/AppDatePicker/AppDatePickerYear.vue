<template>
  <div :class="$style.yearPicker">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    year: {},
  },
}
</script>

<style lang="scss" module scoped>
.yearPicker {
  height: 250px;
  @include custom-scroll;
}
</style>
