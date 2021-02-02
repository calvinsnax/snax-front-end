<template>
  <div v-if="navVisible" :class="$style.navWrap">
    <nav :class="[$style.nav, scrolled && $style.scrolled]">
      <div :class="$style.navContainer" class="tw-container tw-mx-auto">
        <router-link :class="$style.logo" to="/">
          <img src="@/assets/images/logo.svg" alt="SNAX" />
        </router-link>

        <BaseNavMenu class="tw-hidden md:tw-flex" />

        <AppSpacer />

        <BaseNavProfile v-if="loggedIn" />

        <div v-else class="tw-flex">
          <router-link :class="$style.login" :to="{ name: 'login' }">
            <AppIcon name="icons/lock" />
            <span>로그인</span>
          </router-link>

          <router-link :to="{ name: 'register' }">
            <AppButton color="black" size="small">회원가입</AppButton>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseNavMenu from './BaseNavMenu'
import BaseNavProfile from './BaseNavProfile'

export default {
  components: {
    BaseNavMenu,
    BaseNavProfile,
  },

  computed: {
    ...mapState('nav', ['navVisible']),
    ...mapState('auth', ['loggedIn']),
  },

  data() {
    return {
      scrolled: false,
      mobileMenuVisible: false,
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      const scrollTop = window.scrollY

      if (scrollTop > 1) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    },
  },
}
</script>

<style lang="scss" module scoped>
.navWrap {
  height: $base-nav-height;
}

.nav {
  position: fixed;
  z-index: 900;
  top: 0;
  left: 0;
  width: 100%;
  height: $base-nav-height;

  // transition: background-color 0.3s, box-shadow 0.3s;

  &.scrolled {
    background-color: rgba(white, 0.9);
    backdrop-filter: saturate(180%) blur(20px);
    box-shadow: rgba(black, 0.1) 0 1px 0;
  }

  .navContainer {
    display: flex;
    align-items: center;
    height: 100%;
  }
}

@media (max-width: $medium-w) {
  .navWrap,
  .nav {
    height: 3rem;
  }
}

.logo {
  display: flex;
  align-items: center;
  height: 2rem;
  margin-right: 2.8rem;

  img {
    height: 100%;
  }
}

// .navIcon {
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   width: 2rem;
//   height: 2rem;
//   margin: 0 1rem;

//   color: black;
//   text-decoration: none;
//   border-radius: 100%;

//   i {
//     font-size: 1.25rem;
//   }
// }

.login {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-right: 1.5rem;

  color: black;
  font-size: 0.875rem;
  font-weight: $font-weight-medium;
  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }
}
</style>
