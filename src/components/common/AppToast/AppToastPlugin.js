import plugin from './AppToastInstance'

export default {
  install(Vue) {
    // 인스턴스 메소드 추가
    Vue.prototype.$toast = plugin
  },
}
