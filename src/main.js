import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import '@mdi/font/css/materialdesignicons.css'
import './plugins/ui'
import './plugins/utils'
import './plugins/element.js'
import './plugins/vee-validate.js'
import './assets/styles/main.scss'

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
