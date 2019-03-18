<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from '@/views/home/index'

export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}
html, body {
  .size;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  .size;
  background: #fff!important;
}
</style>
