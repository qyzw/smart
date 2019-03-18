<template>
  <div class="login-bg">
    <Row>
      <Col span="24">
        <div class="login-title"></div>
      </Col>
    </Row>
    <Row type="flex" justify="space-around">
      <Col span="18">
        <div class="login-form" @keydown.enter="loginSubmit">
          <Form ref="loginform" :model="login_form" :rules="login_rule" class="login-input">
            <FormItem prop="username">
              <Input type="text" v-model="login_form.username" placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="login_form.password" placeholder="请输入密码"></Input>
            </FormItem>
            <FormItem prop="code" class="code-input">
              <Input type="text" v-model="login_form.code" placeholder="请输入验证码"></Input>
              <img :src="code_img" class="code-img" @click="changeCode" />
            </FormItem>
          </Form>
          <Button type="primary" :loading="loginload" long class="login-btn" @click="loginSubmit">
            <span v-if="!loginload" class="login-txt">登录</span>
            <span v-else>正在登录..</span>
          </Button>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import tools from '@/util/tools'

export default {
  name: 'Login',
  data () {
    return {
      login_form: {
        username: 'root',
        password: 'Nfdw1234',
        code: '',
        token: this.timestamp
      },
      login_rule: {
        username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
        code: [{ required: true, message: '验证码不能为空', trigger: 'blur' }]
      },
      loginload: false
    }
  },
  computed: {
    code_img () {
      return `${this.$axios.defaults.baseURL}/code?token=${this.login_form.token}`
    }
  },
  mounted () {
    this.getTimeStamp()
  },
  methods: {
    // 获取随机数
    getTimeStamp () {
      let stamp = new Date().getTime() + Math.random().toString(36).substr(2)
      this.login_form.token = stamp
    },
    // 改变验证码
    changeCode (e) {
      e.stopPropagation()
      this.getTimeStamp()
    },
    // 验证登录
    loginSubmit () {
      this.$refs.loginform.validate(valid => {
        if (valid) {
          this.loginload = true
          this.login()
        } else {
          this.$Message.info('请完成填写后登录')
        }
      })
    },
    // 登录
    async login () {
      let user = this.login_form.username.trim()
      let res = await this.$ajax.user.USERLOGIN({
        account: user,
        password: this.login_form.password,
        code: this.login_form.code,
        token: this.login_form.token
      })
      this.loginload = false
      if (res) {
        if (res.status) {
          tools.SetCookie('uid', res.user_id)
          tools.SetCookie('user', res.user_name)
          tools.SetCookie('token', res.token)
          tools.SetItem('access_all', res.menu_info)
          this.$Message.success(res.msg)
          this.$router.replace('/')
          this.loginSubmit = tools.SetEmptyFunc()
        } else {
          this.$Message.error(res.msg)
        }
        this.getTimeStamp()
      }
    }
  }
}
</script>

<style lang="less">
.login-bg {
  width: 100%;
  height: 100vh;
  background: url('./../../assets/bg/bg_login.jpg') no-repeat;
  background-size: 100% 100%;
  .login-title {
    width: 38%;
    height: 13vh;
    margin: 22vh auto 0;
    background: url('./../../assets/bg/login_title.png') no-repeat 50% 50%;
    background-size: 80% 80%;
  }
  .login-form {
    width: 39%;
    border: 1px solid #8ffffe;
    border-radius: 4px;
    text-align: center;
    margin: 10px auto 0;
    padding: 40px 60px;
    .login-input {
      .ivu-input {
        background: #3fb2ff;
        border-color: #59ffff;
        font-size: 14px;
        color: #fff;
      }
      .ivu-form-item-error {
        .ivu-input {
          border-color: #da0000;
        }
        .ivu-form-item-error-tip {
          color: #da0000;
        }
      }
    }
    .code-input {
      position: relative;
      .code-img {
        width: 100px;
        border-radius: 4px;
        cursor: pointer;
        position: absolute;
        top: 1px;
        right: 0;
      }
    }
    .login-btn {
      color: #fff;
      background: #0e42ad;
      font-size: 14px;
      font-weight: 500;
      &:hover {
        background: #275bc5;
      }
      .login-txt {
        letter-spacing: 10px;
        text-align: center;
      }
    }
  }
}
</style>
