<template>
  <div class="exit">
    <nav id="nav">
      <section id="navbar">
        <a class="fa" v-on:click="goback">
          <i class="el-icon-arrow-left"></i>
        </a>
        设置
      </section>
    </nav>
    <section class="container">
      <button v-on:v-click='exit' id="exit">退出当前账号</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Exit",
  components: {},
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.go(-1); //返回上一层
    },
    exit(){
         axios
          .get(`/exit`)
          .then(res => {
            console.log(res);
             if(res.data.result==1){
                   this.$router.push({ path:'/my'  })
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
  color: #323232;
  margin: 0;
  padding: 0;
}
.container {
  display: block;
  margin: 0;
  padding: 0;
}
#exit {
  height: 52px;
  background-color: #fff;
  width: 100%;
  font-size: 16px;
  color: #ff4773;
  margin: 16px 0 0 0;
  vertical-align: middle;
  border: none;
  outline: none;
  resize: none;
  -moz-appearance: none;
  padding: 0;
}
</style>