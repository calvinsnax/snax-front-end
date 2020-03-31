<template functional>
  <main class="base-content">
    <slot />
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// .base-content {
//   max-width: $small-w;
//   min-height: calc(100vh - #{$base-nav-height});
//   margin: 0 auto;
//   background-color: white;

//   &::after {
//     content: '';
//     display: table;
//     clear: both;
//   }
// }
</style>
