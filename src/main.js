import Vue from "vue"
import App from "./App.vue"
// 这个项目没有router.js,不能引引这个，会报错
import router from "./router"
import store from "./store"
// 可以引这个router
// import router from "vue-router"
// 引入css样式
import "./assets/base.css"
import "./assets/index.css"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
