import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

extend('required', {
  ...required,
  message: '항목이 비어 있습니다.',
})

extend('email', {
  ...email,
  message: '정상적인 이메일 형식이 아닙니다.',
})

extend('phone', {
  validate(value) {
    const phoneRegex = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/
    if (!value.match(phoneRegex)) return false
    return true
  },
  message: '정상적인 휴대폰 번호 형식이 아닙니다.',
})

extend('phone2', {
  validate(value) {
    if (value.search('-') !== -1) return false
    return true
  },
  message: '-를 제외하고 숫자만 입력해야 합니다.',
})

extend('password', {
  validate(value) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,15}$/
    if (!value.match(regex)) return false
    return true
  },
  message: '숫자와 영문자 조합으로 8~15자리를 사용해야 합니다.',
})

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message: '{_field_}는 {min}~{max}자리를 사용해야 합니다.',
})
