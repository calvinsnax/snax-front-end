import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

let routeList = ['auth', 'store', 'product']
let routes = []

routeList.forEach(val => {
  const path = require(`./modules/${val}.js`)
  routes = routes.concat(path.default)
})

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    ...routes,
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.navHidden))
    store.commit('nav/setNavVisible', false)
  else store.commit('nav/setNavVisible', true)

  next()
})

export default router
