<template>
  <div :class="$style.section">
    <div class="tw-container tw-mx-auto">
      <div :class="$style.title">{{ title }}</div>
    </div>
    <div :class="$style.body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>

<style lang="scss" module scoped>
.section {
  padding-top: 3rem;
  padding-bottom: 3rem;
  //   margin-bottom: 2rem;

  .title {
    font-size: 1.25rem;
    font-weight: $font-weight-bold;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid $color-gray-300;
  }
}
</style>
