<template>
  <div id="app">
    <router-view></router-view>
    <section id="pubfoot" v-if='isShow'>
      <section class="pub_foot">
        <div class="pub_foot_btn">
          <router-link to="/home">
            <i class="el-icon-s-home"></i>
            <cite>首页</cite>
          </router-link>
          <router-link to="/shop">
            <i class="el-icon-goods"></i>
            <cite>商品</cite>
          </router-link>
          <router-link class="js-publish" to="/amway">
           <i class="el-icon-circle-plus-outline"></i>
          </router-link>
          <router-link to="/attention">
            <i class="el-icon-star-off"></i>
            <cite>关注</cite>
          </router-link>
          <router-link to="my">
            <i class="el-icon-user"></i>
            <cite>我的</cite>
          </router-link>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import {Icon} from 'element'
export default {
  name: "App",
  data(){
    return{
      isShow:true
    }
  },
  components: {},
  watch: {
    $route:function(newValue,oldValue){
      console.log(newValue)
      // console.log(oldValue)
      const path=newValue.path
      if(path!='/login'&&path!='/register'){
        this.isShow=true
      }else{
        this.isShow=false
      }
    }
  },
  mounted() {
     const path=this.$route.path
      if(path!='/login'&&path!='/register'){
        this.isShow=true
      }else{
        this.isShow=false
      }
  },
};
</script>

<style>
html {
  overflow: visible;
  height: 100%;
  font-style: normal;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body {
  overflow: visible;
  opacity: 1;
  height: 100%;
  /* transition: opacity 0.1s;
  transition-property: opacity;
  transition-duration: 0.1s;
  transition-timing-function: ease;
  transition-delay: 0s; */
  color: #2d2d31;
  font-size: 16px;
  width: 100%;
  min-width: 100%;
  word-break: break-word;
  word-wrap: break-word;
  margin: 0;
  padding: 0;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#pubfoot {
  display: block;
  margin: 0;
  padding: 0;
}
.pub_foot {
  display: block;
  margin: 0;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}
.pub_foot_btn {
  height: 8%;
  display: -webkit-box;
  width: 100%;
  bottom: 0;
  left: 0;
  position: fixed;
  background: #fff;
  z-index: 990;
  box-shadow: 0 -5px 7px 0 rgba(226, 226, 226, 0.35);
}
.pub_foot_btn a {
  width: 20%;
  display: block;
  height: 100%;
  overflow: hidden;
  -webkit-box-flex: 1;
  text-align: center;
  font-size: 16px;
  position: relative;
}
.pub_foot_btn a cite{
  display: block;
  /* height: 7.5px; */
  font-size: 10px;
  /* transform: scale(0.5, 0.5); */
  font-style: normal;
}
.pub_foot_btn a i{
  display: block;
  margin: 10px auto 0 ;
  font-size: 25px !important;
}
a {
  outline: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
}
.js-publish{
  margin: 8px auto 0;
  color: #ff4773;
}
.pub_foot_btn a.router-link-active {
  color: #ff4773;
}
</style>
