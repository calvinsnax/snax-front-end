<template>
  <h1 :class="$style.title">
    <slot />
  </h1>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.title {
  display: inline-flex;
  color: black;
  font-size: 1rem;
  font-weight: $font-weight-medium;
  // letter-spacing: 6px;
}
</style>
