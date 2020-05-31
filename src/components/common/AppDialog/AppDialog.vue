<template>
  <transition>
    <div
      v-if="value"
      :class="$style.appDialogWrap"
      @click.self.stop="$emit('input', false)"
    >
      <div
        :class="$style.appDialogContainer"
        @click.self.stop="$emit('input', false)"
      >
        <div :class="$style.appDialog">
          <AppDialogTitle>
            <div>{{ title }}</div>
            <AppSpacer />
            <AppDialogClose @click="$emit('input', false)" />
          </AppDialogTitle>

          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import AppDialogTitle from './AppDialogTitle'
import AppDialogClose from './AppDialogClose'

export default {
  components: {
    AppDialogTitle,
    AppDialogClose,
  },

  props: {
    value: {
      type: Boolean,
      default: true,
    },
    title: String,
  },
}
</script>

<style lang="scss" module scoped>
.appDialogWrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 600;
  width: 100%;
  height: 100%;

  background-color: rgba(black, 0.5);

  &:global(.v-enter-active),
  &:global(.v-leave-active) {
    // transition: 250ms;
    .appDialog {
      // transition: 250ms ease;
    }
  }
  &:global(.v-enter),
  &:global(.v-leave-active) {
    opacity: 0;

    .appDialog {
      // transform: scale(0.5);
    }
  }
}

.appDialogContainer {
  display: flex;
  max-width: 572px;
  height: 100%;
  padding: 1rem;
  margin: 0 auto;
  align-items: center;

  // @media (max-width: $medium-w) {
  //   max-width: 100%;
  // }
}

.appDialog {
  width: 100%;
  max-height: 100%;
  background-color: white;
  border-radius: 6px;

  // @media (max-width: $medium-w) {
  //   min-height: 100%;
  //   border-radius: 0;
  //   overflow: auto;

  //   @include custom-scroll;
  // }
}
</style>
