<template>
  <div class="attention">
    <isLogin v-if="isLogin==1" ref="islogin"></isLogin>
    <Star v-if="isLogin==2" @hidden="getdata" ref="star"></Star>
    <section id="mainpage" v-if="isLogin==false">
      <section id="notLogin">
        <div class="searchError">
          <span class="img">
            <img class="image" src="https://m.owhat.cn/src/images/img_omei_obsessed@2x.png" alt />
          </span>
          <p class="info">你喜欢的明星会出现在这里</p>
          <p class="button">
            <router-link to="/source" class="red">去搜索</router-link>
          </p>
        </div>
      </section>
      <div class="clear"></div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import isLogin from "../components/isLogin";
import Star from "../components/Star";
export default {
  name: "Attention",
  components: {
    isLogin,
    Star
  },
  data() {
    return {
      isLogin: ""
    };
  },
  methods: {
    getdata(data) {
      this.isLogin = data;
    }
  },
  mounted() {
    // console.log(this.$store.state.user)
    axios
      .get(`/isLogin`)
      .then(res => {
        console.log(res);
        // this.username = res.data.username;
        if (res.data.isLogin == true) {
          this.isLogin = 2;
        } else {
          this.isLogin = 1;
        }
        // this.isLogin = res.data.isLogin;
        // console.log(this.username);
      })
      .catch(error => {
        console.log(error);
      });
    // axios
    //   .get(`/lovestar`)
    //   .then(res => {
    //     console.log(res);
    //     this.lovestar = res.data.titles;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
};
</script>

<style lang="" scoped>
/* .attention{
    background: #f8f8f8;
} */

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
.red {
  color: #ff4773 !important;
}
</style>