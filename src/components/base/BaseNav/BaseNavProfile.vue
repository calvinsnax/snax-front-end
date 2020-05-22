<template>
  <div :class="$style.profile">
    <BaseNavItem v-if="user.role === 'admin'">
      관리자
    </BaseNavItem>
    <BaseNavItem :to="{ name: 'cart' }">
      <i class="el-icon-goods"></i>
    </BaseNavItem>
    <BaseNavItem :to="{ name: 'profile' }">
      <i class="el-icon-user"></i>
    </BaseNavItem>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseNavItem from './BaseNavItem'

export default {
  components: {
    BaseNavItem,
  },

  computed: {
    ...mapState('auth', ['user']),
  },
}
</script>

<style lang="scss" module scoped>
.profile {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
