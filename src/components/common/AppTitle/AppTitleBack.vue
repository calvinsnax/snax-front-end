<template>
  <a :class="$style.appTitleBack" @click="click">
    <v-icon>mdi-arrow-left</v-icon>
  </a>
</template>

<script>
export default {
  methods: {
    click(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" module scoped>
.appTitleBack {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  border-radius: 100%;
  color: black;
  i {
    color: black;
    font-size: 1.75rem;
  }
}
</style>
