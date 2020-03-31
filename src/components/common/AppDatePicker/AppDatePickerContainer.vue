<template>
  <div :class="$style.appDataPickerWrap">
    <button
      ref="button"
      :class="$style.appDataPickerButton"
      @click="enabled = !enabled"
    >
      <div :class="$style.value">{{ value | moment('l') }}</div>
      <AppIcon name="icons/calendar-outline-light" />
    </button>

    <AppDatePicker
      v-if="enabled"
      v-model="inputValue"
      :enabled.sync="enabled"
      :ref-button="$refs.button"
      :lastTime="lastTime"
    />
  </div>
</template>

<script>
import AppDatePicker from './AppDatePicker'

export default {
  name: 'AppDataPickerContainer',

  components: {
    AppDatePicker,
  },

  props: {
    value: {
      type: Date,
      default() {
        return new Date()
      },
    },

    lastTime: [Boolean, String],
  },

  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },

  data() {
    return {
      enabled: false,
    }
  },
}
</script>

<style lang="scss" module scoped>
.appDataPickerWrap {
  position: relative;
  width: 199px;
  min-width: 199px;
  user-select: none;
}
.appDataPickerButton {
  display: inline-flex;
  align-items: center;
  width: inherit;
  height: 45px;
  padding-left: 18px;
  padding-right: 8px;

  color: $color-text-primary;
  font-size: 16px;

  outline: none;
  border-radius: $border-radius-1;
  border: 1px solid $color-border-lighter;

  .value {
    flex: 1;
    text-align: left;
  }

  svg {
    width: 27px;
    height: 27px;
  }
}
</style>
