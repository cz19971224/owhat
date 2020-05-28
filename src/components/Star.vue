<template>
  <div class="star">
    <section id="mainCount">
      <nav id="nav">
        <section id="navbar">
          <span class="star-focus">
            <i class="el-icon-user" @click="showhandle"></i>
          </span>
          <i class="el-icon-more"></i>
        </section>
      </nav>
      <section class="star-top">
        <div class="star-top-fixed">
          <img :src="star.big" alt />
        </div>
      </section>
      <section id="star-con">
        <section class="star-intro">
          <section class="head">
            <section class="box">
              <div class="star-image-wrap">
                <div class="star-image">
                  <img :src="star.small" alt />
                </div>
              </div>
              <div class="star-mess-intro">
                <h2>{{star.name}}</h2>
                <p>粉丝 {{star.fans}}</p>
              </div>
            </section>
          </section>
        </section>

        <section class="tabContent">
          <p class="ptab">
            <!-- <img src="" alt=""> -->
            <span>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;" @click='shop(1)'>内容</font>
              </font>
            </span>
          </p>
          <!-- <div class="line"></div> -->
          <!-- <em class="border_r"></em> -->
          <p class="ptab">
            <!-- <img src="" alt=""> -->
            <span>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;" @click='shop(2)'>商品</font>
              </font>
            </span>
          </p>
        </section>

        <section class="master_work_tab" v-if="isshop==1">
          <section id="work">
            <section class="anlist-con">
              <div class="each_work" v-for="c in comment">
                <div class="each_work_head">
                  <div class="master_info">
                    <span class="list_heading">
                      <img :src="c.namesrc" alt />
                    </span>
                    <div class="master_tit_con">
                      <h2 class="clearfix">
                        <cite class="left">{{c.name}}</cite>
                      </h2>
                      <div class="master_date">{{c.time}} 发布</div>
                    </div>
                    <div class="list_mark_cons"></div>
                  </div>
                  <div class="list_mark_cons">
                    <div class="more-area">
                      <span class="btn-more">
                        <i class="el-icon-more"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="master_img" v-show="c.img">
                  <div class="coverimgdto">
                    <div class="each_coverimg">
                      <img :src="c.img" alt />
                    </div>
                  </div>
                </div>
                <div class="master_work_info">
                  <span class="ellips">{{c.content}}</span>
                </div>
                <div class="comments_btn">
                  <p class="btn_mess">
                    <a class="icon-mess">
                      <i class="el-icon-chat-dot-round"></i>
                    </a>
                    <span class="child">
                      <router-link :to="'/discuss/'+c.title">评论</router-link>
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </section>
        </section>

        <Shoplist v-if="isshop==2" :starname='star.name'></Shoplist>

      </section>
    </section>
    <Starmodule @isshow="getisshow" @name="getdata" v-show="isshow" @shopid='getisshop'></Starmodule>
  </div>
</template>

