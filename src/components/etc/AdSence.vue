<template>
  <div :class="$style.wrap">
    <div class="tw-container">
      <div :class="$style.ad">
        <el-tooltip content="자유홍보 전광판에 글을 올리면 이곳에 올라옵니다.">
          <a :class="$style.adHelp">i</a>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.wrap {
  padding: 1rem 0 0.25rem;

  .ad {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    border-radius: $border-radius-1;
    background-color: $oc-gray-1;
  }
}

.adHelp {
  position: absolute;
  top: $padding-1;
  right: $padding-1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  color: $oc-gray-7;
  font-size: $font-size-1;
  background-color: $color-lighted-8;
  border: 1px solid $oc-gray-2;
  border-radius: 100%;
}
</style>
