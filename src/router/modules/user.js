import authRequired from '@/router/middleware/authRequired'

export default [
  {
    path: '/profile',
    name: 'profile',
    beforeEnter: authRequired,
    component: () => import('@/views/Profile.vue'),
  },
]
