<template>
  <div :class="$style.actions">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.actions {
  display: flex;
  padding: 0 24px 18px;

  button {
    margin-right: 0.6rem;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
