// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
// import axios from 'axios'

// styles
import 'swiper/css/swiper.css'
import 'styles/reset.css'
// 解决1像素边框的问题
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
// Vue.prototype.axios=axios
// 移动端某些机型click事件延迟300ms执行的问题解决方案
fastClick.attach(document.body)
// vue-swiper
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
