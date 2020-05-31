<template>
  <li :class="$style.item">
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
          <span :class="$style.label">라이센스:</span>
          <span>{{ licenseName }}</span>
        </div>
        <div :class="$style.option">
          <span :class="$style.label">구매일자:</span>
          <span>{{ item.updatedAt | moment('YYYY-MM-DD HH:mm') }}</span>
        </div>
        <div :class="$style.option">
          <span :class="$style.label">제품상태:</span>
          <span>{{ status }}</span>
        </div>
        <div :class="$style.option">
          <span :class="$style.label">사이트URL:</span>
          <span>{{ item.siteUrl || '없음' }}</span>
        </div>
      </div>

      <div class="tw-flex">
        <!-- 다운로드 버튼 -->
        <AppButton
          v-if="downloadEnabled === 1"
          color="primary"
          @click="downloadDialogVisible = true"
          >다운로드</AppButton
        >

        <el-tooltip
          v-else-if="downloadEnabled === 2"
          content="사이트URL을 등록해야 다운로드할 수 있습니다."
        >
          <AppButton color="primary" disabled>다운로드</AppButton>
        </el-tooltip>

        <el-tooltip
          v-else
          content="제품을 다운로드할 수 없습니다. 제품 상태를 확인해주세요."
        >
          <AppButton color="primary" disabled>다운로드</AppButton>
        </el-tooltip>

        <AppButton
          color="gray"
          class="tw-ml-2"
          @click="siteUrlDialogVisible = true"
          >사이트URL 등록</AppButton
        >
      </div>

      <div
        v-if="downloadEnabled === 2"
        class="tw-pt-2 tw-text-danger tw-text-xs"
      >
        사이트URL(도메인)을 입력해야 다운로드할 수 있습니다.
      </div>
    </div>

    <OrderDownload
      v-if="downloadDialogVisible"
      v-model="downloadDialogVisible"
      :cartId="item._id"
      :productId="item.productId._id"
    />
    <OrderSiteUrl
      v-if="siteUrlDialogVisible"
      v-model="siteUrlDialogVisible"
      :item="item"
    />
  </li>
</template>

<script>
import OrderDownload from './OrderDownload'
import OrderSiteUrl from './OrderSiteUrl'

export default {
  components: {
    OrderDownload,
    OrderSiteUrl,
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

    status() {
      const statusName = {
        1: '구매 완료',
        2: '다운로드된 상품',
        20: '환불 요청중인 상품',
        21: '환불된 상품',
      }

      return statusName[this.item.status]
    },

    downloadEnabled() {
      const statusCheck = this.item.status === 1 || this.item.status === 2
      if (statusCheck && this.item.siteUrl) return 1
      if (!this.item.siteUrl) return 2
      return 3
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
