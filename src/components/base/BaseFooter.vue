<template>
  <div v-if="navVisible" :class="$style.footer">
    <div class="tw-container tw-mx-auto">
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
.footer {
  padding: 3rem 0;
  color: $color-gray-700;
  font-size: 0.875rem;
  background-color: black;

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
    font-size: 0.75rem;
  }
}
</style>
