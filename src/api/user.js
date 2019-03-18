import ajax from '@/axios/libs'
import store from '@/store/'

// 登录
const USERLOGIN = data => {
  return ajax('/login', 'post', data)
}

// 获取可登陆地区
const GETREQUIREDIST = data => {
  // 调用本地接口
  store.commit('changeRequestUrl')
  return ajax('/ogg_area/login', 'post', data)
}

export default {
  USERLOGIN,
  GETREQUIREDIST
}
