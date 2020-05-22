<template>
  <label
    class="app-form-input"
    :class="{ 'last-child': lastChild, 'app-form-input-overflow': overflow }"
  >
    <div class="app-form-input-label">
      <span class="label-text">{{ label }}</span>
      <span v-if="error"> ・ </span>
      <span v-if="error" class="label-error">{{ error }} </span>
    </div>

    <div
      class="app-form-input-slot tw-flex tw-items-center"
      :class="{ error: error }"
    >
      <slot />
    </div>
  </label>
</template>

<script>
export default {
  props: {
    label: String,
    error: String,
    lastChild: [Boolean, String],
    overflow: {
      type: [Boolean, String],
      default: true,
    },
  },
}
</script>

<style lang="scss">
.app-form-input {
  position: relative;
  display: block;
  margin: -1px;

  border: 1px solid transparent;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    border-bottom: 1px solid $color-gray-300;
  }

  &.last-child {
    &::after {
      display: none;
    }
  }

  &-overflow {
    overflow: hidden;
  }

  &:focus-within {
    border: 1px solid black;
    border-radius: $border-radius-2;
    // overflow: hidden;
  }

  &-label {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 0.75rem;
    padding-left: 1rem;

    color: $color-gray-600;
    font-size: 0.75rem;

    .label-error {
      color: $color-danger;
    }
  }

  & > .app-form-input-slot > * {
    width: 100%;
  }

  input {
    width: 100%;
    padding-top: 2rem;
    padding-left: 1rem;
    padding-bottom: 0.75rem;

    color: black;
    font-size: 1rem;

    outline: none;

    &::placeholder {
      color: $color-gray-500;
    }
  }

  .app-form-input-slot.error {
    input {
      color: $color-danger;
    }
  }
}

.app-form-input-slot {
  & > .app-select {
    margin-top: 2rem;
    background-color: transparent !important;
    & > button {
      border: none !important;
    }
  }
}
</style>
