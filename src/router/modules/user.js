import authRequired from '@/router/middleware/authRequired'

export default [
  {
    path: '/profile',
    beforeEnter: authRequired,
    component: () => import('@/views/Profile.vue'),
    children: [
      {
        path: '',
        name: 'profile',
        component: () => import('@/views/profile/ProfileMyInfo.vue'),
      },
      {
        path: 'orders',
        name: 'profile-orders',
        component: () => import('@/views/profile/ProfileOrders.vue'),
      },
    ],
  },
]
