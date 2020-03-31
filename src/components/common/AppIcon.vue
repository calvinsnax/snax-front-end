<template>
  <component v-bind:is="componentFile" class="app-icon-component"></component>
</template>

<script>
export default {
  /**
   * svg 아이콘을 효율적으로 관리하기 위해 제작된 icon 컴포넌트입니다.
   */

  name: 'AppIcon',

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    componentFile() {
      // @INFO: async 방식의 컴포넌트 import입니다.
      return () => import(`@/assets/svg/${this.name}.svg?inline`)
    },
  },
}
</script>

<style lang="scss" module scoped></style>
