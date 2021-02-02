<template>
  <li :class="$style.item">
    <router-link
      :to="{ name: 'product', params: { id: item.cartItems[0].productId.id } }"
      :class="$style.thumbnail"
    >
      <img :src="item.cartItems[0].productId.thumbnail" :alt="item.title" />
    </router-link>

    <div :class="$style.body">
      <div :class="$style.title">{{ item.title }}</div>

      <!-- 옵션 -->
      <div :class="$style.optionList">
        <div :class="$style.option">
          <span :class="$style.label">구매일자: </span>
          <span>{{ item.updatedAt | moment('YYYY-MM-DD HH:mm') }}</span>
        </div>
        <div :class="[$style.option, { 'tw-text-danger': !confirmed }]">
          <span :class="$style.label">제품상태: </span>
          <span>{{ status }}</span>
        </div>
        <div v-if="!confirmed" :class="$style.option">
          <span :class="$style.label">입금자명: </span>
          <span>{{ item.orderInfo.name || '없음' }}</span>
        </div>
      </div>

      <ul :class="$style.productList">
        <li v-for="(item, index) in item.cartItems" :key="index">
          <div>{{ item.productId.name }}</div>
        </li>
      </ul>

      <div class="tw-flex">
        <AppButton color="gray" class="tw-mr-2" @click="onClickOrderCancel"
          >주문 철회</AppButton
        >
        <AppButton color="primary" @click="onClickOrderConfirm"
          >구매 확정</AppButton
        >
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {},

  props: {
    index: Number,
    item: {},
  },

  data() {
    return {}
  },

  computed: {
    status() {
      const statusNames = {
        0: '입금 대기 중',
        1: '승인됨',
        2: '구매 확정된 주문',
        20: '취소됨',
        21: '환불된 주문',
      }

      return statusNames[this.item.status]
    },

    confirmed() {
      if (this.item.status !== 2) return false
      return false
    },
  },

  methods: {
    ...mapActions('order', {
      orderFetch: 'fetchData',
    }),
    ...mapActions('cart', {
      cartFetch: 'fetchData',
    }),

    onClickSiteUrl() {
      console.log('siteUrl')
      this.siteUrlDialogVisible = true
    },

    onClickOrderConfirm() {
      if (this.item.status !== 1) {
        this.$toast.danger({
          message: '아직 주문이 승인되지 않았습니다.',
        })

        return
      }

      this.$confirm(
        '구매를 확정하면 제품을 다운로드하실 수 있지만 다시는 주문을 철회할 수 없습니다. 정말로 구매를 확정하시겠습니까?',
        '구매 확정',
        {
          confirmButtonText: '예',
          cancelButtonText: '아니오',
          type: 'info',
        },
      )
        .then(async () => {
          const result = await this.$http.patch(
            `/order/confirm/${this.item._id}`,
          )

          if (!result) return

          this.orderFetch()
          this.cartFetch()
          this.$toast.show({
            message: '구매가 확정되었습니다. 제품을 다운 받아보세요.',
          })
        })
        .catch(() => {})
    },
    onClickOrderCancel() {
      this.$confirm(
        '주문을 철회하면 되돌릴 수 없습니다.',
        '정말로 주문을 철회하시겠습니까?',
        {
          confirmButtonText: '예',
          cancelButtonText: '아니오',
          type: 'warning',
        },
      )
        .then(async () => {
          const result = await this.$http.patch(
            `/order/cancel/${this.item._id}`,
          )

          if (!result) return

          this.orderFetch()
          this.cartFetch()
          this.$toast.show({ message: '주문이 철회되었습니다.' })
        })
        .catch(() => {})
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
      margin-bottom: 0.25rem;
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

.productList {
  list-style-type: disc;
  padding-left: 30px;
  margin-bottom: 1rem;

  color: $color-gray-700;
  font-size: 0.875rem;
}
</style>
