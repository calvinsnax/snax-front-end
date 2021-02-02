<template>
  <div :class="$style.page">
    <DownloadList />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DownloadList from '@/components/download/DownloadList'

export default {
  components: {
    DownloadList,
  },

  created() {
    this.fetchData()
  },

  methods: {
    ...mapActions('download', ['fetchData']),
  },
}
</script>

<style lang="scss" module scoped>
.page {
}
</style>
