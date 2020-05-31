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
  justify-content: flex-end;
  padding: 1rem 1.25rem;
  padding-top: 0;

  button {
    margin-right: 0.6rem;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
