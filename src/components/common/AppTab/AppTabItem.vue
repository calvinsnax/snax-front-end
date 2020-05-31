<template>
  <li :class="$style.tabItem">
    <router-link :to="to" :exact="exact">
      <slot />
    </router-link>
  </li>
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
.tabItem {
  margin: 0.125rem;

  & > a {
    display: inline-block;
    padding: 0.5rem 1.5rem;

    color: $color-gray-600;
    font-size: 0.875rem;
    font-weight: $font-weight-medium;
    text-decoration: none;

    border-radius: $border-radius-2;
    background-color: transparent;
    transition: 0.3s;

    &:global(.router-link-active) {
      color: black;
      background-color: white;
      box-shadow: rgba(black, 0.1) 0 2px 8px;
    }
  }
}
</style>
