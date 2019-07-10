<template>
  <div class="attention">
    <div class="block">
      <span class="demonstration"></span>
      <el-carousel height="150px">
        <el-carousel-item>
          <img
            src="https://qimage.owhat.cn/prod/recommendmodule/notice/image/1562676491271.jpg"
            alt
          />
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="https://qimage.owhat.cn/prod/recommendmodule/notice/image/1562663658744.jpg"
            alt
          />
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="https://qimage.owhat.cn/prod/recommendmodule/notice/image/1562659334486.jpg"
            alt
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Attention",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  vertical-align: top;
  display: block;
}
</style>