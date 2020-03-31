<template>
  <button
    class="app-radio-button"
    :class="[$style.appRadio, value && $style.active]"
    @click="$emit('input', !value)"
  >
    <div :class="$style.icon">
      <i class="el-icon-check"></i>
    </div>
    <span :class="$style.label">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
}
</script>

<style lang="scss" module scoped>
.appRadio {
  display: inline-flex;
  align-items: center;
  padding: 0;

  color: $color-gray-600;
  font-size: 0.875rem;

  border: none;
  outline: none;
  background-color: transparent;

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid $color-gray-300;
    border-radius: 100%;
    background-color: white;
    transition: 250ms;

    color: white;
  }

  .label {
    line-height: 1;
    margin-left: 7px;
  }

  &:focus {
    .icon {
      border-color: $color-gray-600;
    }
  }

  &.active {
    .icon {
      color: white;
      background-color: $color-primary;
      border-color: $color-primary;
    }
  }
}
</style>
