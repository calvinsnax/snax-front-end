<template>
  <div :class="$style.header">
    <h1 :class="$style.title">둘러보세요</h1>
    <p :class="$style.desc">
      충분히 멋진 당신을 위해, 충분히 멋진 것들만 준비했어요.
    </p>

    <div :class="$style.category">
      <router-link
        v-for="item in categories"
        :key="item.id"
        :to="{ name: 'store', query: item.id && { category: item.name } }"
        exact
      >
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { name: '전체', id: '' },
        { name: '테마 패키지', id: 'theme_package' },
        { name: '레이아웃', id: 'layout' },
        { name: '모듈 스킨', id: 'module_skin' },
        { name: '위젯 스킨', id: 'widget_skin' },
      ],
    }
  },
}
</script>

<style lang="scss" module scoped>
.header {
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  .title {
    font-size: 2.5rem;
    font-weight: $font-weight-bold;
    margin-bottom: 0.125rem;
  }

  .desc {
    color: $color-gray-600;
    font-size: 1rem;
    font-weight: $font-weight-medium;
    margin-bottom: 3rem;
  }

  .category {
    display: inline-flex;
    align-items: center;
    border-radius: $border-radius-2;
    background-color: $color-gray-200;

    & > a {
      display: inline-block;
      padding: 0.5rem 1.5rem;
      margin: 0.125rem;

      color: $color-gray-600;
      font-size: 0.875rem;
      font-weight: $font-weight-medium;
      text-decoration: none;

      border-radius: $border-radius-2;
      background-color: transparent;
      transition: 0.3s;

      &:global(.router-link-active) {
        color: black;
        background-color: white;
        box-shadow: rgba(black, 0.1) 0 2px 8px;
      }
    }
  }
}
</style>
