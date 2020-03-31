<template>
  <AuthContainer>
    <router-view></router-view>
  </AuthContainer>
</template>

<script>
import AuthContainer from '@/components/auth/AuthContainer'

export default {
  components: {
    AuthContainer,
  },
}
</script>

<style lang="scss" module scoped></style>
