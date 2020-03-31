<template>
  <ul :class="$style.navMenu">
    <li>
      <router-link :to="{ name: 'store' }">스토어</router-link>
    </li>
    <li>
      <a>커뮤니티</a>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" module scoped>
.navMenu {
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;

  & > li {
    margin-right: 1.75rem;
    & > a {
      position: relative;
      cursor: pointer;
      display: block;
      color: black;
      font-size: 1rem;
      font-weight: $font-weight-medium;
      text-decoration: none;

      &::after {
        content: '';
        position: absolute;
        top: 0.6em;
        left: 0;
        z-index: -1;
        width: 120%;
        height: 0.9em;
        background-color: #ffe711;

        opacity: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: 0.3s ease;
      }

      &:global(.router-link-active),
      &:hover {
        &::after {
          opacity: 1;
          transform: scaleX(1);
        }
      }
    }
  }
}
</style>
