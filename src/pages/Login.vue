<template>
  <div class="login">
    <section class="container">
      <nav id="nav">
        <section id="navbar">
          <a class="fa" v-on:click="goback">
            <i class="el-icon-arrow-left"></i>
          </a>
          登录
        </section>
      </nav>
      <section class="loginform">
        <header class="loginform_top">
          <span id="logo">
            <img class="image" src="https://m.owhat.cn/src/images/owhat_logo.png" alt />
          </span>
        </header>
        <section class="loginform_mid">
          <section class="loginNei">
            <div class="each_ipt">
              <span class="login_name">
                <img class="image" src="https://m.owhat.cn/src/images/login_name.png" alt />
              </span>
              <input
                id="mobile"
                v-model="value1"
                class="pub_input"
                type="text"
                placeholder="请输入账号"
              />
            </div>
            <div class="each_ipt">
              <span class="login_name">
                <img class="image" src="https://m.owhat.cn/src/images/login_password.png" alt />
              </span>
              <input
                id="password"
                v-model="value2"
                class="pub_input"
                type="password"
                placeholder="请输入密码"
              />
            </div>
          </section>
          <section class="login_btn">
            <a class="btn" :class="value1!=''&&value2!==''?'red':''" v-on:click="isLogin">
              登录
              <img src="https://m.owhat.cn/src/images/login_arrow.png" alt />
            </a>
            <p>
              <router-link id="register" to="/register">立即注册</router-link>
              <a class="forget">忘记密码</a>
            </p>
          </section>
        </section>
      </section>
      <!-- <footer id="loginform_bot">
        <div class="line"></div>
        <h2 class="foot_tit">第三方账号登录</h2>
        <div class="third_btn">
          <a>
            <img src="https://m.owhat.cn/src/images/login_wechat.png" alt />
          </a>
          <a>
            <img src="https://m.owhat.cn/src/images/login_weibo.png" alt />
          </a>
          <a>
            <img src="https://m.owhat.cn/src/images/login_qq.png" alt />
          </a>
        </div>
      </footer>-->
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      value1: "",
      value2: ""
    };
  },
  methods: {
    goback() {
      this.$router.go(-1); //返回上一层
    },
    isLogin() {
      const username = document.getElementById("mobile").value;
      const password = document.getElementById("password").value;
      axios
        .get(`/login?username=${username}&password=${password}`)
        .then(res => {
          console.log(res);
          if (res.data.result == 1) {
            this.$router.push({ path: "/my" });
          } else {
            this.$message({
              message: res.data.message,
              type: "warning"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="" scoped>
.container {
  display: block;
  margin: 0;
  padding: 0;
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
  margin: 45px 49px 0;
  display: block;
  padding: 0;
}
.loginform_top {
  display: block;
  margin: 0;
  padding: 0;
}
#logo {
  width: 161px;
  margin: 0 auto;
  display: block;
}
.loginform_mid {
  margin: 45px 0 0 0;
  position: relative;
  z-index: 100;
  display: block;
  padding: 0;
}
.loginNei {
  border-radius: inherit;
  background: #fff;
  display: block;
  margin: 0;
  padding: 0;
}
.each_ipt {
  border: none;
  margin: 20px 0 0 0;
  width: 100%;
  height: 50px;
  background-color: #f1f1f2;
  border-radius: 20px;
  display: -webkit-box;
  padding: 0;
}
.login_name {
  display: block;
  width: 55px;
  height: 55px;
  margin: -2.5px 0 0 -2.5px;
}
.image {
  width: 100%;
  vertical-align: top;
  display: block;
}
.pub_input {
  margin: 0 0 0 12.5px;
  font-size: 14px;
  padding: 15px 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  -webkit-box-flex: 1;
  display: block;
  width: 100%;
  /* height: 50px; */
  line-height: 50px;
  color: #2d2d31;
  vertical-align: middle;
  border: none;
  background: none;
  outline: none;
  resize: none;
}
.login_btn {
  padding: 20px 0 0 0;
  clear: both;
  text-align: center;
  display: block;
  margin: 0;
}
.btn {
  background: #dde1f1;
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: relative;
  outline: none;
  text-decoration: none;
  color: #fff;
  border-radius: 20px;
  font-size: 16px;
  text-align: center;
  display: inline-block;
  margin: 0;
  padding: 0;
}
.btn > img {
  position: absolute;
  right: 0.2rem;
  top: 0.7rem;
  width: 30px;
  height: 30px;
}
#register {
  color: #ff4773;
  float: left;
  display: inline-block;
  margin: 0;
  padding: 0;
}
.forget {
  outline: none;
  text-decoration: none;
  display: block;
  float: right !important;
  color: #8e8e93 !important;
  margin: 0;
  padding: 0;
}
#loginform_bot {
  position: relative;
  bottom: 0;
  margin: 140px 0 0 0;
  width: 100%;
  left: 0;
  display: block;
  padding: 0;
}
.line {
  height: 1px;
  margin: 7.5px 0 0 0;
  background: -webkit-linear-gradient(
    left,
    rgba(208, 208, 208, 0),
    #d0d0d0,
    rgba(208, 208, 208, 0)
  );
  padding: 0;
}
.foot_tit {
  color: #aaa;
  height: 15px;
  font-size: 16px;
  line-height: 15px;
  text-align: center;
  background: #fff;
  width: 120px;
  margin: -7px auto 0;
  font-weight: normal;
  padding: 0;
}
.third_btn {
  margin: 24px 22px 0;
  display: -webkit-box;
  padding: 0;
}
.third_btn > a {
  -webkit-box-flex: 1;
  display: block;
  text-align: center;
  font-size: 16px;
  line-height: 40px;
  outline: none;
  text-decoration: none;
  color: #858585;
  margin: 0;
  padding: 0;
}
.third_btn > a > img {
  width: 40px;
  height: 40px;
  display: block;
  margin: 0 auto;
  font-style: normal;
}
.red {
  background: #546eff !important;
}
</style>