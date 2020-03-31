<template>
  <li :style="homeCardWrapStyle">
    <component :is="componentId" :class="$style.homeCardContainer">
      <AppCard
        :class="$style.homeCard"
        :style="homeCardStyle"
        :overflow="overflow"
      >
        <slot />
      </AppCard>
    </component>
  </li>
</template>

<script>
export default {
  props: {
    span: {
      type: [Number],
      default: 1,
    },
    overflow: [Boolean, String],

    backgroundColor: String,

    to: [String, Object],
    isDiv: [String, Boolean],
  },

  computed: {
    componentId() {
      if (this.isDiv) return 'div'
      if (!this.to) return 'a'
      return 'router-link'
    },

    homeCardWrapStyle() {
      return {
        gridColumn: `span ${this.span}`,
      }
    },

    homeCardStyle() {
      return {
        backgroundColor: this.backgroundColor,
      }
    },
  },
}
</script>

<style lang="scss" module scoped>
.homeCardContainer {
  display: block;
  height: 100%;
}

.homeCard {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 36vw;
  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-0.5rem);
  }
  &:active {
    transform: scale(0.95);
  }
}
</style>
