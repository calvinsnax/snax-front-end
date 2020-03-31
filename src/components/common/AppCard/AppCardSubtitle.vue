<template>
  <p :class="$style.subtitle">
    <slot />
  </p>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.subtitle {
  font-size: 14px;
  font-weight: $font-weight-regular;
  margin-top: 13px;
}
</style>
