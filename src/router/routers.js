/**
 * 路由列表
 */
export default [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home/index')
  }
]
