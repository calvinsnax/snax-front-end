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
  margin-right: 0.25rem;

  &:last-child {
    margin-right: 0;
  }

  & > a {
    display: inline-block;
    padding: 0.375rem 1.25rem;

    color: $color-gray-600;
    font-size: 0.875rem;
    font-weight: $font-weight-medium;
    text-decoration: none;

    border-radius: 6px;
    background-color: transparent;
    transition: 0.3s ease;

    &:global(.router-link-active) {
      color: black;
      background-color: white;
      box-shadow: 0 1px 3px rgb(0 0 0 / 10%);
    }

    @media (max-width: $medium-w) {
      padding: 0.375rem 0.875rem;
      font-size: 0.875rem;
    }

    &:hover {
      background-color: $color-gray-300;
    }
  }
}
</style>
