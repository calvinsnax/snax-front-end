<template>
  <input
    v-model="input"
    :class="[
      $style.appInput,
      inline && $style.inline,
      nonFocusEffect && $style.nonFocusEffect,
      textSmall && $style.textSmall,
      error && $style.error,
    ]"
    :type="type"
    :placeholder="placeholder"
    :style="inputStyle"
    :min="min"
    :max="max"
    :maxlength="maxlength"
    :required="required"
    @input="input = $event.target.value"
    @focus="focus"
    @blur="blur"
    @keypress="keypress"
    @paste="paste"
  />
</template>

<script>
export default {
  props: {
    value: {},
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    width: [String, Number],
    maxWidth: [String, Number],
    min: [String, Number],
    max: [String, Number],
    minlength: [String, Number],
    maxlength: [String, Number],
    required: [Boolean, String],
    inline: [Boolean, String],
    nonFocusEffect: [Boolean, String],
    textSmall: [Boolean, String],
    error: {},
  },

  computed: {
    input: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
    inputStyle() {
      return {
        width: (this.width || this.maxWidth) + 'px',
        minWidth: this.width + 'px',
        maxWidth: this.maxWidth + 'px',
      }
    },
  },

  methods: {
    focus(e) {
      this.$emit('focus', e)
    },
    blur(e) {
      this.$emit('blur', e)
    },
    keypress(e) {
      this.$emit('keypress', e)
    },
    paste(e) {
      this.$emit('paste', e)
    },
  },
}
</script>

<style lang="scss" module scoped>
.appInput {
  width: 100%;
  height: 2.5rem;
  padding-left: 1.25rem;
  background-color: white;
  outline: none;
  border: 1px solid $color-gray-200;
  border-radius: $border-radius-1;

  color: black;
  font-size: 1rem;
  font-weight: $font-weight-medium;

  // type이 숫자일 경우 웹에서 버튼을 제거
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    &:not(.nonFocusEffect) {
      border-color: $color-secondary;
    }
  }

  &::placeholder {
    color: $color-border-light;
  }

  &.expand {
    width: 100%;
  }

  &.error {
    color: $color-danger;
    border-color: $color-danger;
  }

  &.textSmall {
    font-size: 1rem;
    font-weight: $font-weight-regular;
  }
}
</style>
