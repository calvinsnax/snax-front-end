<template>
  <div :class="[$style.item, isActive && $style.active]">
    <a class="app-date-picker-family" :class="$style.button" @click="click"
      >{{ value }}월</a
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {},
    nowDate: Date,
    currentDate: Date,
  },

  computed: {
    currentYear() {
      return this.currentDate.getFullYear()
    },
    // now는 복제된 데이터를 의미하는 표현입니다.
    nowYear() {
      return this.nowDate.getFullYear()
    },
    nowMonth() {
      return this.nowDate.getMonth() + 1
    },

    isActive() {
      // 선택된 데이터와 복제된 데이터의 연도가 동일해야함.
      if (this.currentYear !== this.nowYear) return
      // 복제된 데이터의 달과 이 아이템의 달이 동일해야함.
      return this.nowMonth === this.value
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
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 35px;
    font-size: 16px;
    text-align: center;
    outline: none;
    border-radius: $border-radius-1;
    transition: 250ms;

    &:hover {
      background-color: $color-background-light;
    }
  }
  &.active {
    .button {
      text-decoration: underline;
      background-color: #f0ecff;
    }
  }
}
</style>
