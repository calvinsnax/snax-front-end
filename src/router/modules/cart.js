import authRequired from '@/router/middleware/authRequired'

export default {
  path: '/cart',
  name: 'cart',
  beforeEnter: authRequired,
  component: () => import('@/views/Cart.vue'),
}
