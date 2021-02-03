<template>
  <div :class="$style.auth">
    <AppHeader xs>
      <AppHeaderBack />
      <AppHeaderTitle>로그인</AppHeaderTitle>
    </AppHeader>
    <!-- <div :class="$style.header">
      <router-link :to="{ name: 'home' }">
        <AppIcon name="logo" />
      </router-link>
      <AppSpacer />
      <h1>{{ title }}</h1>
    </div> -->

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
  max-width: $small-w;
  padding: 1rem;
  margin: 0 auto;

  &:global(.v-enter-active),
  &:global(.v-enter-active) {
    transition: 0.2s ease;
  }

  &:global(.v-enter),
  &:global(.v-leave-active) {
    opacity: 0;
  }

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
