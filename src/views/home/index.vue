<template>
  <div>
    <menu-nav class="fixed-nav"></menu-nav>
    <router-view/>
  </div>
</template>

<script>
import MenuNav from '@/components/menu-nav'

export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    MenuNav
  }
}
</script>

<style lang="less">
.fixed-nav {
  width: 100%;
  position: fixed;
  z-index: 1000;
}
</style>
