<template>
  <a :class="$style.back" @click="$emit('click', $event)">
    <div :class="$style.ripple">
      <i class="el-icon-back"></i>
    </div>
  </a>
</template>

<script>
export default {}
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
  color: $oc-gray-9;
  font-size: 1.5rem;

  .ripple {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    color: $oc-gray-5;
    border-radius: 100%;
  }

  i {
    color: $oc-gray-9;
  }
}
</style>
