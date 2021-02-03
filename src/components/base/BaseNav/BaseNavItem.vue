<template>
  <component
    :is="componentId"
    :to="to"
    :exact="exact"
    class="base-nav-item"
    :class="[{ 'is-count-mode': count }, { 'is--large': large }]"
  >
    <slot v-if="!count" />
    <div v-else class="base-nav-item-count">{{ count }}</div>
  </component>
</template>

<script>
export default {
  props: {
    to: {},
    exact: [Boolean, String],
    count: Number,
    large: [Boolean, String],
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
.base-nav-item {
  cursor: pointer;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-left: 0.5rem;

  color: black;
  text-decoration: none;
  border-radius: 100%;

  i,
  svg,
  ion-icon {
    width: 1.375rem;
    height: 1.375rem;
    font-size: 1.375rem;

    path {
      stroke-width: 1.25px;

      @media (max-width: $medium-w) {
        stroke-width: 2px;
      }
    }
  }

  &.is--large {
    i,
    svg,
    ion-icon {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1.5rem;
    }
  }

  & > .base-nav-item-count {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    padding: 1rem;

    color: white;
    font-size: 0.875rem;
    background-color: $color-primary;
    border-radius: 9999px;
  }
}
</style>
