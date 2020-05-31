<template>
  <AppDialog v-model="enabled" title="제품 다운로드">
    <AppDialogBody>
      바디
    </AppDialogBody>
  </AppDialog>
</template>

<script>
export default {
  props: {
    value: {},
  },

  computed: {
    enabled: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style></style>
