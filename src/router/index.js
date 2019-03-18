import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)

const newRouter = new Router({
  mode: 'history',
  routes
})

// const LOGIN_PAGE_NAME = 'Login'

newRouter.beforeEach((to, from, next) => {
  console.log(to.meta)
  next()
})

export default newRouter
