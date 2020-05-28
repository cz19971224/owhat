<template>
  <div class="buy">
    <nav id="nav">
      <div class="navbar">
        <a class="icon-prev" v-on:click="goback">
          <i class="el-icon-arrow-left"></i>
        </a>
        购物车
        <i class="nav-right" v-if="isshow" @click="delec(2)" v-show="del==1">编辑</i>
        <i class="nav-right" v-if="isshow" @click="delec2(1)" v-show="del==2">完成</i>
        <!-- <a class="icon_more">
          <i class="el-icon-more"></i>
        </a>-->
      </div>
    </nav>

    <section id="shopcart" v-if="del==1">
      <section class="ow" v-for="(a,index) in shoplist" :key="index">
        <div class="each">
          <span class="sp">
            <input
              type="checkbox"
              class="singlecheck val1"
              :id="index"
              v-model="numarr"
              :value="a.id"
              @click="clickhandle($event)"
            />
          </span>
          <div class="gohref">
            <router-link :to="'/Starshop/'+a.name">
              <div class="shopcart-con">
                <img :src="a.shopimg" alt />
              </div>
            </router-link>
            <div class="shopcart-con-right">
              <h4>{{a.name}}</h4>
              <p class="shopcart-p">
                <span class="money">
                  <em class="yuan">￥</em>
                  <span ref="mon">{{a.price}}</span>
                </span>
                <span class="num">X1</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section id="shopcart" v-if="del==2">
      <section class="ow" v-for="a in shoplist" :key="a.id">
        <div class="each">
          <span class="sp">
            <input type="checkbox" class="singlecheck val2" v-model="shoparr" :value="a.id" />
          </span>
          <div class="gohref">
            <router-link :to="'/Starshop/'+a.name">
              <div class="shopcart-con">
                <img :src="a.shopimg" alt />
              </div>
            </router-link>
            <div class="shopcart-con-right">
              <h4>{{a.name}}</h4>
              <p class="shopcart-p">
                <span class="money">
                  <em class="yuan">￥</em>
                  {{a.price}}
                </span>
                <span class="num">X1</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section id="comment_count" v-if="!isshow">没有商品</section>

    <section v-if="isshow">
      <div class="footer">
        <div class="choose">
          <input
            id="checkall all1"
            type="checkbox"
            v-model="allCheck"
            @click="checkAll($event)"
            v-if="del==1"
          />
          <span class="shopcart-name" v-if="del==1">全选</span>
          <input
            id="checkall all2"
            type="checkbox"
            v-model="allCheck"
            @click="checkdelAll($event)"
            v-if="del==2"
          />
          <span class="shopcart-name" v-if="del==2">全选</span>
          <span class="shopcart-com" v-if="del==1">
            <span
              style="float: left;line-height: 32px;display: block;text-align: right;margin-top: 9px;color: #2d2d31;margin-right: 10px;height:32px;"
            >合计:</span>
            <span class="money">
              <em class="yuan">￥</em>
              {{money}}
            </span>
          </span>
        </div>
        <span class="btn" v-show="del==1">结算</span>
        <span class="btn" v-show="del==2" @click="delshop">删除</span>
        <span></span>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      module: "",
      shoplist: "",
      isshow: true,
      username: "",
      allCheck: false,
      del: 1,
      shoparr: [],
      numarr: [],
      money: 0,
      num: ""
    };
  },
  methods: {
    goback() {
      this.$router.go(-1); //返回上一层
    },
    delec(e) {
      this.del = e;
    },
    delec2(e) {
      this.del = e;
    },
    delshop() {
      // console.log(this.shoparr)
      for (var i = 0; i < this.shoparr.length; i++) {
        console.log(this.shoparr[i]);
        axios
          .get(`/delbuy?id=${this.shoparr[i]}`)
          .then(res => {
            console.log(res);
            this.$router.go(0);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    clickhandle(e) {
      // console.log(e.target)
      // console.log(e.target.checked)
      // console.log(this.$refs.mon[e.target.id].innerText)
      if (e.target.checked == true) {
        var a = this.money;
        var b = this.$refs.mon[e.target.id].innerText;
        this.money = parseFloat(a) + parseFloat(b);
        this.money = Math.floor(this.money * 100) / 100;
        console.log(this.money);
      } else {
        var a = this.money;
        var b = this.$refs.mon[e.target.id].innerText;
        this.money = parseFloat(a) - parseFloat(b);
        this.money = Math.floor(this.money * 100) / 100;
        console.log(this.money)
      }
    },
    checkAll(e) {
      console.log(2222);
      var checkObj = document.querySelectorAll(".val1"); // 获取所有checkbox项
      if (e.target.checked) {
        // 判定全选checkbox的勾选状态
        for (var i = 0; i < checkObj.length; i++) {
          if (!checkObj[i].checked) {
            // 将未勾选的checkbox选项push到绑定数组中
            this.numarr.push(checkObj[i].value);
          }
        }
        for (var j = 0; j < this.$refs.mon.length; j++) {
          // console.log(this.$refs.mon[j].innerText);
          this.money =
            parseFloat(this.money) + parseFloat(this.$refs.mon[j].innerText);
          this.money = Math.floor(this.money * 100) / 100;
          console.log(this.money);
        }
      } else {
        // 如果是去掉全选则清空checkbox选项绑定数组
        this.numarr = [];
        this.money = 0;
      }
    },
    checkdelAll(e) {
      console.log(3333);
      var checkObj = document.querySelectorAll(".val2"); // 获取所有checkbox项
      if (e.target.checked) {
        // 判定全选checkbox的勾选状态
        for (var i = 0; i < checkObj.length; i++) {
          if (!checkObj[i].checked) {
            // 将未勾选的checkbox选项push到绑定数组中
            this.shoparr.push(checkObj[i].value);
          }
        }
      } else {
        // 如果是去掉全选则清空checkbox选项绑定数组
        this.shoparr = [];
      }
    }
  },
  mounted() {
    // console.log(this.shop);
    axios
      .get(`/isLogin`)
      .then(res => {
        console.log(res);
        this.username = res.data.username;
        axios
          .get(`/buy?username=${this.username}`)
          .then(res => {
            console.log(res);
            if (res.data.titles == "") {
              this.isshow = false;
            } else {
              this.shoplist = res.data.titles;
              this.num = res.data.titles.length;
            }
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  },
  watch: {
    numarr: function() {
      console.log(this.numarr);
      // if (this.numarr.length == this.num) {
      //   document.querySelector("#all1").checked = true;
      // } else {
      //   document.querySelector("#all1").checked = false;
      // }

      // deep: true; // 深度监视
    },
    shoparr: function() {
      console.log(this.shoparr);

      // if (this.shoparr.length == this.num) {
      //   document.querySelector("#all2").checked = true;
      // } else {
      //   document.querySelector("#all2").checked = false;
      // }

      // deep: true; // 深度监视
    },
    allCheck: function() {
      console.log("111");
      console.log(this.num);
    }
  },
  computed: {}
};
</script>

<style lang="" scoped>
#nav {
  width: 100%;
  height: 44px;
  display: block;
}
.navbar {
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
  border-bottom: 1px #e6e6e6 solid;
  background: #fff;
  font-weight: 500;
}
.icon-prev {
  width: 44px;
  height: 44px;
  position: absolute;
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  /* background-size: 0.4rem 0.4rem; */
  background-position: center center;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  text-decoration: none;
  color: #858585;
}
.el-icon-arrow-left {
  width: 26px;
  height: 26px;
  font-size: 20px;
}
.nav-right {
  position: absolute;
  right: 10px;
  font-weight: normal;
  color: #686868;
  font-size: 14px;
  font-style: normal;
}
#shopcart {
  padding-bottom: 48px;
  display: block;
}

.ow {
  overflow: hidden;
}
.middlebox {
  background-color: #fff;
  display: -webkit-box;
  -webkit-box-align: center;
  min-height: 0.64rem;
  line-height: 48px;
  padding-top: 0.32rem;
  position: relative;
}
input {
  font-size: 0.28rem;
  font-family: "Microsoft YaHei", Helvetica;
  border: none;
  outline: none;
  resize: none;
  /* -webkit-appearance: none; */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.allcheck {
  display: inline-block;
  width: 18px;
  height: 18.5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 3px;
  vertical-align: center;
}
.flex {
  -webkit-box-flex: 1;
  display: -webkit-box;
  -webkit-box-align: center;
}
.head-profits {
  width: 28px;
  height: 28px;
  border: 1px solid #e0e0e0;
  -webkit-border-radius: 0.56rem;
  overflow: hidden;
  margin-right: 0.16rem;
  -webkit-box-sizing: border-box;
}
.head-profits > img {
  width: 100%;
  vertical-align: top;
  display: block;
  line-height: 0.32rem;
}
.shopcart-name {
  line-height: 48px;
  -webkit-box-flex: 1;
  font-size: 16px;
  color: #2d2d31;
  margin-right: 0.24rem;
}
.shopcart-name span {
  float: left;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 48px;
  font-size: 16px;
  color: #2d2d31;
}
.each {
  transform: translate3d(0px, 0px, 0px);
  height: 141px;
  background-color: #fff;
  position: relative;
  -webkit-transition: all 0.4s;
  display: -webkit-box;
}
.sp {
  height: 2.28rem;
  line-height: 2.28rem;
}
.sp > input {
  float: left;
  margin-top: 60px;
  display: inline-block;
  width: 18px;
  height: 18.5px;
  margin-left: 10px;
  margin-right: 10px;
  vertical-align: top;
}
.gohref {
  display: -webkit-box;
  -webkit-box-align: center;
  width: 100%;
  -webkit-box-flex: 1;
  padding: 0.26rem 0 0.32rem 0;
  border-bottom: 1px #cdced3 solid;
}
.shopcart-con {
  display: block;
  width: 112px;
  height: 112px;
  line-height: 141px;
  background: #e0e0e0;
  border: none;
  -webkit-box-sizing: border-box;
  overflow: hidden;
  border-radius: 4px;
}
.shopcart-con img {
  vertical-align: middle;
  display: inline-block;
  width: 100%;
}
.shopcart-con-right {
  position: relative;
  height: 112px;
  padding-right: 5px;
  padding-left: 5px;
  -webkit-box-flex: 1;
}
.shopcart-con-right h4 {
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: normal;
}
.shopcart-p {
  position: absolute;
  bottom: 0;
  padding-right: 0.6rem;
  width: 100%;
  -webkit-box-sizing: border-box;
}
.money {
  font-size: 20px;
  color: #ff4773;
}
.yuan {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 0.02rem;
}
.num {
  color: #8e8e93;
  float: right;
}
.footer {
  z-index: 50;
  display: -webkit-box;
  width: 100%;
  height: 48px;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  line-height: 48px;
}
#checkall {
  float: left;
  margin-top: 14px;
  display: inline-block;
  width: 18px;
  height: 18.5px;
  margin-left: 10px;
  margin-right: 10px;
  vertical-align: top;
}
.shopcart-com {
  margin-right: 0.2rem;
  color: #8e8e93;
  float: right;
}
.btn {
  background: #ffc1d2 !important;
  display: block;
  width: 35%;
  text-align: center;
  color: #fff;
}
.choose {
  width: 65%;
}
</style>