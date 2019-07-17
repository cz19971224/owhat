<template>
  <div class="starmodule">
    <aside class="drop_con">
      <section class="container">
        <section id="star_scroll">
          <div class="userid">
            <div class="userid_con">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="star_mess" v-for="s in star2" @click="change(s.name)" :key="s.id">
                    <div class="star-image">
                      <img :src="s.small" alt />
                    </div>
                    <cite>{{s.name}}</cite>
                  </div>
                </div>
              </div>
            </div>
            <div class="focusmore_con">
              <router-link to="/source" class="focusmore">关注管理</router-link>
            </div>
            <div class="drop-close">
              <i class="el-icon-circle-close" @click="clickHandle"></i>
            </div>
          </div>
        </section>
      </section>
    </aside>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Starmodule",
  components: {},
  data() {
    return {
      isshow: false,
      star: "",
      userid: "",
      star2:[]
    };
  },
  methods: {
    clickHandle() {
      // 从子组件向父组件传递数据 通过$emit发射事件实现
      // para1事件名称
      // para2传递的数据
      this.$emit("isshow", this.isshow);
    },
    change(e) {
      console.log(e);
      this.$emit("isshow", this.isshow);
      // this.$emit("name", e);
      this.$emit("name", e);
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
            this.star = res.data.titles;
            for(var i=0;i<this.star.length;i++){
              axios
                .get(`/star?name=${res.data.titles[i].name}`)
                .then(res => {
                  console.log(res);
                  this.star2 = this.star2.concat(res.data.titles);
                  // console.log(this.star2)
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
.drop_con {
  opacity: 1;
  height: 667px;
  background: rgba(0, 0, 0, 0.48);
  position: fixed;
  z-index: 1004 !important;
  top: 0rem;
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
}
.container {
  display: block;
  margin: 0;
  padding: 0;
  height: 100%;
}
#star_scroll {
  height: 100%;
  box-sizing: border-box;
  padding: 64px 0 145px 0;
  display: block;
  margin: 0;
}
.userid {
  height: 100%;
  margin: 0 16px;
  border-radius: 15px;
  background-color: #fff;
  padding-bottom: 67.5px;
  box-sizing: border-box;
  position: relative;
}
.userid_con {
  height: 100%;
  position: relative;
  padding: 0 11px;
  overflow: hidden;
  margin: 0 auto;
  z-index: 1;
  list-style: none;
}
.swiper-wrapper {
  height: 512px;
  align-items: flex-start;
  margin: 0 auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  box-sizing: content-box;
  padding: 0;
}
.swiper-slide {
  height: auto;
  flex-shrink: 0;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
}
.star_mess {
  float: left;
  width: 70px;
  margin: 25px 18.5px 0;
  text-align: center;
  padding: 0;
}
.star-image {
  display: inline-block;
  width: 66px;
  height: 66px;
  padding: 2px;
  box-sizing: border-box;
  margin: 0;
}
.star-image > img {
  width: 100%;
  height: 100%;
  -webkit-border-radius: 50%;
  vertical-align: top;
  display: block;
}
.focusmore_con {
  width: 100%;
  height: 67.5px;
  position: absolute;
  bottom: 0;
  margin: 0;
  padding: 0;
}
.focusmore {
  width: 87px;
  left: 50%;
  margin: 10px -43.5px 0;
  height: 30px;
  line-height: 30px;
  background: #ff4773;
  display: block;
  text-align: center;
  color: #fff;
  position: absolute;
  border-radius: 10px;
  padding: 0;
}
.drop-close {
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  width: 35px;
  height: 35px;
  position: absolute;
  bottom: -50px;
  left: 50%;
  margin-left: -17.5px;
  padding: 0;
}
.drop-close > i {
  font-size: 35px;
  color: white;
}
</style>