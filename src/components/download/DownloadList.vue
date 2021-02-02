<template>
  <div>
    <ul v-if="downloads.length > 0" :class="$style.list">
      <DownloadListItem
        v-for="(item, index) in downloads"
        :key="index"
        :index="index"
        :item="item"
      />
    </ul>

    <div v-else class="tw-text-center tw-py-8">
      <div :class="$style.title">구매한 상품이 없습니다.</div>
      <div :class="$style.desc">먼저 구경해보시겠어요?</div>

      <router-link :to="{ name: 'store' }">
        <AppButton color="gray" rounded>둘러보기</AppButton>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DownloadListItem from './DownloadListItem'

export default {
  components: {
    DownloadListItem,
  },

  computed: {
    ...mapState('download', ['downloads']),
  },
}
</script>

<style lang="scss" module scoped>
.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.title {
  font-weight: $font-weight-bold;
}
.desc {
  color: $color-gray-600;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}
</style>
