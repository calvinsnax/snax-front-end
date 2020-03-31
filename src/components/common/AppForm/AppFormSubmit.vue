<template>
  <div :class="$style.formSubmit">
    <button
      :class="[$style.submitButton, !disabled && $style.submitActive]"
      @click="submit"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
  },

  methods: {
    submit(e) {
      if (this.disabled) return
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" module scoped>
.formSubmit {
  display: flex;
  justify-content: center;
}
.submitButton {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  margin-bottom: 2rem;

  color: $color-gray-600;
  font-size: 0.875rem;
  font-weight: $font-weight-bold;

  background-color: $color-gray-300;
  border-radius: 100%;
  outline: none;

  transition: 0.3s;

  &.submitActive {
    color: white;
    background-color: black;
  }
}
</style>
