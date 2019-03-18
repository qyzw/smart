import Vue from 'vue'
import Vuex from 'vuex'
import util from '@/util/util'
import tools from '@/util/tools'
import axios from '@/axios/axios'

Vue.use(Vuex)

const state = {
  user_id: tools.GetCookie('uid'),
  api_url: `${util.api_ip}${util.api_locale}`,
  login_dist: []
}

const getters = {}

const mutations = {
  // 更换请求模式(本地、各地区)
  changeRequestUrl (state, url = `http://${state.api_url}`) {
    axios.defaults.baseURL = url
  },
  // 右侧用户可登录地区列表
  showLoginDist (state, dist) {
    let currentid = tools.GetItem('area_id') ? tools.GetItem('area_id') : '1'
    let oindex = 0
    for (let i in dist) {
      oindex = dist[i].ogg_area_id === currentid ? i : 0
    }
    dist[oindex].selected = true
    state.login_dist = dist
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store
