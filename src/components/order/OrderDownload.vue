<template>
  <AppDialog v-model="enabled" title="제품 다운로드">
    <AppDialogBody>
      <ul :class="$style.contentList">
        <li v-for="(item, index) in contentList" :key="index">
          <a
            :href="`${baseUrl}content/download/${cartId}/${item.filename}`"
            target="_blank"
          >
            <div>{{ item.originalName }}</div>
            <i class="el-icon-download"></i>
          </a>
        </li>
      </ul>
    </AppDialogBody>
  </AppDialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    value: {},
    cartId: String,
    productId: String,
  },

  data: () => ({
    baseUrl: process.env.VUE_APP_BASE_URL || 'https://api.calvinsnax.com/',
  }),

  computed: {
    ...mapState('content', ['contentList']),

    enabled: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },

  created() {
    this.searchData(this.productId)
  },

  methods: {
    ...mapActions('content', ['searchData']),
  },
}
</script>

<style lang="scss" module scoped>
.contentList {
  padding: 1rem 0;
  & > li {
    border-bottom: 1px solid $color-gray-300;

    &:last-child {
      border-bottom: none;
    }

    & > a {
      display: flex;
      align-items: flex-end;
      i {
        margin-left: 1rem;
      }
    }
  }
}
</style>
