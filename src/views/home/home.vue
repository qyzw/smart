<template>
  <div></div>
</template>

<script>
import util from '@/util/util'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['user_id', 'login_dist'])
  },
  mounted () {
    this.cycleDistOgg()
  },
  methods: {
    ...mapMutations(['changeRequestUrl', 'showLoginDist']),
    // 获取可登录地区
    async getLoginDist () {
      let res = await this.$ajax.user.GETREQUIREDIST({ user_id: this.user_id })
      if (res && res.length) {
        res.forEach(value => {
          value.title = value.area_name
          value.api_path = `http://${util.api_ip}${value.area_path.slice(0, -1)}`
        })
      }
      return res
    },
    // 获取用户OGG服务器列表ID
    async getUserOggId () {
      let res = await this.$ajax.data.GET_OGGSERVERID({ user_id: this.user_id })
      if (res) return res
    },
    // 获取用户OGG服务器列表Info
    async getUserOggInfo (data) {
      let res = await this.$ajax.data.GET_OGGSERVERINFO({
        user_id: this.user_id,
        ip_input: '',
        page: 1,
        limit: 10,
        ogg_id: data
      })
      if (res) return res
    },
    // 获取用户域级列表
    async getUserRegoin () {
      let res = await this.$ajax.data.GET_REGOINSERVER()
      if (res) return res
    },
    // 循环获取该地区的OGG服务器
    async cycleDistOgg () {
      let distlist = await this.getLoginDist()
      let useroggid = await this.getUserOggId()
      // let userregoin = await this.getUserRegoin()
      let res = null
      for (let i in distlist) {
        this.changeRequestUrl(distlist[i].api_path)
        res = await this.getUserOggInfo(useroggid)
        distlist[i].sv_list = res.data
      }
      this.showLoginDist(distlist)
      console.log(this.login_dist)
    }
  }
}
</script>

<style>
</style>
