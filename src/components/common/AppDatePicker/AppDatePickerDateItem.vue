<template>
  <div :class="[$style.item, isActive && $style.active]">
    <a :class="$style.button" @click="click">{{ value }}</a>
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    nowDate: {},
    currentDate: {},
  },

  computed: {
    yearCheck() {
      const now = this.nowDate.getFullYear()
      const current = this.currentDate.getFullYear()

      return now === current
    },
    monthCheck() {
      const now = this.nowDate.getMonth()
      const current = this.currentDate.getMonth()

      return now === current
    },
    currentDateGetDate() {
      return this.currentDate.getDate()
    },

    isActive() {
      if (!this.yearCheck || !this.monthCheck) return false
      return this.currentDateGetDate === this.value
    },
  },

  methods: {
    click(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" module scoped>
.item {
  .button {
    cursor: pointer;
    display: inline-flex;
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 100%;
    transition: 250ms;

    &:hover {
      background-color: $color-background-light;
    }
    &:active {
      background-color: $color-background;
    }
  }

  &.active {
    .button {
      color: white;
      font-weight: $font-weight-medium;
      background-color: $color-primary;
    }
  }
}
</style>
