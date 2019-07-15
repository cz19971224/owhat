<template>
  <div class="star">
    <section id="mainCount">
      <nav id="nav">
        <section id="navbar">
          <span class="star-focus">
            <i class="el-icon-user"></i>
          </span>
          <i class="el-icon-more"></i>
          <!-- <div id="newHead">
                <span class="newHead_img">
                    <img src="" alt="">
                </span>
                <span class="title">金泰妍</span>
          </div>-->
        </section>
      </nav>
      <section class="star-top">
        <div class="star-top-fixed">
          <img
            src="https://qimage.owhat.cn/prod/user/cover/1486504717738.png?imageMogr2/auto-orient/thumbnail/!750x480r/gravity/Center/quality/80/crop/750x480"
            alt
          />
        </div>
      </section>
      <section id="star-con">
        <section class="star-intro">
          <section class="head">
            <section class="box">
              <div class="star-image-wrap">
                <div class="star-image">
                  <img
                    src="https://qimage.owhat.cn/uploads/core/star/pic/508/732da7fa55a16b22be9b5ea5f6f883763a24f60d?imageMogr2/auto-orient/thumbnail/!200x200r/gravity/Center/crop/200x200"
                    alt
                  />
                </div>
              </div>
              <div class="star-mess-intro">
                <h2>金泰妍</h2>
                <p>粉丝 394W</p>
              </div>
            </section>
          </section>
        </section>
        <section class="master_work_tab">
          <section class="master_tab_rela">
            <section class="master_tab">
              <section class="panel-header">
                <div class="white_bg"></div>
                <div id="menu-swiper">
                  <div class="swiper-wrapper">
                    <div class="moving">
                      <div class="line"></div>
                      <div class="dot"></div>
                    </div>
                    <div class="swiper-slide">安利墙</div>
                    <div class="swiper-slide">活动社</div>
                    <div class="swiper-slide">商品</div>
                    <div class="swiper-slide">关于TA</div>
                  </div>
                </div>
              </section>
            </section>
          </section>
          <section id="work">
            <section class="anlist-con">
              <div class="each_work">
                <div class="each_work_head">
                  <div class="master_info">
                    <span class="list_heading">
                      <img
                        src="https://qimage.owhat.cn/prod/user/avatar/1515149853425199?imageMogr2/auto-orient/thumbnail/!200x200r/gravity/Center/crop/200x200"
                        alt
                      />
                    </span>
                    <div class="master_tit_con">
                      <h2 class="clearfix">
                        <cite class="left">默写</cite>
                      </h2>
                      <div class="master_date">2019 发布</div>
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
                <div class="master_img">
                  <div class="coverimgdto">
                    <div class="each_coverimg">
                      <img
                        src="https://qimage.owhat.cn/prod/master/image/9e583218-2ffb-382d-9c15-6fc554de30e415627593722880.null?imageMogr2/auto-orient/size-limit/100k!&imageView2/2/w/2000/h/2000"
                        alt
                      />
                    </div>
                  </div>
                </div>
                <div class="master_work_info">
                  <span class="ellips">瞅瞅</span>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Star",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="" scoped>
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
  margin: 0;
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
.each_coverimg{
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
.each_coverimg>img{
    width: 100%;
height: 100%;
position: relative;
display: block;
vertical-align: middle;
}
.master_work_info{
    padding: 17px 20px 6px;
    font-size:16px;
/* line-height: 0.45rem; */
color: rgba(0, 0, 0, 0.88);
word-break: break-all;
margin: 0;
}
.ellips{
margin-bottom: 16px;
/* max-height: 1.35rem; */
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
display: -webkit-box !important;
}
</style>