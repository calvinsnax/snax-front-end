<template>
  <div :class="$style.headerWrap">
    <div :class="$style.headerFixed">
      <div
        :class="[
          $style.header,
          flat && $style.flat,
          sm && $style.sm,
          xs && $style.xs,
        ]"
      >
        <div :class="$style.headerContainer">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flat: [Boolean, String],
    sm: [Boolean, String],
    xs: [Boolean, String],
  },

  data() {
    return { scrolled: false }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  handleScroll() {
    const scrollTop = window.scrollY

    if (scrollTop > 1) {
      this.scrolled = true
    } else {
      this.scrolled = false
    }
  },
}
</script>

<style lang="scss" module scoped>
$app-header-height: 3.2rem;

.headerWrap {
  height: $app-header-height;
}

.headerFixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header {
  width: 100%;
  height: $app-header-height;
  margin: 0 auto;
  background-color: white;
  /* box-shadow: rgba($oc-gray-6, 0.1) 0 1px; */
}

.headerContainer {
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 1.25rem;
  padding-right: 0.5rem;
  margin: 0 auto;
}

.header {
  &.flat {
    box-shadow: none;
  }
  &.sm {
    .headerContainer {
      max-width: $medium-w;
    }
  }
  &.xs {
    .headerContainer {
      max-width: $small-w;
    }
  }
}
</style>
