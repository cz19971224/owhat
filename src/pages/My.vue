<template>
  <div class="my">
    <nav id="nav">
      <section>
        <a class="right">
          <i class="el-icon-setting"></i>
        </a>
      </section>
    </nav>
    <section class="mine_header">
      <div class="mine_top">
        <span class="img120">
          <img src="https://qimage.owhat.cn/mobile/resource/position_1.png" alt />
        </span>
        <div class="club_mess">
          <dir class="mt">
            <a>登录/注册</a>
          </dir>
        </div>
        <span class="icon">
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
      <div class="module_enter">
        <a class="js-goshopcart">
          <span class="module_img">
            <img src="https://m.owhat.cn/src/images/icon_mine_shoppingcart@2x.png" alt />
          </span>
          <p>购物车</p>
        </a>
        <a class="js-goshopcart">
          <span class="module_img">
            <img src="https://m.owhat.cn/src/images/icon_mine_order@2x.png" alt />
          </span>
          <p>订单中心</p>
        </a>
        <a class="js-goshopcart">
          <span class="module_img">
            <img src="https://m.owhat.cn/src/images/icon_mine_Oyuan@2x.png" alt />
          </span>
          <p>O!元</p>
        </a>
        <a class="js-goshopcart">
          <span class="module_img">
            <img src="https://m.owhat.cn/src/images/mine_kefu@2x.png" alt />
          </span>
          <p>客服中心</p>
        </a>
      </div>
    </section>
    <div id="abouts_lists">
      <a class="js-myanli">
        <h4>我的安利</h4>
        <i class="el-icon-arrow-right"></i>
      </a>
      <a class="js-myanli">
        <h4>我的余额</h4>
        <i class="el-icon-arrow-right"></i>
      </a>
      <a class="js-myanli">
        <h4>我的关注</h4>
        <i class="el-icon-arrow-right"></i>
      </a>
      <a class="js-myanli">
        <h4>我的收藏</h4>
        <i class="el-icon-arrow-right"></i>
      </a>
      <a class="js-myanli">
        <h4>我的鸡腿</h4>
        <i class="el-icon-arrow-right"></i>
      </a>
      <a class="js-myanli">
        <h4>我的里程碑</h4>
        <i class="el-icon-arrow-right"></i>
      </a>
    </div>
    <div id="abouts_lists">
      <a class="js-myanli">
        <h4>下载Owhat</h4>
        <i class="el-icon-arrow-right"></i>
      </a>
      <a class="js-myanli">
        <h4>客服中心</h4>
        <i class="el-icon-arrow-right"></i>
      </a>
      <a class="js-myanli">
        <h4>意见反馈</h4>
        <i class="el-icon-arrow-right"></i>
      </a>
      <a class="js-myanli">
        <h4>关于我们</h4>
        <i class="el-icon-arrow-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "My",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="" scoped>
.my {
  background-color: #f8f8f8;
}
#nav {
  width: 100%;
  height: 44px;
  background: #fff;
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
}
section {
  display: block;
  margin: 0;
  padding: 0;
}
.right {
  outline: none;
  text-decoration: none;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
  float: right;
  display: inline-block;
  color: #858585;
  margin: 0;
  padding: 0;
  font-size: 18px;
}
.mine_header {
  padding: 15px 15px 0 15px;
  background-color: #fff;
  margin: 0 0 10px 0;
}
.mine_top {
  padding: 0 0 20px 0;
  border-bottom: 1px #cdced3 solid;
  margin: 0;
  display: -webkit-box;
}
.img120 {
  display: inline-block;
  width: 60px;
  height: 60px;
  position: relative;
}
.img120 > img {
  border-radius: 50%;
  width: 100%;
  vertical-align: top;
  display: block;
}
.club_mess {
  margin: 0 0 0 16px;
  display: block;
  color: #2d2d31;
  -webkit-box-flex: 1;
  padding: 0;
}
.mt {
  margin: 16px 0 0 0;
  padding: 0;
}
.mt > a {
  font-size: 18px;
  color: #2d2d31;
  outline: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
}
.icon {
  margin: 22.5px 0 0 0;
  width: 18px;
  height: 18px;
  vertical-align: middle;
  display: inline-block;
  font-size: 18px;
}
.module_enter {
  padding: 25px 0;
  display: -webkit-box;
  margin: 0;
}
.module_enter > a {
  color: #2d2d31;
  display: block;
  -webkit-box-flex: 1;
  width: 25%;
  text-align: center;
  outline: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
}
.module_img {
  width: 25px;
  height: 25px;
  overflow: hidden;
  display: inline-block;
}
.module_img > img {
  width: 100%;
  vertical-align: top;
  display: block;
}
.js-goshopcart > p {
  margin: 7.5px 0 0 0;
  font-size: 12px;
  font-weight: bold;
  padding: 0;
}
#abouts_lists {
  margin: 0 0 10px 0;
  padding: 0 0 0 16px;
  background-color: #fff;
}
.js-myanli {
  color: #2d2d31;
  height: 58px;
  border-bottom: 1px #cdced3 solid;
  display: -webkit-box;
  line-height: 58px;
  outline: none;
  text-decoration: none;
  margin: 0 16px 0 0;
}
.js-myanli > h4 {
  -webkit-box-flex: 1;
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  padding: 0;
}
.js-myanli > i {
  width: 18px;
  height: 18px;
  vertical-align: middle;
  display: inline-block;
  font-style: normal;
}
</style>