<script>
import Starmodule from "./Starmodule";
import Shoplist from './Shoplist'
import axios from "axios";
export default {
  name: "Star",
  components: {
    Starmodule,
    Shoplist
  },
  data() {
    return {
      isshow: false,
      star: "",
      comment: "",
      // name:'',
      index: 1,
      name: "",
      userid: "",
      isshop:1,
      red1:'',
      red2:'red'
    };
  },
  methods: {
    getisshop(data){
      console.log(data)
      this.isshop=data
    },
    shop(e){
      // console.log(e)
      this.isshop=e
    },
    showhandle() {
      this.isshow = true;
    },
    getisshow(data) {
      console.log(data);
      this.isshow = data;
    },
    getdata(data) {
      // this.name=data
      this.name = data;
      // console.log(this.index)
      axios
        .get(`/star?name=${this.name}`)
        .then(res => {
          console.log(res);
          this.star = res.data.titles[0];
          // this.name=this.star.name
          // console.log(this.star)
          axios
            .get(`/starcomment?name=${this.star.name}`)
            .then(res => {
              console.log(res);
              this.comment = res.data.titles;
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    axios
      .get(`/isLogin`)
      .then(res => {
        console.log(res);
        this.userid = res.data.username;
        axios
          .get(`/lovestar?userid=${this.userid}`)
          .then(res => {
            console.log(res);
            // this.lovestar = res.data.titles;
            if (res.data.titles == "") {
              const showstar = false;
              // console.log(showstar)
              this.$emit("hidden", showstar);
            }
            if (res.data.titles != "") {
              axios
                .get(`/star?name=${res.data.titles[0].name}`)
                .then(res => {
                  console.log(res);
                  this.star = res.data.titles[0];
                  // this.name=this.star.name
                  // console.log(this.star)
                  axios
                    .get(`/starcomment?name=${this.star.name}`)
                    .then(res => {
                      console.log(res);
                      this.comment = res.data.titles;
                    })
                    .catch(error => {
                      console.log(error);
                    });
                })
                .catch(error => {
                  console.log(error);
                });
            }
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="" scoped>
.red{
  color: red;
}
.line {
  height: 0.4rem;
  margin-top: 0.3rem;
  position: relative;
}
.ptab {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: #333;
  width: 50%;
  height: 1rem;
  line-height: 1rem;
  /* font-size: 0.28rem; */
  font-weight: 700;
  text-align: center;
}

.star {
  margin: 0;
  padding: 0;
}
#mainCount {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
}
#nav {
  height: auto;
  width: 100%;
  border: none !important;
  display: block;
  margin: 0;
  padding: 0;
}
#navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 44px;
  font-size: 16px;
  line-height: 44px;
  color: #323232;
  text-align: center;
  z-index: 1001;
  font-weight: 500;
  border: none !important;
  display: block;
  margin: 0;
  padding: 0;
}
.star-focus {
  position: absolute;
  left: 10px;
  height: 24px;
  top: 10px;
  line-height: 1;
  font-size: 20px;
  color: white;
  text-align: center;
  font-weight: 500;
}
.star-focus > i {
  width: 24px;
  height: 24px;
  display: inline-block;
  font-style: normal;
}
#navbar > i {
  color: white;
  width: 30px;
  right: 10px;
  display: inline-block;
  top: 10px;
  height: 20px;
  position: absolute;
  overflow: hidden;
  font-style: normal;
}
.star-top {
  height: 240px;
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
}
.star-top-fixed {
  position: absolute;
  width: 100%;
  height: auto;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
}
.star-top-fixed > img {
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  vertical-align: middle;
}
#star-con {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
}
.star-intro {
  position: relative;
  background-color: #fff;
  padding: 0 0 14px 0;
  display: block;
  margin: 0;
}
.head {
  padding: 10px 16px;
  display: block;
  margin: 0;
}
.box {
  display: -webkit-box;
  margin: 0;
  padding: 0;
}
.star-image-wrap {
  position: relative;
  width: 91px;
  margin: 0;
  padding: 0;
}
.star-image {
  display: inline-block;
  width: 91px;
  height: 91px;
  padding: 2px;
  margin: -42.5px 0 0 0;
  box-sizing: border-box;
  position: absolute;
}
.star-image > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  vertical-align: middle;
}
.star-mess-intro {
  margin: 0 0 0 14px;
  -webkit-box-flex: 1;
  padding: 0;
}
.star-mess-intro > h2 {
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: #2d2d31;
  max-height: 24px;
  line-height: 24px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.star-mess-intro > p {
  color: #8e8e93;
  text-indent: 1px;
  font-size: 14px;
  font-weight: normal;
  margin: 10px 0 0 0;
  padding: 0;
}
.master_work_tab {
  margin: 10px 0 0 0;
  position: relative;
  display: block;
  padding: 0;
}
.master_tab_rela {
  position: relative;
  height: 65px;
  background: #fff;
  display: block;
  margin: 0;
  padding: 0;
  /* background-color: #fff; */
}
.master_tab {
  width: 100%;
  height: 65px;
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
  height: 100%;
  margin: 0 auto;
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  box-sizing: content-box;
  padding: 0;
}
.moving {
  left: 47px;
  position: absolute;
  width: 100%;
  bottom: -3px;
  height: 9px;
  z-index: 101;
  margin: 0;
  padding: 0;
}
.line {
  height: 1px;
  width: 150px;
  position: absolute;
  left: -75px;
  background-image: linear-gradient(
    to right,
    rgba(255, 51, 102, 0.2),
    #ff4773 23%,
    #ff4773 51%,
    #ff4773 77%,
    rgba(255, 51, 102, 0.2)
  );
  overflow: hidden;
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
.swiper-slide {
  width: 25%;
  height: 60px;
  line-height: 60px;
  color: #ff4773;
  font-weight: 600;
  float: left;
  display: inline-block;
  font-size: 18px;
  position: relative;
  letter-spacing: 1.2px;
  -webkit-border-radius: 0;
  background: none;
  text-align: center;
  padding: 0;
  flex-shrink: 0;
  margin: 0;
}
.white_bg {
  width: 100%;
  height: 60px;
  position: absolute;
  border-bottom: 1px #000 solid;
  box-sizing: border-box;
  background: #fff;
  margin: 0;
  padding: 0;
}
#work {
  height: auto !important;
  background: #fff;
  padding: 0;
  display: block;
  margin: 0;
}
.anlist-con {
  background-color: #f1f1f2;
  overflow: hidden;
  display: block;
  margin: 0 0 54px 0;
  padding: 0;
}
.each_work {
  margin: 0 0 10px 0;
  padding: 0 0 17px 0;
  overflow: hidden;
  background: #fff;
}
.each_work_head {
  padding: 20px 16px 0;
  position: relative;
  display: -webkit-box;
  margin: 0;
}
.master_info {
  position: relative;
  -webkit-box-flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}
.list_heading {
  position: absolute;
  display: inline-block;
  width: 42.5px;
  height: 42.5px;
}
.list_heading > img {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  vertical-align: top;
  border-radius: 50%;
  width: 42.5px;
  height: 42.5px;
}
.master_tit_con {
  margin: 0 0 0 52px;
  padding: 0;
}
.master_tit_con > h2 {
  padding: 0;
  margin: 9px 0 0 0;
  line-height: 16px !important;
  font-weight: normal;
  font-size: 16px;
}
.left {
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  float: left;
  font-style: normal;
}
.master_date {
  color: #8e8e93;
  font-size: 14px;
  line-height: 16px;
  margin-top: 1px;
  padding: 0;
}
.list_mask_cons {
  margin: 0;
  padding: 0;
}
.more-area {
  margin: 0;
  padding: 0;
}
.btn-more {
  width: 30px;
  display: inline-block;
  color: #fff;
  font-weight: normal;
  font-size: 0.28rem;
  height: 24px;
  line-height: 24px;
  text-align: center;
}
.btn-more > i {
  width: 18px;
  height: 18px;
  margin-top: 12px;
  cursor: pointer;
  float: right;
  font-style: normal;
  color: #000;
  font-size: 18px;
}
.master_img {
  margin: 21px 16px 0;
  position: relative;
  padding: 0;
}
.coverimgdto {
  position: relative;
  overflow: hidden;
  border: none;
  /* width: 6.87rem; */
  margin: 0;
  padding: 0;
}
.each_coverimg {
  width: 114.5px;
  height: 114.5px;
  background-color: #fff;
  padding-right: 1px;
  padding-bottom: 1px;
  box-sizing: border-box;
  float: left;
  position: relative;
  overflow: hidden;
  margin: 0;
}
.each_coverimg > img {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  vertical-align: middle;
}
.master_work_info {
  padding: 17px 20px 6px;
  font-size: 16px;
  /* line-height: 0.45rem; */
  color: rgba(0, 0, 0, 0.88);
  word-break: break-all;
  margin: 0;
}
.ellips {
  margin-bottom: 16px;
  /* max-height: 1.35rem; */
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box !important;
}

.comments_con {
  padding: 0 15px 20px;
  margin: 0;
}
.comments_btn {
  display: -webkit-box;
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: #8e8e93;
  font-size: 16px;
  margin: 0;
  padding: 0;
}
.btn_mess {
  -webkit-box-flex: 1;
  width: 50%;
  margin: 0;
  padding: 0;
}
.icon-mess {
  width: 16px;
  height: 16px;
  /* vertical-align: middle; */
  margin: 0 9px;
  display: inline-block;
  color: #858585;
  padding: 0;
}
.btn_love {
  -webkit-box-flex: 1;
  width: 50%;
  margin: 0;
  padding: 0;
}
.child {
  line-height: 16px;
  text-align: center;
  color: #8e8e93;
  font-size: 16px;
}
.border_r {
  height: 16px;
  border-right: 1px #cdced3 solid;
  font-style: normal;
}
.loveIcon {
  width: 16px;
  height: 16px;
  /* vertical-align: middle; */
  margin: 0 9px;
  display: inline-block;
  color: #858585;
  padding: 0;
}
#community_btn {
  height: 48px;
  line-height: 48px;
  display: block;
  margin: 0;
  padding: 0;
}
.community_con {
  display: -webkit-box;
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 49px;
  left: 0;
  bottom: 0;
  border-top: 1px #cdced3 solid;
  z-index: 998;
  text-align: center;
  margin: 0;
  padding: 0;
}
#btn_love_con {
  -webkit-box-flex: 1;
  width: 50%;
  margin: 0;
  padding: 0;
}
.child > a {
  color: #8e8e93;
}

.tabContent {
  width: 100%;
  /* height: 1rem;
   */
  height: 50px;
  background: #fff;
  display: -webkit-box;
  box-sizing: border-box;
  position: relative;
}
</style>