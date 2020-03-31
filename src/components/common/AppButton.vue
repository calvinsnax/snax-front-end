<template>
  <button
    class="app-button"
    :class="[
      $style.appButton,
      $style[color],
      $style[size],
      expand && $style.expand,
      rounded && $style.rounded,
      icon && $style.icon,
      loading && $style.isLoading,
    ]"
    @click="click"
  >
    <div v-if="loading" :class="$style.loading">
      <v-progress-circular
        indeterminate
        color="inherit"
        :size="20"
        :width="2"
      ></v-progress-circular>
    </div>
    <div :class="$style.inner">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'Medium',
    },
    expand: [Boolean, String],
    rounded: [Boolean, String],
    icon: [Boolean, String],
    loading: [Boolean, String],
  },

  methods: {
    click(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" module scoped>
.appButton {
  cursor: pointer;
  user-select: none; // 안드로이드 크롬에서 버튼에 text select되지 않게 하기 위함.

  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  padding: 0 1.25rem;

  color: black;
  font-size: 0.875rem;
  font-weight: $font-weight-bold;
  line-height: 1;
  text-decoration: none;

  background-color: white;
  border: 1px solid transparent;
  border-radius: $border-radius-2;
  outline: none;

  transition: 250ms;

  &.isLoading {
    overflow: hidden;
  }

  i {
    color: inherit;
    font-size: 18px;
    width: 18px;
    height: 18px;

    & + * {
      margin-left: 8px;
    }
  }

  span {
    & + i {
      margin-right: -4px;
      margin-left: 8px;
    }
  }

  &.expand {
    display: flex;
    width: 100%;
  }

  // colors
  // ──────────────────────────────────────────────────

  &.default {
    border-color: $color-border-lighter;
  }
  &.transparent {
    color: black;
    border-color: transparent;
    background-color: transparent;
  }
  &.primary {
    color: white;
    background-color: $color-primary;
    &.hover {
      background-color: darken($color-primary, 10%);
    }
  }

  &.secondary {
    color: white;
    background-color: $color-secondary;

    &.hover {
      background-color: darken($color-secondary, 10%);
    }
  }

  &.gray-blue {
    color: $color-primary;
    background-color: $color-gray-200;

    &.hover {
      background-color: $color-gray-300;
    }
  }

  &.gray {
    color: black;
    background-color: $color-gray-200;

    &.hover {
      background-color: $color-gray-300;
    }
  }

  &.black {
    color: white;
    background-color: black;
    &:hover {
      background-color: lighten(black, 10%);
    }
  }

  // ──────────────────────────────────────────────────

  // Size
  // ──────────────────────────────────────────────────

  &.small {
    font-size: 0.875rem;
    height: 2rem;
    padding: 0 1rem;
  }

  // ──────────────────────────────────────────────────

  &.rounded {
    border-radius: 2rem;
  }

  &.icon {
    width: 40px;
    padding: 0;
  }

  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: inherit;
    width: 100%;
    height: 100%;
  }

  .loading {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
    * {
      width: 1em;
      height: 1em;
    }
  }
}
</style>
