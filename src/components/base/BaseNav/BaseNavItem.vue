<template>
  <router-link
    :to="to"
    :exact="exact"
    class="base-nav-item"
    :class="{ 'is-profile': profile }"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    to: {},
    exact: [Boolean, String],
    profile: [Boolean, String],
  },
}
</script>

<style lang="scss">
.base-nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  color: $oc-gray-6;
  font-size: 0.75rem;
  &.router-link-active {
    color: $color-primary;
  }

  i {
    font-size: 1.25rem;
  }

  // 프로필
  &.is-profile {
    &.router-link-active {
      .base-nav-profile-image {
        box-shadow: $color-primary 0 0 0 1px;
      }
    }

    .base-nav-profile-image {
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
}
</style>
