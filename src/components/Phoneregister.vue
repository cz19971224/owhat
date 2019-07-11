<template>
  <div class="phoneregister">
    <section class="container">
      <nav id="nav">
        <section id="navbar">
          <a class="fa" v-on:click="goback">
            <i class="el-icon-arrow-left"></i>
          </a>
          手机注册
        </section>
      </nav>
      <section class="loginform">
        <section class="loginform_mid">
          <section class="loginNei">
            <div class="each_ipt">
              <input id="mobile" class="pub_input" type="text" name placeholder="请输入手机号" />
            </div>
            <div class="each_ipt">
              <input type="password" name id="password" class="pub_input" placeholder="请输入6-16位密码" />
            </div>
          </section>
          <section class="login_btn">
            <a class="btn">注册</a>
          </section>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Phoneregister",
  components: {},
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>

<style lang="" scoped>
.container {
  position: relative;
  box-sizing: border-box;
  padding: 0 0 50px 0;
  display: block;
  margin: 0;
}
#nav {
  width: 100%;
  height: 44px;
  display: block;
  margin: 0;
  padding: 0;
}
#navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
  font-size: 16px;
  line-height: 45px;
  color: #323232;
  text-align: center;
  z-index: 1001;
  border-bottom: 1px #e6e6e6 solid;
  background: #fff;
  font-weight: 500;
}
.fa {
  width: 44px;
  height: 44px;
  position: absolute;
  left: 0;
  top: 0;
  outline: none;
  text-decoration: none;
  color: #858585;
  margin: 0;
  padding: 0;
}
.loginform {
  margin: 12px 20px 0;
  display: block;
  padding: 0;
}
.loginform_mid {
  position: relative;
  z-index: 100;
  display: block;
  margin: 0;
  padding: 0;
}
.loginNei {
  background: #f8f8f8;
  display: block;
  margin: 0;
  padding: 0;
}
.each_ipt {
  margin: 0 12px;
  height: 48px;
  position: relative;
  border-top: 1px #e6e6e6 solid;
  display: -webkit-box;
  padding: 0;
}
.pub_input {
  padding: 14px 0;
  -webkit-box-flex: 1;
  display: block;
  width: 100%;
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  color: #2d2d31;
  vertical-align: middle;
  border: none;
  background: none;
  outline: none;
  resize: none;
  -moz-appearance: none;
  margin: 0;
}
.login_btn {
  clear: both;
  padding: 35px 0 0 0;
  text-align: center;
  display: block;
  margin: 0;
}
.btn {
  outline: none;
  text-decoration: none;
  background: #ffc1d2;
  color: #fff;
  width: 239px;
  height: 44px;
  border-radius: 20px;
  font-size: 16px;
  line-height: 44px;
  text-align: center;
  display: inline-block;
  margin: 0;
  padding: 0;
}
</style>