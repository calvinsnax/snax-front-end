<template>
  <ul
    class="app-select-menu"
    :class="[$style.selectMenu, flat && $style.flat, right && $style.right]"
    v-click-outside="onClickClose"
  >
    <AppOption
      class="app-select-option"
      v-if="flat"
      :value="select.value"
      :label="select.label"
      fake
    />
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'AppSelectMenu',

  props: {
    value: Boolean,
    flat: [Boolean, String],
    right: [Boolean, String],
  },

  inject: ['select'],

  methods: {
    onClickClose(e) {
      // const reference = '.' + this.select.$el.className
      const isReference = e.target.closest('.app-select')
      const isParent = e.target.closest('.app-form-input')

      // console.info('e.target: ', e.target)
      // console.info('reference: ', reference)
      // console.log(e.target.closest('.app-select'))

      // 클릭 대상이 select가 아닐 경우
      if (!isReference && !isParent) this.$emit('input', false)
    },
  },
}
</script>

<style lang="scss" module scoped>
.selectMenu {
  position: absolute;
  left: 0;
  z-index: 500;
  list-style-type: none;
  width: 100%;
  min-width: 70px;
  max-height: 200px;
  padding: 0;
  margin: $margin-0 0 0;
  background-color: white;
  border-radius: $border-radius-2;
  border: 1px solid $color-gray-300;
  box-shadow: rgba(black, 0.1) 0 2px 20px;

  overflow: auto;
  transform-origin: top;

  transition: 250ms ease-in-out;

  @include custom-scroll;

  &:global(.v-enter-active),
  &:global(.v-leave-active) {
    transition: 250ms ease;
  }

  &:global(.v-enter),
  &:global(.v-leave-active) {
    transform: scaleY(0.8);
    opacity: 0;
  }

  &.right {
    left: auto;
    right: 0;
  }

  &.flat {
    top: 0;
    margin: 0;
    width: auto;

    .flatModeSelectedItem {
      cursor: pointer;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 4px 10px;
      color: $color-text-primary;
      font-size: 16px;
      font-weight: $font-weight-bold;
      text-align: left;
      text-decoration: none;
      white-space: nowrap;
      outline: none;
      border: none;
      &:hover {
        background-color: $color-background-light;
      }
      &:active,
      &:focus {
        background-color: $color-background;
      }

      .icon {
        margin-left: 3px;
        width: 17px;
        height: 17px;
      }
    }
  }
}
</style>
