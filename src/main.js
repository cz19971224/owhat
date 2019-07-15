// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueTouch from "vue-touch"
import store from './store/index'
// Vue.use(VueTouch,{name:"v-touch"});
Vue.use(ElementUI);
// Vue.config.productionTip = false
import router from './router/index'

/* eslint-disable no-new */
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  // render: h => h(App),
  components: { App },
  template: '<App/>'
})
