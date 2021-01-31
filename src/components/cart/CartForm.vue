<template>
  <div>
    <AppForm>
      <AppFormInput label="입금자명" last-child>
        <input type="name" name="name" v-model="formData.name" placeholder="" />
      </AppFormInput>
    </AppForm>

    <div :class="$style.cartFormText">
      입금하신 분의 예금주명이 입금자명과 동일해야 합니다.
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    value: {},
  },

  computed: {
    ...mapState('auth', ['user']),

    formData: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
  },

  created() {
    this.formData.name = this.user.name
  },
}
</script>

<style lang="scss" module scoped>
.cartFormText {
  margin-top: -1rem;
  margin-bottom: 2rem;
  color: $color-gray-600;
  font-size: 0.875rem;
}
</style>
