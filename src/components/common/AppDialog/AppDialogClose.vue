<template>
  <button :class="$style.button" @click="click">
    <i class="el-icon-close"></i>
  </button>
</template>

<script>
export default {
  methods: {
    click(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" module scoped>
.button {
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: -10px;
  color: $color-text-primary;
  outline: none;
  border-radius: 100%;
  svg {
    fill: $color-text-primary;
    width: 27px;
    height: 27px;
  }
}
</style>
