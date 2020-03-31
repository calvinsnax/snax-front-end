<template>
  <router-link :to="to" :class="$style.item" :exact="exact">
    <div :class="$style.inner">
      <slot />
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {},
    exact: [Boolean, String],
  },
}
</script>

<style lang="scss" module scoped>
.item {
  position: relative;
  user-select: none;
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  color: $oc-gray-5;
  font-size: 0.875rem;
  font-weight: $font-weight-medium;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  transition: 250ms;

  .inner {
    color: $oc-gray-6;
  }

  &:global(.router-link-active) {
    border-color: $oc-gray-9;

    .inner {
      color: $oc-gray-9;
    }
  }
}
</style>
