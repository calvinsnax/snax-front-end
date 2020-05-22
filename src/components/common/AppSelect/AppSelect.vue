<template>
  <div
    ref="select"
    class="app-select"
    :class="[$style.select, flat && $style.flat]"
    :style="buttonStyle"
  >
    <button
      ref="selectButton"
      :class="[
        $style.selectButton,
        isEnabled && $style.isEnabled,
        isError ? $style.error : $style.selectButton,
        label && !value && $style.placeholder,
        expand && $style.expand,
      ]"
      @click="onClickSelect"
      @keydown.up.exact="upAndDown"
      @keydown.down.exact="upAndDown"
    >
      <span :class="$style.label">{{ label || placeholder }}</span>
      <!-- <AppIcon
        :class="[$style.icon, isEnabled && $style.active]"
        name="icons/arrow-top-outline"
      ></AppIcon> -->
      <i
        class="el-icon-caret-bottom"
        :class="[$style.icon, isEnabled && $style.active]"
      >
      </i>
    </button>

    <transition>
      <AppSelectMenu
        v-show="isEnabled"
        v-model="isEnabled"
        :flat="flat"
        :right="right"
      >
        <slot />
      </AppSelectMenu>
    </transition>
  </div>
</template>

<script>
import uniqBy from 'lodash/uniqBy'
import find from 'lodash/find'
import findIndex from 'lodash/findIndex'

import AppSelectMenu from './AppSelectMenu'

export default {
  name: 'UiSelect',
  componentName: 'UiSelect',

  components: {
    AppSelectMenu,
  },

  props: {
    value: {},
    isError: {
      type: [Boolean, String],
      default: false,
    },
    placeholder: String,
    readonly: [Boolean, String],
    expand: [Boolean, String],
    flat: [Boolean, String],
    right: [Boolean, String],
    width: [Number, String],
  },

  provide() {
    return {
      select: this,
    }
  },

  computed: {
    buttonStyle() {
      return {
        width: this.width + 'px',
        minWidth: this.width + 'px',
      }
    },

    uniqedOptions() {
      return uniqBy(this.options, 'value')
    },

    labelInput: {
      get: function() {
        return this.label || this.placeholder
      },
    },

    label() {
      const result = find(this.uniqedOptions, { value: this.value })

      if (result) return result.label
      else return this.value
    },

    selectedItemIndex() {
      return findIndex(this.options, {
        value: this.value,
        label: this.label,
      })
    },
  },

  watch: {
    value() {
      this.$emit('change')
    },
  },

  data() {
    return {
      isEnabled: false,
      options: [],
    }
  },

  methods: {
    onClickSelect() {
      this.$emit('click')
      if (this.readonly) return
      this.isEnabled = !this.isEnabled

      this.selectedItemFocus()
    },

    selectedItemFocus() {
      this.$nextTick(() => {
        // console.log('selectedItemFocus')
        $(this.$refs.selectButton)
          .next()
          .find(`button[app-option-index=${this.selectedItemIndex}]`)
          .focus()
      })
    },

    onClickItem(value) {
      this.$emit('input', value)
      this.$emit('change')
    },

    upAndDown() {
      if (!this.flat) return
      console.log('hello')
      this.$emit('click')
      if (this.readonly) return
      this.isEnabled = true

      this.$nextTick(() => {
        $(this.$refs.selectButton)
          .next()
          .find('.app-select-option:nth-child(1) button')
          .focus()
      })
    },
  },
}
</script>

<style lang="scss" module scoped>
.select {
  position: relative;
  display: inline-block;
  width: auto;
  min-width: 142px;
  height: 45px;
  color: black;
  font-size: 0.875rem;
  background-color: white;
  border-radius: $border-radius-2;
}
.selectButton {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  min-width: inherit;
  height: inherit;
  padding-right: 15px;
  border: 1px solid $color-border-lighter;

  color: inherit;
  font-size: inherit;
  background-color: inherit;
  outline: none;
  border-radius: inherit;

  &:focus-within,
  &.isEnabled {
    border-color: $color-border-light;
  }

  // select 텍스트가 들어갈 곳
  .label {
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 0 13px;
    text-align: left;
  }

  // 화살표 아이콘
  .icon {
    color: $color-gray-600;
    font-size: 1rem;
    transition: 250ms ease;
    &.active {
      transform: rotate(180deg);
    }
  }

  &.placeholder {
    color: $color-gray-600;
  }

  &.error {
    color: $color-danger;
  }

  &.expand {
    width: 100% !important;
  }
}

// flat 모드
.flat {
  min-width: auto;
  height: 27px;
  color: $color-text-primary;
  font-size: 16px;
  font-weight: $font-weight-medium;
  background-color: transparent;

  .selectButton {
    // position: relative;
    // z-index: 2;
    padding: 0;
    padding-right: 10px;
    border: none;
    .label {
      padding-left: 10px;
      padding-right: 3px;
    }
    .icon {
      width: 17px;
      height: 17px;
    }
  }
}
</style>
