<template>
  <div class="shoplist">
    <section class="dataContent">
      <section class="shopContent">
        <section class="shop_list">
          <section class="goods_group" v-for="a in shop" :key="a.id">
            <router-link :to="'/Starshop/'+a.name">
              <section class="goodslink">
                <section class="goods_img">
                  <section class="van_img">
                    <img :src="a.shopimg" alt />
                  </section>
                </section>
                <section class="goods_intro">
                  <span class="titles">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">{{a.name}}</font>
                    </font>
                  </span>
                </section>
                <section class="goods_price">
                  <em style="width:auto;">
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">￥</font>
                    </font>
                  </em>
                  <span>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">{{a.price}}</font>
                    </font>
                  </span>
                </section>
              </section>
              <section class="goods_user">
                <section class="user_head">
                  <img :src="a.userimg" alt />
                </section>
                <section class="user-name">
                  <span>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">{{a.shopuser}}</font>
                    </font>
                  </span>
                </section>
              </section>
            </router-link>
          </section>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      shop: "",
      name:''
    };
  },
  props:['starname'],
  mounted() {
    // console.log(this.starname,11111111111111)
    axios
      .get(`/shoplist?id=${this.starname}`)
      .then(res => {
        console.log(res);
        this.shop = res.data.titles;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="" scoped>
* {
  padding: 0;
  margin: 0;
  border: 0;
}
.shopContent {
  padding: 0.32rem 0.32rem 1rem 0.32rem;
}
.shoplist {
  width: 100%;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
}
.goods_group {
  margin: 7px;
  box-sizing: border-box;
  /* width: calc(50% - 0.1rem); */
  padding-bottom: 0.15rem;
  box-shadow: 0 0.05rem 0.29rem 0.02rem rgba(0, 0, 0, 0.12);
  background-color: #fff;
}
.goods_img {
  position: relative;
  width: 100%;
}
.van_img {
  display: block;
  position: relative;
}
.van_img img {
  display: inline-block;
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.goods_intro {
  color: #2d2d31;
  width: 100%;
  font-weight: 700;
  word-break: break-all;
  -webkit-box-sizing: border-box;
  font-size: 0.32rem;
  /* line-height: 37.5px; */
  margin-top: 0.5rem;
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  height: 37.5px;
  padding: 0 0.5rem;
  -webkit-box-align: start;
  -webkit-box-pack: justify;
}
.titles {
  /* font-size: 0.26rem; */
  font-weight: 700;
  padding-top: 0.05rem;
}
.goods_price {
  margin-top: 0.15rem;
  /* font-size: 0.28rem; */
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 0.15rem;
  color: #ff4773;
}
em {
  font-weight: 700;
  font-style: normal;
  font-family: Arial, Helvetica, sans-serif;
  margin-right: 0.02rem;
}
.goods_price span {
  font-weight: 700;
  width: 100%;
}
.goods_user {
  padding: 0.2rem 0.15rem 0;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
}
.user_head {
  width: 1rem;
  height: 1rem;
  margin-right: 0.2rem;
  position: relative;
}
.user_head img {
  width: 100%;
  border-radius: 50%;
  vertical-align: middle;
}
.user_name {
  max-width: calc(100% - 0.83rem);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #2d2d31;
  font-size: 0.24rem;
}
</style>