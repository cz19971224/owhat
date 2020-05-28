<template>
  <div class="source">
    <nav id="nav">
      <section id="navbar">
        <a class="fa" v-on:click="goback">
          <i class="el-icon-arrow-left"></i>
        </a>
        明星
      </section>
    </nav>
    <section class="container">
      <section class="search_header">
        <div class="search_box">
          <div class="search">
            <i class="el-icon-search"></i>
            <input class="pub_input" v-model="value" type="text" placeholder="搜索明星" />
          </div>
          <span class="cancel" @click="find">搜索</span>
        </div>
      </section>

      <section id="mainpage" v-show="issearch">
        <section id="notLogin">
          <div class="searchError">
            <span>
              <img src="https://m.owhat.cn/src/images/img_omei_obsessed@2x.png" alt />
            </span>
            <p class="info">搜索不到</p>
          </div>
        </section>
        <div class="clear"></div>
      </section>

      <section class="container" v-show="search!=''">
        <section class="list_header">搜索</section>
        <section class="prt">
          <ul id="list">
            <li class="list_each" v-for="s in search">
              <span class="img">
                <img :src="s.small" alt />
              </span>
              <div class="mess">
                <div class="flex">
                  <h2 class="text">{{s.name}}</h2>
                  <div class="item"></div>
                </div>
                <p>粉丝：{{s.fans}}+</p>
              </div>
              <span class="btn">
                <a class="focus red" @click="changehandle(s.name)">关注</a>
              </span>
            </li>
          </ul>
        </section>
      </section>

      <section class="container" v-show="arr!=''">
        <section class="list_header">我的关注</section>
        <section class="prt">
          <ul id="list">
            <li class="list_each" v-for="a in arr">
              <span class="img">
                <img :src="a.small" alt />
              </span>
              <div class="mess">
                <div class="flex">
                  <h2 class="text">{{a.name}}</h2>
                  <div class="item"></div>
                </div>
                <p>粉丝：{{a.fans}}+</p>
              </div>
              <span class="btn">
                <a class="focus" @click="change(a.name)">已关注</a>
              </span>
            </li>
          </ul>
        </section>
      </section>

      <!-- <section class="container" v-show="len=allstar.length">
        <section class="list_header">全部</section>
        <section class="prt">
          <ul id="list">
            <li class="list_each" v-for="a in allstar" >
              <span class="img">
                <img :src="a.small" alt />
              </span>
              <div class="mess">
                <div class="flex">
                  <h2 class="text">{{a.name}}</h2>
                  <div class="item"></div>
                </div>
                <p>粉丝：{{a.fans}}+</p>
              </div>
              <span class="btn">
                <a class="focus red" @click="changehandle(a.name)">关注</a>
              </span>
            </li>
          </ul>
        </section>
      </section>-->
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Source",
  components: {},
  data() {
    return {
      allstar: [],
      lovestar: "",
      islike: "",
      userid: "",
      star: "",
      index: 0,
      arr: [],
      // att: "关注",
      name: "",
      value: "",
      search: "",
      len: "",
      issearch: false
    };
  },
  methods: {
    find() {
      console.log(this.value);
      axios
        .get(`/star?name=${this.value}`)
        .then(res => {
          console.log(res);
          if (res.data.titles != "") {
            this.search = res.data.titles;
            this.value = "";
            this.$router.push({ path: "/source" });
            this.issearch = false;
          }
          if (res.data.titles == "") {
            this.issearch = true;
            this.arr = "";
            // this.$message({
            //   message:'搜索不到',
            //   type: "warning"
            // });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    goback() {
      this.$router.go(-1); //返回上一层
    },
    change(e) {
      this.islike = false;
      this.name != e;
      this.search = "";
      axios
        .get(`/isLogin`)
        .then(res => {
          console.log(res);
          this.userid = res.data.username;
          axios
            .get(`/deletelove?name=${e}&userid=${this.userid}`)
            .then(res => {
              console.log(res);
              // this.unlove = res.data.titles;

              axios
                .get(`/lovestar?userid=${this.userid}`)
                .then(res => {
                  console.log(res);
                  if (res.data.titles != "") {
                    // this.star = res.data.titles;
                    // for (var i = 0; i < this.star.length; i++) {
                    //  this.index++
                    //  const num=this.index-1
                    //  console.log(num)
                    //  console.log(i)
                    axios
                      .get(`/unlove?name=${e}`)
                      .then(res => {
                        console.log(res);
                        console.log(this.arr);
                        this.arr = res.data.titles;
                        // this.arr = this.arr.concat(res.data.titles);
                        // this.index = i;
                        console.log(this.arr);
                      })
                      .catch(error => {
                        console.log(error);
                      });
                    // }
                  }
                  if (res.data.titles == "") {
                    this.arr = "";
                  }
                })
                .catch(error => {
                  console.log(error);
                });
            })

            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
      this.$router.push({ path: "/source" });
    },
    changehandle(e) {
      this.islike = true;
      // this.att = "已关注";
      this.name = e;
      this.search = "";
      axios
        .get(`/isLogin`)
        .then(res => {
          console.log(res);
          this.userid = res.data.username;

          // axios
          //   .get(`/islove?name=${e}`)
          //   .then(res => {
          //     console.log(res);
          //     if (res.data.titles == "") {
          //       axios
          //         .get(`/addlove?name=${e}&userid=${this.userid}`)
          //         .then(res => {
          //           console.log(res);
          //           // this.unlove = res.data.titles;

          //           axios
          //             .get(`/lovestar?userid=${this.userid}`)
          //             .then(res => {
          //               console.log(res);
          //               this.star = res.data.titles;
          //               console.log(this.star.length);
          //               // for (var i = 0; i < this.star.length; i++) {
          //               //  this.index++
          //               //  const num=this.index-1
          //               //  console.log(num)
          //               //  console.log(i)
          //               axios
          //                 .get(`/star?name=${e}`)
          //                 .then(res => {
          //                   console.log(res);
          //                   // this.arr=res.data.titles
          //                   this.arr = this.arr.concat(res.data.titles);
          //                   // this.index = i;
          //                   // console.log(this.arr)
          //                 })
          //                 .catch(error => {
          //                   console.log(error);
          //                 });
          //               // }
          //             })
          //             .catch(error => {
          //               console.log(error);
          //             });
          //         })
          //         .catch(error => {
          //           console.log(error);
          //         });
          //     }
          //     if(res.data.titles!=''){
          //       this.$message({
          //     message:'已关注',
          //     type: "warning"
          //   });
          //     }
          //   })
          //   .catch(error => {
          //     console.log(error);
          //   });

          axios
            .get(`/addlove?name=${e}&userid=${this.userid}`)
            .then(res => {
              console.log(res);
              // this.unlove = res.data.titles;

              axios
                .get(`/lovestar?userid=${this.userid}`)
                .then(res => {
                  console.log(res);
                  this.star = res.data.titles;
                  console.log(this.star.length);
                  // for (var i = 0; i < this.star.length; i++) {
                  //  this.index++
                  //  const num=this.index-1
                  //  console.log(num)
                  //  console.log(i)
                  axios
                    .get(`/star?name=${e}`)
                    .then(res => {
                      console.log(res);
                      // this.arr=res.data.titles
                      this.arr = this.arr.concat(res.data.titles);
                      // this.index = i;
                      // console.log(this.arr)
                    })
                    .catch(error => {
                      console.log(error);
                    });
                  // }
                })
                .catch(error => {
                  console.log(error);
                });
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });

      this.$router.push({ path: "/source" });
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
            this.len = res.data.titles.length;
            console.log(this.len);
            for (var i = 0; i < this.star.length; i++) {
              //  this.index++
              //  const num=this.index-1
              //  console.log(num)
              //  console.log(i)
              // this.name=res.data.titles[i].name
              // console.log(res.data.titles[i].name)
              axios
                .get(`/star?name=${res.data.titles[i].name}`)
                .then(res => {
                  console.log(res);
                  this.arr = this.arr.concat(res.data.titles);
                  // this.index = i;
                  // console.log(this.arr)
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
    axios
      .get(`/allstars`)
      .then(res => {
        console.log(res);
        this.allstar = res.data.titles;
        // console.log(this.len)
      })
      .catch(error => {
        console.log(error);
      });
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
.container {
  display: block;
  margin: 0;
  padding: 0;
}
.search_header {
  height: 40px;
  background-color: #fff;
  display: block;
  margin: 0;
  padding: 0;
}
.search_box {
  display: -webkit-box;
  position: fixed;
  left: 0;
  text-align: center;
  height: 41px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px #cdced3 solid;
  z-index: 1;
  margin: 0;
  padding: 0;
}
.search {
  margin: 5px 0 0 15px;
  height: 30px;
  -webkit-box-flex: 1;
  border-radius: 20px;
  display: -webkit-box;
  padding: 0;
  background: #f1f1f2;
}
.search > i {
  display: block;
  width: 13px;
  height: 15px;
  margin: 8px 7px 0 10px;
  vertical-align: middle;
  font-style: normal;
}
.pub_input {
  display: block;
  -webkit-box-flex: 1;
  font-size: 14px;
  height: 20px;
  padding: 4.5px 0;
  width: 100%;
  line-height: 20px;
  color: #323232;
  vertical-align: middle;
  font-family: "Microsoft YaHei", Helvetica;
  border: none;
  background: none;
  outline: none;
  resize: none;
  -moz-appearance: none;
  margin: 0;
}
.cancel {
  line-height: 40px;
  display: block;
  font-size: 18px;
  font-weight: normal;
  margin: 0 12px;
  color: #2d2d31;
}
.list_header {
  opacity: 1;
  display: block;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.64);
  color: #8e8e93;
  padding: 0 15px;
  font-size: 12px;
  line-height: 24px;
  margin: 0;
}
.prt {
  padding: 0 15px !important;
  background-color: #fff;
  display: block;
  margin: 0;
}
#list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.list_each {
  display: -webkit-box;
  border-bottom: 1px #cdced3 solid;
  padding: 12px 0;
  list-style: none;
  margin: 0;
}
.img {
  display: inline-block;
  width: 48px;
  height: 48px;
  position: relative;
}
.img > img {
  border-radius: 50%;
  width: 100%;
  vertical-align: top;
  display: block;
}
.mess {
  -webkit-box-flex: 1;
  margin: 0 12px;
  padding: 0;
}
.flex {
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0;
}
.text {
  padding: 0;
  font-size: 16px;
  line-height: 25px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: normal;
  margin: 0;
}
.item {
  margin-top: 5px;
  height: 13px;
  -webkit-box-flex: 1;
  flex: 1;
  padding: 0;
}
.mess p {
  font-size: 12px;
  margin: 0;
  line-height: 14px;
  color: #8e8e93;
  padding: 0;
}
.btn {
  display: inline-block;
  width: 62px;
  margin-top: 10px;
  text-align: center;
}
.focus {
  outline: none;
  text-decoration: none;
  display: inline-block;
  background-color: #cdced3;
  color: #fff;
  font-weight: normal;
  font-size: 14px;
  width: 62px;
  height: 24px;
  border-radius: 20px;
  line-height: 24px;
  text-align: center;
  margin: 0;
  padding: 0;
}
.red {
  background-color: #ff4773 !important;
}

#mainpage {
  display: block;
  margin: 0;
  padding: 0;
  /* height: 100%;
  width: 100%; */
}
.clear {
  clear: both;
}
#notLogin {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #fff;
  /* z-index: 1004; */
}
.searchError {
  color: #8e8e93;
  width: 100%;
  text-align: center;
  font-size: 14px;
  position: absolute;
  top: 25%;
  margin: 0;
  padding: 0;
}
.searchError > span {
  display: inline-block;
  width: 140px;
  height: auto;
}
.searchError > span > img {
  width: 100%;
  vertical-align: top;
  display: block;
}
.info {
  margin: 21px 0 0 0;
  padding: 0 15px;
  font-size: 14px;
  text-align: center;
  color: #8e8e8e;
}
.info > span {
  width: 100%;
  font-size: 14px;
  margin: 6px 0 0 0;
  display: block;
  text-align: center;
  color: #8e8e93;
}
/* .button {
  display: inline-block;
  line-height: 41px;
  font-weight: 600;
  width: 183px;
  height: 41px;
  font-size: 20px;
  margin: 24px 0 0 0;
  padding: 0;
  border: 1px rgba(255, 88, 104, 0.48) solid !important;
  color: #ff4773 !important;
  border-radius: 20px;
  outline: none;
  text-decoration: none;
} */
/* .red {
  color: #ff4773 !important;
} */
</style>