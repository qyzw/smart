<template>
  <div>
    <Row type="flex" justify="space-between" class="header-title">
      <Col span="22">
        <div class="header-menu">
          <Menu mode="horizontal" theme="primary"></Menu>
        </div>
      </Col>
      <Col span="2">
        <div class="header-alter"></div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'MenuNav'
}
</script>

<style lang="less">
.header-title {
  height: 60px;
  // background: url(../assets/bg/bg_header.png) no-repeat #0082d6;
  background-position: 2% 50%;
  font-size: 14px;
  color: #fff;
  position: relative;
}
</style>
