<template>
  <div :class="$style.form">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.form {
  margin-bottom: 2rem;

  border: 1px solid $color-gray-400;
  // border-bottom: none;
  // border-radius: $border-radius-2 $border-radius-2 0 0;
  border-radius: $border-radius-2;
  background-color: rgba(white, 0.8);
}
</style>
