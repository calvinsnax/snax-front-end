<template>
  <div :class="$style.page">
    <div :class="$style.header">
      <h1 :class="$style.title">
        <strong>{{ user.name }}</strong>
        <span>님의 정보</span>
      </h1>
      <div :class="$style.email">{{ user.email }}</div>
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

        <ValidationProvider rules="required|phone|phone2" v-slot="{ errors }">
          <AppFormInput label="휴대폰 번호" :error="errors[0]" last-child>
            <input
              type="text"
              name="phone"
              v-model="phone"
              placeholder="01012345678"
            />
          </AppFormInput>
        </ValidationProvider>
      </AppForm>

      <AppFormSubmit :disabled="!formActive || invalid" @click="submit"
        >저장</AppFormSubmit
      >
    </ValidationObserver>

    <hr />

    <div class="tw-pt-3 tw-text-right">
      <AppButton color="gray" @click="onClickLogout">로그아웃</AppButton>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      name: '',
      phone: '',
    }
  },

  computed: {
    ...mapState('auth', ['user']),

    formActive() {
      if (!this.name || !this.phone) return false
      return true
    },
  },

  created() {
    this.name = this.user.name
    this.phone = this.user.phone
  },

  methods: {
    ...mapActions('auth', ['logout']),
    ...mapActions('user', ['updateUser']),

    submit() {
      console.log('submit: ', this.name, this.phone)
      this.updateUser({ name: this.name, phone: this.phone })
    },

    async onClickLogout() {
      await this.logout()
      this.$router.push({ name: 'home' })
    },
  },
}
</script>

<style lang="scss" module scoped>
.page {
  max-width: 26rem;
  padding: 2rem 1rem;
  margin: 0 auto;
}

.header {
  margin-bottom: 2rem;

  .title {
    font-size: 1.5rem;
  }
  .email {
    color: $color-gray-600;
    font-size: 0.875rem;
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
