<template>
  <div :class="$style.monthPicker">
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
.monthPicker {
  display: flex;
  flex-wrap: wrap;
  padding: 0 12px 12px;
  // margin: 10px 2px;

  div {
    flex: 0 0 33.3333%;
    padding: 10px 2px;
  }
}
</style>
