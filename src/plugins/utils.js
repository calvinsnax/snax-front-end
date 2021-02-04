// IMPORT
// ──────────────────────────────────────────────────────

// Base
import Vue from 'vue'
import 'expose-loader?$!expose-loader?jQuery!jquery'

import axios from '@/plugins/axios'
import moment from 'moment'
import 'moment/locale/ko'
import VueMoment from 'vue-moment'
import VueProgressBar from 'vue-progressbar'

// Directive
import VueClickOutside from 'vue-click-outside'
import Vue2Filters from 'vue2-filters'
import { VueMasonryPlugin } from 'vue-masonry'

// USE
// ──────────────────────────────────────────────────────

// Plugins
Vue.use(VueMoment, {
  moment,
})
Vue.use(VueProgressBar, {
  color: '#2957ff',
  failedColor: '#c8161d',
  autoRevert: true,
  inverse: false,
  thickness: '4px',
})
Vue.use(Vue2Filters)
Vue.use(VueMasonryPlugin)

// Prototypes
Vue.prototype.$http = axios

// Directive
Vue.directive('click-outside', VueClickOutside)
