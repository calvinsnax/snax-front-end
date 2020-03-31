<template>
  <div :class="$style.headerWrap">
    <div :class="$style.headerFixed">
      <div :class="[$style.header, flat && $style.flat]">
        <div :class="$style.headerContainer">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flat: [Boolean, String],
  },
}
</script>

<style lang="scss" module scoped>
$app-header-height: 3.2rem;

.headerWrap {
  height: $app-header-height;
}

.headerFixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header {
  max-width: $small-w;
  width: 100%;
  height: $app-header-height;
  margin: 0 auto;
  background-color: white;
  box-shadow: rgba($oc-gray-6, 0.1) 0 1px;

  &.flat {
    box-shadow: none;
  }
}

.headerContainer {
  display: flex;
  align-items: center;
  height: 100%;
  max-width: $medium-w;
  padding-left: 1.25rem;
  padding-right: 0.5rem;
  margin: 0 auto;
}
</style>
