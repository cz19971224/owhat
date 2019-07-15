<template>
  <div class="islogin">
    <section id="mainpage">
      <section id="notLogin">
        <div class="searchError">
          <span class="img">
            <img class="image" src="https://m.owhat.cn/src/images/img_omei_obsessed@2x.png" alt />
          </span>
          <p class="info">
            你喜欢的明星会出现在这里
            <span>登录后，与小伙伴们一起守护你喜爱的明星</span>
          </p>
          <p class="button">
            <router-link to="/login" class="red">登录</router-link>
          </p>
        </div>
      </section>
      <div class="clear"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "isLogin",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="" scoped>
#mainpage {
  display: block;
  margin: 0;
  padding: 0;
  /* height: 100%;
  width: 100%; */
}
.clear {
  clear: both;
}
#notLogin {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #fff;
  /* z-index: 1004; */
}
.searchError {
  color: #8e8e93;
  width: 100%;
  text-align: center;
  font-size: 14px;
  position: absolute;
  top: 25%;
  margin: 0;
  padding: 0;
}
.img {
  display: inline-block;
  width: 140px;
  height: auto;
}
.image {
  width: 100%;
  vertical-align: top;
  display: block;
}
.info {
  margin: 21px 0 0 0;
  padding: 0 15px;
  font-size: 14px;
  text-align: center;
  color: #8e8e8e;
}
.info > span {
  width: 100%;
  font-size: 14px;
  margin: 6px 0 0 0;
  display: block;
  text-align: center;
  color: #8e8e93;
}
.button {
  display: inline-block;
  line-height: 41px;
  font-weight: 600;
  width: 183px;
  height: 41px;
  font-size: 20px;
  margin: 24px 0 0 0;
  padding: 0;
  border: 1px rgba(255, 88, 104, 0.48) solid !important;
  color: #ff4773 !important;
  border-radius: 20px;
  outline: none;
  text-decoration: none;
}
.red{
  color: #ff4773 !important;
}
</style>