<template>
  <component
    :is="componentId"
    :to="to"
    :exact="exact"
    class="base-bottom-nav-item"
    :class="{ 'is-profile': profile }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    to: {},
    exact: [Boolean, String],
    profile: [Boolean, String],
  },

  computed: {
    componentId() {
      if (!this.to) return 'a'
      return 'router-link'
    },
  },
}
</script>

<style lang="scss">
.base-bottom-nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  color: $color-black;
  font-size: 0.6875rem;
  font-weight: $font-weight-medium;

  i,
  ion-icon,
  svg {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5rem;
    /* margin-bottom: 0.25rem; */

    --ionicon-stroke-width: 3rem;

    &:nth-child(1) {
      display: none;
    }
    &:nth-child(2) {
      display: block;
    }
  }

  span {
    display: none;
  }

  &.router-link-active {
    color: var(--color-gray-900);

    i,
    ion-icon,
    svg {
      --ionicon-stroke-width: 1rem;

      &:nth-child(1) {
        display: block;
      }
      &:nth-child(2) {
        display: none;
      }
    }
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
