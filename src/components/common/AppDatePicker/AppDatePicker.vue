<template>
  <transition appear>
    <div
      class="app-date-picker-family"
      :class="$style.appDatePicker"
      v-click-outside="onClickClose"
    >
      <!-- <div :class="$style.header">
      <a>{{ nowDate | moment('YYYY') }}</a>
      <div>{{ nowDate | moment('MMMM Do') }}</div>
      </div>-->

      <!-- Header -->
      <AppDatePickerHeader
        v-if="mode === 'date'"
        @prev="datePrev"
        @next="dateNext"
      >
        <a class="app-date-picker-family" @click="mode = 'month'">
          {{ nowDate | moment('YYYY년 MMMM') }}
        </a>
      </AppDatePickerHeader>

      <AppDatePickerHeader
        v-else-if="mode === 'month'"
        @prev="monthPrev"
        @next="monthNext"
      >
        <a class="app-date-picker-family" @click="mode = 'year'">{{
          nowDate | moment('YYYY년')
        }}</a>
      </AppDatePickerHeader>

      <!-- Year Picker -->
      <AppDatePickerYear v-if="mode === 'year'">
        <AppDatePickerYearItem
          v-for="i in 200"
          :key="i"
          :value="i"
          :nowDate="nowDate"
          @click="onClickYearItem"
        />
      </AppDatePickerYear>

      <!-- Month Picker -->
      <AppDatePickerMonth v-if="mode === 'month'">
        <AppDatePickerMonthItem
          v-for="i in 12"
          :key="i"
          :value="i"
          :nowDate="nowDate"
          :currentDate="copiedValue"
          @click="onClickMonthItem(i)"
        />
      </AppDatePickerMonth>

      <!-- Date Picker -->
      <AppDatePickerDate v-if="mode === 'date'" :first-day="firstDay">
        <AppDatePickerDateItem
          v-for="i in lastDate"
          :key="i"
          :value="i"
          :currentDate="copiedValue"
          :nowDate="nowDate"
          @click="onClickDateItem(i)"
        />
      </AppDatePickerDate>
    </div>
  </transition>
</template>

<script>
import AppDatePickerHeader from './AppDatePickerHeader'
import AppDatePickerYear from './AppDatePickerYear'
import AppDatePickerYearItem from './AppDatePickerYearItem'
import AppDatePickerMonth from './AppDatePickerMonth'
import AppDatePickerMonthItem from './AppDatePickerMonthItem'
import AppDatePickerDate from './AppDatePickerDate'
import AppDatePickerDateItem from './AppDatePickerDateItem'

export default {
  components: {
    AppDatePickerHeader,
    AppDatePickerYear,
    AppDatePickerYearItem,
    AppDatePickerMonth,
    AppDatePickerMonthItem,
    AppDatePickerDate,
    AppDatePickerDateItem,
  },

  props: {
    value: {
      type: Date,
      default() {
        return new Date()
      },
    },
    enabled: Boolean,
    refButton: {},
    lastTime: [Boolean, String],
  },

  computed: {
    // 첫번째 날이 몇요일인지 알아낸다.
    firstDay() {
      if (!this.nowDate) return 0
      const date = new Date(
        this.nowDate.getFullYear(),
        this.nowDate.getMonth(),
        1,
      )
      return date.getDay()
    },

    // 이번달 마지막 일이 몇 일인지 알아낸다.
    lastDate() {
      if (!this.nowDate) return 31

      const date = new Date(
        this.nowDate.getFullYear(),
        this.nowDate.getMonth() + 1,
        0,
      )
      return date.getDate()
    },
  },

  data() {
    return {
      mode: 'date',
      nowDate: new Date(),
      copiedValue: new Date(),
    }
  },

  created() {
    // 부모 데이터와 바인딩되면 안되기 때문에 복제한다.
    // 시간 등의 데이터는 초기화시킨다.

    const date = new Date(
      this.value.getFullYear(),
      this.value.getMonth(),
      this.value.getDate(),
    )

    // this.$emit('input', date)
    this.copiedValue = date
    this.nowDate = date
  },

  methods: {
    onClickClose(e) {
      // console.log(e, this.refButton)
      const reference = this.refButton
      const isReference =
        $(e.target).closest(reference).length > 0 ||
        e.target.className.includes('app-date-picker-family')
      // const isReference =
      //   e.target.closest('.app-date-picker-family') ||
      //   e.target.className.includes('app-date-picker-family')

      console.log(isReference)

      // 클릭 대상이 select가 아닐 경우
      if (!isReference) {
        // console.log('이 이벤트가 발생하면 꺼져야 합니다.')
        this.$emit('update:enabled', false)
      }
    },

    // header handle
    datePrev() {
      // console.log('data prev')
      const date = new Date(
        this.nowDate.getFullYear(),
        this.nowDate.getMonth() - 1,
        this.nowDate.getDate(),
      )

      this.nowDate = date
    },
    dateNext() {
      // console.log('data next')
      const date = new Date(
        this.nowDate.getFullYear(),
        this.nowDate.getMonth() + 1,
        this.nowDate.getDate(),
      )

      this.nowDate = date
    },

    monthPrev() {
      // console.log('data prev')
      const date = new Date(
        this.nowDate.getFullYear() - 1,
        this.nowDate.getMonth(),
        this.nowDate.getDate(),
      )

      this.nowDate = date
    },
    monthNext() {
      // console.log('data next')
      const date = new Date(
        this.nowDate.getFullYear() + 1,
        this.nowDate.getMonth(),
        this.nowDate.getDate(),
      )

      this.nowDate = date
    },

    // item click event
    onClickYearItem(i) {
      // this.nowDate = this.value.setFullYear(i)
      this.nowDate = new Date(
        i,
        this.copiedValue.getMonth(),
        this.nowDate.getDate(),
      )

      this.mode = 'month'
    },
    onClickMonthItem(i) {
      // this.nowDate = this.value.setMonth(i)
      this.nowDate = new Date(
        this.nowDate.getFullYear(),
        i - 1,
        this.nowDate.getDate(),
      )

      this.mode = 'date'
    },
    onClickDateItem(i) {
      // 복제 값이 원본으로 전송됩니다.
      const date = this.lastTime
        ? new Date(
            this.nowDate.getFullYear(),
            this.nowDate.getMonth(),
            i,
            23,
            59,
            59,
          )
        : new Date(this.nowDate.getFullYear(), this.nowDate.getMonth(), i)

      this.$emit('input', date)
      this.$emit('update:enabled', false)
    },
  },
}
</script>

<style lang="scss" module scoped>
.appDatePicker {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  width: auto;
  min-width: inherit;
  background-color: white;
  border-radius: $border-radius-1;
  box-shadow: rgba(black, 0.16) 0 2px 20px;
  transform-origin: top center;

  &:global(.v-enter-active),
  &:global(.v-leave-active) {
    transition: 150ms ease;
  }

  &:global(.v-enter),
  &:global(.v-leave-active) {
    transform: scale(0.8, 0.7);
    opacity: 0;
  }
}
</style>
