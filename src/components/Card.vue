<template>
  <div class="card">
    <nav id="detailNav">
      <div class="nav_nei">
        <a class="icon-prev" v-on:click="goback">
          <i class="el-icon-arrow-left"></i>
        </a>
        <a class="icon_more">
          <i class="el-icon-more"></i>
        </a>
      </div>
    </nav>
    <section class="container">
      <section id="banner">
        <div class="banner_img">
          <div id="banner_img">
            <img
              class="image"
              src="https://qimage.owhat.cn/prod/shop/cover/1562674943555.jpg?imageMogr2/auto-orient/thumbnail/!750x480r/gravity/Center/quality/80/crop/750x480"
              alt
            />
          </div>
        </div>
      </section>
      <section class="pub_panel">
        <div class="pb">
          <h2 class="com_title">BlackACE电子刊7月10日11:00正式上线</h2>
        </div>
        <div class="shop_club">
          <div class="club_url">
            <span class="club_img">
              <img
                id="publish_img"
                src="https://qimage.owhat.cn/prod/user/avatar/c68e89c1-1b8c-3bf2-b5c4-eb0b2e1ae5fb1538298727234.jpeg?imageMogr2/auto-orient/thumbnail/!200x200r/gravity/Center/crop/200x200"
                alt
              />
            </span>
            <div class="club_mess">
              <h2 id="publish_tit">Owhat偶像志</h2>
              <p class="clearfix">
                <span>关注：2</span>
                <span>粉丝：11222</span>
              </p>
            </div>
          </div>
          <span class="club_btn">
            <a id="likehe">关注</a>
          </span>
        </div>
      </section>
    </section>
    <section class="panel">
      <section class="pfr">1</section>
      <section class="discuss">
        <section class="comments_header">
          <p class="comment_type">
            <city class="cur">最新</city>
          </p>
          <p class="comment_type">
            <city>最热</city>
          </p>
        </section>
        <section id="comment_count">
          <section id="comment_group">
            <section class="eachcomment">
              <div class="comments_title">
                <span class="img">
                  <img
                    class="image"
                    src="https://img.owhat.cn/uploads/user/avatar/92864/medium_449652c2534660e9033cfe6d485de8eb3c66d760_6ef6b0f8jw8ejcmbgwuvgj204g04gq2q.jpg?imageMogr2/auto-orient/thumbnail/!200x200r/gravity/Center/crop/200x200"
                    alt
                  />
                </span>
                <div class="mess">
                  <h2>么么的人鱼</h2>
                  <p class="clearfix">2019</p>
                </div>
                <span class="floor">1楼</span>
              </div>
              <div class="comments_con">加油</div>
              <div class="comments_btn">
                <p class="btn_mess">
                  <a class="icon-mess">
                    <i class="el-icon-chat-dot-round"></i>
                  </a>
                  <span class="child">评论</span>
                </p>
                <em class="border_r"></em>
                <p class="btn_love">
                  <span class="loveBtn">
                    <a class="loveIcon">
                      <i class="el-icon-thumb"></i>
                    </a>
                    <em>赞</em>
                  </span>
                </p>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
    <aside id="community_btn">
      <div class="community_con">
        <div class="btn_mess">
          <a class="icon-mess">
            <i class="el-icon-chat-dot-round"></i>
          </a>
          <em>评论</em>
        </div>
        <em class="border_r"></em>
        <div id="btn_love_con">
          <span class="loveBtn">
            <a class="loveIcon">
              <i class="el-icon-thumb"></i>
            </a>
            <em>赞</em>
          </span>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "Card",
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
/* body{
    background: #f8f8f8;
} */
.card {
    background: #f8f8f8;
  margin: 0;
  padding: 0;
}
#detailNav {
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
}
.nav_nei {
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
  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.4), transparent);
  margin: 0;
  padding: 0;
}
.icon-prev {
  left: 0;
  top: 0;
  width: 44px;
  height: 44px;
  position: absolute;
  overflow: hidden;
  /* text-indent: -9999px; */
  outline: none;
  text-decoration: none;
  display: inline-block;
  margin: 0;
  padding: 0;
}
.icon-prev > i {
  color: white !important;
  font-size: 26px;
}
.icon_more > i {
  color: white !important;
  font-size: 26px;
}
.icon_more {
  right: 0;
  top: 0;
  width: 44px;
  height: 44px;
  position: absolute;
  overflow: hidden;
  /* text-indent: -9999px; */
  outline: none;
  text-decoration: none;
  display: inline-block;
  margin: 0;
  padding: 0;
}
.container {
  display: block;
  margin: 0;
  padding: 0;
}
#banner {
  position: relative;
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
}
.banner_img{
    margin: 0;
padding: 0;
}
#banner_img{
    margin: 0;
