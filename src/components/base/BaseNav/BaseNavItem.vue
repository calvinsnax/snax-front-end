<template>
  <component :is="componentId" :to="to" :exact="exact" class="base-nav-item">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    to: {},
    exact: [Boolean, String],
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
  margin-left: 1rem;

  color: black;
  text-decoration: none;
  border-radius: 100%;

  i {
    font-size: 1.25rem;
  }
}
</style>
