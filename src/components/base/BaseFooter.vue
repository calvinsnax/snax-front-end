<template>
  <div
    v-if="navVisible"
    class="tw-container tw-mx-auto"
    :class="$style.footerWrap"
  >
    <div :class="$style.footer">
      <ul :class="$style.menu">
        <li>
          <a>사이트 소개</a>
        </li>
        <li>
          <a>이용약관</a>
        </li>
        <li>
          <a>개인정보 취급방침</a>
        </li>
        <li>
          <a>라이센스 정책</a>
        </li>
      </ul>

      <div :class="$style.copyright">
        © 2020 Calvin Snax. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('nav', ['navVisible']),
  },
}
</script>

<style lang="scss" module scoped>
.footerWrap {
  padding-bottom: 3rem;

  @media (max-width: $medium-w) {
    padding-bottom: 1.25rem;
  }
}

.footer {
  padding: 3rem;
  color: $color-gray-700;
  font-size: 0.875rem;
  background-color: $color-gray-200;
  border-radius: $border-radius-3;

  .menu {
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    @media (max-width: $medium-w) {
      /* display: block; */
    }

    & > li {
      margin-right: 1rem;

      @media (max-width: $medium-w) {
        margin-bottom: 1rem;
      }

      & > a {
        cursor: pointer;
        color: $color-gray-600;
        font-size: 0.875rem;
        text-decoration: none;
      }
    }
  }

  .copyright {
    color: $color-gray-600;
    font-size: 0.75rem;
  }
}
</style>
