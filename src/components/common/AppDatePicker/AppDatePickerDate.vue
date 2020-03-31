<template>
  <div :class="$style.calendar">
    <div :class="$style.calendarHead">
      <div>
        <span>일</span>
      </div>
      <div>
        <span>월</span>
      </div>
      <div>
        <span>화</span>
      </div>
      <div>
        <span>수</span>
      </div>
      <div>
        <span>목</span>
      </div>
      <div>
        <span>금</span>
      </div>
      <div>
        <span>토</span>
      </div>
    </div>

    <div :class="$style.calendarBody">
      <div :style="firstDayStyle"></div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstDay: Number,
  },
  computed: {
    firstDayStyle() {
      return {
        flex: `0 0 ${14.2857 * this.firstDay}%`,
        // width: 38 * this.firstDay + 'px',
      }
    },
  },
}
</script>

<style lang="scss" module scoped>
.calendar {
  width: 270px;
  padding: 1rem;

  .calendarHead,
  .calendarBody {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      // width: 38px;
      // height: 38px;
      padding: 0.2rem 0;
    }
  }

  .calendarHead {
    display: flex;
    div {
      flex: 1;
      font-size: 13px;
      font-weight: $font-weight-bold;
      text-align: center;
      span {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        text-align: center;
      }
    }
  }

  .calendarBody {
    display: flex;
    flex-wrap: wrap;
    div {
      flex: 0 0 14.2857%;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>
