<template>
  <a :class="$style.back" @click="onClickBack">
    <div :class="$style.ripple">
      <i class="el-icon-back"></i>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    custom: [Boolean, String],
  },
  methods: {
    onClickBack(e) {
      if (!this.custom) this.$router.go(-1)
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" module scoped>
.back {
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding-left: 0.8rem;
  padding-right: 0.5rem;
  margin-left: -1.25rem;
  height: 100%;
  color: $color-gray-900;
  font-size: 1.5rem;

  .ripple {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
  }

  i {
    color: $color-gray-900;
  }
}
</style>
