<template>
  <div class="home">
    <section class="chanel_head">
      <section class="chanel_head-con">
        <section class="flex">
          <a href="#">
            <i class="el-icon-bell"></i>
          </a>
          <div id="search">
            <i class="el-icon-search"></i>
            <router-link to="/source"><div class="chanel_head-sinput">搜索你想要的</div></router-link>
          </div>
        </section>
        <section class="master_tab">
          <section class="panel-header">
            <div id="menu-swiper">
              <div class="swiper-wrapper" :style="trans">
                <!-- <div class="startab-moving" :style="left">
                  <div class="line"></div>
                  <div class="dot"></div>
                </div> -->
                <div
                  v-for="(k,index) in kind"
                  :key="index"
                  :class="isshow==index?'active':''"
                  @click="change(index)"
                  class="swiper-slider"
                >{{k}}</div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>

    <section id="mainindex" v-show="isshow==0">
      <section class="index-0_1">
        <div class="cover_img">
          <img
            class="image"
            src="https://qimage.owhat.cn/prod/recommendmodule/notice/image/1562386163330.jpeg"
            alt
          />
        </div>
        <Week ref="week"></Week>
        <Imageinfo ref="imageinfo"></Imageinfo>
        <Module ref="module"></Module>
      </section>
    </section>
  </div>
</template>

<script>
import Week from "../components/Week";
import Imageinfo from "../components/Imageinfo";
import Module from "../components/Module";
export default {
  name: "Home",
  components: {
    Week,
    Imageinfo,
    Module
  },
  data() {
    return {
      kind: [
        "推荐",
        "偶像志",
        "专题",
        "新闻社",
        "O!Love",
        "活动社",
        "星生活",
        "音乐",
        "爱豆直播间"
      ],
      isshow: 0,
      trans: "",
      left: "left:31px;"
    };
  },
  mounted() {},
  methods: {
    change(index) {
      console.log(index);
      this.isshow = index;
      // if (index == 0) {
      //   this.left = "left:31px;";
      // }
      // if (index == 8) {
      //   this.left = "left:600px;";
      // } else {
      //   var lef = 90 * index;
      //   this.left = `left:${lef}px;`;
      // }
      if (index >= 3 && index <= 6) {
        var len = (index - 2) * 70;
        this.trans = `transform:translateX(-${len}px);`;
        // $(".change").css("transform", `translateX(-${len}px)`);
      }
      if (index < 3) {
        this.trans = `transform:translateX(0px);`;
      }
    }
  },
};
</script>

<style lang="" scoped>
.chanel_head {
  background-color: #fff;
  display: block;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid black;
  height: 100px;
}
.chanel_head-con {
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 15%;
  z-index: 999;
  display: block;
  margin: 0;
  padding: 0;
}
.flex {
  display: flex;
  margin: 0;
  padding: 0;
}
.flex a {
  outline: none;
  text-decoration: none;
  color: #858585;
  margin: 0;
  padding: 0;
}
.flex a i {
  font-size: 20px;
  margin-top: 15px;
  margin-left: 15px;
  position: relative;
}
#search {
  height: 28px;
  margin: 10px 15px 0;
  border-radius: 20px;
  background-color: #f1f1f2;
  position: relative;
  z-index: 1001;
  display: flex;
  width: 80%;
}
#search i {
  display: inline-block;
  width: 18px;
  margin: 5px 5px 0;
  /* float: inherit; */
  height: 20px;
  color: #8e8e93;
  vertical-align: middle;
}
.chanel_head-sinput {
  font-size: 14px;
  margin-top: 5px;
  line-height: 20px;
  color: #8e8e93;
  height: 20px;
}

.master_tab {
  position: absolute;
  bottom: -5px;
  height: 60px;
  overflow: hidden;
  width: 100%;
  z-index: 999;
  display: block;
  margin: 0;
  padding: 0;
}
.panel-header {
  height: 100%;
  display: block;
  margin: 0;
  padding: 0;
}
#menu-swiper {
  height: 100%;
  z-index: 2;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
}
.swiper-wrapper {
  /* transform: translate3d(0px, 0px, 0px); */
  height: 100%;
  transition-timing-function: ease-out;
  margin: 0 auto;
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  box-sizing: content-box;
  padding: 0;
}
.startab-moving {
  /* left: 31px; */
  position: absolute;
  width: 80%;
  transition: all 0.4s;
  bottom: -3px;
  height: 9px;
  z-index: 101;
  margin: 0;
  padding: 0;
}
.line {
  height: 1px;
  width: 36%;
  position: absolute;
  left: -1.45rem;
  overflow: hidden;
  background-image: linear-gradient(
    to right,
    rgba(255, 51, 102, 0.2),
    #ff4773 23%,
    #ff4773 51%,
    #ff4773 77%,
    rgba(255, 51, 102, 0.2)
  );
  margin: 0;
  padding: 0;
}
.dot {
  width: 9px;
  height: 9px;
  border-radius: 9px;
  box-sizing: border-box;
  border: 1px #ff4773 solid;
  background-color: #fff;
  position: absolute;
  bottom: 4px;
  left: -5px;
  margin: 0;
  padding: 0;
}
.swiper-slider {
  padding-left: 16px;
  height: 55px;
  line-height: 55px;
  color: #2d2d31;
  /* color: #ff4773; */
  font-weight: 600;
  width: auto;
  text-align: center;
  float: left;
  padding-right: 12.5px;
  display: inline-block;
  font-size: 15px;
  position: relative;
  /* letter-spacing: 50px; */
  -webkit-border-radius: 0;
  background: none;
  margin: 0;
  flex-shrink: 0;
}
#mainindex {
  background-color: #f1f1f2;
  display: block;
  margin: 0 0 54px 0;
  padding: 0;
}
.index-0_1 {
  display: block;
  margin: 0;
  padding: 0;
}
.cover_img {
  margin: 0;
  padding: 0;
}
.image {
  width: 100%;
  vertical-align: top;
  display: block;
}
.active {
  color: #ff4773;
}
</style>