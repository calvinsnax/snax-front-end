<template>
  <div
    class="app-card-body"
    :class="$style.appCardBody"
    :style="{ padding: padding }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    padding: String,
  },
}
</script>

<style lang="scss" module scoped>
.appCardBody {
  padding: 1rem;
}
</style>
