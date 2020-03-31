<template>
  <button
    class="app-date-picker-family"
    :class="[$style.item, isActive && $style.active]"
    @click="click"
  >
    {{ calculatedYear }}년
  </button>
</template>

<script>
export default {
  props: {
    value: {},
    nowDate: Date,
    firstYear: {
      type: Number,
      default: 1919,
    },
  },

  computed: {
    nowYear() {
      return this.nowDate.getFullYear()
    },

    calculatedYear() {
      // 최초 년도로 설정할 일부터 -1 해야 해당 년도부터 시작합니다.
      return this.firstYear - 1 + this.value
    },
    isActive() {
      return this.nowYear === this.calculatedYear
    },
  },

  mounted() {
    if (this.isActive) {
      this.$el.focus()
    }
  },

  methods: {
    click() {
      this.$emit('click', this.calculatedYear)
    },
  },
}
</script>

<style lang="scss" module scoped>
.item {
  cursor: pointer;
  display: block;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  outline: none;
  border: none;

  transition: 250ms;

  &:hover {
    background-color: $color-background-light;
  }
  &:active,
  &:focus {
    background-color: $color-background;
  }
  &.active {
    color: $color-primary;
    font-size: 20px;
    font-weight: $font-weight-medium;
  }
}
</style>
