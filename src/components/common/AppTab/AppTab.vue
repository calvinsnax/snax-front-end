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
    border-radius: 8px;
    background-color: $color-gray-200;
    padding: 0.25rem;
  }
}
</style>
