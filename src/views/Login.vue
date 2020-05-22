<template>
  <AuthContainer title="로그인">
    <div :class="$style.header">
      <h1 :class="$style.title">
        <strong>오랜만이에요.</strong>
        <div>다시 와줘서 고마워요.</div>
      </h1>

      <div :class="$style.registerMessage">
        <span>신규 사용자인가요?</span>
        <router-link :to="{ name: 'register' }">계정 만들기</router-link>
      </div>
    </div>

    <ValidationObserver v-slot="{ invalid }">
      <AppForm>
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

        <ValidationProvider rules="required" v-slot="{ errors }">
          <AppFormInput label="비밀번호" :error="errors[0]" last-child>
            <input
              type="password"
              name="password"
              v-model="password"
              placeholder="•••••••••"
              @keypress.enter.exact="submit"
            />
          </AppFormInput>
        </ValidationProvider>
      </AppForm>

      <AppFormSubmit :disabled="!formActive || invalid" @click="submit"
        >로그인</AppFormSubmit
      >
    </ValidationObserver>

    <a href="#" :class="$style.findPassword">비밀번호를 잃어버리셨나요?</a>
  </AuthContainer>
</template>

<script>
import { mapActions } from 'vuex'
import AuthContainer from '@/components/auth/AuthContainer'

export default {
  components: {
    AuthContainer,
  },

  data() {
    return {
      email: '',
      password: '',
    }
  },

  computed: {
    formActive() {
      if (!this.email || !this.password) return false
      return true
    },
  },

  methods: {
    ...mapActions('auth', ['login']),
    async submit() {
      if (!this.formActive || this.invalid) return
      await this.login({ email: this.email, password: this.password })
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

.findPassword {
  color: $color-gray-600;
  font-size: 0.875rem;
  &:hover {
    text-decoration: underline;
  }
}
</style>
