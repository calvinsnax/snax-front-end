export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      navHidden: true,
    },
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      navHidden: true,
    },
    component: () => import('@/views/Register.vue'),
  },
]
