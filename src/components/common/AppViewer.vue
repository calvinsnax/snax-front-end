<template>
  <viewer :initialValue="value" />
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import { Viewer } from '@toast-ui/vue-editor'

export default {
  components: {
    Viewer,
  },

  props: {
    value: {},
  },
}
</script>

<style></style>
