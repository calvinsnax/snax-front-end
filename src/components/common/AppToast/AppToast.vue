<template>
  <transition appear @after-leave="afterLeave">
    <div
      v-if="state"
      :class="[$style.toast, $style[type]]"
      :style="offsetMargin"
    >
      <span :class="$style.message">{{ message }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'UiToast',

  computed: {
    offsetMargin() {
      if (!this.offset) {
        return {
          bottom: '3rem',
        }
      }

      return {
        bottom: this.offset + 'px',
      }
    },
  },

  data() {
    return {
      state: false,

      message: '',
      timeout: 1500,
      type: '',
      offset: null,
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.setTimeout(() => {
        this.state = false
      }, this.timeout)
    })
  },

  methods: {
    afterLeave() {
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    },
  },
}
</script>

<style lang="scss" module scoped>
.toast {
  position: fixed;
  left: 50%;
  bottom: 3rem;
  z-index: 10000;
  padding: 1rem 1.25rem;

  color: white;
  font-size: 0.875rem;
  font-weight: $font-weight-medium;
  text-align: center;
  border-radius: 5rem;

  // background-color: $color-gray-800;
  background-color: $color-primary;
  box-shadow: rgba(black, 0.2) 0 4px 20px;

  transform: translateX(-50%);

  &:global(.v-enter-active),
  &:global(.v-leave-active) {
    transition: opacity 0.3s, transform 0.3s ease;
  }
  &:global(.v-enter),
  &:global(.v-leave-active) {
    opacity: 0;
    transform: translate(-50%, 0.5rem);
  }

  .message {
    position: relative;
    z-index: 1;
  }
}

.toast {
  &.success {
    background-color: $color-success;
  }
  &.info {
    background-color: $color-info;
  }
  &.warn {
    background-color: $color-warning;
  }
  &.danger {
    background-color: $color-danger;
  }
}
</style>
