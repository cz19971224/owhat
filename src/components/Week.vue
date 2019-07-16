<template>
  <div class="week">
    <div class="index_tit1">
      <h2 class="big_tit">每周星推</h2>
      <span class="little_tit">邓超元：烫金少年，把耀眼握在手里</span>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="w in week">
          <div class="each_list">
            <div class="relaImg">
              <img
                class="image"
                :src=w.src
                alt
              />
            </div>
            <div>
              <h4 class="img_intro">{{w.title}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Week",
  components: {},
  data() {
    return {
      week:''
    };
  },
  mounted(){
     axios
          .get(`/week`)
          .then(res => {
            console.log(res);
            this.week=res.data.titles
          })
          .catch(error => {
            console.log(error);
          });
  }
};
</script>

<style lang="" scoped>
.index_tit1 {
  text-align: center;
  font-size: 15px;
  padding-top: 14px;
  padding-bottom: 19px;
  background: #fff;
}
.big_tit {
  font-size: 24px;
  font-weight: 600;
  /* margin-bottom: 4.8px; */
  margin: 0 0 4.8px 0;
}
.little_tit {
  text-align: center;
  font-size: 14px;
}
.swiper-container {
  padding: 0 10px;
  /* margin-bottom: 10px; */
  background-color: #fff;
  margin: 0 auto 10px;
  position: relative;
  overflow: hidden;
  list-style: none;
  z-index: 1;
  /* height: 152px; */
}
.swiper-wrapper {
  /* transition-timing-function: ease-out; */
  margin: 0 auto;
  /* transform: translate3d(0,0,0); */
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  overflow: auto;
}
.swiper-slide {
  margin: 0 0 10px 0;
  width: 154px;
  font-size: 14px;
  flex-shrink: 0;
  height: 100%;
  position: relative;
}
.each_list {
  box-shadow: none;
  margin: 0 4.7px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
}
.relaImg {
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  /* height: 92px; */
}
.image {
  list-style: none;
  width: 100%;
vertical-align: top;
display: block;
}
.img_intro {
  font-size: 12px;
  padding-top: 7.6px;
  height: 42px;
  /* line-height: 28px; */
  white-space: pre-wrap;
  word-break: break-all;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  margin: 0;
}
</style>
