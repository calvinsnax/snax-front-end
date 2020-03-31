<template>
  <div :class="$style.header">
    <a :class="$style.button" @click="$emit('prev')">
      <AppIcon name="icons/arrow-left-outline-light" />
    </a>
    <div :class="$style.center">
      <slot />
    </div>
    <a :class="$style.button" @click="$emit('next')">
      <AppIcon name="icons/arrow-right-outline-light" />
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.header {
  display: flex;
  align-items: center;
  height: 45px;
  padding-left: 9px;
  padding-right: 9px;
  border-bottom: 1px solid $color-border-lighter;

  .button {
    cursor: pointer;
    display: inline-flex;
    text-decoration: none;
    color: $color-gray-600;
    border-radius: 100%;
    svg {
      width: 27px;
      height: 27px;
    }
  }

  .center {
    flex: 1;
    display: flex;
    justify-content: center;
    height: 100%;
    & > a {
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      text-align: center;
      text-decoration: none;

      &:hover {
        color: $color-primary;
      }
    }
  }
}
</style>
