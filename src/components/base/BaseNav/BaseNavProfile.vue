<template>
  <router-link :to="to" :class="$style.navbarNavItem" :exact="exact">
    <slot />
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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  color: $oc-gray-6;
  &:global(.router-link-active) {
    color: $color-primary;
    :global(.base-nav-profile-image) {
      box-shadow: $color-primary 0 0 0 1px;
    }
  }

  i {
    font-size: 20px;
  }

  .name {
    font-size: 0.75rem;
  }

  :global(.base-nav-profile-image) {
    position: relative;
    width: 26px;
    height: 26px;
    border-radius: 100%;
    border: 2px solid transparent;
    overflow: hidden;
    transition: 250ms;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
