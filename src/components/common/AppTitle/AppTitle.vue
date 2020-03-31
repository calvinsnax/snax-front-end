<template>
  <transition appear>
    <div class="app-head-title">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style lang="scss">
.app-head-title {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  &:global(.v-enter-active),
  &:global(.v-leave-active) {
    transition: 250ms;
  }
  &:global(.v-enter),
  &:global(.v-leave-active) {
    opacity: 0;
  }

  h1 {
    font-size: 2rem;
    font-weight: $font-weight-bold;
    margin-right: 1rem;
  }
}
</style>
