<template>
  <div :class="$style.mainHeader">
    <div class="tw-container tw-relative tw-mx-auto">
      <h1>다시 만나는 SNΛX.</h1>
      <p>
        절제된 아름다움과 섬세한 감각으로 완성된 새로운 SNΛX 스토어를
        만나보세요.
      </p>

      <AppButton color="gray" rounded>더 알아보기</AppButton>

      <div :class="$style.headerBg">
        <div :class="$style.saquare"></div>
        <div :class="$style.saquare"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.mainHeader {
  padding-top: 10rem;
  padding-bottom: 7rem;

  h1 {
    font-size: 2.5rem;
    font-weight: $font-weight-bold;
  }

  p {
    color: $color-gray-600;
    margin-bottom: 2rem;
  }

  .headerBg {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;

    transform: rotate(-20deg);

    .saquare {
      position: relative;
      width: 18.125rem;
      height: 15rem;
      border-radius: 3rem;
      transform: rotate(2deg);

      &:first-child {
        margin-top: 3rem;
        margin-right: 2rem;
        background: linear-gradient(
          64deg,
          rgba($color-primary, 0.1) 20%,
          rgba(0, 0, 0, 0)
        );
      }
      &:last-child {
        background: linear-gradient(
          30deg,
          rgba($color-primary, 0.1) 20%,
          rgba(0, 0, 0, 0)
        );
      }

      &::after {
        content: '';
        position: absolute;
        top: 1rem;
        left: -1rem;
        z-index: -1;
        width: 100%;
        height: 100%;

        border: 1px solid rgba($color-primary, 0.1);
        border-radius: 3rem;
      }
    }
  }
}
</style>
