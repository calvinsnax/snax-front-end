<template>
  <li :class="[$style[type], $style[color], input && $style.inputMode]">
    <component
      :is="componentId"
      :to="to"
      :exact="exact"
      :class="active && $style.active"
      @click="click"
    >
      <div v-if="!input" :class="$style.ripple"></div>
      <slot />
    </component>
  </li>
</template>

<script>
export default {
  props: {
    to: {},
    exact: [Boolean, String],
    type: {
      type: String,
      default: 'tab',
    },
    active: [Boolean, String],
    color: String,
    input: [Boolean, String],
  },

  computed: {
    componentId() {
      if (this.to) return 'router-link'
      return 'a'
    },
  },

  methods: {
    click(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" module scoped>
.ripple {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  color: $color-gray-700;
  transition: 250ms;
}

.tab {
  margin-right: 1px;

  & > a {
    cursor: pointer;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 142px;
    height: 45px;
    padding-left: 40px;
    padding-right: 40px;
    color: $color-text-primary;
    text-align: center;
    font-size: 14px;
    font-weight: $font-weight-medium;
    transition: 250ms;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;

      background-color: $color-button-default-hover;
      border: 1px solid $color-border-lighter;
      border-radius: $border-radius-1 $border-radius-1 0 0;
      transition: 250ms;
    }

    &:global(.router-link-active),
    &.active {
      &::before {
        background-color: white;
      }
      &::after {
        content: '';
        position: absolute;
        left: 1px;
        right: 1px;
        bottom: 0;
        height: 1px;
        background-color: white;
      }
      .ripple {
        color: $color-gray-400;
      }
    }
  }
}

// @INFO: item type
li.button {
  margin-right: -1px;

  &:first-child > a {
    border-top-left-radius: $border-radius-1;
    border-bottom-left-radius: $border-radius-1;
  }
  &:last-child {
    margin-right: 0;
    & > a {
      border-top-right-radius: $border-radius-1;
      border-bottom-right-radius: $border-radius-1;
    }
  }

  // 실질적인 디자인 아이템
  & > a {
    cursor: pointer;
    position: relative;

    // define element & size
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 86px;
    width: 100%;
    height: 45px;
    padding-left: 25px;
    padding-right: 25px;

    // text style
    color: $color-icon-light;
    text-align: center;
    font-size: 16px;
    font-weight: $font-weight-bold;

    // element box style
    border: 1px solid $color-border-lighter;
    background-color: white;
    transition: 250ms;

    &:hover {
      border-color: $color-border-light;
    }

    &:global(.router-link-active),
    &.active {
      z-index: 1;
      color: $color-text-primary;
      border-color: $color-text-primary;
    }
  }

  // color
  &.primary {
    & > a {
      &.active {
        color: $color-primary;
        border-color: $color-primary;

        .ripple {
          color: $color-primary;
        }
      }
    }
  }

  &.red {
    & > a {
      &.active {
        color: $color-danger;
        border-color: $color-danger;

        .ripple {
          color: $color-danger;
        }
      }
    }
  }
}

li.line {
  margin-right: 30px;

  &:first-child {
    margin-left: 15px;
  }
  &:last-child {
    margin-right: 0;
  }

  // 실질적인 디자인 아이템
  & > a {
    cursor: pointer;
    position: relative;

    // define element & size
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: auto;
    width: 100%;
    height: 52px;
    padding: 0 0.25rem;

    // text style
    color: $color-text-primary;
    text-align: center;
    font-size: 16px;
    font-weight: $font-weight-bold;

    // element box style
    border: none;
    border-bottom: 2px solid transparent;
    background-color: transparent;
    transition: 250ms;
    &::before,
    &::after {
      display: none;
    }

    &:hover {
      border-color: $color-border-light;
    }

    &:global(.router-link-active),
    &.active {
      z-index: 1;
      color: $color-primary;
      border-color: $color-primary;
      .ripple {
        color: $color-primary;
      }
    }
  }
}

li.button.inputMode {
  & > a {
    width: 100%;
    padding: 0;

    input {
      // color: $color-text-primary;
      color: inherit;
      font-size: inherit;
      font-weight: $font-weight-regular;
      width: 100%;
      height: 100%;
      padding-left: 17px;
      outline: none;
      border: none;

      &::placeholder {
        color: $color-icon-light;
        font-weight: $font-weight-medium;
      }
    }

    &.active {
      input::placeholder {
        color: transparent;
      }
    }
  }
}
</style>
