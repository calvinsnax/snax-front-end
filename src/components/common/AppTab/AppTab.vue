<template>
  <div :class="$style.tab">
    <ul>
      <slot />
    </ul>
  </div>
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
  text-align: center;

  & > ul {
    display: inline-flex;
    align-items: center;
    border-radius: $border-radius-2;
    background-color: $color-gray-200;
  }
}
</style>
