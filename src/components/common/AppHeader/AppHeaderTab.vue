<template>
  <div :class="$style.tabWrap">
    <div :class="$style.tabFixed">
      <div :class="$style.tab">
        <div :class="$style.tabContainer">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
$tab-height: 2.5rem;

.tabWrap {
  height: $tab-height;
}

.tabFixed {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
}

.tab {
  max-width: $small-w;
  width: 100%;
  height: $tab-height;
  margin: 0 auto;
  background-color: white;
  box-shadow: rgba($oc-gray-6, 0.1) 0 1px;
}

.tabContainer {
  display: flex;
  align-items: center;
  max-width: $medium-w;
  margin: 0 auto;
  height: 100%;
  padding-left: 0;
  padding-right: 0;
}
</style>
