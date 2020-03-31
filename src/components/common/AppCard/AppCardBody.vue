<template>
  <div class="app-card-body" :class="$style.appCardBody">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.appCardBody {
  padding: 1.625rem;
}
</style>
