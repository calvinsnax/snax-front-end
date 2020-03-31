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
  padding: 20px 24px 16px;
}
</style>
