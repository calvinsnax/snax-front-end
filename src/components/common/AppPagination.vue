<template>
  <div :class="$style.pagination">
    <a
      :class="[$style.prev, prevButtonEnabled || $style.disabled]"
      @click="onClickPrev()"
    >
      <AppIcon name="icons/arrow-left-outline-light" />
      <!-- <v-icon>mdi-chevron-left</v-icon> -->
    </a>

    <ul>
      <li
        :class="[order === item ? $style.active : false]"
        v-for="(item, index) in pages"
        :key="index"
      >
        <a @click="onClickItem(item)">{{ item + 1 }}</a>
      </li>
    </ul>

    <a
      :class="[$style.next, nextButtonEnabled || $style.disabled]"
      @click="onClickNext()"
    >
      <AppIcon name="icons/arrow-right-outline-light" />
      <!-- <v-icon>mdi-chevron-right</v-icon> -->
    </a>
  </div>
</template>

<script>
export default {
  name: 'AppPagination',

  props: {
    // 전체 컨텐츠의 갯수
    total: {
      type: Number,
      required: true,
    },
    // 한 페이지에서 보여줄 컨텐츠의 갯수
    limit: {
      type: Number,
      default: 10,
      required: false,
    },
    // 현재 선택된 페이지 = order
    value: {
      type: Number,
      default: 0,
      required: true,
    },
    // 한 번에 표시할 페이지 수
    length: {
      type: Number,
      default: 10,
      required: false,
    },
  },

  computed: {
    order: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
    pages() {
      const total = this.total > 0 ? this.total : 1
      let pagesComputed = total / this.limit
      let startIndex = 0 // 1, 10, 20, ...

      // console.log(pagesComputed)

      if (this.order % this.length === 0) {
        startIndex = (this.order / this.length) * this.length
      } else if (this.order / this.length >= 1) {
        startIndex = parseInt(this.order / this.length) * this.length
      }

      let endIndex = startIndex + this.length

      // console.log(endIndex)

      if (endIndex > Math.ceil(pagesComputed)) {
        endIndex = Math.ceil(pagesComputed)
      }

      let pagesList = []

      for (let i = startIndex; i < endIndex; i++) {
        pagesList.push(i)
      }

      // console.log(startIndex)
      // console.log(endIndex)

      return pagesList
    },

    prevButtonEnabled() {
      return this.order > 0
    },
    nextButtonEnabled() {
      const pages = this.total / this.limit

      if (this.order + 1 < Math.ceil(pages)) {
        return true
      }

      return false
    },
  },
  methods: {
    onClickItem(item) {
      this.$emit('input', item)
      this.$emit('onChange')
    },
    onClickPrev() {
      if (this.prevButtonEnabled) {
        this.$emit('input', this.order - 1)
        this.$emit('onChange')
      }
    },
    onClickNext() {
      if (this.nextButtonEnabled) {
        this.$emit('input', this.order + 1)
        this.$emit('onChange')
      }
    },
  },
}
</script>

<style lang="scss" module scoped>
.pagination {
  display: flex;
  justify-content: center;
  padding: 32px 0;

  & > ul {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0 18px;
    margin: 0;

    & > li {
      display: inline-flex;
      min-width: 24px;
      height: 24px;
      margin-right: 5px;
      // & > a {
      //   display: inline-flex;
      //   justify-content: center;
      //   align-items: center;
      //   min-width: 24px;
      //   min-height: 24px;
      //   padding: 0 8px;

      //   color: $color-text-secondary;
      //   font-size: 14px;
      //   line-height: 22px;
      //   text-decoration: none;

      //   border-radius: 30px;
      //   background-color: transparent;
      //   transition: 250ms;
      // }

      &:last-child {
        margin-right: 0;
      }

      &.active {
        & > a {
          color: white;
          background-color: $color-secondary;
        }
      }
    }
  }

  & > ul > li > a,
  .prev,
  .next {
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 24px;
    height: 24px;
    padding: 0 8px;

    color: $color-text-secondary;
    font-size: 14px;
    line-height: 22px;
    text-decoration: none;

    border-radius: 30px;
    background-color: transparent;
    transition: 250ms;

    &.disabled {
      opacity: 0.5;
    }
  }

  .prev,
  .next {
    padding: 0;
    margin-right: 0;

    svg {
      fill: $color-text-secondary;
      width: 18px;
      height: 18px;
      // margin-top: 3px;
    }
  }
}
</style>
