<template>
  <div class="discuss">
    <nav id="nav">
      <section id="navbar">
        <a class="fa" v-on:click="goback">取消</a>
        发评论
        <a class="send" v-on:click="send">发送</a>
      </section>
    </nav>
    <section class="comments">
      <div id="scroller">
        <textarea id="write" v-model="value" placeholder="写评论..." maxlength="200"></textarea>
        <div class="fontMax">
          <span class="cursize">{{value.length}}</span>
          /
          <span class="totalsize">200</span>
        </div>
        <div class="commentImg">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Discuss",
  components: {},
  data() {
    return {
      value: "",
      dialogImageUrl: "",
      dialogVisible: false,
      username: "",
      user: "",
      usersrc: ""
    };
  },
  methods: {
    goback() {
      this.$router.go(-1); //返回上一层
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log(dialogImageUrl)
    },
    send() {
      //   console.log(this.$route.params);
      axios
        .get(`/isLogin`)
        .then(res => {
          console.log(res);
          this.username = res.data.username;
          if (res.data.isLogin == false) {
            this.$router.push({ path: "/login" });
          }
          if (this.value != "" && res.data.isLogin == true) {
            axios
              .get(`/allusers?username=${this.username}`)
              .then(res => {
                console.log(res);
                this.user = res.data.titles[0];
                this.usersrc = res.data.titles[0].usersrc;
                axios
                  .get(
                    `/addcomment?title=${this.$route.params.title}&name=${this.user.name}&namesrc=${this.usersrc}&content=${this.value}`
                  )
                  .then(res => {
                    console.log(res);
                    if (res.data.result == 1) {
                      this.$router.go(-1);
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
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="" scoped>
#nav {
  width: 100%;
  height: 44px;
  display: block;
  margin: 0;
  padding: 0;
}
#navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
  font-size: 16px;
  line-height: 45px;
  color: #323232;
  text-align: center;
  z-index: 1001;
  border-bottom: 1px #e6e6e6 solid;
  background: #fff;
  font-weight: 500;
}
.fa {
  width: 44px;
  height: 44px;
  position: absolute;
  left: 0;
  top: 0;
  outline: none;
  text-decoration: none;
  color: #858585;
  margin: 0;
  padding: 0;
}
.send {
  color: #ff4773;
  position: absolute;
  right: 10px;
  top: 0;
}
.comments {
  height: 613px;
  padding: 10px;
  display: block;
  margin: 0;
}
#scroller {
  margin: 0;
  padding: 0;
}
#write {
  width: 100%;
  min-height: 160px;
  vertical-align: middle;
  font-size: 16px;
  font-family: "Microsoft YaHei", Helvetica;
  border: none;
  background: none;
  outline: none;
  resize: none;
  -moz-appearance: none;
  margin: 0;
  padding: 0;
}
.fontMax {
  height: 18px;
  line-height: 18px;
  text-align: right;
  color: rgba(0, 0, 0, 0.24);
  margin: 0;
  padding: 0;
}
.commentImg {
  margin-top: 10px;
  padding: 0;
}
</style>