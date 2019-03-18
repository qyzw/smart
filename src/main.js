import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import instance from './axios/axios'
import ajax from './api/'
import './plugins/iview.js'

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

Vue.prototype.$axios = instance
Vue.prototype.$ajax = ajax

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
