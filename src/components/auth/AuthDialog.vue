<template>
  <div :class="$style.wrapper" @click.self.stop="$emit('input', false)">
    <div :class="$style.container" @click.self.stop="$emit('input', false)">
      <div :class="$style.dialog">
        <div :class="$style.side">
          <div :class="$style.logo">
            <AppIcon name="simbol-solo" />
          </div>
          <div :class="$style.title">필요한 걸 찾았나요?</div>
          <div :class="$style.desc">로그인하면 더 많은 걸 할 수 있어요.</div>
        </div>

        <div :class="$style.body">
          <AuthLoginForm @close="$emit('input', false)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthLoginForm from './AuthLoginForm'

export default {
  props: {
    value: Boolean,
  },

  components: {
    AuthLoginForm,
  },
}
</script>

<style lang="scss" module scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 901;
  width: 100%;
  height: 100%;
  background-color: rgba(black, 0.5);
  backdrop-filter: saturate(180%) blur(2px);

  .container {
    display: flex;
    align-items: center;
    max-width: 52rem;
    margin: 0 auto;
    height: 100%;
  }

  .dialog {
    position: relative;
    display: flex;
    width: 100%;
    background-color: white;
    border-radius: $border-radius-2;
    overflow: hidden;
  }
}

.side {
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem;
  color: white;
  word-break: keep-all;
  background-color: black;

  .logo {
    padding: 1rem;
    margin-bottom: 2rem;

    border-radius: 100%;
    border: 1px solid rgba(white, 0.1);

    svg {
      fill: white;
      height: 1.75rem;
    }
  }

  .title {
    font-size: 2rem;
    font-weight: $font-weight-bold;
    margin-bottom: 1rem;
  }
  .desc {
    font-size: 0.875rem;
  }
}

.body {
  flex: 1;
  padding: 3rem;
}
</style>
