<template>
  <div :class="$style.appDialogBody">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.appDialogBody {
  padding: 1rem 1.25rem;
}
</style>
