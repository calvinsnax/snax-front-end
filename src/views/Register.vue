<template>
  <AuthContainer title="회원가입">
    <div :class="$style.header">
      <h1 :class="$style.title">
        <strong>반가워요.</strong>
        <div>당신에 대해 알려주시겠어요?</div>
      </h1>

      <div :class="$style.registerMessage">
        <span>이미 계정이 있나요?</span>
        <router-link :to="{ name: 'login' }">로그인하기</router-link>
      </div>
    </div>

    <ValidationObserver v-slot="{ invalid }">
      <AppForm>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <AppFormInput label="이름" :error="errors[0]">
            <input
              type="text"
              name="name"
              v-model="name"
              placeholder="홍길동"
            />
          </AppFormInput>
        </ValidationProvider>

        <ValidationProvider rules="required|email" v-slot="{ errors }">
          <AppFormInput label="이메일" :error="errors[0]">
            <input
              type="email"
              name="email"
              v-model="email"
              placeholder="email@snax.com"
            />
          </AppFormInput>
        </ValidationProvider>

        <ValidationProvider rules="required|phone|phone2" v-slot="{ errors }">
          <AppFormInput label="휴대폰 번호" :error="errors[0]">
            <input
              type="text"
              name="phone"
              v-model="phone"
              placeholder="01012345678"
            />
          </AppFormInput>
        </ValidationProvider>

        <ValidationProvider
          name="비밀번호"
          rules="required|password|minmax:8,15"
          v-slot="{ errors }"
        >
          <AppFormInput label="비밀번호" :error="errors[0]" last-child>
            <div :class="$style.password">
              <input
                :type="passwordVisible ? 'text' : 'password'"
                name="password"
                v-model="password"
                placeholder="•••••••••"
              />

              <a
                :class="[
                  $style.viewPasswordIcon,
                  passwordVisible && $style.active,
                ]"
                @click="passwordVisible = !passwordVisible"
              >
                <i class="el-icon-view"></i>
              </a>
            </div>
          </AppFormInput>
        </ValidationProvider>
      </AppForm>

      <div :class="$style.policyCheckboxWrap">
        <div :class="$style.policyCheckbox">
          <AppCheckbox v-model="checkAll">전체 약관에 동의</AppCheckbox>
          <AppSpacer />
          <a>
            <i class="el-icon-arrow-right"></i>
          </a>
        </div>

        <hr />

        <div :class="$style.policyCheckbox">
          <AppCheckbox v-model="terms">(필수)이용약관에 동의</AppCheckbox>
          <AppSpacer />
          <a>
            <i class="el-icon-arrow-right"></i>
          </a>
        </div>

        <div :class="$style.policyCheckbox">
          <AppCheckbox v-model="policy"
            >(필수)개인정보 취급방침에 동의</AppCheckbox
          >
          <AppSpacer />
          <a>
            <i class="el-icon-arrow-right"></i>
          </a>
        </div>
        <div :class="$style.policyCheckbox">
          <AppCheckbox v-model="marketingEmailAgree"
            >(선택)마케팅 및 소식을 위한 이메일에 동의</AppCheckbox
          >
          <AppSpacer />
          <a>
            <i class="el-icon-arrow-right"></i>
          </a>
        </div>
      </div>

      <AppFormSubmit :disabled="!formActive || invalid" @click="submit"
        >계정 생성</AppFormSubmit
      >
    </ValidationObserver>
  </AuthContainer>
</template>

<script>
import AuthContainer from '@/components/auth/AuthContainer'
import { mapActions } from 'vuex'

export default {
  components: {
    AuthContainer,
  },

  data() {
    return {
      passwordVisible: false,

      name: '',
      email: '',
      phone: '',
      password: '',

      terms: false,
      policy: false,
      marketingEmailAgree: false,
    }
  },

  computed: {
    formActive() {
      if (
        !this.name ||
        !this.email ||
        !this.phone ||
        !this.password ||
        !this.terms ||
        !this.policy
      )
        return false
      return true
    },

    checkAll: {
      get() {
        if (!this.terms || !this.policy || !this.marketingEmailAgree)
          return false
        return true
      },
      set(val) {
        this.terms = val
        this.policy = val
        this.marketingEmailAgree = val
      },
    },
  },

  methods: {
    ...mapActions('auth', ['register']),

    submit() {
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        phone: this.phone,
      }
      this.register(payload)
    },
  },
}
</script>

<style lang="scss" module scoped>
.header {
  margin-bottom: 2rem;

  .title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  .registerMessage {
    color: $color-gray-600;
    span {
      margin-right: 0.25rem;
    }
    a {
      color: $color-primary;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.policyCheckboxWrap {
  margin-top: -1rem;
  margin-bottom: 2rem;
}
.policyCheckbox {
  display: flex;
  align-items: center;

  a {
    cursor: pointer;
    display: inline-block;
    padding: 0.25rem;
    padding-right: 0;

    i {
      margin-left: 1rem;
      color: black;
      font-size: 1rem;
    }
  }
}

.password {
  display: flex;
  align-items: center;

  input {
    flex: 1;
  }
  .viewPasswordIcon {
    flex: 0 0 auto;
    display: inline-block;
    padding-right: 1rem;
    margin-top: 1rem;

    color: $color-gray-500;
    font-size: 1rem;

    &.active {
      color: black;
    }
  }
}
</style>
