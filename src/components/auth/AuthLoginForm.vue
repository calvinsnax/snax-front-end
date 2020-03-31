/* eslint-disable no-undef */ /* eslint-disable no-undef */ /* eslint-disable
no-undef */
<template>
  <div>
    <a :class="$style.closeButton" @click="$emit('close')">
      <i class="el-icon-close"></i>
    </a>

    <div :class="$style.header">
      <div :class="$style.title">로그인</div>
      <div :class="$style.registerMessage">
        <span>신규 사용자인가요? </span>
        <a href="#">계정 만들기</a>
      </div>
    </div>

    <div :class="$style.body">
      <div :class="$style.formContainer">
        <label :class="$style.labeledInput">
          <div :class="$style.label">이메일</div>
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder="email@snax.com"
          />
        </label>

        <label :class="$style.labeledInput">
          <div :class="$style.label">비밀번호</div>
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="•••••••••"
          />
        </label>
      </div>

      <div :class="$style.formButtonWrap">
        <button :class="$style.formButton">로그인</button>
      </div>

      <a href="#" :class="$style.findPassword">비밀번호를 잃어버리셨나요?</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
}
</script>

<style lang="scss" module scoped>
.closeButton {
  cursor: pointer;
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.25rem;
  height: 2.25rem;

  color: black;
  background-color: $color-gray-200;
  border-radius: 100%;
  transition: 0.3s;

  &:hover {
    background-color: $color-gray-300;
  }
  &:active {
    background-color: $color-gray-400;
  }
}

.header {
  margin-bottom: 2rem;

  .title {
    font-size: 1.5rem;
    font-weight: $font-weight-bold;
  }
  .registerMessage {
    color: $color-gray-600;
    a {
      color: $color-primary;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.socialButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: $padding-0 $padding-4;
  margin-bottom: $margin-2;

  font-size: 0.875rem;
  background-color: white;
  border: 1px solid $oc-gray-1;
  border-radius: 45px;
  outline: none;
  i {
    color: $oc-gray-6;
    font-size: 18px;
    margin-right: $margin-2;
  }

  &.kakao {
    color: #713d3d;
    background-color: #f7e542;
    border-color: #f7e542;
    i {
      color: #713d3d;
    }
  }
}

.policy {
  width: 100%;
  padding: $padding-3;
  text-align: center;
  word-break: keep-all;
  .text {
    color: $oc-gray-6;
    font-size: $font-size-0;
  }
  .links {
    color: $color-primary;
    font-size: $font-size-1;
    a {
      text-decoration: underline;
      margin-right: $margin-0;
    }
    span {
      margin-right: $margin-0;
    }
  }
}

.findPassword {
  color: $color-gray-600;
  font-size: 0.875rem;
}

// FORM
// --------------------------------------
.formContainer {
  margin-bottom: 2rem;

  border: 1px solid $color-gray-400;
  // border-bottom: none;
  // border-radius: $border-radius-2 $border-radius-2 0 0;
  border-radius: $border-radius-2;
}

.labeledInput {
  display: block;
  border: 1px solid transparent;
  border-bottom: 1px solid $color-gray-300;

  &:last-child {
    border-bottom: none;
  }

  &:focus-within {
    border: 1px solid black;
    border-radius: $border-radius-2;
    overflow: hidden;
  }

  .label {
    padding-top: 0.75rem;
    padding-left: 1rem;

    color: $color-gray-600;
    font-size: 0.75rem;
  }

  input {
    width: 100%;
    padding-left: 1rem;
    padding-bottom: 0.75rem;

    color: black;
    font-size: 1rem;

    outline: none;

    &::placeholder {
      color: $color-gray-500;
    }
  }
}

.formButtonWrap {
  display: flex;
  justify-content: center;
}
.formButton {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  margin-bottom: 2rem;

  color: white;
  font-size: 1rem;
  font-weight: $font-weight-bold;

  background-color: black;
  border-radius: 100%;
  outline: none;
}
</style>
