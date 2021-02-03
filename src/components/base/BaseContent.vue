<template functional>
  <main class="base-content">
    <transition mode="out-in">
      <slot />
    </transition>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
.base-content {
  & > * {
    &.v-enter-active,
    &.v-leave-active {
      transition: 0.2s ease;
    }

    &.v-enter,
    &.v-leave-active {
      opacity: 0;
    }
  }
}
</style>
