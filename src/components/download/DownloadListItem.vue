<template>
  <li :class="$style.item" v-if="item">
    <router-link
      :to="{ name: 'product', params: { id: item.productId.id } }"
      :class="$style.thumbnail"
    >
      <img :src="item.productId.thumbnail" :alt="item.productId.name" />
    </router-link>

    <div :class="$style.body">
      <div :class="$style.title">{{ item.productId.name }}</div>

      <!-- 옵션 -->
      <div :class="$style.optionList">
        <div :class="$style.option">
          <span :class="$style.label">라이센스: </span>
          <span>{{ licenseName }}</span>
        </div>
        <!-- <div :class="[$style.option, { 'tw-text-danger': !confirmed }]">
          <span :class="$style.label">제품상태: </span>
          <span>{{ status }}</span>
        </div> -->
        <div :class="$style.option">
          <span :class="$style.label">사이트URL: </span>
          <span>{{ item.siteUrl || '없음' }}</span>
        </div>
      </div>

      <!-- 승인 후 상태 -->
      <div class="tw-flex">
        <!-- 다운로드 버튼 -->
        <AppButton
          color="primary"
          :disabled="item.orderId.status !== 2 || !item.siteUrl"
          @click="downloadDialogVisible = true"
          >다운로드</AppButton
        >

        <AppButton
          color="gray"
          class="tw-ml-2"
          :disabled="item.orderId.status !== 2"
          @click="siteUrlDialogVisible = true"
          >사이트URL 등록</AppButton
        >
      </div>

      <div
        v-if="item.orderId.status === 1"
        class="tw-pt-2 tw-text-danger tw-text-xs"
      >
        주문내역에서 구매확정을 해야 다운로드할 수 있습니다.
      </div>
      <div v-else-if="!item.siteUrl" class="tw-pt-2 tw-text-danger tw-text-xs">
        사이트URL(도메인)을 입력해야 다운로드할 수 있습니다.
      </div>
    </div>

    <DownloadDialog
      v-if="downloadDialogVisible"
      v-model="downloadDialogVisible"
      :cartId="item._id"
      :productId="item.productId._id"
    />
    <DownloadSiteUrl
      v-if="siteUrlDialogVisible"
      v-model="siteUrlDialogVisible"
      :item="item"
    />
  </li>
</template>

<script>
import DownloadDialog from './DownloadDialog'
import DownloadSiteUrl from './DownloadSiteUrl'

export default {
  components: {
    DownloadDialog,
    DownloadSiteUrl,
  },

  props: {
    index: Number,
    item: {},
  },

  data() {
    return {
      downloadDialogVisible: false,
      siteUrlDialogVisible: false,
    }
  },

  computed: {
    licenseName() {
      const licenses = {
        basic: '베이직',
        premium: '프리미엄',
        business: '비즈니스',
      }

      return licenses[this.item.license]
    },

    // 주문 상태를 표시
    status() {
      const statusNames = {
        0: '입금 대기 중',
        1: '승인됨',
        2: '구매 확정된 주문',
        20: '취소됨',
        21: '환불된 주문',
      }

      return statusNames[this.item.orderId.status]
    },

    // 승인됨
    confirmed() {
      if (this.item.orderId.status !== 2) return false
      return false
    },
  },

  methods: {
    onClickSiteUrl() {
      console.log('siteUrl')
      this.siteUrlDialogVisible = true
    },
  },
}
</script>

<style lang="scss" module scoped>
.item {
  display: flex;
  align-items: flex-start;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid $color-gray-300;

  .thumbnail {
    position: relative;
    display: block;
    width: 6rem;
    height: 6rem;
    overflow: hidden;
    border-radius: $border-radius-2;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }

  .body {
    flex: 1;
    padding-left: 1rem;

    .title {
      font-size: 1rem;
      font-weight: $font-weight-medium;
    }
    .optionList {
      margin-bottom: 0.5rem;
    }
    .option {
      font-size: 0.875rem;
      .label {
        color: $color-gray-600;
      }
    }

    .priceBeforeDiscount {
      color: $color-gray-600;
      font-size: 0.75rem;
      text-decoration: line-through;
    }
    .price {
      color: $color-primary;
      // font-size: 0.875rem;
      font-weight: $font-weight-bold;
    }

    .totalAmount {
      display: flex;
      font-size: 0.875rem;
      font-weight: $font-weight-bold;
      .body {
        flex: 1;
        text-align: right;
      }
    }
  }
}
</style>