padding: 0;
}
.image{
    width: 100%;
vertical-align: top;
display: block;
}
.pub_panel{
    background: #fff;
    padding: 16px 15px 0;
    display: block;
  margin: 0;
}
.pb{
    display: -webkit-box;
border-bottom: 1px #CDCED3 solid;
padding: 0 0 24px 0;
margin: 0;
}
.com_title{
    -webkit-box-flex: 1;
    font-weight: normal;
    font-size: 16px;
    margin: 0;
padding: 0;
}
.shop_club{
    padding: 16px 0;
    display: -webkit-box;
border-bottom: 1px #CDCED3 solid;
    margin: 0;
}
.club_url{
    display: -webkit-box;
    -webkit-box-flex: 1;
    margin: 0;
padding: 0;
}
.club_img{
    width: 44px;
height: 44px;
display: inline-block;
position: relative;
}
#publish_img{
    border-radius: 50%;
    width: 100%;
vertical-align: top;
display: block;
}
.club_mess{
    margin: 0 16px;
    -webkit-box-flex: 1;
    padding: 0;
}
#publish_tit{
    font-size: 16px;
    line-height: 22px;
    font-weight: normal;
    margin: 0;
padding: 0;
}
.clearfix{
    font-size: 14px;
    line-height: 18px;
    margin: 6px 0 0 0;
    color: #8E8E93;
    padding: 0;
}
.clearfix>span{
    margin: 0 24px 0 0;
    display: inline-block;
}
em{
    font-style: normal;
}
.club_btn{
    margin: 8px 0 0 0;
    width: 72px;
    -webkit-box-flex: 1;
    display: inline-block;
}
#likehe{
    outline: none;
text-decoration: none;
background: #FF4773;
border: 1px #FF4773 solid;
color: #fff;
width: 72px;
height: 28px;
-webkit-border-radius: 20px;
font-size: 16px;
line-height: 26px;
text-align: center;
display: inline-block;
margin: 0;
padding: 0;
}
.panel{
    display: block;
    margin: 0;
    padding: 0;
}
.pfr{
    padding: 0 15px;
    background: #fff;
    display: block;
    margin: 0;
}
.discuss{
    margin: 12px 0 0 0;
    display: block;
    padding: 0;
}
.comments_header{
    padding: 0 15px;
    display: -webkit-box;
    background: #fff;
color: #2D2D31;
height: 45px;
font-weight: bold;
line-height: 45px;
position: relative;
border-bottom: 1px #CDCED3 solid;
margin: 0;
}
.comment_type{
    -webkit-box-flex: 1;
text-align: center;
color: rgba(0, 0, 0, 0.32);
font-weight: normal;
font-size: 16px;
margin: 0;
padding: 0;
}
.cur{
    display: inline-block;
line-height: 40px;
color: #2D2D31;
font-weight: bold;
}
city{
    text-align: center;
color: rgba(0, 0, 0, 0.32);
font-weight: normal;
font-size: 16px;
}
#comment_count{
    display: block;
    margin: 0;
padding: 0;
}
#comment_group{
     display: block;
    margin: 0;
padding: 0;
}
.eachcomment{
    border-bottom: 1px #CDCED3 solid;
        background: #fff;
         display: block;
    margin: 0;
padding: 0;
}
.comments_title{
    padding: 20px 15px;
    display: -webkit-box;
    margin: 0;
}
.img{
   display: inline-block;
width: 36px;
height: 36px;
background-color: #fff; 
}
.img>img{
    border-radius: 50%;
}
.mess{
    margin: 0 12px;
    -webkit-box-flex: 1;
    padding: 0;
}
.mess>h2{
    font-weight: normal;
    font-size: 16px;
    margin: 0;
padding: 0;
}
.floor{
    margin: 12px 0 0 0;
    display: inline-block;
font-size: 16px;
color: rgba(0, 0, 0, 0.24);
}
.comments_con{
    padding: 0 15px 20px;
    margin: 0;
}
.comments_btn{
    display: -webkit-box;
height: 44px;
line-height: 44px;
text-align: center;
color: #8E8E93;
font-size: 16px;
margin: 0;
padding: 0;
}
.btn_mess{
    -webkit-box-flex: 1;
width: 50%;
margin: 0;
padding: 0;
}
.icon-mess{
    width: 16px;
height: 16px;
/* vertical-align: middle; */
margin: 0 9px;
display: inline-block;
color: #858585;
padding: 0;
}
.btn_love{
    -webkit-box-flex: 1;
width: 50%;
margin: 0;
padding: 0;
}
.child{
    line-height: 16px;
text-align: center;
    color: #8E8E93;
    font-size: 16px;
}
.border_r{
    height: 16px;
border-right: 1px #CDCED3 solid;
font-style: normal;
}
.loveIcon{
width: 16px;
height: 16px;
/* vertical-align: middle; */
margin: 0 9px;
display: inline-block;
color: #858585;
padding: 0;
}
#community_btn{
    height: 48px;
line-height: 48px;
display: block;
margin: 0;
padding: 0;
}
.community_con{
    display: -webkit-box;
background-color: #fff;
position: fixed;
width: 100%;
height: 49px;
left: 0;
bottom: 0;
border-top: 1px #CDCED3 solid;
z-index: 998;
text-align: center;
margin: 0;
padding: 0;
}
#btn_love_con{
    -webkit-box-flex: 1;
width: 50%;
margin: 0;
padding: 0;
}
</style>