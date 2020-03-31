<template>
  <div :class="$style.auth">
    <div :class="$style.header">
      <router-link :to="{ name: 'home' }">
        <AppIcon name="logo" />
      </router-link>
      <AppSpacer />
      <h1>{{ title }}</h1>
    </div>

    <div :class="$style.container">
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
.auth {
  max-width: 26rem;
  padding: 1rem;
  margin: 0 auto;

  .header {
    display: flex;
    align-items: center;
    padding: 1rem 0;

    a {
      display: block;
      svg {
        height: 2rem;
      }
    }
    h1 {
      font-size: 1rem;
      font-weight: $font-weight-medium;
    }
  }

  .container {
    padding: 2rem 0;
  }
}
</style>
