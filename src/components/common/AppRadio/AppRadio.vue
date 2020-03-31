<template>
  <button
    class="app-radio-button"
    :class="[$style.appRadio, selected && $style.selected]"
    @click="$emit('input', label)"
  >
    <div :class="$style.icon"></div>
    <span :class="$style.label">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Boolean, Number],
      required: true,
    },
    label: {
      type: [String, Boolean, Number],
      required: true,
    },
  },

  computed: {
    selected() {
      if (this.value === this.label) return true
      return false
    },
  },
}
</script>

<style lang="scss" module scoped>
.appRadio {
  display: inline-flex;
  align-items: center;
  padding: 0;

  color: $color-text-secondary;
  font-size: 0.875rem;
  font-weight: $font-weight-bold;

  border: none;
  outline: none;
  background-color: transparent;

  .icon {
    width: 18px;
    height: 18px;
    border: 1px solid #707070;
    border-radius: 100%;
    background-color: white;
    transition: 250ms;
  }

  .label {
    line-height: 1;
    margin-left: 7px;
  }

  &.selected {
    color: $color-text-primary;
    .icon {
      border: 6px solid $color-primary;
    }
  }
}
</style>
