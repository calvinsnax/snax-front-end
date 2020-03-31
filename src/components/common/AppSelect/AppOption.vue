<template>
  <li
    v-if="!flat || fake || (flat && !isSelected)"
    class="app-select-option"
    :class="[
      $style.item,
      isSelected && $style.selected,
      disabled && $style.disabled,
      flat && $style.flat,
    ]"
    @click.stop="onClickItem"
  >
    <!-- v-if="!flat || (flat && !isSelected)" -->
    <slot>
      <button
        ref="item"
        @keydown.up.exact="up"
        @keydown.down.exact="down"
        :app-option-index="index"
      >
        <span class="tw-flex-1">{{ label }}</span>
        <AppIcon
          v-if="flat && isSelected"
          :class="$style.icon"
          name="icons/arrow-top-outline"
        />
      </button>
    </slot>
  </li>
</template>

<script>
import findIndex from 'lodash/findIndex'

export default {
  name: 'AppOption',

  inject: ['select'],

  props: {
    label: {
      type: [String, Number, Boolean],
      required: true,
    },
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    disabled: [Boolean, String],
    fake: [Boolean, String],
  },

  computed: {
    isSelected() {
      return this.select.value === this.value
    },
    index() {
      return findIndex(this.select.options, {
        label: this.label,
        value: this.value,
      })
    },

    // style
    flat() {
      return this.select.flat
    },
  },

  watch: {
    // select에서 상태가 바뀔 때마다 옵션 정보를 다시 푸시해준다.
    label: {
      handler() {
        this.select.options.push({
          label: this.label,
          value: this.value,
        })
      },
      deep: true,
    },
  },

  created() {
    // option 정보를 select로 보냄
    if (this.fake) return // fake 일 경우 보내지 않는다.
    this.select.options.push({
      label: this.label,
      value: this.value,
    })
  },

  methods: {
    onClickItem() {
      this.select.onClickItem(this.value)

      this.select.isEnabled = false
      this.select.$refs.selectButton.focus()
    },

    up(e) {
      // console.log(e)
      $(e.target)
        .parent()
        .prev()
        .children()
        .focus()
    },
    down(e) {
      // console.log(e)
      $(e.target)
        .parent()
        .next()
        .children()
        .focus()
    },
  },
}
</script>

<style lang="scss" module scoped>
.item {
  transition: 250ms;

  & > button {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px 20px;
    color: $color-text-primary;
    text-align: left;
    text-decoration: none;
    outline: none;
    border: none;
    &:hover {
      background-color: $color-background-light;
    }
    &:active,
    &:focus {
      background-color: $color-background;
    }
  }
  &.selected {
    & > button {
      color: $color-primary;
      font-weight: $font-weight-bold;
    }
  }
}

.flat {
  & > button {
    color: $color-text-secondary;
    padding: 4px 10px;
    white-space: nowrap;
  }

  &.selected {
    & > button {
      color: $color-text-primary;
      .icon {
        margin-left: 3px;
        width: 17px;
        height: 17px;
      }
    }
  }
}
</style>
