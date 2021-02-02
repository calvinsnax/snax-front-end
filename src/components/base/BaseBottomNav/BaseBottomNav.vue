<template>
  <div :class="$style.navbarWrap">
    <div :class="$style.navbarFixed">
      <nav :class="$style.navbar">
        <div :class="$style.navbarNav">
          <BaseBottomNavItem :to="{ name: 'home' }" exact>
            <ion-icon name="home"></ion-icon>
            <ion-icon name="home-outline"></ion-icon>
            <span>홈</span>
          </BaseBottomNavItem>

          <BaseBottomNavItem :to="{ name: 'store' }">
            <ion-icon name="storefront"></ion-icon>
            <ion-icon name="storefront-outline"></ion-icon>
            <span>스토어</span>
          </BaseBottomNavItem>

          <BaseBottomNavItem href="https://calvinsnax.com/membership">
            <ion-icon name="chatbox-ellipses"></ion-icon>
            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
            <span>커뮤니티</span>
          </BaseBottomNavItem>

          <BaseBottomNavItem href="https://calvinsnax.com/faq">
            <ion-icon name="headset"></ion-icon>
            <ion-icon name="headset-outline"></ion-icon>
            <span>고객센터</span>
          </BaseBottomNavItem>

          <BaseBottomNavItem v-if="loggedIn" :to="{ name: 'profile' }">
            <ion-icon name="person-circle"></ion-icon>
            <ion-icon name="person-circle-outline"></ion-icon>
            <span>프로필</span>
          </BaseBottomNavItem>

          <BaseBottomNavItem v-else :to="{ name: 'login' }">
            <ion-icon name="person-circle"></ion-icon>
            <ion-icon name="person-circle-outline"></ion-icon>
            <span>로그인</span>
          </BaseBottomNavItem>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseBottomNavItem from './BaseBottomNavItem'

export default {
  components: {
    BaseBottomNavItem,
  },

  computed: {
    ...mapState('auth', ['loggedIn', 'user']),
  },
}
</script>

<style lang="scss" module scoped>
.navbarWrap {
  height: $base-bottom-nav-height;
  background-color: black;

  @media (min-width: $medium-w) {
    display: none;
  }
}

.navbarFixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
}

.navbar {
  padding-bottom: env(safe-area-inset-bottom);
  background-color: rgba(white, 0.9);
  backdrop-filter: $backdrop-filter;
  -webkit-backdrop-filter: $backdrop-filter;
  border-top: 1px solid $color-gray-400;
}

.navbarNav {
  display: flex;
  align-items: center;
  height: $base-bottom-nav-height;
  max-width: $medium-w;
  margin: 0 auto;
}
</style>
