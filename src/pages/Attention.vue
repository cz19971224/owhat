<template>
  <div class="attention">
    <isLogin v-if="isLogin==false" ref="islogin"></isLogin>
    <Star v-if='isLogin==true' ref="star"></Star>
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
      isLogin: '',
    };
  },
  mounted() {
    axios
      .get(`/isLogin`)
      .then(res => {
        console.log(res);
        this.username = res.data.username;
        this.isLogin = res.data.isLogin;
        console.log(this.username);
        // axios
        //   .get(`/allusers?username=${this.username}`)
        //   .then(res => {
        //     console.log(res);
        //     this.user=res.data.titles[0]
        //     this.usersrc=res.data.titles[0].usersrc
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="" scoped>
/* .attention{
    background: #f8f8f8;
} */
</style>